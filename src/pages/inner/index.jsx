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
      {/*<p>内容に文句があるならGitHubでプルリクでも投げてください。</p>*/}
      <ul>
        <li>まだ何もありません…‥</li>
      </ul>

      <h2>リンク集</h2>
      <ul>
        <li><Link to="/maintenance">このサイトの運用メモ</Link></li>
        <li><Link to="/pepper/setup-environment">Pepper開発環境構築ガイド</Link></li>
      </ul>

      <h2>遺跡</h2>
      <ul>
        <li><a href="http://www.kobe-kosen.ac.jp/groups/densan/" target="_blank" rel="noreferrer">電子計算機部のページ (2007-)</a></li>
        <li><a href="http://kcctdensan.blog118.fc2.com/" target="_blank" rel="noreferrer">電算「部」log (2007-2014)</a></li>
        <li><a href="http://www.kobe-kosen.ac.jp/groups/densan/old/" target="_blank" rel="noreferrer">公式WEB (2010-2014)</a></li>
        <li><a href="https://web.archive.org/web/20160804005959/http://kcctdensan.sblo.jp/" target="_blank" rel="noreferrer">電算「部」 log (2011-2015)</a></li>
        <li><a href="https://kcctdensan.github.io/" target="_blank" rel="noreferrer">公式Webサイト (2017-2018)</a></li>
        <li><a href="https://kcctdensan.github.io/AdventC.html" target="_blank" rel="noreferrer">Advent Calendar (2017-2018)</a></li>
        <li><a href="https://adventar.org/calendars/3555" target="_blank" rel="noreferrer">KCCT-Densan Advent Calendar 2018</a></li>
        <li><a href="https://kcctdensan.github.io/Blog/" target="_blank" rel="noreferrer">神戸高専電算部ブログ (2018)</a></li>
      </ul>
    </Layout>
  )
}
