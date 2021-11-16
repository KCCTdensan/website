import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404" />
      <h1>404 Not Found</h1>
      <p>お探しのページは見つかりませんでした……ごめんさい………</p>
    </Layout>
  )
}
