import React from 'react';

import { StylesProfessionalExperience } from './styles';

import Enterprise from './Components/Enterprise';

import abc71Logo from '../../assets/abc71-logo.png';
import speksciencesLogo from '../../assets/speksciences-logo.jpg';
import tvUnespLogo from '../../assets/tvunesp-logo.png';

const ContainerProfessionalExperience = () => (
  <StylesProfessionalExperience>
    <h2>Experiência Profissional</h2>

    <Enterprise
      enterpriseClassName="abc71"
      logo={abc71Logo}
      alt="ABC71"
      url="https://www.abc71.com.br/"
      enterpriseName="ABC71 Sistemas de Gestão para Indústrias"
      positionName="Estágio - Desenvolvedor C++"
      date="05/11/18 · 15/12/19"
    />

    <Enterprise
      enterpriseClassName="speksciences"
      logo={speksciencesLogo}
      alt="SpekSciences"
      url="https://www.linkedin.com/company/speksciences/"
      enterpriseName="Speksciences"
      positionName="Estágio - Desenvolvedor web"
      date="01/04/19 · 31/05/19"
    />

    <Enterprise
      enterpriseClassName="tv-unesp"
      logo={tvUnespLogo}
      alt="TV Unesp"
      url="https://tv.unesp.br/"
      enterpriseName="Televisão Universitária UNESP"
      positionName="Estágio - Suporte técnico"
      date="10/09/18 · 17/10/18"
    />
  </StylesProfessionalExperience>
);

export default ContainerProfessionalExperience;
