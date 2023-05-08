import { styled } from "styled-vanilla-extract/qwik";

export const CopyrightWrapper = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;
  color: $c-dimText;
  flex-wrap: wrap;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const CopyrightItem = styled.span`
  display: inline-block;
  margin: 0 0.25rem;
`;
