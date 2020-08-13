import React from 'react';

import { StylesFooter } from './styles';

const Footer = () => (
  <StylesFooter>
    <span className="email">
      <a href="mailto:jgtomaine@hotmail.com">
        <i className="fas fa-envelope" />
      </a>
    </span>

    <span className="github">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/zehguilherme">
        <i className="fab fa-github" />
      </a>
    </span>

    <span className="linkedin">
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josé-guilherme-paro-monteiro-tomaine/">
        <i className="fab fa-linkedin" />
      </a>
    </span>

    <span className="whatsapp">
      <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5514981195569">
        <i className="fab fa-whatsapp" />
      </a>
    </span>

    <span className="telegram">
      <a target="_blank" rel="noopener noreferrer" href="https://t.me/zehguilherme">
        <i className="fab fa-telegram" />
      </a>
    </span>
  </StylesFooter>
);

export default Footer;
