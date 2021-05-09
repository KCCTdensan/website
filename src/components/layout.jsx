import React from "react"
import styled from "styled-components"

import "reseter.css/css/reseter.min.css"

import Header from "./header"
import Footer from "./footer"

export default function Layout(props) {

  const FullHeight = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `
  const Container = styled.main`
    width: 70%;
    margin: 42px auto auto;
  `

  return (
    <FullHeight>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </FullHeight>
  )
}
