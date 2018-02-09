'use strict';//发布时可注释
define([], function() {

    var domUtil = {
        createDomElement: function (tag) {
            return document.createElement(tag);
        },
        show:function (dom) {
          dom.style.display="block";
        },
        bindEvent:function (dom,event,callback,param) {
           dom.addEventListener(event,function () {
               callback(param,dom);
           })
        },
        hide:function (dom) {
            dom.style.display="none";
        },
        getDomAtrribute:function (dom, attrname) {
            return dom.getAttribute(attrname);
        },
        setDomAttribute:function (dom, attrname, val){
            return dom.setAttribute(attrname, val);
        },
        removeDomAttribute:function (dom, attrname){
            return dom.removeAttribute(attrname);
        },
        addEventByClass: function (sClass,event,callback) {
            var elements = document.getElementsByClassName(sClass);
            for(var i=0,len = elements.length; i<len; i++) {
                elements[i].addEventListener(event, callback);
            }
        },
        addEventById: function (sId,event,callback) {
            document.getElementById(sId).addEventListener(event, callback);
        },
        removeEventByClass: function (sClass,event,callback) {
            var elements = document.getElementsByClassName(sClass);
            for(var i=0,len = elements.length; i<len; i++) {
                elements[i].removeEventListener(event, callback);
            }
        },
        removeEventById: function (sId,event,callback) {
            document.getElementById(sId).removeEventListener(event, callback);
        },
        getDomById: function (sId, appointedDom) {
            if(appointedDom) {
                return appointedDom.getElementById(sId);
            }
            return document.getElementById(sId);
        },
        getDomByClass: function (sClass, appointedDom) {
            if(appointedDom) {
                return appointedDom.getElementsByClassName(sClass)[0];
            }
            return document.getElementsByClassName(sClass)[0];
        },
        getDomsByClass: function (sClass, appointedDom) {
            if(appointedDom) {
                return appointedDom.getElementsByClassName(sClass);
            }
            return document.getElementsByClassName(sClass);
        },
        getDomBySelector: function (selector, appointedDom) {
            if(appointedDom) {
                return appointedDom.querySelector(selector);
            }
            return document.querySelector(selector);
        },
        getDomsBySelector: function (selector, appointedDom) {
            if(appointedDom) {
                return appointedDom.querySelectorAll(selector);
            }
            return document.querySelectorAll(selector);
        },
        removeDomById: function(sId, appointedDom){
            var target;
            if (appointedDom) {
                target = appointedDom.getElementById(sId);
            } else {
                target = document.getElementById(sId);
            }
            // 元素存在再移除
            if (target) {
                target.parentNode.removeChild(target);
            }
        },
        removeDomBySelector: function(selector, appointedDom){
            var target;
            if (appointedDom) {
                target = appointedDom.querySelector(selector);
            } else {
                target = document.querySelector(selector);
            }
            // 元素存在再移除
            if (target) {
                target.parentNode.removeChild(target);
            }
            
        },
        removeDomsBySelector: function(selector, appointedDom){
            var targets;
            if (appointedDom) {
                targets = appointedDom.querySelectorAll(selector);
            } else {
                targets = document.querySelectorAll(selector);
            }
            // 元素存在再移除
            if (targets.length) {
                targets.forEach(function(target){
                    target.parentNode.removeChild(target);
                })
            }
        },
        appendDom: function (parent,son) {
            parent.appendChild(son);
        },
        // 获取父级元素的宽度
        getParentWidth: function (element) {
            return element.parentNode.clientWidth;
        },
        // 获取父级元素的高度
        getParentHeight: function (element) {
            return element.parentNode.clientHeight;
        },
        // 设定元素宽度
        setWidth: function (element, width) {
            return element.style.width = width + "px";
        },
        // 设定元素高度
        setHeight: function (element, height) {
            return element.style.height = height + "px";
        },
        // 设定元素左侧距离
        setLeft: function (element, left) {
            return element.style.left = left + "px";
        },
        // 设定元素顶部距离
        setTop: function (element, top) {
            return element.style.top = top + "px";
        },
        // 获取隐藏元素宽高
        getSize:function (elem){
           var width,
             height,
             noneNodes = [],
             nodeStyle = [];
           getNoneNode(elem); //获取多层display：none;的元素
           setNodeStyle();
           width = elem.clientWidth;
           height = elem.clientHeight;
           resumeNodeStyle();
           
           return {
             width : width,
             height : height
           }
         
           function getNoneNode(node){
             var display = getStyles(node).getPropertyValue('display'),
                tagName = node.nodeName.toLowerCase();
             if(display != 'none'
                && tagName != 'body'){
                getNoneNode(node.parentNode);
             } else {
                noneNodes.push(node);
                if(tagName != 'body')
                  getNoneNode(node.parentNode);
             }
           }
           
           //这方法才能获取最终是否有display属性设置，不能style.display。
           function getStyles(elem) {
         
             // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
             // IE throws on elements created in popups
             // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
             var view = elem.ownerDocument.defaultView;
         
             if (!view || !view.opener) {
                view = window;
             }
             return view.getComputedStyle(elem);
           };
           
           
           function setNodeStyle(){
             var i = 0;
             for(; i < noneNodes.length; i++){
                var visibility = noneNodes[i].style.visibility,
                display = noneNodes[i].style.display,
                style = noneNodes[i].getAttribute("style");
                //覆盖其他display样式
                noneNodes[i].setAttribute("style", "visibility:hidden;display:block !important;" + style);
                nodeStyle[i] = {
                  visibility :visibility,
                  display : display
                }
             }       
           }
           
           function resumeNodeStyle(){
             var i = 0;
             for(; i < noneNodes.length; i++){
                noneNodes[i].style.visibility = nodeStyle[i].visibility;
                noneNodes[i].style.display = nodeStyle[i].display;
             }  
         
           }
        },
        // 移除css中的属性
        removeStyle: function (element, type) {
            return element.style.removeProperty(type);
        },
        // 添加键盘事件监听
        /*
         * 参数格式：keyInfo{
         *              keyCode:  键值 必传
         *              altKey:  boolen 
         *              ctrlKey:  boolen
         *              shiftKey:  boolen
         *           }
         */
        keydown:function (element, keyInfo, callback) {
            element.addEventListener("keydown", function (e) {
                // e.preventDefault();
                // e.stopPropagation();
                // 根据按键有不同的判断条件
                var judgementCondition = e.keyCode === parseInt(keyInfo.keyCode);
                // 默认alt,ctrl,shift,最多只有一个按钮和别的按钮组合
                if (keyInfo.altKey) {
                    judgementCondition = e.keyCode === parseInt(keyInfo.keyCode) && e.altKey;
                }
                if (keyInfo.ctrlKey) {
                    judgementCondition = e.keyCode === parseInt(keyInfo.keyCode) && e.ctrlKey;
                }
                if (keyInfo.shiftKey) {
                    judgementCondition = e.keyCode === parseInt(keyInfo.keyCode) && e.shiftKey;
                }

                if (judgementCondition) {
                    callback();
                }
            })
        },
        // 添加监听事件
        // ！！--移除事件有问题，还未处理
        on:function (element, operate, callback) {
            if (!callback) {
                return;
            }
            // element如果是document就是全局监听
            if (element === "document") {
                if (operate === "click") {
                    document.addEventListener(operate, function (e) {
                        e.stopPropagation();
                        callback();
                    });
                } else {
                    document.addEventListener(operate, callback);
                }  
                return;
            }

            if (operate === "click") {
                element.addEventListener(operate, function (e) {
                    e.stopPropagation();
                    callback();
                });
            } else {
                element.addEventListener(operate, callback);
            }
        },
        // 移除监听事件
        remove:function (element, operate, callback) {
            if (!callback) {
                return;
            }
            // element如果是document就是移除全局的监听
            if (element === "document") {
                document.removeEventListener(operate, callback);
                return;
            }
            element.removeEventListener(operate, callback);
        },
        // 模拟append方法
        append:function (element, text) {
            element.insertAdjacentHTML("beforeEnd", text);
        },
        appendAfter:function (element, text) {
            element.insertAdjacentHTML("afterEnd", text);
        },
        // 插入dom节点
        insertAfter:function (dom, target) {
            var parent = target.parentNode;
            var len = parent.childNodes.length;
            // 转换为数组
            var children = Array.prototype.slice.call(parent.childNodes,0)
            var index = children.indexOf(target);
            // 判断要插入的元素是不是最后一个
            if(len > index + 1){
                parent.insertBefore(dom, children[index + 1]);
            } else {
                parent.appendChild(target);
            }
        }
    };
    return domUtil;
});
