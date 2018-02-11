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

    var KProgress = function (config) {
        var that = this;
        // config参数
        var kvideo = config.video;
        var element = config.element;
        var color = config.color;
        var times = config.times;

        this.kvideo = kvideo;
       
        var currentWidth = 0;
        // 增加时间进度显示
        var currentHTML = "<p class='show-current'>00:00:00</p>"
        var durationHTML = "<p class='show-duration'>00:00:00</p>"
        // 增加进度条
        var progressHTML = "<div class='progress_wrapper'><div class='progress_bg'></div><div class='progress_loaded'></div><div class='progress_current'></div> <div class='progress_ball'></div></div>";
        
        var progressPart = DomUtil.createDomElement("div");
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
            }
            // 播放结束改变状态
            if (kvideo.currentTime === kvideo.info.duration) {
                kvideo.states.timeOver = true;
            }
        }

        // 播放时更新进度条进度
        kvideo.ontimeupdate = function () {
           that.updateProcess();
        };

        // !--传入时间的进度条
        // 如果为区间播放的进度条
        if (times) {
            // 视频时长会传入时间的差值
            kvideo.info.duration = parseFloat(times.endTime) - parseFloat(times.startTime);
            // 结束执行状态
            kvideo.states.endPlay = true;
            // 设置显示的开始时间，显示的结束时间
            DomUtil.getDomByClass("show-current", container).innerText = timeFormat(times.startTime);
            DomUtil.getDomByClass("show-duration", container).innerText = timeFormat(times.endTime);
            // 设置timeupdate
            kvideo.currentTime = times.startTime;
            // 设定进度条更新
            this.updateProcess = function () {
                 // 更新进度条
                if (!kvideo.states.progressMouseDown) {
                    var playedTime = kvideo.currentTime - parseFloat(times.startTime);
                    // 当前进度的宽度
                    currentWidth = Math.ceil(playedTime * that.progressW / kvideo.info.duration);
                    that.progress_current.style.width = currentWidth / that.progressW * 100 + "%";
                    that.progress_ball.style.left = (currentWidth - that.ballW) / that.progressW * 100 + "%";
                    // 改变已播放时间,如果不加这句判断，切换视频时会报错
                    if(DomUtil.getDomByClass("show-current", container)){
                        DomUtil.getDomByClass("show-current", container).innerText = timeFormat(kvideo.currentTime);
                    }
                }
                // 播放结束改变状态
                if (kvideo.currentTime === kvideo.info.duration) {
                    kvideo.states.timeOver = true;
                }
                // 保证AB点播放
                if (kvideo.currentTime >= times.endTime) {
                    // 播放结束暂停
                    kvideo.pause();
                    // 继续回到A点开始播放
                    kvideo.currentTime = times.startTime;
                    kvideo.states.endPlay = true;
                }
            }
            kvideo.ontimeupdate = function(){
                that.updateProcess();
            }
        } 
      

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
    KProgress.prototype = {
        // 播放结束时进行的操作,后一次调用会覆盖前一次
        endPlay:function (callback, endTime) {
            var that = this;
            var kvideo = this.kvideo;
            // 循环时不结束
            if(kvideo.states.loop){
                return; 
            }
            kvideo.ontimeupdate = function(){
                that.updateProcess();
                if(endTime){
                    if (parseInt(kvideo.currentTime) >= parseInt(endTime) && kvideo.states.endPlay) {
                        // 用状态保证只执行一次
                        callback();
                        kvideo.states.endPlay =  false;
                    }
                    return;
                }

                if(kvideo.currentTime === kvideo.info.duration){
                    callback();
                }
            };
        },
        // 改变进度条宽度
        changeWidth:function (width) {
            var kvideo = this.kvideo;
            this.controlBarW = width;
            this.progressW = this.controlBarW * this.widthRate; 
        },
        destroy:function () {
           
        }
    }
    return KProgress;
});



