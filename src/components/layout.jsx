import React from "react"
import Twemoji from "react-twemoji"

import "../styles/global.scss"
import * as layoutStyle from "../styles/layout.scss"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, Wide }) => {
  return (
    <Twemoji className={layoutStyle.fullheight}>
      <Header />
      <main className={layoutStyle.container}>{children}</main>
      <Footer />
    </Twemoji>
  )
}

export default Layout
