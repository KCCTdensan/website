import type { BreadcrumbsHandle } from "@/components/layout/header/Breadcrumbs";
import { getArticle } from "@/lib/.server/articles";
import { formatDateYMD } from "@/lib/date";
import { extendMeta } from "@/lib/meta";
import { Result } from "@/lib/util/result";
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
          <a href={`/blog/${article.slug}`}>{article.title}</a>
          <span className="inline-block">
            by {article.author || "KCCTdensan"}
          </span>
        </article>
      ))}
    </>
  );
}
