import { styled } from "styled-vanilla-extract/qwik";

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: auto 1fr auto;
  position: relative;
  margin: $l-section-margin;
  justify-content: space-between;

  @include mqUp(md) {
    margin-top: auto;
  }
`;

export const IconLinks = styled.div`
  display: flex;
  justify-content: center;
`;
