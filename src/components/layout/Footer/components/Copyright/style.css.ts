import { styled } from "styled-vanilla-extract/qwik";

import { vars } from "~/styles/variables.css";

export const CopyrightWrapper = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${vars.color.dimText};
  flex-wrap: wrap;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const CopyrightItem = styled.span`
  display: inline-block;
  margin: 0 0.25rem;
`;
