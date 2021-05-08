"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLElement = _interopRequireDefault(require("./HTMLElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import HTMLElement from './HTMLElement';
// export default class HTMLImageElement extends HTMLElement
// {
//     constructor(){
//         super('img')
//     }
// };
var imageConstructor = wx.createImage().constructor; // imageConstructor.__proto__.__proto__ = new HTMLElement();

var _default = imageConstructor;
exports["default"] = _default;
module.exports = exports.default;