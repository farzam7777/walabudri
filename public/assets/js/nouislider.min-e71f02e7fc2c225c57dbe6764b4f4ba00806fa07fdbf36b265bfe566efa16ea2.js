!function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():window.noUiSlider=t()}(function(){"use strict";function t(t,e){var n=document.createElement("div");return l(n,e),t.appendChild(n),n}function e(t){return t.filter(function(t){return!this[t]&&(this[t]=!0)},{})}function n(t,e){return Math.round(t/e)*e}function r(t,e){var n=t.getBoundingClientRect(),r=t.ownerDocument,i=r.documentElement,o=f();return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(o.x=0),e?n.top+o.y-i.clientTop:n.left+o.x-i.clientLeft}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function o(t,e,n){n>0&&(l(t,e),setTimeout(function(){c(t,e)},n))}function s(t){return Math.max(Math.min(t,100),0)}function a(t){return Array.isArray(t)?t:[t]}function u(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function l(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function c(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function p(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function f(){var t=void 0!==window.pageXOffset,e="CSS1Compat"===(document.compatMode||"");return{x:t?window.pageXOffset:e?document.documentElement.scrollLeft:document.body.scrollLeft,y:t?window.pageYOffset:e?document.documentElement.scrollTop:document.body.scrollTop}}function d(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function h(t,e){return 100/(e-t)}function m(t,e){return 100*e/(t[1]-t[0])}function g(t,e){return m(t,t[0]<0?e+Math.abs(t[0]):e-t[0])}function v(t,e){return e*(t[1]-t[0])/100+t[0]}function b(t,e){for(var n=1;t>=e[n];)n+=1;return n}function S(t,e,n){if(n>=t.slice(-1)[0])return 100;var r,i,o,s,a=b(n,t);return r=t[a-1],i=t[a],o=e[a-1],s=e[a],o+g([r,i],n)/h(o,s)}function w(t,e,n){if(n>=100)return t.slice(-1)[0];var r,i,o,s,a=b(n,e);return r=t[a-1],i=t[a],o=e[a-1],s=e[a],v([r,i],(n-o)*h(o,s))}function x(t,e,r,i){if(100===i)return i;var o,s,a=b(i,t);return r?(o=t[a-1],s=t[a],i-o>(s-o)/2?s:o):e[a-1]?t[a-1]+n(i-t[a-1],e[a-1]):i}function y(t,e,n){var r;if("number"==typeof e&&(e=[e]),"[object Array]"!==Object.prototype.toString.call(e))throw new Error("noUiSlider ("+_+"): 'range' contains invalid value.");if(r="min"===t?0:"max"===t?100:parseFloat(t),!i(r)||!i(e[0]))throw new Error("noUiSlider ("+_+"): 'range' value isn't numeric.");n.xPct.push(r),n.xVal.push(e[0]),r?n.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(n.xSteps[0]=e[1]),n.xHighestCompleteStep.push(0)}function E(t,e,n){if(!e)return!0;n.xSteps[t]=m([n.xVal[t],n.xVal[t+1]],e)/h(n.xPct[t],n.xPct[t+1]);var r=(n.xVal[t+1]-n.xVal[t])/n.xNumSteps[t],i=Math.ceil(Number(r.toFixed(3))-1),o=n.xVal[t]+n.xNumSteps[t]*i;n.xHighestCompleteStep[t]=o}function C(t,e,n,r){this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e,this.direction=n;var i,o=[];for(i in t)t.hasOwnProperty(i)&&o.push([t[i],i]);for(o.length&&"object"==typeof o[0][0]?o.sort(function(t,e){return t[0][0]-e[0][0]}):o.sort(function(t,e){return t[0]-e[0]}),i=0;i<o.length;i++)y(o[i][1],o[i][0],this);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)E(i,this.xNumSteps[i],this)}function N(t,e){if(!i(e))throw new Error("noUiSlider ("+_+"): 'step' is not numeric.");t.singleStep=e}function U(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider ("+_+"): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider ("+_+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+_+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new C(e,t.snap,t.dir,t.singleStep)}function P(t,e){if(e=a(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+_+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function M(t,e){if(t.snap=e,"boolean"!=typeof e)throw new Error("noUiSlider ("+_+"): 'snap' option must be a boolean.")}function k(t,e){if(t.animate=e,"boolean"!=typeof e)throw new Error("noUiSlider ("+_+"): 'animate' option must be a boolean.")}function O(t,e){if(t.animationDuration=e,"number"!=typeof e)throw new Error("noUiSlider ("+_+"): 'animationDuration' option must be a number.")}function V(t,e){var n,r=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(n=1;n<t.handles;n++)r.push(e);r.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+_+"): 'connect' option doesn't match handle count.");r=e}t.connect=r}function L(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+_+"): 'orientation' option is invalid.")}}function A(t,e){if(!i(e))throw new Error("noUiSlider ("+_+"): 'margin' option must be numeric.");if(0!==e&&(t.margin=t.spectrum.getMargin(e),!t.margin))throw new Error("noUiSlider ("+_+"): 'margin' option is only supported on linear sliders.")}function z(t,e){if(!i(e))throw new Error("noUiSlider ("+_+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+_+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function H(t,e){if(!i(e))throw new Error("noUiSlider ("+_+"): 'padding' option must be numeric.");if(0!==e){if(t.padding=t.spectrum.getMargin(e),!t.padding)throw new Error("noUiSlider ("+_+"): 'padding' option is only supported on linear sliders.");if(t.padding<0)throw new Error("noUiSlider ("+_+"): 'padding' option must be a positive number.");if(t.padding>=50)throw new Error("noUiSlider ("+_+"): 'padding' option must be less than half the range.")}}function F(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+_+"): 'direction' option was not recognized.")}}function j(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+_+"): 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,r=e.indexOf("drag")>=0,i=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0;if(i){if(2!==t.handles)throw new Error("noUiSlider ("+_+"): 'fixed' behaviour must be used with 2 handles");A(t,t.start[1]-t.start[0])}t.events={tap:n||o,drag:r,fixed:i,snap:o,hover:s}}function q(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(!0)}else{if(t.tooltips=a(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+_+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider ("+_+"): 'tooltips' must be passed a formatter or 'false'.")})}}function D(t,e){if(t.format=e,"function"==typeof e.to&&"function"==typeof e.from)return!0;throw new Error("noUiSlider ("+_+"): 'format' requires 'to' and 'from' methods.")}function T(t,e){if(void 0!==e&&"string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+_+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function R(t,e){if(void 0!==e&&"object"!=typeof e)throw new Error("noUiSlider ("+_+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix){t.cssClasses={};for(var n in e)e.hasOwnProperty(n)&&(t.cssClasses[n]=t.cssPrefix+e[n])}else t.cssClasses=e}function B(t,e){if(!0!==e&&!1!==e)throw new Error("noUiSlider ("+_+"): 'useRequestAnimationFrame' option should be true (default) or false.");t.useRequestAnimationFrame=e}function X(t){var e={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,format:W},n={step:{r:!1,t:N},start:{r:!0,t:P},connect:{r:!0,t:V},direction:{r:!0,t:F},snap:{r:!1,t:M},animate:{r:!1,t:k},animationDuration:{r:!1,t:O},range:{r:!0,t:U},orientation:{r:!1,t:L},margin:{r:!1,t:A},limit:{r:!1,t:z},padding:{r:!1,t:H},behaviour:{r:!0,t:j},format:{r:!1,t:D},tooltips:{r:!1,t:q},cssPrefix:{r:!1,t:T},cssClasses:{r:!1,t:R},useRequestAnimationFrame:{r:!1,t:B}},r={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},useRequestAnimationFrame:!0};Object.keys(n).forEach(function(i){if(void 0===t[i]&&void 0===r[i]){if(n[i].r)throw new Error("noUiSlider ("+_+"): '"+i+"' is required.");return!0}n[i].t(e,void 0===t[i]?r[i]:t[i])}),e.pips=t.pips;var i=[["left","top"],["right","bottom"]];return e.style=i[e.dir][e.ort],e.styleOposite=i[e.dir?0:1][e.ort],e}function Y(n,i,u){function h(e,n){var r=t(e,i.cssClasses.origin),o=t(r,i.cssClasses.handle);return o.setAttribute("data-handle",n),0===n?l(o,i.cssClasses.handleLower):n===i.handles-1&&l(o,i.cssClasses.handleUpper),r}function m(e,n){return!!n&&t(e,i.cssClasses.connect)}function g(t,e){nt=[],rt=[],rt.push(m(e,t[0]));for(var n=0;n<i.handles;n++)nt.push(h(e,n)),ut[n]=n,rt.push(m(e,t[n+1]))}function v(e){l(e,i.cssClasses.target),0===i.dir?l(e,i.cssClasses.ltr):l(e,i.cssClasses.rtl),0===i.ort?l(e,i.cssClasses.horizontal):l(e,i.cssClasses.vertical),et=t(e,i.cssClasses.base)}function b(e,n){return!!i.tooltips[n]&&t(e.firstChild,i.cssClasses.tooltip)}function S(){var t=nt.map(b);Q("update",function(e,n,r){if(t[n]){var o=e[n];!0!==i.tooltips[n]&&(o=i.tooltips[n].to(r[n])),t[n].innerHTML=o}})}function w(t,e,n){if("range"===t||"steps"===t)return ct.xVal;if("count"===t){if(!e)throw new Error("noUiSlider ("+_+"): 'values' required for mode 'count'.");var r,i=100/(e-1),o=0;for(e=[];(r=o++*i)<=100;)e.push(r);t="positions"}return"positions"===t?e.map(function(t){return ct.fromStepping(n?ct.getStep(t):t)}):"values"===t?n?e.map(function(t){return ct.fromStepping(ct.getStep(ct.toStepping(t)))}):e:void 0}function x(t,n,r){function i(t,e){return(t+e).toFixed(7)/1}var o={},s=ct.xVal[0],a=ct.xVal[ct.xVal.length-1],u=!1,l=!1,c=0;return r=e(r.slice().sort(function(t,e){return t-e})),r[0]!==s&&(r.unshift(s),u=!0),r[r.length-1]!==a&&(r.push(a),l=!0),r.forEach(function(e,s){var a,p,f,d,h,m,g,v,b,S,w=e,x=r[s+1];if("steps"===n&&(a=ct.xNumSteps[s]),a||(a=x-w),!1!==w&&void 0!==x)for(a=Math.max(a,1e-7),p=w;p<=x;p=i(p,a)){for(d=ct.toStepping(p),h=d-c,v=h/t,b=Math.round(v),S=h/b,f=1;f<=b;f+=1)m=c+f*S,o[m.toFixed(5)]=["x",0];g=r.indexOf(p)>-1?1:"steps"===n?2:0,!s&&u&&(g=0),p===x&&l||(o[d.toFixed(5)]=[p,g]),c=d}}),o}function y(t,e,n){function r(t,e){var n=e===i.cssClasses.value,r=n?f:d,o=n?c:p;return e+" "+r[i.ort]+" "+o[t]}function o(t,e,n){return'class="'+r(n[1],e)+'" style="'+i.style+": "+t+'%"'}function s(t,r){r[1]=r[1]&&e?e(r[0],r[1]):r[1],u+="<div "+o(t,i.cssClasses.marker,r)+"></div>",r[1]&&(u+="<div "+o(t,i.cssClasses.value,r)+">"+n.to(r[0])+"</div>")}var a=document.createElement("div"),u="",c=[i.cssClasses.valueNormal,i.cssClasses.valueLarge,i.cssClasses.valueSub],p=[i.cssClasses.markerNormal,i.cssClasses.markerLarge,i.cssClasses.markerSub],f=[i.cssClasses.valueHorizontal,i.cssClasses.valueVertical],d=[i.cssClasses.markerHorizontal,i.cssClasses.markerVertical];return l(a,i.cssClasses.pips),l(a,0===i.ort?i.cssClasses.pipsHorizontal:i.cssClasses.pipsVertical),Object.keys(t).forEach(function(e){s(e,t[e])}),a.innerHTML=u,a}function E(t){var e=t.mode,n=t.density||1,r=t.filter||!1,i=t.values||!1,o=t.stepped||!1,s=w(e,i,o),a=x(n,e,s),u=t.format||{to:Math.round};return st.appendChild(y(a,r,u))}function C(){var t=et.getBoundingClientRect(),e="offset"+["Width","Height"][i.ort];return 0===i.ort?t.width||et[e]:t.height||et[e]}function N(t,e,n,r){var o=function(e){return!st.hasAttribute("disabled")&&!p(st,i.cssClasses.tap)&&!!(e=U(e,r.pageOffset))&&!(t===ot.start&&void 0!==e.buttons&&e.buttons>1)&&(!r.hover||!e.buttons)&&(e.calcPoint=e.points[i.ort],void n(e,r))},s=[];return t.split(" ").forEach(function(t){e.addEventListener(t,o,!1),s.push([t,o])}),s}function U(t,e){t.preventDefault();var n,r,i=0===t.type.indexOf("touch"),o=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");if(0===t.type.indexOf("MSPointer")&&(s=!0),i){if(t.touches.length>1)return!1;n=t.changedTouches[0].pageX,r=t.changedTouches[0].pageY}return e=e||f(),(o||s)&&(n=t.clientX+e.x,r=t.clientY+e.y),t.pageOffset=e,t.points=[n,r],t.cursor=o||s,t}function P(t){var e=t-r(et,i.ort),n=100*e/C();return i.dir?100-n:n}function M(t){var e=100,n=!1;return nt.forEach(function(r,i){if(!r.hasAttribute("disabled")){var o=Math.abs(at[i]-t);o<e&&(n=i,e=o)}}),n}function k(t,e,n,r){var i=n.slice(),o=[!t,t],s=[t,!t];r=r.slice(),t&&r.reverse(),r.length>1?r.forEach(function(t,n){var r=q(i,t,i[t]+e,o[n],s[n]);!1===r?e=0:(e=r-i[t],i[t]=r)}):o=s=[!0];var a=!1;r.forEach(function(t,r){a=B(t,n[t]+e,o[r],s[r])||a}),a&&r.forEach(function(t){O("update",t),O("slide",t)})}function O(t,e,n){Object.keys(ft).forEach(function(r){var o=r.split(".")[0];t===o&&ft[r].forEach(function(t){t.call(it,pt.map(i.format.to),e,pt.slice(),n||!1,at.slice())})})}function V(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&A(t,e)}function L(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return A(t,e);var n=(i.dir?-1:1)*(t.calcPoint-e.startCalcPoint);k(n>0,100*n/e.baseSize,e.locations,e.handleNumbers)}function A(t,e){lt&&(c(lt,i.cssClasses.active),lt=!1),t.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener)),document.documentElement.noUiListeners.forEach(function(t){document.documentElement.removeEventListener(t[0],t[1])}),c(st,i.cssClasses.drag),R(),e.handleNumbers.forEach(function(t){O("set",t),O("change",t),O("end",t)})}function z(t,e){if(1===e.handleNumbers.length){var n=nt[e.handleNumbers[0]];if(n.hasAttribute("disabled"))return!1;lt=n.children[0],l(lt,i.cssClasses.active)}t.preventDefault(),t.stopPropagation();var r=N(ot.move,document.documentElement,L,{startCalcPoint:t.calcPoint,baseSize:C(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:at.slice()}),o=N(ot.end,document.documentElement,A,{handleNumbers:e.handleNumbers}),s=N("mouseout",document.documentElement,V,{handleNumbers:e.handleNumbers});if(document.documentElement.noUiListeners=r.concat(o,s),t.cursor){document.body.style.cursor=getComputedStyle(t.target).cursor,nt.length>1&&l(st,i.cssClasses.drag);var a=function(){return!1};document.body.noUiListener=a,document.body.addEventListener("selectstart",a,!1)}e.handleNumbers.forEach(function(t){O("start",t)})}function H(t){t.stopPropagation();var e=P(t.calcPoint),n=M(e);return!1!==n&&(i.events.snap||o(st,i.cssClasses.tap,i.animationDuration),B(n,e,!0,!0),R(),O("slide",n,!0),O("set",n,!0),O("change",n,!0),O("update",n,!0),void(i.events.snap&&z(t,{handleNumbers:[n]})))}function F(t){var e=P(t.calcPoint),n=ct.getStep(e),r=ct.fromStepping(n);Object.keys(ft).forEach(function(t){"hover"===t.split(".")[0]&&ft[t].forEach(function(t){t.call(it,r)})})}function j(t){t.fixed||nt.forEach(function(t,e){N(ot.start,t.children[0],z,{handleNumbers:[e]})}),t.tap&&N(ot.start,et,H,{}),t.hover&&N(ot.move,et,F,{hover:!0}),t.drag&&rt.forEach(function(e,n){if(!1!==e&&0!==n&&n!==rt.length-1){var r=nt[n-1],o=nt[n],s=[e];l(e,i.cssClasses.draggable),t.fixed&&(s.push(r.children[0]),s.push(o.children[0])),s.forEach(function(t){N(ot.start,t,z,{handles:[r,o],handleNumbers:[n-1,n]})})}})}function q(t,e,n,r,o){return nt.length>1&&(r&&e>0&&(n=Math.max(n,t[e-1]+i.margin)),o&&e<nt.length-1&&(n=Math.min(n,t[e+1]-i.margin))),nt.length>1&&i.limit&&(r&&e>0&&(n=Math.min(n,t[e-1]+i.limit)),o&&e<nt.length-1&&(n=Math.max(n,t[e+1]-i.limit))),i.padding&&(0===e&&(n=Math.max(n,i.padding)),e===nt.length-1&&(n=Math.min(n,100-i.padding))),n=ct.getStep(n),(n=s(n))!==t[e]&&n}function D(t){return t+"%"}function T(t,e){at[t]=e,pt[t]=ct.fromStepping(e);var n=function(){nt[t].style[i.style]=D(e),Y(t),Y(t+1)};window.requestAnimationFrame&&i.useRequestAnimationFrame?window.requestAnimationFrame(n):n()}function R(){ut.forEach(function(t){var e=at[t]>50?-1:1,n=3+(nt.length+e*t);nt[t].childNodes[0].style.zIndex=n})}function B(t,e,n,r){return!1!==(e=q(at,t,e,n,r))&&(T(t,e),!0)}function Y(t){if(rt[t]){var e=0,n=100;0!==t&&(e=at[t-1]),t!==rt.length-1&&(n=at[t]),rt[t].style[i.style]=D(e),rt[t].style[i.styleOposite]=D(100-n)}}function I(t,e){null!==t&&!1!==t&&("number"==typeof t&&(t=String(t)),!1===(t=i.format.from(t))||isNaN(t)||B(e,ct.toStepping(t),!1,!1))}function W(t,e){var n=a(t),r=void 0===at[0];e=void 0===e||!!e,n.forEach(I),i.animate&&!r&&o(st,i.cssClasses.tap,i.animationDuration),ut.forEach(function(t){B(t,at[t],!0,!1)}),R(),ut.forEach(function(t){O("update",t),null!==n[t]&&e&&O("set",t)})}function $(t){W(i.start,t)}function G(){var t=pt.map(i.format.to);return 1===t.length?t[0]:t}function J(){for(var t in i.cssClasses)i.cssClasses.hasOwnProperty(t)&&c(st,i.cssClasses[t]);for(;st.firstChild;)st.removeChild(st.firstChild);delete st.noUiSlider}function K(){return at.map(function(t,e){var n=ct.getNearbySteps(t),r=pt[e],i=n.thisStep.step,o=null;!1!==i&&r+i>n.stepAfter.startValue&&(i=n.stepAfter.startValue-r),o=r>n.thisStep.startValue?n.thisStep.step:!1!==n.stepBefore.step&&r-n.stepBefore.highestStep,100===t?i=null:0===t&&(o=null);var s=ct.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(s))),null!==o&&!1!==o&&(o=Number(o.toFixed(s))),[o,i]})}function Q(t,e){ft[t]=ft[t]||[],ft[t].push(e),"update"===t.split(".")[0]&&nt.forEach(function(t,e){O("update",e)})}function Z(t){var e=t&&t.split(".")[0],n=e&&t.substring(e.length);Object.keys(ft).forEach(function(t){var r=t.split(".")[0],i=t.substring(r.length);e&&e!==r||n&&n!==i||delete ft[t]})}function tt(t,e){var n=G(),r=["margin","limit","padding","range","animate","snap","step","format"];r.forEach(function(e){void 0!==t[e]&&(u[e]=t[e])});var o=X(u);r.forEach(function(e){void 0!==t[e]&&(i[e]=o[e])}),o.spectrum.direction=ct.direction,ct=o.spectrum,i.margin=o.margin,i.limit=o.limit,i.padding=o.padding,at=[],W(t.start||n,e)}var et,nt,rt,it,ot=d(),st=n,at=[],ut=[],lt=!1,ct=i.spectrum,pt=[],ft={};if(st.noUiSlider)throw new Error("noUiSlider ("+_+"): Slider was already initialized.");return v(st),g(i.connect,et),it={destroy:J,steps:K,on:Q,off:Z,get:G,set:W,reset:$,__moveHandles:function(t,e,n){k(t,e,at,n)},options:u,updateOptions:tt,target:st,pips:E},j(i.events),W(i.start),i.pips&&E(i.pips),i.tooltips&&S(),it}function I(t,e){if(!t.nodeName)throw new Error("noUiSlider ("+_+"): create requires a single element.");var n=X(e,t),r=Y(t,n,e);return t.noUiSlider=r,r}var _="9.2.0";C.prototype.getMargin=function(t){var e=this.xNumSteps[0];if(e&&t/e%1!=0)throw new Error("noUiSlider ("+_+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&m(this.xVal,t)},C.prototype.toStepping=function(t){return t=S(this.xVal,this.xPct,t)},C.prototype.fromStepping=function(t){return w(this.xVal,this.xPct,t)},C.prototype.getStep=function(t){return t=x(this.xPct,this.xSteps,this.snap,t)},C.prototype.getNearbySteps=function(t){var e=b(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e-0],step:this.xNumSteps[e-0],highestStep:this.xHighestCompleteStep[e-0]}}},C.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(u);return Math.max.apply(null,t)},C.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var W={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};return{version:_,create:I}});