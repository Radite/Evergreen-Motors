function Hc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ys={exports:{}},mi={},xs={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),Gc=Symbol.for("react.portal"),Yc=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.memo"),nd=Symbol.for("react.lazy"),ta=Symbol.iterator;function rd(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var ws={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ks=Object.assign,Ss={};function pn(e,t,n){this.props=e,this.context=t,this.refs=Ss,this.updater=n||ws}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Es(){}Es.prototype=pn.prototype;function il(e,t,n){this.props=e,this.context=t,this.refs=Ss,this.updater=n||ws}var ol=il.prototype=new Es;ol.constructor=il;ks(ol,pn.prototype);ol.isPureReactComponent=!0;var na=Array.isArray,Cs=Object.prototype.hasOwnProperty,ll={current:null},js={key:!0,ref:!0,__self:!0,__source:!0};function Ns(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Cs.call(t,r)&&!js.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:or,type:e,key:o,ref:l,props:i,_owner:ll.current}}function id(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function al(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function od(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ra=/\/+/g;function Oi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?od(""+e.key):t.toString(36)}function Lr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case or:case Gc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Oi(l,0):r,na(i)?(n="",e!=null&&(n=e.replace(ra,"$&/")+"/"),Lr(i,t,n,"",function(c){return c})):i!=null&&(al(i)&&(i=id(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ra,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",na(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Oi(o,a);l+=Lr(o,t,n,s,i)}else if(s=rd(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Oi(o,a++),l+=Lr(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function mr(e,t,n){if(e==null)return e;var r=[],i=0;return Lr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ld(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Mr={transition:null},ad={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:ll};function Ps(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!al(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=pn;M.Fragment=Yc;M.Profiler=Xc;M.PureComponent=il;M.StrictMode=Kc;M.Suspense=ed;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ad;M.act=Ps;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ks({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ll.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Cs.call(t,s)&&!js.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:or,type:e.type,key:i,ref:o,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:Jc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zc,_context:e},e.Consumer=e};M.createElement=Ns;M.createFactory=function(e){var t=Ns.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:qc,render:e}};M.isValidElement=al;M.lazy=function(e){return{$$typeof:nd,_payload:{_status:-1,_result:e},_init:ld}};M.memo=function(e,t){return{$$typeof:td,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};M.unstable_act=Ps;M.useCallback=function(e,t){return ue.current.useCallback(e,t)};M.useContext=function(e){return ue.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};M.useEffect=function(e,t){return ue.current.useEffect(e,t)};M.useId=function(){return ue.current.useId()};M.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ue.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};M.useRef=function(e){return ue.current.useRef(e)};M.useState=function(e){return ue.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ue.current.useTransition()};M.version="18.3.1";xs.exports=M;var S=xs.exports;const zs=Qc(S),sd=Hc({__proto__:null,default:zs},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud=S,cd=Symbol.for("react.element"),dd=Symbol.for("react.fragment"),fd=Object.prototype.hasOwnProperty,pd=ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,md={key:!0,ref:!0,__self:!0,__source:!0};function _s(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)fd.call(t,r)&&!md.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:cd,type:e,key:o,ref:l,props:i,_owner:pd.current}}mi.Fragment=dd;mi.jsx=_s;mi.jsxs=_s;ys.exports=mi;var u=ys.exports,ao={},Ts={exports:{}},we={},Ls={exports:{}},Ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var L=N.length;N.push(T);e:for(;0<L;){var H=L-1>>>1,Z=N[H];if(0<i(Z,T))N[H]=T,N[L]=Z,L=H;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var T=N[0],L=N.pop();if(L!==T){N[0]=L;e:for(var H=0,Z=N.length,fr=Z>>>1;H<fr;){var St=2*(H+1)-1,Ri=N[St],Et=St+1,pr=N[Et];if(0>i(Ri,L))Et<Z&&0>i(pr,Ri)?(N[H]=pr,N[Et]=L,H=Et):(N[H]=Ri,N[St]=L,H=St);else if(Et<Z&&0>i(pr,L))N[H]=pr,N[Et]=L,H=Et;else break e}}return T}function i(N,T){var L=N.sortIndex-T.sortIndex;return L!==0?L:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],g=1,m=null,h=3,y=!1,x=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=N)r(c),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(c)}}function v(N){if(w=!1,p(N),!x)if(n(s)!==null)x=!0,Li(E);else{var T=n(c);T!==null&&Mi(v,T.startTime-N)}}function E(N,T){x=!1,w&&(w=!1,f(_),_=-1),y=!0;var L=h;try{for(p(T),m=n(s);m!==null&&(!(m.expirationTime>T)||N&&!_e());){var H=m.callback;if(typeof H=="function"){m.callback=null,h=m.priorityLevel;var Z=H(m.expirationTime<=T);T=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(s)&&r(s),p(T)}else r(s);m=n(s)}if(m!==null)var fr=!0;else{var St=n(c);St!==null&&Mi(v,St.startTime-T),fr=!1}return fr}finally{m=null,h=L,y=!1}}var P=!1,z=null,_=-1,V=5,R=-1;function _e(){return!(e.unstable_now()-R<V)}function vn(){if(z!==null){var N=e.unstable_now();R=N;var T=!0;try{T=z(!0,N)}finally{T?yn():(P=!1,z=null)}}else P=!1}var yn;if(typeof d=="function")yn=function(){d(vn)};else if(typeof MessageChannel<"u"){var ea=new MessageChannel,Vc=ea.port2;ea.port1.onmessage=vn,yn=function(){Vc.postMessage(null)}}else yn=function(){C(vn,0)};function Li(N){z=N,P||(P=!0,yn())}function Mi(N,T){_=C(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Li(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var L=h;h=T;try{return N()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return T()}finally{h=L}},e.unstable_scheduleCallback=function(N,T,L){var H=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?H+L:H):L=H,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,N={id:g++,callback:T,priorityLevel:N,startTime:L,expirationTime:Z,sortIndex:-1},L>H?(N.sortIndex=L,t(c,N),n(s)===null&&N===n(c)&&(w?(f(_),_=-1):w=!0,Mi(v,L-H))):(N.sortIndex=Z,t(s,N),x||y||(x=!0,Li(E))),N},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(N){var T=h;return function(){var L=h;h=T;try{return N.apply(this,arguments)}finally{h=L}}}})(Ms);Ls.exports=Ms;var hd=Ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=S,xe=hd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rs=new Set,Bn={};function Dt(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Rs.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),so=Object.prototype.hasOwnProperty,vd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia={},oa={};function yd(e){return so.call(oa,e)?!0:so.call(ia,e)?!1:vd.test(e)?oa[e]=!0:(ia[e]=!0,!1)}function xd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wd(e,t,n,r){if(t===null||typeof t>"u"||xd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var sl=/[\-:]([a-z])/g;function ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sl,ul);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sl,ul);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sl,ul);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function cl(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wd(t,n,i,r)&&(n=null),r||i===null?yd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),$t=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),uo=Symbol.for("react.profiler"),Os=Symbol.for("react.provider"),Is=Symbol.for("react.context"),fl=Symbol.for("react.forward_ref"),co=Symbol.for("react.suspense"),fo=Symbol.for("react.suspense_list"),pl=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Ds=Symbol.for("react.offscreen"),la=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ii;function Pn(e){if(Ii===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ii=t&&t[1]||""}return`
`+Ii+e}var Di=!1;function Fi(e,t){if(!e||Di)return"";Di=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Di=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function kd(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=Fi(e.type,!1),e;case 11:return e=Fi(e.type.render,!1),e;case 1:return e=Fi(e.type,!0),e;default:return""}}function po(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case $t:return"Portal";case uo:return"Profiler";case dl:return"StrictMode";case co:return"Suspense";case fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Is:return(e.displayName||"Context")+".Consumer";case Os:return(e._context.displayName||"Context")+".Provider";case fl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pl:return t=e.displayName||null,t!==null?t:po(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return po(e(t))}catch{}}return null}function Sd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return po(t);case 8:return t===dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ed(e){var t=Fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Ed(e))}function Us(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mo(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function As(e,t){t=t.checked,t!=null&&cl(e,"checked",t,!1)}function ho(e,t){As(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?go(e,t.type,n):t.hasOwnProperty("defaultValue")&&go(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function go(e,t,n){(t!=="number"||br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(zn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function Bs(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $s(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$s(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Ws=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cd=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Cd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function bs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Vs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var jd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(e,t){if(t){if(jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function wo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ko=null;function ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var So=null,en=null,tn=null;function da(e){if(e=sr(e)){if(typeof So!="function")throw Error(k(280));var t=e.stateNode;t&&(t=xi(t),So(e.stateNode,e.type,t))}}function Hs(e){en?tn?tn.push(e):tn=[e]:en=e}function Qs(){if(en){var e=en,t=tn;if(tn=en=null,da(e),t)for(e=0;e<t.length;e++)da(t[e])}}function Gs(e,t){return e(t)}function Ys(){}var Ui=!1;function Ks(e,t,n){if(Ui)return e(t,n);Ui=!0;try{return Gs(e,t,n)}finally{Ui=!1,(en!==null||tn!==null)&&(Ys(),Qs())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Eo=!1;if(Ye)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Eo=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Eo=!1}function Nd(e,t,n,r,i,o,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Mn=!1,Vr=null,Hr=!1,Co=null,Pd={onError:function(e){Mn=!0,Vr=e}};function zd(e,t,n,r,i,o,l,a,s){Mn=!1,Vr=null,Nd.apply(Pd,arguments)}function _d(e,t,n,r,i,o,l,a,s){if(zd.apply(this,arguments),Mn){if(Mn){var c=Vr;Mn=!1,Vr=null}else throw Error(k(198));Hr||(Hr=!0,Co=c)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fa(e){if(Ft(e)!==e)throw Error(k(188))}function Td(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fa(i),e;if(o===r)return fa(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Zs(e){return e=Td(e),e!==null?Js(e):null}function Js(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Js(e);if(t!==null)return t;e=e.sibling}return null}var qs=xe.unstable_scheduleCallback,pa=xe.unstable_cancelCallback,Ld=xe.unstable_shouldYield,Md=xe.unstable_requestPaint,Q=xe.unstable_now,Rd=xe.unstable_getCurrentPriorityLevel,hl=xe.unstable_ImmediatePriority,eu=xe.unstable_UserBlockingPriority,Qr=xe.unstable_NormalPriority,Od=xe.unstable_LowPriority,tu=xe.unstable_IdlePriority,hi=null,$e=null;function Id(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(hi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:Ud,Dd=Math.log,Fd=Math.LN2;function Ud(e){return e>>>=0,e===0?32:31-(Dd(e)/Fd|0)|0}var yr=64,xr=4194304;function _n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=_n(a):(o&=l,o!==0&&(r=_n(o)))}else l=n&~i,l!==0?r=_n(l):o!==0&&(r=_n(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),i=1<<n,r|=e[n],t&=~i;return r}function Ad(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ie(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=Ad(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nu(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Ai(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function $d(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ie(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function gl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var I=0;function ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var iu,vl,ou,lu,au,No=!1,wr=[],at=null,st=null,ut=null,bn=new Map,Vn=new Map,nt=[],Wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ma(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function kn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=sr(t),t!==null&&vl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function bd(e,t,n,r,i){switch(t){case"focusin":return at=kn(at,e,t,n,r,i),!0;case"dragenter":return st=kn(st,e,t,n,r,i),!0;case"mouseover":return ut=kn(ut,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return bn.set(o,kn(bn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vn.set(o,kn(Vn.get(o)||null,e,t,n,r,i)),!0}return!1}function su(e){var t=Nt(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=Xs(n),t!==null){e.blockedOn=t,au(e.priority,function(){ou(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Po(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ko=r,n.target.dispatchEvent(r),ko=null}else return t=sr(n),t!==null&&vl(t),e.blockedOn=n,!1;t.shift()}return!0}function ha(e,t,n){Rr(e)&&n.delete(t)}function Vd(){No=!1,at!==null&&Rr(at)&&(at=null),st!==null&&Rr(st)&&(st=null),ut!==null&&Rr(ut)&&(ut=null),bn.forEach(ha),Vn.forEach(ha)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,No||(No=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,Vd)))}function Hn(e){function t(i){return Sn(i,e)}if(0<wr.length){Sn(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&Sn(at,e),st!==null&&Sn(st,e),ut!==null&&Sn(ut,e),bn.forEach(t),Vn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)su(n),n.blockedOn===null&&nt.shift()}var nn=Je.ReactCurrentBatchConfig,Yr=!0;function Hd(e,t,n,r){var i=I,o=nn.transition;nn.transition=null;try{I=1,yl(e,t,n,r)}finally{I=i,nn.transition=o}}function Qd(e,t,n,r){var i=I,o=nn.transition;nn.transition=null;try{I=4,yl(e,t,n,r)}finally{I=i,nn.transition=o}}function yl(e,t,n,r){if(Yr){var i=Po(e,t,n,r);if(i===null)Ki(e,t,r,Kr,n),ma(e,r);else if(bd(i,e,t,n,r))r.stopPropagation();else if(ma(e,r),t&4&&-1<Wd.indexOf(e)){for(;i!==null;){var o=sr(i);if(o!==null&&iu(o),o=Po(e,t,n,r),o===null&&Ki(e,t,r,Kr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ki(e,t,r,null,n)}}var Kr=null;function Po(e,t,n,r){if(Kr=null,e=ml(r),e=Nt(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rd()){case hl:return 1;case eu:return 4;case Qr:case Od:return 16;case tu:return 536870912;default:return 16}default:return 16}}var it=null,xl=null,Or=null;function cu(){if(Or)return Or;var e,t=xl,n=t.length,r,i="value"in it?it.value:it.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Or=i.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function ga(){return!1}function ke(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?kr:ga,this.isPropagationStopped=ga,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=ke(mn),ar=W({},mn,{view:0,detail:0}),Gd=ke(ar),Bi,$i,En,gi=W({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Bi=e.screenX-En.screenX,$i=e.screenY-En.screenY):$i=Bi=0,En=e),Bi)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),va=ke(gi),Yd=W({},gi,{dataTransfer:0}),Kd=ke(Yd),Xd=W({},ar,{relatedTarget:0}),Wi=ke(Xd),Zd=W({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jd=ke(Zd),qd=W({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ef=ke(qd),tf=W({},mn,{data:0}),ya=ke(tf),nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=of[e])?!!t[e]:!1}function kl(){return lf}var af=W({},ar,{key:function(e){if(e.key){var t=nf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sf=ke(af),uf=W({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xa=ke(uf),cf=W({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),df=ke(cf),ff=W({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pf=ke(ff),mf=W({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hf=ke(mf),gf=[9,13,27,32],Sl=Ye&&"CompositionEvent"in window,Rn=null;Ye&&"documentMode"in document&&(Rn=document.documentMode);var vf=Ye&&"TextEvent"in window&&!Rn,du=Ye&&(!Sl||Rn&&8<Rn&&11>=Rn),wa=" ",ka=!1;function fu(e,t){switch(e){case"keyup":return gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bt=!1;function yf(e,t){switch(e){case"compositionend":return pu(t);case"keypress":return t.which!==32?null:(ka=!0,wa);case"textInput":return e=t.data,e===wa&&ka?null:e;default:return null}}function xf(e,t){if(bt)return e==="compositionend"||!Sl&&fu(e,t)?(e=cu(),Or=xl=it=null,bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return du&&t.locale!=="ko"?null:t.data;default:return null}}var wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wf[e.type]:t==="textarea"}function mu(e,t,n,r){Hs(r),t=Xr(t,"onChange"),0<t.length&&(n=new wl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Qn=null;function kf(e){ju(e,0)}function vi(e){var t=Qt(e);if(Us(t))return e}function Sf(e,t){if(e==="change")return t}var hu=!1;if(Ye){var bi;if(Ye){var Vi="oninput"in document;if(!Vi){var Ea=document.createElement("div");Ea.setAttribute("oninput","return;"),Vi=typeof Ea.oninput=="function"}bi=Vi}else bi=!1;hu=bi&&(!document.documentMode||9<document.documentMode)}function Ca(){On&&(On.detachEvent("onpropertychange",gu),Qn=On=null)}function gu(e){if(e.propertyName==="value"&&vi(Qn)){var t=[];mu(t,Qn,e,ml(e)),Ks(kf,t)}}function Ef(e,t,n){e==="focusin"?(Ca(),On=t,Qn=n,On.attachEvent("onpropertychange",gu)):e==="focusout"&&Ca()}function Cf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(Qn)}function jf(e,t){if(e==="click")return vi(t)}function Nf(e,t){if(e==="input"||e==="change")return vi(t)}function Pf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:Pf;function Gn(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!so.call(t,i)||!Fe(e[i],t[i]))return!1}return!0}function ja(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Na(e,t){var n=ja(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ja(n)}}function vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yu(){for(var e=window,t=br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=br(e.document)}return t}function El(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zf(e){var t=yu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vu(n.ownerDocument.documentElement,n)){if(r!==null&&El(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Na(n,o);var l=Na(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _f=Ye&&"documentMode"in document&&11>=document.documentMode,Vt=null,zo=null,In=null,_o=!1;function Pa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_o||Vt==null||Vt!==br(r)||(r=Vt,"selectionStart"in r&&El(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),In&&Gn(In,r)||(In=r,r=Xr(zo,"onSelect"),0<r.length&&(t=new wl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ht={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Hi={},xu={};Ye&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function yi(e){if(Hi[e])return Hi[e];if(!Ht[e])return e;var t=Ht[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xu)return Hi[e]=t[n];return e}var wu=yi("animationend"),ku=yi("animationiteration"),Su=yi("animationstart"),Eu=yi("transitionend"),Cu=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){Cu.set(e,t),Dt(t,[e])}for(var Qi=0;Qi<za.length;Qi++){var Gi=za[Qi],Tf=Gi.toLowerCase(),Lf=Gi[0].toUpperCase()+Gi.slice(1);yt(Tf,"on"+Lf)}yt(wu,"onAnimationEnd");yt(ku,"onAnimationIteration");yt(Su,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(Eu,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function _a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_d(r,t,void 0,e),e.currentTarget=null}function ju(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;_a(i,a,c),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;_a(i,a,c),o=s}}}if(Hr)throw e=Co,Hr=!1,Co=null,e}function F(e,t){var n=t[Oo];n===void 0&&(n=t[Oo]=new Set);var r=e+"__bubble";n.has(r)||(Nu(t,e,2,!1),n.add(r))}function Yi(e,t,n){var r=0;t&&(r|=4),Nu(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[Er]){e[Er]=!0,Rs.forEach(function(n){n!=="selectionchange"&&(Mf.has(n)||Yi(n,!1,e),Yi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,Yi("selectionchange",!1,t))}}function Nu(e,t,n,r){switch(uu(t)){case 1:var i=Hd;break;case 4:i=Qd;break;default:i=yl}n=i.bind(null,t,n,e),i=void 0,!Eo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ki(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Nt(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Ks(function(){var c=o,g=ml(n),m=[];e:{var h=Cu.get(e);if(h!==void 0){var y=wl,x=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":y=sf;break;case"focusin":x="focus",y=Wi;break;case"focusout":x="blur",y=Wi;break;case"beforeblur":case"afterblur":y=Wi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=df;break;case wu:case ku:case Su:y=Jd;break;case Eu:y=pf;break;case"scroll":y=Gd;break;case"wheel":y=hf;break;case"copy":case"cut":case"paste":y=ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xa}var w=(t&4)!==0,C=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Wn(d,f),v!=null&&w.push(Kn(d,v,p)))),C)break;d=d.return}0<w.length&&(h=new y(h,x,null,n,g),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==ko&&(x=n.relatedTarget||n.fromElement)&&(Nt(x)||x[Ke]))break e;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?Nt(x):null,x!==null&&(C=Ft(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(w=va,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=xa,v="onPointerLeave",f="onPointerEnter",d="pointer"),C=y==null?h:Qt(y),p=x==null?h:Qt(x),h=new w(v,d+"leave",y,n,g),h.target=C,h.relatedTarget=p,v=null,Nt(g)===c&&(w=new w(f,d+"enter",x,n,g),w.target=p,w.relatedTarget=C,v=w),C=v,y&&x)t:{for(w=y,f=x,d=0,p=w;p;p=At(p))d++;for(p=0,v=f;v;v=At(v))p++;for(;0<d-p;)w=At(w),d--;for(;0<p-d;)f=At(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=At(w),f=At(f)}w=null}else w=null;y!==null&&Ta(m,h,y,w,!1),x!==null&&C!==null&&Ta(m,C,x,w,!0)}}e:{if(h=c?Qt(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var E=Sf;else if(Sa(h))if(hu)E=Nf;else{E=Cf;var P=Ef}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=jf);if(E&&(E=E(e,c))){mu(m,E,n,g);break e}P&&P(e,h,c),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&go(h,"number",h.value)}switch(P=c?Qt(c):window,e){case"focusin":(Sa(P)||P.contentEditable==="true")&&(Vt=P,zo=c,In=null);break;case"focusout":In=zo=Vt=null;break;case"mousedown":_o=!0;break;case"contextmenu":case"mouseup":case"dragend":_o=!1,Pa(m,n,g);break;case"selectionchange":if(_f)break;case"keydown":case"keyup":Pa(m,n,g)}var z;if(Sl)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else bt?fu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(du&&n.locale!=="ko"&&(bt||_!=="onCompositionStart"?_==="onCompositionEnd"&&bt&&(z=cu()):(it=g,xl="value"in it?it.value:it.textContent,bt=!0)),P=Xr(c,_),0<P.length&&(_=new ya(_,e,null,n,g),m.push({event:_,listeners:P}),z?_.data=z:(z=pu(n),z!==null&&(_.data=z)))),(z=vf?yf(e,n):xf(e,n))&&(c=Xr(c,"onBeforeInput"),0<c.length&&(g=new ya("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=z))}ju(m,t)})}function Kn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wn(e,n),o!=null&&r.unshift(Kn(e,o,i)),o=Wn(e,t),o!=null&&r.push(Kn(e,o,i))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ta(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=Wn(n,o),s!=null&&l.unshift(Kn(n,s,a))):i||(s=Wn(n,o),s!=null&&l.push(Kn(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Rf=/\r\n?/g,Of=/\u0000|\uFFFD/g;function La(e){return(typeof e=="string"?e:""+e).replace(Rf,`
`).replace(Of,"")}function Cr(e,t,n){if(t=La(t),La(e)!==t&&n)throw Error(k(425))}function Zr(){}var To=null,Lo=null;function Mo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ro=typeof setTimeout=="function"?setTimeout:void 0,If=typeof clearTimeout=="function"?clearTimeout:void 0,Ma=typeof Promise=="function"?Promise:void 0,Df=typeof queueMicrotask=="function"?queueMicrotask:typeof Ma<"u"?function(e){return Ma.resolve(null).then(e).catch(Ff)}:Ro;function Ff(e){setTimeout(function(){throw e})}function Xi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ra(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Be="__reactFiber$"+hn,Xn="__reactProps$"+hn,Ke="__reactContainer$"+hn,Oo="__reactEvents$"+hn,Uf="__reactListeners$"+hn,Af="__reactHandles$"+hn;function Nt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ra(e);e!==null;){if(n=e[Be])return n;e=Ra(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[Be]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function xi(e){return e[Xn]||null}var Io=[],Gt=-1;function xt(e){return{current:e}}function U(e){0>Gt||(e.current=Io[Gt],Io[Gt]=null,Gt--)}function D(e,t){Gt++,Io[Gt]=e.current,e.current=t}var vt={},le=xt(vt),pe=xt(!1),Lt=vt;function an(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function Jr(){U(pe),U(le)}function Oa(e,t,n){if(le.current!==vt)throw Error(k(168));D(le,t),D(pe,n)}function Pu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Sd(e)||"Unknown",i));return W({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Lt=le.current,D(le,e),D(pe,pe.current),!0}function Ia(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Pu(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,U(pe),U(le),D(le,e)):U(pe),D(pe,n)}var Ve=null,wi=!1,Zi=!1;function zu(e){Ve===null?Ve=[e]:Ve.push(e)}function Bf(e){wi=!0,zu(e)}function wt(){if(!Zi&&Ve!==null){Zi=!0;var e=0,t=I;try{var n=Ve;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,wi=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),qs(hl,wt),i}finally{I=t,Zi=!1}}return null}var Yt=[],Kt=0,ei=null,ti=0,Se=[],Ee=0,Mt=null,He=1,Qe="";function Ct(e,t){Yt[Kt++]=ti,Yt[Kt++]=ei,ei=e,ti=t}function _u(e,t,n){Se[Ee++]=He,Se[Ee++]=Qe,Se[Ee++]=Mt,Mt=e;var r=He;e=Qe;var i=32-Ie(r)-1;r&=~(1<<i),n+=1;var o=32-Ie(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,He=1<<32-Ie(t)+i|n<<i|r,Qe=o+e}else He=1<<o|n<<i|r,Qe=e}function Cl(e){e.return!==null&&(Ct(e,1),_u(e,1,0))}function jl(e){for(;e===ei;)ei=Yt[--Kt],Yt[Kt]=null,ti=Yt[--Kt],Yt[Kt]=null;for(;e===Mt;)Mt=Se[--Ee],Se[Ee]=null,Qe=Se[--Ee],Se[Ee]=null,He=Se[--Ee],Se[Ee]=null}var ye=null,ve=null,A=!1,Oe=null;function Tu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Da(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:He,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function Do(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fo(e){if(A){var t=ve;if(t){var n=t;if(!Da(e,t)){if(Do(e))throw Error(k(418));t=ct(n.nextSibling);var r=ye;t&&Da(e,t)?Tu(r,n):(e.flags=e.flags&-4097|2,A=!1,ye=e)}}else{if(Do(e))throw Error(k(418));e.flags=e.flags&-4097|2,A=!1,ye=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function jr(e){if(e!==ye)return!1;if(!A)return Fa(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mo(e.type,e.memoizedProps)),t&&(t=ve)){if(Do(e))throw Lu(),Error(k(418));for(;t;)Tu(e,t),t=ct(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?ct(e.stateNode.nextSibling):null;return!0}function Lu(){for(var e=ve;e;)e=ct(e.nextSibling)}function sn(){ve=ye=null,A=!1}function Nl(e){Oe===null?Oe=[e]:Oe.push(e)}var $f=Je.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Nr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ua(e){var t=e._init;return t(e._payload)}function Mu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=mt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,v){return d===null||d.tag!==6?(d=io(p,f.mode,v),d.return=f,d):(d=i(d,p),d.return=f,d)}function s(f,d,p,v){var E=p.type;return E===Wt?g(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===et&&Ua(E)===d.type)?(v=i(d,p.props),v.ref=Cn(f,d,p),v.return=f,v):(v=Wr(p.type,p.key,p.props,null,f.mode,v),v.ref=Cn(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=oo(p,f.mode,v),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function g(f,d,p,v,E){return d===null||d.tag!==7?(d=Tt(p,f.mode,v,E),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=io(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case hr:return p=Wr(d.type,d.key,d.props,null,f.mode,p),p.ref=Cn(f,null,d),p.return=f,p;case $t:return d=oo(d,f.mode,p),d.return=f,d;case et:var v=d._init;return m(f,v(d._payload),p)}if(zn(d)||xn(d))return d=Tt(d,f.mode,p,null),d.return=f,d;Nr(f,d)}return null}function h(f,d,p,v){var E=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===E?s(f,d,p,v):null;case $t:return p.key===E?c(f,d,p,v):null;case et:return E=p._init,h(f,d,E(p._payload),v)}if(zn(p)||xn(p))return E!==null?null:g(f,d,p,v,null);Nr(f,p)}return null}function y(f,d,p,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(d,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hr:return f=f.get(v.key===null?p:v.key)||null,s(d,f,v,E);case $t:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,E);case et:var P=v._init;return y(f,d,p,P(v._payload),E)}if(zn(v)||xn(v))return f=f.get(p)||null,g(d,f,v,E,null);Nr(d,v)}return null}function x(f,d,p,v){for(var E=null,P=null,z=d,_=d=0,V=null;z!==null&&_<p.length;_++){z.index>_?(V=z,z=null):V=z.sibling;var R=h(f,z,p[_],v);if(R===null){z===null&&(z=V);break}e&&z&&R.alternate===null&&t(f,z),d=o(R,d,_),P===null?E=R:P.sibling=R,P=R,z=V}if(_===p.length)return n(f,z),A&&Ct(f,_),E;if(z===null){for(;_<p.length;_++)z=m(f,p[_],v),z!==null&&(d=o(z,d,_),P===null?E=z:P.sibling=z,P=z);return A&&Ct(f,_),E}for(z=r(f,z);_<p.length;_++)V=y(z,f,_,p[_],v),V!==null&&(e&&V.alternate!==null&&z.delete(V.key===null?_:V.key),d=o(V,d,_),P===null?E=V:P.sibling=V,P=V);return e&&z.forEach(function(_e){return t(f,_e)}),A&&Ct(f,_),E}function w(f,d,p,v){var E=xn(p);if(typeof E!="function")throw Error(k(150));if(p=E.call(p),p==null)throw Error(k(151));for(var P=E=null,z=d,_=d=0,V=null,R=p.next();z!==null&&!R.done;_++,R=p.next()){z.index>_?(V=z,z=null):V=z.sibling;var _e=h(f,z,R.value,v);if(_e===null){z===null&&(z=V);break}e&&z&&_e.alternate===null&&t(f,z),d=o(_e,d,_),P===null?E=_e:P.sibling=_e,P=_e,z=V}if(R.done)return n(f,z),A&&Ct(f,_),E;if(z===null){for(;!R.done;_++,R=p.next())R=m(f,R.value,v),R!==null&&(d=o(R,d,_),P===null?E=R:P.sibling=R,P=R);return A&&Ct(f,_),E}for(z=r(f,z);!R.done;_++,R=p.next())R=y(z,f,_,R.value,v),R!==null&&(e&&R.alternate!==null&&z.delete(R.key===null?_:R.key),d=o(R,d,_),P===null?E=R:P.sibling=R,P=R);return e&&z.forEach(function(vn){return t(f,vn)}),A&&Ct(f,_),E}function C(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var E=p.key,P=d;P!==null;){if(P.key===E){if(E=p.type,E===Wt){if(P.tag===7){n(f,P.sibling),d=i(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===et&&Ua(E)===P.type){n(f,P.sibling),d=i(P,p.props),d.ref=Cn(f,P,p),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===Wt?(d=Tt(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Wr(p.type,p.key,p.props,null,f.mode,v),v.ref=Cn(f,d,p),v.return=f,f=v)}return l(f);case $t:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=oo(p,f.mode,v),d.return=f,f=d}return l(f);case et:return P=p._init,C(f,d,P(p._payload),v)}if(zn(p))return x(f,d,p,v);if(xn(p))return w(f,d,p,v);Nr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=io(p,f.mode,v),d.return=f,f=d),l(f)):n(f,d)}return C}var un=Mu(!0),Ru=Mu(!1),ni=xt(null),ri=null,Xt=null,Pl=null;function zl(){Pl=Xt=ri=null}function _l(e){var t=ni.current;U(ni),e._currentValue=t}function Uo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){ri=e,Pl=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(Pl!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(ri===null)throw Error(k(308));Xt=e,ri.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Pt=null;function Tl(e){Pt===null?Pt=[e]:Pt.push(e)}function Ou(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Tl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function Ll(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xe(e,n)}return i=r.interleaved,i===null?(t.next=t,Tl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xe(e,n)}function Dr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gl(e,n)}}function Aa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ii(e,t,n,r){var i=e.updateQueue;tt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?o=c:l.next=c,l=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==l&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;l=0,g=c=s=null,a=o;do{var h=a.lane,y=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(h=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(y,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(y,m,h):x,h==null)break e;m=W({},m,h);break e;case 2:tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=y,s=m):g=g.next=y,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(s=m),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ot|=l,e.lanes=l,e.memoizedState=m}}function Ba(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var ur={},We=xt(ur),Zn=xt(ur),Jn=xt(ur);function zt(e){if(e===ur)throw Error(k(174));return e}function Ml(e,t){switch(D(Jn,t),D(Zn,e),D(We,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yo(t,e)}U(We),D(We,t)}function cn(){U(We),U(Zn),U(Jn)}function Du(e){zt(Jn.current);var t=zt(We.current),n=yo(t,e.type);t!==n&&(D(Zn,e),D(We,n))}function Rl(e){Zn.current===e&&(U(We),U(Zn))}var B=xt(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ji=[];function Ol(){for(var e=0;e<Ji.length;e++)Ji[e]._workInProgressVersionPrimary=null;Ji.length=0}var Fr=Je.ReactCurrentDispatcher,qi=Je.ReactCurrentBatchConfig,Rt=0,$=null,K=null,J=null,li=!1,Dn=!1,qn=0,Wf=0;function re(){throw Error(k(321))}function Il(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function Dl(e,t,n,r,i,o){if(Rt=o,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fr.current=e===null||e.memoizedState===null?Qf:Gf,e=n(r,i),Dn){o=0;do{if(Dn=!1,qn=0,25<=o)throw Error(k(301));o+=1,J=K=null,t.updateQueue=null,Fr.current=Yf,e=n(r,i)}while(Dn)}if(Fr.current=ai,t=K!==null&&K.next!==null,Rt=0,J=K=$=null,li=!1,t)throw Error(k(300));return e}function Fl(){var e=qn!==0;return qn=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?$.memoizedState=J=e:J=J.next=e,J}function ze(){if(K===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=J===null?$.memoizedState:J.next;if(t!==null)J=t,K=e;else{if(e===null)throw Error(k(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},J===null?$.memoizedState=J=e:J=J.next=e}return J}function er(e,t){return typeof t=="function"?t(e):t}function eo(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=K,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,c=o;do{var g=c.lane;if((Rt&g)===g)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,$.lanes|=g,Ot|=g}c=c.next}while(c!==null&&c!==o);s===null?l=r:s.next=a,Fe(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,$.lanes|=o,Ot|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function to(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Fe(o,t.memoizedState)||(fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fu(){}function Uu(e,t){var n=$,r=ze(),i=t(),o=!Fe(r.memoizedState,i);if(o&&(r.memoizedState=i,fe=!0),r=r.queue,Ul($u.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,tr(9,Bu.bind(null,n,r,i,t),void 0,null),q===null)throw Error(k(349));Rt&30||Au(n,t,i)}return i}function Au(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bu(e,t,n,r){t.value=n,t.getSnapshot=r,Wu(t)&&bu(e)}function $u(e,t,n){return n(function(){Wu(t)&&bu(e)})}function Wu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function bu(e){var t=Xe(e,1);t!==null&&De(t,e,1,-1)}function $a(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=Hf.bind(null,$,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vu(){return ze().memoizedState}function Ur(e,t,n,r){var i=Ae();$.flags|=e,i.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function ki(e,t,n,r){var i=ze();r=r===void 0?null:r;var o=void 0;if(K!==null){var l=K.memoizedState;if(o=l.destroy,r!==null&&Il(r,l.deps)){i.memoizedState=tr(t,n,o,r);return}}$.flags|=e,i.memoizedState=tr(1|t,n,o,r)}function Wa(e,t){return Ur(8390656,8,e,t)}function Ul(e,t){return ki(2048,8,e,t)}function Hu(e,t){return ki(4,2,e,t)}function Qu(e,t){return ki(4,4,e,t)}function Gu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yu(e,t,n){return n=n!=null?n.concat([e]):null,ki(4,4,Gu.bind(null,t,e),n)}function Al(){}function Ku(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Il(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xu(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Il(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zu(e,t,n){return Rt&21?(Fe(n,t)||(n=nu(),$.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function bf(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=qi.transition;qi.transition={};try{e(!1),t()}finally{I=n,qi.transition=r}}function Ju(){return ze().memoizedState}function Vf(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qu(e))ec(t,n);else if(n=Ou(e,t,n,r),n!==null){var i=se();De(n,e,r,i),tc(n,t,r)}}function Hf(e,t,n){var r=pt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qu(e))ec(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Fe(a,l)){var s=t.interleaved;s===null?(i.next=i,Tl(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Ou(e,t,i,r),n!==null&&(i=se(),De(n,e,r,i),tc(n,t,r))}}function qu(e){var t=e.alternate;return e===$||t!==null&&t===$}function ec(e,t){Dn=li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gl(e,n)}}var ai={readContext:Pe,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Qf={readContext:Pe,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ur(4194308,4,Gu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ur(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vf.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:$a,useDebugValue:Al,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=$a(!1),t=e[0];return e=bf.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,i=Ae();if(A){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),q===null)throw Error(k(349));Rt&30||Au(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Wa($u.bind(null,r,o,e),[e]),r.flags|=2048,tr(9,Bu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ae(),t=q.identifierPrefix;if(A){var n=Qe,r=He;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gf={readContext:Pe,useCallback:Ku,useContext:Pe,useEffect:Ul,useImperativeHandle:Yu,useInsertionEffect:Hu,useLayoutEffect:Qu,useMemo:Xu,useReducer:eo,useRef:Vu,useState:function(){return eo(er)},useDebugValue:Al,useDeferredValue:function(e){var t=ze();return Zu(t,K.memoizedState,e)},useTransition:function(){var e=eo(er)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Uu,useId:Ju,unstable_isNewReconciler:!1},Yf={readContext:Pe,useCallback:Ku,useContext:Pe,useEffect:Ul,useImperativeHandle:Yu,useInsertionEffect:Hu,useLayoutEffect:Qu,useMemo:Xu,useReducer:to,useRef:Vu,useState:function(){return to(er)},useDebugValue:Al,useDeferredValue:function(e){var t=ze();return K===null?t.memoizedState=e:Zu(t,K.memoizedState,e)},useTransition:function(){var e=to(er)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Uu,useId:Ju,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ao(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Si={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),i=pt(e),o=Ge(r,i);o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,i),t!==null&&(De(t,e,i,r),Dr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),i=pt(e),o=Ge(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,i),t!==null&&(De(t,e,i,r),Dr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=pt(e),i=Ge(n,r);i.tag=2,t!=null&&(i.callback=t),t=dt(e,i,r),t!==null&&(De(t,e,r,n),Dr(t,e,r))}};function ba(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Gn(n,r)||!Gn(i,o):!0}function nc(e,t,n){var r=!1,i=vt,o=t.contextType;return typeof o=="object"&&o!==null?o=Pe(o):(i=me(t)?Lt:le.current,r=t.contextTypes,o=(r=r!=null)?an(e,i):vt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Si,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Va(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Si.enqueueReplaceState(t,t.state,null)}function Bo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ll(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Pe(o):(o=me(t)?Lt:le.current,i.context=an(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ao(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Si.enqueueReplaceState(i,i.state,null),ii(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=kd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function no(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $o(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kf=typeof WeakMap=="function"?WeakMap:Map;function rc(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ui||(ui=!0,Zo=r),$o(e,t)},n}function ic(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$o(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$o(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ha(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=up.bind(null,e,t,n),t.then(e,e))}function Qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ga(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var Xf=Je.ReactCurrentOwner,fe=!1;function ae(e,t,n,r){t.child=e===null?Ru(t,null,n,r):un(t,e.child,n,r)}function Ya(e,t,n,r,i){n=n.render;var o=t.ref;return rn(t,i),r=Dl(e,t,n,r,o,i),n=Fl(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ze(e,t,i)):(A&&n&&Cl(t),t.flags|=1,ae(e,t,r,i),t.child)}function Ka(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Gl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,oc(e,t,o,r,i)):(e=Wr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gn,n(l,r)&&e.ref===t.ref)return Ze(e,t,i)}return t.flags|=1,e=mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Gn(o,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Ze(e,t,i)}return Wo(e,t,n,r,i)}function lc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Jt,ge),ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Jt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,D(Jt,ge),ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,D(Jt,ge),ge|=r;return ae(e,t,i,n),t.child}function ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wo(e,t,n,r,i){var o=me(n)?Lt:le.current;return o=an(t,o),rn(t,i),n=Dl(e,t,n,r,o,i),r=Fl(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ze(e,t,i)):(A&&r&&Cl(t),t.flags|=1,ae(e,t,n,i),t.child)}function Xa(e,t,n,r,i){if(me(n)){var o=!0;qr(t)}else o=!1;if(rn(t,i),t.stateNode===null)Ar(e,t),nc(t,n,r),Bo(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pe(c):(c=me(n)?Lt:le.current,c=an(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Va(t,l,r,c),tt=!1;var h=t.memoizedState;l.state=h,ii(t,r,l,i),s=t.memoizedState,a!==r||h!==s||pe.current||tt?(typeof g=="function"&&(Ao(t,n,g,r),s=t.memoizedState),(a=tt||ba(t,n,a,r,h,s,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Iu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Le(t.type,a),l.props=c,m=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Pe(s):(s=me(n)?Lt:le.current,s=an(t,s));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||h!==s)&&Va(t,l,r,s),tt=!1,h=t.memoizedState,l.state=h,ii(t,r,l,i);var x=t.memoizedState;a!==m||h!==x||pe.current||tt?(typeof y=="function"&&(Ao(t,n,y,r),x=t.memoizedState),(c=tt||ba(t,n,c,r,h,x,s)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return bo(e,t,n,r,o,i)}function bo(e,t,n,r,i,o){ac(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ia(t,n,!1),Ze(e,t,o);r=t.stateNode,Xf.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=un(t,e.child,null,o),t.child=un(t,null,a,o)):ae(e,t,a,o),t.memoizedState=r.state,i&&Ia(t,n,!0),t.child}function sc(e){var t=e.stateNode;t.pendingContext?Oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(e,t.context,!1),Ml(e,t.containerInfo)}function Za(e,t,n,r,i){return sn(),Nl(i),t.flags|=256,ae(e,t,n,r),t.child}var Vo={dehydrated:null,treeContext:null,retryLane:0};function Ho(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,t,n){var r=t.pendingProps,i=B.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(B,i&1),e===null)return Fo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ji(l,r,0,null),e=Tt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ho(n),t.memoizedState=Vo,e):Bl(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Zf(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=mt(a,o):(o=Tt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ho(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Vo,r}return o=e.child,e=o.sibling,r=mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bl(e,t){return t=ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&Nl(r),un(t,e.child,null,n),e=Bl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zf(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=no(Error(k(422))),Pr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ji({mode:"visible",children:r.children},i,0,null),o=Tt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&un(t,e.child,null,l),t.child.memoizedState=Ho(l),t.memoizedState=Vo,o);if(!(t.mode&1))return Pr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=no(o,r,void 0),Pr(e,t,l,r)}if(a=(l&e.childLanes)!==0,fe||a){if(r=q,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xe(e,i),De(r,e,i,-1))}return Ql(),r=no(Error(k(421))),Pr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=cp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ve=ct(i.nextSibling),ye=t,A=!0,Oe=null,e!==null&&(Se[Ee++]=He,Se[Ee++]=Qe,Se[Ee++]=Mt,He=e.id,Qe=e.overflow,Mt=t),t=Bl(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Uo(e.return,t,n)}function ro(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function cc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(B,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ro(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ro(t,!0,n,null,o);break;case"together":ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ar(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jf(e,t,n){switch(t.tag){case 3:sc(t),sn();break;case 5:Du(t);break;case 1:me(t.type)&&qr(t);break;case 4:Ml(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;D(ni,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?uc(e,t,n):(D(B,B.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);D(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,lc(e,t,n)}return Ze(e,t,n)}var dc,Qo,fc,pc;dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qo=function(){};fc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zt(We.current);var o=null;switch(n){case"input":i=mo(e,i),r=mo(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=vo(e,i),r=vo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}xo(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&F("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};pc=function(e,t,n,r){n!==r&&(t.flags|=4)};function jn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qf(e,t,n){var r=t.pendingProps;switch(jl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return me(t.type)&&Jr(),ie(t),null;case 3:return r=t.stateNode,cn(),U(pe),U(le),Ol(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(el(Oe),Oe=null))),Qo(e,t),ie(t),null;case 5:Rl(t);var i=zt(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)fc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ie(t),null}if(e=zt(We.current),jr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Be]=t,r[Xn]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<Tn.length;i++)F(Tn[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":aa(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":ua(r,o),F("invalid",r)}xo(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Cr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Cr(r.textContent,a,e),i=["children",""+a]):Bn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&F("scroll",r)}switch(n){case"input":gr(r),sa(r,o,!0);break;case"textarea":gr(r),ca(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$s(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Be]=t,e[Xn]=r,dc(e,t,!1,!1),t.stateNode=e;e:{switch(l=wo(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tn.length;i++)F(Tn[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":aa(e,r),i=mo(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),F("invalid",e);break;case"textarea":ua(e,r),i=vo(e,r),F("invalid",e);break;default:i=r}xo(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Vs(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ws(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&$n(e,s):typeof s=="number"&&$n(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&F("scroll",e):s!=null&&cl(e,o,s,l))}switch(n){case"input":gr(e),sa(e,r,!1);break;case"textarea":gr(e),ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?qt(e,!!r.multiple,o,!1):r.defaultValue!=null&&qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)pc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=zt(Jn.current),zt(We.current),jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(o=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return ie(t),null;case 13:if(U(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ve!==null&&t.mode&1&&!(t.flags&128))Lu(),sn(),t.flags|=98560,o=!1;else if(o=jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Be]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),o=!1}else Oe!==null&&(el(Oe),Oe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?X===0&&(X=3):Ql())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return cn(),Qo(e,t),e===null&&Yn(t.stateNode.containerInfo),ie(t),null;case 10:return _l(t.type._context),ie(t),null;case 17:return me(t.type)&&Jr(),ie(t),null;case 19:if(U(B),o=t.memoizedState,o===null)return ie(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)jn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=oi(e),l!==null){for(t.flags|=128,jn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(B,B.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>fn&&(t.flags|=128,r=!0,jn(o,!1),t.lanes=4194304)}else{if(!r)if(e=oi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!A)return ie(t),null}else 2*Q()-o.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,jn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=B.current,D(B,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Hl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function ep(e,t){switch(jl(t),t.tag){case 1:return me(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(),U(pe),U(le),Ol(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rl(t),null;case 13:if(U(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(B),null;case 4:return cn(),null;case 10:return _l(t.type._context),null;case 22:case 23:return Hl(),null;case 24:return null;default:return null}}var zr=!1,oe=!1,tp=typeof WeakSet=="function"?WeakSet:Set,j=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){b(e,t,r)}else n.current=null}function Go(e,t,n){try{n()}catch(r){b(e,t,r)}}var qa=!1;function np(e,t){if(To=Yr,e=yu(),El(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,g=0,m=e,h=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++c===i&&(a=l),h===o&&++g===r&&(s=l),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lo={focusedElem:e,selectionRange:n},Yr=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,C=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Le(t.type,w),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){b(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return x=qa,qa=!1,x}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Go(t,n,o)}i=i.next}while(i!==r)}}function Ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mc(e){var t=e.alternate;t!==null&&(e.alternate=null,mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[Xn],delete t[Oo],delete t[Uf],delete t[Af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hc(e){return e.tag===5||e.tag===3||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Ko(e,t,n),e=e.sibling;e!==null;)Ko(e,t,n),e=e.sibling}function Xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xo(e,t,n),e=e.sibling;e!==null;)Xo(e,t,n),e=e.sibling}var ee=null,Re=!1;function qe(e,t,n){for(n=n.child;n!==null;)gc(e,t,n),n=n.sibling}function gc(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(hi,n)}catch{}switch(n.tag){case 5:oe||Zt(n,t);case 6:var r=ee,i=Re;ee=null,qe(e,t,n),ee=r,Re=i,ee!==null&&(Re?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Re?(e=ee,n=n.stateNode,e.nodeType===8?Xi(e.parentNode,n):e.nodeType===1&&Xi(e,n),Hn(e)):Xi(ee,n.stateNode));break;case 4:r=ee,i=Re,ee=n.stateNode.containerInfo,Re=!0,qe(e,t,n),ee=r,Re=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Go(n,t,l),i=i.next}while(i!==r)}qe(e,t,n);break;case 1:if(!oe&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){b(n,t,a)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,qe(e,t,n),oe=r):qe(e,t,n);break;default:qe(e,t,n)}}function ts(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tp),t.forEach(function(r){var i=dp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Re=!1;break e;case 3:ee=a.stateNode.containerInfo,Re=!0;break e;case 4:ee=a.stateNode.containerInfo,Re=!0;break e}a=a.return}if(ee===null)throw Error(k(160));gc(o,l,i),ee=null,Re=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){b(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Ue(e),r&4){try{Fn(3,e,e.return),Ei(3,e)}catch(w){b(e,e.return,w)}try{Fn(5,e,e.return)}catch(w){b(e,e.return,w)}}break;case 1:Te(t,e),Ue(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Te(t,e),Ue(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var i=e.stateNode;try{$n(i,"")}catch(w){b(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&As(i,o),wo(a,l);var c=wo(a,o);for(l=0;l<s.length;l+=2){var g=s[l],m=s[l+1];g==="style"?Vs(i,m):g==="dangerouslySetInnerHTML"?Ws(i,m):g==="children"?$n(i,m):cl(i,g,m,c)}switch(a){case"input":ho(i,o);break;case"textarea":Bs(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?qt(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?qt(i,!!o.multiple,o.defaultValue,!0):qt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xn]=o}catch(w){b(e,e.return,w)}}break;case 6:if(Te(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){b(e,e.return,w)}}break;case 3:if(Te(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(w){b(e,e.return,w)}break;case 4:Te(t,e),Ue(e);break;case 13:Te(t,e),Ue(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bl=Q())),r&4&&ts(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||g,Te(t,e),oe=c):Te(t,e),Ue(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(j=e,g=e.child;g!==null;){for(m=j=g;j!==null;){switch(h=j,y=h.child,h.tag){case 0:case 11:case 14:case 15:Fn(4,h,h.return);break;case 1:Zt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){b(r,n,w)}}break;case 5:Zt(h,h.return);break;case 22:if(h.memoizedState!==null){rs(m);continue}}y!==null?(y.return=h,j=y):rs(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=bs("display",l))}catch(w){b(e,e.return,w)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){b(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Te(t,e),Ue(e),r&4&&ts(e);break;case 21:break;default:Te(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($n(i,""),r.flags&=-33);var o=es(e);Xo(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=es(e);Ko(e,a,l);break;default:throw Error(k(161))}}catch(s){b(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rp(e,t,n){j=e,yc(e)}function yc(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||zr;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||oe;a=zr;var c=oe;if(zr=l,(oe=s)&&!c)for(j=i;j!==null;)l=j,s=l.child,l.tag===22&&l.memoizedState!==null?is(i):s!==null?(s.return=l,j=s):is(i);for(;o!==null;)j=o,yc(o),o=o.sibling;j=i,zr=a,oe=c}ns(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,j=o):ns(e)}}function ns(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Ei(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ba(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ba(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Hn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||t.flags&512&&Yo(t)}catch(h){b(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function rs(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function is(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ei(4,t)}catch(s){b(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){b(t,i,s)}}var o=t.return;try{Yo(t)}catch(s){b(t,o,s)}break;case 5:var l=t.return;try{Yo(t)}catch(s){b(t,l,s)}}}catch(s){b(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var ip=Math.ceil,si=Je.ReactCurrentDispatcher,$l=Je.ReactCurrentOwner,Ne=Je.ReactCurrentBatchConfig,O=0,q=null,G=null,te=0,ge=0,Jt=xt(0),X=0,nr=null,Ot=0,Ci=0,Wl=0,Un=null,de=null,bl=0,fn=1/0,be=null,ui=!1,Zo=null,ft=null,_r=!1,ot=null,ci=0,An=0,Jo=null,Br=-1,$r=0;function se(){return O&6?Q():Br!==-1?Br:Br=Q()}function pt(e){return e.mode&1?O&2&&te!==0?te&-te:$f.transition!==null?($r===0&&($r=nu()),$r):(e=I,e!==0||(e=window.event,e=e===void 0?16:uu(e.type)),e):1}function De(e,t,n,r){if(50<An)throw An=0,Jo=null,Error(k(185));lr(e,n,r),(!(O&2)||e!==q)&&(e===q&&(!(O&2)&&(Ci|=n),X===4&&rt(e,te)),he(e,r),n===1&&O===0&&!(t.mode&1)&&(fn=Q()+500,wi&&wt()))}function he(e,t){var n=e.callbackNode;Bd(e,t);var r=Gr(e,e===q?te:0);if(r===0)n!==null&&pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pa(n),t===1)e.tag===0?Bf(os.bind(null,e)):zu(os.bind(null,e)),Df(function(){!(O&6)&&wt()}),n=null;else{switch(ru(r)){case 1:n=hl;break;case 4:n=eu;break;case 16:n=Qr;break;case 536870912:n=tu;break;default:n=Qr}n=Nc(n,xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xc(e,t){if(Br=-1,$r=0,O&6)throw Error(k(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=Gr(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=di(e,r);else{t=r;var i=O;O|=2;var o=kc();(q!==e||te!==t)&&(be=null,fn=Q()+500,_t(e,t));do try{ap();break}catch(a){wc(e,a)}while(!0);zl(),si.current=o,O=i,G!==null?t=0:(q=null,te=0,t=X)}if(t!==0){if(t===2&&(i=jo(e),i!==0&&(r=i,t=qo(e,i))),t===1)throw n=nr,_t(e,0),rt(e,r),he(e,Q()),n;if(t===6)rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!op(i)&&(t=di(e,r),t===2&&(o=jo(e),o!==0&&(r=o,t=qo(e,o))),t===1))throw n=nr,_t(e,0),rt(e,r),he(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:jt(e,de,be);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=bl+500-Q(),10<t)){if(Gr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ro(jt.bind(null,e,de,be),t);break}jt(e,de,be);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ie(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ip(r/1960))-r,10<r){e.timeoutHandle=Ro(jt.bind(null,e,de,be),r);break}jt(e,de,be);break;case 5:jt(e,de,be);break;default:throw Error(k(329))}}}return he(e,Q()),e.callbackNode===n?xc.bind(null,e):null}function qo(e,t){var n=Un;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=di(e,t),e!==2&&(t=de,de=n,t!==null&&el(t)),e}function el(e){de===null?de=e:de.push.apply(de,e)}function op(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Fe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Wl,t&=~Ci,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function os(e){if(O&6)throw Error(k(327));on();var t=Gr(e,0);if(!(t&1))return he(e,Q()),null;var n=di(e,t);if(e.tag!==0&&n===2){var r=jo(e);r!==0&&(t=r,n=qo(e,r))}if(n===1)throw n=nr,_t(e,0),rt(e,t),he(e,Q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,de,be),he(e,Q()),null}function Vl(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(fn=Q()+500,wi&&wt())}}function It(e){ot!==null&&ot.tag===0&&!(O&6)&&on();var t=O;O|=1;var n=Ne.transition,r=I;try{if(Ne.transition=null,I=1,e)return e()}finally{I=r,Ne.transition=n,O=t,!(O&6)&&wt()}}function Hl(){ge=Jt.current,U(Jt)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,If(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(jl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:cn(),U(pe),U(le),Ol();break;case 5:Rl(r);break;case 4:cn();break;case 13:U(B);break;case 19:U(B);break;case 10:_l(r.type._context);break;case 22:case 23:Hl()}n=n.return}if(q=e,G=e=mt(e.current,null),te=ge=t,X=0,nr=null,Wl=Ci=Ot=0,de=Un=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Pt=null}return e}function wc(e,t){do{var n=G;try{if(zl(),Fr.current=ai,li){for(var r=$.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}li=!1}if(Rt=0,J=K=$=null,Dn=!1,qn=0,$l.current=null,n===null||n.return===null){X=1,nr=t,G=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=te,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,g=a,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Qa(l);if(y!==null){y.flags&=-257,Ga(y,l,a,o,t),y.mode&1&&Ha(o,c,t),t=y,s=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(s),t.updateQueue=w}else x.add(s);break e}else{if(!(t&1)){Ha(o,c,t),Ql();break e}s=Error(k(426))}}else if(A&&a.mode&1){var C=Qa(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ga(C,l,a,o,t),Nl(dn(s,a));break e}}o=s=dn(s,a),X!==4&&(X=2),Un===null?Un=[o]:Un.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=rc(o,s,t);Aa(o,f);break e;case 1:a=s;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ft===null||!ft.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=ic(o,a,t);Aa(o,v);break e}}o=o.return}while(o!==null)}Ec(n)}catch(E){t=E,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function kc(){var e=si.current;return si.current=ai,e===null?ai:e}function Ql(){(X===0||X===3||X===2)&&(X=4),q===null||!(Ot&268435455)&&!(Ci&268435455)||rt(q,te)}function di(e,t){var n=O;O|=2;var r=kc();(q!==e||te!==t)&&(be=null,_t(e,t));do try{lp();break}catch(i){wc(e,i)}while(!0);if(zl(),O=n,si.current=r,G!==null)throw Error(k(261));return q=null,te=0,X}function lp(){for(;G!==null;)Sc(G)}function ap(){for(;G!==null&&!Ld();)Sc(G)}function Sc(e){var t=jc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Ec(e):G=t,$l.current=null}function Ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ep(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,G=null;return}}else if(n=qf(n,t,ge),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);X===0&&(X=5)}function jt(e,t,n){var r=I,i=Ne.transition;try{Ne.transition=null,I=1,sp(e,t,n,r)}finally{Ne.transition=i,I=r}return null}function sp(e,t,n,r){do on();while(ot!==null);if(O&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if($d(e,o),e===q&&(G=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,Nc(Qr,function(){return on(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var l=I;I=1;var a=O;O|=4,$l.current=null,np(e,n),vc(n,e),zf(Lo),Yr=!!To,Lo=To=null,e.current=n,rp(n),Md(),O=a,I=l,Ne.transition=o}else e.current=n;if(_r&&(_r=!1,ot=e,ci=i),o=e.pendingLanes,o===0&&(ft=null),Id(n.stateNode),he(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ui)throw ui=!1,e=Zo,Zo=null,e;return ci&1&&e.tag!==0&&on(),o=e.pendingLanes,o&1?e===Jo?An++:(An=0,Jo=e):An=0,wt(),null}function on(){if(ot!==null){var e=ru(ci),t=Ne.transition,n=I;try{if(Ne.transition=null,I=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,ci=0,O&6)throw Error(k(331));var i=O;for(O|=4,j=e.current;j!==null;){var o=j,l=o.child;if(j.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(j=c;j!==null;){var g=j;switch(g.tag){case 0:case 11:case 15:Fn(8,g,o)}var m=g.child;if(m!==null)m.return=g,j=m;else for(;j!==null;){g=j;var h=g.sibling,y=g.return;if(mc(g),g===c){j=null;break}if(h!==null){h.return=y,j=h;break}j=y}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}j=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,j=l;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,j=f;break e}j=o.return}}var d=e.current;for(j=d;j!==null;){l=j;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,j=p;else e:for(l=d;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ei(9,a)}}catch(E){b(a,a.return,E)}if(a===l){j=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,j=v;break e}j=a.return}}if(O=i,wt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(hi,e)}catch{}r=!0}return r}finally{I=n,Ne.transition=t}}return!1}function ls(e,t,n){t=dn(n,t),t=rc(e,t,1),e=dt(e,t,1),t=se(),e!==null&&(lr(e,1,t),he(e,t))}function b(e,t,n){if(e.tag===3)ls(e,e,n);else for(;t!==null;){if(t.tag===3){ls(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=dn(n,e),e=ic(t,e,1),t=dt(t,e,1),e=se(),t!==null&&(lr(t,1,e),he(t,e));break}}t=t.return}}function up(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>Q()-bl?_t(e,0):Wl|=n),he(e,t)}function Cc(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=se();e=Xe(e,t),e!==null&&(lr(e,t,n),he(e,n))}function cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cc(e,n)}function dp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Cc(e,n)}var jc;jc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,Jf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,A&&t.flags&1048576&&_u(t,ti,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ar(e,t),e=t.pendingProps;var i=an(t,le.current);rn(t,n),i=Dl(null,t,r,e,i,n);var o=Fl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(o=!0,qr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ll(t),i.updater=Si,t.stateNode=i,i._reactInternals=t,Bo(t,r,e,n),t=bo(null,t,r,!0,o,n)):(t.tag=0,A&&o&&Cl(t),ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ar(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=pp(r),e=Le(r,e),i){case 0:t=Wo(null,t,r,e,n);break e;case 1:t=Xa(null,t,r,e,n);break e;case 11:t=Ya(null,t,r,e,n);break e;case 14:t=Ka(null,t,r,Le(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Wo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Xa(e,t,r,i,n);case 3:e:{if(sc(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Iu(e,t),ii(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dn(Error(k(423)),t),t=Za(e,t,r,n,i);break e}else if(r!==i){i=dn(Error(k(424)),t),t=Za(e,t,r,n,i);break e}else for(ve=ct(t.stateNode.containerInfo.firstChild),ye=t,A=!0,Oe=null,n=Ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===i){t=Ze(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return Du(t),e===null&&Fo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Mo(r,i)?l=null:o!==null&&Mo(r,o)&&(t.flags|=32),ac(e,t),ae(e,t,l,n),t.child;case 6:return e===null&&Fo(t),null;case 13:return uc(e,t,n);case 4:return Ml(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Ya(e,t,r,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,D(ni,r._currentValue),r._currentValue=l,o!==null)if(Fe(o.value,l)){if(o.children===i.children&&!pe.current){t=Ze(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ge(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?s.next=s:(s.next=g.next,g.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Uo(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Uo(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rn(t,n),i=Pe(i),r=r(i),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,i=Le(r,t.pendingProps),i=Le(r.type,i),Ka(e,t,r,i,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Ar(e,t),t.tag=1,me(r)?(e=!0,qr(t)):e=!1,rn(t,n),nc(t,r,i),Bo(t,r,i,n),bo(null,t,r,!0,e,n);case 19:return cc(e,t,n);case 22:return lc(e,t,n)}throw Error(k(156,t.tag))};function Nc(e,t){return qs(e,t)}function fp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new fp(e,t,n,r)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pp(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fl)return 11;if(e===pl)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Gl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wt:return Tt(n.children,i,o,t);case dl:l=8,i|=8;break;case uo:return e=Ce(12,n,t,i|2),e.elementType=uo,e.lanes=o,e;case co:return e=Ce(13,n,t,i),e.elementType=co,e.lanes=o,e;case fo:return e=Ce(19,n,t,i),e.elementType=fo,e.lanes=o,e;case Ds:return ji(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Os:l=10;break e;case Is:l=9;break e;case fl:l=11;break e;case pl:l=14;break e;case et:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ce(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Tt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function ji(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=Ds,e.lanes=n,e.stateNode={isHidden:!1},e}function io(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function oo(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ai(0),this.expirationTimes=Ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yl(e,t,n,r,i,o,l,a,s){return e=new mp(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ce(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ll(o),e}function hp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pc(e){if(!e)return vt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(me(n))return Pu(e,n,t)}return t}function zc(e,t,n,r,i,o,l,a,s){return e=Yl(n,r,!0,e,i,o,l,a,s),e.context=Pc(null),n=e.current,r=se(),i=pt(n),o=Ge(r,i),o.callback=t??null,dt(n,o,i),e.current.lanes=i,lr(e,i,r),he(e,r),e}function Ni(e,t,n,r){var i=t.current,o=se(),l=pt(i);return n=Pc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(i,t,l),e!==null&&(De(e,i,l,o),Dr(e,i,l)),l}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function as(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kl(e,t){as(e,t),(e=e.alternate)&&as(e,t)}function gp(){return null}var _c=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xl(e){this._internalRoot=e}Pi.prototype.render=Xl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ni(e,t,null,null)};Pi.prototype.unmount=Xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){Ni(null,e,null,null)}),t[Ke]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=lu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&su(e)}};function Zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ss(){}function vp(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=fi(l);o.call(c)}}var l=zc(t,r,e,0,null,!1,!1,"",ss);return e._reactRootContainer=l,e[Ke]=l.current,Yn(e.nodeType===8?e.parentNode:e),It(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=fi(s);a.call(c)}}var s=Yl(e,0,!1,null,null,!1,!1,"",ss);return e._reactRootContainer=s,e[Ke]=s.current,Yn(e.nodeType===8?e.parentNode:e),It(function(){Ni(t,s,n,r)}),s}function _i(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=fi(l);a.call(s)}}Ni(t,l,e,i)}else l=vp(n,t,e,i,r);return fi(l)}iu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_n(t.pendingLanes);n!==0&&(gl(t,n|1),he(t,Q()),!(O&6)&&(fn=Q()+500,wt()))}break;case 13:It(function(){var r=Xe(e,1);if(r!==null){var i=se();De(r,e,1,i)}}),Kl(e,1)}};vl=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=se();De(t,e,134217728,n)}Kl(e,134217728)}};ou=function(e){if(e.tag===13){var t=pt(e),n=Xe(e,t);if(n!==null){var r=se();De(n,e,t,r)}Kl(e,t)}};lu=function(){return I};au=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};So=function(e,t,n){switch(t){case"input":if(ho(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xi(r);if(!i)throw Error(k(90));Us(r),ho(r,i)}}}break;case"textarea":Bs(e,n);break;case"select":t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}};Gs=Vl;Ys=It;var yp={usingClientEntryPoint:!1,Events:[sr,Qt,xi,Hs,Qs,Vl]},Nn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xp={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zs(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{hi=Tr.inject(xp),$e=Tr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yp;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zl(t))throw Error(k(200));return hp(e,t,null,n)};we.createRoot=function(e,t){if(!Zl(e))throw Error(k(299));var n=!1,r="",i=_c;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Yl(e,1,!1,null,null,n,!1,r,i),e[Ke]=t.current,Yn(e.nodeType===8?e.parentNode:e),new Xl(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Zs(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return It(e)};we.hydrate=function(e,t,n){if(!zi(t))throw Error(k(200));return _i(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Zl(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=_c;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=zc(t,null,e,1,n??null,i,!1,o,l),e[Ke]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pi(t)};we.render=function(e,t,n){if(!zi(t))throw Error(k(200));return _i(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!zi(e))throw Error(k(40));return e._reactRootContainer?(It(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=Vl;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return _i(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function Tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tc)}catch(e){console.error(e)}}Tc(),Ts.exports=we;var wp=Ts.exports,us=wp;ao.createRoot=us.createRoot,ao.hydrateRoot=us.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rr.apply(this,arguments)}var lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lt||(lt={}));const cs="popstate";function kp(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return tl("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:pi(i)}return Ep(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Sp(){return Math.random().toString(36).substr(2,8)}function ds(e,t){return{usr:e.state,key:e.key,idx:t}}function tl(e,t,n,r){return n===void 0&&(n=null),rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gn(t):t,{state:n,key:t&&t.key||r||Sp()})}function pi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ep(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=lt.Pop,s=null,c=g();c==null&&(c=0,l.replaceState(rr({},l.state,{idx:c}),""));function g(){return(l.state||{idx:null}).idx}function m(){a=lt.Pop;let C=g(),f=C==null?null:C-c;c=C,s&&s({action:a,location:w.location,delta:f})}function h(C,f){a=lt.Push;let d=tl(w.location,C,f);c=g()+1;let p=ds(d,c),v=w.createHref(d);try{l.pushState(p,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(v)}o&&s&&s({action:a,location:w.location,delta:1})}function y(C,f){a=lt.Replace;let d=tl(w.location,C,f);c=g();let p=ds(d,c),v=w.createHref(d);l.replaceState(p,"",v),o&&s&&s({action:a,location:w.location,delta:0})}function x(C){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof C=="string"?C:pi(C);return d=d.replace(/ $/,"%20"),Y(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return a},get location(){return e(i,l)},listen(C){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(cs,m),s=C,()=>{i.removeEventListener(cs,m),s=null}},createHref(C){return t(i,C)},createURL:x,encodeLocation(C){let f=x(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:y,go(C){return l.go(C)}};return w}var fs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fs||(fs={}));function Cp(e,t,n){return n===void 0&&(n="/"),jp(e,t,n)}function jp(e,t,n,r){let i=typeof t=="string"?gn(t):t,o=Jl(i.pathname||"/",n);if(o==null)return null;let l=Mc(e);Np(l);let a=null;for(let s=0;a==null&&s<l.length;++s){let c=Up(o);a=Ip(l[s],c)}return a}function Mc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(Y(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=ht([r,s.relativePath]),g=n.concat(s);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Mc(o.children,t,g,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Rp(c,o.index),routesMeta:g})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of Rc(o.path))i(o,l,s)}),t}function Rc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Rc(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Np(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Op(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Pp=/^:[\w-]+$/,zp=3,_p=2,Tp=1,Lp=10,Mp=-2,ps=e=>e==="*";function Rp(e,t){let n=e.split("/"),r=n.length;return n.some(ps)&&(r+=Mp),t&&(r+=_p),n.filter(i=>!ps(i)).reduce((i,o)=>i+(Pp.test(o)?zp:o===""?Tp:Lp),r)}function Op(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ip(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,g=o==="/"?t:t.slice(o.length)||"/",m=Dp({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},g),h=s.route;if(!m)return null;Object.assign(i,m.params),l.push({params:i,pathname:ht([o,m.pathname]),pathnameBase:Wp(ht([o,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(o=ht([o,m.pathnameBase]))}return l}function Dp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Fp(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,g,m)=>{let{paramName:h,isOptional:y}=g;if(h==="*"){let w=a[m]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const x=a[m];return y&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function Fp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Up(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Lc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ap(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?gn(e):e;return{pathname:n?n.startsWith("/")?n:Bp(n,t):t,search:bp(r),hash:Vp(i)}}function Bp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function lo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $p(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Oc(e,t){let n=$p(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ic(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=gn(e):(i=rr({},e),Y(!i.pathname||!i.pathname.includes("?"),lo("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),lo("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),lo("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),m-=1;i.pathname=h.join("/")}a=m>=0?t[m]:"/"}let s=Ap(i,a),c=l&&l!=="/"&&l.endsWith("/"),g=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||g)&&(s.pathname+="/"),s}const ht=e=>e.join("/").replace(/\/\/+/g,"/"),Wp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Hp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dc=["post","put","patch","delete"];new Set(Dc);const Qp=["get",...Dc];new Set(Qp);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}const ql=S.createContext(null),Gp=S.createContext(null),Ut=S.createContext(null),Ti=S.createContext(null),kt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Fc=S.createContext(null);function Yp(e,t){let{relative:n}=t===void 0?{}:t;cr()||Y(!1);let{basename:r,navigator:i}=S.useContext(Ut),{hash:o,pathname:l,search:a}=Ac(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:ht([r,l])),i.createHref({pathname:s,search:a,hash:o})}function cr(){return S.useContext(Ti)!=null}function dr(){return cr()||Y(!1),S.useContext(Ti).location}function Uc(e){S.useContext(Ut).static||S.useLayoutEffect(e)}function Kp(){let{isDataRoute:e}=S.useContext(kt);return e?um():Xp()}function Xp(){cr()||Y(!1);let e=S.useContext(ql),{basename:t,future:n,navigator:r}=S.useContext(Ut),{matches:i}=S.useContext(kt),{pathname:o}=dr(),l=JSON.stringify(Oc(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return Uc(()=>{a.current=!0}),S.useCallback(function(c,g){if(g===void 0&&(g={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=Ic(c,JSON.parse(l),o,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ht([t,m.pathname])),(g.replace?r.replace:r.push)(m,g.state,g)},[t,r,l,o,e])}function Zp(){let{matches:e}=S.useContext(kt),t=e[e.length-1];return t?t.params:{}}function Ac(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Ut),{matches:i}=S.useContext(kt),{pathname:o}=dr(),l=JSON.stringify(Oc(i,r.v7_relativeSplatPath));return S.useMemo(()=>Ic(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Jp(e,t){return qp(e,t)}function qp(e,t,n,r){cr()||Y(!1);let{navigator:i}=S.useContext(Ut),{matches:o}=S.useContext(kt),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let c=dr(),g;if(t){var m;let C=typeof t=="string"?gn(t):t;s==="/"||(m=C.pathname)!=null&&m.startsWith(s)||Y(!1),g=C}else g=c;let h=g.pathname||"/",y=h;if(s!=="/"){let C=s.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let x=Cp(e,{pathname:y}),w=im(x&&x.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:ht([s,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:ht([s,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&w?S.createElement(Ti.Provider,{value:{location:ir({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:lt.Pop}},w):w}function em(){let e=sm(),t=Hp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const tm=S.createElement(em,null);class nm extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(kt.Provider,{value:this.props.routeContext},S.createElement(Fc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rm(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(ql);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(kt.Provider,{value:t},r)}function im(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let g=l.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);g>=0||Y(!1),l=l.slice(0,Math.min(l.length,g+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<l.length;g++){let m=l[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=g),m.route.id){let{loaderData:h,errors:y}=n,x=m.route.loader&&h[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||x){s=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((g,m,h)=>{let y,x=!1,w=null,C=null;n&&(y=a&&m.route.id?a[m.route.id]:void 0,w=m.route.errorElement||tm,s&&(c<0&&h===0?(cm("route-fallback"),x=!0,C=null):c===h&&(x=!0,C=m.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,h+1)),d=()=>{let p;return y?p=w:x?p=C:m.route.Component?p=S.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=g,S.createElement(rm,{match:m,routeContext:{outlet:g,matches:f,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?S.createElement(nm,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Bc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bc||{}),$c=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($c||{});function om(e){let t=S.useContext(ql);return t||Y(!1),t}function lm(e){let t=S.useContext(Gp);return t||Y(!1),t}function am(e){let t=S.useContext(kt);return t||Y(!1),t}function Wc(e){let t=am(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function sm(){var e;let t=S.useContext(Fc),n=lm(),r=Wc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function um(){let{router:e}=om(Bc.UseNavigateStable),t=Wc($c.UseNavigateStable),n=S.useRef(!1);return Uc(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ir({fromRouteId:t},o)))},[e,t])}const ms={};function cm(e,t,n){ms[e]||(ms[e]=!0)}function dm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Bt(e){Y(!1)}function fm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=lt.Pop,navigator:o,static:l=!1,future:a}=e;cr()&&Y(!1);let s=t.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:s,navigator:o,static:l,future:ir({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=gn(r));let{pathname:g="/",search:m="",hash:h="",state:y=null,key:x="default"}=r,w=S.useMemo(()=>{let C=Jl(g,s);return C==null?null:{location:{pathname:C,search:m,hash:h,state:y,key:x},navigationType:i}},[s,g,m,h,y,x,i]);return w==null?null:S.createElement(Ut.Provider,{value:c},S.createElement(Ti.Provider,{children:n,value:w}))}function pm(e){let{children:t,location:n}=e;return Jp(nl(t),n)}new Promise(()=>{});function nl(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,nl(r.props.children,o));return}r.type!==Bt&&Y(!1),!r.props.index||!r.props.children||Y(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=nl(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rl.apply(this,arguments)}function mm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function hm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gm(e,t){return e.button===0&&(!t||t==="_self")&&!hm(e)}const vm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ym="6";try{window.__reactRouterVersion=ym}catch{}const xm="startTransition",hs=sd[xm];function wm(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=kp({window:i,v5Compat:!0}));let l=o.current,[a,s]=S.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},g=S.useCallback(m=>{c&&hs?hs(()=>s(m)):s(m)},[s,c]);return S.useLayoutEffect(()=>l.listen(g),[l,g]),S.useEffect(()=>dm(r),[r]),S.createElement(fm,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,je=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:c,preventScrollReset:g,viewTransition:m}=t,h=mm(t,vm),{basename:y}=S.useContext(Ut),x,w=!1;if(typeof c=="string"&&Sm.test(c)&&(x=c,km))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),E=Jl(v.pathname,y);v.origin===p.origin&&E!=null?c=E+v.search+v.hash:w=!0}catch{}let C=Yp(c,{relative:i}),f=Em(c,{replace:l,state:a,target:s,preventScrollReset:g,relative:i,viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return S.createElement("a",rl({},h,{href:x||C,onClick:w||o?r:d,ref:n,target:s}))});var gs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gs||(gs={}));var vs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vs||(vs={}));function Em(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,s=Kp(),c=dr(),g=Ac(e,{relative:l});return S.useCallback(m=>{if(gm(m,n)){m.preventDefault();let h=r!==void 0?r:pi(c)===pi(g);s(e,{replace:h,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[c,s,g,r,i,n,e,o,l,a])}const Cm=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState(null),i=()=>{t(!e),r(null)};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
          text-decoration: none;
        }
      `}),u.jsx("nav",{children:u.jsxs("div",{className:"nav-container",children:[u.jsx(je,{to:"/",className:"logo-text",children:"Evergreen Motors"}),u.jsx("button",{className:"mobile-menu-toggle",onClick:i,"aria-label":"Toggle menu","aria-expanded":e,children:e?"✕":"☰"}),u.jsxs("ul",{className:"nav-menu",children:[u.jsx("li",{children:u.jsx(je,{to:"/models",onClick:()=>t(!1),children:"Models"})}),u.jsx("li",{children:u.jsx(je,{to:"/about",onClick:()=>t(!1),children:"About"})}),u.jsx("li",{children:u.jsx(je,{to:"/contact",onClick:()=>t(!1),children:"Contact"})})]})]})})]})},jm=()=>u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
          width: 44px;
          height: 44px;
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
          transform: scale(1.1);
        }

        .footer-bottom {
          text-align: center;
          padding: 1.5rem 5%;
          border-top: 1px solid rgba(255,255,255,0.1);
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

        /* Extra Large Screens (1600px+) */
        @media (min-width: 1600px) {
          .footer-top {
            padding: 8rem 8%;
          }
          
          .footer-links {
            gap: 3rem;
          }
          
          .footer-links a {
            font-size: 1rem;
          }
          
          .social-link {
            width: 48px;
            height: 48px;
            font-size: 1.2rem;
          }
        }

        /* Large Laptops (1200px - 1440px) */
        @media (max-width: 1440px) {
          .footer-top {
            padding: 6rem 5%;
          }
        }

        /* Standard Laptops (1024px - 1199px) */
        @media (max-width: 1199px) {
          .footer-top {
            padding: 5rem 4%;
          }
          
          .footer-links {
            gap: 2rem;
          }
          
          .footer-links a {
            font-size: 0.85rem;
          }
          
          .footer-social-section {
            gap: 1.5rem;
          }
        }

        /* Tablets & Small Laptops (768px - 1023px) */
        @media (max-width: 1023px) {
          .footer-top {
            padding: 4rem 4%;
          }
          
          .footer-top-content {
            flex-direction: column;
            gap: 3rem;
            align-items: center;
            text-align: center;
          }
          
          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem 2rem;
          }
          
          .footer-social-section {
            flex-direction: column;
            gap: 1.5rem;
            width: auto;
          }
          
          .footer-social-label {
            font-size: 0.85rem;
          }
        }

        /* Large Phones & Small Tablets (600px - 767px) */
        @media (max-width: 767px) {
          .footer-top {
            padding: 3.5rem 5%;
          }
          
          .footer-top-content {
            gap: 2.5rem;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 1.2rem;
            align-items: center;
          }
          
          .footer-links a {
            font-size: 0.9rem;
            padding: 0.3rem 0;
          }
          
          .footer-social {
            gap: 1.2rem;
          }
          
          .social-link {
            width: 48px;
            height: 48px;
          }
          
          .footer-bottom {
            padding: 1.8rem 5%;
          }
          
          .footer-bottom p {
            font-size: 0.8rem;
            line-height: 1.5;
          }
        }

        /* Medium Phones (480px - 599px) */
        @media (max-width: 599px) {
          .footer-top {
            padding: 3rem 6%;
          }
          
          .footer-links a {
            font-size: 0.95rem;
            padding: 0.4rem 0;
          }
          
          .footer-social-label {
            font-size: 0.8rem;
            letter-spacing: 0.5px;
          }
          
          .social-link {
            width: 50px;
            height: 50px;
            font-size: 1.15rem;
          }
        }

        /* Small Phones (320px - 479px) */
        @media (max-width: 479px) {
          .footer-top {
            padding: 2.5rem 5%;
          }
          
          .footer-top-content {
            gap: 2rem;
          }
          
          .footer-links {
            gap: 1rem;
            width: 100%;
          }
          
          .footer-links a {
            font-size: 1rem;
            padding: 0.5rem 0;
            width: 100%;
          }
          
          .footer-social-section {
            gap: 1.2rem;
            width: 100%;
          }
          
          .footer-social-label {
            font-size: 0.75rem;
          }
          
          .footer-social {
            gap: 0.8rem;
            justify-content: center;
          }
          
          .social-link {
            width: 46px;
            height: 46px;
            font-size: 1.1rem;
          }
          
          .footer-bottom {
            padding: 1.5rem 5%;
          }
          
          .footer-bottom p {
            font-size: 0.75rem;
            line-height: 1.6;
          }
        }

        /* Extra Small Devices (< 360px) */
        @media (max-width: 359px) {
          .footer-top {
            padding: 2rem 4%;
          }
          
          .footer-links a {
            font-size: 0.95rem;
          }
          
          .social-link {
            width: 44px;
            height: 44px;
            font-size: 1rem;
          }
          
          .footer-social {
            gap: 0.6rem;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .social-link {
            min-width: 44px;
            min-height: 44px;
          }
          
          .footer-links a {
            padding: 0.6rem 0;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}),u.jsxs("footer",{children:[u.jsx("div",{className:"footer-top",children:u.jsxs("div",{className:"footer-top-content",children:[u.jsxs("div",{className:"footer-links",children:[u.jsx("a",{href:"#",children:"Privacy & Legal"}),u.jsx("a",{href:"#",children:"Cookie Policy"}),u.jsx(je,{to:"/contact",children:"Contact"})]}),u.jsxs("div",{className:"footer-social-section",children:[u.jsx("span",{className:"footer-social-label",children:"FOLLOW US"}),u.jsxs("div",{className:"footer-social",children:[u.jsx("a",{href:"#",className:"social-link","aria-label":"Facebook",children:"f"}),u.jsx("a",{href:"#",className:"social-link","aria-label":"X",children:"𝕏"}),u.jsx("a",{href:"#",className:"social-link","aria-label":"Instagram",children:"📷"}),u.jsx("a",{href:"#",className:"social-link","aria-label":"TikTok",children:"♪"}),u.jsx("a",{href:"#",className:"social-link","aria-label":"YouTube",children:"▶"})]})]})]})}),u.jsx("div",{className:"footer-bottom",children:u.jsx("div",{className:"footer-bottom-content",children:u.jsx("p",{children:"© Evergreen Motors Ltd. All rights reserved."})})})]})]}),Me=({src:e,children:t,className:n="",priority:r=!1,style:i={}})=>{const[o,l]=S.useState(!1),[a,s]=S.useState(r),[c,g]=S.useState(r),m=S.useRef(null);return S.useEffect(()=>{if(r)return;const h=new IntersectionObserver(y=>{y.forEach(x=>{x.isIntersecting&&(g(!0),s(!0),h.disconnect())})},{rootMargin:"100px"});return m.current&&h.observe(m.current),()=>h.disconnect()},[r]),S.useEffect(()=>{if(!c)return;const h=new Image;h.src=e,h.onload=()=>l(!0)},[c,e]),u.jsxs("div",{ref:m,className:n,style:{...i,position:"relative",backgroundImage:o?`url(${e})`:"none",backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 0.5s ease"},children:[!o&&u.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",filter:"blur(20px)",zIndex:0}}),u.jsx("div",{style:{position:"relative",zIndex:1},children:t})]})},bc=e=>{const t=document.createElement("link");t.rel="preload",t.as="image",t.href=e,document.head.appendChild(t)},Nm=()=>(S.useEffect(()=>{bc("/HeroBackground.png")},[]),u.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[u.jsx("style",{children:`
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
      `}),u.jsx(Me,{src:"/HeroBackground.png",className:"luxury-hero",priority:!0,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"},children:u.jsxs("div",{className:"hero-content",children:[u.jsx("div",{className:"hero-logo",children:"Evergreen Motors"}),u.jsx("h1",{children:"Drive the Future"}),u.jsx("p",{className:"hero-tagline",children:"Where sustainable innovation meets uncompromising luxury. Experience the next generation of electric mobility at Evergreen Motors."}),u.jsxs("div",{className:"hero-cta-group",children:[u.jsx(je,{to:"/models",className:"cta-button cta-primary",children:"Explore Collection"}),u.jsx(je,{to:"/test-drive",className:"cta-button cta-secondary",children:"Schedule Test Drive"})]})]})}),u.jsx(Me,{src:"/bottom-bannerPC.jpg",className:"stats-section",priority:!1,style:{backgroundAttachment:(window.innerWidth>768,"scroll")}})]})),Pm=()=>{S.useEffect(()=>{const t={threshold:.1,rootMargin:"0px 0px -100px 0px"},n=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&i.target.classList.add("fade-in-visible")})},t);return document.querySelectorAll(".fade-in-section").forEach(r=>n.observe(r)),()=>n.disconnect()},[]);const e=[{id:"dolphin-mini",name:"Dolphin Mini",description:"Compact elegance meets urban efficiency in this perfectly sized city electric vehicle",type:"City Electric",image:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000",price:"Starting at $28,990",range:"250 miles",acceleration:"7.5s 0-60mph"},{id:"atto-3",name:"Atto 3",description:"The benchmark electric SUV featuring e-Platform 3.0 technology and exceptional versatility",type:"Electric SUV",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",price:"Starting at $38,990",range:"260 miles",acceleration:"7.3s 0-60mph"},{id:"seal-u",name:"Seal U",description:"Premium electric sedan where sophisticated design meets exhilarating performance",type:"Luxury Sedan",image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",price:"Starting at $48,990",range:"354 miles",acceleration:"3.8s 0-60mph"},{id:"tang-l",name:"Tang L",description:"Spacious luxury with three rows of premium comfort and cutting-edge technology",type:"7-Seater SUV",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",price:"Starting at $58,990",range:"323 miles",acceleration:"4.4s 0-60mph"},{id:"han",name:"Han",description:"Flagship luxury sedan combining breathtaking design with uncompromising performance",type:"Executive Sedan",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",price:"Starting at $54,990",range:"379 miles",acceleration:"3.9s 0-60mph"},{id:"seal",name:"Seal",description:"Athletic performance sedan with ocean-inspired design and track-ready dynamics",type:"Performance Sedan",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",price:"Starting at $44,990",range:"310 miles",acceleration:"3.6s 0-60mph"}];return u.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[u.jsx("style",{children:`
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
      `}),u.jsx("div",{className:"models-hero",children:u.jsxs("div",{className:"models-hero-content",children:[u.jsx("h1",{children:"OUR COLLECTION"}),u.jsx("p",{className:"subtitle",children:"Electric Excellence"}),u.jsx("p",{children:"Discover the pinnacle of electric vehicle innovation. Each Evergreen model in our collection represents the perfect fusion of cutting-edge technology, sustainable design, and luxurious comfort."})]})}),u.jsxs("section",{className:"models-section fade-in-section",children:[u.jsxs("div",{className:"models-intro",children:[u.jsx("h2",{children:"The Future of Mobility"}),u.jsx("p",{children:"At Evergreen Motors, we offer an exceptional range of Evergreen electric vehicles — each engineered to perfection, designed to inspire, and built to transform the way you drive. Experience the difference that true innovation makes."})]}),u.jsx("div",{className:"luxury-models-grid",children:e.map(t=>u.jsxs(je,{to:`/models/${t.id}`,className:"luxury-model-card",children:[u.jsxs("div",{className:"model-image-container",children:[u.jsx("img",{src:t.image,alt:t.name}),u.jsx("div",{className:"model-type-badge",children:t.type})]}),u.jsxs("div",{className:"luxury-model-info",children:[u.jsx("h3",{className:"luxury-model-name",children:t.name}),u.jsx("p",{className:"luxury-model-description",children:t.description}),u.jsxs("div",{className:"model-specs",children:[u.jsxs("div",{className:"spec-item",children:[u.jsx("div",{className:"spec-label",children:"Range"}),u.jsx("div",{className:"spec-value",children:t.range})]}),u.jsxs("div",{className:"spec-item",children:[u.jsx("div",{className:"spec-label",children:"0-60 MPH"}),u.jsx("div",{className:"spec-value",children:t.acceleration})]})]}),u.jsx("div",{className:"model-price",children:t.price}),u.jsx("span",{className:"luxury-learn-more",children:"Explore Model"})]})]},t.id))})]})]})},zm=()=>{const{modelId:e}=Zp();S.useEffect(()=>{window.scrollTo(0,0)},[e]);const n={"dolphin-mini":{id:"dolphin-mini",name:"Dolphin Mini",tagline:"Urban Sophistication Reimagined",description:"The Dolphin Mini represents the perfect harmony of compact design and electric efficiency. Engineered for city driving yet capable of longer journeys, this sophisticated city car delivers premium comfort, advanced technology, and exceptional range in a beautifully compact package.",type:"City Electric",image:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000",price:"Starting at $28,990",specs:{range:"250 miles",acceleration:"7.5s 0-60mph",topSpeed:"99 mph",motorPower:"150 kW",batteryCapacity:"44.9 kWh",chargingTime:"30 min (10-80%)",seating:"5 passengers",driveType:"Front-Wheel Drive"},features:["e-Platform 3.0 Architecture","Blade Battery Technology","Intelligent Cockpit System","Advanced Driver Assistance","Panoramic Sunroof","Premium Interior Materials","Wireless Phone Charging","LED Lighting System"],colors:[{name:"Pearl White",hex:"#f8f9fa"},{name:"Midnight Black",hex:"#1a1a1a"},{name:"Ocean Blue",hex:"#4a9eff"},{name:"Silver Mist",hex:"#c0c0c0"}],highlights:[{title:"Compact Excellence",description:"Perfect dimensions for urban navigation without sacrificing interior space or comfort",icon:"🏙️"},{title:"Efficient Power",description:"Optimized electric motor delivers responsive performance with exceptional efficiency",icon:"⚡"},{title:"Smart Technology",description:"Intuitive infotainment and connectivity keep you seamlessly connected",icon:"📱"}]},"atto-3":{id:"atto-3",name:"Atto 3",tagline:"The Benchmark Electric SUV",description:"The Atto 3 sets new standards for electric SUVs with its perfect blend of practicality, performance, and cutting-edge technology. Built on BYD's revolutionary e-Platform 3.0, this versatile SUV offers exceptional range, sophisticated design, and an interior that redefines comfort and innovation.",type:"Electric SUV",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2000",price:"Starting at $38,990",specs:{range:"260 miles",acceleration:"7.3s 0-60mph",topSpeed:"100 mph",motorPower:"150 kW",batteryCapacity:"60.5 kWh",chargingTime:"29 min (30-80%)",seating:"5 passengers",driveType:"Front-Wheel Drive"},features:["e-Platform 3.0 Technology","Blade Battery System","Panoramic Sky Window","Rotating Touchscreen Display","Voice-Activated Controls","Premium Sound System","Advanced Safety Suite","Wireless CarPlay & Android Auto"],colors:[{name:"Cosmos Black",hex:"#0a0a0a"},{name:"Surf Blue",hex:"#4a9eff"},{name:"Boulder Grey",hex:"#6c757d"},{name:"Parkour Red",hex:"#dc3545"}],highlights:[{title:"Spacious Versatility",description:"Generous cargo space and flexible seating configurations for every adventure",icon:"🎒"},{title:"Advanced Safety",description:"Comprehensive suite of driver assistance systems for confident driving",icon:"🛡️"},{title:"Exceptional Range",description:"Travel further with confidence thanks to efficient battery technology",icon:"🔋"}]},"seal-u":{id:"seal-u",name:"Seal U",tagline:"Premium Electric Sophistication",description:"The Seal U embodies the pinnacle of electric sedan luxury. With its stunning ocean-inspired design language, exhilarating performance, and advanced technology suite, this premium sedan delivers an uncompromising driving experience that seamlessly blends elegance with athletic capability.",type:"Luxury Sedan",image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000",price:"Starting at $48,990",specs:{range:"354 miles",acceleration:"3.8s 0-60mph",topSpeed:"112 mph",motorPower:"390 kW",batteryCapacity:"82.5 kWh",chargingTime:"26 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["CTB Cell-to-Body Integration","Dual Motor AWD System","Adaptive Air Suspension","Premium Nappa Leather Interior","Head-Up Display","Dynaudio Sound System","Matrix LED Headlights","Advanced Climate Control"],colors:[{name:"Aurora Silver",hex:"#d4d4d4"},{name:"Deep Ocean Blue",hex:"#1e3a8a"},{name:"Quantum Grey",hex:"#4b5563"},{name:"Crystal White",hex:"#ffffff"}],highlights:[{title:"Athletic Performance",description:"Dual motors deliver exhilarating acceleration and dynamic handling",icon:"🏁"},{title:"Luxurious Comfort",description:"Premium materials and meticulous craftsmanship throughout the cabin",icon:"✨"},{title:"Extended Range",description:"Travel over 350 miles on a single charge for ultimate peace of mind",icon:"🌍"}]},"tang-l":{id:"tang-l",name:"Tang L",tagline:"Luxury Redefined for Seven",description:"The Tang L represents the ultimate expression of family luxury. This spacious three-row SUV combines cutting-edge electric technology with opulent comfort, offering seven passengers premium accommodations and an array of advanced features that make every journey extraordinary.",type:"7-Seater SUV",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",price:"Starting at $58,990",specs:{range:"323 miles",acceleration:"4.4s 0-60mph",topSpeed:"112 mph",motorPower:"380 kW",batteryCapacity:"108.8 kWh",chargingTime:"30 min (30-80%)",seating:"7 passengers",driveType:"All-Wheel Drive"},features:["Three-Row Seating","Dual Motor Performance","Premium Quilted Leather","Panoramic Glass Roof","Individual Seat Climate Control","Premium Audio System","Gesture Control","Advanced Autopilot"],colors:[{name:"Imperial Red",hex:"#8b0000"},{name:"Graphite Black",hex:"#2d3436"},{name:"Champagne Gold",hex:"#d4af37"},{name:"Celestial White",hex:"#fafafa"}],highlights:[{title:"Seven-Seat Luxury",description:"Premium comfort for every passenger across three spacious rows",icon:"👨‍👩‍👧‍👦"},{title:"Powerful Performance",description:"Dual motors provide commanding power and confident handling",icon:"💪"},{title:"Advanced Technology",description:"Cutting-edge features and connectivity throughout",icon:"🔬"}]},han:{id:"han",name:"Han",tagline:"Executive Excellence",description:"The Han flagship sedan represents the apex of BYD's engineering prowess and design philosophy. This executive-class vehicle combines breathtaking aesthetics with phenomenal performance, offering a driving experience that rivals the world's most prestigious luxury sedans while delivering zero emissions.",type:"Executive Sedan",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2000",price:"Starting at $54,990",specs:{range:"379 miles",acceleration:"3.9s 0-60mph",topSpeed:"115 mph",motorPower:"380 kW",batteryCapacity:"85.4 kWh",chargingTime:"25 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["Dragon Face Design Language","Executive Rear Seating","Massage Function","Ambient Lighting (31 colors)","Premium Dynaudio System","Advanced DiPilot","Ventilated & Heated Seats","Electrochromic Panoramic Roof"],colors:[{name:"Dragon Scale Grey",hex:"#708090"},{name:"Phoenix Red",hex:"#c41e3a"},{name:"Jade Green",hex:"#00a86b"},{name:"Emperor Black",hex:"#000000"}],highlights:[{title:"Flagship Design",description:"Stunning Dragon Face aesthetic that commands attention",icon:"🐉"},{title:"Executive Comfort",description:"First-class accommodations with massage and premium materials",icon:"🎩"},{title:"Record Range",description:"Nearly 380 miles of range for effortless long-distance travel",icon:"🛣️"}]},seal:{id:"seal",name:"Seal",tagline:"Performance Unleashed",description:"The Seal performance sedan delivers pure driving excitement. Inspired by the ocean's most agile creatures, this athletic sedan combines razor-sharp handling, explosive acceleration, and striking design to create a driving experience that thrills enthusiasts while maintaining everyday practicality.",type:"Performance Sedan",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",price:"Starting at $44,990",specs:{range:"310 miles",acceleration:"3.6s 0-60mph",topSpeed:"112 mph",motorPower:"390 kW",batteryCapacity:"82.5 kWh",chargingTime:"26 min (30-80%)",seating:"5 passengers",driveType:"All-Wheel Drive"},features:["Sport-Tuned Suspension","Performance Dual Motors","Sport Seats with Bolstering","Track Mode","Performance Braking System","Sport Steering Wheel","Digital Instrument Cluster","Launch Control"],colors:[{name:"Racing Blue",hex:"#0066cc"},{name:"Shadow Black",hex:"#121212"},{name:"Silver Storm",hex:"#b8b8b8"},{name:"Carbon Grey",hex:"#3d3d3d"}],highlights:[{title:"Track-Ready Performance",description:"Sub-4-second acceleration with sport-tuned dynamics",icon:"🏎️"},{title:"Agile Handling",description:"Low center of gravity and AWD provide exceptional cornering",icon:"🌀"},{title:"Driver-Focused",description:"Every element optimized for an engaging driving experience",icon:"🎯"}]}}[e||""];return n?u.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[u.jsx("style",{children:`
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
      `}),u.jsx(je,{to:"/models",className:"back-link",children:"← All Models"}),u.jsx("div",{className:"model-detail-hero",children:u.jsxs("div",{className:"hero-detail-content",children:[u.jsx("div",{className:"model-type-badge-hero",children:n.type}),u.jsx("h1",{children:n.name}),u.jsx("p",{className:"hero-tagline",children:n.tagline}),u.jsx("p",{className:"hero-price",children:n.price})]})}),u.jsx("section",{className:"detail-section dark-section",children:u.jsxs("div",{className:"section-container",children:[u.jsx("h2",{className:"section-title",children:"Overview"}),u.jsx("p",{className:"description-text",style:{color:"rgba(255,255,255,0.8)"},children:n.description}),u.jsxs("div",{className:"specs-grid",children:[u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Range"}),u.jsx("div",{className:"spec-value",children:n.specs.range})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"0-60 MPH"}),u.jsx("div",{className:"spec-value",children:n.specs.acceleration})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Top Speed"}),u.jsx("div",{className:"spec-value",children:n.specs.topSpeed})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Motor Power"}),u.jsx("div",{className:"spec-value",children:n.specs.motorPower})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Battery"}),u.jsx("div",{className:"spec-value",children:n.specs.batteryCapacity})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Charging"}),u.jsx("div",{className:"spec-value",children:n.specs.chargingTime})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Seating"}),u.jsx("div",{className:"spec-value",children:n.specs.seating})]}),u.jsxs("div",{className:"spec-card",children:[u.jsx("div",{className:"spec-label",children:"Drive Type"}),u.jsx("div",{className:"spec-value",children:n.specs.driveType})]})]})]})}),u.jsx("section",{className:"detail-section light-section",children:u.jsxs("div",{className:"section-container",children:[u.jsx("h2",{className:"section-title",children:"Key Highlights"}),u.jsx("div",{className:"highlights-grid",children:n.highlights.map((r,i)=>u.jsxs("div",{className:"highlight-card",children:[u.jsx("div",{className:"highlight-icon",children:r.icon}),u.jsx("h3",{className:"highlight-title",children:r.title}),u.jsx("p",{className:"highlight-description",children:r.description})]},i))})]})}),u.jsx("section",{className:"detail-section dark-section",children:u.jsxs("div",{className:"section-container",children:[u.jsx("h2",{className:"section-title",children:"Premium Features"}),u.jsx("div",{className:"features-grid",children:n.features.map((r,i)=>u.jsx("div",{className:"feature-item",children:r},i))})]})}),u.jsx("section",{className:"detail-section light-section",children:u.jsxs("div",{className:"section-container",children:[u.jsx("h2",{className:"section-title",children:"Available Colors"}),u.jsx("div",{className:"colors-grid",children:n.colors.map((r,i)=>u.jsxs("div",{className:"color-option",children:[u.jsx("div",{className:"color-swatch",style:{backgroundColor:r.hex}}),u.jsx("div",{className:"color-name",children:r.name})]},i))})]})}),u.jsx("section",{className:"cta-section",children:u.jsxs("div",{className:"section-container",children:[u.jsxs("h2",{className:"section-title",style:{color:"#333"},children:["Experience the ",n.name]}),u.jsxs("p",{style:{fontSize:"1.3rem",color:"#666",fontFamily:"Montserrat, sans-serif",fontWeight:300},children:["Visit Evergreen Motors today and discover why the ",n.name," is redefining electric mobility"]}),u.jsxs("div",{className:"cta-buttons",children:[u.jsx(je,{to:"/test-drive",className:"cta-button cta-button-primary",children:"Schedule Test Drive"}),u.jsx(je,{to:"/contact",className:"cta-button cta-button-secondary",children:"Contact Us"})]})]})})]}):u.jsxs("div",{style:{padding:"10rem 5%",textAlign:"center",color:"white",background:"#0a0a0a",minHeight:"100vh"},children:[u.jsx("h1",{style:{fontSize:"3rem",marginBottom:"2rem"},children:"Model Not Found"}),u.jsx(je,{to:"/models",style:{color:"#4a9eff",fontSize:"1.2rem"},children:"← Back to Models"})]})},_m=()=>{const[e,t]=S.useState(!1),n=S.useRef(null);return S.useEffect(()=>{const r={threshold:.1,rootMargin:"0px 0px -100px 0px"},i=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&l.target.classList.add("fade-in-visible")})},r);return document.querySelectorAll(".fade-in-section").forEach(o=>i.observe(o)),()=>i.disconnect()},[]),S.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&n.current&&!e&&(t(!0),r.disconnect())})},{rootMargin:"50px"});return n.current&&r.observe(n.current),()=>r.disconnect()},[e]),u.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[u.jsx("style",{children:`
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

        /* Image Background Sections - Text Overlay Style */
        .image-section {
          min-height: 140vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10rem 5%;
          position: relative;
          will-change: transform;
        }

        .image-section-content {
          max-width: 1000px;
          padding: 0;
          text-align: center;
          background: none;
          backdrop-filter: none;
          box-shadow: none;
        }

        .image-section-content h2 {
          font-size: 4.5rem;
          margin-bottom: 2.5rem;
          font-weight: 400;
          letter-spacing: 8px;
          font-family: 'Cormorant Garamond', serif;
          color: #ffffff;
          text-shadow: 
            3px 3px 6px rgba(0, 0, 0, 0.8),
            -1px -1px 2px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(0, 0, 0, 0.5);
          line-height: 1.2;
        }

        .image-section-content p {
          font-size: 1.4rem;
          line-height: 2.2;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          text-shadow: 
            2px 2px 5px rgba(0, 0, 0, 0.9),
            -1px -1px 2px rgba(0, 0, 0, 0.7),
            0 0 15px rgba(0, 0, 0, 0.6);
          max-width: 900px;
          margin: 0 auto;
        }

        /* Platform Section with 3 Images - IMPROVED */
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
          width: 100%;
        }

        .platform-image {
          background-size: cover;
          background-position: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          background-color: #e0e0e0;
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          min-height: 0;
          min-width: 0;
        }

        .platform-image:hover {
          transform: scale(1.05);
          box-shadow: 0 30px 80px rgba(0,0,0,0.25);
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
          margin-bottom: 1rem;
          font-weight: 300;
          letter-spacing: 6px;
          font-family: 'Cormorant Garamond', serif;
          color: #1a1a1a;
        }

        .platform-subtitle {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2.5rem;
          font-style: italic;
          font-family: 'Montserrat', sans-serif;
        }

        .platform-text p {
          font-size: 1.15rem;
          line-height: 2;
          color: #555;
          margin-bottom: 2.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }

        .platform-text ul {
          list-style: none;
          padding: 0;
        }

        .platform-text ul li {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #555;
          margin-bottom: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          padding-left: 0;
        }

        .platform-text ul li strong {
          font-weight: 600;
          color: #333;
          display: block;
          margin-bottom: 0.5rem;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .section-title {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }

          .story-item {
            gap: 4rem;
          }

          .story-content h3 {
            font-size: 2.5rem;
          }

          .platform-container {
            gap: 4rem;
          }

          .platform-text h2 {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
            letter-spacing: 4px;
            margin-bottom: 3rem;
          }

          .story-item {
            grid-template-columns: 1fr;
            gap: 3rem;
            margin-bottom: 5rem;
          }

          .story-item:nth-child(even) {
            direction: ltr;
          }

          .story-content h3 {
            font-size: 2rem;
          }

          .story-content p {
            font-size: 1.1rem;
          }

          .story-image {
            height: 300px;
          }

          .luxury-section {
            padding: 5rem 5%;
          }

          .platform-section {
            padding: 5rem 5%;
          }

          .platform-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .image-section {
            min-height: 100vh;
            padding: 6rem 5%;
          }

          .image-section-content {
            padding: 0;
          }

          .image-section-content h2 {
            font-size: 2.5rem;
            letter-spacing: 4px;
            margin-bottom: 1.5rem;
            text-shadow: 
              2px 2px 4px rgba(0, 0, 0, 0.9),
              -1px -1px 2px rgba(0, 0, 0, 0.7),
              0 0 10px rgba(0, 0, 0, 0.6);
          }

          .image-section-content p {
            font-size: 1.1rem;
            line-height: 1.9;
            text-shadow: 
              1px 1px 3px rgba(0, 0, 0, 0.9),
              -1px -1px 1px rgba(0, 0, 0, 0.7),
              0 0 10px rgba(0, 0, 0, 0.6);
          }

          .platform-images {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 250px);
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

          .platform-text h2 {
            font-size: 2.5rem;
          }

          .platform-text p,
          .platform-text ul li {
            font-size: 1rem;
          }

          /* Disable parallax on mobile */
          .image-section {
            background-attachment: scroll !important;
          }
        }

        @media (max-width: 480px) {
          .image-section {
            min-height: 80vh;
            padding: 4rem 5%;
          }

          .image-section-content h2 {
            font-size: 2rem;
            letter-spacing: 3px;
          }

          .image-section-content p {
            font-size: 1rem;
            line-height: 1.8;
          }

          .platform-images {
            grid-template-rows: repeat(3, 200px);
          }

          .section-title {
            font-size: 2rem;
            letter-spacing: 3px;
          }

          .story-content h3 {
            font-size: 1.8rem;
          }

          .platform-text h2 {
            font-size: 2rem;
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

        @media (max-width: 768px) {
          .video-hero,
          .video-hero video,
          .video-placeholder {
            display: none !important;
            height: 0;
            overflow: hidden;
          }
        }

      `}),u.jsxs("div",{className:"video-hero",ref:n,children:[!e&&u.jsx("div",{className:"video-placeholder",children:u.jsx("div",{style:{color:"white",fontSize:"1.2rem",fontFamily:"Montserrat, sans-serif",letterSpacing:"2px"},children:"Loading..."})}),e&&u.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"loaded",preload:"metadata",poster:"/About.mp4?poster=true",children:u.jsx("source",{src:"/About.mp4",type:"video/mp4"})})]}),u.jsx("section",{className:"luxury-section story-section fade-in-section",children:u.jsxs("div",{className:"section-content",children:[u.jsx("h2",{className:"section-title",children:"Our Story"}),u.jsxs("div",{className:"story-item",children:[u.jsxs("div",{className:"story-content",children:[u.jsx("h3",{children:"The Beginning"}),u.jsx("p",{children:"Evergreen Motors was founded on a simple belief: that the future of transportation should be sustainable without sacrificing the driving experience. We saw an opportunity to bridge the gap between environmental responsibility and automotive excellence."})]}),u.jsx(Me,{src:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop",className:"story-image",priority:!1})]}),u.jsxs("div",{className:"story-item",children:[u.jsxs("div",{className:"story-content",children:[u.jsx("h3",{children:"Growth & Innovation"}),u.jsx("p",{children:"As we expanded, we remained committed to our core values. Each new location, each partnership, and each customer relationship has been built on trust, transparency, and a shared vision for a sustainable future."})]}),u.jsx(Me,{src:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop",className:"story-image",priority:!1})]}),u.jsxs("div",{className:"story-item",children:[u.jsxs("div",{className:"story-content",children:[u.jsx("h3",{children:"Looking Forward"}),u.jsx("p",{children:"Today, we're proud to be at the forefront of the electric vehicle revolution. But we're not done yet. We continue to innovate, expand, and refine our offerings to ensure that every customer experiences the future of driving."})]}),u.jsx(Me,{src:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",className:"story-image",priority:!1})]})]})}),u.jsx(Me,{src:"/BYD-2000_0.jpg",className:"image-section fade-in-section",priority:!1,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"},children:u.jsxs("div",{className:"image-section-content",children:[u.jsx("h2",{children:"Innovation in Motion"}),u.jsx("p",{children:"BYD's cutting-edge technology represents the pinnacle of electric vehicle engineering. From advanced battery systems to intelligent drive platforms, every innovation is designed to deliver exceptional performance while reducing environmental impact."})]})}),u.jsx(Me,{src:"/b9f297e0-79c0-11ef-9dff-6e499e6c2dc7.png",className:"image-section fade-in-section",priority:!1,style:{backgroundAttachment:window.innerWidth>768?"fixed":"scroll"},children:u.jsxs("div",{className:"image-section-content",children:[u.jsx("h2",{children:"Sustainable Future"}),u.jsx("p",{children:"We're committed to building a transportation ecosystem that prioritizes sustainability without compromise. Through strategic partnerships and technological advancement, we're making electric mobility accessible to everyone."})]})}),u.jsx("section",{className:"platform-section fade-in-section",children:u.jsxs("div",{className:"platform-container",children:[u.jsxs("div",{className:"platform-images",children:[u.jsx(Me,{src:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",className:"platform-image",priority:!1}),u.jsx(Me,{src:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop",className:"platform-image",priority:!1}),u.jsx(Me,{src:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop",className:"platform-image",priority:!1})]}),u.jsxs("div",{className:"platform-text",children:[u.jsx("h2",{children:"Yisifang Platform"}),u.jsx("p",{className:"platform-subtitle",children:"(also known as the e⁴ platform)"}),u.jsx("p",{children:"The innovative distributed drive structure in the new energy vehicle industry reforms the traditional automotive power system from three dimensions: perception, decision-making, and execution."}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("strong",{children:"Full integration of vehicle perception:"})," Integrating vehicle sensors and intelligent driving sensors to achieve comprehensive perception of the vehicle environment."]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Four-motor independent drive structure:"})," Self-developed, with four motors enabling independent control of each wheel, applicable to pure electric and hybrid platforms."]})]})]})]})})]})},Tm=()=>{const[e,t]=S.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,r]=S.useState("idle");S.useEffect(()=>{bc("/contact.jpg")},[]);const i=l=>{const{name:a,value:s}=l.target;t(c=>({...c,[a]:s}))},o=l=>{l.preventDefault(),console.log("Form submitted:",e),r("success"),setTimeout(()=>{t({name:"",email:"",phone:"",subject:"",message:""}),r("idle")},3e3)};return u.jsxs("div",{children:[u.jsx("style",{children:`
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
      `}),u.jsx(Me,{src:"/contact.jpg",className:"luxury-contact-hero",priority:!0,style:{backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll"},children:u.jsx("div",{className:"hero-content",children:u.jsx("h1",{children:"CONTACT US"})})}),u.jsx("section",{className:"luxury-section",children:u.jsxs("div",{className:"section-content",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("div",{className:"section-label",children:"Get In Touch"}),u.jsx("h2",{className:"section-title",children:"Let's Connect"})]}),u.jsxs("div",{className:"contact-grid",children:[u.jsxs("div",{className:"contact-info-box",children:[u.jsx("h2",{children:"Information"}),u.jsxs("div",{className:"contact-item",children:[u.jsx("h3",{children:"Phone"}),u.jsx("p",{children:u.jsx("a",{href:"tel:+1234567890",children:"+1 (234) 567-890"})})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx("h3",{children:"Email"}),u.jsx("p",{children:u.jsx("a",{href:"mailto:info@evergreenmotors.com",children:"info@evergreenmotors.com"})}),u.jsx("p",{children:u.jsx("a",{href:"mailto:sales@evergreenmotors.com",children:"sales@evergreenmotors.com"})})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx("h3",{children:"Address"}),u.jsx("p",{children:"Evergreen Motors Headquarters"}),u.jsx("p",{children:"Reagent Village"}),u.jsx("p",{children:"Grace Bay, Providenciales"}),u.jsx("p",{children:"Tursk & Caicos"})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx("h3",{children:"Business Hours"}),u.jsx("p",{children:"Monday - Friday: 9:00 AM - 6:00 PM"}),u.jsx("p",{children:"Saturday: 10:00 AM - 4:00 PM"}),u.jsx("p",{children:"Sunday: Closed"})]})]}),u.jsxs("div",{className:"contact-form-box",children:[u.jsx("h2",{children:"Send Message"}),u.jsx("p",{className:"form-subtitle",children:"We'd love to hear from you. Fill out the form below and we'll be in touch shortly."}),n==="success"&&u.jsx("div",{className:"success-message",children:"✓ Message sent successfully"}),u.jsxs("form",{onSubmit:o,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"name",children:"Full Name *"}),u.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:i,required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"email",children:"Email Address *"}),u.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:i,required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"phone",children:"Phone Number"}),u.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:i})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"subject",children:"Subject *"}),u.jsxs("select",{id:"subject",name:"subject",value:e.subject,onChange:i,required:!0,children:[u.jsx("option",{value:"",children:"Select a subject"}),u.jsx("option",{value:"general",children:"General Inquiry"}),u.jsx("option",{value:"sales",children:"Sales & Purchasing"}),u.jsx("option",{value:"service",children:"Service & Maintenance"}),u.jsx("option",{value:"test-drive",children:"Schedule a Test Drive"}),u.jsx("option",{value:"fleet",children:"Fleet Solutions"}),u.jsx("option",{value:"partnership",children:"Business Partnership"}),u.jsx("option",{value:"other",children:"Other"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"message",children:"Message *"}),u.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:i,required:!0})]}),u.jsx("button",{type:"submit",className:"submit-btn",children:"SEND MESSAGE"})]})]})]})]})})]})},Lm=()=>{const{pathname:e,hash:t}=dr();return S.useEffect(()=>{t?setTimeout(()=>{const n=document.querySelector(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},100):window.scrollTo(0,0)},[e,t]),null},Mm=()=>u.jsxs(wm,{children:[u.jsx(Lm,{}),u.jsxs("div",{className:"App",children:[u.jsx(Cm,{}),u.jsxs(pm,{children:[u.jsx(Bt,{path:"/",element:u.jsx(Nm,{})}),u.jsx(Bt,{path:"/models",element:u.jsx(Pm,{})}),u.jsx(Bt,{path:"/models/:modelId",element:u.jsx(zm,{})}),u.jsx(Bt,{path:"/about",element:u.jsx(_m,{})}),u.jsx(Bt,{path:"/contact",element:u.jsx(Tm,{})})]}),u.jsx(jm,{})]})]}),Rm=ao.createRoot(document.getElementById("root"));Rm.render(u.jsx(zs.StrictMode,{children:u.jsx(Mm,{})}));
