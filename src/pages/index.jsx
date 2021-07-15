import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Home() {

  const PicsSlide = styled.div`
    max-width: 800px;
    height: 450px;
    margin: auto;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 100%;
      animation: slideAnime 16s ease infinite;
      border-radius: 5px;
    }
    img:nth-of-type(1) { animation-delay: 0s }
    img:nth-of-type(2) { animation-delay: 4s }
    img:nth-of-type(3) { animation-delay: 8s }
    img:nth-of-type(4) { animation-delay: 12s }
    @keyframes slideAnime {
      0% { left: 100% }
      2% { left: 0 }
      23% { left: 0 }
      25% { left: -100% }
      100% { left: -100% }
    }
  `
  const GamingText = styled.div`
    margin: 48px 0;
    text-align: center;
    font-weight: 900;
    font-style: oblique 9deg;

    color: transparent;
    background-image: repeating-linear-gradient(135deg,
      red, orange, yellow, green, aqua, blue, purple,
      red, orange, yellow, green);
    background-size: 800%;
    background-repeat: repeat-x;

    background-clip: text;
    -webkit-background-clip: text;

    animation: gaming 5s linear infinite;
    @keyframes gaming {
      from { background-position: 0% 50% }
      /*何故か80%くらいでいい感じに動く*/
      to { background-position: 80% 50% }
    }
  `
  const WelcomeText = styled(GamingText)`
    font-size: x-large;

    span {
      display: inline-block;
    }
  `

  return (
    <Layout>
      <Seo title="トップページ" />

      <PicsSlide>
        <img src="/assets/images/densan_intro.png" alt="slide_1" />
        <img src="/assets/images/index_slider1.jpg" alt="slide_2" />
        <img src="/assets/images/index_slider2.jpg" alt="slide_3" />
        <img src="/assets/images/index_slider3.jpg" alt="slide_4" />
      </PicsSlide>
      <WelcomeText>
        <span>パソコンを利用し、</span>
        <span>ゲーム、音楽、映像、</span>
        <span>VRソフトの制作、</span>
        <span>Pepperの開発</span>
        <span>などを行っています。</span>
        <span>皆さんもぜひ、</span>
        <span>PCを使った活動を</span>
        <span>やってみませんか?</span>
        <span>兼部の方も大歓迎です!</span>
      </WelcomeText>

      <h2><GamingText>このウェブサイトについて</GamingText></h2>
      <GamingText>
        2021年にリニューアルした、電子計算機部の新しいウェブサイトです!
      </GamingText>
      <a href="https://github.com/KCCTdensan/d3bu.net" target="_blank" rel="noreferrer">
        <GamingText>
          →→→ サイトのソースコードはここをクリック! ←←←
        </GamingText>
      </a>
    </Layout>
  )
}
