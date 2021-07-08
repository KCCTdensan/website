import React from "react"
import styled from "styled-components"
import Twemoji from "react-twemoji"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import "./global.scss"

import Header from "./header"
import Footer from "./footer"

export default function Layout({ children, Wide }) {
  const breakpoints = useBreakpoint()

  const FullHeight = styled(Twemoji)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    img.emoji {
      height: 1em;
      width: 1em;
      margin: 0 .05em 0 .1em;
      vertical-align: -0.1em;
    }
  `
  const Container = styled.main`
    width: 84%;
    margin: 0 auto auto;

    animation: fadeIn 0.5s ease 0s 1 normal;
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @-webkit-keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    a {
      outline: none;
    }
  `
  const PcContainer = styled(Container)`
    width: 960px;
  `
  const TabContainer = styled(Container)`
    width: 84%;
  `
  const MobileContainer = styled(Container)`
    width: 92%;
  `

  return (
    <FullHeight>
      <Header />
      {(()=>{
        switch (true) {
          case breakpoints.mobile:
            return <MobileContainer>{children}</MobileContainer>

          case Wide:
          case breakpoints.tab:
            return <TabContainer>{children}</TabContainer>

          case breakpoints.pc:
            return <PcContainer>{children}</PcContainer>

          default: return null
        }
      })()}
      <Footer />
    </FullHeight>
  )
}
