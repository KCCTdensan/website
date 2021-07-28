import React, { createRef, forwardRef }  from "react"
import Twemoji from "react-twemoji"
import { Link } from "gatsby"

import "./global.scss"
import * as style from "./style.module.scss"


// Header

const LinksContents = ({ desktopLinks=false, menuLinks=false }) => (
  <div className={
    desktopLinks
    ? style.links_desktop : menuLinks
    ? style.links_menu : null
  }>
    <div className={style.links_link}><Link to="/">トップページ</Link></div>
    <div className={style.links_link}><Link to="/activities">活動内容</Link></div>
    <div className={style.links_link}><Link to="/works">作品</Link></div>
    {/*<div className={style.links_link}><a href="https://blog.d3bu.net">ブログ</a></div>*/}
    <div className={style.links_link}><Link to="/joinus">入部希望の方へ</Link></div>
    <div className={style.links_link}><a href="http://www.kobe-kosen.ac.jp" target="_blank" rel="noreferrer">学校ホームページ</a></div>
  </div>
)

export const Header = () => {
  const menuLinksRef = createRef()
  const MenuLinksContents = forwardRef((_, ref) => (
    <div>
      <LinksContents menuLinks ref={menuLinksRef} />
    </div>
  ))

  return (
    <header>
      <div className={style.header_main}>
        <Link to="/" className={style.logo_link}>
          {/*<LogoImg src="../assets/logo.png" alt="Logo" />*/}
          <img src="/assets/logo.png" alt="Logo" className={style.logo_img} />
        </Link>
        <LinksContents desktopLinks />
        <button onClick={() => {
          console.log(menuLinksRef.current)
          menuLinksRef.current.classList.toggle(style.links_menu_open)
          menuLinksRef.current.classList.toggle(style.links_menu_close)
        }} className={style.links_menu_toggle_button}>
          o
        </button>
      </div>
      <MenuLinksContents ref={menuLinksRef} />
    </header>
  )
}


// Footer

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://twitter.com/kcct_densan" target="_blank" rel="noreferrer" className={style.iconlink}>
          <img src="/assets/icons/twitter.png" alt="Twitter logo" />
        </a>
        <a href="https://github.com/KCCTdensan" target="_blank" rel="noreferrer" className={style.iconlink}>
          <img src="/assets/icons/github.png" alt="GitHub logo" />
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
        className={Wide ? style.widecontainer : style.container}
      >{children}</main>
      <Footer />
    </Twemoji>
  )
}

export default Layout
