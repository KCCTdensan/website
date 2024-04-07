import { getArticle } from "@/lib/.server/articles";
import { extendMeta } from "@/lib/meta";
import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/router";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const [entrypoint, ...path] = (params["*"] || "/")
    .split("/")
    .filter((a) => a.length);
  const slug = path.join("/");

  const response = await getArticle(entrypoint);

  const article = response.data.find(
    (article) =>
      article.slug === slug ||
      article.slug === `${slug}/index` ||
      (!slug && article.slug === "index"),
  );

  if (article === undefined)
    throw new Response(null, {
      status: 404,
      statusText: "Could not find entry",
    });

  return article;
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

/*
export function ErrorBoundary() {
  const error = useRouteError();
  const routeError = isRouteErrorResponse(error) ? error : null;

  if (routeError === null)
    return (
      <>
        <h1>Error</h1>
        <p>
          {error instanceof Error
            ? error.message
            : "よくわからないエラーが発生しました。"}
        </p>
      </>
    );

  return (
    <>
      <h1>
        <pre>
          <code>
            <span className="red">error:</span> {routeError.statusText}x |
            static_assert(
            <span className="red">status != {routeError.status}</span>
            ); | <span className="red">~~~~~~~^~~~~~</span>
          </code>
        </pre>
      </h1>
      <h1>Error</h1>
      <p>{JSON.stringify(error)}</p>
    </>
  );
}
 */

export default function Page() {
  const { body } = useLoaderData<typeof loader>();

  return (
    <article
      // biome-ignore lint/security/noDangerouslySetInnerHtml: This is a remote content by trusted API endpoint
      dangerouslySetInnerHTML={{
        __html: body,
      }}
    />
  );
}
