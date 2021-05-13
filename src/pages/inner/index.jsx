import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function InnerHome() {
  return (
    <Layout>
      <Seo title="部員向け" />
      <Helmet meta={[{ name: "robots", content: "noindex" }]} />

      <h1>部員向け</h1>

      <p>
        どこからもリンクされていないのでブクマでもしといてください〜
        <br />
        部員以外が読むことも一応想定して書いているつもりです
      </p>

      <h2>入門記事</h2>

      <p>内容に文句があるならGitHubでプルリクでも投げてください。</p>

      <ul>
        <li>まだ何もありません…‥</li>
      </ul>

      <h2>リンク集</h2>

      <ul>
        <li><Link to="/maintenance">このサイトの運用メモ</Link></li>
        <li><Link to="/pepper/setup-environment">Pepper開発環境構築ガイド</Link></li>
      </ul>
    </Layout>
  )
}