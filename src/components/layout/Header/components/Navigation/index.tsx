import { component$, useContext, useStyles$ } from "@builder.io/qwik";

import Breadcrumbs from "./components/Breadcrumbs";
import NavigationLinks from "./components/NavigationLinks";
import style, { NavigationWrapper, navigationZClass } from "./style.css";

import { KonamiContext } from "~/contexts/konami";
import { gamingClass } from "~/styles/helpers.css";

export default component$(() => {
  useStyles$(style);

  const konamiState = useContext(KonamiContext);

  return (
    <NavigationWrapper class={{ [gamingClass]: konamiState.konami, [navigationZClass]: konamiState.z }}>
      <NavigationLinks />
      <Breadcrumbs />
    </NavigationWrapper>
  );
});
