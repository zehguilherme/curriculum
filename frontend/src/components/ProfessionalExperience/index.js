import React from 'react';

import { StylesProfessionalExperience } from './styles';

import Enterprise from './Components/Enterprise';

import abc71Logo from '../../assets/abc71-logo.png';
import kentechLogo from '../../assets/kentech-logo.png';
import speksciencesLogo from '../../assets/speksciences-logo.jpg';

function ContainerProfessionalExperience () {
  return (
    <StylesProfessionalExperience>
      <h2>Experiência Profissional</h2>

      <Enterprise
        enterpriseClassName="kentech"
        logo={kentechLogo}
        alt="Kentech Inovações em Tecnologia"
        url="http://kentech.com.br/"
        enterpriseName="Kentech Inovações em Tecnologia"
        positionName="Desenvolvedor Front-end Júnior"
        date="23/11/20 · Presente"
        moreInformation1="Desenvolvimento/manutenção de aplicações voltadas para o ambiente hospitalar"
        item1="jQuery"
        item2="Bootstrap"
        item3=".NET"
        item4="Blazor"
        item5="Xamarin Forms"
      />

      <Enterprise
        enterpriseClassName="abc71"
        logo={abc71Logo}
        alt="ABC71"
        url="https://www.abc71.com.br/"
        enterpriseName="ABC71 Sistemas de Gestão para Indústrias"
        positionName="Estágio - Desenvolvedor C++"
        date="05/11/18 · 15/12/19"
        moreInformation1="Desenvolvimento/manutenção de aplicação ERP de grande porte voltado para a área industrial"
        item1="C++"
        item2="MySQL"
        item3="Oracle"
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
    </StylesProfessionalExperience>
  );
}

export default ContainerProfessionalExperience;
