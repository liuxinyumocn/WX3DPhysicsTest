# 几款游戏引擎在微信小游戏中的3D物理性能测试报告

声明：本文仅对相关引擎性能客观评测，不对引擎的选择做主观推荐，请读者悉知。

## 概述

------

本文就目前三款小游戏设计引擎针对它们注重物理题材的3D小游戏的渲染性能进行简要的测试对比。

测试方案为在三款游戏引擎中设计出几乎相同的游戏场景，包括场景中的各种可能引发渲染代价的变量进行同步设定处理，然后将设计一个数量逐渐增大的方块自由掉落的实验进行渲染性能的测试。

这里需要强调的是，测试用例中的场景和基本的物理贴图、光照材质、摄像机位置几乎相同，但Demo的设计上及具体方法并未完全一样，由于本实验的目的就是假设在三款引擎的开发者按照每个引擎各自标准的设计方法去设计相同的游戏内容时的性能对比，所以引擎自身因为构建产生的渲染代价差异理应也在本次的性能对比的考察范围内。



本文的仓库地址为：https://github.com/liuxinyumocn/WX3DPhysicsTest

仓库内已构建好本文所有实验对应的客户端版本，请参阅 **仓库目录** 说明自行下载测试。



## 测试Demo的场景设计

------

在空地上方随机产生不定尺寸的方块，使其进行自由落体到地面上，方块持续产生并在地面中堆积，观测在不同设备中的渲染帧率（**FPS**）以及不同引擎中物理单步计算耗时(**stepSimulation**)，左图为CocosCreator3.0中效果，中图为LayaBox效果，右图为Threejs效果。

<img src="https://github.com/liuxinyumocn/WX3DPhysicsTest/blob/master/image/image-20210410210434454.png?raw=true" alt="image-20210410210434454" width="200" /><img src="https://github.com/liuxinyumocn/WX3DPhysicsTest/blob/master/image/image-20210410210446343.png?raw=true" alt="image-20210410210434454" width="200" /><img src="https://github.com/liuxinyumocn/WX3DPhysicsTest/blob/master/image/image-20210410210434254.png?raw=true" alt="image-20210410210434454" width="200" />





其中我们对场景中的相关参数做出如下统一设定：

Plane:

- Size : X:20  Y:0.001  Z:20
- Physic-Material-friction = 2
- Physic-Material-restitution = 2

Cube:

- Position: X: -2  ~  2  ; Y:  10  ; Z:-2  ~  2
- Size: X:0.25  ~  1 ; Y:0.25  ~  1 ; Z:0.25  ~  1
- Rigid-Mass: 10
- Material-Effect: Blinn-phong

每100ms产生1个Cube自由落体。



## 影响因素分析

------

影响渲染帧率的因素可能大致包括如下几点：

1. 测试设备自身的硬件性能；
2. 场景中方块掉落位置和其尺寸的随机性导致的波动性的物理计算量；
3. 物理引擎的计算效率；
4. 游戏引擎内部执行效率差异等

其中对于CocosCreator3.0提供了**Bullet**物理引擎的**AmmoJS**版本以及对应的**wasm**版本，LayaBox均提供了bullet物理引擎以及对应的wasm版本，本文将针对**Ammo**物理引擎分别对他们的JS和wasm版本进行一系列的性能测试（WASM仅针对物理引擎，游戏主体仍是JS/TS）。



## 实验数据采样方法

------

本文将主要观测2个数据指标来对不同版本客户端效果进行评测，

第一个指标为 FPS（Frames Per Second），指游戏画面每秒的渲染帧数，通常而言游戏画面稳定的60FPS及以上则表明该游戏渲染流畅。

第二个指标为物理引擎单步模拟（stepSimulation）耗时，引擎在渲染前需要进行一次场景各个物体的物理属性计算，本文将对每一次计算的前后进行时间戳标记，从而得到每次物理计算的过程中的耗时，场景中的物理随时间推移组件变多且复杂，由此观测各个环境下的物理运算性能。



对于FPS的数据获取各个引擎提供自身的数值获取方法，也可以在每次渲染中自行进行计数计算，对于物理引擎单步模拟的耗时数值获取方法如下：

Cocos Creator中由 **渲染引擎 -> 物理引擎** 在其开源的仓库中我们可以找到对应的代码行，

其地址为：https://github.com/cocos-creator/engine/blob/314ede133/cocos/physics/framework/physics-system.ts#L334

对该部分前后进行时间戳的打点由此可计算出计算耗时，代码样例为：

```JavaScript
this.physicsWorld.syncSceneToPhysics();

let start = new Date().getTime(); //起点时间戳

this.physicsWorld.step(this._fixedTimeStep);		//Cocos Creator的 stepSimulation

let end = new Date().getTime(); //终点时间戳
let d= end - start;
window.global_var.push(d); //导入至一个全局的记录器中  ①

this._accumulator -= this._fixedTimeStep;
this._subStepCount++;
this.physicsWorld.emitEvents();
this.physicsWorld.syncAfterEvents();
// others ……
```

