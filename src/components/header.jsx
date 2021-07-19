import React, { useState } from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import * as headerStyle from "../styles/header.scss"

const Header = () => {
  // const [ isNavLinksOpen, setNavLinksOpen ] = useState(false)

  return (
    <header>
      <Link to="/" className={headerStyle.logo}>
        {/* StaticImageにstyled-componentsを当てると描画されなくなる。クソ。 */}
        {/*<LogoImg src="../assets/logo.png" alt="Logo" />*/}
        <img src="/assets/logo.png" alt="Logo" />
      </Link>
      <div className={headerStyle.links}>
        <Link to="/">トップページ</Link>
        <Link to="/activities">活動内容</Link>
        <Link to="/works">作品</Link>
        {/*<a href="https://blog.d3bu.net">ブログ</a>*/}
        <Link to="/joinus">入部希望の方へ</Link>
        <a href="http://www.kobe-kosen.ac.jp" target="_blank" rel="noreferrer">学校ホームページ</a>
      </div>
    </header>
  )
}

export default Header
