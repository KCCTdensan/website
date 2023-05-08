import { Slot, component$ } from "@builder.io/qwik";

import { StyledSmallIcon } from "./style.css";

export interface SmallIconProps {
  href: string;
}

export default component$<SmallIconProps>(({ href }) => (
  <StyledSmallIcon href={href} target="_blank" rel="noreferrer">
    <Slot />
  </StyledSmallIcon>
));
