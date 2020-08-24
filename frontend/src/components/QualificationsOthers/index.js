import React from 'react';

import { StylesQualificationsOthers } from './styles';

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

    <div className="rocketseat item">
      <img src={rocketseatLogo} alt="Rocketseat" />

      <div className="information">
        <h2>Rocketseat</h2>
        <h3>Next Level Week 2 - Aplicação “Proffy”</h3>

        <p>03/08/20 · 09/08/20</p>

        <span className="github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zehguilherme/next-level-week-2"
          >
            <i className="fab fa-github" />
          </a>
        </span>
      </div>
    </div>

    <div className="alura item">
      <img src={aluraLogo} alt="Alura" />

      <div className="information">
        <h2>Alura Cursos Online</h2>
        <h3>Imersão React - Aplicação com ReactJS</h3>

        <p>27/07/20 · 31/07/20</p>

        <span className="github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zehguilherme/imersao-react"
          >
            <i className="fab fa-github" />
          </a>
        </span>
      </div>
    </div>

    <div className="rocketseat item">
      <img src={rocketseatLogo} alt="Rocketseat" />

      <div className="information">
        <h2>Rocketseat</h2>
        <h3>Next Level Week 1 - Aplicação “Ecoleta”</h3>

        <p>01/06/20 · 07/06/20</p>

        <span className="github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zehguilherme/next-level-week"
          >
            <i className="fab fa-github" />
          </a>
        </span>
      </div>
    </div>

    <div className="rocketseat item">
      <img src={rocketseatLogo} alt="Rocketseat" />

      <div className="information">
        <h2>Rocketseat</h2>
        <h3>
          11ª Semana Omnistack - Aplicação “Be The Hero”
        </h3>

        <p>23/03/20 · 29/03/20</p>

        <div className="icons">
          <span className="file">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://storage.googleapis.com/golden-wind/semana-omnistack-11/jgtomaine@hotmail.com.pdf"
            >
              <i className="far fa-file-alt" />
            </a>
          </span>

          <span className="github">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/zehguilherme/semana-omnistack-11"
            >
              <i className="fab fa-github" />
            </a>
          </span>
        </div>
      </div>
    </div>

    <div className="rocketseat item">
      <img src={rocketseatLogo} alt="Rocketseat" />

      <div className="information">
        <h2>Rocketseat</h2>
        <h3>
          3ª MaratonaDev - Aplicação web para
          {' '}
          <br />
          {' '}
          cadastro de doadores de sangue
        </h3>

        <p>17/02/20 · 19/02/20</p>

        <span className="github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zehguilherme/maratona-dev3"
          >
            <i className="fab fa-github" />
          </a>
        </span>
      </div>
    </div>

    <div className="ez-devs item">
      <img src={ezdevsLogo} alt="Ez.devs" />

      <div className="information">
        <h2>Ez.devs</h2>
        <h3>2º Bootcamp - API para o aplicativo TinDev</h3>

        <p>08/02/20</p>

        <span className="github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zehguilherme/bootcamp-ezdevs-2"
          >
            <i className="fab fa-github" />
          </a>
        </span>
      </div>
    </div>

    <div className="rocketseat item">
      <img src={rocketseatLogo} alt="Rocketseat" />

      <div className="information">
        <h2>Rocketseat</h2>
        <h3>10ª Semana OmniStack - Aplicação “DevRadar”</h3>

        <p>13/01/20 · 17/01/20</p>

        <span className="github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zehguilherme/semana-omnistack-10"
          >
            <i className="fab fa-github" />
          </a>
        </span>
      </div>
    </div>

    <div className="unisagrado item">
      <img src={unisagradoLogo} alt="Unisagrado" />

      <div className="information">
        <h2>Unisagrado</h2>
        <h3>TCC “Modelagem 3D do Zoológico de Bauru”</h3>

        <p>XXVI Fórum De Iniciação Científica;</p>
        <p>VII Fórum De Desenvolvimento Tecnológico e Inovação;</p>
        <p>VI Fórum De Iniciação Científica Do Ensino Médio;</p>

        <p>04/11/19 · 08/11/19</p>

        <div className="icons">
          <span className="file">
            <a target="_blank" rel="noopener noreferrer" href={tcc}>
              <i className="far fa-file-alt" />
            </a>
          </span>

          <span className="file">
            <a target="_blank" rel="noopener noreferrer" href={forumIc}>
              <i className="far fa-file-alt" />
            </a>
          </span>

          <span className="file">
            <a target="_blank" rel="noopener noreferrer" href={certificatePresentationTcc}>
              <i className="far fa-file-alt" />
            </a>
          </span>

          <span className="github">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/zehguilherme/tcc-rv-zoo-bauru"
            >
              <i className="fab fa-github" />
            </a>
          </span>
        </div>
      </div>
    </div>

    <div className="unisagrado item">
      <img src={unisagradoLogo} alt="Unisagrado" />

      <div className="information">
        <h2>Unisagrado</h2>
        <h3>8ª Jornada de Informática - Indústria 4</h3>

        <p>10/05/18 · 11/05/18</p>
      </div>
    </div>

    <div className="senac item">
      <img src={senacLogo} alt="Senac" />

      <div className="information">
        <h2>Senac</h2>
        <h3>Curso de HTML5 e CSS3</h3>

        <p>17/01/18 · 12/03/18</p>

        <div className="icons">
          <span className="file">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www1.intranet.sp.senac.br/
              senac_solution/pss/relatorios/certificados/NBAS/
              index.cfm?CRYPTALGID=cebde708-5330-11ea-b3f1-d869312b4231&dt=2020-02-19-12.59.28.000000"
            >
              <i className="far fa-file-alt" />
            </a>
          </span>

          <span className="github">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/zehguilherme/html5-css3"
            >
              <i className="fab fa-github" />
            </a>
          </span>
        </div>

      </div>
    </div>

    <div className="unisagrado item">
      <img src={unisagradoLogo} alt="Unisagrado" />

      <div className="information">
        <h2>Unisagrado</h2>
        <h3>7ª Jornada de Informática - Games e Realidade Virtual</h3>

        <p>11/05/17 · 12/05/17</p>

        <span className="file">
          <a target="_blank" rel="noopener noreferrer" href={seventhComputingJourney}>
            <i className="far fa-file-alt" />
          </a>
        </span>
      </div>
    </div>

    <div className="unisagrado item">
      <img src={unisagradoLogo} alt="Unisagrado" />

      <div className="information">
        <h2>Unisagrado</h2>
        <h3>6ª Jornada de Informática - Internet das Coisas</h3>

        <p>02/05/16 · 03/05/16</p>

        <span className="file">
          <a target="_blank" rel="noopener noreferrer" href={sixthComputingJourney}>
            <i className="far fa-file-alt" />
          </a>
        </span>
      </div>
    </div>
  </StylesQualificationsOthers>
);

export default ContainerQualificationsOthers;
