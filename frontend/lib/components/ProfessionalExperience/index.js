"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _abc71Logo = _interopRequireDefault(require("../../assets/abc71-logo.png"));

var _speksciencesLogo = _interopRequireDefault(require("../../assets/speksciences-logo.jpg"));

var _tvunespLogo = _interopRequireDefault(require("../../assets/tvunesp-logo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContainerProfessionalExperience = () => <_styles.StylesProfessionalExperience>
    <h2>Experiência Profissional</h2>

    <div className="abc71 item">
      <img src={_abc71Logo.default} alt="ABC71" />
      <div className="information">
        <h3>
          <a target="_blank" rel="noopener noreferrer" href="https://www.abc71.com.br/">
            ABC71 Sistemas de Gestão para Indústrias
          </a>
        </h3>
        <p className="position">Estágio - Desenvolvedor C++</p>
        <p className="date">05/11/18 · 15/12/19</p>
      </div>
    </div>

    <div className="speksciences item">
      <img src={_speksciencesLogo.default} alt="SpekSciences" />
      <div className="information">
        <h3>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/speksciences/">
            Speksciences
          </a>
        </h3>
        <p className="position">Estágio - Desenvolvedor web</p>
        <p className="date">01/04/19 · 31/05/19</p>
      </div>
    </div>

    <div className="tv-unesp item">
      <img src={_tvunespLogo.default} alt="TV Unesp" />
      <div className="information">
        <h3>
          <a target="_blank" rel="noopener noreferrer" href="https://tv.unesp.br/">
            TV UNESP
          </a>
        </h3>
        <p className="position">Estágio - Suporte técnico</p>
        <p className="date">10/09/18 · 17/10/18</p>
      </div>
    </div>
  </_styles.StylesProfessionalExperience>;

var _default = ContainerProfessionalExperience;
exports.default = _default;