import React from "react"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

function FooterContents() {
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
    <>
      <IconLinks>
        <a href="https://twitter.com/kcct_densan" target="_blank" rel="noreferrer">
          <img src="/assets/icons/twitter.png" alt="Twitter logo" />
        </a>
        |
        <a href="https://github.com/KCCTdensan" target="_blank" rel="noreferrer">
          <img src="/assets/icons/github.png" alt="GitHub logo" />
        </a>
      </IconLinks>
      <CopyRight>&copy; 1974-{new Date().getFullYear()} KCCT 電算部</CopyRight>
    </>
  )
}

export default function Footer(props) {
  const breakpoints = useBreakpoint()

  const StyledFooter = styled.footer`
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #ddd;
    box-shadow: 0 -11px 24px #fafafa;
    font-feature-settings: "palt";

    a {
      outline: none;
    }
  `
  const PcFooter = styled(StyledFooter)`
    margin-top: 38px;
  `
  const MobileFooter = styled(StyledFooter)`
    margin-top; 11px;
  `

  return (
    <>
      {
        breakpoints.pc || breakpoints.tab
        ? <PcFooter><FooterContents /></PcFooter>
        : null
      }
      {
        breakpoints.mobile
        ? <MobileFooter><FooterContents /></MobileFooter>
        : null
      }
    </>
  )
}
