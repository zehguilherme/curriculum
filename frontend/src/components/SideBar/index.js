import React from 'react';

import { SideBarContainer } from './styles';

import pdfCurriculum from '../../assets/documents/curriculo.pdf';

function SideBar () {
  return (
    <SideBarContainer>
      <span className="pdf-curriculum" title="Baixar currículo em PDF">
        <a target="_blank" rel="noopener noreferrer" href={pdfCurriculum}>
          <i className="fas fa-download" />
        </a>
      </span>

      <span className="github" title="Código Fonte do Projeto">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/zehguilherme/curriculum">
          <i className="fab fa-github" />
        </a>
      </span>
    </SideBarContainer>
  );
}

export default SideBar;
