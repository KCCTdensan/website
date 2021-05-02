import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode";
import 'reseter.css/css/reseter.min.css'

import { GlobalStyle } from '../theme'

import Header from './header'
import Footer from './footer'

const MainHeading = styled.h2`
  color: rgb(${(props) => props.theme.palette.mainBrand});
`;

export default props => (
  <>
    <GlobalStyle theme={theme} />
    <Header />
      <div>
        <label>
          <input
            type="checkbox"
            onChange={() => toggleDark()}
            checked={!!isDark}
          />{" "}
          Dark mode
        </label>
      </div>
    <main>{props.children}</main>
    <Footer />
  </>
)
