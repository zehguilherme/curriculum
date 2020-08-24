"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Routes;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Home = _interopRequireDefault(require("./pages/Home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Routes() {
  return <_reactRouterDom.BrowserRouter>
      <_reactRouterDom.Switch>
        <_reactRouterDom.Route path="/" exact component={_Home.default} />
      </_reactRouterDom.Switch>
    </_reactRouterDom.BrowserRouter>;
}