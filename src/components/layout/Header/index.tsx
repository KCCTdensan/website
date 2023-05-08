import { Slot, component$, useContext } from "@builder.io/qwik";

import { KonamiContext } from "../../../contexts/konami";

import {
  HeaderLogoLink,
  HeaderLogoArea,
  HeaderWrapper,
  HeaderLogoIcon,
  HeaderTextItems,
  HeaderTextItem,
  PackageInfo,
} from "./style.css";

import { gamingClass } from "~/styles/helpers.css";

export default component$(() => {
  const konamiState = useContext(KonamiContext);

  return (
    <HeaderWrapper class={konamiState.konami ? gamingClass : ""}>
      <HeaderLogoArea>
        <HeaderLogoLink href="/">
          <HeaderLogoIcon src="/icon.png" alt="Logo" />
          <HeaderTextItems>
            <HeaderTextItem class={konamiState.z ? "z" : ""}>神戸</HeaderTextItem>
            <HeaderTextItem>高専</HeaderTextItem>
            <HeaderTextItem>電算部</HeaderTextItem>
          </HeaderTextItems>
        </HeaderLogoLink>
        <PackageInfo>
          <span>/api/package.json</span>
          <span>
            {JSON.stringify({
              // Uses vite define replacement
              name: APP_NAME,
              version: APP_VERSION,
            })}
          </span>
        </PackageInfo>
      </HeaderLogoArea>
      <Slot />
    </HeaderWrapper>
  );
});
