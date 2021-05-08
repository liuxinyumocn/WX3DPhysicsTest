let THREE = require('../three/three')
let ctx = canvas.getContext('webgl', { antialias: true, preserveDrawingBuffer: true })
import { GLTFLoader } from './libs/GLTFLoader.js';
import { OrbitControls } from './libs/OrbitControls.js';
const systemInfo = wx.getSystemInfoSync();
let Ammo;

export default class Main {

    constructor(){
        Ammo = window.Ammo;
        //帧数计数器
        this.fp_ = 0;
        this.fps_lasttimestamp =  new Date().getTime();

        //Cube计数
        this.cube_ = 0;
       
      this.init();
      this.initScene();
      this.initPhysics();
      this.animate();
      this.genSence();

      this.fps_record();

    }

    fps_record(){
        let now = new Date().getTime();
        let d = now - this.fps_lasttimestamp;
        let fps = this.fp_ / d *1000;

        window.global_var.fps = parseInt(fps);

        this.fp_ = 0;
        this.fps_lasttimestamp = now;

        setTimeout(this.fps_record.bind(this),1000);
    }

     /**
     * 初始化渲染
    */
    init(){
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 75, systemInfo.windowWidth / systemInfo.windowHeight, 0.1, 1000 ); 
      this.camera.position.set(8, 8, 8);
      this.camera.lookAt(0, 0, 0);
      this.renderer = new THREE.WebGLRenderer({ context: ctx, canvas: canvas })
      this.renderer.setClearColor(0xbfd1e5);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      //this.renderer.setSize(systemInfo.windowWidth,systemInfo.windowHeight);
      this.clock = new THREE.Clock();
      this.textureLoader = new THREE.TextureLoader();
      this.time = 0;
    }


    animate() {
      this.fp_++;
      var deltaTime = this.clock.getDelta();

      this.updatePhysics(deltaTime);

      requestAnimationFrame(this.animate.bind(this), canvas);
      this.renderer.render(this.scene, this.camera);

      this.time += deltaTime;
  }


    /**
     * 初始化基本场景
    */
   initScene(){
    let ambientLight = new THREE.AmbientLight(0x404040);
    this.scene.add(ambientLight);
    let light = new THREE.DirectionalLight(0xffffff,1);
    light.position.set(-10,10,5);
    light.castShadow = true;
    let d = 10;
    light.shadow.camera.left = -d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = -d;
    
    light.shadow.camera.near = 2;
    light.shadow.camera.for = 2;
    this.scene.add(light);

}

/**
     *  初始化物理引擎相关配置
    */
   initPhysics(){
        
    // 物理引擎相关变量
    let gravityConstant = -9.8;
    let collisionConfiguration;
    let dispatcher;
    let broadphase;
    let solver;
    this.physicsWorld = null;
    this.rigidBodies = [];
    this.margin = 0.05;
    this.transformAux1 = new Ammo.btTransform();

    collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
    dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
    broadphase = new Ammo.btDbvtBroadphase();
    solver = new Ammo.btSequentialImpulseConstraintSolver();
    this.physicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration);
    this.physicsWorld.setGravity(new Ammo.btVector3(0, gravityConstant, 0));
}


    /**
     *  生成方块
    */
   genSence(){
    var pos = new THREE.Vector3();
    var quat = new THREE.Quaternion();

    // 创建地面
    pos.set(0, -0.5, 0);
    quat.set(0, 0, 0, 1);
    var ground = this.createParallellepiped(20, 0.5, 20, 0, pos, quat, new THREE.MeshPhongMaterial({color: 0xffffff}));
    ground.castShadow = true;       // 开启投影
    ground.receiveShadow = true;    // 接受阴影(可以在表面上显示阴影)
    // this.textureLoader.load("grass.png", function (texture) {
    //     texture.wrapS = THREE.RepeatWrapping;
    //     texture.wrapT = THREE.RepeatWrapping;
    //     texture.repeat.set(40, 40);
    //     ground.material.map = texture;
    //     ground.material.needsUpdate = texture;
    // });

    // 堆箱子
    let meatrial = this.createObjectMeatrial();
    this.createCube(meatrial);
}

createCube(meatrial){
    this.cube_ ++;
    window.global_var.num = this.cube_ ;
    if (this.cube_ > 802) {
        window.global_var.print();
        return;
    }

    var pos = new THREE.Vector3();
    var quat = new THREE.Quaternion();
    let sX = Math.random() * 0.75 + 0.25;
    let sY = Math.random() * 0.75 + 0.25;
    let sZ = Math.random() * 0.75 + 0.25;
    
    pos.set(Math.random() * 4 - 2, 10, Math.random() * 4 - 2);
    quat.set(0, 0, 0, 1);
    this.createParallellepiped(sX, sY, sZ, 10, pos, quat, meatrial);

    setTimeout(()=>{
        this.createCube(meatrial);
    },100);
}

createObjectMeatrial() {
    return new THREE.MeshPhongMaterial({color: 11437181});
}

createParallellepiped(sx, sy, sz, mass, pos, quat, material) {
    var threeObject = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz, 1, 1, 1), material);
    var shape = new Ammo.btBoxShape(new Ammo.btVector3(sx * 0.5, sy * 0.5, sz * 0.5));
    shape.setMargin(this.margin);
    this.createRigidBody(threeObject, shape, mass, pos, quat);

    return threeObject;
}

createRigidBody(threeObject, physicsShape, mass, pos, quat) {
    threeObject.position.copy(pos);
    threeObject.quaternion.copy(quat);

    var transform = new Ammo.btTransform();
    transform.setIdentity();
    transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
    transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w));
    var motionState = new Ammo.btDefaultMotionState(transform);

    var localInertia = new Ammo.btVector3(0, 0, 0);
    physicsShape.calculateLocalInertia(mass, localInertia);

    var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, physicsShape, localInertia);
    var body = new Ammo.btRigidBody(rbInfo);

    threeObject.userData.physicsBody = body;

    this.scene.add(threeObject);

    if (mass > 0) {
        this.rigidBodies.push(threeObject);

        // Disable deactivation
        // 防止物体弹力过快消失

        // Ammo.DISABLE_DEACTIVATION = 4
        body.setActivationState(4);
    }

    this.physicsWorld.addRigidBody(body);

    return body;
}

updatePhysics(deltaTime) {
    deltaTime *= 1000;
    
    let start = new Date().getTime();

    this.physicsWorld.stepSimulation(deltaTime);

    let end = new Date().getTime();
    let d = end - start;
    window.global_var.push(d);
    
    // 更新物体位置
    for (var i = 0, iL = this.rigidBodies.length; i <iL; i++ ){
        var objThree = this.rigidBodies[i];
        var objPhys = objThree.userData.physicsBody;
        var ms = objPhys.getMotionState();
        if (ms) {
            ms.getWorldTransform(this.transformAux1);
            var p = this.transformAux1.getOrigin();
            var q = this.transformAux1.getRotation();
            objThree.position.set(p.x(), p.y(), p.z());
            objThree.quaternion.set(q.x(), q.y(), q.z(), q.w());
        }
    }
}

}