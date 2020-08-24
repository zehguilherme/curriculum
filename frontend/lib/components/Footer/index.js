"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Footer = () => <_styles.StylesFooter>
    <span className="email">
      <a href="mailto:jgtomaine@hotmail.com">
        <i className="fas fa-envelope" />
      </a>
    </span>

    <span className="github">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/zehguilherme">
        <i className="fab fa-github" />
      </a>
    </span>

    <span className="linkedin">
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josé-guilherme-paro-monteiro-tomaine/">
        <i className="fab fa-linkedin" />
      </a>
    </span>

    <span className="whatsapp">
      <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5514981195569">
        <i className="fab fa-whatsapp" />
      </a>
    </span>

    <span className="telegram">
      <a target="_blank" rel="noopener noreferrer" href="https://t.me/zehguilherme">
        <i className="fab fa-telegram" />
      </a>
    </span>
  </_styles.StylesFooter>;

var _default = Footer;
exports.default = _default;