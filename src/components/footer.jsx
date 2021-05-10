import React from "react"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

export default function Footer(props) {
  const breakpoints = useBreakpoint()

  const StyledFooter = styled.footer`
    height: 42px;
    margin-top: ${breakpoints.sm ? "11px" : "42px"};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #ddd;
    box-shadow: 0 -11px 24px #f8f8f8;
  `
  const CopyRight = styled.small`
    display: inline-block;
    color: #666;
    font-weight: bold;
  `

  return (
    <StyledFooter>
      <div />
      <CopyRight>&copy; 1974-{new Date().getFullYear()} KCCT 電算部</CopyRight>
      <div />
    </StyledFooter>
  )
}
