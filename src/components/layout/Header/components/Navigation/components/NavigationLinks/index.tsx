import { component$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";

import { InnerNavigationLink, ActiveInnerNavigationLink } from "../../style.css";

import { NavigationLink, NavigationLinksWrapper } from "./style.css";

import { usePathnameList } from "~/hooks/location";

export default component$(() => {
  const [pathname] = usePathnameList();
  const { menu } = useContent();

  const itemsToRender = menu?.items
    // FIXME: こういうhackyなツリー構造のアクセスをやめたい
    ?.at(0) // Navigation
    ?.items?.flatMap((item, i) => {
      // Place recursive elements to the same level with flatMap
      if (item.items) {
        if (item.text !== "External Links") {
          throw new Error("Only External Links can have sub-items");
        }

        return item.items.map((item, j) => (
          <InnerNavigationLink key={`${i}_${j}`} href={item.href} target="_blank" rel="noreferrer">
            {item.text}
          </InnerNavigationLink>
        ));
      }

      if (!item.href || pathname === item.href) {
        return <ActiveInnerNavigationLink key={i}>{item.text}</ActiveInnerNavigationLink>;
      }

      return (
        <InnerNavigationLink href={item.href} key={i}>
          {item.text}
        </InnerNavigationLink>
      );
    })
    .map((item, i) => <NavigationLink key={i}>{item}</NavigationLink>);

  return (
    <>
      <span>&gt; ls /</span>
      <NavigationLinksWrapper>{itemsToRender}</NavigationLinksWrapper>
    </>
  );
});
