import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import color from "./color"

export default function Header(props) {

  const StyledHeader = styled.header`
    height: 72px;
    padding: 0 10%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    background: ${color.light.bg};
  `
  const LogoLink = styled(Link)`
    img {
      height: 100%;
    }
    img:hover {
      transition: .1s;
      transform: scale(.9)
    }
  `
  const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    a {
      margin: 0 24px;
      padding: auto 0;
      display: block;
      color: white;
      font-weight: bold;
    }
    a:hover {
      text-decoration: none;
    }
  `

  return (
    <StyledHeader>
      <LogoLink to="/">
        <img src="/assets/logo.png" alt="Logo" />
      </LogoLink>
      <NavLinks>
        <Link to="/">トップページ</Link>
        <Link to="/activities">活動内容</Link>
        <Link to="/works">作品</Link>
        <Link to="/joinus">入部希望の方へ</Link>
        <a href="http://www.kobe-kosen.ac.jp">学校ホームページ</a>
      </NavLinks>
    </StyledHeader>
  )
}
