import React from 'react'
import { Link } from 'gatsby'

export default function Header({ siteTitle=`` }) {
  return (
    <header>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </header>
  )
}
