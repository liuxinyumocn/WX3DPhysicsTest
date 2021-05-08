"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _EventTarget2 = _interopRequireDefault(require("./EventTarget.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _url = new WeakMap();

var _method = new WeakMap();

var _requestHeader = new WeakMap();

var _responseHeader = new WeakMap();

var _requestTask = new WeakMap();

function _triggerEvent(type) {
  if (typeof this["on".concat(type)] === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this["on".concat(type)].apply(this, args);
  }
}

function _changeReadyState(readyState) {
  this.readyState = readyState;

  _triggerEvent.call(this, 'readystatechange');
}

var XMLHttpRequest = /*#__PURE__*/function (_EventTarget) {
  _inherits(XMLHttpRequest, _EventTarget);

  // TODO 没法模拟 HEADERS_RECEIVED 和 LOADING 两个状态

  /*
   * TODO 这一批事件应该是在 XMLHttpRequestEventTarget.prototype 上面的
   */
  function XMLHttpRequest() {
    var _this2;

    _classCallCheck(this, XMLHttpRequest);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(XMLHttpRequest).call(this));
    _this2.timeout = 0;
    _this2.onabort = null;
    _this2.onerror = null;
    _this2.onload = null;
    _this2.onloadstart = null;
    _this2.onprogress = null;
    _this2.ontimeout = null;
    _this2.onloadend = null;
    _this2.onreadystatechange = null;
    _this2.readyState = 0;
    _this2.response = null;
    _this2.responseText = null;
    _this2.responseType = '';
    _this2.responseXML = null;
    _this2.status = 0;
    _this2.statusText = '';
    _this2.upload = {};
    _this2.withCredentials = false;

    _requestHeader.set(_assertThisInitialized(_this2), {
      'content-type': 'application/x-www-form-urlencoded'
    });

    _responseHeader.set(_assertThisInitialized(_this2), {});

    return _this2;
  }

  _createClass(XMLHttpRequest, [{
    key: "abort",
    value: function abort() {
      var myRequestTask = _requestTask.get(this);

      if (myRequestTask) {
        myRequestTask.abort();
      }
    }
  }, {
    key: "getAllResponseHeaders",
    value: function getAllResponseHeaders() {
      var responseHeader = _responseHeader.get(this);

      return Object.keys(responseHeader).map(function (header) {
        return "".concat(header, ": ").concat(responseHeader[header]);
      }).join('\n');
    }
  }, {
    key: "getResponseHeader",
    value: function getResponseHeader(header) {
      return _responseHeader.get(this)[header];
    }
  }, {
    key: "open",
    value: function open(method, url
    /* async, user, password 这几个参数在小程序内不支持*/
    ) {
      _method.set(this, method);

      _url.set(this, url);

      _changeReadyState.call(this, XMLHttpRequest.OPENED);
    }
  }, {
    key: "overrideMimeType",
    value: function overrideMimeType() {}
  }, {
    key: "send",
    value: function send() {
      var _this3 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.readyState !== XMLHttpRequest.OPENED) {
        throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
      } else {
        var myRequestTask = wx.request({
          data: data,
          url: _url.get(this),
          method: _method.get(this),
          header: _requestHeader.get(this),
          dataType: 'other',
          responseType: this.responseType === 'arraybuffer' ? 'arraybuffer' : 'text',
          timeout: this.timeout || undefined,
          success: function success(_ref) {
            var data = _ref.data,
                statusCode = _ref.statusCode,
                header = _ref.header;
            _this3.status = statusCode;

            _responseHeader.set(_this3, header);

            _triggerEvent.call(_this3, 'loadstart');

            _changeReadyState.call(_this3, XMLHttpRequest.HEADERS_RECEIVED);

            _changeReadyState.call(_this3, XMLHttpRequest.LOADING);

            switch (_this3.responseType) {
              case 'json':
                _this3.responseText = data;

                try {
                  _this3.response = JSON.parse(data);
                } catch (e) {
                  _this3.response = null;
                }

                break;

              case '':
              case 'text':
                _this3.responseText = _this3.response = data;
                break;

              case 'arraybuffer':
                _this3.response = data;
                _this3.responseText = '';
                var bytes = new Uint8Array(data);
                var len = bytes.byteLength;

                for (var i = 0; i < len; i++) {
                  _this3.responseText += String.fromCharCode(bytes[i]);
                }

                break;

              default:
                _this3.response = null;
            }

            _changeReadyState.call(_this3, XMLHttpRequest.DONE);

            _triggerEvent.call(_this3, 'load');

            _triggerEvent.call(_this3, 'loadend');
          },
          fail: function fail(_ref2) {
            var errMsg = _ref2.errMsg;

            // TODO 规范错误
            if (errMsg.indexOf('abort') !== -1) {
              _triggerEvent.call(_this3, 'abort');
            } else if (errMsg.indexOf('timeout') !== -1) {
              _triggerEvent.call(_this3, 'timeout');
            } else {
              _triggerEvent.call(_this3, 'error', errMsg);
            }

            _triggerEvent.call(_this3, 'loadend');
          }
        });

        _requestTask.set(this, myRequestTask);
      }
    }
  }, {
    key: "setRequestHeader",
    value: function setRequestHeader(header, value) {
      var myHeader = _requestHeader.get(this);

      myHeader[header] = value;

      _requestHeader.set(this, myHeader);
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      if (typeof listener === 'function') {
        var _this = this;

        var event = {
          target: _this
        };

        this['on' + type] = function (event) {
          listener.call(_this, event);
        };
      }
    }
  }]);

  return XMLHttpRequest;
}(_EventTarget2["default"]);

exports["default"] = XMLHttpRequest;
XMLHttpRequest.UNSEND = 0;
XMLHttpRequest.OPENED = 1;
XMLHttpRequest.HEADERS_RECEIVED = 2;
XMLHttpRequest.LOADING = 3;
XMLHttpRequest.DONE = 4;
module.exports = exports.default;