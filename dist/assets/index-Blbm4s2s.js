function jp(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();function wp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Os={exports:{}},zi={},Fs={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=Symbol.for("react.element"),Sp=Symbol.for("react.portal"),kp=Symbol.for("react.fragment"),Cp=Symbol.for("react.strict_mode"),zp=Symbol.for("react.profiler"),Bp=Symbol.for("react.provider"),Ep=Symbol.for("react.context"),Dp=Symbol.for("react.forward_ref"),Np=Symbol.for("react.suspense"),Tp=Symbol.for("react.memo"),Ap=Symbol.for("react.lazy"),xa=Symbol.iterator;function Wp(e){return e===null||typeof e!="object"?null:(e=xa&&e[xa]||e["@@iterator"],typeof e=="function"?e:null)}var _s={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ys=Object.assign,Hs={};function kn(e,t,r){this.props=e,this.context=t,this.refs=Hs,this.updater=r||_s}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Us(){}Us.prototype=kn.prototype;function bl(e,t,r){this.props=e,this.context=t,this.refs=Hs,this.updater=r||_s}var jl=bl.prototype=new Us;jl.constructor=bl;Ys(jl,kn.prototype);jl.isPureReactComponent=!0;var ya=Array.isArray,Vs=Object.prototype.hasOwnProperty,wl={current:null},$s={key:!0,ref:!0,__self:!0,__source:!0};function qs(e,t,r){var i,o={},l=null,a=null;if(t!=null)for(i in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)Vs.call(t,i)&&!$s.hasOwnProperty(i)&&(o[i]=t[i]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)o[i]===void 0&&(o[i]=s[i]);return{$$typeof:xr,type:e,key:l,ref:a,props:o,_owner:wl.current}}function Pp(e,t){return{$$typeof:xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sl(e){return typeof e=="object"&&e!==null&&e.$$typeof===xr}function Rp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var va=/\/+/g;function Ui(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rp(""+e.key):t.toString(36)}function Yr(e,t,r,i,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case xr:case Sp:a=!0}}if(a)return a=e,o=o(a),e=i===""?"."+Ui(a,0):i,ya(o)?(r="",e!=null&&(r=e.replace(va,"$&/")+"/"),Yr(o,t,r,"",function(d){return d})):o!=null&&(Sl(o)&&(o=Pp(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(va,"$&/")+"/")+e)),t.push(o)),1;if(a=0,i=i===""?".":i+":",ya(e))for(var s=0;s<e.length;s++){l=e[s];var c=i+Ui(l,s);a+=Yr(l,t,r,c,o)}else if(c=Wp(e),typeof c=="function")for(e=c.call(e),s=0;!(l=e.next()).done;)l=l.value,c=i+Ui(l,s++),a+=Yr(l,t,r,c,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Cr(e,t,r){if(e==null)return e;var i=[],o=0;return Yr(e,i,"","",function(l){return t.call(r,l,o++)}),i}function Lp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},Hr={transition:null},Mp={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Hr,ReactCurrentOwner:wl};function Gs(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Cr,forEach:function(e,t,r){Cr(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Cr(e,function(){t++}),t},toArray:function(e){return Cr(e,function(t){return t})||[]},only:function(e){if(!Sl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=kn;R.Fragment=kp;R.Profiler=zp;R.PureComponent=bl;R.StrictMode=Cp;R.Suspense=Np;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;R.act=Gs;R.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Ys({},e.props),o=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=wl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Vs.call(t,c)&&!$s.hasOwnProperty(c)&&(i[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];i.children=s}return{$$typeof:xr,type:e.type,key:o,ref:l,props:i,_owner:a}};R.createContext=function(e){return e={$$typeof:Ep,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bp,_context:e},e.Consumer=e};R.createElement=qs;R.createFactory=function(e){var t=qs.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Dp,render:e}};R.isValidElement=Sl;R.lazy=function(e){return{$$typeof:Ap,_payload:{_status:-1,_result:e},_init:Lp}};R.memo=function(e,t){return{$$typeof:Tp,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Hr.transition;Hr.transition={};try{e()}finally{Hr.transition=t}};R.unstable_act=Gs;R.useCallback=function(e,t){return be.current.useCallback(e,t)};R.useContext=function(e){return be.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return be.current.useDeferredValue(e)};R.useEffect=function(e,t){return be.current.useEffect(e,t)};R.useId=function(){return be.current.useId()};R.useImperativeHandle=function(e,t,r){return be.current.useImperativeHandle(e,t,r)};R.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return be.current.useMemo(e,t)};R.useReducer=function(e,t,r){return be.current.useReducer(e,t,r)};R.useRef=function(e){return be.current.useRef(e)};R.useState=function(e){return be.current.useState(e)};R.useSyncExternalStore=function(e,t,r){return be.current.useSyncExternalStore(e,t,r)};R.useTransition=function(){return be.current.useTransition()};R.version="18.3.1";Fs.exports=R;var y=Fs.exports;const Qs=wp(y),Ip=jp({__proto__:null,default:Qs},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=y,Fp=Symbol.for("react.element"),_p=Symbol.for("react.fragment"),Yp=Object.prototype.hasOwnProperty,Hp=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Up={key:!0,ref:!0,__self:!0,__source:!0};function Ks(e,t,r){var i,o={},l=null,a=null;r!==void 0&&(l=""+r),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(i in t)Yp.call(t,i)&&!Up.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:Fp,type:e,key:l,ref:a,props:o,_owner:Hp.current}}zi.Fragment=_p;zi.jsx=Ks;zi.jsxs=Ks;Os.exports=zi;var n=Os.exports,bo={},Xs={exports:{}},Te={},Js={exports:{}},Zs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,A){var P=C.length;C.push(A);e:for(;0<P;){var Q=P-1>>>1,J=C[Q];if(0<o(J,A))C[Q]=A,C[P]=J,P=Q;else break e}}function r(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var A=C[0],P=C.pop();if(P!==A){C[0]=P;e:for(var Q=0,J=C.length,Qt=J>>>1;Q<Qt;){var Tt=2*(Q+1)-1,Hi=C[Tt],At=Tt+1,kr=C[At];if(0>o(Hi,P))At<J&&0>o(kr,Hi)?(C[Q]=kr,C[At]=P,Q=At):(C[Q]=Hi,C[Tt]=P,Q=Tt);else if(At<J&&0>o(kr,P))C[Q]=kr,C[At]=P,Q=At;else break e}}return A}function o(C,A){var P=C.sortIndex-A.sortIndex;return P!==0?P:C.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],d=[],m=1,p=null,f=3,x=!1,j=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var A=r(d);A!==null;){if(A.callback===null)i(d);else if(A.startTime<=C)i(d),A.sortIndex=A.expirationTime,t(c,A);else break;A=r(d)}}function v(C){if(b=!1,g(C),!j)if(r(c)!==null)j=!0,_(k);else{var A=r(d);A!==null&&xe(v,A.startTime-C)}}function k(C,A){j=!1,b&&(b=!1,h(N),N=-1),x=!0;var P=f;try{for(g(A),p=r(c);p!==null&&(!(p.expirationTime>A)||C&&!ae());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,f=p.priorityLevel;var J=Q(p.expirationTime<=A);A=e.unstable_now(),typeof J=="function"?p.callback=J:p===r(c)&&i(c),g(A)}else i(c);p=r(c)}if(p!==null)var Qt=!0;else{var Tt=r(d);Tt!==null&&xe(v,Tt.startTime-A),Qt=!1}return Qt}finally{p=null,f=P,x=!1}}var D=!1,E=null,N=-1,O=5,W=-1;function ae(){return!(e.unstable_now()-W<O)}function Xe(){if(E!==null){var C=e.unstable_now();W=C;var A=!0;try{A=E(!0,C)}finally{A?T():(D=!1,E=null)}}else D=!1}var T;if(typeof u=="function")T=function(){u(Xe)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,B=I.port2;I.port1.onmessage=Xe,T=function(){B.postMessage(null)}}else T=function(){S(Xe,0)};function _(C){E=C,D||(D=!0,T())}function xe(C,A){N=S(function(){C(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){j||x||(j=!0,_(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var P=f;f=A;try{return C()}finally{f=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,A){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=f;f=C;try{return A()}finally{f=P}},e.unstable_scheduleCallback=function(C,A,P){var Q=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?Q+P:Q):P=Q,C){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=P+J,C={id:m++,callback:A,priorityLevel:C,startTime:P,expirationTime:J,sortIndex:-1},P>Q?(C.sortIndex=P,t(d,C),r(c)===null&&C===r(d)&&(b?(h(N),N=-1):b=!0,xe(v,P-Q))):(C.sortIndex=J,t(c,C),j||x||(j=!0,_(k))),C},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(C){var A=f;return function(){var P=f;f=A;try{return C.apply(this,arguments)}finally{f=P}}}})(Zs);Js.exports=Zs;var Vp=Js.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=y,Ne=Vp;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ec=new Set,Jn={};function $t(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(Jn[e]=t,e=0;e<t.length;e++)ec.add(t[e])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jo=Object.prototype.hasOwnProperty,qp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ba={},ja={};function Gp(e){return jo.call(ja,e)?!0:jo.call(ba,e)?!1:qp.test(e)?ja[e]=!0:(ba[e]=!0,!1)}function Qp(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kp(e,t,r,i){if(t===null||typeof t>"u"||Qp(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,r,i,o,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var kl=/[\-:]([a-z])/g;function Cl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(kl,Cl);pe[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(kl,Cl);pe[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(kl,Cl);pe[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function zl(e,t,r,i){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kp(t,r,o,i)&&(r=null),i||o===null?Gp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,i=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var at=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),Bl=Symbol.for("react.strict_mode"),wo=Symbol.for("react.profiler"),tc=Symbol.for("react.provider"),nc=Symbol.for("react.context"),El=Symbol.for("react.forward_ref"),So=Symbol.for("react.suspense"),ko=Symbol.for("react.suspense_list"),Dl=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),rc=Symbol.for("react.offscreen"),wa=Symbol.iterator;function Dn(e){return e===null||typeof e!="object"?null:(e=wa&&e[wa]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Vi;function In(e){if(Vi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Vi=t&&t[1]||""}return`
`+Vi+e}var $i=!1;function qi(e,t){if(!e||$i)return"";$i=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=i.stack.split(`
`),a=o.length-1,s=l.length-1;1<=a&&0<=s&&o[a]!==l[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==l[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==l[s]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{$i=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?In(e):""}function Xp(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=qi(e.type,!1),e;case 11:return e=qi(e.type.render,!1),e;case 1:return e=qi(e.type,!0),e;default:return""}}function Co(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Jt:return"Portal";case wo:return"Profiler";case Bl:return"StrictMode";case So:return"Suspense";case ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nc:return(e.displayName||"Context")+".Consumer";case tc:return(e._context.displayName||"Context")+".Provider";case El:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Dl:return t=e.displayName||null,t!==null?t:Co(e.type)||"Memo";case ct:t=e._payload,e=e._init;try{return Co(e(t))}catch{}}return null}function Jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Co(t);case 8:return t===Bl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zp(e){var t=ic(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){i=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){e._valueTracker||(e._valueTracker=Zp(e))}function oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=ic(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zo(e,t){var r=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Sa(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=Ct(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lc(e,t){t=t.checked,t!=null&&zl(e,"checked",t,!1)}function Bo(e,t){lc(e,t);var r=Ct(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Eo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Eo(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ka(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Eo(e,t,r){(t!=="number"||ti(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var On=Array.isArray;function pn(e,t,r,i){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&i&&(e[r].defaultSelected=!0)}else{for(r=""+Ct(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Do(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ca(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(w(92));if(On(r)){if(1<r.length)throw Error(w(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ct(r)}}function ac(e,t){var r=Ct(t.value),i=Ct(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function za(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function No(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,cc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eu=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(e){eu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yn[t]=Yn[e]})});function dc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Yn.hasOwnProperty(e)&&Yn[e]?(""+t).trim():t+"px"}function pc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,o=dc(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,o):e[r]=o}}var tu=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function To(e,t){if(t){if(tu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Ao(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wo=null;function Nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Po=null,un=null,fn=null;function Ba(e){if(e=br(e)){if(typeof Po!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Ti(t),Po(e.stateNode,e.type,t))}}function uc(e){un?fn?fn.push(e):fn=[e]:un=e}function fc(){if(un){var e=un,t=fn;if(fn=un=null,Ba(e),t)for(e=0;e<t.length;e++)Ba(t[e])}}function hc(e,t){return e(t)}function mc(){}var Gi=!1;function gc(e,t,r){if(Gi)return e(t,r);Gi=!0;try{return hc(e,t,r)}finally{Gi=!1,(un!==null||fn!==null)&&(mc(),fc())}}function er(e,t){var r=e.stateNode;if(r===null)return null;var i=Ti(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(w(231,t,typeof r));return r}var Ro=!1;if(rt)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Ro=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Ro=!1}function nu(e,t,r,i,o,l,a,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(m){this.onError(m)}}var Hn=!1,ni=null,ri=!1,Lo=null,ru={onError:function(e){Hn=!0,ni=e}};function iu(e,t,r,i,o,l,a,s,c){Hn=!1,ni=null,nu.apply(ru,arguments)}function ou(e,t,r,i,o,l,a,s,c){if(iu.apply(this,arguments),Hn){if(Hn){var d=ni;Hn=!1,ni=null}else throw Error(w(198));ri||(ri=!0,Lo=d)}}function qt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function xc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ea(e){if(qt(e)!==e)throw Error(w(188))}function lu(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var r=e,i=t;;){var o=r.return;if(o===null)break;var l=o.alternate;if(l===null){if(i=o.return,i!==null){r=i;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===r)return Ea(o),e;if(l===i)return Ea(o),t;l=l.sibling}throw Error(w(188))}if(r.return!==i.return)r=o,i=l;else{for(var a=!1,s=o.child;s;){if(s===r){a=!0,r=o,i=l;break}if(s===i){a=!0,i=o,r=l;break}s=s.sibling}if(!a){for(s=l.child;s;){if(s===r){a=!0,r=l,i=o;break}if(s===i){a=!0,i=l,r=o;break}s=s.sibling}if(!a)throw Error(w(189))}}if(r.alternate!==i)throw Error(w(190))}if(r.tag!==3)throw Error(w(188));return r.stateNode.current===r?e:t}function yc(e){return e=lu(e),e!==null?vc(e):null}function vc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vc(e);if(t!==null)return t;e=e.sibling}return null}var bc=Ne.unstable_scheduleCallback,Da=Ne.unstable_cancelCallback,au=Ne.unstable_shouldYield,su=Ne.unstable_requestPaint,X=Ne.unstable_now,cu=Ne.unstable_getCurrentPriorityLevel,Tl=Ne.unstable_ImmediatePriority,jc=Ne.unstable_UserBlockingPriority,ii=Ne.unstable_NormalPriority,du=Ne.unstable_LowPriority,wc=Ne.unstable_IdlePriority,Bi=null,Qe=null;function pu(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Bi,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:hu,uu=Math.log,fu=Math.LN2;function hu(e){return e>>>=0,e===0?32:31-(uu(e)/fu|0)|0}var Dr=64,Nr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oi(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,o=e.suspendedLanes,l=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~o;s!==0?i=Fn(s):(l&=a,l!==0&&(i=Fn(l)))}else a=r&~o,a!==0?i=Fn(a):l!==0&&(i=Fn(l));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-He(t),o=1<<r,i|=e[r],t&=~o;return i}function mu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gu(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-He(l),s=1<<a,c=o[a];c===-1?(!(s&r)||s&i)&&(o[a]=mu(s,t)):c<=t&&(e.expiredLanes|=s),l&=~s}}function Mo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sc(){var e=Dr;return Dr<<=1,!(Dr&4194240)&&(Dr=64),e}function Qi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function yr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=r}function xu(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-He(r),l=1<<o;t[o]=0,i[o]=-1,e[o]=-1,r&=~l}}function Al(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-He(r),o=1<<i;o&t|e[i]&t&&(e[i]|=t),r&=~o}}var M=0;function kc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cc,Wl,zc,Bc,Ec,Io=!1,Tr=[],gt=null,xt=null,yt=null,tr=new Map,nr=new Map,pt=[],yu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Na(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nr.delete(t.pointerId)}}function Tn(e,t,r,i,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:l,targetContainers:[o]},t!==null&&(t=br(t),t!==null&&Wl(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vu(e,t,r,i,o){switch(t){case"focusin":return gt=Tn(gt,e,t,r,i,o),!0;case"dragenter":return xt=Tn(xt,e,t,r,i,o),!0;case"mouseover":return yt=Tn(yt,e,t,r,i,o),!0;case"pointerover":var l=o.pointerId;return tr.set(l,Tn(tr.get(l)||null,e,t,r,i,o)),!0;case"gotpointercapture":return l=o.pointerId,nr.set(l,Tn(nr.get(l)||null,e,t,r,i,o)),!0}return!1}function Dc(e){var t=Lt(e.target);if(t!==null){var r=qt(t);if(r!==null){if(t=r.tag,t===13){if(t=xc(r),t!==null){e.blockedOn=t,Ec(e.priority,function(){zc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Oo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Wo=i,r.target.dispatchEvent(i),Wo=null}else return t=br(r),t!==null&&Wl(t),e.blockedOn=r,!1;t.shift()}return!0}function Ta(e,t,r){Ur(e)&&r.delete(t)}function bu(){Io=!1,gt!==null&&Ur(gt)&&(gt=null),xt!==null&&Ur(xt)&&(xt=null),yt!==null&&Ur(yt)&&(yt=null),tr.forEach(Ta),nr.forEach(Ta)}function An(e,t){e.blockedOn===t&&(e.blockedOn=null,Io||(Io=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,bu)))}function rr(e){function t(o){return An(o,e)}if(0<Tr.length){An(Tr[0],e);for(var r=1;r<Tr.length;r++){var i=Tr[r];i.blockedOn===e&&(i.blockedOn=null)}}for(gt!==null&&An(gt,e),xt!==null&&An(xt,e),yt!==null&&An(yt,e),tr.forEach(t),nr.forEach(t),r=0;r<pt.length;r++)i=pt[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<pt.length&&(r=pt[0],r.blockedOn===null);)Dc(r),r.blockedOn===null&&pt.shift()}var hn=at.ReactCurrentBatchConfig,li=!0;function ju(e,t,r,i){var o=M,l=hn.transition;hn.transition=null;try{M=1,Pl(e,t,r,i)}finally{M=o,hn.transition=l}}function wu(e,t,r,i){var o=M,l=hn.transition;hn.transition=null;try{M=4,Pl(e,t,r,i)}finally{M=o,hn.transition=l}}function Pl(e,t,r,i){if(li){var o=Oo(e,t,r,i);if(o===null)oo(e,t,i,ai,r),Na(e,i);else if(vu(o,e,t,r,i))i.stopPropagation();else if(Na(e,i),t&4&&-1<yu.indexOf(e)){for(;o!==null;){var l=br(o);if(l!==null&&Cc(l),l=Oo(e,t,r,i),l===null&&oo(e,t,i,ai,r),l===o)break;o=l}o!==null&&i.stopPropagation()}else oo(e,t,i,null,r)}}var ai=null;function Oo(e,t,r,i){if(ai=null,e=Nl(i),e=Lt(e),e!==null)if(t=qt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=xc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ai=e,null}function Nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cu()){case Tl:return 1;case jc:return 4;case ii:case du:return 16;case wc:return 536870912;default:return 16}default:return 16}}var ft=null,Rl=null,Vr=null;function Tc(){if(Vr)return Vr;var e,t=Rl,r=t.length,i,o="value"in ft?ft.value:ft.textContent,l=o.length;for(e=0;e<r&&t[e]===o[e];e++);var a=r-e;for(i=1;i<=a&&t[r-i]===o[l-i];i++);return Vr=o.slice(e,1<i?1-i:void 0)}function $r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ar(){return!0}function Aa(){return!1}function Ae(e){function t(r,i,o,l,a){this._reactName=r,this._targetInst=o,this.type=i,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ar:Aa,this.isPropagationStopped=Aa,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Ae(Cn),vr=G({},Cn,{view:0,detail:0}),Su=Ae(vr),Ki,Xi,Wn,Ei=G({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(Ki=e.screenX-Wn.screenX,Xi=e.screenY-Wn.screenY):Xi=Ki=0,Wn=e),Ki)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),Wa=Ae(Ei),ku=G({},Ei,{dataTransfer:0}),Cu=Ae(ku),zu=G({},vr,{relatedTarget:0}),Ji=Ae(zu),Bu=G({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Eu=Ae(Bu),Du=G({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nu=Ae(Du),Tu=G({},Cn,{data:0}),Pa=Ae(Tu),Au={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ru(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pu[e])?!!t[e]:!1}function Ml(){return Ru}var Lu=G({},vr,{key:function(e){if(e.key){var t=Au[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ml,charCode:function(e){return e.type==="keypress"?$r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mu=Ae(Lu),Iu=G({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ra=Ae(Iu),Ou=G({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ml}),Fu=Ae(Ou),_u=G({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yu=Ae(_u),Hu=G({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uu=Ae(Hu),Vu=[9,13,27,32],Il=rt&&"CompositionEvent"in window,Un=null;rt&&"documentMode"in document&&(Un=document.documentMode);var $u=rt&&"TextEvent"in window&&!Un,Ac=rt&&(!Il||Un&&8<Un&&11>=Un),La=" ",Ma=!1;function Wc(e,t){switch(e){case"keyup":return Vu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function qu(e,t){switch(e){case"compositionend":return Pc(t);case"keypress":return t.which!==32?null:(Ma=!0,La);case"textInput":return e=t.data,e===La&&Ma?null:e;default:return null}}function Gu(e,t){if(en)return e==="compositionend"||!Il&&Wc(e,t)?(e=Tc(),Vr=Rl=ft=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ac&&t.locale!=="ko"?null:t.data;default:return null}}var Qu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qu[e.type]:t==="textarea"}function Rc(e,t,r,i){uc(i),t=si(t,"onChange"),0<t.length&&(r=new Ll("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var Vn=null,ir=null;function Ku(e){$c(e,0)}function Di(e){var t=rn(e);if(oc(t))return e}function Xu(e,t){if(e==="change")return t}var Lc=!1;if(rt){var Zi;if(rt){var eo="oninput"in document;if(!eo){var Oa=document.createElement("div");Oa.setAttribute("oninput","return;"),eo=typeof Oa.oninput=="function"}Zi=eo}else Zi=!1;Lc=Zi&&(!document.documentMode||9<document.documentMode)}function Fa(){Vn&&(Vn.detachEvent("onpropertychange",Mc),ir=Vn=null)}function Mc(e){if(e.propertyName==="value"&&Di(ir)){var t=[];Rc(t,ir,e,Nl(e)),gc(Ku,t)}}function Ju(e,t,r){e==="focusin"?(Fa(),Vn=t,ir=r,Vn.attachEvent("onpropertychange",Mc)):e==="focusout"&&Fa()}function Zu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Di(ir)}function ef(e,t){if(e==="click")return Di(t)}function tf(e,t){if(e==="input"||e==="change")return Di(t)}function nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:nf;function or(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var o=r[i];if(!jo.call(t,o)||!Ve(e[o],t[o]))return!1}return!0}function _a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ya(e,t){var r=_a(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=_a(r)}}function Ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Oc(){for(var e=window,t=ti();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ti(e.document)}return t}function Ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rf(e){var t=Oc(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ic(r.ownerDocument.documentElement,r)){if(i!==null&&Ol(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,l=Math.min(i.start,o);i=i.end===void 0?l:Math.min(i.end,o),!e.extend&&l>i&&(o=i,i=l,l=o),o=Ya(r,l);var a=Ya(r,i);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>i?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var of=rt&&"documentMode"in document&&11>=document.documentMode,tn=null,Fo=null,$n=null,_o=!1;function Ha(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;_o||tn==null||tn!==ti(i)||(i=tn,"selectionStart"in i&&Ol(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$n&&or($n,i)||($n=i,i=si(Fo,"onSelect"),0<i.length&&(t=new Ll("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=tn)))}function Wr(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var nn={animationend:Wr("Animation","AnimationEnd"),animationiteration:Wr("Animation","AnimationIteration"),animationstart:Wr("Animation","AnimationStart"),transitionend:Wr("Transition","TransitionEnd")},to={},Fc={};rt&&(Fc=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function Ni(e){if(to[e])return to[e];if(!nn[e])return e;var t=nn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Fc)return to[e]=t[r];return e}var _c=Ni("animationend"),Yc=Ni("animationiteration"),Hc=Ni("animationstart"),Uc=Ni("transitionend"),Vc=new Map,Ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){Vc.set(e,t),$t(t,[e])}for(var no=0;no<Ua.length;no++){var ro=Ua[no],lf=ro.toLowerCase(),af=ro[0].toUpperCase()+ro.slice(1);Bt(lf,"on"+af)}Bt(_c,"onAnimationEnd");Bt(Yc,"onAnimationIteration");Bt(Hc,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(Uc,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function Va(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,ou(i,t,void 0,e),e.currentTarget=null}function $c(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],o=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var a=i.length-1;0<=a;a--){var s=i[a],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==l&&o.isPropagationStopped())break e;Va(o,s,d),l=c}else for(a=0;a<i.length;a++){if(s=i[a],c=s.instance,d=s.currentTarget,s=s.listener,c!==l&&o.isPropagationStopped())break e;Va(o,s,d),l=c}}}if(ri)throw e=Lo,ri=!1,Lo=null,e}function Y(e,t){var r=t[$o];r===void 0&&(r=t[$o]=new Set);var i=e+"__bubble";r.has(i)||(qc(t,e,2,!1),r.add(i))}function io(e,t,r){var i=0;t&&(i|=4),qc(r,e,i,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Pr]){e[Pr]=!0,ec.forEach(function(r){r!=="selectionchange"&&(sf.has(r)||io(r,!1,e),io(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,io("selectionchange",!1,t))}}function qc(e,t,r,i){switch(Nc(t)){case 1:var o=ju;break;case 4:o=wu;break;default:o=Pl}r=o.bind(null,t,r,e),o=void 0,!Ro||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function oo(e,t,r,i,o){var l=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var s=i.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Lt(s),a===null)return;if(c=a.tag,c===5||c===6){i=l=a;continue e}s=s.parentNode}}i=i.return}gc(function(){var d=l,m=Nl(r),p=[];e:{var f=Vc.get(e);if(f!==void 0){var x=Ll,j=e;switch(e){case"keypress":if($r(r)===0)break e;case"keydown":case"keyup":x=Mu;break;case"focusin":j="focus",x=Ji;break;case"focusout":j="blur",x=Ji;break;case"beforeblur":case"afterblur":x=Ji;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Wa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Fu;break;case _c:case Yc:case Hc:x=Eu;break;case Uc:x=Yu;break;case"scroll":x=Su;break;case"wheel":x=Uu;break;case"copy":case"cut":case"paste":x=Nu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ra}var b=(t&4)!==0,S=!b&&e==="scroll",h=b?f!==null?f+"Capture":null:f;b=[];for(var u=d,g;u!==null;){g=u;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,h!==null&&(v=er(u,h),v!=null&&b.push(ar(u,v,g)))),S)break;u=u.return}0<b.length&&(f=new x(f,j,null,r,m),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&r!==Wo&&(j=r.relatedTarget||r.fromElement)&&(Lt(j)||j[it]))break e;if((x||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,x?(j=r.relatedTarget||r.toElement,x=d,j=j?Lt(j):null,j!==null&&(S=qt(j),j!==S||j.tag!==5&&j.tag!==6)&&(j=null)):(x=null,j=d),x!==j)){if(b=Wa,v="onMouseLeave",h="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=Ra,v="onPointerLeave",h="onPointerEnter",u="pointer"),S=x==null?f:rn(x),g=j==null?f:rn(j),f=new b(v,u+"leave",x,r,m),f.target=S,f.relatedTarget=g,v=null,Lt(m)===d&&(b=new b(h,u+"enter",j,r,m),b.target=g,b.relatedTarget=S,v=b),S=v,x&&j)t:{for(b=x,h=j,u=0,g=b;g;g=Kt(g))u++;for(g=0,v=h;v;v=Kt(v))g++;for(;0<u-g;)b=Kt(b),u--;for(;0<g-u;)h=Kt(h),g--;for(;u--;){if(b===h||h!==null&&b===h.alternate)break t;b=Kt(b),h=Kt(h)}b=null}else b=null;x!==null&&$a(p,f,x,b,!1),j!==null&&S!==null&&$a(p,S,j,b,!0)}}e:{if(f=d?rn(d):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var k=Xu;else if(Ia(f))if(Lc)k=tf;else{k=Zu;var D=Ju}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=ef);if(k&&(k=k(e,d))){Rc(p,k,r,m);break e}D&&D(e,f,d),e==="focusout"&&(D=f._wrapperState)&&D.controlled&&f.type==="number"&&Eo(f,"number",f.value)}switch(D=d?rn(d):window,e){case"focusin":(Ia(D)||D.contentEditable==="true")&&(tn=D,Fo=d,$n=null);break;case"focusout":$n=Fo=tn=null;break;case"mousedown":_o=!0;break;case"contextmenu":case"mouseup":case"dragend":_o=!1,Ha(p,r,m);break;case"selectionchange":if(of)break;case"keydown":case"keyup":Ha(p,r,m)}var E;if(Il)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else en?Wc(e,r)&&(N="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(Ac&&r.locale!=="ko"&&(en||N!=="onCompositionStart"?N==="onCompositionEnd"&&en&&(E=Tc()):(ft=m,Rl="value"in ft?ft.value:ft.textContent,en=!0)),D=si(d,N),0<D.length&&(N=new Pa(N,e,null,r,m),p.push({event:N,listeners:D}),E?N.data=E:(E=Pc(r),E!==null&&(N.data=E)))),(E=$u?qu(e,r):Gu(e,r))&&(d=si(d,"onBeforeInput"),0<d.length&&(m=new Pa("onBeforeInput","beforeinput",null,r,m),p.push({event:m,listeners:d}),m.data=E))}$c(p,t)})}function ar(e,t,r){return{instance:e,listener:t,currentTarget:r}}function si(e,t){for(var r=t+"Capture",i=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=er(e,r),l!=null&&i.unshift(ar(e,l,o)),l=er(e,t),l!=null&&i.push(ar(e,l,o))),e=e.return}return i}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $a(e,t,r,i,o){for(var l=t._reactName,a=[];r!==null&&r!==i;){var s=r,c=s.alternate,d=s.stateNode;if(c!==null&&c===i)break;s.tag===5&&d!==null&&(s=d,o?(c=er(r,l),c!=null&&a.unshift(ar(r,c,s))):o||(c=er(r,l),c!=null&&a.push(ar(r,c,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var cf=/\r\n?/g,df=/\u0000|\uFFFD/g;function qa(e){return(typeof e=="string"?e:""+e).replace(cf,`
`).replace(df,"")}function Rr(e,t,r){if(t=qa(t),qa(e)!==t&&r)throw Error(w(425))}function ci(){}var Yo=null,Ho=null;function Uo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vo=typeof setTimeout=="function"?setTimeout:void 0,pf=typeof clearTimeout=="function"?clearTimeout:void 0,Ga=typeof Promise=="function"?Promise:void 0,uf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ga<"u"?function(e){return Ga.resolve(null).then(e).catch(ff)}:Vo;function ff(e){setTimeout(function(){throw e})}function lo(e,t){var r=t,i=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(i===0){e.removeChild(o),rr(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=o}while(r);rr(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var zn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+zn,sr="__reactProps$"+zn,it="__reactContainer$"+zn,$o="__reactEvents$"+zn,hf="__reactListeners$"+zn,mf="__reactHandles$"+zn;function Lt(e){var t=e[Ge];if(t)return t;for(var r=e.parentNode;r;){if(t=r[it]||r[Ge]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Qa(e);e!==null;){if(r=e[Ge])return r;e=Qa(e)}return t}e=r,r=e.parentNode}return null}function br(e){return e=e[Ge]||e[it],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Ti(e){return e[sr]||null}var qo=[],on=-1;function Et(e){return{current:e}}function H(e){0>on||(e.current=qo[on],qo[on]=null,on--)}function F(e,t){on++,qo[on]=e.current,e.current=t}var zt={},ge=Et(zt),ke=Et(!1),_t=zt;function yn(e,t){var r=e.type.contextTypes;if(!r)return zt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in r)o[l]=t[l];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function di(){H(ke),H(ge)}function Ka(e,t,r){if(ge.current!==zt)throw Error(w(168));F(ge,t),F(ke,r)}function Gc(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(w(108,Jp(e)||"Unknown",o));return G({},r,i)}function pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,_t=ge.current,F(ge,e),F(ke,ke.current),!0}function Xa(e,t,r){var i=e.stateNode;if(!i)throw Error(w(169));r?(e=Gc(e,t,_t),i.__reactInternalMemoizedMergedChildContext=e,H(ke),H(ge),F(ge,e)):H(ke),F(ke,r)}var Ze=null,Ai=!1,ao=!1;function Qc(e){Ze===null?Ze=[e]:Ze.push(e)}function gf(e){Ai=!0,Qc(e)}function Dt(){if(!ao&&Ze!==null){ao=!0;var e=0,t=M;try{var r=Ze;for(M=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Ze=null,Ai=!1}catch(o){throw Ze!==null&&(Ze=Ze.slice(e+1)),bc(Tl,Dt),o}finally{M=t,ao=!1}}return null}var ln=[],an=0,ui=null,fi=0,We=[],Pe=0,Yt=null,et=1,tt="";function Pt(e,t){ln[an++]=fi,ln[an++]=ui,ui=e,fi=t}function Kc(e,t,r){We[Pe++]=et,We[Pe++]=tt,We[Pe++]=Yt,Yt=e;var i=et;e=tt;var o=32-He(i)-1;i&=~(1<<o),r+=1;var l=32-He(t)+o;if(30<l){var a=o-o%5;l=(i&(1<<a)-1).toString(32),i>>=a,o-=a,et=1<<32-He(t)+o|r<<o|i,tt=l+e}else et=1<<l|r<<o|i,tt=e}function Fl(e){e.return!==null&&(Pt(e,1),Kc(e,1,0))}function _l(e){for(;e===ui;)ui=ln[--an],ln[an]=null,fi=ln[--an],ln[an]=null;for(;e===Yt;)Yt=We[--Pe],We[Pe]=null,tt=We[--Pe],We[Pe]=null,et=We[--Pe],We[Pe]=null}var De=null,Ee=null,V=!1,Ye=null;function Xc(e,t){var r=Re(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ja(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Ee=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Yt!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Re(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,De=e,Ee=null,!0):!1;default:return!1}}function Go(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qo(e){if(V){var t=Ee;if(t){var r=t;if(!Ja(e,t)){if(Go(e))throw Error(w(418));t=vt(r.nextSibling);var i=De;t&&Ja(e,t)?Xc(i,r):(e.flags=e.flags&-4097|2,V=!1,De=e)}}else{if(Go(e))throw Error(w(418));e.flags=e.flags&-4097|2,V=!1,De=e}}}function Za(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function Lr(e){if(e!==De)return!1;if(!V)return Za(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Uo(e.type,e.memoizedProps)),t&&(t=Ee)){if(Go(e))throw Jc(),Error(w(418));for(;t;)Xc(e,t),t=vt(t.nextSibling)}if(Za(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ee=vt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=De?vt(e.stateNode.nextSibling):null;return!0}function Jc(){for(var e=Ee;e;)e=vt(e.nextSibling)}function vn(){Ee=De=null,V=!1}function Yl(e){Ye===null?Ye=[e]:Ye.push(e)}var xf=at.ReactCurrentBatchConfig;function Pn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(w(309));var i=r.stateNode}if(!i)throw Error(w(147,e));var o=i,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var s=o.refs;a===null?delete s[l]:s[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(w(284));if(!r._owner)throw Error(w(290,e))}return e}function Mr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){var t=e._init;return t(e._payload)}function Zc(e){function t(h,u){if(e){var g=h.deletions;g===null?(h.deletions=[u],h.flags|=16):g.push(u)}}function r(h,u){if(!e)return null;for(;u!==null;)t(h,u),u=u.sibling;return null}function i(h,u){for(h=new Map;u!==null;)u.key!==null?h.set(u.key,u):h.set(u.index,u),u=u.sibling;return h}function o(h,u){return h=St(h,u),h.index=0,h.sibling=null,h}function l(h,u,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<u?(h.flags|=2,u):g):(h.flags|=2,u)):(h.flags|=1048576,u)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,u,g,v){return u===null||u.tag!==6?(u=mo(g,h.mode,v),u.return=h,u):(u=o(u,g),u.return=h,u)}function c(h,u,g,v){var k=g.type;return k===Zt?m(h,u,g.props.children,v,g.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ct&&es(k)===u.type)?(v=o(u,g.props),v.ref=Pn(h,u,g),v.return=h,v):(v=Zr(g.type,g.key,g.props,null,h.mode,v),v.ref=Pn(h,u,g),v.return=h,v)}function d(h,u,g,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==g.containerInfo||u.stateNode.implementation!==g.implementation?(u=go(g,h.mode,v),u.return=h,u):(u=o(u,g.children||[]),u.return=h,u)}function m(h,u,g,v,k){return u===null||u.tag!==7?(u=Ft(g,h.mode,v,k),u.return=h,u):(u=o(u,g),u.return=h,u)}function p(h,u,g){if(typeof u=="string"&&u!==""||typeof u=="number")return u=mo(""+u,h.mode,g),u.return=h,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case zr:return g=Zr(u.type,u.key,u.props,null,h.mode,g),g.ref=Pn(h,null,u),g.return=h,g;case Jt:return u=go(u,h.mode,g),u.return=h,u;case ct:var v=u._init;return p(h,v(u._payload),g)}if(On(u)||Dn(u))return u=Ft(u,h.mode,g,null),u.return=h,u;Mr(h,u)}return null}function f(h,u,g,v){var k=u!==null?u.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:s(h,u,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zr:return g.key===k?c(h,u,g,v):null;case Jt:return g.key===k?d(h,u,g,v):null;case ct:return k=g._init,f(h,u,k(g._payload),v)}if(On(g)||Dn(g))return k!==null?null:m(h,u,g,v,null);Mr(h,g)}return null}function x(h,u,g,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(g)||null,s(u,h,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zr:return h=h.get(v.key===null?g:v.key)||null,c(u,h,v,k);case Jt:return h=h.get(v.key===null?g:v.key)||null,d(u,h,v,k);case ct:var D=v._init;return x(h,u,g,D(v._payload),k)}if(On(v)||Dn(v))return h=h.get(g)||null,m(u,h,v,k,null);Mr(u,v)}return null}function j(h,u,g,v){for(var k=null,D=null,E=u,N=u=0,O=null;E!==null&&N<g.length;N++){E.index>N?(O=E,E=null):O=E.sibling;var W=f(h,E,g[N],v);if(W===null){E===null&&(E=O);break}e&&E&&W.alternate===null&&t(h,E),u=l(W,u,N),D===null?k=W:D.sibling=W,D=W,E=O}if(N===g.length)return r(h,E),V&&Pt(h,N),k;if(E===null){for(;N<g.length;N++)E=p(h,g[N],v),E!==null&&(u=l(E,u,N),D===null?k=E:D.sibling=E,D=E);return V&&Pt(h,N),k}for(E=i(h,E);N<g.length;N++)O=x(E,h,N,g[N],v),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?N:O.key),u=l(O,u,N),D===null?k=O:D.sibling=O,D=O);return e&&E.forEach(function(ae){return t(h,ae)}),V&&Pt(h,N),k}function b(h,u,g,v){var k=Dn(g);if(typeof k!="function")throw Error(w(150));if(g=k.call(g),g==null)throw Error(w(151));for(var D=k=null,E=u,N=u=0,O=null,W=g.next();E!==null&&!W.done;N++,W=g.next()){E.index>N?(O=E,E=null):O=E.sibling;var ae=f(h,E,W.value,v);if(ae===null){E===null&&(E=O);break}e&&E&&ae.alternate===null&&t(h,E),u=l(ae,u,N),D===null?k=ae:D.sibling=ae,D=ae,E=O}if(W.done)return r(h,E),V&&Pt(h,N),k;if(E===null){for(;!W.done;N++,W=g.next())W=p(h,W.value,v),W!==null&&(u=l(W,u,N),D===null?k=W:D.sibling=W,D=W);return V&&Pt(h,N),k}for(E=i(h,E);!W.done;N++,W=g.next())W=x(E,h,N,W.value,v),W!==null&&(e&&W.alternate!==null&&E.delete(W.key===null?N:W.key),u=l(W,u,N),D===null?k=W:D.sibling=W,D=W);return e&&E.forEach(function(Xe){return t(h,Xe)}),V&&Pt(h,N),k}function S(h,u,g,v){if(typeof g=="object"&&g!==null&&g.type===Zt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case zr:e:{for(var k=g.key,D=u;D!==null;){if(D.key===k){if(k=g.type,k===Zt){if(D.tag===7){r(h,D.sibling),u=o(D,g.props.children),u.return=h,h=u;break e}}else if(D.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ct&&es(k)===D.type){r(h,D.sibling),u=o(D,g.props),u.ref=Pn(h,D,g),u.return=h,h=u;break e}r(h,D);break}else t(h,D);D=D.sibling}g.type===Zt?(u=Ft(g.props.children,h.mode,v,g.key),u.return=h,h=u):(v=Zr(g.type,g.key,g.props,null,h.mode,v),v.ref=Pn(h,u,g),v.return=h,h=v)}return a(h);case Jt:e:{for(D=g.key;u!==null;){if(u.key===D)if(u.tag===4&&u.stateNode.containerInfo===g.containerInfo&&u.stateNode.implementation===g.implementation){r(h,u.sibling),u=o(u,g.children||[]),u.return=h,h=u;break e}else{r(h,u);break}else t(h,u);u=u.sibling}u=go(g,h.mode,v),u.return=h,h=u}return a(h);case ct:return D=g._init,S(h,u,D(g._payload),v)}if(On(g))return j(h,u,g,v);if(Dn(g))return b(h,u,g,v);Mr(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,u!==null&&u.tag===6?(r(h,u.sibling),u=o(u,g),u.return=h,h=u):(r(h,u),u=mo(g,h.mode,v),u.return=h,h=u),a(h)):r(h,u)}return S}var bn=Zc(!0),ed=Zc(!1),hi=Et(null),mi=null,sn=null,Hl=null;function Ul(){Hl=sn=mi=null}function Vl(e){var t=hi.current;H(hi),e._currentValue=t}function Ko(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function mn(e,t){mi=e,Hl=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Hl!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(mi===null)throw Error(w(308));sn=e,mi.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var Mt=null;function $l(e){Mt===null?Mt=[e]:Mt.push(e)}function td(e,t,r,i){var o=t.interleaved;return o===null?(r.next=r,$l(t)):(r.next=o.next,o.next=r),t.interleaved=r,ot(e,i)}function ot(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var dt=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,L&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,ot(e,r)}return o=i.interleaved,o===null?(t.next=t,$l(i)):(t.next=o.next,o.next=t),i.interleaved=t,ot(e,r)}function qr(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Al(e,r)}}function ts(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var o=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?o=l=a:l=l.next=a,r=r.next}while(r!==null);l===null?o=l=t:l=l.next=t}else o=l=t;r={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function gi(e,t,r,i){var o=e.updateQueue;dt=!1;var l=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,d=c.next;c.next=null,a===null?l=d:a.next=d,a=c;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=c))}if(l!==null){var p=o.baseState;a=0,m=d=c=null,s=l;do{var f=s.lane,x=s.eventTime;if((i&f)===f){m!==null&&(m=m.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var j=e,b=s;switch(f=t,x=r,b.tag){case 1:if(j=b.payload,typeof j=="function"){p=j.call(x,p,f);break e}p=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=b.payload,f=typeof j=="function"?j.call(x,p,f):j,f==null)break e;p=G({},p,f);break e;case 2:dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else x={eventTime:x,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=x,c=p):m=m.next=x,a|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(m===null&&(c=p),o.baseState=c,o.firstBaseUpdate=d,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Ut|=a,e.lanes=a,e.memoizedState=p}}function ns(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=r,typeof o!="function")throw Error(w(191,o));o.call(i)}}}var jr={},Ke=Et(jr),cr=Et(jr),dr=Et(jr);function It(e){if(e===jr)throw Error(w(174));return e}function Gl(e,t){switch(F(dr,t),F(cr,e),F(Ke,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:No(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=No(t,e)}H(Ke),F(Ke,t)}function jn(){H(Ke),H(cr),H(dr)}function rd(e){It(dr.current);var t=It(Ke.current),r=No(t,e.type);t!==r&&(F(cr,e),F(Ke,r))}function Ql(e){cr.current===e&&(H(Ke),H(cr))}var $=Et(0);function xi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var so=[];function Kl(){for(var e=0;e<so.length;e++)so[e]._workInProgressVersionPrimary=null;so.length=0}var Gr=at.ReactCurrentDispatcher,co=at.ReactCurrentBatchConfig,Ht=0,q=null,te=null,oe=null,yi=!1,qn=!1,pr=0,yf=0;function fe(){throw Error(w(321))}function Xl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ve(e[r],t[r]))return!1;return!0}function Jl(e,t,r,i,o,l){if(Ht=l,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gr.current=e===null||e.memoizedState===null?wf:Sf,e=r(i,o),qn){l=0;do{if(qn=!1,pr=0,25<=l)throw Error(w(301));l+=1,oe=te=null,t.updateQueue=null,Gr.current=kf,e=r(i,o)}while(qn)}if(Gr.current=vi,t=te!==null&&te.next!==null,Ht=0,oe=te=q=null,yi=!1,t)throw Error(w(300));return e}function Zl(){var e=pr!==0;return pr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?q.memoizedState=oe=e:oe=oe.next=e,oe}function Ie(){if(te===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=oe===null?q.memoizedState:oe.next;if(t!==null)oe=t,te=e;else{if(e===null)throw Error(w(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},oe===null?q.memoizedState=oe=e:oe=oe.next=e}return oe}function ur(e,t){return typeof t=="function"?t(e):t}function po(e){var t=Ie(),r=t.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=e;var i=te,o=i.baseQueue,l=r.pending;if(l!==null){if(o!==null){var a=o.next;o.next=l.next,l.next=a}i.baseQueue=o=l,r.pending=null}if(o!==null){l=o.next,i=i.baseState;var s=a=null,c=null,d=l;do{var m=d.lane;if((Ht&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=p,a=i):c=c.next=p,q.lanes|=m,Ut|=m}d=d.next}while(d!==null&&d!==l);c===null?a=i:c.next=s,Ve(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseState=a,t.baseQueue=c,r.lastRenderedState=i}if(e=r.interleaved,e!==null){o=e;do l=o.lane,q.lanes|=l,Ut|=l,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function uo(e){var t=Ie(),r=t.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=e;var i=r.dispatch,o=r.pending,l=t.memoizedState;if(o!==null){r.pending=null;var a=o=o.next;do l=e(l,a.action),a=a.next;while(a!==o);Ve(l,t.memoizedState)||(Se=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,i]}function id(){}function od(e,t){var r=q,i=Ie(),o=t(),l=!Ve(i.memoizedState,o);if(l&&(i.memoizedState=o,Se=!0),i=i.queue,ea(sd.bind(null,r,i,e),[e]),i.getSnapshot!==t||l||oe!==null&&oe.memoizedState.tag&1){if(r.flags|=2048,fr(9,ad.bind(null,r,i,o,t),void 0,null),le===null)throw Error(w(349));Ht&30||ld(r,t,o)}return o}function ld(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ad(e,t,r,i){t.value=r,t.getSnapshot=i,cd(t)&&dd(e)}function sd(e,t,r){return r(function(){cd(t)&&dd(e)})}function cd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ve(e,r)}catch{return!0}}function dd(e){var t=ot(e,1);t!==null&&Ue(t,e,1,-1)}function rs(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=jf.bind(null,q,e),[t.memoizedState,e]}function fr(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function pd(){return Ie().memoizedState}function Qr(e,t,r,i){var o=qe();q.flags|=e,o.memoizedState=fr(1|t,r,void 0,i===void 0?null:i)}function Wi(e,t,r,i){var o=Ie();i=i===void 0?null:i;var l=void 0;if(te!==null){var a=te.memoizedState;if(l=a.destroy,i!==null&&Xl(i,a.deps)){o.memoizedState=fr(t,r,l,i);return}}q.flags|=e,o.memoizedState=fr(1|t,r,l,i)}function is(e,t){return Qr(8390656,8,e,t)}function ea(e,t){return Wi(2048,8,e,t)}function ud(e,t){return Wi(4,2,e,t)}function fd(e,t){return Wi(4,4,e,t)}function hd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function md(e,t,r){return r=r!=null?r.concat([e]):null,Wi(4,4,hd.bind(null,t,e),r)}function ta(){}function gd(e,t){var r=Ie();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Xl(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function xd(e,t){var r=Ie();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Xl(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function yd(e,t,r){return Ht&21?(Ve(r,t)||(r=Sc(),q.lanes|=r,Ut|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=r)}function vf(e,t){var r=M;M=r!==0&&4>r?r:4,e(!0);var i=co.transition;co.transition={};try{e(!1),t()}finally{M=r,co.transition=i}}function vd(){return Ie().memoizedState}function bf(e,t,r){var i=wt(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},bd(e))jd(t,r);else if(r=td(e,t,r,i),r!==null){var o=ve();Ue(r,e,i,o),wd(r,t,i)}}function jf(e,t,r){var i=wt(e),o={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(bd(e))jd(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,s=l(a,r);if(o.hasEagerState=!0,o.eagerState=s,Ve(s,a)){var c=t.interleaved;c===null?(o.next=o,$l(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}r=td(e,t,o,i),r!==null&&(o=ve(),Ue(r,e,i,o),wd(r,t,i))}}function bd(e){var t=e.alternate;return e===q||t!==null&&t===q}function jd(e,t){qn=yi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function wd(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Al(e,r)}}var vi={readContext:Me,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},wf={readContext:Me,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:is,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Qr(4194308,4,hd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var r=qe();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=qe();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=bf.bind(null,q,e),[i.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:rs,useDebugValue:ta,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=rs(!1),t=e[0];return e=vf.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=q,o=qe();if(V){if(r===void 0)throw Error(w(407));r=r()}else{if(r=t(),le===null)throw Error(w(349));Ht&30||ld(i,t,r)}o.memoizedState=r;var l={value:r,getSnapshot:t};return o.queue=l,is(sd.bind(null,i,l,e),[e]),i.flags|=2048,fr(9,ad.bind(null,i,l,r,t),void 0,null),r},useId:function(){var e=qe(),t=le.identifierPrefix;if(V){var r=tt,i=et;r=(i&~(1<<32-He(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=pr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=yf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sf={readContext:Me,useCallback:gd,useContext:Me,useEffect:ea,useImperativeHandle:md,useInsertionEffect:ud,useLayoutEffect:fd,useMemo:xd,useReducer:po,useRef:pd,useState:function(){return po(ur)},useDebugValue:ta,useDeferredValue:function(e){var t=Ie();return yd(t,te.memoizedState,e)},useTransition:function(){var e=po(ur)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:od,useId:vd,unstable_isNewReconciler:!1},kf={readContext:Me,useCallback:gd,useContext:Me,useEffect:ea,useImperativeHandle:md,useInsertionEffect:ud,useLayoutEffect:fd,useMemo:xd,useReducer:uo,useRef:pd,useState:function(){return uo(ur)},useDebugValue:ta,useDeferredValue:function(e){var t=Ie();return te===null?t.memoizedState=e:yd(t,te.memoizedState,e)},useTransition:function(){var e=uo(ur)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:od,useId:vd,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Xo(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:G({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Pi={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=ve(),o=wt(e),l=nt(i,o);l.payload=t,r!=null&&(l.callback=r),t=bt(e,l,o),t!==null&&(Ue(t,e,o,i),qr(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=ve(),o=wt(e),l=nt(i,o);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=bt(e,l,o),t!==null&&(Ue(t,e,o,i),qr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ve(),i=wt(e),o=nt(r,i);o.tag=2,t!=null&&(o.callback=t),t=bt(e,o,i),t!==null&&(Ue(t,e,i,r),qr(t,e,i))}};function os(e,t,r,i,o,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,a):t.prototype&&t.prototype.isPureReactComponent?!or(r,i)||!or(o,l):!0}function Sd(e,t,r){var i=!1,o=zt,l=t.contextType;return typeof l=="object"&&l!==null?l=Me(l):(o=Ce(t)?_t:ge.current,i=t.contextTypes,l=(i=i!=null)?yn(e,o):zt),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pi,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function ls(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Pi.enqueueReplaceState(t,t.state,null)}function Jo(e,t,r,i){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},ql(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Me(l):(l=Ce(t)?_t:ge.current,o.context=yn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Xo(e,t,l,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Pi.enqueueReplaceState(o,o.state,null),gi(e,r,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var r="",i=t;do r+=Xp(i),i=i.return;while(i);var o=r}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function fo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Zo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Cf=typeof WeakMap=="function"?WeakMap:Map;function kd(e,t,r){r=nt(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){ji||(ji=!0,cl=i),Zo(e,t)},r}function Cd(e,t,r){r=nt(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;r.payload=function(){return i(o)},r.callback=function(){Zo(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Zo(e,t),typeof i!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function as(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new Cf;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(r)||(o.add(r),e=Of.bind(null,e,t,r),t.then(e,e))}function ss(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cs(e,t,r,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=nt(-1,1),t.tag=2,bt(r,t,1))),r.lanes|=1),e)}var zf=at.ReactCurrentOwner,Se=!1;function ye(e,t,r,i){t.child=e===null?ed(t,null,r,i):bn(t,e.child,r,i)}function ds(e,t,r,i,o){r=r.render;var l=t.ref;return mn(t,o),i=Jl(e,t,r,i,l,o),r=Zl(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lt(e,t,o)):(V&&r&&Fl(t),t.flags|=1,ye(e,t,i,o),t.child)}function ps(e,t,r,i,o){if(e===null){var l=r.type;return typeof l=="function"&&!ca(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,zd(e,t,l,i,o)):(e=Zr(r.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var a=l.memoizedProps;if(r=r.compare,r=r!==null?r:or,r(a,i)&&e.ref===t.ref)return lt(e,t,o)}return t.flags|=1,e=St(l,i),e.ref=t.ref,e.return=t,t.child=e}function zd(e,t,r,i,o){if(e!==null){var l=e.memoizedProps;if(or(l,i)&&e.ref===t.ref)if(Se=!1,t.pendingProps=i=l,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,lt(e,t,o)}return el(e,t,r,i,o)}function Bd(e,t,r){var i=t.pendingProps,o=i.children,l=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(dn,Be),Be|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(dn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=l!==null?l.baseLanes:r,F(dn,Be),Be|=i}else l!==null?(i=l.baseLanes|r,t.memoizedState=null):i=r,F(dn,Be),Be|=i;return ye(e,t,o,r),t.child}function Ed(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function el(e,t,r,i,o){var l=Ce(r)?_t:ge.current;return l=yn(t,l),mn(t,o),r=Jl(e,t,r,i,l,o),i=Zl(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lt(e,t,o)):(V&&i&&Fl(t),t.flags|=1,ye(e,t,r,o),t.child)}function us(e,t,r,i,o){if(Ce(r)){var l=!0;pi(t)}else l=!1;if(mn(t,o),t.stateNode===null)Kr(e,t),Sd(t,r,i),Jo(t,r,i,o),i=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,d=r.contextType;typeof d=="object"&&d!==null?d=Me(d):(d=Ce(r)?_t:ge.current,d=yn(t,d));var m=r.getDerivedStateFromProps,p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==i||c!==d)&&ls(t,a,i,d),dt=!1;var f=t.memoizedState;a.state=f,gi(t,i,a,o),c=t.memoizedState,s!==i||f!==c||ke.current||dt?(typeof m=="function"&&(Xo(t,r,m,i),c=t.memoizedState),(s=dt||os(t,r,s,i,f,c,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=d,i=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,nd(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Fe(t.type,s),a.props=d,p=t.pendingProps,f=a.context,c=r.contextType,typeof c=="object"&&c!==null?c=Me(c):(c=Ce(r)?_t:ge.current,c=yn(t,c));var x=r.getDerivedStateFromProps;(m=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||f!==c)&&ls(t,a,i,c),dt=!1,f=t.memoizedState,a.state=f,gi(t,i,a,o);var j=t.memoizedState;s!==p||f!==j||ke.current||dt?(typeof x=="function"&&(Xo(t,r,x,i),j=t.memoizedState),(d=dt||os(t,r,d,i,f,j,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,j,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,j,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=j),a.props=i,a.state=j,a.context=c,i=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return tl(e,t,r,i,l,o)}function tl(e,t,r,i,o,l){Ed(e,t);var a=(t.flags&128)!==0;if(!i&&!a)return o&&Xa(t,r,!1),lt(e,t,l);i=t.stateNode,zf.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&a?(t.child=bn(t,e.child,null,l),t.child=bn(t,null,s,l)):ye(e,t,s,l),t.memoizedState=i.state,o&&Xa(t,r,!0),t.child}function Dd(e){var t=e.stateNode;t.pendingContext?Ka(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ka(e,t.context,!1),Gl(e,t.containerInfo)}function fs(e,t,r,i,o){return vn(),Yl(o),t.flags|=256,ye(e,t,r,i),t.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,t,r){var i=t.pendingProps,o=$.current,l=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),F($,o&1),e===null)return Qo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=i.children,e=i.fallback,l?(i=t.mode,l=t.child,a={mode:"hidden",children:a},!(i&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Mi(a,i,0,null),e=Ft(e,i,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=rl(r),t.memoizedState=nl,e):na(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Bf(e,t,a,i,s,o,r);if(l){l=i.fallback,a=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=c,t.deletions=null):(i=St(o,c),i.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=St(s,l):(l=Ft(l,a,r,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,a=e.child.memoizedState,a=a===null?rl(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~r,t.memoizedState=nl,i}return l=e.child,e=l.sibling,i=St(l,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function na(e,t){return t=Mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ir(e,t,r,i){return i!==null&&Yl(i),bn(t,e.child,null,r),e=na(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bf(e,t,r,i,o,l,a){if(r)return t.flags&256?(t.flags&=-257,i=fo(Error(w(422))),Ir(e,t,a,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=i.fallback,o=t.mode,i=Mi({mode:"visible",children:i.children},o,0,null),l=Ft(l,o,a,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,t.mode&1&&bn(t,e.child,null,a),t.child.memoizedState=rl(a),t.memoizedState=nl,l);if(!(t.mode&1))return Ir(e,t,a,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var s=i.dgst;return i=s,l=Error(w(419)),i=fo(l,i,void 0),Ir(e,t,a,i)}if(s=(a&e.childLanes)!==0,Se||s){if(i=le,i!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|a)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ot(e,o),Ue(i,e,o,-1))}return sa(),i=fo(Error(w(421))),Ir(e,t,a,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ff.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ee=vt(o.nextSibling),De=t,V=!0,Ye=null,e!==null&&(We[Pe++]=et,We[Pe++]=tt,We[Pe++]=Yt,et=e.id,tt=e.overflow,Yt=t),t=na(t,i.children),t.flags|=4096,t)}function hs(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ko(e.return,t,r)}function ho(e,t,r,i,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=r,l.tailMode=o)}function Td(e,t,r){var i=t.pendingProps,o=i.revealOrder,l=i.tail;if(ye(e,t,i.children,r),i=$.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hs(e,r,t);else if(e.tag===19)hs(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(F($,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&xi(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),ho(t,!1,o,r,l);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&xi(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}ho(t,!0,r,null,l);break;case"together":ho(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,r=St(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=St(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ef(e,t,r){switch(t.tag){case 3:Dd(t),vn();break;case 5:rd(t);break;case 1:Ce(t.type)&&pi(t);break;case 4:Gl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;F(hi,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(F($,$.current&1),t.flags|=128,null):r&t.child.childLanes?Nd(e,t,r):(F($,$.current&1),e=lt(e,t,r),e!==null?e.sibling:null);F($,$.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return Td(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),F($,$.current),i)break;return null;case 22:case 23:return t.lanes=0,Bd(e,t,r)}return lt(e,t,r)}var Ad,il,Wd,Pd;Ad=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};il=function(){};Wd=function(e,t,r,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,It(Ke.current);var l=null;switch(r){case"input":o=zo(e,o),i=zo(e,i),l=[];break;case"select":o=G({},o,{value:void 0}),i=G({},i,{value:void 0}),l=[];break;case"textarea":o=Do(e,o),i=Do(e,i),l=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=ci)}To(r,i);var a;r=null;for(d in o)if(!i.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Jn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in i){var c=i[d];if(s=o!=null?o[d]:void 0,i.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(l||(l=[]),l.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Jn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Y("scroll",e),l||s===c||(l=[])):(l=l||[]).push(d,c))}r&&(l=l||[]).push("style",r);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Pd=function(e,t,r,i){r!==i&&(t.flags|=4)};function Rn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function Df(e,t,r){var i=t.pendingProps;switch(_l(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ce(t.type)&&di(),he(t),null;case 3:return i=t.stateNode,jn(),H(ke),H(ge),Kl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(ul(Ye),Ye=null))),il(e,t),he(t),null;case 5:Ql(t);var o=It(dr.current);if(r=t.type,e!==null&&t.stateNode!=null)Wd(e,t,r,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(w(166));return he(t),null}if(e=It(Ke.current),Lr(t)){i=t.stateNode,r=t.type;var l=t.memoizedProps;switch(i[Ge]=t,i[sr]=l,e=(t.mode&1)!==0,r){case"dialog":Y("cancel",i),Y("close",i);break;case"iframe":case"object":case"embed":Y("load",i);break;case"video":case"audio":for(o=0;o<_n.length;o++)Y(_n[o],i);break;case"source":Y("error",i);break;case"img":case"image":case"link":Y("error",i),Y("load",i);break;case"details":Y("toggle",i);break;case"input":Sa(i,l),Y("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!l.multiple},Y("invalid",i);break;case"textarea":Ca(i,l),Y("invalid",i)}To(r,l),o=null;for(var a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="children"?typeof s=="string"?i.textContent!==s&&(l.suppressHydrationWarning!==!0&&Rr(i.textContent,s,e),o=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Rr(i.textContent,s,e),o=["children",""+s]):Jn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Y("scroll",i)}switch(r){case"input":Br(i),ka(i,l,!0);break;case"textarea":Br(i),za(i);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(i.onclick=ci)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=a.createElement(r,{is:i.is}):(e=a.createElement(r),r==="select"&&(a=e,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):e=a.createElementNS(e,r),e[Ge]=t,e[sr]=i,Ad(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ao(r,i),r){case"dialog":Y("cancel",e),Y("close",e),o=i;break;case"iframe":case"object":case"embed":Y("load",e),o=i;break;case"video":case"audio":for(o=0;o<_n.length;o++)Y(_n[o],e);o=i;break;case"source":Y("error",e),o=i;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=i;break;case"details":Y("toggle",e),o=i;break;case"input":Sa(e,i),o=zo(e,i),Y("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=G({},i,{value:void 0}),Y("invalid",e);break;case"textarea":Ca(e,i),o=Do(e,i),Y("invalid",e);break;default:o=i}To(r,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="style"?pc(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&cc(e,c)):l==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Zn(e,c):typeof c=="number"&&Zn(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Jn.hasOwnProperty(l)?c!=null&&l==="onScroll"&&Y("scroll",e):c!=null&&zl(e,l,c,a))}switch(r){case"input":Br(e),ka(e,i,!1);break;case"textarea":Br(e),za(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Ct(i.value));break;case"select":e.multiple=!!i.multiple,l=i.value,l!=null?pn(e,!!i.multiple,l,!1):i.defaultValue!=null&&pn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ci)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Pd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(w(166));if(r=It(dr.current),It(Ke.current),Lr(t)){if(i=t.stateNode,r=t.memoizedProps,i[Ge]=t,(l=i.nodeValue!==r)&&(e=De,e!==null))switch(e.tag){case 3:Rr(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rr(i.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Ge]=t,t.stateNode=i}return he(t),null;case 13:if(H($),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ee!==null&&t.mode&1&&!(t.flags&128))Jc(),vn(),t.flags|=98560,l=!1;else if(l=Lr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Ge]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),l=!1}else Ye!==null&&(ul(Ye),Ye=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?ne===0&&(ne=3):sa())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return jn(),il(e,t),e===null&&lr(t.stateNode.containerInfo),he(t),null;case 10:return Vl(t.type._context),he(t),null;case 17:return Ce(t.type)&&di(),he(t),null;case 19:if(H($),l=t.memoizedState,l===null)return he(t),null;if(i=(t.flags&128)!==0,a=l.rendering,a===null)if(i)Rn(l,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=xi(e),a!==null){for(t.flags|=128,Rn(l,!1),i=a.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)l=r,e=i,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return F($,$.current&1|2),t.child}e=e.sibling}l.tail!==null&&X()>Sn&&(t.flags|=128,i=!0,Rn(l,!1),t.lanes=4194304)}else{if(!i)if(e=xi(a),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Rn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!V)return he(t),null}else 2*X()-l.renderingStartTime>Sn&&r!==1073741824&&(t.flags|=128,i=!0,Rn(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(r=l.last,r!==null?r.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=X(),t.sibling=null,r=$.current,F($,i?r&1|2:r&1),t):(he(t),null);case 22:case 23:return aa(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Be&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Nf(e,t){switch(_l(t),t.tag){case 1:return Ce(t.type)&&di(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),H(ke),H(ge),Kl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ql(t),null;case 13:if(H($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H($),null;case 4:return jn(),null;case 10:return Vl(t.type._context),null;case 22:case 23:return aa(),null;case 24:return null;default:return null}}var Or=!1,me=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,z=null;function cn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){K(e,t,i)}else r.current=null}function ol(e,t,r){try{r()}catch(i){K(e,t,i)}}var ms=!1;function Af(e,t){if(Yo=li,e=Oc(),Ol(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var o=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var a=0,s=-1,c=-1,d=0,m=0,p=e,f=null;t:for(;;){for(var x;p!==r||o!==0&&p.nodeType!==3||(s=a+o),p!==l||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)f=p,p=x;for(;;){if(p===e)break t;if(f===r&&++d===o&&(s=a),f===l&&++m===i&&(c=a),(x=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=x}r=s===-1||c===-1?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ho={focusedElem:e,selectionRange:r},li=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var b=j.memoizedProps,S=j.memoizedState,h=t.stateNode,u=h.getSnapshotBeforeUpdate(t.elementType===t.type?b:Fe(t.type,b),S);h.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){K(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return j=ms,ms=!1,j}function Gn(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ol(t,r,l)}o=o.next}while(o!==i)}}function Ri(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function ll(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Rd(e){var t=e.alternate;t!==null&&(e.alternate=null,Rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[sr],delete t[$o],delete t[hf],delete t[mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ld(e){return e.tag===5||e.tag===3||e.tag===4}function gs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ci));else if(i!==4&&(e=e.child,e!==null))for(al(e,t,r),e=e.sibling;e!==null;)al(e,t,r),e=e.sibling}function sl(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(sl(e,t,r),e=e.sibling;e!==null;)sl(e,t,r),e=e.sibling}var se=null,_e=!1;function st(e,t,r){for(r=r.child;r!==null;)Md(e,t,r),r=r.sibling}function Md(e,t,r){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Bi,r)}catch{}switch(r.tag){case 5:me||cn(r,t);case 6:var i=se,o=_e;se=null,st(e,t,r),se=i,_e=o,se!==null&&(_e?(e=se,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):se.removeChild(r.stateNode));break;case 18:se!==null&&(_e?(e=se,r=r.stateNode,e.nodeType===8?lo(e.parentNode,r):e.nodeType===1&&lo(e,r),rr(e)):lo(se,r.stateNode));break;case 4:i=se,o=_e,se=r.stateNode.containerInfo,_e=!0,st(e,t,r),se=i,_e=o;break;case 0:case 11:case 14:case 15:if(!me&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var l=o,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&ol(r,t,a),o=o.next}while(o!==i)}st(e,t,r);break;case 1:if(!me&&(cn(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(s){K(r,t,s)}st(e,t,r);break;case 21:st(e,t,r);break;case 22:r.mode&1?(me=(i=me)||r.memoizedState!==null,st(e,t,r),me=i):st(e,t,r);break;default:st(e,t,r)}}function xs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Tf),t.forEach(function(i){var o=_f.bind(null,e,i);r.has(i)||(r.add(i),i.then(o,o))})}}function Oe(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];try{var l=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,_e=!1;break e;case 3:se=s.stateNode.containerInfo,_e=!0;break e;case 4:se=s.stateNode.containerInfo,_e=!0;break e}s=s.return}if(se===null)throw Error(w(160));Md(l,a,o),se=null,_e=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(d){K(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Id(t,e),t=t.sibling}function Id(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),$e(e),i&4){try{Gn(3,e,e.return),Ri(3,e)}catch(b){K(e,e.return,b)}try{Gn(5,e,e.return)}catch(b){K(e,e.return,b)}}break;case 1:Oe(t,e),$e(e),i&512&&r!==null&&cn(r,r.return);break;case 5:if(Oe(t,e),$e(e),i&512&&r!==null&&cn(r,r.return),e.flags&32){var o=e.stateNode;try{Zn(o,"")}catch(b){K(e,e.return,b)}}if(i&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,a=r!==null?r.memoizedProps:l,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&lc(o,l),Ao(s,a);var d=Ao(s,l);for(a=0;a<c.length;a+=2){var m=c[a],p=c[a+1];m==="style"?pc(o,p):m==="dangerouslySetInnerHTML"?cc(o,p):m==="children"?Zn(o,p):zl(o,m,p,d)}switch(s){case"input":Bo(o,l);break;case"textarea":ac(o,l);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?pn(o,!!l.multiple,x,!1):f!==!!l.multiple&&(l.defaultValue!=null?pn(o,!!l.multiple,l.defaultValue,!0):pn(o,!!l.multiple,l.multiple?[]:"",!1))}o[sr]=l}catch(b){K(e,e.return,b)}}break;case 6:if(Oe(t,e),$e(e),i&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(b){K(e,e.return,b)}}break;case 3:if(Oe(t,e),$e(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{rr(t.containerInfo)}catch(b){K(e,e.return,b)}break;case 4:Oe(t,e),$e(e);break;case 13:Oe(t,e),$e(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(oa=X())),i&4&&xs(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(me=(d=me)||m,Oe(t,e),me=d):Oe(t,e),$e(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(z=e,m=e.child;m!==null;){for(p=z=m;z!==null;){switch(f=z,x=f.child,f.tag){case 0:case 11:case 14:case 15:Gn(4,f,f.return);break;case 1:cn(f,f.return);var j=f.stateNode;if(typeof j.componentWillUnmount=="function"){i=f,r=f.return;try{t=i,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(b){K(i,r,b)}}break;case 5:cn(f,f.return);break;case 22:if(f.memoizedState!==null){vs(p);continue}}x!==null?(x.return=f,z=x):vs(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=dc("display",a))}catch(b){K(e,e.return,b)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(b){K(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Oe(t,e),$e(e),i&4&&xs(e);break;case 21:break;default:Oe(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ld(r)){var i=r;break e}r=r.return}throw Error(w(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(Zn(o,""),i.flags&=-33);var l=gs(e);sl(e,l,o);break;case 3:case 4:var a=i.stateNode.containerInfo,s=gs(e);al(e,s,a);break;default:throw Error(w(161))}}catch(c){K(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wf(e,t,r){z=e,Od(e)}function Od(e,t,r){for(var i=(e.mode&1)!==0;z!==null;){var o=z,l=o.child;if(o.tag===22&&i){var a=o.memoizedState!==null||Or;if(!a){var s=o.alternate,c=s!==null&&s.memoizedState!==null||me;s=Or;var d=me;if(Or=a,(me=c)&&!d)for(z=o;z!==null;)a=z,c=a.child,a.tag===22&&a.memoizedState!==null?bs(o):c!==null?(c.return=a,z=c):bs(o);for(;l!==null;)z=l,Od(l),l=l.sibling;z=o,Or=s,me=d}ys(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,z=l):ys(e)}}function ys(e){for(;z!==null;){var t=z;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Ri(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!me)if(r===null)i.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Fe(t.type,r.memoizedProps);i.componentDidUpdate(o,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ns(t,l,i);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ns(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&rr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}me||t.flags&512&&ll(t)}catch(f){K(t,t.return,f)}}if(t===e){z=null;break}if(r=t.sibling,r!==null){r.return=t.return,z=r;break}z=t.return}}function vs(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var r=t.sibling;if(r!==null){r.return=t.return,z=r;break}z=t.return}}function bs(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ri(4,t)}catch(c){K(t,r,c)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(c){K(t,o,c)}}var l=t.return;try{ll(t)}catch(c){K(t,l,c)}break;case 5:var a=t.return;try{ll(t)}catch(c){K(t,a,c)}}}catch(c){K(t,t.return,c)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var Pf=Math.ceil,bi=at.ReactCurrentDispatcher,ra=at.ReactCurrentOwner,Le=at.ReactCurrentBatchConfig,L=0,le=null,Z=null,de=0,Be=0,dn=Et(0),ne=0,hr=null,Ut=0,Li=0,ia=0,Qn=null,we=null,oa=0,Sn=1/0,Je=null,ji=!1,cl=null,jt=null,Fr=!1,ht=null,wi=0,Kn=0,dl=null,Xr=-1,Jr=0;function ve(){return L&6?X():Xr!==-1?Xr:Xr=X()}function wt(e){return e.mode&1?L&2&&de!==0?de&-de:xf.transition!==null?(Jr===0&&(Jr=Sc()),Jr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Nc(e.type)),e):1}function Ue(e,t,r,i){if(50<Kn)throw Kn=0,dl=null,Error(w(185));yr(e,r,i),(!(L&2)||e!==le)&&(e===le&&(!(L&2)&&(Li|=r),ne===4&&ut(e,de)),ze(e,i),r===1&&L===0&&!(t.mode&1)&&(Sn=X()+500,Ai&&Dt()))}function ze(e,t){var r=e.callbackNode;gu(e,t);var i=oi(e,e===le?de:0);if(i===0)r!==null&&Da(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Da(r),t===1)e.tag===0?gf(js.bind(null,e)):Qc(js.bind(null,e)),uf(function(){!(L&6)&&Dt()}),r=null;else{switch(kc(i)){case 1:r=Tl;break;case 4:r=jc;break;case 16:r=ii;break;case 536870912:r=wc;break;default:r=ii}r=qd(r,Fd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Fd(e,t){if(Xr=-1,Jr=0,L&6)throw Error(w(327));var r=e.callbackNode;if(gn()&&e.callbackNode!==r)return null;var i=oi(e,e===le?de:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Si(e,i);else{t=i;var o=L;L|=2;var l=Yd();(le!==e||de!==t)&&(Je=null,Sn=X()+500,Ot(e,t));do try{Mf();break}catch(s){_d(e,s)}while(!0);Ul(),bi.current=l,L=o,Z!==null?t=0:(le=null,de=0,t=ne)}if(t!==0){if(t===2&&(o=Mo(e),o!==0&&(i=o,t=pl(e,o))),t===1)throw r=hr,Ot(e,0),ut(e,i),ze(e,X()),r;if(t===6)ut(e,i);else{if(o=e.current.alternate,!(i&30)&&!Rf(o)&&(t=Si(e,i),t===2&&(l=Mo(e),l!==0&&(i=l,t=pl(e,l))),t===1))throw r=hr,Ot(e,0),ut(e,i),ze(e,X()),r;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(w(345));case 2:Rt(e,we,Je);break;case 3:if(ut(e,i),(i&130023424)===i&&(t=oa+500-X(),10<t)){if(oi(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Vo(Rt.bind(null,e,we,Je),t);break}Rt(e,we,Je);break;case 4:if(ut(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var a=31-He(i);l=1<<a,a=t[a],a>o&&(o=a),i&=~l}if(i=o,i=X()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Pf(i/1960))-i,10<i){e.timeoutHandle=Vo(Rt.bind(null,e,we,Je),i);break}Rt(e,we,Je);break;case 5:Rt(e,we,Je);break;default:throw Error(w(329))}}}return ze(e,X()),e.callbackNode===r?Fd.bind(null,e):null}function pl(e,t){var r=Qn;return e.current.memoizedState.isDehydrated&&(Ot(e,t).flags|=256),e=Si(e,t),e!==2&&(t=we,we=r,t!==null&&ul(t)),e}function ul(e){we===null?we=e:we.push.apply(we,e)}function Rf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var o=r[i],l=o.getSnapshot;o=o.value;try{if(!Ve(l(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~ia,t&=~Li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-He(t),i=1<<r;e[r]=-1,t&=~i}}function js(e){if(L&6)throw Error(w(327));gn();var t=oi(e,0);if(!(t&1))return ze(e,X()),null;var r=Si(e,t);if(e.tag!==0&&r===2){var i=Mo(e);i!==0&&(t=i,r=pl(e,i))}if(r===1)throw r=hr,Ot(e,0),ut(e,t),ze(e,X()),r;if(r===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,we,Je),ze(e,X()),null}function la(e,t){var r=L;L|=1;try{return e(t)}finally{L=r,L===0&&(Sn=X()+500,Ai&&Dt())}}function Vt(e){ht!==null&&ht.tag===0&&!(L&6)&&gn();var t=L;L|=1;var r=Le.transition,i=M;try{if(Le.transition=null,M=1,e)return e()}finally{M=i,Le.transition=r,L=t,!(L&6)&&Dt()}}function aa(){Be=dn.current,H(dn)}function Ot(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,pf(r)),Z!==null)for(r=Z.return;r!==null;){var i=r;switch(_l(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&di();break;case 3:jn(),H(ke),H(ge),Kl();break;case 5:Ql(i);break;case 4:jn();break;case 13:H($);break;case 19:H($);break;case 10:Vl(i.type._context);break;case 22:case 23:aa()}r=r.return}if(le=e,Z=e=St(e.current,null),de=Be=t,ne=0,hr=null,ia=Li=Ut=0,we=Qn=null,Mt!==null){for(t=0;t<Mt.length;t++)if(r=Mt[t],i=r.interleaved,i!==null){r.interleaved=null;var o=i.next,l=r.pending;if(l!==null){var a=l.next;l.next=o,i.next=a}r.pending=i}Mt=null}return e}function _d(e,t){do{var r=Z;try{if(Ul(),Gr.current=vi,yi){for(var i=q.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}yi=!1}if(Ht=0,oe=te=q=null,qn=!1,pr=0,ra.current=null,r===null||r.return===null){ne=1,hr=t,Z=null;break}e:{var l=e,a=r.return,s=r,c=t;if(t=de,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=ss(a);if(x!==null){x.flags&=-257,cs(x,a,s,l,t),x.mode&1&&as(l,d,t),t=x,c=d;var j=t.updateQueue;if(j===null){var b=new Set;b.add(c),t.updateQueue=b}else j.add(c);break e}else{if(!(t&1)){as(l,d,t),sa();break e}c=Error(w(426))}}else if(V&&s.mode&1){var S=ss(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),cs(S,a,s,l,t),Yl(wn(c,s));break e}}l=c=wn(c,s),ne!==4&&(ne=2),Qn===null?Qn=[l]:Qn.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=kd(l,c,t);ts(l,h);break e;case 1:s=c;var u=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(jt===null||!jt.has(g)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Cd(l,s,t);ts(l,v);break e}}l=l.return}while(l!==null)}Ud(r)}catch(k){t=k,Z===r&&r!==null&&(Z=r=r.return);continue}break}while(!0)}function Yd(){var e=bi.current;return bi.current=vi,e===null?vi:e}function sa(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(Ut&268435455)&&!(Li&268435455)||ut(le,de)}function Si(e,t){var r=L;L|=2;var i=Yd();(le!==e||de!==t)&&(Je=null,Ot(e,t));do try{Lf();break}catch(o){_d(e,o)}while(!0);if(Ul(),L=r,bi.current=i,Z!==null)throw Error(w(261));return le=null,de=0,ne}function Lf(){for(;Z!==null;)Hd(Z)}function Mf(){for(;Z!==null&&!au();)Hd(Z)}function Hd(e){var t=$d(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Ud(e):Z=t,ra.current=null}function Ud(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Nf(r,t),r!==null){r.flags&=32767,Z=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,Z=null;return}}else if(r=Df(r,t,Be),r!==null){Z=r;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ne===0&&(ne=5)}function Rt(e,t,r){var i=M,o=Le.transition;try{Le.transition=null,M=1,If(e,t,r,i)}finally{Le.transition=o,M=i}return null}function If(e,t,r,i){do gn();while(ht!==null);if(L&6)throw Error(w(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(xu(e,l),e===le&&(Z=le=null,de=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Fr||(Fr=!0,qd(ii,function(){return gn(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=Le.transition,Le.transition=null;var a=M;M=1;var s=L;L|=4,ra.current=null,Af(e,r),Id(r,e),rf(Ho),li=!!Yo,Ho=Yo=null,e.current=r,Wf(r),su(),L=s,M=a,Le.transition=l}else e.current=r;if(Fr&&(Fr=!1,ht=e,wi=o),l=e.pendingLanes,l===0&&(jt=null),pu(r.stateNode),ze(e,X()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],i(o.value,{componentStack:o.stack,digest:o.digest});if(ji)throw ji=!1,e=cl,cl=null,e;return wi&1&&e.tag!==0&&gn(),l=e.pendingLanes,l&1?e===dl?Kn++:(Kn=0,dl=e):Kn=0,Dt(),null}function gn(){if(ht!==null){var e=kc(wi),t=Le.transition,r=M;try{if(Le.transition=null,M=16>e?16:e,ht===null)var i=!1;else{if(e=ht,ht=null,wi=0,L&6)throw Error(w(331));var o=L;for(L|=4,z=e.current;z!==null;){var l=z,a=l.child;if(z.flags&16){var s=l.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(z=d;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:Gn(8,m,l)}var p=m.child;if(p!==null)p.return=m,z=p;else for(;z!==null;){m=z;var f=m.sibling,x=m.return;if(Rd(m),m===d){z=null;break}if(f!==null){f.return=x,z=f;break}z=x}}}var j=l.alternate;if(j!==null){var b=j.child;if(b!==null){j.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}z=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,z=a;else e:for(;z!==null;){if(l=z,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Gn(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,z=h;break e}z=l.return}}var u=e.current;for(z=u;z!==null;){a=z;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,z=g;else e:for(a=u;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ri(9,s)}}catch(k){K(s,s.return,k)}if(s===a){z=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,z=v;break e}z=s.return}}if(L=o,Dt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Bi,e)}catch{}i=!0}return i}finally{M=r,Le.transition=t}}return!1}function ws(e,t,r){t=wn(r,t),t=kd(e,t,1),e=bt(e,t,1),t=ve(),e!==null&&(yr(e,1,t),ze(e,t))}function K(e,t,r){if(e.tag===3)ws(e,e,r);else for(;t!==null;){if(t.tag===3){ws(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(jt===null||!jt.has(i))){e=wn(r,e),e=Cd(t,e,1),t=bt(t,e,1),e=ve(),t!==null&&(yr(t,1,e),ze(t,e));break}}t=t.return}}function Of(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&r,le===e&&(de&r)===r&&(ne===4||ne===3&&(de&130023424)===de&&500>X()-oa?Ot(e,0):ia|=r),ze(e,t)}function Vd(e,t){t===0&&(e.mode&1?(t=Nr,Nr<<=1,!(Nr&130023424)&&(Nr=4194304)):t=1);var r=ve();e=ot(e,t),e!==null&&(yr(e,t,r),ze(e,r))}function Ff(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Vd(e,r)}function _f(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(w(314))}i!==null&&i.delete(t),Vd(e,r)}var $d;$d=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Se=!1,Ef(e,t,r);Se=!!(e.flags&131072)}else Se=!1,V&&t.flags&1048576&&Kc(t,fi,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Kr(e,t),e=t.pendingProps;var o=yn(t,ge.current);mn(t,r),o=Jl(null,t,i,e,o,r);var l=Zl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(i)?(l=!0,pi(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ql(t),o.updater=Pi,t.stateNode=o,o._reactInternals=t,Jo(t,i,e,r),t=tl(null,t,i,!0,l,r)):(t.tag=0,V&&l&&Fl(t),ye(null,t,o,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Kr(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=Hf(i),e=Fe(i,e),o){case 0:t=el(null,t,i,e,r);break e;case 1:t=us(null,t,i,e,r);break e;case 11:t=ds(null,t,i,e,r);break e;case 14:t=ps(null,t,i,Fe(i.type,e),r);break e}throw Error(w(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Fe(i,o),el(e,t,i,o,r);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Fe(i,o),us(e,t,i,o,r);case 3:e:{if(Dd(t),e===null)throw Error(w(387));i=t.pendingProps,l=t.memoizedState,o=l.element,nd(e,t),gi(t,i,null,r);var a=t.memoizedState;if(i=a.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=wn(Error(w(423)),t),t=fs(e,t,i,r,o);break e}else if(i!==o){o=wn(Error(w(424)),t),t=fs(e,t,i,r,o);break e}else for(Ee=vt(t.stateNode.containerInfo.firstChild),De=t,V=!0,Ye=null,r=ed(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(vn(),i===o){t=lt(e,t,r);break e}ye(e,t,i,r)}t=t.child}return t;case 5:return rd(t),e===null&&Qo(t),i=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,a=o.children,Uo(i,o)?a=null:l!==null&&Uo(i,l)&&(t.flags|=32),Ed(e,t),ye(e,t,a,r),t.child;case 6:return e===null&&Qo(t),null;case 13:return Nd(e,t,r);case 4:return Gl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=bn(t,null,i,r):ye(e,t,i,r),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Fe(i,o),ds(e,t,i,o,r);case 7:return ye(e,t,t.pendingProps,r),t.child;case 8:return ye(e,t,t.pendingProps.children,r),t.child;case 12:return ye(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value,F(hi,i._currentValue),i._currentValue=a,l!==null)if(Ve(l.value,a)){if(l.children===o.children&&!ke.current){t=lt(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var c=s.firstContext;c!==null;){if(c.context===i){if(l.tag===1){c=nt(-1,r&-r),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}l.lanes|=r,c=l.alternate,c!==null&&(c.lanes|=r),Ko(l.return,r,t),s.lanes|=r;break}c=c.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(w(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),Ko(a,r,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}ye(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,mn(t,r),o=Me(o),i=i(o),t.flags|=1,ye(e,t,i,r),t.child;case 14:return i=t.type,o=Fe(i,t.pendingProps),o=Fe(i.type,o),ps(e,t,i,o,r);case 15:return zd(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Fe(i,o),Kr(e,t),t.tag=1,Ce(i)?(e=!0,pi(t)):e=!1,mn(t,r),Sd(t,i,o),Jo(t,i,o,r),tl(null,t,i,!0,e,r);case 19:return Td(e,t,r);case 22:return Bd(e,t,r)}throw Error(w(156,t.tag))};function qd(e,t){return bc(e,t)}function Yf(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,r,i){return new Yf(e,t,r,i)}function ca(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return ca(e)?1:0;if(e!=null){if(e=e.$$typeof,e===El)return 11;if(e===Dl)return 14}return 2}function St(e,t){var r=e.alternate;return r===null?(r=Re(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zr(e,t,r,i,o,l){var a=2;if(i=e,typeof e=="function")ca(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zt:return Ft(r.children,o,l,t);case Bl:a=8,o|=8;break;case wo:return e=Re(12,r,t,o|2),e.elementType=wo,e.lanes=l,e;case So:return e=Re(13,r,t,o),e.elementType=So,e.lanes=l,e;case ko:return e=Re(19,r,t,o),e.elementType=ko,e.lanes=l,e;case rc:return Mi(r,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tc:a=10;break e;case nc:a=9;break e;case El:a=11;break e;case Dl:a=14;break e;case ct:a=16,i=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Re(a,r,t,o),t.elementType=e,t.type=i,t.lanes=l,t}function Ft(e,t,r,i){return e=Re(7,e,i,t),e.lanes=r,e}function Mi(e,t,r,i){return e=Re(22,e,i,t),e.elementType=rc,e.lanes=r,e.stateNode={isHidden:!1},e}function mo(e,t,r){return e=Re(6,e,null,t),e.lanes=r,e}function go(e,t,r){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uf(e,t,r,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function da(e,t,r,i,o,l,a,s,c){return e=new Uf(e,t,r,s,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Re(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(l),e}function Vf(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Gd(e){if(!e)return zt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var r=e.type;if(Ce(r))return Gc(e,r,t)}return t}function Qd(e,t,r,i,o,l,a,s,c){return e=da(r,i,!0,e,o,l,a,s,c),e.context=Gd(null),r=e.current,i=ve(),o=wt(r),l=nt(i,o),l.callback=t??null,bt(r,l,o),e.current.lanes=o,yr(e,o,i),ze(e,i),e}function Ii(e,t,r,i){var o=t.current,l=ve(),a=wt(o);return r=Gd(r),t.context===null?t.context=r:t.pendingContext=r,t=nt(l,a),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=bt(o,t,a),e!==null&&(Ue(e,o,a,l),qr(e,o,a)),a}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ss(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function pa(e,t){Ss(e,t),(e=e.alternate)&&Ss(e,t)}function $f(){return null}var Kd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ua(e){this._internalRoot=e}Oi.prototype.render=ua.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Ii(e,t,null,null)};Oi.prototype.unmount=ua.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Ii(null,e,null,null)}),t[it]=null}};function Oi(e){this._internalRoot=e}Oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pt.length&&t!==0&&t<pt[r].priority;r++);pt.splice(r,0,e),r===0&&Dc(e)}};function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ks(){}function qf(e,t,r,i,o){if(o){if(typeof i=="function"){var l=i;i=function(){var d=ki(a);l.call(d)}}var a=Qd(t,i,e,0,null,!1,!1,"",ks);return e._reactRootContainer=a,e[it]=a.current,lr(e.nodeType===8?e.parentNode:e),Vt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var s=i;i=function(){var d=ki(c);s.call(d)}}var c=da(e,0,!1,null,null,!1,!1,"",ks);return e._reactRootContainer=c,e[it]=c.current,lr(e.nodeType===8?e.parentNode:e),Vt(function(){Ii(t,c,r,i)}),c}function _i(e,t,r,i,o){var l=r._reactRootContainer;if(l){var a=l;if(typeof o=="function"){var s=o;o=function(){var c=ki(a);s.call(c)}}Ii(t,a,e,o)}else a=qf(r,t,e,o,i);return ki(a)}Cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Fn(t.pendingLanes);r!==0&&(Al(t,r|1),ze(t,X()),!(L&6)&&(Sn=X()+500,Dt()))}break;case 13:Vt(function(){var i=ot(e,1);if(i!==null){var o=ve();Ue(i,e,1,o)}}),pa(e,1)}};Wl=function(e){if(e.tag===13){var t=ot(e,134217728);if(t!==null){var r=ve();Ue(t,e,134217728,r)}pa(e,134217728)}};zc=function(e){if(e.tag===13){var t=wt(e),r=ot(e,t);if(r!==null){var i=ve();Ue(r,e,t,i)}pa(e,t)}};Bc=function(){return M};Ec=function(e,t){var r=M;try{return M=e,t()}finally{M=r}};Po=function(e,t,r){switch(t){case"input":if(Bo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var o=Ti(i);if(!o)throw Error(w(90));oc(i),Bo(i,o)}}}break;case"textarea":ac(e,r);break;case"select":t=r.value,t!=null&&pn(e,!!r.multiple,t,!1)}};hc=la;mc=Vt;var Gf={usingClientEntryPoint:!1,Events:[br,rn,Ti,uc,fc,la]},Ln={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qf={bundleType:Ln.bundleType,version:Ln.version,rendererPackageName:Ln.rendererPackageName,rendererConfig:Ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:at.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ln.findFiberByHostInstance||$f,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{Bi=_r.inject(Qf),Qe=_r}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gf;Te.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fa(t))throw Error(w(200));return Vf(e,t,null,r)};Te.createRoot=function(e,t){if(!fa(e))throw Error(w(299));var r=!1,i="",o=Kd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=da(e,1,!1,null,null,r,!1,i,o),e[it]=t.current,lr(e.nodeType===8?e.parentNode:e),new ua(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=yc(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Vt(e)};Te.hydrate=function(e,t,r){if(!Fi(t))throw Error(w(200));return _i(null,e,t,!0,r)};Te.hydrateRoot=function(e,t,r){if(!fa(e))throw Error(w(405));var i=r!=null&&r.hydratedSources||null,o=!1,l="",a=Kd;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Qd(t,null,e,1,r??null,o,!1,l,a),e[it]=t.current,lr(e),i)for(e=0;e<i.length;e++)r=i[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Oi(t)};Te.render=function(e,t,r){if(!Fi(t))throw Error(w(200));return _i(null,e,t,!1,r)};Te.unmountComponentAtNode=function(e){if(!Fi(e))throw Error(w(40));return e._reactRootContainer?(Vt(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[it]=null})}),!0):!1};Te.unstable_batchedUpdates=la;Te.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Fi(r))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return _i(e,t,r,!1,i)};Te.version="18.3.1-next-f1338f8080-20240426";function Xd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xd)}catch(e){console.error(e)}}Xd(),Xs.exports=Te;var Kf=Xs.exports,Cs=Kf;bo.createRoot=Cs.createRoot,bo.hydrateRoot=Cs.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mr(){return mr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},mr.apply(this,arguments)}var mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mt||(mt={}));const zs="popstate";function Xf(e){e===void 0&&(e={});function t(i,o){let{pathname:l,search:a,hash:s}=i.location;return fl("",{pathname:l,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){return typeof o=="string"?o:Ci(o)}return Zf(t,r,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jf(){return Math.random().toString(36).substr(2,8)}function Bs(e,t){return{usr:e.state,key:e.key,idx:t}}function fl(e,t,r,i){return r===void 0&&(r=null),mr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Bn(t):t,{state:r,key:t&&t.key||i||Jf()})}function Ci(e){let{pathname:t="/",search:r="",hash:i=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Bn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function Zf(e,t,r,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,a=o.history,s=mt.Pop,c=null,d=m();d==null&&(d=0,a.replaceState(mr({},a.state,{idx:d}),""));function m(){return(a.state||{idx:null}).idx}function p(){s=mt.Pop;let S=m(),h=S==null?null:S-d;d=S,c&&c({action:s,location:b.location,delta:h})}function f(S,h){s=mt.Push;let u=fl(b.location,S,h);d=m()+1;let g=Bs(u,d),v=b.createHref(u);try{a.pushState(g,"",v)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(v)}l&&c&&c({action:s,location:b.location,delta:1})}function x(S,h){s=mt.Replace;let u=fl(b.location,S,h);d=m();let g=Bs(u,d),v=b.createHref(u);a.replaceState(g,"",v),l&&c&&c({action:s,location:b.location,delta:0})}function j(S){let h=o.location.origin!=="null"?o.location.origin:o.location.href,u=typeof S=="string"?S:Ci(S);return u=u.replace(/ $/,"%20"),ee(h,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,h)}let b={get action(){return s},get location(){return e(o,a)},listen(S){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(zs,p),c=S,()=>{o.removeEventListener(zs,p),c=null}},createHref(S){return t(o,S)},createURL:j,encodeLocation(S){let h=j(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:x,go(S){return a.go(S)}};return b}var Es;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Es||(Es={}));function eh(e,t,r){return r===void 0&&(r="/"),th(e,t,r)}function th(e,t,r,i){let o=typeof t=="string"?Bn(t):t,l=ha(o.pathname||"/",r);if(l==null)return null;let a=Zd(e);nh(a);let s=null;for(let c=0;s==null&&c<a.length;++c){let d=hh(l);s=ph(a[c],d)}return s}function Zd(e,t,r,i){t===void 0&&(t=[]),r===void 0&&(r=[]),i===void 0&&(i="");let o=(l,a,s)=>{let c={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};c.relativePath.startsWith("/")&&(ee(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let d=kt([i,c.relativePath]),m=r.concat(c);l.children&&l.children.length>0&&(ee(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Zd(l.children,t,m,d)),!(l.path==null&&!l.index)&&t.push({path:d,score:ch(d,l.index),routesMeta:m})};return e.forEach((l,a)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))o(l,a);else for(let c of ep(l.path))o(l,a,c)}),t}function ep(e){let t=e.split("/");if(t.length===0)return[];let[r,...i]=t,o=r.endsWith("?"),l=r.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let a=ep(i.join("/")),s=[];return s.push(...a.map(c=>c===""?l:[l,c].join("/"))),o&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function nh(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:dh(t.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const rh=/^:[\w-]+$/,ih=3,oh=2,lh=1,ah=10,sh=-2,Ds=e=>e==="*";function ch(e,t){let r=e.split("/"),i=r.length;return r.some(Ds)&&(i+=sh),t&&(i+=oh),r.filter(o=>!Ds(o)).reduce((o,l)=>o+(rh.test(l)?ih:l===""?lh:ah),i)}function dh(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function ph(e,t,r){let{routesMeta:i}=e,o={},l="/",a=[];for(let s=0;s<i.length;++s){let c=i[s],d=s===i.length-1,m=l==="/"?t:t.slice(l.length)||"/",p=uh({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),f=c.route;if(!p)return null;Object.assign(o,p.params),a.push({params:o,pathname:kt([l,p.pathname]),pathnameBase:yh(kt([l,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(l=kt([l,p.pathnameBase]))}return a}function uh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=fh(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let l=o[0],a=l.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:i.reduce((d,m,p)=>{let{paramName:f,isOptional:x}=m;if(f==="*"){let b=s[p]||"";a=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const j=s[p];return x&&!j?d[f]=void 0:d[f]=(j||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:a,pattern:e}}function fh(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Jd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,c)=>(i.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function hh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Jd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ha(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}function mh(e,t){t===void 0&&(t="/");let{pathname:r,search:i="",hash:o=""}=typeof e=="string"?Bn(e):e;return{pathname:r?r.startsWith("/")?r:gh(r,t):t,search:vh(i),hash:bh(o)}}function gh(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function xo(e,t,r,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xh(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function tp(e,t){let r=xh(e);return t?r.map((i,o)=>o===r.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function np(e,t,r,i){i===void 0&&(i=!1);let o;typeof e=="string"?o=Bn(e):(o=mr({},e),ee(!o.pathname||!o.pathname.includes("?"),xo("?","pathname","search",o)),ee(!o.pathname||!o.pathname.includes("#"),xo("#","pathname","hash",o)),ee(!o.search||!o.search.includes("#"),xo("#","search","hash",o)));let l=e===""||o.pathname==="",a=l?"/":o.pathname,s;if(a==null)s=r;else{let p=t.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;o.pathname=f.join("/")}s=p>=0?t[p]:"/"}let c=mh(o,s),d=a&&a!=="/"&&a.endsWith("/"),m=(l||a===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const kt=e=>e.join("/").replace(/\/\/+/g,"/"),yh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function jh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const rp=["post","put","patch","delete"];new Set(rp);const wh=["get",...rp];new Set(wh);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gr(){return gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},gr.apply(this,arguments)}const ma=y.createContext(null),Sh=y.createContext(null),Gt=y.createContext(null),Yi=y.createContext(null),Nt=y.createContext({outlet:null,matches:[],isDataRoute:!1}),ip=y.createContext(null);function kh(e,t){let{relative:r}=t===void 0?{}:t;wr()||ee(!1);let{basename:i,navigator:o}=y.useContext(Gt),{hash:l,pathname:a,search:s}=ap(e,{relative:r}),c=a;return i!=="/"&&(c=a==="/"?i:kt([i,a])),o.createHref({pathname:c,search:s,hash:l})}function wr(){return y.useContext(Yi)!=null}function En(){return wr()||ee(!1),y.useContext(Yi).location}function op(e){y.useContext(Gt).static||y.useLayoutEffect(e)}function lp(){let{isDataRoute:e}=y.useContext(Nt);return e?Ih():Ch()}function Ch(){wr()||ee(!1);let e=y.useContext(ma),{basename:t,future:r,navigator:i}=y.useContext(Gt),{matches:o}=y.useContext(Nt),{pathname:l}=En(),a=JSON.stringify(tp(o,r.v7_relativeSplatPath)),s=y.useRef(!1);return op(()=>{s.current=!0}),y.useCallback(function(d,m){if(m===void 0&&(m={}),!s.current)return;if(typeof d=="number"){i.go(d);return}let p=np(d,JSON.parse(a),l,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:kt([t,p.pathname])),(m.replace?i.replace:i.push)(p,m.state,m)},[t,i,a,l,e])}function zh(){let{matches:e}=y.useContext(Nt),t=e[e.length-1];return t?t.params:{}}function ap(e,t){let{relative:r}=t===void 0?{}:t,{future:i}=y.useContext(Gt),{matches:o}=y.useContext(Nt),{pathname:l}=En(),a=JSON.stringify(tp(o,i.v7_relativeSplatPath));return y.useMemo(()=>np(e,JSON.parse(a),l,r==="path"),[e,a,l,r])}function Bh(e,t){return Eh(e,t)}function Eh(e,t,r,i){wr()||ee(!1);let{navigator:o}=y.useContext(Gt),{matches:l}=y.useContext(Nt),a=l[l.length-1],s=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let d=En(),m;if(t){var p;let S=typeof t=="string"?Bn(t):t;c==="/"||(p=S.pathname)!=null&&p.startsWith(c)||ee(!1),m=S}else m=d;let f=m.pathname||"/",x=f;if(c!=="/"){let S=c.replace(/^\//,"").split("/");x="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let j=eh(e,{pathname:x}),b=Wh(j&&j.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:kt([c,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:kt([c,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,r,i);return t&&b?y.createElement(Yi.Provider,{value:{location:gr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:mt.Pop}},b):b}function Dh(){let e=Mh(),t=jh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),r?y.createElement("pre",{style:o},r):null,null)}const Nh=y.createElement(Dh,null);class Th extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?y.createElement(Nt.Provider,{value:this.props.routeContext},y.createElement(ip.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ah(e){let{routeContext:t,match:r,children:i}=e,o=y.useContext(ma);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(Nt.Provider,{value:t},i)}function Wh(e,t,r,i){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),i===void 0&&(i=null),e==null){var l;if(!r)return null;if(r.errors)e=r.matches;else if((l=i)!=null&&l.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,s=(o=r)==null?void 0:o.errors;if(s!=null){let m=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);m>=0||ee(!1),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,d=-1;if(r&&i&&i.v7_partialHydration)for(let m=0;m<a.length;m++){let p=a[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:f,errors:x}=r,j=p.route.loader&&f[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||j){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((m,p,f)=>{let x,j=!1,b=null,S=null;r&&(x=s&&p.route.id?s[p.route.id]:void 0,b=p.route.errorElement||Nh,c&&(d<0&&f===0?(Oh("route-fallback"),j=!0,S=null):d===f&&(j=!0,S=p.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,f+1)),u=()=>{let g;return x?g=b:j?g=S:p.route.Component?g=y.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=m,y.createElement(Ah,{match:p,routeContext:{outlet:m,matches:h,isDataRoute:r!=null},children:g})};return r&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?y.createElement(Th,{location:r.location,revalidation:r.revalidation,component:b,error:x,children:u(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):u()},null)}var sp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(sp||{}),cp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cp||{});function Ph(e){let t=y.useContext(ma);return t||ee(!1),t}function Rh(e){let t=y.useContext(Sh);return t||ee(!1),t}function Lh(e){let t=y.useContext(Nt);return t||ee(!1),t}function dp(e){let t=Lh(),r=t.matches[t.matches.length-1];return r.route.id||ee(!1),r.route.id}function Mh(){var e;let t=y.useContext(ip),r=Rh(),i=dp();return t!==void 0?t:(e=r.errors)==null?void 0:e[i]}function Ih(){let{router:e}=Ph(sp.UseNavigateStable),t=dp(cp.UseNavigateStable),r=y.useRef(!1);return op(()=>{r.current=!0}),y.useCallback(function(o,l){l===void 0&&(l={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,gr({fromRouteId:t},l)))},[e,t])}const Ns={};function Oh(e,t,r){Ns[e]||(Ns[e]=!0)}function Fh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function U(e){ee(!1)}function _h(e){let{basename:t="/",children:r=null,location:i,navigationType:o=mt.Pop,navigator:l,static:a=!1,future:s}=e;wr()&&ee(!1);let c=t.replace(/^\/*/,"/"),d=y.useMemo(()=>({basename:c,navigator:l,static:a,future:gr({v7_relativeSplatPath:!1},s)}),[c,s,l,a]);typeof i=="string"&&(i=Bn(i));let{pathname:m="/",search:p="",hash:f="",state:x=null,key:j="default"}=i,b=y.useMemo(()=>{let S=ha(m,c);return S==null?null:{location:{pathname:S,search:p,hash:f,state:x,key:j},navigationType:o}},[c,m,p,f,x,j,o]);return b==null?null:y.createElement(Gt.Provider,{value:d},y.createElement(Yi.Provider,{children:r,value:b}))}function Yh(e){let{children:t,location:r}=e;return Bh(hl(t),r)}new Promise(()=>{});function hl(e,t){t===void 0&&(t=[]);let r=[];return y.Children.forEach(e,(i,o)=>{if(!y.isValidElement(i))return;let l=[...t,o];if(i.type===y.Fragment){r.push.apply(r,hl(i.props.children,l));return}i.type!==U&&ee(!1),!i.props.index||!i.props.children||ee(!1);let a={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=hl(i.props.children,l)),r.push(a)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ml(){return ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ml.apply(this,arguments)}function Hh(e,t){if(e==null)return{};var r={},i=Object.keys(e),o,l;for(l=0;l<i.length;l++)o=i[l],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Uh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vh(e,t){return e.button===0&&(!t||t==="_self")&&!Uh(e)}function gl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let i=e[r];return t.concat(Array.isArray(i)?i.map(o=>[r,o]):[[r,i]])},[]))}function $h(e,t){let r=gl(e);return t&&t.forEach((i,o)=>{r.has(o)||t.getAll(o).forEach(l=>{r.append(o,l)})}),r}const qh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Gh="6";try{window.__reactRouterVersion=Gh}catch{}const Qh="startTransition",Ts=Ip[Qh];function Kh(e){let{basename:t,children:r,future:i,window:o}=e,l=y.useRef();l.current==null&&(l.current=Xf({window:o,v5Compat:!0}));let a=l.current,[s,c]=y.useState({action:a.action,location:a.location}),{v7_startTransition:d}=i||{},m=y.useCallback(p=>{d&&Ts?Ts(()=>c(p)):c(p)},[c,d]);return y.useLayoutEffect(()=>a.listen(m),[a,m]),y.useEffect(()=>Fh(i),[i]),y.createElement(_h,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:a,future:i})}const Xh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ie=y.forwardRef(function(t,r){let{onClick:i,relative:o,reloadDocument:l,replace:a,state:s,target:c,to:d,preventScrollReset:m,viewTransition:p}=t,f=Hh(t,qh),{basename:x}=y.useContext(Gt),j,b=!1;if(typeof d=="string"&&Jh.test(d)&&(j=d,Xh))try{let g=new URL(window.location.href),v=d.startsWith("//")?new URL(g.protocol+d):new URL(d),k=ha(v.pathname,x);v.origin===g.origin&&k!=null?d=k+v.search+v.hash:b=!0}catch{}let S=kh(d,{relative:o}),h=Zh(d,{replace:a,state:s,target:c,preventScrollReset:m,relative:o,viewTransition:p});function u(g){i&&i(g),g.defaultPrevented||h(g)}return y.createElement("a",ml({},f,{href:j||S,onClick:b||l?i:u,ref:r,target:c}))});var As;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(As||(As={}));var Ws;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ws||(Ws={}));function Zh(e,t){let{target:r,replace:i,state:o,preventScrollReset:l,relative:a,viewTransition:s}=t===void 0?{}:t,c=lp(),d=En(),m=ap(e,{relative:a});return y.useCallback(p=>{if(Vh(p,r)){p.preventDefault();let f=i!==void 0?i:Ci(d)===Ci(m);c(e,{replace:f,state:o,preventScrollReset:l,relative:a,viewTransition:s})}},[d,c,m,i,o,r,e,l,a,s])}function em(e){let t=y.useRef(gl(e)),r=y.useRef(!1),i=En(),o=y.useMemo(()=>$h(i.search,r.current?null:t.current),[i.search]),l=lp(),a=y.useCallback((s,c)=>{const d=gl(typeof s=="function"?s(o):s);r.current=!0,l("?"+d,c)},[l,o]);return[o,a]}const tm=()=>{const[e,t]=y.useState(!1),[r,i]=y.useState(null),o=()=>{t(!e),i(null)};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff;
          font-size: 1.8rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: color 0.3s ease;
        }

        .mobile-menu-toggle:hover {
          color: #4a9eff;
        }

        /* Desktop hover functionality */
        @media (min-width: 1024px) {
          .dropdown {
            position: relative;
          }

          .dropdown-content {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: #2a2c2e;
            min-width: 200px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            z-index: 1000;
            margin-top: 0;
          }

          .dropdown:hover .dropdown-content {
            display: block;
          }

          .dropdown-content a {
            display: block;
            padding: 0.8rem 1.5rem;
            color: #fff;
            text-decoration: none;
            transition: background-color 0.2s ease;
            white-space: nowrap;
          }

          .dropdown-content a:hover {
            background-color: #3a3c3e;
          }
        }

        @media (max-width: 1023px) {
          .mobile-menu-toggle {
            display: block;
            position: absolute;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1001;
          }

          .nav-container {
            position: relative;
            min-height: 80px;
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

          .dropdown.active .dropdown-content {
            display: block;
            max-height: 1000px;
          }

          .nav-menu > li > a {
            padding: 1rem 5%;
          }

          .dropdown-content {
            animation: none;
          }

          .dropdown-content a {
            padding: 0.8rem 8%;
          }
        }

        @media (max-width: 767px) {
          .mobile-menu-toggle {
            font-size: 2rem;
          }

          .nav-menu > li > a {
            font-size: 1rem;
            padding: 1.2rem 6%;
          }

          .dropdown-content a {
            padding: 1rem 10%;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 479px) {
          .mobile-menu-toggle {
            font-size: 1.8rem;
            right: 4%;
          }

          .nav-menu > li > a {
            padding: 1.3rem 5%;
          }
        }
          

        /* Logo text styling */
        .logo-text {
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          text-decoration: none;
        }
          /* Navigation menu items */
          .nav-menu li a {
            font-size: 1rem; /* adjust as needed */
            font-weight: 500;
          } 
      `}),n.jsx("nav",{children:n.jsxs("div",{className:"nav-container",children:[n.jsx(ie,{to:"/",className:"logo-text",children:"Evergreen Motors"}),n.jsx("button",{className:"mobile-menu-toggle",onClick:o,"aria-label":"Toggle menu","aria-expanded":e,children:e?"✕":"☰"}),n.jsxs("ul",{className:"nav-menu",children:[n.jsxs("li",{className:"dropdown",children:[n.jsx(ie,{to:"/models",children:"Models"}),n.jsxs("div",{className:"dropdown-content",children:[n.jsx(ie,{to:"/models/dolphin-mini",onClick:()=>t(!1),children:"Dolphin Mini"}),n.jsx(ie,{to:"/models/atto-3",onClick:()=>t(!1),children:"Atto 3"}),n.jsx(ie,{to:"/models/seal-u",onClick:()=>t(!1),children:"Seal U"}),n.jsx(ie,{to:"/models/tang-l",onClick:()=>t(!1),children:"Tang L"}),n.jsx(ie,{to:"/models/han",onClick:()=>t(!1),children:"Han"}),n.jsx(ie,{to:"/models/seal",onClick:()=>t(!1),children:"Seal"})]})]}),n.jsx("li",{children:n.jsx(ie,{to:"/about",onClick:()=>t(!1),children:"About"})}),n.jsx("li",{children:n.jsx(ie,{to:"/technology",onClick:()=>t(!1),children:"Technology"})}),n.jsx("li",{children:n.jsx(ie,{to:"/purchasing",onClick:()=>t(!1),children:"Purchasing"})}),n.jsx("li",{children:n.jsx(ie,{to:"/ownership",onClick:()=>t(!1),children:"Ownership"})}),n.jsx("li",{children:n.jsx(ie,{to:"/test-drive",onClick:()=>t(!1),children:"Test Drive"})})]}),n.jsx("div",{className:"nav-container"})]})})]})},nm=()=>{const[e,t]=y.useState(null),r={Models:[{label:"BYD DOLPHIN SURF",href:"/electric-cars/dolphin-surf"},{label:"BYD DOLPHIN",href:"/electric-cars/dolphin"},{label:"BYD ATTO 2",href:"/electric-cars/atto-2"},{label:"BYD ATTO 3",href:"/electric-cars/atto3"},{label:"BYD SEAL",href:"/electric-cars/seal"},{label:"BYD SEAL U DM-i",href:"/hybrid-cars/seal-u-dm-i"},{label:"BYD SEALION 7",href:"/electric-cars/sealion-7"}],"About BYD":[{label:"About BYD",href:"/about"},{label:"News",href:"/news-list"}],Technology:[{label:"Super DM",href:"/technology/super-dm"}],Purchasing:[{label:"Test Drive",href:"/test-drive"},{label:"Find a BYD Store",href:"/find-store"},{label:"PCP Offers",href:"/purchase/pcp-uk"},{label:"Motability",href:"/purchase/motability"}],Ownership:[{label:"Service Maintenance",href:"/service-maintenance"},{label:"BYD Assistance",href:"/assistance"}]},i=l=>({width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"50%",fontSize:"1.1rem",transition:"all 0.3s ease",textDecoration:"none",color:e===l?"#fff":"rgba(255,255,255,0.7)",borderColor:e===l?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)",transform:e===l?"scale(1.1)":"scale(1)",cursor:"pointer"}),o=l=>({color:e===l?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.6)",textDecoration:"none",fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"0.875rem",transition:"color 0.3s ease",cursor:"pointer"});return n.jsx("footer",{style:{background:"#252728",color:"#fff",padding:0,margin:0},children:n.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto",padding:"4rem 2rem"},children:[n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"2rem",marginBottom:"3rem"},children:Object.entries(r).map(([l,a])=>n.jsxs("div",{children:[n.jsx("h3",{style:{fontWeight:600,fontSize:"1.125rem",marginBottom:"1rem",color:"rgba(255,255,255,0.9)",fontFamily:"system-ui, -apple-system, sans-serif"},children:l}),n.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:a.map(s=>n.jsx("li",{style:{marginBottom:"0.5rem"},children:n.jsx("a",{href:s.href,style:o(s.label),onMouseEnter:()=>t(s.label),onMouseLeave:()=>t(null),children:s.label})},s.label))})]},l))}),n.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:"2rem",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"2rem"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem",flexWrap:"wrap"},children:[n.jsx("span",{style:{color:"rgba(255,255,255,0.7)",fontFamily:"system-ui, -apple-system, sans-serif",fontWeight:400,fontSize:"0.9rem",textTransform:"uppercase",letterSpacing:"1px"},children:"FOLLOW US"}),n.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[n.jsx("a",{href:"#",style:i("facebook"),onMouseEnter:()=>t("facebook"),onMouseLeave:()=>t(null),"aria-label":"Facebook",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),n.jsx("a",{href:"#",style:i("twitter"),onMouseEnter:()=>t("twitter"),onMouseLeave:()=>t(null),"aria-label":"X",children:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),n.jsx("a",{href:"#",style:i("instagram"),onMouseEnter:()=>t("instagram"),onMouseLeave:()=>t(null),"aria-label":"Instagram",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),n.jsx("a",{href:"#",style:i("tiktok"),onMouseEnter:()=>t("tiktok"),onMouseLeave:()=>t(null),"aria-label":"TikTok",children:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"})})}),n.jsx("a",{href:"#",style:i("youtube"),onMouseEnter:()=>t("youtube"),onMouseLeave:()=>t(null),"aria-label":"YouTube",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})})]})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1.5rem",fontSize:"0.875rem"},children:[n.jsx("a",{href:"/privacy",style:o("privacy-link"),onMouseEnter:()=>t("privacy-link"),onMouseLeave:()=>t(null),children:"Privacy Policy"}),n.jsx("a",{href:"/terms",style:o("terms-link"),onMouseEnter:()=>t("terms-link"),onMouseLeave:()=>t(null),children:"Terms of Use"}),n.jsx("a",{href:"/cookies",style:o("cookies-link"),onMouseEnter:()=>t("cookies-link"),onMouseLeave:()=>t(null),children:"Cookies"}),n.jsx("a",{href:"/contact",style:o("contact-link"),onMouseEnter:()=>t("contact-link"),onMouseLeave:()=>t(null),children:"Contact"})]})]}),n.jsx("div",{style:{textAlign:"center",fontSize:"0.85rem",color:"rgba(255,255,255,0.5)",marginTop:"2rem",fontFamily:"system-ui, -apple-system, sans-serif",fontWeight:300},children:"© BYD Europe B.V. All rights reserved."})]})})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),im=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,i)=>i?i.toUpperCase():r.toLowerCase()),Ps=e=>{const t=im(e);return t.charAt(0).toUpperCase()+t.slice(1)},pp=(...e)=>e.filter((t,r,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===r).join(" ").trim(),om=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:a,...s},c)=>y.createElement("svg",{ref:c,...lm,width:t,height:t,stroke:e,strokeWidth:i?Number(r)*24/Number(t):r,className:pp("lucide",o),...!l&&!om(s)&&{"aria-hidden":"true"},...s},[...a.map(([d,m])=>y.createElement(d,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(e,t)=>{const r=y.forwardRef(({className:i,...o},l)=>y.createElement(am,{ref:l,iconNode:t,className:pp(`lucide-${rm(Ps(e))}`,`lucide-${e}`,i),...o}));return r.displayName=Ps(e),r};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],cm=ue("calendar",sm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Mn=ue("check",dm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],um=ue("chevron-down",pm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],xl=ue("chevron-left",fm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],yl=ue("chevron-right",hm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],gm=ue("circle-alert",mm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Xt=ue("circle-check-big",xm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],vl=ue("clock",ym);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],bm=ue("credit-card",vm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],wm=ue("external-link",jm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Xn=ue("map-pin",Sm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],up=ue("navigation",km);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],zm=ue("phone",Cm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Em=ue("shield",Bm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Nm=ue("wrench",Dm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Am=ue("x",Tm);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ei=ue("zap",Wm),re=[{id:1,name:"ATTO 2",type:"electric",images:["/models/BYD-ATTO-2/BYD_ATTO_2.jpg","/models/BYD-ATTO-2/BYD_ATTO_2_side.jpg","/models/BYD-ATTO-2/BYD_ATTO_2_interior.jpg","/models/BYD-ATTO-2/Banner.avif"],videos:["/videos/BYD-ATTO-2/Overview.mp4","/videos/BYD-ATTO-2/Drive.mp4"]},{id:2,name:"DOLPHIN SURF",type:"electric",images:["/models/BYD-DOLPHIN-SURF/BYD-DOLPHIN-SURF.webp","/models/BYD-DOLPHIN-SURF/BYD-DOLPHIN-SURF_side.webp","/models/BYD-DOLPHIN-SURF/BYD-DOLPHIN-SURF_interior.webp","/models/BYD-DOLPHIN-SURF/Banner.webp"],videos:["/videos/BYD-DOLPHIN-SURF/Overview.mp4","/videos/BYD-DOLPHIN-SURF/TestDrive.mp4"]},{id:3,name:"SEALION 7",type:"electric",images:["/models/BYD-SEALION-7/BYD-SEALION-7.webp","/models/BYD-SEALION-7/BYD-SEALION-7_side.webp","/models/BYD-SEALION-7/BYD-SEALION-7_interior.webp","/models/BYD-SEALION-7/Banner.jpg"],videos:["/videos/BYD-SEALION-7/Overview.mp4","/videos/BYD-SEALION-7/Drive.mp4"]},{id:4,name:"SEAL U DM-i",type:"hybrid",images:["/models/BYD-SEAL-U-DM-i/BYD-SEAL-U-DM-i.webp","/models/BYD-SEAL-U-DM-i/BYD-SEAL-U-DM-i_side.webp","/models/BYD-SEAL-U-DM-i/BYD-SEAL-U-DM-i_interior.webp","/models/BYD-SEAL-U-DM-i/Banner.jpg"],videos:["/videos/BYD-SEAL-U-DM-i/Overview.mp4","/videos/BYD-SEAL-U-DM-i/TestDrive.mp4"]},{id:5,name:"SEAL",type:"electric",images:["/models/BYD-SEAL/BYD-SEAL.webp","/models/BYD-SEAL/BYD-SEAL_side.webp","/models/BYD-SEAL/BYD-SEAL_interior.webp","/models/BYD-SEAL/Banner.webp"],videos:["/videos/BYD-SEAL/Overview.mp4"]},{id:6,name:"ATTO 3",type:"electric",images:["/models/BYD-ATTO3/BYD-ATTO3.webp","/models/BYD-ATTO3/BYD-ATTO3_side.webp","/models/BYD-ATTO3/BYD-ATTO3_interior.webp","/models/BYD-ATTO3/Banner.jpg"],videos:["/videos/BYD-ATTO3/Overview.mp4"]},{id:7,name:"DOLPHIN",type:"electric",images:["/models/BYD-DOLPHIN/BYD-DOLPHIN.webp","/models/BYD-DOLPHIN/BYD-DOLPHIN_side.webp","/models/BYD-DOLPHIN/BYD-DOLPHIN_interior.webp","/models/BYD-DOLPHIN/Banner.jpg"],videos:["/videos/BYD-DOLPHIN/Overview.mp4"]}],Pm=({posts:e,initialIndex:t,isOpen:r,onClose:i})=>{const[o,l]=y.useState(t),[a,s]=y.useState(0),c=y.useRef(null);y.useEffect(()=>{l(t),s(0)},[t]),y.useEffect(()=>{if(!r)return;const b=S=>{S.key==="Escape"&&i(),S.key==="ArrowLeft"&&m(),S.key==="ArrowRight"&&d()};return window.addEventListener("keydown",b),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",b),document.body.style.overflow="unset"}},[r,o,a]),y.useEffect(()=>{c.current&&x.type==="video"&&c.current.play()},[o,a]);const d=()=>{const b=e[o];a<b.media.length-1?s(S=>S+1):(l(S=>(S+1)%e.length),s(0))},m=()=>{if(a>0)s(b=>b-1);else{const b=(o-1+e.length)%e.length;l(b),s(e[b].media.length-1)}},p=b=>{s(b)};if(!r)return null;const f=e[o],x=f.media[a],j=f.media.length>1;return n.jsxs("div",{className:"instagram-lightbox-overlay",onClick:i,children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"instagram-lightbox-container",onClick:b=>b.stopPropagation(),children:[n.jsx("button",{className:"instagram-lightbox-close",onClick:i,"aria-label":"Close",children:n.jsx(Am,{size:24,color:"#000"})}),n.jsxs("div",{className:"instagram-lightbox-counter",children:[o+1," / ",e.length,j&&` • ${a+1}/${f.media.length}`]}),n.jsx("button",{className:"instagram-lightbox-nav instagram-lightbox-nav-left",onClick:m,"aria-label":"Previous",children:n.jsx(xl,{size:28,color:"#000"})}),n.jsx("button",{className:"instagram-lightbox-nav instagram-lightbox-nav-right",onClick:d,"aria-label":"Next",children:n.jsx(yl,{size:28,color:"#000"})}),n.jsxs("div",{className:"instagram-lightbox-media",children:[x.type==="image"?n.jsx("img",{src:x.url,alt:f.alt}):n.jsx("video",{ref:c,src:x.url,controls:!0,autoPlay:!0,loop:!0,playsInline:!0}),j&&n.jsx("div",{className:"instagram-media-indicators",children:f.media.map((b,S)=>n.jsx("div",{className:`instagram-media-dot ${S===a?"active":""}`,onClick:()=>p(S)},S))})]}),n.jsxs("div",{className:"instagram-lightbox-sidebar",children:[n.jsxs("div",{className:"instagram-lightbox-header",children:[n.jsx("div",{className:"instagram-lightbox-avatar",children:"B"}),n.jsx("div",{className:"instagram-lightbox-username",children:"BYD.UK"})]}),n.jsx("div",{className:"instagram-lightbox-caption-area",children:n.jsxs("div",{className:"instagram-lightbox-caption",children:[n.jsx("strong",{children:"BYD.UK"}),f.caption]})}),n.jsx("div",{className:"instagram-lightbox-footer",children:n.jsxs("a",{href:f.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"instagram-view-original",children:[n.jsx(wm,{size:16}),"View on Instagram"]})})]})]})]})},Rs=[{id:1,media:[{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Experience the future of electric driving with BYD. #BYDUK #ElectricVehicle",instagramUrl:"https://www.instagram.com/p/DKNEAizuiLo/",alt:"BYD vehicle exterior shot"},{id:2,media:[{type:"image",url:"/Home/instagram/post1.jpg"},{type:"image",url:"/Home/instagram/post1.jpg"},{type:"video",url:"/Home/instagram/post2.mp4",thumbnailUrl:"/Home/instagram/post1.jpg"},{type:"image",url:"/Home/instagram/post1.jpg"},{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Our latest showcase with 5 amazing shots! Swipe to see them all. #BYDShowcase",instagramUrl:"https://www.instagram.com/p/ABC123/",alt:"BYD showcase carousel"},{id:3,media:[{type:"video",url:"/Home/instagram/post2.mp4",thumbnailUrl:"/Home/instagram/post1.jpg"}],caption:"Innovative technology at your fingertips. #BYDTech #Innovation",instagramUrl:"https://www.instagram.com/p/XYZ789/",alt:"BYD dashboard technology"},{id:4,media:[{type:"image",url:"/Home/instagram/post1.jpg"},{type:"image",url:"/Home/instagram/post1.jpg"},{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Join us at the BYD showcase event! Three perspectives. #BYDEvent #Community",instagramUrl:"https://www.instagram.com/p/DEF456/",alt:"BYD event showcase"},{id:5,media:[{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Sleek design meets sustainability. #BYDDesign #Sustainable",instagramUrl:"https://www.instagram.com/p/GHI789/",alt:"BYD vehicle detail shot"},{id:6,media:[{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"The road ahead is electric. #ElectricFuture #BYD",instagramUrl:"https://www.instagram.com/p/JKL012/",alt:"BYD on the road"},{id:7,media:[{type:"video",url:"/Home/instagram/post2.mp4",thumbnailUrl:"/Home/instagram/post1.jpg"},{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Discover the BYD Dolphin. Video + photo combo! #BYDDolphin",instagramUrl:"https://www.instagram.com/p/MNO345/",alt:"BYD Dolphin showcase"},{id:8,media:[{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Charging into the future. #ElectricCharging #BYD",instagramUrl:"https://www.instagram.com/p/PQR678/",alt:"BYD charging station"},{id:9,media:[{type:"image",url:"/Home/instagram/post1.jpg"}],caption:"Premium comfort, zero emissions. #LuxuryEV #BYD",instagramUrl:"https://www.instagram.com/p/STU901/",alt:"BYD interior"}],Ls={1:3,2:3,3:3,4:3,5:3,6:3,7:3},yo={1:"Electric Compact SUV",2:"Electric Hatchback",3:"Electric SUV",4:"Hybrid SUV",5:"Electric Sedan",6:"Electric Compact SUV",7:"Electric Hatchback"},Rm=()=>{const[e,t]=y.useState(!1),[r,i]=y.useState(0),o=T=>{i(T),t(!0)},[l,a]=y.useState(0),[s,c]=y.useState(!1),[d,m]=y.useState(Date.now()),[p,f]=y.useState("right"),[x,j]=y.useState(re.length),[b,S]=y.useState(0),[h,u]=y.useState(!1),g=2,v=[...re,...re,...re],k=()=>{s||(c(!0),f("right"),a(T=>(T+1)%re.length),setTimeout(()=>c(!1),300))},D=()=>{s||(c(!0),f("left"),a(T=>(T-1+re.length)%re.length),m(Date.now()),setTimeout(()=>c(!1),300))},E=()=>{k(),m(Date.now())},N=T=>{!s&&T!==l&&(c(!0),f(T>l?"right":"left"),a(T),m(Date.now()),setTimeout(()=>c(!1),300))};y.useEffect(()=>{const T=setInterval(()=>{Date.now()-d>=5e3&&(k(),m(Date.now()))},5e3);return()=>clearInterval(T)},[d]),y.useEffect(()=>{const T=setInterval(()=>{S(I=>(I+1)%9)},3e3);return()=>clearInterval(T)},[]);const O=()=>{h||(u(!0),j(T=>T+1))},W=()=>{h||(u(!0),j(T=>T-1))};y.useEffect(()=>{if(!h)return;const T=setTimeout(()=>{const I=Math.floor(x/re.length),B=x%re.length;if(I===0||I===2){const _=re.length+B;j(_),requestAnimationFrame(()=>{setTimeout(()=>{u(!1)},50)})}else u(!1)},600);return()=>clearTimeout(T)},[x,h,re.length]);const ae=re[l];Ls[ae.id],yo[ae.id];const Xe=()=>{if(!selectedModel){setShowModelError(!0);return}if(!selectedDate){setShowDateError(!0);return}if(!selectedTime){setShowTimeError(!0);return}if(!formData.firstName||!formData.lastName||!formData.email||!formData.phone){alert("Please fill in all required fields");return}alert("Booking request submitted!")};return n.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[n.jsx("style",{children:`
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
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          background: white;
        }

        .model-button {
          font-family: 'Montserrat', sans-serif;
          padding: 18px 28px;
          font-size: 0.7rem;
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
      `}),n.jsxs("div",{className:"hero-carousel",children:[re.map((T,I)=>{const B=Ls[T.id]||0,_=yo[T.id]||"";let xe="carousel-slide";return I===l?xe+=" active":p==="right"&&I===(l-1+re.length)%re.length||p==="left"&&I===(l+1)%re.length?xe+=p==="right"?" prev":" next":xe+=I<l?" prev":" next",n.jsxs("div",{className:xe,children:[n.jsx("img",{src:T.images[B],alt:T.name,className:"slide-background"}),n.jsx("div",{className:"slide-overlay"}),I===l&&n.jsxs("div",{className:"slide-content",children:[n.jsx("h1",{className:"model-name",children:T.name}),n.jsx("p",{className:"model-description",children:_})]})]},T.id)}),n.jsx("button",{className:"nav-arrow nav-arrow-left",onClick:D,children:n.jsx(xl,{size:24})}),n.jsx("button",{className:"nav-arrow nav-arrow-right",onClick:E,children:n.jsx(yl,{size:24})}),n.jsxs("div",{className:"hero-carousel-controls",children:[n.jsx("a",{href:`/models/${ae.name.toLowerCase().replace(/\s+/g,"-")}`,className:"hero-carousel-button",children:"Learn More"}),n.jsx("a",{href:"/test-drive",className:"hero-carousel-button",children:"Test Drive"}),n.jsx("a",{href:"/offers",className:"hero-carousel-button",children:"Offers"})]}),n.jsx("div",{className:"carousel-indicators",children:re.map((T,I)=>n.jsx("div",{className:`indicator-dot ${I===l?"active":""}`,onClick:()=>N(I)},I))})]}),n.jsx("section",{className:"models-section",children:n.jsxs("div",{className:"models-container",children:[n.jsx("h2",{className:"models-title",children:"Models"}),n.jsxs("div",{className:"models-carousel-wrapper",children:[n.jsxs("div",{className:"models-carousel-controls",children:[n.jsx("button",{className:"models-carousel-arrow",onClick:W,"aria-label":"Previous",children:n.jsx(xl,{size:28})}),n.jsx("button",{className:"models-carousel-arrow",onClick:O,"aria-label":"Next",children:n.jsx(yl,{size:28})})]}),n.jsx("div",{className:"models-carousel-track",style:{transform:`translateX(calc(25% - ${x*(100/g)}%))`,transition:h?"transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)":"none"},children:v.map((T,I)=>n.jsxs("div",{className:"model-card",children:[n.jsxs("div",{className:"model-card-header",children:[T.id%2===1&&n.jsx("div",{className:"offer-badge",children:"Offer Available →"}),n.jsx("h3",{className:"model-card-title",children:T.name}),n.jsx("p",{className:"model-card-description",children:yo[T.id]})]}),n.jsx("img",{src:T.images[0],alt:T.name,className:"model-card-image"}),n.jsxs("div",{className:"model-card-buttons",children:[n.jsx("button",{className:"model-button",children:"Learn More"}),n.jsx("button",{className:"model-button",children:"Test Drive"}),n.jsx("button",{className:"model-button full-width",children:"Range Calculator"})]})]},`${T.id}-${I}`))})]})]})}),n.jsxs("section",{className:"electric-section",children:[n.jsxs("div",{className:"electric-content",children:[n.jsx("h2",{className:"electric-title",children:"Electric Cars"}),n.jsx("p",{className:"electric-description",children:"At BYD, our electric vehicles are different; our industry-leading battery technology marries perfectly with innovative design to create a range of EVs that are as safe as they are luxurious. Time to upgrade? Discover our available models today."}),n.jsx("button",{className:"electric-button",onClick:()=>window.location.href="/electric-cars",children:"Learn More"})]}),n.jsx("div",{children:n.jsx("img",{src:"/Home/ElectricCars.jpg",alt:"BYD Electric Car Charging",className:"electric-image"})})]}),n.jsx("section",{className:"community-section",children:n.jsxs("div",{className:"community-container",children:[n.jsx("h2",{className:"community-title",children:"Our BYD Community"}),n.jsx("p",{className:"community-subtitle",children:"Share your BYD with us via social media by tagging @BYD.UK & using #BYDUK for a chance to feature across our website and social channels."}),n.jsx("div",{className:"instagram-grid",children:Rs.map((T,I)=>{const B=T.media.length>1,_=T.media[0];return n.jsxs("div",{className:`instagram-item ${_.type==="video"?"video-item":""}`,onClick:()=>o(I),style:{transform:I===b?"scale(1.02)":"scale(1)",transition:"transform 0.5s ease",zIndex:I===b?2:1,cursor:"pointer"},children:[_.type==="image"?n.jsx("img",{src:_.url,alt:T.alt}):n.jsx("video",{src:_.url,poster:_.thumbnailUrl,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),B&&n.jsx("div",{className:"instagram-carousel-icon",children:n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"white",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"},children:[n.jsx("rect",{x:"3",y:"5",width:"9",height:"14",rx:"1",fill:"white",opacity:"0.8"}),n.jsx("rect",{x:"12",y:"5",width:"9",height:"14",rx:"1",fill:"white"})]})}),n.jsx("div",{className:"instagram-icon",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"#1a1a1a",children:n.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})]},T.id)})})]})}),n.jsx(Pm,{posts:Rs,initialIndex:r,isOpen:e,onClose:()=>t(!1)},e?r:"closed"),n.jsxs("section",{className:"contact-section",children:[n.jsxs("div",{className:"contact-form-wrapper",children:[n.jsx("h2",{className:"contact-title",children:"Contact us"}),n.jsxs("form",{onSubmit:T=>{T.preventDefault()},children:[n.jsxs("div",{className:"form-row",children:[n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",className:"form-input",placeholder:"First Name*",required:!0})}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",className:"form-input",placeholder:"Last Name*",required:!0})})]}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"email",className:"form-input",placeholder:"Email*",required:!0})}),n.jsx("div",{className:"form-group",children:n.jsxs("div",{className:"phone-input-group",children:[n.jsxs("select",{className:"form-select",children:[n.jsx("option",{children:"+44"}),n.jsx("option",{children:"+1"}),n.jsx("option",{children:"+91"})]}),n.jsx("input",{type:"tel",className:"form-input",placeholder:"07400 123456*",required:!0})]})}),n.jsx("div",{className:"form-group",children:n.jsxs("select",{className:"form-select",required:!0,children:[n.jsx("option",{value:"",children:"Model of Interest*"}),re.map(T=>n.jsx("option",{value:T.name,children:T.name},T.id))]})}),n.jsx("div",{className:"form-group",children:n.jsx("select",{className:"form-select",required:!0,children:n.jsx("option",{value:"",children:"Post Code*"})})}),n.jsx("div",{className:"form-group",children:n.jsxs("select",{className:"form-select",required:!0,children:[n.jsx("option",{value:"",children:"How can we help you?*"}),n.jsx("option",{children:"Test Drive"}),n.jsx("option",{children:"Purchase Inquiry"}),n.jsx("option",{children:"General Question"}),n.jsx("option",{children:"Service Inquiry"})]})}),n.jsx("button",{onClick:Xe,className:"submit-button",children:"Submit"})]})]}),n.jsx("div",{children:n.jsx("img",{src:"/Home/Contact.jpg",alt:"BYD Electric Car",className:"contact-image"})})]}),n.jsxs("section",{className:"map-section",children:[n.jsx("h2",{className:"map-title",children:"Our Location"}),n.jsx("div",{className:"map-container",children:n.jsx("iframe",{src:"https://maps.google.com/maps?q=21.795800671508836,-72.18088702512645&t=&z=13&ie=UTF8&iwloc=&output=embed",allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"BYD Location Map"})})]})]})},Lm=()=>{y.useEffect(()=>{const t={threshold:.1,rootMargin:"0px 0px -100px 0px"},r=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&o.target.classList.add("fade-in-visible")})},t);return document.querySelectorAll(".fade-in-section").forEach(i=>r.observe(i)),()=>r.disconnect()},[]);const e=[{id:"dolphin-mini",name:"Dolphin Mini",description:"Compact elegance meets urban efficiency in this perfectly sized city electric vehicle",type:"City Electric",image:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000",price:"Starting at $28,990",range:"250 miles",acceleration:"7.5s 0-60mph"},{id:"atto-3",name:"Atto 3",description:"The benchmark electric SUV featuring e-Platform 3.0 technology and exceptional versatility",type:"Electric SUV",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",price:"Starting at $38,990",range:"260 miles",acceleration:"7.3s 0-60mph"},{id:"seal-u",name:"Seal U",description:"Premium electric sedan where sophisticated design meets exhilarating performance",type:"Luxury Sedan",image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",price:"Starting at $48,990",range:"354 miles",acceleration:"3.8s 0-60mph"},{id:"tang-l",name:"Tang L",description:"Spacious luxury with three rows of premium comfort and cutting-edge technology",type:"7-Seater SUV",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",price:"Starting at $58,990",range:"323 miles",acceleration:"4.4s 0-60mph"},{id:"han",name:"Han",description:"Flagship luxury sedan combining breathtaking design with uncompromising performance",type:"Executive Sedan",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",price:"Starting at $54,990",range:"379 miles",acceleration:"3.9s 0-60mph"},{id:"seal",name:"Seal",description:"Athletic performance sedan with ocean-inspired design and track-ready dynamics",type:"Performance Sedan",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",price:"Starting at $44,990",range:"310 miles",acceleration:"3.6s 0-60mph"}];return n.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .models-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
                      url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
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
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
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
          font-weight: 300;
          letter-spacing: 1px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
          max-width: 900px;
          margin: 0 auto;
        }

        .models-section {
          padding: 8rem 5%;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
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
          color: #ffffff;
        }

        .models-intro p {
          font-size: 1.3rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 2;
          color: rgba(255, 255, 255, 0.8);
        }

        .luxury-models-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 4rem;
          max-width: 1600px;
          margin: 0 auto;
        }

        .luxury-model-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
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
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: 1;
        }

        .luxury-model-card:hover::before {
          opacity: 1;
        }

        .luxury-model-card:hover {
          transform: translateY(-20px);
          box-shadow: 0 30px 80px rgba(74, 158, 255, 0.4);
          border-color: rgba(74, 158, 255, 0.5);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 100%);
        }

        .model-image-container {
          width: 100%;
          height: 350px;
          overflow: hidden;
          position: relative;
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

        .luxury-model-info {
          padding: 3rem;
          position: relative;
          z-index: 2;
        }

        .luxury-model-name {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 4px;
          color: #ffffff;
        }

        .luxury-model-description {
          font-size: 1.1rem;
          line-height: 1.9;
          color: rgba(255,255,255,0.75);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .model-specs {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .spec-item {
          flex: 1;
        }

        .spec-label {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .spec-value {
          font-size: 1.1rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .model-price {
          font-size: 1.5rem;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          margin-bottom: 2rem;
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
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}),n.jsx("div",{className:"models-hero",children:n.jsxs("div",{className:"models-hero-content",children:[n.jsx("h1",{children:"OUR COLLECTION"}),n.jsx("p",{className:"subtitle",children:"Electric Excellence"}),n.jsx("p",{children:"Discover the pinnacle of electric vehicle innovation. Each BYD model in our collection represents the perfect fusion of cutting-edge technology, sustainable design, and luxurious comfort."})]})}),n.jsxs("section",{className:"models-section fade-in-section",children:[n.jsxs("div",{className:"models-intro",children:[n.jsx("h2",{children:"The Future of Mobility"}),n.jsx("p",{children:"At Evergreen Motors, we offer an exceptional range of BYD electric vehicles — each engineered to perfection, designed to inspire, and built to transform the way you drive. Experience the difference that true innovation makes."})]}),n.jsx("div",{className:"luxury-models-grid",children:e.map(t=>n.jsxs(ie,{to:`/models/${t.id}`,className:"luxury-model-card",children:[n.jsxs("div",{className:"model-image-container",children:[n.jsx("img",{src:t.image,alt:t.name}),n.jsx("div",{className:"model-type-badge",children:t.type})]}),n.jsxs("div",{className:"luxury-model-info",children:[n.jsx("h3",{className:"luxury-model-name",children:t.name}),n.jsx("p",{className:"luxury-model-description",children:t.description}),n.jsxs("div",{className:"model-specs",children:[n.jsxs("div",{className:"spec-item",children:[n.jsx("div",{className:"spec-label",children:"Range"}),n.jsx("div",{className:"spec-value",children:t.range})]}),n.jsxs("div",{className:"spec-item",children:[n.jsx("div",{className:"spec-label",children:"0-60 MPH"}),n.jsx("div",{className:"spec-value",children:t.acceleration})]})]}),n.jsx("div",{className:"model-price",children:t.price}),n.jsx("span",{className:"luxury-learn-more",children:"Explore Model"})]})]},t.id))})]})]})},Mm=()=>{const{modelId:e}=zh(),[t,r]=y.useState(0);y.useEffect(()=>{window.scrollTo(0,0)},[e]);const o={"dolphin-mini":{id:"dolphin-mini",name:"Dolphin Mini",tagline:"Urban Sophistication Reimagined",description:"The Dolphin Mini represents the perfect harmony of compact design and electric efficiency. Engineered for city driving yet capable of longer journeys, this sophisticated city car delivers premium comfort, advanced technology, and exceptional range in a beautifully compact package.",type:"City Electric",images:[{url:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000",caption:"Exterior View"},{url:"https://images.unsplash.com/photo-1  503376780353-7e6692767b70?q=80&w=2000",caption:"Front Profile"},{url:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000",caption:"Interior Cabin"},{url:"https://images.unsplash.com/photo-1 542362567-b07e54358753?q=80&w=2000",caption:"Dashboard"},{url:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",caption:"Rear View"}],price:"Starting at $28,990",specs:{range:"250 miles",acceleration:"7.5s 0-60mph",topSpeed:"99 mph",motorPower:"150 kW",batteryCapacity:"44.9 kWh",chargingTime:"30 min (10-80%)",seating:"5 passengers",driveType:"Front-Wheel Drive"},features:["e-Platform 3.0 Architecture","Blade Battery Technology","Intelligent Cockpit System","Advanced Driver Assistance","Panoramic Sunroof","Premium Interior Materials","Wireless Phone Charging","LED Lighting System"],colors:[{name:"Pearl White",hex:"#f8f9fa"},{name:"Midnight Black",hex:"#1a1a1a"},{name:"Ocean Blue",hex:"#4a9eff"},{name:"Silver Mist",hex:"#c0c0c0"}],highlights:[{title:"Compact Excellence",description:"Perfect dimensions for urban navigation without sacrificing interior space or comfort",image:"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200"},{title:"Efficient Power",description:"Optimized electric motor delivers responsive performance with exceptional efficiency",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200"},{title:"Smart Technology",description:"Intuitive infotainment and connectivity keep you seamlessly connected",image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200"}]},"atto-3":{id:"atto-3",name:"Atto 3",tagline:"The Benchmark Electric SUV",description:"The Atto 3 sets new standards for electric SUVs with its perfect blend of practicality, performance, and cutting-edge technology. Built on BYD's revolutionary e-Platform 3.0, this versatile SUV offers exceptional range, sophisticated design, and an interior that redefines comfort and innovation.",type:"Electric SUV",images:[{url:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",caption:"Exterior View"},{url:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",caption:"Side Profile"},{url:"https://images.unsplash.com/photo-1549927681-0b673b8243ab?q=80&w=2000",caption:"Interior Cockpit"},{url:"https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000",caption:"Technology Features"},{url:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",caption:"Cargo Space"}],price:"Starting at $38,990",specs:{range:"260 miles",acceleration:"7.3s 0-60mph",topSpeed:"100 mph",motorPower:"150 kW",batteryCapacity:"60.5 kWh",chargingTime:"29 min (30-80%)",seating:"5 passengers",driveType:"Front-Wheel Drive"},features:["e-Platform 3.0 Technology","Blade Battery System","Panoramic Sky Window","Rotating Touchscreen Display","Voice-Activated Controls","Premium Sound System","Advanced Safety Suite","Wireless CarPlay & Android Auto"],colors:[{name:"Cosmos Black",hex:"#0a0a0a"},{name:"Surf Blue",hex:"#4a9eff"},{name:"Boulder Grey",hex:"#6c757d"},{name:"Parkour Red",hex:"#dc3545"}],highlights:[{title:"Spacious Versatility",description:"Generous cargo space and flexible seating configurations for every adventure",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200"},{title:"Advanced Safety",description:"Comprehensive suite of driver assistance systems for confident driving",image:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200"},{title:"Exceptional Range",description:"Travel further with confidence thanks to efficient battery technology",image:"https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?q=80&w=1200"}]},"seal-u":{id:"seal-u",name:"Seal U",tagline:"Premium Electric Sophistication",description:"The Seal U embodies the pinnacle of electric sedan luxury. With its stunning ocean-inspired design language, exhilarating performance, and advanced technology suite, this premium sedan delivers an uncompromising driving experience that seamlessly blends elegance with athletic capability.",type:"Luxury Sedan",images:[{url:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",caption:"Exterior View"},{url:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",caption:"Dynamic Profile"},{url:"https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000",caption:"Luxury Interior"},{url:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000",caption:"Premium Seats"},{url:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",caption:"Rear Detail"}],price:"Starting at $48,990",specs:{range:"354 miles",acceleration:"3.8s 0-60mph",topSpeed:"112 mph",motorPower:"390 kW",batteryCapacity:"82.5 kWh",chargingTime:"26 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["CTB Cell-to-Body Integration","Dual Motor AWD System","Adaptive Air Suspension","Premium Nappa Leather Interior","Head-Up Display","Dynaudio Sound System","Matrix LED Headlights","Advanced Climate Control"],colors:[{name:"Aurora Silver",hex:"#d4d4d4"},{name:"Deep Ocean Blue",hex:"#1e3a8a"},{name:"Quantum Grey",hex:"#4b5563"},{name:"Crystal White",hex:"#ffffff"}],highlights:[{title:"Athletic Performance",description:"Dual motors deliver exhilarating acceleration and dynamic handling",image:"https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200"},{title:"Luxurious Comfort",description:"Premium materials and meticulous craftsmanship throughout the cabin",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200"},{title:"Extended Range",description:"Travel over 350 miles on a single charge for ultimate peace of mind",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200"}]},"tang-l":{id:"tang-l",name:"Tang L",tagline:"Luxury Redefined for Seven",description:"The Tang L represents the ultimate expression of family luxury. This spacious three-row SUV combines cutting-edge electric technology with opulent comfort, offering seven passengers premium accommodations and an array of advanced features that make every journey extraordinary.",type:"7-Seater SUV",images:[{url:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",caption:"Exterior View"},{url:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",caption:"Bold Design"},{url:"https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000",caption:"Spacious Interior"},{url:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000",caption:"Third Row Seating"},{url:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",caption:"Technology Suite"}],price:"Starting at $58,990",specs:{range:"323 miles",acceleration:"4.4s 0-60mph",topSpeed:"112 mph",motorPower:"380 kW",batteryCapacity:"108.8 kWh",chargingTime:"30 min (30-80%)",seating:"7 passengers",driveType:"All-Wheel Drive"},features:["Three-Row Seating","Dual Motor Performance","Premium Quilted Leather","Panoramic Glass Roof","Individual Seat Climate Control","Premium Audio System","Gesture Control","Advanced Autopilot"],colors:[{name:"Imperial Red",hex:"#8b0000"},{name:"Graphite Black",hex:"#2d3436"},{name:"Champagne Gold",hex:"#d4af37"},{name:"Celestial White",hex:"#fafafa"}],highlights:[{title:"Seven-Seat Luxury",description:"Premium comfort for every passenger across three spacious rows",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200"},{title:"Powerful Performance",description:"Dual motors provide commanding power and confident handling",image:"https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200"},{title:"Advanced Technology",description:"Cutting-edge features and connectivity throughout",image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200"}]},han:{id:"han",name:"Han",tagline:"Executive Excellence",description:"The Han flagship sedan represents the apex of BYD's engineering prowess and design philosophy. This executive-class vehicle combines breathtaking aesthetics with phenomenal performance, offering a driving experience that rivals the world's most prestigious luxury sedans while delivering zero emissions.",type:"Executive Sedan",images:[{url:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",caption:"Exterior View"},{url:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",caption:"Elegant Profile"},{url:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000",caption:"Executive Interior"},{url:"https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000",caption:"Premium Craftsmanship"},{url:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",caption:"Aerodynamic Design"}],price:"Starting at $54,990",specs:{range:"379 miles",acceleration:"3.9s 0-60mph",topSpeed:"115 mph",motorPower:"380 kW",batteryCapacity:"85.4 kWh",chargingTime:"25 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["Dragon Face Design Language","Dual Motor Performance","Executive Rear Seating","Premium Leather Upholstery","Advanced Infotainment","Adaptive Cruise Control","Massage Function Seats","Ambient Lighting System"],colors:[{name:"Dynasty Black",hex:"#000000"},{name:"Sovereign Silver",hex:"#c0c0c0"},{name:"Royal Blue",hex:"#1e3a8a"},{name:"Prestige White",hex:"#ffffff"}],highlights:[{title:"Flagship Design",description:"Breathtaking aesthetics that command attention and respect",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=1200"},{title:"Executive Comfort",description:"First-class accommodations with premium materials throughout",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200"},{title:"Maximum Range",description:"Nearly 380 miles of range for long-distance confidence",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200"}]},seal:{id:"seal",name:"Seal",tagline:"Performance Unleashed",description:"The Seal performance sedan combines athletic design with exhilarating electric power. Inspired by the ocean's most agile creatures, this dynamic sedan delivers track-ready performance, stunning aesthetics, and advanced technology in a package that redefines what an electric sports sedan can be.",type:"Performance Sedan",images:[{url:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",caption:"Exterior View"},{url:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",caption:"Sport Profile"},{url:"https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000",caption:"Driver-Focused Cockpit"},{url:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000",caption:"Sport Seats"},{url:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",caption:"Dynamic Lines"}],price:"Starting at $44,990",specs:{range:"310 miles",acceleration:"3.6s 0-60mph",topSpeed:"112 mph",motorPower:"390 kW",batteryCapacity:"82.5 kWh",chargingTime:"26 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["Ocean Aesthetic Design","Dual Motor AWD","Sport-Tuned Suspension","Performance Braking System","Track Mode","Sport Seats","Digital Instrument Cluster","Launch Control"],colors:[{name:"Racing Blue",hex:"#0066cc"},{name:"Storm Grey",hex:"#6c757d"},{name:"Carbon Black",hex:"#1a1a1a"},{name:"Pearl White",hex:"#f8f9fa"}],highlights:[{title:"Thrilling Performance",description:"0-60mph in 3.6 seconds with dual motor all-wheel drive power",image:"https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200"},{title:"Dynamic Handling",description:"Sport-tuned suspension delivers precise, responsive handling",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200"},{title:"Track-Ready",description:"Performance modes and launch control for ultimate driving excitement",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200"}]}}[e||""];if(!o)return n.jsxs("div",{style:{padding:"10rem 5%",textAlign:"center"},children:[n.jsx("h1",{children:"Model not found"}),n.jsx(ie,{to:"/models",children:"← Back to Models"})]});const l=()=>{r(s=>(s+1)%o.images.length)},a=()=>{r(s=>(s-1+o.images.length)%o.images.length)};return n.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .model-detail-hero {
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: #000;
        }

        .carousel-container {
          position: absolute;
          inset: 0;
        }

        .carousel-image {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .carousel-image.active {
          opacity: 1;
        }

        .carousel-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7));
        }

        .carousel-controls {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 1rem;
        }

        .carousel-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.3);
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-button:hover {
          background: rgba(74, 158, 255, 0.5);
          border-color: #4a9eff;
          transform: scale(1.1);
        }

        .carousel-indicators {
          position: absolute;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 0.8rem;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .indicator.active {
          background: #4a9eff;
          border-color: white;
          transform: scale(1.3);
        }

        .image-caption {
          position: absolute;
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2rem;
          font-weight: 300;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: rgba(0,0,0,0.5);
          padding: 1rem 2rem;
          backdrop-filter: blur(10px);
        }

        .hero-detail-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          z-index: 5;
          max-width: 1000px;
          padding: 2rem;
        }

        .model-type-badge-hero {
          display: inline-block;
          background: rgba(74, 158, 255, 0.9);
          padding: 0.8rem 2rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .hero-detail-content h1 {
          font-size: 5.5rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 10px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.7);
        }

        .hero-tagline {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
        }

        .hero-price {
          font-size: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
        }

        .back-link {
          position: fixed;
          top: 120px;
          left: 5%;
          z-index: 100;
          color: white;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 1px;
          padding: 1rem 2rem;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background: rgba(74, 158, 255, 0.5);
          border-color: #4a9eff;
          transform: translateX(-5px);
        }

        .detail-section {
          padding: 8rem 5%;
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dark-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          color: white;
        }

        .light-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          color: #333;
        }

        .cta-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 8rem 5%;
          text-align: center;
        }

        .section-container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
        }

        .section-title {
          font-size: 4rem;
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
        }

        .description-text {
          font-size: 1.3rem;
          line-height: 2;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto 5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.5rem;
          margin: 4rem 0;
        }

        .spec-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 2.5rem;
          text-align: center;
          transition: all 0.4s ease;
        }

        .spec-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(74, 158, 255, 0.5);
          transform: translateY(-10px);
        }

        .spec-label {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .spec-value {
          font-size: 1.8rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin: 4rem 0;
        }

        .highlight-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .highlight-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 70px rgba(74, 158, 255, 0.2);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .highlight-image {
          width: 100%;
          height: 250px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .highlight-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        .highlight-content {
          padding: 2.5rem;
        }

        .highlight-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .highlight-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin: 4rem 0;
        }

        .feature-item {
          padding: 2rem;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.1);
          border-left: 4px solid #4a9eff;
          font-size: 1.2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(255,255,255,0.1);
          border-left-width: 8px;
          transform: translateX(10px);
        }

        .colors-grid {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin: 4rem 0;
          flex-wrap: wrap;
        }

        .color-option {
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .color-option:hover {
          transform: translateY(-10px);
        }

        .color-swatch {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 3px solid rgba(0,0,0,0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }

        .color-option:hover .color-swatch {
          border-color: #4a9eff;
          box-shadow: 0 15px 40px rgba(74, 158, 255, 0.4);
          transform: scale(1.1);
        }

        .color-name {
          font-size: 1.1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }

        .cta-button {
          padding: 1.5rem 3rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.4s ease;
          border: 2px solid #4a9eff;
        }

        .cta-button-primary {
          background: #4a9eff;
          color: white;
        }

        .cta-button-primary:hover {
          background: #357abd;
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(74, 158, 255, 0.4);
        }

        .cta-button-secondary {
          background: transparent;
          color: #4a9eff;
        }

        .cta-button-secondary:hover {
          background: rgba(74, 158, 255, 0.1);
          transform: translateY(-5px);
        }

        @media (max-width: 1024px) {
          .specs-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .highlights-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-detail-content h1 {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }

          .specs-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .colors-grid {
            flex-wrap: wrap;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .back-link {
            top: 100px;
            left: 3%;
          }
        }
      `}),n.jsx(ie,{to:"/models",className:"back-link",children:"← All Models"}),n.jsxs("div",{className:"model-detail-hero",children:[n.jsx("div",{className:"carousel-container",children:o.images.map((s,c)=>n.jsx("div",{className:`carousel-image ${c===t?"active":""}`,children:n.jsx("img",{src:s.url,alt:`${o.name} - ${s.caption}`})},c))}),n.jsx("div",{className:"image-caption",children:o.images[t].caption}),n.jsxs("div",{className:"carousel-controls",children:[n.jsx("button",{className:"carousel-button",onClick:a,children:"‹"}),n.jsx("button",{className:"carousel-button",onClick:l,children:"›"})]}),n.jsx("div",{className:"carousel-indicators",children:o.images.map((s,c)=>n.jsx("div",{className:`indicator ${c===t?"active":""}`,onClick:()=>r(c)},c))}),n.jsxs("div",{className:"hero-detail-content",children:[n.jsx("div",{className:"model-type-badge-hero",children:o.type}),n.jsx("h1",{children:o.name}),n.jsx("p",{className:"hero-tagline",children:o.tagline}),n.jsx("p",{className:"hero-price",children:o.price})]})]}),n.jsx("section",{className:"detail-section dark-section",children:n.jsxs("div",{className:"section-container",children:[n.jsx("h2",{className:"section-title",children:"Overview"}),n.jsx("p",{className:"description-text",style:{color:"rgba(255,255,255,0.8)"},children:o.description}),n.jsxs("div",{className:"specs-grid",children:[n.jsxs("div",{className:"spec-card",children:[n.jsx("div",{className:"spec-label",children:"Range"}),n.jsx("div",{className:"spec-value",children:o.specs.range})]}),n.jsxs("div",{className:"spec-card",children:[n.jsx("div",{className:"spec-label",children:"0-60 MPH"}),n.jsx("div",{className:"spec-value",children:o.specs.acceleration})]}),n.jsxs("div",{className:"spec-card",children:[n.jsx("div",{className:"spec-label",children:"Top Speed"}),n.jsx("div",{className:"spec-value",children:o.specs.topSpeed})]}),n.jsxs("div",{className:"spec-card",children:[n.jsx("div",{className:"spec-label",children:"Motor Power"}),n.jsx("div",{className:"spec-value",children:o.specs.motorPower})]}),n.jsxs("div",{className:"spec-card",children:[n.jsx("div",{className:"spec-label",children:"Battery"}),n.jsx("div",{className:"spec-value",children:o.specs.batteryCapacity})]}),n.jsxs("div",{className:"spec-card",children:[n.jsx("div",{className:"spec-label",children:"Charging"}),n.jsx("div",{className:"spec-value",children:o.specs.chargingTime})]}),n.jsxs("div",{className:"spec-card",children:[n.jsx("div",{className:"spec-label",children:"Seating"}),n.jsx("div",{className:"spec-value",children:o.specs.seating})]}),n.jsxs("div",{className:"spec-card",children:[n.jsx("div",{className:"spec-label",children:"Drive Type"}),n.jsx("div",{className:"spec-value",children:o.specs.driveType})]})]})]})}),n.jsx("section",{className:"detail-section light-section",children:n.jsxs("div",{className:"section-container",children:[n.jsx("h2",{className:"section-title",children:"Key Highlights"}),n.jsx("div",{className:"highlights-grid",children:o.highlights.map((s,c)=>n.jsxs("div",{className:"highlight-card",children:[n.jsx("div",{className:"highlight-image",style:{backgroundImage:`url(${s.image})`}}),n.jsxs("div",{className:"highlight-content",children:[n.jsx("h3",{className:"highlight-title",children:s.title}),n.jsx("p",{className:"highlight-description",children:s.description})]})]},c))})]})}),n.jsx("section",{className:"detail-section dark-section",children:n.jsxs("div",{className:"section-container",children:[n.jsx("h2",{className:"section-title",children:"Premium Features"}),n.jsx("div",{className:"features-grid",children:o.features.map((s,c)=>n.jsx("div",{className:"feature-item",children:s},c))})]})}),n.jsx("section",{className:"detail-section light-section",children:n.jsxs("div",{className:"section-container",children:[n.jsx("h2",{className:"section-title",children:"Available Colors"}),n.jsx("div",{className:"colors-grid",children:o.colors.map((s,c)=>n.jsxs("div",{className:"color-option",children:[n.jsx("div",{className:"color-swatch",style:{backgroundColor:s.hex}}),n.jsx("div",{className:"color-name",children:s.name})]},c))})]})}),n.jsx("section",{className:"cta-section",children:n.jsxs("div",{className:"section-container",children:[n.jsxs("h2",{className:"section-title",style:{color:"#333"},children:["Experience the ",o.name]}),n.jsxs("p",{style:{fontSize:"1.3rem",color:"#666",fontFamily:"Montserrat, sans-serif",fontWeight:300},children:["Visit Evergreen Motors today and discover why the ",o.name," is redefining electric mobility"]}),n.jsxs("div",{className:"cta-buttons",children:[n.jsx(ie,{to:"/contact?subject=test-drive",className:"cta-button cta-button-primary",children:"Schedule Test Drive"}),n.jsx(ie,{to:"/contact",className:"cta-button cta-button-secondary",children:"Contact Us"})]})]})})]})},Im=()=>{const[e,t]=y.useState(0),[r,i]=y.useState(null),[o,l]=y.useState({firstName:"",email:"",consent:!1}),[a,s]=y.useState(!1),c=[{title:"Battery Electric Vehicle (BEV)",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",points:["Battery-electric vehicles are all-electric. They are powered solely by a battery that powers an electric motor to make the car move. This battery is charged externally by plugging the vehicle into a charger installed at your home or in public. Because it doesn't have an engine, it doesn't release exhaust emissions into the atmosphere."]},{title:"Plug-in Hybrid Electric Vehicles (PHEV)",image:"https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop",points:["A PHEV is another type of NEV. Plug-in electric vehicles combine an internal combustion engine with an electric motor. This type of NEV will primarily run on electricity until it runs out of charge. This is when the internal combustion engine will kick in. PHEVs can be charged externally with a home charger or at a public charging station.","BYD has developed a hybrid technology unlike any other. Super DM Technology is the driving force behind our PHEVs. It boasts a range of benefits including enhanced driving performance and low fuel consumption."]}],d=[{title:"Environmental impact:",image:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",description:"NEVs can be used to reduce emissions on the road. NEVs including battery-electric and plug-in hybrid vehicles all produce less greenhouse gas emissions and less air pollution than fuel-powered vehicles."},{title:"Energy Efficiency:",image:"https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=600&h=400&fit=crop",description:"NEVs are incredibly energy-efficient, especially BEVs. They are approximately 85-90% efficient compared to an internal combustion engine's 17-21% efficiency."},{title:"Economic benefits:",image:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop",description:"NEVs offer drivers a range of economic benefits including costing less to charge your car than to fill up with fuel. Fewer parts in NEVs mean less to spend on upkeep."},{title:"Advanced technology:",image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",description:"Many NEVs including BYD electric cars feature some of the most advanced technology to make driving safer and more comfortable."}],m=[{title:"Extra energy efficiency",content:"NEVs are more energy efficient than fuel-powered vehicles. New energy vehicles get you further by using less energy."},{title:"Quiet driving experience",content:"NEVs are quieter when on the road. They make less noise for a smooth drive compared to cars with internal combustion engines."},{title:"Exhilarating, Responsive and Dynamic",content:"NEVs offer instant torque, making them fun to drive!"},{title:"Lower running costs",content:"One of the main advantages of NEVs is being able to top-up at home. Not only do you not need to visit a petrol station, but you can save money too."}];return n.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#ffffff",fontFamily:"Montserrat, Arial, sans-serif"},children:[n.jsxs("section",{style:{position:"relative",height:"414px",overflow:"hidden"},children:[n.jsx("img",{src:"/Technology/Banner.png",alt:"BYD NEV Hero",style:{width:"100%",height:"100%",objectFit:"cover"}}),n.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",padding:"0 2rem"},children:n.jsx("h1",{style:{color:"white",fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:"700",lineHeight:"1.2"}})})]}),n.jsx("section",{style:{maxWidth:"56rem",margin:"0 auto",padding:"3rem 1.5rem"},children:n.jsxs("div",{style:{fontSize:"1rem",lineHeight:"1.75",color:"#1f2937"},children:[n.jsx("p",{style:{marginBottom:"1rem"},children:"Over the last few years, electric cars have become more popular with more of them appearing on our roads. Typically, these are referred to as EVs. But there is another term that you may not be familiar with — NEV."}),n.jsx("p",{style:{marginBottom:"1rem"},children:"Not to be confused with 'neighbourhood electric vehicle', NEV stands for 'New Energy Vehicle' and is a term used to describe all types of electric vehicles, from battery-powered fully electric vehicles to plug-in hybrid cars."}),n.jsx("p",{children:"BYD is the No.1 NEV Maker, so we're well placed to explain everything you need to know about NEVs. Below, we'll take a closer look at different types of NEVs and the benefits of these vehicles."})]})}),n.jsxs("section",{style:{maxWidth:"80rem",margin:"0 auto",padding:"3rem 1.5rem"},children:[n.jsx("h2",{style:{fontSize:"clamp(1.875rem, 4vw, 2.5rem)",fontWeight:"700",color:"#111827",textAlign:"center",marginBottom:"1rem"},children:"Types of NEVs"}),n.jsx("p",{style:{fontSize:"1rem",color:"#374151",textAlign:"center",marginBottom:"2rem",maxWidth:"48rem",marginLeft:"auto",marginRight:"auto"},children:"NEV is an all-encompassing term used to describe vehicles that are powered by alternatives to fossil fuels — like electricity. Some of the most common types of NEVs include:"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"1rem",marginBottom:"3rem"},children:c.map((p,f)=>n.jsx("button",{onClick:()=>t(f),style:{padding:"0.75rem 2rem",fontWeight:"600",transition:"all 0.3s",backgroundColor:e===f?"#111827":"#ffffff",color:e===f?"#ffffff":"#111827",border:"1px solid #111827",cursor:"pointer",fontSize:"0.875rem"},onMouseEnter:x=>{e!==f&&(x.currentTarget.style.backgroundColor="#111827",x.currentTarget.style.color="#ffffff")},onMouseLeave:x=>{e!==f&&(x.currentTarget.style.backgroundColor="#ffffff",x.currentTarget.style.color="#111827")},children:p.title},f))}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:window.innerWidth>=768?"1fr 1fr":"1fr",gap:"2rem",alignItems:"center"},children:[n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#111827",marginBottom:"1rem"},children:c[e].title}),n.jsx("ul",{style:{listStyle:"none",padding:0},children:c[e].points.map((p,f)=>n.jsxs("li",{style:{display:"flex",gap:"0.5rem",color:"#374151",fontSize:"0.875rem",lineHeight:"1.75",marginBottom:"1rem"},children:[n.jsx("span",{style:{fontSize:"1.5rem",lineHeight:"1"},children:"•"}),n.jsx("span",{children:p})]},f))})]}),n.jsx("div",{children:n.jsx("img",{src:c[e].image,alt:c[e].title,style:{width:"100%",height:"auto",borderRadius:"0.5rem",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)"}})})]})]}),n.jsx("section",{style:{backgroundColor:"#f9fafb",padding:"4rem 0"},children:n.jsxs("div",{style:{maxWidth:"80rem",margin:"0 auto",padding:"0 1.5rem"},children:[n.jsx("h2",{style:{fontSize:"clamp(1.875rem, 4vw, 2.5rem)",fontWeight:"700",color:"#111827",textAlign:"center",marginBottom:"1rem"},children:"NEV Benefits"}),n.jsx("p",{style:{fontSize:"1rem",color:"#374151",textAlign:"center",marginBottom:"3rem",maxWidth:"48rem",marginLeft:"auto",marginRight:"auto"},children:"There's a range of benefits that come with NEVs, resulting in these cars becoming more popular on our roads."}),n.jsx("div",{style:{maxWidth:"56rem",margin:"0 auto"},children:d.map((p,f)=>n.jsxs("div",{style:{display:"flex",flexDirection:window.innerWidth>=768?f%2===1?"row-reverse":"row":"column",gap:"2rem",alignItems:"center",marginBottom:"3rem"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("img",{src:p.image,alt:p.title,style:{width:"100%",height:"auto",borderRadius:"0rem",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"}})}),n.jsxs("div",{style:{flex:1,padding:window.innerWidth>=768?"0 2rem":"0"},children:[n.jsx("h3",{style:{fontSize:"clamp(1.25rem, 3vw, 1.5rem)",fontWeight:"700",color:"#111827",marginBottom:"1rem"},children:p.title}),n.jsx("p",{style:{fontSize:"0.875rem",color:"#374151",lineHeight:"1.75"},children:p.description})]})]},f))})]})}),n.jsxs("section",{style:{maxWidth:"56rem",margin:"0 auto",padding:"4rem 1.5rem"},children:[n.jsx("h2",{style:{fontSize:"clamp(1.875rem, 4vw, 2.5rem)",fontWeight:"700",color:"#111827",marginBottom:"1rem"},children:"What's the difference between NEV and fuel-powered cars?"}),n.jsx("p",{style:{fontSize:"1rem",color:"#374151",marginBottom:"2rem"},children:"The primary difference between New Energy Vehicles and fuel-powered cars with internal combustion engines is the way they are fuelled — NEVs on electricity and ICE cars on petrol or diesel."}),n.jsx("div",{style:{borderTop:"1px solid #e5e7eb"},children:m.map((p,f)=>n.jsxs("div",{children:[n.jsxs("button",{onClick:()=>i(r===f?null:f),style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem",textAlign:"left",backgroundColor:"transparent",border:"none",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:x=>x.currentTarget.style.backgroundColor="#f9fafb",onMouseLeave:x=>x.currentTarget.style.backgroundColor="transparent",children:[n.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:"600",color:"#111827"},children:p.title}),n.jsx(um,{style:{width:"1.25rem",height:"1.25rem",color:"#4b5563",transition:"transform 0.3s",transform:r===f?"rotate(180deg)":"rotate(0deg)"}})]}),r===f&&n.jsx("div",{style:{padding:"0 1rem 1rem 1rem"},children:n.jsx("p",{style:{fontSize:"0.875rem",color:"#374151",lineHeight:"1.75"},children:p.content})}),n.jsx("div",{style:{borderTop:"1px solid #e5e7eb"}})]},f))})]}),n.jsx("section",{style:{backgroundColor:"#f3f4f6",padding:"4rem 0"},children:n.jsxs("div",{style:{maxWidth:"56rem",margin:"0 auto",padding:"0 1.5rem",textAlign:"center"},children:[n.jsx("p",{style:{fontSize:"1rem",color:"#374151",marginBottom:"1.5rem",maxWidth:"42rem",marginLeft:"auto",marginRight:"auto"},children:"With a range of NEVs to choose from, whether that's fully electric or plug-in hybrid, new energy vehicles give drivers the option to reduce their carbon footprint in a way that suits their lifestyle."}),n.jsx("a",{href:"/models",style:{display:"inline-block",backgroundColor:"#111827",color:"#ffffff",padding:"0.75rem 2rem",fontWeight:"600",border:"1px solid #111827",cursor:"pointer",transition:"all 0.3s",fontSize:"0.875rem",textDecoration:"none"},onMouseEnter:p=>{p.currentTarget.style.backgroundColor="#ffffff",p.currentTarget.style.color="#111827"},onMouseLeave:p=>{p.currentTarget.style.backgroundColor="#111827",p.currentTarget.style.color="#ffffff"},children:"Discover BYD's NEV models"})]})}),n.jsx("footer",{style:{backgroundColor:"#111827",color:"#ffffff",padding:"3rem 0"},children:n.jsxs("div",{style:{maxWidth:"80rem",margin:"0 auto",padding:"0 1.5rem"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:window.innerWidth>=768?"repeat(4, 1fr)":"1fr",gap:"2rem",marginBottom:"2rem"},children:[n.jsxs("div",{children:[n.jsx("h4",{style:{fontWeight:"600",marginBottom:"1rem"},children:"Models"}),n.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["BYD DOLPHIN SURF","BYD DOLPHIN","BYD ATTO 2","BYD ATTO 3","BYD SEAL","BYD SEAL U DM-i","BYD SEALION 7"].map((p,f)=>n.jsx("li",{style:{marginBottom:"0.5rem"},children:n.jsx("a",{href:"#",style:{fontSize:"0.875rem",color:"#d1d5db",textDecoration:"none"},onMouseEnter:x=>x.currentTarget.style.color="#ffffff",onMouseLeave:x=>x.currentTarget.style.color="#d1d5db",children:p})},f))})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{fontWeight:"600",marginBottom:"1rem"},children:"About BYD"}),n.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["About BYD","News"].map((p,f)=>n.jsx("li",{style:{marginBottom:"0.5rem"},children:n.jsx("a",{href:"#",style:{fontSize:"0.875rem",color:"#d1d5db",textDecoration:"none"},onMouseEnter:x=>x.currentTarget.style.color="#ffffff",onMouseLeave:x=>x.currentTarget.style.color="#d1d5db",children:p})},f))})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{fontWeight:"600",marginBottom:"1rem"},children:"Purchasing"}),n.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["Test Drive","Find a BYD Store","PCP Offers","Fleet Solutions"].map((p,f)=>n.jsx("li",{style:{marginBottom:"0.5rem"},children:n.jsx("a",{href:"#",style:{fontSize:"0.875rem",color:"#d1d5db",textDecoration:"none"},onMouseEnter:x=>x.currentTarget.style.color="#ffffff",onMouseLeave:x=>x.currentTarget.style.color="#d1d5db",children:p})},f))})]}),n.jsxs("div",{children:[n.jsx("h4",{style:{fontWeight:"600",marginBottom:"1rem"},children:"Ownership"}),n.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["Service Maintenance","BYD Assistance","Privacy & Data"].map((p,f)=>n.jsx("li",{style:{marginBottom:"0.5rem"},children:n.jsx("a",{href:"#",style:{fontSize:"0.875rem",color:"#d1d5db",textDecoration:"none"},onMouseEnter:x=>x.currentTarget.style.color="#ffffff",onMouseLeave:x=>x.currentTarget.style.color="#d1d5db",children:p})},f))})]})]}),n.jsx("div",{style:{borderTop:"1px solid #374151",paddingTop:"2rem"},children:n.jsxs("div",{style:{display:"flex",flexDirection:window.innerWidth>=768?"row":"column",justifyContent:"space-between",alignItems:"center",gap:"1rem"},children:[n.jsx("div",{style:{fontSize:"0.875rem",color:"#9ca3af"},children:"© BYD Europe B.V. All rights reserved."}),n.jsx("div",{style:{display:"flex",gap:"1rem",fontSize:"0.875rem",color:"#9ca3af"},children:["Privacy Policy","Terms of Use","Cookies","Contact"].map((p,f)=>n.jsx("a",{href:"#",style:{color:"#9ca3af",textDecoration:"none"},onMouseEnter:x=>x.currentTarget.style.color="#ffffff",onMouseLeave:x=>x.currentTarget.style.color="#9ca3af",children:p},f))})]})})]})})]})},Om=()=>{const e=y.useRef(null);return n.jsxs("section",{style:{position:"relative",height:"140vh",width:"100%",overflow:"hidden"},children:[n.jsx("video",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"},autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:n.jsx("source",{src:"/About/Hero.mp4",type:"video/mp4"})}),n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.3)"}})]})},Fm=()=>n.jsxs("section",{style:{position:"relative",width:"100%",height:"140vh",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:n.jsx("img",{src:"/About/AboutBYD.jpg",alt:"About BYD",style:{width:"100%",height:"100%",objectFit:"cover"}})}),n.jsx("div",{style:{position:"relative",width:"100%",maxWidth:"1600px",margin:"0 auto",padding:"6rem 4rem 4rem",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"80rem",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"3.5rem",fontWeight:"700",color:"#000",marginBottom:"2rem",lineHeight:"1.2"},children:"About BYD"}),n.jsx("p",{style:{fontSize:"1.125rem",color:"#000",lineHeight:"1.8",fontWeight:"300"},children:"Founded in 1994, BYD is a high-tech company devoted to leveraging technological innovations for a better life. After more than 31 years of rapid growth, BYD has played a significant role in industries related to electronics, auto, renewable energy and rail transit. With a focus on energy acquisition, storage, and application, BYD offers comprehensive zero-emission new energy solutions."})]})})]}),_m=()=>{const e=[{icon:"/About/icon1pc.png",title:"Auto",image:"/About/diversification-auto.jpg"},{icon:"/About/icon2pc.png",title:"Rail Transit",image:"/About/diversification-rail-transit.jpg"},{icon:"/About/icon3pc.png",title:"Renewable Energy",image:"/About/diversification-renewable-energy.jpg"},{icon:"/About/icon4pc.png",title:"Electronics",image:"/About/diversification-electronics.jpg"}];return n.jsxs("section",{style:{position:"relative",width:"100%",padding:"8rem 0"},children:[n.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:0},children:[n.jsx("img",{src:"/About/Diversification.jpg",alt:"Diversification Background",style:{width:"100%",height:"100%",objectFit:"cover"}}),n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)"}})]}),n.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:"1200px",margin:"0 auto",padding:"0 2rem"},children:[n.jsx("h2",{style:{fontSize:"3rem",fontWeight:"bold",textAlign:"center",marginBottom:"4rem",color:"white"},children:"Diversification"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"2.5rem"},children:e.map((t,r)=>n.jsxs("div",{style:{backgroundColor:"transparent",borderRadius:"8px",overflow:"hidden",border:"2px solid white",transition:"transform 0.3s",padding:"0.5rem"},children:[n.jsxs("div",{style:{padding:"1.5rem 1rem 1rem",textAlign:"center"},children:[n.jsx("div",{style:{width:"60px",height:"60px",margin:"0 auto 0.75rem",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("img",{src:t.icon,alt:t.title,style:{width:"100%",height:"100%",objectFit:"contain"}})}),n.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,color:"white",marginBottom:"1rem"},children:t.title})]}),n.jsx("div",{style:{aspectRatio:"4/3",overflow:"hidden",borderRadius:"4px"},children:n.jsx("img",{src:t.image,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s"},onMouseEnter:i=>i.currentTarget.style.transform="scale(1.1)",onMouseLeave:i=>i.currentTarget.style.transform="scale(1)"})})]},r))})]})]})},Wt=({title:e,description:t,image:r,reverse:i,darkText:o})=>n.jsxs("section",{style:{position:"relative",width:"100%",minHeight:"140vh",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:n.jsx("img",{src:r,alt:e,style:{width:"100%",height:"100%",objectFit:"cover"}})}),n.jsx("div",{style:{position:"relative",width:"100%",maxWidth:"1600px",margin:"0 auto",padding:"6rem 4rem 4rem",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"56rem",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"3.5rem",fontWeight:"700",marginBottom:"2rem",color:o?"#252728":"white",lineHeight:"1.2"},children:e}),n.jsx("p",{style:{fontSize:"1.125rem",lineHeight:"1.8",color:o?"#4b5563":"white",fontWeight:"300"},children:t})]})})]}),Ms=({title:e,subtitle:t,features:r,image:i})=>n.jsxs("section",{style:{position:"relative",width:"100%",height:"140vh",display:"flex",alignItems:"center",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:n.jsx("img",{src:i,alt:e,style:{width:"100%",height:"100%",objectFit:"cover"}})}),n.jsxs("div",{style:{position:"relative",maxWidth:"1600px",margin:"0 auto",padding:"0 1rem"},children:[n.jsxs("div",{style:{marginBottom:"3rem"},children:[n.jsx("h2",{style:{fontSize:"3rem",fontWeight:"bold",color:"white",marginBottom:"1rem"},children:e}),t&&n.jsx("p",{style:{fontSize:"1.125rem",color:"white",opacity:.9},children:t})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:r.map((o,l)=>n.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",borderRadius:"8px",padding:"1.5rem"},children:[n.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:600,color:"white",marginBottom:"0.75rem"},children:o.title}),n.jsx("p",{style:{color:"white",opacity:.9,lineHeight:"1.75"},children:o.description})]},l))})]})]}),Ym=()=>{const e=[{title:"Enhanced safety",description:"The unique flat rectangle shape improves cooling efficiency and preheating performance. Blade Battery has safely passed the nail penetration test without emitting fire or smoke."},{title:"Optimised strength",description:"Arranged in an array in one pack, each cell serves as a structural beam to help withstand the force."},{title:"Longer range",description:"The space utilisation of the Blade Battery has been increased by over 50% compared with traditional battery packs."},{title:"Longer lifecycle",description:"Blade Battery has a long battery life with over 5000 charge and discharge cycles."}],t=[{title:"Safety",description:"The e-Platform 3.0 doubles the rigidity of the entire vehicle after integrating the Blade Battery into the car body."},{title:"High efficiency",description:"Equipped with the world's first mass-produced 8-in-1 electric powertrain as standard, the overall system efficiency is up to 89%."},{title:"Intelligence",description:"Evolving from distributed electronic and electrical architecture into an integrated domain-controlled architecture."},{title:"Aesthetics",description:"The vehicle features shorter overhangs and a longer wheel base, significantly expanding the passenger space."}];return n.jsx("div",{style:{minHeight:"140vh",backgroundColor:"white"},children:n.jsxs("main",{children:[n.jsx(Om,{}),n.jsx(Fm,{}),n.jsx(_m,{}),n.jsx(Wt,{title:"Globalisation",description:"BYD's new energy vehicles have established a presence in 112 countries and regions worldwide, while its passenger vehicles have reached 102 countries and regions.",image:"/About/Globalization.jpg"}),n.jsx(Wt,{title:"Auto",description:"BYD has developed the Blade Battery and dual-mode hybrid power technology, accelerating the once-in-a-century transition from fossil fuel powered vehicles to electric vehicles.",image:"/About/Auto.jpg"}),n.jsx(Ms,{title:"Blade Battery",features:e,image:"/About/Blade.jpg"}),n.jsx(Ms,{title:"e-Platform 3.0",subtitle:"Give full play to the advantages of intelligence, efficiency, safety, and aesthetics that electrification brings.",features:t,image:"/About/E-Platform.jpg"}),n.jsx(Wt,{title:"Semiconductor Chip",description:"Semiconductor chip, the 'CPU' of new energy vehicles, is the core technology of the whole industry.",image:"/About/SemiCondutorChip.jpg"}),n.jsx(Wt,{title:"BYD Intelligent Cockpit System",description:"The smartphone functions are integrated into the in-vehicle platform.",image:"/About/DiLink.jpg"}),n.jsx(Wt,{title:"Vehicle Safety",description:"Numerous challenging tests for top quality",image:"/About/VehicleSafety.jpg"}),n.jsx(Wt,{title:"Market Performance",description:"As of the end of April 2025, BYD's cumulative new energy vehicle (NEV) sales exceeded 11.9 million units. On November 18, 2024, BYD became the world's first automaker to produce 10 million NEVs.",image:"/About/MarketPerformance.jpg"}),n.jsx(Wt,{title:"Social Responsibility",description:"At the beginning of 2020, in the midst of Covid-19, BYD responded quickly and announced that it would produce face masks to help alleviate mask shortages around the world.",image:"/About/SocialResponsibility.jpg",darkText:!0})]})})},Hm=({src:e,children:t,className:r="",priority:i=!1,style:o={}})=>{const[l,a]=y.useState(!1),[s,c]=y.useState(i),[d,m]=y.useState(i),p=y.useRef(null);return y.useEffect(()=>{if(i)return;const f=new IntersectionObserver(x=>{x.forEach(j=>{j.isIntersecting&&(m(!0),c(!0),f.disconnect())})},{rootMargin:"100px"});return p.current&&f.observe(p.current),()=>f.disconnect()},[i]),y.useEffect(()=>{if(!d)return;const f=new Image;f.src=e,f.onload=()=>a(!0)},[d,e]),n.jsxs("div",{ref:p,className:r,style:{...o,position:"relative",backgroundImage:l?`url(${e})`:"none",backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 0.5s ease"},children:[!l&&n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",filter:"blur(20px)",zIndex:0}}),n.jsx("div",{style:{position:"relative",zIndex:1},children:t})]})},Um=e=>{const t=document.createElement("link");t.rel="preload",t.as="image",t.href=e,document.head.appendChild(t)};class Sr{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const Vm=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},ce={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Vm()},ga=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},$m=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=ga(e);ce.publicKey=r.publicKey,ce.blockHeadless=r.blockHeadless,ce.storageProvider=r.storageProvider,ce.blockList=r.blockList,ce.limitRate=r.limitRate,ce.origin=r.origin||t},fp=async(e,t,r={})=>{const i=await fetch(ce.origin+e,{method:"POST",headers:r,body:t}),o=await i.text(),l=new Sr(i.status,o);if(i.ok)return l;throw l},hp=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},qm=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},mp=e=>e.webdriver||!e.languages||e.languages.length===0,gp=()=>new Sr(451,"Unavailable For Headless Browser"),Gm=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Qm=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Km=(e,t)=>e instanceof FormData?e.get(t):e[t],xp=(e,t)=>{if(Qm(e))return!1;Gm(e.list,e.watchVariable);const r=Km(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},yp=()=>new Sr(403,"Forbidden"),Xm=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},Jm=async(e,t,r)=>{const i=Number(await r.get(e)||0);return t-Date.now()+i},vp=async(e,t,r)=>{if(!t.throttle||!r)return!1;Xm(t.throttle,t.id);const i=t.id||e;return await Jm(i,t.throttle,r)>0?!0:(await r.set(i,Date.now().toString()),!1)},bp=()=>new Sr(429,"Too Many Requests"),Zm=async(e,t,r,i)=>{const o=ga(i),l=o.publicKey||ce.publicKey,a=o.blockHeadless||ce.blockHeadless,s=o.storageProvider||ce.storageProvider,c={...ce.blockList,...o.blockList},d={...ce.limitRate,...o.limitRate};return a&&mp(navigator)?Promise.reject(gp()):(hp(l,e,t),qm(r),r&&xp(c,r)?Promise.reject(yp()):await vp(location.pathname,d,s)?Promise.reject(bp()):fp("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:l,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},e0=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},t0=e=>typeof e=="string"?document.querySelector(e):e,n0=async(e,t,r,i)=>{const o=ga(i),l=o.publicKey||ce.publicKey,a=o.blockHeadless||ce.blockHeadless,s=ce.storageProvider||o.storageProvider,c={...ce.blockList,...o.blockList},d={...ce.limitRate,...o.limitRate};if(a&&mp(navigator))return Promise.reject(gp());const m=t0(r);hp(l,e,t),e0(m);const p=new FormData(m);return xp(c,p)?Promise.reject(yp()):await vp(location.pathname,d,s)?Promise.reject(bp()):(p.append("lib_version","4.4.1"),p.append("service_id",e),p.append("template_id",t),p.append("user_id",l),fp("/api/v1.0/email/send-form",p))},Is={init:$m,send:Zm,sendForm:n0,EmailJSResponseStatus:Sr},r0=()=>{const[e]=em(),[t,r]=y.useState({name:"",email:"",phone:"",subject:"",message:""}),[i,o]=y.useState("idle"),[l,a]=y.useState("");y.useEffect(()=>{Um("/contact.jpg"),Is.init("qDixnNBz5aFVI9l49");const d=e.get("subject");d&&r(m=>({...m,subject:d}))},[e]);const s=d=>{const{name:m,value:p}=d.target;r(f=>({...f,[m]:p}))},c=async d=>{d.preventDefault(),o("loading"),a("");try{const m={to_email:"joshuameghoo@gmail.com",from_name:t.name,from_email:t.email,phone:t.phone||"Not provided",subject:t.subject,message:t.message,reply_to:t.email},p=await Is.send("service_gre9op6","template_bji7553",m);console.log("Email sent successfully:",p),o("success"),setTimeout(()=>{r({name:"",email:"",phone:"",subject:"",message:""}),o("idle")},3e3)}catch(m){console.error("Failed to send email:",m),o("error"),a("Failed to send message. Please try again or contact us directly at joshuameghoo@gmail.com"),setTimeout(()=>{o("idle"),a("")},5e3)}};return n.jsxs("div",{children:[n.jsx("style",{children:`
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
      `}),n.jsx(Hm,{src:"/contact.jpg",className:"luxury-contact-hero",priority:!0,style:{backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll"},children:n.jsx("div",{className:"hero-content",children:n.jsx("h1",{children:"CONTACT US"})})}),n.jsx("section",{className:"luxury-section",children:n.jsxs("div",{className:"section-content",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("div",{className:"section-label",children:"Get In Touch"}),n.jsx("h2",{className:"section-title",children:"Let's Connect"})]}),n.jsxs("div",{className:"contact-grid",children:[n.jsxs("div",{className:"contact-info-box",children:[n.jsx("h2",{children:"Information"}),n.jsxs("div",{className:"contact-item",children:[n.jsx("h3",{children:"Phone"}),n.jsx("p",{children:n.jsx("a",{href:"tel:+16494329988",children:"+1 (649) 432-9988"})})]}),n.jsxs("div",{className:"contact-item",children:[n.jsx("h3",{children:"Email"}),n.jsx("p",{children:n.jsx("a",{href:"mailto:info@evergreenmotor.tc",children:"info@evergreenmotor.tc"})}),n.jsx("p",{children:n.jsx("a",{href:"mailto:sales@evergreenmotor.tc",children:"sales@evergreenmotor.tc"})})]}),n.jsxs("div",{className:"contact-item",children:[n.jsx("h3",{children:"Address"}),n.jsx("p",{children:"Evergreen Motors Headquarters"}),n.jsx("p",{children:"Regent Village"}),n.jsx("p",{children:"Grace Bay, Providenciales"}),n.jsx("p",{children:"Turks & Caicos"})]}),n.jsxs("div",{className:"contact-item",children:[n.jsx("h3",{children:"Business Hours"}),n.jsx("p",{children:"Monday - Friday: 9:00 AM - 6:00 PM"}),n.jsx("p",{children:"Saturday: 10:00 AM - 4:00 PM"}),n.jsx("p",{children:"Sunday: Closed"})]})]}),n.jsxs("div",{className:"contact-form-box",children:[n.jsx("h2",{children:"Send Message"}),n.jsx("p",{className:"form-subtitle",children:"We'd love to hear from you. Fill out the form below and we'll be in touch shortly."}),i==="success"&&n.jsx("div",{className:"success-message",children:"Message sent successfully! We'll get back to you soon."}),i==="error"&&l&&n.jsx("div",{className:"error-message",children:l}),n.jsxs("form",{onSubmit:c,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"name",children:"Full Name *"}),n.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:s,required:!0,disabled:i==="loading"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"email",children:"Email Address *"}),n.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:s,required:!0,disabled:i==="loading"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"phone",children:"Phone Number"}),n.jsx("input",{type:"tel",id:"phone",name:"phone",value:t.phone,onChange:s,disabled:i==="loading"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"subject",children:"Subject *"}),n.jsxs("select",{id:"subject",name:"subject",value:t.subject,onChange:s,required:!0,disabled:i==="loading",children:[n.jsx("option",{value:"",children:"Select a subject"}),n.jsx("option",{value:"general",children:"General Inquiry"}),n.jsx("option",{value:"sales",children:"Sales & Purchasing"}),n.jsx("option",{value:"service",children:"Service & Maintenance"}),n.jsx("option",{value:"test-drive",children:"Schedule a Test Drive"}),n.jsx("option",{value:"fleet",children:"Fleet Solutions"}),n.jsx("option",{value:"partnership",children:"Business Partnership"}),n.jsx("option",{value:"other",children:"Other"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"message",children:"Message *"}),n.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:s,required:!0,disabled:i==="loading"})]}),n.jsx("button",{type:"submit",className:"submit-btn",disabled:i==="loading",children:i==="loading"?"SENDING...":"SEND MESSAGE"})]})]})]})]})}),n.jsxs("section",{className:"map-section",children:[n.jsxs("div",{className:"map-header",children:[n.jsx("h2",{children:"FIND US"}),n.jsx("p",{children:"Visit us at our Providenciales location"})]}),n.jsx("div",{className:"map-wrapper",children:n.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8!2d-72.18076673136004!3d21.795217730892617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ3JzQyLjgiTiA3MsKwMTAnNTAuOCJX!5e0!3m2!1sen!2s!4v1234567890",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Evergreen Motors Location"})})]})]})},i0=()=>{const[e,t]=y.useState(null),r=[{id:1,name:"Grace Bay Hub",address:"Grace Bay Road",type:"Fast Charge",power:"50kW",hours:"24/7",lat:21.79535210953533,lng:-72.18081954423658},{id:2,name:"Downtown Provo",address:"Leeward Highway",type:"Rapid Charge",power:"150kW",hours:"24/7",lat:21.7814,lng:-72.2731},{id:3,name:"Airport Point",address:"PLS Airport",type:"Fast Charge",power:"75kW",hours:"24/7",lat:21.7736,lng:-72.2658},{id:4,name:"Turtle Cove Marina",address:"Turtle Cove",type:"Standard",power:"22kW",hours:"6AM - 10PM",lat:21.7923,lng:-72.2589}];return n.jsxs("div",{style:{fontFamily:"Montserrat, Arial, sans-serif",color:"#252728",backgroundColor:"#fff"},children:[n.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh",overflow:"hidden"},children:[n.jsx("img",{src:"/Service-Maintenance/Banner.png",alt:"BYD Ownership",style:{width:"100%",height:"100%",objectFit:"cover"}}),n.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[n.jsx("h1",{style:{fontSize:"64px",fontWeight:700,color:"#fff",margin:0,textAlign:"center",letterSpacing:"-1px"},children:"BYD Ownership"}),n.jsx("p",{style:{fontSize:"22px",color:"#fff",marginTop:"20px",fontWeight:300,maxWidth:"700px",textAlign:"center",lineHeight:"1.6"},children:"Complete care for your electric journey. From comprehensive warranty coverage to 24/7 roadside assistance, we're with you every mile."})]})]}),n.jsx("div",{style:{padding:"120px 20px",backgroundColor:"#fff"},children:n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",display:"flex",gap:"80px",alignItems:"center"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("img",{src:"/Service-Maintenance/1.png",alt:"Warranty",style:{width:"100%",height:"auto",borderRadius:"12px",boxShadow:"0 10px 40px rgba(0,0,0,0.1)"}})}),n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"28px"},children:[n.jsx("div",{style:{width:"56px",height:"56px",backgroundColor:"#252728",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Em,{size:28,color:"#fff"})}),n.jsx("h2",{style:{fontSize:"44px",fontWeight:700,margin:0,letterSpacing:"-0.5px"},children:"Warranty Protection"})]}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.8",color:"#666",marginBottom:"35px"},children:"Industry-leading protection for your peace of mind. Our comprehensive warranty covers all key components including power battery, drive unit, and bodywork anti-corrosion. BYD stands behind every vehicle with coverage that exceeds industry standards."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px",marginBottom:"35px"},children:[n.jsxs("div",{style:{padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"10px",border:"1px solid #e9ecef"},children:[n.jsx("div",{style:{fontSize:"13px",color:"#666",fontWeight:600,marginBottom:"10px",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Basic Coverage"}),n.jsx("div",{style:{fontSize:"22px",fontWeight:700,color:"#252728"},children:"6 years / 150,000 km"}),n.jsx("div",{style:{fontSize:"13px",color:"#666",marginTop:"8px"},children:"Comprehensive vehicle protection"})]}),n.jsxs("div",{style:{padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"10px",border:"1px solid #e9ecef"},children:[n.jsx("div",{style:{fontSize:"13px",color:"#666",fontWeight:600,marginBottom:"10px",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Power Battery"}),n.jsx("div",{style:{fontSize:"22px",fontWeight:700,color:"#252728"},children:"8 years / 250,000 km"}),n.jsx("div",{style:{fontSize:"13px",color:"#666",marginTop:"8px"},children:"SOH 70% guarantee"})]}),n.jsxs("div",{style:{padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"10px",border:"1px solid #e9ecef"},children:[n.jsx("div",{style:{fontSize:"13px",color:"#666",fontWeight:600,marginBottom:"10px",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Drive Unit"}),n.jsx("div",{style:{fontSize:"22px",fontWeight:700,color:"#252728"},children:"8 years / 150,000 km"}),n.jsx("div",{style:{fontSize:"13px",color:"#666",marginTop:"8px"},children:"Motor & controller"})]}),n.jsxs("div",{style:{padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"10px",border:"1px solid #e9ecef"},children:[n.jsx("div",{style:{fontSize:"13px",color:"#666",fontWeight:600,marginBottom:"10px",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Anti-Corrosion"}),n.jsx("div",{style:{fontSize:"22px",fontWeight:700,color:"#252728"},children:"12 years unlimited"}),n.jsx("div",{style:{fontSize:"13px",color:"#666",marginTop:"8px"},children:"Bodywork protection"})]})]}),n.jsx("p",{style:{fontSize:"15px",color:"#666",marginBottom:"25px",lineHeight:"1.6"},children:"All warranty coverage begins from the date of delivery. For complete terms, conditions, and exclusions, please review our comprehensive warranty policy document."}),n.jsx("a",{href:"/warranty-policy",style:{display:"inline-block",padding:"16px 45px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px",borderRadius:"6px",transition:"all 0.3s"},children:"View Full Warranty Policy"})]})]})}),n.jsx("div",{style:{padding:"120px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",display:"flex",gap:"80px",alignItems:"center",flexDirection:"row-reverse"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("img",{src:"/Service-Maintenance/2.jpg",alt:"Service",style:{width:"100%",height:"auto",borderRadius:"12px",boxShadow:"0 10px 40px rgba(0,0,0,0.1)"}})}),n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"28px"},children:[n.jsx("div",{style:{width:"56px",height:"56px",backgroundColor:"#252728",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Nm,{size:28,color:"#fff"})}),n.jsx("h2",{style:{fontSize:"44px",fontWeight:700,margin:0,letterSpacing:"-0.5px"},children:"Service & Maintenance"})]}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.8",color:"#666",marginBottom:"35px"},children:"Expert care from certified BYD technicians who understand your vehicle inside and out. Our service centers use genuine BYD parts, advanced diagnostics, and specialized EV equipment to keep your vehicle running at peak performance. We make maintenance timely, accessible, and hassle-free."}),n.jsxs("div",{style:{backgroundColor:"#fff",padding:"28px",borderRadius:"10px",marginBottom:"30px",boxShadow:"0 2px 10px rgba(0,0,0,0.05)"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"20px",color:"#252728"},children:"What We Offer"}),n.jsxs("ul",{style:{fontSize:"16px",lineHeight:"2",color:"#252728",margin:0,paddingLeft:"0",listStyle:"none"},children:[n.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px"},children:[n.jsx(Xt,{size:20,color:"#22c55e",style:{flexShrink:0}}),n.jsx("span",{children:"Genuine BYD spare parts with competitive pricing and warranty"})]}),n.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px"},children:[n.jsx(Xt,{size:20,color:"#22c55e",style:{flexShrink:0}}),n.jsx("span",{children:"Factory-trained technicians specialized in electric vehicle care"})]}),n.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px"},children:[n.jsx(Xt,{size:20,color:"#22c55e",style:{flexShrink:0}}),n.jsx("span",{children:"Comprehensive diagnostic equipment and software updates"})]}),n.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px"},children:[n.jsx(Xt,{size:20,color:"#22c55e",style:{flexShrink:0}}),n.jsx("span",{children:"Regular maintenance schedules optimized for electric vehicles"})]}),n.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx(Xt,{size:20,color:"#22c55e",style:{flexShrink:0}}),n.jsx("span",{children:"Transparent pricing with detailed service reports"})]})]})]}),n.jsxs("div",{style:{display:"flex",gap:"15px",flexWrap:"wrap"},children:[n.jsx("a",{href:"/owners-manual",style:{display:"inline-flex",alignItems:"center",gap:"10px",padding:"16px 35px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px",borderRadius:"6px"},children:"Owner's Manual"}),n.jsx("a",{href:"/emergency-response",style:{display:"inline-flex",alignItems:"center",gap:"10px",padding:"16px 35px",backgroundColor:"transparent",border:"2px solid #252728",color:"#252728",textDecoration:"none",fontWeight:600,fontSize:"16px",borderRadius:"6px"},children:"Emergency Response Guide"})]})]})]})}),n.jsx("div",{style:{padding:"120px 20px",backgroundColor:"#fff"},children:n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",display:"flex",gap:"80px",alignItems:"center"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("img",{src:"/Assistance/1.jpg",alt:"Roadside Assistance",style:{width:"100%",height:"auto",borderRadius:"12px",boxShadow:"0 10px 40px rgba(0,0,0,0.1)"}})}),n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"28px"},children:[n.jsx("div",{style:{width:"56px",height:"56px",backgroundColor:"#BB0A0A",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(zm,{size:28,color:"#fff"})}),n.jsx("h2",{style:{fontSize:"44px",fontWeight:700,margin:0,letterSpacing:"-0.5px"},children:"24/7 Roadside Assistance"})]}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.8",color:"#666",marginBottom:"35px"},children:"Part of our mobility promise — help is always available when you need it most. Whether it's a breakdown, accident, theft attempt, or fire, BYD Assistance will be there for you, 24 hours a day, 7 days a week, 365 days a year. Our pan-European assistance network ensures you're never stranded."}),n.jsxs("div",{style:{backgroundColor:"#fff5f5",padding:"32px",borderRadius:"12px",marginBottom:"35px",border:"2px solid #BB0A0A"},children:[n.jsx("div",{style:{fontSize:"14px",color:"#666",marginBottom:"12px",fontWeight:600},children:"EMERGENCY HOTLINE — AVAILABLE NOW"}),n.jsx("a",{href:"tel:00800-10203000",style:{fontSize:"32px",fontWeight:700,color:"#BB0A0A",textDecoration:"none",display:"block",marginBottom:"8px"},children:"00800-10203000"}),n.jsx("div",{style:{fontSize:"14px",color:"#666",marginBottom:"10px"},children:"Free of charge | Pan-European coverage"}),n.jsxs("div",{style:{fontSize:"14px",color:"#666",paddingTop:"10px",borderTop:"1px solid #ffdddd"},children:["Alternative: ",n.jsx("strong",{children:"+44 2033072546"})," (if your provider charges for freephone numbers)"]})]}),n.jsxs("div",{style:{marginBottom:"30px"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"18px",color:"#252728"},children:"Included Services"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[n.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#BB0A0A",borderRadius:"50%",flexShrink:0}}),n.jsx("span",{style:{fontSize:"15px",fontWeight:500},children:"Phone Support"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[n.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#BB0A0A",borderRadius:"50%",flexShrink:0}}),n.jsx("span",{style:{fontSize:"15px",fontWeight:500},children:"Roadside Repair"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[n.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#BB0A0A",borderRadius:"50%",flexShrink:0}}),n.jsx("span",{style:{fontSize:"15px",fontWeight:500},children:"Towing Service"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[n.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#BB0A0A",borderRadius:"50%",flexShrink:0}}),n.jsx("span",{style:{fontSize:"15px",fontWeight:500},children:"Replacement Vehicle"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[n.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#BB0A0A",borderRadius:"50%",flexShrink:0}}),n.jsx("span",{style:{fontSize:"15px",fontWeight:500},children:"Accommodation"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[n.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#BB0A0A",borderRadius:"50%",flexShrink:0}}),n.jsx("span",{style:{fontSize:"15px",fontWeight:500},children:"Repatriation"})]})]})]}),n.jsxs("div",{style:{fontSize:"14px",color:"#666",padding:"20px",backgroundColor:"#fff3f3",borderLeft:"4px solid #BB0A0A",borderRadius:"6px",lineHeight:"1.6"},children:[n.jsx("strong",{style:{display:"block",marginBottom:"8px",color:"#252728"},children:"Coverage Period:"}),"EV Customers: 24 months + 24 months extension",n.jsx("br",{}),"DM Customers: 12 months + 12 months extension",n.jsx("br",{}),n.jsx("span",{style:{fontSize:"13px",marginTop:"8px",display:"block",fontStyle:"italic"},children:"From date of delivery"})]})]})]})}),n.jsx("div",{style:{padding:"120px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"70px"},children:[n.jsx("h2",{style:{fontSize:"44px",fontWeight:700,marginBottom:"20px",letterSpacing:"-0.5px"},children:"Charging Locations"}),n.jsx("p",{style:{fontSize:"18px",color:"#666",maxWidth:"600px",margin:"0 auto",lineHeight:"1.6"},children:"Convenient access to fast and rapid charging stations across Turks & Caicos Islands. Power up wherever your journey takes you."})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"30px",marginBottom:"60px"},children:r.map(i=>n.jsxs("div",{onClick:()=>t(i.id===e?null:i.id),style:{padding:"35px",backgroundColor:"#fff",borderRadius:"12px",boxShadow:e===i.id?"0 8px 30px rgba(0,0,0,0.15)":"0 4px 20px rgba(0,0,0,0.08)",transition:"all 0.3s ease",cursor:"pointer",border:e===i.id?"2px solid #252728":"2px solid transparent"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"20px"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("h3",{style:{fontSize:"22px",fontWeight:700,marginBottom:"8px"},children:i.name}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#666",fontSize:"14px"},children:[n.jsx(Xn,{size:16}),n.jsx("span",{children:i.address})]})]}),n.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",backgroundColor:e===i.id?"#252728":"#f8f9fa",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s"},children:n.jsx(ei,{size:22,color:e===i.id?"#fff":"#252728"})})]}),n.jsxs("div",{style:{display:"flex",gap:"20px",paddingTop:"20px",borderTop:"1px solid #e9ecef",marginBottom:e===i.id?"20px":"0"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:600,textTransform:"uppercase",marginBottom:"6px",letterSpacing:"0.5px"},children:"Type"}),n.jsx("div",{style:{fontSize:"15px",fontWeight:600},children:i.type})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:600,textTransform:"uppercase",marginBottom:"6px",letterSpacing:"0.5px"},children:"Power"}),n.jsx("div",{style:{fontSize:"15px",fontWeight:600},children:i.power})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:600,textTransform:"uppercase",marginBottom:"6px",letterSpacing:"0.5px"},children:"Hours"}),n.jsx("div",{style:{fontSize:"15px",fontWeight:600},children:i.hours})]})]}),e===i.id&&n.jsxs("a",{href:`https://maps.google.com/?q=${i.lat},${i.lng}`,target:"_blank",rel:"noopener noreferrer",onClick:o=>o.stopPropagation(),style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 24px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"14px",borderRadius:"6px",transition:"all 0.3s ease",marginTop:"10px"},children:[n.jsx(up,{size:16}),"Get Directions"]})]},i.id))}),n.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"60px",padding:"50px",backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 4px 20px rgba(0,0,0,0.08)"},children:[n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"42px",fontWeight:700,color:"#252728",marginBottom:"10px"},children:r.length}),n.jsx("div",{style:{fontSize:"14px",color:"#666",fontWeight:500},children:"Charging Stations"})]}),n.jsx("div",{style:{width:"1px",backgroundColor:"#e9ecef"}}),n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"42px",fontWeight:700,color:"#252728",marginBottom:"10px"},children:"24/7"}),n.jsx("div",{style:{fontSize:"14px",color:"#666",fontWeight:500},children:"Always Available"})]}),n.jsx("div",{style:{width:"1px",backgroundColor:"#e9ecef"}}),n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"42px",fontWeight:700,color:"#252728",marginBottom:"10px"},children:"150kW"}),n.jsx("div",{style:{fontSize:"14px",color:"#666",fontWeight:500},children:"Rapid Charging"})]})]})]})}),n.jsx("div",{style:{padding:"120px 20px",backgroundColor:"#fff"},children:n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",display:"flex",gap:"80px",alignItems:"center",flexDirection:"row-reverse"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("img",{src:"/Charge-Cards/2.jpg",alt:"Shell Charging",style:{width:"100%",height:"auto",borderRadius:"12px",boxShadow:"0 10px 40px rgba(0,0,0,0.1)"}})}),n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:"28px"},children:[n.jsx("div",{style:{width:"56px",height:"56px",backgroundColor:"#252728",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(bm,{size:28,color:"#fff"})}),n.jsx("h2",{style:{fontSize:"44px",fontWeight:700,margin:0,letterSpacing:"-0.5px"},children:"Shell EV Charging"})]}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.8",color:"#666",marginBottom:"35px"},children:"Experience the future of electric mobility with our exclusive BYD x Shell Recharge partnership. Access 850,000+ charging points across Europe with significant discounts and seamless integration with your BYD infotainment system. No subscription fees, just smart savings."}),n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"30px",borderRadius:"12px",marginBottom:"30px"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"20px",color:"#252728"},children:"Exclusive BYD Benefits"}),n.jsx("div",{style:{display:"grid",gap:"16px"},children:n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px"},children:[n.jsx(Xt,{size:20,color:"#22c55e",style:{flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"16px",fontWeight:600,marginBottom:"4px"},children:"Seamless Integration"}),n.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Shell Recharge app mirrors on your BYD screen via Android Auto or Apple CarPlay"})]})]})})]}),n.jsx("div",{style:{backgroundColor:"#fff9e6",padding:"20px",borderRadius:"8px",marginBottom:"30px",borderLeft:"4px solid #fbbf24"},children:n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px"},children:[n.jsx(gm,{size:20,color:"#f59e0b",style:{flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{style:{fontSize:"14px",lineHeight:"1.6",color:"#666"},children:[n.jsx("strong",{style:{color:"#252728"},children:"How to register:"})," Download the BYD App and follow the BYD x Shell Recharge link to activate your charge card. Discounts apply automatically when using the card at eligible stations."]})]})}),n.jsx("a",{href:"https://www.shell.co.uk/terms-and-conditions/terms-and-conditions-shell-recharge-x-byd-promotion.html",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"16px 45px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px",borderRadius:"6px"},children:"View Terms & Conditions"})]})]})}),n.jsx("div",{style:{padding:"100px 20px",backgroundColor:"#252728",color:"#fff"},children:n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"60px"},children:[n.jsx("h2",{style:{fontSize:"44px",fontWeight:700,marginBottom:"20px",letterSpacing:"-0.5px"},children:"BYD Customer Service Center"}),n.jsx("p",{style:{fontSize:"18px",opacity:.9,maxWidth:"700px",margin:"0 auto",lineHeight:"1.6"},children:"We're dedicated to hearing your voice and providing exceptional support. Contact our European customer service center for assistance beyond emergencies."})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"50px"},children:[n.jsxs("div",{style:{backgroundColor:"rgba(255,255,255,0.1)",padding:"35px",borderRadius:"12px",backdropFilter:"blur(10px)"},children:[n.jsx(Xn,{size:32,color:"#fff",style:{marginBottom:"20px"}}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px"},children:"Location"}),n.jsxs("p",{style:{fontSize:"16px",opacity:.9,lineHeight:"1.6"},children:["Lublin, Poland",n.jsx("br",{}),"European Service Hub"]})]}),n.jsxs("div",{style:{backgroundColor:"rgba(255,255,255,0.1)",padding:"35px",borderRadius:"12px",backdropFilter:"blur(10px)"},children:[n.jsx(vl,{size:32,color:"#fff",style:{marginBottom:"20px"}}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px"},children:"Service Hours"}),n.jsxs("p",{style:{fontSize:"16px",opacity:.9,lineHeight:"1.6"},children:["Monday to Saturday",n.jsx("br",{}),"9:00 AM - 6:00 PM CET"]})]}),n.jsxs("div",{style:{backgroundColor:"rgba(255,255,255,0.1)",padding:"35px",borderRadius:"12px",backdropFilter:"blur(10px)"},children:[n.jsx("div",{style:{fontSize:"32px",marginBottom:"20px"},children:"🌍"}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px"},children:"Languages"}),n.jsxs("p",{style:{fontSize:"16px",opacity:.9,lineHeight:"1.6"},children:["English, German, French,",n.jsx("br",{}),"Italian, Spanish & more"]})]})]}),n.jsx("div",{style:{textAlign:"center",fontSize:"14px",opacity:.8,fontStyle:"italic"},children:"Additional language support coming soon"})]})}),n.jsx("div",{style:{backgroundColor:"#f8f9fa",padding:"100px 20px"},children:n.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"36px",fontWeight:700,marginBottom:"20px",color:"#252728",letterSpacing:"-0.5px"},children:"Stay Connected with BYD"}),n.jsx("p",{style:{fontSize:"17px",marginBottom:"45px",color:"#666",lineHeight:"1.6",maxWidth:"600px",margin:"0 auto 45px"},children:"Get the latest updates on ownership benefits, charging network expansions, service promotions, and exclusive BYD news delivered to your inbox."}),n.jsxs("div",{style:{display:"flex",gap:"15px",maxWidth:"700px",margin:"0 auto",marginBottom:"25px"},children:[n.jsx("input",{type:"text",placeholder:"First Name",style:{flex:1,padding:"18px 24px",border:"1px solid #e9ecef",fontSize:"16px",borderRadius:"6px",outline:"none",fontFamily:"Montserrat, Arial, sans-serif"}}),n.jsx("input",{type:"email",placeholder:"Email Address",style:{flex:1,padding:"18px 24px",border:"1px solid #e9ecef",fontSize:"16px",borderRadius:"6px",outline:"none",fontFamily:"Montserrat, Arial, sans-serif"}})]}),n.jsx("div",{style:{textAlign:"left",maxWidth:"700px",margin:"0 auto 30px"},children:n.jsxs("label",{style:{display:"flex",alignItems:"flex-start",fontSize:"13px",gap:"12px",color:"#666"},children:[n.jsx("input",{type:"checkbox",style:{marginTop:"3px"}}),n.jsxs("span",{children:["I consent to my personal data being used to receive all relevant BYD email updates. For more information, please see our ",n.jsx("a",{href:"/privacy",style:{color:"#252728",textDecoration:"underline",fontWeight:600},children:"privacy policy"}),"."]})]})}),n.jsx("button",{style:{padding:"18px 60px",backgroundColor:"#252728",color:"#fff",border:"none",fontSize:"16px",fontWeight:600,cursor:"pointer",borderRadius:"6px",fontFamily:"Montserrat, Arial, sans-serif",transition:"all 0.3s"},children:"SUBSCRIBE NOW"})]})}),n.jsx("style",{children:`
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
      `})]})};function o0(){return n.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[n.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[n.jsx("h1",{style:{fontSize:"52px",fontWeight:"700",marginBottom:"24px",lineHeight:"1.2"},children:"Find Your Perfect Way to Own a BYD"}),n.jsx("p",{style:{fontSize:"22px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.95"},children:"From cash purchases to flexible subscriptions - discover the option that fits your lifestyle"})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[n.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"Cash Purchase"}),n.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto"},children:"Buy outright and own your BYD from day one with no monthly payments or interest charges"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{icon:"💰",title:"No Interest Charges",description:"Avoid finance costs and save money"},{icon:"🔑",title:"Immediate Ownership",description:"The vehicle is yours from day one"},{icon:"✨",title:"Complete Freedom",description:"No mileage or modification restrictions"},{icon:"🎯",title:"Potential Discounts",description:"Cash buyers may get special offers"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"28px",borderRadius:"8px",textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"10px",color:"#3276AE"},children:e.title}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))}),n.jsx("div",{style:{textAlign:"center"},children:n.jsx("button",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(50, 118, 174, 0.3)"},children:"Contact Us for Cash Purchase"})})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[n.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"Bank Finance"}),n.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto"},children:"Flexible finance through trusted UK banks with competitive rates and immediate ownership"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{icon:"💳",title:"Competitive Rates",description:"Access great rates from leading banks"},{icon:"🏦",title:"Trusted Lenders",description:"Work with established institutions"},{icon:"🔑",title:"Own from Day One",description:"You own the vehicle immediately"},{icon:"✅",title:"Simple Process",description:"Quick application with fast decisions"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"28px",borderRadius:"8px",textAlign:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"10px",color:"#3276AE"},children:e.title}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))}),n.jsx("div",{style:{textAlign:"center"},children:n.jsx("button",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(50, 118, 174, 0.3)"},children:"Contact Us for Finance Options"})})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[n.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"Personal Contract Purchase (PCP)"}),n.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto"},children:"Lower monthly payments with flexibility to keep, return, or exchange your vehicle"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{icon:"💰",title:"Lower Payments",description:"Reduced monthly costs with final payment"},{icon:"🔄",title:"Multiple Options",description:"Keep, return, or exchange at end of term"},{icon:"📊",title:"Guaranteed Value",description:"Know your vehicle's future value upfront"},{icon:"🎯",title:"Dealer Support",description:"Expert guidance throughout your contract"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"28px",borderRadius:"8px",textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"10px",color:"#3276AE"},children:e.title}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))}),n.jsx("div",{style:{textAlign:"center"},children:n.jsx("button",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(50, 118, 174, 0.3)"},children:"Contact Us for PCP Deals"})})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[n.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"Personal Contract Hire (Leasing)"}),n.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto"},children:"Drive a brand new BYD with low fixed monthly payments and no ownership worries"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{icon:"📅",title:"Fixed Term",description:"Choose 24-48 month lease periods"},{icon:"💷",title:"Low Payments",description:"Affordable fixed monthly costs"},{icon:"🚗",title:"Latest Models",description:"Always drive the newest vehicles"},{icon:"🔧",title:"Maintenance Options",description:"Add service packages for peace of mind"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"28px",borderRadius:"8px",textAlign:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"10px",color:"#3276AE"},children:e.title}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))}),n.jsx("div",{style:{textAlign:"center"},children:n.jsx("button",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(50, 118, 174, 0.3)"},children:"Contact Us for Lease Deals"})})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[n.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"Fleet & Business Solutions"}),n.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"800px",margin:"0 auto"},children:"Comprehensive electric vehicle solutions for businesses of all sizes with volume discounts and dedicated support"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{icon:"⚡",title:"Advanced Technology",description:"Industry-leading battery and range"},{icon:"💰",title:"Cost Savings",description:"Reduce fuel and maintenance costs"},{icon:"🚗",title:"Volume Discounts",description:"Special pricing for fleet orders 5+"},{icon:"🛡️",title:"Comprehensive Warranty",description:"6-year vehicle, 8-year battery warranty"},{icon:"🛠️",title:"Fleet Management",description:"Digital tools and dedicated support"},{icon:"🌱",title:"ESG Compliance",description:"Meet sustainability goals"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"28px",borderRadius:"8px",textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"10px",color:"#1a2a6c"},children:e.title}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))}),n.jsx("div",{style:{textAlign:"center"},children:n.jsx("button",{style:{backgroundColor:"#1a2a6c",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(26, 42, 108, 0.3)"},children:"Contact Fleet Specialists"})})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[n.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"Short-Term Rentals"}),n.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto"},children:"Experience electric driving with flexible daily, weekly, or monthly rental options"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{icon:"📅",title:"Daily Rental",price:"From £89/day",description:"Perfect for short trips"},{icon:"📆",title:"Weekly Rental",price:"From £499/week",description:"Great for vacations"},{icon:"🗓️",title:"Monthly Rental",price:"From £1,499/month",description:"Ideal for extended use"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"32px",borderRadius:"8px",textAlign:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"},children:[n.jsx("div",{style:{fontSize:"56px",marginBottom:"16px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"8px",color:"#f5576c"},children:e.title}),n.jsx("p",{style:{fontSize:"24px",fontWeight:"700",color:"#252728",marginBottom:"8px"},children:e.price}),n.jsx("p",{style:{fontSize:"14px",color:"#5f5f5f"},children:e.description})]},t))}),n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",marginBottom:"30px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"},children:[n.jsx("h4",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px",color:"#252728",textAlign:"center"},children:"All Rentals Include:"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"12px"},children:["Fully charged vehicle","Comprehensive insurance","24/7 breakdown assistance","Unlimited mileage"].map((e,t)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#f5576c",strokeWidth:"3",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})}),n.jsx("span",{style:{fontSize:"14px",color:"#252728"},children:e})]},t))})]}),n.jsx("div",{style:{textAlign:"center"},children:n.jsx("button",{style:{backgroundColor:"#f5576c",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(245, 87, 108, 0.3)"},children:"Contact Us for Rentals"})})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[n.jsx("h2",{style:{fontSize:"42px",fontWeight:"700",marginBottom:"16px",color:"#252728"},children:"All-Inclusive Subscription"}),n.jsx("p",{style:{fontSize:"18px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto"},children:"Ultimate flexibility with insurance, maintenance, and everything included in one monthly payment"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px",marginBottom:"40px"},children:[{plan:"Starter",monthly:"£599",model:"BYD DOLPHIN",mileage:"750 miles/month"},{plan:"Premium",monthly:"£799",model:"BYD ATTO 3",mileage:"1,000 miles/month",featured:!0},{plan:"Executive",monthly:"£999",model:"BYD SEAL",mileage:"1,250 miles/month"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:e.featured?"#667eea":"#f8f9fa",padding:"36px",borderRadius:"8px",border:e.featured?"3px solid #667eea":"1px solid #e5e7eb",textAlign:"center",position:"relative",transform:e.featured?"scale(1.05)":"scale(1)"},children:[e.featured&&n.jsx("div",{style:{position:"absolute",top:"-14px",left:"50%",transform:"translateX(-50%)",backgroundColor:"#764ba2",color:"#ffffff",padding:"6px 20px",borderRadius:"20px",fontSize:"12px",fontWeight:"600"},children:"MOST POPULAR"}),n.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"16px",color:e.featured?"#ffffff":"#252728"},children:e.plan}),n.jsx("p",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"8px",color:e.featured?"#ffffff":"#667eea"},children:e.monthly}),n.jsx("p",{style:{fontSize:"14px",marginBottom:"20px",color:e.featured?"rgba(255,255,255,0.8)":"#6b7280"},children:"per month"}),n.jsxs("div",{style:{marginBottom:"24px",textAlign:"left"},children:[n.jsxs("p",{style:{fontSize:"14px",marginBottom:"8px",color:e.featured?"rgba(255,255,255,0.9)":"#5f5f5f"},children:[n.jsx("strong",{children:"Model:"})," ",e.model]}),n.jsxs("p",{style:{fontSize:"14px",marginBottom:"8px",color:e.featured?"rgba(255,255,255,0.9)":"#5f5f5f"},children:[n.jsx("strong",{children:"Mileage:"})," ",e.mileage]}),n.jsxs("p",{style:{fontSize:"14px",color:e.featured?"rgba(255,255,255,0.9)":"#5f5f5f"},children:[n.jsx("strong",{children:"Minimum:"})," 6 months"]})]}),n.jsxs("div",{style:{marginBottom:"20px",paddingTop:"20px",borderTop:`1px solid ${e.featured?"rgba(255,255,255,0.2)":"#e5e7eb"}`},children:[n.jsx("p",{style:{fontSize:"13px",fontWeight:"600",marginBottom:"10px",color:e.featured?"#ffffff":"#252728"},children:"Everything Included:"}),n.jsx("p",{style:{fontSize:"12px",lineHeight:"1.6",color:e.featured?"rgba(255,255,255,0.85)":"#5f5f5f"},children:"Vehicle • Insurance • Maintenance • Breakdown Cover • Vehicle Swaps • Digital Management"})]}),n.jsx("button",{style:{width:"100%",backgroundColor:e.featured?"#ffffff":"#667eea",color:e.featured?"#667eea":"#ffffff",padding:"14px",fontSize:"15px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Subscribe Now"})]},t))}),n.jsx("div",{style:{textAlign:"center"},children:n.jsx("button",{style:{backgroundColor:"#667eea",color:"#ffffff",padding:"14px 40px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(102, 126, 234, 0.3)"},children:"Contact Us About Subscriptions"})})]})}),n.jsx("section",{style:{padding:"80px 20px",background:"linear-gradient(135deg, #2d3436 0%, #3276AE 100%)",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[n.jsx("h2",{style:{fontSize:"40px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Get Your BYD?"}),n.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.95"},children:"Contact us today and our team will help you find the perfect purchasing option for your needs"}),n.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Contact Us Now"}),n.jsx("button",{style:{backgroundColor:"transparent",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"2px solid #ffffff",borderRadius:"4px",cursor:"pointer"},children:"Find a Location"})]})]})})]})}const l0=()=>{var I;const[e,t]=y.useState("all"),[r,i]=y.useState(null),[o,l]=y.useState(""),[a,s]=y.useState(""),[c,d]=y.useState(!1),[m,p]=y.useState(0),[f,x]=y.useState(!1),[j,b]=y.useState(!1),[S,h]=y.useState(!1),[u,g]=y.useState(!1),[v,k]=y.useState({firstName:"",lastName:"",email:"",countryCode:"+44",phone:"",useType:"personal"}),D=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];y.useEffect(()=>{const B=()=>{const _=document.querySelector("footer"),xe=document.querySelector(".progress-bar");if(_&&xe){const C=_.getBoundingClientRect(),A=xe.getBoundingClientRect(),J=window.innerHeight-20,Qt=C.top<J+A.height;g(Qt)}};return window.addEventListener("scroll",B),window.addEventListener("resize",B),B(),()=>{window.removeEventListener("scroll",B),window.removeEventListener("resize",B)}},[]);const E=[{id:1,name:"ATTO 2",type:"electric",image:"/models/BYD-ATTO-2/BYD_ATTO_2.jpg"},{id:2,name:"DOLPHIN SURF",type:"electric",image:"/models/BYD-DOLPHIN-SURF/BYD-DOLPHIN-SURF.webp"},{id:3,name:"SEALION 7",type:"electric",image:"/models/BYD-SEALION-7/BYD-SEALION-7.webp"},{id:4,name:"SEAL U DM-i",type:"hybrid",image:"/models/BYD-SEAL-U-DM-i/BYD-SEAL-U-DM-i.webp"},{id:5,name:"SEAL",type:"electric",image:"/models/BYD-SEAL/BYD-SEAL.webp"},{id:6,name:"ATTO 3",type:"electric",image:"/models/BYD-ATTO3/BYD-ATTO3.webp"},{id:7,name:"DOLPHIN",type:"electric",image:"/models/BYD-DOLPHIN/BYD-DOLPHIN.webp"}],N=e==="all"?E:E.filter(B=>B.type===e),O=B=>{const _=document.querySelector(".models-grid"),xe=410,C=B==="left"?-xe:xe;_.scrollBy({left:C,behavior:"smooth"});const A=B==="left"?Math.max(0,m-1):Math.min(N.length-1,m+1);p(A)},W=B=>{document.querySelector(".models-grid").scrollTo({left:410*B,behavior:"smooth"}),p(B)},ae=()=>{if(!r){x(!0);return}d(!c)},Xe=B=>{i(B),x(!1)},T=()=>{if(!r){x(!0);return}if(!o){b(!0);return}if(!a){h(!0);return}if(!v.firstName||!v.lastName||!v.email||!v.phone){alert("Please fill in all required fields");return}alert("Booking request submitted!")};return n.jsxs("div",{style:{width:"100%",fontFamily:"'Montserrat', sans-serif"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .hero-section {
          height: 110vh;
          background: 
                      url('/testdrive.jpg') center/cover;
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
      `}),n.jsx("div",{className:"hero-section",children:n.jsx("h1",{className:"hero-title",children:"Test Drive"})}),n.jsxs("div",{className:"content-section",children:[n.jsxs("div",{className:"section-title",children:[n.jsx("span",{className:`section-number ${r?"completed":""}`,children:r?n.jsx(Mn,{size:22,strokeWidth:3}):"1"}),n.jsx("span",{children:"Choose your model"})]}),f&&n.jsx("div",{className:"error-message",children:"Please complete the previous step before proceeding"}),n.jsxs("div",{className:"category-tabs",children:[n.jsx("button",{className:`category-tab ${e==="all"?"active":""}`,onClick:()=>t("all"),children:"All"}),n.jsx("button",{className:`category-tab ${e==="electric"?"active":""}`,onClick:()=>t("electric"),children:"Electric cars"}),n.jsx("button",{className:`category-tab ${e==="hybrid"?"active":""}`,onClick:()=>t("hybrid"),children:"Hybrid cars"})]}),n.jsxs("div",{className:"carousel-container",children:[n.jsx("div",{className:"models-grid",children:N.map(B=>n.jsxs("div",{className:`model-card ${r===B.id?"selected":""}`,onClick:()=>Xe(B.id),children:[n.jsxs("div",{className:"model-header",children:[n.jsx("div",{className:"model-name",children:B.name}),n.jsx("div",{className:"model-type",children:B.type==="hybrid"?"PHEV":"100% Electric"})]}),n.jsx("img",{src:B.image,alt:B.name,className:"model-image"}),n.jsx("div",{className:"selection-circle",children:r===B.id&&n.jsx(Mn,{size:18,color:"white",strokeWidth:3})})]},B.id))}),n.jsxs("div",{className:"carousel-controls",children:[n.jsx("button",{className:"carousel-nav",onClick:()=>O("left"),disabled:m===0,children:"←"}),n.jsx("div",{className:"carousel-dots",children:N.map((B,_)=>n.jsx("button",{className:`carousel-dot ${_===m?"active":""}`,onClick:()=>W(_)},_))}),n.jsx("button",{className:"carousel-nav",onClick:()=>O("right"),disabled:m===N.length-1,children:"→"})]})]}),n.jsxs("div",{className:"form-section",children:[n.jsxs("div",{className:"section-title",children:[n.jsx("span",{className:`section-number ${o&&a?"completed":""}`,children:o&&a?n.jsx(Mn,{size:22,strokeWidth:3}):"2"}),n.jsx("span",{children:"Choose your date and time"})]}),j&&n.jsx("div",{className:"error-message",children:"Please complete the previous step before proceeding"}),n.jsxs("div",{className:"date-time-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",children:["Preferred Date ",n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("div",{className:"date-input-wrapper",children:[n.jsxs("div",{className:`date-input ${r?"":"disabled"}`,onClick:ae,style:{cursor:r?"pointer":"not-allowed"},children:[n.jsx("span",{children:o||"Select a date"}),n.jsx(cm,{size:18})]}),c&&r&&n.jsxs("div",{className:"calendar-dropdown",children:[n.jsxs("div",{className:"calendar-header",children:[n.jsx("button",{className:"calendar-nav-btn",children:"«"}),n.jsx("span",{children:"2025 October"}),n.jsx("button",{className:"calendar-nav-btn",children:"»"})]}),n.jsxs("div",{className:"calendar-grid",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(B=>n.jsx("div",{className:"calendar-day-header",children:B},B)),[28,29,30].map(B=>n.jsx("div",{className:"calendar-day disabled",children:B},`prev-${B}`)),Array.from({length:31},(B,_)=>_+1).map(B=>n.jsx("div",{className:`calendar-day ${B<19?"disabled":""} ${o===`${B} October 2025`?"selected":""}`,onClick:()=>{B>=19&&(l(`${B} October 2025`),d(!1),b(!1))},children:B},B))]})]})]})]}),o&&n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",children:["Choose your time ",n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("select",{className:"form-input",value:a,onChange:B=>{s(B.target.value),h(!1)},children:[n.jsx("option",{value:"",children:"Select a time"}),D.map(B=>n.jsx("option",{value:B,children:B},B))]})]})]}),n.jsxs("div",{className:"section-title",style:{marginTop:"50px"},children:[n.jsx("span",{className:"section-number",children:"3"}),n.jsx("span",{children:"Enter your contact details"})]}),n.jsxs("div",{className:"contact-form",children:[n.jsxs("div",{className:"form-group first-name",children:[n.jsxs("label",{className:"form-label",children:["First Name",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{type:"text",className:"form-input",placeholder:"First Name*",value:v.firstName,onChange:B=>k({...v,firstName:B.target.value})})]}),n.jsxs("div",{className:"form-group last-name",children:[n.jsxs("label",{className:"form-label",children:["Last Name",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{type:"text",className:"form-input",placeholder:"Last Name*",value:v.lastName,onChange:B=>k({...v,lastName:B.target.value})})]}),n.jsxs("div",{className:"form-group email",children:[n.jsxs("label",{className:"form-label",children:["Email",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{type:"email",className:"form-input",placeholder:"Email*",value:v.email,onChange:B=>k({...v,email:B.target.value})})]}),n.jsxs("div",{className:"form-group phone",children:[n.jsxs("label",{className:"form-label",children:["Phone Number",n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("div",{className:"phone-group",children:[n.jsxs("select",{className:"country-code-select",value:v.countryCode,onChange:B=>k({...v,countryCode:B.target.value}),children:[n.jsx("option",{value:"+1",children:"+1 (US)"}),n.jsx("option",{value:"+44",children:"+44 (UK)"}),n.jsx("option",{value:"+91",children:"+91 (IN)"}),n.jsx("option",{value:"+86",children:"+86 (CN)"}),n.jsx("option",{value:"+81",children:"+81 (JP)"}),n.jsx("option",{value:"+49",children:"+49 (DE)"}),n.jsx("option",{value:"+33",children:"+33 (FR)"})]}),n.jsx("input",{type:"tel",className:"form-input",value:v.phone,onChange:B=>k({...v,phone:B.target.value}),placeholder:"07400 123456*"})]})]}),n.jsxs("div",{className:"form-group use-type",children:[n.jsxs("label",{className:"form-label",children:["Type of use",n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("select",{className:"form-input",value:v.useType,onChange:B=>k({...v,useType:B.target.value}),children:[n.jsx("option",{value:"",children:"Type of use *"}),n.jsx("option",{value:"personal",children:"Personal"}),n.jsx("option",{value:"private-hire",children:"Private Hire"}),n.jsx("option",{value:"fleet-corporate",children:"Fleet/Corporate"})]})]}),n.jsx("button",{onClick:T,className:"submit-button",children:"Request Booking"})]})]})]}),n.jsxs("div",{className:`progress-bar ${u?"above-footer":""}`,style:u?{position:"absolute",bottom:"auto",top:`${document.body.scrollHeight-(((I=document.querySelector("footer"))==null?void 0:I.offsetHeight)||0)-100}px`}:{},children:[n.jsxs("div",{className:"progress-item",children:[n.jsx("div",{className:`progress-icon ${r?"completed":"incomplete"}`,children:r?n.jsx(Mn,{size:14,strokeWidth:3}):"1"}),n.jsx("span",{children:"Models"})]}),n.jsxs("div",{className:"progress-item",children:[n.jsx("div",{className:`progress-icon ${o&&a?"completed":"incomplete"}`,children:o&&a?n.jsx(Mn,{size:14,strokeWidth:3}):"2"}),n.jsx("span",{children:"Date"})]}),n.jsxs("div",{className:"progress-item",children:[n.jsx("div",{className:"progress-icon incomplete",children:"3"}),n.jsx("span",{children:"Contact"})]})]})]})},a0=()=>n.jsxs("div",{style:{fontFamily:"Montserrat, Arial, sans-serif",color:"#252728"},children:[n.jsxs("div",{style:{position:"relative",width:"100%",height:"120VH",overflow:"hidden"},children:[n.jsxs("picture",{children:[n.jsx("source",{media:"(max-width: 991px)",srcSet:"/images/assistance-banner-mob.jpg"}),n.jsx("img",{src:"/Assistance/Banner.jpg",alt:"BYD Assistance",style:{width:"100%",height:"100%",objectFit:"cover"}})]}),n.jsx("div",{style:{position:"absolute",top:"50%",left:"5%",transform:"translateY(-50%)",color:"#fff",zIndex:2},children:n.jsx("h1",{style:{fontSize:"56px",fontWeight:600,margin:0},children:"BYD Assistance"})})]}),n.jsxs("div",{style:{maxWidth:"1200px",margin:"60px auto",padding:"0 20px"},children:[n.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",marginBottom:"40px"},children:"The BYD Assistance is part of our mobility promise – for example when it comes to breakdowns, accidents, theft or vandalism, BYD Assistance will be there to help you, 24/7 365 days a year."}),n.jsx("h2",{style:{fontSize:"32px",fontWeight:600,marginBottom:"20px",marginTop:"60px"},children:"BYD Assistance Hotline Number."}),n.jsx("p",{style:{fontSize:"16px",marginBottom:"15px"},children:"If you need immediate assistance please contact:"}),n.jsxs("p",{style:{fontSize:"20px",fontWeight:600,color:"#BB0A0A",marginBottom:"10px"},children:[n.jsx("a",{href:"tel:00800-10203000",style:{color:"#BB0A0A",textDecoration:"none"},children:"00800-10203000"})," (free of charge)"]}),n.jsx("p",{style:{fontSize:"16px",marginBottom:"10px"},children:"or"}),n.jsx("p",{style:{fontSize:"20px",fontWeight:600,color:"#BB0A0A",marginBottom:"30px"},children:"+44 2033072546"}),n.jsx("p",{style:{fontSize:"14px",color:"#666"},children:"if your phone provider charges for freephone numbers."}),n.jsx("h2",{style:{fontSize:"32px",fontWeight:600,marginBottom:"20px",marginTop:"60px"},children:"BYD Assistance Cover."}),n.jsxs("p",{style:{fontSize:"16px",lineHeight:"1.6",marginBottom:"15px"},children:["BYD Assistance is valid for a period of",n.jsx("br",{}),"EV Customers: ",n.jsx("strong",{children:"24 months + 24 months"}),n.jsx("br",{}),"DM Customers: ",n.jsx("strong",{children:"24 months 12 months + 12 months"}),n.jsx("br",{}),"from the date of delivery"]}),n.jsxs("p",{style:{fontSize:"16px",lineHeight:"1.6",marginBottom:"15px"},children:['We provide assistance when eligible events happen. "Eligible Events" means the driver of the Vehicle is not allowed to continue driving as a result of ',n.jsx("strong",{children:"a breakdown, accident, theft attempt, or fire"}),"."]}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6"},children:"Coverage: Pan-European Assistance"})]}),n.jsxs("div",{style:{maxWidth:"1600px",margin:"80px auto",padding:"0 20px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#FFF",padding:"64px",marginBottom:"40px",gap:"60px"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("picture",{children:n.jsx("img",{src:"/Assistance/1.jpg",alt:"Roadside Assistance",style:{width:"100%",height:"auto"}})})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h2",{style:{fontSize:"24px",fontWeight:600,marginBottom:"20px"},children:"Roadside Assistance Benefits."}),n.jsxs("ul",{style:{fontSize:"14px",lineHeight:"1.8",paddingLeft:"20px"},children:[n.jsx("li",{children:n.jsx("strong",{children:"Help on the phone."})}),n.jsx("li",{children:n.jsx("strong",{children:"Repair on Spot."})}),n.jsx("li",{children:n.jsx("strong",{children:"Towage Services."})})]}),n.jsx("a",{href:"/assistance-pdf",style:{display:"inline-block",marginTop:"20px",padding:"10px 50px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px",transition:"all 0.3s"},children:"Find out more"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#FFF",padding:"64px",marginBottom:"40px",gap:"60px",flexDirection:"row-reverse"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("picture",{children:n.jsx("img",{src:"/Assistance/2.jpg",alt:"Additional Benefits",style:{width:"100%",height:"auto"}})})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h2",{style:{fontSize:"24px",fontWeight:600,marginBottom:"20px"},children:"Additional Benefits."}),n.jsxs("ul",{style:{fontSize:"14px",lineHeight:"1.8",paddingLeft:"20px"},children:[n.jsx("li",{children:n.jsx("strong",{children:"Replacement vehicle."})}),n.jsx("li",{children:n.jsx("strong",{children:"Onward journey and accommodation."})}),n.jsx("li",{children:n.jsx("strong",{children:"Transfer costs."})}),n.jsx("li",{children:n.jsx("strong",{children:"Repatriation."})})]}),n.jsx("a",{href:"/assistance-pdf",style:{display:"inline-block",marginTop:"20px",padding:"10px 50px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px"},children:"Find out more"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#FFF",padding:"64px",marginBottom:"40px",gap:"60px",flexDirection:"row-reverse"},children:[n.jsx("div",{style:{flex:1},children:n.jsxs("picture",{children:[n.jsx("source",{media:"(max-width: 991px)",srcSet:"/images/customer-service-mob.jpg"}),n.jsx("img",{src:"/Assistance/3.jpg",alt:"Customer Service",style:{width:"100%",height:"auto"}})]})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h2",{style:{fontSize:"24px",fontWeight:600,marginBottom:"20px"},children:"BYD Customer Service Center."}),n.jsxs("ul",{style:{fontSize:"14px",lineHeight:"1.8",paddingLeft:"20px",listStyle:"none"},children:[n.jsx("li",{style:{marginBottom:"15px"},children:n.jsx("strong",{children:"The BYD Customer Service Center is the efficient way to contact BYD directly. BYD is much willing to know your voice."})}),n.jsx("li",{style:{marginBottom:"10px"},children:n.jsx("strong",{children:"Location: Lublin, Poland."})}),n.jsx("li",{style:{marginBottom:"10px"},children:n.jsx("strong",{children:"Service Hours: Monday to Saturday 9:00 AM-18:00 PM."})}),n.jsx("li",{children:n.jsx("strong",{children:"Available Service Languages: English, German, French, Italian, Spanish (More language service will be available soon)."})})]})]})]})]}),n.jsxs("div",{style:{maxWidth:"1200px",margin:"60px auto",padding:"0 20px"},children:[n.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:"In the case of events not listed above, we are still ready to be there for you by attempting Help on the phone, Repair on Spot or towage services to the nearest Authorised BYD Repairer, but you may need to provide payment for them."}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6"},children:"To find out more details about BYD roadside assistance, please read the following document:"}),n.jsx("p",{style:{marginTop:"15px"},children:n.jsx("a",{href:"/assistance-pdf",style:{color:"#252728",textDecoration:"underline",fontWeight:600,fontSize:"16px"},children:"BYD Roadside Assistance Terms and Conditions"})})]}),n.jsx("style",{children:`
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
      `})]}),s0=()=>n.jsxs("div",{style:{fontFamily:"Montserrat, Arial, sans-serif",color:"#252728"},children:[n.jsxs("div",{style:{position:"relative",width:"100%",height:"80vh",overflow:"hidden"},children:[n.jsxs("picture",{children:[n.jsx("source",{media:"(max-width: 991px)",srcSet:"/images/service-banner-mob.jpg"}),n.jsx("img",{src:"/Service-Maintenance/Banner.png",alt:"Service Banner",style:{width:"100%",height:"100%",objectFit:"cover"}})]}),n.jsxs("div",{style:{position:"absolute",top:"5%",left:"50%",transform:"translateX(-50%)",color:"#fff",zIndex:2,textAlign:"center",width:"90%",maxWidth:"1200px"},children:[n.jsx("h1",{style:{fontSize:"34px",fontWeight:600,margin:0},children:"BYD UK Service & Maintenance"}),n.jsx("p",{style:{fontSize:"16px",marginTop:"20px"},children:"To make sure everything runs smoothly, our service is specifically designed for you and your beloved car."})]})]}),n.jsx("div",{style:{maxWidth:"calc(100% - 80px)",margin:"0 auto",marginLeft:"100px",marginRight:"100px",height:"80vh",position:"relative",top:"-50vh",marginBottom:"-20vh",zIndex:3},children:n.jsx("img",{src:"/Service-Maintenance/Banner2.jpg",alt:"Service Overview",style:{width:"100%",height:"100vh",objectFit:"cover",boxShadow:"0 10px 40px rgba(0,0,0,0.1)"}})}),n.jsxs("div",{style:{maxWidth:"1600px",margin:"0px auto",padding:"0 20px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#F7F7F7",padding:"64px",marginBottom:"40px",gap:"60px"},children:[n.jsx("div",{style:{flex:1},children:n.jsxs("picture",{children:[n.jsx("source",{media:"(max-width: 991px)",srcSet:"/images/warranty-mob.png"}),n.jsx("img",{src:"/Service-Maintenance/1.png",alt:"Warranty",style:{width:"100%",height:"auto"}})]})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h2",{style:{fontSize:"24px",fontWeight:600,marginBottom:"20px"},children:"Warranty"}),n.jsx("ul",{style:{fontSize:"14px",lineHeight:"1.6",paddingLeft:"20px"},children:n.jsx("li",{children:"A comprehensive warranty policy is in place for you. For more warranty details, please contact the local BYD dealer."})}),n.jsx("a",{href:"/warranty-policy",style:{display:"inline-block",marginTop:"20px",padding:"10px 50px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px",transition:"all 0.3s"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#fff",e.currentTarget.style.color="#252728",e.currentTarget.style.border="1px solid #252728"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#252728",e.currentTarget.style.color="#fff",e.currentTarget.style.border="none"},children:"Warranty Policy"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#F7F7F7",padding:"64px",marginBottom:"40px",gap:"60px",flexDirection:"row-reverse"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("picture",{children:n.jsx("img",{src:"/Service-Maintenance/2.jpg",alt:"Maintenance",style:{width:"100%",height:"auto"}})})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h2",{style:{fontSize:"24px",fontWeight:600,marginBottom:"20px"},children:"Maintenance / Repair"}),n.jsx("ul",{style:{fontSize:"14px",lineHeight:"1.6",paddingLeft:"20px"},children:n.jsx("li",{children:"A timely, accessible and enjoyable service, just for you."})}),n.jsxs("div",{style:{display:"flex",gap:"15px",marginTop:"20px"},children:[n.jsx("a",{href:"/owners-manual",style:{display:"inline-block",padding:"10px 50px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px"},children:"Owner's Manual"}),n.jsx("a",{href:"/emergency-response",style:{display:"inline-block",padding:"10px 50px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"16px"},children:"Emergency Response Guide"})]})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#F7F7F7",padding:"64px",marginBottom:"40px",gap:"60px"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("picture",{children:n.jsx("img",{src:"/Service-Maintenance/3.jpg",alt:"Spare Parts",style:{width:"100%",height:"auto"}})})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h2",{style:{fontSize:"24px",fontWeight:600,marginBottom:"20px"},children:"Spare Parts"}),n.jsx("ul",{style:{fontSize:"14px",lineHeight:"1.6",paddingLeft:"20px"},children:n.jsx("li",{children:"BYD genuine spare parts professionally provide efficient supply and reasonable price for your vehicles."})})]})]})]}),n.jsx("div",{style:{backgroundColor:"#F7F7F7",padding:"64px 20px"},children:n.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"24px",fontWeight:600,marginBottom:"40px"},children:"Stay up to date of the latest news from BYD"}),n.jsx("div",{style:{maxWidth:"880px",margin:"0 auto"},children:n.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[n.jsxs("div",{style:{display:"flex",gap:"15px"},children:[n.jsx("input",{type:"text",placeholder:"First Name",style:{flex:1,padding:"15px",border:"1px solid #E7E7E7",fontSize:"16px",outline:"none"}}),n.jsx("input",{type:"email",placeholder:"Email Address",style:{flex:1,padding:"15px",border:"1px solid #E7E7E7",fontSize:"16px",outline:"none"}})]}),n.jsx("div",{style:{textAlign:"left"},children:n.jsxs("label",{style:{display:"flex",alignItems:"center",fontSize:"12px",gap:"10px"},children:[n.jsx("input",{type:"checkbox"}),n.jsxs("span",{children:["I consent to my personal data being used to receive all relevant BYD email updates. For more information, please see our ",n.jsx("a",{href:"/privacy",style:{color:"#252728",textDecoration:"underline"},children:"privacy policy"}),"."]})]})}),n.jsx("button",{type:"submit",style:{padding:"12px 50px",backgroundColor:"#252728",color:"#fff",border:"none",fontSize:"16px",fontWeight:600,cursor:"pointer",alignSelf:"center"},children:"SUBSCRIBE"})]})})]})}),n.jsx("style",{children:`
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
      `})]}),c0=()=>n.jsxs("div",{style:{position:"relative",width:"100%",minHeight:"500px",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[n.jsx("img",{src:"/Charge-Cards/Banner.jpg",alt:"BYD & Shell",style:{width:"100%",height:"auto",display:"block"}}),n.jsx("div",{style:{position:"absolute",bottom:"80px",left:"50%",transform:"translateX(-50%)",textAlign:"center",color:"#fff",width:"100%",padding:"0 20px"},children:n.jsx("h2",{style:{fontSize:"48px",fontWeight:600,margin:0,fontFamily:"Montserrat, Arial, sans-serif"},children:"BYD x Shell EV Charging Cards"})})]}),vo=({title:e,items:t,imageSrc:r,reverse:i=!1})=>n.jsxs("div",{style:{display:"flex",flexDirection:i?"row-reverse":"row",gap:"60px",padding:"80px 96px",maxWidth:"1600px",margin:"0 auto",alignItems:"center"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("img",{src:r,alt:e,style:{width:"100%",height:"auto"}})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h2",{style:{fontSize:"32px",fontWeight:600,marginBottom:"24px",color:"#252728",fontFamily:"Montserrat, Arial, sans-serif"},children:e}),n.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:t.map((o,l)=>n.jsxs("li",{style:{fontSize:"16px",lineHeight:"1.6",color:"#252728",marginBottom:"16px",paddingLeft:"24px",position:"relative",fontFamily:"Montserrat, Arial, sans-serif"},children:[n.jsx("span",{style:{position:"absolute",left:0,top:"8px",width:"6px",height:"6px",backgroundColor:"#252728",borderRadius:"50%"}}),n.jsx("span",{dangerouslySetInnerHTML:{__html:o}})]},l))})]})]}),d0=()=>n.jsx("div",{style:{width:"100%",padding:"80px 0",backgroundColor:"#f7f7f7"},children:n.jsx("div",{style:{maxWidth:"1600px",margin:"0 auto"},children:n.jsx("video",{controls:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%",height:"auto",borderRadius:"0px"},children:n.jsx("source",{src:"Charge-Cards/BYD_Shell_video.mp4",type:"video/mp4"})})})}),p0=()=>n.jsxs("div",{style:{width:"100%",backgroundColor:"#fff"},children:[n.jsx(c0,{}),n.jsx(vo,{title:"Experience More with Your BYD",items:["BYD and Shell Recharge are advancing together and driving the future of electric mobility.","Our enhanced offering will unlock a streamlined experience and reduce the cost of rapid and ultra-rapid charging on Shell Recharge public DC network.","A seamless driving and charging experience with BYD and Shell Recharge. Get ready to embark on this exciting journey with us. Shell Recharge app is mirrored onto the BYD infotainment system by Andriod Auto or Apple CarPlay. You can easily navigate to the nearest fastest and available charge point or a charge point that is conveniently located on your journey."],imageSrc:"/Charge-Cards/1.png",reverse:!0}),n.jsx(vo,{title:"Exclusive benefits for BYD customers",items:["No subscription fees","Discount of £0.24 per kWh when using the Shell Recharge owned and operated fast charging network","Access 850 000+ charging points across Europe","Saving on European rapid and ultra-rapid charging too, in these countries, discount per kWh:<br>- France 0.15€<br>- Netherlands 0.20€<br>- Belgium 0.15€<br>- Germany 0.15€<br>- Austria 0.15€<br>- Switzerland 0.15€<br><br><sup>*Discounts will automatically be applied to the current kWh price, when using the BYD X Shell Recharge charge card</sup>"],imageSrc:"/Charge-Cards/2.jpg"}),n.jsx(vo,{title:"Here's how the promotion works",items:["Please register for the BYD App and follow the BYD x Shell Recharge link to register for your charge card.","Your discount will be automatically applied when using the Shell Recharge owned and operated DC fast charging network.","Start charging and save smart. You will receive a digital overview of your charging sessions and your invoice at the end of each month.",'Read the Terms and Conditions: <a href="https://www.shell.co.uk/terms-and-conditions/terms-and-conditions-shell-recharge-x-byd-promotion.html" style="text-decoration: underline; color: #252728;">HERE</a>'],imageSrc:"/Charge-Cards/3.webp",reverse:!0}),n.jsx(d0,{})]}),u0=()=>n.jsx("div",{style:{position:"relative",width:"100%",height:"100vh",overflow:"hidden"},children:n.jsx("img",{src:"/Warranty/Banner.jpg",alt:"Warranty Policy",style:{width:"100%",height:"100%",objectFit:"cover"}})}),f0=()=>{const e=[{title:"Key Parts Warranty of BYD DOLPHIN SURF in European Market",vehicleType:"BYD DOLPHIN SURF",year:"2025",content:`
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
      `}],[t,r]=y.useState("BYD SEAL U DM-i"),[i,o]=y.useState("2024"),[l,a]=y.useState(!1),[s,c]=y.useState(!1),d=Array.from(new Set(e.map(f=>f.vehicleType))),m=Array.from(new Set(e.map(f=>f.year))).sort((f,x)=>parseInt(x)-parseInt(f)),p=e.find(f=>f.vehicleType===t&&f.year===i);return n.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto",padding:"80px 96px",fontFamily:"Montserrat, Arial, sans-serif"},children:[n.jsxs("div",{style:{marginBottom:"60px"},children:[n.jsx("h2",{style:{fontSize:"32px",fontWeight:600,color:"#252728",marginBottom:"40px"},children:"Warranty Information"}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:500,color:"#252728",marginBottom:"24px"},children:"Please Select Vehicle Type"}),n.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"40px"},children:[n.jsxs("div",{style:{position:"relative",flex:1,maxWidth:"400px"},children:[n.jsx("input",{type:"text",value:t,readOnly:!0,placeholder:"Search Vehicle Type",onClick:()=>a(!l),style:{width:"100%",height:"48px",padding:"0 40px 0 16px",border:"1px solid #E7E7E7",fontSize:"16px",fontFamily:"Montserrat, Arial, sans-serif",outline:"none",cursor:"pointer",backgroundColor:"#fff"}}),n.jsx("div",{style:{position:"absolute",right:"16px",top:"50%",transform:"translateY(-50%)",width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid #252728",pointerEvents:"none"}}),l&&n.jsx("div",{style:{position:"absolute",top:"52px",left:0,right:0,backgroundColor:"#fff",border:"1px solid #E7E7E7",maxHeight:"300px",overflowY:"auto",zIndex:10,boxShadow:"0 4px 6px rgba(0,0,0,0.1)"},children:d.map((f,x)=>n.jsx("div",{onClick:()=>{r(f),a(!1)},style:{padding:"12px 16px",cursor:"pointer",fontSize:"16px",color:"#252728",fontFamily:"Montserrat, Arial, sans-serif",backgroundColor:f===t?"#f5f5f5":"#fff"},onMouseOver:j=>j.currentTarget.style.backgroundColor="#f5f5f5",onMouseOut:j=>j.currentTarget.style.backgroundColor=f===t?"#f5f5f5":"#fff",children:f},x))})]}),n.jsxs("div",{style:{position:"relative",flex:1,maxWidth:"400px"},children:[n.jsx("input",{type:"text",value:i,readOnly:!0,placeholder:"Search Year",onClick:()=>c(!s),style:{width:"100%",height:"48px",padding:"0 40px 0 16px",border:"1px solid #E7E7E7",fontSize:"16px",fontFamily:"Montserrat, Arial, sans-serif",outline:"none",cursor:"pointer",backgroundColor:"#fff"}}),n.jsx("div",{style:{position:"absolute",right:"16px",top:"50%",transform:"translateY(-50%)",width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:"6px solid #252728",pointerEvents:"none"}}),s&&n.jsx("div",{style:{position:"absolute",top:"52px",left:0,right:0,backgroundColor:"#fff",border:"1px solid #E7E7E7",maxHeight:"300px",overflowY:"auto",zIndex:10,boxShadow:"0 4px 6px rgba(0,0,0,0.1)"},children:m.map((f,x)=>n.jsx("div",{onClick:()=>{o(f),c(!1)},style:{padding:"12px 16px",cursor:"pointer",fontSize:"16px",color:"#252728",fontFamily:"Montserrat, Arial, sans-serif",backgroundColor:f===i?"#f5f5f5":"#fff"},onMouseOver:j=>j.currentTarget.style.backgroundColor="#f5f5f5",onMouseOut:j=>j.currentTarget.style.backgroundColor=f===i?"#f5f5f5":"#fff",children:f},x))})]})]})]}),p&&n.jsxs("div",{style:{backgroundColor:"#fff",padding:"40px",border:"1px solid #E7E7E7",borderRadius:"8px"},children:[n.jsx("h4",{style:{fontSize:"24px",fontWeight:600,color:"#252728",marginBottom:"32px",fontFamily:"Montserrat, Arial, sans-serif"},children:p.title}),n.jsx("div",{style:{overflowX:"auto"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"Montserrat, Arial, sans-serif"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{padding:"16px",textAlign:"left",borderBottom:"2px solid #252728",fontSize:"16px",fontWeight:600,color:"#252728"},children:"Product Category"}),n.jsx("th",{style:{padding:"16px",textAlign:"left",borderBottom:"2px solid #252728",fontSize:"16px",fontWeight:600,color:"#252728"},children:"Duration"}),n.jsx("th",{style:{padding:"16px",textAlign:"left",borderBottom:"2px solid #252728",fontSize:"16px",fontWeight:600,color:"#252728"},children:"Remarks"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"Bodywork Anti-Corrosion"}),n.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"12 years, unlimited mileage"}),n.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"/"})]}),n.jsxs("tr",{children:[n.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"Power Battery"}),n.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"8 years, 250,000 km (155,350 miles)"}),n.jsxs("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:["SOH",n.jsx("sup",{children:"1"})," 70%"]})]}),n.jsxs("tr",{children:[n.jsxs("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:["Drive Unit",n.jsx("sup",{children:"2"})]}),n.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"8 years, 150,000 km (93,750 miles)"}),n.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"/"})]}),n.jsxs("tr",{children:[n.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"Basic Coverage"}),n.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"6 years, 150,000 km (93,750 miles)"}),n.jsx("td",{style:{padding:"16px",borderBottom:"1px solid #E7E7E7",fontSize:"14px",color:"#252728"},children:"/"})]}),n.jsx("tr",{children:n.jsx("td",{colSpan:3,style:{padding:"16px",borderBottom:"1px solid #E7E7E7"},children:n.jsxs("ul",{style:{margin:0,paddingLeft:"20px",fontSize:"12px",color:"#252728",lineHeight:"1.8"},children:[n.jsxs("li",{children:[n.jsx("sup",{children:"1"}),"SOH: State of Health"]}),n.jsxs("li",{children:[n.jsx("sup",{children:"2"}),"Drive Unit: Includes Drive Motor and Drive Motor Controller."]}),n.jsx("li",{children:"Spare Part: If the warranty period of the spare part is shorter than the remaining basic coverage period of the parts on the complete vehicle, the warranty period of the part shall be extended until the remaining warranty period of basic coverage expires."})]})})}),n.jsx("tr",{children:n.jsx("td",{colSpan:3,style:{padding:"16px",fontSize:"12px",color:"#252728",fontStyle:"italic"},children:"Note: For more warranty details, please contact the local BYD dealer."})})]})]})})]})]})},h0=()=>n.jsxs("div",{style:{width:"100%",backgroundColor:"#fff"},children:[n.jsx(u0,{}),n.jsx(f0,{})]}),m0=()=>{const[e,t]=y.useState(null),r=[{id:1,name:"Grace Bay Hub",island:"Providenciales",address:"Grace Bay Road",type:"Fast Charge",power:"50kW",hours:"24/7",lat:21.79535210953533,lng:-72.18081954423658},{id:2,name:"Downtown Provo Station",island:"Providenciales",address:"Leeward Highway",type:"Rapid Charge",power:"150kW",hours:"24/7",lat:21.7814,lng:-72.2731},{id:3,name:"Airport Charging Point",island:"Providenciales",address:"PLS International Airport",type:"Fast Charge",power:"75kW",hours:"24/7",lat:21.7736,lng:-72.2658},{id:4,name:"Turtle Cove Marina",island:"Providenciales",address:"Turtle Cove",type:"Standard Charge",power:"22kW",hours:"6AM - 10PM",lat:21.7923,lng:-72.2589},{id:5,name:"Grand Turk Port",island:"Grand Turk",address:"Cockburn Town",type:"Fast Charge",power:"50kW",hours:"24/7",lat:21.4664,lng:-71.1363}];return n.jsxs("div",{style:{fontFamily:"Montserrat, Arial, sans-serif",color:"#252728",backgroundColor:"#fff"},children:[n.jsxs("div",{style:{position:"relative",width:"100%",height:"120vh",overflow:"hidden"},children:[n.jsx("img",{src:"/Charging-Locations/Banner.jpeg",alt:"Charging Locations Banner",style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}),n.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.4)",zIndex:1}}),n.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#fff",textAlign:"center",zIndex:2,width:"90%",maxWidth:"1200px"},children:[n.jsx("h1",{style:{fontSize:"64px",fontWeight:700,margin:0,letterSpacing:"-1px"},children:"Charging Locations"}),n.jsx("p",{style:{fontSize:"20px",marginTop:"24px",fontWeight:300,opacity:.9},children:"Power up across Turks & Caicos Islands"}),n.jsxs("div",{style:{display:"flex",gap:"40px",justifyContent:"center",marginTop:"40px",fontSize:"14px",fontWeight:500},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(ei,{size:20}),n.jsxs("span",{children:[r.length," Stations"]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(Xn,{size:20}),n.jsx("span",{children:"2 Islands"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx(vl,{size:20}),n.jsx("span",{children:"Most 24/7"})]})]})]})]}),n.jsx("div",{style:{maxWidth:"1600px",margin:"0 auto",padding:"80px 20px"},children:n.jsxs("div",{style:{display:"flex",gap:"40px",alignItems:"flex-start"},children:[n.jsx("div",{style:{flex:"1.2",position:"sticky",top:"20px"},children:n.jsxs("div",{style:{position:"relative",width:"100%",height:"600px",backgroundColor:"#f0f4f8",borderRadius:"12px",overflow:"hidden",boxShadow:"0 10px 40px rgba(0,0,0,0.08)"},children:[n.jsx("iframe",{width:"100%",height:"100%",style:{border:0},loading:"lazy",allowFullScreen:!0,src:"https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=21.7941,-72.2052&zoom=11&maptype=roadmap"}),n.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"20px",backgroundColor:"rgba(255,255,255,0.95)",padding:"15px 20px",borderRadius:"8px",fontSize:"13px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",zIndex:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px"},children:[n.jsx("div",{style:{width:"12px",height:"12px",backgroundColor:"#e63946",borderRadius:"50%"}}),n.jsx("span",{style:{fontWeight:600},children:"Charging Station"})]}),n.jsx("div",{style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Click stations below for details"})]})]})}),n.jsxs("div",{style:{flex:"1",display:"flex",flexDirection:"column",gap:"20px"},children:[n.jsx("h2",{style:{fontSize:"32px",fontWeight:700,marginBottom:"10px",letterSpacing:"-0.5px"},children:"All Charging Stations"}),r.map(i=>n.jsxs("div",{onClick:()=>t(i.id===e?null:i.id),style:{padding:"28px",backgroundColor:e===i.id?"#f8f9fa":"#fff",border:e===i.id?"2px solid #252728":"1px solid #e9ecef",borderRadius:"12px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:e===i.id?"0 8px 24px rgba(0,0,0,0.12)":"0 2px 8px rgba(0,0,0,0.04)"},onMouseEnter:o=>{e!==i.id&&(o.currentTarget.style.boxShadow="0 6px 20px rgba(0,0,0,0.08)",o.currentTarget.style.borderColor="#dee2e6")},onMouseLeave:o=>{e!==i.id&&(o.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.04)",o.currentTarget.style.borderColor="#e9ecef")},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"8px"},children:i.name}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#666",fontSize:"14px",marginBottom:"12px"},children:[n.jsx(Xn,{size:16}),n.jsxs("span",{children:[i.address,", ",i.island]})]}),n.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"16px",flexWrap:"wrap"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Type"}),n.jsx("div",{style:{fontSize:"15px",fontWeight:600,marginTop:"4px",color:"#252728"},children:i.type})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Power"}),n.jsx("div",{style:{fontSize:"15px",fontWeight:600,marginTop:"4px",color:"#252728"},children:i.power})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"11px",color:"#666",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:"Hours"}),n.jsx("div",{style:{fontSize:"15px",fontWeight:600,marginTop:"4px",color:"#252728"},children:i.hours})]})]})]}),n.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"50%",backgroundColor:e===i.id?"#252728":"#f8f9fa",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease"},children:n.jsx(ei,{size:20,color:e===i.id?"#fff":"#252728"})})]}),e===i.id&&n.jsx("div",{style:{marginTop:"20px",paddingTop:"20px",borderTop:"1px solid #dee2e6"},children:n.jsxs("a",{href:`https://maps.google.com/?q=${i.lat},${i.lng}`,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 28px",backgroundColor:"#252728",color:"#fff",textDecoration:"none",fontWeight:600,fontSize:"14px",borderRadius:"6px",transition:"all 0.3s ease"},onMouseEnter:o=>{o.currentTarget.style.backgroundColor="#3a3b3d",o.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:o=>{o.currentTarget.style.backgroundColor="#252728",o.currentTarget.style.transform="translateY(0)"},children:[n.jsx(up,{size:16}),"Get Directions"]})})]},i.id))]})]})}),n.jsx("div",{style:{backgroundColor:"#f8f9fa",padding:"80px 20px"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:700,marginBottom:"50px",textAlign:"center",letterSpacing:"-0.5px"},children:"Charging Made Simple"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px"},children:[n.jsxs("div",{style:{padding:"40px",backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[n.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"#252728",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:n.jsx(ei,{size:24,color:"#fff"})}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px"},children:"Fast Charging"}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#666"},children:"Most stations offer fast charging capabilities, getting you back on the road quickly."})]}),n.jsxs("div",{style:{padding:"40px",backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[n.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"#252728",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:n.jsx(vl,{size:24,color:"#fff"})}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px"},children:"24/7 Access"}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#666"},children:"Many charging stations are available around the clock for your convenience."})]}),n.jsxs("div",{style:{padding:"40px",backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[n.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"#252728",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:n.jsx(Xn,{size:24,color:"#fff"})}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"12px"},children:"Strategic Locations"}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#666"},children:"Conveniently located near popular destinations and key areas across the islands."})]})]})]})}),n.jsx("div",{style:{backgroundColor:"#F7F7F7",padding:"64px 20px"},children:n.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"24px",fontWeight:600,marginBottom:"40px"},children:"Stay up to date of the latest news from BYD"}),n.jsx("div",{style:{maxWidth:"880px",margin:"0 auto"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[n.jsxs("div",{style:{display:"flex",gap:"15px"},children:[n.jsx("input",{type:"text",placeholder:"First Name",style:{flex:1,padding:"15px",border:"1px solid #E7E7E7",fontSize:"16px",outline:"none",borderRadius:"4px"}}),n.jsx("input",{type:"email",placeholder:"Email Address",style:{flex:1,padding:"15px",border:"1px solid #E7E7E7",fontSize:"16px",outline:"none",borderRadius:"4px"}})]}),n.jsx("div",{style:{textAlign:"left"},children:n.jsxs("label",{style:{display:"flex",alignItems:"center",fontSize:"12px",gap:"10px"},children:[n.jsx("input",{type:"checkbox"}),n.jsxs("span",{children:["I consent to my personal data being used to receive all relevant BYD email updates. For more information, please see our ",n.jsx("a",{href:"/privacy",style:{color:"#252728",textDecoration:"underline"},children:"privacy policy"}),"."]})]})}),n.jsx("button",{type:"button",style:{padding:"12px 50px",backgroundColor:"#252728",color:"#fff",border:"none",fontSize:"16px",fontWeight:600,cursor:"pointer",alignSelf:"center",borderRadius:"4px"},children:"SUBSCRIBE"})]})})]})}),n.jsx("style",{children:`
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
      `})]})},g0=()=>n.jsxs("div",{style:{fontFamily:'"Montserrat", Arial, "Helvetica Neue", Helvetica, sans-serif',margin:0,padding:0,backgroundColor:"#ffffff",color:"#1a1a1a",overflowX:"hidden"},children:[n.jsx("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:1e3,backgroundColor:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(212, 175, 55, 0.15)",transition:"all 0.3s ease",boxShadow:"0 2px 20px rgba(0, 0, 0, 0.05)"},children:n.jsxs("div",{style:{maxWidth:"1920px",margin:"0 auto",padding:"20px 60px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"32px",fontWeight:"700",letterSpacing:"4px",background:"linear-gradient(135deg, #1a1a1a 0%, #d4af37 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"BYD"}),n.jsxs("nav",{style:{display:"flex",gap:"45px",alignItems:"center"},children:[["Overview","Design","Performance","Technology","Configure"].map(e=>n.jsx("a",{href:`#${e.toLowerCase()}`,style:{color:"#1a1a1a",textDecoration:"none",fontSize:"14px",fontWeight:"500",letterSpacing:"1px",position:"relative",padding:"8px 0",transition:"all 0.3s ease",cursor:"pointer"},onMouseEnter:t=>{t.currentTarget.style.color="#d4af37"},onMouseLeave:t=>{t.currentTarget.style.color="#1a1a1a"},children:e},e)),n.jsx("button",{style:{backgroundColor:"#d4af37",border:"none",color:"#fff",padding:"12px 28px",fontSize:"12px",fontWeight:"600",letterSpacing:"1.5px",cursor:"pointer",transition:"all 0.3s ease",borderRadius:"2px",textTransform:"uppercase",boxShadow:"0 4px 15px rgba(212, 175, 55, 0.3)"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 6px 20px rgba(212, 175, 55, 0.4)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 4px 15px rgba(212, 175, 55, 0.3)"},children:"Test Drive"})]})]})}),n.jsxs("section",{style:{height:"100vh",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #f5f5f5 100%)",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
            radial-gradient(circle at 30% 40%, rgba(212, 175, 55, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(26, 26, 26, 0.02) 0%, transparent 50%)
          `,zIndex:1}}),n.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",maxWidth:"1400px",padding:"0 60px"},children:[n.jsx("div",{style:{fontSize:"14px",fontWeight:"500",letterSpacing:"4px",marginBottom:"20px",color:"#d4af37",textTransform:"uppercase",animation:"fadeInUp 1s ease-out"},children:"BYD SEALION 7"}),n.jsx("h1",{style:{fontSize:"120px",fontWeight:"700",letterSpacing:"10px",margin:"0 0 40px 0",lineHeight:"1",background:"linear-gradient(135deg, #1a1a1a 0%, #d4af37 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"fadeInUp 1.2s ease-out"},children:"PURE LUXURY"}),n.jsxs("div",{style:{width:"100%",height:"500px",margin:"60px 0",background:"linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(212, 175, 55, 0.15)",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.08)",animation:"fadeInUp 1.4s ease-out",position:"relative",overflow:"hidden"},children:[n.jsx("div",{style:{fontSize:"180px",fontWeight:"900",opacity:"0.03",letterSpacing:"20px",color:"#1a1a1a",position:"absolute"},children:"SEALION 7"}),n.jsx("div",{style:{fontSize:"24px",fontWeight:"300",letterSpacing:"3px",color:"rgba(26, 26, 26, 0.3)",zIndex:1},children:"[Hero Car Image]"})]}),n.jsx("p",{style:{fontSize:"20px",fontWeight:"300",letterSpacing:"2px",marginBottom:"50px",color:"#4a4a4a",lineHeight:"1.8",maxWidth:"800px",margin:"0 auto 50px",animation:"fadeInUp 1.6s ease-out"},children:"Where sophistication meets sustainable innovation. Experience the pinnacle of electric mobility."}),n.jsxs("div",{style:{display:"flex",gap:"20px",justifyContent:"center",animation:"fadeInUp 1.8s ease-out"},children:[n.jsx("button",{style:{backgroundColor:"#d4af37",border:"none",color:"#fff",padding:"18px 50px",fontSize:"14px",fontWeight:"600",letterSpacing:"2px",cursor:"pointer",transition:"all 0.4s ease",textTransform:"uppercase",boxShadow:"0 10px 40px rgba(212, 175, 55, 0.3)",borderRadius:"2px"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-3px)",e.currentTarget.style.boxShadow="0 15px 50px rgba(212, 175, 55, 0.5)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 10px 40px rgba(212, 175, 55, 0.3)"},children:"Configure Your SEALION 7"}),n.jsx("button",{style:{backgroundColor:"transparent",border:"2px solid #1a1a1a",color:"#1a1a1a",padding:"18px 50px",fontSize:"14px",fontWeight:"600",letterSpacing:"2px",cursor:"pointer",transition:"all 0.4s ease",textTransform:"uppercase",borderRadius:"2px"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#1a1a1a",e.currentTarget.style.color="#fff",e.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="transparent",e.currentTarget.style.color="#1a1a1a",e.currentTarget.style.transform="translateY(0)"},children:"Download Brochure"})]})]})]}),n.jsx("section",{style:{padding:"100px 60px",backgroundColor:"#ffffff",borderBottom:"1px solid rgba(0, 0, 0, 0.05)"},children:n.jsx("div",{style:{maxWidth:"1600px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"60px"},children:[{value:"530 km",label:"Range (WLTP)",icon:"⚡"},{value:"4.5s",label:"0-100 km/h",icon:"🚀"},{value:"530 HP",label:"Max Power",icon:"💪"},{value:"82.5 kWh",label:"Battery",icon:"🔋"}].map((e,t)=>n.jsxs("div",{style:{textAlign:"center",padding:"40px 30px",backgroundColor:"#fafafa",borderRadius:"8px",border:"1px solid rgba(212, 175, 55, 0.1)",transition:"all 0.4s ease",cursor:"pointer"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-8px)",r.currentTarget.style.boxShadow="0 15px 40px rgba(212, 175, 55, 0.15)",r.currentTarget.style.borderColor="#d4af37"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="none",r.currentTarget.style.borderColor="rgba(212, 175, 55, 0.1)"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"15px"},children:e.icon}),n.jsx("div",{style:{fontSize:"42px",fontWeight:"700",color:"#d4af37",marginBottom:"10px",letterSpacing:"1px"},children:e.value}),n.jsx("div",{style:{fontSize:"14px",color:"#6a6a6a",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:"500"},children:e.label})]},t))})}),n.jsx("section",{style:{padding:"140px 60px",background:"linear-gradient(180deg, #ffffff 0%, #fafafa 100%)"},children:n.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"80px"},children:[n.jsx("div",{style:{fontSize:"14px",letterSpacing:"4px",color:"#d4af37",marginBottom:"20px",fontWeight:"500",textTransform:"uppercase"},children:"Exterior Design"}),n.jsx("h2",{style:{fontSize:"56px",fontWeight:"700",letterSpacing:"3px",margin:0,background:"linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Sculpted Elegance"})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"center",marginBottom:"100px"},children:[n.jsx("div",{style:{height:"500px",background:"linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, #ffffff 100%)",borderRadius:"12px",border:"1px solid rgba(212, 175, 55, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.05)"},children:n.jsx("div",{style:{fontSize:"24px",fontWeight:"300",letterSpacing:"3px",color:"rgba(26, 26, 26, 0.2)"},children:"[Exterior View]"})}),n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"36px",fontWeight:"600",marginBottom:"25px",color:"#1a1a1a",letterSpacing:"1px"},children:"Aerodynamic Perfection"}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.8",color:"#4a4a4a",marginBottom:"30px",letterSpacing:"0.5px"},children:"Every curve, every line has been meticulously crafted to reduce drag while creating a commanding presence on the road. The flowing silhouette seamlessly blends form and function."}),n.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["LED Matrix Headlights with Dynamic Signature","Frameless Doors with Soft-Close Technology",'20" Aerodynamic Alloy Wheels',"Panoramic Glass Roof"].map((e,t)=>n.jsxs("li",{style:{fontSize:"16px",color:"#1a1a1a",marginBottom:"15px",paddingLeft:"30px",position:"relative",letterSpacing:"0.5px"},children:[n.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37",fontWeight:"700"},children:"✓"}),e]},t))})]})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"center"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"14px",letterSpacing:"4px",color:"#d4af37",marginBottom:"20px",fontWeight:"500",textTransform:"uppercase"},children:"Interior Design"}),n.jsx("h3",{style:{fontSize:"36px",fontWeight:"600",marginBottom:"25px",color:"#1a1a1a",letterSpacing:"1px"},children:"Refined Sanctuary"}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.8",color:"#4a4a4a",marginBottom:"30px",letterSpacing:"0.5px"},children:"Step into a world of premium materials, ambient lighting, and intuitive technology. Every detail designed for comfort and sophistication."}),n.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["Nappa Leather Seats with Heating & Ventilation",'15.6" Rotating Touchscreen Display',"Premium Sound System with 12 Speakers","Ambient Lighting with 128 Colors"].map((e,t)=>n.jsxs("li",{style:{fontSize:"16px",color:"#1a1a1a",marginBottom:"15px",paddingLeft:"30px",position:"relative",letterSpacing:"0.5px"},children:[n.jsx("span",{style:{position:"absolute",left:0,color:"#d4af37",fontWeight:"700"},children:"✓"}),e]},t))})]}),n.jsx("div",{style:{height:"500px",background:"linear-gradient(135deg, #ffffff 0%, rgba(212, 175, 55, 0.08) 100%)",borderRadius:"12px",border:"1px solid rgba(212, 175, 55, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.05)"},children:n.jsx("div",{style:{fontSize:"24px",fontWeight:"300",letterSpacing:"3px",color:"rgba(26, 26, 26, 0.2)"},children:"[Interior View]"})})]})]})}),n.jsx("section",{style:{padding:"140px 60px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto",textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"14px",letterSpacing:"4px",color:"#d4af37",marginBottom:"20px",fontWeight:"500",textTransform:"uppercase"},children:"Advanced Technology"}),n.jsx("h2",{style:{fontSize:"56px",fontWeight:"700",letterSpacing:"3px",marginBottom:"80px",background:"linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Intelligent Innovation"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"50px"},children:[{title:"Blade Battery",description:"Revolutionary safety and longevity with BYD's proprietary battery technology",icon:"🔋"},{title:"ITM Platform",description:"Intelligent Torque Management for optimal performance and efficiency",icon:"⚙️"},{title:"ADAS Level 2+",description:"Advanced driver assistance with adaptive cruise and lane centering",icon:"🤖"}].map((e,t)=>n.jsxs("div",{style:{padding:"50px 40px",backgroundColor:"#fafafa",borderRadius:"12px",border:"1px solid rgba(212, 175, 55, 0.1)",transition:"all 0.4s ease",cursor:"pointer"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-10px)",r.currentTarget.style.boxShadow="0 20px 50px rgba(212, 175, 55, 0.15)",r.currentTarget.style.borderColor="#d4af37"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="none",r.currentTarget.style.borderColor="rgba(212, 175, 55, 0.1)"},children:[n.jsx("div",{style:{fontSize:"64px",marginBottom:"25px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"20px",color:"#1a1a1a",letterSpacing:"1px"},children:e.title}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"1.7",color:"#6a6a6a",letterSpacing:"0.5px"},children:e.description})]},t))})]})}),n.jsx("section",{style:{padding:"120px 60px",background:"linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"48px",fontWeight:"700",letterSpacing:"3px",marginBottom:"30px",background:"linear-gradient(135deg, #1a1a1a 0%, #d4af37 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Experience The SEALION 7"}),n.jsx("p",{style:{fontSize:"20px",lineHeight:"1.8",color:"#4a4a4a",marginBottom:"50px",letterSpacing:"0.5px"},children:"Schedule your exclusive test drive today and discover what true electric luxury feels like."}),n.jsxs("div",{style:{display:"flex",gap:"25px",justifyContent:"center"},children:[n.jsx("button",{style:{backgroundColor:"#d4af37",border:"none",color:"#fff",padding:"20px 55px",fontSize:"15px",fontWeight:"600",letterSpacing:"2px",cursor:"pointer",transition:"all 0.4s ease",textTransform:"uppercase",boxShadow:"0 10px 40px rgba(212, 175, 55, 0.3)",borderRadius:"2px"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-3px)",e.currentTarget.style.boxShadow="0 15px 50px rgba(212, 175, 55, 0.5)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 10px 40px rgba(212, 175, 55, 0.3)"},children:"Book Test Drive"}),n.jsx("button",{style:{backgroundColor:"transparent",border:"2px solid #1a1a1a",color:"#1a1a1a",padding:"20px 55px",fontSize:"15px",fontWeight:"600",letterSpacing:"2px",cursor:"pointer",transition:"all 0.4s ease",textTransform:"uppercase",borderRadius:"2px"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#1a1a1a",e.currentTarget.style.color="#fff",e.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="transparent",e.currentTarget.style.color="#1a1a1a",e.currentTarget.style.transform="translateY(0)"},children:"Find a Dealer"})]})]})}),n.jsx("footer",{style:{backgroundColor:"#f5f5f5",borderTop:"1px solid rgba(0, 0, 0, 0.08)",padding:"80px 60px 40px"},children:n.jsxs("div",{style:{maxWidth:"1920px",margin:"0 auto"},children:[n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"50px",marginBottom:"60px"},children:[{title:"Models",links:["BYD DOLPHIN","BYD ATTO 3","BYD SEAL","BYD SEALION 7"]},{title:"About BYD",links:["Company","News","Careers"]},{title:"Support",links:["Contact Us","Find a Dealer","FAQ"]},{title:"Legal",links:["Privacy Policy","Terms of Use","Cookies"]},{title:"Connect",links:["Facebook","Instagram","LinkedIn","YouTube"]}].map((e,t)=>n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"14px",fontWeight:"700",letterSpacing:"2px",marginBottom:"25px",color:"#1a1a1a",textTransform:"uppercase"},children:e.title}),n.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:e.links.map((r,i)=>n.jsx("li",{style:{marginBottom:"12px"},children:n.jsx("a",{href:"#",style:{color:"#6a6a6a",textDecoration:"none",fontSize:"14px",letterSpacing:"0.5px",transition:"all 0.3s ease",display:"inline-block"},onMouseEnter:o=>{o.currentTarget.style.color="#d4af37",o.currentTarget.style.paddingLeft="5px"},onMouseLeave:o=>{o.currentTarget.style.color="#6a6a6a",o.currentTarget.style.paddingLeft="0"},children:r})},i))})]},t))}),n.jsx("div",{style:{paddingTop:"30px",borderTop:"1px solid rgba(0, 0, 0, 0.05)",fontSize:"12px",color:"#8a8a8a",letterSpacing:"0.5px",lineHeight:"1.8",textAlign:"center"},children:"© 2025 BYD Europe B.V. All rights reserved. | BYD (U.K.) CO., LTD. | Company Registration Number 08458577"})]})}),n.jsx("style",{children:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }
      `})]});function x0(){return n.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[n.jsx("section",{style:{minHeight:"400px",background:"linear-gradient(135deg, #2d3436 0%, #3276AE 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[n.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Find a BYD Store"}),n.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Visit us at one of our locations across the UK"})]})}),n.jsx("section",{style:{padding:"60px 20px",backgroundColor:"#f8f9fa"},children:n.jsx("div",{style:{maxWidth:"800px",margin:"0 auto"},children:n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"40px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h2",{style:{fontSize:"28px",fontWeight:"600",marginBottom:"30px",color:"#252728",textAlign:"center"},children:"Search for Your Nearest Store"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[n.jsx("input",{type:"text",placeholder:"Enter postcode or city",style:{width:"100%",padding:"16px 20px",fontSize:"16px",border:"2px solid #e5e7eb",borderRadius:"4px",boxSizing:"border-box",transition:"border-color 0.3s ease"}}),n.jsxs("select",{style:{width:"100%",padding:"16px 20px",fontSize:"16px",border:"2px solid #e5e7eb",borderRadius:"4px",boxSizing:"border-box",backgroundColor:"#ffffff"},children:[n.jsx("option",{children:"All Services"}),n.jsx("option",{children:"Sales"}),n.jsx("option",{children:"Service & Maintenance"}),n.jsx("option",{children:"Test Drives"}),n.jsx("option",{children:"Parts"})]}),n.jsx("button",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(50, 118, 174, 0.3)"},children:"Search Locations"})]})]})})}),n.jsx("section",{style:{padding:"0",backgroundColor:"#e5e7eb",minHeight:"500px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{textAlign:"center",color:"#6b7280"},children:[n.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n.jsx("p",{style:{fontSize:"18px",marginTop:"20px"},children:"Interactive Map"})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Featured Locations"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"40px"},children:[{name:"BYD London Central",address:"123 Oxford Street, London, W1D 2HG",phone:"+44 20 7946 0958",services:["Sales","Service","Test Drives","Parts"]},{name:"BYD Manchester",address:"456 Deansgate, Manchester, M3 2AY",phone:"+44 161 839 3456",services:["Sales","Service","Test Drives"]},{name:"BYD Birmingham",address:"789 High Street, Birmingham, B1 1AA",phone:"+44 121 643 2000",services:["Sales","Service","Test Drives","Parts"]}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"32px",borderRadius:"8px",border:"1px solid #e5e7eb",transition:"all 0.3s ease"},children:[n.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"20px",color:"#3276AE"},children:e.name}),n.jsxs("div",{style:{marginBottom:"16px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",marginBottom:"12px"},children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#5f5f5f",strokeWidth:"2",style:{flexShrink:0,marginTop:"2px"},children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n.jsx("p",{style:{fontSize:"15px",color:"#5f5f5f",lineHeight:"1.5",margin:0},children:e.address})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#5f5f5f",strokeWidth:"2",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),n.jsx("p",{style:{fontSize:"15px",color:"#5f5f5f",margin:0},children:e.phone})]})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("p",{style:{fontSize:"14px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:"Services Available:"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:e.services.map((r,i)=>n.jsx("span",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"6px 12px",fontSize:"13px",borderRadius:"4px",fontWeight:"500"},children:r},i))})]}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{style:{flex:1,backgroundColor:"#3276AE",color:"#ffffff",padding:"12px",fontSize:"14px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:"Get Directions"}),n.jsx("button",{style:{flex:1,backgroundColor:"#ffffff",color:"#3276AE",padding:"12px",fontSize:"14px",fontWeight:"600",border:"2px solid #3276AE",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:"Contact Store"})]})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"What Our Stores Offer"}),n.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f"},children:"Experience world-class service at every BYD location"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px"},children:[{title:"Expert Sales Team",description:"Knowledgeable staff to help you find the perfect BYD vehicle"},{title:"Test Drive Center",description:"State-of-the-art facilities for comprehensive test drives"},{title:"Service & Maintenance",description:"Certified technicians and genuine BYD parts"},{title:"Customer Lounge",description:"Comfortable waiting areas with complimentary refreshments"},{title:"Charging Facilities",description:"On-site charging stations for your convenience"},{title:"Finance Advice",description:"Expert guidance on financing and leasing options"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#3276AE"},children:e.title}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#3276AE",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Can't Find a Store Near You?"}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Contact our customer service team and we'll help you find the best solution"}),n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Contact Us"})]})})]})}function y0(){return n.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[n.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[n.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Cash Purchase"}),n.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Buy your BYD outright and own it from day one"}),n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"View Current Offers"})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Why Buy With Cash?"}),n.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto 60px"},children:"Purchasing your BYD with cash offers simplicity, ownership, and potential savings"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"40px"},children:[{icon:"💰",title:"No Interest Charges",description:"Avoid paying interest on finance agreements and save money over the lifetime of ownership"},{icon:"🔑",title:"Immediate Ownership",description:"The vehicle is yours from day one with no monthly payments or restrictions"},{icon:"✨",title:"Complete Freedom",description:"No mileage restrictions, modification limits, or early termination fees"},{icon:"📈",title:"Better Resale Value",description:"Sell your vehicle whenever you choose and keep 100% of the proceeds"},{icon:"⚡",title:"Simplified Process",description:"Straightforward purchase with minimal paperwork and faster delivery"},{icon:"🎯",title:"Potential Discounts",description:"Cash buyers may be eligible for special offers and dealer incentives"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"40px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",transition:"all 0.3s ease",textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"20px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"22px",fontWeight:"600",marginBottom:"16px",color:"#3276AE"},children:e.title}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Cash Purchase Process"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"},children:[{step:"1",title:"Choose Your BYD",description:"Select your preferred model, trim level, and options from our range"},{step:"2",title:"Get Your Quote",description:"Receive a detailed quote including any available cash purchase incentives"},{step:"3",title:"Reserve Your Vehicle",description:"Pay a refundable deposit to secure your chosen BYD"},{step:"4",title:"Complete Payment",description:"Transfer the full balance via bank transfer or cleared funds"},{step:"5",title:"Collection Day",description:"Collect your new BYD and drive away with complete ownership"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",position:"relative",paddingTop:"60px"},children:[n.jsx("div",{style:{position:"absolute",top:"20px",left:"30px",width:"40px",height:"40px",backgroundColor:"#3276AE",color:"#ffffff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"700"},children:e.step}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:e.title}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Available for Cash Purchase"}),n.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f"},children:"All BYD models are available for cash purchase with competitive pricing"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"30px"},children:[{model:"BYD DOLPHIN",price:"From £26,000",type:"Electric Hatchback"},{model:"BYD ATTO 3",price:"From £38,000",type:"Electric SUV"},{model:"BYD SEAL",price:"From £45,000",type:"Electric Saloon"},{model:"BYD SEAL U DM-i",price:"From £40,000",type:"Plug-in Hybrid SUV"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"30px",borderRadius:"8px",border:"1px solid #e5e7eb",transition:"all 0.3s ease"},children:[n.jsx("div",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"6px 12px",borderRadius:"4px",fontSize:"13px",fontWeight:"600",display:"inline-block",marginBottom:"16px"},children:e.type}),n.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:e.model}),n.jsx("p",{style:{fontSize:"28px",fontWeight:"700",color:"#3276AE",marginBottom:"24px"},children:e.price}),n.jsx("button",{style:{width:"100%",backgroundColor:"#3276AE",color:"#ffffff",padding:"14px",fontSize:"15px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",marginBottom:"12px"},children:"Get Quote"}),n.jsx("button",{style:{width:"100%",backgroundColor:"#ffffff",color:"#3276AE",padding:"14px",fontSize:"15px",fontWeight:"600",border:"2px solid #3276AE",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:"View Details"})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Payment Methods"}),n.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f"},children:"We accept various secure payment methods for your convenience"}),n.jsx("div",{style:{backgroundColor:"#ffffff",padding:"50px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[{method:"Bank Transfer (BACS)",description:"Secure electronic transfer directly from your bank account",recommended:!0},{method:"Debit Card",description:"Pay with your debit card (subject to daily limits)",recommended:!1},{method:"Cashier's Cheque",description:"Bank-guaranteed cheque (subject to clearance period)",recommended:!1},{method:"Building Society Cheque",description:"Guaranteed funds from a building society (subject to verification)",recommended:!1}].map((e,t)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"24px",backgroundColor:e.recommended?"#e8f4f8":"#f8f9fa",borderRadius:"8px",border:e.recommended?"2px solid #3276AE":"1px solid #e5e7eb",position:"relative"},children:[e.recommended&&n.jsx("div",{style:{position:"absolute",top:"-12px",left:"20px",backgroundColor:"#3276AE",color:"#ffffff",padding:"4px 12px",borderRadius:"4px",fontSize:"12px",fontWeight:"600"},children:"RECOMMENDED"}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h4",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:e.method}),n.jsx("p",{style:{fontSize:"15px",color:"#5f5f5f",margin:0},children:e.description})]}),n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:e.recommended?"#3276AE":"#9ca3af",strokeWidth:"2",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})})]},t))})})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Frequently Asked Questions"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[{question:"Can I negotiate the price when buying with cash?",answer:"Yes, cash buyers may be eligible for special incentives. Contact your local BYD dealer to discuss available offers."},{question:"How long does the cash purchase process take?",answer:"Once payment is confirmed, you can typically collect your vehicle within 3-5 business days, subject to availability."},{question:"Do I need to pay the full amount upfront?",answer:"A refundable deposit secures your vehicle, with the balance due before collection. Payment terms can be discussed with your dealer."},{question:"What documentation do I need?",answer:"You'll need valid identification, proof of address, and payment confirmation. Your dealer will guide you through the process."}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"30px",borderRadius:"8px",border:"1px solid #e5e7eb"},children:[n.jsx("h4",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:e.question}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:e.answer})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#3276AE",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Buy Your BYD?"}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Get a personalized quote today and discover how affordable ownership can be"}),n.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Request Quote"}),n.jsx("button",{style:{backgroundColor:"transparent",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"2px solid #ffffff",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:"Find a Dealer"})]})]})})]})}function v0(){return n.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[n.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #3276AE 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[n.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Bank Finance Options"}),n.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Flexible finance solutions through leading UK banks with competitive rates"}),n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Calculate Your Finance"})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Finance Calculator"}),n.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"50px",color:"#5f5f5f"},children:"See how much your monthly payments could be"}),n.jsx("div",{style:{backgroundColor:"#ffffff",padding:"50px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"16px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:"Vehicle Price"}),n.jsx("input",{type:"range",min:"20000",max:"60000",defaultValue:"35000",style:{width:"100%",height:"6px",borderRadius:"3px",outline:"none",background:"#e5e7eb"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"8px",fontSize:"14px",color:"#6b7280"},children:[n.jsx("span",{children:"£20,000"}),n.jsx("span",{style:{fontWeight:"700",fontSize:"20px",color:"#3276AE"},children:"£35,000"}),n.jsx("span",{children:"£60,000"})]})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"16px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:"Deposit Amount"}),n.jsx("input",{type:"range",min:"0",max:"20000",defaultValue:"5000",style:{width:"100%",height:"6px",borderRadius:"3px",outline:"none",background:"#e5e7eb"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"8px",fontSize:"14px",color:"#6b7280"},children:[n.jsx("span",{children:"£0"}),n.jsx("span",{style:{fontWeight:"700",fontSize:"20px",color:"#3276AE"},children:"£5,000"}),n.jsx("span",{children:"£20,000"})]})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"16px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:"Loan Term"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(100px, 1fr))",gap:"12px"},children:["24 months","36 months","48 months","60 months"].map((e,t)=>n.jsx("button",{style:{padding:"12px",fontSize:"14px",fontWeight:"600",backgroundColor:t===1?"#3276AE":"#f8f9fa",color:t===1?"#ffffff":"#252728",border:t===1?"none":"1px solid #e5e7eb",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:e},t))})]}),n.jsx("div",{style:{backgroundColor:"#f8f9fa",padding:"32px",borderRadius:"8px",border:"2px solid #3276AE"},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("p",{style:{fontSize:"16px",color:"#5f5f5f",marginBottom:"8px"},children:"Estimated Monthly Payment"}),n.jsx("p",{style:{fontSize:"48px",fontWeight:"700",color:"#3276AE",margin:"0"},children:"£498"}),n.jsx("p",{style:{fontSize:"14px",color:"#6b7280",marginTop:"12px"},children:"Representative APR: 6.9% | Total amount payable: £34,928"})]})}),n.jsx("button",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(50, 118, 174, 0.3)",width:"100%"},children:"Apply for Finance"})]})})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Benefits of Bank Finance"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"},children:[{icon:"💳",title:"Competitive Rates",description:"Access to competitive interest rates from leading UK banks"},{icon:"🏦",title:"Trusted Lenders",description:"Work with established financial institutions you know and trust"},{icon:"⚖️",title:"FCA Regulated",description:"All lending partners are fully regulated by the Financial Conduct Authority"},{icon:"🔒",title:"Immediate Ownership",description:"You own the vehicle from day one with a personal loan"},{icon:"🔄",title:"Flexibility",description:"Choose your loan term and deposit amount to suit your budget"},{icon:"✅",title:"Simple Process",description:"Straightforward application with quick decisions"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"32px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center",transition:"all 0.3s ease"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"20px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#3276AE"},children:e.title}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"How Bank Finance Works"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"40px"},children:[{number:"01",title:"Choose Your Vehicle",description:"Select your BYD and configure it to your preferences"},{number:"02",title:"Get Pre-Approved",description:"Complete a soft credit check to see your eligibility"},{number:"03",title:"Compare Offers",description:"Review finance options from multiple banks"},{number:"04",title:"Complete Application",description:"Submit your full application to your chosen lender"},{number:"05",title:"Receive Funds",description:"Once approved, the loan is paid directly to the dealer"},{number:"06",title:"Drive Away",description:"Collect your new BYD and start your journey"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"32px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",position:"relative",paddingTop:"70px"},children:[n.jsx("div",{style:{position:"absolute",top:"24px",left:"32px",fontSize:"48px",fontWeight:"700",color:"#e5e7eb",lineHeight:"1"},children:e.number}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#252728",position:"relative",zIndex:1},children:e.title}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Our Lending Partners"}),n.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f"},children:"We work with trusted UK banks to offer you the best rates"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"30px",alignItems:"center"},children:["Barclays","Santander","HSBC","Lloyds Bank","NatWest","TSB"].map((e,t)=>n.jsx("div",{style:{backgroundColor:"#f8f9fa",padding:"40px",borderRadius:"8px",textAlign:"center",border:"1px solid #e5e7eb",transition:"all 0.3s ease"},children:n.jsx("p",{style:{fontSize:"20px",fontWeight:"600",color:"#252728",margin:0},children:e})},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Eligibility Requirements"}),n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"50px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:[n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:["Be at least 18 years old","UK resident with 3+ years address history","Have a regular source of income","Have a good credit history","Pass affordability checks","Hold a valid UK driving licence"].map((e,t)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"6px"},children:[n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#3276AE",strokeWidth:"3",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})}),n.jsx("p",{style:{fontSize:"16px",color:"#252728",margin:0},children:e})]},t))}),n.jsx("div",{style:{marginTop:"40px",padding:"24px",backgroundColor:"#e8f4f8",borderRadius:"6px",borderLeft:"4px solid #3276AE"},children:n.jsxs("p",{style:{fontSize:"15px",color:"#252728",lineHeight:"1.6",margin:0},children:[n.jsx("strong",{children:"Note:"})," Meeting these criteria doesn't guarantee approval. All applications are subject to credit and affordability checks by the lender."]})})]})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Common Questions"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[{question:"Will applying affect my credit score?",answer:"Initial soft searches won't affect your credit score. Only the final application involves a hard search which may impact your score."},{question:"Can I pay off my loan early?",answer:"Yes, most banks allow early repayment. Some may charge an early settlement fee - check with your lender for specific terms."},{question:"What happens if I miss a payment?",answer:"Contact your lender immediately if you anticipate payment difficulties. Late payments can affect your credit score and may incur charges."},{question:"Can I finance a used BYD?",answer:"Yes, bank finance is available for both new and approved used BYD vehicles, subject to the lender's criteria."}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"30px",borderRadius:"8px",border:"1px solid #e5e7eb"},children:[n.jsx("h4",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:e.question}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:e.answer})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#3276AE",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Get Started?"}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Get a personalized finance quote in minutes with no impact on your credit score"}),n.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Apply Now"}),n.jsx("button",{style:{backgroundColor:"transparent",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"2px solid #ffffff",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:"Speak to an Advisor"})]})]})})]})}function b0(){return n.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[n.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #0a192f 0%, #112240 50%, #3276AE 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[n.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Personal Contract Hire (PCH)"}),n.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Drive a brand new BYD with low fixed monthly payments"}),n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"View Lease Deals"})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"What is Personal Contract Hire?"}),n.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f",maxWidth:"800px",margin:"0 auto 60px"},children:"PCH is a flexible leasing option that lets you drive a new BYD for a fixed monthly payment without owning the vehicle"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"},children:[{icon:"📅",title:"Fixed Term",description:"Choose a lease period from 24 to 48 months"},{icon:"💷",title:"Low Monthly Payments",description:"Affordable fixed payments throughout the contract"},{icon:"🚗",title:"New Vehicle",description:"Drive the latest BYD models with the newest technology"},{icon:"🔧",title:"Maintenance Options",description:"Add a maintenance package for complete peace of mind"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"32px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"20px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#3276AE"},children:e.title}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Current Lease Offers"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"30px"},children:[{model:"BYD DOLPHIN",monthly:"£289",deposit:"£2,601",term:"36 months",mileage:"8,000 miles/year"},{model:"BYD ATTO 3",monthly:"£379",deposit:"£3,411",term:"36 months",mileage:"8,000 miles/year"},{model:"BYD SEAL",monthly:"£449",deposit:"£4,041",term:"36 months",mileage:"8,000 miles/year"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"40px",borderRadius:"8px",border:"2px solid #e5e7eb",transition:"all 0.3s ease"},children:[n.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"24px",color:"#252728"},children:e.model}),n.jsxs("div",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"24px",borderRadius:"6px",marginBottom:"24px",textAlign:"center"},children:[n.jsx("p",{style:{fontSize:"14px",opacity:"0.9",marginBottom:"8px"},children:"From"}),n.jsx("p",{style:{fontSize:"48px",fontWeight:"700",margin:"0",lineHeight:"1"},children:e.monthly}),n.jsx("p",{style:{fontSize:"14px",opacity:"0.9",marginTop:"8px"},children:"per month"})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid #e5e7eb"},children:[n.jsx("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:"Initial Payment:"}),n.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:e.deposit})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid #e5e7eb"},children:[n.jsx("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:"Contract Length:"}),n.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:e.term})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0"},children:[n.jsx("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:"Annual Mileage:"}),n.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:e.mileage})]})]}),n.jsx("button",{style:{width:"100%",backgroundColor:"#3276AE",color:"#ffffff",padding:"14px",fontSize:"15px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease"},children:"Get This Deal"})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"How PCH Works"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px"},children:[{step:"1",title:"Choose Your Vehicle",description:"Select your BYD model, lease term, and annual mileage"},{step:"2",title:"Pay Initial Deposit",description:"Make your initial payment (typically 3-9 months' payments)"},{step:"3",title:"Drive & Enjoy",description:"Drive your new BYD with fixed monthly payments"},{step:"4",title:"Return the Vehicle",description:"At the end of the term, simply return the vehicle"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"32px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",position:"relative",paddingTop:"70px"},children:[n.jsx("div",{style:{position:"absolute",top:"24px",left:"32px",width:"40px",height:"40px",backgroundColor:"#3276AE",color:"#ffffff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"700"},children:e.step}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#252728"},children:e.title}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Why Choose PCH?"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[{title:"Lower Monthly Costs",description:"PCH typically offers lower monthly payments compared to other finance options"},{title:"No Depreciation Worry",description:"You don't own the vehicle, so depreciation isn't your concern"},{title:"Drive New Cars Regularly",description:"Upgrade to the latest models every few years without the hassle of selling"},{title:"Fixed Budgeting",description:"Know exactly what you'll pay each month for the entire contract"},{title:"Optional Maintenance",description:"Add a maintenance package to cover servicing and repairs"},{title:"Road Tax Included",description:"Many PCH deals include road tax for the duration of the contract"}].map((e,t)=>n.jsxs("div",{style:{display:"flex",gap:"20px",padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e5e7eb"},children:[n.jsx("div",{style:{flexShrink:0,width:"24px",height:"24px",marginTop:"2px"},children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#3276AE",strokeWidth:"3",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})})}),n.jsxs("div",{children:[n.jsx("h4",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:e.title}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:e.description})]})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Important Considerations"}),n.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f"},children:"Things to know before leasing"}),n.jsx("div",{style:{backgroundColor:"#ffffff",padding:"50px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs("div",{style:{padding:"20px",backgroundColor:"#fff3cd",borderRadius:"6px",borderLeft:"4px solid #ffc107"},children:[n.jsx("h4",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Mileage Limits"}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:"Exceeding your agreed annual mileage will result in excess mileage charges. Choose your mileage allowance carefully."})]}),n.jsxs("div",{style:{padding:"20px",backgroundColor:"#fff3cd",borderRadius:"6px",borderLeft:"4px solid #ffc107"},children:[n.jsx("h4",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Vehicle Condition"}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:"You must return the vehicle in good condition. Damage beyond fair wear and tear may incur charges."})]}),n.jsxs("div",{style:{padding:"20px",backgroundColor:"#fff3cd",borderRadius:"6px",borderLeft:"4px solid #ffc107"},children:[n.jsx("h4",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Early Termination"}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:"Ending a lease early can be expensive. Make sure you can commit to the full term before signing."})]}),n.jsxs("div",{style:{padding:"20px",backgroundColor:"#fff3cd",borderRadius:"6px",borderLeft:"4px solid #ffc107"},children:[n.jsx("h4",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"No Ownership"}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:"You never own the vehicle with PCH. If ownership is important to you, consider other finance options."})]})]})})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#3276AE",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Lease Your BYD?"}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Get a personalized lease quote and start driving your dream BYD today"}),n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Get Your Quote"})]})})]})}function j0(){return n.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[n.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #134e5e 0%, #71b280 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[n.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"BYD Dealer Finance"}),n.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Exclusive finance deals available through authorized BYD dealers"}),n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Find Your Deal"})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"PCP Finance Options"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px"},children:[{icon:"💰",title:"Flexible Payments",description:"Lower monthly payments with an optional final payment"},{icon:"🔄",title:"Multiple Options",description:"Keep, return, or exchange your vehicle at the end"},{icon:"📊",title:"Guaranteed Value",description:"Know your vehicle's guaranteed future value upfront"},{icon:"🎯",title:"Competitive Rates",description:"Access exclusive manufacturer-backed finance rates"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"32px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"20px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#3276AE"},children:e.title}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Current PCP Offers"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"30px"},children:[{model:"BYD DOLPHIN",monthly:"£299",deposit:"£2,999",apr:"5.9%",term:"48 months"},{model:"BYD ATTO 3",monthly:"£399",deposit:"£3,999",apr:"5.9%",term:"48 months"},{model:"BYD SEAL",monthly:"£499",deposit:"£4,999",apr:"5.9%",term:"48 months"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"40px",borderRadius:"8px",border:"2px solid #e5e7eb"},children:[n.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"24px",color:"#252728"},children:e.model}),n.jsxs("div",{style:{backgroundColor:"#3276AE",color:"#ffffff",padding:"24px",borderRadius:"6px",marginBottom:"24px",textAlign:"center"},children:[n.jsx("p",{style:{fontSize:"14px",opacity:"0.9",marginBottom:"8px"},children:"From"}),n.jsx("p",{style:{fontSize:"48px",fontWeight:"700",margin:"0",lineHeight:"1"},children:e.monthly}),n.jsx("p",{style:{fontSize:"14px",opacity:"0.9",marginTop:"8px"},children:"per month"})]}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid #e5e7eb"},children:[n.jsx("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:"Deposit:"}),n.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:e.deposit})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid #e5e7eb"},children:[n.jsx("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:"APR:"}),n.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:e.apr})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0"},children:[n.jsx("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:"Term:"}),n.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:e.term})]})]}),n.jsx("button",{style:{width:"100%",backgroundColor:"#3276AE",color:"#ffffff",padding:"14px",fontSize:"15px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Get This Deal"})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#3276AE",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Find Your Perfect Finance Deal"}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Speak to a dealer today for personalized finance options"}),n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#3276AE",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Contact a Dealer"})]})})]})}function w0(){return n.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[n.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[n.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"BYD Subscription Service"}),n.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"All-inclusive car subscription with ultimate flexibility"}),n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#667eea",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Explore Plans"})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"What's Included"}),n.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"60px",color:"#5f5f5f",maxWidth:"700px",margin:"0 auto 60px"},children:"Everything you need in one simple monthly payment"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"30px"},children:[{icon:"🚗",title:"Vehicle",description:"Brand new BYD of your choice"},{icon:"🔧",title:"Maintenance",description:"All servicing and repairs included"},{icon:"🛡️",title:"Insurance",description:"Comprehensive cover included"},{icon:"🚚",title:"Breakdown Cover",description:"24/7 roadside assistance"},{icon:"🔄",title:"Vehicle Swaps",description:"Change your vehicle as needed"},{icon:"📱",title:"Digital Management",description:"Manage everything via app"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"10px",color:"#667eea"},children:e.title}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Subscription Plans"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"30px"},children:[{plan:"Starter",monthly:"£599",models:"BYD DOLPHIN",mileage:"750 miles/month",commitment:"6 months minimum"},{plan:"Premium",monthly:"£799",models:"BYD ATTO 3",mileage:"1,000 miles/month",commitment:"6 months minimum",featured:!0},{plan:"Executive",monthly:"£999",models:"BYD SEAL",mileage:"1,250 miles/month",commitment:"6 months minimum"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:e.featured?"#667eea":"#f8f9fa",padding:"40px",borderRadius:"8px",border:e.featured?"3px solid #667eea":"1px solid #e5e7eb",position:"relative",transform:e.featured?"scale(1.05)":"scale(1)"},children:[e.featured&&n.jsx("div",{style:{position:"absolute",top:"-16px",left:"50%",transform:"translateX(-50%)",backgroundColor:"#764ba2",color:"#ffffff",padding:"6px 20px",borderRadius:"20px",fontSize:"13px",fontWeight:"600"},children:"MOST POPULAR"}),n.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"20px",color:e.featured?"#ffffff":"#252728"},children:e.plan}),n.jsx("p",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"8px",color:e.featured?"#ffffff":"#667eea"},children:e.monthly}),n.jsx("p",{style:{fontSize:"14px",marginBottom:"30px",color:e.featured?"rgba(255,255,255,0.8)":"#6b7280"},children:"per month"}),n.jsx("div",{style:{marginBottom:"30px"},children:[{label:"Models",value:e.models},{label:"Monthly Mileage",value:e.mileage},{label:"Commitment",value:e.commitment}].map((r,i)=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:i<2?`1px solid ${e.featured?"rgba(255,255,255,0.2)":"#e5e7eb"}`:"none"},children:[n.jsx("span",{style:{fontSize:"14px",color:e.featured?"rgba(255,255,255,0.8)":"#5f5f5f"},children:r.label}),n.jsx("span",{style:{fontSize:"14px",fontWeight:"600",color:e.featured?"#ffffff":"#252728"},children:r.value})]},i))}),n.jsx("button",{style:{width:"100%",backgroundColor:e.featured?"#ffffff":"#667eea",color:e.featured?"#667eea":"#ffffff",padding:"14px",fontSize:"15px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Subscribe Now"})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"How It Works"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"30px"},children:[{step:"1",title:"Choose Your Plan",description:"Select the subscription tier that matches your needs and budget"},{step:"2",title:"Complete Setup",description:"Quick online application with instant approval"},{step:"3",title:"Receive Your BYD",description:"Vehicle delivered to your door within 7-14 days"},{step:"4",title:"Drive & Enjoy",description:"Unlimited flexibility with all costs included"}].map((e,t)=>n.jsxs("div",{style:{display:"flex",gap:"30px",alignItems:"center",backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"},children:[n.jsx("div",{style:{width:"60px",height:"60px",flexShrink:0,backgroundColor:"#667eea",color:"#ffffff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px",fontWeight:"700"},children:e.step}),n.jsxs("div",{children:[n.jsx("h4",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:e.title}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#5f5f5f",margin:0},children:e.description})]})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#667eea",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Subscribe?"}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Get started with the most flexible way to drive a BYD"}),n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#667eea",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Start Your Subscription"})]})})]})}function S0(){return n.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[n.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[n.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"BYD Vehicle Rentals"}),n.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Experience electric driving with flexible short-term rentals"}),n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#f5576c",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Book Now"})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Rental Options"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"},children:[{icon:"📅",title:"Daily Rental",description:"Perfect for short trips and weekend getaways",duration:"From £89/day"},{icon:"📆",title:"Weekly Rental",description:"Great for extended vacations and business trips",duration:"From £499/week"},{icon:"🗓️",title:"Monthly Rental",description:"Ideal for temporary relocations and long projects",duration:"From £1,499/month"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"40px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center",transition:"all 0.3s ease"},children:[n.jsx("div",{style:{fontSize:"64px",marginBottom:"20px"},children:e.icon}),n.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"12px",color:"#f5576c"},children:e.title}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#5f5f5f",marginBottom:"16px"},children:e.description}),n.jsx("p",{style:{fontSize:"20px",fontWeight:"700",color:"#252728"},children:e.duration})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Available Vehicles"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"30px"},children:[{model:"BYD DOLPHIN",type:"Compact Electric",daily:"£89",weekly:"£499",monthly:"£1,499"},{model:"BYD ATTO 3",type:"Electric SUV",daily:"£119",weekly:"£699",monthly:"£1,999"},{model:"BYD SEAL",type:"Executive Saloon",daily:"£149",weekly:"£899",monthly:"£2,499"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"40px",borderRadius:"8px",border:"1px solid #e5e7eb"},children:[n.jsx("div",{style:{backgroundColor:"#f5576c",color:"#ffffff",padding:"6px 12px",borderRadius:"4px",fontSize:"13px",fontWeight:"600",display:"inline-block",marginBottom:"16px"},children:e.type}),n.jsx("h3",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"24px",color:"#252728"},children:e.model}),n.jsx("div",{style:{marginBottom:"24px"},children:[{period:"Daily Rate",price:e.daily},{period:"Weekly Rate",price:e.weekly},{period:"Monthly Rate",price:e.monthly}].map((r,i)=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:i<2?"1px solid #e5e7eb":"none"},children:[n.jsxs("span",{style:{fontSize:"15px",color:"#5f5f5f"},children:[r.period,":"]}),n.jsx("span",{style:{fontSize:"15px",fontWeight:"600",color:"#252728"},children:r.price})]},i))}),n.jsx("button",{style:{width:"100%",backgroundColor:"#f5576c",color:"#ffffff",padding:"14px",fontSize:"15px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Book This Vehicle"})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"What's Included"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:["Fully charged vehicle at pickup","Comprehensive insurance coverage","24/7 breakdown assistance","Unlimited mileage on all rentals","Free charging at BYD partner stations","Flexible pickup and return locations"].map((e,t)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",backgroundColor:"#ffffff",padding:"20px",borderRadius:"6px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"},children:[n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#f5576c",strokeWidth:"3",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})}),n.jsx("p",{style:{fontSize:"16px",color:"#252728",margin:0},children:e})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Rental Requirements"}),n.jsx("div",{style:{backgroundColor:"#f8f9fa",padding:"50px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:n.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["Minimum age: 25 years old","Valid UK driving licence held for at least 2 years","Valid credit or debit card for security deposit","Proof of address (utility bill or bank statement)","Valid identification (passport or driving licence)","Security deposit: £500-£1,000 (refundable)"].map((e,t)=>n.jsx("li",{style:{fontSize:"16px",color:"#252728",padding:"12px 0",borderBottom:t<5?"1px solid #e5e7eb":"none"},children:e},t))})})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f5576c",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Rent?"}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Book your BYD rental today and experience the future of driving"}),n.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#f5576c",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Book Now"}),n.jsx("button",{style:{backgroundColor:"transparent",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"2px solid #ffffff",borderRadius:"4px",cursor:"pointer"},children:"View Locations"})]})]})})]})}function k0(){return n.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"#252728",backgroundColor:"#ffffff"},children:[n.jsx("section",{style:{minHeight:"500px",background:"linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 20px",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"900px",color:"#ffffff"},children:[n.jsx("h1",{style:{fontSize:"48px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Fleet & Business Solutions"}),n.jsx("p",{style:{fontSize:"20px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Electrify your fleet with BYD's comprehensive business solutions"}),n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#1a2a6c",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Get Fleet Quote"})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("div",{style:{maxWidth:"800px",margin:"0 auto 60px",textAlign:"center"},children:n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.8",color:"#5f5f5f"},children:"Upgrade your business fleet to electric with BYD fleet cars - where innovation meets reliability. Our advanced vehicle lineup is built to support fleet operations with impressive range, low running costs, and class-leading technology. From the agile and practical BYD ATTO 3 EV to the versatile BYD SEAL U DM-i SUV plug-in hybrid, every BYD fleet model is designed for performance, comfort, and sustainability - without compromise."})}),n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Benefits of BYD Company Cars"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"30px"},children:[{icon:"⚡",title:"Cutting-edge Electrification",description:"Go further for longer thanks to BYD's industry-leading battery technology"},{icon:"💰",title:"Cost Savings",description:"Switch to all-electric or hybrid driving and reduce your company's spend on petrol and diesel"},{icon:"⭐",title:"5-star Euro NCAP Safety Ratings",description:"Thanks to our advanced safety features and suite of driver assistance systems, your team can travel safely and without worry"},{icon:"🚗",title:"Options for Everyone",description:"Choose from a wide selection of electric and plug-in hybrid vehicles, to suit your fleet needs. Scalable solutions for fleets of any size"},{icon:"🛠️",title:"Support When You Need It",description:"Our team of experts provides comprehensive support, from help choosing a vehicle to ongoing maintenance"},{icon:"😊",title:"Driver Satisfaction",description:"High specification is standard giving your team an elevated driving experience"},{icon:"🛡️",title:"Industry-Leading Warranty",description:"As standard, your BYD fleet vehicle will be covered by a 6-year or 93,750-mile vehicle warranty and an 8-year or 155,350-mile battery warranty"},{icon:"🌱",title:"ESG Alignment",description:"Reduced emissions for ESG alignment and corporate sustainability goals"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"32px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",transition:"all 0.3s ease"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"20px",textAlign:"center"},children:e.icon}),n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#1a2a6c"},children:e.title}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Discover Our Models"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px"},children:[{model:"BYD DOLPHIN SURF",type:"Compact Electric City Car",tag:"All Electric"},{model:"BYD DOLPHIN",type:"Compact Electric Hatchback",tag:"All Electric"},{model:"BYD ATTO 2",type:"Electric Small SUV",tag:"All Electric"},{model:"BYD ATTO 3",type:"Electric Compact SUV",tag:"All Electric"},{model:"BYD SEAL",type:"Executive Electric Saloon",tag:"All Electric"},{model:"BYD SEALION 7",type:"Electric SUV",tag:"All Electric"},{model:"BYD SEAL U DM-i",type:"Plug-in Hybrid SUV",tag:"Plug-in Hybrid"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#ffffff",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",transition:"all 0.3s ease"},children:[n.jsx("div",{style:{backgroundColor:e.tag==="All Electric"?"#1a2a6c":"#b21f1f",color:"#ffffff",padding:"6px 12px",borderRadius:"4px",fontSize:"12px",fontWeight:"600",display:"inline-block",marginBottom:"16px"},children:e.tag}),n.jsx("h3",{style:{fontSize:"22px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:e.model}),n.jsx("p",{style:{fontSize:"15px",color:"#5f5f5f",marginBottom:"24px"},children:e.type}),n.jsx("button",{style:{width:"100%",backgroundColor:"#1a2a6c",color:"#ffffff",padding:"12px",fontSize:"14px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",marginBottom:"8px"},children:"Learn More"}),n.jsx("button",{style:{width:"100%",backgroundColor:"#ffffff",color:"#1a2a6c",padding:"12px",fontSize:"14px",fontWeight:"600",border:"2px solid #1a2a6c",borderRadius:"4px",cursor:"pointer"},children:"Request Fleet Quote"})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#ffffff"},children:n.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"60px",color:"#252728"},children:"Our Fleet Services"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"},children:[{title:"Fleet Consultation",description:"Expert advice on transitioning your fleet to electric vehicles"},{title:"Volume Discounts",description:"Competitive pricing for fleet orders of 5+ vehicles"},{title:"Flexible Finance",description:"Tailored finance packages including leasing and outright purchase"},{title:"Maintenance Plans",description:"Comprehensive service packages to keep your fleet running smoothly"},{title:"Charging Solutions",description:"Workplace charging infrastructure planning and installation"},{title:"Fleet Management",description:"Digital tools to monitor and manage your entire fleet"},{title:"Driver Training",description:"EV training programs for your drivers to maximize efficiency"},{title:"Priority Support",description:"Dedicated account manager and 24/7 business support"}].map((e,t)=>n.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"30px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",textAlign:"center"},children:[n.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"12px",color:"#1a2a6c"},children:e.title}),n.jsx("p",{style:{fontSize:"15px",lineHeight:"1.6",color:"#5f5f5f"},children:e.description})]},t))})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#f8f9fa"},children:n.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",textAlign:"center",marginBottom:"20px",color:"#252728"},children:"Get Started With BYD Fleet"}),n.jsx("p",{style:{fontSize:"18px",textAlign:"center",marginBottom:"50px",color:"#5f5f5f"},children:"Tell us about your business and we'll create a tailored fleet solution"}),n.jsx("div",{style:{backgroundColor:"#ffffff",padding:"50px",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:n.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Company Name *"}),n.jsx("input",{type:"text",style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box"}})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Industry *"}),n.jsxs("select",{style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box",backgroundColor:"#ffffff"},children:[n.jsx("option",{children:"Please select"}),n.jsx("option",{children:"Construction"}),n.jsx("option",{children:"Healthcare"}),n.jsx("option",{children:"Logistics & Transport"}),n.jsx("option",{children:"Professional Services"}),n.jsx("option",{children:"Retail"}),n.jsx("option",{children:"Technology"}),n.jsx("option",{children:"Other"})]})]})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Full Name *"}),n.jsx("input",{type:"text",style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box"}})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Job Title *"}),n.jsx("input",{type:"text",style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box"}})]})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Email *"}),n.jsx("input",{type:"email",style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box"}})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Phone Number *"}),n.jsx("input",{type:"tel",style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box"}})]})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Fleet Size *"}),n.jsxs("select",{style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box",backgroundColor:"#ffffff"},children:[n.jsx("option",{children:"Please select"}),n.jsx("option",{children:"5-10 vehicles"}),n.jsx("option",{children:"11-25 vehicles"}),n.jsx("option",{children:"26-50 vehicles"}),n.jsx("option",{children:"51-100 vehicles"}),n.jsx("option",{children:"100+ vehicles"})]})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"600",marginBottom:"8px",color:"#252728"},children:"Your Requirements"}),n.jsx("textarea",{rows:4,style:{width:"100%",padding:"12px 16px",fontSize:"16px",border:"1px solid #d1d5db",borderRadius:"4px",boxSizing:"border-box",fontFamily:"Arial, sans-serif",resize:"vertical"},placeholder:"Tell us about your fleet requirements..."})]}),n.jsx("button",{type:"submit",style:{backgroundColor:"#1a2a6c",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(26, 42, 108, 0.3)",marginTop:"16px"},children:"Submit Enquiry"})]})})]})}),n.jsx("section",{style:{padding:"80px 20px",backgroundColor:"#1a2a6c",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",color:"#ffffff"},children:[n.jsx("h2",{style:{fontSize:"36px",fontWeight:"700",marginBottom:"20px",lineHeight:"1.2"},children:"Ready to Electrify Your Fleet?"}),n.jsx("p",{style:{fontSize:"18px",lineHeight:"1.6",marginBottom:"40px",opacity:"0.9"},children:"Our fleet specialists are ready to help you transition to electric"}),n.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[n.jsx("button",{style:{backgroundColor:"#ffffff",color:"#1a2a6c",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"none",borderRadius:"4px",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)"},children:"Contact Fleet Team"}),n.jsx("button",{style:{backgroundColor:"transparent",color:"#ffffff",padding:"16px 48px",fontSize:"16px",fontWeight:"600",border:"2px solid #ffffff",borderRadius:"4px",cursor:"pointer"},children:"Download Brochure"})]})]})})]})}const C0=()=>{const{pathname:e,hash:t}=En();return y.useEffect(()=>{t?setTimeout(()=>{const r=document.querySelector(t);r&&r.scrollIntoView({behavior:"smooth",block:"start"})},100):window.scrollTo(0,0)},[e,t]),null},z0=()=>n.jsx(Kh,{children:n.jsxs("div",{className:"app",children:[n.jsx(tm,{}),n.jsx(C0,{}),n.jsx("main",{className:"main-content",children:n.jsxs(Yh,{children:[n.jsx(U,{path:"/",element:n.jsx(Rm,{})}),n.jsx(U,{path:"/models",element:n.jsx(Lm,{})}),n.jsx(U,{path:"/models/:id",element:n.jsx(Mm,{})}),n.jsx(U,{path:"/modelpage",element:n.jsx(g0,{})}),n.jsx(U,{path:"/technology",element:n.jsx(Im,{})}),n.jsx(U,{path:"/about",element:n.jsx(Ym,{})}),n.jsx(U,{path:"/contact",element:n.jsx(r0,{})}),n.jsx(U,{path:"/ownership",element:n.jsx(i0,{})}),n.jsx(U,{path:"/ownership/assistance",element:n.jsx(a0,{})}),n.jsx(U,{path:"/ownership/service-maintenance",element:n.jsx(s0,{})}),n.jsx(U,{path:"/ownership/charge-cards",element:n.jsx(p0,{})}),n.jsx(U,{path:"/ownership/warranty",element:n.jsx(h0,{})}),n.jsx(U,{path:"/ownership/charging-locations",element:n.jsx(m0,{})}),n.jsx(U,{path:"/purchasing",element:n.jsx(o0,{})}),n.jsx(U,{path:"/purchasing/locations",element:n.jsx(x0,{})}),n.jsx(U,{path:"/purchasing/cash-purchase",element:n.jsx(y0,{})}),n.jsx(U,{path:"/purchasing/finance-bank",element:n.jsx(v0,{})}),n.jsx(U,{path:"/purchasing/lease",element:n.jsx(b0,{})}),n.jsx(U,{path:"/purchasing/finance-dealer",element:n.jsx(j0,{})}),n.jsx(U,{path:"/purchasing/subscriptions",element:n.jsx(w0,{})}),n.jsx(U,{path:"/purchasing/rentals",element:n.jsx(S0,{})}),n.jsx(U,{path:"/purchasing/fleet-solutions",element:n.jsx(k0,{})}),n.jsx(U,{path:"/test-drive",element:n.jsx(l0,{})})]})}),n.jsx(nm,{})]})}),B0=bo.createRoot(document.getElementById("root"));B0.render(n.jsx(Qs.StrictMode,{children:n.jsx(z0,{})}));
