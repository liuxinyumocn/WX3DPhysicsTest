"use strict";

var sys = cc.sys;
var originInit = sys.__init;
var adapter = window.__globalAdapter;
var env = adapter.getSystemInfoSync();
Object.assign(sys, {
  __init: function __init() {
    originInit.call(this); // TODO: add mac platform

    if (env.platform === 'windows') {
      this.isMobile = false;
      this.os = this.OS_WINDOWS;
    } else if (env.platform === 'devtools') {
      var system = env.system.toLowerCase();

      if (system.indexOf('android') > -1) {
        this.os = this.OS_ANDROID;
      } else if (system.indexOf('ios') > -1) {
        this.os = this.OS_IOS;
      }
    }

    this.platform = this.WECHAT_GAME; // move to common if other platforms support

    this.getSafeAreaRect = function () {
      var view = cc.view;
      var safeArea = adapter.getSafeArea();
      var screenSize = view.getFrameSize(); // Get leftBottom and rightTop point in UI coordinates

      var leftBottom = new cc.Vec2(safeArea.left, safeArea.bottom);
      var rightTop = new cc.Vec2(safeArea.right, safeArea.top); // Returns the real location in view.

      var relatedPos = {
        left: 0,
        top: 0,
        width: screenSize.width,
        height: screenSize.height
      };
      view.convertToLocationInView(leftBottom.x, leftBottom.y, relatedPos, leftBottom);
      view.convertToLocationInView(rightTop.x, rightTop.y, relatedPos, rightTop); // convert view point to design resolution size

      view._convertPointWithScale(leftBottom);

      view._convertPointWithScale(rightTop);

      return cc.rect(leftBottom.x, leftBottom.y, rightTop.x - leftBottom.x, rightTop.y - leftBottom.y);
    };
  }
});