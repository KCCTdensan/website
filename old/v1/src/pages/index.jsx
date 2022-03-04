import React from "react"
import { withPrefix } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/index.module.scss"

const Home = () => {
  return (
    <Layout>
      <Seo title="神戸高専 電算部" disableSiteName />

      <div className={style.picsslide}>
        <img src={withPrefix("/assets/images/densan_intro.png")} alt="slide_1" />
        <img src={withPrefix("/assets/images/index_slider1.jpg")} alt="slide_2" />
        <img src={withPrefix("/assets/images/index_slider2.jpg")} alt="slide_3" />
        <img src={withPrefix("/assets/images/index_slider3.jpg")} alt="slide_4" />
      </div>
      <div className={style.welcometext + ' ' + style.gamingtext}>
        <span>パソコンを利用し、</span>
        <span>ゲーム、音楽、映像、</span>
        <span>VRソフトの制作、</span>
        <span>Pepperの開発</span>
        <span>などを行っています。</span>
        <span>皆さんもぜひ、</span>
        <span>PCを使った活動を</span>
        <span>やってみませんか?</span>
        <span>兼部の方も大歓迎です!</span>
      </div>

      <h2><div className={style.gamingtext}>このウェブサイトについて</div></h2>
      <div className={style.gamingtext}>
        2021年にリニューアルした、電子計算機部の新しいウェブサイトです!
      </div>
      <a href="https://github.com/KCCTdensan/d3bu.net" target="_blank" rel="noreferrer">
        <div className={style.gamingtext}>
          →→→ サイトのソースコードはここをクリック! ←←←
        </div>
      </a>
    </Layout>
  )
}

export default Home
