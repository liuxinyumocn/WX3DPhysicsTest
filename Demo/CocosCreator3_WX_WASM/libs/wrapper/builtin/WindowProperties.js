"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ontouchend = exports.ontouchmove = exports.ontouchstart = exports.performance = exports.screen = exports.devicePixelRatio = exports.innerHeight = exports.innerWidth = void 0;

var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    screenWidth = _wx$getSystemInfoSync.screenWidth,
    screenHeight = _wx$getSystemInfoSync.screenHeight,
    devicePixelRatio = _wx$getSystemInfoSync.devicePixelRatio;

exports.devicePixelRatio = devicePixelRatio;
var innerWidth = screenWidth;
exports.innerWidth = innerWidth;
var innerHeight = screenHeight;
exports.innerHeight = innerHeight;
var screen = {
  width: screenWidth,
  height: screenHeight,
  availWidth: innerWidth,
  availHeight: innerHeight,
  availLeft: 0,
  availTop: 0
};
exports.screen = screen;
var performance = {
  now: Date.now
};
exports.performance = performance;
var ontouchstart = null;
exports.ontouchstart = ontouchstart;
var ontouchmove = null;
exports.ontouchmove = ontouchmove;
var ontouchend = null;
exports.ontouchend = ontouchend;