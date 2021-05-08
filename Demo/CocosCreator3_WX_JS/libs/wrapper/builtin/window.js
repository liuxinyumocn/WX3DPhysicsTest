"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  canvas: true,
  setTimeout: true,
  setInterval: true,
  clearTimeout: true,
  clearInterval: true,
  requestAnimationFrame: true,
  cancelAnimationFrame: true,
  navigator: true,
  XMLHttpRequest: true,
  WebSocket: true,
  Image: true,
  ImageBitmap: true,
  Audio: true,
  FileReader: true,
  HTMLElement: true,
  HTMLImageElement: true,
  HTMLCanvasElement: true,
  HTMLMediaElement: true,
  HTMLAudioElement: true,
  HTMLVideoElement: true,
  WebGLRenderingContext: true,
  TouchEvent: true,
  MouseEvent: true,
  DeviceMotionEvent: true,
  localStorage: true,
  location: true
};
Object.defineProperty(exports, "navigator", {
  enumerable: true,
  get: function get() {
    return _navigator2["default"];
  }
});
Object.defineProperty(exports, "XMLHttpRequest", {
  enumerable: true,
  get: function get() {
    return _XMLHttpRequest2["default"];
  }
});
Object.defineProperty(exports, "WebSocket", {
  enumerable: true,
  get: function get() {
    return _WebSocket2["default"];
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _Image2["default"];
  }
});
Object.defineProperty(exports, "ImageBitmap", {
  enumerable: true,
  get: function get() {
    return _ImageBitmap2["default"];
  }
});
Object.defineProperty(exports, "Audio", {
  enumerable: true,
  get: function get() {
    return _Audio2["default"];
  }
});
Object.defineProperty(exports, "FileReader", {
  enumerable: true,
  get: function get() {
    return _FileReader2["default"];
  }
});
Object.defineProperty(exports, "HTMLElement", {
  enumerable: true,
  get: function get() {
    return _HTMLElement2["default"];
  }
});
Object.defineProperty(exports, "HTMLImageElement", {
  enumerable: true,
  get: function get() {
    return _HTMLImageElement2["default"];
  }
});
Object.defineProperty(exports, "HTMLCanvasElement", {
  enumerable: true,
  get: function get() {
    return _HTMLCanvasElement2["default"];
  }
});
Object.defineProperty(exports, "HTMLMediaElement", {
  enumerable: true,
  get: function get() {
    return _HTMLMediaElement2["default"];
  }
});
Object.defineProperty(exports, "HTMLAudioElement", {
  enumerable: true,
  get: function get() {
    return _HTMLAudioElement2["default"];
  }
});
Object.defineProperty(exports, "HTMLVideoElement", {
  enumerable: true,
  get: function get() {
    return _HTMLVideoElement2["default"];
  }
});
Object.defineProperty(exports, "WebGLRenderingContext", {
  enumerable: true,
  get: function get() {
    return _WebGLRenderingContext2["default"];
  }
});
Object.defineProperty(exports, "TouchEvent", {
  enumerable: true,
  get: function get() {
    return _index.TouchEvent;
  }
});
Object.defineProperty(exports, "MouseEvent", {
  enumerable: true,
  get: function get() {
    return _index.MouseEvent;
  }
});
Object.defineProperty(exports, "DeviceMotionEvent", {
  enumerable: true,
  get: function get() {
    return _index.DeviceMotionEvent;
  }
});
Object.defineProperty(exports, "localStorage", {
  enumerable: true,
  get: function get() {
    return _localStorage2["default"];
  }
});
Object.defineProperty(exports, "location", {
  enumerable: true,
  get: function get() {
    return _location2["default"];
  }
});
exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.canvas = void 0;

var _Canvas = _interopRequireDefault(require("./Canvas"));

var _navigator2 = _interopRequireDefault(require("./navigator"));

var _XMLHttpRequest2 = _interopRequireDefault(require("./XMLHttpRequest"));

var _WebSocket2 = _interopRequireDefault(require("./WebSocket"));

var _Image2 = _interopRequireDefault(require("./Image"));

var _ImageBitmap2 = _interopRequireDefault(require("./ImageBitmap"));

var _Audio2 = _interopRequireDefault(require("./Audio"));

var _FileReader2 = _interopRequireDefault(require("./FileReader"));

var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));

var _HTMLImageElement2 = _interopRequireDefault(require("./HTMLImageElement"));

var _HTMLCanvasElement2 = _interopRequireDefault(require("./HTMLCanvasElement"));

var _HTMLMediaElement2 = _interopRequireDefault(require("./HTMLMediaElement"));

var _HTMLAudioElement2 = _interopRequireDefault(require("./HTMLAudioElement"));

var _HTMLVideoElement2 = _interopRequireDefault(require("./HTMLVideoElement"));

var _WebGLRenderingContext2 = _interopRequireDefault(require("./WebGLRenderingContext"));

var _index = require("./EventIniter/index.js");

var _localStorage2 = _interopRequireDefault(require("./localStorage"));

var _location2 = _interopRequireDefault(require("./location"));

var _WindowProperties = require("./WindowProperties");

Object.keys(_WindowProperties).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WindowProperties[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 暴露全局的 canvas
GameGlobal.screencanvas = GameGlobal.screencanvas || new _Canvas["default"]();
var canvas = GameGlobal.screencanvas;
exports.canvas = canvas;
var _GameGlobal = GameGlobal,
    setTimeout = _GameGlobal.setTimeout,
    setInterval = _GameGlobal.setInterval,
    clearTimeout = _GameGlobal.clearTimeout,
    clearInterval = _GameGlobal.clearInterval,
    requestAnimationFrame = _GameGlobal.requestAnimationFrame,
    cancelAnimationFrame = _GameGlobal.cancelAnimationFrame;
exports.cancelAnimationFrame = cancelAnimationFrame;
exports.requestAnimationFrame = requestAnimationFrame;
exports.clearInterval = clearInterval;
exports.clearTimeout = clearTimeout;
exports.setInterval = setInterval;
exports.setTimeout = setTimeout;