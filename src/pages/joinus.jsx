import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

export default function Home() {
  return (
    <Layout>
      <Seo title="入部希望の方へ" />

      <h2>活動日時</h2>
      基本は月・水・金曜日の放課後

      <h2>FAQ</h2>
      <dl>
        <dt>Q. 自分のPCは必要ですか？</dt>
        <dd>A. 部室、演習室にあるPCを利用できるので、必要ありません。しかし、自分のPCがあると学生生活でも便利です。</dd>
      </dl>
      <dl>
        <dt>Q. パソコンは好きだけど，知識は全然ありません。大丈夫ですか？</dt>
        <dd>A. 大丈夫です！部活では、コンテストに出場し、経験を積みながら知識をつけることができます。<br />
          先輩に質問したり、教えてもらいながら活動しましょう！</dd>
      </dl>
      <dl>
        <dt>Q. 兼部はOKですか？</dt>
        <dd>A. OKです！</dd>
      </dl>
      <dl>
        <dt>Q. プログラミングや作曲などを学ぶ際に，一定のカリキュラムのようなものがありますか？</dt>
        <dd>A. １年生の間にプログラミング講習会を行います。</dd>
      </dl>
      <dl>
        <dt>Q. 部費はいくらですか？</dt>
        <dd>A. 1年間で3000円から5000円程度です。</dd>
      </dl>
    </Layout>
  )
}
