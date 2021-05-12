import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function PepperHome() {
  return (
    <Layout>
      <Seo title="Pepper開発" />

      <h1>Pepepr開発</h1>

      <h2>部員向け</h2>

      <h3>リンク集</h3>

      <ul>
        <li><Link to="/pepper/setup-environment">開発環境構築ガイド</Link></li>
      </ul>
    </Layout>
  )
}