function Fh(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function _h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cu={exports:{}},Eo={},du={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zr=Symbol.for("react.element"),Vh=Symbol.for("react.portal"),Yh=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),$h=Symbol.for("react.profiler"),Uh=Symbol.for("react.provider"),Gh=Symbol.for("react.context"),Kh=Symbol.for("react.forward_ref"),Qh=Symbol.for("react.suspense"),qh=Symbol.for("react.memo"),Xh=Symbol.for("react.lazy"),uc=Symbol.iterator;function Jh(e){return e===null||typeof e!="object"?null:(e=uc&&e[uc]||e["@@iterator"],typeof e=="function"?e:null)}var uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pu=Object.assign,fu={};function Jn(e,t,n){this.props=e,this.context=t,this.refs=fu,this.updater=n||uu}Jn.prototype.isReactComponent={};Jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hu(){}hu.prototype=Jn.prototype;function Ka(e,t,n){this.props=e,this.context=t,this.refs=fu,this.updater=n||uu}var Qa=Ka.prototype=new hu;Qa.constructor=Ka;pu(Qa,Jn.prototype);Qa.isPureReactComponent=!0;var pc=Array.isArray,mu=Object.prototype.hasOwnProperty,qa={current:null},gu={key:!0,ref:!0,__self:!0,__source:!0};function xu(e,t,n){var i,o={},l=null,a=null;if(t!=null)for(i in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)mu.call(t,i)&&!gu.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){for(var s=Array(c),d=0;d<c;d++)s[d]=arguments[d+2];o.children=s}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)o[i]===void 0&&(o[i]=c[i]);return{$$typeof:Zr,type:e,key:l,ref:a,props:o,_owner:qa.current}}function Zh(e,t){return{$$typeof:Zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zr}function em(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fc=/\/+/g;function il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?em(""+e.key):t.toString(36)}function Di(e,t,n,i,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zr:case Vh:a=!0}}if(a)return a=e,o=o(a),e=i===""?"."+il(a,0):i,pc(o)?(n="",e!=null&&(n=e.replace(fc,"$&/")+"/"),Di(o,t,n,"",function(d){return d})):o!=null&&(Xa(o)&&(o=Zh(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(fc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,i=i===""?".":i+":",pc(e))for(var c=0;c<e.length;c++){l=e[c];var s=i+il(l,c);a+=Di(l,t,n,s,o)}else if(s=Jh(e),typeof s=="function")for(e=s.call(e),c=0;!(l=e.next()).done;)l=l.value,s=i+il(l,c++),a+=Di(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ai(e,t,n){if(e==null)return e;var i=[],o=0;return Di(e,i,"","",function(l){return t.call(n,l,o++)}),i}function tm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},Ti={transition:null},nm={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Ti,ReactCurrentOwner:qa};function yu(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:ai,forEach:function(e,t,n){ai(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ai(e,function(){t++}),t},toArray:function(e){return ai(e,function(t){return t})||[]},only:function(e){if(!Xa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Jn;V.Fragment=Yh;V.Profiler=$h;V.PureComponent=Ka;V.StrictMode=Hh;V.Suspense=Qh;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nm;V.act=yu;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=pu({},e.props),o=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=qa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)mu.call(t,s)&&!gu.hasOwnProperty(s)&&(i[s]=t[s]===void 0&&c!==void 0?c[s]:t[s])}var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){c=Array(s);for(var d=0;d<s;d++)c[d]=arguments[d+2];i.children=c}return{$$typeof:Zr,type:e.type,key:o,ref:l,props:i,_owner:a}};V.createContext=function(e){return e={$$typeof:Gh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Uh,_context:e},e.Consumer=e};V.createElement=xu;V.createFactory=function(e){var t=xu.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Kh,render:e}};V.isValidElement=Xa;V.lazy=function(e){return{$$typeof:Xh,_payload:{_status:-1,_result:e},_init:tm}};V.memo=function(e,t){return{$$typeof:qh,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Ti.transition;Ti.transition={};try{e()}finally{Ti.transition=t}};V.unstable_act=yu;V.useCallback=function(e,t){return Ne.current.useCallback(e,t)};V.useContext=function(e){return Ne.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};V.useEffect=function(e,t){return Ne.current.useEffect(e,t)};V.useId=function(){return Ne.current.useId()};V.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Ne.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};V.useRef=function(e){return Ne.current.useRef(e)};V.useState=function(e){return Ne.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Ne.current.useTransition()};V.version="18.3.1";du.exports=V;var v=du.exports;const vu=_h(v),Fl=Fh({__proto__:null,default:vu},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=v,im=Symbol.for("react.element"),om=Symbol.for("react.fragment"),lm=Object.prototype.hasOwnProperty,am=rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sm={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,n){var i,o={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(i in t)lm.call(t,i)&&!sm.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:im,type:e,key:l,ref:a,props:o,_owner:am.current}}Eo.Fragment=om;Eo.jsx=bu;Eo.jsxs=bu;cu.exports=Eo;var r=cu.exports,_l={},ju={exports:{}},Ke={},wu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,A){var W=D.length;D.push(A);e:for(;0<W;){var q=W-1>>>1,F=D[q];if(0<o(F,A))D[q]=A,D[W]=F,W=q;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var A=D[0],W=D.pop();if(W!==A){D[0]=W;e:for(var q=0,F=D.length,de=F>>>1;q<de;){var be=2*(q+1)-1,Xe=D[be],he=be+1,Ve=D[he];if(0>o(Xe,W))he<F&&0>o(Ve,Xe)?(D[q]=Ve,D[he]=W,q=he):(D[q]=Xe,D[be]=W,q=be);else if(he<F&&0>o(Ve,W))D[q]=Ve,D[he]=W,q=he;else break e}}return A}function o(D,A){var W=D.sortIndex-A.sortIndex;return W!==0?W:D.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var s=[],d=[],u=1,p=null,g=3,y=!1,b=!1,f=!1,j=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var A=n(d);A!==null;){if(A.callback===null)i(d);else if(A.startTime<=D)i(d),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(d)}}function w(D){if(f=!1,x(D),!b)if(n(s)!==null)b=!0,M(S);else{var A=n(d);A!==null&&_(w,A.startTime-D)}}function S(D,A){b=!1,f&&(f=!1,h(z),z=-1),y=!0;var W=g;try{for(x(A),p=n(s);p!==null&&(!(p.expirationTime>A)||D&&!G());){var q=p.callback;if(typeof q=="function"){p.callback=null,g=p.priorityLevel;var F=q(p.expirationTime<=A);A=e.unstable_now(),typeof F=="function"?p.callback=F:p===n(s)&&i(s),x(A)}else i(s);p=n(s)}if(p!==null)var de=!0;else{var be=n(d);be!==null&&_(w,be.startTime-A),de=!1}return de}finally{p=null,g=W,y=!1}}var E=!1,C=null,z=-1,L=5,R=-1;function G(){return!(e.unstable_now()-R<L)}function X(){if(C!==null){var D=e.unstable_now();R=D;var A=!0;try{A=C(!0,D)}finally{A?fe():(E=!1,C=null)}}else E=!1}var fe;if(typeof m=="function")fe=function(){m(X)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,k=T.port2;T.port1.onmessage=X,fe=function(){k.postMessage(null)}}else fe=function(){j(X,0)};function M(D){C=D,E||(E=!0,fe())}function _(D,A){z=j(function(){D(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){b||y||(b=!0,M(S))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(D){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var W=g;g=A;try{return D()}finally{g=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,A){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var W=g;g=D;try{return A()}finally{g=W}},e.unstable_scheduleCallback=function(D,A,W){var q=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?q+W:q):W=q,D){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=W+F,D={id:u++,callback:A,priorityLevel:D,startTime:W,expirationTime:F,sortIndex:-1},W>q?(D.sortIndex=W,t(d,D),n(s)===null&&D===n(d)&&(f?(h(z),z=-1):f=!0,_(w,W-q))):(D.sortIndex=F,t(s,D),b||y||(b=!0,M(S))),D},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(D){var A=g;return function(){var W=g;g=A;try{return D.apply(this,arguments)}finally{g=W}}}})(Su);wu.exports=Su;var cm=wu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm=v,Ge=cm;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cu=new Set,Tr={};function bn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Tr[e]=t,e=0;e<t.length;e++)Cu.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vl=Object.prototype.hasOwnProperty,um=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hc={},mc={};function pm(e){return Vl.call(mc,e)?!0:Vl.call(hc,e)?!1:um.test(e)?mc[e]=!0:(hc[e]=!0,!1)}function fm(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hm(e,t,n,i){if(t===null||typeof t>"u"||fm(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,i,o,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ja=/[\-:]([a-z])/g;function Za(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ja,Za);ke[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ja,Za);ke[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ja,Za);ke[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function es(e,t,n,i){var o=ke.hasOwnProperty(t)?ke[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hm(t,n,o,i)&&(n=null),i||o===null?pm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,i=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Rt=dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),kn=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),ts=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),ku=Symbol.for("react.provider"),Eu=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),Hl=Symbol.for("react.suspense"),$l=Symbol.for("react.suspense_list"),rs=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),zu=Symbol.for("react.offscreen"),gc=Symbol.iterator;function ir(e){return e===null||typeof e!="object"?null:(e=gc&&e[gc]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,ol;function mr(e){if(ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ol=t&&t[1]||""}return`
`+ol+e}var ll=!1;function al(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=i.stack.split(`
`),a=o.length-1,c=l.length-1;1<=a&&0<=c&&o[a]!==l[c];)c--;for(;1<=a&&0<=c;a--,c--)if(o[a]!==l[c]){if(a!==1||c!==1)do if(a--,c--,0>c||o[a]!==l[c]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=c);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function mm(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case kn:return"Portal";case Yl:return"Profiler";case ts:return"StrictMode";case Hl:return"Suspense";case $l:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Eu:return(e.displayName||"Context")+".Consumer";case ku:return(e._context.displayName||"Context")+".Provider";case ns:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rs:return t=e.displayName||null,t!==null?t:Ul(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return Ul(e(t))}catch{}}return null}function gm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ul(t);case 8:return t===ts?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xm(e){var t=Bu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){i=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ci(e){e._valueTracker||(e._valueTracker=xm(e))}function Du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Bu(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gl(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xc(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tu(e,t){t=t.checked,t!=null&&es(e,"checked",t,!1)}function Kl(e,t){Tu(e,t);var n=Jt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ql(e,t.type,Jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ql(e,t,n){(t!=="number"||Ui(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gr=Array.isArray;function On(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(gr(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jt(n)}}function Pu(e,t){var n=Jt(t.value),i=Jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function bc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ru(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ru(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var di,Au=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(di=di||document.createElement("div"),di.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ym=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){ym.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),br[t]=br[e]})});function Nu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||br.hasOwnProperty(e)&&br[e]?(""+t).trim():t+"px"}function Mu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=Nu(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,o):e[n]=o}}var vm=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(e,t){if(t){if(vm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function Zl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ea=null;function is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ta=null,Ln=null,Wn=null;function jc(e){if(e=ni(e)){if(typeof ta!="function")throw Error(B(280));var t=e.stateNode;t&&(t=Po(t),ta(e.stateNode,e.type,t))}}function Iu(e){Ln?Wn?Wn.push(e):Wn=[e]:Ln=e}function Ou(){if(Ln){var e=Ln,t=Wn;if(Wn=Ln=null,jc(e),t)for(e=0;e<t.length;e++)jc(t[e])}}function Lu(e,t){return e(t)}function Wu(){}var sl=!1;function Fu(e,t,n){if(sl)return e(t,n);sl=!0;try{return Lu(e,t,n)}finally{sl=!1,(Ln!==null||Wn!==null)&&(Wu(),Ou())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var i=Po(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var na=!1;if(zt)try{var or={};Object.defineProperty(or,"passive",{get:function(){na=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{na=!1}function bm(e,t,n,i,o,l,a,c,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var jr=!1,Gi=null,Ki=!1,ra=null,jm={onError:function(e){jr=!0,Gi=e}};function wm(e,t,n,i,o,l,a,c,s){jr=!1,Gi=null,bm.apply(jm,arguments)}function Sm(e,t,n,i,o,l,a,c,s){if(wm.apply(this,arguments),jr){if(jr){var d=Gi;jr=!1,Gi=null}else throw Error(B(198));Ki||(Ki=!0,ra=d)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wc(e){if(jn(e)!==e)throw Error(B(188))}function Cm(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return wc(o),e;if(l===i)return wc(o),t;l=l.sibling}throw Error(B(188))}if(n.return!==i.return)n=o,i=l;else{for(var a=!1,c=o.child;c;){if(c===n){a=!0,n=o,i=l;break}if(c===i){a=!0,i=o,n=l;break}c=c.sibling}if(!a){for(c=l.child;c;){if(c===n){a=!0,n=l,i=o;break}if(c===i){a=!0,i=l,n=o;break}c=c.sibling}if(!a)throw Error(B(189))}}if(n.alternate!==i)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function Vu(e){return e=Cm(e),e!==null?Yu(e):null}function Yu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yu(e);if(t!==null)return t;e=e.sibling}return null}var Hu=Ge.unstable_scheduleCallback,Sc=Ge.unstable_cancelCallback,km=Ge.unstable_shouldYield,Em=Ge.unstable_requestPaint,se=Ge.unstable_now,zm=Ge.unstable_getCurrentPriorityLevel,os=Ge.unstable_ImmediatePriority,$u=Ge.unstable_UserBlockingPriority,Qi=Ge.unstable_NormalPriority,Bm=Ge.unstable_LowPriority,Uu=Ge.unstable_IdlePriority,zo=null,xt=null;function Dm(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(zo,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Rm,Tm=Math.log,Pm=Math.LN2;function Rm(e){return e>>>=0,e===0?32:31-(Tm(e)/Pm|0)|0}var ui=64,pi=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~o;c!==0?i=xr(c):(l&=a,l!==0&&(i=xr(l)))}else a=n&~o,a!==0?i=xr(a):l!==0&&(i=xr(l));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-ct(t),o=1<<n,i|=e[n],t&=~o;return i}function Am(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-ct(l),c=1<<a,s=o[a];s===-1?(!(c&n)||c&i)&&(o[a]=Am(c,t)):s<=t&&(e.expiredLanes|=c),l&=~c}}function ia(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gu(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function Mm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),l=1<<o;t[o]=0,i[o]=-1,e[o]=-1,n&=~l}}function ls(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ct(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}var K=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qu,as,qu,Xu,Ju,oa=!1,fi=[],Yt=null,Ht=null,$t=null,Ar=new Map,Nr=new Map,Lt=[],Im="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cc(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function lr(e,t,n,i,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:l,targetContainers:[o]},t!==null&&(t=ni(t),t!==null&&as(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Om(e,t,n,i,o){switch(t){case"focusin":return Yt=lr(Yt,e,t,n,i,o),!0;case"dragenter":return Ht=lr(Ht,e,t,n,i,o),!0;case"mouseover":return $t=lr($t,e,t,n,i,o),!0;case"pointerover":var l=o.pointerId;return Ar.set(l,lr(Ar.get(l)||null,e,t,n,i,o)),!0;case"gotpointercapture":return l=o.pointerId,Nr.set(l,lr(Nr.get(l)||null,e,t,n,i,o)),!0}return!1}function Zu(e){var t=cn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=_u(n),t!==null){e.blockedOn=t,Ju(e.priority,function(){qu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=la(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ea=i,n.target.dispatchEvent(i),ea=null}else return t=ni(n),t!==null&&as(t),e.blockedOn=n,!1;t.shift()}return!0}function kc(e,t,n){Pi(e)&&n.delete(t)}function Lm(){oa=!1,Yt!==null&&Pi(Yt)&&(Yt=null),Ht!==null&&Pi(Ht)&&(Ht=null),$t!==null&&Pi($t)&&($t=null),Ar.forEach(kc),Nr.forEach(kc)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,oa||(oa=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Lm)))}function Mr(e){function t(o){return ar(o,e)}if(0<fi.length){ar(fi[0],e);for(var n=1;n<fi.length;n++){var i=fi[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Yt!==null&&ar(Yt,e),Ht!==null&&ar(Ht,e),$t!==null&&ar($t,e),Ar.forEach(t),Nr.forEach(t),n=0;n<Lt.length;n++)i=Lt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Zu(n),n.blockedOn===null&&Lt.shift()}var Fn=Rt.ReactCurrentBatchConfig,Xi=!0;function Wm(e,t,n,i){var o=K,l=Fn.transition;Fn.transition=null;try{K=1,ss(e,t,n,i)}finally{K=o,Fn.transition=l}}function Fm(e,t,n,i){var o=K,l=Fn.transition;Fn.transition=null;try{K=4,ss(e,t,n,i)}finally{K=o,Fn.transition=l}}function ss(e,t,n,i){if(Xi){var o=la(e,t,n,i);if(o===null)vl(e,t,i,Ji,n),Cc(e,i);else if(Om(o,e,t,n,i))i.stopPropagation();else if(Cc(e,i),t&4&&-1<Im.indexOf(e)){for(;o!==null;){var l=ni(o);if(l!==null&&Qu(l),l=la(e,t,n,i),l===null&&vl(e,t,i,Ji,n),l===o)break;o=l}o!==null&&i.stopPropagation()}else vl(e,t,i,null,n)}}var Ji=null;function la(e,t,n,i){if(Ji=null,e=is(i),e=cn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_u(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ji=e,null}function ep(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zm()){case os:return 1;case $u:return 4;case Qi:case Bm:return 16;case Uu:return 536870912;default:return 16}default:return 16}}var Ft=null,cs=null,Ri=null;function tp(){if(Ri)return Ri;var e,t=cs,n=t.length,i,o="value"in Ft?Ft.value:Ft.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===o[l-i];i++);return Ri=o.slice(e,1<i?1-i:void 0)}function Ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function Ec(){return!1}function Qe(e){function t(n,i,o,l,a){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?hi:Ec,this.isPropagationStopped=Ec,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ds=Qe(Zn),ti=oe({},Zn,{view:0,detail:0}),_m=Qe(ti),dl,ul,sr,Bo=oe({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(dl=e.screenX-sr.screenX,ul=e.screenY-sr.screenY):ul=dl=0,sr=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),zc=Qe(Bo),Vm=oe({},Bo,{dataTransfer:0}),Ym=Qe(Vm),Hm=oe({},ti,{relatedTarget:0}),pl=Qe(Hm),$m=oe({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Um=Qe($m),Gm=oe({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Km=Qe(Gm),Qm=oe({},Zn,{data:0}),Bc=Qe(Qm),qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jm[e])?!!t[e]:!1}function us(){return Zm}var eg=oe({},ti,{key:function(e){if(e.key){var t=qm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tg=Qe(eg),ng=oe({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dc=Qe(ng),rg=oe({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),ig=Qe(rg),og=oe({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),lg=Qe(og),ag=oe({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sg=Qe(ag),cg=[9,13,27,32],ps=zt&&"CompositionEvent"in window,wr=null;zt&&"documentMode"in document&&(wr=document.documentMode);var dg=zt&&"TextEvent"in window&&!wr,np=zt&&(!ps||wr&&8<wr&&11>=wr),Tc=" ",Pc=!1;function rp(e,t){switch(e){case"keyup":return cg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function ug(e,t){switch(e){case"compositionend":return ip(t);case"keypress":return t.which!==32?null:(Pc=!0,Tc);case"textInput":return e=t.data,e===Tc&&Pc?null:e;default:return null}}function pg(e,t){if(zn)return e==="compositionend"||!ps&&rp(e,t)?(e=tp(),Ri=cs=Ft=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return np&&t.locale!=="ko"?null:t.data;default:return null}}var fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fg[e.type]:t==="textarea"}function op(e,t,n,i){Iu(i),t=Zi(t,"onChange"),0<t.length&&(n=new ds("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Sr=null,Ir=null;function hg(e){gp(e,0)}function Do(e){var t=Tn(e);if(Du(t))return e}function mg(e,t){if(e==="change")return t}var lp=!1;if(zt){var fl;if(zt){var hl="oninput"in document;if(!hl){var Ac=document.createElement("div");Ac.setAttribute("oninput","return;"),hl=typeof Ac.oninput=="function"}fl=hl}else fl=!1;lp=fl&&(!document.documentMode||9<document.documentMode)}function Nc(){Sr&&(Sr.detachEvent("onpropertychange",ap),Ir=Sr=null)}function ap(e){if(e.propertyName==="value"&&Do(Ir)){var t=[];op(t,Ir,e,is(e)),Fu(hg,t)}}function gg(e,t,n){e==="focusin"?(Nc(),Sr=t,Ir=n,Sr.attachEvent("onpropertychange",ap)):e==="focusout"&&Nc()}function xg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Do(Ir)}function yg(e,t){if(e==="click")return Do(t)}function vg(e,t){if(e==="input"||e==="change")return Do(t)}function bg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:bg;function Or(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!Vl.call(t,o)||!ut(e[o],t[o]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ic(e,t){var n=Mc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mc(n)}}function sp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cp(){for(var e=window,t=Ui();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ui(e.document)}return t}function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jg(e){var t=cp(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sp(n.ownerDocument.documentElement,n)){if(i!==null&&fs(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(i.start,o);i=i.end===void 0?l:Math.min(i.end,o),!e.extend&&l>i&&(o=i,i=l,l=o),o=Ic(n,l);var a=Ic(n,i);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>i?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wg=zt&&"documentMode"in document&&11>=document.documentMode,Bn=null,aa=null,Cr=null,sa=!1;function Oc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sa||Bn==null||Bn!==Ui(i)||(i=Bn,"selectionStart"in i&&fs(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Cr&&Or(Cr,i)||(Cr=i,i=Zi(aa,"onSelect"),0<i.length&&(t=new ds("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Bn)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},ml={},dp={};zt&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function To(e){if(ml[e])return ml[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dp)return ml[e]=t[n];return e}var up=To("animationend"),pp=To("animationiteration"),fp=To("animationstart"),hp=To("transitionend"),mp=new Map,Lc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){mp.set(e,t),bn(t,[e])}for(var gl=0;gl<Lc.length;gl++){var xl=Lc[gl],Sg=xl.toLowerCase(),Cg=xl[0].toUpperCase()+xl.slice(1);en(Sg,"on"+Cg)}en(up,"onAnimationEnd");en(pp,"onAnimationIteration");en(fp,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(hp,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kg=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function Wc(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Sm(i,t,void 0,e),e.currentTarget=null}function gp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var a=i.length-1;0<=a;a--){var c=i[a],s=c.instance,d=c.currentTarget;if(c=c.listener,s!==l&&o.isPropagationStopped())break e;Wc(o,c,d),l=s}else for(a=0;a<i.length;a++){if(c=i[a],s=c.instance,d=c.currentTarget,c=c.listener,s!==l&&o.isPropagationStopped())break e;Wc(o,c,d),l=s}}}if(Ki)throw e=ra,Ki=!1,ra=null,e}function Z(e,t){var n=t[fa];n===void 0&&(n=t[fa]=new Set);var i=e+"__bubble";n.has(i)||(xp(t,e,2,!1),n.add(i))}function yl(e,t,n){var i=0;t&&(i|=4),xp(n,e,i,t)}var gi="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[gi]){e[gi]=!0,Cu.forEach(function(n){n!=="selectionchange"&&(kg.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,yl("selectionchange",!1,t))}}function xp(e,t,n,i){switch(ep(t)){case 1:var o=Wm;break;case 4:o=Fm;break;default:o=ss}n=o.bind(null,t,n,e),o=void 0,!na||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function vl(e,t,n,i,o){var l=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var c=i.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(a===4)for(a=i.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;c!==null;){if(a=cn(c),a===null)return;if(s=a.tag,s===5||s===6){i=l=a;continue e}c=c.parentNode}}i=i.return}Fu(function(){var d=l,u=is(n),p=[];e:{var g=mp.get(e);if(g!==void 0){var y=ds,b=e;switch(e){case"keypress":if(Ai(n)===0)break e;case"keydown":case"keyup":y=tg;break;case"focusin":b="focus",y=pl;break;case"focusout":b="blur",y=pl;break;case"beforeblur":case"afterblur":y=pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ym;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ig;break;case up:case pp:case fp:y=Um;break;case hp:y=lg;break;case"scroll":y=_m;break;case"wheel":y=sg;break;case"copy":case"cut":case"paste":y=Km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Dc}var f=(t&4)!==0,j=!f&&e==="scroll",h=f?g!==null?g+"Capture":null:g;f=[];for(var m=d,x;m!==null;){x=m;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,h!==null&&(w=Rr(m,h),w!=null&&f.push(Wr(m,w,x)))),j)break;m=m.return}0<f.length&&(g=new y(g,b,null,n,u),p.push({event:g,listeners:f}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==ea&&(b=n.relatedTarget||n.fromElement)&&(cn(b)||b[Bt]))break e;if((y||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,y?(b=n.relatedTarget||n.toElement,y=d,b=b?cn(b):null,b!==null&&(j=jn(b),b!==j||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=d),y!==b)){if(f=zc,w="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(f=Dc,w="onPointerLeave",h="onPointerEnter",m="pointer"),j=y==null?g:Tn(y),x=b==null?g:Tn(b),g=new f(w,m+"leave",y,n,u),g.target=j,g.relatedTarget=x,w=null,cn(u)===d&&(f=new f(h,m+"enter",b,n,u),f.target=x,f.relatedTarget=j,w=f),j=w,y&&b)t:{for(f=y,h=b,m=0,x=f;x;x=wn(x))m++;for(x=0,w=h;w;w=wn(w))x++;for(;0<m-x;)f=wn(f),m--;for(;0<x-m;)h=wn(h),x--;for(;m--;){if(f===h||h!==null&&f===h.alternate)break t;f=wn(f),h=wn(h)}f=null}else f=null;y!==null&&Fc(p,g,y,f,!1),b!==null&&j!==null&&Fc(p,j,b,f,!0)}}e:{if(g=d?Tn(d):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=mg;else if(Rc(g))if(lp)S=vg;else{S=xg;var E=gg}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=yg);if(S&&(S=S(e,d))){op(p,S,n,u);break e}E&&E(e,g,d),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Ql(g,"number",g.value)}switch(E=d?Tn(d):window,e){case"focusin":(Rc(E)||E.contentEditable==="true")&&(Bn=E,aa=d,Cr=null);break;case"focusout":Cr=aa=Bn=null;break;case"mousedown":sa=!0;break;case"contextmenu":case"mouseup":case"dragend":sa=!1,Oc(p,n,u);break;case"selectionchange":if(wg)break;case"keydown":case"keyup":Oc(p,n,u)}var C;if(ps)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else zn?rp(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(np&&n.locale!=="ko"&&(zn||z!=="onCompositionStart"?z==="onCompositionEnd"&&zn&&(C=tp()):(Ft=u,cs="value"in Ft?Ft.value:Ft.textContent,zn=!0)),E=Zi(d,z),0<E.length&&(z=new Bc(z,e,null,n,u),p.push({event:z,listeners:E}),C?z.data=C:(C=ip(n),C!==null&&(z.data=C)))),(C=dg?ug(e,n):pg(e,n))&&(d=Zi(d,"onBeforeInput"),0<d.length&&(u=new Bc("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=C))}gp(p,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zi(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Rr(e,n),l!=null&&i.unshift(Wr(e,l,o)),l=Rr(e,t),l!=null&&i.push(Wr(e,l,o))),e=e.return}return i}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fc(e,t,n,i,o){for(var l=t._reactName,a=[];n!==null&&n!==i;){var c=n,s=c.alternate,d=c.stateNode;if(s!==null&&s===i)break;c.tag===5&&d!==null&&(c=d,o?(s=Rr(n,l),s!=null&&a.unshift(Wr(n,s,c))):o||(s=Rr(n,l),s!=null&&a.push(Wr(n,s,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Eg=/\r\n?/g,zg=/\u0000|\uFFFD/g;function _c(e){return(typeof e=="string"?e:""+e).replace(Eg,`
`).replace(zg,"")}function xi(e,t,n){if(t=_c(t),_c(e)!==t&&n)throw Error(B(425))}function eo(){}var ca=null,da=null;function ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pa=typeof setTimeout=="function"?setTimeout:void 0,Bg=typeof clearTimeout=="function"?clearTimeout:void 0,Vc=typeof Promise=="function"?Promise:void 0,Dg=typeof queueMicrotask=="function"?queueMicrotask:typeof Vc<"u"?function(e){return Vc.resolve(null).then(e).catch(Tg)}:pa;function Tg(e){setTimeout(function(){throw e})}function bl(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){e.removeChild(o),Mr(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);Mr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),gt="__reactFiber$"+er,Fr="__reactProps$"+er,Bt="__reactContainer$"+er,fa="__reactEvents$"+er,Pg="__reactListeners$"+er,Rg="__reactHandles$"+er;function cn(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yc(e);e!==null;){if(n=e[gt])return n;e=Yc(e)}return t}e=n,n=e.parentNode}return null}function ni(e){return e=e[gt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Po(e){return e[Fr]||null}var ha=[],Pn=-1;function tn(e){return{current:e}}function ee(e){0>Pn||(e.current=ha[Pn],ha[Pn]=null,Pn--)}function J(e,t){Pn++,ha[Pn]=e.current,e.current=t}var Zt={},Pe=tn(Zt),Le=tn(!1),hn=Zt;function $n(e,t){var n=e.type.contextTypes;if(!n)return Zt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function We(e){return e=e.childContextTypes,e!=null}function to(){ee(Le),ee(Pe)}function Hc(e,t,n){if(Pe.current!==Zt)throw Error(B(168));J(Pe,t),J(Le,n)}function yp(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(B(108,gm(e)||"Unknown",o));return oe({},n,i)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,hn=Pe.current,J(Pe,e),J(Le,Le.current),!0}function $c(e,t,n){var i=e.stateNode;if(!i)throw Error(B(169));n?(e=yp(e,t,hn),i.__reactInternalMemoizedMergedChildContext=e,ee(Le),ee(Pe),J(Pe,e)):ee(Le),J(Le,n)}var wt=null,Ro=!1,jl=!1;function vp(e){wt===null?wt=[e]:wt.push(e)}function Ag(e){Ro=!0,vp(e)}function nn(){if(!jl&&wt!==null){jl=!0;var e=0,t=K;try{var n=wt;for(K=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}wt=null,Ro=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),Hu(os,nn),o}finally{K=t,jl=!1}}return null}var Rn=[],An=0,ro=null,io=0,Ze=[],et=0,mn=null,St=1,Ct="";function an(e,t){Rn[An++]=io,Rn[An++]=ro,ro=e,io=t}function bp(e,t,n){Ze[et++]=St,Ze[et++]=Ct,Ze[et++]=mn,mn=e;var i=St;e=Ct;var o=32-ct(i)-1;i&=~(1<<o),n+=1;var l=32-ct(t)+o;if(30<l){var a=o-o%5;l=(i&(1<<a)-1).toString(32),i>>=a,o-=a,St=1<<32-ct(t)+o|n<<o|i,Ct=l+e}else St=1<<l|n<<o|i,Ct=e}function hs(e){e.return!==null&&(an(e,1),bp(e,1,0))}function ms(e){for(;e===ro;)ro=Rn[--An],Rn[An]=null,io=Rn[--An],Rn[An]=null;for(;e===mn;)mn=Ze[--et],Ze[et]=null,Ct=Ze[--et],Ze[et]=null,St=Ze[--et],Ze[et]=null}var $e=null,He=null,te=!1,st=null;function jp(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,He=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:St,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,He=null,!0):!1;default:return!1}}function ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ga(e){if(te){var t=He;if(t){var n=t;if(!Uc(e,t)){if(ma(e))throw Error(B(418));t=Ut(n.nextSibling);var i=$e;t&&Uc(e,t)?jp(i,n):(e.flags=e.flags&-4097|2,te=!1,$e=e)}}else{if(ma(e))throw Error(B(418));e.flags=e.flags&-4097|2,te=!1,$e=e}}}function Gc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function yi(e){if(e!==$e)return!1;if(!te)return Gc(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ua(e.type,e.memoizedProps)),t&&(t=He)){if(ma(e))throw wp(),Error(B(418));for(;t;)jp(e,t),t=Ut(t.nextSibling)}if(Gc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=$e?Ut(e.stateNode.nextSibling):null;return!0}function wp(){for(var e=He;e;)e=Ut(e.nextSibling)}function Un(){He=$e=null,te=!1}function gs(e){st===null?st=[e]:st.push(e)}var Ng=Rt.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var i=n.stateNode}if(!i)throw Error(B(147,e));var o=i,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var c=o.refs;a===null?delete c[l]:c[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kc(e){var t=e._init;return t(e._payload)}function Sp(e){function t(h,m){if(e){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function o(h,m){return h=qt(h,m),h.index=0,h.sibling=null,h}function l(h,m,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=2,m):x):(h.flags|=2,m)):(h.flags|=1048576,m)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function c(h,m,x,w){return m===null||m.tag!==6?(m=Bl(x,h.mode,w),m.return=h,m):(m=o(m,x),m.return=h,m)}function s(h,m,x,w){var S=x.type;return S===En?u(h,m,x.props.children,w,x.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===It&&Kc(S)===m.type)?(w=o(m,x.props),w.ref=cr(h,m,x),w.return=h,w):(w=Fi(x.type,x.key,x.props,null,h.mode,w),w.ref=cr(h,m,x),w.return=h,w)}function d(h,m,x,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Dl(x,h.mode,w),m.return=h,m):(m=o(m,x.children||[]),m.return=h,m)}function u(h,m,x,w,S){return m===null||m.tag!==7?(m=fn(x,h.mode,w,S),m.return=h,m):(m=o(m,x),m.return=h,m)}function p(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Bl(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case si:return x=Fi(m.type,m.key,m.props,null,h.mode,x),x.ref=cr(h,null,m),x.return=h,x;case kn:return m=Dl(m,h.mode,x),m.return=h,m;case It:var w=m._init;return p(h,w(m._payload),x)}if(gr(m)||ir(m))return m=fn(m,h.mode,x,null),m.return=h,m;vi(h,m)}return null}function g(h,m,x,w){var S=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:c(h,m,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case si:return x.key===S?s(h,m,x,w):null;case kn:return x.key===S?d(h,m,x,w):null;case It:return S=x._init,g(h,m,S(x._payload),w)}if(gr(x)||ir(x))return S!==null?null:u(h,m,x,w,null);vi(h,x)}return null}function y(h,m,x,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(x)||null,c(m,h,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case si:return h=h.get(w.key===null?x:w.key)||null,s(m,h,w,S);case kn:return h=h.get(w.key===null?x:w.key)||null,d(m,h,w,S);case It:var E=w._init;return y(h,m,x,E(w._payload),S)}if(gr(w)||ir(w))return h=h.get(x)||null,u(m,h,w,S,null);vi(m,w)}return null}function b(h,m,x,w){for(var S=null,E=null,C=m,z=m=0,L=null;C!==null&&z<x.length;z++){C.index>z?(L=C,C=null):L=C.sibling;var R=g(h,C,x[z],w);if(R===null){C===null&&(C=L);break}e&&C&&R.alternate===null&&t(h,C),m=l(R,m,z),E===null?S=R:E.sibling=R,E=R,C=L}if(z===x.length)return n(h,C),te&&an(h,z),S;if(C===null){for(;z<x.length;z++)C=p(h,x[z],w),C!==null&&(m=l(C,m,z),E===null?S=C:E.sibling=C,E=C);return te&&an(h,z),S}for(C=i(h,C);z<x.length;z++)L=y(C,h,z,x[z],w),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?z:L.key),m=l(L,m,z),E===null?S=L:E.sibling=L,E=L);return e&&C.forEach(function(G){return t(h,G)}),te&&an(h,z),S}function f(h,m,x,w){var S=ir(x);if(typeof S!="function")throw Error(B(150));if(x=S.call(x),x==null)throw Error(B(151));for(var E=S=null,C=m,z=m=0,L=null,R=x.next();C!==null&&!R.done;z++,R=x.next()){C.index>z?(L=C,C=null):L=C.sibling;var G=g(h,C,R.value,w);if(G===null){C===null&&(C=L);break}e&&C&&G.alternate===null&&t(h,C),m=l(G,m,z),E===null?S=G:E.sibling=G,E=G,C=L}if(R.done)return n(h,C),te&&an(h,z),S;if(C===null){for(;!R.done;z++,R=x.next())R=p(h,R.value,w),R!==null&&(m=l(R,m,z),E===null?S=R:E.sibling=R,E=R);return te&&an(h,z),S}for(C=i(h,C);!R.done;z++,R=x.next())R=y(C,h,z,R.value,w),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?z:R.key),m=l(R,m,z),E===null?S=R:E.sibling=R,E=R);return e&&C.forEach(function(X){return t(h,X)}),te&&an(h,z),S}function j(h,m,x,w){if(typeof x=="object"&&x!==null&&x.type===En&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case si:e:{for(var S=x.key,E=m;E!==null;){if(E.key===S){if(S=x.type,S===En){if(E.tag===7){n(h,E.sibling),m=o(E,x.props.children),m.return=h,h=m;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===It&&Kc(S)===E.type){n(h,E.sibling),m=o(E,x.props),m.ref=cr(h,E,x),m.return=h,h=m;break e}n(h,E);break}else t(h,E);E=E.sibling}x.type===En?(m=fn(x.props.children,h.mode,w,x.key),m.return=h,h=m):(w=Fi(x.type,x.key,x.props,null,h.mode,w),w.ref=cr(h,m,x),w.return=h,h=w)}return a(h);case kn:e:{for(E=x.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(h,m.sibling),m=o(m,x.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=Dl(x,h.mode,w),m.return=h,h=m}return a(h);case It:return E=x._init,j(h,m,E(x._payload),w)}if(gr(x))return b(h,m,x,w);if(ir(x))return f(h,m,x,w);vi(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(h,m.sibling),m=o(m,x),m.return=h,h=m):(n(h,m),m=Bl(x,h.mode,w),m.return=h,h=m),a(h)):n(h,m)}return j}var Gn=Sp(!0),Cp=Sp(!1),oo=tn(null),lo=null,Nn=null,xs=null;function ys(){xs=Nn=lo=null}function vs(e){var t=oo.current;ee(oo),e._currentValue=t}function xa(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){lo=e,xs=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(xs!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(lo===null)throw Error(B(308));Nn=e,lo.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var dn=null;function bs(e){dn===null?dn=[e]:dn.push(e)}function kp(e,t,n,i){var o=t.interleaved;return o===null?(n.next=n,bs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Dt(e,i)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ep(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,H&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,Dt(e,n)}return o=i.interleaved,o===null?(t.next=t,bs(i)):(t.next=o.next,o.next=t),i.interleaved=t,Dt(e,n)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ls(e,n)}}function Qc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ao(e,t,n,i){var o=e.updateQueue;Ot=!1;var l=o.firstBaseUpdate,a=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var s=c,d=s.next;s.next=null,a===null?l=d:a.next=d,a=s;var u=e.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==a&&(c===null?u.firstBaseUpdate=d:c.next=d,u.lastBaseUpdate=s))}if(l!==null){var p=o.baseState;a=0,u=d=s=null,c=l;do{var g=c.lane,y=c.eventTime;if((i&g)===g){u!==null&&(u=u.next={eventTime:y,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var b=e,f=c;switch(g=t,y=n,f.tag){case 1:if(b=f.payload,typeof b=="function"){p=b.call(y,p,g);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=f.payload,g=typeof b=="function"?b.call(y,p,g):b,g==null)break e;p=oe({},p,g);break e;case 2:Ot=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[c]:g.push(c))}else y={eventTime:y,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(d=u=y,s=p):u=u.next=y,a|=g;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;g=c,c=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(u===null&&(s=p),o.baseState=s,o.firstBaseUpdate=d,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);xn|=a,e.lanes=a,e.memoizedState=p}}function qc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(B(191,o));o.call(i)}}}var ri={},yt=tn(ri),_r=tn(ri),Vr=tn(ri);function un(e){if(e===ri)throw Error(B(174));return e}function ws(e,t){switch(J(Vr,t),J(_r,e),J(yt,ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xl(t,e)}ee(yt),J(yt,t)}function Kn(){ee(yt),ee(_r),ee(Vr)}function zp(e){un(Vr.current);var t=un(yt.current),n=Xl(t,e.type);t!==n&&(J(_r,e),J(yt,n))}function Ss(e){_r.current===e&&(ee(yt),ee(_r))}var re=tn(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wl=[];function Cs(){for(var e=0;e<wl.length;e++)wl[e]._workInProgressVersionPrimary=null;wl.length=0}var Mi=Rt.ReactCurrentDispatcher,Sl=Rt.ReactCurrentBatchConfig,gn=0,ie=null,me=null,xe=null,co=!1,kr=!1,Yr=0,Mg=0;function ze(){throw Error(B(321))}function ks(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Es(e,t,n,i,o,l){if(gn=l,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mi.current=e===null||e.memoizedState===null?Wg:Fg,e=n(i,o),kr){l=0;do{if(kr=!1,Yr=0,25<=l)throw Error(B(301));l+=1,xe=me=null,t.updateQueue=null,Mi.current=_g,e=n(i,o)}while(kr)}if(Mi.current=uo,t=me!==null&&me.next!==null,gn=0,xe=me=ie=null,co=!1,t)throw Error(B(300));return e}function zs(){var e=Yr!==0;return Yr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ie.memoizedState=xe=e:xe=xe.next=e,xe}function it(){if(me===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=xe===null?ie.memoizedState:xe.next;if(t!==null)xe=t,me=e;else{if(e===null)throw Error(B(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},xe===null?ie.memoizedState=xe=e:xe=xe.next=e}return xe}function Hr(e,t){return typeof t=="function"?t(e):t}function Cl(e){var t=it(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var i=me,o=i.baseQueue,l=n.pending;if(l!==null){if(o!==null){var a=o.next;o.next=l.next,l.next=a}i.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,i=i.baseState;var c=a=null,s=null,d=l;do{var u=d.lane;if((gn&u)===u)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(c=s=p,a=i):s=s.next=p,ie.lanes|=u,xn|=u}d=d.next}while(d!==null&&d!==l);s===null?a=i:s.next=c,ut(i,t.memoizedState)||(Oe=!0),t.memoizedState=i,t.baseState=a,t.baseQueue=s,n.lastRenderedState=i}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ie.lanes|=l,xn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kl(e){var t=it(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do l=e(l,a.action),a=a.next;while(a!==o);ut(l,t.memoizedState)||(Oe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,i]}function Bp(){}function Dp(e,t){var n=ie,i=it(),o=t(),l=!ut(i.memoizedState,o);if(l&&(i.memoizedState=o,Oe=!0),i=i.queue,Bs(Rp.bind(null,n,i,e),[e]),i.getSnapshot!==t||l||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,$r(9,Pp.bind(null,n,i,o,t),void 0,null),ye===null)throw Error(B(349));gn&30||Tp(n,t,o)}return o}function Tp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pp(e,t,n,i){t.value=n,t.getSnapshot=i,Ap(t)&&Np(e)}function Rp(e,t,n){return n(function(){Ap(t)&&Np(e)})}function Ap(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Np(e){var t=Dt(e,1);t!==null&&dt(t,e,1,-1)}function Xc(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=Lg.bind(null,ie,e),[t.memoizedState,e]}function $r(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Mp(){return it().memoizedState}function Ii(e,t,n,i){var o=ft();ie.flags|=e,o.memoizedState=$r(1|t,n,void 0,i===void 0?null:i)}function Ao(e,t,n,i){var o=it();i=i===void 0?null:i;var l=void 0;if(me!==null){var a=me.memoizedState;if(l=a.destroy,i!==null&&ks(i,a.deps)){o.memoizedState=$r(t,n,l,i);return}}ie.flags|=e,o.memoizedState=$r(1|t,n,l,i)}function Jc(e,t){return Ii(8390656,8,e,t)}function Bs(e,t){return Ao(2048,8,e,t)}function Ip(e,t){return Ao(4,2,e,t)}function Op(e,t){return Ao(4,4,e,t)}function Lp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wp(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4,4,Lp.bind(null,t,e),n)}function Ds(){}function Fp(e,t){var n=it();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ks(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function _p(e,t){var n=it();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ks(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Vp(e,t,n){return gn&21?(ut(n,t)||(n=Gu(),ie.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function Ig(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var i=Sl.transition;Sl.transition={};try{e(!1),t()}finally{K=n,Sl.transition=i}}function Yp(){return it().memoizedState}function Og(e,t,n){var i=Qt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Hp(e))$p(t,n);else if(n=kp(e,t,n,i),n!==null){var o=Ae();dt(n,e,i,o),Up(n,t,i)}}function Lg(e,t,n){var i=Qt(e),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hp(e))$p(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,c=l(a,n);if(o.hasEagerState=!0,o.eagerState=c,ut(c,a)){var s=t.interleaved;s===null?(o.next=o,bs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=kp(e,t,o,i),n!==null&&(o=Ae(),dt(n,e,i,o),Up(n,t,i))}}function Hp(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function $p(e,t){kr=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Up(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ls(e,n)}}var uo={readContext:rt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},Wg={readContext:rt,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Jc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ii(4194308,4,Lp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ii(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=ft();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Og.bind(null,ie,e),[i.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Xc,useDebugValue:Ds,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Xc(!1),t=e[0];return e=Ig.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=ie,o=ft();if(te){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),ye===null)throw Error(B(349));gn&30||Tp(i,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Jc(Rp.bind(null,i,l,e),[e]),i.flags|=2048,$r(9,Pp.bind(null,i,l,n,t),void 0,null),n},useId:function(){var e=ft(),t=ye.identifierPrefix;if(te){var n=Ct,i=St;n=(i&~(1<<32-ct(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fg={readContext:rt,useCallback:Fp,useContext:rt,useEffect:Bs,useImperativeHandle:Wp,useInsertionEffect:Ip,useLayoutEffect:Op,useMemo:_p,useReducer:Cl,useRef:Mp,useState:function(){return Cl(Hr)},useDebugValue:Ds,useDeferredValue:function(e){var t=it();return Vp(t,me.memoizedState,e)},useTransition:function(){var e=Cl(Hr)[0],t=it().memoizedState;return[e,t]},useMutableSource:Bp,useSyncExternalStore:Dp,useId:Yp,unstable_isNewReconciler:!1},_g={readContext:rt,useCallback:Fp,useContext:rt,useEffect:Bs,useImperativeHandle:Wp,useInsertionEffect:Ip,useLayoutEffect:Op,useMemo:_p,useReducer:kl,useRef:Mp,useState:function(){return kl(Hr)},useDebugValue:Ds,useDeferredValue:function(e){var t=it();return me===null?t.memoizedState=e:Vp(t,me.memoizedState,e)},useTransition:function(){var e=kl(Hr)[0],t=it().memoizedState;return[e,t]},useMutableSource:Bp,useSyncExternalStore:Dp,useId:Yp,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ya(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var No={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ae(),o=Qt(e),l=kt(i,o);l.payload=t,n!=null&&(l.callback=n),t=Gt(e,l,o),t!==null&&(dt(t,e,o,i),Ni(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ae(),o=Qt(e),l=kt(i,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Gt(e,l,o),t!==null&&(dt(t,e,o,i),Ni(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),i=Qt(e),o=kt(n,i);o.tag=2,t!=null&&(o.callback=t),t=Gt(e,o,i),t!==null&&(dt(t,e,i,n),Ni(t,e,i))}};function Zc(e,t,n,i,o,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,a):t.prototype&&t.prototype.isPureReactComponent?!Or(n,i)||!Or(o,l):!0}function Gp(e,t,n){var i=!1,o=Zt,l=t.contextType;return typeof l=="object"&&l!==null?l=rt(l):(o=We(t)?hn:Pe.current,i=t.contextTypes,l=(i=i!=null)?$n(e,o):Zt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=No,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function ed(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&No.enqueueReplaceState(t,t.state,null)}function va(e,t,n,i){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},js(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=rt(l):(l=We(t)?hn:Pe.current,o.context=$n(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ya(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&No.enqueueReplaceState(o,o.state,null),ao(e,n,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t){try{var n="",i=t;do n+=mm(i),i=i.return;while(i);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function El(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ba(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vg=typeof WeakMap=="function"?WeakMap:Map;function Kp(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){fo||(fo=!0,Ta=i),ba(e,t)},n}function Qp(e,t,n){n=kt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;n.payload=function(){return i(o)},n.callback=function(){ba(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ba(e,t),typeof i!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function td(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Vg;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(o.add(n),e=n0.bind(null,e,t,n),t.then(e,e))}function nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rd(e,t,n,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var Yg=Rt.ReactCurrentOwner,Oe=!1;function Re(e,t,n,i){t.child=e===null?Cp(t,null,n,i):Gn(t,e.child,n,i)}function id(e,t,n,i,o){n=n.render;var l=t.ref;return _n(t,o),i=Es(e,t,n,i,l,o),n=zs(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(te&&n&&hs(t),t.flags|=1,Re(e,t,i,o),t.child)}function od(e,t,n,i,o){if(e===null){var l=n.type;return typeof l=="function"&&!Os(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,qp(e,t,l,i,o)):(e=Fi(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:Or,n(a,i)&&e.ref===t.ref)return Tt(e,t,o)}return t.flags|=1,e=qt(l,i),e.ref=t.ref,e.return=t,t.child=e}function qp(e,t,n,i,o){if(e!==null){var l=e.memoizedProps;if(Or(l,i)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=i=l,(e.lanes&o)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Tt(e,t,o)}return ja(e,t,n,i,o)}function Xp(e,t,n){var i=t.pendingProps,o=i.children,l=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(In,Ye),Ye|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(In,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=l!==null?l.baseLanes:n,J(In,Ye),Ye|=i}else l!==null?(i=l.baseLanes|n,t.memoizedState=null):i=n,J(In,Ye),Ye|=i;return Re(e,t,o,n),t.child}function Jp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ja(e,t,n,i,o){var l=We(n)?hn:Pe.current;return l=$n(t,l),_n(t,o),n=Es(e,t,n,i,l,o),i=zs(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(te&&i&&hs(t),t.flags|=1,Re(e,t,n,o),t.child)}function ld(e,t,n,i,o){if(We(n)){var l=!0;no(t)}else l=!1;if(_n(t,o),t.stateNode===null)Oi(e,t),Gp(t,n,i),va(t,n,i,o),i=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var s=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=rt(d):(d=We(n)?hn:Pe.current,d=$n(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==i||s!==d)&&ed(t,a,i,d),Ot=!1;var g=t.memoizedState;a.state=g,ao(t,i,a,o),s=t.memoizedState,c!==i||g!==s||Le.current||Ot?(typeof u=="function"&&(ya(t,n,u,i),s=t.memoizedState),(c=Ot||Zc(t,n,c,i,g,s,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=s),a.props=i,a.state=s,a.context=d,i=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Ep(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:lt(t.type,c),a.props=d,p=t.pendingProps,g=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=rt(s):(s=We(n)?hn:Pe.current,s=$n(t,s));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==p||g!==s)&&ed(t,a,i,s),Ot=!1,g=t.memoizedState,a.state=g,ao(t,i,a,o);var b=t.memoizedState;c!==p||g!==b||Le.current||Ot?(typeof y=="function"&&(ya(t,n,y,i),b=t.memoizedState),(d=Ot||Zc(t,n,d,i,g,b,s)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,b,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,b,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=b),a.props=i,a.state=b,a.context=s,i=d):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),i=!1)}return wa(e,t,n,i,l,o)}function wa(e,t,n,i,o,l){Jp(e,t);var a=(t.flags&128)!==0;if(!i&&!a)return o&&$c(t,n,!1),Tt(e,t,l);i=t.stateNode,Yg.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&a?(t.child=Gn(t,e.child,null,l),t.child=Gn(t,null,c,l)):Re(e,t,c,l),t.memoizedState=i.state,o&&$c(t,n,!0),t.child}function Zp(e){var t=e.stateNode;t.pendingContext?Hc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hc(e,t.context,!1),ws(e,t.containerInfo)}function ad(e,t,n,i,o){return Un(),gs(o),t.flags|=256,Re(e,t,n,i),t.child}var Sa={dehydrated:null,treeContext:null,retryLane:0};function Ca(e){return{baseLanes:e,cachePool:null,transitions:null}}function ef(e,t,n){var i=t.pendingProps,o=re.current,l=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(re,o&1),e===null)return ga(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=i.children,e=i.fallback,l?(i=t.mode,l=t.child,a={mode:"hidden",children:a},!(i&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Oo(a,i,0,null),e=fn(e,i,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ca(n),t.memoizedState=Sa,e):Ts(t,a));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return Hg(e,t,a,i,c,o,n);if(l){l=i.fallback,a=t.mode,o=e.child,c=o.sibling;var s={mode:"hidden",children:i.children};return!(a&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=s,t.deletions=null):(i=qt(o,s),i.subtreeFlags=o.subtreeFlags&14680064),c!==null?l=qt(c,l):(l=fn(l,a,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,a=e.child.memoizedState,a=a===null?Ca(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Sa,i}return l=e.child,e=l.sibling,i=qt(l,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ts(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bi(e,t,n,i){return i!==null&&gs(i),Gn(t,e.child,null,n),e=Ts(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hg(e,t,n,i,o,l,a){if(n)return t.flags&256?(t.flags&=-257,i=El(Error(B(422))),bi(e,t,a,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=i.fallback,o=t.mode,i=Oo({mode:"visible",children:i.children},o,0,null),l=fn(l,o,a,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,t.mode&1&&Gn(t,e.child,null,a),t.child.memoizedState=Ca(a),t.memoizedState=Sa,l);if(!(t.mode&1))return bi(e,t,a,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var c=i.dgst;return i=c,l=Error(B(419)),i=El(l,i,void 0),bi(e,t,a,i)}if(c=(a&e.childLanes)!==0,Oe||c){if(i=ye,i!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|a)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Dt(e,o),dt(i,e,o,-1))}return Is(),i=El(Error(B(421))),bi(e,t,a,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=r0.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,He=Ut(o.nextSibling),$e=t,te=!0,st=null,e!==null&&(Ze[et++]=St,Ze[et++]=Ct,Ze[et++]=mn,St=e.id,Ct=e.overflow,mn=t),t=Ts(t,i.children),t.flags|=4096,t)}function sd(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),xa(e.return,t,n)}function zl(e,t,n,i,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=n,l.tailMode=o)}function tf(e,t,n){var i=t.pendingProps,o=i.revealOrder,l=i.tail;if(Re(e,t,i.children,n),i=re.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sd(e,n,t);else if(e.tag===19)sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(J(re,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),zl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&so(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}zl(t,!0,n,null,l);break;case"together":zl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $g(e,t,n){switch(t.tag){case 3:Zp(t),Un();break;case 5:zp(t);break;case 1:We(t.type)&&no(t);break;case 4:ws(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;J(oo,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(J(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?ef(e,t,n):(J(re,re.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);J(re,re.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return tf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(re,re.current),i)break;return null;case 22:case 23:return t.lanes=0,Xp(e,t,n)}return Tt(e,t,n)}var nf,ka,rf,of;nf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ka=function(){};rf=function(e,t,n,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,un(yt.current);var l=null;switch(n){case"input":o=Gl(e,o),i=Gl(e,i),l=[];break;case"select":o=oe({},o,{value:void 0}),i=oe({},i,{value:void 0}),l=[];break;case"textarea":o=ql(e,o),i=ql(e,i),l=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=eo)}Jl(n,i);var a;n=null;for(d in o)if(!i.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var c=o[d];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Tr.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in i){var s=i[d];if(c=o!=null?o[d]:void 0,i.hasOwnProperty(d)&&s!==c&&(s!=null||c!=null))if(d==="style")if(c){for(a in c)!c.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&c[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(l||(l=[]),l.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,c=c?c.__html:void 0,s!=null&&c!==s&&(l=l||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&Z("scroll",e),l||c===s||(l=[])):(l=l||[]).push(d,s))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};of=function(e,t,n,i){n!==i&&(t.flags|=4)};function dr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Ug(e,t,n){var i=t.pendingProps;switch(ms(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return We(t.type)&&to(),Be(t),null;case 3:return i=t.stateNode,Kn(),ee(Le),ee(Pe),Cs(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(Aa(st),st=null))),ka(e,t),Be(t),null;case 5:Ss(t);var o=un(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)rf(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(B(166));return Be(t),null}if(e=un(yt.current),yi(t)){i=t.stateNode,n=t.type;var l=t.memoizedProps;switch(i[gt]=t,i[Fr]=l,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",i),Z("close",i);break;case"iframe":case"object":case"embed":Z("load",i);break;case"video":case"audio":for(o=0;o<yr.length;o++)Z(yr[o],i);break;case"source":Z("error",i);break;case"img":case"image":case"link":Z("error",i),Z("load",i);break;case"details":Z("toggle",i);break;case"input":xc(i,l),Z("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!l.multiple},Z("invalid",i);break;case"textarea":vc(i,l),Z("invalid",i)}Jl(n,l),o=null;for(var a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="children"?typeof c=="string"?i.textContent!==c&&(l.suppressHydrationWarning!==!0&&xi(i.textContent,c,e),o=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&xi(i.textContent,c,e),o=["children",""+c]):Tr.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&Z("scroll",i)}switch(n){case"input":ci(i),yc(i,l,!0);break;case"textarea":ci(i),bc(i);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(i.onclick=eo)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ru(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=a.createElement(n,{is:i.is}):(e=a.createElement(n),n==="select"&&(a=e,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):e=a.createElementNS(e,n),e[gt]=t,e[Fr]=i,nf(e,t,!1,!1),t.stateNode=e;e:{switch(a=Zl(n,i),n){case"dialog":Z("cancel",e),Z("close",e),o=i;break;case"iframe":case"object":case"embed":Z("load",e),o=i;break;case"video":case"audio":for(o=0;o<yr.length;o++)Z(yr[o],e);o=i;break;case"source":Z("error",e),o=i;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=i;break;case"details":Z("toggle",e),o=i;break;case"input":xc(e,i),o=Gl(e,i),Z("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=oe({},i,{value:void 0}),Z("invalid",e);break;case"textarea":vc(e,i),o=ql(e,i),Z("invalid",e);break;default:o=i}Jl(n,o),c=o;for(l in c)if(c.hasOwnProperty(l)){var s=c[l];l==="style"?Mu(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Au(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Pr(e,s):typeof s=="number"&&Pr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Tr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&Z("scroll",e):s!=null&&es(e,l,s,a))}switch(n){case"input":ci(e),yc(e,i,!1);break;case"textarea":ci(e),bc(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Jt(i.value));break;case"select":e.multiple=!!i.multiple,l=i.value,l!=null?On(e,!!i.multiple,l,!1):i.defaultValue!=null&&On(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=eo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)of(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(B(166));if(n=un(Vr.current),un(yt.current),yi(t)){if(i=t.stateNode,n=t.memoizedProps,i[gt]=t,(l=i.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:xi(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xi(i.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gt]=t,t.stateNode=i}return Be(t),null;case 13:if(ee(re),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&He!==null&&t.mode&1&&!(t.flags&128))wp(),Un(),t.flags|=98560,l=!1;else if(l=yi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(B(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(B(317));l[gt]=t}else Un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),l=!1}else st!==null&&(Aa(st),st=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?ge===0&&(ge=3):Is())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return Kn(),ka(e,t),e===null&&Lr(t.stateNode.containerInfo),Be(t),null;case 10:return vs(t.type._context),Be(t),null;case 17:return We(t.type)&&to(),Be(t),null;case 19:if(ee(re),l=t.memoizedState,l===null)return Be(t),null;if(i=(t.flags&128)!==0,a=l.rendering,a===null)if(i)dr(l,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=so(e),a!==null){for(t.flags|=128,dr(l,!1),i=a.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)l=n,e=i,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(re,re.current&1|2),t.child}e=e.sibling}l.tail!==null&&se()>qn&&(t.flags|=128,i=!0,dr(l,!1),t.lanes=4194304)}else{if(!i)if(e=so(a),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!te)return Be(t),null}else 2*se()-l.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,i=!0,dr(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=se(),t.sibling=null,n=re.current,J(re,i?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return Ms(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Ye&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function Gg(e,t){switch(ms(t),t.tag){case 1:return We(t.type)&&to(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(),ee(Le),ee(Pe),Cs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(ee(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(re),null;case 4:return Kn(),null;case 10:return vs(t.type._context),null;case 22:case 23:return Ms(),null;case 24:return null;default:return null}}var ji=!1,Te=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,P=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){le(e,t,i)}else n.current=null}function Ea(e,t,n){try{n()}catch(i){le(e,t,i)}}var cd=!1;function Qg(e,t){if(ca=Xi,e=cp(),fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,c=-1,s=-1,d=0,u=0,p=e,g=null;t:for(;;){for(var y;p!==n||o!==0&&p.nodeType!==3||(c=a+o),p!==l||i!==0&&p.nodeType!==3||(s=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break t;if(g===n&&++d===o&&(c=a),g===l&&++u===i&&(s=a),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=c===-1||s===-1?null:{start:c,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(da={focusedElem:e,selectionRange:n},Xi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var f=b.memoizedProps,j=b.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?f:lt(t.type,f),j);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(w){le(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return b=cd,cd=!1,b}function Er(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ea(t,n,l)}o=o.next}while(o!==i)}}function Mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function za(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lf(e){var t=e.alternate;t!==null&&(e.alternate=null,lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[Fr],delete t[fa],delete t[Pg],delete t[Rg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function af(e){return e.tag===5||e.tag===3||e.tag===4}function dd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||af(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ba(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=eo));else if(i!==4&&(e=e.child,e!==null))for(Ba(e,t,n),e=e.sibling;e!==null;)Ba(e,t,n),e=e.sibling}function Da(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Da(e,t,n),e=e.sibling;e!==null;)Da(e,t,n),e=e.sibling}var je=null,at=!1;function Mt(e,t,n){for(n=n.child;n!==null;)sf(e,t,n),n=n.sibling}function sf(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(zo,n)}catch{}switch(n.tag){case 5:Te||Mn(n,t);case 6:var i=je,o=at;je=null,Mt(e,t,n),je=i,at=o,je!==null&&(at?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(at?(e=je,n=n.stateNode,e.nodeType===8?bl(e.parentNode,n):e.nodeType===1&&bl(e,n),Mr(e)):bl(je,n.stateNode));break;case 4:i=je,o=at,je=n.stateNode.containerInfo,at=!0,Mt(e,t,n),je=i,at=o;break;case 0:case 11:case 14:case 15:if(!Te&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var l=o,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&Ea(n,t,a),o=o.next}while(o!==i)}Mt(e,t,n);break;case 1:if(!Te&&(Mn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(c){le(n,t,c)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Te=(i=Te)||n.memoizedState!==null,Mt(e,t,n),Te=i):Mt(e,t,n);break;default:Mt(e,t,n)}}function ud(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Kg),t.forEach(function(i){var o=i0.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var l=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:je=c.stateNode,at=!1;break e;case 3:je=c.stateNode.containerInfo,at=!0;break e;case 4:je=c.stateNode.containerInfo,at=!0;break e}c=c.return}if(je===null)throw Error(B(160));sf(l,a,o),je=null,at=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(d){le(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cf(t,e),t=t.sibling}function cf(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),pt(e),i&4){try{Er(3,e,e.return),Mo(3,e)}catch(f){le(e,e.return,f)}try{Er(5,e,e.return)}catch(f){le(e,e.return,f)}}break;case 1:ot(t,e),pt(e),i&512&&n!==null&&Mn(n,n.return);break;case 5:if(ot(t,e),pt(e),i&512&&n!==null&&Mn(n,n.return),e.flags&32){var o=e.stateNode;try{Pr(o,"")}catch(f){le(e,e.return,f)}}if(i&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,c=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&Tu(o,l),Zl(c,a);var d=Zl(c,l);for(a=0;a<s.length;a+=2){var u=s[a],p=s[a+1];u==="style"?Mu(o,p):u==="dangerouslySetInnerHTML"?Au(o,p):u==="children"?Pr(o,p):es(o,u,p,d)}switch(c){case"input":Kl(o,l);break;case"textarea":Pu(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?On(o,!!l.multiple,y,!1):g!==!!l.multiple&&(l.defaultValue!=null?On(o,!!l.multiple,l.defaultValue,!0):On(o,!!l.multiple,l.multiple?[]:"",!1))}o[Fr]=l}catch(f){le(e,e.return,f)}}break;case 6:if(ot(t,e),pt(e),i&4){if(e.stateNode===null)throw Error(B(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(f){le(e,e.return,f)}}break;case 3:if(ot(t,e),pt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(f){le(e,e.return,f)}break;case 4:ot(t,e),pt(e);break;case 13:ot(t,e),pt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(As=se())),i&4&&ud(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(d=Te)||u,ot(t,e),Te=d):ot(t,e),pt(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(P=e,u=e.child;u!==null;){for(p=P=u;P!==null;){switch(g=P,y=g.child,g.tag){case 0:case 11:case 14:case 15:Er(4,g,g.return);break;case 1:Mn(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){i=g,n=g.return;try{t=i,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(f){le(i,n,f)}}break;case 5:Mn(g,g.return);break;case 22:if(g.memoizedState!==null){fd(p);continue}}y!==null?(y.return=g,P=y):fd(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{o=p.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,c.style.display=Nu("display",a))}catch(f){le(e,e.return,f)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(f){le(e,e.return,f)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ot(t,e),pt(e),i&4&&ud(e);break;case 21:break;default:ot(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(af(n)){var i=n;break e}n=n.return}throw Error(B(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(Pr(o,""),i.flags&=-33);var l=dd(e);Da(e,l,o);break;case 3:case 4:var a=i.stateNode.containerInfo,c=dd(e);Ba(e,c,a);break;default:throw Error(B(161))}}catch(s){le(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qg(e,t,n){P=e,df(e)}function df(e,t,n){for(var i=(e.mode&1)!==0;P!==null;){var o=P,l=o.child;if(o.tag===22&&i){var a=o.memoizedState!==null||ji;if(!a){var c=o.alternate,s=c!==null&&c.memoizedState!==null||Te;c=ji;var d=Te;if(ji=a,(Te=s)&&!d)for(P=o;P!==null;)a=P,s=a.child,a.tag===22&&a.memoizedState!==null?hd(o):s!==null?(s.return=a,P=s):hd(o);for(;l!==null;)P=l,df(l),l=l.sibling;P=o,ji=c,Te=d}pd(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,P=l):pd(e)}}function pd(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||Mo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Te)if(n===null)i.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&qc(t,l,i);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qc(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Mr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Te||t.flags&512&&za(t)}catch(g){le(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function fd(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function hd(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mo(4,t)}catch(s){le(t,n,s)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(s){le(t,o,s)}}var l=t.return;try{za(t)}catch(s){le(t,l,s)}break;case 5:var a=t.return;try{za(t)}catch(s){le(t,a,s)}}}catch(s){le(t,t.return,s)}if(t===e){P=null;break}var c=t.sibling;if(c!==null){c.return=t.return,P=c;break}P=t.return}}var Xg=Math.ceil,po=Rt.ReactCurrentDispatcher,Ps=Rt.ReactCurrentOwner,nt=Rt.ReactCurrentBatchConfig,H=0,ye=null,pe=null,Ce=0,Ye=0,In=tn(0),ge=0,Ur=null,xn=0,Io=0,Rs=0,zr=null,Ie=null,As=0,qn=1/0,jt=null,fo=!1,Ta=null,Kt=null,wi=!1,_t=null,ho=0,Br=0,Pa=null,Li=-1,Wi=0;function Ae(){return H&6?se():Li!==-1?Li:Li=se()}function Qt(e){return e.mode&1?H&2&&Ce!==0?Ce&-Ce:Ng.transition!==null?(Wi===0&&(Wi=Gu()),Wi):(e=K,e!==0||(e=window.event,e=e===void 0?16:ep(e.type)),e):1}function dt(e,t,n,i){if(50<Br)throw Br=0,Pa=null,Error(B(185));ei(e,n,i),(!(H&2)||e!==ye)&&(e===ye&&(!(H&2)&&(Io|=n),ge===4&&Wt(e,Ce)),Fe(e,i),n===1&&H===0&&!(t.mode&1)&&(qn=se()+500,Ro&&nn()))}function Fe(e,t){var n=e.callbackNode;Nm(e,t);var i=qi(e,e===ye?Ce:0);if(i===0)n!==null&&Sc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Sc(n),t===1)e.tag===0?Ag(md.bind(null,e)):vp(md.bind(null,e)),Dg(function(){!(H&6)&&nn()}),n=null;else{switch(Ku(i)){case 1:n=os;break;case 4:n=$u;break;case 16:n=Qi;break;case 536870912:n=Uu;break;default:n=Qi}n=yf(n,uf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uf(e,t){if(Li=-1,Wi=0,H&6)throw Error(B(327));var n=e.callbackNode;if(Vn()&&e.callbackNode!==n)return null;var i=qi(e,e===ye?Ce:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=mo(e,i);else{t=i;var o=H;H|=2;var l=ff();(ye!==e||Ce!==t)&&(jt=null,qn=se()+500,pn(e,t));do try{e0();break}catch(c){pf(e,c)}while(!0);ys(),po.current=l,H=o,pe!==null?t=0:(ye=null,Ce=0,t=ge)}if(t!==0){if(t===2&&(o=ia(e),o!==0&&(i=o,t=Ra(e,o))),t===1)throw n=Ur,pn(e,0),Wt(e,i),Fe(e,se()),n;if(t===6)Wt(e,i);else{if(o=e.current.alternate,!(i&30)&&!Jg(o)&&(t=mo(e,i),t===2&&(l=ia(e),l!==0&&(i=l,t=Ra(e,l))),t===1))throw n=Ur,pn(e,0),Wt(e,i),Fe(e,se()),n;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(B(345));case 2:sn(e,Ie,jt);break;case 3:if(Wt(e,i),(i&130023424)===i&&(t=As+500-se(),10<t)){if(qi(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=pa(sn.bind(null,e,Ie,jt),t);break}sn(e,Ie,jt);break;case 4:if(Wt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var a=31-ct(i);l=1<<a,a=t[a],a>o&&(o=a),i&=~l}if(i=o,i=se()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Xg(i/1960))-i,10<i){e.timeoutHandle=pa(sn.bind(null,e,Ie,jt),i);break}sn(e,Ie,jt);break;case 5:sn(e,Ie,jt);break;default:throw Error(B(329))}}}return Fe(e,se()),e.callbackNode===n?uf.bind(null,e):null}function Ra(e,t){var n=zr;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=mo(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Aa(t)),e}function Aa(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Jg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],l=o.getSnapshot;o=o.value;try{if(!ut(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~Rs,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),i=1<<n;e[n]=-1,t&=~i}}function md(e){if(H&6)throw Error(B(327));Vn();var t=qi(e,0);if(!(t&1))return Fe(e,se()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var i=ia(e);i!==0&&(t=i,n=Ra(e,i))}if(n===1)throw n=Ur,pn(e,0),Wt(e,t),Fe(e,se()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Ie,jt),Fe(e,se()),null}function Ns(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(qn=se()+500,Ro&&nn())}}function yn(e){_t!==null&&_t.tag===0&&!(H&6)&&Vn();var t=H;H|=1;var n=nt.transition,i=K;try{if(nt.transition=null,K=1,e)return e()}finally{K=i,nt.transition=n,H=t,!(H&6)&&nn()}}function Ms(){Ye=In.current,ee(In)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bg(n)),pe!==null)for(n=pe.return;n!==null;){var i=n;switch(ms(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&to();break;case 3:Kn(),ee(Le),ee(Pe),Cs();break;case 5:Ss(i);break;case 4:Kn();break;case 13:ee(re);break;case 19:ee(re);break;case 10:vs(i.type._context);break;case 22:case 23:Ms()}n=n.return}if(ye=e,pe=e=qt(e.current,null),Ce=Ye=t,ge=0,Ur=null,Rs=Io=xn=0,Ie=zr=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,l=n.pending;if(l!==null){var a=l.next;l.next=o,i.next=a}n.pending=i}dn=null}return e}function pf(e,t){do{var n=pe;try{if(ys(),Mi.current=uo,co){for(var i=ie.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}co=!1}if(gn=0,xe=me=ie=null,kr=!1,Yr=0,Ps.current=null,n===null||n.return===null){ge=1,Ur=t,pe=null;break}e:{var l=e,a=n.return,c=n,s=t;if(t=Ce,c.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,u=c,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=nd(a);if(y!==null){y.flags&=-257,rd(y,a,c,l,t),y.mode&1&&td(l,d,t),t=y,s=d;var b=t.updateQueue;if(b===null){var f=new Set;f.add(s),t.updateQueue=f}else b.add(s);break e}else{if(!(t&1)){td(l,d,t),Is();break e}s=Error(B(426))}}else if(te&&c.mode&1){var j=nd(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),rd(j,a,c,l,t),gs(Qn(s,c));break e}}l=s=Qn(s,c),ge!==4&&(ge=2),zr===null?zr=[l]:zr.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=Kp(l,s,t);Qc(l,h);break e;case 1:c=s;var m=l.type,x=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Kt===null||!Kt.has(x)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Qp(l,c,t);Qc(l,w);break e}}l=l.return}while(l!==null)}mf(n)}catch(S){t=S,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function ff(){var e=po.current;return po.current=uo,e===null?uo:e}function Is(){(ge===0||ge===3||ge===2)&&(ge=4),ye===null||!(xn&268435455)&&!(Io&268435455)||Wt(ye,Ce)}function mo(e,t){var n=H;H|=2;var i=ff();(ye!==e||Ce!==t)&&(jt=null,pn(e,t));do try{Zg();break}catch(o){pf(e,o)}while(!0);if(ys(),H=n,po.current=i,pe!==null)throw Error(B(261));return ye=null,Ce=0,ge}function Zg(){for(;pe!==null;)hf(pe)}function e0(){for(;pe!==null&&!km();)hf(pe)}function hf(e){var t=xf(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?mf(e):pe=t,Ps.current=null}function mf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gg(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,pe=null;return}}else if(n=Ug(n,t,Ye),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ge===0&&(ge=5)}function sn(e,t,n){var i=K,o=nt.transition;try{nt.transition=null,K=1,t0(e,t,n,i)}finally{nt.transition=o,K=i}return null}function t0(e,t,n,i){do Vn();while(_t!==null);if(H&6)throw Error(B(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Mm(e,l),e===ye&&(pe=ye=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wi||(wi=!0,yf(Qi,function(){return Vn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=nt.transition,nt.transition=null;var a=K;K=1;var c=H;H|=4,Ps.current=null,Qg(e,n),cf(n,e),jg(da),Xi=!!ca,da=ca=null,e.current=n,qg(n),Em(),H=c,K=a,nt.transition=l}else e.current=n;if(wi&&(wi=!1,_t=e,ho=o),l=e.pendingLanes,l===0&&(Kt=null),Dm(n.stateNode),Fe(e,se()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(fo)throw fo=!1,e=Ta,Ta=null,e;return ho&1&&e.tag!==0&&Vn(),l=e.pendingLanes,l&1?e===Pa?Br++:(Br=0,Pa=e):Br=0,nn(),null}function Vn(){if(_t!==null){var e=Ku(ho),t=nt.transition,n=K;try{if(nt.transition=null,K=16>e?16:e,_t===null)var i=!1;else{if(e=_t,_t=null,ho=0,H&6)throw Error(B(331));var o=H;for(H|=4,P=e.current;P!==null;){var l=P,a=l.child;if(P.flags&16){var c=l.deletions;if(c!==null){for(var s=0;s<c.length;s++){var d=c[s];for(P=d;P!==null;){var u=P;switch(u.tag){case 0:case 11:case 15:Er(8,u,l)}var p=u.child;if(p!==null)p.return=u,P=p;else for(;P!==null;){u=P;var g=u.sibling,y=u.return;if(lf(u),u===d){P=null;break}if(g!==null){g.return=y,P=g;break}P=y}}}var b=l.alternate;if(b!==null){var f=b.child;if(f!==null){b.child=null;do{var j=f.sibling;f.sibling=null,f=j}while(f!==null)}}P=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,P=a;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Er(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,P=h;break e}P=l.return}}var m=e.current;for(P=m;P!==null;){a=P;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,P=x;else e:for(a=m;P!==null;){if(c=P,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Mo(9,c)}}catch(S){le(c,c.return,S)}if(c===a){P=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,P=w;break e}P=c.return}}if(H=o,nn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(zo,e)}catch{}i=!0}return i}finally{K=n,nt.transition=t}}return!1}function gd(e,t,n){t=Qn(n,t),t=Kp(e,t,1),e=Gt(e,t,1),t=Ae(),e!==null&&(ei(e,1,t),Fe(e,t))}function le(e,t,n){if(e.tag===3)gd(e,e,n);else for(;t!==null;){if(t.tag===3){gd(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Kt===null||!Kt.has(i))){e=Qn(n,e),e=Qp(t,e,1),t=Gt(t,e,1),e=Ae(),t!==null&&(ei(t,1,e),Fe(t,e));break}}t=t.return}}function n0(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Ce&n)===n&&(ge===4||ge===3&&(Ce&130023424)===Ce&&500>se()-As?pn(e,0):Rs|=n),Fe(e,t)}function gf(e,t){t===0&&(e.mode&1?(t=pi,pi<<=1,!(pi&130023424)&&(pi=4194304)):t=1);var n=Ae();e=Dt(e,t),e!==null&&(ei(e,t,n),Fe(e,n))}function r0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function i0(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(B(314))}i!==null&&i.delete(t),gf(e,n)}var xf;xf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,$g(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,te&&t.flags&1048576&&bp(t,io,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Oi(e,t),e=t.pendingProps;var o=$n(t,Pe.current);_n(t,n),o=Es(null,t,i,e,o,n);var l=zs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(i)?(l=!0,no(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,js(t),o.updater=No,t.stateNode=o,o._reactInternals=t,va(t,i,e,n),t=wa(null,t,i,!0,l,n)):(t.tag=0,te&&l&&hs(t),Re(null,t,o,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Oi(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=l0(i),e=lt(i,e),o){case 0:t=ja(null,t,i,e,n);break e;case 1:t=ld(null,t,i,e,n);break e;case 11:t=id(null,t,i,e,n);break e;case 14:t=od(null,t,i,lt(i.type,e),n);break e}throw Error(B(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:lt(i,o),ja(e,t,i,o,n);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:lt(i,o),ld(e,t,i,o,n);case 3:e:{if(Zp(t),e===null)throw Error(B(387));i=t.pendingProps,l=t.memoizedState,o=l.element,Ep(e,t),ao(t,i,null,n);var a=t.memoizedState;if(i=a.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Qn(Error(B(423)),t),t=ad(e,t,i,n,o);break e}else if(i!==o){o=Qn(Error(B(424)),t),t=ad(e,t,i,n,o);break e}else for(He=Ut(t.stateNode.containerInfo.firstChild),$e=t,te=!0,st=null,n=Cp(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),i===o){t=Tt(e,t,n);break e}Re(e,t,i,n)}t=t.child}return t;case 5:return zp(t),e===null&&ga(t),i=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,a=o.children,ua(i,o)?a=null:l!==null&&ua(i,l)&&(t.flags|=32),Jp(e,t),Re(e,t,a,n),t.child;case 6:return e===null&&ga(t),null;case 13:return ef(e,t,n);case 4:return ws(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Gn(t,null,i,n):Re(e,t,i,n),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:lt(i,o),id(e,t,i,o,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value,J(oo,i._currentValue),i._currentValue=a,l!==null)if(ut(l.value,a)){if(l.children===o.children&&!Le.current){t=Tt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){a=l.child;for(var s=c.firstContext;s!==null;){if(s.context===i){if(l.tag===1){s=kt(-1,n&-n),s.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?s.next=s:(s.next=u.next,u.next=s),d.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),xa(l.return,n,t),c.lanes|=n;break}s=s.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(B(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),xa(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}Re(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,_n(t,n),o=rt(o),i=i(o),t.flags|=1,Re(e,t,i,n),t.child;case 14:return i=t.type,o=lt(i,t.pendingProps),o=lt(i.type,o),od(e,t,i,o,n);case 15:return qp(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:lt(i,o),Oi(e,t),t.tag=1,We(i)?(e=!0,no(t)):e=!1,_n(t,n),Gp(t,i,o),va(t,i,o,n),wa(null,t,i,!0,e,n);case 19:return tf(e,t,n);case 22:return Xp(e,t,n)}throw Error(B(156,t.tag))};function yf(e,t){return Hu(e,t)}function o0(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,i){return new o0(e,t,n,i)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function l0(e){if(typeof e=="function")return Os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ns)return 11;if(e===rs)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fi(e,t,n,i,o,l){var a=2;if(i=e,typeof e=="function")Os(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case En:return fn(n.children,o,l,t);case ts:a=8,o|=8;break;case Yl:return e=tt(12,n,t,o|2),e.elementType=Yl,e.lanes=l,e;case Hl:return e=tt(13,n,t,o),e.elementType=Hl,e.lanes=l,e;case $l:return e=tt(19,n,t,o),e.elementType=$l,e.lanes=l,e;case zu:return Oo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ku:a=10;break e;case Eu:a=9;break e;case ns:a=11;break e;case rs:a=14;break e;case It:a=16,i=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=tt(a,n,t,o),t.elementType=e,t.type=i,t.lanes=l,t}function fn(e,t,n,i){return e=tt(7,e,i,t),e.lanes=n,e}function Oo(e,t,n,i){return e=tt(22,e,i,t),e.elementType=zu,e.lanes=n,e.stateNode={isHidden:!1},e}function Bl(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function Dl(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function a0(e,t,n,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ls(e,t,n,i,o,l,a,c,s){return e=new a0(e,t,n,c,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=tt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},js(l),e}function s0(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function vf(e){if(!e)return Zt;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(We(n))return yp(e,n,t)}return t}function bf(e,t,n,i,o,l,a,c,s){return e=Ls(n,i,!0,e,o,l,a,c,s),e.context=vf(null),n=e.current,i=Ae(),o=Qt(n),l=kt(i,o),l.callback=t??null,Gt(n,l,o),e.current.lanes=o,ei(e,o,i),Fe(e,i),e}function Lo(e,t,n,i){var o=t.current,l=Ae(),a=Qt(o);return n=vf(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(l,a),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Gt(o,t,a),e!==null&&(dt(e,o,a,l),Ni(e,o,a)),a}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ws(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function c0(){return null}var jf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fs(e){this._internalRoot=e}Wo.prototype.render=Fs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Lo(e,t,null,null)};Wo.prototype.unmount=Fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){Lo(null,e,null,null)}),t[Bt]=null}};function Wo(e){this._internalRoot=e}Wo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Zu(e)}};function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yd(){}function d0(e,t,n,i,o){if(o){if(typeof i=="function"){var l=i;i=function(){var d=go(a);l.call(d)}}var a=bf(t,i,e,0,null,!1,!1,"",yd);return e._reactRootContainer=a,e[Bt]=a.current,Lr(e.nodeType===8?e.parentNode:e),yn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var c=i;i=function(){var d=go(s);c.call(d)}}var s=Ls(e,0,!1,null,null,!1,!1,"",yd);return e._reactRootContainer=s,e[Bt]=s.current,Lr(e.nodeType===8?e.parentNode:e),yn(function(){Lo(t,s,n,i)}),s}function _o(e,t,n,i,o){var l=n._reactRootContainer;if(l){var a=l;if(typeof o=="function"){var c=o;o=function(){var s=go(a);c.call(s)}}Lo(t,a,e,o)}else a=d0(n,t,e,o,i);return go(a)}Qu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xr(t.pendingLanes);n!==0&&(ls(t,n|1),Fe(t,se()),!(H&6)&&(qn=se()+500,nn()))}break;case 13:yn(function(){var i=Dt(e,1);if(i!==null){var o=Ae();dt(i,e,1,o)}}),Ws(e,1)}};as=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Ae();dt(t,e,134217728,n)}Ws(e,134217728)}};qu=function(e){if(e.tag===13){var t=Qt(e),n=Dt(e,t);if(n!==null){var i=Ae();dt(n,e,t,i)}Ws(e,t)}};Xu=function(){return K};Ju=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};ta=function(e,t,n){switch(t){case"input":if(Kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=Po(i);if(!o)throw Error(B(90));Du(i),Kl(i,o)}}}break;case"textarea":Pu(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};Lu=Ns;Wu=yn;var u0={usingClientEntryPoint:!1,Events:[ni,Tn,Po,Iu,Ou,Ns]},ur={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p0={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vu(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||c0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{zo=Si.inject(p0),xt=Si}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u0;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_s(t))throw Error(B(200));return s0(e,t,null,n)};Ke.createRoot=function(e,t){if(!_s(e))throw Error(B(299));var n=!1,i="",o=jf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ls(e,1,!1,null,null,n,!1,i,o),e[Bt]=t.current,Lr(e.nodeType===8?e.parentNode:e),new Fs(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Vu(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return yn(e)};Ke.hydrate=function(e,t,n){if(!Fo(t))throw Error(B(200));return _o(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!_s(e))throw Error(B(405));var i=n!=null&&n.hydratedSources||null,o=!1,l="",a=jf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=bf(t,null,e,1,n??null,o,!1,l,a),e[Bt]=t.current,Lr(e),i)for(e=0;e<i.length;e++)n=i[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Wo(t)};Ke.render=function(e,t,n){if(!Fo(t))throw Error(B(200));return _o(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(B(40));return e._reactRootContainer?(yn(function(){_o(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};Ke.unstable_batchedUpdates=Ns;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Fo(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return _o(e,t,n,!1,i)};Ke.version="18.3.1-next-f1338f8080-20240426";function wf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wf)}catch(e){console.error(e)}}wf(),ju.exports=Ke;var Sf=ju.exports,vd=Sf;_l.createRoot=vd.createRoot,_l.hydrateRoot=vd.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Gr.apply(this,arguments)}var Vt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Vt||(Vt={}));const bd="popstate";function f0(e){e===void 0&&(e={});function t(i,o){let{pathname:l,search:a,hash:c}=i.location;return Na("",{pathname:l,search:a,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:xo(o)}return m0(t,n,null,e)}function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Cf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function h0(){return Math.random().toString(36).substr(2,8)}function jd(e,t){return{usr:e.state,key:e.key,idx:t}}function Na(e,t,n,i){return n===void 0&&(n=null),Gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tr(t):t,{state:n,key:t&&t.key||i||h0()})}function xo(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function tr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function m0(e,t,n,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,a=o.history,c=Vt.Pop,s=null,d=u();d==null&&(d=0,a.replaceState(Gr({},a.state,{idx:d}),""));function u(){return(a.state||{idx:null}).idx}function p(){c=Vt.Pop;let j=u(),h=j==null?null:j-d;d=j,s&&s({action:c,location:f.location,delta:h})}function g(j,h){c=Vt.Push;let m=Na(f.location,j,h);d=u()+1;let x=jd(m,d),w=f.createHref(m);try{a.pushState(x,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(w)}l&&s&&s({action:c,location:f.location,delta:1})}function y(j,h){c=Vt.Replace;let m=Na(f.location,j,h);d=u();let x=jd(m,d),w=f.createHref(m);a.replaceState(x,"",w),l&&s&&s({action:c,location:f.location,delta:0})}function b(j){let h=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof j=="string"?j:xo(j);return m=m.replace(/ $/,"%20"),ce(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let f={get action(){return c},get location(){return e(o,a)},listen(j){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(bd,p),s=j,()=>{o.removeEventListener(bd,p),s=null}},createHref(j){return t(o,j)},createURL:b,encodeLocation(j){let h=b(j);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:y,go(j){return a.go(j)}};return f}var wd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wd||(wd={}));function g0(e,t,n){return n===void 0&&(n="/"),x0(e,t,n)}function x0(e,t,n,i){let o=typeof t=="string"?tr(t):t,l=Vs(o.pathname||"/",n);if(l==null)return null;let a=kf(e);y0(a);let c=null;for(let s=0;c==null&&s<a.length;++s){let d=T0(l);c=z0(a[s],d)}return c}function kf(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let o=(l,a,c)=>{let s={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};s.relativePath.startsWith("/")&&(ce(s.relativePath.startsWith(i),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(i.length));let d=Xt([i,s.relativePath]),u=n.concat(s);l.children&&l.children.length>0&&(ce(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),kf(l.children,t,u,d)),!(l.path==null&&!l.index)&&t.push({path:d,score:k0(d,l.index),routesMeta:u})};return e.forEach((l,a)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))o(l,a);else for(let s of Ef(l.path))o(l,a,s)}),t}function Ef(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let a=Ef(i.join("/")),c=[];return c.push(...a.map(s=>s===""?l:[l,s].join("/"))),o&&c.push(...a),c.map(s=>e.startsWith("/")&&s===""?"/":s)}function y0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:E0(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const v0=/^:[\w-]+$/,b0=3,j0=2,w0=1,S0=10,C0=-2,Sd=e=>e==="*";function k0(e,t){let n=e.split("/"),i=n.length;return n.some(Sd)&&(i+=C0),t&&(i+=j0),n.filter(o=>!Sd(o)).reduce((o,l)=>o+(v0.test(l)?b0:l===""?w0:S0),i)}function E0(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function z0(e,t,n){let{routesMeta:i}=e,o={},l="/",a=[];for(let c=0;c<i.length;++c){let s=i[c],d=c===i.length-1,u=l==="/"?t:t.slice(l.length)||"/",p=B0({path:s.relativePath,caseSensitive:s.caseSensitive,end:d},u),g=s.route;if(!p)return null;Object.assign(o,p.params),a.push({params:o,pathname:Xt([l,p.pathname]),pathnameBase:N0(Xt([l,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(l=Xt([l,p.pathnameBase]))}return a}function B0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=D0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],a=l.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:i.reduce((d,u,p)=>{let{paramName:g,isOptional:y}=u;if(g==="*"){let f=c[p]||"";a=l.slice(0,l.length-f.length).replace(/(.)\/+$/,"$1")}const b=c[p];return y&&!b?d[g]=void 0:d[g]=(b||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:a,pattern:e}}function D0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Cf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,s)=>(i.push({paramName:c,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function T0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Cf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function P0(e,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?tr(e):e;return{pathname:n?n.startsWith("/")?n:R0(n,t):t,search:M0(i),hash:I0(o)}}function R0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Tl(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function A0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ys(e,t){let n=A0(e);return t?n.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Hs(e,t,n,i){i===void 0&&(i=!1);let o;typeof e=="string"?o=tr(e):(o=Gr({},e),ce(!o.pathname||!o.pathname.includes("?"),Tl("?","pathname","search",o)),ce(!o.pathname||!o.pathname.includes("#"),Tl("#","pathname","hash",o)),ce(!o.search||!o.search.includes("#"),Tl("#","search","hash",o)));let l=e===""||o.pathname==="",a=l?"/":o.pathname,c;if(a==null)c=n;else{let p=t.length-1;if(!i&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),p-=1;o.pathname=g.join("/")}c=p>=0?t[p]:"/"}let s=P0(o,c),d=a&&a!=="/"&&a.endsWith("/"),u=(l||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(d||u)&&(s.pathname+="/"),s}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),N0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,I0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function O0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zf=["post","put","patch","delete"];new Set(zf);const L0=["get",...zf];new Set(L0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kr(){return Kr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Kr.apply(this,arguments)}const $s=v.createContext(null),W0=v.createContext(null),rn=v.createContext(null),Vo=v.createContext(null),At=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Bf=v.createContext(null);function F0(e,t){let{relative:n}=t===void 0?{}:t;nr()||ce(!1);let{basename:i,navigator:o}=v.useContext(rn),{hash:l,pathname:a,search:c}=Tf(e,{relative:n}),s=a;return i!=="/"&&(s=a==="/"?i:Xt([i,a])),o.createHref({pathname:s,search:c,hash:l})}function nr(){return v.useContext(Vo)!=null}function on(){return nr()||ce(!1),v.useContext(Vo).location}function Df(e){v.useContext(rn).static||v.useLayoutEffect(e)}function Us(){let{isDataRoute:e}=v.useContext(At);return e?ex():_0()}function _0(){nr()||ce(!1);let e=v.useContext($s),{basename:t,future:n,navigator:i}=v.useContext(rn),{matches:o}=v.useContext(At),{pathname:l}=on(),a=JSON.stringify(Ys(o,n.v7_relativeSplatPath)),c=v.useRef(!1);return Df(()=>{c.current=!0}),v.useCallback(function(d,u){if(u===void 0&&(u={}),!c.current)return;if(typeof d=="number"){i.go(d);return}let p=Hs(d,JSON.parse(a),l,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Xt([t,p.pathname])),(u.replace?i.replace:i.push)(p,u.state,u)},[t,i,a,l,e])}function V0(){let{matches:e}=v.useContext(At),t=e[e.length-1];return t?t.params:{}}function Tf(e,t){let{relative:n}=t===void 0?{}:t,{future:i}=v.useContext(rn),{matches:o}=v.useContext(At),{pathname:l}=on(),a=JSON.stringify(Ys(o,i.v7_relativeSplatPath));return v.useMemo(()=>Hs(e,JSON.parse(a),l,n==="path"),[e,a,l,n])}function Y0(e,t){return H0(e,t)}function H0(e,t,n,i){nr()||ce(!1);let{navigator:o}=v.useContext(rn),{matches:l}=v.useContext(At),a=l[l.length-1],c=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let d=on(),u;if(t){var p;let j=typeof t=="string"?tr(t):t;s==="/"||(p=j.pathname)!=null&&p.startsWith(s)||ce(!1),u=j}else u=d;let g=u.pathname||"/",y=g;if(s!=="/"){let j=s.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let b=g0(e,{pathname:y}),f=Q0(b&&b.map(j=>Object.assign({},j,{params:Object.assign({},c,j.params),pathname:Xt([s,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?s:Xt([s,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),l,n,i);return t&&f?v.createElement(Vo.Provider,{value:{location:Kr({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Vt.Pop}},f):f}function $0(){let e=Z0(),t=O0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,null)}const U0=v.createElement($0,null);class G0 extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(At.Provider,{value:this.props.routeContext},v.createElement(Bf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function K0(e){let{routeContext:t,match:n,children:i}=e,o=v.useContext($s);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(At.Provider,{value:t},i)}function Q0(e,t,n,i){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=i)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,c=(o=n)==null?void 0:o.errors;if(c!=null){let u=a.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);u>=0||ce(!1),a=a.slice(0,Math.min(a.length,u+1))}let s=!1,d=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<a.length;u++){let p=a[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:g,errors:y}=n,b=p.route.loader&&g[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||b){s=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((u,p,g)=>{let y,b=!1,f=null,j=null;n&&(y=c&&p.route.id?c[p.route.id]:void 0,f=p.route.errorElement||U0,s&&(d<0&&g===0?(tx("route-fallback"),b=!0,j=null):d===g&&(b=!0,j=p.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,g+1)),m=()=>{let x;return y?x=f:b?x=j:p.route.Component?x=v.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=u,v.createElement(K0,{match:p,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?v.createElement(G0,{location:n.location,revalidation:n.revalidation,component:f,error:y,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var Pf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pf||{}),Rf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Rf||{});function q0(e){let t=v.useContext($s);return t||ce(!1),t}function X0(e){let t=v.useContext(W0);return t||ce(!1),t}function J0(e){let t=v.useContext(At);return t||ce(!1),t}function Af(e){let t=J0(),n=t.matches[t.matches.length-1];return n.route.id||ce(!1),n.route.id}function Z0(){var e;let t=v.useContext(Bf),n=X0(),i=Af();return t!==void 0?t:(e=n.errors)==null?void 0:e[i]}function ex(){let{router:e}=q0(Pf.UseNavigateStable),t=Af(Rf.UseNavigateStable),n=v.useRef(!1);return Df(()=>{n.current=!0}),v.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Kr({fromRouteId:t},l)))},[e,t])}const Cd={};function tx(e,t,n){Cd[e]||(Cd[e]=!0)}function nx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function rx(e){let{to:t,replace:n,state:i,relative:o}=e;nr()||ce(!1);let{future:l,static:a}=v.useContext(rn),{matches:c}=v.useContext(At),{pathname:s}=on(),d=Us(),u=Hs(t,Ys(c,l.v7_relativeSplatPath),s,o==="path"),p=JSON.stringify(u);return v.useEffect(()=>d(JSON.parse(p),{replace:n,state:i,relative:o}),[d,p,o,n,i]),null}function Y(e){ce(!1)}function ix(e){let{basename:t="/",children:n=null,location:i,navigationType:o=Vt.Pop,navigator:l,static:a=!1,future:c}=e;nr()&&ce(!1);let s=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:s,navigator:l,static:a,future:Kr({v7_relativeSplatPath:!1},c)}),[s,c,l,a]);typeof i=="string"&&(i=tr(i));let{pathname:u="/",search:p="",hash:g="",state:y=null,key:b="default"}=i,f=v.useMemo(()=>{let j=Vs(u,s);return j==null?null:{location:{pathname:j,search:p,hash:g,state:y,key:b},navigationType:o}},[s,u,p,g,y,b,o]);return f==null?null:v.createElement(rn.Provider,{value:d},v.createElement(Vo.Provider,{children:n,value:f}))}function ox(e){let{children:t,location:n}=e;return Y0(Ma(t),n)}new Promise(()=>{});function Ma(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(i,o)=>{if(!v.isValidElement(i))return;let l=[...t,o];if(i.type===v.Fragment){n.push.apply(n,Ma(i.props.children,l));return}i.type!==Y&&ce(!1),!i.props.index||!i.props.children||ce(!1);let a={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Ma(i.props.children,l)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ia.apply(this,arguments)}function lx(e,t){if(e==null)return{};var n={},i=Object.keys(e),o,l;for(l=0;l<i.length;l++)o=i[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ax(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function sx(e,t){return e.button===0&&(!t||t==="_self")&&!ax(e)}function Oa(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let i=e[n];return t.concat(Array.isArray(i)?i.map(o=>[n,o]):[[n,i]])},[]))}function cx(e,t){let n=Oa(e);return t&&t.forEach((i,o)=>{n.has(o)||t.getAll(o).forEach(l=>{n.append(o,l)})}),n}const dx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ux="6";try{window.__reactRouterVersion=ux}catch{}const px="startTransition",kd=Fl[px];function fx(e){let{basename:t,children:n,future:i,window:o}=e,l=v.useRef();l.current==null&&(l.current=f0({window:o,v5Compat:!0}));let a=l.current,[c,s]=v.useState({action:a.action,location:a.location}),{v7_startTransition:d}=i||{},u=v.useCallback(p=>{d&&kd?kd(()=>s(p)):s(p)},[s,d]);return v.useLayoutEffect(()=>a.listen(u),[a,u]),v.useEffect(()=>nx(i),[i]),v.createElement(ix,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:a,future:i})}const hx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gx=v.forwardRef(function(t,n){let{onClick:i,relative:o,reloadDocument:l,replace:a,state:c,target:s,to:d,preventScrollReset:u,viewTransition:p}=t,g=lx(t,dx),{basename:y}=v.useContext(rn),b,f=!1;if(typeof d=="string"&&mx.test(d)&&(b=d,hx))try{let x=new URL(window.location.href),w=d.startsWith("//")?new URL(x.protocol+d):new URL(d),S=Vs(w.pathname,y);w.origin===x.origin&&S!=null?d=S+w.search+w.hash:f=!0}catch{}let j=F0(d,{relative:o}),h=xx(d,{replace:a,state:c,target:s,preventScrollReset:u,relative:o,viewTransition:p});function m(x){i&&i(x),x.defaultPrevented||h(x)}return v.createElement("a",Ia({},g,{href:b||j,onClick:f||l?i:m,ref:n,target:s}))});var Ed;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ed||(Ed={}));var zd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zd||(zd={}));function xx(e,t){let{target:n,replace:i,state:o,preventScrollReset:l,relative:a,viewTransition:c}=t===void 0?{}:t,s=Us(),d=on(),u=Tf(e,{relative:a});return v.useCallback(p=>{if(sx(p,n)){p.preventDefault();let g=i!==void 0?i:xo(d)===xo(u);s(e,{replace:g,state:o,preventScrollReset:l,relative:a,viewTransition:c})}},[d,s,u,i,o,n,e,l,a,c])}function yx(e){let t=v.useRef(Oa(e)),n=v.useRef(!1),i=on(),o=v.useMemo(()=>cx(i.search,n.current?null:t.current),[i.search]),l=Us(),a=v.useCallback((c,s)=>{const d=Oa(typeof c=="function"?c(o):c);n.current=!0,l("?"+d,s)},[l,o]);return[o,a]}const vx=()=>{const[e,t]=v.useState(!1),[n,i]=v.useState(!1),[o,l]=v.useState(0),[a,c]=v.useState("electric"),s=v.useRef(null);v.useEffect(()=>{const y=()=>{if(s.current){const b=s.current.getBoundingClientRect();l(b.bottom)}};return y(),window.addEventListener("resize",y),window.addEventListener("scroll",y),()=>{window.removeEventListener("resize",y),window.removeEventListener("scroll",y)}},[]);const d=()=>{t(!e),i(!1)},u=y=>{window.innerWidth<=1023&&(y.preventDefault(),i(!n))},p=()=>{t(!1),i(!1),c("electric")},g=()=>{c("electric")};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        /* Mobile Menu Toggle Button */
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff;
          font-size: 1.8rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: color 0.3s ease;
          z-index: 1001;
        }

        .mobile-menu-toggle:hover {
          color: #4a9eff;
        }

        /* Mega Menu Positioning */
        .dropdown-content {
          top: calc(${o}px - 1px) !important;
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .dropdown::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            height: 20px;
            background: transparent;
          }

          .dropdown-content {
            display: none;
            position: fixed;
            left: 0;
            right: 0;
            width: 100%;
            background: #f5f5f5;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            z-index: 999;
            padding: 2rem 3% 3rem 3%;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            min-height: 500px;
          }

          .dropdown:hover .dropdown-content {
            display: flex;
            gap: 3rem;
            animation: megaMenuFadeIn 0.3s ease;
          }

          @keyframes megaMenuFadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .mega-menu-sidebar {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            min-width: 200px;
          }

          .mega-menu-section {
            margin-bottom: 0;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 4px;
          }

          .mega-menu-section:hover {
            background: rgba(0, 0, 0, 0.05);
          }

          .mega-menu-section.active .mega-menu-section-title {
            color: #4a9eff;
          }

          .mega-menu-section-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 0;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: color 0.3s ease;
          }

          .mega-menu-main {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            position: relative;
            overflow: visible;
            min-height: 440px;
          }

          .mega-menu-content-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            transition: opacity 0.4s ease, transform 0.4s ease;
          }

          .mega-menu-content-wrapper.hidden {
            opacity: 0;
            transform: translateX(-20px);
            pointer-events: none;
          }

          .mega-menu-content-wrapper.visible {
            opacity: 1;
            transform: translateX(0);
            pointer-events: auto;
          }

          .mega-menu-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1rem;
            max-width: 100%;
          }

          .mega-menu-item {
            background: transparent;
            border-radius: 0;
            overflow: visible;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
          }

          .mega-menu-item:hover {
            transform: translateY(-3px);
          }

          .mega-menu-title {
            font-size: 0.85rem;
            color: #1a1a1a;
            margin-bottom: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-align: center;
          }

          .mega-menu-image {
            width: 100%;
            height: 150px;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
          }

          .mega-menu-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            padding: 0.5rem;
          }

          .mega-menu-content {
            padding: 0;
            text-align: center;
            background: transparent;
          }

          .mega-menu-link {
            display: block;
            color: #666;
            text-decoration: none;
            font-size: 0.75rem;
            font-weight: 1000;
            letter-spacing: 0.3px;
            text-transform: uppercase;
            transition: all 0.3s ease;
            margin-top: 0.7rem;
            padding-bottom: 1rem;
            text-align: center;
          }

          .mega-menu-link:hover {
            color: #000;
          }
        }

        /* Tablet & Mobile Styles */
        @media (max-width: 1023px) {
          .mobile-menu-toggle {
            display: block;
            position: absolute;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
          }

          .nav-container {
            position: relative;
            min-height: 60px;
          }

          .nav-menu {
            display: ${e?"flex":"none"};
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #252728;
            flex-direction: column;
            padding: 1rem 0;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            max-height: calc(100vh - 80px);
            overflow-y: auto;
          }

          .nav-menu > li {
            width: 100%;
          }

          .nav-menu > li > a {
            padding: 1rem 5%;
            width: 100%;
            text-align: center;
          }

          .dropdown-content {
            position: static !important;
            width: 100% !important;
            max-height: ${n?"3000px":"0"};
            overflow: hidden;
            transition: max-height 0.4s ease, padding 0.4s ease;
            padding: ${n?"1.5rem 3%":"0"} !important;
            background: #1a1a1a;
            box-shadow: none;
            border: none;
            display: block !important;
          }

          .mega-menu-section {
            margin-bottom: 2rem;
          }

          .mega-menu-section:last-child {
            margin-bottom: 0;
          }

          .mega-menu-section-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-align: center;
          }

          .mega-menu-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }

          .mega-menu-item {
            background: rgba(42, 42, 42, 0.5);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .mega-menu-image {
            width: 100%;
            height: 160px;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mega-menu-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            padding: 1rem;
          }

          .mega-menu-content {
            padding: 1.2rem;
            text-align: center;
          }

          .mega-menu-title {
            font-size: 1.1rem;
            color: #fff;
            margin-bottom: 0.5rem;
            font-weight: 600;
            letter-spacing: 1px;
          }

          .mega-menu-link {
            display: inline-block;
            color: #4a9eff;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          .dropdown > a::after {
            content: ' ▼';
            font-size: 0.7rem;
            margin-left: 0.3rem;
            transition: transform 0.3s ease;
            display: inline-block;
          }

          .dropdown.active > a::after {
            transform: rotate(180deg);
          }
        }

        @media (max-width: 767px) {
          .mobile-menu-toggle {
            font-size: 2rem;
          }

          .mega-menu-image {
            height: 140px;
          }

          .mega-menu-content {
            padding: 1rem;
          }

          .mega-menu-title {
            font-size: 1rem;
          }

          .mega-menu-link {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 479px) {
          .mobile-menu-toggle {
            font-size: 1.8rem;
            right: 4%;
          }

          .mega-menu-image {
            height: 130px;
            font-size: 2.5rem;
          }

          .mega-menu-content {
            padding: 0.8rem;
          }

          .mega-menu-title {
            font-size: 0.95rem;
          }

          .mega-menu-link {
            font-size: 0.75rem;
          }
        }

        /* Logo Styles */
        .logo-text {
          font-size: 1.5rem;
          font-weight: 300;
          color: #fff;
          text-decoration: none;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .logo-text:hover {
t          color: #4a9eff;
          text-shadow: 0 0 20px rgba(74, 158, 255, 0.5);
        }

        @media (max-width: 1023px) {
          .logo-text {
            font-size: 1.8rem;
            letter-spacing: 6px;
          }
        }

        @media (max-width: 479px) {
          .logo-text {
            font-size: 1.4rem;
            letter-spacing: 4px;
          }
        }
      `}),r.jsx("nav",{ref:s,children:r.jsxs("div",{className:"nav-container",children:[r.jsx("a",{href:"/",className:"logo-text",onClick:p,children:"Evergreen Motors"}),r.jsx("button",{className:"mobile-menu-toggle",onClick:d,"aria-label":"Toggle menu","aria-expanded":e,children:e?"✕":"☰"}),r.jsxs("ul",{className:"nav-menu",children:[r.jsxs("li",{className:`dropdown ${n?"active":""}`,onMouseEnter:g,children:[r.jsx("a",{href:"/models",onClick:u,children:"Models"}),r.jsxs("div",{className:"dropdown-content",children:[r.jsxs("div",{className:"mega-menu-sidebar",children:[r.jsx("div",{className:`mega-menu-section ${a==="electric"?"active":""}`,onMouseEnter:()=>c("electric"),children:r.jsx("h2",{className:"mega-menu-section-title",children:"Electric Cars"})}),r.jsx("div",{className:`mega-menu-section ${a==="hybrid"?"active":""}`,onMouseEnter:()=>c("hybrid"),children:r.jsx("h2",{className:"mega-menu-section-title",children:"Hybrid Cars"})})]}),r.jsxs("div",{className:"mega-menu-main",children:[r.jsxs("div",{className:`mega-menu-content-wrapper ${a==="electric"?"visible":"hidden"}`,children:[r.jsxs("div",{className:"mega-menu-grid",children:[r.jsx("a",{href:"/models/dolphin-mini",onClick:p,style:{textDecoration:"none"},children:r.jsxs("div",{className:"mega-menu-item",children:[r.jsx("h3",{className:"mega-menu-title",children:"BYD DOLPHIN MINI"}),r.jsx("div",{className:"mega-menu-image",children:r.jsx("img",{src:"/models/BYD-DOLPHIN-MINI/BYD-DOLPHIN-MINI.png",alt:"BYD Dolphin Mini"})}),r.jsx("span",{className:"mega-menu-link",children:"Learn More"})]})}),r.jsx("a",{href:"/models/atto-2",onClick:p,style:{textDecoration:"none"},children:r.jsxs("div",{className:"mega-menu-item",children:[r.jsx("h3",{className:"mega-menu-title",children:"BYD ATTO 2"}),r.jsx("div",{className:"mega-menu-image",children:r.jsx("img",{src:"/models/BYD-ATTO-2/BYD_ATTO_2.png",alt:"BYD Atto 2"})}),r.jsx("span",{className:"mega-menu-link",children:"Learn More"})]})}),r.jsx("a",{href:"/models/atto-3",onClick:p,style:{textDecoration:"none"},children:r.jsxs("div",{className:"mega-menu-item",children:[r.jsx("h3",{className:"mega-menu-title",children:"BYD ATTO 3"}),r.jsx("div",{className:"mega-menu-image",children:r.jsx("img",{src:"/models/BYD-ATTO3/BYD-ATTO3.png",alt:"BYD Atto 3"})}),r.jsx("span",{className:"mega-menu-link",children:"Learn More"})]})}),r.jsx("a",{href:"/models/icar-03",onClick:p,style:{textDecoration:"none"},children:r.jsxs("div",{className:"mega-menu-item",children:[r.jsx("h3",{className:"mega-menu-title",children:"iCAR 03"}),r.jsx("div",{className:"mega-menu-image",children:r.jsx("img",{src:"/models/ICAR-03/ICAR-03.png",alt:"iCAR 03"})}),r.jsx("span",{className:"mega-menu-link",children:"Learn More"})]})}),r.jsx("a",{href:"/models/seal-u",onClick:p,style:{textDecoration:"none"},children:r.jsxs("div",{className:"mega-menu-item",children:[r.jsx("h3",{className:"mega-menu-title",children:"BYD SEAL U"}),r.jsx("div",{className:"mega-menu-image",children:r.jsx("img",{src:"/models/BYD-SEAL-U/BYD-SEAL-U.png",alt:"BYD Seal U"})}),r.jsx("span",{className:"mega-menu-link",children:"Learn More"})]})})]}),r.jsxs("div",{className:"mega-menu-grid",children:[r.jsx("a",{href:"/models/sealion-07",onClick:p,style:{textDecoration:"none"},children:r.jsxs("div",{className:"mega-menu-item",children:[r.jsx("h3",{className:"mega-menu-title",children:"BYD SEALION 07"}),r.jsx("div",{className:"mega-menu-image",children:r.jsx("img",{src:"/models/BYD-SEALION-07/BYD-SEALION-07.png",alt:"BYD Sealion 07"})}),r.jsx("span",{className:"mega-menu-link",children:"Learn More"})]})}),r.jsx("a",{href:"/models/tang",onClick:p,style:{textDecoration:"none"},children:r.jsxs("div",{className:"mega-menu-item",children:[r.jsx("h3",{className:"mega-menu-title",children:"BYD TANG"}),r.jsx("div",{className:"mega-menu-image",children:r.jsx("img",{src:"/models/BYD-TANG/BYD-TANG.png",alt:"BYD Tang"})}),r.jsx("span",{className:"mega-menu-link",children:"Learn More"})]})}),r.jsx("a",{href:"/models/radar-king-kong",onClick:p,style:{textDecoration:"none"},children:r.jsxs("div",{className:"mega-menu-item",children:[r.jsx("h3",{className:"mega-menu-title",children:"RADAR KING KONG"}),r.jsx("div",{className:"mega-menu-image",children:r.jsx("img",{src:"/models/RADAR-KING-KONG/RADAR-KING-KONG.png",alt:"Radar King Kong"})}),r.jsx("span",{className:"mega-menu-link",children:"Learn More"})]})})]})]}),r.jsx("div",{className:`mega-menu-content-wrapper ${a==="hybrid"?"visible":"hidden"}`,children:r.jsxs("div",{className:"mega-menu-grid",children:[r.jsx("a",{href:"/models/song-pro",onClick:p,style:{textDecoration:"none"},children:r.jsxs("div",{className:"mega-menu-item",children:[r.jsx("h3",{className:"mega-menu-title",children:"BYD SONG PRO"}),r.jsx("div",{className:"mega-menu-image",children:r.jsx("img",{src:"/models/BYD-SONG-PRO/BYD-SONG-PRO.png",alt:"BYD Song Pro"})}),r.jsx("span",{className:"mega-menu-link",children:"Learn More"})]})}),r.jsx("a",{href:"/models/leopard-ti7",onClick:p,style:{textDecoration:"none"},children:r.jsxs("div",{className:"mega-menu-item",children:[r.jsx("h3",{className:"mega-menu-title",children:"BYD LEOPARD TI7"}),r.jsx("div",{className:"mega-menu-image",children:r.jsx("img",{src:"/models/BYD-LEOPARD-TI7/BYD-LEOPARD-TI7.png",alt:"BYD Leopard Ti7"})}),r.jsx("span",{className:"mega-menu-link",children:"Learn More"})]})}),r.jsx("a",{href:"/models/yu8",onClick:p,style:{textDecoration:"none"},children:r.jsxs("div",{className:"mega-menu-item",children:[r.jsx("h3",{className:"mega-menu-title",children:"BYD YU8"}),r.jsx("div",{className:"mega-menu-image",children:r.jsx("img",{src:"/models/BYD-YU8/BYD-YU8.png",alt:"BYD YU8"})}),r.jsx("span",{className:"mega-menu-link",children:"Learn More"})]})}),r.jsx("a",{href:"/models/shark",onClick:p,style:{textDecoration:"none"},children:r.jsxs("div",{className:"mega-menu-item",children:[r.jsx("h3",{className:"mega-menu-title",children:"BYD SHARK"}),r.jsx("div",{className:"mega-menu-image",children:r.jsx("img",{src:"/models/BYD-SHARK/BYD-SHARK.png",alt:"BYD Shark"})}),r.jsx("span",{className:"mega-menu-link",children:"Learn More"})]})})]})})]})]})]}),r.jsx("li",{children:r.jsx("a",{href:"/about",onClick:p,children:"About"})}),r.jsx("li",{children:r.jsx("a",{href:"/technology",onClick:p,children:"Technology"})}),r.jsx("li",{children:r.jsx("a",{href:"/purchasing",onClick:p,children:"Purchasing"})}),r.jsx("li",{children:r.jsx("a",{href:"/ownership",onClick:p,children:"Ownership"})}),r.jsx("li",{children:r.jsx("a",{href:"/test-drive",onClick:p,children:"Test Drive"})})]})]})})]})},ne=[{id:1,name:"BYD Dolphin Mini",type:"electric",category:"Small Compact",class:"Compact hatchback",size:"12.4' (L) x 5.63' (W) x 5.05' (H)",seats:"2+3",range:"305km or 405km (CLTC)",colors:{exterior:["White","Black","Blue","Green"],interior:["Dark Blue","Light Blue (Green exterior only)"]},images:["/models/BYD-DOLPHIN-MINI/BYD-DOLPHIN-MINI.png","/models/BYD-DOLPHIN-MINI/BYD-DOLPHIN-MINI_side.webp","/models/BYD-DOLPHIN-MINI/BYD-DOLPHIN-MINI_interior.webp","/models/BYD-DOLPHIN-MINI/Banner.jpg"],videos:["/videos/BYD-DOLPHIN-MINI/Overview.mp4"]},{id:2,name:"BYD Atto 2",type:"electric",category:"Compact SUV",class:"Compact SUV",size:"14.14' (L) x 6' (W) x 5.5' (H)",seats:"2+3",range:"301km or 401km (CLTC)",colors:{exterior:["White","Gray","Green"],interior:["Beige"]},images:["/models/BYD-ATTO-2/BYD_ATTO_2.png","/models/BYD-ATTO-2/BYD_ATTO_2_side.jpg","/models/BYD-ATTO-2/BYD_ATTO_2_interior.jpg","/models/BYD-ATTO-2/Banner.avif"],videos:["/videos/BYD-ATTO-2/Overview.mp4","/videos/BYD-ATTO-2/Drive.mp4"]},{id:3,name:"BYD Atto 3",type:"electric",category:"Compact SUV",class:"Compact SUV",size:"14.62' (L) x 6.15' (W) x 5.3' (H)",seats:"2+3",range:"430km or 510km (CLTC)",colors:{exterior:["White","Gray","Beige"],interior:["Beige","Gray"]},images:["/models/BYD-ATTO3/BYD-ATTO3.png","/models/BYD-ATTO3/BYD-ATTO3_side.webp","/models/BYD-ATTO3/BYD-ATTO3_interior.webp","/models/BYD-ATTO3/Banner.jpg"],videos:["/videos/BYD-ATTO3/Overview.mp4"]},{id:4,name:"iCAR 03 Adventure Ed.",type:"electric",category:"Off-Road",class:"Compact Off-Road",size:"14.46' (L) x 6.27' (W) x 5.6' (H)",seats:"2+3",range:"401km (CLTC)",colors:{exterior:["White"],interior:["Green"]},images:["/models/ICAR-03/ICAR-03.png","/models/ICAR-03/ICAR-03_side.webp","/models/ICAR-03/ICAR-03_interior.webp","/models/ICAR-03/Banner.webp"],videos:["/videos/ICAR-03/Overview.mp4"]},{id:5,name:"BYD Seal U",type:"electric",category:"Mid-Size SUV",class:"Medium SUV",size:"15.7' (L) x 6.2' (W) x 5.45' (H)",seats:"2+3",range:"520km or 605km (CLTC)",colors:{exterior:["White","Gray","Black","Beige"],interior:["Beige"]},images:["/models/BYD-SEAL-U/BYD-SEAL-U.png","/models/BYD-SEAL-U/BYD-SEAL-U_side.webp","/models/BYD-SEAL-U/BYD-SEAL-U_interior.webp","/models/BYD-SEAL-U/Banner.jpg"],videos:["/videos/BYD-SEAL-U/Overview.mp4"]},{id:6,name:"BYD Song Pro",type:"hybrid",category:"Mid-Size SUV",class:"Medium SUV",size:"15.54' (L) x 6.1' (W) x 5.6' (H)",seats:"2+3",range:"71km or 110km electric (CLTC)",colors:{exterior:["White","Gray","Black","Blue"],interior:["Beige"]},images:["/models/BYD-SONG-PRO/BYD-SONG-PRO.png","/models/BYD-SONG-PRO/BYD-SONG-PRO_side.webp","/models/BYD-SONG-PRO/BYD-SONG-PRO_interior.webp","/models/BYD-SONG-PRO/Banner.jpg"],videos:["/videos/BYD-SONG-PRO/Overview.mp4"]},{id:7,name:"BYD Leopard Ti7",type:"hybrid",category:"Luxury Off-Road",class:"Med-Large SUV",size:"16.40' (L) x 6.55' (W) x 6.12' (H)",seats:"2+3",range:"200km or 190km AWD (electric) / 1,300km combined",colors:{exterior:["Silver","Black","Green","Blue"],interior:["Orange","Gray","Blue"]},notes:"No inventory in stock; 3-month delivery after deposit",images:["/models/BYD-LEOPARD-TI7/BYD-LEOPARD-TI7.png","/models/BYD-LEOPARD-TI7/BYD-LEOPARD-TI7_side.webp","/models/BYD-LEOPARD-TI7/BYD-LEOPARD-TI7_interior.webp","/models/BYD-LEOPARD-TI7/Banner.webp"],videos:["/videos/BYD-LEOPARD-TI7/Overview.mp4"]},{id:8,name:"BYD Sealion 07",type:"electric",category:"Luxury SUV",class:"Med-Large SUV",size:"15.85' (L) x 6.32' (W) x 5.3' (H)",seats:"2+3",range:"550km (CLTC)",colors:{exterior:["White","Bluish Gray","Black"],interior:["Black"]},notes:"No inventory in stock; 3-month delivery after deposit",images:["/models/BYD-SEALION-07/BYD-SEALION-07.png","/models/BYD-SEALION-07/BYD-SEALION-07_side.webp","/models/BYD-SEALION-07/BYD-SEALION-07_interior.webp","/models/BYD-SEALION-07/Banner.jpg"],videos:["/videos/BYD-SEALION-07/Overview.mp4"]},{id:9,name:"BYD Tang",type:"electric",category:"Luxury SUV",class:"Large SUV",size:"16.54' (L) x 6.55' (W) x 5.77' (H)",seats:"2+3+2",range:"670km or 600km AWD (CLTC)",colors:{exterior:["Black","Gray","Dark Green"],interior:["Sunset Orange","Cloud Gray"]},notes:"No inventory in stock; 3-month delivery after deposit",images:["/models/BYD-TANG/BYD-TANG.png","/models/BYD-TANG/BYD-TANG_side.webp","/models/BYD-TANG/BYD-TANG_interior.webp","/models/BYD-TANG/Banner.jpg"],videos:["/videos/BYD-TANG/Overview.mp4"]},{id:10,name:"BYD YU8",type:"hybrid",category:"Ultra Luxury Off-Road",class:"Large SUV",size:"17.45' (L) x 6.72' (W) x 6.33' (H)",seats:"2+3",range:"180km electric / 1,000km combined (CLTC)",colors:{exterior:["Green","Black","White"],interior:["Orange","Black","Gray"]},notes:"No inventory in stock; 3-month delivery after deposit",images:["/models/BYD-YU8/BYD-YU8.png","/models/BYD-YU8/BYD-YU8_side.webp","/models/BYD-YU8/BYD-YU8_interior.webp","/models/BYD-YU8/Banner.jpg"],videos:["/videos/BYD-YU8/Overview.mp4"]},{id:11,name:"Radar King Kong",type:"electric",category:"Pick-up Truck",class:"Crew Cab Pickup Truck",size:"18' (L) x 6.23' (W) x 6' (H)",seats:"2+3",range:"430km or 460km AWD (CLTC)",colors:{exterior:["White","Gray","Black","Light Blue","Dark Blue"],interior:["Black"]},notes:"No inventory in stock; 3-month delivery after deposit",images:["/models/RADAR-KING-KONG/RADAR-KING-KONG.png","/models/RADAR-KING-KONG/RADAR-KING-KONG_side.webp","/models/RADAR-KING-KONG/RADAR-KING-KONG_interior.webp","/models/RADAR-KING-KONG/Banner.jpg"],videos:["/videos/RADAR-KING-KONG/Overview.mp4"]},{id:12,name:"BYD Shark",type:"hybrid",category:"Pick-up Truck",class:"Crew Cab Pickup Truck",size:"17.9' (L) x 6.47' (W) x 6.3' (H)",seats:"2+3",range:"100km electric AWD",colors:{exterior:["White","Gray","Black"],interior:["Black"]},notes:"Anticipated availability from January 2026",images:["/models/BYD-SHARK/BYD-SHARK.png","/models/BYD-SHARK/BYD-SHARK_side.webp","/models/BYD-SHARK/BYD-SHARK_interior.webp","/models/BYD-SHARK/Banner.jpg"],videos:["/videos/BYD-SHARK/Overview.mp4"]}],bx=()=>{const[e,t]=v.useState(null),i={Models:ne.map(l=>({label:l.name,href:`/models/${l.name.toLowerCase().replace(/\s+/g,"-")}`})),About:[{label:"About Evergreen Motors",href:"/about"}],Technology:[{label:"NEVs",href:"/technology"}],Purchasing:[{label:"Test Drive",href:"/test-drive"},{label:"Cash Purchase",href:"/purchasing#cash-purchase"},{label:"Bank Finance",href:"/purchasing#bank-finance"},{label:"Dealer Finance (PCP)",href:"/purchasing#dealer-finance"},{label:"Leasing",href:"/purchasing#leasing"},{label:"Fleet & Business",href:"/purchasing#fleet-business"},{label:"Rentals",href:"/purchasing#rentals"},{label:"Subscriptions",href:"/purchasing#subscriptions"}],Ownership:[{label:"Warranty",href:"/ownership#warranty"},{label:"Service & Maintenance",href:"/ownership#service-maintenance"},{label:"24/7 Assistance",href:"/ownership#assistance"},{label:"Charging Locations",href:"/ownership#charging-locations"},{label:"Shell Charging Cards",href:"/ownership#shell-charging"}]},o=l=>({color:e===l?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.6)",textDecoration:"none",fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"0.875rem",transition:"color 0.3s ease",cursor:"pointer"});return r.jsx("footer",{style:{background:"#252728",color:"#fff",padding:0,margin:0},children:r.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto",padding:"4rem 2rem"},children:[r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"2rem",marginBottom:"3rem"},children:Object.entries(i).map(([l,a])=>r.jsxs("div",{children:[r.jsx("h3",{style:{fontWeight:600,fontSize:"1.125rem",marginBottom:"1rem",color:"rgba(255,255,255,0.9)",fontFamily:"system-ui, -apple-system, sans-serif"},children:l}),l==="Models"?r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"grid",gridTemplateColumns:"repeat(2, minmax(100px, 1fr))",gap:"0.5rem 1rem"},children:a.map(c=>r.jsx("li",{children:r.jsx("a",{href:c.href,style:o(c.label),onMouseEnter:()=>t(c.label),onMouseLeave:()=>t(null),children:c.label})},c.label))}):r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:a.map(c=>r.jsx("li",{style:{marginBottom:"0.5rem"},children:r.jsx("a",{href:c.href,style:o(c.label),onMouseEnter:()=>t(c.label),onMouseLeave:()=>t(null),children:c.label})},c.label))})]},l))}),r.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:"2rem",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"2rem"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem",flexWrap:"wrap"},children:[r.jsx("span",{style:{color:"rgba(255,255,255,0.7)",fontFamily:"system-ui, -apple-system, sans-serif",fontWeight:400,fontSize:"0.9rem",textTransform:"uppercase",letterSpacing:"1px"},children:"FOLLOW US"}),r.jsx("div",{style:{display:"flex",gap:"1rem"}})]}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1.5rem",fontSize:"0.875rem"},children:[r.jsx("a",{href:"/privacy",style:o("privacy-link"),onMouseEnter:()=>t("privacy-link"),onMouseLeave:()=>t(null),children:"Privacy Policy"}),r.jsx("a",{href:"/terms",style:o("terms-link"),onMouseEnter:()=>t("terms-link"),onMouseLeave:()=>t(null),children:"Terms of Use"}),r.jsx("a",{href:"/cookies",style:o("cookies-link"),onMouseEnter:()=>t("cookies-link"),onMouseLeave:()=>t(null),children:"Cookies"}),r.jsx("a",{href:"/contact",style:o("contact-link"),onMouseEnter:()=>t("contact-link"),onMouseLeave:()=>t(null),children:"Contact"})]})]}),r.jsx("div",{style:{textAlign:"center",fontSize:"0.85rem",color:"rgba(255,255,255,0.5)",marginTop:"2rem",fontFamily:"system-ui, -apple-system, sans-serif",fontWeight:300},children:"© BYD Europe B.V. All rights reserved."})]})})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wx=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,i)=>i?i.toUpperCase():n.toLowerCase()),Bd=e=>{const t=wx(e);return t.charAt(0).toUpperCase()+t.slice(1)},Nf=(...e)=>e.filter((t,n,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===n).join(" ").trim(),Sx=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=v.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:a,...c},s)=>v.createElement("svg",{ref:s,...Cx,width:t,height:t,stroke:e,strokeWidth:i?Number(n)*24/Number(t):n,className:Nf("lucide",o),...!l&&!Sx(c)&&{"aria-hidden":"true"},...c},[...a.map(([d,u])=>v.createElement(d,u)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(e,t)=>{const n=v.forwardRef(({className:i,...o},l)=>v.createElement(kx,{ref:l,iconNode:t,className:Nf(`lucide-${jx(Bd(e))}`,`lucide-${e}`,i),...o}));return n.displayName=Bd(e),n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],zx=Ee("calendar",Ex);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],pr=Ee("check",Bx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Tx=Ee("chevron-down",Dx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],La=Ee("chevron-left",Px);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Qr=Ee("chevron-right",Rx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Nx=Ee("circle-alert",Ax);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Sn=Ee("circle-check-big",Mx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Wa=Ee("clock",Ix);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Lx=Ee("credit-card",Ox);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Fx=Ee("external-link",Wx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Dr=Ee("map-pin",_x);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Mf=Ee("navigation",Vx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Hx=Ee("phone",Yx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ux=Ee("shield",$x);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Kx=Ee("wrench",Gx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],qx=Ee("x",Qx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],_i=Ee("zap",Xx),Jx=({posts:e,initialIndex:t,isOpen:n,onClose:i})=>{const[o,l]=v.useState(t),[a,c]=v.useState(0),s=v.useRef(null);v.useEffect(()=>{l(t),c(0)},[t]),v.useEffect(()=>{if(!n)return;const f=j=>{j.key==="Escape"&&i(),j.key==="ArrowLeft"&&u(),j.key==="ArrowRight"&&d()};return window.addEventListener("keydown",f),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",f),document.body.style.overflow="unset"}},[n,o,a]),v.useEffect(()=>{s.current&&y.type==="video"&&s.current.play()},[o,a]);const d=()=>{const f=e[o];a<f.media.length-1?c(j=>j+1):(l(j=>(j+1)%e.length),c(0))},u=()=>{if(a>0)c(f=>f-1);else{const f=(o-1+e.length)%e.length;l(f),c(e[f].media.length-1)}},p=f=>{c(f)};if(!n)return null;const g=e[o],y=g.media[a],b=g.media.length>1;return r.jsxs("div",{className:"instagram-lightbox-overlay",onClick:i,children:[r.jsx("style",{children:`
        .instagram-lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .instagram-lightbox-container {
          position: relative;
          max-width: 1200px;
          width: 90%;
          max-height: 90vh;
          display: flex;
          background: #000;
          border-radius: 4px;
          overflow: hidden;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .instagram-lightbox-media {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          position: relative;
          min-width: 0;
        }

        .instagram-lightbox-media img,
        .instagram-lightbox-media video {
          max-width: 100%;
          max-height: 90vh;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        .instagram-lightbox-sidebar {
          width: 400px;
          background: #fff;
          display: flex;
          flex-direction: column;
          border-left: 1px solid #dbdbdb;
        }

        .instagram-lightbox-header {
          padding: 20px;
          border-bottom: 1px solid #dbdbdb;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .instagram-lightbox-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .instagram-lightbox-username {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: #262626;
        }

        .instagram-lightbox-caption-area {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
        }

        .instagram-lightbox-caption {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #262626;
        }

        .instagram-lightbox-caption strong {
          font-weight: 600;
          margin-right: 8px;
        }

        .instagram-lightbox-footer {
          padding: 20px;
          border-top: 1px solid #dbdbdb;
        }

        .instagram-view-original {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: transparent;
          border: 1px solid #dbdbdb;
          border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #262626;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          justify-content: center;
          width: 100%;
        }

        .instagram-view-original:hover {
          background: #fafafa;
          border-color: #262626;
        }

        .instagram-lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .instagram-lightbox-close:hover {
          background: white;
          transform: rotate(90deg);
        }

        .instagram-lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .instagram-lightbox-nav:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
        }

        .instagram-lightbox-nav-left {
          left: 20px;
        }

        .instagram-lightbox-nav-right {
          right: 20px;
        }

        .instagram-lightbox-counter {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        /* Media indicators (dots) for carousels */
        .instagram-media-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 5;
        }

        .instagram-media-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .instagram-media-dot.active {
          background: white;
          transform: scale(1.2);
        }

        .instagram-media-dot:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        /* Carousel icon overlay on grid */
        .instagram-carousel-icon {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
          z-index: 3;
        }

        @media (max-width: 1024px) {
          .instagram-lightbox-sidebar {
            display: none;
          }

          .instagram-lightbox-container {
            width: 95%;
          }
        }

        @media (max-width: 768px) {
          .instagram-lightbox-nav {
            width: 40px;
            height: 40px;
          }

          .instagram-lightbox-nav-left {
            left: 10px;
          }

          .instagram-lightbox-nav-right {
            right: 10px;
          }

          .instagram-lightbox-close {
            top: 10px;
            right: 10px;
          }

          .instagram-media-indicators {
            bottom: 10px;
          }

          .instagram-media-dot {
            width: 6px;
            height: 6px;
          }
        }
      `}),r.jsxs("div",{className:"instagram-lightbox-container",onClick:f=>f.stopPropagation(),children:[r.jsx("button",{className:"instagram-lightbox-close",onClick:i,"aria-label":"Close",children:r.jsx(qx,{size:24,color:"#000"})}),r.jsxs("div",{className:"instagram-lightbox-counter",children:[o+1," / ",e.length,b&&` • ${a+1}/${g.media.length}`]}),r.jsx("button",{className:"instagram-lightbox-nav instagram-lightbox-nav-left",onClick:u,"aria-label":"Previous",children:r.jsx(La,{size:28,color:"#000"})}),r.jsx("button",{className:"instagram-lightbox-nav instagram-lightbox-nav-right",onClick:d,"aria-label":"Next",children:r.jsx(Qr,{size:28,color:"#000"})}),r.jsxs("div",{className:"instagram-lightbox-media",children:[y.type==="image"?r.jsx("img",{src:y.url,alt:g.alt}):r.jsx("video",{ref:s,src:y.url,controls:!0,autoPlay:!0,loop:!0,playsInline:!0}),b&&r.jsx("div",{className:"instagram-media-indicators",children:g.media.map((f,j)=>r.jsx("div",{className:`instagram-media-dot ${j===a?"active":""}`,onClick:()=>p(j)},j))})]}),r.jsxs("div",{className:"instagram-lightbox-sidebar",children:[r.jsxs("div",{className:"instagram-lightbox-header",children:[r.jsx("div",{className:"instagram-lightbox-avatar",children:"B"}),r.jsx("div",{className:"instagram-lightbox-username",children:"BYD.UK"})]}),r.jsx("div",{className:"instagram-lightbox-caption-area",children:r.jsxs("div",{className:"instagram-lightbox-caption",children:[r.jsx("strong",{children:"BYD.UK"}),g.caption]})}),r.jsx("div",{className:"instagram-lightbox-footer",children:r.jsxs("a",{href:g.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"instagram-view-original",children:[r.jsx(Fx,{size:16}),"View on Instagram"]})})]})]})]})},Dd=[{id:1,media:[{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Experience the future of electric driving with BYD. #BYDUK #ElectricVehicle",instagramUrl:"https://www.instagram.com/p/DKNEAizuiLo/",alt:"BYD vehicle exterior shot"},{id:2,media:[{type:"image",url:"/Home/instagram/post1.jpg"},{type:"image",url:"/Home/instagram/post1.jpg"},{type:"video",url:"/Home/instagram/post2.mp4",thumbnailUrl:"/Home/instagram/post1.jpg"},{type:"image",url:"/Home/instagram/post1.jpg"},{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Our latest showcase with 5 amazing shots! Swipe to see them all. #BYDShowcase",instagramUrl:"https://www.instagram.com/p/ABC123/",alt:"BYD showcase carousel"},{id:3,media:[{type:"video",url:"/Home/instagram/post2.mp4",thumbnailUrl:"/Home/instagram/post1.jpg"}],caption:"Innovative technology at your fingertips. #BYDTech #Innovation",instagramUrl:"https://www.instagram.com/p/XYZ789/",alt:"BYD dashboard technology"},{id:4,media:[{type:"image",url:"/Home/instagram/post1.jpg"},{type:"image",url:"/Home/instagram/post1.jpg"},{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Join us at the BYD showcase event! Three perspectives. #BYDEvent #Community",instagramUrl:"https://www.instagram.com/p/DEF456/",alt:"BYD event showcase"},{id:5,media:[{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Sleek design meets sustainability. #BYDDesign #Sustainable",instagramUrl:"https://www.instagram.com/p/GHI789/",alt:"BYD vehicle detail shot"},{id:6,media:[{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"The road ahead is electric. #ElectricFuture #BYD",instagramUrl:"https://www.instagram.com/p/JKL012/",alt:"BYD on the road"},{id:7,media:[{type:"video",url:"/Home/instagram/post2.mp4",thumbnailUrl:"/Home/instagram/post1.jpg"},{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Discover the BYD Dolphin. Video + photo combo! #BYDDolphin",instagramUrl:"https://www.instagram.com/p/MNO345/",alt:"BYD Dolphin showcase"},{id:8,media:[{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Charging into the future. #ElectricCharging #BYD",instagramUrl:"https://www.instagram.com/p/PQR678/",alt:"BYD charging station"},{id:9,media:[{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Premium comfort, zero emissions. #LuxuryEV #BYD",instagramUrl:"https://www.instagram.com/p/STU901/",alt:"BYD interior"}],Td=e=>({"BYD Dolphin Mini":"dolphin-mini","BYD Atto 2":"atto-2","BYD Atto 3":"atto-3","iCAR 03 Adventure Ed.":"icar-03","BYD Seal U":"seal-u","BYD Sealion 07":"sealion-07","BYD Tang":"tang","Radar King Kong":"radar-king-kong","BYD Song Pro":"song-pro","BYD Leopard Ti7":"leopard-ti7","BYD YU8":"yu8","BYD Shark":"shark"})[e]||e.toLowerCase().replace(/\s+/g,"-"),Pd={1:3,2:3,3:3,4:3,5:3,6:3,7:3,8:3,9:3,10:3,11:3,12:3},Pl={1:"Compact hatchback",2:"Compact SUV",3:"Compact SUV",4:"Compact Off-Road",5:"Medium SUV",6:"Medium SUV",7:"Med-Large SUV",8:"Med-Large SUV",9:"Large SUV",10:"Large SUV",11:"Crew Cab Pickup Truck",12:"Crew Cab Pickup Truck"},Zx=()=>{const[e,t]=v.useState(!1),[n,i]=v.useState(0),o=T=>{i(T),t(!0)},[l,a]=v.useState(0),[c,s]=v.useState(!1),[d,u]=v.useState(Date.now()),[p,g]=v.useState("right"),y=ne[l];Pd[y.id];const[b,f]=v.useState(ne.length),[j,h]=v.useState(0),[m,x]=v.useState(!1),w=2,S=[...ne,...ne,...ne],E=()=>{c||(s(!0),g("right"),a(T=>(T+1)%ne.length),setTimeout(()=>s(!1),300))},C=()=>{c||(s(!0),g("left"),a(T=>(T-1+ne.length)%ne.length),u(Date.now()),setTimeout(()=>s(!1),300))},z=()=>{E(),u(Date.now())},L=T=>{!c&&T!==l&&(s(!0),g(T>l?"right":"left"),a(T),u(Date.now()),setTimeout(()=>s(!1),300))};v.useEffect(()=>{const M=setInterval(()=>{Date.now()-d>=1e6&&(E(),u(Date.now()))},1e6);return()=>clearInterval(M)},[d]),v.useEffect(()=>{const T=setInterval(()=>{h(k=>(k+1)%9)},3e3);return()=>clearInterval(T)},[]);const R=()=>{m||(x(!0),f(T=>T+1))},G=()=>{m||(x(!0),f(T=>T-1))};v.useEffect(()=>{if(!m)return;const T=setTimeout(()=>{const k=Math.floor(b/ne.length),M=b%ne.length;if(k===0||k===2){const _=ne.length+M;f(_),requestAnimationFrame(()=>{setTimeout(()=>{x(!1)},50)})}else x(!1)},600);return()=>clearTimeout(T)},[b,m,ne.length]);const X=T=>{const k=T.match(/\d+/g);if(!k)return"N/A";const M=k.map(_=>Math.round(parseInt(_)*.621371));return M.length===1?`${M[0]} miles`:M.length>=2?`${M[0]}-${M[1]} miles`:"N/A"};Pl[y.id];const fe=()=>{if(!selectedModel){setShowModelError(!0);return}if(!selectedDate){setShowDateError(!0);return}if(!selectedTime){setShowTimeError(!0);return}if(!formData.firstName||!formData.lastName||!formData.email||!formData.phone){alert("Please fill in all required fields");return}alert("Booking request submitted!")};return r.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* ==================== HERO CAROUSEL STYLES ==================== */
        .hero-carousel {
          height: 100vh;
          position: relative;
          background: #000;
          overflow: hidden;
        }

        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease-out;
        }

        .carousel-slide.active {
          transform: translateX(0);
          z-index: 2;
        }

        .carousel-slide.prev {
          transform: translateX(-100%);
          z-index: 1;
        }

        .carousel-slide.next {
          transform: translateX(100%);
          z-index: 1;
        }

        .slide-background {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .slide-content {
          position: absolute;
          top: 120px;
          left: 60px;
          z-index: 10;
          color: white;
        }

        .model-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          font-weight: 400;
          letter-spacing: 3px;
          margin-bottom: 0.3rem;
          line-height: 1;
          text-transform: uppercase;
        }

        .model-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 400;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-carousel-controls {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1.5rem;
          z-index: 20;
        }

        .hero-carousel-button {
          font-family: 'Montserrat', sans-serif;
          padding: 0.9rem 2rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          border: 2px solid white;
          background: transparent;
          color: white;
          min-width: 160px;
          text-align: center;
        }

        .hero-carousel-button:hover {
          background: white;
          color: #000;
          transform: translateY(-2px);
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.5);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .nav-arrow:hover {
          background: rgba(255, 255, 255, 0.9);
          color: #000;
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow-left {
          left: 40px;
        }

        .nav-arrow-right {
          right: 40px;
        }

        .carousel-indicators {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 20;
        }

        .indicator-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator-dot.active {
          background: white;
          width: 30px;
          border-radius: 5px;
        }

        /* ==================== MODELS SECTION STYLES ==================== */
.models-section {
  background: #f0f0f0;
  padding: 40px 0 110px;  /* Only top/bottom padding */
}

/* Remove max-width constraint and centering */
.models-container {
  max-width: 100%;
  margin: 0;
  padding: 0;
}

/* KEEP padding on title */
.models-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 40px;
  color: #1a1a1a;
  letter-spacing: 2px;
  padding-left: 40px;  /* Keep this - title has padding */
  padding-right: 40px;
}

        .models-carousel-wrapper {
          position: relative;
          overflow: hidden;
          padding: 0 20px;
        }

        .models-carousel-track {
          display: flex;
          gap: 40px;
        }
          

        .model-card {
          flex: 0 0 calc(50% - 20px);
          background: white;
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .model-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .model-card-header {
          padding: 40px 40px 30px;
          position: relative;
          min-height: 150px;
          background: white;
        }

        .offer-badge {
          position: absolute;
          top: 40px;
          right: 40px;
          background: #e8f0fe;
          color: #1967d2;
          padding: 12px 22px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 2px;
        }

        .offer-badge:hover {
          background: #1967d2;
          color: white;
        }

        .model-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.8rem;
          font-weight: 400;
          margin-bottom: 12px;
          color: #1a1a1a;
          letter-spacing: 2px;
          line-height: 1;
        }

        .model-card-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          color: #666;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .model-card-image {
          width: 100%;
          height: 350px;
          object-fit: cover;
          display: block;
        }

.model-card-buttons {
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  background: white;
}

.model-button {
  font-family: 'Montserrat', sans-serif;
  padding: 18px 28px;
  font-size: 0.8rem;  /* Increased from 0.7rem */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #1a1a1a;
  background: transparent;
  color: #1a1a1a;
  text-align: center;
  border-radius: 2px;
}

        .model-button:hover {
          background: #1a1a1a;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .model-button.full-width {
          grid-column: 1 / -1;
        }

        .models-carousel-controls {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          padding: 0 30px;
          pointer-events: none;
          z-index: 10;
        }

        .models-carousel-arrow {
          width: 60px;
          height: 60px;
          border: 2px solid #1a1a1a;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          color: #1a1a1a;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          pointer-events: all;
          backdrop-filter: blur(10px);
        }

        .models-carousel-arrow:hover {
          background: #1a1a1a;
          color: white;
          transform: scale(1.1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        /* Electric Cars Section */
        .electric-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: white;
        }

        .electric-content {
          padding: 100px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: white;
        }

        .electric-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          font-weight: 400;
          margin-bottom: 35px;
          color: #1a1a1a;
          letter-spacing: 2px;
          line-height: 1;
        }

        .electric-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.05rem;
          line-height: 1.9;
          color: #4a4a4a;
          margin-bottom: 45px;
          font-weight: 400;
          letter-spacing: 0.2px;
        }

        .electric-button {
          font-family: 'Montserrat', sans-serif;
          padding: 16px 50px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.8px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid #1a1a1a;
          background: transparent;
          color: #1a1a1a;
          text-align: center;
          width: fit-content;
        }

        .electric-button:hover {
          background: #1a1a1a;
          color: white;
          transform: translateX(5px);
        }

        .electric-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

/* Community Section */
.community-section {
  background: white;
  padding: 90px 40px;
}

.community-container {
  max-width: 1500px;
  margin: 0 auto;
}

.community-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 25px;
  color: #1a1a1a;
  letter-spacing: 2px;
}

.community-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.05rem;
  text-align: center;
  color: #666;
  margin-bottom: 70px;
  line-height: 1.7;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  letter-spacing: 0.2px;
}

.instagram-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 200px;
  gap: 15px;
}

/* Column 1: Large on top, 2 small below */
.instagram-item:nth-child(1) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}

.instagram-item:nth-child(2) {
  grid-column: 1;
  grid-row: 3;
}

.instagram-item:nth-child(3) {
  grid-column: 2;
  grid-row: 3;
}

/* Column 2: 2 small on top, large below */
.instagram-item:nth-child(4) {
  grid-column: 3;
  grid-row: 1;
}

.instagram-item:nth-child(5) {
  grid-column: 4;
  grid-row: 1;
}

.instagram-item:nth-child(6) {
  grid-column: 3 / 5;
  grid-row: 2 / 4;
}

/* Column 3: Large on top, 2 small below */
.instagram-item:nth-child(7) {
  grid-column: 5 / 7;
  grid-row: 1 / 3;
}

.instagram-item:nth-child(8) {
  grid-column: 5;
  grid-row: 3;
}

.instagram-item:nth-child(9) {
  grid-column: 6;
  grid-row: 3;
}

.instagram-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: #f5f5f5;
}

.instagram-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.instagram-item:hover img {
  transform: scale(1.08);
}

.instagram-icon {
  position: absolute;
  bottom: 18px;
  right: 18px;
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
  transition: opacity 0.3s ease;
}

.instagram-item:hover .instagram-icon {
  opacity: 1;
}

.instagram-item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.instagram-item:hover video {
  transform: scale(1.08);
}

/* Optional: Play button indicator for videos */
.instagram-item.video-item::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.instagram-item.video-item::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 20px solid #000;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.instagram-item.video-item:hover::before,
.instagram-item.video-item:hover::after {
  opacity: 1;
}
        /* Contact Section */
        .contact-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: white;
          height: 120vh;
        }

        .contact-form-wrapper {
          padding: 100px 80px;
          background: #fafafa;
        }

        .contact-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          font-weight: 400;
          margin-bottom: 60px;
          color: #1a1a1a;
          letter-spacing: 2px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-input, .form-select {
          width: 100%;
          padding: 18px 25px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          border: none;
          background: white;
          color: #333;
          font-weight: 400;
          transition: box-shadow 0.3s ease;
        }

        .form-input:focus, .form-select:focus {
          outline: none;
          box-shadow: 0 0 0 2px #1967d2;
        }

        .form-input::placeholder {
          color: #999;
        }

        .phone-input-group {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 20px;
        }

        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='9' viewBox='0 0 14 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23666' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 25px center;
          padding-right: 55px;
          cursor: pointer;
        }

        .consent-group {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-top: 35px;
        }

        .consent-checkbox {
          width: 22px;
          height: 22px;
          min-width: 22px;
          margin-top: 3px;
          cursor: pointer;
          accent-color: #1967d2;
        }

        .consent-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          color: #666;
          line-height: 1.7;
          font-weight: 400;
          letter-spacing: 0.2px;
        }

        .consent-label a {
          color: #1967d2;
          text-decoration: none;
          border-bottom: 1px solid #1967d2;
          transition: color 0.3s ease;
        }

        .consent-label a:hover {
          color: #0d47a1;
        }

.contact-image {
  height: 80%; /* smaller than 100% */
  width: auto;
  object-fit: cover;
  margin: auto; /* center vertically */
}


        /* Map Section */
        .map-section {
          background: #fff;
          position: relative;
          padding: 40px 40px;
        }

        .map-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          font-weight: 400;
          text-align: center;
          margin-bottom: 40px;
          color: #1a1a1a;
          letter-spacing: 2px;
        }
        
        .map-container {
          width: 100%;
          height: 550px;
        }

        .map-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .model-card {
            flex: 0 0 calc(50% - 20px);
          }

          .models-title,
          .electric-title,
          .community-title,
          .contact-title,
          .map-title {
            font-size: 3.5rem;
          }

          .models-carousel-arrow {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 1024px) {
          .electric-section,
          .contact-section {
            grid-template-columns: 1fr;
          }

          .instagram-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .electric-content,
          .contact-form-wrapper {
            padding: 80px 60px;
          }
        }

        @media (max-width: 768px) {
          .models-section,
          .community-section,
          .map-section {
            padding: 60px 20px;
          }

          .model-card {
            flex: 0 0 calc(85% - 20px);
          }

          .models-carousel-arrow {
            width: 45px;
            height: 45px;
          }

          .models-carousel-controls {
            padding: 0 15px;
          }

          .instagram-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .form-row,
          .phone-input-group {
            grid-template-columns: 1fr;
          }

          .electric-content,
          .contact-form-wrapper {
            padding: 60px 30px;
          }

          .models-title,
          .electric-title,
          .community-title,
          .contact-title,
          .map-title {
            font-size: 2.8rem;
          }

          .carousel-controls {
            padding-right: 0;
          }
        }

        @media (max-width: 1024px) {
          .hero-carousel-controls {
            bottom: 60px;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }

          .hero-carousel-button {
            min-width: 200px;
          }
        }

        @media (max-width: 768px) {
          .slide-content {
            top: 80px;
            left: 30px;
          }

          .model-name {
            font-size: 2.5rem;
          }

          .model-description {
            font-size: 0.9rem;
          }

          .nav-arrow {
            width: 40px;
            height: 40px;
          }

          .nav-arrow-left {
            left: 20px;
          }

          .nav-arrow-right {
            right: 20px;
          }

          .hero-carousel-controls {
            bottom: 40px;
          }

          .hero-carousel-button {
            padding: 0.8rem 1.5rem;
            font-size: 0.75rem;
            min-width: 140px;
          }
        }

        .submit-button {
  grid-column: 1 / 2;
  justify-self: start;
  padding: 14px 40px;
  background-color: #000 !important;
  color: #fff !important;
  border: none !important;
  border-radius: 0 !important;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* tightened spacing */
  margin-top: 12px; /* 👈 reduced from 40px */
  margin-bottom: 50px; /* 👈 keeps it visually above the progress bar */
}

.submit-button:hover {
  background-color: #333 !important;
  transform: translateY(-2px);
}
      `}),r.jsxs("div",{className:"hero-carousel",children:[ne.map((T,k)=>{const M=Pd[T.id]||0;Pl[T.id];let _="carousel-slide";return k===l?_+=" active":p==="right"&&k===(l-1+ne.length)%ne.length||p==="left"&&k===(l+1)%ne.length?_+=p==="right"?" prev":" next":_+=k<l?" prev":" next",r.jsxs("div",{className:_,children:[r.jsx("img",{src:T.images[M],alt:T.name,className:"slide-background"}),r.jsx("div",{className:"slide-overlay"}),k===l&&r.jsxs("div",{className:"slide-content",children:[r.jsx("h1",{className:"model-name",children:T.name}),r.jsx("p",{className:"model-description",children:T.class})]})]},T.id)}),r.jsx("button",{className:"nav-arrow nav-arrow-left",onClick:C,children:r.jsx(La,{size:24})}),r.jsx("button",{className:"nav-arrow nav-arrow-right",onClick:z,children:r.jsx(Qr,{size:24})}),r.jsxs("div",{className:"hero-carousel-controls",children:[r.jsx("a",{href:`/models/${y.name.toLowerCase().replace(/\s+/g,"-")}`,className:"hero-carousel-button",children:"Learn More"}),r.jsx("a",{href:"/test-drive",className:"hero-carousel-button",children:"Test Drive"})]}),r.jsx("div",{className:"carousel-indicators",children:ne.map((T,k)=>r.jsx("div",{className:`indicator-dot ${k===l?"active":""}`,onClick:()=>L(k)},k))})]}),r.jsx("section",{className:"models-section",children:r.jsxs("div",{className:"models-container",children:[r.jsx("h2",{className:"models-title",children:"Models"}),r.jsxs("div",{className:"models-carousel-wrapper",children:[r.jsxs("div",{className:"models-carousel-controls",children:[r.jsx("button",{className:"models-carousel-arrow",onClick:G,"aria-label":"Previous",children:r.jsx(La,{size:28})}),r.jsx("button",{className:"models-carousel-arrow",onClick:R,"aria-label":"Next",children:r.jsx(Qr,{size:28})})]}),r.jsx("div",{className:"models-carousel-track",style:{transform:`translateX(calc(25% - ${b*(100/w)}%))`,transition:m?"transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)":"none"},children:S.map((T,k)=>r.jsxs("div",{className:"model-card",children:[r.jsxs("div",{className:"model-card-header",children:[r.jsx("h3",{className:"model-card-title",children:T.name}),r.jsx("p",{className:"model-card-description",children:Pl[T.id]})]}),r.jsx("a",{href:`/models/${Td(T.name)}`,style:{textDecoration:"none",color:"inherit"},children:r.jsx("img",{src:T.images[0],alt:T.name,className:"model-card-image",style:{cursor:"pointer"}})}),r.jsxs("div",{className:"model-card-buttons",children:[r.jsxs("button",{className:"model-button",style:{fontSize:"0.75rem",padding:"18px 12px"},children:[r.jsx("div",{style:{fontWeight:"700",marginBottom:"6px",fontSize:"0.85rem"},children:X(T.range)}),r.jsx("div",{style:{fontSize:"0.7rem",fontWeight:"400",opacity:"0.7"},children:"Range"})]}),r.jsxs("button",{className:"model-button",style:{fontSize:"0.75rem",padding:"18px 12px"},children:[r.jsx("div",{style:{fontWeight:"700",marginBottom:"6px",fontSize:"0.85rem"},children:"L2"}),r.jsx("div",{style:{fontSize:"0.7rem",fontWeight:"400",opacity:"0.7"},children:"Charging"})]}),r.jsxs("button",{className:"model-button",style:{fontSize:"0.75rem",padding:"18px 12px"},children:[r.jsx("div",{style:{fontWeight:"700",marginBottom:"6px",fontSize:"0.85rem"},children:T.seats}),r.jsx("div",{style:{fontSize:"0.7rem",fontWeight:"400",opacity:"0.7"},children:"Seats"})]}),r.jsxs("button",{className:"model-button",style:{fontSize:"0.75rem",padding:"18px 12px"},children:[r.jsx("div",{style:{fontWeight:"700",marginBottom:"6px",fontSize:"0.85rem"},children:"6-62mph"}),r.jsx("div",{style:{fontSize:"0.7rem",fontWeight:"400",opacity:"0.7"},children:"13.8sec"})]}),r.jsx("a",{href:`/models/${Td(T.name)}`,className:"model-button full-width",style:{fontSize:"0.8rem",padding:"20px 28px",textDecoration:"none",display:"block"},children:"View Details"})]})]},`${T.id}-${k}`))})]})]})}),r.jsxs("section",{className:"electric-section",children:[r.jsxs("div",{className:"electric-content",children:[r.jsx("h2",{className:"electric-title",children:"Electric Cars"}),r.jsx("p",{className:"electric-description",children:"At Evergreen Motors, our electric vehicles are different; our industry-leading battery technology marries perfectly with innovative design to create a range of EVs that are as safe as they are luxurious. Time to upgrade? Discover our available models today."}),r.jsx("button",{className:"electric-button",onClick:()=>window.location.href="/electric-cars",children:"Learn More"})]}),r.jsx("div",{children:r.jsx("img",{src:"/Home/ElectricCars.jpg",alt:"BYD Electric Car Charging",className:"electric-image"})})]}),r.jsx("section",{className:"community-section",children:r.jsxs("div",{className:"community-container",children:[r.jsx("h2",{className:"community-title",children:"Our Evergreen Community"}),r.jsx("p",{className:"community-subtitle",children:"Share your BYD with us via social media by tagging @EvergreenMotorsTCI & using #EvergreenMotorsTCI for a chance to feature across our website and social channels."}),r.jsx("div",{className:"instagram-grid",children:Dd.map((T,k)=>{const M=T.media.length>1,_=T.media[0];return r.jsxs("div",{className:`instagram-item ${_.type==="video"?"video-item":""}`,onClick:()=>o(k),style:{transform:k===j?"scale(1.02)":"scale(1)",transition:"transform 0.5s ease",zIndex:k===j?2:1,cursor:"pointer"},children:[_.type==="image"?r.jsx("img",{src:_.url,alt:T.alt}):r.jsx("video",{src:_.url,poster:_.thumbnailUrl,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),M&&r.jsx("div",{className:"instagram-carousel-icon",children:r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"white",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"},children:[r.jsx("rect",{x:"3",y:"5",width:"9",height:"14",rx:"1",fill:"white",opacity:"0.8"}),r.jsx("rect",{x:"12",y:"5",width:"9",height:"14",rx:"1",fill:"white"})]})}),r.jsx("div",{className:"instagram-icon",children:r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"#1a1a1a",children:r.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})]},T.id)})})]})}),r.jsx(Jx,{posts:Dd,initialIndex:n,isOpen:e,onClose:()=>t(!1)},e?n:"closed"),r.jsxs("section",{className:"contact-section",children:[r.jsxs("div",{className:"contact-form-wrapper",children:[r.jsx("h2",{className:"contact-title",children:"Contact us"}),r.jsxs("form",{onSubmit:T=>{T.preventDefault()},children:[r.jsxs("div",{className:"form-row",children:[r.jsx("div",{className:"form-group",children:r.jsx("input",{type:"text",className:"form-input",placeholder:"First Name*",required:!0})}),r.jsx("div",{className:"form-group",children:r.jsx("input",{type:"text",className:"form-input",placeholder:"Last Name*",required:!0})})]}),r.jsx("div",{className:"form-group",children:r.jsx("input",{type:"email",className:"form-input",placeholder:"Email*",required:!0})}),r.jsx("div",{className:"form-group",children:r.jsxs("div",{className:"phone-input-group",children:[r.jsxs("select",{className:"form-select",children:[r.jsx("option",{children:"+44"}),r.jsx("option",{children:"+1"}),r.jsx("option",{children:"+91"})]}),r.jsx("input",{type:"tel",className:"form-input",placeholder:"07400 123456*",required:!0})]})}),r.jsx("div",{className:"form-group",children:r.jsxs("select",{className:"form-select",required:!0,children:[r.jsx("option",{value:"",children:"Model of Interest*"}),ne.map(T=>r.jsx("option",{value:T.name,children:T.name},T.id))]})}),r.jsx("div",{className:"form-group",children:r.jsx("select",{className:"form-select",required:!0,children:r.jsx("option",{value:"",children:"Post Code*"})})}),r.jsx("div",{className:"form-group",children:r.jsxs("select",{className:"form-select",required:!0,children:[r.jsx("option",{value:"",children:"How can we help you?*"}),r.jsx("option",{children:"Test Drive"}),r.jsx("option",{children:"Purchase Inquiry"}),r.jsx("option",{children:"General Question"}),r.jsx("option",{children:"Service Inquiry"})]})}),r.jsx("button",{onClick:fe,className:"submit-button",children:"Submit"})]})]}),r.jsx("div",{children:r.jsx("img",{src:"/Home/Contact.jpg",alt:"BYD Electric Car",className:"contact-image"})})]}),r.jsxs("section",{className:"map-section",children:[r.jsx("h2",{className:"map-title",children:"Our Location"}),r.jsx("div",{className:"map-container",children:r.jsx("iframe",{src:"https://maps.google.com/maps?q=21.795800671508836,-72.18088702512645&t=&z=13&ie=UTF8&iwloc=&output=embed",allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"BYD Location Map"})})]})]})},If=()=>{v.useEffect(()=>{const t={threshold:.1,rootMargin:"0px 0px -100px 0px"},n=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&o.target.classList.add("fade-in-visible")})},t);return document.querySelectorAll(".fade-in-section").forEach(i=>n.observe(i)),()=>n.disconnect()},[]);const e=t=>({"BYD Dolphin Mini":"dolphin-mini","BYD Atto 2":"atto-2","BYD Atto 3":"atto-3","iCAR 03 Adventure Ed.":"icar-03","BYD Seal U":"seal-u","BYD Sealion 07":"sealion-07","BYD Tang":"tang","Radar King Kong":"radar-king-kong","BYD Song Pro":"song-pro","BYD Leopard Ti7":"leopard-ti7","BYD YU8":"yu8","BYD Shark":"shark"})[t]||t.toLowerCase().replace(/\s+/g,"-");return r.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .models-hero {
          height: 100vh;
          background:
                      url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          background-attachment: fixed;
        }

        .models-hero-content {
          z-index: 1;
          max-width: 1000px;
          padding: 3rem;
          animation: heroFade 1.8s ease-out;
        }

        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .models-hero-content h1 {
          font-size: 6rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 12px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(255,255,255,0.8);
          color: #fff;
        }

        .models-hero-content .subtitle {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4a9eff;
        }

        .models-hero-content p {
          font-size: 1.4rem;
          line-height: 2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          letter-spacing: 1px;
          text-shadow: 1px 1px 10px rgba(255,255,255,0.5);
          max-width: 900px;
          margin: 0 auto;
          color: #fff;
        }

        .models-section {
          padding: 8rem 5%;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          min-height: 100vh;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .models-intro {
          text-align: center;
          max-width: 1000px;
          margin: 0 auto 8rem;
        }

        .models-intro h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .models-intro p {
          font-size: 1.3rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 2;
          color: #4a4a4a;
        }

        .luxury-models-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 4rem;
          max-width: 1600px;
          margin: 0 auto;
        }

        .luxury-model-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.6s ease;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          display: block;
          position: relative;
        }

        .luxury-model-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.03) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: 1;
        }

        .luxury-model-card:hover::before {
          opacity: 1;
        }

        .luxury-model-card:hover {
          transform: translateY(-20px);
          box-shadow: 0 30px 80px rgba(74, 158, 255, 0.15);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .model-image-container {
          width: 100%;
          height: 350px;
          overflow: hidden;
          position: relative;
          background: #f8f9fa;
        }

        .model-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .luxury-model-card:hover .model-image-container img {
          transform: scale(1.15);
        }

        .model-type-badge {
          position: absolute;
          top: 25px;
          left: 25px;
          background: rgba(74, 158, 255, 0.95);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.6rem 1.8rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          z-index: 2;
        }

        .model-availability-badge {
          position: absolute;
          top: 25px;
          right: 25px;
          background: rgba(255, 152, 0, 0.95);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.6rem 1.8rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          z-index: 2;
        }

        .luxury-model-info {
          padding: 3rem;
          position: relative;
          z-index: 2;
          background: #ffffff;
        }

        .luxury-model-name {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 4px;
          color: #1a1a1a;
        }

        .luxury-model-category {
          font-size: 1rem;
          line-height: 1.9;
          color: #6a6a6a;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .luxury-model-description {
          font-size: 1.05rem;
          line-height: 1.9;
          color: #5a5a5a;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .model-specs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        .spec-item {
          text-align: center;
        }

        .spec-label {
          font-size: 0.75rem;
          color: #8a8a8a;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          display: block;
        }

        .spec-value {
          font-size: 1.1rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          display: block;
        }

        .color-preview {
          margin-bottom: 2rem;
        }

        .color-preview-label {
          font-size: 0.85rem;
          color: #6a6a6a;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          margin-bottom: 0.8rem;
          display: block;
        }

        .color-dots {
          display: flex;
          gap: 0.8rem;
          align-items: center;
        }

        .color-dot {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .luxury-model-card:hover .color-dot {
          transform: scale(1.1);
        }

        .luxury-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4a9eff;
          transition: all 0.4s ease;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          padding-bottom: 0.3rem;
        }

        .luxury-learn-more:hover {
          gap: 1.5rem;
          border-bottom-color: #4a9eff;
        }

        .luxury-learn-more::after {
          content: '→';
          font-size: 1.4rem;
          transition: transform 0.4s ease;
        }

        .luxury-model-card:hover .luxury-learn-more::after {
          transform: translateX(5px);
        }

        @media (max-width: 1024px) {
          .luxury-models-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
          }

          .model-specs {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .models-hero-content h1 {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }

          .luxury-models-grid {
            grid-template-columns: 1fr;
          }

          .models-intro h2 {
            font-size: 3rem;
          }

          .model-specs {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .luxury-model-name {
            font-size: 2.2rem;
          }
        }
      `}),r.jsx("div",{className:"models-hero",children:r.jsxs("div",{className:"models-hero-content",children:[r.jsx("h1",{children:"OUR COLLECTION"}),r.jsx("p",{className:"subtitle",children:"Electric Excellence"}),r.jsx("p",{children:"Discover the pinnacle of electric vehicle innovation. Each BYD model in our collection represents the perfect fusion of cutting-edge technology, sustainable design, and luxurious comfort."})]})}),r.jsxs("section",{className:"models-section fade-in-section",children:[r.jsxs("div",{className:"models-intro",children:[r.jsx("h2",{children:"The Future of Mobility"}),r.jsx("p",{children:"At Evergreen Motors, we offer an exceptional range of BYD electric vehicles — each engineered to perfection, designed to inspire, and built to transform the way you drive. Experience the difference that true innovation makes."})]}),r.jsx("div",{className:"luxury-models-grid",children:ne.map(t=>r.jsxs(gx,{to:`/models/${e(t.name)}`,className:"luxury-model-card",children:[r.jsxs("div",{className:"model-image-container",children:[r.jsx("img",{src:t.images[0],alt:t.name}),r.jsx("div",{className:"model-type-badge",children:t.type==="electric"?"⚡ Electric":"🔋 Hybrid"}),t.notes&&r.jsx("div",{className:"model-availability-badge",children:t.notes.includes("3-month")?"Pre-Order":t.notes.includes("January 2026")?"Coming Soon":"Available"})]}),r.jsxs("div",{className:"luxury-model-info",children:[r.jsx("h3",{className:"luxury-model-name",children:t.name}),r.jsxs("p",{className:"luxury-model-category",children:[t.category," • ",t.class]}),r.jsxs("div",{className:"model-specs",children:[r.jsxs("div",{className:"spec-item",children:[r.jsx("span",{className:"spec-label",children:"Range"}),r.jsx("span",{className:"spec-value",children:t.range.split(" ")[0]})]}),r.jsxs("div",{className:"spec-item",children:[r.jsx("span",{className:"spec-label",children:"Seating"}),r.jsx("span",{className:"spec-value",children:t.seats})]}),r.jsxs("div",{className:"spec-item",children:[r.jsx("span",{className:"spec-label",children:"Type"}),r.jsx("span",{className:"spec-value",children:t.type==="electric"?"EV":"PHEV"})]})]}),r.jsxs("div",{className:"color-preview",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsxs("div",{children:[r.jsxs("span",{className:"color-preview-label",children:[t.colors.exterior.length," Exterior Color",t.colors.exterior.length>1?"s":""]}),r.jsxs("div",{className:"color-dots",children:[t.colors.exterior.slice(0,5).map((n,i)=>r.jsx("div",{className:"color-dot",style:{backgroundColor:Rd(n)},title:n},`ext-${i}`)),t.colors.exterior.length>5&&r.jsxs("span",{style:{fontSize:"0.85rem",color:"#8a8a8a",fontFamily:"Montserrat, sans-serif"},children:["+",t.colors.exterior.length-5]})]})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsxs("span",{className:"color-preview-label",children:[t.colors.interior.length," Interior Color",t.colors.interior.length>1?"s":""]}),r.jsxs("div",{className:"color-dots",style:{justifyContent:"flex-end"},children:[t.colors.interior.slice(0,5).map((n,i)=>r.jsx("div",{className:"color-dot",style:{backgroundColor:Rd(n)},title:n},`int-${i}`)),t.colors.interior.length>5&&r.jsxs("span",{style:{fontSize:"0.85rem",color:"#8a8a8a",fontFamily:"Montserrat, sans-serif"},children:["+",t.colors.interior.length-5]})]})]})]}),r.jsx("span",{className:"luxury-learn-more",children:"Explore Model"})]})]},t.id))})]})]})};function Rd(e){return{White:"#F3F4F6",Black:"#1F2937",Gray:"#6B7280",Grey:"#6B7280",Beige:"#D4C5B0",Blue:"#3B82F6",Green:"#4A7C59",Silver:"#C0C0C0",Orange:"#F97316","Bluish Gray":"#8B9DC3","Dark Green":"#1E5128","Light Blue":"#7DD3FC","Dark Blue":"#1E3A8A","Sunset Orange":"#FB923C","Cloud Gray":"#9CA3AF"}[e]||"#6B7280"}const ey=()=>{const{id:e}=V0(),t=parseInt(e||"0",10);return ne.find(i=>i.id===t)?r.jsx(If,{modelId:t}):r.jsx(rx,{to:"/models",replace:!0})},ty=()=>{const[e,t]=v.useState(0),[n,i]=v.useState(null),[o,l]=v.useState({firstName:"",email:"",consent:!1}),[a,c]=v.useState(!1),[s,d]=v.useState(!1);v.useEffect(()=>{d(window.innerWidth>=768);const y=()=>{d(window.innerWidth>=768)};return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]);const u=[{title:"Battery Electric Vehicle (BEV)",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",points:["Battery-electric vehicles are all-electric. They are powered solely by a battery that powers an electric motor to make the car move. This battery is charged externally by plugging the vehicle into a charger installed at your home or in public. Because it doesn't have an engine, it doesn't release exhaust emissions into the atmosphere."]},{title:"Plug-in Hybrid Electric Vehicles (PHEV)",image:"https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop",points:["A PHEV is another type of NEV. Plug-in electric vehicles combine an internal combustion engine with an electric motor. This type of NEV will primarily run on electricity until it runs out of charge. This is when the internal combustion engine will kick in. PHEVs can be charged externally with a home charger or at a public charging station.","BYD has developed a hybrid technology unlike any other. Super DM Technology is the driving force behind our PHEVs. It boasts a range of benefits including enhanced driving performance and low fuel consumption."]}],p=[{title:"Environmental impact:",image:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",description:"NEVs can be used to reduce emissions on the road. NEVs including battery-electric and plug-in hybrid vehicles all produce less greenhouse gas emissions and less air pollution than fuel-powered vehicles."},{title:"Energy Efficiency:",image:"https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=600&h=400&fit=crop",description:"NEVs are incredibly energy-efficient, especially BEVs. They are approximately 85-90% efficient compared to an internal combustion engine's 17-21% efficiency."},{title:"Economic benefits:",image:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop",description:"NEVs offer drivers a range of economic benefits including costing less to charge your car than to fill up with fuel. Fewer parts in NEVs mean less to spend on upkeep."},{title:"Advanced technology:",image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",description:"Many NEVs including BYD electric cars feature some of the most advanced technology to make driving safer and more comfortable."}],g=[{title:"Extra energy efficiency",content:"NEVs are more energy efficient than fuel-powered vehicles. New energy vehicles get you further by using less energy."},{title:"Quiet driving experience",content:"NEVs are quieter when on the road. They make less noise for a smooth drive compared to cars with internal combustion engines."},{title:"Exhilarating, Responsive and Dynamic",content:"NEVs offer instant torque, making them fun to drive!"},{title:"Lower running costs",content:"One of the main advantages of NEVs is being able to top-up at home. Not only do you not need to visit a petrol station, but you can save money too."}];return r.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#ffffff",fontFamily:"Montserrat, Arial, sans-serif"},children:[r.jsxs("section",{style:{position:"relative",height:"414px",overflow:"hidden"},children:[r.jsx("img",{src:"/Technology/Banner.png",alt:"BYD NEV Hero",style:{width:"100%",height:"100%",objectFit:"cover"}}),r.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",padding:"0 2rem"},children:r.jsx("h1",{style:{color:"white",fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:"700",lineHeight:"1.2"}})})]}),r.jsx("section",{style:{maxWidth:"80rem",margin:"0 auto",padding:"3rem 1.5rem"},children:r.jsxs("div",{style:{fontSize:"1rem",lineHeight:"1.75",color:"#1f2937"},children:[r.jsx("p",{style:{marginBottom:"1rem"},children:"Over the last few years, electric cars have become more popular with more of them appearing on our roads. Typically, these are referred to as EVs. But there is another term that you may not be familiar with — NEV."}),r.jsx("p",{style:{marginBottom:"1rem"},children:"Not to be confused with 'neighbourhood electric vehicle', NEV stands for 'New Energy Vehicle' and is a term used to describe all types of electric vehicles, from battery-powered fully electric vehicles to plug-in hybrid cars."}),r.jsx("p",{children:"BYD is the No.1 NEV Maker, so we're well placed to explain everything you need to know about NEVs. Below, we'll take a closer look at different types of NEVs and the benefits of these vehicles."})]})}),r.jsxs("section",{style:{maxWidth:"80rem",margin:"0 auto",padding:"3rem 1.5rem"},children:[r.jsx("h2",{style:{fontSize:"clamp(1.875rem, 4vw, 2.5rem)",fontWeight:"700",color:"#111827",textAlign:"center",marginBottom:"1rem"},children:"Types of NEVs"}),r.jsx("p",{style:{fontSize:"1rem",color:"#374151",textAlign:"center",marginBottom:"2rem",maxWidth:"64rem",marginLeft:"auto",marginRight:"auto"},children:"NEV is an all-encompassing term used to describe vehicles that are powered by alternatives to fossil fuels — like electricity. Some of the most common types of NEVs include:"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"1rem",marginBottom:"3rem"},children:u.map((y,b)=>r.jsx("button",{onClick:()=>t(b),style:{padding:"0.75rem 2rem",fontWeight:"600",transition:"all 0.3s",backgroundColor:e===b?"#111827":"#ffffff",color:e===b?"#ffffff":"#111827",border:"1px solid #111827",cursor:"pointer",fontSize:"0.875rem"},onMouseEnter:f=>{e!==b&&(f.currentTarget.style.backgroundColor="#111827",f.currentTarget.style.color="#ffffff")},onMouseLeave:f=>{e!==b&&(f.currentTarget.style.backgroundColor="#ffffff",f.currentTarget.style.color="#111827")},children:y.title},b))}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:s?"1fr 1fr":"1fr",gap:"2rem",alignItems:"center"},children:[r.jsxs("div",{children:[r.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#111827",marginBottom:"1rem"},children:u[e].title}),r.jsx("ul",{style:{listStyle:"none",padding:0},children:u[e].points.map((y,b)=>r.jsxs("li",{style:{display:"flex",gap:"0.5rem",color:"#374151",fontSize:"0.875rem",lineHeight:"1.75",marginBottom:"1rem"},children:[r.jsx("span",{style:{fontSize:"1.5rem",lineHeight:"1"},children:"•"}),r.jsx("span",{children:y})]},b))})]}),r.jsx("div",{children:r.jsx("img",{src:u[e].image,alt:u[e].title,style:{width:"100%",height:"auto",borderRadius:"0.5rem",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)"}})})]})]}),r.jsx("section",{style:{backgroundColor:"#f9fafb",padding:"4rem 0"},children:r.jsxs("div",{style:{maxWidth:"80rem",margin:"0 auto",padding:"0 1.5rem"},children:[r.jsx("h2",{style:{fontSize:"clamp(1.875rem, 4vw, 2.5rem)",fontWeight:"700",color:"#111827",textAlign:"center",marginBottom:"1rem"},children:"NEV Benefits"}),r.jsx("p",{style:{fontSize:"1rem",color:"#374151",textAlign:"center",marginBottom:"3rem",maxWidth:"64rem",marginLeft:"auto",marginRight:"auto"},children:"There's a range of benefits that come with NEVs, resulting in these cars becoming more popular on our roads."}),r.jsx("div",{style:{maxWidth:"80rem",margin:"0 auto"},children:p.map((y,b)=>r.jsxs("div",{style:{display:"flex",flexDirection:s?b%2===1?"row-reverse":"row":"column",gap:"2rem",alignItems:"center",marginBottom:"3rem"},children:[r.jsx("div",{style:{flex:1},children:r.jsx("img",{src:y.image,alt:y.title,style:{width:"100%",height:"auto",borderRadius:"0rem",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"}})}),r.jsxs("div",{style:{flex:1,padding:s?"0 2rem":"0"},children:[r.jsx("h3",{style:{fontSize:"clamp(1.25rem, 3vw, 1.5rem)",fontWeight:"700",color:"#111827",marginBottom:"1rem"},children:y.title}),r.jsx("p",{style:{fontSize:"0.875rem",color:"#374151",lineHeight:"1.75"},children:y.description})]})]},b))})]})}),r.jsxs("section",{style:{maxWidth:"80rem",margin:"0 auto",padding:"4rem 1.5rem"},children:[r.jsx("h2",{style:{fontSize:"clamp(1.875rem, 4vw, 2.5rem)",fontWeight:"700",color:"#111827",marginBottom:"1rem"},children:"What's the difference between NEV and fuel-powered cars?"}),r.jsx("p",{style:{fontSize:"1rem",color:"#374151",marginBottom:"2rem"},children:"The primary difference between New Energy Vehicles and fuel-powered cars with internal combustion engines is the way they are fuelled — NEVs on electricity and ICE cars on petrol or diesel."}),r.jsx("div",{style:{borderTop:"1px solid #e5e7eb"},children:g.map((y,b)=>r.jsxs("div",{children:[r.jsxs("button",{onClick:()=>i(n===b?null:b),style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem",textAlign:"left",backgroundColor:"transparent",border:"none",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:f=>f.currentTarget.style.backgroundColor="#f9fafb",onMouseLeave:f=>f.currentTarget.style.backgroundColor="transparent",children:[r.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:"600",color:"#111827"},children:y.title}),r.jsx(Tx,{style:{width:"1.25rem",height:"1.25rem",color:"#4b5563",transition:"transform 0.3s",transform:n===b?"rotate(180deg)":"rotate(0deg)"}})]}),n===b&&r.jsx("div",{style:{padding:"0 1rem 1rem 1rem"},children:r.jsx("p",{style:{fontSize:"0.875rem",color:"#374151",lineHeight:"1.75"},children:y.content})}),r.jsx("div",{style:{borderTop:"1px solid #e5e7eb"}})]},b))})]}),r.jsx("footer",{style:{backgroundColor:"#111827",color:"#ffffff",padding:"3rem 0"},children:r.jsxs("div",{style:{maxWidth:"80rem",margin:"0 auto",padding:"0 1.5rem"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:s?"repeat(4, 1fr)":"1fr",gap:"2rem",marginBottom:"2rem"},children:[r.jsxs("div",{children:[r.jsx("h4",{style:{fontWeight:"600",marginBottom:"1rem"},children:"Models"}),r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["BYD DOLPHIN SURF","BYD DOLPHIN","BYD ATTO 2","BYD ATTO 3","BYD SEAL","BYD SEAL U DM-i","BYD SEALION 7"].map((y,b)=>r.jsx("li",{style:{marginBottom:"0.5rem"},children:r.jsx("a",{href:"#",style:{fontSize:"0.875rem",color:"#d1d5db",textDecoration:"none"},onMouseEnter:f=>f.currentTarget.style.color="#ffffff",onMouseLeave:f=>f.currentTarget.style.color="#d1d5db",children:y})},b))})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{fontWeight:"600",marginBottom:"1rem"},children:"About BYD"}),r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["About BYD","News"].map((y,b)=>r.jsx("li",{style:{marginBottom:"0.5rem"},children:r.jsx("a",{href:"#",style:{fontSize:"0.875rem",color:"#d1d5db",textDecoration:"none"},onMouseEnter:f=>f.currentTarget.style.color="#ffffff",onMouseLeave:f=>f.currentTarget.style.color="#d1d5db",children:y})},b))})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{fontWeight:"600",marginBottom:"1rem"},children:"Purchasing"}),r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["Test Drive","Find a BYD Store","PCP Offers","Fleet Solutions"].map((y,b)=>r.jsx("li",{style:{marginBottom:"0.5rem"},children:r.jsx("a",{href:"#",style:{fontSize:"0.875rem",color:"#d1d5db",textDecoration:"none"},onMouseEnter:f=>f.currentTarget.style.color="#ffffff",onMouseLeave:f=>f.currentTarget.style.color="#d1d5db",children:y})},b))})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{fontWeight:"600",marginBottom:"1rem"},children:"Ownership"}),r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["Service Maintenance","BYD Assistance","Privacy & Data"].map((y,b)=>r.jsx("li",{style:{marginBottom:"0.5rem"},children:r.jsx("a",{href:"#",style:{fontSize:"0.875rem",color:"#d1d5db",textDecoration:"none"},onMouseEnter:f=>f.currentTarget.style.color="#ffffff",onMouseLeave:f=>f.currentTarget.style.color="#d1d5db",children:y})},b))})]})]}),r.jsx("div",{style:{borderTop:"1px solid #374151",paddingTop:"2rem"},children:r.jsxs("div",{style:{display:"flex",flexDirection:s?"row":"column",justifyContent:"space-between",alignItems:"center",gap:"1rem"},children:[r.jsx("div",{style:{fontSize:"0.875rem",color:"#9ca3af"},children:"© BYD Europe B.V. All rights reserved."}),r.jsx("div",{style:{display:"flex",gap:"1rem",fontSize:"0.875rem",color:"#9ca3af"},children:["Privacy Policy","Terms of Use","Cookies","Contact"].map((y,b)=>r.jsx("a",{href:"#",style:{color:"#9ca3af",textDecoration:"none"},onMouseEnter:f=>f.currentTarget.style.color="#ffffff",onMouseLeave:f=>f.currentTarget.style.color="#9ca3af",children:y},b))})]})})]})})]})},ny=()=>{const e=v.useRef(null);return r.jsxs("section",{style:{position:"relative",height:"140vh",width:"100%",overflow:"hidden"},children:[r.jsx("video",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"},autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:r.jsx("source",{src:"/About/Hero.mp4",type:"video/mp4"})}),r.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.3)"}})]})},ry=()=>r.jsxs("section",{style:{position:"relative",width:"100%",height:"140vh",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:r.jsx("img",{src:"/About/AboutBYD.jpg",alt:"About BYD",style:{width:"100%",height:"100%",objectFit:"cover"}})}),r.jsx("div",{style:{position:"relative",width:"100%",maxWidth:"1600px",margin:"0 auto",padding:"6rem 4rem 4rem",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"80rem",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"3.5rem",fontWeight:"700",color:"#000",marginBottom:"2rem",lineHeight:"1.2"},children:"About BYD"}),r.jsx("p",{style:{fontSize:"1.125rem",color:"#000",lineHeight:"1.8",fontWeight:"300"},children:"Founded in 1994, BYD is a high-tech company devoted to leveraging technological innovations for a better life. After more than 31 years of rapid growth, BYD has played a significant role in industries related to electronics, auto, renewable energy and rail transit. With a focus on energy acquisition, storage, and application, BYD offers comprehensive zero-emission new energy solutions."})]})})]}),iy=()=>{const e=[{icon:"/About/icon1pc.png",title:"Auto",image:"/About/diversification-auto.jpg"},{icon:"/About/icon2pc.png",title:"Rail Transit",image:"/About/diversification-rail-transit.jpg"},{icon:"/About/icon3pc.png",title:"Renewable Energy",image:"/About/diversification-renewable-energy.jpg"},{icon:"/About/icon4pc.png",title:"Electronics",image:"/About/diversification-electronics.jpg"}];return r.jsxs("section",{style:{position:"relative",width:"100%",padding:"8rem 0"},children:[r.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:0},children:[r.jsx("img",{src:"/About/Diversification.jpg",alt:"Diversification Background",style:{width:"100%",height:"100%",objectFit:"cover"}}),r.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)"}})]}),r.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:"1200px",margin:"0 auto",padding:"0 2rem"},children:[r.jsx("h2",{style:{fontSize:"3rem",fontWeight:"bold",textAlign:"center",marginBottom:"4rem",color:"white"},children:"Diversification"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"2.5rem"},children:e.map((t,n)=>r.jsxs("div",{style:{backgroundColor:"transparent",borderRadius:"8px",overflow:"hidden",border:"2px solid white",transition:"transform 0.3s",padding:"0.5rem"},children:[r.jsxs("div",{style:{padding:"1.5rem 1rem 1rem",textAlign:"center"},children:[r.jsx("div",{style:{width:"60px",height:"60px",margin:"0 auto 0.75rem",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("img",{src:t.icon,alt:t.title,style:{width:"100%",height:"100%",objectFit:"contain"}})}),r.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,color:"white",marginBottom:"1rem"},children:t.title})]}),r.jsx("div",{style:{aspectRatio:"4/3",overflow:"hidden",borderRadius:"4px"},children:r.jsx("img",{src:t.image,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s"},onMouseEnter:i=>i.currentTarget.style.transform="scale(1.1)",onMouseLeave:i=>i.currentTarget.style.transform="scale(1)"})})]},n))})]})]})},ln=({title:e,description:t,image:n,reverse:i,darkText:o})=>r.jsxs("section",{style:{position:"relative",width:"100%",minHeight:"140vh",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:r.jsx("img",{src:n,alt:e,style:{width:"100%",height:"100%",objectFit:"cover"}})}),r.jsx("div",{style:{position:"relative",width:"100%",maxWidth:"1600px",margin:"0 auto",padding:"6rem 4rem 4rem",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"56rem",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"3.5rem",fontWeight:"700",marginBottom:"2rem",color:o?"#252728":"white",lineHeight:"1.2"},children:e}),r.jsx("p",{style:{fontSize:"1.125rem",lineHeight:"1.8",color:o?"#4b5563":"white",fontWeight:"300"},children:t})]})})]}),Ad=({title:e,subtitle:t,features:n,image:i})=>r.jsxs("section",{style:{position:"relative",width:"100%",height:"140vh",display:"flex",alignItems:"center",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:r.jsx("img",{src:i,alt:e,style:{width:"100%",height:"100%",objectFit:"cover"}})}),r.jsxs("div",{style:{position:"relative",maxWidth:"1600px",margin:"0 auto",padding:"0 1rem"},children:[r.jsxs("div",{style:{marginBottom:"3rem"},children:[r.jsx("h2",{style:{fontSize:"3rem",fontWeight:"bold",color:"white",marginBottom:"1rem"},children:e}),t&&r.jsx("p",{style:{fontSize:"1.125rem",color:"white",opacity:.9},children:t})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:n.map((o,l)=>r.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",borderRadius:"8px",padding:"1.5rem"},children:[r.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:600,color:"white",marginBottom:"0.75rem"},children:o.title}),r.jsx("p",{style:{color:"white",opacity:.9,lineHeight:"1.75"},children:o.description})]},l))})]})]}),oy=()=>{const e=[{title:"Enhanced safety",description:"The unique flat rectangle shape improves cooling efficiency and preheating performance. Blade Battery has safely passed the nail penetration test without emitting fire or smoke."},{title:"Optimised strength",description:"Arranged in an array in one pack, each cell serves as a structural beam to help withstand the force."},{title:"Longer range",description:"The space utilisation of the Blade Battery has been increased by over 50% compared with traditional battery packs."},{title:"Longer lifecycle",description:"Blade Battery has a long battery life with over 5000 charge and discharge cycles."}],t=[{title:"Safety",description:"The e-Platform 3.0 doubles the rigidity of the entire vehicle after integrating the Blade Battery into the car body."},{title:"High efficiency",description:"Equipped with the world's first mass-produced 8-in-1 electric powertrain as standard, the overall system efficiency is up to 89%."},{title:"Intelligence",description:"Evolving from distributed electronic and electrical architecture into an integrated domain-controlled architecture."},{title:"Aesthetics",description:"The vehicle features shorter overhangs and a longer wheel base, significantly expanding the passenger space."}];return r.jsx("div",{style:{minHeight:"140vh",backgroundColor:"white"},children:r.jsxs("main",{children:[r.jsx(ny,{}),r.jsx(ry,{}),r.jsx(iy,{}),r.jsx(ln,{title:"Globalisation",description:"BYD's new energy vehicles have established a presence in 112 countries and regions worldwide, while its passenger vehicles have reached 102 countries and regions.",image:"/About/Globalization.jpg"}),r.jsx(ln,{title:"Auto",description:"BYD has developed the Blade Battery and dual-mode hybrid power technology, accelerating the once-in-a-century transition from fossil fuel powered vehicles to electric vehicles.",image:"/About/Auto.jpg"}),r.jsx(Ad,{title:"Blade Battery",features:e,image:"/About/Blade.jpg"}),r.jsx(Ad,{title:"e-Platform 3.0",subtitle:"Give full play to the advantages of intelligence, efficiency, safety, and aesthetics that electrification brings.",features:t,image:"/About/E-Platform.jpg"}),r.jsx(ln,{title:"Semiconductor Chip",description:"Semiconductor chip, the 'CPU' of new energy vehicles, is the core technology of the whole industry.",image:"/About/SemiCondutorChip.jpg"}),r.jsx(ln,{title:"BYD Intelligent Cockpit System",description:"The smartphone functions are integrated into the in-vehicle platform.",image:"/About/DiLink.jpg"}),r.jsx(ln,{title:"Vehicle Safety",description:"Numerous challenging tests for top quality",image:"/About/VehicleSafety.jpg"}),r.jsx(ln,{title:"Market Performance",description:"As of the end of April 2025, BYD's cumulative new energy vehicle (NEV) sales exceeded 11.9 million units. On November 18, 2024, BYD became the world's first automaker to produce 10 million NEVs.",image:"/About/MarketPerformance.jpg"}),r.jsx(ln,{title:"Social Responsibility",description:"At the beginning of 2020, in the midst of Covid-19, BYD responded quickly and announced that it would produce face masks to help alleviate mask shortages around the world.",image:"/About/SocialResponsibility.jpg",darkText:!0})]})})},ly=({src:e,children:t,className:n="",priority:i=!1,style:o={}})=>{const[l,a]=v.useState(!1),[c,s]=v.useState(i),[d,u]=v.useState(i),p=v.useRef(null);return v.useEffect(()=>{if(i)return;const g=new IntersectionObserver(y=>{y.forEach(b=>{b.isIntersecting&&(u(!0),s(!0),g.disconnect())})},{rootMargin:"100px"});return p.current&&g.observe(p.current),()=>g.disconnect()},[i]),v.useEffect(()=>{if(!d)return;const g=new Image;g.src=e,g.onload=()=>a(!0)},[d,e]),r.jsxs("div",{ref:p,className:n,style:{...o,position:"relative",backgroundImage:l?`url(${e})`:"none",backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 0.5s ease"},children:[!l&&r.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",filter:"blur(20px)",zIndex:0}}),r.jsx("div",{style:{position:"relative",zIndex:1},children:t})]})},ay=e=>{const t=document.createElement("link");t.rel="preload",t.as="image",t.href=e,document.head.appendChild(t)};class ii{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const sy=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},Se={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:sy()},Gs=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},cy=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=Gs(e);Se.publicKey=n.publicKey,Se.blockHeadless=n.blockHeadless,Se.storageProvider=n.storageProvider,Se.blockList=n.blockList,Se.limitRate=n.limitRate,Se.origin=n.origin||t},Of=async(e,t,n={})=>{const i=await fetch(Se.origin+e,{method:"POST",headers:n,body:t}),o=await i.text(),l=new ii(i.status,o);if(i.ok)return l;throw l},Lf=(e,t,n)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},dy=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Wf=e=>e.webdriver||!e.languages||e.languages.length===0,Ff=()=>new ii(451,"Unavailable For Headless Browser"),uy=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},py=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},fy=(e,t)=>e instanceof FormData?e.get(t):e[t],_f=(e,t)=>{if(py(e))return!1;uy(e.list,e.watchVariable);const n=fy(t,e.watchVariable);return typeof n!="string"?!1:e.list.includes(n)},Vf=()=>new ii(403,"Forbidden"),hy=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},my=async(e,t,n)=>{const i=Number(await n.get(e)||0);return t-Date.now()+i},Yf=async(e,t,n)=>{if(!t.throttle||!n)return!1;hy(t.throttle,t.id);const i=t.id||e;return await my(i,t.throttle,n)>0?!0:(await n.set(i,Date.now().toString()),!1)},Hf=()=>new ii(429,"Too Many Requests"),gy=async(e,t,n,i)=>{const o=Gs(i),l=o.publicKey||Se.publicKey,a=o.blockHeadless||Se.blockHeadless,c=o.storageProvider||Se.storageProvider,s={...Se.blockList,...o.blockList},d={...Se.limitRate,...o.limitRate};return a&&Wf(navigator)?Promise.reject(Ff()):(Lf(l,e,t),dy(n),n&&_f(s,n)?Promise.reject(Vf()):await Yf(location.pathname,d,c)?Promise.reject(Hf()):Of("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:l,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"}))},xy=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},yy=e=>typeof e=="string"?document.querySelector(e):e,vy=async(e,t,n,i)=>{const o=Gs(i),l=o.publicKey||Se.publicKey,a=o.blockHeadless||Se.blockHeadless,c=Se.storageProvider||o.storageProvider,s={...Se.blockList,...o.blockList},d={...Se.limitRate,...o.limitRate};if(a&&Wf(navigator))return Promise.reject(Ff());const u=yy(n);Lf(l,e,t),xy(u);const p=new FormData(u);return _f(s,p)?Promise.reject(Vf()):await Yf(location.pathname,d,c)?Promise.reject(Hf()):(p.append("lib_version","4.4.1"),p.append("service_id",e),p.append("template_id",t),p.append("user_id",l),Of("/api/v1.0/email/send-form",p))},Nd={init:cy,send:gy,sendForm:vy,EmailJSResponseStatus:ii},by=()=>{const[e]=yx(),[t,n]=v.useState({name:"",email:"",phone:"",subject:"",message:""}),[i,o]=v.useState("idle"),[l,a]=v.useState("");v.useEffect(()=>{ay("/contact.jpg"),Nd.init("qDixnNBz5aFVI9l49");const d=e.get("subject");d&&n(u=>({...u,subject:d}))},[e]);const c=d=>{const{name:u,value:p}=d.target;n(g=>({...g,[u]:p}))},s=async d=>{d.preventDefault(),o("loading"),a("");try{const u={to_email:"joshuameghoo@gmail.com",from_name:t.name,from_email:t.email,phone:t.phone||"Not provided",subject:t.subject,message:t.message,reply_to:t.email},p=await Nd.send("service_gre9op6","template_bji7553",u);console.log("Email sent successfully:",p),o("success"),setTimeout(()=>{n({name:"",email:"",phone:"",subject:"",message:""}),o("idle")},3e3)}catch(u){console.error("Failed to send email:",u),o("error"),a("Failed to send message. Please try again or contact us directly at joshuameghoo@gmail.com"),setTimeout(()=>{o("idle"),a("")},5e3)}};return r.jsxs("div",{children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .luxury-contact-hero {
          min-height: 95vh;
          display: flex;
          align-items: flex-start;
          padding: 12rem 8%;
          color: white;
          position: relative;
          will-change: transform;
        }

        .hero-content {
          max-width: 800px;
          z-index: 2;
          position: relative;
        }

        .hero-content h1 {
          font-size: 8rem;
          margin-bottom: 0;
          font-weight: 300;
          font-family: 'Cormorant Garamond', serif;
          letter-spacing: 15px;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.3);
          line-height: 1;
        }

        .luxury-section {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 5%;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }

        .section-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-label {
          font-size: 1rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 4rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          color: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-info-box {
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 3rem;
        }

        .contact-info-box h2 {
          font-size: 2.5rem;
          margin-bottom: 2.5rem;
          font-weight: 300;
          letter-spacing: 5px;
          font-family: 'Cormorant Garamond', serif;
          color: #4a9eff;
        }

        .contact-item {
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .contact-item:last-child {
          border-bottom: none;
        }

        .contact-item h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: rgba(255,255,255,0.9);
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .contact-item p,
        .contact-item a {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          line-height: 1.8;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: #4a9eff;
        }

        .contact-form-box {
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 2.5rem;
          box-shadow: 0 25px 70px rgba(0,0,0,0.5);
        }

        .contact-form-box h2 {
          font-size: 2.2rem;
          margin-bottom: 0.8rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: white;
        }

        .form-subtitle {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 1.8;
        }

        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          color: rgba(255,255,255,0.9);
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.2rem;
          font-size: 0.95rem;
          border: none;
          border-bottom: 2px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.03);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          transition: all 0.4s ease;
          color: white;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255,255,255,0.4);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-bottom-color: #4a9eff;
          background: rgba(74, 158, 255, 0.08);
          box-shadow: 0 10px 30px rgba(74, 158, 255, 0.2);
        }

        .form-group textarea {
          min-height: 140px;
          resize: vertical;
          border: 2px solid rgba(255,255,255,0.2);
          padding: 1.2rem 1.5rem;
        }

        .form-group textarea:focus {
          border-color: #4a9eff;
        }

        .form-group select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='rgba(255,255,255,0.7)' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1.2rem center;
          padding-right: 3rem;
          border: 2px solid rgba(255,255,255,0.2);
        }

        .form-group select:focus {
          border-color: #4a9eff;
          background-color: rgba(74, 158, 255, 0.08);
        }

        .form-group select option {
          background: #1a1a1a;
          color: white;
        }

        .submit-btn {
          width: 100%;
          padding: 1.3rem 3rem;
          font-size: 1rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          background: linear-gradient(135deg, #4a9eff 0%, #357abd 100%);
          color: white;
          border: none;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          transition: all 0.4s ease;
          box-shadow: 0 15px 40px rgba(74, 158, 255, 0.3);
          margin-top: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .submit-btn:hover:not(:disabled) {
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.5);
          transform: translateY(-1px);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message {
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(76, 175, 80, 0.1) 100%);
          border: 1px solid rgba(76, 175, 80, 0.5);
          color: #4caf50;
          padding: 1.5rem;
          margin-bottom: 2.5rem;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
          box-shadow: 0 10px 30px rgba(76, 175, 80, 0.2);
        }

        .error-message {
          background: linear-gradient(135deg, rgba(244, 67, 54, 0.2) 0%, rgba(244, 67, 54, 0.1) 100%);
          border: 1px solid rgba(244, 67, 54, 0.5);
          color: #f44336;
          padding: 1.5rem;
          margin-bottom: 2.5rem;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          box-shadow: 0 10px 30px rgba(244, 67, 54, 0.2);
          font-size: 0.9rem;
        }

        .map-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          padding: 6rem 5%;
        }

        .map-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .map-header h2 {
          font-size: 4rem;
          margin-bottom: 1rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          color: white;
        }

        .map-header p {
          font-size: 1rem;
          color: rgba(255,255,255,0.7);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .map-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          height: 500px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 25px 70px rgba(0,0,0,0.5);
          overflow: hidden;
          position: relative;
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
          filter: grayscale(20%) brightness(0.9);
        }
          
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 4rem;
            letter-spacing: 8px;
          }

          .luxury-contact-hero {
            padding: 8rem 5%;
            background-attachment: scroll !important;
          }

          .section-title {
            font-size: 3rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .contact-info-box,
          .contact-form-box {
            padding: 3rem 2rem;
          }

          .map-header h2 {
            font-size: 3rem;
          }

          .map-wrapper {
            height: 400px;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .luxury-contact-hero {
            background-attachment: scroll !important;
          }
          
          .submit-btn,
          .contact-item a {
            transition: none !important;
          }
        }
      `}),r.jsx(ly,{src:"/contact.jpg",className:"luxury-contact-hero",priority:!0,style:{backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll"},children:r.jsx("div",{className:"hero-content",children:r.jsx("h1",{children:"CONTACT US"})})}),r.jsx("section",{className:"luxury-section",children:r.jsxs("div",{className:"section-content",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("div",{className:"section-label",children:"Get In Touch"}),r.jsx("h2",{className:"section-title",children:"Let's Connect"})]}),r.jsxs("div",{className:"contact-grid",children:[r.jsxs("div",{className:"contact-info-box",children:[r.jsx("h2",{children:"Information"}),r.jsxs("div",{className:"contact-item",children:[r.jsx("h3",{children:"Phone"}),r.jsx("p",{children:r.jsx("a",{href:"tel:+16494329988",children:"+1 (649) 432-9988"})})]}),r.jsxs("div",{className:"contact-item",children:[r.jsx("h3",{children:"Email"}),r.jsx("p",{children:r.jsx("a",{href:"mailto:info@evergreenmotor.tc",children:"info@evergreenmotor.tc"})}),r.jsx("p",{children:r.jsx("a",{href:"mailto:sales@evergreenmotor.tc",children:"sales@evergreenmotor.tc"})})]}),r.jsxs("div",{className:"contact-item",children:[r.jsx("h3",{children:"Address"}),r.jsx("p",{children:"Evergreen Motors Headquarters"}),r.jsx("p",{children:"Regent Village"}),r.jsx("p",{children:"Grace Bay, Providenciales"}),r.jsx("p",{children:"Turks & Caicos"})]}),r.jsxs("div",{className:"contact-item",children:[r.jsx("h3",{children:"Business Hours"}),r.jsx("p",{children:"Monday - Friday: 9:00 AM - 6:00 PM"}),r.jsx("p",{children:"Saturday: 10:00 AM - 4:00 PM"}),r.jsx("p",{children:"Sunday: Closed"})]})]}),r.jsxs("div",{className:"contact-form-box",children:[r.jsx("h2",{children:"Send Message"}),r.jsx("p",{className:"form-subtitle",children:"We'd love to hear from you. Fill out the form below and we'll be in touch shortly."}),i==="success"&&r.jsx("div",{className:"success-message",children:"Message sent successfully! We'll get back to you soon."}),i==="error"&&l&&r.jsx("div",{className:"error-message",children:l}),r.jsxs("form",{onSubmit:s,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"name",children:"Full Name *"}),r.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:c,required:!0,disabled:i==="loading"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"email",children:"Email Address *"}),r.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:c,required:!0,disabled:i==="loading"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"phone",children:"Phone Number"}),r.jsx("input",{type:"tel",id:"phone",name:"phone",value:t.phone,onChange:c,disabled:i==="loading"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"subject",children:"Subject *"}),r.jsxs("select",{id:"subject",name:"subject",value:t.subject,onChange:c,required:!0,disabled:i==="loading",children:[r.jsx("option",{value:"",children:"Select a subject"}),r.jsx("option",{value:"general",children:"General Inquiry"}),r.jsx("option",{value:"sales",children:"Sales & Purchasing"}),r.jsx("option",{value:"service",children:"Service & Maintenance"}),r.jsx("option",{value:"test-drive",children:"Schedule a Test Drive"}),r.jsx("option",{value:"fleet",children:"Fleet Solutions"}),r.jsx("option",{value:"partnership",children:"Business Partnership"}),r.jsx("option",{value:"other",children:"Other"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"message",children:"Message *"}),r.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:c,required:!0,disabled:i==="loading"})]}),r.jsx("button",{type:"submit",className:"submit-btn",disabled:i==="loading",children:i==="loading"?"SENDING...":"SEND MESSAGE"})]})]})]})]})}),r.jsxs("section",{className:"map-section",children:[r.jsxs("div",{className:"map-header",children:[r.jsx("h2",{children:"FIND US"}),r.jsx("p",{children:"Visit us at our Providenciales location"})]}),r.jsx("div",{className:"map-wrapper",children:r.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8!2d-72.18076673136004!3d21.795217730892617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ3JzQyLjgiTiA3MsKwMTAnNTAuOCJX!5e0!3m2!1sen!2s!4v1234567890",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Evergreen Motors Location"})})]})]})},jy=()=>{const[e,t]=v.useState(null),n=[{id:1,name:"Grace Bay Hub",address:"Grace Bay Road",type:"Fast Charge",power:"50kW",hours:"24/7",lat:21.79535210953533,lng:-72.18081954423658},{id:2,name:"Downtown Provo",address:"Leeward Highway",type:"Rapid Charge",power:"150kW",hours:"24/7",lat:21.7814,lng:-72.2731},{id:3,name:"Airport Point",address:"PLS Airport",type:"Fast Charge",power:"75kW",hours:"24/7",lat:21.7736,lng:-72.2658},{id:4,name:"Turtle Cove Marina",address:"Turtle Cove",type:"Standard",power:"22kW",hours:"6AM - 10PM",lat:21.7923,lng:-72.2589}];return r.jsxs("div",{style:{fontFamily:"Montserrat, Arial, sans-serif",color:"#252728",backgroundColor:"#fff"},children:[r.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh",overflow:"hidden"},children:[r.jsx("img",{src:"/Assistance/Banner.jpg",alt:"BYD Ownership",style:{width:"100%",height:"100%",objectFit:"cover"}}),r.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[r.jsx("h1",{style:{fontSize:"64px",fontWeight:700,color:"#fff",margin:0,textAlign:"center",letterSpacing:"-1px"},children:"BYD Ownership"}),r.jsx("p",{style:{fontSize:"22px",color:"#fff",marginTop:"20px",fontWeight:300,maxWidth:"700px",textAlign:"center",lineHeight:"1.6"},children:"Complete care for your electric journey. From comprehensive warranty coverage to 24/7 roadside assistance, we're with you every mile."})]})]}),r.jsx("div",{id:"warranty",style:{padding:"120px 20px",backgroundColor:"#fff",scrollMarginTop:"80px"},children:r.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",display:"flex",gap:"80px",alignItems:"center"},children:[r.jsx("div",{style:{flex:1},children:r.jsx("img",{src:"/Service-Maintenance/1.png",alt:"Warranty",style:{width:"100%",height:"auto",borderRadius:"12px",boxShadow:"0 10px 40px rgba(0,0,0,0.1)"}})}),r.jsxs("div",{style:{flex:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"28px"},children:[r.jsx("div",{style:{width:"56px",height:"56px",backgroundColor:"#252728",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Ux,{size:28,color:"#fff"})}),r.jsx("h2",{style:{fontSize:"44px",fontWeight:700,margin:0,letterSpacing:"-0.5px"},children:"Warranty Protection"})]}),r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.8",color:"#666",marginBottom:"35px"},children:"Industry-leading protection for your peace of mind. Our comprehensive warranty covers all key components including power battery, drive unit, and bodywork anti-corrosion. BYD stands behind every vehicle with coverage that exceeds industry standards."}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px",marginBottom:"35px"},children:[r.jsxs("div",{style:{padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"10px",border:"1px solid #e9ecef"},children:[r.jsx("div",{style:{fontSize:"13px",color:"#666",fontWeight:600,marginBottom:"10px",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Basic Coverage"}),r.jsx("div",{style:{fontSize:"22px",fontWeight:700,color:"#252728"},children:"6 years / 150,000 km"}),r.jsx("div",{style:{fontSize:"13px",color:"#666",marginTop:"8px"},children:"Comprehensive vehicle protection"})]}),r.jsxs("div",{style:{padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"10px",border:"1px solid #e9ecef"},children:[r.jsx("div",{style:{fontSize:"13px",color:"#666",fontWeight:600,marginBottom:"10px",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Power Battery"}),r.jsx("div",{style:{fontSize:"22px",fontWeight:700,color:"#252728"},children:"8 years / 250,000 km"}),r.jsx("div",{style:{fontSize:"13px",color:"#666",marginTop:"8px"},children:"SOH 70% guarantee"})]}),r.jsxs("div",{style:{padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"10px",border:"1px solid #e9ecef"},children:[r.jsx("div",{style:{fontSize:"13px",color:"#666",fontWeight:600,marginBottom:"10px",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Drive Unit"}),r.jsx("div",{style:{fontSize:"22px",fontWeight:700,color:"#252728"},children:"8 years / 150,000 km"}),r.jsx("div",{style:{fontSize:"13px",color:"#666",marginTop:"8px"},children:"Motor & controller"})]}),r.jsxs("div",{style:{padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"10px",border:"1px solid #e9ecef"},children:[r.jsx("div",{style:{fontSize:"13px",color:"#666",fontWeight:600,marginBottom:"10px",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Anti-Corrosion"}),r.jsx("div",{style:{fontSize:"22px",fontWeight:700,color:"#252728"},children:"12 years unlimited"}),r.jsx("div",{style:{fontSize:"13px",color:"#666",marginTop:"8px"},children:"Bodywork protection"})]})]}),r.jsx("p",{style:{fontSize:"15px",color:"#666",marginBottom:"25px",lineHeight:"1.6"},children:"All warranty coverage begins from the date of delivery. For complete terms, conditions, and exclusions, please review our comprehensive warranty policy document."}),r.jsx("a",{href:"/warranty-policy",style:{display:"inline-block",padding:"16px 45px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px",borderRadius:"6px",transition:"all 0.3s"},children:"View Full Warranty Policy"})]})]})}),r.jsx("div",{id:"service-maintenance",style:{padding:"120px 20px",backgroundColor:"#f8f9fa",scrollMarginTop:"80px"},children:r.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",display:"flex",gap:"80px",alignItems:"center",flexDirection:"row-reverse"},children:[r.jsx("div",{style:{flex:1},children:r.jsx("img",{src:"/Service-Maintenance/2.jpg",alt:"Service",style:{width:"100%",height:"auto",borderRadius:"12px",boxShadow:"0 10px 40px rgba(0,0,0,0.1)"}})}),r.jsxs("div",{style:{flex:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"28px"},children:[r.jsx("div",{style:{width:"56px",height:"56px",backgroundColor:"#252728",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Kx,{size:28,color:"#fff"})}),r.jsx("h2",{style:{fontSize:"44px",fontWeight:700,margin:0,letterSpacing:"-0.5px"},children:"Service & Maintenance"})]}),r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.8",color:"#666",marginBottom:"35px"},children:"Expert care from certified BYD technicians who understand your vehicle inside and out. Our service centers use genuine BYD parts, advanced diagnostics, and specialized EV equipment to keep your vehicle running at peak performance. We make maintenance timely, accessible, and hassle-free."}),r.jsxs("div",{style:{backgroundColor:"#fff",padding:"28px",borderRadius:"10px",marginBottom:"30px",boxShadow:"0 2px 10px rgba(0,0,0,0.05)"},children:[r.jsx("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"20px",color:"#252728"},children:"What We Offer"}),r.jsxs("ul",{style:{fontSize:"16px",lineHeight:"2",color:"#252728",margin:0,paddingLeft:"0",listStyle:"none"},children:[r.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px"},children:[r.jsx(Sn,{size:20,color:"#22c55e",style:{flexShrink:0}}),r.jsx("span",{children:"Genuine BYD spare parts with competitive pricing and warranty"})]}),r.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px"},children:[r.jsx(Sn,{size:20,color:"#22c55e",style:{flexShrink:0}}),r.jsx("span",{children:"Factory-trained technicians specialized in electric vehicle care"})]}),r.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px"},children:[r.jsx(Sn,{size:20,color:"#22c55e",style:{flexShrink:0}}),r.jsx("span",{children:"Comprehensive diagnostic equipment and software updates"})]}),r.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px"},children:[r.jsx(Sn,{size:20,color:"#22c55e",style:{flexShrink:0}}),r.jsx("span",{children:"Regular maintenance schedules optimized for electric vehicles"})]}),r.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx(Sn,{size:20,color:"#22c55e",style:{flexShrink:0}}),r.jsx("span",{children:"Transparent pricing with detailed service reports"})]})]})]}),r.jsxs("div",{style:{display:"flex",gap:"15px",flexWrap:"wrap"},children:[r.jsx("a",{href:"/owners-manual",style:{display:"inline-flex",alignItems:"center",gap:"10px",padding:"16px 35px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px",borderRadius:"6px"},children:"Owner's Manual"}),r.jsx("a",{href:"/emergency-response",style:{display:"inline-flex",alignItems:"center",gap:"10px",padding:"16px 35px",backgroundColor:"transparent",border:"2px solid #252728",color:"#252728",textDecoration:"none",fontWeight:600,fontSize:"16px",borderRadius:"6px"},children:"Emergency Response Guide"})]})]})]})}),r.jsx("div",{id:"assistance",style:{padding:"120px 20px",backgroundColor:"#fff",scrollMarginTop:"80px"},children:r.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",display:"flex",gap:"80px",alignItems:"center"},children:[r.jsx("div",{style:{flex:1},children:r.jsx("img",{src:"/Assistance/1.jpg",alt:"Roadside Assistance",style:{width:"100%",height:"auto",borderRadius:"12px",boxShadow:"0 10px 40px rgba(0,0,0,0.1)"}})}),r.jsxs("div",{style:{flex:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"28px"},children:[r.jsx("div",{style:{width:"56px",height:"56px",backgroundColor:"#BB0A0A",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Hx,{size:28,color:"#fff"})}),r.jsx("h2",{style:{fontSize:"44px",fontWeight:700,margin:0,letterSpacing:"-0.5px"},children:"24/7 Roadside Assistance"})]}),r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.8",color:"#666",marginBottom:"35px"},children:"Part of our mobility promise — help is always available when you need it most. Whether it's a breakdown, accident, theft attempt, or fire, BYD Assistance will be there for you, 24 hours a day, 7 days a week, 365 days a year. Our pan-European assistance network ensures you're never stranded."}),r.jsxs("div",{style:{backgroundColor:"#fff5f5",padding:"32px",borderRadius:"12px",marginBottom:"35px",border:"2px solid #BB0A0A"},children:[r.jsx("div",{style:{fontSize:"14px",color:"#666",marginBottom:"12px",fontWeight:600},children:"EMERGENCY HOTLINE — AVAILABLE NOW"}),r.jsx("a",{href:"tel:00800-10203000",style:{fontSize:"32px",fontWeight:700,color:"#BB0A0A",textDecoration:"none",display:"block",marginBottom:"8px"},children:"00800-10203000"}),r.jsx("div",{style:{fontSize:"14px",color:"#666",marginBottom:"10px"},children:"Free of charge | Pan-European coverage"}),r.jsxs("div",{style:{fontSize:"14px",color:"#666",paddingTop:"10px",borderTop:"1px solid #ffdddd"},children:["Alternative: ",r.jsx("strong",{children:"+44 2033072546"})," (if your provider charges for freephone numbers)"]})]}),r.jsxs("div",{style:{marginBottom:"30px"},children:[r.jsx("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"18px",color:"#252728"},children:"Included Services"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[r.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#BB0A0A",borderRadius:"50%",flexShrink:0}}),r.jsx("span",{style:{fontSize:"15px",fontWeight:500},children:"Phone Support"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[r.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#BB0A0A",borderRadius:"50%",flexShrink:0}}),r.jsx("span",{style:{fontSize:"15px",fontWeight:500},children:"Roadside Repair"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[r.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#BB0A0A",borderRadius:"50%",flexShrink:0}}),r.jsx("span",{style:{fontSize:"15px",fontWeight:500},children:"Towing Service"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[r.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#BB0A0A",borderRadius:"50%",flexShrink:0}}),r.jsx("span",{style:{fontSize:"15px",fontWeight:500},children:"Replacement Vehicle"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[r.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#BB0A0A",borderRadius:"50%",flexShrink:0}}),r.jsx("span",{style:{fontSize:"15px",fontWeight:500},children:"Accommodation"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[r.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#BB0A0A",borderRadius:"50%",flexShrink:0}}),r.jsx("span",{style:{fontSize:"15px",fontWeight:500},children:"Repatriation"})]})]})]}),r.jsxs("div",{style:{fontSize:"14px",color:"#666",padding:"20px",backgroundColor:"#fff3f3",borderLeft:"4px solid #BB0A0A",borderRadius:"6px",lineHeight:"1.6"},children:[r.jsx("strong",{style:{display:"block",marginBottom:"8px",color:"#252728"},children:"Coverage Period:"}),"EV Customers: 24 months + 24 months extension",r.jsx("br",{}),"DM Customers: 12 months + 12 months extension",r.jsx("br",{}),r.jsx("span",{style:{fontSize:"13px",marginTop:"8px",display:"block",fontStyle:"italic"},children:"From date of delivery"})]})]})]})}),r.jsx("div",{id:"charging-locations",style:{padding:"120px 20px",backgroundColor:"#f8f9fa",scrollMarginTop:"80px"},children:r.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"70px"},children:[r.jsx("h2",{style:{fontSize:"44px",fontWeight:700,marginBottom:"20px",letterSpacing:"-0.5px"},children:"Charging Locations"}),r.jsx("p",{style:{fontSize:"18px",color:"#666",maxWidth:"600px",margin:"0 auto",lineHeight:"1.6"},children:"Convenient access to fast and rapid charging stations across Turks & Caicos Islands. Power up wherever your journey takes you."})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"30px",marginBottom:"60px"},children:n.map(i=>r.jsxs("div",{onClick:()=>t(i.id===e?null:i.id),style:{padding:"35px",backgroundColor:"#fff",borderRadius:"12px",boxShadow:e===i.id?"0 8px 30px rgba(0,0,0,0.15)":"0 4px 20px rgba(0,0,0,0.08)",transition:"all 0.3s ease",cursor:"pointer",border:e===i.id?"2px solid #252728":"2px solid transparent"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"20px"},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("h3",{style:{fontSize:"22px",fontWeight:700,marginBottom:"8px"},children:i.name}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#666",fontSize:"14px"},children:[r.jsx(Dr,{size:16}),r.jsx("span",{children:i.address})]})]}),r.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",backgroundColor:e===i.id?"#252728":"#f8f9fa",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s"},children:r.jsx(_i,{size:22,color:e===i.id?"#fff":"#252728"})})]}),r.jsxs("div",{style:{display:"flex",gap:"20px",paddingTop:"20px",borderTop:"1px solid #e9ecef",marginBottom:e===i.id?"20px":"0"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:600,textTransform:"uppercase",marginBottom:"6px",letterSpacing:"0.5px"},children:"Type"}),r.jsx("div",{style:{fontSize:"15px",fontWeight:600},children:i.type})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:600,textTransform:"uppercase",marginBottom:"6px",letterSpacing:"0.5px"},children:"Power"}),r.jsx("div",{style:{fontSize:"15px",fontWeight:600},children:i.power})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:600,textTransform:"uppercase",marginBottom:"6px",letterSpacing:"0.5px"},children:"Hours"}),r.jsx("div",{style:{fontSize:"15px",fontWeight:600},children:i.hours})]})]}),e===i.id&&r.jsxs("a",{href:`https://maps.google.com/?q=${i.lat},${i.lng}`,target:"_blank",rel:"noopener noreferrer",onClick:o=>o.stopPropagation(),style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 24px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"14px",borderRadius:"6px",transition:"all 0.3s ease",marginTop:"10px"},children:[r.jsx(Mf,{size:16}),"Get Directions"]})]},i.id))}),r.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"60px",padding:"50px",backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 4px 20px rgba(0,0,0,0.08)"},children:[r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"42px",fontWeight:700,color:"#252728",marginBottom:"10px"},children:n.length}),r.jsx("div",{style:{fontSize:"14px",color:"#666",fontWeight:500},children:"Charging Stations"})]}),r.jsx("div",{style:{width:"1px",backgroundColor:"#e9ecef"}}),r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"42px",fontWeight:700,color:"#252728",marginBottom:"10px"},children:"24/7"}),r.jsx("div",{style:{fontSize:"14px",color:"#666",fontWeight:500},children:"Always Available"})]}),r.jsx("div",{style:{width:"1px",backgroundColor:"#e9ecef"}}),r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"42px",fontWeight:700,color:"#252728",marginBottom:"10px"},children:"150kW"}),r.jsx("div",{style:{fontSize:"14px",color:"#666",fontWeight:500},children:"Rapid Charging"})]})]})]})}),r.jsx("div",{id:"shell-charging",style:{padding:"120px 20px",backgroundColor:"#fff",scrollMarginTop:"80px"},children:r.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",display:"flex",gap:"80px",alignItems:"center",flexDirection:"row-reverse"},children:[r.jsx("div",{style:{flex:1},children:r.jsx("img",{src:"/Charge-Cards/2.jpg",alt:"Shell Charging",style:{width:"100%",height:"auto",borderRadius:"12px",boxShadow:"0 10px 40px rgba(0,0,0,0.1)"}})}),r.jsxs("div",{style:{flex:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"28px"},children:[r.jsx("div",{style:{width:"56px",height:"56px",backgroundColor:"#252728",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Lx,{size:28,color:"#fff"})}),r.jsx("h2",{style:{fontSize:"44px",fontWeight:700,margin:0,letterSpacing:"-0.5px"},children:"Shell EV Charging"})]}),r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.8",color:"#666",marginBottom:"35px"},children:"Experience the future of electric mobility with our exclusive BYD x Shell Recharge partnership. Access 850,000+ charging points across Europe with significant discounts and seamless integration with your BYD infotainment system. No subscription fees, just smart savings."}),r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"30px",borderRadius:"12px",marginBottom:"30px"},children:[r.jsx("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"20px",color:"#252728"},children:"Exclusive BYD Benefits"}),r.jsx("div",{style:{display:"grid",gap:"16px"},children:r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px"},children:[r.jsx(Sn,{size:20,color:"#22c55e",style:{flexShrink:0,marginTop:"2px"}}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"16px",fontWeight:600,marginBottom:"4px"},children:"Seamless Integration"}),r.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Shell Recharge app mirrors on your BYD screen via Android Auto or Apple CarPlay"})]})]})})]}),r.jsx("div",{style:{backgroundColor:"#fff9e6",padding:"20px",borderRadius:"8px",marginBottom:"30px",borderLeft:"4px solid #fbbf24"},children:r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px"},children:[r.jsx(Nx,{size:20,color:"#f59e0b",style:{flexShrink:0,marginTop:"2px"}}),r.jsxs("div",{style:{fontSize:"14px",lineHeight:"1.6",color:"#666"},children:[r.jsx("strong",{style:{color:"#252728"},children:"How to register:"})," Download the BYD App and follow the BYD x Shell Recharge link to activate your charge card. Discounts apply automatically when using the card at eligible stations."]})]})}),r.jsx("a",{href:"https://www.shell.co.uk/terms-and-conditions/terms-and-conditions-shell-recharge-x-byd-promotion.html",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"16px 45px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px",borderRadius:"6px"},children:"View Terms & Conditions"})]})]})}),r.jsx("div",{style:{padding:"100px 20px",backgroundColor:"#252728",color:"#fff"},children:r.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"60px"},children:[r.jsx("h2",{style:{fontSize:"44px",fontWeight:700,marginBottom:"20px",letterSpacing:"-0.5px"},children:"BYD Customer Service Center"}),r.jsx("p",{style:{fontSize:"18px",opacity:.9,maxWidth:"700px",margin:"0 auto",lineHeight:"1.6"},children:"We're dedicated to hearing your voice and providing exceptional support. Contact our European customer service center for assistance beyond emergencies."})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"50px"},children:[r.jsxs("div",{style:{backgroundColor:"rgba(255,255,255,0.1)",padding:"35px",borderRadius:"12px",backdropFilter:"blur(10px)"},children:[r.jsx(Dr,{size:32,color:"#fff",style:{marginBottom:"20px"}}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px"},children:"Location"}),r.jsxs("p",{style:{fontSize:"16px",opacity:.9,lineHeight:"1.6"},children:["Lublin, Poland",r.jsx("br",{}),"European Service Hub"]})]}),r.jsxs("div",{style:{backgroundColor:"rgba(255,255,255,0.1)",padding:"35px",borderRadius:"12px",backdropFilter:"blur(10px)"},children:[r.jsx(Wa,{size:32,color:"#fff",style:{marginBottom:"20px"}}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px"},children:"Service Hours"}),r.jsxs("p",{style:{fontSize:"16px",opacity:.9,lineHeight:"1.6"},children:["Monday to Saturday",r.jsx("br",{}),"9:00 AM - 6:00 PM CET"]})]}),r.jsxs("div",{style:{backgroundColor:"rgba(255,255,255,0.1)",padding:"35px",borderRadius:"12px",backdropFilter:"blur(10px)"},children:[r.jsx("div",{style:{fontSize:"32px",marginBottom:"20px"},children:"🌍"}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px"},children:"Languages"}),r.jsxs("p",{style:{fontSize:"16px",opacity:.9,lineHeight:"1.6"},children:["English, German, French,",r.jsx("br",{}),"Italian, Spanish & more"]})]})]}),r.jsx("div",{style:{textAlign:"center",fontSize:"14px",opacity:.8,fontStyle:"italic"},children:"Additional language support coming soon"})]})}),r.jsx("div",{style:{backgroundColor:"#f8f9fa",padding:"100px 20px"},children:r.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto",textAlign:"center"},children:[r.jsx("h3",{style:{fontSize:"36px",fontWeight:700,marginBottom:"20px",color:"#252728",letterSpacing:"-0.5px"},children:"Stay Connected with BYD"}),r.jsx("p",{style:{fontSize:"17px",marginBottom:"45px",color:"#666",lineHeight:"1.6",maxWidth:"600px",margin:"0 auto 45px"},children:"Get the latest updates on ownership benefits, charging network expansions, service promotions, and exclusive BYD news delivered to your inbox."}),r.jsxs("div",{style:{display:"flex",gap:"15px",maxWidth:"700px",margin:"0 auto",marginBottom:"25px"},children:[r.jsx("input",{type:"text",placeholder:"First Name",style:{flex:1,padding:"18px 24px",border:"1px solid #e9ecef",fontSize:"16px",borderRadius:"6px",outline:"none",fontFamily:"Montserrat, Arial, sans-serif"}}),r.jsx("input",{type:"email",placeholder:"Email Address",style:{flex:1,padding:"18px 24px",border:"1px solid #e9ecef",fontSize:"16px",borderRadius:"6px",outline:"none",fontFamily:"Montserrat, Arial, sans-serif"}})]}),r.jsx("div",{style:{textAlign:"left",maxWidth:"700px",margin:"0 auto 30px"},children:r.jsxs("label",{style:{display:"flex",alignItems:"flex-start",fontSize:"13px",gap:"12px",color:"#666"},children:[r.jsx("input",{type:"checkbox",style:{marginTop:"3px"}}),r.jsxs("span",{children:["I consent to my personal data being used to receive all relevant BYD email updates. For more information, please see our ",r.jsx("a",{href:"/privacy",style:{color:"#252728",textDecoration:"underline",fontWeight:600},children:"privacy policy"}),"."]})]})}),r.jsx("button",{style:{padding:"18px 60px",backgroundColor:"#252728",color:"#fff",border:"none",fontSize:"16px",fontWeight:600,cursor:"pointer",borderRadius:"6px",fontFamily:"Montserrat, Arial, sans-serif",transition:"all 0.3s"},children:"SUBSCRIBE NOW"})]})}),r.jsx("style",{children:`
        @media (max-width: 991px) {
          div[style*="display: flex"] {
            flex-direction: column !important;
          }
          h1 {
            font-size: 36px !important;
          }
          h2 {
            font-size: 32px !important;
          }
          h3 {
            font-size: 20px !important;
          }
          div[style*="padding: 120px"] {
            padding: 60px 20px !important;
          }
          div[style*="padding: 100px"] {
            padding: 60px 20px !important;
          }
          div[style*="gap: 80px"] {
            gap: 40px !important;
          }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="fontSize: '64px'"] {
            font-size: 36px !important;
          }
          div[style*="fontSize: '44px'"] {
            font-size: 28px !important;
          }
          div[style*="fontSize: '42px'"] {
            font-size: 28px !important;
          }
          div[style*="fontSize: '36px'"] {
            font-size: 26px !important;
          }
          div[style*="width: '56px'"] {
            width: 48px !important;
            height: 48px !important;
          }
        }
      `})]})};function wy(){return r.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[r.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh",overflow:"hidden"},children:[r.jsx("img",{src:"/Purchasing/Banner.jpg",alt:"BYD Ownership",style:{width:"100%",height:"100%",objectFit:"cover"}}),r.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[r.jsx("h1",{style:{fontSize:"64px",fontWeight:700,color:"#fff",margin:0,textAlign:"center",letterSpacing:"-1px"},children:"Find Your Perfect Way to Own a BYD"}),r.jsx("p",{style:{fontSize:"22px",color:"#fff",marginTop:"20px",fontWeight:300,maxWidth:"700px",textAlign:"center",lineHeight:"1.6"},children:"From cash purchases to flexible subscriptions - discover the option that fits your lifestyle"})]})]}),r.jsx("section",{id:"cash-purchase",style:{padding:"80px 20px",backgroundColor:"#ffffff",scrollMarginTop:"80px"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[r.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"Cash Purchase"}),r.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto"},children:"Buy outright and own your BYD from day one with no monthly payments or interest charges"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{title:"No Interest Charges",description:"Avoid finance costs and save money"},{title:"Immediate Ownership",description:"The vehicle is yours from day one"},{title:"Complete Freedom",description:"No mileage or modification restrictions"},{title:"Potential Discounts",description:"Cash buyers may get special offers"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"28px",borderRadius:"8px",textAlign:"center"},children:[r.jsx("div",{style:{width:"80px",height:"80px",margin:"0 auto 16px",backgroundColor:"#3276AE",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("img",{src:`https://placehold.co/60x60/3276AE/ffffff?text=${t+1}`,alt:e.title,style:{width:"60px",height:"60px"}})}),r.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"10px",color:"#3276AE"},children:e.title}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))}),r.jsx("div",{style:{textAlign:"center"},children:r.jsx("button",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(50, 118, 174, 0.3)"},children:"Contact Us for Cash Purchase"})})]})}),r.jsx("section",{id:"bank-finance",style:{padding:"80px 20px",backgroundColor:"#f8f9fa",scrollMarginTop:"80px"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[r.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"Bank Finance"}),r.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto"},children:"Flexible finance through trusted UK banks with competitive rates and immediate ownership"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{title:"Competitive Rates",description:"Access great rates from leading banks"},{title:"Trusted Lenders",description:"Work with established institutions"},{title:"Own from Day One",description:"You own the vehicle immediately"},{title:"Simple Process",description:"Quick application with fast decisions"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"28px",borderRadius:"8px",textAlign:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"},children:[r.jsx("div",{style:{width:"80px",height:"80px",margin:"0 auto 16px",backgroundColor:"#3276AE",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("img",{src:`https://placehold.co/60x60/3276AE/ffffff?text=${t+1}`,alt:e.title,style:{width:"60px",height:"60px"}})}),r.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"10px",color:"#3276AE"},children:e.title}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))}),r.jsx("div",{style:{textAlign:"center"},children:r.jsx("button",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(50, 118, 174, 0.3)"},children:"Contact Us for Finance Options"})})]})}),r.jsx("section",{id:"dealer-finance",style:{padding:"80px 20px",backgroundColor:"#ffffff",scrollMarginTop:"80px"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[r.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"Personal Contract Purchase (PCP)"}),r.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto"},children:"Lower monthly payments with flexibility to keep, return, or exchange your vehicle"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{title:"Lower Payments",description:"Reduced monthly costs with final payment"},{title:"Multiple Options",description:"Keep, return, or exchange at end of term"},{title:"Guaranteed Value",description:"Know your vehicle's future value upfront"},{title:"Dealer Support",description:"Expert guidance throughout your contract"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"28px",borderRadius:"8px",textAlign:"center"},children:[r.jsx("div",{style:{width:"80px",height:"80px",margin:"0 auto 16px",backgroundColor:"#3276AE",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("img",{src:`https://placehold.co/60x60/3276AE/ffffff?text=${t+1}`,alt:e.title,style:{width:"60px",height:"60px"}})}),r.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"10px",color:"#3276AE"},children:e.title}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))}),r.jsx("div",{style:{textAlign:"center"},children:r.jsx("button",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(50, 118, 174, 0.3)"},children:"Contact Us for PCP Deals"})})]})}),r.jsx("section",{id:"leasing",style:{padding:"80px 20px",backgroundColor:"#f8f9fa",scrollMarginTop:"80px"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[r.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"Personal Contract Hire (Leasing)"}),r.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto"},children:"Drive a brand new BYD with low fixed monthly payments and no ownership worries"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{title:"Fixed Term",description:"Choose 24-48 month lease periods"},{title:"Low Payments",description:"Affordable fixed monthly costs"},{title:"Latest Models",description:"Always drive the newest vehicles"},{title:"Maintenance Options",description:"Add service packages for peace of mind"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"28px",borderRadius:"8px",textAlign:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"},children:[r.jsx("div",{style:{width:"80px",height:"80px",margin:"0 auto 16px",backgroundColor:"#3276AE",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("img",{src:`https://placehold.co/60x60/3276AE/ffffff?text=${t+1}`,alt:e.title,style:{width:"60px",height:"60px"}})}),r.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"10px",color:"#3276AE"},children:e.title}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))}),r.jsx("div",{style:{textAlign:"center"},children:r.jsx("button",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(50, 118, 174, 0.3)"},children:"Contact Us for Lease Deals"})})]})}),r.jsx("section",{id:"fleet-business",style:{padding:"80px 20px",backgroundColor:"#ffffff",scrollMarginTop:"80px"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[r.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"Fleet & Business Solutions"}),r.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"800px",margin:"0 auto"},children:"Comprehensive electric vehicle solutions for businesses of all sizes with volume discounts and dedicated support"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{title:"Advanced Technology",description:"Industry-leading battery and range"},{title:"Cost Savings",description:"Reduce fuel and maintenance costs"},{title:"Volume Discounts",description:"Special pricing for fleet orders 5+"},{title:"Comprehensive Warranty",description:"6-year vehicle, 8-year battery warranty"},{title:"Fleet Management",description:"Digital tools and dedicated support"},{title:"ESG Compliance",description:"Meet sustainability goals"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"28px",borderRadius:"8px",textAlign:"center"},children:[r.jsx("div",{style:{width:"80px",height:"80px",margin:"0 auto 16px",backgroundColor:"#1a2a6c",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("img",{src:`https://placehold.co/60x60/1a2a6c/ffffff?text=${t+1}`,alt:e.title,style:{width:"60px",height:"60px"}})}),r.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"10px",color:"#1a2a6c"},children:e.title}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))}),r.jsx("div",{style:{textAlign:"center"},children:r.jsx("button",{style:{backgroundColor:"#1a2a6c",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(26, 42, 108, 0.3)"},children:"Contact Fleet Specialists"})})]})}),r.jsx("section",{id:"rentals",style:{padding:"80px 20px",backgroundColor:"#f8f9fa",scrollMarginTop:"80px"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[r.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"Short-Term Rentals"}),r.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto"},children:"Experience electric driving with flexible daily, weekly, or monthly rental options"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{title:"Daily Rental",price:"From £89/day",description:"Perfect for short trips"},{title:"Weekly Rental",price:"From £499/week",description:"Great for vacations"},{title:"Monthly Rental",price:"From £1,499/month",description:"Ideal for extended use"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"32px",borderRadius:"8px",textAlign:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"},children:[r.jsx("div",{style:{width:"100px",height:"100px",margin:"0 auto 16px",backgroundColor:"#f5576c",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("img",{src:`https://placehold.co/80x80/f5576c/ffffff?text=${t+1}`,alt:e.title,style:{width:"80px",height:"80px"}})}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"8px",color:"#f5576c"},children:e.title}),r.jsx("p",{style:{fontSize:"24px",fontWeight:"700",color:"#252728",marginBottom:"8px"},children:e.price}),r.jsx("p",{style:{fontSize:"14px",color:"#5f5f5f"},children:e.description})]},t))}),r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",marginBottom:"30px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"},children:[r.jsx("h4",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px",color:"#252728",textAlign:"center"},children:"All Rentals Include:"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"12px"},children:["Fully charged vehicle","Comprehensive insurance","24/7 breakdown assistance","Unlimited mileage"].map((e,t)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#f5576c",strokeWidth:"3",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})}),r.jsx("span",{style:{fontSize:"14px",color:"#252728"},children:e})]},t))})]}),r.jsx("div",{style:{textAlign:"center"},children:r.jsx("button",{style:{backgroundColor:"#f5576c",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(245, 87, 108, 0.3)"},children:"Contact Us for Rentals"})})]})}),r.jsx("section",{id:"subscriptions",style:{padding:"80px 20px",backgroundColor:"#ffffff",scrollMarginTop:"80px"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[r.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"All-Inclusive Subscription"}),r.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto"},children:"Ultimate flexibility with insurance, maintenance, and everything included in one monthly payment"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{plan:"Starter",monthly:"£599",model:"BYD DOLPHIN",mileage:"750 miles/month"},{plan:"Premium",monthly:"£799",model:"BYD ATTO 3",mileage:"1,000 miles/month",featured:!0},{plan:"Executive",monthly:"£999",model:"BYD SEAL",mileage:"1,250 miles/month"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:e.featured?"#667eea":"#f8f9fa",padding:"36px",borderRadius:"8px",border:e.featured?"3px solid #667eea":"1px solid #e5e7eb",textAlign:"center",position:"relative",transform:e.featured?"scale(1.05)":"scale(1)"},children:[e.featured&&r.jsx("div",{style:{position:"absolute",top:"-14px",left:"50%",transform:"translateX(-50%)",backgroundColor:"#764ba2",color:"#ffffff",padding:"6px 20px",borderRadius:"20px",fontSize:"12px",fontWeight:"600"},children:"MOST POPULAR"}),r.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"16px",color:e.featured?"#ffffff":"#252728"},children:e.plan}),r.jsx("p",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"8px",color:e.featured?"#ffffff":"#667eea"},children:e.monthly}),r.jsx("p",{style:{fontSize:"14px",marginBottom:"20px",color:e.featured?"rgba(255,255,255,0.8)":"#6b7280"},children:"per month"}),r.jsxs("div",{style:{marginBottom:"24px",textAlign:"left"},children:[r.jsxs("p",{style:{fontSize:"14px",marginBottom:"8px",color:e.featured?"rgba(255,255,255,0.9)":"#5f5f5f"},children:[r.jsx("strong",{children:"Model:"})," ",e.model]}),r.jsxs("p",{style:{fontSize:"14px",marginBottom:"8px",color:e.featured?"rgba(255,255,255,0.9)":"#5f5f5f"},children:[r.jsx("strong",{children:"Mileage:"})," ",e.mileage]}),r.jsxs("p",{style:{fontSize:"14px",color:e.featured?"rgba(255,255,255,0.9)":"#5f5f5f"},children:[r.jsx("strong",{children:"Minimum:"})," 6 months"]})]}),r.jsxs("div",{style:{marginBottom:"20px",paddingTop:"20px",borderTop:`1px solid ${e.featured?"rgba(255,255,255,0.2)":"#e5e7eb"}`},children:[r.jsx("p",{style:{fontSize:"13px",fontWeight:"600",marginBottom:"10px",color:e.featured?"#ffffff":"#252728"},children:"Everything Included:"}),r.jsx("p",{style:{fontSize:"12px",lineHeight:"1.6",color:e.featured?"rgba(255,255,255,0.85)":"#5f5f5f"},children:"Vehicle • Insurance • Maintenance • Breakdown Cover • Vehicle Swaps • Digital Management"})]}),r.jsx("button",{style:{width:"100%",backgroundColor:e.featured?"#ffffff":"#667eea",color:e.featured?"#667eea":"#ffffff",padding:"14px",fontSize:"15px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Subscribe Now"})]},t))}),r.jsx("div",{style:{textAlign:"center"},children:r.jsx("button",{style:{backgroundColor:"#667eea",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(102, 126, 234, 0.3)"},children:"Contact Us About Subscriptions"})})]})}),r.jsx("section",{style:{padding:"80px 20px",background:"linear-gradient(135deg, #2d3436 0%, #3276AE 100%)",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[r.jsx("h2",{style:{fontSize:"40px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Get Your BYD?"}),r.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.95"},children:"Contact us today and our team will help you find the perfect purchasing option for your needs"}),r.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Contact Us Now"}),r.jsx("button",{style:{backgroundColor:"transparent",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"2px solid #ffffff",borderRadius:"4px",cursor:"pointer"},children:"Find a Location"})]})]})})]})}function vn(e){"@babel/helpers - typeof";return vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vn(e)}function Sy(e,t){if(vn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(vn(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $f(e){var t=Sy(e,"string");return vn(t)=="symbol"?t:t+""}function vr(e,t,n){return(t=$f(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Md(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Md(Object(n),!0).forEach(function(i){vr(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Md(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Cy(e){if(Array.isArray(e))return e}function ky(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i,o,l,a,c=[],s=!0,d=!1;try{if(l=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(i=l.call(n)).done)&&(c.push(i.value),c.length!==t);s=!0);}catch(u){d=!0,o=u}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(d)throw o}}return c}}function Fa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function Uf(e,t){if(e){if(typeof e=="string")return Fa(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fa(e,t):void 0}}function Ey(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Et(e,t){return Cy(e)||ky(e,t)||Uf(e,t)||Ey()}function zy(e,t){if(e==null)return{};var n={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;n[i]=e[i]}return n}function Nt(e,t){if(e==null)return{};var n,i,o=zy(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var By=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Dy(e){var t=e.defaultInputValue,n=t===void 0?"":t,i=e.defaultMenuIsOpen,o=i===void 0?!1:i,l=e.defaultValue,a=l===void 0?null:l,c=e.inputValue,s=e.menuIsOpen,d=e.onChange,u=e.onInputChange,p=e.onMenuClose,g=e.onMenuOpen,y=e.value,b=Nt(e,By),f=v.useState(c!==void 0?c:n),j=Et(f,2),h=j[0],m=j[1],x=v.useState(s!==void 0?s:o),w=Et(x,2),S=w[0],E=w[1],C=v.useState(y!==void 0?y:a),z=Et(C,2),L=z[0],R=z[1],G=v.useCallback(function(D,A){typeof d=="function"&&d(D,A),R(D)},[d]),X=v.useCallback(function(D,A){var W;typeof u=="function"&&(W=u(D,A)),m(W!==void 0?W:D)},[u]),fe=v.useCallback(function(){typeof g=="function"&&g(),E(!0)},[g]),T=v.useCallback(function(){typeof p=="function"&&p(),E(!1)},[p]),k=c!==void 0?c:h,M=s!==void 0?s:S,_=y!==void 0?y:L;return I(I({},b),{},{inputValue:k,menuIsOpen:M,onChange:G,onInputChange:X,onMenuClose:T,onMenuOpen:fe,value:_})}function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},O.apply(null,arguments)}function Ty(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Id(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,$f(i.key),i)}}function Py(e,t,n){return t&&Id(e.prototype,t),n&&Id(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _a(e,t){return _a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},_a(e,t)}function Ry(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_a(e,t)}function yo(e){return yo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},yo(e)}function Gf(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Gf=function(){return!!e})()}function Ay(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ny(e,t){if(t&&(vn(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ay(e)}function My(e){var t=Gf();return function(){var n,i=yo(e);if(t){var o=yo(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Ny(this,n)}}function Iy(e){if(Array.isArray(e))return Fa(e)}function Oy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ly(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ks(e){return Iy(e)||Oy(e)||Uf(e)||Ly()}function Wy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Fy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var _y=function(){function e(n){var i=this;this._insertTag=function(o){var l;i.tags.length===0?i.insertionPoint?l=i.insertionPoint.nextSibling:i.prepend?l=i.container.firstChild:l=i.before:l=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(o,l),i.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Fy(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=Wy(o);try{l.insertRule(i,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){var o;return(o=i.parentNode)==null?void 0:o.removeChild(i)}),this.tags=[],this.ctr=0},e}(),De="-ms-",vo="-moz-",$="-webkit-",Kf="comm",Qs="rule",qs="decl",Vy="@import",Qf="@keyframes",Yy="@layer",Hy=Math.abs,Yo=String.fromCharCode,$y=Object.assign;function Uy(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function qf(e){return e.trim()}function Gy(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function Va(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function qr(e,t,n){return e.slice(t,n)}function ht(e){return e.length}function Xs(e){return e.length}function Ci(e,t){return t.push(e),e}function Ky(e,t){return e.map(t).join("")}var Ho=1,Xn=1,Xf=0,_e=0,ue=0,rr="";function $o(e,t,n,i,o,l,a){return{value:e,root:t,parent:n,type:i,props:o,children:l,line:Ho,column:Xn,length:a,return:""}}function fr(e,t){return $y($o("",null,null,"",null,null,0),e,{length:-e.length},t)}function Qy(){return ue}function qy(){return ue=_e>0?we(rr,--_e):0,Xn--,ue===10&&(Xn=1,Ho--),ue}function Ue(){return ue=_e<Xf?we(rr,_e++):0,Xn++,ue===10&&(Xn=1,Ho++),ue}function vt(){return we(rr,_e)}function Vi(){return _e}function oi(e,t){return qr(rr,e,t)}function Xr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jf(e){return Ho=Xn=1,Xf=ht(rr=e),_e=0,[]}function Zf(e){return rr="",e}function Yi(e){return qf(oi(_e-1,Ya(e===91?e+2:e===40?e+1:e)))}function Xy(e){for(;(ue=vt())&&ue<33;)Ue();return Xr(e)>2||Xr(ue)>3?"":" "}function Jy(e,t){for(;--t&&Ue()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return oi(e,Vi()+(t<6&&vt()==32&&Ue()==32))}function Ya(e){for(;Ue();)switch(ue){case e:return _e;case 34:case 39:e!==34&&e!==39&&Ya(ue);break;case 40:e===41&&Ya(e);break;case 92:Ue();break}return _e}function Zy(e,t){for(;Ue()&&e+ue!==57;)if(e+ue===84&&vt()===47)break;return"/*"+oi(t,_e-1)+"*"+Yo(e===47?e:Ue())}function ev(e){for(;!Xr(vt());)Ue();return oi(e,_e)}function tv(e){return Zf(Hi("",null,null,null,[""],e=Jf(e),0,[0],e))}function Hi(e,t,n,i,o,l,a,c,s){for(var d=0,u=0,p=a,g=0,y=0,b=0,f=1,j=1,h=1,m=0,x="",w=o,S=l,E=i,C=x;j;)switch(b=m,m=Ue()){case 40:if(b!=108&&we(C,p-1)==58){Va(C+=U(Yi(m),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:C+=Yi(m);break;case 9:case 10:case 13:case 32:C+=Xy(b);break;case 92:C+=Jy(Vi()-1,7);continue;case 47:switch(vt()){case 42:case 47:Ci(nv(Zy(Ue(),Vi()),t,n),s);break;default:C+="/"}break;case 123*f:c[d++]=ht(C)*h;case 125*f:case 59:case 0:switch(m){case 0:case 125:j=0;case 59+u:h==-1&&(C=U(C,/\f/g,"")),y>0&&ht(C)-p&&Ci(y>32?Ld(C+";",i,n,p-1):Ld(U(C," ","")+";",i,n,p-2),s);break;case 59:C+=";";default:if(Ci(E=Od(C,t,n,d,u,o,c,x,w=[],S=[],p),l),m===123)if(u===0)Hi(C,t,E,E,w,l,p,c,S);else switch(g===99&&we(C,3)===110?100:g){case 100:case 108:case 109:case 115:Hi(e,E,E,i&&Ci(Od(e,E,E,0,0,o,c,x,o,w=[],p),S),o,S,p,c,i?w:S);break;default:Hi(C,E,E,E,[""],S,0,c,S)}}d=u=y=0,f=h=1,x=C="",p=a;break;case 58:p=1+ht(C),y=b;default:if(f<1){if(m==123)--f;else if(m==125&&f++==0&&qy()==125)continue}switch(C+=Yo(m),m*f){case 38:h=u>0?1:(C+="\f",-1);break;case 44:c[d++]=(ht(C)-1)*h,h=1;break;case 64:vt()===45&&(C+=Yi(Ue())),g=vt(),u=p=ht(x=C+=ev(Vi())),m++;break;case 45:b===45&&ht(C)==2&&(f=0)}}return l}function Od(e,t,n,i,o,l,a,c,s,d,u){for(var p=o-1,g=o===0?l:[""],y=Xs(g),b=0,f=0,j=0;b<i;++b)for(var h=0,m=qr(e,p+1,p=Hy(f=a[b])),x=e;h<y;++h)(x=qf(f>0?g[h]+" "+m:U(m,/&\f/g,g[h])))&&(s[j++]=x);return $o(e,t,n,o===0?Qs:c,s,d,u)}function nv(e,t,n){return $o(e,t,n,Kf,Yo(Qy()),qr(e,2,-2),0)}function Ld(e,t,n,i){return $o(e,t,n,qs,qr(e,0,i),qr(e,i+1,-1),i)}function Yn(e,t){for(var n="",i=Xs(e),o=0;o<i;o++)n+=t(e[o],o,e,t)||"";return n}function rv(e,t,n,i){switch(e.type){case Yy:if(e.children.length)break;case Vy:case qs:return e.return=e.return||e.value;case Kf:return"";case Qf:return e.return=e.value+"{"+Yn(e.children,i)+"}";case Qs:e.value=e.props.join(",")}return ht(n=Yn(e.children,i))?e.return=e.value+"{"+n+"}":""}function iv(e){var t=Xs(e);return function(n,i,o,l){for(var a="",c=0;c<t;c++)a+=e[c](n,i,o,l)||"";return a}}function ov(e){return function(t){t.root||(t=t.return)&&e(t)}}function lv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var av=function(t,n,i){for(var o=0,l=0;o=l,l=vt(),o===38&&l===12&&(n[i]=1),!Xr(l);)Ue();return oi(t,_e)},sv=function(t,n){var i=-1,o=44;do switch(Xr(o)){case 0:o===38&&vt()===12&&(n[i]=1),t[i]+=av(_e-1,n,i);break;case 2:t[i]+=Yi(o);break;case 4:if(o===44){t[++i]=vt()===58?"&\f":"",n[i]=t[i].length;break}default:t[i]+=Yo(o)}while(o=Ue());return t},cv=function(t,n){return Zf(sv(Jf(t),n))},Wd=new WeakMap,dv=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,i=t.parent,o=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Wd.get(i))&&!o){Wd.set(t,!0);for(var l=[],a=cv(n,l),c=i.props,s=0,d=0;s<a.length;s++)for(var u=0;u<c.length;u++,d++)t.props[d]=l[s]?a[s].replace(/&\f/g,c[u]):c[u]+" "+a[s]}}},uv=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function eh(e,t){switch(Uy(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+vo+e+De+e+e;case 6828:case 4268:return $+e+De+e+e;case 6165:return $+e+De+"flex-"+e+e;case 5187:return $+e+U(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+De+"flex-$1$2")+e;case 5443:return $+e+De+"flex-item-"+U(e,/flex-|-self/,"")+e;case 4675:return $+e+De+"flex-line-pack"+U(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+De+U(e,"shrink","negative")+e;case 5292:return $+e+De+U(e,"basis","preferred-size")+e;case 6060:return $+"box-"+U(e,"-grow","")+$+e+De+U(e,"grow","positive")+e;case 4554:return $+U(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ht(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+vo+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Va(e,"stretch")?eh(U(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,ht(e)-3-(~Va(e,"!important")&&10))){case 107:return U(e,":",":"+$)+e;case 101:return U(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(we(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+De+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return $+e+De+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+De+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+De+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+De+e+e}return e}var pv=function(t,n,i,o){if(t.length>-1&&!t.return)switch(t.type){case qs:t.return=eh(t.value,t.length);break;case Qf:return Yn([fr(t,{value:U(t.value,"@","@"+$)})],o);case Qs:if(t.length)return Ky(t.props,function(l){switch(Gy(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Yn([fr(t,{props:[U(l,/:(read-\w+)/,":"+vo+"$1")]})],o);case"::placeholder":return Yn([fr(t,{props:[U(l,/:(plac\w+)/,":"+$+"input-$1")]}),fr(t,{props:[U(l,/:(plac\w+)/,":"+vo+"$1")]}),fr(t,{props:[U(l,/:(plac\w+)/,De+"input-$1")]})],o)}return""})}},fv=[pv],hv=function(t){var n=t.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(f){var j=f.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var o=t.stylisPlugins||fv,l={},a,c=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(f){for(var j=f.getAttribute("data-emotion").split(" "),h=1;h<j.length;h++)l[j[h]]=!0;c.push(f)});var s,d=[dv,uv];{var u,p=[rv,ov(function(f){u.insert(f)})],g=iv(d.concat(o,p)),y=function(j){return Yn(tv(j),g)};s=function(j,h,m,x){u=m,y(j?j+"{"+h.styles+"}":h.styles),x&&(b.inserted[h.name]=!0)}}var b={key:n,sheet:new _y({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:s};return b.sheet.hydrate(c),b},th={exports:{}},Q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve=typeof Symbol=="function"&&Symbol.for,Js=ve?Symbol.for("react.element"):60103,Zs=ve?Symbol.for("react.portal"):60106,Uo=ve?Symbol.for("react.fragment"):60107,Go=ve?Symbol.for("react.strict_mode"):60108,Ko=ve?Symbol.for("react.profiler"):60114,Qo=ve?Symbol.for("react.provider"):60109,qo=ve?Symbol.for("react.context"):60110,ec=ve?Symbol.for("react.async_mode"):60111,Xo=ve?Symbol.for("react.concurrent_mode"):60111,Jo=ve?Symbol.for("react.forward_ref"):60112,Zo=ve?Symbol.for("react.suspense"):60113,mv=ve?Symbol.for("react.suspense_list"):60120,el=ve?Symbol.for("react.memo"):60115,tl=ve?Symbol.for("react.lazy"):60116,gv=ve?Symbol.for("react.block"):60121,xv=ve?Symbol.for("react.fundamental"):60117,yv=ve?Symbol.for("react.responder"):60118,vv=ve?Symbol.for("react.scope"):60119;function qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Js:switch(e=e.type,e){case ec:case Xo:case Uo:case Ko:case Go:case Zo:return e;default:switch(e=e&&e.$$typeof,e){case qo:case Jo:case tl:case el:case Qo:return e;default:return t}}case Zs:return t}}}function nh(e){return qe(e)===Xo}Q.AsyncMode=ec;Q.ConcurrentMode=Xo;Q.ContextConsumer=qo;Q.ContextProvider=Qo;Q.Element=Js;Q.ForwardRef=Jo;Q.Fragment=Uo;Q.Lazy=tl;Q.Memo=el;Q.Portal=Zs;Q.Profiler=Ko;Q.StrictMode=Go;Q.Suspense=Zo;Q.isAsyncMode=function(e){return nh(e)||qe(e)===ec};Q.isConcurrentMode=nh;Q.isContextConsumer=function(e){return qe(e)===qo};Q.isContextProvider=function(e){return qe(e)===Qo};Q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Js};Q.isForwardRef=function(e){return qe(e)===Jo};Q.isFragment=function(e){return qe(e)===Uo};Q.isLazy=function(e){return qe(e)===tl};Q.isMemo=function(e){return qe(e)===el};Q.isPortal=function(e){return qe(e)===Zs};Q.isProfiler=function(e){return qe(e)===Ko};Q.isStrictMode=function(e){return qe(e)===Go};Q.isSuspense=function(e){return qe(e)===Zo};Q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Uo||e===Xo||e===Ko||e===Go||e===Zo||e===mv||typeof e=="object"&&e!==null&&(e.$$typeof===tl||e.$$typeof===el||e.$$typeof===Qo||e.$$typeof===qo||e.$$typeof===Jo||e.$$typeof===xv||e.$$typeof===yv||e.$$typeof===vv||e.$$typeof===gv)};Q.typeOf=qe;th.exports=Q;var bv=th.exports,rh=bv,jv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ih={};ih[rh.ForwardRef]=jv;ih[rh.Memo]=wv;var Sv=!0;function Cv(e,t,n){var i="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(i+=o+" ")}),i}var oh=function(t,n,i){var o=t.key+"-"+n.name;(i===!1||Sv===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},kv=function(t,n,i){oh(t,n,i);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function Ev(e){for(var t=0,n,i=0,o=e.length;o>=4;++i,o-=4)n=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var zv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bv=/[A-Z]|^ms/g,Dv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,lh=function(t){return t.charCodeAt(1)===45},Fd=function(t){return t!=null&&typeof t!="boolean"},Rl=lv(function(e){return lh(e)?e:e.replace(Bv,"-$&").toLowerCase()}),_d=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Dv,function(i,o,l){return mt={name:o,styles:l,next:mt},o})}return zv[t]!==1&&!lh(t)&&typeof n=="number"&&n!==0?n+"px":n};function Jr(e,t,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return mt={name:o.name,styles:o.styles,next:mt},o.name;var l=n;if(l.styles!==void 0){var a=l.next;if(a!==void 0)for(;a!==void 0;)mt={name:a.name,styles:a.styles,next:mt},a=a.next;var c=l.styles+";";return c}return Tv(e,t,n)}case"function":{if(e!==void 0){var s=mt,d=n(e);return mt=s,Jr(e,t,d)}break}}var u=n;return u}function Tv(e,t,n){var i="";if(Array.isArray(n))for(var o=0;o<n.length;o++)i+=Jr(e,t,n[o])+";";else for(var l in n){var a=n[l];if(typeof a!="object"){var c=a;Fd(c)&&(i+=Rl(l)+":"+_d(l,c)+";")}else if(Array.isArray(a)&&typeof a[0]=="string"&&t==null)for(var s=0;s<a.length;s++)Fd(a[s])&&(i+=Rl(l)+":"+_d(l,a[s])+";");else{var d=Jr(e,t,a);switch(l){case"animation":case"animationName":{i+=Rl(l)+":"+d+";";break}default:i+=l+"{"+d+"}"}}}return i}var Vd=/label:\s*([^\s;{]+)\s*(;|$)/g,mt;function ah(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";mt=void 0;var l=e[0];if(l==null||l.raw===void 0)i=!1,o+=Jr(n,t,l);else{var a=l;o+=a[0]}for(var c=1;c<e.length;c++)if(o+=Jr(n,t,e[c]),i){var s=l;o+=s[c]}Vd.lastIndex=0;for(var d="",u;(u=Vd.exec(o))!==null;)d+="-"+u[1];var p=Ev(o)+d;return{name:p,styles:o,next:mt}}var Pv=function(t){return t()},Rv=Fl.useInsertionEffect?Fl.useInsertionEffect:!1,Av=Rv||Pv,sh=v.createContext(typeof HTMLElement<"u"?hv({key:"css"}):null);sh.Provider;var Nv=function(t){return v.forwardRef(function(n,i){var o=v.useContext(sh);return t(n,o,i)})},Mv=v.createContext({}),tc={}.hasOwnProperty,Ha="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Iv=function(t,n){var i={};for(var o in n)tc.call(n,o)&&(i[o]=n[o]);return i[Ha]=t,i},Ov=function(t){var n=t.cache,i=t.serialized,o=t.isStringTag;return oh(n,i,o),Av(function(){return kv(n,i,o)}),null},Lv=Nv(function(e,t,n){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var o=e[Ha],l=[i],a="";typeof e.className=="string"?a=Cv(t.registered,l,e.className):e.className!=null&&(a=e.className+" ");var c=ah(l,void 0,v.useContext(Mv));a+=t.key+"-"+c.name;var s={};for(var d in e)tc.call(e,d)&&d!=="css"&&d!==Ha&&(s[d]=e[d]);return s.className=a,n&&(s.ref=n),v.createElement(v.Fragment,null,v.createElement(Ov,{cache:t,serialized:c,isStringTag:typeof o=="string"}),v.createElement(o,s))}),Wv=Lv,N=function(t,n){var i=arguments;if(n==null||!tc.call(n,"css"))return v.createElement.apply(void 0,i);var o=i.length,l=new Array(o);l[0]=Wv,l[1]=Iv(t,n);for(var a=2;a<o;a++)l[a]=i[a];return v.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(N||(N={}));function nc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ah(t)}function Fv(){var e=nc.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function _v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const Vv=Math.min,Yv=Math.max,bo=Math.round,ki=Math.floor,jo=e=>({x:e,y:e});function Hv(e){const{x:t,y:n,width:i,height:o}=e;return{width:i,height:o,top:n,left:t,right:t+i,bottom:n+o,x:t,y:n}}function nl(){return typeof window<"u"}function ch(e){return uh(e)?(e.nodeName||"").toLowerCase():"#document"}function Pt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function dh(e){var t;return(t=(uh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function uh(e){return nl()?e instanceof Node||e instanceof Pt(e).Node:!1}function $v(e){return nl()?e instanceof Element||e instanceof Pt(e).Element:!1}function rc(e){return nl()?e instanceof HTMLElement||e instanceof Pt(e).HTMLElement:!1}function Yd(e){return!nl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Pt(e).ShadowRoot}const Uv=new Set(["inline","contents"]);function ph(e){const{overflow:t,overflowX:n,overflowY:i,display:o}=ic(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!Uv.has(o)}function Gv(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Kv=new Set(["html","body","#document"]);function Qv(e){return Kv.has(ch(e))}function ic(e){return Pt(e).getComputedStyle(e)}function qv(e){if(ch(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Yd(e)&&e.host||dh(e);return Yd(t)?t.host:t}function fh(e){const t=qv(e);return Qv(t)?e.ownerDocument?e.ownerDocument.body:e.body:rc(t)&&ph(t)?t:fh(t)}function wo(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=fh(e),l=o===((i=e.ownerDocument)==null?void 0:i.body),a=Pt(o);if(l){const c=$a(a);return t.concat(a,a.visualViewport||[],ph(o)?o:[],c&&n?wo(c):[])}return t.concat(o,wo(o,[],n))}function $a(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Xv(e){const t=ic(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=rc(e),l=o?e.offsetWidth:n,a=o?e.offsetHeight:i,c=bo(n)!==l||bo(i)!==a;return c&&(n=l,i=a),{width:n,height:i,$:c}}function oc(e){return $v(e)?e:e.contextElement}function Hd(e){const t=oc(e);if(!rc(t))return jo(1);const n=t.getBoundingClientRect(),{width:i,height:o,$:l}=Xv(t);let a=(l?bo(n.width):n.width)/i,c=(l?bo(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const Jv=jo(0);function Zv(e){const t=Pt(e);return!Gv()||!t.visualViewport?Jv:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function e1(e,t,n){return!1}function $d(e,t,n,i){t===void 0&&(t=!1);const o=e.getBoundingClientRect(),l=oc(e);let a=jo(1);t&&(a=Hd(e));const c=e1()?Zv(l):jo(0);let s=(o.left+c.x)/a.x,d=(o.top+c.y)/a.y,u=o.width/a.x,p=o.height/a.y;if(l){const g=Pt(l),y=i;let b=g,f=$a(b);for(;f&&i&&y!==b;){const j=Hd(f),h=f.getBoundingClientRect(),m=ic(f),x=h.left+(f.clientLeft+parseFloat(m.paddingLeft))*j.x,w=h.top+(f.clientTop+parseFloat(m.paddingTop))*j.y;s*=j.x,d*=j.y,u*=j.x,p*=j.y,s+=x,d+=w,b=Pt(f),f=$a(b)}}return Hv({width:u,height:p,x:s,y:d})}function hh(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function t1(e,t){let n=null,i;const o=dh(e);function l(){var c;clearTimeout(i),(c=n)==null||c.disconnect(),n=null}function a(c,s){c===void 0&&(c=!1),s===void 0&&(s=1),l();const d=e.getBoundingClientRect(),{left:u,top:p,width:g,height:y}=d;if(c||t(),!g||!y)return;const b=ki(p),f=ki(o.clientWidth-(u+g)),j=ki(o.clientHeight-(p+y)),h=ki(u),x={rootMargin:-b+"px "+-f+"px "+-j+"px "+-h+"px",threshold:Yv(0,Vv(1,s))||1};let w=!0;function S(E){const C=E[0].intersectionRatio;if(C!==s){if(!w)return a();C?a(!1,C):i=setTimeout(()=>{a(!1,1e-7)},1e3)}C===1&&!hh(d,e.getBoundingClientRect())&&a(),w=!1}try{n=new IntersectionObserver(S,{...x,root:o.ownerDocument})}catch{n=new IntersectionObserver(S,x)}n.observe(e)}return a(!0),l}function n1(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:l=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:s=!1}=i,d=oc(e),u=o||l?[...d?wo(d):[],...wo(t)]:[];u.forEach(h=>{o&&h.addEventListener("scroll",n,{passive:!0}),l&&h.addEventListener("resize",n)});const p=d&&c?t1(d,n):null;let g=-1,y=null;a&&(y=new ResizeObserver(h=>{let[m]=h;m&&m.target===d&&y&&(y.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=y)==null||x.observe(t)})),n()}),d&&!s&&y.observe(d),y.observe(t));let b,f=s?$d(e):null;s&&j();function j(){const h=$d(e);f&&!hh(f,h)&&n(),f=h,b=requestAnimationFrame(j)}return n(),()=>{var h;u.forEach(m=>{o&&m.removeEventListener("scroll",n),l&&m.removeEventListener("resize",n)}),p==null||p(),(h=y)==null||h.disconnect(),y=null,s&&cancelAnimationFrame(b)}}var Ua=v.useLayoutEffect,r1=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],So=function(){};function i1(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function o1(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var l=[].concat(i);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&l.push("".concat(i1(e,a)));return l.filter(function(c){return c}).map(function(c){return String(c).trim()}).join(" ")}var Ud=function(t){return h1(t)?t.filter(Boolean):vn(t)==="object"&&t!==null?[t]:[]},mh=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Nt(t,r1);return I({},n)},ae=function(t,n,i){var o=t.cx,l=t.getStyles,a=t.getClassNames,c=t.className;return{css:l(n,t),className:o(i??{},a(n,t),c)}};function rl(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function l1(e){return rl(e)?window.innerHeight:e.clientHeight}function gh(e){return rl(e)?window.pageYOffset:e.scrollTop}function Co(e,t){if(rl(e)){window.scrollTo(0,t);return}e.scrollTop=t}function a1(e){var t=getComputedStyle(e),n=t.position==="absolute",i=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var o=e;o=o.parentElement;)if(t=getComputedStyle(o),!(n&&t.position==="static")&&i.test(t.overflow+t.overflowY+t.overflowX))return o;return document.documentElement}function s1(e,t,n,i){return n*((e=e/i-1)*e*e+1)+t}function Ei(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:So,o=gh(e),l=t-o,a=10,c=0;function s(){c+=a;var d=s1(c,o,l,n);Co(e,d),c<n?window.requestAnimationFrame(s):i(e)}s()}function Gd(e,t){var n=e.getBoundingClientRect(),i=t.getBoundingClientRect(),o=t.offsetHeight/3;i.bottom+o>n.bottom?Co(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+o,e.scrollHeight)):i.top-o<n.top&&Co(e,Math.max(t.offsetTop-o,0))}function c1(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Kd(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function d1(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var xh=!1,u1={get passive(){return xh=!0}},zi=typeof window<"u"?window:{};zi.addEventListener&&zi.removeEventListener&&(zi.addEventListener("p",So,u1),zi.removeEventListener("p",So,!1));var p1=xh;function f1(e){return e!=null}function h1(e){return Array.isArray(e)}function Bi(e,t,n){return e?t:n}var m1=function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var l=Object.entries(t).filter(function(a){var c=Et(a,1),s=c[0];return!i.includes(s)});return l.reduce(function(a,c){var s=Et(c,2),d=s[0],u=s[1];return a[d]=u,a},{})},g1=["children","innerProps"],x1=["children","innerProps"];function y1(e){var t=e.maxHeight,n=e.menuEl,i=e.minHeight,o=e.placement,l=e.shouldScroll,a=e.isFixedPosition,c=e.controlHeight,s=a1(n),d={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return d;var u=s.getBoundingClientRect(),p=u.height,g=n.getBoundingClientRect(),y=g.bottom,b=g.height,f=g.top,j=n.offsetParent.getBoundingClientRect(),h=j.top,m=a?window.innerHeight:l1(s),x=gh(s),w=parseInt(getComputedStyle(n).marginBottom,10),S=parseInt(getComputedStyle(n).marginTop,10),E=h-S,C=m-f,z=E+x,L=p-x-f,R=y-m+x+w,G=x+f-S,X=160;switch(o){case"auto":case"bottom":if(C>=b)return{placement:"bottom",maxHeight:t};if(L>=b&&!a)return l&&Ei(s,R,X),{placement:"bottom",maxHeight:t};if(!a&&L>=i||a&&C>=i){l&&Ei(s,R,X);var fe=a?C-w:L-w;return{placement:"bottom",maxHeight:fe}}if(o==="auto"||a){var T=t,k=a?E:z;return k>=i&&(T=Math.min(k-w-c,t)),{placement:"top",maxHeight:T}}if(o==="bottom")return l&&Co(s,R),{placement:"bottom",maxHeight:t};break;case"top":if(E>=b)return{placement:"top",maxHeight:t};if(z>=b&&!a)return l&&Ei(s,G,X),{placement:"top",maxHeight:t};if(!a&&z>=i||a&&E>=i){var M=t;return(!a&&z>=i||a&&E>=i)&&(M=a?E-S:z-S),l&&Ei(s,G,X),{placement:"top",maxHeight:M}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(o,'".'))}return d}function v1(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var yh=function(t){return t==="auto"?"bottom":t},b1=function(t,n){var i,o=t.placement,l=t.theme,a=l.borderRadius,c=l.spacing,s=l.colors;return I((i={label:"menu"},vr(i,v1(o),"100%"),vr(i,"position","absolute"),vr(i,"width","100%"),vr(i,"zIndex",1),i),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:c.menuGutter,marginTop:c.menuGutter})},vh=v.createContext(null),j1=function(t){var n=t.children,i=t.minMenuHeight,o=t.maxMenuHeight,l=t.menuPlacement,a=t.menuPosition,c=t.menuShouldScrollIntoView,s=t.theme,d=v.useContext(vh)||{},u=d.setPortalPlacement,p=v.useRef(null),g=v.useState(o),y=Et(g,2),b=y[0],f=y[1],j=v.useState(null),h=Et(j,2),m=h[0],x=h[1],w=s.spacing.controlHeight;return Ua(function(){var S=p.current;if(S){var E=a==="fixed",C=c&&!E,z=y1({maxHeight:o,menuEl:S,minHeight:i,placement:l,shouldScroll:C,isFixedPosition:E,controlHeight:w});f(z.maxHeight),x(z.placement),u==null||u(z.placement)}},[o,l,a,c,i,u,w]),n({ref:p,placerProps:I(I({},t),{},{placement:m||yh(l),maxHeight:b})})},w1=function(t){var n=t.children,i=t.innerRef,o=t.innerProps;return N("div",O({},ae(t,"menu",{menu:!0}),{ref:i},o),n)},S1=w1,C1=function(t,n){var i=t.maxHeight,o=t.theme.spacing.baseUnit;return I({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:o,paddingTop:o})},k1=function(t){var n=t.children,i=t.innerProps,o=t.innerRef,l=t.isMulti;return N("div",O({},ae(t,"menuList",{"menu-list":!0,"menu-list--is-multi":l}),{ref:o},i),n)},bh=function(t,n){var i=t.theme,o=i.spacing.baseUnit,l=i.colors;return I({textAlign:"center"},n?{}:{color:l.neutral40,padding:"".concat(o*2,"px ").concat(o*3,"px")})},E1=bh,z1=bh,B1=function(t){var n=t.children,i=n===void 0?"No options":n,o=t.innerProps,l=Nt(t,g1);return N("div",O({},ae(I(I({},l),{},{children:i,innerProps:o}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),o),i)},D1=function(t){var n=t.children,i=n===void 0?"Loading...":n,o=t.innerProps,l=Nt(t,x1);return N("div",O({},ae(I(I({},l),{},{children:i,innerProps:o}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),o),i)},T1=function(t){var n=t.rect,i=t.offset,o=t.position;return{left:n.left,position:o,top:i,width:n.width,zIndex:1}},P1=function(t){var n=t.appendTo,i=t.children,o=t.controlElement,l=t.innerProps,a=t.menuPlacement,c=t.menuPosition,s=v.useRef(null),d=v.useRef(null),u=v.useState(yh(a)),p=Et(u,2),g=p[0],y=p[1],b=v.useMemo(function(){return{setPortalPlacement:y}},[]),f=v.useState(null),j=Et(f,2),h=j[0],m=j[1],x=v.useCallback(function(){if(o){var C=c1(o),z=c==="fixed"?0:window.pageYOffset,L=C[g]+z;(L!==(h==null?void 0:h.offset)||C.left!==(h==null?void 0:h.rect.left)||C.width!==(h==null?void 0:h.rect.width))&&m({offset:L,rect:C})}},[o,c,g,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Ua(function(){x()},[x]);var w=v.useCallback(function(){typeof d.current=="function"&&(d.current(),d.current=null),o&&s.current&&(d.current=n1(o,s.current,x,{elementResize:"ResizeObserver"in window}))},[o,x]);Ua(function(){w()},[w]);var S=v.useCallback(function(C){s.current=C,w()},[w]);if(!n&&c!=="fixed"||!h)return null;var E=N("div",O({ref:S},ae(I(I({},t),{},{offset:h.offset,position:c,rect:h.rect}),"menuPortal",{"menu-portal":!0}),l),i);return N(vh.Provider,{value:b},n?Sf.createPortal(E,n):E)},R1=function(t){var n=t.isDisabled,i=t.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},A1=function(t){var n=t.children,i=t.innerProps,o=t.isDisabled,l=t.isRtl;return N("div",O({},ae(t,"container",{"--is-disabled":o,"--is-rtl":l}),i),n)},N1=function(t,n){var i=t.theme.spacing,o=t.isMulti,l=t.hasValue,a=t.selectProps.controlShouldRenderValue;return I({alignItems:"center",display:o&&l&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},M1=function(t){var n=t.children,i=t.innerProps,o=t.isMulti,l=t.hasValue;return N("div",O({},ae(t,"valueContainer",{"value-container":!0,"value-container--is-multi":o,"value-container--has-value":l}),i),n)},I1=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},O1=function(t){var n=t.children,i=t.innerProps;return N("div",O({},ae(t,"indicatorsContainer",{indicators:!0}),i),n)},Qd,L1=["size"],W1=["innerProps","isRtl","size"],F1={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},jh=function(t){var n=t.size,i=Nt(t,L1);return N("svg",O({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:F1},i))},lc=function(t){return N(jh,O({size:20},t),N("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},wh=function(t){return N(jh,O({size:20},t),N("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Sh=function(t,n){var i=t.isFocused,o=t.theme,l=o.spacing.baseUnit,a=o.colors;return I({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:i?a.neutral60:a.neutral20,padding:l*2,":hover":{color:i?a.neutral80:a.neutral40}})},_1=Sh,V1=function(t){var n=t.children,i=t.innerProps;return N("div",O({},ae(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),n||N(wh,null))},Y1=Sh,H1=function(t){var n=t.children,i=t.innerProps;return N("div",O({},ae(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),n||N(lc,null))},$1=function(t,n){var i=t.isDisabled,o=t.theme,l=o.spacing.baseUnit,a=o.colors;return I({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:i?a.neutral10:a.neutral20,marginBottom:l*2,marginTop:l*2})},U1=function(t){var n=t.innerProps;return N("span",O({},n,ae(t,"indicatorSeparator",{"indicator-separator":!0})))},G1=Fv(Qd||(Qd=_v([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),K1=function(t,n){var i=t.isFocused,o=t.size,l=t.theme,a=l.colors,c=l.spacing.baseUnit;return I({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:o,lineHeight:1,marginRight:o,textAlign:"center",verticalAlign:"middle"},n?{}:{color:i?a.neutral60:a.neutral20,padding:c*2})},Al=function(t){var n=t.delay,i=t.offset;return N("span",{css:nc({animation:"".concat(G1," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Q1=function(t){var n=t.innerProps,i=t.isRtl,o=t.size,l=o===void 0?4:o,a=Nt(t,W1);return N("div",O({},ae(I(I({},a),{},{innerProps:n,isRtl:i,size:l}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),N(Al,{delay:0,offset:i}),N(Al,{delay:160,offset:!0}),N(Al,{delay:320,offset:!i}))},q1=function(t,n){var i=t.isDisabled,o=t.isFocused,l=t.theme,a=l.colors,c=l.borderRadius,s=l.spacing;return I({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:i?a.neutral5:a.neutral0,borderColor:i?a.neutral10:o?a.primary:a.neutral20,borderRadius:c,borderStyle:"solid",borderWidth:1,boxShadow:o?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:o?a.primary:a.neutral30}})},X1=function(t){var n=t.children,i=t.isDisabled,o=t.isFocused,l=t.innerRef,a=t.innerProps,c=t.menuIsOpen;return N("div",O({ref:l},ae(t,"control",{control:!0,"control--is-disabled":i,"control--is-focused":o,"control--menu-is-open":c}),a,{"aria-disabled":i||void 0}),n)},J1=X1,Z1=["data"],e2=function(t,n){var i=t.theme.spacing;return n?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},t2=function(t){var n=t.children,i=t.cx,o=t.getStyles,l=t.getClassNames,a=t.Heading,c=t.headingProps,s=t.innerProps,d=t.label,u=t.theme,p=t.selectProps;return N("div",O({},ae(t,"group",{group:!0}),s),N(a,O({},c,{selectProps:p,theme:u,getStyles:o,getClassNames:l,cx:i}),d),N("div",null,n))},n2=function(t,n){var i=t.theme,o=i.colors,l=i.spacing;return I({label:"group",cursor:"default",display:"block"},n?{}:{color:o.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:l.baseUnit*3,paddingRight:l.baseUnit*3,textTransform:"uppercase"})},r2=function(t){var n=mh(t);n.data;var i=Nt(n,Z1);return N("div",O({},ae(t,"groupHeading",{"group-heading":!0}),i))},i2=t2,o2=["innerRef","isDisabled","isHidden","inputClassName"],l2=function(t,n){var i=t.isDisabled,o=t.value,l=t.theme,a=l.spacing,c=l.colors;return I(I({visibility:i?"hidden":"visible",transform:o?"translateZ(0)":""},a2),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:c.neutral80})},Ch={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},a2={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":I({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Ch)},s2=function(t){return I({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Ch)},c2=function(t){var n=t.cx,i=t.value,o=mh(t),l=o.innerRef,a=o.isDisabled,c=o.isHidden,s=o.inputClassName,d=Nt(o,o2);return N("div",O({},ae(t,"input",{"input-container":!0}),{"data-value":i||""}),N("input",O({className:n({input:!0},s),ref:l,style:s2(c),disabled:a},d)))},d2=c2,u2=function(t,n){var i=t.theme,o=i.spacing,l=i.borderRadius,a=i.colors;return I({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:l/2,margin:o.baseUnit/2})},p2=function(t,n){var i=t.theme,o=i.borderRadius,l=i.colors,a=t.cropWithEllipsis;return I({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:o/2,color:l.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},f2=function(t,n){var i=t.theme,o=i.spacing,l=i.borderRadius,a=i.colors,c=t.isFocused;return I({alignItems:"center",display:"flex"},n?{}:{borderRadius:l/2,backgroundColor:c?a.dangerLight:void 0,paddingLeft:o.baseUnit,paddingRight:o.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},kh=function(t){var n=t.children,i=t.innerProps;return N("div",i,n)},h2=kh,m2=kh;function g2(e){var t=e.children,n=e.innerProps;return N("div",O({role:"button"},n),t||N(lc,{size:14}))}var x2=function(t){var n=t.children,i=t.components,o=t.data,l=t.innerProps,a=t.isDisabled,c=t.removeProps,s=t.selectProps,d=i.Container,u=i.Label,p=i.Remove;return N(d,{data:o,innerProps:I(I({},ae(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),l),selectProps:s},N(u,{data:o,innerProps:I({},ae(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),N(p,{data:o,innerProps:I(I({},ae(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},c),selectProps:s}))},y2=x2,v2=function(t,n){var i=t.isDisabled,o=t.isFocused,l=t.isSelected,a=t.theme,c=a.spacing,s=a.colors;return I({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:l?s.primary:o?s.primary25:"transparent",color:i?s.neutral20:l?s.neutral0:"inherit",padding:"".concat(c.baseUnit*2,"px ").concat(c.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:l?s.primary:s.primary50}})},b2=function(t){var n=t.children,i=t.isDisabled,o=t.isFocused,l=t.isSelected,a=t.innerRef,c=t.innerProps;return N("div",O({},ae(t,"option",{option:!0,"option--is-disabled":i,"option--is-focused":o,"option--is-selected":l}),{ref:a,"aria-disabled":i},c),n)},j2=b2,w2=function(t,n){var i=t.theme,o=i.spacing,l=i.colors;return I({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:l.neutral50,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},S2=function(t){var n=t.children,i=t.innerProps;return N("div",O({},ae(t,"placeholder",{placeholder:!0}),i),n)},C2=S2,k2=function(t,n){var i=t.isDisabled,o=t.theme,l=o.spacing,a=o.colors;return I({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:i?a.neutral40:a.neutral80,marginLeft:l.baseUnit/2,marginRight:l.baseUnit/2})},E2=function(t){var n=t.children,i=t.isDisabled,o=t.innerProps;return N("div",O({},ae(t,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),o),n)},z2=E2,B2={ClearIndicator:H1,Control:J1,DropdownIndicator:V1,DownChevron:wh,CrossIcon:lc,Group:i2,GroupHeading:r2,IndicatorsContainer:O1,IndicatorSeparator:U1,Input:d2,LoadingIndicator:Q1,Menu:S1,MenuList:k1,MenuPortal:P1,LoadingMessage:D1,NoOptionsMessage:B1,MultiValue:y2,MultiValueContainer:h2,MultiValueLabel:m2,MultiValueRemove:g2,Option:j2,Placeholder:C2,SelectContainer:A1,SingleValue:z2,ValueContainer:M1},D2=function(t){return I(I({},B2),t.components)},qd=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function T2(e,t){return!!(e===t||qd(e)&&qd(t))}function P2(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!T2(e[n],t[n]))return!1;return!0}function R2(e,t){t===void 0&&(t=P2);var n=null;function i(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];if(n&&n.lastThis===this&&t(o,n.lastArgs))return n.lastResult;var a=e.apply(this,o);return n={lastResult:a,lastArgs:o,lastThis:this},a}return i.clear=function(){n=null},i}var A2={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},N2=function(t){return N("span",O({css:A2},t))},Xd=N2,M2={guidance:function(t){var n=t.isSearchable,i=t.isMulti,o=t.tabSelectsValue,l=t.context,a=t.isInitialFocus;switch(l){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(o?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,i=t.label,o=i===void 0?"":i,l=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(o,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(l.length>1?"s":""," ").concat(l.join(","),", selected.");case"select-option":return a?"option ".concat(o," is disabled. Select another option."):"option ".concat(o,", selected.");default:return""}},onFocus:function(t){var n=t.context,i=t.focused,o=t.options,l=t.label,a=l===void 0?"":l,c=t.selectValue,s=t.isDisabled,d=t.isSelected,u=t.isAppleDevice,p=function(f,j){return f&&f.length?"".concat(f.indexOf(j)+1," of ").concat(f.length):""};if(n==="value"&&c)return"value ".concat(a," focused, ").concat(p(c,i),".");if(n==="menu"&&u){var g=s?" disabled":"",y="".concat(d?" selected":"").concat(g);return"".concat(a).concat(y,", ").concat(p(o,i),".")}return""},onFilter:function(t){var n=t.inputValue,i=t.resultsMessage;return"".concat(i).concat(n?" for search term "+n:"",".")}},I2=function(t){var n=t.ariaSelection,i=t.focusedOption,o=t.focusedValue,l=t.focusableOptions,a=t.isFocused,c=t.selectValue,s=t.selectProps,d=t.id,u=t.isAppleDevice,p=s.ariaLiveMessages,g=s.getOptionLabel,y=s.inputValue,b=s.isMulti,f=s.isOptionDisabled,j=s.isSearchable,h=s.menuIsOpen,m=s.options,x=s.screenReaderStatus,w=s.tabSelectsValue,S=s.isLoading,E=s["aria-label"],C=s["aria-live"],z=v.useMemo(function(){return I(I({},M2),p||{})},[p]),L=v.useMemo(function(){var k="";if(n&&z.onChange){var M=n.option,_=n.options,D=n.removedValue,A=n.removedValues,W=n.value,q=function(bt){return Array.isArray(bt)?null:bt},F=D||M||q(W),de=F?g(F):"",be=_||A||void 0,Xe=be?be.map(g):[],he=I({isDisabled:F&&f(F,c),label:de,labels:Xe},n);k=z.onChange(he)}return k},[n,z,f,c,g]),R=v.useMemo(function(){var k="",M=i||o,_=!!(i&&c&&c.includes(i));if(M&&z.onFocus){var D={focused:M,label:g(M),isDisabled:f(M,c),isSelected:_,options:l,context:M===i?"menu":"value",selectValue:c,isAppleDevice:u};k=z.onFocus(D)}return k},[i,o,g,f,z,l,c,u]),G=v.useMemo(function(){var k="";if(h&&m.length&&!S&&z.onFilter){var M=x({count:l.length});k=z.onFilter({inputValue:y,resultsMessage:M})}return k},[l,y,h,z,m,x,S]),X=(n==null?void 0:n.action)==="initial-input-focus",fe=v.useMemo(function(){var k="";if(z.guidance){var M=o?"value":h?"menu":"input";k=z.guidance({"aria-label":E,context:M,isDisabled:i&&f(i,c),isMulti:b,isSearchable:j,tabSelectsValue:w,isInitialFocus:X})}return k},[E,i,o,b,f,j,h,z,c,w,X]),T=N(v.Fragment,null,N("span",{id:"aria-selection"},L),N("span",{id:"aria-focused"},R),N("span",{id:"aria-results"},G),N("span",{id:"aria-guidance"},fe));return N(v.Fragment,null,N(Xd,{id:d},X&&T),N(Xd,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!X&&T))},O2=I2,Ga=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],L2=new RegExp("["+Ga.map(function(e){return e.letters}).join("")+"]","g"),Eh={};for(var Nl=0;Nl<Ga.length;Nl++)for(var Ml=Ga[Nl],Il=0;Il<Ml.letters.length;Il++)Eh[Ml.letters[Il]]=Ml.base;var zh=function(t){return t.replace(L2,function(n){return Eh[n]})},W2=R2(zh),Jd=function(t){return t.replace(/^\s+|\s+$/g,"")},F2=function(t){return"".concat(t.label," ").concat(t.value)},_2=function(t){return function(n,i){if(n.data.__isNew__)return!0;var o=I({ignoreCase:!0,ignoreAccents:!0,stringify:F2,trim:!0,matchFrom:"any"},t),l=o.ignoreCase,a=o.ignoreAccents,c=o.stringify,s=o.trim,d=o.matchFrom,u=s?Jd(i):i,p=s?Jd(c(n)):c(n);return l&&(u=u.toLowerCase(),p=p.toLowerCase()),a&&(u=W2(u),p=zh(p)),d==="start"?p.substr(0,u.length)===u:p.indexOf(u)>-1}},V2=["innerRef"];function Y2(e){var t=e.innerRef,n=Nt(e,V2),i=m1(n,"onExited","in","enter","exit","appear");return N("input",O({ref:t},i,{css:nc({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var H2=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function $2(e){var t=e.isEnabled,n=e.onBottomArrive,i=e.onBottomLeave,o=e.onTopArrive,l=e.onTopLeave,a=v.useRef(!1),c=v.useRef(!1),s=v.useRef(0),d=v.useRef(null),u=v.useCallback(function(j,h){if(d.current!==null){var m=d.current,x=m.scrollTop,w=m.scrollHeight,S=m.clientHeight,E=d.current,C=h>0,z=w-S-x,L=!1;z>h&&a.current&&(i&&i(j),a.current=!1),C&&c.current&&(l&&l(j),c.current=!1),C&&h>z?(n&&!a.current&&n(j),E.scrollTop=w,L=!0,a.current=!0):!C&&-h>x&&(o&&!c.current&&o(j),E.scrollTop=0,L=!0,c.current=!0),L&&H2(j)}},[n,i,o,l]),p=v.useCallback(function(j){u(j,j.deltaY)},[u]),g=v.useCallback(function(j){s.current=j.changedTouches[0].clientY},[]),y=v.useCallback(function(j){var h=s.current-j.changedTouches[0].clientY;u(j,h)},[u]),b=v.useCallback(function(j){if(j){var h=p1?{passive:!1}:!1;j.addEventListener("wheel",p,h),j.addEventListener("touchstart",g,h),j.addEventListener("touchmove",y,h)}},[y,g,p]),f=v.useCallback(function(j){j&&(j.removeEventListener("wheel",p,!1),j.removeEventListener("touchstart",g,!1),j.removeEventListener("touchmove",y,!1))},[y,g,p]);return v.useEffect(function(){if(t){var j=d.current;return b(j),function(){f(j)}}},[t,b,f]),function(j){d.current=j}}var Zd=["boxSizing","height","overflow","paddingRight","position"],eu={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function tu(e){e.cancelable&&e.preventDefault()}function nu(e){e.stopPropagation()}function ru(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function iu(){return"ontouchstart"in window||navigator.maxTouchPoints}var ou=!!(typeof window<"u"&&window.document&&window.document.createElement),hr=0,Cn={capture:!1,passive:!1};function U2(e){var t=e.isEnabled,n=e.accountForScrollbars,i=n===void 0?!0:n,o=v.useRef({}),l=v.useRef(null),a=v.useCallback(function(s){if(ou){var d=document.body,u=d&&d.style;if(i&&Zd.forEach(function(b){var f=u&&u[b];o.current[b]=f}),i&&hr<1){var p=parseInt(o.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,y=window.innerWidth-g+p||0;Object.keys(eu).forEach(function(b){var f=eu[b];u&&(u[b]=f)}),u&&(u.paddingRight="".concat(y,"px"))}d&&iu()&&(d.addEventListener("touchmove",tu,Cn),s&&(s.addEventListener("touchstart",ru,Cn),s.addEventListener("touchmove",nu,Cn))),hr+=1}},[i]),c=v.useCallback(function(s){if(ou){var d=document.body,u=d&&d.style;hr=Math.max(hr-1,0),i&&hr<1&&Zd.forEach(function(p){var g=o.current[p];u&&(u[p]=g)}),d&&iu()&&(d.removeEventListener("touchmove",tu,Cn),s&&(s.removeEventListener("touchstart",ru,Cn),s.removeEventListener("touchmove",nu,Cn)))}},[i]);return v.useEffect(function(){if(t){var s=l.current;return a(s),function(){c(s)}}},[t,a,c]),function(s){l.current=s}}var G2=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},K2={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Q2(e){var t=e.children,n=e.lockEnabled,i=e.captureEnabled,o=i===void 0?!0:i,l=e.onBottomArrive,a=e.onBottomLeave,c=e.onTopArrive,s=e.onTopLeave,d=$2({isEnabled:o,onBottomArrive:l,onBottomLeave:a,onTopArrive:c,onTopLeave:s}),u=U2({isEnabled:n}),p=function(y){d(y),u(y)};return N(v.Fragment,null,n&&N("div",{onClick:G2,css:K2}),t(p))}var q2={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},X2=function(t){var n=t.name,i=t.onFocus;return N("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:q2,value:"",onChange:function(){}})},J2=X2;function ac(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function Z2(){return ac(/^iPhone/i)}function Bh(){return ac(/^Mac/i)}function eb(){return ac(/^iPad/i)||Bh()&&navigator.maxTouchPoints>1}function tb(){return Z2()||eb()}function nb(){return Bh()||tb()}var rb=function(t){return t.label},ib=function(t){return t.label},ob=function(t){return t.value},lb=function(t){return!!t.isDisabled},ab={clearIndicator:Y1,container:R1,control:q1,dropdownIndicator:_1,group:e2,groupHeading:n2,indicatorsContainer:I1,indicatorSeparator:$1,input:l2,loadingIndicator:K1,loadingMessage:z1,menu:b1,menuList:C1,menuPortal:T1,multiValue:u2,multiValueLabel:p2,multiValueRemove:f2,noOptionsMessage:E1,option:v2,placeholder:w2,singleValue:k2,valueContainer:N1},sb={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},cb=4,Dh=4,db=38,ub=Dh*2,pb={baseUnit:Dh,controlHeight:db,menuGutter:ub},Ol={borderRadius:cb,colors:sb,spacing:pb},fb={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Kd(),captureMenuScroll:!Kd(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:_2(),formatGroupLabel:rb,getOptionLabel:ib,getOptionValue:ob,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:lb,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!d1(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function lu(e,t,n,i){var o=Rh(e,t,n),l=Ah(e,t,n),a=Ph(e,t),c=ko(e,t);return{type:"option",data:t,isDisabled:o,isSelected:l,label:a,value:c,index:i}}function $i(e,t){return e.options.map(function(n,i){if("options"in n){var o=n.options.map(function(a,c){return lu(e,a,t,c)}).filter(function(a){return su(e,a)});return o.length>0?{type:"group",data:n,options:o,index:i}:void 0}var l=lu(e,n,t,i);return su(e,l)?l:void 0}).filter(f1)}function Th(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Ks(n.options.map(function(i){return i.data}))):t.push(n.data),t},[])}function au(e,t){return e.reduce(function(n,i){return i.type==="group"?n.push.apply(n,Ks(i.options.map(function(o){return{data:o.data,id:"".concat(t,"-").concat(i.index,"-").concat(o.index)}}))):n.push({data:i.data,id:"".concat(t,"-").concat(i.index)}),n},[])}function hb(e,t){return Th($i(e,t))}function su(e,t){var n=e.inputValue,i=n===void 0?"":n,o=t.data,l=t.isSelected,a=t.label,c=t.value;return(!Mh(e)||!l)&&Nh(e,{label:a,value:c,data:o},i)}function mb(e,t){var n=e.focusedValue,i=e.selectValue,o=i.indexOf(n);if(o>-1){var l=t.indexOf(n);if(l>-1)return n;if(o<t.length)return t[o]}return null}function gb(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Ll=function(t,n){var i,o=(i=t.find(function(l){return l.data===n}))===null||i===void 0?void 0:i.id;return o||null},Ph=function(t,n){return t.getOptionLabel(n)},ko=function(t,n){return t.getOptionValue(n)};function Rh(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function Ah(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var i=ko(e,t);return n.some(function(o){return ko(e,o)===i})}function Nh(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Mh=function(t){var n=t.hideSelectedOptions,i=t.isMulti;return n===void 0?i:n},xb=1,Ih=function(e){Ry(n,e);var t=My(n);function n(i){var o;if(Ty(this,n),o=t.call(this,i),o.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},o.blockOptionHover=!1,o.isComposing=!1,o.commonProps=void 0,o.initialTouchX=0,o.initialTouchY=0,o.openAfterFocus=!1,o.scrollToFocusedOptionOnUpdate=!1,o.userIsDragging=void 0,o.controlRef=null,o.getControlRef=function(s){o.controlRef=s},o.focusedOptionRef=null,o.getFocusedOptionRef=function(s){o.focusedOptionRef=s},o.menuListRef=null,o.getMenuListRef=function(s){o.menuListRef=s},o.inputRef=null,o.getInputRef=function(s){o.inputRef=s},o.focus=o.focusInput,o.blur=o.blurInput,o.onChange=function(s,d){var u=o.props,p=u.onChange,g=u.name;d.name=g,o.ariaOnChange(s,d),p(s,d)},o.setValue=function(s,d,u){var p=o.props,g=p.closeMenuOnSelect,y=p.isMulti,b=p.inputValue;o.onInputChange("",{action:"set-value",prevInputValue:b}),g&&(o.setState({inputIsHiddenAfterUpdate:!y}),o.onMenuClose()),o.setState({clearFocusValueOnUpdate:!0}),o.onChange(s,{action:d,option:u})},o.selectOption=function(s){var d=o.props,u=d.blurInputOnSelect,p=d.isMulti,g=d.name,y=o.state.selectValue,b=p&&o.isOptionSelected(s,y),f=o.isOptionDisabled(s,y);if(b){var j=o.getOptionValue(s);o.setValue(y.filter(function(h){return o.getOptionValue(h)!==j}),"deselect-option",s)}else if(!f)p?o.setValue([].concat(Ks(y),[s]),"select-option",s):o.setValue(s,"select-option");else{o.ariaOnChange(s,{action:"select-option",option:s,name:g});return}u&&o.blurInput()},o.removeValue=function(s){var d=o.props.isMulti,u=o.state.selectValue,p=o.getOptionValue(s),g=u.filter(function(b){return o.getOptionValue(b)!==p}),y=Bi(d,g,g[0]||null);o.onChange(y,{action:"remove-value",removedValue:s}),o.focusInput()},o.clearValue=function(){var s=o.state.selectValue;o.onChange(Bi(o.props.isMulti,[],null),{action:"clear",removedValues:s})},o.popValue=function(){var s=o.props.isMulti,d=o.state.selectValue,u=d[d.length-1],p=d.slice(0,d.length-1),g=Bi(s,p,p[0]||null);u&&o.onChange(g,{action:"pop-value",removedValue:u})},o.getFocusedOptionId=function(s){return Ll(o.state.focusableOptionsWithIds,s)},o.getFocusableOptionsWithIds=function(){return au($i(o.props,o.state.selectValue),o.getElementId("option"))},o.getValue=function(){return o.state.selectValue},o.cx=function(){for(var s=arguments.length,d=new Array(s),u=0;u<s;u++)d[u]=arguments[u];return o1.apply(void 0,[o.props.classNamePrefix].concat(d))},o.getOptionLabel=function(s){return Ph(o.props,s)},o.getOptionValue=function(s){return ko(o.props,s)},o.getStyles=function(s,d){var u=o.props.unstyled,p=ab[s](d,u);p.boxSizing="border-box";var g=o.props.styles[s];return g?g(p,d):p},o.getClassNames=function(s,d){var u,p;return(u=(p=o.props.classNames)[s])===null||u===void 0?void 0:u.call(p,d)},o.getElementId=function(s){return"".concat(o.state.instancePrefix,"-").concat(s)},o.getComponents=function(){return D2(o.props)},o.buildCategorizedOptions=function(){return $i(o.props,o.state.selectValue)},o.getCategorizedOptions=function(){return o.props.menuIsOpen?o.buildCategorizedOptions():[]},o.buildFocusableOptions=function(){return Th(o.buildCategorizedOptions())},o.getFocusableOptions=function(){return o.props.menuIsOpen?o.buildFocusableOptions():[]},o.ariaOnChange=function(s,d){o.setState({ariaSelection:I({value:s},d)})},o.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),o.focusInput())},o.onMenuMouseMove=function(s){o.blockOptionHover=!1},o.onControlMouseDown=function(s){if(!s.defaultPrevented){var d=o.props.openMenuOnClick;o.state.isFocused?o.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&o.onMenuClose():d&&o.openMenu("first"):(d&&(o.openAfterFocus=!0),o.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},o.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!o.props.isDisabled){var d=o.props,u=d.isMulti,p=d.menuIsOpen;o.focusInput(),p?(o.setState({inputIsHiddenAfterUpdate:!u}),o.onMenuClose()):o.openMenu("first"),s.preventDefault()}},o.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(o.clearValue(),s.preventDefault(),o.openAfterFocus=!1,s.type==="touchend"?o.focusInput():setTimeout(function(){return o.focusInput()}))},o.onScroll=function(s){typeof o.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&rl(s.target)&&o.props.onMenuClose():typeof o.props.closeMenuOnScroll=="function"&&o.props.closeMenuOnScroll(s)&&o.props.onMenuClose()},o.onCompositionStart=function(){o.isComposing=!0},o.onCompositionEnd=function(){o.isComposing=!1},o.onTouchStart=function(s){var d=s.touches,u=d&&d.item(0);u&&(o.initialTouchX=u.clientX,o.initialTouchY=u.clientY,o.userIsDragging=!1)},o.onTouchMove=function(s){var d=s.touches,u=d&&d.item(0);if(u){var p=Math.abs(u.clientX-o.initialTouchX),g=Math.abs(u.clientY-o.initialTouchY),y=5;o.userIsDragging=p>y||g>y}},o.onTouchEnd=function(s){o.userIsDragging||(o.controlRef&&!o.controlRef.contains(s.target)&&o.menuListRef&&!o.menuListRef.contains(s.target)&&o.blurInput(),o.initialTouchX=0,o.initialTouchY=0)},o.onControlTouchEnd=function(s){o.userIsDragging||o.onControlMouseDown(s)},o.onClearIndicatorTouchEnd=function(s){o.userIsDragging||o.onClearIndicatorMouseDown(s)},o.onDropdownIndicatorTouchEnd=function(s){o.userIsDragging||o.onDropdownIndicatorMouseDown(s)},o.handleInputChange=function(s){var d=o.props.inputValue,u=s.currentTarget.value;o.setState({inputIsHiddenAfterUpdate:!1}),o.onInputChange(u,{action:"input-change",prevInputValue:d}),o.props.menuIsOpen||o.onMenuOpen()},o.onInputFocus=function(s){o.props.onFocus&&o.props.onFocus(s),o.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(o.openAfterFocus||o.props.openMenuOnFocus)&&o.openMenu("first"),o.openAfterFocus=!1},o.onInputBlur=function(s){var d=o.props.inputValue;if(o.menuListRef&&o.menuListRef.contains(document.activeElement)){o.inputRef.focus();return}o.props.onBlur&&o.props.onBlur(s),o.onInputChange("",{action:"input-blur",prevInputValue:d}),o.onMenuClose(),o.setState({focusedValue:null,isFocused:!1})},o.onOptionHover=function(s){if(!(o.blockOptionHover||o.state.focusedOption===s)){var d=o.getFocusableOptions(),u=d.indexOf(s);o.setState({focusedOption:s,focusedOptionId:u>-1?o.getFocusedOptionId(s):null})}},o.shouldHideSelectedOptions=function(){return Mh(o.props)},o.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),o.focus()},o.onKeyDown=function(s){var d=o.props,u=d.isMulti,p=d.backspaceRemovesValue,g=d.escapeClearsValue,y=d.inputValue,b=d.isClearable,f=d.isDisabled,j=d.menuIsOpen,h=d.onKeyDown,m=d.tabSelectsValue,x=d.openMenuOnFocus,w=o.state,S=w.focusedOption,E=w.focusedValue,C=w.selectValue;if(!f&&!(typeof h=="function"&&(h(s),s.defaultPrevented))){switch(o.blockOptionHover=!0,s.key){case"ArrowLeft":if(!u||y)return;o.focusValue("previous");break;case"ArrowRight":if(!u||y)return;o.focusValue("next");break;case"Delete":case"Backspace":if(y)return;if(E)o.removeValue(E);else{if(!p)return;u?o.popValue():b&&o.clearValue()}break;case"Tab":if(o.isComposing||s.shiftKey||!j||!m||!S||x&&o.isOptionSelected(S,C))return;o.selectOption(S);break;case"Enter":if(s.keyCode===229)break;if(j){if(!S||o.isComposing)return;o.selectOption(S);break}return;case"Escape":j?(o.setState({inputIsHiddenAfterUpdate:!1}),o.onInputChange("",{action:"menu-close",prevInputValue:y}),o.onMenuClose()):b&&g&&o.clearValue();break;case" ":if(y)return;if(!j){o.openMenu("first");break}if(!S)return;o.selectOption(S);break;case"ArrowUp":j?o.focusOption("up"):o.openMenu("last");break;case"ArrowDown":j?o.focusOption("down"):o.openMenu("first");break;case"PageUp":if(!j)return;o.focusOption("pageup");break;case"PageDown":if(!j)return;o.focusOption("pagedown");break;case"Home":if(!j)return;o.focusOption("first");break;case"End":if(!j)return;o.focusOption("last");break;default:return}s.preventDefault()}},o.state.instancePrefix="react-select-"+(o.props.instanceId||++xb),o.state.selectValue=Ud(i.value),i.menuIsOpen&&o.state.selectValue.length){var l=o.getFocusableOptionsWithIds(),a=o.buildFocusableOptions(),c=a.indexOf(o.state.selectValue[0]);o.state.focusableOptionsWithIds=l,o.state.focusedOption=a[c],o.state.focusedOptionId=Ll(l,a[c])}return o}return Py(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Gd(this.menuListRef,this.focusedOptionRef),nb()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(o){var l=this.props,a=l.isDisabled,c=l.menuIsOpen,s=this.state.isFocused;(s&&!a&&o.isDisabled||s&&c&&!o.menuIsOpen)&&this.focusInput(),s&&a&&!o.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&o.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Gd(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(o,l){this.props.onInputChange(o,l)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(o){var l=this,a=this.state,c=a.selectValue,s=a.isFocused,d=this.buildFocusableOptions(),u=o==="first"?0:d.length-1;if(!this.props.isMulti){var p=d.indexOf(c[0]);p>-1&&(u=p)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:d[u],focusedOptionId:this.getFocusedOptionId(d[u])},function(){return l.onMenuOpen()})}},{key:"focusValue",value:function(o){var l=this.state,a=l.selectValue,c=l.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(c);c||(s=-1);var d=a.length-1,u=-1;if(a.length){switch(o){case"previous":s===0?u=0:s===-1?u=d:u=s-1;break;case"next":s>-1&&s<d&&(u=s+1);break}this.setState({inputIsHidden:u!==-1,focusedValue:a[u]})}}}},{key:"focusOption",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",l=this.props.pageSize,a=this.state.focusedOption,c=this.getFocusableOptions();if(c.length){var s=0,d=c.indexOf(a);a||(d=-1),o==="up"?s=d>0?d-1:c.length-1:o==="down"?s=(d+1)%c.length:o==="pageup"?(s=d-l,s<0&&(s=0)):o==="pagedown"?(s=d+l,s>c.length-1&&(s=c.length-1)):o==="last"&&(s=c.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:c[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(c[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ol):I(I({},Ol),this.props.theme):Ol}},{key:"getCommonProps",value:function(){var o=this.clearValue,l=this.cx,a=this.getStyles,c=this.getClassNames,s=this.getValue,d=this.selectOption,u=this.setValue,p=this.props,g=p.isMulti,y=p.isRtl,b=p.options,f=this.hasValue();return{clearValue:o,cx:l,getStyles:a,getClassNames:c,getValue:s,hasValue:f,isMulti:g,isRtl:y,options:b,selectOption:d,selectProps:p,setValue:u,theme:this.getTheme()}}},{key:"hasValue",value:function(){var o=this.state.selectValue;return o.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var o=this.props,l=o.isClearable,a=o.isMulti;return l===void 0?a:l}},{key:"isOptionDisabled",value:function(o,l){return Rh(this.props,o,l)}},{key:"isOptionSelected",value:function(o,l){return Ah(this.props,o,l)}},{key:"filterOption",value:function(o,l){return Nh(this.props,o,l)}},{key:"formatOptionLabel",value:function(o,l){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,c=this.state.selectValue;return this.props.formatOptionLabel(o,{context:l,inputValue:a,selectValue:c})}else return this.getOptionLabel(o)}},{key:"formatGroupLabel",value:function(o){return this.props.formatGroupLabel(o)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var o=this.props,l=o.isDisabled,a=o.isSearchable,c=o.inputId,s=o.inputValue,d=o.tabIndex,u=o.form,p=o.menuIsOpen,g=o.required,y=this.getComponents(),b=y.Input,f=this.state,j=f.inputIsHidden,h=f.ariaSelection,m=this.commonProps,x=c||this.getElementId("input"),w=I(I(I({"aria-autocomplete":"list","aria-expanded":p,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},p&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?v.createElement(b,O({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:l,isHidden:j,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:d,form:u,type:"text",value:s},w)):v.createElement(Y2,O({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:So,onFocus:this.onInputFocus,disabled:l,tabIndex:d,inputMode:"none",form:u,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var o=this,l=this.getComponents(),a=l.MultiValue,c=l.MultiValueContainer,s=l.MultiValueLabel,d=l.MultiValueRemove,u=l.SingleValue,p=l.Placeholder,g=this.commonProps,y=this.props,b=y.controlShouldRenderValue,f=y.isDisabled,j=y.isMulti,h=y.inputValue,m=y.placeholder,x=this.state,w=x.selectValue,S=x.focusedValue,E=x.isFocused;if(!this.hasValue()||!b)return h?null:v.createElement(p,O({},g,{key:"placeholder",isDisabled:f,isFocused:E,innerProps:{id:this.getElementId("placeholder")}}),m);if(j)return w.map(function(z,L){var R=z===S,G="".concat(o.getOptionLabel(z),"-").concat(o.getOptionValue(z));return v.createElement(a,O({},g,{components:{Container:c,Label:s,Remove:d},isFocused:R,isDisabled:f,key:G,index:L,removeProps:{onClick:function(){return o.removeValue(z)},onTouchEnd:function(){return o.removeValue(z)},onMouseDown:function(fe){fe.preventDefault()}},data:z}),o.formatOptionLabel(z,"value"))});if(h)return null;var C=w[0];return v.createElement(u,O({},g,{data:C,isDisabled:f}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var o=this.getComponents(),l=o.ClearIndicator,a=this.commonProps,c=this.props,s=c.isDisabled,d=c.isLoading,u=this.state.isFocused;if(!this.isClearable()||!l||s||!this.hasValue()||d)return null;var p={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return v.createElement(l,O({},a,{innerProps:p,isFocused:u}))}},{key:"renderLoadingIndicator",value:function(){var o=this.getComponents(),l=o.LoadingIndicator,a=this.commonProps,c=this.props,s=c.isDisabled,d=c.isLoading,u=this.state.isFocused;if(!l||!d)return null;var p={"aria-hidden":"true"};return v.createElement(l,O({},a,{innerProps:p,isDisabled:s,isFocused:u}))}},{key:"renderIndicatorSeparator",value:function(){var o=this.getComponents(),l=o.DropdownIndicator,a=o.IndicatorSeparator;if(!l||!a)return null;var c=this.commonProps,s=this.props.isDisabled,d=this.state.isFocused;return v.createElement(a,O({},c,{isDisabled:s,isFocused:d}))}},{key:"renderDropdownIndicator",value:function(){var o=this.getComponents(),l=o.DropdownIndicator;if(!l)return null;var a=this.commonProps,c=this.props.isDisabled,s=this.state.isFocused,d={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return v.createElement(l,O({},a,{innerProps:d,isDisabled:c,isFocused:s}))}},{key:"renderMenu",value:function(){var o=this,l=this.getComponents(),a=l.Group,c=l.GroupHeading,s=l.Menu,d=l.MenuList,u=l.MenuPortal,p=l.LoadingMessage,g=l.NoOptionsMessage,y=l.Option,b=this.commonProps,f=this.state.focusedOption,j=this.props,h=j.captureMenuScroll,m=j.inputValue,x=j.isLoading,w=j.loadingMessage,S=j.minMenuHeight,E=j.maxMenuHeight,C=j.menuIsOpen,z=j.menuPlacement,L=j.menuPosition,R=j.menuPortalTarget,G=j.menuShouldBlockScroll,X=j.menuShouldScrollIntoView,fe=j.noOptionsMessage,T=j.onMenuScrollToTop,k=j.onMenuScrollToBottom;if(!C)return null;var M=function(de,be){var Xe=de.type,he=de.data,Ve=de.isDisabled,bt=de.isSelected,li=de.label,Oh=de.value,sc=f===he,cc=Ve?void 0:function(){return o.onOptionHover(he)},Lh=Ve?void 0:function(){return o.selectOption(he)},dc="".concat(o.getElementId("option"),"-").concat(be),Wh={id:dc,onClick:Lh,onMouseMove:cc,onMouseOver:cc,tabIndex:-1,role:"option","aria-selected":o.state.isAppleDevice?void 0:bt};return v.createElement(y,O({},b,{innerProps:Wh,data:he,isDisabled:Ve,isSelected:bt,key:dc,label:li,type:Xe,value:Oh,isFocused:sc,innerRef:sc?o.getFocusedOptionRef:void 0}),o.formatOptionLabel(de.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(F){if(F.type==="group"){var de=F.data,be=F.options,Xe=F.index,he="".concat(o.getElementId("group"),"-").concat(Xe),Ve="".concat(he,"-heading");return v.createElement(a,O({},b,{key:he,data:de,options:be,Heading:c,headingProps:{id:Ve,data:F.data},label:o.formatGroupLabel(F.data)}),F.options.map(function(bt){return M(bt,"".concat(Xe,"-").concat(bt.index))}))}else if(F.type==="option")return M(F,"".concat(F.index))});else if(x){var D=w({inputValue:m});if(D===null)return null;_=v.createElement(p,b,D)}else{var A=fe({inputValue:m});if(A===null)return null;_=v.createElement(g,b,A)}var W={minMenuHeight:S,maxMenuHeight:E,menuPlacement:z,menuPosition:L,menuShouldScrollIntoView:X},q=v.createElement(j1,O({},b,W),function(F){var de=F.ref,be=F.placerProps,Xe=be.placement,he=be.maxHeight;return v.createElement(s,O({},b,W,{innerRef:de,innerProps:{onMouseDown:o.onMenuMouseDown,onMouseMove:o.onMenuMouseMove},isLoading:x,placement:Xe}),v.createElement(Q2,{captureEnabled:h,onTopArrive:T,onBottomArrive:k,lockEnabled:G},function(Ve){return v.createElement(d,O({},b,{innerRef:function(li){o.getMenuListRef(li),Ve(li)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:o.getElementId("listbox")},isLoading:x,maxHeight:he,focusedOption:f}),_)}))});return R||L==="fixed"?v.createElement(u,O({},b,{appendTo:R,controlElement:this.controlRef,menuPlacement:z,menuPosition:L}),q):q}},{key:"renderFormField",value:function(){var o=this,l=this.props,a=l.delimiter,c=l.isDisabled,s=l.isMulti,d=l.name,u=l.required,p=this.state.selectValue;if(u&&!this.hasValue()&&!c)return v.createElement(J2,{name:d,onFocus:this.onValueInputFocus});if(!(!d||c))if(s)if(a){var g=p.map(function(f){return o.getOptionValue(f)}).join(a);return v.createElement("input",{name:d,type:"hidden",value:g})}else{var y=p.length>0?p.map(function(f,j){return v.createElement("input",{key:"i-".concat(j),name:d,type:"hidden",value:o.getOptionValue(f)})}):v.createElement("input",{name:d,type:"hidden",value:""});return v.createElement("div",null,y)}else{var b=p[0]?this.getOptionValue(p[0]):"";return v.createElement("input",{name:d,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var o=this.commonProps,l=this.state,a=l.ariaSelection,c=l.focusedOption,s=l.focusedValue,d=l.isFocused,u=l.selectValue,p=this.getFocusableOptions();return v.createElement(O2,O({},o,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:c,focusedValue:s,isFocused:d,selectValue:u,focusableOptions:p,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var o=this.getComponents(),l=o.Control,a=o.IndicatorsContainer,c=o.SelectContainer,s=o.ValueContainer,d=this.props,u=d.className,p=d.id,g=d.isDisabled,y=d.menuIsOpen,b=this.state.isFocused,f=this.commonProps=this.getCommonProps();return v.createElement(c,O({},f,{className:u,innerProps:{id:p,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:b}),this.renderLiveRegion(),v.createElement(l,O({},f,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:b,menuIsOpen:y}),v.createElement(s,O({},f,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),v.createElement(a,O({},f,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(o,l){var a=l.prevProps,c=l.clearFocusValueOnUpdate,s=l.inputIsHiddenAfterUpdate,d=l.ariaSelection,u=l.isFocused,p=l.prevWasFocused,g=l.instancePrefix,y=o.options,b=o.value,f=o.menuIsOpen,j=o.inputValue,h=o.isMulti,m=Ud(b),x={};if(a&&(b!==a.value||y!==a.options||f!==a.menuIsOpen||j!==a.inputValue)){var w=f?hb(o,m):[],S=f?au($i(o,m),"".concat(g,"-option")):[],E=c?mb(l,m):null,C=gb(l,w),z=Ll(S,C);x={selectValue:m,focusedOption:C,focusedOptionId:z,focusableOptionsWithIds:S,focusedValue:E,clearFocusValueOnUpdate:!1}}var L=s!=null&&o!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},R=d,G=u&&p;return u&&!G&&(R={value:Bi(h,m,m[0]||null),options:m,action:"initial-input-focus"},G=!p),(d==null?void 0:d.action)==="initial-input-focus"&&(R=null),I(I(I({},x),L),{},{prevProps:o,ariaSelection:R,prevWasFocused:G})}}]),n}(v.Component);Ih.defaultProps=fb;var yb=v.forwardRef(function(e,t){var n=Dy(e);return v.createElement(Ih,O({ref:t},n))}),vb=yb;const bb=[{value:"+1-264",label:"+1 (264) Anguilla"},{value:"+1-268",label:"+1 (268) Antigua and Barbuda"},{value:"+61",label:"+61 (Australia)"},{value:"+1-242",label:"+1 (242) Bahamas"},{value:"+1-246",label:"+1 (246) Barbados"},{value:"+1-441",label:"+1 (441) Bermuda"},{value:"+591",label:"+591 (Bolivia)"},{value:"+55",label:"+55 (Brazil)"},{value:"+1-284",label:"+1 (284) British Virgin Islands"},{value:"+1-345",label:"+1 (345) Cayman Islands"},{value:"+56",label:"+56 (Chile)"},{value:"+86",label:"+86 (China)"},{value:"+57",label:"+57 (Colombia)"},{value:"+53",label:"+53 (Cuba)"},{value:"+45",label:"+45 (Denmark)"},{value:"+1-767",label:"+1 (767) Dominica"},{value:"+1-809",label:"+1 (809) Dominican Republic"},{value:"+1-829",label:"+1 (829) Dominican Republic (Alt)"},{value:"+1-849",label:"+1 (849) Dominican Republic (Alt 2)"},{value:"+593",label:"+593 (Ecuador)"},{value:"+503",label:"+503 (El Salvador)"},{value:"+33",label:"+33 (France)"},{value:"+49",label:"+49 (Germany)"},{value:"+1-473",label:"+1 (473) Grenada"},{value:"+502",label:"+502 (Guatemala)"},{value:"+224",label:"+224 (Guinea)"},{value:"+592",label:"+592 (Guyana)"},{value:"+509",label:"+509 (Haiti)"},{value:"+504",label:"+504 (Honduras)"},{value:"+852",label:"+852 (Hong Kong)"},{value:"+91",label:"+91 (India)"},{value:"+62",label:"+62 (Indonesia)"},{value:"+353",label:"+353 (Ireland)"},{value:"+972",label:"+972 (Israel)"},{value:"+39",label:"+39 (Italy)"},{value:"+1-876",label:"+1 (876) Jamaica"},{value:"+81",label:"+81 (Japan)"},{value:"+1-664",label:"+1 (664) Montserrat"},{value:"+52",label:"+52 (Mexico)"},{value:"+505",label:"+505 (Nicaragua)"},{value:"+234",label:"+234 (Nigeria)"},{value:"+47",label:"+47 (Norway)"},{value:"+507",label:"+507 (Panama)"},{value:"+595",label:"+595 (Paraguay)"},{value:"+51",label:"+51 (Peru)"},{value:"+63",label:"+63 (Philippines)"},{value:"+48",label:"+48 (Poland)"},{value:"+351",label:"+351 (Portugal)"},{value:"+1-787",label:"+1 (787) Puerto Rico"},{value:"+974",label:"+974 (Qatar)"},{value:"+1-758",label:"+1 (758) Saint Lucia"},{value:"+1-784",label:"+1 (784) Saint Vincent and the Grenadines"},{value:"+1-869",label:"+1 (869) Saint Kitts and Nevis"},{value:"+1-721",label:"+1 (721) Sint Maarten"},{value:"+65",label:"+65 (Singapore)"},{value:"+27",label:"+27 (South Africa)"},{value:"+34",label:"+34 (Spain)"},{value:"+1-868",label:"+1 (868) Trinidad and Tobago"},{value:"+1-649",label:"+1 (649) Turks and Caicos"},{value:"+44",label:"+44 (United Kingdom)"},{value:"+1",label:"+1 (United States / Canada)"},{value:"+598",label:"+598 (Uruguay)"},{value:"+58",label:"+58 (Venezuela)"}],jb=({value:e,onChange:t})=>{const n=[...bb].sort((i,o)=>i.label.localeCompare(o.label));return r.jsx(vb,{options:n,value:n.find(i=>i.value===e),onChange:i=>t(i.value),placeholder:"Select country code...",isSearchable:!0,styles:{control:i=>({...i,borderRadius:"0.5rem",padding:"0.25rem",fontSize:"0.9rem"})}})},wb=()=>{var T;const[e,t]=v.useState("all"),[n,i]=v.useState(null),[o,l]=v.useState(""),[a,c]=v.useState(""),[s,d]=v.useState(!1),[u,p]=v.useState(0),[g,y]=v.useState(!1),[b,f]=v.useState(!1),[j,h]=v.useState(!1),[m,x]=v.useState(!1),[w,S]=v.useState({firstName:"",lastName:"",email:"",countryCode:"+44",phone:"",useType:"personal"}),E=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];v.useEffect(()=>{const k=()=>{const M=document.querySelector("footer"),_=document.querySelector(".progress-bar");if(M&&_){const D=M.getBoundingClientRect(),A=_.getBoundingClientRect(),F=window.innerHeight-20,de=D.top<F+A.height;x(de)}};return window.addEventListener("scroll",k),window.addEventListener("resize",k),k(),()=>{window.removeEventListener("scroll",k),window.removeEventListener("resize",k)}},[]);const C=ne.map(k=>({id:k.id,name:k.name,type:k.type,image:k.images[0]})),z=e==="all"?C:C.filter(k=>k.type===e),L=k=>{const M=document.querySelector(".models-grid"),_=410,D=k==="left"?-_:_;M.scrollBy({left:D,behavior:"smooth"});const A=k==="left"?Math.max(0,u-1):Math.min(z.length-1,u+1);p(A)};v.useEffect(()=>{const k=document.querySelector(".models-grid"),M=()=>{if(!k)return;const _=410,D=k.scrollLeft,A=Math.round(D/_);p(A)};return k&&k.addEventListener("scroll",M),()=>{k&&k.removeEventListener("scroll",M)}},[z]);const R=k=>{document.querySelector(".models-grid").scrollTo({left:410*k,behavior:"smooth"}),p(k)},G=()=>{if(!n){y(!0);return}d(!s)},X=k=>{i(k),y(!1)},fe=()=>{if(!n){y(!0);return}if(!o){f(!0);return}if(!a){h(!0);return}if(!w.firstName||!w.lastName||!w.email||!w.phone){alert("Please fill in all required fields");return}alert("Booking request submitted!")};return r.jsxs("div",{style:{width:"100%",fontFamily:"'Montserrat', sans-serif"},children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .hero-section {
          height: 110vh;
          background: 
                      url('/models/BYD-ATTO-2/Banner.jpg') center/cover;
          display: flex;
          align-items: center;
          padding-left: 8%;
          color: white;
          position: relative;
        }

        .hero-title {
          font-size: 6rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 30px rgba(0,0,0,0.7);
          margin: 0;
        }

.content-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;
  padding-left: 150px; /* 👈 Add a strong left margin */
}


        .section-title {
          font-size: 2rem;
          font-weight: 400;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .section-number {
          width: 45px;
          height: 45px;
          border: 2px solid #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .section-number.completed {
          background: #000;
          color: white;
          border-color: #000;
        }

        .error-message {
          color: #e74c3c;
          font-size: 0.9rem;
          margin-bottom: 30px;
        }

        .category-tabs {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
          border-bottom: 2px solid #e5e5e5;
        }

        .category-tab {
          padding: 12px 0;
          font-size: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          color: #999;
          transition: color 0.3s;
          text-transform: capitalize;
          letter-spacing: 1px;
        }

        .category-tab.active {
          color: #000;
        }

        .category-tab.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: #000;
        }

        .models-grid {
          display: flex;
          gap: 30px;
          margin-bottom: 40px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 20px 0;
          scrollbar-width: none;
        }

        .models-grid::-webkit-scrollbar {
          display: none;
        }

        .carousel-container {
          position: relative;
          margin-bottom: 60px;
        }

        .carousel-controls {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 20px;
          align-items: center;
        }

        .carousel-nav {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #e5e5e5;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          font-size: 1.2rem;
        }

        .carousel-nav:hover {
          background: #4a9eff;
          color: white;
        }

        .carousel-dots {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ccc;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s;
        }

        .carousel-dot.active {
          background: #000;
          width: 10px;
          height: 10px;
        }

        .model-card {
          border: 2px solid #e5e5e5;
          border-radius: 12px;
          padding: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          background: white;
          min-width: 480px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }

        .model-card:hover {
          border-color: #ccc;
        }

        .model-card.selected {
          border-color: #e5e5e5;
        }

        .model-header {
          text-align: left;
          margin-bottom: 20px;
        }

        .model-name {
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 8px;
          color: #000;
        }

        .model-type {
          color: #666;
          font-size: 0.85rem;
        }

        .model-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          margin-bottom: 15px;
          display: block;
        }

        .selection-circle {
          width: 30px;
          height: 30px;
          border: 2px solid #d0d0d0;
          border-radius: 50%;
          align-self: flex-end;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .model-card.selected .selection-circle {
          background: #000;
          border-color: #000;
        }

        .form-section {
          margin-top: 60px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .required {
          color: #e74c3c;
        }

        .date-input-wrapper {
          position: relative;
          max-width: 400px;
        }

        .date-time-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .date-input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e5e5;
          border-radius: 8px;
          font-size: 0.95rem;
          font-family: 'Montserrat', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          transition: border-color 0.3s;
        }

        .date-input.disabled {
          background: #f5f5f5;
          cursor: not-allowed;
          color: #999;
        }

        .date-input:not(.disabled):hover {
          border-color: #4a9eff;
        }

        .calendar-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 8px;
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          padding: 15px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          z-index: 100;
          width: 350px;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .calendar-nav-btn {
          background: none;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          padding: 5px;
          color: #666;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 5px;
        }

        .calendar-day-header {
          text-align: center;
          font-size: 0.75rem;
          font-weight: 600;
          color: #666;
          padding: 5px;
        }

        .calendar-day {
          aspect-ratio: 1;
          border: 1px solid transparent;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          background: white;
          font-size: 0.85rem;
        }

        .calendar-day:hover:not(.disabled):not(.selected) {
          background: #f0f0f0;
        }

        .calendar-day.disabled {
          color: #ccc;
          cursor: not-allowed;
        }

        .calendar-day.selected {
          background: #000;
          color: white;
          font-weight: 600;
        }

.contact-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 40px;
  align-items: end;
}

/* Make the “Type of use” field span the full first column (under First Name & Email) */
.use-type {
  grid-column: 1 / 2;
  grid-row: 3;
}

.contact-form .submit-button {
  grid-column: 1 / 2;
  justify-self: start;
  padding: 14px 40px;
  background-color: #000 !important;
  color: #fff !important;
  border: none !important;
  border-radius: 0 !important;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* tightened spacing */
  margin-top: 12px; /* 👈 reduced from 40px */
  margin-bottom: 50px; /* 👈 keeps it visually above the progress bar */
}

.contact-form .submit-button:hover {
  background-color: #333 !important;
  transform: translateY(-2px);
}

/* Responsive fallback */
@media (max-width: 768px) {
  .contact-form .submit-button {
    grid-column: 1 / -1;
    justify-self: stretch;
    width: 100%;
    margin-bottom: 40px;
  }
}



        .form-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          font-size: 0.95rem;
          font-family: 'Montserrat', sans-serif;
          transition: border-color 0.3s;
        }

        .form-input::placeholder {
          color: #999;
        }

        .form-input:focus {
          outline: none;
          border-color: #4a9eff;
        }

        .phone-group {
          display: flex;
          gap: 10px;
        }

        .country-code-select {
          width: 110px;
          padding: 12px;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          font-size: 0.95rem;
          font-family: 'Montserrat', sans-serif;
          cursor: pointer;
          transition: border-color 0.3s;
        }

        .country-code-select:focus {
          outline: none;
          border-color: #4a9eff;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .submit-button {
          grid-column: 1 / -1;
          padding: 15px 50px;
          background: #4a9eff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .submit-button:hover {
          background: #3a8ee0;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(74, 158, 255, 0.3);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
            letter-spacing: 4px;
          }

          .contact-form {
            grid-template-columns: 1fr;
          }

          .calendar-dropdown {
            width: 100%;
          }
        }

        .progress-bar {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 50px;
          padding: 15px 40px;
          display: flex;
          align-items: center;
          gap: 30px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .progress-bar.above-footer {
          position: absolute;
          bottom: auto;
          top: auto;
        }

        .progress-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .progress-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        .progress-icon.completed {
          background: #000;
          color: white;
        }

        .progress-icon.incomplete {
          border-color: #000;
          color: #000;
        }
      `}),r.jsx("div",{className:"hero-section",children:r.jsx("h1",{className:"hero-title",children:"Test Drive"})}),r.jsxs("div",{className:"content-section",children:[r.jsxs("div",{className:"section-title",children:[r.jsx("span",{className:`section-number ${n?"completed":""}`,children:n?r.jsx(pr,{size:22,strokeWidth:3}):"1"}),r.jsx("span",{children:"Choose your model"})]}),g&&r.jsx("div",{className:"error-message",children:"Please complete the previous step before proceeding"}),r.jsxs("div",{className:"category-tabs",children:[r.jsx("button",{className:`category-tab ${e==="all"?"active":""}`,onClick:()=>t("all"),children:"All"}),r.jsx("button",{className:`category-tab ${e==="electric"?"active":""}`,onClick:()=>t("electric"),children:"Electric cars"}),r.jsx("button",{className:`category-tab ${e==="hybrid"?"active":""}`,onClick:()=>t("hybrid"),children:"Hybrid cars"})]}),r.jsxs("div",{className:"carousel-container",children:[r.jsx("div",{className:"models-grid",children:z.map(k=>r.jsxs("div",{className:`model-card ${n===k.id?"selected":""}`,onClick:()=>X(k.id),children:[r.jsxs("div",{className:"model-header",children:[r.jsx("div",{className:"model-name",children:k.name}),r.jsx("div",{className:"model-type",children:k.type==="hybrid"?"PHEV":"100% Electric"})]}),r.jsx("img",{src:k.image,alt:k.name,className:"model-image"}),r.jsx("div",{className:"selection-circle",children:n===k.id&&r.jsx(pr,{size:18,color:"white",strokeWidth:3})})]},k.id))}),r.jsxs("div",{className:"carousel-controls",children:[r.jsx("button",{className:"carousel-nav",onClick:()=>L("left"),disabled:u===0,children:"←"}),r.jsx("div",{className:"carousel-dots",children:z.map((k,M)=>r.jsx("button",{className:`carousel-dot ${M===u?"active":""}`,onClick:()=>R(M)},M))}),r.jsx("button",{className:"carousel-nav",onClick:()=>L("right"),disabled:u===z.length-1,children:"→"})]})]}),r.jsxs("div",{className:"form-section",children:[r.jsxs("div",{className:"section-title",children:[r.jsx("span",{className:`section-number ${o&&a?"completed":""}`,children:o&&a?r.jsx(pr,{size:22,strokeWidth:3}):"2"}),r.jsx("span",{children:"Choose your date and time"})]}),b&&r.jsx("div",{className:"error-message",children:"Please complete the previous step before proceeding"}),r.jsxs("div",{className:"date-time-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{className:"form-label",children:["Preferred Date ",r.jsx("span",{className:"required",children:"*"})]}),r.jsxs("div",{className:"date-input-wrapper",children:[r.jsxs("div",{className:`date-input ${n?"":"disabled"}`,onClick:G,style:{cursor:n?"pointer":"not-allowed"},children:[r.jsx("span",{children:o||"Select a date"}),r.jsx(zx,{size:18})]}),s&&n&&r.jsxs("div",{className:"calendar-dropdown",children:[r.jsxs("div",{className:"calendar-header",children:[r.jsx("button",{className:"calendar-nav-btn",children:"«"}),r.jsx("span",{children:"2025 October"}),r.jsx("button",{className:"calendar-nav-btn",children:"»"})]}),r.jsxs("div",{className:"calendar-grid",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(k=>r.jsx("div",{className:"calendar-day-header",children:k},k)),[28,29,30].map(k=>r.jsx("div",{className:"calendar-day disabled",children:k},`prev-${k}`)),Array.from({length:31},(k,M)=>M+1).map(k=>r.jsx("div",{className:`calendar-day ${k<19?"disabled":""} ${o===`${k} October 2025`?"selected":""}`,onClick:()=>{k>=19&&(l(`${k} October 2025`),d(!1),f(!1))},children:k},k))]})]})]})]}),o&&r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{className:"form-label",children:["Choose your time ",r.jsx("span",{className:"required",children:"*"})]}),r.jsxs("select",{className:"form-input",value:a,onChange:k=>{c(k.target.value),h(!1)},children:[r.jsx("option",{value:"",children:"Select a time"}),E.map(k=>r.jsx("option",{value:k,children:k},k))]})]})]}),r.jsxs("div",{className:"section-title",style:{marginTop:"50px"},children:[r.jsx("span",{className:"section-number",children:"3"}),r.jsx("span",{children:"Enter your contact details"})]}),r.jsxs("div",{className:"contact-form",children:[r.jsxs("div",{className:"form-group first-name",children:[r.jsxs("label",{className:"form-label",children:["First Name",r.jsx("span",{className:"required",children:"*"})]}),r.jsx("input",{type:"text",className:"form-input",placeholder:"First Name*",value:w.firstName,onChange:k=>S({...w,firstName:k.target.value})})]}),r.jsxs("div",{className:"form-group last-name",children:[r.jsxs("label",{className:"form-label",children:["Last Name",r.jsx("span",{className:"required",children:"*"})]}),r.jsx("input",{type:"text",className:"form-input",placeholder:"Last Name*",value:w.lastName,onChange:k=>S({...w,lastName:k.target.value})})]}),r.jsxs("div",{className:"form-group email",children:[r.jsxs("label",{className:"form-label",children:["Email",r.jsx("span",{className:"required",children:"*"})]}),r.jsx("input",{type:"email",className:"form-input",placeholder:"Email*",value:w.email,onChange:k=>S({...w,email:k.target.value})})]}),r.jsxs("div",{className:"form-group phone",children:[r.jsxs("label",{className:"form-label",children:["Phone Number",r.jsx("span",{className:"required",children:"*"})]}),r.jsxs("div",{className:"phone-group",children:[r.jsx(jb,{value:w.countryCode,onChange:k=>S({...w,countryCode:k})}),r.jsx("input",{type:"tel",className:"form-input",value:w.phone,onChange:k=>S({...w,phone:k.target.value}),placeholder:"07400 123456*"})]})]}),r.jsxs("div",{className:"form-group use-type",children:[r.jsxs("label",{className:"form-label",children:["Type of use",r.jsx("span",{className:"required",children:"*"})]}),r.jsxs("select",{className:"form-input",value:w.useType,onChange:k=>S({...w,useType:k.target.value}),children:[r.jsx("option",{value:"",children:"Type of use *"}),r.jsx("option",{value:"personal",children:"Personal"}),r.jsx("option",{value:"private-hire",children:"Private Hire"}),r.jsx("option",{value:"fleet-corporate",children:"Fleet/Corporate"})]})]}),r.jsx("button",{onClick:fe,className:"submit-button",children:"Request Booking"})]})]})]}),r.jsxs("div",{className:`progress-bar ${m?"above-footer":""}`,style:m?{position:"absolute",bottom:"auto",top:`${document.body.scrollHeight-(((T=document.querySelector("footer"))==null?void 0:T.offsetHeight)||0)-100}px`}:{},children:[r.jsxs("div",{className:"progress-item",children:[r.jsx("div",{className:`progress-icon ${n?"completed":"incomplete"}`,children:n?r.jsx(pr,{size:14,strokeWidth:3}):"1"}),r.jsx("span",{children:"Models"})]}),r.jsxs("div",{className:"progress-item",children:[r.jsx("div",{className:`progress-icon ${o&&a?"completed":"incomplete"}`,children:o&&a?r.jsx(pr,{size:14,strokeWidth:3}):"2"}),r.jsx("span",{children:"Date"})]}),r.jsxs("div",{className:"progress-item",children:[r.jsx("div",{className:"progress-icon incomplete",children:"3"}),r.jsx("span",{children:"Contact"})]})]})]})},Sb=()=>r.jsxs("div",{style:{fontFamily:"Montserrat, Arial, sans-serif",color:"#252728"},children:[r.jsxs("div",{style:{position:"relative",width:"100%",height:"120VH",overflow:"hidden"},children:[r.jsxs("picture",{children:[r.jsx("source",{media:"(max-width: 991px)",srcSet:"/images/assistance-banner-mob.jpg"}),r.jsx("img",{src:"/Assistance/Banner.jpg",alt:"BYD Assistance",style:{width:"100%",height:"100%",objectFit:"cover"}})]}),r.jsx("div",{style:{position:"absolute",top:"50%",left:"5%",transform:"translateY(-50%)",color:"#fff",zIndex:2},children:r.jsx("h1",{style:{fontSize:"56px",fontWeight:600,margin:0},children:"BYD Assistance"})})]}),r.jsxs("div",{style:{maxWidth:"1200px",margin:"60px auto",padding:"0 20px"},children:[r.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",marginBottom:"40px"},children:"The BYD Assistance is part of our mobility promise – for example when it comes to breakdowns, accidents, theft or vandalism, BYD Assistance will be there to help you, 24/7 365 days a year."}),r.jsx("h2",{style:{fontSize:"32px",fontWeight:600,marginBottom:"20px",marginTop:"60px"},children:"BYD Assistance Hotline Number."}),r.jsx("p",{style:{fontSize:"16px",marginBottom:"15px"},children:"If you need immediate assistance please contact:"}),r.jsxs("p",{style:{fontSize:"20px",fontWeight:600,color:"#BB0A0A",marginBottom:"10px"},children:[r.jsx("a",{href:"tel:00800-10203000",style:{color:"#BB0A0A",textDecoration:"none"},children:"00800-10203000"})," (free of charge)"]}),r.jsx("p",{style:{fontSize:"16px",marginBottom:"10px"},children:"or"}),r.jsx("p",{style:{fontSize:"20px",fontWeight:600,color:"#BB0A0A",marginBottom:"30px"},children:"+44 2033072546"}),r.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"if your phone provider charges for freephone numbers."}),r.jsx("h2",{style:{fontSize:"32px",fontWeight:600,marginBottom:"20px",marginTop:"60px"},children:"BYD Assistance Cover."}),r.jsxs("p",{style:{fontSize:"16px",lineHeight:"1.6",marginBottom:"15px"},children:["BYD Assistance is valid for a period of",r.jsx("br",{}),"EV Customers: ",r.jsx("strong",{children:"24 months + 24 months"}),r.jsx("br",{}),"DM Customers: ",r.jsx("strong",{children:"24 months 12 months + 12 months"}),r.jsx("br",{}),"from the date of delivery"]}),r.jsxs("p",{style:{fontSize:"16px",lineHeight:"1.6",marginBottom:"15px"},children:['We provide assistance when eligible events happen. "Eligible Events" means the driver of the Vehicle is not allowed to continue driving as a result of ',r.jsx("strong",{children:"a breakdown, accident, theft attempt, or fire"}),"."]}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6"},children:"Coverage: Pan-European Assistance"})]}),r.jsxs("div",{style:{maxWidth:"1600px",margin:"80px auto",padding:"0 20px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#FFF",padding:"64px",marginBottom:"40px",gap:"60px"},children:[r.jsx("div",{style:{flex:1},children:r.jsx("picture",{children:r.jsx("img",{src:"/Assistance/1.jpg",alt:"Roadside Assistance",style:{width:"100%",height:"auto"}})})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("h2",{style:{fontSize:"24px",fontWeight:600,marginBottom:"20px"},children:"Roadside Assistance Benefits."}),r.jsxs("ul",{style:{fontSize:"14px",lineHeight:"1.8",paddingLeft:"20px"},children:[r.jsx("li",{children:r.jsx("strong",{children:"Help on the phone."})}),r.jsx("li",{children:r.jsx("strong",{children:"Repair on Spot."})}),r.jsx("li",{children:r.jsx("strong",{children:"Towage Services."})})]}),r.jsx("a",{href:"/assistance-pdf",style:{display:"inline-block",marginTop:"20px",padding:"10px 50px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px",transition:"all 0.3s"},children:"Find out more"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#FFF",padding:"64px",marginBottom:"40px",gap:"60px",flexDirection:"row-reverse"},children:[r.jsx("div",{style:{flex:1},children:r.jsx("picture",{children:r.jsx("img",{src:"/Assistance/2.jpg",alt:"Additional Benefits",style:{width:"100%",height:"auto"}})})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("h2",{style:{fontSize:"24px",fontWeight:600,marginBottom:"20px"},children:"Additional Benefits."}),r.jsxs("ul",{style:{fontSize:"14px",lineHeight:"1.8",paddingLeft:"20px"},children:[r.jsx("li",{children:r.jsx("strong",{children:"Replacement vehicle."})}),r.jsx("li",{children:r.jsx("strong",{children:"Onward journey and accommodation."})}),r.jsx("li",{children:r.jsx("strong",{children:"Transfer costs."})}),r.jsx("li",{children:r.jsx("strong",{children:"Repatriation."})})]}),r.jsx("a",{href:"/assistance-pdf",style:{display:"inline-block",marginTop:"20px",padding:"10px 50px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px"},children:"Find out more"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#FFF",padding:"64px",marginBottom:"40px",gap:"60px",flexDirection:"row-reverse"},children:[r.jsx("div",{style:{flex:1},children:r.jsxs("picture",{children:[r.jsx("source",{media:"(max-width: 991px)",srcSet:"/images/customer-service-mob.jpg"}),r.jsx("img",{src:"/Assistance/3.jpg",alt:"Customer Service",style:{width:"100%",height:"auto"}})]})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("h2",{style:{fontSize:"24px",fontWeight:600,marginBottom:"20px"},children:"BYD Customer Service Center."}),r.jsxs("ul",{style:{fontSize:"14px",lineHeight:"1.8",paddingLeft:"20px",listStyle:"none"},children:[r.jsx("li",{style:{marginBottom:"15px"},children:r.jsx("strong",{children:"The BYD Customer Service Center is the efficient way to contact BYD directly. BYD is much willing to know your voice."})}),r.jsx("li",{style:{marginBottom:"10px"},children:r.jsx("strong",{children:"Location: Lublin, Poland."})}),r.jsx("li",{style:{marginBottom:"10px"},children:r.jsx("strong",{children:"Service Hours: Monday to Saturday 9:00 AM-18:00 PM."})}),r.jsx("li",{children:r.jsx("strong",{children:"Available Service Languages: English, German, French, Italian, Spanish (More language service will be available soon)."})})]})]})]})]}),r.jsxs("div",{style:{maxWidth:"1200px",margin:"60px auto",padding:"0 20px"},children:[r.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:"In the case of events not listed above, we are still ready to be there for you by attempting Help on the phone, Repair on Spot or towage services to the nearest Authorised BYD Repairer, but you may need to provide payment for them."}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6"},children:"To find out more details about BYD roadside assistance, please read the following document:"}),r.jsx("p",{style:{marginTop:"15px"},children:r.jsx("a",{href:"/assistance-pdf",style:{color:"#252728",textDecoration:"underline",fontWeight:600,fontSize:"16px"},children:"BYD Roadside Assistance Terms and Conditions"})})]}),r.jsx("style",{children:`
        @media (max-width: 991px) {
          h1 {
            font-size: 32px !important;
          }
          h2 {
            font-size: 24px !important;
          }
          div[style*="flex"] {
            flex-direction: column !important;
          }
          div[style*="padding: 64px"] {
            padding: 30px 20px !important;
          }
          div[style*="gap: 60px"] {
            gap: 30px !important;
          }
        }
      `})]}),Cb=()=>r.jsxs("div",{style:{fontFamily:"Montserrat, Arial, sans-serif",color:"#252728"},children:[r.jsxs("div",{style:{position:"relative",width:"100%",height:"80vh",overflow:"hidden"},children:[r.jsxs("picture",{children:[r.jsx("source",{media:"(max-width: 991px)",srcSet:"/images/service-banner-mob.jpg"}),r.jsx("img",{src:"/Service-Maintenance/Banner.png",alt:"Service Banner",style:{width:"100%",height:"100%",objectFit:"cover"}})]}),r.jsxs("div",{style:{position:"absolute",top:"5%",left:"50%",transform:"translateX(-50%)",color:"#fff",zIndex:2,textAlign:"center",width:"90%",maxWidth:"1200px"},children:[r.jsx("h1",{style:{fontSize:"34px",fontWeight:600,margin:0},children:"BYD UK Service & Maintenance"}),r.jsx("p",{style:{fontSize:"16px",marginTop:"20px"},children:"To make sure everything runs smoothly, our service is specifically designed for you and your beloved car."})]})]}),r.jsx("div",{style:{maxWidth:"calc(100% - 80px)",margin:"0 auto",marginLeft:"100px",marginRight:"100px",height:"80vh",position:"relative",top:"-50vh",marginBottom:"-20vh",zIndex:3},children:r.jsx("img",{src:"/Service-Maintenance/Banner2.jpg",alt:"Service Overview",style:{width:"100%",height:"100vh",objectFit:"cover",boxShadow:"0 10px 40px rgba(0,0,0,0.1)"}})}),r.jsxs("div",{style:{maxWidth:"1600px",margin:"0px auto",padding:"0 20px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#F7F7F7",padding:"64px",marginBottom:"40px",gap:"60px"},children:[r.jsx("div",{style:{flex:1},children:r.jsxs("picture",{children:[r.jsx("source",{media:"(max-width: 991px)",srcSet:"/images/warranty-mob.png"}),r.jsx("img",{src:"/Service-Maintenance/1.png",alt:"Warranty",style:{width:"100%",height:"auto"}})]})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("h2",{style:{fontSize:"24px",fontWeight:600,marginBottom:"20px"},children:"Warranty"}),r.jsx("ul",{style:{fontSize:"14px",lineHeight:"1.6",paddingLeft:"20px"},children:r.jsx("li",{children:"A comprehensive warranty policy is in place for you. For more warranty details, please contact the local BYD dealer."})}),r.jsx("a",{href:"/warranty-policy",style:{display:"inline-block",marginTop:"20px",padding:"10px 50px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px",transition:"all 0.3s"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#fff",e.currentTarget.style.color="#252728",e.currentTarget.style.border="1px solid #252728"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#252728",e.currentTarget.style.color="#fff",e.currentTarget.style.border="none"},children:"Warranty Policy"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#F7F7F7",padding:"64px",marginBottom:"40px",gap:"60px",flexDirection:"row-reverse"},children:[r.jsx("div",{style:{flex:1},children:r.jsx("picture",{children:r.jsx("img",{src:"/Service-Maintenance/2.jpg",alt:"Maintenance",style:{width:"100%",height:"auto"}})})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("h2",{style:{fontSize:"24px",fontWeight:600,marginBottom:"20px"},children:"Maintenance / Repair"}),r.jsx("ul",{style:{fontSize:"14px",lineHeight:"1.6",paddingLeft:"20px"},children:r.jsx("li",{children:"A timely, accessible and enjoyable service, just for you."})}),r.jsxs("div",{style:{display:"flex",gap:"15px",marginTop:"20px"},children:[r.jsx("a",{href:"/owners-manual",style:{display:"inline-block",padding:"10px 50px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px"},children:"Owner's Manual"}),r.jsx("a",{href:"/emergency-response",style:{display:"inline-block",padding:"10px 50px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px"},children:"Emergency Response Guide"})]})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#F7F7F7",padding:"64px",marginBottom:"40px",gap:"60px"},children:[r.jsx("div",{style:{flex:1},children:r.jsx("picture",{children:r.jsx("img",{src:"/Service-Maintenance/3.jpg",alt:"Spare Parts",style:{width:"100%",height:"auto"}})})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("h2",{style:{fontSize:"24px",fontWeight:600,marginBottom:"20px"},children:"Spare Parts"}),r.jsx("ul",{style:{fontSize:"14px",lineHeight:"1.6",paddingLeft:"20px"},children:r.jsx("li",{children:"BYD genuine spare parts professionally provide efficient supply and reasonable price for your vehicles."})})]})]})]}),r.jsx("div",{style:{backgroundColor:"#F7F7F7",padding:"64px 20px"},children:r.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto",textAlign:"center"},children:[r.jsx("h3",{style:{fontSize:"24px",fontWeight:600,marginBottom:"40px"},children:"Stay up to date of the latest news from BYD"}),r.jsx("div",{style:{maxWidth:"880px",margin:"0 auto"},children:r.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[r.jsxs("div",{style:{display:"flex",gap:"15px"},children:[r.jsx("input",{type:"text",placeholder:"First Name",style:{flex:1,padding:"15px",border:"1px solid #E7E7E7",fontSize:"16px",outline:"none"}}),r.jsx("input",{type:"email",placeholder:"Email Address",style:{flex:1,padding:"15px",border:"1px solid #E7E7E7",fontSize:"16px",outline:"none"}})]}),r.jsx("div",{style:{textAlign:"left"},children:r.jsxs("label",{style:{display:"flex",alignItems:"center",fontSize:"12px",gap:"10px"},children:[r.jsx("input",{type:"checkbox"}),r.jsxs("span",{children:["I consent to my personal data being used to receive all relevant BYD email updates. For more information, please see our ",r.jsx("a",{href:"/privacy",style:{color:"#252728",textDecoration:"underline"},children:"privacy policy"}),"."]})]})}),r.jsx("button",{type:"submit",style:{padding:"12px 50px",backgroundColor:"#252728",color:"#fff",border:"none",fontSize:"16px",fontWeight:600,cursor:"pointer",alignSelf:"center"},children:"SUBSCRIBE"})]})})]})}),r.jsx("style",{children:`
        @media (max-width: 991px) {
          h1 {
            font-size: 32px !important;
          }
          div[style*="flex"] {
            flex-direction: column !important;
          }
          div[style*="padding: 64px"] {
            padding: 30px 20px !important;
          }
        }
      `})]}),kb=()=>r.jsxs("div",{style:{position:"relative",width:"100%",minHeight:"500px",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[r.jsx("img",{src:"/Charge-Cards/Banner.jpg",alt:"BYD & Shell",style:{width:"100%",height:"auto",display:"block"}}),r.jsx("div",{style:{position:"absolute",bottom:"80px",left:"50%",transform:"translateX(-50%)",textAlign:"center",color:"#fff",width:"100%",padding:"0 20px"},children:r.jsx("h2",{style:{fontSize:"48px",fontWeight:600,margin:0,fontFamily:"Montserrat, Arial, sans-serif"},children:"BYD x Shell EV Charging Cards"})})]}),Wl=({title:e,items:t,imageSrc:n,reverse:i=!1})=>r.jsxs("div",{style:{display:"flex",flexDirection:i?"row-reverse":"row",gap:"60px",padding:"80px 96px",maxWidth:"1600px",margin:"0 auto",alignItems:"center"},children:[r.jsx("div",{style:{flex:1},children:r.jsx("img",{src:n,alt:e,style:{width:"100%",height:"auto"}})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("h2",{style:{fontSize:"32px",fontWeight:600,marginBottom:"24px",color:"#252728",fontFamily:"Montserrat, Arial, sans-serif"},children:e}),r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:t.map((o,l)=>r.jsxs("li",{style:{fontSize:"16px",lineHeight:"1.6",color:"#252728",marginBottom:"16px",paddingLeft:"24px",position:"relative",fontFamily:"Montserrat, Arial, sans-serif"},children:[r.jsx("span",{style:{position:"absolute",left:0,top:"8px",width:"6px",height:"6px",backgroundColor:"#252728",borderRadius:"50%"}}),r.jsx("span",{dangerouslySetInnerHTML:{__html:o}})]},l))})]})]}),Eb=()=>r.jsx("div",{style:{width:"100%",padding:"80px 0",backgroundColor:"#f7f7f7"},children:r.jsx("div",{style:{maxWidth:"1600px",margin:"0 auto"},children:r.jsx("video",{controls:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%",height:"auto",borderRadius:"0px"},children:r.jsx("source",{src:"Charge-Cards/BYD_Shell_video.mp4",type:"video/mp4"})})})}),zb=()=>r.jsxs("div",{style:{width:"100%",backgroundColor:"#fff"},children:[r.jsx(kb,{}),r.jsx(Wl,{title:"Experience More with Your BYD",items:["BYD and Shell Recharge are advancing together and driving the future of electric mobility.","Our enhanced offering will unlock a streamlined experience and reduce the cost of rapid and ultra-rapid charging on Shell Recharge public DC network.","A seamless driving and charging experience with BYD and Shell Recharge. Get ready to embark on this exciting journey with us. Shell Recharge app is mirrored onto the BYD infotainment system by Andriod Auto or Apple CarPlay. You can easily navigate to the nearest fastest and available charge point or a charge point that is conveniently located on your journey."],imageSrc:"/Charge-Cards/1.png",reverse:!0}),r.jsx(Wl,{title:"Exclusive benefits for BYD customers",items:["No subscription fees","Discount of £0.24 per kWh when using the Shell Recharge owned and operated fast charging network","Access 850 000+ charging points across Europe","Saving on European rapid and ultra-rapid charging too, in these countries, discount per kWh:<br>- France 0.15€<br>- Netherlands 0.20€<br>- Belgium 0.15€<br>- Germany 0.15€<br>- Austria 0.15€<br>- Switzerland 0.15€<br><br><sup>*Discounts will automatically be applied to the current kWh price, when using the BYD X Shell Recharge charge card</sup>"],imageSrc:"/Charge-Cards/2.jpg"}),r.jsx(Wl,{title:"Here's how the promotion works",items:["Please register for the BYD App and follow the BYD x Shell Recharge link to register for your charge card.","Your discount will be automatically applied when using the Shell Recharge owned and operated DC fast charging network.","Start charging and save smart. You will receive a digital overview of your charging sessions and your invoice at the end of each month.",'Read the Terms and Conditions: <a href="https://www.shell.co.uk/terms-and-conditions/terms-and-conditions-shell-recharge-x-byd-promotion.html" style="text-decoration: underline; color: #252728;">HERE</a>'],imageSrc:"/Charge-Cards/3.webp",reverse:!0}),r.jsx(Eb,{})]}),Bb=()=>r.jsx("div",{style:{position:"relative",width:"100%",height:"100vh",overflow:"hidden"},children:r.jsx("img",{src:"/Warranty/Banner.jpg",alt:"Warranty Policy",style:{width:"100%",height:"100%",objectFit:"cover"}})}),Db=()=>{const e=[{title:"Key Parts Warranty of BYD DOLPHIN SURF in European Market",vehicleType:"BYD DOLPHIN SURF",year:"2025",content:`
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bodywork Anti-Corrosion</td>
              <td>12 years, unlimited mileage</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Power Battery</td>
              <td>8 years, 250,000 km (155,350 miles)</td>
              <td>SOH<sup>1</sup> 70%</td>
            </tr>
            <tr>
              <td>Drive Unit<sup>2</sup></td>
              <td>8 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Basic Coverage</td>
              <td>6 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      `},{title:"Key Parts Warranty of BYD SEALION 7 in European Market",vehicleType:"BYD SEALION 7",year:"2025",content:`
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bodywork Anti-Corrosion</td>
              <td>12 years, unlimited mileage</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Power Battery</td>
              <td>8 years, 250,000 km (155,350 miles)</td>
              <td>SOH<sup>1</sup> 70%</td>
            </tr>
            <tr>
              <td>Drive Unit<sup>2</sup></td>
              <td>8 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Basic Coverage</td>
              <td>6 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      `},{title:"Key Parts Warranty of BYD SEAL U DM-i in European Market",vehicleType:"BYD SEAL U DM-i",year:"2024",content:`
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bodywork Anti-Corrosion</td>
              <td>12 years, unlimited mileage</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Power Battery</td>
              <td>8 years, 250,000 km (155,350 miles)</td>
              <td>SOH<sup>1</sup> 70%</td>
            </tr>
            <tr>
              <td>Drive Unit<sup>2</sup></td>
              <td>8 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Basic Coverage</td>
              <td>6 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      `},{title:"Key Parts Warranty of BYD ATTO 3 in European Market",vehicleType:"BYD ATTO 3",year:"2024",content:`
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bodywork Anti-Corrosion</td>
              <td>12 years, unlimited mileage</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Power Battery</td>
              <td>8 years, 250,000 km (155,350 miles)</td>
              <td>SOH<sup>1</sup> 70%</td>
            </tr>
            <tr>
              <td>Drive Unit<sup>2</sup></td>
              <td>8 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Basic Coverage</td>
              <td>6 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      `},{title:"Key Parts Warranty of BYD DOLPHIN in European Market",vehicleType:"BYD DOLPHIN",year:"2024",content:`
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bodywork Anti-Corrosion</td>
              <td>12 years, unlimited mileage</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Power Battery</td>
              <td>8 years, 250,000 km (155,350 miles)</td>
              <td>SOH<sup>1</sup> 70%</td>
            </tr>
            <tr>
              <td>Drive Unit<sup>2</sup></td>
              <td>8 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Basic Coverage</td>
              <td>6 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      `},{title:"Key Parts Warranty of BYD SEAL in European Market",vehicleType:"BYD SEAL",year:"2024",content:`
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bodywork Anti-Corrosion</td>
              <td>12 years, unlimited mileage</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Power Battery</td>
              <td>8 years, 250,000 km (155,350 miles)</td>
              <td>SOH<sup>1</sup> 70%</td>
            </tr>
            <tr>
              <td>Drive Unit<sup>2</sup></td>
              <td>8 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Basic Coverage</td>
              <td>6 years, 150,000 km (93,750 miles)</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      `}],[t,n]=v.useState("BYD SEAL U DM-i"),[i,o]=v.useState("2024"),[l,a]=v.useState(!1),[c,s]=v.useState(!1),d=Array.from(new Set(e.map(g=>g.vehicleType))),u=Array.from(new Set(e.map(g=>g.year))).sort((g,y)=>parseInt(y)-parseInt(g)),p=e.find(g=>g.vehicleType===t&&g.year===i);return r.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto",padding:"80px 96px",fontFamily:"Montserrat, Arial, sans-serif"},children:[r.jsxs("div",{style:{marginBottom:"60px"},children:[r.jsx("h2",{style:{fontSize:"32px",fontWeight:600,color:"#252728",marginBottom:"40px"},children:"Warranty Information"}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:500,color:"#252728",marginBottom:"24px"},children:"Please Select Vehicle Type"}),r.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"40px"},children:[r.jsxs("div",{style:{position:"relative",flex:1,maxWidth:"400px"},children:[r.jsx("input",{type:"text",value:t,readOnly:!0,placeholder:"Search Vehicle Type",onClick:()=>a(!l),style:{width:"100%",height:"48px",padding:"0 40px 0 16px",border:"1px solid #E7E7E7",fontSize:"16px",fontFamily:"Montserrat, Arial, sans-serif",outline:"none",cursor:"pointer",backgroundColor:"#fff"}}),r.jsx("div",{style:{position:"absolute",right:"16px",top:"50%",transform:"translateY(-50%)",width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid #252728",pointerEvents:"none"}}),l&&r.jsx("div",{style:{position:"absolute",top:"52px",left:0,right:0,backgroundColor:"#fff",border:"1px solid #E7E7E7",maxHeight:"300px",overflowY:"auto",zIndex:10,boxShadow:"0 4px 6px rgba(0,0,0,0.1)"},children:d.map((g,y)=>r.jsx("div",{onClick:()=>{n(g),a(!1)},style:{padding:"12px 16px",cursor:"pointer",fontSize:"16px",color:"#252728",fontFamily:"Montserrat, Arial, sans-serif",backgroundColor:g===t?"#f5f5f5":"#fff"},onMouseOver:b=>b.currentTarget.style.backgroundColor="#f5f5f5",onMouseOut:b=>b.currentTarget.style.backgroundColor=g===t?"#f5f5f5":"#fff",children:g},y))})]}),r.jsxs("div",{style:{position:"relative",flex:1,maxWidth:"400px"},children:[r.jsx("input",{type:"text",value:i,readOnly:!0,placeholder:"Search Year",onClick:()=>s(!c),style:{width:"100%",height:"48px",padding:"0 40px 0 16px",border:"1px solid #E7E7E7",fontSize:"16px",fontFamily:"Montserrat, Arial, sans-serif",outline:"none",cursor:"pointer",backgroundColor:"#fff"}}),r.jsx("div",{style:{position:"absolute",right:"16px",top:"50%",transform:"translateY(-50%)",width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid #252728",pointerEvents:"none"}}),c&&r.jsx("div",{style:{position:"absolute",top:"52px",left:0,right:0,backgroundColor:"#fff",border:"1px solid #E7E7E7",maxHeight:"300px",overflowY:"auto",zIndex:10,boxShadow:"0 4px 6px rgba(0,0,0,0.1)"},children:u.map((g,y)=>r.jsx("div",{onClick:()=>{o(g),s(!1)},style:{padding:"12px 16px",cursor:"pointer",fontSize:"16px",color:"#252728",fontFamily:"Montserrat, Arial, sans-serif",backgroundColor:g===i?"#f5f5f5":"#fff"},onMouseOver:b=>b.currentTarget.style.backgroundColor="#f5f5f5",onMouseOut:b=>b.currentTarget.style.backgroundColor=g===i?"#f5f5f5":"#fff",children:g},y))})]})]})]}),p&&r.jsxs("div",{style:{backgroundColor:"#fff",padding:"40px",border:"1px solid #E7E7E7",borderRadius:"8px"},children:[r.jsx("h4",{style:{fontSize:"24px",fontWeight:600,color:"#252728",marginBottom:"32px",fontFamily:"Montserrat, Arial, sans-serif"},children:p.title}),r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"Montserrat, Arial, sans-serif"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{padding:"16px",textAlign:"left",borderBottom:"2px solid #252728",fontSize:"16px",fontWeight:600,color:"#252728"},children:"Product Category"}),r.jsx("th",{style:{padding:"16px",textAlign:"left",borderBottom:"2px solid #252728",fontSize:"16px",fontWeight:600,color:"#252728"},children:"Duration"}),r.jsx("th",{style:{padding:"16px",textAlign:"left",borderBottom:"2px solid #252728",fontSize:"16px",fontWeight:600,color:"#252728"},children:"Remarks"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"Bodywork Anti-Corrosion"}),r.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"12 years, unlimited mileage"}),r.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"/"})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"Power Battery"}),r.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"8 years, 250,000 km (155,350 miles)"}),r.jsxs("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:["SOH",r.jsx("sup",{children:"1"})," 70%"]})]}),r.jsxs("tr",{children:[r.jsxs("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:["Drive Unit",r.jsx("sup",{children:"2"})]}),r.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"8 years, 150,000 km (93,750 miles)"}),r.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"/"})]}),r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"Basic Coverage"}),r.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"6 years, 150,000 km (93,750 miles)"}),r.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"/"})]}),r.jsx("tr",{children:r.jsx("td",{colSpan:3,style:{padding:"16px",borderBottom:"1px solid #E7E7E7"},children:r.jsxs("ul",{style:{margin:0,paddingLeft:"20px",fontSize:"12px",color:"#252728",lineHeight:"1.8"},children:[r.jsxs("li",{children:[r.jsx("sup",{children:"1"}),"SOH: State of Health"]}),r.jsxs("li",{children:[r.jsx("sup",{children:"2"}),"Drive Unit: Includes Drive Motor and Drive Motor Controller."]}),r.jsx("li",{children:"Spare Part: If the warranty period of the spare part is shorter than the remaining basic coverage period of the parts on the complete vehicle, the warranty period of the part shall be extended until the remaining warranty period of basic coverage expires."})]})})}),r.jsx("tr",{children:r.jsx("td",{colSpan:3,style:{padding:"16px",fontSize:"12px",color:"#252728",fontStyle:"italic"},children:"Note: For more warranty details, please contact the local BYD dealer."})})]})]})})]})]})},Tb=()=>r.jsxs("div",{style:{width:"100%",backgroundColor:"#fff"},children:[r.jsx(Bb,{}),r.jsx(Db,{})]}),Pb=()=>{const[e,t]=v.useState(null),n=[{id:1,name:"Grace Bay Hub",island:"Providenciales",address:"Grace Bay Road",type:"Fast Charge",power:"50kW",hours:"24/7",lat:21.79535210953533,lng:-72.18081954423658},{id:2,name:"Downtown Provo Station",island:"Providenciales",address:"Leeward Highway",type:"Rapid Charge",power:"150kW",hours:"24/7",lat:21.7814,lng:-72.2731},{id:3,name:"Airport Charging Point",island:"Providenciales",address:"PLS International Airport",type:"Fast Charge",power:"75kW",hours:"24/7",lat:21.7736,lng:-72.2658},{id:4,name:"Turtle Cove Marina",island:"Providenciales",address:"Turtle Cove",type:"Standard Charge",power:"22kW",hours:"6AM - 10PM",lat:21.7923,lng:-72.2589},{id:5,name:"Grand Turk Port",island:"Grand Turk",address:"Cockburn Town",type:"Fast Charge",power:"50kW",hours:"24/7",lat:21.4664,lng:-71.1363}];return r.jsxs("div",{style:{fontFamily:"Montserrat, Arial, sans-serif",color:"#252728",backgroundColor:"#fff"},children:[r.jsxs("div",{style:{position:"relative",width:"100%",height:"120vh",overflow:"hidden"},children:[r.jsx("img",{src:"/Charging-Locations/Banner.jpeg",alt:"Charging Locations Banner",style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}),r.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.4)",zIndex:1}}),r.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#fff",textAlign:"center",zIndex:2,width:"90%",maxWidth:"1200px"},children:[r.jsx("h1",{style:{fontSize:"64px",fontWeight:700,margin:0,letterSpacing:"-1px"},children:"Charging Locations"}),r.jsx("p",{style:{fontSize:"20px",marginTop:"24px",fontWeight:300,opacity:.9},children:"Power up across Turks & Caicos Islands"}),r.jsxs("div",{style:{display:"flex",gap:"40px",justifyContent:"center",marginTop:"40px",fontSize:"14px",fontWeight:500},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx(_i,{size:20}),r.jsxs("span",{children:[n.length," Stations"]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx(Dr,{size:20}),r.jsx("span",{children:"2 Islands"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx(Wa,{size:20}),r.jsx("span",{children:"Most 24/7"})]})]})]})]}),r.jsx("div",{style:{maxWidth:"1600px",margin:"0 auto",padding:"80px 20px"},children:r.jsxs("div",{style:{display:"flex",gap:"40px",alignItems:"flex-start"},children:[r.jsx("div",{style:{flex:"1.2",position:"sticky",top:"20px"},children:r.jsxs("div",{style:{position:"relative",width:"100%",height:"600px",backgroundColor:"#f0f4f8",borderRadius:"12px",overflow:"hidden",boxShadow:"0 10px 40px rgba(0,0,0,0.08)"},children:[r.jsx("iframe",{width:"100%",height:"100%",style:{border:0},loading:"lazy",allowFullScreen:!0,src:"https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=21.7941,-72.2052&zoom=11&maptype=roadmap"}),r.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"20px",backgroundColor:"rgba(255,255,255,0.95)",padding:"15px 20px",borderRadius:"8px",fontSize:"13px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",zIndex:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px"},children:[r.jsx("div",{style:{width:"12px",height:"12px",backgroundColor:"#e63946",borderRadius:"50%"}}),r.jsx("span",{style:{fontWeight:600},children:"Charging Station"})]}),r.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Click stations below for details"})]})]})}),r.jsxs("div",{style:{flex:"1",display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsx("h2",{style:{fontSize:"32px",fontWeight:700,marginBottom:"10px",letterSpacing:"-0.5px"},children:"All Charging Stations"}),n.map(i=>r.jsxs("div",{onClick:()=>t(i.id===e?null:i.id),style:{padding:"28px",backgroundColor:e===i.id?"#f8f9fa":"#fff",border:e===i.id?"2px solid #252728":"1px solid #e9ecef",borderRadius:"12px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:e===i.id?"0 8px 24px rgba(0,0,0,0.12)":"0 2px 8px rgba(0,0,0,0.04)"},onMouseEnter:o=>{e!==i.id&&(o.currentTarget.style.boxShadow="0 6px 20px rgba(0,0,0,0.08)",o.currentTarget.style.borderColor="#dee2e6")},onMouseLeave:o=>{e!==i.id&&(o.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.04)",o.currentTarget.style.borderColor="#e9ecef")},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"8px"},children:i.name}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#666",fontSize:"14px",marginBottom:"12px"},children:[r.jsx(Dr,{size:16}),r.jsxs("span",{children:[i.address,", ",i.island]})]}),r.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"16px",flexWrap:"wrap"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Type"}),r.jsx("div",{style:{fontSize:"15px",fontWeight:600,marginTop:"4px",color:"#252728"},children:i.type})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Power"}),r.jsx("div",{style:{fontSize:"15px",fontWeight:600,marginTop:"4px",color:"#252728"},children:i.power})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Hours"}),r.jsx("div",{style:{fontSize:"15px",fontWeight:600,marginTop:"4px",color:"#252728"},children:i.hours})]})]})]}),r.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"50%",backgroundColor:e===i.id?"#252728":"#f8f9fa",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease"},children:r.jsx(_i,{size:20,color:e===i.id?"#fff":"#252728"})})]}),e===i.id&&r.jsx("div",{style:{marginTop:"20px",paddingTop:"20px",borderTop:"1px solid #dee2e6"},children:r.jsxs("a",{href:`https://maps.google.com/?q=${i.lat},${i.lng}`,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 28px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"14px",borderRadius:"6px",transition:"all 0.3s ease"},onMouseEnter:o=>{o.currentTarget.style.backgroundColor="#3a3b3d",o.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:o=>{o.currentTarget.style.backgroundColor="#252728",o.currentTarget.style.transform="translateY(0)"},children:[r.jsx(Mf,{size:16}),"Get Directions"]})})]},i.id))]})]})}),r.jsx("div",{style:{backgroundColor:"#f8f9fa",padding:"80px 20px"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:700,marginBottom:"50px",textAlign:"center",letterSpacing:"-0.5px"},children:"Charging Made Simple"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px"},children:[r.jsxs("div",{style:{padding:"40px",backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[r.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"#252728",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:r.jsx(_i,{size:24,color:"#fff"})}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px"},children:"Fast Charging"}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#666"},children:"Most stations offer fast charging capabilities, getting you back on the road quickly."})]}),r.jsxs("div",{style:{padding:"40px",backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[r.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"#252728",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:r.jsx(Wa,{size:24,color:"#fff"})}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px"},children:"24/7 Access"}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#666"},children:"Many charging stations are available around the clock for your convenience."})]}),r.jsxs("div",{style:{padding:"40px",backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[r.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"#252728",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:r.jsx(Dr,{size:24,color:"#fff"})}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px"},children:"Strategic Locations"}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#666"},children:"Conveniently located near popular destinations and key areas across the islands."})]})]})]})}),r.jsx("div",{style:{backgroundColor:"#F7F7F7",padding:"64px 20px"},children:r.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto",textAlign:"center"},children:[r.jsx("h3",{style:{fontSize:"24px",fontWeight:600,marginBottom:"40px"},children:"Stay up to date of the latest news from BYD"}),r.jsx("div",{style:{maxWidth:"880px",margin:"0 auto"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[r.jsxs("div",{style:{display:"flex",gap:"15px"},children:[r.jsx("input",{type:"text",placeholder:"First Name",style:{flex:1,padding:"15px",border:"1px solid #E7E7E7",fontSize:"16px",outline:"none",borderRadius:"4px"}}),r.jsx("input",{type:"email",placeholder:"Email Address",style:{flex:1,padding:"15px",border:"1px solid #E7E7E7",fontSize:"16px",outline:"none",borderRadius:"4px"}})]}),r.jsx("div",{style:{textAlign:"left"},children:r.jsxs("label",{style:{display:"flex",alignItems:"center",fontSize:"12px",gap:"10px"},children:[r.jsx("input",{type:"checkbox"}),r.jsxs("span",{children:["I consent to my personal data being used to receive all relevant BYD email updates. For more information, please see our ",r.jsx("a",{href:"/privacy",style:{color:"#252728",textDecoration:"underline"},children:"privacy policy"}),"."]})]})}),r.jsx("button",{type:"button",style:{padding:"12px 50px",backgroundColor:"#252728",color:"#fff",border:"none",fontSize:"16px",fontWeight:600,cursor:"pointer",alignSelf:"center",borderRadius:"4px"},children:"SUBSCRIBE"})]})})]})}),r.jsx("style",{children:`
        @media (max-width: 991px) {
          h1 {
            font-size: 36px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          div[style*="display: flex"] {
            flex-direction: column !important;
          }
          div[style*="position: sticky"] {
            position: relative !important;
            top: auto !important;
          }
        }
      `})]})},Je=()=>{const e=on(),[t,n]=v.useState(0),[i,o]=v.useState({}),[l,a]=v.useState({}),c=v.useRef({}),d={"/models/dolphin-mini":"BYD Dolphin Mini","/models/atto-2":"BYD Atto 2","/models/atto-3":"BYD Atto 3","/models/icar-03":"iCAR 03 Adventure Ed.","/models/seal-u":"BYD Seal U","/models/sealion-07":"BYD Sealion 07","/models/tang":"BYD Tang","/models/radar-king-kong":"Radar King Kong","/models/song-pro":"BYD Song Pro","/models/leopard-ti7":"BYD Leopard Ti7","/models/yu8":"BYD YU8","/models/shark":"BYD Shark"}[e.pathname],u=ne.find(f=>f.name===d);if(!u)return r.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"20px"},children:[r.jsx("h1",{style:{fontSize:"48px",fontWeight:700},children:"Model Not Found"}),r.jsx("p",{style:{fontSize:"18px",color:"#606266"},children:"The model you're looking for doesn't exist."}),r.jsx("a",{href:"/models",style:{padding:"12px 32px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:700,fontSize:"14px"},children:"VIEW ALL MODELS"})]});const p={name:u.name,tagline:`${u.type==="electric"?"Electric":"Hybrid"} ${u.class}`,heroImage:u.images[3]||u.images[0],mainImage:u.images[0],sideImage:u.images[1]||u.images[0],interiorImage:u.images[2]||u.images[0],specs:[{value:u.range.split(" ")[0],unit:"",label:"Range"},{value:u.seats,unit:"",label:"Seating"},{value:u.size.split("x")[0].trim(),unit:"",label:"Length"}],colors:u.colors.exterior.map((f,j)=>({id:j,name:f,hex:g(f)})),category:u.category,class:u.class,size:u.size,type:u.type,notes:u.notes,interiorColors:u.colors.interior};function g(f){return{White:"#F3F4F6",Black:"#1F2937",Gray:"#6B7280",Grey:"#6B7280",Beige:"#D4C5B0",Blue:"#3B82F6",Green:"#4A7C59",Silver:"#C0C0C0",Orange:"#F97316","Bluish Gray":"#8B9DC3","Dark Green":"#1E5128","Light Blue":"#7DD3FC","Dark Blue":"#1E3A8A","Sunset Orange":"#FB923C","Cloud Gray":"#9CA3AF"}[f]||"#6B7280"}v.useEffect(()=>{const f=[];Object.keys(c.current).forEach(h=>{const m=c.current[h];if(m){const x=new IntersectionObserver(([w])=>{if(w.isIntersecting){o(z=>({...z,[h]:!0}));const S=w.boundingClientRect,E=window.innerHeight,C=Math.min(Math.max((E-S.top)/E,0),1);a(z=>({...z,[h]:C}))}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-100px 0px"});x.observe(m),f.push(x)}});const j=()=>{Object.keys(c.current).forEach(h=>{const m=c.current[h];if(m&&i[h]){const x=m.getBoundingClientRect(),w=window.innerHeight,S=Math.min(Math.max((w-x.top)/w,0),1);a(E=>({...E,[h]:S}))}})};return window.addEventListener("scroll",j,{passive:!0}),()=>{f.forEach(h=>h.disconnect()),window.removeEventListener("scroll",j)}},[i]);const y=(f,j)=>{const h=l[f]||0,m=j%2===0;if(!i[f])return{transform:`translate(${m?"-60px":"60px"}, 60px)`,opacity:0};const x=m?-60*(1-h):60*(1-h),w=60*(1-h);return{transform:`translate(${x}px, ${w}px) scale(${.95+.05*h})`,opacity:Math.min(h*1.5,1)}},b=f=>{const j=l[f]||0;return i[f]?{transform:`translateY(${40*(1-j)}px) scale(${.95+.05*j})`,opacity:Math.min(j*1.3,1)}:{transform:"translateY(40px) scale(0.95)",opacity:0}};return r.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#fff",fontFamily:"'Montserrat', Arial, 'Helvetica Neue', Helvetica, sans-serif",fontSize:"16px",fontWeight:400,color:"#000",lineHeight:1.5,WebkitFontSmoothing:"antialiased",WebkitTextSizeAdjust:"100%",margin:0,padding:0,boxSizing:"border-box",overflow:"hidden",overflowY:"auto"},children:[r.jsxs("section",{style:{position:"relative",height:"100vh",width:"100%",overflow:"hidden"},children:[r.jsx("img",{src:p.heroImage,alt:p.name,style:{width:"100%",height:"100%",objectFit:"cover"}}),r.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"#fff",textAlign:"center",background:"linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))"},children:[r.jsx("h1",{style:{fontSize:"60px",fontWeight:700,marginBottom:"16px",animation:"fadeInUp 1s cubic-bezier(0.645, 0.045, 0.355, 1)",textShadow:"0 2px 10px rgba(0,0,0,0.3)"},children:p.name}),r.jsx("p",{style:{fontSize:"24px",marginBottom:"48px",animation:"fadeInUp 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s both",textShadow:"0 2px 8px rgba(0,0,0,0.3)"},children:p.tagline}),r.jsx("ul",{style:{display:"flex",gap:"64px",listStyle:"none",padding:0,margin:0,animation:"fadeInUp 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.4s both"},children:p.specs.map((f,j)=>r.jsxs("li",{style:{textAlign:"center"},children:[r.jsxs("h3",{style:{fontSize:"40px",fontWeight:700,marginBottom:"8px",textShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:[f.value," ",r.jsx("span",{style:{fontSize:"24px"},children:f.unit})]}),r.jsx("p",{style:{fontSize:"14px",opacity:.9},children:f.label})]},j))}),p.notes&&r.jsx("div",{style:{position:"absolute",bottom:"40px",backgroundColor:"rgba(255,255,255,0.9)",color:"#252728",padding:"12px 24px",borderRadius:"4px",fontSize:"14px",fontWeight:500,textShadow:"none"},children:p.notes})]})]}),r.jsx("section",{ref:f=>c.current.colors=f,style:{padding:"160px 96px",backgroundColor:"#F7F7F7",transition:"all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",...y("colors",0)},children:r.jsxs("div",{style:{maxWidth:"1920px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"40px",fontWeight:700,marginBottom:"48px",textAlign:"center",color:"#000"},children:"Choose Your Color"}),r.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"24px",marginBottom:"64px",flexWrap:"wrap"},children:p.colors.map(f=>r.jsx("button",{onClick:()=>n(f.id),style:{width:"80px",height:"80px",borderRadius:"50%",backgroundColor:f.hex,border:t===f.id?"4px solid #252728":"2px solid #ddd",cursor:"pointer",transition:"all 0.3s ease",boxShadow:t===f.id?"0 4px 12px rgba(0,0,0,0.2)":"0 2px 6px rgba(0,0,0,0.1)",transform:t===f.id?"scale(1.1)":"scale(1)",position:"relative"},onMouseEnter:j=>{t!==f.id&&(j.currentTarget.style.transform="scale(1.05)")},onMouseLeave:j=>{t!==f.id&&(j.currentTarget.style.transform="scale(1)")}},f.id))}),r.jsx("div",{style:{textAlign:"center",marginBottom:"32px"},children:r.jsx("h3",{style:{fontSize:"24px",fontWeight:600,color:"#000"},children:p.colors[t].name})}),r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:r.jsx("img",{src:p.mainImage,alt:`${p.name} in ${p.colors[t].name}`,style:{maxWidth:"900px",width:"100%",height:"auto",borderRadius:"8px",boxShadow:"0 12px 32px 4px rgba(0, 0, 0, 0.08)",transition:"all 0.5s ease"}})})]})}),r.jsx("section",{ref:f=>c.current.exterior=f,style:{padding:"160px 96px",backgroundColor:"#fff",transition:"all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",...y("exterior",0)},children:r.jsx("div",{style:{maxWidth:"1920px",margin:"0 auto"},children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"80px",alignItems:"center"},children:[r.jsxs("div",{style:{transition:"all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",...y("exterior",0)},children:[r.jsx("h3",{style:{fontSize:"32px",fontWeight:700,marginBottom:"24px",color:"#000"},children:"Striking Exterior Design"}),r.jsxs("p",{style:{fontSize:"16px",color:"#606266",lineHeight:"1.8",marginBottom:"32px"},children:["Experience the perfect blend of form and function with the ",p.name,". Every curve and line has been meticulously crafted to create a vehicle that turns heads while delivering exceptional aerodynamics and efficiency."]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"16px",marginBottom:"32px"},children:[r.jsxs("div",{children:[r.jsx("h4",{style:{fontSize:"14px",color:"#909399",marginBottom:"8px"},children:"Category"}),r.jsx("p",{style:{fontSize:"18px",fontWeight:600,color:"#000"},children:p.category})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{fontSize:"14px",color:"#909399",marginBottom:"8px"},children:"Class"}),r.jsx("p",{style:{fontSize:"18px",fontWeight:600,color:"#000"},children:p.class})]})]}),r.jsxs("button",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px 32px",fontSize:"14px",fontWeight:700,color:"#fff",backgroundColor:"#252728",border:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",boxShadow:"0 0 5px 0 rgba(0, 0, 0, 0.5)"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="#000"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="#252728"},children:["EXPLORE FEATURES",r.jsx(Qr,{size:20})]})]}),r.jsx("div",{style:{transition:"all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s",...b("exterior")},children:r.jsx("img",{src:p.sideImage,alt:`${p.name} side view`,style:{width:"100%",borderRadius:"8px",boxShadow:"0 12px 32px 4px rgba(0, 0, 0, 0.08)"}})})]})})}),r.jsx("section",{ref:f=>c.current.interior=f,style:{padding:"160px 96px",backgroundColor:"#F7F7F7",transition:"all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",...y("interior",1)},children:r.jsx("div",{style:{maxWidth:"1920px",margin:"0 auto"},children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"80px",alignItems:"center"},children:[r.jsx("div",{style:{order:2,transition:"all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s",...b("interior-img")},children:r.jsx("img",{src:p.interiorImage,alt:`${p.name} interior`,style:{width:"100%",borderRadius:"8px",boxShadow:"0 12px 32px 4px rgba(0, 0, 0, 0.08)"}})}),r.jsxs("div",{style:{order:1,transition:"all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",...y("interior",1)},children:[r.jsx("h3",{style:{fontSize:"32px",fontWeight:700,marginBottom:"24px",color:"#000"},children:"Refined Interior Experience"}),r.jsx("p",{style:{fontSize:"16px",color:"#606266",lineHeight:"1.8",marginBottom:"32px"},children:"Step inside and discover a cabin designed for comfort and connectivity. Premium materials, intuitive technology, and thoughtful design come together to create an interior that elevates every journey."}),r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{fontSize:"14px",color:"#909399",marginBottom:"12px"},children:"Interior Color Options"}),r.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:p.interiorColors.map((f,j)=>r.jsx("span",{style:{padding:"8px 16px",backgroundColor:"#fff",borderRadius:"4px",fontSize:"14px",fontWeight:500,color:"#000",border:"1px solid #ddd"},children:f},j))})]}),r.jsxs("button",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px 32px",fontSize:"14px",fontWeight:700,color:"#fff",backgroundColor:"#252728",border:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",boxShadow:"0 0 5px 0 rgba(0, 0, 0, 0.5)"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="#000"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="#252728"},children:["VIEW INTERIOR DETAILS",r.jsx(Qr,{size:20})]})]})]})})}),u.videos&&u.videos.length>0&&r.jsx("section",{ref:f=>c.current["video-section"]=f,style:{padding:"160px 96px",backgroundColor:"#fff",transition:"all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",...y("video-section",0)},children:r.jsxs("div",{style:{maxWidth:"1920px",margin:"0 auto"},children:[r.jsxs("h2",{style:{fontSize:"40px",fontWeight:700,marginBottom:"48px",color:"#000",textAlign:"center"},children:["Experience the ",p.name]}),r.jsx("div",{style:{borderRadius:"8px",overflow:"hidden",boxShadow:"0 12px 32px 4px rgba(0, 0, 0, 0.08)"},children:r.jsxs("video",{controls:!0,style:{width:"100%",display:"block",backgroundColor:"#000"},poster:p.mainImage,children:[r.jsx("source",{src:u.videos[0],type:"video/mp4"}),"Your browser does not support the video tag."]})})]})}),r.jsx("section",{ref:f=>c.current["specs-summary"]=f,style:{padding:"160px 96px",backgroundColor:"#252728",color:"#fff",transition:"all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",...y("specs-summary",0)},children:r.jsxs("div",{style:{maxWidth:"1920px",margin:"0 auto",textAlign:"center"},children:[r.jsx("h2",{style:{fontSize:"40px",fontWeight:700,marginBottom:"48px"},children:"Technical Specifications"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"32px",marginTop:"48px"},children:[r.jsxs("div",{style:{padding:"32px",backgroundColor:"rgba(255,255,255,0.1)",borderRadius:"8px",transition:"all 0.3s ease"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="rgba(255,255,255,0.15)"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="rgba(255,255,255,0.1)"},children:[r.jsx("h4",{style:{fontSize:"16px",color:"#909399",marginBottom:"12px"},children:"Type"}),r.jsx("p",{style:{fontSize:"24px",fontWeight:700},children:p.type==="electric"?"Full Electric":"Plug-in Hybrid"})]}),r.jsxs("div",{style:{padding:"32px",backgroundColor:"rgba(255,255,255,0.1)",borderRadius:"8px",transition:"all 0.3s ease"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="rgba(255,255,255,0.15)"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="rgba(255,255,255,0.1)"},children:[r.jsx("h4",{style:{fontSize:"16px",color:"#909399",marginBottom:"12px"},children:"Range"}),r.jsx("p",{style:{fontSize:"24px",fontWeight:700},children:u.range})]}),r.jsxs("div",{style:{padding:"32px",backgroundColor:"rgba(255,255,255,0.1)",borderRadius:"8px",transition:"all 0.3s ease"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="rgba(255,255,255,0.15)"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="rgba(255,255,255,0.1)"},children:[r.jsx("h4",{style:{fontSize:"16px",color:"#909399",marginBottom:"12px"},children:"Category"}),r.jsx("p",{style:{fontSize:"24px",fontWeight:700},children:p.category})]}),r.jsxs("div",{style:{padding:"32px",backgroundColor:"rgba(255,255,255,0.1)",borderRadius:"8px",transition:"all 0.3s ease"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="rgba(255,255,255,0.15)"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="rgba(255,255,255,0.1)"},children:[r.jsx("h4",{style:{fontSize:"16px",color:"#909399",marginBottom:"12px"},children:"Seating"}),r.jsx("p",{style:{fontSize:"24px",fontWeight:700},children:u.seats})]}),r.jsxs("div",{style:{padding:"32px",backgroundColor:"rgba(255,255,255,0.1)",borderRadius:"8px",transition:"all 0.3s ease"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="rgba(255,255,255,0.15)"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="rgba(255,255,255,0.1)"},children:[r.jsx("h4",{style:{fontSize:"16px",color:"#909399",marginBottom:"12px"},children:"Dimensions"}),r.jsx("p",{style:{fontSize:"18px",fontWeight:700},children:u.size})]}),r.jsxs("div",{style:{padding:"32px",backgroundColor:"rgba(255,255,255,0.1)",borderRadius:"8px",transition:"all 0.3s ease"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="rgba(255,255,255,0.15)"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="rgba(255,255,255,0.1)"},children:[r.jsx("h4",{style:{fontSize:"16px",color:"#909399",marginBottom:"12px"},children:"Exterior Colors"}),r.jsxs("p",{style:{fontSize:"20px",fontWeight:700},children:[u.colors.exterior.length," Options"]})]})]})]})}),r.jsxs("div",{style:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",borderTop:"1px solid #e4e7ed",padding:"16px 24px",zIndex:50,display:"flex",justifyContent:"center",alignItems:"center",gap:"16px",flexWrap:"wrap",boxShadow:"0 -2px 10px rgba(0, 0, 0, 0.05)"},children:[r.jsx("button",{style:{backgroundColor:"#252728",color:"#fff",padding:"12px 32px",fontSize:"14px",fontWeight:700,cursor:"pointer",border:"none",transition:"all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",boxShadow:"0 0 5px 0 rgba(0, 0, 0, 0.5)",borderRadius:"0px"},onMouseEnter:f=>f.currentTarget.style.backgroundColor="#000",onMouseLeave:f=>f.currentTarget.style.backgroundColor="#252728",children:"INQUIRE NOW"}),r.jsx("button",{style:{backgroundColor:"#252728",color:"#fff",padding:"12px 32px",fontSize:"14px",fontWeight:700,cursor:"pointer",border:"none",transition:"all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",boxShadow:"0 0 5px 0 rgba(0, 0, 0, 0.5)",borderRadius:"0px"},onMouseEnter:f=>f.currentTarget.style.backgroundColor="#000",onMouseLeave:f=>f.currentTarget.style.backgroundColor="#252728",children:"TEST DRIVE"}),r.jsx("button",{style:{backgroundColor:"transparent",color:"#252728",padding:"12px 32px",fontSize:"14px",fontWeight:700,cursor:"pointer",border:"1px solid #252728",transition:"all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",borderRadius:"0px"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="#252728",f.currentTarget.style.color="#fff"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="transparent",f.currentTarget.style.color="#252728"},children:"DOWNLOAD BROCHURE"}),r.jsx("button",{style:{backgroundColor:"transparent",color:"#252728",padding:"12px 32px",fontSize:"14px",fontWeight:700,cursor:"pointer",border:"1px solid #252728",transition:"all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",borderRadius:"0px"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="#f5f7fa"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="transparent"},children:"PRICE & SPECS"})]}),r.jsx("section",{style:{backgroundColor:"#F7F7F7",padding:"80px 96px",marginBottom:"80px"},children:r.jsx("div",{style:{maxWidth:"1920px",margin:"0 auto"},children:r.jsx("p",{style:{fontSize:"12px",color:"#606266",lineHeight:"1.5"},children:"*The vehicle specifications detailed on this page are target specifications under controlled conditions; final specifications are pending and are subject to approval. All images shown are for illustration purposes only. Range figures are based on CLTC (China Light-Duty Vehicle Test Cycle) testing. Actual range may vary based on driving conditions, temperature, and usage patterns."})})}),r.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        * {
          scroll-behavior: smooth;
          box-sizing: border-box;
        }

        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        @media (max-width: 1024px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }
          
          section > div > div > div {
            order: initial !important;
          }

          section {
            padding: 80px 32px !important;
          }

          h1 {
            font-size: 48px !important;
          }

          h2 {
            font-size: 32px !important;
          }

          h3 {
            font-size: 28px !important;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 36px !important;
          }
          
          h2 {
            font-size: 28px !important;
          }

          h3 {
            font-size: 24px !important;
          }

          ul {
            flex-direction: column !important;
            gap: 32px !important;
          }

          section {
            padding: 64px 16px !important;
          }

          div[style*="gap: 80px"] {
            gap: 40px !important;
          }
        }
      `}})]})};function Rb(){return r.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[r.jsx("section",{style:{minHeight:"400px",background:"linear-gradient(135deg, #2d3436 0%, #3276AE 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[r.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Find a BYD Store"}),r.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Visit us at one of our locations across the UK"})]})}),r.jsx("section",{style:{padding:"60px 20px",backgroundColor:"#f8f9fa"},children:r.jsx("div",{style:{maxWidth:"800px",margin:"0 auto"},children:r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"40px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:[r.jsx("h2",{style:{fontSize:"28px",fontWeight:"600",marginBottom:"30px",color:"#252728",textAlign:"center"},children:"Search for Your Nearest Store"}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsx("input",{type:"text",placeholder:"Enter postcode or city",style:{width:"100%",padding:"16px 20px",fontSize:"16px",border:"2px solid #e5e7eb",borderRadius:"4px",boxSizing:"border-box",transition:"border-color 0.3s ease"}}),r.jsxs("select",{style:{width:"100%",padding:"16px 20px",fontSize:"16px",border:"2px solid #e5e7eb",borderRadius:"4px",boxSizing:"border-box",backgroundColor:"#ffffff"},children:[r.jsx("option",{children:"All Services"}),r.jsx("option",{children:"Sales"}),r.jsx("option",{children:"Service & Maintenance"}),r.jsx("option",{children:"Test Drives"}),r.jsx("option",{children:"Parts"})]}),r.jsx("button",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(50, 118, 174, 0.3)"},children:"Search Locations"})]})]})})}),r.jsx("section",{style:{padding:"0",backgroundColor:"#e5e7eb",minHeight:"500px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{textAlign:"center",color:"#6b7280"},children:[r.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),r.jsx("p",{style:{fontSize:"18px",marginTop:"20px"},children:"Interactive Map"})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Featured Locations"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"40px"},children:[{name:"BYD London Central",address:"123 Oxford Street, London, W1D 2HG",phone:"+44 20 7946 0958",services:["Sales","Service","Test Drives","Parts"]},{name:"BYD Manchester",address:"456 Deansgate, Manchester, M3 2AY",phone:"+44 161 839 3456",services:["Sales","Service","Test Drives"]},{name:"BYD Birmingham",address:"789 High Street, Birmingham, B1 1AA",phone:"+44 121 643 2000",services:["Sales","Service","Test Drives","Parts"]}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"32px",borderRadius:"8px",border:"1px solid #e5e7eb",transition:"all 0.3s ease"},children:[r.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"20px",color:"#3276AE"},children:e.name}),r.jsxs("div",{style:{marginBottom:"16px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",marginBottom:"12px"},children:[r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#5f5f5f",strokeWidth:"2",style:{flexShrink:0,marginTop:"2px"},children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),r.jsx("p",{style:{fontSize:"15px",color:"#5f5f5f",lineHeight:"1.5",margin:0},children:e.address})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#5f5f5f",strokeWidth:"2",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),r.jsx("p",{style:{fontSize:"15px",color:"#5f5f5f",margin:0},children:e.phone})]})]}),r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsx("p",{style:{fontSize:"14px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:"Services Available:"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:e.services.map((n,i)=>r.jsx("span",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"6px 12px",fontSize:"13px",borderRadius:"4px",fontWeight:"500"},children:n},i))})]}),r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx("button",{style:{flex:1,backgroundColor:"#3276AE",color:"#ffffff",padding:"12px",fontSize:"14px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:"Get Directions"}),r.jsx("button",{style:{flex:1,backgroundColor:"#ffffff",color:"#3276AE",padding:"12px",fontSize:"14px",fontWeight:"600",border:"2px solid #3276AE",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:"Contact Store"})]})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"What Our Stores Offer"}),r.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f"},children:"Experience world-class service at every BYD location"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px"},children:[{title:"Expert Sales Team",description:"Knowledgeable staff to help you find the perfect BYD vehicle"},{title:"Test Drive Center",description:"State-of-the-art facilities for comprehensive test drives"},{title:"Service & Maintenance",description:"Certified technicians and genuine BYD parts"},{title:"Customer Lounge",description:"Comfortable waiting areas with complimentary refreshments"},{title:"Charging Facilities",description:"On-site charging stations for your convenience"},{title:"Finance Advice",description:"Expert guidance on financing and leasing options"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[r.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#3276AE"},children:e.title}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#3276AE",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Can't Find a Store Near You?"}),r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Contact our customer service team and we'll help you find the best solution"}),r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Contact Us"})]})})]})}function Ab(){return r.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[r.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[r.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Cash Purchase"}),r.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Buy your BYD outright and own it from day one"}),r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"View Current Offers"})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Why Buy With Cash?"}),r.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto 60px"},children:"Purchasing your BYD with cash offers simplicity, ownership, and potential savings"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"40px"},children:[{icon:"💰",title:"No Interest Charges",description:"Avoid paying interest on finance agreements and save money over the lifetime of ownership"},{icon:"🔑",title:"Immediate Ownership",description:"The vehicle is yours from day one with no monthly payments or restrictions"},{icon:"✨",title:"Complete Freedom",description:"No mileage restrictions, modification limits, or early termination fees"},{icon:"📈",title:"Better Resale Value",description:"Sell your vehicle whenever you choose and keep 100% of the proceeds"},{icon:"⚡",title:"Simplified Process",description:"Straightforward purchase with minimal paperwork and faster delivery"},{icon:"🎯",title:"Potential Discounts",description:"Cash buyers may be eligible for special offers and dealer incentives"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"40px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",transition:"all 0.3s ease",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"48px",marginBottom:"20px"},children:e.icon}),r.jsx("h3",{style:{fontSize:"22px",fontWeight:"600",marginBottom:"16px",color:"#3276AE"},children:e.title}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Cash Purchase Process"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"},children:[{step:"1",title:"Choose Your BYD",description:"Select your preferred model, trim level, and options from our range"},{step:"2",title:"Get Your Quote",description:"Receive a detailed quote including any available cash purchase incentives"},{step:"3",title:"Reserve Your Vehicle",description:"Pay a refundable deposit to secure your chosen BYD"},{step:"4",title:"Complete Payment",description:"Transfer the full balance via bank transfer or cleared funds"},{step:"5",title:"Collection Day",description:"Collect your new BYD and drive away with complete ownership"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",position:"relative",paddingTop:"60px"},children:[r.jsx("div",{style:{position:"absolute",top:"20px",left:"30px",width:"40px",height:"40px",backgroundColor:"#3276AE",color:"#ffffff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"700"},children:e.step}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:e.title}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Available for Cash Purchase"}),r.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f"},children:"All BYD models are available for cash purchase with competitive pricing"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"30px"},children:[{model:"BYD DOLPHIN",price:"From £26,000",type:"Electric Hatchback"},{model:"BYD ATTO 3",price:"From £38,000",type:"Electric SUV"},{model:"BYD SEAL",price:"From £45,000",type:"Electric Saloon"},{model:"BYD SEAL U DM-i",price:"From £40,000",type:"Plug-in Hybrid SUV"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"30px",borderRadius:"8px",border:"1px solid #e5e7eb",transition:"all 0.3s ease"},children:[r.jsx("div",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"6px 12px",borderRadius:"4px",fontSize:"13px",fontWeight:"600",display:"inline-block",marginBottom:"16px"},children:e.type}),r.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:e.model}),r.jsx("p",{style:{fontSize:"28px",fontWeight:"700",color:"#3276AE",marginBottom:"24px"},children:e.price}),r.jsx("button",{style:{width:"100%",backgroundColor:"#3276AE",color:"#ffffff",padding:"14px",fontSize:"15px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",marginBottom:"12px"},children:"Get Quote"}),r.jsx("button",{style:{width:"100%",backgroundColor:"#ffffff",color:"#3276AE",padding:"14px",fontSize:"15px",fontWeight:"600",border:"2px solid #3276AE",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:"View Details"})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Payment Methods"}),r.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f"},children:"We accept various secure payment methods for your convenience"}),r.jsx("div",{style:{backgroundColor:"#ffffff",padding:"50px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[{method:"Bank Transfer (BACS)",description:"Secure electronic transfer directly from your bank account",recommended:!0},{method:"Debit Card",description:"Pay with your debit card (subject to daily limits)",recommended:!1},{method:"Cashier's Cheque",description:"Bank-guaranteed cheque (subject to clearance period)",recommended:!1},{method:"Building Society Cheque",description:"Guaranteed funds from a building society (subject to verification)",recommended:!1}].map((e,t)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"24px",backgroundColor:e.recommended?"#e8f4f8":"#f8f9fa",borderRadius:"8px",border:e.recommended?"2px solid #3276AE":"1px solid #e5e7eb",position:"relative"},children:[e.recommended&&r.jsx("div",{style:{position:"absolute",top:"-12px",left:"20px",backgroundColor:"#3276AE",color:"#ffffff",padding:"4px 12px",borderRadius:"4px",fontSize:"12px",fontWeight:"600"},children:"RECOMMENDED"}),r.jsxs("div",{style:{flex:1},children:[r.jsx("h4",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:e.method}),r.jsx("p",{style:{fontSize:"15px",color:"#5f5f5f",margin:0},children:e.description})]}),r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:e.recommended?"#3276AE":"#9ca3af",strokeWidth:"2",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})})]},t))})})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Frequently Asked Questions"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[{question:"Can I negotiate the price when buying with cash?",answer:"Yes, cash buyers may be eligible for special incentives. Contact your local BYD dealer to discuss available offers."},{question:"How long does the cash purchase process take?",answer:"Once payment is confirmed, you can typically collect your vehicle within 3-5 business days, subject to availability."},{question:"Do I need to pay the full amount upfront?",answer:"A refundable deposit secures your vehicle, with the balance due before collection. Payment terms can be discussed with your dealer."},{question:"What documentation do I need?",answer:"You'll need valid identification, proof of address, and payment confirmation. Your dealer will guide you through the process."}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"30px",borderRadius:"8px",border:"1px solid #e5e7eb"},children:[r.jsx("h4",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:e.question}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:e.answer})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#3276AE",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Buy Your BYD?"}),r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Get a personalized quote today and discover how affordable ownership can be"}),r.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Request Quote"}),r.jsx("button",{style:{backgroundColor:"transparent",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"2px solid #ffffff",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:"Find a Dealer"})]})]})})]})}function Nb(){return r.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[r.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #3276AE 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[r.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Bank Finance Options"}),r.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Flexible finance solutions through leading UK banks with competitive rates"}),r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Calculate Your Finance"})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Finance Calculator"}),r.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"50px",color:"#5f5f5f"},children:"See how much your monthly payments could be"}),r.jsx("div",{style:{backgroundColor:"#ffffff",padding:"50px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",fontSize:"16px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:"Vehicle Price"}),r.jsx("input",{type:"range",min:"20000",max:"60000",defaultValue:"35000",style:{width:"100%",height:"6px",borderRadius:"3px",outline:"none",background:"#e5e7eb"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"8px",fontSize:"14px",color:"#6b7280"},children:[r.jsx("span",{children:"£20,000"}),r.jsx("span",{style:{fontWeight:"700",fontSize:"20px",color:"#3276AE"},children:"£35,000"}),r.jsx("span",{children:"£60,000"})]})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",fontSize:"16px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:"Deposit Amount"}),r.jsx("input",{type:"range",min:"0",max:"20000",defaultValue:"5000",style:{width:"100%",height:"6px",borderRadius:"3px",outline:"none",background:"#e5e7eb"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"8px",fontSize:"14px",color:"#6b7280"},children:[r.jsx("span",{children:"£0"}),r.jsx("span",{style:{fontWeight:"700",fontSize:"20px",color:"#3276AE"},children:"£5,000"}),r.jsx("span",{children:"£20,000"})]})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",fontSize:"16px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:"Loan Term"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(100px, 1fr))",gap:"12px"},children:["24 months","36 months","48 months","60 months"].map((e,t)=>r.jsx("button",{style:{padding:"12px",fontSize:"14px",fontWeight:"600",backgroundColor:t===1?"#3276AE":"#f8f9fa",color:t===1?"#ffffff":"#252728",border:t===1?"none":"1px solid #e5e7eb",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:e},t))})]}),r.jsx("div",{style:{backgroundColor:"#f8f9fa",padding:"32px",borderRadius:"8px",border:"2px solid #3276AE"},children:r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("p",{style:{fontSize:"16px",color:"#5f5f5f",marginBottom:"8px"},children:"Estimated Monthly Payment"}),r.jsx("p",{style:{fontSize:"48px",fontWeight:"700",color:"#3276AE",margin:"0"},children:"£498"}),r.jsx("p",{style:{fontSize:"14px",color:"#6b7280",marginTop:"12px"},children:"Representative APR: 6.9% | Total amount payable: £34,928"})]})}),r.jsx("button",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(50, 118, 174, 0.3)",width:"100%"},children:"Apply for Finance"})]})})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Benefits of Bank Finance"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"},children:[{icon:"💳",title:"Competitive Rates",description:"Access to competitive interest rates from leading UK banks"},{icon:"🏦",title:"Trusted Lenders",description:"Work with established financial institutions you know and trust"},{icon:"⚖️",title:"FCA Regulated",description:"All lending partners are fully regulated by the Financial Conduct Authority"},{icon:"🔒",title:"Immediate Ownership",description:"You own the vehicle from day one with a personal loan"},{icon:"🔄",title:"Flexibility",description:"Choose your loan term and deposit amount to suit your budget"},{icon:"✅",title:"Simple Process",description:"Straightforward application with quick decisions"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"32px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center",transition:"all 0.3s ease"},children:[r.jsx("div",{style:{fontSize:"48px",marginBottom:"20px"},children:e.icon}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#3276AE"},children:e.title}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"How Bank Finance Works"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"40px"},children:[{number:"01",title:"Choose Your Vehicle",description:"Select your BYD and configure it to your preferences"},{number:"02",title:"Get Pre-Approved",description:"Complete a soft credit check to see your eligibility"},{number:"03",title:"Compare Offers",description:"Review finance options from multiple banks"},{number:"04",title:"Complete Application",description:"Submit your full application to your chosen lender"},{number:"05",title:"Receive Funds",description:"Once approved, the loan is paid directly to the dealer"},{number:"06",title:"Drive Away",description:"Collect your new BYD and start your journey"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"32px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",position:"relative",paddingTop:"70px"},children:[r.jsx("div",{style:{position:"absolute",top:"24px",left:"32px",fontSize:"48px",fontWeight:"700",color:"#e5e7eb",lineHeight:"1"},children:e.number}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#252728",position:"relative",zIndex:1},children:e.title}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Our Lending Partners"}),r.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f"},children:"We work with trusted UK banks to offer you the best rates"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"30px",alignItems:"center"},children:["Barclays","Santander","HSBC","Lloyds Bank","NatWest","TSB"].map((e,t)=>r.jsx("div",{style:{backgroundColor:"#f8f9fa",padding:"40px",borderRadius:"8px",textAlign:"center",border:"1px solid #e5e7eb",transition:"all 0.3s ease"},children:r.jsx("p",{style:{fontSize:"20px",fontWeight:"600",color:"#252728",margin:0},children:e})},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Eligibility Requirements"}),r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"50px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:["Be at least 18 years old","UK resident with 3+ years address history","Have a regular source of income","Have a good credit history","Pass affordability checks","Hold a valid UK driving licence"].map((e,t)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"6px"},children:[r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#3276AE",strokeWidth:"3",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})}),r.jsx("p",{style:{fontSize:"16px",color:"#252728",margin:0},children:e})]},t))}),r.jsx("div",{style:{marginTop:"40px",padding:"24px",backgroundColor:"#e8f4f8",borderRadius:"6px",borderLeft:"4px solid #3276AE"},children:r.jsxs("p",{style:{fontSize:"15px",color:"#252728",lineHeight:"1.6",margin:0},children:[r.jsx("strong",{children:"Note:"})," Meeting these criteria doesn't guarantee approval. All applications are subject to credit and affordability checks by the lender."]})})]})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Common Questions"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[{question:"Will applying affect my credit score?",answer:"Initial soft searches won't affect your credit score. Only the final application involves a hard search which may impact your score."},{question:"Can I pay off my loan early?",answer:"Yes, most banks allow early repayment. Some may charge an early settlement fee - check with your lender for specific terms."},{question:"What happens if I miss a payment?",answer:"Contact your lender immediately if you anticipate payment difficulties. Late payments can affect your credit score and may incur charges."},{question:"Can I finance a used BYD?",answer:"Yes, bank finance is available for both new and approved used BYD vehicles, subject to the lender's criteria."}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"30px",borderRadius:"8px",border:"1px solid #e5e7eb"},children:[r.jsx("h4",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:e.question}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:e.answer})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#3276AE",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Get Started?"}),r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Get a personalized finance quote in minutes with no impact on your credit score"}),r.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Apply Now"}),r.jsx("button",{style:{backgroundColor:"transparent",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"2px solid #ffffff",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:"Speak to an Advisor"})]})]})})]})}function Mb(){return r.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[r.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #0a192f 0%, #112240 50%, #3276AE 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[r.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Personal Contract Hire (PCH)"}),r.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Drive a brand new BYD with low fixed monthly payments"}),r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"View Lease Deals"})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"What is Personal Contract Hire?"}),r.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f",maxWidth:"800px",margin:"0 auto 60px"},children:"PCH is a flexible leasing option that lets you drive a new BYD for a fixed monthly payment without owning the vehicle"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"},children:[{icon:"📅",title:"Fixed Term",description:"Choose a lease period from 24 to 48 months"},{icon:"💷",title:"Low Monthly Payments",description:"Affordable fixed payments throughout the contract"},{icon:"🚗",title:"New Vehicle",description:"Drive the latest BYD models with the newest technology"},{icon:"🔧",title:"Maintenance Options",description:"Add a maintenance package for complete peace of mind"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"32px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"48px",marginBottom:"20px"},children:e.icon}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#3276AE"},children:e.title}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Current Lease Offers"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"30px"},children:[{model:"BYD DOLPHIN",monthly:"£289",deposit:"£2,601",term:"36 months",mileage:"8,000 miles/year"},{model:"BYD ATTO 3",monthly:"£379",deposit:"£3,411",term:"36 months",mileage:"8,000 miles/year"},{model:"BYD SEAL",monthly:"£449",deposit:"£4,041",term:"36 months",mileage:"8,000 miles/year"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"40px",borderRadius:"8px",border:"2px solid #e5e7eb",transition:"all 0.3s ease"},children:[r.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"24px",color:"#252728"},children:e.model}),r.jsxs("div",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"24px",borderRadius:"6px",marginBottom:"24px",textAlign:"center"},children:[r.jsx("p",{style:{fontSize:"14px",opacity:"0.9",marginBottom:"8px"},children:"From"}),r.jsx("p",{style:{fontSize:"48px",fontWeight:"700",margin:"0",lineHeight:"1"},children:e.monthly}),r.jsx("p",{style:{fontSize:"14px",opacity:"0.9",marginTop:"8px"},children:"per month"})]}),r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid #e5e7eb"},children:[r.jsx("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:"Initial Payment:"}),r.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:e.deposit})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid #e5e7eb"},children:[r.jsx("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:"Contract Length:"}),r.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:e.term})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0"},children:[r.jsx("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:"Annual Mileage:"}),r.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:e.mileage})]})]}),r.jsx("button",{style:{width:"100%",backgroundColor:"#3276AE",color:"#ffffff",padding:"14px",fontSize:"15px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:"Get This Deal"})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"How PCH Works"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px"},children:[{step:"1",title:"Choose Your Vehicle",description:"Select your BYD model, lease term, and annual mileage"},{step:"2",title:"Pay Initial Deposit",description:"Make your initial payment (typically 3-9 months' payments)"},{step:"3",title:"Drive & Enjoy",description:"Drive your new BYD with fixed monthly payments"},{step:"4",title:"Return the Vehicle",description:"At the end of the term, simply return the vehicle"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"32px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",position:"relative",paddingTop:"70px"},children:[r.jsx("div",{style:{position:"absolute",top:"24px",left:"32px",width:"40px",height:"40px",backgroundColor:"#3276AE",color:"#ffffff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"700"},children:e.step}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:e.title}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Why Choose PCH?"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[{title:"Lower Monthly Costs",description:"PCH typically offers lower monthly payments compared to other finance options"},{title:"No Depreciation Worry",description:"You don't own the vehicle, so depreciation isn't your concern"},{title:"Drive New Cars Regularly",description:"Upgrade to the latest models every few years without the hassle of selling"},{title:"Fixed Budgeting",description:"Know exactly what you'll pay each month for the entire contract"},{title:"Optional Maintenance",description:"Add a maintenance package to cover servicing and repairs"},{title:"Road Tax Included",description:"Many PCH deals include road tax for the duration of the contract"}].map((e,t)=>r.jsxs("div",{style:{display:"flex",gap:"20px",padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e5e7eb"},children:[r.jsx("div",{style:{flexShrink:0,width:"24px",height:"24px",marginTop:"2px"},children:r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#3276AE",strokeWidth:"3",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})})}),r.jsxs("div",{children:[r.jsx("h4",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:e.title}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:e.description})]})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Important Considerations"}),r.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f"},children:"Things to know before leasing"}),r.jsx("div",{style:{backgroundColor:"#ffffff",padding:"50px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsxs("div",{style:{padding:"20px",backgroundColor:"#fff3cd",borderRadius:"6px",borderLeft:"4px solid #ffc107"},children:[r.jsx("h4",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Mileage Limits"}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:"Exceeding your agreed annual mileage will result in excess mileage charges. Choose your mileage allowance carefully."})]}),r.jsxs("div",{style:{padding:"20px",backgroundColor:"#fff3cd",borderRadius:"6px",borderLeft:"4px solid #ffc107"},children:[r.jsx("h4",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Vehicle Condition"}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:"You must return the vehicle in good condition. Damage beyond fair wear and tear may incur charges."})]}),r.jsxs("div",{style:{padding:"20px",backgroundColor:"#fff3cd",borderRadius:"6px",borderLeft:"4px solid #ffc107"},children:[r.jsx("h4",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Early Termination"}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:"Ending a lease early can be expensive. Make sure you can commit to the full term before signing."})]}),r.jsxs("div",{style:{padding:"20px",backgroundColor:"#fff3cd",borderRadius:"6px",borderLeft:"4px solid #ffc107"},children:[r.jsx("h4",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"No Ownership"}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:"You never own the vehicle with PCH. If ownership is important to you, consider other finance options."})]})]})})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#3276AE",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Lease Your BYD?"}),r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Get a personalized lease quote and start driving your dream BYD today"}),r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Get Your Quote"})]})})]})}function Ib(){return r.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[r.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #134e5e 0%, #71b280 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[r.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"BYD Dealer Finance"}),r.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Exclusive finance deals available through authorized BYD dealers"}),r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Find Your Deal"})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"PCP Finance Options"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px"},children:[{icon:"💰",title:"Flexible Payments",description:"Lower monthly payments with an optional final payment"},{icon:"🔄",title:"Multiple Options",description:"Keep, return, or exchange your vehicle at the end"},{icon:"📊",title:"Guaranteed Value",description:"Know your vehicle's guaranteed future value upfront"},{icon:"🎯",title:"Competitive Rates",description:"Access exclusive manufacturer-backed finance rates"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"32px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"48px",marginBottom:"20px"},children:e.icon}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#3276AE"},children:e.title}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Current PCP Offers"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"30px"},children:[{model:"BYD DOLPHIN",monthly:"£299",deposit:"£2,999",apr:"5.9%",term:"48 months"},{model:"BYD ATTO 3",monthly:"£399",deposit:"£3,999",apr:"5.9%",term:"48 months"},{model:"BYD SEAL",monthly:"£499",deposit:"£4,999",apr:"5.9%",term:"48 months"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"40px",borderRadius:"8px",border:"2px solid #e5e7eb"},children:[r.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"24px",color:"#252728"},children:e.model}),r.jsxs("div",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"24px",borderRadius:"6px",marginBottom:"24px",textAlign:"center"},children:[r.jsx("p",{style:{fontSize:"14px",opacity:"0.9",marginBottom:"8px"},children:"From"}),r.jsx("p",{style:{fontSize:"48px",fontWeight:"700",margin:"0",lineHeight:"1"},children:e.monthly}),r.jsx("p",{style:{fontSize:"14px",opacity:"0.9",marginTop:"8px"},children:"per month"})]}),r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid #e5e7eb"},children:[r.jsx("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:"Deposit:"}),r.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:e.deposit})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid #e5e7eb"},children:[r.jsx("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:"APR:"}),r.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:e.apr})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0"},children:[r.jsx("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:"Term:"}),r.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:e.term})]})]}),r.jsx("button",{style:{width:"100%",backgroundColor:"#3276AE",color:"#ffffff",padding:"14px",fontSize:"15px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Get This Deal"})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#3276AE",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Find Your Perfect Finance Deal"}),r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Speak to a dealer today for personalized finance options"}),r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Contact a Dealer"})]})})]})}function Ob(){return r.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[r.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[r.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"BYD Subscription Service"}),r.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"All-inclusive car subscription with ultimate flexibility"}),r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#667eea",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Explore Plans"})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"What's Included"}),r.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto 60px"},children:"Everything you need in one simple monthly payment"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px"},children:[{icon:"🚗",title:"Vehicle",description:"Brand new BYD of your choice"},{icon:"🔧",title:"Maintenance",description:"All servicing and repairs included"},{icon:"🛡️",title:"Insurance",description:"Comprehensive cover included"},{icon:"🚚",title:"Breakdown Cover",description:"24/7 roadside assistance"},{icon:"🔄",title:"Vehicle Swaps",description:"Change your vehicle as needed"},{icon:"📱",title:"Digital Management",description:"Manage everything via app"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:e.icon}),r.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"10px",color:"#667eea"},children:e.title}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Subscription Plans"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"30px"},children:[{plan:"Starter",monthly:"£599",models:"BYD DOLPHIN",mileage:"750 miles/month",commitment:"6 months minimum"},{plan:"Premium",monthly:"£799",models:"BYD ATTO 3",mileage:"1,000 miles/month",commitment:"6 months minimum",featured:!0},{plan:"Executive",monthly:"£999",models:"BYD SEAL",mileage:"1,250 miles/month",commitment:"6 months minimum"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:e.featured?"#667eea":"#f8f9fa",padding:"40px",borderRadius:"8px",border:e.featured?"3px solid #667eea":"1px solid #e5e7eb",position:"relative",transform:e.featured?"scale(1.05)":"scale(1)"},children:[e.featured&&r.jsx("div",{style:{position:"absolute",top:"-16px",left:"50%",transform:"translateX(-50%)",backgroundColor:"#764ba2",color:"#ffffff",padding:"6px 20px",borderRadius:"20px",fontSize:"13px",fontWeight:"600"},children:"MOST POPULAR"}),r.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"20px",color:e.featured?"#ffffff":"#252728"},children:e.plan}),r.jsx("p",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"8px",color:e.featured?"#ffffff":"#667eea"},children:e.monthly}),r.jsx("p",{style:{fontSize:"14px",marginBottom:"30px",color:e.featured?"rgba(255,255,255,0.8)":"#6b7280"},children:"per month"}),r.jsx("div",{style:{marginBottom:"30px"},children:[{label:"Models",value:e.models},{label:"Monthly Mileage",value:e.mileage},{label:"Commitment",value:e.commitment}].map((n,i)=>r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:i<2?`1px solid ${e.featured?"rgba(255,255,255,0.2)":"#e5e7eb"}`:"none"},children:[r.jsx("span",{style:{fontSize:"14px",color:e.featured?"rgba(255,255,255,0.8)":"#5f5f5f"},children:n.label}),r.jsx("span",{style:{fontSize:"14px",fontWeight:"600",color:e.featured?"#ffffff":"#252728"},children:n.value})]},i))}),r.jsx("button",{style:{width:"100%",backgroundColor:e.featured?"#ffffff":"#667eea",color:e.featured?"#667eea":"#ffffff",padding:"14px",fontSize:"15px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Subscribe Now"})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"How It Works"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"30px"},children:[{step:"1",title:"Choose Your Plan",description:"Select the subscription tier that matches your needs and budget"},{step:"2",title:"Complete Setup",description:"Quick online application with instant approval"},{step:"3",title:"Receive Your BYD",description:"Vehicle delivered to your door within 7-14 days"},{step:"4",title:"Drive & Enjoy",description:"Unlimited flexibility with all costs included"}].map((e,t)=>r.jsxs("div",{style:{display:"flex",gap:"30px",alignItems:"center",backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"},children:[r.jsx("div",{style:{width:"60px",height:"60px",flexShrink:0,backgroundColor:"#667eea",color:"#ffffff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px",fontWeight:"700"},children:e.step}),r.jsxs("div",{children:[r.jsx("h4",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:e.title}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:e.description})]})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#667eea",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Subscribe?"}),r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Get started with the most flexible way to drive a BYD"}),r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#667eea",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Start Your Subscription"})]})})]})}function Lb(){return r.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[r.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[r.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"BYD Vehicle Rentals"}),r.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Experience electric driving with flexible short-term rentals"}),r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#f5576c",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Book Now"})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Rental Options"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"},children:[{icon:"📅",title:"Daily Rental",description:"Perfect for short trips and weekend getaways",duration:"From £89/day"},{icon:"📆",title:"Weekly Rental",description:"Great for extended vacations and business trips",duration:"From £499/week"},{icon:"🗓️",title:"Monthly Rental",description:"Ideal for temporary relocations and long projects",duration:"From £1,499/month"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"40px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center",transition:"all 0.3s ease"},children:[r.jsx("div",{style:{fontSize:"64px",marginBottom:"20px"},children:e.icon}),r.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"12px",color:"#f5576c"},children:e.title}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#5f5f5f",marginBottom:"16px"},children:e.description}),r.jsx("p",{style:{fontSize:"20px",fontWeight:"700",color:"#252728"},children:e.duration})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Available Vehicles"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"30px"},children:[{model:"BYD DOLPHIN",type:"Compact Electric",daily:"£89",weekly:"£499",monthly:"£1,499"},{model:"BYD ATTO 3",type:"Electric SUV",daily:"£119",weekly:"£699",monthly:"£1,999"},{model:"BYD SEAL",type:"Executive Saloon",daily:"£149",weekly:"£899",monthly:"£2,499"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"40px",borderRadius:"8px",border:"1px solid #e5e7eb"},children:[r.jsx("div",{style:{backgroundColor:"#f5576c",color:"#ffffff",padding:"6px 12px",borderRadius:"4px",fontSize:"13px",fontWeight:"600",display:"inline-block",marginBottom:"16px"},children:e.type}),r.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"24px",color:"#252728"},children:e.model}),r.jsx("div",{style:{marginBottom:"24px"},children:[{period:"Daily Rate",price:e.daily},{period:"Weekly Rate",price:e.weekly},{period:"Monthly Rate",price:e.monthly}].map((n,i)=>r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:i<2?"1px solid #e5e7eb":"none"},children:[r.jsxs("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:[n.period,":"]}),r.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:n.price})]},i))}),r.jsx("button",{style:{width:"100%",backgroundColor:"#f5576c",color:"#ffffff",padding:"14px",fontSize:"15px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Book This Vehicle"})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"What's Included"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:["Fully charged vehicle at pickup","Comprehensive insurance coverage","24/7 breakdown assistance","Unlimited mileage on all rentals","Free charging at BYD partner stations","Flexible pickup and return locations"].map((e,t)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",backgroundColor:"#ffffff",padding:"20px",borderRadius:"6px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"},children:[r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#f5576c",strokeWidth:"3",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})}),r.jsx("p",{style:{fontSize:"16px",color:"#252728",margin:0},children:e})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Rental Requirements"}),r.jsx("div",{style:{backgroundColor:"#f8f9fa",padding:"50px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["Minimum age: 25 years old","Valid UK driving licence held for at least 2 years","Valid credit or debit card for security deposit","Proof of address (utility bill or bank statement)","Valid identification (passport or driving licence)","Security deposit: £500-£1,000 (refundable)"].map((e,t)=>r.jsx("li",{style:{fontSize:"16px",color:"#252728",padding:"12px 0",borderBottom:t<5?"1px solid #e5e7eb":"none"},children:e},t))})})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f5576c",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Rent?"}),r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Book your BYD rental today and experience the future of driving"}),r.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#f5576c",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Book Now"}),r.jsx("button",{style:{backgroundColor:"transparent",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"2px solid #ffffff",borderRadius:"4px",cursor:"pointer"},children:"View Locations"})]})]})})]})}function Wb(){return r.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[r.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[r.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Fleet & Business Solutions"}),r.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Electrify your fleet with BYD's comprehensive business solutions"}),r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#1a2a6c",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Get Fleet Quote"})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("div",{style:{maxWidth:"800px",margin:"0 auto 60px",textAlign:"center"},children:r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.8",color:"#5f5f5f"},children:"Upgrade your business fleet to electric with BYD fleet cars - where innovation meets reliability. Our advanced vehicle lineup is built to support fleet operations with impressive range, low running costs, and class-leading technology. From the agile and practical BYD ATTO 3 EV to the versatile BYD SEAL U DM-i SUV plug-in hybrid, every BYD fleet model is designed for performance, comfort, and sustainability - without compromise."})}),r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Benefits of BYD Company Cars"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"30px"},children:[{icon:"⚡",title:"Cutting-edge Electrification",description:"Go further for longer thanks to BYD's industry-leading battery technology"},{icon:"💰",title:"Cost Savings",description:"Switch to all-electric or hybrid driving and reduce your company's spend on petrol and diesel"},{icon:"⭐",title:"5-star Euro NCAP Safety Ratings",description:"Thanks to our advanced safety features and suite of driver assistance systems, your team can travel safely and without worry"},{icon:"🚗",title:"Options for Everyone",description:"Choose from a wide selection of electric and plug-in hybrid vehicles, to suit your fleet needs. Scalable solutions for fleets of any size"},{icon:"🛠️",title:"Support When You Need It",description:"Our team of experts provides comprehensive support, from help choosing a vehicle to ongoing maintenance"},{icon:"😊",title:"Driver Satisfaction",description:"High specification is standard giving your team an elevated driving experience"},{icon:"🛡️",title:"Industry-Leading Warranty",description:"As standard, your BYD fleet vehicle will be covered by a 6-year or 93,750-mile vehicle warranty and an 8-year or 155,350-mile battery warranty"},{icon:"🌱",title:"ESG Alignment",description:"Reduced emissions for ESG alignment and corporate sustainability goals"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"32px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",transition:"all 0.3s ease"},children:[r.jsx("div",{style:{fontSize:"48px",marginBottom:"20px",textAlign:"center"},children:e.icon}),r.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#1a2a6c"},children:e.title}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Discover Our Models"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px"},children:[{model:"BYD DOLPHIN SURF",type:"Compact Electric City Car",tag:"All Electric"},{model:"BYD DOLPHIN",type:"Compact Electric Hatchback",tag:"All Electric"},{model:"BYD ATTO 2",type:"Electric Small SUV",tag:"All Electric"},{model:"BYD ATTO 3",type:"Electric Compact SUV",tag:"All Electric"},{model:"BYD SEAL",type:"Executive Electric Saloon",tag:"All Electric"},{model:"BYD SEALION 7",type:"Electric SUV",tag:"All Electric"},{model:"BYD SEAL U DM-i",type:"Plug-in Hybrid SUV",tag:"Plug-in Hybrid"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",transition:"all 0.3s ease"},children:[r.jsx("div",{style:{backgroundColor:e.tag==="All Electric"?"#1a2a6c":"#b21f1f",color:"#ffffff",padding:"6px 12px",borderRadius:"4px",fontSize:"12px",fontWeight:"600",display:"inline-block",marginBottom:"16px"},children:e.tag}),r.jsx("h3",{style:{fontSize:"22px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:e.model}),r.jsx("p",{style:{fontSize:"15px",color:"#5f5f5f",marginBottom:"24px"},children:e.type}),r.jsx("button",{style:{width:"100%",backgroundColor:"#1a2a6c",color:"#ffffff",padding:"12px",fontSize:"14px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",marginBottom:"8px"},children:"Learn More"}),r.jsx("button",{style:{width:"100%",backgroundColor:"#ffffff",color:"#1a2a6c",padding:"12px",fontSize:"14px",fontWeight:"600",border:"2px solid #1a2a6c",borderRadius:"4px",cursor:"pointer"},children:"Request Fleet Quote"})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:r.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Our Fleet Services"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"},children:[{title:"Fleet Consultation",description:"Expert advice on transitioning your fleet to electric vehicles"},{title:"Volume Discounts",description:"Competitive pricing for fleet orders of 5+ vehicles"},{title:"Flexible Finance",description:"Tailored finance packages including leasing and outright purchase"},{title:"Maintenance Plans",description:"Comprehensive service packages to keep your fleet running smoothly"},{title:"Charging Solutions",description:"Workplace charging infrastructure planning and installation"},{title:"Fleet Management",description:"Digital tools to monitor and manage your entire fleet"},{title:"Driver Training",description:"EV training programs for your drivers to maximize efficiency"},{title:"Priority Support",description:"Dedicated account manager and 24/7 business support"}].map((e,t)=>r.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[r.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#1a2a6c"},children:e.title}),r.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:r.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Get Started With BYD Fleet"}),r.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"50px",color:"#5f5f5f"},children:"Tell us about your business and we'll create a tailored fleet solution"}),r.jsx("div",{style:{backgroundColor:"#ffffff",padding:"50px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:r.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Company Name *"}),r.jsx("input",{type:"text",style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Industry *"}),r.jsxs("select",{style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box",backgroundColor:"#ffffff"},children:[r.jsx("option",{children:"Please select"}),r.jsx("option",{children:"Construction"}),r.jsx("option",{children:"Healthcare"}),r.jsx("option",{children:"Logistics & Transport"}),r.jsx("option",{children:"Professional Services"}),r.jsx("option",{children:"Retail"}),r.jsx("option",{children:"Technology"}),r.jsx("option",{children:"Other"})]})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Full Name *"}),r.jsx("input",{type:"text",style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Job Title *"}),r.jsx("input",{type:"text",style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box"}})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Email *"}),r.jsx("input",{type:"email",style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Phone Number *"}),r.jsx("input",{type:"tel",style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box"}})]})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Fleet Size *"}),r.jsxs("select",{style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box",backgroundColor:"#ffffff"},children:[r.jsx("option",{children:"Please select"}),r.jsx("option",{children:"5-10 vehicles"}),r.jsx("option",{children:"11-25 vehicles"}),r.jsx("option",{children:"26-50 vehicles"}),r.jsx("option",{children:"51-100 vehicles"}),r.jsx("option",{children:"100+ vehicles"})]})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Your Requirements"}),r.jsx("textarea",{rows:4,style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box",fontFamily:"Arial, sans-serif",resize:"vertical"},placeholder:"Tell us about your fleet requirements..."})]}),r.jsx("button",{type:"submit",style:{backgroundColor:"#1a2a6c",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(26, 42, 108, 0.3)",marginTop:"16px"},children:"Submit Enquiry"})]})})]})}),r.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#1a2a6c",textAlign:"center"},children:r.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[r.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Electrify Your Fleet?"}),r.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Our fleet specialists are ready to help you transition to electric"}),r.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[r.jsx("button",{style:{backgroundColor:"#ffffff",color:"#1a2a6c",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Contact Fleet Team"}),r.jsx("button",{style:{backgroundColor:"transparent",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"2px solid #ffffff",borderRadius:"4px",cursor:"pointer"},children:"Download Brochure"})]})]})})]})}const Fb=()=>{const{pathname:e,hash:t}=on();return v.useEffect(()=>{t?setTimeout(()=>{const n=document.querySelector(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},100):window.scrollTo(0,0)},[e,t]),null},_b=()=>r.jsx(fx,{children:r.jsxs("div",{className:"app",children:[r.jsx(vx,{}),r.jsx(Fb,{}),r.jsx("main",{className:"main-content",children:r.jsxs(ox,{children:[r.jsx(Y,{path:"/",element:r.jsx(Zx,{})}),r.jsx(Y,{path:"/models",element:r.jsx(If,{})}),r.jsx(Y,{path:"/models/dolphin-mini",element:r.jsx(Je,{})}),r.jsx(Y,{path:"/models/atto-2",element:r.jsx(Je,{})}),r.jsx(Y,{path:"/models/atto-3",element:r.jsx(Je,{})}),r.jsx(Y,{path:"/models/icar-03",element:r.jsx(Je,{})}),r.jsx(Y,{path:"/models/seal-u",element:r.jsx(Je,{})}),r.jsx(Y,{path:"/models/sealion-07",element:r.jsx(Je,{})}),r.jsx(Y,{path:"/models/tang",element:r.jsx(Je,{})}),r.jsx(Y,{path:"/models/radar-king-kong",element:r.jsx(Je,{})}),r.jsx(Y,{path:"/models/song-pro",element:r.jsx(Je,{})}),r.jsx(Y,{path:"/models/leopard-ti7",element:r.jsx(Je,{})}),r.jsx(Y,{path:"/models/yu8",element:r.jsx(Je,{})}),r.jsx(Y,{path:"/models/shark",element:r.jsx(Je,{})}),r.jsx(Y,{path:"/models/:id",element:r.jsx(ey,{})}),r.jsx(Y,{path:"/technology",element:r.jsx(ty,{})}),r.jsx(Y,{path:"/about",element:r.jsx(oy,{})}),r.jsx(Y,{path:"/contact",element:r.jsx(by,{})}),r.jsx(Y,{path:"/ownership",element:r.jsx(jy,{})}),r.jsx(Y,{path:"/ownership/assistance",element:r.jsx(Sb,{})}),r.jsx(Y,{path:"/ownership/service-maintenance",element:r.jsx(Cb,{})}),r.jsx(Y,{path:"/ownership/charge-cards",element:r.jsx(zb,{})}),r.jsx(Y,{path:"/ownership/warranty",element:r.jsx(Tb,{})}),r.jsx(Y,{path:"/ownership/charging-locations",element:r.jsx(Pb,{})}),r.jsx(Y,{path:"/purchasing",element:r.jsx(wy,{})}),r.jsx(Y,{path:"/purchasing/locations",element:r.jsx(Rb,{})}),r.jsx(Y,{path:"/purchasing/cash-purchase",element:r.jsx(Ab,{})}),r.jsx(Y,{path:"/purchasing/finance-bank",element:r.jsx(Nb,{})}),r.jsx(Y,{path:"/purchasing/lease",element:r.jsx(Mb,{})}),r.jsx(Y,{path:"/purchasing/finance-dealer",element:r.jsx(Ib,{})}),r.jsx(Y,{path:"/purchasing/subscriptions",element:r.jsx(Ob,{})}),r.jsx(Y,{path:"/purchasing/rentals",element:r.jsx(Lb,{})}),r.jsx(Y,{path:"/purchasing/fleet-solutions",element:r.jsx(Wb,{})}),r.jsx(Y,{path:"/test-drive",element:r.jsx(wb,{})})]})}),r.jsx(bx,{})]})}),Vb=_l.createRoot(document.getElementById("root"));Vb.render(r.jsx(vu.StrictMode,{children:r.jsx(_b,{})}));
