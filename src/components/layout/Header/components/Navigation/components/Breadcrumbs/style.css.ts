import { styled } from "styled-vanilla-extract/qwik";

export const BreadcumbsWrapper = styled.ul`
  display: flex;
  margin: 0;
`;

export const Breadcrumb = styled.li`
  ${BreadcumbsWrapper} &:not(:first-child) {
    margin-left: 0.1em;
  }
`;
