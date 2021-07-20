import React from "react"

import * as style from "../styles/footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://twitter.com/kcct_densan" target="_blank" rel="noreferrer" className={style.iconlink}>
          <img src="/assets/icons/twitter.png" alt="Twitter logo" />
        </a>
        <a href="https://github.com/KCCTdensan" target="_blank" rel="noreferrer" className={style.iconlink}>
          <img src="/assets/icons/github.png" alt="GitHub logo" />
        </a>
      </div>
      <small className={style.copyright}>&copy; 1974-{new Date().getFullYear()} KCCT 電算部</small>
    </footer>
  )
}

export default Footer
