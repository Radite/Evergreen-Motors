function hd(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function gd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _l={exports:{}},ki={},Bl={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hn=Symbol.for("react.element"),xd=Symbol.for("react.portal"),vd=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),bd=Symbol.for("react.provider"),jd=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Sd=Symbol.for("react.memo"),Cd=Symbol.for("react.lazy"),ms=Symbol.iterator;function Ed(e){return e===null||typeof e!="object"?null:(e=ms&&e[ms]||e["@@iterator"],typeof e=="function"?e:null)}var Il={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rl=Object.assign,Ol={};function br(e,t,r){this.props=e,this.context=t,this.refs=Ol,this.updater=r||Il}br.prototype.isReactComponent={};br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Al(){}Al.prototype=br.prototype;function ho(e,t,r){this.props=e,this.context=t,this.refs=Ol,this.updater=r||Il}var go=ho.prototype=new Al;go.constructor=ho;Rl(go,br.prototype);go.isPureReactComponent=!0;var fs=Array.isArray,Fl=Object.prototype.hasOwnProperty,xo={current:null},Ul={key:!0,ref:!0,__self:!0,__source:!0};function Yl(e,t,r){var n,i={},o=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Fl.call(t,n)&&!Ul.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:hn,type:e,key:o,ref:s,props:i,_owner:xo.current}}function zd(e,t){return{$$typeof:hn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vo(e){return typeof e=="object"&&e!==null&&e.$$typeof===hn}function Pd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var ps=/\/+/g;function Ui(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pd(""+e.key):t.toString(36)}function Fn(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case hn:case xd:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+Ui(s,0):n,fs(i)?(r="",e!=null&&(r=e.replace(ps,"$&/")+"/"),Fn(i,t,r,"",function(u){return u})):i!=null&&(vo(i)&&(i=zd(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ps,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",fs(e))for(var l=0;l<e.length;l++){o=e[l];var c=n+Ui(o,l);s+=Fn(o,t,r,c,i)}else if(c=Ed(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=n+Ui(o,l++),s+=Fn(o,t,r,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function kn(e,t,r){if(e==null)return e;var n=[],i=0;return Fn(e,n,"","",function(o){return t.call(r,o,i++)}),n}function Dd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Un={transition:null},Td={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Un,ReactCurrentOwner:xo};function $l(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:kn,forEach:function(e,t,r){kn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return kn(e,function(){t++}),t},toArray:function(e){return kn(e,function(t){return t})||[]},only:function(e){if(!vo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=br;B.Fragment=vd;B.Profiler=wd;B.PureComponent=ho;B.StrictMode=yd;B.Suspense=Nd;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Td;B.act=$l;B.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Rl({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=xo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Fl.call(t,c)&&!Ul.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:hn,type:e.type,key:i,ref:o,props:n,_owner:s}};B.createContext=function(e){return e={$$typeof:jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bd,_context:e},e.Consumer=e};B.createElement=Yl;B.createFactory=function(e){var t=Yl.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:kd,render:e}};B.isValidElement=vo;B.lazy=function(e){return{$$typeof:Cd,_payload:{_status:-1,_result:e},_init:Dd}};B.memo=function(e,t){return{$$typeof:Sd,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Un.transition;Un.transition={};try{e()}finally{Un.transition=t}};B.unstable_act=$l;B.useCallback=function(e,t){return xe.current.useCallback(e,t)};B.useContext=function(e){return xe.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};B.useEffect=function(e,t){return xe.current.useEffect(e,t)};B.useId=function(){return xe.current.useId()};B.useImperativeHandle=function(e,t,r){return xe.current.useImperativeHandle(e,t,r)};B.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return xe.current.useMemo(e,t)};B.useReducer=function(e,t,r){return xe.current.useReducer(e,t,r)};B.useRef=function(e){return xe.current.useRef(e)};B.useState=function(e){return xe.current.useState(e)};B.useSyncExternalStore=function(e,t,r){return xe.current.useSyncExternalStore(e,t,r)};B.useTransition=function(){return xe.current.useTransition()};B.version="18.3.1";Bl.exports=B;var x=Bl.exports;const Wl=gd(x),Md=hd({__proto__:null,default:Wl},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=x,_d=Symbol.for("react.element"),Bd=Symbol.for("react.fragment"),Id=Object.prototype.hasOwnProperty,Rd=Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Od={key:!0,ref:!0,__self:!0,__source:!0};function Hl(e,t,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Id.call(t,n)&&!Od.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:_d,type:e,key:o,ref:s,props:i,_owner:Rd.current}}ki.Fragment=Bd;ki.jsx=Hl;ki.jsxs=Hl;_l.exports=ki;var a=_l.exports,ha={},Vl={exports:{}},ze={},ql={exports:{}},Gl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,M){var _=S.length;S.push(M);e:for(;0<_;){var G=_-1>>>1,X=S[G];if(0<i(X,M))S[G]=M,S[_]=X,_=G;else break e}}function r(S){return S.length===0?null:S[0]}function n(S){if(S.length===0)return null;var M=S[0],_=S.pop();if(_!==M){S[0]=_;e:for(var G=0,X=S.length,Gt=X>>>1;G<Gt;){var Dt=2*(G+1)-1,Fi=S[Dt],Tt=Dt+1,jn=S[Tt];if(0>i(Fi,_))Tt<X&&0>i(jn,Fi)?(S[G]=jn,S[Tt]=_,G=Tt):(S[G]=Fi,S[Dt]=_,G=Dt);else if(Tt<X&&0>i(jn,_))S[G]=jn,S[Tt]=_,G=Tt;else break e}}return M}function i(S,M){var _=S.sortIndex-M.sortIndex;return _!==0?_:S.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],h=1,f=null,g=3,w=!1,b=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var M=r(u);M!==null;){if(M.callback===null)n(u);else if(M.startTime<=S)n(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=r(u)}}function v(S){if(y=!1,p(S),!b)if(r(c)!==null)b=!0,U(N);else{var M=r(u);M!==null&&pe(v,M.startTime-S)}}function N(S,M){b=!1,y&&(y=!1,m(D),D=-1),w=!0;var _=g;try{for(p(M),f=r(c);f!==null&&(!(f.expirationTime>M)||S&&!ae());){var G=f.callback;if(typeof G=="function"){f.callback=null,g=f.priorityLevel;var X=G(f.expirationTime<=M);M=e.unstable_now(),typeof X=="function"?f.callback=X:f===r(c)&&n(c),p(M)}else n(c);f=r(c)}if(f!==null)var Gt=!0;else{var Dt=r(u);Dt!==null&&pe(v,Dt.startTime-M),Gt=!1}return Gt}finally{f=null,g=_,w=!1}}var P=!1,z=null,D=-1,A=5,L=-1;function ae(){return!(e.unstable_now()-L<A)}function Qe(){if(z!==null){var S=e.unstable_now();L=S;var M=!0;try{M=z(!0,S)}finally{M?T():(P=!1,z=null)}}else P=!1}var T;if(typeof d=="function")T=function(){d(Qe)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,E=O.port2;O.port1.onmessage=Qe,T=function(){E.postMessage(null)}}else T=function(){k(Qe,0)};function U(S){z=S,P||(P=!0,T())}function pe(S,M){D=k(function(){S(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,U(N))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(S){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var _=g;g=M;try{return S()}finally{g=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,M){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var _=g;g=S;try{return M()}finally{g=_}},e.unstable_scheduleCallback=function(S,M,_){var G=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?G+_:G):_=G,S){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=_+X,S={id:h++,callback:M,priorityLevel:S,startTime:_,expirationTime:X,sortIndex:-1},_>G?(S.sortIndex=_,t(u,S),r(c)===null&&S===r(u)&&(y?(m(D),D=-1):y=!0,pe(v,_-G))):(S.sortIndex=X,t(c,S),b||w||(b=!0,U(N))),S},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(S){var M=g;return function(){var _=g;g=M;try{return S.apply(this,arguments)}finally{g=_}}}})(Gl);ql.exports=Gl;var Ad=ql.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=x,Ee=Ad;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ql=new Set,Qr={};function Ht(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(Qr[e]=t,e=0;e<t.length;e++)Ql.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ga=Object.prototype.hasOwnProperty,Ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hs={},gs={};function Yd(e){return ga.call(gs,e)?!0:ga.call(hs,e)?!1:Ud.test(e)?gs[e]=!0:(hs[e]=!0,!1)}function $d(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wd(e,t,r,n){if(t===null||typeof t>"u"||$d(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,r,n,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var yo=/[\-:]([a-z])/g;function wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yo,wo);ce[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yo,wo);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yo,wo);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function bo(e,t,r,n){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wd(t,r,i,n)&&(r=null),n||i===null?Yd(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var at=Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nn=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),jo=Symbol.for("react.strict_mode"),xa=Symbol.for("react.profiler"),Kl=Symbol.for("react.provider"),Xl=Symbol.for("react.context"),ko=Symbol.for("react.forward_ref"),va=Symbol.for("react.suspense"),ya=Symbol.for("react.suspense_list"),No=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),Jl=Symbol.for("react.offscreen"),xs=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=xs&&e[xs]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Yi;function Ir(e){if(Yi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Yi=t&&t[1]||""}return`
`+Yi+e}var $i=!1;function Wi(e,t){if(!e||$i)return"";$i=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{$i=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Ir(e):""}function Hd(e){switch(e.tag){case 5:return Ir(e.type);case 16:return Ir("Lazy");case 13:return Ir("Suspense");case 19:return Ir("SuspenseList");case 0:case 2:case 15:return e=Wi(e.type,!1),e;case 11:return e=Wi(e.type.render,!1),e;case 1:return e=Wi(e.type,!0),e;default:return""}}function wa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Kt:return"Portal";case xa:return"Profiler";case jo:return"StrictMode";case va:return"Suspense";case ya:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xl:return(e.displayName||"Context")+".Consumer";case Kl:return(e._context.displayName||"Context")+".Provider";case ko:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case No:return t=e.displayName||null,t!==null?t:wa(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return wa(e(t))}catch{}}return null}function Vd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wa(t);case 8:return t===jo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qd(e){var t=Zl(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sn(e){e._valueTracker||(e._valueTracker=qd(e))}function ec(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Zl(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Jn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ba(e,t){var r=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function vs(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Nt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tc(e,t){t=t.checked,t!=null&&bo(e,"checked",t,!1)}function ja(e,t){tc(e,t);var r=Nt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ka(e,t.type,r):t.hasOwnProperty("defaultValue")&&ka(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ys(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ka(e,t,r){(t!=="number"||Jn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Rr=Array.isArray;function lr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Nt(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ws(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(j(92));if(Rr(r)){if(1<r.length)throw Error(j(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Nt(r)}}function rc(e,t){var r=Nt(t.value),n=Nt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function bs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cn,ic=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cn=Cn||document.createElement("div"),Cn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gd=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(e){Gd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fr[t]=Fr[e]})});function ac(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Fr.hasOwnProperty(e)&&Fr[e]?(""+t).trim():t+"px"}function oc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=ac(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Qd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ca(e,t){if(t){if(Qd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ea(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var za=null;function So(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,cr=null,ur=null;function js(e){if(e=vn(e)){if(typeof Pa!="function")throw Error(j(280));var t=e.stateNode;t&&(t=zi(t),Pa(e.stateNode,e.type,t))}}function sc(e){cr?ur?ur.push(e):ur=[e]:cr=e}function lc(){if(cr){var e=cr,t=ur;if(ur=cr=null,js(e),t)for(e=0;e<t.length;e++)js(t[e])}}function cc(e,t){return e(t)}function uc(){}var Hi=!1;function dc(e,t,r){if(Hi)return e(t,r);Hi=!0;try{return cc(e,t,r)}finally{Hi=!1,(cr!==null||ur!==null)&&(uc(),lc())}}function Xr(e,t){var r=e.stateNode;if(r===null)return null;var n=zi(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(j(231,t,typeof r));return r}var Da=!1;if(tt)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Da=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Da=!1}function Kd(e,t,r,n,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(h){this.onError(h)}}var Ur=!1,Zn=null,ei=!1,Ta=null,Xd={onError:function(e){Ur=!0,Zn=e}};function Jd(e,t,r,n,i,o,s,l,c){Ur=!1,Zn=null,Kd.apply(Xd,arguments)}function Zd(e,t,r,n,i,o,s,l,c){if(Jd.apply(this,arguments),Ur){if(Ur){var u=Zn;Ur=!1,Zn=null}else throw Error(j(198));ei||(ei=!0,Ta=u)}}function Vt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function mc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ks(e){if(Vt(e)!==e)throw Error(j(188))}function em(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(j(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return ks(i),e;if(o===n)return ks(i),t;o=o.sibling}throw Error(j(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s)throw Error(j(189))}}if(r.alternate!==n)throw Error(j(190))}if(r.tag!==3)throw Error(j(188));return r.stateNode.current===r?e:t}function fc(e){return e=em(e),e!==null?pc(e):null}function pc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pc(e);if(t!==null)return t;e=e.sibling}return null}var hc=Ee.unstable_scheduleCallback,Ns=Ee.unstable_cancelCallback,tm=Ee.unstable_shouldYield,rm=Ee.unstable_requestPaint,K=Ee.unstable_now,nm=Ee.unstable_getCurrentPriorityLevel,Co=Ee.unstable_ImmediatePriority,gc=Ee.unstable_UserBlockingPriority,ti=Ee.unstable_NormalPriority,im=Ee.unstable_LowPriority,xc=Ee.unstable_IdlePriority,Ni=null,qe=null;function am(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:lm,om=Math.log,sm=Math.LN2;function lm(e){return e>>>=0,e===0?32:31-(om(e)/sm|0)|0}var En=64,zn=4194304;function Or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=Or(l):(o&=s,o!==0&&(n=Or(o)))}else s=r&~i,s!==0?n=Or(s):o!==0&&(n=Or(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Fe(t),i=1<<r,n|=e[r],t&=~i;return n}function cm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function um(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Fe(o),l=1<<s,c=i[s];c===-1?(!(l&r)||l&n)&&(i[s]=cm(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Ma(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vc(){var e=En;return En<<=1,!(En&4194240)&&(En=64),e}function Vi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function gn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=r}function dm(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Fe(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function Eo(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Fe(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var R=0;function yc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wc,zo,bc,jc,kc,La=!1,Pn=[],ht=null,gt=null,xt=null,Jr=new Map,Zr=new Map,ct=[],mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ss(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Pr(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=vn(t),t!==null&&zo(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fm(e,t,r,n,i){switch(t){case"focusin":return ht=Pr(ht,e,t,r,n,i),!0;case"dragenter":return gt=Pr(gt,e,t,r,n,i),!0;case"mouseover":return xt=Pr(xt,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Jr.set(o,Pr(Jr.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Zr.set(o,Pr(Zr.get(o)||null,e,t,r,n,i)),!0}return!1}function Nc(e){var t=Bt(e.target);if(t!==null){var r=Vt(t);if(r!==null){if(t=r.tag,t===13){if(t=mc(r),t!==null){e.blockedOn=t,kc(e.priority,function(){bc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=_a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);za=n,r.target.dispatchEvent(n),za=null}else return t=vn(r),t!==null&&zo(t),e.blockedOn=r,!1;t.shift()}return!0}function Cs(e,t,r){Yn(e)&&r.delete(t)}function pm(){La=!1,ht!==null&&Yn(ht)&&(ht=null),gt!==null&&Yn(gt)&&(gt=null),xt!==null&&Yn(xt)&&(xt=null),Jr.forEach(Cs),Zr.forEach(Cs)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,La||(La=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,pm)))}function en(e){function t(i){return Dr(i,e)}if(0<Pn.length){Dr(Pn[0],e);for(var r=1;r<Pn.length;r++){var n=Pn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(ht!==null&&Dr(ht,e),gt!==null&&Dr(gt,e),xt!==null&&Dr(xt,e),Jr.forEach(t),Zr.forEach(t),r=0;r<ct.length;r++)n=ct[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<ct.length&&(r=ct[0],r.blockedOn===null);)Nc(r),r.blockedOn===null&&ct.shift()}var dr=at.ReactCurrentBatchConfig,ni=!0;function hm(e,t,r,n){var i=R,o=dr.transition;dr.transition=null;try{R=1,Po(e,t,r,n)}finally{R=i,dr.transition=o}}function gm(e,t,r,n){var i=R,o=dr.transition;dr.transition=null;try{R=4,Po(e,t,r,n)}finally{R=i,dr.transition=o}}function Po(e,t,r,n){if(ni){var i=_a(e,t,r,n);if(i===null)ra(e,t,n,ii,r),Ss(e,n);else if(fm(i,e,t,r,n))n.stopPropagation();else if(Ss(e,n),t&4&&-1<mm.indexOf(e)){for(;i!==null;){var o=vn(i);if(o!==null&&wc(o),o=_a(e,t,r,n),o===null&&ra(e,t,n,ii,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else ra(e,t,n,null,r)}}var ii=null;function _a(e,t,r,n){if(ii=null,e=So(n),e=Bt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=mc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ii=e,null}function Sc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nm()){case Co:return 1;case gc:return 4;case ti:case im:return 16;case xc:return 536870912;default:return 16}default:return 16}}var dt=null,Do=null,$n=null;function Cc(){if($n)return $n;var e,t=Do,r=t.length,n,i="value"in dt?dt.value:dt.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[o-n];n++);return $n=i.slice(e,1<n?1-n:void 0)}function Wn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function Es(){return!1}function Pe(e){function t(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Dn:Es,this.isPropagationStopped=Es,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=Pe(jr),xn=q({},jr,{view:0,detail:0}),xm=Pe(xn),qi,Gi,Tr,Si=q({},xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(qi=e.screenX-Tr.screenX,Gi=e.screenY-Tr.screenY):Gi=qi=0,Tr=e),qi)},movementY:function(e){return"movementY"in e?e.movementY:Gi}}),zs=Pe(Si),vm=q({},Si,{dataTransfer:0}),ym=Pe(vm),wm=q({},xn,{relatedTarget:0}),Qi=Pe(wm),bm=q({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),jm=Pe(bm),km=q({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nm=Pe(km),Sm=q({},jr,{data:0}),Ps=Pe(Sm),Cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zm[e])?!!t[e]:!1}function Mo(){return Pm}var Dm=q({},xn,{key:function(e){if(e.key){var t=Cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Em[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mo,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tm=Pe(Dm),Mm=q({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ds=Pe(Mm),Lm=q({},xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mo}),_m=Pe(Lm),Bm=q({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Im=Pe(Bm),Rm=q({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=Pe(Rm),Am=[9,13,27,32],Lo=tt&&"CompositionEvent"in window,Yr=null;tt&&"documentMode"in document&&(Yr=document.documentMode);var Fm=tt&&"TextEvent"in window&&!Yr,Ec=tt&&(!Lo||Yr&&8<Yr&&11>=Yr),Ts=" ",Ms=!1;function zc(e,t){switch(e){case"keyup":return Am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function Um(e,t){switch(e){case"compositionend":return Pc(t);case"keypress":return t.which!==32?null:(Ms=!0,Ts);case"textInput":return e=t.data,e===Ts&&Ms?null:e;default:return null}}function Ym(e,t){if(Jt)return e==="compositionend"||!Lo&&zc(e,t)?(e=Cc(),$n=Do=dt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ec&&t.locale!=="ko"?null:t.data;default:return null}}var $m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$m[e.type]:t==="textarea"}function Dc(e,t,r,n){sc(n),t=ai(t,"onChange"),0<t.length&&(r=new To("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var $r=null,tn=null;function Wm(e){Uc(e,0)}function Ci(e){var t=tr(e);if(ec(t))return e}function Hm(e,t){if(e==="change")return t}var Tc=!1;if(tt){var Ki;if(tt){var Xi="oninput"in document;if(!Xi){var _s=document.createElement("div");_s.setAttribute("oninput","return;"),Xi=typeof _s.oninput=="function"}Ki=Xi}else Ki=!1;Tc=Ki&&(!document.documentMode||9<document.documentMode)}function Bs(){$r&&($r.detachEvent("onpropertychange",Mc),tn=$r=null)}function Mc(e){if(e.propertyName==="value"&&Ci(tn)){var t=[];Dc(t,tn,e,So(e)),dc(Wm,t)}}function Vm(e,t,r){e==="focusin"?(Bs(),$r=t,tn=r,$r.attachEvent("onpropertychange",Mc)):e==="focusout"&&Bs()}function qm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ci(tn)}function Gm(e,t){if(e==="click")return Ci(t)}function Qm(e,t){if(e==="input"||e==="change")return Ci(t)}function Km(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Km;function rn(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!ga.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function Is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rs(e,t){var r=Is(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Is(r)}}function Lc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _c(){for(var e=window,t=Jn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Jn(e.document)}return t}function _o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xm(e){var t=_c(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Lc(r.ownerDocument.documentElement,r)){if(n!==null&&_o(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=Rs(r,o);var s=Rs(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jm=tt&&"documentMode"in document&&11>=document.documentMode,Zt=null,Ba=null,Wr=null,Ia=!1;function Os(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ia||Zt==null||Zt!==Jn(n)||(n=Zt,"selectionStart"in n&&_o(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Wr&&rn(Wr,n)||(Wr=n,n=ai(Ba,"onSelect"),0<n.length&&(t=new To("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Zt)))}function Tn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var er={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},Ji={},Bc={};tt&&(Bc=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Ei(e){if(Ji[e])return Ji[e];if(!er[e])return e;var t=er[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Bc)return Ji[e]=t[r];return e}var Ic=Ei("animationend"),Rc=Ei("animationiteration"),Oc=Ei("animationstart"),Ac=Ei("transitionend"),Fc=new Map,As="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){Fc.set(e,t),Ht(t,[e])}for(var Zi=0;Zi<As.length;Zi++){var ea=As[Zi],Zm=ea.toLowerCase(),ef=ea[0].toUpperCase()+ea.slice(1);Ct(Zm,"on"+ef)}Ct(Ic,"onAnimationEnd");Ct(Rc,"onAnimationIteration");Ct(Oc,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(Ac,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Fs(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Zd(n,t,void 0,e),e.currentTarget=null}function Uc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Fs(i,l,u),o=c}else for(s=0;s<n.length;s++){if(l=n[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Fs(i,l,u),o=c}}}if(ei)throw e=Ta,ei=!1,Ta=null,e}function Y(e,t){var r=t[Ua];r===void 0&&(r=t[Ua]=new Set);var n=e+"__bubble";r.has(n)||(Yc(t,e,2,!1),r.add(n))}function ta(e,t,r){var n=0;t&&(n|=4),Yc(r,e,n,t)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function nn(e){if(!e[Mn]){e[Mn]=!0,Ql.forEach(function(r){r!=="selectionchange"&&(tf.has(r)||ta(r,!1,e),ta(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mn]||(t[Mn]=!0,ta("selectionchange",!1,t))}}function Yc(e,t,r,n){switch(Sc(t)){case 1:var i=hm;break;case 4:i=gm;break;default:i=Po}r=i.bind(null,t,r,e),i=void 0,!Da||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function ra(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Bt(l),s===null)return;if(c=s.tag,c===5||c===6){n=o=s;continue e}l=l.parentNode}}n=n.return}dc(function(){var u=o,h=So(r),f=[];e:{var g=Fc.get(e);if(g!==void 0){var w=To,b=e;switch(e){case"keypress":if(Wn(r)===0)break e;case"keydown":case"keyup":w=Tm;break;case"focusin":b="focus",w=Qi;break;case"focusout":b="blur",w=Qi;break;case"beforeblur":case"afterblur":w=Qi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ym;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=_m;break;case Ic:case Rc:case Oc:w=jm;break;case Ac:w=Im;break;case"scroll":w=xm;break;case"wheel":w=Om;break;case"copy":case"cut":case"paste":w=Nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ds}var y=(t&4)!==0,k=!y&&e==="scroll",m=y?g!==null?g+"Capture":null:g;y=[];for(var d=u,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,m!==null&&(v=Xr(d,m),v!=null&&y.push(an(d,v,p)))),k)break;d=d.return}0<y.length&&(g=new w(g,b,null,r,h),f.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&r!==za&&(b=r.relatedTarget||r.fromElement)&&(Bt(b)||b[rt]))break e;if((w||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,w?(b=r.relatedTarget||r.toElement,w=u,b=b?Bt(b):null,b!==null&&(k=Vt(b),b!==k||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=u),w!==b)){if(y=zs,v="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ds,v="onPointerLeave",m="onPointerEnter",d="pointer"),k=w==null?g:tr(w),p=b==null?g:tr(b),g=new y(v,d+"leave",w,r,h),g.target=k,g.relatedTarget=p,v=null,Bt(h)===u&&(y=new y(m,d+"enter",b,r,h),y.target=p,y.relatedTarget=k,v=y),k=v,w&&b)t:{for(y=w,m=b,d=0,p=y;p;p=Qt(p))d++;for(p=0,v=m;v;v=Qt(v))p++;for(;0<d-p;)y=Qt(y),d--;for(;0<p-d;)m=Qt(m),p--;for(;d--;){if(y===m||m!==null&&y===m.alternate)break t;y=Qt(y),m=Qt(m)}y=null}else y=null;w!==null&&Us(f,g,w,y,!1),b!==null&&k!==null&&Us(f,k,b,y,!0)}}e:{if(g=u?tr(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var N=Hm;else if(Ls(g))if(Tc)N=Qm;else{N=qm;var P=Vm}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=Gm);if(N&&(N=N(e,u))){Dc(f,N,r,h);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&ka(g,"number",g.value)}switch(P=u?tr(u):window,e){case"focusin":(Ls(P)||P.contentEditable==="true")&&(Zt=P,Ba=u,Wr=null);break;case"focusout":Wr=Ba=Zt=null;break;case"mousedown":Ia=!0;break;case"contextmenu":case"mouseup":case"dragend":Ia=!1,Os(f,r,h);break;case"selectionchange":if(Jm)break;case"keydown":case"keyup":Os(f,r,h)}var z;if(Lo)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Jt?zc(e,r)&&(D="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(Ec&&r.locale!=="ko"&&(Jt||D!=="onCompositionStart"?D==="onCompositionEnd"&&Jt&&(z=Cc()):(dt=h,Do="value"in dt?dt.value:dt.textContent,Jt=!0)),P=ai(u,D),0<P.length&&(D=new Ps(D,e,null,r,h),f.push({event:D,listeners:P}),z?D.data=z:(z=Pc(r),z!==null&&(D.data=z)))),(z=Fm?Um(e,r):Ym(e,r))&&(u=ai(u,"onBeforeInput"),0<u.length&&(h=new Ps("onBeforeInput","beforeinput",null,r,h),f.push({event:h,listeners:u}),h.data=z))}Uc(f,t)})}function an(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ai(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Xr(e,r),o!=null&&n.unshift(an(e,o,i)),o=Xr(e,t),o!=null&&n.push(an(e,o,i))),e=e.return}return n}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Us(e,t,r,n,i){for(var o=t._reactName,s=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,i?(c=Xr(r,o),c!=null&&s.unshift(an(r,c,l))):i||(c=Xr(r,o),c!=null&&s.push(an(r,c,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var rf=/\r\n?/g,nf=/\u0000|\uFFFD/g;function Ys(e){return(typeof e=="string"?e:""+e).replace(rf,`
`).replace(nf,"")}function Ln(e,t,r){if(t=Ys(t),Ys(e)!==t&&r)throw Error(j(425))}function oi(){}var Ra=null,Oa=null;function Aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,af=typeof clearTimeout=="function"?clearTimeout:void 0,$s=typeof Promise=="function"?Promise:void 0,of=typeof queueMicrotask=="function"?queueMicrotask:typeof $s<"u"?function(e){return $s.resolve(null).then(e).catch(sf)}:Fa;function sf(e){setTimeout(function(){throw e})}function na(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),en(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);en(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ws(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),Ve="__reactFiber$"+kr,on="__reactProps$"+kr,rt="__reactContainer$"+kr,Ua="__reactEvents$"+kr,lf="__reactListeners$"+kr,cf="__reactHandles$"+kr;function Bt(e){var t=e[Ve];if(t)return t;for(var r=e.parentNode;r;){if(t=r[rt]||r[Ve]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ws(e);e!==null;){if(r=e[Ve])return r;e=Ws(e)}return t}e=r,r=e.parentNode}return null}function vn(e){return e=e[Ve]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function zi(e){return e[on]||null}var Ya=[],rr=-1;function Et(e){return{current:e}}function $(e){0>rr||(e.current=Ya[rr],Ya[rr]=null,rr--)}function F(e,t){rr++,Ya[rr]=e.current,e.current=t}var St={},fe=Et(St),be=Et(!1),Ft=St;function hr(e,t){var r=e.type.contextTypes;if(!r)return St;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function si(){$(be),$(fe)}function Hs(e,t,r){if(fe.current!==St)throw Error(j(168));F(fe,t),F(be,r)}function $c(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(j(108,Vd(e)||"Unknown",i));return q({},r,n)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,Ft=fe.current,F(fe,e),F(be,be.current),!0}function Vs(e,t,r){var n=e.stateNode;if(!n)throw Error(j(169));r?(e=$c(e,t,Ft),n.__reactInternalMemoizedMergedChildContext=e,$(be),$(fe),F(fe,e)):$(be),F(be,r)}var Xe=null,Pi=!1,ia=!1;function Wc(e){Xe===null?Xe=[e]:Xe.push(e)}function uf(e){Pi=!0,Wc(e)}function zt(){if(!ia&&Xe!==null){ia=!0;var e=0,t=R;try{var r=Xe;for(R=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Xe=null,Pi=!1}catch(i){throw Xe!==null&&(Xe=Xe.slice(e+1)),hc(Co,zt),i}finally{R=t,ia=!1}}return null}var nr=[],ir=0,ci=null,ui=0,De=[],Te=0,Ut=null,Je=1,Ze="";function Lt(e,t){nr[ir++]=ui,nr[ir++]=ci,ci=e,ui=t}function Hc(e,t,r){De[Te++]=Je,De[Te++]=Ze,De[Te++]=Ut,Ut=e;var n=Je;e=Ze;var i=32-Fe(n)-1;n&=~(1<<i),r+=1;var o=32-Fe(t)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Je=1<<32-Fe(t)+i|r<<i|n,Ze=o+e}else Je=1<<o|r<<i|n,Ze=e}function Bo(e){e.return!==null&&(Lt(e,1),Hc(e,1,0))}function Io(e){for(;e===ci;)ci=nr[--ir],nr[ir]=null,ui=nr[--ir],nr[ir]=null;for(;e===Ut;)Ut=De[--Te],De[Te]=null,Ze=De[--Te],De[Te]=null,Je=De[--Te],De[Te]=null}var Ce=null,Se=null,W=!1,Ae=null;function Vc(e,t){var r=Me(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function qs(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Se=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ut!==null?{id:Je,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Me(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ce=e,Se=null,!0):!1;default:return!1}}function $a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wa(e){if(W){var t=Se;if(t){var r=t;if(!qs(e,t)){if($a(e))throw Error(j(418));t=vt(r.nextSibling);var n=Ce;t&&qs(e,t)?Vc(n,r):(e.flags=e.flags&-4097|2,W=!1,Ce=e)}}else{if($a(e))throw Error(j(418));e.flags=e.flags&-4097|2,W=!1,Ce=e}}}function Gs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function _n(e){if(e!==Ce)return!1;if(!W)return Gs(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Aa(e.type,e.memoizedProps)),t&&(t=Se)){if($a(e))throw qc(),Error(j(418));for(;t;)Vc(e,t),t=vt(t.nextSibling)}if(Gs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Se=vt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ce?vt(e.stateNode.nextSibling):null;return!0}function qc(){for(var e=Se;e;)e=vt(e.nextSibling)}function gr(){Se=Ce=null,W=!1}function Ro(e){Ae===null?Ae=[e]:Ae.push(e)}var df=at.ReactCurrentBatchConfig;function Mr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(j(309));var n=r.stateNode}if(!n)throw Error(j(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!r._owner)throw Error(j(290,e))}return e}function Bn(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qs(e){var t=e._init;return t(e._payload)}function Gc(e){function t(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function r(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function n(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=jt(m,d),m.index=0,m.sibling=null,m}function o(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,d,p,v){return d===null||d.tag!==6?(d=da(p,m.mode,v),d.return=m,d):(d=i(d,p),d.return=m,d)}function c(m,d,p,v){var N=p.type;return N===Xt?h(m,d,p.props.children,v,p.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===st&&Qs(N)===d.type)?(v=i(d,p.props),v.ref=Mr(m,d,p),v.return=m,v):(v=Xn(p.type,p.key,p.props,null,m.mode,v),v.ref=Mr(m,d,p),v.return=m,v)}function u(m,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ma(p,m.mode,v),d.return=m,d):(d=i(d,p.children||[]),d.return=m,d)}function h(m,d,p,v,N){return d===null||d.tag!==7?(d=At(p,m.mode,v,N),d.return=m,d):(d=i(d,p),d.return=m,d)}function f(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=da(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Nn:return p=Xn(d.type,d.key,d.props,null,m.mode,p),p.ref=Mr(m,null,d),p.return=m,p;case Kt:return d=ma(d,m.mode,p),d.return=m,d;case st:var v=d._init;return f(m,v(d._payload),p)}if(Rr(d)||Er(d))return d=At(d,m.mode,p,null),d.return=m,d;Bn(m,d)}return null}function g(m,d,p,v){var N=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:l(m,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Nn:return p.key===N?c(m,d,p,v):null;case Kt:return p.key===N?u(m,d,p,v):null;case st:return N=p._init,g(m,d,N(p._payload),v)}if(Rr(p)||Er(p))return N!==null?null:h(m,d,p,v,null);Bn(m,p)}return null}function w(m,d,p,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(p)||null,l(d,m,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Nn:return m=m.get(v.key===null?p:v.key)||null,c(d,m,v,N);case Kt:return m=m.get(v.key===null?p:v.key)||null,u(d,m,v,N);case st:var P=v._init;return w(m,d,p,P(v._payload),N)}if(Rr(v)||Er(v))return m=m.get(p)||null,h(d,m,v,N,null);Bn(d,v)}return null}function b(m,d,p,v){for(var N=null,P=null,z=d,D=d=0,A=null;z!==null&&D<p.length;D++){z.index>D?(A=z,z=null):A=z.sibling;var L=g(m,z,p[D],v);if(L===null){z===null&&(z=A);break}e&&z&&L.alternate===null&&t(m,z),d=o(L,d,D),P===null?N=L:P.sibling=L,P=L,z=A}if(D===p.length)return r(m,z),W&&Lt(m,D),N;if(z===null){for(;D<p.length;D++)z=f(m,p[D],v),z!==null&&(d=o(z,d,D),P===null?N=z:P.sibling=z,P=z);return W&&Lt(m,D),N}for(z=n(m,z);D<p.length;D++)A=w(z,m,D,p[D],v),A!==null&&(e&&A.alternate!==null&&z.delete(A.key===null?D:A.key),d=o(A,d,D),P===null?N=A:P.sibling=A,P=A);return e&&z.forEach(function(ae){return t(m,ae)}),W&&Lt(m,D),N}function y(m,d,p,v){var N=Er(p);if(typeof N!="function")throw Error(j(150));if(p=N.call(p),p==null)throw Error(j(151));for(var P=N=null,z=d,D=d=0,A=null,L=p.next();z!==null&&!L.done;D++,L=p.next()){z.index>D?(A=z,z=null):A=z.sibling;var ae=g(m,z,L.value,v);if(ae===null){z===null&&(z=A);break}e&&z&&ae.alternate===null&&t(m,z),d=o(ae,d,D),P===null?N=ae:P.sibling=ae,P=ae,z=A}if(L.done)return r(m,z),W&&Lt(m,D),N;if(z===null){for(;!L.done;D++,L=p.next())L=f(m,L.value,v),L!==null&&(d=o(L,d,D),P===null?N=L:P.sibling=L,P=L);return W&&Lt(m,D),N}for(z=n(m,z);!L.done;D++,L=p.next())L=w(z,m,D,L.value,v),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?D:L.key),d=o(L,d,D),P===null?N=L:P.sibling=L,P=L);return e&&z.forEach(function(Qe){return t(m,Qe)}),W&&Lt(m,D),N}function k(m,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Xt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Nn:e:{for(var N=p.key,P=d;P!==null;){if(P.key===N){if(N=p.type,N===Xt){if(P.tag===7){r(m,P.sibling),d=i(P,p.props.children),d.return=m,m=d;break e}}else if(P.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===st&&Qs(N)===P.type){r(m,P.sibling),d=i(P,p.props),d.ref=Mr(m,P,p),d.return=m,m=d;break e}r(m,P);break}else t(m,P);P=P.sibling}p.type===Xt?(d=At(p.props.children,m.mode,v,p.key),d.return=m,m=d):(v=Xn(p.type,p.key,p.props,null,m.mode,v),v.ref=Mr(m,d,p),v.return=m,m=v)}return s(m);case Kt:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){r(m,d.sibling),d=i(d,p.children||[]),d.return=m,m=d;break e}else{r(m,d);break}else t(m,d);d=d.sibling}d=ma(p,m.mode,v),d.return=m,m=d}return s(m);case st:return P=p._init,k(m,d,P(p._payload),v)}if(Rr(p))return b(m,d,p,v);if(Er(p))return y(m,d,p,v);Bn(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(r(m,d.sibling),d=i(d,p),d.return=m,m=d):(r(m,d),d=da(p,m.mode,v),d.return=m,m=d),s(m)):r(m,d)}return k}var xr=Gc(!0),Qc=Gc(!1),di=Et(null),mi=null,ar=null,Oo=null;function Ao(){Oo=ar=mi=null}function Fo(e){var t=di.current;$(di),e._currentValue=t}function Ha(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function mr(e,t){mi=e,Oo=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Oo!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(mi===null)throw Error(j(308));ar=e,mi.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var It=null;function Uo(e){It===null?It=[e]:It.push(e)}function Kc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Uo(t)):(r.next=i.next,i.next=r),t.interleaved=r,nt(e,n)}function nt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var lt=!1;function Yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,I&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,nt(e,r)}return i=n.interleaved,i===null?(t.next=t,Uo(n)):(t.next=i.next,i.next=t),n.interleaved=t,nt(e,r)}function Hn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Eo(e,r)}}function Ks(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fi(e,t,r,n){var i=e.updateQueue;lt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;s=0,h=u=c=null,l=o;do{var g=l.lane,w=l.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,y=l;switch(g=t,w=r,y.tag){case 1:if(b=y.payload,typeof b=="function"){f=b.call(w,f,g);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=y.payload,g=typeof b=="function"?b.call(w,f,g):b,g==null)break e;f=q({},f,g);break e;case 2:lt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=w,c=f):h=h.next=w,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);$t|=s,e.lanes=s,e.memoizedState=f}}function Xs(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(j(191,i));i.call(n)}}}var yn={},Ge=Et(yn),sn=Et(yn),ln=Et(yn);function Rt(e){if(e===yn)throw Error(j(174));return e}function $o(e,t){switch(F(ln,t),F(sn,e),F(Ge,yn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sa(t,e)}$(Ge),F(Ge,t)}function vr(){$(Ge),$(sn),$(ln)}function Jc(e){Rt(ln.current);var t=Rt(Ge.current),r=Sa(t,e.type);t!==r&&(F(sn,e),F(Ge,r))}function Wo(e){sn.current===e&&($(Ge),$(sn))}var H=Et(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var aa=[];function Ho(){for(var e=0;e<aa.length;e++)aa[e]._workInProgressVersionPrimary=null;aa.length=0}var Vn=at.ReactCurrentDispatcher,oa=at.ReactCurrentBatchConfig,Yt=0,V=null,ee=null,ne=null,hi=!1,Hr=!1,cn=0,mf=0;function ue(){throw Error(j(321))}function Vo(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ye(e[r],t[r]))return!1;return!0}function qo(e,t,r,n,i,o){if(Yt=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vn.current=e===null||e.memoizedState===null?gf:xf,e=r(n,i),Hr){o=0;do{if(Hr=!1,cn=0,25<=o)throw Error(j(301));o+=1,ne=ee=null,t.updateQueue=null,Vn.current=vf,e=r(n,i)}while(Hr)}if(Vn.current=gi,t=ee!==null&&ee.next!==null,Yt=0,ne=ee=V=null,hi=!1,t)throw Error(j(300));return e}function Go(){var e=cn!==0;return cn=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?V.memoizedState=ne=e:ne=ne.next=e,ne}function Be(){if(ee===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?V.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(j(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?V.memoizedState=ne=e:ne=ne.next=e}return ne}function un(e,t){return typeof t=="function"?t(e):t}function sa(e){var t=Be(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var n=ee,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=s=null,c=null,u=o;do{var h=u.lane;if((Yt&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,s=n):c=c.next=f,V.lanes|=h,$t|=h}u=u.next}while(u!==null&&u!==o);c===null?s=n:c.next=l,Ye(n,t.memoizedState)||(we=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,V.lanes|=o,$t|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function la(e){var t=Be(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ye(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Zc(){}function eu(e,t){var r=V,n=Be(),i=t(),o=!Ye(n.memoizedState,i);if(o&&(n.memoizedState=i,we=!0),n=n.queue,Qo(nu.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(r.flags|=2048,dn(9,ru.bind(null,r,n,i,t),void 0,null),ie===null)throw Error(j(349));Yt&30||tu(r,t,i)}return i}function tu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ru(e,t,r,n){t.value=r,t.getSnapshot=n,iu(t)&&au(e)}function nu(e,t,r){return r(function(){iu(t)&&au(e)})}function iu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ye(e,r)}catch{return!0}}function au(e){var t=nt(e,1);t!==null&&Ue(t,e,1,-1)}function Js(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:e},t.queue=e,e=e.dispatch=hf.bind(null,V,e),[t.memoizedState,e]}function dn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function ou(){return Be().memoizedState}function qn(e,t,r,n){var i=He();V.flags|=e,i.memoizedState=dn(1|t,r,void 0,n===void 0?null:n)}function Di(e,t,r,n){var i=Be();n=n===void 0?null:n;var o=void 0;if(ee!==null){var s=ee.memoizedState;if(o=s.destroy,n!==null&&Vo(n,s.deps)){i.memoizedState=dn(t,r,o,n);return}}V.flags|=e,i.memoizedState=dn(1|t,r,o,n)}function Zs(e,t){return qn(8390656,8,e,t)}function Qo(e,t){return Di(2048,8,e,t)}function su(e,t){return Di(4,2,e,t)}function lu(e,t){return Di(4,4,e,t)}function cu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uu(e,t,r){return r=r!=null?r.concat([e]):null,Di(4,4,cu.bind(null,t,e),r)}function Ko(){}function du(e,t){var r=Be();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Vo(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function mu(e,t){var r=Be();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Vo(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function fu(e,t,r){return Yt&21?(Ye(r,t)||(r=vc(),V.lanes|=r,$t|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=r)}function ff(e,t){var r=R;R=r!==0&&4>r?r:4,e(!0);var n=oa.transition;oa.transition={};try{e(!1),t()}finally{R=r,oa.transition=n}}function pu(){return Be().memoizedState}function pf(e,t,r){var n=bt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},hu(e))gu(t,r);else if(r=Kc(e,t,r,n),r!==null){var i=ge();Ue(r,e,n,i),xu(r,t,n)}}function hf(e,t,r){var n=bt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(hu(e))gu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,Ye(l,s)){var c=t.interleaved;c===null?(i.next=i,Uo(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=Kc(e,t,i,n),r!==null&&(i=ge(),Ue(r,e,n,i),xu(r,t,n))}}function hu(e){var t=e.alternate;return e===V||t!==null&&t===V}function gu(e,t){Hr=hi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function xu(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Eo(e,r)}}var gi={readContext:_e,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},gf={readContext:_e,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Zs,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,qn(4194308,4,cu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return qn(4194308,4,e,t)},useInsertionEffect:function(e,t){return qn(4,2,e,t)},useMemo:function(e,t){var r=He();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=He();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=pf.bind(null,V,e),[n.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Js,useDebugValue:Ko,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Js(!1),t=e[0];return e=ff.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=V,i=He();if(W){if(r===void 0)throw Error(j(407));r=r()}else{if(r=t(),ie===null)throw Error(j(349));Yt&30||tu(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Zs(nu.bind(null,n,o,e),[e]),n.flags|=2048,dn(9,ru.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=He(),t=ie.identifierPrefix;if(W){var r=Ze,n=Je;r=(n&~(1<<32-Fe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=cn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=mf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xf={readContext:_e,useCallback:du,useContext:_e,useEffect:Qo,useImperativeHandle:uu,useInsertionEffect:su,useLayoutEffect:lu,useMemo:mu,useReducer:sa,useRef:ou,useState:function(){return sa(un)},useDebugValue:Ko,useDeferredValue:function(e){var t=Be();return fu(t,ee.memoizedState,e)},useTransition:function(){var e=sa(un)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Zc,useSyncExternalStore:eu,useId:pu,unstable_isNewReconciler:!1},vf={readContext:_e,useCallback:du,useContext:_e,useEffect:Qo,useImperativeHandle:uu,useInsertionEffect:su,useLayoutEffect:lu,useMemo:mu,useReducer:la,useRef:ou,useState:function(){return la(un)},useDebugValue:Ko,useDeferredValue:function(e){var t=Be();return ee===null?t.memoizedState=e:fu(t,ee.memoizedState,e)},useTransition:function(){var e=la(un)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Zc,useSyncExternalStore:eu,useId:pu,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Va(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:q({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ti={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ge(),i=bt(e),o=et(n,i);o.payload=t,r!=null&&(o.callback=r),t=yt(e,o,i),t!==null&&(Ue(t,e,i,n),Hn(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ge(),i=bt(e),o=et(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=yt(e,o,i),t!==null&&(Ue(t,e,i,n),Hn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ge(),n=bt(e),i=et(r,n);i.tag=2,t!=null&&(i.callback=t),t=yt(e,i,n),t!==null&&(Ue(t,e,n,r),Hn(t,e,n))}};function el(e,t,r,n,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!rn(r,n)||!rn(i,o):!0}function vu(e,t,r){var n=!1,i=St,o=t.contextType;return typeof o=="object"&&o!==null?o=_e(o):(i=je(t)?Ft:fe.current,n=t.contextTypes,o=(n=n!=null)?hr(e,i):St),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ti,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function tl(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ti.enqueueReplaceState(t,t.state,null)}function qa(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Yo(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=_e(o):(o=je(t)?Ft:fe.current,i.context=hr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Va(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ti.enqueueReplaceState(i,i.state,null),fi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yr(e,t){try{var r="",n=t;do r+=Hd(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ca(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ga(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var yf=typeof WeakMap=="function"?WeakMap:Map;function yu(e,t,r){r=et(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){vi||(vi=!0,io=n),Ga(e,t)},r}function wu(e,t,r){r=et(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Ga(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Ga(e,t),typeof n!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function rl(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new yf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Lf.bind(null,e,t,r),t.then(e,e))}function nl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function il(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=et(-1,1),t.tag=2,yt(r,t,1))),r.lanes|=1),e)}var wf=at.ReactCurrentOwner,we=!1;function he(e,t,r,n){t.child=e===null?Qc(t,null,r,n):xr(t,e.child,r,n)}function al(e,t,r,n,i){r=r.render;var o=t.ref;return mr(t,i),n=qo(e,t,r,n,o,i),r=Go(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(W&&r&&Bo(t),t.flags|=1,he(e,t,n,i),t.child)}function ol(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!is(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,bu(e,t,o,n,i)):(e=Xn(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:rn,r(s,n)&&e.ref===t.ref)return it(e,t,i)}return t.flags|=1,e=jt(o,n),e.ref=t.ref,e.return=t,t.child=e}function bu(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(rn(o,n)&&e.ref===t.ref)if(we=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,it(e,t,i)}return Qa(e,t,r,n,i)}function ju(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(sr,Ne),Ne|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(sr,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,F(sr,Ne),Ne|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,F(sr,Ne),Ne|=n;return he(e,t,i,r),t.child}function ku(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Qa(e,t,r,n,i){var o=je(r)?Ft:fe.current;return o=hr(t,o),mr(t,i),r=qo(e,t,r,n,o,i),n=Go(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(W&&n&&Bo(t),t.flags|=1,he(e,t,r,i),t.child)}function sl(e,t,r,n,i){if(je(r)){var o=!0;li(t)}else o=!1;if(mr(t,i),t.stateNode===null)Gn(e,t),vu(t,r,n),qa(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=_e(u):(u=je(r)?Ft:fe.current,u=hr(t,u));var h=r.getDerivedStateFromProps,f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||c!==u)&&tl(t,s,n,u),lt=!1;var g=t.memoizedState;s.state=g,fi(t,n,s,i),c=t.memoizedState,l!==n||g!==c||be.current||lt?(typeof h=="function"&&(Va(t,r,h,n),c=t.memoizedState),(l=lt||el(t,r,l,n,g,c,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),s.props=n,s.state=c,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Xc(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Re(t.type,l),s.props=u,f=t.pendingProps,g=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=_e(c):(c=je(r)?Ft:fe.current,c=hr(t,c));var w=r.getDerivedStateFromProps;(h=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||g!==c)&&tl(t,s,n,c),lt=!1,g=t.memoizedState,s.state=g,fi(t,n,s,i);var b=t.memoizedState;l!==f||g!==b||be.current||lt?(typeof w=="function"&&(Va(t,r,w,n),b=t.memoizedState),(u=lt||el(t,r,u,n,g,b,c)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,b,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,b,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=b),s.props=n,s.state=b,s.context=c,n=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return Ka(e,t,r,n,o,i)}function Ka(e,t,r,n,i,o){ku(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&Vs(t,r,!1),it(e,t,o);n=t.stateNode,wf.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=xr(t,e.child,null,o),t.child=xr(t,null,l,o)):he(e,t,l,o),t.memoizedState=n.state,i&&Vs(t,r,!0),t.child}function Nu(e){var t=e.stateNode;t.pendingContext?Hs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hs(e,t.context,!1),$o(e,t.containerInfo)}function ll(e,t,r,n,i){return gr(),Ro(i),t.flags|=256,he(e,t,r,n),t.child}var Xa={dehydrated:null,treeContext:null,retryLane:0};function Ja(e){return{baseLanes:e,cachePool:null,transitions:null}}function Su(e,t,r){var n=t.pendingProps,i=H.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(H,i&1),e===null)return Wa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,o?(n=t.mode,o=t.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=_i(s,n,0,null),e=At(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ja(r),t.memoizedState=Xa,e):Xo(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return bf(e,t,s,n,l,i,r);if(o){o=n.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=jt(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=jt(l,o):(o=At(o,s,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,s=e.child.memoizedState,s=s===null?Ja(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,t.memoizedState=Xa,n}return o=e.child,e=o.sibling,n=jt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Xo(e,t){return t=_i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function In(e,t,r,n){return n!==null&&Ro(n),xr(t,e.child,null,r),e=Xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bf(e,t,r,n,i,o,s){if(r)return t.flags&256?(t.flags&=-257,n=ca(Error(j(422))),In(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=_i({mode:"visible",children:n.children},i,0,null),o=At(o,i,s,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&xr(t,e.child,null,s),t.child.memoizedState=Ja(s),t.memoizedState=Xa,o);if(!(t.mode&1))return In(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(j(419)),n=ca(o,n,void 0),In(e,t,s,n)}if(l=(s&e.childLanes)!==0,we||l){if(n=ie,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nt(e,i),Ue(n,e,i,-1))}return ns(),n=ca(Error(j(421))),In(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_f.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Se=vt(i.nextSibling),Ce=t,W=!0,Ae=null,e!==null&&(De[Te++]=Je,De[Te++]=Ze,De[Te++]=Ut,Je=e.id,Ze=e.overflow,Ut=t),t=Xo(t,n.children),t.flags|=4096,t)}function cl(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ha(e.return,t,r)}function ua(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Cu(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(he(e,t,n.children,r),n=H.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cl(e,r,t);else if(e.tag===19)cl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(F(H,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&pi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),ua(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ua(t,!0,r,null,o);break;case"together":ua(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),$t|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,r=jt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=jt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function jf(e,t,r){switch(t.tag){case 3:Nu(t),gr();break;case 5:Jc(t);break;case 1:je(t.type)&&li(t);break;case 4:$o(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;F(di,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(F(H,H.current&1),t.flags|=128,null):r&t.child.childLanes?Su(e,t,r):(F(H,H.current&1),e=it(e,t,r),e!==null?e.sibling:null);F(H,H.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Cu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(H,H.current),n)break;return null;case 22:case 23:return t.lanes=0,ju(e,t,r)}return it(e,t,r)}var Eu,Za,zu,Pu;Eu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Za=function(){};zu=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Rt(Ge.current);var o=null;switch(r){case"input":i=ba(e,i),n=ba(e,n),o=[];break;case"select":i=q({},i,{value:void 0}),n=q({},n,{value:void 0}),o=[];break;case"textarea":i=Na(e,i),n=Na(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=oi)}Ca(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Y("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Pu=function(e,t,r,n){r!==n&&(t.flags|=4)};function Lr(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function kf(e,t,r){var n=t.pendingProps;switch(Io(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return je(t.type)&&si(),de(t),null;case 3:return n=t.stateNode,vr(),$(be),$(fe),Ho(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(_n(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(so(Ae),Ae=null))),Za(e,t),de(t),null;case 5:Wo(t);var i=Rt(ln.current);if(r=t.type,e!==null&&t.stateNode!=null)zu(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(j(166));return de(t),null}if(e=Rt(Ge.current),_n(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Ve]=t,n[on]=o,e=(t.mode&1)!==0,r){case"dialog":Y("cancel",n),Y("close",n);break;case"iframe":case"object":case"embed":Y("load",n);break;case"video":case"audio":for(i=0;i<Ar.length;i++)Y(Ar[i],n);break;case"source":Y("error",n);break;case"img":case"image":case"link":Y("error",n),Y("load",n);break;case"details":Y("toggle",n);break;case"input":vs(n,o),Y("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Y("invalid",n);break;case"textarea":ws(n,o),Y("invalid",n)}Ca(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ln(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ln(n.textContent,l,e),i=["children",""+l]):Qr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Y("scroll",n)}switch(r){case"input":Sn(n),ys(n,o,!0);break;case"textarea":Sn(n),bs(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=oi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Ve]=t,e[on]=n,Eu(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ea(r,n),r){case"dialog":Y("cancel",e),Y("close",e),i=n;break;case"iframe":case"object":case"embed":Y("load",e),i=n;break;case"video":case"audio":for(i=0;i<Ar.length;i++)Y(Ar[i],e);i=n;break;case"source":Y("error",e),i=n;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=n;break;case"details":Y("toggle",e),i=n;break;case"input":vs(e,n),i=ba(e,n),Y("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=q({},n,{value:void 0}),Y("invalid",e);break;case"textarea":ws(e,n),i=Na(e,n),Y("invalid",e);break;default:i=n}Ca(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?oc(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ic(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Kr(e,c):typeof c=="number"&&Kr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qr.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Y("scroll",e):c!=null&&bo(e,o,c,s))}switch(r){case"input":Sn(e),ys(e,n,!1);break;case"textarea":Sn(e),bs(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Nt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?lr(e,!!n.multiple,o,!1):n.defaultValue!=null&&lr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Pu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(j(166));if(r=Rt(ln.current),Rt(Ge.current),_n(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ve]=t,(o=n.nodeValue!==r)&&(e=Ce,e!==null))switch(e.tag){case 3:Ln(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ln(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ve]=t,t.stateNode=n}return de(t),null;case 13:if($(H),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Se!==null&&t.mode&1&&!(t.flags&128))qc(),gr(),t.flags|=98560,o=!1;else if(o=_n(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Ve]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),o=!1}else Ae!==null&&(so(Ae),Ae=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?te===0&&(te=3):ns())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return vr(),Za(e,t),e===null&&nn(t.stateNode.containerInfo),de(t),null;case 10:return Fo(t.type._context),de(t),null;case 17:return je(t.type)&&si(),de(t),null;case 19:if($(H),o=t.memoizedState,o===null)return de(t),null;if(n=(t.flags&128)!==0,s=o.rendering,s===null)if(n)Lr(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=pi(e),s!==null){for(t.flags|=128,Lr(o,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return F(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>wr&&(t.flags|=128,n=!0,Lr(o,!1),t.lanes=4194304)}else{if(!n)if(e=pi(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!W)return de(t),null}else 2*K()-o.renderingStartTime>wr&&r!==1073741824&&(t.flags|=128,n=!0,Lr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(r=o.last,r!==null?r.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,r=H.current,F(H,n?r&1|2:r&1),t):(de(t),null);case 22:case 23:return rs(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ne&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Nf(e,t){switch(Io(t),t.tag){case 1:return je(t.type)&&si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),$(be),$(fe),Ho(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wo(t),null;case 13:if($(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(H),null;case 4:return vr(),null;case 10:return Fo(t.type._context),null;case 22:case 23:return rs(),null;case 24:return null;default:return null}}var Rn=!1,me=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,C=null;function or(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Q(e,t,n)}else r.current=null}function eo(e,t,r){try{r()}catch(n){Q(e,t,n)}}var ul=!1;function Cf(e,t){if(Ra=ni,e=_c(),_o(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,u=0,h=0,f=e,g=null;t:for(;;){for(var w;f!==r||i!==0&&f.nodeType!==3||(l=s+i),f!==o||n!==0&&f.nodeType!==3||(c=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(w=f.firstChild)!==null;)g=f,f=w;for(;;){if(f===e)break t;if(g===r&&++u===i&&(l=s),g===o&&++h===n&&(c=s),(w=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=w}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Oa={focusedElem:e,selectionRange:r},ni=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var y=b.memoizedProps,k=b.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:Re(t.type,y),k);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return b=ul,ul=!1,b}function Vr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&eo(t,r,o)}i=i.next}while(i!==n)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function to(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Du(e){var t=e.alternate;t!==null&&(e.alternate=null,Du(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[on],delete t[Ua],delete t[lf],delete t[cf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tu(e){return e.tag===5||e.tag===3||e.tag===4}function dl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ro(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=oi));else if(n!==4&&(e=e.child,e!==null))for(ro(e,t,r),e=e.sibling;e!==null;)ro(e,t,r),e=e.sibling}function no(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(no(e,t,r),e=e.sibling;e!==null;)no(e,t,r),e=e.sibling}var oe=null,Oe=!1;function ot(e,t,r){for(r=r.child;r!==null;)Mu(e,t,r),r=r.sibling}function Mu(e,t,r){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Ni,r)}catch{}switch(r.tag){case 5:me||or(r,t);case 6:var n=oe,i=Oe;oe=null,ot(e,t,r),oe=n,Oe=i,oe!==null&&(Oe?(e=oe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):oe.removeChild(r.stateNode));break;case 18:oe!==null&&(Oe?(e=oe,r=r.stateNode,e.nodeType===8?na(e.parentNode,r):e.nodeType===1&&na(e,r),en(e)):na(oe,r.stateNode));break;case 4:n=oe,i=Oe,oe=r.stateNode.containerInfo,Oe=!0,ot(e,t,r),oe=n,Oe=i;break;case 0:case 11:case 14:case 15:if(!me&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&eo(r,t,s),i=i.next}while(i!==n)}ot(e,t,r);break;case 1:if(!me&&(or(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Q(r,t,l)}ot(e,t,r);break;case 21:ot(e,t,r);break;case 22:r.mode&1?(me=(n=me)||r.memoizedState!==null,ot(e,t,r),me=n):ot(e,t,r);break;default:ot(e,t,r)}}function ml(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Sf),t.forEach(function(n){var i=Bf.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ie(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,Oe=!1;break e;case 3:oe=l.stateNode.containerInfo,Oe=!0;break e;case 4:oe=l.stateNode.containerInfo,Oe=!0;break e}l=l.return}if(oe===null)throw Error(j(160));Mu(o,s,i),oe=null,Oe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lu(t,e),t=t.sibling}function Lu(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),$e(e),n&4){try{Vr(3,e,e.return),Mi(3,e)}catch(y){Q(e,e.return,y)}try{Vr(5,e,e.return)}catch(y){Q(e,e.return,y)}}break;case 1:Ie(t,e),$e(e),n&512&&r!==null&&or(r,r.return);break;case 5:if(Ie(t,e),$e(e),n&512&&r!==null&&or(r,r.return),e.flags&32){var i=e.stateNode;try{Kr(i,"")}catch(y){Q(e,e.return,y)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&tc(i,o),Ea(l,s);var u=Ea(l,o);for(s=0;s<c.length;s+=2){var h=c[s],f=c[s+1];h==="style"?oc(i,f):h==="dangerouslySetInnerHTML"?ic(i,f):h==="children"?Kr(i,f):bo(i,h,f,u)}switch(l){case"input":ja(i,o);break;case"textarea":rc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?lr(i,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?lr(i,!!o.multiple,o.defaultValue,!0):lr(i,!!o.multiple,o.multiple?[]:"",!1))}i[on]=o}catch(y){Q(e,e.return,y)}}break;case 6:if(Ie(t,e),$e(e),n&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Q(e,e.return,y)}}break;case 3:if(Ie(t,e),$e(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{en(t.containerInfo)}catch(y){Q(e,e.return,y)}break;case 4:Ie(t,e),$e(e);break;case 13:Ie(t,e),$e(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(es=K())),n&4&&ml(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(me=(u=me)||h,Ie(t,e),me=u):Ie(t,e),$e(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(f=C=h;C!==null;){switch(g=C,w=g.child,g.tag){case 0:case 11:case 14:case 15:Vr(4,g,g.return);break;case 1:or(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(y){Q(n,r,y)}}break;case 5:or(g,g.return);break;case 22:if(g.memoizedState!==null){pl(f);continue}}w!==null?(w.return=g,C=w):pl(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=ac("display",s))}catch(y){Q(e,e.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Q(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ie(t,e),$e(e),n&4&&ml(e);break;case 21:break;default:Ie(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Tu(r)){var n=r;break e}r=r.return}throw Error(j(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Kr(i,""),n.flags&=-33);var o=dl(e);no(e,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=dl(e);ro(e,l,s);break;default:throw Error(j(161))}}catch(c){Q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ef(e,t,r){C=e,_u(e)}function _u(e,t,r){for(var n=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||Rn;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||me;l=Rn;var u=me;if(Rn=s,(me=c)&&!u)for(C=i;C!==null;)s=C,c=s.child,s.tag===22&&s.memoizedState!==null?hl(i):c!==null?(c.return=s,C=c):hl(i);for(;o!==null;)C=o,_u(o),o=o.sibling;C=i,Rn=l,me=u}fl(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):fl(e)}}function fl(e){for(;C!==null;){var t=C;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Mi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!me)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Re(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Xs(t,o,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Xs(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&en(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}me||t.flags&512&&to(t)}catch(g){Q(t,t.return,g)}}if(t===e){C=null;break}if(r=t.sibling,r!==null){r.return=t.return,C=r;break}C=t.return}}function pl(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var r=t.sibling;if(r!==null){r.return=t.return,C=r;break}C=t.return}}function hl(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Mi(4,t)}catch(c){Q(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(c){Q(t,i,c)}}var o=t.return;try{to(t)}catch(c){Q(t,o,c)}break;case 5:var s=t.return;try{to(t)}catch(c){Q(t,s,c)}}}catch(c){Q(t,t.return,c)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var zf=Math.ceil,xi=at.ReactCurrentDispatcher,Jo=at.ReactCurrentOwner,Le=at.ReactCurrentBatchConfig,I=0,ie=null,J=null,le=0,Ne=0,sr=Et(0),te=0,mn=null,$t=0,Li=0,Zo=0,qr=null,ye=null,es=0,wr=1/0,Ke=null,vi=!1,io=null,wt=null,On=!1,mt=null,yi=0,Gr=0,ao=null,Qn=-1,Kn=0;function ge(){return I&6?K():Qn!==-1?Qn:Qn=K()}function bt(e){return e.mode&1?I&2&&le!==0?le&-le:df.transition!==null?(Kn===0&&(Kn=vc()),Kn):(e=R,e!==0||(e=window.event,e=e===void 0?16:Sc(e.type)),e):1}function Ue(e,t,r,n){if(50<Gr)throw Gr=0,ao=null,Error(j(185));gn(e,r,n),(!(I&2)||e!==ie)&&(e===ie&&(!(I&2)&&(Li|=r),te===4&&ut(e,le)),ke(e,n),r===1&&I===0&&!(t.mode&1)&&(wr=K()+500,Pi&&zt()))}function ke(e,t){var r=e.callbackNode;um(e,t);var n=ri(e,e===ie?le:0);if(n===0)r!==null&&Ns(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ns(r),t===1)e.tag===0?uf(gl.bind(null,e)):Wc(gl.bind(null,e)),of(function(){!(I&6)&&zt()}),r=null;else{switch(yc(n)){case 1:r=Co;break;case 4:r=gc;break;case 16:r=ti;break;case 536870912:r=xc;break;default:r=ti}r=Yu(r,Bu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Bu(e,t){if(Qn=-1,Kn=0,I&6)throw Error(j(327));var r=e.callbackNode;if(fr()&&e.callbackNode!==r)return null;var n=ri(e,e===ie?le:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=wi(e,n);else{t=n;var i=I;I|=2;var o=Ru();(ie!==e||le!==t)&&(Ke=null,wr=K()+500,Ot(e,t));do try{Tf();break}catch(l){Iu(e,l)}while(!0);Ao(),xi.current=o,I=i,J!==null?t=0:(ie=null,le=0,t=te)}if(t!==0){if(t===2&&(i=Ma(e),i!==0&&(n=i,t=oo(e,i))),t===1)throw r=mn,Ot(e,0),ut(e,n),ke(e,K()),r;if(t===6)ut(e,n);else{if(i=e.current.alternate,!(n&30)&&!Pf(i)&&(t=wi(e,n),t===2&&(o=Ma(e),o!==0&&(n=o,t=oo(e,o))),t===1))throw r=mn,Ot(e,0),ut(e,n),ke(e,K()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(j(345));case 2:_t(e,ye,Ke);break;case 3:if(ut(e,n),(n&130023424)===n&&(t=es+500-K(),10<t)){if(ri(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fa(_t.bind(null,e,ye,Ke),t);break}_t(e,ye,Ke);break;case 4:if(ut(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-Fe(n);o=1<<s,s=t[s],s>i&&(i=s),n&=~o}if(n=i,n=K()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*zf(n/1960))-n,10<n){e.timeoutHandle=Fa(_t.bind(null,e,ye,Ke),n);break}_t(e,ye,Ke);break;case 5:_t(e,ye,Ke);break;default:throw Error(j(329))}}}return ke(e,K()),e.callbackNode===r?Bu.bind(null,e):null}function oo(e,t){var r=qr;return e.current.memoizedState.isDehydrated&&(Ot(e,t).flags|=256),e=wi(e,t),e!==2&&(t=ye,ye=r,t!==null&&so(t)),e}function so(e){ye===null?ye=e:ye.push.apply(ye,e)}function Pf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Ye(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~Zo,t&=~Li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Fe(t),n=1<<r;e[r]=-1,t&=~n}}function gl(e){if(I&6)throw Error(j(327));fr();var t=ri(e,0);if(!(t&1))return ke(e,K()),null;var r=wi(e,t);if(e.tag!==0&&r===2){var n=Ma(e);n!==0&&(t=n,r=oo(e,n))}if(r===1)throw r=mn,Ot(e,0),ut(e,t),ke(e,K()),r;if(r===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,ye,Ke),ke(e,K()),null}function ts(e,t){var r=I;I|=1;try{return e(t)}finally{I=r,I===0&&(wr=K()+500,Pi&&zt())}}function Wt(e){mt!==null&&mt.tag===0&&!(I&6)&&fr();var t=I;I|=1;var r=Le.transition,n=R;try{if(Le.transition=null,R=1,e)return e()}finally{R=n,Le.transition=r,I=t,!(I&6)&&zt()}}function rs(){Ne=sr.current,$(sr)}function Ot(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,af(r)),J!==null)for(r=J.return;r!==null;){var n=r;switch(Io(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&si();break;case 3:vr(),$(be),$(fe),Ho();break;case 5:Wo(n);break;case 4:vr();break;case 13:$(H);break;case 19:$(H);break;case 10:Fo(n.type._context);break;case 22:case 23:rs()}r=r.return}if(ie=e,J=e=jt(e.current,null),le=Ne=t,te=0,mn=null,Zo=Li=$t=0,ye=qr=null,It!==null){for(t=0;t<It.length;t++)if(r=It[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}It=null}return e}function Iu(e,t){do{var r=J;try{if(Ao(),Vn.current=gi,hi){for(var n=V.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}hi=!1}if(Yt=0,ne=ee=V=null,Hr=!1,cn=0,Jo.current=null,r===null||r.return===null){te=1,mn=t,J=null;break}e:{var o=e,s=r.return,l=r,c=t;if(t=le,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=nl(s);if(w!==null){w.flags&=-257,il(w,s,l,o,t),w.mode&1&&rl(o,u,t),t=w,c=u;var b=t.updateQueue;if(b===null){var y=new Set;y.add(c),t.updateQueue=y}else b.add(c);break e}else{if(!(t&1)){rl(o,u,t),ns();break e}c=Error(j(426))}}else if(W&&l.mode&1){var k=nl(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),il(k,s,l,o,t),Ro(yr(c,l));break e}}o=c=yr(c,l),te!==4&&(te=2),qr===null?qr=[o]:qr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=yu(o,c,t);Ks(o,m);break e;case 1:l=c;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(wt===null||!wt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=wu(o,l,t);Ks(o,v);break e}}o=o.return}while(o!==null)}Au(r)}catch(N){t=N,J===r&&r!==null&&(J=r=r.return);continue}break}while(!0)}function Ru(){var e=xi.current;return xi.current=gi,e===null?gi:e}function ns(){(te===0||te===3||te===2)&&(te=4),ie===null||!($t&268435455)&&!(Li&268435455)||ut(ie,le)}function wi(e,t){var r=I;I|=2;var n=Ru();(ie!==e||le!==t)&&(Ke=null,Ot(e,t));do try{Df();break}catch(i){Iu(e,i)}while(!0);if(Ao(),I=r,xi.current=n,J!==null)throw Error(j(261));return ie=null,le=0,te}function Df(){for(;J!==null;)Ou(J)}function Tf(){for(;J!==null&&!tm();)Ou(J)}function Ou(e){var t=Uu(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Au(e):J=t,Jo.current=null}function Au(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Nf(r,t),r!==null){r.flags&=32767,J=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,J=null;return}}else if(r=kf(r,t,Ne),r!==null){J=r;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);te===0&&(te=5)}function _t(e,t,r){var n=R,i=Le.transition;try{Le.transition=null,R=1,Mf(e,t,r,n)}finally{Le.transition=i,R=n}return null}function Mf(e,t,r,n){do fr();while(mt!==null);if(I&6)throw Error(j(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(dm(e,o),e===ie&&(J=ie=null,le=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||On||(On=!0,Yu(ti,function(){return fr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Le.transition,Le.transition=null;var s=R;R=1;var l=I;I|=4,Jo.current=null,Cf(e,r),Lu(r,e),Xm(Oa),ni=!!Ra,Oa=Ra=null,e.current=r,Ef(r),rm(),I=l,R=s,Le.transition=o}else e.current=r;if(On&&(On=!1,mt=e,yi=i),o=e.pendingLanes,o===0&&(wt=null),am(r.stateNode),ke(e,K()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(vi)throw vi=!1,e=io,io=null,e;return yi&1&&e.tag!==0&&fr(),o=e.pendingLanes,o&1?e===ao?Gr++:(Gr=0,ao=e):Gr=0,zt(),null}function fr(){if(mt!==null){var e=yc(yi),t=Le.transition,r=R;try{if(Le.transition=null,R=16>e?16:e,mt===null)var n=!1;else{if(e=mt,mt=null,yi=0,I&6)throw Error(j(331));var i=I;for(I|=4,C=e.current;C!==null;){var o=C,s=o.child;if(C.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(C=u;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:Vr(8,h,o)}var f=h.child;if(f!==null)f.return=h,C=f;else for(;C!==null;){h=C;var g=h.sibling,w=h.return;if(Du(h),h===u){C=null;break}if(g!==null){g.return=w,C=g;break}C=w}}}var b=o.alternate;if(b!==null){var y=b.child;if(y!==null){b.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}C=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,C=s;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,C=m;break e}C=o.return}}var d=e.current;for(C=d;C!==null;){s=C;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,C=p;else e:for(s=d;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Mi(9,l)}}catch(N){Q(l,l.return,N)}if(l===s){C=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,C=v;break e}C=l.return}}if(I=i,zt(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Ni,e)}catch{}n=!0}return n}finally{R=r,Le.transition=t}}return!1}function xl(e,t,r){t=yr(r,t),t=yu(e,t,1),e=yt(e,t,1),t=ge(),e!==null&&(gn(e,1,t),ke(e,t))}function Q(e,t,r){if(e.tag===3)xl(e,e,r);else for(;t!==null;){if(t.tag===3){xl(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(wt===null||!wt.has(n))){e=yr(r,e),e=wu(t,e,1),t=yt(t,e,1),e=ge(),t!==null&&(gn(t,1,e),ke(t,e));break}}t=t.return}}function Lf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&r,ie===e&&(le&r)===r&&(te===4||te===3&&(le&130023424)===le&&500>K()-es?Ot(e,0):Zo|=r),ke(e,t)}function Fu(e,t){t===0&&(e.mode&1?(t=zn,zn<<=1,!(zn&130023424)&&(zn=4194304)):t=1);var r=ge();e=nt(e,t),e!==null&&(gn(e,t,r),ke(e,r))}function _f(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Fu(e,r)}function Bf(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(j(314))}n!==null&&n.delete(t),Fu(e,r)}var Uu;Uu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)we=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return we=!1,jf(e,t,r);we=!!(e.flags&131072)}else we=!1,W&&t.flags&1048576&&Hc(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Gn(e,t),e=t.pendingProps;var i=hr(t,fe.current);mr(t,r),i=qo(null,t,n,e,i,r);var o=Go();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(n)?(o=!0,li(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yo(t),i.updater=Ti,t.stateNode=i,i._reactInternals=t,qa(t,n,e,r),t=Ka(null,t,n,!0,o,r)):(t.tag=0,W&&o&&Bo(t),he(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Gn(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Rf(n),e=Re(n,e),i){case 0:t=Qa(null,t,n,e,r);break e;case 1:t=sl(null,t,n,e,r);break e;case 11:t=al(null,t,n,e,r);break e;case 14:t=ol(null,t,n,Re(n.type,e),r);break e}throw Error(j(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Re(n,i),Qa(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Re(n,i),sl(e,t,n,i,r);case 3:e:{if(Nu(t),e===null)throw Error(j(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Xc(e,t),fi(t,n,null,r);var s=t.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=yr(Error(j(423)),t),t=ll(e,t,n,r,i);break e}else if(n!==i){i=yr(Error(j(424)),t),t=ll(e,t,n,r,i);break e}else for(Se=vt(t.stateNode.containerInfo.firstChild),Ce=t,W=!0,Ae=null,r=Qc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(gr(),n===i){t=it(e,t,r);break e}he(e,t,n,r)}t=t.child}return t;case 5:return Jc(t),e===null&&Wa(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Aa(n,i)?s=null:o!==null&&Aa(n,o)&&(t.flags|=32),ku(e,t),he(e,t,s,r),t.child;case 6:return e===null&&Wa(t),null;case 13:return Su(e,t,r);case 4:return $o(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=xr(t,null,n,r):he(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Re(n,i),al(e,t,n,i,r);case 7:return he(e,t,t.pendingProps,r),t.child;case 8:return he(e,t,t.pendingProps.children,r),t.child;case 12:return he(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,F(di,n._currentValue),n._currentValue=s,o!==null)if(Ye(o.value,s)){if(o.children===i.children&&!be.current){t=it(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=et(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Ha(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(j(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Ha(s,r,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}he(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,mr(t,r),i=_e(i),n=n(i),t.flags|=1,he(e,t,n,r),t.child;case 14:return n=t.type,i=Re(n,t.pendingProps),i=Re(n.type,i),ol(e,t,n,i,r);case 15:return bu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Re(n,i),Gn(e,t),t.tag=1,je(n)?(e=!0,li(t)):e=!1,mr(t,r),vu(t,n,i),qa(t,n,i,r),Ka(null,t,n,!0,e,r);case 19:return Cu(e,t,r);case 22:return ju(e,t,r)}throw Error(j(156,t.tag))};function Yu(e,t){return hc(e,t)}function If(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,r,n){return new If(e,t,r,n)}function is(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rf(e){if(typeof e=="function")return is(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ko)return 11;if(e===No)return 14}return 2}function jt(e,t){var r=e.alternate;return r===null?(r=Me(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Xn(e,t,r,n,i,o){var s=2;if(n=e,typeof e=="function")is(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Xt:return At(r.children,i,o,t);case jo:s=8,i|=8;break;case xa:return e=Me(12,r,t,i|2),e.elementType=xa,e.lanes=o,e;case va:return e=Me(13,r,t,i),e.elementType=va,e.lanes=o,e;case ya:return e=Me(19,r,t,i),e.elementType=ya,e.lanes=o,e;case Jl:return _i(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kl:s=10;break e;case Xl:s=9;break e;case ko:s=11;break e;case No:s=14;break e;case st:s=16,n=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Me(s,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function At(e,t,r,n){return e=Me(7,e,n,t),e.lanes=r,e}function _i(e,t,r,n){return e=Me(22,e,n,t),e.elementType=Jl,e.lanes=r,e.stateNode={isHidden:!1},e}function da(e,t,r){return e=Me(6,e,null,t),e.lanes=r,e}function ma(e,t,r){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Of(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vi(0),this.expirationTimes=Vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function as(e,t,r,n,i,o,s,l,c){return e=new Of(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Me(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yo(o),e}function Af(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function $u(e){if(!e)return St;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var r=e.type;if(je(r))return $c(e,r,t)}return t}function Wu(e,t,r,n,i,o,s,l,c){return e=as(r,n,!0,e,i,o,s,l,c),e.context=$u(null),r=e.current,n=ge(),i=bt(r),o=et(n,i),o.callback=t??null,yt(r,o,i),e.current.lanes=i,gn(e,i,n),ke(e,n),e}function Bi(e,t,r,n){var i=t.current,o=ge(),s=bt(i);return r=$u(r),t.context===null?t.context=r:t.pendingContext=r,t=et(o,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=yt(i,t,s),e!==null&&(Ue(e,i,s,o),Hn(e,i,s)),s}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function os(e,t){vl(e,t),(e=e.alternate)&&vl(e,t)}function Ff(){return null}var Hu=typeof reportError=="function"?reportError:function(e){console.error(e)};function ss(e){this._internalRoot=e}Ii.prototype.render=ss.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Bi(e,t,null,null)};Ii.prototype.unmount=ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Bi(null,e,null,null)}),t[rt]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=jc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ct.length&&t!==0&&t<ct[r].priority;r++);ct.splice(r,0,e),r===0&&Nc(e)}};function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yl(){}function Uf(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=bi(s);o.call(u)}}var s=Wu(t,n,e,0,null,!1,!1,"",yl);return e._reactRootContainer=s,e[rt]=s.current,nn(e.nodeType===8?e.parentNode:e),Wt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=bi(c);l.call(u)}}var c=as(e,0,!1,null,null,!1,!1,"",yl);return e._reactRootContainer=c,e[rt]=c.current,nn(e.nodeType===8?e.parentNode:e),Wt(function(){Bi(t,c,r,n)}),c}function Oi(e,t,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=bi(s);l.call(c)}}Bi(t,s,e,i)}else s=Uf(r,t,e,i,n);return bi(s)}wc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Or(t.pendingLanes);r!==0&&(Eo(t,r|1),ke(t,K()),!(I&6)&&(wr=K()+500,zt()))}break;case 13:Wt(function(){var n=nt(e,1);if(n!==null){var i=ge();Ue(n,e,1,i)}}),os(e,1)}};zo=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var r=ge();Ue(t,e,134217728,r)}os(e,134217728)}};bc=function(e){if(e.tag===13){var t=bt(e),r=nt(e,t);if(r!==null){var n=ge();Ue(r,e,t,n)}os(e,t)}};jc=function(){return R};kc=function(e,t){var r=R;try{return R=e,t()}finally{R=r}};Pa=function(e,t,r){switch(t){case"input":if(ja(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=zi(n);if(!i)throw Error(j(90));ec(n),ja(n,i)}}}break;case"textarea":rc(e,r);break;case"select":t=r.value,t!=null&&lr(e,!!r.multiple,t,!1)}};cc=ts;uc=Wt;var Yf={usingClientEntryPoint:!1,Events:[vn,tr,zi,sc,lc,ts]},_r={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$f={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:at.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fc(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||Ff,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var An=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!An.isDisabled&&An.supportsFiber)try{Ni=An.inject($f),qe=An}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yf;ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ls(t))throw Error(j(200));return Af(e,t,null,r)};ze.createRoot=function(e,t){if(!ls(e))throw Error(j(299));var r=!1,n="",i=Hu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=as(e,1,!1,null,null,r,!1,n,i),e[rt]=t.current,nn(e.nodeType===8?e.parentNode:e),new ss(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=fc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Wt(e)};ze.hydrate=function(e,t,r){if(!Ri(t))throw Error(j(200));return Oi(null,e,t,!0,r)};ze.hydrateRoot=function(e,t,r){if(!ls(e))throw Error(j(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=Hu;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Wu(t,null,e,1,r??null,i,!1,o,s),e[rt]=t.current,nn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Ii(t)};ze.render=function(e,t,r){if(!Ri(t))throw Error(j(200));return Oi(null,e,t,!1,r)};ze.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(j(40));return e._reactRootContainer?(Wt(function(){Oi(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};ze.unstable_batchedUpdates=ts;ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ri(r))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Oi(e,t,r,!1,n)};ze.version="18.3.1-next-f1338f8080-20240426";function Vu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vu)}catch(e){console.error(e)}}Vu(),Vl.exports=ze;var Wf=Vl.exports,wl=Wf;ha.createRoot=wl.createRoot,ha.hydrateRoot=wl.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fn(){return fn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},fn.apply(this,arguments)}var ft;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ft||(ft={}));const bl="popstate";function Hf(e){e===void 0&&(e={});function t(n,i){let{pathname:o,search:s,hash:l}=n.location;return lo("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:ji(i)}return qf(t,r,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Vf(){return Math.random().toString(36).substr(2,8)}function jl(e,t){return{usr:e.state,key:e.key,idx:t}}function lo(e,t,r,n){return r===void 0&&(r=null),fn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Nr(t):t,{state:r,key:t&&t.key||n||Vf()})}function ji(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Nr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function qf(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,s=i.history,l=ft.Pop,c=null,u=h();u==null&&(u=0,s.replaceState(fn({},s.state,{idx:u}),""));function h(){return(s.state||{idx:null}).idx}function f(){l=ft.Pop;let k=h(),m=k==null?null:k-u;u=k,c&&c({action:l,location:y.location,delta:m})}function g(k,m){l=ft.Push;let d=lo(y.location,k,m);u=h()+1;let p=jl(d,u),v=y.createHref(d);try{s.pushState(p,"",v)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(v)}o&&c&&c({action:l,location:y.location,delta:1})}function w(k,m){l=ft.Replace;let d=lo(y.location,k,m);u=h();let p=jl(d,u),v=y.createHref(d);s.replaceState(p,"",v),o&&c&&c({action:l,location:y.location,delta:0})}function b(k){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:ji(k);return d=d.replace(/ $/,"%20"),Z(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let y={get action(){return l},get location(){return e(i,s)},listen(k){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(bl,f),c=k,()=>{i.removeEventListener(bl,f),c=null}},createHref(k){return t(i,k)},createURL:b,encodeLocation(k){let m=b(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:w,go(k){return s.go(k)}};return y}var kl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(kl||(kl={}));function Gf(e,t,r){return r===void 0&&(r="/"),Qf(e,t,r)}function Qf(e,t,r,n){let i=typeof t=="string"?Nr(t):t,o=cs(i.pathname||"/",r);if(o==null)return null;let s=Gu(e);Kf(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=lp(o);l=ap(s[c],u)}return l}function Gu(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(Z(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=kt([n,c.relativePath]),h=r.concat(c);o.children&&o.children.length>0&&(Z(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gu(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:np(u,o.index),routesMeta:h})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of Qu(o.path))i(o,s,c)}),t}function Qu(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let s=Qu(n.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Kf(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ip(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Xf=/^:[\w-]+$/,Jf=3,Zf=2,ep=1,tp=10,rp=-2,Nl=e=>e==="*";function np(e,t){let r=e.split("/"),n=r.length;return r.some(Nl)&&(n+=rp),t&&(n+=Zf),r.filter(i=>!Nl(i)).reduce((i,o)=>i+(Xf.test(o)?Jf:o===""?ep:tp),n)}function ip(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function ap(e,t,r){let{routesMeta:n}=e,i={},o="/",s=[];for(let l=0;l<n.length;++l){let c=n[l],u=l===n.length-1,h=o==="/"?t:t.slice(o.length)||"/",f=op({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),g=c.route;if(!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:kt([o,f.pathname]),pathnameBase:mp(kt([o,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(o=kt([o,f.pathnameBase]))}return s}function op(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=sp(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((u,h,f)=>{let{paramName:g,isOptional:w}=h;if(g==="*"){let y=l[f]||"";s=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const b=l[f];return w&&!b?u[g]=void 0:u[g]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function sp(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),qu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function lp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function cp(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?Nr(e):e;return{pathname:r?r.startsWith("/")?r:up(r,t):t,search:fp(n),hash:pp(i)}}function up(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function fa(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Ku(e,t){let r=dp(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Xu(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=Nr(e):(i=fn({},e),Z(!i.pathname||!i.pathname.includes("?"),fa("?","pathname","search",i)),Z(!i.pathname||!i.pathname.includes("#"),fa("#","pathname","hash",i)),Z(!i.search||!i.search.includes("#"),fa("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=r;else{let f=t.length-1;if(!n&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}l=f>=0?t[f]:"/"}let c=cp(i,l),u=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const kt=e=>e.join("/").replace(/\/\/+/g,"/"),mp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ju=["post","put","patch","delete"];new Set(Ju);const gp=["get",...Ju];new Set(gp);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pn(){return pn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},pn.apply(this,arguments)}const us=x.createContext(null),xp=x.createContext(null),qt=x.createContext(null),Ai=x.createContext(null),Pt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Zu=x.createContext(null);function vp(e,t){let{relative:r}=t===void 0?{}:t;wn()||Z(!1);let{basename:n,navigator:i}=x.useContext(qt),{hash:o,pathname:s,search:l}=rd(e,{relative:r}),c=s;return n!=="/"&&(c=s==="/"?n:kt([n,s])),i.createHref({pathname:c,search:l,hash:o})}function wn(){return x.useContext(Ai)!=null}function Sr(){return wn()||Z(!1),x.useContext(Ai).location}function ed(e){x.useContext(qt).static||x.useLayoutEffect(e)}function td(){let{isDataRoute:e}=x.useContext(Pt);return e?Mp():yp()}function yp(){wn()||Z(!1);let e=x.useContext(us),{basename:t,future:r,navigator:n}=x.useContext(qt),{matches:i}=x.useContext(Pt),{pathname:o}=Sr(),s=JSON.stringify(Ku(i,r.v7_relativeSplatPath)),l=x.useRef(!1);return ed(()=>{l.current=!0}),x.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let f=Xu(u,JSON.parse(s),o,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:kt([t,f.pathname])),(h.replace?n.replace:n.push)(f,h.state,h)},[t,n,s,o,e])}function wp(){let{matches:e}=x.useContext(Pt),t=e[e.length-1];return t?t.params:{}}function rd(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=x.useContext(qt),{matches:i}=x.useContext(Pt),{pathname:o}=Sr(),s=JSON.stringify(Ku(i,n.v7_relativeSplatPath));return x.useMemo(()=>Xu(e,JSON.parse(s),o,r==="path"),[e,s,o,r])}function bp(e,t){return jp(e,t)}function jp(e,t,r,n){wn()||Z(!1);let{navigator:i}=x.useContext(qt),{matches:o}=x.useContext(Pt),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Sr(),h;if(t){var f;let k=typeof t=="string"?Nr(t):t;c==="/"||(f=k.pathname)!=null&&f.startsWith(c)||Z(!1),h=k}else h=u;let g=h.pathname||"/",w=g;if(c!=="/"){let k=c.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let b=Gf(e,{pathname:w}),y=Ep(b&&b.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:kt([c,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:kt([c,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,r,n);return t&&y?x.createElement(Ai.Provider,{value:{location:pn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ft.Pop}},y):y}function kp(){let e=Tp(),t=hp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),r?x.createElement("pre",{style:i},r):null,null)}const Np=x.createElement(kp,null);class Sp extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?x.createElement(Pt.Provider,{value:this.props.routeContext},x.createElement(Zu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cp(e){let{routeContext:t,match:r,children:n}=e,i=x.useContext(us);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),x.createElement(Pt.Provider,{value:t},n)}function Ep(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=n)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let h=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);h>=0||Z(!1),s=s.slice(0,Math.min(s.length,h+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<s.length;h++){let f=s[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=h),f.route.id){let{loaderData:g,errors:w}=r,b=f.route.loader&&g[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||b){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((h,f,g)=>{let w,b=!1,y=null,k=null;r&&(w=l&&f.route.id?l[f.route.id]:void 0,y=f.route.errorElement||Np,c&&(u<0&&g===0?(Lp("route-fallback"),b=!0,k=null):u===g&&(b=!0,k=f.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,g+1)),d=()=>{let p;return w?p=y:b?p=k:f.route.Component?p=x.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=h,x.createElement(Cp,{match:f,routeContext:{outlet:h,matches:m,isDataRoute:r!=null},children:p})};return r&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?x.createElement(Sp,{location:r.location,revalidation:r.revalidation,component:y,error:w,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var nd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(nd||{}),id=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(id||{});function zp(e){let t=x.useContext(us);return t||Z(!1),t}function Pp(e){let t=x.useContext(xp);return t||Z(!1),t}function Dp(e){let t=x.useContext(Pt);return t||Z(!1),t}function ad(e){let t=Dp(),r=t.matches[t.matches.length-1];return r.route.id||Z(!1),r.route.id}function Tp(){var e;let t=x.useContext(Zu),r=Pp(),n=ad();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Mp(){let{router:e}=zp(nd.UseNavigateStable),t=ad(id.UseNavigateStable),r=x.useRef(!1);return ed(()=>{r.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,pn({fromRouteId:t},o)))},[e,t])}const Sl={};function Lp(e,t,r){Sl[e]||(Sl[e]=!0)}function _p(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function We(e){Z(!1)}function Bp(e){let{basename:t="/",children:r=null,location:n,navigationType:i=ft.Pop,navigator:o,static:s=!1,future:l}=e;wn()&&Z(!1);let c=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:c,navigator:o,static:s,future:pn({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof n=="string"&&(n=Nr(n));let{pathname:h="/",search:f="",hash:g="",state:w=null,key:b="default"}=n,y=x.useMemo(()=>{let k=cs(h,c);return k==null?null:{location:{pathname:k,search:f,hash:g,state:w,key:b},navigationType:i}},[c,h,f,g,w,b,i]);return y==null?null:x.createElement(qt.Provider,{value:u},x.createElement(Ai.Provider,{children:r,value:y}))}function Ip(e){let{children:t,location:r}=e;return bp(co(t),r)}new Promise(()=>{});function co(e,t){t===void 0&&(t=[]);let r=[];return x.Children.forEach(e,(n,i)=>{if(!x.isValidElement(n))return;let o=[...t,i];if(n.type===x.Fragment){r.push.apply(r,co(n.props.children,o));return}n.type!==We&&Z(!1),!n.props.index||!n.props.children||Z(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=co(n.props.children,o)),r.push(s)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},uo.apply(this,arguments)}function Rp(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Op(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ap(e,t){return e.button===0&&(!t||t==="_self")&&!Op(e)}function mo(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function Fp(e,t){let r=mo(e);return t&&t.forEach((n,i)=>{r.has(i)||t.getAll(i).forEach(o=>{r.append(i,o)})}),r}const Up=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Yp="6";try{window.__reactRouterVersion=Yp}catch{}const $p="startTransition",Cl=Md[$p];function Wp(e){let{basename:t,children:r,future:n,window:i}=e,o=x.useRef();o.current==null&&(o.current=Hf({window:i,v5Compat:!0}));let s=o.current,[l,c]=x.useState({action:s.action,location:s.location}),{v7_startTransition:u}=n||{},h=x.useCallback(f=>{u&&Cl?Cl(()=>c(f)):c(f)},[c,u]);return x.useLayoutEffect(()=>s.listen(h),[s,h]),x.useEffect(()=>_p(n),[n]),x.createElement(Bp,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:s,future:n})}const Hp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pt=x.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:u,preventScrollReset:h,viewTransition:f}=t,g=Rp(t,Up),{basename:w}=x.useContext(qt),b,y=!1;if(typeof u=="string"&&Vp.test(u)&&(b=u,Hp))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),N=cs(v.pathname,w);v.origin===p.origin&&N!=null?u=N+v.search+v.hash:y=!0}catch{}let k=vp(u,{relative:i}),m=qp(u,{replace:s,state:l,target:c,preventScrollReset:h,relative:i,viewTransition:f});function d(p){n&&n(p),p.defaultPrevented||m(p)}return x.createElement("a",uo({},g,{href:b||k,onClick:y||o?n:d,ref:r,target:c}))});var El;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(El||(El={}));var zl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zl||(zl={}));function qp(e,t){let{target:r,replace:n,state:i,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,c=td(),u=Sr(),h=rd(e,{relative:s});return x.useCallback(f=>{if(Ap(f,r)){f.preventDefault();let g=n!==void 0?n:ji(u)===ji(h);c(e,{replace:g,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[u,c,h,n,i,r,e,o,s,l])}function Gp(e){let t=x.useRef(mo(e)),r=x.useRef(!1),n=Sr(),i=x.useMemo(()=>Fp(n.search,r.current?null:t.current),[n.search]),o=td(),s=x.useCallback((l,c)=>{const u=mo(typeof l=="function"?l(i):l);r.current=!0,o("?"+u,c)},[o,i]);return[i,s]}const Qp=()=>{const[e,t]=x.useState(!1),[r,n]=x.useState(null),i=()=>{t(!e),n(null)};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
      `}),a.jsx("nav",{children:a.jsxs("div",{className:"nav-container",children:[a.jsx(pt,{to:"/",className:"logo-text",children:"Evergreen Motors"}),a.jsx("button",{className:"mobile-menu-toggle",onClick:i,"aria-label":"Toggle menu","aria-expanded":e,children:e?"✕":"☰"}),a.jsxs("ul",{className:"nav-menu",children:[a.jsx("li",{children:a.jsx(pt,{to:"/about",onClick:()=>t(!1),children:"About"})}),a.jsx("li",{children:a.jsx(pt,{to:"/test-drive",onClick:()=>t(!1),children:"Test Drive"})})]}),a.jsx("div",{className:"nav-container"})]})})]})},Kp=()=>{const[e,t]=x.useState(null),r={Models:[{label:"BYD DOLPHIN SURF",href:"/electric-cars/dolphin-surf"},{label:"BYD DOLPHIN",href:"/electric-cars/dolphin"},{label:"BYD ATTO 2",href:"/electric-cars/atto-2"},{label:"BYD ATTO 3",href:"/electric-cars/atto3"},{label:"BYD SEAL",href:"/electric-cars/seal"},{label:"BYD SEAL U DM-i",href:"/hybrid-cars/seal-u-dm-i"},{label:"BYD SEALION 7",href:"/electric-cars/sealion-7"}],"About BYD":[{label:"About BYD",href:"/about"},{label:"News",href:"/news-list"}],Technology:[{label:"Super DM",href:"/technology/super-dm"}],Purchasing:[{label:"Test Drive",href:"/test-drive"},{label:"Find a BYD Store",href:"/find-store"},{label:"PCP Offers",href:"/purchase/pcp-uk"},{label:"Motability",href:"/purchase/motability"}],Ownership:[{label:"Service Maintenance",href:"/service-maintenance"},{label:"BYD Assistance",href:"/assistance"}]},n=o=>({width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"50%",fontSize:"1.1rem",transition:"all 0.3s ease",textDecoration:"none",color:e===o?"#fff":"rgba(255,255,255,0.7)",borderColor:e===o?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)",transform:e===o?"scale(1.1)":"scale(1)",cursor:"pointer"}),i=o=>({color:e===o?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.6)",textDecoration:"none",fontFamily:"system-ui, -apple-system, sans-serif",fontSize:"0.875rem",transition:"color 0.3s ease",cursor:"pointer"});return a.jsx("footer",{style:{background:"#252728",color:"#fff",padding:0,margin:0},children:a.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto",padding:"4rem 2rem"},children:[a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"2rem",marginBottom:"3rem"},children:Object.entries(r).map(([o,s])=>a.jsxs("div",{children:[a.jsx("h3",{style:{fontWeight:600,fontSize:"1.125rem",marginBottom:"1rem",color:"rgba(255,255,255,0.9)",fontFamily:"system-ui, -apple-system, sans-serif"},children:o}),a.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:s.map(l=>a.jsx("li",{style:{marginBottom:"0.5rem"},children:a.jsx("a",{href:l.href,style:i(l.label),onMouseEnter:()=>t(l.label),onMouseLeave:()=>t(null),children:l.label})},l.label))})]},o))}),a.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:"2rem",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"2rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem",flexWrap:"wrap"},children:[a.jsx("span",{style:{color:"rgba(255,255,255,0.7)",fontFamily:"system-ui, -apple-system, sans-serif",fontWeight:400,fontSize:"0.9rem",textTransform:"uppercase",letterSpacing:"1px"},children:"FOLLOW US"}),a.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a.jsx("a",{href:"#",style:n("facebook"),onMouseEnter:()=>t("facebook"),onMouseLeave:()=>t(null),"aria-label":"Facebook",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),a.jsx("a",{href:"#",style:n("twitter"),onMouseEnter:()=>t("twitter"),onMouseLeave:()=>t(null),"aria-label":"X",children:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),a.jsx("a",{href:"#",style:n("instagram"),onMouseEnter:()=>t("instagram"),onMouseLeave:()=>t(null),"aria-label":"Instagram",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),a.jsx("a",{href:"#",style:n("tiktok"),onMouseEnter:()=>t("tiktok"),onMouseLeave:()=>t(null),"aria-label":"TikTok",children:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"})})}),a.jsx("a",{href:"#",style:n("youtube"),onMouseEnter:()=>t("youtube"),onMouseLeave:()=>t(null),"aria-label":"YouTube",children:a.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})})]})]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1.5rem",fontSize:"0.875rem"},children:[a.jsx("a",{href:"/privacy",style:i("privacy-link"),onMouseEnter:()=>t("privacy-link"),onMouseLeave:()=>t(null),children:"Privacy Policy"}),a.jsx("a",{href:"/terms",style:i("terms-link"),onMouseEnter:()=>t("terms-link"),onMouseLeave:()=>t(null),children:"Terms of Use"}),a.jsx("a",{href:"/cookies",style:i("cookies-link"),onMouseEnter:()=>t("cookies-link"),onMouseLeave:()=>t(null),children:"Cookies"}),a.jsx("a",{href:"/contact",style:i("contact-link"),onMouseEnter:()=>t("contact-link"),onMouseLeave:()=>t(null),children:"Contact"})]})]}),a.jsx("div",{style:{textAlign:"center",fontSize:"0.85rem",color:"rgba(255,255,255,0.5)",marginTop:"2rem",fontFamily:"system-ui, -apple-system, sans-serif",fontWeight:300},children:"© BYD Europe B.V. All rights reserved."})]})})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jp=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase()),Pl=e=>{const t=Jp(e);return t.charAt(0).toUpperCase()+t.slice(1)},od=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim(),Zp=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var eh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:s,...l},c)=>x.createElement("svg",{ref:c,...eh,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:od("lucide",i),...!o&&!Zp(l)&&{"aria-hidden":"true"},...l},[...s.map(([u,h])=>x.createElement(u,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=(e,t)=>{const r=x.forwardRef(({className:n,...i},o)=>x.createElement(th,{ref:o,iconNode:t,className:od(`lucide-${Xp(Pl(e))}`,`lucide-${e}`,n),...i}));return r.displayName=Pl(e),r};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],nh=Cr("calendar",rh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Br=Cr("check",ih);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],fo=Cr("chevron-left",ah);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],po=Cr("chevron-right",oh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],lh=Cr("external-link",sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],uh=Cr("x",ch),re=[{id:1,name:"ATTO 2",type:"electric",images:["/models/BYD-ATTO-2/BYD_ATTO_2.jpg","/models/BYD-ATTO-2/BYD_ATTO_2_side.jpg","/models/BYD-ATTO-2/BYD_ATTO_2_interior.jpg","/models/BYD-ATTO-2/Banner.avif"],videos:["/videos/BYD-ATTO-2/Overview.mp4","/videos/BYD-ATTO-2/Drive.mp4"]},{id:2,name:"DOLPHIN SURF",type:"electric",images:["/models/BYD-DOLPHIN-SURF/BYD-DOLPHIN-SURF.webp","/models/BYD-DOLPHIN-SURF/BYD-DOLPHIN-SURF_side.webp","/models/BYD-DOLPHIN-SURF/BYD-DOLPHIN-SURF_interior.webp","/models/BYD-DOLPHIN-SURF/Banner.webp"],videos:["/videos/BYD-DOLPHIN-SURF/Overview.mp4","/videos/BYD-DOLPHIN-SURF/TestDrive.mp4"]},{id:3,name:"SEALION 7",type:"electric",images:["/models/BYD-SEALION-7/BYD-SEALION-7.webp","/models/BYD-SEALION-7/BYD-SEALION-7_side.webp","/models/BYD-SEALION-7/BYD-SEALION-7_interior.webp","/models/BYD-SEALION-7/Banner.jpg"],videos:["/videos/BYD-SEALION-7/Overview.mp4","/videos/BYD-SEALION-7/Drive.mp4"]},{id:4,name:"SEAL U DM-i",type:"hybrid",images:["/models/BYD-SEAL-U-DM-i/BYD-SEAL-U-DM-i.webp","/models/BYD-SEAL-U-DM-i/BYD-SEAL-U-DM-i_side.webp","/models/BYD-SEAL-U-DM-i/BYD-SEAL-U-DM-i_interior.webp","/models/BYD-SEAL-U-DM-i/Banner.jpg"],videos:["/videos/BYD-SEAL-U-DM-i/Overview.mp4","/videos/BYD-SEAL-U-DM-i/TestDrive.mp4"]},{id:5,name:"SEAL",type:"electric",images:["/models/BYD-SEAL/BYD-SEAL.webp","/models/BYD-SEAL/BYD-SEAL_side.webp","/models/BYD-SEAL/BYD-SEAL_interior.webp","/models/BYD-SEAL/Banner.webp"],videos:["/videos/BYD-SEAL/Overview.mp4"]},{id:6,name:"ATTO 3",type:"electric",images:["/models/BYD-ATTO3/BYD-ATTO3.webp","/models/BYD-ATTO3/BYD-ATTO3_side.webp","/models/BYD-ATTO3/BYD-ATTO3_interior.webp","/models/BYD-ATTO3/Banner.jpg"],videos:["/videos/BYD-ATTO3/Overview.mp4"]},{id:7,name:"DOLPHIN",type:"electric",images:["/models/BYD-DOLPHIN/BYD-DOLPHIN.webp","/models/BYD-DOLPHIN/BYD-DOLPHIN_side.webp","/models/BYD-DOLPHIN/BYD-DOLPHIN_interior.webp","/models/BYD-DOLPHIN/Banner.jpg"],videos:["/videos/BYD-DOLPHIN/Overview.mp4"]}],dh=({posts:e,initialIndex:t,isOpen:r,onClose:n})=>{const[i,o]=x.useState(t),[s,l]=x.useState(0),c=x.useRef(null);x.useEffect(()=>{o(t),l(0)},[t]),x.useEffect(()=>{if(!r)return;const y=k=>{k.key==="Escape"&&n(),k.key==="ArrowLeft"&&h(),k.key==="ArrowRight"&&u()};return window.addEventListener("keydown",y),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",y),document.body.style.overflow="unset"}},[r,i,s]),x.useEffect(()=>{c.current&&w.type==="video"&&c.current.play()},[i,s]);const u=()=>{const y=e[i];s<y.media.length-1?l(k=>k+1):(o(k=>(k+1)%e.length),l(0))},h=()=>{if(s>0)l(y=>y-1);else{const y=(i-1+e.length)%e.length;o(y),l(e[y].media.length-1)}},f=y=>{l(y)};if(!r)return null;const g=e[i],w=g.media[s],b=g.media.length>1;return a.jsxs("div",{className:"instagram-lightbox-overlay",onClick:n,children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"instagram-lightbox-container",onClick:y=>y.stopPropagation(),children:[a.jsx("button",{className:"instagram-lightbox-close",onClick:n,"aria-label":"Close",children:a.jsx(uh,{size:24,color:"#000"})}),a.jsxs("div",{className:"instagram-lightbox-counter",children:[i+1," / ",e.length,b&&` • ${s+1}/${g.media.length}`]}),a.jsx("button",{className:"instagram-lightbox-nav instagram-lightbox-nav-left",onClick:h,"aria-label":"Previous",children:a.jsx(fo,{size:28,color:"#000"})}),a.jsx("button",{className:"instagram-lightbox-nav instagram-lightbox-nav-right",onClick:u,"aria-label":"Next",children:a.jsx(po,{size:28,color:"#000"})}),a.jsxs("div",{className:"instagram-lightbox-media",children:[w.type==="image"?a.jsx("img",{src:w.url,alt:g.alt}):a.jsx("video",{ref:c,src:w.url,controls:!0,autoPlay:!0,loop:!0,playsInline:!0}),b&&a.jsx("div",{className:"instagram-media-indicators",children:g.media.map((y,k)=>a.jsx("div",{className:`instagram-media-dot ${k===s?"active":""}`,onClick:()=>f(k)},k))})]}),a.jsxs("div",{className:"instagram-lightbox-sidebar",children:[a.jsxs("div",{className:"instagram-lightbox-header",children:[a.jsx("div",{className:"instagram-lightbox-avatar",children:"B"}),a.jsx("div",{className:"instagram-lightbox-username",children:"BYD.UK"})]}),a.jsx("div",{className:"instagram-lightbox-caption-area",children:a.jsxs("div",{className:"instagram-lightbox-caption",children:[a.jsx("strong",{children:"BYD.UK"}),g.caption]})}),a.jsx("div",{className:"instagram-lightbox-footer",children:a.jsxs("a",{href:g.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"instagram-view-original",children:[a.jsx(lh,{size:16}),"View on Instagram"]})})]})]})]})},Dl=[{id:1,media:[{type:"image",url:"/instagram/post-1-slide-1.jpg"}],caption:"Experience the future of electric driving with BYD. #BYDUK #ElectricVehicle",instagramUrl:"https://www.instagram.com/p/DMdGhs3uKXS/",alt:"BYD vehicle exterior shot"},{id:2,media:[{type:"image",url:"/instagram/post-2-slide-1.jpg"},{type:"image",url:"/instagram/post-2-slide-2.jpg"},{type:"video",url:"/instagram/post-2-slide-3.mp4",thumbnailUrl:"/instagram/post-2-slide-3-thumb.jpg"},{type:"image",url:"/instagram/post-2-slide-4.jpg"},{type:"image",url:"/instagram/post-2-slide-5.jpg"}],caption:"Our latest showcase with 5 amazing shots! Swipe to see them all. #BYDShowcase",instagramUrl:"https://www.instagram.com/p/ABC123/",alt:"BYD showcase carousel"},{id:3,media:[{type:"video",url:"/instagram/post-3.mp4",thumbnailUrl:"/instagram/post-3-thumb.jpg"}],caption:"Innovative technology at your fingertips. #BYDTech #Innovation",instagramUrl:"https://www.instagram.com/p/XYZ789/",alt:"BYD dashboard technology"},{id:4,media:[{type:"image",url:"/instagram/post-4-slide-1.jpg"},{type:"image",url:"/instagram/post-4-slide-2.jpg"},{type:"image",url:"/instagram/post-4-slide-3.jpg"}],caption:"Join us at the BYD showcase event! Three perspectives. #BYDEvent #Community",instagramUrl:"https://www.instagram.com/p/DEF456/",alt:"BYD event showcase"},{id:5,media:[{type:"image",url:"/instagram/post-5.jpg"}],caption:"Sleek design meets sustainability. #BYDDesign #Sustainable",instagramUrl:"https://www.instagram.com/p/GHI789/",alt:"BYD vehicle detail shot"},{id:6,media:[{type:"image",url:"/instagram/post-6.jpg"}],caption:"The road ahead is electric. #ElectricFuture #BYD",instagramUrl:"https://www.instagram.com/p/JKL012/",alt:"BYD on the road"},{id:7,media:[{type:"video",url:"/instagram/post-7-slide-1.mp4",thumbnailUrl:"/instagram/post-7-slide-1-thumb.jpg"},{type:"image",url:"/instagram/post-7-slide-2.jpg"}],caption:"Discover the BYD Dolphin. Video + photo combo! #BYDDolphin",instagramUrl:"https://www.instagram.com/p/MNO345/",alt:"BYD Dolphin showcase"},{id:8,media:[{type:"image",url:"/instagram/post-8.jpg"}],caption:"Charging into the future. #ElectricCharging #BYD",instagramUrl:"https://www.instagram.com/p/PQR678/",alt:"BYD charging station"},{id:9,media:[{type:"image",url:"/instagram/post-9.jpg"}],caption:"Premium comfort, zero emissions. #LuxuryEV #BYD",instagramUrl:"https://www.instagram.com/p/STU901/",alt:"BYD interior"}],Tl={1:3,2:3,3:3,4:3,5:3,6:3,7:3},pa={1:"Electric Compact SUV",2:"Electric Hatchback",3:"Electric SUV",4:"Hybrid SUV",5:"Electric Sedan",6:"Electric Compact SUV",7:"Electric Hatchback"},mh=()=>{const[e,t]=x.useState(!1),[r,n]=x.useState(0),i=T=>{n(T),t(!0)},[o,s]=x.useState(0),[l,c]=x.useState(!1),[u,h]=x.useState(Date.now()),[f,g]=x.useState("right"),[w,b]=x.useState(re.length),[y,k]=x.useState(0),[m,d]=x.useState(!1),p=2,v=[...re,...re,...re],N=()=>{l||(c(!0),g("right"),s(T=>(T+1)%re.length),setTimeout(()=>c(!1),300))},P=()=>{l||(c(!0),g("left"),s(T=>(T-1+re.length)%re.length),h(Date.now()),setTimeout(()=>c(!1),300))},z=()=>{N(),h(Date.now())},D=T=>{!l&&T!==o&&(c(!0),g(T>o?"right":"left"),s(T),h(Date.now()),setTimeout(()=>c(!1),300))};x.useEffect(()=>{const T=setInterval(()=>{Date.now()-u>=5e3&&(N(),h(Date.now()))},5e3);return()=>clearInterval(T)},[u]),x.useEffect(()=>{const T=setInterval(()=>{k(O=>(O+1)%9)},3e3);return()=>clearInterval(T)},[]);const A=()=>{m||(d(!0),b(T=>T+1))},L=()=>{m||(d(!0),b(T=>T-1))};x.useEffect(()=>{if(!m)return;const T=setTimeout(()=>{const O=Math.floor(w/re.length),E=w%re.length;if(O===0||O===2){const U=re.length+E;b(U),requestAnimationFrame(()=>{setTimeout(()=>{d(!1)},50)})}else d(!1)},600);return()=>clearTimeout(T)},[w,m,re.length]);const ae=re[o];Tl[ae.id],pa[ae.id];const Qe=()=>{if(!selectedModel){setShowModelError(!0);return}if(!selectedDate){setShowDateError(!0);return}if(!selectedTime){setShowTimeError(!0);return}if(!formData.firstName||!formData.lastName||!formData.email||!formData.phone){alert("Please fill in all required fields");return}alert("Booking request submitted!")};return a.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[a.jsx("style",{children:`
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
      `}),a.jsxs("div",{className:"hero-carousel",children:[re.map((T,O)=>{const E=Tl[T.id]||0,U=pa[T.id]||"";let pe="carousel-slide";return O===o?pe+=" active":f==="right"&&O===(o-1+re.length)%re.length||f==="left"&&O===(o+1)%re.length?pe+=f==="right"?" prev":" next":pe+=O<o?" prev":" next",a.jsxs("div",{className:pe,children:[a.jsx("img",{src:T.images[E],alt:T.name,className:"slide-background"}),a.jsx("div",{className:"slide-overlay"}),O===o&&a.jsxs("div",{className:"slide-content",children:[a.jsx("h1",{className:"model-name",children:T.name}),a.jsx("p",{className:"model-description",children:U})]})]},T.id)}),a.jsx("button",{className:"nav-arrow nav-arrow-left",onClick:P,children:a.jsx(fo,{size:24})}),a.jsx("button",{className:"nav-arrow nav-arrow-right",onClick:z,children:a.jsx(po,{size:24})}),a.jsxs("div",{className:"hero-carousel-controls",children:[a.jsx("a",{href:`/models/${ae.name.toLowerCase().replace(/\s+/g,"-")}`,className:"hero-carousel-button",children:"Learn More"}),a.jsx("a",{href:"/test-drive",className:"hero-carousel-button",children:"Test Drive"}),a.jsx("a",{href:"/offers",className:"hero-carousel-button",children:"Offers"})]}),a.jsx("div",{className:"carousel-indicators",children:re.map((T,O)=>a.jsx("div",{className:`indicator-dot ${O===o?"active":""}`,onClick:()=>D(O)},O))})]}),a.jsx("section",{className:"models-section",children:a.jsxs("div",{className:"models-container",children:[a.jsx("h2",{className:"models-title",children:"Models"}),a.jsxs("div",{className:"models-carousel-wrapper",children:[a.jsxs("div",{className:"models-carousel-controls",children:[a.jsx("button",{className:"models-carousel-arrow",onClick:L,"aria-label":"Previous",children:a.jsx(fo,{size:28})}),a.jsx("button",{className:"models-carousel-arrow",onClick:A,"aria-label":"Next",children:a.jsx(po,{size:28})})]}),a.jsx("div",{className:"models-carousel-track",style:{transform:`translateX(calc(25% - ${w*(100/p)}%))`,transition:m?"transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)":"none"},children:v.map((T,O)=>a.jsxs("div",{className:"model-card",children:[a.jsxs("div",{className:"model-card-header",children:[T.id%2===1&&a.jsx("div",{className:"offer-badge",children:"Offer Available →"}),a.jsx("h3",{className:"model-card-title",children:T.name}),a.jsx("p",{className:"model-card-description",children:pa[T.id]})]}),a.jsx("img",{src:T.images[0],alt:T.name,className:"model-card-image"}),a.jsxs("div",{className:"model-card-buttons",children:[a.jsx("button",{className:"model-button",children:"Learn More"}),a.jsx("button",{className:"model-button",children:"Test Drive"}),a.jsx("button",{className:"model-button full-width",children:"Range Calculator"})]})]},`${T.id}-${O}`))})]})]})}),a.jsxs("section",{className:"electric-section",children:[a.jsxs("div",{className:"electric-content",children:[a.jsx("h2",{className:"electric-title",children:"Electric Cars"}),a.jsx("p",{className:"electric-description",children:"At BYD, our electric vehicles are different; our industry-leading battery technology marries perfectly with innovative design to create a range of EVs that are as safe as they are luxurious. Time to upgrade? Discover our available models today."}),a.jsx("button",{className:"electric-button",onClick:()=>window.location.href="/electric-cars",children:"Learn More"})]}),a.jsx("div",{children:a.jsx("img",{src:"/Home/ElectricCars.jpg",alt:"BYD Electric Car Charging",className:"electric-image"})})]}),a.jsx("section",{className:"community-section",children:a.jsxs("div",{className:"community-container",children:[a.jsx("h2",{className:"community-title",children:"Our BYD Community"}),a.jsx("p",{className:"community-subtitle",children:"Share your BYD with us via social media by tagging @BYD.UK & using #BYDUK for a chance to feature across our website and social channels."}),a.jsx("div",{className:"instagram-grid",children:Dl.map((T,O)=>{const E=T.media.length>1,U=T.media[0];return a.jsxs("div",{className:`instagram-item ${U.type==="video"?"video-item":""}`,onClick:()=>i(O),style:{transform:O===y?"scale(1.02)":"scale(1)",transition:"transform 0.5s ease",zIndex:O===y?2:1,cursor:"pointer"},children:[U.type==="image"?a.jsx("img",{src:U.url,alt:T.alt}):a.jsx("video",{src:U.url,poster:U.thumbnailUrl,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),E&&a.jsx("div",{className:"instagram-carousel-icon",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"white",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"},children:[a.jsx("rect",{x:"3",y:"5",width:"9",height:"14",rx:"1",fill:"white",opacity:"0.8"}),a.jsx("rect",{x:"12",y:"5",width:"9",height:"14",rx:"1",fill:"white"})]})}),a.jsx("div",{className:"instagram-icon",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"#1a1a1a",children:a.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})]},T.id)})})]})}),a.jsx(dh,{posts:Dl,initialIndex:r,isOpen:e,onClose:()=>t(!1)}),a.jsxs("section",{className:"contact-section",children:[a.jsxs("div",{className:"contact-form-wrapper",children:[a.jsx("h2",{className:"contact-title",children:"Contact us"}),a.jsxs("form",{onSubmit:T=>{T.preventDefault()},children:[a.jsxs("div",{className:"form-row",children:[a.jsx("div",{className:"form-group",children:a.jsx("input",{type:"text",className:"form-input",placeholder:"First Name*",required:!0})}),a.jsx("div",{className:"form-group",children:a.jsx("input",{type:"text",className:"form-input",placeholder:"Last Name*",required:!0})})]}),a.jsx("div",{className:"form-group",children:a.jsx("input",{type:"email",className:"form-input",placeholder:"Email*",required:!0})}),a.jsx("div",{className:"form-group",children:a.jsxs("div",{className:"phone-input-group",children:[a.jsxs("select",{className:"form-select",children:[a.jsx("option",{children:"+44"}),a.jsx("option",{children:"+1"}),a.jsx("option",{children:"+91"})]}),a.jsx("input",{type:"tel",className:"form-input",placeholder:"07400 123456*",required:!0})]})}),a.jsx("div",{className:"form-group",children:a.jsxs("select",{className:"form-select",required:!0,children:[a.jsx("option",{value:"",children:"Model of Interest*"}),re.map(T=>a.jsx("option",{value:T.name,children:T.name},T.id))]})}),a.jsx("div",{className:"form-group",children:a.jsx("select",{className:"form-select",required:!0,children:a.jsx("option",{value:"",children:"Post Code*"})})}),a.jsx("div",{className:"form-group",children:a.jsxs("select",{className:"form-select",required:!0,children:[a.jsx("option",{value:"",children:"How can we help you?*"}),a.jsx("option",{children:"Test Drive"}),a.jsx("option",{children:"Purchase Inquiry"}),a.jsx("option",{children:"General Question"}),a.jsx("option",{children:"Service Inquiry"})]})}),a.jsx("button",{onClick:Qe,className:"submit-button",children:"Submit"})]})]}),a.jsx("div",{children:a.jsx("img",{src:"/Home/Contact.jpg",alt:"BYD Electric Car",className:"contact-image"})})]}),a.jsxs("section",{className:"map-section",children:[a.jsx("h2",{className:"map-title",children:"Our Location"}),a.jsx("div",{className:"map-container",children:a.jsx("iframe",{src:"https://maps.google.com/maps?q=21.795800671508836,-72.18088702512645&t=&z=13&ie=UTF8&iwloc=&output=embed",allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"BYD Location Map"})})]})]})},fh=()=>{x.useEffect(()=>{const t={threshold:.1,rootMargin:"0px 0px -100px 0px"},r=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&i.target.classList.add("fade-in-visible")})},t);return document.querySelectorAll(".fade-in-section").forEach(n=>r.observe(n)),()=>r.disconnect()},[]);const e=[{id:"dolphin-mini",name:"Dolphin Mini",description:"Compact elegance meets urban efficiency in this perfectly sized city electric vehicle",type:"City Electric",image:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000",price:"Starting at $28,990",range:"250 miles",acceleration:"7.5s 0-60mph"},{id:"atto-3",name:"Atto 3",description:"The benchmark electric SUV featuring e-Platform 3.0 technology and exceptional versatility",type:"Electric SUV",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",price:"Starting at $38,990",range:"260 miles",acceleration:"7.3s 0-60mph"},{id:"seal-u",name:"Seal U",description:"Premium electric sedan where sophisticated design meets exhilarating performance",type:"Luxury Sedan",image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",price:"Starting at $48,990",range:"354 miles",acceleration:"3.8s 0-60mph"},{id:"tang-l",name:"Tang L",description:"Spacious luxury with three rows of premium comfort and cutting-edge technology",type:"7-Seater SUV",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",price:"Starting at $58,990",range:"323 miles",acceleration:"4.4s 0-60mph"},{id:"han",name:"Han",description:"Flagship luxury sedan combining breathtaking design with uncompromising performance",type:"Executive Sedan",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",price:"Starting at $54,990",range:"379 miles",acceleration:"3.9s 0-60mph"},{id:"seal",name:"Seal",description:"Athletic performance sedan with ocean-inspired design and track-ready dynamics",type:"Performance Sedan",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",price:"Starting at $44,990",range:"310 miles",acceleration:"3.6s 0-60mph"}];return a.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[a.jsx("style",{children:`
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
      `}),a.jsx("div",{className:"models-hero",children:a.jsxs("div",{className:"models-hero-content",children:[a.jsx("h1",{children:"OUR COLLECTION"}),a.jsx("p",{className:"subtitle",children:"Electric Excellence"}),a.jsx("p",{children:"Discover the pinnacle of electric vehicle innovation. Each BYD model in our collection represents the perfect fusion of cutting-edge technology, sustainable design, and luxurious comfort."})]})}),a.jsxs("section",{className:"models-section fade-in-section",children:[a.jsxs("div",{className:"models-intro",children:[a.jsx("h2",{children:"The Future of Mobility"}),a.jsx("p",{children:"At Evergreen Motors, we offer an exceptional range of BYD electric vehicles — each engineered to perfection, designed to inspire, and built to transform the way you drive. Experience the difference that true innovation makes."})]}),a.jsx("div",{className:"luxury-models-grid",children:e.map(t=>a.jsxs(pt,{to:`/models/${t.id}`,className:"luxury-model-card",children:[a.jsxs("div",{className:"model-image-container",children:[a.jsx("img",{src:t.image,alt:t.name}),a.jsx("div",{className:"model-type-badge",children:t.type})]}),a.jsxs("div",{className:"luxury-model-info",children:[a.jsx("h3",{className:"luxury-model-name",children:t.name}),a.jsx("p",{className:"luxury-model-description",children:t.description}),a.jsxs("div",{className:"model-specs",children:[a.jsxs("div",{className:"spec-item",children:[a.jsx("div",{className:"spec-label",children:"Range"}),a.jsx("div",{className:"spec-value",children:t.range})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("div",{className:"spec-label",children:"0-60 MPH"}),a.jsx("div",{className:"spec-value",children:t.acceleration})]})]}),a.jsx("div",{className:"model-price",children:t.price}),a.jsx("span",{className:"luxury-learn-more",children:"Explore Model"})]})]},t.id))})]})]})},ph=()=>{const{modelId:e}=wp(),[t,r]=x.useState(0);x.useEffect(()=>{window.scrollTo(0,0)},[e]);const i={"dolphin-mini":{id:"dolphin-mini",name:"Dolphin Mini",tagline:"Urban Sophistication Reimagined",description:"The Dolphin Mini represents the perfect harmony of compact design and electric efficiency. Engineered for city driving yet capable of longer journeys, this sophisticated city car delivers premium comfort, advanced technology, and exceptional range in a beautifully compact package.",type:"City Electric",images:[{url:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000",caption:"Exterior View"},{url:"https://images.unsplash.com/photo-1  503376780353-7e6692767b70?q=80&w=2000",caption:"Front Profile"},{url:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000",caption:"Interior Cabin"},{url:"https://images.unsplash.com/photo-1 542362567-b07e54358753?q=80&w=2000",caption:"Dashboard"},{url:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",caption:"Rear View"}],price:"Starting at $28,990",specs:{range:"250 miles",acceleration:"7.5s 0-60mph",topSpeed:"99 mph",motorPower:"150 kW",batteryCapacity:"44.9 kWh",chargingTime:"30 min (10-80%)",seating:"5 passengers",driveType:"Front-Wheel Drive"},features:["e-Platform 3.0 Architecture","Blade Battery Technology","Intelligent Cockpit System","Advanced Driver Assistance","Panoramic Sunroof","Premium Interior Materials","Wireless Phone Charging","LED Lighting System"],colors:[{name:"Pearl White",hex:"#f8f9fa"},{name:"Midnight Black",hex:"#1a1a1a"},{name:"Ocean Blue",hex:"#4a9eff"},{name:"Silver Mist",hex:"#c0c0c0"}],highlights:[{title:"Compact Excellence",description:"Perfect dimensions for urban navigation without sacrificing interior space or comfort",image:"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200"},{title:"Efficient Power",description:"Optimized electric motor delivers responsive performance with exceptional efficiency",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200"},{title:"Smart Technology",description:"Intuitive infotainment and connectivity keep you seamlessly connected",image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200"}]},"atto-3":{id:"atto-3",name:"Atto 3",tagline:"The Benchmark Electric SUV",description:"The Atto 3 sets new standards for electric SUVs with its perfect blend of practicality, performance, and cutting-edge technology. Built on BYD's revolutionary e-Platform 3.0, this versatile SUV offers exceptional range, sophisticated design, and an interior that redefines comfort and innovation.",type:"Electric SUV",images:[{url:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",caption:"Exterior View"},{url:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",caption:"Side Profile"},{url:"https://images.unsplash.com/photo-1549927681-0b673b8243ab?q=80&w=2000",caption:"Interior Cockpit"},{url:"https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000",caption:"Technology Features"},{url:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",caption:"Cargo Space"}],price:"Starting at $38,990",specs:{range:"260 miles",acceleration:"7.3s 0-60mph",topSpeed:"100 mph",motorPower:"150 kW",batteryCapacity:"60.5 kWh",chargingTime:"29 min (30-80%)",seating:"5 passengers",driveType:"Front-Wheel Drive"},features:["e-Platform 3.0 Technology","Blade Battery System","Panoramic Sky Window","Rotating Touchscreen Display","Voice-Activated Controls","Premium Sound System","Advanced Safety Suite","Wireless CarPlay & Android Auto"],colors:[{name:"Cosmos Black",hex:"#0a0a0a"},{name:"Surf Blue",hex:"#4a9eff"},{name:"Boulder Grey",hex:"#6c757d"},{name:"Parkour Red",hex:"#dc3545"}],highlights:[{title:"Spacious Versatility",description:"Generous cargo space and flexible seating configurations for every adventure",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200"},{title:"Advanced Safety",description:"Comprehensive suite of driver assistance systems for confident driving",image:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200"},{title:"Exceptional Range",description:"Travel further with confidence thanks to efficient battery technology",image:"https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?q=80&w=1200"}]},"seal-u":{id:"seal-u",name:"Seal U",tagline:"Premium Electric Sophistication",description:"The Seal U embodies the pinnacle of electric sedan luxury. With its stunning ocean-inspired design language, exhilarating performance, and advanced technology suite, this premium sedan delivers an uncompromising driving experience that seamlessly blends elegance with athletic capability.",type:"Luxury Sedan",images:[{url:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",caption:"Exterior View"},{url:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",caption:"Dynamic Profile"},{url:"https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000",caption:"Luxury Interior"},{url:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000",caption:"Premium Seats"},{url:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",caption:"Rear Detail"}],price:"Starting at $48,990",specs:{range:"354 miles",acceleration:"3.8s 0-60mph",topSpeed:"112 mph",motorPower:"390 kW",batteryCapacity:"82.5 kWh",chargingTime:"26 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["CTB Cell-to-Body Integration","Dual Motor AWD System","Adaptive Air Suspension","Premium Nappa Leather Interior","Head-Up Display","Dynaudio Sound System","Matrix LED Headlights","Advanced Climate Control"],colors:[{name:"Aurora Silver",hex:"#d4d4d4"},{name:"Deep Ocean Blue",hex:"#1e3a8a"},{name:"Quantum Grey",hex:"#4b5563"},{name:"Crystal White",hex:"#ffffff"}],highlights:[{title:"Athletic Performance",description:"Dual motors deliver exhilarating acceleration and dynamic handling",image:"https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200"},{title:"Luxurious Comfort",description:"Premium materials and meticulous craftsmanship throughout the cabin",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200"},{title:"Extended Range",description:"Travel over 350 miles on a single charge for ultimate peace of mind",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200"}]},"tang-l":{id:"tang-l",name:"Tang L",tagline:"Luxury Redefined for Seven",description:"The Tang L represents the ultimate expression of family luxury. This spacious three-row SUV combines cutting-edge electric technology with opulent comfort, offering seven passengers premium accommodations and an array of advanced features that make every journey extraordinary.",type:"7-Seater SUV",images:[{url:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",caption:"Exterior View"},{url:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",caption:"Bold Design"},{url:"https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000",caption:"Spacious Interior"},{url:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000",caption:"Third Row Seating"},{url:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",caption:"Technology Suite"}],price:"Starting at $58,990",specs:{range:"323 miles",acceleration:"4.4s 0-60mph",topSpeed:"112 mph",motorPower:"380 kW",batteryCapacity:"108.8 kWh",chargingTime:"30 min (30-80%)",seating:"7 passengers",driveType:"All-Wheel Drive"},features:["Three-Row Seating","Dual Motor Performance","Premium Quilted Leather","Panoramic Glass Roof","Individual Seat Climate Control","Premium Audio System","Gesture Control","Advanced Autopilot"],colors:[{name:"Imperial Red",hex:"#8b0000"},{name:"Graphite Black",hex:"#2d3436"},{name:"Champagne Gold",hex:"#d4af37"},{name:"Celestial White",hex:"#fafafa"}],highlights:[{title:"Seven-Seat Luxury",description:"Premium comfort for every passenger across three spacious rows",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200"},{title:"Powerful Performance",description:"Dual motors provide commanding power and confident handling",image:"https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200"},{title:"Advanced Technology",description:"Cutting-edge features and connectivity throughout",image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200"}]},han:{id:"han",name:"Han",tagline:"Executive Excellence",description:"The Han flagship sedan represents the apex of BYD's engineering prowess and design philosophy. This executive-class vehicle combines breathtaking aesthetics with phenomenal performance, offering a driving experience that rivals the world's most prestigious luxury sedans while delivering zero emissions.",type:"Executive Sedan",images:[{url:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",caption:"Exterior View"},{url:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",caption:"Elegant Profile"},{url:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000",caption:"Executive Interior"},{url:"https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000",caption:"Premium Craftsmanship"},{url:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",caption:"Aerodynamic Design"}],price:"Starting at $54,990",specs:{range:"379 miles",acceleration:"3.9s 0-60mph",topSpeed:"115 mph",motorPower:"380 kW",batteryCapacity:"85.4 kWh",chargingTime:"25 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["Dragon Face Design Language","Dual Motor Performance","Executive Rear Seating","Premium Leather Upholstery","Advanced Infotainment","Adaptive Cruise Control","Massage Function Seats","Ambient Lighting System"],colors:[{name:"Dynasty Black",hex:"#000000"},{name:"Sovereign Silver",hex:"#c0c0c0"},{name:"Royal Blue",hex:"#1e3a8a"},{name:"Prestige White",hex:"#ffffff"}],highlights:[{title:"Flagship Design",description:"Breathtaking aesthetics that command attention and respect",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=1200"},{title:"Executive Comfort",description:"First-class accommodations with premium materials throughout",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200"},{title:"Maximum Range",description:"Nearly 380 miles of range for long-distance confidence",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200"}]},seal:{id:"seal",name:"Seal",tagline:"Performance Unleashed",description:"The Seal performance sedan combines athletic design with exhilarating electric power. Inspired by the ocean's most agile creatures, this dynamic sedan delivers track-ready performance, stunning aesthetics, and advanced technology in a package that redefines what an electric sports sedan can be.",type:"Performance Sedan",images:[{url:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",caption:"Exterior View"},{url:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",caption:"Sport Profile"},{url:"https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000",caption:"Driver-Focused Cockpit"},{url:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000",caption:"Sport Seats"},{url:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",caption:"Dynamic Lines"}],price:"Starting at $44,990",specs:{range:"310 miles",acceleration:"3.6s 0-60mph",topSpeed:"112 mph",motorPower:"390 kW",batteryCapacity:"82.5 kWh",chargingTime:"26 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["Ocean Aesthetic Design","Dual Motor AWD","Sport-Tuned Suspension","Performance Braking System","Track Mode","Sport Seats","Digital Instrument Cluster","Launch Control"],colors:[{name:"Racing Blue",hex:"#0066cc"},{name:"Storm Grey",hex:"#6c757d"},{name:"Carbon Black",hex:"#1a1a1a"},{name:"Pearl White",hex:"#f8f9fa"}],highlights:[{title:"Thrilling Performance",description:"0-60mph in 3.6 seconds with dual motor all-wheel drive power",image:"https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200"},{title:"Dynamic Handling",description:"Sport-tuned suspension delivers precise, responsive handling",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200"},{title:"Track-Ready",description:"Performance modes and launch control for ultimate driving excitement",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200"}]}}[e||""];if(!i)return a.jsxs("div",{style:{padding:"10rem 5%",textAlign:"center"},children:[a.jsx("h1",{children:"Model not found"}),a.jsx(pt,{to:"/models",children:"← Back to Models"})]});const o=()=>{r(l=>(l+1)%i.images.length)},s=()=>{r(l=>(l-1+i.images.length)%i.images.length)};return a.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[a.jsx("style",{children:`
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
      `}),a.jsx(pt,{to:"/models",className:"back-link",children:"← All Models"}),a.jsxs("div",{className:"model-detail-hero",children:[a.jsx("div",{className:"carousel-container",children:i.images.map((l,c)=>a.jsx("div",{className:`carousel-image ${c===t?"active":""}`,children:a.jsx("img",{src:l.url,alt:`${i.name} - ${l.caption}`})},c))}),a.jsx("div",{className:"image-caption",children:i.images[t].caption}),a.jsxs("div",{className:"carousel-controls",children:[a.jsx("button",{className:"carousel-button",onClick:s,children:"‹"}),a.jsx("button",{className:"carousel-button",onClick:o,children:"›"})]}),a.jsx("div",{className:"carousel-indicators",children:i.images.map((l,c)=>a.jsx("div",{className:`indicator ${c===t?"active":""}`,onClick:()=>r(c)},c))}),a.jsxs("div",{className:"hero-detail-content",children:[a.jsx("div",{className:"model-type-badge-hero",children:i.type}),a.jsx("h1",{children:i.name}),a.jsx("p",{className:"hero-tagline",children:i.tagline}),a.jsx("p",{className:"hero-price",children:i.price})]})]}),a.jsx("section",{className:"detail-section dark-section",children:a.jsxs("div",{className:"section-container",children:[a.jsx("h2",{className:"section-title",children:"Overview"}),a.jsx("p",{className:"description-text",style:{color:"rgba(255,255,255,0.8)"},children:i.description}),a.jsxs("div",{className:"specs-grid",children:[a.jsxs("div",{className:"spec-card",children:[a.jsx("div",{className:"spec-label",children:"Range"}),a.jsx("div",{className:"spec-value",children:i.specs.range})]}),a.jsxs("div",{className:"spec-card",children:[a.jsx("div",{className:"spec-label",children:"0-60 MPH"}),a.jsx("div",{className:"spec-value",children:i.specs.acceleration})]}),a.jsxs("div",{className:"spec-card",children:[a.jsx("div",{className:"spec-label",children:"Top Speed"}),a.jsx("div",{className:"spec-value",children:i.specs.topSpeed})]}),a.jsxs("div",{className:"spec-card",children:[a.jsx("div",{className:"spec-label",children:"Motor Power"}),a.jsx("div",{className:"spec-value",children:i.specs.motorPower})]}),a.jsxs("div",{className:"spec-card",children:[a.jsx("div",{className:"spec-label",children:"Battery"}),a.jsx("div",{className:"spec-value",children:i.specs.batteryCapacity})]}),a.jsxs("div",{className:"spec-card",children:[a.jsx("div",{className:"spec-label",children:"Charging"}),a.jsx("div",{className:"spec-value",children:i.specs.chargingTime})]}),a.jsxs("div",{className:"spec-card",children:[a.jsx("div",{className:"spec-label",children:"Seating"}),a.jsx("div",{className:"spec-value",children:i.specs.seating})]}),a.jsxs("div",{className:"spec-card",children:[a.jsx("div",{className:"spec-label",children:"Drive Type"}),a.jsx("div",{className:"spec-value",children:i.specs.driveType})]})]})]})}),a.jsx("section",{className:"detail-section light-section",children:a.jsxs("div",{className:"section-container",children:[a.jsx("h2",{className:"section-title",children:"Key Highlights"}),a.jsx("div",{className:"highlights-grid",children:i.highlights.map((l,c)=>a.jsxs("div",{className:"highlight-card",children:[a.jsx("div",{className:"highlight-image",style:{backgroundImage:`url(${l.image})`}}),a.jsxs("div",{className:"highlight-content",children:[a.jsx("h3",{className:"highlight-title",children:l.title}),a.jsx("p",{className:"highlight-description",children:l.description})]})]},c))})]})}),a.jsx("section",{className:"detail-section dark-section",children:a.jsxs("div",{className:"section-container",children:[a.jsx("h2",{className:"section-title",children:"Premium Features"}),a.jsx("div",{className:"features-grid",children:i.features.map((l,c)=>a.jsx("div",{className:"feature-item",children:l},c))})]})}),a.jsx("section",{className:"detail-section light-section",children:a.jsxs("div",{className:"section-container",children:[a.jsx("h2",{className:"section-title",children:"Available Colors"}),a.jsx("div",{className:"colors-grid",children:i.colors.map((l,c)=>a.jsxs("div",{className:"color-option",children:[a.jsx("div",{className:"color-swatch",style:{backgroundColor:l.hex}}),a.jsx("div",{className:"color-name",children:l.name})]},c))})]})}),a.jsx("section",{className:"cta-section",children:a.jsxs("div",{className:"section-container",children:[a.jsxs("h2",{className:"section-title",style:{color:"#333"},children:["Experience the ",i.name]}),a.jsxs("p",{style:{fontSize:"1.3rem",color:"#666",fontFamily:"Montserrat, sans-serif",fontWeight:300},children:["Visit Evergreen Motors today and discover why the ",i.name," is redefining electric mobility"]}),a.jsxs("div",{className:"cta-buttons",children:[a.jsx(pt,{to:"/contact?subject=test-drive",className:"cta-button cta-button-primary",children:"Schedule Test Drive"}),a.jsx(pt,{to:"/contact",className:"cta-button cta-button-secondary",children:"Contact Us"})]})]})})]})},hh=()=>(x.useEffect(()=>{const e={threshold:.1,rootMargin:"0px 0px -100px 0px"},t=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&n.target.classList.add("fade-in-visible")})},e);return document.querySelectorAll(".fade-in-section").forEach(r=>t.observe(r)),()=>t.disconnect()},[]),a.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .luxury-tech-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),
                      url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2400') center/cover;
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
          font-size: 1.3rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
          max-width: 900px;
          margin: 0 auto;
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

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

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
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
          background-size: cover;
          background-position: center;
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
        }

        .blade-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          padding: 0;
          min-height: 100vh;
          display: flex;
          align-items: stretch;
        }

        .blade-split {
          display: flex;
          width: 100%;
          min-height: 100vh;
        }

        .blade-content {
          flex: 1;
          padding: 8rem 6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: white;
        }

        .blade-content h2 {
          font-size: 4rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
          line-height: 1.3;
        }

        .blade-content h2 .highlight {
          color: #4a9eff;
        }

        .blade-content > p {
          font-size: 1.3rem;
          line-height: 2;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-bottom: 4rem;
        }

        .blade-features {
          display: grid;
          gap: 3rem;
        }

        .blade-feature {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.03) 0%, rgba(0, 212, 255, 0.03) 100%);
          border-left: 4px solid #4a9eff;
          transition: all 0.4s ease;
        }

        .blade-feature:hover {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.08) 0%, rgba(0, 212, 255, 0.08) 100%);
          border-left-width: 6px;
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(74, 158, 255, 0.1);
        }

        .blade-feature-icon {
          width: 60px;
          height: 60px;
          min-width: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: white;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
          box-shadow: 0 8px 20px rgba(74, 158, 255, 0.3);
        }

        .blade-feature-text h4 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 1px;
          color: #1a1a1a;
        }

        .blade-feature-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .blade-visual {
          flex: 1;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.8) 0%, rgba(0, 212, 255, 0.8) 100%),
                      url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200') center/cover;
          position: relative;
        }

        .blade-visual::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 100%);
        }

        .nev-section {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          color: white;
        }

        .nev-container {
          max-width: 1400px;
          text-align: center;
        }

        .nev-container h2 {
          font-size: 5rem;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nev-subtitle {
          font-size: 1.3rem;
          line-height: 2;
          max-width: 1000px;
          margin: 0 auto 6rem;
          color: rgba(255,255,255,0.85);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .nev-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          margin-top: 6rem;
        }

        .nev-stat {
          padding: 3rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
          border: 2px solid rgba(74, 158, 255, 0.3);
          transition: all 0.4s ease;
        }

        .nev-stat:hover {
          border-color: rgba(74, 158, 255, 0.6);
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.3);
        }

        .nev-stat-number {
          font-size: 4.5rem;
          font-weight: 300;
          letter-spacing: 3px;
          font-family: 'Cormorant Garamond', serif;
          color: #4a9eff;
          margin-bottom: 1rem;
        }

        .nev-stat-label {
          font-size: 1.2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
        }

        @media (max-width: 1024px) {
          .tech-grid,
          .blade-split {
            grid-template-columns: 1fr;
            flex-direction: column;
          }

          .tech-grid {
            gap: 4rem;
          }

          .nev-stats {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-content h1 {
            font-size: 4rem;
            letter-spacing: 8px;
          }

          .platform-header h2,
          .nev-container h2 {
            font-size: 3.5rem;
          }

          .tech-content h3,
          .blade-content h2 {
            font-size: 2.5rem;
          }

          .blade-content {
            padding: 4rem 3rem;
          }

          .blade-visual {
            min-height: 400px;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
            letter-spacing: 5px;
          }

          .luxury-section {
            padding: 4rem 5%;
          }

          .blade-feature {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
      `}),a.jsx("div",{className:"luxury-tech-hero",children:a.jsxs("div",{className:"hero-content",children:[a.jsx("h1",{children:"TECHNOLOGY"}),a.jsx("p",{className:"subtitle",children:"Pioneering the Future of Clean Mobility"}),a.jsx("p",{children:"Advanced electric vehicle technology that redefines performance, safety, and environmental responsibility. Experience the most reliable and sophisticated zero-emission vehicles on the planet."})]})}),a.jsx("section",{className:"luxury-section platform-section fade-in-section",children:a.jsxs("div",{style:{maxWidth:"1400px",width:"100%"},children:[a.jsxs("div",{className:"platform-header",children:[a.jsx("h2",{children:"e-Platform 3.0"}),a.jsx("p",{className:"platform-subtitle",children:"The world's most advanced electric vehicle architecture"})]}),a.jsxs("div",{className:"tech-grid",children:[a.jsxs("div",{className:"tech-content",children:[a.jsx("span",{className:"tech-number",children:"01"}),a.jsx("h3",{children:"Revolutionary Safety"}),a.jsx("p",{children:"The proprietary Blade Battery technology sets new industry standards for battery safety. Utilizing advanced lithium iron phosphate chemistry, our batteries pass the industry's most rigorous nail penetration test without fire or thermal runaway, providing absolute peace of mind for every journey."})]}),a.jsx("div",{className:"tech-visual",style:{backgroundImage:"url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200)"}})]}),a.jsxs("div",{className:"tech-grid",children:[a.jsx("div",{className:"tech-visual",style:{backgroundImage:"url(https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200)"}}),a.jsxs("div",{className:"tech-content",children:[a.jsx("span",{className:"tech-number",children:"02"}),a.jsx("h3",{children:"Exceptional Efficiency"}),a.jsx("p",{children:"The world's first mass-produced 8-in-1 electric powertrain integrates motor, controller, reducer, on-board charger, DC converter, power distribution, battery management, and vehicle control into one seamless system. This revolutionary integration achieves ranges exceeding 600 kilometers on a single charge while optimizing space and energy efficiency."})]})]}),a.jsxs("div",{className:"tech-grid",children:[a.jsxs("div",{className:"tech-content",children:[a.jsx("span",{className:"tech-number",children:"03"}),a.jsx("h3",{children:"Intelligent Performance"}),a.jsx("p",{children:"Advanced iTAC technology intelligently allocates drive torque in real-time, utilizing precise torque distribution and negative torque output to eliminate wheel slip. The sophisticated vehicle control system continuously monitors driving conditions, optimizing performance, comfort, and safety for your unique journey."})]}),a.jsx("div",{className:"tech-visual",style:{backgroundImage:"url(https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1200)"}})]}),a.jsxs("div",{className:"tech-grid",children:[a.jsx("div",{className:"tech-visual",style:{backgroundImage:"url(https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200)"}}),a.jsxs("div",{className:"tech-content",children:[a.jsx("span",{className:"tech-number",children:"04"}),a.jsx("h3",{children:"Refined Design"}),a.jsx("p",{children:"Aerodynamic excellence meets intelligent packaging. The extended wheelbase and optimized proportions significantly expand interior space while achieving drag coefficients as low as 0.21 Cd. This perfect balance of form and function delivers exceptional range, whisper-quiet operation, and uncompromised passenger comfort."})]})]})]})}),a.jsx("section",{className:"blade-section fade-in-section",children:a.jsxs("div",{className:"blade-split",children:[a.jsxs("div",{className:"blade-content",children:[a.jsxs("h2",{children:[a.jsx("span",{className:"highlight",children:"Blade Battery"}),a.jsx("br",{}),"Technology"]}),a.jsx("p",{children:"The revolutionary Blade Battery represents a quantum leap in energy storage safety, performance, and longevity. This groundbreaking technology redefines what is possible in electric vehicle power systems."}),a.jsxs("div",{className:"blade-features",children:[a.jsxs("div",{className:"blade-feature",children:[a.jsx("span",{className:"blade-feature-icon",children:"01"}),a.jsxs("div",{className:"blade-feature-text",children:[a.jsx("h4",{children:"Unmatched Safety"}),a.jsx("p",{children:"Successfully passes the nail penetration test without fire or smoke, a feat unmatched by conventional lithium batteries. Advanced thermal management ensures optimal performance in all conditions."})]})]}),a.jsxs("div",{className:"blade-feature",children:[a.jsx("span",{className:"blade-feature-icon",children:"02"}),a.jsxs("div",{className:"blade-feature-text",children:[a.jsx("h4",{children:"Space Optimization"}),a.jsx("p",{children:"The unique blade-shaped cell design increases volumetric efficiency by 50% compared to traditional battery packs, delivering more energy in a smaller footprint."})]})]}),a.jsxs("div",{className:"blade-feature",children:[a.jsx("span",{className:"blade-feature-icon",children:"03"}),a.jsxs("div",{className:"blade-feature-text",children:[a.jsx("h4",{children:"Extended Lifespan"}),a.jsx("p",{children:"Advanced lithium iron phosphate chemistry delivers over 3,000 charge cycles with minimal degradation, ensuring your vehicle maintains exceptional performance for years."})]})]}),a.jsxs("div",{className:"blade-feature",children:[a.jsx("span",{className:"blade-feature-icon",children:"04"}),a.jsxs("div",{className:"blade-feature-text",children:[a.jsx("h4",{children:"Environmental Responsibility"}),a.jsx("p",{children:"Cobalt-free construction reduces environmental impact while maintaining exceptional performance, aligning with our commitment to sustainable mobility."})]})]})]})]}),a.jsx("div",{className:"blade-visual"})]})}),a.jsx("section",{className:"luxury-section nev-section fade-in-section",children:a.jsxs("div",{className:"nev-container",children:[a.jsx("h2",{children:"New Energy Vehicles"}),a.jsx("p",{className:"nev-subtitle",children:"As the leading clean energy automotive dealer in the Turks and Caicos Islands, we are proud to represent BYD's world-class electric vehicles. BYD leads the global New Energy Vehicle revolution with groundbreaking innovations in battery technology, electric powertrains, and sustainable manufacturing. These are the most reliable, most advanced, and most environmentally responsible vehicles available today, reshaping transportation and creating a cleaner future for generations to come."}),a.jsxs("div",{className:"nev-stats",children:[a.jsxs("div",{className:"nev-stat",children:[a.jsx("div",{className:"nev-stat-number",children:"3M+"}),a.jsx("div",{className:"nev-stat-label",children:"Annual Global Sales"})]}),a.jsxs("div",{className:"nev-stat",children:[a.jsx("div",{className:"nev-stat-number",children:"70+"}),a.jsx("div",{className:"nev-stat-label",children:"Countries & Regions"})]}),a.jsxs("div",{className:"nev-stat",children:[a.jsx("div",{className:"nev-stat-number",children:"#1"}),a.jsx("div",{className:"nev-stat-label",children:"NEV Manufacturer Worldwide"})]})]})]})})]})),gh=()=>{const e=x.useRef(null);return a.jsxs("section",{style:{position:"relative",height:"140vh",width:"100%",overflow:"hidden"},children:[a.jsx("video",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"},autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:a.jsx("source",{src:"/About/Hero.mp4",type:"video/mp4"})}),a.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.3)"}})]})},xh=()=>a.jsxs("section",{style:{position:"relative",width:"100%",height:"140vh",overflow:"hidden"},children:[a.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:a.jsx("img",{src:"/About/AboutBYD.jpg",alt:"About BYD",style:{width:"100%",height:"100%",objectFit:"cover"}})}),a.jsx("div",{style:{position:"relative",width:"100%",maxWidth:"1600px",margin:"0 auto",padding:"6rem 4rem 4rem",textAlign:"center"},children:a.jsxs("div",{style:{maxWidth:"80rem",margin:"0 auto"},children:[a.jsx("h2",{style:{fontSize:"3.5rem",fontWeight:"700",color:"#000",marginBottom:"2rem",lineHeight:"1.2"},children:"About BYD"}),a.jsx("p",{style:{fontSize:"1.125rem",color:"#000",lineHeight:"1.8",fontWeight:"300"},children:"Founded in 1994, BYD is a high-tech company devoted to leveraging technological innovations for a better life. After more than 31 years of rapid growth, BYD has played a significant role in industries related to electronics, auto, renewable energy and rail transit. With a focus on energy acquisition, storage, and application, BYD offers comprehensive zero-emission new energy solutions."})]})})]}),vh=()=>{const e=[{icon:"/About/icon1pc.png",title:"Auto",image:"/About/diversification-auto.jpg"},{icon:"/About/icon2pc.png",title:"Rail Transit",image:"/About/diversification-rail-transit.jpg"},{icon:"/About/icon3pc.png",title:"Renewable Energy",image:"/About/diversification-renewable-energy.jpg"},{icon:"/About/icon4pc.png",title:"Electronics",image:"/About/diversification-electronics.jpg"}];return a.jsxs("section",{style:{position:"relative",width:"100%",padding:"8rem 0"},children:[a.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:0},children:[a.jsx("img",{src:"/About/Diversification.jpg",alt:"Diversification Background",style:{width:"100%",height:"100%",objectFit:"cover"}}),a.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)"}})]}),a.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:"1200px",margin:"0 auto",padding:"0 2rem"},children:[a.jsx("h2",{style:{fontSize:"3rem",fontWeight:"bold",textAlign:"center",marginBottom:"4rem",color:"white"},children:"Diversification"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"2.5rem"},children:e.map((t,r)=>a.jsxs("div",{style:{backgroundColor:"transparent",borderRadius:"8px",overflow:"hidden",border:"2px solid white",transition:"transform 0.3s",padding:"0.5rem"},children:[a.jsxs("div",{style:{padding:"1.5rem 1rem 1rem",textAlign:"center"},children:[a.jsx("div",{style:{width:"60px",height:"60px",margin:"0 auto 0.75rem",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("img",{src:t.icon,alt:t.title,style:{width:"100%",height:"100%",objectFit:"contain"}})}),a.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:600,color:"white",marginBottom:"1rem"},children:t.title})]}),a.jsx("div",{style:{aspectRatio:"4/3",overflow:"hidden",borderRadius:"4px"},children:a.jsx("img",{src:t.image,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s"},onMouseEnter:n=>n.currentTarget.style.transform="scale(1.1)",onMouseLeave:n=>n.currentTarget.style.transform="scale(1)"})})]},r))})]})]})},Mt=({title:e,description:t,image:r,reverse:n,darkText:i})=>a.jsxs("section",{style:{position:"relative",width:"100%",minHeight:"140vh",overflow:"hidden"},children:[a.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:a.jsx("img",{src:r,alt:e,style:{width:"100%",height:"100%",objectFit:"cover"}})}),a.jsx("div",{style:{position:"relative",width:"100%",maxWidth:"1600px",margin:"0 auto",padding:"6rem 4rem 4rem",textAlign:"center"},children:a.jsxs("div",{style:{maxWidth:"56rem",margin:"0 auto"},children:[a.jsx("h2",{style:{fontSize:"3.5rem",fontWeight:"700",marginBottom:"2rem",color:i?"#252728":"white",lineHeight:"1.2"},children:e}),a.jsx("p",{style:{fontSize:"1.125rem",lineHeight:"1.8",color:i?"#4b5563":"white",fontWeight:"300"},children:t})]})})]}),Ml=({title:e,subtitle:t,features:r,image:n})=>a.jsxs("section",{style:{position:"relative",width:"100%",height:"140vh",display:"flex",alignItems:"center",overflow:"hidden"},children:[a.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:a.jsx("img",{src:n,alt:e,style:{width:"100%",height:"100%",objectFit:"cover"}})}),a.jsxs("div",{style:{position:"relative",maxWidth:"1600px",margin:"0 auto",padding:"0 1rem"},children:[a.jsxs("div",{style:{marginBottom:"3rem"},children:[a.jsx("h2",{style:{fontSize:"3rem",fontWeight:"bold",color:"white",marginBottom:"1rem"},children:e}),t&&a.jsx("p",{style:{fontSize:"1.125rem",color:"white",opacity:.9},children:t})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:r.map((i,o)=>a.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",borderRadius:"8px",padding:"1.5rem"},children:[a.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:600,color:"white",marginBottom:"0.75rem"},children:i.title}),a.jsx("p",{style:{color:"white",opacity:.9,lineHeight:"1.75"},children:i.description})]},o))})]})]}),yh=()=>{const e=[{title:"Enhanced safety",description:"The unique flat rectangle shape improves cooling efficiency and preheating performance. Blade Battery has safely passed the nail penetration test without emitting fire or smoke."},{title:"Optimised strength",description:"Arranged in an array in one pack, each cell serves as a structural beam to help withstand the force."},{title:"Longer range",description:"The space utilisation of the Blade Battery has been increased by over 50% compared with traditional battery packs."},{title:"Longer lifecycle",description:"Blade Battery has a long battery life with over 5000 charge and discharge cycles."}],t=[{title:"Safety",description:"The e-Platform 3.0 doubles the rigidity of the entire vehicle after integrating the Blade Battery into the car body."},{title:"High efficiency",description:"Equipped with the world's first mass-produced 8-in-1 electric powertrain as standard, the overall system efficiency is up to 89%."},{title:"Intelligence",description:"Evolving from distributed electronic and electrical architecture into an integrated domain-controlled architecture."},{title:"Aesthetics",description:"The vehicle features shorter overhangs and a longer wheel base, significantly expanding the passenger space."}];return a.jsx("div",{style:{minHeight:"140vh",backgroundColor:"white"},children:a.jsxs("main",{children:[a.jsx(gh,{}),a.jsx(xh,{}),a.jsx(vh,{}),a.jsx(Mt,{title:"Globalisation",description:"BYD's new energy vehicles have established a presence in 112 countries and regions worldwide, while its passenger vehicles have reached 102 countries and regions.",image:"/About/Globalization.jpg"}),a.jsx(Mt,{title:"Auto",description:"BYD has developed the Blade Battery and dual-mode hybrid power technology, accelerating the once-in-a-century transition from fossil fuel powered vehicles to electric vehicles.",image:"/About/Auto.jpg"}),a.jsx(Ml,{title:"Blade Battery",features:e,image:"/About/Blade.jpg"}),a.jsx(Ml,{title:"e-Platform 3.0",subtitle:"Give full play to the advantages of intelligence, efficiency, safety, and aesthetics that electrification brings.",features:t,image:"/About/E-Platform.jpg"}),a.jsx(Mt,{title:"Semiconductor Chip",description:"Semiconductor chip, the 'CPU' of new energy vehicles, is the core technology of the whole industry.",image:"/About/SemiCondutorChip.jpg"}),a.jsx(Mt,{title:"BYD Intelligent Cockpit System",description:"The smartphone functions are integrated into the in-vehicle platform.",image:"/About/DiLink.jpg"}),a.jsx(Mt,{title:"Vehicle Safety",description:"Numerous challenging tests for top quality",image:"/About/VehicleSafety.jpg"}),a.jsx(Mt,{title:"Market Performance",description:"As of the end of April 2025, BYD's cumulative new energy vehicle (NEV) sales exceeded 11.9 million units. On November 18, 2024, BYD became the world's first automaker to produce 10 million NEVs.",image:"/About/MarketPerformance.jpg"}),a.jsx(Mt,{title:"Social Responsibility",description:"At the beginning of 2020, in the midst of Covid-19, BYD responded quickly and announced that it would produce face masks to help alleviate mask shortages around the world.",image:"/About/SocialResponsibility.jpg",darkText:!0})]})})},wh=({src:e,children:t,className:r="",priority:n=!1,style:i={}})=>{const[o,s]=x.useState(!1),[l,c]=x.useState(n),[u,h]=x.useState(n),f=x.useRef(null);return x.useEffect(()=>{if(n)return;const g=new IntersectionObserver(w=>{w.forEach(b=>{b.isIntersecting&&(h(!0),c(!0),g.disconnect())})},{rootMargin:"100px"});return f.current&&g.observe(f.current),()=>g.disconnect()},[n]),x.useEffect(()=>{if(!u)return;const g=new Image;g.src=e,g.onload=()=>s(!0)},[u,e]),a.jsxs("div",{ref:f,className:r,style:{...i,position:"relative",backgroundImage:o?`url(${e})`:"none",backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 0.5s ease"},children:[!o&&a.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",filter:"blur(20px)",zIndex:0}}),a.jsx("div",{style:{position:"relative",zIndex:1},children:t})]})},bh=e=>{const t=document.createElement("link");t.rel="preload",t.as="image",t.href=e,document.head.appendChild(t)};class bn{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const jh=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},se={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:jh()},ds=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},kh=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=ds(e);se.publicKey=r.publicKey,se.blockHeadless=r.blockHeadless,se.storageProvider=r.storageProvider,se.blockList=r.blockList,se.limitRate=r.limitRate,se.origin=r.origin||t},sd=async(e,t,r={})=>{const n=await fetch(se.origin+e,{method:"POST",headers:r,body:t}),i=await n.text(),o=new bn(n.status,i);if(n.ok)return o;throw o},ld=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Nh=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},cd=e=>e.webdriver||!e.languages||e.languages.length===0,ud=()=>new bn(451,"Unavailable For Headless Browser"),Sh=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Ch=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Eh=(e,t)=>e instanceof FormData?e.get(t):e[t],dd=(e,t)=>{if(Ch(e))return!1;Sh(e.list,e.watchVariable);const r=Eh(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},md=()=>new bn(403,"Forbidden"),zh=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},Ph=async(e,t,r)=>{const n=Number(await r.get(e)||0);return t-Date.now()+n},fd=async(e,t,r)=>{if(!t.throttle||!r)return!1;zh(t.throttle,t.id);const n=t.id||e;return await Ph(n,t.throttle,r)>0?!0:(await r.set(n,Date.now().toString()),!1)},pd=()=>new bn(429,"Too Many Requests"),Dh=async(e,t,r,n)=>{const i=ds(n),o=i.publicKey||se.publicKey,s=i.blockHeadless||se.blockHeadless,l=i.storageProvider||se.storageProvider,c={...se.blockList,...i.blockList},u={...se.limitRate,...i.limitRate};return s&&cd(navigator)?Promise.reject(ud()):(ld(o,e,t),Nh(r),r&&dd(c,r)?Promise.reject(md()):await fd(location.pathname,u,l)?Promise.reject(pd()):sd("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},Th=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Mh=e=>typeof e=="string"?document.querySelector(e):e,Lh=async(e,t,r,n)=>{const i=ds(n),o=i.publicKey||se.publicKey,s=i.blockHeadless||se.blockHeadless,l=se.storageProvider||i.storageProvider,c={...se.blockList,...i.blockList},u={...se.limitRate,...i.limitRate};if(s&&cd(navigator))return Promise.reject(ud());const h=Mh(r);ld(o,e,t),Th(h);const f=new FormData(h);return dd(c,f)?Promise.reject(md()):await fd(location.pathname,u,l)?Promise.reject(pd()):(f.append("lib_version","4.4.1"),f.append("service_id",e),f.append("template_id",t),f.append("user_id",o),sd("/api/v1.0/email/send-form",f))},Ll={init:kh,send:Dh,sendForm:Lh,EmailJSResponseStatus:bn},_h=()=>{const[e]=Gp(),[t,r]=x.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,i]=x.useState("idle"),[o,s]=x.useState("");x.useEffect(()=>{bh("/contact.jpg"),Ll.init("qDixnNBz5aFVI9l49");const u=e.get("subject");u&&r(h=>({...h,subject:u}))},[e]);const l=u=>{const{name:h,value:f}=u.target;r(g=>({...g,[h]:f}))},c=async u=>{u.preventDefault(),i("loading"),s("");try{const h={to_email:"joshuameghoo@gmail.com",from_name:t.name,from_email:t.email,phone:t.phone||"Not provided",subject:t.subject,message:t.message,reply_to:t.email},f=await Ll.send("service_gre9op6","template_bji7553",h);console.log("Email sent successfully:",f),i("success"),setTimeout(()=>{r({name:"",email:"",phone:"",subject:"",message:""}),i("idle")},3e3)}catch(h){console.error("Failed to send email:",h),i("error"),s("Failed to send message. Please try again or contact us directly at joshuameghoo@gmail.com"),setTimeout(()=>{i("idle"),s("")},5e3)}};return a.jsxs("div",{children:[a.jsx("style",{children:`
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
      `}),a.jsx(wh,{src:"/contact.jpg",className:"luxury-contact-hero",priority:!0,style:{backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll"},children:a.jsx("div",{className:"hero-content",children:a.jsx("h1",{children:"CONTACT US"})})}),a.jsx("section",{className:"luxury-section",children:a.jsxs("div",{className:"section-content",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("div",{className:"section-label",children:"Get In Touch"}),a.jsx("h2",{className:"section-title",children:"Let's Connect"})]}),a.jsxs("div",{className:"contact-grid",children:[a.jsxs("div",{className:"contact-info-box",children:[a.jsx("h2",{children:"Information"}),a.jsxs("div",{className:"contact-item",children:[a.jsx("h3",{children:"Phone"}),a.jsx("p",{children:a.jsx("a",{href:"tel:+16494329988",children:"+1 (649) 432-9988"})})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("h3",{children:"Email"}),a.jsx("p",{children:a.jsx("a",{href:"mailto:info@evergreenmotor.tc",children:"info@evergreenmotor.tc"})}),a.jsx("p",{children:a.jsx("a",{href:"mailto:sales@evergreenmotor.tc",children:"sales@evergreenmotor.tc"})})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("h3",{children:"Address"}),a.jsx("p",{children:"Evergreen Motors Headquarters"}),a.jsx("p",{children:"Regent Village"}),a.jsx("p",{children:"Grace Bay, Providenciales"}),a.jsx("p",{children:"Turks & Caicos"})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx("h3",{children:"Business Hours"}),a.jsx("p",{children:"Monday - Friday: 9:00 AM - 6:00 PM"}),a.jsx("p",{children:"Saturday: 10:00 AM - 4:00 PM"}),a.jsx("p",{children:"Sunday: Closed"})]})]}),a.jsxs("div",{className:"contact-form-box",children:[a.jsx("h2",{children:"Send Message"}),a.jsx("p",{className:"form-subtitle",children:"We'd love to hear from you. Fill out the form below and we'll be in touch shortly."}),n==="success"&&a.jsx("div",{className:"success-message",children:"Message sent successfully! We'll get back to you soon."}),n==="error"&&o&&a.jsx("div",{className:"error-message",children:o}),a.jsxs("form",{onSubmit:c,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:"Full Name *"}),a.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:l,required:!0,disabled:n==="loading"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email Address *"}),a.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:l,required:!0,disabled:n==="loading"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"phone",children:"Phone Number"}),a.jsx("input",{type:"tel",id:"phone",name:"phone",value:t.phone,onChange:l,disabled:n==="loading"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"subject",children:"Subject *"}),a.jsxs("select",{id:"subject",name:"subject",value:t.subject,onChange:l,required:!0,disabled:n==="loading",children:[a.jsx("option",{value:"",children:"Select a subject"}),a.jsx("option",{value:"general",children:"General Inquiry"}),a.jsx("option",{value:"sales",children:"Sales & Purchasing"}),a.jsx("option",{value:"service",children:"Service & Maintenance"}),a.jsx("option",{value:"test-drive",children:"Schedule a Test Drive"}),a.jsx("option",{value:"fleet",children:"Fleet Solutions"}),a.jsx("option",{value:"partnership",children:"Business Partnership"}),a.jsx("option",{value:"other",children:"Other"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",children:"Message *"}),a.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:l,required:!0,disabled:n==="loading"})]}),a.jsx("button",{type:"submit",className:"submit-btn",disabled:n==="loading",children:n==="loading"?"SENDING...":"SEND MESSAGE"})]})]})]})]})}),a.jsxs("section",{className:"map-section",children:[a.jsxs("div",{className:"map-header",children:[a.jsx("h2",{children:"FIND US"}),a.jsx("p",{children:"Visit us at our Providenciales location"})]}),a.jsx("div",{className:"map-wrapper",children:a.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8!2d-72.18076673136004!3d21.795217730892617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ3JzQyLjgiTiA3MsKwMTAnNTAuOCJX!5e0!3m2!1sen!2s!4v1234567890",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Evergreen Motors Location"})})]})]})},Bh=()=>(x.useEffect(()=>{const e=()=>{const r=window.location.hash;r&&setTimeout(()=>{const n=document.querySelector(r);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},100)};e();const t=()=>{e()};return window.addEventListener("hashchange",t),()=>{window.removeEventListener("hashchange",t)}},[]),a.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        .luxury-ownership-hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
                      url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2400') center/cover;
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
          font-size: 1.3rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
          max-width: 900px;
          margin: 0 auto;
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

        .service-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .section-container {
          max-width: 1400px;
          width: 100%;
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
          line-height: 1.8;
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
          z-index: 2;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 70px rgba(74, 158, 255, 0.2);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .service-image {
          height: 250px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.5s ease;
        }

        .service-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        .service-card:hover .service-image {
          transform: scale(1.05);
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

        .service-intervals {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(74, 158, 255, 0.2);
          padding: 4rem;
          margin-top: 5rem;
        }

        .service-intervals h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
          text-align: center;
        }

        .intervals-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .interval-item {
          padding: 2rem;
          background: white;
          border: 1px solid rgba(74, 158, 255, 0.1);
          transition: all 0.3s ease;
        }

        .interval-item:hover {
          border-color: rgba(74, 158, 255, 0.3);
          transform: translateX(10px);
        }

        .interval-item strong {
          display: block;
          font-size: 1.4rem;
          color: #4a9eff;
          margin-bottom: 0.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .interval-item span {
          font-size: 1.1rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .roadside-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          color: white;
        }

        .roadside-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .roadside-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .roadside-subtitle {
          font-size: 1.3rem;
          color: rgba(255,255,255,0.8);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .roadside-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .roadside-card {
          background: rgba(74, 158, 255, 0.05);
          border: 1px solid rgba(74, 158, 255, 0.2);
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .roadside-card:hover {
          transform: translateY(-10px);
          background: rgba(74, 158, 255, 0.1);
          border-color: rgba(74, 158, 255, 0.4);
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.3);
        }

        .roadside-image {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: transform 0.5s ease;
        }

        .roadside-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%);
        }

        .roadside-card:hover .roadside-image {
          transform: scale(1.05);
        }

        .roadside-content {
          padding: 2.5rem;
          text-align: center;
        }

        .roadside-card h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #4a9eff;
        }

        .roadside-card p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .emergency-contact {
          text-align: center;
          padding: 4rem;
          background: rgba(74, 158, 255, 0.05);
          border: 2px solid rgba(74, 158, 255, 0.3);
        }

        .emergency-contact h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #4a9eff;
        }

        .emergency-number {
          font-size: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 4px;
          color: white;
          margin-bottom: 1rem;
        }

        .emergency-number a {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }

        .emergency-number a:hover {
          color: #4a9eff;
        }

        .emergency-availability {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.6);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 2px;
        }

        .warranty-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 5%;
          scroll-margin-top: 80px;
        }

        .warranty-container {
          max-width: 1400px;
          width: 100%;
        }

        .warranty-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .warranty-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #333;
        }

        .warranty-header p {
          font-size: 1.4rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .warranty-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .warranty-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.5s ease;
          position: relative;
        }

        .warranty-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #4a9eff 0%, #00d4ff 100%);
          transform: scaleX(0);
          transition: transform 0.5s ease;
          z-index: 2;
        }

        .warranty-card:hover::before {
          transform: scaleX(1);
        }

        .warranty-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 70px rgba(74, 158, 255, 0.2);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .warranty-image {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: transform 0.5s ease;
        }

        .warranty-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        .warranty-card:hover .warranty-image {
          transform: scale(1.05);
        }

        .warranty-content {
          padding: 2.5rem;
          text-align: center;
        }

        .warranty-card h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #333;
        }

        .warranty-period {
          display: block;
          font-size: 1.6rem;
          color: #4a9eff;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
        }

        .warranty-card p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .coverage-details {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          border: 1px solid rgba(74, 158, 255, 0.2);
          padding: 4rem;
        }

        .coverage-details h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
          text-align: center;
        }

        .coverage-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .coverage-item {
          padding: 2rem;
          background: white;
          border: 1px solid rgba(74, 158, 255, 0.1);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .coverage-item:hover {
          border-color: rgba(74, 158, 255, 0.3);
          transform: translateX(10px);
        }

        .coverage-item::before {
          content: '';
          display: inline-block;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .coverage-item span {
          font-size: 1.1rem;
          color: #333;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
        }

        .membership-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          color: white;
        }

        .membership-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .membership-header h2 {
          font-size: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .membership-subtitle {
          font-size: 1.3rem;
          color: rgba(255,255,255,0.8);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .benefit-card {
          background: rgba(74, 158, 255, 0.05);
          border: 1px solid rgba(74, 158, 255, 0.2);
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          background: rgba(74, 158, 255, 0.1);
          border-color: rgba(74, 158, 255, 0.4);
          box-shadow: 0 20px 60px rgba(74, 158, 255, 0.3);
        }

        .benefit-image {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: transform 0.5s ease;
        }

        .benefit-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%);
        }

        .benefit-card:hover .benefit-image {
          transform: scale(1.05);
        }

        .benefit-content {
          padding: 2.5rem;
          text-align: center;
        }

        .benefit-card h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #4a9eff;
        }

        .benefit-card p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .charge-card-section {
          background: rgba(74, 158, 255, 0.05);
          border: 2px solid rgba(74, 158, 255, 0.3);
          padding: 4rem;
        }

        .charge-card-section h3 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
          text-align: center;
        }

        .charge-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .charge-feature {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .charge-feature strong {
          font-size: 1.3rem;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .charge-feature span {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.7);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .membership-contact {
          text-align: center;
          font-size: 1.2rem;
          color: rgba(255,255,255,0.8);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .membership-contact a {
          color: #4a9eff;
          text-decoration: none;
          transition: color 0.3s;
        }

        .membership-contact a:hover {
          color: #00d4ff;
        }

        .charging-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .charging-header {
          text-align: center;
          margin-bottom: 6rem;
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
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
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
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .charging-option:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 70px rgba(74, 158, 255, 0.2);
          border-color: rgba(74, 158, 255, 0.3);
        }

        .charging-image {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: transform 0.5s ease;
        }

        .charging-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        .charging-option:hover .charging-image {
          transform: scale(1.05);
        }

        .charging-content {
          padding: 2.5rem;
          text-align: center;
        }

        .charging-option h3 {
          font-size: 1.8rem;
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

        .charging-specs {
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          border: 1px solid rgba(74, 158, 255, 0.2);
          padding: 4rem;
          margin-top: 5rem;
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
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .spec-item {
          padding: 2rem;
          background: white;
          border: 1px solid rgba(74, 158, 255, 0.1);
          text-align: center;
          transition: all 0.3s ease;
        }

        .spec-item:hover {
          border-color: rgba(74, 158, 255, 0.3);
          transform: translateY(-5px);
        }

        .spec-item strong {
          display: block;
          font-size: 1.3rem;
          color: #4a9eff;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .spec-item span {
          font-size: 1rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .map-section {
          margin-top: 5rem;
          margin-bottom: 5rem;
        }

        .map-section h3 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #333;
          text-align: center;
        }

        .map-description {
          font-size: 1.2rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem auto;
          line-height: 1.8;
        }

        .map-container {
          background: white;
          border: 1px solid rgba(74, 158, 255, 0.2);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .map-note {
          padding: 2rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.05) 0%, rgba(53, 122, 189, 0.05) 100%);
          font-size: 1rem;
          color: #666;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          text-align: center;
          line-height: 1.6;
          border-top: 1px solid rgba(74, 158, 255, 0.1);
        }

        .charging-locations-list {
          padding: 3rem;
          background: linear-gradient(135deg, rgba(74, 158, 255, 0.03) 0%, rgba(53, 122, 189, 0.03) 100%);
        }

        .charging-locations-list h4 {
          font-size: 2rem;
          margin-bottom: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 2px;
          color: #4a9eff;
          text-align: center;
        }

        .locations-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .location-item {
          padding: 1.5rem;
          background: white;
          border: 1px solid rgba(74, 158, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .location-item:hover {
          border-color: rgba(74, 158, 255, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(74, 158, 255, 0.15);
        }

        .location-item strong {
          font-size: 1.2rem;
          color: #333;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .location-item span {
          font-size: 1rem;
          color: #4a9eff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
        }

        .location-address {
          font-size: 0.9rem;
          color: #999;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          margin-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .service-grid,
          .roadside-cards,
          .warranty-cards,
          .benefits-grid,
          .charging-options {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .intervals-grid,
          .coverage-grid,
          .charge-features,
          .specs-grid,
          .locations-grid {
            grid-template-columns: 1fr;
          }

          .hero-content h1 {
            font-size: 4rem;
            letter-spacing: 8px;
          }

          .service-header h2,
          .roadside-header h2,
          .warranty-header h2,
          .membership-header h2,
          .charging-header h2 {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
            letter-spacing: 5px;
          }

          .luxury-section {
            padding: 4rem 5%;
          }
        }
      `}),a.jsx("div",{className:"luxury-ownership-hero",children:a.jsxs("div",{className:"hero-content",children:[a.jsx("h1",{children:"OWNERSHIP"}),a.jsx("p",{className:"subtitle",children:"Premium Care for Your Investment"}),a.jsx("p",{children:"Comprehensive service, unmatched warranty coverage, and 24/7 roadside assistance. Experience ownership excellence with the most reliable electric vehicles on the planet."})]})}),a.jsx("section",{id:"service",className:"luxury-section service-section",children:a.jsxs("div",{className:"section-container",children:[a.jsxs("div",{className:"service-header",children:[a.jsx("h2",{children:"Service & Maintenance"}),a.jsx("p",{className:"service-subtitle",children:"Expert care from factory-trained technicians ensures your BYD maintains peak performance, reliability, and value throughout its lifetime."})]}),a.jsxs("div",{className:"service-grid",children:[a.jsxs("div",{className:"service-card",children:[a.jsx("div",{className:"service-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200)"}}),a.jsxs("div",{className:"service-content",children:[a.jsx("h3",{className:"service-title",children:"Scheduled Maintenance"}),a.jsx("p",{className:"service-description",children:"Comprehensive service intervals designed to keep your electric vehicle performing at its absolute best with minimal downtime."})]})]}),a.jsxs("div",{className:"service-card",children:[a.jsx("div",{className:"service-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1200)"}}),a.jsxs("div",{className:"service-content",children:[a.jsx("h3",{className:"service-title",children:"Battery Health Diagnostics"}),a.jsx("p",{className:"service-description",children:"Advanced diagnostic systems monitor and optimize your Blade Battery's performance, ensuring maximum range and longevity."})]})]}),a.jsxs("div",{className:"service-card",children:[a.jsx("div",{className:"service-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200)"}}),a.jsxs("div",{className:"service-content",children:[a.jsx("h3",{className:"service-title",children:"Software Updates"}),a.jsx("p",{className:"service-description",children:"Regular over-the-air and in-service software updates deliver new features, enhanced performance, and the latest improvements."})]})]})]}),a.jsxs("div",{className:"service-intervals",children:[a.jsx("h3",{children:"Maintenance Intervals"}),a.jsxs("div",{className:"intervals-grid",children:[a.jsxs("div",{className:"interval-item",children:[a.jsx("strong",{children:"First Service"}),a.jsx("span",{children:"6 months or 5,000 miles - Complimentary inspection"})]}),a.jsxs("div",{className:"interval-item",children:[a.jsx("strong",{children:"Regular Service"}),a.jsx("span",{children:"Every 12 months or 12,500 miles"})]}),a.jsxs("div",{className:"interval-item",children:[a.jsx("strong",{children:"Battery System Check"}),a.jsx("span",{children:"Annual comprehensive battery health assessment"})]}),a.jsxs("div",{className:"interval-item",children:[a.jsx("strong",{children:"Software Updates"}),a.jsx("span",{children:"As available - often delivered remotely"})]})]})]})]})}),a.jsx("section",{id:"roadside",className:"luxury-section roadside-section",children:a.jsxs("div",{className:"section-container",children:[a.jsxs("div",{className:"roadside-header",children:[a.jsx("h2",{children:"24/7 Roadside Assistance"}),a.jsx("p",{className:"roadside-subtitle",children:"Complete peace of mind with comprehensive roadside support available 24 hours a day, 7 days a week, 365 days a year, wherever your journey takes you."})]}),a.jsxs("div",{className:"roadside-cards",children:[a.jsxs("div",{className:"roadside-card",children:[a.jsx("div",{className:"roadside-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1632823469883-726d32e7d499?q=80&w=1200)"}}),a.jsxs("div",{className:"roadside-content",children:[a.jsx("h3",{children:"Emergency Repairs"}),a.jsx("p",{children:"On-site minor repairs and expert troubleshooting to get you back on the road quickly and safely."})]})]}),a.jsxs("div",{className:"roadside-card",children:[a.jsx("div",{className:"roadside-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200)"}}),a.jsxs("div",{className:"roadside-content",children:[a.jsx("h3",{children:"Towing Service"}),a.jsx("p",{children:"Complimentary towing to the nearest authorized service center whenever your vehicle needs professional attention."})]})]}),a.jsxs("div",{className:"roadside-card",children:[a.jsx("div",{className:"roadside-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200)"}}),a.jsxs("div",{className:"roadside-content",children:[a.jsx("h3",{children:"Emergency Charging"}),a.jsx("p",{children:"Mobile charging assistance delivered to your location if you unexpectedly run low on battery power."})]})]})]}),a.jsxs("div",{className:"emergency-contact",children:[a.jsx("h3",{children:"Emergency Contact"}),a.jsx("div",{className:"emergency-number",children:a.jsx("a",{href:"tel:+16494329988",children:"+1 (649) 432-9988"})}),a.jsx("p",{className:"emergency-availability",children:"Available 24/7/365"})]})]})}),a.jsx("section",{id:"warranty",className:"warranty-section",children:a.jsxs("div",{className:"warranty-container",children:[a.jsxs("div",{className:"warranty-header",children:[a.jsx("h2",{children:"Warranty Coverage"}),a.jsx("p",{children:"Industry-leading warranty protection backed by BYD's commitment to quality, reliability, and your complete confidence in your investment."})]}),a.jsxs("div",{className:"warranty-cards",children:[a.jsxs("div",{className:"warranty-card",children:[a.jsx("div",{className:"warranty-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200)"}}),a.jsxs("div",{className:"warranty-content",children:[a.jsx("h3",{children:"Vehicle Warranty"}),a.jsx("span",{className:"warranty-period",children:"6 Years / 150,000 km"}),a.jsx("p",{children:"Comprehensive bumper-to-bumper coverage for the entire vehicle including all major components, systems, and workmanship."})]})]}),a.jsxs("div",{className:"warranty-card",children:[a.jsx("div",{className:"warranty-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?q=80&w=1200)"}}),a.jsxs("div",{className:"warranty-content",children:[a.jsx("h3",{children:"Battery Warranty"}),a.jsx("span",{className:"warranty-period",children:"8 Years / 160,000 km"}),a.jsx("p",{children:"Blade Battery coverage with capacity guarantee ensuring the battery maintains at least 70% state of health throughout the warranty period."})]})]}),a.jsxs("div",{className:"warranty-card",children:[a.jsx("div",{className:"warranty-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1617886322207-7cc22ce7a22a?q=80&w=1200)"}}),a.jsxs("div",{className:"warranty-content",children:[a.jsx("h3",{children:"Powertrain Warranty"}),a.jsx("span",{className:"warranty-period",children:"8 Years / 150,000 km"}),a.jsx("p",{children:"Electric motor, drive unit, and power electronics fully covered for exceptional long-term reliability and peace of mind."})]})]})]}),a.jsxs("div",{className:"coverage-details",children:[a.jsx("h3",{children:"What's Covered"}),a.jsxs("div",{className:"coverage-grid",children:[a.jsx("div",{className:"coverage-item",children:a.jsx("span",{children:"Electric motor and drive system components"})}),a.jsx("div",{className:"coverage-item",children:a.jsx("span",{children:"Battery pack and battery management system"})}),a.jsx("div",{className:"coverage-item",children:a.jsx("span",{children:"Charging system and on-board charger"})}),a.jsx("div",{className:"coverage-item",children:a.jsx("span",{children:"Power electronics and control units"})}),a.jsx("div",{className:"coverage-item",children:a.jsx("span",{children:"Structural and body components"})}),a.jsx("div",{className:"coverage-item",children:a.jsx("span",{children:"Interior systems and features"})}),a.jsx("div",{className:"coverage-item",children:a.jsx("span",{children:"Advanced safety systems"})}),a.jsx("div",{className:"coverage-item",children:a.jsx("span",{children:"12-year unlimited mileage anti-corrosion warranty"})})]})]})]})}),a.jsx("section",{id:"membership",className:"luxury-section membership-section",children:a.jsxs("div",{className:"section-container",children:[a.jsxs("div",{className:"membership-header",children:[a.jsx("h2",{children:"Membership & Charge Cards"}),a.jsx("p",{className:"membership-subtitle",children:"Exclusive benefits, priority service, and comprehensive charging network access designed to enhance every aspect of your ownership experience."})]}),a.jsxs("div",{className:"benefits-grid",children:[a.jsxs("div",{className:"benefit-card",children:[a.jsx("div",{className:"benefit-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200)"}}),a.jsxs("div",{className:"benefit-content",children:[a.jsx("h3",{children:"Priority Service"}),a.jsx("p",{children:"Skip the wait with priority scheduling and expedited service at our state-of-the-art facility."})]})]}),a.jsxs("div",{className:"benefit-card",children:[a.jsx("div",{className:"benefit-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1200)"}}),a.jsxs("div",{className:"benefit-content",children:[a.jsx("h3",{children:"Charging Benefits"}),a.jsx("p",{children:"Access to our charging network with member-exclusive rates and convenient billing."})]})]}),a.jsxs("div",{className:"benefit-card",children:[a.jsx("div",{className:"benefit-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200)"}}),a.jsxs("div",{className:"benefit-content",children:[a.jsx("h3",{children:"Exclusive Perks"}),a.jsx("p",{children:"Member-only events, special offers, and early access to new models and features."})]})]})]}),a.jsxs("div",{className:"charge-card-section",children:[a.jsx("h3",{children:"Charging Card Benefits"}),a.jsxs("div",{className:"charge-features",children:[a.jsxs("div",{className:"charge-feature",children:[a.jsx("strong",{children:"Network Access"}),a.jsx("span",{children:"Use at partner charging stations throughout TCI"})]}),a.jsxs("div",{className:"charge-feature",children:[a.jsx("strong",{children:"Mobile Integration"}),a.jsx("span",{children:"Find, reserve, and pay for charging seamlessly"})]}),a.jsxs("div",{className:"charge-feature",children:[a.jsx("strong",{children:"Consolidated Billing"}),a.jsx("span",{children:"One monthly statement for all charging sessions"})]}),a.jsxs("div",{className:"charge-feature",children:[a.jsx("strong",{children:"Usage Analytics"}),a.jsx("span",{children:"Track your sessions, costs, and environmental impact"})]})]}),a.jsxs("p",{className:"membership-contact",children:["Learn more: ",a.jsx("a",{href:"mailto:membership@evergreenmotor.tc",children:"membership@evergreenmotor.tc"})]})]})]})}),a.jsx("section",{id:"charging-locations",className:"luxury-section charging-section",children:a.jsxs("div",{className:"section-container",children:[a.jsxs("div",{className:"charging-header",children:[a.jsx("h2",{children:"Charging Solutions"}),a.jsx("p",{className:"charging-subtitle",children:"Convenient charging options throughout the Turks and Caicos Islands, with professional installation support for home charging solutions."})]}),a.jsxs("div",{className:"charging-options",children:[a.jsxs("div",{className:"charging-option",children:[a.jsx("div",{className:"charging-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200)"}}),a.jsxs("div",{className:"charging-content",children:[a.jsx("h3",{children:"Fast Charging"}),a.jsx("p",{children:"DC fast charging capability with 110kW charging speed, providing 30-80% charge in approximately 30 minutes."})]})]}),a.jsxs("div",{className:"charging-option",children:[a.jsx("div",{className:"charging-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200)"}}),a.jsxs("div",{className:"charging-content",children:[a.jsx("h3",{children:"Public Charging"}),a.jsx("p",{children:"Level 2 charging stations at key locations throughout Providenciales and Grand Turk."})]})]}),a.jsxs("div",{className:"charging-option",children:[a.jsx("div",{className:"charging-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200)"}}),a.jsxs("div",{className:"charging-content",children:[a.jsx("h3",{children:"Home Charging"}),a.jsx("p",{children:"Professional installation support for residential charging solutions with expert guidance and quality equipment."})]})]})]}),a.jsxs("div",{className:"map-section",children:[a.jsx("h3",{children:"Charging Locations in Providenciales"}),a.jsx("p",{className:"map-description",children:"Find convenient charging stations throughout Providenciales, strategically located at key destinations across the island."}),a.jsxs("div",{className:"map-container",children:[a.jsx("iframe",{title:"Charging Locations in Providenciales, Turks and Caicos",width:"100%",height:"600",frameBorder:"0",style:{border:0,borderRadius:"8px"},loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60266.27257788948!2d-72.30557238398439!3d21.78465289045383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x894d15e4a5b6c7d8%3A0x3f4e5d6c7a8b9c1d!2sProvidenciales%2C%20Turks%20and%20Caicos%20Islands!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s",allowFullScreen:!0}),a.jsxs("div",{className:"charging-locations-list",children:[a.jsx("h4",{children:"Charging Station Locations"}),a.jsxs("div",{className:"locations-grid",children:[a.jsxs("div",{className:"location-item",children:[a.jsx("strong",{children:"Grace Bay Plaza"}),a.jsx("span",{children:"Level 2 Charging - 7kW"}),a.jsx("p",{className:"location-address",children:"Grace Bay Road, Providenciales"})]}),a.jsxs("div",{className:"location-item",children:[a.jsx("strong",{children:"Providenciales International Airport"}),a.jsx("span",{children:"DC Fast Charging - 110kW"}),a.jsx("p",{className:"location-address",children:"Airport Road, Providenciales"})]}),a.jsxs("div",{className:"location-item",children:[a.jsx("strong",{children:"Evergreen Motors Dealership"}),a.jsx("span",{children:"DC Fast Charging - 110kW & Level 2"}),a.jsx("p",{className:"location-address",children:"Regent Village, Grace Bay"})]}),a.jsxs("div",{className:"location-item",children:[a.jsx("strong",{children:"Blue Haven Resort & Marina"}),a.jsx("span",{children:"Level 2 Charging - 7kW"}),a.jsx("p",{className:"location-address",children:"Leeward Highway, Providenciales"})]}),a.jsxs("div",{className:"location-item",children:[a.jsx("strong",{children:"Beaches Resort - Grace Bay"}),a.jsx("span",{children:"Level 2 Charging - 7kW"}),a.jsx("p",{className:"location-address",children:"Lower Bight Road, Grace Bay"})]})]})]}),a.jsxs("div",{className:"map-note",children:["Interactive map showing Providenciales with charging station locations marked. Contact us at ",a.jsx("a",{href:"tel:+16494329988",style:{color:"#4a9eff",textDecoration:"none"},children:"+1 (649) 432-9988"})," for real-time availability, directions, and access details."]})]})]}),a.jsxs("div",{className:"charging-specs",children:[a.jsx("h3",{children:"Charging Speed Reference"}),a.jsxs("div",{className:"specs-grid",children:[a.jsxs("div",{className:"spec-item",children:[a.jsx("strong",{children:"Level 1 (120V)"}),a.jsx("span",{children:"3-5 miles per hour"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("strong",{children:"Level 2 (240V)"}),a.jsx("span",{children:"20-30 miles per hour"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("strong",{children:"DC Fast Charging"}),a.jsx("span",{children:"30-80% in 30 minutes"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("strong",{children:"110kW Charging"}),a.jsx("span",{children:"Up to 200 miles in 30 minutes"})]})]})]})]})})]})),Ih=()=>(x.useEffect(()=>{const e={threshold:.1,rootMargin:"0px 0px -100px 0px"},t=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&n.target.classList.add("fade-in-visible")})},e);return document.querySelectorAll(".fade-in-section").forEach(r=>t.observe(r)),()=>t.disconnect()},[]),a.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[a.jsx("style",{children:`
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
          max-width: 900px;
          margin: 0 auto;
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

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
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

        .card-image {
          width: 100%;
          height: 250px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.5s ease;
        }

        .card-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%);
        }

        .luxury-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-content {
          padding: 2.5rem;
        }

        .card-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .card-description {
          font-size: 1.1rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          opacity: 0.9;
        }

        .process-box {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 3rem;
          margin: 4rem 0;
        }

        .process-box h3 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 3px;
          color: #4a9eff;
        }

        .process-box ol {
          list-style: none;
          counter-reset: step-counter;
          padding: 0;
        }

        .process-box ol li {
          counter-increment: step-counter;
          margin-bottom: 2rem;
          padding-left: 4rem;
          position: relative;
          font-size: 1.2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          line-height: 1.8;
        }

        .process-box ol li::before {
          content: counter(step-counter);
          position: absolute;
          left: 0;
          top: 0;
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 4rem 0;
        }

        .benefits-list li {
          margin-bottom: 2rem;
          padding: 2rem;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.15);
          border-left: 4px solid #4a9eff;
          transition: all 0.3s ease;
        }

        .benefits-list li:hover {
          background: rgba(255,255,255,0.1);
          border-left-width: 8px;
          transform: translateX(10px);
        }

        .benefits-list li strong {
          display: block;
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
          color: #4a9eff;
        }

        .benefits-list li {
          font-size: 1.1rem;
          line-height: 1.8;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .contact-cta {
          text-align: center;
          padding: 3rem;
          margin: 4rem 0;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.2);
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
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .contact-cta a:hover {
          color: #00d4ff;
        }

        @media (max-width: 1024px) {
          .luxury-cards-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-content h1 {
            font-size: 4rem;
            letter-spacing: 8px;
          }

          .section-title {
            font-size: 3.5rem;
            letter-spacing: 5px;
          }

          .luxury-section {
            padding: 4rem 5%;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
            letter-spacing: 5px;
          }

          .section-title {
            font-size: 2.5rem;
          }
        }
      `}),a.jsx("div",{className:"luxury-hero",children:a.jsxs("div",{className:"hero-content",children:[a.jsx("h1",{children:"PURCHASING"}),a.jsx("p",{className:"subtitle",children:"Your Path to Electric Excellence"}),a.jsx("p",{children:"Discover flexible purchasing options designed to make your transition to electric driving seamless, affordable, and tailored to your unique needs."})]})}),a.jsx("section",{className:"luxury-section cash-section fade-in-section",children:a.jsxs("div",{className:"section-content",children:[a.jsx("h2",{className:"section-title",children:"Cash Purchase"}),a.jsx("p",{className:"section-subtitle",children:"Own your BYD outright with no interest charges and enjoy immediate equity, complete ownership freedom, and maximum long-term value."}),a.jsxs("div",{className:"luxury-cards-grid",children:[a.jsxs("div",{className:"luxury-card",children:[a.jsx("div",{className:"card-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1554224311-beee460c201f?q=80&w=1200)"}}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",children:"No Interest Charges"}),a.jsx("p",{className:"card-description",children:"Save thousands over the life of ownership by avoiding financing costs and interest payments completely."})]})]}),a.jsxs("div",{className:"luxury-card",children:[a.jsx("div",{className:"card-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1200)"}}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",children:"Immediate Ownership"}),a.jsx("p",{className:"card-description",children:"Full title transfer on delivery with no restrictions, allowing complete freedom to modify, sell, or trade your vehicle anytime."})]})]}),a.jsxs("div",{className:"luxury-card",children:[a.jsx("div",{className:"card-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200)"}}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",children:"Maximum Value"}),a.jsx("p",{className:"card-description",children:"Build equity from day one and benefit from the highest resale value with no mileage restrictions or wear penalties."})]})]})]}),a.jsxs("div",{className:"process-box",children:[a.jsx("h3",{children:"Purchase Process"}),a.jsxs("ol",{children:[a.jsx("li",{children:"Select your preferred BYD model and configuration"}),a.jsx("li",{children:"Review vehicle specifications and finalize order details"}),a.jsx("li",{children:"Arrange payment via wire transfer or certified funds"}),a.jsx("li",{children:"Complete documentation and title transfer"}),a.jsx("li",{children:"Take delivery of your new electric vehicle"})]})]}),a.jsxs("div",{className:"contact-cta",children:[a.jsx("p",{children:"Ready to purchase your BYD?"}),a.jsxs("p",{children:[a.jsx("a",{href:"mailto:sales@evergreenmotor.tc",children:"sales@evergreenmotor.tc"})," | ",a.jsx("a",{href:"tel:+16494329988",children:"+1 (649) 432-9988"})]})]})]})}),a.jsx("section",{className:"luxury-section finance-section fade-in-section",children:a.jsxs("div",{className:"section-content",children:[a.jsx("h2",{className:"section-title",style:{color:"#333"},children:"Financing Options"}),a.jsx("p",{className:"section-subtitle",style:{color:"#666"},children:"Partner with leading financial institutions for competitive rates and flexible terms tailored to your budget and lifestyle."}),a.jsxs("div",{className:"luxury-cards-grid",children:[a.jsxs("div",{className:"luxury-card light-card",children:[a.jsx("div",{className:"card-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1554224311-beee460c201f?q=80&w=1200)"}}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",style:{color:"#333"},children:"Bank Financing"}),a.jsx("p",{className:"card-description",style:{color:"#666"},children:"Access preferential interest rates through our partner banks with flexible terms from 24 to 84 months and competitive APR."})]})]}),a.jsxs("div",{className:"luxury-card light-card",children:[a.jsx("div",{className:"card-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1200)"}}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",style:{color:"#333"},children:"Dealer Financing"}),a.jsx("p",{className:"card-description",style:{color:"#666"},children:"Convenient in-house financing with competitive rates, special promotions, and personalized service from our finance team."})]})]}),a.jsxs("div",{className:"luxury-card light-card",children:[a.jsx("div",{className:"card-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200)"}}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",style:{color:"#333"},children:"Quick Approval"}),a.jsx("p",{className:"card-description",style:{color:"#666"},children:"Fast pre-approval process, often within 24 hours, to get you driving your new BYD sooner with minimal hassle."})]})]})]}),a.jsxs("div",{className:"process-box",style:{background:"rgba(74, 158, 255, 0.05)",border:"1px solid rgba(74, 158, 255, 0.2)"},children:[a.jsx("h3",{style:{color:"#4a9eff"},children:"Financing Process"}),a.jsxs("ol",{style:{color:"#333"},children:[a.jsx("li",{children:"Submit financing application to partner bank or dealer"}),a.jsx("li",{children:"Receive pre-approval and competitive rate quote within 24 hours"}),a.jsx("li",{children:"Select your BYD vehicle with your approved budget"}),a.jsx("li",{children:"Finalize loan terms and complete all documentation"}),a.jsx("li",{children:"Take delivery of your new electric vehicle"})]})]}),a.jsxs("div",{className:"contact-cta",style:{background:"rgba(74, 158, 255, 0.05)",border:"1px solid rgba(74, 158, 255, 0.2)"},children:[a.jsx("p",{style:{color:"#333"},children:"For financing information, contact:"}),a.jsx("p",{children:a.jsx("a",{href:"mailto:finance@evergreenmotor.tc",children:"finance@evergreenmotor.tc"})})]})]})}),a.jsx("section",{className:"luxury-section lease-section fade-in-section",children:a.jsxs("div",{className:"section-content",children:[a.jsx("h2",{className:"section-title",children:"Leasing Options"}),a.jsx("p",{className:"section-subtitle",children:"Drive the latest BYD technology with flexible lease terms and enjoy hassle-free ownership with lower monthly payments."}),a.jsxs("ul",{className:"benefits-list",children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Lower Monthly Payments"}),"Pay significantly less per month compared to traditional financing options while enjoying premium electric vehicle ownership."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Latest Technology"}),"Upgrade to newer models every few years and always drive the newest features, innovations, and improved range capabilities."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Warranty Coverage"}),"Most leases are fully covered by manufacturer warranty throughout the lease term for complete peace of mind."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Tax Benefits"}),"Potential business tax deductions for qualified business use, reducing your overall ownership costs significantly."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Flexibility"}),"Simple return process at lease end or option to purchase your vehicle at predetermined residual value."]})]}),a.jsxs("div",{className:"luxury-cards-grid",children:[a.jsxs("div",{className:"luxury-card",children:[a.jsx("div",{className:"card-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1200)"}}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",children:"24-Month Lease"}),a.jsx("p",{className:"card-description",children:"Short-term flexibility perfect for those who want the latest models and newest technology every two years."})]})]}),a.jsxs("div",{className:"luxury-card",children:[a.jsx("div",{className:"card-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200)"}}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",children:"36-Month Lease"}),a.jsx("p",{className:"card-description",children:"Most popular option with balanced payments and optimal term length for the perfect ownership experience."})]})]}),a.jsxs("div",{className:"luxury-card",children:[a.jsx("div",{className:"card-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200)"}}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",children:"48-Month Lease"}),a.jsx("p",{className:"card-description",children:"Lowest monthly payments with extended term for maximum affordability and long-term budget planning."})]})]})]}),a.jsxs("div",{className:"contact-cta",children:[a.jsx("p",{children:"Contact us for personalized lease quotes:"}),a.jsx("p",{children:a.jsx("a",{href:"mailto:lease@evergreenmotor.tc",children:"lease@evergreenmotor.tc"})})]})]})}),a.jsx("section",{className:"luxury-section fleet-section fade-in-section",children:a.jsxs("div",{className:"section-content",children:[a.jsx("h2",{className:"section-title",style:{color:"#333"},children:"Fleet & Business Solutions"}),a.jsx("p",{className:"section-subtitle",style:{color:"#666"},children:"Transform your business fleet with BYD electric vehicles and dramatically reduce operational costs while meeting sustainability goals."}),a.jsxs("div",{className:"luxury-cards-grid",children:[a.jsxs("div",{className:"luxury-card light-card",children:[a.jsx("div",{className:"card-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200)"}}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",style:{color:"#333"},children:"Corporate Fleets"}),a.jsx("p",{className:"card-description",style:{color:"#666"},children:"Volume pricing and dedicated fleet management support for your organization with customized solutions and priority service."})]})]}),a.jsxs("div",{className:"luxury-card light-card",children:[a.jsx("div",{className:"card-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1200)"}}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",style:{color:"#333"},children:"Commercial Vehicles"}),a.jsx("p",{className:"card-description",style:{color:"#666"},children:"Electric vans and trucks perfect for delivery and logistics operations with significantly lower operating costs."})]})]}),a.jsxs("div",{className:"luxury-card light-card",children:[a.jsx("div",{className:"card-image",style:{backgroundImage:"url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200)"}}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{className:"card-title",style:{color:"#333"},children:"Government Solutions"}),a.jsx("p",{className:"card-description",style:{color:"#666"},children:"Special programs designed specifically for government and municipal fleets with competitive pricing and dedicated support."})]})]})]}),a.jsxs("ul",{className:"benefits-list",style:{background:"rgba(74, 158, 255, 0.05)",border:"1px solid rgba(74, 158, 255, 0.2)"},children:[a.jsxs("li",{style:{color:"#333"},children:[a.jsx("strong",{style:{color:"#4a9eff"},children:"Lower Operating Costs"}),"Reduced fuel and maintenance expenses with up to 70% savings on operating costs compared to traditional combustion engine fleets."]}),a.jsxs("li",{style:{color:"#333"},children:[a.jsx("strong",{style:{color:"#4a9eff"},children:"Tax Incentives"}),"Federal and local EV tax credits can significantly reduce acquisition costs, improving your return on investment."]}),a.jsxs("li",{style:{color:"#333"},children:[a.jsx("strong",{style:{color:"#4a9eff"},children:"Sustainability Goals"}),"Meet corporate environmental targets and reduce your carbon footprint with zero-emission electric vehicles."]}),a.jsxs("li",{style:{color:"#333"},children:[a.jsx("strong",{style:{color:"#4a9eff"},children:"Fleet Management"}),"Comprehensive fleet management services with telematics, dedicated support team, and priority maintenance scheduling."]})]}),a.jsxs("div",{className:"contact-cta",style:{background:"rgba(74, 158, 255, 0.05)",border:"1px solid rgba(74, 158, 255, 0.2)"},children:[a.jsx("p",{style:{color:"#333"},children:"Contact our fleet specialists:"}),a.jsx("p",{children:a.jsx("a",{href:"mailto:fleet@evergreenmotor.tc",children:"fleet@evergreenmotor.tc"})})]})]})})]})),Rh=()=>{var O;const[e,t]=x.useState("all"),[r,n]=x.useState(null),[i,o]=x.useState(""),[s,l]=x.useState(""),[c,u]=x.useState(!1),[h,f]=x.useState(0),[g,w]=x.useState(!1),[b,y]=x.useState(!1),[k,m]=x.useState(!1),[d,p]=x.useState(!1),[v,N]=x.useState({firstName:"",lastName:"",email:"",countryCode:"+44",phone:"",useType:"personal"}),P=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];x.useEffect(()=>{const E=()=>{const U=document.querySelector("footer"),pe=document.querySelector(".progress-bar");if(U&&pe){const S=U.getBoundingClientRect(),M=pe.getBoundingClientRect(),X=window.innerHeight-20,Gt=S.top<X+M.height;p(Gt)}};return window.addEventListener("scroll",E),window.addEventListener("resize",E),E(),()=>{window.removeEventListener("scroll",E),window.removeEventListener("resize",E)}},[]);const z=[{id:1,name:"ATTO 2",type:"electric",image:"/models/BYD-ATTO-2/BYD_ATTO_2.jpg"},{id:2,name:"DOLPHIN SURF",type:"electric",image:"/models/BYD-DOLPHIN-SURF/BYD-DOLPHIN-SURF.webp"},{id:3,name:"SEALION 7",type:"electric",image:"/models/BYD-SEALION-7/BYD-SEALION-7.webp"},{id:4,name:"SEAL U DM-i",type:"hybrid",image:"/models/BYD-SEAL-U-DM-i/BYD-SEAL-U-DM-i.webp"},{id:5,name:"SEAL",type:"electric",image:"/models/BYD-SEAL/BYD-SEAL.webp"},{id:6,name:"ATTO 3",type:"electric",image:"/models/BYD-ATTO3/BYD-ATTO3.webp"},{id:7,name:"DOLPHIN",type:"electric",image:"/models/BYD-DOLPHIN/BYD-DOLPHIN.webp"}],D=e==="all"?z:z.filter(E=>E.type===e),A=E=>{const U=document.querySelector(".models-grid"),pe=410,S=E==="left"?-pe:pe;U.scrollBy({left:S,behavior:"smooth"});const M=E==="left"?Math.max(0,h-1):Math.min(D.length-1,h+1);f(M)},L=E=>{document.querySelector(".models-grid").scrollTo({left:410*E,behavior:"smooth"}),f(E)},ae=()=>{if(!r){w(!0);return}u(!c)},Qe=E=>{n(E),w(!1)},T=()=>{if(!r){w(!0);return}if(!i){y(!0);return}if(!s){m(!0);return}if(!v.firstName||!v.lastName||!v.email||!v.phone){alert("Please fill in all required fields");return}alert("Booking request submitted!")};return a.jsxs("div",{style:{width:"100%",fontFamily:"'Montserrat', sans-serif"},children:[a.jsx("style",{children:`
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
      `}),a.jsx("div",{className:"hero-section",children:a.jsx("h1",{className:"hero-title",children:"Test Drive"})}),a.jsxs("div",{className:"content-section",children:[a.jsxs("div",{className:"section-title",children:[a.jsx("span",{className:`section-number ${r?"completed":""}`,children:r?a.jsx(Br,{size:22,strokeWidth:3}):"1"}),a.jsx("span",{children:"Choose your model"})]}),g&&a.jsx("div",{className:"error-message",children:"Please complete the previous step before proceeding"}),a.jsxs("div",{className:"category-tabs",children:[a.jsx("button",{className:`category-tab ${e==="all"?"active":""}`,onClick:()=>t("all"),children:"All"}),a.jsx("button",{className:`category-tab ${e==="electric"?"active":""}`,onClick:()=>t("electric"),children:"Electric cars"}),a.jsx("button",{className:`category-tab ${e==="hybrid"?"active":""}`,onClick:()=>t("hybrid"),children:"Hybrid cars"})]}),a.jsxs("div",{className:"carousel-container",children:[a.jsx("div",{className:"models-grid",children:D.map(E=>a.jsxs("div",{className:`model-card ${r===E.id?"selected":""}`,onClick:()=>Qe(E.id),children:[a.jsxs("div",{className:"model-header",children:[a.jsx("div",{className:"model-name",children:E.name}),a.jsx("div",{className:"model-type",children:E.type==="hybrid"?"PHEV":"100% Electric"})]}),a.jsx("img",{src:E.image,alt:E.name,className:"model-image"}),a.jsx("div",{className:"selection-circle",children:r===E.id&&a.jsx(Br,{size:18,color:"white",strokeWidth:3})})]},E.id))}),a.jsxs("div",{className:"carousel-controls",children:[a.jsx("button",{className:"carousel-nav",onClick:()=>A("left"),disabled:h===0,children:"←"}),a.jsx("div",{className:"carousel-dots",children:D.map((E,U)=>a.jsx("button",{className:`carousel-dot ${U===h?"active":""}`,onClick:()=>L(U)},U))}),a.jsx("button",{className:"carousel-nav",onClick:()=>A("right"),disabled:h===D.length-1,children:"→"})]})]}),a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"section-title",children:[a.jsx("span",{className:`section-number ${i&&s?"completed":""}`,children:i&&s?a.jsx(Br,{size:22,strokeWidth:3}):"2"}),a.jsx("span",{children:"Choose your date and time"})]}),b&&a.jsx("div",{className:"error-message",children:"Please complete the previous step before proceeding"}),a.jsxs("div",{className:"date-time-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Preferred Date ",a.jsx("span",{className:"required",children:"*"})]}),a.jsxs("div",{className:"date-input-wrapper",children:[a.jsxs("div",{className:`date-input ${r?"":"disabled"}`,onClick:ae,style:{cursor:r?"pointer":"not-allowed"},children:[a.jsx("span",{children:i||"Select a date"}),a.jsx(nh,{size:18})]}),c&&r&&a.jsxs("div",{className:"calendar-dropdown",children:[a.jsxs("div",{className:"calendar-header",children:[a.jsx("button",{className:"calendar-nav-btn",children:"«"}),a.jsx("span",{children:"2025 October"}),a.jsx("button",{className:"calendar-nav-btn",children:"»"})]}),a.jsxs("div",{className:"calendar-grid",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(E=>a.jsx("div",{className:"calendar-day-header",children:E},E)),[28,29,30].map(E=>a.jsx("div",{className:"calendar-day disabled",children:E},`prev-${E}`)),Array.from({length:31},(E,U)=>U+1).map(E=>a.jsx("div",{className:`calendar-day ${E<19?"disabled":""} ${i===`${E} October 2025`?"selected":""}`,onClick:()=>{E>=19&&(o(`${E} October 2025`),u(!1),y(!1))},children:E},E))]})]})]})]}),i&&a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Choose your time ",a.jsx("span",{className:"required",children:"*"})]}),a.jsxs("select",{className:"form-input",value:s,onChange:E=>{l(E.target.value),m(!1)},children:[a.jsx("option",{value:"",children:"Select a time"}),P.map(E=>a.jsx("option",{value:E,children:E},E))]})]})]}),a.jsxs("div",{className:"section-title",style:{marginTop:"50px"},children:[a.jsx("span",{className:"section-number",children:"3"}),a.jsx("span",{children:"Enter your contact details"})]}),a.jsxs("div",{className:"contact-form",children:[a.jsxs("div",{className:"form-group first-name",children:[a.jsxs("label",{className:"form-label",children:["First Name",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"text",className:"form-input",placeholder:"First Name*",value:v.firstName,onChange:E=>N({...v,firstName:E.target.value})})]}),a.jsxs("div",{className:"form-group last-name",children:[a.jsxs("label",{className:"form-label",children:["Last Name",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"text",className:"form-input",placeholder:"Last Name*",value:v.lastName,onChange:E=>N({...v,lastName:E.target.value})})]}),a.jsxs("div",{className:"form-group email",children:[a.jsxs("label",{className:"form-label",children:["Email",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"email",className:"form-input",placeholder:"Email*",value:v.email,onChange:E=>N({...v,email:E.target.value})})]}),a.jsxs("div",{className:"form-group phone",children:[a.jsxs("label",{className:"form-label",children:["Phone Number",a.jsx("span",{className:"required",children:"*"})]}),a.jsxs("div",{className:"phone-group",children:[a.jsxs("select",{className:"country-code-select",value:v.countryCode,onChange:E=>N({...v,countryCode:E.target.value}),children:[a.jsx("option",{value:"+1",children:"+1 (US)"}),a.jsx("option",{value:"+44",children:"+44 (UK)"}),a.jsx("option",{value:"+91",children:"+91 (IN)"}),a.jsx("option",{value:"+86",children:"+86 (CN)"}),a.jsx("option",{value:"+81",children:"+81 (JP)"}),a.jsx("option",{value:"+49",children:"+49 (DE)"}),a.jsx("option",{value:"+33",children:"+33 (FR)"})]}),a.jsx("input",{type:"tel",className:"form-input",value:v.phone,onChange:E=>N({...v,phone:E.target.value}),placeholder:"07400 123456*"})]})]}),a.jsxs("div",{className:"form-group use-type",children:[a.jsxs("label",{className:"form-label",children:["Type of use",a.jsx("span",{className:"required",children:"*"})]}),a.jsxs("select",{className:"form-input",value:v.useType,onChange:E=>N({...v,useType:E.target.value}),children:[a.jsx("option",{value:"",children:"Type of use *"}),a.jsx("option",{value:"personal",children:"Personal"}),a.jsx("option",{value:"private-hire",children:"Private Hire"}),a.jsx("option",{value:"fleet-corporate",children:"Fleet/Corporate"})]})]}),a.jsx("button",{onClick:T,className:"submit-button",children:"Request Booking"})]})]})]}),a.jsxs("div",{className:`progress-bar ${d?"above-footer":""}`,style:d?{position:"absolute",bottom:"auto",top:`${document.body.scrollHeight-(((O=document.querySelector("footer"))==null?void 0:O.offsetHeight)||0)-100}px`}:{},children:[a.jsxs("div",{className:"progress-item",children:[a.jsx("div",{className:`progress-icon ${r?"completed":"incomplete"}`,children:r?a.jsx(Br,{size:14,strokeWidth:3}):"1"}),a.jsx("span",{children:"Models"})]}),a.jsxs("div",{className:"progress-item",children:[a.jsx("div",{className:`progress-icon ${i&&s?"completed":"incomplete"}`,children:i&&s?a.jsx(Br,{size:14,strokeWidth:3}):"2"}),a.jsx("span",{children:"Date"})]}),a.jsxs("div",{className:"progress-item",children:[a.jsx("div",{className:"progress-icon incomplete",children:"3"}),a.jsx("span",{children:"Contact"})]})]})]})},Oh=()=>{const{pathname:e,hash:t}=Sr();return x.useEffect(()=>{t?setTimeout(()=>{const r=document.querySelector(t);r&&r.scrollIntoView({behavior:"smooth",block:"start"})},100):window.scrollTo(0,0)},[e,t]),null},Ah=()=>a.jsxs(Wp,{children:[a.jsx(Oh,{}),a.jsxs("div",{className:"App",children:[a.jsx(Qp,{}),a.jsxs(Ip,{children:[a.jsx(We,{path:"/",element:a.jsx(mh,{})}),a.jsx(We,{path:"/models",element:a.jsx(fh,{})}),a.jsx(We,{path:"/models/:modelId",element:a.jsx(ph,{})}),a.jsx(We,{path:"/technology",element:a.jsx(hh,{})}),a.jsx(We,{path:"/about",element:a.jsx(yh,{})}),a.jsx(We,{path:"/contact",element:a.jsx(_h,{})}),a.jsx(We,{path:"/ownership",element:a.jsx(Bh,{})}),a.jsx(We,{path:"/purchasing",element:a.jsx(Ih,{})}),a.jsx(We,{path:"/test-drive",element:a.jsx(Rh,{})})]}),a.jsx(Kp,{})]})]}),Fh=ha.createRoot(document.getElementById("root"));Fh.render(a.jsx(Wl.StrictMode,{children:a.jsx(Ah,{})}));
