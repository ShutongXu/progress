# progress

## progrss的作用
* 自定义进度条，用来取代原生进度条，方便自定义video控制栏

------------

## progrss的功能
* 显示已播放进度
* 显示缓冲进度
* 支持点击和拖拽改变播放进度

------------

## progrss的使用
* 注意一定要在视频加载完后才能初始化进度条，否则获取不到视频总时长。

```javascript
	var config = {
		video:player, //video的dom元素
		element:controlBar, //进度条生成所在的父容器dom元素
		color:"#0075ff"	//进度条的颜色 
	}
	// 要在视频数据加载完成后，才能加载进度条
	player.onloadeddata = function () {
	  var progress = new progress(config);
	}

```

