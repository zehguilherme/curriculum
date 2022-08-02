import React from 'react';

import { StylesQualificationsOthers } from './styles';

import Item from './Components/Item';

import curriculumLogo from '../../assets/curriculum-logo.svg';
import ezdevsLogo from '../../assets/ezdevs.logo.png';
import senacLogo from '../../assets/senac-logo.jpg';
import speedtestLogo from '../../assets/speedtest-logo.png';
import unisagradoLogo from '../../assets/unisagrado-simple-logo.png';

import certificatePresentationTcc from '../../assets/documents/certificado-apresentacao-tcc.pdf';
import forumIc from '../../assets/documents/forum-ic.pdf';
import tcc from '../../assets/documents/tcc.pdf';

function ContainerQualificationsOthers () {
  return (
    <StylesQualificationsOthers>
      <h2>Qualificações e outras atividades</h2>

      <Item
        header2Classname="blue"
        logo={speedtestLogo}
        alt="Logo da empresa Speedtest"
        eventName="Clone da interface do site “Speedtest”"
        date="22/07/21 · Presente"
        githubUrl="https://github.com/zehguilherme/speedtest-ui-clone"
      />

      <Item
        header2Classname="blue"
        logo={curriculumLogo}
        alt=""
        eventName="Criação de currículo online"
        date="13/05/20 · Presente"
        githubUrl="https://github.com/zehguilherme/curriculum"
      />

      <Item
        header2Classname="orange"
        logo={senacLogo}
        alt="Logo da empresa Senac"
        name="Senac"
        eventName="Curso ”Programador de Dispositivos Móveis” pelo SENAC Bauru"
        eventShortDescription="Criação de
      aplicativo móvel para gerenciamento de quadras esportivas"
        date="18/02/20 · 05/11/20"
        fileUrl1="http://www1.intranet.sp.senac.br/senac_solution/pss/relatorios/certificados/NBASVIARAPIDA/mod29.cfm?CRYPTALGID=7a07a20a-238a-11eb-b30f-8e2e73c23e1c&dt=2020-11-10-16.25.22.000000"
        githubUrl="https://github.com/zehguilherme/mobile-senac-bauru"
      />

      <Item
        header2Classname="green"
        logo={ezdevsLogo}
        alt="Logo da empresa Speedtest Ez.devs"
        name="Ez.devs"
        eventName="2º Bootcamp - API para o aplicativo ”TinDev”"
        date="08/02/20"
        githubUrl="https://github.com/zehguilherme/bootcamp-ezdevs-2"
      />

      <Item
        header2Classname="red"
        logo={unisagradoLogo}
        alt="Logo da empresa Unisagrado"
        name="Unisagrado"
        eventName="TCC “Modelagem 3D do Zoológico de Bauru”"
        eventFirstInformation="XXVI Fórum De Iniciação Científica;"
        eventSecondInformation="VII Fórum De Desenvolvimento Tecnológico e Inovação;"
        eventThirdInformation="VI Fórum De Iniciação Científica Do Ensino Médio;"
        date="04/11/19 · 08/11/19"
        githubUrl="https://github.com/zehguilherme/tcc-rv-zoo-bauru"
        fileUrl1={tcc}
        fileUrl2={forumIc}
        fileUrl3={certificatePresentationTcc}
      />
    </StylesQualificationsOthers>
  );
}

export default ContainerQualificationsOthers;