①处代码用于将当前时刻的耗时数据进行统一记录，方法是构建一个全局的记录器（浏览器环境中使用 **window** 全局变量，小游戏环境中可以创建公共的模块在不同的脚本中引用）

记录器代码样例为：

```JavaScript
window.global_var = {
		record : [],
		push:function(timeout){
			let n = window.global_var.num + 1;
      if(n % 50 <= 2){  //防止数据集过大只对num 每50 周围的帧进行获取，例如当前 num 为49、50、51 时则开始记录
        window.global_var.record.push([
          window.global_var.num,
          timeout
        ])
      }
    },
	num:0,	//当前已经产生Cube的数量 由方块生成函数进行赋值修改
  print:function(){
    document.write(JSON.stringify(window.global_var.record));  //将记录集打印 ②
  }
};
```

②处负责将记录的结果集进行打印输出，在浏览器环境中**采用 *document.write()***  可直接打印在屏幕中，在小游戏环境中由于没有该DOM方法，因此采用一种曲线救国的方法，将该文本内容**使用微信API** ***wx.setClipboardData({})*** ，设置到移动设备的粘贴板中从而可以复制出来。

注：考虑到在控制台调试模式下会造成性能的额外损耗（尤其在移动设备中），所以**不采用 *console.log()*** 方式将数据集打印出来。



LayaBox由于引擎内部封装了物理引擎，没有暴露出 **stepSimulation** 函数的明显位置，我们依然可以在物理引擎对外提供的胶水代码中找到由渲染引擎请求物理引擎的计算位置，以本文其中一个Layabox的客户端版本为例子，其位置在：https://github.com/liuxinyumocn/WX3DPhysicsTest/blob/master/Demo/Layabox_Browser_WASM/libs/min/laya.d3.min.js#L3



Threejs版本中由于是由开发者手动接入物理引擎，因此直接在 stepSimulation 方法前后增加计时器计算耗时即可。其位置在：https://github.com/liuxinyumocn/WX3DPhysicsTest/blob/master/Demo/Threejs_WX_WASM/js/main.js#L219



