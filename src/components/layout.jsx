import React from "react"
import Twemoji from "react-twemoji"

import "./global.scss"
import * as style from "./style.module.scss"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, Wide=false }) => {
  return (
    <Twemoji className={style.fullheight}>
      <Header />
      <main
        className={Wide ? style.widecontainer : style.container}
      >{children}</main>
      <Footer />
    </Twemoji>
  )
}

export default Layout
