import { component$ } from "@builder.io/qwik";

import { CopyrightItem, CopyrightWrapper } from "./style.css";

export default component$(() => {
  const year = new Date().getFullYear();

  return (
    <CopyrightWrapper>
      <CopyrightItem>&copy; 1974-{year} - Todos os direitos reservados</CopyrightItem>
      <CopyrightItem>KCCTdensan</CopyrightItem>
      <CopyrightItem>神戸高専電算部</CopyrightItem>
    </CopyrightWrapper>
  );
});
