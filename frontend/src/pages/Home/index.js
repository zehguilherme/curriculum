/* eslint-disable import/named */
import React from 'react';

import MainInformations from '../../components/MainInformations';
import Education from '../../components/Education';
import ProfessionalExperience from '../../components/ProfessionalExperience';
import Knowledge from '../../components/Knowledge';
import QualificationsOthers from '../../components/QualificationsOthers';
import Footer from '../../components/Footer';

import './styles.css';

export default function Home () {
  return (
    <div className="home-container">
      <div className="curriculum-container">
        <MainInformations />

        <Education />

        <ProfessionalExperience />

        <Knowledge />

        <QualificationsOthers />

        <Footer />
      </div>

      <footer>
        <div className="footer-container">
          <p>Feito com ❤️ por José Guilherme</p>

          <p>
            🎨 Design usado como inspiração:
            {' '}
            <a
              href="https://dribbble.com/shots/9111243-Simple-Layout-CV-Curriculum-Vitae-Design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Simple Layout CV - Curriculum Vitae Design

            </a>
          </p>

          <p>
            👨 Autor:
            {' '}
            <a
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
  );
}
