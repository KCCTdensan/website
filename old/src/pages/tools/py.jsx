import React, { createRef, useEffect } from "react"
import { Helmet } from "react-helmet"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

// const TermWrapper = styled.div`
//   height: 20em;
//   margin: 32px 0;
//   padding: 4px;
//   display: flex;
//   flex-direction: column-reverse;
//   overflow: auto;
//   background: lightgray;
//   border-radius: 8px;
//   box-shadow: 0 11px 24px #f4f4f4;
// `
// const TermDiv = styled.div`
//   border-radius: 8px;
// `
// const GhostText = styled.div`
//   color: gray;
//   position: absolute;
// `

export default function Py() {
  const terminal = createRef()

  useEffect(() => {
    const scriptTag = document.createElement("script")
    scriptTag.src = "/assets/lib/pyterm.js"
    document.body.appendChild(scriptTag)
  }, [])

  return (
    <Layout Wide>
      <Seo title="WebPy" />

      <h1>Web Python REPL</h1>

      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/jquery"></script>
        <script src="https://cdn.jsdelivr.net/npm/jquery.terminal@2.23.0/js/jquery.terminal.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/jquery.terminal@2.23.0/css/jquery.terminal.min.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/jcubic/static/js/wcwidth.js"></script>
      </Helmet>
      {/*<TermWrapper>*/}
      <div>
        <div>
          Try it !
          <br />
          <br />
          <br />
          Now loading...
        </div>
        <div id="terminal" ref={terminal} />
      </div>
      {/*</TermWrapper>*/}

      <small>このページは<a href="https://licenses.opensource.jp/MPL-2.0/MPL-2.0.html" target="_blank" rel="noreferrer">MPL-2.0</a>に準拠した<a href="https://pyodide.org/en/stable/" target="_blank" rel="noreferrer">Pyodide</a>のソースコードを使用しています。</small>
    </Layout>
  )
}