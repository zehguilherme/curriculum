"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = _interopRequireDefault(require("react"));

var _MainInformations = _interopRequireDefault(require("../../components/MainInformations"));

var _Education = _interopRequireDefault(require("../../components/Education"));

var _ProfessionalExperience = _interopRequireDefault(require("../../components/ProfessionalExperience"));

var _Knowledge = _interopRequireDefault(require("../../components/Knowledge"));

var _QualificationsOthers = _interopRequireDefault(require("../../components/QualificationsOthers"));

var _Footer = _interopRequireDefault(require("../../components/Footer"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/named */
function Home() {
  return <div className="home-container">
      <div className="curriculum-container">
        <_MainInformations.default />

        <_Education.default />

        <_ProfessionalExperience.default />

        <_Knowledge.default />

        <_QualificationsOthers.default />

        <_Footer.default />
      </div>

      <footer>
        <div className="footer-container">
          <p>Feito com ❤️ por José Guilherme</p>

          <p>
            🎨 Design usado como inspiração:
            {' '}
            <a href="https://dribbble.com/shots/9111243-Simple-Layout-CV-Curriculum-Vitae-Design" target="_blank" rel="noopener noreferrer">
              Simple Layout CV - Curriculum Vitae Design

            </a>
          </p>

          <p>
            👨 Autor:
            {' '}
            <a href="https://www.linkedin.com/in/rdfariz/" target="_blank" rel="noopener noreferrer">
              Raden Fariz Insan Purnama

            </a>
          </p>
        </div>
      </footer>
    </div>;
}