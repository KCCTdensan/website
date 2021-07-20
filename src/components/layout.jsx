import React from "react"
import Twemoji from "react-twemoji"

import "../styles/global/global.scss"
import * as style from "../styles/layout.module.scss"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, Wide }) => {
  return (
    <Twemoji className={style.fullheight}>
      <Header />
      <main className={style.container}>{children}</main>
      <Footer />
    </Twemoji>
  )
}

export default Layout
