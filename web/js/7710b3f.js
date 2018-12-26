/*!
 * Modernizr v2.7.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.7.2",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);

/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*!
 * VERSION: 1.11.4
 * DATE: 2014-01-18
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=[].slice,r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals.isSelector,o=i._internals.isArray,h=r.prototype=i.to({},.1,{}),l=[];r.version="1.11.4",h.constructor=r,h.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.ticker=i.ticker,h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},h.updateTo=function(t,e){var s,r=this.ratio;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted)if(e)this._initted=!1;else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var n=this._time;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var a,o=1/(1-r),h=this._firstPT;h;)a=h.s+h.c,h.c*=o,h.s=a-h.c,h=h._next}return this},h.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,a,o,h,_,u,p,c=this._dirty?this.totalDuration():this._totalDuration,f=this._time,m=this._totalTime,d=this._cycle,g=this._duration;if(t>=c?(this._totalTime=c,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===g&&(p=this._rawPrevTime,(0===t||0>p||p===n)&&p!==t&&(i=!0,p>n&&(r="onReverseComplete")),this._rawPrevTime=p=!e||t||0===p?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&this._rawPrevTime>n)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===g&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=p=!e||t||0===this._rawPrevTime?t:n)):this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(o=g+this._repeatDelay,this._cycle=this._totalTime/o>>0,0!==this._cycle&&this._cycle===this._totalTime/o&&this._cycle--,this._time=this._totalTime-this._cycle*o,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:0>this._time&&(this._time=0)),this._easeType?(h=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&h>=.5)&&(h=1-h),3===_&&(h*=2),1===u?h*=h:2===u?h*=h*h:3===u?h*=h*h*h:4===u&&(h*=h*h*h*h),this.ratio=1===_?1-h:2===_?h:.5>this._time/g?h/2:1-h/2):this.ratio=this._ease.getRatio(this._time/g)),f===this._time&&!i&&d===this._cycle)return m!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||l)),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==f&&t>=0&&(this._active=!0),0===m&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||l))),a=this._firstPT;a;)a.f?a.t[a.p](a.c*this.ratio+a.s):a.t[a.p]=a.c*this.ratio+a.s,a=a._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==m||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||l)),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||l)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||l),0===g&&this._rawPrevTime===n&&p!==n&&(this._rawPrevTime=0)))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,h,_,u,p){h=h||0;var c,f,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),_.apply(p||this,u||l)};for(o(t)||("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=s.call(t,0))),c=t.length,m=0;c>m;m++){f={};for(d in n)f[d]=n[d];f.delay=g,m===c-1&&_&&(f.onComplete=y),v[m]=new r(t[m],e,f),g+=h}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var _=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(_(n,e)),r=s.length),n=n._next;return s},u=r.getAllTweens=function(e){return _(t._rootTimeline,e).concat(_(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=u(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,h,l,_,u,p=i._tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=s.call(t,0)),o(t))for(_=t.length;--_>-1;)r.killChildTweensOf(t[_],e);else{n=[];for(l in p)for(h=p[l].target.parentNode;h;)h===t&&(n=n.concat(p[l].tweens)),h=h.parentNode;for(u=n.length,_=0;u>_;_++)e&&n[_].totalTime(n[_].totalDuration()),n[_]._enabled(!1,!1)}}};var p=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=u(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){p(!0,t,e,i)},r.resumeAll=function(t,e,i){p(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},h.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},h.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},h.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},h.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},h.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},h.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},h.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},h.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],a(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));a(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals.isSelector,a=i._internals.isArray,o=[],h=function(t){var e,i={};for(e in t)i[e]=t[e];return i},l=function(t,e,i,s){t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||o)},_=o.slice,u=s.prototype=new e;return s.version="1.11.4",u.constructor=s,u.kill()._gc=!1,u.to=function(t,e,s,r){return e?this.add(new i(t,e,s),r):this.set(t,s,r)},u.from=function(t,e,s,r){return this.add(i.from(t,e,s),r)},u.fromTo=function(t,e,s,r,n){return e?this.add(i.fromTo(t,e,s,r),n):this.set(t,r,n)},u.staggerTo=function(t,e,r,a,o,l,u,p){var c,f=new s({onComplete:l,onCompleteParams:u,onCompleteScope:p,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),n(t)&&(t=_.call(t,0)),a=a||0,c=0;t.length>c;c++)r.startAt&&(r.startAt=h(r.startAt)),f.to(t[c],e,h(r),c*a);return this.add(f,o)},u.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},u.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},u.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},u.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},u.add=function(r,n,o,h){var l,_,u,p,c,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&a(r)){for(o=o||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)a(p=r[u])&&(p=new s({tweens:p})),this.add(p,l),"string"!=typeof p&&"function"!=typeof p&&("sequence"===o?l=p._startTime+p.totalDuration()/p._timeScale:"start"===o&&(p._startTime-=p.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),this._gc&&!this._paused&&this._duration<this.duration())for(c=this,f=c.rawTime()>r._startTime;c._gc&&c._timeline;)c._timeline.smoothChildTiming&&f?c.totalTime(c._totalTime,!0):c._enabled(!0,!1),c=c._timeline;return this},u.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&a(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},u._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=0,this},u.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},u.insert=u.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},u.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},u.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},u.addPause=function(t,e,i,s){return this.call(l,["{self}",e,i,s],this,t)},u.removeLabel=function(t){return delete this._labels[t],this},u.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},u._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&a(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},u.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},u.stop=function(){return this.paused(!0)},u.gotoAndPlay=function(t,e){return this.play(t,e)},u.gotoAndStop=function(t,e){return this.pause(t,e)},u.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,h,l,_=this._dirty?this.totalDuration():this._totalDuration,u=this._time,p=this._startTime,c=this._timeScale,f=this._paused;if(t>=_?(this._totalTime=this._time=_,this._reversed||this._hasPausedChild()||(n=!0,h="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(l=!0,this._rawPrevTime>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||0===this._rawPrevTime?t:r,t=_+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==u||0===this._duration&&(this._rawPrevTime>r||0>t&&this._rawPrevTime>=0))&&(h="onReverseComplete",n=this._reversed),0>t?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||0===this._rawPrevTime?t:r,t=0,this._initted||(l=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==u&&this._first||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==u&&t>0&&(this._active=!0),0===u&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||o)),this._time>=u)for(s=this._first;s&&(a=s._next,!this._paused||f);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||f);)(s._active||u>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||o)),h&&(this._gc||(p===this._startTime||c!==this._timeScale)&&(0===this._time||_>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this.vars[h].apply(this.vars[h+"Scope"]||this,this.vars[h+"Params"]||o)))}},u._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},u.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},u.getTweensOf=function(t,e){for(var s=i.getTweensOf(t),r=s.length,n=[],a=0;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(n[a++]=s[r]);return n},u._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},u.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},u._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},u.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},u.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return this},u._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},u.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},u.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},u.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},u.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=[],a=new i(null,null,1,0),o=s.prototype=new t;return o.constructor=s,o.kill()._gc=!1,s.version="1.11.4",o.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},o.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},o.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},o.tweenTo=function(t,i){i=i||{};var s,r,o,h={ease:a,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)h[r]=i[r];return h.time=this._parseTimeOrLabel(t),s=Math.abs(Number(h.time)-this._time)/this._timeScale||.001,o=new e(this,s,h),h.onStart=function(){o.target.paused(!0),o.vars.time!==o.target.time()&&s===o.duration()&&o.duration(Math.abs(o.vars.time-o.target.time())/o.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||o,i.onStartParams||n)},o},o.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},o.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,a,o,h,l,_,u=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,c=this._time,f=this._totalTime,m=this._startTime,d=this._timeScale,g=this._rawPrevTime,v=this._paused,y=this._cycle;if(t>=u?(this._locked||(this._totalTime=u,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(a=!0,h="onComplete",0===this._duration&&(0===t||0>g||g===r)&&g!==t&&this._first&&(l=!0,g>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||0===this._rawPrevTime?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=p,t=p+1e-4)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==c||0===p&&(g>r||0>t&&g>=0)&&!this._locked)&&(h="onReverseComplete",a=this._reversed),0>t?(this._active=!1,0===p&&g>=0&&this._first&&(l=!0),this._rawPrevTime=t):(this._rawPrevTime=p||!e||t||0===this._rawPrevTime?t:r,t=0,this._initted||(l=!0))):(0===p&&0>g&&(l=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(_=p+this._repeatDelay,this._cycle=this._totalTime/_>>0,0!==this._cycle&&this._cycle===this._totalTime/_&&this._cycle--,this._time=this._totalTime-this._cycle*_,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,t=p+1e-4):0>this._time?this._time=t=0:t=this._time))),this._cycle!==y&&!this._locked){var T=this._yoyo&&0!==(1&y),w=T===(this._yoyo&&0!==(1&this._cycle)),x=this._totalTime,b=this._cycle,P=this._rawPrevTime,S=this._time;if(this._totalTime=y*p,y>this._cycle?T=!T:this._totalTime+=p,this._time=c,this._rawPrevTime=0===p?g-1e-4:g,this._cycle=y,this._locked=!0,c=T?0:p,this.render(c,e,0===p),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||n),w&&(c=T?p+1e-4:-1e-4,this.render(c,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=S,this._totalTime=x,this._cycle=b,this._rawPrevTime=P}if(!(this._time!==c&&this._first||i||l))return f!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),this._time>=c)for(s=this._first;s&&(o=s._next,!this._paused||v);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=o;else for(s=this._last;s&&(o=s._prev,!this._paused||v);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=o;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),h&&(this._locked||this._gc||(m===this._startTime||d!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(a&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this.vars[h].apply(this.vars[h+"Scope"]||this,this.vars[h+"Params"]||n)))},o.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},o.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},o.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},o.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},o.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},o.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},o.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},o.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},o.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},o.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},o.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},o.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},a=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",o=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,c=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+c,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-c,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,h){var l,_,u,p,c,f,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)c=t[b],_=c.a,u=c.d,p=t[b+1].d,h?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),f=u-(u-_)*(a?.5*r:0!==y?w/y:0),m=u+(p-u)*(a?.5*r:0!==T?w/T:0),d=u-(f+((m-f)*(3*y/(y+T)+.5)/4||0))):(f=u-.5*(u-_)*r,m=u+.5*(p-u)*r,d=u-(f+m)/2),f+=d,m+=d,c.c=g=f,c.b=0!==l?P:P=c.a+.6*(c.c-c.a),c.da=u-_,c.ca=g-_,c.ba=P-_,n?(v=o(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;c=t[b],c.b=P,c.c=P+.4*(c.d-P),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=P-c.a,n&&(v=o(c.a,P,c.c,c.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},l=function(t,s,r,a){var o,h,l,_,u,p,c=[];if(a)for(t=[a].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][s])&&"="===p.charAt(1)&&(t[h][s]=a[s]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return c[0]=new n(t[0][s],0,0,t[-1>o?0:1][s]),c;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],c[h]=new n(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return c[h]=new n(t[h][s],0,0,t[h+1][s]),c},_=function(t,n,o,_,u,p){var c,f,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":a,null==n&&(n=1);for(f in t[0])x.push(f);if(t.length>1){for(T=t[t.length-1],y=!0,c=x.length;--c>-1;)if(f=x[c],Math.abs(b[f]-T[f])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(e.length=i.length=s.length=0,c=x.length;--c>-1;)f=x[c],r[f]=-1!==u.indexOf(","+f+","),w[f]=l(t,f,r[f],p);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!_){for(c=x.length;--c>-1;)if(r[f])for(m=w[x[c]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(c=s.length;--c>-1;)s[c]=Math.sqrt(s[c])}for(c=x.length,d=o?4:1;--c>-1;)f=x[c],m=w[f],h(m,n,o,_,r[f]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},u=function(t,e,i){e=e||"soft";var s,r,a,o,h,l,_,u,p,c,f,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],c=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(f=t[_][p])&&"="===f.charAt(1)?i[p]+Number(f.charAt(0)+f.substr(2)):Number(f),g&&_>1&&u-1>_&&(h[c++]=(s+h[c-2])/2),h[c++]=s;for(u=c-d+1,c=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],a=h[_+2],o=2===d?0:h[_+3],h[c++]=f=3===d?new n(s,r,a,o):new n(s,(2*r+s)/3,(2*r+a)/3,a);h.length=c}return m},p=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,c,f=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=f*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),c=m*i+_-1,e[c]=(e[c]||0)+s*s},c=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],c=[];for(i in t)p(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:u}},f=window._gsDefine.plugin({propName:"bezier",priority:-1,API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},p=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in p)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):u(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=c(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;)for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;return!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,c=this._func,f=this._target;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=h+(h>0?.5:-.5)>>0),c[n]?f[n](h):f[n]=h;if(this._autoRotate){var m,d,g,v,y,T,w,x=this._autoRotate;for(r=x.length;--r>-1;)n=x[r][2],T=x[r][3]||0,w=x[r][4]===!0?1:t,a=this._beziers[x[r][0]],m=this._beziers[x[r][1]],a&&m&&(a=a[i],m=m[i],d=a.a+(a.b-a.a)*o,v=a.b+(a.c-a.b)*o,d+=(v-d)*o,v+=(a.c+(a.d-a.c)*o-v)*o,g=m.a+(m.b-m.a)*o,y=m.b+(m.c-m.b)*o,g+=(y-g)*o,y+=(m.c+(m.d-m.c)*o-y)*o,h=Math.atan2(y-g,v-d)*w+T,c[n]?f[n](h):f[n]=h)}}}),m=f.prototype;f.bezierThrough=_,f.cubicToQuadratic=o,f._autoCSS=!0,f.quadraticToCubic=function(t,e,i){return new n(t,(2*e+t)/3,(2*e+i)/3,i)},f._cssRegister=function(){var t=window._gsDefine.globals.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new f;var l,_,u,p=e.values,c=p.length-1,m=[],d={};if(0>c)return o;for(l=0;c>=l;l++)u=i(t,p[l],a,o,h,c!==l),m[l]=u.end;for(_ in e)d[_]=e[_];return d.values=m,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o
}})}},m._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},m._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},h=a.prototype=new t("css");h.constructor=a,a.version="1.11.4",a.API=2,a.defaultTransformPerspective=0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var l,_,u,p,c,f,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,w=/opacity:([^;]*)/,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,k=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,R=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,I=180/Math.PI,E={},N=document,F=N.createElement("div"),L=N.createElement("img"),X=a._internals={_specialProps:o},z=navigator.userAgent,U=function(){var t,e=z.indexOf("Android"),i=N.createElement("div");return u=-1!==z.indexOf("Safari")&&-1===z.indexOf("Chrome")&&(-1===e||Number(z.substr(e+8,1))>3),c=u&&6>Number(z.substr(z.indexOf("Version/")+8,1)),p=-1!==z.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z)&&(f=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),Y=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},B="",q="",V=function(t,e){e=e||F;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(q=3===s?"ms":i[s],B="-"+q.toLowerCase()+"-",q+t):null},W=N.defaultView?N.defaultView.getComputedStyle:function(){},G=a.getStyle=function(t,e,i,s,r){var n;return U||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||W(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):Y(t)},$=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=A.test(e),o=t,h=F.style,l=0>i;return l&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(h.cssText="border:0 solid red;position:"+G(t,"position")+";line-height:0;","%"!==s&&o.appendChild?h[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||N.body,h[a?"width":"height"]=i+s),o.appendChild(F),n=parseFloat(F[a?"offsetWidth":"offsetHeight"]),o.removeChild(F),0!==n||r||(n=$(t,e,i,s,!0))),l?-n:n},Z=function(t,e,i){if("absolute"!==G(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=G(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(y,""))||0)},Q=function(t,e){var i,s,r={};if(e=e||W(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,R)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0!==r[i]&&(r[i.replace(S,R)]=e[i]);return U||(r.opacity=Y(t)),s=be(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,xe&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},H=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Z(t,a),void 0!==l[a]&&(o=new ue(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||W(t,null);--n>-1;)s-=parseFloat(G(t,"padding"+r[n],i,!0))||0,s-=parseFloat(G(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:I)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(m)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},he="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in ne)he+="|"+h+"\\b";he=RegExp(he+")","gi");var le=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(he)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(m,""):"";return _?r=e?function(t){var e,p,c,f;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(f=t.replace(D,"|").split("|"),c=0;f.length>c;c++)f[c]=r(f[c]);return f.join(",")}if(e=(t.match(he)||[n])[0],p=t.split(e).join("").match(g)||[],c=p.length,_>c--)for(;_>++c;)p[c]=i?p[0|(c-1)/2]:a[c];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ue=(X._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(X._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},c={},f=i._transform,m=E;for(i._transform=null,E=e,s=_=i.parse(t,e,s,r),E=m,n&&(i._transform=f,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,c[o]=s.s+s.c,p[o]=s.s,n||(l=new ue(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,c[o]=s.data[h],p[o]=s[h],n||(l=new ue(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:c,firstMPT:l,pt:_}},X.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),ce=a.parseComplex=function(t,e,i,s,r,n,a,o,h,_){i=i||n||"",a=new pe(t,e,0,0,a,_?2:1,null,!1,o,i,s),s+="";var u,p,c,f,g,v,y,T,w,x,P,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,C=l!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(D,", ").split(" "),R=R.join(" ").replace(D,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),a.plugin=h,a.setRatio=_,u=0;A>u;u++)if(f=k[u],g=R[u],T=parseFloat(f),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(d,""),C&&-1!==g.indexOf("px"),!0);else if(r&&("#"===f.charAt(0)||ne[f]||b.test(f)))S=","===g.charAt(g.length-1)?"),":")",f=oe(f),g=oe(g),w=f.length+g.length>6,w&&!U&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(U||(w=!1),a.appendXtra(w?"rgba(":"rgb(",f[0],g[0]-f[0],",",!0,!0).appendXtra("",f[1],g[1]-f[1],",",!0).appendXtra("",f[2],g[2]-f[2],w?",":S,!0),w&&(f=4>f.length?1:f[3],a.appendXtra("",f,(4>g.length?1:g[3])-f,S,!1)));else if(v=f.match(m)){if(y=g.match(d),!y||y.length!==v.length)return a;for(c=0,p=0;v.length>p;p++)P=v[p],x=f.indexOf(P,c),a.appendXtra(f.substr(c,x-c),Number(P),ie(y[p],P),"",C&&"px"===f.substr(x+P.length,2),0===p),c=x+P.length;a["xs"+a.l]+=f.substr(c)}else a["xs"+a.l]+=a.l?" "+f:f;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,u=1;a.l>u;u++)S+=a["xs"+u]+a.data["xn"+u];a.e=S+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},fe=9;for(h=pe.prototype,h.l=h.pr=0;--fe>0;)h["xn"+fe]=0,h["xs"+fe]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||le(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},de=X._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new me(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";de(t,{parser:function(t,i,s,r,n,a,h){var l=(window.GreenSockGlobals||window).com.greensock.plugins[e];return l?(l._cssRegister(),o[s].parse(t,i,s,r,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=me.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),h=i.replace(D,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return ce(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){de(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=V("transform"),Te=B+"transform",we=V("transformOrigin"),xe=null!==V("perspective"),be=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,h,l,_,u,p,c,f,m,d,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,w=1e5,x=179.99,b=x*M,P=xe?parseFloat(G(t,we,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=G(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(C),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)h=Number(n[o]),n[o]=(l=h-(h|=0))?(0|l*w+(0>l?-.5:.5))/w+h:h;if(16===n.length){var S=n[8],k=n[9],R=n[10],A=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,A=S*D-n[12],O=k*D-n[13],D=R*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var E,N,F,L,X,z,U,Y=n[0],j=n[1],B=n[2],q=n[3],V=n[4],W=n[5],$=n[6],Z=n[7],Q=n[11],H=Math.atan2($,R),K=-b>H||H>b;v.rotationX=H*I,H&&(L=Math.cos(-H),X=Math.sin(-H),E=V*L+S*X,N=W*L+k*X,F=$*L+R*X,S=V*-X+S*L,k=W*-X+k*L,R=$*-X+R*L,Q=Z*-X+Q*L,V=E,W=N,$=F),H=Math.atan2(S,Y),v.rotationY=H*I,H&&(z=-b>H||H>b,L=Math.cos(-H),X=Math.sin(-H),E=Y*L-S*X,N=j*L-k*X,F=B*L-R*X,k=j*X+k*L,R=B*X+R*L,Q=q*X+Q*L,Y=E,j=N,B=F),H=Math.atan2(j,W),v.rotation=H*I,H&&(U=-b>H||H>b,L=Math.cos(-H),X=Math.sin(-H),Y=Y*L+V*X,N=j*L+W*X,W=j*-X+W*L,$=B*-X+$*L,j=N),U&&K?v.rotation=v.rotationX=0:U&&z?v.rotation=v.rotationY=0:z&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(Y*Y+j*j)*w+.5)/w,v.scaleY=(0|Math.sqrt(W*W+k*k)*w+.5)/w,v.scaleZ=(0|Math.sqrt($*$+R*R)*w+.5)/w,v.skewX=0,v.perspective=Q?1/(0>Q?-Q:Q):0,v.x=A,v.y=O,v.z=D}}else if(!(xe&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===G(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,se=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,_=Math.sqrt(te*te+ee*ee),u=Math.sqrt(se*se+ie*ie),p=te||ee?Math.atan2(ee,te)*I:v.rotation||0,c=ie||se?Math.atan2(ie,se)*I+p:v.skewX||0,f=_-Math.abs(v.scaleX||0),m=u-Math.abs(v.scaleY||0),Math.abs(c)>90&&270>Math.abs(c)&&(y?(_*=-1,c+=0>=p?180:-180,p+=0>=p?180:-180):(u*=-1,c+=0>=c?180:-180)),d=(p-v.rotation)%180,g=(c-v.skewX)%180,(void 0===v.skewX||f>T||-T>f||m>T||-T>m||d>-x&&x>d&&false|d*w||g>-x&&x>g&&false|g*w)&&(v.scaleX=_,v.scaleY=u,v.rotation=p,v.skewX=c),xe&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var c,m,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x,b=s.y;if(null!=s.ox&&(c=(s.oxp?.01*d*s.ox:s.ox)-d/2,m=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=c-(c*o+m*h),b+=m-(c*l+m*_)),v?(c=d/2,m=g/2,w+=", Dx="+(c-(c*o+m*h)+x)+", Dy="+(m-(c*l+m*_)+b)+")"):w+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,w):w+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,S,k,R=8>f?1:-1;for(c=s.ieOffsetX||0,m=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),fe=0;4>fe;fe++)S=J[fe],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,S,parseFloat(P),P.replace(y,""))||0,k=i!==s[S]?2>fe?-s.ieOffsetX:-s.ieOffsetY:2>fe?c-s.ieOffsetX:m-s.ieOffsetY,u[S]=(s[S]=Math.round(i-k*(0===fe||2===fe?1:R)))+"px"}}},Se=function(){var t,e,i,s,r,n,a,o,h,l,_,u,c,f,m,d,g,v,y,T,w,x,b,P=this.data,S=this.t.style,k=P.rotation*M,R=P.scaleX,A=P.scaleY,C=P.scaleZ,O=P.perspective;if(p){var D=1e-4;D>R&&R>-D&&(R=C=2e-5),D>A&&A>-D&&(A=C=2e-5),!O||P.z||P.rotationX||P.rotationY||(O=0)}if(k||P.skewX)v=Math.cos(k),y=Math.sin(k),t=v,r=y,P.skewX&&(k-=P.skewX*M,v=Math.cos(k),y=Math.sin(k)),e=-y,n=v;else{if(!(P.rotationY||P.rotationX||1!==C||O))return S[ye]="translate3d("+P.x+"px,"+P.y+"px,"+P.z+"px)"+(1!==R||1!==A?" scale("+R+","+A+")":""),void 0;t=n=1,e=r=0}_=1,i=s=a=o=h=l=u=c=f=0,m=O?-1/O:0,d=P.zOrigin,g=1e5,k=P.rotationY*M,k&&(v=Math.cos(k),y=Math.sin(k),h=_*-y,c=m*-y,i=t*y,a=r*y,_*=v,m*=v,t*=v,r*=v),k=P.rotationX*M,k&&(v=Math.cos(k),y=Math.sin(k),T=e*v+i*y,w=n*v+a*y,x=l*v+_*y,b=f*v+m*y,i=e*-y+i*v,a=n*-y+a*v,_=l*-y+_*v,m=f*-y+m*v,e=T,n=w,l=x,f=b),1!==C&&(i*=C,a*=C,_*=C,m*=C),1!==A&&(e*=A,n*=A,l*=A,f*=A),1!==R&&(t*=R,r*=R,h*=R,c*=R),d&&(u-=d,s=i*u,o=a*u,u=_*u+d),s=(T=(s+=P.x)-(s|=0))?(0|T*g+(0>T?-.5:.5))/g+s:s,o=(T=(o+=P.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,u=(T=(u+=P.z)-(u|=0))?(0|T*g+(0>T?-.5:.5))/g+u:u,S[ye]="matrix3d("+[(0|t*g)/g,(0|r*g)/g,(0|h*g)/g,(0|c*g)/g,(0|e*g)/g,(0|n*g)/g,(0|l*g)/g,(0|f*g)/g,(0|i*g)/g,(0|a*g)/g,(0|_*g)/g,(0|m*g)/g,s,o,u,O?1+-u/O:1].join(",")+")"},ke=function(t){var e,i,s,r,n,a=this.data,o=this.t,h=o.style;return a.rotationX||a.rotationY||a.z||a.force3D?(this.setRatio=Se,Se.call(this,t),void 0):(a.rotation||a.skewX?(e=a.rotation*M,i=e-a.skewX*M,s=1e5,r=a.scaleX*s,n=a.scaleY*s,h[ye]="matrix("+(0|Math.cos(e)*r)/s+","+(0|Math.sin(e)*r)/s+","+(0|Math.sin(i)*-n)/s+","+(0|Math.cos(i)*n)/s+","+a.x+","+a.y+")"):h[ye]="matrix("+a.scaleX+",0,0,"+a.scaleY+","+a.x+","+a.y+")",void 0)};de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",{parser:function(t,e,i,s,n,a,o){if(s._transform)return n;var h,l,_,u,p,c,f,m=s._transform=be(t,r,!0,o.parseTransform),d=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)_=d.cssText,d[ye]=y.transform,d.display="block",h=be(t,null,!1),d.cssText=_;else if("object"==typeof y){if(h={scaleX:se(null!=y.scaleX?y.scaleX:y.scale,m.scaleX),scaleY:se(null!=y.scaleY?y.scaleY:y.scale,m.scaleY),scaleZ:se(y.scaleZ,m.scaleZ),x:se(y.x,m.x),y:se(y.y,m.y),z:se(y.z,m.z),perspective:se(y.transformPerspective,m.perspective)},f=y.directionalRotation,null!=f)if("object"==typeof f)for(_ in f)y[_]=f[_];else y.rotation=f;h.rotation=re("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:m.rotation,m.rotation,"rotation",T),xe&&(h.rotationX=re("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":m.rotationX||0,m.rotationX,"rotationX",T),h.rotationY=re("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":m.rotationY||0,m.rotationY,"rotationY",T)),h.skewX=null==y.skewX?m.skewX:re(y.skewX,m.skewX),h.skewY=null==y.skewY?m.skewY:re(y.skewY,m.skewY),(l=h.skewY-m.skewY)&&(h.skewX+=l,h.rotation+=l)}for(xe&&null!=y.force3D&&(m.force3D=y.force3D,c=!0),p=m.force3D||m.z||m.rotationX||m.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,p||null==y.scale||(h.scaleZ=1);--v>-1;)i=ve[v],u=h[i]-m[i],(u>g||-g>u||null!=E[i])&&(c=!0,n=new pe(m,i,m[i],u,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,s._overwriteProps.push(n.n));return u=y.transformOrigin,(u||xe&&p&&m.zOrigin)&&(ye?(c=!0,i=we,u=(u||G(t,i,r,!1,"50% 50%"))+"",n=new pe(d,i,0,0,n,-1,"transformOrigin"),n.b=d[i],n.plugin=a,xe?(_=m.zOrigin,u=u.split(" "),m.zOrigin=(u.length>2&&(0===_||"0px"!==u[2])?parseFloat(u[2]):_)||0,n.xs0=n.e=d[i]=u[0]+" "+(u[1]||"50%")+" 0px",n=new pe(m,"zOrigin",0,0,n,-1,n.n),n.b=_,n.xs0=n.e=m.zOrigin):n.xs0=n.e=d[i]=u):ee(u+"",m)),c&&(s._transformType=p||3===this._transformType?3:2),n},prefix:!0}),de("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),de("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,c,f,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=V(b[h])),u=_=G(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],c=parseFloat(u),v=u.substr((c+"").length),y="="===p.charAt(1),y?(f=parseInt(p.charAt(0)+"1",10),p=p.substr(2),f*=parseFloat(p),g=p.substr((f+"").length-(0>f?1:0))||""):(f=parseFloat(p),g=p.substr((f+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",c,v),w=$(t,"borderTop",c,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=$(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+f+g,l=parseFloat(_)+f+g)),a=ce(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:le("0px 0px 0px 0px",!1,!0)}),de("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,c="background-position",m=r||W(t,null),d=this.format((m?f?m.getPropertyValue(c+"-x")+" "+m.getPropertyValue(c+"-y"):m.getPropertyValue(c):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=G(t,"backgroundImage").replace(k,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),L.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-L.width:t.offsetHeight-L.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:ee}),de("backgroundSize",{defaultValue:"0 0",formatter:ee}),de("perspective",{defaultValue:"0px",prefix:!0}),de("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),de("transformStyle",{prefix:!0}),de("backfaceVisibility",{prefix:!0}),de("userSelect",{prefix:!0}),de("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),de("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),de("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>f?(h=t.currentStyle,l=8>f?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(G(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),de("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),de("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),de("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,"borderTopWidth",r,!1,"0px")+" "+G(t,"borderTopStyle",r,!1,"solid")+" "+G(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(he)||["#000"])[0]}}),de("borderWidth",{parser:_e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),de("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Re=function(t){var e,i=this.t,s=i.filter||G(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!G(this.data,"filter")):(i.filter=s.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("opacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};de("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(G(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===G(t,"visibility",r)&&0!==e&&(o=0),U?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Re),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ae=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ce=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ae(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};de("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,c,f=t.className,m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ce,a.pr=-11,i=!0,a.b=f,_=Q(t,r),u=t._gsClassPT){for(p={},c=u.data;c;)p[c.p]=1,c=c._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:f.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,l=H(t,_,Q(t),h,p),t.className=f,a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?we:o[i].p),Ae(n,i);r&&(Ae(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(de("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),fe=h.length;fe--;)ge(h[fe]);h=a.prototype,h._firstPT=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,l=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=W(t,""),n=this._overwriteProps;var h,p,f,m,d,g,v,y,T,x=t.style;if(_&&""===x.zIndex&&(h=G(t,"zIndex",r),("auto"===h||""===h)&&(x.zIndex=0)),"string"==typeof e&&(m=x.cssText,h=Q(t,r),x.cssText=m+";"+e,h=H(t,h,Q(t)).difs,!U&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,x.cssText=m),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?u&&(_=!0,""===x.zIndex&&(v=G(t,"zIndex",r),("auto"===v||""===v)&&(x.zIndex=0)),c&&(x.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,f=p;f&&f._next;)f=f._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,f),y.setRatio=T&&xe?Se:ye?ke:Pe,y.data=this._transform||be(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,f=m;f&&f.pr>p.pr;)f=f._next;(p._prev=f?f._prev:d)?p._prev._next=p:m=p,(p._next=f)?f._prev=p:d=p,p=g}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,h,_,u,p,c,f,m,d,g,v=t.style;for(a in e)c=e[a],h=o[a],h?i=h.parse(t,c,a,this,i,n,e):(p=G(t,a,r)+"",d="string"==typeof c,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&b.test(c)?(d||(c=oe(c),c=(c.length>3?"rgba(":"rgb(")+c.join(",")+")"),i=ce(v,a,p,c,!0,"transparent",i,0,n)):!d||-1===c.indexOf(" ")&&-1===c.indexOf(",")?(_=parseFloat(p),f=_||0===_?p.substr((_+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(_=te(t,a,r),f="px"):"left"===a||"top"===a?(_=Z(t,a,r),f="px"):(_="opacity"!==a?0:1,f="")),g=d&&"="===c.charAt(1),g?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),m=c.replace(y,"")):(u=parseFloat(c),m=d?c.substr((u+"").length)||"":""),""===m&&(m=a in s?s[a]:f),c=u||0===u?(g?u+_:u)+m:e[a],f!==m&&""!==m&&(u||0===u)&&(_||0===_)&&(_=$(t,a,_,f),"%"===m?(_/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(p=_+"%")):"em"===m?_/=$(t,a,1,"em"):(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(c=u+_+m)),g&&(u+=_),!_&&0!==_||!u&&0!==u?void 0!==v[a]&&(c||"NaN"!=c+""&&null!=c)?(i=new pe(v,a,u||_||0,0,i,-1,a,!1,0,p,c),i.xs0="none"!==c||"display"!==a&&-1===a.indexOf("Style")?c:p):j("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,_,u-_,i,0,a,l!==!1&&("px"===m||"zIndex"===a),0,p,c),i.xs0=m)):i=ce(v,a,p,c,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},h._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,r,!0)},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)De(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(Q(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,l,u),o.render(i,!0),De(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=H(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)
}}(),window._gsDefine.plugin({propName:"attr",API:2,version:"0.2.0",init:function(t,e){var i;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={};for(i in e)this._addTween(this._proxy,i,parseFloat(t.getAttribute(i)),e[i],i)&&this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length;--s>-1;)e=i[s],this._target.setAttribute(e,this._proxy[e]+"")}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,version:"0.2.0",init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},c=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",c("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),c("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),c("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),c=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--c>-1;)i=f?Math.random():1/u*c,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:c%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),c=u;--c>-1;)a=l[c],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),function(t){"use strict";var e=t.GreenSockGlobals||t;if(!e.TweenLite){var i,s,r,n,a,o=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},h=o("com.greensock"),l=1e-10,_=[].slice,u=function(){},p=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),c={},f=function(i,s,r,n){this.sc=c[i]?c[i].sc:[],c[i]=this,this.gsClass=null,this.func=r;var a=[];this.check=function(h){for(var l,_,u,p,m=s.length,d=m;--m>-1;)(l=c[s[m]]||new f(s[m],[])).gsClass?(a[m]=l.gsClass,d--):h&&l.sc.push(this);if(0===d&&r)for(_=("com.greensock."+i).split("."),u=_.pop(),p=o(_.join("."))[u]=this.gsClass=r.apply(r,a),n&&(e[u]=p,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+i.split(".").join("/"),[],function(){return p}):"undefined"!=typeof module&&module.exports&&(module.exports=p)),m=0;this.sc.length>m;m++)this.sc[m].check()},this.check(!0)},m=t._gsDefine=function(t,e,i,s){return new f(t,e,i,s)},d=h._class=function(t,e,i){return e=e||function(){},m(t,[],function(){return e},i),e};m.globals=e;var g=[0,0,1,1],v=[],y=d("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),T=y.map={},w=y.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?d("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],T[n+"."+o]=T[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(r=y.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},i=["Linear","Quad","Cubic","Quart","Quint,Strong"],s=i.length;--s>-1;)r=i[s]+",Power"+s,w(new y(null,null,1,s),r,"easeOut",!0),w(new y(null,null,2,s),r,"easeIn"+(0===s?",easeNone":"")),w(new y(null,null,3,s),r,"easeInOut");T.linear=h.easing.Linear.easeIn,T.swing=h.easing.Quad.easeInOut;var x=d("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=x.prototype,r.addEventListener=function(t,e,i,s,r){r=r||0;var o,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)o=l[h],o.c===e&&o.s===i?l.splice(h,1):0===_&&r>o.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==n||a||n.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var b=t.requestAnimationFrame,P=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},k=S();for(i=["ms","moz","webkit","o"],s=i.length;--s>-1&&!b;)b=t[i[s]+"RequestAnimationFrame"],P=t[i[s]+"CancelAnimationFrame"]||t[i[s]+"CancelRequestAnimationFrame"];d("Ticker",function(t,e){var i,s,r,o,h,l=this,_=S(),p=e!==!1&&b,c=function(t){k=S(),l.time=(k-_)/1e3;var e,n=l.time-h;(!i||n>0||t===!0)&&(l.frame++,h+=n+(n>=o?.004:o-n),e=!0),t!==!0&&(r=s(c)),e&&l.dispatchEvent("tick")};x.call(l),l.time=l.frame=0,l.tick=function(){c(!0)},l.sleep=function(){null!=r&&(p&&P?P(r):clearTimeout(r),s=u,r=null,l===n&&(a=!1))},l.wake=function(){null!==r&&l.sleep(),s=0===i?u:p&&b?b:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===n&&(a=!0),c(2)},l.fps=function(t){return arguments.length?(i=t,o=1/(i||60),h=this.time+o,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),p=t,l.fps(i),void 0):p},l.fps(t),setTimeout(function(){p&&(!r||5>l.frame)&&l.useRAF(!1)},1500)}),r=h.Ticker.prototype=new h.events.EventDispatcher,r.constructor=h.Ticker;var R=d("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,U){a||n.wake();var i=this.vars.useFrames?z:U;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});n=R.ticker=new h.Ticker,r=R.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var A=function(){a&&S()-k>2e3&&n.wake(),setTimeout(A,2e3)};A(),r.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return a||n.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=p(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(a||n.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&this.render(t,e,!1)}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||l,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){a||t||n.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var C=d("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=C.prototype=new R,r.constructor=C,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},r.rawTime=function(){return a||n.wake(),this._totalTime};var O=d("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=O.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:O.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?X[O.defaultOverwrite]:"number"==typeof h?h>>0:X[h],(o||e instanceof Array||e.push&&p(e))&&"number"!=typeof e[0])for(this._targets=a=_.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(_.call(n,0))):(this._siblings[r]=Y(n,this,!1),1===h&&this._siblings[r].length>1&&j(n,this,null,1,this._siblings[r])):(n=a[r--]=O.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=Y(e,this,!1),1===h&&this._siblings.length>1&&j(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),D=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},M=function(t,e){var i,s={};for(i in t)L[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!E[i]||E[i]&&E[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=O.prototype=new R,r.constructor=O,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,O.version="1.11.4",O.defaultEase=r._ease=new y(null,null,1,1),O.defaultOverwrite="auto",O.ticker=n,O.autoSleep=!0,O.selector=t.$||t.jQuery||function(e){return t.$?(O.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var I=O._internals={isArray:p,isSelector:D},E=O._plugins={},N=O._tweenLookup={},F=0,L=I.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},X={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},z=R._rootFramesTimeline=new C,U=R._rootTimeline=new C;U._startTime=n.time,z._startTime=n.frame,U._active=z._active=!0,R._updateRoot=function(){if(U.render((n.time-U._startTime)*U._timeScale,!1,!1),z.render((n.frame-z._startTime)*z._timeScale,!1,!1),!(n.frame%120)){var t,e,i;for(i in N){for(e=N[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete N[i]}if(i=U._first,(!i||i._paused)&&O.autoSleep&&!z._first&&1===n._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||n.sleep()}}},n.addEventListener("tick",R._updateRoot);var Y=function(t,e,i){var s,r,n=t._gsTweenID;if(N[n||(t._gsTweenID=n="t"+F++)]||(N[n]={target:t,tweens:[]}),e&&(s=N[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return N[n].tweens},j=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var _,u=e._startTime+l,p=[],c=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(_=_||B(e,0,f),0===B(o,_,f)&&(p[c++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((f||!o._initted)&&2e-10>=u-o._startTime||(p[c++]=o)));for(n=c;--n>-1;)o=p[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},B=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*l>n-e?l:(n+=t.totalDuration()/t._timeScale/r)>e+l?0:n-e-l};r._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,h=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=O.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else{i={};for(s in r)L[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",this._startAt=O.to(this.target,0,i),r.immediateRender){if(0===this._time)return}else this._startAt.render(-1,!0)}if(this._ease=h?h instanceof y?r.easeParams instanceof Array?h.config.apply(h,r.easeParams):h:"function"==typeof h?new y(h,r.easeParams):T[h]||O.defaultEase:O.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&O._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&E.css&&this.vars.autoCSS!==!1&&M(this.vars,e);for(n in this.vars){if(_=this.vars[n],L[n])_&&(_ instanceof Array||_.push&&p(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(E[n]&&(h=new E[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&j(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},r.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===h&&(a=this._rawPrevTime,(0===t||0>a||a===l)&&a!==t&&(i=!0,a>l&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||0===a?t:l);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&this._rawPrevTime>l)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===h&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=a=!e||t||0===this._rawPrevTime?t:l)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/h,u=this._easeType,p=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===p?_*=_:2===p?_*=_*_:3===p?_*=_*_*_:4===p&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/h?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||v))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||v)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||v),0===h&&this._rawPrevTime===l&&a!==l&&(this._rawPrevTime=0)))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:O.selector(e)||e;var i,s,r,n,a,o,h,l;if((p(e)||D(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){h=t||a,l=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in h)(n=a[r])&&(n.pg&&n.t._kill(h)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),l&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&O._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(a||n.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=Y(s[i],this,!0);else this._siblings=Y(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?O._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},O.to=function(t,e,i){return new O(t,e,i)},O.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new O(t,e,i)},O.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new O(t,e,s)},O.delayedCall=function(t,e,i,s,r){return new O(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},O.set=function(t,e){return new O(t,0,e)},O.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:O.selector(t)||t;var i,s,r,n;if((p(t)||D(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(O.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=Y(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},O.killTweensOf=O.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=O.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var q=d("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=q.prototype},!0);if(r=q.prototype,q.version="1.10.1",q.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},O._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},q.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===q.API&&(E[(new t[e])._propName]=t[e]);return!0},m.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=d("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){q.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new q(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,q.activate([a]),a},i=t._gsQueue){for(s=0;i.length>s;s++)i[s]();for(r in c)c[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}a=!1}}(window);
/*!
 * VERSION: 1.7.3
 * DATE: 2014-01-14
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,s){var r="x"===s?"Width":"Height",n="scroll"+r,a="client"+r,o=document.body;return i===e||i===t||i===o?Math.max(t[n],o[n])-(e["inner"+r]||Math.max(t[a],o[a])):i[n]-i["offset"+r]},s=window._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.3",init:function(t,s,r){return this._wdw=t===e,this._target=t,this._tween=r,"object"!=typeof s&&(s={y:s}),this._autoKill=s.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=s.x?(this._addTween(this,"x",this.x,"max"===s.x?i(t,"x"):s.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=s.y?(this._addTween(this,"y",this.y,"max"===s.y?i(t,"y"):s.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var s=this._wdw||!this.skipX?this.getX():this.xPrev,r=this._wdw||!this.skipY?this.getY():this.yPrev,n=r-this.yPrev,a=s-this.xPrev;this._autoKill&&(!this.skipX&&(a>7||-7>a)&&i(this._target,"x")>s&&(this.skipX=!0),!this.skipY&&(n>7||-7>n)&&i(this._target,"y")>r&&(this.skipY=!0),this.skipX&&this.skipY&&this._tween.kill()),this._wdw?e.scrollTo(this.skipX?s:this.x,this.skipY?r:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),r=s.prototype;s.max=i,r.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},r.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},r._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),window._gsDefine&&window._gsQueue.pop()();
/* ScrollMagic v1.0.7 | (c) Jan Paepke, @janpaepke | license & info: http://janpaepke.github.io/ScrollMagic */
!function($){ScrollMagic=function(e){"use strict";var t="ScrollMagic",n={container:window,vertical:!0,globalSceneOptions:{},loglevel:2},i=this,o=$.extend({},n,e),s=[],a=!1,l=0,c="PAUSED",g=!0,u=0,d=!1,f=!0,h=function(){if($.each(o,function(e){n.hasOwnProperty(e)||(m(2,'WARNING: Unknown option "'+e+'"'),delete o[e])}),o.container=$(o.container).first(),0==o.container.length)return void m(1,"ERROR creating object ScrollMagic: No valid scroll container supplied");g=!$.contains(document,o.container.get(0)),u=o.vertical?o.container.height():o.container.width(),o.container.on("scroll resize",w);try{TweenLite.ticker.addEventListener("tick",v),d=!0}catch(e){o.container.on("scroll resize",v),d=!1}m(3,"added new "+t+" controller")},p=function(){return o.vertical?o.container.scrollTop():o.container.scrollLeft()},v=function(){if(a&&f){var e=$.isArray(a)?a:s,t=l;l=i.scrollPos();var r=l-t;c=0==r?"PAUSED":r>0?"FORWARD":"REVERSE",i.updateScene(e,!0),0==e.length&&o.loglevel>=3&&m(3,"updating 0 Scenes (nothing added to controller)"),a=!1}},w=function(e){"resize"==e.type&&(u=o.vertical?o.container.height():o.container.width()),a=!0},m=function(e){if(o.loglevel>=e){var n="("+t+") ->",i=Array.prototype.splice.call(arguments,1),s=Function.prototype.bind.call(r,window);i.unshift(e,n),s.apply(window,i)}};return this.addScene=function(e){return $.isArray(e)?$.each(e,function(e,t){i.addScene(t)}):e.parent()!=i?e.addTo(i):-1==$.inArray(s,e)&&(s.push(e),$.each(o.globalSceneOptions,function(t,r){e[t]&&e[t].call(e,r)}),m(3,"added Scene ("+s.length+" total)")),i},this.removeScene=function(e){if($.isArray(e))$.each(e,function(e,t){i.removeScene(t)});else{var t=$.inArray(e,s);t>-1&&(s.splice(t,1),e.remove(),m(3,"removed Scene ("+s.length+" total)"))}return i},this.updateScene=function(e,t){return $.isArray(e)?$.each(e,function(r,n){m(3,"updating Scene "+(r+1)+"/"+e.length+" ("+s.length+" total)"),i.updateScene(n,t)}):t?e.update(!0):($.isArray(a)||(a=[]),-1==$.inArray(e,a)&&a.push(e)),i},this.update=function(e){return w({type:"resize"}),e&&v(),i},this.scrollPos=function(e){return arguments.length?($.isFunction(e)||(e=function(){return e}),p=e,i):p.call(i)},this.info=function(e){var t={size:u,vertical:o.vertical,scrollPos:l,scrollDirection:c,container:o.container,isDocument:g};return arguments.length?void 0!==t[e]?t[e]:void m(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(o.loglevel!=e&&(o.loglevel=e),i):o.loglevel},this.enabled=function(e){return arguments.length?(f!=e&&(f=!!e,i.updateScene(s,!0)),i):f},this.destroy=function(e){for(;s.length>0;){var r=s[s.length-1];r.destroy(e)}return o.container.off("scroll resize",w),d?TweenLite.ticker.removeEventListener("tick",v):o.container.off("scroll resize",v),m(3,"destroyed "+t+" (reset: "+(e?"true":"false")+")"),null},h(),i},ScrollScene=function(e){"use strict";var t,i,o,s,a=["onCenter","onEnter","onLeave"],l="ScrollScene",c={duration:0,offset:0,triggerElement:null,triggerHook:a[0],reverse:!0,tweenChanges:!1,loglevel:2},g=this,u=$.extend({},c,e),d="BEFORE",f=0,h={start:0,end:0},p=!0,v=function(){m(),g.on("change.internal",function(e){m(),"loglevel"!=e.what&&"tweenChanges"!=e.what&&("reverse"!=e.what&&null===u.triggerElement&&R(),g.update(),("DURING"!==d&&"duration"==e.what||"AFTER"===d&&0==u.duration)&&y())}),g.on("progress.internal",function(){E(),y()})},w=function(e){if(u.loglevel>=e){var t="("+l+") ->",n=Array.prototype.splice.call(arguments,1),i=Function.prototype.bind.call(r,window);n.unshift(e,t),i.apply(window,n)}},m=function(){if($.each(u,function(e){c.hasOwnProperty(e)||(w(2,'WARNING: Unknown option "'+e+'"'),delete u[e])}),u.duration=parseFloat(u.duration),(!$.isNumeric(u.duration)||u.duration<0)&&(w(1,'ERROR: Invalid value for option "duration":',u.duration),u.duration=c.duration),u.offset=parseFloat(u.offset),$.isNumeric(u.offset)||(w(1,'ERROR: Invalid value for option "offset":',u.offset),u.offset=c.offset),null!=u.triggerElement&&0==$(u.triggerElement).length&&(w(1,'ERROR: Element defined in option "triggerElement" was not found:',u.triggerElement),u.triggerElement=c.triggerElement),$.isNumeric(u.triggerHook)||-1!=$.inArray(u.triggerHook,a)||(w(1,'ERROR: Invalid value for option "triggerHook": ',u.triggerHook),u.triggerHook=c.triggerHook),!$.isNumeric(u.loglevel)||u.loglevel<0||u.loglevel>3){var e=u.loglevel;u.loglevel=c.loglevel,w(1,'ERROR: Invalid value for option "loglevel":',e)}if(i&&t&&u.triggerElement&&u.loglevel>=2){var r=i.getTweensOf($(u.triggerElement)),n=t.info("vertical");$.each(r,function(e,t){var r=t.vars.css||t.vars,i=n?void 0!==r.top||void 0!==r.bottom:void 0!==r.left||void 0!==r.right;return i?(w(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1):void 0})}},R=function(){h={start:g.triggerOffset()},t&&(h.start-=t.info("size")*g.triggerHook()),h.end=h.start+u.duration},E=function(e){var t=e>=0&&1>=e?e:f;if(i){if(-1===i.repeat())if(("DURING"===d||"AFTER"===d&&0==u.duration)&&i.paused())i.play();else{if("DURING"===d||i.paused())return!1;i.pause()}else{if(t==i.progress())return!1;0==u.duration?"AFTER"==d?i.play():i.reverse():u.tweenChanges?i.tweenTo(t*i.duration()):i.progress(t).pause()}return!0}return!1},y=function(e){if(o&&t){var r=t.info();if(e||"DURING"!==d&&("AFTER"!==d||0!=u.duration)){var i={position:s.inFlow?"relative":"absolute",top:0,left:0},a=o.css("position")!=i.position;s.pushFollowers?"AFTER"===d&&0==parseFloat(s.spacer.css("padding-top"))?a=!0:"BEFORE"===d&&0==parseFloat(s.spacer.css("padding-bottom"))&&(a=!0):i[r.vertical?"top":"left"]=u.duration*f,o.css(i),a&&S()}else{"fixed"!=o.css("position")&&(o.css("position","fixed"),S());var l=n(s.spacer,!0),c=u.reverse||0==u.duration?r.scrollPos-h.start:Math.round(f*u.duration*10)/10;l.top-=parseFloat(s.spacer.css("margin-top")),l[r.vertical?"top":"left"]+=c,o.css({top:l.top,left:l.left})}}},S=function(){if(o&&t&&s.inFlow){var e="AFTER"===d,r="BEFORE"===d,n="DURING"===d,i="fixed"==o.css("position"),a=t.info("vertical"),l=s.spacer.children().first(),c=$.inArray(s.spacer.css("display"),["block","flex","list-item","table","-webkit-box"])>-1,g={};c?(g["margin-top"]=r||n&&i?o.css("margin-top"):"auto",g["margin-bottom"]=e||n&&i?o.css("margin-bottom"):"auto"):g["margin-top"]=g["margin-bottom"]="auto",s.relSize.width?i?$(window).width()==s.spacer.parent().width()?o.css("width","inherit"):o.css("width",s.spacer.width()):o.css("width","100%"):(g["min-width"]=l.outerWidth(!0),g.width=i?g["min-width"]:"auto"),s.relSize.height?i?$(window).height()==s.spacer.parent().height()?o.css("height","inherit"):o.css("height",s.spacer.height()):o.css("height","100%"):(g["min-height"]=l.outerHeight(!c),g.height=i?g["min-height"]:"auto"),s.pushFollowers&&(g["padding"+(a?"Top":"Left")]=u.duration*f,g["padding"+(a?"Bottom":"Right")]=u.duration*(1-f)),s.spacer.css(g)}},b=function(){t&&o&&"DURING"===d&&(t.info("isDocument")||y())},F=function(){t&&o&&("DURING"===d||"AFTER"===d&&0==u.duration)&&(s.relSize.width&&$(window).width()!=s.spacer.parent().width()||s.relSize.height&&$(window).height()!=s.spacer.parent().height())&&S()};return this.parent=function(){return t},this.duration=function(e){return arguments.length?(u.duration!=e&&(u.duration=e,g.trigger("change",{what:"duration",newval:e})),g):u.duration},this.offset=function(e){return arguments.length?(u.offset!=e&&(u.offset=e,g.trigger("change",{what:"offset",newval:e})),g):u.offset},this.triggerElement=function(e){return arguments.length?(u.triggerElement!=e&&(u.triggerElement=e,g.trigger("change",{what:"triggerElement",newval:e})),g):u.triggerElement},this.triggerHook=function(e){if(!arguments.length){var t;if($.isNumeric(u.triggerHook))t=u.triggerHook;else switch(u.triggerHook){case"onCenter":t=.5;break;case"onLeave":t=0;break;case"onEnter":default:t=1}return t}return u.triggerHook!=e&&(u.triggerHook=e,g.trigger("change",{what:"triggerHook",newval:e})),g},this.reverse=function(e){return arguments.length?(u.reverse!=e&&(u.reverse=e,g.trigger("change",{what:"reverse",newval:e})),g):u.reverse},this.tweenChanges=function(e){return arguments.length?(u.tweenChanges!=e&&(u.tweenChanges=e,g.trigger("change",{what:"tweenChanges",newval:e})),g):u.tweenChanges},this.loglevel=function(e){return arguments.length?(u.loglevel!=e&&(u.loglevel=e,g.trigger("change",{what:"loglevel",newval:e})),g):u.loglevel},this.state=function(){return d},this.startPosition=function(){return this.triggerOffset()},this.triggerOffset=function(){var e=u.offset;if(t){var r=t.info();if(null===u.triggerElement)e+=r.size*g.triggerHook();else{for(var i=$(u.triggerElement).first(),o=n(t.info("container"));i.parent().data("ScrollMagicPinSpacer");)i=i.parent();var s=n(i);r.isDocument||(o.top-=r.scrollPos,o.left-=r.scrollPos),e+=r.vertical?s.top-o.top:s.left-o.left}}return e},this.scrollOffset=function(){return h.start},this.update=function(e){if(t)if(e)if(t.enabled()&&p){var r,n=t.info("scrollPos");null!==u.triggerElement&&R(),r=u.duration>0?(n-h.start)/(h.end-h.start):n>=h.start?1:0,g.trigger("update",{startPos:h.start,endPos:h.end,scrollPos:n}),g.progress(r)}else o&&"fixed"==o.css("position")&&y(!0);else t.updateScene(g,!1);return g},this.progress=function(e){if(arguments.length){var r=!1,n=d,i=t?t.info("scrollDirection"):"PAUSED";if(0>=e&&"BEFORE"!==d&&(e>=f||u.reverse)?(f=0,d="BEFORE",r=!0):e>0&&1>e&&(e>=f||u.reverse)?(f=e,d="DURING",r=!0):e>=1&&"AFTER"!==d?(f=1,d="AFTER",r=!0):"DURING"!==d||u.reverse||y(),r){var o={progress:f,state:d,scrollDirection:i},s=d!=n,a="BEFORE"===d&&0==u.duration;s&&(("DURING"===d||0==u.duration)&&g.trigger("enter",o),("BEFORE"===d||"BEFORE"===n)&&g.trigger(a?"end":"start",o)),g.trigger("progress",o),s&&(("AFTER"===d||"AFTER"===n)&&g.trigger(a?"start":"end",o),("DURING"!==d||0==u.duration)&&g.trigger("leave",o))}return g}return f},this.setTween=function(e){i&&g.removeTween();try{i=new TimelineMax({smoothChildTiming:!0}).add(e).pause()}catch(e){w(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenMaxObject")}finally{return e.repeat&&-1===e.repeat()&&(i.repeat(-1),i.yoyo(e.yoyo())),m(),w(3,"added tween"),E(),g}},this.removeTween=function(e){return i&&(e&&E(0),i.kill(),i=void 0,w(3,"removed tween (reset: "+(e?"true":"false")+")")),g},this.setPin=function(e,t){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t=$.extend({},r,t);if(e=$(e).first(),0==e.length)return w(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),g;if("fixed"==e.css("position"))return w(1,"ERROR: Pin does not work with elements that are positioned 'fixed'."),g;if(o){if(o===e)return g;g.removePin()}o=e,o.parent().hide();var n="absolute"!=o.css("position"),i=o.css(["display","top","left","bottom","right"]),a=o.css(["width","height"]);o.parent().show();var l=$("<div></div>").addClass(t.spacerClass).css(i).data("ScrollMagicPinSpacer",!0).css({position:n?"relative":"absolute","margin-left":"auto","margin-right":"auto","box-sizing":"content-box","-moz-box-sizing":"content-box","-webkit-box-sizing":"content-box"});return!n&&t.pushFollowers&&(w(2,"WARNING: If the pinned element is positioned absolutely pushFollowers is disabled."),t.pushFollowers=!1),s={spacer:l,relSize:{width:"%"===a.width.slice(-1),height:"%"===a.height.slice(-1)},pushFollowers:t.pushFollowers,inFlow:n,origStyle:o.attr("style")},s.relSize.width&&l.css("width",a.width),s.relSize.height&&l.css("height",a.height),o.before(l).appendTo(l).css({position:n?"relative":"absolute",top:"auto",left:"auto",bottom:"auto",right:"auto"}),$(window).on("scroll resize",b),w(3,"added pin"),y(),g},this.removePin=function(e){return o&&(e||!t?(o.insertBefore(s.spacer).attr("style",s.origStyle),s.spacer.remove()):"DURING"===d&&y(!0),$(window).off("scroll resize",b),o=void 0,w(3,"removed pin (reset: "+(e?"true":"false")+")")),g},this.addTo=function(e){return t!=e?(t&&t.removeScene(g),t=e,m(),R(),S(),t.info("container").on("resize",F),w(3,"added "+l+" to controller"),e.addScene(g),g.update(),g):void 0},this.enabled=function(e){return arguments.length?(p!=e&&(p=!!e,g.update(!0)),g):p},this.remove=function(){if(t){t.info("container").off("resize",F);var e=t;t=void 0,w(3,"removed "+l+" from controller"),e.removeScene(g)}return g},this.destroy=function(e){return this.removeTween(e),this.removePin(e),this.remove(),this.off("start end enter leave progress change update change.internal progress.internal"),w(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},this.on=function(e,t){if($.isFunction(t)){var r=$.trim(e).toLowerCase().replace(/(\w+)\.(\w+)/g,"$1."+l+"_$2").replace(/( |^)(\w+)( |$)/g,"$1$2."+l+"$3");$(g).on(r,t)}else w(1,"ERROR calling method 'on()': Supplied argument is not a valid callback!");return g},this.off=function(e,t){var r=$.trim(e).toLowerCase().replace(/(\w+)\.(\w+)/g,"$1."+l+"_$2").replace(/( |^)(\w+)( |$)/g,"$1$2."+l+"$3");return $(g).off(r,t),g},this.trigger=function(e,t){w(3,"event fired:",e,"->",t);var r={type:$.trim(e).toLowerCase(),target:g};return $.isPlainObject(t)&&(r=$.extend({},t,r)),$(g).trigger(r),g},v(),g};var e=window.console=window.console||{},t=["error","warn","log"];e.log||(e.log=$.noop),$.each(t,function(t,r){e[r]||(e[r]=e.log)});var r=function(r){(r>t.length||0>=r)&&(r=t.length);var n=new Date,i=("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+":"+("00"+n.getMilliseconds()).slice(-3),o=t[r-1],s=Array.prototype.splice.call(arguments,1),a=Function.prototype.bind.call(e[o],e);s.unshift(i),a.apply(e,s)},n=function(e,t){var r={top:0,left:0},n=e[0];if(n)if(n.getBoundingClientRect){var i=n.getBoundingClientRect();r.top=i.top,r.left=i.left,t||(r.top+=$(document).scrollTop(),r.left+=$(document).scrollLeft())}else r=e.offset()||r,t&&(r.top-=$(document).scrollTop(),r.left-=$(document).scrollLeft());return r}}(jQuery);
/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,n,r){"use strict";function l(e){if(typeof e=="string"||e instanceof String)e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"");return e}var i=function(t){var n=t.length,r=e("head");while(n--)r.has("."+t[n]).length===0&&r.append('<meta class="'+t[n]+'" />')};i(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){typeof FastClick!="undefined"&&typeof n.body!="undefined"&&FastClick.attach(n.body)});var s=function(t,r){if(typeof t=="string"){if(r){var i;if(r.jquery){i=r[0];if(!i)return r}else i=r;return e(i.querySelectorAll(t))}return e(n.querySelectorAll(t))}return e(t,r)},o=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},u=function(e){var t=e.split("-"),n=t.length,r=[];while(n--)n!==0?r.push(t[n]):this.namespace.length>0?r.push(this.namespace,t[n]):r.push(t[n]);return r.reverse().join("-")},a=function(t,n){var r=this,i=!s(this).data(this.attr_name(!0));if(typeof t=="string")return this[t].call(this,n);s(this.scope).is("["+this.attr_name()+"]")?(s(this.scope).data(this.attr_name(!0)+"-init",e.extend({},this.settings,n||t,this.data_options(s(this.scope)))),i&&this.events(this.scope)):s("["+this.attr_name()+"]",this.scope).each(function(){var i=!s(this).data(r.attr_name(!0)+"-init");s(this).data(r.attr_name(!0)+"-init",e.extend({},r.settings,n||t,r.data_options(s(this)))),i&&r.events(this)})},f=function(e,t){function n(){t(e[0])}function r(){this.one("load",n);if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}if(!e.attr("src")){n();return}e[0].complete||e[0].readyState===4?n():r.call(e)};t.matchMedia=t.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,i=e.createElement("body"),s=e.createElement("div");return s.id="mq-test-1",s.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(s),function(e){return s.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,r),t=s.offsetWidth===42,n.removeChild(i),{matches:t,media:e}}}(n),function(e){function a(){n&&(s(a),u&&jQuery.fx.tick())}var n,r=0,i=["webkit","moz"],s=t.requestAnimationFrame,o=t.cancelAnimationFrame,u="undefined"!=typeof jQuery.fx;for(;r<i.length&&!s;r++)s=t[i[r]+"RequestAnimationFrame"],o=o||t[i[r]+"CancelAnimationFrame"]||t[i[r]+"CancelRequestAnimationFrame"];s?(t.requestAnimationFrame=s,t.cancelAnimationFrame=o,u&&(jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!n&&(n=!0,a())},jQuery.fx.stop=function(){n=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-r)),s=t.setTimeout(function(){e(n+i)},i);return r=n+i,s},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(jQuery),t.Foundation={name:"Foundation",version:"5.2.2",media_queries:{small:s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:r},init:function(e,t,n,r,i){var o=[e,n,r,i],u=[];this.rtl=/rtl/i.test(s("html").attr("dir")),this.scope=e||this.scope,this.set_namespace();if(t&&typeof t=="string"&&!/reflow/i.test(t))this.libs.hasOwnProperty(t)&&u.push(this.init_lib(t,o));else for(var a in this.libs)u.push(this.init_lib(a,t));return e},init_lib:function(t,n){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),n&&n.hasOwnProperty(t)?(typeof this.libs[t].settings!="undefined"?e.extend(!0,this.libs[t].settings,n[t]):typeof this.libs[t].defaults!="undefined"&&e.extend(!0,this.libs[t].defaults,n[t]),this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])):(n=n instanceof Array?n:new Array(n),this.libs[t].init.apply(this.libs[t],n))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=o,e.add_namespace=u,e.bindings=a,e.S=this.utils.S},inherit:function(e,t){var n=t.split(" "),r=n.length;while(r--)this.utils.hasOwnProperty(n[r])&&(e[n[r]]=this.utils[n[r]])},set_namespace:function(){var t=this.global.namespace===r?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===r||/false/i.test(t)?"":t},libs:{},utils:{S:s,throttle:function(e,t){var n=null;return function(){var r=this,i=arguments;n==null&&(n=setTimeout(function(){e.apply(r,i),n=null},t))}},debounce:function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r;return clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},data_options:function(t){function a(e){return!isNaN(e-0)&&e!==null&&e!==""&&e!==!1&&e!==!0}function f(t){return typeof t=="string"?e.trim(t):t}var n={},r,i,s,o=function(e){var t=Foundation.global.namespace;return t.length>0?e.data(t+"-options"):e.data("options")},u=o(t);if(typeof u=="object")return u;s=(u||":").split(";"),r=s.length;while(r--)i=s[r].split(":"),/true/i.test(i[1])&&(i[1]=!0),/false/i.test(i[1])&&(i[1]=!1),a(i[1])&&(i[1].indexOf(".")===-1?i[1]=parseInt(i[1],10):i[1]=parseFloat(i[1])),i.length===2&&i[0].length>0&&(n[f(i[0])]=f(i[1]));return n},register_media:function(t,n){Foundation.media_queries[t]===r&&(e("head").append('<meta class="'+n+'">'),Foundation.media_queries[t]=l(e("."+n).css("font-family")))},add_custom_rule:function(e,t){if(t===r&&Foundation.stylesheet)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==r&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }")}},image_loaded:function(e,t){var n=this,r=e.length;r===0&&t(e),e.each(function(){f(n.S(this),function(){r-=1,r===0&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+(new Date)).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}})(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.2.2",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,medium:Foundation.media_queries.medium,large:Foundation.media_queries.large,xlarge:Foundation.media_queries.xlarge,xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(t,n,r){if(/IMG/.test(t[0].nodeName)){var i=t[0].src;if((new RegExp(n,"i")).test(i))return;return t[0].src=n,r(t[0].src)}var s=t.data(this.data_attr+"-last-path");if(s==n)return;return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(n)?(e(t).css("background-image","url("+n+")"),t.data("interchange-last-path",n),r(n)):e.get(n,function(e){t.html(e),t.data(this.data_attr+"-last-path",n),r()})}}},init:function(t,n,r){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),e.extend(!0,this.settings,n,r),this.bindings(n,r),this.load("images"),this.load("nodes")},get_media_hash:function(){var e="";for(var t in this.settings.named_queries)e+=matchMedia(this.settings.named_queries[t]).matches.toString();return e},events:function(){var n=this,r;return e(t).off(".interchange").on("resize.fndtn.interchange",n.throttle(function(){var e=n.get_media_hash();e!==r&&n.resize(),r=e},50)),this},resize:function(){var t=this.cache;if(!this.images_loaded||!this.nodes_loaded){setTimeout(e.proxy(this.resize,this),50);return}for(var n in t)if(t.hasOwnProperty(n)){var r=this.results(n,t[n]);r&&this.settings.directives[r.scenario[1]].call(this,r.el,r.scenario[0],function(){if(arguments[0]instanceof Array)var e=arguments[0];else var e=Array.prototype.slice.call(arguments,0);r.el.trigger(r.scenario[1],e)})}},results:function(e,t){var n=t.length;if(n>0){var r=this.S("["+this.add_namespace("data-uuid")+'="'+e+'"]');while(n--){var i,s=t[n][2];this.settings.named_queries.hasOwnProperty(s)?i=matchMedia(this.settings.named_queries[s]):i=matchMedia(s);if(i.matches)return{el:r,scenario:t[n]}}}return!1},load:function(e,t){return(typeof this["cached_"+e]=="undefined"||t)&&this["update_"+e](),this["cached_"+e]},update_images:function(){var e=this.S("img["+this.data_attr+"]"),t=e.length,n=t,r=0,i=this.data_attr;this.cache={},this.cached_images=[],this.images_loaded=t===0;while(n--){r++;if(e[n]){var s=e[n].getAttribute(i)||"";s.length>0&&this.cached_images.push(e[n])}r===t&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var e=this.S("["+this.data_attr+"]").not("img"),t=e.length,n=t,r=0,i=this.data_attr;this.cached_nodes=[],this.nodes_loaded=t===0;while(n--){r++;var s=e[n].getAttribute(i)||"";s.length>0&&this.cached_nodes.push(e[n]),r===t&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(n){var r=this["cached_"+n].length;while(r--)this.object(e(this["cached_"+n][r]));return e(t).trigger("resize")},parse_params:function(e,t,n){return[this.trim(e),this.convert_directive(t),this.trim(n)]},convert_directive:function(e){var t=this.trim(e);return t.length>0?t:"replace"},object:function(e){var t=this.parse_data_attr(e),n=[],r=t.length;if(r>0)while(r--){var i=t[r].split(/\((.*?)(\))$/);if(i.length>1){var s=i[0].split(","),o=this.parse_params(s[0],s[1],i[1]);n.push(o)}}return this.store(e,n)},store:function(e,t){var n=this.random_str(),r=e.data(this.add_namespace("uuid",!0));return this.cache[r]?this.cache[r]:(e.attr(this.add_namespace("data-uuid"),n),this.cache[n]=t)},trim:function(t){return typeof t=="string"?e.trim(t):t},set_data_attr:function(e){return e?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(e){var t=e.attr(this.attr_name()).split(/\[(.*?)\]/),n=t.length,r=[];while(n--)t[n].replace(/[\W\d]+/,"").length>4&&r.push(t[n]);return r},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.2.2",settings:{use_tallest:!0,before_height_change:e.noop,after_height_change:e.noop},init:function(e,t,n){Foundation.inherit(this,"image_loaded"),this.bindings(t,n),this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(e){this.reflow()}.bind(this))},equalize:function(t){var n=!1,r=t.find("["+this.attr_name()+"-watch]:visible"),i=r.first().offset().top,s=t.data(this.attr_name(!0)+"-init");if(r.length===0)return;s.before_height_change(),t.trigger("before-height-change"),r.height("inherit"),r.each(function(){var t=e(this);t.offset().top!==i&&(n=!0)});if(n)return;var o=r.map(function(){return e(this).outerHeight()}).get();if(s.use_tallest){var u=Math.max.apply(null,o);r.css("height",u)}else{var a=Math.min.apply(null,o);r.css("height",a)}s.after_height_change(),t.trigger("after-height-change")},reflow:function(){var t=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var n=e(this);t.image_loaded(t.S("img",this),function(){t.equalize(n)})})}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.abide={name:"abide",version:"5.2.2",settings:{live_validate:!0,focus_on_invalid:!0,error_labels:!0,timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:\.\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,url:/^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(e,t,r){var i=n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,s=e.value,o=i===s;return o}}},timer:null,init:function(e,t,n){this.bindings(t,n)},events:function(t){var n=this,r=n.S(t).attr("novalidate","novalidate"),i=r.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),r.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",function(e){var t=/ajax/i.test(n.S(this).attr(n.attr_name()));return n.validate(n.S(this).find("input, textarea, select").get(),e,t)}).on("reset",function(){return n.reset(e(this))}).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(e){n.validate([this],e)}).on("keydown.fndtn.abide",function(e){i.live_validate===!0&&(clearTimeout(n.timer),n.timer=setTimeout(function(){n.validate([this],e)}.bind(this),i.timeout))})},reset:function(t){t.removeAttr(this.invalid_attr),e(this.invalid_attr,t).removeAttr(this.invalid_attr),e(".error",t).not("small").removeClass("error")},validate:function(e,t,n){var r=this.parse_patterns(e),i=r.length,s=this.S(e[0]).closest("[data-"+this.attr_name(!0)+"]"),o=s.data(this.attr_name(!0)+"-init")||{},u=/submit/.test(t.type);s.trigger("validated");for(var a=0;a<i;a++)if(!r[a]&&(u||n))return o.focus_on_invalid&&e[a].focus(),s.trigger("invalid"),this.S(e[a]).closest("[data-"+this.attr_name(!0)+"]").attr(this.invalid_attr,""),!1;return(u||n)&&s.trigger("valid"),s.removeAttr(this.invalid_attr),n?!1:!0},parse_patterns:function(e){var t=e.length,n=[];while(t--)n.push(this.pattern(e[t]));return this.check_validation_and_apply_styles(n)},pattern:function(e){var t=e.getAttribute("type"),n=typeof e.getAttribute("required")=="string",r=e.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(r)&&r.length>0?[e,this.settings.patterns[r],n]:r.length>0?[e,new RegExp("^"+r+"$"),n]:this.settings.patterns.hasOwnProperty(t)?[e,this.settings.patterns[t],n]:(r=/.*/,[e,r,n])},check_validation_and_apply_styles:function(t){var n=t.length,r=[],i=this.S(t[0][0]).closest("[data-"+this.attr_name(!0)+"]"),s=i.data(this.attr_name(!0)+"-init")||{};while(n--){var o=t[n][0],u=t[n][2],a=o.value,f=this.S(o).parent(),l=o.getAttribute(this.add_namespace("data-abide-validator")),c=o.type==="radio",h=o.type==="checkbox",p=this.S('label[for="'+o.getAttribute("id")+'"]'),d=u?o.value.length>0:!0,v,m;o.getAttribute(this.add_namespace("data-equalto"))&&(l="equalTo"),f.is("label")?v=f.parent():v=f,c&&u?r.push(this.valid_radio(o,u)):h&&u?r.push(this.valid_checkbox(o,u)):l?(m=this.settings.validators[l].apply(this,[o,u,v]),r.push(m),m?(this.S(o).removeAttr(this.invalid_attr),v.removeClass("error")):(this.S(o).attr(this.invalid_attr,""),v.addClass("error"))):t[n][1].test(a)&&d||!u&&o.value.length<1||e(o).attr("disabled")?(this.S(o).removeAttr(this.invalid_attr),v.removeClass("error"),p.length>0&&s.error_labels&&p.removeClass("error"),r.push(!0),e(o).triggerHandler("valid")):(this.S(o).attr(this.invalid_attr,""),v.addClass("error"),p.length>0&&s.error_labels&&p.addClass("error"),r.push(!1),e(o).triggerHandler("invalid"))}return r},valid_checkbox:function(e,t){var e=this.S(e),n=e.is(":checked")||!t;return n?e.removeAttr(this.invalid_attr).parent().removeClass("error"):e.attr(this.invalid_attr,"").parent().addClass("error"),n},valid_radio:function(e,t){var n=e.getAttribute("name"),r=this.S(e).closest("[data-"+this.attr_name(!0)+"]").find("[name="+n+"]"),i=r.length,s=!1;for(var o=0;o<i;o++)r[o].checked&&(s=!0);for(var o=0;o<i;o++)s?this.S(r[o]).removeAttr(this.invalid_attr).parent().removeClass("error"):this.S(r[o]).attr(this.invalid_attr,"").parent().addClass("error");return s},valid_equal:function(e,t,r){var i=n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,s=e.value,o=i===s;return o?(this.S(e).removeAttr(this.invalid_attr),r.removeClass("error")):(this.S(e).attr(this.invalid_attr,""),r.addClass("error")),o},valid_oneof:function(e,t,n,r){var e=this.S(e),i=this.S("["+this.add_namespace("data-oneof")+"]"),s=i.filter(":checked").length>0;s?e.removeAttr(this.invalid_attr).parent().removeClass("error"):e.attr(this.invalid_attr,"").parent().addClass("error");if(!r){var o=this;i.each(function(){o.valid_oneof.call(o,this,null,null,!0)})}return s}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.2.2",settings:{active_class:"open",align:"bottom",is_hover:!1,opened:function(){},closed:function(){}},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(n){var r=this,i=r.S;i(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(t){var n=i(this).data(r.attr_name(!0)+"-init")||r.settings;if(!n.is_hover||Modernizr.touch)t.preventDefault(),r.toggle(e(this))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t=i(this);clearTimeout(r.timeout);if(t.data(r.data_attr()))var n=i("#"+t.data(r.data_attr())),s=t;else{var n=t;s=i("["+r.attr_name()+"='"+n.attr("id")+"']")}var o=s.data(r.attr_name(!0)+"-init")||r.settings;i(e.target).data(r.data_attr())&&o.is_hover&&r.closeall.call(r),o.is_hover&&r.open.apply(r,[n,s])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t=i(this);r.timeout=setTimeout(function(){if(t.data(r.data_attr())){var e=t.data(r.data_attr(!0)+"-init")||r.settings;e.is_hover&&r.close.call(r,i("#"+t.data(r.data_attr())))}else{var n=i("["+r.attr_name()+'="'+i(this).attr("id")+'"]'),e=n.data(r.attr_name(!0)+"-init")||r.settings;e.is_hover&&r.close.call(r,t)}}.bind(this),150)}).on("click.fndtn.dropdown",function(t){var n=i(t.target).closest("["+r.attr_name()+"-content]");if(i(t.target).data(r.data_attr())||i(t.target).parent().data(r.data_attr()))return;if(!i(t.target).data("revealId")&&n.length>0&&(i(t.target).is("["+r.attr_name()+"-content]")||e.contains(n.first()[0],t.target))){t.stopPropagation();return}r.close.call(r,i("["+r.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+r.attr_name()+"-content]",function(){r.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+r.attr_name()+"-content]",function(){r.settings.closed.call(this)}),i(t).off(".dropdown").on("resize.fndtn.dropdown",r.throttle(function(){r.resize.call(r)},50)),this.resize()},close:function(e){var t=this;e.each(function(){t.S(this).hasClass(t.settings.active_class)&&(t.S(this).css(Foundation.rtl?"right":"left","-99999px").removeClass(t.settings.active_class).prev("["+t.attr_name()+"]").removeClass(t.settings.active_class),t.S(this).trigger("closed",[e]))})},closeall:function(){var t=this;e.each(t.S("["+this.attr_name()+"-content]"),function(){t.close.call(t,t.S(this))})},open:function(e,t){this.css(e.addClass(this.settings.active_class),t),e.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),e.trigger("opened",[e,t])},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(e){var t=this.S("#"+e.data(this.data_attr()));if(t.length===0)return;this.close.call(this,this.S("["+this.attr_name()+"-content]").not(t)),t.hasClass(this.settings.active_class)?this.close.call(this,t):(this.close.call(this,this.S("["+this.attr_name()+"-content]")),this.open.call(this,t,e))},resize:function(){var e=this.S("["+this.attr_name()+"-content].open"),t=this.S("["+this.attr_name()+"='"+e.attr("id")+"']");e.length&&t.length&&this.css(e,t)},css:function(e,t){this.clear_idx();if(this.small()){var n=this.dirs.bottom.call(e,t);e.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:n.top}),e.css(Foundation.rtl?"right":"left","2.5%")}else{var r=t.data(this.attr_name(!0)+"-init")||this.settings;this.style(e,t,r)}return e},style:function(t,n,r){var i=e.extend({position:"absolute"},this.dirs[r.align].call(t,n,r));t.attr("style","").css(i)},dirs:{_base:function(e){var t=this.offsetParent(),n=t.offset(),r=e.offset();return r.top-=n.top,r.left-=n.left,r},top:function(e,t){var n=Foundation.libs.dropdown,r=n.dirs._base.call(this,e),i=e.outerWidth()/2-8;return this.addClass("drop-top"),(e.outerWidth()<this.outerWidth()||n.small())&&n.adjust_pip(i,r),Foundation.rtl?{left:r.left-this.outerWidth()+e.outerWidth(),top:r.top-this.outerHeight()}:{left:r.left,top:r.top-this.outerHeight()}},bottom:function(e,t){var n=Foundation.libs.dropdown,r=n.dirs._base.call(this,e),i=e.outerWidth()/2-8;return(e.outerWidth()<this.outerWidth()||n.small())&&n.adjust_pip(i,r),n.rtl?{left:r.left-this.outerWidth()+e.outerWidth(),top:r.top+e.outerHeight()}:{left:r.left,top:r.top+e.outerHeight()}},left:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e);return this.addClass("drop-left"),{left:n.left-this.outerWidth(),top:n.top}},right:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e);return this.addClass("drop-right"),{left:n.left+e.outerWidth(),top:n.top}}},adjust_pip:function(e,t){var n=Foundation.stylesheet;this.small()&&(e+=t.left-8),this.rule_idx=n.cssRules.length;var r=".f-dropdown.open:before",i=".f-dropdown.open:after",s="left: "+e+"px;",o="left: "+(e-1)+"px;";n.insertRule?(n.insertRule([r,"{",s,"}"].join(" "),this.rule_idx),n.insertRule([i,"{",o,"}"].join(" "),this.rule_idx+1)):(n.addRule(r,s,this.rule_idx),n.addRule(i,o,this.rule_idx+1))},clear_idx:function(){var e=Foundation.stylesheet;this.rule_idx&&(e.deleteRule(this.rule_idx),e.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(t).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.alert={name:"alert",version:"5.2.2",settings:{callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){var n=this,r=this.S;e(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] a.close",function(e){var i=r(this).closest("["+n.attr_name()+"]"),s=i.data(n.attr_name(!0)+"-init")||n.settings;e.preventDefault(),"transitionend"in t||"webkitTransitionEnd"in t||"oTransitionEnd"in t?(i.addClass("alert-close"),i.on("transitionend webkitTransitionEnd oTransitionEnd",function(e){r(this).trigger("close").remove(),s.callback()})):i.fadeOut(300,function(){r(this).trigger("close").remove(),s.callback()})})},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.2.2",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(){var n=this,r=n.S,i=n.settings;n.set_expedition_position(),r(n.scope).off(".magellan").on("click.fndtn.magellan","["+n.add_namespace("data-magellan-arrival")+'] a[href^="#"]',function(t){t.preventDefault();var r=e(this).closest("["+n.attr_name()+"]"),i=r.data("magellan-expedition-init"),s=this.hash.split("#").join(""),o=e("a[name='"+s+"']");o.length===0&&(o=e("#"+s));var u=o.offset().top;u-=r.outerHeight(),e("html, body").stop().animate({scrollTop:u},700,"swing",function(){history.pushState?history.pushState(null,null,"#"+s):location.hash="#"+s})}).on("scroll.fndtn.magellan",n.throttle(this.check_for_arrivals.bind(this),i.throttle_delay)),e(t).on("resize.fndtn.magellan",n.throttle(this.set_expedition_position.bind(this),i.throttle_delay))},check_for_arrivals:function(){var e=this;e.update_arrivals(),e.update_expedition_positions()},set_expedition_position:function(){var t=this;e("["+this.attr_name()+"=fixed]",t.scope).each(function(n,r){var i=e(this),s=i.attr("styles"),o;i.attr("style",""),o=i.offset().top,i.data(t.data_attr("magellan-top-offset"),o),i.attr("style",s)})},update_expedition_positions:function(){var n=this,r=e(t).scrollTop();e("["+this.attr_name()+"=fixed]",n.scope).each(function(){var t=e(this),i=t.data("magellan-top-offset");if(r>=i){var s=t.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]");s.length===0&&(s=t.clone(),s.removeAttr(n.attr_name()),s.attr(n.add_namespace("data-magellan-expedition-clone"),""),t.before(s)),t.css({position:"fixed",top:0})}else t.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]").remove(),t.attr("style","")})},update_arrivals:function(){var n=this,r=e(t).scrollTop();e("["+this.attr_name()+"]",n.scope).each(function(){var t=e(this),i=i=t.data(n.attr_name(!0)+"-init"),s=n.offsets(t,r),o=t.find("["+n.add_namespace("data-magellan-arrival")+"]"),u=!1;s.each(function(e,r){if(r.viewport_offset>=r.top_offset){var s=t.find("["+n.add_namespace("data-magellan-arrival")+"]");return s.not(r.arrival).removeClass(i.active_class),r.arrival.addClass(i.active_class),u=!0,!0}}),u||o.removeClass(i.active_class)})},offsets:function(t,n){var r=this,i=t.data(r.attr_name(!0)+"-init"),s=n;return t.find("["+r.add_namespace("data-magellan-arrival")+"]").map(function(n,o){var u=e(this).data(r.data_attr("magellan-arrival")),a=e("["+r.add_namespace("data-magellan-destination")+"="+u+"]");if(a.length>0){var f=a.offset().top-i.destination_threshold-t.outerHeight();return{destination:a,arrival:e(this),top_offset:f,viewport_offset:s}}}).sort(function(e,t){return e.top_offset<t.top_offset?-1:e.top_offset>t.top_offset?1:0})},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){this.S(this.scope).off(".magellan"),this.S(t).off(".magellan")},reflow:function(){var t=this;e("["+t.add_namespace("data-magellan-expedition-clone")+"]",t.scope).remove()}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";function i(e){var t=/fade/i.test(e),n=/pop/i.test(e);return{animate:t||n,pop:n,fade:t}}Foundation.libs.reveal={name:"reveal",version:"5.2.2",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",bg_class:"reveal-modal-bg",open:function(){},opened:function(){},close:function(){},closed:function(){},bg:e(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(t,n,r){e.extend(!0,this.settings,n,r),this.bindings(n,r)},events:function(e){var t=this,r=t.S;return r(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]",function(e){e.preventDefault();if(!t.locked){var n=r(this),i=n.data(t.data_attr("reveal-ajax"));t.locked=!0;if(typeof i=="undefined")t.open.call(t,n);else{var s=i===!0?n.attr("href"):i;t.open.call(t,n,{url:s})}}}),r(n).on("touchend.fndtn.reveal click.fndtn.reveal",this.close_targets(),function(e){e.preventDefault();if(!t.locked){var n=r("["+t.attr_name()+"].open").data(t.attr_name(!0)+"-init"),i=r(e.target)[0]===r("."+n.bg_class)[0];if(i){if(!n.close_on_background_click)return;e.stopPropagation()}t.locked=!0,t.close.call(t,i?r("["+t.attr_name()+"].open"):r(this).closest("["+t.attr_name()+"]"))}}),r("["+t.attr_name()+"]",this.scope).length>0?r(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):r(this.scope).on("open.fndtn.reveal","["+t.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+t.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.close_video),!0},key_up_on:function(e){var t=this;return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(e){var n=t.S("["+t.attr_name()+"].open"),r=n.data(t.attr_name(!0)+"-init");r&&e.which===27&&r.close_on_esc&&!t.locked&&t.close.call(t,n)}),!0},key_up_off:function(e){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(t,n){var r=this;if(t)if(typeof t.selector!="undefined")var i=r.S("#"+t.data(r.data_attr("reveal-id")));else{var i=r.S(this.scope);n=t}else var i=r.S(this.scope);var s=i.data(r.attr_name(!0)+"-init");if(!i.hasClass("open")){var o=r.S("["+r.attr_name()+"].open");typeof i.data("css-top")=="undefined"&&i.data("css-top",parseInt(i.css("top"),10)).data("offset",this.cache_offset(i)),this.key_up_on(i),i.trigger("open"),o.length<1&&this.toggle_bg(i),typeof n=="string"&&(n={url:n});if(typeof n=="undefined"||!n.url)o.length>0&&this.hide(o,s.css.close),this.show(i,s.css.open);else{var u=typeof n.success!="undefined"?n.success:null;e.extend(n,{success:function(t,n,a){e.isFunction(u)&&u(t,n,a),i.html(t),r.S(i).foundation("section","reflow"),o.length>0&&r.hide(o,s.css.close),r.show(i,s.css.open)}}),e.ajax(n)}}},close:function(e){var e=e&&e.length?e:this.S(this.scope),t=this.S("["+this.attr_name()+"].open"),n=e.data(this.attr_name(!0)+"-init");t.length>0&&(this.locked=!0,this.key_up_off(e),e.trigger("close"),this.toggle_bg(e),this.hide(t,n.css.close,n))},close_targets:function(){var e="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?e+", ."+this.settings.bg_class:e},toggle_bg:function(t){var n=t.data(this.attr_name(!0));this.S("."+this.settings.bg_class).length===0&&(this.settings.bg=e("<div />",{"class":this.settings.bg_class}).appendTo("body").hide()),this.settings.bg.filter(":visible").length>0?this.hide(this.settings.bg):this.show(this.settings.bg)},show:function(n,r){if(r){var s=n.data(this.attr_name(!0)+"-init");if(n.parent("body").length===0){var o=n.wrap('<div style="display: none;" />').parent(),u=this.settings.rootElement||"body";n.
on("closed.fndtn.reveal.wrapped",function(){n.detach().appendTo(o),n.unwrap().unbind("closed.fndtn.reveal.wrapped")}),n.detach().appendTo(u)}var a=i(s.animation);a.animate||(this.locked=!1);if(a.pop){r.top=e(t).scrollTop()-n.data("offset")+"px";var f={top:e(t).scrollTop()+n.data("css-top")+"px",opacity:1};return setTimeout(function(){return n.css(r).animate(f,s.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened")}.bind(this)).addClass("open")}.bind(this),s.animation_speed/2)}if(a.fade){r.top=e(t).scrollTop()+n.data("css-top")+"px";var f={opacity:1};return setTimeout(function(){return n.css(r).animate(f,s.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened")}.bind(this)).addClass("open")}.bind(this),s.animation_speed/2)}return n.css(r).show().css({opacity:1}).addClass("open").trigger("opened")}var s=this.settings;return i(s.animation).fade?n.fadeIn(s.animation_speed/2):(this.locked=!1,n.show())},hide:function(n,r){if(r){var s=n.data(this.attr_name(!0)+"-init"),o=i(s.animation);o.animate||(this.locked=!1);if(o.pop){var u={top:-e(t).scrollTop()-n.data("offset")+"px",opacity:0};return setTimeout(function(){return n.animate(u,s.animation_speed,"linear",function(){this.locked=!1,n.css(r).trigger("closed")}.bind(this)).removeClass("open")}.bind(this),s.animation_speed/2)}if(o.fade){var u={opacity:0};return setTimeout(function(){return n.animate(u,s.animation_speed,"linear",function(){this.locked=!1,n.css(r).trigger("closed")}.bind(this)).removeClass("open")}.bind(this),s.animation_speed/2)}return n.hide().css(r).removeClass("open").trigger("closed")}var s=this.settings;return i(s.animation).fade?n.fadeOut(s.animation_speed/2):n.hide()},close_video:function(t){var n=e(".flex-video",t.target),r=e("iframe",n);r.length>0&&(r.attr("data-src",r[0].src),r.attr("src","about:blank"),n.hide())},open_video:function(t){var n=e(".flex-video",t.target),i=n.find("iframe");if(i.length>0){var s=i.attr("data-src");if(typeof s=="string")i[0].src=i.attr("data-src");else{var o=i[0].src;i[0].src=r,i[0].src=o}n.show()}},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},cache_offset:function(e){var t=e.show().height()+parseInt(e.css("top"),10);return e.hide(),t},off:function(){e(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.2.2",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,tip_template:function(e,t){return'<span data-selector="'+e+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'">'+t+'<span class="nub"></span></span>'}},cache:{},init:function(e,t,n){Foundation.inherit(this,"random_str"),this.bindings(t,n)},events:function(t){var n=this,r=n.S;n.create(this.S(t)),e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(t){var i=r(this),s=e.extend({},n.settings,n.data_options(i)),o=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&r(t.target).is("a"))return!1;if(/mouse/i.test(t.type)&&n.ie_touch(t))return!1;if(i.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&t.preventDefault(),n.hide(i);else{if(s.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type))return;!s.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&(t.preventDefault(),r(s.tooltip_class+".open").hide(),o=!0),/enter|over/i.test(t.type)?this.timer=setTimeout(function(){var e=n.showTip(i)}.bind(this),n.settings.hover_delay):t.type==="mouseout"||t.type==="mouseleave"?(clearTimeout(this.timer),n.hide(i)):n.showTip(i)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(t){if(/mouse/i.test(t.type)&&n.ie_touch(t))return!1;if(e(this).data("tooltip-open-event-type")=="touch"&&t.type=="mouseleave")return;e(this).data("tooltip-open-event-type")=="mouse"&&/MSPointerDown|touchstart/i.test(t.type)?n.convert_to_touch(e(this)):n.hide(e(this))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(e){n.hide(r(this))})},ie_touch:function(e){return!1},showTip:function(e){var t=this.getTip(e);return this.show(e)},getTip:function(t){var n=this.selector(t),r=e.extend({},this.settings,this.data_options(t)),i=null;return n&&(i=this.S('span[data-selector="'+n+'"]'+r.tooltip_class)),typeof i=="object"?i:!1},selector:function(e){var t=e.attr("id"),n=e.attr(this.attr_name())||e.attr("data-selector");return(t&&t.length<1||!t)&&typeof n!="string"&&(n=this.random_str(6),e.attr("data-selector",n)),t&&t.length>0?t:n},create:function(n){var r=this,i=e.extend({},this.settings,this.data_options(n)),s=this.settings.tip_template;typeof i.tip_template=="string"&&t.hasOwnProperty(i.tip_template)&&(s=t[i.tip_template]);var o=e(s(this.selector(n),e("<div></div>").html(n.attr("title")).html())),u=this.inheritable_classes(n);o.addClass(u).appendTo(i.append_to),Modernizr.touch&&(o.append('<span class="tap-to-close">'+i.touch_close_text+"</span>"),o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(e){r.hide(n)})),n.removeAttr("title").attr("title","")},reposition:function(t,n,r){var i,s,o,u,a,f;n.css("visibility","hidden").show(),i=t.data("width"),s=n.children(".nub"),o=s.outerHeight(),u=s.outerHeight(),this.small()?n.css({width:"100%"}):n.css({width:i?i:"auto"}),f=function(e,t,n,r,i,s){return e.css({top:t?t:"auto",bottom:r?r:"auto",left:i?i:"auto",right:n?n:"auto"}).end()},f(n,t.offset().top+t.outerHeight()+10,"auto","auto",t.offset().left);if(this.small())f(n,t.offset().top+t.outerHeight()+10,"auto","auto",12.5,e(this.scope).width()),n.addClass("tip-override"),f(s,-o,"auto","auto",t.offset().left);else{var l=t.offset().left;Foundation.rtl&&(s.addClass("rtl"),l=t.offset().left+t.outerWidth()-n.outerWidth()),f(n,t.offset().top+t.outerHeight()+10,"auto","auto",l),n.removeClass("tip-override"),r&&r.indexOf("tip-top")>-1?(Foundation.rtl&&s.addClass("rtl"),f(n,t.offset().top-n.outerHeight(),"auto","auto",l).removeClass("tip-override")):r&&r.indexOf("tip-left")>-1?(f(n,t.offset().top+t.outerHeight()/2-n.outerHeight()/2,"auto","auto",t.offset().left-n.outerWidth()-o).removeClass("tip-override"),s.removeClass("rtl")):r&&r.indexOf("tip-right")>-1&&(f(n,t.offset().top+t.outerHeight()/2-n.outerHeight()/2,"auto","auto",t.offset().left+t.outerWidth()+o).removeClass("tip-override"),s.removeClass("rtl"))}n.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(t){var n=e.extend({},this.settings,this.data_options(t)),r=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(n.additional_inheritable_classes),i=t.attr("class"),s=i?e.map(i.split(" "),function(t,n){if(e.inArray(t,r)!==-1)return t}).join(" "):"";return e.trim(s)},convert_to_touch:function(t){var n=this,r=n.getTip(t),i=e.extend({},n.settings,n.data_options(t));r.find(".tap-to-close").length===0&&(r.append('<span class="tap-to-close">'+i.touch_close_text+"</span>"),r.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(e){n.hide(t)})),t.data("tooltip-open-event-type","touch")},show:function(e){var t=this.getTip(e);e.data("tooltip-open-event-type")=="touch"&&this.convert_to_touch(e),this.reposition(e,t,e.attr("class")),e.addClass("open"),t.fadeIn(150)},hide:function(e){var t=this.getTip(e);t.fadeOut(150,function(){t.find(".tap-to-close").remove(),t.off("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),e.removeClass("open")})},off:function(){var t=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(n){e("["+t.attr_name()+"]").eq(n).attr("title",e(this).text())}).remove()},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.tab={name:"tab",version:"5.2.2",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(e,t,n){var r=this,i=this.S;this.bindings(t,n),this.handle_location_hash_change(),i("["+this.attr_name()+"] > dd.active > a",this.scope).each(function(){r.default_tab_hashes.push(this.hash)})},events:function(){var e=this,n=this.S;n(this.scope).off(".tab").on("click.fndtn.tab","["+this.attr_name()+"] > dd > a",function(t){var r=n(this).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");if(!r.is_hover||Modernizr.touch)t.preventDefault(),t.stopPropagation(),e.toggle_active_tab(n(this).parent())}).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > dd > a",function(t){var r=n(this).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");r.is_hover&&e.toggle_active_tab(n(this).parent())}),n(t).on("hashchange.fndtn.tab",function(t){t.preventDefault(),e.handle_location_hash_change()})},handle_location_hash_change:function(){var t=this,n=this.S;n("["+this.attr_name()+"]",this.scope).each(function(){var i=n(this).data(t.attr_name(!0)+"-init");if(i.deep_linking){var s=t.scope.location.hash;if(s!=""){var o=n(s);if(o.hasClass("content")&&o.parent().hasClass("tab-content"))t.toggle_active_tab(e("["+t.attr_name()+"] > dd > a[href="+s+"]").parent());else{var u=o.closest(".content").attr("id");u!=r&&t.toggle_active_tab(e("["+t.attr_name()+"] > dd > a[href=#"+u+"]").parent(),s)}}else for(var a in t.default_tab_hashes)t.toggle_active_tab(e("["+t.attr_name()+"] > dd > a[href="+t.default_tab_hashes[a]+"]").parent())}})},toggle_active_tab:function(n,i){var s=this.S,o=n.closest("["+this.attr_name()+"]"),u=n.children("a").first(),a="#"+u.attr("href").split("#")[1],f=s(a),l=n.siblings(),c=o.data(this.attr_name(!0)+"-init");s(this).data(this.data_attr("tab-content"))&&(a="#"+s(this).data(this.data_attr("tab-content")).split("#")[1],f=s(a));if(c.deep_linking){var h=e("body,html").scrollTop();i!=r?t.location.hash=i:t.location.hash=a,c.scroll_to_content?i==r||i==a?n.parent()[0].scrollIntoView():s(a)[0].scrollIntoView():(i==r||i==a)&&e("body,html").scrollTop(h)}n.addClass(c.active_class).triggerHandler("opened"),l.removeClass(c.active_class),f.siblings().removeClass(c.active_class).end().addClass(c.active_class),c.callback(n),f.triggerHandler("toggled",[n]),o.triggerHandler("toggled",[f])},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.2.2",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'},close_selectors:".clearing-close",touch_label:"",init:!1,locked:!1},init:function(e,t,n){var r=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(t,n),r.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(r.S("li",this.scope)):r.S("["+this.attr_name()+"]",this.scope).each(function(){r.assemble(r.S("li",this))})},events:function(r){var i=this,s=i.S;e(".scroll-container").length>0&&(this.scope=e(".scroll-container")),s(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li",function(e,t,n){var t=t||s(this),n=n||t,r=t.next("li"),o=t.closest("["+i.attr_name()+"]").data(i.attr_name(!0)+"-init"),u=s(e.target);e.preventDefault(),o||(i.init(),o=t.closest("["+i.attr_name()+"]").data(i.attr_name(!0)+"-init")),n.hasClass("visible")&&t[0]===n[0]&&r.length>0&&i.is_open(t)&&(n=r,u=s("img",n)),i.open(u,t,n),i.update_paddles(n)}).on("click.fndtn.clearing",".clearing-main-next",function(e){i.nav(e,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(e){i.nav(e,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(e){Foundation.libs.clearing.close(e,this)}),e(n).on("keydown.fndtn.clearing",function(e){i.keydown(e)}),s(t).off(".clearing").on("resize.fndtn.clearing",function(){i.resize()}),this.swipe_events(r)},swipe_events:function(e){var t=this,n=t.S;n(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(e){e.touches||(e=e.originalEvent);var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:r};n(this).data("swipe-transition",t),e.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(e){e.touches||(e=e.originalEvent);if(e.touches.length>1||e.scale&&e.scale!==1)return;var r=n(this).data("swipe-transition");typeof r=="undefined"&&(r={}),r.delta_x=e.touches[0].pageX-r.start_page_x,typeof r.is_scrolling=="undefined"&&(r.is_scrolling=!!(r.is_scrolling||Math.abs(r.delta_x)<Math.abs(e.touches[0].pageY-r.start_page_y)));if(!r.is_scrolling&&!r.active){e.preventDefault();var i=r.delta_x<0?"next":"prev";r.active=!0,t.nav(e,i)}}).on("touchend.fndtn.clearing",".visible-img",function(e){n(this).data("swipe-transition",{}),e.stopPropagation()})},assemble:function(t){var n=t.parent();if(n.parent().hasClass("carousel"))return;n.after('<div id="foundationClearingHolder"></div>');var r=n.detach(),i="";if(r[0]==null)return;i=r[0].outerHTML;var s=this.S("#foundationClearingHolder"),o=n.data(this.attr_name(!0)+"-init"),r=n.detach(),u={grid:'<div class="carousel">'+i+"</div>",viewing:o.templates.viewing},a='<div class="clearing-assembled"><div>'+u.viewing+u.grid+"</div></div>",f=this.settings.touch_label;Modernizr.touch&&(a=e(a).find(".clearing-touch-label").html(f).end()),s.after(a).remove()},open:function(t,r,i){function p(){setTimeout(function(){this.image_loaded(l,function(){l.outerWidth()===1&&!h?p.call(this):d.call(this,l)}.bind(this))}.bind(this),50)}function d(t){var n=e(t);t.css("visibility","visible"),o.css("overflow","hidden"),u.addClass("clearing-blackout"),a.addClass("clearing-container"),f.show(),this.fix_height(i).caption(s.S(".clearing-caption",f),s.S("img",i)).center_and_label(t,c).shift(r,i,function(){i.siblings().removeClass("visible"),i.addClass("visible")})}var s=this,o=e(n.body),u=i.closest(".clearing-assembled"),a=s.S("div",u).first(),f=s.S(".visible-img",a),l=s.S("img",f).not(t),c=s.S(".clearing-touch-label",a),h=!1;l.error(function(){h=!0}),this.locked()||(l.attr("src",this.load(t)).css("visibility","hidden"),p.call(this))},close:function(t,r){t.preventDefault();var i=function(e){return/blackout/.test(e.selector)?e:e.closest(".clearing-blackout")}(e(r)),s=e(n.body),o,u;return r===t.target&&i&&(s.css("overflow",""),o=e("div",i).first(),u=e(".visible-img",o),this.settings.prev_index=0,e("ul["+this.attr_name()+"]",i).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),o.removeClass("clearing-container"),u.hide()),!1},is_open:function(e){return e.parent().prop("style").length>0},keydown:function(t){var n=e(".clearing-blackout ul["+this.attr_name()+"]"),r=this.rtl?37:39,i=this.rtl?39:37,s=27;t.which===r&&this.go(n,"next"),t.which===i&&this.go(n,"prev"),t.which===s&&this.S("a.clearing-close").trigger("click")},nav:function(t,n){var r=e("ul["+this.attr_name()+"]",".clearing-blackout");t.preventDefault(),this.go(r,n)},resize:function(){var t=e("img",".clearing-blackout .visible-img"),n=e(".clearing-touch-label",".clearing-blackout");t.length&&this.center_and_label(t,n)},fix_height:function(e){var t=e.parent().children(),n=this;return t.each(function(){var e=n.S(this),t=e.find("img");e.height()>t.outerHeight()&&e.addClass("fix-height")}).closest("ul").width(t.length*100+"%"),this},update_paddles:function(e){var t=e.closest(".carousel").siblings(".visible-img");e.next().length>0?this.S(".clearing-main-next",t).removeClass("disabled"):this.S(".clearing-main-next",t).addClass("disabled"),e.prev().length>0?this.S(".clearing-main-prev",t).removeClass("disabled"):this.S(".clearing-main-prev",t).addClass("disabled")},center_and_label:function(e,t){return this.rtl?(e.css({marginRight:-(e.outerWidth()/2),marginTop:-(e.outerHeight()/2),left:"auto",right:"50%"}),t.length>0&&t.css({marginRight:-(t.outerWidth()/2),marginTop:-(e.outerHeight()/2)-t.outerHeight()-10,left:"auto",right:"50%"})):(e.css({marginLeft:-(e.outerWidth()/2),marginTop:-(e.outerHeight()/2)}),t.length>0&&t.css({marginLeft:-(t.outerWidth()/2),marginTop:-(e.outerHeight()/2)-t.outerHeight()-10})),this},load:function(e){if(e[0].nodeName==="A")var t=e.attr("href");else var t=e.parent().attr("href");return this.preload(e),t?t:e.attr("src")},preload:function(e){this.img(e.closest("li").next()).img(e.closest("li").prev())},img:function(e){if(e.length){var t=new Image,n=this.S("a",e);n.length?t.src=n.attr("href"):t.src=this.S("img",e).attr("src")}return this},caption:function(e,t){var n=t.attr("data-caption");return n?e.html(n).show():e.text("").hide(),this},go:function(e,t){var n=this.S(".visible",e),r=n[t]();r.length&&this.S("img",r).trigger("click",[n,r])},shift:function(e,t,n){var r=t.parent(),i=this.settings.prev_index||t.index(),s=this.direction(r,e,t),o=this.rtl?"right":"left",u=parseInt(r.css("left"),10),a=t.outerWidth(),f,l={};t.index()!==i&&!/skip/.test(s)?/left/.test(s)?(this.lock(),l[o]=u+a,r.animate(l,300,this.unlock())):/right/.test(s)&&(this.lock(),l[o]=u-a,r.animate(l,300,this.unlock())):/skip/.test(s)&&(f=t.index()-this.settings.up_count,this.lock(),f>0?(l[o]=-(f*a),r.animate(l,300,this.unlock())):(l[o]=0,r.animate(l,300,this.unlock()))),n()},direction:function(e,t,n){var r=this.S("li",e),i=r.outerWidth()+r.outerWidth()/4,s=Math.floor(this.S(".clearing-container").outerWidth()/i)-1,o=r.index(n),u;return this.settings.up_count=s,this.adjacent(this.settings.prev_index,o)?o>s&&o>this.settings.prev_index?u="right":o>s-1&&o<=this.settings.prev_index?u="left":u=!1:u="skip",this.settings.prev_index=o,u},adjacent:function(e,t){for(var n=t+1;n>=t-1;n--)if(n===e)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(t).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,this,this.document),!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return u.raw?e:encodeURIComponent(e)}function n(e){return u.raw?e:decodeURIComponent(e)}function r(e){return t(u.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(o," "))}catch(t){return}try{return u.json?JSON.parse(e):e}catch(t){}}function s(t,n){var r=u.raw?t:i(t);return e.isFunction(n)?n(r):r}var o=/\+/g,u=e.cookie=function(i,o,l){if(void 0!==o&&!e.isFunction(o)){if(l=e.extend({},u.defaults,l),"number"==typeof l.expires){var p=l.expires,v=l.expires=new Date;v.setDate(v.getDate()+p)}return document.cookie=[t(i),"=",r(o),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var m=i?void 0:{},g=document.cookie?document.cookie.split("; "):[],y=0,w=g.length;w>y;y++){var E=g[y].split("="),S=n(E.shift()),x=E.join("=");if(i&&i===S){m=s(x,o);break}i||void 0===(x=s(x))||(m[S]=x)}return m};u.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}}),function(e,t,n,r){"use strict";var i=i||!1;Foundation.libs.joyride={name:"joyride",version:"5.2.2",defaults:{expose:!1,modal:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(t,n,r){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||e.extend({},this.defaults,r||n),this.bindings(n,r)},events:function(){var n=this;e(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(e){e.preventDefault(),this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(e){e.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)),e(t).off(".joyride").on("resize.fndtn.joyride",n.throttle(function(){if(e("["+n.attr_name()+"]").length>0&&n.settings.$next_tip){if(n.settings.exposed.length>0){var t=e(n.settings.exposed);t.each(function(){var t=e(this);n.un_expose(t),n.expose(t)})}n.is_phone()?n.pos_phone():n.pos_default(!1,!0)}},100))},start:function(){var t=this,n=e("["+this.attr_name()+"]",this.scope),r=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],i=r.length;if(!n.length>0)return;this.settings.init||this.events(),this.settings=n.data(this.attr_name(!0)+"-init"),this.settings.$content_el=n,this.settings.$body=e(this.settings.tip_container),this.settings.body_offset=e(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,typeof e.cookie!="function"&&(this.settings.cookie_monster=!1);if(!this.settings.cookie_monster||this.settings.cookie_monster&&!e.cookie(this.settings.cookie_name))this.settings.$tip_content.each(function(n){var s=e(this);this.settings=e.extend({},t.defaults,t.data_options(s));var o=i;while(o--)t.settings[r[o]]=parseInt(t.settings[r[o]],10);t.create({$li:s,index:n})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")},resume:function(){this.set_li(),this.show()},tip_template:function(t){var n,r;return t.tip_class=t.tip_class||"",n=e(this.settings.template.tip).addClass(t.tip_class),r=e.trim(e(t.li).html())+this.button_text(t.button_text)+this.settings.template.link+this.timer_instance(t.index),n.append(e(this.settings.template.wrapper)),n.first().attr(this.add_namespace("data-index"),t.index),e(".joyride-content-wrapper",n).append(r),n[0]},timer_instance:function(t){var n;return t===0&&this.settings.start_timer_on_click&&this.settings.timer>0||this.settings.timer===0?n="":n=e(this.settings.template.timer)[0].outerHTML,n},button_text:function(t){return this.settings.next_button?(t=e.trim(t)||"Next",t=e(this.settings.template.button).append(t)[0].outerHTML):t="",t},create:function(t){var n=t.$li.attr(this.add_namespace("data-button"))||t.$li.attr(this.add_namespace("data-text")),r=t.$li.attr("class"),i=e(this.tip_template({tip_class:r,index:t.index,button_text:n,li:t.$li}));e(this.settings.tip_container).append(i)},show:function(t){var n=null;this.settings.$li===r||e.inArray(this.settings.$li.index(),this.settings.pause_after)===-1?(this.settings.paused?this.settings.paused=!1:this.set_li(t),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0?(t&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=e.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],/body/i.test(this.settings.$target.selector)||this.scroll_to(),this.is_phone()?this.pos_phone(!0):this.pos_default(!0),n=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(n.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(n.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fadeSpeed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip):this.settings.$li&&this.settings.$target.length<1?this.show():this.end()):this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||e(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(e.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(e){e?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=e(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var t=this.settings.$li.attr(this.add_namespace("data-class")),r=this.settings.$li.attr(this.add_namespace("data-id")),i=function(){return r?e(n.getElementById(r)):t?e("."+t).first():e("body")};this.settings.$target=i()},scroll_to:function(){var n,r;n=e(t).height()/2,r=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),r!=0&&e("html, body").animate({scrollTop:r},this.settings.scroll_speed,"swing")},paused:function(){return e.inArray(this.settings.$li.index()+1,this.settings.pause_after)===-1},restart:function(){this.hide(),this.settings.$li=r,this.show("init")},pos_default:function(n,r){var i=Math.ceil(e(t).height()/2),s=this.settings.$next_tip.offset(),o=this.settings.$next_tip.find(".joyride-nub"),u=Math.ceil(o.outerWidth()/2),a=Math.ceil(o.outerHeight()/2),f=n||!1;f&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),typeof r=="undefined"&&(r=!1),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(o):(this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+a+this.settings.$target.outerHeight(),left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+a+this.settings.$target.outerHeight(),left:this.settings.$target.offset().left}),this.nub_position(o,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-a,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-a,left:this.settings.$target.offset().left}),this.nub_position(o,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+u}),this.nub_position(o,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-u}),this.nub_position(o,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(o.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())),f&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(t){var n=this.settings.$next_tip.outerHeight(),r=this.settings.$next_tip.offset(),i=this.settings.$target.outerHeight(),s=e(".joyride-nub",this.settings.$next_tip),o=Math.ceil(s.outerHeight()/2),u=t||!1;s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),u&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(s):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-n-o}),s.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+i+o}),s.addClass("top")),u&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(e){this.center(),e.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var t=e(".joyride-modal-bg");t.length<1&&e("body").append(this.settings.template.modal).show(),/pop/i.test(this.settings.tip_animation)?t.show():t.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var n,r,i,s,o,u="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof e)i=arguments[0];else{if(!this.settings.$target||!!/body/i.test(this.settings.$target.selector))return!1;i=this.settings.$target}if(i.length<1)return t.console&&console.error("element not valid",i),!1;n=e(this.settings.template.expose),this.settings.$body.append(n),n.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),r=e(this.settings.template.expose_cover),s={zIndex:i.css("z-index"),position:i.css("position")},o=i.attr("class")==null?"":i.attr("class"),i.css("z-index",parseInt(n.css("z-index"))+1),s.position=="static"&&i.css("position","relative"),i.data("expose-css",s),i.data("orig-class",o),i.attr("class",o+" "+this.settings.expose_add_class),r.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(r),n.addClass(u),r.addClass(u),i.data("expose",u),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,i),this.add_exposed(i)},un_expose:function(){var n,r,i,s,o,u=!1;if(arguments.length>0&&arguments[0]instanceof e)r=arguments[0];else{if(!this.settings.$target||!!/body/i.test(this.settings.$target.selector))return!1;r=this.settings.$target}if(r.length<1)return t.console&&console.error("element not valid",r),!1;n=r.data("expose"),i=e("."+n),arguments.length>1&&(u=arguments[1]),u===!0?e(".joyride-expose-wrapper,.joyride-expose-cover").remove():i.remove(),s=r.data("expose-css"),s.zIndex=="auto"?r.css("z-index",""):r.css("z-index",s.zIndex),s.position!=r.css("position")&&(s.position=="static"?r.css("position",""):r.css("position",s.position)),o=r.data("orig-class"),r.attr("class",o),r.removeData("orig-classes"),r.removeData("expose"),r.removeData("expose-z-index"),this.remove_exposed(r)},add_exposed:function(t){this.settings.exposed=this.settings.exposed||[],t instanceof e||typeof t=="object"?this.settings.exposed.push(t[0]):typeof t=="string"&&this.settings.exposed.
push(t)},remove_exposed:function(t){var n,r;t instanceof e?n=t[0]:typeof t=="string"&&(n=t),this.settings.exposed=this.settings.exposed||[],r=this.settings.exposed.length;while(r--)if(this.settings.exposed[r]==n){this.settings.exposed.splice(r,1);return}},center:function(){var n=e(t);return this.settings.$next_tip.css({top:(n.height()-this.settings.$next_tip.outerHeight())/2+n.scrollTop(),left:(n.width()-this.settings.$next_tip.outerWidth())/2+n.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(n){var r=e(t),i=r.height()/2,s=Math.ceil(this.settings.$target.offset().top-i+this.settings.$next_tip.outerHeight()),o=r.width()+r.scrollLeft(),u=r.height()+s,a=r.height()+r.scrollTop(),f=r.scrollTop();return s<f&&(s<0?f=0:f=s),u>a&&(a=u),[n.offset().top<f,o<n.offset().left+n.outerWidth(),a<n.offset().top+n.outerHeight(),r.scrollLeft()>n.offset().left]},visible:function(e){var t=e.length;while(t--)if(e[t])return!1;return!0},nub_position:function(e,t,n){t==="auto"?e.addClass(n):e.addClass(t)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(t){this.settings.cookie_monster&&e.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.$next_tip.data("closed",!0),e(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),typeof t=="undefined"&&(this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip)),e(".joyride-tip-guide").remove()},off:function(){e(this.scope).off(".joyride"),e(t).off(".joyride"),e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),e(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate),this.settings={}},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";var i=function(){},s=function(r,i){if(r.hasClass(i.slides_container_class))return this;var s=this,a,f=r,l,c,h,p=0,d,v=!1,m=f.find("."+i.active_slide_class).length>0;s.cache={},s.slides=function(){return f.children(i.slide_selector)},m||s.slides().first().addClass(i.active_slide_class),s.update_slide_number=function(t){i.slide_number&&(l.find("span:first").text(parseInt(t)+1),l.find("span:last").text(s.slides().length)),i.bullets&&(c.children().removeClass(i.bullets_active_class),e(c.children().get(t)).addClass(i.bullets_active_class))},s.update_active_link=function(t){var n=e('[data-orbit-link="'+s.slides().eq(t).attr("data-orbit-slide")+'"]');n.siblings().removeClass(i.bullets_active_class),n.addClass(i.bullets_active_class)},s.build_markup=function(){f.wrap('<div class="'+i.container_class+'"></div>'),a=f.parent(),f.addClass(i.slides_container_class),f.addClass(i.animation),i.stack_on_small&&a.addClass(i.stack_on_small_class),i.navigation_arrows&&(a.append(e('<a href="#"><span></span></a>').addClass(i.prev_class)),a.append(e('<a href="#"><span></span></a>').addClass(i.next_class))),i.timer&&(h=e("<div>").addClass(i.timer_container_class),h.append("<span>"),i.timer_show_progress_bar&&h.append(e("<div>").addClass(i.timer_progress_class)),h.addClass(i.timer_paused_class),a.append(h)),i.slide_number&&(l=e("<div>").addClass(i.slide_number_class),l.append("<span></span> "+i.slide_number_text+" <span></span>"),a.append(l)),i.bullets&&(c=e("<ol>").addClass(i.bullets_container_class),a.append(c),c.wrap('<div class="orbit-bullets-container"></div>'),s.slides().each(function(t,n){var r=e("<li>").attr("data-orbit-slide",t);c.append(r)}))},s._prepare_direction=function(t,n){var r="next";t<=p&&(r="prev"),i.animation==="slide"&&setTimeout(function(){f.removeClass("swipe-prev swipe-next"),r==="next"?f.addClass("swipe-next"):r==="prev"&&f.addClass("swipe-prev")},0);var o=s.slides();if(t>=o.length){if(!i.circular)return!1;t=0}else if(t<0){if(!i.circular)return!1;t=o.length-1}var u=e(o.get(p)),a=e(o.get(t));return[r,u,a,t]},s._goto=function(e,t){if(e===null)return!1;if(s.cache.animating)return!1;if(e===p)return!1;typeof s.cache.timer=="object"&&s.cache.timer.restart();var n=s.slides();s.cache.animating=!0;var r=s._prepare_direction(e),o=r[0],u=r[1],a=r[2],e=r[3];if(r===!1)return!1;f.trigger("before-slide-change.fndtn.orbit"),i.before_slide_change(),p=e,u.css("transitionDuration",i.animation_speed+"ms"),a.css("transitionDuration",i.animation_speed+"ms");var l=function(){var r=function(){t===!0&&s.cache.timer.restart(),s.update_slide_number(p),a.addClass(i.active_slide_class),s.update_active_link(e),f.trigger("after-slide-change.fndtn.orbit",[{slide_number:p,total_slides:n.length}]),i.after_slide_change(p,n.length),setTimeout(function(){s.cache.animating=!1},100)};f.height()!=a.height()&&i.variable_height?f.animate({height:a.height()},250,"linear",r):r()};if(n.length===1)return l(),!1;var c=function(){o==="next"&&d.next(u,a,l),o==="prev"&&d.prev(u,a,l)};a.height()>f.height()&&i.variable_height?f.animate({height:a.height()},250,"linear",c):c()},s.next=function(e){e.stopImmediatePropagation(),e.preventDefault(),s._prepare_direction(p+1),setTimeout(function(){s._goto(p+1)},100)},s.prev=function(e){e.stopImmediatePropagation(),e.preventDefault(),s._prepare_direction(p-1),setTimeout(function(){s._goto(p-1)},100)},s.link_custom=function(t){t.preventDefault();var n=e(this).attr("data-orbit-link");if(typeof n=="string"&&(n=e.trim(n))!=""){var r=a.find("[data-orbit-slide="+n+"]");r.index()!=-1&&setTimeout(function(){s._goto(r.index())},100)}},s.link_bullet=function(t){var n=e(this).attr("data-orbit-slide");if(typeof n=="string"&&(n=e.trim(n))!="")if(isNaN(parseInt(n))){var r=a.find("[data-orbit-slide="+n+"]");r.index()!=-1&&setTimeout(function(){s._goto(r.index()+1)},100)}else setTimeout(function(){s._goto(parseInt(n))},100)},s.timer_callback=function(){s._goto(p+1,!0)},s.compute_dimensions=function(){var t=e(s.slides().get(p)),n=t.height();i.variable_height||s.slides().each(function(){e(this).height()>n&&(n=e(this).height())}),f.height(n)},s.create_timer=function(){var e=new o(a.find("."+i.timer_container_class),i,s.timer_callback);return e},s.stop_timer=function(){typeof s.cache.timer=="object"&&s.cache.timer.stop()},s.toggle_timer=function(){var e=a.find("."+i.timer_container_class);e.hasClass(i.timer_paused_class)?(typeof s.cache.timer=="undefined"&&(s.cache.timer=s.create_timer()),s.cache.timer.start()):typeof s.cache.timer=="object"&&s.cache.timer.stop()},s.init=function(){s.build_markup(),i.timer&&(s.cache.timer=s.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),s.cache.timer.start)),d=new u(i,f);if(m){var r=f.find("."+i.active_slide_class),o=i.animation_speed;i.animation_speed=1,r.removeClass("active"),s._goto(r.index()),i.animation_speed=o}a.on("click","."+i.next_class,s.next),a.on("click","."+i.prev_class,s.prev),i.next_on_click&&a.on("click","[data-orbit-slide]",s.link_bullet),a.on("click",s.toggle_timer),i.swipe&&f.on("touchstart.fndtn.orbit",function(e){if(s.cache.animating)return;e.touches||(e=e.originalEvent),e.preventDefault(),e.stopPropagation(),s.cache.start_page_x=e.touches[0].pageX,s.cache.start_page_y=e.touches[0].pageY,s.cache.start_time=(new Date).getTime(),s.cache.delta_x=0,s.cache.is_scrolling=null,s.cache.direction=null,s.stop_timer()}).on("touchmove.fndtn.orbit",function(e){Math.abs(s.cache.delta_x)>5&&(e.preventDefault(),e.stopPropagation());if(s.cache.animating)return;requestAnimationFrame(function(){e.touches||(e=e.originalEvent);if(e.touches.length>1||e.scale&&e.scale!==1)return;s.cache.delta_x=e.touches[0].pageX-s.cache.start_page_x,s.cache.is_scrolling===null&&(s.cache.is_scrolling=!!(s.cache.is_scrolling||Math.abs(s.cache.delta_x)<Math.abs(e.touches[0].pageY-s.cache.start_page_y)));if(s.cache.is_scrolling)return;var t=s.cache.delta_x<0?p+1:p-1;if(s.cache.direction!==t){var n=s._prepare_direction(t);s.cache.direction=t,s.cache.dir=n[0],s.cache.current=n[1],s.cache.next=n[2]}if(i.animation==="slide"){var r,o;r=s.cache.delta_x/a.width()*100,r>=0?o=-(100-r):o=100+r,s.cache.current.css("transform","translate3d("+r+"%,0,0)"),s.cache.next.css("transform","translate3d("+o+"%,0,0)")}})}).on("touchend.fndtn.orbit",function(e){if(s.cache.animating)return;e.preventDefault(),e.stopPropagation(),setTimeout(function(){s._goto(s.cache.direction)},50)}),a.on("mouseenter.fndtn.orbit",function(e){i.timer&&i.pause_on_hover&&s.stop_timer()}).on("mouseleave.fndtn.orbit",function(e){i.timer&&i.resume_on_mouseout&&s.cache.timer.start()}),e(n).on("click","[data-orbit-link]",s.link_custom),e(t).on("load resize",s.compute_dimensions);var l=this.slides().find("img");Foundation.utils.image_loaded(l,s.compute_dimensions),Foundation.utils.image_loaded(l,function(){a.prev("."+i.preloader_class).css("display","none"),s.update_slide_number(p),s.update_active_link(p),f.trigger("ready.fndtn.orbit")})},s.init()},o=function(e,t,n){var r=this,i=t.timer_speed,s=e.find("."+t.timer_progress_class),o=s&&s.css("display")!="none",u,a,f=-1;this.update_progress=function(e){var t=s.clone();t.attr("style",""),t.css("width",e+"%"),s.replaceWith(t),s=t},this.restart=function(){clearTimeout(a),e.addClass(t.timer_paused_class),f=-1,o&&r.update_progress(0),r.start()},this.start=function(){if(!e.hasClass(t.timer_paused_class))return!0;f=f===-1?i:f,e.removeClass(t.timer_paused_class),o&&(u=(new Date).getTime(),s.animate({width:"100%"},f,"linear")),a=setTimeout(function(){r.restart(),n()},f),e.trigger("timer-started.fndtn.orbit")},this.stop=function(){if(e.hasClass(t.timer_paused_class))return!0;clearTimeout(a),e.addClass(t.timer_paused_class);if(o){var n=(new Date).getTime();f-=n-u;var s=100-f/i*100;r.update_progress(s)}e.trigger("timer-stopped.fndtn.orbit")}},u=function(e,t){var n="webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";this.next=function(r,i,s){Modernizr.csstransitions?i.on(n,function(e){i.unbind(n),r.removeClass("active animate-out"),i.removeClass("animate-in"),t.children().css({transform:"","-ms-transform":"","-webkit-transition-duration":"","-moz-transition-duration":"","-o-transition-duration":"","transition-duration":""}),s()}):setTimeout(function(){r.removeClass("active animate-out"),i.removeClass("animate-in"),t.children().css({transform:"","-ms-transform":"","-webkit-transition-duration":"","-moz-transition-duration":"","-o-transition-duration":"","transition-duration":""}),s()},e.animation_speed),t.children().css({transform:"","-ms-transform":"","-webkit-transition-duration":"","-moz-transition-duration":"","-o-transition-duration":"","transition-duration":""}),r.addClass("animate-out"),i.addClass("animate-in")},this.prev=function(r,i,s){Modernizr.csstransitions?i.on(n,function(e){i.unbind(n),r.removeClass("active animate-out"),i.removeClass("animate-in"),t.children().css({transform:"","-ms-transform":"","-webkit-transition-duration":"","-moz-transition-duration":"","-o-transition-duration":"","transition-duration":""}),s()}):setTimeout(function(){r.removeClass("active animate-out"),i.removeClass("animate-in"),t.children().css({transform:"","-ms-transform":"","-webkit-transition-duration":"","-moz-transition-duration":"","-o-transition-duration":"","transition-duration":""}),s()},e.animation_speed),t.children().css({transform:"","-ms-transform":"","-webkit-transition-duration":"","-moz-transition-duration":"","-o-transition-duration":"","transition-duration":""}),r.addClass("animate-out"),i.addClass("animate-in")}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.2.2",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",timer_show_progress_bar:!0,slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:i,after_slide_change:i},init:function(e,t,n){var r=this;this.bindings(t,n)},events:function(e){var t=new s(this.S(e),this.S(e).data("orbit-init"));this.S(e).data(self.name+"-instance",t)},reflow:function(){var e=this;if(e.S(e.scope).is("[data-orbit]")){var t=e.S(e.scope),n=t.data(e.name+"-instance");n.compute_dimensions()}else e.S("[data-orbit]",e.scope).each(function(t,n){var r=e.S(n),i=e.data_options(r),s=r.data(e.name+"-instance");s.compute_dimensions()})}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.2.2",settings:{index:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",is_hover:!0,mobile_show_parent_link:!1,scrolltop:!0,sticky_on:"all"},init:function(t,n,r){Foundation.inherit(this,"add_custom_rule register_media throttle");var i=this;i.register_media("topbar","foundation-mq-topbar"),this.bindings(n,r),i.S("["+this.attr_name()+"]",this.scope).each(function(){var t=e(this),n=t.data(i.attr_name(!0)+"-init"),r=i.S("section",this),s=t.children().filter("ul").first();t.data("index",0);var o=t.parent();o.hasClass("fixed")||i.is_sticky(t,o,n)?(i.settings.sticky_class=n.sticky_class,i.settings.sticky_topbar=t,t.data("height",o.outerHeight()),t.data("stickyoffset",o.offset().top)):t.data("height",t.outerHeight()),n.assembled||i.assemble(t),n.is_hover?i.S(".has-dropdown",t).addClass("not-click"):i.S(".has-dropdown",t).removeClass("not-click"),i.add_custom_rule(".f-topbar-fixed { padding-top: "+t.data("height")+"px }"),o.hasClass("fixed")&&i.S("body").addClass("f-topbar-fixed")})},is_sticky:function(e,t,n){var r=t.hasClass(n.sticky_class);return r&&n.sticky_on==="all"?!0:r&&this.small()&&n.sticky_on==="small"?!0:r&&this.medium()&&n.sticky_on==="medium"?!0:r&&this.large()&&n.sticky_on==="large"?!0:!1},toggle:function(n){var r=this;if(n)var i=r.S(n).closest("["+this.attr_name()+"]");else var i=r.S("["+this.attr_name()+"]");var s=i.data(this.attr_name(!0)+"-init"),o=r.S("section, .section",i);r.breakpoint()&&(r.rtl?(o.css({right:"0%"}),e(">.name",o).css({right:"100%"})):(o.css({left:"0%"}),e(">.name",o).css({left:"100%"})),r.S("li.moved",o).removeClass("moved"),i.data("index",0),i.toggleClass("expanded").css("height","")),s.scrolltop?i.hasClass("expanded")?i.parent().hasClass("fixed")&&(s.scrolltop?(i.parent().removeClass("fixed"),i.addClass("fixed"),r.S("body").removeClass("f-topbar-fixed"),t.scrollTo(0,0)):i.parent().removeClass("expanded")):i.hasClass("fixed")&&(i.parent().addClass("fixed"),i.removeClass("fixed"),r.S("body").addClass("f-topbar-fixed")):(r.is_sticky(i,i.parent(),s)&&i.parent().addClass("fixed"),i.parent().hasClass("fixed")&&(i.hasClass("expanded")?(i.addClass("fixed"),i.parent().addClass("expanded"),r.S("body").addClass("f-topbar-fixed")):(i.removeClass("fixed"),i.parent().removeClass("expanded"),r.update_sticky_positioning())))},timer:null,events:function(n){var r=this,i=this.S;i(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(e){e.preventDefault(),r.toggle(this)}).on("click.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(t){var n=e(this).closest("li");r.breakpoint()&&!n.hasClass("back")&&!n.hasClass("has-dropdown")&&r.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(t){var n=i(this),s=i(t.target),o=n.closest("["+r.attr_name()+"]"),u=o.data(r.attr_name(!0)+"-init");if(s.data("revealId")){r.toggle();return}if(r.breakpoint())return;if(u.is_hover&&!Modernizr.touch)return;t.stopImmediatePropagation(),n.hasClass("hover")?(n.removeClass("hover").find("li").removeClass("hover"),n.parents("li.hover").removeClass("hover")):(n.addClass("hover"),e(n).siblings().removeClass("hover"),s[0].nodeName==="A"&&s.parent().hasClass("has-dropdown")&&t.preventDefault())}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(e){if(r.breakpoint()){e.preventDefault();var t=i(this),n=t.closest("["+r.attr_name()+"]"),s=n.find("section, .section"),o=t.next(".dropdown").outerHeight(),u=t.closest("li");n.data("index",n.data("index")+1),u.addClass("moved"),r.rtl?(s.css({right:-(100*n.data("index"))+"%"}),s.find(">.name").css({right:100*n.data("index")+"%"})):(s.css({left:-(100*n.data("index"))+"%"}),s.find(">.name").css({left:100*n.data("index")+"%"})),n.css("height",t.siblings("ul").outerHeight(!0)+n.data("height"))}}),i(t).off(".topbar").on("resize.fndtn.topbar",r.throttle(function(){r.resize.call(r)},50)).trigger("resize"),i("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar",function(e){var t=i(e.target).closest("li").closest("li.hover");if(t.length>0)return;i("["+r.attr_name()+"] li.hover").removeClass("hover")}),i(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(e){e.preventDefault();var t=i(this),n=t.closest("["+r.attr_name()+"]"),s=n.find("section, .section"),o=n.data(r.attr_name(!0)+"-init"),u=t.closest("li.moved"),a=u.parent();n.data("index",n.data("index")-1),r.rtl?(s.css({right:-(100*n.data("index"))+"%"}),s.find(">.name").css({right:100*n.data("index")+"%"})):(s.css({left:-(100*n.data("index"))+"%"}),s.find(">.name").css({left:100*n.data("index")+"%"})),n.data("index")===0?n.css("height",""):n.css("height",a.outerHeight(!0)+n.data("height")),setTimeout(function(){u.removeClass("moved")},300)})},resize:function(){var e=this;e.S("["+this.attr_name()+"]").each(function(){var t=e.S(this),r=t.data(e.attr_name(!0)+"-init"),i=t.parent("."+e.settings.sticky_class),s;if(!e.breakpoint()){var o=t.hasClass("expanded");t.css("height","").removeClass("expanded").find("li").removeClass("hover"),o&&e.toggle(t)}e.is_sticky(t,i,r)&&(i.hasClass("fixed")?(i.removeClass("fixed"),s=i.offset().top,e.S(n.body).hasClass("f-topbar-fixed")&&(s-=t.data("height")),t.data("stickyoffset",s),i.addClass("fixed")):(s=i.offset().top,t.data("stickyoffset",s)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(t){var n=this,r=t.data(this.attr_name(!0)+"-init"),i=n.S("section",t),s=e(this).children().filter("ul").first();i.detach(),n.S(".has-dropdown>a",i).each(function(){var t=n.S(this),i=t.siblings(".dropdown"),s=t.attr("href");if(!i.find(".title.back").length){if(r.mobile_show_parent_link&&s&&s.length>1)var o=e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li><a class="parent-link js-generated" href="'+s+'">'+t.text()+"</a></li>");else var o=e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>');r.custom_back_text==1?e("h5>a",o).html(r.back_text):e("h5>a",o).html("&laquo; "+t.html()),i.prepend(o)}}),i.appendTo(t),this.sticky(),this.assembled(t)},assembled:function(t){t.data(this.attr_name(!0),e.extend({},t.data(this.attr_name(!0)),{assembled:!0}))},height:function(t){var n=0,r=this;return e("> li",t).each(function(){n+=r.S(this).outerHeight(!0)}),n},sticky:function(){var e=this.S(t),n=this;this.S(t).on("scroll",function(){n.update_sticky_positioning()})},update_sticky_positioning:function(){var e="."+this.settings.sticky_class,n=this.S(t),r=this;if(r.settings.sticky_topbar&&r.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var i=this.settings.sticky_topbar.data("stickyoffset");r.S(e).hasClass("expanded")||(n.scrollTop()>i?r.S(e).hasClass("fixed")||(r.S(e).addClass("fixed"),r.S("body").addClass("f-topbar-fixed")):n.scrollTop()<=i&&r.S(e).hasClass("fixed")&&(r.S(e).removeClass("fixed"),r.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(t).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.2.2",settings:{active_class:"active",multi_expand:!1,toggleable:!0},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=this.S;n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] dd > a",function(r){var i=n(this).closest("["+t.attr_name()+"]"),s=n("#"+this.href.split("#")[1]),o=n("dd > .content",i),u=e("dd",i),a=i.data(t.attr_name(!0)+"-init"),f=n("dd > .content."+a.active_class,i),l=n("dd."+a.active_class,i);r.preventDefault();if(!n(this).closest("dl").is(i))return;if(a.toggleable&&s.is(f))return l.toggleClass(a.active_class,!1),s.toggleClass(a.active_class,!1);a.multi_expand||(o.removeClass(a.active_class),u.removeClass(a.active_class)),s.addClass(a.active_class).parent().addClass(a.active_class)})},off:function(){},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.2.2",settings:{},init:function(e,t,n){this.events()},events:function(){var e=this,t=e.S;t(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(t){e.click_toggle_class(t,"move-right")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(e){t(".off-canvas-wrap").removeClass("move-right")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(t){e.click_toggle_class(t,"move-left")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(e){t(".off-canvas-wrap").removeClass("move-left")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(t){e.click_remove_class(t,"move-left"),e.click_remove_class(t,"move-right")})},click_toggle_class:function(e,t){e.preventDefault(),this.S(e.target).closest(".off-canvas-wrap").toggleClass(t)},click_remove_class:function(e,t){e.preventDefault(),this.S(".off-canvas-wrap").removeClass(t)},reflow:function(){}}}(jQuery,this,this.document);

// jQuery HC-Sticky
// =============
// Version: 1.2.43
// Copyright: Some Web Media
// Author: Some Web Guy
// Author URL: http://twitter.com/some_web_guy
// Website: http://someweblog.com/
// Plugin URL: https://github.com/somewebmedia/hc-sticky
// License: Released under the MIT License www.opensource.org/licenses/mit-license.php
// Description: Cross-browser jQuery plugin that makes any element attached to the page and always visible while you scroll.

(function(d,g,k){var l=d(g),h=g.document,s=d(h),t=function(){for(var d=3,b=h.createElement("div"),a=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++d+"]><i></i><![endif]--\x3e",a[0];);return 4<d?d:void 0}(),f=function(){var d=g.pageXOffset!==k?g.pageXOffset:"CSS1Compat"==h.compatMode?g.document.documentElement.scrollLeft:g.document.body.scrollLeft,b=g.pageYOffset!==k?g.pageYOffset:"CSS1Compat"==h.compatMode?g.document.documentElement.scrollTop:g.document.body.scrollTop;"undefined"==
typeof f.x&&(f.x=d,f.y=b);"undefined"==typeof f.distanceX?(f.distanceX=d,f.distanceY=b):(f.distanceX=d-f.x,f.distanceY=b-f.y);var a=f.x-d,e=f.y-b;f.direction=0>a?"right":0<a?"left":0>=e?"down":0<e?"up":"first";f.x=d;f.y=b};l.on("scroll",f);d.fn.style=function(f){if(!f)return null;var b=d(this),a,e=b.clone().css("display","none");e.find("input:radio").attr("name","copy-"+Math.floor(100*Math.random()+1));b.after(e);var k=function(a,d){var e;a.currentStyle?e=a.currentStyle[d.replace(/-\w/g,function(b){return b.toUpperCase().replace("-",
"")})]:g.getComputedStyle&&(e=h.defaultView.getComputedStyle(a,null).getPropertyValue(d));return e=/margin/g.test(d)?parseInt(e)===b[0].offsetLeft?e:"auto":e};"string"==typeof f?a=k(e[0],f):(a={},d.each(f,function(b,d){a[d]=k(e[0],d)}));e.remove();return a||null};d.fn.extend({hcSticky:function(h){if(0==this.length)return this;this.pluginOptions("hcSticky",{top:0,bottom:0,bottomEnd:0,innerTop:0,innerSticker:null,className:"sticky",wrapperClassName:"wrapper-sticky",stickTo:null,responsive:!0,followScroll:!0,
offResolutions:null,onStart:d.noop,onStop:d.noop,on:!0,fn:null},h||{},{reinit:function(){d(this).hcSticky()},stop:function(){d(this).pluginOptions("hcSticky",{on:!1}).each(function(){var b=d(this),a=b.pluginOptions("hcSticky"),e=b.parent("."+a.wrapperClassName),e=b.offset().top-e.offset().top;b.css({position:"absolute",top:e,bottom:"auto",left:"auto",right:"auto"}).removeClass(a.className)})},off:function(){d(this).pluginOptions("hcSticky",{on:!1}).each(function(){var b=d(this),a=b.pluginOptions("hcSticky"),
e=b.parent("."+a.wrapperClassName);b.css({position:"relative",top:"auto",bottom:"auto",left:"auto",right:"auto"}).removeClass(a.className);e.css("height","auto")})},on:function(){d(this).each(function(){d(this).pluginOptions("hcSticky",{on:!0,remember:{offsetTop:l.scrollTop()}}).hcSticky()})},destroy:function(){var b=d(this),a=b.pluginOptions("hcSticky"),e=b.parent("."+a.wrapperClassName);b.removeData("hcStickyInit").css({position:e.css("position"),top:e.css("top"),bottom:e.css("bottom"),left:e.css("left"),
right:e.css("right")}).removeClass(a.className);l.off("resize",a.fn.resize).off("scroll",a.fn.scroll);b.unwrap()}});h&&"undefined"!=typeof h.on&&(h.on?this.hcSticky("on"):this.hcSticky("off"));return"string"==typeof h?this:this.each(function(){var b=d(this),a=b.pluginOptions("hcSticky"),e=function(){var c=b.parent("."+a.wrapperClassName);return 0<c.length?(c.css({height:b.outerHeight(!0),width:function(){var a=c.style("width");return 0<=a.indexOf("%")||"auto"==a?("border-box"==b.css("box-sizing")||
"border-box"==b.css("-moz-box-sizing")?b.css("width",c.width()):b.css("width",c.width()-parseInt(b.css("padding-left")-parseInt(b.css("padding-right")))),a):b.outerWidth(!0)}()}),c):!1}()||function(){var c=b.style("width margin-left left right top bottom float display".split(" ")),e=b.css("display"),f=d("<div>",{"class":a.wrapperClassName}).css({display:e,height:b.outerHeight(!0),width:function(){return 0<=c.width.indexOf("%")||"auto"==c.width&&"inline-block"!=e&&"inline"!=e?(b.css("width",parseFloat(b.css("width"))),
c.width):"auto"!=c.width||"inline-block"!=e&&"inline"!=e?"auto"==c["margin-left"]?b.outerWidth():b.outerWidth(!0):b.width()}(),margin:c["margin-left"]?"auto":null,position:function(){var a=b.css("position");return"static"==a?"relative":a}(),"float":c["float"]||null,left:c.left,right:c.right,top:c.top,bottom:c.bottom,"vertical-align":"top"});b.wrap(f);7===t&&0===d("head").find("style#hcsticky-iefix").length&&d('<style id="hcsticky-iefix">.'+a.wrapperClassName+" {zoom: 1;}</style>").appendTo("head");
return b.parent()}();if(!b.data("hcStickyInit")){b.data("hcStickyInit",!0);var h=a.stickTo&&("document"==a.stickTo||a.stickTo.nodeType&&9==a.stickTo.nodeType||"object"==typeof a.stickTo&&a.stickTo instanceof("undefined"!=typeof HTMLDocument?HTMLDocument:Document))?!0:!1,v=a.stickTo?h?s:"string"==typeof a.stickTo?d(a.stickTo):a.stickTo:e.parent();b.css({top:"auto",bottom:"auto",left:"auto",right:"auto"});l.load(function(){b.outerHeight(!0)>v.height()&&(e.css("height",b.outerHeight(!0)),b.hcSticky("reinit"))});
var u=function(c){b.hasClass(a.className)||(c=c||{},b.css({position:"fixed",top:c.top||0,left:c.left||e.offset().left}).addClass(a.className),a.onStart.apply(b[0]),e.addClass("sticky-active"))},w=function(c){c=c||{};c.position=c.position||"absolute";c.top=c.top||0;c.left=c.left||0;if("fixed"==b.css("position")||parseInt(b.css("top"))!=c.top)b.css({position:c.position,top:c.top,left:c.left}).removeClass(a.className),a.onStop.apply(b[0]),e.removeClass("sticky-active")},x=!1,m=!1,A=function(){y();z();
if(a.on){if(a.responsive){m||(m=b.clone().attr("style","").css({visibility:"hidden",height:0,overflow:"hidden",paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0}),e.after(m));var c=e.style("width"),d=m.style("width");"auto"==d&&"auto"!=c&&(d=parseInt(b.css("width")));d!=c&&e.width(d);x&&clearTimeout(x);x=setTimeout(function(){x=!1;m.remove();m=!1},250)}"fixed"==b.css("position")?b.css("left",e.offset().left):b.css("left",0);b.outerWidth(!0)!=e.width()&&(c="border-box"==b.css("box-sizing")||
"border-box"==b.css("-moz-box-sizing")?e.width():e.width()-parseInt(b.css("padding-left"))-parseInt(b.css("padding-right")),c=c-parseInt(b.css("margin-left"))-parseInt(b.css("margin-right")),b.css("width",c))}};b.pluginOptions("hcSticky",{fn:{scroll:function(c){if(a.on&&!(b.outerHeight(!0)>=v.height())){c=a.innerSticker?d(a.innerSticker).position().top:a.innerTop?a.innerTop:0;var k=e.offset().top,g=v.height()-a.bottomEnd+(h?0:k),t=e.offset().top-a.top+c,n=b.outerHeight(!0)+a.bottom,p=l.height(),q=
l.scrollTop(),m=b.offset().top,s=m-q,r;"undefined"!=typeof a.remember&&a.remember?(r=m-a.top-c,n-c>p&&a.followScroll?r<q&&q+p<=r+b.height()&&(a.remember=!1):a.remember.offsetTop>r?q<=r&&(u({top:a.top-c}),a.remember=!1):q>=r&&(u({top:a.top-c}),a.remember=!1)):q>t?g+a.bottom-(a.followScroll&&p<n?0:a.top)<=q+n-c-(n-c>p-(t-c)&&a.followScroll?0<(r=n-p-c)?r:0:0)?w({top:g-n+a.bottom-k}):n-c>p&&a.followScroll?s+n<=p?"down"==f.direction?u({top:p-n}):0>s&&"fixed"==b.css("position")&&w({top:m-(t+a.top-c)-f.distanceY}):
"up"==f.direction&&m>=q+a.top-c?u({top:a.top-c}):"down"==f.direction&&m+n>p&&"fixed"==b.css("position")&&w({top:m-(t+a.top-c)-f.distanceY}):u({top:a.top-c}):w()}},resize:A}});var z=function(){if(a.offResolutions){d.isArray(a.offResolutions)||(a.offResolutions=[a.offResolutions]);var c=!0;d.each(a.offResolutions,function(a,d){0>d?l.width()<-1*d&&(c=!1,b.hcSticky("off")):l.width()>d&&(c=!1,b.hcSticky("off"))});c&&!a.on&&b.hcSticky("on")}};z();l.on("resize",A);var y=function(){if(b.outerHeight(!0)<v.height()){var c=
!1;d._data(g,"events").scroll!=k&&d.each(d._data(g,"events").scroll,function(b,d){d.handler==a.fn.scroll&&(c=!0)});c||(a.fn.scroll(!0),l.on("scroll",a.fn.scroll))}};y()}})}})})(jQuery,this);
(function(d,g){d.fn.extend({pluginOptions:function(k,l,h,s){this.data(k)||this.data(k,{});if(k&&"undefined"==typeof l)return this.data(k).options;h=h||l||{};return"object"==typeof h||h===g?this.each(function(){var g=d(this);g.data(k).options?g.data(k,d.extend(g.data(k),{options:d.extend(g.data(k).options,h||{})})):(g.data(k,{options:d.extend(l,h||{})}),s&&(g.data(k).commands=s))}):"string"==typeof h?this.each(function(){d(this).data(k).commands[h].call(this)}):this}})})(jQuery);
(function(e,t){if(!e)return t;var n=function(){this.el=t;this.items=t;this.sizes=[];this.max=[0,0];this.current=0;this.interval=t;this.opts={speed:500,delay:3e3,complete:t,keys:!t,dots:t,fluid:t};var n=this;this.init=function(t,n){this.el=t;this.ul=t.children("ul");this.max=[t.outerWidth(),t.outerHeight()];this.items=this.ul.children("li").each(this.calculate);this.opts=e.extend(this.opts,n);this.setup();return this};this.calculate=function(t){var r=e(this),i=r.outerWidth(),s=r.outerHeight();n.sizes[t]=[i,s];if(i>n.max[0])n.max[0]=i;if(s>n.max[1])n.max[1]=s};this.setup=function(){this.el.css({overflow:"hidden",width:n.max[0],height:this.items.first().outerHeight()});this.ul.css({width:this.items.length*100+"%",position:"relative"});this.items.css("width",100/this.items.length+"%");if(this.opts.delay!==t){this.start();this.el.hover(this.stop,this.start)}this.opts.keys&&e(document).keydown(this.keys);this.opts.dots&&this.dots();if(this.opts.fluid){var r=function(){n.el.css("width",Math.min(Math.round(n.el.outerWidth()/n.el.parent().outerWidth()*100),100)+"%")};r();e(window).resize(r)}if(this.opts.arrows){this.el.parent().append('<p class="arrows"><span class="prev">←</span><span class="next">→</span></p>').find(".arrows span").click(function(){e.isFunction(n[this.className])&&n[this.className]()})}if(e.event.swipe){this.el.on("swipeleft",n.prev).on("swiperight",n.next)}};this.move=function(t,r){if(!this.items.eq(t).length)t=0;if(t<0)t=this.items.length-1;var i=this.items.eq(t);var s={height:i.outerHeight()};var o=r?5:this.opts.speed;if(!this.ul.is(":animated")){n.el.find(".dot:eq("+t+")").addClass("active").siblings().removeClass("active");this.el.animate(s,o)&&this.ul.animate(e.extend({left:"-"+t+"00%"},s),o,function(i){n.current=t;e.isFunction(n.opts.complete)&&!r&&n.opts.complete(n.el)})}};this.start=function(){n.interval=setInterval(function(){n.move(n.current+1)},n.opts.delay)};this.stop=function(){n.interval=clearInterval(n.interval);return n};this.keys=function(t){var r=t.which;var i={37:n.prev,39:n.next,27:n.stop};if(e.isFunction(i[r])){i[r]()}};this.next=function(){return n.stop().move(n.current+1)};this.prev=function(){return n.stop().move(n.current-1)};this.dots=function(){var t='<ol class="dots">';e.each(this.items,function(e){t+='<li class="dot'+(e<1?" active":"")+'">'+(e+1)+"</li>"});t+="</ol>";this.el.addClass("has-dots").append(t).find(".dot").click(function(){n.move(e(this).index())})}};e.fn.unslider=function(t){var r=this.length;return this.each(function(i){var s=e(this);var u=(new n).init(s,t);s.data("unslider"+(r>1?"-"+(i+1):""),u)})}})(window.jQuery,false);

/*
Copyright 2012 Igor Vaynberg

Version: 3.4.8 Timestamp: Thu May  1 09:50:32 EDT 2014

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

    http://www.apache.org/licenses/LICENSE-2.0
    http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
*/
(function ($) {
    if(typeof $.fn.each2 == "undefined") {
        $.extend($.fn, {
            /*
            * 4-10 times faster .each replacement
            * use it carefully, as it overrides jQuery context of element on each iteration
            */
            each2 : function (c) {
                var j = $([0]), i = -1, l = this.length;
                while (
                    ++i < l
                    && (j.context = j[0] = this[i])
                    && c.call(j[0], i, j) !== false //"this"=DOM, i=index, j=jQuery object
                );
                return this;
            }
        });
    }
})(jQuery);

(function ($, undefined) {
    "use strict";
    /*global document, window, jQuery, console */

    if (window.Select2 !== undefined) {
        return;
    }

    var KEY, AbstractSelect2, SingleSelect2, MultiSelect2, nextUid, sizer,
        lastMousePosition={x:0,y:0}, $document, scrollBarDimensions,

    KEY = {
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        HOME: 36,
        END: 35,
        BACKSPACE: 8,
        DELETE: 46,
        isArrow: function (k) {
            k = k.which ? k.which : k;
            switch (k) {
            case KEY.LEFT:
            case KEY.RIGHT:
            case KEY.UP:
            case KEY.DOWN:
                return true;
            }
            return false;
        },
        isControl: function (e) {
            var k = e.which;
            switch (k) {
            case KEY.SHIFT:
            case KEY.CTRL:
            case KEY.ALT:
                return true;
            }

            if (e.metaKey) return true;

            return false;
        },
        isFunctionKey: function (k) {
            k = k.which ? k.which : k;
            return k >= 112 && k <= 123;
        }
    },
    MEASURE_SCROLLBAR_TEMPLATE = "<div class='select2-measure-scrollbar'></div>",

    DIACRITICS = {"\u24B6":"A","\uFF21":"A","\u00C0":"A","\u00C1":"A","\u00C2":"A","\u1EA6":"A","\u1EA4":"A","\u1EAA":"A","\u1EA8":"A","\u00C3":"A","\u0100":"A","\u0102":"A","\u1EB0":"A","\u1EAE":"A","\u1EB4":"A","\u1EB2":"A","\u0226":"A","\u01E0":"A","\u00C4":"A","\u01DE":"A","\u1EA2":"A","\u00C5":"A","\u01FA":"A","\u01CD":"A","\u0200":"A","\u0202":"A","\u1EA0":"A","\u1EAC":"A","\u1EB6":"A","\u1E00":"A","\u0104":"A","\u023A":"A","\u2C6F":"A","\uA732":"AA","\u00C6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B","\uFF22":"B","\u1E02":"B","\u1E04":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24B8":"C","\uFF23":"C","\u0106":"C","\u0108":"C","\u010A":"C","\u010C":"C","\u00C7":"C","\u1E08":"C","\u0187":"C","\u023B":"C","\uA73E":"C","\u24B9":"D","\uFF24":"D","\u1E0A":"D","\u010E":"D","\u1E0C":"D","\u1E10":"D","\u1E12":"D","\u1E0E":"D","\u0110":"D","\u018B":"D","\u018A":"D","\u0189":"D","\uA779":"D","\u01F1":"DZ","\u01C4":"DZ","\u01F2":"Dz","\u01C5":"Dz","\u24BA":"E","\uFF25":"E","\u00C8":"E","\u00C9":"E","\u00CA":"E","\u1EC0":"E","\u1EBE":"E","\u1EC4":"E","\u1EC2":"E","\u1EBC":"E","\u0112":"E","\u1E14":"E","\u1E16":"E","\u0114":"E","\u0116":"E","\u00CB":"E","\u1EBA":"E","\u011A":"E","\u0204":"E","\u0206":"E","\u1EB8":"E","\u1EC6":"E","\u0228":"E","\u1E1C":"E","\u0118":"E","\u1E18":"E","\u1E1A":"E","\u0190":"E","\u018E":"E","\u24BB":"F","\uFF26":"F","\u1E1E":"F","\u0191":"F","\uA77B":"F","\u24BC":"G","\uFF27":"G","\u01F4":"G","\u011C":"G","\u1E20":"G","\u011E":"G","\u0120":"G","\u01E6":"G","\u0122":"G","\u01E4":"G","\u0193":"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H","\uFF28":"H","\u0124":"H","\u1E22":"H","\u1E26":"H","\u021E":"H","\u1E24":"H","\u1E28":"H","\u1E2A":"H","\u0126":"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I","\uFF29":"I","\u00CC":"I","\u00CD":"I","\u00CE":"I","\u0128":"I","\u012A":"I","\u012C":"I","\u0130":"I","\u00CF":"I","\u1E2E":"I","\u1EC8":"I","\u01CF":"I","\u0208":"I","\u020A":"I","\u1ECA":"I","\u012E":"I","\u1E2C":"I","\u0197":"I","\u24BF":"J","\uFF2A":"J","\u0134":"J","\u0248":"J","\u24C0":"K","\uFF2B":"K","\u1E30":"K","\u01E8":"K","\u1E32":"K","\u0136":"K","\u1E34":"K","\u0198":"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L","\uFF2C":"L","\u013F":"L","\u0139":"L","\u013D":"L","\u1E36":"L","\u1E38":"L","\u013B":"L","\u1E3C":"L","\u1E3A":"L","\u0141":"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L","\u01C7":"LJ","\u01C8":"Lj","\u24C2":"M","\uFF2D":"M","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u019C":"M","\u24C3":"N","\uFF2E":"N","\u01F8":"N","\u0143":"N","\u00D1":"N","\u1E44":"N","\u0147":"N","\u1E46":"N","\u0145":"N","\u1E4A":"N","\u1E48":"N","\u0220":"N","\u019D":"N","\uA790":"N","\uA7A4":"N","\u01CA":"NJ","\u01CB":"Nj","\u24C4":"O","\uFF2F":"O","\u00D2":"O","\u00D3":"O","\u00D4":"O","\u1ED2":"O","\u1ED0":"O","\u1ED6":"O","\u1ED4":"O","\u00D5":"O","\u1E4C":"O","\u022C":"O","\u1E4E":"O","\u014C":"O","\u1E50":"O","\u1E52":"O","\u014E":"O","\u022E":"O","\u0230":"O","\u00D6":"O","\u022A":"O","\u1ECE":"O","\u0150":"O","\u01D1":"O","\u020C":"O","\u020E":"O","\u01A0":"O","\u1EDC":"O","\u1EDA":"O","\u1EE0":"O","\u1EDE":"O","\u1EE2":"O","\u1ECC":"O","\u1ED8":"O","\u01EA":"O","\u01EC":"O","\u00D8":"O","\u01FE":"O","\u0186":"O","\u019F":"O","\uA74A":"O","\uA74C":"O","\u01A2":"OI","\uA74E":"OO","\u0222":"OU","\u24C5":"P","\uFF30":"P","\u1E54":"P","\u1E56":"P","\u01A4":"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q","\uFF31":"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R","\uFF32":"R","\u0154":"R","\u1E58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1E5A":"R","\u1E5C":"R","\u0156":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S","\uFF33":"S","\u1E9E":"S","\u015A":"S","\u1E64":"S","\u015C":"S","\u1E60":"S","\u0160":"S","\u1E66":"S","\u1E62":"S","\u1E68":"S","\u0218":"S","\u015E":"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T","\uFF34":"T","\u1E6A":"T","\u0164":"T","\u1E6C":"T","\u021A":"T","\u0162":"T","\u1E70":"T","\u1E6E":"T","\u0166":"T","\u01AC":"T","\u01AE":"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U","\uFF35":"U","\u00D9":"U","\u00DA":"U","\u00DB":"U","\u0168":"U","\u1E78":"U","\u016A":"U","\u1E7A":"U","\u016C":"U","\u00DC":"U","\u01DB":"U","\u01D7":"U","\u01D5":"U","\u01D9":"U","\u1EE6":"U","\u016E":"U","\u0170":"U","\u01D3":"U","\u0214":"U","\u0216":"U","\u01AF":"U","\u1EEA":"U","\u1EE8":"U","\u1EEE":"U","\u1EEC":"U","\u1EF0":"U","\u1EE4":"U","\u1E72":"U","\u0172":"U","\u1E76":"U","\u1E74":"U","\u0244":"U","\u24CB":"V","\uFF36":"V","\u1E7C":"V","\u1E7E":"V","\u01B2":"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W","\uFF37":"W","\u1E80":"W","\u1E82":"W","\u0174":"W","\u1E86":"W","\u1E84":"W","\u1E88":"W","\u2C72":"W","\u24CD":"X","\uFF38":"X","\u1E8A":"X","\u1E8C":"X","\u24CE":"Y","\uFF39":"Y","\u1EF2":"Y","\u00DD":"Y","\u0176":"Y","\u1EF8":"Y","\u0232":"Y","\u1E8E":"Y","\u0178":"Y","\u1EF6":"Y","\u1EF4":"Y","\u01B3":"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z","\uFF3A":"Z","\u0179":"Z","\u1E90":"Z","\u017B":"Z","\u017D":"Z","\u1E92":"Z","\u1E94":"Z","\u01B5":"Z","\u0224":"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a","\uFF41":"a","\u1E9A":"a","\u00E0":"a","\u00E1":"a","\u00E2":"a","\u1EA7":"a","\u1EA5":"a","\u1EAB":"a","\u1EA9":"a","\u00E3":"a","\u0101":"a","\u0103":"a","\u1EB1":"a","\u1EAF":"a","\u1EB5":"a","\u1EB3":"a","\u0227":"a","\u01E1":"a","\u00E4":"a","\u01DF":"a","\u1EA3":"a","\u00E5":"a","\u01FB":"a","\u01CE":"a","\u0201":"a","\u0203":"a","\u1EA1":"a","\u1EAD":"a","\u1EB7":"a","\u1E01":"a","\u0105":"a","\u2C65":"a","\u0250":"a","\uA733":"aa","\u00E6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b","\uFF42":"b","\u1E03":"b","\u1E05":"b","\u1E07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24D2":"c","\uFF43":"c","\u0107":"c","\u0109":"c","\u010B":"c","\u010D":"c","\u00E7":"c","\u1E09":"c","\u0188":"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d","\uFF44":"d","\u1E0B":"d","\u010F":"d","\u1E0D":"d","\u1E11":"d","\u1E13":"d","\u1E0F":"d","\u0111":"d","\u018C":"d","\u0256":"d","\u0257":"d","\uA77A":"d","\u01F3":"dz","\u01C6":"dz","\u24D4":"e","\uFF45":"e","\u00E8":"e","\u00E9":"e","\u00EA":"e","\u1EC1":"e","\u1EBF":"e","\u1EC5":"e","\u1EC3":"e","\u1EBD":"e","\u0113":"e","\u1E15":"e","\u1E17":"e","\u0115":"e","\u0117":"e","\u00EB":"e","\u1EBB":"e","\u011B":"e","\u0205":"e","\u0207":"e","\u1EB9":"e","\u1EC7":"e","\u0229":"e","\u1E1D":"e","\u0119":"e","\u1E19":"e","\u1E1B":"e","\u0247":"e","\u025B":"e","\u01DD":"e","\u24D5":"f","\uFF46":"f","\u1E1F":"f","\u0192":"f","\uA77C":"f","\u24D6":"g","\uFF47":"g","\u01F5":"g","\u011D":"g","\u1E21":"g","\u011F":"g","\u0121":"g","\u01E7":"g","\u0123":"g","\u01E5":"g","\u0260":"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h","\uFF48":"h","\u0125":"h","\u1E23":"h","\u1E27":"h","\u021F":"h","\u1E25":"h","\u1E29":"h","\u1E2B":"h","\u1E96":"h","\u0127":"h","\u2C68":"h","\u2C76":"h","\u0265":"h","\u0195":"hv","\u24D8":"i","\uFF49":"i","\u00EC":"i","\u00ED":"i","\u00EE":"i","\u0129":"i","\u012B":"i","\u012D":"i","\u00EF":"i","\u1E2F":"i","\u1EC9":"i","\u01D0":"i","\u0209":"i","\u020B":"i","\u1ECB":"i","\u012F":"i","\u1E2D":"i","\u0268":"i","\u0131":"i","\u24D9":"j","\uFF4A":"j","\u0135":"j","\u01F0":"j","\u0249":"j","\u24DA":"k","\uFF4B":"k","\u1E31":"k","\u01E9":"k","\u1E33":"k","\u0137":"k","\u1E35":"k","\u0199":"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l","\uFF4C":"l","\u0140":"l","\u013A":"l","\u013E":"l","\u1E37":"l","\u1E39":"l","\u013C":"l","\u1E3D":"l","\u1E3B":"l","\u017F":"l","\u0142":"l","\u019A":"l","\u026B":"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l","\u01C9":"lj","\u24DC":"m","\uFF4D":"m","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u026F":"m","\u24DD":"n","\uFF4E":"n","\u01F9":"n","\u0144":"n","\u00F1":"n","\u1E45":"n","\u0148":"n","\u1E47":"n","\u0146":"n","\u1E4B":"n","\u1E49":"n","\u019E":"n","\u0272":"n","\u0149":"n","\uA791":"n","\uA7A5":"n","\u01CC":"nj","\u24DE":"o","\uFF4F":"o","\u00F2":"o","\u00F3":"o","\u00F4":"o","\u1ED3":"o","\u1ED1":"o","\u1ED7":"o","\u1ED5":"o","\u00F5":"o","\u1E4D":"o","\u022D":"o","\u1E4F":"o","\u014D":"o","\u1E51":"o","\u1E53":"o","\u014F":"o","\u022F":"o","\u0231":"o","\u00F6":"o","\u022B":"o","\u1ECF":"o","\u0151":"o","\u01D2":"o","\u020D":"o","\u020F":"o","\u01A1":"o","\u1EDD":"o","\u1EDB":"o","\u1EE1":"o","\u1EDF":"o","\u1EE3":"o","\u1ECD":"o","\u1ED9":"o","\u01EB":"o","\u01ED":"o","\u00F8":"o","\u01FF":"o","\u0254":"o","\uA74B":"o","\uA74D":"o","\u0275":"o","\u01A3":"oi","\u0223":"ou","\uA74F":"oo","\u24DF":"p","\uFF50":"p","\u1E55":"p","\u1E57":"p","\u01A5":"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q","\uFF51":"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r","\uFF52":"r","\u0155":"r","\u1E59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1E5B":"r","\u1E5D":"r","\u0157":"r","\u1E5F":"r","\u024D":"r","\u027D":"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s","\uFF53":"s","\u00DF":"s","\u015B":"s","\u1E65":"s","\u015D":"s","\u1E61":"s","\u0161":"s","\u1E67":"s","\u1E63":"s","\u1E69":"s","\u0219":"s","\u015F":"s","\u023F":"s","\uA7A9":"s","\uA785":"s","\u1E9B":"s","\u24E3":"t","\uFF54":"t","\u1E6B":"t","\u1E97":"t","\u0165":"t","\u1E6D":"t","\u021B":"t","\u0163":"t","\u1E71":"t","\u1E6F":"t","\u0167":"t","\u01AD":"t","\u0288":"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u","\uFF55":"u","\u00F9":"u","\u00FA":"u","\u00FB":"u","\u0169":"u","\u1E79":"u","\u016B":"u","\u1E7B":"u","\u016D":"u","\u00FC":"u","\u01DC":"u","\u01D8":"u","\u01D6":"u","\u01DA":"u","\u1EE7":"u","\u016F":"u","\u0171":"u","\u01D4":"u","\u0215":"u","\u0217":"u","\u01B0":"u","\u1EEB":"u","\u1EE9":"u","\u1EEF":"u","\u1EED":"u","\u1EF1":"u","\u1EE5":"u","\u1E73":"u","\u0173":"u","\u1E77":"u","\u1E75":"u","\u0289":"u","\u24E5":"v","\uFF56":"v","\u1E7D":"v","\u1E7F":"v","\u028B":"v","\uA75F":"v","\u028C":"v","\uA761":"vy","\u24E6":"w","\uFF57":"w","\u1E81":"w","\u1E83":"w","\u0175":"w","\u1E87":"w","\u1E85":"w","\u1E98":"w","\u1E89":"w","\u2C73":"w","\u24E7":"x","\uFF58":"x","\u1E8B":"x","\u1E8D":"x","\u24E8":"y","\uFF59":"y","\u1EF3":"y","\u00FD":"y","\u0177":"y","\u1EF9":"y","\u0233":"y","\u1E8F":"y","\u00FF":"y","\u1EF7":"y","\u1E99":"y","\u1EF5":"y","\u01B4":"y","\u024F":"y","\u1EFF":"y","\u24E9":"z","\uFF5A":"z","\u017A":"z","\u1E91":"z","\u017C":"z","\u017E":"z","\u1E93":"z","\u1E95":"z","\u01B6":"z","\u0225":"z","\u0240":"z","\u2C6C":"z","\uA763":"z"};

    $document = $(document);

    nextUid=(function() { var counter=1; return function() { return counter++; }; }());


    function reinsertElement(element) {
        var placeholder = $(document.createTextNode(''));

        element.before(placeholder);
        placeholder.before(element);
        placeholder.remove();
    }

    function stripDiacritics(str) {
        // Used 'uni range + named function' from http://jsperf.com/diacritics/18
        function match(a) {
            return DIACRITICS[a] || a;
        }

        return str.replace(/[^\u0000-\u007E]/g, match);
    }

    function indexOf(value, array) {
        var i = 0, l = array.length;
        for (; i < l; i = i + 1) {
            if (equal(value, array[i])) return i;
        }
        return -1;
    }

    function measureScrollbar () {
        var $template = $( MEASURE_SCROLLBAR_TEMPLATE );
        $template.appendTo('body');

        var dim = {
            width: $template.width() - $template[0].clientWidth,
            height: $template.height() - $template[0].clientHeight
        };
        $template.remove();

        return dim;
    }

    /**
     * Compares equality of a and b
     * @param a
     * @param b
     */
    function equal(a, b) {
        if (a === b) return true;
        if (a === undefined || b === undefined) return false;
        if (a === null || b === null) return false;
        // Check whether 'a' or 'b' is a string (primitive or object).
        // The concatenation of an empty string (+'') converts its argument to a string's primitive.
        if (a.constructor === String) return a+'' === b+''; // a+'' - in case 'a' is a String object
        if (b.constructor === String) return b+'' === a+''; // b+'' - in case 'b' is a String object
        return false;
    }

    /**
     * Splits the string into an array of values, trimming each value. An empty array is returned for nulls or empty
     * strings
     * @param string
     * @param separator
     */
    function splitVal(string, separator) {
        var val, i, l;
        if (string === null || string.length < 1) return [];
        val = string.split(separator);
        for (i = 0, l = val.length; i < l; i = i + 1) val[i] = $.trim(val[i]);
        return val;
    }

    function getSideBorderPadding(element) {
        return element.outerWidth(false) - element.width();
    }

    function installKeyUpChangeEvent(element) {
        var key="keyup-change-value";
        element.on("keydown", function () {
            if ($.data(element, key) === undefined) {
                $.data(element, key, element.val());
            }
        });
        element.on("keyup", function () {
            var val= $.data(element, key);
            if (val !== undefined && element.val() !== val) {
                $.removeData(element, key);
                element.trigger("keyup-change");
            }
        });
    }

    $document.on("mousemove", function (e) {
        lastMousePosition.x = e.pageX;
        lastMousePosition.y = e.pageY;
    });

    /**
     * filters mouse events so an event is fired only if the mouse moved.
     *
     * filters out mouse events that occur when mouse is stationary but
     * the elements under the pointer are scrolled.
     */
    function installFilteredMouseMove(element) {
        element.on("mousemove", function (e) {
            var lastpos = lastMousePosition;
            if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY) {
                $(e.target).trigger("mousemove-filtered", e);
            }
        });
    }

    /**
     * Debounces a function. Returns a function that calls the original fn function only if no invocations have been made
     * within the last quietMillis milliseconds.
     *
     * @param quietMillis number of milliseconds to wait before invoking fn
     * @param fn function to be debounced
     * @param ctx object to be used as this reference within fn
     * @return debounced version of fn
     */
    function debounce(quietMillis, fn, ctx) {
        ctx = ctx || undefined;
        var timeout;
        return function () {
            var args = arguments;
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                fn.apply(ctx, args);
            }, quietMillis);
        };
    }

    function installDebouncedScroll(threshold, element) {
        var notify = debounce(threshold, function (e) { element.trigger("scroll-debounced", e);});
        element.on("scroll", function (e) {
            if (indexOf(e.target, element.get()) >= 0) notify(e);
        });
    }

    function focus($el) {
        if ($el[0] === document.activeElement) return;

        /* set the focus in a 0 timeout - that way the focus is set after the processing
            of the current event has finished - which seems like the only reliable way
            to set focus */
        window.setTimeout(function() {
            var el=$el[0], pos=$el.val().length, range;

            $el.focus();

            /* make sure el received focus so we do not error out when trying to manipulate the caret.
                sometimes modals or others listeners may steal it after its set */
            var isVisible = (el.offsetWidth > 0 || el.offsetHeight > 0);
            if (isVisible && el === document.activeElement) {

                /* after the focus is set move the caret to the end, necessary when we val()
                    just before setting focus */
                if(el.setSelectionRange)
                {
                    el.setSelectionRange(pos, pos);
                }
                else if (el.createTextRange) {
                    range = el.createTextRange();
                    range.collapse(false);
                    range.select();
                }
            }
        }, 0);
    }

    function getCursorInfo(el) {
        el = $(el)[0];
        var offset = 0;
        var length = 0;
        if ('selectionStart' in el) {
            offset = el.selectionStart;
            length = el.selectionEnd - offset;
        } else if ('selection' in document) {
            el.focus();
            var sel = document.selection.createRange();
            length = document.selection.createRange().text.length;
            sel.moveStart('character', -el.value.length);
            offset = sel.text.length - length;
        }
        return { offset: offset, length: length };
    }

    function killEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function killEventImmediately(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    function measureTextWidth(e) {
        if (!sizer){
            var style = e[0].currentStyle || window.getComputedStyle(e[0], null);
            sizer = $(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: style.fontSize,
                fontFamily: style.fontFamily,
                fontStyle: style.fontStyle,
                fontWeight: style.fontWeight,
                letterSpacing: style.letterSpacing,
                textTransform: style.textTransform,
                whiteSpace: "nowrap"
            });
            sizer.attr("class","select2-sizer");
            $("body").append(sizer);
        }
        sizer.text(e.val());
        return sizer.width();
    }

    function syncCssClasses(dest, src, adapter) {
        var classes, replacements = [], adapted;

        classes = dest.attr("class");
        if (classes) {
            classes = '' + classes; // for IE which returns object
            $(classes.split(" ")).each2(function() {
                if (this.indexOf("select2-") === 0) {
                    replacements.push(this);
                }
            });
        }
        classes = src.attr("class");
        if (classes) {
            classes = '' + classes; // for IE which returns object
            $(classes.split(" ")).each2(function() {
                if (this.indexOf("select2-") !== 0) {
                    adapted = adapter(this);
                    if (adapted) {
                        replacements.push(adapted);
                    }
                }
            });
        }
        dest.attr("class", replacements.join(" "));
    }


    function markMatch(text, term, markup, escapeMarkup) {
        var match=stripDiacritics(text.toUpperCase()).indexOf(stripDiacritics(term.toUpperCase())),
            tl=term.length;

        if (match<0) {
            markup.push(escapeMarkup(text));
            return;
        }

        markup.push(escapeMarkup(text.substring(0, match)));
        markup.push("<span class='select2-match'>");
        markup.push(escapeMarkup(text.substring(match, match + tl)));
        markup.push("</span>");
        markup.push(escapeMarkup(text.substring(match + tl, text.length)));
    }

    function defaultEscapeMarkup(markup) {
        var replace_map = {
            '\\': '&#92;',
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#47;'
        };

        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
            return replace_map[match];
        });
    }

    /**
     * Produces an ajax-based query function
     *
     * @param options object containing configuration parameters
     * @param options.params parameter map for the transport ajax call, can contain such options as cache, jsonpCallback, etc. see $.ajax
     * @param options.transport function that will be used to execute the ajax request. must be compatible with parameters supported by $.ajax
     * @param options.url url for the data
     * @param options.data a function(searchTerm, pageNumber, context) that should return an object containing query string parameters for the above url.
     * @param options.dataType request data type: ajax, jsonp, other datatypes supported by jQuery's $.ajax function or the transport function if specified
     * @param options.quietMillis (optional) milliseconds to wait before making the ajaxRequest, helps debounce the ajax function if invoked too often
     * @param options.results a function(remoteData, pageNumber) that converts data returned form the remote request to the format expected by Select2.
     *      The expected format is an object containing the following keys:
     *      results array of objects that will be used as choices
     *      more (optional) boolean indicating whether there are more results available
     *      Example: {results:[{id:1, text:'Red'},{id:2, text:'Blue'}], more:true}
     */
    function ajax(options) {
        var timeout, // current scheduled but not yet executed request
            handler = null,
            quietMillis = options.quietMillis || 100,
            ajaxUrl = options.url,
            self = this;

        return function (query) {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                var data = options.data, // ajax data function
                    url = ajaxUrl, // ajax url string or function
                    transport = options.transport || $.fn.select2.ajaxDefaults.transport,
                    // deprecated - to be removed in 4.0  - use params instead
                    deprecated = {
                        type: options.type || 'GET', // set type of request (GET or POST)
                        cache: options.cache || false,
                        jsonpCallback: options.jsonpCallback||undefined,
                        dataType: options.dataType||"json"
                    },
                    params = $.extend({}, $.fn.select2.ajaxDefaults.params, deprecated);

                data = data ? data.call(self, query.term, query.page, query.context) : null;
                url = (typeof url === 'function') ? url.call(self, query.term, query.page, query.context) : url;

                if (handler && typeof handler.abort === "function") { handler.abort(); }

                if (options.params) {
                    if ($.isFunction(options.params)) {
                        $.extend(params, options.params.call(self));
                    } else {
                        $.extend(params, options.params);
                    }
                }

                $.extend(params, {
                    url: url,
                    dataType: options.dataType,
                    data: data,
                    success: function (data) {
                        // TODO - replace query.page with query so users have access to term, page, etc.
                        var results = options.results(data, query.page);
                        query.callback(results);
                    }
                });
                handler = transport.call(self, params);
            }, quietMillis);
        };
    }

    /**
     * Produces a query function that works with a local array
     *
     * @param options object containing configuration parameters. The options parameter can either be an array or an
     * object.
     *
     * If the array form is used it is assumed that it contains objects with 'id' and 'text' keys.
     *
     * If the object form is used it is assumed that it contains 'data' and 'text' keys. The 'data' key should contain
     * an array of objects that will be used as choices. These objects must contain at least an 'id' key. The 'text'
     * key can either be a String in which case it is expected that each element in the 'data' array has a key with the
     * value of 'text' which will be used to match choices. Alternatively, text can be a function(item) that can extract
     * the text.
     */
    function local(options) {
        var data = options, // data elements
            dataText,
            tmp,
            text = function (item) { return ""+item.text; }; // function used to retrieve the text portion of a data item that is matched against the search

         if ($.isArray(data)) {
            tmp = data;
            data = { results: tmp };
        }

         if ($.isFunction(data) === false) {
            tmp = data;
            data = function() { return tmp; };
        }

        var dataItem = data();
        if (dataItem.text) {
            text = dataItem.text;
            // if text is not a function we assume it to be a key name
            if (!$.isFunction(text)) {
                dataText = dataItem.text; // we need to store this in a separate variable because in the next step data gets reset and data.text is no longer available
                text = function (item) { return item[dataText]; };
            }
        }

        return function (query) {
            var t = query.term, filtered = { results: [] }, process;
            if (t === "") {
                query.callback(data());
                return;
            }

            process = function(datum, collection) {
                var group, attr;
                datum = datum[0];
                if (datum.children) {
                    group = {};
                    for (attr in datum) {
                        if (datum.hasOwnProperty(attr)) group[attr]=datum[attr];
                    }
                    group.children=[];
                    $(datum.children).each2(function(i, childDatum) { process(childDatum, group.children); });
                    if (group.children.length || query.matcher(t, text(group), datum)) {
                        collection.push(group);
                    }
                } else {
                    if (query.matcher(t, text(datum), datum)) {
                        collection.push(datum);
                    }
                }
            };

            $(data().results).each2(function(i, datum) { process(datum, filtered.results); });
            query.callback(filtered);
        };
    }

    // TODO javadoc
    function tags(data) {
        var isFunc = $.isFunction(data);
        return function (query) {
            var t = query.term, filtered = {results: []};
            var result = isFunc ? data(query) : data;
            if ($.isArray(result)) {
                $(result).each(function () {
                    var isObject = this.text !== undefined,
                        text = isObject ? this.text : this;
                    if (t === "" || query.matcher(t, text)) {
                        filtered.results.push(isObject ? this : {id: this, text: this});
                    }
                });
                query.callback(filtered);
            }
        };
    }

    /**
     * Checks if the formatter function should be used.
     *
     * Throws an error if it is not a function. Returns true if it should be used,
     * false if no formatting should be performed.
     *
     * @param formatter
     */
    function checkFormatter(formatter, formatterName) {
        if ($.isFunction(formatter)) return true;
        if (!formatter) return false;
        if (typeof(formatter) === 'string') return true;
        throw new Error(formatterName +" must be a string, function, or falsy value");
    }

    function evaluate(val) {
        if ($.isFunction(val)) {
            var args = Array.prototype.slice.call(arguments, 1);
            return val.apply(null, args);
        }
        return val;
    }

    function countResults(results) {
        var count = 0;
        $.each(results, function(i, item) {
            if (item.children) {
                count += countResults(item.children);
            } else {
                count++;
            }
        });
        return count;
    }

    /**
     * Default tokenizer. This function uses breaks the input on substring match of any string from the
     * opts.tokenSeparators array and uses opts.createSearchChoice to create the choice object. Both of those
     * two options have to be defined in order for the tokenizer to work.
     *
     * @param input text user has typed so far or pasted into the search field
     * @param selection currently selected choices
     * @param selectCallback function(choice) callback tho add the choice to selection
     * @param opts select2's opts
     * @return undefined/null to leave the current input unchanged, or a string to change the input to the returned value
     */
    function defaultTokenizer(input, selection, selectCallback, opts) {
        var original = input, // store the original so we can compare and know if we need to tell the search to update its text
            dupe = false, // check for whether a token we extracted represents a duplicate selected choice
            token, // token
            index, // position at which the separator was found
            i, l, // looping variables
            separator; // the matched separator

        if (!opts.createSearchChoice || !opts.tokenSeparators || opts.tokenSeparators.length < 1) return undefined;

        while (true) {
            index = -1;

            for (i = 0, l = opts.tokenSeparators.length; i < l; i++) {
                separator = opts.tokenSeparators[i];
                index = input.indexOf(separator);
                if (index >= 0) break;
            }

            if (index < 0) break; // did not find any token separator in the input string, bail

            token = input.substring(0, index);
            input = input.substring(index + separator.length);

            if (token.length > 0) {
                token = opts.createSearchChoice.call(this, token, selection);
                if (token !== undefined && token !== null && opts.id(token) !== undefined && opts.id(token) !== null) {
                    dupe = false;
                    for (i = 0, l = selection.length; i < l; i++) {
                        if (equal(opts.id(token), opts.id(selection[i]))) {
                            dupe = true; break;
                        }
                    }

                    if (!dupe) selectCallback(token);
                }
            }
        }

        if (original!==input) return input;
    }

    function cleanupJQueryElements() {
        var self = this;

        Array.prototype.forEach.call(arguments, function (element) {
            self[element].remove();
            self[element] = null;
        });
    }

    /**
     * Creates a new class
     *
     * @param superClass
     * @param methods
     */
    function clazz(SuperClass, methods) {
        var constructor = function () {};
        constructor.prototype = new SuperClass;
        constructor.prototype.constructor = constructor;
        constructor.prototype.parent = SuperClass.prototype;
        constructor.prototype = $.extend(constructor.prototype, methods);
        return constructor;
    }

    AbstractSelect2 = clazz(Object, {

        // abstract
        bind: function (func) {
            var self = this;
            return function () {
                func.apply(self, arguments);
            };
        },

        // abstract
        init: function (opts) {
            var results, search, resultsSelector = ".select2-results";

            // prepare options
            this.opts = opts = this.prepareOpts(opts);

            this.id=opts.id;

            // destroy if called on an existing component
            if (opts.element.data("select2") !== undefined &&
                opts.element.data("select2") !== null) {
                opts.element.data("select2").destroy();
            }

            this.container = this.createContainer();

            this.liveRegion = $("<span>", {
                    role: "status",
                    "aria-live": "polite"
                })
                .addClass("select2-hidden-accessible")
                .appendTo(document.body);

            this.containerId="s2id_"+(opts.element.attr("id") || "autogen"+nextUid());
            this.containerEventName= this.containerId
                .replace(/([.])/g, '_')
                .replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
            this.container.attr("id", this.containerId);

            this.container.attr("title", opts.element.attr("title"));

            this.body = $("body");

            syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);

            this.container.attr("style", opts.element.attr("style"));
            this.container.css(evaluate(opts.containerCss));
            this.container.addClass(evaluate(opts.containerCssClass));

            this.elementTabIndex = this.opts.element.attr("tabindex");

            // swap container for the element
            this.opts.element
                .data("select2", this)
                .attr("tabindex", "-1")
                .before(this.container)
                .on("click.select2", killEvent); // do not leak click events

            this.container.data("select2", this);

            this.dropdown = this.container.find(".select2-drop");

            syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);

            this.dropdown.addClass(evaluate(opts.dropdownCssClass));
            this.dropdown.data("select2", this);
            this.dropdown.on("click", killEvent);

            this.results = results = this.container.find(resultsSelector);
            this.search = search = this.container.find("input.select2-input");

            this.queryCount = 0;
            this.resultsPage = 0;
            this.context = null;

            // initialize the container
            this.initContainer();

            this.container.on("click", killEvent);

            installFilteredMouseMove(this.results);

            this.dropdown.on("mousemove-filtered", resultsSelector, this.bind(this.highlightUnderEvent));
            this.dropdown.on("touchstart touchmove touchend", resultsSelector, this.bind(function (event) {
                this._touchEvent = true;
                this.highlightUnderEvent(event);
            }));
            this.dropdown.on("touchmove", resultsSelector, this.bind(this.touchMoved));
            this.dropdown.on("touchstart touchend", resultsSelector, this.bind(this.clearTouchMoved));

            // Waiting for a click event on touch devices to select option and hide dropdown
            // otherwise click will be triggered on an underlying element
            this.dropdown.on('click', this.bind(function (event) {
                if (this._touchEvent) {
                    this._touchEvent = false;
                    this.selectHighlighted();
                }
            }));

            installDebouncedScroll(80, this.results);
            this.dropdown.on("scroll-debounced", resultsSelector, this.bind(this.loadMoreIfNeeded));

            // do not propagate change event from the search field out of the component
            $(this.container).on("change", ".select2-input", function(e) {e.stopPropagation();});
            $(this.dropdown).on("change", ".select2-input", function(e) {e.stopPropagation();});

            // if jquery.mousewheel plugin is installed we can prevent out-of-bounds scrolling of results via mousewheel
            if ($.fn.mousewheel) {
                results.mousewheel(function (e, delta, deltaX, deltaY) {
                    var top = results.scrollTop();
                    if (deltaY > 0 && top - deltaY <= 0) {
                        results.scrollTop(0);
                        killEvent(e);
                    } else if (deltaY < 0 && results.get(0).scrollHeight - results.scrollTop() + deltaY <= results.height()) {
                        results.scrollTop(results.get(0).scrollHeight - results.height());
                        killEvent(e);
                    }
                });
            }

            installKeyUpChangeEvent(search);
            search.on("keyup-change input paste", this.bind(this.updateResults));
            search.on("focus", function () { search.addClass("select2-focused"); });
            search.on("blur", function () { search.removeClass("select2-focused");});

            this.dropdown.on("mouseup", resultsSelector, this.bind(function (e) {
                if ($(e.target).closest(".select2-result-selectable").length > 0) {
                    this.highlightUnderEvent(e);
                    this.selectHighlighted(e);
                }
            }));

            // trap all mouse events from leaving the dropdown. sometimes there may be a modal that is listening
            // for mouse events outside of itself so it can close itself. since the dropdown is now outside the select2's
            // dom it will trigger the popup close, which is not what we want
            // focusin can cause focus wars between modals and select2 since the dropdown is outside the modal.
            this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function (e) { e.stopPropagation(); });

            this.nextSearchTerm = undefined;

            if ($.isFunction(this.opts.initSelection)) {
                // initialize selection based on the current value of the source element
                this.initSelection();

                // if the user has provided a function that can set selection based on the value of the source element
                // we monitor the change event on the element and trigger it, allowing for two way synchronization
                this.monitorSource();
            }

            if (opts.maximumInputLength !== null) {
                this.search.attr("maxlength", opts.maximumInputLength);
            }

            var disabled = opts.element.prop("disabled");
            if (disabled === undefined) disabled = false;
            this.enable(!disabled);

            var readonly = opts.element.prop("readonly");
            if (readonly === undefined) readonly = false;
            this.readonly(readonly);

            // Calculate size of scrollbar
            scrollBarDimensions = scrollBarDimensions || measureScrollbar();

            this.autofocus = opts.element.prop("autofocus");
            opts.element.prop("autofocus", false);
            if (this.autofocus) this.focus();

            this.search.attr("placeholder", opts.searchInputPlaceholder);
        },

        // abstract
        destroy: function () {
            var element=this.opts.element, select2 = element.data("select2");

            this.close();

            if (this.propertyObserver) {
                this.propertyObserver.disconnect();
                this.propertyObserver = null;
            }

            if (select2 !== undefined) {
                select2.container.remove();
                select2.liveRegion.remove();
                select2.dropdown.remove();
                element
                    .removeClass("select2-offscreen")
                    .removeData("select2")
                    .off(".select2")
                    .prop("autofocus", this.autofocus || false);
                if (this.elementTabIndex) {
                    element.attr({tabindex: this.elementTabIndex});
                } else {
                    element.removeAttr("tabindex");
                }
                element.show();
            }

            cleanupJQueryElements.call(this,
                "container",
                "liveRegion",
                "dropdown",
                "results",
                "search"
            );
        },

        // abstract
        optionToData: function(element) {
            if (element.is("option")) {
                return {
                    id:element.prop("value"),
                    text:element.text(),
                    element: element.get(),
                    css: element.attr("class"),
                    disabled: element.prop("disabled"),
                    locked: equal(element.attr("locked"), "locked") || equal(element.data("locked"), true)
                };
            } else if (element.is("optgroup")) {
                return {
                    text:element.attr("label"),
                    children:[],
                    element: element.get(),
                    css: element.attr("class")
                };
            }
        },

        // abstract
        prepareOpts: function (opts) {
            var element, select, idKey, ajaxUrl, self = this;

            element = opts.element;

            if (element.get(0).tagName.toLowerCase() === "select") {
                this.select = select = opts.element;
            }

            if (select) {
                // these options are not allowed when attached to a select because they are picked up off the element itself
                $.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
                    if (this in opts) {
                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
                    }
                });
            }

            opts = $.extend({}, {
                populateResults: function(container, results, query) {
                    var populate, id=this.opts.id, liveRegion=this.liveRegion;

                    populate=function(results, container, depth) {

                        var i, l, result, selectable, disabled, compound, node, label, innerContainer, formatted;

                        results = opts.sortResults(results, container, query);

                        for (i = 0, l = results.length; i < l; i = i + 1) {

                            result=results[i];

                            disabled = (result.disabled === true);
                            selectable = (!disabled) && (id(result) !== undefined);

                            compound=result.children && result.children.length > 0;

                            node=$("<li></li>");
                            node.addClass("select2-results-dept-"+depth);
                            node.addClass("select2-result");
                            node.addClass(selectable ? "select2-result-selectable" : "select2-result-unselectable");
                            if (disabled) { node.addClass("select2-disabled"); }
                            if (compound) { node.addClass("select2-result-with-children"); }
                            node.addClass(self.opts.formatResultCssClass(result));
                            node.attr("role", "presentation");

                            label=$(document.createElement("div"));
                            label.addClass("select2-result-label");
                            label.attr("id", "select2-result-label-" + nextUid());
                            label.attr("role", "option");

                            formatted=opts.formatResult(result, label, query, self.opts.escapeMarkup);
                            if (formatted!==undefined) {
                                label.html(formatted);
                                node.append(label);
                            }


                            if (compound) {

                                innerContainer=$("<ul></ul>");
                                innerContainer.addClass("select2-result-sub");
                                populate(result.children, innerContainer, depth+1);
                                node.append(innerContainer);
                            }

                            node.data("select2-data", result);
                            container.append(node);
                        }

                        liveRegion.text(opts.formatMatches(results.length));
                    };

                    populate(results, container, 0);
                }
            }, $.fn.select2.defaults, opts);

            if (typeof(opts.id) !== "function") {
                idKey = opts.id;
                opts.id = function (e) { return e[idKey]; };
            }

            if ($.isArray(opts.element.data("select2Tags"))) {
                if ("tags" in opts) {
                    throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + opts.element.attr("id");
                }
                opts.tags=opts.element.data("select2Tags");
            }

            if (select) {
                opts.query = this.bind(function (query) {
                    var data = { results: [], more: false },
                        term = query.term,
                        children, placeholderOption, process;

                    process=function(element, collection) {
                        var group;
                        if (element.is("option")) {
                            if (query.matcher(term, element.text(), element)) {
                                collection.push(self.optionToData(element));
                            }
                        } else if (element.is("optgroup")) {
                            group=self.optionToData(element);
                            element.children().each2(function(i, elm) { process(elm, group.children); });
                            if (group.children.length>0) {
                                collection.push(group);
                            }
                        }
                    };

                    children=element.children();

                    // ignore the placeholder option if there is one
                    if (this.getPlaceholder() !== undefined && children.length > 0) {
                        placeholderOption = this.getPlaceholderOption();
                        if (placeholderOption) {
                            children=children.not(placeholderOption);
                        }
                    }

                    children.each2(function(i, elm) { process(elm, data.results); });

                    query.callback(data);
                });
                // this is needed because inside val() we construct choices from options and there id is hardcoded
                opts.id=function(e) { return e.id; };
            } else {
                if (!("query" in opts)) {

                    if ("ajax" in opts) {
                        ajaxUrl = opts.element.data("ajax-url");
                        if (ajaxUrl && ajaxUrl.length > 0) {
                            opts.ajax.url = ajaxUrl;
                        }
                        opts.query = ajax.call(opts.element, opts.ajax);
                    } else if ("data" in opts) {
                        opts.query = local(opts.data);
                    } else if ("tags" in opts) {
                        opts.query = tags(opts.tags);
                        if (opts.createSearchChoice === undefined) {
                            opts.createSearchChoice = function (term) { return {id: $.trim(term), text: $.trim(term)}; };
                        }
                        if (opts.initSelection === undefined) {
                            opts.initSelection = function (element, callback) {
                                var data = [];
                                $(splitVal(element.val(), opts.separator)).each(function () {
                                    var obj = { id: this, text: this },
                                        tags = opts.tags;
                                    if ($.isFunction(tags)) tags=tags();
                                    $(tags).each(function() { if (equal(this.id, obj.id)) { obj = this; return false; } });
                                    data.push(obj);
                                });

                                callback(data);
                            };
                        }
                    }
                }
            }
            if (typeof(opts.query) !== "function") {
                throw "query function not defined for Select2 " + opts.element.attr("id");
            }

            if (opts.createSearchChoicePosition === 'top') {
                opts.createSearchChoicePosition = function(list, item) { list.unshift(item); };
            }
            else if (opts.createSearchChoicePosition === 'bottom') {
                opts.createSearchChoicePosition = function(list, item) { list.push(item); };
            }
            else if (typeof(opts.createSearchChoicePosition) !== "function")  {
                throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
            }

            return opts;
        },

        /**
         * Monitor the original element for changes and update select2 accordingly
         */
        // abstract
        monitorSource: function () {
            var el = this.opts.element, sync, observer;

            el.on("change.select2", this.bind(function (e) {
                if (this.opts.element.data("select2-change-triggered") !== true) {
                    this.initSelection();
                }
            }));

            sync = this.bind(function () {

                // sync enabled state
                var disabled = el.prop("disabled");
                if (disabled === undefined) disabled = false;
                this.enable(!disabled);

                var readonly = el.prop("readonly");
                if (readonly === undefined) readonly = false;
                this.readonly(readonly);

                syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
                this.container.addClass(evaluate(this.opts.containerCssClass));

                syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
                this.dropdown.addClass(evaluate(this.opts.dropdownCssClass));

            });

            // IE8-10 (IE9/10 won't fire propertyChange via attachEventListener)
            if (el.length && el[0].attachEvent) {
                el.each(function() {
                    this.attachEvent("onpropertychange", sync);
                });
            }
            
            // safari, chrome, firefox, IE11
            observer = window.MutationObserver || window.WebKitMutationObserver|| window.MozMutationObserver;
            if (observer !== undefined) {
                if (this.propertyObserver) { delete this.propertyObserver; this.propertyObserver = null; }
                this.propertyObserver = new observer(function (mutations) {
                    mutations.forEach(sync);
                });
                this.propertyObserver.observe(el.get(0), { attributes:true, subtree:false });
            }
        },

        // abstract
        triggerSelect: function(data) {
            var evt = $.Event("select2-selecting", { val: this.id(data), object: data });
            this.opts.element.trigger(evt);
            return !evt.isDefaultPrevented();
        },

        /**
         * Triggers the change event on the source element
         */
        // abstract
        triggerChange: function (details) {

            details = details || {};
            details= $.extend({}, details, { type: "change", val: this.val() });
            // prevents recursive triggering
            this.opts.element.data("select2-change-triggered", true);
            this.opts.element.trigger(details);
            this.opts.element.data("select2-change-triggered", false);

            // some validation frameworks ignore the change event and listen instead to keyup, click for selects
            // so here we trigger the click event manually
            this.opts.element.click();

            // ValidationEngine ignores the change event and listens instead to blur
            // so here we trigger the blur event manually if so desired
            if (this.opts.blurOnChange)
                this.opts.element.blur();
        },

        //abstract
        isInterfaceEnabled: function()
        {
            return this.enabledInterface === true;
        },

        // abstract
        enableInterface: function() {
            var enabled = this._enabled && !this._readonly,
                disabled = !enabled;

            if (enabled === this.enabledInterface) return false;

            this.container.toggleClass("select2-container-disabled", disabled);
            this.close();
            this.enabledInterface = enabled;

            return true;
        },

        // abstract
        enable: function(enabled) {
            if (enabled === undefined) enabled = true;
            if (this._enabled === enabled) return;
            this._enabled = enabled;

            this.opts.element.prop("disabled", !enabled);
            this.enableInterface();
        },

        // abstract
        disable: function() {
            this.enable(false);
        },

        // abstract
        readonly: function(enabled) {
            if (enabled === undefined) enabled = false;
            if (this._readonly === enabled) return;
            this._readonly = enabled;

            this.opts.element.prop("readonly", enabled);
            this.enableInterface();
        },

        // abstract
        opened: function () {
            return this.container.hasClass("select2-dropdown-open");
        },

        // abstract
        positionDropdown: function() {
            var $dropdown = this.dropdown,
                offset = this.container.offset(),
                height = this.container.outerHeight(false),
                width = this.container.outerWidth(false),
                dropHeight = $dropdown.outerHeight(false),
                $window = $(window),
                windowWidth = $window.width(),
                windowHeight = $window.height(),
                viewPortRight = $window.scrollLeft() + windowWidth,
                viewportBottom = $window.scrollTop() + windowHeight,
                dropTop = offset.top + height,
                dropLeft = offset.left,
                enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
                enoughRoomAbove = (offset.top - dropHeight) >= $window.scrollTop(),
                dropWidth = $dropdown.outerWidth(false),
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight,
                aboveNow = $dropdown.hasClass("select2-drop-above"),
                bodyOffset,
                above,
                changeDirection,
                css,
                resultsListNode;

            // always prefer the current above/below alignment, unless there is not enough room
            if (aboveNow) {
                above = true;
                if (!enoughRoomAbove && enoughRoomBelow) {
                    changeDirection = true;
                    above = false;
                }
            } else {
                above = false;
                if (!enoughRoomBelow && enoughRoomAbove) {
                    changeDirection = true;
                    above = true;
                }
            }

            //if we are changing direction we need to get positions when dropdown is hidden;
            if (changeDirection) {
                $dropdown.hide();
                offset = this.container.offset();
                height = this.container.outerHeight(false);
                width = this.container.outerWidth(false);
                dropHeight = $dropdown.outerHeight(false);
                viewPortRight = $window.scrollLeft() + windowWidth;
                viewportBottom = $window.scrollTop() + windowHeight;
                dropTop = offset.top + height;
                dropLeft = offset.left;
                dropWidth = $dropdown.outerWidth(false);
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
                $dropdown.show();

                // fix so the cursor does not move to the left within the search-textbox in IE
                this.focusSearch();
            }

            if (this.opts.dropdownAutoWidth) {
                resultsListNode = $('.select2-results', $dropdown)[0];
                $dropdown.addClass('select2-drop-auto-width');
                $dropdown.css('width', '');
                // Add scrollbar width to dropdown if vertical scrollbar is present
                dropWidth = $dropdown.outerWidth(false) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : scrollBarDimensions.width);
                dropWidth > width ? width = dropWidth : dropWidth = width;
                dropHeight = $dropdown.outerHeight(false);
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
            }
            else {
                this.container.removeClass('select2-drop-auto-width');
            }

            //console.log("below/ droptop:", dropTop, "dropHeight", dropHeight, "sum", (dropTop+dropHeight)+" viewport bottom", viewportBottom, "enough?", enoughRoomBelow);
            //console.log("above/ offset.top", offset.top, "dropHeight", dropHeight, "top", (offset.top-dropHeight), "scrollTop", this.body.scrollTop(), "enough?", enoughRoomAbove);

            // fix positioning when body has an offset and is not position: static
            if (this.body.css('position') !== 'static') {
                bodyOffset = this.body.offset();
                dropTop -= bodyOffset.top;
                dropLeft -= bodyOffset.left;
            }

            if (!enoughRoomOnRight) {
                dropLeft = offset.left + this.container.outerWidth(false) - dropWidth;
            }

            css =  {
                left: dropLeft,
                width: width
            };

            if (above) {
                css.top = offset.top - dropHeight;
                css.bottom = 'auto';
                this.container.addClass("select2-drop-above");
                $dropdown.addClass("select2-drop-above");
            }
            else {
                css.top = dropTop;
                css.bottom = 'auto';
                this.container.removeClass("select2-drop-above");
                $dropdown.removeClass("select2-drop-above");
            }
            css = $.extend(css, evaluate(this.opts.dropdownCss));

            $dropdown.css(css);
        },

        // abstract
        shouldOpen: function() {
            var event;

            if (this.opened()) return false;

            if (this._enabled === false || this._readonly === true) return false;

            event = $.Event("select2-opening");
            this.opts.element.trigger(event);
            return !event.isDefaultPrevented();
        },

        // abstract
        clearDropdownAlignmentPreference: function() {
            // clear the classes used to figure out the preference of where the dropdown should be opened
            this.container.removeClass("select2-drop-above");
            this.dropdown.removeClass("select2-drop-above");
        },

        /**
         * Opens the dropdown
         *
         * @return {Boolean} whether or not dropdown was opened. This method will return false if, for example,
         * the dropdown is already open, or if the 'open' event listener on the element called preventDefault().
         */
        // abstract
        open: function () {

            if (!this.shouldOpen()) return false;

            this.opening();

            return true;
        },

        /**
         * Performs the opening of the dropdown
         */
        // abstract
        opening: function() {
            var cid = this.containerEventName,
                scroll = "scroll." + cid,
                resize = "resize."+cid,
                orient = "orientationchange."+cid,
                mask;

            this.container.addClass("select2-dropdown-open").addClass("select2-container-active");

            this.clearDropdownAlignmentPreference();

            if(this.dropdown[0] !== this.body.children().last()[0]) {
                this.dropdown.detach().appendTo(this.body);
            }

            // create the dropdown mask if doesn't already exist
            mask = $("#select2-drop-mask");
            if (mask.length == 0) {
                mask = $(document.createElement("div"));
                mask.attr("id","select2-drop-mask").attr("class","select2-drop-mask");
                mask.hide();
                mask.appendTo(this.body);
                mask.on("mousedown touchstart click", function (e) {
                    // Prevent IE from generating a click event on the body
                    reinsertElement(mask);

                    var dropdown = $("#select2-drop"), self;
                    if (dropdown.length > 0) {
                        self=dropdown.data("select2");
                        if (self.opts.selectOnBlur) {
                            self.selectHighlighted({noFocus: true});
                        }
                        self.close();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });
            }

            // ensure the mask is always right before the dropdown
            if (this.dropdown.prev()[0] !== mask[0]) {
                this.dropdown.before(mask);
            }

            // move the global id to the correct dropdown
            $("#select2-drop").removeAttr("id");
            this.dropdown.attr("id", "select2-drop");

            // show the elements
            mask.show();

            this.positionDropdown();
            this.dropdown.show();
            this.positionDropdown();

            this.dropdown.addClass("select2-drop-active");

            // attach listeners to events that can change the position of the container and thus require
            // the position of the dropdown to be updated as well so it does not come unglued from the container
            var that = this;
            this.container.parents().add(window).each(function () {
                $(this).on(resize+" "+scroll+" "+orient, function (e) {
                    if (that.opened()) that.positionDropdown();
                });
            });


        },

        // abstract
        close: function () {
            if (!this.opened()) return;

            var cid = this.containerEventName,
                scroll = "scroll." + cid,
                resize = "resize."+cid,
                orient = "orientationchange."+cid;

            // unbind event listeners
            this.container.parents().add(window).each(function () { $(this).off(scroll).off(resize).off(orient); });

            this.clearDropdownAlignmentPreference();

            $("#select2-drop-mask").hide();
            this.dropdown.removeAttr("id"); // only the active dropdown has the select2-drop id
            this.dropdown.hide();
            this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
            this.results.empty();


            this.clearSearch();
            this.search.removeClass("select2-active");
            this.opts.element.trigger($.Event("select2-close"));
        },

        /**
         * Opens control, sets input value, and updates results.
         */
        // abstract
        externalSearch: function (term) {
            this.open();
            this.search.val(term);
            this.updateResults(false);
        },

        // abstract
        clearSearch: function () {

        },

        //abstract
        getMaximumSelectionSize: function() {
            return evaluate(this.opts.maximumSelectionSize);
        },

        // abstract
        ensureHighlightVisible: function () {
            var results = this.results, children, index, child, hb, rb, y, more;

            index = this.highlight();

            if (index < 0) return;

            if (index == 0) {

                // if the first element is highlighted scroll all the way to the top,
                // that way any unselectable headers above it will also be scrolled
                // into view

                results.scrollTop(0);
                return;
            }

            children = this.findHighlightableChoices().find('.select2-result-label');

            child = $(children[index]);

            hb = child.offset().top + child.outerHeight(true);

            // if this is the last child lets also make sure select2-more-results is visible
            if (index === children.length - 1) {
                more = results.find("li.select2-more-results");
                if (more.length > 0) {
                    hb = more.offset().top + more.outerHeight(true);
                }
            }

            rb = results.offset().top + results.outerHeight(true);
            if (hb > rb) {
                results.scrollTop(results.scrollTop() + (hb - rb));
            }
            y = child.offset().top - results.offset().top;

            // make sure the top of the element is visible
            if (y < 0 && child.css('display') != 'none' ) {
                results.scrollTop(results.scrollTop() + y); // y is negative
            }
        },

        // abstract
        findHighlightableChoices: function() {
            return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)");
        },

        // abstract
        moveHighlight: function (delta) {
            var choices = this.findHighlightableChoices(),
                index = this.highlight();

            while (index > -1 && index < choices.length) {
                index += delta;
                var choice = $(choices[index]);
                if (choice.hasClass("select2-result-selectable") && !choice.hasClass("select2-disabled") && !choice.hasClass("select2-selected")) {
                    this.highlight(index);
                    break;
                }
            }
        },

        // abstract
        highlight: function (index) {
            var choices = this.findHighlightableChoices(),
                choice,
                data;

            if (arguments.length === 0) {
                return indexOf(choices.filter(".select2-highlighted")[0], choices.get());
            }

            if (index >= choices.length) index = choices.length - 1;
            if (index < 0) index = 0;

            this.removeHighlight();

            choice = $(choices[index]);
            choice.addClass("select2-highlighted");

            // ensure assistive technology can determine the active choice
            this.search.attr("aria-activedescendant", choice.find(".select2-result-label").attr("id"));

            this.ensureHighlightVisible();

            this.liveRegion.text(choice.text());

            data = choice.data("select2-data");
            if (data) {
                this.opts.element.trigger({ type: "select2-highlight", val: this.id(data), choice: data });
            }
        },

        removeHighlight: function() {
            this.results.find(".select2-highlighted").removeClass("select2-highlighted");
        },

        touchMoved: function() {
            this._touchMoved = true;
        },

        clearTouchMoved: function() {
          this._touchMoved = false;
        },

        // abstract
        countSelectableResults: function() {
            return this.findHighlightableChoices().length;
        },

        // abstract
        highlightUnderEvent: function (event) {
            var el = $(event.target).closest(".select2-result-selectable");
            if (el.length > 0 && !el.is(".select2-highlighted")) {
                var choices = this.findHighlightableChoices();
                this.highlight(choices.index(el));
            } else if (el.length == 0) {
                // if we are over an unselectable item remove all highlights
                this.removeHighlight();
            }
        },

        // abstract
        loadMoreIfNeeded: function () {
            var results = this.results,
                more = results.find("li.select2-more-results"),
                below, // pixels the element is below the scroll fold, below==0 is when the element is starting to be visible
                page = this.resultsPage + 1,
                self=this,
                term=this.search.val(),
                context=this.context;

            if (more.length === 0) return;
            below = more.offset().top - results.offset().top - results.height();

            if (below <= this.opts.loadMorePadding) {
                more.addClass("select2-active");
                this.opts.query({
                        element: this.opts.element,
                        term: term,
                        page: page,
                        context: context,
                        matcher: this.opts.matcher,
                        callback: this.bind(function (data) {

                    // ignore a response if the select2 has been closed before it was received
                    if (!self.opened()) return;


                    self.opts.populateResults.call(this, results, data.results, {term: term, page: page, context:context});
                    self.postprocessResults(data, false, false);

                    if (data.more===true) {
                        more.detach().appendTo(results).text(evaluate(self.opts.formatLoadMore, page+1));
                        window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
                    } else {
                        more.remove();
                    }
                    self.positionDropdown();
                    self.resultsPage = page;
                    self.context = data.context;
                    this.opts.element.trigger({ type: "select2-loaded", items: data });
                })});
            }
        },

        /**
         * Default tokenizer function which does nothing
         */
        tokenize: function() {

        },

        /**
         * @param initial whether or not this is the call to this method right after the dropdown has been opened
         */
        // abstract
        updateResults: function (initial) {
            var search = this.search,
                results = this.results,
                opts = this.opts,
                data,
                self = this,
                input,
                term = search.val(),
                lastTerm = $.data(this.container, "select2-last-term"),
                // sequence number used to drop out-of-order responses
                queryNumber;

            // prevent duplicate queries against the same term
            if (initial !== true && lastTerm && equal(term, lastTerm)) return;

            $.data(this.container, "select2-last-term", term);

            // if the search is currently hidden we do not alter the results
            if (initial !== true && (this.showSearchInput === false || !this.opened())) {
                return;
            }

            function postRender() {
                search.removeClass("select2-active");
                self.positionDropdown();
                if (results.find('.select2-no-results,.select2-selection-limit,.select2-searching').length) {
                    self.liveRegion.text(results.text());
                }
                else {
                    self.liveRegion.text(self.opts.formatMatches(results.find('.select2-result-selectable').length));
                }
            }

            function render(html) {
                results.html(html);
                postRender();
            }

            queryNumber = ++this.queryCount;

            var maxSelSize = this.getMaximumSelectionSize();
            if (maxSelSize >=1) {
                data = this.data();
                if ($.isArray(data) && data.length >= maxSelSize && checkFormatter(opts.formatSelectionTooBig, "formatSelectionTooBig")) {
                    render("<li class='select2-selection-limit'>" + evaluate(opts.formatSelectionTooBig, maxSelSize) + "</li>");
                    return;
                }
            }

            if (search.val().length < opts.minimumInputLength) {
                if (checkFormatter(opts.formatInputTooShort, "formatInputTooShort")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooShort, search.val(), opts.minimumInputLength) + "</li>");
                } else {
                    render("");
                }
                if (initial && this.showSearch) this.showSearch(true);
                return;
            }

            if (opts.maximumInputLength && search.val().length > opts.maximumInputLength) {
                if (checkFormatter(opts.formatInputTooLong, "formatInputTooLong")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooLong, search.val(), opts.maximumInputLength) + "</li>");
                } else {
                    render("");
                }
                return;
            }

            if (opts.formatSearching && this.findHighlightableChoices().length === 0) {
                render("<li class='select2-searching'>" + evaluate(opts.formatSearching) + "</li>");
            }

            search.addClass("select2-active");

            this.removeHighlight();

            // give the tokenizer a chance to pre-process the input
            input = this.tokenize();
            if (input != undefined && input != null) {
                search.val(input);
            }

            this.resultsPage = 1;

            opts.query({
                element: opts.element,
                    term: search.val(),
                    page: this.resultsPage,
                    context: null,
                    matcher: opts.matcher,
                    callback: this.bind(function (data) {
                var def; // default choice

                // ignore old responses
                if (queryNumber != this.queryCount) {
                  return;
                }

                // ignore a response if the select2 has been closed before it was received
                if (!this.opened()) {
                    this.search.removeClass("select2-active");
                    return;
                }

                // save context, if any
                this.context = (data.context===undefined) ? null : data.context;
                // create a default choice and prepend it to the list
                if (this.opts.createSearchChoice && search.val() !== "") {
                    def = this.opts.createSearchChoice.call(self, search.val(), data.results);
                    if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null) {
                        if ($(data.results).filter(
                            function () {
                                return equal(self.id(this), self.id(def));
                            }).length === 0) {
                            this.opts.createSearchChoicePosition(data.results, def);
                        }
                    }
                }

                if (data.results.length === 0 && checkFormatter(opts.formatNoMatches, "formatNoMatches")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatNoMatches, search.val()) + "</li>");
                    return;
                }

                results.empty();
                self.opts.populateResults.call(this, results, data.results, {term: search.val(), page: this.resultsPage, context:null});

                if (data.more === true && checkFormatter(opts.formatLoadMore, "formatLoadMore")) {
                    results.append("<li class='select2-more-results'>" + self.opts.escapeMarkup(evaluate(opts.formatLoadMore, this.resultsPage)) + "</li>");
                    window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
                }

                this.postprocessResults(data, initial);

                postRender();

                this.opts.element.trigger({ type: "select2-loaded", items: data });
            })});
        },

        // abstract
        cancel: function () {
            this.close();
        },

        // abstract
        blur: function () {
            // if selectOnBlur == true, select the currently highlighted option
            if (this.opts.selectOnBlur)
                this.selectHighlighted({noFocus: true});

            this.close();
            this.container.removeClass("select2-container-active");
            // synonymous to .is(':focus'), which is available in jquery >= 1.6
            if (this.search[0] === document.activeElement) { this.search.blur(); }
            this.clearSearch();
            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
        },

        // abstract
        focusSearch: function () {
            focus(this.search);
        },

        // abstract
        selectHighlighted: function (options) {
            if (this._touchMoved) {
              this.clearTouchMoved();
              return;
            }
            var index=this.highlight(),
                highlighted=this.results.find(".select2-highlighted"),
                data = highlighted.closest('.select2-result').data("select2-data");

            if (data) {
                this.highlight(index);
                this.onSelect(data, options);
            } else if (options && options.noFocus) {
                this.close();
            }
        },

        // abstract
        getPlaceholder: function () {
            var placeholderOption;
            return this.opts.element.attr("placeholder") ||
                this.opts.element.attr("data-placeholder") || // jquery 1.4 compat
                this.opts.element.data("placeholder") ||
                this.opts.placeholder ||
                ((placeholderOption = this.getPlaceholderOption()) !== undefined ? placeholderOption.text() : undefined);
        },

        // abstract
        getPlaceholderOption: function() {
            if (this.select) {
                var firstOption = this.select.children('option').first();
                if (this.opts.placeholderOption !== undefined ) {
                    //Determine the placeholder option based on the specified placeholderOption setting
                    return (this.opts.placeholderOption === "first" && firstOption) ||
                           (typeof this.opts.placeholderOption === "function" && this.opts.placeholderOption(this.select));
                } else if ($.trim(firstOption.text()) === "" && firstOption.val() === "") {
                    //No explicit placeholder option specified, use the first if it's blank
                    return firstOption;
                }
            }
        },

        /**
         * Get the desired width for the container element.  This is
         * derived first from option `width` passed to select2, then
         * the inline 'style' on the original element, and finally
         * falls back to the jQuery calculated element width.
         */
        // abstract
        initContainerWidth: function () {
            function resolveContainerWidth() {
                var style, attrs, matches, i, l, attr;

                if (this.opts.width === "off") {
                    return null;
                } else if (this.opts.width === "element"){
                    return this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px';
                } else if (this.opts.width === "copy" || this.opts.width === "resolve") {
                    // check if there is inline style on the element that contains width
                    style = this.opts.element.attr('style');
                    if (style !== undefined) {
                        attrs = style.split(';');
                        for (i = 0, l = attrs.length; i < l; i = i + 1) {
                            attr = attrs[i].replace(/\s/g, '');
                            matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
                            if (matches !== null && matches.length >= 1)
                                return matches[1];
                        }
                    }

                    if (this.opts.width === "resolve") {
                        // next check if css('width') can resolve a width that is percent based, this is sometimes possible
                        // when attached to input type=hidden or elements hidden via css
                        style = this.opts.element.css('width');
                        if (style.indexOf("%") > 0) return style;

                        // finally, fallback on the calculated width of the element
                        return (this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px');
                    }

                    return null;
                } else if ($.isFunction(this.opts.width)) {
                    return this.opts.width();
                } else {
                    return this.opts.width;
               }
            };

            var width = resolveContainerWidth.call(this);
            if (width !== null) {
                this.container.css("width", width);
            }
        }
    });

    SingleSelect2 = clazz(AbstractSelect2, {

        // single

        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container"
            }).html([
                "<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>",
                "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>",
                "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>",
                "</a>",
                "<label for='' class='select2-offscreen'></label>",
                "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />",
                "<div class='select2-drop select2-display-none'>",
                "   <div class='select2-search'>",
                "       <label for='' class='select2-offscreen'></label>",
                "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'",
                "       aria-autocomplete='list' />",
                "   </div>",
                "   <ul class='select2-results' role='listbox'>",
                "   </ul>",
                "</div>"].join(""));
            return container;
        },

        // single
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.focusser.prop("disabled", !this.isInterfaceEnabled());
            }
        },

        // single
        opening: function () {
            var el, range, len;

            if (this.opts.minimumResultsForSearch >= 0) {
                this.showSearch(true);
            }

            this.parent.opening.apply(this, arguments);

            if (this.showSearchInput !== false) {
                // IE appends focusser.val() at the end of field :/ so we manually insert it at the beginning using a range
                // all other browsers handle this just fine

                this.search.val(this.focusser.val());
            }
            if (this.opts.shouldFocusInput(this)) {
                this.search.focus();
                // move the cursor to the end after focussing, otherwise it will be at the beginning and
                // new text will appear *before* focusser.val()
                el = this.search.get(0);
                if (el.createTextRange) {
                    range = el.createTextRange();
                    range.collapse(false);
                    range.select();
                } else if (el.setSelectionRange) {
                    len = this.search.val().length;
                    el.setSelectionRange(len, len);
                }
            }

            // initializes search's value with nextSearchTerm (if defined by user)
            // ignore nextSearchTerm if the dropdown is opened by the user pressing a letter
            if(this.search.val() === "") {
                if(this.nextSearchTerm != undefined){
                    this.search.val(this.nextSearchTerm);
                    this.search.select();
                }
            }

            this.focusser.prop("disabled", true).val("");
            this.updateResults(true);
            this.opts.element.trigger($.Event("select2-open"));
        },

        // single
        close: function () {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);

            this.focusser.prop("disabled", false);

            if (this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }
        },

        // single
        focus: function () {
            if (this.opened()) {
                this.close();
            } else {
                this.focusser.prop("disabled", false);
                if (this.opts.shouldFocusInput(this)) {
                    this.focusser.focus();
                }
            }
        },

        // single
        isFocused: function () {
            return this.container.hasClass("select2-container-active");
        },

        // single
        cancel: function () {
            this.parent.cancel.apply(this, arguments);
            this.focusser.prop("disabled", false);

            if (this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }
        },

        // single
        destroy: function() {
            $("label[for='" + this.focusser.attr('id') + "']")
                .attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);

            cleanupJQueryElements.call(this,
                "selection",
                "focusser"
            );
        },

        // single
        initContainer: function () {

            var selection,
                container = this.container,
                dropdown = this.dropdown,
                idSuffix = nextUid(),
                elementLabel;

            if (this.opts.minimumResultsForSearch < 0) {
                this.showSearch(false);
            } else {
                this.showSearch(true);
            }

            this.selection = selection = container.find(".select2-choice");

            this.focusser = container.find(".select2-focusser");

            // add aria associations
            selection.find(".select2-chosen").attr("id", "select2-chosen-"+idSuffix);
            this.focusser.attr("aria-labelledby", "select2-chosen-"+idSuffix);
            this.results.attr("id", "select2-results-"+idSuffix);
            this.search.attr("aria-owns", "select2-results-"+idSuffix);

            // rewrite labels from original element to focusser
            this.focusser.attr("id", "s2id_autogen"+idSuffix);

            elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");

            this.focusser.prev()
                .text(elementLabel.text())
                .attr('for', this.focusser.attr('id'));

            // Ensure the original element retains an accessible name
            var originalTitle = this.opts.element.attr("title");
            this.opts.element.attr("title", (originalTitle || elementLabel.text()));

            this.focusser.attr("tabindex", this.elementTabIndex);

            // write label for search field using the label from the focusser element
            this.search.attr("id", this.focusser.attr('id') + '_search');

            this.search.prev()
                .text($("label[for='" + this.focusser.attr('id') + "']").text())
                .attr('for', this.search.attr('id'));

            this.search.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    // prevent the page from scrolling
                    killEvent(e);
                    return;
                }

                switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({noFocus: true});
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                }
            }));

            this.search.on("blur", this.bind(function(e) {
                // a workaround for chrome to keep the search field focussed when the scroll bar is used to scroll the dropdown.
                // without this the search field loses focus which is annoying
                if (document.activeElement === this.body.get(0)) {
                    window.setTimeout(this.bind(function() {
                        if (this.opened()) {
                            this.search.focus();
                        }
                    }), 0);
                }
            }));

            this.focusser.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
                    return;
                }

                if (this.opts.openOnEnter === false && e.which === KEY.ENTER) {
                    killEvent(e);
                    return;
                }

                if (e.which == KEY.DOWN || e.which == KEY.UP
                    || (e.which == KEY.ENTER && this.opts.openOnEnter)) {

                    if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;

                    this.open();
                    killEvent(e);
                    return;
                }

                if (e.which == KEY.DELETE || e.which == KEY.BACKSPACE) {
                    if (this.opts.allowClear) {
                        this.clear();
                    }
                    killEvent(e);
                    return;
                }
            }));


            installKeyUpChangeEvent(this.focusser);
            this.focusser.on("keyup-change input", this.bind(function(e) {
                if (this.opts.minimumResultsForSearch >= 0) {
                    e.stopPropagation();
                    if (this.opened()) return;
                    this.open();
                }
            }));

            selection.on("mousedown touchstart", "abbr", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;
                this.clear();
                killEventImmediately(e);
                this.close();
                this.selection.focus();
            }));

            selection.on("mousedown touchstart", this.bind(function (e) {
                // Prevent IE from generating a click event on the body
                reinsertElement(selection);

                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }

                if (this.opened()) {
                    this.close();
                } else if (this.isInterfaceEnabled()) {
                    this.open();
                }

                killEvent(e);
            }));

            dropdown.on("mousedown touchstart", this.bind(function() {
                if (this.opts.shouldFocusInput(this)) {
                    this.search.focus();
                }
            }));

            selection.on("focus", this.bind(function(e) {
                killEvent(e);
            }));

            this.focusser.on("focus", this.bind(function(){
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            })).on("blur", this.bind(function() {
                if (!this.opened()) {
                    this.container.removeClass("select2-container-active");
                    this.opts.element.trigger($.Event("select2-blur"));
                }
            }));
            this.search.on("focus", this.bind(function(){
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            }));

            this.initContainerWidth();
            this.opts.element.addClass("select2-offscreen");
            this.setPlaceholder();

        },

        // single
        clear: function(triggerChange) {
            var data=this.selection.data("select2-data");
            if (data) { // guard against queued quick consecutive clicks
                var evt = $.Event("select2-clearing");
                this.opts.element.trigger(evt);
                if (evt.isDefaultPrevented()) {
                    return;
                }
                var placeholderOption = this.getPlaceholderOption();
                this.opts.element.val(placeholderOption ? placeholderOption.val() : "");
                this.selection.find(".select2-chosen").empty();
                this.selection.removeData("select2-data");
                this.setPlaceholder();

                if (triggerChange !== false){
                    this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
                    this.triggerChange({removed:data});
                }
            }
        },

        /**
         * Sets selection based on source element's value
         */
        // single
        initSelection: function () {
            var selected;
            if (this.isPlaceholderOptionSelected()) {
                this.updateSelection(null);
                this.close();
                this.setPlaceholder();
            } else {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(selected){
                    if (selected !== undefined && selected !== null) {
                        self.updateSelection(selected);
                        self.close();
                        self.setPlaceholder();
                        self.nextSearchTerm = self.opts.nextSearchTerm(selected, self.search.val());
                    }
                });
            }
        },

        isPlaceholderOptionSelected: function() {
            var placeholderOption;
            if (this.getPlaceholder() === undefined) return false; // no placeholder specified so no option should be considered
            return ((placeholderOption = this.getPlaceholderOption()) !== undefined && placeholderOption.prop("selected"))
                || (this.opts.element.val() === "")
                || (this.opts.element.val() === undefined)
                || (this.opts.element.val() === null);
        },

        // single
        prepareOpts: function () {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self=this;

            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                // install the selection initializer
                opts.initSelection = function (element, callback) {
                    var selected = element.find("option").filter(function() { return this.selected && !this.disabled });
                    // a single select box always has a value, no need to null check 'selected'
                    callback(self.optionToData(selected));
                };
            } else if ("data" in opts) {
                // install default initSelection when applied to hidden input and data is local
                opts.initSelection = opts.initSelection || function (element, callback) {
                    var id = element.val();
                    //search in data by id, storing the actual matching item
                    var match = null;
                    opts.query({
                        matcher: function(term, text, el){
                            var is_match = equal(id, opts.id(el));
                            if (is_match) {
                                match = el;
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            callback(match);
                        }
                    });
                };
            }

            return opts;
        },

        // single
        getPlaceholder: function() {
            // if a placeholder is specified on a single select without a valid placeholder option ignore it
            if (this.select) {
                if (this.getPlaceholderOption() === undefined) {
                    return undefined;
                }
            }

            return this.parent.getPlaceholder.apply(this, arguments);
        },

        // single
        setPlaceholder: function () {
            var placeholder = this.getPlaceholder();

            if (this.isPlaceholderOptionSelected() && placeholder !== undefined) {

                // check for a placeholder option if attached to a select
                if (this.select && this.getPlaceholderOption() === undefined) return;

                this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(placeholder));

                this.selection.addClass("select2-default");

                this.container.removeClass("select2-allowclear");
            }
        },

        // single
        postprocessResults: function (data, initial, noHighlightUpdate) {
            var selected = 0, self = this, showSearchInput = true;

            // find the selected element in the result list

            this.findHighlightableChoices().each2(function (i, elm) {
                if (equal(self.id(elm.data("select2-data")), self.opts.element.val())) {
                    selected = i;
                    return false;
                }
            });

            // and highlight it
            if (noHighlightUpdate !== false) {
                if (initial === true && selected >= 0) {
                    this.highlight(selected);
                } else {
                    this.highlight(0);
                }
            }

            // hide the search box if this is the first we got the results and there are enough of them for search

            if (initial === true) {
                var min = this.opts.minimumResultsForSearch;
                if (min >= 0) {
                    this.showSearch(countResults(data.results) >= min);
                }
            }
        },

        // single
        showSearch: function(showSearchInput) {
            if (this.showSearchInput === showSearchInput) return;

            this.showSearchInput = showSearchInput;

            this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !showSearchInput);
            this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !showSearchInput);
            //add "select2-with-searchbox" to the container if search box is shown
            $(this.dropdown, this.container).toggleClass("select2-with-searchbox", showSearchInput);
        },

        // single
        onSelect: function (data, options) {

            if (!this.triggerSelect(data)) { return; }

            var old = this.opts.element.val(),
                oldData = this.data();

            this.opts.element.val(this.id(data));
            this.updateSelection(data);

            this.opts.element.trigger({ type: "select2-selected", val: this.id(data), choice: data });

            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());
            this.close();

            if ((!options || !options.noFocus) && this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }

            if (!equal(old, this.id(data))) {
                this.triggerChange({ added: data, removed: oldData });
            }
        },

        // single
        updateSelection: function (data) {

            var container=this.selection.find(".select2-chosen"), formatted, cssClass;

            this.selection.data("select2-data", data);

            container.empty();
            if (data !== null) {
                formatted=this.opts.formatSelection(data, container, this.opts.escapeMarkup);
            }
            if (formatted !== undefined) {
                container.append(formatted);
            }
            cssClass=this.opts.formatSelectionCssClass(data, container);
            if (cssClass !== undefined) {
                container.addClass(cssClass);
            }

            this.selection.removeClass("select2-default");

            if (this.opts.allowClear && this.getPlaceholder() !== undefined) {
                this.container.addClass("select2-allowclear");
            }
        },

        // single
        val: function () {
            var val,
                triggerChange = false,
                data = null,
                self = this,
                oldData = this.data();

            if (arguments.length === 0) {
                return this.opts.element.val();
            }

            val = arguments[0];

            if (arguments.length > 1) {
                triggerChange = arguments[1];
            }

            if (this.select) {
                this.select
                    .val(val)
                    .find("option").filter(function() { return this.selected }).each2(function (i, elm) {
                        data = self.optionToData(elm);
                        return false;
                    });
                this.updateSelection(data);
                this.setPlaceholder();
                if (triggerChange) {
                    this.triggerChange({added: data, removed:oldData});
                }
            } else {
                // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
                if (!val && val !== 0) {
                    this.clear(triggerChange);
                    return;
                }
                if (this.opts.initSelection === undefined) {
                    throw new Error("cannot call val() if initSelection() is not defined");
                }
                this.opts.element.val(val);
                this.opts.initSelection(this.opts.element, function(data){
                    self.opts.element.val(!data ? "" : self.id(data));
                    self.updateSelection(data);
                    self.setPlaceholder();
                    if (triggerChange) {
                        self.triggerChange({added: data, removed:oldData});
                    }
                });
            }
        },

        // single
        clearSearch: function () {
            this.search.val("");
            this.focusser.val("");
        },

        // single
        data: function(value) {
            var data,
                triggerChange = false;

            if (arguments.length === 0) {
                data = this.selection.data("select2-data");
                if (data == undefined) data = null;
                return data;
            } else {
                if (arguments.length > 1) {
                    triggerChange = arguments[1];
                }
                if (!value) {
                    this.clear(triggerChange);
                } else {
                    data = this.data();
                    this.opts.element.val(!value ? "" : this.id(value));
                    this.updateSelection(value);
                    if (triggerChange) {
                        this.triggerChange({added: value, removed:data});
                    }
                }
            }
        }
    });

    MultiSelect2 = clazz(AbstractSelect2, {

        // multi
        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container select2-container-multi"
            }).html([
                "<ul class='select2-choices'>",
                "  <li class='select2-search-field'>",
                "    <label for='' class='select2-offscreen'></label>",
                "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>",
                "  </li>",
                "</ul>",
                "<div class='select2-drop select2-drop-multi select2-display-none'>",
                "   <ul class='select2-results'>",
                "   </ul>",
                "</div>"].join(""));
            return container;
        },

        // multi
        prepareOpts: function () {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self=this;

            // TODO validate placeholder is a string if specified

            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                // install the selection initializer
                opts.initSelection = function (element, callback) {

                    var data = [];

                    element.find("option").filter(function() { return this.selected && !this.disabled }).each2(function (i, elm) {
                        data.push(self.optionToData(elm));
                    });
                    callback(data);
                };
            } else if ("data" in opts) {
                // install default initSelection when applied to hidden input and data is local
                opts.initSelection = opts.initSelection || function (element, callback) {
                    var ids = splitVal(element.val(), opts.separator);
                    //search in data by array of ids, storing matching items in a list
                    var matches = [];
                    opts.query({
                        matcher: function(term, text, el){
                            var is_match = $.grep(ids, function(id) {
                                return equal(id, opts.id(el));
                            }).length;
                            if (is_match) {
                                matches.push(el);
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            // reorder matches based on the order they appear in the ids array because right now
                            // they are in the order in which they appear in data array
                            var ordered = [];
                            for (var i = 0; i < ids.length; i++) {
                                var id = ids[i];
                                for (var j = 0; j < matches.length; j++) {
                                    var match = matches[j];
                                    if (equal(id, opts.id(match))) {
                                        ordered.push(match);
                                        matches.splice(j, 1);
                                        break;
                                    }
                                }
                            }
                            callback(ordered);
                        }
                    });
                };
            }

            return opts;
        },

        // multi
        selectChoice: function (choice) {

            var selected = this.container.find(".select2-search-choice-focus");
            if (selected.length && choice && choice[0] == selected[0]) {

            } else {
                if (selected.length) {
                    this.opts.element.trigger("choice-deselected", selected);
                }
                selected.removeClass("select2-search-choice-focus");
                if (choice && choice.length) {
                    this.close();
                    choice.addClass("select2-search-choice-focus");
                    this.opts.element.trigger("choice-selected", choice);
                }
            }
        },

        // multi
        destroy: function() {
            $("label[for='" + this.search.attr('id') + "']")
                .attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);

            cleanupJQueryElements.call(this,
                "searchContainer",
                "selection"
            );
        },

        // multi
        initContainer: function () {

            var selector = ".select2-choices", selection;

            this.searchContainer = this.container.find(".select2-search-field");
            this.selection = selection = this.container.find(selector);

            var _this = this;
            this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function (e) {
                //killEvent(e);
                _this.search[0].focus();
                _this.selectChoice($(this));
            });

            // rewrite labels from original element to focusser
            this.search.attr("id", "s2id_autogen"+nextUid());

            this.search.prev()
                .text($("label[for='" + this.opts.element.attr("id") + "']").text())
                .attr('for', this.search.attr('id'));

            this.search.on("input paste", this.bind(function() {
                if (!this.isInterfaceEnabled()) return;
                if (!this.opened()) {
                    this.open();
                }
            }));

            this.search.attr("tabindex", this.elementTabIndex);

            this.keydowns = 0;
            this.search.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                ++this.keydowns;
                var selected = selection.find(".select2-search-choice-focus");
                var prev = selected.prev(".select2-search-choice:not(.select2-locked)");
                var next = selected.next(".select2-search-choice:not(.select2-locked)");
                var pos = getCursorInfo(this.search);

                if (selected.length &&
                    (e.which == KEY.LEFT || e.which == KEY.RIGHT || e.which == KEY.BACKSPACE || e.which == KEY.DELETE || e.which == KEY.ENTER)) {
                    var selectedChoice = selected;
                    if (e.which == KEY.LEFT && prev.length) {
                        selectedChoice = prev;
                    }
                    else if (e.which == KEY.RIGHT) {
                        selectedChoice = next.length ? next : null;
                    }
                    else if (e.which === KEY.BACKSPACE) {
                        if (this.unselect(selected.first())) {
                            this.search.width(10);
                            selectedChoice = prev.length ? prev : next;
                        }
                    } else if (e.which == KEY.DELETE) {
                        if (this.unselect(selected.first())) {
                            this.search.width(10);
                            selectedChoice = next.length ? next : null;
                        }
                    } else if (e.which == KEY.ENTER) {
                        selectedChoice = null;
                    }

                    this.selectChoice(selectedChoice);
                    killEvent(e);
                    if (!selectedChoice || !selectedChoice.length) {
                        this.open();
                    }
                    return;
                } else if (((e.which === KEY.BACKSPACE && this.keydowns == 1)
                    || e.which == KEY.LEFT) && (pos.offset == 0 && !pos.length)) {

                    this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());
                    killEvent(e);
                    return;
                } else {
                    this.selectChoice(null);
                }

                if (this.opened()) {
                    switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({noFocus:true});
                        this.close();
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                    }
                }

                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e)
                 || e.which === KEY.BACKSPACE || e.which === KEY.ESC) {
                    return;
                }

                if (e.which === KEY.ENTER) {
                    if (this.opts.openOnEnter === false) {
                        return;
                    } else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                        return;
                    }
                }

                this.open();

                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    // prevent the page from scrolling
                    killEvent(e);
                }

                if (e.which === KEY.ENTER) {
                    // prevent form from being submitted
                    killEvent(e);
                }

            }));

            this.search.on("keyup", this.bind(function (e) {
                this.keydowns = 0;
                this.resizeSearch();
            })
            );

            this.search.on("blur", this.bind(function(e) {
                this.container.removeClass("select2-container-active");
                this.search.removeClass("select2-focused");
                this.selectChoice(null);
                if (!this.opened()) this.clearSearch();
                e.stopImmediatePropagation();
                this.opts.element.trigger($.Event("select2-blur"));
            }));

            this.container.on("click", selector, this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;
                if ($(e.target).closest(".select2-search-choice").length > 0) {
                    // clicked inside a select2 search choice, do not open
                    return;
                }
                this.selectChoice(null);
                this.clearPlaceholder();
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.open();
                this.focusSearch();
                e.preventDefault();
            }));

            this.container.on("focus", selector, this.bind(function () {
                if (!this.isInterfaceEnabled()) return;
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
                this.dropdown.addClass("select2-drop-active");
                this.clearPlaceholder();
            }));

            this.initContainerWidth();
            this.opts.element.addClass("select2-offscreen");

            // set the placeholder if necessary
            this.clearSearch();
        },

        // multi
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.search.prop("disabled", !this.isInterfaceEnabled());
            }
        },

        // multi
        initSelection: function () {
            var data;
            if (this.opts.element.val() === "" && this.opts.element.text() === "") {
                this.updateSelection([]);
                this.close();
                // set the placeholder if necessary
                this.clearSearch();
            }
            if (this.select || this.opts.element.val() !== "") {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(data){
                    if (data !== undefined && data !== null) {
                        self.updateSelection(data);
                        self.close();
                        // set the placeholder if necessary
                        self.clearSearch();
                    }
                });
            }
        },

        // multi
        clearSearch: function () {
            var placeholder = this.getPlaceholder(),
                maxWidth = this.getMaxSearchWidth();

            if (placeholder !== undefined  && this.getVal().length === 0 && this.search.hasClass("select2-focused") === false) {
                this.search.val(placeholder).addClass("select2-default");
                // stretch the search box to full width of the container so as much of the placeholder is visible as possible
                // we could call this.resizeSearch(), but we do not because that requires a sizer and we do not want to create one so early because of a firefox bug, see #944
                this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"));
            } else {
                this.search.val("").width(10);
            }
        },

        // multi
        clearPlaceholder: function () {
            if (this.search.hasClass("select2-default")) {
                this.search.val("").removeClass("select2-default");
            }
        },

        // multi
        opening: function () {
            this.clearPlaceholder(); // should be done before super so placeholder is not used to search
            this.resizeSearch();

            this.parent.opening.apply(this, arguments);

            this.focusSearch();

            // initializes search's value with nextSearchTerm (if defined by user)
            // ignore nextSearchTerm if the dropdown is opened by the user pressing a letter
            if(this.search.val() === "") {
                if(this.nextSearchTerm != undefined){
                    this.search.val(this.nextSearchTerm);
                    this.search.select();
                }
            }

            this.updateResults(true);
            if (this.opts.shouldFocusInput(this)) {
                this.search.focus();
            }
            this.opts.element.trigger($.Event("select2-open"));
        },

        // multi
        close: function () {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);
        },

        // multi
        focus: function () {
            this.close();
            this.search.focus();
        },

        // multi
        isFocused: function () {
            return this.search.hasClass("select2-focused");
        },

        // multi
        updateSelection: function (data) {
            var ids = [], filtered = [], self = this;

            // filter out duplicates
            $(data).each(function () {
                if (indexOf(self.id(this), ids) < 0) {
                    ids.push(self.id(this));
                    filtered.push(this);
                }
            });
            data = filtered;

            this.selection.find(".select2-search-choice").remove();
            $(data).each(function () {
                self.addSelectedChoice(this);
            });
            self.postprocessResults();
        },

        // multi
        tokenize: function() {
            var input = this.search.val();
            input = this.opts.tokenizer.call(this, input, this.data(), this.bind(this.onSelect), this.opts);
            if (input != null && input != undefined) {
                this.search.val(input);
                if (input.length > 0) {
                    this.open();
                }
            }

        },

        // multi
        onSelect: function (data, options) {

            if (!this.triggerSelect(data)) { return; }

            this.addSelectedChoice(data);

            this.opts.element.trigger({ type: "selected", val: this.id(data), choice: data });

            // keep track of the search's value before it gets cleared
            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());

            this.clearSearch();
            this.updateResults();

            if (this.select || !this.opts.closeOnSelect) this.postprocessResults(data, false, this.opts.closeOnSelect===true);

            if (this.opts.closeOnSelect) {
                this.close();
                this.search.width(10);
            } else {
                if (this.countSelectableResults()>0) {
                    this.search.width(10);
                    this.resizeSearch();
                    if (this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize()) {
                        // if we reached max selection size repaint the results so choices
                        // are replaced with the max selection reached message
                        this.updateResults(true);
                    } else {
                        // initializes search's value with nextSearchTerm and update search result
                        if(this.nextSearchTerm != undefined){
                            this.search.val(this.nextSearchTerm);
                            this.updateResults();
                            this.search.select();
                        }
                    }
                    this.positionDropdown();
                } else {
                    // if nothing left to select close
                    this.close();
                    this.search.width(10);
                }
            }

            // since its not possible to select an element that has already been
            // added we do not need to check if this is a new element before firing change
            this.triggerChange({ added: data });

            if (!options || !options.noFocus)
                this.focusSearch();
        },

        // multi
        cancel: function () {
            this.close();
            this.focusSearch();
        },

        addSelectedChoice: function (data) {
            var enableChoice = !data.locked,
                enabledItem = $(
                    "<li class='select2-search-choice'>" +
                    "    <div></div>" +
                    "    <a href='#' class='select2-search-choice-close' tabindex='-1'></a>" +
                    "</li>"),
                disabledItem = $(
                    "<li class='select2-search-choice select2-locked'>" +
                    "<div></div>" +
                    "</li>");
            var choice = enableChoice ? enabledItem : disabledItem,
                id = this.id(data),
                val = this.getVal(),
                formatted,
                cssClass;

            formatted=this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
            if (formatted != undefined) {
                choice.find("div").replaceWith("<div>"+formatted+"</div>");
            }
            cssClass=this.opts.formatSelectionCssClass(data, choice.find("div"));
            if (cssClass != undefined) {
                choice.addClass(cssClass);
            }

            if(enableChoice){
              choice.find(".select2-search-choice-close")
                  .on("mousedown", killEvent)
                  .on("click dblclick", this.bind(function (e) {
                  if (!this.isInterfaceEnabled()) return;

                  this.unselect($(e.target));
                  this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
                  killEvent(e);
                  this.close();
                  this.focusSearch();
              })).on("focus", this.bind(function () {
                  if (!this.isInterfaceEnabled()) return;
                  this.container.addClass("select2-container-active");
                  this.dropdown.addClass("select2-drop-active");
              }));
            }

            choice.data("select2-data", data);
            choice.insertBefore(this.searchContainer);

            val.push(id);
            this.setVal(val);
        },

        // multi
        unselect: function (selected) {
            var val = this.getVal(),
                data,
                index;
            selected = selected.closest(".select2-search-choice");

            if (selected.length === 0) {
                throw "Invalid argument: " + selected + ". Must be .select2-search-choice";
            }

            data = selected.data("select2-data");

            if (!data) {
                // prevent a race condition when the 'x' is clicked really fast repeatedly the event can be queued
                // and invoked on an element already removed
                return;
            }

            var evt = $.Event("select2-removing");
            evt.val = this.id(data);
            evt.choice = data;
            this.opts.element.trigger(evt);

            if (evt.isDefaultPrevented()) {
                return false;
            }

            while((index = indexOf(this.id(data), val)) >= 0) {
                val.splice(index, 1);
                this.setVal(val);
                if (this.select) this.postprocessResults();
            }

            selected.remove();

            this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
            this.triggerChange({ removed: data });

            return true;
        },

        // multi
        postprocessResults: function (data, initial, noHighlightUpdate) {
            var val = this.getVal(),
                choices = this.results.find(".select2-result"),
                compound = this.results.find(".select2-result-with-children"),
                self = this;

            choices.each2(function (i, choice) {
                var id = self.id(choice.data("select2-data"));
                if (indexOf(id, val) >= 0) {
                    choice.addClass("select2-selected");
                    // mark all children of the selected parent as selected
                    choice.find(".select2-result-selectable").addClass("select2-selected");
                }
            });

            compound.each2(function(i, choice) {
                // hide an optgroup if it doesn't have any selectable children
                if (!choice.is('.select2-result-selectable')
                    && choice.find(".select2-result-selectable:not(.select2-selected)").length === 0) {
                    choice.addClass("select2-selected");
                }
            });

            if (this.highlight() == -1 && noHighlightUpdate !== false){
                self.highlight(0);
            }

            //If all results are chosen render formatNoMatches
            if(!this.opts.createSearchChoice && !choices.filter('.select2-result:not(.select2-selected)').length > 0){
                if(!data || data && !data.more && this.results.find(".select2-no-results").length === 0) {
                    if (checkFormatter(self.opts.formatNoMatches, "formatNoMatches")) {
                        this.results.append("<li class='select2-no-results'>" + evaluate(self.opts.formatNoMatches, self.search.val()) + "</li>");
                    }
                }
            }

        },

        // multi
        getMaxSearchWidth: function() {
            return this.selection.width() - getSideBorderPadding(this.search);
        },

        // multi
        resizeSearch: function () {
            var minimumWidth, left, maxWidth, containerLeft, searchWidth,
                sideBorderPadding = getSideBorderPadding(this.search);

            minimumWidth = measureTextWidth(this.search) + 10;

            left = this.search.offset().left;

            maxWidth = this.selection.width();
            containerLeft = this.selection.offset().left;

            searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;

            if (searchWidth < minimumWidth) {
                searchWidth = maxWidth - sideBorderPadding;
            }

            if (searchWidth < 40) {
                searchWidth = maxWidth - sideBorderPadding;
            }

            if (searchWidth <= 0) {
              searchWidth = minimumWidth;
            }

            this.search.width(Math.floor(searchWidth));
        },

        // multi
        getVal: function () {
            var val;
            if (this.select) {
                val = this.select.val();
                return val === null ? [] : val;
            } else {
                val = this.opts.element.val();
                return splitVal(val, this.opts.separator);
            }
        },

        // multi
        setVal: function (val) {
            var unique;
            if (this.select) {
                this.select.val(val);
            } else {
                unique = [];
                // filter out duplicates
                $(val).each(function () {
                    if (indexOf(this, unique) < 0) unique.push(this);
                });
                this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));
            }
        },

        // multi
        buildChangeDetails: function (old, current) {
            var current = current.slice(0),
                old = old.slice(0);

            // remove intersection from each array
            for (var i = 0; i < current.length; i++) {
                for (var j = 0; j < old.length; j++) {
                    if (equal(this.opts.id(current[i]), this.opts.id(old[j]))) {
                        current.splice(i, 1);
                        if(i>0){
                        	i--;
                        }
                        old.splice(j, 1);
                        j--;
                    }
                }
            }

            return {added: current, removed: old};
        },


        // multi
        val: function (val, triggerChange) {
            var oldData, self=this;

            if (arguments.length === 0) {
                return this.getVal();
            }

            oldData=this.data();
            if (!oldData.length) oldData=[];

            // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
            if (!val && val !== 0) {
                this.opts.element.val("");
                this.updateSelection([]);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange({added: this.data(), removed: oldData});
                }
                return;
            }

            // val is a list of ids
            this.setVal(val);

            if (this.select) {
                this.opts.initSelection(this.select, this.bind(this.updateSelection));
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(oldData, this.data()));
                }
            } else {
                if (this.opts.initSelection === undefined) {
                    throw new Error("val() cannot be called if initSelection() is not defined");
                }

                this.opts.initSelection(this.opts.element, function(data){
                    var ids=$.map(data, self.id);
                    self.setVal(ids);
                    self.updateSelection(data);
                    self.clearSearch();
                    if (triggerChange) {
                        self.triggerChange(self.buildChangeDetails(oldData, self.data()));
                    }
                });
            }
            this.clearSearch();
        },

        // multi
        onSortStart: function() {
            if (this.select) {
                throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
            }

            // collapse search field into 0 width so its container can be collapsed as well
            this.search.width(0);
            // hide the container
            this.searchContainer.hide();
        },

        // multi
        onSortEnd:function() {

            var val=[], self=this;

            // show search and move it to the end of the list
            this.searchContainer.show();
            // make sure the search container is the last item in the list
            this.searchContainer.appendTo(this.searchContainer.parent());
            // since we collapsed the width in dragStarted, we resize it here
            this.resizeSearch();

            // update selection
            this.selection.find(".select2-search-choice").each(function() {
                val.push(self.opts.id($(this).data("select2-data")));
            });
            this.setVal(val);
            this.triggerChange();
        },

        // multi
        data: function(values, triggerChange) {
            var self=this, ids, old;
            if (arguments.length === 0) {
                 return this.selection
                     .children(".select2-search-choice")
                     .map(function() { return $(this).data("select2-data"); })
                     .get();
            } else {
                old = this.data();
                if (!values) { values = []; }
                ids = $.map(values, function(e) { return self.opts.id(e); });
                this.setVal(ids);
                this.updateSelection(values);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(old, this.data()));
                }
            }
        }
    });

    $.fn.select2 = function () {

        var args = Array.prototype.slice.call(arguments, 0),
            opts,
            select2,
            method, value, multiple,
            allowedMethods = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
            valueMethods = ["opened", "isFocused", "container", "dropdown"],
            propertyMethods = ["val", "data"],
            methodsMap = { search: "externalSearch" };

        this.each(function () {
            if (args.length === 0 || typeof(args[0]) === "object") {
                opts = args.length === 0 ? {} : $.extend({}, args[0]);
                opts.element = $(this);

                if (opts.element.get(0).tagName.toLowerCase() === "select") {
                    multiple = opts.element.prop("multiple");
                } else {
                    multiple = opts.multiple || false;
                    if ("tags" in opts) {opts.multiple = multiple = true;}
                }

                select2 = multiple ? new window.Select2["class"].multi() : new window.Select2["class"].single();
                select2.init(opts);
            } else if (typeof(args[0]) === "string") {

                if (indexOf(args[0], allowedMethods) < 0) {
                    throw "Unknown method: " + args[0];
                }

                value = undefined;
                select2 = $(this).data("select2");
                if (select2 === undefined) return;

                method=args[0];

                if (method === "container") {
                    value = select2.container;
                } else if (method === "dropdown") {
                    value = select2.dropdown;
                } else {
                    if (methodsMap[method]) method = methodsMap[method];

                    value = select2[method].apply(select2, args.slice(1));
                }
                if (indexOf(args[0], valueMethods) >= 0
                    || (indexOf(args[0], propertyMethods) >= 0 && args.length == 1)) {
                    return false; // abort the iteration, ready to return first matched value
                }
            } else {
                throw "Invalid arguments to select2 plugin: " + args;
            }
        });
        return (value === undefined) ? this : value;
    };

    // plugin defaults, accessible to users
    $.fn.select2.defaults = {
        width: "copy",
        loadMorePadding: 0,
        closeOnSelect: true,
        openOnEnter: true,
        containerCss: {},
        dropdownCss: {},
        containerCssClass: "",
        dropdownCssClass: "",
        formatResult: function(result, container, query, escapeMarkup) {
            var markup=[];
            markMatch(result.text, query.term, markup, escapeMarkup);
            return markup.join("");
        },
        formatSelection: function (data, container, escapeMarkup) {
            return data ? escapeMarkup(data.text) : undefined;
        },
        sortResults: function (results, container, query) {
            return results;
        },
        formatResultCssClass: function(data) {return data.css;},
        formatSelectionCssClass: function(data, container) {return undefined;},
        formatMatches: function (matches) { return matches + " results are available, use up and down arrow keys to navigate."; },
        formatNoMatches: function () { return "No matches found"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Please enter " + n + " or more character" + (n == 1? "" : "s"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Please delete " + n + " character" + (n == 1? "" : "s"); },
        formatSelectionTooBig: function (limit) { return "You can only select " + limit + " item" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "Loading more results…"; },
        formatSearching: function () { return "Searching…"; },
        minimumResultsForSearch: 0,
        minimumInputLength: 0,
        maximumInputLength: null,
        maximumSelectionSize: 0,
        id: function (e) { return e == undefined ? null : e.id; },
        matcher: function(term, text) {
            return stripDiacritics(''+text).toUpperCase().indexOf(stripDiacritics(''+term).toUpperCase()) >= 0;
        },
        separator: ",",
        tokenSeparators: [],
        tokenizer: defaultTokenizer,
        escapeMarkup: defaultEscapeMarkup,
        blurOnChange: false,
        selectOnBlur: false,
        adaptContainerCssClass: function(c) { return c; },
        adaptDropdownCssClass: function(c) { return null; },
        nextSearchTerm: function(selectedObject, currentSearchTerm) { return undefined; },
        searchInputPlaceholder: '',
        createSearchChoicePosition: 'top',
        shouldFocusInput: function (instance) {
            // Attempt to detect touch devices
            var supportsTouchEvents = (('ontouchstart' in window) ||
                                       (navigator.msMaxTouchPoints > 0));

            // Only devices which support touch events should be special cased
            if (!supportsTouchEvents) {
                return true;
            }

            // Never focus the input if search is disabled
            if (instance.opts.minimumResultsForSearch < 0) {
                return false;
            }

            return true;
        }
    };

    $.fn.select2.ajaxDefaults = {
        transport: $.ajax,
        params: {
            type: "GET",
            cache: false,
            dataType: "json"
        }
    };

    // exports
    window.Select2 = {
        query: {
            ajax: ajax,
            local: local,
            tags: tags
        }, util: {
            debounce: debounce,
            markMatch: markMatch,
            escapeMarkup: defaultEscapeMarkup,
            stripDiacritics: stripDiacritics
        }, "class": {
            "abstract": AbstractSelect2,
            "single": SingleSelect2,
            "multi": MultiSelect2
        }
    };

}(jQuery));

