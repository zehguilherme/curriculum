import React from 'react';

import { StylesSocialNetworks } from './styles';

function SocialNetworks () {
  return (
    <StylesSocialNetworks>
      <span className="email" title="Outlook">
        <a href="mailto:jgtomaine@hotmail.com">
          <i className="fas fa-envelope" />
        </a>
      </span>

      <span className="github" title="GitHub">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/zehguilherme">
          <i className="fab fa-github" />
        </a>
      </span>

      <span className="linkedin" title="LinkedIn">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josé-guilherme-paro-monteiro-tomaine/">
          <i className="fab fa-linkedin" />
        </a>
      </span>

      <span className="whatsapp" title="WhatsApp">
        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5514981195569">
          <i className="fab fa-whatsapp" />
        </a>
      </span>

      <span className="telegram" title="Telegram">
        <a target="_blank" rel="noopener noreferrer" href="https://t.me/zehguilherme">
          <i className="fab fa-telegram" />
        </a>
      </span>
    </StylesSocialNetworks>
  );
}

export default SocialNetworks;
