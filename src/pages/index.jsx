import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from '../components/seo'

const PicsSlide = styled.div`
`
//   .slide {
//     position   : relative;
//     overflow   : hidden;
//     width      : 800px;
//     height     : 450px;
//     margin     : auto;
//     background : #fff;
//   }

//   .slide img {
//     display    : block;
//     position   : absolute;
//     width      : inherit;
//     height     : inherit;
//     left       : 100%;
//     animation  : slideAnime 12s ease infinite;
//   }

//   .slide img:nth-of-type(1) { animation-delay: 0s }
//   .slide img:nth-of-type(2) { animation-delay: 3s }
//   .slide img:nth-of-type(3) { animation-delay: 6s }
//   .slide img:nth-of-type(4) { animation-delay: 9s }

//   @keyframes slideAnime{
//      0% { left: 100%  }
//      2% { left: 0     }
//     23% { left: 0     }
//     25% { left: -100% }
//    100% { left: -100% }
//   }
// `

export default function Home() {
  return (
    <Layout>
      <Seo title="トップページ" />

      <PicsSlide>
        <img src="assets/images/densan_intro.png" alt="slide_1" />
        <img src="assets/images/index_slider1.jpg" alt="slide_2" />
        <img src="assets/images/index_slider2.jpg" alt="slide_3" />
        <img src="assets/images/index_slider3.jpg" alt="slide_4" />
      </PicsSlide>
      パソコンを利用し、ゲーム、音楽、映像、VRソフトの制作、Pepperの開発などを行っています。<br />
      皆さんもぜひ、PCを使った活動をやってみませんか?兼部の方も大歓迎です!<br />
      <a class="twitter-timeline" data-width="500" data-height="500" href="https://twitter.com/kcct_densan">Tweets by kcct_densan</a><script async src="https://platform.twitter.com/widgets.js"></script>
    </Layout>
  )
}