$(document).ready(function(){

    /**
     * Replaces the foundation sticky because of a time concurrency issue with scrollmagic.
     */
     $('#site-nav-container').hcSticky({
        //topSpacing: 0,
         innerTop: 0,
         wrapperClassName: 'hide-for-print hide-for-small'
     });

    /**
     * Home slider.
     */

    $('#home-slider').unslider({
        speed: 800,               //  The speed to animate each slide (in milliseconds)
        delay: 6000,              //  The delay between slide animations (in milliseconds)
        complete: function() {},  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: true               //  Support responsive design. May break non-responsive designs
    });

    /**
     * Offer nav woman.
     */
     $('#offer-nav').hcSticky({
        innerTop: -100,
        wrapperClassName: 'hide-for-print hide-for-small hide-for-medium'
     });

    $("#cookie-notice").hide();
    if (document.cookie.indexOf("cookie-accept") <= 0) {
        $("#cookie-notice").show();
    }
    $('#cn-accept-cookie').click(function (e) {
        e.preventDefault();
        $('#cookie-notice').remove();
        var date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
        document.cookie = "cookie-accept=true" + expires + "; path=/";
    });

    /**
     * Custom form validation patterns.
     *
     * Used with the apply form.
     */
    $(document).foundation({
        abide : {
            patterns: {
                name: /^[^0-9"'`~,.;:\\[\]|{}()<>=*/+]+$/,
                phone: /^[0-9 ()+]+$/
            },
            validators: {
                requiredBySource: function(el, required, parent) {
                    var $el = $(el);
                    if ($el.attr('data-source') == $('[name=\'job_apply[source]\']:checked').val()) {
                        return $el.val() != '';
                    }
                    return true;
                }
            }
        }
    });

    /** Iphone bug :
     * http://foundation.zurb.com/forum/posts/1651-cant-get-off-canvas-to-toggle-on-mobile
     */
    $('a.left-off-canvas-toggle').on('click',function(){
    });

    /**
     * International alert.
     */
    if (window.localStorage.getItem('international-alert') != 'dismiss') {
        $('#international-alert').css('display', 'block');
    }
    $('#international-alert-close').click(function(){
        window.localStorage.setItem('international-alert', 'dismiss');
        $('#international-alert').css('display', 'none');
    });

    /**
     * Wheter an element exists.
     *
     * Used with scrollmagic effects.
     */
    $.fn.exists = function(callback) {
        var args = [].slice.call(arguments, 1);
        if (this.length) {
            callback.call(this, args);
        }
        return this;
    };

    /**
     * Apply pages.
     */

    /**
     * In firefox, if you click on a source that is not the default one then reload the page,
     * the input visually remains checked but the form value is the html value.
     */
    if ($('#job_apply_source_0').is(':checked')) {
        $('#job_apply_offer').closest('.row').show('slow');
        $('#job_apply_job').closest('.row').hide('slow');
    }
    else if ($('#job_apply_source_1').is(':checked')) {
        $('#job_apply_offer').closest('.row').hide('slow');
        $('#job_apply_job').closest('.row').show('slow');
    }

    /**
     * Hide the offer or job fields depending on application type.
     */
    $('#job_apply_source_0').on('click', function(){
        $('#job_apply_offer').closest('.row').show('slow');
        $('#job_apply_job').closest('.row').hide('slow');
    });
    $('#job_apply_source_1').on('click', function(){
        $('#job_apply_offer').closest('.row').hide('slow');
        $('#job_apply_job').closest('.row').show('slow');
    });

    /**
     * Autosend form.
     */
    $('select.autosubmit').change(function() {
        $(this).closest('form').submit();
    });
});

$(document).ready(function($){

var controller;
if (false && Modernizr.touch) {
    // Touch screens.
    // Try to use IScroll.
} else {
    // init the controller
    controller = new ScrollMagic({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
}

/* Site nav shortening. */
$('#site-nav').exists(function(){

    var offset = 0;
    if ($('#international-alert').is(':visible') ) {
        offset = $('#international-alert').outerHeight();
    }

    var timeline = new TimelineMax().add([
        TweenMax.to('#site-nav .name img', 0.3, {height: '32px', ease: Linear.easeNone}),
        TweenMax.to('#site-nav', 0.3, {lineHeight: '45px', ease: Linear.easeNone}),
        TweenMax.to('#site-nav li:not(.has-form) a:not(.button)', 0.3, {lineHeight: '45px', ease: Linear.easeNone}),
        TweenMax.to('#site-nav .has-form', 0.3, {height: '45px', ease: Linear.easeNone}),
        TweenMax.to('#site-nav .has-form', 0.3, {lineHeight: '45px', ease: Linear.easeNone}),
        TweenMax.to('#site-nav', 0.3, {height: '45px', ease: Linear.easeNone})
    ]);
    new ScrollScene({
        duration: 200,
        offset: offset,
        triggerElement: 'body'
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onLeave')
        //.addIndicators({zindex: 100})
    ;

});

//$('.section-fx').each(function(){
$('.notch-wrapper').each(function(){

    var timeline = new TimelineMax().add([
//        TweenMax.to(this, 0.6, {paddingTop: '0', ease: Linear.easeNone})
        TweenMax.to(this, 0.6, {marginTop: '-200', ease: Linear.easeNone})
    ]);
    new ScrollScene({
        duration: 0,
        offset: -100,
        reverse: false,
        triggerElement: this
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onCenter')
        //.addIndicators({zindex: 100})
    ;

});

$('.testimonial:nth-of-type(2n+1)').each(function(){

    $(this).css('position', 'relative');
    $(this).css('right', '100%');

    var timeline = new TimelineMax().add([
        TweenMax.to(this, 0.5, {right: '0', ease: Circ.easeOut}),
        //TweenMax.from(this, 0.5, {opacity: '0', ease: Circ.easeOut})
    ]);
    new ScrollScene({
        duration: 0,
        offset: 300,
        reverse: false,
        triggerElement: this
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onEnter')
        //.addIndicators({zindex: 100})
    ;

});

$('.testimonial:nth-of-type(2n+0)').each(function(){

    $(this).css('position', 'relative');
    $(this).css('left', '100%');

    var timeline = new TimelineMax().add([
        TweenMax.to(this, 1, {left: '0', ease: Circ.easeOut}),
        //TweenMax.from(this, 1, {opacity: '0', ease: Circ.easeOut})
    ]);
    new ScrollScene({
        duration: 0,
        offset: 220,
        reverse: false,
        triggerElement: this
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onEnter')
        //.addIndicators({zindex: 100})
    ;

});

$('#customers').exists(function(){

    var tweens = [];
    $('#customers-cards li').css('position','relative').each(function() {
        tweens.push(TweenMax.from($(this), 0.6, {
            delay: Math.random() * .2,
            left: (Math.random() * 2 - 1) * 200,
            top: (Math.random() * 2 - 1) * 200,
            opacity: 0,
            ease: Linear.easeNone
        }));
    });
    var timeline = new TimelineMax().add(tweens);
    new ScrollScene({
        duration: 0,
        offset: -180,
        reverse: false,
        triggerElement: '#customers-cards'
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onCenter')
        //.addIndicators({zindex: 100})
    ;

});

$('#home-overview .fx-item').each(function(){
    var $this = $(this);

    /**
     * The #home-overview must not shrink when .fx-item divs
     * are set to position relavite.
     */
    var parentMinHeight = $this.parent().css('minHeight');
    var height = $this.css('height');
    if (parentMinHeight < height) {
        $this.parent().css('minHeight', height);
    }
    $this.css('position', 'relative');

    var timeline = new TimelineMax().add([
        TweenMax.from($this, 1, {bottom: -200, ease: Circ.easeOut}),
        TweenMax.from($this, 1, {opacity: 0, ease: Circ.easeOut})
    ]);

    new ScrollScene({
        duration: 0,
        offset: -300,
        reverse: false,
        triggerElement: $this
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onCenter')
        //.addIndicators({zindex: 100})
        /**
         * Sometimes the anti-shrink code above doesn't do the job,
         * so after the effect ends, reset the position to static.
         */
        .on('start', function (event) {
            function end() {
                $this.css('position', 'static');
            };
            setTimeout(function(){end();}, 1000);
        });
    ;

});

$('#home-backstage .fx-item').each(function(){
    var $this = $(this);

    $this.css('position', 'relative');

    var timeline = new TimelineMax().add([
        TweenMax.from($this, 1, {opacity: 0, ease: Linear.easeNone})
    ]);

    new ScrollScene({
        duration: 0,
        offset: -150,
        reverse: false,
        triggerElement: $this
    })
        .setTween(timeline)
        .addTo(controller)
        .triggerHook('onCenter')
        //.addIndicators({zindex: 100})
    ;

});

$('#backstage-diaporama').exists(function(){

    var path = '/bundles/geolidjob/img/backstage/';

    var images = [];
    for (i=1; i<=9; i++){
        images[i-1] = 'galerie-'+i+'.jpg';
    }

    var diaporama = $('#backstage-diaporama');
    var nitems = 8; // Number of items to display.
    var displayed = []; // Index of images displayed for each item.
    var stack = []; // Index of images that are not displayed.

    diaporama.empty();

    for (var i = 0; i < images.length && i < nitems; i++) {
        var image = $('<img/>');
        image.attr('src', path + images[i]);

        var div = $('<div/>');
        div.css('position', 'relative');
        div.append(image);

        var li = $('<li/>');
        li.append(div);

        if (i >= 4) {
            li.addClass('hide-for-small');
        }

        diaporama.append(li);
        displayed[i] = i;
    }

    for (var i = nitems; i < images.length; i++) {
        stack.push(i);
    }

    function change () {
        var itemNumber = Math.floor(Math.random() * nitems);
        var currentItem = diaporama.find('li:nth-child(' + (itemNumber + 1) + ')');

        /* There are less photos on small devices. */
        if (!currentItem.is(':visible')) {
            change();
            return;
        }

        var currentDiv = currentItem.find('div');

        var image = $('<img/>');
        var imageIndex = stack.shift();
        image.attr('src', path + images[imageIndex]);

        var newDiv = $('<div/>');
        newDiv.css('position', 'relative');
        newDiv.css('zIndex', '9');
        newDiv.append(image);

        stack.push(displayed[itemNumber]);
        displayed[itemNumber] = imageIndex;

        var timeline = new TimelineMax();
        var randx = Math.random() < 0.5 ? -1 : 1;
        var randy = Math.random() < 0.5 ? -1 : 1;

        timeline
            .add(
                TweenMax.to(currentDiv, 2, {
                    ease: Circ.easeIn,
                    onComplete: function() {
                        currentDiv.remove();
                        currentItem.append(newDiv);
                    },
                    opacity: 0
                })
            )
            .add(
                TweenMax.from(newDiv, 0.6, {
                    ease: Circ.easeOut,
                    left: randx * 300,
                    onComplete: function() {
                        newDiv.css('zIndex', '1');
                    },
                    opacity: 0,
                    top: randy * 300
                })
            );
    }

    setInterval(change, 4000);

});

}); //$(document).ready
