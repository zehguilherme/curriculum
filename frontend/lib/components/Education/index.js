"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _unisagradoLogo = _interopRequireDefault(require("../../assets/unisagrado-logo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContainerEducation = () => <_styles.StylesEducation>
    <h2>Formação</h2>

    <div className="unisagrado">
      <img src={_unisagradoLogo.default} alt="Unisagrado" className="unisagrado-img" />

      <div className="information">
        <h3>
          <a target="_blank" rel="noopener noreferrer" href="https://unisagrado.edu.br/">
            Unisagrado
          </a>
        </h3>

        <p className="course">Ciência da Computação</p>
        <p className="years">2016 - 2019</p>
      </div>
    </div>
  </_styles.StylesEducation>;

var _default = ContainerEducation;
exports.default = _default;