/* eslint-disable no-new */
/* eslint-disable import/extensions */
/* eslint-disable import/named */
import React, { useRef } from 'react';

import MainInformations from '../../components/MainInformations';
import Education from '../../components/Education';
import ProfessionalExperience from '../../components/ProfessionalExperience';
import Knowledge from '../../components/Knowledge';
import QualificationsOthers from '../../components/QualificationsOthers';
import SocialNetworks from '../../components/SocialNetworks';

import ReadProgressBar from '../../components/ReadProgressBar';
import SideBar from '../../components/SideBar';
import ScrollBackButton from '../../components/ScrollBackButton';

import './styles.css';

export default function Home () {
  const containerReference = useRef(null);

  document.title = 'Currículo Online';

  return (
    <>
      <ReadProgressBar containerReference={containerReference} />

      <ScrollBackButton />

      <SideBar />

      <div className="home-container" ref={containerReference}>
        <main className="curriculum-container">
          <MainInformations />

          <Education />

          <ProfessionalExperience />

          <Knowledge />

          <QualificationsOthers />

          <SocialNetworks />
        </main>

        <footer>
          <div className="footer-container">
            <p>
              Feito com
              {' '}
              <span role="img" aria-label="Heart">❤️</span>
              {' '}
              por José Guilherme
            </p>

            <p>
              <span role="img" aria-label="Color palette">🎨</span>
              {' '}
              Design usado como inspiração:
              {' '}
              <a
                title="Dribbble"
                href="https://dribbble.com/shots/9111243-Simple-Layout-CV-Curriculum-Vitae-Design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Simple Layout CV - Curriculum Vitae Design
              </a>
            </p>

            <p>
              <span role="img" aria-label="Person">👨</span>
              {' '}
              Autor:
              {' '}
              <a
                title="Linkedin"
                href="https://www.linkedin.com/in/rdfariz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Raden Fariz Insan Purnama
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
