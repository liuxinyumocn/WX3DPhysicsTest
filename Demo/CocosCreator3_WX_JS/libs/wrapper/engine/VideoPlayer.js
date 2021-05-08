"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

https://www.cocos.com/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated engine source code (the "Software"), a limited,
worldwide, royalty-free, non-assignable, revocable and non-exclusive license
to use Cocos Creator solely to develop games on your target platforms. You shall
not use Cocos Creator software for developing other software or tools that's
used for developing games. You are not granted to publish, distribute,
sublicense, and/or sell copies of Cocos Creator.

The software or tools in this License Agreement are licensed, not sold.
Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
if (cc.internal.VideoPlayer) {
  var EventType = cc.internal.VideoPlayer.EventType;
  var vec3 = cc.Vec3;

  var _mat4_temp = cc.mat4();

  var _topLeft = new vec3();

  var _bottomRight = new vec3();

  cc.internal.VideoPlayerImplManager.getImpl = function (componenet) {
    return new VideoPlayerImplMiniGame(componenet);
  };

  var VideoPlayerImplMiniGame = /*#__PURE__*/function (_cc$internal$VideoPla) {
    _inherits(VideoPlayerImplMiniGame, _cc$internal$VideoPla);

    function VideoPlayerImplMiniGame(componenet) {
      _classCallCheck(this, VideoPlayerImplMiniGame);

      return _possibleConstructorReturn(this, _getPrototypeOf(VideoPlayerImplMiniGame).call(this, componenet));
    }

    _createClass(VideoPlayerImplMiniGame, [{
      key: "syncClip",
      value: function syncClip(clip) {
        this.removeVideoPlayer();

        if (!clip) {
          return;
        }

        this.createVideoPlayer(clip._nativeAsset);
      }
    }, {
      key: "syncURL",
      value: function syncURL(url) {
        this.removeVideoPlayer();

        if (!url) {
          return;
        }

        this.createVideoPlayer(url);
      }
    }, {
      key: "onCanplay",
      value: function onCanplay() {
        if (this._loaded) {
          return;
        }

        this._loaded = true;
        this.setVisible(this._visible);
        this.dispatchEvent(EventType.READY_TO_PLAY);
        this.delayedPlay();
      }
    }, {
      key: "_bindEvent",
      value: function _bindEvent() {
        var video = this._video,
            self = this;

        if (!video) {
          return;
        }

        video.onPlay(function () {
          if (self._video !== video) return;
          self._playing = true;
          self.dispatchEvent(EventType.PLAYING);
        });
        video.onEnded(function () {
          if (self._video !== video) return;
          self._playing = false;
          self._currentTime = self._duration; // ensure currentTime is at the end of duration

          self.dispatchEvent(EventType.COMPLETED);
        });
        video.onPause(function () {
          if (self._video !== video) return;
          self._playing = false;
          self.dispatchEvent(EventType.PAUSED);
        });
        video.onTimeUpdate(function (res) {
          self._duration = res.duration;
          self._currentTime = res.position;
        }); // onStop not supported, implemented in promise returned by video.stop call.
      }
    }, {
      key: "_unbindEvent",
      value: function _unbindEvent() {
        var video = this._video;

        if (!video) {
          return;
        } // BUG: video.offPlay(cb) is invalid


        video.offPlay();
        video.offEnded();
        video.offPause();
        video.offTimeUpdate(); // offStop not supported
      }
    }, {
      key: "createVideoPlayer",
      value: function createVideoPlayer(url) {
        if (!__globalAdapter.createVideo) {
          console.warn('VideoPlayer not supported');
          return;
        }

        if (!this._video) {
          this._video = __globalAdapter.createVideo();
          this._video.showCenterPlayBtn = false;
          this._video.controls = false;
          this._duration = 0;
          this._currentTime = 0;
          this._loaded = false;
          this.setVisible(this._visible);

          this._bindEvent();

          this._forceUpdate = true;
        }

        this.setURL(url);
        this._forceUpdate = true;
      }
    }, {
      key: "setURL",
      value: function setURL(path) {
        var video = this._video;

        if (!video || video.src === path) {
          return;
        }

        video.stop();

        this._unbindEvent();

        video.autoplay = true; // HACK: to implement onCanplay callback

        video.src = path;
        video.muted = true;
        var self = this;
        this._loaded = false;

        function loadedCallback() {
          video.offPlay();

          self._bindEvent();

          video.stop();
          video.muted = false;
          self._loaded = true;
          self._playing = false;
          self._currentTime = 0;
          self.dispatchEvent(EventType.READY_TO_PLAY);
          video.autoplay = false;
        }

        video.onPlay(loadedCallback);
      }
    }, {
      key: "removeVideoPlayer",
      value: function removeVideoPlayer() {
        var video = this.video;

        if (video) {
          video.stop();
          video.destroy();
          this._playing = false;
          this._loaded = false;
          this._loadedMeta = false;
          this._ignorePause = false;
          this._cachedCurrentTime = 0;
          this._video = null;
        }
      }
    }, {
      key: "setVisible",
      value: function setVisible(value) {
        var video = this._video;

        if (!video || this._visible === value) {
          return;
        }

        if (value) {
          video.width = this._actualWidth || 0;
        } else {
          video.width = 0; // hide video
        }

        this._visible = value;
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration();
      }
    }, {
      key: "duration",
      value: function duration() {
        return this._duration;
      }
    }, {
      key: "syncPlaybackRate",
      value: function syncPlaybackRate(value) {
        var video = this._video;

        if (video && value !== video.playbackRate) {
          if (value === 0.5 | value === 0.8 | value === 1.0 | value === 1.25 | value === 1.5) {
            video.playbackRate = value;
          } else {
            console.warn('The platform does not support this PlaybackRate!');
          }
        }
      }
    }, {
      key: "syncVolume",
      value: function syncVolume() {
        console.warn('The platform does not support');
      }
    }, {
      key: "syncMute",
      value: function syncMute(enable) {
        var video = this._video;

        if (video && video.muted !== enable) {
          video.muted = enable;
        }
      }
    }, {
      key: "syncLoop",
      value: function syncLoop(enable) {
        var video = this._video;

        if (video && video.loop !== enable) {
          video.loop = enable;
        }
      }
    }, {
      key: "syncStayOnBottom",
      value: function syncStayOnBottom() {
        console.warn('The platform does not support');
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        if (this.video) {
          return this.currentTime();
        }

        return -1;
      }
    }, {
      key: "currentTime",
      value: function currentTime() {
        return this._currentTime;
      }
    }, {
      key: "seekTo",
      value: function seekTo(time) {
        var video = this._video;
        if (!video || !this._loaded) return;
        video.seek(time);
      }
    }, {
      key: "disable",
      value: function disable(noPause) {
        if (this._video) {
          if (!noPause) {
            this._video.pause();
          }

          this.setVisible(false);
          this._visible = false;
        }
      }
    }, {
      key: "enable",
      value: function enable() {
        if (this._video) {
          this.setVisible(true);
          this._visible = true;
        }
      }
    }, {
      key: "canPlay",
      value: function canPlay() {
        this._video.play();

        this.syncCurrentTime();
      }
    }, {
      key: "resume",
      value: function resume() {
        var video = this._video;
        if (this._playing || !video) return;
        video.play();
      }
    }, {
      key: "pause",
      value: function pause() {
        var video = this._video;
        if (!this._playing || !video) return;
        video.pause();
      }
    }, {
      key: "stop",
      value: function stop() {
        var self = this;
        var video = this._video;
        if (!video || !this._visible) return;
        video.stop().then(function (res) {
          if (res.errMsg && !res.errMsg.includes('ok')) {
            console.error('failed to stop video player');
            return;
          }

          self._currentTime = 0;
          self._playing = false;
          self.dispatchEvent(EventType.STOPPED);
        });
      }
    }, {
      key: "canFullScreen",
      value: function canFullScreen(enabled) {
        if (this._video) {
          this.setFullScreenEnabled(enabled);
        }
      }
    }, {
      key: "setFullScreenEnabled",
      value: function setFullScreenEnabled(enable) {
        var video = this._video;

        if (!video || this._fullScreenEnabled === enable) {
          return;
        }

        if (enable) {
          video.requestFullScreen();
        } else {
          video.exitFullScreen();
        }

        this._fullScreenEnabled = enable;
      }
    }, {
      key: "syncKeepAspectRatio",
      value: function syncKeepAspectRatio(enabled) {
        console.warn('On wechat game videoPlayer is always keep the aspect ratio');
      }
    }, {
      key: "syncMatrix",
      value: function syncMatrix() {
        if (!this._video || !this._component || !this._uiTrans) return;
        var camera = this.UICamera;

        if (!camera) {
          return;
        }

        this._component.node.getWorldMatrix(_mat4_temp);

        var _this$_uiTrans$conten = this._uiTrans.contentSize,
            width = _this$_uiTrans$conten.width,
            height = _this$_uiTrans$conten.height;

        if (!this._forceUpdate && this._m00 === _mat4_temp.m00 && this._m01 === _mat4_temp.m01 && this._m04 === _mat4_temp.m04 && this._m05 === _mat4_temp.m05 && this._m12 === _mat4_temp.m12 && this._m13 === _mat4_temp.m13 && this._w === width && this._h === height) {
          return;
        } // update matrix cache


        this._m00 = _mat4_temp.m00;
        this._m01 = _mat4_temp.m01;
        this._m04 = _mat4_temp.m04;
        this._m05 = _mat4_temp.m05;
        this._m12 = _mat4_temp.m12;
        this._m13 = _mat4_temp.m13;
        this._w = width;
        this._h = height;
        var canvas_width = cc.game.canvas.width;
        var canvas_height = cc.game.canvas.height;
        var dpr = cc.view._devicePixelRatio;
        var ap = this._uiTrans.anchorPoint; // Vectors in node space

        vec3.set(_topLeft, -ap.x * this._w, (1.0 - ap.y) * this._h, 0);
        vec3.set(_bottomRight, (1 - ap.x) * this._w, -ap.y * this._h, 0); // Convert to world space

        vec3.transformMat4(_topLeft, _topLeft, _mat4_temp);
        vec3.transformMat4(_bottomRight, _bottomRight, _mat4_temp); // Convert to Screen space

        camera.worldToScreen(_topLeft, _topLeft);
        camera.worldToScreen(_bottomRight, _bottomRight);
        var finalWidth = _bottomRight.x - _topLeft.x;
        var finalHeight = _topLeft.y - _bottomRight.y;
        this._video.x = _topLeft.x / dpr;
        this._video.y = (canvas_height - _topLeft.y) / dpr;
        this._actualWidth = this._video.width = finalWidth / dpr;
        this._video.height = finalHeight / dpr;
        this._forceUpdate = false;
      }
    }]);

    return VideoPlayerImplMiniGame;
  }(cc.internal.VideoPlayerImpl);
}