"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _routes = _interopRequireDefault(require("./routes"));

var _ScrollBackButton = _interopRequireDefault(require("./components/ScrollBackButton"));

var _Global = _interopRequireDefault(require("./styles/Global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = () => <>
    <_Global.default />
    <_ScrollBackButton.default />
    <_routes.default />
  </>;

var _default = App;
exports.default = _default;