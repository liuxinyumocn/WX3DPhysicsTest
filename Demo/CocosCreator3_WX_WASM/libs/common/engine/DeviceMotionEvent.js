"use strict";

var inputManager = cc.internal.inputManager;
var globalAdapter = window.__globalAdapter;
Object.assign(inputManager, {
  setAccelerometerEnabled: function setAccelerometerEnabled(isEnable) {
    var scheduler = cc.director.getScheduler();
    scheduler.enableForTarget(this);

    if (isEnable) {
      this._registerAccelerometerEvent();

      scheduler.scheduleUpdate(this);
    } else {
      this._unregisterAccelerometerEvent();

      scheduler.unscheduleUpdate(this);
    }
  },
  // No need to adapt
  // setAccelerometerInterval (interval) {  },
  _registerAccelerometerEvent: function _registerAccelerometerEvent() {
    this._accelCurTime = 0;
    var self = this;
    this._acceleration = new cc.internal.Acceleration();
    globalAdapter.startAccelerometer(function (res) {
      self._acceleration.x = res.x;
      self._acceleration.y = res.y;
      self._acceleration.z = res.y;
    });
  },
  _unregisterAccelerometerEvent: function _unregisterAccelerometerEvent() {
    this._accelCurTime = 0;
    globalAdapter.stopAccelerometer();
  }
});