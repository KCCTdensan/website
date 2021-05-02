import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Header = styled.header`
  background: purple;
`

const LogoLink = styled(Link)`
  
`

export default ({ siteTitle=`` }) => (
  <Header>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <img src="assets/logo.png" />
    </div>
  </Header>
)
