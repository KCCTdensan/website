import React from "react"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

export default function Footer(props) {
  const breakpoints = useBreakpoint()

  const StyledFooter = styled.footer`
    margin-top: ${breakpoints.sm ? "11px" : "42px"};
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #ddd;

    a {
      outline: none;
    }
  `
  const IconLinks = styled.div`
    margin-top: 4px;
    img {
      height: 32px;
      padding: 8px;
    }
  `
  const CopyRight = styled.small`
    margin-bottom: 4px;
    display: inline-block;
    color: #444;
    font-weight: bold;
  `

  return (
    <StyledFooter>
      <IconLinks>
        <a href="https://twitter.com/kcct_densan" target="_blank" rel="noreferrer">
          <img src="/assets/icons/twitter.png" />
        </a>
        |
        <a href="https://github.com/KCCTdensan" target="_blank" rel="noreferrer">
          <img src="/assets/icons/github.png" />
        </a>
      </IconLinks>
      <CopyRight>&copy; 1974-{new Date().getFullYear()} KCCT 電算部</CopyRight>
    </StyledFooter>
  )
}
