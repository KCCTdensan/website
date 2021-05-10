import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
// import { StaticImage } from "gatsby-plugin-image"

import color from "./color"

export default function Header(props) {
  const breakpoints = useBreakpoint()

  const [ isNavLinksOpen, setNavLinksOpen ] = useState(false)


  const StyledHeader = styled.header`
    height: 72px;
    margin-bottom: 36px;
    padding: 0 ${breakpoints.sm ? "5%" : (breakpoints.md ? "14%" : "9%")};
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    background: ${color.light.bg};
    border-bottom: 4px solid lightblue;
    box-shadow: 0 11px 24px #f4f4f4;

    a {
      outline: none;
    }
  `
  {/* StaticImage使えん */}
  {/*
  const LogoImg = styled(StaticImage)`
    height: 100%;
  `
  */}
  const LogoLink = styled(Link)`
    img {
      height: 100%;
    }
    img:hover {
      transition: .1s;
      transform: scale(.95)
    }
  `
  const NavLinksHorizontal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    a {
      /*min-width: 36px;*/
      margin: 0 11px;
      /* display: flex; なのでできない */
      /*padding: auto;*/
      position: relative;
      display: flex;
      align-items: center;
      color: white;
      font-weight: bold;
      text-decoration: none;
    }
    a::before,
    a::after {
      width: 0;
      display: block;
      position: absolute;
      bottom: 8px;
      content: "";
      border-bottom: solid 4px white;
      transition: .2s ease;
    }
    a::before {
      left: 50%;
    }
    a::after {
      right: 50%;
    }
    a:hover::before,
    a:hover::after {
      width: 50%;
    }
  `
  const NavLinksMenu = styled.div`
    background: purple;
  `

  function NavLinks() {
    return (
      <>
        <Link to="/">トップページ</Link>
        <Link to="/activities">活動内容</Link>
        <Link to="/works">作品</Link>
        {/*<a href="https://blog.d3bu.net">ブログ</a>*/}
        <Link to="/joinus">入部希望の方へ</Link>
        <a href="http://www.kobe-kosen.ac.jp">学校ホームページ</a>
      </>
    )
  }

  return (
    <StyledHeader>
      {/* リンクの大きさを画像の幅だけにしたい */}
      <div css="display: inline-block;">
        <LogoLink to="/">
          {/* StaticImageにstyled-componentsを当てると描画されなくなる。クソ。 */}
          {/*<LogoImg src="../assets/logo.png" alt="Logo" />*/}
        <img src="/assets/logo.png" alt="Logo" />
        </LogoLink>
      </div>
      {
        breakpoints.md ? (
          <NavLinksMenu>
            <NavLinks />
          </NavLinksMenu>
        ) : (
          <NavLinksHorizontal>
            <NavLinks />
          </NavLinksHorizontal>
        )
      }
    </StyledHeader>
  )
}
