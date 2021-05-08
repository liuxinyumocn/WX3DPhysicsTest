"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _window = _interopRequireWildcard(require("./window"));

var _document = _interopRequireDefault(require("./document"));

var _HTMLElement = _interopRequireDefault(require("./HTMLElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var global = GameGlobal;

function inject() {
  _window.document = _document["default"];

  _window.addEventListener = function (type, listener) {
    _window.document.addEventListener(type, listener);
  };

  _window.removeEventListener = function (type, listener) {
    _window.document.removeEventListener(type, listener);
  };

  _window.dispatchEvent = function () {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    console.log('window.dispatchEvent', event.type, event); // nothing to do
  };

  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      platform = _wx$getSystemInfoSync.platform; // 开发者工具无法重定义 window


  if (typeof __devtoolssubcontext === 'undefined' && platform === 'devtools') {
    for (var key in _window) {
      var descriptor = Object.getOwnPropertyDescriptor(global, key);

      if (!descriptor || descriptor.configurable === true) {
        Object.defineProperty(window, key, {
          value: _window[key]
        });
      }
    }

    for (var _key in _window.document) {
      var _descriptor = Object.getOwnPropertyDescriptor(global.document, _key);

      if (!_descriptor || _descriptor.configurable === true) {
        Object.defineProperty(global.document, _key, {
          value: _window.document[_key]
        });
      }
    }

    window.parent = window;
  } else {
    for (var _key2 in _window) {
      global[_key2] = _window[_key2];
    }

    global.window = _window;
    window = global;
    window.top = window.parent = window;
  }
}

if (!GameGlobal.__isAdapterInjected) {
  GameGlobal.__isAdapterInjected = true;
  inject();
} // overwrite global WebAssembly


global.WebAssembly = global.WXWebAssembly;