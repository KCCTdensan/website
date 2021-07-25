import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/joinus.module.scss"

export default function JoinUs() {
  return (
    <Layout>
      <Seo title="入部希望の方へ" />

      <h2>活動日時</h2>
      基本は月・水・金曜日の放課後

      <h2>Fdivsummary</h2>
      <div className={style.faqlist}>
        <details>
          <summary className={style.q}>自分のPCは必要ですか？</summary>
          <div className={style.a}>部室、演習室にあるPCを利用できるので、必要ありません。しかし、自分のPCがあると学生生活でも便利です。</div>
        </details>
        <details>
          <summary className={style.q}>パソコンは好きだけど，知識は全然ありません。大丈夫ですか？</summary>
          <div className={style.a}>大丈夫です！部活では、コンテストに出場し、経験を積みながら知識をつけることができます。<br />
            先輩に質問したり、教えてもらいながら活動しましょう！</div>
        </details>
        <details>
          <summary className={style.q}>兼部はOKですか？</summary>
          <div className={style.a}>OKです！</div>
        </details>
        <details>
          <summary className={style.q}>プログラミングや作曲などを学ぶ際に，一定のカリキュラムのようなものがありますか？</summary>
          <div className={style.a}>１年生の間にプログラミング講習会を行います。</div>
        </details>
        <details>
          <summary className={style.q}>部費はいくらですか？</summary>
          <div className={style.a}>1年間で3000円から5000円程度です。</div>
        </details>
      </div>
    </Layout>
  )
}
