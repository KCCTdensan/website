import React from "react"

import * as footerStyle from "../styles/footer.scss"

const Footer = () => {
  return (
    <footer>
      <div classList={footerStyle.iconlinks}>
        <a href="https://twitter.com/kcct_densan" target="_blank" rel="noreferrer">
          <img src="/assets/icons/twitter.png" alt="Twitter logo" />
        </a>
        <a href="https://github.com/KCCTdensan" target="_blank" rel="noreferrer">
          <img src="/assets/icons/github.png" alt="GitHub logo" />
        </a>
      </div>
      <small className={footerStyle.copyright}>&copy; 1974-{new Date().getFullYear()} KCCT 電算部</small>
    </footer>
  )
}

export default Footer
