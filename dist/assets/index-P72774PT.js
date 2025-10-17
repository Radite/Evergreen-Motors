function Hu(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Yu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ys={exports:{}},mi={},xs={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),Gu=Symbol.for("react.portal"),Qu=Symbol.for("react.fragment"),Ku=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),qu=Symbol.for("react.provider"),Ju=Symbol.for("react.context"),Zu=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.memo"),nd=Symbol.for("react.lazy"),ta=Symbol.iterator;function rd(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var ws={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},js=Object.assign,ks={};function pn(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||ws}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ss(){}Ss.prototype=pn.prototype;function il(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||ws}var ol=il.prototype=new Ss;ol.constructor=il;js(ol,pn.prototype);ol.isPureReactComponent=!0;var na=Array.isArray,Ns=Object.prototype.hasOwnProperty,ll={current:null},bs={key:!0,ref:!0,__self:!0,__source:!0};function Cs(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ns.call(t,r)&&!bs.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:or,type:e,key:o,ref:a,props:i,_owner:ll.current}}function id(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function al(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function od(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ra=/\/+/g;function Ri(e,t){return typeof e=="object"&&e!==null&&e.key!=null?od(""+e.key):t.toString(36)}function _r(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case or:case Gu:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ri(a,0):r,na(i)?(n="",e!=null&&(n=e.replace(ra,"$&/")+"/"),_r(i,t,n,"",function(u){return u})):i!=null&&(al(i)&&(i=id(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ra,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",na(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+Ri(o,s);a+=_r(o,t,n,c,i)}else if(c=rd(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+Ri(o,s++),a+=_r(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function mr(e,t,n){if(e==null)return e;var r=[],i=0;return _r(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ld(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Tr={transition:null},ad={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:ll};function Es(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!al(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=pn;T.Fragment=Qu;T.Profiler=Xu;T.PureComponent=il;T.StrictMode=Ku;T.Suspense=ed;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ad;T.act=Es;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=js({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ll.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Ns.call(t,c)&&!bs.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:or,type:e.type,key:i,ref:o,props:r,_owner:a}};T.createContext=function(e){return e={$$typeof:Ju,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qu,_context:e},e.Consumer=e};T.createElement=Cs;T.createFactory=function(e){var t=Cs.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Zu,render:e}};T.isValidElement=al;T.lazy=function(e){return{$$typeof:nd,_payload:{_status:-1,_result:e},_init:ld}};T.memo=function(e,t){return{$$typeof:td,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=t}};T.unstable_act=Es;T.useCallback=function(e,t){return ue.current.useCallback(e,t)};T.useContext=function(e){return ue.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};T.useEffect=function(e,t){return ue.current.useEffect(e,t)};T.useId=function(){return ue.current.useId()};T.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ue.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};T.useRef=function(e){return ue.current.useRef(e)};T.useState=function(e){return ue.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ue.current.useTransition()};T.version="18.3.1";xs.exports=T;var k=xs.exports;const zs=Yu(k),sd=Hu({__proto__:null,default:zs},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=k,ud=Symbol.for("react.element"),dd=Symbol.for("react.fragment"),fd=Object.prototype.hasOwnProperty,pd=cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,md={key:!0,ref:!0,__self:!0,__source:!0};function Ps(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)fd.call(t,r)&&!md.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ud,type:e,key:o,ref:a,props:i,_owner:pd.current}}mi.Fragment=dd;mi.jsx=Ps;mi.jsxs=Ps;ys.exports=mi;var l=ys.exports,ao={},Ms={exports:{}},je={},_s={exports:{}},Ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,M){var _=C.length;C.push(M);e:for(;0<_;){var Y=_-1>>>1,J=C[Y];if(0<i(J,M))C[Y]=M,C[_]=J,_=Y;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var M=C[0],_=C.pop();if(_!==M){C[0]=_;e:for(var Y=0,J=C.length,fr=J>>>1;Y<fr;){var St=2*(Y+1)-1,Li=C[St],Nt=St+1,pr=C[Nt];if(0>i(Li,_))Nt<J&&0>i(pr,Li)?(C[Y]=pr,C[Nt]=_,Y=Nt):(C[Y]=Li,C[St]=_,Y=St);else if(Nt<J&&0>i(pr,_))C[Y]=pr,C[Nt]=_,Y=Nt;else break e}}return M}function i(C,M){var _=C.sortIndex-M.sortIndex;return _!==0?_:C.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],u=[],g=1,m=null,h=3,y=!1,x=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=C)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function v(C){if(w=!1,p(C),!x)if(n(c)!==null)x=!0,_i(S);else{var M=n(u);M!==null&&Ti(v,M.startTime-C)}}function S(C,M){x=!1,w&&(w=!1,f(P),P=-1),y=!0;var _=h;try{for(p(M),m=n(c);m!==null&&(!(m.expirationTime>M)||C&&!Pe());){var Y=m.callback;if(typeof Y=="function"){m.callback=null,h=m.priorityLevel;var J=Y(m.expirationTime<=M);M=e.unstable_now(),typeof J=="function"?m.callback=J:m===n(c)&&r(c),p(M)}else r(c);m=n(c)}if(m!==null)var fr=!0;else{var St=n(u);St!==null&&Ti(v,St.startTime-M),fr=!1}return fr}finally{m=null,h=_,y=!1}}var E=!1,z=null,P=-1,H=5,L=-1;function Pe(){return!(e.unstable_now()-L<H)}function vn(){if(z!==null){var C=e.unstable_now();L=C;var M=!0;try{M=z(!0,C)}finally{M?yn():(E=!1,z=null)}}else E=!1}var yn;if(typeof d=="function")yn=function(){d(vn)};else if(typeof MessageChannel<"u"){var ea=new MessageChannel,Vu=ea.port2;ea.port1.onmessage=vn,yn=function(){Vu.postMessage(null)}}else yn=function(){N(vn,0)};function _i(C){z=C,E||(E=!0,yn())}function Ti(C,M){P=N(function(){C(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,_i(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var _=h;h=M;try{return C()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,M){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var _=h;h=C;try{return M()}finally{h=_}},e.unstable_scheduleCallback=function(C,M,_){var Y=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?Y+_:Y):_=Y,C){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=_+J,C={id:g++,callback:M,priorityLevel:C,startTime:_,expirationTime:J,sortIndex:-1},_>Y?(C.sortIndex=_,t(u,C),n(c)===null&&C===n(u)&&(w?(f(P),P=-1):w=!0,Ti(v,_-Y))):(C.sortIndex=J,t(c,C),x||y||(x=!0,_i(S))),C},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(C){var M=h;return function(){var _=h;h=M;try{return C.apply(this,arguments)}finally{h=_}}}})(Ts);_s.exports=Ts;var hd=_s.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=k,we=hd;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ls=new Set,An={};function It(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(An[e]=t,e=0;e<t.length;e++)Ls.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),so=Object.prototype.hasOwnProperty,vd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia={},oa={};function yd(e){return so.call(oa,e)?!0:so.call(ia,e)?!1:vd.test(e)?oa[e]=!0:(ia[e]=!0,!1)}function xd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wd(e,t,n,r){if(t===null||typeof t>"u"||xd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var sl=/[\-:]([a-z])/g;function cl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sl,cl);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sl,cl);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sl,cl);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ul(e,t,n,r){var i=re.hasOwnProperty(t)?re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wd(t,n,i,r)&&(n=null),r||i===null?yd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),co=Symbol.for("react.profiler"),Rs=Symbol.for("react.provider"),Os=Symbol.for("react.context"),fl=Symbol.for("react.forward_ref"),uo=Symbol.for("react.suspense"),fo=Symbol.for("react.suspense_list"),pl=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Ds=Symbol.for("react.offscreen"),la=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,Oi;function En(e){if(Oi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oi=t&&t[1]||""}return`
`+Oi+e}var Di=!1;function Ii(e,t){if(!e||Di)return"";Di=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{Di=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?En(e):""}function jd(e){switch(e.tag){case 5:return En(e.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return e=Ii(e.type,!1),e;case 11:return e=Ii(e.type.render,!1),e;case 1:return e=Ii(e.type,!0),e;default:return""}}function po(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Ut:return"Portal";case co:return"Profiler";case dl:return"StrictMode";case uo:return"Suspense";case fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Os:return(e.displayName||"Context")+".Consumer";case Rs:return(e._context.displayName||"Context")+".Provider";case fl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pl:return t=e.displayName||null,t!==null?t:po(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return po(e(t))}catch{}}return null}function kd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return po(t);case 8:return t===dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Is(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sd(e){var t=Is(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Sd(e))}function Fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Is(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mo(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bs(e,t){t=t.checked,t!=null&&ul(e,"checked",t,!1)}function ho(e,t){Bs(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?go(e,t.type,n):t.hasOwnProperty("defaultValue")&&go(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function go(e,t,n){(t!=="number"||$r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ca(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(zn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function As(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ua(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Us(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Us(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Ws=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nd=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){Nd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function $s(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function Vs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$s(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var bd=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(e,t){if(t){if(bd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function wo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ko=null,en=null,tn=null;function da(e){if(e=sr(e)){if(typeof ko!="function")throw Error(j(280));var t=e.stateNode;t&&(t=xi(t),ko(e.stateNode,e.type,t))}}function Hs(e){en?tn?tn.push(e):tn=[e]:en=e}function Ys(){if(en){var e=en,t=tn;if(tn=en=null,da(e),t)for(e=0;e<t.length;e++)da(t[e])}}function Gs(e,t){return e(t)}function Qs(){}var Fi=!1;function Ks(e,t,n){if(Fi)return e(t,n);Fi=!0;try{return Gs(e,t,n)}finally{Fi=!1,(en!==null||tn!==null)&&(Qs(),Ys())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var So=!1;if(Ke)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){So=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{So=!1}function Cd(e,t,n,r,i,o,a,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Tn=!1,Vr=null,Hr=!1,No=null,Ed={onError:function(e){Tn=!0,Vr=e}};function zd(e,t,n,r,i,o,a,s,c){Tn=!1,Vr=null,Cd.apply(Ed,arguments)}function Pd(e,t,n,r,i,o,a,s,c){if(zd.apply(this,arguments),Tn){if(Tn){var u=Vr;Tn=!1,Vr=null}else throw Error(j(198));Hr||(Hr=!0,No=u)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fa(e){if(Ft(e)!==e)throw Error(j(188))}function Md(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fa(i),e;if(o===r)return fa(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function qs(e){return e=Md(e),e!==null?Js(e):null}function Js(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Js(e);if(t!==null)return t;e=e.sibling}return null}var Zs=we.unstable_scheduleCallback,pa=we.unstable_cancelCallback,_d=we.unstable_shouldYield,Td=we.unstable_requestPaint,G=we.unstable_now,Ld=we.unstable_getCurrentPriorityLevel,hl=we.unstable_ImmediatePriority,ec=we.unstable_UserBlockingPriority,Yr=we.unstable_NormalPriority,Rd=we.unstable_LowPriority,tc=we.unstable_IdlePriority,hi=null,Ue=null;function Od(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(hi,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Fd,Dd=Math.log,Id=Math.LN2;function Fd(e){return e>>>=0,e===0?32:31-(Dd(e)/Id|0)|0}var yr=64,xr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Pn(s):(o&=a,o!==0&&(r=Pn(o)))}else a=n&~i,a!==0?r=Pn(a):o!==0&&(r=Pn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),i=1<<n,r|=e[n],t&=~i;return r}function Bd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Oe(o),s=1<<a,c=i[a];c===-1?(!(s&n)||s&r)&&(i[a]=Bd(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function bo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nc(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Bi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function Ud(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Oe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function gl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function rc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ic,vl,oc,lc,ac,Co=!1,wr=[],st=null,ct=null,ut=null,$n=new Map,Vn=new Map,rt=[],Wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ma(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function jn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=sr(t),t!==null&&vl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $d(e,t,n,r,i){switch(t){case"focusin":return st=jn(st,e,t,n,r,i),!0;case"dragenter":return ct=jn(ct,e,t,n,r,i),!0;case"mouseover":return ut=jn(ut,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return $n.set(o,jn($n.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vn.set(o,jn(Vn.get(o)||null,e,t,n,r,i)),!0}return!1}function sc(e){var t=Et(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=Xs(n),t!==null){e.blockedOn=t,ac(e.priority,function(){oc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jo=r,n.target.dispatchEvent(r),jo=null}else return t=sr(n),t!==null&&vl(t),e.blockedOn=n,!1;t.shift()}return!0}function ha(e,t,n){Lr(e)&&n.delete(t)}function Vd(){Co=!1,st!==null&&Lr(st)&&(st=null),ct!==null&&Lr(ct)&&(ct=null),ut!==null&&Lr(ut)&&(ut=null),$n.forEach(ha),Vn.forEach(ha)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Co||(Co=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,Vd)))}function Hn(e){function t(i){return kn(i,e)}if(0<wr.length){kn(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&kn(st,e),ct!==null&&kn(ct,e),ut!==null&&kn(ut,e),$n.forEach(t),Vn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)sc(n),n.blockedOn===null&&rt.shift()}var nn=Ze.ReactCurrentBatchConfig,Qr=!0;function Hd(e,t,n,r){var i=D,o=nn.transition;nn.transition=null;try{D=1,yl(e,t,n,r)}finally{D=i,nn.transition=o}}function Yd(e,t,n,r){var i=D,o=nn.transition;nn.transition=null;try{D=4,yl(e,t,n,r)}finally{D=i,nn.transition=o}}function yl(e,t,n,r){if(Qr){var i=Eo(e,t,n,r);if(i===null)Ki(e,t,r,Kr,n),ma(e,r);else if($d(i,e,t,n,r))r.stopPropagation();else if(ma(e,r),t&4&&-1<Wd.indexOf(e)){for(;i!==null;){var o=sr(i);if(o!==null&&ic(o),o=Eo(e,t,n,r),o===null&&Ki(e,t,r,Kr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ki(e,t,r,null,n)}}var Kr=null;function Eo(e,t,n,r){if(Kr=null,e=ml(r),e=Et(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ld()){case hl:return 1;case ec:return 4;case Yr:case Rd:return 16;case tc:return 536870912;default:return 16}default:return 16}}var ot=null,xl=null,Rr=null;function uc(){if(Rr)return Rr;var e,t=xl,n=t.length,r,i="value"in ot?ot.value:ot.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Rr=i.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jr(){return!0}function ga(){return!1}function ke(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?jr:ga,this.isPropagationStopped=ga,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=ke(mn),ar=$({},mn,{view:0,detail:0}),Gd=ke(ar),Ai,Ui,Sn,gi=$({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(Ai=e.screenX-Sn.screenX,Ui=e.screenY-Sn.screenY):Ui=Ai=0,Sn=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:Ui}}),va=ke(gi),Qd=$({},gi,{dataTransfer:0}),Kd=ke(Qd),Xd=$({},ar,{relatedTarget:0}),Wi=ke(Xd),qd=$({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jd=ke(qd),Zd=$({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ef=ke(Zd),tf=$({},mn,{data:0}),ya=ke(tf),nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=of[e])?!!t[e]:!1}function jl(){return lf}var af=$({},ar,{key:function(e){if(e.key){var t=nf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sf=ke(af),cf=$({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xa=ke(cf),uf=$({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),df=ke(uf),ff=$({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pf=ke(ff),mf=$({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hf=ke(mf),gf=[9,13,27,32],kl=Ke&&"CompositionEvent"in window,Ln=null;Ke&&"documentMode"in document&&(Ln=document.documentMode);var vf=Ke&&"TextEvent"in window&&!Ln,dc=Ke&&(!kl||Ln&&8<Ln&&11>=Ln),wa=" ",ja=!1;function fc(e,t){switch(e){case"keyup":return gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function yf(e,t){switch(e){case"compositionend":return pc(t);case"keypress":return t.which!==32?null:(ja=!0,wa);case"textInput":return e=t.data,e===wa&&ja?null:e;default:return null}}function xf(e,t){if($t)return e==="compositionend"||!kl&&fc(e,t)?(e=uc(),Rr=xl=ot=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dc&&t.locale!=="ko"?null:t.data;default:return null}}var wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wf[e.type]:t==="textarea"}function mc(e,t,n,r){Hs(r),t=Xr(t,"onChange"),0<t.length&&(n=new wl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,Yn=null;function jf(e){bc(e,0)}function vi(e){var t=Yt(e);if(Fs(t))return e}function kf(e,t){if(e==="change")return t}var hc=!1;if(Ke){var $i;if(Ke){var Vi="oninput"in document;if(!Vi){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),Vi=typeof Sa.oninput=="function"}$i=Vi}else $i=!1;hc=$i&&(!document.documentMode||9<document.documentMode)}function Na(){Rn&&(Rn.detachEvent("onpropertychange",gc),Yn=Rn=null)}function gc(e){if(e.propertyName==="value"&&vi(Yn)){var t=[];mc(t,Yn,e,ml(e)),Ks(jf,t)}}function Sf(e,t,n){e==="focusin"?(Na(),Rn=t,Yn=n,Rn.attachEvent("onpropertychange",gc)):e==="focusout"&&Na()}function Nf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(Yn)}function bf(e,t){if(e==="click")return vi(t)}function Cf(e,t){if(e==="input"||e==="change")return vi(t)}function Ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Ef;function Gn(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!so.call(t,i)||!Ie(e[i],t[i]))return!1}return!0}function ba(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=ba(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ba(n)}}function vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yc(){for(var e=window,t=$r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$r(e.document)}return t}function Sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zf(e){var t=yc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vc(n.ownerDocument.documentElement,n)){if(r!==null&&Sl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ca(n,o);var a=Ca(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pf=Ke&&"documentMode"in document&&11>=document.documentMode,Vt=null,zo=null,On=null,Po=!1;function Ea(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Po||Vt==null||Vt!==$r(r)||(r=Vt,"selectionStart"in r&&Sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Gn(On,r)||(On=r,r=Xr(zo,"onSelect"),0<r.length&&(t=new wl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ht={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Hi={},xc={};Ke&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function yi(e){if(Hi[e])return Hi[e];if(!Ht[e])return e;var t=Ht[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xc)return Hi[e]=t[n];return e}var wc=yi("animationend"),jc=yi("animationiteration"),kc=yi("animationstart"),Sc=yi("transitionend"),Nc=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){Nc.set(e,t),It(t,[e])}for(var Yi=0;Yi<za.length;Yi++){var Gi=za[Yi],Mf=Gi.toLowerCase(),_f=Gi[0].toUpperCase()+Gi.slice(1);xt(Mf,"on"+_f)}xt(wc,"onAnimationEnd");xt(jc,"onAnimationIteration");xt(kc,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(Sc,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));It("onBeforeInput",["compositionend","keypress","textInput","paste"]);It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function Pa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pd(r,t,void 0,e),e.currentTarget=null}function bc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;Pa(i,s,u),o=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,u=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;Pa(i,s,u),o=c}}}if(Hr)throw e=No,Hr=!1,No=null,e}function F(e,t){var n=t[Ro];n===void 0&&(n=t[Ro]=new Set);var r=e+"__bubble";n.has(r)||(Cc(t,e,2,!1),n.add(r))}function Qi(e,t,n){var r=0;t&&(r|=4),Cc(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Qn(e){if(!e[Sr]){e[Sr]=!0,Ls.forEach(function(n){n!=="selectionchange"&&(Tf.has(n)||Qi(n,!1,e),Qi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Qi("selectionchange",!1,t))}}function Cc(e,t,n,r){switch(cc(t)){case 1:var i=Hd;break;case 4:i=Yd;break;default:i=yl}n=i.bind(null,t,n,e),i=void 0,!So||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ki(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Et(s),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Ks(function(){var u=o,g=ml(n),m=[];e:{var h=Nc.get(e);if(h!==void 0){var y=wl,x=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":y=sf;break;case"focusin":x="focus",y=Wi;break;case"focusout":x="blur",y=Wi;break;case"beforeblur":case"afterblur":y=Wi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=df;break;case wc:case jc:case kc:y=Jd;break;case Sc:y=pf;break;case"scroll":y=Gd;break;case"wheel":y=hf;break;case"copy":case"cut":case"paste":y=ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xa}var w=(t&4)!==0,N=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Wn(d,f),v!=null&&w.push(Kn(d,v,p)))),N)break;d=d.return}0<w.length&&(h=new y(h,x,null,n,g),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==jo&&(x=n.relatedTarget||n.fromElement)&&(Et(x)||x[Xe]))break e;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?Et(x):null,x!==null&&(N=Ft(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(w=va,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=xa,v="onPointerLeave",f="onPointerEnter",d="pointer"),N=y==null?h:Yt(y),p=x==null?h:Yt(x),h=new w(v,d+"leave",y,n,g),h.target=N,h.relatedTarget=p,v=null,Et(g)===u&&(w=new w(f,d+"enter",x,n,g),w.target=p,w.relatedTarget=N,v=w),N=v,y&&x)t:{for(w=y,f=x,d=0,p=w;p;p=At(p))d++;for(p=0,v=f;v;v=At(v))p++;for(;0<d-p;)w=At(w),d--;for(;0<p-d;)f=At(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=At(w),f=At(f)}w=null}else w=null;y!==null&&Ma(m,h,y,w,!1),x!==null&&N!==null&&Ma(m,N,x,w,!0)}}e:{if(h=u?Yt(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var S=kf;else if(ka(h))if(hc)S=Cf;else{S=Nf;var E=Sf}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=bf);if(S&&(S=S(e,u))){mc(m,S,n,g);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&go(h,"number",h.value)}switch(E=u?Yt(u):window,e){case"focusin":(ka(E)||E.contentEditable==="true")&&(Vt=E,zo=u,On=null);break;case"focusout":On=zo=Vt=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,Ea(m,n,g);break;case"selectionchange":if(Pf)break;case"keydown":case"keyup":Ea(m,n,g)}var z;if(kl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $t?fc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(dc&&n.locale!=="ko"&&($t||P!=="onCompositionStart"?P==="onCompositionEnd"&&$t&&(z=uc()):(ot=g,xl="value"in ot?ot.value:ot.textContent,$t=!0)),E=Xr(u,P),0<E.length&&(P=new ya(P,e,null,n,g),m.push({event:P,listeners:E}),z?P.data=z:(z=pc(n),z!==null&&(P.data=z)))),(z=vf?yf(e,n):xf(e,n))&&(u=Xr(u,"onBeforeInput"),0<u.length&&(g=new ya("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:u}),g.data=z))}bc(m,t)})}function Kn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wn(e,n),o!=null&&r.unshift(Kn(e,o,i)),o=Wn(e,t),o!=null&&r.push(Kn(e,o,i))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ma(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,i?(c=Wn(n,o),c!=null&&a.unshift(Kn(n,c,s))):i||(c=Wn(n,o),c!=null&&a.push(Kn(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Lf=/\r\n?/g,Rf=/\u0000|\uFFFD/g;function _a(e){return(typeof e=="string"?e:""+e).replace(Lf,`
`).replace(Rf,"")}function Nr(e,t,n){if(t=_a(t),_a(e)!==t&&n)throw Error(j(425))}function qr(){}var Mo=null,_o=null;function To(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lo=typeof setTimeout=="function"?setTimeout:void 0,Of=typeof clearTimeout=="function"?clearTimeout:void 0,Ta=typeof Promise=="function"?Promise:void 0,Df=typeof queueMicrotask=="function"?queueMicrotask:typeof Ta<"u"?function(e){return Ta.resolve(null).then(e).catch(If)}:Lo;function If(e){setTimeout(function(){throw e})}function Xi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hn(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function La(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+hn,Xn="__reactProps$"+hn,Xe="__reactContainer$"+hn,Ro="__reactEvents$"+hn,Ff="__reactListeners$"+hn,Bf="__reactHandles$"+hn;function Et(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=La(e);e!==null;){if(n=e[Ae])return n;e=La(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[Ae]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function xi(e){return e[Xn]||null}var Oo=[],Gt=-1;function wt(e){return{current:e}}function B(e){0>Gt||(e.current=Oo[Gt],Oo[Gt]=null,Gt--)}function I(e,t){Gt++,Oo[Gt]=e.current,e.current=t}var yt={},ae=wt(yt),me=wt(!1),Tt=yt;function an(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function he(e){return e=e.childContextTypes,e!=null}function Jr(){B(me),B(ae)}function Ra(e,t,n){if(ae.current!==yt)throw Error(j(168));I(ae,t),I(me,n)}function Ec(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,kd(e)||"Unknown",i));return $({},n,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Tt=ae.current,I(ae,e),I(me,me.current),!0}function Oa(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Ec(e,t,Tt),r.__reactInternalMemoizedMergedChildContext=e,B(me),B(ae),I(ae,e)):B(me),I(me,n)}var He=null,wi=!1,qi=!1;function zc(e){He===null?He=[e]:He.push(e)}function Af(e){wi=!0,zc(e)}function jt(){if(!qi&&He!==null){qi=!0;var e=0,t=D;try{var n=He;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,wi=!1}catch(i){throw He!==null&&(He=He.slice(e+1)),Zs(hl,jt),i}finally{D=t,qi=!1}}return null}var Qt=[],Kt=0,ei=null,ti=0,Se=[],Ne=0,Lt=null,Ye=1,Ge="";function bt(e,t){Qt[Kt++]=ti,Qt[Kt++]=ei,ei=e,ti=t}function Pc(e,t,n){Se[Ne++]=Ye,Se[Ne++]=Ge,Se[Ne++]=Lt,Lt=e;var r=Ye;e=Ge;var i=32-Oe(r)-1;r&=~(1<<i),n+=1;var o=32-Oe(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ye=1<<32-Oe(t)+i|n<<i|r,Ge=o+e}else Ye=1<<o|n<<i|r,Ge=e}function Nl(e){e.return!==null&&(bt(e,1),Pc(e,1,0))}function bl(e){for(;e===ei;)ei=Qt[--Kt],Qt[Kt]=null,ti=Qt[--Kt],Qt[Kt]=null;for(;e===Lt;)Lt=Se[--Ne],Se[Ne]=null,Ge=Se[--Ne],Se[Ne]=null,Ye=Se[--Ne],Se[Ne]=null}var xe=null,ye=null,A=!1,Re=null;function Mc(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Da(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ye=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:Ye,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ye=null,!0):!1;default:return!1}}function Do(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Io(e){if(A){var t=ye;if(t){var n=t;if(!Da(e,t)){if(Do(e))throw Error(j(418));t=dt(n.nextSibling);var r=xe;t&&Da(e,t)?Mc(r,n):(e.flags=e.flags&-4097|2,A=!1,xe=e)}}else{if(Do(e))throw Error(j(418));e.flags=e.flags&-4097|2,A=!1,xe=e}}}function Ia(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function br(e){if(e!==xe)return!1;if(!A)return Ia(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!To(e.type,e.memoizedProps)),t&&(t=ye)){if(Do(e))throw _c(),Error(j(418));for(;t;)Mc(e,t),t=dt(t.nextSibling)}if(Ia(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=xe?dt(e.stateNode.nextSibling):null;return!0}function _c(){for(var e=ye;e;)e=dt(e.nextSibling)}function sn(){ye=xe=null,A=!1}function Cl(e){Re===null?Re=[e]:Re.push(e)}var Uf=Ze.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fa(e){var t=e._init;return t(e._payload)}function Tc(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=ht(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,v){return d===null||d.tag!==6?(d=io(p,f.mode,v),d.return=f,d):(d=i(d,p),d.return=f,d)}function c(f,d,p,v){var S=p.type;return S===Wt?g(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===tt&&Fa(S)===d.type)?(v=i(d,p.props),v.ref=Nn(f,d,p),v.return=f,v):(v=Wr(p.type,p.key,p.props,null,f.mode,v),v.ref=Nn(f,d,p),v.return=f,v)}function u(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=oo(p,f.mode,v),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function g(f,d,p,v,S){return d===null||d.tag!==7?(d=_t(p,f.mode,v,S),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=io(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case hr:return p=Wr(d.type,d.key,d.props,null,f.mode,p),p.ref=Nn(f,null,d),p.return=f,p;case Ut:return d=oo(d,f.mode,p),d.return=f,d;case tt:var v=d._init;return m(f,v(d._payload),p)}if(zn(d)||xn(d))return d=_t(d,f.mode,p,null),d.return=f,d;Cr(f,d)}return null}function h(f,d,p,v){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===S?c(f,d,p,v):null;case Ut:return p.key===S?u(f,d,p,v):null;case tt:return S=p._init,h(f,d,S(p._payload),v)}if(zn(p)||xn(p))return S!==null?null:g(f,d,p,v,null);Cr(f,p)}return null}function y(f,d,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(d,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hr:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,S);case Ut:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,S);case tt:var E=v._init;return y(f,d,p,E(v._payload),S)}if(zn(v)||xn(v))return f=f.get(p)||null,g(d,f,v,S,null);Cr(d,v)}return null}function x(f,d,p,v){for(var S=null,E=null,z=d,P=d=0,H=null;z!==null&&P<p.length;P++){z.index>P?(H=z,z=null):H=z.sibling;var L=h(f,z,p[P],v);if(L===null){z===null&&(z=H);break}e&&z&&L.alternate===null&&t(f,z),d=o(L,d,P),E===null?S=L:E.sibling=L,E=L,z=H}if(P===p.length)return n(f,z),A&&bt(f,P),S;if(z===null){for(;P<p.length;P++)z=m(f,p[P],v),z!==null&&(d=o(z,d,P),E===null?S=z:E.sibling=z,E=z);return A&&bt(f,P),S}for(z=r(f,z);P<p.length;P++)H=y(z,f,P,p[P],v),H!==null&&(e&&H.alternate!==null&&z.delete(H.key===null?P:H.key),d=o(H,d,P),E===null?S=H:E.sibling=H,E=H);return e&&z.forEach(function(Pe){return t(f,Pe)}),A&&bt(f,P),S}function w(f,d,p,v){var S=xn(p);if(typeof S!="function")throw Error(j(150));if(p=S.call(p),p==null)throw Error(j(151));for(var E=S=null,z=d,P=d=0,H=null,L=p.next();z!==null&&!L.done;P++,L=p.next()){z.index>P?(H=z,z=null):H=z.sibling;var Pe=h(f,z,L.value,v);if(Pe===null){z===null&&(z=H);break}e&&z&&Pe.alternate===null&&t(f,z),d=o(Pe,d,P),E===null?S=Pe:E.sibling=Pe,E=Pe,z=H}if(L.done)return n(f,z),A&&bt(f,P),S;if(z===null){for(;!L.done;P++,L=p.next())L=m(f,L.value,v),L!==null&&(d=o(L,d,P),E===null?S=L:E.sibling=L,E=L);return A&&bt(f,P),S}for(z=r(f,z);!L.done;P++,L=p.next())L=y(z,f,P,L.value,v),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?P:L.key),d=o(L,d,P),E===null?S=L:E.sibling=L,E=L);return e&&z.forEach(function(vn){return t(f,vn)}),A&&bt(f,P),S}function N(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var S=p.key,E=d;E!==null;){if(E.key===S){if(S=p.type,S===Wt){if(E.tag===7){n(f,E.sibling),d=i(E,p.props.children),d.return=f,f=d;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===tt&&Fa(S)===E.type){n(f,E.sibling),d=i(E,p.props),d.ref=Nn(f,E,p),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===Wt?(d=_t(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Wr(p.type,p.key,p.props,null,f.mode,v),v.ref=Nn(f,d,p),v.return=f,f=v)}return a(f);case Ut:e:{for(E=p.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=oo(p,f.mode,v),d.return=f,f=d}return a(f);case tt:return E=p._init,N(f,d,E(p._payload),v)}if(zn(p))return x(f,d,p,v);if(xn(p))return w(f,d,p,v);Cr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=io(p,f.mode,v),d.return=f,f=d),a(f)):n(f,d)}return N}var cn=Tc(!0),Lc=Tc(!1),ni=wt(null),ri=null,Xt=null,El=null;function zl(){El=Xt=ri=null}function Pl(e){var t=ni.current;B(ni),e._currentValue=t}function Fo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){ri=e,El=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(El!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(ri===null)throw Error(j(308));Xt=e,ri.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var zt=null;function Ml(e){zt===null?zt=[e]:zt.push(e)}function Rc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ml(t)):(n.next=i.next,i.next=n),t.interleaved=n,qe(e,r)}function qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function _l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qe(e,n)}return i=r.interleaved,i===null?(t.next=t,Ml(r)):(t.next=i.next,i.next=t),r.interleaved=t,qe(e,n)}function Dr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gl(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ii(e,t,n,r){var i=e.updateQueue;nt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=u:s.next=u,g.lastBaseUpdate=c))}if(o!==null){var m=i.baseState;a=0,g=u=c=null,s=o;do{var h=s.lane,y=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(h=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(y,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(y,m,h):x,h==null)break e;m=$({},m,h);break e;case 2:nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else y={eventTime:y,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(u=g=y,c=m):g=g.next=y,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ot|=a,e.lanes=a,e.memoizedState=m}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var cr={},We=wt(cr),qn=wt(cr),Jn=wt(cr);function Pt(e){if(e===cr)throw Error(j(174));return e}function Tl(e,t){switch(I(Jn,t),I(qn,e),I(We,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yo(t,e)}B(We),I(We,t)}function un(){B(We),B(qn),B(Jn)}function Dc(e){Pt(Jn.current);var t=Pt(We.current),n=yo(t,e.type);t!==n&&(I(qn,e),I(We,n))}function Ll(e){qn.current===e&&(B(We),B(qn))}var U=wt(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ji=[];function Rl(){for(var e=0;e<Ji.length;e++)Ji[e]._workInProgressVersionPrimary=null;Ji.length=0}var Ir=Ze.ReactCurrentDispatcher,Zi=Ze.ReactCurrentBatchConfig,Rt=0,W=null,X=null,Z=null,li=!1,Dn=!1,Zn=0,Wf=0;function ie(){throw Error(j(321))}function Ol(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function Dl(e,t,n,r,i,o){if(Rt=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ir.current=e===null||e.memoizedState===null?Yf:Gf,e=n(r,i),Dn){o=0;do{if(Dn=!1,Zn=0,25<=o)throw Error(j(301));o+=1,Z=X=null,t.updateQueue=null,Ir.current=Qf,e=n(r,i)}while(Dn)}if(Ir.current=ai,t=X!==null&&X.next!==null,Rt=0,Z=X=W=null,li=!1,t)throw Error(j(300));return e}function Il(){var e=Zn!==0;return Zn=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?W.memoizedState=Z=e:Z=Z.next=e,Z}function ze(){if(X===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=Z===null?W.memoizedState:Z.next;if(t!==null)Z=t,X=e;else{if(e===null)throw Error(j(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Z===null?W.memoizedState=Z=e:Z=Z.next=e}return Z}function er(e,t){return typeof t=="function"?t(e):t}function eo(e){var t=ze(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=X,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,c=null,u=o;do{var g=u.lane;if((Rt&g)===g)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=m,a=r):c=c.next=m,W.lanes|=g,Ot|=g}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=s,Ie(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,W.lanes|=o,Ot|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function to(e){var t=ze(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ie(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ic(){}function Fc(e,t){var n=W,r=ze(),i=t(),o=!Ie(r.memoizedState,i);if(o&&(r.memoizedState=i,pe=!0),r=r.queue,Fl(Uc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,tr(9,Ac.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(j(349));Rt&30||Bc(n,t,i)}return i}function Bc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ac(e,t,n,r){t.value=n,t.getSnapshot=r,Wc(t)&&$c(e)}function Uc(e,t,n){return n(function(){Wc(t)&&$c(e)})}function Wc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function $c(e){var t=qe(e,1);t!==null&&De(t,e,1,-1)}function Ua(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=Hf.bind(null,W,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vc(){return ze().memoizedState}function Fr(e,t,n,r){var i=Be();W.flags|=e,i.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function ji(e,t,n,r){var i=ze();r=r===void 0?null:r;var o=void 0;if(X!==null){var a=X.memoizedState;if(o=a.destroy,r!==null&&Ol(r,a.deps)){i.memoizedState=tr(t,n,o,r);return}}W.flags|=e,i.memoizedState=tr(1|t,n,o,r)}function Wa(e,t){return Fr(8390656,8,e,t)}function Fl(e,t){return ji(2048,8,e,t)}function Hc(e,t){return ji(4,2,e,t)}function Yc(e,t){return ji(4,4,e,t)}function Gc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qc(e,t,n){return n=n!=null?n.concat([e]):null,ji(4,4,Gc.bind(null,t,e),n)}function Bl(){}function Kc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ol(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ol(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qc(e,t,n){return Rt&21?(Ie(n,t)||(n=nc(),W.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function $f(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Zi.transition;Zi.transition={};try{e(!1),t()}finally{D=n,Zi.transition=r}}function Jc(){return ze().memoizedState}function Vf(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zc(e))eu(t,n);else if(n=Rc(e,t,n,r),n!==null){var i=ce();De(n,e,r,i),tu(n,t,r)}}function Hf(e,t,n){var r=mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zc(e))eu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Ie(s,a)){var c=t.interleaved;c===null?(i.next=i,Ml(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Rc(e,t,i,r),n!==null&&(i=ce(),De(n,e,r,i),tu(n,t,r))}}function Zc(e){var t=e.alternate;return e===W||t!==null&&t===W}function eu(e,t){Dn=li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gl(e,n)}}var ai={readContext:Ee,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Yf={readContext:Ee,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fr(4194308,4,Gc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fr(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vf.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:Ua,useDebugValue:Bl,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=Ua(!1),t=e[0];return e=$f.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,i=Be();if(A){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ee===null)throw Error(j(349));Rt&30||Bc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Wa(Uc.bind(null,r,o,e),[e]),r.flags|=2048,tr(9,Ac.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Be(),t=ee.identifierPrefix;if(A){var n=Ge,r=Ye;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gf={readContext:Ee,useCallback:Kc,useContext:Ee,useEffect:Fl,useImperativeHandle:Qc,useInsertionEffect:Hc,useLayoutEffect:Yc,useMemo:Xc,useReducer:eo,useRef:Vc,useState:function(){return eo(er)},useDebugValue:Bl,useDeferredValue:function(e){var t=ze();return qc(t,X.memoizedState,e)},useTransition:function(){var e=eo(er)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Fc,useId:Jc,unstable_isNewReconciler:!1},Qf={readContext:Ee,useCallback:Kc,useContext:Ee,useEffect:Fl,useImperativeHandle:Qc,useInsertionEffect:Hc,useLayoutEffect:Yc,useMemo:Xc,useReducer:to,useRef:Vc,useState:function(){return to(er)},useDebugValue:Bl,useDeferredValue:function(e){var t=ze();return X===null?t.memoizedState=e:qc(t,X.memoizedState,e)},useTransition:function(){var e=to(er)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Fc,useId:Jc,unstable_isNewReconciler:!1};function _e(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ki={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=mt(e),o=Qe(r,i);o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,i),t!==null&&(De(t,e,i,r),Dr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=mt(e),o=Qe(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,i),t!==null&&(De(t,e,i,r),Dr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=mt(e),i=Qe(n,r);i.tag=2,t!=null&&(i.callback=t),t=ft(e,i,r),t!==null&&(De(t,e,r,n),Dr(t,e,r))}};function $a(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Gn(n,r)||!Gn(i,o):!0}function nu(e,t,n){var r=!1,i=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(i=he(t)?Tt:ae.current,r=t.contextTypes,o=(r=r!=null)?an(e,i):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ki,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Va(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ki.enqueueReplaceState(t,t.state,null)}function Ao(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},_l(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ee(o):(o=he(t)?Tt:ae.current,i.context=an(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Bo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ki.enqueueReplaceState(i,i.state,null),ii(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=jd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function no(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Uo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kf=typeof WeakMap=="function"?WeakMap:Map;function ru(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ci||(ci=!0,qo=r),Uo(e,t)},n}function iu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Uo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Uo(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ha(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=cp.bind(null,e,t,n),t.then(e,e))}function Ya(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ga(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var Xf=Ze.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?Lc(t,null,n,r):cn(t,e.child,n,r)}function Qa(e,t,n,r,i){n=n.render;var o=t.ref;return rn(t,i),r=Dl(e,t,n,r,o,i),n=Il(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(A&&n&&Nl(t),t.flags|=1,se(e,t,r,i),t.child)}function Ka(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Gl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ou(e,t,o,r,i)):(e=Wr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gn,n(a,r)&&e.ref===t.ref)return Je(e,t,i)}return t.flags|=1,e=ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function ou(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Gn(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Je(e,t,i)}return Wo(e,t,n,r,i)}function lu(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Jt,ve),ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Jt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,I(Jt,ve),ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,I(Jt,ve),ve|=r;return se(e,t,i,n),t.child}function au(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wo(e,t,n,r,i){var o=he(n)?Tt:ae.current;return o=an(t,o),rn(t,i),n=Dl(e,t,n,r,o,i),r=Il(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(A&&r&&Nl(t),t.flags|=1,se(e,t,n,i),t.child)}function Xa(e,t,n,r,i){if(he(n)){var o=!0;Zr(t)}else o=!1;if(rn(t,i),t.stateNode===null)Br(e,t),nu(t,n,r),Ao(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ee(u):(u=he(n)?Tt:ae.current,u=an(t,u));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==u)&&Va(t,a,r,u),nt=!1;var h=t.memoizedState;a.state=h,ii(t,r,a,i),c=t.memoizedState,s!==r||h!==c||me.current||nt?(typeof g=="function"&&(Bo(t,n,g,r),c=t.memoizedState),(s=nt||$a(t,n,s,r,h,c,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Oc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:_e(t.type,s),a.props=u,m=t.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ee(c):(c=he(n)?Tt:ae.current,c=an(t,c));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==m||h!==c)&&Va(t,a,r,c),nt=!1,h=t.memoizedState,a.state=h,ii(t,r,a,i);var x=t.memoizedState;s!==m||h!==x||me.current||nt?(typeof y=="function"&&(Bo(t,n,y,r),x=t.memoizedState),(u=nt||$a(t,n,u,r,h,x,c)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return $o(e,t,n,r,o,i)}function $o(e,t,n,r,i,o){au(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Oa(t,n,!1),Je(e,t,o);r=t.stateNode,Xf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=cn(t,e.child,null,o),t.child=cn(t,null,s,o)):se(e,t,s,o),t.memoizedState=r.state,i&&Oa(t,n,!0),t.child}function su(e){var t=e.stateNode;t.pendingContext?Ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ra(e,t.context,!1),Tl(e,t.containerInfo)}function qa(e,t,n,r,i){return sn(),Cl(i),t.flags|=256,se(e,t,n,r),t.child}var Vo={dehydrated:null,treeContext:null,retryLane:0};function Ho(e){return{baseLanes:e,cachePool:null,transitions:null}}function cu(e,t,n){var r=t.pendingProps,i=U.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(U,i&1),e===null)return Io(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=bi(a,r,0,null),e=_t(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ho(n),t.memoizedState=Vo,e):Al(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return qf(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ht(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=ht(s,o):(o=_t(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ho(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Vo,r}return o=e.child,e=o.sibling,r=ht(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Al(e,t){return t=bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&Cl(r),cn(t,e.child,null,n),e=Al(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qf(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=no(Error(j(422))),Er(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=bi({mode:"visible",children:r.children},i,0,null),o=_t(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&cn(t,e.child,null,a),t.child.memoizedState=Ho(a),t.memoizedState=Vo,o);if(!(t.mode&1))return Er(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(j(419)),r=no(o,r,void 0),Er(e,t,a,r)}if(s=(a&e.childLanes)!==0,pe||s){if(r=ee,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,qe(e,i),De(r,e,i,-1))}return Yl(),r=no(Error(j(421))),Er(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=up.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ye=dt(i.nextSibling),xe=t,A=!0,Re=null,e!==null&&(Se[Ne++]=Ye,Se[Ne++]=Ge,Se[Ne++]=Lt,Ye=e.id,Ge=e.overflow,Lt=t),t=Al(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fo(e.return,t,n)}function ro(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function uu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(se(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(U,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ro(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ro(t,!0,n,null,o);break;case"together":ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jf(e,t,n){switch(t.tag){case 3:su(t),sn();break;case 5:Dc(t);break;case 1:he(t.type)&&Zr(t);break;case 4:Tl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(ni,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?cu(e,t,n):(I(U,U.current&1),e=Je(e,t,n),e!==null?e.sibling:null);I(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,lu(e,t,n)}return Je(e,t,n)}var du,Yo,fu,pu;du=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yo=function(){};fu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pt(We.current);var o=null;switch(n){case"input":i=mo(e,i),r=mo(e,r),o=[];break;case"select":i=$({},i,{value:void 0}),r=$({},r,{value:void 0}),o=[];break;case"textarea":i=vo(e,i),r=vo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qr)}xo(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(An.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(An.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&F("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};pu=function(e,t,n,r){n!==r&&(t.flags|=4)};function bn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zf(e,t,n){var r=t.pendingProps;switch(bl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return he(t.type)&&Jr(),oe(t),null;case 3:return r=t.stateNode,un(),B(me),B(ae),Rl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(el(Re),Re=null))),Yo(e,t),oe(t),null;case 5:Ll(t);var i=Pt(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)fu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return oe(t),null}if(e=Pt(We.current),br(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ae]=t,r[Xn]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<Mn.length;i++)F(Mn[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":aa(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":ca(r,o),F("invalid",r)}xo(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Nr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Nr(r.textContent,s,e),i=["children",""+s]):An.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&F("scroll",r)}switch(n){case"input":gr(r),sa(r,o,!0);break;case"textarea":gr(r),ua(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Us(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ae]=t,e[Xn]=r,du(e,t,!1,!1),t.stateNode=e;e:{switch(a=wo(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mn.length;i++)F(Mn[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":aa(e,r),i=mo(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$({},r,{value:void 0}),F("invalid",e);break;case"textarea":ca(e,r),i=vo(e,r),F("invalid",e);break;default:i=r}xo(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?Vs(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ws(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Un(e,c):typeof c=="number"&&Un(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(An.hasOwnProperty(o)?c!=null&&o==="onScroll"&&F("scroll",e):c!=null&&ul(e,o,c,a))}switch(n){case"input":gr(e),sa(e,r,!1);break;case"textarea":gr(e),ua(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)pu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Pt(Jn.current),Pt(We.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(o=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:Nr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return oe(t),null;case 13:if(B(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ye!==null&&t.mode&1&&!(t.flags&128))_c(),sn(),t.flags|=98560,o=!1;else if(o=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Ae]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else Re!==null&&(el(Re),Re=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?q===0&&(q=3):Yl())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return un(),Yo(e,t),e===null&&Qn(t.stateNode.containerInfo),oe(t),null;case 10:return Pl(t.type._context),oe(t),null;case 17:return he(t.type)&&Jr(),oe(t),null;case 19:if(B(U),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)bn(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=oi(e),a!==null){for(t.flags|=128,bn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&G()>fn&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304)}else{if(!r)if(e=oi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!A)return oe(t),null}else 2*G()-o.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,n=U.current,I(U,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Hl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function ep(e,t){switch(bl(t),t.tag){case 1:return he(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),B(me),B(ae),Rl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ll(t),null;case 13:if(B(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(U),null;case 4:return un(),null;case 10:return Pl(t.type._context),null;case 22:case 23:return Hl(),null;case 24:return null;default:return null}}var zr=!1,le=!1,tp=typeof WeakSet=="function"?WeakSet:Set,b=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Go(e,t,n){try{n()}catch(r){V(e,t,r)}}var Za=!1;function np(e,t){if(Mo=Qr,e=yc(),Sl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,u=0,g=0,m=e,h=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(s=a+i),m!==o||r!==0&&m.nodeType!==3||(c=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++u===i&&(s=a),h===o&&++g===r&&(c=a),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(_o={focusedElem:e,selectionRange:n},Qr=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,N=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:_e(t.type,w),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return x=Za,Za=!1,x}function In(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Go(t,n,o)}i=i.next}while(i!==r)}}function Si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mu(e){var t=e.alternate;t!==null&&(e.alternate=null,mu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Xn],delete t[Ro],delete t[Ff],delete t[Bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hu(e){return e.tag===5||e.tag===3||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qr));else if(r!==4&&(e=e.child,e!==null))for(Ko(e,t,n),e=e.sibling;e!==null;)Ko(e,t,n),e=e.sibling}function Xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xo(e,t,n),e=e.sibling;e!==null;)Xo(e,t,n),e=e.sibling}var te=null,Le=!1;function et(e,t,n){for(n=n.child;n!==null;)gu(e,t,n),n=n.sibling}function gu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(hi,n)}catch{}switch(n.tag){case 5:le||qt(n,t);case 6:var r=te,i=Le;te=null,et(e,t,n),te=r,Le=i,te!==null&&(Le?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Le?(e=te,n=n.stateNode,e.nodeType===8?Xi(e.parentNode,n):e.nodeType===1&&Xi(e,n),Hn(e)):Xi(te,n.stateNode));break;case 4:r=te,i=Le,te=n.stateNode.containerInfo,Le=!0,et(e,t,n),te=r,Le=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Go(n,t,a),i=i.next}while(i!==r)}et(e,t,n);break;case 1:if(!le&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,et(e,t,n),le=r):et(e,t,n);break;default:et(e,t,n)}}function ts(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tp),t.forEach(function(r){var i=dp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Le=!1;break e;case 3:te=s.stateNode.containerInfo,Le=!0;break e;case 4:te=s.stateNode.containerInfo,Le=!0;break e}s=s.return}if(te===null)throw Error(j(160));gu(o,a,i),te=null,Le=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){V(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vu(t,e),t=t.sibling}function vu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Fe(e),r&4){try{In(3,e,e.return),Si(3,e)}catch(w){V(e,e.return,w)}try{In(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Me(t,e),Fe(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(Me(t,e),Fe(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var i=e.stateNode;try{Un(i,"")}catch(w){V(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Bs(i,o),wo(s,a);var u=wo(s,o);for(a=0;a<c.length;a+=2){var g=c[a],m=c[a+1];g==="style"?Vs(i,m):g==="dangerouslySetInnerHTML"?Ws(i,m):g==="children"?Un(i,m):ul(i,g,m,u)}switch(s){case"input":ho(i,o);break;case"textarea":As(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Zt(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Zt(i,!!o.multiple,o.defaultValue,!0):Zt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xn]=o}catch(w){V(e,e.return,w)}}break;case 6:if(Me(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){V(e,e.return,w)}}break;case 3:if(Me(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Me(t,e),Fe(e);break;case 13:Me(t,e),Fe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($l=G())),r&4&&ts(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(le=(u=le)||g,Me(t,e),le=u):Me(t,e),Fe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(b=e,g=e.child;g!==null;){for(m=b=g;b!==null;){switch(h=b,y=h.child,h.tag){case 0:case 11:case 14:case 15:In(4,h,h.return);break;case 1:qt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:qt(h,h.return);break;case 22:if(h.memoizedState!==null){rs(m);continue}}y!==null?(y.return=h,b=y):rs(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,c=m.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=$s("display",a))}catch(w){V(e,e.return,w)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){V(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(t,e),Fe(e),r&4&&ts(e);break;case 21:break;default:Me(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hu(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Un(i,""),r.flags&=-33);var o=es(e);Xo(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=es(e);Ko(e,s,a);break;default:throw Error(j(161))}}catch(c){V(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rp(e,t,n){b=e,yu(e)}function yu(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var i=b,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||zr;if(!a){var s=i.alternate,c=s!==null&&s.memoizedState!==null||le;s=zr;var u=le;if(zr=a,(le=c)&&!u)for(b=i;b!==null;)a=b,c=a.child,a.tag===22&&a.memoizedState!==null?is(i):c!==null?(c.return=a,b=c):is(i);for(;o!==null;)b=o,yu(o),o=o.sibling;b=i,zr=s,le=u}ns(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,b=o):ns(e)}}function ns(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||Si(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_e(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Aa(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Hn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}le||t.flags&512&&Qo(t)}catch(h){V(t,t.return,h)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function rs(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function is(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Si(4,t)}catch(c){V(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){V(t,i,c)}}var o=t.return;try{Qo(t)}catch(c){V(t,o,c)}break;case 5:var a=t.return;try{Qo(t)}catch(c){V(t,a,c)}}}catch(c){V(t,t.return,c)}if(t===e){b=null;break}var s=t.sibling;if(s!==null){s.return=t.return,b=s;break}b=t.return}}var ip=Math.ceil,si=Ze.ReactCurrentDispatcher,Ul=Ze.ReactCurrentOwner,Ce=Ze.ReactCurrentBatchConfig,O=0,ee=null,Q=null,ne=0,ve=0,Jt=wt(0),q=0,nr=null,Ot=0,Ni=0,Wl=0,Fn=null,fe=null,$l=0,fn=1/0,Ve=null,ci=!1,qo=null,pt=null,Pr=!1,lt=null,ui=0,Bn=0,Jo=null,Ar=-1,Ur=0;function ce(){return O&6?G():Ar!==-1?Ar:Ar=G()}function mt(e){return e.mode&1?O&2&&ne!==0?ne&-ne:Uf.transition!==null?(Ur===0&&(Ur=nc()),Ur):(e=D,e!==0||(e=window.event,e=e===void 0?16:cc(e.type)),e):1}function De(e,t,n,r){if(50<Bn)throw Bn=0,Jo=null,Error(j(185));lr(e,n,r),(!(O&2)||e!==ee)&&(e===ee&&(!(O&2)&&(Ni|=n),q===4&&it(e,ne)),ge(e,r),n===1&&O===0&&!(t.mode&1)&&(fn=G()+500,wi&&jt()))}function ge(e,t){var n=e.callbackNode;Ad(e,t);var r=Gr(e,e===ee?ne:0);if(r===0)n!==null&&pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pa(n),t===1)e.tag===0?Af(os.bind(null,e)):zc(os.bind(null,e)),Df(function(){!(O&6)&&jt()}),n=null;else{switch(rc(r)){case 1:n=hl;break;case 4:n=ec;break;case 16:n=Yr;break;case 536870912:n=tc;break;default:n=Yr}n=Cu(n,xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xu(e,t){if(Ar=-1,Ur=0,O&6)throw Error(j(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=Gr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=di(e,r);else{t=r;var i=O;O|=2;var o=ju();(ee!==e||ne!==t)&&(Ve=null,fn=G()+500,Mt(e,t));do try{ap();break}catch(s){wu(e,s)}while(!0);zl(),si.current=o,O=i,Q!==null?t=0:(ee=null,ne=0,t=q)}if(t!==0){if(t===2&&(i=bo(e),i!==0&&(r=i,t=Zo(e,i))),t===1)throw n=nr,Mt(e,0),it(e,r),ge(e,G()),n;if(t===6)it(e,r);else{if(i=e.current.alternate,!(r&30)&&!op(i)&&(t=di(e,r),t===2&&(o=bo(e),o!==0&&(r=o,t=Zo(e,o))),t===1))throw n=nr,Mt(e,0),it(e,r),ge(e,G()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Ct(e,fe,Ve);break;case 3:if(it(e,r),(r&130023424)===r&&(t=$l+500-G(),10<t)){if(Gr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Lo(Ct.bind(null,e,fe,Ve),t);break}Ct(e,fe,Ve);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Oe(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ip(r/1960))-r,10<r){e.timeoutHandle=Lo(Ct.bind(null,e,fe,Ve),r);break}Ct(e,fe,Ve);break;case 5:Ct(e,fe,Ve);break;default:throw Error(j(329))}}}return ge(e,G()),e.callbackNode===n?xu.bind(null,e):null}function Zo(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=di(e,t),e!==2&&(t=fe,fe=n,t!==null&&el(t)),e}function el(e){fe===null?fe=e:fe.push.apply(fe,e)}function op(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ie(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Wl,t&=~Ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function os(e){if(O&6)throw Error(j(327));on();var t=Gr(e,0);if(!(t&1))return ge(e,G()),null;var n=di(e,t);if(e.tag!==0&&n===2){var r=bo(e);r!==0&&(t=r,n=Zo(e,r))}if(n===1)throw n=nr,Mt(e,0),it(e,t),ge(e,G()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ct(e,fe,Ve),ge(e,G()),null}function Vl(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(fn=G()+500,wi&&jt())}}function Dt(e){lt!==null&&lt.tag===0&&!(O&6)&&on();var t=O;O|=1;var n=Ce.transition,r=D;try{if(Ce.transition=null,D=1,e)return e()}finally{D=r,Ce.transition=n,O=t,!(O&6)&&jt()}}function Hl(){ve=Jt.current,B(Jt)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Of(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:un(),B(me),B(ae),Rl();break;case 5:Ll(r);break;case 4:un();break;case 13:B(U);break;case 19:B(U);break;case 10:Pl(r.type._context);break;case 22:case 23:Hl()}n=n.return}if(ee=e,Q=e=ht(e.current,null),ne=ve=t,q=0,nr=null,Wl=Ni=Ot=0,fe=Fn=null,zt!==null){for(t=0;t<zt.length;t++)if(n=zt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}zt=null}return e}function wu(e,t){do{var n=Q;try{if(zl(),Ir.current=ai,li){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}li=!1}if(Rt=0,Z=X=W=null,Dn=!1,Zn=0,Ul.current=null,n===null||n.return===null){q=1,nr=t,Q=null;break}e:{var o=e,a=n.return,s=n,c=t;if(t=ne,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Ya(a);if(y!==null){y.flags&=-257,Ga(y,a,s,o,t),y.mode&1&&Ha(o,u,t),t=y,c=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(c),t.updateQueue=w}else x.add(c);break e}else{if(!(t&1)){Ha(o,u,t),Yl();break e}c=Error(j(426))}}else if(A&&s.mode&1){var N=Ya(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ga(N,a,s,o,t),Cl(dn(c,s));break e}}o=c=dn(c,s),q!==4&&(q=2),Fn===null?Fn=[o]:Fn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=ru(o,c,t);Ba(o,f);break e;case 1:s=c;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=iu(o,s,t);Ba(o,v);break e}}o=o.return}while(o!==null)}Su(n)}catch(S){t=S,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function ju(){var e=si.current;return si.current=ai,e===null?ai:e}function Yl(){(q===0||q===3||q===2)&&(q=4),ee===null||!(Ot&268435455)&&!(Ni&268435455)||it(ee,ne)}function di(e,t){var n=O;O|=2;var r=ju();(ee!==e||ne!==t)&&(Ve=null,Mt(e,t));do try{lp();break}catch(i){wu(e,i)}while(!0);if(zl(),O=n,si.current=r,Q!==null)throw Error(j(261));return ee=null,ne=0,q}function lp(){for(;Q!==null;)ku(Q)}function ap(){for(;Q!==null&&!_d();)ku(Q)}function ku(e){var t=bu(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Su(e):Q=t,Ul.current=null}function Su(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ep(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Q=null;return}}else if(n=Zf(n,t,ve),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);q===0&&(q=5)}function Ct(e,t,n){var r=D,i=Ce.transition;try{Ce.transition=null,D=1,sp(e,t,n,r)}finally{Ce.transition=i,D=r}return null}function sp(e,t,n,r){do on();while(lt!==null);if(O&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ud(e,o),e===ee&&(Q=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,Cu(Yr,function(){return on(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var a=D;D=1;var s=O;O|=4,Ul.current=null,np(e,n),vu(n,e),zf(_o),Qr=!!Mo,_o=Mo=null,e.current=n,rp(n),Td(),O=s,D=a,Ce.transition=o}else e.current=n;if(Pr&&(Pr=!1,lt=e,ui=i),o=e.pendingLanes,o===0&&(pt=null),Od(n.stateNode),ge(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ci)throw ci=!1,e=qo,qo=null,e;return ui&1&&e.tag!==0&&on(),o=e.pendingLanes,o&1?e===Jo?Bn++:(Bn=0,Jo=e):Bn=0,jt(),null}function on(){if(lt!==null){var e=rc(ui),t=Ce.transition,n=D;try{if(Ce.transition=null,D=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,ui=0,O&6)throw Error(j(331));var i=O;for(O|=4,b=e.current;b!==null;){var o=b,a=o.child;if(b.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(b=u;b!==null;){var g=b;switch(g.tag){case 0:case 11:case 15:In(8,g,o)}var m=g.child;if(m!==null)m.return=g,b=m;else for(;b!==null;){g=b;var h=g.sibling,y=g.return;if(mu(g),g===u){b=null;break}if(h!==null){h.return=y,b=h;break}b=y}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}b=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,b=a;else e:for(;b!==null;){if(o=b,o.flags&2048)switch(o.tag){case 0:case 11:case 15:In(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,b=f;break e}b=o.return}}var d=e.current;for(b=d;b!==null;){a=b;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,b=p;else e:for(a=d;b!==null;){if(s=b,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Si(9,s)}}catch(S){V(s,s.return,S)}if(s===a){b=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,b=v;break e}b=s.return}}if(O=i,jt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(hi,e)}catch{}r=!0}return r}finally{D=n,Ce.transition=t}}return!1}function ls(e,t,n){t=dn(n,t),t=ru(e,t,1),e=ft(e,t,1),t=ce(),e!==null&&(lr(e,1,t),ge(e,t))}function V(e,t,n){if(e.tag===3)ls(e,e,n);else for(;t!==null;){if(t.tag===3){ls(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=dn(n,e),e=iu(t,e,1),t=ft(t,e,1),e=ce(),t!==null&&(lr(t,1,e),ge(t,e));break}}t=t.return}}function cp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(q===4||q===3&&(ne&130023424)===ne&&500>G()-$l?Mt(e,0):Wl|=n),ge(e,t)}function Nu(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=ce();e=qe(e,t),e!==null&&(lr(e,t,n),ge(e,n))}function up(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nu(e,n)}function dp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Nu(e,n)}var bu;bu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Jf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,A&&t.flags&1048576&&Pc(t,ti,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Br(e,t),e=t.pendingProps;var i=an(t,ae.current);rn(t,n),i=Dl(null,t,r,e,i,n);var o=Il();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(o=!0,Zr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_l(t),i.updater=ki,t.stateNode=i,i._reactInternals=t,Ao(t,r,e,n),t=$o(null,t,r,!0,o,n)):(t.tag=0,A&&o&&Nl(t),se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Br(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=pp(r),e=_e(r,e),i){case 0:t=Wo(null,t,r,e,n);break e;case 1:t=Xa(null,t,r,e,n);break e;case 11:t=Qa(null,t,r,e,n);break e;case 14:t=Ka(null,t,r,_e(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Wo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Xa(e,t,r,i,n);case 3:e:{if(su(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Oc(e,t),ii(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dn(Error(j(423)),t),t=qa(e,t,r,n,i);break e}else if(r!==i){i=dn(Error(j(424)),t),t=qa(e,t,r,n,i);break e}else for(ye=dt(t.stateNode.containerInfo.firstChild),xe=t,A=!0,Re=null,n=Lc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===i){t=Je(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Dc(t),e===null&&Io(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,To(r,i)?a=null:o!==null&&To(r,o)&&(t.flags|=32),au(e,t),se(e,t,a,n),t.child;case 6:return e===null&&Io(t),null;case 13:return cu(e,t,n);case 4:return Tl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Qa(e,t,r,i,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,I(ni,r._currentValue),r._currentValue=a,o!==null)if(Ie(o.value,a)){if(o.children===i.children&&!me.current){t=Je(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Qe(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?c.next=c:(c.next=g.next,g.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Fo(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Fo(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rn(t,n),i=Ee(i),r=r(i),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,i=_e(r,t.pendingProps),i=_e(r.type,i),Ka(e,t,r,i,n);case 15:return ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Br(e,t),t.tag=1,he(r)?(e=!0,Zr(t)):e=!1,rn(t,n),nu(t,r,i),Ao(t,r,i,n),$o(null,t,r,!0,e,n);case 19:return uu(e,t,n);case 22:return lu(e,t,n)}throw Error(j(156,t.tag))};function Cu(e,t){return Zs(e,t)}function fp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new fp(e,t,n,r)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pp(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fl)return 11;if(e===pl)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Gl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Wt:return _t(n.children,i,o,t);case dl:a=8,i|=8;break;case co:return e=be(12,n,t,i|2),e.elementType=co,e.lanes=o,e;case uo:return e=be(13,n,t,i),e.elementType=uo,e.lanes=o,e;case fo:return e=be(19,n,t,i),e.elementType=fo,e.lanes=o,e;case Ds:return bi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rs:a=10;break e;case Os:a=9;break e;case fl:a=11;break e;case pl:a=14;break e;case tt:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=be(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function _t(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function bi(e,t,n,r){return e=be(22,e,r,t),e.elementType=Ds,e.lanes=n,e.stateNode={isHidden:!1},e}function io(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function oo(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ql(e,t,n,r,i,o,a,s,c){return e=new mp(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_l(o),e}function hp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Eu(e){if(!e)return yt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(he(n))return Ec(e,n,t)}return t}function zu(e,t,n,r,i,o,a,s,c){return e=Ql(n,r,!0,e,i,o,a,s,c),e.context=Eu(null),n=e.current,r=ce(),i=mt(n),o=Qe(r,i),o.callback=t??null,ft(n,o,i),e.current.lanes=i,lr(e,i,r),ge(e,r),e}function Ci(e,t,n,r){var i=t.current,o=ce(),a=mt(i);return n=Eu(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(i,t,a),e!==null&&(De(e,i,a,o),Dr(e,i,a)),a}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function as(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kl(e,t){as(e,t),(e=e.alternate)&&as(e,t)}function gp(){return null}var Pu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xl(e){this._internalRoot=e}Ei.prototype.render=Xl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Ci(e,t,null,null)};Ei.prototype.unmount=Xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){Ci(null,e,null,null)}),t[Xe]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=lc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&sc(e)}};function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ss(){}function vp(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=fi(a);o.call(u)}}var a=zu(t,r,e,0,null,!1,!1,"",ss);return e._reactRootContainer=a,e[Xe]=a.current,Qn(e.nodeType===8?e.parentNode:e),Dt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=fi(c);s.call(u)}}var c=Ql(e,0,!1,null,null,!1,!1,"",ss);return e._reactRootContainer=c,e[Xe]=c.current,Qn(e.nodeType===8?e.parentNode:e),Dt(function(){Ci(t,c,n,r)}),c}function Pi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var c=fi(a);s.call(c)}}Ci(t,a,e,i)}else a=vp(n,t,e,i,r);return fi(a)}ic=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(gl(t,n|1),ge(t,G()),!(O&6)&&(fn=G()+500,jt()))}break;case 13:Dt(function(){var r=qe(e,1);if(r!==null){var i=ce();De(r,e,1,i)}}),Kl(e,1)}};vl=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var n=ce();De(t,e,134217728,n)}Kl(e,134217728)}};oc=function(e){if(e.tag===13){var t=mt(e),n=qe(e,t);if(n!==null){var r=ce();De(n,e,t,r)}Kl(e,t)}};lc=function(){return D};ac=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};ko=function(e,t,n){switch(t){case"input":if(ho(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xi(r);if(!i)throw Error(j(90));Fs(r),ho(r,i)}}}break;case"textarea":As(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};Gs=Vl;Qs=Dt;var yp={usingClientEntryPoint:!1,Events:[sr,Yt,xi,Hs,Ys,Vl]},Cn={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xp={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qs(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{hi=Mr.inject(xp),Ue=Mr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yp;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ql(t))throw Error(j(200));return hp(e,t,null,n)};je.createRoot=function(e,t){if(!ql(e))throw Error(j(299));var n=!1,r="",i=Pu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ql(e,1,!1,null,null,n,!1,r,i),e[Xe]=t.current,Qn(e.nodeType===8?e.parentNode:e),new Xl(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=qs(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Dt(e)};je.hydrate=function(e,t,n){if(!zi(t))throw Error(j(200));return Pi(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!ql(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Pu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=zu(t,null,e,1,n??null,i,!1,o,a),e[Xe]=t.current,Qn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ei(t)};je.render=function(e,t,n){if(!zi(t))throw Error(j(200));return Pi(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!zi(e))throw Error(j(40));return e._reactRootContainer?(Dt(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};je.unstable_batchedUpdates=Vl;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zi(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Pi(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function Mu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mu)}catch(e){console.error(e)}}Mu(),Ms.exports=je;var wp=Ms.exports,cs=wp;ao.createRoot=cs.createRoot,ao.hydrateRoot=cs.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rr.apply(this,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const us="popstate";function jp(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return tl("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:pi(i)}return Sp(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _u(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kp(){return Math.random().toString(36).substr(2,8)}function ds(e,t){return{usr:e.state,key:e.key,idx:t}}function tl(e,t,n,r){return n===void 0&&(n=null),rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gn(t):t,{state:n,key:t&&t.key||r||kp()})}function pi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Sp(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=at.Pop,c=null,u=g();u==null&&(u=0,a.replaceState(rr({},a.state,{idx:u}),""));function g(){return(a.state||{idx:null}).idx}function m(){s=at.Pop;let N=g(),f=N==null?null:N-u;u=N,c&&c({action:s,location:w.location,delta:f})}function h(N,f){s=at.Push;let d=tl(w.location,N,f);u=g()+1;let p=ds(d,u),v=w.createHref(d);try{a.pushState(p,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}o&&c&&c({action:s,location:w.location,delta:1})}function y(N,f){s=at.Replace;let d=tl(w.location,N,f);u=g();let p=ds(d,u),v=w.createHref(d);a.replaceState(p,"",v),o&&c&&c({action:s,location:w.location,delta:0})}function x(N){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof N=="string"?N:pi(N);return d=d.replace(/ $/,"%20"),K(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return s},get location(){return e(i,a)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(us,m),c=N,()=>{i.removeEventListener(us,m),c=null}},createHref(N){return t(i,N)},createURL:x,encodeLocation(N){let f=x(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:y,go(N){return a.go(N)}};return w}var fs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fs||(fs={}));function Np(e,t,n){return n===void 0&&(n="/"),bp(e,t,n)}function bp(e,t,n,r){let i=typeof t=="string"?gn(t):t,o=Jl(i.pathname||"/",n);if(o==null)return null;let a=Tu(e);Cp(a);let s=null;for(let c=0;s==null&&c<a.length;++c){let u=Fp(o);s=Op(a[c],u)}return s}function Tu(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let c={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(K(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=gt([r,c.relativePath]),g=n.concat(c);o.children&&o.children.length>0&&(K(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tu(o.children,t,g,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Lp(u,o.index),routesMeta:g})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let c of Lu(o.path))i(o,a,c)}),t}function Lu(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Lu(r.join("/")),s=[];return s.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Cp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Rp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ep=/^:[\w-]+$/,zp=3,Pp=2,Mp=1,_p=10,Tp=-2,ps=e=>e==="*";function Lp(e,t){let n=e.split("/"),r=n.length;return n.some(ps)&&(r+=Tp),t&&(r+=Pp),n.filter(i=>!ps(i)).reduce((i,o)=>i+(Ep.test(o)?zp:o===""?Mp:_p),r)}function Rp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Op(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,g=o==="/"?t:t.slice(o.length)||"/",m=Dp({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},g),h=c.route;if(!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:gt([o,m.pathname]),pathnameBase:Wp(gt([o,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(o=gt([o,m.pathnameBase]))}return a}function Dp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ip(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,g,m)=>{let{paramName:h,isOptional:y}=g;if(h==="*"){let w=s[m]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[m];return y&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Ip(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),_u(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Fp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Bp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?gn(e):e;return{pathname:n?n.startsWith("/")?n:Ap(n,t):t,search:$p(r),hash:Vp(i)}}function Ap(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function lo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Up(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ru(e,t){let n=Up(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ou(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=gn(e):(i=rr({},e),K(!i.pathname||!i.pathname.includes("?"),lo("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),lo("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),lo("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let m=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),m-=1;i.pathname=h.join("/")}s=m>=0?t[m]:"/"}let c=Bp(i,s),u=a&&a!=="/"&&a.endsWith("/"),g=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||g)&&(c.pathname+="/"),c}const gt=e=>e.join("/").replace(/\/\/+/g,"/"),Wp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$p=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Hp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Du=["post","put","patch","delete"];new Set(Du);const Yp=["get",...Du];new Set(Yp);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}const Zl=k.createContext(null),Gp=k.createContext(null),Bt=k.createContext(null),Mi=k.createContext(null),kt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Iu=k.createContext(null);function Qp(e,t){let{relative:n}=t===void 0?{}:t;ur()||K(!1);let{basename:r,navigator:i}=k.useContext(Bt),{hash:o,pathname:a,search:s}=Bu(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:gt([r,a])),i.createHref({pathname:c,search:s,hash:o})}function ur(){return k.useContext(Mi)!=null}function dr(){return ur()||K(!1),k.useContext(Mi).location}function Fu(e){k.useContext(Bt).static||k.useLayoutEffect(e)}function Kp(){let{isDataRoute:e}=k.useContext(kt);return e?cm():Xp()}function Xp(){ur()||K(!1);let e=k.useContext(Zl),{basename:t,future:n,navigator:r}=k.useContext(Bt),{matches:i}=k.useContext(kt),{pathname:o}=dr(),a=JSON.stringify(Ru(i,n.v7_relativeSplatPath)),s=k.useRef(!1);return Fu(()=>{s.current=!0}),k.useCallback(function(u,g){if(g===void 0&&(g={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let m=Ou(u,JSON.parse(a),o,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:gt([t,m.pathname])),(g.replace?r.replace:r.push)(m,g.state,g)},[t,r,a,o,e])}function qp(){let{matches:e}=k.useContext(kt),t=e[e.length-1];return t?t.params:{}}function Bu(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Bt),{matches:i}=k.useContext(kt),{pathname:o}=dr(),a=JSON.stringify(Ru(i,r.v7_relativeSplatPath));return k.useMemo(()=>Ou(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function Jp(e,t){return Zp(e,t)}function Zp(e,t,n,r){ur()||K(!1);let{navigator:i}=k.useContext(Bt),{matches:o}=k.useContext(kt),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=dr(),g;if(t){var m;let N=typeof t=="string"?gn(t):t;c==="/"||(m=N.pathname)!=null&&m.startsWith(c)||K(!1),g=N}else g=u;let h=g.pathname||"/",y=h;if(c!=="/"){let N=c.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(N.length).join("/")}let x=Np(e,{pathname:y}),w=im(x&&x.map(N=>Object.assign({},N,{params:Object.assign({},s,N.params),pathname:gt([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:gt([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,n,r);return t&&w?k.createElement(Mi.Provider,{value:{location:ir({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:at.Pop}},w):w}function em(){let e=sm(),t=Hp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const tm=k.createElement(em,null);class nm extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(kt.Provider,{value:this.props.routeContext},k.createElement(Iu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rm(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Zl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(kt.Provider,{value:t},r)}function im(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let g=a.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);g>=0||K(!1),a=a.slice(0,Math.min(a.length,g+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<a.length;g++){let m=a[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=g),m.route.id){let{loaderData:h,errors:y}=n,x=m.route.loader&&h[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||x){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((g,m,h)=>{let y,x=!1,w=null,N=null;n&&(y=s&&m.route.id?s[m.route.id]:void 0,w=m.route.errorElement||tm,c&&(u<0&&h===0?(um("route-fallback"),x=!0,N=null):u===h&&(x=!0,N=m.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,h+1)),d=()=>{let p;return y?p=w:x?p=N:m.route.Component?p=k.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=g,k.createElement(rm,{match:m,routeContext:{outlet:g,matches:f,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?k.createElement(nm,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Au=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Au||{}),Uu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Uu||{});function om(e){let t=k.useContext(Zl);return t||K(!1),t}function lm(e){let t=k.useContext(Gp);return t||K(!1),t}function am(e){let t=k.useContext(kt);return t||K(!1),t}function Wu(e){let t=am(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function sm(){var e;let t=k.useContext(Iu),n=lm(),r=Wu();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function cm(){let{router:e}=om(Au.UseNavigateStable),t=Wu(Uu.UseNavigateStable),n=k.useRef(!1);return Fu(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ir({fromRouteId:t},o)))},[e,t])}const ms={};function um(e,t,n){ms[e]||(ms[e]=!0)}function dm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function $e(e){K(!1)}function fm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=at.Pop,navigator:o,static:a=!1,future:s}=e;ur()&&K(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:o,static:a,future:ir({v7_relativeSplatPath:!1},s)}),[c,s,o,a]);typeof r=="string"&&(r=gn(r));let{pathname:g="/",search:m="",hash:h="",state:y=null,key:x="default"}=r,w=k.useMemo(()=>{let N=Jl(g,c);return N==null?null:{location:{pathname:N,search:m,hash:h,state:y,key:x},navigationType:i}},[c,g,m,h,y,x,i]);return w==null?null:k.createElement(Bt.Provider,{value:u},k.createElement(Mi.Provider,{children:n,value:w}))}function pm(e){let{children:t,location:n}=e;return Jp(nl(t),n)}new Promise(()=>{});function nl(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let o=[...t,i];if(r.type===k.Fragment){n.push.apply(n,nl(r.props.children,o));return}r.type!==$e&&K(!1),!r.props.index||!r.props.children||K(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=nl(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rl.apply(this,arguments)}function mm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function hm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gm(e,t){return e.button===0&&(!t||t==="_self")&&!hm(e)}const vm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ym="6";try{window.__reactRouterVersion=ym}catch{}const xm="startTransition",hs=sd[xm];function wm(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=jp({window:i,v5Compat:!0}));let a=o.current,[s,c]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},g=k.useCallback(m=>{u&&hs?hs(()=>c(m)):c(m)},[c,u]);return k.useLayoutEffect(()=>a.listen(g),[a,g]),k.useEffect(()=>dm(r),[r]),k.createElement(fm,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const jm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",km=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,R=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:c,to:u,preventScrollReset:g,viewTransition:m}=t,h=mm(t,vm),{basename:y}=k.useContext(Bt),x,w=!1;if(typeof u=="string"&&km.test(u)&&(x=u,jm))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Jl(v.pathname,y);v.origin===p.origin&&S!=null?u=S+v.search+v.hash:w=!0}catch{}let N=Qp(u,{relative:i}),f=Sm(u,{replace:a,state:s,target:c,preventScrollReset:g,relative:i,viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return k.createElement("a",rl({},h,{href:x||N,onClick:w||o?r:d,ref:n,target:c}))});var gs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gs||(gs={}));var vs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vs||(vs={}));function Sm(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=t===void 0?{}:t,c=Kp(),u=dr(),g=Bu(e,{relative:a});return k.useCallback(m=>{if(gm(m,n)){m.preventDefault();let h=r!==void 0?r:pi(u)===pi(g);c(e,{replace:h,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[u,c,g,r,i,n,e,o,a,s])}const Nm=()=>l.jsx("nav",{children:l.jsxs("div",{className:"nav-container",children:[l.jsx(R,{to:"/",className:"logo",children:l.jsx("img",{src:"/text-1760673746758.png",alt:"BYD Logo",className:"logo-image"})}),l.jsxs("ul",{className:"nav-menu",children:[l.jsxs("li",{className:"dropdown",children:[l.jsx(R,{to:"/models",children:"Models"}),l.jsxs("div",{className:"dropdown-content",children:[l.jsx(R,{to:"/models",children:"Dolfin Mini"}),l.jsx(R,{to:"/models",children:"Atto 2"}),l.jsx(R,{to:"/models",children:"Atto 3"}),l.jsx(R,{to:"/models",children:"Song Pro"}),l.jsx(R,{to:"/models",children:"Seal U"}),l.jsx(R,{to:"/models",children:"Leopard 7"}),l.jsx(R,{to:"/models",children:"Tang L"}),l.jsx(R,{to:"/models",children:"Radar"}),l.jsx(R,{to:"/models",children:"Shark"})]})]}),l.jsxs("li",{className:"dropdown",children:[l.jsx(R,{to:"/purchasing",children:"Purchasing"}),l.jsxs("div",{className:"dropdown-content",children:[l.jsx(R,{to:"/test-drive",children:"Test Drive"}),l.jsx(R,{to:"/locations",children:"Locations"}),l.jsx(R,{to:"/cash-purchases",children:"Cash Purchases"}),l.jsx(R,{to:"/finance-bank",children:"Finance (Bank)"}),l.jsx(R,{to:"/lease",children:"Lease"}),l.jsx(R,{to:"/finance-dealer",children:"Finance (Dealer)"}),l.jsx(R,{to:"/subscriptions",children:"Subscriptions"}),l.jsx(R,{to:"/rentals",children:"Rentals"}),l.jsx(R,{to:"/fleet-solutions",children:"Fleet & Business Solutions"})]})]}),l.jsxs("li",{className:"dropdown",children:[l.jsx(R,{to:"/ownership",children:"Ownership"}),l.jsxs("div",{className:"dropdown-content",children:[l.jsx("a",{href:"/ownership#service-maintenance",children:"Service & Maintenance"}),l.jsx("a",{href:"/ownership#roadside-assistance",children:"EM Roadside Assistance"}),l.jsx("a",{href:"/ownership#warranty",children:"Warranty"}),l.jsx("a",{href:"/ownership#membership",children:"EM Membership & Charge Cards"}),l.jsx("a",{href:"/ownership#charging-locations",children:"Charging Locations"})]})]}),l.jsx("li",{children:l.jsx(R,{to:"/technology",children:"Technology"})}),l.jsx("li",{children:l.jsx(R,{to:"/about",children:"About"})}),l.jsx("li",{children:l.jsx(R,{to:"/contact",children:"Contact"})})]})]})}),bm=()=>l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

        footer {
          background: #252728;
          color: #fff;
          padding: 0;
          margin-top: 0;
        }

        .footer-top {
          padding: 7rem 5%;
        }

        .footer-top-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-links {
          display: flex;
          gap: 2.5rem;
        }

        .footer-links a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #fff;
        }

        .footer-social-section {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .footer-social-label {
          color: rgba(255,255,255,0.7);
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          text-decoration: none;
          color: rgba(255,255,255,0.7);
        }

        .social-link:hover {
          border-color: rgba(255,255,255,0.5);
          color: #fff;
        }

        .footer-bottom {
          text-align: center;
          padding: 1.5rem 5%;
        }

        .footer-bottom-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-bottom p {
          color: rgba(255,255,255,0.5);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .footer-top-content {
            flex-direction: column;
            gap: 2rem;
            align-items: flex-start;
          }

          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }

          .footer-social-section {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}),l.jsxs("footer",{children:[l.jsx("div",{className:"footer-top",children:l.jsxs("div",{className:"footer-top-content",children:[l.jsxs("div",{className:"footer-links",children:[l.jsx("a",{href:"#",children:"Privacy & Legal"}),l.jsx("a",{href:"#",children:"Cookie Policy"}),l.jsx(R,{to:"/contact",children:"Contact"})]}),l.jsxs("div",{className:"footer-social-section",children:[l.jsx("span",{className:"footer-social-label",children:"FOLLOW US"}),l.jsxs("div",{className:"footer-social",children:[l.jsx("a",{href:"#",className:"social-link","aria-label":"Facebook",children:"f"}),l.jsx("a",{href:"#",className:"social-link","aria-label":"X",children:"𝕏"}),l.jsx("a",{href:"#",className:"social-link","aria-label":"Instagram",children:"📷"}),l.jsx("a",{href:"#",className:"social-link","aria-label":"TikTok",children:"♪"}),l.jsx("a",{href:"#",className:"social-link","aria-label":"YouTube",children:"▶"})]})]})]})}),l.jsx("div",{className:"footer-bottom",children:l.jsx("div",{className:"footer-bottom-content",children:l.jsx("p",{children:"© BYD Company Ltd. All rights reserved."})})})]})]}),Te=({src:e,children:t,className:n="",priority:r=!1,style:i={}})=>{const[o,a]=k.useState(!1),[s,c]=k.useState(r),[u,g]=k.useState(r),m=k.useRef(null);return k.useEffect(()=>{if(r)return;const h=new IntersectionObserver(y=>{y.forEach(x=>{x.isIntersecting&&(g(!0),c(!0),h.disconnect())})},{rootMargin:"100px"});return m.current&&h.observe(m.current),()=>h.disconnect()},[r]),k.useEffect(()=>{if(!u)return;const h=new Image;h.src=e,h.onload=()=>a(!0)},[u,e]),l.jsxs("div",{ref:m,className:n,style:{...i,position:"relative",backgroundImage:o?`url(${e})`:"none",backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 0.5s ease"},children:[!o&&l.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",filter:"blur(20px)",zIndex:0}}),l.jsx("div",{style:{position:"relative",zIndex:1},children:t})]})},$u=e=>{const t=document.createElement("link");t.rel="preload",t.as="image",t.href=e,document.head.appendChild(t)},Cm=()=>(k.useEffect(()=>{$u("/HeroBackground.png")},[]),l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        /* HERO SECTION */
        .luxury-hero {
          height: 95vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          will-change: transform;
        }

        .luxury-hero::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5));
          z-index: 1;
        }

        .luxury-hero::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 250px;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.9));
          z-index: 2;
        }

        .hero-content {
          z-index: 3;
          max-width: 1200px;
          padding: 3rem;
          animation: heroFade 2s ease-out;
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

        .hero-logo {
          font-size: 1.1rem;
          letter-spacing: 4px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          text-transform: uppercase;
          color: #4a9eff;
          margin-bottom: 1.5rem;
        }

        .hero-content h1 {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 12px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 30px rgba(0,0,0,0.7);
          line-height: 1.2;
        }

        .hero-tagline {
          font-size: 1.3rem;
          margin-bottom: 2.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
          text-shadow: 1px 1px 15px rgba(0,0,0,0.7);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .hero-cta-group {
          display: flex;
          gap: 2rem;
          justify-content: center;
          margin-top: 3rem;
        }

        .cta-button {
          padding: 1.2rem 2.8rem;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.5s ease;
          text-decoration: none;
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-primary {
          background: rgba(74, 158, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 2px solid #4a9eff;
          color: white;
        }

        .cta-primary:hover {
          background: #4a9eff;
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(74, 158, 255, 0.4);
        }

        .cta-secondary {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.8);
          color: white;
        }

        .cta-secondary:hover {
          background: rgba(255,255,255,0.95);
          color: #000;
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(255,255,255,0.3);
        }

        /* STATS SECTION */
        .stats-section {
          min-height: 80vh;
          will-change: transform;
        }

        /* Performance optimization for mobile */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
            letter-spacing: 6px;
          }

          .hero-cta-group {
            flex-direction: column;
            align-items: center;
          }

          /* Disable parallax effects on mobile for better performance */
          .luxury-hero,
          .stats-section {
            background-attachment: scroll !important;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .luxury-hero,
          .stats-section {
            background-attachment: scroll !important;
          }
          
          .hero-content,
          .cta-button {
            animation: none !important;
            transition: none !important;
          }
        }
      `}),l.jsx(Te,{src:"/HeroBackground.png",className:"luxury-hero",priority:!0,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"},children:l.jsxs("div",{className:"hero-content",children:[l.jsx("div",{className:"hero-logo",children:"Evergreen Motors"}),l.jsx("h1",{children:"Drive the Future"}),l.jsx("p",{className:"hero-tagline",children:"Where sustainable innovation meets uncompromising luxury. Experience the next generation of electric mobility at Evergreen Motors."}),l.jsxs("div",{className:"hero-cta-group",children:[l.jsx(R,{to:"/models",className:"cta-button cta-primary",children:"Explore Collection"}),l.jsx(R,{to:"/test-drive",className:"cta-button cta-secondary",children:"Schedule Test Drive"})]})]})}),l.jsx(Te,{src:"/bottom-bannerPC.jpg",className:"stats-section",priority:!1,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"}})]})),Em=()=>{k.useEffect(()=>{const t={threshold:.1,rootMargin:"0px 0px -100px 0px"},n=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&i.target.classList.add("fade-in-visible")})},t);return document.querySelectorAll(".fade-in-section").forEach(r=>n.observe(r)),()=>n.disconnect()},[]);const e=[{id:"dolphin-mini",name:"Dolphin Mini",description:"Compact elegance meets urban efficiency in this perfectly sized city electric vehicle",type:"City Electric",image:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000",price:"Starting at $28,990",range:"250 miles",acceleration:"7.5s 0-60mph"},{id:"atto-3",name:"Atto 3",description:"The benchmark electric SUV featuring e-Platform 3.0 technology and exceptional versatility",type:"Electric SUV",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",price:"Starting at $38,990",range:"260 miles",acceleration:"7.3s 0-60mph"},{id:"seal-u",name:"Seal U",description:"Premium electric sedan where sophisticated design meets exhilarating performance",type:"Luxury Sedan",image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",price:"Starting at $48,990",range:"354 miles",acceleration:"3.8s 0-60mph"},{id:"tang-l",name:"Tang L",description:"Spacious luxury with three rows of premium comfort and cutting-edge technology",type:"7-Seater SUV",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",price:"Starting at $58,990",range:"323 miles",acceleration:"4.4s 0-60mph"},{id:"han",name:"Han",description:"Flagship luxury sedan combining breathtaking design with uncompromising performance",type:"Executive Sedan",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",price:"Starting at $54,990",range:"379 miles",acceleration:"3.9s 0-60mph"},{id:"seal",name:"Seal",description:"Athletic performance sedan with ocean-inspired design and track-ready dynamics",type:"Performance Sedan",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",price:"Starting at $44,990",range:"310 miles",acceleration:"3.6s 0-60mph"}];return l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
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
        }

        .models-section {
          padding: 8rem 5%;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          min-height: 100vh;
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
      `}),l.jsx("div",{className:"models-hero",children:l.jsxs("div",{className:"models-hero-content",children:[l.jsx("h1",{children:"OUR COLLECTION"}),l.jsx("p",{className:"subtitle",children:"Electric Excellence"}),l.jsx("p",{children:"Discover the pinnacle of electric vehicle innovation. Each BYD model in our collection represents the perfect fusion of cutting-edge technology, sustainable design, and luxurious comfort."})]})}),l.jsxs("section",{className:"models-section fade-in-section",children:[l.jsxs("div",{className:"models-intro",children:[l.jsx("h2",{children:"The Future of Mobility"}),l.jsx("p",{children:"At Evergreen Motors, we offer an exceptional range of BYD electric vehicles — each engineered to perfection, designed to inspire, and built to transform the way you drive. Experience the difference that true innovation makes."})]}),l.jsx("div",{className:"luxury-models-grid",children:e.map(t=>l.jsxs(R,{to:`/models/${t.id}`,className:"luxury-model-card",children:[l.jsxs("div",{className:"model-image-container",children:[l.jsx("img",{src:t.image,alt:t.name}),l.jsx("div",{className:"model-type-badge",children:t.type})]}),l.jsxs("div",{className:"luxury-model-info",children:[l.jsx("h3",{className:"luxury-model-name",children:t.name}),l.jsx("p",{className:"luxury-model-description",children:t.description}),l.jsxs("div",{className:"model-specs",children:[l.jsxs("div",{className:"spec-item",children:[l.jsx("div",{className:"spec-label",children:"Range"}),l.jsx("div",{className:"spec-value",children:t.range})]}),l.jsxs("div",{className:"spec-item",children:[l.jsx("div",{className:"spec-label",children:"0-60 MPH"}),l.jsx("div",{className:"spec-value",children:t.acceleration})]})]}),l.jsx("div",{className:"model-price",children:t.price}),l.jsx("span",{className:"luxury-learn-more",children:"Explore Model"})]})]},t.id))})]})]})},zm=()=>{const{modelId:e}=qp();k.useEffect(()=>{window.scrollTo(0,0)},[e]);const n={"dolphin-mini":{id:"dolphin-mini",name:"Dolphin Mini",tagline:"Urban Sophistication Reimagined",description:"The Dolphin Mini represents the perfect harmony of compact design and electric efficiency. Engineered for city driving yet capable of longer journeys, this sophisticated city car delivers premium comfort, advanced technology, and exceptional range in a beautifully compact package.",type:"City Electric",image:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000",price:"Starting at $28,990",specs:{range:"250 miles",acceleration:"7.5s 0-60mph",topSpeed:"99 mph",motorPower:"150 kW",batteryCapacity:"44.9 kWh",chargingTime:"30 min (10-80%)",seating:"5 passengers",driveType:"Front-Wheel Drive"},features:["e-Platform 3.0 Architecture","Blade Battery Technology","Intelligent Cockpit System","Advanced Driver Assistance","Panoramic Sunroof","Premium Interior Materials","Wireless Phone Charging","LED Lighting System"],colors:[{name:"Pearl White",hex:"#f8f9fa"},{name:"Midnight Black",hex:"#1a1a1a"},{name:"Ocean Blue",hex:"#4a9eff"},{name:"Silver Mist",hex:"#c0c0c0"}],highlights:[{title:"Compact Excellence",description:"Perfect dimensions for urban navigation without sacrificing interior space or comfort",icon:"🏙️"},{title:"Efficient Power",description:"Optimized electric motor delivers responsive performance with exceptional efficiency",icon:"⚡"},{title:"Smart Technology",description:"Intuitive infotainment and connectivity keep you seamlessly connected",icon:"📱"}]},"atto-3":{id:"atto-3",name:"Atto 3",tagline:"The Benchmark Electric SUV",description:"The Atto 3 sets new standards for electric SUVs with its perfect blend of practicality, performance, and cutting-edge technology. Built on BYD's revolutionary e-Platform 3.0, this versatile SUV offers exceptional range, sophisticated design, and an interior that redefines comfort and innovation.",type:"Electric SUV",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",price:"Starting at $38,990",specs:{range:"260 miles",acceleration:"7.3s 0-60mph",topSpeed:"100 mph",motorPower:"150 kW",batteryCapacity:"60.5 kWh",chargingTime:"29 min (30-80%)",seating:"5 passengers",driveType:"Front-Wheel Drive"},features:["e-Platform 3.0 Technology","Blade Battery System","Panoramic Sky Window","Rotating Touchscreen Display","Voice-Activated Controls","Premium Sound System","Advanced Safety Suite","Wireless CarPlay & Android Auto"],colors:[{name:"Cosmos Black",hex:"#0a0a0a"},{name:"Surf Blue",hex:"#4a9eff"},{name:"Boulder Grey",hex:"#6c757d"},{name:"Parkour Red",hex:"#dc3545"}],highlights:[{title:"Spacious Versatility",description:"Generous cargo space and flexible seating configurations for every adventure",icon:"🎒"},{title:"Advanced Safety",description:"Comprehensive suite of driver assistance systems for confident driving",icon:"🛡️"},{title:"Exceptional Range",description:"Travel further with confidence thanks to efficient battery technology",icon:"🔋"}]},"seal-u":{id:"seal-u",name:"Seal U",tagline:"Premium Electric Sophistication",description:"The Seal U embodies the pinnacle of electric sedan luxury. With its stunning ocean-inspired design language, exhilarating performance, and advanced technology suite, this premium sedan delivers an uncompromising driving experience that seamlessly blends elegance with athletic capability.",type:"Luxury Sedan",image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",price:"Starting at $48,990",specs:{range:"354 miles",acceleration:"3.8s 0-60mph",topSpeed:"112 mph",motorPower:"390 kW",batteryCapacity:"82.5 kWh",chargingTime:"26 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["CTB Cell-to-Body Integration","Dual Motor AWD System","Adaptive Air Suspension","Premium Nappa Leather Interior","Head-Up Display","Dynaudio Sound System","Matrix LED Headlights","Advanced Climate Control"],colors:[{name:"Aurora Silver",hex:"#d4d4d4"},{name:"Deep Ocean Blue",hex:"#1e3a8a"},{name:"Quantum Grey",hex:"#4b5563"},{name:"Crystal White",hex:"#ffffff"}],highlights:[{title:"Athletic Performance",description:"Dual motors deliver exhilarating acceleration and dynamic handling",icon:"🏁"},{title:"Luxurious Comfort",description:"Premium materials and meticulous craftsmanship throughout the cabin",icon:"✨"},{title:"Extended Range",description:"Travel over 350 miles on a single charge for ultimate peace of mind",icon:"🌍"}]},"tang-l":{id:"tang-l",name:"Tang L",tagline:"Luxury Redefined for Seven",description:"The Tang L represents the ultimate expression of family luxury. This spacious three-row SUV combines cutting-edge electric technology with opulent comfort, offering seven passengers premium accommodations and an array of advanced features that make every journey extraordinary.",type:"7-Seater SUV",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",price:"Starting at $58,990",specs:{range:"323 miles",acceleration:"4.4s 0-60mph",topSpeed:"112 mph",motorPower:"380 kW",batteryCapacity:"108.8 kWh",chargingTime:"30 min (30-80%)",seating:"7 passengers",driveType:"All-Wheel Drive"},features:["Three-Row Seating","Dual Motor Performance","Premium Quilted Leather","Panoramic Glass Roof","Individual Seat Climate Control","Premium Audio System","Gesture Control","Advanced Autopilot"],colors:[{name:"Imperial Red",hex:"#8b0000"},{name:"Graphite Black",hex:"#2d3436"},{name:"Champagne Gold",hex:"#d4af37"},{name:"Celestial White",hex:"#fafafa"}],highlights:[{title:"Seven-Seat Luxury",description:"Premium comfort for every passenger across three spacious rows",icon:"👨‍👩‍👧‍👦"},{title:"Powerful Performance",description:"Dual motors provide commanding power and confident handling",icon:"💪"},{title:"Advanced Technology",description:"Cutting-edge features and connectivity throughout",icon:"🔬"}]},han:{id:"han",name:"Han",tagline:"Executive Excellence",description:"The Han flagship sedan represents the apex of BYD's engineering prowess and design philosophy. This executive-class vehicle combines breathtaking aesthetics with phenomenal performance, offering a driving experience that rivals the world's most prestigious luxury sedans while delivering zero emissions.",type:"Executive Sedan",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",price:"Starting at $54,990",specs:{range:"379 miles",acceleration:"3.9s 0-60mph",topSpeed:"115 mph",motorPower:"380 kW",batteryCapacity:"85.4 kWh",chargingTime:"25 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["Dragon Face Design Language","Executive Rear Seating","Massage Function","Ambient Lighting (31 colors)","Premium Dynaudio System","Advanced DiPilot","Ventilated & Heated Seats","Electrochromic Panoramic Roof"],colors:[{name:"Dragon Scale Grey",hex:"#708090"},{name:"Phoenix Red",hex:"#c41e3a"},{name:"Jade Green",hex:"#00a86b"},{name:"Emperor Black",hex:"#000000"}],highlights:[{title:"Flagship Design",description:"Stunning Dragon Face aesthetic that commands attention",icon:"🐉"},{title:"Executive Comfort",description:"First-class accommodations with massage and premium materials",icon:"🎩"},{title:"Record Range",description:"Nearly 380 miles of range for effortless long-distance travel",icon:"🛣️"}]},seal:{id:"seal",name:"Seal",tagline:"Performance Unleashed",description:"The Seal performance sedan delivers pure driving excitement. Inspired by the ocean's most agile creatures, this athletic sedan combines razor-sharp handling, explosive acceleration, and striking design to create a driving experience that thrills enthusiasts while maintaining everyday practicality.",type:"Performance Sedan",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",price:"Starting at $44,990",specs:{range:"310 miles",acceleration:"3.6s 0-60mph",topSpeed:"112 mph",motorPower:"390 kW",batteryCapacity:"82.5 kWh",chargingTime:"26 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["Sport-Tuned Suspension","Performance Dual Motors","Sport Seats with Bolstering","Track Mode","Performance Braking System","Sport Steering Wheel","Digital Instrument Cluster","Launch Control"],colors:[{name:"Racing Blue",hex:"#0066cc"},{name:"Shadow Black",hex:"#121212"},{name:"Silver Storm",hex:"#b8b8b8"},{name:"Carbon Grey",hex:"#3d3d3d"}],highlights:[{title:"Track-Ready Performance",description:"Sub-4-second acceleration with sport-tuned dynamics",icon:"🏎️"},{title:"Agile Handling",description:"Low center of gravity and AWD provide exceptional cornering",icon:"🌀"},{title:"Driver-Focused",description:"Every element optimized for an engaging driving experience",icon:"🎯"}]}}[e||""];return n?l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .model-detail-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                      url('${n.image}') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          background-attachment: fixed;
        }

        .hero-detail-content {
          z-index: 1;
          max-width: 1200px;
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

        .back-link {
          position: absolute;
          top: 120px;
          left: 5%;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          padding: 0.8rem 1.5rem;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background: rgba(74, 158, 255, 0.3);
          border-color: #4a9eff;
          transform: translateX(-5px);
        }

        .model-type-badge-hero {
          display: inline-block;
          background: rgba(74, 158, 255, 0.9);
          padding: 0.6rem 2rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .hero-detail-content h1 {
          font-size: 7rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 15px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .hero-tagline {
          font-size: 2rem;
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
        }

        .hero-price {
          font-size: 1.8rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
        }

        .detail-section {
          padding: 8rem 5%;
          min-height: 50vh;
        }

        .dark-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          color: white;
        }

        .light-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          color: #333;
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 4rem;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          text-align: center;
        }

        .description-text {
          font-size: 1.3rem;
          line-height: 2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          max-width: 1000px;
          margin: 0 auto 5rem;
          text-align: center;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          margin-top: 5rem;
        }

        .spec-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.4s ease;
        }

        .light-section .spec-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
        }

        .spec-card:hover {
          transform: translateY(-10px);
          border-color: #4a9eff;
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.2);
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

        .light-section .spec-label {
          color: #666;
        }

        .spec-value {
          font-size: 2rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          margin-top: 5rem;
        }

        .highlight-card {
          text-align: center;
          padding: 3rem 2rem;
        }

        .highlight-icon {
          font-size: 5rem;
          margin-bottom: 2rem;
        }

        .highlight-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .highlight-description {
          font-size: 1.1rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 5rem;
        }

        .feature-item {
          padding: 1.8rem 2rem;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border-left: 4px solid #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 300;
          transition: all 0.3s ease;
        }

        .light-section .feature-item {
          background: white;
          border: 1px solid rgba(0,0,0,0.05);
          border-left: 4px solid #4a9eff;
        }

        .feature-item:hover {
          padding-left: 3rem;
          background: rgba(74, 158, 255, 0.1);
        }

        .colors-grid {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 5rem;
        }

        .color-option {
          text-align: center;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .color-option:hover {
          transform: scale(1.1);
        }

        .color-swatch {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 1rem;
          border: 3px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }

        .color-option:hover .color-swatch {
          border-color: #4a9eff;
          box-shadow: 0 0 30px rgba(74, 158, 255, 0.5);
        }

        .color-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .cta-section {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(53, 122, 189, 0.1) 100%);
          padding: 6rem 5%;
          text-align: center;
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
      `}),l.jsx(R,{to:"/models",className:"back-link",children:"← All Models"}),l.jsx("div",{className:"model-detail-hero",children:l.jsxs("div",{className:"hero-detail-content",children:[l.jsx("div",{className:"model-type-badge-hero",children:n.type}),l.jsx("h1",{children:n.name}),l.jsx("p",{className:"hero-tagline",children:n.tagline}),l.jsx("p",{className:"hero-price",children:n.price})]})}),l.jsx("section",{className:"detail-section dark-section",children:l.jsxs("div",{className:"section-container",children:[l.jsx("h2",{className:"section-title",children:"Overview"}),l.jsx("p",{className:"description-text",style:{color:"rgba(255,255,255,0.8)"},children:n.description}),l.jsxs("div",{className:"specs-grid",children:[l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Range"}),l.jsx("div",{className:"spec-value",children:n.specs.range})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"0-60 MPH"}),l.jsx("div",{className:"spec-value",children:n.specs.acceleration})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Top Speed"}),l.jsx("div",{className:"spec-value",children:n.specs.topSpeed})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Motor Power"}),l.jsx("div",{className:"spec-value",children:n.specs.motorPower})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Battery"}),l.jsx("div",{className:"spec-value",children:n.specs.batteryCapacity})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Charging"}),l.jsx("div",{className:"spec-value",children:n.specs.chargingTime})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Seating"}),l.jsx("div",{className:"spec-value",children:n.specs.seating})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Drive Type"}),l.jsx("div",{className:"spec-value",children:n.specs.driveType})]})]})]})}),l.jsx("section",{className:"detail-section light-section",children:l.jsxs("div",{className:"section-container",children:[l.jsx("h2",{className:"section-title",children:"Key Highlights"}),l.jsx("div",{className:"highlights-grid",children:n.highlights.map((r,i)=>l.jsxs("div",{className:"highlight-card",children:[l.jsx("div",{className:"highlight-icon",children:r.icon}),l.jsx("h3",{className:"highlight-title",children:r.title}),l.jsx("p",{className:"highlight-description",children:r.description})]},i))})]})}),l.jsx("section",{className:"detail-section dark-section",children:l.jsxs("div",{className:"section-container",children:[l.jsx("h2",{className:"section-title",children:"Premium Features"}),l.jsx("div",{className:"features-grid",children:n.features.map((r,i)=>l.jsx("div",{className:"feature-item",children:r},i))})]})}),l.jsx("section",{className:"detail-section light-section",children:l.jsxs("div",{className:"section-container",children:[l.jsx("h2",{className:"section-title",children:"Available Colors"}),l.jsx("div",{className:"colors-grid",children:n.colors.map((r,i)=>l.jsxs("div",{className:"color-option",children:[l.jsx("div",{className:"color-swatch",style:{backgroundColor:r.hex}}),l.jsx("div",{className:"color-name",children:r.name})]},i))})]})}),l.jsx("section",{className:"cta-section",children:l.jsxs("div",{className:"section-container",children:[l.jsxs("h2",{className:"section-title",style:{color:"#333"},children:["Experience the ",n.name]}),l.jsxs("p",{style:{fontSize:"1.3rem",color:"#666",fontFamily:"Montserrat, sans-serif",fontWeight:300},children:["Visit Evergreen Motors today and discover why the ",n.name," is redefining electric mobility"]}),l.jsxs("div",{className:"cta-buttons",children:[l.jsx(R,{to:"/test-drive",className:"cta-button cta-button-primary",children:"Schedule Test Drive"}),l.jsx(R,{to:"/contact",className:"cta-button cta-button-secondary",children:"Contact Us"})]})]})})]}):l.jsxs("div",{style:{padding:"10rem 5%",textAlign:"center",color:"white",background:"#0a0a0a",minHeight:"100vh"},children:[l.jsx("h1",{style:{fontSize:"3rem",marginBottom:"2rem"},children:"Model Not Found"}),l.jsx(R,{to:"/models",style:{color:"#4a9eff",fontSize:"1.2rem"},children:"← Back to Models"})]})},Pm=()=>(k.useEffect(()=>{const e={threshold:.1,rootMargin:"0px 0px -100px 0px"},t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("fade-in-visible")})},e);return document.querySelectorAll(".fade-in-section").forEach(n=>t.observe(n)),()=>t.disconnect()},[]),l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .luxury-tech-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          background-attachment: fixed;
        }

        .hero-content {
          z-index: 1;
          animation: heroFade 1.8s ease-out;
          max-width: 1200px;
          padding: 0 3rem;
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

        .hero-content h1 {
          font-size: 6rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 15px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .hero-content .subtitle {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4a9eff;
        }

        .hero-content p {
          font-size: 1.4rem;
          line-height: 2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
        }

        .luxury-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 5%;
          background-attachment: fixed;
        }

        /* E-PLATFORM SECTION - Alternating grid layout */
        .platform-section {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          color: white;
        }

        .platform-header {
          text-align: center;
          margin-bottom: 8rem;
        }

        .platform-header h2 {
          font-size: 5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .platform-subtitle {
          font-size: 1.4rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
          opacity: 0.8;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          margin-bottom: 8rem;
        }

        .tech-grid:last-child {
          margin-bottom: 0;
        }

        .tech-content {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(74, 158, 255, 0.2);
          padding: 4rem;
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .tech-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(74, 158, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .tech-content:hover::before {
          left: 100%;
        }

        .tech-content:hover {
          border-color: rgba(74, 158, 255, 0.5);
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.2);
          transform: translateX(10px);
        }

        .tech-number {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          font-size: 1rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .tech-content h3 {
          font-size: 3rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 4px;
          font-family: 'Cormorant Garamond', serif;
          color: #4a9eff;
        }

        .tech-content p {
          font-size: 1.2rem;
          line-height: 2;
          color: rgba(255,255,255,0.85);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .tech-visual {
          width: 100%;
          height: 500px;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
          border: 2px solid rgba(74, 158, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8rem;
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .tech-visual::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        .tech-visual:hover {
          border-color: rgba(74, 158, 255, 0.6);
          box-shadow: 0 0 60px rgba(74, 158, 255, 0.4);
          font-size: 9rem;
        }

        /* COCKPIT SECTION - Card masonry layout */
        .cockpit-section {
          background: linear-gradient(rgba(255,255,255,0.98), rgba(255,255,255,0.98)),
                      url('https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=2000') center/cover;
        }

        .cockpit-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .cockpit-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .cockpit-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
        }

        .cockpit-subtitle {
          font-size: 1.4rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .cockpit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, auto);
          gap: 3rem;
        }

        .cockpit-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.95) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.5s ease;
          position: relative;
        }

        .cockpit-card:nth-child(1) {
          grid-column: span 2;
          grid-row: span 2;
        }

        .cockpit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 70px rgba(74, 158, 255, 0.15);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .cockpit-icon-large {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
        }

        .cockpit-icon {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.08) 0%, rgba(53, 122, 189, 0.08) 100%);
          transition: all 0.4s ease;
        }

        .cockpit-card:hover .cockpit-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.15) 0%, rgba(53, 122, 189, 0.15) 100%);
          font-size: 5.5rem;
        }

        .cockpit-content {
          padding: 3rem;
        }

        .cockpit-content h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .cockpit-content p {
          font-size: 1.15rem;
          line-height: 1.9;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .cockpit-feature-list {
          list-style: none;
          padding: 0;
          margin: 2rem 0 0 0;
        }

        .cockpit-feature-list li {
          padding: 1rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          font-family: 'Montserrat', sans-serif;
          font-size: 1.05rem;
          color: #555;
          transition: all 0.3s ease;
        }

        .cockpit-feature-list li:hover {
          padding-left: 1rem;
          color: #4a9eff;
        }

        .cockpit-feature-list li:last-child {
          border-bottom: none;
        }

        /* NEV SECTION - Full width immersive */
        .nev-section {
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)),
                      url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000') center/cover;
          color: white;
          min-height: 100vh;
        }

        .nev-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .nev-container h2 {
          font-size: 5.5rem;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 10px;
          font-family: 'Cormorant Garamond', serif;
        }

        .nev-subtitle {
          font-size: 1.5rem;
          line-height: 2.2;
          margin-bottom: 6rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          opacity: 0.95;
        }

        .nev-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          margin-top: 6rem;
        }

        .nev-stat {
          position: relative;
          padding: 3rem 2rem;
        }

        .nev-stat::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #4a9eff, transparent);
        }

        .nev-stat-number {
          font-size: 5rem;
          font-weight: 300;
          color: #4a9eff;
          margin: 2rem 0 1rem;
          font-family: 'Cormorant Garamond', serif;
        }

        .nev-stat-label {
          font-size: 1.2rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          opacity: 0.9;
        }

        /* BLADE BATTERY SECTION - Split reveal */
        .blade-section {
          background: white;
          padding: 0;
          min-height: 100vh;
        }

        .blade-split {
          display: grid;
          grid-template-columns: 45% 55%;
          min-height: 100vh;
        }

        .blade-content {
          padding: 8rem 6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        .blade-content h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
          line-height: 1.2;
        }

        .blade-content .highlight {
          color: #4a9eff;
        }

        .blade-content p {
          font-size: 1.25rem;
          line-height: 2;
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          color: #555;
        }

        .blade-features {
          margin-top: 3rem;
        }

        .blade-feature {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          padding: 1.5rem;
          background: rgba(74, 158, 255, 0.03);
          border-left: 4px solid #4a9eff;
          transition: all 0.4s ease;
        }

        .blade-feature:hover {
          padding-left: 2.5rem;
          background: rgba(74, 158, 255, 0.08);
          border-left-width: 6px;
        }

        .blade-feature-icon {
          font-size: 2.5rem;
          min-width: 50px;
        }

        .blade-feature-text h4 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: #333;
          letter-spacing: 1px;
        }

        .blade-feature-text p {
          font-size: 1.05rem;
          margin: 0;
          color: #666;
        }

        .blade-visual {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%),
                      url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000') center/cover;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blade-visual-icon {
          font-size: 15rem;
          opacity: 0.3;
        }

        @media (max-width: 1200px) {
          .cockpit-grid {
            grid-template-columns: 1fr 1fr;
          }

          .cockpit-card:nth-child(1) {
            grid-column: span 2;
            grid-row: span 1;
          }

          .blade-split {
            grid-template-columns: 1fr;
          }

          .blade-visual {
            min-height: 60vh;
          }

          .nev-stats {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }

          .tech-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .cockpit-grid {
            grid-template-columns: 1fr;
          }

          .cockpit-card:nth-child(1) {
            grid-column: span 1;
          }

          .blade-content {
            padding: 4rem 2rem;
          }

          .tech-visual {
            height: 300px;
            font-size: 5rem;
          }
        }
      `}),l.jsx("div",{className:"luxury-tech-hero",children:l.jsxs("div",{className:"hero-content",children:[l.jsx("h1",{children:"TECHNOLOGY"}),l.jsx("p",{className:"subtitle",children:"Innovation in Motion"}),l.jsx("p",{children:"At Evergreen Motors, we bring you BYD's revolutionary technology — engineered for performance, designed for sustainability, built for the future."})]})}),l.jsx("section",{className:"luxury-section platform-section fade-in-section",children:l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{className:"platform-header",children:[l.jsx("h2",{children:"e-Platform 3.0"}),l.jsx("p",{className:"platform-subtitle",children:"The foundation of next-generation electric vehicles"})]}),l.jsxs("div",{className:"tech-grid",children:[l.jsxs("div",{className:"tech-content",children:[l.jsx("span",{className:"tech-number",children:"01"}),l.jsx("h3",{children:"Safety First"}),l.jsx("p",{children:"The e-Platform 3.0 integrates ultra-safe Blade batteries directly into the chassis, forming a robust and unique body structure. This cell-to-body design enhances overall vehicle safety, improves crash protection, and maximizes structural integrity while optimizing interior space."})]}),l.jsx("div",{className:"tech-visual",children:"🛡️"})]}),l.jsxs("div",{className:"tech-grid",children:[l.jsx("div",{className:"tech-visual",children:"⚡"}),l.jsxs("div",{className:"tech-content",children:[l.jsx("span",{className:"tech-number",children:"02"}),l.jsx("h3",{children:"Unmatched Efficiency"}),l.jsx("p",{children:"Achieve ranges exceeding 620 miles on a single charge with the world's first 8-in-1 electric powertrain. This revolutionary system integrates motor, controller, reducer, on-board charger, DC converter, power distribution, battery management, and vehicle control into one seamless unit for exceptional efficiency."})]})]}),l.jsxs("div",{className:"tech-grid",children:[l.jsxs("div",{className:"tech-content",children:[l.jsx("span",{className:"tech-number",children:"03"}),l.jsx("h3",{children:"Advanced Intelligence"}),l.jsx("p",{children:"BYD's sophisticated operating system creates an intuitive, responsive driving experience. The vehicle's neural network continuously monitors environmental inputs, learning your preferences and automatically optimizing performance, comfort, and safety for your unique driving conditions."})]}),l.jsx("div",{className:"tech-visual",children:"🤖"})]}),l.jsxs("div",{className:"tech-grid",children:[l.jsx("div",{className:"tech-visual",children:"✨"}),l.jsxs("div",{className:"tech-content",children:[l.jsx("span",{className:"tech-number",children:"04"}),l.jsx("h3",{children:"Refined Aesthetics"}),l.jsx("p",{children:"Form meets function in perfect harmony. Shorter overhangs and an extended wheelbase significantly expand interior passenger space while achieving an incredible 0.21 Cd drag coefficient — one of the lowest in the industry — for enhanced range and whisper-quiet operation."})]})]})]})}),l.jsx("section",{className:"luxury-section cockpit-section fade-in-section",children:l.jsxs("div",{className:"cockpit-container",children:[l.jsxs("div",{className:"cockpit-header",children:[l.jsx("h2",{children:"Intelligent Cockpit System"}),l.jsx("p",{className:"cockpit-subtitle",children:"Your digital command center for the ultimate driving experience"})]}),l.jsxs("div",{className:"cockpit-grid",children:[l.jsxs("div",{className:"cockpit-card",children:[l.jsx("div",{className:"cockpit-icon-large",children:"🎛️"}),l.jsxs("div",{className:"cockpit-content",children:[l.jsx("h3",{children:"Total Integration"}),l.jsx("p",{children:"The BYD Intelligent Cockpit seamlessly merges your digital life with your vehicle. Experience unprecedented connectivity as your smartphone, navigation, entertainment, and vehicle controls unite in one intuitive interface."}),l.jsxs("ul",{className:"cockpit-feature-list",children:[l.jsx("li",{children:"🔄 Wireless Apple CarPlay & Android Auto"}),l.jsx("li",{children:"🎤 Voice-activated controls"}),l.jsx("li",{children:"📊 Real-time vehicle diagnostics"}),l.jsx("li",{children:"☁️ Cloud-based personalization"}),l.jsx("li",{children:"🔐 Advanced security features"})]})]})]}),l.jsxs("div",{className:"cockpit-card",children:[l.jsx("div",{className:"cockpit-icon",children:"📱"}),l.jsxs("div",{className:"cockpit-content",children:[l.jsx("h3",{children:"Seamless Connectivity"}),l.jsx("p",{children:"Advanced smartphone integration keeps you connected with intuitive touch controls and wireless charging."})]})]}),l.jsxs("div",{className:"cockpit-card",children:[l.jsx("div",{className:"cockpit-icon",children:"🗺️"}),l.jsxs("div",{className:"cockpit-content",children:[l.jsx("h3",{children:"Smart Navigation"}),l.jsx("p",{children:"Intelligent GPS with real-time traffic, automatic rerouting, and EV charging station integration."})]})]}),l.jsxs("div",{className:"cockpit-card",children:[l.jsx("div",{className:"cockpit-icon",children:"🎵"}),l.jsxs("div",{className:"cockpit-content",children:[l.jsx("h3",{children:"Premium Audio"}),l.jsx("p",{children:"Concert-quality sound system with streaming integration and spatial audio technology."})]})]}),l.jsxs("div",{className:"cockpit-card",children:[l.jsx("div",{className:"cockpit-icon",children:"🌡️"}),l.jsxs("div",{className:"cockpit-content",children:[l.jsx("h3",{children:"Climate Control"}),l.jsx("p",{children:"Multi-zone intelligent climate system that learns and adapts to your comfort preferences."})]})]})]})]})}),l.jsx("section",{className:"blade-section fade-in-section",children:l.jsxs("div",{className:"blade-split",children:[l.jsxs("div",{className:"blade-content",children:[l.jsxs("h2",{children:[l.jsx("span",{className:"highlight",children:"Blade Battery"}),l.jsx("br",{}),"Technology"]}),l.jsx("p",{children:"BYD's revolutionary Blade Battery represents a quantum leap in battery safety, performance, and longevity. This groundbreaking technology has redefined what's possible in electric vehicle power systems."}),l.jsxs("div",{className:"blade-features",children:[l.jsxs("div",{className:"blade-feature",children:[l.jsx("span",{className:"blade-feature-icon",children:"🔥"}),l.jsxs("div",{className:"blade-feature-text",children:[l.jsx("h4",{children:"Uncompromising Safety"}),l.jsx("p",{children:"Passed the nail penetration test without fire or smoke — a feat unmatched by conventional lithium batteries."})]})]}),l.jsxs("div",{className:"blade-feature",children:[l.jsx("span",{className:"blade-feature-icon",children:"📏"}),l.jsxs("div",{className:"blade-feature-text",children:[l.jsx("h4",{children:"Space Optimization"}),l.jsx("p",{children:"Unique blade-shaped design increases space utilization by 50% compared to traditional battery packs."})]})]}),l.jsxs("div",{className:"blade-feature",children:[l.jsx("span",{className:"blade-feature-icon",children:"⏱️"}),l.jsxs("div",{className:"blade-feature-text",children:[l.jsx("h4",{children:"Extended Lifespan"}),l.jsx("p",{children:"Advanced lithium iron phosphate chemistry delivers over 3,000 charge cycles with minimal degradation."})]})]}),l.jsxs("div",{className:"blade-feature",children:[l.jsx("span",{className:"blade-feature-icon",children:"🌱"}),l.jsxs("div",{className:"blade-feature-text",children:[l.jsx("h4",{children:"Eco-Friendly"}),l.jsx("p",{children:"Cobalt-free construction reduces environmental impact while maintaining exceptional performance."})]})]})]})]}),l.jsx("div",{className:"blade-visual",children:l.jsx("span",{className:"blade-visual-icon",children:"🔋"})})]})}),l.jsx("section",{className:"luxury-section nev-section fade-in-section",children:l.jsxs("div",{className:"nev-container",children:[l.jsx("h2",{children:"New Energy Vehicles"}),l.jsx("p",{className:"nev-subtitle",children:"BYD leads the global New Energy Vehicle revolution with groundbreaking innovations in battery technology, electric powertrains, and sustainable manufacturing. At Evergreen Motors, we're proud to deliver these world-class vehicles that are reshaping transportation and creating a cleaner, greener future for generations to come."}),l.jsxs("div",{className:"nev-stats",children:[l.jsxs("div",{className:"nev-stat",children:[l.jsx("div",{className:"nev-stat-number",children:"3M+"}),l.jsx("div",{className:"nev-stat-label",children:"Global NEV Sales"})]}),l.jsxs("div",{className:"nev-stat",children:[l.jsx("div",{className:"nev-stat-number",children:"70+"}),l.jsx("div",{className:"nev-stat-label",children:"Countries & Regions"})]}),l.jsxs("div",{className:"nev-stat",children:[l.jsx("div",{className:"nev-stat-number",children:"#1"}),l.jsx("div",{className:"nev-stat-label",children:"NEV Manufacturer"})]})]})]})})]})),Mm=()=>{const[e,t]=k.useState(!1),n=k.useRef(null);return k.useEffect(()=>{const r={threshold:.1,rootMargin:"0px 0px -100px 0px"},i=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&a.target.classList.add("fade-in-visible")})},r);return document.querySelectorAll(".fade-in-section").forEach(o=>i.observe(o)),()=>i.disconnect()},[]),k.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&n.current&&!e&&(t(!0),r.disconnect())})},{rootMargin:"50px"});return n.current&&r.observe(n.current),()=>r.disconnect()},[e]),l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .video-hero {
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .video-hero video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .video-hero video.loaded {
          opacity: 1;
        }

        .video-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.8s ease;
        }

        .video-placeholder.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .luxury-section {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 5%;
        }

        /* Story Section */
        .story-section {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .section-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-size: 4.5rem;
          text-align: center;
          margin-bottom: 5rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .story-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          margin-bottom: 8rem;
        }

        .story-item:last-child {
          margin-bottom: 0;
        }

        .story-item:nth-child(even) {
          direction: rtl;
        }

        .story-item:nth-child(even) > * {
          direction: ltr;
        }

        .story-content h3 {
          font-size: 3rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 4px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .story-content p {
          font-size: 1.2rem;
          line-height: 2;
          color: #555;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .story-image {
          height: 450px;
          background-size: cover;
          background-position: center;
          box-shadow: 0 30px 80px rgba(0,0,0,0.2);
          transition: all 0.6s ease;
          position: relative;
          overflow: hidden;
          background-color: #e0e0e0;
        }

        .story-image:hover {
          transform: scale(1.03);
          box-shadow: 0 40px 100px rgba(0,0,0,0.3);
        }

        /* Image Background Sections */
        .image-section {
          min-height: 120vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 5%;
          position: relative;
          will-change: transform;
        }

        .image-section-content {
          max-width: 900px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 4rem;
          box-shadow: 0 30px 80px rgba(0,0,0,0.3);
        }

        .image-section-content h2 {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .image-section-content p {
          font-size: 1.2rem;
          line-height: 2;
          color: #555;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        /* Platform Section with 3 Images */
        .platform-section {
          background: white;
          padding: 8rem 5%;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }

        .platform-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .platform-images {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 1.5rem;
          height: 600px;
        }

        .platform-image {
          background-size: cover;
          background-position: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          transition: transform 0.5s ease;
          background-color: #e0e0e0;
          position: relative;
          overflow: hidden;
        }

        .platform-image:hover {
          transform: scale(1.05);
        }

        .platform-image:first-child {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
        }

        .platform-image:nth-child(2) {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
        }

        .platform-image:nth-child(3) {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
        }

        .platform-text h2 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .platform-subtitle {
          font-size: 1.3rem;
          margin-bottom: 2.5rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .platform-text p {
          font-size: 1.15rem;
          line-height: 2;
          color: #555;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .platform-text ul {
          list-style: none;
          padding: 0;
        }

        .platform-text li {
          font-size: 1.05rem;
          line-height: 2;
          color: #555;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 1rem;
          padding-left: 2rem;
          position: relative;
        }

        .platform-text li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #4a9eff;
          font-weight: 600;
        }

        .platform-text strong {
          color: #1a1a1a;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .section-title {
            font-size: 3rem;
          }

          .story-item, .platform-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .story-item:nth-child(even) {
            direction: ltr;
          }

          .platform-images {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .luxury-section {
            padding: 5rem 5%;
          }

          .section-title {
            font-size: 2.5rem;
            letter-spacing: 4px;
          }

          .image-section-content {
            padding: 3rem 2rem;
          }

          .image-section-content h2 {
            font-size: 2.5rem;
          }

          .platform-images {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 200px);
            height: auto;
          }

          .platform-image:first-child {
            grid-column: 1;
            grid-row: 1;
          }

          .platform-image:nth-child(2) {
            grid-column: 1;
            grid-row: 2;
          }

          .platform-image:nth-child(3) {
            grid-column: 1;
            grid-row: 3;
          }

          /* Disable parallax on mobile */
          .image-section {
            background-attachment: scroll !important;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .image-section {
            background-attachment: scroll !important;
          }
          
          .fade-in-section,
          .story-image,
          .platform-image {
            transition: none !important;
          }
        }
      `}),l.jsxs("div",{className:"video-hero",ref:n,children:[!e&&l.jsx("div",{className:"video-placeholder",children:l.jsx("div",{style:{color:"white",fontSize:"1.2rem",fontFamily:"Montserrat, sans-serif",letterSpacing:"2px"},children:"Loading..."})}),e&&l.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"loaded",preload:"metadata",poster:"/About.mp4?poster=true",children:l.jsx("source",{src:"/About.mp4",type:"video/mp4"})})]}),l.jsx("section",{className:"luxury-section story-section fade-in-section",children:l.jsxs("div",{className:"section-content",children:[l.jsx("h2",{className:"section-title",children:"Our Story"}),l.jsxs("div",{className:"story-item",children:[l.jsxs("div",{className:"story-content",children:[l.jsx("h3",{children:"The Beginning"}),l.jsx("p",{children:"Evergreen Motors was founded on a simple belief: that the future of transportation should be sustainable without sacrificing the driving experience. We saw an opportunity to bridge the gap between environmental responsibility and automotive excellence."})]}),l.jsx(Te,{src:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop",className:"story-image",priority:!1})]}),l.jsxs("div",{className:"story-item",children:[l.jsxs("div",{className:"story-content",children:[l.jsx("h3",{children:"Growth & Innovation"}),l.jsx("p",{children:"As we expanded, we remained committed to our core values. Each new location, each partnership, and each customer relationship has been built on trust, transparency, and a shared vision for a sustainable future."})]}),l.jsx(Te,{src:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop",className:"story-image",priority:!1})]}),l.jsxs("div",{className:"story-item",children:[l.jsxs("div",{className:"story-content",children:[l.jsx("h3",{children:"Looking Forward"}),l.jsx("p",{children:"Today, we're proud to be at the forefront of the electric vehicle revolution. But we're not done yet. We continue to innovate, expand, and refine our offerings to ensure that every customer experiences the future of driving."})]}),l.jsx(Te,{src:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",className:"story-image",priority:!1})]})]})}),l.jsx(Te,{src:"/BYD-2000_0.jpg",className:"image-section fade-in-section",priority:!1,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"},children:l.jsxs("div",{className:"image-section-content",children:[l.jsx("h2",{children:"Innovation in Motion"}),l.jsx("p",{children:"BYD's cutting-edge technology represents the pinnacle of electric vehicle engineering. From advanced battery systems to intelligent drive platforms, every innovation is designed to deliver exceptional performance while reducing environmental impact."})]})}),l.jsx(Te,{src:"/b9f297e0-79c0-11ef-9dff-6e499e6c2dc7.png",className:"image-section fade-in-section",priority:!1,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"},children:l.jsxs("div",{className:"image-section-content",children:[l.jsx("h2",{children:"Sustainable Future"}),l.jsx("p",{children:"We're committed to building a transportation ecosystem that prioritizes sustainability without compromise. Through strategic partnerships and technological advancement, we're making electric mobility accessible to everyone."})]})}),l.jsx("section",{className:"platform-section fade-in-section",children:l.jsxs("div",{className:"platform-container",children:[l.jsxs("div",{className:"platform-images",children:[l.jsx(Te,{src:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",className:"platform-image",priority:!1}),l.jsx(Te,{src:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop",className:"platform-image",priority:!1}),l.jsx(Te,{src:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop",className:"platform-image",priority:!1})]}),l.jsxs("div",{className:"platform-text",children:[l.jsx("h2",{children:"Yisifang Platform"}),l.jsx("p",{className:"platform-subtitle",children:"(also known as the e⁴ platform)"}),l.jsx("p",{children:"The innovative distributed drive structure in the new energy vehicle industry reforms the traditional automotive power system from three dimensions: perception, decision-making, and execution."}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Full integration of vehicle perception:"})," Integrating vehicle sensors and intelligent driving sensors to achieve comprehensive perception of the vehicle environment."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Four-motor independent drive structure:"})," Self-developed, with four motors enabling independent control of each wheel, applicable to pure electric and hybrid platforms."]})]})]})]})})]})},_m=()=>{const[e,t]=k.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,r]=k.useState("idle");k.useEffect(()=>{$u("/contact.jpg")},[]);const i=a=>{const{name:s,value:c}=a.target;t(u=>({...u,[s]:c}))},o=a=>{a.preventDefault(),console.log("Form submitted:",e),r("success"),setTimeout(()=>{t({name:"",email:"",phone:"",subject:"",message:""}),r("idle")},3e3)};return l.jsxs("div",{children:[l.jsx("style",{children:`
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
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a9eff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 2rem center;
          padding-right: 4rem;
        }

        .form-group select option {
          background: #1a1a1a;
          color: white;
        }

        .submit-btn {
          width: 100%;
          padding: 1.8rem;
          background: linear-gradient(135deg, #4a9eff 0%, #357abd 100%);
          color: white;
          border: none;
          font-size: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 15px 40px rgba(74, 158, 255, 0.3);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(74, 158, 255, 0.5);
        }

        .submit-btn:active {
          transform: translateY(-1px);
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

       .map-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          padding: 6rem 5%;
        }

        .map-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .map-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          aspect-ratio: 2 / 1;
        }

        .map-info {
          padding: 4rem 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .map-title {
          font-size: 3rem;
          margin-bottom: 2.5rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: white;
          line-height: 1.2;
        }

        .map-address {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.85);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 0.5px;
          line-height: 2;
        }

        .map-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          border-left: 1px solid rgba(255,255,255,0.1);
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
          filter: grayscale(40%) brightness(0.85) contrast(1.15);
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

          .map-card {
            grid-template-columns: 1fr;
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
      `}),l.jsx(Te,{src:"/contact.jpg",className:"luxury-contact-hero",priority:!0,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"},children:l.jsx("div",{className:"hero-content",children:l.jsx("h1",{children:"CONTACT US"})})}),l.jsx("section",{className:"luxury-section",children:l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-label",children:"Get In Touch"}),l.jsx("h2",{className:"section-title",children:"Let's Connect"})]}),l.jsxs("div",{className:"contact-grid",children:[l.jsxs("div",{className:"contact-info-box",children:[l.jsx("h2",{children:"Information"}),l.jsxs("div",{className:"contact-item",children:[l.jsx("h3",{children:"Phone"}),l.jsx("p",{children:l.jsx("a",{href:"tel:+1234567890",children:"+1 (234) 567-890"})})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("h3",{children:"Email"}),l.jsx("p",{children:l.jsx("a",{href:"mailto:info@byd.com",children:"info@byd.com"})}),l.jsx("p",{children:l.jsx("a",{href:"mailto:sales@byd.com",children:"sales@byd.com"})})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("h3",{children:"Address"}),l.jsx("p",{children:"BYD Headquarters"}),l.jsx("p",{children:"3009 BYD Road"}),l.jsx("p",{children:"Shenzhen, Guangdong"}),l.jsx("p",{children:"China"})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("h3",{children:"Business Hours"}),l.jsx("p",{children:"Monday - Friday: 9:00 AM - 6:00 PM"}),l.jsx("p",{children:"Saturday: 10:00 AM - 4:00 PM"}),l.jsx("p",{children:"Sunday: Closed"})]})]}),l.jsxs("div",{className:"contact-form-box",children:[l.jsx("h2",{children:"Send Message"}),l.jsx("p",{className:"form-subtitle",children:"We'd love to hear from you. Fill out the form below and we'll be in touch shortly."}),n==="success"&&l.jsx("div",{className:"success-message",children:"✓ Message sent successfully"}),l.jsxs("form",{onSubmit:o,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"name",children:"Full Name *"}),l.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:i,required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"email",children:"Email Address *"}),l.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:i,required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"phone",children:"Phone Number"}),l.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:i})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"subject",children:"Subject *"}),l.jsxs("select",{id:"subject",name:"subject",value:e.subject,onChange:i,required:!0,children:[l.jsx("option",{value:"",children:"Select a subject"}),l.jsx("option",{value:"general",children:"General Inquiry"}),l.jsx("option",{value:"sales",children:"Sales & Purchasing"}),l.jsx("option",{value:"service",children:"Service & Maintenance"}),l.jsx("option",{value:"test-drive",children:"Schedule a Test Drive"}),l.jsx("option",{value:"fleet",children:"Fleet Solutions"}),l.jsx("option",{value:"partnership",children:"Business Partnership"}),l.jsx("option",{value:"other",children:"Other"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"message",children:"Message *"}),l.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:i,required:!0})]}),l.jsx("button",{type:"submit",className:"submit-btn",children:"SEND MESSAGE"})]})]})]})]})})]})},Tm=()=>(k.useEffect(()=>{const e=()=>{const n=window.location.hash;n&&setTimeout(()=>{const r=document.querySelector(n);r&&r.scrollIntoView({behavior:"smooth",block:"start"})},100)};e();const t=()=>{e()};return window.addEventListener("hashchange",t),()=>{window.removeEventListener("hashchange",t)}},[]),l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .luxury-ownership-hero {
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

        .hero-content {
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

        .hero-content h1 {
          font-size: 6rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 12px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .hero-content .subtitle {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4a9eff;
        }

        .hero-content p {
          font-size: 1.4rem;
          line-height: 2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
        }

        .luxury-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 5%;
          background-attachment: fixed;
          scroll-margin-top: 80px;
        }

        /* SERVICE SECTION - Grid with feature cards */
        .service-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .service-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .service-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
        }

        .service-subtitle {
          font-size: 1.4rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          max-width: 800px;
          margin: 0 auto;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .service-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.5s ease;
          position: relative;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #4a9eff 0%, #00d4ff 100%);
          transform: scaleX(0);
          transition: transform 0.5s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 70px rgba(74, 158, 255, 0.2);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .service-icon {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          transition: all 0.5s ease;
        }

        .service-card:hover .service-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.12) 0%, rgba(53, 122, 189, 0.12) 100%);
          font-size: 5.5rem;
        }

        .service-content {
          padding: 2.5rem;
        }

        .service-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .service-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .service-schedule {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(74, 158, 255, 0.2);
          padding: 4rem;
          margin-top: 5rem;
        }

        .service-schedule h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
          text-align: center;
        }

        .schedule-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .schedule-item {
          padding: 2rem;
          background: white;
          border-left: 4px solid #4a9eff;
          transition: all 0.4s ease;
        }

        .schedule-item:hover {
          padding-left: 3rem;
          border-left-width: 6px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .schedule-item strong {
          display: block;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: #333;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .schedule-item span {
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.05rem;
        }

        /* ROADSIDE SECTION - Dark immersive with emergency CTA */
        .roadside-section {
          background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)),
                      url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000') center/cover;
          color: white;
        }

        .roadside-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .roadside-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .roadside-header h2 {
          font-size: 5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
        }

        .roadside-subtitle {
          font-size: 1.4rem;
          opacity: 0.95;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .roadside-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 6rem;
        }

        .roadside-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 3rem;
          transition: all 0.5s ease;
          position: relative;
          overflow: hidden;
        }

        .roadside-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #4a9eff 0%, #00d4ff 100%);
          transform: scaleX(0);
          transition: transform 0.5s ease;
        }

        .roadside-card:hover::after {
          transform: scaleX(1);
        }

        .roadside-card:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(74, 158, 255, 0.3);
        }

        .roadside-icon {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          display: block;
        }

        .roadside-card h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .roadside-card p {
          font-size: 1.15rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          opacity: 0.9;
        }

        .emergency-cta {
          text-align: center;
          padding: 5rem 4rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.15) 0%, rgba(0, 212, 255, 0.15) 100%);
          backdrop-filter: blur(30px);
          border: 2px solid rgba(74, 158, 255, 0.4);
          position: relative;
          overflow: hidden;
        }

        .emergency-cta::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(74, 158, 255, 0.1) 0%, transparent 70%);
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        .emergency-cta h3 {
          font-size: 3rem;
          margin-bottom: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 4px;
          position: relative;
          z-index: 1;
        }

        .emergency-number {
          font-size: 4rem;
          color: #4a9eff;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 4px;
          margin: 2rem 0;
          position: relative;
          z-index: 1;
        }

        .emergency-availability {
          font-size: 1.3rem;
          opacity: 0.95;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          letter-spacing: 2px;
          position: relative;
          z-index: 1;
        }

        /* WARRANTY SECTION - Split with visual accent */
        .warranty-section {
          background: white;
          padding: 0;
          min-height: 100vh;
        }

        .warranty-split {
          display: grid;
          grid-template-columns: 40% 60%;
          min-height: 100vh;
        }

        .warranty-visual {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.9) 0%, rgba(53, 122, 189, 0.9) 100%),
                      url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2000') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          padding: 4rem;
          position: relative;
        }

        .warranty-visual-content {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .warranty-visual h2 {
          font-size: 5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
        }

        .warranty-visual p {
          font-size: 1.4rem;
          line-height: 2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .warranty-content {
          padding: 8rem 6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        .warranty-cards {
          display: grid;
          gap: 2.5rem;
        }

        .warranty-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          padding: 3rem;
          position: relative;
          transition: all 0.4s ease;
        }

        .warranty-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #4a9eff 0%, #00d4ff 100%);
          transform: scaleY(0);
          transition: transform 0.4s ease;
        }

        .warranty-card:hover::before {
          transform: scaleY(1);
        }

        .warranty-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          transform: translateX(10px);
        }

        .warranty-card-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .warranty-card h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .warranty-period {
          display: block;
          font-size: 1.5rem;
          color: #4a9eff;
          margin-bottom: 1rem;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
        }

        .warranty-card p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        /* MEMBERSHIP SECTION - Premium cards layout */
        .membership-section {
          background: linear-gradient(rgba(10,10,15,0.85), rgba(10,10,15,0.9)),
                      url('https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=2000') center/cover;
          color: white;
        }

        .membership-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .membership-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .membership-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
        }

        .membership-subtitle {
          font-size: 1.4rem;
          opacity: 0.95;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .membership-benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .benefit-card {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 3rem 2.5rem;
          text-align: center;
          transition: all 0.5s ease;
          position: relative;
        }

        .benefit-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
        }

        .benefit-card:hover::before {
          opacity: 0.2;
        }

        .benefit-card:hover {
          transform: scale(1.05);
          border-color: rgba(74, 158, 255, 0.5);
          box-shadow: 0 25px 60px rgba(74, 158, 255, 0.3);
        }

        .benefit-icon {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          display: block;
        }

        .benefit-card h3 {
          font-size: 1.9rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .benefit-card p {
          font-size: 1.1rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          opacity: 0.9;
        }

        .charge-card-info {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.12) 0%, rgba(53, 122, 189, 0.12) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(74, 158, 255, 0.3);
          padding: 4rem;
        }

        .charge-card-info h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          text-align: center;
        }

        .charge-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .charge-feature {
          padding: 1.5rem;
          background: rgba(255,255,255,0.05);
          border-left: 3px solid #4a9eff;
          transition: all 0.4s ease;
        }

        .charge-feature:hover {
          padding-left: 2.5rem;
          background: rgba(255,255,255,0.1);
        }

        .charge-feature strong {
          display: block;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .charge-feature span {
          color: rgba(255,255,255,0.85);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.05rem;
        }

        .membership-cta {
          text-align: center;
          font-size: 1.2rem;
          margin-top: 3rem;
        }

        .membership-cta a {
          color: #4a9eff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .membership-cta a:hover {
          color: #6bb0ff;
        }

        /* CHARGING SECTION - Map with interactive elements */
        .charging-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .charging-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .charging-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .charging-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
        }

        .charging-subtitle {
          font-size: 1.4rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .charging-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .charging-option {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          padding: 3rem 2.5rem;
          text-align: center;
          transition: all 0.5s ease;
        }

        .charging-option:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(74, 158, 255, 0.15);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .charging-option-icon {
          font-size: 5rem;
          margin-bottom: 2rem;
          display: block;
          transition: all 0.4s ease;
        }

        .charging-option:hover .charging-option-icon {
          font-size: 5.5rem;
        }

        .charging-option h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .charging-option p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .map-container {
          height: 500px;
          background: rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          margin-bottom: 5rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }

        .charging-specs {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          border: 1px solid rgba(74, 158, 255, 0.2);
          padding: 4rem;
        }

        .charging-specs h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
          text-align: center;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .spec-item {
          padding: 2rem;
          background: white;
          border-left: 4px solid #4a9eff;
          transition: all 0.4s ease;
        }

        .spec-item:hover {
          padding-left: 3rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .spec-item strong {
          display: block;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: #333;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .spec-item span {
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.05rem;
        }

        @media (max-width: 1200px) {
          .service-grid,
          .roadside-cards,
          .membership-benefits,
          .charging-options {
            grid-template-columns: 1fr 1fr;
          }

          .warranty-split {
            grid-template-columns: 1fr;
          }

          .warranty-visual {
            min-height: 50vh;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }

          .service-grid,
          .roadside-cards,
          .membership-benefits,
          .charging-options,
          .charge-features,
          .schedule-list,
          .specs-grid {
            grid-template-columns: 1fr;
          }

          .warranty-content {
            padding: 4rem 2rem;
          }
        }
      `}),l.jsx("div",{className:"luxury-ownership-hero",children:l.jsxs("div",{className:"hero-content",children:[l.jsx("h1",{children:"OWNERSHIP"}),l.jsx("p",{className:"subtitle",children:"Excellence in Every Journey"}),l.jsx("p",{children:"At Evergreen Motors, ownership is more than a transaction—it's a partnership. We're committed to providing exceptional service, support, and peace of mind throughout your entire ownership experience."})]})}),l.jsx("section",{id:"service-maintenance",className:"luxury-section service-section",children:l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{className:"service-header",children:[l.jsx("h2",{children:"Service & Maintenance"}),l.jsx("p",{className:"service-subtitle",children:"Our certified BYD technicians provide expert service to keep your electric vehicle in optimal condition using state-of-the-art diagnostic equipment and genuine parts."})]}),l.jsxs("div",{className:"service-grid",children:[l.jsxs("div",{className:"service-card",children:[l.jsx("div",{className:"service-icon",children:"🔧"}),l.jsxs("div",{className:"service-content",children:[l.jsx("h3",{className:"service-title",children:"Regular Maintenance"}),l.jsx("p",{className:"service-description",children:"Comprehensive scheduled service ensures optimal performance, efficiency, and longevity of your BYD vehicle."})]})]}),l.jsxs("div",{className:"service-card",children:[l.jsx("div",{className:"service-icon",children:"🔋"}),l.jsxs("div",{className:"service-content",children:[l.jsx("h3",{className:"service-title",children:"Battery Service"}),l.jsx("p",{className:"service-description",children:"Expert Blade Battery diagnostics, health assessments, and maintenance for peak efficiency and range."})]})]}),l.jsxs("div",{className:"service-card",children:[l.jsx("div",{className:"service-icon",children:"💻"}),l.jsxs("div",{className:"service-content",children:[l.jsx("h3",{className:"service-title",children:"Software Updates"}),l.jsx("p",{className:"service-description",children:"Latest software and system enhancements delivered seamlessly to improve features and performance."})]})]})]}),l.jsxs("div",{className:"service-schedule",children:[l.jsx("h3",{children:"Recommended Service Schedule"}),l.jsxs("div",{className:"schedule-list",children:[l.jsxs("div",{className:"schedule-item",children:[l.jsx("strong",{children:"First Service"}),l.jsx("span",{children:"10,000 miles or 12 months"})]}),l.jsxs("div",{className:"schedule-item",children:[l.jsx("strong",{children:"Regular Service"}),l.jsx("span",{children:"Every 10,000 miles or 12 months"})]}),l.jsxs("div",{className:"schedule-item",children:[l.jsx("strong",{children:"Battery Health Check"}),l.jsx("span",{children:"Annual assessment included"})]}),l.jsxs("div",{className:"schedule-item",children:[l.jsx("strong",{children:"Software Updates"}),l.jsx("span",{children:"As released by BYD"})]})]})]})]})}),l.jsx("section",{id:"roadside-assistance",className:"luxury-section roadside-section",children:l.jsxs("div",{className:"roadside-container",children:[l.jsxs("div",{className:"roadside-header",children:[l.jsx("h2",{children:"Roadside Assistance"}),l.jsx("p",{className:"roadside-subtitle",children:"Evergreen Motors Roadside Assistance provides comprehensive support 24 hours a day, 7 days a week, ensuring complete peace of mind on every journey."})]}),l.jsxs("div",{className:"roadside-cards",children:[l.jsxs("div",{className:"roadside-card",children:[l.jsx("span",{className:"roadside-icon",children:"🔧"}),l.jsx("h3",{children:"Emergency Repairs"}),l.jsx("p",{children:"On-site minor repairs and expert troubleshooting assistance to get you back on the road quickly and safely."})]}),l.jsxs("div",{className:"roadside-card",children:[l.jsx("span",{className:"roadside-icon",children:"🚗"}),l.jsx("h3",{children:"Towing Service"}),l.jsx("p",{children:"Complimentary towing to the nearest Evergreen Motors service center whenever your vehicle needs professional attention."})]}),l.jsxs("div",{className:"roadside-card",children:[l.jsx("span",{className:"roadside-icon",children:"🔋"}),l.jsx("h3",{children:"Emergency Charging"}),l.jsx("p",{children:"Mobile charging assistance delivered to your location if you unexpectedly run out of power."})]})]}),l.jsxs("div",{className:"emergency-cta",children:[l.jsx("h3",{children:"Emergency Contact"}),l.jsx("div",{className:"emergency-number",children:"1-800-EVERGREEN"}),l.jsx("p",{className:"emergency-availability",children:"Available 24/7/365"})]})]})}),l.jsx("section",{id:"warranty",className:"warranty-section",children:l.jsxs("div",{className:"warranty-split",children:[l.jsx("div",{className:"warranty-visual",children:l.jsxs("div",{className:"warranty-visual-content",children:[l.jsx("h2",{children:"Warranty Coverage"}),l.jsx("p",{children:"Evergreen Motors offers one of the most comprehensive warranty programs in the electric vehicle industry, backed by BYD's commitment to quality and your complete confidence."})]})}),l.jsx("div",{className:"warranty-content",children:l.jsxs("div",{className:"warranty-cards",children:[l.jsxs("div",{className:"warranty-card",children:[l.jsx("span",{className:"warranty-card-icon",children:"🛡️"}),l.jsx("h3",{children:"Vehicle Warranty"}),l.jsx("span",{className:"warranty-period",children:"6 Years / 150,000 Miles"}),l.jsx("p",{children:"Comprehensive coverage for the entire vehicle including all major components, systems, and workmanship."})]}),l.jsxs("div",{className:"warranty-card",children:[l.jsx("span",{className:"warranty-card-icon",children:"🔋"}),l.jsx("h3",{children:"Battery Warranty"}),l.jsx("span",{className:"warranty-period",children:"8 Years / 150,000 Miles"}),l.jsx("p",{children:"Blade Battery coverage with capacity guarantee ensuring long-term performance and reliability."})]}),l.jsxs("div",{className:"warranty-card",children:[l.jsx("span",{className:"warranty-card-icon",children:"⚡"}),l.jsx("h3",{children:"Powertrain Warranty"}),l.jsx("span",{className:"warranty-period",children:"8 Years / 150,000 Miles"}),l.jsx("p",{children:"Electric motor, drivetrain, and power electronics fully covered for your peace of mind."})]})]})})]})}),l.jsx("section",{id:"membership",className:"luxury-section membership-section",children:l.jsxs("div",{className:"membership-container",children:[l.jsxs("div",{className:"membership-header",children:[l.jsx("h2",{children:"Membership & Charge Cards"}),l.jsx("p",{className:"membership-subtitle",children:"Join the Evergreen Motors Membership program and enjoy exclusive benefits, charging discounts, and priority service at all locations."})]}),l.jsxs("div",{className:"membership-benefits",children:[l.jsxs("div",{className:"benefit-card",children:[l.jsx("span",{className:"benefit-icon",children:"⭐"}),l.jsx("h3",{children:"Priority Service"}),l.jsx("p",{children:"Skip the line with priority service appointments and expedited maintenance at all Evergreen Motors locations."})]}),l.jsxs("div",{className:"benefit-card",children:[l.jsx("span",{className:"benefit-icon",children:"🔌"}),l.jsx("h3",{children:"Charging Discounts"}),l.jsx("p",{children:"Save up to 20% on public charging networks nationwide with your exclusive member rate."})]}),l.jsxs("div",{className:"benefit-card",children:[l.jsx("span",{className:"benefit-icon",children:"🎁"}),l.jsx("h3",{children:"Exclusive Perks"}),l.jsx("p",{children:"Access to member-only events, special offers, and early access to new models and features."})]})]}),l.jsxs("div",{className:"charge-card-info",children:[l.jsx("h3",{children:"Evergreen Charge Card Benefits"}),l.jsxs("div",{className:"charge-features",children:[l.jsxs("div",{className:"charge-feature",children:[l.jsx("strong",{children:"Universal Access"}),l.jsx("span",{children:"Use at thousands of charging stations nationwide"})]}),l.jsxs("div",{className:"charge-feature",children:[l.jsx("strong",{children:"Mobile App Integration"}),l.jsx("span",{children:"Find, reserve, and pay for charging seamlessly"})]}),l.jsxs("div",{className:"charge-feature",children:[l.jsx("strong",{children:"Consolidated Billing"}),l.jsx("span",{children:"One monthly statement for all charging sessions"})]}),l.jsxs("div",{className:"charge-feature",children:[l.jsx("strong",{children:"Charging Analytics"}),l.jsx("span",{children:"Track your sessions, costs, and savings"})]})]}),l.jsxs("p",{className:"membership-cta",children:["Learn more: ",l.jsx("a",{href:"mailto:membership@evergreenmotor.com",children:"membership@evergreenmotor.com"})]})]})]})}),l.jsx("section",{id:"charging-locations",className:"luxury-section charging-section",children:l.jsxs("div",{className:"charging-container",children:[l.jsxs("div",{className:"charging-header",children:[l.jsx("h2",{children:"Charging Locations"}),l.jsx("p",{className:"charging-subtitle",children:"Access thousands of charging stations nationwide through our partnerships with major charging networks and find charging wherever you go."})]}),l.jsxs("div",{className:"charging-options",children:[l.jsxs("div",{className:"charging-option",children:[l.jsx("span",{className:"charging-option-icon",children:"⚡"}),l.jsx("h3",{children:"Fast Charging"}),l.jsx("p",{children:"DC fast charging stations for quick top-ups during your journey—perfect for long-distance travel."})]}),l.jsxs("div",{className:"charging-option",children:[l.jsx("span",{className:"charging-option-icon",children:"🏢"}),l.jsx("h3",{children:"Destination Charging"}),l.jsx("p",{children:"Level 2 chargers at hotels, restaurants, shopping centers, and entertainment venues."})]}),l.jsxs("div",{className:"charging-option",children:[l.jsx("span",{className:"charging-option-icon",children:"🏠"}),l.jsx("h3",{children:"Home Charging"}),l.jsx("p",{children:"Professional installation support for home charging solutions with expert guidance."})]})]}),l.jsx("div",{className:"map-container",children:l.jsx("iframe",{title:"Charging Locations Map",width:"100%",height:"100%",frameBorder:"0",style:{border:0},src:"https://www.openstreetmap.org/export/embed.html?bbox=-74.1%2C40.6%2C-73.9%2C40.8&layer=mapnik",allowFullScreen:!0})}),l.jsxs("div",{className:"charging-specs",children:[l.jsx("h3",{children:"Charging Speed Reference"}),l.jsxs("div",{className:"specs-grid",children:[l.jsxs("div",{className:"spec-item",children:[l.jsx("strong",{children:"Level 1 (120V)"}),l.jsx("span",{children:"3-5 miles of range per hour"})]}),l.jsxs("div",{className:"spec-item",children:[l.jsx("strong",{children:"Level 2 (240V)"}),l.jsx("span",{children:"20-30 miles of range per hour"})]}),l.jsxs("div",{className:"spec-item",children:[l.jsx("strong",{children:"DC Fast Charging"}),l.jsx("span",{children:"80% charge in 30-45 minutes"})]}),l.jsxs("div",{className:"spec-item",children:[l.jsx("strong",{children:"Ultra-Fast Charging"}),l.jsx("span",{children:"200+ miles in 15 minutes"})]})]})]})]})})]})),Lm=()=>(k.useEffect(()=>{const e={threshold:.1,rootMargin:"0px 0px -100px 0px"},t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("fade-in-visible")})},e);return document.querySelectorAll(".fade-in-section").forEach(n=>t.observe(n)),()=>t.disconnect()},[]),l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }



        .luxury-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
                      url('https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2000') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          background-attachment: fixed;
        }

        .hero-content {
          z-index: 1;
          max-width: 1000px;
          padding: 2rem;
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

        .hero-content h1 {
          font-size: 6rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 12px;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
        }

        .hero-content .subtitle {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #4a9eff;
        }

        .hero-content p {
          font-size: 1.4rem;
          line-height: 2;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
        }

        .luxury-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 5%;
          background-attachment: fixed;
        }

        .cash-section {
          background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
                      url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2000') center/cover;
          color: white;
        }

        .finance-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        .lease-section {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2000') center/cover;
          color: white;
        }

        .fleet-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .section-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-size: 4.5rem;
          text-align: center;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
        }

        .section-subtitle {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 5rem;
          font-size: 1.4rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          opacity: 0.95;
          line-height: 2;
        }

        .luxury-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin: 4rem 0;
        }

        .luxury-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          overflow: hidden;
          transition: all 0.5s ease;
          cursor: pointer;
        }

        .luxury-card:hover {
          transform: translateY(-15px);
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
          box-shadow: 0 30px 70px rgba(0,0,0,0.5);
        }

        .light-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
        }

        .light-card:hover {
          background: rgba(74, 158, 255, 0.02);
          border-color: rgba(74, 158, 255, 0.3);
          box-shadow: 0 30px 70px rgba(74, 158, 255, 0.15);
        }

        .card-icon {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.3) 0%, rgba(53, 122, 189, 0.3) 100%);
          transition: all 0.5s ease;
        }

        .luxury-card:hover .card-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.5) 0%, rgba(53, 122, 189, 0.5) 100%);
          font-size: 5.5rem;
        }

        .light-card .card-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.08) 0%, rgba(53, 122, 189, 0.08) 100%);
        }

        .light-card:hover .card-icon {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.15) 0%, rgba(53, 122, 189, 0.15) 100%);
        }

        .card-content {
          padding: 3rem 2.5rem;
        }

        .card-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .light-card .card-title {
          color: #333;
        }

        .card-description {
          line-height: 1.9;
          opacity: 0.9;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.1rem;
        }

        .light-card .card-description {
          color: #666;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 4rem 0;
        }

        .benefits-list li {
          padding: 2rem;
          margin-bottom: 2rem;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(20px);
          border-left: 4px solid #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.15rem;
          line-height: 1.8;
          transition: all 0.4s ease;
        }

        .benefits-list li:hover {
          background: rgba(255,255,255,0.12);
          padding-left: 3rem;
          border-left-width: 6px;
        }

        .benefits-list strong {
          display: block;
          font-weight: 600;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .process-box {
          margin-top: 5rem;
          padding: 4rem;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
        }

        .process-box h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          text-align: center;
        }

        .process-box ol {
          padding-left: 2rem;
          line-height: 2.5;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1.15rem;
        }

        .process-box ol li {
          margin-bottom: 1.5rem;
        }

        .contact-cta {
          text-align: center;
          margin-top: 5rem;
          padding: 4rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.12) 0%, rgba(53, 122, 189, 0.12) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(74, 158, 255, 0.3);
        }

        .contact-cta p {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .contact-cta a {
          color: #4a9eff;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          font-size: 1.2rem;
        }

        .contact-cta a:hover {
          color: #6bb0ff;
        }

        @media (max-width: 1200px) {
          .luxury-cards-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }
          
          .section-title {
            font-size: 3rem;
            letter-spacing: 4px;
          }

          .luxury-cards-grid {
            grid-template-columns: 1fr;
          }

          .luxury-section {
            padding: 5rem 5%;
          }
        }
      `}),l.jsx("section",{className:"luxury-hero",children:l.jsxs("div",{className:"hero-content",children:[l.jsx("h1",{children:"PURCHASING"}),l.jsx("p",{className:"subtitle",children:"Your Path to Ownership"}),l.jsx("p",{children:"At Evergreen Motors, we offer flexible purchasing solutions designed for every lifestyle. Whether you prefer cash purchase, financing, leasing, or subscription, we're here to make your journey to electric mobility seamless and rewarding."})]})}),l.jsx("section",{id:"cash-purchases",className:"luxury-section cash-section fade-in-section",children:l.jsxs("div",{className:"section-content",children:[l.jsx("h2",{className:"section-title",children:"Cash Purchases"}),l.jsx("p",{className:"section-subtitle",children:"Simple, straightforward vehicle ownership with immediate benefits and complete freedom"}),l.jsxs("ul",{className:"benefits-list",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"No Interest Payments"}),"Own your vehicle outright without financing charges or monthly obligations"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Immediate Ownership"}),"Full ownership from day one with complete control and no restrictions"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Simplified Process"}),"Faster purchase process with minimal paperwork and no credit checks"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Better Pricing"}),"Potential for enhanced negotiating power and exclusive cash purchase incentives"]})]}),l.jsxs("div",{className:"process-box",children:[l.jsx("h3",{children:"Simple Purchase Process"}),l.jsxs("ol",{children:[l.jsx("li",{children:"Select your preferred BYD model from our showroom"}),l.jsx("li",{children:"Discuss pricing and available incentives with our sales team"}),l.jsx("li",{children:"Complete the purchase agreement and documentation"}),l.jsx("li",{children:"Arrange payment via bank transfer or certified check"}),l.jsx("li",{children:"Complete registration and drive away in your new BYD"})]})]}),l.jsxs("div",{className:"contact-cta",children:[l.jsx("p",{children:"Ready to purchase your BYD?"}),l.jsxs("p",{children:[l.jsx("a",{href:"mailto:sales@evergreenmotor.com",children:"sales@evergreenmotor.com"})," | ",l.jsx("a",{href:"tel:+1234567890",children:"+1 (234) 567-890"})]})]})]})}),l.jsx("section",{className:"luxury-section finance-section fade-in-section",children:l.jsxs("div",{className:"section-content",children:[l.jsx("h2",{className:"section-title",style:{color:"#333"},children:"Financing Options"}),l.jsx("p",{className:"section-subtitle",style:{color:"#666"},children:"Partner with leading financial institutions for competitive rates and flexible terms tailored to your budget and lifestyle"}),l.jsxs("div",{className:"luxury-cards-grid",children:[l.jsxs("div",{className:"luxury-card light-card",children:[l.jsx("div",{className:"card-icon",children:"💰"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"Bank Financing"}),l.jsx("p",{className:"card-description",children:"Access preferential interest rates through our partner banks with flexible terms from 24 to 84 months and competitive APR"})]})]}),l.jsxs("div",{className:"luxury-card light-card",children:[l.jsx("div",{className:"card-icon",children:"🏪"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"Dealer Financing"}),l.jsx("p",{className:"card-description",children:"Convenient in-house financing with competitive rates, special promotions, and personalized service from our finance team"})]})]}),l.jsxs("div",{className:"luxury-card light-card",children:[l.jsx("div",{className:"card-icon",children:"✅"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"Quick Approval"}),l.jsx("p",{className:"card-description",children:"Fast pre-approval process, often within 24 hours, to get you driving your new BYD sooner with minimal hassle"})]})]})]}),l.jsxs("div",{className:"process-box",style:{background:"rgba(74, 158, 255, 0.05)",border:"1px solid rgba(74, 158, 255, 0.2)"},children:[l.jsx("h3",{style:{color:"#4a9eff"},children:"Financing Process"}),l.jsxs("ol",{style:{color:"#333"},children:[l.jsx("li",{children:"Submit financing application to partner bank or dealer"}),l.jsx("li",{children:"Receive pre-approval and competitive rate quote within 24 hours"}),l.jsx("li",{children:"Select your BYD vehicle with your approved budget"}),l.jsx("li",{children:"Finalize loan terms and complete all documentation"}),l.jsx("li",{children:"Take delivery of your new electric vehicle"})]})]}),l.jsxs("div",{className:"contact-cta",style:{background:"rgba(74, 158, 255, 0.05)",border:"1px solid rgba(74, 158, 255, 0.2)"},children:[l.jsx("p",{style:{color:"#333"},children:"For financing information, contact:"}),l.jsx("p",{children:l.jsx("a",{href:"mailto:finance@evergreenmotor.com",children:"finance@evergreenmotor.com"})})]})]})}),l.jsx("section",{className:"luxury-section lease-section fade-in-section",children:l.jsxs("div",{className:"section-content",children:[l.jsx("h2",{className:"section-title",children:"Leasing Options"}),l.jsx("p",{className:"section-subtitle",children:"Drive the latest BYD technology with flexible lease terms and enjoy hassle-free ownership with lower monthly payments"}),l.jsxs("ul",{className:"benefits-list",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Lower Monthly Payments"}),"Pay significantly less per month compared to traditional financing options"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Latest Technology"}),"Upgrade to newer models every few years and always drive the newest features"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Warranty Coverage"}),"Most leases are fully covered by manufacturer warranty for peace of mind"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Tax Benefits"}),"Potential business tax deductions for qualified business use"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Flexibility"}),"Simple return process at lease end or option to purchase your vehicle"]})]}),l.jsxs("div",{className:"luxury-cards-grid",children:[l.jsxs("div",{className:"luxury-card",children:[l.jsx("div",{className:"card-icon",children:"24"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"24-Month Lease"}),l.jsx("p",{className:"card-description",children:"Short-term flexibility perfect for those who want the latest models and newest technology every two years"})]})]}),l.jsxs("div",{className:"luxury-card",children:[l.jsx("div",{className:"card-icon",children:"36"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"36-Month Lease"}),l.jsx("p",{className:"card-description",children:"Most popular option with balanced payments and optimal term length for the perfect ownership experience"})]})]}),l.jsxs("div",{className:"luxury-card",children:[l.jsx("div",{className:"card-icon",children:"48"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"48-Month Lease"}),l.jsx("p",{className:"card-description",children:"Lowest monthly payments with extended term for maximum affordability and long-term budget planning"})]})]})]}),l.jsxs("div",{className:"contact-cta",children:[l.jsx("p",{children:"Contact us for personalized lease quotes:"}),l.jsx("p",{children:l.jsx("a",{href:"mailto:lease@evergreenmotor.com",children:"lease@evergreenmotor.com"})})]})]})}),l.jsx("section",{className:"luxury-section fleet-section fade-in-section",children:l.jsxs("div",{className:"section-content",children:[l.jsx("h2",{className:"section-title",style:{color:"#333"},children:"Fleet & Business Solutions"}),l.jsx("p",{className:"section-subtitle",style:{color:"#666"},children:"Transform your business fleet with BYD electric vehicles and dramatically reduce operational costs while meeting sustainability goals"}),l.jsxs("div",{className:"luxury-cards-grid",children:[l.jsxs("div",{className:"luxury-card light-card",children:[l.jsx("div",{className:"card-icon",children:"💼"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"Corporate Fleets"}),l.jsx("p",{className:"card-description",children:"Volume pricing and dedicated fleet management support for your organization with customized solutions"})]})]}),l.jsxs("div",{className:"luxury-card light-card",children:[l.jsx("div",{className:"card-icon",children:"🚚"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"Commercial Vehicles"}),l.jsx("p",{className:"card-description",children:"Electric vans and trucks perfect for delivery and logistics operations with lower operating costs"})]})]}),l.jsxs("div",{className:"luxury-card light-card",children:[l.jsx("div",{className:"card-icon",children:"🏢"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"Government Solutions"}),l.jsx("p",{className:"card-description",children:"Special programs designed specifically for government and municipal fleets with competitive pricing"})]})]})]}),l.jsxs("ul",{className:"benefits-list",style:{background:"rgba(74, 158, 255, 0.05)",border:"1px solid rgba(74, 158, 255, 0.2)"},children:[l.jsxs("li",{style:{color:"#333"},children:[l.jsx("strong",{style:{color:"#4a9eff"},children:"Lower Operating Costs"}),"Reduced fuel and maintenance expenses with up to 70% savings on operating costs"]}),l.jsxs("li",{style:{color:"#333"},children:[l.jsx("strong",{style:{color:"#4a9eff"},children:"Tax Incentives"}),"Federal and state EV tax credits can significantly reduce acquisition costs"]}),l.jsxs("li",{style:{color:"#333"},children:[l.jsx("strong",{style:{color:"#4a9eff"},children:"Sustainability Goals"}),"Meet corporate environmental targets and reduce your carbon footprint"]}),l.jsxs("li",{style:{color:"#333"},children:[l.jsx("strong",{style:{color:"#4a9eff"},children:"Fleet Management"}),"Comprehensive fleet management services and dedicated support team"]})]}),l.jsxs("div",{className:"contact-cta",style:{background:"rgba(74, 158, 255, 0.05)",border:"1px solid rgba(74, 158, 255, 0.2)"},children:[l.jsx("p",{style:{color:"#333"},children:"Contact our fleet specialists:"}),l.jsx("p",{children:l.jsx("a",{href:"mailto:fleet@evergreenmotor.com",children:"fleet@evergreenmotor.com"})})]})]})})]})),Rm=()=>{const{pathname:e,hash:t}=dr();return k.useEffect(()=>{t?setTimeout(()=>{const n=document.querySelector(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},100):window.scrollTo(0,0)},[e,t]),null},Om=()=>l.jsxs(wm,{children:[l.jsx(Rm,{}),l.jsxs("div",{className:"App",children:[l.jsx(Nm,{}),l.jsxs(pm,{children:[l.jsx($e,{path:"/",element:l.jsx(Cm,{})}),l.jsx($e,{path:"/models",element:l.jsx(Em,{})}),l.jsx($e,{path:"/models/:modelId",element:l.jsx(zm,{})}),l.jsx($e,{path:"/technology",element:l.jsx(Pm,{})}),l.jsx($e,{path:"/about",element:l.jsx(Mm,{})}),l.jsx($e,{path:"/contact",element:l.jsx(_m,{})}),l.jsx($e,{path:"/ownership",element:l.jsx(Tm,{})}),l.jsx($e,{path:"/purchasing",element:l.jsx(Lm,{})})]}),l.jsx(bm,{})]})]}),Dm=ao.createRoot(document.getElementById("root"));Dm.render(l.jsx(zs.StrictMode,{children:l.jsx(Om,{})}));
