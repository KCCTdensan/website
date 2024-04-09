import { Recommends } from "@/components/Recommends";
import type { BreadcrumbsHandle } from "@/components/layout/header/Breadcrumbs";
import { getArticle } from "@/lib/.server/articles";
import { extendMeta } from "@/lib/meta";
import { getRecommends } from "@/lib/recommends";
import { Result } from "@/lib/util/result";
import { json } from "@remix-run/node";
import {
  Link,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/router";
import { css } from "@styles/css";
import parseHtml, {
  attributesToProps,
  type DOMNode,
  domToReact,
  Element,
} from "html-react-parser";

export const handle: BreadcrumbsHandle = {
  breadcrumb: (matches, _active) => {
    const paths = matches.pathname
      .split("/")
      .slice(1)
      .filter((a) => a.length);

    if (paths.length === 1) {
      return <p>{paths[0]}/</p>;
    }

    return paths.map((path, index) => {
      const active = index === paths.length - 1;

      if (active) {
        return <p>{path}</p>;
      }

      return (
        <Link to={`/${paths.slice(0, index + 1).join("/")}/`}>{path}/</Link>
      );
    });
  },
};

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const pathname = "*" in params ? `/${params["*"]}` : "/";
  const [entrypoint, ...path] = pathname.split("/").filter((a) => a.length);

  const slug = path.join("/");
  const baseUrl = new URL(request.url).origin;

  return Result.unwrapAsync(
    Result.mapBoth(
      await getArticle(entrypoint),
      ({ data: dataArray }) => {
        const data = dataArray.find(
          (article) =>
            article.slug === slug ||
            article.slug === `${slug}/index` ||
            (!slug && article.slug === "index"),
        );

        if (!data) {
          throw json(
            {
              recommends: [],
            },
            {
              status: 404,
              statusText: "Could not find entry",
            },
          );
        }

        return json({
          ...data,
          body: data.body,
        });
      },
      async (response) => {
        if (response.status === 404) {
          /* /old/** middleware doesn't work in Vite dev server */
          const recommends = import.meta.env.DEV
            ? []
            : await getRecommends(baseUrl, pathname);

          return json(
            {
              recommends,
            },
            {
              status: 404,
              statusText: "Could not find entry",
            },
          );
        }

        return response;
      },
    ),
  );
};

export const meta = extendMeta<typeof loader>(({ data }) => {
  if (!data) return [{ title: "d3bu.net" }];

  const description = data.description || `${data.body.slice(0, 100)}...`;

  return [
    {
      title: data.title ? `${data.title} :: d3bu.net` : "d3bu.net",
    },
    {
      property: "og:title",
      content: data.title || "d3bu.net",
    },
    {
      property: "og:description",
      content: description,
    },
    {
      name: "description",
      content: description,
    },
    {
      name: "robots",
      content: data.noRobots ? "noindex, nofollow" : "index, follow",
    },
    {
      name: "author",
      content: data.author || "KCCTdensan",
    },
  ];
});

export function ErrorBoundary() {
  const error = useRouteError();
  const routeError = isRouteErrorResponse(error) ? error : null;

  if (routeError === null)
    return (
      <>
        <h1>
          {/* biome-ignore format: The pre tag should not be formatted */}
          <pre className={css({
            bg: "transparent",
            fontWeight: "normal"
          })}>
            <span
              className={css({
                color: "red",
              })}
            >
              error:
            </span> {error instanceof Error ? error.name : "unknown error"}
          </pre>
        </h1>
        <p>
          {error instanceof Error
            ? error.message
            : "よくわからないエラーが発生しました。"}
        </p>
      </>
    );

  if (routeError.status === 404) {
    return (
      <>
        <h1>
          {/* biome-ignore format: The pre tag should not be formatted */}
          <pre className={css({
            bg: "transparent",
            fontWeight: "normal"
          })}>
            <span
              className={css({
                color: "red",
              })}
            >
              error:
            </span> {routeError.statusText}{"\n"}
              {"  "}x | static_assert(<span className={css({ color: "red" })}>
              status != {routeError.status}
            </span>);{"\n"}
              {"    "}|               <span className={css({ color: "red" })}>
              ~~~~~~~^~~~~~
            </span>
          </pre>
        </h1>
        <p>お探しのページは見つかりませんでした……ごめんなさい………</p>
        <Recommends recommends={routeError.data.recommends} />
      </>
    );
  }

  return null;
}

export default function Page() {
  const { body } = useLoaderData<typeof loader>();

  return (
    <article>
      {parseHtml(body, {
        replace: (domNode) => {
          if (
            domNode instanceof Element &&
            domNode.name === "a" &&
            !domNode.attribs.href.startsWith("http") &&
            !domNode.attribs.href.includes("/old/")
          ) {
            const props = attributesToProps(domNode.attribs);

            return (
              <Link {...props} to={domNode.attribs.href}>
                {domToReact(domNode.children as DOMNode[])}
              </Link>
            );
          }

          return domNode;
        },
      })}
    </article>
  );
}
