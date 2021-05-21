import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Faq = styled.details`
`
const Q = styled.summary`
  ::before {
    content: "Q. ";
  }
`
const A = styled.span`
  ::before {
    content: "A. ";
  }
`

export default function JoinUs() {
  return (
    <Layout>
      <Seo title="入部希望の方へ" />

      <h2>活動日時</h2>
      基本は月・水・金曜日の放課後

      <h2>FAQ</h2>
      <Faq>
        <Q>自分のPCは必要ですか？</Q>
        <A>部室、演習室にあるPCを利用できるので、必要ありません。しかし、自分のPCがあると学生生活でも便利です。</A>
      </Faq>
      <Faq>
        <Q>パソコンは好きだけど，知識は全然ありません。大丈夫ですか？</Q>
        <A>大丈夫です！部活では、コンテストに出場し、経験を積みながら知識をつけることができます。<br />
          先輩に質問したり、教えてもらいながら活動しましょう！</A>
      </Faq>
      <Faq>
        <Q>兼部はOKですか？</Q>
        <A>OKです！</A>
      </Faq>
      <Faq>
        <Q>プログラミングや作曲などを学ぶ際に，一定のカリキュラムのようなものがありますか？</Q>
        <A>１年生の間にプログラミング講習会を行います。</A>
      </Faq>
      <Faq>
        <Q>部費はいくらですか？</Q>
        <A>1年間で3000円から5000円程度です。</A>
      </Faq>
    </Layout>
  )
}
