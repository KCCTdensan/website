import { component$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";

import { NavigationLinkWrapper } from "./style.css";

import { usePathnameList } from "~/hooks/location";

export default component$(() => {
  const pathnames = usePathnameList();
  const { menu } = useContent();

  return <NavigationLinkWrapper>{JSON.stringify(menu)}</NavigationLinkWrapper>;
});
