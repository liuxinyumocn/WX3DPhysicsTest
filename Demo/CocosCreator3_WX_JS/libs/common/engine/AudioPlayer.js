"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AudioPlayer = cc.internal.AudioPlayer;

if (AudioPlayer) {
  var loadInnerAudioContext = function loadInnerAudioContext(url) {
    return new Promise(function (resolve, reject) {
      var nativeAudio = __globalAdapter.createInnerAudioContext();

      var timer = setTimeout(function () {
        clearEvent();
        resolve(nativeAudio);
      }, 8000);

      function clearEvent() {
        nativeAudio.offCanplay(success);
        nativeAudio.offError(fail);
      }

      function success() {
        clearEvent();
        clearTimeout(timer);
        resolve(nativeAudio);
      }

      function fail() {
        clearEvent();
        clearTimeout(timer);
        reject('failed to load innerAudioContext: ' + err);
      }

      nativeAudio.onCanplay(success);
      nativeAudio.onError(fail);
      nativeAudio.src = url;
    });
  };

  var _cc$AudioClip = cc.AudioClip,
      PlayingState = _cc$AudioClip.PlayingState,
      AudioType = _cc$AudioClip.AudioType;
  var AudioManager = cc.internal.AudioManager;
  AudioManager.maxAudioChannel = 10;

  var AudioManagerMiniGame = /*#__PURE__*/function (_AudioManager) {
    _inherits(AudioManagerMiniGame, _AudioManager);

    function AudioManagerMiniGame() {
      _classCallCheck(this, AudioManagerMiniGame);

      return _possibleConstructorReturn(this, _getPrototypeOf(AudioManagerMiniGame).apply(this, arguments));
    }

    _createClass(AudioManagerMiniGame, [{
      key: "discardOnePlayingIfNeeded",
      value: function discardOnePlayingIfNeeded() {
        if (this._playingAudios.length < AudioManager.maxAudioChannel) {
          return;
        } // a played audio has a higher priority than a played shot


        var audioToDiscard;

        var oldestOneShotIndex = this._playingAudios.findIndex(function (audio) {
          return !(audio instanceof AudioPlayerMiniGame);
        });

        if (oldestOneShotIndex > -1) {
          audioToDiscard = this._playingAudios[oldestOneShotIndex];

          this._playingAudios.splice(oldestOneShotIndex, 1);
        } else {
          audioToDiscard = this._playingAudios.shift();
        }

        if (audioToDiscard) {
          audioToDiscard.stop();
        }
      }
    }]);

    return AudioManagerMiniGame;
  }(AudioManager);

  cc.AudioClip.prototype._getPlayer = function (clip) {
    this._loadMode = AudioType.JSB_AUDIO;
    return AudioPlayerMiniGame;
  };

  var AudioPlayerMiniGame = /*#__PURE__*/function (_AudioPlayer) {
    _inherits(AudioPlayerMiniGame, _AudioPlayer);

    function AudioPlayerMiniGame(info) {
      var _this;

      _classCallCheck(this, AudioPlayerMiniGame);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioPlayerMiniGame).call(this, info));
      _this._startTime = 0;
      _this._offset = 0;
      _this._volume = 1;
      _this._loop = false;
      _this._nativeAudio = info.nativeAudio;

      _this._nativeAudio.onPlay(function () {
        if (_this._state === PlayingState.PLAYING) {
          return;
        }

        _this._state = PlayingState.PLAYING;
        _this._startTime = performance.now();

        _this._clip.emit('started');
      });

      _this._nativeAudio.onPause(function () {
        if (_this._state === PlayingState.STOPPED) {
          return;
        }

        _this._state = PlayingState.STOPPED;
        _this._offset += performance.now() - _this._startTime;
      });

      _this._nativeAudio.onStop(function () {
        if (_this._state === PlayingState.STOPPED) {
          return;
        }

        _this._state = PlayingState.STOPPED;
        _this._offset = 0;
      });

      _this._nativeAudio.onEnded(function () {
        if (_this._state === PlayingState.STOPPED) {
          return;
        }

        _this._state = PlayingState.STOPPED;
        _this._offset = 0;

        _this._clip.emit('ended');

        AudioPlayerMiniGame._manager.removePlaying(_assertThisInitialized(_this));
      });

      _this._nativeAudio.onError(function (res) {
        return console.error(res.errMsg);
      });

      return _this;
    }

    _createClass(AudioPlayerMiniGame, [{
      key: "play",
      value: function play() {
        if (!this._nativeAudio) {
          return;
        }

        if (this._blocking) {
          this._interrupted = true;
          return;
        }

        if (this._state === PlayingState.PLAYING) {
          /* sometimes there is no way to update the playing state
          especially when player unplug earphones and the audio automatically stops
          so we need to force updating the playing state by pausing audio */
          this.pause(); // restart if already playing

          this.setCurrentTime(0);
        }

        AudioPlayerMiniGame._manager.discardOnePlayingIfNeeded();

        this._nativeAudio.play();

        AudioPlayerMiniGame._manager.addPlaying(this);
      }
    }, {
      key: "pause",
      value: function pause() {
        if (!this._nativeAudio || this._state !== PlayingState.PLAYING) {
          return;
        }

        this._nativeAudio.pause();

        AudioPlayerMiniGame._manager.removePlaying(this._clip);
      }
    }, {
      key: "stop",
      value: function stop() {
        if (!this._nativeAudio) {
          return;
        }

        this._nativeAudio.stop();

        AudioPlayerMiniGame._manager.removePlaying(this._clip);
      }
    }, {
      key: "playOneShot",
      value: function playOneShot(volume) {
        loadInnerAudioContext(this._nativeAudio.src).then(function (innerAudioContext) {
          AudioPlayerMiniGame._manager.discardOnePlayingIfNeeded();

          innerAudioContext.volume = volume;
          innerAudioContext.play();

          AudioPlayerMiniGame._manager.addPlaying(innerAudioContext);

          innerAudioContext.onEnded(function () {
            AudioPlayerMiniGame._manager.removePlaying(innerAudioContext);
          });
        });
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        if (this._state !== PlayingState.PLAYING) {
          return this._offset / 1000;
        }

        var current = (performance.now() - this._startTime + this._offset) / 1000;

        if (current > this._duration) {
          if (!this._loop) return 0;
          current -= this._duration;
          this._startTime += this._duration * 1000;
        }

        return current;
      }
    }, {
      key: "setCurrentTime",
      value: function setCurrentTime(val) {
        if (!this._nativeAudio) {
          return;
        }

        this._offset = cc.math.clamp(val, 0, this._duration) * 1000;
        this._startTime = performance.now();

        this._nativeAudio.seek(val);
      }
    }, {
      key: "getVolume",
      value: function getVolume() {
        return this._volume;
      }
    }, {
      key: "setVolume",
      value: function setVolume(val, immediate) {
        this._volume = val;

        if (this._nativeAudio) {
          this._nativeAudio.volume = val;
        }
      }
    }, {
      key: "getLoop",
      value: function getLoop() {
        return this._loop;
      }
    }, {
      key: "setLoop",
      value: function setLoop(val) {
        this._loop = val;

        if (this._nativeAudio) {
          this._nativeAudio.loop = val;
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this._nativeAudio) {
          this._nativeAudio.destroy();
        }

        _get(_getPrototypeOf(AudioPlayerMiniGame.prototype), "destroy", this).call(this);
      }
    }]);

    return AudioPlayerMiniGame;
  }(AudioPlayer);

  AudioPlayerMiniGame._manager = new AudioManagerMiniGame();
}