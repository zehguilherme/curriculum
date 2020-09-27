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
      moreInformation1="Desenvolvimento de novas funcionalidades para um ERP de grande porte"
      item1="Adaptar novas funcionalidades no sistema de gestão empresarial;"
      item2="Auxiliar na codificação de programas (C++);"
      item3="Auxiliar no desenvolvimento de novas tabelas (MySQL e Oracle);"
      item4="Acompanhar na manutenção do sistema."
    />

    <Enterprise
      enterpriseClassName="speksciences"
      logo={speksciencesLogo}
      alt="SpekSciences"
      url="https://www.linkedin.com/company/speksciences/"
      enterpriseName="Speksciences"
      positionName="Estágio - Desenvolvedor web"
      date="01/04/19 · 31/05/19"
      moreInformation1="Desenvolvimento Web utilizando Angular e Hyperledger"
      item1="Utilização da tecnologia Blockchain na melhoria de uma plataforma para o setor de energia;"
      item2="Criação de registro de consumidores;"
      item3="Criação do registro de produtores;"
      item4="Visualização dos produtores e comercializadores mais próximos ao consumidor logado na plataforma;"
      item5="Registro de dispositivos domésticos associados à cada consumidor e simulação do consumo de energia de cada dispositivo; criação do módulo que permite que um consumidor compre energia de um produtor."
    />

    <Enterprise
      enterpriseClassName="tv-unesp"
      logo={tvUnespLogo}
      alt="TV Unesp"
      url="https://tv.unesp.br/"
      enterpriseName="Televisão Universitária UNESP"
      positionName="Estágio - Suporte técnico"
      date="10/09/18 · 17/10/18"
      item1="Manutenção de computadores (hardware e software);"
      item2="Configuração de redes;"
      item3="Formatação e backup;"
      item4="Auxílio à equipe da TV nas gravações dos programas de acordo com a necessidade."
    />
  </StylesProfessionalExperience>
);

export default ContainerProfessionalExperience;
