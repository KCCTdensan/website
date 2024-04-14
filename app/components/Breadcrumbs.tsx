import { Link, type UIMatch, useMatches } from "@remix-run/react";
import { flex } from "@styles/patterns";
import type { ReactNode } from "react";

export type BreadcrumbsHandle = {
  breadcrumb: (
    match: ReturnType<typeof useMatches>[number],
    active: boolean,
  ) => ReactNode | ReactNode[];
};

export const Breadcrumbs = () => {
  const matches = useMatches() as UIMatch<unknown, BreadcrumbsHandle>[];
  const breadcrumbs = matches.filter((match) => match.handle?.breadcrumb);

  return (
    <ol
      className={flex({
        "& a": {
          color: "header.nav.text",
        },
      })}
    >
      <li>{breadcrumbs.length === 0 ? <p>/</p> : <Link to={"/"}>/</Link>}</li>
      {breadcrumbs.map((match, index) => {
        const breadcrumb = match.handle.breadcrumb(
          match,
          index === breadcrumbs.length - 1,
        );

        if (Array.isArray(breadcrumb)) {
          return breadcrumb;
        }

        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static calculation
          <li key={index}>{breadcrumb}</li>
        );
      })}
    </ol>
  );
};
