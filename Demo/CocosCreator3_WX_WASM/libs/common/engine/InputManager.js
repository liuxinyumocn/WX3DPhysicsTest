"use strict";

var mgr = cc.internal.inputManager;
var canvasPosition = {
  left: 0,
  top: 0,
  width: window.innerWidth,
  height: window.innerHeight
};

if (mgr) {
  Object.assign(mgr, {
    _updateCanvasBoundingRect: function _updateCanvasBoundingRect() {},
    registerSystemEvent: function registerSystemEvent(element) {
      if (this._isRegisterEvent) return;
      this._glView = cc.view;
      var self = this; //register touch event

      var _touchEventsMap = {
        onTouchStart: this.handleTouchesBegin,
        onTouchMove: this.handleTouchesMove,
        onTouchEnd: this.handleTouchesEnd,
        onTouchCancel: this.handleTouchesCancel
      };

      var registerTouchEvent = function registerTouchEvent(eventName) {
        var handler = _touchEventsMap[eventName];

        __globalAdapter[eventName](function (event) {
          if (!event.changedTouches) return;
          handler.call(self, self.getTouchesByEvent(event, canvasPosition));
        });
      };

      for (var eventName in _touchEventsMap) {
        registerTouchEvent(eventName);
      }

      this._isRegisterEvent = true;
    }
  });
}