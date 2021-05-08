(function () {
	'use strict';

	class Main {
	    constructor() {
	        this.count = 0;
	        this.lastTimestamp = new Date().getTime();
	        this.info = [];
	        Laya3D.init(0, 0, null, Laya.Handler.create(this, () => {
	            Laya.URL.basePath = "https://layaair2.ldc2.layabox.com/demo2/h5/";
	            Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
	            Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
	            Laya.Stat.show();
	            this.newScene = Laya.stage.addChild(new Laya.Scene3D());
	            var camera = this.newScene.addChild(new Laya.Camera(0, 0.1, 100));
	            camera.transform.translate(new Laya.Vector3(0, 6, 9.5));
	            camera.transform.rotate(new Laya.Vector3(-15, 0, 0), true, false);
	            this.tmpVector = new Laya.Vector3(0, 0, 0);
	            var directionLight = new Laya.DirectionLight();
	            this.newScene.addChild(directionLight);
	            directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
	            var mat = directionLight.transform.worldMatrix;
	            mat.setForward(new Laya.Vector3(-1.0, -1.0, -1.0));
	            directionLight.transform.worldMatrix = mat;
	            var plane = this.newScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(20, 20, 20, 20)));
	            var planeMat = new Laya.BlinnPhongMaterial();
	            Laya.Texture2D.load("res/threeDimen/Physics/grass.png", Laya.Handler.create(this, function (tex) {
	                planeMat.albedoTexture = tex;
	            }));
	            var tilingOffset = planeMat.tilingOffset;
	            tilingOffset.setValue(5, 5, 0, 0);
	            planeMat.tilingOffset = tilingOffset;
	            plane.meshRenderer.material = planeMat;
	            var planeStaticCollider = plane.addComponent(Laya.PhysicsCollider);
	            var planeShape = new Laya.BoxColliderShape(20, 0, 20);
	            planeStaticCollider.colliderShape = planeShape;
	            planeStaticCollider.friction = 2;
	            planeStaticCollider.restitution = 0.3;
	            this.mat1 = new Laya.BlinnPhongMaterial();
	            Laya.Texture2D.load("res/threeDimen/Physics/plywood.jpg", Laya.Handler.create(this, function (tex) {
	                this.mat1.albedoTexture = tex;
	            }));
	            //Laya.timer.loop(100, this, this.addSphere);
	        	setTimeout(()=>{
	        		this.addSphere();
	        	},100)
	        }));
	    }
	    addSphere() {

	    	window.global_var.num = this.count;
	        if (++this.count > 802) {
	            window.global_var.print();
	            return;
	        }

	    	if(this.count % 50 == 0){
	    		let now = new Date().getTime();
	    		let d = now - this.lastTimestamp;
	    		this.info.push([this.count,d,Laya.Stat.FPS]);
	    		this.lastTimestamp = now;
	        	console.log(Laya.Stat.FPS);
	    	}

	        let sX = Math.random() * 0.75 + 0.25;
	        let sY = Math.random() * 0.75 + 0.25;
	        let sZ = Math.random() * 0.75 + 0.25;
	        var sphere = this.newScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(sX, sY, sZ)));
	        sphere.meshRenderer.material = this.mat1;
	        this.tmpVector.setValue(Math.random() * 4 - 2, 10, Math.random() * 4 - 2);
	        sphere.transform.position = this.tmpVector;
	        var rigidBody = sphere.addComponent(Laya.Rigidbody3D);
	        var sphereShape = new Laya.BoxColliderShape(sX, sY, sZ);
	        rigidBody.colliderShape = sphereShape;
	        rigidBody.mass = 10;
	        setTimeout(()=>{
	        		this.addSphere();
	        	},100)
	    }
	}
	new Main();

}());
