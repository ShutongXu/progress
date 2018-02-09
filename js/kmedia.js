(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; //发布时可注释

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {

    var domUtil = {
        createDomElement: function createDomElement(tag) {
            return document.createElement(tag);
        },
        addEventByClass: function addEventByClass(sClass, event, callback) {
            var elements = document.getElementsByClassName(sClass);
            for (var i = 0, len = elements.length; i < len; i++) {
                elements[i].addEventListener(event, callback);
            }
        },
        addEventById: function addEventById(sId, event, callback) {
            document.getElementById(sId).addEventListener(event, callback);
        },
        removeEventByClass: function removeEventByClass(sClass, event, callback) {
            var elements = document.getElementsByClassName(sClass);
            for (var i = 0, len = elements.length; i < len; i++) {
                elements[i].removeEventListener(event, callback);
            }
        },
        removeEventById: function removeEventById(sId, event, callback) {
            document.getElementById(sId).removeEventListener(event, callback);
        },
        getDomById: function getDomById(sId, appointedDom) {
            if (appointedDom) {
                return appointedDom.getElementById(sId);
            }
            return document.getElementById(sId);
        },
        getDomByClass: function getDomByClass(sClass, appointedDom) {
            if (appointedDom) {
                return appointedDom.getElementsByClassName(sClass)[0];
            }
            return document.getElementsByClassName(sClass)[0];
        },
        getDomsByClass: function getDomsByClass(sClass, appointedDom) {
            if (appointedDom) {
                return appointedDom.getElementsByClassName(sClass);
            }
            return document.getElementsByClassName(sClass);
        },
        getDomBySelector: function getDomBySelector(selector, appointedDom) {
            if (appointedDom) {
                return appointedDom.querySelector(selector);
            }
            return document.querySelector(selector);
        },
        getDomsBySelector: function getDomsBySelector(selector, appointedDom) {
            if (appointedDom) {
                return appointedDom.querySelectorAll(selector);
            }
            return document.querySelectorAll(selector);
        },
        removeDomById: function removeDomById(sId, appointedDom) {
            var target;
            if (appointedDom) {
                target = appointedDom.getElementById(sId);
            } else {
                target = document.getElementById(sId);
            }
            target.parentNode.removeChild(target);
        },
        appendDom: function appendDom(parent, son) {
            parent.appendChild(son);
        },
        // 获取父级元素的宽度
        getParentWidth: function getParentWidth(element) {
            return element.parentNode.clientWidth;
        },
        // 获取父级元素的高度
        getParentHeight: function getParentHeight(element) {
            return element.parentNode.clientHeight;
        },
        // 设定元素宽度
        setWidth: function setWidth(element, width) {
            return element.style.width = width + "px";
        },
        // 设定元素高度
        setHeight: function setHeight(element, height) {
            return element.style.height = height + "px";
        },
        // 设定元素宽度
        setLeft: function setLeft(element, left) {
            return element.style.left = left + "px";
        },
        // 添加监听事件
        on: function on(element, operate, callback) {
            if (!callback) {
                return;
            }
            element.addEventListener(operate, callback);
        },
        // 模拟append方法
        append: function append(element, text) {
            element.insertAdjacentHTML("beforeEnd", text);
        },
        appendAfter: function appendAfter(element, text) {
            element.insertAdjacentHTML("afterEnd", text);
        },
        // 插入dom节点
        insertAfter: function insertAfter(dom, target) {
            var parent = target.parentNode;
            var len = parent.childNodes.length;
            // 转换为数组
            var children = Array.prototype.slice.call(parent.childNodes, 0);
            var index = children.indexOf(target);
            // 判断要插入的元素是不是最后一个
            if (len > index + 1) {
                parent.insertBefore(dom, children[index + 1]);
            } else {
                parent.appendChild(target);
            }
        }
    };
    return domUtil;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var domUtil = __webpack_require__(0);

'use strict';
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	// 选择器
	var baseUtil = {

		// 时间数据整理
		timeFormat: function timeFormat(time) {
			var hour = 0,
			    min = 0,
			    sec = 0;
			time = parseInt(time);
			if (time > 3600) {
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
		},
		//属性扩展
		extend: function extend(target, source) {
			for (var key in source) {
				target[key] = source[key];
			}
		},
		//深拷贝
		deepCopy: function deepCopy(c, o) {
			var c = c || {};
			for (var i in o) {
				if (_typeof(o[i]) === 'object') {
					//要考虑深复制问题了
					if (o[i].constructor === Array) {
						//这是数组
						c[i] = [];
					} else {
						//这是对象
						c[i] = {};
					}
					this.deepCopy(o[i], c[i]);
				} else {
					if (typeof o[i] == 'function') c[i] = o[i];
				}
			}
			return c;
		},
		//变量是否存在
		isExitsVariable: function isExitsVariable(variableName, tips) {
			try {
				if (typeof variableName == "undefined") {
					// console.log(variableName, tips);
					return false;
				} else {
					return true;
				}
			} catch (e) {}
			return false;
		},
		//数组去重
		UnitArray: function UnitArray(arry) {
			var res = [arry[0]];
			for (var i = 1; i < arry.length; i++) {
				var repeat = false;
				for (var j = 0; j < res.length; j++) {
					if (arry[i] == res[j]) {
						repeat = true;
						break;
					}
				}
				if (!repeat) {
					res.push(arry[i]);
				}
			}
			return res;
		},
		//arr1中不存在在arr2中的数组
		minus: function minus(arr1, arr2) {
			var result = new Array();
			var obj = {};
			for (var i = 0; i < arr2.length; i++) {
				obj[arr2[i]] = 1;
			}
			for (var j = 0; j < arr1.length; j++) {
				if (!obj[arr1[j]]) {
					obj[arr1[j]] = 1;
					result.push(arr1[j]);
				}
			}
			return result;
		},
		//两个数组的交集
		intersect: function intersect() {
			var result = new Array();
			var obj = {};
			for (var i = 0; i < arguments.length; i++) {
				for (var j = 0; j < arguments[i].length; j++) {
					var str = arguments[i][j];
					if (!obj[str]) {
						obj[str] = 1;
					} else {
						obj[str]++;
						if (obj[str] == arguments.length) {
							result.push(str);
						}
					}
				}
			}
			return result;
		},

		// ajax部分
		baseUrl: "/common_access?Action=",
		get: function get(url, params, callback) {
			this.ajax("get", url, params, callback);
		},
		post: function post(url, params, callback) {
			this.ajax("post", url, params, callback);
		},
		ajax: function ajax(type, url, params, fnSucc, fnfiled) {
			var _ajax;
			var _url = this.baseUrl + url;
			if (window.XMLHttpRequest) {
				_ajax = new XMLHttpRequest();
			} else {
				//IE6浏览器创建ajax对象
				_ajax = new ActiveXObject("Microsoft.XMLHTTP");
			}
			// 判断是否为空数组
			var isEmptyObject = function isEmptyObject(e) {
				var t;
				for (t in e) {
					return false;
				}
				return true;
			};
			// 对象转字符串
			var objectToString = function objectToString(object) {
				var array = [];
				for (var item in object) {
					array.push(item + "=" + object[item]);
				}
				return array.join("&");
			};

			if (type === "get") {
				// 如果get有参数
				if (!isEmptyObject(params)) {
					if (url.indexOf("?")) {
						url += "?" + objectToString(params);
					} else {
						url += "&" + objectToString(params);
					}
				}
				//把要读取的参数的传过来。
				_ajax.open(type, _url, true);
				_ajax.send();
			} else if (type === "post") {
				_ajax.open(type, _url, true);
				// 设置请求头 告诉服务器发给他的数据是json格式
				_ajax.setRequestHeader("content-type", "application/json");
				_ajax.send(JSON.stringify(params));
			}

			_ajax.onreadystatechange = function () {
				// 状态4为响应内容解析完成，可以在客户端调用
				if (_ajax.readyState == 4) {
					if (_ajax.status == 200) {
						if (fnSucc) {
							fnSucc(_ajax.responseText); //成功的时候调用这个方法
						}
					} else {
						if (fnfiled) {
							fnField(_ajax.status);
						}
					}
				}
			};
		}
	};

	return baseUtil;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(13);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var DomUtil = __webpack_require__(0);
var progress = __webpack_require__(5);

'use strict';
// 定义多媒体服务公共功能
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	var KmediaBasic = function KmediaBasic(KMedia, kvideo, kconfig) {
		// kvideo:1,
		// play:function(){
		// 	console.log(kvideo);
		// }
		var basic = {
			// 基础事件
			loadstart: function loadstart(callback) {
				kvideo.addEventListener("loadstart", callback);
			},
			durationchange: function durationchange(callback) {
				kvideo.addEventListener("durationchange", callback);
			},
			loadedmetadata: function loadedmetadata(callback) {
				kvideo.addEventListener("loadedmetadata", callback);
			},
			loadeddata: function loadeddata(callback) {
				kvideo.addEventListener("loadeddata", callback);
			},
			progress: function progress(callback) {
				kvideo.addEventListener("progress", callback);
			},
			canplay: function canplay(callback) {
				kvideo.addEventListener("canplay", callback);
			},
			canplaythrough: function canplaythrough(callback) {
				kvideo.addEventListener("canplaythrough", callback);
			},
			// 获取缓冲的时机
			waiting: function waiting(callback) {
				if (callback) {
					callback();
				}
			},
			// 获取准备开始播放的时机
			playing: function playing(callback) {
				if (callback) {
					callback();
				}
			},
			// 播放位置发生改变时触发
			timeUpdate: function timeUpdate(callback) {
				kvideo.addEventListener("timeupdate", callback);
			},
			// 音量改变时触发
			volumeChange: function volumeChange(callback) {
				kvideo.addEventListener("volumechange", callback);
			},
			// abort事件触发
			abort: function abort(callback) {
				kvideo.addEventListener("abort", callback);
			},
			// emptied事件触发
			emptied: function emptied(callback) {
				kvideo.addEventListener("emptied", callback);
			},
			// error事件触发
			error: function error(callback) {
				kvideo.addEventListener("error", callback);
			},
			// 开始播放时触发
			beginPlay: function beginPlay(callback) {
				kvideo.addEventListener("play", callback);
			},
			// 改变播放速度时触发
			rateChange: function rateChange(callback) {
				kvideo.addEventListener("ratechange", callback);
			},
			// seeked事件触发
			seeked: function seeked(callback) {
				kvideo.addEventListener("seeked", callback);
			},
			// seeking事件触发
			seeking: function seeking(callback) {
				kvideo.addEventListener("seeking", callback);
			},
			// stalled事件触发
			stalled: function stalled(callback) {
				kvideo.addEventListener("stalled", callback);
			},
			// suspend事件触发
			suspend: function suspend(callback) {
				kvideo.addEventListener("suspend", callback);
			},
			// 视频结束播放触发事件
			ended: function ended(callback) {
				kvideo.addEventListener("ended", callback);
			},
			// 播放器大小改变时触发
			resize: function resize(callback) {
				window.addEventListener("resize", callback);
			},

			// 基础方法
			//播放
			play: function play() {
				kvideo.play();
				kvideo.states.playing = true;
			},
			//暂停
			pause: function pause() {
				kvideo.pause();
				kvideo.states.playing = false;
			},
			// 停止
			stop: function stop() {
				kvideo.pause();
				kvideo.states.playing = false;
				kvideo.currentTime = 0;
			},
			// 变速播放
			playbackRate: function playbackRate(type, val) {
				// 如果播放速度为负值，则播放速度为最慢
				if (val < 0) {
					kvideo.playbackRate = KConfig.MINSPEED;
					return KConfig.MINSPEED;
				}
				switch (type) {
					case "fast":
						kvideo.playbackRate = parseInt(val);
						if (val > KConfig.MAXSPEED) {
							kvideo.playbackRate = KConfig.MAXSPEED;
						}
						break;
					case "slow":
						kvideo.playbackRate = 1 / parseInt(val);
						if (1 / val < KConfig.MINSPEED) {
							kvideo.playbackRate = KConfig.MINSPEED;
						}
						break;
					default:
						if (!type) {
							return kvideo.playbackRate;
						}
						throw new error("变速播放类型错误");
						break;
				}

				return kvideo.playbackRate;
			},
			// 音量控制
			volume: function volume(val) {
				if (0 <= val && val <= 100) {
					// volume取值为[0,1]，进行转换
					kvideo.volume = val / 100;
				}
				// 用户读数的范围是[1,100]
				return kvideo.volume * 100;
			},
			// 进入全屏  全屏这里element是dom元素
			requestFullscreen: function requestFullscreen(callback) {
				// 全屏播放器的父元素
				var element = kvideo.parentNode;

				if (element.requestFullscreen) {
					element.requestFullscreen();
				} else if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if (element.msRequestFullscreen) {
					element.msRequestFullscreen();
				} else if (element.webkitRequestFullscreen) {
					element.webkitRequestFullScreen();
				}
				kvideo.states.fullscreen = true;

				if (callback) {
					callback();
				}
			},
			// 退出全屏
			exitFullscreen: function exitFullscreen(callback) {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				}
				kvideo.states.fullscreen = false;

				if (callback) {
					callback();
				}
			},
			fullscreenChange: function fullscreenChange(callback) {
				if (!callback) {
					return;
				}
				var executeFunction = function executeFunction() {
					if (!kconfig.realtime) {
						// 改变进度条长度
						var changedW = DomUtil.getDomByClass("progress-part").clientWidth;
						kvideo.info.kprogress.changeWidth(changedW);
					}
					// 改变外层重新设定container高度
					DomUtil.getDomById(kvideo.info.videoId + "_container").style.height = kvideo.clientHeight + "px";

					callback();
				};

				document.addEventListener('fullscreenchange', function () {
					executeFunction();
				});

				document.addEventListener('webkitfullscreenchange', function () {
					executeFunction();
				});

				document.addEventListener('mozfullscreenchange', function () {
					executeFunction();
				});

				document.addEventListener('MSFullscreenChange', function () {
					executeFunction();
				});
			},
			// 获取或者设定currentTime
			currentTime: function currentTime(val) {
				if (0 < val && val < kvideo.duration) {
					return kvideo.currentTime = val;
				}
				return kvideo.currentTime;
			},
			// 返回缓冲数据
			buffered: function buffered() {
				return kvideo.buffered;
			},
			// 设置循环
			loop: function loop() {
				if (!kvideo.states.loop) {
					kvideo.setAttribute("loop", "loop");
				} else {
					kvideo.removeAttribute("loop");
				}
				kvideo.states.loop = !kvideo.states.loop;
				return kvideo.states.loop;
			},
			// 判断是否播放结束
			isEnd: function isEnd(callback) {
				return kvideo.ended;
			},
			// 静音
			mute: function mute() {
				kvideo.muted = !kvideo.muted;
			},
			// 获取播放器状态值
			getStates: function getStates() {
				return kvideo.states;
			},
			// 获取图像增强数值
			getImgInfo: function getImgInfo() {
				return kvideo.imgInfo;
			},
			// 获取用户配置
			getConfig: function getConfig() {
				return kconfig;
			},
			// 获取播放器信息
			getInfo: function getInfo() {
				return kvideo.info;
			},
			// 截取画面
			getPic: function getPic(name, type, timeArray) {
				var number = timeArray.length;
				var param = {
					name: name,
					type: type,
					number: number,
					time: timeArray
					// ajax

					// 返回图片路径
				};var array = [];
				while (number > 0) {
					array.push("http://cdn.iciba.com/news/word/big_20171110b.jpg");
					number--;
				}
				return array;
			},

			// 拓展功能
			// 截图
			snapshot: function snapshot(video) {
				var canvas = DomUtil.createDomElement("canvas");
				document.body.appendChild(canvas);
				var ctx = canvas.getContext('2d');
				ctx.drawImage(video, 0, 0, canvas.width = player.width, canvas.height = player.height);
				var img = new Image();
				img.onload = function () {
					img.crossOrigin = "*";
					callback(this);
				};
				img.crossOrigin = "*";

				img.src = canvas.toDataURL("image/jpeg", 1);
				// console.log(img.src);
			},
			// 快速播放
			fastPlay: function fastPlay() {
				// 如果是在慢速播放状态，恢复成正常速度开始调整
				var currentSpeed = this.playbackRate() < 1 ? 1 : this.playbackRate();
				var nextSpeed;
				// 设置快速播放，上限不能超过则变为正常速度
				if (currentSpeed < KConfig.MAXSPEED) {
					nextSpeed = currentSpeed * 2;
				} else {
					nextSpeed = 1;
				}
				this.playbackRate("fast", nextSpeed);
			},
			// 慢速播放
			slowPlay: function slowPlay() {
				// 如果是在慢速播放状态，恢复成正常速度开始调整
				var currentSpeed = this.playbackRate() > 1 ? 1 : this.playbackRate();
				var nextSpeed;
				// 设置慢速播放，下限超过则变为正常速度
				if (currentSpeed > KConfig.MINSPEED) {
					nextSpeed = currentSpeed / 2;
				} else {
					nextSpeed = 1;
				}
				this.playbackRate("slow", 1 / nextSpeed);
			},

			// 初级图像增强
			imgControl: function imgControl(item, value) {
				var brightness, contrast, saturate, hueRotate;
				kvideo.imgInfo[item] = value;

				// 亮度初始值为1，最大值为1
				brightness = kvideo.imgInfo.brightness / 100;
				// 对比度初始值为1，最大值为5
				contrast = kvideo.imgInfo.contrast / 100 * 5;
				// 饱和度初始值为1，最大值为5
				saturate = kvideo.imgInfo.saturate / 100 * 5;
				// 色相的初始值为0deg，最大为360
				hueRotate = kvideo.imgInfo.hueRotate / 100 * 360;

				kvideo.setAttribute('style', '-webkit-filter:brightness(' + brightness + ') contrast(' + contrast + ') saturate(' + saturate + ') hue-rotate(' + hueRotate + 'deg) ');
				kvideo.setAttribute('style', '-ms-filter:brightness(' + brightness + ') contrast(' + contrast + ') saturate(' + saturate + ') hue-rotate(' + hueRotate + 'deg) ');
				kvideo.setAttribute('style', 'filter:brightness(' + brightness + ') contrast(' + contrast + ') saturate(' + saturate + ') hue-rotate(' + hueRotate + 'deg) ');
			},
			// 恢复初始图像设置
			resetImg: function resetImg(video) {
				video.setAttribute('style', '-webkit-filter:brightness(' + player.img.brightnessOrigin + ') contrast(' + player.img.contrastOrigin + ') saturate(' + player.img.saturateOrigin + ') hue-rotate(' + player.img.hueRotateOrigin + 'deg) ');
				video.setAttribute('style', '-ms-filter:brightness(' + player.img.brightnessOrigin + ') contrast(' + player.img.contrastOrigin + ') saturate(' + player.img.saturateOrigin + ') hue-rotate(' + player.img.hueRotateOrigin + 'deg) ');
				video.setAttribute('style', 'filter:brightness(' + player.img.brightnessOrigin + ') contrast(' + player.img.contrastOrigin + ') saturate(' + player.img.saturateOrigin + ') hue-rotate(' + player.img.hueRotateOrigin + 'deg) ');
			},
			// 分屏播放
			screenSplit: function screenSplit() {
				var createVideo = function createVideo(startTime, endTime) {
					var contanier = document.createElement("div");
					contanier.style.width = "46%";
					contanier.className = "splitVideo";
					contanier.style.display = "inline-block";
					contanier.style.marginLeft = "2%";
					contanier.style.marginRight = "2%";

					var newVideo = DomUtil.createDomElement("video");
					newVideo.src = player.config.url;
					// 设置播放开始时间
					newVideo.currentTime = startTime;
					var interval = setInterval(function () {
						if (newVideo.currentTime > parseInt(endTime)) {
							newVideo.pause();
							clearInterval(interval);
						}
					}, 1000);
					newVideo.autoplay = "autoplay";

					contanier.appendChild(newVideo);
					playDom.parentNode.appendChild(contanier);
				};
				// 分屏数量为4
				var splitNumber = 4;
				var timeperiod = player.duration / splitNumber;
				var playDom = player.config.el;

				// 判断是否在分屏状态
				if (player.state.screenSplit) {
					// 分屏状态的话，恢复原视频
					playDom.style.display = "block";
					var videos = DomUtil.getDomsByClass("splitVideo");
					// 遍历删除数组的时候要从最大开始删
					var len = videos.length;
					while (len--) {
						videos[len].remove();
					}
					return;
				}

				// 循环产生多个播放器
				for (var index = 0; index <= splitNumber - 1; index++) {
					var startTime = timeperiod * index;
					var endTime = timeperiod * (index + 1);

					createVideo(startTime, endTime);
				}
				// 隐藏原video区域
				playDom.style.display = "none";
				// 更改state状态
				player.state.screenSplit = true;
			},

			// 倒播
			backplay: function backplay() {
				player.pause();
				var unitvalue = 0.05;
				var nowtime = player.currentTime();
				player.template.interval = setInterval(function () {
					nowtime -= unitvalue;
					if (nowtime < 0) {
						clearInterval(player.template.interval);
						player.template.interval = null;
						// 播放结束暂停
						player.state.playing = false;
					}
					player.currentTime(nowtime);
				}, unitvalue * 1000);
			},
			// 低照度
			dark: function dark(callback) {
				var params = {
					Guid: "",
					Type: "dark",
					value: ""
				};
				baseUtil.post("EnhanceLiveSource", params, function () {
					if (callback) {
						callback();
					}
				});
			},
			// 画面去雾
			defog: function defog() {
				var params = {
					Guid: "",
					Type: "defog",
					value: ""
				};
				baseUtil.post("EnhanceLiveSource", params, function () {
					if (callback) {
						callback();
					}
				});
			},
			// 过度曝光
			exposure: function exposure() {
				var params = {
					Guid: "",
					Type: "bright",
					value: ""
				};
				baseUtil.post("EnhanceLiveSource", params, function () {
					if (callback) {
						callback();
					}
				});
			},
			// 综合调整
			complex: function complex() {
				var params = {
					Guid: "",
					Type: "complex",
					value: ""
				};
				baseUtil.post("EnhanceLiveSource", params, function () {
					if (callback) {
						callback();
					}
				});
			},
			// 恢复原始图像
			resume: function resume() {
				var params = {
					Guid: "",
					Type: "resume",
					value: 0
				};
				baseUtil.post("EnhanceLiveSource", params, function () {
					if (callback) {
						callback();
					}
				});
			},
			// 截图
			snapShot: function snapShot() {
				// 视频名称
				var name = "";
				var type = player.config.type;
				var time = player.currentTime();
				// 会返回图片路径的地址
				var imgs = player.getPic(name, type, [time]);
				console.log(imgs);

				// 需要一个弹出框，展示截图画面
			},
			// 多重截图
			multiShot: function multiShot() {
				// 截图张数
				var number = 5;
				// 截取图片的时间间隔
				var interval = 0.5;
				var currentTime = player.currentTime();
				var timeArray = [];
				var i;
				for (i = 0; i < number; i++) {
					timeArray.push((currentTime + i * interval).toFixed(6));
				}
				// 视频名称
				var name = "";
				// 实时非实时的类型
				var type = player.config.type;
				// 会返回图片路径的地址
				var imgs = player.getPic(name, type, timeArray);
				console.log(imgs);
			},
			// 播放下一帧
			nextFrame: function nextFrame() {
				// 整理时间的格式
				function parsenum(num) {
					var number = parseInt(num);
					if (number < num) {
						number = number + 1;
					}
					player.currentTime(number);
					return number.toFixed(6);
				}
				// 视频名称
				var name = "";
				var type = player.config.type;
				var time = parsenum(player.currentTime());
				var imgs = player.getPic(name, type, [time]);
				// 视频画面变为下一秒
				player.currentTime(time);
				player.pause();
				// 添加图片覆盖视频
				var playerDom = player.config.el;
				var text = "<img style='position:absolute; top:0; left:0; width:100%; height:100%' src='" + imgs[0] + "' />";
				DomUtil.append(playerDom.parentNode, text);

				console.log(imgs);
			},
			// 视频剪辑
			localMovie: function localMovie() {
				// 开始录制的时候保存开始时间
				if (!player.state.moving) {
					player.template.startTime = player.currentTime();
					player.state.moving = true;
					return;
				}

				var param = {
					name: "",
					type: "",
					startTime: player.template.startTime,
					endTime: player.currentTime()
				};

				console.log(player.template.startTime, player.currentTime());
				// ajax

				// 清空暂存
				player.template.startTime = null;
				player.state.moving = false;
			},
			// 数字放大
			digitZoom: function (_digitZoom) {
				function digitZoom() {
					return _digitZoom.apply(this, arguments);
				}

				digitZoom.toString = function () {
					return _digitZoom.toString();
				};

				return digitZoom;
			}(function () {
				var playerDom = player.configured.playerDom;
				var contianerDom = DomUtil.getDomById(player.configured.randomId + "_container");
				digitZoom(playerDom, contianerDom);
			}),
			// 关闭视频
			closeMedia: function closeMedia() {
				var id = kvideo.info.videoId;
				// 获取播放窗口的
				var domId = id + "_container";
				DomUtil.removeDomById(domId);
			},

			// 内部调用的方法，不暴露给用户的
			insideVol: function insideVol() {}
		};

		KMedia.prototype = basic;

		return basic;
	};

	return KmediaBasic;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * 进度条
 */


var baseUtil = __webpack_require__(1);
var domUtil = __webpack_require__(0);
__webpack_require__(15);

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    var KProgress = function KProgress(basicFunc, kvideo, element, color) {
        var that = this;
        this.basicFunc = basicFunc;
        this.kvideo = kvideo;
        var currentWidth = 0;
        // 增加时间进度显示
        var currentHTML = "<p class='show-current'>00:00:00</p>";
        var durationHTML = "<p class='show-duration'>00:00:00</p>";
        // var timeHtml = "<p class='show-time'><span class='show-current'>00:00:00</span> / <span class='show-duration'>00:00:00</span></p>";
        // 增加进度条
        var progressHTML = "<div id='progress_wrapper'><div id='progress_bg'></div><div id='progress_loaded'></div><div id='progress_current'></div> <div id='progress_ball'></div></div>";

        // ！！！需要先create节点才能插入innerHTML,否则会影响按钮的触发（也不知道为什么）
        var progressPart = domUtil.createDomElement("div");
        progressPart.className = "progress-part";
        // element.appendChild(progressPart);
        element.insertBefore(progressPart, element.firstChild);

        var container = domUtil.getDomByClass("progress-part");
        // container.innerHTML += timeHtml;
        container.innerHTML += progressHTML;
        container.innerHTML += durationHTML;
        container.innerHTML += currentHTML;

        // 获取这些元素的dom对象
        this.progress_current = domUtil.getDomById("progress_current");
        this.progress_ball = domUtil.getDomById("progress_ball");
        // 设置进度条颜色
        if (color) {
            this.progress_current.style.backgroundColor = color;
        }

        // 进度球的宽度为1
        this.ballW = 1;
        this.controlBarW = domUtil.getParentWidth(container);
        // 设置进度条区域宽高
        this.widthRate = 1;
        this.progressW = this.controlBarW * this.widthRate;

        var progressWrapper = domUtil.getDomById("progress_wrapper");
        var progressBg = domUtil.getDomById("progress_bg");
        var progressLoaded = domUtil.getDomById("progress_loaded");

        domUtil.setWidth(progressWrapper, this.progressW);
        domUtil.setWidth(progressBg, this.progressW);

        // 显示视频总时长
        domUtil.getDomByClass("show-duration").innerText = baseUtil.timeFormat(kvideo.info.duration);

        // 查找当前进度在哪段缓冲
        var bufferFilter = function bufferFilter(x) {
            var length = basicFunc.buffered().length;
            for (var i = 0; i < length; i++) {
                var start = basicFunc.buffered().start(i);
                var end = basicFunc.buffered().end(i);
                // 火狐浏览器第一段缓冲不是从0秒开始，手动设为0秒
                if (i === 0) {
                    start = 0;
                }
                if (x >= start && x <= end) {
                    return { start: start, end: end, x: x };
                }
            }
            return { start: x, end: x };
        };

        // 显示缓冲进度
        var bufferTimer = function bufferTimer(buffered) {
            if (buffered.length) {
                that.progressW = that.controlBarW * that.widthRate;
                // 因为point的拉动距离只是totalWidth
                var offsetTime = currentWidth / that.progressW * kvideo.info.duration;

                var bufferData = bufferFilter(offsetTime);
                var left = bufferData.start / kvideo.info.duration * that.progressW;
                var currentBuffer = bufferData.end - bufferData.start;
                var width = currentBuffer / kvideo.info.duration * that.progressW;

                domUtil.setWidth(progressLoaded, width);
                domUtil.setLeft(progressLoaded, left);
            }
        };

        // 播放时更新进度条进度
        basicFunc.timeUpdate(function () {
            if (!kvideo.states.progressMouseDown) {
                // 当前进度的宽度
                currentWidth = Math.ceil(basicFunc.currentTime() * that.progressW / kvideo.info.duration);
                that.progress_current.style.width = currentWidth + "px";
                that.progress_ball.style.left = currentWidth - that.ballW + "px";
                // 改变已播放时间,如果不加这句判断，切换视频时会报错
                if (domUtil.getDomByClass("show-current")) {
                    domUtil.getDomByClass("show-current").innerText = baseUtil.timeFormat(basicFunc.currentTime());
                }
            }
            // 播放结束改变状态
            if (basicFunc.currentTime() === kvideo.info.duration) {
                kvideo.states.timeOver = true;
            }
        });

        // 加载时的缓冲
        basicFunc.progress(function () {
            bufferTimer(basicFunc.buffered());
        });

        progressWrapper.addEventListener("mousedown", function (e) {
            kvideo.states.progressMouseDown = true;

            // 拖拽后的进度
            var dragWidth;
            function changeProgressBar(e) {
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

                if (dragWidth < 0) {
                    dragWidth = 0;
                } else if (dragWidth > that.progressW) {
                    dragWidth = that.progressW;
                }
                that.progress_current.style.width = dragWidth + "px";
                that.progress_ball.style.left = dragWidth - that.ballW + "px";
                var changeTime = dragWidth / that.progressW * kvideo.info.duration;
                basicFunc.currentTime(changeTime);
                domUtil.getDomByClass("show-current").innerText = baseUtil.timeFormat(basicFunc.currentTime());
            }
            changeProgressBar(e);

            // 鼠标移动
            var mouseMove = function mouseMove(e) {
                changeProgressBar(e);
            };
            // 鼠标抬起
            var mouseUp = function mouseUp() {
                kvideo.states.progressMouseDown = false;
                kvideo.states.timeOver = dragWidth === that.progressW ? true : false;

                document.removeEventListener("mousemove", mouseMove);
                document.removeEventListener("mouseup", mouseUp);
            };
            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);
        });
    };

    //进度条的方法
    KProgress.prototype = {
        // 播放结束时进行的操作
        endPlay: function endPlay(callback) {
            var basicFunc = this.basicFunc;
            // 循环时不结束
            if (basicFunc.loop) {
                return;
            }
            basicFunc.timeUpdate(function () {
                if (basicFunc.currentTime() === this.kvideo.info.duration) {
                    callback();
                }
            });
        },
        changeWidth: function changeWidth(width) {
            var basicFunc = this.basicFunc;
            this.controlBarW = width;
            this.progressW = this.controlBarW * this.widthRate;
            domUtil.setWidth(domUtil.getDomById("progress_wrapper"), this.progressW);
            domUtil.setWidth(domUtil.getDomById("progress_bg"), this.progressW);

            // 刷新一次进度条的当前进度显示
            var currentWidth = Math.ceil(basicFunc.currentTime() * this.progressW / this.kvideo.info.duration);
            this.progress_current.style.width = currentWidth + "px";
            this.progress_ball.style.left = currentWidth - this.ballW + "px";
        },
        destroy: function destroy() {}
    };
    return KProgress;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var DomUtil = __webpack_require__(0);
var osrange = __webpack_require__(17);

'use strict';
// 定义多媒体服务功能

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	// 如果按钮多个状态切换图标
	var changeIcon = function changeIcon(dom) {
		var className = dom.className;
		var class1 = dom.getAttribute("data-class1");
		var class2 = dom.getAttribute("data-class2");
		if (class1 && class2) {
			if (className === class1) {
				dom.className = class2;
			} else {
				dom.className = class1;
			}
		}
	};

	var KmediaFunc = {
		play: function play(basicFunc, states, dom) {
			DomUtil.on(dom, "click", function () {
				changeIcon(dom);
				if (states.playing) {
					basicFunc.pause();
				} else {
					basicFunc.play();
				}
			});
		},
		stop: function stop(basicFunc, states, dom) {
			DomUtil.on(dom, "click", function () {
				basicFunc.stop();
			});
		},
		fullscreen: function fullscreen(basicFunc, states, dom) {
			// 全屏切换时改变图标
			basicFunc.fullscreenChange(function () {
				changeIcon(dom);
			});
			DomUtil.on(dom, "click", function () {
				if (!states.fullscreen) {
					basicFunc.requestFullscreen();
				} else {
					basicFunc.exitFullscreen();
				}
			});
		},
		// 双击全屏切换
		dblclickFullscreen: function dblclickFullscreen(basicFunc, kvideo) {
			DomUtil.on(kvideo, "dblclick", function () {
				if (!kvideo.states.fullscreen) {
					basicFunc.requestFullscreen();
				} else {
					basicFunc.exitFullscreen();
				}
			});
		},
		volume: function volume(basicFunc, states, dom) {
			// 插入音量滑动条
			var volContainer = DomUtil.createDomElement("div");
			var volSpan = DomUtil.getDomBySelector("[data-handler='volume']");
			volContainer.className = "range-vol";
			volContainer.style.height = ".15rem";
			volContainer.style.width = "3rem";
			volContainer.style.display = "inline-block";
			volContainer.style.backgroundColor = "white";
			DomUtil.insertAfter(volContainer, volSpan.firstChild);

			// 初始音量设为50
			basicFunc.volume(50);

			var range = new osrange({
				el: volContainer,
				range: [0, 100],
				value: 50,
				callback: function callback(val) {
					basicFunc.volume(val);
				}
			});
		},
		loop: function loop(basicFunc, states, dom) {
			DomUtil.on(dom, "click", function () {
				basicFunc.loop();
			});
		},
		// 快速播放
		fastPlay: function fastPlay(basicFunc, states, dom) {
			// 绑定按钮时，生成提示dom
			var buttonDom = DomUtil.getDomBySelector("[data-handler='fastPlay']");
			DomUtil.appendAfter(buttonDom, "<span class='fastTip'></span>");
			DomUtil.on(dom, "click", function () {
				if (DomUtil.getDomByClass("slowTip")) {
					DomUtil.getDomByClass("slowTip").style.display = "none";
				}
				basicFunc.fastPlay();
				var nowSpeed = basicFunc.playbackRate();
				// 倍速提示
				var fastTip = DomUtil.getDomByClass("fastTip");
				fastTip.textContent = "快速" + nowSpeed + "倍";
				fastTip.style.display = "block";
				if (nowSpeed === 1) {
					fastTip.style.display = "none";
				}
			});
		},
		// 慢速播放
		slowPlay: function slowPlay(basicFunc, states, dom) {
			// 绑定按钮时，生成提示dom
			var buttonDom = DomUtil.getDomBySelector("[data-handler='slowPlay']");
			DomUtil.appendAfter(buttonDom, "<span class='slowTip'></span>");
			DomUtil.on(dom, "click", function () {
				if (DomUtil.getDomByClass("fastTip")) {
					DomUtil.getDomByClass("fastTip").style.display = "none";
				}
				basicFunc.slowPlay();
				var nowSpeed = basicFunc.playbackRate();
				// 倍速提示
				var slowTip = DomUtil.getDomByClass("slowTip");
				slowTip.textContent = "慢速" + 1 / nowSpeed + "倍";
				slowTip.style.display = "block";
				if (nowSpeed === 1) {
					slowTip.style.display = "none";
				}
			});
		},
		// 初级图像增强
		imgControl: function imgControl(basicFunc, states, dom) {
			var videoInfo = basicFunc.getInfo();

			// 增加图像增强面板
			var container = DomUtil.getDomById(videoInfo.videoId + "_container");
			DomUtil.append(container, "<div class='imgControlPanel' style='display:none'><p class='selected'>普通增强</p><p class='unselect'>加强版增强</p><div class='imgControlDetail'></div></div>");
			var panel = DomUtil.getDomBySelector(".imgControlPanel");
			var detailPanel = DomUtil.getDomBySelector(".imgControlPanel .imgControlDetail");
			DomUtil.append(detailPanel, "<div><p class='text'>亮度调整</p><div class='range-img' data-type='brightness'></div></div>");
			DomUtil.append(detailPanel, "<div><p class='text'>色调调整</p><div class='range-img' data-type='hueRotate'></div></div>");
			DomUtil.append(detailPanel, "<div><p class='text'>对比度调整</p><div class='range-img' data-type='contrast'></div></div>");
			DomUtil.append(detailPanel, "<div><p class='text'>饱和度调整</p><div class='range-img' data-type='saturate'></div></div>");

			// 插入滑动条
			var birghtness = DomUtil.getDomBySelector("[data-type='brightness']");
			var birghtnessRange = new osrange({
				el: birghtness,
				range: [0, 100],
				value: KConfig.BRIGHTNESS,
				callback: function callback(val) {
					basicFunc.imgControl("brightness", val);
				}
			});
			var hueRotate = DomUtil.getDomBySelector("[data-type='hueRotate']");
			var hueRotateRange = new osrange({
				el: hueRotate,
				range: [0, 100],
				value: KConfig.HUEROTATE,
				callback: function callback(val) {
					basicFunc.imgControl("hueRotate", val);
				}
			});
			var contrast = DomUtil.getDomBySelector("[data-type='contrast']");
			var contrastRange = new osrange({
				el: contrast,
				range: [0, 100],
				value: KConfig.CONTRAST,
				callback: function callback(val) {
					basicFunc.imgControl("contrast", val);
				}
			});
			var saturate = DomUtil.getDomBySelector("[data-type='saturate']");
			var saturateRange = new osrange({
				el: saturate,
				range: [0, 100],
				value: KConfig.SATURATE,
				callback: function callback(val) {
					basicFunc.imgControl("saturate", val);
				}
			});

			DomUtil.on(dom, "click", function () {
				// 根据工具栏的高度，设置panel bottom的值
				panel.style.bottom = DomUtil.getDomByClass("control-bar").clientHeight + "px";
				if (panel.style.display == "none") {
					panel.style.display = "block";
				} else {
					panel.style.display = "none";
				}
			});
		}
		// // 恢复初始图像设置
		// resetImg:function (video) {
		// 	video.setAttribute('style','-webkit-filter:brightness(' + player.img.brightnessOrigin + ') contrast(' + player.img.contrastOrigin + ') saturate(' + player.img.saturateOrigin + ') hue-rotate(' + player.img.hueRotateOrigin + 'deg) ');
		// 	video.setAttribute('style','-ms-filter:brightness(' + player.img.brightnessOrigin + ') contrast(' + player.img.contrastOrigin + ') saturate(' + player.img.saturateOrigin + ') hue-rotate(' + player.img.hueRotateOrigin + 'deg) ');
		// 	video.setAttribute('style','filter:brightness(' + player.img.brightnessOrigin + ') contrast(' + player.img.contrastOrigin + ') saturate(' + player.img.saturateOrigin + ') hue-rotate(' + player.img.hueRotateOrigin + 'deg) ');		
		// },
		// 截图
		// snapshot:function (video) {
		// 	var canvas = DomUtil.createDomElement("canvas");
		// 	document.body.appendChild(canvas);
		// 	var ctx = canvas.getContext('2d');
		// 	ctx.drawImage(video, 0, 0, canvas.width = player.width, canvas.height = player.height);
		// 	var img = new Image();
		// 	img.onload = function () {
		// 		img.crossOrigin = "*"
		// 	    callback(this);
		// 	};
		// 	img.crossOrigin = "*"

		// 	img.src = canvas.toDataURL("image/jpeg", 1);
		// 	// console.log(img.src);
		// },
		// // 分屏播放
		// screenSplit:function () {
		// 	var createVideo = function(startTime, endTime){
		// 	    var contanier = document.createElement("div");
		// 	    contanier.style.width ="46%";
		// 	    contanier.className ="splitVideo";
		// 	    contanier.style.display ="inline-block";
		// 	    contanier.style.marginLeft ="2%";
		// 	    contanier.style.marginRight ="2%";

		// 	    var newVideo = DomUtil.createDomElement("video");
		// 		newVideo.src = player.config.url;
		// 	    // 设置播放开始时间
		// 	    newVideo.currentTime = startTime;
		// 	    var interval = setInterval(function () {
		// 	        if(newVideo.currentTime > parseInt(endTime)){
		// 	            newVideo.pause();
		// 	            clearInterval(interval);
		// 	        }
		// 	    },1000);
		// 	    newVideo.autoplay="autoplay";

		// 	    contanier.appendChild(newVideo);
		// 	    playDom.parentNode.appendChild(contanier);
		// 	}
		// 	// 分屏数量为4
		// 	var splitNumber = 4;
		// 	var timeperiod = player.duration / splitNumber;
		// 	var playDom = player.config.el;

		// 	// 判断是否在分屏状态
		// 	if (player.state.screenSplit) {
		// 		// 分屏状态的话，恢复原视频
		// 		playDom.style.display = "block";
		// 		var videos = DomUtil.getDomsByClass("splitVideo");
		// 		// 遍历删除数组的时候要从最大开始删
		// 		var len = videos.length;
		// 		while(len--){
		// 			videos[len].remove();
		// 		}
		// 		return;
		// 	}

		// 	// 循环产生多个播放器
		//        for(var index = 0; index <= splitNumber - 1; index++){
		//            var startTime = timeperiod * index;
		//            var endTime = timeperiod * (index + 1);

		// 		createVideo(startTime, endTime);   
		//        }
		//        // 隐藏原video区域
		//        playDom.style.display = "none";
		//        // 更改state状态
		//        player.state.screenSplit = true;
		// },

		// // 倒播
		// backplay:function () {
		// 	player.pause();
		// 	var unitvalue = 0.05;
		// 	var nowtime = player.currentTime();
		// 	player.template.interval = setInterval(function(){
		// 		nowtime -= unitvalue;
		// 		if(nowtime < 0){
		// 			clearInterval(player.template.interval);
		// 			player.template.interval = null;
		// 			// 播放结束暂停
		// 			player.state.playing = false;
		// 		}
		// 		player.currentTime(nowtime);
		// 	}, unitvalue * 1000);
		// },
		// // 低照度
		// dark:function (callback) {
		// 	var params = {
		// 		Guid:"",
		// 		Type:"dark",
		// 		value:""
		// 	}
		// 	baseUtil.post("EnhanceLiveSource", params, function(){
		// 		if(callback){
		// 			callback();
		// 		}
		// 	});
		// },
		// // 画面去雾
		// defog:function () {
		// 	var params = {
		// 		Guid:"",
		// 		Type:"defog",
		// 		value:""
		// 	}
		// 	baseUtil.post("EnhanceLiveSource", params, function(){
		// 		if(callback){
		// 			callback();
		// 		}
		// 	});
		// },
		// // 过度曝光
		// exposure:function () {
		// 	var params = {
		// 		Guid:"",
		// 		Type:"bright",
		// 		value:""
		// 	}
		// 	baseUtil.post("EnhanceLiveSource", params, function(){
		// 		if(callback){
		// 			callback();
		// 		}
		// 	});
		// },
		// // 综合调整
		// complex:function () {
		// 	var params = {
		// 		Guid:"",
		// 		Type:"complex",
		// 		value:""
		// 	}
		// 	baseUtil.post("EnhanceLiveSource", params, function(){
		// 		if(callback){
		// 			callback();
		// 		}
		// 	});
		// },
		// // 恢复原始图像
		// resume:function () {
		// 	var params = {
		// 		Guid:"",
		// 		Type:"resume",
		// 		value:0
		// 	}
		// 	baseUtil.post("EnhanceLiveSource", params, function(){
		// 		if(callback){
		// 			callback();
		// 		}
		// 	});
		// },
		// // 截图
		// snapShot: function () {
		// 	// 视频名称
		// 	var name = "";
		// 	var type = player.config.type;
		// 	var time = player.currentTime();
		// 	// 会返回图片路径的地址
		// 	var imgs = player.getPic(name, type, [time]);
		// 	console.log(imgs);

		// 	// 需要一个弹出框，展示截图画面

		// },
		// // 多重截图
		// multiShot:function () {
		// 	// 截图张数
		// 	var number = 5;
		// 	// 截取图片的时间间隔
		// 	var interval = 0.5;
		// 	var currentTime = player.currentTime();
		// 	var timeArray = [];
		// 	var i;	
		// 	for(i = 0; i < number; i++){
		// 		timeArray.push((currentTime + i * interval).toFixed(6));
		// 	}
		// 	// 视频名称
		// 	var name = "";
		// 	// 实时非实时的类型
		// 	var type = player.config.type;
		// 	// 会返回图片路径的地址
		// 	var imgs = player.getPic(name, type, timeArray);
		// 	console.log(imgs);

		// },
		// // 播放下一帧
		// nextFrame:function () {
		// 	// 整理时间的格式
		// 	function parsenum(num){
		// 		var number = parseInt(num);
		// 		if(number < num){
		// 			number = number + 1;
		// 		}
		// 		player.currentTime(number);
		// 		return number.toFixed(6);
		// 	}
		// 	// 视频名称
		// 	var name = "";
		// 	var type = player.config.type;
		// 	var time = parsenum(player.currentTime());
		// 	var imgs = player.getPic(name, type, [time]);
		// 	// 视频画面变为下一秒
		// 	player.currentTime(time);
		// 	player.pause();
		// 	// 添加图片覆盖视频
		// 	var playerDom = player.config.el;
		// 	var text = "<img style='position:absolute; top:0; left:0; width:100%; height:100%' src='" + imgs[0] + "' />";
		// 	DomUtil.append(playerDom.parentNode, text);

		// 	console.log(imgs);
		// },
		// // 视频剪辑
		// localMovie:function () {
		// 	// 开始录制的时候保存开始时间
		// 	if (!player.state.moving) {
		// 		player.template.startTime = player.currentTime();
		// 		player.state.moving = true;
		// 		return;
		// 	}

		// 	var param = {
		// 		name: "",
		// 		type: "",
		// 		startTime: player.template.startTime,
		// 		endTime: player.currentTime()
		// 	}

		// 	console.log(player.template.startTime, player.currentTime());
		// 	// ajax

		// 	// 清空暂存
		// 	player.template.startTime = null;
		// 	player.state.moving = false;
		// },
		// // 数字放大
		// digitZoom:function () {
		// 	var playerDom = player.configured.playerDom;
		// 	var contianerDom = DomUtil.getDomById(player.configured.randomId + "_container");
		// 	digitZoom(playerDom, contianerDom);
		// }
	};

	return KmediaFunc;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,VB0AALAcAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAE4VrIQAAAAAAAAAAAAAAAAAAAAAAAA4AaQBjAG8AbQBvAG8AbgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBpAGMAbwBtAG8AbwBuAAAAAAAAAQAAAAsAgAADADBPUy8yDxIGNgAAALwAAABgY21hcBdW0qQAAAEcAAAAVGdhc3AAAAAQAAABcAAAAAhnbHlmxlFITQAAAXgAABhEaGVhZA+gSoUAABm8AAAANmhoZWEHwQPjAAAZ9AAAACRobXR4fgEF6QAAGhgAAACIbG9jYXLKa+IAABqgAAAARm1heHAAMQEcAAAa6AAAACBuYW1lmUoJ+wAAGwgAAAGGcG9zdAADAAAAAByQAAAAIAADA+8BkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOkdA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABAA4AAAACgAIAAIAAgABACDpHf/9//8AAAAAACDpAP/9//8AAf/jFwQAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAA4AAP/LA/8DrwADAAcACwAQABgAIAAlACsAMAA1ADoAPgBFAEoAAAERIRElIREhJREhESUhESERJxcnBycHFwcBJxc3FzcnNwE3NQczEyMBFQEnIwcVNyMjBxU3IzMBFQEjAzc1AQE1IwEXMwEJATUBMwHx/k4B8f3QAjABf/5OAfH90AIwqbobNNw33DT9hbkPN808zTcChneoMU0h/m8Bugjlzf4xXHGiMb3+0gFfMSjW/vkBBwH+OhINAaj+xgE6/pUxA3H+VgGqPv3ZL/5VAas+/doCJoQHtTnBPcE4/o8UtzbQOc81/tp1MKUB6/52MAGzB8kx+m4xn/7XMAFZ/hXRMf7+AaAw/kERAaD+YAE0MP6cAAACAAL/4wP9A5YAIQBCAAAFISImPQE0NjsBMhYdARQWMyEyNj0BNDY7ATIWHQEOASMxATYyHwERNDY7ATIWFRE3NjIfARYUBwEOASMiJicBJjQ3A2v9KDxVFQ9JDxUrHgJGHisVD0kPFgFVPP1sCyALqRYPSQ8VqgsfCzYLC/7TAR4SER8B/tQLCx1VPbYPFRUPbh4rKx5uDxUVD7Y9VQLKCwuqAW8PFRUP/pGqCws1CyAL/tQBDw8BASwLIAsAAAABAAD/wAQAA8AAIAAAASERNCYjIgYVESEOARUUFjMhERQWMzI2NREhMjY1NCYjA9f+VRoRERn+VBIZGRIBqhoRERkBrBEZGBEB6gGrEhkZEv5WARkREhn+VRIYGREBqxkREhkAAgAK/+wD+AOFAEoAiwAAASc0JjUnIiYjIiYrASIGByIGDwEOARceATMyNj8BBgcOAQcGIyInLgEnJicuAQcOARcWFx4BFxYzMjc+ATc2NxceATMyNjc+AScxJRceATMyNjcwNjUyNjE3NjQnJiIPATY3PgE3NjMyFx4BFxYXHgE3PgEnJicuAScmJyMiBw4BBwYHJy4BBw4BHwED+FUEBQMCAwQCAxIEAgMDAwOOEQcKBxQNBwwDMQodHFc4OD8vLCxOICAVCyINEQsKGigoYjg3O05GRm8kJQwfBxQNBwkGDgoK/IENAwwDAwgHBAQFeA4ODSQNNQYeHVo5OkAuLC1NHh8UByMQEQwGGycoYDg4PAVQR0dvJSULFw0kDQ0CC28BR48DAgMFBAQBAwEDWQokEQoMAQMfPDMzSxUWDQ0wISIqEAwKBCERNSsrPBAQGxteQEFLNgoMAQMOJRBDDQQBAQQBAwR0DiMNDg4wPzc2UBcXDQ0wIyMrEQwHBiMRNSsrPRERARwcY0JDTSgOAQoOIw19AAAAAwAAAA8EAANtAEgAYwCOAAABJgYPASMiBh0BFBY7ARceATMyNjc+AT0BNCYjIgYdARQGBwYmLwEuASsBIiY9ATQ2OwEyNj8BPgEXHgEdARQWMzI2PQE0JicxATQmJyIGBwYWFx4BFRQGBw4BFx4BOwE+ATUxAyYGBwYWFxYXHgEXFhUUBw4BBwYHDgEVHgE7ATY3PgE3NjU0Jy4BJyYnMQH1IEUaqWMwOjowY6kQMBUKFgogIBQQEBMLCgscC7cFDQpqFQ4OFXEFEgW4BRsKCwoUEBATICABRVBECxsFBREQKzg4KxAKBQUUCw46TE4QFQUFERAwKCg6EBEREDooKDAQDAUUCgc9MzJJFBUVFEkyMz0DbQoMG7A6MOkwOrAQFAIFCzolYxATExBjEBUFBgkLuAUJDhXpFQ8IBrcLCQYFFRBqEBMTEGolOgv+WEVzFQwQCxsFEEYwL0cQBRsKCwsQcUUBaAUREBAVBQ4cHE0uLzIyLy5NHBwNBRYQChITIiNeOTo/QDk5XiMjEgAAAAMAAACBBAADPQAbADcARAAAASIHDgEHBgcWFx4BFxYzMjc+ATc2NyYnLgEnJgMiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYDIgYVFBYzMjY1NCYjAgBXUFCFMzQdHTQzhVBQV1dQUIUzNB0dMzOGUFBXMSoqPxISEhI/KioxMSoqPxISEhI/KioxO1FQPDtRUTsDPRoaXEFATU1AQF0aGhoaXUBATU1AQVwaGv26EhI/KioxMSoqPxISEhI/KioxMSoqPxISAXRPPTtRUDw9TwAAAgC4/8EDNAPAAA4AHQAAAREUFjMyNjURNCYjIgYVARE0JiMiBhURFBYzMjY1AqIrHh4rKx4eK/6oKx4eKyseHisDd/yTHisrHgNtHisrHvyTA20eKyse/JMeKyseAAAACAB6//ADoAO/ACAAQABUAKYA3wDzAQoBGQAABSYnLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBgcGIicxEyIHDgEHBhUUFx4BFxYfATc2Nz4BNzY1NCcuAScmIzEDJjY3PgE3NhYXFgYHDgEHBiYnMRMzPgE3PgE3PgEXHgEHDgEHDgEHBhYzMjY3PgE3MhYXFgYHDgEHDgEjBiYnJjY3PgE3PgE3IyImNyY2Nz4BNz4BNz4BFx4BBw4BBw4BFxQyMzE3Mx4BBw4BBx4BFx4BBw4BJy4BJw4BBwYmJyY2Nz4BNy4BJw4BBw4BBw4BJy4BNz4BNz4BFx4BFTETLgEnLgE3PgEXHgEXHgEHDgEnMScuAScuATUuATc+ARceARceAQcOAScxNyMOAQceARc+ATc2JiMxAdMWODl3LS4fIG5JSVRTSUptICAuLnc4ORUsHSs6RTw8WhoaIiJjOTguBAUuODljIiIaGlo8PETKAggLHzgYCA4GBwULFjghDxIDUQoCBgYEBwIJEwwHAgYDCwYXHgcEBQcDCAYEBgIKDAICCQoLFQsKEwgQEgIEAwYDDwsGCgMhDg4BAQYHAw0LCw8EBhMMCgUFBRYRAwMBBga3WRENBwkdFA4gEw4JBAYWEBUmEhswFQ8TBAQJDhcoEQkQBwIDAgIGAgkRCAsCBxMdCwMPCwkKYSdQKg4KBAEPDzpNFAwLAQEODDcMHhICBAwIAgINCxQlEgwJBAQRDQRAAQMBDxUFCxEGAQMEEBdAQKVaW0tTSkltICAgIG1JSlNLWlqlQEAYLy8DhhoaWjw8REFHR4tAPzIEBTE/QItHR0FEPDxaGhr+GAsNBAcVDQIEBw0SBQkVCwMIDAECAwgHBQgECgMHCBEJBA0IHigLBwcBAQECAQcJDA4DAwYBAQECBwkGEgwHFw4JDQUJCQcUDAMVEREVBQoGBAYPCAwiFwMFAgJWAhQTITQUDBQJBxMLDAMJChkPFB0HBgYLDBEGCBcPCBQLAQYDAwcECQQFBhIMFzQdCwoCAwsI/ogIEAcCEAwMCQIKDwQCDwwMCwFeBQoFAQIBAQ4MCQkBBA0JBg8JDAYG7AMGAxcbAw0aDgYGAAABACn/wQPfA8AANQAAATUNATUWFx4BFxYVFAcOAQcGIyInLgEnJjU0JiMiBhUUFx4BFxYzMjc+ATc2NSYnLgEnJicxAk3+2wEkNy8vRBQTGhpZPDxERDs8WRoaKx4fKiUmgVZWY2JWV4ElJgEeH2xKSVUDcU+3tokNHR5UNTQ7RDw8WRoaGhpZPDxEHisrHmJXVoElJiYlgVZXYllPUHwqKQ4AAAYAAP/CA/sDvQAcADkAQQBJAFEAWAAAASIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJiMRIicuAScmNTQ3PgE3NjMyFx4BFxYVFAcOAQcGIxMnBxcHFycHJQcnBzcnNyc/ARc3BxcHFy8BFzcXNycB/WldXYooKCgoil1daWpdXIsoKCgoi1xdalpPUHYjIiIjdlBPWltPUHYiIyMidlBPW+hnNGcztBoz/q5nNBm0NGcz62czGrQzZjPrtBk0ZzNnA70oKIpdXWlqXF2LKCgoKItdXGppXV2KKCj8TiMid09QWlpQT3ciIiIid1BPWltPT3ciIwEKZjNnNBm0M2ZmM7QZNGczhWc0tBozZzPNGrQ0ZzNnAAAD/////gP/A3gAGgA1AFMAADclNhYfARYGDwEhMhYdARQGIyEiJj0BJjY3MRElNhYfARYGDwEhMhYdARQGIyEiJj0BNDY3MQM0NjclNhYfARYGDwEhMhYdARQGIyEiJj0BIjA1MQkBIwYPBBMEBAezA1AHCgoH/CMHCgEFBQEjBg8EEwQEB7MDRQcKCgf8LQcKBQUKBQUBIwYPBBMEBAezA1AHCgoH/CMHCgFDqgQFBiEHDwRoCgcjBwoKByMFCgIBRqoDBAYhBw8EaAoHIwcKCgcjBQkDATUFCQKqBAUGIQcPBGgKByMHCgoHIwEAAAADAAD/1APrA8AAOABSAHQAACUnPgE3PgE1NCYnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3FxYyNz4BJyUiJicuATU0Njc+ATMyFhceARUUBgcOASMxEyM1NCYjIgYdASMiBhUUFjsBFRQWMzI2PQEzMjY1NCYjMQPr6xAcCxEREREQLh4dRSYoUywrVCcnRB4dLhEQEREQES4dHkQnJ1QrLFQnGi8V6xAuEBABEP3BQHQuLTAwLS50QEB1LS0xMS0tdUC+mBYQDxaYEBYWEJgWDxAWmA8WFg8h7BYwGShUKyxTKCZFHR4uEBEREREQLh4dRSYoUywrVCgmRB4dLhEQEREQCxwR7BAQEC0QszAtLnRAQHUtLTExLS11QEB0Li0wAWWYDxYWD5gWEA8WmBAWFhCYFg8QFgAAAgAB/8EEAAPAAAQACAAAExEhESEBIREhAQP//AEDwPx/A4EDwPwBA//8QAOBAAAAAQEs/8ADAQPAAAgAAAEVATUBNQE1AQMB/isBpP5cAdUB40b+I1kBowYBpVn+IwAAAwAA/8ED/gPAAD4AcACMAAABMhYXHgEXHgEXHgEVFAYHDgEHAR4BFRQGBw4BIyImJwEOAQcOASMiJicuAScuAScuATU0Njc+ATc+ATc+ATMVIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3PgE3PgE1NCYnLgEnLgEnLgEjMQMhMhYXHgEVFAYHDgEjISImJy4BNTQ2Nz4BMzEBoitRJydCHBwtERARDAwMIhYBCAcGBgcGEQoKEAf++Bs9ISJGJCpSJidDHBwsEREQEBERLBwcQycmUiohPx4eNBYWIg0NDQ0MDSMWFjQeHj8hIT8fHjQVFiMNDQ0NDQ0jFhU0Hh8/IYsBFwkQBwcHBwcHEAn+6QoQBwcHBwcHEAoDwBEQES0cHEInJ1ErJEYhIjwc/vkHEAoKEQcGBwcHAQgWIgwMDBEQES0cHEInJ1ErKlEnJ0McHCwREBFdDQ0NIhYWNB4eQCEhPx4eNBYWIg0NDQ0NDSMVFjQeHj8hIUAeHjQWFiINDQ3+6QcHBhEJChAHBwcHBwcQCgkRBgcHAAAJAAAASwP+A0oADAAdAC4APwBQAFQAZAB0AIUAAAE3NjQvASYGHQEUFjcBISIGFREUFjMhMjY1ETQmIwEUBisBIiY9ATQ2OwEyFh0BERQGKwEiJj0BNDY7ATIWHQERFAYrASImPQE0NjsBMhYdAQEhESETFAYrASImPQE0NjsBMhYVNRQGKwEiJj0BNDY7ATIWFTUUBisBIiY9ATQ2OwEyFh0BAY7/EhL/EB8fEAIR/MAnODgnA0AnODgn/SETDj8NExIOQA0TEw4/DRMSDkANExMOPw0TEg5ADRMCP/4BAf+/Eg4/DhMTDj8NExIOPw4TEw4/DRMSDj8OExMOPw0TAS6ACScJgAgTEv8SEwgCHDkn/cIoOTkoAj4oOP1hDRMSDkANExIOQAEADRMSDj8OExMOPwEADhMTDj8NExIOP/3gAn/9oQ0TEg5ADRMSDsANExIOPw4TEw7BDhMTDj8NExIOPwAAAAACAAEADQQAA24AFgAoAAATATYyFx4BFQMUBgcGJicBLgE1NDY3MQEjIiY3EzQ2OwEyFhUDFAYjMTYB/Bk6GhkdAR0aGToZ/gUZHB0YA4EHHioBASoeBh4qASsdAh4BLA8PDjIe/aYdMg8OAQ8BLg4yHRwyD/3vKh4C0R4qKh79Lx4qAAACAAT/xQP+A8AAHABCAAAlIwE2JicuAQcBNTQmIyIGFREUFjMhPgE1NCYnMQEhJgYHBhQXHgE7AQEOARceATMyNjcBFRQWMzI2NRE0JicuASMxAaPwAQgOAQ8OKA/+9B0VFR0dFQFtFBwcFAIp/pMOGAcHBwcYDvD++AoGBQYZEAoSBwEMHRUVHQcHBxMKKQEIDygODgIO/vTuFR0dFf6dFB4BHRQUHQEDlwENDAwcDAwM/vgLHg4OEAcHAQzuFR0dFQFjChIHBwgAAAACAAH/wAP/A74AIwBHAAAlFAYjIiYvAQcOASMiJi8BLgE1NDY/AScuATU0NjMhMhYVETEBBxceARUUBiMhIiY1ETQ2MzIWHwE3PgEzMhYfAR4BFRQGBzECABkSCQ8GYuEDCAQECQNNAwQEA+FiBgcaEQEwERoB+OBhBgcaEf7QERoaEQkQBmHhAwkEBAgDTQMEBANkERoHBmLhAwQEA00DCAQFCAPhYQYQCBIaGhL+0QLn4WIGDwkSGRoRAS8SGgcGYuEDBAQDTQMJBAQIAwAAAQAA/8AEAAPAAA8AACUUBiMhIiY1ETQ2MyEyFhUEAE02/QY2TU02Avo2TUI2TEw2Avw2TEw2AAABAQgByQL4Ae0AAwAAASEVIQEIAfD+EAHtJAAAAQDlAL8DBgKzAAsAAAEhNSMVIxUzFTM1IQMG/vsi+voiAQUByerqIenpAAADAAD/wgPcA54ABAAJABUAADcRIQkBASM1ARc3JyYiDwEBNzY0JzEAATkCVv7H/refAeia7JkhWCEsATkmISH7/scCVgE5/N+ZAema7JohISb+xyYhXSEAAQBl/88DjAOwAAwAAAkBFhQHAQYmNRE+ARcBCwKBNzf9fzdvAW43A7D+bR99H/5tID8+AyY+Px8AAAAABAAAADEEAANpABwAJQAvADsAAAEhIgYdASIGFTMxIxEwFjMhPgExNTMyNjURNCYjAyMnBycDESERFyMRNCYxITUhEQE+ATE0JjEOATEGFgPn/GEKDwYpLy8OIwNTJA4xCg8PCmNdvY7CtAMeShgy/OIDaP75TxFgRhcBXgNpDwonDyH9aDABLx4OCwK4Cg/9VMCP7/7yAir9xAECPSEPBP2PASEBXUcXB1dIFgAAAAAEAAz/wAP0A78AEQAiADMARAAAASEiBh0BFBYzITI2PQE0JiMxExQGIyEiJj0BNDYzITIWHQEDISIGHQEUFjMhMjY9ATQmIxMUBiMhIiY9ATQ2MyEyFh0BA2z9KDhQUDgC2DhQUDgtGhP9KBIbGxIC2BIbLf0oOFBQOALYOFBQOC0aE/0oEhsbEgLYEhsBnVA4zThQUDjNOFD+qxIbGxLNExsbE80Dd1A5zDhRUDnMOVD+qxMbGxPMExsbE8wAAAABAHgAzANvApUALwAANzI2PQEFFjI3PgE9AQUWMjc+ATUTNCYnJiIHBTU0JicmIgcFNzQmIyIGFREGFjMxkgsPAToHEQgHCQEoCBEHCAgBCAgIEAj+1wgICBAI/sYBEAsLDwEQC8wPC66uBQUEDgiKpQQEBA4IAWAJDgQEBKSKCA4EBAStrgsPDwv+agoPAAACAAAAFwQAA3oAFgAoAAAJAQ4BJy4BNRE0Njc2FhcBHgEVFAYHMQEzMhYVERQGKwEiJjURNDYzMQPL/gQZOxkZHh4ZGTsZAfwYHR0Y/H0HHioqHgceKioeAWr+0w8BDw4zHQJbHTMODwEP/tMPMh0cMg8CECoe/S0eKioeAtMeKgAAAAAEAAMAQAP8A24ADAAUACMAKgAAATAWFTAGBzAmNzA2NzcwFhURMAYHJTAWMyE1IycHCwEHAyMRASEwBhUhNQL8ZhJUZQEYTMo2ECb8PQ4mA49kypjQzC0CMgPD/HE0A8MC1BlMYwEXTV0ImhAk/TozATQ0l82aAQD+zwECYv06AvoMKDQAAAAAAQB3ANQDZQKZAC8AAAEiBh0BJSYiBw4BHQElJiIHDgEVERQWFxYyNyUVFBYXFjI3JRUUFjMyNjURNCYjMQNLCg/+yQcRBwgI/toHEQcICAgIBxEHASYICAcRBwE2EAoLDw8LApkQCqyrBQUEDQmIogUFBA0J/qQIDgQEBKKICA4EBASsrAsPDwsBkQsPAAAAAQAAAAAAACFrhRNfDzz1AAsEAAAAAADWQYMEAAAAANZBgwT////ABAADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAEAP//AAAEAAABAAAAAAAAAAAAAAAAAAAAIgQAAAAAAAAAAAAAAAIAAAAEAAAABAAAAgQAAAAEAAAKBAAAAAQAAAAEAAC4BAAAegQAACkEAAAABAD//wQAAAAEAAABBAABLAQAAAAEAAAABAAAAQQAAAQEAAABBAAAAAQAAQgEAADlBAAAAAQAAGUEAAAABAAADAQAAHgEAAAABAAAAwQAAHcAAAAAAAoAFAAeAKoBCgE8AggC0AM6A2oFDAVeBeoGYgcGBx4HNggGCLoI/AliCcoJ5gn0CgoKNgpUCqwLDAtUC5YL2gwiAAAAAQAAACIBGgAOAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 获取常量配置项的定义

__webpack_require__(10);
__webpack_require__(11);
var EventManager = __webpack_require__(14);
var KmediaBasic = __webpack_require__(4);
var KmediaFuns = __webpack_require__(6);
var kmediaTool = __webpack_require__(18);
var buildVideo = __webpack_require__(24);
var addInfo = __webpack_require__(28);
var BaseUtil = __webpack_require__(1);
var DomUtil = __webpack_require__(0);

/*全局KMedia*/
var KMedia = {};
/**
 * 入口函数
 * @param {Object} config配置参数
 */
KMedia.init = function (kconfig) {
	//根据用户的config配置结合产生自己的config对象
	kconfig = kconfig || {};
	var configerror = false;
	if (!BaseUtil.isExitsVariable(kconfig.areaId, "请输入相关元素") && !BaseUtil.isExitsVariable(kconfig.videoUrl, "请填写播放地址")) {
		return false;
	}

	if (!BaseUtil.isExitsVariable(kconfig.realtime, "")) {
		kconfig.realtime = false;
	}
	// 创建video对象
	var kvideo = buildVideo(kconfig);

	//初始化事件管理器
	var eventmanager = new EventManager();

	/**
  * 创建KMedia函数类
  */
	function KMedia(kconfig) {
		this.kconfig = kconfig;
		// this.states = kvideo.states;
		//绑定事件
		this.EventManager = eventmanager;
	}

	//绑定功能模块,返回功能方法
	var basicFunc = KmediaBasic(KMedia, kvideo, kconfig);

	//创建UI，绑定UI接口
	var ktool = new kmediaTool(kconfig, basicFunc, kvideo);

	// 实例化
	var kmedia = new KMedia(kconfig);

	// 在实例化后载入一些信息,绑定进度条,工具栏自适应
	addInfo(kmedia, kvideo);

	return kmedia;
};

module.exports = {
	KMedia: KMedia
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseUtil = __webpack_require__(1);

window.KConfig = {};
//定义KTool菜单
baseUtil.extend(KConfig, {
	//主题
	ORANGETHME: "orange",
	REDTHEME: "red",
	DEFAULT: "blue",
	//基础功能
	BASIC: 1,
	//中级功能
	MIDDLE: 2,
	//高级功能
	ADVANCE: 3,

	// 最高播放速度
	MAXSPEED: 16,
	// 最慢播放速度
	MINSPEED: 1 / 16,

	// 亮度初始值
	BRIGHTNESS: 100,
	// 对比度初始值
	CONTRAST: 20,
	// 饱和度初始值
	SATURATE: 20,
	// 色调初始值
	HUEROTATE: 0,

	//播放暂停
	PLAY: "<i data-handler='play' align='center' class='icon-media_suspend' data-class1='icon-media_play' data-class2='icon-media_suspend' title='播放'></i>",
	//停止播放
	STOP: "<i data-handler='stop' align='center' class='icon-media_stop'></i>",
	//音量控制
	VOLUME: "<i data-handler='volume' align='left' class='icon-media_volume'><i class='icon-media_decrease'></i><i class='icon-media_louder'></i></i>",
	//全屏播放
	FULLSCREEN: "<i data-handler='fullscreen' align='right' class='icon-media_fullscreen' data-class1='icon-media_narrow' data-class2='icon-media_fullscreen'></i>",
	//图像增强
	IMGSTRENGTH: "<i data-handler='imgControl' align='right' class='icon-media_imeffect' title='图像增强'></i>",
	//!!和图像增强同一个面板弹出 -- 高级图像增强
	HSTRENGTH: "<i data-handler='stop' align='right' class='fa fa-folder-open'></i>",
	//截图
	SNAPSHOT: "<i data-handler='stop' align='right' class='icon-media_screenshot' title='截图'></i>",
	//多重截图
	MULTISNAPSHOT: "<i data-handler='dcjt' align='right' class='icon-media_screenshots' title='多重截图'></i>",
	//逐帧往后播放
	FRMAEBACKPLAY: "<i data-handler='stop' align='center' class='icon-media_backward' title='逐帧后播'></i>",
	//逐帧往前播放
	FRMAEFORWARDPLAY: "<i data-handler='digitZoom' align='center' class='icon-media_forward' title='逐帧前播'></i>",
	//分屏播放
	SPLITSCREEN: "<i data-handler='screenSplit' align='right' class='icon-media_splitscreen' title='分屏播放'></i>",
	//PTZ控制
	PTZ: "<i data-handler='stop' align='right'  class='icon-media_PTZ'></i>",
	//数字放大
	DIGITALZOOM: "<i data-handler='stop' align='align-right' class='icon-media_bigger' data-class1='icon-media_bigger' data-class2='icon-media_smaller' title='数字放大'></i>",
	//非线性编辑
	TARGETEDIT: "<i data-handler='stop' align='right' class='icon-media_edit' title='非线性编辑'></i>",
	//快速播放
	FASTPLAY: "<i data-handler='fastPlay' align='center' class='icon-media_fast' title='快速播放'></i>",
	//慢速播放
	SLOWPLAY: "<i data-handler='slowPlay' align='center' class='icon-media_slow' title='慢速播放'></i>",
	//循环播放
	CIRCLEPLAY: "<i data-handler='loop' align='center' class='icon-media_loop' title='循环播放'></i>",
	//视频剪辑
	RECORD: "<i data-handler='record' align='right' class='icon-media_videotape' data-class1='icon-media_bf' data-class2='icon-media_zt'></i>"
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/_css-loader@0.28.7@css-loader/index.js??ref--1-1!./kmedia.css", function() {
			var newContent = require("!!../node_modules/_css-loader@0.28.7@css-loader/index.js??ref--1-1!./kmedia.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "input{\r\n\toutline: none;\r\n}\r\n\r\n.kmediaContainer video{\r\n\twidth: 100%;\r\n}\r\n\r\n/*控制栏*/\r\n.kmediaContainer .control-bar{\r\n\tposition: absolute;\r\n\tbottom: 0px;\r\n\twidth: 100%;\r\n\tbackground-color: #000;\r\n\topacity: 0.5;\r\n\tpadding-bottom: .3rem;\r\n}\r\n\r\n.kmediaContainer .control-bar .kmedia-tools{\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tposition: relative;\r\n\tpadding: 5px;\r\n}\r\n\r\n.kmediaContainer .control-bar .kmedia-tools i{\r\n\tfont-size: 1rem;\r\n\tmargin: 0 5px;\r\n}\r\n\r\n/*.control-bar .kmedia-tools{\r\n\tposition: relative;\r\n}*/\r\n\r\n/*滑动条样式*/\r\n.kmediaContainer .control-bar .range-vol{\r\n\tposition: relative;\r\n\tmargin-bottom: .4rem;\r\n\twidth: 800px;\r\n\theight: 6px;\r\n\tbackground-color: gray;\r\n\tborder-radius: 4px;\r\n}\r\n.kmediaContainer .control-bar .range-vol > div{\r\n    background-color: blue;\r\n    border-radius: 4px;\r\n}\r\n.kmediaContainer .control-bar .range-vol > div > div{\r\n    /*background-color: red;*/\r\n    border-radius: 50%;\r\n}\r\n\r\n/*变速提示*/\r\n.kmediaContainer .control-bar .fastTip{\r\n\tdisplay: none;\r\n\tposition:absolute;\r\n\ttop:-.6rem;\r\n\tmargin-left: 7.2rem; \r\n\tfont-size:.6rem;\r\n}\r\n\r\n.kmediaContainer .control-bar .slowTip{\r\n\tdisplay: none;\r\n\tposition:absolute;\r\n\ttop:-.6rem;\r\n\tmargin-left: .6rem; \r\n\tfont-size:.6rem;\r\n}\r\n\r\n/*图像增强面板*/\r\n.kmediaContainer .imgControlPanel{\r\n\tposition: absolute;\r\n\t/*bottom: 4rem;*/\r\n\tright: 0;\r\n\t\r\n\tcolor:white;\r\n}\r\n\r\n.kmediaContainer .imgControlPanel .selected, .imgControlPanel .unselect{\r\n\tdisplay: inline-block;\r\n\twidth: 50%;\r\n\ttext-align: center;\r\n\tfont-size: .6rem;\r\n}\r\n\r\n.kmediaContain er.imgControlPanel .selected{\r\n\tbackground-color: #1b1b1b;\r\n}\r\n\r\n.kmediaContainer.imgControlPanel .unselect{\r\n\tbackground-color: #434343;\r\n}\r\n\r\n\r\n.kmediaContainer .imgControlPanel .imgControlDetail{\r\n\tbackground-color: #000;\r\n\topacity: .5;\r\n\tpadding: 1rem 2rem;\r\n}\r\n\r\n.kmediaContainer .imgControlPanel .text{\r\n\tdisplay: inline-block;\r\n\twidth: 4rem;\r\n\tfont-size: .6rem;\r\n\tmargin-right: 1rem;\r\n\tmargin-bottom: .25rem;\r\n\tmargin-top: .25rem; \r\n}\r\n.kmediaContainer .imgControlPanel .range-img{\r\n\tdisplay: inline-block;\r\n\theight: .2rem;\r\n\twidth:7rem;\r\n\tbackground-color: white;\r\n\tmargin-top: .2rem;\r\n\tmargin-bottom: .2rem;\r\n}\r\n\r\n.kmediaContainer .imgControlPanel .range-img > div{\r\n\tbackground-color: red;\r\n}\r\n\r\n.kmediaContainer .imgControlPanel .range-img > div > div{\r\n\t/*background-color: blue;*/\r\n}", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	function EventManager() {
		var eventcontrol = {
			handlers: {},
			//类型，绑定事件
			addhandler: function addhandler(type, handler) {
				if (typeof this.handlers[type] == "undefined") {
					this.handlers[type] = []; //每个事件都可以绑定多次
				}
				this.handlers[type].push(handler);
			},
			//移除句柄
			removeHandler: function removeHandler(type, handler) {
				var events = this.handlers[type];
				for (var i = 0, len = events.length; i < len; i++) {
					if (events[i] == handler) {
						events.splice(i, 1);
					}
				}
			},
			//事件触发
			trigger: function trigger(type) {
				if (this.handlers[type] instanceof Array) {
					var handlers = this.handlers[type];
					var args = Array.prototype.slice.call(arguments, 1);
					for (var i = 0, len = handlers.length; i < len; i++) {
						handlers[i].apply(null, args);
					}
				}
			}
		};

		//给外部绑定事件
		this.on = function (type, event) {
			eventcontrol.addhandler(type, event);
		};

		//事件触发
		this.trigger = function (type) {
			eventcontrol.trigger(type);
		};

		//移除事件
		this.off = function (type, event) {
			eventcontrol.removeHandler(type, event);
		};
	}

	return EventManager;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/_css-loader@0.28.7@css-loader/index.js??ref--1-1!./progress.css", function() {
			var newContent = require("!!../node_modules/_css-loader@0.28.7@css-loader/index.js??ref--1-1!./progress.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "*{\r\n    margin: 0;\r\n    padding: 0;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\nbody{\r\n    position: relative;\r\n}\r\n.kmediaContainer #wrapper{\r\n    position: relative;\r\n    margin: 0 auto;\r\n}\r\n\r\n.kmediaContainer #videoCover{\r\n    position: absolute;\r\n    width: inherit;\r\n    height: inherit;\r\n}\r\n.kmediaContainer #controls_wrapper{\r\n    position: absolute;\r\n    height: 55px;\r\n    bottom: 10px;\r\n}\r\n.kmediaContainer .progress-part{\r\n    width: 100%;\r\n}\r\n\r\n.kmediaContainer .progress-part p{\r\n    padding: 0\r\n}\r\n\r\n.kmediaContainer #progress_wrapper{\r\n    position: relative;\r\n    width: inherit;\r\n    /*height: 13px;*/\r\n    padding-bottom: .3rem;\r\n    cursor: pointer;\r\n    /*display: inline-block;*/\r\n}\r\n.kmediaContainer #progress_bg{\r\n    position: absolute;\r\n    width: inherit;\r\n    height: 3px;\r\n    background: #7b828a;\r\n    transition: transform .2s;\r\n}\r\n.kmediaContainer #progress_loaded{\r\n    position: absolute;\r\n    height: 3px;\r\n    background: rgba(255,255,255,1);\r\n    transition: transform .2s;\r\n}\r\n.kmediaContainer #progress_current{\r\n    position: absolute;\r\n    height: 3px;\r\n    background-color: red;\r\n    transition: transform .2s;\r\n}\r\n.kmediaContainer #progress_ball{\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    top:1px;\r\n    background: white;\r\n    border-radius: 50%;\r\n    transition: transform .2s;\r\n}\r\n.kmediaContainer #progress_wrapper:hover>#progress_bg{\r\n    /*transform: scaleY(1.2);*/\r\n}\r\n.kmediaContainer #progress_wrapper:hover>#progress_loaded{\r\n    /*transform: scaleY(1.2);*/\r\n}\r\n.kmediaContainer #progress_wrapper:hover>#progress_current{\r\n    /*transform: scaleY(1.2);*/\r\n}\r\n.kmediaContainer #progress_wrapper:hover>#progress_ball{\r\n    transform: scale(5, 5);\r\n    background: white;\r\n}\r\n\r\n\r\n/*时间栏*/\r\n.kmediaContainer .show-time{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    color: white;\r\n    margin-right: 10px;\r\n}\r\n\r\n.kmediaContainer .show-current{\r\n    color: #fff;\r\n    font-size: .6rem;\r\n    margin-left: .5rem;\r\n    text-align: left;\r\n}\r\n.kmediaContainer .show-duration{\r\n    float:right;\r\n    color: #fff;\r\n    font-size: .6rem;\r\n    margin-right: .5rem;\r\n}", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {// osrange.js
// author：七八个星天怪
// LICENSE：MIT



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
    if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
        module.exports = f;
    } else {
        window.osrange = f;
    }
})(function (mycfg) {
    function extend(t, o) {
        for (var n in o) {
            t[n] = o[n];
        }
    }
    function createDiv() {
        return document.createElement('div');
    }
    function css(el, obj) {
        for (var k in obj) {
            el.style[k] = obj[k];
        }
    }

    var cfg = {
        el: null,
        range: [0, 1],
        value: 0,
        control: true,
        callback: null
    };
    extend(cfg, mycfg);

    var bg = cfg.el;
    bg.style.cursor = 'default';
    var min = cfg.range[0];
    var max = cfg.range[1];
    var value = cfg.value;
    var cb = cfg.callback;

    var dv = max - min;
    var p = (value - min) / dv;

    function getVal() {
        return value = p * dv + min;
    }

    var progress = createDiv();

    function setW() {
        progress.style.width = p * 100 + '%';
    }
    css(progress, {
        position: 'relative',
        height: 'inherit'
    });
    setW();
    cb && cb(getVal());

    if (cfg.control) {
        bg.style.cursor = 'pointer';

        var ball = createDiv();
        var h = bg.clientHeight;
        var ballWH = h * 2;

        css(ball, {
            position: 'absolute',
            width: ballWH + 'px',
            height: ballWH + 'px',
            right: -ballWH / 2 + 'px',
            top: (h - ballWH) / 2 + 'px'
        });

        progress.appendChild(ball);

        ball.onmousedown = bg.onmousedown = function (e) {
            e.stopPropagation();
            var rect = bg.getBoundingClientRect();

            document.onmousemove = function handle(e) {
                p = (e.clientX - rect.left) / rect.width;
                p = p < 0 ? 0 : p > 1 ? 1 : p;
                setW();
                cb && cb(getVal());
                return handle;
            }(e);
            document.onmouseup = function () {
                document.onmousemove = null;
            };
        };
    }

    // domUtil.appendAfter(bg, progress);
    bg.appendChild(progress);

    this.setValue = function (val) {
        value = val < min ? min : val > max ? max : val;
        p = (value - min) / dv;
        setW();
    };
    this.getValue = function () {
        return value;
    };
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

__webpack_require__(19);
var BaseUtil = __webpack_require__(1);
var DomUtil = __webpack_require__(0);
var KmediaBasic = __webpack_require__(4);
var KFunction = __webpack_require__(6);

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	// 生成工具栏UI界面
	function getTools(toolsconfig, theme) {
		//工具栏
		var toolbar = "<p class='kmedia-tools' style='color:" + theme + "'>";
		//声音栏目
		var volume_span = "<span>";
		//播放栏目
		var play_span = "<span>";
		//功能栏目
		var control_span = "<span>";
		toolsconfig.forEach(function (tool, index) {
			var regex = new RegExp(/([^\s=]+)=(['"\s]?)([^'"]+)\2(?=\s|$|>)/, "g");
			if (tool) {
				var position = tool.match(regex)[1].replace("align=", "");
				switch (position) {
					case "'left'":
						volume_span += tool;
						break;
					case "'center'":
						play_span += tool;
						// console.log(tool);
						break;
					case "'right'":
						control_span += tool;
						break;
					default:
						break;
				}
			}
		});

		volume_span += "</span>";
		play_span += "</span>";
		control_span += "</span>";
		toolbar += volume_span;
		toolbar += play_span;
		toolbar += control_span;
		toolbar += "</p>";
		//绑定到UI
		DomUtil.append(DomUtil.getDomByClass("tool-part"), toolbar);
	}

	// 绑定功能到UI
	function bindHandler(basicFunc, kvideo) {
		// 找到所有功能图标
		var parentDom = DomUtil.getDomByClass(".control-bar > .tool-part");
		var items = DomUtil.getDomsBySelector(".kmedia-tools i", parentDom);
		items.forEach(function (dom) {
			var KHandler = dom.getAttribute("data-handler");
			if (KFunction[KHandler]) {
				KFunction[KHandler](basicFunc, kvideo.states, dom);
			}
		});
		// 额外绑定一个双击视频，全屏切换功能
		KFunction.dblclickFullscreen(basicFunc, kvideo);
	}

	function kmediaTool(kmediaconfig, basicFunc, kvideo) {
		//按钮配置
		this.toolsconfig = [KConfig.PLAY, KConfig.STOP, KConfig.VOLUME, KConfig.FULLSCREEN];
		//主题配置
		this.theme = KConfig.DEFAULT;
		//根据配置来动态的生成主题跟按钮
		var difftool = [KConfig.SLOWPLAY, KConfig.FASTPLAY, KConfig.CIRCLEPLAY, KConfig.SPLITSCREEN, KConfig.TARGETEDIT];
		if (kmediaconfig.theme) {
			this.theme = kmediaconfig.theme;
		}

		if (kmediaconfig.control) {
			switch (kmediaconfig.control) {
				case KConfig.MIDDLE:
					if (kmediaconfig.realtime) {
						this.toolsconfig = [KConfig.VOLUME, KConfig.STOP, KConfig.IMGSTRENGTH, KConfig.SNAPSHOT, KConfig.FRMAEBACKPLAY, KConfig.PLAY, KConfig.FRMAEFORWARDPLAY, KConfig.MULTISNAPSHOT, KConfig.RECORD, KConfig.DIGITALZOOM, KConfig.FULLSCREEN, KConfig.TARGETEDIT];
					} else {
						this.toolsconfig = [KConfig.VOLUME, KConfig.STOP, KConfig.IMGSTRENGTH, KConfig.SNAPSHOT, KConfig.SLOWPLAY, KConfig.FRMAEBACKPLAY, KConfig.PLAY, KConfig.FRMAEFORWARDPLAY, KConfig.FASTPLAY, KConfig.CIRCLEPLAY, KConfig.MULTISNAPSHOT, KConfig.RECORD, KConfig.DIGITALZOOM, KConfig.FULLSCREEN];
					}

					break;
				case KConfig.ADVANCE:
					if (kmediaconfig.realtime) {
						this.toolsconfig = [KConfig.VOLUME, KConfig.STOP, KConfig.IMGSTRENGTH, KConfig.SNAPSHOT, KConfig.FRMAEBACKPLAY, KConfig.PLAY, KConfig.FRMAEFORWARDPLAY, KConfig.MULTISNAPSHOT, KConfig.HSTRENGTH, KConfig.RECORD, KConfig.PTZ, KConfig.DIGITALZOOM, KConfig.FULLSCREEN];
					} else {
						this.toolsconfig = [KConfig.VOLUME, KConfig.STOP, KConfig.IMGSTRENGTH, KConfig.SNAPSHOT, KConfig.SLOWPLAY, KConfig.FRMAEBACKPLAY, KConfig.PLAY, KConfig.SPLITSCREEN, KConfig.FRMAEFORWARDPLAY, KConfig.FASTPLAY, KConfig.CIRCLEPLAY, KConfig.TARGETEDIT, KConfig.MULTISNAPSHOT, KConfig.HSTRENGTH, KConfig.RECORD, KConfig.DIGITALZOOM, KConfig.FULLSCREEN];
					}
					break;
			}
		}

		if (kmediaconfig.tools) {
			if (kmediaconfig.realtime) {
				var regex = new RegExp(/([^\s=]+)=(['"\s]?)([^'"]+)\2(?=\s|$|>)/, "g");
				var nottool = BaseUtil.intersect(difftool, kmediaconfig.tools);
				for (var index = 0, len = nottool.length; index < len; index++) {
					console.log(nottool[index].match(regex)[3].replace("title=", "") + "在实时直播中不存在！");
				}
				kmediaconfig.tools = BaseUtil.minus(kmediaconfig.tools, nottool);
			}
			this.toolsconfig = this.toolsconfig.concat(kmediaconfig.tools);
		}

		this.toolsconfig = BaseUtil.UnitArray(this.toolsconfig);
		// 生成UI
		getTools(this.toolsconfig, this.theme);
		// 绑定UI功能
		bindHandler(basicFunc, kvideo);

		// 设置滑动条的主题颜色
		DomUtil.getDomBySelector(".range-vol > div").style.backgroundColor = this.theme;
	}

	return kmediaTool;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/_css-loader@0.28.7@css-loader/index.js??ref--1-1!./font.css", function() {
			var newContent = require("!!../node_modules/_css-loader@0.28.7@css-loader/index.js??ref--1-1!./font.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: 'icomoon';\r\n  src:  url(" + __webpack_require__(8) + ");\r\n  src:  url(" + __webpack_require__(8) + "#iefix) format('embedded-opentype'),\r\n    url(" + __webpack_require__(21) + ") format('truetype'),\r\n    url(" + __webpack_require__(22) + ") format('woff'),\r\n    url(" + __webpack_require__(23) + "#icomoon) format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n[class^=\"icon-\"], [class*=\" icon-\"] {\r\n  /* use !important to prevent issues with browser extensions that change fonts */\r\n  font-family: 'icomoon' !important;\r\n  speak: none;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n\r\n  /* Better Font Rendering =========== */\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.icon-media_imeffect:before {\r\n  content: \"\\E900\";  \r\n}\r\n.icon-media_download:before {\r\n  content: \"\\E901\";  \r\n}\r\n.icon-media_new:before {\r\n  content: \"\\E902\";  \r\n}\r\n.icon-media_loop:before {\r\n  content: \"\\E903\";  \r\n}\r\n.icon-media_volume:before {\r\n  content: \"\\E904\";  \r\n}\r\n.icon-media_preview:before {\r\n  content: \"\\E905\";  \r\n}\r\n.icon-media_suspend:before {\r\n  content: \"\\E906\";  \r\n}\r\n.icon-media_end:before {\r\n  content: \"\\E907\";  \r\n}\r\n.icon-media_restart:before {\r\n  content: \"\\E908\";  \r\n}\r\n.icon-media_PTZ:before {\r\n  content: \"\\E909\";  \r\n}\r\n.icon-media_reverse:before {\r\n  content: \"\\E90A\";  \r\n}\r\n.icon-media_bigger:before {\r\n  content: \"\\E90B\";  \r\n}\r\n.icon-media_recovery:before {\r\n  content: \"\\E90C\";  \r\n}\r\n.icon-media_updown:before {\r\n  content: \"\\E90D\";  \r\n}\r\n.icon-media_smaller:before {\r\n  content: \"\\E90E\";  \r\n}\r\n.icon-media_videotape:before {\r\n  content: \"\\E90F\";  \r\n}\r\n.icon-media_backward:before {\r\n  content: \"\\E910\";  \r\n}\r\n.icon-media_fullscreen:before {\r\n  content: \"\\E911\";  \r\n}\r\n.icon-media_narrow:before {\r\n  content: \"\\E912\";  \r\n}\r\n.icon-media_stop:before {\r\n  content: \"\\E913\";  \r\n}\r\n.icon-media_decrease:before {\r\n  content: \"\\E914\";  \r\n}\r\n.icon-media_louder:before {\r\n  content: \"\\E915\";  \r\n}\r\n.icon-media_edit:before {\r\n  content: \"\\E916\";  \r\n}\r\n.icon-media_play:before {\r\n  content: \"\\E917\";  \r\n}\r\n.icon-media_screenshots:before {\r\n  content: \"\\E918\";  \r\n}\r\n.icon-media_splitscreen:before {\r\n  content: \"\\E919\";  \r\n}\r\n.icon-media_slow:before {\r\n  content: \"\\E91A\";  \r\n}\r\n.icon-media_forward:before {\r\n  content: \"\\E91B\";  \r\n}\r\n.icon-media_screenshot:before {\r\n  content: \"\\E91C\";  \r\n}\r\n.icon-imedia_fast:before {\r\n  content: \"\\E91D\";  \r\n}\r\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,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"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,d09GRgABAAAAABz8AAsAAAAAHLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGNmNtYXAAAAFoAAAAVAAAAFQXVtKkZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAGEQAABhExlFITWhlYWQAABoIAAAANgAAADYPoEqFaGhlYQAAGkAAAAAkAAAAJAfBA+NobXR4AAAaZAAAAIgAAACIfgEF6WxvY2EAABrsAAAARgAAAEZyymvibWF4cAAAGzQAAAAgAAAAIAAxARxuYW1lAAAbVAAAAYYAAAGGmUoJ+3Bvc3QAABzcAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6R0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkd//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAADgAA/8sD/wOvAAMABwALABAAGAAgACUAKwAwADUAOgA+AEUASgAAAREhESUhESElESERJSERIREnFycHJwcXBwEnFzcXNyc3ATc1BzMTIwEVAScjBxU3IyMHFTcjMwEVASMDNzUBATUjARczAQkBNQEzAfH+TgHx/dACMAF//k4B8f3QAjCpuhs03DfcNP2FuQ83zTzNNwKGd6gxTSH+bwG6COXN/jFccaIxvf7SAV8xKNb++QEHAf46Eg0BqP7GATr+lTEDcf5WAao+/dkv/lUBqz792gImhAe1OcE9wTj+jxS3NtA5zzX+2nUwpQHr/nYwAbMHyTH6bjGf/tcwAVn+FdEx/v4BoDD+QREBoP5gATQw/pwAAAIAAv/jA/0DlgAhAEIAAAUhIiY9ATQ2OwEyFh0BFBYzITI2PQE0NjsBMhYdAQ4BIzEBNjIfARE0NjsBMhYVETc2Mh8BFhQHAQ4BIyImJwEmNDcDa/0oPFUVD0kPFSseAkYeKxUPSQ8WAVU8/WwLIAupFg9JDxWqCx8LNgsL/tMBHhIRHwH+1AsLHVU9tg8VFQ9uHisrHm4PFRUPtj1VAsoLC6oBbw8VFQ/+kaoLCzULIAv+1AEPDwEBLAsgCwAAAAEAAP/ABAADwAAgAAABIRE0JiMiBhURIQ4BFRQWMyERFBYzMjY1ESEyNjU0JiMD1/5VGhERGf5UEhkZEgGqGhERGQGsERkYEQHqAasSGRkS/lYBGRESGf5VEhgZEQGrGRESGQACAAr/7AP4A4UASgCLAAABJzQmNSciJiMiJisBIgYHIgYPAQ4BFx4BMzI2PwEGBw4BBwYjIicuAScmJy4BBw4BFxYXHgEXFjMyNz4BNzY3Fx4BMzI2Nz4BJzElFx4BMzI2NzA2NTI2MTc2NCcmIg8BNjc+ATc2MzIXHgEXFhceATc+AScmJy4BJyYnIyIHDgEHBgcnLgEHDgEfAQP4VQQFAwIDBAIDEgQCAwMDA44RBwoHFA0HDAMxCh0cVzg4Py8sLE4gIBULIg0RCwoaKChiODc7TkZGbyQlDB8HFA0HCQYOCgr8gQ0DDAMDCAcEBAV4Dg4NJA01Bh4dWjk6QC4sLU0eHxQHIxARDAYbJyhgODg8BVBHR28lJQsXDSQNDQILbwFHjwMCAwUEBAEDAQNZCiQRCgwBAx88MzNLFRYNDTAhIioQDAoEIRE1Kys8EBAbG15AQUs2CgwBAw4lEEMNBAEBBAEDBHQOIw0ODjA/NzZQFxcNDTAjIysRDAcGIxE1Kys9EREBHBxjQkNNKA4BCg4jDX0AAAADAAAADwQAA20ASABjAI4AAAEmBg8BIyIGHQEUFjsBFx4BMzI2Nz4BPQE0JiMiBh0BFAYHBiYvAS4BKwEiJj0BNDY7ATI2PwE+ARceAR0BFBYzMjY9ATQmJzEBNCYnIgYHBhYXHgEVFAYHDgEXHgE7AT4BNTEDJgYHBhYXFhceARcWFRQHDgEHBgcOARUeATsBNjc+ATc2NTQnLgEnJicxAfUgRRqpYzA6OjBjqRAwFQoWCiAgFBAQEwsKCxwLtwUNCmoVDg4VcQUSBbgFGwoLChQQEBMgIAFFUEQLGwUFERArODgrEAoFBRQLDjpMThAVBQUREDAoKDoQEREQOigoMBAMBRQKBz0zMkkUFRUUSTIzPQNtCgwbsDow6TA6sBAUAgULOiVjEBMTEGMQFQUGCQu4BQkOFekVDwgGtwsJBgUVEGoQExMQaiU6C/5YRXMVDBALGwUQRjAvRxAFGwoLCxBxRQFoBREQEBUFDhwcTS4vMjIvLk0cHA0FFhAKEhMiI145Oj9AOTleIyMSAAAAAwAAAIEEAAM9ABsANwBEAAABIgcOAQcGBxYXHgEXFjMyNz4BNzY3JicuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBgMiBhUUFjMyNjU0JiMCAFdQUIUzNB0dNDOFUFBXV1BQhTM0HR0zM4ZQUFcxKio/EhISEj8qKjExKio/EhISEj8qKjE7UVA8O1FROwM9GhpcQUBNTUBAXRoaGhpdQEBNTUBBXBoa/boSEj8qKjExKio/EhISEj8qKjExKio/EhIBdE89O1FQPD1PAAACALj/wQM0A8AADgAdAAABERQWMzI2NRE0JiMiBhUBETQmIyIGFREUFjMyNjUCoiseHisrHh4r/qgrHh4rKx4eKwN3/JMeKyseA20eKyse/JMDbR4rKx78kx4rKx4AAAAIAHr/8AOgA78AIABAAFQApgDfAPMBCgEZAAAFJicuAScmNTQ3PgE3NjMyFx4BFxYVFAcOAQcGBwYiJzETIgcOAQcGFRQXHgEXFh8BNzY3PgE3NjU0Jy4BJyYjMQMmNjc+ATc2FhcWBgcOAQcGJicxEzM+ATc+ATc+ARceAQcOAQcOAQcGFjMyNjc+ATcyFhcWBgcOAQcOASMGJicmNjc+ATc+ATcjIiY3JjY3PgE3PgE3PgEXHgEHDgEHDgEXFDIzMTczHgEHDgEHHgEXHgEHDgEnLgEnDgEHBiYnJjY3PgE3LgEnDgEHDgEHDgEnLgE3PgE3PgEXHgEVMRMuAScuATc+ARceARceAQcOAScxJy4BJy4BNS4BNz4BFx4BFx4BBw4BJzE3Iw4BBx4BFz4BNzYmIzEB0xY4OXctLh8gbklJVFNJSm0gIC4udzg5FSwdKzpFPDxaGhoiImM5OC4EBS44OWMiIhoaWjw8RMoCCAsfOBgIDgYHBQsWOCEPEgNRCgIGBgQHAgkTDAcCBgMLBhceBwQFBwMIBgQGAgoMAgIJCgsVCwoTCBASAgQDBgMPCwYKAyEODgEBBgcDDQsLDwQGEwwKBQUFFhEDAwEGBrdZEQ0HCR0UDiATDgkEBhYQFSYSGzAVDxMEBAkOFygRCRAHAgMCAgYCCREICwIHEx0LAw8LCQphJ1AqDgoEAQ8POk0UDAsBAQ4MNwweEgIEDAgCAg0LFCUSDAkEBBENBEABAwEPFQULEQYBAwQQF0BApVpbS1NKSW0gICAgbUlKU0taWqVAQBgvLwOGGhpaPDxEQUdHi0A/MgQFMT9Ai0dHQUQ8PFoaGv4YCw0EBxUNAgQHDRIFCRULAwgMAQIDCAcFCAQKAwcIEQkEDQgeKAsHBwEBAQIBBwkMDgMDBgEBAQIHCQYSDAcXDgkNBQkJBxQMAxURERUFCgYEBg8IDCIXAwUCAlYCFBMhNBQMFAkHEwsMAwkKGQ8UHQcGBgsMEQYIFw8IFAsBBgMDBwQJBAUGEgwXNB0LCgIDCwj+iAgQBwIQDAwJAgoPBAIPDAwLAV4FCgUBAgEBDgwJCQEEDQkGDwkMBgbsAwYDFxsDDRoOBgYAAAEAKf/BA98DwAA1AAABNQ0BNRYXHgEXFhUUBw4BBwYjIicuAScmNTQmIyIGFRQXHgEXFjMyNz4BNzY1JicuAScmJzECTf7bASQ3Ly9EFBMaGlk8PEREOzxZGhorHh8qJSaBVlZjYlZXgSUmAR4fbEpJVQNxT7e2iQ0dHlQ1NDtEPDxZGhoaGlk8PEQeKyseYldWgSUmJiWBVldiWU9QfCopDgAABgAA/8ID+wO9ABwAOQBBAEkAUQBYAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmIxEiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYjEycHFwcXJwclBycHNyc3Jz8BFzcHFwcXLwEXNxc3JwH9aV1diigoKCiKXV1pal1ciygoKCiLXF1qWk9QdiMiIiN2UE9aW09QdiIjIyJ2UE9b6Gc0ZzO0GjP+rmc0GbQ0ZzPrZzMatDNmM+u0GTRnM2cDvSgoil1daWpcXYsoKCgoi11camldXYooKPxOIyJ3T1BaWlBPdyIiIiJ3UE9aW09PdyIjAQpmM2c0GbQzZmYztBk0ZzOFZzS0GjNnM80atDRnM2cAAAP////+A/8DeAAaADUAUwAANyU2Fh8BFgYPASEyFh0BFAYjISImPQEmNjcxESU2Fh8BFgYPASEyFh0BFAYjISImPQE0NjcxAzQ2NyU2Fh8BFgYPASEyFh0BFAYjISImPQEiMDUxCQEjBg8EEwQEB7MDUAcKCgf8IwcKAQUFASMGDwQTBAQHswNFBwoKB/wtBwoFBQoFBQEjBg8EEwQEB7MDUAcKCgf8IwcKAUOqBAUGIQcPBGgKByMHCgoHIwUKAgFGqgMEBiEHDwRoCgcjBwoKByMFCQMBNQUJAqoEBQYhBw8EaAoHIwcKCgcjAQAAAAMAAP/UA+sDwAA4AFIAdAAAJSc+ATc+ATU0JicuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATcXFjI3PgEnJSImJy4BNTQ2Nz4BMzIWFx4BFRQGBw4BIzETIzU0JiMiBh0BIyIGFRQWOwEVFBYzMjY9ATMyNjU0JiMxA+vrEBwLERERERAuHh1FJihTLCtUJydEHh0uERARERARLh0eRCcnVCssVCcaLxXrEC4QEAEQ/cFAdC4tMDAtLnRAQHUtLTExLS11QL6YFhAPFpgQFhYQmBYPEBaYDxYWDyHsFjAZKFQrLFMoJkUdHi4QERERERAuHh1FJihTLCtUKCZEHh0uERARERALHBHsEBAQLRCzMC0udEBAdS0tMTEtLXVAQHQuLTABZZgPFhYPmBYQDxaYEBYWEJgWDxAWAAACAAH/wQQAA8AABAAIAAATESERIQEhESEBA//8AQPA/H8DgQPA/AED//xAA4EAAAABASz/wAMBA8AACAAAARUBNQE1ATUBAwH+KwGk/lwB1QHjRv4jWQGjBgGlWf4jAAADAAD/wQP+A8AAPgBwAIwAAAEyFhceARceARceARUUBgcOAQcBHgEVFAYHDgEjIiYnAQ4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNz4BNz4BMxUiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATc+ATc+ATU0JicuAScuAScuASMxAyEyFhceARUUBgcOASMhIiYnLgE1NDY3PgEzMQGiK1EnJ0IcHC0REBEMDAwiFgEIBwYGBwYRCgoQB/74Gz0hIkYkKlImJ0McHCwRERAQEREsHBxDJyZSKiE/Hh40FhYiDQ0NDQwNIxYWNB4ePyEhPx8eNBUWIw0NDQ0NDSMWFTQeHz8hiwEXCRAHBwcHBwcQCf7pChAHBwcHBwcQCgPAERARLRwcQicnUSskRiEiPBz++QcQCgoRBwYHBwcBCBYiDAwMERARLRwcQicnUSsqUScnQxwcLBEQEV0NDQ0iFhY0Hh5AISE/Hh40FhYiDQ0NDQ0NIxUWNB4ePyEhQB4eNBYWIg0NDf7pBwcGEQkKEAcHBwcHBxAKCREGBwcAAAkAAABLA/4DSgAMAB0ALgA/AFAAVABkAHQAhQAAATc2NC8BJgYdARQWNwEhIgYVERQWMyEyNjURNCYjARQGKwEiJj0BNDY7ATIWHQERFAYrASImPQE0NjsBMhYdAREUBisBIiY9ATQ2OwEyFh0BASERIRMUBisBIiY9ATQ2OwEyFhU1FAYrASImPQE0NjsBMhYVNRQGKwEiJj0BNDY7ATIWHQEBjv8SEv8QHx8QAhH8wCc4OCcDQCc4OCf9IRMOPw0TEg5ADRMTDj8NExIOQA0TEw4/DRMSDkANEwI//gEB/78SDj8OExMOPw0TEg4/DhMTDj8NExIOPw4TEw4/DRMBLoAJJwmACBMS/xITCAIcOSf9wig5OSgCPig4/WENExIOQA0TEg5AAQANExIOPw4TEw4/AQAOExMOPw0TEg4//eACf/2hDRMSDkANExIOwA0TEg4/DhMTDsEOExMOPw0TEg4/AAAAAAIAAQANBAADbgAWACgAABMBNjIXHgEVAxQGBwYmJwEuATU0NjcxASMiJjcTNDY7ATIWFQMUBiMxNgH8GToaGR0BHRoZOhn+BRkcHRgDgQceKgEBKh4GHioBKx0CHgEsDw8OMh79ph0yDw4BDwEuDjIdHDIP/e8qHgLRHioqHv0vHioAAAIABP/FA/4DwAAcAEIAACUjATYmJy4BBwE1NCYjIgYVERQWMyE+ATU0JicxASEmBgcGFBceATsBAQ4BFx4BMzI2NwEVFBYzMjY1ETQmJy4BIzEBo/ABCA4BDw4oD/70HRUVHR0VAW0UHBwUAin+kw4YBwcHBxgO8P74CgYFBhkQChIHAQwdFRUdBwcHEwopAQgPKA4OAg7+9O4VHR0V/p0UHgEdFBQdAQOXAQ0MDBwMDAz++AseDg4QBwcBDO4VHR0VAWMKEgcHCAAAAAIAAf/AA/8DvgAjAEcAACUUBiMiJi8BBw4BIyImLwEuATU0Nj8BJy4BNTQ2MyEyFhURMQEHFx4BFRQGIyEiJjURNDYzMhYfATc+ATMyFh8BHgEVFAYHMQIAGRIJDwZi4QMIBAQJA00DBAQD4WIGBxoRATARGgH44GEGBxoR/tARGhoRCRAGYeEDCQQECANNAwQEA2QRGgcGYuEDBAQDTQMIBAUIA+FhBhAIEhoaEv7RAufhYgYPCRIZGhEBLxIaBwZi4QMEBANNAwkEBAgDAAABAAD/wAQAA8AADwAAJRQGIyEiJjURNDYzITIWFQQATTb9BjZNTTYC+jZNQjZMTDYC/DZMTDYAAAEBCAHJAvgB7QADAAABIRUhAQgB8P4QAe0kAAABAOUAvwMGArMACwAAASE1IxUjFTMVMzUhAwb++yL6+iIBBQHJ6uoh6ekAAAMAAP/CA9wDngAEAAkAFQAANxEhCQEBIzUBFzcnJiIPAQE3NjQnMQABOQJW/sf+t58B6JrsmSFYISwBOSYhIfv+xwJWATn835kB6ZrsmiEhJv7HJiFdIQABAGX/zwOMA7AADAAACQEWFAcBBiY1ET4BFwELAoE3N/1/N28BbjcDsP5tH30f/m0gPz4DJj4/HwAAAAAEAAAAMQQAA2kAHAAlAC8AOwAAASEiBh0BIgYVMzEjETAWMyE+ATE1MzI2NRE0JiMDIycHJwMRIREXIxE0JjEhNSERAT4BMTQmMQ4BMQYWA+f8YQoPBikvLw4jA1MkDjEKDw8KY129jsK0Ax5KGDL84gNo/vlPEWBGFwFeA2kPCicPIf1oMAEvHg4LArgKD/1UwI/v/vICKv3EAQI9IQ8E/Y8BIQFdRxcHV0gWAAAAAAQADP/AA/QDvwARACIAMwBEAAABISIGHQEUFjMhMjY9ATQmIzETFAYjISImPQE0NjMhMhYdAQMhIgYdARQWMyEyNj0BNCYjExQGIyEiJj0BNDYzITIWHQEDbP0oOFBQOALYOFBQOC0aE/0oEhsbEgLYEhst/Sg4UFA4Atg4UFA4LRoT/SgSGxsSAtgSGwGdUDjNOFBQOM04UP6rEhsbEs0TGxsTzQN3UDnMOFFQOcw5UP6rExsbE8wTGxsTzAAAAAEAeADMA28ClQAvAAA3MjY9AQUWMjc+AT0BBRYyNz4BNRM0JicmIgcFNTQmJyYiBwU3NCYjIgYVEQYWMzGSCw8BOgcRCAcJASgIEQcICAEICAgQCP7XCAgIEAj+xgEQCwsPARALzA8Lrq4FBQQOCIqlBAQEDggBYAkOBAQEpIoIDgQEBK2uCw8PC/5qCg8AAAIAAAAXBAADegAWACgAAAkBDgEnLgE1ETQ2NzYWFwEeARUUBgcxATMyFhURFAYrASImNRE0NjMxA8v+BBk7GRkeHhkZOxkB/BgdHRj8fQceKioeBx4qKh4Bav7TDwEPDjMdAlsdMw4PAQ/+0w8yHRwyDwIQKh79LR4qKh4C0x4qAAAAAAQAAwBAA/wDbgAMABQAIwAqAAABMBYVMAYHMCY3MDY3NzAWFREwBgclMBYzITUjJwcLAQcDIxEBITAGFSE1AvxmElRlARhMyjYQJvw9DiYDj2TKmNDMLQIyA8P8cTQDwwLUGUxjARdNXQiaECT9OjMBNDSXzZoBAP7PAQJi/ToC+gwoNAAAAAABAHcA1ANlApkALwAAASIGHQElJiIHDgEdASUmIgcOARURFBYXFjI3JRUUFhcWMjclFRQWMzI2NRE0JiMxA0sKD/7JBxEHCAj+2gcRBwgICAgHEQcBJggIBxEHATYQCgsPDwsCmRAKrKsFBQQNCYiiBQUEDQn+pAgOBAQEoogIDgQEBKysCw8PCwGRCw8AAAABAAAAAAAAIWuFE18PPPUACwQAAAAAANZBgwQAAAAA1kGDBP///8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQA//8AAAQAAAEAAAAAAAAAAAAAAAAAAAAiBAAAAAAAAAAAAAAAAgAAAAQAAAAEAAACBAAAAAQAAAoEAAAABAAAAAQAALgEAAB6BAAAKQQAAAAEAP//BAAAAAQAAAEEAAEsBAAAAAQAAAAEAAABBAAABAQAAAEEAAAABAABCAQAAOUEAAAABAAAZQQAAAAEAAAMBAAAeAQAAAAEAAADBAAAdwAAAAAACgAUAB4AqgEKATwCCALQAzoDagUMBV4F6gZiBwYHHgc2CAYIugj8CWIJygnmCfQKCgo2ClQKrAsMC1QLlgvaDCIAAAABAAAAIgEaAA4AAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Imljb21vb24iIGhvcml6LWFkdi14PSIxMDI0Ij4KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iOTYwIiBkZXNjZW50PSItNjQiIC8+CjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjA7IiBob3Jpei1hZHYteD0iNTEyIiBkPSIiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAwOyIgZ2x5cGgtbmFtZT0ibWVkaWFfaW5lZmZlY3QiIGQ9Ik00OTcuMDY5IDg4MS4yNDl2LTQyNi43NDdoLTQzNC4wOTJ2NDI2Ljc0N2g0MzQuMDkyek01NjAuMTY2IDk0My4xNDJoLTU2MC4xNjZ2LTU1MC42NTNoNTYwLjE2NnY1NTAuNjUzek05NDIuNzIxIDQzOS4yMXYtNDI2Ljc0N2gtNDM0LjA5MnY0MjYuNzQ3aDQzNC4wOTJ6TTEwMDUuODE3IDUwMS4zNDNoLTU2MC4xNjZ2LTU1MC42NTNoNTYwLjE2NnY1NTAuNjUzek04MzcuMjM4IDYzMi41OTVsMTg2LjE2LTYuNjIzLTI3LjY5NSAxODAuOTgyLTUxLjc3OC01Ni45NTYtMjE5Ljg3NiAxOTMuMTQ0LTU1LjE1LTYwLjY4OSAyMjAuMTE3LTE5My4wMjQtNTEuNzc4LTU2LjgzNXpNMjAyLjQxNiAyNjQuMjQ4bC0xODUuNDM3IDE5LjYyNyAxNC42OS0xODIuNTQ4IDU1LjYzMSA1My4yMjMgMjA1LjA2NS0yMDcuMzUzIDU5LjQ4NCA1Ni44MzUtMjA1LjE4NSAyMDcuMTEyIDU1Ljc1MiA1My4xMDN6TTg0Ny43MTQtMzAuMjg0bDExOC44NDkgMTE2LjgwMnY0OC4yODZsLTE2Ny44NTctMTY1LjA4N2g0OS4wMDh6TTkyNS4zODEgNDYxLjM2NmgtMzMuNTk1bC00MDAuODU4LTM5My45OTR2LTQ4LjI4Nmw0NDIuMjggNDM0LjgxNS03LjgyNyA3LjQ2NnpNNjk2LjExMyA0NjEuMzY2bC0yMDUuMTg1LTIwMS42OTN2LTQ4LjI4NmwyNTQuMzE0IDI1MC4xLTQ5LjEyOS0wLjEyek02MDMuNzU1IDQ2MS4zNjZsLTExMi44MjgtMTEwLjc4MXYtNDguMjg2bDE2MS45NTcgMTU5LjE4N2gtNDkuMTI5di0wLjEyek03OTMuMjg3IDQ2MS4zNjZsLTMwMi4zNTktMjk3LjE4MnYtNDguMjg2bDM1MS40ODggMzQ1LjQ2OGgtNDkuMTI5ek03NTMuNDMtMzAuMjg0bDIxMy4yNTMgMjA5LjY0MXY0OC4yODZsLTI2Mi4zODItMjU3LjkyN2g0OS4xMjl6TTk2Ni42ODMgMzg1Ljc0NnY0Ny44MDRsLTAuMzYxIDAuMzYxLTQ1NC4zMjItNDQ2Ljk3NiAxNy41OC0xNy4yMTloMTMuODQ4bDQyMy4yNTUgNDE2LjAzMHpNNjUzLjM2Ni0zMC4yODRsMzEzLjE5NyAzMDcuODk4djQ4LjI4NmwtMzYyLjMyNS0zNTYuMTg0aDQ5LjEyOXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAxOyIgZ2x5cGgtbmFtZT0ibWVkaWFfZG93bmxvYWQiIGQ9Ik04NzQuODA3LTI4Ljk2aC03MjcuNjYxYy04MC4zMTYgMC0xNDUuNTggNjUuMDI0LTE0NS41OCAxNDUuNTh2MTgxLjk0NWMwIDIwLjEwOSAxNi4yNTYgMzYuMjQ1IDM2LjI0NSAzNi4yNDVoNzIuODVjMjAuMTA5IDAgMzYuMjQ1LTE2LjI1NiAzNi4yNDUtMzYuMjQ1di0xMDkuMzM2YzAtNDAuMDk4IDMyLjYzMi03Mi44NSA3Mi44NS03Mi44NWg1ODIuMzIyYzQwLjA5OCAwIDcyLjg1IDMyLjYzMiA3Mi44NSA3Mi44NXYxMDkuMzM2YzAgMjAuMTA5IDE2LjI1NiAzNi4yNDUgMzYuNDg1IDM2LjI0NWg3Mi44NWMyMC4xMDkgMCAzNi4yNDUtMTYuMjU2IDM2LjI0NS0zNi4yNDV2LTE4MS45NDVjLTAuMTItODAuNDM3LTY1LjE0NC0xNDUuNTgtMTQ1LjcwMS0xNDUuNTh2MHpNMjE1LjMgNjg1LjA5NWMxNC42OSAxNC42OSAzOC42NTMgMTQuNjkgNTMuMzQzIDBsMTY5Ljc4NC0xNjkuNzg0djM2Ni40MmMwIDIwLjEwOSAxNi4yNTYgMzYuNDg1IDM2LjI0NSAzNi40ODVoNzIuODVjMjAuMTA5IDAgMzYuNDg1LTE2LjI1NiAzNi40ODUtMzYuNDg1di0zNjYuNDJsMTY5Ljc4NCAxNjkuNzg0YzE0LjY5IDE0LjY5IDM4LjY1MyAxNC42OSA1My4zNDMgMGw1My40NjQtNTMuNDY0YzE0LjY5LTE0LjY5IDE0LjY5LTM4LjY1MyAwLTUzLjM0M2wtMzAwLjkxNC0zMDAuNDMzYy0xLjMyNS0xLjMyNS0yNC41NjQtMTUuNTMzLTQ4LjI4Ni0xNS42NTQtMjMuNzIyIDAtNDcuODA0IDE0LjIwOS00OS4wMDggMTUuNjU0bC0zMDAuNDMzIDMwMC40MzNjLTE0LjY5IDE0LjY5LTE0LjY5IDM4LjY1MyAwIDUzLjM0M2w1My4zNDMgNTMuNDY0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDI7IiBnbHlwaC1uYW1lPSJtZWRpYV9uZXciIGQ9Ik05ODIuNTc4IDQ5MC4wMjRoLTQyNi45ODh2NDI3LjQ2OWMwIDIzLjYwMS0xOS41MDcgNDIuNTA2LTQyLjUwNiA0Mi41MDYtMjMuMTE5IDAtNDIuNTA2LTE5LjUwNy00Mi41MDYtNDIuNTA2di00MjYuODY3aC00MjguMDcxYy0yMi45OTktMC42MDItNDIuNTA2LTE5Ljc0OC00Mi41MDYtNDMuMTA4czE5LjUwNy00Mi42MjcgNDIuNTA2LTQyLjYyN2g0MjYuODY3di00MjYuODY3YzAtMjMuNjAxIDE5LjUwNy00Mi41MDYgNDIuNTA2LTQyLjUwNiAyMy4xMTkgMCA0Mi41MDYgMTkuNTA3IDQyLjUwNiA0Mi41MDZ2NDI2Ljg2N2g0MjcuMjI5YzIzLjYwMSAwIDQyLjUwNiAxOS41MDcgNDIuNTA2IDQyLjUwNi0wLjEyIDIyLjk5OS0xOC41NDQgNDIuNjI3LTQxLjU0MyA0Mi42Mjd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMzsiIGdseXBoLW5hbWU9Im1lZGlhX2xvb3AiIGQ9Ik0xMDE1LjgxMiAzMjcuMjI1bC04NC42NTEgMTQyLjMyOWMwIDQuMzM1LTQuMzM1IDQuMzM1LTQuMzM1IDguOTExbC00LjMzNSA0LjMzNWMtNC4zMzUgMC00LjMzNSA0LjMzNS04LjkxMSA0LjMzNS00LjMzNSAwLTQuMzM1IDQuMzM1LTguOTExIDQuMzM1aC0xNy45NDJjLTQuMzM1IDAtNC4zMzUgMC04LjkxMS00LjMzNS00LjMzNSAwLTQuMzM1IDAtOC45MTEtNC4zMzVsLTE0Mi4zMjktODkuMjI3Yy0yMi4yNzctMTMuMzY2LTI2LjYxMS0zOS45NzctMTMuMzY2LTYyLjI1NCA4LjkxMS0xMy4zNjYgMjIuMjc3LTIyLjI3NyAzOS45NzctMjIuMjc3IDguOTExIDAgMTcuOTQyIDAgMjIuMjc3IDQuMzM1bDQ4Ljg4OCAzMS4wNjdjLTI2LjYxMS0xNjAuMDMwLTE2MC4yNzEtMjgwLjIwMy0zMjkuNDUyLTI4MC4yMDMtMTI0LjYyOCAwLTI0MC40NjcgNzEuMTY1LTI5OC4zODYgMTgyLjU0OC0xMy4zNjYgMjIuMjc3LTM5Ljk3NyAzMS4wNjctNTcuOTE5IDE3Ljk0Mi0yMi4yNzctNC4zMzUtMzEuMDY3LTMxLjA2Ny0xNy45NDItNTMuMzQzIDcxLjI4NS0xNDIuNDUgMjE4LjMxLTIzMS40MzYgMzc0LjEyNi0yMzEuNDM2IDIwOS4xNTkgMCAzODIuNzk2IDE1MS40ODEgNDE0LjEwMyAzNTEuNzI5bDMxLjA2Ny01My4zNDNjOC45MTEtMTMuMzY2IDIyLjI3Ny0yMi4yNzcgMzkuOTc3LTIyLjI3NyA4LjkxMSAwIDEzLjM2NiAwIDIyLjI3NyA0LjMzNSAxNy45NDIgMTcuODIxIDI2Ljg1MiA0NC41NTMgMTMuNjA3IDY2LjgzdjB6TTEyMC43NzUgMzk0LjA1NWwxMy4zNjYtMTMuMzY2YzQuMzM1LTQuMzM1IDEzLjM2Ni00LjMzNSAxNy45NDItNC4zMzUgNC4zMzUgMCA4LjkxMSAwIDE3Ljk0MiA0LjMzNSAwIDAgNC4zMzUgMCA0LjMzNSA0LjMzNSA0LjMzNSAwIDguOTExIDQuMzM1IDguOTExIDQuMzM1bDEyMC4xNzMgMTE1LjgzOGMxNy45NDIgMTcuOTQyIDE3Ljk0MiA0NC41NTMgMCA2Mi4yNTRzLTQ0LjU1MyAxNy45NDItNjIuMjU0IDBsLTUzLjM0My00OC42NDdjMTcuNTggMTY5LjA2MSAxNjQuNDg1IDI5OC4xNDUgMzMzLjY2NyAyOTguMTQ1IDEyNC42MjggMCAyNDAuNDY3LTcxLjE2NSAyOTMuOTMtMTg2Ljg4MiA4LjkxMS0yMi4yNzcgMzUuNjQzLTMxLjA2NyA1Ny45MTktMjIuMjc3IDIyLjI3NyA4LjkxMSAzMS4wNjcgMzUuNjQzIDIyLjI3NyA1Ny45MTktNzEuMjg1IDE0Mi4zMjktMjEzLjg1NSAyMzEuMTk1LTM3NC4xMjYgMjM1Ljc3aC00LjU3NmMtMjEzLjYxNCAwLTM4Ny4zNzItMTYwLjI3MS00MTguNDM4LTM2NS4wOTVsLTIyLjI3NyAzOS45NzdjLTE3Ljk0MiAxNy45NDItNDQuNTUzIDE3Ljk0Mi02Mi4yNTQgNC41NzYtMTcuOTQyLTE3Ljk0Mi0xNy45NDItNDQuNTUzLTQuMzM1LTYyLjI1NGwxMTEuMTQyLTEyNC42Mjh6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNDsiIGdseXBoLW5hbWU9Im1lZGlhX3ZvbHVtZSIgZD0iTTUwMS4xNjMgODc2LjU1M2MtNDIuMzg2IDE0LjA4OC05MS44NzYgNi45ODQtMTI3LjAzNy0yOC4yOTdsLTE2OS41NDMtMTc2LjI4NmgtOTguNjE5Yy02My40NTggMC0xMDUuOTY0LTQyLjM4Ni0xMDUuOTY0LTEwNS45NjR2LTIzMy4wMDFjMC02My40NTggNDIuMzg2LTEwNS45NjQgMTA1Ljk2NC0xMDUuOTY0aDk4Ljg2bDE2OS40MjItMTc2LjUyN2MyMS4zMTMtMjEuMzEzIDU2LjQ3NC0zNS40MDIgODQuNjUxLTM1LjQwMiAxNC4wODggMCAyOC4yOTcgMCA0Mi4zODYgNi45ODQgNDIuMzg2IDE0LjA4OCA2My40NTggNTYuNDc0IDYzLjQ1OCAxMDUuOTY0djk4Ljg2YzAgMjEuMzEzLTE0LjA4OCAzNS40MDItMzUuNDAyIDM1LjQwMnMtMzUuNDAyLTE0LjA4OC0zNS40MDItMzUuNDAydi05OC44NmMwLTIxLjMxMy02Ljk4NC0zNS40MDItMjEuMzEzLTQyLjM4Ni0xNC4wODgtNi45ODQtMzUuNDAyIDAtNDkuMjQ5IDE0LjA4OGwtMTgzLjM5IDE4NC4xMTNjLTYuOTg0IDYuOTg0LTE0LjA4OCAxNC4wODgtMjguMjk3IDE0LjA4OGgtMTA1LjcyM2MtMjguMjk3IDAtMzUuNDAyIDYuOTg0LTM1LjQwMiAzNS40MDJ2MjMyLjg4MWMwIDI4LjI5NyA2Ljk4NCAzNS40MDIgMzUuNDAyIDM1LjQwMmgxMTIuOTQ4YzYuOTg0IDAgMjEuMzEzIDYuOTg0IDI4LjI5NyAxNC4wODhsMTgzLjUxMSAxODMuNTExYzYuOTg0IDE0LjA4OCAyOC4yOTcgMjEuMzEzIDQyLjM4NiAxNC4wODggMTQuMDg4LTYuOTg0IDIxLjMxMy0yMS4zMTMgMjEuMzEzLTQyLjM4NnYtMTA1Ljk2NGMwLTIxLjMxMyAxNC4wODgtMzUuNDAyIDM1LjQwMi0zNS40MDJzMzUuNDAyIDE0LjA4OCAzNS40MDIgMzUuNDAydjEwNS45NjRjLTAuNjAyIDQ5LjM3LTIxLjY3NSA5MS41MTUtNjQuMDYwIDEwNS42MDN2MHpNODI1LjY3OCA0NTMuMDU3YzAgOTEuODc2LTU2LjQ3NCAxNzYuNTI3LTE0OC4xMDkgMjA0LjgyNC0xNC4wODggMC0zNS40MDItNi45ODQtNDIuMzg2LTI4LjI5Ny02Ljk4NC0xNC4wODggNi45ODQtMzUuNDAyIDI4LjI5Ny00Mi4zODYgNTYuNDc0LTIxLjMxMyA5OC44Ni03MC41NjMgOTguODYtMTM0LjAyMXMtNDIuMzg2LTExMi45NDgtOTguODYtMTM0LjAyMWMtMjEuMzEzLTYuOTg0LTI4LjI5Ny0yOC4yOTctMjEuMzEzLTQyLjM4NnMyMS4zMTMtMjEuMzEzIDM1LjQwMi0yMS4zMTNoMTQuMDg4Yzc3Ljc4NyAyMS4xOTMgMTM0LjAyMSAxMDUuOTY0IDEzNC4wMjEgMTk3LjU5OXYwek03NDguMTMyIDgxMy4yMTVjLTIxLjMxMyA2Ljk4NC0zNS40MDItNi45ODQtNDIuMzg2LTI4LjI5N3M2Ljk4NC0zNS40MDIgMjguMjk3LTQyLjM4NmMxMjcuMDM3LTM1LjQwMiAyMTguNjcyLTE1NS4yMTQgMjE4LjY3Mi0yODkuNDc1cy05MS42MzUtMjUzLjk1My0yMTguNjcyLTI4OS4yMzRjLTIxLjMxMy02Ljk4NC0yOC4yOTctMjEuMzEzLTI4LjI5Ny00Mi4zODYgNi45ODQtMTQuMDg4IDIxLjMxMy0yOC4yOTcgMzUuNDAyLTI4LjI5N2g2Ljk4NGMxNjIuNDM4IDQ5LjI0OSAyNzUuMzg3IDE5MC40OTUgMjc1LjM4NyAzNTkuOTE3cy0xMTIuOTQ4IDMxMC41NDgtMjc1LjM4NyAzNjAuMTU4djB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNTsiIGdseXBoLW5hbWU9Im1lZGlhX3ByZXZpZXciIGQ9Ik01MTIgODI5LjExYy0yMzIuMDM4IDAtNDMzLjM3LTE0NS4wOTktNTEyLTM0OS45MjMgNzguNjMtMjA0LjcwNCAyNzkuOTYyLTM0OS44MDIgNTEyLTM0OS44MDJzNDMzLjM3IDE0NS4wOTkgNTEyIDM0OS45MjNjLTc4LjM4OSAyMDQuNzA0LTI3OS43MjIgMzQ5LjgwMi01MTIgMzQ5LjgwMnpNNTEyIDI0Ny4wMjljLTEyOS44MDYgMC0yMzIuMDM4IDEwMi4zNTItMjMyLjAzOCAyMzIuMDM4czEwMi4zNTIgMjMyLjAzOCAyMzIuMDM4IDIzMi4wMzggMjMyLjAzOC0xMDIuMzUyIDIzMi4wMzgtMjMyLjAzOC0xMDIuMjMxLTIzMi4wMzgtMjMyLjAzOC0yMzIuMDM4ek01MTIgNjE5LjIyOWMtNzguNjMgMC0xMzkuOTIxLTU5LjYwNS0xMzkuOTIxLTEzOS45MjEgMC03OC42MyA1OS43MjUtMTM5LjkyMSAxMzkuOTIxLTEzOS45MjEgNzguNjMgMCAxMzkuOTIxIDU5LjcyNSAxMzkuOTIxIDEzOS45MjEgMC4yNDEgODAuMzE2LTYxLjI5MSAxMzkuOTIxLTEzOS45MjEgMTM5LjkyMXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA2OyIgZ2x5cGgtbmFtZT0ibWVkaWFfc3VzcGViZCIgZD0iTTY3NC4zMTggODg2LjY2OHYtODc2LjczNGMwLTQwLjA5OCAzMi44NzMtNzIuOTcxIDcyLjk3MS03Mi45NzFzNzIuOTcxIDMyLjg3MyA3Mi45NzEgNzIuOTcxdjg3Ni43MzRjMCA0MC4wOTgtMzIuODczIDcyLjk3MS03Mi45NzEgNzIuOTcxLTQwLjMzOSAwLjcyMi03Mi45NzEtMzEuOTEtNzIuOTcxLTcyLjk3MXYwek0zMjkuNjkzIDkuOTM0djg3Ni43MzRjMCA0MC4wOTgtMzIuODczIDcyLjk3MS03Mi45NzEgNzIuOTcxcy03Mi45NzEtMzIuODczLTcyLjk3MS03Mi45NzF2LTg3Ni43MzRjMC00MC4wOTggMzIuODczLTcyLjk3MSA3Mi45NzEtNzIuOTcxIDQwLjA5OCAwLjI0MSA3Mi45NzEgMzIuODczIDcyLjk3MSA3Mi45NzF2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA3OyIgZ2x5cGgtbmFtZT0ibWVkaWFfZW5kIiBkPSJNNDY2LjcyNC0xNi4zMTZjLTU2Ljk1NiA2MS43NzItMzQ1LjEwNiAzNzEuNTk3LTM0NS4xMDYgNTcyLjA4NyAwIDIyMi4yODQgMTgwLjc0MSA0MDMuMDI1IDQwMy4wMjUgNDAzLjAyNXM0MDMuMDI1LTE4MC43NDEgNDAzLjAyNS00MDMuMDI1YzAtMjAwLjEyOC0yODcuNTQ4LTUwOC42MjgtMzQ0Ljk4Ni01NzEuODQ2LTU4LjY0Mi02Mi4xMzQtNTguNjQyLTYyLjEzNC0xMTUuOTU5LTAuMjQxdjB6TTUyNC42NDMgODg1Ljk0NWMtMTgyLjA2NiAwLTMzMC4xNzUtMTQ4LjEwOS0zMzAuMTc1LTMzMC4xNzUgMC0xNzEuOTUxIDIwMy44NjEtMzkxLjM0NSAzMjUuNzItNTIyLjM1Nmw0LjIxNC00LjY5NiA0LjQ1NSA0LjgxN2MxMjEuODU5IDEzMS4xMzEgMzI1LjcyIDM1MC43NjYgMzI1LjcyIDUyMi4yMzUgMC4yNDEgMTgxLjk0NS0xNDcuOTg5IDMzMC4xNzUtMzI5LjkzNCAzMzAuMTc1djB6TTMyMy4xOTEgMzk4LjI2OWMtMy4zNzIgMTMuNzI3IDIuMjg4IDIyLjc1OCAxNy4wOTkgMjcuMzM0IDQxLjA2MSAxMC4yMzUgNzguMDI4IDIzLjk2MiAxMTEuMTQyIDQxLjA2MSAxMC4yMzUgMy4zNzIgMTkuMzg3IDAuNDgyIDI3LjMzNC04LjU0OSA5LjAzMS0xNy4wOTkgNi4yNjItMjkuMTQtOC41NDktMzUuODgzLTI5LjYyMi0xMi41MjMtNjYuNzA5LTI2LjEzLTExMS4xNDItNDEuMDYxLTIwLjQ3LTQuNTc2LTMyLjM5MSAxLjIwNC0zNS44ODMgMTcuMDk5djB6TTQwMy42MjcgNjU2LjQzN2gxMC4yMzVjMi4yODggMy4zNzIgNi44NjQgOS4wMzEgMTMuNzI3IDE3LjA5OSA1LjY1OSA2Ljg2NCAxMC4yMzUgMTIuNTIzIDEzLjcyNyAxNy4wOTkgMTEuNDM5IDEzLjcyNyAyNC40NDQgMTUuODk1IDM5LjM3NSA2Ljg2NCAxMC4yMzUtMTEuNDM5IDExLjQzOS0yMi43NTggMy4zNzItMzQuMTk4LTQuNTc2LTUuNjU5LTExLjQzOS0xNC4yMDktMjAuNDctMjUuNjQ4LTI5LjYyMi0zOS44NTctNDkuNjExLTY2LjcwOS01OS44NDYtODAuNDM3LTQuNTc2LTEwLjIzNS0xLjY4Ni0xNC44MTEgOC41NDktMTMuNzI3IDMuMzcyLTEuMjA0IDkuMDMxLTAuNDgyIDE3LjA5OSAxLjY4NiA0LjU3NiAxLjIwNCA4LjU0OSAyLjI4OCAxMS45MjEgMy4zNzIgMTIuNTIzIDEuMjA0IDIwLjQ3LTMuOTc0IDIzLjk2Mi0xNS40MTMgMi4yODgtMTUuODk1LTMuMzcyLTI1LjY0OC0xNy4wOTktMjkuMTQtMTQuODExLTQuNTc2LTI5LjE0LTguMDY4LTQyLjc0Ny0xMC4yMzUtMTMuNzI3LTEuMjA0LTI2LjEzLTEuNjg2LTM3LjY5LTEuNjg2LTIwLjQ3LTIuMjg4LTMyLjUxMiAyLjI4OC0zNS44ODMgMTMuNzI3LTQuNTc2IDguMDY4LTIuODkgMTkuOTg5IDUuMTc4IDM1Ljg4MyA0LjU3NiAxMC4yMzUgMTQuMjA5IDI1LjE2NyAyOS4xNCA0NC40MzMgOC4wNjggMTEuNDM5IDE0LjIwOSAyMC40NyAxOC43ODUgMjcuMzM0aC0zMi41MTJjLTE5LjM4NyAwLTI4LjUzOCA1LjY1OS0yNy4zMzQgMTcuMDk5LTEuMjA0IDEwLjIzNSAyLjg5IDIzLjQ4MSAxMS45MjEgMzkuMzc1IDMuMzcyIDQuNTc2IDEyLjUyMyAxOC4zMDMgMjcuMzM0IDQxLjA2MXMyNC40NDQgMzcuMDg3IDI5LjE0IDQyLjc0N2M5LjAzMSAxMy43MjcgMjEuNjc1IDE3LjU4IDM3LjY5IDExLjkyMSAxMi41MjMtOC4wNjggMTUuODk1LTE3LjU4IDEwLjIzNS0yOS4xNC02Ljg2NC0xNC44MTEtMjEuNjc1LTM3LjY5LTQ0LjQzMy02OC4zOTUtNC41NzYtNC41NzYtNi4yNjItOC4wNjgtNS4xNzgtMTAuMjM1IDAuODQzLTIuMTY3IDQuOTM3LTIuNjQ5IDExLjgwMS0xLjQ0NXYwek01ODYuNTM2IDc0MS44MWg4OC45ODZjMjMuOTYyLTIuMjg4IDMyLjAzMC0xNS44OTUgMjMuOTYyLTQxLjA2MS0xMi41MjMtNDMuMzQ5LTMyLjAzMC03OC4wMjgtNTguMTYtMTA0LjM5OSAxOC4zMDMtMTUuODk1IDM5Ljg1Ny0yOS42MjIgNjUuMDI0LTQxLjA2MSAxOC4zMDMtMTAuMjM1IDI0LjQ0NC0yMi43NTggMTguNzg1LTM3LjY5LTguMDY4LTE1Ljg5NS0yMi43NTgtMTcuNTgtNDQuNDMzLTUuMTc4LTI3LjMzNCAxMi41MjMtNTIuOTgyIDI5LjE0LTc2Ljk0NCA0OS42MTEtMzUuNDAyLTI3LjMzNC02Ny4xOTEtNDYuMjM5LTk1Ljg0OS01Ni40NzQtMjAuNDctOC4wNjgtMzIuOTkzLTMuOTc0LTM3LjY5IDExLjkyMS01LjY1OSAxNC44MTEgMC40ODIgMjYuMTMgMTguNzg1IDM0LjE5OCAzMC44MjYgMTEuNDM5IDU3LjU1OCAyNi44NTIgODAuNDM3IDQ2LjIzOS0xMi41MjMgMTEuNDM5LTIzLjQ4MSAyNC40NDQtMzIuNTEyIDM5LjM3NS0yLjI4OC0yLjI4OC00LjU3Ni01LjY1OS02Ljg2NC0xMC4yMzUtMy4zNzItNC41NzYtNi44NjQtOS4wMzEtMTAuMjM1LTEzLjcyNy0xMS40MzktMTIuNTIzLTIyLjc1OC0xNS40MTMtMzQuMTk4LTguNTQ5LTEzLjcyNyA4LjA2OC0xNS40MTMgMTkuOTg5LTUuMTc4IDM1Ljg4MyAyNS4xNjcgMzAuODI2IDQ0LjQzMyA2NS41MDUgNTguMTYgMTA0LjM5OSA0LjU3NiAxNC44MTEgMTQuMjA5IDIxLjA3MiAyOS4xNCAxOC43ODUgMTIuNDAzLTMuMjUxIDE4Ljc4NS0xMC41OTYgMTguNzg1LTIyLjAzNnYwek02ODMuODMxIDM2NS43NTdjLTUxLjI5NiAxMS40MzktMTA0Ljg4MSAyMS42NzUtMTYwLjYzMiAzMC44MjYtMTguMzAzIDMuMzcyLTI1LjE2NyAxMy43MjctMjAuNDcgMzAuODI2IDEuMjA0IDE0LjgxMSAxMS40MzkgMjEuMDcyIDMwLjgyNiAxOC43ODUgNzcuNTQ3LTEzLjcyNyAxMjkuMzI1LTIzLjQ4MSAxNTUuNTc1LTI5LjE0IDE1Ljg5NS0zLjM3MiAyMy40ODEtMTMuMTI1IDIyLjI3Ny0yOS4xNC0yLjQwOC0xNS44OTUtMTEuNDM5LTIzLjM2LTI3LjU3NS0yMi4xNTZ2MHpNNjI5LjI4MyA0NTkuODAxYy0xNS44OTUgNi44NjQtMzUuODgzIDEzLjcyNy01OS44NDYgMjAuNDctMy4zNzIgMS4yMDQtNS42NTkgMi4yODgtNi44NjQgMy4zNzItMTQuODExIDIuMjg4LTIwLjQ3IDExLjQzOS0xNy4wOTkgMjcuMzM0IDIuMjg4IDEyLjUyMyAxMC44MzcgMTguMzAzIDI1LjY0OCAxNy4wOTkgMjYuMTMtNS42NTkgNTEuMjk2LTE0LjIwOSA3NS4yNTktMjUuNjQ4IDE1Ljg5NS04LjA2OCAyMS42NzUtMTguMzAzIDE3LjA5OS0zMC44MjYtNS43OC0xNS44OTUtMTcuMDk5LTE5Ljc0OC0zNC4xOTgtMTEuODAxdjB6TTYzMi42NTUgNjk1LjgxMmgtNjMuMzM4Yy0yLjI4OC0zLjM3Mi0zLjk3NC03LjM0NS01LjE3OC0xMS45MjEgMjAuNDctMzAuODI2IDM0LjE5OC00OC40MDYgNDEuMDYxLTUyLjk4MiAxNC44MTEgMTcuMDk5IDI2LjEzIDM0LjY3OSAzNC4xOTggNTIuOTgyIDEuMjA0IDcuODI3LTEuMDg0IDExLjkyMS02Ljc0MyAxMS45MjF2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA4OyIgZ2x5cGgtbmFtZT0ibWVkaWFfcmVzdGFydCIgZD0iTTU4OC41ODMgODgwLjY0N3Y3OS4yMzJsLTI5Mi4yNDUtMTgyLjU0OCAyOTIuMTI0LTE4Mi42Njh2MTM3LjI3MmMxNDYuMTgzLTMzLjQ3NSAyNTUuNjM5LTE2My43NjMgMjU1LjYzOS0zMTkuODE5IDAtMTgxLjEwMy0xNDcuNTA3LTMyOC43My0zMjguNzMtMzI4Ljczcy0zMjguNDg5IDE0Ny4zODctMzI4LjQ4OSAzMjguNzNjMCA0MC40NTktMzIuNjMyIDczLjA5MS03My4wOTEgNzMuMDkxcy03Mi45NzEtMzIuNzUzLTcyLjk3MS03My4wOTFjMC0yNjEuNzggMjEzLjAxMi00NzQuNzkyIDQ3NC43OTItNDc0Ljc5MnM0NzQuOTEzIDIxMi44OTIgNDc0LjkxMyA0NzQuNzkyYy0wLjI0MSAyMzYuOTc1LTE3NC44NDEgNDMzLjEyOS00MDEuOTQyIDQ2OC41MzF2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA5OyIgZ2x5cGgtbmFtZT0ibWVkaWFfUFRaIiBkPSJNNTA5LjM1MSA5NTcuMTFjLTI4MS4yODcgMC01MDkuMzUxLTIyOC4wNjQtNTA5LjM1MS01MDkuMzUxczIyOC4wNjQtNTA5LjM1MSA1MDkuMzUxLTUwOS4zNTEgNTA5LjM1MSAyMjguMDY0IDUwOS4zNTEgNTA5LjM1MS0yMjguMDY0IDUwOS4zNTEtNTA5LjM1MSA1MDkuMzUxdjB6TTUwOS4zNTEgMTEuMjU5Yy0yNDAuNzA3IDAtNDM2LjUgMTk1LjkxMy00MzYuNSA0MzYuNSAwIDI0MC43MDcgMTk1LjkxMyA0MzYuNSA0MzYuNSA0MzYuNSAyNDAuNzA3IDAgNDM2LjUtMTk1LjkxMyA0MzYuNS00MzYuNSAwLTI0MC43MDctMTk1Ljc5My00MzYuNS00MzYuNS00MzYuNXYwek03NDAuOTA3IDI3Ni41MzFsLTEwMi45NTQgMTAyLjk1NC01MS41MzctNTEuNTM3IDEwMi45NTQtMTAyLjk1NC01MS41MzctNTEuNTM3IDE4MC4xMzktMjUuNjQ4LTI1LjY0OCAxODAuMTM5LTUxLjQxNy01MS40MTd6TTQwMi45MDUgMzc5LjQ4NGwtMTAyLjk1NC0xMDIuOTU0LTUxLjUzNyA1MS41MzctMjUuNjQ4LTE4MC4yNiAxODAuMTM5IDI1LjY0OC01MS41MzcgNTEuNTM3IDEwMi45NTQgMTAyLjk1NC01MS40MTcgNTEuNTM3ek02MzcuOTUzIDUxMS42OTlsMTAyLjk1NCAxMDIuODMzIDUxLjUzNy01MS41MzcgMjUuNjQ4IDE4MC4xMzktMTgwLjEzOS0yNS43NjkgNTEuNTM3LTUxLjUzNy0xMDIuOTU0LTEwMi41OTMgNTEuNDE3LTUxLjUzN3pNNDAyLjkwNSA3MTcuNDg2bC0xODAuMTM5IDI1Ljg4OSAyNS42NDgtMTgwLjEzOSA1MS41MzcgNTEuMjk2IDEwMi45NTQtMTAyLjgzMyA1MS41MzcgNTEuNTM3LTEwMi45NTQgMTAyLjgzMyA1MS40MTcgNTEuNDE3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGE7IiBnbHlwaC1uYW1lPSJtZWRpYV9yZXZlcnNlIiBkPSJNOC41NDkgNjcuMjUxbDI5MS4xNjEgMTY5LjU0M2M4Ljc5IDUuMDU3IDIwLjIzIDEuODA2IDI1LjI4Ny02Ljg2NGwxOC45MDUtMzIuODczYzUuMDU3LTguNzkgMS44MDYtMjAuODMyLTYuODY0LTI1Ljg4OWwtMTc4LjkzNS0xMDMuNzk3aDg0Ny44MzRjOS4zOTIgMCAxNi45NzgtNy41ODYgMTYuOTc4LTE2Ljk3OHYtMzUuNDAyYzAtOS4zOTItNy41ODYtMTYuOTc4LTE2Ljk3OC0xNi45NzhoLTk4OS4yYy05LjM5MiAwLTE2Ljk3OCA3LjU4Ni0xNi45NzggMTYuOTc4djM1LjQwMmMtMC42MDIgNi43NDMgMi41MjkgMTMuNzI3IDguNzkgMTYuODU4djB6TTguNTQ5IDM5My4wOTFsMjkxLjE2MSAxNjkuNTQzYzguNzkgNS4wNTcgMjAuMjMgMS44MDYgMjUuMjg3LTYuODY0bDE4LjkwNS0zMi44NzNjNS4wNTctOC43OSAxLjgwNi0yMC44MzItNi44NjQtMjUuODg5bC0xNzguOTM1LTEwMy43OTdoODM2Ljk5N2M5LjM5MiAwIDE2Ljk3OC03LjU4NiAxNi45NzgtMTYuOTc4di0zNS40MDJjMC05LjM5Mi03LjU4Ni0xNi45NzgtMTYuOTc4LTE2Ljk3OGgtOTc4Ljk2NWMtOS4zOTIgMC0xNi45NzggNy41ODYtMTYuOTc4IDE2Ljk3OHYzNS40MDJjMCA2Ljc0MyAzLjEzMSAxMy4wMDUgOS4zOTIgMTYuODU4djB6TS0wLjg0MyA3MDEuOTUzYzAgNi4yNjIgMy4yNTEgMTMuMjQ2IDkuMzkyIDE2LjM3NmwyOTEuMTYxIDE2OS40MjJjOC43OSA1LjA1NyAyMC4yMyAxLjgwNiAyNS4yODctNi44NjRsMTguOTA1LTMyLjg3M2M1LjA1Ny04Ljc5IDEuODA2LTIwLjgzMi02Ljg2NC0yNS44ODlsLTE3OC45MzUtMTAzLjc5N2g4NDcuODM0YzkuMzkyIDAgMTYuOTc4LTcuNTg2IDE2Ljk3OC0xNi45Nzh2LTM1LjQwMmMwLTkuMzkyLTcuNTg2LTE2Ljk3OC0xNi45NzgtMTYuOTc4aC05ODkuMmMtOS4zOTIgMC0xNi45NzggNy41ODYtMTYuOTc4IDE2Ljk3OHYzNC42NzljLTAuNjAyIDAuNzIyLTAuNjAyIDAuNzIyLTAuNjAyIDEuMzI1djB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwYjsiIGdseXBoLW5hbWU9Im1lZGlhX2JpZ2dlciIgZD0iTTEwMDIuNTY2IDMzLjI5NGwtMjM1LjA0OCAyMzUuODkxYzIyLjYzOCAyOS4xNCA0MS4zMDIgNjEuMDUwIDU1Ljc1MiA5NS4yNDcgMjIuMjc3IDUyLjc0MSAzMy41OTUgMTA4Ljk3NSAzMy41OTUgMTY2Ljc3MyAwIDU3LjkxOS0xMS4zMTkgMTE0LjAzMi0zMy41OTUgMTY2Ljc3My0yMS42NzUgNTEuMDU2LTUyLjM4IDk2LjkzMy05MS44NzYgMTM2LjE4OC0zOS4yNTUgMzkuMjU1LTg1LjI1MyA3MC4yMDEtMTM2LjE4OCA5MS44NzYtNTIuOTgyIDIyLjI3Ny0xMDguOTc1IDMzLjU5NS0xNjYuODk0IDMzLjU5NXMtMTE0LjAzMi0xMS4zMTktMTY2Ljc3My0zMy41OTVjLTUxLjA1Ni0yMS42NzUtOTYuOTMzLTUyLjM4LTEzNi4xODgtOTEuODc2LTM5LjI1NS0zOS4yNTUtNzAuMjAxLTg1LjI1My05MS44NzYtMTM2LjE4OC0yMi4yNzctNTIuNzQxLTMzLjU5NS0xMDguODU0LTMzLjU5NS0xNjYuNzczczExLjMxOS0xMTQuMDMyIDMzLjU5NS0xNjYuNzczYzIxLjY3NS01MS4wNTYgNTIuMzgtOTYuOTMzIDkxLjg3Ni0xMzYuMTg4IDM5LjI1NS0zOS4yNTUgODUuMjUzLTcwLjIwMSAxMzYuMTg4LTkxLjg3NiA1Mi43NDEtMjIuMjc3IDEwOC45NzUtMzMuNTk1IDE2Ni43NzMtMzMuNTk1IDU3LjkxOSAwIDExNC4wMzIgMTEuMzE5IDE2Ni43NzMgMzMuNTk1IDMzLjk1NyAxNC4zMjkgNjUuMzg1IDMyLjc1MyA5NC40MDUgNTUuMTVsMjM0LjkyOC0yMzUuNTNjMjEuMzEzLTIxLjY3NSA1Ni4yMzMtMjEuNjc1IDc3Ljc4Ny0wLjM2MSAyMS42NzUgMjEuMzEzIDIxLjc5NSA1Ni4xMTMgMC4zNjEgNzcuNjY3djB6TTQyOC4zMTIgMjExLjc0OGMtODUuMzczIDAtMTY1LjU2OSAzMy4yMzQtMjI1Ljg5NyA5My41NjItNjAuNDQ4IDYwLjQ0OC05My41NjIgMTQwLjY0My05My41NjIgMjI1Ljg5NyAwIDg1LjM3MyAzMy4yMzQgMTY1LjU2OSA5My41NjIgMjI1Ljg5NyA2MC40NDggNjAuMjA3IDE0MC42NDMgOTMuNTYyIDIyNS44OTcgOTMuNTYyIDg1LjM3MyAwIDE2NS41NjktMzMuMjM0IDIyNS44OTctOTMuNTYyIDYwLjIwNy02MC40NDggOTMuNTYyLTE0MC42NDMgOTMuNTYyLTIyNS44OTcgMC04NS4zNzMtMzMuMjM0LTE2NS41NjktOTMuNTYyLTIyNS44OTctNjAuMzI3LTYwLjQ0OC0xNDAuNTIzLTkzLjU2Mi0yMjUuODk3LTkzLjU2MnYwek02MTcuODQ0IDU2OC42NTVoLTE1Mi4wODN2MTUyLjIwM2MwIDIwLjU5MS0xNi44NTggMzcuNDQ5LTM3LjQ0OSAzNy40NDlzLTM3LjQ0OS0xNi44NTgtMzcuNDQ5LTM3LjQ0OXYtMTUyLjIwM2gtMTUyLjIwM2MtMjAuNTkxIDAtMzcuNDQ5LTE2Ljg1OC0zNy40NDktMzcuNDQ5czE2Ljg1OC0zNy40NDkgMzcuNDQ5LTM3LjQ0OWgxNTIuMDgzdi0xNTIuMDgzYzAtMjAuNTkxIDE2Ljg1OC0zNy40NDkgMzcuNDQ5LTM3LjQ0OXMzNy40NDkgMTYuODU4IDM3LjQ0OSAzNy40NDl2MTUyLjA4M2gxNTIuMDgzYzIwLjU5MSAwIDM3LjQ0OSAxNi44NTggMzcuNDQ5IDM3LjQ0OSAwLjEyIDIwLjU5MS0xNi42MTcgMzcuNDQ5LTM3LjMyOCAzNy40NDl2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBjOyIgZ2x5cGgtbmFtZT0ibWVkaWFfcmVjb3ZlcnkiIGQ9Ik0wLjg0MyA5NjB2LTEwMjMuMTU3aDEwMjMuMTU3djEwMjMuMTU3aC0xMDIzLjE1N3pNOTYxLjE0NC0wLjMwMWgtODk3LjQ0NXY4OTcuNDQ1aDg5Ny40NDV2LTg5Ny40NDV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwZDsiIGdseXBoLW5hbWU9Im1lZGlhX3VwZG93biIgZD0iTTc2OS4zMjUgNDgyLjkydi02OS44NGwtNDY5LjczNS00NzcuMDgwdjg5LjEwNmw0MjAuNjA2IDQxOC45MnY1Ljc4bC00MjAuNjA2IDQyMC45Njd2ODkuMjI3bDQ2OS43MzUtNDc3LjA4MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBlOyIgZ2x5cGgtbmFtZT0ibWVkaWFfc21hbGxlciIgZD0iTTQxOC4zMTggOTYwYzU2LjcxNSAwIDExMC43ODEtMTEuMDc4IDE2Mi41NTktMzMuMzU1IDUxLjc3OC0yMi4wMzYgOTYuMDkwLTUxLjg5OCAxMzMuNDE5LTg5LjIyN3M2Ni45NS04MS44ODEgODkuMjI3LTEzMy40MTljMjIuMDM2LTUxLjc3OCAzMy4xMTQtMTA1LjcyMyAzMy4zNTUtMTYyLjU1OSAwLTQ4LjY0Ny03LjgyNy05NS4yNDctMjMuNzIyLTEzOS44MDFzLTM4LjUzMi04NS4wMTItNjcuNzkzLTEyMS4zNzdsMjYzLjcwNi0yNjMuNDY2YzguOTExLTguOTExIDEzLjM2Ni0xOS44NjggMTMuMzY2LTMyLjk5MyAwLTEzLjM2Ni00LjMzNS0yNC40NDQtMTMuMjQ2LTMzLjM1NXMtMTkuODY4LTEzLjI0Ni0zMy4zNTUtMTMuMjQ2Yy0xMy4wMDUgMC0yNC4wODMgNC41NzYtMzIuOTkzIDEzLjM2NmwtMjYzLjU4NiAyNjQuMDY4Yy0zNi4zNjUtMjkuMjYxLTc2LjgyNC01MS44OTgtMTIxLjM3Ny02Ny43OTNzLTkxLjI3NC0yMy43MjItMTM5LjgwMS0yMy43MjJjLTU2LjcxNSAwLTExMC43ODEgMTEuMDc4LTE2Mi41NTkgMzMuMzU1LTUxLjc3OCAyMi4wMzYtOTYuMjExIDUxLjg5OC0xMzMuNDE5IDg5LjIyNy0zNy4zMjggMzcuMzI4LTY2Ljk1IDgxLjg4MS04OS4yMjcgMTMzLjQxOS0yMi4wMzYgNTEuNzc4LTMzLjExNCAxMDUuNzIzLTMzLjExNCAxNjIuNTU5IDAgNTYuNTk1IDExLjA3OCAxMTAuNzgxIDMzLjM1NSAxNjIuNTU5IDIyLjAzNiA1MS43NzggNTEuODk4IDk2LjA5MCA4OC45ODYgMTMzLjQxOSAzNy4zMjggMzcuMzI4IDgxLjY0MSA2Ni45NSAxMzMuNDE5IDg5LjIyNyA1MS44OTggMjEuOTE1IDEwNS45NjQgMzIuOTkzIDE2Mi44IDMzLjExNHYwek00MTguMzE4IDg2Ni45MmMtNDQuMDcxIDAtODYuMjE2LTguNTQ5LTEyNi4zMTQtMjUuNzY5LTQwLjIxOC0xNy4yMTktNzQuNzc3LTQwLjMzOS0xMDMuOTE3LTY5LjQ3OXMtNTIuMjYtNjMuNTc5LTY5LjQ3OS0xMDMuOTE3Yy0xNy4zNC00MC4yMTgtMjUuODg5LTgyLjM2My0yNS44ODktMTI2LjMxNHM4LjU0OS04Ni4yMTYgMjUuNzY5LTEyNi4zMTQgNDAuMzM5LTc0Ljc3NyA2OS40NzktMTAzLjkxN2MyOS4xNC0yOS4xNCA2My41NzktNTIuMjYgMTAzLjkxNy02OS4yMzggNDAuMjE4LTE3LjIxOSA4Mi4zNjMtMjUuNzY5IDEyNi4zMTQtMjUuNzY5czg2LjIxNiA4LjU0OSAxMjYuMzE0IDI1Ljc2OWM0MC4yMTggMTcuMjE5IDc0Ljc3NyA0MC4zMzkgMTAzLjkxNyA2OS4yMzggMjkuMTQgMjkuMTQgNTIuMjYgNjMuNTc5IDY5LjQ3OSAxMDMuOTE3IDE3LjIxOSA0MC4yMTggMjUuNzY5IDgyLjM2MyAyNS43NjkgMTI2LjMxNHMtOC41NDkgODYuMjE2LTI1Ljc2OSAxMjYuMzE0Yy0xNy4yMTkgNDAuMjE4LTQwLjMzOSA3NC43NzctNjkuNDc5IDEwMy45MTdzLTYzLjU3OSA1Mi4yNi0xMDMuOTE3IDY5LjQ3OWMtNDAuMDk4IDE3LjIxOS04Mi4yNDMgMjUuNzY5LTEyNi4xOTQgMjUuNzY5djB6TTI3OC42MzggNTg4LjA0MWgyNzguODc5YzEyLjg4NCAwIDIzLjcyMi00LjU3NiAzMi43NTMtMTMuNjA3czEzLjYwNy0yMC4xMDkgMTMuNjA3LTMyLjc1M2MwLTEyLjg4NC00LjU3Ni0yMy43MjItMTMuNjA3LTMyLjc1M3MtMjAuMTA5LTEzLjYwNy0zMi43NTMtMTMuNjA3aC0yNzguODc5Yy0xMi44ODQgMC0yMy43MjIgNC41NzYtMzIuNzUzIDEzLjYwN3MtMTMuNjA3IDIwLjEwOS0xMy42MDcgMzIuNzUzYzAgMTIuODg0IDQuNTc2IDIzLjcyMiAxMy42MDcgMzIuNzUzczIwLjEwOSAxMy42MDcgMzIuNzUzIDEzLjYwN3YweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGY7IiBnbHlwaC1uYW1lPSJtZWRpYV92aWRlcnRhcGUiIGQ9Ik0zOTcuNzI3IDMwMi4yOTlsMjU1LjUxOCAxMjcuNzU5YzIzLjQ4MSAxMS44MDEgMjMuNDgxIDQ1LjI3NiAwIDU3LjA3NmwtMjU1LjUxOCAxMjcuNzU5Yy0yMS4zMTMgMTAuNTk2LTQ2LjM1OS00LjgxNy00Ni4zNTktMjguNTM4di0yNTUuNTE4YzAtMjMuODQyIDI1LjA0Ni0zOS4xMzUgNDYuMzU5LTI4LjUzOHYwek05MjYuODI2IDg0MS45OTRoLTgzMS4zMzhjLTUyLjUgMC05NS40ODgtNDMuMjI5LTk1LjQ4OC05Ni4zMzF2LTU3NC4xMzRjMC01My4yMjMgNDIuNjI3LTk2LjMzMSA5NS40ODgtOTYuMzMxaDgzMS4zMzhjNTIuNSAwIDk1LjQ4OCA0My4zNDkgOTUuNDg4IDk2LjMzMXY1NzQuMTM0YzAgNTMuMjIzLTQyLjYyNyA5Ni4zMzEtOTUuNDg4IDk2LjMzMXYwek0xOTEuNjk5IDE3MS40MDljMC0xNy44MjEtMTMuNjA3LTMyLjI3MS0zMi4yNzEtMzIuMjcxaC02My4yMTdjLTE3LjgyMSAwLTMyLjI3MSAxMy42MDctMzIuMjcxIDMyLjI3MXY2My4zMzhjMCAxNy44MjEgMTMuNjA3IDMyLjI3MSAzMi4yNzEgMzIuMjcxaDYzLjMzOGMxNy44MjEgMCAzMi4yNzEtMTMuNjA3IDMyLjI3MS0zMi4yNzF2LTYzLjMzOHpNMTkxLjY5OSA0MjcuMDQ4YzAtMTcuODIxLTEzLjYwNy0zMi4yNzEtMzIuMjcxLTMyLjI3MWgtNjMuMjE3Yy0xNy44MjEgMC0zMi4yNzEgMTMuNjA3LTMyLjI3MSAzMi4yNzF2NjMuMzM4YzAgMTcuODIxIDEzLjYwNyAzMi4yNzEgMzIuMjcxIDMyLjI3MWg2My4zMzhjMTcuODIxIDAgMzIuMjcxLTEzLjYwNyAzMi4yNzEtMzIuMjcxdi02My4zMzh6TTE5MS42OTkgNjgyLjU2NmMwLTE3LjgyMS0xMy42MDctMzIuMjcxLTMyLjI3MS0zMi4yNzFoLTYzLjIxN2MtMTcuODIxIDAtMzIuMjcxIDEzLjYwNy0zMi4yNzEgMzIuMjcxdjYzLjMzOGMwIDE3LjgyMSAxMy42MDcgMzIuMjcxIDMyLjI3MSAzMi4yNzFoNjMuMzM4YzE3LjgyMSAwIDMyLjI3MS0xMy42MDcgMzIuMjcxLTMyLjI3MXYtNjMuMzM4ek03NjYuNjc1IDEzOS4xMzhoLTUxMS4xNTd2NjM4LjkxNmg1MTEuMTU3di02MzguOTE2ek05NTguMzc0IDE3MS40MDljMC0xNy44MjEtMTMuNjA3LTMyLjI3MS0zMi4yNzEtMzIuMjcxaC02My4zMzhjLTE3LjgyMSAwLTMyLjI3MSAxMy42MDctMzIuMjcxIDMyLjI3MXY2My4zMzhjMCAxNy44MjEgMTMuNjA3IDMyLjI3MSAzMi4yNzEgMzIuMjcxaDYzLjMzOGMxNy44MjEgMCAzMi4yNzEtMTMuNjA3IDMyLjI3MS0zMi4yNzF2LTYzLjMzOHpNOTU4LjM3NCA0MjcuMDQ4YzAtMTcuODIxLTEzLjYwNy0zMi4yNzEtMzIuMjcxLTMyLjI3MWgtNjMuMzM4Yy0xNy44MjEgMC0zMi4yNzEgMTMuNjA3LTMyLjI3MSAzMi4yNzF2NjMuMzM4YzAgMTcuODIxIDEzLjYwNyAzMi4yNzEgMzIuMjcxIDMyLjI3MWg2My4zMzhjMTcuODIxIDAgMzIuMjcxLTEzLjYwNyAzMi4yNzEtMzIuMjcxdi02My4zMzh6TTk1OC4zNzQgNjgyLjU2NmMwLTE3LjgyMS0xMy42MDctMzIuMjcxLTMyLjI3MS0zMi4yNzFoLTYzLjMzOGMtMTcuODIxIDAtMzIuMjcxIDEzLjYwNy0zMi4yNzEgMzIuMjcxdjYzLjMzOGMwIDE3LjgyMSAxMy42MDcgMzIuMjcxIDMyLjI3MSAzMi4yNzFoNjMuMzM4YzE3LjgyMSAwIDMyLjI3MS0xMy42MDcgMzIuMjcxLTMyLjI3MXYtNjMuMzM4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTA7IiBnbHlwaC1uYW1lPSJtZWRpYV9iYWNrd2FyZCIgZD0iTTU0LjMwNyA1NDEuNTYybDUwNy41NDUgMzAwLjA3MWMzMy40NzUgMTkuODY4IDc1LjAxOCAyMC4yMyAxMDguODU0IDAuODQzIDMzLjcxNi0xOS4zODcgNTQuNjY4LTU1LjI3IDU0LjQyNy05NC4wNDNsLTAuOTYzLTYwMi4xOWMtMC4xMi0zOC44OTQtMjEuMDcyLTc0LjY1Ny01NC43ODgtOTMuOTIzcy03NS4zNzktMTguNjY0LTEwOC44NTQgMS4yMDRsLTUwNi40NjEgMzAyLjExOWMtMzIuODczIDE5LjUwNy01Mi45ODIgNTUuMDI5LTUyLjg2MiA5My4wODBzMjAuMjMgNzMuNTczIDUzLjEwMyA5Mi45NnYtMC4xMnpNOTUwLjY2OCAxMi45NDRoLTYuNTAyYy0zOS43MzcgMC4xMi03MS44ODcgMzIuMjcxLTcxLjY0NiA3Mi4wMDhsMS4zMjUgNzIxLjUyYzAuMTIgMzkuNzM3IDMyLjI3MSA3MS44ODcgNzIuMDA4IDcxLjY0Nmg2LjUwMmMzOS43MzctMC4xMiA3MS44ODctMzIuMjcxIDcxLjY0Ni03Mi4wMDhsLTEuMzI1LTcyMS41MmMwLTM5LjczNy0zMi4yNzEtNzEuODg3LTcyLjAwOC03MS42NDZ2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTExOyIgZ2x5cGgtbmFtZT0ibWVkaWFfZnVsbHNjcmVlbiIgZD0iTTQxOS4yODEgNDEuMjQyaC0yNDAuNDY3bDI2NC4zMDkgMjYzLjk0N2MxOC4wNjIgMTkuNzQ4IDE3LjM0IDUwLjIxMy0xLjY4NiA2OS4xMTgtMTguOTA1IDE4LjkwNS00OS4zNyAxOS43NDgtNjkuMTE4IDEuNjg2bC0yNjguMjgyLTI2OC4wNDF2MjM4LjA1OGMwIDI3LjU3NS0yMi4zOTcgNTAuMDkyLTUwLjA5MiA1MC4wOTJzLTUwLjA5Mi0yMi4zOTctNTAuMDkyLTUwLjA5MnYtMzU0LjczOWMwLTI3LjU3NSAyMi4zOTctNDkuOTcyIDUwLjA5Mi00OS45NzJoMzY1LjIxNWMyNi44NTIgMS4yMDQgNDguMDQ1IDIzLjI0IDQ4LjA0NSA0OS45NzIgMC4yNDEgMjYuODUyLTIxLjE5MyA0OC44ODgtNDcuOTI1IDQ5Ljk3MnYwek05NzIuMzQyIDk2MGgtMzY1LjIxNWMtMTguNDIzIDAuNzIyLTM1Ljc2My04LjU0OS00NS4wMzUtMjQuMzI0LTkuNTEzLTE1Ljg5NS05LjUxMy0zNS40MDIgMC01MS4yOTZzMjYuNzMyLTI1LjA0NiA0NS4wMzUtMjQuMzI0aDI0MC4yMjZsLTI2NC4wNjgtMjY0LjA2OGMtMTQuMzI5LTE0LjMyOS0xOC42NjQtMzUuODgzLTExLjA3OC01NC41NDggNy43MDYtMTguNjY0IDI2LjAwOS0zMC44MjYgNDYuMzU5LTMwLjgyNiAxMy4zNjYgMCAyNi4wMDkgNS4xNzggMzUuNDAyIDE0LjY5bDI2OC4xNjIgMjY3LjkyMXYtMjM4LjA1OGMwLTI3LjU3NSAyMi4zOTctNTAuMDkyIDUwLjA5Mi01MC4wOTIgMjcuNTc1IDAgNTAuMDkyIDIyLjM5NyA1MC4wOTIgNTAuMDkydjM1NC44NmMwIDEzLjM2Ni01LjI5OCAyNi4wMDktMTQuNjkgMzUuNDAyLTkuMTUxIDkuMzkyLTIxLjkxNSAxNC41Ny0zNS4yODEgMTQuNTd2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTEyOyIgZ2x5cGgtbmFtZT0ibWVkaWFfbmFycm93IiBkPSJNNTEyLjEyIDEwMC40ODVjMC0yMy43MjItMTkuNzQ4LTQzLjIyOS00My4yMjktNDMuMjI5LTExLjU2IDAtMjIuMzk3IDQuODE3LTMwLjM0NCAxMi44ODRsLTk3LjUzNSA5Ny41MzUtMjI0LjgxMy0yMjQuODEzYy0zLjk3NC0zLjk3NC0xMC4yMzUtNi44NjQtMTUuNTMzLTYuODY0LTUuNTM5IDAtMTEuNTYgMi42NDktMTUuNTMzIDYuODY0bC03Ny4wNjUgNzcuMDY1Yy0zLjk3NCAzLjk3NC02Ljg2NCAxMC4yMzUtNi44NjQgMTUuNTMzIDAgNS41MzkgMi42NDkgMTEuNTYgNi44NjQgMTUuNTMzbDIyNC41NzIgMjI0LjU3Mi05Ny41MzUgOTcuNTM1Yy04LjA2OCA4LjA2OC0xMi44ODQgMTguOTA1LTEyLjg4NCAzMC4zNDQgMCAyMy43MjIgMTkuNzQ4IDQzLjIyOSA0My4yMjkgNDMuMjI5aDMwMy4yMDJjMjMuNzIyIDAgNDMuMjI5LTE5Ljc0OCA0My4yMjktNDMuMjI5di0zMDMuMDgyaDAuMjQxek0xMDE2LjE3MyA4NDIuODM3bC0yMjQuNTcyLTIyNC44MTMgOTcuNTM1LTk3LjUzNWM4LjA2OC04LjA2OCAxMi44ODQtMTguOTA1IDEyLjg4NC0zMC4zNDQgMC0yMy43MjItMTkuNzQ4LTQzLjIyOS00My4yMjktNDMuMjI5aC0zMDMuNDQzYy0yMy43MjIgMC00My4yMjkgMTkuNzQ4LTQzLjIyOSA0My4yMjl2MzAzLjIwMmMwIDIzLjcyMiAxOS43NDggNDMuMjI5IDQzLjIyOSA0My4yMjkgMTEuNTYgMCAyMi4zOTctNC44MTcgMzAuMzQ0LTEyLjg4NGw5Ny41MzUtOTcuNTM1IDIyNC44MTMgMjI0LjgxM2MzLjk3NCAzLjk3NCAxMC4yMzUgNi44NjQgMTUuNTMzIDYuODY0IDUuNTM5IDAgMTEuNTYtMi42NDkgMTUuNTMzLTYuODY0bDc3LjE4NS03Ny4xODVjMy45NzQtMy45NzQgNi44NjQtMTAuMjM1IDYuODY0LTE1LjUzMy0wLjEyLTUuNDE5LTIuNzctMTEuNDM5LTYuOTg0LTE1LjQxM3YweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTM7IiBnbHlwaC1uYW1lPSJtZWRpYV9zdG9wIiBkPSJNMTAyNCA2Ni40MDhjMC03Mi4wMDgtNTguNTIxLTEzMC40MDgtMTMwLjY0OS0xMzAuNDA4aC03NjIuNzAyYy03Mi4xMjggMC0xMzAuNjQ5IDU4LjUyMS0xMzAuNjQ5IDEzMC40MDh2NzYzLjE4M2MwIDcxLjg4NyA1OC41MjEgMTMwLjQwOCAxMzAuNjQ5IDEzMC40MDhoNzYyLjcwMmM3Mi4xMjggMCAxMzAuNjQ5LTU4LjUyMSAxMzAuNjQ5LTEzMC40MDh2LTc2My4xODN6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxNDsiIGdseXBoLW5hbWU9Im1lZGlhX2RlY3JlYXNlIiBkPSJNMjYzLjk0NyA0OTIuNzk0aDQ5Ni4xMDV2LTM2LjEyNGgtNDk2LjEwNXYzNi4xMjR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxNTsiIGdseXBoLW5hbWU9Im1lZGlhX2xvdWRlciIgZD0iTTc3My43OCA0NTcuMzkyaC0yNjEuMTc4djIzMy43MjNoLTMzLjM1NXYtMjMzLjcyM2gtMjUwLjQ2MXYtMzMuMzU1aDI1MC40NjF2LTIzMy40ODNoMzMuMzU1djIzMy40ODNoMjYxLjE3OHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTE2OyIgZ2x5cGgtbmFtZT0ibWVkaWFfZWRpdCIgZD0iTTAgMjUwLjY0MnYtMzEyLjk1NmgzMTIuOTU2bDU5OC40NTcgNTk4LjQ1Ny0zMTIuOTU2IDMxMi45NTYtNTk4LjQ1Ny01OTguNDU3ek0yNjkuMTI1IDQ3LjUwM2gtMTU5LjMwOHYxNTMuNjQ4bDQ4OC42NCA0ODguNjQgMTUzLjc2OS0xNTMuNzY5LTQ4My4xMDEtNDg4LjUxOXpNOTg4LjM1NyA3NzIuMjc1bC0xNTMuNzY5IDE1My43NjljLTQzLjk1MSA0My45NTEtMTA5LjgxNyA0My45NTEtMTUzLjc2OSAwbC00My45NTEtMzguNDEyIDMxMi44MzUtMzEyLjk1NiAzOC40MTIgMzguNDEyYzQ0LjE5MiA0My44MzEgNDQuMTkyIDExNS4xMTYgMC4yNDEgMTU5LjE4N3YweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTc7IiBnbHlwaC1uYW1lPSJtZWRpYV9wbGF5IiBkPSJNMjY2Ljk1OCA5NDMuNzQ0bDY0MC44NDMtNDAyLjc4NWM3My40NTItNDEuOTA0IDczLjQ1Mi0xNDUuMjE5IDAtMTg3LjI0NGwtNjQwLjg0My00MDIuNjY0Yy03My41NzMtNDIuMTQ1LTE2NS44MSAxMC41OTYtMTY1LjgxIDkzLjQ0MXY4MDUuNTY5YzEuMDg0IDgyLjk2NSA5Mi4yMzcgMTM1LjU4NiAxNjUuODEgOTMuNjgyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTg7IiBnbHlwaC1uYW1lPSJ2bWVkaWFfc2NyZWVuc2hvdHMiIGQ9Ik05OTkuMTk1IDg3Mi43aC05MjcuMTg3Yy0xMy42MDcgMC0yNC44MDUtMTEuMTk4LTI0LjgwNS0yNC44MDV2LTM4Ljc3M2MtNy45NDctMC4zNjEtNDcuMjAyLTMuOTc0LTQ3LjIwMi00OC40MDZoNDcuMjAydi0wLjEyaC00Ny4yMDJ2LTY2My4zNmMwIDAgMi4wNDctNDguNTI3IDQ4LjUyNy00OC41MjdsODUxLjU2NyAwLjEyYzQ3LjMyMyAwLjk2MyA1MC4zMzMgNDguNTI3IDUwLjMzMyA0OC41Mjd2MjkuNTAxaDQ4LjY0N2MxMy42MDcgMCAyNC44MDUgMTEuMTk4IDI0LjgwNSAyNC44MDV2Njk2LjIzM2MwLjEyIDEzLjYwNy0xMS4wNzggMjQuODA1LTI0LjY4NSAyNC44MDV6TTg5OS45NzQgMTg4Ljg2OWgtOTIuNzE5bC0xODkuMDUwIDE5MS45NC0xNDIuNTctMTQzLjI5My0xOTMuNzQ2IDIzOS4yNjItMTgwLjEzOS0yNjkuODQ4djU1My43ODRoNzk4LjIyNHYtNTcxLjg0NnpNOTc0LjI2OSAxODcuNTQ1aC0yMy44NDJ2NTczLjE3YzAgNDQuNDMzLTUwLjU3NCA0OC40MDYtNTAuNTc0IDQ4LjQwNmgtNzk4LjEwM3YzLjk3NGg4NzIuNTE5di02MjUuNTV6TTcxMS4wNDQgNDc2Ljc3OWMxMDQuODgxIDIuMDQ3IDk1Ljg0OSA5NC4wNDMgOTUuODQ5IDk0LjA0MyAwIDk1LjAwNy05NS44NDkgOTQuMDQzLTk1Ljg0OSA5NC4wNDMtOTQuMDQzLTguNzktOTIuOTYtOTQuMDQzLTkyLjk2LTk0LjA0My0wLjg0My05Ni4wOTAgOTIuOTYtOTQuMDQzIDkyLjk2LTk0LjA0M3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTE5OyIgZ2x5cGgtbmFtZT0ibWVkaWFfc3BsaXRzY3JlZW4iIGQ9Ik04NzUuNzcgNDEzLjJoLTcyNy4zYy03NC44OTcgMC0xMzYuNDI5LTYxLjI5MS0xMzYuNDI5LTEzNi4zMDl2LTIwNC41ODNjMC03NC44OTcgNjEuMjkxLTEzNi40MjkgMTM2LjQyOS0xMzYuNDI5aDcyNy4zYzc0Ljg5NyAwIDEzNi40MjkgNjEuMjkxIDEzNi40MjkgMTM2LjQyOXYyMDQuNzA0Yy0wLjI0MSA3NC44OTctNjEuNTMyIDEzNi4xODgtMTM2LjQyOSAxMzYuMTg4djB6TTkyMS4xNjcgNzIuNDI5YzAtMjQuOTI2LTIwLjM1LTQ1LjUxNi00NS41MTYtNDUuNTE2aC03MjcuMThjLTI0LjkyNiAwLTQ1LjUxNiAyMC4zNS00NS41MTYgNDUuNTE2djIwNC41ODNjMCAyNC45MjYgMjAuMzUgNDUuNTE2IDQ1LjUxNiA0NS41MTZoNzI3LjNjMjQuOTI2IDAgNDUuNTE2LTIwLjM1IDQ1LjUxNi00NS41MTZ2LTIwNC41ODNoLTAuMTJ6TTg3NS43NyA5NTguNzk2aC03MjcuM2MtNzUuMTM4IDAtMTM2LjQyOS02MS4yOTEtMTM2LjQyOS0xMzYuNDI5di0yMDQuNTgzYzAtNzQuODk3IDYxLjI5MS0xMzYuNDI5IDEzNi40MjktMTM2LjQyOWg3MjcuM2M3NC44OTcgMCAxMzYuNDI5IDYxLjI5MSAxMzYuNDI5IDEzNi40Mjl2MjA0LjU4M2MtMC4yNDEgNzUuMTM4LTYxLjUzMiAxMzYuNDI5LTEzNi40MjkgMTM2LjQyOXYwek05MjEuMTY3IDYxNy43ODRjMC0yNC45MjYtMjAuMzUtNDUuNTE2LTQ1LjUxNi00NS41MTZoLTcyNy4xOGMtMjQuOTI2IDAtNDUuNTE2IDIwLjM1LTQ1LjUxNiA0NS41MTZ2MjA0LjU4M2MwIDI0LjkyNiAyMC4zNSA0NS41MTYgNDUuNTE2IDQ1LjUxNmg3MjcuM2MyNC45MjYgMCA0NS41MTYtMjAuMzUgNDUuNTE2LTQ1LjUxNnYtMjA0LjU4M2gtMC4xMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTFhOyIgZ2x5cGgtbmFtZT0ibWVkaWFfc2xvdyIgZD0iTTE0NS43MDEgMjAzLjU2YzE0LjQ1IDAgMjYuMjUgMTEuODAxIDI2LjI1IDI2LjI1bDAuMzYxIDE3My43NTcgMzEzLjU1OC0xNzMuODc4YzEwLjExNS01LjY1OSAyMS42NzUtNS42NTkgMzEuNzg5IDBzMTYuMDE1IDE1LjE3MiAxNi4wMTUgMjYuMzcxbDAuMTIgMTM3Ljk5NCAyOTYuNy0xNjQuOTY3YzEwLjExNS01LjY1OSAyMS42NzUtNS42NTkgMzEuNzg5IDBzMTYuMDE1IDE1LjE3MiAxNi4wMTUgMjYuMzcxbDAuNDgyIDM1MS45N2MwIDExLjE5OC01LjY1OSAyMC44MzItMTYuMDE1IDI2LjM3MS0xMC4xMTUgNS42NTktMjEuNjc1IDUuNjU5LTMxLjc4OSAwbC0yOTcuMTgyLTE2NC4wMDQgMC4xMiAxMzcuOTk0YzAgMTEuMTk4LTUuNjU5IDIwLjgzMi0xNi4wMTUgMjYuMzcxcy0yMS42NzUgNS42NTktMzEuNzg5IDBsLTMxMy45MTktMTczLjAzNSAwLjM2MSAxNzMuNzU3YzAgMTQuNDUtMTEuODAxIDI2LjI1LTI2LjI1IDI2LjI1cy0yNi4yNS0xMS44MDEtMjYuMjUtMjYuMjVsLTAuNDgyLTQwNS40MzRjLTAuMTItMTQuMjA5IDExLjQzOS0yNS44ODkgMjYuMTMtMjUuODg5djB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxYjsiIGdseXBoLW5hbWU9Im1lZGlhX2ZvcndhcmQiIGQ9Ik05NzAuNjU3IDM2Mi4yNjVsLTUwNy43ODYtMzAxLjYzN2MtMzMuNTk1LTE5Ljg2OC03NS4xMzgtMjAuMjMtMTA4Ljg1NC0wLjk2My0zMy44MzYgMTkuMjY2LTU0LjkwOSA1NS4xNS01NC42NjggOTQuMTY0djYwMy4xNTNjMCAzOS4wMTQgMjAuOTUyIDc0Ljg5NyA1NC42NjggOTQuMTY0IDMzLjgzNiAxOS4yNjYgNzUuNSAxOC45MDUgMTA4Ljg1NC0wLjk2M2w1MDcuNzg2LTMwMS42MzdjMzIuOTkzLTE5LjYyNyA1Mi45ODItNTUuMDI5IDUyLjk4Mi05My4zMjEgMC0zOC4xNzEtMjAuMjMtNzMuNTczLTUyLjk4Mi05My4ydjAuMjQxek03Mi4xMjggODkwLjE2aDYuNTAyYzM5Ljg1NyAwIDcyLjEyOC0zMi4xNTEgNzIuMTI4LTcyLjEyOHYtNzIyLjg0NWMwLTM5Ljg1Ny0zMi4xNTEtNzIuMTI4LTcyLjEyOC03Mi4xMjhoLTYuNTAyYy0zOS44NTcgMC4yNDEtNzIuMTI4IDMyLjM5MS03Mi4xMjggNzIuMzY5djcyMi42MDRjMCAzOS45NzcgMzIuMTUxIDcyLjEyOCA3Mi4xMjggNzIuMTI4djB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxYzsiIGdseXBoLW5hbWU9Im1lZGlhX3NjcmVlbnNob3QiIGQ9Ik03NjMuNTQ1IDcyMy42MjdjMCAwIDEwMi43MTMgMC45NjMgMTAyLjcxMy0xMDAuNTQ2IDAgMCA5LjUxMy05OC4zNzgtMTAyLjcxMy0xMDAuNTQ2IDAgMC0xMDAuNDI1LTIuMTY3LTk5LjQ2MiAxMDAuNTQ2IDAuMTIgMC0wLjk2MyA5MS4wMzMgOTkuNDYyIDEwMC41NDZ2MHpNOTY1Ljg0IDg3Ny45OThjMCAwIDU0LjE4Ni00LjIxNCA1NC4xODYtNTEuNzc4di03MTAuMDgxYzAgMC0zLjEzMS01MC44MTUtNTQuMTg2LTUyLjAxOXY4MTMuODc4ek0yLjY0OSAxMTYuMTM5YzAgMCAyLjE2Ny01Mi4wMTkgNTIuMDE5LTUyLjAxOWg5MTEuMjkzdjE1MC4zOTdoLTk5LjQ2MmwtMjAyLjE3NSAyMDUuMzA2LTE1Mi41NjQtMTUzLjQwNy0yMDcuNDczIDI1Ni0yMDQuMjIyLTMwNS44NTEtNDUuMzk2LTAuOTYzLTEuMjA0IDYxMC40OTloLTUwLjgxNXYtNzA5Ljk2ek05NjUuODQgODc3Ljk5OGgtOTExLjE3MmMwIDAtNTIuMDE5IDAuOTYzLTUyLjAxOS01MS43NzhoOTYzLjA3MXY1MS43Nzh6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxZDsiIGdseXBoLW5hbWU9ImltZWRpYV9mYXN0IiBkPSJNODQzLjUgNjY0LjYyNWMtMTQuMzI5IDAtMjUuODg5LTExLjY4LTI1Ljg4OS0yNS44ODl2LTE3MS44MzFsLTMxMC4zMDcgMTcxLjU5Yy05Ljk5NCA1LjY1OS0yMS40MzQgNS42NTktMzEuNDI4IDBzLTE1Ljc3NC0xNS4xNzItMTUuNzc0LTI2LjEzdi0xMzYuNDI5bC0yOTQuMDUxIDE2Mi41NTljLTkuOTk0IDUuNjU5LTIxLjQzNCA1LjY1OS0zMS40MjggMC05Ljk5NC01LjUzOS0xNS43NzQtMTQuOTMxLTE1Ljc3NC0yNi4xM3YtMzQ4LjM1N2MwLTExLjA3OCA1LjY1OS0yMC41OTEgMTUuNzc0LTI2LjEzczIxLjQzNC01LjY1OSAzMS40MjggMGwyOTMuODEgMTYyLjU1OXYtMTM2LjQyOWMwLTExLjA3OCA1LjY1OS0yMC41OTEgMTUuNzc0LTI2LjEzIDkuOTk0LTUuNjU5IDIxLjQzNC01LjY1OSAzMS40MjggMGwzMTAuNDI3IDE3MS44MzF2LTE3MS44MzFjMC0xNC4zMjkgMTEuNjgtMjUuODg5IDI1Ljg4OS0yNS44ODlzMjUuODg5IDExLjY4IDI1Ljg4OSAyNS44ODl2NDAwLjk3OGMwLjEyIDE0LjMyOS0xMS4zMTkgMjUuNzY5LTI1Ljc2OSAyNS43Njl2MHoiIC8+CjwvZm9udD48L2RlZnM+PC9zdmc+"

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var rtc = __webpack_require__(25);
var DomUtil = __webpack_require__(0);

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	/**
  * 生成video的dom节点
  */
	function buildVideo(kconfig) {
		// 生成video和它外部的container
		var userContainer = DomUtil.getDomBySelector(kconfig.selector);
		// 清空容器
		userContainer.innerHTML = "";
		var randomId = new Date().getTime();
		var text = "<div id=" + randomId + "_container" + " class='kmediaContainer' style='position:relative'><video  id=" + randomId + "></video><div class='control-bar'><div class='tool-part'></div></div></div>";
		DomUtil.append(userContainer, text);

		var videoDom = DomUtil.getDomById(randomId);
		// 如果有封面图，插入属性
		// if (kconfig.poster) {
		// 	videoDom.setAttribute('poster', kconfig.poster);
		// }
		// 配置视频流
		if (kconfig.realtime) {
			// 配置直播视频流信息，暂时定死
			var cfg = {
				url: 'http://10.82.1.231:8080',
				stream: 'rtsp://10.82.0.199/id=0',
				dom: videoDom
			};
			rtc(cfg);
		} else {
			videoDom.src = kconfig.videoUrl;
		}

		// 添加video状态
		videoDom.states = {
			progressMouseDown: false, // 是否点击进度条
			playing: false, // 是否正在播放
			timeOver: false, // 是否播放结束
			fullscreen: false, // 是否全屏
			loop: false, // 是否循环播放
			screenSplit: false, // 是否在分屏状态
			moving: false // 是否正在录制视频

			// 图像调整的信息
		};videoDom.imgInfo = {
			brightness: 100,
			contrast: 20,
			saturate: 20,
			hueRotate: 0
			// 视频的一些信息
		};videoDom.info = {
			videoId: randomId
		};

		return videoDom;
	}

	return buildVideo;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var $ = __webpack_require__(26);

'use strict';
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    var rtc = function rtc(cfg) {
        var ws;
        var peerConnection;
        var CRLF = '\r\n';
        var requestId = 1;
        var endpoint_id = Math.floor(Math.random() * 10000);

        //向信令服务发送消息
        function request(msgObj, method, path) {
            var options = {
                method: method,
                path: path,
                body: JSON.stringify(msgObj)
            };
            var text = "";
            if (options.method && options.path) {
                if (options.body) {
                    text = 'request:' + requestId++ + CRLF + 'method:' + options.method + CRLF + 'path:' + options.path + CRLF + CRLF + options.body;
                } else {
                    text = 'request:' + requestId++ + CRLF + 'method:' + options.method + CRLF + 'path:' + options.path + CRLF;
                }
            } else {
                throw new Error('\'method\' and \'path\' options are necessary');
            }
            if (text.length > 0) {
                ws.send(text);
            }
        }
        //创建直播流
        $.post({
            url: cfg.url + '/webmedia/livestream',
            body: JSON.stringify({
                source: {
                    type: 'rtsp',
                    options: {
                        rtsp: {
                            url: cfg.stream
                        }
                    }
                }
            })
        }).then(function (xhr) {
            //创建观察者
            $.post({
                url: cfg.url + '/webmedia/livestream/viewer',
                body: JSON.stringify({
                    type: 'webrtc',
                    Id: JSON.parse(xhr.response).streamId,
                    video: 'recvonly',
                    audio: 'recvonly'
                })
            }).then(function (xhr) {
                var obj = JSON.parse(xhr.response);
                // 发起offer
                function createOffer() {
                    var offerOptions = {
                        offerToReceiveAudio: 0,
                        offerToReceiveVideo: 1
                    };
                    peerConnection.createOffer(offerOptions).then(onCreateOfferSuccess, function (error) {});
                    function onCreateOfferSuccess(desc) {
                        peerConnection.setLocalDescription(desc).then(function () {
                            var sdp = {
                                type: "offer",
                                offer: desc
                            };
                            var msgObj = {
                                endpoint: {
                                    type: 'offerer',
                                    connection: obj.viewerId.toString()
                                },
                                message: {
                                    sdp: desc
                                }
                            };
                            request(msgObj, 'PUT', '/webrtc/push');
                        }, function (error) {});
                    }
                }
                // 处理 answer
                function handleAnswer(answer) {
                    peerConnection.setRemoteDescription(answer);
                    var msgObj = {
                        endpoint: {
                            type: 'offerer',
                            connection: obj.viewerId.toString()
                        },
                        message: {
                            status: 'connected'
                        }
                    };
                    request(msgObj, 'PUT', '/webrtc/push');
                }
                // 处理网络信息
                function handleCandidate(candidate) {
                    peerConnection.addIceCandidate(candidate).catch(function (e) {});
                }
                // 处理返回的消息 sdp 和 网络信息
                function notificationHandler(msg) {
                    var data = JSON.parse(msg);
                    if (data.message.status === 'connecting') {
                        if (peerConnection) {
                            createOffer();
                        }
                    }
                    if (data.message.sdp !== undefined) {
                        if (data.message.sdp.type === 'answer') {
                            handleAnswer(data.message.sdp);
                        }
                        if (data.message.sdp.candidate) {
                            handleCandidate(data.message.sdp);
                        }
                    }
                }
                //与信令服务建立websocket连接
                ws = new WebSocket(obj.signalingBridge + '/endpoint' + endpoint_id);
                ws.onopen = function (evt) {
                    // 创建 peerConnection
                    peerConnection = new RTCPeerConnection();
                    // 获取视频流
                    peerConnection.onaddstream = function (e) {
                        // var video = document.getElementById("my_player");
                        // video.srcObject = e.stream;
                        cfg.dom.srcObject = e.stream;
                    };
                    // 交换网络信息
                    peerConnection.onicecandidate = function (event) {
                        if (event.candidate) {
                            var _msgObj = {
                                endpoint: {
                                    type: 'offerer',
                                    connection: obj.viewerId.toString()
                                },
                                message: {
                                    sdp: event.candidate
                                }
                            };
                            request(_msgObj, 'PUT', '/webrtc/push');
                        }
                    };

                    // 订阅
                    var postObj = {
                        endpoint: [{
                            type: 'answerer',
                            connection: obj.viewerId.toString(),
                            topic: ['sdp', 'status']
                        }],
                        notify_addr: 'endpoint' + endpoint_id
                    };
                    request(postObj, 'POST', '/webrtc/subscription');
                    var msgObj = {
                        endpoint: {
                            type: 'offerer',
                            connection: obj.viewerId.toString()
                        },
                        message: {
                            status: 'connecting'
                        }
                    };
                    request(msgObj, 'PUT', '/webrtc/push');
                };
                ws.onmessage = function (evt) {
                    // 反序列化返回的数据
                    var ws_data = evt.data;
                    var index = ws_data.indexOf('' + CRLF + CRLF);
                    var cache = ws_data.slice(0, index + 2);
                    var header = {};
                    var start = 0;
                    while (true) {
                        var pos = cache.indexOf(CRLF, start);
                        if (pos == -1) break;
                        var line = cache.slice(start, pos);
                        start = pos + 2;

                        var arr = line.split(':');
                        var key = arr[0].trim();
                        var value = arr[1].trim();

                        switch (key) {
                            case 'request':
                                {
                                    header.request = parseInt(value);
                                    break;
                                }
                            case 'method':
                                {
                                    header.method = value;
                                    break;
                                }
                            case 'path':
                                {
                                    header.url = value;
                                    break;
                                }
                            case 'response':
                                {
                                    header.response = parseInt(value);
                                    break;
                                }
                            case 'status_code':
                                {
                                    header.status_code = parseInt(value);
                                    break;
                                }
                        }
                    }
                    var data = ws_data.slice(index + 4);
                    var reqRes = {
                        'header': header,
                        'body': data
                    };
                    if (reqRes.header.request) {
                        notificationHandler(reqRes.body);
                    }
                };
            });
        });
    };
    return rtc;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(27);

function each(v, f) {
    for (var k in v) {
        f(k, v[k]);
    }
}

// Ajax core
function ajax(method, obj) {
    return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest();
        obj.headers && each(obj.headers, function (k, v) {
            xhr.setRequestHeader(k, v);
        });
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve(xhr);
            }
        };
        xhr.open(method, obj.url);
        switch (method) {
            case 'head':
            case 'get':
                xhr.send();break;
            case 'post':
                xhr.send(obj.body);break;
        }
    });
}

module.exports = {
    head: function head(obj) {
        return ajax('head', obj);
    },
    get: function get(obj) {
        return ajax('get', obj);
    },
    post: function post(obj) {
        return ajax('post', obj);
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
    if (( false ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
        module.exports = f();
    } else {
        window.Promise = f();
    }
})(function () {
    if (typeof Promise != 'function') {
        var Promise = function Promise(fn) {
            var state = 'pending';
            var callbacks = [];
            var result = null;
            function res_rej(a, b, c) {
                if (state !== 'pending') {
                    return;
                }
                if (b && b['then'] && typeof b['then'] === 'function') {
                    b['then'](resolve, reject);
                    return;
                }
                state = a;
                result = b;
                callbacks.forEach(function (obj) {
                    obj[c](result);
                });
            }
            function resolve(value) {
                res_rej('fulfilled', value, 0);
            }
            function reject(reason) {
                res_rej('rejected', reason, 1);
            }
            this.then = function (onFulfilled, onRejected) {
                return new Promise(function (resolve, reject) {
                    switch (state) {
                        case 'pending':
                            callbacks.push([function () {
                                resolve(onFulfilled(result));
                            }, function () {
                                reject(onRejected(result));
                            }]);
                            break;
                        case 'fulfilled':
                            resolve(onFulfilled(result));
                            break;
                        case 'rejected':
                            reject(onRejected(result));
                            break;
                    }
                });
            };
            this.catch = function (onRejected) {
                return this.then(null, onRejected);
            };
            fn(resolve, reject);
        };
        Promise.resolve = function (value) {
            return new Promise(function (resolve) {
                resolve(value);
            });
        };
        Promise.reject = function (reason) {
            return new Promise(function (resolve, reject) {
                reject(reason);
            });
        };
        Promise.all = function (promises) {
            return new Promise(function (resolve, reject) {
                var count = 0;
                var values = [];
                for (var i = 0; i < promises.length; i++) {
                    Promise.resolve(promises[i]).then(function (value) {
                        values.push(value);
                        if (count === promises.length - 1) {
                            resolve(values);
                        } else {
                            count++;
                        }
                    }, function (reason) {
                        reject(reason);
                    });
                }
            });
        };
        Promise.race = function (promises) {
            return new Promise(function (resolve, reject) {
                for (var i = 0; i < promises.length; i++) {
                    Promise.resolve(promises[i]).then(function (value) {
                        resolve(value);
                    }, function (reason) {
                        reject(reason);
                    });
                }
            });
        };
    }
    return Promise;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var DomUtil = __webpack_require__(0);
var progress = __webpack_require__(5);

'use strict';

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	var addInformation = function addInformation(kmedia, kvideo) {
		kmedia.loadeddata(function () {
			// 获取video的基本信息
			kvideo.info.duration = kvideo.duration;
			kvideo.info.width = kvideo.clientWidth;
			kvideo.info.height = kvideo.clientHeight;

			// 把视频音量默认调整为50
			kmedia.volume(50);

			// 视频高度赋值给外层container，否则外层container不知道为什么会比video高4.5个像素
			DomUtil.getDomById(kvideo.info.videoId + "_container").style.height = kvideo.info.height + "px";
			if (!kmedia.kconfig.realtime) {
				kvideo.info.kprogress = new progress(kmedia, kvideo, DomUtil.getDomByClass("control-bar"), kmedia.kconfig.theme);
			}

			// 加载工具栏自适应
			kmedia.resize(function () {
				// 重新设定宽高
				kvideo.info.width = kvideo.clientWidth;
				kvideo.info.height = kvideo.clientHeight;
				// 改变进度条宽度
				if (kvideo.info.kprogress) {
					kvideo.info.kprogress.changeWidth(kvideo.info.width);
				}
				// 改变外层container高度
				DomUtil.getDomById(kvideo.info.videoId + "_container").style.height = kvideo.info.height + "px";
			});

			kmedia.play();
		});
	};

	return addInformation;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ]);
});