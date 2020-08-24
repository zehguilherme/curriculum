"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _blenderLogo = _interopRequireDefault(require("../../assets/blender-logo.svg"));

var _svnLogo = _interopRequireDefault(require("../../assets/svn-logo.png"));

var _pascalLogo = _interopRequireDefault(require("../../assets/pascal-logo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContainerKnowledge = () => <_styles.StylesKnowledge>
    <h2>Conhecimentos</h2>

    <div className="grid">
      <div className="pascal card">
        <img src={_pascalLogo.default} alt="Pascal logo" />
      </div>

      <div className="c-sharp card">
        <i className="devicon-csharp-line colored" />
      </div>

      <div className="java card">
        <i className="devicon-java-plain-wordmark colored" />
      </div>

      <div className="javascript card">
        <i className="devicon-javascript-plain colored" />
      </div>

      <div className="html5 card">
        <i className="devicon-html5-plain-wordmark colored" />
      </div>

      <div className="css3 card">
        <i className="devicon-css3-plain-wordmark colored" />
      </div>

      <div className="mysql card">
        <i className="devicon-mysql-plain-wordmark colored" />
      </div>

      <div className="oracle card">
        <i className="devicon-oracle-original colored" />
      </div>

      <div className="blender card">
        <img src={_blenderLogo.default} alt="Blender logo" />
      </div>

      <div className="git card">
        <i className="devicon-git-plain-wordmark colored" />
      </div>

      <div className="svn card">
        <img src={_svnLogo.default} alt="SVN logo" />
      </div>

      <div className="react card">
        <i className="devicon-react-original-wordmark colored" />
      </div>

      <div className="react-native card">
        <i className="devicon-react-original colored" />
      </div>

      <div className="node card">
        <i className="devicon-nodejs-plain colored" />
      </div>

      <div className="c-plus-plus card">
        <i className="devicon-cplusplus-line-wordmark colored" />
      </div>

      <div className="english card">
        <h3>Inglês técnico</h3>
      </div>
    </div>
  </_styles.StylesKnowledge>;

var _default = ContainerKnowledge;
exports.default = _default;