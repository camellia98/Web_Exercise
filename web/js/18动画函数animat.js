function animate(obj,target,callback){
    //动画函数给不同元素记录不同ing的定时器
    // 当我们不断地点击按钮，这个元素的速度越来越快，因为我们开启了太多定时器
    // 解决方案 让我们元素只有一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        // 步长值写到定时器里面
        // 步长值必须是整数
        // var step = Math.ceil((target - obj.offsetLeft)/ 10);
        var step = (target - obj.offsetLeft)/ 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target){
   // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            if(callback){
                // 调用函数
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
        },30);
}