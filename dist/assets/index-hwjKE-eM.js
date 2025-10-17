function bc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ys={exports:{}},ml={},xs={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),Yc=Symbol.for("react.portal"),Gc=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.memo"),nd=Symbol.for("react.lazy"),ta=Symbol.iterator;function rd(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var ws={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ss=Object.assign,ks={};function pn(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||ws}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Es(){}Es.prototype=pn.prototype;function ro(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||ws}var lo=ro.prototype=new Es;lo.constructor=ro;Ss(lo,pn.prototype);lo.isPureReactComponent=!0;var na=Array.isArray,js=Object.prototype.hasOwnProperty,io={current:null},Cs={key:!0,ref:!0,__self:!0,__source:!0};function Ns(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)js.call(t,r)&&!Cs.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:ir,type:e,key:i,ref:o,props:l,_owner:io.current}}function ld(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oo(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function id(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ra=/\/+/g;function Ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?id(""+e.key):t.toString(36)}function Lr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ir:case Yc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Ol(o,0):r,na(l)?(n="",e!=null&&(n=e.replace(ra,"$&/")+"/"),Lr(l,t,n,"",function(c){return c})):l!=null&&(oo(l)&&(l=ld(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(ra,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",na(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ol(i,a);o+=Lr(i,t,n,s,l)}else if(s=rd(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ol(i,a++),o+=Lr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function mr(e,t,n){if(e==null)return e;var r=[],l=0;return Lr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function od(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Mr={transition:null},ad={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:io};function Ps(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!oo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=pn;M.Fragment=Gc;M.Profiler=Xc;M.PureComponent=ro;M.StrictMode=Kc;M.Suspense=ed;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ad;M.act=Ps;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ss({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=io.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)js.call(t,s)&&!Cs.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ir,type:e.type,key:l,ref:i,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:Jc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zc,_context:e},e.Consumer=e};M.createElement=Ns;M.createFactory=function(e){var t=Ns.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:qc,render:e}};M.isValidElement=oo;M.lazy=function(e){return{$$typeof:nd,_payload:{_status:-1,_result:e},_init:od}};M.memo=function(e,t){return{$$typeof:td,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};M.unstable_act=Ps;M.useCallback=function(e,t){return ce.current.useCallback(e,t)};M.useContext=function(e){return ce.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};M.useEffect=function(e,t){return ce.current.useEffect(e,t)};M.useId=function(){return ce.current.useId()};M.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ce.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};M.useRef=function(e){return ce.current.useRef(e)};M.useState=function(e){return ce.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ce.current.useTransition()};M.version="18.3.1";xs.exports=M;var k=xs.exports;const zs=Qc(k),sd=bc({__proto__:null,default:zs},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud=k,cd=Symbol.for("react.element"),dd=Symbol.for("react.fragment"),fd=Object.prototype.hasOwnProperty,pd=ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,md={key:!0,ref:!0,__self:!0,__source:!0};function _s(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)fd.call(t,r)&&!md.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:cd,type:e,key:i,ref:o,props:l,_owner:pd.current}}ml.Fragment=dd;ml.jsx=_s;ml.jsxs=_s;ys.exports=ml;var u=ys.exports,ai={},Ts={exports:{}},Se={},Ls={exports:{}},Ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var L=N.length;N.push(T);e:for(;0<L;){var Q=L-1>>>1,J=N[Q];if(0<l(J,T))N[Q]=T,N[L]=J,L=Q;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var T=N[0],L=N.pop();if(L!==T){N[0]=L;e:for(var Q=0,J=N.length,fr=J>>>1;Q<fr;){var kt=2*(Q+1)-1,Rl=N[kt],Et=kt+1,pr=N[Et];if(0>l(Rl,L))Et<J&&0>l(pr,Rl)?(N[Q]=pr,N[Et]=L,Q=Et):(N[Q]=Rl,N[kt]=L,Q=kt);else if(Et<J&&0>l(pr,L))N[Q]=pr,N[Et]=L,Q=Et;else break e}}return T}function l(N,T){var L=N.sortIndex-T.sortIndex;return L!==0?L:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],g=1,m=null,h=3,y=!1,x=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=N)r(c),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(c)}}function v(N){if(w=!1,p(N),!x)if(n(s)!==null)x=!0,Ll(E);else{var T=n(c);T!==null&&Ml(v,T.startTime-N)}}function E(N,T){x=!1,w&&(w=!1,f(_),_=-1),y=!0;var L=h;try{for(p(T),m=n(s);m!==null&&(!(m.expirationTime>T)||N&&!_e());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,h=m.priorityLevel;var J=Q(m.expirationTime<=T);T=e.unstable_now(),typeof J=="function"?m.callback=J:m===n(s)&&r(s),p(T)}else r(s);m=n(s)}if(m!==null)var fr=!0;else{var kt=n(c);kt!==null&&Ml(v,kt.startTime-T),fr=!1}return fr}finally{m=null,h=L,y=!1}}var P=!1,z=null,_=-1,b=5,R=-1;function _e(){return!(e.unstable_now()-R<b)}function vn(){if(z!==null){var N=e.unstable_now();R=N;var T=!0;try{T=z(!0,N)}finally{T?yn():(P=!1,z=null)}}else P=!1}var yn;if(typeof d=="function")yn=function(){d(vn)};else if(typeof MessageChannel<"u"){var ea=new MessageChannel,Hc=ea.port2;ea.port1.onmessage=vn,yn=function(){Hc.postMessage(null)}}else yn=function(){j(vn,0)};function Ll(N){z=N,P||(P=!0,yn())}function Ml(N,T){_=j(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Ll(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var L=h;h=T;try{return N()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return T()}finally{h=L}},e.unstable_scheduleCallback=function(N,T,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=L+J,N={id:g++,callback:T,priorityLevel:N,startTime:L,expirationTime:J,sortIndex:-1},L>Q?(N.sortIndex=L,t(c,N),n(s)===null&&N===n(c)&&(w?(f(_),_=-1):w=!0,Ml(v,L-Q))):(N.sortIndex=J,t(s,N),x||y||(x=!0,Ll(E))),N},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(N){var T=h;return function(){var L=h;h=T;try{return N.apply(this,arguments)}finally{h=L}}}})(Ms);Ls.exports=Ms;var hd=Ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=k,we=hd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rs=new Set,An={};function It(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(An[e]=t,e=0;e<t.length;e++)Rs.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=Object.prototype.hasOwnProperty,vd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ia={};function yd(e){return si.call(ia,e)?!0:si.call(la,e)?!1:vd.test(e)?ia[e]=!0:(la[e]=!0,!1)}function xd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wd(e,t,n,r){if(t===null||typeof t>"u"||xd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var ao=/[\-:]([a-z])/g;function so(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ao,so);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ao,so);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ao,so);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function uo(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wd(t,n,l,r)&&(n=null),r||l===null?yd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),$t=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),co=Symbol.for("react.strict_mode"),ui=Symbol.for("react.profiler"),Os=Symbol.for("react.provider"),Ds=Symbol.for("react.context"),fo=Symbol.for("react.forward_ref"),ci=Symbol.for("react.suspense"),di=Symbol.for("react.suspense_list"),po=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Is=Symbol.for("react.offscreen"),oa=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=oa&&e[oa]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Dl;function Pn(e){if(Dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dl=t&&t[1]||""}return`
`+Dl+e}var Il=!1;function Fl(e,t){if(!e||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function Sd(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function fi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case $t:return"Portal";case ui:return"Profiler";case co:return"StrictMode";case ci:return"Suspense";case di:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ds:return(e.displayName||"Context")+".Consumer";case Os:return(e._context.displayName||"Context")+".Provider";case fo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case po:return t=e.displayName||null,t!==null?t:fi(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return fi(e(t))}catch{}}return null}function kd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fi(t);case 8:return t===co?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ed(e){var t=Fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Ed(e))}function Us(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pi(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bs(e,t){t=t.checked,t!=null&&uo(e,"checked",t,!1)}function mi(e,t){Bs(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hi(e,t.type,n):t.hasOwnProperty("defaultValue")&&hi(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hi(e,t,n){(t!=="number"||Vr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function gi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(zn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function As(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $s(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$s(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Ws=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jd=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){jd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Hs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Cd=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yi(e,t){if(t){if(Cd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function xi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wi=null;function mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Si=null,en=null,tn=null;function da(e){if(e=sr(e)){if(typeof Si!="function")throw Error(S(280));var t=e.stateNode;t&&(t=xl(t),Si(e.stateNode,e.type,t))}}function bs(e){en?tn?tn.push(e):tn=[e]:en=e}function Qs(){if(en){var e=en,t=tn;if(tn=en=null,da(e),t)for(e=0;e<t.length;e++)da(t[e])}}function Ys(e,t){return e(t)}function Gs(){}var Ul=!1;function Ks(e,t,n){if(Ul)return e(t,n);Ul=!0;try{return Ys(e,t,n)}finally{Ul=!1,(en!==null||tn!==null)&&(Gs(),Qs())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=xl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var ki=!1;if(Ge)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){ki=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{ki=!1}function Nd(e,t,n,r,l,i,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Mn=!1,Hr=null,br=!1,Ei=null,Pd={onError:function(e){Mn=!0,Hr=e}};function zd(e,t,n,r,l,i,o,a,s){Mn=!1,Hr=null,Nd.apply(Pd,arguments)}function _d(e,t,n,r,l,i,o,a,s){if(zd.apply(this,arguments),Mn){if(Mn){var c=Hr;Mn=!1,Hr=null}else throw Error(S(198));br||(br=!0,Ei=c)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fa(e){if(Ft(e)!==e)throw Error(S(188))}function Td(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return fa(l),e;if(i===r)return fa(l),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Zs(e){return e=Td(e),e!==null?Js(e):null}function Js(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Js(e);if(t!==null)return t;e=e.sibling}return null}var qs=we.unstable_scheduleCallback,pa=we.unstable_cancelCallback,Ld=we.unstable_shouldYield,Md=we.unstable_requestPaint,Y=we.unstable_now,Rd=we.unstable_getCurrentPriorityLevel,ho=we.unstable_ImmediatePriority,eu=we.unstable_UserBlockingPriority,Qr=we.unstable_NormalPriority,Od=we.unstable_LowPriority,tu=we.unstable_IdlePriority,hl=null,$e=null;function Dd(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Ud,Id=Math.log,Fd=Math.LN2;function Ud(e){return e>>>=0,e===0?32:31-(Id(e)/Fd|0)|0}var yr=64,xr=4194304;function _n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=_n(a):(i&=o,i!==0&&(r=_n(i)))}else o=n&~l,o!==0?r=_n(o):i!==0&&(r=_n(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),l=1<<n,r|=e[n],t&=~l;return r}function Bd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-De(i),a=1<<o,s=l[o];s===-1?(!(a&n)||a&r)&&(l[o]=Bd(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ji(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nu(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function $d(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-De(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function go(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lu,vo,iu,ou,au,Ci=!1,wr=[],at=null,st=null,ut=null,Vn=new Map,Hn=new Map,nt=[],Wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ma(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Sn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=sr(t),t!==null&&vo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Vd(e,t,n,r,l){switch(t){case"focusin":return at=Sn(at,e,t,n,r,l),!0;case"dragenter":return st=Sn(st,e,t,n,r,l),!0;case"mouseover":return ut=Sn(ut,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Vn.set(i,Sn(Vn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Hn.set(i,Sn(Hn.get(i)||null,e,t,n,r,l)),!0}return!1}function su(e){var t=Nt(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=Xs(n),t!==null){e.blockedOn=t,au(e.priority,function(){iu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ni(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wi=r,n.target.dispatchEvent(r),wi=null}else return t=sr(n),t!==null&&vo(t),e.blockedOn=n,!1;t.shift()}return!0}function ha(e,t,n){Rr(e)&&n.delete(t)}function Hd(){Ci=!1,at!==null&&Rr(at)&&(at=null),st!==null&&Rr(st)&&(st=null),ut!==null&&Rr(ut)&&(ut=null),Vn.forEach(ha),Hn.forEach(ha)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ci||(Ci=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,Hd)))}function bn(e){function t(l){return kn(l,e)}if(0<wr.length){kn(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&kn(at,e),st!==null&&kn(st,e),ut!==null&&kn(ut,e),Vn.forEach(t),Hn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)su(n),n.blockedOn===null&&nt.shift()}var nn=Je.ReactCurrentBatchConfig,Gr=!0;function bd(e,t,n,r){var l=I,i=nn.transition;nn.transition=null;try{I=1,yo(e,t,n,r)}finally{I=l,nn.transition=i}}function Qd(e,t,n,r){var l=I,i=nn.transition;nn.transition=null;try{I=4,yo(e,t,n,r)}finally{I=l,nn.transition=i}}function yo(e,t,n,r){if(Gr){var l=Ni(e,t,n,r);if(l===null)Kl(e,t,r,Kr,n),ma(e,r);else if(Vd(l,e,t,n,r))r.stopPropagation();else if(ma(e,r),t&4&&-1<Wd.indexOf(e)){for(;l!==null;){var i=sr(l);if(i!==null&&lu(i),i=Ni(e,t,n,r),i===null&&Kl(e,t,r,Kr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Kl(e,t,r,null,n)}}var Kr=null;function Ni(e,t,n,r){if(Kr=null,e=mo(r),e=Nt(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rd()){case ho:return 1;case eu:return 4;case Qr:case Od:return 16;case tu:return 536870912;default:return 16}default:return 16}}var lt=null,xo=null,Or=null;function cu(){if(Or)return Or;var e,t=xo,n=t.length,r,l="value"in lt?lt.value:lt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Or=l.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ga(){return!1}function ke(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sr:ga,this.isPropagationStopped=ga,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wo=ke(mn),ar=V({},mn,{view:0,detail:0}),Yd=ke(ar),Al,$l,En,gl=V({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Al=e.screenX-En.screenX,$l=e.screenY-En.screenY):$l=Al=0,En=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),va=ke(gl),Gd=V({},gl,{dataTransfer:0}),Kd=ke(Gd),Xd=V({},ar,{relatedTarget:0}),Wl=ke(Xd),Zd=V({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jd=ke(Zd),qd=V({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ef=ke(qd),tf=V({},mn,{data:0}),ya=ke(tf),nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function of(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lf[e])?!!t[e]:!1}function So(){return of}var af=V({},ar,{key:function(e){if(e.key){var t=nf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sf=ke(af),uf=V({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xa=ke(uf),cf=V({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),df=ke(cf),ff=V({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pf=ke(ff),mf=V({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hf=ke(mf),gf=[9,13,27,32],ko=Ge&&"CompositionEvent"in window,Rn=null;Ge&&"documentMode"in document&&(Rn=document.documentMode);var vf=Ge&&"TextEvent"in window&&!Rn,du=Ge&&(!ko||Rn&&8<Rn&&11>=Rn),wa=" ",Sa=!1;function fu(e,t){switch(e){case"keyup":return gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function yf(e,t){switch(e){case"compositionend":return pu(t);case"keypress":return t.which!==32?null:(Sa=!0,wa);case"textInput":return e=t.data,e===wa&&Sa?null:e;default:return null}}function xf(e,t){if(Vt)return e==="compositionend"||!ko&&fu(e,t)?(e=cu(),Or=xo=lt=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return du&&t.locale!=="ko"?null:t.data;default:return null}}var wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wf[e.type]:t==="textarea"}function mu(e,t,n,r){bs(r),t=Xr(t,"onChange"),0<t.length&&(n=new wo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Qn=null;function Sf(e){Cu(e,0)}function vl(e){var t=Qt(e);if(Us(t))return e}function kf(e,t){if(e==="change")return t}var hu=!1;if(Ge){var Vl;if(Ge){var Hl="oninput"in document;if(!Hl){var Ea=document.createElement("div");Ea.setAttribute("oninput","return;"),Hl=typeof Ea.oninput=="function"}Vl=Hl}else Vl=!1;hu=Vl&&(!document.documentMode||9<document.documentMode)}function ja(){On&&(On.detachEvent("onpropertychange",gu),Qn=On=null)}function gu(e){if(e.propertyName==="value"&&vl(Qn)){var t=[];mu(t,Qn,e,mo(e)),Ks(Sf,t)}}function Ef(e,t,n){e==="focusin"?(ja(),On=t,Qn=n,On.attachEvent("onpropertychange",gu)):e==="focusout"&&ja()}function jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(Qn)}function Cf(e,t){if(e==="click")return vl(t)}function Nf(e,t){if(e==="input"||e==="change")return vl(t)}function Pf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:Pf;function Yn(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!si.call(t,l)||!Fe(e[l],t[l]))return!1}return!0}function Ca(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Na(e,t){var n=Ca(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ca(n)}}function vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yu(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function Eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zf(e){var t=yu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vu(n.ownerDocument.documentElement,n)){if(r!==null&&Eo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Na(n,i);var o=Na(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _f=Ge&&"documentMode"in document&&11>=document.documentMode,Ht=null,Pi=null,Dn=null,zi=!1;function Pa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||Ht==null||Ht!==Vr(r)||(r=Ht,"selectionStart"in r&&Eo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Yn(Dn,r)||(Dn=r,r=Xr(Pi,"onSelect"),0<r.length&&(t=new wo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ht)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},bl={},xu={};Ge&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function yl(e){if(bl[e])return bl[e];if(!bt[e])return e;var t=bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xu)return bl[e]=t[n];return e}var wu=yl("animationend"),Su=yl("animationiteration"),ku=yl("animationstart"),Eu=yl("transitionend"),ju=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){ju.set(e,t),It(t,[e])}for(var Ql=0;Ql<za.length;Ql++){var Yl=za[Ql],Tf=Yl.toLowerCase(),Lf=Yl[0].toUpperCase()+Yl.slice(1);yt(Tf,"on"+Lf)}yt(wu,"onAnimationEnd");yt(Su,"onAnimationIteration");yt(ku,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(Eu,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));It("onBeforeInput",["compositionend","keypress","textInput","paste"]);It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function _a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_d(r,t,void 0,e),e.currentTarget=null}function Cu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;_a(l,a,c),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;_a(l,a,c),i=s}}}if(br)throw e=Ei,br=!1,Ei=null,e}function U(e,t){var n=t[Ri];n===void 0&&(n=t[Ri]=new Set);var r=e+"__bubble";n.has(r)||(Nu(t,e,2,!1),n.add(r))}function Gl(e,t,n){var r=0;t&&(r|=4),Nu(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[Er]){e[Er]=!0,Rs.forEach(function(n){n!=="selectionchange"&&(Mf.has(n)||Gl(n,!1,e),Gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,Gl("selectionchange",!1,t))}}function Nu(e,t,n,r){switch(uu(t)){case 1:var l=bd;break;case 4:l=Qd;break;default:l=yo}n=l.bind(null,t,n,e),l=void 0,!ki||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Kl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Nt(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Ks(function(){var c=i,g=mo(n),m=[];e:{var h=ju.get(e);if(h!==void 0){var y=wo,x=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":y=sf;break;case"focusin":x="focus",y=Wl;break;case"focusout":x="blur",y=Wl;break;case"beforeblur":case"afterblur":y=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=df;break;case wu:case Su:case ku:y=Jd;break;case Eu:y=pf;break;case"scroll":y=Yd;break;case"wheel":y=hf;break;case"copy":case"cut":case"paste":y=ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xa}var w=(t&4)!==0,j=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Wn(d,f),v!=null&&w.push(Kn(d,v,p)))),j)break;d=d.return}0<w.length&&(h=new y(h,x,null,n,g),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==wi&&(x=n.relatedTarget||n.fromElement)&&(Nt(x)||x[Ke]))break e;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?Nt(x):null,x!==null&&(j=Ft(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(w=va,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=xa,v="onPointerLeave",f="onPointerEnter",d="pointer"),j=y==null?h:Qt(y),p=x==null?h:Qt(x),h=new w(v,d+"leave",y,n,g),h.target=j,h.relatedTarget=p,v=null,Nt(g)===c&&(w=new w(f,d+"enter",x,n,g),w.target=p,w.relatedTarget=j,v=w),j=v,y&&x)t:{for(w=y,f=x,d=0,p=w;p;p=Bt(p))d++;for(p=0,v=f;v;v=Bt(v))p++;for(;0<d-p;)w=Bt(w),d--;for(;0<p-d;)f=Bt(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Bt(w),f=Bt(f)}w=null}else w=null;y!==null&&Ta(m,h,y,w,!1),x!==null&&j!==null&&Ta(m,j,x,w,!0)}}e:{if(h=c?Qt(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var E=kf;else if(ka(h))if(hu)E=Nf;else{E=jf;var P=Ef}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Cf);if(E&&(E=E(e,c))){mu(m,E,n,g);break e}P&&P(e,h,c),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&hi(h,"number",h.value)}switch(P=c?Qt(c):window,e){case"focusin":(ka(P)||P.contentEditable==="true")&&(Ht=P,Pi=c,Dn=null);break;case"focusout":Dn=Pi=Ht=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Pa(m,n,g);break;case"selectionchange":if(_f)break;case"keydown":case"keyup":Pa(m,n,g)}var z;if(ko)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Vt?fu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(du&&n.locale!=="ko"&&(Vt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Vt&&(z=cu()):(lt=g,xo="value"in lt?lt.value:lt.textContent,Vt=!0)),P=Xr(c,_),0<P.length&&(_=new ya(_,e,null,n,g),m.push({event:_,listeners:P}),z?_.data=z:(z=pu(n),z!==null&&(_.data=z)))),(z=vf?yf(e,n):xf(e,n))&&(c=Xr(c,"onBeforeInput"),0<c.length&&(g=new ya("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=z))}Cu(m,t)})}function Kn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Wn(e,n),i!=null&&r.unshift(Kn(e,i,l)),i=Wn(e,t),i!=null&&r.push(Kn(e,i,l))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ta(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Wn(n,i),s!=null&&o.unshift(Kn(n,s,a))):l||(s=Wn(n,i),s!=null&&o.push(Kn(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Rf=/\r\n?/g,Of=/\u0000|\uFFFD/g;function La(e){return(typeof e=="string"?e:""+e).replace(Rf,`
`).replace(Of,"")}function jr(e,t,n){if(t=La(t),La(e)!==t&&n)throw Error(S(425))}function Zr(){}var _i=null,Ti=null;function Li(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mi=typeof setTimeout=="function"?setTimeout:void 0,Df=typeof clearTimeout=="function"?clearTimeout:void 0,Ma=typeof Promise=="function"?Promise:void 0,If=typeof queueMicrotask=="function"?queueMicrotask:typeof Ma<"u"?function(e){return Ma.resolve(null).then(e).catch(Ff)}:Mi;function Ff(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);bn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ra(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+hn,Xn="__reactProps$"+hn,Ke="__reactContainer$"+hn,Ri="__reactEvents$"+hn,Uf="__reactListeners$"+hn,Bf="__reactHandles$"+hn;function Nt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ra(e);e!==null;){if(n=e[Ae])return n;e=Ra(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[Ae]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function xl(e){return e[Xn]||null}var Oi=[],Yt=-1;function xt(e){return{current:e}}function B(e){0>Yt||(e.current=Oi[Yt],Oi[Yt]=null,Yt--)}function F(e,t){Yt++,Oi[Yt]=e.current,e.current=t}var vt={},ae=xt(vt),me=xt(!1),Lt=vt;function an(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Jr(){B(me),B(ae)}function Oa(e,t,n){if(ae.current!==vt)throw Error(S(168));F(ae,t),F(me,n)}function Pu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,kd(e)||"Unknown",l));return V({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Lt=ae.current,F(ae,e),F(me,me.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Pu(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,B(me),B(ae),F(ae,e)):B(me),F(me,n)}var He=null,wl=!1,Zl=!1;function zu(e){He===null?He=[e]:He.push(e)}function Af(e){wl=!0,zu(e)}function wt(){if(!Zl&&He!==null){Zl=!0;var e=0,t=I;try{var n=He;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,wl=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),qs(ho,wt),l}finally{I=t,Zl=!1}}return null}var Gt=[],Kt=0,el=null,tl=0,Ee=[],je=0,Mt=null,be=1,Qe="";function jt(e,t){Gt[Kt++]=tl,Gt[Kt++]=el,el=e,tl=t}function _u(e,t,n){Ee[je++]=be,Ee[je++]=Qe,Ee[je++]=Mt,Mt=e;var r=be;e=Qe;var l=32-De(r)-1;r&=~(1<<l),n+=1;var i=32-De(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,be=1<<32-De(t)+l|n<<l|r,Qe=i+e}else be=1<<i|n<<l|r,Qe=e}function jo(e){e.return!==null&&(jt(e,1),_u(e,1,0))}function Co(e){for(;e===el;)el=Gt[--Kt],Gt[Kt]=null,tl=Gt[--Kt],Gt[Kt]=null;for(;e===Mt;)Mt=Ee[--je],Ee[je]=null,Qe=Ee[--je],Ee[je]=null,be=Ee[--je],Ee[je]=null}var xe=null,ye=null,A=!1,Oe=null;function Tu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ia(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ye=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:be,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ye=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ii(e){if(A){var t=ye;if(t){var n=t;if(!Ia(e,t)){if(Di(e))throw Error(S(418));t=ct(n.nextSibling);var r=xe;t&&Ia(e,t)?Tu(r,n):(e.flags=e.flags&-4097|2,A=!1,xe=e)}}else{if(Di(e))throw Error(S(418));e.flags=e.flags&-4097|2,A=!1,xe=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Cr(e){if(e!==xe)return!1;if(!A)return Fa(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Li(e.type,e.memoizedProps)),t&&(t=ye)){if(Di(e))throw Lu(),Error(S(418));for(;t;)Tu(e,t),t=ct(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=xe?ct(e.stateNode.nextSibling):null;return!0}function Lu(){for(var e=ye;e;)e=ct(e.nextSibling)}function sn(){ye=xe=null,A=!1}function No(e){Oe===null?Oe=[e]:Oe.push(e)}var $f=Je.ReactCurrentBatchConfig;function jn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Nr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ua(e){var t=e._init;return t(e._payload)}function Mu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=mt(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,v){return d===null||d.tag!==6?(d=li(p,f.mode,v),d.return=f,d):(d=l(d,p),d.return=f,d)}function s(f,d,p,v){var E=p.type;return E===Wt?g(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===et&&Ua(E)===d.type)?(v=l(d,p.props),v.ref=jn(f,d,p),v.return=f,v):(v=Wr(p.type,p.key,p.props,null,f.mode,v),v.ref=jn(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ii(p,f.mode,v),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function g(f,d,p,v,E){return d===null||d.tag!==7?(d=Tt(p,f.mode,v,E),d.return=f,d):(d=l(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=li(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case hr:return p=Wr(d.type,d.key,d.props,null,f.mode,p),p.ref=jn(f,null,d),p.return=f,p;case $t:return d=ii(d,f.mode,p),d.return=f,d;case et:var v=d._init;return m(f,v(d._payload),p)}if(zn(d)||xn(d))return d=Tt(d,f.mode,p,null),d.return=f,d;Nr(f,d)}return null}function h(f,d,p,v){var E=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===E?s(f,d,p,v):null;case $t:return p.key===E?c(f,d,p,v):null;case et:return E=p._init,h(f,d,E(p._payload),v)}if(zn(p)||xn(p))return E!==null?null:g(f,d,p,v,null);Nr(f,p)}return null}function y(f,d,p,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(d,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hr:return f=f.get(v.key===null?p:v.key)||null,s(d,f,v,E);case $t:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,E);case et:var P=v._init;return y(f,d,p,P(v._payload),E)}if(zn(v)||xn(v))return f=f.get(p)||null,g(d,f,v,E,null);Nr(d,v)}return null}function x(f,d,p,v){for(var E=null,P=null,z=d,_=d=0,b=null;z!==null&&_<p.length;_++){z.index>_?(b=z,z=null):b=z.sibling;var R=h(f,z,p[_],v);if(R===null){z===null&&(z=b);break}e&&z&&R.alternate===null&&t(f,z),d=i(R,d,_),P===null?E=R:P.sibling=R,P=R,z=b}if(_===p.length)return n(f,z),A&&jt(f,_),E;if(z===null){for(;_<p.length;_++)z=m(f,p[_],v),z!==null&&(d=i(z,d,_),P===null?E=z:P.sibling=z,P=z);return A&&jt(f,_),E}for(z=r(f,z);_<p.length;_++)b=y(z,f,_,p[_],v),b!==null&&(e&&b.alternate!==null&&z.delete(b.key===null?_:b.key),d=i(b,d,_),P===null?E=b:P.sibling=b,P=b);return e&&z.forEach(function(_e){return t(f,_e)}),A&&jt(f,_),E}function w(f,d,p,v){var E=xn(p);if(typeof E!="function")throw Error(S(150));if(p=E.call(p),p==null)throw Error(S(151));for(var P=E=null,z=d,_=d=0,b=null,R=p.next();z!==null&&!R.done;_++,R=p.next()){z.index>_?(b=z,z=null):b=z.sibling;var _e=h(f,z,R.value,v);if(_e===null){z===null&&(z=b);break}e&&z&&_e.alternate===null&&t(f,z),d=i(_e,d,_),P===null?E=_e:P.sibling=_e,P=_e,z=b}if(R.done)return n(f,z),A&&jt(f,_),E;if(z===null){for(;!R.done;_++,R=p.next())R=m(f,R.value,v),R!==null&&(d=i(R,d,_),P===null?E=R:P.sibling=R,P=R);return A&&jt(f,_),E}for(z=r(f,z);!R.done;_++,R=p.next())R=y(z,f,_,R.value,v),R!==null&&(e&&R.alternate!==null&&z.delete(R.key===null?_:R.key),d=i(R,d,_),P===null?E=R:P.sibling=R,P=R);return e&&z.forEach(function(vn){return t(f,vn)}),A&&jt(f,_),E}function j(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var E=p.key,P=d;P!==null;){if(P.key===E){if(E=p.type,E===Wt){if(P.tag===7){n(f,P.sibling),d=l(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===et&&Ua(E)===P.type){n(f,P.sibling),d=l(P,p.props),d.ref=jn(f,P,p),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===Wt?(d=Tt(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Wr(p.type,p.key,p.props,null,f.mode,v),v.ref=jn(f,d,p),v.return=f,f=v)}return o(f);case $t:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ii(p,f.mode,v),d.return=f,f=d}return o(f);case et:return P=p._init,j(f,d,P(p._payload),v)}if(zn(p))return x(f,d,p,v);if(xn(p))return w(f,d,p,v);Nr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=li(p,f.mode,v),d.return=f,f=d),o(f)):n(f,d)}return j}var un=Mu(!0),Ru=Mu(!1),nl=xt(null),rl=null,Xt=null,Po=null;function zo(){Po=Xt=rl=null}function _o(e){var t=nl.current;B(nl),e._currentValue=t}function Fi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){rl=e,Po=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(rl===null)throw Error(S(308));Xt=e,rl.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Pt=null;function To(e){Pt===null?Pt=[e]:Pt.push(e)}function Ou(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,To(t)):(n.next=l.next,l.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function Lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Xe(e,n)}return l=r.interleaved,l===null?(t.next=t,To(r)):(t.next=l.next,l.next=t),r.interleaved=t,Xe(e,n)}function Ir(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,go(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,r){var l=e.updateQueue;tt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=s))}if(i!==null){var m=l.baseState;o=0,g=c=s=null,a=i;do{var h=a.lane,y=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(h=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(y,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(y,m,h):x,h==null)break e;m=V({},m,h);break e;case 2:tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=y,s=m):g=g.next=y,o|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(g===null&&(s=m),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ot|=o,e.lanes=o,e.memoizedState=m}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var ur={},We=xt(ur),Zn=xt(ur),Jn=xt(ur);function zt(e){if(e===ur)throw Error(S(174));return e}function Mo(e,t){switch(F(Jn,t),F(Zn,e),F(We,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vi(t,e)}B(We),F(We,t)}function cn(){B(We),B(Zn),B(Jn)}function Iu(e){zt(Jn.current);var t=zt(We.current),n=vi(t,e.type);t!==n&&(F(Zn,e),F(We,n))}function Ro(e){Zn.current===e&&(B(We),B(Zn))}var $=xt(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Oo(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Fr=Je.ReactCurrentDispatcher,ql=Je.ReactCurrentBatchConfig,Rt=0,W=null,X=null,q=null,ol=!1,In=!1,qn=0,Wf=0;function le(){throw Error(S(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function Io(e,t,n,r,l,i){if(Rt=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fr.current=e===null||e.memoizedState===null?Qf:Yf,e=n(r,l),In){i=0;do{if(In=!1,qn=0,25<=i)throw Error(S(301));i+=1,q=X=null,t.updateQueue=null,Fr.current=Gf,e=n(r,l)}while(In)}if(Fr.current=al,t=X!==null&&X.next!==null,Rt=0,q=X=W=null,ol=!1,t)throw Error(S(300));return e}function Fo(){var e=qn!==0;return qn=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?W.memoizedState=q=e:q=q.next=e,q}function ze(){if(X===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=q===null?W.memoizedState:q.next;if(t!==null)q=t,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?W.memoizedState=q=e:q=q.next=e}return q}function er(e,t){return typeof t=="function"?t(e):t}function ei(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,c=i;do{var g=c.lane;if((Rt&g)===g)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,o=r):s=s.next=m,W.lanes|=g,Ot|=g}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=a,Fe(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,W.lanes|=i,Ot|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ti(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Fe(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Fu(){}function Uu(e,t){var n=W,r=ze(),l=t(),i=!Fe(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,Uo($u.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,tr(9,Au.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(S(349));Rt&30||Bu(n,t,l)}return l}function Bu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Au(e,t,n,r){t.value=n,t.getSnapshot=r,Wu(t)&&Vu(e)}function $u(e,t,n){return n(function(){Wu(t)&&Vu(e)})}function Wu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function Vu(e){var t=Xe(e,1);t!==null&&Ie(t,e,1,-1)}function $a(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=bf.bind(null,W,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hu(){return ze().memoizedState}function Ur(e,t,n,r){var l=Be();W.flags|=e,l.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function Sl(e,t,n,r){var l=ze();r=r===void 0?null:r;var i=void 0;if(X!==null){var o=X.memoizedState;if(i=o.destroy,r!==null&&Do(r,o.deps)){l.memoizedState=tr(t,n,i,r);return}}W.flags|=e,l.memoizedState=tr(1|t,n,i,r)}function Wa(e,t){return Ur(8390656,8,e,t)}function Uo(e,t){return Sl(2048,8,e,t)}function bu(e,t){return Sl(4,2,e,t)}function Qu(e,t){return Sl(4,4,e,t)}function Yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gu(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4,4,Yu.bind(null,t,e),n)}function Bo(){}function Ku(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xu(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Do(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zu(e,t,n){return Rt&21?(Fe(n,t)||(n=nu(),W.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function Vf(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{I=n,ql.transition=r}}function Ju(){return ze().memoizedState}function Hf(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qu(e))ec(t,n);else if(n=Ou(e,t,n,r),n!==null){var l=ue();Ie(n,e,r,l),tc(n,t,r)}}function bf(e,t,n){var r=pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qu(e))ec(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Fe(a,o)){var s=t.interleaved;s===null?(l.next=l,To(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Ou(e,t,l,r),n!==null&&(l=ue(),Ie(n,e,r,l),tc(n,t,r))}}function qu(e){var t=e.alternate;return e===W||t!==null&&t===W}function ec(e,t){In=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,go(e,n)}}var al={readContext:Pe,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Qf={readContext:Pe,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ur(4194308,4,Yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ur(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hf.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:$a,useDebugValue:Bo,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=$a(!1),t=e[0];return e=Vf.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=Be();if(A){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ee===null)throw Error(S(349));Rt&30||Bu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Wa($u.bind(null,r,i,e),[e]),r.flags|=2048,tr(9,Au.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Be(),t=ee.identifierPrefix;if(A){var n=Qe,r=be;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yf={readContext:Pe,useCallback:Ku,useContext:Pe,useEffect:Uo,useImperativeHandle:Gu,useInsertionEffect:bu,useLayoutEffect:Qu,useMemo:Xu,useReducer:ei,useRef:Hu,useState:function(){return ei(er)},useDebugValue:Bo,useDeferredValue:function(e){var t=ze();return Zu(t,X.memoizedState,e)},useTransition:function(){var e=ei(er)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Uu,useId:Ju,unstable_isNewReconciler:!1},Gf={readContext:Pe,useCallback:Ku,useContext:Pe,useEffect:Uo,useImperativeHandle:Gu,useInsertionEffect:bu,useLayoutEffect:Qu,useMemo:Xu,useReducer:ti,useRef:Hu,useState:function(){return ti(er)},useDebugValue:Bo,useDeferredValue:function(e){var t=ze();return X===null?t.memoizedState=e:Zu(t,X.memoizedState,e)},useTransition:function(){var e=ti(er)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Uu,useId:Ju,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ui(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=pt(e),i=Ye(r,l);i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(Ie(t,e,l,r),Ir(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=pt(e),i=Ye(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(Ie(t,e,l,r),Ir(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=pt(e),l=Ye(n,r);l.tag=2,t!=null&&(l.callback=t),t=dt(e,l,r),t!==null&&(Ie(t,e,r,n),Ir(t,e,r))}};function Va(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(l,i):!0}function nc(e,t,n){var r=!1,l=vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Pe(i):(l=he(t)?Lt:ae.current,r=t.contextTypes,i=(r=r!=null)?an(e,l):vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ha(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function Bi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Lo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Pe(i):(i=he(t)?Lt:ae.current,l.context=an(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ui(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&kl.enqueueReplaceState(l,l.state,null),ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=Sd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ai(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kf=typeof WeakMap=="function"?WeakMap:Map;function rc(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,Xi=r),Ai(e,t)},n}function lc(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ai(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ai(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ba(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=up.bind(null,e,t,n),t.then(e,e))}function Qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ya(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var Xf=Je.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?Ru(t,null,n,r):un(t,e.child,n,r)}function Ga(e,t,n,r,l){n=n.render;var i=t.ref;return rn(t,l),r=Io(e,t,n,r,i,l),n=Fo(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):(A&&n&&jo(t),t.flags|=1,se(e,t,r,l),t.child)}function Ka(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Yo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ic(e,t,i,r,l)):(e=Wr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(o,r)&&e.ref===t.ref)return Ze(e,t,l)}return t.flags|=1,e=mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Yn(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Ze(e,t,l)}return $i(e,t,n,r,l)}function oc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Jt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Jt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(Jt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(Jt,ve),ve|=r;return se(e,t,l,n),t.child}function ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $i(e,t,n,r,l){var i=he(n)?Lt:ae.current;return i=an(t,i),rn(t,l),n=Io(e,t,n,r,i,l),r=Fo(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):(A&&r&&jo(t),t.flags|=1,se(e,t,n,l),t.child)}function Xa(e,t,n,r,l){if(he(n)){var i=!0;qr(t)}else i=!1;if(rn(t,l),t.stateNode===null)Br(e,t),nc(t,n,r),Bi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pe(c):(c=he(n)?Lt:ae.current,c=an(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Ha(t,o,r,c),tt=!1;var h=t.memoizedState;o.state=h,ll(t,r,o,l),s=t.memoizedState,a!==r||h!==s||me.current||tt?(typeof g=="function"&&(Ui(t,n,g,r),s=t.memoizedState),(a=tt||Va(t,n,a,r,h,s,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Du(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Le(t.type,a),o.props=c,m=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Pe(s):(s=he(n)?Lt:ae.current,s=an(t,s));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||h!==s)&&Ha(t,o,r,s),tt=!1,h=t.memoizedState,o.state=h,ll(t,r,o,l);var x=t.memoizedState;a!==m||h!==x||me.current||tt?(typeof y=="function"&&(Ui(t,n,y,r),x=t.memoizedState),(c=tt||Va(t,n,c,r,h,x,s)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Wi(e,t,n,r,i,l)}function Wi(e,t,n,r,l,i){ac(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Da(t,n,!1),Ze(e,t,i);r=t.stateNode,Xf.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=un(t,e.child,null,i),t.child=un(t,null,a,i)):se(e,t,a,i),t.memoizedState=r.state,l&&Da(t,n,!0),t.child}function sc(e){var t=e.stateNode;t.pendingContext?Oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(e,t.context,!1),Mo(e,t.containerInfo)}function Za(e,t,n,r,l){return sn(),No(l),t.flags|=256,se(e,t,n,r),t.child}var Vi={dehydrated:null,treeContext:null,retryLane:0};function Hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,t,n){var r=t.pendingProps,l=$.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F($,l&1),e===null)return Ii(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Cl(o,r,0,null),e=Tt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hi(n),t.memoizedState=Vi,e):Ao(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Zf(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=mt(a,i):(i=Tt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Hi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Vi,r}return i=e.child,e=i.sibling,r=mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ao(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&No(r),un(t,e.child,null,n),e=Ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ni(Error(S(422))),Pr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Cl({mode:"visible",children:r.children},l,0,null),i=Tt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&un(t,e.child,null,o),t.child.memoizedState=Hi(o),t.memoizedState=Vi,i);if(!(t.mode&1))return Pr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=ni(i,r,void 0),Pr(e,t,o,r)}if(a=(o&e.childLanes)!==0,pe||a){if(r=ee,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Xe(e,l),Ie(r,e,l,-1))}return Qo(),r=ni(Error(S(421))),Pr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=cp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ye=ct(l.nextSibling),xe=t,A=!0,Oe=null,e!==null&&(Ee[je++]=be,Ee[je++]=Qe,Ee[je++]=Mt,be=e.id,Qe=e.overflow,Mt=t),t=Ao(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fi(e.return,t,n)}function ri(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function cc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ri(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ri(t,!0,n,null,i);break;case"together":ri(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jf(e,t,n){switch(t.tag){case 3:sc(t),sn();break;case 5:Iu(t);break;case 1:he(t.type)&&qr(t);break;case 4:Mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;F(nl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F($,$.current&1),t.flags|=128,null):n&t.child.childLanes?uc(e,t,n):(F($,$.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);F($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,oc(e,t,n)}return Ze(e,t,n)}var dc,bi,fc,pc;dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bi=function(){};fc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,zt(We.current);var i=null;switch(n){case"input":l=pi(e,l),r=pi(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=gi(e,l),r=gi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}yi(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(An.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(An.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&U("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};pc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qf(e,t,n){var r=t.pendingProps;switch(Co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return he(t.type)&&Jr(),ie(t),null;case 3:return r=t.stateNode,cn(),B(me),B(ae),Oo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(qi(Oe),Oe=null))),bi(e,t),ie(t),null;case 5:Ro(t);var l=zt(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)fc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ie(t),null}if(e=zt(We.current),Cr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ae]=t,r[Xn]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<Tn.length;l++)U(Tn[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":aa(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":ua(r,i),U("invalid",r)}yi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&jr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&jr(r.textContent,a,e),l=["children",""+a]):An.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":gr(r),sa(r,i,!0);break;case"textarea":gr(r),ca(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$s(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ae]=t,e[Xn]=r,dc(e,t,!1,!1),t.stateNode=e;e:{switch(o=xi(n,r),n){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<Tn.length;l++)U(Tn[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":aa(e,r),l=pi(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),U("invalid",e);break;case"textarea":ua(e,r),l=gi(e,r),U("invalid",e);break;default:l=r}yi(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Hs(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ws(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&$n(e,s):typeof s=="number"&&$n(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(An.hasOwnProperty(i)?s!=null&&i==="onScroll"&&U("scroll",e):s!=null&&uo(e,i,s,o))}switch(n){case"input":gr(e),sa(e,r,!1);break;case"textarea":gr(e),ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)pc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=zt(Jn.current),zt(We.current),Cr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(i=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return ie(t),null;case 13:if(B($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ye!==null&&t.mode&1&&!(t.flags&128))Lu(),sn(),t.flags|=98560,i=!1;else if(i=Cr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Ae]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Oe!==null&&(qi(Oe),Oe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?Z===0&&(Z=3):Qo())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return cn(),bi(e,t),e===null&&Gn(t.stateNode.containerInfo),ie(t),null;case 10:return _o(t.type._context),ie(t),null;case 17:return he(t.type)&&Jr(),ie(t),null;case 19:if(B($),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Cn(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=il(e),o!==null){for(t.flags|=128,Cn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>fn&&(t.flags|=128,r=!0,Cn(i,!1),t.lanes=4194304)}else{if(!r)if(e=il(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!A)return ie(t),null}else 2*Y()-i.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,Cn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,n=$.current,F($,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return bo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function ep(e,t){switch(Co(t),t.tag){case 1:return he(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(),B(me),B(ae),Oo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ro(t),null;case 13:if(B($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B($),null;case 4:return cn(),null;case 10:return _o(t.type._context),null;case 22:case 23:return bo(),null;case 24:return null;default:return null}}var zr=!1,oe=!1,tp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Qi(e,t,n){try{n()}catch(r){H(e,t,r)}}var qa=!1;function np(e,t){if(_i=Gr,e=yu(),Eo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,c=0,g=0,m=e,h=null;t:for(;;){for(var y;m!==n||l!==0&&m.nodeType!==3||(a=o+l),m!==i||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++c===l&&(a=o),h===i&&++g===r&&(s=o),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ti={focusedElem:e,selectionRange:n},Gr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,j=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Le(t.type,w),j);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){H(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return x=qa,qa=!1,x}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Qi(t,n,i)}l=l.next}while(l!==r)}}function El(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mc(e){var t=e.alternate;t!==null&&(e.alternate=null,mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Xn],delete t[Ri],delete t[Uf],delete t[Bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hc(e){return e.tag===5||e.tag===3||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Gi(e,t,n),e=e.sibling;e!==null;)Gi(e,t,n),e=e.sibling}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}var te=null,Re=!1;function qe(e,t,n){for(n=n.child;n!==null;)gc(e,t,n),n=n.sibling}function gc(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:oe||Zt(n,t);case 6:var r=te,l=Re;te=null,qe(e,t,n),te=r,Re=l,te!==null&&(Re?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Re?(e=te,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),bn(e)):Xl(te,n.stateNode));break;case 4:r=te,l=Re,te=n.stateNode.containerInfo,Re=!0,qe(e,t,n),te=r,Re=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Qi(n,t,o),l=l.next}while(l!==r)}qe(e,t,n);break;case 1:if(!oe&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){H(n,t,a)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,qe(e,t,n),oe=r):qe(e,t,n);break;default:qe(e,t,n)}}function ts(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tp),t.forEach(function(r){var l=dp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Re=!1;break e;case 3:te=a.stateNode.containerInfo,Re=!0;break e;case 4:te=a.stateNode.containerInfo,Re=!0;break e}a=a.return}if(te===null)throw Error(S(160));gc(i,o,l),te=null,Re=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){H(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Ue(e),r&4){try{Fn(3,e,e.return),El(3,e)}catch(w){H(e,e.return,w)}try{Fn(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:Te(t,e),Ue(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Te(t,e),Ue(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var l=e.stateNode;try{$n(l,"")}catch(w){H(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Bs(l,i),xi(a,o);var c=xi(a,i);for(o=0;o<s.length;o+=2){var g=s[o],m=s[o+1];g==="style"?Hs(l,m):g==="dangerouslySetInnerHTML"?Ws(l,m):g==="children"?$n(l,m):uo(l,g,m,c)}switch(a){case"input":mi(l,i);break;case"textarea":As(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?qt(l,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?qt(l,!!i.multiple,i.defaultValue,!0):qt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Xn]=i}catch(w){H(e,e.return,w)}}break;case 6:if(Te(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){H(e,e.return,w)}}break;case 3:if(Te(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:Te(t,e),Ue(e);break;case 13:Te(t,e),Ue(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Vo=Y())),r&4&&ts(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||g,Te(t,e),oe=c):Te(t,e),Ue(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(C=e,g=e.child;g!==null;){for(m=C=g;C!==null;){switch(h=C,y=h.child,h.tag){case 0:case 11:case 14:case 15:Fn(4,h,h.return);break;case 1:Zt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){H(r,n,w)}}break;case 5:Zt(h,h.return);break;case 22:if(h.memoizedState!==null){rs(m);continue}}y!==null?(y.return=h,C=y):rs(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Vs("display",o))}catch(w){H(e,e.return,w)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){H(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Te(t,e),Ue(e),r&4&&ts(e);break;case 21:break;default:Te(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&($n(l,""),r.flags&=-33);var i=es(e);Ki(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=es(e);Gi(e,a,o);break;default:throw Error(S(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rp(e,t,n){C=e,yc(e)}function yc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||zr;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||oe;a=zr;var c=oe;if(zr=o,(oe=s)&&!c)for(C=l;C!==null;)o=C,s=o.child,o.tag===22&&o.memoizedState!==null?ls(l):s!==null?(s.return=o,C=s):ls(l);for(;i!==null;)C=i,yc(i),i=i.sibling;C=l,zr=a,oe=c}ns(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):ns(e)}}function ns(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||El(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Aa(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&bn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}oe||t.flags&512&&Yi(t)}catch(h){H(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function rs(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function ls(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{El(4,t)}catch(s){H(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){H(t,l,s)}}var i=t.return;try{Yi(t)}catch(s){H(t,i,s)}break;case 5:var o=t.return;try{Yi(t)}catch(s){H(t,o,s)}}}catch(s){H(t,t.return,s)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var lp=Math.ceil,sl=Je.ReactCurrentDispatcher,$o=Je.ReactCurrentOwner,Ne=Je.ReactCurrentBatchConfig,D=0,ee=null,G=null,ne=0,ve=0,Jt=xt(0),Z=0,nr=null,Ot=0,jl=0,Wo=0,Un=null,fe=null,Vo=0,fn=1/0,Ve=null,ul=!1,Xi=null,ft=null,_r=!1,it=null,cl=0,Bn=0,Zi=null,Ar=-1,$r=0;function ue(){return D&6?Y():Ar!==-1?Ar:Ar=Y()}function pt(e){return e.mode&1?D&2&&ne!==0?ne&-ne:$f.transition!==null?($r===0&&($r=nu()),$r):(e=I,e!==0||(e=window.event,e=e===void 0?16:uu(e.type)),e):1}function Ie(e,t,n,r){if(50<Bn)throw Bn=0,Zi=null,Error(S(185));or(e,n,r),(!(D&2)||e!==ee)&&(e===ee&&(!(D&2)&&(jl|=n),Z===4&&rt(e,ne)),ge(e,r),n===1&&D===0&&!(t.mode&1)&&(fn=Y()+500,wl&&wt()))}function ge(e,t){var n=e.callbackNode;Ad(e,t);var r=Yr(e,e===ee?ne:0);if(r===0)n!==null&&pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pa(n),t===1)e.tag===0?Af(is.bind(null,e)):zu(is.bind(null,e)),If(function(){!(D&6)&&wt()}),n=null;else{switch(ru(r)){case 1:n=ho;break;case 4:n=eu;break;case 16:n=Qr;break;case 536870912:n=tu;break;default:n=Qr}n=Nc(n,xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xc(e,t){if(Ar=-1,$r=0,D&6)throw Error(S(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=Yr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=dl(e,r);else{t=r;var l=D;D|=2;var i=Sc();(ee!==e||ne!==t)&&(Ve=null,fn=Y()+500,_t(e,t));do try{ap();break}catch(a){wc(e,a)}while(!0);zo(),sl.current=i,D=l,G!==null?t=0:(ee=null,ne=0,t=Z)}if(t!==0){if(t===2&&(l=ji(e),l!==0&&(r=l,t=Ji(e,l))),t===1)throw n=nr,_t(e,0),rt(e,r),ge(e,Y()),n;if(t===6)rt(e,r);else{if(l=e.current.alternate,!(r&30)&&!ip(l)&&(t=dl(e,r),t===2&&(i=ji(e),i!==0&&(r=i,t=Ji(e,i))),t===1))throw n=nr,_t(e,0),rt(e,r),ge(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Ct(e,fe,Ve);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Vo+500-Y(),10<t)){if(Yr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Mi(Ct.bind(null,e,fe,Ve),t);break}Ct(e,fe,Ve);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-De(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lp(r/1960))-r,10<r){e.timeoutHandle=Mi(Ct.bind(null,e,fe,Ve),r);break}Ct(e,fe,Ve);break;case 5:Ct(e,fe,Ve);break;default:throw Error(S(329))}}}return ge(e,Y()),e.callbackNode===n?xc.bind(null,e):null}function Ji(e,t){var n=Un;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=dl(e,t),e!==2&&(t=fe,fe=n,t!==null&&qi(t)),e}function qi(e){fe===null?fe=e:fe.push.apply(fe,e)}function ip(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Fe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Wo,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function is(e){if(D&6)throw Error(S(327));ln();var t=Yr(e,0);if(!(t&1))return ge(e,Y()),null;var n=dl(e,t);if(e.tag!==0&&n===2){var r=ji(e);r!==0&&(t=r,n=Ji(e,r))}if(n===1)throw n=nr,_t(e,0),rt(e,t),ge(e,Y()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ct(e,fe,Ve),ge(e,Y()),null}function Ho(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(fn=Y()+500,wl&&wt())}}function Dt(e){it!==null&&it.tag===0&&!(D&6)&&ln();var t=D;D|=1;var n=Ne.transition,r=I;try{if(Ne.transition=null,I=1,e)return e()}finally{I=r,Ne.transition=n,D=t,!(D&6)&&wt()}}function bo(){ve=Jt.current,B(Jt)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Df(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(Co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:cn(),B(me),B(ae),Oo();break;case 5:Ro(r);break;case 4:cn();break;case 13:B($);break;case 19:B($);break;case 10:_o(r.type._context);break;case 22:case 23:bo()}n=n.return}if(ee=e,G=e=mt(e.current,null),ne=ve=t,Z=0,nr=null,Wo=jl=Ot=0,fe=Un=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Pt=null}return e}function wc(e,t){do{var n=G;try{if(zo(),Fr.current=al,ol){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ol=!1}if(Rt=0,q=X=W=null,In=!1,qn=0,$o.current=null,n===null||n.return===null){Z=1,nr=t,G=null;break}e:{var i=e,o=n.return,a=n,s=t;if(t=ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,g=a,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Qa(o);if(y!==null){y.flags&=-257,Ya(y,o,a,i,t),y.mode&1&&ba(i,c,t),t=y,s=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(s),t.updateQueue=w}else x.add(s);break e}else{if(!(t&1)){ba(i,c,t),Qo();break e}s=Error(S(426))}}else if(A&&a.mode&1){var j=Qa(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ya(j,o,a,i,t),No(dn(s,a));break e}}i=s=dn(s,a),Z!==4&&(Z=2),Un===null?Un=[i]:Un.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=rc(i,s,t);Ba(i,f);break e;case 1:a=s;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ft===null||!ft.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=lc(i,a,t);Ba(i,v);break e}}i=i.return}while(i!==null)}Ec(n)}catch(E){t=E,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Sc(){var e=sl.current;return sl.current=al,e===null?al:e}function Qo(){(Z===0||Z===3||Z===2)&&(Z=4),ee===null||!(Ot&268435455)&&!(jl&268435455)||rt(ee,ne)}function dl(e,t){var n=D;D|=2;var r=Sc();(ee!==e||ne!==t)&&(Ve=null,_t(e,t));do try{op();break}catch(l){wc(e,l)}while(!0);if(zo(),D=n,sl.current=r,G!==null)throw Error(S(261));return ee=null,ne=0,Z}function op(){for(;G!==null;)kc(G)}function ap(){for(;G!==null&&!Ld();)kc(G)}function kc(e){var t=Cc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Ec(e):G=t,$o.current=null}function Ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ep(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,G=null;return}}else if(n=qf(n,t,ve),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Z===0&&(Z=5)}function Ct(e,t,n){var r=I,l=Ne.transition;try{Ne.transition=null,I=1,sp(e,t,n,r)}finally{Ne.transition=l,I=r}return null}function sp(e,t,n,r){do ln();while(it!==null);if(D&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if($d(e,i),e===ee&&(G=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,Nc(Qr,function(){return ln(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ne.transition,Ne.transition=null;var o=I;I=1;var a=D;D|=4,$o.current=null,np(e,n),vc(n,e),zf(Ti),Gr=!!_i,Ti=_i=null,e.current=n,rp(n),Md(),D=a,I=o,Ne.transition=i}else e.current=n;if(_r&&(_r=!1,it=e,cl=l),i=e.pendingLanes,i===0&&(ft=null),Dd(n.stateNode),ge(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ul)throw ul=!1,e=Xi,Xi=null,e;return cl&1&&e.tag!==0&&ln(),i=e.pendingLanes,i&1?e===Zi?Bn++:(Bn=0,Zi=e):Bn=0,wt(),null}function ln(){if(it!==null){var e=ru(cl),t=Ne.transition,n=I;try{if(Ne.transition=null,I=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,cl=0,D&6)throw Error(S(331));var l=D;for(D|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(C=c;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:Fn(8,g,i)}var m=g.child;if(m!==null)m.return=g,C=m;else for(;C!==null;){g=C;var h=g.sibling,y=g.return;if(mc(g),g===c){C=null;break}if(h!==null){h.return=y,C=h;break}C=y}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,C=f;break e}C=i.return}}var d=e.current;for(C=d;C!==null;){o=C;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,C=p;else e:for(o=d;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:El(9,a)}}catch(E){H(a,a.return,E)}if(a===o){C=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,C=v;break e}C=a.return}}if(D=l,wt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(hl,e)}catch{}r=!0}return r}finally{I=n,Ne.transition=t}}return!1}function os(e,t,n){t=dn(n,t),t=rc(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(or(e,1,t),ge(e,t))}function H(e,t,n){if(e.tag===3)os(e,e,n);else for(;t!==null;){if(t.tag===3){os(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=dn(n,e),e=lc(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(or(t,1,e),ge(t,e));break}}t=t.return}}function up(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Z===4||Z===3&&(ne&130023424)===ne&&500>Y()-Vo?_t(e,0):Wo|=n),ge(e,t)}function jc(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=ue();e=Xe(e,t),e!==null&&(or(e,t,n),ge(e,n))}function cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jc(e,n)}function dp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),jc(e,n)}var Cc;Cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Jf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,A&&t.flags&1048576&&_u(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Br(e,t),e=t.pendingProps;var l=an(t,ae.current);rn(t,n),l=Io(null,t,r,e,l,n);var i=Fo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,qr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Lo(t),l.updater=kl,t.stateNode=l,l._reactInternals=t,Bi(t,r,e,n),t=Wi(null,t,r,!0,i,n)):(t.tag=0,A&&i&&jo(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Br(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=pp(r),e=Le(r,e),l){case 0:t=$i(null,t,r,e,n);break e;case 1:t=Xa(null,t,r,e,n);break e;case 11:t=Ga(null,t,r,e,n);break e;case 14:t=Ka(null,t,r,Le(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),$i(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Xa(e,t,r,l,n);case 3:e:{if(sc(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Du(e,t),ll(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=dn(Error(S(423)),t),t=Za(e,t,r,n,l);break e}else if(r!==l){l=dn(Error(S(424)),t),t=Za(e,t,r,n,l);break e}else for(ye=ct(t.stateNode.containerInfo.firstChild),xe=t,A=!0,Oe=null,n=Ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===l){t=Ze(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Iu(t),e===null&&Ii(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Li(r,l)?o=null:i!==null&&Li(r,i)&&(t.flags|=32),ac(e,t),se(e,t,o,n),t.child;case 6:return e===null&&Ii(t),null;case 13:return uc(e,t,n);case 4:return Mo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ga(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,F(nl,r._currentValue),r._currentValue=o,i!==null)if(Fe(i.value,o)){if(i.children===l.children&&!me.current){t=Ze(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ye(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?s.next=s:(s.next=g.next,g.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Fi(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,rn(t,n),l=Pe(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Ka(e,t,r,l,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Br(e,t),t.tag=1,he(r)?(e=!0,qr(t)):e=!1,rn(t,n),nc(t,r,l),Bi(t,r,l,n),Wi(null,t,r,!0,e,n);case 19:return cc(e,t,n);case 22:return oc(e,t,n)}throw Error(S(156,t.tag))};function Nc(e,t){return qs(e,t)}function fp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new fp(e,t,n,r)}function Yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pp(e){if(typeof e=="function")return Yo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fo)return 11;if(e===po)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Yo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wt:return Tt(n.children,l,i,t);case co:o=8,l|=8;break;case ui:return e=Ce(12,n,t,l|2),e.elementType=ui,e.lanes=i,e;case ci:return e=Ce(13,n,t,l),e.elementType=ci,e.lanes=i,e;case di:return e=Ce(19,n,t,l),e.elementType=di,e.lanes=i,e;case Is:return Cl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Os:o=10;break e;case Ds:o=9;break e;case fo:o=11;break e;case po:o=14;break e;case et:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ce(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Tt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=Is,e.lanes=n,e.stateNode={isHidden:!1},e}function li(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function ii(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Go(e,t,n,r,l,i,o,a,s){return e=new mp(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lo(i),e}function hp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pc(e){if(!e)return vt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(he(n))return Pu(e,n,t)}return t}function zc(e,t,n,r,l,i,o,a,s){return e=Go(n,r,!0,e,l,i,o,a,s),e.context=Pc(null),n=e.current,r=ue(),l=pt(n),i=Ye(r,l),i.callback=t??null,dt(n,i,l),e.current.lanes=l,or(e,l,r),ge(e,r),e}function Nl(e,t,n,r){var l=t.current,i=ue(),o=pt(l);return n=Pc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(l,t,o),e!==null&&(Ie(e,l,o,i),Ir(e,l,o)),o}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function as(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ko(e,t){as(e,t),(e=e.alternate)&&as(e,t)}function gp(){return null}var _c=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xo(e){this._internalRoot=e}Pl.prototype.render=Xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Nl(e,t,null,null)};Pl.prototype.unmount=Xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){Nl(null,e,null,null)}),t[Ke]=null}};function Pl(e){this._internalRoot=e}Pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ou();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&su(e)}};function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ss(){}function vp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=fl(o);i.call(c)}}var o=zc(t,r,e,0,null,!1,!1,"",ss);return e._reactRootContainer=o,e[Ke]=o.current,Gn(e.nodeType===8?e.parentNode:e),Dt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=fl(s);a.call(c)}}var s=Go(e,0,!1,null,null,!1,!1,"",ss);return e._reactRootContainer=s,e[Ke]=s.current,Gn(e.nodeType===8?e.parentNode:e),Dt(function(){Nl(t,s,n,r)}),s}function _l(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=fl(o);a.call(s)}}Nl(t,o,e,l)}else o=vp(n,t,e,l,r);return fl(o)}lu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_n(t.pendingLanes);n!==0&&(go(t,n|1),ge(t,Y()),!(D&6)&&(fn=Y()+500,wt()))}break;case 13:Dt(function(){var r=Xe(e,1);if(r!==null){var l=ue();Ie(r,e,1,l)}}),Ko(e,1)}};vo=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ue();Ie(t,e,134217728,n)}Ko(e,134217728)}};iu=function(e){if(e.tag===13){var t=pt(e),n=Xe(e,t);if(n!==null){var r=ue();Ie(n,e,t,r)}Ko(e,t)}};ou=function(){return I};au=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};Si=function(e,t,n){switch(t){case"input":if(mi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=xl(r);if(!l)throw Error(S(90));Us(r),mi(r,l)}}}break;case"textarea":As(e,n);break;case"select":t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}};Ys=Ho;Gs=Dt;var yp={usingClientEntryPoint:!1,Events:[sr,Qt,xl,bs,Qs,Ho]},Nn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xp={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zs(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{hl=Tr.inject(xp),$e=Tr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yp;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zo(t))throw Error(S(200));return hp(e,t,null,n)};Se.createRoot=function(e,t){if(!Zo(e))throw Error(S(299));var n=!1,r="",l=_c;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Go(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Gn(e.nodeType===8?e.parentNode:e),new Xo(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Zs(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Dt(e)};Se.hydrate=function(e,t,n){if(!zl(t))throw Error(S(200));return _l(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Zo(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=_c;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=zc(t,null,e,1,n??null,l,!1,i,o),e[Ke]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Pl(t)};Se.render=function(e,t,n){if(!zl(t))throw Error(S(200));return _l(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!zl(e))throw Error(S(40));return e._reactRootContainer?(Dt(function(){_l(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};Se.unstable_batchedUpdates=Ho;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return _l(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tc)}catch(e){console.error(e)}}Tc(),Ts.exports=Se;var wp=Ts.exports,us=wp;ai.createRoot=us.createRoot,ai.hydrateRoot=us.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rr.apply(this,arguments)}var ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ot||(ot={}));const cs="popstate";function Sp(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:a}=r.location;return eo("",{pathname:i,search:o,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:pl(l)}return Ep(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kp(){return Math.random().toString(36).substr(2,8)}function ds(e,t){return{usr:e.state,key:e.key,idx:t}}function eo(e,t,n,r){return n===void 0&&(n=null),rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gn(t):t,{state:n,key:t&&t.key||r||kp()})}function pl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ep(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,a=ot.Pop,s=null,c=g();c==null&&(c=0,o.replaceState(rr({},o.state,{idx:c}),""));function g(){return(o.state||{idx:null}).idx}function m(){a=ot.Pop;let j=g(),f=j==null?null:j-c;c=j,s&&s({action:a,location:w.location,delta:f})}function h(j,f){a=ot.Push;let d=eo(w.location,j,f);c=g()+1;let p=ds(d,c),v=w.createHref(d);try{o.pushState(p,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;l.location.assign(v)}i&&s&&s({action:a,location:w.location,delta:1})}function y(j,f){a=ot.Replace;let d=eo(w.location,j,f);c=g();let p=ds(d,c),v=w.createHref(d);o.replaceState(p,"",v),i&&s&&s({action:a,location:w.location,delta:0})}function x(j){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof j=="string"?j:pl(j);return d=d.replace(/ $/,"%20"),K(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return a},get location(){return e(l,o)},listen(j){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(cs,m),s=j,()=>{l.removeEventListener(cs,m),s=null}},createHref(j){return t(l,j)},createURL:x,encodeLocation(j){let f=x(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:y,go(j){return o.go(j)}};return w}var fs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fs||(fs={}));function jp(e,t,n){return n===void 0&&(n="/"),Cp(e,t,n)}function Cp(e,t,n,r){let l=typeof t=="string"?gn(t):t,i=Jo(l.pathname||"/",n);if(i==null)return null;let o=Mc(e);Np(o);let a=null;for(let s=0;a==null&&s<o.length;++s){let c=Up(i);a=Dp(o[s],c)}return a}function Mc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(K(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=ht([r,s.relativePath]),g=n.concat(s);i.children&&i.children.length>0&&(K(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Mc(i.children,t,g,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Rp(c,i.index),routesMeta:g})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))l(i,o);else for(let s of Rc(i.path))l(i,o,s)}),t}function Rc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Rc(r.join("/")),a=[];return a.push(...o.map(s=>s===""?i:[i,s].join("/"))),l&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Np(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Op(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Pp=/^:[\w-]+$/,zp=3,_p=2,Tp=1,Lp=10,Mp=-2,ps=e=>e==="*";function Rp(e,t){let n=e.split("/"),r=n.length;return n.some(ps)&&(r+=Mp),t&&(r+=_p),n.filter(l=>!ps(l)).reduce((l,i)=>l+(Pp.test(i)?zp:i===""?Tp:Lp),r)}function Op(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Dp(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,g=i==="/"?t:t.slice(i.length)||"/",m=Ip({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},g),h=s.route;if(!m)return null;Object.assign(l,m.params),o.push({params:l,pathname:ht([i,m.pathname]),pathnameBase:Wp(ht([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=ht([i,m.pathnameBase]))}return o}function Ip(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Fp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,g,m)=>{let{paramName:h,isOptional:y}=g;if(h==="*"){let w=a[m]||"";o=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=a[m];return y&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function Fp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Up(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Lc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Bp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?gn(e):e;return{pathname:n?n.startsWith("/")?n:Ap(n,t):t,search:Vp(r),hash:Hp(l)}}function Ap(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function oi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $p(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Oc(e,t){let n=$p(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Dc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=gn(e):(l=rr({},e),K(!l.pathname||!l.pathname.includes("?"),oi("?","pathname","search",l)),K(!l.pathname||!l.pathname.includes("#"),oi("#","pathname","hash",l)),K(!l.search||!l.search.includes("#"),oi("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,a;if(o==null)a=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),m-=1;l.pathname=h.join("/")}a=m>=0?t[m]:"/"}let s=Bp(l,a),c=o&&o!=="/"&&o.endsWith("/"),g=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||g)&&(s.pathname+="/"),s}const ht=e=>e.join("/").replace(/\/\/+/g,"/"),Wp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Vp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ic=["post","put","patch","delete"];new Set(Ic);const Qp=["get",...Ic];new Set(Qp);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr.apply(this,arguments)}const qo=k.createContext(null),Yp=k.createContext(null),Ut=k.createContext(null),Tl=k.createContext(null),St=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Fc=k.createContext(null);function Gp(e,t){let{relative:n}=t===void 0?{}:t;cr()||K(!1);let{basename:r,navigator:l}=k.useContext(Ut),{hash:i,pathname:o,search:a}=Bc(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:ht([r,o])),l.createHref({pathname:s,search:a,hash:i})}function cr(){return k.useContext(Tl)!=null}function dr(){return cr()||K(!1),k.useContext(Tl).location}function Uc(e){k.useContext(Ut).static||k.useLayoutEffect(e)}function Kp(){let{isDataRoute:e}=k.useContext(St);return e?um():Xp()}function Xp(){cr()||K(!1);let e=k.useContext(qo),{basename:t,future:n,navigator:r}=k.useContext(Ut),{matches:l}=k.useContext(St),{pathname:i}=dr(),o=JSON.stringify(Oc(l,n.v7_relativeSplatPath)),a=k.useRef(!1);return Uc(()=>{a.current=!0}),k.useCallback(function(c,g){if(g===void 0&&(g={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=Dc(c,JSON.parse(o),i,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ht([t,m.pathname])),(g.replace?r.replace:r.push)(m,g.state,g)},[t,r,o,i,e])}function Zp(){let{matches:e}=k.useContext(St),t=e[e.length-1];return t?t.params:{}}function Bc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Ut),{matches:l}=k.useContext(St),{pathname:i}=dr(),o=JSON.stringify(Oc(l,r.v7_relativeSplatPath));return k.useMemo(()=>Dc(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Jp(e,t){return qp(e,t)}function qp(e,t,n,r){cr()||K(!1);let{navigator:l}=k.useContext(Ut),{matches:i}=k.useContext(St),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=dr(),g;if(t){var m;let j=typeof t=="string"?gn(t):t;s==="/"||(m=j.pathname)!=null&&m.startsWith(s)||K(!1),g=j}else g=c;let h=g.pathname||"/",y=h;if(s!=="/"){let j=s.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(j.length).join("/")}let x=jp(e,{pathname:y}),w=lm(x&&x.map(j=>Object.assign({},j,{params:Object.assign({},a,j.params),pathname:ht([s,l.encodeLocation?l.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?s:ht([s,l.encodeLocation?l.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,n,r);return t&&w?k.createElement(Tl.Provider,{value:{location:lr({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:ot.Pop}},w):w}function em(){let e=sm(),t=bp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:l},n):null,null)}const tm=k.createElement(em,null);class nm extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(St.Provider,{value:this.props.routeContext},k.createElement(Fc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rm(e){let{routeContext:t,match:n,children:r}=e,l=k.useContext(qo);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(St.Provider,{value:t},r)}function lm(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(l=n)==null?void 0:l.errors;if(a!=null){let g=o.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);g>=0||K(!1),o=o.slice(0,Math.min(o.length,g+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<o.length;g++){let m=o[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=g),m.route.id){let{loaderData:h,errors:y}=n,x=m.route.loader&&h[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||x){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((g,m,h)=>{let y,x=!1,w=null,j=null;n&&(y=a&&m.route.id?a[m.route.id]:void 0,w=m.route.errorElement||tm,s&&(c<0&&h===0?(cm("route-fallback"),x=!0,j=null):c===h&&(x=!0,j=m.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,h+1)),d=()=>{let p;return y?p=w:x?p=j:m.route.Component?p=k.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=g,k.createElement(rm,{match:m,routeContext:{outlet:g,matches:f,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?k.createElement(nm,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Ac=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ac||{}),$c=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($c||{});function im(e){let t=k.useContext(qo);return t||K(!1),t}function om(e){let t=k.useContext(Yp);return t||K(!1),t}function am(e){let t=k.useContext(St);return t||K(!1),t}function Wc(e){let t=am(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function sm(){var e;let t=k.useContext(Fc),n=om(),r=Wc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function um(){let{router:e}=im(Ac.UseNavigateStable),t=Wc($c.UseNavigateStable),n=k.useRef(!1);return Uc(()=>{n.current=!0}),k.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,lr({fromRouteId:t},i)))},[e,t])}const ms={};function cm(e,t,n){ms[e]||(ms[e]=!0)}function dm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function At(e){K(!1)}function fm(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ot.Pop,navigator:i,static:o=!1,future:a}=e;cr()&&K(!1);let s=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:s,navigator:i,static:o,future:lr({v7_relativeSplatPath:!1},a)}),[s,a,i,o]);typeof r=="string"&&(r=gn(r));let{pathname:g="/",search:m="",hash:h="",state:y=null,key:x="default"}=r,w=k.useMemo(()=>{let j=Jo(g,s);return j==null?null:{location:{pathname:j,search:m,hash:h,state:y,key:x},navigationType:l}},[s,g,m,h,y,x,l]);return w==null?null:k.createElement(Ut.Provider,{value:c},k.createElement(Tl.Provider,{children:n,value:w}))}function pm(e){let{children:t,location:n}=e;return Jp(to(t),n)}new Promise(()=>{});function to(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,l)=>{if(!k.isValidElement(r))return;let i=[...t,l];if(r.type===k.Fragment){n.push.apply(n,to(r.props.children,i));return}r.type!==At&&K(!1),!r.props.index||!r.props.children||K(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=to(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function no(){return no=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},no.apply(this,arguments)}function mm(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function hm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gm(e,t){return e.button===0&&(!t||t==="_self")&&!hm(e)}const vm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ym="6";try{window.__reactRouterVersion=ym}catch{}const xm="startTransition",hs=sd[xm];function wm(e){let{basename:t,children:n,future:r,window:l}=e,i=k.useRef();i.current==null&&(i.current=Sp({window:l,v5Compat:!0}));let o=i.current,[a,s]=k.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},g=k.useCallback(m=>{c&&hs?hs(()=>s(m)):s(m)},[s,c]);return k.useLayoutEffect(()=>o.listen(g),[o,g]),k.useEffect(()=>dm(r),[r]),k.createElement(fm,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Sm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",km=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,O=k.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:a,target:s,to:c,preventScrollReset:g,viewTransition:m}=t,h=mm(t,vm),{basename:y}=k.useContext(Ut),x,w=!1;if(typeof c=="string"&&km.test(c)&&(x=c,Sm))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),E=Jo(v.pathname,y);v.origin===p.origin&&E!=null?c=E+v.search+v.hash:w=!0}catch{}let j=Gp(c,{relative:l}),f=Em(c,{replace:o,state:a,target:s,preventScrollReset:g,relative:l,viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return k.createElement("a",no({},h,{href:x||j,onClick:w||i?r:d,ref:n,target:s}))});var gs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gs||(gs={}));var vs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vs||(vs={}));function Em(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:a}=t===void 0?{}:t,s=Kp(),c=dr(),g=Bc(e,{relative:o});return k.useCallback(m=>{if(gm(m,n)){m.preventDefault();let h=r!==void 0?r:pl(c)===pl(g);s(e,{replace:h,state:l,preventScrollReset:i,relative:o,viewTransition:a})}},[c,s,g,r,l,n,e,i,o,a])}const jm=()=>u.jsx("nav",{children:u.jsxs("div",{className:"nav-container",children:[u.jsx(O,{to:"/",className:"logo",children:u.jsx("img",{src:"/text-1760673746758.png",alt:"BYD Logo",className:"logo-image"})}),u.jsxs("ul",{className:"nav-menu",children:[u.jsxs("li",{className:"dropdown",children:[u.jsx(O,{to:"/models",children:"Models"}),u.jsxs("div",{className:"dropdown-content",children:[u.jsx(O,{to:"/models",children:"Dolfin Mini"}),u.jsx(O,{to:"/models",children:"Atto 2"}),u.jsx(O,{to:"/models",children:"Atto 3"}),u.jsx(O,{to:"/models",children:"Song Pro"}),u.jsx(O,{to:"/models",children:"Seal U"}),u.jsx(O,{to:"/models",children:"Leopard 7"}),u.jsx(O,{to:"/models",children:"Tang L"}),u.jsx(O,{to:"/models",children:"Radar"}),u.jsx(O,{to:"/models",children:"Shark"})]})]}),u.jsxs("li",{className:"dropdown",children:[u.jsx(O,{to:"/purchasing",children:"Purchasing"}),u.jsxs("div",{className:"dropdown-content",children:[u.jsx(O,{to:"/test-drive",children:"Test Drive"}),u.jsx(O,{to:"/locations",children:"Locations"}),u.jsx(O,{to:"/cash-purchases",children:"Cash Purchases"}),u.jsx(O,{to:"/finance-bank",children:"Finance (Bank)"}),u.jsx(O,{to:"/lease",children:"Lease"}),u.jsx(O,{to:"/finance-dealer",children:"Finance (Dealer)"}),u.jsx(O,{to:"/subscriptions",children:"Subscriptions"}),u.jsx(O,{to:"/rentals",children:"Rentals"}),u.jsx(O,{to:"/fleet-solutions",children:"Fleet & Business Solutions"})]})]}),u.jsxs("li",{className:"dropdown",children:[u.jsx(O,{to:"/ownership",children:"Ownership"}),u.jsxs("div",{className:"dropdown-content",children:[u.jsx("a",{href:"/ownership#service-maintenance",children:"Service & Maintenance"}),u.jsx("a",{href:"/ownership#roadside-assistance",children:"EM Roadside Assistance"}),u.jsx("a",{href:"/ownership#warranty",children:"Warranty"}),u.jsx("a",{href:"/ownership#membership",children:"EM Membership & Charge Cards"}),u.jsx("a",{href:"/ownership#charging-locations",children:"Charging Locations"})]})]}),u.jsx("li",{children:u.jsx(O,{to:"/technology",children:"Technology"})}),u.jsx("li",{children:u.jsx(O,{to:"/about",children:"About"})}),u.jsx("li",{children:u.jsx(O,{to:"/contact",children:"Contact"})})]})]})}),Cm=()=>u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
      `}),u.jsxs("footer",{children:[u.jsx("div",{className:"footer-top",children:u.jsxs("div",{className:"footer-top-content",children:[u.jsxs("div",{className:"footer-links",children:[u.jsx("a",{href:"#",children:"Privacy & Legal"}),u.jsx("a",{href:"#",children:"Cookie Policy"}),u.jsx(O,{to:"/contact",children:"Contact"})]}),u.jsxs("div",{className:"footer-social-section",children:[u.jsx("span",{className:"footer-social-label",children:"FOLLOW US"}),u.jsxs("div",{className:"footer-social",children:[u.jsx("a",{href:"#",className:"social-link","aria-label":"Facebook",children:"f"}),u.jsx("a",{href:"#",className:"social-link","aria-label":"X",children:"𝕏"}),u.jsx("a",{href:"#",className:"social-link","aria-label":"Instagram",children:"📷"}),u.jsx("a",{href:"#",className:"social-link","aria-label":"TikTok",children:"♪"}),u.jsx("a",{href:"#",className:"social-link","aria-label":"YouTube",children:"▶"})]})]})]})}),u.jsx("div",{className:"footer-bottom",children:u.jsx("div",{className:"footer-bottom-content",children:u.jsx("p",{children:"© BYD Company Ltd. All rights reserved."})})})]})]}),Me=({src:e,children:t,className:n="",priority:r=!1,style:l={}})=>{const[i,o]=k.useState(!1),[a,s]=k.useState(r),[c,g]=k.useState(r),m=k.useRef(null);return k.useEffect(()=>{if(r)return;const h=new IntersectionObserver(y=>{y.forEach(x=>{x.isIntersecting&&(g(!0),s(!0),h.disconnect())})},{rootMargin:"100px"});return m.current&&h.observe(m.current),()=>h.disconnect()},[r]),k.useEffect(()=>{if(!c)return;const h=new Image;h.src=e,h.onload=()=>o(!0)},[c,e]),u.jsxs("div",{ref:m,className:n,style:{...l,position:"relative",backgroundImage:i?`url(${e})`:"none",backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 0.5s ease"},children:[!i&&u.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",filter:"blur(20px)",zIndex:0}}),u.jsx("div",{style:{position:"relative",zIndex:1},children:t})]})},Vc=e=>{const t=document.createElement("link");t.rel="preload",t.as="image",t.href=e,document.head.appendChild(t)},Nm=()=>(k.useEffect(()=>{Vc("/HeroBackground.png")},[]),u.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[u.jsx("style",{children:`
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
      `}),u.jsx(Me,{src:"/HeroBackground.png",className:"luxury-hero",priority:!0,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"},children:u.jsxs("div",{className:"hero-content",children:[u.jsx("div",{className:"hero-logo",children:"Evergreen Motors"}),u.jsx("h1",{children:"Drive the Future"}),u.jsx("p",{className:"hero-tagline",children:"Where sustainable innovation meets uncompromising luxury. Experience the next generation of electric mobility at Evergreen Motors."}),u.jsxs("div",{className:"hero-cta-group",children:[u.jsx(O,{to:"/models",className:"cta-button cta-primary",children:"Explore Collection"}),u.jsx(O,{to:"/test-drive",className:"cta-button cta-secondary",children:"Schedule Test Drive"})]})]})}),u.jsx(Me,{src:"/bottom-bannerPC.jpg",className:"stats-section",priority:!1,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"}})]})),Pm=()=>{k.useEffect(()=>{const t={threshold:.1,rootMargin:"0px 0px -100px 0px"},n=new IntersectionObserver(r=>{r.forEach(l=>{l.isIntersecting&&l.target.classList.add("fade-in-visible")})},t);return document.querySelectorAll(".fade-in-section").forEach(r=>n.observe(r)),()=>n.disconnect()},[]);const e=[{id:"dolphin-mini",name:"Dolphin Mini",description:"Compact elegance meets urban efficiency in this perfectly sized city electric vehicle",type:"City Electric",image:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000",price:"Starting at $28,990",range:"250 miles",acceleration:"7.5s 0-60mph"},{id:"atto-3",name:"Atto 3",description:"The benchmark electric SUV featuring e-Platform 3.0 technology and exceptional versatility",type:"Electric SUV",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",price:"Starting at $38,990",range:"260 miles",acceleration:"7.3s 0-60mph"},{id:"seal-u",name:"Seal U",description:"Premium electric sedan where sophisticated design meets exhilarating performance",type:"Luxury Sedan",image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",price:"Starting at $48,990",range:"354 miles",acceleration:"3.8s 0-60mph"},{id:"tang-l",name:"Tang L",description:"Spacious luxury with three rows of premium comfort and cutting-edge technology",type:"7-Seater SUV",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",price:"Starting at $58,990",range:"323 miles",acceleration:"4.4s 0-60mph"},{id:"han",name:"Han",description:"Flagship luxury sedan combining breathtaking design with uncompromising performance",type:"Executive Sedan",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",price:"Starting at $54,990",range:"379 miles",acceleration:"3.9s 0-60mph"},{id:"seal",name:"Seal",description:"Athletic performance sedan with ocean-inspired design and track-ready dynamics",type:"Performance Sedan",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",price:"Starting at $44,990",range:"310 miles",acceleration:"3.6s 0-60mph"}];return u.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[u.jsx("style",{children:`
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
      `}),u.jsx("div",{className:"models-hero",children:u.jsxs("div",{className:"models-hero-content",children:[u.jsx("h1",{children:"OUR COLLECTION"}),u.jsx("p",{className:"subtitle",children:"Electric Excellence"}),u.jsx("p",{children:"Discover the pinnacle of electric vehicle innovation. Each BYD model in our collection represents the perfect fusion of cutting-edge technology, sustainable design, and luxurious comfort."})]})}),u.jsxs("section",{className:"models-section fade-in-section",children:[u.jsxs("div",{className:"models-intro",children:[u.jsx("h2",{children:"The Future of Mobility"}),u.jsx("p",{children:"At Evergreen Motors, we offer an exceptional range of BYD electric vehicles — each engineered to perfection, designed to inspire, and built to transform the way you drive. Experience the difference that true innovation makes."})]}),u.jsx("div",{className:"luxury-models-grid",children:e.map(t=>u.jsxs(O,{to:`/models/${t.id}`,className:"luxury-model-card",children:[u.jsxs("div",{className:"model-image-container",children:[u.jsx("img",{src:t.image,alt:t.name}),u.jsx("div",{className:"model-type-badge",children:t.type})]}),u.jsxs("div",{className:"luxury-model-info",children:[u.jsx("h3",{className:"luxury-model-name",children:t.name}),u.jsx("p",{className:"luxury-model-description",children:t.description}),u.jsxs("div",{className:"model-specs",children:[u.jsxs("div",{className:"spec-item",children:[u.jsx("div",{className:"spec-label",children:"Range"}),u.jsx("div",{className:"spec-value",children:t.range})]}),u.jsxs("div",{className:"spec-item",children:[u.jsx("div",{className:"spec-label",children:"0-60 MPH"}),u.jsx("div",{className:"spec-value",children:t.acceleration})]})]}),u.jsx("div",{className:"model-price",children:t.price}),u.jsx("span",{className:"luxury-learn-more",children:"Explore Model"})]})]},t.id))})]})]})},zm=()=>{const{modelId:e}=Zp();k.useEffect(()=>{window.scrollTo(0,0)},[e]);const n={"dolphin-mini":{id:"dolphin-mini",name:"Dolphin Mini",tagline:"Urban Sophistication Reimagined",description:"The Dolphin Mini represents the perfect harmony of compact design and electric efficiency. Engineered for city driving yet capable of longer journeys, this sophisticated city car delivers premium comfort, advanced technology, and exceptional range in a beautifully compact package.",type:"City Electric",image:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000",price:"Starting at $28,990",specs:{range:"250 miles",acceleration:"7.5s 0-60mph",topSpeed:"99 mph",motorPower:"150 kW",batteryCapacity:"44.9 kWh",chargingTime:"30 min (10-80%)",seating:"5 passengers",driveType:"Front-Wheel Drive"},features:["e-Platform 3.0 Architecture","Blade Battery Technology","Intelligent Cockpit System","Advanced Driver Assistance","Panoramic Sunroof","Premium Interior Materials","Wireless Phone Charging","LED Lighting System"],colors:[{name:"Pearl White",hex:"#f8f9fa"},{name:"Midnight Black",hex:"#1a1a1a"},{name:"Ocean Blue",hex:"#4a9eff"},{name:"Silver Mist",hex:"#c0c0c0"}],highlights:[{title:"Compact Excellence",description:"Perfect dimensions for urban navigation without sacrificing interior space or comfort",icon:"🏙️"},{title:"Efficient Power",description:"Optimized electric motor delivers responsive performance with exceptional efficiency",icon:"⚡"},{title:"Smart Technology",description:"Intuitive infotainment and connectivity keep you seamlessly connected",icon:"📱"}]},"atto-3":{id:"atto-3",name:"Atto 3",tagline:"The Benchmark Electric SUV",description:"The Atto 3 sets new standards for electric SUVs with its perfect blend of practicality, performance, and cutting-edge technology. Built on BYD's revolutionary e-Platform 3.0, this versatile SUV offers exceptional range, sophisticated design, and an interior that redefines comfort and innovation.",type:"Electric SUV",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",price:"Starting at $38,990",specs:{range:"260 miles",acceleration:"7.3s 0-60mph",topSpeed:"100 mph",motorPower:"150 kW",batteryCapacity:"60.5 kWh",chargingTime:"29 min (30-80%)",seating:"5 passengers",driveType:"Front-Wheel Drive"},features:["e-Platform 3.0 Technology","Blade Battery System","Panoramic Sky Window","Rotating Touchscreen Display","Voice-Activated Controls","Premium Sound System","Advanced Safety Suite","Wireless CarPlay & Android Auto"],colors:[{name:"Cosmos Black",hex:"#0a0a0a"},{name:"Surf Blue",hex:"#4a9eff"},{name:"Boulder Grey",hex:"#6c757d"},{name:"Parkour Red",hex:"#dc3545"}],highlights:[{title:"Spacious Versatility",description:"Generous cargo space and flexible seating configurations for every adventure",icon:"🎒"},{title:"Advanced Safety",description:"Comprehensive suite of driver assistance systems for confident driving",icon:"🛡️"},{title:"Exceptional Range",description:"Travel further with confidence thanks to efficient battery technology",icon:"🔋"}]},"seal-u":{id:"seal-u",name:"Seal U",tagline:"Premium Electric Sophistication",description:"The Seal U embodies the pinnacle of electric sedan luxury. With its stunning ocean-inspired design language, exhilarating performance, and advanced technology suite, this premium sedan delivers an uncompromising driving experience that seamlessly blends elegance with athletic capability.",type:"Luxury Sedan",image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",price:"Starting at $48,990",specs:{range:"354 miles",acceleration:"3.8s 0-60mph",topSpeed:"112 mph",motorPower:"390 kW",batteryCapacity:"82.5 kWh",chargingTime:"26 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["CTB Cell-to-Body Integration","Dual Motor AWD System","Adaptive Air Suspension","Premium Nappa Leather Interior","Head-Up Display","Dynaudio Sound System","Matrix LED Headlights","Advanced Climate Control"],colors:[{name:"Aurora Silver",hex:"#d4d4d4"},{name:"Deep Ocean Blue",hex:"#1e3a8a"},{name:"Quantum Grey",hex:"#4b5563"},{name:"Crystal White",hex:"#ffffff"}],highlights:[{title:"Athletic Performance",description:"Dual motors deliver exhilarating acceleration and dynamic handling",icon:"🏁"},{title:"Luxurious Comfort",description:"Premium materials and meticulous craftsmanship throughout the cabin",icon:"✨"},{title:"Extended Range",description:"Travel over 350 miles on a single charge for ultimate peace of mind",icon:"🌍"}]},"tang-l":{id:"tang-l",name:"Tang L",tagline:"Luxury Redefined for Seven",description:"The Tang L represents the ultimate expression of family luxury. This spacious three-row SUV combines cutting-edge electric technology with opulent comfort, offering seven passengers premium accommodations and an array of advanced features that make every journey extraordinary.",type:"7-Seater SUV",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",price:"Starting at $58,990",specs:{range:"323 miles",acceleration:"4.4s 0-60mph",topSpeed:"112 mph",motorPower:"380 kW",batteryCapacity:"108.8 kWh",chargingTime:"30 min (30-80%)",seating:"7 passengers",driveType:"All-Wheel Drive"},features:["Three-Row Seating","Dual Motor Performance","Premium Quilted Leather","Panoramic Glass Roof","Individual Seat Climate Control","Premium Audio System","Gesture Control","Advanced Autopilot"],colors:[{name:"Imperial Red",hex:"#8b0000"},{name:"Graphite Black",hex:"#2d3436"},{name:"Champagne Gold",hex:"#d4af37"},{name:"Celestial White",hex:"#fafafa"}],highlights:[{title:"Seven-Seat Luxury",description:"Premium comfort for every passenger across three spacious rows",icon:"👨‍👩‍👧‍👦"},{title:"Powerful Performance",description:"Dual motors provide commanding power and confident handling",icon:"💪"},{title:"Advanced Technology",description:"Cutting-edge features and connectivity throughout",icon:"🔬"}]},han:{id:"han",name:"Han",tagline:"Executive Excellence",description:"The Han flagship sedan represents the apex of BYD's engineering prowess and design philosophy. This executive-class vehicle combines breathtaking aesthetics with phenomenal performance, offering a driving experience that rivals the world's most prestigious luxury sedans while delivering zero emissions.",type:"Executive Sedan",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",price:"Starting at $54,990",specs:{range:"379 miles",acceleration:"3.9s 0-60mph",topSpeed:"115 mph",motorPower:"380 kW",batteryCapacity:"85.4 kWh",chargingTime:"25 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["Dragon Face Design Language","Executive Rear Seating","Massage Function","Ambient Lighting (31 colors)","Premium Dynaudio System","Advanced DiPilot","Ventilated & Heated Seats","Electrochromic Panoramic Roof"],colors:[{name:"Dragon Scale Grey",hex:"#708090"},{name:"Phoenix Red",hex:"#c41e3a"},{name:"Jade Green",hex:"#00a86b"},{name:"Emperor Black",hex:"#000000"}],highlights:[{title:"Flagship Design",description:"Stunning Dragon Face aesthetic that commands attention",icon:"🐉"},{title:"Executive Comfort",description:"First-class accommodations with massage and premium materials",icon:"🎩"},{title:"Record Range",description:"Nearly 380 miles of range for effortless long-distance travel",icon:"🛣️"}]},seal:{id:"seal",name:"Seal",tagline:"Performance Unleashed",description:"The Seal performance sedan delivers pure driving excitement. Inspired by the ocean's most agile creatures, this athletic sedan combines razor-sharp handling, explosive acceleration, and striking design to create a driving experience that thrills enthusiasts while maintaining everyday practicality.",type:"Performance Sedan",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",price:"Starting at $44,990",specs:{range:"310 miles",acceleration:"3.6s 0-60mph",topSpeed:"112 mph",motorPower:"390 kW",batteryCapacity:"82.5 kWh",chargingTime:"26 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["Sport-Tuned Suspension","Performance Dual Motors","Sport Seats with Bolstering","Track Mode","Performance Braking System","Sport Steering Wheel","Digital Instrument Cluster","Launch Control"],colors:[{name:"Racing Blue",hex:"#0066cc"},{name:"Shadow Black",hex:"#121212"},{name:"Silver Storm",hex:"#b8b8b8"},{name:"Carbon Grey",hex:"#3d3d3d"}],highlights:[{title:"Track-Ready Performance",description:"Sub-4-second acceleration with sport-tuned dynamics",icon:"🏎️"},{title:"Agile Handling",description:"Low center of gravity and AWD provide exceptional cornering",icon:"🌀"},{title:"Driver-Focused",description:"Every element optimized for an engaging driving experience",icon:"🎯"}]}}[e||""];return n?u.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[u.jsx("style",{children:`
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
      `}),u.jsx(O,{to:"/models",className:"back-link",children:"← All Models"}),u.jsx("div",{className:"model-detail-hero",children:u.jsxs("div",{className:"hero-detail-content",children:[u.jsx("div",{className:"model-type-badge-hero",children:n.type}),u.jsx("h1",{children:n.name}),u.jsx("p",{className:"hero-tagline",children:n.tagline}),u.jsx("p",{className:"hero-price",children:n.price})]})}),u.jsx("section",{className:"detail-section dark-section",children:u.jsxs("div",{className:"section-container",children:[u.jsx("h2",{className:"section-title",children:"Overview"}),u.jsx("p",{className:"description-text",style:{color:"rgba(255,255,255,0.8)"},children:n.description}),u.jsxs("div",{className:"specs-grid",children:[u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Range"}),u.jsx("div",{className:"spec-value",children:n.specs.range})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"0-60 MPH"}),u.jsx("div",{className:"spec-value",children:n.specs.acceleration})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Top Speed"}),u.jsx("div",{className:"spec-value",children:n.specs.topSpeed})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Motor Power"}),u.jsx("div",{className:"spec-value",children:n.specs.motorPower})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Battery"}),u.jsx("div",{className:"spec-value",children:n.specs.batteryCapacity})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Charging"}),u.jsx("div",{className:"spec-value",children:n.specs.chargingTime})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Seating"}),u.jsx("div",{className:"spec-value",children:n.specs.seating})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Drive Type"}),u.jsx("div",{className:"spec-value",children:n.specs.driveType})]})]})]})}),u.jsx("section",{className:"detail-section light-section",children:u.jsxs("div",{className:"section-container",children:[u.jsx("h2",{className:"section-title",children:"Key Highlights"}),u.jsx("div",{className:"highlights-grid",children:n.highlights.map((r,l)=>u.jsxs("div",{className:"highlight-card",children:[u.jsx("div",{className:"highlight-icon",children:r.icon}),u.jsx("h3",{className:"highlight-title",children:r.title}),u.jsx("p",{className:"highlight-description",children:r.description})]},l))})]})}),u.jsx("section",{className:"detail-section dark-section",children:u.jsxs("div",{className:"section-container",children:[u.jsx("h2",{className:"section-title",children:"Premium Features"}),u.jsx("div",{className:"features-grid",children:n.features.map((r,l)=>u.jsx("div",{className:"feature-item",children:r},l))})]})}),u.jsx("section",{className:"detail-section light-section",children:u.jsxs("div",{className:"section-container",children:[u.jsx("h2",{className:"section-title",children:"Available Colors"}),u.jsx("div",{className:"colors-grid",children:n.colors.map((r,l)=>u.jsxs("div",{className:"color-option",children:[u.jsx("div",{className:"color-swatch",style:{backgroundColor:r.hex}}),u.jsx("div",{className:"color-name",children:r.name})]},l))})]})}),u.jsx("section",{className:"cta-section",children:u.jsxs("div",{className:"section-container",children:[u.jsxs("h2",{className:"section-title",style:{color:"#333"},children:["Experience the ",n.name]}),u.jsxs("p",{style:{fontSize:"1.3rem",color:"#666",fontFamily:"Montserrat, sans-serif",fontWeight:300},children:["Visit Evergreen Motors today and discover why the ",n.name," is redefining electric mobility"]}),u.jsxs("div",{className:"cta-buttons",children:[u.jsx(O,{to:"/test-drive",className:"cta-button cta-button-primary",children:"Schedule Test Drive"}),u.jsx(O,{to:"/contact",className:"cta-button cta-button-secondary",children:"Contact Us"})]})]})})]}):u.jsxs("div",{style:{padding:"10rem 5%",textAlign:"center",color:"white",background:"#0a0a0a",minHeight:"100vh"},children:[u.jsx("h1",{style:{fontSize:"3rem",marginBottom:"2rem"},children:"Model Not Found"}),u.jsx(O,{to:"/models",style:{color:"#4a9eff",fontSize:"1.2rem"},children:"← Back to Models"})]})},_m=()=>{const[e,t]=k.useState(!1),n=k.useRef(null);return k.useEffect(()=>{const r={threshold:.1,rootMargin:"0px 0px -100px 0px"},l=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&o.target.classList.add("fade-in-visible")})},r);return document.querySelectorAll(".fade-in-section").forEach(i=>l.observe(i)),()=>l.disconnect()},[]),k.useEffect(()=>{const r=new IntersectionObserver(l=>{l.forEach(i=>{i.isIntersecting&&n.current&&!e&&(t(!0),r.disconnect())})},{rootMargin:"50px"});return n.current&&r.observe(n.current),()=>r.disconnect()},[e]),u.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[u.jsx("style",{children:`
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
      `}),u.jsxs("div",{className:"video-hero",ref:n,children:[!e&&u.jsx("div",{className:"video-placeholder",children:u.jsx("div",{style:{color:"white",fontSize:"1.2rem",fontFamily:"Montserrat, sans-serif",letterSpacing:"2px"},children:"Loading..."})}),e&&u.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"loaded",preload:"metadata",poster:"/About.mp4?poster=true",children:u.jsx("source",{src:"/About.mp4",type:"video/mp4"})})]}),u.jsx("section",{className:"luxury-section story-section fade-in-section",children:u.jsxs("div",{className:"section-content",children:[u.jsx("h2",{className:"section-title",children:"Our Story"}),u.jsxs("div",{className:"story-item",children:[u.jsxs("div",{className:"story-content",children:[u.jsx("h3",{children:"The Beginning"}),u.jsx("p",{children:"Evergreen Motors was founded on a simple belief: that the future of transportation should be sustainable without sacrificing the driving experience. We saw an opportunity to bridge the gap between environmental responsibility and automotive excellence."})]}),u.jsx(Me,{src:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop",className:"story-image",priority:!1})]}),u.jsxs("div",{className:"story-item",children:[u.jsxs("div",{className:"story-content",children:[u.jsx("h3",{children:"Growth & Innovation"}),u.jsx("p",{children:"As we expanded, we remained committed to our core values. Each new location, each partnership, and each customer relationship has been built on trust, transparency, and a shared vision for a sustainable future."})]}),u.jsx(Me,{src:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop",className:"story-image",priority:!1})]}),u.jsxs("div",{className:"story-item",children:[u.jsxs("div",{className:"story-content",children:[u.jsx("h3",{children:"Looking Forward"}),u.jsx("p",{children:"Today, we're proud to be at the forefront of the electric vehicle revolution. But we're not done yet. We continue to innovate, expand, and refine our offerings to ensure that every customer experiences the future of driving."})]}),u.jsx(Me,{src:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",className:"story-image",priority:!1})]})]})}),u.jsx(Me,{src:"/BYD-2000_0.jpg",className:"image-section fade-in-section",priority:!1,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"},children:u.jsxs("div",{className:"image-section-content",children:[u.jsx("h2",{children:"Innovation in Motion"}),u.jsx("p",{children:"BYD's cutting-edge technology represents the pinnacle of electric vehicle engineering. From advanced battery systems to intelligent drive platforms, every innovation is designed to deliver exceptional performance while reducing environmental impact."})]})}),u.jsx(Me,{src:"/b9f297e0-79c0-11ef-9dff-6e499e6c2dc7.png",className:"image-section fade-in-section",priority:!1,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"},children:u.jsxs("div",{className:"image-section-content",children:[u.jsx("h2",{children:"Sustainable Future"}),u.jsx("p",{children:"We're committed to building a transportation ecosystem that prioritizes sustainability without compromise. Through strategic partnerships and technological advancement, we're making electric mobility accessible to everyone."})]})}),u.jsx("section",{className:"platform-section fade-in-section",children:u.jsxs("div",{className:"platform-container",children:[u.jsxs("div",{className:"platform-images",children:[u.jsx(Me,{src:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",className:"platform-image",priority:!1}),u.jsx(Me,{src:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop",className:"platform-image",priority:!1}),u.jsx(Me,{src:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop",className:"platform-image",priority:!1})]}),u.jsxs("div",{className:"platform-text",children:[u.jsx("h2",{children:"Yisifang Platform"}),u.jsx("p",{className:"platform-subtitle",children:"(also known as the e⁴ platform)"}),u.jsx("p",{children:"The innovative distributed drive structure in the new energy vehicle industry reforms the traditional automotive power system from three dimensions: perception, decision-making, and execution."}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("strong",{children:"Full integration of vehicle perception:"})," Integrating vehicle sensors and intelligent driving sensors to achieve comprehensive perception of the vehicle environment."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Four-motor independent drive structure:"})," Self-developed, with four motors enabling independent control of each wheel, applicable to pure electric and hybrid platforms."]})]})]})]})})]})},Tm=()=>{const[e,t]=k.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,r]=k.useState("idle");k.useEffect(()=>{Vc("/contact.jpg")},[]);const l=o=>{const{name:a,value:s}=o.target;t(c=>({...c,[a]:s}))},i=o=>{o.preventDefault(),console.log("Form submitted:",e),r("success"),setTimeout(()=>{t({name:"",email:"",phone:"",subject:"",message:""}),r("idle")},3e3)};return u.jsxs("div",{children:[u.jsx("style",{children:`
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
      `}),u.jsx(Me,{src:"/contact.jpg",className:"luxury-contact-hero",priority:!0,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"},children:u.jsx("div",{className:"hero-content",children:u.jsx("h1",{children:"CONTACT US"})})}),u.jsx("section",{className:"luxury-section",children:u.jsxs("div",{className:"section-content",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("div",{className:"section-label",children:"Get In Touch"}),u.jsx("h2",{className:"section-title",children:"Let's Connect"})]}),u.jsxs("div",{className:"contact-grid",children:[u.jsxs("div",{className:"contact-info-box",children:[u.jsx("h2",{children:"Information"}),u.jsxs("div",{className:"contact-item",children:[u.jsx("h3",{children:"Phone"}),u.jsx("p",{children:u.jsx("a",{href:"tel:+1234567890",children:"+1 (234) 567-890"})})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx("h3",{children:"Email"}),u.jsx("p",{children:u.jsx("a",{href:"mailto:info@byd.com",children:"info@byd.com"})}),u.jsx("p",{children:u.jsx("a",{href:"mailto:sales@byd.com",children:"sales@byd.com"})})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx("h3",{children:"Address"}),u.jsx("p",{children:"BYD Headquarters"}),u.jsx("p",{children:"3009 BYD Road"}),u.jsx("p",{children:"Shenzhen, Guangdong"}),u.jsx("p",{children:"China"})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx("h3",{children:"Business Hours"}),u.jsx("p",{children:"Monday - Friday: 9:00 AM - 6:00 PM"}),u.jsx("p",{children:"Saturday: 10:00 AM - 4:00 PM"}),u.jsx("p",{children:"Sunday: Closed"})]})]}),u.jsxs("div",{className:"contact-form-box",children:[u.jsx("h2",{children:"Send Message"}),u.jsx("p",{className:"form-subtitle",children:"We'd love to hear from you. Fill out the form below and we'll be in touch shortly."}),n==="success"&&u.jsx("div",{className:"success-message",children:"✓ Message sent successfully"}),u.jsxs("form",{onSubmit:i,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"name",children:"Full Name *"}),u.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:l,required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"email",children:"Email Address *"}),u.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:l,required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"phone",children:"Phone Number"}),u.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:l})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"subject",children:"Subject *"}),u.jsxs("select",{id:"subject",name:"subject",value:e.subject,onChange:l,required:!0,children:[u.jsx("option",{value:"",children:"Select a subject"}),u.jsx("option",{value:"general",children:"General Inquiry"}),u.jsx("option",{value:"sales",children:"Sales & Purchasing"}),u.jsx("option",{value:"service",children:"Service & Maintenance"}),u.jsx("option",{value:"test-drive",children:"Schedule a Test Drive"}),u.jsx("option",{value:"fleet",children:"Fleet Solutions"}),u.jsx("option",{value:"partnership",children:"Business Partnership"}),u.jsx("option",{value:"other",children:"Other"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"message",children:"Message *"}),u.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:l,required:!0})]}),u.jsx("button",{type:"submit",className:"submit-btn",children:"SEND MESSAGE"})]})]})]})]})})]})},Lm=()=>{const{pathname:e,hash:t}=dr();return k.useEffect(()=>{t?setTimeout(()=>{const n=document.querySelector(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},100):window.scrollTo(0,0)},[e,t]),null},Mm=()=>u.jsxs(wm,{children:[u.jsx(Lm,{}),u.jsxs("div",{className:"App",children:[u.jsx(jm,{}),u.jsxs(pm,{children:[u.jsx(At,{path:"/",element:u.jsx(Nm,{})}),u.jsx(At,{path:"/models",element:u.jsx(Pm,{})}),u.jsx(At,{path:"/models/:modelId",element:u.jsx(zm,{})}),u.jsx(At,{path:"/about",element:u.jsx(_m,{})}),u.jsx(At,{path:"/contact",element:u.jsx(Tm,{})})]}),u.jsx(Cm,{})]})]}),Rm=ai.createRoot(document.getElementById("root"));Rm.render(u.jsx(zs.StrictMode,{children:u.jsx(Mm,{})}));
