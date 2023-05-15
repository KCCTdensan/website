import { component$, useContext, useStyles$ } from "@builder.io/qwik";

import style, { NavigationWrapper, navigationZClass } from "./style.css";

import { KonamiContext } from "~/contexts/konami";
import { gamingClass } from "~/styles/helpers.css";

export default component$(() => {
  useStyles$(style);

  const konamiState = useContext(KonamiContext);

  return (
    <NavigationWrapper class={{ [gamingClass]: konamiState.konami, [navigationZClass]: konamiState.z }}>
      <span>&gt; ls /</span>
    </NavigationWrapper>
  );
});
