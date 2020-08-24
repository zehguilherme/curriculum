import React from 'react';

import { StylesProfessionalExperience } from './styles';

import abc71Logo from '../../assets/abc71-logo.png';
import speksciencesLogo from '../../assets/speksciences-logo.jpg';
import tvUnespLogo from '../../assets/tvunesp-logo.png';

const ContainerProfessionalExperience = () => (
  <StylesProfessionalExperience>
    <h2>Experiência Profissional</h2>

    <div className="abc71 item">
      <img src={abc71Logo} alt="ABC71" />
      <div className="information">
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.abc71.com.br/"
          >
            ABC71 Sistemas de Gestão para Indústrias
          </a>
        </h3>
        <p className="position">Estágio - Desenvolvedor C++</p>
        <p className="date">05/11/18 · 15/12/19</p>
      </div>
    </div>

    <div className="speksciences item">
      <img src={speksciencesLogo} alt="SpekSciences" />
      <div className="information">
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/speksciences/"
          >
            Speksciences
          </a>
        </h3>
        <p className="position">Estágio - Desenvolvedor web</p>
        <p className="date">01/04/19 · 31/05/19</p>
      </div>
    </div>

    <div className="tv-unesp item">
      <img src={tvUnespLogo} alt="TV Unesp" />
      <div className="information">
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tv.unesp.br/"
          >
            TV UNESP
          </a>
        </h3>
        <p className="position">Estágio - Suporte técnico</p>
        <p className="date">10/09/18 · 17/10/18</p>
      </div>
    </div>
  </StylesProfessionalExperience>
);

export default ContainerProfessionalExperience;
