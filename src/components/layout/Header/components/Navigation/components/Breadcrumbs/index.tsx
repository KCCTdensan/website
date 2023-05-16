import { component$ } from "@builder.io/qwik";

import { ActiveInnerNavigationLink, InnerNavigationLink } from "../../style.css";

import { BreadcumbsWrapper } from "./style.css";

import { usePathnameList } from "~/hooks/location";

export default component$(() => {
  const [_, pathnames] = usePathnameList();

  return (
    <>
      <span>&gt; pwd</span>
      <BreadcumbsWrapper>
        <InnerNavigationLink href="/">/</InnerNavigationLink>
        {pathnames.map((pathname, i, array) => {
          if (i === array.length - 1) {
            return (
              <>
                {array.length !== 1 && <span>/</span>}
                <ActiveInnerNavigationLink key={i}>{pathname}</ActiveInnerNavigationLink>
              </>
            );
          }

          const href = `/${pathnames.slice(0, i === 0 ? 1 : -i).join("/")}`;

          if (i !== 0) {
            return (
              <>
                <span>/</span>
                <InnerNavigationLink href={href} key={i}>
                  {pathname}
                </InnerNavigationLink>
              </>
            );
          }

          return (
            <InnerNavigationLink href={href} key={i}>
              {pathname}
            </InnerNavigationLink>
          );
        })}
        {pathnames.length !== 0 && <span>/</span>}
      </BreadcumbsWrapper>
    </>
  );
});
