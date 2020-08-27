import React from 'react';

import { StylesQualificationsOthers } from './styles';

import Item from './Components/Item';

import rocketseatLogo from '../../assets/rocketseat-logo.png';
import aluraLogo from '../../assets/alura-logo.png';
import ezdevsLogo from '../../assets/ezdevs.logo.png';
import unisagradoLogo from '../../assets/unisagrado-simple-logo.png';
import senacLogo from '../../assets/senac-logo.jpg';

import certificatePresentationTcc from '../../assets/documents/certificado-apresentacao-tcc.pdf';
import tcc from '../../assets/documents/tcc.pdf';
import forumIc from '../../assets/documents/forum-ic.pdf';
import seventhComputingJourney from '../../assets/documents/7-jornada-informatica.pdf';
import sixthComputingJourney from '../../assets/documents/6-jornada-informatica.pdf';

const ContainerQualificationsOthers = () => (
  <StylesQualificationsOthers>
    <h2>Qualificações e outras atividades</h2>

    <Item
      header2Classname="rocketseat-h2"
      logo={rocketseatLogo}
      alt="Rocketseat"
      name="Rocketseat"
      eventName="Next Level Week 2 - Aplicação “Proffy”"
      date="03/08/20 · 09/08/20"
      githubUrl="https://github.com/zehguilherme/next-level-week-2"
    />

    <Item
      header2Classname="alura-h2"
      logo={aluraLogo}
      alt="Alura"
      name="Alura Cursos Online"
      eventName="Imersão React - Aplicação com ReactJS"
      date="27/07/20 · 31/07/20"
      githubUrl="https://github.com/zehguilherme/imersao-react"
    />

    <Item
      header2Classname="rocketseat-h2"
      logo={rocketseatLogo}
      alt="Rocketseat"
      name="Rocketseat"
      eventName="Next Level Week 1 - Aplicação “Ecoleta”"
      date="01/06/20 · 07/06/20"
      githubUrl="https://github.com/zehguilherme/next-level-week"
    />

    <Item
      header2Classname="rocketseat-h2"
      logo={rocketseatLogo}
      alt="Rocketseat"
      name="Rocketseat"
      eventName="11ª Semana Omnistack - Aplicação “Be The Hero”"
      date="23/03/20 · 29/03/20"
      fileUrl1="https://storage.googleapis.com/golden-wind/semana-omnistack-11/jgtomaine@hotmail.com.pdf"
      githubUrl="https://github.com/zehguilherme/semana-omnistack-11"
    />

    <Item
      header2Classname="rocketseat-h2"
      logo={rocketseatLogo}
      alt="Rocketseat"
      name="Rocketseat"
      header3Classname="rocketseat-h3"
      eventName="3ª MaratonaDev - Aplicação web para cadastro de doadores de sangue"
      date="17/02/20 · 19/02/20"
      githubUrl="https://github.com/zehguilherme/maratona-dev3"
    />

    <Item
      header2Classname="ez-devs-h2"
      logo={ezdevsLogo}
      alt="Ez.devs"
      name="Ez.devs"
      eventName="2º Bootcamp - API para o aplicativo TinDev"
      date="08/02/20"
      githubUrl="https://github.com/zehguilherme/bootcamp-ezdevs-2"
    />

    <Item
      header2Classname="rocketseat-h2"
      logo={rocketseatLogo}
      alt="Rocketseat"
      name="Rocketseat"
      eventName="10ª Semana OmniStack - Aplicação “DevRadar”"
      date="13/01/20 · 17/01/20"
      githubUrl="https://github.com/zehguilherme/semana-omnistack-10"
    />

    <Item
      header2Classname="unisagrado-h2"
      logo={unisagradoLogo}
      alt="Unisagrado"
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

    <Item
      header2Classname="unisagrado-h2"
      logo={unisagradoLogo}
      alt="Unisagrado"
      name="Unisagrado"
      eventName="8ª Jornada de Informática - Indústria 4"
      date="10/05/18 · 11/05/18"
    />

    <Item
      header2Classname="senac-h2"
      logo={senacLogo}
      alt="Senac"
      name="Senac"
      eventName="Curso de HTML5 e CSS3"
      date="17/01/18 · 12/03/18"
      githubUrl="https://github.com/zehguilherme/html5-css3"
      fileUrl1="http://www1.intranet.sp.senac.br/senac_solution/pss/relatorios/certificados/NBAS/index.cfm?CRYPTALGID=f885ab1a-e751-11ea-b767-9f93a0890ad6&dt=2020-08-26-01.09.43.000000"
    />

    <Item
      header2Classname="unisagrado-h2"
      logo={unisagradoLogo}
      alt="Unisagrado"
      name="Unisagrado"
      eventName="7ª Jornada de Informática - Games e Realidade Virtual"
      date="11/05/17 · 12/05/17"
      fileUrl1={seventhComputingJourney}
    />

    <Item
      header2Classname="unisagrado-h2"
      logo={unisagradoLogo}
      alt="Unisagrado"
      name="Unisagrado"
      eventName="6ª Jornada de Informática - Games e Realidade Virtual"
      date="02/05/16 · 03/05/16"
      fileUrl1={sixthComputingJourney}
    />
  </StylesQualificationsOthers>
);

export default ContainerQualificationsOthers;
