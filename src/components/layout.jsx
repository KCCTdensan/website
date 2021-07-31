import React, { useState, useRef }  from "react"
import Twemoji from "react-twemoji"
import { Link } from "gatsby"

import "./global.scss"
import * as style from "./style.module.scss"


// Header

export const Header = () => {
  const linksMenuRef = useRef()
  const linksMenuHamburger = useRef()
  const LinksContents = () => (
    <>
      <div className={style.links_link}><Link to="/">トップページ</Link></div>
      <div className={style.links_link}><Link to="/activities">活動内容</Link></div>
      <div className={style.links_link}><Link to="/works">作品</Link></div>
      {/*<div className={style.links_link}><a href="https://blog.d3bu.net">ブログ</a></div>*/}
      <div className={style.links_link}><Link to="/joinus">入部希望の方へ</Link></div>
      <div className={style.links_link}><a href="http://www.kobe-kosen.ac.jp" target="_blank" rel="noreferrer">学校ホームページ</a></div>
    </>
  )

  return (
    <header>
      <div className={style.header_main}>
        <Link to="/" className={style.logo_link}>
          {/*<LogoImg src="../assets/logo.png" alt="Logo" />*/}
          <img src="/assets/logo.png" alt="Logo" className={style.logo_img} />
        </Link>
        <div className={style.links_desktop}><LinksContents /></div>
        <button
          onClick={() => {
            linksMenuRef.current.classList.toggle(style.links_menu_open)
            linksMenuRef.current.classList.toggle(style.links_menu_close)
            linksMenuHamburger.current.classList.toggle(style.open)
            linksMenuHamburger.current.classList.toggle(style.close)
          }}
          className={style.links_menu_hamburger}
        >
          <span className={style.links_menu_hamburger__line + ' ' + style.close} ref={linksMenuHamburger} />
        </button>
      </div>
      <div
        className={style.links_menu + ' ' + style.links_menu_close}
        ref={linksMenuRef}
      >
        <LinksContents />
      </div>
    </header>
  )
}


// Footer

const Footer = () => {
  return (
    <footer>
      <div className={style.iconlinks}>
        <a href="https://twitter.com/kcct_densan" target="_blank" rel="noreferrer">
          <img src="/assets/icons/twitter.svg" alt="Twitter logo" />
        </a>
        <a href="https://github.com/KCCTdensan" target="_blank" rel="noreferrer">
          <img src="/assets/icons/github.svg" alt="GitHub logo" />
        </a>
      </div>
      <small className={style.copyright}>&copy; 1974-{new Date().getFullYear()} KCCT 電算部</small>
    </footer>
  )
}


// Layout

const Layout = ({ children, Wide=false }) => {
  return (
    <Twemoji className={style.fullheight}>
      <Header />
      <main
        className={style.container + (Wide ? ` ${style.wide}` : '')}
      >{children}</main>
      <Footer />
    </Twemoji>
  )
}

export default Layout
