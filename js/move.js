function getStyle(obj,name) {//兼容获取所需要的对象的属性值,解决offset在有边框情况下的Bug问题
	if (obj.currentStyle) {//判断是否是IE6以下浏览器
		return obj.currentStyle[name];//IE6以下浏览器获取对象属性值语句
	} else{
		return getComputedStyle(obj,false)[name];//谷歌火狐浏览器获取对象属性值语句
	}
}
function startMove(obj,json,fnEnd) {
	clearInterval(obj.timer);//解决效果帕金森问题
	obj.timer=setInterval(function () {
		var bStop=true;//利用布尔值判断所有效果均已完成
		for(var arr in json){//json传参循环遍历获取方法
			if (arr=='opacity') {//判断传入参数是否为透明度
				var cur = Math.round(parseFloat(getStyle(obj,arr)*100));//透明度获取语句
			} else{
				var cur = parseInt(getStyle(obj,arr));//其他属性值获取语句
			}
			speed=(json[arr]-cur)/5;//缓冲运动速度计算语句
			speed=speed>0?Math.ceil(speed):Math.floor(speed);//解决速度为小数计算机取整达不到预期问题
			if (json[arr]!=cur) {//判断有效果没有达到预期语句
				bStop=false;
			} 
			if (arr=='opacity') {//判断传入参数是否为透明度
				obj.style.opacity=(cur+speed)/100;//透明度赋值语句
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';//兼容IE6以下透明度赋值语句
			} else{
				obj.style[arr]=cur+speed+'px';//其他属性赋值语句
			}	
		}
		if (bStop) {//判断所有效果均已完成
			clearInterval(obj.timer);//清除定时器结束效果变化
			if (fnEnd) {//判断是否有回调函数
				fnEnd();//有回调函数,执行回调函数
			}
		}
	},30)//只有定时器在30ms的时间下,人眼看到的效果是连续变化的
}