import React from 'react'

import { StylesFooter } from './styles'

const Footer = () => {
  return (
    <StylesFooter>
      <span className="email">
        <a href="mailto:jgtomaine@hotmail.com" >
          <i className="fas fa-envelope"></i>
        </a>
      </span>

      <span className="github">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/zehguilherme">
          <i className="fab fa-github"></i>
        </a>
      </span>

      <span className="linkedin">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josé-guilherme-paro-monteiro-tomaine/">
          <i className="fab fa-linkedin"></i>
        </a>
      </span>

      <span className="whatsapp">
        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5514981195569">
          <i className="fab fa-whatsapp"></i>
        </a>
      </span>

      <span className="telegram">
        <a target="_blank" rel="noopener noreferrer" href="https://t.me/zehguilherme">
          <i className="fab fa-telegram"></i>
        </a>
      </span>
    </StylesFooter>
  )
}

export default Footer
