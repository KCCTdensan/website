import { InternalLink } from "@/components/InternalLink";
import { Recommends } from "@/components/Recommends";
import type { BreadcrumbsHandle } from "@/components/layout/header/Breadcrumbs";
import { getArticle } from "@/lib/.server/articles";
import { extendMeta } from "@/lib/meta";
import { type SingleRecommend, getRecommends } from "@/lib/recommends";
import { Result } from "@/lib/util/result";
import { json } from "@remix-run/node";
import {
  Link,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/router";
import { css, cx } from "@styles/css";
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
      const basePaths = paths.slice(0, index);
      const fullPath = `${basePaths.join("/")}/${path}`;
      const active = index === paths.length - 1;

      if (active) {
        return <p key={fullPath}>{path}</p>;
      }

      return (
        <Link key={fullPath} to={`/${paths.slice(0, index + 1).join("/")}/`}>
          {path}/
        </Link>
      );
    });
  },
};

export type ErrorData = {
  recommends: SingleRecommend[];
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
            } satisfies ErrorData,
            {
              status: 404,
              statusText: "Could not find entry",
            },
          );
        }
        const meta = {
          authors: data.author,
          date: data.date,
          dateUpd: data.dateUpd,
        };

        return json({
          data,
          meta,
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
            } satisfies ErrorData,
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

  const article = data.data;

  const description = article.description || `${article.body.slice(0, 100)}...`;

  return [
    {
      title: article.title ? `${article.title} :: d3bu.net` : "d3bu.net",
    },
    {
      property: "og:title",
      content: article.title || "d3bu.net",
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
      content: article.noRobots ? "noindex, nofollow" : "index, follow",
    },
    {
      name: "author",
      content: article.author || "KCCTdensan",
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

  const { recommends } = routeError.data as ErrorData;

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
        <Recommends recommends={recommends} />
      </>
    );
  }

  return null;
}

export default function Page() {
  const { data: article } = useLoaderData<typeof loader>();

  return (
    <article>
      {parseHtml(article.body, {
        replace: (domNode) => {
          if (domNode instanceof Element) {
            if (
              domNode.name === "a" &&
              !domNode.attribs.href.startsWith("http") &&
              !domNode.attribs.href.includes("/old/")
            ) {
              const props = attributesToProps(domNode.attribs);

              return (
                <InternalLink {...props} to={domNode.attribs.href}>
                  {domToReact(domNode.children as DOMNode[])}
                </InternalLink>
              );
            }

            if (domNode.name === "img") {
              domNode.attribs.class = cx(
                domNode.attribs.class,
                css({
                  maxH: "360px",
                  mx: "auto",
                }),
              );
            }
          }

          return domNode;
        },
      })}
    </article>
  );
}
