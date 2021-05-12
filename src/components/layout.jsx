import React from "react"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import "./global.scss"

import Header from "./header"
import Footer from "./footer"

export default function Layout(props) {
  const breakpoints = useBreakpoint()

  const FullHeight = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `
  const Container = styled.main`
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
      {
        breakpoints.pc
        ? <PcContainer>{props.children}</PcContainer>
        : null
      }
      {
        breakpoints.tab
        ? <TabContainer>{props.children}</TabContainer>
        : null
      }
      {
        breakpoints.mobile
        ? <MobileContainer>{props.children}</MobileContainer>
        : null
      }
      <Footer />
    </FullHeight>
  )
}
