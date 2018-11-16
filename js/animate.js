/**
 * Created by Administrator on 2016/7/25.
 */
/**
 * 能够让任意对象匀速移动到指定位置
 * @param obj
 * @param step
 * @param target
 */
function animate(obj, step, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        step = Math.abs(step);
        step = leader < target ? step : -step;
        //Math.abs(target - leader)  当前位置到目标的位置
        if (Math.abs(target - leader) > Math.abs(step)) {
            leader += step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 15);
}
//缓动移动
function animate1(obj, target) {//target目标距离
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;//ul（大盒子）距离固定盒子的距离   ul在走
        var step = (target - leader) / 10;//走的总距离-（大盒子）距离固定盒子的距离  ，每走一次距离变短， step 速度
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        obj.style.left = leader + "px";
        if (leader === target) {
            clearInterval(obj.timer);
        }
    }, 15);
}