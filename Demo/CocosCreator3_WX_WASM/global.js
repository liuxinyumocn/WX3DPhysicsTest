let global = {
    record : [],
    push:function(timeout){
        //防止数据量过大只对num 每50 周围的帧进行获取
        let n = global.num + 1;
        if(n % 50 <= 2){
            global.record.push([
                global.num,
                timeout
            ])
        }

    },
    num:0,
    print:function(){
        wx.setClipboardData({
            data: JSON.stringify(global.record)
        })
    }
}

export default global;