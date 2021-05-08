"use strict";

function adaptView(viewProto) {
  Object.assign(viewProto, {
    _adjustViewportMeta: function _adjustViewportMeta() {// minigame not support
    },
    setRealPixelResolution: function setRealPixelResolution(width, height, resolutionPolicy) {
      // Reset the resolution size and policy
      this.setDesignResolutionSize(width, height, resolutionPolicy);
    },
    enableAutoFullScreen: function enableAutoFullScreen(enabled) {
      cc.warn('cc.view.enableAutoFullScreen() is not supported on minigame platform.');
    },
    isAutoFullScreenEnabled: function isAutoFullScreenEnabled() {
      return false;
    },
    setCanvasSize: function setCanvasSize() {
      cc.warn('cc.view.setCanvasSize() is not supported on minigame platform.');
    },
    setFrameSize: function setFrameSize() {
      cc.warn('frame size is readonly on minigame platform.');
    },
    _initFrameSize: function _initFrameSize() {
      var locFrameSize = this._frameSize;

      if (__globalAdapter.isSubContext) {
        var sharedCanvas = window.sharedCanvas || __globalAdapter.getSharedCanvas();

        locFrameSize.width = sharedCanvas.width;
        locFrameSize.height = sharedCanvas.height;
      } else {
        locFrameSize.width = window.innerWidth;
        locFrameSize.height = window.innerHeight;
      }
    }
  });
}

module.exports = adaptView;