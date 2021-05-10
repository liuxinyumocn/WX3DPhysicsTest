import global from '../global';
System.register(["./coordinates-converts-utils-bf8713a9.js", "./index-6f89fc06.js", "./deprecated-3.0.0-f3f53c89.js", "./renderable-component-658e90bd.js", "./view-7d20208a.js", "./camera-component-f1234106.js", "./mesh-3d4ecfd0.js", "./skeleton-c02c55ca.js", "./collision-matrix-fb9744d2.js", "./terrain-asset-59d38d9d.js"], (function(t) {
    "use strict";
    var e, i, r, n, o, s, a, l, p, c, u, h, y, _, d, f, g, b, m, C, w, v, S, O, k, T, P, D, E, M, A, L, x, I, B, F, j, z, N, R, H, G, q, Y, V, W, X, U;
    return {
        setters: [function(t) {
            e = t.l,
            i = t.w,
            r = t.f,
            n = t.e2,
            o = t.e3,
            s = t.e4,
            a = t.e7,
            l = t.e8,
            p = t.c5,
            c = t.e5,
            u = t.e9,
            h = t.bj,
            y = t.ea,
            _ = t.b2,
            d = t.R,
            f = t.bD,
            g = t.ec,
            b = t.fr,
            m = t.fR,
            C = t.fs,
            w = t.ft,
            v = t.fw,
            S = t.eb,
            O = t.fu,
            k = t.fm,
            T = t.e,
            P = t.d_,
            D = t.c4,
            E = t.g3,
            M = t.fj,
            A = t.bB,
            L = t.fS,
            x = t.fN
        },
        function(t) {
            I = t.f,
            B = t.D,
            F = t.k
        },
        function(t) {
            j = t.A,
            z = t.S
        },
        function() {},
        function(t) {
            N = t.g
        },
        function() {},
        function(t) {
            R = t.M
        },
        function() {},
        function(t) {
            H = t.b,
            G = t.c,
            q = t.P,
            Y = t.C,
            V = t.a,
            W = t.E,
            X = t.d
        },
        function(t) {
            U = t.T
        }],
        execute: function() {
            var K, Z = t("s", {
                id: "",
                select: function(t, r) {
                    e._global.CC_PHYSICS_BUILTIN = "builtin" === t,
                    e._global.CC_PHYSICS_CANNON = "cannon.js" === t,
                    e._global.CC_PHYSICS_AMMO = "ammo.js" === t,
                    i("[PHYSICS]: Using " + t),
                    Z.id = t,
                    Z.wrapper = r,
                    null != t && (Z.backend[t] = r)
                },
                wrapper: {},
                backend: {}
            }),
            J = function() {
                return 0
            },
            Q = {
                impl: null,
                setGravity: J,
                setAllowSleep: J,
                setDefaultMaterial: J,
                step: J,
                syncAfterEvents: J,
                syncSceneToPhysics: J,
                raycast: J,
                raycastClosest: J,
                emitEvents: J,
                destroy: J
            };
            function $(t, n) {
                return ! e.GAME_VIEW && null == t && (Z.id ? i(Z.id + " physics does not support " + K[n]) : r(9600), !0)
            } !
            function(t) {
                t[t.World = 0] = "World",
                t[t.RigidBody = 1] = "RigidBody",
                t[t.BoxCollider = 2] = "BoxCollider",
                t[t.SphereCollider = 3] = "SphereCollider",
                t[t.CapsuleCollider = 4] = "CapsuleCollider",
                t[t.MeshCollider = 5] = "MeshCollider",
                t[t.CylinderCollider = 6] = "CylinderCollider",
                t[t.ConeCollider = 7] = "ConeCollider",
                t[t.TerrainCollider = 8] = "TerrainCollider",
                t[t.SimplexCollider = 9] = "SimplexCollider",
                t[t.PlaneCollider = 10] = "PlaneCollider",
                t[t.PointToPointConstraint = 11] = "PointToPointConstraint",
                t[t.HingeConstraint = 12] = "HingeConstraint",
                t[t.ConeTwistConstraint = 13] = "ConeTwistConstraint"
            } (K || (K = {}));
            var tt = {
                impl: null,
                rigidBody: null,
                isAwake: !1,
                isSleepy: !1,
                isSleeping: !1,
                initialize: J,
                onEnable: J,
                onDisable: J,
                onDestroy: J,
                setType: J,
                setMass: J,
                setLinearDamping: J,
                setAngularDamping: J,
                useGravity: J,
                setLinearFactor: J,
                setAngularFactor: J,
                setAllowSleep: J,
                wakeUp: J,
                sleep: J,
                clearState: J,
                clearForces: J,
                clearVelocity: J,
                setSleepThreshold: J,
                getSleepThreshold: J,
                getLinearVelocity: J,
                setLinearVelocity: J,
                getAngularVelocity: J,
                setAngularVelocity: J,
                applyForce: J,
                applyLocalForce: J,
                applyImpulse: J,
                applyLocalImpulse: J,
                applyTorque: J,
                applyLocalTorque: J,
                setGroup: J,
                getGroup: J,
                addGroup: J,
                removeGroup: J,
                setMask: J,
                getMask: J,
                addMask: J,
                removeMask: J
            },
            et = {
                INITED: !1
            },
            it = {
                impl: null,
                collider: null,
                attachedRigidBody: null,
                initialize: J,
                onLoad: J,
                onEnable: J,
                onDisable: J,
                onDestroy: J,
                setGroup: J,
                getGroup: J,
                addGroup: J,
                removeGroup: J,
                setMask: J,
                getMask: J,
                addMask: J,
                removeMask: J,
                setMaterial: J,
                setAsTrigger: J,
                setCenter: J,
                getAABB: J,
                getBoundingSphere: J,
                setSize: J,
                setRadius: J,
                setCylinderHeight: J,
                setDirection: J,
                setHeight: J,
                setShapeType: J,
                setVertices: J,
                setMesh: J,
                setTerrain: J,
                setNormal: J,
                setConstant: J,
                updateEventListener: J
            };
            var rt, nt, ot, st, at, lt, pt, ct, ut = {
                INITED: !1
            },
            ht = {
                impl: null,
                initialize: J,
                onLoad: J,
                onEnable: J,
                onDisable: J,
                onDestroy: J,
                setEnableCollision: J,
                setConnectedBody: J,
                setPivotA: J,
                setPivotB: J,
                setAxis: J
            };
            var yt = t("d", n("cc.PhysicsMaterial")((ct = pt = function(t) {
                function e() {
                    var i;
                    return i = t.call(this) || this,
                    a(i, "_friction", ot, l(i)),
                    a(i, "_rollingFriction", st, l(i)),
                    a(i, "_spinningFriction", at, l(i)),
                    a(i, "_restitution", lt, l(i)),
                    e.allMaterials.push(l(i)),
                    i._uuid || (i._uuid = "pm_" + e._idCounter++),
                    i
                }
                o(e, t),
                s(e, [{
                    key: "friction",
                    get: function() {
                        return this._friction
                    },
                    set: function(t) {
                        h(this._friction, t) || (this._friction = t, this.emit("physics_material_update"))
                    }
                },
                {
                    key: "rollingFriction",
                    get: function() {
                        return this._rollingFriction
                    },
                    set: function(t) {
                        h(this._rollingFriction, t) || (this._rollingFriction = t, this.emit("physics_material_update"))
                    }
                },
                {
                    key: "spinningFriction",
                    get: function() {
                        return this._spinningFriction
                    },
                    set: function(t) {
                        h(this._spinningFriction, t) || (this._spinningFriction = t, this.emit("physics_material_update"))
                    }
                },
                {
                    key: "restitution",
                    get: function() {
                        return this._restitution
                    },
                    set: function(t) {
                        h(this._restitution, t) || (this._restitution = t, this.emit("physics_material_update"))
                    }
                }]);
                var i = e.prototype;
                return i.clone = function() {
                    var t = new e;
                    return t._friction = this._friction,
                    t._restitution = this._restitution,
                    t._rollingFriction = this._rollingFriction,
                    t._spinningFriction = this._spinningFriction,
                    t
                },
                i.destroy = function() {
                    if (t.prototype.destroy.call(this)) {
                        var i = e.allMaterials.indexOf(this);
                        return i >= 0 && e.allMaterials.splice(i, 1),
                        !0
                    }
                    return ! 1
                },
                e
            } (p), pt.allMaterials = [], pt._idCounter = 0, c((nt = ct).prototype, "friction", [u], Object.getOwnPropertyDescriptor(nt.prototype, "friction"), nt.prototype), c(nt.prototype, "rollingFriction", [u], Object.getOwnPropertyDescriptor(nt.prototype, "rollingFriction"), nt.prototype), c(nt.prototype, "spinningFriction", [u], Object.getOwnPropertyDescriptor(nt.prototype, "spinningFriction"), nt.prototype), c(nt.prototype, "restitution", [u], Object.getOwnPropertyDescriptor(nt.prototype, "restitution"), nt.prototype), ot = c(nt.prototype, "_friction", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return.6
                }
            }), st = c(nt.prototype, "_rollingFriction", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return.1
                }
            }), at = c(nt.prototype, "_spinningFriction", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return.1
                }
            }), lt = c(nt.prototype, "_restitution", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), rt = nt)) || rt),
            _t = t("f",
            function() {
                function t() {
                    this._hitPoint = new _,
                    this._hitNormal = new _,
                    this._distance = 0,
                    this._collider = null
                }
                var e = t.prototype;
                return e._assign = function(t, e, i, r) {
                    _.copy(this._hitPoint, t),
                    _.copy(this._hitNormal, r),
                    this._distance = e,
                    this._collider = i
                },
                e.clone = function() {
                    var e = new t;
                    return _.copy(e._hitPoint, this._hitPoint),
                    _.copy(e._hitNormal, this._hitNormal),
                    e._distance = this._distance,
                    e._collider = this._collider,
                    e
                },
                s(t, [{
                    key: "hitPoint",
                    get: function() {
                        return this._hitPoint
                    }
                },
                {
                    key: "distance",
                    get: function() {
                        return this._distance
                    }
                },
                {
                    key: "collider",
                    get: function() {
                        return this._collider
                    }
                },
                {
                    key: "hitNormal",
                    get: function() {
                        return this._hitNormal
                    }
                }]),
                t
            } ());
            e.internal.PhysicsGroup = q;
            var dt, ft, gt, bt, mt, Ct, wt, vt, St, Ot, kt, Tt, Pt, Dt, Et, Mt, At, Lt, xt, It, Bt, Ft, jt, zt, Nt, Rt, Ht, Gt, qt, Yt, Vt, Wt, Xt, Ut, Kt, Zt, Jt, Qt, $t, te, ee, ie, re, ne, oe = t("P",
            function(t) {
                function e() {
                    var e; (e = t.call(this) || this).physicsWorld = void 0,
                    e.raycastClosestResult = new _t,
                    e.raycastResults = [],
                    e.collisionMatrix = new Y,
                    e.useNodeChains = void 0,
                    e._enable = !0,
                    e._allowSleep = !0,
                    e._maxSubSteps = 1,
                    e._subStepCount = 0,
                    e._fixedTimeStep = 1 / 60,
                    e._autoSimulation = !0,
                    e._accumulator = 0,
                    e._sleepThreshold = .1,
                    e._gravity = new _(0, -10, 0),
                    e._material = new yt,
                    e.raycastOptions = {
                        group: -1,
                        mask: -1,
                        queryTrigger: !0,
                        maxDistance: 1e7
                    },
                    e.raycastResultPool = new d((function() {
                        return new _t
                    }), 1);
                    var i = N.config ? N.config.physics: null;
                    if (i && i.physicsEngine) {
                        if (_.copy(e._gravity, i.gravity), e._allowSleep = i.allowSleep, e._fixedTimeStep = i.fixedTimeStep, e._maxSubSteps = i.maxSubSteps, e._sleepThreshold = i.sleepThreshold, e.autoSimulation = i.autoSimulation, e.useNodeChains = i.useNodeChains, i.defaultMaterial && (e._material.friction = i.defaultMaterial.friction, e._material.rollingFriction = i.defaultMaterial.rollingFriction, e._material.spinningFriction = i.defaultMaterial.spinningFriction, e._material.restitution = i.defaultMaterial.restitution), i.collisionMatrix) for (var r in i.collisionMatrix) {
                            var n = 1 << parseInt(r);
                            e.collisionMatrix["" + n] = i.collisionMatrix[r]
                        }
                    } else e.useNodeChains = !1;
                    return e._material.on("physics_material_update", e._updateMaterial, l(e)),
                    e.physicsWorld = $(Z.wrapper.PhysicsWorld, K.World) ? Q: new Z.wrapper.PhysicsWorld,
                    e.physicsWorld.setGravity(e._gravity),
                    e.physicsWorld.setAllowSleep(e._allowSleep),
                    e.physicsWorld.setDefaultMaterial(e._material),
                    e
                }
                o(e, t),
                s(e, [{
                    key: "enable",
                    get: function() {
                        return this._enable
                    },
                    set: function(t) {
                        this._enable = t
                    }
                },
                {
                    key: "allowSleep",
                    get: function() {
                        return this._allowSleep
                    },
                    set: function(t) {
                        this._allowSleep = t,
                        this.physicsWorld.setAllowSleep(t)
                    }
                },
                {
                    key: "maxSubSteps",
                    get: function() {
                        return this._maxSubSteps
                    },
                    set: function(t) {
                        this._maxSubSteps = t
                    }
                },
                {
                    key: "fixedTimeStep",
                    get: function() {
                        return this._fixedTimeStep
                    },
                    set: function(t) {
                        this._fixedTimeStep = t
                    }
                },
                {
                    key: "gravity",
                    get: function() {
                        return this._gravity
                    },
                    set: function(t) {
                        this._gravity.set(t),
                        this.physicsWorld.setGravity(t)
                    }
                },
                {
                    key: "sleepThreshold",
                    get: function() {
                        return this._sleepThreshold
                    },
                    set: function(t) {
                        this._sleepThreshold = t
                    }
                },
                {
                    key: "autoSimulation",
                    get: function() {
                        return this._autoSimulation
                    },
                    set: function(t) {
                        this._autoSimulation = t
                    }
                },
                {
                    key: "defaultMaterial",
                    get: function() {
                        return this._material
                    }
                }], [{
                    key: "PHYSICS_NONE",
                    get: function() {
                        return ! Z.id
                    }
                },
                {
                    key: "PHYSICS_BUILTIN",
                    get: function() {
                        return "builtin" === Z.id
                    }
                },
                {
                    key: "PHYSICS_CANNON",
                    get: function() {
                        return "cannon.js" === Z.id
                    }
                },
                {
                    key: "PHYSICS_AMMO",
                    get: function() {
                        return "ammo.js" === Z.id
                    }
                },
                {
                    key: "PHYSICS_PHYSX",
                    get: function() {
                        return "physx" === Z.id
                    }
                },
                {
                    key: "PhysicsGroup",
                    get: function() {
                        return q
                    }
                },
                {
                    key: "instance",
                    get: function() {
                        return e._instance
                    }
                }]);
                var i = e.prototype;
                return i.postUpdate = function(t) {
                    if (this._enable) {
                        if (this._autoSimulation) {
                            for (this._subStepCount = 0, this._accumulator += t, I.emit(B.EVENT_BEFORE_PHYSICS); this._subStepCount < this._maxSubSteps;) {
                                if (! (this._accumulator > this._fixedTimeStep)) {
                                    this.physicsWorld.syncSceneToPhysics();
                                    break
                                }
                                this.physicsWorld.syncSceneToPhysics();
                                let start = new Date().getTime();
                                this.physicsWorld.step(this._fixedTimeStep);
                                let end = new Date().getTime();
                                let d= end - start;
                                global.push(d);
                                this._accumulator -= this._fixedTimeStep;
                                this._subStepCount++;
                                this.physicsWorld.emitEvents();
                                this.physicsWorld.syncAfterEvents();
                                
                            
                            }
                            I.emit(B.EVENT_AFTER_PHYSICS)
                            
                        }
                    } else this.physicsWorld.syncSceneToPhysics()
                },
                i.resetAccumulator = function(t) {
                    void 0 === t && (t = 0),
                    this._accumulator = t
                },
                i.step = function(t, e, i) {
                    console.log(123);
                    this.physicsWorld.step(t, e, i);
                    console.log(123);
                },
                i.syncSceneToPhysics = function() {
                    this.physicsWorld.syncSceneToPhysics()
                },
                i.emitEvents = function() {
                    this.physicsWorld.emitEvents()
                },
                i.raycast = function(t, e, i, r) {
                    return void 0 === e && (e = 4294967295),
                    void 0 === i && (i = 1e7),
                    void 0 === r && (r = !0),
                    this.raycastResultPool.reset(),
                    this.raycastResults.length = 0,
                    this.raycastOptions.mask = e >>> 0,
                    this.raycastOptions.maxDistance = i,
                    this.raycastOptions.queryTrigger = r,
                    this.physicsWorld.raycast(t, this.raycastOptions, this.raycastResultPool, this.raycastResults)
                },
                i.raycastClosest = function(t, e, i, r) {
                    return void 0 === e && (e = 4294967295),
                    void 0 === i && (i = 1e7),
                    void 0 === r && (r = !0),
                    this.raycastOptions.mask = e >>> 0,
                    this.raycastOptions.maxDistance = i,
                    this.raycastOptions.queryTrigger = r,
                    this.physicsWorld.raycastClosest(t, this.raycastOptions, this.raycastClosestResult)
                },
                i._updateMaterial = function() {
                    this.physicsWorld.setDefaultMaterial(this._material)
                },
                e
            } (F));
            oe.ID = "PHYSICS",
            oe._instance = void 0,
            I.once(B.EVENT_INIT, (function() { !
                function() {
                    var t = N.config.physics;
                    if (t) {
                        var i = t.collisionGroups;
                        i instanceof Array && (i.forEach((function(t) {
                            q[t.name] = 1 << t.index
                        })), f.update(q))
                    }
                    var r = oe.instance;
                    r && (I.unregisterSystem(r), r.physicsWorld.destroy());
                    var n = new e.PhysicsSystem;
                    e.PhysicsSystem._instance = n,
                    I.registerSystem(oe.ID, n, 0)
                } ()
            }));
            var se, ae, le, pe, ce, ue, he, ye, _e, de, fe, ge, be, me, Ce, we, ve, Se, Oe, ke, Te, Pe = t("R", (dt = n("cc.RigidBody"), ft = C(), gt = w(), bt = v( - 1), mt = g(oe.PhysicsGroup), Ct = S(), wt = O(), vt = g(V), St = S(), Ot = O(), kt = k(), Tt = S(), Pt = O(), Dt = k(), Et = S(), Mt = O(), At = k(), Lt = S(), xt = O(), It = k(), Bt = S(), Ft = O(), jt = k(), zt = S(), Nt = O(), Rt = k(), Ht = S(), Gt = O(), qt = k(), Yt = S(), Vt = O(), dt(Wt = ft(Wt = gt(Wt = b(Wt = m(Wt = bt((ne = re = function(t) {
                function e() {
                    for (var e, i = arguments.length,
                    r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                    return (e = t.call.apply(t, [this].concat(r)) || this)._body = null,
                    a(e, "_group", Ut, l(e)),
                    a(e, "_type", Kt, l(e)),
                    a(e, "_mass", Zt, l(e)),
                    a(e, "_allowSleep", Jt, l(e)),
                    a(e, "_linearDamping", Qt, l(e)),
                    a(e, "_angularDamping", $t, l(e)),
                    a(e, "_useGravity", te, l(e)),
                    a(e, "_linearFactor", ee, l(e)),
                    a(e, "_angularFactor", ie, l(e)),
                    e
                }
                o(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    this._body = $(Z.wrapper.RigidBody, K.RigidBody) ? tt: new Z.wrapper.RigidBody,
                    this._body.initialize(this)
                },
                i.onEnable = function() {
                    this._body && this._body.onEnable()
                },
                i.onDisable = function() {
                    this._body && this._body.onDisable()
                },
                i.onDestroy = function() {
                    this._body && this._body.onDestroy()
                },
                i.applyForce = function(t, e) {
                    this._assertOnLoadCalled && this._body.applyForce(t, e)
                },
                i.applyLocalForce = function(t, e) {
                    this._assertOnLoadCalled && this._body.applyLocalForce(t, e)
                },
                i.applyImpulse = function(t, e) {
                    this._assertOnLoadCalled && this._body.applyImpulse(t, e)
                },
                i.applyLocalImpulse = function(t, e) {
                    this._assertOnLoadCalled && this._body.applyLocalImpulse(t, e)
                },
                i.applyTorque = function(t) {
                    this._assertOnLoadCalled && this._body.applyTorque(t)
                },
                i.applyLocalTorque = function(t) {
                    this._assertOnLoadCalled && this._body.applyLocalTorque(t)
                },
                i.wakeUp = function() {
                    this._assertOnLoadCalled && this._body.wakeUp()
                },
                i.sleep = function() {
                    this._assertOnLoadCalled && this._body.sleep()
                },
                i.clearState = function() {
                    this._assertOnLoadCalled && this._body.clearState()
                },
                i.clearForces = function() {
                    this._assertOnLoadCalled && this._body.clearForces()
                },
                i.clearVelocity = function() {
                    this._assertOnLoadCalled && this._body.clearVelocity()
                },
                i.getLinearVelocity = function(t) {
                    this._assertOnLoadCalled && this._body.getLinearVelocity(t)
                },
                i.setLinearVelocity = function(t) {
                    this._assertOnLoadCalled && this._body.setLinearVelocity(t)
                },
                i.getAngularVelocity = function(t) {
                    this._assertOnLoadCalled && this._body.getAngularVelocity(t)
                },
                i.setAngularVelocity = function(t) {
                    this._assertOnLoadCalled && this._body.setAngularVelocity(t)
                },
                i.getGroup = function() {
                    return this._assertOnLoadCalled ? this._body.getGroup() : 0
                },
                i.setGroup = function(t) {
                    this._assertOnLoadCalled && (this.group = t)
                },
                i.addGroup = function(t) {
                    this._assertOnLoadCalled && this._body.addGroup(t)
                },
                i.removeGroup = function(t) {
                    this._assertOnLoadCalled && this._body.removeGroup(t)
                },
                i.getMask = function() {
                    return this._assertOnLoadCalled ? this._body.getMask() : 0
                },
                i.setMask = function(t) {
                    this._assertOnLoadCalled && this._body.setMask(t)
                },
                i.addMask = function(t) {
                    this._assertOnLoadCalled && this._body.addMask(t)
                },
                i.removeMask = function(t) {
                    this._assertOnLoadCalled && this._body.removeMask(t)
                },
                s(e, [{
                    key: "group",
                    get: function() {
                        return this._group
                    },
                    set: function(t) {
                        this._group !== t && (this._group = t, this._body && this._body.setGroup(t))
                    }
                },
                {
                    key: "type",
                    get: function() {
                        return this._type
                    },
                    set: function(t) {
                        this._type !== t && (this._type = t, this._body && this._body.setType(t))
                    }
                },
                {
                    key: "mass",
                    get: function() {
                        return this._mass
                    },
                    set: function(t) {
                        this._mass !== t && (t = t <= 0 ? 1e-4: t, this._mass = t, this._body && this._body.setMass(t))
                    }
                },
                {
                    key: "allowSleep",
                    get: function() {
                        return this._allowSleep
                    },
                    set: function(t) {
                        this._allowSleep = t,
                        this._body && this._body.setAllowSleep(t)
                    }
                },
                {
                    key: "linearDamping",
                    get: function() {
                        return this._linearDamping
                    },
                    set: function(t) {
                        this._linearDamping = t,
                        this._body && this._body.setLinearDamping(t)
                    }
                },
                {
                    key: "angularDamping",
                    get: function() {
                        return this._angularDamping
                    },
                    set: function(t) {
                        this._angularDamping = t,
                        this._body && this._body.setAngularDamping(t)
                    }
                },
                {
                    key: "useGravity",
                    get: function() {
                        return this._useGravity
                    },
                    set: function(t) {
                        this._useGravity = t,
                        this._body && this._body.useGravity(t)
                    }
                },
                {
                    key: "linearFactor",
                    get: function() {
                        return this._linearFactor
                    },
                    set: function(t) {
                        _.copy(this._linearFactor, t),
                        this._body && this._body.setLinearFactor(this._linearFactor)
                    }
                },
                {
                    key: "angularFactor",
                    get: function() {
                        return this._angularFactor
                    },
                    set: function(t) {
                        _.copy(this._angularFactor, t),
                        this._body && this._body.setAngularFactor(this._angularFactor)
                    }
                },
                {
                    key: "sleepThreshold",
                    get: function() {
                        return this._assertOnLoadCalled ? this._body.getSleepThreshold() : 0
                    },
                    set: function(t) {
                        this._assertOnLoadCalled && this._body.setSleepThreshold(t)
                    }
                },
                {
                    key: "isAwake",
                    get: function() {
                        return !! this._assertOnLoadCalled && this._body.isAwake
                    }
                },
                {
                    key: "isSleepy",
                    get: function() {
                        return !! this._assertOnLoadCalled && this._body.isSleepy
                    }
                },
                {
                    key: "isSleeping",
                    get: function() {
                        return !! this._assertOnLoadCalled && this._body.isSleeping
                    }
                },
                {
                    key: "isStatic",
                    get: function() {
                        return this._type === V.STATIC
                    },
                    set: function(t) {
                        t && this.isStatic || !t && !this.isStatic || (this.type = t ? V.STATIC: V.DYNAMIC)
                    }
                },
                {
                    key: "isDynamic",
                    get: function() {
                        return this._type === V.DYNAMIC
                    },
                    set: function(t) {
                        t && this.isDynamic || !t && !this.isDynamic || (this.type = t ? V.DYNAMIC: V.KINEMATIC)
                    }
                },
                {
                    key: "isKinematic",
                    get: function() {
                        return this._type === V.KINEMATIC
                    },
                    set: function(t) {
                        t && this.isKinematic || !t && !this.isKinematic || (this.type = t ? V.KINEMATIC: V.DYNAMIC)
                    }
                },
                {
                    key: "body",
                    get: function() {
                        return this._body
                    }
                },
                {
                    key: "_assertOnLoadCalled",
                    get: function() {
                        var t = 0 === this._isOnLoadCalled;
                        return t && T("[Physics]: Please make sure that the node has been added to the scene"),
                        !t
                    }
                }]),
                e
            } (P), re.Type = V, c((Xt = ne).prototype, "group", [mt, Ct, wt], Object.getOwnPropertyDescriptor(Xt.prototype, "group"), Xt.prototype), c(Xt.prototype, "type", [vt, St, Ot], Object.getOwnPropertyDescriptor(Xt.prototype, "type"), Xt.prototype), c(Xt.prototype, "mass", [kt, Tt, Pt], Object.getOwnPropertyDescriptor(Xt.prototype, "mass"), Xt.prototype), c(Xt.prototype, "allowSleep", [Dt, Et, Mt], Object.getOwnPropertyDescriptor(Xt.prototype, "allowSleep"), Xt.prototype), c(Xt.prototype, "linearDamping", [At, Lt, xt], Object.getOwnPropertyDescriptor(Xt.prototype, "linearDamping"), Xt.prototype), c(Xt.prototype, "angularDamping", [It, Bt, Ft], Object.getOwnPropertyDescriptor(Xt.prototype, "angularDamping"), Xt.prototype), c(Xt.prototype, "useGravity", [jt, zt, Nt], Object.getOwnPropertyDescriptor(Xt.prototype, "useGravity"), Xt.prototype), c(Xt.prototype, "linearFactor", [Rt, Ht, Gt], Object.getOwnPropertyDescriptor(Xt.prototype, "linearFactor"), Xt.prototype), c(Xt.prototype, "angularFactor", [qt, Yt, Vt], Object.getOwnPropertyDescriptor(Xt.prototype, "angularFactor"), Xt.prototype), Ut = c(Xt.prototype, "_group", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return oe.PhysicsGroup.DEFAULT
                }
            }), Kt = c(Xt.prototype, "_type", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return V.DYNAMIC
                }
            }), Zt = c(Xt.prototype, "_mass", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), Jt = c(Xt.prototype, "_allowSleep", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ! 0
                }
            }), Qt = c(Xt.prototype, "_linearDamping", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return.1
                }
            }), $t = c(Xt.prototype, "_angularDamping", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return.1
                }
            }), te = c(Xt.prototype, "_useGravity", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ! 0
                }
            }), ee = c(Xt.prototype, "_linearFactor", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _(1, 1, 1)
                }
            }), ie = c(Xt.prototype, "_angularFactor", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _(1, 1, 1)
                }
            }), Wt = Xt)) || Wt) || Wt) || Wt) || Wt) || Wt) || Wt));
            Pe || (Pe = t("R", {}));
            var De, Ee, Me, Ae, Le, xe, Ie, Be, Fe, je = t("C", (se = n("cc.Collider"), ae = g(Pe), le = M(), pe = S(), ce = g(yt), ue = M(), he = S(), ye = O(), _e = S(), de = O(), fe = g(_), ge = S(), be = O(), me = g(yt), se((Te = ke = function(t) {
                function e(e) {
                    var i;
                    return (i = t.call(this) || this).TYPE = void 0,
                    i._shape = null,
                    i._aabb = null,
                    i._boundingSphere = null,
                    i._isSharedMaterial = !0,
                    i._needTriggerEvent = !1,
                    i._needCollisionEvent = !1,
                    a(i, "_material", ve, l(i)),
                    a(i, "_isTrigger", Se, l(i)),
                    a(i, "_center", Oe, l(i)),
                    i.TYPE = e,
                    i
                }
                o(e, t),
                s(e, [{
                    key: "attachedRigidBody",
                    get: function() {
                        return t = this.node,
                        (e = t.getComponent(Pe)) && e.isValid ? e: null;
                        var t, e
                    }
                }, {
                    key: "sharedMaterial",
                    get: function() {
                        return this._material
                    },
                    set: function(t) {
                        this.material = t
                    }
                },
                {
                    key: "material",
                    get: function() {
                        return this._isSharedMaterial && null != this._material && (this._material.off("physics_material_update", this._updateMaterial, this), this._material = this._material.clone(), this._material.on("physics_material_update", this._updateMaterial, this), this._isSharedMaterial = !1),
                        this._material
                    },
                    set: function(t) {
                        this._shape && (null != t && null != this._material ? this._material._uuid !== t._uuid && (this._material.off("physics_material_update", this._updateMaterial, this), t.on("physics_material_update", this._updateMaterial, this), this._isSharedMaterial = !1, this._material = t) : null != t && null == this._material ? (t.on("physics_material_update", this._updateMaterial, this), this._material = t) : null == t && null != this._material && (this._material.off("physics_material_update", this._updateMaterial, this), this._material = t), this._updateMaterial())
                    }
                },
                {
                    key: "isTrigger",
                    get: function() {
                        return this._isTrigger
                    },
                    set: function(t) {
                        this._isTrigger = t,
                        this._shape && this._shape.setAsTrigger(this._isTrigger)
                    }
                },
                {
                    key: "center",
                    get: function() {
                        return this._center
                    },
                    set: function(t) {
                        _.copy(this._center, t),
                        this._shape && this._shape.setCenter(this._center)
                    }
                },
                {
                    key: "shape",
                    get: function() {
                        return this._shape
                    }
                },
                {
                    key: "worldBounds",
                    get: function() {
                        return null == this._aabb && (this._aabb = new j),
                        this._shape && this._shape.getAABB(this._aabb),
                        this._aabb
                    }
                },
                {
                    key: "boundingSphere",
                    get: function() {
                        return null == this._boundingSphere && (this._boundingSphere = new z),
                        this._shape && this._shape.getBoundingSphere(this._boundingSphere),
                        this._boundingSphere
                    }
                },
                {
                    key: "needTriggerEvent",
                    get: function() {
                        return this._needTriggerEvent
                    }
                },
                {
                    key: "needCollisionEvent",
                    get: function() {
                        return this._needCollisionEvent
                    }
                },
                {
                    key: "_assertOnLoadCalled",
                    get: function() {
                        var t = 0 === this._isOnLoadCalled;
                        return t && T("[Physics]: Please make sure that the node has been added to the scene"),
                        !t
                    }
                }]);
                var i = e.prototype;
                return i.on = function(e, i, r, n) {
                    var o = t.prototype.on.call(this, e, i, r, n);
                    return this._updateNeedEvent(e),
                    o
                },
                i.off = function(e, i, r) {
                    t.prototype.off.call(this, e, i, r),
                    this._updateNeedEvent()
                },
                i.once = function(e, i, r) {
                    var n = t.prototype.once.call(this, e, i, r);
                    return this._updateNeedEvent(e),
                    n
                },
                i.removeAll = function(e) {
                    t.prototype.removeAll.call(this, e),
                    this._updateNeedEvent()
                },
                i.getGroup = function() {
                    return this._assertOnLoadCalled ? this._shape.getGroup() : 0
                },
                i.setGroup = function(t) {
                    this._assertOnLoadCalled && this._shape.setGroup(t)
                },
                i.addGroup = function(t) {
                    this._assertOnLoadCalled && this._shape.addGroup(t)
                },
                i.removeGroup = function(t) {
                    this._assertOnLoadCalled && this._shape.removeGroup(t)
                },
                i.getMask = function() {
                    return this._assertOnLoadCalled ? this._shape.getMask() : 0
                },
                i.setMask = function(t) {
                    this._assertOnLoadCalled && this._shape.setMask(t)
                },
                i.addMask = function(t) {
                    this._assertOnLoadCalled && this._shape.addMask(t)
                },
                i.removeMask = function(t) {
                    this._assertOnLoadCalled && this._shape.removeMask(t)
                },
                i.onLoad = function() {
                    this._shape = function(t) {
                        return et.INITED || (et.INITED = !0, et[H.BOX] = function() {
                            return $(Z.wrapper.BoxShape, K.BoxCollider) ? it: new Z.wrapper.BoxShape
                        },
                        et[H.SPHERE] = function() {
                            return $(Z.wrapper.SphereShape, K.SphereCollider) ? it: new Z.wrapper.SphereShape
                        },
                        et[H.CAPSULE] = function() {
                            return $(Z.wrapper.CapsuleShape, K.CapsuleCollider) ? it: new Z.wrapper.CapsuleShape
                        },
                        et[H.CYLINDER] = function() {
                            return $(Z.wrapper.CylinderShape, K.CylinderCollider) ? it: new Z.wrapper.CylinderShape
                        },
                        et[H.CONE] = function() {
                            return $(Z.wrapper.ConeShape, K.ConeCollider) ? it: new Z.wrapper.ConeShape
                        },
                        et[H.MESH] = function() {
                            return $(Z.wrapper.TrimeshShape, K.MeshCollider) ? it: new Z.wrapper.TrimeshShape
                        },
                        et[H.TERRAIN] = function() {
                            return $(Z.wrapper.TerrainShape, K.TerrainCollider) ? it: new Z.wrapper.TerrainShape
                        },
                        et[H.SIMPLEX] = function() {
                            return $(Z.wrapper.SimplexShape, K.SimplexCollider) ? it: new Z.wrapper.SimplexShape
                        },
                        et[H.PLANE] = function() {
                            return $(Z.wrapper.PlaneShape, K.PlaneCollider) ? it: new Z.wrapper.PlaneShape
                        }),
                        et[t]()
                    } (this.TYPE),
                    this.sharedMaterial = null == this._material ? oe.instance.defaultMaterial: this._material,
                    this._shape.initialize(this),
                    this._shape.onLoad()
                },
                i.onEnable = function() {
                    this._shape && this._shape.onEnable()
                },
                i.onDisable = function() {
                    this._shape && this._shape.onDisable()
                },
                i.onDestroy = function() {
                    this._shape && (this._material && this._material.off("physics_material_update", this._updateMaterial, this), this._shape.onDestroy()),
                    this._boundingSphere && this._boundingSphere.destroy()
                },
                i._updateMaterial = function() {
                    this._shape && this._shape.setMaterial(this._material)
                },
                i._updateNeedEvent = function(t) {
                    this.isValid && (void 0 !== t ? ("onCollisionEnter" !== t && "onCollisionStay" !== t && "onCollisionExit" !== t || (this._needCollisionEvent = !0), "onTriggerEnter" !== t && "onTriggerStay" !== t && "onTriggerExit" !== t || (this._needTriggerEvent = !0)) : (this.hasEventListener("onTriggerEnter") || this.hasEventListener("onTriggerStay") || this.hasEventListener("onTriggerExit") || (this._needTriggerEvent = !1), this.hasEventListener("onCollisionEnter") || this.hasEventListener("onCollisionStay") || this.hasEventListener("onCollisionExit") || (this._needCollisionEvent = !1)), this._shape && this._shape.updateEventListener())
                },
                e
            } (D(P)), ke.Type = H, ke.Axis = W, c((we = Te).prototype, "attachedRigidBody", [ae, E, le, pe], Object.getOwnPropertyDescriptor(we.prototype, "attachedRigidBody"), we.prototype), c(we.prototype, "sharedMaterial", [ce, ue, he, ye], Object.getOwnPropertyDescriptor(we.prototype, "sharedMaterial"), we.prototype), c(we.prototype, "isTrigger", [_e, de], Object.getOwnPropertyDescriptor(we.prototype, "isTrigger"), we.prototype), c(we.prototype, "center", [fe, ge, be], Object.getOwnPropertyDescriptor(we.prototype, "center"), we.prototype), ve = c(we.prototype, "_material", [me], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Se = c(we.prototype, "_isTrigger", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ! 1
                }
            }), Oe = c(we.prototype, "_center", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _
                }
            }), Ce = we)) || Ce));
            je || (je = t("C", {}));
            var ze, Ne, Re, He, Ge, qe, Ye, Ve, We, Xe, Ue, Ke, Ze, Je, Qe, $e, ti, ei, ii, ri, ni, oi, si, ai, li, pi, ci, ui, hi, yi, _i, di, fi, gi, bi, mi, Ci, wi, vi, Si, Oi, ki, Ti, Pi, Di, Ei, Mi, Ai, Li, xi, Ii, Bi, Fi, ji, zi, Ni, Ri, Hi, Gi, qi, Yi, Vi, Wi, Xi, Ui, Ki, Zi, Ji, Qi, $i, tr, er, ir, rr, nr, or, sr, ar, lr, pr, cr, ur, hr, yr, _r, dr, fr, gr, br, mr, Cr, wr, vr, Sr, Or, kr, Tr, Pr, Dr, Er, Mr, Ar, Lr, xr, Ir = t("B", (De = n("cc.BoxCollider"), Ee = C(), Me = w(), Ae = g(_), Le = O(), De(xe = Ee(xe = Me(xe = b((Fe = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, H.BOX) || this,
                    a(e, "_size", Be, l(e)),
                    e
                }
                return o(e, t),
                s(e, [{
                    key: "size",
                    get: function() {
                        return this._size
                    },
                    set: function(t) {
                        _.copy(this._size, t),
                        this._shape && this.shape.setSize(this._size)
                    }
                },
                {
                    key: "shape",
                    get: function() {
                        return this._shape
                    }
                }]),
                e
            } (je), c((Ie = Fe).prototype, "size", [Ae, Le], Object.getOwnPropertyDescriptor(Ie.prototype, "size"), Ie.prototype), Be = c(Ie.prototype, "_size", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _(1, 1, 1)
                }
            }), xe = Ie)) || xe) || xe) || xe) || xe)),
            Br = t("S", (ze = n("cc.SphereCollider"), Ne = C(), Re = w(), He = O(), ze(Ge = Ne(Ge = Re(Ge = b((Ve = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, H.SPHERE) || this,
                    a(e, "_radius", Ye, l(e)),
                    e
                }
                return o(e, t),
                s(e, [{
                    key: "radius",
                    get: function() {
                        return this._radius
                    },
                    set: function(t) {
                        this._radius = t,
                        this.shape.setRadius(this._radius)
                    }
                },
                {
                    key: "shape",
                    get: function() {
                        return this._shape
                    }
                }]),
                e
            } (je), c((qe = Ve).prototype, "radius", [He], Object.getOwnPropertyDescriptor(qe.prototype, "radius"), qe.prototype), Ye = c(qe.prototype, "_radius", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return.5
                }
            }), Ge = qe)) || Ge) || Ge) || Ge) || Ge)),
            Fr = t("b", (We = n("cc.CapsuleCollider"), Xe = C(), Ue = w(), Ke = O(), Ze = O(), Je = g(W), Qe = O(), We($e = Xe($e = Ue($e = b((ni = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, H.CAPSULE) || this,
                    a(e, "_radius", ei, l(e)),
                    a(e, "_cylinderHeight", ii, l(e)),
                    a(e, "_direction", ri, l(e)),
                    e
                }
                o(e, t),
                s(e, [{
                    key: "radius",
                    get: function() {
                        return this._radius
                    },
                    set: function(t) {
                        t < 0 && (t = 0),
                        this._radius = t,
                        this.shape.setRadius(t)
                    }
                },
                {
                    key: "cylinderHeight",
                    get: function() {
                        return this._cylinderHeight
                    },
                    set: function(t) {
                        t < 0 && (t = 0),
                        this._cylinderHeight = t,
                        this.shape.setCylinderHeight(t)
                    }
                },
                {
                    key: "direction",
                    get: function() {
                        return this._direction
                    },
                    set: function(t) { (t = Math.floor(t)) < W.X_AXIS || t > W.Z_AXIS || (this._direction = t, this.shape.setDirection(t))
                    }
                },
                {
                    key: "height",
                    get: function() {
                        return 2 * this._radius + this._cylinderHeight
                    },
                    set: function(t) {
                        var e = t - 2 * this._radius;
                        e < 0 && (e = 0),
                        this.cylinderHeight = e
                    }
                },
                {
                    key: "worldHeight",
                    get: function() {
                        return 2 * this._radius * this._getRadiusScale() + this._cylinderHeight * this._getHeightScale()
                    }
                },
                {
                    key: "shape",
                    get: function() {
                        return this._shape
                    }
                }]);
                var i = e.prototype;
                return i._getRadiusScale = function() {
                    if (null == this.node) return 1;
                    var t = this.node.worldScale;
                    return this._direction === W.Y_AXIS ? Math.abs(A(t.x, t.z)) : this._direction === W.X_AXIS ? Math.abs(A(t.y, t.z)) : Math.abs(A(t.x, t.y))
                },
                i._getHeightScale = function() {
                    if (null == this.node) return 1;
                    var t = this.node.worldScale;
                    return this._direction === W.Y_AXIS ? Math.abs(t.y) : this._direction === W.X_AXIS ? Math.abs(t.x) : Math.abs(t.z)
                },
                e
            } (je), c((ti = ni).prototype, "radius", [Ke], Object.getOwnPropertyDescriptor(ti.prototype, "radius"), ti.prototype), c(ti.prototype, "cylinderHeight", [Ze], Object.getOwnPropertyDescriptor(ti.prototype, "cylinderHeight"), ti.prototype), c(ti.prototype, "direction", [Je, Qe], Object.getOwnPropertyDescriptor(ti.prototype, "direction"), ti.prototype), ei = c(ti.prototype, "_radius", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return.5
                }
            }), ii = c(ti.prototype, "_cylinderHeight", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), ri = c(ti.prototype, "_direction", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return W.Y_AXIS
                }
            }), $e = ti)) || $e) || $e) || $e) || $e)),
            jr = t("c", (oi = n("cc.CylinderCollider"), si = C(), ai = w(), li = O(), pi = O(), ci = g(W), oi(ui = si(ui = ai(ui = b((fi = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, H.CYLINDER) || this,
                    a(e, "_radius", yi, l(e)),
                    a(e, "_height", _i, l(e)),
                    a(e, "_direction", di, l(e)),
                    e
                }
                return o(e, t),
                s(e, [{
                    key: "radius",
                    get: function() {
                        return this._radius
                    },
                    set: function(t) {
                        this._radius !== t && (t < 0 && (t = 0), this._radius = t, this.shape.setRadius(t))
                    }
                },
                {
                    key: "height",
                    get: function() {
                        return this._height
                    },
                    set: function(t) {
                        this._height !== t && (t < 0 && (t = 0), this._height = t, this.shape.setHeight(t))
                    }
                },
                {
                    key: "direction",
                    get: function() {
                        return this._direction
                    },
                    set: function(t) {
                        this._direction !== t && (t < W.X_AXIS || t > W.Z_AXIS || (this._direction = t, this.shape.setDirection(t)))
                    }
                },
                {
                    key: "shape",
                    get: function() {
                        return this._shape
                    }
                }]),
                e
            } (je), c((hi = fi).prototype, "radius", [li], Object.getOwnPropertyDescriptor(hi.prototype, "radius"), hi.prototype), c(hi.prototype, "height", [pi], Object.getOwnPropertyDescriptor(hi.prototype, "height"), hi.prototype), c(hi.prototype, "direction", [ci], Object.getOwnPropertyDescriptor(hi.prototype, "direction"), hi.prototype), yi = c(hi.prototype, "_radius", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return.5
                }
            }), _i = c(hi.prototype, "_height", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }), di = c(hi.prototype, "_direction", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return W.Y_AXIS
                }
            }), ui = hi)) || ui) || ui) || ui) || ui)),
            zr = t("g", (gi = n("cc.ConeCollider"), bi = C(), mi = w(), Ci = O(), wi = O(), vi = g(W), gi(Si = bi(Si = mi(Si = b((Di = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, H.CONE) || this,
                    a(e, "_radius", ki, l(e)),
                    a(e, "_height", Ti, l(e)),
                    a(e, "_direction", Pi, l(e)),
                    e
                }
                return o(e, t),
                s(e, [{
                    key: "radius",
                    get: function() {
                        return this._radius
                    },
                    set: function(t) {
                        this._radius !== t && (t < 0 && (t = 0), this._radius = t, this.shape.setRadius(t))
                    }
                },
                {
                    key: "height",
                    get: function() {
                        return this._height
                    },
                    set: function(t) {
                        this._height !== t && (t < 0 && (t = 0), this._height = t, this.shape.setHeight(t))
                    }
                },
                {
                    key: "direction",
                    get: function() {
                        return this._direction
                    },
                    set: function(t) {
                        this._direction !== t && (t < W.X_AXIS || t > W.Z_AXIS || (this._direction = t, this.shape.setDirection(t)))
                    }
                },
                {
                    key: "shape",
                    get: function() {
                        return this._shape
                    }
                }]),
                e
            } (je), c((Oi = Di).prototype, "radius", [Ci], Object.getOwnPropertyDescriptor(Oi.prototype, "radius"), Oi.prototype), c(Oi.prototype, "height", [wi], Object.getOwnPropertyDescriptor(Oi.prototype, "height"), Oi.prototype), c(Oi.prototype, "direction", [vi], Object.getOwnPropertyDescriptor(Oi.prototype, "direction"), Oi.prototype), ki = c(Oi.prototype, "_radius", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return.5
                }
            }), Ti = c(Oi.prototype, "_height", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), Pi = c(Oi.prototype, "_direction", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return W.Y_AXIS
                }
            }), Si = Oi)) || Si) || Si) || Si) || Si)),
            Nr = t("M", (Ei = n("cc.MeshCollider"), Mi = C(), Ai = w(), Li = g(R), Ei(xi = Mi(xi = Ai(xi = b((ji = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, H.MESH) || this,
                    a(e, "_mesh", Bi, l(e)),
                    a(e, "_convex", Fi, l(e)),
                    e
                }
                return o(e, t),
                s(e, [{
                    key: "mesh",
                    get: function() {
                        return this._mesh
                    },
                    set: function(t) {
                        this._mesh = t,
                        this.shape.setMesh(this._mesh)
                    }
                },
                {
                    key: "convex",
                    get: function() {
                        return this._convex
                    },
                    set: function(t) {
                        this._convex = t
                    }
                },
                {
                    key: "shape",
                    get: function() {
                        return this._shape
                    }
                }]),
                e
            } (je), c((Ii = ji).prototype, "mesh", [Li], Object.getOwnPropertyDescriptor(Ii.prototype, "mesh"), Ii.prototype), c(Ii.prototype, "convex", [u], Object.getOwnPropertyDescriptor(Ii.prototype, "convex"), Ii.prototype), Bi = c(Ii.prototype, "_mesh", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Fi = c(Ii.prototype, "_convex", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ! 1
                }
            }), xi = Ii)) || xi) || xi) || xi) || xi)),
            Rr = t("e", (zi = n("cc.ConstantForce"), Ni = C(), Ri = L(Pe), Hi = w(), Gi = S(), qi = O(), Yi = S(), Vi = O(), Wi = S(), Xi = O(), Ui = S(), Ki = O(), zi(Zi = Ni(Zi = Ri(Zi = Hi(Zi = m(Zi = b((ir = function(t) {
                function e() {
                    for (var e, i = arguments.length,
                    r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                    return (e = t.call.apply(t, [this].concat(r)) || this)._rigidBody = null,
                    a(e, "_force", Qi, l(e)),
                    a(e, "_localForce", $i, l(e)),
                    a(e, "_torque", tr, l(e)),
                    a(e, "_localTorque", er, l(e)),
                    e._mask = 0,
                    e
                }
                o(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    this._rigidBody = this.node.getComponent(Pe),
                    this._maskUpdate(this._force, 1),
                    this._maskUpdate(this._localForce, 2),
                    this._maskUpdate(this._torque, 4),
                    this._maskUpdate(this._localTorque, 8)
                },
                i.lateUpdate = function() {
                    null != this._rigidBody && 0 !== this._mask && (1 & this._mask && this._rigidBody.applyForce(this._force), 2 & this._mask && this._rigidBody.applyLocalForce(this.localForce), 4 & this._mask && this._rigidBody.applyTorque(this._torque), 8 & this._mask && this._rigidBody.applyLocalTorque(this._localTorque))
                },
                i._maskUpdate = function(t, e) {
                    t.strictEquals(_.ZERO) ? this._mask &= ~e: this._mask |= e
                },
                s(e, [{
                    key: "force",
                    get: function() {
                        return this._force
                    },
                    set: function(t) {
                        _.copy(this._force, t),
                        this._maskUpdate(this._force, 1)
                    }
                },
                {
                    key: "localForce",
                    get: function() {
                        return this._localForce
                    },
                    set: function(t) {
                        _.copy(this._localForce, t),
                        this._maskUpdate(this.localForce, 2)
                    }
                },
                {
                    key: "torque",
                    get: function() {
                        return this._torque
                    },
                    set: function(t) {
                        _.copy(this._torque, t),
                        this._maskUpdate(this._torque, 4)
                    }
                },
                {
                    key: "localTorque",
                    get: function() {
                        return this._localTorque
                    },
                    set: function(t) {
                        _.copy(this._localTorque, t),
                        this._maskUpdate(this._localTorque, 8)
                    }
                }]),
                e
            } (P), Qi = c((Ji = ir).prototype, "_force", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _
                }
            }), $i = c(Ji.prototype, "_localForce", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _
                }
            }), tr = c(Ji.prototype, "_torque", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _
                }
            }), er = c(Ji.prototype, "_localTorque", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _
                }
            }), c(Ji.prototype, "force", [Gi, qi], Object.getOwnPropertyDescriptor(Ji.prototype, "force"), Ji.prototype), c(Ji.prototype, "localForce", [Yi, Vi], Object.getOwnPropertyDescriptor(Ji.prototype, "localForce"), Ji.prototype), c(Ji.prototype, "torque", [Wi, Xi], Object.getOwnPropertyDescriptor(Ji.prototype, "torque"), Ji.prototype), c(Ji.prototype, "localTorque", [Ui, Ki], Object.getOwnPropertyDescriptor(Ji.prototype, "localTorque"), Ji.prototype), Zi = Ji)) || Zi) || Zi) || Zi) || Zi) || Zi) || Zi)),
            Hr = t("T", (rr = n("cc.TerrainCollider"), nr = C(), or = w(), sr = g(U), rr(ar = nr(ar = or(ar = b((cr = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, H.TERRAIN) || this,
                    a(e, "_terrain", pr, l(e)),
                    e
                }
                return o(e, t),
                s(e, [{
                    key: "terrain",
                    get: function() {
                        return this._terrain
                    },
                    set: function(t) {
                        this._terrain = t,
                        this.shape.setTerrain(this._terrain)
                    }
                },
                {
                    key: "shape",
                    get: function() {
                        return this._shape
                    }
                }]),
                e
            } (je), c((lr = cr).prototype, "terrain", [sr], Object.getOwnPropertyDescriptor(lr.prototype, "terrain"), lr.prototype), pr = c(lr.prototype, "_terrain", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ar = lr)) || ar) || ar) || ar) || ar)),
            Gr = t("h", (ur = n("cc.SimplexCollider"), hr = C(), yr = w(), _r = g(X), dr = k(), fr = k(), gr = k(), ur(br = hr(br = yr(br = b((Sr = vr = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, H.SIMPLEX) || this,
                    a(e, "_shapeType", Cr, l(e)),
                    a(e, "_vertices", wr, l(e)),
                    e
                }
                return o(e, t),
                s(e, [{
                    key: "shapeType",
                    get: function() {
                        return this._shapeType
                    },
                    set: function(t) {
                        this._shapeType = t,
                        this.shape.setShapeType(t)
                    }
                },
                {
                    key: "vertex0",
                    get: function() {
                        return this._vertices[0]
                    },
                    set: function(t) {
                        _.copy(this._vertices[0], t),
                        this.updateVertices()
                    }
                },
                {
                    key: "vertex1",
                    get: function() {
                        return this._vertices[1]
                    },
                    set: function(t) {
                        _.copy(this._vertices[1], t),
                        this.updateVertices()
                    }
                },
                {
                    key: "vertex2",
                    get: function() {
                        return this._vertices[2]
                    },
                    set: function(t) {
                        _.copy(this._vertices[2], t),
                        this.updateVertices()
                    }
                },
                {
                    key: "vertex3",
                    get: function() {
                        return this._vertices[3]
                    },
                    set: function(t) {
                        _.copy(this._vertices[3], t),
                        this.updateVertices()
                    }
                },
                {
                    key: "shape",
                    get: function() {
                        return this._shape
                    }
                },
                {
                    key: "vertices",
                    get: function() {
                        return this._vertices
                    }
                }]),
                e.prototype.updateVertices = function() {
                    this.shape.setVertices(this._vertices)
                },
                e
            } (je), vr.ESimplexType = X, c((mr = Sr).prototype, "shapeType", [_r], Object.getOwnPropertyDescriptor(mr.prototype, "shapeType"), mr.prototype), c(mr.prototype, "vertex0", [u], Object.getOwnPropertyDescriptor(mr.prototype, "vertex0"), mr.prototype), c(mr.prototype, "vertex1", [dr], Object.getOwnPropertyDescriptor(mr.prototype, "vertex1"), mr.prototype), c(mr.prototype, "vertex2", [fr], Object.getOwnPropertyDescriptor(mr.prototype, "vertex2"), mr.prototype), c(mr.prototype, "vertex3", [gr], Object.getOwnPropertyDescriptor(mr.prototype, "vertex3"), mr.prototype), Cr = c(mr.prototype, "_shapeType", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return X.TETRAHEDRON
                }
            }), wr = c(mr.prototype, "_vertices", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [new _(0, 0, 0), new _(0, 0, 1), new _(1, 0, 0), new _(0, 1, 0)]
                }
            }), br = mr)) || br) || br) || br) || br));
            Gr || (Gr = t("h", {}));
            var qr, Yr, Vr, Wr, Xr, Ur, Kr, Zr, Jr, Qr, $r, tn, en, rn, nn, on, sn, an, ln, pn, cn, un, hn, yn, _n, dn, fn, gn, bn, mn = t("i", (Or = n("cc.PlaneCollider"), kr = C(), Tr = w(), Pr = g(_), Dr = O(), Or(Er = kr(Er = Tr(Er = b((xr = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, H.PLANE) || this,
                    a(e, "_normal", Ar, l(e)),
                    a(e, "_constant", Lr, l(e)),
                    e
                }
                return o(e, t),
                s(e, [{
                    key: "normal",
                    get: function() {
                        return this._normal
                    },
                    set: function(t) {
                        _.copy(this._normal, t),
                        this.shape.setNormal(this._normal)
                    }
                },
                {
                    key: "constant",
                    get: function() {
                        return this._constant
                    },
                    set: function(t) {
                        this._constant = t,
                        this.shape.setConstant(this._constant)
                    }
                },
                {
                    key: "shape",
                    get: function() {
                        return this._shape
                    }
                }]),
                e
            } (je), c((Mr = xr).prototype, "normal", [Pr, Dr], Object.getOwnPropertyDescriptor(Mr.prototype, "normal"), Mr.prototype), c(Mr.prototype, "constant", [u], Object.getOwnPropertyDescriptor(Mr.prototype, "constant"), Mr.prototype), Ar = c(Mr.prototype, "_normal", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _(0, 1, 0)
                }
            }), Lr = c(Mr.prototype, "_constant", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), Er = Mr)) || Er) || Er) || Er) || Er)),
            Cn = t("a", (qr = n("cc.Constraint"), Yr = L(Pe), Vr = g(Pe), Wr = S(), Xr = g(Pe), Ur = S(), Kr = S(), Zr = g(Pe), qr(Jr = Yr((rn = en = function(t) {
                function e(e) {
                    var i;
                    return (i = t.call(this) || this).TYPE = void 0,
                    a(i, "_enableCollision", $r, l(i)),
                    a(i, "_connectedBody", tn, l(i)),
                    i._constraint = null,
                    i.TYPE = e,
                    i
                }
                o(e, t),
                s(e, [{
                    key: "attachedBody",
                    get: function() {
                        return this.getComponent(Pe)
                    }
                },
                {
                    key: "connectedBody",
                    get: function() {
                        return this._connectedBody
                    },
                    set: function(t) {
                        this._connectedBody = t,
                        this._constraint && this._constraint.setConnectedBody(t)
                    }
                },
                {
                    key: "enableCollision",
                    get: function() {
                        return this._enableCollision
                    },
                    set: function(t) {
                        this._enableCollision = t,
                        this._constraint && this._constraint.setEnableCollision(t)
                    }
                }]);
                var i = e.prototype;
                return i.onLoad = function() {
                    this._constraint = function(t) {
                        return ut.INITED || (ut.INITED = !0, ut[G.POINT_TO_POINT] = function() {
                            return $(Z.wrapper.PointToPointConstraint, K.PointToPointConstraint) ? ht: new Z.wrapper.PointToPointConstraint
                        },
                        ut[G.HINGE] = function() {
                            return $(Z.wrapper.HingeConstraint, K.HingeConstraint) ? ht: new Z.wrapper.HingeConstraint
                        },
                        ut[G.CONE_TWIST] = function() {
                            return $(Z.wrapper.ConeTwistConstraint, K.ConeTwistConstraint) ? ht: new Z.wrapper.ConeTwistConstraint
                        }),
                        ut[t]()
                    } (this.TYPE),
                    this._constraint.initialize(this)
                },
                i.onEnable = function() {
                    this._constraint && this._constraint.onEnable()
                },
                i.onDisable = function() {
                    this._constraint && this._constraint.onDisable()
                },
                i.onDestroy = function() {
                    this._constraint && this._constraint.onDestroy()
                },
                e
            } (D(P)), en.Type = G, c((Qr = rn).prototype, "attachedBody", [Vr, E, Wr], Object.getOwnPropertyDescriptor(Qr.prototype, "attachedBody"), Qr.prototype), c(Qr.prototype, "connectedBody", [Xr, Ur], Object.getOwnPropertyDescriptor(Qr.prototype, "connectedBody"), Qr.prototype), c(Qr.prototype, "enableCollision", [Kr], Object.getOwnPropertyDescriptor(Qr.prototype, "enableCollision"), Qr.prototype), $r = c(Qr.prototype, "_enableCollision", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ! 0
                }
            }), tn = c(Qr.prototype, "_connectedBody", [Zr], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Jr = Qr)) || Jr) || Jr));
            Cn || (Cn = t("a", {}));
            var wn, vn, Sn, On, kn, Tn, Pn, Dn, En, Mn, An = t("H", (nn = n("cc.HingeConstraint"), on = C(), sn = w(), an = g(_), ln = g(_), pn = g(_), cn = x("axisA"), un = x("pivotA"), hn = x("pivotB"), nn(yn = on(yn = sn((bn = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, G.HINGE) || this,
                    a(e, "_axis", dn, l(e)),
                    a(e, "_pivotA", fn, l(e)),
                    a(e, "_pivotB", gn, l(e)),
                    e
                }
                return o(e, t),
                s(e, [{
                    key: "pivotA",
                    get: function() {
                        return this._pivotA
                    },
                    set: function(t) {
                        _.copy(this._pivotA, t),
                        this.constraint.setPivotA(this._pivotA)
                    }
                },
                {
                    key: "pivotB",
                    get: function() {
                        return this._pivotB
                    },
                    set: function(t) {
                        _.copy(this._pivotB, t),
                        this.constraint.setPivotB(this._pivotB)
                    }
                },
                {
                    key: "axis",
                    get: function() {
                        return this._axis
                    },
                    set: function(t) {
                        _.copy(this._axis, t),
                        this.constraint.setAxis(this._axis)
                    }
                },
                {
                    key: "constraint",
                    get: function() {
                        return this._constraint
                    }
                }]),
                e
            } (Cn), c((_n = bn).prototype, "pivotA", [an], Object.getOwnPropertyDescriptor(_n.prototype, "pivotA"), _n.prototype), c(_n.prototype, "pivotB", [ln], Object.getOwnPropertyDescriptor(_n.prototype, "pivotB"), _n.prototype), c(_n.prototype, "axis", [pn], Object.getOwnPropertyDescriptor(_n.prototype, "axis"), _n.prototype), dn = c(_n.prototype, "_axis", [y, cn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _
                }
            }), fn = c(_n.prototype, "_pivotA", [y, un], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _
                }
            }), gn = c(_n.prototype, "_pivotB", [y, hn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _
                }
            }), yn = _n)) || yn) || yn) || yn)),
            Ln = t("j", (wn = n("cc.PointToPointConstraint"), vn = C(), Sn = w(), On = g(_), kn = g(_), wn(Tn = vn(Tn = Sn((Mn = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, G.POINT_TO_POINT) || this,
                    a(e, "_pivotA", Dn, l(e)),
                    a(e, "_pivotB", En, l(e)),
                    e
                }
                return o(e, t),
                s(e, [{
                    key: "pivotA",
                    get: function() {
                        return this._pivotA
                    },
                    set: function(t) {
                        _.copy(this._pivotA, t),
                        this.constraint.setPivotA(this._pivotA)
                    }
                },
                {
                    key: "pivotB",
                    get: function() {
                        return this._pivotB
                    },
                    set: function(t) {
                        _.copy(this._pivotB, t),
                        this.constraint.setPivotB(this._pivotB)
                    }
                },
                {
                    key: "constraint",
                    get: function() {
                        return this._constraint
                    }
                }]),
                e
            } (Cn), c((Pn = Mn).prototype, "pivotA", [On], Object.getOwnPropertyDescriptor(Pn.prototype, "pivotA"), Pn.prototype), c(Pn.prototype, "pivotB", [kn], Object.getOwnPropertyDescriptor(Pn.prototype, "pivotB"), Pn.prototype), Dn = c(Pn.prototype, "_pivotA", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _
                }
            }), En = c(Pn.prototype, "_pivotB", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new _
                }
            }), Tn = Pn)) || Tn) || Tn) || Tn));
            e.PhysicsSystem = oe,
            e.PhysicsMaterial = yt,
            e.PhysicsRayResult = _t,
            e.ConstantForce = Rr,
            t("p", Object.freeze({
                __proto__: null,
                PhysicsSystem: oe,
                PhysicsRayResult: _t,
                get Collider() {
                    return je
                },
                BoxCollider: Ir,
                SphereCollider: Br,
                CapsuleCollider: Fr,
                MeshCollider: Nr,
                CylinderCollider: jr,
                ConeCollider: zr,
                TerrainCollider: Hr,
                get SimplexCollider() {
                    return Gr
                },
                PlaneCollider: mn,
                get Constraint() {
                    return Cn
                },
                HingeConstraint: An,
                PointToPointConstraint: Ln,
                get RigidBody() {
                    return Pe
                },
                PhysicsMaterial: yt,
                ConstantForce: Rr,
                selector: Z,
                get ERigidBodyType() {
                    return V
                },
                get EAxisDirection() {
                    return W
                },
                get ESimplexType() {
                    return X
                },
                get EColliderType() {
                    return H
                },
                get EConstraintType() {
                    return G
                },
                get PhysicsGroup() {
                    return q
                }
            }))
        }
    }
}));