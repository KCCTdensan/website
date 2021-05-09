import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from '../components/seo'

export default function Home() {

  const PicsSlide = styled.div`
    width: 800px;
    height: 450px;
    margin: auto;
    position: relative;
    overflow: hidden;

    img {
      display: block;
      position: absolute;
      width: inherit;
      height: inherit;
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
  const WelcomeText = styled.p`
    margin: 48px;
    text-align: center;
    font-weight: 900;
    font-size: x-large;
    font-style: oblique 9deg;

    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(135deg, red, orange, yellow, green, aqua, blue, purple);
  `

  return (
    <Layout>
      <Seo title="トップページ" />

      <PicsSlide>
        <img src="assets/images/densan_intro.png" alt="slide_1" />
        <img src="assets/images/index_slider1.jpg" alt="slide_2" />
        <img src="assets/images/index_slider2.jpg" alt="slide_3" />
        <img src="assets/images/index_slider3.jpg" alt="slide_4" />
      </PicsSlide>
      <WelcomeText class="gaming">
        パソコンを利用し、ゲーム、音楽、映像、VRソフトの制作、Pepperの開発などを行っています。<br />
        皆さんもぜひ、PCを使った活動をやってみませんか?兼部の方も大歓迎です!
      </WelcomeText>
      <a class="twitter-timeline" href="https://twitter.com/kcct_densan">Tweets by kcct_densan</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Layout>
  )
}
