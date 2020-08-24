"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
const Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-10g5rws-0"
})(["display:flex;justify-content:center;align-items:center;position:fixed;bottom:20px;right:3%;height:55px;width:55px;border-radius:100%;background:#312cec;color:#fff;z-index:1;cursor:pointer;:hover{background:#7d7bed;}@media(max-width:810px){bottom:145px;}@media(max-width:650px){bottom:88px;right:2%;}@media(max-width:610px){bottom:241px;right:2%;}.icon{height:40px;width:auto;}"]);

exports.Container = Container;