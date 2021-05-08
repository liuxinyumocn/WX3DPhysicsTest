/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";
window.global_var = {
    record : [],
    push:function(timeout){
        //防止数据量过大只对num 每50 周围的帧进行获取
        let n = window.global_var.num + 1;
        if(n % 50 <= 2){
            window.global_var.record.push([
                window.global_var.num,
                timeout,
                window.global_var.fps
            ])
        }

    },
    num:0,
    fps:60,
    print:function(){

        wx.setClipboardData({
            data: JSON.stringify(window.global_var.record)
        })
    }
};
//-----libs-begin-----
loadLib("libs/min/laya.core.min.js")
loadLib("libs/min/laya.ui.min.js")
loadLib("libs/min/laya.d3.min.js")
loadLib("libs/min/laya.physics3D.js")
//loadLib("libs/min/laya.physics3D.wasm.min.js")
// loadLib("libs/min/laya.physics3D.wasm.wasm")
//-----libs-end-------
loadLib("js/bundle.js");