关于在小游戏环境中使用WASM版本的方法可以参考本人的另一篇文章及说明 [微信小游戏中使用Ammo (wasm版)](https://github.com/liuxinyumocn/WXGameAmmoWasm) https://github.com/liuxinyumocn/WXGameAmmoWasm。



## 实验结果

------

分别对LayaBox、CocosCreator3.0、Threejs版本上述测试Demo在如下环境中对产生不同方块数量时的渲染帧率进行测试。



**测试环境**：

PC：iMac 版本11.2.2 Core i7  / Chrome 版本 90.0.4430.93

iPhone：iPhone11 Pro Max 版本14.4.2 A13 / 微信 版本 8.0.5 支持库 2.16.1

Android：小米10 版本10 内核4.19.81 骁龙865  / 微信 版本 8.0.3 支持库 2.16.1

Cocos Creator版本：3.0.1 / Ammo引擎自带

LayaBox版本：2.11.0 / Ammo引擎自带

Threejs版本：4.5 / 与Cocos Creator完全相同



**测试项**：

使用非wasm版本以及wasm版本的Demo在PC Chrome、PC Firefox、iPhone11 Pro Max Chrome、iPhone11 Pro Max WX、小米10 WX 中进行测试，记录每个游戏引擎在不同的运行环境中FPS值由60(＞60也算60)逐渐降低的Cube产生数量，同时也以每50个Cube为一组，观测一组Cube的总生产耗时的变化。



#### LayaBox实验数据

数据列代表产生对应Cube时的 “渲染帧率（**FPS**）” 以及对应的 “物理计算时差（**stepSimulation**）”，

例如100Cube:  60FPS - 30ms  代表生成100个Cube时渲染帧率为60FPS，物理计算耗时为30ms（两者为对应时刻附近均值）。

| 设备-运行环境              | 50Cube (FPS - ms) | 100        | 150            | 200                | 400                | 800               |
| -------------------------- | ----------------- | ---------- | -------------- | ------------------ | ------------------ | ----------------- |
| PC Chrome - JS             | 60FPS - 1ms       | 60 - 2     | -              | -                  | 60 - 10            | <u>39 - 22</u>    |
| PC Chrome - WASM           | 60 - 1            | 60 - 1     | -              | -                  | 60 - 4             | **<u>51 - 9</u>** |
| iPhone11 Pro Max WX - JS   | <u>46 - 28</u>    | 17 - 67    | 10 - 103       | 7 - 129            | 3 - 344            | -                 |
| iPhone11 Pro Max WX - WASM | **60 - 4**        | **60 - 6** | **60 - 11**    | <u>**45 - 15**</u> | **18 - 36**        | -                 |
| 小米10 WX - JS             | 60 - 1            | 60 - 7     | <u>57 - 11</u> | 57 - 11            | 57 - 14            | 29 - 28           |
| 小米10 WX - WASM           | 60 - 1            | 60 -4      | **60 - 6**     | **60 - 9**         | <u>**59 - 12**</u> | **53 - 14**       |

注：<u>下划线</u> 代表该机型首次出现低于60FPS的位置，在下划线之前的 “ - ” 指60FPS稳定渲染，下划线之后的 “ - ” 指该位置渲染几乎卡死不做取样。**加粗** 指JS版本与WASM版本在同一机型同一取样点时较优性能高亮指示。在部分机型支持90FPS时本文对大于60FPS的渲染均按照60FPS记录。



#### CocosCreator3.0实验数据

注：CocosCreator3.0目前仅支持在微信小游戏中使用wasm模式，且截至本测试结束时，CocosCreator3.0的引擎分离模式下不支持wasm（自动转为js），因此必须选用非分离模式（可能需要手动完成小游戏分包工作）。

| 设备-运行环境              | 50Cube (FPS - ms) | 100           | 150         | 200         | 300               | 400            | 800         |
| -------------------------- | ----------------- | ------------- | ----------- | ----------- | ----------------- | -------------- | ----------- |
| PC Chrome - JS             | 60FPS - 1ms       | -             | -           | 60 - 4      | 60 - 6            | <u>58 - 12</u> | 43 - 19     |
| PC Firefox - JS            | 60 - 1            | -             | -           | 60 - 5      | <u>45 - 8</u>     | 34 - 10        | 20 - 23     |
| iPhone11 Pro Max WX - JS   | <u>20 - 47</u>    | 9 - 89        | 5 - 134     | 3 - 204     | 1 - 385           | -              | -           |
| iPhone11 Pro Max WX - WASM | **<u>34 - 6</u>** | **21 - 13**   | **16 - 19** | **12 - 27** | **6 - 42**        | -              | -           |
| 小米10 WX - JS             | 60 - 3            | <u>58 - 9</u> | 58 - 11     | 58 - 11     | 52 - 15           | 37 - 20        | 16 - 49     |
| 小米10 WX - WASM           | 60 - 8            | **60 - 4**    | **60 - 5**  | **60 - 6**  | <u>**57 - 9**</u> | **43 - 13**    | **23 - 27** |



#### Threejs实验数据

Threejs是渲染引擎，在本文中作为游戏引擎的实验数据参照，因此单独对Threejs在微信小游戏中的性能进行测试并记录。注：Threejs版本中的ammo的wasm版本与Cocos Creator3.0中使用的完全相同。

| 设备-运行环境              | 50Cube (FPS - ms) | 100            | 150       | 200                | 400         | 800                |
| -------------------------- | ----------------- | -------------- | --------- | ------------------ | ----------- | ------------------ |
| iPhone11 Pro Max WX - JS   | 60 - 15           | <u>25 - 37</u> | 16 - 63   | 10 - 88            | 4 - 230     | -                  |
| iPhone11 Pro Max WX - WASM | 60 - 2            | **60 - 5**     | **60 -8** | <u>**49 - 13**</u> | **22 - 28** | **9 - 66**         |
| 小米10 WX - JS             | 60 - 2            | 60 - 5         | 60 - 6    | 60 - 8             | 60 - 12     | **<u>52 - 16</u>** |
| 小米10 WX - WASM           | 60 - 1            | 60 - 4         | 60 - 6    | 60 - 5             | 60 - 7      | <u>51 - 12</u>     |



## 结论

------

上述实验中选用目前小米10（1档Android机型）与iPhone11 Pro Max（1档iOS机型）进行测试，并使用Chrome浏览器以及Threejs版本的测试用例作为对照，总结如下：

1. 在原生浏览器以及安卓微信小游戏（即非iOS微信小游戏）环境中，所有测试样例均表现出较好了性能表现，在200个刚体下能够基本能保持稳定的渲染效果，适用于一般的小游戏场景的设计；
2. 在各个测试样例中，使用wasm版本的物理引擎均有效的提升游戏的渲染性能1～3倍，这是在不需要改变游戏内在结构的情况下，一种快捷有效的性能优化手段，推荐开发者优先使用wasm版的物理引擎；
3. iOS微信小游戏由于没有JIT，因此在各个渲染引擎中相比其他环境性能上均稍有逊色，但从js与wasm的对照中可知，使用wasm版物理引擎可较明显的改善性能的损失。





## 仓库目录

仓库地址：https://github.com/liuxinyumocn/WX3DPhysicsTest

~~~
├─Demo           				测试Demo在各引擎不同运行环境中的客户端
│  ├─xx_Browser_JS      xx引擎 原生浏览器环境 JS版物理引擎
│  ├─xx_WX_JS						xx引擎 微信小游戏 JS版物理引擎
│  ├─xx_WX_WASM					xx引擎 微信小游戏 WASM版物理引擎 
│  └─ ...           
│
├─Source                测试Demo源代码（引擎构建前）
│  └─CocosCreator3      CocosCreator测试Demo的源代码 其他引擎请参阅Demo目录内客户端
│
├─README.md             README 文件
~~~

