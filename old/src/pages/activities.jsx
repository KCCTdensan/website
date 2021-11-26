import React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/activities.module.scss"

const Activities = () => {
  return (
    <Layout>
      <Seo title="活動内容" />

      <h2>
        <Link to="/games/" className={style.titlelink}>🔗 ゲーム制作</Link>
      </h2>
      {/*<StaticImage src="../assets/images/densan_game.png" alt="ゲーム制作画像" />*/}
      <p>部内でチームを組み、ゲームを制作し、日本ゲーム大賞U18部門に応募しています。</p>

      <h2>
        <Link to="/musics/" className={style.titlelink}>🔗 音楽制作</Link>
      </h2>
      {/*<StaticImage src="../assets/images/densan_music.png" alt="音楽制作画像" />*/}
      <p>DTMソフトを使って、音楽を制作し、高専祭でCDの配布を行っています。</p>

      <h2>
        <Link to="/movies/" className={style.titlelink}>🔗 映像制作</Link>
      </h2>
      {/*<StaticImage src="../assets/images/densan_movie.png" alt="映像制作画像" />*/}
      <p>活動映像や、短編映画の制作を行っています。</p>

      <h2>
        <Link to="/pepper/" className={style.titlelink}>🔗 Pepper開発</Link>
      </h2>
      {/*<StaticImage src="../assets/images/densan_pepper.png" alt="Pepper開発画像" />*/}
      <p>地域の商店街と連携し、地域活性化のため、Pepperの開発を行っています。</p>

      <h2>
        <Link to="/illustrations/" className={style.titlelink}>🔗 イラスト制作</Link>
      </h2>
      {/*<StaticImage src="../assets/images/densan_illustration.png" alt="イラスト制作画像" />*/}
      <p>部にあるペンタブレットを使用し、イラストを描いています。</p>

      <h2>
        <Link to="/events/" className={style.titlelink}>🔗 大会・コンテスト出場</Link>
      </h2>
      {/*<StaticImage src="../assets/images/densan_contest.png" alt="大会・コンテスト画像" />*/}
      <p>プログラミングコンテストやパソコン甲子園などの大会に出場しています。</p>
    </Layout>
  )
}

export default Activities
