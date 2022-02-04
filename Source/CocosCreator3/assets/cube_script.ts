import { _decorator, Component, Node , Prefab ,instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CubeScript')
export class CubeScript extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property({type: Prefab})
    public cubePrfb: Prefab = null;

    renderTimes : number = 0;
    cubeNumber : number = 0;
    scheduleTaskHandler = null;

    start () {


        this.scheduleTaskHandler = this.schedule(function(){
            this.generateCude();
            this.cubeNumber++;

            if(    this.cubeNumber == 200 ||
                   this.cubeNumber == 400 ||
                   this.cubeNumber == 600 ||
                   this.cubeNumber == 800 ||
                   this.cubeNumber == 1000
                )
            console.log('数量：',this.cubeNumber,'FPS:',this.renderTimes / 0.1);
            this.renderTimes = 0;

            if(this.cubeNumber >= 1000){
                this.unschedule(this.scheduleTaskHandler);
            }
        },0.1);

    }

    generateCude(){
        let cube : Node = instantiate(this.cubePrfb);
        if(cube){
            //生成随机位置
            let sX = Math.random() * 0.75 + 0.25;
            let sY = Math.random() * 0.75 + 0.25;
            let sZ = Math.random() * 0.75 + 0.25;
            cube.setScale(sX,sY,sZ);
            cube.setPosition(Math.random() * 4 - 2, 10, Math.random() * 4 - 2)
            this.node.addChild(cube);
        }

    }

    update (deltaTime: number) {
        //帧率计数器
        this.renderTimes++;
    }
}
