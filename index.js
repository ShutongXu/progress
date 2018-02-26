import Xprogress from './src/progress.js';
import DomUtil from './util/dom-util.js';

var player = DomUtil.getDomById("player");
var controlBar = DomUtil.getDomBySelector(".control-bar");

// 进度条配置项
var config = {
	video:player,
	element:controlBar,
	color:"#0075ff"
}

// 要在视频数据加载完成后，才能加载进度条
player.onloadeddata = function () {
	var progress = new Xprogress(config);
	progress.atTime(function(){
		console.log("此处播放到10秒");
	}, 10);
	progress.endPlay(function(){
		console.log("播放结束");
	})
}
