import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Activities() {
  const BlackLink = styled(Link)` color: black;`

  return (
    <Layout>
      <Seo title="活動内容" />

      <h2>
        <BlackLink to="/games/">ゲーム制作</BlackLink>
      </h2>
      {/*<StaticImage src="../assets/images/densan_game.png" alt="ゲーム制作画像" />*/}
      部内でチームを組み、ゲームを制作し、日本ゲーム大賞U18部門に応募しています。

      <h2>
        <BlackLink to="/musics/">音楽制作</BlackLink>
      </h2>
      {/*<StaticImage src="../assets/images/densan_music.png" alt="音楽制作画像" />*/}
      DTMソフトを使って、音楽を制作し、高専祭でCDの配布を行っています。

      <h2>
        <BlackLink to="/movies/">映像制作</BlackLink>
      </h2>
      {/*<StaticImage src="../assets/images/densan_movie.png" alt="映像制作画像" />*/}
      活動映像や、短編映画の制作を行っています。

      <h2>
        <BlackLink to="/pepper/">Pepper開発</BlackLink>
      </h2>
      {/*<StaticImage src="../assets/images/densan_pepper.png" alt="Pepper開発画像" />*/}
      地域の商店街と連携し、地域活性化のため、Pepperの開発を行っています。

      <h2>
        <BlackLink to="/illustrations/">イラスト制作</BlackLink>
      </h2>
      {/*<StaticImage src="../assets/images/densan_illustration.png" alt="イラスト制作画像" />*/}
      部にあるペンタブレットを使用し、イラストを描いています。

      <h2>
        <BlackLink to="/events/">大会・コンテスト出場</BlackLink>
      </h2>
      {/*<StaticImage src="../assets/images/densan_contest.png" alt="大会・コンテスト画像" />*/}
      プログラミングコンテストやパソコン甲子園などの大会に出場しています。
    </Layout>
  )
}
