"use strict";

(function () {
  if (!(cc && cc.EditBoxComponent)) {
    return;
  }

  var EditBoxComp = cc.EditBoxComponent;
  var js = cc.js;
  var KeyboardReturnType = EditBoxComp.KeyboardReturnType;
  var MAX_VALUE = 65535;
  var KEYBOARD_HIDE_TIME = 600;
  var _hideKeyboardTimeout = null;
  var _currentEditBoxImpl = null;

  function getKeyboardReturnType(type) {
    switch (type) {
      case KeyboardReturnType.DEFAULT:
      case KeyboardReturnType.DONE:
        return 'done';

      case KeyboardReturnType.SEND:
        return 'send';

      case KeyboardReturnType.SEARCH:
        return 'search';

      case KeyboardReturnType.GO:
        return 'go';

      case KeyboardReturnType.NEXT:
        return 'next';
    }

    return 'done';
  }

  function MiniGameEditBoxImpl() {
    this._delegate = null;
    this._editing = false;
    this._eventListeners = {
      onKeyboardInput: null,
      onKeyboardConfirm: null,
      onKeyboardComplete: null
    };
  }

  js.extend(MiniGameEditBoxImpl, EditBoxComp._EditBoxImpl);
  EditBoxComp._EditBoxImpl = MiniGameEditBoxImpl;
  Object.assign(MiniGameEditBoxImpl.prototype, {
    init: function init(delegate) {
      if (!delegate) {
        cc.error('EditBox init failed');
        return;
      }

      this._delegate = delegate;
    },
    beginEditing: function beginEditing() {
      var _this = this;

      // In case multiply register events
      if (this._editing) {
        return;
      }

      this._ensureKeyboardHide(function () {
        var delegate = _this._delegate;

        _this._showKeyboard();

        _this._registerKeyboardEvent();

        _this._editing = true;
        _currentEditBoxImpl = _this;

        delegate._editBoxEditingDidBegan();
      });
    },
    endEditing: function endEditing() {
      this._hideKeyboard();

      var cbs = this._eventListeners;
      cbs.onKeyboardComplete && cbs.onKeyboardComplete();
    },
    _registerKeyboardEvent: function _registerKeyboardEvent() {
      var self = this;
      var delegate = this._delegate;
      var cbs = this._eventListeners;

      cbs.onKeyboardInput = function (res) {
        if (delegate._string !== res.value) {
          delegate._editBoxTextChanged(res.value);
        }
      };

      cbs.onKeyboardConfirm = function (res) {
        delegate._editBoxEditingReturn();

        var cbs = self._eventListeners;
        cbs.onKeyboardComplete && cbs.onKeyboardComplete();
      };

      cbs.onKeyboardComplete = function () {
        self._editing = false;
        _currentEditBoxImpl = null;

        self._unregisterKeyboardEvent();

        delegate._editBoxEditingDidEnded();
      };

      __globalAdapter.onKeyboardInput(cbs.onKeyboardInput);

      __globalAdapter.onKeyboardConfirm(cbs.onKeyboardConfirm);

      __globalAdapter.onKeyboardComplete(cbs.onKeyboardComplete);
    },
    _unregisterKeyboardEvent: function _unregisterKeyboardEvent() {
      var cbs = this._eventListeners;

      if (cbs.onKeyboardInput) {
        __globalAdapter.offKeyboardInput(cbs.onKeyboardInput);

        cbs.onKeyboardInput = null;
      }

      if (cbs.onKeyboardConfirm) {
        __globalAdapter.offKeyboardConfirm(cbs.onKeyboardConfirm);

        cbs.onKeyboardConfirm = null;
      }

      if (cbs.onKeyboardComplete) {
        __globalAdapter.offKeyboardComplete(cbs.onKeyboardComplete);

        cbs.onKeyboardComplete = null;
      }
    },
    _otherEditing: function _otherEditing() {
      return !!_currentEditBoxImpl && _currentEditBoxImpl !== this && _currentEditBoxImpl._editing;
    },
    _ensureKeyboardHide: function _ensureKeyboardHide(cb) {
      var otherEditing = this._otherEditing();

      if (!otherEditing && !_hideKeyboardTimeout) {
        return cb();
      }

      if (_hideKeyboardTimeout) {
        clearTimeout(_hideKeyboardTimeout);
      }

      if (otherEditing) {
        _currentEditBoxImpl.endEditing();
      }

      _hideKeyboardTimeout = setTimeout(function () {
        _hideKeyboardTimeout = null;
        cb();
      }, KEYBOARD_HIDE_TIME);
    },
    _showKeyboard: function _showKeyboard() {
      var delegate = this._delegate;
      var multiline = delegate.inputMode === EditBoxComp.InputMode.ANY;

      __globalAdapter.showKeyboard({
        defaultValue: delegate.string,
        maxLength: delegate.maxLength < 0 ? MAX_VALUE : delegate.maxLength,
        multiple: multiline,
        confirmHold: false,
        confirmType: getKeyboardReturnType(delegate.returnType),
        success: function success(res) {},
        fail: function fail(res) {
          cc.warn(res.errMsg);
        }
      });
    },
    _hideKeyboard: function _hideKeyboard() {
      __globalAdapter.hideKeyboard({
        success: function success(res) {},
        fail: function fail(res) {
          cc.warn(res.errMsg);
        }
      });
    }
  });
})();