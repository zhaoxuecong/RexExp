
function $(select){
	return document.getElementById(select);
}

/**
 * Event
 */

/**
 * preventDefaultEvent
 * @param  {event} event
 * @return {undefined} undefined
 */
function prevDefaultEvent(event){
	var evt = event || window.event;
	if (evt.preventDefault) {
		evt.preventDefault();
	}else{
		window.event.returnValue = false;
	}
}

/**
 * preventEventBubble
 * @param  {event} event    
 * @return {undefined} undefined
 */
function prevEventBubble(event){
	var evt = event || window.event;
	if (evt.stopPropagaton){
		evt.stopPropagation();
	}else{
		evt.cancelBubble = true;
	}
}

/**
 * addEventListener
 * @param {Element}   dom    
 * @param {String}   event  
 * @param {Function} callback
 * @return {undefined} undefined
 */
function addEvent(dom,event,callback){
	if (dom.addEventListener) {
		dom.addEventListener(event,callback);
	}else{
		dom.attachEvent("on" + event,callback);
	}
}

/**
 * removeEventListener
 * @param  {Element}   dom  
 * @param  {String}   event   
 * @param  {Function} callback  
 * @return {undefined} undefined        
 */
function removeEvent(dom,event,callback){
	if (dom.removeEventListener) {
		dom.removeEventListener(event,callback);
	}else{
		dom.deatchEvent(event,callback);
	}
}

/**
 * EventDelegation
 * @param  {Element}	parent   父级元素
 * @param  {Element}	select    子集元素
 * @param  {String}		event    事件名
 * @param  {Function} callback   事件处理函数
 * @return {undefined} undefined
 */
function delegation(parent,select,evt,callback){
	parent[evt] = function(event){
		var evt = event || window.event;
		var child = parent.querySelectorAll(select);
		child = [].slice.call(child);
		var hasChild = child.indexOf(evt.target);
		if (hasChild != -1) {
			callback.call(child[hasChild],evt,hasChild);
		}
	}
}

/**
 * Cookie
 */

/**
 * setCookie
 * @param {string} name    name
 * @param {string} value   value
 * @param {string} path    path
 * @param {date}   expires Session
 * @return {undefined} undefined
 */
function setCookie(name,value,expires,path){
	var d = new Date();
	d.setDate(d.getDate() + expires);
	document.cookie = name +"="+ value +";expires=" + d + ";path=" + path;
}
/**
 * removeCookie
 * @param  {string} name
 * @param  {string} path  
 * @return {undefined} undefined
 */
function removeCookie(name,path){
	setCookie(name,null,-1,path);
}
/**
 * getCookie
 * @param  {string} name
 * @return {string} value 
 */
function getCookie(name){
	var sCookie = document.cookie;
	console.log(1,sCookie);
	var aCookie = sCookie.split("; ");//分割成数组
	console.log(2,aCookie);
	for (var i = 0; i < aCookie.length; i++) {
		if (name == aCookie[i].split("=")[0]) {//
			console.log(3,aCookie[i].split("=")[1]);//
			return aCookie[i].split("=")[1];//
		}
	}
	return "";
}

/**
 * RandomColor
 */

/**
 * getRandomColor
 * @param  {Boolean} isRGB 
 * @return {String}  [rgb(0,0,0)]or[#ffffff]
 */
function getRandomColor(isRGB){
	var sColor = "";
	if (!isRGB) {
		sColor = "#";
		var sChars = "0123456789abcdef"
		for (var i = 0; i < 6; i++) {
			sColor += sChars[Math.floor(Math.random() * 16)];
		}
	}else{
		var r = parseInt(Math.random() * 255);
		var g = parseInt(Math.random() * 255);
		var b = parseInt(Math.random() * 255);
		sColor = "rgb(" + r + "," + g + "," + b + ")";
	}
	return sColor;
}