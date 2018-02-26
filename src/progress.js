/**
 * 功能描述：视频进度条
 * 组件类型：自定义组件
 * 
 * 依赖：base-util.js, dom-util.js, progress.css
**/
;

'use strict';

const DomUtil = require('../util/dom-util.js');
require('./progress.css');

define([], function() {
	// 时间数据整理函数
	var timeFormat = function(time) {
		var hour = 0,
			min = 0,
			sec = 0;
		time = parseInt(time);
		if(time > 3600) {
			hour = parseInt(time / 3600);
			time = time % 3600;
		}
		min = parseInt(time / 60);
		sec = time % 60;

		// 小时、分钟、秒不到10，补一位0
		hour = hour < 10 ? "0" + hour : hour;
		min = min < 10 ? "0" + min : min;
		sec = sec < 10 ? "0" + sec : sec;
		return hour + ":" + min + ":" + sec;
	}
	// 对事件进行监听
	var addEvent = function (video, event, callback) {
		if(callback){
			video.addEventListener(event, callback);
		}
	}
	// 对事件进行解绑
	var removeEvent = function (video, event, callback) {
		if(callback){
			video.removeEventListener(event, callback);             
		}
	}

	var Progress = function (config) {
		var that = this;
		// config参数
		var kvideo = this.kvideo = config.video;
		var element = this.element = config.element;
		var color = config.color;
		var times = config.times;

		console.log(element);
	   
		var currentWidth = 0;
		// 增加时间进度显示
		var currentHTML = "<p class='show-current'>00:00:00</p>"
		var durationHTML = "<p class='show-duration'>00:00:00</p>"
		// 增加进度条
		var progressHTML = "<div class='progress_wrapper'><div class='progress_bg'></div><div class='progress_loaded'></div><div class='progress_current'></div> <div class='progress_ball'></div></div>";
		
		var progressPart = this.progressPart = DomUtil.createDomElement("div");
		progressPart.className = "progress-part";
		element.insertBefore(progressPart, element.firstChild);

		var container = DomUtil.getDomByClass("progress-part", element);
		this.container = container;
		
		DomUtil.append(container, progressHTML);
		DomUtil.append(container, durationHTML);
		DomUtil.append(container, currentHTML);

		 // 获取这些元素的dom对象
		this.progress_current = DomUtil.getDomByClass("progress_current", container);
		this.progress_ball = DomUtil.getDomByClass("progress_ball", container);
		// 设置进度条颜色
		if(color){
			this.progress_current.style.backgroundColor = color; 
		}

		var progressWrapper = DomUtil.getDomByClass("progress_wrapper", container);
		var progressBg = DomUtil.getDomByClass("progress_bg", container);
		var progressLoaded = DomUtil.getDomByClass("progress_loaded", container);

		// 进度球的宽度为1
		this.ballW = 1;
		this.controlBarW = progressWrapper.clientWidth;
		// 设置进度条区域宽高
		this.widthRate = 1;
		this.progressW = this.controlBarW * this.widthRate;


		// 屏幕大小变化时重新更新进度条宽度
		window.onresize = function(){
			that.controlBarW = progressWrapper.clientWidth;
			that.progressW = that.controlBarW * that.widthRate;
		}

		// 不存在info设置一个
		if (!kvideo.info) {
			kvideo.info = {
				duration:kvideo.duration
			}
		}
		// 不存在states设置一个
		if (!kvideo.states) {
			kvideo.states = {
				progressMouseDown:false
			}
		}

		// 显示视频总时长
		if(!kvideo.info.duration){
			kvideo.info.duration = kvideo.duration;
		}
		DomUtil.getDomByClass("show-duration", container).innerText = timeFormat(kvideo.info.duration);

		// 查找当前进度在哪段缓冲
		var bufferFilter = function (x) {
			var length = kvideo.buffered.length;
			for(var i = 0; i < length ; i++ ) {
				var start =  kvideo.buffered.start(i);
				var end = kvideo.buffered.end(i);
				// 火狐浏览器第一段缓冲不是从0秒开始，手动设为0秒
				if(i === 0){
					start = 0;
				}
				if ( x >= start && x <= end ) {
					return {start: start, end: end, x:x};
				}
			}
			return {start: x, end: x};
		}

		// 显示缓冲进度
		var bufferTimer = function (buffered) {
			if(buffered.length){
				that.progressW = that.controlBarW * that.widthRate;
				// 因为point的拉动距离只是totalWidth
				var offsetTime = (currentWidth / that.progressW) * kvideo.info.duration;              
				var bufferData = bufferFilter(offsetTime);
				// 设定缓冲的开始位置
				var left = (bufferData.start / kvideo.info.duration) * 100 + "%";
				// 当前缓冲的时间段
				var currentBuffer = bufferData.end - bufferData.start;
				// 设定缓冲宽度
				var width = (currentBuffer / kvideo.info.duration) * 100 + "%";

				progressLoaded.style.left = left;
				progressLoaded.style.width = width;
			  
			}
		}

		// 更新进度条函数
		this.updateProcess = function () {
			if (!kvideo.states.progressMouseDown) {
				// 当前进度的宽度
				currentWidth = Math.ceil(kvideo.currentTime * that.progressW / kvideo.info.duration);
				that.progress_current.style.width = currentWidth / that.progressW * 100 + "%";
				that.progress_ball.style.left = (currentWidth - that.ballW) / that.progressW * 100 + "%";
				// 改变已播放时间,如果不加这句判断，切换视频时会报错
				if (DomUtil.getDomByClass("show-current", container)) {
					DomUtil.getDomByClass("show-current", container).innerText = timeFormat(kvideo.currentTime);
				}
				if (kvideo.info.smallVideo) {
					kvideo.info.smallVideo.currentTime = kvideo.currentTime;
				}
			}
			// 播放结束改变状态
			if (kvideo.currentTime === kvideo.info.duration) {
				kvideo.states.timeOver = true;
			}
		}

		// 播放时更新进度条进度
		addEvent(kvideo, "timeupdate", function () {
			that.updateProcess();
		});

		// 加载时的缓冲
		kvideo.onprogress = function () {
			bufferTimer(kvideo.buffered);
		};
		
		progressWrapper.addEventListener("mousedown", function(e){
			kvideo.states.progressMouseDown = true;
			// 拖拽后的进度
			var dragWidth;
			function changeProgressBar (e) {
				// 每次点击重新获取进度容器宽度，解决全屏时拖动进度便宜问题
				that.progressW = progressWrapper.clientWidth * that.widthRate; 
				// 鼠标点击处距离左侧位置
				var clickLeft = e.pageX;
				// 进度条相对于页面左侧位置, ！！！！如果有横向滚动则距离会变成负值
				var progressLeft = progressWrapper.getBoundingClientRect().left;
				// 页面横向滚动的距离
				var scrollLeft = document.body.scrollLeft;
				// 抵消滚动产生的距离
				progressLeft += scrollLeft;

				// 测算拖拽的距离
				dragWidth = clickLeft - progressLeft;

				if(dragWidth < 0){
					dragWidth = 0;
				} else if (dragWidth > that.progressW){
					dragWidth = that.progressW;
				}

				// 设定百分比
				that.progress_current.style.width = (dragWidth / that.progressW) * 100 + "%";
				that.progress_ball.style.left = (dragWidth - that.ballW) / that.progressW * 100 + "%";
				var changeTime = (dragWidth / that.progressW) * kvideo.info.duration;
				// 如果为区间播放的进度条
				if (times) {
					changeTime += parseFloat(times.startTime);
				}
				kvideo.currentTime = changeTime;
				DomUtil.getDomByClass("show-current").innerText = timeFormat(kvideo.currentTime);
			}
			changeProgressBar(e);

			// 鼠标移动
			var mouseMove = function (e) {
				changeProgressBar(e);
			};
			// 鼠标抬起
			var mouseUp = function () {
				kvideo.states.progressMouseDown = false;
				kvideo.states.timeOver = dragWidth === that.progressW ? true : false;
				
				document.removeEventListener("mousemove",mouseMove);
				document.removeEventListener("mouseup",mouseUp);
			};
			document.addEventListener("mousemove",mouseMove);
			document.addEventListener("mouseup",mouseUp);
		})
	};

	//进度条的方法
	Progress.prototype = {
		// 添加需要跟随播放进度改变执行的事件
		timeUpdate: function (callback) {
			addEvent(this.kvideo, "timeupdate", callback);
		},
		// 删除跟随播放进度改变执行的事件
		removeUpdate: function (callback) {
			removeEvent(this.kvideo, "timeupdate", callback);
		},
		// 播放到指定时间时执行的函数
		atTime: function (callback, time) {
			var that = this;
			var kvideo = this.kvideo;
			var done = false;  // 只执行一次
			// 循环时不结束
			if(kvideo.states.loop){
				return; 
			}
			that.timeUpdate(function(){
				if (time && !done) {
					if (parseInt(kvideo.currentTime) === parseInt(time)) {
						callback();
						// 状态改为已执行
						done = true;
					}
				}
			});
		},
		endPlay: function (callback) {
			this.atTime(callback, this.kvideo.info.duration);
		},
		// 改变进度条宽度
		changeWidth:function (width) {
			this.controlBarW = width;
			this.progressW = this.controlBarW * this.widthRate; 
		},
		remove:function () {
			this.element.removeChild(this.progressPart);
		}
	}
	return Progress;
});



