import './js/libs/weapp-adapter'
import './js/libs/symbol'

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

import Main from './js/main'

new Main()
