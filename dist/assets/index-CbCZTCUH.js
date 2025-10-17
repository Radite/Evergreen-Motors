function Wu(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Vu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vs={exports:{}},pi={},ys={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),Hu=Symbol.for("react.portal"),Yu=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),Qu=Symbol.for("react.profiler"),Ku=Symbol.for("react.provider"),Xu=Symbol.for("react.context"),qu=Symbol.for("react.forward_ref"),Ju=Symbol.for("react.suspense"),Zu=Symbol.for("react.memo"),ed=Symbol.for("react.lazy"),ea=Symbol.iterator;function td(e){return e===null||typeof e!="object"?null:(e=ea&&e[ea]||e["@@iterator"],typeof e=="function"?e:null)}var xs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ws=Object.assign,js={};function fn(e,t,n){this.props=e,this.context=t,this.refs=js,this.updater=n||xs}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ks(){}ks.prototype=fn.prototype;function rl(e,t,n){this.props=e,this.context=t,this.refs=js,this.updater=n||xs}var il=rl.prototype=new ks;il.constructor=rl;ws(il,fn.prototype);il.isPureReactComponent=!0;var ta=Array.isArray,Ss=Object.prototype.hasOwnProperty,ol={current:null},Ns={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ss.call(t,r)&&!Ns.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ir,type:e,key:o,ref:a,props:i,_owner:ol.current}}function nd(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ll(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function rd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var na=/\/+/g;function Li(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rd(""+e.key):t.toString(36)}function Mr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ir:case Hu:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Li(a,0):r,ta(i)?(n="",e!=null&&(n=e.replace(na,"$&/")+"/"),Mr(i,t,n,"",function(u){return u})):i!=null&&(ll(i)&&(i=nd(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(na,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ta(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+Li(o,s);a+=Mr(o,t,n,c,i)}else if(c=td(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+Li(o,s++),a+=Mr(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function pr(e,t,n){if(e==null)return e;var r=[],i=0;return Mr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function id(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},_r={transition:null},od={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:_r,ReactCurrentOwner:ol};function Cs(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!ll(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=fn;T.Fragment=Yu;T.Profiler=Qu;T.PureComponent=rl;T.StrictMode=Gu;T.Suspense=Ju;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=od;T.act=Cs;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ws({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ol.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Ss.call(t,c)&&!Ns.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ir,type:e.type,key:i,ref:o,props:r,_owner:a}};T.createContext=function(e){return e={$$typeof:Xu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ku,_context:e},e.Consumer=e};T.createElement=bs;T.createFactory=function(e){var t=bs.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:qu,render:e}};T.isValidElement=ll;T.lazy=function(e){return{$$typeof:ed,_payload:{_status:-1,_result:e},_init:id}};T.memo=function(e,t){return{$$typeof:Zu,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=_r.transition;_r.transition={};try{e()}finally{_r.transition=t}};T.unstable_act=Cs;T.useCallback=function(e,t){return ue.current.useCallback(e,t)};T.useContext=function(e){return ue.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};T.useEffect=function(e,t){return ue.current.useEffect(e,t)};T.useId=function(){return ue.current.useId()};T.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ue.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};T.useRef=function(e){return ue.current.useRef(e)};T.useState=function(e){return ue.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ue.current.useTransition()};T.version="18.3.1";ys.exports=T;var k=ys.exports;const Es=Vu(k),ld=Wu({__proto__:null,default:Es},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=k,sd=Symbol.for("react.element"),cd=Symbol.for("react.fragment"),ud=Object.prototype.hasOwnProperty,dd=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fd={key:!0,ref:!0,__self:!0,__source:!0};function zs(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)ud.call(t,r)&&!fd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:sd,type:e,key:o,ref:a,props:i,_owner:dd.current}}pi.Fragment=cd;pi.jsx=zs;pi.jsxs=zs;vs.exports=pi;var l=vs.exports,lo={},Ps={exports:{}},je={},Ms={exports:{}},_s={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,M){var _=C.length;C.push(M);e:for(;0<_;){var Y=_-1>>>1,J=C[Y];if(0<i(J,M))C[Y]=M,C[_]=J,_=Y;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var M=C[0],_=C.pop();if(_!==M){C[0]=_;e:for(var Y=0,J=C.length,dr=J>>>1;Y<dr;){var kt=2*(Y+1)-1,Ti=C[kt],St=kt+1,fr=C[St];if(0>i(Ti,_))St<J&&0>i(fr,Ti)?(C[Y]=fr,C[St]=_,Y=St):(C[Y]=Ti,C[kt]=_,Y=kt);else if(St<J&&0>i(fr,_))C[Y]=fr,C[St]=_,Y=St;else break e}}return M}function i(C,M){var _=C.sortIndex-M.sortIndex;return _!==0?_:C.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],u=[],h=1,m=null,g=3,y=!1,x=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=C)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function v(C){if(w=!1,p(C),!x)if(n(c)!==null)x=!0,Mi(S);else{var M=n(u);M!==null&&_i(v,M.startTime-C)}}function S(C,M){x=!1,w&&(w=!1,f(P),P=-1),y=!0;var _=g;try{for(p(M),m=n(c);m!==null&&(!(m.expirationTime>M)||C&&!Pe());){var Y=m.callback;if(typeof Y=="function"){m.callback=null,g=m.priorityLevel;var J=Y(m.expirationTime<=M);M=e.unstable_now(),typeof J=="function"?m.callback=J:m===n(c)&&r(c),p(M)}else r(c);m=n(c)}if(m!==null)var dr=!0;else{var kt=n(u);kt!==null&&_i(v,kt.startTime-M),dr=!1}return dr}finally{m=null,g=_,y=!1}}var E=!1,z=null,P=-1,H=5,L=-1;function Pe(){return!(e.unstable_now()-L<H)}function gn(){if(z!==null){var C=e.unstable_now();L=C;var M=!0;try{M=z(!0,C)}finally{M?vn():(E=!1,z=null)}}else E=!1}var vn;if(typeof d=="function")vn=function(){d(gn)};else if(typeof MessageChannel<"u"){var Zl=new MessageChannel,$u=Zl.port2;Zl.port1.onmessage=gn,vn=function(){$u.postMessage(null)}}else vn=function(){N(gn,0)};function Mi(C){z=C,E||(E=!0,vn())}function _i(C,M){P=N(function(){C(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Mi(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var _=g;g=M;try{return C()}finally{g=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,M){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var _=g;g=C;try{return M()}finally{g=_}},e.unstable_scheduleCallback=function(C,M,_){var Y=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?Y+_:Y):_=Y,C){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=_+J,C={id:h++,callback:M,priorityLevel:C,startTime:_,expirationTime:J,sortIndex:-1},_>Y?(C.sortIndex=_,t(u,C),n(c)===null&&C===n(u)&&(w?(f(P),P=-1):w=!0,_i(v,_-Y))):(C.sortIndex=J,t(c,C),x||y||(x=!0,Mi(S))),C},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(C){var M=g;return function(){var _=g;g=M;try{return C.apply(this,arguments)}finally{g=_}}}})(_s);Ms.exports=_s;var pd=Ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md=k,we=pd;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ts=new Set,Bn={};function Dt(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Ts.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ao=Object.prototype.hasOwnProperty,hd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra={},ia={};function gd(e){return ao.call(ia,e)?!0:ao.call(ra,e)?!1:hd.test(e)?ia[e]=!0:(ra[e]=!0,!1)}function vd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yd(e,t,n,r){if(t===null||typeof t>"u"||vd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var al=/[\-:]([a-z])/g;function sl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(al,sl);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(al,sl);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(al,sl);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function cl(e,t,n,r){var i=re.hasOwnProperty(t)?re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yd(t,n,i,r)&&(n=null),r||i===null?gd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),ul=Symbol.for("react.strict_mode"),so=Symbol.for("react.profiler"),Ls=Symbol.for("react.provider"),Rs=Symbol.for("react.context"),dl=Symbol.for("react.forward_ref"),co=Symbol.for("react.suspense"),uo=Symbol.for("react.suspense_list"),fl=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Os=Symbol.for("react.offscreen"),oa=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=oa&&e[oa]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ri;function Cn(e){if(Ri===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ri=t&&t[1]||""}return`
`+Ri+e}var Oi=!1;function Di(e,t){if(!e||Oi)return"";Oi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{Oi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cn(e):""}function xd(e){switch(e.tag){case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 2:case 15:return e=Di(e.type,!1),e;case 11:return e=Di(e.type.render,!1),e;case 1:return e=Di(e.type,!0),e;default:return""}}function fo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case At:return"Fragment";case Ut:return"Portal";case so:return"Profiler";case ul:return"StrictMode";case co:return"Suspense";case uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rs:return(e.displayName||"Context")+".Consumer";case Ls:return(e._context.displayName||"Context")+".Provider";case dl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fl:return t=e.displayName||null,t!==null?t:fo(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return fo(e(t))}catch{}}return null}function wd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fo(t);case 8:return t===ul?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ds(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jd(e){var t=Ds(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=jd(e))}function Is(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ds(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function po(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function la(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fs(e,t){t=t.checked,t!=null&&cl(e,"checked",t,!1)}function mo(e,t){Fs(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ho(e,t.type,n):t.hasOwnProperty("defaultValue")&&ho(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function aa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ho(e,t,n){(t!=="number"||$r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(En(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function Bs(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Us(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Us(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,As=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){kd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function $s(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function Ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$s(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Sd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yo(e,t){if(t){if(Sd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function xo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wo=null;function pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jo=null,Zt=null,en=null;function ua(e){if(e=ar(e)){if(typeof jo!="function")throw Error(j(280));var t=e.stateNode;t&&(t=yi(t),jo(e.stateNode,e.type,t))}}function Vs(e){Zt?en?en.push(e):en=[e]:Zt=e}function Hs(){if(Zt){var e=Zt,t=en;if(en=Zt=null,ua(e),t)for(e=0;e<t.length;e++)ua(t[e])}}function Ys(e,t){return e(t)}function Gs(){}var Ii=!1;function Qs(e,t,n){if(Ii)return e(t,n);Ii=!0;try{return Ys(e,t,n)}finally{Ii=!1,(Zt!==null||en!==null)&&(Gs(),Hs())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=yi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var ko=!1;if(Qe)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){ko=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{ko=!1}function Nd(e,t,n,r,i,o,a,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var _n=!1,Wr=null,Vr=!1,So=null,bd={onError:function(e){_n=!0,Wr=e}};function Cd(e,t,n,r,i,o,a,s,c){_n=!1,Wr=null,Nd.apply(bd,arguments)}function Ed(e,t,n,r,i,o,a,s,c){if(Cd.apply(this,arguments),_n){if(_n){var u=Wr;_n=!1,Wr=null}else throw Error(j(198));Vr||(Vr=!0,So=u)}}function It(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ks(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function da(e){if(It(e)!==e)throw Error(j(188))}function zd(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return da(i),e;if(o===r)return da(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Xs(e){return e=zd(e),e!==null?qs(e):null}function qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qs(e);if(t!==null)return t;e=e.sibling}return null}var Js=we.unstable_scheduleCallback,fa=we.unstable_cancelCallback,Pd=we.unstable_shouldYield,Md=we.unstable_requestPaint,G=we.unstable_now,_d=we.unstable_getCurrentPriorityLevel,ml=we.unstable_ImmediatePriority,Zs=we.unstable_UserBlockingPriority,Hr=we.unstable_NormalPriority,Td=we.unstable_LowPriority,ec=we.unstable_IdlePriority,mi=null,Ue=null;function Ld(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(mi,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:Dd,Rd=Math.log,Od=Math.LN2;function Dd(e){return e>>>=0,e===0?32:31-(Rd(e)/Od|0)|0}var vr=64,yr=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=zn(s):(o&=a,o!==0&&(r=zn(o)))}else a=n&~i,a!==0?r=zn(a):o!==0&&(r=zn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),i=1<<n,r|=e[n],t&=~i;return r}function Id(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Re(o),s=1<<a,c=i[a];c===-1?(!(s&n)||s&r)&&(i[a]=Id(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function No(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tc(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Fi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function Bd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Re(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function hl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function nc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rc,gl,ic,oc,lc,bo=!1,xr=[],at=null,st=null,ct=null,$n=new Map,Wn=new Map,nt=[],Ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pa(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function wn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ar(t),t!==null&&gl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ad(e,t,n,r,i){switch(t){case"focusin":return at=wn(at,e,t,n,r,i),!0;case"dragenter":return st=wn(st,e,t,n,r,i),!0;case"mouseover":return ct=wn(ct,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return $n.set(o,wn($n.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wn.set(o,wn(Wn.get(o)||null,e,t,n,r,i)),!0}return!1}function ac(e){var t=Ct(e.target);if(t!==null){var n=It(t);if(n!==null){if(t=n.tag,t===13){if(t=Ks(n),t!==null){e.blockedOn=t,lc(e.priority,function(){ic(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wo=r,n.target.dispatchEvent(r),wo=null}else return t=ar(n),t!==null&&gl(t),e.blockedOn=n,!1;t.shift()}return!0}function ma(e,t,n){Tr(e)&&n.delete(t)}function $d(){bo=!1,at!==null&&Tr(at)&&(at=null),st!==null&&Tr(st)&&(st=null),ct!==null&&Tr(ct)&&(ct=null),$n.forEach(ma),Wn.forEach(ma)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,bo||(bo=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,$d)))}function Vn(e){function t(i){return jn(i,e)}if(0<xr.length){jn(xr[0],e);for(var n=1;n<xr.length;n++){var r=xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&jn(at,e),st!==null&&jn(st,e),ct!==null&&jn(ct,e),$n.forEach(t),Wn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)ac(n),n.blockedOn===null&&nt.shift()}var tn=Je.ReactCurrentBatchConfig,Gr=!0;function Wd(e,t,n,r){var i=D,o=tn.transition;tn.transition=null;try{D=1,vl(e,t,n,r)}finally{D=i,tn.transition=o}}function Vd(e,t,n,r){var i=D,o=tn.transition;tn.transition=null;try{D=4,vl(e,t,n,r)}finally{D=i,tn.transition=o}}function vl(e,t,n,r){if(Gr){var i=Co(e,t,n,r);if(i===null)Qi(e,t,r,Qr,n),pa(e,r);else if(Ad(i,e,t,n,r))r.stopPropagation();else if(pa(e,r),t&4&&-1<Ud.indexOf(e)){for(;i!==null;){var o=ar(i);if(o!==null&&rc(o),o=Co(e,t,n,r),o===null&&Qi(e,t,r,Qr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Qi(e,t,r,null,n)}}var Qr=null;function Co(e,t,n,r){if(Qr=null,e=pl(r),e=Ct(e),e!==null)if(t=It(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ks(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qr=e,null}function sc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_d()){case ml:return 1;case Zs:return 4;case Hr:case Td:return 16;case ec:return 536870912;default:return 16}default:return 16}}var it=null,yl=null,Lr=null;function cc(){if(Lr)return Lr;var e,t=yl,n=t.length,r,i="value"in it?it.value:it.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Lr=i.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function ha(){return!1}function ke(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wr:ha,this.isPropagationStopped=ha,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=ke(pn),lr=W({},pn,{view:0,detail:0}),Hd=ke(lr),Bi,Ui,kn,hi=W({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Bi=e.screenX-kn.screenX,Ui=e.screenY-kn.screenY):Ui=Bi=0,kn=e),Bi)},movementY:function(e){return"movementY"in e?e.movementY:Ui}}),ga=ke(hi),Yd=W({},hi,{dataTransfer:0}),Gd=ke(Yd),Qd=W({},lr,{relatedTarget:0}),Ai=ke(Qd),Kd=W({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=ke(Kd),qd=W({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=ke(qd),Zd=W({},pn,{data:0}),va=ke(Zd),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nf[e])?!!t[e]:!1}function wl(){return rf}var of=W({},lr,{key:function(e){if(e.key){var t=ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lf=ke(of),af=W({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=ke(af),sf=W({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),cf=ke(sf),uf=W({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),df=ke(uf),ff=W({},hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=ke(ff),mf=[9,13,27,32],jl=Qe&&"CompositionEvent"in window,Tn=null;Qe&&"documentMode"in document&&(Tn=document.documentMode);var hf=Qe&&"TextEvent"in window&&!Tn,uc=Qe&&(!jl||Tn&&8<Tn&&11>=Tn),xa=" ",wa=!1;function dc(e,t){switch(e){case"keyup":return mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function gf(e,t){switch(e){case"compositionend":return fc(t);case"keypress":return t.which!==32?null:(wa=!0,xa);case"textInput":return e=t.data,e===xa&&wa?null:e;default:return null}}function vf(e,t){if($t)return e==="compositionend"||!jl&&dc(e,t)?(e=cc(),Lr=yl=it=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uc&&t.locale!=="ko"?null:t.data;default:return null}}var yf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yf[e.type]:t==="textarea"}function pc(e,t,n,r){Vs(r),t=Kr(t,"onChange"),0<t.length&&(n=new xl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,Hn=null;function xf(e){Nc(e,0)}function gi(e){var t=Ht(e);if(Is(t))return e}function wf(e,t){if(e==="change")return t}var mc=!1;if(Qe){var $i;if(Qe){var Wi="oninput"in document;if(!Wi){var ka=document.createElement("div");ka.setAttribute("oninput","return;"),Wi=typeof ka.oninput=="function"}$i=Wi}else $i=!1;mc=$i&&(!document.documentMode||9<document.documentMode)}function Sa(){Ln&&(Ln.detachEvent("onpropertychange",hc),Hn=Ln=null)}function hc(e){if(e.propertyName==="value"&&gi(Hn)){var t=[];pc(t,Hn,e,pl(e)),Qs(xf,t)}}function jf(e,t,n){e==="focusin"?(Sa(),Ln=t,Hn=n,Ln.attachEvent("onpropertychange",hc)):e==="focusout"&&Sa()}function kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(Hn)}function Sf(e,t){if(e==="click")return gi(t)}function Nf(e,t){if(e==="input"||e==="change")return gi(t)}function bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:bf;function Yn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ao.call(t,i)||!De(e[i],t[i]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ba(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vc(){for(var e=window,t=$r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$r(e.document)}return t}function kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cf(e){var t=vc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gc(n.ownerDocument.documentElement,n)){if(r!==null&&kl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ba(n,o);var a=ba(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ef=Qe&&"documentMode"in document&&11>=document.documentMode,Wt=null,Eo=null,Rn=null,zo=!1;function Ca(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zo||Wt==null||Wt!==$r(r)||(r=Wt,"selectionStart"in r&&kl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&Yn(Rn,r)||(Rn=r,r=Kr(Eo,"onSelect"),0<r.length&&(t=new xl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Vi={},yc={};Qe&&(yc=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function vi(e){if(Vi[e])return Vi[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yc)return Vi[e]=t[n];return e}var xc=vi("animationend"),wc=vi("animationiteration"),jc=vi("animationstart"),kc=vi("transitionend"),Sc=new Map,Ea="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){Sc.set(e,t),Dt(t,[e])}for(var Hi=0;Hi<Ea.length;Hi++){var Yi=Ea[Hi],zf=Yi.toLowerCase(),Pf=Yi[0].toUpperCase()+Yi.slice(1);yt(zf,"on"+Pf)}yt(xc,"onAnimationEnd");yt(wc,"onAnimationIteration");yt(jc,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(kc,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ed(r,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;za(i,s,u),o=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,u=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;za(i,s,u),o=c}}}if(Vr)throw e=So,Vr=!1,So=null,e}function F(e,t){var n=t[Lo];n===void 0&&(n=t[Lo]=new Set);var r=e+"__bubble";n.has(r)||(bc(t,e,2,!1),n.add(r))}function Gi(e,t,n){var r=0;t&&(r|=4),bc(n,e,r,t)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[kr]){e[kr]=!0,Ts.forEach(function(n){n!=="selectionchange"&&(Mf.has(n)||Gi(n,!1,e),Gi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kr]||(t[kr]=!0,Gi("selectionchange",!1,t))}}function bc(e,t,n,r){switch(sc(t)){case 1:var i=Wd;break;case 4:i=Vd;break;default:i=vl}n=i.bind(null,t,n,e),i=void 0,!ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Qi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Ct(s),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Qs(function(){var u=o,h=pl(n),m=[];e:{var g=Sc.get(e);if(g!==void 0){var y=xl,x=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":y=lf;break;case"focusin":x="focus",y=Ai;break;case"focusout":x="blur",y=Ai;break;case"beforeblur":case"afterblur":y=Ai;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=cf;break;case xc:case wc:case jc:y=Xd;break;case kc:y=df;break;case"scroll":y=Hd;break;case"wheel":y=pf;break;case"copy":case"cut":case"paste":y=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ya}var w=(t&4)!==0,N=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=An(d,f),v!=null&&w.push(Qn(d,v,p)))),N)break;d=d.return}0<w.length&&(g=new y(g,x,null,n,h),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==wo&&(x=n.relatedTarget||n.fromElement)&&(Ct(x)||x[Ke]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?Ct(x):null,x!==null&&(N=It(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(w=ga,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ya,v="onPointerLeave",f="onPointerEnter",d="pointer"),N=y==null?g:Ht(y),p=x==null?g:Ht(x),g=new w(v,d+"leave",y,n,h),g.target=N,g.relatedTarget=p,v=null,Ct(h)===u&&(w=new w(f,d+"enter",x,n,h),w.target=p,w.relatedTarget=N,v=w),N=v,y&&x)t:{for(w=y,f=x,d=0,p=w;p;p=Bt(p))d++;for(p=0,v=f;v;v=Bt(v))p++;for(;0<d-p;)w=Bt(w),d--;for(;0<p-d;)f=Bt(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Bt(w),f=Bt(f)}w=null}else w=null;y!==null&&Pa(m,g,y,w,!1),x!==null&&N!==null&&Pa(m,N,x,w,!0)}}e:{if(g=u?Ht(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=wf;else if(ja(g))if(mc)S=Nf;else{S=kf;var E=jf}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Sf);if(S&&(S=S(e,u))){pc(m,S,n,h);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&ho(g,"number",g.value)}switch(E=u?Ht(u):window,e){case"focusin":(ja(E)||E.contentEditable==="true")&&(Wt=E,Eo=u,Rn=null);break;case"focusout":Rn=Eo=Wt=null;break;case"mousedown":zo=!0;break;case"contextmenu":case"mouseup":case"dragend":zo=!1,Ca(m,n,h);break;case"selectionchange":if(Ef)break;case"keydown":case"keyup":Ca(m,n,h)}var z;if(jl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $t?dc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(uc&&n.locale!=="ko"&&($t||P!=="onCompositionStart"?P==="onCompositionEnd"&&$t&&(z=cc()):(it=h,yl="value"in it?it.value:it.textContent,$t=!0)),E=Kr(u,P),0<E.length&&(P=new va(P,e,null,n,h),m.push({event:P,listeners:E}),z?P.data=z:(z=fc(n),z!==null&&(P.data=z)))),(z=hf?gf(e,n):vf(e,n))&&(u=Kr(u,"onBeforeInput"),0<u.length&&(h=new va("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:u}),h.data=z))}Nc(m,t)})}function Qn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=An(e,n),o!=null&&r.unshift(Qn(e,o,i)),o=An(e,t),o!=null&&r.push(Qn(e,o,i))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pa(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,i?(c=An(n,o),c!=null&&a.unshift(Qn(n,c,s))):i||(c=An(n,o),c!=null&&a.push(Qn(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var _f=/\r\n?/g,Tf=/\u0000|\uFFFD/g;function Ma(e){return(typeof e=="string"?e:""+e).replace(_f,`
`).replace(Tf,"")}function Sr(e,t,n){if(t=Ma(t),Ma(e)!==t&&n)throw Error(j(425))}function Xr(){}var Po=null,Mo=null;function _o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,Lf=typeof clearTimeout=="function"?clearTimeout:void 0,_a=typeof Promise=="function"?Promise:void 0,Rf=typeof queueMicrotask=="function"?queueMicrotask:typeof _a<"u"?function(e){return _a.resolve(null).then(e).catch(Of)}:To;function Of(e){setTimeout(function(){throw e})}function Ki(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ta(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),Be="__reactFiber$"+mn,Kn="__reactProps$"+mn,Ke="__reactContainer$"+mn,Lo="__reactEvents$"+mn,Df="__reactListeners$"+mn,If="__reactHandles$"+mn;function Ct(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ta(e);e!==null;){if(n=e[Be])return n;e=Ta(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Be]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function yi(e){return e[Kn]||null}var Ro=[],Yt=-1;function xt(e){return{current:e}}function B(e){0>Yt||(e.current=Ro[Yt],Ro[Yt]=null,Yt--)}function I(e,t){Yt++,Ro[Yt]=e.current,e.current=t}var vt={},ae=xt(vt),me=xt(!1),_t=vt;function ln(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function he(e){return e=e.childContextTypes,e!=null}function qr(){B(me),B(ae)}function La(e,t,n){if(ae.current!==vt)throw Error(j(168));I(ae,t),I(me,n)}function Cc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,wd(e)||"Unknown",i));return W({},n,r)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,_t=ae.current,I(ae,e),I(me,me.current),!0}function Ra(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Cc(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,B(me),B(ae),I(ae,e)):B(me),I(me,n)}var Ve=null,xi=!1,Xi=!1;function Ec(e){Ve===null?Ve=[e]:Ve.push(e)}function Ff(e){xi=!0,Ec(e)}function wt(){if(!Xi&&Ve!==null){Xi=!0;var e=0,t=D;try{var n=Ve;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,xi=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),Js(ml,wt),i}finally{D=t,Xi=!1}}return null}var Gt=[],Qt=0,Zr=null,ei=0,Se=[],Ne=0,Tt=null,He=1,Ye="";function Nt(e,t){Gt[Qt++]=ei,Gt[Qt++]=Zr,Zr=e,ei=t}function zc(e,t,n){Se[Ne++]=He,Se[Ne++]=Ye,Se[Ne++]=Tt,Tt=e;var r=He;e=Ye;var i=32-Re(r)-1;r&=~(1<<i),n+=1;var o=32-Re(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,He=1<<32-Re(t)+i|n<<i|r,Ye=o+e}else He=1<<o|n<<i|r,Ye=e}function Sl(e){e.return!==null&&(Nt(e,1),zc(e,1,0))}function Nl(e){for(;e===Zr;)Zr=Gt[--Qt],Gt[Qt]=null,ei=Gt[--Qt],Gt[Qt]=null;for(;e===Tt;)Tt=Se[--Ne],Se[Ne]=null,Ye=Se[--Ne],Se[Ne]=null,He=Se[--Ne],Se[Ne]=null}var xe=null,ye=null,U=!1,Le=null;function Pc(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Oa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ye=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:He,overflow:Ye}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ye=null,!0):!1;default:return!1}}function Oo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Do(e){if(U){var t=ye;if(t){var n=t;if(!Oa(e,t)){if(Oo(e))throw Error(j(418));t=ut(n.nextSibling);var r=xe;t&&Oa(e,t)?Pc(r,n):(e.flags=e.flags&-4097|2,U=!1,xe=e)}}else{if(Oo(e))throw Error(j(418));e.flags=e.flags&-4097|2,U=!1,xe=e}}}function Da(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Nr(e){if(e!==xe)return!1;if(!U)return Da(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_o(e.type,e.memoizedProps)),t&&(t=ye)){if(Oo(e))throw Mc(),Error(j(418));for(;t;)Pc(e,t),t=ut(t.nextSibling)}if(Da(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=xe?ut(e.stateNode.nextSibling):null;return!0}function Mc(){for(var e=ye;e;)e=ut(e.nextSibling)}function an(){ye=xe=null,U=!1}function bl(e){Le===null?Le=[e]:Le.push(e)}var Bf=Je.ReactCurrentBatchConfig;function Sn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ia(e){var t=e._init;return t(e._payload)}function _c(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=mt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,v){return d===null||d.tag!==6?(d=ro(p,f.mode,v),d.return=f,d):(d=i(d,p),d.return=f,d)}function c(f,d,p,v){var S=p.type;return S===At?h(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Ia(S)===d.type)?(v=i(d,p.props),v.ref=Sn(f,d,p),v.return=f,v):(v=Ar(p.type,p.key,p.props,null,f.mode,v),v.ref=Sn(f,d,p),v.return=f,v)}function u(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=io(p,f.mode,v),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function h(f,d,p,v,S){return d===null||d.tag!==7?(d=Mt(p,f.mode,v,S),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ro(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mr:return p=Ar(d.type,d.key,d.props,null,f.mode,p),p.ref=Sn(f,null,d),p.return=f,p;case Ut:return d=io(d,f.mode,p),d.return=f,d;case et:var v=d._init;return m(f,v(d._payload),p)}if(En(d)||yn(d))return d=Mt(d,f.mode,p,null),d.return=f,d;br(f,d)}return null}function g(f,d,p,v){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case mr:return p.key===S?c(f,d,p,v):null;case Ut:return p.key===S?u(f,d,p,v):null;case et:return S=p._init,g(f,d,S(p._payload),v)}if(En(p)||yn(p))return S!==null?null:h(f,d,p,v,null);br(f,p)}return null}function y(f,d,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(d,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mr:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,S);case Ut:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,S);case et:var E=v._init;return y(f,d,p,E(v._payload),S)}if(En(v)||yn(v))return f=f.get(p)||null,h(d,f,v,S,null);br(d,v)}return null}function x(f,d,p,v){for(var S=null,E=null,z=d,P=d=0,H=null;z!==null&&P<p.length;P++){z.index>P?(H=z,z=null):H=z.sibling;var L=g(f,z,p[P],v);if(L===null){z===null&&(z=H);break}e&&z&&L.alternate===null&&t(f,z),d=o(L,d,P),E===null?S=L:E.sibling=L,E=L,z=H}if(P===p.length)return n(f,z),U&&Nt(f,P),S;if(z===null){for(;P<p.length;P++)z=m(f,p[P],v),z!==null&&(d=o(z,d,P),E===null?S=z:E.sibling=z,E=z);return U&&Nt(f,P),S}for(z=r(f,z);P<p.length;P++)H=y(z,f,P,p[P],v),H!==null&&(e&&H.alternate!==null&&z.delete(H.key===null?P:H.key),d=o(H,d,P),E===null?S=H:E.sibling=H,E=H);return e&&z.forEach(function(Pe){return t(f,Pe)}),U&&Nt(f,P),S}function w(f,d,p,v){var S=yn(p);if(typeof S!="function")throw Error(j(150));if(p=S.call(p),p==null)throw Error(j(151));for(var E=S=null,z=d,P=d=0,H=null,L=p.next();z!==null&&!L.done;P++,L=p.next()){z.index>P?(H=z,z=null):H=z.sibling;var Pe=g(f,z,L.value,v);if(Pe===null){z===null&&(z=H);break}e&&z&&Pe.alternate===null&&t(f,z),d=o(Pe,d,P),E===null?S=Pe:E.sibling=Pe,E=Pe,z=H}if(L.done)return n(f,z),U&&Nt(f,P),S;if(z===null){for(;!L.done;P++,L=p.next())L=m(f,L.value,v),L!==null&&(d=o(L,d,P),E===null?S=L:E.sibling=L,E=L);return U&&Nt(f,P),S}for(z=r(f,z);!L.done;P++,L=p.next())L=y(z,f,P,L.value,v),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?P:L.key),d=o(L,d,P),E===null?S=L:E.sibling=L,E=L);return e&&z.forEach(function(gn){return t(f,gn)}),U&&Nt(f,P),S}function N(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===At&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case mr:e:{for(var S=p.key,E=d;E!==null;){if(E.key===S){if(S=p.type,S===At){if(E.tag===7){n(f,E.sibling),d=i(E,p.props.children),d.return=f,f=d;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Ia(S)===E.type){n(f,E.sibling),d=i(E,p.props),d.ref=Sn(f,E,p),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===At?(d=Mt(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Ar(p.type,p.key,p.props,null,f.mode,v),v.ref=Sn(f,d,p),v.return=f,f=v)}return a(f);case Ut:e:{for(E=p.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=io(p,f.mode,v),d.return=f,f=d}return a(f);case et:return E=p._init,N(f,d,E(p._payload),v)}if(En(p))return x(f,d,p,v);if(yn(p))return w(f,d,p,v);br(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=ro(p,f.mode,v),d.return=f,f=d),a(f)):n(f,d)}return N}var sn=_c(!0),Tc=_c(!1),ti=xt(null),ni=null,Kt=null,Cl=null;function El(){Cl=Kt=ni=null}function zl(e){var t=ti.current;B(ti),e._currentValue=t}function Io(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){ni=e,Cl=Kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(Cl!==e)if(e={context:e,memoizedValue:t,next:null},Kt===null){if(ni===null)throw Error(j(308));Kt=e,ni.dependencies={lanes:0,firstContext:e}}else Kt=Kt.next=e;return t}var Et=null;function Pl(e){Et===null?Et=[e]:Et.push(e)}function Lc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xe(e,n)}return i=r.interleaved,i===null?(t.next=t,Pl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xe(e,n)}function Or(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hl(e,n)}}function Fa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ri(e,t,n,r){var i=e.updateQueue;tt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==a&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=c))}if(o!==null){var m=i.baseState;a=0,h=u=c=null,s=o;do{var g=s.lane,y=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(g=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(y,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(y,m,g):x,g==null)break e;m=W({},m,g);break e;case 2:tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=y,c=m):h=h.next=y,a|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Rt|=a,e.lanes=a,e.memoizedState=m}}function Ba(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var sr={},Ae=xt(sr),Xn=xt(sr),qn=xt(sr);function zt(e){if(e===sr)throw Error(j(174));return e}function _l(e,t){switch(I(qn,t),I(Xn,e),I(Ae,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vo(t,e)}B(Ae),I(Ae,t)}function cn(){B(Ae),B(Xn),B(qn)}function Oc(e){zt(qn.current);var t=zt(Ae.current),n=vo(t,e.type);t!==n&&(I(Xn,e),I(Ae,n))}function Tl(e){Xn.current===e&&(B(Ae),B(Xn))}var A=xt(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qi=[];function Ll(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var Dr=Je.ReactCurrentDispatcher,Ji=Je.ReactCurrentBatchConfig,Lt=0,$=null,X=null,Z=null,oi=!1,On=!1,Jn=0,Uf=0;function ie(){throw Error(j(321))}function Rl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Ol(e,t,n,r,i,o){if(Lt=o,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dr.current=e===null||e.memoizedState===null?Vf:Hf,e=n(r,i),On){o=0;do{if(On=!1,Jn=0,25<=o)throw Error(j(301));o+=1,Z=X=null,t.updateQueue=null,Dr.current=Yf,e=n(r,i)}while(On)}if(Dr.current=li,t=X!==null&&X.next!==null,Lt=0,Z=X=$=null,oi=!1,t)throw Error(j(300));return e}function Dl(){var e=Jn!==0;return Jn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?$.memoizedState=Z=e:Z=Z.next=e,Z}function ze(){if(X===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=Z===null?$.memoizedState:Z.next;if(t!==null)Z=t,X=e;else{if(e===null)throw Error(j(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Z===null?$.memoizedState=Z=e:Z=Z.next=e}return Z}function Zn(e,t){return typeof t=="function"?t(e):t}function Zi(e){var t=ze(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=X,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,c=null,u=o;do{var h=u.lane;if((Lt&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=m,a=r):c=c.next=m,$.lanes|=h,Rt|=h}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=s,De(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,$.lanes|=o,Rt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function eo(e){var t=ze(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);De(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Dc(){}function Ic(e,t){var n=$,r=ze(),i=t(),o=!De(r.memoizedState,i);if(o&&(r.memoizedState=i,pe=!0),r=r.queue,Il(Uc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,er(9,Bc.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(j(349));Lt&30||Fc(n,t,i)}return i}function Fc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bc(e,t,n,r){t.value=n,t.getSnapshot=r,Ac(t)&&$c(e)}function Uc(e,t,n){return n(function(){Ac(t)&&$c(e)})}function Ac(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function $c(e){var t=Xe(e,1);t!==null&&Oe(t,e,1,-1)}function Ua(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},t.queue=e,e=e.dispatch=Wf.bind(null,$,e),[t.memoizedState,e]}function er(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wc(){return ze().memoizedState}function Ir(e,t,n,r){var i=Fe();$.flags|=e,i.memoizedState=er(1|t,n,void 0,r===void 0?null:r)}function wi(e,t,n,r){var i=ze();r=r===void 0?null:r;var o=void 0;if(X!==null){var a=X.memoizedState;if(o=a.destroy,r!==null&&Rl(r,a.deps)){i.memoizedState=er(t,n,o,r);return}}$.flags|=e,i.memoizedState=er(1|t,n,o,r)}function Aa(e,t){return Ir(8390656,8,e,t)}function Il(e,t){return wi(2048,8,e,t)}function Vc(e,t){return wi(4,2,e,t)}function Hc(e,t){return wi(4,4,e,t)}function Yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gc(e,t,n){return n=n!=null?n.concat([e]):null,wi(4,4,Yc.bind(null,t,e),n)}function Fl(){}function Qc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xc(e,t,n){return Lt&21?(De(n,t)||(n=tc(),$.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function Af(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Ji.transition;Ji.transition={};try{e(!1),t()}finally{D=n,Ji.transition=r}}function qc(){return ze().memoizedState}function $f(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jc(e))Zc(t,n);else if(n=Lc(e,t,n,r),n!==null){var i=ce();Oe(n,e,r,i),eu(n,t,r)}}function Wf(e,t,n){var r=pt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jc(e))Zc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,De(s,a)){var c=t.interleaved;c===null?(i.next=i,Pl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Lc(e,t,i,r),n!==null&&(i=ce(),Oe(n,e,r,i),eu(n,t,r))}}function Jc(e){var t=e.alternate;return e===$||t!==null&&t===$}function Zc(e,t){On=oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function eu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hl(e,n)}}var li={readContext:Ee,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Vf={readContext:Ee,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Aa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4194308,4,Yc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ir(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$f.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Ua,useDebugValue:Fl,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ua(!1),t=e[0];return e=Af.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,i=Fe();if(U){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ee===null)throw Error(j(349));Lt&30||Fc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Aa(Uc.bind(null,r,o,e),[e]),r.flags|=2048,er(9,Bc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Fe(),t=ee.identifierPrefix;if(U){var n=Ye,r=He;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Uf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hf={readContext:Ee,useCallback:Qc,useContext:Ee,useEffect:Il,useImperativeHandle:Gc,useInsertionEffect:Vc,useLayoutEffect:Hc,useMemo:Kc,useReducer:Zi,useRef:Wc,useState:function(){return Zi(Zn)},useDebugValue:Fl,useDeferredValue:function(e){var t=ze();return Xc(t,X.memoizedState,e)},useTransition:function(){var e=Zi(Zn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Ic,useId:qc,unstable_isNewReconciler:!1},Yf={readContext:Ee,useCallback:Qc,useContext:Ee,useEffect:Il,useImperativeHandle:Gc,useInsertionEffect:Vc,useLayoutEffect:Hc,useMemo:Kc,useReducer:eo,useRef:Wc,useState:function(){return eo(Zn)},useDebugValue:Fl,useDeferredValue:function(e){var t=ze();return X===null?t.memoizedState=e:Xc(t,X.memoizedState,e)},useTransition:function(){var e=eo(Zn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Ic,useId:qc,unstable_isNewReconciler:!1};function _e(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ji={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=pt(e),o=Ge(r,i);o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,i),t!==null&&(Oe(t,e,i,r),Or(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=pt(e),o=Ge(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,i),t!==null&&(Oe(t,e,i,r),Or(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=pt(e),i=Ge(n,r);i.tag=2,t!=null&&(i.callback=t),t=dt(e,i,r),t!==null&&(Oe(t,e,r,n),Or(t,e,r))}};function $a(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(i,o):!0}function tu(e,t,n){var r=!1,i=vt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(i=he(t)?_t:ae.current,r=t.contextTypes,o=(r=r!=null)?ln(e,i):vt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ji,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ji.enqueueReplaceState(t,t.state,null)}function Bo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ml(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ee(o):(o=he(t)?_t:ae.current,i.context=ln(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Fo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ji.enqueueReplaceState(i,i.state,null),ri(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function un(e,t){try{var n="",r=t;do n+=xd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function to(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Uo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gf=typeof WeakMap=="function"?WeakMap:Map;function nu(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){si||(si=!0,Xo=r),Uo(e,t)},n}function ru(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Uo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Uo(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Va(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ap.bind(null,e,t,n),t.then(e,e))}function Ha(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ya(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var Qf=Je.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?Tc(t,null,n,r):sn(t,e.child,n,r)}function Ga(e,t,n,r,i){n=n.render;var o=t.ref;return nn(t,i),r=Ol(e,t,n,r,o,i),n=Dl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(U&&n&&Sl(t),t.flags|=1,se(e,t,r,i),t.child)}function Qa(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Yl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,iu(e,t,o,r,i)):(e=Ar(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(a,r)&&e.ref===t.ref)return qe(e,t,i)}return t.flags|=1,e=mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function iu(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Yn(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,qe(e,t,i)}return Ao(e,t,n,r,i)}function ou(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(qt,ve),ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(qt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,I(qt,ve),ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,I(qt,ve),ve|=r;return se(e,t,i,n),t.child}function lu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ao(e,t,n,r,i){var o=he(n)?_t:ae.current;return o=ln(t,o),nn(t,i),n=Ol(e,t,n,r,o,i),r=Dl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(U&&r&&Sl(t),t.flags|=1,se(e,t,n,i),t.child)}function Ka(e,t,n,r,i){if(he(n)){var o=!0;Jr(t)}else o=!1;if(nn(t,i),t.stateNode===null)Fr(e,t),tu(t,n,r),Bo(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ee(u):(u=he(n)?_t:ae.current,u=ln(t,u));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==u)&&Wa(t,a,r,u),tt=!1;var g=t.memoizedState;a.state=g,ri(t,r,a,i),c=t.memoizedState,s!==r||g!==c||me.current||tt?(typeof h=="function"&&(Fo(t,n,h,r),c=t.memoizedState),(s=tt||$a(t,n,s,r,g,c,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Rc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:_e(t.type,s),a.props=u,m=t.pendingProps,g=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ee(c):(c=he(n)?_t:ae.current,c=ln(t,c));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==m||g!==c)&&Wa(t,a,r,c),tt=!1,g=t.memoizedState,a.state=g,ri(t,r,a,i);var x=t.memoizedState;s!==m||g!==x||me.current||tt?(typeof y=="function"&&(Fo(t,n,y,r),x=t.memoizedState),(u=tt||$a(t,n,u,r,g,x,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return $o(e,t,n,r,o,i)}function $o(e,t,n,r,i,o){lu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ra(t,n,!1),qe(e,t,o);r=t.stateNode,Qf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=sn(t,e.child,null,o),t.child=sn(t,null,s,o)):se(e,t,s,o),t.memoizedState=r.state,i&&Ra(t,n,!0),t.child}function au(e){var t=e.stateNode;t.pendingContext?La(e,t.pendingContext,t.pendingContext!==t.context):t.context&&La(e,t.context,!1),_l(e,t.containerInfo)}function Xa(e,t,n,r,i){return an(),bl(i),t.flags|=256,se(e,t,n,r),t.child}var Wo={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function su(e,t,n){var r=t.pendingProps,i=A.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(A,i&1),e===null)return Do(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ni(a,r,0,null),e=Mt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vo(n),t.memoizedState=Wo,e):Bl(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Kf(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=mt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=mt(s,o):(o=Mt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Vo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Wo,r}return o=e.child,e=o.sibling,r=mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bl(e,t){return t=Ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cr(e,t,n,r){return r!==null&&bl(r),sn(t,e.child,null,n),e=Bl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kf(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=to(Error(j(422))),Cr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ni({mode:"visible",children:r.children},i,0,null),o=Mt(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&sn(t,e.child,null,a),t.child.memoizedState=Vo(a),t.memoizedState=Wo,o);if(!(t.mode&1))return Cr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(j(419)),r=to(o,r,void 0),Cr(e,t,a,r)}if(s=(a&e.childLanes)!==0,pe||s){if(r=ee,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xe(e,i),Oe(r,e,i,-1))}return Hl(),r=to(Error(j(421))),Cr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=sp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ye=ut(i.nextSibling),xe=t,U=!0,Le=null,e!==null&&(Se[Ne++]=He,Se[Ne++]=Ye,Se[Ne++]=Tt,He=e.id,Ye=e.overflow,Tt=t),t=Bl(t,r.children),t.flags|=4096,t)}function qa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Io(e.return,t,n)}function no(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function cu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(se(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qa(e,n,t);else if(e.tag===19)qa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(A,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ii(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),no(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}no(t,!0,n,null,o);break;case"together":no(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xf(e,t,n){switch(t.tag){case 3:au(t),an();break;case 5:Oc(t);break;case 1:he(t.type)&&Jr(t);break;case 4:_l(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(ti,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?su(e,t,n):(I(A,A.current&1),e=qe(e,t,n),e!==null?e.sibling:null);I(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,ou(e,t,n)}return qe(e,t,n)}var uu,Ho,du,fu;uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ho=function(){};du=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zt(Ae.current);var o=null;switch(n){case"input":i=po(e,i),r=po(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=go(e,i),r=go(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}yo(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&F("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};fu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qf(e,t,n){var r=t.pendingProps;switch(Nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return he(t.type)&&qr(),oe(t),null;case 3:return r=t.stateNode,cn(),B(me),B(ae),Ll(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Zo(Le),Le=null))),Ho(e,t),oe(t),null;case 5:Tl(t);var i=zt(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)du(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return oe(t),null}if(e=zt(Ae.current),Nr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Be]=t,r[Kn]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<Pn.length;i++)F(Pn[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":la(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":sa(r,o),F("invalid",r)}yo(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),i=["children",""+s]):Bn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&F("scroll",r)}switch(n){case"input":hr(r),aa(r,o,!0);break;case"textarea":hr(r),ca(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Us(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Be]=t,e[Kn]=r,uu(e,t,!1,!1),t.stateNode=e;e:{switch(a=xo(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pn.length;i++)F(Pn[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":la(e,r),i=po(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),F("invalid",e);break;case"textarea":sa(e,r),i=go(e,r),F("invalid",e);break;default:i=r}yo(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?Ws(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&As(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Un(e,c):typeof c=="number"&&Un(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&F("scroll",e):c!=null&&cl(e,o,c,a))}switch(n){case"input":hr(e),aa(e,r,!1);break;case"textarea":hr(e),ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Jt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)fu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=zt(qn.current),zt(Ae.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(o=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return oe(t),null;case 13:if(B(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ye!==null&&t.mode&1&&!(t.flags&128))Mc(),an(),t.flags|=98560,o=!1;else if(o=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Be]=t}else an(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else Le!==null&&(Zo(Le),Le=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?q===0&&(q=3):Hl())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return cn(),Ho(e,t),e===null&&Gn(t.stateNode.containerInfo),oe(t),null;case 10:return zl(t.type._context),oe(t),null;case 17:return he(t.type)&&qr(),oe(t),null;case 19:if(B(A),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Nn(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ii(e),a!==null){for(t.flags|=128,Nn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(A,A.current&1|2),t.child}e=e.sibling}o.tail!==null&&G()>dn&&(t.flags|=128,r=!0,Nn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ii(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!U)return oe(t),null}else 2*G()-o.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,n=A.current,I(A,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Vl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Jf(e,t){switch(Nl(t),t.tag){case 1:return he(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(),B(me),B(ae),Ll(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tl(t),null;case 13:if(B(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(A),null;case 4:return cn(),null;case 10:return zl(t.type._context),null;case 22:case 23:return Vl(),null;case 24:return null;default:return null}}var Er=!1,le=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,b=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Yo(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ja=!1;function ep(e,t){if(Po=Gr,e=vc(),kl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,u=0,h=0,m=e,g=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(s=a+i),m!==o||r!==0&&m.nodeType!==3||(c=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===e)break t;if(g===n&&++u===i&&(s=a),g===o&&++h===r&&(c=a),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mo={focusedElem:e,selectionRange:n},Gr=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,N=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:_e(t.type,w),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return x=Ja,Ja=!1,x}function Dn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Yo(t,n,o)}i=i.next}while(i!==r)}}function ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Go(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pu(e){var t=e.alternate;t!==null&&(e.alternate=null,pu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[Kn],delete t[Lo],delete t[Df],delete t[If])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mu(e){return e.tag===5||e.tag===3||e.tag===4}function Za(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for(Qo(e,t,n),e=e.sibling;e!==null;)Qo(e,t,n),e=e.sibling}function Ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ko(e,t,n),e=e.sibling;e!==null;)Ko(e,t,n),e=e.sibling}var te=null,Te=!1;function Ze(e,t,n){for(n=n.child;n!==null;)hu(e,t,n),n=n.sibling}function hu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(mi,n)}catch{}switch(n.tag){case 5:le||Xt(n,t);case 6:var r=te,i=Te;te=null,Ze(e,t,n),te=r,Te=i,te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?Ki(e.parentNode,n):e.nodeType===1&&Ki(e,n),Vn(e)):Ki(te,n.stateNode));break;case 4:r=te,i=Te,te=n.stateNode.containerInfo,Te=!0,Ze(e,t,n),te=r,Te=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Yo(n,t,a),i=i.next}while(i!==r)}Ze(e,t,n);break;case 1:if(!le&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Ze(e,t,n),le=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zf),t.forEach(function(r){var i=cp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Te=!1;break e;case 3:te=s.stateNode.containerInfo,Te=!0;break e;case 4:te=s.stateNode.containerInfo,Te=!0;break e}s=s.return}if(te===null)throw Error(j(160));hu(o,a,i),te=null,Te=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){V(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gu(t,e),t=t.sibling}function gu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ie(e),r&4){try{Dn(3,e,e.return),ki(3,e)}catch(w){V(e,e.return,w)}try{Dn(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Me(t,e),Ie(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(Me(t,e),Ie(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var i=e.stateNode;try{Un(i,"")}catch(w){V(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Fs(i,o),xo(s,a);var u=xo(s,o);for(a=0;a<c.length;a+=2){var h=c[a],m=c[a+1];h==="style"?Ws(i,m):h==="dangerouslySetInnerHTML"?As(i,m):h==="children"?Un(i,m):cl(i,h,m,u)}switch(s){case"input":mo(i,o);break;case"textarea":Bs(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Jt(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?Jt(i,!!o.multiple,o.defaultValue,!0):Jt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kn]=o}catch(w){V(e,e.return,w)}}break;case 6:if(Me(t,e),Ie(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){V(e,e.return,w)}}break;case 3:if(Me(t,e),Ie(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Me(t,e),Ie(e);break;case 13:Me(t,e),Ie(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($l=G())),r&4&&es(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(le=(u=le)||h,Me(t,e),le=u):Me(t,e),Ie(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(b=e,h=e.child;h!==null;){for(m=b=h;b!==null;){switch(g=b,y=g.child,g.tag){case 0:case 11:case 14:case 15:Dn(4,g,g.return);break;case 1:Xt(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:Xt(g,g.return);break;case 22:if(g.memoizedState!==null){ns(m);continue}}y!==null?(y.return=g,b=y):ns(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,c=m.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=$s("display",a))}catch(w){V(e,e.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){V(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(t,e),Ie(e),r&4&&es(e);break;case 21:break;default:Me(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mu(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Un(i,""),r.flags&=-33);var o=Za(e);Ko(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Za(e);Qo(e,s,a);break;default:throw Error(j(161))}}catch(c){V(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e,t,n){b=e,vu(e)}function vu(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var i=b,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Er;if(!a){var s=i.alternate,c=s!==null&&s.memoizedState!==null||le;s=Er;var u=le;if(Er=a,(le=c)&&!u)for(b=i;b!==null;)a=b,c=a.child,a.tag===22&&a.memoizedState!==null?rs(i):c!==null?(c.return=a,b=c):rs(i);for(;o!==null;)b=o,vu(o),o=o.sibling;b=i,Er=s,le=u}ts(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,b=o):ts(e)}}function ts(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_e(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ba(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ba(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Vn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}le||t.flags&512&&Go(t)}catch(g){V(t,t.return,g)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function ns(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function rs(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ki(4,t)}catch(c){V(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){V(t,i,c)}}var o=t.return;try{Go(t)}catch(c){V(t,o,c)}break;case 5:var a=t.return;try{Go(t)}catch(c){V(t,a,c)}}}catch(c){V(t,t.return,c)}if(t===e){b=null;break}var s=t.sibling;if(s!==null){s.return=t.return,b=s;break}b=t.return}}var np=Math.ceil,ai=Je.ReactCurrentDispatcher,Ul=Je.ReactCurrentOwner,Ce=Je.ReactCurrentBatchConfig,O=0,ee=null,Q=null,ne=0,ve=0,qt=xt(0),q=0,tr=null,Rt=0,Si=0,Al=0,In=null,fe=null,$l=0,dn=1/0,We=null,si=!1,Xo=null,ft=null,zr=!1,ot=null,ci=0,Fn=0,qo=null,Br=-1,Ur=0;function ce(){return O&6?G():Br!==-1?Br:Br=G()}function pt(e){return e.mode&1?O&2&&ne!==0?ne&-ne:Bf.transition!==null?(Ur===0&&(Ur=tc()),Ur):(e=D,e!==0||(e=window.event,e=e===void 0?16:sc(e.type)),e):1}function Oe(e,t,n,r){if(50<Fn)throw Fn=0,qo=null,Error(j(185));or(e,n,r),(!(O&2)||e!==ee)&&(e===ee&&(!(O&2)&&(Si|=n),q===4&&rt(e,ne)),ge(e,r),n===1&&O===0&&!(t.mode&1)&&(dn=G()+500,xi&&wt()))}function ge(e,t){var n=e.callbackNode;Fd(e,t);var r=Yr(e,e===ee?ne:0);if(r===0)n!==null&&fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fa(n),t===1)e.tag===0?Ff(is.bind(null,e)):Ec(is.bind(null,e)),Rf(function(){!(O&6)&&wt()}),n=null;else{switch(nc(r)){case 1:n=ml;break;case 4:n=Zs;break;case 16:n=Hr;break;case 536870912:n=ec;break;default:n=Hr}n=bu(n,yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yu(e,t){if(Br=-1,Ur=0,O&6)throw Error(j(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Yr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ui(e,r);else{t=r;var i=O;O|=2;var o=wu();(ee!==e||ne!==t)&&(We=null,dn=G()+500,Pt(e,t));do try{op();break}catch(s){xu(e,s)}while(!0);El(),ai.current=o,O=i,Q!==null?t=0:(ee=null,ne=0,t=q)}if(t!==0){if(t===2&&(i=No(e),i!==0&&(r=i,t=Jo(e,i))),t===1)throw n=tr,Pt(e,0),rt(e,r),ge(e,G()),n;if(t===6)rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!rp(i)&&(t=ui(e,r),t===2&&(o=No(e),o!==0&&(r=o,t=Jo(e,o))),t===1))throw n=tr,Pt(e,0),rt(e,r),ge(e,G()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:bt(e,fe,We);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=$l+500-G(),10<t)){if(Yr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=To(bt.bind(null,e,fe,We),t);break}bt(e,fe,We);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Re(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*np(r/1960))-r,10<r){e.timeoutHandle=To(bt.bind(null,e,fe,We),r);break}bt(e,fe,We);break;case 5:bt(e,fe,We);break;default:throw Error(j(329))}}}return ge(e,G()),e.callbackNode===n?yu.bind(null,e):null}function Jo(e,t){var n=In;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=ui(e,t),e!==2&&(t=fe,fe=n,t!==null&&Zo(t)),e}function Zo(e){fe===null?fe=e:fe.push.apply(fe,e)}function rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!De(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Al,t&=~Si,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function is(e){if(O&6)throw Error(j(327));rn();var t=Yr(e,0);if(!(t&1))return ge(e,G()),null;var n=ui(e,t);if(e.tag!==0&&n===2){var r=No(e);r!==0&&(t=r,n=Jo(e,r))}if(n===1)throw n=tr,Pt(e,0),rt(e,t),ge(e,G()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,fe,We),ge(e,G()),null}function Wl(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(dn=G()+500,xi&&wt())}}function Ot(e){ot!==null&&ot.tag===0&&!(O&6)&&rn();var t=O;O|=1;var n=Ce.transition,r=D;try{if(Ce.transition=null,D=1,e)return e()}finally{D=r,Ce.transition=n,O=t,!(O&6)&&wt()}}function Vl(){ve=qt.current,B(qt)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lf(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(Nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:cn(),B(me),B(ae),Ll();break;case 5:Tl(r);break;case 4:cn();break;case 13:B(A);break;case 19:B(A);break;case 10:zl(r.type._context);break;case 22:case 23:Vl()}n=n.return}if(ee=e,Q=e=mt(e.current,null),ne=ve=t,q=0,tr=null,Al=Si=Rt=0,fe=In=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Et=null}return e}function xu(e,t){do{var n=Q;try{if(El(),Dr.current=li,oi){for(var r=$.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oi=!1}if(Lt=0,Z=X=$=null,On=!1,Jn=0,Ul.current=null,n===null||n.return===null){q=1,tr=t,Q=null;break}e:{var o=e,a=n.return,s=n,c=t;if(t=ne,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Ha(a);if(y!==null){y.flags&=-257,Ya(y,a,s,o,t),y.mode&1&&Va(o,u,t),t=y,c=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(c),t.updateQueue=w}else x.add(c);break e}else{if(!(t&1)){Va(o,u,t),Hl();break e}c=Error(j(426))}}else if(U&&s.mode&1){var N=Ha(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ya(N,a,s,o,t),bl(un(c,s));break e}}o=c=un(c,s),q!==4&&(q=2),In===null?In=[o]:In.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=nu(o,c,t);Fa(o,f);break e;case 1:s=c;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ft===null||!ft.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=ru(o,s,t);Fa(o,v);break e}}o=o.return}while(o!==null)}ku(n)}catch(S){t=S,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function wu(){var e=ai.current;return ai.current=li,e===null?li:e}function Hl(){(q===0||q===3||q===2)&&(q=4),ee===null||!(Rt&268435455)&&!(Si&268435455)||rt(ee,ne)}function ui(e,t){var n=O;O|=2;var r=wu();(ee!==e||ne!==t)&&(We=null,Pt(e,t));do try{ip();break}catch(i){xu(e,i)}while(!0);if(El(),O=n,ai.current=r,Q!==null)throw Error(j(261));return ee=null,ne=0,q}function ip(){for(;Q!==null;)ju(Q)}function op(){for(;Q!==null&&!Pd();)ju(Q)}function ju(e){var t=Nu(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?ku(e):Q=t,Ul.current=null}function ku(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jf(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Q=null;return}}else if(n=qf(n,t,ve),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);q===0&&(q=5)}function bt(e,t,n){var r=D,i=Ce.transition;try{Ce.transition=null,D=1,lp(e,t,n,r)}finally{Ce.transition=i,D=r}return null}function lp(e,t,n,r){do rn();while(ot!==null);if(O&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Bd(e,o),e===ee&&(Q=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0,bu(Hr,function(){return rn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var a=D;D=1;var s=O;O|=4,Ul.current=null,ep(e,n),gu(n,e),Cf(Mo),Gr=!!Po,Mo=Po=null,e.current=n,tp(n),Md(),O=s,D=a,Ce.transition=o}else e.current=n;if(zr&&(zr=!1,ot=e,ci=i),o=e.pendingLanes,o===0&&(ft=null),Ld(n.stateNode),ge(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(si)throw si=!1,e=Xo,Xo=null,e;return ci&1&&e.tag!==0&&rn(),o=e.pendingLanes,o&1?e===qo?Fn++:(Fn=0,qo=e):Fn=0,wt(),null}function rn(){if(ot!==null){var e=nc(ci),t=Ce.transition,n=D;try{if(Ce.transition=null,D=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,ci=0,O&6)throw Error(j(331));var i=O;for(O|=4,b=e.current;b!==null;){var o=b,a=o.child;if(b.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(b=u;b!==null;){var h=b;switch(h.tag){case 0:case 11:case 15:Dn(8,h,o)}var m=h.child;if(m!==null)m.return=h,b=m;else for(;b!==null;){h=b;var g=h.sibling,y=h.return;if(pu(h),h===u){b=null;break}if(g!==null){g.return=y,b=g;break}b=y}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}b=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,b=a;else e:for(;b!==null;){if(o=b,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Dn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,b=f;break e}b=o.return}}var d=e.current;for(b=d;b!==null;){a=b;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,b=p;else e:for(a=d;b!==null;){if(s=b,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ki(9,s)}}catch(S){V(s,s.return,S)}if(s===a){b=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,b=v;break e}b=s.return}}if(O=i,wt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(mi,e)}catch{}r=!0}return r}finally{D=n,Ce.transition=t}}return!1}function os(e,t,n){t=un(n,t),t=nu(e,t,1),e=dt(e,t,1),t=ce(),e!==null&&(or(e,1,t),ge(e,t))}function V(e,t,n){if(e.tag===3)os(e,e,n);else for(;t!==null;){if(t.tag===3){os(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=un(n,e),e=ru(t,e,1),t=dt(t,e,1),e=ce(),t!==null&&(or(t,1,e),ge(t,e));break}}t=t.return}}function ap(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(q===4||q===3&&(ne&130023424)===ne&&500>G()-$l?Pt(e,0):Al|=n),ge(e,t)}function Su(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=ce();e=Xe(e,t),e!==null&&(or(e,t,n),ge(e,n))}function sp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Su(e,n)}function cp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Su(e,n)}var Nu;Nu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Xf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,U&&t.flags&1048576&&zc(t,ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fr(e,t),e=t.pendingProps;var i=ln(t,ae.current);nn(t,n),i=Ol(null,t,r,e,i,n);var o=Dl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(o=!0,Jr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ml(t),i.updater=ji,t.stateNode=i,i._reactInternals=t,Bo(t,r,e,n),t=$o(null,t,r,!0,o,n)):(t.tag=0,U&&o&&Sl(t),se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=dp(r),e=_e(r,e),i){case 0:t=Ao(null,t,r,e,n);break e;case 1:t=Ka(null,t,r,e,n);break e;case 11:t=Ga(null,t,r,e,n);break e;case 14:t=Qa(null,t,r,_e(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Ao(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Ka(e,t,r,i,n);case 3:e:{if(au(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Rc(e,t),ri(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=un(Error(j(423)),t),t=Xa(e,t,r,n,i);break e}else if(r!==i){i=un(Error(j(424)),t),t=Xa(e,t,r,n,i);break e}else for(ye=ut(t.stateNode.containerInfo.firstChild),xe=t,U=!0,Le=null,n=Tc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(an(),r===i){t=qe(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Oc(t),e===null&&Do(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,_o(r,i)?a=null:o!==null&&_o(r,o)&&(t.flags|=32),lu(e,t),se(e,t,a,n),t.child;case 6:return e===null&&Do(t),null;case 13:return su(e,t,n);case 4:return _l(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Ga(e,t,r,i,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,I(ti,r._currentValue),r._currentValue=a,o!==null)if(De(o.value,a)){if(o.children===i.children&&!me.current){t=qe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Ge(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Io(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Io(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,nn(t,n),i=Ee(i),r=r(i),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,i=_e(r,t.pendingProps),i=_e(r.type,i),Qa(e,t,r,i,n);case 15:return iu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Fr(e,t),t.tag=1,he(r)?(e=!0,Jr(t)):e=!1,nn(t,n),tu(t,r,i),Bo(t,r,i,n),$o(null,t,r,!0,e,n);case 19:return cu(e,t,n);case 22:return ou(e,t,n)}throw Error(j(156,t.tag))};function bu(e,t){return Js(e,t)}function up(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new up(e,t,n,r)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return Yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dl)return 11;if(e===fl)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ar(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Yl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case At:return Mt(n.children,i,o,t);case ul:a=8,i|=8;break;case so:return e=be(12,n,t,i|2),e.elementType=so,e.lanes=o,e;case co:return e=be(13,n,t,i),e.elementType=co,e.lanes=o,e;case uo:return e=be(19,n,t,i),e.elementType=uo,e.lanes=o,e;case Os:return Ni(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ls:a=10;break e;case Rs:a=9;break e;case dl:a=11;break e;case fl:a=14;break e;case et:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=be(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Mt(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function Ni(e,t,n,r){return e=be(22,e,r,t),e.elementType=Os,e.lanes=n,e.stateNode={isHidden:!1},e}function ro(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function io(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gl(e,t,n,r,i,o,a,s,c){return e=new fp(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ml(o),e}function pp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cu(e){if(!e)return vt;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(he(n))return Cc(e,n,t)}return t}function Eu(e,t,n,r,i,o,a,s,c){return e=Gl(n,r,!0,e,i,o,a,s,c),e.context=Cu(null),n=e.current,r=ce(),i=pt(n),o=Ge(r,i),o.callback=t??null,dt(n,o,i),e.current.lanes=i,or(e,i,r),ge(e,r),e}function bi(e,t,n,r){var i=t.current,o=ce(),a=pt(i);return n=Cu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(i,t,a),e!==null&&(Oe(e,i,a,o),Or(e,i,a)),a}function di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ls(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ql(e,t){ls(e,t),(e=e.alternate)&&ls(e,t)}function mp(){return null}var zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kl(e){this._internalRoot=e}Ci.prototype.render=Kl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));bi(e,t,null,null)};Ci.prototype.unmount=Kl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){bi(null,e,null,null)}),t[Ke]=null}};function Ci(e){this._internalRoot=e}Ci.prototype.unstable_scheduleHydration=function(e){if(e){var t=oc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&ac(e)}};function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function as(){}function hp(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=di(a);o.call(u)}}var a=Eu(t,r,e,0,null,!1,!1,"",as);return e._reactRootContainer=a,e[Ke]=a.current,Gn(e.nodeType===8?e.parentNode:e),Ot(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=di(c);s.call(u)}}var c=Gl(e,0,!1,null,null,!1,!1,"",as);return e._reactRootContainer=c,e[Ke]=c.current,Gn(e.nodeType===8?e.parentNode:e),Ot(function(){bi(t,c,n,r)}),c}function zi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var c=di(a);s.call(c)}}bi(t,a,e,i)}else a=hp(n,t,e,i,r);return di(a)}rc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zn(t.pendingLanes);n!==0&&(hl(t,n|1),ge(t,G()),!(O&6)&&(dn=G()+500,wt()))}break;case 13:Ot(function(){var r=Xe(e,1);if(r!==null){var i=ce();Oe(r,e,1,i)}}),Ql(e,1)}};gl=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ce();Oe(t,e,134217728,n)}Ql(e,134217728)}};ic=function(e){if(e.tag===13){var t=pt(e),n=Xe(e,t);if(n!==null){var r=ce();Oe(n,e,t,r)}Ql(e,t)}};oc=function(){return D};lc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};jo=function(e,t,n){switch(t){case"input":if(mo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=yi(r);if(!i)throw Error(j(90));Is(r),mo(r,i)}}}break;case"textarea":Bs(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};Ys=Wl;Gs=Ot;var gp={usingClientEntryPoint:!1,Events:[ar,Ht,yi,Vs,Hs,Wl]},bn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vp={bundleType:bn.bundleType,version:bn.version,rendererPackageName:bn.rendererPackageName,rendererConfig:bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xs(e),e===null?null:e.stateNode},findFiberByHostInstance:bn.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{mi=Pr.inject(vp),Ue=Pr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xl(t))throw Error(j(200));return pp(e,t,null,n)};je.createRoot=function(e,t){if(!Xl(e))throw Error(j(299));var n=!1,r="",i=zu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Gl(e,1,!1,null,null,n,!1,r,i),e[Ke]=t.current,Gn(e.nodeType===8?e.parentNode:e),new Kl(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Xs(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Ot(e)};je.hydrate=function(e,t,n){if(!Ei(t))throw Error(j(200));return zi(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Xl(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=zu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Eu(t,null,e,1,n??null,i,!1,o,a),e[Ke]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ci(t)};je.render=function(e,t,n){if(!Ei(t))throw Error(j(200));return zi(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Ei(e))throw Error(j(40));return e._reactRootContainer?(Ot(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};je.unstable_batchedUpdates=Wl;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ei(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return zi(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function Pu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pu)}catch(e){console.error(e)}}Pu(),Ps.exports=je;var yp=Ps.exports,ss=yp;lo.createRoot=ss.createRoot,lo.hydrateRoot=ss.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nr.apply(this,arguments)}var lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lt||(lt={}));const cs="popstate";function xp(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return el("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fi(i)}return jp(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Mu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wp(){return Math.random().toString(36).substr(2,8)}function us(e,t){return{usr:e.state,key:e.key,idx:t}}function el(e,t,n,r){return n===void 0&&(n=null),nr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hn(t):t,{state:n,key:t&&t.key||r||wp()})}function fi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function jp(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=lt.Pop,c=null,u=h();u==null&&(u=0,a.replaceState(nr({},a.state,{idx:u}),""));function h(){return(a.state||{idx:null}).idx}function m(){s=lt.Pop;let N=h(),f=N==null?null:N-u;u=N,c&&c({action:s,location:w.location,delta:f})}function g(N,f){s=lt.Push;let d=el(w.location,N,f);u=h()+1;let p=us(d,u),v=w.createHref(d);try{a.pushState(p,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}o&&c&&c({action:s,location:w.location,delta:1})}function y(N,f){s=lt.Replace;let d=el(w.location,N,f);u=h();let p=us(d,u),v=w.createHref(d);a.replaceState(p,"",v),o&&c&&c({action:s,location:w.location,delta:0})}function x(N){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof N=="string"?N:fi(N);return d=d.replace(/ $/,"%20"),K(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return s},get location(){return e(i,a)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(cs,m),c=N,()=>{i.removeEventListener(cs,m),c=null}},createHref(N){return t(i,N)},createURL:x,encodeLocation(N){let f=x(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:y,go(N){return a.go(N)}};return w}var ds;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ds||(ds={}));function kp(e,t,n){return n===void 0&&(n="/"),Sp(e,t,n)}function Sp(e,t,n,r){let i=typeof t=="string"?hn(t):t,o=ql(i.pathname||"/",n);if(o==null)return null;let a=_u(e);Np(a);let s=null;for(let c=0;s==null&&c<a.length;++c){let u=Dp(o);s=Lp(a[c],u)}return s}function _u(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let c={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(K(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=ht([r,c.relativePath]),h=n.concat(c);o.children&&o.children.length>0&&(K(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_u(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:_p(u,o.index),routesMeta:h})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let c of Tu(o.path))i(o,a,c)}),t}function Tu(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Tu(r.join("/")),s=[];return s.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Np(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Tp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bp=/^:[\w-]+$/,Cp=3,Ep=2,zp=1,Pp=10,Mp=-2,fs=e=>e==="*";function _p(e,t){let n=e.split("/"),r=n.length;return n.some(fs)&&(r+=Mp),t&&(r+=Ep),n.filter(i=>!fs(i)).reduce((i,o)=>i+(bp.test(o)?Cp:o===""?zp:Pp),r)}function Tp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Lp(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",m=Rp({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),g=c.route;if(!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:ht([o,m.pathname]),pathnameBase:Up(ht([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=ht([o,m.pathnameBase]))}return a}function Rp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Op(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,h,m)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let w=s[m]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[m];return y&&!x?u[g]=void 0:u[g]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Op(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Mu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Dp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ql(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ip(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?hn(e):e;return{pathname:n?n.startsWith("/")?n:Fp(n,t):t,search:Ap(r),hash:$p(i)}}function Fp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function oo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lu(e,t){let n=Bp(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ru(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=hn(e):(i=nr({},e),K(!i.pathname||!i.pathname.includes("?"),oo("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),oo("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),oo("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let m=t.length-1;if(!r&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}s=m>=0?t[m]:"/"}let c=Ip(i,s),u=a&&a!=="/"&&a.endsWith("/"),h=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const ht=e=>e.join("/").replace(/\/\/+/g,"/"),Up=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ap=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$p=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Wp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ou=["post","put","patch","delete"];new Set(Ou);const Vp=["get",...Ou];new Set(Vp);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rr.apply(this,arguments)}const Jl=k.createContext(null),Hp=k.createContext(null),Ft=k.createContext(null),Pi=k.createContext(null),jt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Du=k.createContext(null);function Yp(e,t){let{relative:n}=t===void 0?{}:t;cr()||K(!1);let{basename:r,navigator:i}=k.useContext(Ft),{hash:o,pathname:a,search:s}=Fu(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:ht([r,a])),i.createHref({pathname:c,search:s,hash:o})}function cr(){return k.useContext(Pi)!=null}function ur(){return cr()||K(!1),k.useContext(Pi).location}function Iu(e){k.useContext(Ft).static||k.useLayoutEffect(e)}function Gp(){let{isDataRoute:e}=k.useContext(jt);return e?am():Qp()}function Qp(){cr()||K(!1);let e=k.useContext(Jl),{basename:t,future:n,navigator:r}=k.useContext(Ft),{matches:i}=k.useContext(jt),{pathname:o}=ur(),a=JSON.stringify(Lu(i,n.v7_relativeSplatPath)),s=k.useRef(!1);return Iu(()=>{s.current=!0}),k.useCallback(function(u,h){if(h===void 0&&(h={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let m=Ru(u,JSON.parse(a),o,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ht([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,a,o,e])}function Kp(){let{matches:e}=k.useContext(jt),t=e[e.length-1];return t?t.params:{}}function Fu(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Ft),{matches:i}=k.useContext(jt),{pathname:o}=ur(),a=JSON.stringify(Lu(i,r.v7_relativeSplatPath));return k.useMemo(()=>Ru(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function Xp(e,t){return qp(e,t)}function qp(e,t,n,r){cr()||K(!1);let{navigator:i}=k.useContext(Ft),{matches:o}=k.useContext(jt),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=ur(),h;if(t){var m;let N=typeof t=="string"?hn(t):t;c==="/"||(m=N.pathname)!=null&&m.startsWith(c)||K(!1),h=N}else h=u;let g=h.pathname||"/",y=g;if(c!=="/"){let N=c.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let x=kp(e,{pathname:y}),w=nm(x&&x.map(N=>Object.assign({},N,{params:Object.assign({},s,N.params),pathname:ht([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:ht([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,n,r);return t&&w?k.createElement(Pi.Provider,{value:{location:rr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:lt.Pop}},w):w}function Jp(){let e=lm(),t=Wp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const Zp=k.createElement(Jp,null);class em extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(jt.Provider,{value:this.props.routeContext},k.createElement(Du.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tm(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Jl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(jt.Provider,{value:t},r)}function nm(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let h=a.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);h>=0||K(!1),a=a.slice(0,Math.min(a.length,h+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<a.length;h++){let m=a[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=h),m.route.id){let{loaderData:g,errors:y}=n,x=m.route.loader&&g[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||x){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((h,m,g)=>{let y,x=!1,w=null,N=null;n&&(y=s&&m.route.id?s[m.route.id]:void 0,w=m.route.errorElement||Zp,c&&(u<0&&g===0?(sm("route-fallback"),x=!0,N=null):u===g&&(x=!0,N=m.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,g+1)),d=()=>{let p;return y?p=w:x?p=N:m.route.Component?p=k.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,k.createElement(tm,{match:m,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?k.createElement(em,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Bu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bu||{}),Uu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Uu||{});function rm(e){let t=k.useContext(Jl);return t||K(!1),t}function im(e){let t=k.useContext(Hp);return t||K(!1),t}function om(e){let t=k.useContext(jt);return t||K(!1),t}function Au(e){let t=om(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function lm(){var e;let t=k.useContext(Du),n=im(),r=Au();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function am(){let{router:e}=rm(Bu.UseNavigateStable),t=Au(Uu.UseNavigateStable),n=k.useRef(!1);return Iu(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,rr({fromRouteId:t},o)))},[e,t])}const ps={};function sm(e,t,n){ps[e]||(ps[e]=!0)}function cm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function $e(e){K(!1)}function um(e){let{basename:t="/",children:n=null,location:r,navigationType:i=lt.Pop,navigator:o,static:a=!1,future:s}=e;cr()&&K(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:o,static:a,future:rr({v7_relativeSplatPath:!1},s)}),[c,s,o,a]);typeof r=="string"&&(r=hn(r));let{pathname:h="/",search:m="",hash:g="",state:y=null,key:x="default"}=r,w=k.useMemo(()=>{let N=ql(h,c);return N==null?null:{location:{pathname:N,search:m,hash:g,state:y,key:x},navigationType:i}},[c,h,m,g,y,x,i]);return w==null?null:k.createElement(Ft.Provider,{value:u},k.createElement(Pi.Provider,{children:n,value:w}))}function dm(e){let{children:t,location:n}=e;return Xp(tl(t),n)}new Promise(()=>{});function tl(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let o=[...t,i];if(r.type===k.Fragment){n.push.apply(n,tl(r.props.children,o));return}r.type!==$e&&K(!1),!r.props.index||!r.props.children||K(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=tl(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nl.apply(this,arguments)}function fm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mm(e,t){return e.button===0&&(!t||t==="_self")&&!pm(e)}const hm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gm="6";try{window.__reactRouterVersion=gm}catch{}const vm="startTransition",ms=ld[vm];function ym(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=xp({window:i,v5Compat:!0}));let a=o.current,[s,c]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},h=k.useCallback(m=>{u&&ms?ms(()=>c(m)):c(m)},[c,u]);return k.useLayoutEffect(()=>a.listen(h),[a,h]),k.useEffect(()=>cm(r),[r]),k.createElement(um,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const xm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,R=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:c,to:u,preventScrollReset:h,viewTransition:m}=t,g=fm(t,hm),{basename:y}=k.useContext(Ft),x,w=!1;if(typeof u=="string"&&wm.test(u)&&(x=u,xm))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=ql(v.pathname,y);v.origin===p.origin&&S!=null?u=S+v.search+v.hash:w=!0}catch{}let N=Yp(u,{relative:i}),f=jm(u,{replace:a,state:s,target:c,preventScrollReset:h,relative:i,viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return k.createElement("a",nl({},g,{href:x||N,onClick:w||o?r:d,ref:n,target:c}))});var hs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(hs||(hs={}));var gs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gs||(gs={}));function jm(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=t===void 0?{}:t,c=Gp(),u=ur(),h=Fu(e,{relative:a});return k.useCallback(m=>{if(mm(m,n)){m.preventDefault();let g=r!==void 0?r:fi(u)===fi(h);c(e,{replace:g,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[u,c,h,r,i,n,e,o,a,s])}const km=()=>l.jsx("nav",{children:l.jsxs("div",{className:"nav-container",children:[l.jsx(R,{to:"/",className:"logo",children:l.jsx("img",{src:"/text-1760673746758.png",alt:"BYD Logo",className:"logo-image"})}),l.jsxs("ul",{className:"nav-menu",children:[l.jsxs("li",{className:"dropdown",children:[l.jsx(R,{to:"/models",children:"Models"}),l.jsxs("div",{className:"dropdown-content",children:[l.jsx(R,{to:"/models",children:"Dolfin Mini"}),l.jsx(R,{to:"/models",children:"Atto 2"}),l.jsx(R,{to:"/models",children:"Atto 3"}),l.jsx(R,{to:"/models",children:"Song Pro"}),l.jsx(R,{to:"/models",children:"Seal U"}),l.jsx(R,{to:"/models",children:"Leopard 7"}),l.jsx(R,{to:"/models",children:"Tang L"}),l.jsx(R,{to:"/models",children:"Radar"}),l.jsx(R,{to:"/models",children:"Shark"})]})]}),l.jsxs("li",{className:"dropdown",children:[l.jsx(R,{to:"/purchasing",children:"Purchasing"}),l.jsxs("div",{className:"dropdown-content",children:[l.jsx(R,{to:"/test-drive",children:"Test Drive"}),l.jsx(R,{to:"/locations",children:"Locations"}),l.jsx(R,{to:"/cash-purchases",children:"Cash Purchases"}),l.jsx(R,{to:"/finance-bank",children:"Finance (Bank)"}),l.jsx(R,{to:"/lease",children:"Lease"}),l.jsx(R,{to:"/finance-dealer",children:"Finance (Dealer)"}),l.jsx(R,{to:"/subscriptions",children:"Subscriptions"}),l.jsx(R,{to:"/rentals",children:"Rentals"}),l.jsx(R,{to:"/fleet-solutions",children:"Fleet & Business Solutions"})]})]}),l.jsxs("li",{className:"dropdown",children:[l.jsx(R,{to:"/ownership",children:"Ownership"}),l.jsxs("div",{className:"dropdown-content",children:[l.jsx("a",{href:"/ownership#service-maintenance",children:"Service & Maintenance"}),l.jsx("a",{href:"/ownership#roadside-assistance",children:"EM Roadside Assistance"}),l.jsx("a",{href:"/ownership#warranty",children:"Warranty"}),l.jsx("a",{href:"/ownership#membership",children:"EM Membership & Charge Cards"}),l.jsx("a",{href:"/ownership#charging-locations",children:"Charging Locations"})]})]}),l.jsx("li",{children:l.jsx(R,{to:"/technology",children:"Technology"})}),l.jsx("li",{children:l.jsx(R,{to:"/about",children:"About"})}),l.jsx("li",{children:l.jsx(R,{to:"/contact",children:"Contact"})})]})]})}),Sm=()=>l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
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
      `}),l.jsxs("footer",{children:[l.jsx("div",{className:"footer-top",children:l.jsxs("div",{className:"footer-top-content",children:[l.jsxs("div",{className:"footer-links",children:[l.jsx("a",{href:"#",children:"Privacy & Legal"}),l.jsx("a",{href:"#",children:"Cookie Policy"}),l.jsx(R,{to:"/contact",children:"Contact"})]}),l.jsxs("div",{className:"footer-social-section",children:[l.jsx("span",{className:"footer-social-label",children:"FOLLOW US"}),l.jsxs("div",{className:"footer-social",children:[l.jsx("a",{href:"#",className:"social-link","aria-label":"Facebook",children:"f"}),l.jsx("a",{href:"#",className:"social-link","aria-label":"X",children:"𝕏"}),l.jsx("a",{href:"#",className:"social-link","aria-label":"Instagram",children:"📷"}),l.jsx("a",{href:"#",className:"social-link","aria-label":"TikTok",children:"♪"}),l.jsx("a",{href:"#",className:"social-link","aria-label":"YouTube",children:"▶"})]})]})]})}),l.jsx("div",{className:"footer-bottom",children:l.jsx("div",{className:"footer-bottom-content",children:l.jsx("p",{children:"© BYD Company Ltd. All rights reserved."})})})]})]}),Nm=()=>l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        /* HERO SECTION */
        .luxury-hero {
          height: 95vh;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                      url('/HeroBackground.png') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          background-attachment: fixed;
        }

        .luxury-hero::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 250px;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.9));
        }

        .hero-content {
          z-index: 1;
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
          background: url('/bottom-bannerPC.jpg') center/cover;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
            letter-spacing: 6px;
          }

          .hero-cta-group {
            flex-direction: column;
            align-items: center;
          }

          .luxury-hero,
          .stats-section {
            background-attachment: scroll;
          }
        }
      `}),l.jsx("section",{className:"luxury-hero",children:l.jsxs("div",{className:"hero-content",children:[l.jsx("div",{className:"hero-logo",children:"Evergreen Motors"}),l.jsx("h1",{children:"Drive the Future"}),l.jsx("p",{className:"hero-tagline",children:"Where sustainable innovation meets uncompromising luxury. Experience the next generation of electric mobility at Evergreen Motors."}),l.jsxs("div",{className:"hero-cta-group",children:[l.jsx(R,{to:"/models",className:"cta-button cta-primary",children:"Explore Collection"}),l.jsx(R,{to:"/test-drive",className:"cta-button cta-secondary",children:"Schedule Test Drive"})]})]})}),l.jsx("section",{className:"stats-section"})]}),bm=()=>{k.useEffect(()=>{const t={threshold:.1,rootMargin:"0px 0px -100px 0px"},n=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&i.target.classList.add("fade-in-visible")})},t);return document.querySelectorAll(".fade-in-section").forEach(r=>n.observe(r)),()=>n.disconnect()},[]);const e=[{id:"dolphin-mini",name:"Dolphin Mini",description:"Compact elegance meets urban efficiency in this perfectly sized city electric vehicle",type:"City Electric",image:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000",price:"Starting at $28,990",range:"250 miles",acceleration:"7.5s 0-60mph"},{id:"atto-3",name:"Atto 3",description:"The benchmark electric SUV featuring e-Platform 3.0 technology and exceptional versatility",type:"Electric SUV",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",price:"Starting at $38,990",range:"260 miles",acceleration:"7.3s 0-60mph"},{id:"seal-u",name:"Seal U",description:"Premium electric sedan where sophisticated design meets exhilarating performance",type:"Luxury Sedan",image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",price:"Starting at $48,990",range:"354 miles",acceleration:"3.8s 0-60mph"},{id:"tang-l",name:"Tang L",description:"Spacious luxury with three rows of premium comfort and cutting-edge technology",type:"7-Seater SUV",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",price:"Starting at $58,990",range:"323 miles",acceleration:"4.4s 0-60mph"},{id:"han",name:"Han",description:"Flagship luxury sedan combining breathtaking design with uncompromising performance",type:"Executive Sedan",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",price:"Starting at $54,990",range:"379 miles",acceleration:"3.9s 0-60mph"},{id:"seal",name:"Seal",description:"Athletic performance sedan with ocean-inspired design and track-ready dynamics",type:"Performance Sedan",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",price:"Starting at $44,990",range:"310 miles",acceleration:"3.6s 0-60mph"}];return l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"models-hero",children:l.jsxs("div",{className:"models-hero-content",children:[l.jsx("h1",{children:"OUR COLLECTION"}),l.jsx("p",{className:"subtitle",children:"Electric Excellence"}),l.jsx("p",{children:"Discover the pinnacle of electric vehicle innovation. Each BYD model in our collection represents the perfect fusion of cutting-edge technology, sustainable design, and luxurious comfort."})]})}),l.jsxs("section",{className:"models-section fade-in-section",children:[l.jsxs("div",{className:"models-intro",children:[l.jsx("h2",{children:"The Future of Mobility"}),l.jsx("p",{children:"At Evergreen Motors, we offer an exceptional range of BYD electric vehicles — each engineered to perfection, designed to inspire, and built to transform the way you drive. Experience the difference that true innovation makes."})]}),l.jsx("div",{className:"luxury-models-grid",children:e.map(t=>l.jsxs(R,{to:`/models/${t.id}`,className:"luxury-model-card",children:[l.jsxs("div",{className:"model-image-container",children:[l.jsx("img",{src:t.image,alt:t.name}),l.jsx("div",{className:"model-type-badge",children:t.type})]}),l.jsxs("div",{className:"luxury-model-info",children:[l.jsx("h3",{className:"luxury-model-name",children:t.name}),l.jsx("p",{className:"luxury-model-description",children:t.description}),l.jsxs("div",{className:"model-specs",children:[l.jsxs("div",{className:"spec-item",children:[l.jsx("div",{className:"spec-label",children:"Range"}),l.jsx("div",{className:"spec-value",children:t.range})]}),l.jsxs("div",{className:"spec-item",children:[l.jsx("div",{className:"spec-label",children:"0-60 MPH"}),l.jsx("div",{className:"spec-value",children:t.acceleration})]})]}),l.jsx("div",{className:"model-price",children:t.price}),l.jsx("span",{className:"luxury-learn-more",children:"Explore Model"})]})]},t.id))})]})]})},Cm=()=>{const{modelId:e}=Kp();k.useEffect(()=>{window.scrollTo(0,0)},[e]);const n={"dolphin-mini":{id:"dolphin-mini",name:"Dolphin Mini",tagline:"Urban Sophistication Reimagined",description:"The Dolphin Mini represents the perfect harmony of compact design and electric efficiency. Engineered for city driving yet capable of longer journeys, this sophisticated city car delivers premium comfort, advanced technology, and exceptional range in a beautifully compact package.",type:"City Electric",image:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000",price:"Starting at $28,990",specs:{range:"250 miles",acceleration:"7.5s 0-60mph",topSpeed:"99 mph",motorPower:"150 kW",batteryCapacity:"44.9 kWh",chargingTime:"30 min (10-80%)",seating:"5 passengers",driveType:"Front-Wheel Drive"},features:["e-Platform 3.0 Architecture","Blade Battery Technology","Intelligent Cockpit System","Advanced Driver Assistance","Panoramic Sunroof","Premium Interior Materials","Wireless Phone Charging","LED Lighting System"],colors:[{name:"Pearl White",hex:"#f8f9fa"},{name:"Midnight Black",hex:"#1a1a1a"},{name:"Ocean Blue",hex:"#4a9eff"},{name:"Silver Mist",hex:"#c0c0c0"}],highlights:[{title:"Compact Excellence",description:"Perfect dimensions for urban navigation without sacrificing interior space or comfort",icon:"🏙️"},{title:"Efficient Power",description:"Optimized electric motor delivers responsive performance with exceptional efficiency",icon:"⚡"},{title:"Smart Technology",description:"Intuitive infotainment and connectivity keep you seamlessly connected",icon:"📱"}]},"atto-3":{id:"atto-3",name:"Atto 3",tagline:"The Benchmark Electric SUV",description:"The Atto 3 sets new standards for electric SUVs with its perfect blend of practicality, performance, and cutting-edge technology. Built on BYD's revolutionary e-Platform 3.0, this versatile SUV offers exceptional range, sophisticated design, and an interior that redefines comfort and innovation.",type:"Electric SUV",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",price:"Starting at $38,990",specs:{range:"260 miles",acceleration:"7.3s 0-60mph",topSpeed:"100 mph",motorPower:"150 kW",batteryCapacity:"60.5 kWh",chargingTime:"29 min (30-80%)",seating:"5 passengers",driveType:"Front-Wheel Drive"},features:["e-Platform 3.0 Technology","Blade Battery System","Panoramic Sky Window","Rotating Touchscreen Display","Voice-Activated Controls","Premium Sound System","Advanced Safety Suite","Wireless CarPlay & Android Auto"],colors:[{name:"Cosmos Black",hex:"#0a0a0a"},{name:"Surf Blue",hex:"#4a9eff"},{name:"Boulder Grey",hex:"#6c757d"},{name:"Parkour Red",hex:"#dc3545"}],highlights:[{title:"Spacious Versatility",description:"Generous cargo space and flexible seating configurations for every adventure",icon:"🎒"},{title:"Advanced Safety",description:"Comprehensive suite of driver assistance systems for confident driving",icon:"🛡️"},{title:"Exceptional Range",description:"Travel further with confidence thanks to efficient battery technology",icon:"🔋"}]},"seal-u":{id:"seal-u",name:"Seal U",tagline:"Premium Electric Sophistication",description:"The Seal U embodies the pinnacle of electric sedan luxury. With its stunning ocean-inspired design language, exhilarating performance, and advanced technology suite, this premium sedan delivers an uncompromising driving experience that seamlessly blends elegance with athletic capability.",type:"Luxury Sedan",image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",price:"Starting at $48,990",specs:{range:"354 miles",acceleration:"3.8s 0-60mph",topSpeed:"112 mph",motorPower:"390 kW",batteryCapacity:"82.5 kWh",chargingTime:"26 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["CTB Cell-to-Body Integration","Dual Motor AWD System","Adaptive Air Suspension","Premium Nappa Leather Interior","Head-Up Display","Dynaudio Sound System","Matrix LED Headlights","Advanced Climate Control"],colors:[{name:"Aurora Silver",hex:"#d4d4d4"},{name:"Deep Ocean Blue",hex:"#1e3a8a"},{name:"Quantum Grey",hex:"#4b5563"},{name:"Crystal White",hex:"#ffffff"}],highlights:[{title:"Athletic Performance",description:"Dual motors deliver exhilarating acceleration and dynamic handling",icon:"🏁"},{title:"Luxurious Comfort",description:"Premium materials and meticulous craftsmanship throughout the cabin",icon:"✨"},{title:"Extended Range",description:"Travel over 350 miles on a single charge for ultimate peace of mind",icon:"🌍"}]},"tang-l":{id:"tang-l",name:"Tang L",tagline:"Luxury Redefined for Seven",description:"The Tang L represents the ultimate expression of family luxury. This spacious three-row SUV combines cutting-edge electric technology with opulent comfort, offering seven passengers premium accommodations and an array of advanced features that make every journey extraordinary.",type:"7-Seater SUV",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",price:"Starting at $58,990",specs:{range:"323 miles",acceleration:"4.4s 0-60mph",topSpeed:"112 mph",motorPower:"380 kW",batteryCapacity:"108.8 kWh",chargingTime:"30 min (30-80%)",seating:"7 passengers",driveType:"All-Wheel Drive"},features:["Three-Row Seating","Dual Motor Performance","Premium Quilted Leather","Panoramic Glass Roof","Individual Seat Climate Control","Premium Audio System","Gesture Control","Advanced Autopilot"],colors:[{name:"Imperial Red",hex:"#8b0000"},{name:"Graphite Black",hex:"#2d3436"},{name:"Champagne Gold",hex:"#d4af37"},{name:"Celestial White",hex:"#fafafa"}],highlights:[{title:"Seven-Seat Luxury",description:"Premium comfort for every passenger across three spacious rows",icon:"👨‍👩‍👧‍👦"},{title:"Powerful Performance",description:"Dual motors provide commanding power and confident handling",icon:"💪"},{title:"Advanced Technology",description:"Cutting-edge features and connectivity throughout",icon:"🔬"}]},han:{id:"han",name:"Han",tagline:"Executive Excellence",description:"The Han flagship sedan represents the apex of BYD's engineering prowess and design philosophy. This executive-class vehicle combines breathtaking aesthetics with phenomenal performance, offering a driving experience that rivals the world's most prestigious luxury sedans while delivering zero emissions.",type:"Executive Sedan",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",price:"Starting at $54,990",specs:{range:"379 miles",acceleration:"3.9s 0-60mph",topSpeed:"115 mph",motorPower:"380 kW",batteryCapacity:"85.4 kWh",chargingTime:"25 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["Dragon Face Design Language","Executive Rear Seating","Massage Function","Ambient Lighting (31 colors)","Premium Dynaudio System","Advanced DiPilot","Ventilated & Heated Seats","Electrochromic Panoramic Roof"],colors:[{name:"Dragon Scale Grey",hex:"#708090"},{name:"Phoenix Red",hex:"#c41e3a"},{name:"Jade Green",hex:"#00a86b"},{name:"Emperor Black",hex:"#000000"}],highlights:[{title:"Flagship Design",description:"Stunning Dragon Face aesthetic that commands attention",icon:"🐉"},{title:"Executive Comfort",description:"First-class accommodations with massage and premium materials",icon:"🎩"},{title:"Record Range",description:"Nearly 380 miles of range for effortless long-distance travel",icon:"🛣️"}]},seal:{id:"seal",name:"Seal",tagline:"Performance Unleashed",description:"The Seal performance sedan delivers pure driving excitement. Inspired by the ocean's most agile creatures, this athletic sedan combines razor-sharp handling, explosive acceleration, and striking design to create a driving experience that thrills enthusiasts while maintaining everyday practicality.",type:"Performance Sedan",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",price:"Starting at $44,990",specs:{range:"310 miles",acceleration:"3.6s 0-60mph",topSpeed:"112 mph",motorPower:"390 kW",batteryCapacity:"82.5 kWh",chargingTime:"26 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["Sport-Tuned Suspension","Performance Dual Motors","Sport Seats with Bolstering","Track Mode","Performance Braking System","Sport Steering Wheel","Digital Instrument Cluster","Launch Control"],colors:[{name:"Racing Blue",hex:"#0066cc"},{name:"Shadow Black",hex:"#121212"},{name:"Silver Storm",hex:"#b8b8b8"},{name:"Carbon Grey",hex:"#3d3d3d"}],highlights:[{title:"Track-Ready Performance",description:"Sub-4-second acceleration with sport-tuned dynamics",icon:"🏎️"},{title:"Agile Handling",description:"Low center of gravity and AWD provide exceptional cornering",icon:"🌀"},{title:"Driver-Focused",description:"Every element optimized for an engaging driving experience",icon:"🎯"}]}}[e||""];return n?l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
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
      `}),l.jsx(R,{to:"/models",className:"back-link",children:"← All Models"}),l.jsx("div",{className:"model-detail-hero",children:l.jsxs("div",{className:"hero-detail-content",children:[l.jsx("div",{className:"model-type-badge-hero",children:n.type}),l.jsx("h1",{children:n.name}),l.jsx("p",{className:"hero-tagline",children:n.tagline}),l.jsx("p",{className:"hero-price",children:n.price})]})}),l.jsx("section",{className:"detail-section dark-section",children:l.jsxs("div",{className:"section-container",children:[l.jsx("h2",{className:"section-title",children:"Overview"}),l.jsx("p",{className:"description-text",style:{color:"rgba(255,255,255,0.8)"},children:n.description}),l.jsxs("div",{className:"specs-grid",children:[l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Range"}),l.jsx("div",{className:"spec-value",children:n.specs.range})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"0-60 MPH"}),l.jsx("div",{className:"spec-value",children:n.specs.acceleration})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Top Speed"}),l.jsx("div",{className:"spec-value",children:n.specs.topSpeed})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Motor Power"}),l.jsx("div",{className:"spec-value",children:n.specs.motorPower})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Battery"}),l.jsx("div",{className:"spec-value",children:n.specs.batteryCapacity})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Charging"}),l.jsx("div",{className:"spec-value",children:n.specs.chargingTime})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Seating"}),l.jsx("div",{className:"spec-value",children:n.specs.seating})]}),l.jsxs("div",{className:"spec-card",children:[l.jsx("div",{className:"spec-label",children:"Drive Type"}),l.jsx("div",{className:"spec-value",children:n.specs.driveType})]})]})]})}),l.jsx("section",{className:"detail-section light-section",children:l.jsxs("div",{className:"section-container",children:[l.jsx("h2",{className:"section-title",children:"Key Highlights"}),l.jsx("div",{className:"highlights-grid",children:n.highlights.map((r,i)=>l.jsxs("div",{className:"highlight-card",children:[l.jsx("div",{className:"highlight-icon",children:r.icon}),l.jsx("h3",{className:"highlight-title",children:r.title}),l.jsx("p",{className:"highlight-description",children:r.description})]},i))})]})}),l.jsx("section",{className:"detail-section dark-section",children:l.jsxs("div",{className:"section-container",children:[l.jsx("h2",{className:"section-title",children:"Premium Features"}),l.jsx("div",{className:"features-grid",children:n.features.map((r,i)=>l.jsx("div",{className:"feature-item",children:r},i))})]})}),l.jsx("section",{className:"detail-section light-section",children:l.jsxs("div",{className:"section-container",children:[l.jsx("h2",{className:"section-title",children:"Available Colors"}),l.jsx("div",{className:"colors-grid",children:n.colors.map((r,i)=>l.jsxs("div",{className:"color-option",children:[l.jsx("div",{className:"color-swatch",style:{backgroundColor:r.hex}}),l.jsx("div",{className:"color-name",children:r.name})]},i))})]})}),l.jsx("section",{className:"cta-section",children:l.jsxs("div",{className:"section-container",children:[l.jsxs("h2",{className:"section-title",style:{color:"#333"},children:["Experience the ",n.name]}),l.jsxs("p",{style:{fontSize:"1.3rem",color:"#666",fontFamily:"Montserrat, sans-serif",fontWeight:300},children:["Visit Evergreen Motors today and discover why the ",n.name," is redefining electric mobility"]}),l.jsxs("div",{className:"cta-buttons",children:[l.jsx(R,{to:"/test-drive",className:"cta-button cta-button-primary",children:"Schedule Test Drive"}),l.jsx(R,{to:"/contact",className:"cta-button cta-button-secondary",children:"Contact Us"})]})]})})]}):l.jsxs("div",{style:{padding:"10rem 5%",textAlign:"center",color:"white",background:"#0a0a0a",minHeight:"100vh"},children:[l.jsx("h1",{style:{fontSize:"3rem",marginBottom:"2rem"},children:"Model Not Found"}),l.jsx(R,{to:"/models",style:{color:"#4a9eff",fontSize:"1.2rem"},children:"← Back to Models"})]})},Em=()=>(k.useEffect(()=>{const e={threshold:.1,rootMargin:"0px 0px -100px 0px"},t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("fade-in-visible")})},e);return document.querySelectorAll(".fade-in-section").forEach(n=>t.observe(n)),()=>t.disconnect()},[]),l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"luxury-tech-hero",children:l.jsxs("div",{className:"hero-content",children:[l.jsx("h1",{children:"TECHNOLOGY"}),l.jsx("p",{className:"subtitle",children:"Innovation in Motion"}),l.jsx("p",{children:"At Evergreen Motors, we bring you BYD's revolutionary technology — engineered for performance, designed for sustainability, built for the future."})]})}),l.jsx("section",{className:"luxury-section platform-section fade-in-section",children:l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{className:"platform-header",children:[l.jsx("h2",{children:"e-Platform 3.0"}),l.jsx("p",{className:"platform-subtitle",children:"The foundation of next-generation electric vehicles"})]}),l.jsxs("div",{className:"tech-grid",children:[l.jsxs("div",{className:"tech-content",children:[l.jsx("span",{className:"tech-number",children:"01"}),l.jsx("h3",{children:"Safety First"}),l.jsx("p",{children:"The e-Platform 3.0 integrates ultra-safe Blade batteries directly into the chassis, forming a robust and unique body structure. This cell-to-body design enhances overall vehicle safety, improves crash protection, and maximizes structural integrity while optimizing interior space."})]}),l.jsx("div",{className:"tech-visual",children:"🛡️"})]}),l.jsxs("div",{className:"tech-grid",children:[l.jsx("div",{className:"tech-visual",children:"⚡"}),l.jsxs("div",{className:"tech-content",children:[l.jsx("span",{className:"tech-number",children:"02"}),l.jsx("h3",{children:"Unmatched Efficiency"}),l.jsx("p",{children:"Achieve ranges exceeding 620 miles on a single charge with the world's first 8-in-1 electric powertrain. This revolutionary system integrates motor, controller, reducer, on-board charger, DC converter, power distribution, battery management, and vehicle control into one seamless unit for exceptional efficiency."})]})]}),l.jsxs("div",{className:"tech-grid",children:[l.jsxs("div",{className:"tech-content",children:[l.jsx("span",{className:"tech-number",children:"03"}),l.jsx("h3",{children:"Advanced Intelligence"}),l.jsx("p",{children:"BYD's sophisticated operating system creates an intuitive, responsive driving experience. The vehicle's neural network continuously monitors environmental inputs, learning your preferences and automatically optimizing performance, comfort, and safety for your unique driving conditions."})]}),l.jsx("div",{className:"tech-visual",children:"🤖"})]}),l.jsxs("div",{className:"tech-grid",children:[l.jsx("div",{className:"tech-visual",children:"✨"}),l.jsxs("div",{className:"tech-content",children:[l.jsx("span",{className:"tech-number",children:"04"}),l.jsx("h3",{children:"Refined Aesthetics"}),l.jsx("p",{children:"Form meets function in perfect harmony. Shorter overhangs and an extended wheelbase significantly expand interior passenger space while achieving an incredible 0.21 Cd drag coefficient — one of the lowest in the industry — for enhanced range and whisper-quiet operation."})]})]})]})}),l.jsx("section",{className:"luxury-section cockpit-section fade-in-section",children:l.jsxs("div",{className:"cockpit-container",children:[l.jsxs("div",{className:"cockpit-header",children:[l.jsx("h2",{children:"Intelligent Cockpit System"}),l.jsx("p",{className:"cockpit-subtitle",children:"Your digital command center for the ultimate driving experience"})]}),l.jsxs("div",{className:"cockpit-grid",children:[l.jsxs("div",{className:"cockpit-card",children:[l.jsx("div",{className:"cockpit-icon-large",children:"🎛️"}),l.jsxs("div",{className:"cockpit-content",children:[l.jsx("h3",{children:"Total Integration"}),l.jsx("p",{children:"The BYD Intelligent Cockpit seamlessly merges your digital life with your vehicle. Experience unprecedented connectivity as your smartphone, navigation, entertainment, and vehicle controls unite in one intuitive interface."}),l.jsxs("ul",{className:"cockpit-feature-list",children:[l.jsx("li",{children:"🔄 Wireless Apple CarPlay & Android Auto"}),l.jsx("li",{children:"🎤 Voice-activated controls"}),l.jsx("li",{children:"📊 Real-time vehicle diagnostics"}),l.jsx("li",{children:"☁️ Cloud-based personalization"}),l.jsx("li",{children:"🔐 Advanced security features"})]})]})]}),l.jsxs("div",{className:"cockpit-card",children:[l.jsx("div",{className:"cockpit-icon",children:"📱"}),l.jsxs("div",{className:"cockpit-content",children:[l.jsx("h3",{children:"Seamless Connectivity"}),l.jsx("p",{children:"Advanced smartphone integration keeps you connected with intuitive touch controls and wireless charging."})]})]}),l.jsxs("div",{className:"cockpit-card",children:[l.jsx("div",{className:"cockpit-icon",children:"🗺️"}),l.jsxs("div",{className:"cockpit-content",children:[l.jsx("h3",{children:"Smart Navigation"}),l.jsx("p",{children:"Intelligent GPS with real-time traffic, automatic rerouting, and EV charging station integration."})]})]}),l.jsxs("div",{className:"cockpit-card",children:[l.jsx("div",{className:"cockpit-icon",children:"🎵"}),l.jsxs("div",{className:"cockpit-content",children:[l.jsx("h3",{children:"Premium Audio"}),l.jsx("p",{children:"Concert-quality sound system with streaming integration and spatial audio technology."})]})]}),l.jsxs("div",{className:"cockpit-card",children:[l.jsx("div",{className:"cockpit-icon",children:"🌡️"}),l.jsxs("div",{className:"cockpit-content",children:[l.jsx("h3",{children:"Climate Control"}),l.jsx("p",{children:"Multi-zone intelligent climate system that learns and adapts to your comfort preferences."})]})]})]})]})}),l.jsx("section",{className:"blade-section fade-in-section",children:l.jsxs("div",{className:"blade-split",children:[l.jsxs("div",{className:"blade-content",children:[l.jsxs("h2",{children:[l.jsx("span",{className:"highlight",children:"Blade Battery"}),l.jsx("br",{}),"Technology"]}),l.jsx("p",{children:"BYD's revolutionary Blade Battery represents a quantum leap in battery safety, performance, and longevity. This groundbreaking technology has redefined what's possible in electric vehicle power systems."}),l.jsxs("div",{className:"blade-features",children:[l.jsxs("div",{className:"blade-feature",children:[l.jsx("span",{className:"blade-feature-icon",children:"🔥"}),l.jsxs("div",{className:"blade-feature-text",children:[l.jsx("h4",{children:"Uncompromising Safety"}),l.jsx("p",{children:"Passed the nail penetration test without fire or smoke — a feat unmatched by conventional lithium batteries."})]})]}),l.jsxs("div",{className:"blade-feature",children:[l.jsx("span",{className:"blade-feature-icon",children:"📏"}),l.jsxs("div",{className:"blade-feature-text",children:[l.jsx("h4",{children:"Space Optimization"}),l.jsx("p",{children:"Unique blade-shaped design increases space utilization by 50% compared to traditional battery packs."})]})]}),l.jsxs("div",{className:"blade-feature",children:[l.jsx("span",{className:"blade-feature-icon",children:"⏱️"}),l.jsxs("div",{className:"blade-feature-text",children:[l.jsx("h4",{children:"Extended Lifespan"}),l.jsx("p",{children:"Advanced lithium iron phosphate chemistry delivers over 3,000 charge cycles with minimal degradation."})]})]}),l.jsxs("div",{className:"blade-feature",children:[l.jsx("span",{className:"blade-feature-icon",children:"🌱"}),l.jsxs("div",{className:"blade-feature-text",children:[l.jsx("h4",{children:"Eco-Friendly"}),l.jsx("p",{children:"Cobalt-free construction reduces environmental impact while maintaining exceptional performance."})]})]})]})]}),l.jsx("div",{className:"blade-visual",children:l.jsx("span",{className:"blade-visual-icon",children:"🔋"})})]})}),l.jsx("section",{className:"luxury-section nev-section fade-in-section",children:l.jsxs("div",{className:"nev-container",children:[l.jsx("h2",{children:"New Energy Vehicles"}),l.jsx("p",{className:"nev-subtitle",children:"BYD leads the global New Energy Vehicle revolution with groundbreaking innovations in battery technology, electric powertrains, and sustainable manufacturing. At Evergreen Motors, we're proud to deliver these world-class vehicles that are reshaping transportation and creating a cleaner, greener future for generations to come."}),l.jsxs("div",{className:"nev-stats",children:[l.jsxs("div",{className:"nev-stat",children:[l.jsx("div",{className:"nev-stat-number",children:"3M+"}),l.jsx("div",{className:"nev-stat-label",children:"Global NEV Sales"})]}),l.jsxs("div",{className:"nev-stat",children:[l.jsx("div",{className:"nev-stat-number",children:"70+"}),l.jsx("div",{className:"nev-stat-label",children:"Countries & Regions"})]}),l.jsxs("div",{className:"nev-stat",children:[l.jsx("div",{className:"nev-stat-number",children:"#1"}),l.jsx("div",{className:"nev-stat-label",children:"NEV Manufacturer"})]})]})]})})]})),zm=()=>(k.useEffect(()=>{const e={threshold:.1,rootMargin:"0px 0px -100px 0px"},t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("fade-in-visible")})},e);return document.querySelectorAll(".fade-in-section").forEach(n=>t.observe(n)),()=>t.disconnect()},[]),l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
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
        }

        .video-hero video {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
        }

        .story-image:hover {
          transform: scale(1.03);
          box-shadow: 0 40px 100px rgba(0,0,0,0.3);
        }

        /* Image Background Sections */
        .image-section {
          min-height: 120vh;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 5%;
          position: relative;
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
        }
      `}),l.jsx("div",{className:"video-hero",children:l.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:l.jsx("source",{src:"/About.mp4",type:"video/mp4"})})}),l.jsx("section",{className:"luxury-section story-section fade-in-section",children:l.jsxs("div",{className:"section-content",children:[l.jsx("h2",{className:"section-title",children:"Our Story"}),l.jsxs("div",{className:"story-item",children:[l.jsxs("div",{className:"story-content",children:[l.jsx("h3",{children:"The Beginning"}),l.jsx("p",{children:"Evergreen Motors was founded on a simple belief: that the future of transportation should be sustainable without sacrificing the driving experience. We saw an opportunity to bridge the gap between environmental responsibility and automotive excellence."})]}),l.jsx("div",{className:"story-image",style:{background:"url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000') center/cover"}})]}),l.jsxs("div",{className:"story-item",children:[l.jsxs("div",{className:"story-content",children:[l.jsx("h3",{children:"Growth & Innovation"}),l.jsx("p",{children:"As we expanded, we remained committed to our core values. Each new location, each partnership, and each customer relationship has been built on trust, transparency, and a shared vision for a sustainable future."})]}),l.jsx("div",{className:"story-image",style:{background:"url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000') center/cover"}})]}),l.jsxs("div",{className:"story-item",children:[l.jsxs("div",{className:"story-content",children:[l.jsx("h3",{children:"Looking Forward"}),l.jsx("p",{children:"Today, we're proud to be at the forefront of the electric vehicle revolution. But we're not done yet. We continue to innovate, expand, and refine our offerings to ensure that every customer experiences the future of driving."})]}),l.jsx("div",{className:"story-image",style:{background:"url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000') center/cover"}})]})]})}),l.jsx("section",{className:"image-section fade-in-section",style:{backgroundImage:"url('/BYD-2000_0.jpg')"},children:l.jsxs("div",{className:"image-section-content",children:[l.jsx("h2",{children:"Innovation in Motion"}),l.jsx("p",{children:"BYD's cutting-edge technology represents the pinnacle of electric vehicle engineering. From advanced battery systems to intelligent drive platforms, every innovation is designed to deliver exceptional performance while reducing environmental impact."})]})}),l.jsx("section",{className:"image-section fade-in-section",style:{backgroundImage:"url('/b9f297e0-79c0-11ef-9dff-6e499e6c2dc7.png')"},children:l.jsxs("div",{className:"image-section-content",children:[l.jsx("h2",{children:"Sustainable Future"}),l.jsx("p",{children:"We're committed to building a transportation ecosystem that prioritizes sustainability without compromise. Through strategic partnerships and technological advancement, we're making electric mobility accessible to everyone."})]})}),l.jsx("section",{className:"platform-section fade-in-section",children:l.jsxs("div",{className:"platform-container",children:[l.jsxs("div",{className:"platform-images",children:[l.jsx("div",{className:"platform-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000')"}}),l.jsx("div",{className:"platform-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000')"}}),l.jsx("div",{className:"platform-image",style:{backgroundImage:"url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000')"}})]}),l.jsxs("div",{className:"platform-text",children:[l.jsx("h2",{children:"Yisifang Platform"}),l.jsx("p",{className:"platform-subtitle",children:"(also known as the e⁴ platform)"}),l.jsx("p",{children:"The innovative distributed drive structure in the new energy vehicle industry reforms the traditional automotive power system from three dimensions: perception, decision-making, and execution."}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Full integration of vehicle perception:"})," Integrating vehicle sensors and intelligent driving sensors to achieve comprehensive perception of the vehicle environment."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Four-motor independent drive structure:"})," Self-developed, with four motors enabling independent control of each wheel, applicable to pure electric and hybrid platforms."]})]})]})]})})]})),Pm=()=>{const[e,t]=k.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,r]=k.useState("idle"),i=a=>{const{name:s,value:c}=a.target;t(u=>({...u,[s]:c}))},o=a=>{a.preventDefault(),console.log("Form submitted:",e),r("success"),setTimeout(()=>{t({name:"",email:"",phone:"",subject:"",message:""}),r("idle")},3e3)};return l.jsxs("div",{children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .luxury-contact-hero {
          min-height: 95vh;
          background: url('/contact.jpg') center/cover;
          display: flex;
          align-items: flex-start;
          padding: 12rem 8%;
          color: white;
          background-attachment: fixed;
          position: relative;
        }

        .hero-content {
          max-width: 800px;
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
      `}),l.jsx("div",{className:"luxury-contact-hero",children:l.jsx("div",{className:"hero-content",children:l.jsx("h1",{children:"CONTACT US"})})}),l.jsx("section",{className:"luxury-section",children:l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-label",children:"Get In Touch"}),l.jsx("h2",{className:"section-title",children:"Let's Connect"})]}),l.jsxs("div",{className:"contact-grid",children:[l.jsxs("div",{className:"contact-info-box",children:[l.jsx("h2",{children:"Information"}),l.jsxs("div",{className:"contact-item",children:[l.jsx("h3",{children:"Phone"}),l.jsx("p",{children:l.jsx("a",{href:"tel:+1234567890",children:"+1 (234) 567-890"})})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("h3",{children:"Email"}),l.jsx("p",{children:l.jsx("a",{href:"mailto:info@byd.com",children:"info@byd.com"})}),l.jsx("p",{children:l.jsx("a",{href:"mailto:sales@byd.com",children:"sales@byd.com"})})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("h3",{children:"Address"}),l.jsx("p",{children:"BYD Headquarters"}),l.jsx("p",{children:"3009 BYD Road"}),l.jsx("p",{children:"Shenzhen, Guangdong"}),l.jsx("p",{children:"China"})]}),l.jsxs("div",{className:"contact-item",children:[l.jsx("h3",{children:"Business Hours"}),l.jsx("p",{children:"Monday - Friday: 9:00 AM - 6:00 PM"}),l.jsx("p",{children:"Saturday: 10:00 AM - 4:00 PM"}),l.jsx("p",{children:"Sunday: Closed"})]})]}),l.jsxs("div",{className:"contact-form-box",children:[l.jsx("h2",{children:"Send Message"}),l.jsx("p",{className:"form-subtitle",children:"We'd love to hear from you. Fill out the form below and we'll be in touch shortly."}),n==="success"&&l.jsx("div",{className:"success-message",children:"✓ Message sent successfully"}),l.jsxs("form",{onSubmit:o,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"name",children:"Full Name *"}),l.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:i,required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"email",children:"Email Address *"}),l.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:i,required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"phone",children:"Phone Number"}),l.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:i})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"subject",children:"Subject *"}),l.jsxs("select",{id:"subject",name:"subject",value:e.subject,onChange:i,required:!0,children:[l.jsx("option",{value:"",children:"Select a subject"}),l.jsx("option",{value:"general",children:"General Inquiry"}),l.jsx("option",{value:"sales",children:"Sales & Purchasing"}),l.jsx("option",{value:"service",children:"Service & Maintenance"}),l.jsx("option",{value:"test-drive",children:"Schedule a Test Drive"}),l.jsx("option",{value:"fleet",children:"Fleet Solutions"}),l.jsx("option",{value:"partnership",children:"Business Partnership"}),l.jsx("option",{value:"other",children:"Other"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"message",children:"Message *"}),l.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:i,required:!0})]}),l.jsx("button",{type:"submit",className:"submit-btn",children:"SEND MESSAGE"})]})]})]})]})})]})},Mm=()=>(k.useEffect(()=>{const e=()=>{const n=window.location.hash;n&&setTimeout(()=>{const r=document.querySelector(n);r&&r.scrollIntoView({behavior:"smooth",block:"start"})},100)};e();const t=()=>{e()};return window.addEventListener("hashchange",t),()=>{window.removeEventListener("hashchange",t)}},[]),l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"luxury-ownership-hero",children:l.jsxs("div",{className:"hero-content",children:[l.jsx("h1",{children:"OWNERSHIP"}),l.jsx("p",{className:"subtitle",children:"Excellence in Every Journey"}),l.jsx("p",{children:"At Evergreen Motors, ownership is more than a transaction—it's a partnership. We're committed to providing exceptional service, support, and peace of mind throughout your entire ownership experience."})]})}),l.jsx("section",{id:"service-maintenance",className:"luxury-section service-section",children:l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{className:"service-header",children:[l.jsx("h2",{children:"Service & Maintenance"}),l.jsx("p",{className:"service-subtitle",children:"Our certified BYD technicians provide expert service to keep your electric vehicle in optimal condition using state-of-the-art diagnostic equipment and genuine parts."})]}),l.jsxs("div",{className:"service-grid",children:[l.jsxs("div",{className:"service-card",children:[l.jsx("div",{className:"service-icon",children:"🔧"}),l.jsxs("div",{className:"service-content",children:[l.jsx("h3",{className:"service-title",children:"Regular Maintenance"}),l.jsx("p",{className:"service-description",children:"Comprehensive scheduled service ensures optimal performance, efficiency, and longevity of your BYD vehicle."})]})]}),l.jsxs("div",{className:"service-card",children:[l.jsx("div",{className:"service-icon",children:"🔋"}),l.jsxs("div",{className:"service-content",children:[l.jsx("h3",{className:"service-title",children:"Battery Service"}),l.jsx("p",{className:"service-description",children:"Expert Blade Battery diagnostics, health assessments, and maintenance for peak efficiency and range."})]})]}),l.jsxs("div",{className:"service-card",children:[l.jsx("div",{className:"service-icon",children:"💻"}),l.jsxs("div",{className:"service-content",children:[l.jsx("h3",{className:"service-title",children:"Software Updates"}),l.jsx("p",{className:"service-description",children:"Latest software and system enhancements delivered seamlessly to improve features and performance."})]})]})]}),l.jsxs("div",{className:"service-schedule",children:[l.jsx("h3",{children:"Recommended Service Schedule"}),l.jsxs("div",{className:"schedule-list",children:[l.jsxs("div",{className:"schedule-item",children:[l.jsx("strong",{children:"First Service"}),l.jsx("span",{children:"10,000 miles or 12 months"})]}),l.jsxs("div",{className:"schedule-item",children:[l.jsx("strong",{children:"Regular Service"}),l.jsx("span",{children:"Every 10,000 miles or 12 months"})]}),l.jsxs("div",{className:"schedule-item",children:[l.jsx("strong",{children:"Battery Health Check"}),l.jsx("span",{children:"Annual assessment included"})]}),l.jsxs("div",{className:"schedule-item",children:[l.jsx("strong",{children:"Software Updates"}),l.jsx("span",{children:"As released by BYD"})]})]})]})]})}),l.jsx("section",{id:"roadside-assistance",className:"luxury-section roadside-section",children:l.jsxs("div",{className:"roadside-container",children:[l.jsxs("div",{className:"roadside-header",children:[l.jsx("h2",{children:"Roadside Assistance"}),l.jsx("p",{className:"roadside-subtitle",children:"Evergreen Motors Roadside Assistance provides comprehensive support 24 hours a day, 7 days a week, ensuring complete peace of mind on every journey."})]}),l.jsxs("div",{className:"roadside-cards",children:[l.jsxs("div",{className:"roadside-card",children:[l.jsx("span",{className:"roadside-icon",children:"🔧"}),l.jsx("h3",{children:"Emergency Repairs"}),l.jsx("p",{children:"On-site minor repairs and expert troubleshooting assistance to get you back on the road quickly and safely."})]}),l.jsxs("div",{className:"roadside-card",children:[l.jsx("span",{className:"roadside-icon",children:"🚗"}),l.jsx("h3",{children:"Towing Service"}),l.jsx("p",{children:"Complimentary towing to the nearest Evergreen Motors service center whenever your vehicle needs professional attention."})]}),l.jsxs("div",{className:"roadside-card",children:[l.jsx("span",{className:"roadside-icon",children:"🔋"}),l.jsx("h3",{children:"Emergency Charging"}),l.jsx("p",{children:"Mobile charging assistance delivered to your location if you unexpectedly run out of power."})]})]}),l.jsxs("div",{className:"emergency-cta",children:[l.jsx("h3",{children:"Emergency Contact"}),l.jsx("div",{className:"emergency-number",children:"1-800-EVERGREEN"}),l.jsx("p",{className:"emergency-availability",children:"Available 24/7/365"})]})]})}),l.jsx("section",{id:"warranty",className:"warranty-section",children:l.jsxs("div",{className:"warranty-split",children:[l.jsx("div",{className:"warranty-visual",children:l.jsxs("div",{className:"warranty-visual-content",children:[l.jsx("h2",{children:"Warranty Coverage"}),l.jsx("p",{children:"Evergreen Motors offers one of the most comprehensive warranty programs in the electric vehicle industry, backed by BYD's commitment to quality and your complete confidence."})]})}),l.jsx("div",{className:"warranty-content",children:l.jsxs("div",{className:"warranty-cards",children:[l.jsxs("div",{className:"warranty-card",children:[l.jsx("span",{className:"warranty-card-icon",children:"🛡️"}),l.jsx("h3",{children:"Vehicle Warranty"}),l.jsx("span",{className:"warranty-period",children:"6 Years / 150,000 Miles"}),l.jsx("p",{children:"Comprehensive coverage for the entire vehicle including all major components, systems, and workmanship."})]}),l.jsxs("div",{className:"warranty-card",children:[l.jsx("span",{className:"warranty-card-icon",children:"🔋"}),l.jsx("h3",{children:"Battery Warranty"}),l.jsx("span",{className:"warranty-period",children:"8 Years / 150,000 Miles"}),l.jsx("p",{children:"Blade Battery coverage with capacity guarantee ensuring long-term performance and reliability."})]}),l.jsxs("div",{className:"warranty-card",children:[l.jsx("span",{className:"warranty-card-icon",children:"⚡"}),l.jsx("h3",{children:"Powertrain Warranty"}),l.jsx("span",{className:"warranty-period",children:"8 Years / 150,000 Miles"}),l.jsx("p",{children:"Electric motor, drivetrain, and power electronics fully covered for your peace of mind."})]})]})})]})}),l.jsx("section",{id:"membership",className:"luxury-section membership-section",children:l.jsxs("div",{className:"membership-container",children:[l.jsxs("div",{className:"membership-header",children:[l.jsx("h2",{children:"Membership & Charge Cards"}),l.jsx("p",{className:"membership-subtitle",children:"Join the Evergreen Motors Membership program and enjoy exclusive benefits, charging discounts, and priority service at all locations."})]}),l.jsxs("div",{className:"membership-benefits",children:[l.jsxs("div",{className:"benefit-card",children:[l.jsx("span",{className:"benefit-icon",children:"⭐"}),l.jsx("h3",{children:"Priority Service"}),l.jsx("p",{children:"Skip the line with priority service appointments and expedited maintenance at all Evergreen Motors locations."})]}),l.jsxs("div",{className:"benefit-card",children:[l.jsx("span",{className:"benefit-icon",children:"🔌"}),l.jsx("h3",{children:"Charging Discounts"}),l.jsx("p",{children:"Save up to 20% on public charging networks nationwide with your exclusive member rate."})]}),l.jsxs("div",{className:"benefit-card",children:[l.jsx("span",{className:"benefit-icon",children:"🎁"}),l.jsx("h3",{children:"Exclusive Perks"}),l.jsx("p",{children:"Access to member-only events, special offers, and early access to new models and features."})]})]}),l.jsxs("div",{className:"charge-card-info",children:[l.jsx("h3",{children:"Evergreen Charge Card Benefits"}),l.jsxs("div",{className:"charge-features",children:[l.jsxs("div",{className:"charge-feature",children:[l.jsx("strong",{children:"Universal Access"}),l.jsx("span",{children:"Use at thousands of charging stations nationwide"})]}),l.jsxs("div",{className:"charge-feature",children:[l.jsx("strong",{children:"Mobile App Integration"}),l.jsx("span",{children:"Find, reserve, and pay for charging seamlessly"})]}),l.jsxs("div",{className:"charge-feature",children:[l.jsx("strong",{children:"Consolidated Billing"}),l.jsx("span",{children:"One monthly statement for all charging sessions"})]}),l.jsxs("div",{className:"charge-feature",children:[l.jsx("strong",{children:"Charging Analytics"}),l.jsx("span",{children:"Track your sessions, costs, and savings"})]})]}),l.jsxs("p",{className:"membership-cta",children:["Learn more: ",l.jsx("a",{href:"mailto:membership@evergreenmotor.com",children:"membership@evergreenmotor.com"})]})]})]})}),l.jsx("section",{id:"charging-locations",className:"luxury-section charging-section",children:l.jsxs("div",{className:"charging-container",children:[l.jsxs("div",{className:"charging-header",children:[l.jsx("h2",{children:"Charging Locations"}),l.jsx("p",{className:"charging-subtitle",children:"Access thousands of charging stations nationwide through our partnerships with major charging networks and find charging wherever you go."})]}),l.jsxs("div",{className:"charging-options",children:[l.jsxs("div",{className:"charging-option",children:[l.jsx("span",{className:"charging-option-icon",children:"⚡"}),l.jsx("h3",{children:"Fast Charging"}),l.jsx("p",{children:"DC fast charging stations for quick top-ups during your journey—perfect for long-distance travel."})]}),l.jsxs("div",{className:"charging-option",children:[l.jsx("span",{className:"charging-option-icon",children:"🏢"}),l.jsx("h3",{children:"Destination Charging"}),l.jsx("p",{children:"Level 2 chargers at hotels, restaurants, shopping centers, and entertainment venues."})]}),l.jsxs("div",{className:"charging-option",children:[l.jsx("span",{className:"charging-option-icon",children:"🏠"}),l.jsx("h3",{children:"Home Charging"}),l.jsx("p",{children:"Professional installation support for home charging solutions with expert guidance."})]})]}),l.jsx("div",{className:"map-container",children:l.jsx("iframe",{title:"Charging Locations Map",width:"100%",height:"100%",frameBorder:"0",style:{border:0},src:"https://www.openstreetmap.org/export/embed.html?bbox=-74.1%2C40.6%2C-73.9%2C40.8&layer=mapnik",allowFullScreen:!0})}),l.jsxs("div",{className:"charging-specs",children:[l.jsx("h3",{children:"Charging Speed Reference"}),l.jsxs("div",{className:"specs-grid",children:[l.jsxs("div",{className:"spec-item",children:[l.jsx("strong",{children:"Level 1 (120V)"}),l.jsx("span",{children:"3-5 miles of range per hour"})]}),l.jsxs("div",{className:"spec-item",children:[l.jsx("strong",{children:"Level 2 (240V)"}),l.jsx("span",{children:"20-30 miles of range per hour"})]}),l.jsxs("div",{className:"spec-item",children:[l.jsx("strong",{children:"DC Fast Charging"}),l.jsx("span",{children:"80% charge in 30-45 minutes"})]}),l.jsxs("div",{className:"spec-item",children:[l.jsx("strong",{children:"Ultra-Fast Charging"}),l.jsx("span",{children:"200+ miles in 15 minutes"})]})]})]})]})})]})),_m=()=>(k.useEffect(()=>{const e={threshold:.1,rootMargin:"0px 0px -100px 0px"},t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("fade-in-visible")})},e);return document.querySelectorAll(".fade-in-section").forEach(n=>t.observe(n)),()=>t.disconnect()},[]),l.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[l.jsx("style",{children:`
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
      `}),l.jsx("section",{className:"luxury-hero",children:l.jsxs("div",{className:"hero-content",children:[l.jsx("h1",{children:"PURCHASING"}),l.jsx("p",{className:"subtitle",children:"Your Path to Ownership"}),l.jsx("p",{children:"At Evergreen Motors, we offer flexible purchasing solutions designed for every lifestyle. Whether you prefer cash purchase, financing, leasing, or subscription, we're here to make your journey to electric mobility seamless and rewarding."})]})}),l.jsx("section",{id:"cash-purchases",className:"luxury-section cash-section fade-in-section",children:l.jsxs("div",{className:"section-content",children:[l.jsx("h2",{className:"section-title",children:"Cash Purchases"}),l.jsx("p",{className:"section-subtitle",children:"Simple, straightforward vehicle ownership with immediate benefits and complete freedom"}),l.jsxs("ul",{className:"benefits-list",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"No Interest Payments"}),"Own your vehicle outright without financing charges or monthly obligations"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Immediate Ownership"}),"Full ownership from day one with complete control and no restrictions"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Simplified Process"}),"Faster purchase process with minimal paperwork and no credit checks"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Better Pricing"}),"Potential for enhanced negotiating power and exclusive cash purchase incentives"]})]}),l.jsxs("div",{className:"process-box",children:[l.jsx("h3",{children:"Simple Purchase Process"}),l.jsxs("ol",{children:[l.jsx("li",{children:"Select your preferred BYD model from our showroom"}),l.jsx("li",{children:"Discuss pricing and available incentives with our sales team"}),l.jsx("li",{children:"Complete the purchase agreement and documentation"}),l.jsx("li",{children:"Arrange payment via bank transfer or certified check"}),l.jsx("li",{children:"Complete registration and drive away in your new BYD"})]})]}),l.jsxs("div",{className:"contact-cta",children:[l.jsx("p",{children:"Ready to purchase your BYD?"}),l.jsxs("p",{children:[l.jsx("a",{href:"mailto:sales@evergreenmotor.com",children:"sales@evergreenmotor.com"})," | ",l.jsx("a",{href:"tel:+1234567890",children:"+1 (234) 567-890"})]})]})]})}),l.jsx("section",{className:"luxury-section finance-section fade-in-section",children:l.jsxs("div",{className:"section-content",children:[l.jsx("h2",{className:"section-title",style:{color:"#333"},children:"Financing Options"}),l.jsx("p",{className:"section-subtitle",style:{color:"#666"},children:"Partner with leading financial institutions for competitive rates and flexible terms tailored to your budget and lifestyle"}),l.jsxs("div",{className:"luxury-cards-grid",children:[l.jsxs("div",{className:"luxury-card light-card",children:[l.jsx("div",{className:"card-icon",children:"💰"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"Bank Financing"}),l.jsx("p",{className:"card-description",children:"Access preferential interest rates through our partner banks with flexible terms from 24 to 84 months and competitive APR"})]})]}),l.jsxs("div",{className:"luxury-card light-card",children:[l.jsx("div",{className:"card-icon",children:"🏪"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"Dealer Financing"}),l.jsx("p",{className:"card-description",children:"Convenient in-house financing with competitive rates, special promotions, and personalized service from our finance team"})]})]}),l.jsxs("div",{className:"luxury-card light-card",children:[l.jsx("div",{className:"card-icon",children:"✅"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"Quick Approval"}),l.jsx("p",{className:"card-description",children:"Fast pre-approval process, often within 24 hours, to get you driving your new BYD sooner with minimal hassle"})]})]})]}),l.jsxs("div",{className:"process-box",style:{background:"rgba(74, 158, 255, 0.05)",border:"1px solid rgba(74, 158, 255, 0.2)"},children:[l.jsx("h3",{style:{color:"#4a9eff"},children:"Financing Process"}),l.jsxs("ol",{style:{color:"#333"},children:[l.jsx("li",{children:"Submit financing application to partner bank or dealer"}),l.jsx("li",{children:"Receive pre-approval and competitive rate quote within 24 hours"}),l.jsx("li",{children:"Select your BYD vehicle with your approved budget"}),l.jsx("li",{children:"Finalize loan terms and complete all documentation"}),l.jsx("li",{children:"Take delivery of your new electric vehicle"})]})]}),l.jsxs("div",{className:"contact-cta",style:{background:"rgba(74, 158, 255, 0.05)",border:"1px solid rgba(74, 158, 255, 0.2)"},children:[l.jsx("p",{style:{color:"#333"},children:"For financing information, contact:"}),l.jsx("p",{children:l.jsx("a",{href:"mailto:finance@evergreenmotor.com",children:"finance@evergreenmotor.com"})})]})]})}),l.jsx("section",{className:"luxury-section lease-section fade-in-section",children:l.jsxs("div",{className:"section-content",children:[l.jsx("h2",{className:"section-title",children:"Leasing Options"}),l.jsx("p",{className:"section-subtitle",children:"Drive the latest BYD technology with flexible lease terms and enjoy hassle-free ownership with lower monthly payments"}),l.jsxs("ul",{className:"benefits-list",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Lower Monthly Payments"}),"Pay significantly less per month compared to traditional financing options"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Latest Technology"}),"Upgrade to newer models every few years and always drive the newest features"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Warranty Coverage"}),"Most leases are fully covered by manufacturer warranty for peace of mind"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Tax Benefits"}),"Potential business tax deductions for qualified business use"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Flexibility"}),"Simple return process at lease end or option to purchase your vehicle"]})]}),l.jsxs("div",{className:"luxury-cards-grid",children:[l.jsxs("div",{className:"luxury-card",children:[l.jsx("div",{className:"card-icon",children:"24"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"24-Month Lease"}),l.jsx("p",{className:"card-description",children:"Short-term flexibility perfect for those who want the latest models and newest technology every two years"})]})]}),l.jsxs("div",{className:"luxury-card",children:[l.jsx("div",{className:"card-icon",children:"36"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"36-Month Lease"}),l.jsx("p",{className:"card-description",children:"Most popular option with balanced payments and optimal term length for the perfect ownership experience"})]})]}),l.jsxs("div",{className:"luxury-card",children:[l.jsx("div",{className:"card-icon",children:"48"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"48-Month Lease"}),l.jsx("p",{className:"card-description",children:"Lowest monthly payments with extended term for maximum affordability and long-term budget planning"})]})]})]}),l.jsxs("div",{className:"contact-cta",children:[l.jsx("p",{children:"Contact us for personalized lease quotes:"}),l.jsx("p",{children:l.jsx("a",{href:"mailto:lease@evergreenmotor.com",children:"lease@evergreenmotor.com"})})]})]})}),l.jsx("section",{className:"luxury-section fleet-section fade-in-section",children:l.jsxs("div",{className:"section-content",children:[l.jsx("h2",{className:"section-title",style:{color:"#333"},children:"Fleet & Business Solutions"}),l.jsx("p",{className:"section-subtitle",style:{color:"#666"},children:"Transform your business fleet with BYD electric vehicles and dramatically reduce operational costs while meeting sustainability goals"}),l.jsxs("div",{className:"luxury-cards-grid",children:[l.jsxs("div",{className:"luxury-card light-card",children:[l.jsx("div",{className:"card-icon",children:"💼"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"Corporate Fleets"}),l.jsx("p",{className:"card-description",children:"Volume pricing and dedicated fleet management support for your organization with customized solutions"})]})]}),l.jsxs("div",{className:"luxury-card light-card",children:[l.jsx("div",{className:"card-icon",children:"🚚"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"Commercial Vehicles"}),l.jsx("p",{className:"card-description",children:"Electric vans and trucks perfect for delivery and logistics operations with lower operating costs"})]})]}),l.jsxs("div",{className:"luxury-card light-card",children:[l.jsx("div",{className:"card-icon",children:"🏢"}),l.jsxs("div",{className:"card-content",children:[l.jsx("h3",{className:"card-title",children:"Government Solutions"}),l.jsx("p",{className:"card-description",children:"Special programs designed specifically for government and municipal fleets with competitive pricing"})]})]})]}),l.jsxs("ul",{className:"benefits-list",style:{background:"rgba(74, 158, 255, 0.05)",border:"1px solid rgba(74, 158, 255, 0.2)"},children:[l.jsxs("li",{style:{color:"#333"},children:[l.jsx("strong",{style:{color:"#4a9eff"},children:"Lower Operating Costs"}),"Reduced fuel and maintenance expenses with up to 70% savings on operating costs"]}),l.jsxs("li",{style:{color:"#333"},children:[l.jsx("strong",{style:{color:"#4a9eff"},children:"Tax Incentives"}),"Federal and state EV tax credits can significantly reduce acquisition costs"]}),l.jsxs("li",{style:{color:"#333"},children:[l.jsx("strong",{style:{color:"#4a9eff"},children:"Sustainability Goals"}),"Meet corporate environmental targets and reduce your carbon footprint"]}),l.jsxs("li",{style:{color:"#333"},children:[l.jsx("strong",{style:{color:"#4a9eff"},children:"Fleet Management"}),"Comprehensive fleet management services and dedicated support team"]})]}),l.jsxs("div",{className:"contact-cta",style:{background:"rgba(74, 158, 255, 0.05)",border:"1px solid rgba(74, 158, 255, 0.2)"},children:[l.jsx("p",{style:{color:"#333"},children:"Contact our fleet specialists:"}),l.jsx("p",{children:l.jsx("a",{href:"mailto:fleet@evergreenmotor.com",children:"fleet@evergreenmotor.com"})})]})]})})]})),Tm=()=>{const{pathname:e,hash:t}=ur();return k.useEffect(()=>{t?setTimeout(()=>{const n=document.querySelector(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},100):window.scrollTo(0,0)},[e,t]),null},Lm=()=>l.jsxs(ym,{children:[l.jsx(Tm,{}),l.jsxs("div",{className:"App",children:[l.jsx(km,{}),l.jsxs(dm,{children:[l.jsx($e,{path:"/",element:l.jsx(Nm,{})}),l.jsx($e,{path:"/models",element:l.jsx(bm,{})}),l.jsx($e,{path:"/models/:modelId",element:l.jsx(Cm,{})}),l.jsx($e,{path:"/technology",element:l.jsx(Em,{})}),l.jsx($e,{path:"/about",element:l.jsx(zm,{})}),l.jsx($e,{path:"/contact",element:l.jsx(Pm,{})}),l.jsx($e,{path:"/ownership",element:l.jsx(Mm,{})}),l.jsx($e,{path:"/purchasing",element:l.jsx(_m,{})})]}),l.jsx(Sm,{})]})]}),Rm=lo.createRoot(document.getElementById("root"));Rm.render(l.jsx(Es.StrictMode,{children:l.jsx(Lm,{})}));
