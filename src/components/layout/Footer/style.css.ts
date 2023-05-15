import { styled } from "styled-vanilla-extract/qwik";

import { mqUpto } from "~/styles/responsive";

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: auto 1fr auto;
  position: relative;
  margin: $l-section-margin;
  justify-content: space-between;

  @media ${mqUpto("md")} {
    margin-top: auto;
  }
`;

export const IconLinks = styled.div`
  display: flex;
  justify-content: center;
`;
