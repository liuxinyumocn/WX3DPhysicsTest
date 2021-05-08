"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _HTMLImageElement = _interopRequireDefault(require("./HTMLImageElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default() {
  var image = wx.createImage(); // image.__proto__.__proto__.__proto__ = new HTMLImageElement();

  return image;
}

;
module.exports = exports.default;