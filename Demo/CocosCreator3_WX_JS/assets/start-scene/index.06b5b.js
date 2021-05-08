
import global from '../../global';
System.register("chunks:///_virtual/cube_script.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Prefab, Label, instantiate, Component;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Label = module.Label;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }

        return desc;
      }

      cclegacy._RF.push({}, "2be70I84mBGebmeH/sLGkpy", "cube_script", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CubeScript = exports('CubeScript', (_dec = ccclass('CubeScript'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CubeScript, _Component);

        function CubeScript() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "cubePrfb", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "numLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "timeout", _descriptor3, _assertThisInitialized(_this));

          _this.renderTimes = 0;
          _this.cubeNumber = 0;
          _this.scheduleTaskHandler = null;
          _this.lastTimestamp = 0;
          return _this;
        }

        var _proto = CubeScript.prototype;

        _proto.start = function start() {
          this.lastTimestamp = new Date().getTime(); //以每50方块为计数区间

          this.scheduleTaskHandler = function(){
            this.generateCude();
            this.cubeNumber++;
            global.num = this.cubeNumber;
            this.numLabel.string = this.cubeNumber;
            if (this.cubeNumber % 50 == 0) {
              var now = new Date().getTime();
              var d = now - this.lastTimestamp;
              this.timeout.string = d + 'ms';
              this.lastTimestamp = now;
            }

            if (this.cubeNumber >= 402) {
                global.print();
                this.unschedule(this.scheduleTaskHandler);
            }

          }
          this.schedule(this.scheduleTaskHandler, 0.1);
        };

        _proto.generateCude = function generateCude() {
          var cube = instantiate(this.cubePrfb);

          if (cube) {
            //生成随机位置
            var sX = Math.random() * 0.75 + 0.25;
            var sY = Math.random() * 0.75 + 0.25;
            var sZ = Math.random() * 0.75 + 0.25;
            cube.setScale(sX, sY, sZ);
            cube.setPosition(Math.random() * 4 - 2, 10, Math.random() * 4 - 2);
            this.node.addChild(cube);
          }
        };

        _proto.update = function update(deltaTime) {
          //帧率计数器
          this.renderTimes++;
        };

        return CubeScript;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cubePrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "numLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "timeout", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/migrate-canvas.ts", ['cc'], function () {
  'use strict';

  var cclegacy, director, Director, Canvas, Camera, game;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
      Canvas = module.Canvas;
      Camera = module.Camera;
      game = module.game;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8f815i1H1ZHroMzORuUfbRW", "migrate-canvas", undefined);

      var customLayerMask = 0x000fffff;
      var builtinLayerMask = 0xfff00000;
      director.on(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
        var _director$getScene, _director$getScene2, _director$getScene3;

        var roots = (_director$getScene = director.getScene()) === null || _director$getScene === void 0 ? void 0 : _director$getScene.children;
        var allCanvases = (_director$getScene2 = director.getScene()) === null || _director$getScene2 === void 0 ? void 0 : _director$getScene2.getComponentsInChildren(Canvas);
        if (allCanvases.length <= 1) return;
        allCanvases = allCanvases.filter(function (x) {
          return !!x.cameraComponent;
        });
        var allCameras = (_director$getScene3 = director.getScene()) === null || _director$getScene3 === void 0 ? void 0 : _director$getScene3.getComponentsInChildren(Camera);
        var usedLayer = 0;
        allCameras.forEach(function (x) {
          return usedLayer |= x.visibility & customLayerMask;
        });
        var persistCanvas = [];

        for (var i = 0, l = roots.length; i < l; i++) {
          var root = roots[i];
          if (!game.isPersistRootNode(root)) continue;
          var canvases = root.getComponentsInChildren(Canvas);
          if (canvases.length === 0) continue;
          persistCanvas.push.apply(persistCanvas, canvases.filter(function (x) {
            return !!x.cameraComponent;
          }));
        }

        persistCanvas.forEach(function (val) {
          var isLayerCollided = allCanvases.find(function (x) {
            return x !== val && x.cameraComponent.visibility & val.cameraComponent.visibility & customLayerMask;
          });

          if (isLayerCollided) {
            var availableLayers = ~usedLayer;
            var lastAvailableLayer = availableLayers & ~(availableLayers - 1);
            val.cameraComponent.visibility = lastAvailableLayer | val.cameraComponent.visibility & builtinLayerMask;
            setChildrenLayer(val.node, lastAvailableLayer);
            usedLayer |= availableLayers;
          }
        });
      });

      function setChildrenLayer(node, layer) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          node.children[i].layer = layer;
          setChildrenLayer(node.children[i], layer);
        }
      }

      var setParentEngine = cc.Node.prototype.setParent;

      cc.Node.prototype.setParent = function (value, keepWorldTransform) {
        setParentEngine.call(this, value, keepWorldTransform);
        if (!value) return; // find canvas

        var layer = getCanvasCameraLayer(this);

        if (layer) {
          this.layer = layer;
          setChildrenLayer(this, layer);
        }
      };

      function getCanvasCameraLayer(node) {
        var layer = null;
        var canvas = node.getComponent(Canvas);

        if (canvas && canvas.cameraComponent) {
          if (canvas.cameraComponent.visibility & canvas.node.layer) {
            layer = canvas.node.layer;
          } else {
            layer = canvas.cameraComponent.visibility & ~(canvas.cameraComponent.visibility - 1);
          }

          return layer;
        }

        if (node.parent) {
          layer = getCanvasCameraLayer(node.parent);
        }

        return layer;
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/start-scene", ['./cube_script.ts', './migrate-canvas.ts'], function () {
  'use strict';

  return {
    setters: [function () {}, function () {}],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/start-scene', 'chunks:///_virtual/start-scene'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});