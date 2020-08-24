"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StylesFooter = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
const StylesFooter = _styledComponents.default.footer.withConfig({
  displayName: "styles__StylesFooter",
  componentId: "aaoaru-0"
})(["box-shadow:0 0 15px rgba(0,0,0,0.2);border-radius:10px;display:flex;margin:6rem 6rem auto 6rem;justify-content:space-between;padding:2rem;@media(max-width:650px){margin:3.0rem 3.0rem auto 3.0rem;}a i{font-size:35px;color:gray;@media(max-width:360px){font-size:30px;}}a i.fas:hover{color:blue;}a i.fa-github:hover{color:black;}a i.fa-linkedin:hover{color:#0073b2;}a i.fa-whatsapp:hover{color:#00E676;}a i.fa-telegram:hover{color:#2CA5E0;}"]);

exports.StylesFooter = StylesFooter;