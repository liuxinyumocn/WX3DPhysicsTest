"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Canvas = _interopRequireDefault(require("./Canvas"));

var _HTMLElement = _interopRequireDefault(require("./HTMLElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import HTMLElement from './HTMLElement';
// export default class HTMLCanvasElement extends HTMLElement
// {
//     constructor(){
//         super('canvas')
//     }
// };
GameGlobal.screencanvas = GameGlobal.screencanvas || new _Canvas["default"]();
var canvas = GameGlobal.screencanvas;
var canvasConstructor = canvas.constructor; // canvasConstructor.__proto__.__proto__ = new HTMLElement();

var _default = canvasConstructor;
exports["default"] = _default;
module.exports = exports.default;