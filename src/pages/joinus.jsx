import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FaqList = styled.div`
  details {
    margin: 16px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 0 8px 2px #f4f4f4;
  }
  details[open] {
    margin: 18px 0;
    box-shadow: 0 0 16px 4px #eee;
  }
  details[open] summary {
    border-bottom: 1px solid #ccc;
  }
`
const Q = styled.summary`
  padding: 12px;
  user-select: none;
  font-weight: bolder;

  ::marker {
    color: gray;
    font-size: 1em;
  }
  ::before {
    content: "Q.";
    width: 1.5em;
    display: inline-block;
    font-weight: bold;
    font-size: 1.3em;
    line-height: 1em;
  }
`
const A = styled.div`
  padding: 12px;
  padding-left: 4em;

  ::before {
    content: "A.";
    width: 1.5em;
    margin-left: -1.5em;
    display: inline-block;
    font-weight: bold;
    font-size: 1.3em;
    line-height: 1em;
  }
`

export default function JoinUs() {
  return (
    <Layout>
      <Seo title="入部希望の方へ" />

      <h2>活動日時</h2>
      基本は月・水・金曜日の放課後

      <h2>FAQ</h2>
      <FaqList>
        <details>
          <Q>自分のPCは必要ですか？</Q>
          <A>部室、演習室にあるPCを利用できるので、必要ありません。しかし、自分のPCがあると学生生活でも便利です。</A>
        </details>
        <details>
          <Q>パソコンは好きだけど，知識は全然ありません。大丈夫ですか？</Q>
          <A>大丈夫です！部活では、コンテストに出場し、経験を積みながら知識をつけることができます。<br />
            先輩に質問したり、教えてもらいながら活動しましょう！</A>
        </details>
        <details>
          <Q>兼部はOKですか？</Q>
          <A>OKです！</A>
        </details>
        <details>
          <Q>プログラミングや作曲などを学ぶ際に，一定のカリキュラムのようなものがありますか？</Q>
          <A>１年生の間にプログラミング講習会を行います。</A>
        </details>
        <details>
          <Q>部費はいくらですか？</Q>
          <A>1年間で3000円から5000円程度です。</A>
        </details>
      </FaqList>
    </Layout>
  )
}
