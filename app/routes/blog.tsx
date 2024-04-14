import type { BreadcrumbsHandle } from "@/components/Breadcrumbs";
import { extendMeta } from "@/features/articles";
import { getArticle } from "@/features/articles/articles.server";
import { Result } from "@/lib/result";
import { formatDateYMD } from "@/lib/utils";
import { Link, useLoaderData } from "@remix-run/react";

export const handle: BreadcrumbsHandle = {
  breadcrumb: (_matches, active) =>
    active ? <p>blog/</p> : <Link to={"/blog"}>blog/</Link>,
};

export const loader = async () =>
  getArticle("blog").then((r) => Result.unwrap(r));

export const meta = extendMeta<typeof loader>(() => [
  {
    title: "電算「部」log",
  },
  {
    property: "og:title",
    content: "電算「部」log",
  },
  {
    name: "description",
    content: "神戸高専電算部の活動日誌（ブログ）です．",
  },
  {
    property: "og:description",
    content: "神戸高専電算部の活動日誌（ブログ）です．",
  },
]);

export default function Page() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>電算「部」log</h1>
      {data.map((article) => (
        <article key={article.slug}>
          {article.date ? `${formatDateYMD(new Date(article.date))} - ` : ""}
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          <span className="inline-block">
            by {article.author || "KCCTdensan"}
          </span>
        </article>
      ))}
    </>
  );
}
