import { styled } from "styled-vanilla-extract/qwik";

export const NavigationLinksWrapper = styled.ul`
  display: flex;
  margin: 0;
`;

export const NavigationLink = styled.li`
  ${NavigationLinksWrapper} &:not(:last-child)::after {
    // 隣接セレクタだと折り返しが厳しい
    margin-right: 1em;
    content: "";
  }
`;
