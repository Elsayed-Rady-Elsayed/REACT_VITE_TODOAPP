function IP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function cT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hT={exports:{}},Gh={},dT={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xl=Symbol.for("react.element"),RP=Symbol.for("react.portal"),CP=Symbol.for("react.fragment"),AP=Symbol.for("react.strict_mode"),kP=Symbol.for("react.profiler"),PP=Symbol.for("react.provider"),NP=Symbol.for("react.context"),bP=Symbol.for("react.forward_ref"),DP=Symbol.for("react.suspense"),xP=Symbol.for("react.memo"),LP=Symbol.for("react.lazy"),Rv=Symbol.iterator;function OP(t){return t===null||typeof t!="object"?null:(t=Rv&&t[Rv]||t["@@iterator"],typeof t=="function"?t:null)}var fT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pT=Object.assign,mT={};function Xo(t,e,n){this.props=t,this.context=e,this.refs=mT,this.updater=n||fT}Xo.prototype.isReactComponent={};Xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gT(){}gT.prototype=Xo.prototype;function dg(t,e,n){this.props=t,this.context=e,this.refs=mT,this.updater=n||fT}var fg=dg.prototype=new gT;fg.constructor=dg;pT(fg,Xo.prototype);fg.isPureReactComponent=!0;var Cv=Array.isArray,_T=Object.prototype.hasOwnProperty,pg={current:null},yT={key:!0,ref:!0,__self:!0,__source:!0};function vT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_T.call(e,r)&&!yT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xl,type:t,key:s,ref:o,props:i,_owner:pg.current}}function MP(t,e){return{$$typeof:Xl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xl}function VP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Av=/\/+/g;function wf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VP(""+t.key):e.toString(36)}function Sc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xl:case RP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wf(o,0):r,Cv(i)?(n="",t!=null&&(n=t.replace(Av,"$&/")+"/"),Sc(i,e,n,"",function(c){return c})):i!=null&&(mg(i)&&(i=MP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Av,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cv(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+wf(s,a);o+=Sc(s,e,n,u,i)}else if(u=OP(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+wf(s,a++),o+=Sc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ku(t,e,n){if(t==null)return t;var r=[],i=0;return Sc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function FP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},Ic={transition:null},UP={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Ic,ReactCurrentOwner:pg};function ET(){throw Error("act(...) is not supported in production builds of React.")}we.Children={map:Ku,forEach:function(t,e,n){Ku(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ku(t,function(){e++}),e},toArray:function(t){return Ku(t,function(e){return e})||[]},only:function(t){if(!mg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};we.Component=Xo;we.Fragment=CP;we.Profiler=kP;we.PureComponent=dg;we.StrictMode=AP;we.Suspense=DP;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UP;we.act=ET;we.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)_T.call(e,u)&&!yT.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xl,type:t.type,key:i,ref:s,props:r,_owner:o}};we.createContext=function(t){return t={$$typeof:NP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:PP,_context:t},t.Consumer=t};we.createElement=vT;we.createFactory=function(t){var e=vT.bind(null,t);return e.type=t,e};we.createRef=function(){return{current:null}};we.forwardRef=function(t){return{$$typeof:bP,render:t}};we.isValidElement=mg;we.lazy=function(t){return{$$typeof:LP,_payload:{_status:-1,_result:t},_init:FP}};we.memo=function(t,e){return{$$typeof:xP,type:t,compare:e===void 0?null:e}};we.startTransition=function(t){var e=Ic.transition;Ic.transition={};try{t()}finally{Ic.transition=e}};we.unstable_act=ET;we.useCallback=function(t,e){return sn.current.useCallback(t,e)};we.useContext=function(t){return sn.current.useContext(t)};we.useDebugValue=function(){};we.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};we.useEffect=function(t,e){return sn.current.useEffect(t,e)};we.useId=function(){return sn.current.useId()};we.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};we.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};we.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};we.useMemo=function(t,e){return sn.current.useMemo(t,e)};we.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};we.useRef=function(t){return sn.current.useRef(t)};we.useState=function(t){return sn.current.useState(t)};we.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};we.useTransition=function(){return sn.current.useTransition()};we.version="18.3.1";dT.exports=we;var W=dT.exports;const je=cT(W),$P=IP({__proto__:null,default:je},[W]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BP=W,jP=Symbol.for("react.element"),zP=Symbol.for("react.fragment"),WP=Object.prototype.hasOwnProperty,HP=BP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qP={key:!0,ref:!0,__self:!0,__source:!0};function wT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WP.call(e,r)&&!qP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jP,type:t,key:s,ref:o,props:i,_owner:HP.current}}Gh.Fragment=zP;Gh.jsx=wT;Gh.jsxs=wT;hT.exports=Gh;var V=hT.exports,Sp={},TT={exports:{}},kn={},ST={exports:{}},IT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,ae){var J=K.length;K.push(ae);e:for(;0<J;){var re=J-1>>>1,b=K[re];if(0<i(b,ae))K[re]=ae,K[J]=b,J=re;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var ae=K[0],J=K.pop();if(J!==ae){K[0]=J;e:for(var re=0,b=K.length,$=b>>>1;re<$;){var q=2*(re+1)-1,se=K[q],Z=q+1,fe=K[Z];if(0>i(se,J))Z<b&&0>i(fe,se)?(K[re]=fe,K[Z]=J,re=Z):(K[re]=se,K[q]=J,re=q);else if(Z<b&&0>i(fe,J))K[re]=fe,K[Z]=J,re=Z;else break e}}return ae}function i(K,ae){var J=K.sortIndex-ae.sortIndex;return J!==0?J:K.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,v=!1,E=!1,A=!1,P=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(K){for(var ae=n(c);ae!==null;){if(ae.callback===null)r(c);else if(ae.startTime<=K)r(c),ae.sortIndex=ae.expirationTime,e(u,ae);else break;ae=n(c)}}function O(K){if(A=!1,T(K),!E)if(n(u)!==null)E=!0,Et(F);else{var ae=n(c);ae!==null&&pt(O,ae.startTime-K)}}function F(K,ae){E=!1,A&&(A=!1,S(y),y=-1),v=!0;var J=m;try{for(T(ae),f=n(u);f!==null&&(!(f.expirationTime>ae)||K&&!k());){var re=f.callback;if(typeof re=="function"){f.callback=null,m=f.priorityLevel;var b=re(f.expirationTime<=ae);ae=t.unstable_now(),typeof b=="function"?f.callback=b:f===n(u)&&r(u),T(ae)}else r(u);f=n(u)}if(f!==null)var $=!0;else{var q=n(c);q!==null&&pt(O,q.startTime-ae),$=!1}return $}finally{f=null,m=J,v=!1}}var U=!1,w=null,y=-1,I=5,C=-1;function k(){return!(t.unstable_now()-C<I)}function D(){if(w!==null){var K=t.unstable_now();C=K;var ae=!0;try{ae=w(!0,K)}finally{ae?R():(U=!1,w=null)}}else U=!1}var R;if(typeof _=="function")R=function(){_(D)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Jt=$e.port2;$e.port1.onmessage=D,R=function(){Jt.postMessage(null)}}else R=function(){P(D,0)};function Et(K){w=K,U||(U=!0,R())}function pt(K,ae){y=P(function(){K(t.unstable_now())},ae)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){E||v||(E=!0,Et(F))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(K){switch(m){case 1:case 2:case 3:var ae=3;break;default:ae=m}var J=m;m=ae;try{return K()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,ae){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var J=m;m=K;try{return ae()}finally{m=J}},t.unstable_scheduleCallback=function(K,ae,J){var re=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?re+J:re):J=re,K){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=J+b,K={id:d++,callback:ae,priorityLevel:K,startTime:J,expirationTime:b,sortIndex:-1},J>re?(K.sortIndex=J,e(c,K),n(u)===null&&K===n(c)&&(A?(S(y),y=-1):A=!0,pt(O,J-re))):(K.sortIndex=b,e(u,K),E||v||(E=!0,Et(F))),K},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(K){var ae=m;return function(){var J=m;m=ae;try{return K.apply(this,arguments)}finally{m=J}}}})(IT);ST.exports=IT;var GP=ST.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KP=W,An=GP;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var RT=new Set,vl={};function As(t,e){Co(t,e),Co(t+"Capture",e)}function Co(t,e){for(vl[t]=e,t=0;t<e.length;t++)RT.add(e[t])}var Or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ip=Object.prototype.hasOwnProperty,QP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kv={},Pv={};function YP(t){return Ip.call(Pv,t)?!0:Ip.call(kv,t)?!1:QP.test(t)?Pv[t]=!0:(kv[t]=!0,!1)}function XP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JP(t,e,n,r){if(e===null||typeof e>"u"||XP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Mt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Mt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Mt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Mt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Mt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Mt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Mt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Mt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Mt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var gg=/[\-:]([a-z])/g;function _g(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gg,_g);Mt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gg,_g);Mt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gg,_g);Mt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Mt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Mt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Mt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function yg(t,e,n,r){var i=Mt.hasOwnProperty(e)?Mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JP(e,n,i,r)&&(n=null),r||i===null?YP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jr=KP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qu=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),Js=Symbol.for("react.fragment"),vg=Symbol.for("react.strict_mode"),Rp=Symbol.for("react.profiler"),CT=Symbol.for("react.provider"),AT=Symbol.for("react.context"),Eg=Symbol.for("react.forward_ref"),Cp=Symbol.for("react.suspense"),Ap=Symbol.for("react.suspense_list"),wg=Symbol.for("react.memo"),Xr=Symbol.for("react.lazy"),kT=Symbol.for("react.offscreen"),Nv=Symbol.iterator;function Sa(t){return t===null||typeof t!="object"?null:(t=Nv&&t[Nv]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Object.assign,Tf;function Ba(t){if(Tf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tf=e&&e[1]||""}return`
`+Tf+t}var Sf=!1;function If(t,e){if(!t||Sf)return"";Sf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Sf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ba(t):""}function ZP(t){switch(t.tag){case 5:return Ba(t.type);case 16:return Ba("Lazy");case 13:return Ba("Suspense");case 19:return Ba("SuspenseList");case 0:case 2:case 15:return t=If(t.type,!1),t;case 11:return t=If(t.type.render,!1),t;case 1:return t=If(t.type,!0),t;default:return""}}function kp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Js:return"Fragment";case Xs:return"Portal";case Rp:return"Profiler";case vg:return"StrictMode";case Cp:return"Suspense";case Ap:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case AT:return(t.displayName||"Context")+".Consumer";case CT:return(t._context.displayName||"Context")+".Provider";case Eg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wg:return e=t.displayName||null,e!==null?e:kp(t.type)||"Memo";case Xr:e=t._payload,t=t._init;try{return kp(t(e))}catch{}}return null}function eN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kp(e);case 8:return e===vg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ii(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function PT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tN(t){var e=PT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yu(t){t._valueTracker||(t._valueTracker=tN(t))}function NT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=PT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pp(t,e){var n=e.checked;return nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ii(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bT(t,e){e=e.checked,e!=null&&yg(t,"checked",e,!1)}function Np(t,e){bT(t,e);var n=Ii(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bp(t,e.type,n):e.hasOwnProperty("defaultValue")&&bp(t,e.type,Ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bp(t,e,n){(e!=="number"||Wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ja=Array.isArray;function fo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ii(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Dp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(ja(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ii(n)}}function DT(t,e){var n=Ii(e.value),r=Ii(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xu,LT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xu=Xu||document.createElement("div"),Xu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function El(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nN=["Webkit","ms","Moz","O"];Object.keys(Xa).forEach(function(t){nN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xa[e]=Xa[t]})});function OT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xa.hasOwnProperty(t)&&Xa[t]?(""+e).trim():e+"px"}function MT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=OT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rN=nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lp(t,e){if(e){if(rN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function Op(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mp=null;function Tg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vp=null,po=null,mo=null;function Ov(t){if(t=eu(t)){if(typeof Vp!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Jh(e),Vp(t.stateNode,t.type,e))}}function VT(t){po?mo?mo.push(t):mo=[t]:po=t}function FT(){if(po){var t=po,e=mo;if(mo=po=null,Ov(t),e)for(t=0;t<e.length;t++)Ov(e[t])}}function UT(t,e){return t(e)}function $T(){}var Rf=!1;function BT(t,e,n){if(Rf)return t(e,n);Rf=!0;try{return UT(t,e,n)}finally{Rf=!1,(po!==null||mo!==null)&&($T(),FT())}}function wl(t,e){var n=t.stateNode;if(n===null)return null;var r=Jh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var Fp=!1;if(Or)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){Fp=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{Fp=!1}function iN(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ja=!1,Hc=null,qc=!1,Up=null,sN={onError:function(t){Ja=!0,Hc=t}};function oN(t,e,n,r,i,s,o,a,u){Ja=!1,Hc=null,iN.apply(sN,arguments)}function aN(t,e,n,r,i,s,o,a,u){if(oN.apply(this,arguments),Ja){if(Ja){var c=Hc;Ja=!1,Hc=null}else throw Error(H(198));qc||(qc=!0,Up=c)}}function ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mv(t){if(ks(t)!==t)throw Error(H(188))}function lN(t){var e=t.alternate;if(!e){if(e=ks(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Mv(i),t;if(s===r)return Mv(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function zT(t){return t=lN(t),t!==null?WT(t):null}function WT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=WT(t);if(e!==null)return e;t=t.sibling}return null}var HT=An.unstable_scheduleCallback,Vv=An.unstable_cancelCallback,uN=An.unstable_shouldYield,cN=An.unstable_requestPaint,lt=An.unstable_now,hN=An.unstable_getCurrentPriorityLevel,Sg=An.unstable_ImmediatePriority,qT=An.unstable_UserBlockingPriority,Gc=An.unstable_NormalPriority,dN=An.unstable_LowPriority,GT=An.unstable_IdlePriority,Kh=null,cr=null;function fN(t){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(Kh,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:gN,pN=Math.log,mN=Math.LN2;function gN(t){return t>>>=0,t===0?32:31-(pN(t)/mN|0)|0}var Ju=64,Zu=4194304;function za(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=za(a):(s&=o,s!==0&&(r=za(s)))}else o=n&~i,o!==0?r=za(o):s!==0&&(r=za(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xn(e),i=1<<n,r|=t[n],e&=~i;return r}function _N(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=_N(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function $p(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function KT(){var t=Ju;return Ju<<=1,!(Ju&4194240)&&(Ju=64),t}function Cf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function vN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ig(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Le=0;function QT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var YT,Rg,XT,JT,ZT,Bp=!1,ec=[],ci=null,hi=null,di=null,Tl=new Map,Sl=new Map,ei=[],EN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fv(t,e){switch(t){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":Tl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(e.pointerId)}}function Ra(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=eu(e),e!==null&&Rg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wN(t,e,n,r,i){switch(e){case"focusin":return ci=Ra(ci,t,e,n,r,i),!0;case"dragenter":return hi=Ra(hi,t,e,n,r,i),!0;case"mouseover":return di=Ra(di,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Tl.set(s,Ra(Tl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Sl.set(s,Ra(Sl.get(s)||null,t,e,n,r,i)),!0}return!1}function eS(t){var e=Ji(t.target);if(e!==null){var n=ks(e);if(n!==null){if(e=n.tag,e===13){if(e=jT(n),e!==null){t.blockedOn=e,ZT(t.priority,function(){XT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Mp=r,n.target.dispatchEvent(r),Mp=null}else return e=eu(n),e!==null&&Rg(e),t.blockedOn=n,!1;e.shift()}return!0}function Uv(t,e,n){Rc(t)&&n.delete(e)}function TN(){Bp=!1,ci!==null&&Rc(ci)&&(ci=null),hi!==null&&Rc(hi)&&(hi=null),di!==null&&Rc(di)&&(di=null),Tl.forEach(Uv),Sl.forEach(Uv)}function Ca(t,e){t.blockedOn===e&&(t.blockedOn=null,Bp||(Bp=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,TN)))}function Il(t){function e(i){return Ca(i,t)}if(0<ec.length){Ca(ec[0],t);for(var n=1;n<ec.length;n++){var r=ec[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ci!==null&&Ca(ci,t),hi!==null&&Ca(hi,t),di!==null&&Ca(di,t),Tl.forEach(e),Sl.forEach(e),n=0;n<ei.length;n++)r=ei[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ei.length&&(n=ei[0],n.blockedOn===null);)eS(n),n.blockedOn===null&&ei.shift()}var go=jr.ReactCurrentBatchConfig,Qc=!0;function SN(t,e,n,r){var i=Le,s=go.transition;go.transition=null;try{Le=1,Cg(t,e,n,r)}finally{Le=i,go.transition=s}}function IN(t,e,n,r){var i=Le,s=go.transition;go.transition=null;try{Le=4,Cg(t,e,n,r)}finally{Le=i,go.transition=s}}function Cg(t,e,n,r){if(Qc){var i=jp(t,e,n,r);if(i===null)Mf(t,e,r,Yc,n),Fv(t,r);else if(wN(i,t,e,n,r))r.stopPropagation();else if(Fv(t,r),e&4&&-1<EN.indexOf(t)){for(;i!==null;){var s=eu(i);if(s!==null&&YT(s),s=jp(t,e,n,r),s===null&&Mf(t,e,r,Yc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mf(t,e,r,null,n)}}var Yc=null;function jp(t,e,n,r){if(Yc=null,t=Tg(r),t=Ji(t),t!==null)if(e=ks(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yc=t,null}function tS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hN()){case Sg:return 1;case qT:return 4;case Gc:case dN:return 16;case GT:return 536870912;default:return 16}default:return 16}}var oi=null,Ag=null,Cc=null;function nS(){if(Cc)return Cc;var t,e=Ag,n=e.length,r,i="value"in oi?oi.value:oi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Cc=i.slice(t,1<r?1-r:void 0)}function Ac(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tc(){return!0}function $v(){return!1}function Pn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tc:$v,this.isPropagationStopped=$v,this}return nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){},isPersistent:tc}),e}var Jo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kg=Pn(Jo),Zl=nt({},Jo,{view:0,detail:0}),RN=Pn(Zl),Af,kf,Aa,Qh=nt({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Aa&&(Aa&&t.type==="mousemove"?(Af=t.screenX-Aa.screenX,kf=t.screenY-Aa.screenY):kf=Af=0,Aa=t),Af)},movementY:function(t){return"movementY"in t?t.movementY:kf}}),Bv=Pn(Qh),CN=nt({},Qh,{dataTransfer:0}),AN=Pn(CN),kN=nt({},Zl,{relatedTarget:0}),Pf=Pn(kN),PN=nt({},Jo,{animationName:0,elapsedTime:0,pseudoElement:0}),NN=Pn(PN),bN=nt({},Jo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DN=Pn(bN),xN=nt({},Jo,{data:0}),jv=Pn(xN),LN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ON={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MN[t])?!!e[t]:!1}function Pg(){return VN}var FN=nt({},Zl,{key:function(t){if(t.key){var e=LN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ac(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ON[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pg,charCode:function(t){return t.type==="keypress"?Ac(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ac(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),UN=Pn(FN),$N=nt({},Qh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zv=Pn($N),BN=nt({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pg}),jN=Pn(BN),zN=nt({},Jo,{propertyName:0,elapsedTime:0,pseudoElement:0}),WN=Pn(zN),HN=nt({},Qh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qN=Pn(HN),GN=[9,13,27,32],Ng=Or&&"CompositionEvent"in window,Za=null;Or&&"documentMode"in document&&(Za=document.documentMode);var KN=Or&&"TextEvent"in window&&!Za,rS=Or&&(!Ng||Za&&8<Za&&11>=Za),Wv=" ",Hv=!1;function iS(t,e){switch(t){case"keyup":return GN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zs=!1;function QN(t,e){switch(t){case"compositionend":return sS(e);case"keypress":return e.which!==32?null:(Hv=!0,Wv);case"textInput":return t=e.data,t===Wv&&Hv?null:t;default:return null}}function YN(t,e){if(Zs)return t==="compositionend"||!Ng&&iS(t,e)?(t=nS(),Cc=Ag=oi=null,Zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rS&&e.locale!=="ko"?null:e.data;default:return null}}var XN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XN[t.type]:e==="textarea"}function oS(t,e,n,r){VT(r),e=Xc(e,"onChange"),0<e.length&&(n=new kg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var el=null,Rl=null;function JN(t){_S(t,0)}function Yh(t){var e=no(t);if(NT(e))return t}function ZN(t,e){if(t==="change")return e}var aS=!1;if(Or){var Nf;if(Or){var bf="oninput"in document;if(!bf){var Gv=document.createElement("div");Gv.setAttribute("oninput","return;"),bf=typeof Gv.oninput=="function"}Nf=bf}else Nf=!1;aS=Nf&&(!document.documentMode||9<document.documentMode)}function Kv(){el&&(el.detachEvent("onpropertychange",lS),Rl=el=null)}function lS(t){if(t.propertyName==="value"&&Yh(Rl)){var e=[];oS(e,Rl,t,Tg(t)),BT(JN,e)}}function eb(t,e,n){t==="focusin"?(Kv(),el=e,Rl=n,el.attachEvent("onpropertychange",lS)):t==="focusout"&&Kv()}function tb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yh(Rl)}function nb(t,e){if(t==="click")return Yh(e)}function rb(t,e){if(t==="input"||t==="change")return Yh(e)}function ib(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var er=typeof Object.is=="function"?Object.is:ib;function Cl(t,e){if(er(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ip.call(e,i)||!er(t[i],e[i]))return!1}return!0}function Qv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yv(t,e){var n=Qv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qv(n)}}function uS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cS(){for(var t=window,e=Wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wc(t.document)}return e}function bg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sb(t){var e=cS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&uS(n.ownerDocument.documentElement,n)){if(r!==null&&bg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Yv(n,s);var o=Yv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ob=Or&&"documentMode"in document&&11>=document.documentMode,eo=null,zp=null,tl=null,Wp=!1;function Xv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wp||eo==null||eo!==Wc(r)||(r=eo,"selectionStart"in r&&bg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tl&&Cl(tl,r)||(tl=r,r=Xc(zp,"onSelect"),0<r.length&&(e=new kg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=eo)))}function nc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var to={animationend:nc("Animation","AnimationEnd"),animationiteration:nc("Animation","AnimationIteration"),animationstart:nc("Animation","AnimationStart"),transitionend:nc("Transition","TransitionEnd")},Df={},hS={};Or&&(hS=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Xh(t){if(Df[t])return Df[t];if(!to[t])return t;var e=to[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hS)return Df[t]=e[n];return t}var dS=Xh("animationend"),fS=Xh("animationiteration"),pS=Xh("animationstart"),mS=Xh("transitionend"),gS=new Map,Jv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(t,e){gS.set(t,e),As(e,[t])}for(var xf=0;xf<Jv.length;xf++){var Lf=Jv[xf],ab=Lf.toLowerCase(),lb=Lf[0].toUpperCase()+Lf.slice(1);bi(ab,"on"+lb)}bi(dS,"onAnimationEnd");bi(fS,"onAnimationIteration");bi(pS,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(mS,"onTransitionEnd");Co("onMouseEnter",["mouseout","mouseover"]);Co("onMouseLeave",["mouseout","mouseover"]);Co("onPointerEnter",["pointerout","pointerover"]);Co("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ub=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function Zv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aN(r,e,void 0,t),t.currentTarget=null}function _S(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Zv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Zv(i,a,c),s=u}}}if(qc)throw t=Up,qc=!1,Up=null,t}function He(t,e){var n=e[Qp];n===void 0&&(n=e[Qp]=new Set);var r=t+"__bubble";n.has(r)||(yS(e,t,2,!1),n.add(r))}function Of(t,e,n){var r=0;e&&(r|=4),yS(n,t,r,e)}var rc="_reactListening"+Math.random().toString(36).slice(2);function Al(t){if(!t[rc]){t[rc]=!0,RT.forEach(function(n){n!=="selectionchange"&&(ub.has(n)||Of(n,!1,t),Of(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rc]||(e[rc]=!0,Of("selectionchange",!1,e))}}function yS(t,e,n,r){switch(tS(e)){case 1:var i=SN;break;case 4:i=IN;break;default:i=Cg}n=i.bind(null,e,n,t),i=void 0,!Fp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ji(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}BT(function(){var c=s,d=Tg(n),f=[];e:{var m=gS.get(t);if(m!==void 0){var v=kg,E=t;switch(t){case"keypress":if(Ac(n)===0)break e;case"keydown":case"keyup":v=UN;break;case"focusin":E="focus",v=Pf;break;case"focusout":E="blur",v=Pf;break;case"beforeblur":case"afterblur":v=Pf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=AN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=jN;break;case dS:case fS:case pS:v=NN;break;case mS:v=WN;break;case"scroll":v=RN;break;case"wheel":v=qN;break;case"copy":case"cut":case"paste":v=DN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=zv}var A=(e&4)!==0,P=!A&&t==="scroll",S=A?m!==null?m+"Capture":null:m;A=[];for(var _=c,T;_!==null;){T=_;var O=T.stateNode;if(T.tag===5&&O!==null&&(T=O,S!==null&&(O=wl(_,S),O!=null&&A.push(kl(_,O,T)))),P)break;_=_.return}0<A.length&&(m=new v(m,E,null,n,d),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Mp&&(E=n.relatedTarget||n.fromElement)&&(Ji(E)||E[Mr]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(E=n.relatedTarget||n.toElement,v=c,E=E?Ji(E):null,E!==null&&(P=ks(E),E!==P||E.tag!==5&&E.tag!==6)&&(E=null)):(v=null,E=c),v!==E)){if(A=Bv,O="onMouseLeave",S="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(A=zv,O="onPointerLeave",S="onPointerEnter",_="pointer"),P=v==null?m:no(v),T=E==null?m:no(E),m=new A(O,_+"leave",v,n,d),m.target=P,m.relatedTarget=T,O=null,Ji(d)===c&&(A=new A(S,_+"enter",E,n,d),A.target=T,A.relatedTarget=P,O=A),P=O,v&&E)t:{for(A=v,S=E,_=0,T=A;T;T=Hs(T))_++;for(T=0,O=S;O;O=Hs(O))T++;for(;0<_-T;)A=Hs(A),_--;for(;0<T-_;)S=Hs(S),T--;for(;_--;){if(A===S||S!==null&&A===S.alternate)break t;A=Hs(A),S=Hs(S)}A=null}else A=null;v!==null&&e0(f,m,v,A,!1),E!==null&&P!==null&&e0(f,P,E,A,!0)}}e:{if(m=c?no(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var F=ZN;else if(qv(m))if(aS)F=rb;else{F=tb;var U=eb}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=nb);if(F&&(F=F(t,c))){oS(f,F,n,d);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&bp(m,"number",m.value)}switch(U=c?no(c):window,t){case"focusin":(qv(U)||U.contentEditable==="true")&&(eo=U,zp=c,tl=null);break;case"focusout":tl=zp=eo=null;break;case"mousedown":Wp=!0;break;case"contextmenu":case"mouseup":case"dragend":Wp=!1,Xv(f,n,d);break;case"selectionchange":if(ob)break;case"keydown":case"keyup":Xv(f,n,d)}var w;if(Ng)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Zs?iS(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(rS&&n.locale!=="ko"&&(Zs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Zs&&(w=nS()):(oi=d,Ag="value"in oi?oi.value:oi.textContent,Zs=!0)),U=Xc(c,y),0<U.length&&(y=new jv(y,t,null,n,d),f.push({event:y,listeners:U}),w?y.data=w:(w=sS(n),w!==null&&(y.data=w)))),(w=KN?QN(t,n):YN(t,n))&&(c=Xc(c,"onBeforeInput"),0<c.length&&(d=new jv("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}_S(f,e)})}function kl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wl(t,n),s!=null&&r.unshift(kl(t,s,i)),s=wl(t,e),s!=null&&r.push(kl(t,s,i))),t=t.return}return r}function Hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function e0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=wl(n,s),u!=null&&o.unshift(kl(n,u,a))):i||(u=wl(n,s),u!=null&&o.push(kl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cb=/\r\n?/g,hb=/\u0000|\uFFFD/g;function t0(t){return(typeof t=="string"?t:""+t).replace(cb,`
`).replace(hb,"")}function ic(t,e,n){if(e=t0(e),t0(t)!==e&&n)throw Error(H(425))}function Jc(){}var Hp=null,qp=null;function Gp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kp=typeof setTimeout=="function"?setTimeout:void 0,db=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,fb=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(t){return n0.resolve(null).then(t).catch(pb)}:Kp;function pb(t){setTimeout(function(){throw t})}function Vf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Il(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Il(e)}function fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function r0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zo=Math.random().toString(36).slice(2),or="__reactFiber$"+Zo,Pl="__reactProps$"+Zo,Mr="__reactContainer$"+Zo,Qp="__reactEvents$"+Zo,mb="__reactListeners$"+Zo,gb="__reactHandles$"+Zo;function Ji(t){var e=t[or];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mr]||n[or]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=r0(t);t!==null;){if(n=t[or])return n;t=r0(t)}return e}t=n,n=t.parentNode}return null}function eu(t){return t=t[or]||t[Mr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function no(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Jh(t){return t[Pl]||null}var Yp=[],ro=-1;function Di(t){return{current:t}}function Qe(t){0>ro||(t.current=Yp[ro],Yp[ro]=null,ro--)}function Be(t,e){ro++,Yp[ro]=t.current,t.current=e}var Ri={},Qt=Di(Ri),dn=Di(!1),as=Ri;function Ao(t,e){var n=t.type.contextTypes;if(!n)return Ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function fn(t){return t=t.childContextTypes,t!=null}function Zc(){Qe(dn),Qe(Qt)}function i0(t,e,n){if(Qt.current!==Ri)throw Error(H(168));Be(Qt,e),Be(dn,n)}function vS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,eN(t)||"Unknown",i));return nt({},n,r)}function eh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ri,as=Qt.current,Be(Qt,t),Be(dn,dn.current),!0}function s0(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=vS(t,e,as),r.__reactInternalMemoizedMergedChildContext=t,Qe(dn),Qe(Qt),Be(Qt,t)):Qe(dn),Be(dn,n)}var Rr=null,Zh=!1,Ff=!1;function ES(t){Rr===null?Rr=[t]:Rr.push(t)}function _b(t){Zh=!0,ES(t)}function xi(){if(!Ff&&Rr!==null){Ff=!0;var t=0,e=Le;try{var n=Rr;for(Le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rr=null,Zh=!1}catch(i){throw Rr!==null&&(Rr=Rr.slice(t+1)),HT(Sg,xi),i}finally{Le=e,Ff=!1}}return null}var io=[],so=0,th=null,nh=0,Nn=[],bn=0,ls=null,Cr=1,Ar="";function qi(t,e){io[so++]=nh,io[so++]=th,th=t,nh=e}function wS(t,e,n){Nn[bn++]=Cr,Nn[bn++]=Ar,Nn[bn++]=ls,ls=t;var r=Cr;t=Ar;var i=32-Xn(r)-1;r&=~(1<<i),n+=1;var s=32-Xn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cr=1<<32-Xn(e)+i|n<<i|r,Ar=s+t}else Cr=1<<s|n<<i|r,Ar=t}function Dg(t){t.return!==null&&(qi(t,1),wS(t,1,0))}function xg(t){for(;t===th;)th=io[--so],io[so]=null,nh=io[--so],io[so]=null;for(;t===ls;)ls=Nn[--bn],Nn[bn]=null,Ar=Nn[--bn],Nn[bn]=null,Cr=Nn[--bn],Nn[bn]=null}var Sn=null,wn=null,Je=!1,Kn=null;function TS(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function o0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,wn=fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ls!==null?{id:Cr,overflow:Ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,wn=null,!0):!1;default:return!1}}function Xp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jp(t){if(Je){var e=wn;if(e){var n=e;if(!o0(t,e)){if(Xp(t))throw Error(H(418));e=fi(n.nextSibling);var r=Sn;e&&o0(t,e)?TS(r,n):(t.flags=t.flags&-4097|2,Je=!1,Sn=t)}}else{if(Xp(t))throw Error(H(418));t.flags=t.flags&-4097|2,Je=!1,Sn=t}}}function a0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function sc(t){if(t!==Sn)return!1;if(!Je)return a0(t),Je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gp(t.type,t.memoizedProps)),e&&(e=wn)){if(Xp(t))throw SS(),Error(H(418));for(;e;)TS(t,e),e=fi(e.nextSibling)}if(a0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Sn?fi(t.stateNode.nextSibling):null;return!0}function SS(){for(var t=wn;t;)t=fi(t.nextSibling)}function ko(){wn=Sn=null,Je=!1}function Lg(t){Kn===null?Kn=[t]:Kn.push(t)}var yb=jr.ReactCurrentBatchConfig;function ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function oc(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function l0(t){var e=t._init;return e(t._payload)}function IS(t){function e(S,_){if(t){var T=S.deletions;T===null?(S.deletions=[_],S.flags|=16):T.push(_)}}function n(S,_){if(!t)return null;for(;_!==null;)e(S,_),_=_.sibling;return null}function r(S,_){for(S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function i(S,_){return S=_i(S,_),S.index=0,S.sibling=null,S}function s(S,_,T){return S.index=T,t?(T=S.alternate,T!==null?(T=T.index,T<_?(S.flags|=2,_):T):(S.flags|=2,_)):(S.flags|=1048576,_)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,_,T,O){return _===null||_.tag!==6?(_=Hf(T,S.mode,O),_.return=S,_):(_=i(_,T),_.return=S,_)}function u(S,_,T,O){var F=T.type;return F===Js?d(S,_,T.props.children,O,T.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Xr&&l0(F)===_.type)?(O=i(_,T.props),O.ref=ka(S,_,T),O.return=S,O):(O=Lc(T.type,T.key,T.props,null,S.mode,O),O.ref=ka(S,_,T),O.return=S,O)}function c(S,_,T,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=qf(T,S.mode,O),_.return=S,_):(_=i(_,T.children||[]),_.return=S,_)}function d(S,_,T,O,F){return _===null||_.tag!==7?(_=ss(T,S.mode,O,F),_.return=S,_):(_=i(_,T),_.return=S,_)}function f(S,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Hf(""+_,S.mode,T),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qu:return T=Lc(_.type,_.key,_.props,null,S.mode,T),T.ref=ka(S,null,_),T.return=S,T;case Xs:return _=qf(_,S.mode,T),_.return=S,_;case Xr:var O=_._init;return f(S,O(_._payload),T)}if(ja(_)||Sa(_))return _=ss(_,S.mode,T,null),_.return=S,_;oc(S,_)}return null}function m(S,_,T,O){var F=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return F!==null?null:a(S,_,""+T,O);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Qu:return T.key===F?u(S,_,T,O):null;case Xs:return T.key===F?c(S,_,T,O):null;case Xr:return F=T._init,m(S,_,F(T._payload),O)}if(ja(T)||Sa(T))return F!==null?null:d(S,_,T,O,null);oc(S,T)}return null}function v(S,_,T,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(T)||null,a(_,S,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Qu:return S=S.get(O.key===null?T:O.key)||null,u(_,S,O,F);case Xs:return S=S.get(O.key===null?T:O.key)||null,c(_,S,O,F);case Xr:var U=O._init;return v(S,_,T,U(O._payload),F)}if(ja(O)||Sa(O))return S=S.get(T)||null,d(_,S,O,F,null);oc(_,O)}return null}function E(S,_,T,O){for(var F=null,U=null,w=_,y=_=0,I=null;w!==null&&y<T.length;y++){w.index>y?(I=w,w=null):I=w.sibling;var C=m(S,w,T[y],O);if(C===null){w===null&&(w=I);break}t&&w&&C.alternate===null&&e(S,w),_=s(C,_,y),U===null?F=C:U.sibling=C,U=C,w=I}if(y===T.length)return n(S,w),Je&&qi(S,y),F;if(w===null){for(;y<T.length;y++)w=f(S,T[y],O),w!==null&&(_=s(w,_,y),U===null?F=w:U.sibling=w,U=w);return Je&&qi(S,y),F}for(w=r(S,w);y<T.length;y++)I=v(w,S,y,T[y],O),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?y:I.key),_=s(I,_,y),U===null?F=I:U.sibling=I,U=I);return t&&w.forEach(function(k){return e(S,k)}),Je&&qi(S,y),F}function A(S,_,T,O){var F=Sa(T);if(typeof F!="function")throw Error(H(150));if(T=F.call(T),T==null)throw Error(H(151));for(var U=F=null,w=_,y=_=0,I=null,C=T.next();w!==null&&!C.done;y++,C=T.next()){w.index>y?(I=w,w=null):I=w.sibling;var k=m(S,w,C.value,O);if(k===null){w===null&&(w=I);break}t&&w&&k.alternate===null&&e(S,w),_=s(k,_,y),U===null?F=k:U.sibling=k,U=k,w=I}if(C.done)return n(S,w),Je&&qi(S,y),F;if(w===null){for(;!C.done;y++,C=T.next())C=f(S,C.value,O),C!==null&&(_=s(C,_,y),U===null?F=C:U.sibling=C,U=C);return Je&&qi(S,y),F}for(w=r(S,w);!C.done;y++,C=T.next())C=v(w,S,y,C.value,O),C!==null&&(t&&C.alternate!==null&&w.delete(C.key===null?y:C.key),_=s(C,_,y),U===null?F=C:U.sibling=C,U=C);return t&&w.forEach(function(D){return e(S,D)}),Je&&qi(S,y),F}function P(S,_,T,O){if(typeof T=="object"&&T!==null&&T.type===Js&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Qu:e:{for(var F=T.key,U=_;U!==null;){if(U.key===F){if(F=T.type,F===Js){if(U.tag===7){n(S,U.sibling),_=i(U,T.props.children),_.return=S,S=_;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Xr&&l0(F)===U.type){n(S,U.sibling),_=i(U,T.props),_.ref=ka(S,U,T),_.return=S,S=_;break e}n(S,U);break}else e(S,U);U=U.sibling}T.type===Js?(_=ss(T.props.children,S.mode,O,T.key),_.return=S,S=_):(O=Lc(T.type,T.key,T.props,null,S.mode,O),O.ref=ka(S,_,T),O.return=S,S=O)}return o(S);case Xs:e:{for(U=T.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(S,_.sibling),_=i(_,T.children||[]),_.return=S,S=_;break e}else{n(S,_);break}else e(S,_);_=_.sibling}_=qf(T,S.mode,O),_.return=S,S=_}return o(S);case Xr:return U=T._init,P(S,_,U(T._payload),O)}if(ja(T))return E(S,_,T,O);if(Sa(T))return A(S,_,T,O);oc(S,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(S,_.sibling),_=i(_,T),_.return=S,S=_):(n(S,_),_=Hf(T,S.mode,O),_.return=S,S=_),o(S)):n(S,_)}return P}var Po=IS(!0),RS=IS(!1),rh=Di(null),ih=null,oo=null,Og=null;function Mg(){Og=oo=ih=null}function Vg(t){var e=rh.current;Qe(rh),t._currentValue=e}function Zp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _o(t,e){ih=t,Og=oo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Mn(t){var e=t._currentValue;if(Og!==t)if(t={context:t,memoizedValue:e,next:null},oo===null){if(ih===null)throw Error(H(308));oo=t,ih.dependencies={lanes:0,firstContext:t}}else oo=oo.next=t;return e}var Zi=null;function Fg(t){Zi===null?Zi=[t]:Zi.push(t)}function CS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vr(t,r)}function Vr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jr=!1;function Ug(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function AS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vr(t,n)}return i=r.interleaved,i===null?(e.next=e,Fg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vr(t,n)}function kc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ig(t,n)}}function u0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sh(t,e,n,r){var i=t.updateQueue;Jr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,A=a;switch(m=e,v=n,A.tag){case 1:if(E=A.payload,typeof E=="function"){f=E.call(v,f,m);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=A.payload,m=typeof E=="function"?E.call(v,f,m):E,m==null)break e;f=nt({},f,m);break e;case 2:Jr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,u=f):d=d.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=f}}function c0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var tu={},hr=Di(tu),Nl=Di(tu),bl=Di(tu);function es(t){if(t===tu)throw Error(H(174));return t}function $g(t,e){switch(Be(bl,e),Be(Nl,t),Be(hr,tu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xp(e,t)}Qe(hr),Be(hr,e)}function No(){Qe(hr),Qe(Nl),Qe(bl)}function kS(t){es(bl.current);var e=es(hr.current),n=xp(e,t.type);e!==n&&(Be(Nl,t),Be(hr,n))}function Bg(t){Nl.current===t&&(Qe(hr),Qe(Nl))}var et=Di(0);function oh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uf=[];function jg(){for(var t=0;t<Uf.length;t++)Uf[t]._workInProgressVersionPrimary=null;Uf.length=0}var Pc=jr.ReactCurrentDispatcher,$f=jr.ReactCurrentBatchConfig,us=0,tt=null,gt=null,Rt=null,ah=!1,nl=!1,Dl=0,vb=0;function $t(){throw Error(H(321))}function zg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!er(t[n],e[n]))return!1;return!0}function Wg(t,e,n,r,i,s){if(us=s,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pc.current=t===null||t.memoizedState===null?Sb:Ib,t=n(r,i),nl){s=0;do{if(nl=!1,Dl=0,25<=s)throw Error(H(301));s+=1,Rt=gt=null,e.updateQueue=null,Pc.current=Rb,t=n(r,i)}while(nl)}if(Pc.current=lh,e=gt!==null&&gt.next!==null,us=0,Rt=gt=tt=null,ah=!1,e)throw Error(H(300));return t}function Hg(){var t=Dl!==0;return Dl=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?tt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Vn(){if(gt===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=Rt===null?tt.memoizedState:Rt.next;if(e!==null)Rt=e,gt=t;else{if(t===null)throw Error(H(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Rt===null?tt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function xl(t,e){return typeof e=="function"?e(t):e}function Bf(t){var e=Vn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=gt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((us&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,tt.lanes|=d,cs|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,er(r,e.memoizedState)||(cn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,tt.lanes|=s,cs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jf(t){var e=Vn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);er(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function PS(){}function NS(t,e){var n=tt,r=Vn(),i=e(),s=!er(r.memoizedState,i);if(s&&(r.memoizedState=i,cn=!0),r=r.queue,qg(xS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Ll(9,DS.bind(null,n,r,i,e),void 0,null),kt===null)throw Error(H(349));us&30||bS(n,e,i)}return i}function bS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function DS(t,e,n,r){e.value=n,e.getSnapshot=r,LS(e)&&OS(t)}function xS(t,e,n){return n(function(){LS(e)&&OS(t)})}function LS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!er(t,n)}catch{return!0}}function OS(t){var e=Vr(t,1);e!==null&&Jn(e,t,1,-1)}function h0(t){var e=sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:t},e.queue=t,t=t.dispatch=Tb.bind(null,tt,t),[e.memoizedState,t]}function Ll(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function MS(){return Vn().memoizedState}function Nc(t,e,n,r){var i=sr();tt.flags|=t,i.memoizedState=Ll(1|e,n,void 0,r===void 0?null:r)}function ed(t,e,n,r){var i=Vn();r=r===void 0?null:r;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,r!==null&&zg(r,o.deps)){i.memoizedState=Ll(e,n,s,r);return}}tt.flags|=t,i.memoizedState=Ll(1|e,n,s,r)}function d0(t,e){return Nc(8390656,8,t,e)}function qg(t,e){return ed(2048,8,t,e)}function VS(t,e){return ed(4,2,t,e)}function FS(t,e){return ed(4,4,t,e)}function US(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $S(t,e,n){return n=n!=null?n.concat([t]):null,ed(4,4,US.bind(null,e,t),n)}function Gg(){}function BS(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function jS(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zS(t,e,n){return us&21?(er(n,e)||(n=KT(),tt.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function Eb(t,e){var n=Le;Le=n!==0&&4>n?n:4,t(!0);var r=$f.transition;$f.transition={};try{t(!1),e()}finally{Le=n,$f.transition=r}}function WS(){return Vn().memoizedState}function wb(t,e,n){var r=gi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},HS(t))qS(e,n);else if(n=CS(t,e,n,r),n!==null){var i=rn();Jn(n,t,r,i),GS(n,e,r)}}function Tb(t,e,n){var r=gi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(HS(t))qS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,er(a,o)){var u=e.interleaved;u===null?(i.next=i,Fg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=CS(t,e,i,r),n!==null&&(i=rn(),Jn(n,t,r,i),GS(n,e,r))}}function HS(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function qS(t,e){nl=ah=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function GS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ig(t,n)}}var lh={readContext:Mn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},Sb={readContext:Mn,useCallback:function(t,e){return sr().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:d0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4194308,4,US.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nc(4,2,t,e)},useMemo:function(t,e){var n=sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wb.bind(null,tt,t),[r.memoizedState,t]},useRef:function(t){var e=sr();return t={current:t},e.memoizedState=t},useState:h0,useDebugValue:Gg,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=h0(!1),e=t[0];return t=Eb.bind(null,t[1]),sr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=tt,i=sr();if(Je){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),kt===null)throw Error(H(349));us&30||bS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,d0(xS.bind(null,r,s,t),[t]),r.flags|=2048,Ll(9,DS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sr(),e=kt.identifierPrefix;if(Je){var n=Ar,r=Cr;n=(r&~(1<<32-Xn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Dl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ib={readContext:Mn,useCallback:BS,useContext:Mn,useEffect:qg,useImperativeHandle:$S,useInsertionEffect:VS,useLayoutEffect:FS,useMemo:jS,useReducer:Bf,useRef:MS,useState:function(){return Bf(xl)},useDebugValue:Gg,useDeferredValue:function(t){var e=Vn();return zS(e,gt.memoizedState,t)},useTransition:function(){var t=Bf(xl)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:PS,useSyncExternalStore:NS,useId:WS,unstable_isNewReconciler:!1},Rb={readContext:Mn,useCallback:BS,useContext:Mn,useEffect:qg,useImperativeHandle:$S,useInsertionEffect:VS,useLayoutEffect:FS,useMemo:jS,useReducer:jf,useRef:MS,useState:function(){return jf(xl)},useDebugValue:Gg,useDeferredValue:function(t){var e=Vn();return gt===null?e.memoizedState=t:zS(e,gt.memoizedState,t)},useTransition:function(){var t=jf(xl)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:PS,useSyncExternalStore:NS,useId:WS,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function em(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var td={isMounted:function(t){return(t=t._reactInternals)?ks(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rn(),i=gi(t),s=Dr(r,i);s.payload=e,n!=null&&(s.callback=n),e=pi(t,s,i),e!==null&&(Jn(e,t,i,r),kc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rn(),i=gi(t),s=Dr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pi(t,s,i),e!==null&&(Jn(e,t,i,r),kc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),r=gi(t),i=Dr(n,r);i.tag=2,e!=null&&(i.callback=e),e=pi(t,i,r),e!==null&&(Jn(e,t,r,n),kc(e,t,r))}};function f0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Cl(n,r)||!Cl(i,s):!0}function KS(t,e,n){var r=!1,i=Ri,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(i=fn(e)?as:Qt.current,r=e.contextTypes,s=(r=r!=null)?Ao(t,i):Ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=td,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function p0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&td.enqueueReplaceState(e,e.state,null)}function tm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ug(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mn(s):(s=fn(e)?as:Qt.current,i.context=Ao(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(em(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&td.enqueueReplaceState(i,i.state,null),sh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bo(t,e){try{var n="",r=e;do n+=ZP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cb=typeof WeakMap=="function"?WeakMap:Map;function QS(t,e,n){n=Dr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ch||(ch=!0,dm=r),nm(t,e)},n}function YS(t,e,n){n=Dr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){nm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nm(t,e),typeof r!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function m0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Cb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$b.bind(null,t,e,n),e.then(t,t))}function g0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dr(-1,1),e.tag=2,pi(n,e,1))),n.lanes|=1),t)}var Ab=jr.ReactCurrentOwner,cn=!1;function nn(t,e,n,r){e.child=t===null?RS(e,null,n,r):Po(e,t.child,n,r)}function y0(t,e,n,r,i){n=n.render;var s=e.ref;return _o(e,i),r=Wg(t,e,n,r,s,i),n=Hg(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fr(t,e,i)):(Je&&n&&Dg(e),e.flags|=1,nn(t,e,r,i),e.child)}function v0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!t_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,XS(t,e,s,r,i)):(t=Lc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Cl,n(o,r)&&t.ref===e.ref)return Fr(t,e,i)}return e.flags|=1,t=_i(s,r),t.ref=e.ref,t.return=e,e.child=t}function XS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Cl(s,r)&&t.ref===e.ref)if(cn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Fr(t,e,i)}return rm(t,e,n,r,i)}function JS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(lo,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Be(lo,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Be(lo,En),En|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Be(lo,En),En|=r;return nn(t,e,i,n),e.child}function ZS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rm(t,e,n,r,i){var s=fn(n)?as:Qt.current;return s=Ao(e,s),_o(e,i),n=Wg(t,e,n,r,s,i),r=Hg(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fr(t,e,i)):(Je&&r&&Dg(e),e.flags|=1,nn(t,e,n,i),e.child)}function E0(t,e,n,r,i){if(fn(n)){var s=!0;eh(e)}else s=!1;if(_o(e,i),e.stateNode===null)bc(t,e),KS(e,n,r),tm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Mn(c):(c=fn(n)?as:Qt.current,c=Ao(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&p0(e,o,r,c),Jr=!1;var m=e.memoizedState;o.state=m,sh(e,r,o,i),u=e.memoizedState,a!==r||m!==u||dn.current||Jr?(typeof d=="function"&&(em(e,n,d,r),u=e.memoizedState),(a=Jr||f0(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,AS(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:qn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mn(u):(u=fn(n)?as:Qt.current,u=Ao(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&p0(e,o,r,u),Jr=!1,m=e.memoizedState,o.state=m,sh(e,r,o,i);var E=e.memoizedState;a!==f||m!==E||dn.current||Jr?(typeof v=="function"&&(em(e,n,v,r),E=e.memoizedState),(c=Jr||f0(e,n,c,r,m,E,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return im(t,e,n,r,s,i)}function im(t,e,n,r,i,s){ZS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&s0(e,n,!1),Fr(t,e,s);r=e.stateNode,Ab.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Po(e,t.child,null,s),e.child=Po(e,null,a,s)):nn(t,e,a,s),e.memoizedState=r.state,i&&s0(e,n,!0),e.child}function eI(t){var e=t.stateNode;e.pendingContext?i0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&i0(t,e.context,!1),$g(t,e.containerInfo)}function w0(t,e,n,r,i){return ko(),Lg(i),e.flags|=256,nn(t,e,n,r),e.child}var sm={dehydrated:null,treeContext:null,retryLane:0};function om(t){return{baseLanes:t,cachePool:null,transitions:null}}function tI(t,e,n){var r=e.pendingProps,i=et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Be(et,i&1),t===null)return Jp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=id(o,r,0,null),t=ss(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=om(n),e.memoizedState=sm,t):Kg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_i(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=_i(a,s):(s=ss(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?om(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sm,r}return s=t.child,t=s.sibling,r=_i(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Kg(t,e){return e=id({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ac(t,e,n,r){return r!==null&&Lg(r),Po(e,t.child,null,n),t=Kg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zf(Error(H(422))),ac(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=id({mode:"visible",children:r.children},i,0,null),s=ss(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Po(e,t.child,null,o),e.child.memoizedState=om(o),e.memoizedState=sm,s);if(!(e.mode&1))return ac(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=zf(s,r,void 0),ac(t,e,o,r)}if(a=(o&t.childLanes)!==0,cn||a){if(r=kt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vr(t,i),Jn(r,t,i,-1))}return e_(),r=zf(Error(H(421))),ac(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Bb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wn=fi(i.nextSibling),Sn=e,Je=!0,Kn=null,t!==null&&(Nn[bn++]=Cr,Nn[bn++]=Ar,Nn[bn++]=ls,Cr=t.id,Ar=t.overflow,ls=e),e=Kg(e,r.children),e.flags|=4096,e)}function T0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zp(t.return,e,n)}function Wf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nn(t,e,r.children,n),r=et.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,n,e);else if(t.tag===19)T0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Be(et,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&oh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&oh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wf(e,!0,n,null,s);break;case"together":Wf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=_i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Pb(t,e,n){switch(e.tag){case 3:eI(e),ko();break;case 5:kS(e);break;case 1:fn(e.type)&&eh(e);break;case 4:$g(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Be(rh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Be(et,et.current&1),e.flags|=128,null):n&e.child.childLanes?tI(t,e,n):(Be(et,et.current&1),t=Fr(t,e,n),t!==null?t.sibling:null);Be(et,et.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return nI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Be(et,et.current),r)break;return null;case 22:case 23:return e.lanes=0,JS(t,e,n)}return Fr(t,e,n)}var rI,am,iI,sI;rI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};am=function(){};iI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,es(hr.current);var s=null;switch(n){case"input":i=Pp(t,i),r=Pp(t,r),s=[];break;case"select":i=nt({},i,{value:void 0}),r=nt({},r,{value:void 0}),s=[];break;case"textarea":i=Dp(t,i),r=Dp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jc)}Lp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&He("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};sI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pa(t,e){if(!Je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Nb(t,e,n){var r=e.pendingProps;switch(xg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return fn(e.type)&&Zc(),Bt(e),null;case 3:return r=e.stateNode,No(),Qe(dn),Qe(Qt),jg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(mm(Kn),Kn=null))),am(t,e),Bt(e),null;case 5:Bg(e);var i=es(bl.current);if(n=e.type,t!==null&&e.stateNode!=null)iI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Bt(e),null}if(t=es(hr.current),sc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[or]=e,r[Pl]=s,t=(e.mode&1)!==0,n){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(i=0;i<Wa.length;i++)He(Wa[i],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":bv(r,s),He("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},He("invalid",r);break;case"textarea":xv(r,s),He("invalid",r)}Lp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ic(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ic(r.textContent,a,t),i=["children",""+a]):vl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&He("scroll",r)}switch(n){case"input":Yu(r),Dv(r,s,!0);break;case"textarea":Yu(r),Lv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Jc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[or]=e,t[Pl]=r,rI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Op(n,r),n){case"dialog":He("cancel",t),He("close",t),i=r;break;case"iframe":case"object":case"embed":He("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wa.length;i++)He(Wa[i],t);i=r;break;case"source":He("error",t),i=r;break;case"img":case"image":case"link":He("error",t),He("load",t),i=r;break;case"details":He("toggle",t),i=r;break;case"input":bv(t,r),i=Pp(t,r),He("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=nt({},r,{value:void 0}),He("invalid",t);break;case"textarea":xv(t,r),i=Dp(t,r),He("invalid",t);break;default:i=r}Lp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?MT(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&LT(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&El(t,u):typeof u=="number"&&El(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&He("scroll",t):u!=null&&yg(t,s,u,o))}switch(n){case"input":Yu(t),Dv(t,r,!1);break;case"textarea":Yu(t),Lv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ii(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fo(t,!!r.multiple,s,!1):r.defaultValue!=null&&fo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Jc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)sI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=es(bl.current),es(hr.current),sc(e)){if(r=e.stateNode,n=e.memoizedProps,r[or]=e,(s=r.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:ic(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ic(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[or]=e,e.stateNode=r}return Bt(e),null;case 13:if(Qe(et),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Je&&wn!==null&&e.mode&1&&!(e.flags&128))SS(),ko(),e.flags|=98560,s=!1;else if(s=sc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[or]=e}else ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Kn!==null&&(mm(Kn),Kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||et.current&1?yt===0&&(yt=3):e_())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return No(),am(t,e),t===null&&Al(e.stateNode.containerInfo),Bt(e),null;case 10:return Vg(e.type._context),Bt(e),null;case 17:return fn(e.type)&&Zc(),Bt(e),null;case 19:if(Qe(et),s=e.memoizedState,s===null)return Bt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Pa(s,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=oh(t),o!==null){for(e.flags|=128,Pa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Be(et,et.current&1|2),e.child}t=t.sibling}s.tail!==null&&lt()>Do&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304)}else{if(!r)if(t=oh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Je)return Bt(e),null}else 2*lt()-s.renderingStartTime>Do&&n!==1073741824&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=lt(),e.sibling=null,n=et.current,Be(et,r?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Zg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?En&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function bb(t,e){switch(xg(e),e.tag){case 1:return fn(e.type)&&Zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return No(),Qe(dn),Qe(Qt),jg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bg(e),null;case 13:if(Qe(et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qe(et),null;case 4:return No(),null;case 10:return Vg(e.type._context),null;case 22:case 23:return Zg(),null;case 24:return null;default:return null}}var lc=!1,Wt=!1,Db=typeof WeakSet=="function"?WeakSet:Set,te=null;function ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){st(t,e,r)}else n.current=null}function lm(t,e,n){try{n()}catch(r){st(t,e,r)}}var S0=!1;function xb(t,e){if(Hp=Qc,t=cS(),bg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(qp={focusedElem:t,selectionRange:n},Qc=!1,te=e;te!==null;)if(e=te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,te=t;else for(;te!==null;){e=te;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var A=E.memoizedProps,P=E.memoizedState,S=e.stateNode,_=S.getSnapshotBeforeUpdate(e.elementType===e.type?A:qn(e.type,A),P);S.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(O){st(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}return E=S0,S0=!1,E}function rl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&lm(e,n,s)}i=i.next}while(i!==r)}}function nd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function um(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function oI(t){var e=t.alternate;e!==null&&(t.alternate=null,oI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[or],delete e[Pl],delete e[Qp],delete e[mb],delete e[gb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function aI(t){return t.tag===5||t.tag===3||t.tag===4}function I0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||aI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jc));else if(r!==4&&(t=t.child,t!==null))for(cm(t,e,n),t=t.sibling;t!==null;)cm(t,e,n),t=t.sibling}function hm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(hm(t,e,n),t=t.sibling;t!==null;)hm(t,e,n),t=t.sibling}var bt=null,Gn=!1;function Qr(t,e,n){for(n=n.child;n!==null;)lI(t,e,n),n=n.sibling}function lI(t,e,n){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(Kh,n)}catch{}switch(n.tag){case 5:Wt||ao(n,e);case 6:var r=bt,i=Gn;bt=null,Qr(t,e,n),bt=r,Gn=i,bt!==null&&(Gn?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(Gn?(t=bt,n=n.stateNode,t.nodeType===8?Vf(t.parentNode,n):t.nodeType===1&&Vf(t,n),Il(t)):Vf(bt,n.stateNode));break;case 4:r=bt,i=Gn,bt=n.stateNode.containerInfo,Gn=!0,Qr(t,e,n),bt=r,Gn=i;break;case 0:case 11:case 14:case 15:if(!Wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lm(n,e,o),i=i.next}while(i!==r)}Qr(t,e,n);break;case 1:if(!Wt&&(ao(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){st(n,e,a)}Qr(t,e,n);break;case 21:Qr(t,e,n);break;case 22:n.mode&1?(Wt=(r=Wt)||n.memoizedState!==null,Qr(t,e,n),Wt=r):Qr(t,e,n);break;default:Qr(t,e,n)}}function R0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Db),e.forEach(function(r){var i=jb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:bt=a.stateNode,Gn=!1;break e;case 3:bt=a.stateNode.containerInfo,Gn=!0;break e;case 4:bt=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(bt===null)throw Error(H(160));lI(s,o,i),bt=null,Gn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){st(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uI(e,t),e=e.sibling}function uI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),ir(t),r&4){try{rl(3,t,t.return),nd(3,t)}catch(A){st(t,t.return,A)}try{rl(5,t,t.return)}catch(A){st(t,t.return,A)}}break;case 1:Wn(e,t),ir(t),r&512&&n!==null&&ao(n,n.return);break;case 5:if(Wn(e,t),ir(t),r&512&&n!==null&&ao(n,n.return),t.flags&32){var i=t.stateNode;try{El(i,"")}catch(A){st(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&bT(i,s),Op(a,o);var c=Op(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?MT(i,f):d==="dangerouslySetInnerHTML"?LT(i,f):d==="children"?El(i,f):yg(i,d,f,c)}switch(a){case"input":Np(i,s);break;case"textarea":DT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?fo(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?fo(i,!!s.multiple,s.defaultValue,!0):fo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Pl]=s}catch(A){st(t,t.return,A)}}break;case 6:if(Wn(e,t),ir(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){st(t,t.return,A)}}break;case 3:if(Wn(e,t),ir(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Il(e.containerInfo)}catch(A){st(t,t.return,A)}break;case 4:Wn(e,t),ir(t);break;case 13:Wn(e,t),ir(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xg=lt())),r&4&&R0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||d,Wn(e,t),Wt=c):Wn(e,t),ir(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(te=t,d=t.child;d!==null;){for(f=te=d;te!==null;){switch(m=te,v=m.child,m.tag){case 0:case 11:case 14:case 15:rl(4,m,m.return);break;case 1:ao(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(A){st(r,n,A)}}break;case 5:ao(m,m.return);break;case 22:if(m.memoizedState!==null){A0(f);continue}}v!==null?(v.return=m,te=v):A0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=OT("display",o))}catch(A){st(t,t.return,A)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){st(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Wn(e,t),ir(t),r&4&&R0(t);break;case 21:break;default:Wn(e,t),ir(t)}}function ir(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(aI(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(El(i,""),r.flags&=-33);var s=I0(t);hm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=I0(t);cm(t,a,o);break;default:throw Error(H(161))}}catch(u){st(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lb(t,e,n){te=t,cI(t)}function cI(t,e,n){for(var r=(t.mode&1)!==0;te!==null;){var i=te,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||lc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Wt;a=lc;var c=Wt;if(lc=o,(Wt=u)&&!c)for(te=i;te!==null;)o=te,u=o.child,o.tag===22&&o.memoizedState!==null?k0(i):u!==null?(u.return=o,te=u):k0(i);for(;s!==null;)te=s,cI(s),s=s.sibling;te=i,lc=a,Wt=c}C0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,te=s):C0(t)}}function C0(t){for(;te!==null;){var e=te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||nd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&c0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}c0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Il(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Wt||e.flags&512&&um(e)}catch(m){st(e,e.return,m)}}if(e===t){te=null;break}if(n=e.sibling,n!==null){n.return=e.return,te=n;break}te=e.return}}function A0(t){for(;te!==null;){var e=te;if(e===t){te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,te=n;break}te=e.return}}function k0(t){for(;te!==null;){var e=te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nd(4,e)}catch(u){st(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){st(e,i,u)}}var s=e.return;try{um(e)}catch(u){st(e,s,u)}break;case 5:var o=e.return;try{um(e)}catch(u){st(e,o,u)}}}catch(u){st(e,e.return,u)}if(e===t){te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,te=a;break}te=e.return}}var Ob=Math.ceil,uh=jr.ReactCurrentDispatcher,Qg=jr.ReactCurrentOwner,Ln=jr.ReactCurrentBatchConfig,ke=0,kt=null,ht=null,Lt=0,En=0,lo=Di(0),yt=0,Ol=null,cs=0,rd=0,Yg=0,il=null,ln=null,Xg=0,Do=1/0,Ir=null,ch=!1,dm=null,mi=null,uc=!1,ai=null,hh=0,sl=0,fm=null,Dc=-1,xc=0;function rn(){return ke&6?lt():Dc!==-1?Dc:Dc=lt()}function gi(t){return t.mode&1?ke&2&&Lt!==0?Lt&-Lt:yb.transition!==null?(xc===0&&(xc=KT()),xc):(t=Le,t!==0||(t=window.event,t=t===void 0?16:tS(t.type)),t):1}function Jn(t,e,n,r){if(50<sl)throw sl=0,fm=null,Error(H(185));Jl(t,n,r),(!(ke&2)||t!==kt)&&(t===kt&&(!(ke&2)&&(rd|=n),yt===4&&ti(t,Lt)),pn(t,r),n===1&&ke===0&&!(e.mode&1)&&(Do=lt()+500,Zh&&xi()))}function pn(t,e){var n=t.callbackNode;yN(t,e);var r=Kc(t,t===kt?Lt:0);if(r===0)n!==null&&Vv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vv(n),e===1)t.tag===0?_b(P0.bind(null,t)):ES(P0.bind(null,t)),fb(function(){!(ke&6)&&xi()}),n=null;else{switch(QT(r)){case 1:n=Sg;break;case 4:n=qT;break;case 16:n=Gc;break;case 536870912:n=GT;break;default:n=Gc}n=yI(n,hI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hI(t,e){if(Dc=-1,xc=0,ke&6)throw Error(H(327));var n=t.callbackNode;if(yo()&&t.callbackNode!==n)return null;var r=Kc(t,t===kt?Lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=dh(t,r);else{e=r;var i=ke;ke|=2;var s=fI();(kt!==t||Lt!==e)&&(Ir=null,Do=lt()+500,is(t,e));do try{Fb();break}catch(a){dI(t,a)}while(!0);Mg(),uh.current=s,ke=i,ht!==null?e=0:(kt=null,Lt=0,e=yt)}if(e!==0){if(e===2&&(i=$p(t),i!==0&&(r=i,e=pm(t,i))),e===1)throw n=Ol,is(t,0),ti(t,r),pn(t,lt()),n;if(e===6)ti(t,r);else{if(i=t.current.alternate,!(r&30)&&!Mb(i)&&(e=dh(t,r),e===2&&(s=$p(t),s!==0&&(r=s,e=pm(t,s))),e===1))throw n=Ol,is(t,0),ti(t,r),pn(t,lt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Gi(t,ln,Ir);break;case 3:if(ti(t,r),(r&130023424)===r&&(e=Xg+500-lt(),10<e)){if(Kc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Kp(Gi.bind(null,t,ln,Ir),e);break}Gi(t,ln,Ir);break;case 4:if(ti(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=lt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ob(r/1960))-r,10<r){t.timeoutHandle=Kp(Gi.bind(null,t,ln,Ir),r);break}Gi(t,ln,Ir);break;case 5:Gi(t,ln,Ir);break;default:throw Error(H(329))}}}return pn(t,lt()),t.callbackNode===n?hI.bind(null,t):null}function pm(t,e){var n=il;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=dh(t,e),t!==2&&(e=ln,ln=n,e!==null&&mm(e)),t}function mm(t){ln===null?ln=t:ln.push.apply(ln,t)}function Mb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!er(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ti(t,e){for(e&=~Yg,e&=~rd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),r=1<<n;t[n]=-1,e&=~r}}function P0(t){if(ke&6)throw Error(H(327));yo();var e=Kc(t,0);if(!(e&1))return pn(t,lt()),null;var n=dh(t,e);if(t.tag!==0&&n===2){var r=$p(t);r!==0&&(e=r,n=pm(t,r))}if(n===1)throw n=Ol,is(t,0),ti(t,e),pn(t,lt()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gi(t,ln,Ir),pn(t,lt()),null}function Jg(t,e){var n=ke;ke|=1;try{return t(e)}finally{ke=n,ke===0&&(Do=lt()+500,Zh&&xi())}}function hs(t){ai!==null&&ai.tag===0&&!(ke&6)&&yo();var e=ke;ke|=1;var n=Ln.transition,r=Le;try{if(Ln.transition=null,Le=1,t)return t()}finally{Le=r,Ln.transition=n,ke=e,!(ke&6)&&xi()}}function Zg(){En=lo.current,Qe(lo)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,db(n)),ht!==null)for(n=ht.return;n!==null;){var r=n;switch(xg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zc();break;case 3:No(),Qe(dn),Qe(Qt),jg();break;case 5:Bg(r);break;case 4:No();break;case 13:Qe(et);break;case 19:Qe(et);break;case 10:Vg(r.type._context);break;case 22:case 23:Zg()}n=n.return}if(kt=t,ht=t=_i(t.current,null),Lt=En=e,yt=0,Ol=null,Yg=rd=cs=0,ln=il=null,Zi!==null){for(e=0;e<Zi.length;e++)if(n=Zi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zi=null}return t}function dI(t,e){do{var n=ht;try{if(Mg(),Pc.current=lh,ah){for(var r=tt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ah=!1}if(us=0,Rt=gt=tt=null,nl=!1,Dl=0,Qg.current=null,n===null||n.return===null){yt=1,Ol=e,ht=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Lt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=g0(o);if(v!==null){v.flags&=-257,_0(v,o,a,s,e),v.mode&1&&m0(s,c,e),e=v,u=c;var E=e.updateQueue;if(E===null){var A=new Set;A.add(u),e.updateQueue=A}else E.add(u);break e}else{if(!(e&1)){m0(s,c,e),e_();break e}u=Error(H(426))}}else if(Je&&a.mode&1){var P=g0(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),_0(P,o,a,s,e),Lg(bo(u,a));break e}}s=u=bo(u,a),yt!==4&&(yt=2),il===null?il=[s]:il.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=QS(s,u,e);u0(s,S);break e;case 1:a=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(mi===null||!mi.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=YS(s,a,e);u0(s,O);break e}}s=s.return}while(s!==null)}mI(n)}catch(F){e=F,ht===n&&n!==null&&(ht=n=n.return);continue}break}while(!0)}function fI(){var t=uh.current;return uh.current=lh,t===null?lh:t}function e_(){(yt===0||yt===3||yt===2)&&(yt=4),kt===null||!(cs&268435455)&&!(rd&268435455)||ti(kt,Lt)}function dh(t,e){var n=ke;ke|=2;var r=fI();(kt!==t||Lt!==e)&&(Ir=null,is(t,e));do try{Vb();break}catch(i){dI(t,i)}while(!0);if(Mg(),ke=n,uh.current=r,ht!==null)throw Error(H(261));return kt=null,Lt=0,yt}function Vb(){for(;ht!==null;)pI(ht)}function Fb(){for(;ht!==null&&!uN();)pI(ht)}function pI(t){var e=_I(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?mI(t):ht=e,Qg.current=null}function mI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bb(n,e),n!==null){n.flags&=32767,ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,ht=null;return}}else if(n=Nb(n,e,En),n!==null){ht=n;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);yt===0&&(yt=5)}function Gi(t,e,n){var r=Le,i=Ln.transition;try{Ln.transition=null,Le=1,Ub(t,e,n,r)}finally{Ln.transition=i,Le=r}return null}function Ub(t,e,n,r){do yo();while(ai!==null);if(ke&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vN(t,s),t===kt&&(ht=kt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uc||(uc=!0,yI(Gc,function(){return yo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=Le;Le=1;var a=ke;ke|=4,Qg.current=null,xb(t,n),uI(n,t),sb(qp),Qc=!!Hp,qp=Hp=null,t.current=n,Lb(n),cN(),ke=a,Le=o,Ln.transition=s}else t.current=n;if(uc&&(uc=!1,ai=t,hh=i),s=t.pendingLanes,s===0&&(mi=null),fN(n.stateNode),pn(t,lt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ch)throw ch=!1,t=dm,dm=null,t;return hh&1&&t.tag!==0&&yo(),s=t.pendingLanes,s&1?t===fm?sl++:(sl=0,fm=t):sl=0,xi(),null}function yo(){if(ai!==null){var t=QT(hh),e=Ln.transition,n=Le;try{if(Ln.transition=null,Le=16>t?16:t,ai===null)var r=!1;else{if(t=ai,ai=null,hh=0,ke&6)throw Error(H(331));var i=ke;for(ke|=4,te=t.current;te!==null;){var s=te,o=s.child;if(te.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(te=c;te!==null;){var d=te;switch(d.tag){case 0:case 11:case 15:rl(8,d,s)}var f=d.child;if(f!==null)f.return=d,te=f;else for(;te!==null;){d=te;var m=d.sibling,v=d.return;if(oI(d),d===c){te=null;break}if(m!==null){m.return=v,te=m;break}te=v}}}var E=s.alternate;if(E!==null){var A=E.child;if(A!==null){E.child=null;do{var P=A.sibling;A.sibling=null,A=P}while(A!==null)}}te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,te=o;else e:for(;te!==null;){if(s=te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rl(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,te=S;break e}te=s.return}}var _=t.current;for(te=_;te!==null;){o=te;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,te=T;else e:for(o=_;te!==null;){if(a=te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nd(9,a)}}catch(F){st(a,a.return,F)}if(a===o){te=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,te=O;break e}te=a.return}}if(ke=i,xi(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(Kh,t)}catch{}r=!0}return r}finally{Le=n,Ln.transition=e}}return!1}function N0(t,e,n){e=bo(n,e),e=QS(t,e,1),t=pi(t,e,1),e=rn(),t!==null&&(Jl(t,1,e),pn(t,e))}function st(t,e,n){if(t.tag===3)N0(t,t,n);else for(;e!==null;){if(e.tag===3){N0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mi===null||!mi.has(r))){t=bo(n,t),t=YS(e,t,1),e=pi(e,t,1),t=rn(),e!==null&&(Jl(e,1,t),pn(e,t));break}}e=e.return}}function $b(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Lt&n)===n&&(yt===4||yt===3&&(Lt&130023424)===Lt&&500>lt()-Xg?is(t,0):Yg|=n),pn(t,e)}function gI(t,e){e===0&&(t.mode&1?(e=Zu,Zu<<=1,!(Zu&130023424)&&(Zu=4194304)):e=1);var n=rn();t=Vr(t,e),t!==null&&(Jl(t,e,n),pn(t,n))}function Bb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gI(t,n)}function jb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),gI(t,n)}var _I;_I=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,Pb(t,e,n);cn=!!(t.flags&131072)}else cn=!1,Je&&e.flags&1048576&&wS(e,nh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bc(t,e),t=e.pendingProps;var i=Ao(e,Qt.current);_o(e,n),i=Wg(null,e,r,t,i,n);var s=Hg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(r)?(s=!0,eh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ug(e),i.updater=td,e.stateNode=i,i._reactInternals=e,tm(e,r,t,n),e=im(null,e,r,!0,s,n)):(e.tag=0,Je&&s&&Dg(e),nn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Wb(r),t=qn(r,t),i){case 0:e=rm(null,e,r,t,n);break e;case 1:e=E0(null,e,r,t,n);break e;case 11:e=y0(null,e,r,t,n);break e;case 14:e=v0(null,e,r,qn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),rm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),E0(t,e,r,i,n);case 3:e:{if(eI(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,AS(t,e),sh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=bo(Error(H(423)),e),e=w0(t,e,r,n,i);break e}else if(r!==i){i=bo(Error(H(424)),e),e=w0(t,e,r,n,i);break e}else for(wn=fi(e.stateNode.containerInfo.firstChild),Sn=e,Je=!0,Kn=null,n=RS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ko(),r===i){e=Fr(t,e,n);break e}nn(t,e,r,n)}e=e.child}return e;case 5:return kS(e),t===null&&Jp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Gp(r,i)?o=null:s!==null&&Gp(r,s)&&(e.flags|=32),ZS(t,e),nn(t,e,o,n),e.child;case 6:return t===null&&Jp(e),null;case 13:return tI(t,e,n);case 4:return $g(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Po(e,null,r,n):nn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),y0(t,e,r,i,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Be(rh,r._currentValue),r._currentValue=o,s!==null)if(er(s.value,o)){if(s.children===i.children&&!dn.current){e=Fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Dr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Zp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_o(e,n),i=Mn(i),r=r(i),e.flags|=1,nn(t,e,r,n),e.child;case 14:return r=e.type,i=qn(r,e.pendingProps),i=qn(r.type,i),v0(t,e,r,i,n);case 15:return XS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),bc(t,e),e.tag=1,fn(r)?(t=!0,eh(e)):t=!1,_o(e,n),KS(e,r,i),tm(e,r,i,n),im(null,e,r,!0,t,n);case 19:return nI(t,e,n);case 22:return JS(t,e,n)}throw Error(H(156,e.tag))};function yI(t,e){return HT(t,e)}function zb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,r){return new zb(t,e,n,r)}function t_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wb(t){if(typeof t=="function")return t_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Eg)return 11;if(t===wg)return 14}return 2}function _i(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")t_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Js:return ss(n.children,i,s,e);case vg:o=8,i|=8;break;case Rp:return t=Dn(12,n,e,i|2),t.elementType=Rp,t.lanes=s,t;case Cp:return t=Dn(13,n,e,i),t.elementType=Cp,t.lanes=s,t;case Ap:return t=Dn(19,n,e,i),t.elementType=Ap,t.lanes=s,t;case kT:return id(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case CT:o=10;break e;case AT:o=9;break e;case Eg:o=11;break e;case wg:o=14;break e;case Xr:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=Dn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ss(t,e,n,r){return t=Dn(7,t,r,e),t.lanes=n,t}function id(t,e,n,r){return t=Dn(22,t,r,e),t.elementType=kT,t.lanes=n,t.stateNode={isHidden:!1},t}function Hf(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function qf(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cf(0),this.expirationTimes=Cf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function n_(t,e,n,r,i,s,o,a,u){return t=new Hb(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ug(s),t}function qb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vI(t){if(!t)return Ri;t=t._reactInternals;e:{if(ks(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(fn(n))return vS(t,n,e)}return e}function EI(t,e,n,r,i,s,o,a,u){return t=n_(n,r,!0,t,i,s,o,a,u),t.context=vI(null),n=t.current,r=rn(),i=gi(n),s=Dr(r,i),s.callback=e??null,pi(n,s,i),t.current.lanes=i,Jl(t,i,r),pn(t,r),t}function sd(t,e,n,r){var i=e.current,s=rn(),o=gi(i);return n=vI(n),e.context===null?e.context=n:e.pendingContext=n,e=Dr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pi(i,e,o),t!==null&&(Jn(t,i,o,s),kc(t,i,o)),o}function fh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function b0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function r_(t,e){b0(t,e),(t=t.alternate)&&b0(t,e)}function Gb(){return null}var wI=typeof reportError=="function"?reportError:function(t){console.error(t)};function i_(t){this._internalRoot=t}od.prototype.render=i_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));sd(t,e,null,null)};od.prototype.unmount=i_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hs(function(){sd(null,t,null,null)}),e[Mr]=null}};function od(t){this._internalRoot=t}od.prototype.unstable_scheduleHydration=function(t){if(t){var e=JT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ei.length&&e!==0&&e<ei[n].priority;n++);ei.splice(n,0,t),n===0&&eS(t)}};function s_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ad(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function D0(){}function Kb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=fh(o);s.call(c)}}var o=EI(e,r,t,0,null,!1,!1,"",D0);return t._reactRootContainer=o,t[Mr]=o.current,Al(t.nodeType===8?t.parentNode:t),hs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=fh(u);a.call(c)}}var u=n_(t,0,!1,null,null,!1,!1,"",D0);return t._reactRootContainer=u,t[Mr]=u.current,Al(t.nodeType===8?t.parentNode:t),hs(function(){sd(e,u,n,r)}),u}function ld(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=fh(o);a.call(u)}}sd(e,o,t,i)}else o=Kb(n,e,t,i,r);return fh(o)}YT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=za(e.pendingLanes);n!==0&&(Ig(e,n|1),pn(e,lt()),!(ke&6)&&(Do=lt()+500,xi()))}break;case 13:hs(function(){var r=Vr(t,1);if(r!==null){var i=rn();Jn(r,t,1,i)}}),r_(t,1)}};Rg=function(t){if(t.tag===13){var e=Vr(t,134217728);if(e!==null){var n=rn();Jn(e,t,134217728,n)}r_(t,134217728)}};XT=function(t){if(t.tag===13){var e=gi(t),n=Vr(t,e);if(n!==null){var r=rn();Jn(n,t,e,r)}r_(t,e)}};JT=function(){return Le};ZT=function(t,e){var n=Le;try{return Le=t,e()}finally{Le=n}};Vp=function(t,e,n){switch(e){case"input":if(Np(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Jh(r);if(!i)throw Error(H(90));NT(r),Np(r,i)}}}break;case"textarea":DT(t,n);break;case"select":e=n.value,e!=null&&fo(t,!!n.multiple,e,!1)}};UT=Jg;$T=hs;var Qb={usingClientEntryPoint:!1,Events:[eu,no,Jh,VT,FT,Jg]},Na={findFiberByHostInstance:Ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yb={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zT(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||Gb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{Kh=cc.inject(Yb),cr=cc}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qb;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!s_(e))throw Error(H(200));return qb(t,e,null,n)};kn.createRoot=function(t,e){if(!s_(t))throw Error(H(299));var n=!1,r="",i=wI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=n_(t,1,!1,null,null,n,!1,r,i),t[Mr]=e.current,Al(t.nodeType===8?t.parentNode:t),new i_(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=zT(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return hs(t)};kn.hydrate=function(t,e,n){if(!ad(e))throw Error(H(200));return ld(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!s_(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=wI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=EI(e,null,t,1,n??null,i,!1,s,o),t[Mr]=e.current,Al(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new od(e)};kn.render=function(t,e,n){if(!ad(e))throw Error(H(200));return ld(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!ad(t))throw Error(H(40));return t._reactRootContainer?(hs(function(){ld(null,null,t,!1,function(){t._reactRootContainer=null,t[Mr]=null})}),!0):!1};kn.unstable_batchedUpdates=Jg;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ad(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return ld(t,e,n,!1,r)};kn.version="18.3.1-next-f1338f8080-20240426";function TI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(TI)}catch(t){console.error(t)}}TI(),TT.exports=kn;var SI=TT.exports;const Xb=cT(SI);var x0=SI;Sp.createRoot=x0.createRoot,Sp.hydrateRoot=x0.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ml.apply(this,arguments)}var li;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(li||(li={}));const L0="popstate";function Jb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return gm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ph(i)}return eD(e,n,null,t)}function dt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function II(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Zb(){return Math.random().toString(36).substr(2,8)}function O0(t,e){return{usr:t.state,key:t.key,idx:e}}function gm(t,e,n,r){return n===void 0&&(n=null),Ml({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ea(e):e,{state:n,key:e&&e.key||r||Zb()})}function ph(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ea(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function eD(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=li.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ml({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=li.Pop;let P=d(),S=P==null?null:P-c;c=P,u&&u({action:a,location:A.location,delta:S})}function m(P,S){a=li.Push;let _=gm(A.location,P,S);c=d()+1;let T=O0(_,c),O=A.createHref(_);try{o.pushState(T,"",O)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(O)}s&&u&&u({action:a,location:A.location,delta:1})}function v(P,S){a=li.Replace;let _=gm(A.location,P,S);c=d();let T=O0(_,c),O=A.createHref(_);o.replaceState(T,"",O),s&&u&&u({action:a,location:A.location,delta:0})}function E(P){let S=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof P=="string"?P:ph(P);return _=_.replace(/ $/,"%20"),dt(S,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,S)}let A={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(L0,f),u=P,()=>{i.removeEventListener(L0,f),u=null}},createHref(P){return e(i,P)},createURL:E,encodeLocation(P){let S=E(P);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:v,go(P){return o.go(P)}};return A}var M0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(M0||(M0={}));function tD(t,e,n){return n===void 0&&(n="/"),nD(t,e,n,!1)}function nD(t,e,n,r){let i=typeof e=="string"?ea(e):e,s=o_(i.pathname||"/",n);if(s==null)return null;let o=RI(t);rD(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=pD(s);a=dD(o[u],c,r)}return a}function RI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(dt(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=yi([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(dt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),RI(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:cD(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of CI(s.path))i(s,o,u)}),e}function CI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=CI(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function rD(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const iD=/^:[\w-]+$/,sD=3,oD=2,aD=1,lD=10,uD=-2,V0=t=>t==="*";function cD(t,e){let n=t.split("/"),r=n.length;return n.some(V0)&&(r+=uD),e&&(r+=oD),n.filter(i=>!V0(i)).reduce((i,s)=>i+(iD.test(s)?sD:s===""?aD:lD),r)}function hD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function dD(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=F0({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=F0({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:yi([s,f.pathname]),pathnameBase:yD(yi([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=yi([s,f.pathnameBase]))}return o}function F0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=fD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const E=a[f];return v&&!E?c[m]=void 0:c[m]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function fD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),II(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function pD(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return II(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function o_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function mD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ea(t):t;return{pathname:n?n.startsWith("/")?n:gD(n,e):e,search:vD(r),hash:ED(i)}}function gD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _D(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function AI(t,e){let n=_D(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function kI(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ea(t):(i=Ml({},t),dt(!i.pathname||!i.pathname.includes("?"),Gf("?","pathname","search",i)),dt(!i.pathname||!i.pathname.includes("#"),Gf("#","pathname","hash",i)),dt(!i.search||!i.search.includes("#"),Gf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=mD(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const yi=t=>t.join("/").replace(/\/\/+/g,"/"),yD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ED=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function wD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const PI=["post","put","patch","delete"];new Set(PI);const TD=["get",...PI];new Set(TD);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vl(){return Vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vl.apply(this,arguments)}const a_=W.createContext(null),SD=W.createContext(null),Ps=W.createContext(null),ud=W.createContext(null),Li=W.createContext({outlet:null,matches:[],isDataRoute:!1}),NI=W.createContext(null);function ID(t,e){let{relative:n}=e===void 0?{}:e;nu()||dt(!1);let{basename:r,navigator:i}=W.useContext(Ps),{hash:s,pathname:o,search:a}=DI(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:yi([r,o])),i.createHref({pathname:u,search:a,hash:s})}function nu(){return W.useContext(ud)!=null}function cd(){return nu()||dt(!1),W.useContext(ud).location}function bI(t){W.useContext(Ps).static||W.useLayoutEffect(t)}function ru(){let{isDataRoute:t}=W.useContext(Li);return t?UD():RD()}function RD(){nu()||dt(!1);let t=W.useContext(a_),{basename:e,future:n,navigator:r}=W.useContext(Ps),{matches:i}=W.useContext(Li),{pathname:s}=cd(),o=JSON.stringify(AI(i,n.v7_relativeSplatPath)),a=W.useRef(!1);return bI(()=>{a.current=!0}),W.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=kI(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:yi([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const CD=W.createContext(null);function AD(t){let e=W.useContext(Li).outlet;return e&&W.createElement(CD.Provider,{value:t},e)}function DI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=W.useContext(Ps),{matches:i}=W.useContext(Li),{pathname:s}=cd(),o=JSON.stringify(AI(i,r.v7_relativeSplatPath));return W.useMemo(()=>kI(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function kD(t,e){return PD(t,e)}function PD(t,e,n,r){nu()||dt(!1);let{navigator:i}=W.useContext(Ps),{matches:s}=W.useContext(Li),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=cd(),d;if(e){var f;let P=typeof e=="string"?ea(e):e;u==="/"||(f=P.pathname)!=null&&f.startsWith(u)||dt(!1),d=P}else d=c;let m=d.pathname||"/",v=m;if(u!=="/"){let P=u.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let E=tD(t,{pathname:v}),A=LD(E&&E.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:yi([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:yi([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&A?W.createElement(ud.Provider,{value:{location:Vl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:li.Pop}},A):A}function ND(){let t=FD(),e=wD(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),n?W.createElement("pre",{style:i},n):null,null)}const bD=W.createElement(ND,null);class DD extends W.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?W.createElement(Li.Provider,{value:this.props.routeContext},W.createElement(NI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xD(t){let{routeContext:e,match:n,children:r}=t,i=W.useContext(a_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),W.createElement(Li.Provider,{value:e},r)}function LD(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||dt(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:v}=n,E=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||E){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let v,E=!1,A=null,P=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||bD,u&&(c<0&&m===0?(E=!0,P=null):c===m&&(E=!0,P=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),_=()=>{let T;return v?T=A:E?T=P:f.route.Component?T=W.createElement(f.route.Component,null):f.route.element?T=f.route.element:T=d,W.createElement(xD,{match:f,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:T})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?W.createElement(DD,{location:n.location,revalidation:n.revalidation,component:A,error:v,children:_(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):_()},null)}var xI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(xI||{}),mh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(mh||{});function OD(t){let e=W.useContext(a_);return e||dt(!1),e}function MD(t){let e=W.useContext(SD);return e||dt(!1),e}function VD(t){let e=W.useContext(Li);return e||dt(!1),e}function LI(t){let e=VD(),n=e.matches[e.matches.length-1];return n.route.id||dt(!1),n.route.id}function FD(){var t;let e=W.useContext(NI),n=MD(mh.UseRouteError),r=LI(mh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function UD(){let{router:t}=OD(xI.UseNavigateStable),e=LI(mh.UseNavigateStable),n=W.useRef(!1);return bI(()=>{n.current=!0}),W.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Vl({fromRouteId:e},s)))},[t,e])}function $D(t){return AD(t.context)}function Ki(t){dt(!1)}function BD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=li.Pop,navigator:s,static:o=!1,future:a}=t;nu()&&dt(!1);let u=e.replace(/^\/*/,"/"),c=W.useMemo(()=>({basename:u,navigator:s,static:o,future:Vl({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=ea(r));let{pathname:d="/",search:f="",hash:m="",state:v=null,key:E="default"}=r,A=W.useMemo(()=>{let P=o_(d,u);return P==null?null:{location:{pathname:P,search:f,hash:m,state:v,key:E},navigationType:i}},[u,d,f,m,v,E,i]);return A==null?null:W.createElement(Ps.Provider,{value:c},W.createElement(ud.Provider,{children:n,value:A}))}function jD(t){let{children:e,location:n}=t;return kD(_m(e),n)}new Promise(()=>{});function _m(t,e){e===void 0&&(e=[]);let n=[];return W.Children.forEach(t,(r,i)=>{if(!W.isValidElement(r))return;let s=[...e,i];if(r.type===W.Fragment){n.push.apply(n,_m(r.props.children,s));return}r.type!==Ki&&dt(!1),!r.props.index||!r.props.children||dt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=_m(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ym(){return ym=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ym.apply(this,arguments)}function zD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function WD(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function HD(t,e){return t.button===0&&(!e||e==="_self")&&!WD(t)}const qD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],GD="6";try{window.__reactRouterVersion=GD}catch{}const KD="startTransition",U0=$P[KD];function QD(t){let{basename:e,children:n,future:r,window:i}=t,s=W.useRef();s.current==null&&(s.current=Jb({window:i,v5Compat:!0}));let o=s.current,[a,u]=W.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=W.useCallback(f=>{c&&U0?U0(()=>u(f)):u(f)},[u,c]);return W.useLayoutEffect(()=>o.listen(d),[o,d]),W.createElement(BD,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const YD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xo=W.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,m=zD(e,qD),{basename:v}=W.useContext(Ps),E,A=!1;if(typeof c=="string"&&XD.test(c)&&(E=c,YD))try{let T=new URL(window.location.href),O=c.startsWith("//")?new URL(T.protocol+c):new URL(c),F=o_(O.pathname,v);O.origin===T.origin&&F!=null?c=F+O.search+O.hash:A=!0}catch{}let P=ID(c,{relative:i}),S=JD(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:f});function _(T){r&&r(T),T.defaultPrevented||S(T)}return W.createElement("a",ym({},m,{href:E||P,onClick:A||s?r:_,ref:n,target:u}))});var $0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})($0||($0={}));var B0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(B0||(B0={}));function JD(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=ru(),c=cd(),d=DI(t,{relative:o});return W.useCallback(f=>{if(HD(f,n)){f.preventDefault();let m=r!==void 0?r:ph(c)===ph(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}var j0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(t,e){if(!t)throw ta(e)},ta=function(t){return new Error("Firebase Database ("+OI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ZD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},l_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(m=64)),r.push(n[d],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(MI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new ex;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ex extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VI=function(t){const e=MI(t);return l_.encodeByteArray(e,!0)},gh=function(t){return VI(t).replace(/\./g,"")},_h=function(t){try{return l_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(t){return FI(void 0,t)}function FI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!nx(n)||(t[n]=FI(t[n],e[n]));return t}function nx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=()=>rx().__FIREBASE_DEFAULTS__,sx=()=>{if(typeof process>"u"||typeof j0>"u")return;const t=j0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ox=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_h(t[1]);return e&&JSON.parse(e)},hd=()=>{try{return ix()||sx()||ox()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},UI=t=>{var e,n;return(n=(e=hd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ax=t=>{const e=UI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$I=()=>{var t;return(t=hd())===null||t===void 0?void 0:t.config},BI=t=>{var e;return(e=hd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gh(JSON.stringify(n)),gh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function ux(){var t;const e=(t=hd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cx(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WI(){return OI.NODE_ADMIN===!0}function hx(){return!ux()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function HI(){try{return typeof indexedDB=="object"}catch{return!1}}function qI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function dx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx="FirebaseError";class rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fx,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?px(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rr(i,a,r)}}function px(t,e){return t.replace(mx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t){return JSON.parse(t)}function Dt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Fl(_h(s[0])||""),n=Fl(_h(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},gx=function(t){const e=GI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_x=function(t){const e=GI(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Lo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yh(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function vh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(z0(s)&&z0(o)){if(!vh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function z0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ha(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function vx(t,e){const n=new Ex(t,e);return n.subscribe.bind(n)}class Ex{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kf),i.error===void 0&&(i.error=Kf),i.complete===void 0&&(i.complete=Kf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kf(){}function Tx(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,X(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=1e3,Rx=2,Cx=4*60*60*1e3,Ax=.5;function W0(t,e=Ix,n=Rx){const r=e*Math.pow(n,t),i=Math.round(Ax*r*(Math.random()-.5)*2);return Math.min(Cx,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new u_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nx(e))try{this.getOrInitializeService({instanceIdentifier:Qi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qi){return this.instances.has(e)}getOptions(e=Qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Px(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qi){return this.component?this.component.multipleInstances?e:Qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Px(t){return t===Qi?void 0:t}function Nx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const Dx={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},xx=Te.INFO,Lx={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},Ox=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Lx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class iu{constructor(e){this.name=e,this._logLevel=xx,this._logHandler=Ox,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const Mx=(t,e)=>e.some(n=>t instanceof n);let H0,q0;function Vx(){return H0||(H0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fx(){return q0||(q0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KI=new WeakMap,Em=new WeakMap,QI=new WeakMap,Qf=new WeakMap,h_=new WeakMap;function Ux(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&KI.set(n,t)}).catch(()=>{}),h_.set(e,t),e}function $x(t){if(Em.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Em.set(t,e)}let wm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Em.get(t);if(e==="objectStoreNames")return t.objectStoreNames||QI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bx(t){wm=t(wm)}function jx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yf(this),e,...n);return QI.set(r,e.sort?e.sort():[e]),vi(r)}:Fx().includes(t)?function(...e){return t.apply(Yf(this),e),vi(KI.get(this))}:function(...e){return vi(t.apply(Yf(this),e))}}function zx(t){return typeof t=="function"?jx(t):(t instanceof IDBTransaction&&$x(t),Mx(t,Vx())?new Proxy(t,wm):t)}function vi(t){if(t instanceof IDBRequest)return Ux(t);if(Qf.has(t))return Qf.get(t);const e=zx(t);return e!==t&&(Qf.set(t,e),h_.set(e,t)),e}const Yf=t=>h_.get(t);function YI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=vi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(vi(o.result),u.oldVersion,u.newVersion,vi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Wx=["get","getKey","getAll","getAllKeys","count"],Hx=["put","add","delete","clear"],Xf=new Map;function G0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xf.get(e))return Xf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Hx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Wx.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Xf.set(e,s),s}Bx(t=>({...t,get:(e,n,r)=>G0(e,n)||t.get(e,n,r),has:(e,n)=>!!G0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tm="@firebase/app",K0="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new iu("@firebase/app"),Kx="@firebase/app-compat",Qx="@firebase/analytics-compat",Yx="@firebase/analytics",Xx="@firebase/app-check-compat",Jx="@firebase/app-check",Zx="@firebase/auth",eL="@firebase/auth-compat",tL="@firebase/database",nL="@firebase/database-compat",rL="@firebase/functions",iL="@firebase/functions-compat",sL="@firebase/installations",oL="@firebase/installations-compat",aL="@firebase/messaging",lL="@firebase/messaging-compat",uL="@firebase/performance",cL="@firebase/performance-compat",hL="@firebase/remote-config",dL="@firebase/remote-config-compat",fL="@firebase/storage",pL="@firebase/storage-compat",mL="@firebase/firestore",gL="@firebase/vertexai-preview",_L="@firebase/firestore-compat",yL="firebase",vL="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="[DEFAULT]",EL={[Tm]:"fire-core",[Kx]:"fire-core-compat",[Yx]:"fire-analytics",[Qx]:"fire-analytics-compat",[Jx]:"fire-app-check",[Xx]:"fire-app-check-compat",[Zx]:"fire-auth",[eL]:"fire-auth-compat",[tL]:"fire-rtdb",[nL]:"fire-rtdb-compat",[rL]:"fire-fn",[iL]:"fire-fn-compat",[sL]:"fire-iid",[oL]:"fire-iid-compat",[aL]:"fire-fcm",[lL]:"fire-fcm-compat",[uL]:"fire-perf",[cL]:"fire-perf-compat",[hL]:"fire-rc",[dL]:"fire-rc-compat",[fL]:"fire-gcs",[pL]:"fire-gcs-compat",[mL]:"fire-fst",[_L]:"fire-fst-compat",[gL]:"fire-vertex","fire-js":"fire-js",[yL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new Map,wL=new Map,Im=new Map;function Q0(t,e){try{t.container.addComponent(e)}catch(n){ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tr(t){const e=t.name;if(Im.has(e))return ds.debug(`There were multiple attempts to register component ${e}.`),!1;Im.set(e,t);for(const n of Eh.values())Q0(n,t);for(const n of wL.values())Q0(n,t);return!0}function su(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ar(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new Ns("app","Firebase",TL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=vL;function XI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ei.create("bad-app-name",{appName:String(i)});if(n||(n=$I()),!n)throw Ei.create("no-options");const s=Eh.get(i);if(s){if(vh(n,s.options)&&vh(r,s.config))return s;throw Ei.create("duplicate-app",{appName:i})}const o=new bx(i);for(const u of Im.values())o.addComponent(u);const a=new SL(n,r,o);return Eh.set(i,a),a}function JI(t=Sm){const e=Eh.get(t);if(!e&&t===Sm&&$I())return XI();if(!e)throw Ei.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let i=(r=EL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ds.warn(a.join(" "));return}tr(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL="firebase-heartbeat-database",RL=1,Ul="firebase-heartbeat-store";let Jf=null;function ZI(){return Jf||(Jf=YI(IL,RL,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ul)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ei.create("idb-open",{originalErrorMessage:t.message})})),Jf}async function CL(t){try{const n=(await ZI()).transaction(Ul),r=await n.objectStore(Ul).get(eR(t));return await n.done,r}catch(e){if(e instanceof rr)ds.warn(e.message);else{const n=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ds.warn(n.message)}}}async function Y0(t,e){try{const r=(await ZI()).transaction(Ul,"readwrite");await r.objectStore(Ul).put(e,eR(t)),await r.done}catch(n){if(n instanceof rr)ds.warn(n.message);else{const r=Ei.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ds.warn(r.message)}}}function eR(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL=1024,kL=30*24*60*60*1e3;class PL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=X0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kL}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=X0(),{heartbeatsToSend:r,unsentEntries:i}=NL(this._heartbeatsCache.heartbeats),s=gh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function X0(){return new Date().toISOString().substring(0,10)}function NL(t,e=AL){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),J0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),J0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HI()?qI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Y0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Y0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function J0(t){return gh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DL(t){tr(new Fn("platform-logger",e=>new qx(e),"PRIVATE")),tr(new Fn("heartbeat",e=>new PL(e),"PRIVATE")),mn(Tm,K0,t),mn(Tm,K0,"esm2017"),mn("fire-js","")}DL("");var xL="firebase",LL="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn(xL,LL,"app");const tR="@firebase/installations",d_="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=1e4,rR=`w:${d_}`,iR="FIS_v2",OL="https://firebaseinstallations.googleapis.com/v1",ML=60*60*1e3,VL="installations",FL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fs=new Ns(VL,FL,UL);function sR(t){return t instanceof rr&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR({projectId:t}){return`${OL}/projects/${t}/installations`}function aR(t){return{token:t.token,requestStatus:2,expiresIn:BL(t.expiresIn),creationTime:Date.now()}}async function lR(t,e){const r=(await e.json()).error;return fs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function uR({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $L(t,{refreshToken:e}){const n=uR(t);return n.append("Authorization",jL(e)),n}async function cR(t){const e=await t();return e.status>=500&&e.status<600?t():e}function BL(t){return Number(t.replace("s","000"))}function jL(t){return`${iR} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=oR(t),i=uR(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:iR,appId:t.appId,sdkVersion:rR},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await cR(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:aR(c.authToken)}}else throw await lR("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HL=/^[cdef][\w-]{21}$/,Rm="";function qL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=GL(t);return HL.test(n)?n:Rm}catch{return Rm}}function GL(t){return WL(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=new Map;function fR(t,e){const n=fd(t);pR(n,e),KL(n,e)}function pR(t,e){const n=dR.get(t);if(n)for(const r of n)r(e)}function KL(t,e){const n=QL();n&&n.postMessage({key:t,fid:e}),YL()}let ts=null;function QL(){return!ts&&"BroadcastChannel"in self&&(ts=new BroadcastChannel("[Firebase] FID Change"),ts.onmessage=t=>{pR(t.data.key,t.data.fid)}),ts}function YL(){dR.size===0&&ts&&(ts.close(),ts=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL="firebase-installations-database",JL=1,ps="firebase-installations-store";let Zf=null;function f_(){return Zf||(Zf=YI(XL,JL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ps)}}})),Zf}async function wh(t,e){const n=fd(t),i=(await f_()).transaction(ps,"readwrite"),s=i.objectStore(ps),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&fR(t,e.fid),e}async function mR(t){const e=fd(t),r=(await f_()).transaction(ps,"readwrite");await r.objectStore(ps).delete(e),await r.done}async function pd(t,e){const n=fd(t),i=(await f_()).transaction(ps,"readwrite"),s=i.objectStore(ps),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&fR(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(t){let e;const n=await pd(t.appConfig,r=>{const i=ZL(r),s=eO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Rm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ZL(t){const e=t||{fid:qL(),registrationStatus:0};return gR(e)}function eO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nO(t)}:{installationEntry:e}}async function tO(t,e){try{const n=await zL(t,e);return wh(t.appConfig,n)}catch(n){throw sR(n)&&n.customData.serverCode===409?await mR(t.appConfig):await wh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function nO(t){let e=await Z0(t.appConfig);for(;e.registrationStatus===1;)await hR(100),e=await Z0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await p_(t);return r||n}return e}function Z0(t){return pd(t,e=>{if(!e)throw fs.create("installation-not-found");return gR(e)})}function gR(t){return rO(t)?{fid:t.fid,registrationStatus:0}:t}function rO(t){return t.registrationStatus===1&&t.registrationTime+nR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iO({appConfig:t,heartbeatServiceProvider:e},n){const r=sO(t,n),i=$L(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:rR,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await cR(()=>fetch(r,a));if(u.ok){const c=await u.json();return aR(c)}else throw await lR("Generate Auth Token",u)}function sO(t,{fid:e}){return`${oR(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(t,e=!1){let n;const r=await pd(t.appConfig,s=>{if(!_R(s))throw fs.create("not-registered");const o=s.authToken;if(!e&&lO(o))return s;if(o.requestStatus===1)return n=oO(t,e),s;{if(!navigator.onLine)throw fs.create("app-offline");const a=cO(s);return n=aO(t,a),a}});return n?await n:r.authToken}async function oO(t,e){let n=await eE(t.appConfig);for(;n.authToken.requestStatus===1;)await hR(100),n=await eE(t.appConfig);const r=n.authToken;return r.requestStatus===0?m_(t,e):r}function eE(t){return pd(t,e=>{if(!_R(e))throw fs.create("not-registered");const n=e.authToken;return hO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aO(t,e){try{const n=await iO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await wh(t.appConfig,r),n}catch(n){if(sR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mR(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wh(t.appConfig,r)}throw n}}function _R(t){return t!==void 0&&t.registrationStatus===2}function lO(t){return t.requestStatus===2&&!uO(t)}function uO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ML}function cO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hO(t){return t.requestStatus===1&&t.requestTime+nR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dO(t){const e=t,{installationEntry:n,registrationPromise:r}=await p_(e);return r?r.catch(console.error):m_(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fO(t,e=!1){const n=t;return await pO(n),(await m_(n,e)).token}async function pO(t){const{registrationPromise:e}=await p_(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mO(t){if(!t||!t.options)throw ep("App Configuration");if(!t.name)throw ep("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ep(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ep(t){return fs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="installations",gO="installations-internal",_O=t=>{const e=t.getProvider("app").getImmediate(),n=mO(e),r=su(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yO=t=>{const e=t.getProvider("app").getImmediate(),n=su(e,yR).getImmediate();return{getId:()=>dO(n),getToken:i=>fO(n,i)}};function vO(){tr(new Fn(yR,_O,"PUBLIC")),tr(new Fn(gO,yO,"PRIVATE"))}vO();mn(tR,d_);mn(tR,d_,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="analytics",EO="firebase_id",wO="origin",TO=60*1e3,SO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",g_="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new iu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},On=new Ns("analytics","Analytics",IO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t){if(!t.startsWith(g_)){const e=On.create("invalid-gtag-resource",{gtagURL:t});return gn.warn(e.message),""}return t}function vR(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function CO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function AO(t,e){const n=CO("firebase-js-sdk-policy",{createScriptURL:RO}),r=document.createElement("script"),i=`${g_}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function kO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function PO(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await vR(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){gn.error(a)}t("config",i,s)}async function NO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await vR(n);for(const u of o){const c=a.find(f=>f.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){gn.error(s)}}function bO(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await NO(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await PO(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){gn.error(a)}}return i}function DO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=bO(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function xO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(g_)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO=30,OO=1e3;class MO{constructor(e={},n=OO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ER=new MO;function VO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function FO(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:VO(r)},s=SO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw On.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function UO(t,e=ER,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw On.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw On.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new jO;return setTimeout(async()=>{a.abort()},TO),wR({appId:r,apiKey:i,measurementId:s},o,a,e)}async function wR(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=ER){var s;const{appId:o,measurementId:a}=t;try{await $O(r,e)}catch(u){if(a)return gn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await FO(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!BO(c)){if(i.deleteThrottleMetadata(o),a)return gn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?W0(n,i.intervalMillis,LO):W0(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),gn.debug(`Calling attemptFetch again in ${d} millis`),wR(t,f,r,i)}}function $O(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(On.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function BO(t){if(!(t instanceof rr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WO(){if(HI())try{await qI()}catch(t){return gn.warn(On.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return gn.warn(On.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function HO(t,e,n,r,i,s,o){var a;const u=UO(t);u.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&gn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>gn.error(v)),e.push(u);const c=WO().then(v=>{if(v)return r.getId()}),[d,f]=await Promise.all([u,c]);xO(s)||AO(s,d.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[wO]="firebase",m.update=!0,f!=null&&(m[EO]=f),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e){this.app=e}_delete(){return delete ol[this.app.options.appId],Promise.resolve()}}let ol={},nE=[];const rE={};let tp="dataLayer",GO="gtag",iE,TR,sE=!1;function KO(){const t=[];if(jI()&&t.push("This is a browser extension environment."),dx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=On.create("invalid-analytics-context",{errorInfo:e});gn.warn(n.message)}}function QO(t,e,n){KO();const r=t.options.appId;if(!r)throw On.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)gn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw On.create("no-api-key");if(ol[r]!=null)throw On.create("already-exists",{id:r});if(!sE){kO(tp);const{wrappedGtag:s,gtagCore:o}=DO(ol,nE,rE,tp,GO);TR=s,iE=o,sE=!0}return ol[r]=HO(t,nE,rE,e,iE,tp,n),new qO(t)}function YO(t,e,n,r){t=Yt(t),zO(TR,ol[t.app.options.appId],e,n,r).catch(i=>gn.error(i))}const oE="@firebase/analytics",aE="0.10.5";function XO(){tr(new Fn(tE,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return QO(r,i,n)},"PUBLIC")),tr(new Fn("analytics-internal",t,"PRIVATE")),mn(oE,aE),mn(oE,aE,"esm2017");function t(e){try{const n=e.getProvider(tE).getImmediate();return{logEvent:(r,i,s)=>YO(n,r,i,s)}}catch(n){throw On.create("interop-component-reg-failed",{reason:n})}}}XO();function __(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function SR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JO=SR,IR=new Ns("auth","Firebase",SR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new iu("@firebase/auth");function ZO(t,...e){Th.logLevel<=Te.WARN&&Th.warn(`Auth (${bs}): ${t}`,...e)}function Oc(t,...e){Th.logLevel<=Te.ERROR&&Th.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,...e){throw y_(t,...e)}function dr(t,...e){return y_(t,...e)}function RR(t,e,n){const r=Object.assign(Object.assign({},JO()),{[e]:n});return new Ns("auth","Firebase",r).create(e,{appName:t.name})}function xr(t){return RR(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return IR.create(t,...e)}function de(t,e,...n){if(!t)throw y_(e,...n)}function kr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oc(e),new Error(e)}function Ur(t,e){t||kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eM(){return lE()==="http:"||lE()==="https:"}function lE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eM()||jI()||"connection"in navigator)?navigator.onLine:!0}function nM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ur(n>e,"Short delay should be less than long delay!"),this.isMobile=c_()||zI()}get(){return tM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t,e){Ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM=new ou(3e4,6e4);function Oi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mi(t,e,n,r,i={}){return AR(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=na(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),CR.fetch()(kR(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function AR(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rM),e);try{const i=new oM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw hc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw hc(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw hc(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw RR(t,d,c);nr(t,d)}}catch(i){if(i instanceof rr)throw i;nr(t,"network-request-failed",{message:String(i)})}}async function au(t,e,n,r,i={}){const s=await Mi(t,e,n,r,i);return"mfaPendingCredential"in s&&nr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kR(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?v_(t.config,i):`${t.config.apiScheme}://${i}`}function sM(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dr(this.auth,"network-request-failed")),iM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dr(t,e,r);return i.customData._tokenResponse=n,i}function uE(t){return t!==void 0&&t.enterprise!==void 0}class aM{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sM(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function lM(t,e){return Mi(t,"GET","/v2/recaptchaConfig",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(t,e){return Mi(t,"POST","/v1/accounts:delete",e)}async function PR(t,e){return Mi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cM(t,e=!1){const n=Yt(t),r=await n.getIdToken(e),i=E_(r);de(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:al(np(i.auth_time)),issuedAtTime:al(np(i.iat)),expirationTime:al(np(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function np(t){return Number(t)*1e3}function E_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oc("JWT malformed, contained fewer than 3 sections"),null;try{const i=_h(n);return i?JSON.parse(i):(Oc("Failed to decode base64 JWT payload"),null)}catch(i){return Oc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cE(t){const e=E_(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rr&&hM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=al(this.lastLoginAt),this.creationTime=al(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $l(t,PR(n,{idToken:r}));de(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?NR(s.providerUserInfo):[],a=pM(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Am(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function fM(t){const e=Yt(t);await Sh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function NR(t){return t.map(e=>{var{providerId:n}=e,r=__(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mM(t,e){const n=await AR(t,{},async()=>{const r=na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kR(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",CR.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gM(t,e){return Mi(t,"POST","/v2/accounts:revokeToken",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=cE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vo;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(de(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(de(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=__(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Am(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $l(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cM(this,e)}reload(){return fM(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ar(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await $l(this,uM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:O,isAnonymous:F,providerData:U,stsTokenManager:w}=n;de(T&&w,e,"internal-error");const y=vo.fromJSON(this.name,w);de(typeof T=="string",e,"internal-error"),Yr(f,e.name),Yr(m,e.name),de(typeof O=="boolean",e,"internal-error"),de(typeof F=="boolean",e,"internal-error"),Yr(v,e.name),Yr(E,e.name),Yr(A,e.name),Yr(P,e.name),Yr(S,e.name),Yr(_,e.name);const I=new Pr({uid:T,auth:e,email:m,emailVerified:O,displayName:f,isAnonymous:F,photoURL:E,phoneNumber:v,tenantId:A,stsTokenManager:y,createdAt:S,lastLoginAt:_});return U&&Array.isArray(U)&&(I.providerData=U.map(C=>Object.assign({},C))),P&&(I._redirectEventId=P),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new vo;i.updateFromServerResponse(n);const s=new Pr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sh(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];de(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?NR(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new vo;a.updateFromIdToken(r);const u=new Pr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Am(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=new Map;function Nr(t){Ur(t instanceof Function,"Expected a class definition");let e=hE.get(t);return e?(Ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hE.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bR.type="NONE";const dE=bR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t,e,n){return`firebase:${t}:${e}:${n}`}class Eo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Eo(Nr(dE),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nr(dE);const o=Mc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Pr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Eo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Eo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(MR(e))return"Blackberry";if(VR(e))return"Webos";if(w_(e))return"Safari";if((e.includes("chrome/")||xR(e))&&!e.includes("edge/"))return"Chrome";if(OR(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function DR(t=Vt()){return/firefox\//i.test(t)}function w_(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xR(t=Vt()){return/crios\//i.test(t)}function LR(t=Vt()){return/iemobile/i.test(t)}function OR(t=Vt()){return/android/i.test(t)}function MR(t=Vt()){return/blackberry/i.test(t)}function VR(t=Vt()){return/webos/i.test(t)}function md(t=Vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _M(t=Vt()){var e;return md(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yM(){return cx()&&document.documentMode===10}function FR(t=Vt()){return md(t)||OR(t)||VR(t)||MR(t)||/windows phone/i.test(t)||LR(t)}function vM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t,e=[]){let n;switch(t){case"Browser":n=fE(Vt());break;case"Worker":n=`${fE(Vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(t,e={}){return Mi(t,"GET","/v2/passwordPolicy",Oi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=6;class SM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:TM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pE(this),this.idTokenSubscription=new pE(this),this.beforeStateQueue=new EM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=IR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Eo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await PR(this,{idToken:e}),r=await Pr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ar(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ar(this.app))return Promise.reject(xr(this));const n=e?Yt(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ar(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ar(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wM(this),n=new SM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Eo.create(this,[Nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=UR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ds(t){return Yt(t)}class pE{constructor(e){this.auth=e,this.observer=null,this.addObserver=vx(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RM(t){gd=t}function $R(t){return gd.loadJS(t)}function CM(){return gd.recaptchaEnterpriseScript}function AM(){return gd.gapiScript}function kM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const PM="recaptcha-enterprise",NM="NO_RECAPTCHA";class bM{constructor(e){this.type=PM,this.auth=Ds(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{lM(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new aM(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;uE(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(NM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&uE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=CM();u.length!==0&&(u+=a),$R(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function mE(t,e,n,r=!1){const i=new bM(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function km(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await mE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await mE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DM(t,e){const n=su(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vh(s,e??{}))return i;nr(i,"already-initialized")}return n.initialize({options:e})}function xM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function LM(t,e,n){const r=Ds(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=BR(e),{host:o,port:a}=OM(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),MM()}function BR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OM(t){const e=BR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gE(o)}}}function gE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,n){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function VM(t,e){return Mi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FM(t,e){return au(t,"POST","/v1/accounts:signInWithPassword",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UM(t,e){return au(t,"POST","/v1/accounts:signInWithEmailLink",Oi(t,e))}async function $M(t,e){return au(t,"POST","/v1/accounts:signInWithEmailLink",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends T_{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return km(e,n,"signInWithPassword",FM);case"emailLink":return UM(e,{email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return km(e,r,"signUpPassword",VM);case"emailLink":return $M(e,{idToken:n,email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e){return au(t,"POST","/v1/accounts:signInWithIdp",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM="http://localhost";class ms extends T_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=__(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ms(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wo(e,n)}buildRequest(){const e={requestUri:BM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=na(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zM(t){const e=Ha(qa(t)).link,n=e?Ha(qa(e)).deep_link_id:null,r=Ha(qa(t)).deep_link_id;return(r?Ha(qa(r)).link:null)||r||n||e||t}class S_{constructor(e){var n,r,i,s,o,a;const u=Ha(qa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=jM((i=u.mode)!==null&&i!==void 0?i:null);de(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zM(e);try{return new S_(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.providerId=ra.PROVIDER_ID}static credential(e,n){return Bl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=S_.parseLink(n);return de(r,"argument-error"),Bl._fromEmailAndCode(e,r.code,r.tenantId)}}ra.PROVIDER_ID="password";ra.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ra.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends jR{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends lu{constructor(){super("facebook.com")}static credential(e){return ms._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";ni.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends lu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ms._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ri.credential(n,r)}catch{return null}}}ri.GOOGLE_SIGN_IN_METHOD="google.com";ri.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends lu{constructor(){super("github.com")}static credential(e){return ms._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.GITHUB_SIGN_IN_METHOD="github.com";ii.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends lu{constructor(){super("twitter.com")}static credential(e,n){return ms._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return si.credential(n,r)}catch{return null}}}si.TWITTER_SIGN_IN_METHOD="twitter.com";si.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WM(t,e){return au(t,"POST","/v1/accounts:signUp",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pr._fromIdTokenResponse(e,r,i),o=_E(r);return new gs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_E(r);return new gs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _E(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih extends rr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ih.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ih(e,n,r,i)}}function zR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ih._fromErrorAndOperation(t,s,e,r):s})}async function HM(t,e,n=!1){const r=await $l(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qM(t,e,n=!1){const{auth:r}=t;if(ar(r.app))return Promise.reject(xr(r));const i="reauthenticate";try{const s=await $l(t,zR(r,i,e,t),n);de(s.idToken,r,"internal-error");const o=E_(s.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),gs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nr(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(t,e,n=!1){if(ar(t.app))return Promise.reject(xr(t));const r="signIn",i=await zR(t,r,e),s=await gs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function GM(t,e){return WR(Ds(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(t){const e=Ds(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function KM(t,e,n){if(ar(t.app))return Promise.reject(xr(t));const r=Ds(t),o=await km(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WM).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&HR(t),u}),a=await gs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function QM(t,e,n){return ar(t.app)?Promise.reject(xr(t)):GM(Yt(t),ra.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&HR(t),r})}function YM(t,e,n,r){return Yt(t).onIdTokenChanged(e,n,r)}function XM(t,e,n){return Yt(t).beforeAuthStateChanged(e,n)}const Rh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rh,"1"),this.storage.removeItem(Rh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JM(){const t=Vt();return w_(t)||md(t)}const ZM=1e3,e2=10;class GR extends qR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=JM()&&vM(),this.fallbackToPolling=FR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,e2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}GR.type="LOCAL";const t2=GR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR extends qR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}KR.type="SESSION";const QR=KR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _d(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await n2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_d.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=I_("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(){return window}function i2(t){fr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(){return typeof fr().WorkerGlobalScope<"u"&&typeof fr().importScripts=="function"}async function s2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function a2(){return YR()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="firebaseLocalStorageDb",l2=1,Ch="firebaseLocalStorage",JR="fbase_key";class uu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yd(t,e){return t.transaction([Ch],e?"readwrite":"readonly").objectStore(Ch)}function u2(){const t=indexedDB.deleteDatabase(XR);return new uu(t).toPromise()}function Pm(){const t=indexedDB.open(XR,l2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ch,{keyPath:JR})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ch)?e(r):(r.close(),await u2(),e(await Pm()))})})}async function yE(t,e,n){const r=yd(t,!0).put({[JR]:e,value:n});return new uu(r).toPromise()}async function c2(t,e){const n=yd(t,!1).get(e),r=await new uu(n).toPromise();return r===void 0?null:r.value}function vE(t,e){const n=yd(t,!0).delete(e);return new uu(n).toPromise()}const h2=800,d2=3;class ZR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>d2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return YR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_d._getInstance(a2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await s2(),!this.activeServiceWorker)return;this.sender=new r2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||o2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pm();return await yE(e,Rh,"1"),await vE(e,Rh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>c2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=yd(i,!1).getAll();return new uu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZR.type="LOCAL";const f2=ZR;new ou(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t,e){return e?Nr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends T_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function m2(t){return WR(t.auth,new R_(t),t.bypassAuthState)}function g2(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),qM(n,new R_(t),t.bypassAuthState)}async function _2(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),HM(n,new R_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return m2;case"linkViaPopup":case"linkViaRedirect":return _2;case"reauthViaPopup":case"reauthViaRedirect":return g2;default:nr(this.auth,"internal-error")}}resolve(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=new ou(2e3,1e4);class uo extends eC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,uo.currentPopupAction&&uo.currentPopupAction.cancel(),uo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const e=I_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,y2.get())};e()}}uo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2="pendingRedirect",Vc=new Map;class E2 extends eC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vc.get(this.auth._key());if(!e){try{const r=await w2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vc.set(this.auth._key(),e)}return this.bypassAuthState||Vc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w2(t,e){const n=I2(e),r=S2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function T2(t,e){Vc.set(t._key(),e)}function S2(t){return Nr(t._redirectPersistence)}function I2(t){return Mc(v2,t.config.apiKey,t.name)}async function R2(t,e,n=!1){if(ar(t.app))return Promise.reject(xr(t));const r=Ds(t),i=p2(r,e),o=await new E2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=10*60*1e3;class A2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!k2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=C2&&this.cachedEventUids.clear(),this.cachedEventUids.has(EE(e))}saveEventToCache(e){this.cachedEventUids.add(EE(e)),this.lastProcessedEventTime=Date.now()}}function EE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function k2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P2(t,e={}){return Mi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b2=/^https?/;async function D2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await P2(t);for(const n of e)try{if(x2(n))return}catch{}nr(t,"unauthorized-domain")}function x2(t){const e=Cm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!b2.test(n))return!1;if(N2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=new ou(3e4,6e4);function wE(){const t=fr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function O2(t){return new Promise((e,n)=>{var r,i,s;function o(){wE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wE(),n(dr(t,"network-request-failed"))},timeout:L2.get()})}if(!((i=(r=fr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=fr().gapi)===null||s===void 0)&&s.load)o();else{const a=kM("iframefcb");return fr()[a]=()=>{gapi.load?o():n(dr(t,"network-request-failed"))},$R(`${AM()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Fc=null,e})}let Fc=null;function M2(t){return Fc=Fc||O2(t),Fc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=new ou(5e3,15e3),F2="__/auth/iframe",U2="emulator/auth/iframe",$2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j2(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?v_(e,U2):`https://${t.config.authDomain}/${F2}`,r={apiKey:e.apiKey,appName:t.name,v:bs},i=B2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${na(r).slice(1)}`}async function z2(t){const e=await M2(t),n=fr().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:j2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dr(t,"network-request-failed"),a=fr().setTimeout(()=>{s(o)},V2.get());function u(){fr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},H2=500,q2=600,G2="_blank",K2="http://localhost";class TE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Q2(t,e,n,r=H2,i=q2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},W2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Vt().toLowerCase();n&&(a=xR(c)?G2:n),DR(c)&&(e=e||K2,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[v,E])=>`${m}${v}=${E},`,"");if(_M(c)&&a!=="_self")return Y2(e||"",a),new TE(null);const f=window.open(e||"",a,d);de(f,t,"popup-blocked");try{f.focus()}catch{}return new TE(f)}function Y2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2="__/auth/handler",J2="emulator/auth/handler",Z2=encodeURIComponent("fac");async function SE(t,e,n,r,i,s){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:i};if(e instanceof jR){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof lu){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${Z2}=${encodeURIComponent(u)}`:"";return`${eV(t)}?${na(a).slice(1)}${c}`}function eV({config:t}){return t.emulator?v_(t,J2):`https://${t.authDomain}/${X2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="webStorageSupport";class tV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QR,this._completeRedirectFn=R2,this._overrideRedirectResult=T2}async _openPopup(e,n,r,i){var s;Ur((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await SE(e,n,r,Cm(),i);return Q2(e,o,I_())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await SE(e,n,r,Cm(),i);return i2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ur(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await z2(e),r=new A2(e);return n.register("authEvent",i=>(de(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rp,{type:rp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rp];o!==void 0&&n(!!o),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return FR()||w_()||md()}}const nV=tV;var IE="@firebase/auth",RE="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sV(t){tr(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UR(t)},c=new IM(r,i,s,u);return xM(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tr(new Fn("auth-internal",e=>{const n=Ds(e.getProvider("auth").getImmediate());return(r=>new rV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(IE,RE,iV(t)),mn(IE,RE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV=5*60,aV=BI("authIdTokenMaxAge")||oV;let CE=null;const lV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aV)return;const i=n==null?void 0:n.token;CE!==i&&(CE=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uV(t=JI()){const e=su(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DM(t,{popupRedirectResolver:nV,persistence:[f2,t2,QR]}),r=BI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=lV(s.toString());XM(n,o,()=>o(n.currentUser)),YM(n,a=>o(a))}}const i=UI("auth");return i&&LM(n,`http://${i}`),n}function cV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}RM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sV("Browser");var AE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var os,nC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.D=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(C,k,D){for(var R=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)R[$e-2]=arguments[$e];return y.prototype[k].apply(C,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,I){I||(I=0);var C=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)C[k]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(k=0;16>k;++k)C[k]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],k=w.g[2];var D=w.g[3],R=y+(D^I&(k^D))+C[0]+3614090360&4294967295;y=I+(R<<7&4294967295|R>>>25),R=D+(k^y&(I^k))+C[1]+3905402710&4294967295,D=y+(R<<12&4294967295|R>>>20),R=k+(I^D&(y^I))+C[2]+606105819&4294967295,k=D+(R<<17&4294967295|R>>>15),R=I+(y^k&(D^y))+C[3]+3250441966&4294967295,I=k+(R<<22&4294967295|R>>>10),R=y+(D^I&(k^D))+C[4]+4118548399&4294967295,y=I+(R<<7&4294967295|R>>>25),R=D+(k^y&(I^k))+C[5]+1200080426&4294967295,D=y+(R<<12&4294967295|R>>>20),R=k+(I^D&(y^I))+C[6]+2821735955&4294967295,k=D+(R<<17&4294967295|R>>>15),R=I+(y^k&(D^y))+C[7]+4249261313&4294967295,I=k+(R<<22&4294967295|R>>>10),R=y+(D^I&(k^D))+C[8]+1770035416&4294967295,y=I+(R<<7&4294967295|R>>>25),R=D+(k^y&(I^k))+C[9]+2336552879&4294967295,D=y+(R<<12&4294967295|R>>>20),R=k+(I^D&(y^I))+C[10]+4294925233&4294967295,k=D+(R<<17&4294967295|R>>>15),R=I+(y^k&(D^y))+C[11]+2304563134&4294967295,I=k+(R<<22&4294967295|R>>>10),R=y+(D^I&(k^D))+C[12]+1804603682&4294967295,y=I+(R<<7&4294967295|R>>>25),R=D+(k^y&(I^k))+C[13]+4254626195&4294967295,D=y+(R<<12&4294967295|R>>>20),R=k+(I^D&(y^I))+C[14]+2792965006&4294967295,k=D+(R<<17&4294967295|R>>>15),R=I+(y^k&(D^y))+C[15]+1236535329&4294967295,I=k+(R<<22&4294967295|R>>>10),R=y+(k^D&(I^k))+C[1]+4129170786&4294967295,y=I+(R<<5&4294967295|R>>>27),R=D+(I^k&(y^I))+C[6]+3225465664&4294967295,D=y+(R<<9&4294967295|R>>>23),R=k+(y^I&(D^y))+C[11]+643717713&4294967295,k=D+(R<<14&4294967295|R>>>18),R=I+(D^y&(k^D))+C[0]+3921069994&4294967295,I=k+(R<<20&4294967295|R>>>12),R=y+(k^D&(I^k))+C[5]+3593408605&4294967295,y=I+(R<<5&4294967295|R>>>27),R=D+(I^k&(y^I))+C[10]+38016083&4294967295,D=y+(R<<9&4294967295|R>>>23),R=k+(y^I&(D^y))+C[15]+3634488961&4294967295,k=D+(R<<14&4294967295|R>>>18),R=I+(D^y&(k^D))+C[4]+3889429448&4294967295,I=k+(R<<20&4294967295|R>>>12),R=y+(k^D&(I^k))+C[9]+568446438&4294967295,y=I+(R<<5&4294967295|R>>>27),R=D+(I^k&(y^I))+C[14]+3275163606&4294967295,D=y+(R<<9&4294967295|R>>>23),R=k+(y^I&(D^y))+C[3]+4107603335&4294967295,k=D+(R<<14&4294967295|R>>>18),R=I+(D^y&(k^D))+C[8]+1163531501&4294967295,I=k+(R<<20&4294967295|R>>>12),R=y+(k^D&(I^k))+C[13]+2850285829&4294967295,y=I+(R<<5&4294967295|R>>>27),R=D+(I^k&(y^I))+C[2]+4243563512&4294967295,D=y+(R<<9&4294967295|R>>>23),R=k+(y^I&(D^y))+C[7]+1735328473&4294967295,k=D+(R<<14&4294967295|R>>>18),R=I+(D^y&(k^D))+C[12]+2368359562&4294967295,I=k+(R<<20&4294967295|R>>>12),R=y+(I^k^D)+C[5]+4294588738&4294967295,y=I+(R<<4&4294967295|R>>>28),R=D+(y^I^k)+C[8]+2272392833&4294967295,D=y+(R<<11&4294967295|R>>>21),R=k+(D^y^I)+C[11]+1839030562&4294967295,k=D+(R<<16&4294967295|R>>>16),R=I+(k^D^y)+C[14]+4259657740&4294967295,I=k+(R<<23&4294967295|R>>>9),R=y+(I^k^D)+C[1]+2763975236&4294967295,y=I+(R<<4&4294967295|R>>>28),R=D+(y^I^k)+C[4]+1272893353&4294967295,D=y+(R<<11&4294967295|R>>>21),R=k+(D^y^I)+C[7]+4139469664&4294967295,k=D+(R<<16&4294967295|R>>>16),R=I+(k^D^y)+C[10]+3200236656&4294967295,I=k+(R<<23&4294967295|R>>>9),R=y+(I^k^D)+C[13]+681279174&4294967295,y=I+(R<<4&4294967295|R>>>28),R=D+(y^I^k)+C[0]+3936430074&4294967295,D=y+(R<<11&4294967295|R>>>21),R=k+(D^y^I)+C[3]+3572445317&4294967295,k=D+(R<<16&4294967295|R>>>16),R=I+(k^D^y)+C[6]+76029189&4294967295,I=k+(R<<23&4294967295|R>>>9),R=y+(I^k^D)+C[9]+3654602809&4294967295,y=I+(R<<4&4294967295|R>>>28),R=D+(y^I^k)+C[12]+3873151461&4294967295,D=y+(R<<11&4294967295|R>>>21),R=k+(D^y^I)+C[15]+530742520&4294967295,k=D+(R<<16&4294967295|R>>>16),R=I+(k^D^y)+C[2]+3299628645&4294967295,I=k+(R<<23&4294967295|R>>>9),R=y+(k^(I|~D))+C[0]+4096336452&4294967295,y=I+(R<<6&4294967295|R>>>26),R=D+(I^(y|~k))+C[7]+1126891415&4294967295,D=y+(R<<10&4294967295|R>>>22),R=k+(y^(D|~I))+C[14]+2878612391&4294967295,k=D+(R<<15&4294967295|R>>>17),R=I+(D^(k|~y))+C[5]+4237533241&4294967295,I=k+(R<<21&4294967295|R>>>11),R=y+(k^(I|~D))+C[12]+1700485571&4294967295,y=I+(R<<6&4294967295|R>>>26),R=D+(I^(y|~k))+C[3]+2399980690&4294967295,D=y+(R<<10&4294967295|R>>>22),R=k+(y^(D|~I))+C[10]+4293915773&4294967295,k=D+(R<<15&4294967295|R>>>17),R=I+(D^(k|~y))+C[1]+2240044497&4294967295,I=k+(R<<21&4294967295|R>>>11),R=y+(k^(I|~D))+C[8]+1873313359&4294967295,y=I+(R<<6&4294967295|R>>>26),R=D+(I^(y|~k))+C[15]+4264355552&4294967295,D=y+(R<<10&4294967295|R>>>22),R=k+(y^(D|~I))+C[6]+2734768916&4294967295,k=D+(R<<15&4294967295|R>>>17),R=I+(D^(k|~y))+C[13]+1309151649&4294967295,I=k+(R<<21&4294967295|R>>>11),R=y+(k^(I|~D))+C[4]+4149444226&4294967295,y=I+(R<<6&4294967295|R>>>26),R=D+(I^(y|~k))+C[11]+3174756917&4294967295,D=y+(R<<10&4294967295|R>>>22),R=k+(y^(D|~I))+C[2]+718787259&4294967295,k=D+(R<<15&4294967295|R>>>17),R=I+(D^(k|~y))+C[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+D&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var I=y-this.blockSize,C=this.B,k=this.h,D=0;D<y;){if(k==0)for(;D<=I;)i(this,w,D),D+=this.blockSize;if(typeof w=="string"){for(;D<y;)if(C[k++]=w.charCodeAt(D++),k==this.blockSize){i(this,C),k=0;break}}else for(;D<y;)if(C[k++]=w[D++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var I=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=I&255,I/=256;for(this.u(w),w=Array(16),y=I=0;4>y;++y)for(var C=0;32>C;C+=8)w[I++]=this.g[y]>>>C&255;return w};function s(w,y){var I=a;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function o(w,y){this.h=y;for(var I=[],C=!0,k=w.length-1;0<=k;k--){var D=w[k]|0;C&&D==y||(I[k]=D,C=!1)}this.g=I}var a={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return P(c(-w));for(var y=[],I=1,C=0;w>=I;C++)y[C]=w/I|0,I*=4294967296;return new o(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return P(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(y,8)),C=f,k=0;k<w.length;k+=8){var D=Math.min(8,w.length-k),R=parseInt(w.substring(k,k+D),y);8>D?(D=c(Math.pow(y,D)),C=C.j(D).add(c(R))):(C=C.j(I),C=C.add(c(R)))}return C}var f=u(0),m=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();for(var w=0,y=1,I=0;I<this.g.length;I++){var C=this.i(I);w+=(0<=C?C:4294967296+C)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(E(this))return"0";if(A(this))return"-"+P(this).toString(w);for(var y=c(Math.pow(w,6)),I=this,C="";;){var k=O(I,y).g;I=S(I,k.j(y));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=k,E(I))return D+C;for(;6>D.length;)D="0"+D;C=D+C}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function E(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function A(w){return w.h==-1}t.l=function(w){return w=S(this,w),A(w)?-1:E(w)?0:1};function P(w){for(var y=w.g.length,I=[],C=0;C<y;C++)I[C]=~w.g[C];return new o(I,~w.h).add(m)}t.abs=function(){return A(this)?P(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],C=0,k=0;k<=y;k++){var D=C+(this.i(k)&65535)+(w.i(k)&65535),R=(D>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);C=R>>>16,D&=65535,R&=65535,I[k]=R<<16|D}return new o(I,I[I.length-1]&-2147483648?-1:0)};function S(w,y){return w.add(P(y))}t.j=function(w){if(E(this)||E(w))return f;if(A(this))return A(w)?P(this).j(P(w)):P(P(this).j(w));if(A(w))return P(this.j(P(w)));if(0>this.l(v)&&0>w.l(v))return c(this.m()*w.m());for(var y=this.g.length+w.g.length,I=[],C=0;C<2*y;C++)I[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<w.g.length;k++){var D=this.i(C)>>>16,R=this.i(C)&65535,$e=w.i(k)>>>16,Jt=w.i(k)&65535;I[2*C+2*k]+=R*Jt,_(I,2*C+2*k),I[2*C+2*k+1]+=D*Jt,_(I,2*C+2*k+1),I[2*C+2*k+1]+=R*$e,_(I,2*C+2*k+1),I[2*C+2*k+2]+=D*$e,_(I,2*C+2*k+2)}for(C=0;C<y;C++)I[C]=I[2*C+1]<<16|I[2*C];for(C=y;C<2*y;C++)I[C]=0;return new o(I,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function T(w,y){this.g=w,this.h=y}function O(w,y){if(E(y))throw Error("division by zero");if(E(w))return new T(f,f);if(A(w))return y=O(P(w),y),new T(P(y.g),P(y.h));if(A(y))return y=O(w,P(y)),new T(P(y.g),y.h);if(30<w.g.length){if(A(w)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,C=y;0>=C.l(w);)I=F(I),C=F(C);var k=U(I,1),D=U(C,1);for(C=U(C,2),I=U(I,2);!E(C);){var R=D.add(C);0>=R.l(w)&&(k=k.add(I),D=R),C=U(C,1),I=U(I,1)}return y=S(w,k.j(y)),new T(k,y)}for(k=f;0<=w.l(y);){for(I=Math.max(1,Math.floor(w.m()/y.m())),C=Math.ceil(Math.log(I)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),D=c(I),R=D.j(y);A(R)||0<R.l(w);)I-=C,D=c(I),R=D.j(y);E(D)&&(D=m),k=k.add(D),w=S(w,R)}return new T(k,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],C=0;C<y;C++)I[C]=this.i(C)&w.i(C);return new o(I,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],C=0;C<y;C++)I[C]=this.i(C)|w.i(C);return new o(I,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],C=0;C<y;C++)I[C]=this.i(C)^w.i(C);return new o(I,this.h^w.h)};function F(w){for(var y=w.g.length+1,I=[],C=0;C<y;C++)I[C]=w.i(C)<<1|w.i(C-1)>>>31;return new o(I,w.h)}function U(w,y){var I=y>>5;y%=32;for(var C=w.g.length-I,k=[],D=0;D<C;D++)k[D]=0<y?w.i(D+I)>>>y|w.i(D+I+1)<<32-y:w.i(D+I);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nC=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,os=o}).apply(typeof AE<"u"?AE:typeof self<"u"?self:typeof window<"u"?window:{});var dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rC,iC,Ga,sC,Uc,Nm,oC,aC,lC;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof dc=="object"&&dc];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var x=l[g];if(!(x in p))break e;p=p[x]}l=l[l.length-1],g=p[l],h=h(g),h!=g&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,g=!1,x={next:function(){if(!g&&p<l.length){var M=p++;return{value:h(M,l[M]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),l.apply(h,x)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function v(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function E(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(g,x,M){for(var G=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)G[Fe-2]=arguments[Fe];return h.prototype[x].apply(g,G)}}function A(l){const h=l.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=l[g];return p}return[]}function P(l,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(u(g)){const x=l.length||0,M=g.length||0;l.length=x+M;for(let G=0;G<M;G++)l[x+G]=g[G]}else l.push(g)}}class S{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(l){return/^[\s\xa0]*$/.test(l)}function T(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var F=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function U(l,h,p){for(const g in l)h.call(p,l[g],g,l)}function w(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function y(l){const h={};for(const p in l)h[p]=l[p];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,h){let p,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(p in g)l[p]=g[p];for(let M=0;M<I.length;M++)p=I[M],Object.prototype.hasOwnProperty.call(g,p)&&(l[p]=g[p])}}function k(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function D(l){a.setTimeout(()=>{throw l},0)}function R(){var l=ae;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class $e{constructor(){this.h=this.g=null}add(h,p){const g=Jt.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Jt=new S(()=>new Et,l=>l.reset());class Et{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,K=!1,ae=new $e,J=()=>{const l=a.Promise.resolve(void 0);pt=()=>{l.then(re)}};var re=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(p){D(p)}var h=Jt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}K=!1};function b(){this.s=this.s,this.C=this.C}b.prototype.s=!1,b.prototype.ma=function(){this.s||(this.s=!0,this.N())},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var q=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function se(l,h){if($.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(F){e:{try{O(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Z[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&se.aa.h.call(this)}}E(se,$);var Z={2:"touch",3:"pen",4:"mouse"};se.prototype.h=function(){se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var fe="closure_listenable_"+(1e6*Math.random()|0),Ee=0;function ie(l,h,p,g,x){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=x,this.key=++Ee,this.da=this.fa=!1}function xe(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Xe(l){this.src=l,this.g={},this.h=0}Xe.prototype.add=function(l,h,p,g,x){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var G=Me(l,h,g,x);return-1<G?(h=l[G],p||(h.fa=!1)):(h=new ie(h,this.src,M,!!g,x),h.fa=p,l.push(h)),h};function Pe(l,h){var p=h.type;if(p in l.g){var g=l.g[p],x=Array.prototype.indexOf.call(g,h,void 0),M;(M=0<=x)&&Array.prototype.splice.call(g,x,1),M&&(xe(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Me(l,h,p,g){for(var x=0;x<l.length;++x){var M=l[x];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==g)return x}return-1}var Zt="closure_lm_"+(1e6*Math.random()|0),$n={};function en(l,h,p,g,x){if(Array.isArray(h)){for(var M=0;M<h.length;M++)en(l,h[M],p,g,x);return null}return p=Us(p),l&&l[fe]?l.K(h,p,c(g)?!!g.capture:!!g,x):tn(l,h,p,!1,g,x)}function tn(l,h,p,g,x,M){if(!h)throw Error("Invalid event type");var G=c(x)?!!x.capture:!!x,Fe=fa(l);if(Fe||(l[Zt]=Fe=new Xe(l)),p=Fe.add(h,p,g,G,M),p.proxy)return p;if(g=ku(),p.proxy=g,g.src=l,g.listener=p,l.addEventListener)q||(x=G),x===void 0&&(x=!1),l.addEventListener(h.toString(),g,x);else if(l.attachEvent)l.attachEvent(da(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ku(){function l(p){return h.call(l.src,l.listener,p)}const h=Nu;return l}function Pu(l,h,p,g,x){if(Array.isArray(h))for(var M=0;M<h.length;M++)Pu(l,h[M],p,g,x);else g=c(g)?!!g.capture:!!g,p=Us(p),l&&l[fe]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],p=Me(M,p,g,x),-1<p&&(xe(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=fa(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Me(h,p,g,x)),(p=-1<l?h[l]:null)&&$i(p))}function $i(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[fe])Pe(h.i,l);else{var p=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(p,g,l.capture):h.detachEvent?h.detachEvent(da(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=fa(h))?(Pe(p,l),p.h==0&&(p.src=null,h[Zt]=null)):xe(l)}}}function da(l){return l in $n?$n[l]:$n[l]="on"+l}function Nu(l,h){if(l.da)l=!0;else{h=new se(h,this);var p=l.listener,g=l.ha||l.src;l.fa&&$i(l),l=p.call(g,h)}return l}function fa(l){return l=l[Zt],l instanceof Xe?l:null}var Bi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Us(l){return typeof l=="function"?l:(l[Bi]||(l[Bi]=function(h){return l.handleEvent(h)}),l[Bi])}function wt(){b.call(this),this.i=new Xe(this),this.M=this,this.F=null}E(wt,b),wt.prototype[fe]=!0,wt.prototype.removeEventListener=function(l,h,p,g){Pu(this,l,h,p,g)};function Pt(l,h){var p,g=l.F;if(g)for(p=[];g;g=g.F)p.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new $(h,l);else if(h instanceof $)h.target=h.target||l;else{var x=h;h=new $(g,l),C(h,x)}if(x=!0,p)for(var M=p.length-1;0<=M;M--){var G=h.g=p[M];x=$s(G,g,!0,h)&&x}if(G=h.g=l,x=$s(G,g,!0,h)&&x,x=$s(G,g,!1,h)&&x,p)for(M=0;M<p.length;M++)G=h.g=p[M],x=$s(G,g,!1,h)&&x}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],g=0;g<p.length;g++)xe(p[g]);delete l.g[h],l.h--}}this.F=null},wt.prototype.K=function(l,h,p,g){return this.i.add(String(l),h,!1,p,g)},wt.prototype.L=function(l,h,p,g){return this.i.add(String(l),h,!0,p,g)};function $s(l,h,p,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,M=0;M<h.length;++M){var G=h[M];if(G&&!G.da&&G.capture==p){var Fe=G.listener,Nt=G.ha||G.src;G.fa&&Pe(l.i,G),x=Fe.call(Nt,g)!==!1&&x}}return x&&!g.defaultPrevented}function bu(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Du(l){l.g=bu(()=>{l.g=null,l.i&&(l.i=!1,Du(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class lf extends b{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Du(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(l){b.call(this),this.h=l,this.g={}}E(Hr,b);var xu=[];function Lu(l){U(l.g,function(h,p){this.g.hasOwnProperty(p)&&$i(h)},l),l.g={}}Hr.prototype.N=function(){Hr.aa.N.call(this),Lu(this)},Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var L=a.JSON.stringify,N=a.JSON.parse,j=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Q(){}Q.prototype.h=null;function Y(l){return l.h||(l.h=l.i())}function ee(){}var oe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function le(){$.call(this,"d")}E(le,$);function ue(){$.call(this,"c")}E(ue,$);var pe={},Ve=null;function mt(){return Ve=Ve||new wt}pe.La="serverreachability";function at(l){$.call(this,pe.La,l)}E(at,$);function Tt(l){const h=mt();Pt(h,new at(h))}pe.STAT_EVENT="statevent";function an(l,h){$.call(this,pe.STAT_EVENT,l),this.stat=h}E(an,$);function rt(l){const h=mt();Pt(h,new an(h,l))}pe.Ma="timingevent";function ji(l,h){$.call(this,pe.Ma,l),this.size=h}E(ji,$);function Bn(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function jn(){this.g=!0}jn.prototype.xa=function(){this.g=!1};function tP(l,h,p,g,x,M){l.info(function(){if(l.g)if(M)for(var G="",Fe=M.split("&"),Nt=0;Nt<Fe.length;Nt++){var Ne=Fe[Nt].split("=");if(1<Ne.length){var Ft=Ne[0];Ne=Ne[1];var Ut=Ft.split("_");G=2<=Ut.length&&Ut[1]=="type"?G+(Ft+"="+Ne+"&"):G+(Ft+"=redacted&")}}else G=null;else G=M;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+p+`
`+G})}function nP(l,h,p,g,x,M,G){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+p+`
`+M+" "+G})}function Bs(l,h,p,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+iP(l,p)+(g?" "+g:"")})}function rP(l,h){l.info(function(){return"TIMEOUT: "+h})}jn.prototype.info=function(){};function iP(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var g=p[l];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var M=x[0];if(M!="noop"&&M!="stop"&&M!="close")for(var G=1;G<x.length;G++)x[G]=""}}}}return L(p)}catch{return h}}var Ou={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$y={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},uf;function Mu(){}E(Mu,Q),Mu.prototype.g=function(){return new XMLHttpRequest},Mu.prototype.i=function(){return{}},uf=new Mu;function qr(l,h,p,g){this.j=l,this.i=h,this.l=p,this.R=g||1,this.U=new Hr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new By}function By(){this.i=null,this.g="",this.h=!1}var jy={},cf={};function hf(l,h,p){l.L=1,l.v=$u(wr(h)),l.m=p,l.P=!0,zy(l,null)}function zy(l,h){l.F=Date.now(),Vu(l),l.A=wr(l.v);var p=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),rv(p.i,"t",g),l.C=0,p=l.j.J,l.h=new By,l.g=wv(l.j,p?h:null,!l.m),0<l.O&&(l.M=new lf(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,g=l.ca;var x="readystatechange";Array.isArray(x)||(x&&(xu[0]=x.toString()),x=xu);for(var M=0;M<x.length;M++){var G=en(p,x[M],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Tt(),tP(l.i,l.u,l.A,l.l,l.R,l.m)}qr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Tr(l)==3?h.j():this.Y(l)},qr.prototype.Y=function(l){try{if(l==this.g)e:{const Ut=Tr(this.g);var h=this.g.Ba();const Ws=this.g.Z();if(!(3>Ut)&&(Ut!=3||this.g&&(this.h.h||this.g.oa()||cv(this.g)))){this.J||Ut!=4||h==7||(h==8||0>=Ws?Tt(3):Tt(2)),df(this);var p=this.g.Z();this.X=p;t:if(Wy(this)){var g=cv(this.g);l="";var x=g.length,M=Tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zi(this),pa(this);var G="";break t}this.h.i=new a.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(M&&h==x-1)});g.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,nP(this.i,this.u,this.A,this.l,this.R,Ut,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,Nt=this.g;if((Fe=Nt.g?Nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(Fe)){var Ne=Fe;break t}}Ne=null}if(p=Ne)Bs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ff(this,p);else{this.o=!1,this.s=3,rt(12),zi(this),pa(this);break e}}if(this.P){p=!0;let zn;for(;!this.J&&this.C<G.length;)if(zn=sP(this,G),zn==cf){Ut==4&&(this.s=4,rt(14),p=!1),Bs(this.i,this.l,null,"[Incomplete Response]");break}else if(zn==jy){this.s=4,rt(15),Bs(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else Bs(this.i,this.l,zn,null),ff(this,zn);if(Wy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ut!=4||G.length!=0||this.h.h||(this.s=1,rt(16),p=!1),this.o=this.o&&p,!p)Bs(this.i,this.l,G,"[Invalid Chunked Response]"),zi(this),pa(this);else if(0<G.length&&!this.W){this.W=!0;var Ft=this.j;Ft.g==this&&Ft.ba&&!Ft.M&&(Ft.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),vf(Ft),Ft.M=!0,rt(11))}}else Bs(this.i,this.l,G,null),ff(this,G);Ut==4&&zi(this),this.o&&!this.J&&(Ut==4?_v(this.j,this):(this.o=!1,Vu(this)))}else TP(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),zi(this),pa(this)}}}catch{}finally{}};function Wy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function sP(l,h){var p=l.C,g=h.indexOf(`
`,p);return g==-1?cf:(p=Number(h.substring(p,g)),isNaN(p)?jy:(g+=1,g+p>h.length?cf:(h=h.slice(g,g+p),l.C=g+p,h)))}qr.prototype.cancel=function(){this.J=!0,zi(this)};function Vu(l){l.S=Date.now()+l.I,Hy(l,l.I)}function Hy(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Bn(m(l.ba,l),h)}function df(l){l.B&&(a.clearTimeout(l.B),l.B=null)}qr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(rP(this.i,this.A),this.L!=2&&(Tt(),rt(17)),zi(this),this.s=2,pa(this)):Hy(this,this.S-l)};function pa(l){l.j.G==0||l.J||_v(l.j,l)}function zi(l){df(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Lu(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function ff(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||pf(p.h,l))){if(!l.K&&pf(p.h,l)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Hu(p),zu(p);else break e;yf(p),rt(18)}}else p.za=x[1],0<p.za-p.T&&37500>x[2]&&p.F&&p.v==0&&!p.C&&(p.C=Bn(m(p.Za,p),6e3));if(1>=Ky(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Hi(p,11)}else if((l.K||p.g==l)&&Hu(p),!_(h))for(x=p.Da.g.parse(h),h=0;h<x.length;h++){let Ne=x[h];if(p.T=Ne[0],Ne=Ne[1],p.G==2)if(Ne[0]=="c"){p.K=Ne[1],p.ia=Ne[2];const Ft=Ne[3];Ft!=null&&(p.la=Ft,p.j.info("VER="+p.la));const Ut=Ne[4];Ut!=null&&(p.Aa=Ut,p.j.info("SVER="+p.Aa));const Ws=Ne[5];Ws!=null&&typeof Ws=="number"&&0<Ws&&(g=1.5*Ws,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const zn=l.g;if(zn){const Gu=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gu){var M=g.h;M.g||Gu.indexOf("spdy")==-1&&Gu.indexOf("quic")==-1&&Gu.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(mf(M,M.h),M.h=null))}if(g.D){const Ef=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ef&&(g.ya=Ef,We(g.I,g.D,Ef))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var G=l;if(g.qa=Ev(g,g.J?g.ia:null,g.W),G.K){Qy(g.h,G);var Fe=G,Nt=g.L;Nt&&(Fe.I=Nt),Fe.B&&(df(Fe),Vu(Fe)),g.g=G}else mv(g);0<p.i.length&&Wu(p)}else Ne[0]!="stop"&&Ne[0]!="close"||Hi(p,7);else p.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Hi(p,7):_f(p):Ne[0]!="noop"&&p.l&&p.l.ta(Ne),p.v=0)}}Tt(4)}catch{}}var oP=class{constructor(l,h){this.g=l,this.map=h}};function qy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ky(l){return l.h?1:l.g?l.g.size:0}function pf(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function mf(l,h){l.g?l.g.add(h):l.h=h}function Qy(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}qy.prototype.cancel=function(){if(this.i=Yy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Yy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return A(l.i)}function aP(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,g=0;g<p;g++)h.push(l[g]);return h}h=[],p=0;for(g in l)h[p++]=l[g];return h}function lP(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const g in l)h[p++]=g;return h}}}function Xy(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=lP(l),g=aP(l),x=g.length,M=0;M<x;M++)h.call(void 0,g[M],p&&p[M],l)}var Jy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uP(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var g=l[p].indexOf("="),x=null;if(0<=g){var M=l[p].substring(0,g);x=l[p].substring(g+1)}else M=l[p];h(M,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Wi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Wi){this.h=l.h,Fu(this,l.j),this.o=l.o,this.g=l.g,Uu(this,l.s),this.l=l.l;var h=l.i,p=new _a;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Zy(this,p),this.m=l.m}else l&&(h=String(l).match(Jy))?(this.h=!1,Fu(this,h[1]||"",!0),this.o=ma(h[2]||""),this.g=ma(h[3]||"",!0),Uu(this,h[4]),this.l=ma(h[5]||"",!0),Zy(this,h[6]||"",!0),this.m=ma(h[7]||"")):(this.h=!1,this.i=new _a(null,this.h))}Wi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(ga(h,ev,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(ga(h,ev,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(ga(p,p.charAt(0)=="/"?dP:hP,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",ga(p,pP)),l.join("")};function wr(l){return new Wi(l)}function Fu(l,h,p){l.j=p?ma(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Uu(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Zy(l,h,p){h instanceof _a?(l.i=h,mP(l.i,l.h)):(p||(h=ga(h,fP)),l.i=new _a(h,l.h))}function We(l,h,p){l.i.set(h,p)}function $u(l){return We(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ma(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ga(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,cP),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function cP(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ev=/[#\/\?@]/g,hP=/[#\?:]/g,dP=/[#\?]/g,fP=/[#\?@]/g,pP=/#/g;function _a(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Gr(l){l.g||(l.g=new Map,l.h=0,l.i&&uP(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=_a.prototype,t.add=function(l,h){Gr(this),this.i=null,l=js(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function tv(l,h){Gr(l),h=js(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function nv(l,h){return Gr(l),h=js(l,h),l.g.has(h)}t.forEach=function(l,h){Gr(this),this.g.forEach(function(p,g){p.forEach(function(x){l.call(h,x,g,this)},this)},this)},t.na=function(){Gr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const x=l[g];for(let M=0;M<x.length;M++)p.push(h[g])}return p},t.V=function(l){Gr(this);let h=[];if(typeof l=="string")nv(this,l)&&(h=h.concat(this.g.get(js(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return Gr(this),this.i=null,l=js(this,l),nv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function rv(l,h,p){tv(l,h),0<p.length&&(l.i=null,l.g.set(js(l,h),A(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const M=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var x=M;G[g]!==""&&(x+="="+encodeURIComponent(String(G[g]))),l.push(x)}}return this.i=l.join("&")};function js(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function mP(l,h){h&&!l.j&&(Gr(l),l.i=null,l.g.forEach(function(p,g){var x=g.toLowerCase();g!=x&&(tv(this,g),rv(this,x,p))},l)),l.j=h}function gP(l,h){const p=new jn;if(a.Image){const g=new Image;g.onload=v(Kr,p,"TestLoadImage: loaded",!0,h,g),g.onerror=v(Kr,p,"TestLoadImage: error",!1,h,g),g.onabort=v(Kr,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(Kr,p,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function _P(l,h){const p=new jn,g=new AbortController,x=setTimeout(()=>{g.abort(),Kr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(M=>{clearTimeout(x),M.ok?Kr(p,"TestPingServer: ok",!0,h):Kr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Kr(p,"TestPingServer: error",!1,h)})}function Kr(l,h,p,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(p)}catch{}}function yP(){this.g=new j}function vP(l,h,p){const g=p||"";try{Xy(l,function(x,M){let G=x;c(x)&&(G=L(x)),h.push(g+M+"="+encodeURIComponent(G))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function ya(l){this.l=l.Ub||null,this.j=l.eb||!1}E(ya,Q),ya.prototype.g=function(){return new Bu(this.l,this.j)},ya.prototype.i=function(l){return function(){return l}}({});function Bu(l,h){wt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Bu,wt),t=Bu.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Ea(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,va(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ea(this)),this.g&&(this.readyState=3,Ea(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;iv(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function iv(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?va(this):Ea(this),this.readyState==3&&iv(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,va(this))},t.Qa=function(l){this.g&&(this.response=l,va(this))},t.ga=function(){this.g&&va(this)};function va(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ea(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function Ea(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Bu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function sv(l){let h="";return U(l,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function gf(l,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=sv(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):We(l,h,p))}function it(l){wt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(it,wt);var EP=/^https?$/i,wP=["POST","PUT"];t=it.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():uf.g(),this.v=this.o?Y(this.o):Y(uf),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){ov(this,M);return}if(l=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)p.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const M of g.keys())p.set(M,g.get(M));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),x=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(wP,h,void 0))||g||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,G]of p)this.g.setRequestHeader(M,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{uv(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){ov(this,M)}};function ov(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,av(l),ju(l)}function av(l){l.A||(l.A=!0,Pt(l,"complete"),Pt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Pt(this,"complete"),Pt(this,"abort"),ju(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ju(this,!0)),it.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lv(this):this.bb())},t.bb=function(){lv(this)};function lv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Tr(l)!=4||l.Z()!=2)){if(l.u&&Tr(l)==4)bu(l.Ea,0,l);else if(Pt(l,"readystatechange"),Tr(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=G===0){var x=String(l.D).match(Jy)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),g=!EP.test(x?x.toLowerCase():"")}p=g}if(p)Pt(l,"complete"),Pt(l,"success");else{l.m=6;try{var M=2<Tr(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",av(l)}}finally{ju(l)}}}}function ju(l,h){if(l.g){uv(l);const p=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Pt(l,"ready");try{p.onreadystatechange=g}catch{}}}function uv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Tr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Tr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),N(h)}};function cv(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function TP(l){const h={};l=(l.g&&2<=Tr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(_(l[g]))continue;var p=k(l[g]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[x]||[];h[x]=M,M.push(p)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wa(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function hv(l){this.Aa=0,this.i=[],this.j=new jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wa("baseRetryDelayMs",5e3,l),this.cb=wa("retryDelaySeedMs",1e4,l),this.Wa=wa("forwardChannelMaxRetries",2,l),this.wa=wa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new qy(l&&l.concurrentRequestLimit),this.Da=new yP,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hv.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,g){rt(0),this.W=l,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Ev(this,null,this.W),Wu(this)};function _f(l){if(dv(l),l.G==3){var h=l.U++,p=wr(l.I);if(We(p,"SID",l.K),We(p,"RID",h),We(p,"TYPE","terminate"),Ta(l,p),h=new qr(l,l.j,h),h.L=2,h.v=$u(wr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=wv(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Vu(h)}vv(l)}function zu(l){l.g&&(vf(l),l.g.cancel(),l.g=null)}function dv(l){zu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Hu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Wu(l){if(!Gy(l.h)&&!l.s){l.s=!0;var h=l.Ga;pt||J(),K||(pt(),K=!0),ae.add(h,l),l.B=0}}function SP(l,h){return Ky(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Bn(m(l.Ga,l,h),yv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const x=new qr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=y(M),C(M,this.S)):M=this.S),this.m!==null||this.O||(x.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=pv(this,x,h),p=wr(this.I),We(p,"RID",l),We(p,"CVER",22),this.D&&We(p,"X-HTTP-Session-Id",this.D),Ta(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(sv(M)))+"&"+h:this.m&&gf(p,this.m,M)),mf(this.h,x),this.Ua&&We(p,"TYPE","init"),this.P?(We(p,"$req",h),We(p,"SID","null"),x.T=!0,hf(x,p,null)):hf(x,p,h),this.G=2}}else this.G==3&&(l?fv(this,l):this.i.length==0||Gy(this.h)||fv(this))};function fv(l,h){var p;h?p=h.l:p=l.U++;const g=wr(l.I);We(g,"SID",l.K),We(g,"RID",p),We(g,"AID",l.T),Ta(l,g),l.m&&l.o&&gf(g,l.m,l.o),p=new qr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=pv(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),mf(l.h,p),hf(p,g,h)}function Ta(l,h){l.H&&U(l.H,function(p,g){We(h,g,p)}),l.l&&Xy({},function(p,g){We(h,g,p)})}function pv(l,h,p){p=Math.min(l.i.length,p);var g=l.l?m(l.l.Na,l.l,l):null;e:{var x=l.i;let M=-1;for(;;){const G=["count="+p];M==-1?0<p?(M=x[0].g,G.push("ofs="+M)):M=0:G.push("ofs="+M);let Fe=!0;for(let Nt=0;Nt<p;Nt++){let Ne=x[Nt].g;const Ft=x[Nt].map;if(Ne-=M,0>Ne)M=Math.max(0,x[Nt].g-100),Fe=!1;else try{vP(Ft,G,"req"+Ne+"_")}catch{g&&g(Ft)}}if(Fe){g=G.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,g}function mv(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;pt||J(),K||(pt(),K=!0),ae.add(h,l),l.v=0}}function yf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Bn(m(l.Fa,l),yv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,gv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Bn(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),zu(this),gv(this))};function vf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function gv(l){l.g=new qr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=wr(l.qa);We(h,"RID","rpc"),We(h,"SID",l.K),We(h,"AID",l.T),We(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&We(h,"TO",l.ja),We(h,"TYPE","xmlhttp"),Ta(l,h),l.m&&l.o&&gf(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=$u(wr(h)),p.m=null,p.P=!0,zy(p,l)}t.Za=function(){this.C!=null&&(this.C=null,zu(this),yf(this),rt(19))};function Hu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function _v(l,h){var p=null;if(l.g==h){Hu(l),vf(l),l.g=null;var g=2}else if(pf(l.h,h))p=h.D,Qy(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var x=l.B;g=mt(),Pt(g,new ji(g,p)),Wu(l)}else mv(l);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&SP(l,h)||g==2&&yf(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),x){case 1:Hi(l,5);break;case 4:Hi(l,10);break;case 3:Hi(l,6);break;default:Hi(l,2)}}}function yv(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function Hi(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),g=l.Xa;const x=!g;g=new Wi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Fu(g,"https"),$u(g),x?gP(g.toString(),p):_P(g.toString(),p)}else rt(2);l.G=0,l.l&&l.l.sa(h),vv(l),dv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function vv(l){if(l.G=0,l.ka=[],l.l){const h=Yy(l.h);(h.length!=0||l.i.length!=0)&&(P(l.ka,h),P(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Ev(l,h,p){var g=p instanceof Wi?wr(p):new Wi(p);if(g.g!="")h&&(g.g=h+"."+g.g),Uu(g,g.s);else{var x=a.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var M=new Wi(null);g&&Fu(M,g),h&&(M.g=h),x&&Uu(M,x),p&&(M.l=p),g=M}return p=l.D,h=l.ya,p&&h&&We(g,p,h),We(g,"VER",l.la),Ta(l,g),g}function wv(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new it(new ya({eb:p})):new it(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tv(){}t=Tv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qu(){}qu.prototype.g=function(l,h){return new vn(l,h)};function vn(l,h){wt.call(this),this.g=new hv(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!_(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new zs(this)}E(vn,wt),vn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){_f(this.g)},vn.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=L(l),l=p);h.i.push(new oP(h.Ya++,l)),h.G==3&&Wu(h)},vn.prototype.N=function(){this.g.l=null,delete this.j,_f(this.g),delete this.g,vn.aa.N.call(this)};function Sv(l){le.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}E(Sv,le);function Iv(){ue.call(this),this.status=1}E(Iv,ue);function zs(l){this.g=l}E(zs,Tv),zs.prototype.ua=function(){Pt(this.g,"a")},zs.prototype.ta=function(l){Pt(this.g,new Sv(l))},zs.prototype.sa=function(l){Pt(this.g,new Iv)},zs.prototype.ra=function(){Pt(this.g,"b")},qu.prototype.createWebChannel=qu.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,lC=function(){return new qu},aC=function(){return mt()},oC=pe,Nm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ou.NO_ERROR=0,Ou.TIMEOUT=8,Ou.HTTP_ERROR=6,Uc=Ou,$y.COMPLETE="complete",sC=$y,ee.EventType=oe,oe.OPEN="a",oe.CLOSE="b",oe.ERROR="c",oe.MESSAGE="d",wt.prototype.listen=wt.prototype.K,Ga=ee,iC=ya,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,rC=it}).apply(typeof dc<"u"?dc:typeof self<"u"?self:typeof window<"u"?window:{});const kE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new iu("@firebase/firestore");function ba(){return _s.logLevel}function ne(t,...e){if(_s.logLevel<=Te.DEBUG){const n=e.map(C_);_s.debug(`Firestore (${ia}): ${t}`,...n)}}function $r(t,...e){if(_s.logLevel<=Te.ERROR){const n=e.map(C_);_s.error(`Firestore (${ia}): ${t}`,...n)}}function Oo(t,...e){if(_s.logLevel<=Te.WARN){const n=e.map(C_);_s.warn(`Firestore (${ia}): ${t}`,...n)}}function C_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t="Unexpected state"){const e=`FIRESTORE (${ia}) INTERNAL ASSERTION FAILED: `+t;throw $r(e),new Error(e)}function ze(t,e){t||me()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(zt.UNAUTHENTICATED))}shutdown(){}}class dV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fV{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new wi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string"),new uC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string"),new zt(e)}}class pV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new pV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _V{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string"),this.R=n.token,new gV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Mo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new vt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new vt(0,0))}static max(){return new ge(new vt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ot extends jl{construct(e,n,r){return new ot(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ot(n)}static emptyPath(){return new ot([])}}const vV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends jl{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return vV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ce(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ce(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ce(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ce(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(ot.fromString(e))}static fromName(e){return new he(ot.fromString(e).popFirst(5))}static empty(){return new he(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ot.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new ot(e.slice()))}}function EV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ge.fromTimestamp(r===1e9?new vt(n+1,0):new vt(n,r));return new Ci(i,he.empty(),e)}function wV(t){return new Ci(t.readTime,t.key,-1)}class Ci{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ci(ge.min(),he.empty(),-1)}static max(){return new Ci(ge.max(),he.empty(),-1)}}function TV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cu(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==SV)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function RV(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function hu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}A_.oe=-1;function vd(t){return t==null}function Ah(t){return t===0&&1/t==-1/0}function CV(t){return typeof t=="number"&&Number.isInteger(t)&&!Ah(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ft=class bm{constructor(e,n){this.comparator=e,this.root=n||Ti.EMPTY}insert(e,n){return new bm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ti.BLACK,null,null))}remove(e){return new bm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ti.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fc(this.root,e,this.comparator,!0)}},fc=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ti=class Sr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Sr.RED,this.left=i??Sr.EMPTY,this.right=s??Sr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Sr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Sr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Sr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Sr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Sr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}};Ti.EMPTY=null,Ti.RED=!0,Ti.BLACK=!1;Ti.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ti(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new NE(this.data.getIterator())}getIteratorFrom(e){return new NE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ot(this.comparator);return n.data=e,n}}class NE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new Tn([])}unionWith(e){let n=new Ot(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dC("Invalid base64 string: "+s):s}}(e);return new Xt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const AV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(t){if(ze(!!t),typeof t=="string"){let e=0;const n=AV.exec(t);if(ze(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ys(t){return typeof t=="string"?Xt.fromBase64String(t):Xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function P_(t){const e=t.mapValue.fields.__previous_value__;return k_(e)?P_(e):e}function zl(t){const e=Ai(t.mapValue.fields.__local_write_time__.timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Wl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?k_(t)?4:PV(t)?9007199254740991:10:me()}function _r(t,e){if(t===e)return!0;const n=vs(t);if(n!==vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zl(t).isEqual(zl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ai(i.timestampValue),a=Ai(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ys(i.bytesValue).isEqual(ys(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ct(i.geoPointValue.latitude)===ct(s.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ct(i.integerValue)===ct(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ct(i.doubleValue),a=ct(s.doubleValue);return o===a?Ah(o)===Ah(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Mo(t.arrayValue.values||[],e.arrayValue.values||[],_r);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(PE(o)!==PE(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!_r(o[u],a[u])))return!1;return!0}(t,e);default:return me()}}function Hl(t,e){return(t.values||[]).find(n=>_r(n,e))!==void 0}function Vo(t,e){if(t===e)return 0;const n=vs(t),r=vs(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ct(s.integerValue||s.doubleValue),u=ct(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return bE(t.timestampValue,e.timestampValue);case 4:return bE(zl(t),zl(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ys(s),u=ys(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=be(a[c],u[c]);if(d!==0)return d}return be(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=be(ct(s.latitude),ct(o.latitude));return a!==0?a:be(ct(s.longitude),ct(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=Vo(a[c],u[c]);if(d)return d}return be(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===pc.mapValue&&o===pc.mapValue)return 0;if(s===pc.mapValue)return 1;if(o===pc.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=be(u[f],d[f]);if(m!==0)return m;const v=Vo(a[u[f]],c[d[f]]);if(v!==0)return v}return be(u.length,d.length)}(t.mapValue,e.mapValue);default:throw me()}}function bE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Ai(t),r=Ai(e),i=be(n.seconds,r.seconds);return i!==0?i:be(n.nanos,r.nanos)}function Fo(t){return Dm(t)}function Dm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ai(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ys(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dm(n.fields[o])}`;return i+"}"}(t.mapValue):me()}function xm(t){return!!t&&"integerValue"in t}function N_(t){return!!t&&"arrayValue"in t}function DE(t){return!!t&&"nullValue"in t}function xE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $c(t){return!!t&&"mapValue"in t}function ll(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ll(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ll(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PV(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$c(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ll(n)}setAll(e){let n=xt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ll(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());$c(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _r(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];$c(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new un(ll(this.value))}}function fC(t){const e=[];return xs(t.fields,(n,r)=>{const i=new xt([n]);if($c(r)){const s=fC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ht(e,0,ge.min(),ge.min(),ge.min(),un.empty(),0)}static newFoundDocument(e,n,r,i){return new Ht(e,1,n,ge.min(),r,i,0)}static newNoDocument(e,n){return new Ht(e,2,n,ge.min(),ge.min(),un.empty(),0)}static newUnknownDocument(e,n){return new Ht(e,3,n,ge.min(),ge.min(),un.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n){this.position=e,this.inclusive=n}}function LE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=Vo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function OE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_r(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n="asc"){this.field=e,this.dir=n}}function NV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{}class _t extends pC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DV(e,n,r):n==="array-contains"?new OV(e,r):n==="in"?new MV(e,r):n==="not-in"?new VV(e,r):n==="array-contains-any"?new FV(e,r):new _t(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xV(e,r):new LV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vo(n,this.value)):n!==null&&vs(this.value)===vs(n)&&this.matchesComparison(Vo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yr extends pC{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new yr(e,n)}matches(e){return mC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mC(t){return t.op==="and"}function gC(t){return bV(t)&&mC(t)}function bV(t){for(const e of t.filters)if(e instanceof yr)return!1;return!0}function Lm(t){if(t instanceof _t)return t.field.canonicalString()+t.op.toString()+Fo(t.value);if(gC(t))return t.filters.map(e=>Lm(e)).join(",");{const e=t.filters.map(n=>Lm(n)).join(",");return`${t.op}(${e})`}}function _C(t,e){return t instanceof _t?function(r,i){return i instanceof _t&&r.op===i.op&&r.field.isEqual(i.field)&&_r(r.value,i.value)}(t,e):t instanceof yr?function(r,i){return i instanceof yr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&_C(o,i.filters[a]),!0):!1}(t,e):void me()}function yC(t){return t instanceof _t?function(n){return`${n.field.canonicalString()} ${n.op} ${Fo(n.value)}`}(t):t instanceof yr?function(n){return n.op.toString()+" {"+n.getFilters().map(yC).join(" ,")+"}"}(t):"Filter"}class DV extends _t{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class xV extends _t{constructor(e,n){super(e,"in",n),this.keys=vC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LV extends _t{constructor(e,n){super(e,"not-in",n),this.keys=vC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class OV extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return N_(n)&&Hl(n.arrayValue,this.value)}}class MV extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hl(this.value.arrayValue,n)}}class VV extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hl(this.value.arrayValue,n)}}class FV extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!N_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function ME(t,e=null,n=[],r=[],i=null,s=null,o=null){return new UV(t,e,n,r,i,s,o)}function b_(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Lm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),vd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fo(r)).join(",")),e.ue=n}return e.ue}function D_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_C(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!OE(t.startAt,e.startAt)&&OE(t.endAt,e.endAt)}function Om(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function $V(t,e,n,r,i,s,o,a){return new Ed(t,e,n,r,i,s,o,a)}function x_(t){return new Ed(t)}function VE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function BV(t){return t.collectionGroup!==null}function ul(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ot(xt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ph(s,r))}),n.has(xt.keyField().canonicalString())||e.ce.push(new Ph(xt.keyField(),r))}return e.ce}function pr(t){const e=_e(t);return e.le||(e.le=jV(e,ul(t))),e.le}function jV(t,e){if(t.limitType==="F")return ME(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ph(i.field,s)});const n=t.endAt?new kh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kh(t.startAt.position,t.startAt.inclusive):null;return ME(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mm(t,e,n){return new Ed(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wd(t,e){return D_(pr(t),pr(e))&&t.limitType===e.limitType}function EC(t){return`${b_(pr(t))}|lt:${t.limitType}`}function Ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>yC(i)).join(", ")}]`),vd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Fo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Fo(i)).join(",")),`Target(${r})`}(pr(t))}; limitType=${t.limitType})`}function Td(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):he.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ul(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=LE(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ul(r),i)||r.endAt&&!function(o,a,u){const c=LE(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ul(r),i))}(t,e)}function zV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wC(t){return(e,n)=>{let r=!1;for(const i of ul(t)){const s=WV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WV(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Vo(u,c):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HV=new ft(he.comparator);function Br(){return HV}const TC=new ft(he.comparator);function Ka(...t){let e=TC;for(const n of t)e=e.insert(n.key,n);return e}function SC(t){let e=TC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ns(){return cl()}function IC(){return cl()}function cl(){return new sa(t=>t.toString(),(t,e)=>t.isEqual(e))}const qV=new ft(he.comparator),GV=new Ot(he.comparator);function Se(...t){let e=GV;for(const n of t)e=e.add(n);return e}const KV=new Ot(be);function QV(){return KV}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ah(e)?"-0":e}}function CC(t){return{integerValue:""+t}}function YV(t,e){return CV(e)?CC(e):RC(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this._=void 0}}function XV(t,e,n){return t instanceof Nh?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&k_(s)&&(s=P_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ql?kC(t,e):t instanceof Gl?PC(t,e):function(i,s){const o=AC(i,s),a=FE(o)+FE(i.Pe);return xm(o)&&xm(i.Pe)?CC(a):RC(i.serializer,a)}(t,e)}function JV(t,e,n){return t instanceof ql?kC(t,e):t instanceof Gl?PC(t,e):n}function AC(t,e){return t instanceof bh?function(r){return xm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Nh extends Sd{}class ql extends Sd{constructor(e){super(),this.elements=e}}function kC(t,e){const n=NC(e);for(const r of t.elements)n.some(i=>_r(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gl extends Sd{constructor(e){super(),this.elements=e}}function PC(t,e){let n=NC(e);for(const r of t.elements)n=n.filter(i=>!_r(i,r));return{arrayValue:{values:n}}}class bh extends Sd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function FE(t){return ct(t.integerValue||t.doubleValue)}function NC(t){return N_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ZV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ql&&i instanceof ql||r instanceof Gl&&i instanceof Gl?Mo(r.elements,i.elements,_r):r instanceof bh&&i instanceof bh?_r(r.Pe,i.Pe):r instanceof Nh&&i instanceof Nh}(t.transform,e.transform)}class eF{constructor(e,n){this.version=e,this.transformResults=n}}class mr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mr}static exists(e){return new mr(void 0,e)}static updateTime(e){return new mr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Id{}function bC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xC(t.key,mr.none()):new du(t.key,t.data,mr.none());{const n=t.data,r=un.empty();let i=new Ot(xt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Vi(t.key,r,new Tn(i.toArray()),mr.none())}}function tF(t,e,n){t instanceof du?function(i,s,o){const a=i.value.clone(),u=$E(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Vi?function(i,s,o){if(!Bc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=$E(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(DC(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function hl(t,e,n,r){return t instanceof du?function(s,o,a,u){if(!Bc(s.precondition,o))return a;const c=s.value.clone(),d=BE(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vi?function(s,o,a,u){if(!Bc(s.precondition,o))return a;const c=BE(s.fieldTransforms,u,o),d=o.data;return d.setAll(DC(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Bc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function nF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=AC(r.transform,i||null);s!=null&&(n===null&&(n=un.empty()),n.set(r.field,s))}return n||null}function UE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Mo(r,i,(s,o)=>ZV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class du extends Id{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vi extends Id{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function DC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $E(t,e,n){const r=new Map;ze(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,JV(o,a,n[i]))}return r}function BE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,XV(s,o,e))}return r}class xC extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rF extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&tF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=hl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=hl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=IC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=bC(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&Mo(this.mutations,e.mutations,(n,r)=>UE(n,r))&&Mo(this.baseMutations,e.baseMutations,(n,r)=>UE(n,r))}}class L_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ze(e.mutations.length===r.length);let i=function(){return qV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new L_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,Re;function aF(t){switch(t){default:return me();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function LC(t){if(t===void 0)return $r("GRPC error has no .code"),z.UNKNOWN;switch(t){case ut.OK:return z.OK;case ut.CANCELLED:return z.CANCELLED;case ut.UNKNOWN:return z.UNKNOWN;case ut.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ut.INTERNAL:return z.INTERNAL;case ut.UNAVAILABLE:return z.UNAVAILABLE;case ut.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ut.NOT_FOUND:return z.NOT_FOUND;case ut.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ut.ABORTED:return z.ABORTED;case ut.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ut.DATA_LOSS:return z.DATA_LOSS;default:return me()}}(Re=ut||(ut={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lF(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uF=new os([4294967295,4294967295],0);function jE(t){const e=lF().encode(t),n=new nC;return n.update(e),new Uint8Array(n.digest())}function zE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new os([n,r],0),new os([i,s],0)]}class O_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qa(`Invalid padding: ${n}`);if(r<0)throw new Qa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=os.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(os.fromNumber(r)));return i.compare(uF)===1&&(i=new os([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=jE(e),[r,i]=zE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new O_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=jE(e),[r,i]=zE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,fu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rd(ge.min(),i,new ft(be),Br(),Se())}}class fu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fu(r,n,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class OC{constructor(e,n){this.targetId=e,this.me=n}}class MC{constructor(e,n,r=Xt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class WE{constructor(){this.fe=0,this.ge=qE(),this.pe=Xt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Se(),n=Se(),r=Se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:me()}}),new fu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=qE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ze(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class cF{constructor(e){this.Le=e,this.Be=new Map,this.ke=Br(),this.qe=HE(),this.Qe=new ft(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Om(s))if(r===0){const o=new he(s.path);this.Ue(n,o,Ht.newNoDocument(o,ge.min()))}else ze(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ys(r).toUint8Array()}catch(u){if(u instanceof dC)return Oo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new O_(o,i,s)}catch(u){return Oo(u instanceof Qa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Om(a.target)){const u=new he(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ht.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=Se();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Rd(e,n,this.Qe,this.ke,r);return this.ke=Br(),this.qe=HE(),this.Qe=new ft(be),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new WE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ot(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new WE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function HE(){return new ft(he.comparator)}function qE(){return new ft(he.comparator)}const hF={asc:"ASCENDING",desc:"DESCENDING"},dF={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fF={and:"AND",or:"OR"};class pF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vm(t,e){return t.useProto3Json||vd(e)?e:{value:e}}function Dh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function VC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function mF(t,e){return Dh(t,e.toTimestamp())}function gr(t){return ze(!!t),ge.fromTimestamp(function(n){const r=Ai(n);return new vt(r.seconds,r.nanos)}(t))}function M_(t,e){return Fm(t,e).canonicalString()}function Fm(t,e){const n=function(i){return new ot(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function FC(t){const e=ot.fromString(t);return ze(zC(e)),e}function Um(t,e){return M_(t.databaseId,e.path)}function ip(t,e){const n=FC(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he($C(n))}function UC(t,e){return M_(t.databaseId,e)}function gF(t){const e=FC(t);return e.length===4?ot.emptyPath():$C(e)}function $m(t){return new ot(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $C(t){return ze(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function GE(t,e,n){return{name:Um(t,e),fields:n.value.mapValue.fields}}function _F(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ze(d===void 0||typeof d=="string"),Xt.fromBase64String(d||"")):(ze(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Xt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?z.UNKNOWN:LC(c.code);return new ce(d,c.message||"")}(o);n=new MC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ip(t,r.document.name),s=gr(r.document.updateTime),o=r.document.createTime?gr(r.document.createTime):ge.min(),a=new un({mapValue:{fields:r.document.fields}}),u=Ht.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new jc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ip(t,r.document),s=r.readTime?gr(r.readTime):ge.min(),o=Ht.newNoDocument(i,s),a=r.removedTargetIds||[];n=new jc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ip(t,r.document),s=r.removedTargetIds||[];n=new jc([],s,i,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new oF(i,s),a=r.targetId;n=new OC(a,o)}}return n}function yF(t,e){let n;if(e instanceof du)n={update:GE(t,e.key,e.value)};else if(e instanceof xC)n={delete:Um(t,e.key)};else if(e instanceof Vi)n={update:GE(t,e.key,e.data),updateMask:AF(e.fieldMask)};else{if(!(e instanceof rF))return me();n={verify:Um(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Nh)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ql)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bh)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:mF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:me()}(t,e.precondition)),n}function vF(t,e){return t&&t.length>0?(ze(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?gr(i.updateTime):gr(s);return o.isEqual(ge.min())&&(o=gr(s)),new eF(o,i.transformResults||[])}(n,e))):[]}function EF(t,e){return{documents:[UC(t,e.path)]}}function wF(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=UC(t,i);const s=function(c){if(c.length!==0)return jC(yr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Qs(m.field),direction:IF(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Vm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function TF(t){let e=gF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ze(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=BC(f);return m instanceof yr&&gC(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(E){return new Ph(Ys(E.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,vd(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,v=f.values||[];return new kh(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,v=f.values||[];return new kh(v,m)}(n.endAt)),$V(e,i,o,s,a,"F",u,c)}function SF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ys(n.unaryFilter.field);return _t.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ys(n.unaryFilter.field);return _t.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ys(n.unaryFilter.field);return _t.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ys(n.unaryFilter.field);return _t.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return _t.create(Ys(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yr.create(n.compositeFilter.filters.map(r=>BC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function IF(t){return hF[t]}function RF(t){return dF[t]}function CF(t){return fF[t]}function Qs(t){return{fieldPath:t.canonicalString()}}function Ys(t){return xt.fromServerFormat(t.fieldPath)}function jC(t){return t instanceof _t?function(n){if(n.op==="=="){if(xE(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NAN"}};if(DE(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xE(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NAN"}};if(DE(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(n.field),op:RF(n.op),value:n.value}}}(t):t instanceof yr?function(n){const r=n.getFilters().map(i=>jC(i));return r.length===1?r[0]:{compositeFilter:{op:CF(n.op),filters:r}}}(t):me()}function AF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,r,i,s=ge.min(),o=ge.min(),a=Xt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new ui(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e){this.ct=e}}function PF(t){const e=TF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF{constructor(){this._n=new bF}addToCollectionParentIndex(e,n){return this._n.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ci.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ci.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class bF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ot(ot.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ot(ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Uo(0)}static Ln(){return new Uo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(){this.changes=new sa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&hl(r.mutation,i,Tn.empty(),vt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Se()){const i=ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ka();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Br();const o=cl(),a=function(){return cl()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Vi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),hl(d.mutation,c,d.mutation.getFieldMask(),vt.now())):o.set(c.key,Tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new xF(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=cl();let i=new ft((o,a)=>o-a),s=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Tn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||Se()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=IC();d.forEach(m=>{if(!s.has(m)){const v=bC(n.get(m),r.get(m));v!==null&&f.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):BV(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(ns());let a=-1,u=s;return o.next(c=>B.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Se())).next(d=>({batchId:a,changes:SC(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let i=Ka();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ka();return this.indexManager.getCollectionParents(e,s).next(a=>B.forEach(a,u=>{const c=function(f,m){return new Ed(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ht.newInvalidDocument(d)))});let a=Ka();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&hl(d.mutation,c,Tn.empty(),vt.now()),Td(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OF{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return B.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gr(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:PF(i.bundledQuery),readTime:gr(i.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MF{constructor(){this.overlays=new ft(he.comparator),this.hr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ns();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=ns(),s=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ft((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ns(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=ns(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return B.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new sF(n,r));let s=this.hr.get(n);s===void 0&&(s=Se(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.Pr=new Ot(It.Ir),this.Tr=new Ot(It.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new It(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new It(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new he(new ot([])),r=new It(n,e),i=new It(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new he(new ot([])),r=new It(n,e),i=new It(n,e+1);let s=Se();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new It(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class It{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return he.comparator(e.key,n.key)||be(e.pr,n.pr)}static Er(e,n){return be(e.pr,n.pr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ot(It.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new It(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new It(n,0),i=new It(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ot(be);return n.forEach(i=>{const s=new It(i,0),o=new It(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),B.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;he.isDocumentKey(s)||(s=s.child(""));const o=new It(new he(s),0);let a=new Ot(be);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),B.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ze(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return B.forEach(n.mutations,i=>{const s=new It(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new It(n,0),i=this.wr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FF{constructor(e){this.vr=e,this.docs=function(){return new ft(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(e,n){let r=Br();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ht.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Br();const o=n.path,a=new he(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||TV(wV(d),r)<=0||(i.has(d.key)||Td(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){me()}Fr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new UF(this)}getSize(e){return B.resolve(this.size)}}class UF extends DF{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e){this.persistence=e,this.Mr=new sa(n=>b_(n),D_),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Or=0,this.Nr=new V_,this.targetCount=0,this.Lr=Uo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),B.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Uo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.qn(n),B.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{constructor(e,n){this.Br={},this.overlays={},this.kr=new A_(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new $F(this),this.indexManager=new NF,this.remoteDocumentCache=function(i){return new FF(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new kF(n),this.$r=new OF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new VF(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const i=new jF(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return B.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class jF extends IV{constructor(e){super(),this.currentSequenceNumber=e}}class F_{constructor(e){this.persistence=e,this.zr=new V_,this.jr=null}static Hr(e){return new F_(e)}get Jr(){if(this.jr)return this.jr;throw me()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),B.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,r=>{const i=he.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ge.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return B.or([()=>B.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Se(),i=Se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new U_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return hx()?8:RV(Vt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new zF;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ba()<=Te.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),B.resolve()):(ba()<=Te.DEBUG&&ne("QueryEngine","Query:",Ks(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ba()<=Te.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pr(n))):B.resolve())}ji(e,n){if(VE(n))return B.resolve(null);let r=pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Mm(n,null,"F"),r=pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Se(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,Mm(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return VE(n)||i.isEqual(ge.min())?B.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?B.resolve(null):(ba()<=Te.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ks(n)),this.es(e,o,n,EV(i,-1)).next(a=>a))})}Zi(e,n){let r=new Ot(wC(e));return n.forEach((i,s)=>{Td(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ba()<=Te.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Ks(n)),this.zi.getDocumentsMatchingQuery(e,n,Ci.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ft(be),this.rs=new sa(s=>b_(s),D_),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LF(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function qF(t,e,n,r){return new HF(t,e,n,r)}async function WC(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Se();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function GF(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let v=B.resolve();return m.forEach(E=>{v=v.next(()=>d.getEntry(u,E)).next(A=>{const P=c.docVersions.get(E);ze(P!==null),A.version.compareTo(P)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),d.addEntry(A)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function HC(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function KF(t,e){const n=_e(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(Xt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(f,v),function(A,P,S){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,v,d)&&a.push(n.Qr.updateTargetData(s,v))});let u=Br(),c=Se();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(QF(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(ge.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return B.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function QF(t,e,n){let r=Se(),i=Se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Br();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ge.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function YF(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XF(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new ui(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Bm(t,e,n){const r=_e(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hu(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function KE(t,e,n){const r=_e(t);let i=ge.min(),s=Se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=_e(u),m=f.rs.get(d);return m!==void 0?B.resolve(f.ns.get(m)):f.Qr.getTargetData(c,d)}(r,o,pr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ge.min(),n?s:Se())).next(a=>(JF(r,zV(e),a),{documents:a,hs:s})))}function JF(t,e,n){let r=t.ss.get(e)||ge.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class QE{constructor(){this.activeTargetIds=QV()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZF{constructor(){this.no=new QE,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new QE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc=null;function sp(){return mc===null?mc=function(){return 268435456+Math.round(2147483648*Math.random())}():mc++,"0x"+mc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class rU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=sp(),u=this.vo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(ne("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Oo("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ia}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=tU[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=sp();return new Promise((o,a)=>{const u=new rC;u.setWithCredentials(!0),u.listenOnce(sC.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Uc.NO_ERROR:const d=u.getResponseJson();ne(jt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Uc.TIMEOUT:ne(jt,`RPC '${e}' ${s} timed out`),a(new ce(z.DEADLINE_EXCEEDED,"Request time out"));break;case Uc.HTTP_ERROR:const f=u.getStatus();if(ne(jt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const E=function(P){const S=P.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(S)>=0?S:z.UNKNOWN}(v.status);a(new ce(E,v.message))}else a(new ce(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new ce(z.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{ne(jt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);ne(jt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=sp(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lC(),a=aC(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new iC({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");ne(jt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,v=!1;const E=new nU({lo:P=>{v?ne(jt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(ne(jt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),ne(jt,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},ho:()=>f.close()}),A=(P,S,_)=>{P.listen(S,T=>{try{_(T)}catch(O){setTimeout(()=>{throw O},0)}})};return A(f,Ga.EventType.OPEN,()=>{v||(ne(jt,`RPC '${e}' stream ${i} transport opened.`),E.mo())}),A(f,Ga.EventType.CLOSE,()=>{v||(v=!0,ne(jt,`RPC '${e}' stream ${i} transport closed`),E.po())}),A(f,Ga.EventType.ERROR,P=>{v||(v=!0,Oo(jt,`RPC '${e}' stream ${i} transport errored:`,P),E.po(new ce(z.UNAVAILABLE,"The operation could not be completed")))}),A(f,Ga.EventType.MESSAGE,P=>{var S;if(!v){const _=P.data[0];ze(!!_);const T=_,O=T.error||((S=T[0])===null||S===void 0?void 0:S.error);if(O){ne(jt,`RPC '${e}' stream ${i} received error:`,O);const F=O.status;let U=function(I){const C=ut[I];if(C!==void 0)return LC(C)}(F),w=O.message;U===void 0&&(U=z.INTERNAL,w="Unknown error status: "+F+" with message "+O.message),v=!0,E.po(new ce(U,w)),f.close()}else ne(jt,`RPC '${e}' stream ${i} received:`,_),E.yo(_)}}),A(a,oC.STAT_EVENT,P=>{P.stat===Nm.PROXY?ne(jt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Nm.NOPROXY&&ne(jt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function op(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){return new pF(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new qC(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===z.RESOURCE_EXHAUSTED?($r(n.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new ce(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iU extends GC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=_F(this.serializer,e),r=function(s){if(!("targetChange"in s))return ge.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?gr(o.readTime):ge.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=$m(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Om(u)?{documents:EF(s,u)}:{query:wF(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=VC(s,o.resumeToken);const c=Vm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=Dh(s,o.snapshotVersion.toTimestamp());const c=Vm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=SF(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=$m(this.serializer),n.removeTarget=e,this.i_(n)}}class sU extends GC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(ze(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=vF(e.writeResults,e.commitTime),r=gr(e.commitTime);return this.listener.A_(r,n)}return ze(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=$m(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yF(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new ce(z.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Fm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ce(z.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,Fm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(z.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class aU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?($r(n),this.y_=!1):ne("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Ls(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=_e(u);c.M_.add(4),await pu(c),c.N_.set("Unknown"),c.M_.delete(4),await Ad(c)}(this))})}),this.N_=new aU(r,i)}}async function Ad(t){if(Ls(t))for(const e of t.x_)await e(!0)}async function pu(t){for(const e of t.x_)await e(!1)}function KC(t,e){const n=_e(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),z_(n)?j_(n):oa(n).Xo()&&B_(n,e))}function $_(t,e){const n=_e(t),r=oa(n);n.F_.delete(e),r.Xo()&&QC(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ls(n)&&n.N_.set("Unknown"))}function B_(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oa(t).P_(e)}function QC(t,e){t.L_.xe(e),oa(t).I_(e)}function j_(t){t.L_=new cF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),oa(t).start(),t.N_.w_()}function z_(t){return Ls(t)&&!oa(t).Zo()&&t.F_.size>0}function Ls(t){return _e(t).M_.size===0}function YC(t){t.L_=void 0}async function uU(t){t.N_.set("Online")}async function cU(t){t.F_.forEach((e,n)=>{B_(t,e)})}async function hU(t,e){YC(t),z_(t)?(t.N_.D_(e),j_(t)):t.N_.set("Unknown")}async function dU(t,e,n){if(t.N_.set("Online"),e instanceof MC&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xh(t,r)}else if(e instanceof jc?t.L_.Ke(e):e instanceof OC?t.L_.He(e):t.L_.We(e),!n.isEqual(ge.min()))try{const r=await HC(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(Xt.EMPTY_BYTE_STRING,d.snapshotVersion)),QC(s,u);const f=new ui(d.target,u,c,d.sequenceNumber);B_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await xh(t,r)}}async function xh(t,e,n){if(!hu(e))throw e;t.M_.add(1),await pu(t),t.N_.set("Offline"),n||(n=()=>HC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Ad(t)})}function XC(t,e){return e().catch(n=>xh(t,n,e))}async function kd(t){const e=_e(t),n=ki(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;fU(e);)try{const i=await YF(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,pU(e,i)}catch(i){await xh(e,i)}JC(e)&&ZC(e)}function fU(t){return Ls(t)&&t.v_.length<10}function pU(t,e){t.v_.push(e);const n=ki(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function JC(t){return Ls(t)&&!ki(t).Zo()&&t.v_.length>0}function ZC(t){ki(t).start()}async function mU(t){ki(t).V_()}async function gU(t){const e=ki(t);for(const n of t.v_)e.d_(n.mutations)}async function _U(t,e,n){const r=t.v_.shift(),i=L_.from(r,e,n);await XC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await kd(t)}async function yU(t,e){e&&ki(t).E_&&await async function(r,i){if(function(o){return aF(o)&&o!==z.ABORTED}(i.code)){const s=r.v_.shift();ki(r).t_(),await XC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await kd(r)}}(t,e),JC(t)&&ZC(t)}async function XE(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=Ls(n);n.M_.add(3),await pu(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Ad(n)}async function vU(t,e){const n=_e(t);e?(n.M_.delete(2),await Ad(n)):e||(n.M_.add(2),await pu(n),n.N_.set("Unknown"))}function oa(t){return t.B_||(t.B_=function(n,r,i){const s=_e(n);return s.f_(),new iU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:uU.bind(null,t),To:cU.bind(null,t),Ao:hU.bind(null,t),h_:dU.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),z_(t)?j_(t):t.N_.set("Unknown")):(await t.B_.stop(),YC(t))})),t.B_}function ki(t){return t.k_||(t.k_=function(n,r,i){const s=_e(n);return s.f_(),new sU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:mU.bind(null,t),Ao:yU.bind(null,t),R_:gU.bind(null,t),A_:_U.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await kd(t)):(await t.k_.stop(),t.v_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new W_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function H_(t,e){if($r("AsyncQueue",`${e}: ${t}`),hu(t))return new ce(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=Ka(),this.sortedSet=new ft(this.comparator)}static emptySet(e){return new To(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof To)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new To;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.q_=new ft(he.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):me():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class $o{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $o(e,n,To.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class wU{constructor(){this.queries=new sa(e=>EC(e),wd),this.onlineState="Unknown",this.z_=new Set}}async function TU(t,e){const n=_e(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new EU,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=H_(o,`Initialization of query '${Ks(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&q_(n)}async function SU(t,e){const n=_e(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function IU(t,e){const n=_e(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&q_(n)}function RU(t,e,n){const r=_e(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function q_(t){t.z_.forEach(e=>{e.next()})}var jm,ZE;(ZE=jm||(jm={})).J_="default",ZE.Cache="cache";class CU{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $o(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=$o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==jm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.key=e}}class tA{constructor(e){this.key=e}}class AU{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Se(),this.mutatedKeys=Se(),this.Ia=wC(e),this.Ta=new To(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new JE,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),v=Td(this.query,f)?f:null,E=!!m&&this.mutatedKeys.has(m.key),A=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let P=!1;m&&v?m.data.isEqual(v.data)?E!==A&&(r.track({type:3,doc:v}),P=!0):this.Ra(m,v)||(r.track({type:2,doc:v}),P=!0,(u&&this.Ia(v,u)>0||c&&this.Ia(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),P=!0):m&&!v&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(a=!0)),P&&(v?(o=o.add(v),s=A?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(v,E){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return A(v)-A(E)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new $o(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new JE,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Se(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new tA(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new eA(r))}),n}pa(e){this.la=e.hs,this.Pa=Se();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return $o.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class kU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PU{constructor(e){this.key=e,this.wa=!1}}class NU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new sa(a=>EC(a),wd),this.Da=new Map,this.Ca=new Set,this.va=new ft(he.comparator),this.Fa=new Map,this.Ma=new V_,this.xa={},this.Oa=new Map,this.Na=Uo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function bU(t,e,n=!0){const r=aA(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await nA(r,e,n,!0),i}async function DU(t,e){const n=aA(t);await nA(n,e,!0,!1)}async function nA(t,e,n,r){const i=await XF(t.localStore,pr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await xU(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&KC(t.remoteStore,i),a}async function xU(t,e,n,r,i){t.Ba=(f,m,v)=>async function(A,P,S,_){let T=P.view.da(S);T.Xi&&(T=await KE(A.localStore,P.query,!1).then(({documents:w})=>P.view.da(w,T)));const O=_&&_.targetChanges.get(P.targetId),F=_&&_.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges(T,A.isPrimaryClient,O,F);return tw(A,P.targetId,U.fa),U.snapshot}(t,f,m,v);const s=await KE(t.localStore,e,!0),o=new AU(e,s.hs),a=o.da(s.documents),u=fu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);tw(t,n,c.fa);const d=new kU(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function LU(t,e,n){const r=_e(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!wd(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&$_(r.remoteStore,i.targetId),zm(r,i.targetId)}).catch(cu)):(zm(r,i.targetId),await Bm(r.localStore,i.targetId,!0))}async function OU(t,e){const n=_e(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$_(n.remoteStore,r.targetId))}async function MU(t,e,n){const r=zU(t);try{const i=await function(o,a){const u=_e(o),c=vt.now(),d=a.reduce((v,E)=>v.add(E.key),Se());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let E=Br(),A=Se();return u.os.getEntries(v,d).next(P=>{E=P,E.forEach((S,_)=>{_.isValidDocument()||(A=A.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,E)).next(P=>{f=P;const S=[];for(const _ of a){const T=nF(_,f.get(_.key).overlayedDocument);T!=null&&S.push(new Vi(_.key,T,fC(T.value.mapValue),mr.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,S,a)}).next(P=>{m=P;const S=P.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(v,P.batchId,S)})}).then(()=>({batchId:m.batchId,changes:SC(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new ft(be)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await mu(r,i.changes),await kd(r.remoteStore)}catch(i){const s=H_(i,"Failed to persist write");n.reject(s)}}async function rA(t,e){const n=_e(t);try{const r=await KF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(ze(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?ze(o.wa):i.removedDocuments.size>0&&(ze(o.wa),o.wa=!1))}),await mu(n,r,e)}catch(r){await cu(r)}}function ew(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=_e(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&q_(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VU(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ft(he.comparator);o=o.insert(s,Ht.newNoDocument(s,ge.min()));const a=Se().add(s),u=new Rd(ge.min(),new Map,new ft(be),o,a);await rA(r,u),r.va=r.va.remove(s),r.Fa.delete(e),G_(r)}else await Bm(r.localStore,e,!1).then(()=>zm(r,e,n)).catch(cu)}async function FU(t,e){const n=_e(t),r=e.batch.batchId;try{const i=await GF(n.localStore,e);sA(n,r,null),iA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mu(n,i)}catch(i){await cu(i)}}async function UU(t,e,n){const r=_e(t);try{const i=await function(o,a){const u=_e(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ze(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);sA(r,e,n),iA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mu(r,i)}catch(i){await cu(i)}}function iA(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function sA(t,e,n){const r=_e(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function zm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||oA(t,r)})}function oA(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&($_(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),G_(t))}function tw(t,e,n){for(const r of n)r instanceof eA?(t.Ma.addReference(r.key,e),$U(t,r)):r instanceof tA?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||oA(t,r.key)):me()}function $U(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.Ca.add(r),G_(t))}function G_(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new he(ot.fromString(e)),r=t.Na.next();t.Fa.set(r,new PU(n)),t.va=t.va.insert(n,r),KC(t.remoteStore,new ui(pr(x_(n.path)),r,"TargetPurposeLimboResolution",A_.oe))}}async function mu(t,e,n){const r=_e(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=U_.Ki(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=_e(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>B.forEach(c,m=>B.forEach(m.qi,v=>d.persistence.referenceDelegate.addReference(f,m.targetId,v)).next(()=>B.forEach(m.Qi,v=>d.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))}catch(f){if(!hu(f))throw f;ne("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const v=d.ns.get(m),E=v.snapshotVersion,A=v.withLastLimboFreeSnapshotVersion(E);d.ns=d.ns.insert(m,A)}}}(r.localStore,s))}async function BU(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await WC(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new ce(z.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mu(n,r.us)}}function jU(t,e){const n=_e(t),r=n.Fa.get(e);if(r&&r.wa)return Se().add(r.key);{let i=Se();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function aA(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VU.bind(null,e),e.Sa.h_=IU.bind(null,e.eventManager),e.Sa.ka=RU.bind(null,e.eventManager),e}function zU(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UU.bind(null,e),e}class nw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Cd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return qF(this.persistence,new WF,e.initialUser,this.serializer)}createPersistence(e){return new BF(F_.Hr,this.serializer)}createSharedClientState(e){return new ZF}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class WU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ew(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BU.bind(null,this.syncEngine),await vU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wU}()}createDatastore(e){const n=Cd(e.databaseInfo.databaseId),r=function(s){return new rU(s)}(e.databaseInfo);return function(s,o,a,u){return new oU(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new lU(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ew(this.syncEngine,n,0),function(){return YE.D()?new YE:new eU}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new NU(i,s,o,a,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=_e(r);ne("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await pu(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HU{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):$r("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=zt.UNAUTHENTICATED,this.clientId=cC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ne("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ne("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=H_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ap(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await WC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KU(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>XE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>XE(e.remoteStore,i)),t._onlineComponents=e}function GU(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function KU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await ap(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!GU(n))throw n;Oo("Error using user provided cache. Falling back to memory cache: "+n),await ap(t,new nw)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await ap(t,new nw);return t._offlineComponents}async function lA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await rw(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await rw(t,new WU))),t._onlineComponents}function QU(t){return lA(t).then(e=>e.syncEngine)}async function YU(t){const e=await lA(t),n=e.eventManager;return n.onListen=bU.bind(null,e.syncEngine),n.onUnlisten=LU.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=DU.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=OU.bind(null,e.syncEngine),n}function XU(t,e,n={}){const r=new wi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new HU({next:m=>{o.enqueueAndForget(()=>SU(s,f));const v=m.docs.has(a);!v&&m.fromCache?c.reject(new ce(z.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&u&&u.source==="server"?c.reject(new ce(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new CU(x_(a.path),d,{includeMetadataChanges:!0,ra:!0});return TU(s,f)}(await YU(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JU(t,e,n){if(!n)throw new ce(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZU(t,e,n,r){if(e===!0&&r===!0)throw new ce(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sw(t){if(!he.isDocumentKey(t))throw new ce(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function K_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Es(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=K_(t);throw new ce(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ce(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ce(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ce(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Q_{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ow({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ce(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ow(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hV;switch(r.type){case"firstParty":return new mV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=iw.get(n);r&&(ne("ComponentProvider","Removing Datastore"),iw.delete(n),r.terminate())}(this),Promise.resolve()}}function e4(t,e,n,r={}){var i;const s=(t=Es(t,Q_))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Oo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=zt.MOCK_USER;else{a=lx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new ce(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new zt(c)}t._authCredentials=new dV(new uC(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Y_(this.firestore,e,this._query)}}class In{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new In(this.firestore,e,this._key)}}class Kl extends Y_{constructor(e,n,r){super(e,n,x_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new In(this.firestore,null,new he(e))}withConverter(e){return new Kl(this.firestore,e,this._path)}}function Bo(t,e,...n){if(t=Yt(t),arguments.length===1&&(e=cC.newId()),JU("doc","path",e),t instanceof Q_){const r=ot.fromString(e,...n);return sw(r),new In(t,null,new he(r))}{if(!(t instanceof In||t instanceof Kl))throw new ce(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ot.fromString(e,...n));return sw(r),new In(t.firestore,t instanceof Kl?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new qC(this,"async_queue_retry"),this.hu=()=>{const n=op();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=op();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=op();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new wi;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!hu(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $r("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=W_.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&me()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Pd extends Q_{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new t4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hA(this),this._firestoreClient.terminate()}}function n4(t,e){const n=typeof t=="object"?t:JI(),r=typeof t=="string"?t:"(default)",i=su(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ax("firestore");s&&e4(i,...s)}return i}function cA(t){return t._firestoreClient||hA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new kV(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,uA(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new qU(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jo(Xt.fromBase64String(e))}catch(n){throw new ce(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jo(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4=/^__.*__$/;class i4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new du(e,this.data,n,this.fieldTransforms)}}class dA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Z_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Z_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Lh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(fA(this.fu)&&r4.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class s4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cd(e)}Fu(e,n,r,i=!1){return new Z_({fu:e,methodName:n,vu:r,path:xt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pA(t){const e=t._freezeSettings(),n=Cd(t._databaseId);return new s4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function o4(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);ey("Data must be an object, but it was:",o,r);const a=mA(r,o);let u,c;if(s.merge)u=new Tn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=Wm(e,f,n);if(!o.contains(m))throw new ce(z.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);_A(d,m)||d.push(m)}u=new Tn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new i4(new un(a),u,c)}class bd extends X_{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bd}}function a4(t,e,n,r){const i=t.Fu(1,e,n);ey("Data must be an object, but it was:",i,r);const s=[],o=un.empty();xs(r,(u,c)=>{const d=ty(e,u,n);c=Yt(c);const f=i.Su(d);if(c instanceof bd)s.push(d);else{const m=Dd(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new Tn(s);return new dA(o,a,i.fieldTransforms)}function l4(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[Wm(e,r,n)],u=[i];if(s.length%2!=0)throw new ce(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Wm(e,s[m])),u.push(s[m+1]);const c=[],d=un.empty();for(let m=a.length-1;m>=0;--m)if(!_A(c,a[m])){const v=a[m];let E=u[m];E=Yt(E);const A=o.Su(v);if(E instanceof bd)c.push(v);else{const P=Dd(E,A);P!=null&&(c.push(v),d.set(v,P))}}const f=new Tn(c);return new dA(d,f,o.fieldTransforms)}function Dd(t,e){if(gA(t=Yt(t)))return ey("Unsupported field value:",e,t),mA(t,e);if(t instanceof X_)return function(r,i){if(!fA(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Dd(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YV(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=vt.fromDate(r);return{timestampValue:Dh(i.serializer,s)}}if(r instanceof vt){const s=new vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dh(i.serializer,s)}}if(r instanceof J_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jo)return{bytesValue:VC(i.serializer,r._byteString)};if(r instanceof In){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:M_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${K_(r)}`)}(t,e)}function mA(t,e){const n={};return hC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,i)=>{const s=Dd(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function gA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof vt||t instanceof J_||t instanceof jo||t instanceof In||t instanceof X_)}function ey(t,e,n){if(!gA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=K_(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Wm(t,e,n){if((e=Yt(e))instanceof Nd)return e._internalPath;if(typeof e=="string")return ty(t,e);throw Lh("Field path arguments must be of type string or ",t,!1,void 0,n)}const u4=new RegExp("[~\\*/\\[\\]]");function ty(t,e,n){if(e.search(u4)>=0)throw Lh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nd(...e.split("."))._internalPath}catch{throw Lh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new ce(z.INVALID_ARGUMENT,a+t+u)}function _A(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new In(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class c4 extends yA{data(){return super.data()}}function vA(t,e){return typeof e=="string"?ty(t,e):e instanceof Nd?e._internalPath:e._delegate._internalPath}class h4{convertValue(e,n="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new J_(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=P_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zl(e));default:return null}}convertTimestamp(e){const n=Ai(e);return new vt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ot.fromString(e);ze(zC(r));const i=new Wl(r.get(1),r.get(3)),s=new he(r.popFirst(5));return i.isEqual(n)||$r(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class EA extends yA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new p4(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class p4 extends EA{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t){t=Es(t,In);const e=Es(t.firestore,Pd);return XU(cA(e),t._key).then(n=>y4(e,t,n))}class m4 extends h4{constructor(e){super(),this.firestore=e}convertBytes(e){return new jo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new In(this.firestore,null,n)}}function g4(t,e,n){t=Es(t,In);const r=Es(t.firestore,Pd),i=d4(t.converter,e);return wA(r,[o4(pA(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,mr.none())])}function _4(t,e,n,...r){t=Es(t,In);const i=Es(t.firestore,Pd),s=pA(i);let o;return o=typeof(e=Yt(e))=="string"||e instanceof Nd?l4(s,"updateDoc",t._key,e,n,r):a4(s,"updateDoc",t._key,e),wA(i,[o.toMutation(t._key,mr.exists(!0))])}function wA(t,e){return function(r,i){const s=new wi;return r.asyncQueue.enqueueAndForget(async()=>MU(await QU(r),i,s)),s.promise}(cA(t),e)}function y4(t,e,n){const r=n.docs.get(e._key),i=new m4(t);return new EA(t,i,e._key,r,new f4(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ia=i})(bs),tr(new Fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Pd(new fV(r.getProvider("auth-internal")),new _V(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ce(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),mn(kE,"4.6.4",e),mn(kE,"4.6.4","esm2017")})();const v4={apiKey:"AIzaSyC6iK6Lrux-4MEpEc-zJYFrdZaPLjGUhNQ",authDomain:"todoreactapp-74bab.firebaseapp.com",databaseURL:"https://todoreactapp-74bab-default-rtdb.europe-west1.firebasedatabase.app",projectId:"todoreactapp-74bab",storageBucket:"todoreactapp-74bab.appspot.com",messagingSenderId:"590837115647",appId:"1:590837115647:web:c608d9ebb993d4e2427aca",measurementId:"G-VG9R1F5WT0"},E4=XI(v4),zo=n4(E4),Rn=uV();var aw={};const lw="@firebase/database",uw="1.0.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TA="";function w4(t){TA=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Dt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new T4(e)}}catch{}return new S4},rs=SA("localStorage"),I4=SA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new iu("@firebase/database"),R4=function(){let t=1;return function(){return t++}}(),IA=function(t){const e=Sx(t),n=new yx;n.update(e);const r=n.digest();return l_.encodeByteArray(r)},gu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=gu.apply(null,r):typeof r=="object"?e+=Dt(r):e+=r,e+=" "}return e};let dl=null,cw=!0;const C4=function(t,e){X(!e,"Can't turn on custom loggers persistently."),So.logLevel=Te.VERBOSE,dl=So.log.bind(So)},qt=function(...t){if(cw===!0&&(cw=!1,dl===null&&I4.get("logging_enabled")===!0&&C4()),dl){const e=gu.apply(null,t);dl(e)}},_u=function(t){return function(...e){qt(t,...e)}},Hm=function(...t){const e="FIREBASE INTERNAL ERROR: "+gu(...t);So.error(e)},ws=function(...t){const e=`FIREBASE FATAL ERROR: ${gu(...t)}`;throw So.error(e),new Error(e)},Cn=function(...t){const e="FIREBASE WARNING: "+gu(...t);So.warn(e)},A4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Cn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},RA=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},k4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wo="[MIN_NAME]",Ts="[MAX_NAME]",aa=function(t,e){if(t===e)return 0;if(t===Wo||e===Ts)return-1;if(e===Wo||t===Ts)return 1;{const n=hw(t),r=hw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},P4=function(t,e){return t===e?0:t<e?-1:1},Da=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Dt(e))},ny=function(t){if(typeof t!="object"||t===null)return Dt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Dt(e[r]),n+=":",n+=ny(t[e[r]]);return n+="}",n},CA=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Un(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const AA=function(t){X(!RA(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},N4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},b4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},D4=new RegExp("^-?(0*)\\d{1,10}$"),x4=-2147483648,L4=2147483647,hw=function(t){if(D4.test(t)){const e=Number(t);if(e>=x4&&e<=L4)return e}return null},yu=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Cn("Exception was thrown by user callback.",n),e},Math.floor(0))}},O4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fl=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Cn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Cn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="5",kA="v",PA="s",NA="r",bA="f",DA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xA="ls",LA="p",qm="ac",OA="websocket",MA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function U4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function VA(t,e,n){X(typeof e=="string","typeof type must == string"),X(typeof n=="object","typeof params must == object");let r;if(e===OA)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===MA)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);U4(t)&&(n.ns=t.namespace);const i=[];return Un(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(){this.counters_={}}incrementCounter(e,n=1){zr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return tx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp={},up={};function iy(t){const e=t.toString();return lp[e]||(lp[e]=new $4),lp[e]}function B4(t,e){const n=t.toString();return up[n]||(up[n]=e()),up[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&yu(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="start",z4="close",W4="pLPCommand",H4="pRTLPCB",FA="id",UA="pw",$A="ser",q4="cb",G4="seg",K4="ts",Q4="d",Y4="dframe",BA=1870,jA=30,X4=BA-jA,J4=25e3,Z4=3e4;class co{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_u(e),this.stats_=iy(n),this.urlFn=u=>(this.appCheckToken&&(u[qm]=this.appCheckToken),VA(n,MA,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new j4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Z4)),k4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sy((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dw)this.id=a,this.password=u;else if(o===z4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[dw]="t",r[$A]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[q4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[kA]=ry,this.transportSessionId&&(r[PA]=this.transportSessionId),this.lastSessionId&&(r[xA]=this.lastSessionId),this.applicationId&&(r[LA]=this.applicationId),this.appCheckToken&&(r[qm]=this.appCheckToken),typeof location<"u"&&location.hostname&&DA.test(location.hostname)&&(r[NA]=bA);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){co.forceAllow_=!0}static forceDisallow(){co.forceDisallow_=!0}static isAvailable(){return co.forceAllow_?!0:!co.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!N4()&&!b4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=VI(n),i=CA(r,X4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Y4]="t",r[FA]=e,r[UA]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Dt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=R4(),window[W4+this.uniqueCallbackIdentifier]=e,window[H4+this.uniqueCallbackIdentifier]=n,this.myIFrame=sy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qt("frame writing exception"),a.stack&&qt(a.stack),qt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[FA]=this.myID,e[UA]=this.myPW,e[$A]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jA+r.length<=BA;){const o=this.pendingSegs.shift();r=r+"&"+G4+i+"="+o.seg+"&"+K4+i+"="+o.ts+"&"+Q4+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(J4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{qt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e$=16384,t$=45e3;let Oh=null;typeof MozWebSocket<"u"?Oh=MozWebSocket:typeof WebSocket<"u"&&(Oh=WebSocket);class Qn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_u(this.connId),this.stats_=iy(n),this.connURL=Qn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[kA]=ry,typeof location<"u"&&location.hostname&&DA.test(location.hostname)&&(o[NA]=bA),n&&(o[PA]=n),r&&(o[xA]=r),i&&(o[qm]=i),s&&(o[LA]=s),VA(e,OA,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rs.set("previous_websocket_failure",!0);try{let r;WI(),this.mySock=new Oh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Oh!==null&&!Qn.forceDisallow_}static previouslyFailed(){return rs.isInMemoryStorage||rs.get("previous_websocket_failure")===!0}markConnectionHealthy(){rs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Fl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(X(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=CA(n,e$);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(t$))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qn.responsesRequiredToBeHealthy=2;Qn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[co,Qn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qn&&Qn.isAvailable();let r=n&&!Qn.previouslyFailed();if(e.webSocketOnly&&(n||Cn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Qn];else{const i=this.transports_=[];for(const s of Ql.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ql.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ql.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n$=6e4,r$=5e3,i$=10*1024,s$=100*1024,cp="t",fw="d",o$="s",pw="r",a$="e",mw="o",gw="a",_w="n",yw="p",l$="h";class u${constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_u("c:"+this.id+":"),this.transportManager_=new Ql(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>s$?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>i$?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cp in e){const n=e[cp];n===gw?this.upgradeIfSecondaryHealthy_():n===pw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Da("t",e),r=Da("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_w,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Da("t",e),r=Da("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Da(cp,e);if(fw in e){const r=e[fw];if(n===l$){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_w){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===o$?this.onConnectionShutdown_(r):n===pw?this.onReset_(r):n===a$?Hm("Server Error: "+r):n===mw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ry!==r&&Cn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),fl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(n$))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(r$))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.allowedEvents_=e,this.listeners_={},X(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){X(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends WA{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!c_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Mh}getInitialEvent(e){return X(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=32,Ew=768;class Ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Oe(){return new Ye("")}function Ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pi(t){return t.pieces_.length-t.pieceNum_}function Ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ye(t.pieces_,e)}function HA(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function c$(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qA(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function GA(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ye(e,0)}function At(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ye(n,0)}function Ie(t){return t.pieceNum_>=t.pieces_.length}function xn(t,e){const n=Ce(t),r=Ce(e);if(n===null)return e;if(n===r)return xn(Ge(t),Ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function KA(t,e){if(Pi(t)!==Pi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Yn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Pi(t)>Pi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class h${constructor(e,n){this.errorPrefix_=n,this.parts_=qA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=dd(this.parts_[r]);QA(this)}}function d$(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=dd(e),QA(t)}function f$(t){const e=t.parts_.pop();t.byteLength_-=dd(e),t.parts_.length>0&&(t.byteLength_-=1)}function QA(t){if(t.byteLength_>Ew)throw new Error(t.errorPrefix_+"has a key path longer than "+Ew+" bytes ("+t.byteLength_+").");if(t.parts_.length>vw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vw+") or object contains a cycle "+Yi(t))}function Yi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy extends WA{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new oy}getInitialEvent(e){return X(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=1e3,p$=60*5*1e3,ww=30*1e3,m$=1.3,g$=3e4,_$="server_kill",Tw=3;class Lr extends zA{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Lr.nextPersistentConnectionId_++,this.log_=_u("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xa,this.maxReconnectDelay_=p$,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!WI())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");oy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Dt(s)),X(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new u_,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),X(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;Lr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zr(e,"w")){const r=Lo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Cn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_x(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ww)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Dt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hm("Unrecognized action received from server: "+Dt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){X(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>g$&&(this.reconnectDelay_=xa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*m$)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){X(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?qt("getToken() completed but was canceled"):(qt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new u$(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Cn(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(_$)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Cn(f),u())}}}interrupt(e){qt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vm(this.interruptReasons_)&&(this.reconnectDelay_=xa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ny(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ye(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){qt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tw&&(this.reconnectDelay_=ww,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+TA.replace(/\./g,"-")]=1,c_()?e["framework.cordova"]=1:zI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mh.getInstance().currentlyOnline();return vm(this.interruptReasons_)&&e}}Lr.nextPersistentConnectionId_=0;Lr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ae(Wo,e),i=new Ae(Wo,n);return this.compare(r,i)!==0}minPost(){return Ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;class YA extends Ld{static get __EMPTY_NODE(){return gc}static set __EMPTY_NODE(e){gc=e}compare(e,n){return aa(e.name,n.name)}isDefinedOn(e){throw ta("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(Ts,gc)}makePost(e,n){return X(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,gc)}toString(){return".key"}}const Io=new YA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ct.RED,this.left=i??hn.EMPTY_NODE,this.right=s??hn.EMPTY_NODE}copy(e,n,r,i,s){return new Ct(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return hn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return hn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ct.RED=!0;Ct.BLACK=!1;class y${copy(e,n,r,i,s){return this}insert(e,n,r){return new Ct(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class hn{constructor(e,n=hn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new hn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ct.BLACK,null,null))}remove(e){return new hn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ct.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _c(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _c(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _c(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _c(this.root_,null,this.comparator_,!0,e)}}hn.EMPTY_NODE=new y$;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v$(t,e){return aa(t.name,e.name)}function ay(t,e){return aa(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gm;function E$(t){Gm=t}const XA=function(t){return typeof t=="number"?"number:"+AA(t):"string:"+t},JA=function(t){if(t.isLeafNode()){const e=t.val();X(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zr(e,".sv"),"Priority must be a string or number.")}else X(t===Gm||t.isEmpty(),"priority of unexpected type.");X(t===Gm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sw;class St{constructor(e,n=St.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,X(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),JA(this.priorityNode_)}static set __childrenNodeConstructor(e){Sw=e}static get __childrenNodeConstructor(){return Sw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new St(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:St.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ie(e)?this:Ce(e)===".priority"?this.priorityNode_:St.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:St.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ce(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(X(r!==".priority"||Pi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,St.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+XA(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=AA(this.value_):e+=this.value_,this.lazyHash_=IA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===St.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof St.__childrenNodeConstructor?-1:(X(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=St.VALUE_TYPE_ORDER.indexOf(n),s=St.VALUE_TYPE_ORDER.indexOf(r);return X(i>=0,"Unknown leaf type: "+n),X(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}St.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZA,e1;function w$(t){ZA=t}function T$(t){e1=t}class S$ extends Ld{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?aa(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(Ts,new St("[PRIORITY-POST]",e1))}makePost(e,n){const r=ZA(e);return new Ae(n,new St("[PRIORITY-POST]",r))}toString(){return".priority"}}const Kt=new S$;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I$=Math.log(2);class R${constructor(e){const n=s=>parseInt(Math.log(s)/I$,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vh=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,m;if(d===0)return null;if(d===1)return f=t[u],m=n?n(f):f,new Ct(m,f.node,Ct.BLACK,null,null);{const v=parseInt(d/2,10)+u,E=i(u,v),A=i(v+1,c);return f=t[v],m=n?n(f):f,new Ct(m,f.node,Ct.BLACK,E,A)}},s=function(u){let c=null,d=null,f=t.length;const m=function(E,A){const P=f-E,S=f;f-=E;const _=i(P+1,S),T=t[P],O=n?n(T):T;v(new Ct(O,T.node,A,null,_))},v=function(E){c?(c.left=E,c=E):(d=E,c=E)};for(let E=0;E<u.count;++E){const A=u.nextBitIsOne(),P=Math.pow(2,u.count-(E+1));A?m(P,Ct.BLACK):(m(P,Ct.BLACK),m(P,Ct.RED))}return d},o=new R$(t.length),a=s(o);return new hn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hp;const qs={};class br{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return X(qs&&Kt,"ChildrenNode.ts has not been loaded"),hp=hp||new br({".priority":qs},{".priority":Kt}),hp}get(e){const n=Lo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof hn?n:null}hasIndex(e){return zr(this.indexSet_,e.toString())}addIndex(e,n){X(e!==Io,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Ae.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Vh(r,e.getCompare()):a=qs;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new br(d,c)}addToIndexes(e,n){const r=yh(this.indexes_,(i,s)=>{const o=Lo(this.indexSet_,s);if(X(o,"Missing index implementation for "+s),i===qs)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(Ae.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Vh(a,o.getCompare())}else return qs;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new Ae(e.name,a))),u.insert(e,e.node)}});return new br(r,this.indexSet_)}removeFromIndexes(e,n){const r=yh(this.indexes_,i=>{if(i===qs)return i;{const s=n.get(e.name);return s?i.remove(new Ae(e.name,s)):i}});return new br(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La;class De{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&JA(this.priorityNode_),this.children_.isEmpty()&&X(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return La||(La=new De(new hn(ay),null,br.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||La}updatePriority(e){return this.children_.isEmpty()?this:new De(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?La:n}}getChild(e){const n=Ce(e);return n===null?this:this.getImmediateChild(n).getChild(Ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(X(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ae(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?La:this.priorityNode_;return new De(i,o,s)}}updateChild(e,n){const r=Ce(e);if(r===null)return n;{X(Ce(e)!==".priority"||Pi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ge(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Kt,(o,a)=>{n[o]=a.val(e),r++,s&&De.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+XA(this.getPriority().val())+":"),this.forEachChild(Kt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":IA(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Ae(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ae.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vu?-1:0}withIndex(e){if(e===Io||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new De(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Io||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Kt),i=n.getIterator(Kt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Io?null:this.indexMap_.get(e.toString())}}De.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class C$ extends De{constructor(){super(new hn(ay),De.EMPTY_NODE,br.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return De.EMPTY_NODE}isEmpty(){return!1}}const vu=new C$;Object.defineProperties(Ae,{MIN:{value:new Ae(Wo,De.EMPTY_NODE)},MAX:{value:new Ae(Ts,vu)}});YA.__EMPTY_NODE=De.EMPTY_NODE;St.__childrenNodeConstructor=De;E$(vu);T$(vu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A$=!0;function Gt(t,e=null){if(t===null)return De.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),X(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new St(n,Gt(e))}if(!(t instanceof Array)&&A$){const n=[];let r=!1;if(Un(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Gt(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new Ae(o,u)))}}),n.length===0)return De.EMPTY_NODE;const s=Vh(n,v$,o=>o.name,ay);if(r){const o=Vh(n,Kt.getCompare());return new De(s,Gt(e),new br({".priority":o},{".priority":Kt}))}else return new De(s,Gt(e),br.Default)}else{let n=De.EMPTY_NODE;return Un(t,(r,i)=>{if(zr(t,r)&&r.substring(0,1)!=="."){const s=Gt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Gt(e))}}w$(Gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k$ extends Ld{constructor(e){super(),this.indexPath_=e,X(!Ie(e)&&Ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?aa(e.name,n.name):s}makePost(e,n){const r=Gt(e),i=De.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ae(n,i)}maxPost(){const e=De.EMPTY_NODE.updateChild(this.indexPath_,vu);return new Ae(Ts,e)}toString(){return qA(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P$ extends Ld{compare(e,n){const r=e.node.compareTo(n.node);return r===0?aa(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,n){const r=Gt(e);return new Ae(n,r)}toString(){return".value"}}const N$=new P$;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b$(t){return{type:"value",snapshotNode:t}}function D$(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function x$(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Iw(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function L$(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Kt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return X(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return X(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wo}hasEnd(){return this.endSet_}getIndexEndValue(){return X(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return X(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ts}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return X(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Kt}copy(){const e=new ly;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Kt?n="$priority":t.index_===N$?n="$value":t.index_===Io?n="$key":(X(t.index_ instanceof k$,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Dt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Dt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Dt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Dt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Dt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Kt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends zA{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=_u("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(X(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Fh.getListenId_(e,r),a={};this.listens_[o]=a;const u=Rw(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Lo(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Fh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Rw(e._queryParams),r=e._path.toString(),i=new u_;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+na(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Fl(a.responseText)}catch{Cn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Cn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O${constructor(){this.rootNode_=De.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){return{value:null,children:new Map}}function t1(t,e,n){if(Ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ce(e);t.children.has(r)||t.children.set(r,Uh());const i=t.children.get(r);e=Ge(e),t1(i,e,n)}}function Km(t,e,n){t.value!==null?n(e,t.value):M$(t,(r,i)=>{const s=new Ye(e.toString()+"/"+r);Km(i,s,n)})}function M$(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V${constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Un(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=10*1e3,F$=30*1e3,U$=5*60*1e3;class $${constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new V$(e);const r=Aw+(F$-Aw)*Math.random();fl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Un(e,(i,s)=>{s>0&&zr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),fl(this.reportStats_.bind(this),Math.floor(Math.random()*2*U$))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lr;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(lr||(lr={}));function n1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function r1(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function i1(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=lr.ACK_USER_WRITE,this.source=n1()}operationForChild(e){if(Ie(this.path)){if(this.affectedTree.value!=null)return X(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ye(e));return new $h(Oe(),n,this.revert)}}else return X(Ce(this.path)===e,"operationForChild called for unrelated child."),new $h(Ge(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=lr.OVERWRITE}operationForChild(e){return Ie(this.path)?new Ss(this.source,Oe(),this.snap.getImmediateChild(e)):new Ss(this.source,Ge(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=lr.MERGE}operationForChild(e){if(Ie(this.path)){const n=this.children.subtree(new Ye(e));return n.isEmpty()?null:n.value?new Ss(this.source,Oe(),n.value):new Yl(this.source,Oe(),n)}else return X(Ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yl(this.source,Ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function B$(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(L$(o.childName,o.snapshotNode))}),Oa(t,i,"child_removed",e,r,n),Oa(t,i,"child_added",e,r,n),Oa(t,i,"child_moved",s,r,n),Oa(t,i,"child_changed",e,r,n),Oa(t,i,"value",e,r,n),i}function Oa(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>z$(t,a,u)),o.forEach(a=>{const u=j$(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function j$(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function z$(t,e,n){if(e.childName==null||n.childName==null)throw ta("Should only compare child_ events.");const r=new Ae(e.childName,e.snapshotNode),i=new Ae(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t,e){return{eventCache:t,serverCache:e}}function pl(t,e,n,r){return s1(new uy(e,n,r),t.serverCache)}function o1(t,e,n,r){return s1(t.eventCache,new uy(e,n,r))}function Qm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Is(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dp;const W$=()=>(dp||(dp=new hn(P4)),dp);class qe{constructor(e,n=W$()){this.value=e,this.children=n}static fromObject(e){let n=new qe(null);return Un(e,(r,i)=>{n=n.set(new Ye(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Oe(),value:this.value};if(Ie(e))return null;{const r=Ce(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ge(e),n);return s!=null?{path:At(new Ye(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ie(e))return this;{const n=Ce(e),r=this.children.get(n);return r!==null?r.subtree(Ge(e)):new qe(null)}}set(e,n){if(Ie(e))return new qe(n,this.children);{const r=Ce(e),s=(this.children.get(r)||new qe(null)).set(Ge(e),n),o=this.children.insert(r,s);return new qe(this.value,o)}}remove(e){if(Ie(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const n=Ce(e),r=this.children.get(n);if(r){const i=r.remove(Ge(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new qe(null):new qe(this.value,s)}else return this}}get(e){if(Ie(e))return this.value;{const n=Ce(e),r=this.children.get(n);return r?r.get(Ge(e)):null}}setTree(e,n){if(Ie(e))return n;{const r=Ce(e),s=(this.children.get(r)||new qe(null)).setTree(Ge(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new qe(this.value,o)}}fold(e){return this.fold_(Oe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(At(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Oe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Ie(e))return null;{const s=Ce(e),o=this.children.get(s);return o?o.findOnPath_(Ge(e),At(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Oe(),n)}foreachOnPath_(e,n,r){if(Ie(e))return this;{this.value&&r(n,this.value);const i=Ce(e),s=this.children.get(i);return s?s.foreachOnPath_(Ge(e),At(n,i),r):new qe(null)}}foreach(e){this.foreach_(Oe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(At(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.writeTree_=e}static empty(){return new Zn(new qe(null))}}function ml(t,e,n){if(Ie(e))return new Zn(new qe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=xn(i,e);return s=s.updateChild(o,n),new Zn(t.writeTree_.set(i,s))}else{const i=new qe(n),s=t.writeTree_.setTree(e,i);return new Zn(s)}}}function kw(t,e,n){let r=t;return Un(n,(i,s)=>{r=ml(r,At(e,i),s)}),r}function Pw(t,e){if(Ie(e))return Zn.empty();{const n=t.writeTree_.setTree(e,new qe(null));return new Zn(n)}}function Ym(t,e){return Os(t,e)!=null}function Os(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xn(n.path,e)):null}function Nw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Kt,(r,i)=>{e.push(new Ae(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Ae(r,i.value))}),e}function Si(t,e){if(Ie(e))return t;{const n=Os(t,e);return n!=null?new Zn(new qe(n)):new Zn(t.writeTree_.subtree(e))}}function Xm(t){return t.writeTree_.isEmpty()}function Ho(t,e){return a1(Oe(),t.writeTree_,e)}function a1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(X(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=a1(At(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(At(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t,e){return f1(e,t)}function H$(t,e,n,r,i){X(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ml(t.visibleWrites,e,n)),t.lastWriteId=r}function q$(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function G$(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);X(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&K$(a,r.path)?i=!1:Yn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Q$(t),!0;if(r.snap)t.visibleWrites=Pw(t.visibleWrites,r.path);else{const a=r.children;Un(a,u=>{t.visibleWrites=Pw(t.visibleWrites,At(r.path,u))})}return!0}else return!1}function K$(t,e){if(t.snap)return Yn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yn(At(t.path,n),e))return!0;return!1}function Q$(t){t.visibleWrites=u1(t.allWrites,Y$,Oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Y$(t){return t.visible}function u1(t,e,n){let r=Zn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Yn(n,o)?(a=xn(n,o),r=ml(r,a,s.snap)):Yn(o,n)&&(a=xn(o,n),r=ml(r,Oe(),s.snap.getChild(a)));else if(s.children){if(Yn(n,o))a=xn(n,o),r=kw(r,a,s.children);else if(Yn(o,n))if(a=xn(o,n),Ie(a))r=kw(r,Oe(),s.children);else{const u=Lo(s.children,Ce(a));if(u){const c=u.getChild(Ge(a));r=ml(r,Oe(),c)}}}else throw ta("WriteRecord should have .snap or .children")}}return r}function c1(t,e,n,r,i){if(!r&&!i){const s=Os(t.visibleWrites,e);if(s!=null)return s;{const o=Si(t.visibleWrites,e);if(Xm(o))return n;if(n==null&&!Ym(o,Oe()))return null;{const a=n||De.EMPTY_NODE;return Ho(o,a)}}}else{const s=Si(t.visibleWrites,e);if(!i&&Xm(s))return n;if(!i&&n==null&&!Ym(s,Oe()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Yn(c.path,e)||Yn(e,c.path))},a=u1(t.allWrites,o,e),u=n||De.EMPTY_NODE;return Ho(a,u)}}}function X$(t,e,n){let r=De.EMPTY_NODE;const i=Os(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Kt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Si(t.visibleWrites,e);return n.forEachChild(Kt,(o,a)=>{const u=Ho(Si(s,new Ye(o)),a);r=r.updateImmediateChild(o,u)}),Nw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Si(t.visibleWrites,e);return Nw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function J$(t,e,n,r,i){X(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=At(e,n);if(Ym(t.visibleWrites,s))return null;{const o=Si(t.visibleWrites,s);return Xm(o)?i.getChild(n):Ho(o,i.getChild(n))}}function Z$(t,e,n,r){const i=At(e,n),s=Os(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Si(t.visibleWrites,i);return Ho(o,r.getNode().getImmediateChild(n))}else return null}function eB(t,e){return Os(t.visibleWrites,e)}function tB(t,e,n,r,i,s,o){let a;const u=Si(t.visibleWrites,e),c=Os(u,Oe());if(c!=null)a=c;else if(n!=null)a=Ho(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=m.getNext();for(;v&&d.length<i;)f(v,r)!==0&&d.push(v),v=m.getNext();return d}else return[]}function nB(){return{visibleWrites:Zn.empty(),allWrites:[],lastWriteId:-1}}function Jm(t,e,n,r){return c1(t.writeTree,t.treePath,e,n,r)}function h1(t,e){return X$(t.writeTree,t.treePath,e)}function bw(t,e,n,r){return J$(t.writeTree,t.treePath,e,n,r)}function Bh(t,e){return eB(t.writeTree,At(t.treePath,e))}function rB(t,e,n,r,i,s){return tB(t.writeTree,t.treePath,e,n,r,i,s)}function cy(t,e,n){return Z$(t.writeTree,t.treePath,e,n)}function d1(t,e){return f1(At(t.treePath,e),t.writeTree)}function f1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;X(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),X(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Iw(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,x$(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,D$(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Iw(r,e.snapshotNode,i.oldSnap));else throw ta("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const p1=new sB;class hy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new uy(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Is(this.viewCache_),s=rB(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function oB(t,e){X(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),X(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function aB(t,e,n,r,i){const s=new iB;let o,a;if(n.type===lr.OVERWRITE){const c=n;c.source.fromUser?o=Zm(t,e,c.path,c.snap,r,i,s):(X(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Ie(c.path),o=jh(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===lr.MERGE){const c=n;c.source.fromUser?o=uB(t,e,c.path,c.children,r,i,s):(X(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=eg(t,e,c.path,c.children,r,i,a,s))}else if(n.type===lr.ACK_USER_WRITE){const c=n;c.revert?o=dB(t,e,c.path,r,i,s):o=cB(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===lr.LISTEN_COMPLETE)o=hB(t,e,n.path,r,s);else throw ta("Unknown operation type: "+n.type);const u=s.getChanges();return lB(e,o,u),{viewCache:o,changes:u}}function lB(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Qm(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(b$(Qm(e)))}}function m1(t,e,n,r,i,s){const o=e.eventCache;if(Bh(r,n)!=null)return e;{let a,u;if(Ie(n))if(X(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Is(e),d=c instanceof De?c:De.EMPTY_NODE,f=h1(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Jm(r,Is(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Ce(n);if(c===".priority"){X(Pi(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=bw(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Ge(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=bw(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=cy(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return pl(e,a,o.isFullyInitialized()||Ie(n),t.filter.filtersNodes())}}function jh(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(Ie(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const v=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),v,null)}else{const v=Ce(n);if(!u.isCompleteForPath(n)&&Pi(n)>1)return e;const E=Ge(n),P=u.getNode().getImmediateChild(v).updateChild(E,r);v===".priority"?c=d.updatePriority(u.getNode(),P):c=d.updateChild(u.getNode(),v,P,E,p1,null)}const f=o1(e,c,u.isFullyInitialized()||Ie(n),d.filtersNodes()),m=new hy(i,f,s);return m1(t,f,n,i,m,a)}function Zm(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new hy(i,e,s);if(Ie(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=pl(e,c,!0,t.filter.filtersNodes());else{const f=Ce(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=pl(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Ge(n),v=a.getNode().getImmediateChild(f);let E;if(Ie(m))E=r;else{const A=d.getCompleteChild(f);A!=null?HA(m)===".priority"&&A.getChild(GA(m)).isEmpty()?E=A:E=A.updateChild(m,r):E=De.EMPTY_NODE}if(v.equals(E))u=e;else{const A=t.filter.updateChild(a.getNode(),f,E,m,d,o);u=pl(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Dw(t,e){return t.eventCache.isCompleteForChild(e)}function uB(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=At(n,u);Dw(e,Ce(d))&&(a=Zm(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=At(n,u);Dw(e,Ce(d))||(a=Zm(t,a,d,c,i,s,o))}),a}function xw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function eg(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;Ie(n)?c=r:c=new qe(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),E=xw(t,v,m);u=jh(t,u,new Ye(f),E,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const v=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!v){const E=e.serverCache.getNode().getImmediateChild(f),A=xw(t,E,m);u=jh(t,u,new Ye(f),A,i,s,o,a)}}),u}function cB(t,e,n,r,i,s,o){if(Bh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(Ie(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return jh(t,e,n,u.getNode().getChild(n),i,s,a,o);if(Ie(n)){let c=new qe(null);return u.getNode().forEachChild(Io,(d,f)=>{c=c.set(new Ye(d),f)}),eg(t,e,n,c,i,s,a,o)}else return e}else{let c=new qe(null);return r.foreach((d,f)=>{const m=At(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),eg(t,e,n,c,i,s,a,o)}}function hB(t,e,n,r,i){const s=e.serverCache,o=o1(e,s.getNode(),s.isFullyInitialized()||Ie(n),s.isFiltered());return m1(t,o,n,r,p1,i)}function dB(t,e,n,r,i,s){let o;if(Bh(r,n)!=null)return e;{const a=new hy(r,e,i),u=e.eventCache.getNode();let c;if(Ie(n)||Ce(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Jm(r,Is(e));else{const f=e.serverCache.getNode();X(f instanceof De,"serverChildren would be complete if leaf node"),d=h1(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=Ce(n);let f=cy(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,Ge(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,De.EMPTY_NODE,Ge(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jm(r,Is(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Bh(r,Oe())!=null,pl(e,c,o,t.filter.filtersNodes())}}function fB(t,e){const n=Is(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ie(e)&&!n.getImmediateChild(Ce(e)).isEmpty())?n.getChild(e):null}function Lw(t,e,n,r){e.type===lr.MERGE&&e.source.queryId!==null&&(X(Is(t.viewCache_),"We should always have a full cache before handling merges"),X(Qm(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=aB(t.processor_,i,e,n,r);return oB(t.processor_,s.viewCache),X(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,pB(t,s.changes,s.viewCache.eventCache.getNode())}function pB(t,e,n,r){const i=t.eventRegistrations_;return B$(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ow;function mB(t){X(!Ow,"__referenceConstructor has already been defined"),Ow=t}function dy(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return X(s!=null,"SyncTree gave us an op for an invalid query."),Lw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Lw(o,e,n,r));return s}}function fy(t,e){let n=null;for(const r of t.views.values())n=n||fB(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mw;function gB(t){X(!Mw,"__referenceConstructor has already been defined"),Mw=t}class Vw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=nB(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _B(t,e,n,r,i){return H$(t.pendingWriteTree_,e,n,r,i),i?Md(t,new Ss(n1(),e,n)):[]}function ho(t,e,n=!1){const r=q$(t.pendingWriteTree_,e);if(G$(t.pendingWriteTree_,e)){let s=new qe(null);return r.snap!=null?s=s.set(Oe(),!0):Un(r.children,o=>{s=s.set(new Ye(o),!0)}),Md(t,new $h(r.path,s,n))}else return[]}function Od(t,e,n){return Md(t,new Ss(r1(),e,n))}function yB(t,e,n){const r=qe.fromObject(n);return Md(t,new Yl(r1(),e,r))}function vB(t,e,n,r){const i=v1(t,r);if(i!=null){const s=E1(i),o=s.path,a=s.queryId,u=xn(o,e),c=new Ss(i1(a),u,n);return w1(t,o,c)}else return[]}function EB(t,e,n,r){const i=v1(t,r);if(i){const s=E1(i),o=s.path,a=s.queryId,u=xn(o,e),c=qe.fromObject(n),d=new Yl(i1(a),u,c);return w1(t,o,d)}else return[]}function g1(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=xn(o,e),c=fy(a,u);if(c)return c});return c1(i,e,s,n,!0)}function Md(t,e){return _1(e,t.syncPointTree_,null,l1(t.pendingWriteTree_,Oe()))}function _1(t,e,n,r){if(Ie(t.path))return y1(t,e,n,r);{const i=e.get(Oe());n==null&&i!=null&&(n=fy(i,Oe()));let s=[];const o=Ce(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=d1(r,o);s=s.concat(_1(a,u,c,d))}return i&&(s=s.concat(dy(i,t,r,n))),s}}function y1(t,e,n,r){const i=e.get(Oe());n==null&&i!=null&&(n=fy(i,Oe()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=d1(r,o),d=t.operationForChild(o);d&&(s=s.concat(y1(d,a,u,c)))}),i&&(s=s.concat(dy(i,t,r,n))),s}function v1(t,e){return t.tagToQueryMap.get(e)}function E1(t){const e=t.indexOf("$");return X(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ye(t.substr(0,e))}}function w1(t,e,n){const r=t.syncPointTree_.get(e);X(r,"Missing sync point for query tag that we're tracking");const i=l1(t.pendingWriteTree_,e);return dy(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new py(n)}node(){return this.node_}}class my{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=At(this.path_,e);return new my(this.syncTree_,n)}node(){return g1(this.syncTree_,this.path_)}}const wB=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fw=function(t,e,n){if(!t||typeof t!="object")return t;if(X(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TB(t[".sv"],e,n);if(typeof t[".sv"]=="object")return SB(t[".sv"],e);X(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TB=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:X(!1,"Unexpected server value: "+t)}},SB=function(t,e,n){t.hasOwnProperty("increment")||X(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&X(!1,"Unexpected increment value: "+r);const i=e.node();if(X(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},IB=function(t,e,n,r){return gy(e,new my(n,t),r)},RB=function(t,e,n){return gy(t,new py(e),n)};function gy(t,e,n){const r=t.getPriority().val(),i=Fw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Fw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new St(a,Gt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new St(i))),o.forEachChild(Kt,(a,u)=>{const c=gy(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function yy(t,e){let n=e instanceof Ye?e:new Ye(e),r=t,i=Ce(n);for(;i!==null;){const s=Lo(r.node.children,i)||{children:{},childCount:0};r=new _y(i,r,s),n=Ge(n),i=Ce(n)}return r}function la(t){return t.node.value}function T1(t,e){t.node.value=e,tg(t)}function S1(t){return t.node.childCount>0}function CB(t){return la(t)===void 0&&!S1(t)}function Vd(t,e){Un(t.node.children,(n,r)=>{e(new _y(n,t,r))})}function I1(t,e,n,r){n&&!r&&e(t),Vd(t,i=>{I1(i,e,!0,r)}),n&&r&&e(t)}function AB(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Eu(t){return new Ye(t.parent===null?t.name:Eu(t.parent)+"/"+t.name)}function tg(t){t.parent!==null&&kB(t.parent,t.name,t)}function kB(t,e,n){const r=CB(n),i=zr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,tg(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,tg(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PB=/[\[\].#$\/\u0000-\u001F\u007F]/,NB=/[\[\].#$\u0000-\u001F\u007F]/,fp=10*1024*1024,R1=function(t){return typeof t=="string"&&t.length!==0&&!PB.test(t)},bB=function(t){return typeof t=="string"&&t.length!==0&&!NB.test(t)},DB=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bB(t)},C1=function(t,e,n){const r=n instanceof Ye?new h$(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Yi(r));if(typeof e=="function")throw new Error(t+"contains a function "+Yi(r)+" with contents = "+e.toString());if(RA(e))throw new Error(t+"contains "+e.toString()+" "+Yi(r));if(typeof e=="string"&&e.length>fp/3&&dd(e)>fp)throw new Error(t+"contains a string greater than "+fp+" utf8 bytes "+Yi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Un(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!R1(o)))throw new Error(t+" contains an invalid key ("+o+") "+Yi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);d$(r,o),C1(t,a,r),f$(r)}),i&&s)throw new Error(t+' contains ".value" child '+Yi(r)+" in addition to actual children.")}},xB=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!R1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DB(n))throw new Error(Tx(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LB{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function OB(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!KA(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ms(t,e,n){OB(t,n),MB(t,r=>Yn(r,e)||Yn(e,r))}function MB(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(VB(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function VB(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();dl&&qt("event: "+n.toString()),yu(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FB="repo_interrupt",UB=25;class $B{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LB,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Uh(),this.transactionQueueTree_=new _y,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BB(t,e,n){if(t.stats_=iy(t.repoInfo_),t.forceRestClient_||O4())t.server_=new Fh(t.repoInfo_,(r,i,s,o)=>{Uw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$w(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Dt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Lr(t.repoInfo_,e,(r,i,s,o)=>{Uw(t,r,i,s,o)},r=>{$w(t,r)},r=>{zB(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=B4(t.repoInfo_,()=>new $$(t.stats_,t.server_)),t.infoData_=new O$,t.infoSyncTree_=new Vw({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Od(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),vy(t,"connected",!1),t.serverSyncTree_=new Vw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);Ms(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function jB(t){const n=t.infoData_.getNode(new Ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function A1(t){return wB({timestamp:jB(t)})}function Uw(t,e,n,r,i){t.dataUpdateCount++;const s=new Ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=yh(n,c=>Gt(c));o=EB(t.serverSyncTree_,s,u,i)}else{const u=Gt(n);o=vB(t.serverSyncTree_,s,u,i)}else if(r){const u=yh(n,c=>Gt(c));o=yB(t.serverSyncTree_,s,u)}else{const u=Gt(n);o=Od(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=wy(t,s)),Ms(t.eventQueue_,a,o)}function $w(t,e){vy(t,"connected",e),e===!1&&HB(t)}function zB(t,e){Un(e,(n,r)=>{vy(t,n,r)})}function vy(t,e,n){const r=new Ye("/.info/"+e),i=Gt(n);t.infoData_.updateSnapshot(r,i);const s=Od(t.infoSyncTree_,r,i);Ms(t.eventQueue_,r,s)}function WB(t){return t.nextWriteId_++}function HB(t){k1(t,"onDisconnectEvents");const e=A1(t),n=Uh();Km(t.onDisconnect_,Oe(),(i,s)=>{const o=IB(i,s,t.serverSyncTree_,e);t1(n,i,o)});let r=[];Km(n,Oe(),(i,s)=>{r=r.concat(Od(t.serverSyncTree_,i,s));const o=QB(t,i);wy(t,o)}),t.onDisconnect_=Uh(),Ms(t.eventQueue_,Oe(),r)}function qB(t){t.persistentConnection_&&t.persistentConnection_.interrupt(FB)}function k1(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qt(n,...e)}function P1(t,e,n){return g1(t.serverSyncTree_,e,n)||De.EMPTY_NODE}function Ey(t,e=t.transactionQueueTree_){if(e||Fd(t,e),la(e)){const n=b1(t,e);X(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&GB(t,Eu(e),n)}else S1(e)&&Vd(e,n=>{Ey(t,n)})}function GB(t,e,n){const r=n.map(c=>c.currentWriteId),i=P1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];X(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=xn(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{k1(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(ho(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Fd(t,yy(t.transactionQueueTree_,e)),Ey(t,t.transactionQueueTree_),Ms(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)yu(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Cn("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}wy(t,e)}},o)}function wy(t,e){const n=N1(t,e),r=Eu(n),i=b1(t,n);return KB(t,i,r),r}function KB(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=xn(n,u.path);let d=!1,f;if(X(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(ho(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=UB)d=!0,f="maxretry",i=i.concat(ho(t.serverSyncTree_,u.currentWriteId,!0));else{const m=P1(t,u.path,o);u.currentInputSnapshot=m;const v=e[a].update(m.val());if(v!==void 0){C1("transaction failed: Data returned ",v,u.path);let E=Gt(v);typeof v=="object"&&v!=null&&zr(v,".priority")||(E=E.updatePriority(m.getPriority()));const P=u.currentWriteId,S=A1(t),_=RB(E,m,S);u.currentOutputSnapshotRaw=E,u.currentOutputSnapshotResolved=_,u.currentWriteId=WB(t),o.splice(o.indexOf(P),1),i=i.concat(_B(t.serverSyncTree_,u.path,_,u.currentWriteId,u.applyLocally)),i=i.concat(ho(t.serverSyncTree_,P,!0))}else d=!0,f="nodata",i=i.concat(ho(t.serverSyncTree_,u.currentWriteId,!0))}Ms(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Fd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)yu(r[a]);Ey(t,t.transactionQueueTree_)}function N1(t,e){let n,r=t.transactionQueueTree_;for(n=Ce(e);n!==null&&la(r)===void 0;)r=yy(r,n),e=Ge(e),n=Ce(e);return r}function b1(t,e){const n=[];return D1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function D1(t,e,n){const r=la(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Vd(e,i=>{D1(t,i,n)})}function Fd(t,e){const n=la(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,T1(e,n.length>0?n:void 0)}Vd(e,r=>{Fd(t,r)})}function QB(t,e){const n=Eu(N1(t,e)),r=yy(t.transactionQueueTree_,e);return AB(r,i=>{pp(t,i)}),pp(t,r),I1(r,i=>{pp(t,i)}),n}function pp(t,e){const n=la(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(X(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(X(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ho(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?T1(e,void 0):n.length=s+1,Ms(t.eventQueue_,Eu(e),i);for(let o=0;o<r.length;o++)yu(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YB(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function XB(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Cn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bw=function(t,e){const n=JB(t),r=n.namespace;n.domain==="firebase.com"&&ws(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ws("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||A4();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new F4(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ye(n.pathString)}},JB=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=YB(t.substring(d,f)));const m=XB(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Ie(this._path)?null:HA(this._path)}get ref(){return new ua(this._repo,this._path)}get _queryIdentifier(){const e=Cw(this._queryParams),n=ny(e);return n==="{}"?"default":n}get _queryObject(){return Cw(this._queryParams)}isEqual(e){if(e=Yt(e),!(e instanceof Ty))return!1;const n=this._repo===e._repo,r=KA(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+c$(this._path)}}class ua extends Ty{constructor(e,n){super(e,n,new ly,!1)}get parent(){const e=GA(this._path);return e===null?null:new ua(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}mB(ua);gB(ua);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZB="FIREBASE_DATABASE_EMULATOR_HOST",ng={};let e3=!1;function t3(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ws("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bw(s,i),a=o.repoInfo,u;typeof process<"u"&&aw&&(u=aw[ZB]),u?(s=`http://${u}?ns=${a.namespace}`,o=Bw(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new V4(t.name,t.options,e);xB("Invalid Firebase Database URL",o),Ie(o.path)||ws("Database URL must point to the root of a Firebase Database (not including a child path).");const d=r3(a,t,c,new M4(t.name,n));return new i3(d,t)}function n3(t,e){const n=ng[e];(!n||n[t.key]!==t)&&ws(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qB(t),delete n[t.key]}function r3(t,e,n,r){let i=ng[e.name];i||(i={},ng[e.name]=i);let s=i[t.toURLString()];return s&&ws("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new $B(t,e3,n,r),i[t.toURLString()]=s,s}class i3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BB(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ua(this._repo,Oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(n3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ws("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s3(t){w4(bs),tr(new Fn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return t3(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),mn(lw,uw,t),mn(lw,uw,"esm2017")}Lr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Lr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};s3();const o3=t=>V.jsx(xo,{to:"/REACT_VITE_TODOAPP/home",className:"capitalize bg-white rounded-3xl text-black px-4 py-2 hover:bg-transparent hover:border hover:border-white hover:text-white border border-transparent transition-all",children:t.title});var x1={};function a3(t){const e=new Error(t);if(e.stack===void 0)try{throw e}catch{}return e}var l3=a3,ve=l3;function u3(t){return!!t&&typeof t.then=="function"}var Ke=u3;function c3(t,e){if(t!=null)return t;throw ve(e??"Got unexpected null or undefined")}var Ze=c3;function ye(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Ud{getValue(){throw ve("BaseLoadable")}toPromise(){throw ve("BaseLoadable")}valueMaybe(){throw ve("BaseLoadable")}valueOrThrow(){throw ve(`Loadable expected value, but in "${this.state}" state`)}promiseMaybe(){throw ve("BaseLoadable")}promiseOrThrow(){throw ve(`Loadable expected promise, but in "${this.state}" state`)}errorMaybe(){throw ve("BaseLoadable")}errorOrThrow(){throw ve(`Loadable expected error, but in "${this.state}" state`)}is(e){return e.state===this.state&&e.contents===this.contents}map(e){throw ve("BaseLoadable")}}class h3 extends Ud{constructor(e){super(),ye(this,"state","hasValue"),ye(this,"contents",void 0),this.contents=e}getValue(){return this.contents}toPromise(){return Promise.resolve(this.contents)}valueMaybe(){return this.contents}valueOrThrow(){return this.contents}promiseMaybe(){}errorMaybe(){}map(e){try{const n=e(this.contents);return Ke(n)?Rs(n):qo(n)?n:wu(n)}catch(n){return Ke(n)?Rs(n.next(()=>this.map(e))):$d(n)}}}class d3 extends Ud{constructor(e){super(),ye(this,"state","hasError"),ye(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return Promise.reject(this.contents)}valueMaybe(){}promiseMaybe(){}errorMaybe(){return this.contents}errorOrThrow(){return this.contents}map(e){return this}}class L1 extends Ud{constructor(e){super(),ye(this,"state","loading"),ye(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return this.contents}valueMaybe(){}promiseMaybe(){return this.contents}promiseOrThrow(){return this.contents}errorMaybe(){}map(e){return Rs(this.contents.then(n=>{const r=e(n);if(qo(r)){const i=r;switch(i.state){case"hasValue":return i.contents;case"hasError":throw i.contents;case"loading":return i.contents}}return r}).catch(n=>{if(Ke(n))return n.then(()=>this.map(e).contents);throw n}))}}function wu(t){return Object.freeze(new h3(t))}function $d(t){return Object.freeze(new d3(t))}function Rs(t){return Object.freeze(new L1(t))}function O1(){return Object.freeze(new L1(new Promise(()=>{})))}function f3(t){return t.every(e=>e.state==="hasValue")?wu(t.map(e=>e.contents)):t.some(e=>e.state==="hasError")?$d(Ze(t.find(e=>e.state==="hasError"),"Invalid loadable passed to loadableAll").contents):Rs(Promise.all(t.map(e=>e.contents)))}function M1(t){const n=(Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(i=>t[i])).map(i=>qo(i)?i:Ke(i)?Rs(i):wu(i)),r=f3(n);return Array.isArray(t)?r:r.map(i=>Object.getOwnPropertyNames(t).reduce((s,o,a)=>({...s,[o]:i[a]}),{}))}function qo(t){return t instanceof Ud}const p3={of:t=>Ke(t)?Rs(t):qo(t)?t:wu(t),error:t=>$d(t),loading:()=>O1(),all:M1,isLoadable:qo};var Vs={loadableWithValue:wu,loadableWithError:$d,loadableWithPromise:Rs,loadableLoading:O1,loadableAll:M1,isLoadable:qo,RecoilLoadable:p3},m3=Vs.loadableWithValue,g3=Vs.loadableWithError,_3=Vs.loadableWithPromise,y3=Vs.loadableLoading,v3=Vs.loadableAll,E3=Vs.isLoadable,w3=Vs.RecoilLoadable,Tu=Object.freeze({__proto__:null,loadableWithValue:m3,loadableWithError:g3,loadableWithPromise:_3,loadableLoading:y3,loadableAll:v3,isLoadable:E3,RecoilLoadable:w3});const rg={RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED:!0,RECOIL_GKS_ENABLED:new Set(["recoil_hamt_2020","recoil_sync_external_store","recoil_suppress_rerender_in_callback","recoil_memory_managament_2020"])};function T3(t,e){var n,r;const i=(n=x1[t])===null||n===void 0||(r=n.toLowerCase())===null||r===void 0?void 0:r.trim();if(i==null||i==="")return;if(!["true","false"].includes(i))throw ve(`process.env.${t} value must be 'true', 'false', or empty: ${i}`);e(i==="true")}function S3(t,e){var n;const r=(n=x1[t])===null||n===void 0?void 0:n.trim();r==null||r===""||e(r.split(/\s*,\s*|\s+/))}function I3(){var t;typeof process>"u"||((t=process)===null||t===void 0?void 0:t.env)!=null&&(T3("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED",e=>{rg.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=e}),S3("RECOIL_GKS_ENABLED",e=>{e.forEach(n=>{rg.RECOIL_GKS_ENABLED.add(n)})}))}I3();var ca=rg;function Bd(t){return ca.RECOIL_GKS_ENABLED.has(t)}Bd.setPass=t=>{ca.RECOIL_GKS_ENABLED.add(t)};Bd.setFail=t=>{ca.RECOIL_GKS_ENABLED.delete(t)};Bd.clear=()=>{ca.RECOIL_GKS_ENABLED.clear()};var Ue=Bd;function R3(t,e,{error:n}={}){return null}var C3=R3,Sy=C3,mp,gp,_p;const A3=(mp=je.createMutableSource)!==null&&mp!==void 0?mp:je.unstable_createMutableSource,V1=(gp=je.useMutableSource)!==null&&gp!==void 0?gp:je.unstable_useMutableSource,F1=(_p=je.useSyncExternalStore)!==null&&_p!==void 0?_p:je.unstable_useSyncExternalStore;function k3(){var t;const{ReactCurrentDispatcher:e,ReactCurrentOwner:n}=je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;return((t=e==null?void 0:e.current)!==null&&t!==void 0?t:n.currentDispatcher).useSyncExternalStore!=null}function P3(){return Ue("recoil_transition_support")?{mode:"TRANSITION_SUPPORT",early:!0,concurrent:!0}:Ue("recoil_sync_external_store")&&F1!=null?{mode:"SYNC_EXTERNAL_STORE",early:!0,concurrent:!1}:Ue("recoil_mutable_source")&&V1!=null&&typeof window<"u"&&!window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE?Ue("recoil_suppress_rerender_in_callback")?{mode:"MUTABLE_SOURCE",early:!0,concurrent:!0}:{mode:"MUTABLE_SOURCE",early:!1,concurrent:!1}:Ue("recoil_suppress_rerender_in_callback")?{mode:"LEGACY",early:!0,concurrent:!1}:{mode:"LEGACY",early:!1,concurrent:!1}}function N3(){return!1}var Su={createMutableSource:A3,useMutableSource:V1,useSyncExternalStore:F1,currentRendererSupportsUseSyncExternalStore:k3,reactMode:P3,isFastRefreshEnabled:N3};class Iy{constructor(e){ye(this,"key",void 0),this.key=e}toJSON(){return{key:this.key}}}class U1 extends Iy{}class $1 extends Iy{}function b3(t){return t instanceof U1||t instanceof $1}var jd={AbstractRecoilValue:Iy,RecoilState:U1,RecoilValueReadOnly:$1,isRecoilValue:b3},D3=jd.AbstractRecoilValue,x3=jd.RecoilState,L3=jd.RecoilValueReadOnly,O3=jd.isRecoilValue,Go=Object.freeze({__proto__:null,AbstractRecoilValue:D3,RecoilState:x3,RecoilValueReadOnly:L3,isRecoilValue:O3});function M3(t,e){return function*(){let n=0;for(const r of t)yield e(r,n++)}()}var zd=M3;class B1{}const V3=new B1,Cs=new Map,Ry=new Map;function F3(t){return zd(t,e=>Ze(Ry.get(e)))}function U3(t){if(Cs.has(t)){const e=`Duplicate atom key "${t}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;console.warn(e)}}function $3(t){ca.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED&&U3(t.key),Cs.set(t.key,t);const e=t.set==null?new Go.RecoilValueReadOnly(t.key):new Go.RecoilState(t.key);return Ry.set(t.key,e),e}class j1 extends Error{}function B3(t){const e=Cs.get(t);if(e==null)throw new j1(`Missing definition for RecoilValue: "${t}""`);return e}function j3(t){return Cs.get(t)}const zh=new Map;function z3(t){var e;if(!Ue("recoil_memory_managament_2020"))return;const n=Cs.get(t);if(n!=null&&(e=n.shouldDeleteConfigOnRelease)!==null&&e!==void 0&&e.call(n)){var r;Cs.delete(t),(r=z1(t))===null||r===void 0||r(),zh.delete(t)}}function W3(t,e){Ue("recoil_memory_managament_2020")&&(e===void 0?zh.delete(t):zh.set(t,e))}function z1(t){return zh.get(t)}var yn={nodes:Cs,recoilValues:Ry,registerNode:$3,getNode:B3,getNodeMaybe:j3,deleteNodeConfigIfPossible:z3,setConfigDeletionHandler:W3,getConfigDeletionHandler:z1,recoilValuesForKeys:F3,NodeMissingError:j1,DefaultValue:B1,DEFAULT_VALUE:V3};function H3(t,e){e()}var q3={enqueueExecution:H3};function G3(t,e){return e={exports:{}},t(e,e.exports),e.exports}var K3=G3(function(t){var e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},n={},r=5,i=Math.pow(2,r),s=i-1,o=i/2,a=i/4,u={},c=function(N){return function(){return N}},d=n.hash=function(L){var N=typeof L>"u"?"undefined":e(L);if(N==="number")return L;N!=="string"&&(L+="");for(var j=0,Q=0,Y=L.length;Q<Y;++Q){var ee=L.charCodeAt(Q);j=(j<<5)-j+ee|0}return j},f=function(N){return N-=N>>1&1431655765,N=(N&858993459)+(N>>2&858993459),N=N+(N>>4)&252645135,N+=N>>8,N+=N>>16,N&127},m=function(N,j){return j>>>N&s},v=function(N){return 1<<N},E=function(N,j){return f(N&j-1)},A=function(N,j,Q,Y){var ee=Y;if(!N){var oe=Y.length;ee=new Array(oe);for(var le=0;le<oe;++le)ee[le]=Y[le]}return ee[j]=Q,ee},P=function(N,j,Q){var Y=Q.length-1,ee=0,oe=0,le=Q;if(N)ee=oe=j;else for(le=new Array(Y);ee<j;)le[oe++]=Q[ee++];for(++ee;ee<=Y;)le[oe++]=Q[ee++];return N&&(le.length=Y),le},S=function(N,j,Q,Y){var ee=Y.length;if(N){for(var oe=ee;oe>=j;)Y[oe--]=Y[oe];return Y[j]=Q,Y}for(var le=0,ue=0,pe=new Array(ee+1);le<j;)pe[ue++]=Y[le++];for(pe[j]=Q;le<ee;)pe[++ue]=Y[le++];return pe},_=1,T=2,O=3,F=4,U={__hamt_isEmpty:!0},w=function(N){return N===U||N&&N.__hamt_isEmpty},y=function(N,j,Q,Y){return{type:_,edit:N,hash:j,key:Q,value:Y,_modify:K}},I=function(N,j,Q){return{type:T,edit:N,hash:j,children:Q,_modify:ae}},C=function(N,j,Q){return{type:O,edit:N,mask:j,children:Q,_modify:J}},k=function(N,j,Q){return{type:F,edit:N,size:j,children:Q,_modify:re}},D=function(N){return N===U||N.type===_||N.type===T},R=function(N,j,Q,Y,ee){for(var oe=[],le=Y,ue=0,pe=0;le;++pe)le&1&&(oe[pe]=ee[ue++]),le>>>=1;return oe[j]=Q,k(N,ue+1,oe)},$e=function(N,j,Q,Y){for(var ee=new Array(j-1),oe=0,le=0,ue=0,pe=Y.length;ue<pe;++ue)if(ue!==Q){var Ve=Y[ue];Ve&&!w(Ve)&&(ee[oe++]=Ve,le|=1<<ue)}return C(N,le,ee)},Jt=function L(N,j,Q,Y,ee,oe){if(Q===ee)return I(N,Q,[oe,Y]);var le=m(j,Q),ue=m(j,ee);return C(N,v(le)|v(ue),le===ue?[L(N,j+r,Q,Y,ee,oe)]:le<ue?[Y,oe]:[oe,Y])},Et=function(N,j,Q,Y,ee,oe,le,ue){for(var pe=ee.length,Ve=0;Ve<pe;++Ve){var mt=ee[Ve];if(Q(le,mt.key)){var at=mt.value,Tt=oe(at);return Tt===at?ee:Tt===u?(--ue.value,P(N,Ve,ee)):A(N,Ve,y(j,Y,le,Tt),ee)}}var an=oe();return an===u?ee:(++ue.value,A(N,pe,y(j,Y,le,an),ee))},pt=function(N,j){return N===j.edit},K=function(N,j,Q,Y,ee,oe,le){if(j(oe,this.key)){var ue=Y(this.value);return ue===this.value?this:ue===u?(--le.value,U):pt(N,this)?(this.value=ue,this):y(N,ee,oe,ue)}var pe=Y();return pe===u?this:(++le.value,Jt(N,Q,this.hash,this,ee,y(N,ee,oe,pe)))},ae=function(N,j,Q,Y,ee,oe,le){if(ee===this.hash){var ue=pt(N,this),pe=Et(ue,N,j,this.hash,this.children,Y,oe,le);return pe===this.children?this:pe.length>1?I(N,this.hash,pe):pe[0]}var Ve=Y();return Ve===u?this:(++le.value,Jt(N,Q,this.hash,this,ee,y(N,ee,oe,Ve)))},J=function(N,j,Q,Y,ee,oe,le){var ue=this.mask,pe=this.children,Ve=m(Q,ee),mt=v(Ve),at=E(ue,mt),Tt=ue&mt,an=Tt?pe[at]:U,rt=an._modify(N,j,Q+r,Y,ee,oe,le);if(an===rt)return this;var ji=pt(N,this),Bn=ue,jn=void 0;if(Tt&&w(rt)){if(Bn&=~mt,!Bn)return U;if(pe.length<=2&&D(pe[at^1]))return pe[at^1];jn=P(ji,at,pe)}else if(!Tt&&!w(rt)){if(pe.length>=o)return R(N,Ve,rt,ue,pe);Bn|=mt,jn=S(ji,at,rt,pe)}else jn=A(ji,at,rt,pe);return ji?(this.mask=Bn,this.children=jn,this):C(N,Bn,jn)},re=function(N,j,Q,Y,ee,oe,le){var ue=this.size,pe=this.children,Ve=m(Q,ee),mt=pe[Ve],at=(mt||U)._modify(N,j,Q+r,Y,ee,oe,le);if(mt===at)return this;var Tt=pt(N,this),an=void 0;if(w(mt)&&!w(at))++ue,an=A(Tt,Ve,at,pe);else if(!w(mt)&&w(at)){if(--ue,ue<=a)return $e(N,ue,Ve,pe);an=A(Tt,Ve,U,pe)}else an=A(Tt,Ve,at,pe);return Tt?(this.size=ue,this.children=an,this):k(N,ue,an)};U._modify=function(L,N,j,Q,Y,ee,oe){var le=Q();return le===u?U:(++oe.value,y(L,Y,ee,le))};function b(L,N,j,Q,Y){this._editable=L,this._edit=N,this._config=j,this._root=Q,this._size=Y}b.prototype.setTree=function(L,N){return this._editable?(this._root=L,this._size=N,this):L===this._root?this:new b(this._editable,this._edit,this._config,L,N)};var $=n.tryGetHash=function(L,N,j,Q){for(var Y=Q._root,ee=0,oe=Q._config.keyEq;;)switch(Y.type){case _:return oe(j,Y.key)?Y.value:L;case T:{if(N===Y.hash)for(var le=Y.children,ue=0,pe=le.length;ue<pe;++ue){var Ve=le[ue];if(oe(j,Ve.key))return Ve.value}return L}case O:{var mt=m(ee,N),at=v(mt);if(Y.mask&at){Y=Y.children[E(Y.mask,at)],ee+=r;break}return L}case F:{if(Y=Y.children[m(ee,N)],Y){ee+=r;break}return L}default:return L}};b.prototype.tryGetHash=function(L,N,j){return $(L,N,j,this)};var q=n.tryGet=function(L,N,j){return $(L,j._config.hash(N),N,j)};b.prototype.tryGet=function(L,N){return q(L,N,this)};var se=n.getHash=function(L,N,j){return $(void 0,L,N,j)};b.prototype.getHash=function(L,N){return se(L,N,this)},n.get=function(L,N){return $(void 0,N._config.hash(L),L,N)},b.prototype.get=function(L,N){return q(N,L,this)};var Z=n.has=function(L,N,j){return $(u,L,N,j)!==u};b.prototype.hasHash=function(L,N){return Z(L,N,this)};var fe=n.has=function(L,N){return Z(N._config.hash(L),L,N)};b.prototype.has=function(L){return fe(L,this)};var Ee=function(N,j){return N===j};n.make=function(L){return new b(0,0,{keyEq:L&&L.keyEq||Ee,hash:L&&L.hash||d},U,0)},n.empty=n.make();var ie=n.isEmpty=function(L){return L&&!!w(L._root)};b.prototype.isEmpty=function(){return ie(this)};var xe=n.modifyHash=function(L,N,j,Q){var Y={value:Q._size},ee=Q._root._modify(Q._editable?Q._edit:NaN,Q._config.keyEq,0,L,N,j,Y);return Q.setTree(ee,Y.value)};b.prototype.modifyHash=function(L,N,j){return xe(j,L,N,this)};var Xe=n.modify=function(L,N,j){return xe(L,j._config.hash(N),N,j)};b.prototype.modify=function(L,N){return Xe(N,L,this)};var Pe=n.setHash=function(L,N,j,Q){return xe(c(j),L,N,Q)};b.prototype.setHash=function(L,N,j){return Pe(L,N,j,this)};var Me=n.set=function(L,N,j){return Pe(j._config.hash(L),L,N,j)};b.prototype.set=function(L,N){return Me(L,N,this)};var Zt=c(u),$n=n.removeHash=function(L,N,j){return xe(Zt,L,N,j)};b.prototype.removeHash=b.prototype.deleteHash=function(L,N){return $n(L,N,this)};var en=n.remove=function(L,N){return $n(N._config.hash(L),L,N)};b.prototype.remove=b.prototype.delete=function(L){return en(L,this)};var tn=n.beginMutation=function(L){return new b(L._editable+1,L._edit+1,L._config,L._root,L._size)};b.prototype.beginMutation=function(){return tn(this)};var ku=n.endMutation=function(L){return L._editable=L._editable&&L._editable-1,L};b.prototype.endMutation=function(){return ku(this)};var Pu=n.mutate=function(L,N){var j=tn(N);return L(j),ku(j)};b.prototype.mutate=function(L){return Pu(L,this)};var $i=function(N){return N&&da(N[0],N[1],N[2],N[3],N[4])},da=function(N,j,Q,Y,ee){for(;Q<N;){var oe=j[Q++];if(oe&&!w(oe))return Nu(oe,Y,[N,j,Q,Y,ee])}return $i(ee)},Nu=function(N,j,Q){switch(N.type){case _:return{value:j(N),rest:Q};case T:case F:case O:var Y=N.children;return da(Y.length,Y,0,j,Q);default:return $i(Q)}},fa={done:!0};function Bi(L){this.v=L}Bi.prototype.next=function(){if(!this.v)return fa;var L=this.v;return this.v=$i(L.rest),L},Bi.prototype[Symbol.iterator]=function(){return this};var Us=function(N,j){return new Bi(Nu(N._root,j))},wt=function(N){return[N.key,N.value]},Pt=n.entries=function(L){return Us(L,wt)};b.prototype.entries=b.prototype[Symbol.iterator]=function(){return Pt(this)};var $s=function(N){return N.key},bu=n.keys=function(L){return Us(L,$s)};b.prototype.keys=function(){return bu(this)};var Du=function(N){return N.value},lf=n.values=b.prototype.values=function(L){return Us(L,Du)};b.prototype.values=function(){return lf(this)};var Hr=n.fold=function(L,N,j){var Q=j._root;if(Q.type===_)return L(N,Q.value,Q.key);for(var Y=[Q.children],ee=void 0;ee=Y.pop();)for(var oe=0,le=ee.length;oe<le;){var ue=ee[oe++];ue&&ue.type&&(ue.type===_?N=L(N,ue.value,ue.key):Y.push(ue.children))}return N};b.prototype.fold=function(L,N){return Hr(L,N,this)};var xu=n.forEach=function(L,N){return Hr(function(j,Q,Y){return L(Q,Y,N)},null,N)};b.prototype.forEach=function(L){return xu(L,this)};var Lu=n.count=function(L){return L._size};b.prototype.count=function(){return Lu(this)},Object.defineProperty(b.prototype,"size",{get:b.prototype.count}),t.exports?t.exports=n:(void 0).hamt=n});class Q3{constructor(e){ye(this,"_map",void 0),this._map=new Map(e==null?void 0:e.entries())}keys(){return this._map.keys()}entries(){return this._map.entries()}get(e){return this._map.get(e)}has(e){return this._map.has(e)}set(e,n){return this._map.set(e,n),this}delete(e){return this._map.delete(e),this}clone(){return Ay(this)}toMap(){return new Map(this._map)}}class Cy{constructor(e){if(ye(this,"_hamt",K3.empty.beginMutation()),e instanceof Cy){const n=e._hamt.endMutation();e._hamt=n.beginMutation(),this._hamt=n.beginMutation()}else if(e)for(const[n,r]of e.entries())this._hamt.set(n,r)}keys(){return this._hamt.keys()}entries(){return this._hamt.entries()}get(e){return this._hamt.get(e)}has(e){return this._hamt.has(e)}set(e,n){return this._hamt.set(e,n),this}delete(e){return this._hamt.delete(e),this}clone(){return Ay(this)}toMap(){return new Map(this._hamt)}}function Ay(t){return Ue("recoil_hamt_2020")?new Cy(t):new Q3(t)}var Y3={persistentMap:Ay},X3=Y3.persistentMap,J3=Object.freeze({__proto__:null,persistentMap:X3});function Z3(t,...e){const n=new Set;e:for(const r of t){for(const i of e)if(i.has(r))continue e;n.add(r)}return n}var gl=Z3;function ej(t,e){const n=new Map;return t.forEach((r,i)=>{n.set(i,e(r,i))}),n}var Wh=ej;function tj(){return{nodeDeps:new Map,nodeToNodeSubscriptions:new Map}}function nj(t){return{nodeDeps:Wh(t.nodeDeps,e=>new Set(e)),nodeToNodeSubscriptions:Wh(t.nodeToNodeSubscriptions,e=>new Set(e))}}function yp(t,e,n,r){const{nodeDeps:i,nodeToNodeSubscriptions:s}=n,o=i.get(t);if(o&&r&&o!==r.nodeDeps.get(t))return;i.set(t,e);const a=o==null?e:gl(e,o);for(const u of a)s.has(u)||s.set(u,new Set),Ze(s.get(u)).add(t);if(o){const u=gl(o,e);for(const c of u){if(!s.has(c))return;const d=Ze(s.get(c));d.delete(t),d.size===0&&s.delete(c)}}}function rj(t,e,n,r){var i,s,o,a;const u=n.getState();r===u.currentTree.version||r===((i=u.nextTree)===null||i===void 0?void 0:i.version)||((s=u.previousTree)===null||s===void 0||s.version);const c=n.getGraph(r);if(yp(t,e,c),r===((o=u.previousTree)===null||o===void 0?void 0:o.version)){const f=n.getGraph(u.currentTree.version);yp(t,e,f,c)}if(r===((a=u.previousTree)===null||a===void 0?void 0:a.version)||r===u.currentTree.version){var d;const f=(d=u.nextTree)===null||d===void 0?void 0:d.version;if(f!==void 0){const m=n.getGraph(f);yp(t,e,m,c)}}}var Iu={cloneGraph:nj,graph:tj,saveDepsToStore:rj};let ij=0;const sj=()=>ij++;let oj=0;const aj=()=>oj++;let lj=0;const uj=()=>lj++;var Wd={getNextTreeStateVersion:sj,getNextStoreID:aj,getNextComponentID:uj};const{persistentMap:jw}=J3,{graph:cj}=Iu,{getNextTreeStateVersion:W1}=Wd;function H1(){const t=W1();return{version:t,stateID:t,transactionMetadata:{},dirtyAtoms:new Set,atomValues:jw(),nonvalidatedAtoms:jw()}}function hj(){const t=H1();return{currentTree:t,nextTree:null,previousTree:null,commitDepth:0,knownAtoms:new Set,knownSelectors:new Set,transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(t.version,cj()),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map}}var q1={makeEmptyTreeState:H1,makeEmptyStoreState:hj,getNextTreeStateVersion:W1};class G1{}function dj(){return new G1}var Hd={RetentionZone:G1,retentionZone:dj};function fj(t,e){const n=new Set(t);return n.add(e),n}function pj(t,e){const n=new Set(t);return n.delete(e),n}function mj(t,e,n){const r=new Map(t);return r.set(e,n),r}function gj(t,e,n){const r=new Map(t);return r.set(e,n(r.get(e))),r}function _j(t,e){const n=new Map(t);return n.delete(e),n}function yj(t,e){const n=new Map(t);return e.forEach(r=>n.delete(r)),n}var K1={setByAddingToSet:fj,setByDeletingFromSet:pj,mapBySettingInMap:mj,mapByUpdatingInMap:gj,mapByDeletingFromMap:_j,mapByDeletingMultipleFromMap:yj};function*vj(t,e){let n=0;for(const r of t)e(r,n++)&&(yield r)}var ky=vj;function Ej(t,e){return new Proxy(t,{get:(r,i)=>(!(i in r)&&i in e&&(r[i]=e[i]()),r[i]),ownKeys:r=>Object.keys(r)})}var Q1=Ej;const{getNode:Ru,getNodeMaybe:wj,recoilValuesForKeys:zw}=yn,{RetentionZone:Ww}=Hd,{setByAddingToSet:Tj}=K1,Sj=Object.freeze(new Set);class Ij extends Error{}function Rj(t,e,n){if(!Ue("recoil_memory_managament_2020"))return()=>{};const{nodesRetainedByZone:r}=t.getState().retention;function i(s){let o=r.get(s);o||r.set(s,o=new Set),o.add(e)}if(n instanceof Ww)i(n);else if(Array.isArray(n))for(const s of n)i(s);return()=>{if(!Ue("recoil_memory_managament_2020"))return;const{retention:s}=t.getState();function o(a){const u=s.nodesRetainedByZone.get(a);u==null||u.delete(e),u&&u.size===0&&s.nodesRetainedByZone.delete(a)}if(n instanceof Ww)o(n);else if(Array.isArray(n))for(const a of n)o(a)}}function Py(t,e,n,r){const i=t.getState();if(i.nodeCleanupFunctions.has(n))return;const s=Ru(n),o=Rj(t,n,s.retainedBy),a=s.init(t,e,r);i.nodeCleanupFunctions.set(n,()=>{a(),o()})}function Cj(t,e,n){Py(t,t.getState().currentTree,e,n)}function Aj(t,e){var n;const r=t.getState();(n=r.nodeCleanupFunctions.get(e))===null||n===void 0||n(),r.nodeCleanupFunctions.delete(e)}function kj(t,e,n){return Py(t,e,n,"get"),Ru(n).get(t,e)}function Y1(t,e,n){return Ru(n).peek(t,e)}function Pj(t,e,n){var r;const i=wj(e);return i==null||(r=i.invalidate)===null||r===void 0||r.call(i,t),{...t,atomValues:t.atomValues.clone().delete(e),nonvalidatedAtoms:t.nonvalidatedAtoms.clone().set(e,n),dirtyAtoms:Tj(t.dirtyAtoms,e)}}function Nj(t,e,n,r){const i=Ru(n);if(i.set==null)throw new Ij(`Attempt to set read-only RecoilValue: ${n}`);const s=i.set;return Py(t,e,n,"set"),s(t,e,r)}function bj(t,e,n){const r=t.getState(),i=t.getGraph(e.version),s=Ru(n).nodeType;return Q1({type:s},{loadable:()=>Y1(t,e,n),isActive:()=>r.knownAtoms.has(n)||r.knownSelectors.has(n),isSet:()=>s==="selector"?!1:e.atomValues.has(n),isModified:()=>e.dirtyAtoms.has(n),deps:()=>{var o;return zw((o=i.nodeDeps.get(n))!==null&&o!==void 0?o:[])},subscribers:()=>{var o,a;return{nodes:zw(ky(X1(t,e,new Set([n])),u=>u!==n)),components:zd((o=(a=r.nodeToComponentSubscriptions.get(n))===null||a===void 0?void 0:a.values())!==null&&o!==void 0?o:[],([u])=>({name:u}))}}})}function X1(t,e,n){const r=new Set,i=Array.from(n),s=t.getGraph(e.version);for(let a=i.pop();a;a=i.pop()){var o;r.add(a);const u=(o=s.nodeToNodeSubscriptions.get(a))!==null&&o!==void 0?o:Sj;for(const c of u)r.has(c)||i.push(c)}return r}var Fi={getNodeLoadable:kj,peekNodeLoadable:Y1,setNodeValue:Nj,initializeNode:Cj,cleanUpNode:Aj,setUnvalidatedAtomValue_DEPRECATED:Pj,peekNodeInfo:bj,getDownstreamNodes:X1};let J1=null;function Dj(t){J1=t}function xj(){var t;(t=J1)===null||t===void 0||t()}var Z1={setInvalidateMemoizedSnapshot:Dj,invalidateMemoizedSnapshot:xj};const{getDownstreamNodes:Lj,getNodeLoadable:ek,setNodeValue:Oj}=Fi,{getNextComponentID:Mj}=Wd,{getNode:Vj,getNodeMaybe:tk}=yn,{DefaultValue:Ny}=yn,{reactMode:Fj}=Su,{AbstractRecoilValue:Uj,RecoilState:$j,RecoilValueReadOnly:Bj,isRecoilValue:jj}=Go,{invalidateMemoizedSnapshot:zj}=Z1;function Wj(t,{key:e},n=t.getState().currentTree){var r,i;const s=t.getState();n.version===s.currentTree.version||n.version===((r=s.nextTree)===null||r===void 0?void 0:r.version)||(n.version,(i=s.previousTree)===null||i===void 0||i.version);const o=ek(t,n,e);return o.state==="loading"&&o.contents.catch(()=>{}),o}function Hj(t,e){const n=t.clone();return e.forEach((r,i)=>{r.state==="hasValue"&&r.contents instanceof Ny?n.delete(i):n.set(i,r)}),n}function qj(t,e,{key:n},r){if(typeof r=="function"){const i=ek(t,e,n);if(i.state==="loading"){const s=`Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;throw ve(s)}else if(i.state==="hasError")throw i.contents;return r(i.contents)}else return r}function Gj(t,e,n){if(n.type==="set"){const{recoilValue:i,valueOrUpdater:s}=n,o=qj(t,e,i,s),a=Oj(t,e,i.key,o);for(const[u,c]of a.entries())ig(e,u,c)}else if(n.type==="setLoadable"){const{recoilValue:{key:i},loadable:s}=n;ig(e,i,s)}else if(n.type==="markModified"){const{recoilValue:{key:i}}=n;e.dirtyAtoms.add(i)}else if(n.type==="setUnvalidated"){var r;const{recoilValue:{key:i},unvalidatedValue:s}=n,o=tk(i);o==null||(r=o.invalidate)===null||r===void 0||r.call(o,e),e.atomValues.delete(i),e.nonvalidatedAtoms.set(i,s),e.dirtyAtoms.add(i)}else Sy(`Unknown action ${n.type}`)}function ig(t,e,n){n.state==="hasValue"&&n.contents instanceof Ny?t.atomValues.delete(e):t.atomValues.set(e,n),t.dirtyAtoms.add(e),t.nonvalidatedAtoms.delete(e)}function nk(t,e){t.replaceState(n=>{const r=rk(n);for(const i of e)Gj(t,r,i);return ik(t,r),zj(),r})}function qd(t,e){if(_l.length){const n=_l[_l.length-1];let r=n.get(t);r||n.set(t,r=[]),r.push(e)}else nk(t,[e])}const _l=[];function Kj(){const t=new Map;return _l.push(t),()=>{for(const[e,n]of t)nk(e,n);_l.pop()}}function rk(t){return{...t,atomValues:t.atomValues.clone(),nonvalidatedAtoms:t.nonvalidatedAtoms.clone(),dirtyAtoms:new Set(t.dirtyAtoms)}}function ik(t,e){const n=Lj(t,e,e.dirtyAtoms);for(const s of n){var r,i;(r=tk(s))===null||r===void 0||(i=r.invalidate)===null||i===void 0||i.call(r,e)}}function sk(t,e,n){qd(t,{type:"set",recoilValue:e,valueOrUpdater:n})}function Qj(t,e,n){if(n instanceof Ny)return sk(t,e,n);qd(t,{type:"setLoadable",recoilValue:e,loadable:n})}function Yj(t,e){qd(t,{type:"markModified",recoilValue:e})}function Xj(t,e,n){qd(t,{type:"setUnvalidated",recoilValue:e,unvalidatedValue:n})}function Jj(t,{key:e},n,r=null){const i=Mj(),s=t.getState();s.nodeToComponentSubscriptions.has(e)||s.nodeToComponentSubscriptions.set(e,new Map),Ze(s.nodeToComponentSubscriptions.get(e)).set(i,[r??"<not captured>",n]);const o=Fj();if(o.early&&(o.mode==="LEGACY"||o.mode==="MUTABLE_SOURCE")){const a=t.getState().nextTree;a&&a.dirtyAtoms.has(e)&&n(a)}return{release:()=>{const a=t.getState(),u=a.nodeToComponentSubscriptions.get(e);u===void 0||!u.has(i)||(u.delete(i),u.size===0&&a.nodeToComponentSubscriptions.delete(e))}}}function Zj(t,e){var n;const{currentTree:r}=t.getState(),i=Vj(e.key);(n=i.clearCache)===null||n===void 0||n.call(i,t,r)}var vr={RecoilValueReadOnly:Bj,AbstractRecoilValue:Uj,RecoilState:$j,getRecoilValueAsLoadable:Wj,setRecoilValue:sk,setRecoilValueLoadable:Qj,markRecoilValueModified:Yj,setUnvalidatedRecoilValue:Xj,subscribeToRecoilValue:Jj,isRecoilValue:jj,applyAtomValueWrites:Hj,batchStart:Kj,writeLoadableToTreeState:ig,invalidateDownstreams:ik,copyTreeState:rk,refreshRecoilValue:Zj};function e9(t,e,n){const r=t.entries();let i=r.next();for(;!i.done;){const s=i.value;if(e.call(n,s[1],s[0],t))return!0;i=r.next()}return!1}var t9=e9;const{cleanUpNode:n9}=Fi,{deleteNodeConfigIfPossible:r9,getNode:ok}=yn,{RetentionZone:ak}=Hd,i9=12e4,lk=new Set;function uk(t,e){const n=t.getState(),r=n.currentTree;if(n.nextTree)return;const i=new Set;for(const o of e)if(o instanceof ak)for(const a of l9(n,o))i.add(a);else i.add(o);const s=s9(t,i);for(const o of s)a9(t,r,o)}function s9(t,e){const n=t.getState(),r=n.currentTree,i=t.getGraph(r.version),s=new Set,o=new Set;return a(e),s;function a(u){const c=new Set,d=o9(t,r,u,s,o);for(const E of d){var f;if(ok(E).retainedBy==="recoilRoot"){o.add(E);continue}if(((f=n.retention.referenceCounts.get(E))!==null&&f!==void 0?f:0)>0){o.add(E);continue}if(ck(E).some(P=>n.retention.referenceCounts.get(P))){o.add(E);continue}const A=i.nodeToNodeSubscriptions.get(E);if(A&&t9(A,P=>o.has(P))){o.add(E);continue}s.add(E),c.add(E)}const m=new Set;for(const E of c)for(const A of(v=i.nodeDeps.get(E))!==null&&v!==void 0?v:lk){var v;s.has(A)||m.add(A)}m.size&&a(m)}}function o9(t,e,n,r,i){const s=t.getGraph(e.version),o=[],a=new Set;for(;n.size>0;)u(Ze(n.values().next().value));return o;function u(c){if(r.has(c)||i.has(c)){n.delete(c);return}if(a.has(c))return;const d=s.nodeToNodeSubscriptions.get(c);if(d)for(const f of d)u(f);a.add(c),n.delete(c),o.push(c)}}function a9(t,e,n){if(!Ue("recoil_memory_managament_2020"))return;n9(t,n);const r=t.getState();r.knownAtoms.delete(n),r.knownSelectors.delete(n),r.nodeTransactionSubscriptions.delete(n),r.retention.referenceCounts.delete(n);const i=ck(n);for(const u of i){var s;(s=r.retention.nodesRetainedByZone.get(u))===null||s===void 0||s.delete(n)}e.atomValues.delete(n),e.dirtyAtoms.delete(n),e.nonvalidatedAtoms.delete(n);const o=r.graphsByVersion.get(e.version);if(o){const u=o.nodeDeps.get(n);if(u!==void 0){o.nodeDeps.delete(n);for(const c of u){var a;(a=o.nodeToNodeSubscriptions.get(c))===null||a===void 0||a.delete(n)}}o.nodeToNodeSubscriptions.delete(n)}r9(n)}function l9(t,e){var n;return(n=t.retention.nodesRetainedByZone.get(e))!==null&&n!==void 0?n:lk}function ck(t){const e=ok(t).retainedBy;return e===void 0||e==="components"||e==="recoilRoot"?[]:e instanceof ak?[e]:e}function u9(t,e){const n=t.getState();n.nextTree?n.retention.retainablesToCheckForRelease.add(e):uk(t,new Set([e]))}function c9(t,e,n){var r;if(!Ue("recoil_memory_managament_2020"))return;const i=t.getState().retention.referenceCounts,s=((r=i.get(e))!==null&&r!==void 0?r:0)+n;s===0?hk(t,e):i.set(e,s)}function hk(t,e){if(!Ue("recoil_memory_managament_2020"))return;t.getState().retention.referenceCounts.delete(e),u9(t,e)}function h9(t){if(!Ue("recoil_memory_managament_2020"))return;const e=t.getState();uk(t,e.retention.retainablesToCheckForRelease),e.retention.retainablesToCheckForRelease.clear()}function d9(t){return t===void 0?"recoilRoot":t}var Fs={SUSPENSE_TIMEOUT_MS:i9,updateRetainCount:c9,updateRetainCountToZero:hk,releaseScheduledRetainablesNow:h9,retainedByOptionWithDefault:d9};const{unstable_batchedUpdates:f9}=Xb;var p9={unstable_batchedUpdates:f9};const{unstable_batchedUpdates:m9}=p9;var g9={unstable_batchedUpdates:m9};const{batchStart:_9}=vr,{unstable_batchedUpdates:y9}=g9;let by=y9||(t=>t());const v9=t=>{by=t},E9=()=>by,w9=t=>{by(()=>{let e=()=>{};try{e=_9(),t()}finally{e()}})};var Gd={getBatcher:E9,setBatcher:v9,batchUpdates:w9};function*T9(t){for(const e of t)for(const n of e)yield n}var dk=T9;const fk=typeof Window>"u"||typeof window>"u",S9=t=>!fk&&(t===window||t instanceof Window),I9=typeof navigator<"u"&&navigator.product==="ReactNative";var Kd={isSSR:fk,isReactNative:I9,isWindow:S9};function R9(t,e){let n;return(...r)=>{n||(n={});const i=e(...r);return Object.hasOwnProperty.call(n,i)||(n[i]=t(...r)),n[i]}}function C9(t,e){let n,r;return(...i)=>{const s=e(...i);return n===s||(n=s,r=t(...i)),r}}function A9(t,e){let n,r;return[(...o)=>{const a=e(...o);return n===a||(n=a,r=t(...o)),r},()=>{n=null}]}var k9={memoizeWithArgsHash:R9,memoizeOneWithArgsHash:C9,memoizeOneWithArgsHashAndInvalidation:A9};const{batchUpdates:sg}=Gd,{initializeNode:P9,peekNodeInfo:N9}=Fi,{graph:b9}=Iu,{getNextStoreID:D9}=Wd,{DEFAULT_VALUE:x9,recoilValues:Hw,recoilValuesForKeys:qw}=yn,{AbstractRecoilValue:L9,getRecoilValueAsLoadable:O9,setRecoilValue:Gw,setUnvalidatedRecoilValue:M9}=vr,{updateRetainCount:zc}=Fs,{setInvalidateMemoizedSnapshot:V9}=Z1,{getNextTreeStateVersion:F9,makeEmptyStoreState:U9}=q1,{isSSR:$9}=Kd,{memoizeOneWithArgsHashAndInvalidation:B9}=k9;class Qd{constructor(e,n){ye(this,"_store",void 0),ye(this,"_refCount",1),ye(this,"getLoadable",r=>(this.checkRefCount_INTERNAL(),O9(this._store,r))),ye(this,"getPromise",r=>(this.checkRefCount_INTERNAL(),this.getLoadable(r).toPromise())),ye(this,"getNodes_UNSTABLE",r=>{if(this.checkRefCount_INTERNAL(),(r==null?void 0:r.isModified)===!0){if((r==null?void 0:r.isInitialized)===!1)return[];const o=this._store.getState().currentTree;return qw(o.dirtyAtoms)}const i=this._store.getState().knownAtoms,s=this._store.getState().knownSelectors;return(r==null?void 0:r.isInitialized)==null?Hw.values():r.isInitialized===!0?qw(dk([i,s])):ky(Hw.values(),({key:o})=>!i.has(o)&&!s.has(o))}),ye(this,"getInfo_UNSTABLE",({key:r})=>(this.checkRefCount_INTERNAL(),N9(this._store,this._store.getState().currentTree,r))),ye(this,"map",r=>{this.checkRefCount_INTERNAL();const i=new og(this,sg);return r(i),i}),ye(this,"asyncMap",async r=>{this.checkRefCount_INTERNAL();const i=new og(this,sg);return i.retain(),await r(i),i.autoRelease_INTERNAL(),i}),this._store={storeID:D9(),parentStoreID:n,getState:()=>e,replaceState:r=>{e.currentTree=r(e.currentTree)},getGraph:r=>{const i=e.graphsByVersion;if(i.has(r))return Ze(i.get(r));const s=b9();return i.set(r,s),s},subscribeToTransactions:()=>({release:()=>{}}),addTransactionMetadata:()=>{throw ve("Cannot subscribe to Snapshots")}};for(const r of this._store.getState().knownAtoms)P9(this._store,r,"get"),zc(this._store,r,1);this.autoRelease_INTERNAL()}retain(){this._refCount<=0,this._refCount++;let e=!1;return()=>{e||(e=!0,this._release())}}autoRelease_INTERNAL(){$9||window.setTimeout(()=>this._release(),10)}_release(){if(this._refCount--,this._refCount===0){if(this._store.getState().nodeCleanupFunctions.forEach(e=>e()),this._store.getState().nodeCleanupFunctions.clear(),!Ue("recoil_memory_managament_2020"))return}else this._refCount<0}isRetained(){return this._refCount>0}checkRefCount_INTERNAL(){Ue("recoil_memory_managament_2020")&&this._refCount<=0}getStore_INTERNAL(){return this.checkRefCount_INTERNAL(),this._store}getID(){return this.checkRefCount_INTERNAL(),this._store.getState().currentTree.stateID}getStoreID(){return this.checkRefCount_INTERNAL(),this._store.storeID}}function pk(t,e,n=!1){const r=t.getState(),i=n?F9():e.version;return{currentTree:{version:n?i:e.version,stateID:n?i:e.stateID,transactionMetadata:{...e.transactionMetadata},dirtyAtoms:new Set(e.dirtyAtoms),atomValues:e.atomValues.clone(),nonvalidatedAtoms:e.nonvalidatedAtoms.clone()},commitDepth:0,nextTree:null,previousTree:null,knownAtoms:new Set(r.knownAtoms),knownSelectors:new Set(r.knownSelectors),transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(i,t.getGraph(e.version)),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map(zd(r.nodeCleanupFunctions.entries(),([s])=>[s,()=>{}]))}}function j9(t){const e=new Qd(U9());return t!=null?e.map(t):e}const[Kw,mk]=B9((t,e)=>{var n;const r=t.getState(),i=e==="latest"?(n=r.nextTree)!==null&&n!==void 0?n:r.currentTree:Ze(r.previousTree);return new Qd(pk(t,i),t.storeID)},(t,e)=>{var n,r;return String(e)+String(t.storeID)+String((n=t.getState().nextTree)===null||n===void 0?void 0:n.version)+String(t.getState().currentTree.version)+String((r=t.getState().previousTree)===null||r===void 0?void 0:r.version)});V9(mk);function z9(t,e="latest"){const n=Kw(t,e);return n.isRetained()?n:(mk(),Kw(t,e))}class og extends Qd{constructor(e,n){super(pk(e.getStore_INTERNAL(),e.getStore_INTERNAL().getState().currentTree,!0),e.getStoreID()),ye(this,"_batch",void 0),ye(this,"set",(r,i)=>{this.checkRefCount_INTERNAL();const s=this.getStore_INTERNAL();this._batch(()=>{zc(s,r.key,1),Gw(this.getStore_INTERNAL(),r,i)})}),ye(this,"reset",r=>{this.checkRefCount_INTERNAL();const i=this.getStore_INTERNAL();this._batch(()=>{zc(i,r.key,1),Gw(this.getStore_INTERNAL(),r,x9)})}),ye(this,"setUnvalidatedAtomValues_DEPRECATED",r=>{this.checkRefCount_INTERNAL();const i=this.getStore_INTERNAL();sg(()=>{for(const[s,o]of r.entries())zc(i,s,1),M9(i,new L9(s),o)})}),this._batch=n}}var Yd={Snapshot:Qd,MutableSnapshot:og,freshSnapshot:j9,cloneSnapshot:z9},W9=Yd.Snapshot,H9=Yd.MutableSnapshot,q9=Yd.freshSnapshot,G9=Yd.cloneSnapshot,Xd=Object.freeze({__proto__:null,Snapshot:W9,MutableSnapshot:H9,freshSnapshot:q9,cloneSnapshot:G9});function K9(...t){const e=new Set;for(const n of t)for(const r of n)e.add(r);return e}var Q9=K9;const{useRef:Y9}=je;function X9(t){const e=Y9(t);return e.current===t&&typeof t=="function"&&(e.current=t()),e}var Qw=X9;const{getNextTreeStateVersion:J9,makeEmptyStoreState:gk}=q1,{cleanUpNode:Z9,getDownstreamNodes:ez,initializeNode:tz,setNodeValue:nz,setUnvalidatedAtomValue_DEPRECATED:rz}=Fi,{graph:iz}=Iu,{cloneGraph:sz}=Iu,{getNextStoreID:_k}=Wd,{createMutableSource:vp,reactMode:yk}=Su,{applyAtomValueWrites:oz}=vr,{releaseScheduledRetainablesNow:vk}=Fs,{freshSnapshot:az}=Xd,{useCallback:lz,useContext:Ek,useEffect:ag,useMemo:uz,useRef:cz,useState:hz}=je;function Ma(){throw ve("This component must be used inside a <RecoilRoot> component.")}const wk=Object.freeze({storeID:_k(),getState:Ma,replaceState:Ma,getGraph:Ma,subscribeToTransactions:Ma,addTransactionMetadata:Ma});let lg=!1;function Yw(t){if(lg)throw ve("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");const e=t.getState();if(e.nextTree===null){Ue("recoil_memory_managament_2020")&&Ue("recoil_release_on_cascading_update_killswitch_2021")&&e.commitDepth>0&&vk(t);const n=e.currentTree.version,r=J9();e.nextTree={...e.currentTree,version:r,stateID:r,dirtyAtoms:new Set,transactionMetadata:{}},e.graphsByVersion.set(r,sz(Ze(e.graphsByVersion.get(n))))}}const Tk=je.createContext({current:wk}),Jd=()=>Ek(Tk),Sk=je.createContext(null);function dz(){return Ek(Sk)}function Dy(t,e,n){const r=ez(t,n,n.dirtyAtoms);for(const i of r){const s=e.nodeToComponentSubscriptions.get(i);if(s)for(const[o,[a,u]]of s)u(n)}}function Ik(t){const e=t.getState(),n=e.currentTree,r=n.dirtyAtoms;if(r.size){for(const[i,s]of e.nodeTransactionSubscriptions)if(r.has(i))for(const[o,a]of s)a(t);for(const[i,s]of e.transactionSubscriptions)s(t);(!yk().early||e.suspendedComponentResolvers.size>0)&&(Dy(t,e,n),e.suspendedComponentResolvers.forEach(i=>i()),e.suspendedComponentResolvers.clear())}e.queuedComponentCallbacks_DEPRECATED.forEach(i=>i(n)),e.queuedComponentCallbacks_DEPRECATED.splice(0,e.queuedComponentCallbacks_DEPRECATED.length)}function fz(t){const e=t.getState();e.commitDepth++;try{const{nextTree:n}=e;if(n==null)return;e.previousTree=e.currentTree,e.currentTree=n,e.nextTree=null,Ik(t),e.previousTree!=null?e.graphsByVersion.delete(e.previousTree.version):Sy("Ended batch with no previous state, which is unexpected","recoil"),e.previousTree=null,Ue("recoil_memory_managament_2020")&&n==null&&vk(t)}finally{e.commitDepth--}}function pz({setNotifyBatcherOfChange:t}){const e=Jd(),[,n]=hz([]);return t(()=>n({})),ag(()=>(t(()=>n({})),()=>{t(()=>{})}),[t]),ag(()=>{q3.enqueueExecution("Batcher",()=>{fz(e.current)})}),null}function mz(t,e){const n=gk();return e({set:(r,i)=>{const s=n.currentTree,o=nz(t,s,r.key,i),a=new Set(o.keys()),u=s.nonvalidatedAtoms.clone();for(const c of a)u.delete(c);n.currentTree={...s,dirtyAtoms:Q9(s.dirtyAtoms,a),atomValues:oz(s.atomValues,o),nonvalidatedAtoms:u}},setUnvalidatedAtomValues:r=>{r.forEach((i,s)=>{n.currentTree=rz(n.currentTree,s,i)})}}),n}function gz(t){const e=az(t),n=e.getStore_INTERNAL().getState();return e.retain(),n.nodeCleanupFunctions.forEach(r=>r()),n.nodeCleanupFunctions.clear(),n}let Xw=0;function _z({initializeState_DEPRECATED:t,initializeState:e,store_INTERNAL:n,children:r}){let i;const s=v=>{const E=i.current.graphsByVersion;if(E.has(v))return Ze(E.get(v));const A=iz();return E.set(v,A),A},o=(v,E)=>{if(E==null){const{transactionSubscriptions:A}=f.current.getState(),P=Xw++;return A.set(P,v),{release:()=>{A.delete(P)}}}else{const{nodeTransactionSubscriptions:A}=f.current.getState();A.has(E)||A.set(E,new Map);const P=Xw++;return Ze(A.get(E)).set(P,v),{release:()=>{const S=A.get(E);S&&(S.delete(P),S.size===0&&A.delete(E))}}}},a=v=>{Yw(f.current);for(const E of Object.keys(v))Ze(f.current.getState().nextTree).transactionMetadata[E]=v[E]},u=v=>{Yw(f.current);const E=Ze(i.current.nextTree);let A;try{lg=!0,A=v(E)}finally{lg=!1}A!==E&&(i.current.nextTree=A,yk().early&&Dy(f.current,i.current,A),Ze(c.current)())},c=cz(null),d=lz(v=>{c.current=v},[c]),f=Qw(()=>n??{storeID:_k(),getState:()=>i.current,replaceState:u,getGraph:s,subscribeToTransactions:o,addTransactionMetadata:a});n!=null&&(f.current=n),i=Qw(()=>t!=null?mz(f.current,t):e!=null?gz(e):gk());const m=uz(()=>vp==null?void 0:vp(i,()=>i.current.currentTree.version),[i]);return ag(()=>{const v=f.current;for(const E of new Set(v.getState().knownAtoms))tz(v,E,"get");return()=>{for(const E of v.getState().knownAtoms)Z9(v,E)}},[f]),je.createElement(Tk.Provider,{value:f},je.createElement(Sk.Provider,{value:m},je.createElement(pz,{setNotifyBatcherOfChange:d}),r))}function yz(t){const{override:e,...n}=t,r=Jd();return e===!1&&r.current!==wk?t.children:je.createElement(_z,n)}function vz(){return Jd().current.storeID}var Wr={RecoilRoot:yz,useStoreRef:Jd,useRecoilMutableSource:dz,useRecoilStoreID:vz,notifyComponents_FOR_TESTING:Dy,sendEndOfBatchNotifications_FOR_TESTING:Ik};function Ez(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}var wz=Ez;const{useEffect:Tz,useRef:Sz}=je;function Iz(t){const e=Sz();return Tz(()=>{e.current=t}),e.current}var Rk=Iz;const{useStoreRef:Rz}=Wr,{SUSPENSE_TIMEOUT_MS:Cz}=Fs,{updateRetainCount:Va}=Fs,{RetentionZone:Az}=Hd,{useEffect:kz,useRef:Pz}=je,{isSSR:Jw}=Kd;function Nz(t){if(Ue("recoil_memory_managament_2020"))return bz(t)}function bz(t){const n=(Array.isArray(t)?t:[t]).map(o=>o instanceof Az?o:o.key),r=Rz();kz(()=>{if(!Ue("recoil_memory_managament_2020"))return;const o=r.current;if(i.current&&!Jw)window.clearTimeout(i.current),i.current=null;else for(const a of n)Va(o,a,1);return()=>{for(const a of n)Va(o,a,-1)}},[r,...n]);const i=Pz(),s=Rk(n);if(!Jw&&(s===void 0||!wz(s,n))){const o=r.current;for(const a of n)Va(o,a,1);if(s)for(const a of s)Va(o,a,-1);i.current&&window.clearTimeout(i.current),i.current=window.setTimeout(()=>{i.current=null;for(const a of n)Va(o,a,-1)},Cz)}}var xy=Nz;function Dz(){return"<component name not available>"}var Cu=Dz;const{batchUpdates:xz}=Gd,{DEFAULT_VALUE:Ck}=yn,{currentRendererSupportsUseSyncExternalStore:Lz,reactMode:ha,useMutableSource:Oz,useSyncExternalStore:Mz}=Su,{useRecoilMutableSource:Vz,useStoreRef:Er}=Wr,{AbstractRecoilValue:ug,getRecoilValueAsLoadable:Au,setRecoilValue:Hh,setUnvalidatedRecoilValue:Fz,subscribeToRecoilValue:Ko}=vr,{useCallback:_n,useEffect:Qo,useMemo:Ak,useRef:yl,useState:Ly}=je,{setByAddingToSet:Uz}=K1,{isSSR:$z}=Kd;function Oy(t,e,n){if(t.state==="hasValue")return t.contents;throw t.state==="loading"?new Promise(i=>{const s=n.current.getState().suspendedComponentResolvers;s.add(i),$z&&Ke(t.contents)&&t.contents.finally(()=>{s.delete(i)})}):t.state==="hasError"?t.contents:ve(`Invalid value of loadable atom "${e.key}"`)}function Bz(){const t=Cu(),e=Er(),[,n]=Ly([]),r=yl(new Set);r.current=new Set;const i=yl(new Set),s=yl(new Map),o=_n(u=>{const c=s.current.get(u);c&&(c.release(),s.current.delete(u))},[s]),a=_n((u,c)=>{s.current.has(c)&&n([])},[]);return Qo(()=>{const u=e.current;gl(r.current,i.current).forEach(c=>{if(s.current.has(c))return;const d=Ko(u,new ug(c),m=>a(m,c),t);s.current.set(c,d),u.getState().nextTree?u.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{a(u.getState(),c)}):a(u.getState(),c)}),gl(i.current,r.current).forEach(c=>{o(c)}),i.current=r.current}),Qo(()=>{const u=s.current;return gl(r.current,new Set(u.keys())).forEach(c=>{const d=Ko(e.current,new ug(c),f=>a(f,c),t);u.set(c,d)}),()=>u.forEach((c,d)=>o(d))},[t,e,o,a]),Ak(()=>{function u(E){return A=>{Hh(e.current,E,A)}}function c(E){return()=>Hh(e.current,E,Ck)}function d(E){var A;r.current.has(E.key)||(r.current=Uz(r.current,E.key));const P=e.current.getState();return Au(e.current,E,ha().early&&(A=P.nextTree)!==null&&A!==void 0?A:P.currentTree)}function f(E){const A=d(E);return Oy(A,E,e)}function m(E){return[f(E),u(E)]}function v(E){return[d(E),u(E)]}return{getRecoilValue:f,getRecoilValueLoadable:d,getRecoilState:m,getRecoilStateLoadable:v,getSetRecoilState:u,getResetRecoilState:c}},[r,e])}const jz={current:0};function zz(t){const e=Er(),n=Cu(),r=_n(()=>{var a;const u=e.current,c=u.getState(),d=ha().early&&(a=c.nextTree)!==null&&a!==void 0?a:c.currentTree;return{loadable:Au(u,t,d),key:t.key}},[e,t]),i=_n(a=>{let u;return()=>{var c,d;const f=a();return(c=u)!==null&&c!==void 0&&c.loadable.is(f.loadable)&&((d=u)===null||d===void 0?void 0:d.key)===f.key?u:(u=f,f)}},[]),s=Ak(()=>i(r),[r,i]),o=_n(a=>{const u=e.current;return Ko(u,t,a,n).release},[e,t,n]);return Mz(o,s,s).loadable}function Wz(t){const e=Er(),n=_n(()=>{var c;const d=e.current,f=d.getState(),m=ha().early&&(c=f.nextTree)!==null&&c!==void 0?c:f.currentTree;return Au(d,t,m)},[e,t]),r=_n(()=>n(),[n]),i=Cu(),s=_n((c,d)=>{const f=e.current;return Ko(f,t,()=>{if(!Ue("recoil_suppress_rerender_in_callback"))return d();const v=n();u.current.is(v)||d(),u.current=v},i).release},[e,t,i,n]),o=Vz();if(o==null)throw ve("Recoil hooks must be used in components contained within a <RecoilRoot> component.");const a=Oz(o,r,s),u=yl(a);return Qo(()=>{u.current=a}),a}function cg(t){const e=Er(),n=Cu(),r=_n(()=>{var u;const c=e.current,d=c.getState(),f=ha().early&&(u=d.nextTree)!==null&&u!==void 0?u:d.currentTree;return Au(c,t,f)},[e,t]),i=_n(()=>({loadable:r(),key:t.key}),[r,t.key]),s=_n(u=>{const c=i();return u.loadable.is(c.loadable)&&u.key===c.key?u:c},[i]);Qo(()=>{const u=Ko(e.current,t,c=>{a(s)},n);return a(s),u.release},[n,t,e,s]);const[o,a]=Ly(i);return o.key!==t.key?i().loadable:o.loadable}function Hz(t){const e=Er(),[,n]=Ly([]),r=Cu(),i=_n(()=>{var a;const u=e.current,c=u.getState(),d=ha().early&&(a=c.nextTree)!==null&&a!==void 0?a:c.currentTree;return Au(u,t,d)},[e,t]),s=i(),o=yl(s);return Qo(()=>{o.current=s}),Qo(()=>{const a=e.current,u=a.getState(),c=Ko(a,t,f=>{var m;if(!Ue("recoil_suppress_rerender_in_callback"))return n([]);const v=i();(m=o.current)!==null&&m!==void 0&&m.is(v)||n(v),o.current=v},r);if(u.nextTree)a.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{o.current=null,n([])});else{var d;if(!Ue("recoil_suppress_rerender_in_callback"))return n([]);const f=i();(d=o.current)!==null&&d!==void 0&&d.is(f)||n(f),o.current=f}return c.release},[r,i,t,e]),s}function My(t){return Ue("recoil_memory_managament_2020")&&xy(t),{TRANSITION_SUPPORT:cg,SYNC_EXTERNAL_STORE:Lz()?zz:cg,MUTABLE_SOURCE:Wz,LEGACY:Hz}[ha().mode](t)}function kk(t){const e=Er(),n=My(t);return Oy(n,t,e)}function Zd(t){const e=Er();return _n(n=>{Hh(e.current,t,n)},[e,t])}function qz(t){const e=Er();return _n(()=>{Hh(e.current,t,Ck)},[e,t])}function Gz(t){return[kk(t),Zd(t)]}function Kz(t){return[My(t),Zd(t)]}function Qz(){const t=Er();return(e,n={})=>{xz(()=>{t.current.addTransactionMetadata(n),e.forEach((r,i)=>Fz(t.current,new ug(i),r))})}}function Pk(t){return Ue("recoil_memory_managament_2020")&&xy(t),cg(t)}function Nk(t){const e=Er(),n=Pk(t);return Oy(n,t,e)}function Yz(t){return[Nk(t),Zd(t)]}var Xz={recoilComponentGetRecoilValueCount_FOR_TESTING:jz,useRecoilInterface:Bz,useRecoilState:Gz,useRecoilStateLoadable:Kz,useRecoilValue:kk,useRecoilValueLoadable:My,useResetRecoilState:qz,useSetRecoilState:Zd,useSetUnvalidatedAtomValues:Qz,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:Pk,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:Nk,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:Yz};function Jz(t,e){const n=new Map;for(const[r,i]of t)e(i,r)&&n.set(r,i);return n}var Zz=Jz;function e6(t,e){const n=new Set;for(const r of t)e(r)&&n.add(r);return n}var t6=e6;function n6(...t){const e=new Map;for(let n=0;n<t.length;n++){const r=t[n].keys();let i;for(;!(i=r.next()).done;)e.set(i.value,t[n].get(i.value))}return e}var r6=n6;const{batchUpdates:i6}=Gd,{DEFAULT_VALUE:s6,getNode:bk,nodes:o6}=yn,{useStoreRef:Vy}=Wr,{AbstractRecoilValue:a6,setRecoilValueLoadable:l6}=vr,{SUSPENSE_TIMEOUT_MS:u6}=Fs,{cloneSnapshot:qh}=Xd,{useCallback:ef,useEffect:Dk,useRef:Zw,useState:c6}=je,{isSSR:eT}=Kd;function tf(t){const e=Vy();Dk(()=>e.current.subscribeToTransactions(t).release,[t,e])}function tT(t){const e=t.atomValues.toMap(),n=Wh(Zz(e,(r,i)=>{const o=bk(i).persistence_UNSTABLE;return o!=null&&o.type!=="none"&&r.state==="hasValue"}),r=>r.contents);return r6(t.nonvalidatedAtoms.toMap(),n)}function h6(t){tf(ef(e=>{let n=e.getState().previousTree;const r=e.getState().currentTree;n||(n=e.getState().currentTree);const i=tT(r),s=tT(n),o=Wh(o6,u=>{var c,d,f,m;return{persistence_UNSTABLE:{type:(c=(d=u.persistence_UNSTABLE)===null||d===void 0?void 0:d.type)!==null&&c!==void 0?c:"none",backButton:(f=(m=u.persistence_UNSTABLE)===null||m===void 0?void 0:m.backButton)!==null&&f!==void 0?f:!1}}}),a=t6(r.dirtyAtoms,u=>i.has(u)||s.has(u));t({atomValues:i,previousAtomValues:s,atomInfo:o,modifiedAtoms:a,transactionMetadata:{...r.transactionMetadata}})},[t]))}function d6(t){tf(ef(e=>{const n=qh(e,"latest"),r=qh(e,"previous");t({snapshot:n,previousSnapshot:r})},[t]))}function f6(){const t=Vy(),[e,n]=c6(()=>qh(t.current)),r=Rk(e),i=Zw(),s=Zw();if(tf(ef(a=>n(qh(a)),[])),Dk(()=>{const a=e.retain();if(i.current&&!eT){var u;window.clearTimeout(i.current),i.current=null,(u=s.current)===null||u===void 0||u.call(s),s.current=null}return()=>{window.setTimeout(a,10)}},[e]),r!==e&&!eT){if(i.current){var o;window.clearTimeout(i.current),i.current=null,(o=s.current)===null||o===void 0||o.call(s),s.current=null}s.current=e.retain(),i.current=window.setTimeout(()=>{var a;i.current=null,(a=s.current)===null||a===void 0||a.call(s),s.current=null},u6)}return e}function xk(t,e){var n;const r=t.getState(),i=(n=r.nextTree)!==null&&n!==void 0?n:r.currentTree,s=e.getStore_INTERNAL().getState().currentTree;i6(()=>{const o=new Set;for(const c of[i.atomValues.keys(),s.atomValues.keys()])for(const d of c){var a,u;((a=i.atomValues.get(d))===null||a===void 0?void 0:a.contents)!==((u=s.atomValues.get(d))===null||u===void 0?void 0:u.contents)&&bk(d).shouldRestoreFromSnapshots&&o.add(d)}o.forEach(c=>{l6(t,new a6(c),s.atomValues.has(c)?Ze(s.atomValues.get(c)):s6)}),t.replaceState(c=>({...c,stateID:e.getID()}))})}function p6(){const t=Vy();return ef(e=>xk(t.current,e),[t])}var Lk={useRecoilSnapshot:f6,gotoSnapshot:xk,useGotoRecoilSnapshot:p6,useRecoilTransactionObserver:d6,useTransactionObservation_DEPRECATED:h6,useTransactionSubscription_DEPRECATED:tf};const{peekNodeInfo:m6}=Fi,{useStoreRef:g6}=Wr;function _6(){const t=g6();return({key:e})=>m6(t.current,t.current.getState().currentTree,e)}var y6=_6;const{reactMode:v6}=Su,{RecoilRoot:E6,useStoreRef:w6}=Wr,{useMemo:T6}=je;function S6(){v6().mode==="MUTABLE_SOURCE"&&console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");const t=w6().current;return T6(()=>{function e({children:n}){return je.createElement(E6,{store_INTERNAL:t},n)}return e},[t])}var I6=S6;const{loadableWithValue:R6}=Tu,{initializeNode:C6}=Fi,{DEFAULT_VALUE:A6,getNode:k6}=yn,{copyTreeState:P6,getRecoilValueAsLoadable:N6,invalidateDownstreams:b6,writeLoadableToTreeState:D6}=vr;function nT(t){return k6(t.key).nodeType==="atom"}class x6{constructor(e,n){ye(this,"_store",void 0),ye(this,"_treeState",void 0),ye(this,"_changes",void 0),ye(this,"get",r=>{if(this._changes.has(r.key))return this._changes.get(r.key);if(!nT(r))throw ve("Reading selectors within atomicUpdate is not supported");const i=N6(this._store,r,this._treeState);if(i.state==="hasValue")return i.contents;throw i.state==="hasError"?i.contents:ve(`Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`)}),ye(this,"set",(r,i)=>{if(!nT(r))throw ve("Setting selectors within atomicUpdate is not supported");if(typeof i=="function"){const s=this.get(r);this._changes.set(r.key,i(s))}else C6(this._store,r.key,"set"),this._changes.set(r.key,i)}),ye(this,"reset",r=>{this.set(r,A6)}),this._store=e,this._treeState=n,this._changes=new Map}newTreeState_INTERNAL(){if(this._changes.size===0)return this._treeState;const e=P6(this._treeState);for(const[n,r]of this._changes)D6(e,n,R6(r));return b6(this._store,e),e}}function L6(t){return e=>{t.replaceState(n=>{const r=new x6(t,n);return e(r),r.newTreeState_INTERNAL()})}}var O6={atomicUpdater:L6},M6=O6.atomicUpdater,Ok=Object.freeze({__proto__:null,atomicUpdater:M6});function V6(t,e){if(!t)throw new Error(e)}var F6=V6,Ya=F6;const{atomicUpdater:U6}=Ok,{batchUpdates:$6}=Gd,{DEFAULT_VALUE:B6}=yn,{useStoreRef:j6}=Wr,{refreshRecoilValue:z6,setRecoilValue:rT}=vr,{cloneSnapshot:W6}=Xd,{gotoSnapshot:H6}=Lk,{useCallback:q6}=je;class Mk{}const G6=new Mk;function Vk(t,e,n,r){let i=G6,s;if($6(()=>{const a="useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";if(typeof e!="function")throw ve(a);const u=Q1({...r??{},set:(d,f)=>rT(t,d,f),reset:d=>rT(t,d,B6),refresh:d=>z6(t,d),gotoSnapshot:d=>H6(t,d),transact_UNSTABLE:d=>U6(t)(d)},{snapshot:()=>{const d=W6(t);return s=d.retain(),d}}),c=e(u);if(typeof c!="function")throw ve(a);i=c(...n)}),i instanceof Mk&&Ya(!1),Ke(i))i=i.finally(()=>{var a;(a=s)===null||a===void 0||a()});else{var o;(o=s)===null||o===void 0||o()}return i}function K6(t,e){const n=j6();return q6((...r)=>Vk(n.current,t,r),e!=null?[...e,n]:void 0)}var Fk={recoilCallback:Vk,useRecoilCallback:K6};const{useStoreRef:Q6}=Wr,{refreshRecoilValue:Y6}=vr,{useCallback:X6}=je;function J6(t){const e=Q6();return X6(()=>{const n=e.current;Y6(n,t)},[t,e])}var Z6=J6;const{atomicUpdater:e5}=Ok,{useStoreRef:t5}=Wr,{useMemo:n5}=je;function r5(t,e){const n=t5();return n5(()=>(...r)=>{e5(n.current)(s=>{t(s)(...r)})},e!=null?[...e,n]:void 0)}var i5=r5;class s5{constructor(e){ye(this,"value",void 0),this.value=e}}var o5={WrappedValue:s5},a5=o5.WrappedValue,Uk=Object.freeze({__proto__:null,WrappedValue:a5});const{isFastRefreshEnabled:l5}=Su;class iT extends Error{}class u5{constructor(e){var n,r,i;ye(this,"_name",void 0),ye(this,"_numLeafs",void 0),ye(this,"_root",void 0),ye(this,"_onHit",void 0),ye(this,"_onSet",void 0),ye(this,"_mapNodeValue",void 0),this._name=e==null?void 0:e.name,this._numLeafs=0,this._root=null,this._onHit=(n=e==null?void 0:e.onHit)!==null&&n!==void 0?n:()=>{},this._onSet=(r=e==null?void 0:e.onSet)!==null&&r!==void 0?r:()=>{},this._mapNodeValue=(i=e==null?void 0:e.mapNodeValue)!==null&&i!==void 0?i:s=>s}size(){return this._numLeafs}root(){return this._root}get(e,n){var r;return(r=this.getLeafNode(e,n))===null||r===void 0?void 0:r.value}getLeafNode(e,n){if(this._root==null)return;let r=this._root;for(;r;){if(n==null||n.onNodeVisit(r),r.type==="leaf")return this._onHit(r),r;const i=this._mapNodeValue(e(r.nodeKey));r=r.branches.get(i)}}set(e,n,r){const i=()=>{var s,o,a,u;let c,d;for(const[P,S]of e){var f,m,v;const _=this._root;if((_==null?void 0:_.type)==="leaf")throw this.invalidCacheError();const T=c;if(c=T?T.branches.get(d):_,c=(f=c)!==null&&f!==void 0?f:{type:"branch",nodeKey:P,parent:T,branches:new Map,branchKey:d},c.type!=="branch"||c.nodeKey!==P)throw this.invalidCacheError();T==null||T.branches.set(d,c),r==null||(m=r.onNodeVisit)===null||m===void 0||m.call(r,c),d=this._mapNodeValue(S),this._root=(v=this._root)!==null&&v!==void 0?v:c}const E=c?(s=c)===null||s===void 0?void 0:s.branches.get(d):this._root;if(E!=null&&(E.type!=="leaf"||E.branchKey!==d))throw this.invalidCacheError();const A={type:"leaf",value:n,parent:c,branchKey:d};(o=c)===null||o===void 0||o.branches.set(d,A),this._root=(a=this._root)!==null&&a!==void 0?a:A,this._numLeafs++,this._onSet(A),r==null||(u=r.onNodeVisit)===null||u===void 0||u.call(r,A)};try{i()}catch(s){if(s instanceof iT)this.clear(),i();else throw s}}delete(e){const n=this.root();if(!n)return!1;if(e===n)return this._root=null,this._numLeafs=0,!0;let r=e.parent,i=e.branchKey;for(;r;){var s;if(r.branches.delete(i),r===n)return r.branches.size===0?(this._root=null,this._numLeafs=0):this._numLeafs--,!0;if(r.branches.size>0)break;i=(s=r)===null||s===void 0?void 0:s.branchKey,r=r.parent}for(;r!==n;r=r.parent)if(r==null)return!1;return this._numLeafs--,!0}clear(){this._numLeafs=0,this._root=null}invalidCacheError(){const e=l5()?"Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.":"Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";throw Sy(e+(this._name!=null?` - ${this._name}`:"")),new iT}}var c5={TreeCache:u5},h5=c5.TreeCache,$k=Object.freeze({__proto__:null,TreeCache:h5});class d5{constructor(e){var n;ye(this,"_maxSize",void 0),ye(this,"_size",void 0),ye(this,"_head",void 0),ye(this,"_tail",void 0),ye(this,"_map",void 0),ye(this,"_keyMapper",void 0),this._maxSize=e.maxSize,this._size=0,this._head=null,this._tail=null,this._map=new Map,this._keyMapper=(n=e.mapKey)!==null&&n!==void 0?n:r=>r}head(){return this._head}tail(){return this._tail}size(){return this._size}maxSize(){return this._maxSize}has(e){return this._map.has(this._keyMapper(e))}get(e){const n=this._keyMapper(e),r=this._map.get(n);if(r)return this.set(e,r.value),r.value}set(e,n){const r=this._keyMapper(e);this._map.get(r)&&this.delete(e);const s=this.head(),o={key:e,right:s,left:null,value:n};s?s.left=o:this._tail=o,this._map.set(r,o),this._head=o,this._size++,this._maybeDeleteLRU()}_maybeDeleteLRU(){this.size()>this.maxSize()&&this.deleteLru()}deleteLru(){const e=this.tail();e&&this.delete(e.key)}delete(e){const n=this._keyMapper(e);if(!this._size||!this._map.has(n))return;const r=Ze(this._map.get(n)),i=r.right,s=r.left;i&&(i.left=r.left),s&&(s.right=r.right),r===this.head()&&(this._head=i),r===this.tail()&&(this._tail=s),this._map.delete(n),this._size--}clear(){this._size=0,this._head=null,this._tail=null,this._map=new Map}}var f5={LRUCache:d5},p5=f5.LRUCache,Bk=Object.freeze({__proto__:null,LRUCache:p5});const{LRUCache:m5}=Bk,{TreeCache:g5}=$k;function _5({name:t,maxSize:e,mapNodeValue:n=r=>r}){const r=new m5({maxSize:e}),i=new g5({name:t,mapNodeValue:n,onHit:s=>{r.set(s,!0)},onSet:s=>{const o=r.tail();r.set(s,!0),o&&i.size()>e&&i.delete(o.key)}});return i}var sT=_5;function Hn(t,e,n){if(typeof t=="string"&&!t.includes('"')&&!t.includes("\\"))return`"${t}"`;switch(typeof t){case"undefined":return"";case"boolean":return t?"true":"false";case"number":case"symbol":return String(t);case"string":return JSON.stringify(t);case"function":if((e==null?void 0:e.allowFunctions)!==!0)throw ve("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${t.name})__`}if(t===null)return"null";if(typeof t!="object"){var r;return(r=JSON.stringify(t))!==null&&r!==void 0?r:""}if(Ke(t))return"__PROMISE__";if(Array.isArray(t))return`[${t.map((i,s)=>Hn(i,e,s.toString()))}]`;if(typeof t.toJSON=="function")return Hn(t.toJSON(n),e,n);if(t instanceof Map){const i={};for(const[s,o]of t)i[typeof s=="string"?s:Hn(s,e)]=o;return Hn(i,e,n)}return t instanceof Set?Hn(Array.from(t).sort((i,s)=>Hn(i,e).localeCompare(Hn(s,e))),e,n):Symbol!==void 0&&t[Symbol.iterator]!=null&&typeof t[Symbol.iterator]=="function"?Hn(Array.from(t),e,n):`{${Object.keys(t).filter(i=>t[i]!==void 0).sort().map(i=>`${Hn(i,e)}:${Hn(t[i],e,i)}`).join(",")}}`}function y5(t,e={allowFunctions:!1}){return Hn(t,e)}var nf=y5;const{TreeCache:v5}=$k,yc={equality:"reference",eviction:"keep-all",maxSize:1/0};function E5({equality:t=yc.equality,eviction:e=yc.eviction,maxSize:n=yc.maxSize}=yc,r){const i=w5(t);return T5(e,n,i,r)}function w5(t){switch(t){case"reference":return e=>e;case"value":return e=>nf(e)}throw ve(`Unrecognized equality policy ${t}`)}function T5(t,e,n,r){switch(t){case"keep-all":return new v5({name:r,mapNodeValue:n});case"lru":return sT({name:r,maxSize:Ze(e),mapNodeValue:n});case"most-recent":return sT({name:r,maxSize:1,mapNodeValue:n})}throw ve(`Unrecognized eviction policy ${t}`)}var S5=E5;function I5(t){return()=>null}var R5={startPerfBlock:I5};const{isLoadable:C5,loadableWithError:vc,loadableWithPromise:A5,loadableWithValue:Ep}=Tu,{WrappedValue:jk}=Uk,{getNodeLoadable:Ec,peekNodeLoadable:k5,setNodeValue:P5}=Fi,{saveDepsToStore:N5}=Iu,{DEFAULT_VALUE:b5,getConfigDeletionHandler:D5,getNode:x5,registerNode:oT}=yn,{isRecoilValue:L5}=Go,{markRecoilValueModified:aT}=vr,{retainedByOptionWithDefault:O5}=Fs,{recoilCallback:M5}=Fk,{startPerfBlock:V5}=R5;class zk{}const Fa=new zk,Ua=[],wc=new Map,F5=(()=>{let t=0;return()=>t++})();function Wk(t){let e=null;const{key:n,get:r,cachePolicy_UNSTABLE:i}=t,s=t.set!=null?t.set:void 0,o=new Set,a=S5(i??{equality:"reference",eviction:"keep-all"},n),u=O5(t.retainedBy_UNSTABLE),c=new Map;let d=0;function f(){return!Ue("recoil_memory_managament_2020")||d>0}function m(b){return b.getState().knownSelectors.add(n),d++,()=>{d--}}function v(){return D5(n)!==void 0&&!f()}function E(b,$,q,se,Z){Et($,se,Z),A(b,q)}function A(b,$){$e(b,$)&&R(b),S($,!0)}function P(b,$){$e(b,$)&&(Ze(C(b)).stateVersions.clear(),S($,!1))}function S(b,$){const q=wc.get(b);if(q!=null){for(const se of q)aT(se,Ze(e));$&&wc.delete(b)}}function _(b,$){let q=wc.get($);q==null&&wc.set($,q=new Set),q.add(b)}function T(b,$,q,se,Z,fe){return $.then(Ee=>{if(!f())throw R(b),Fa;const ie=Ep(Ee);return E(b,q,Z,ie,se),Ee}).catch(Ee=>{if(!f())throw R(b),Fa;if(Ke(Ee))return O(b,Ee,q,se,Z,fe);const ie=vc(Ee);throw E(b,q,Z,ie,se),Ee})}function O(b,$,q,se,Z,fe){return $.then(Ee=>{if(!f())throw R(b),Fa;fe.loadingDepKey!=null&&fe.loadingDepPromise===$?q.atomValues.set(fe.loadingDepKey,Ep(Ee)):b.getState().knownSelectors.forEach(Pe=>{q.atomValues.delete(Pe)});const ie=w(b,q);if(ie&&ie.state!=="loading"){if(($e(b,Z)||C(b)==null)&&A(b,Z),ie.state==="hasValue")return ie.contents;throw ie.contents}if(!$e(b,Z)){const Pe=I(b,q);if(Pe!=null)return Pe.loadingLoadable.contents}const[xe,Xe]=U(b,q,Z);if(xe.state!=="loading"&&E(b,q,Z,xe,Xe),xe.state==="hasError")throw xe.contents;return xe.contents}).catch(Ee=>{if(Ee instanceof zk)throw Fa;if(!f())throw R(b),Fa;const ie=vc(Ee);throw E(b,q,Z,ie,se),Ee})}function F(b,$,q,se){var Z,fe,Ee,ie;if($e(b,se)||$.version===((Z=b.getState())===null||Z===void 0||(fe=Z.currentTree)===null||fe===void 0?void 0:fe.version)||$.version===((Ee=b.getState())===null||Ee===void 0||(ie=Ee.nextTree)===null||ie===void 0?void 0:ie.version)){var xe,Xe,Pe;N5(n,q,b,(xe=(Xe=b.getState())===null||Xe===void 0||(Pe=Xe.nextTree)===null||Pe===void 0?void 0:Pe.version)!==null&&xe!==void 0?xe:b.getState().currentTree.version)}for(const Me of q)o.add(Me)}function U(b,$,q){const se=V5(n);let Z=!0,fe=!0;const Ee=()=>{se(),fe=!1};let ie,xe=!1,Xe;const Pe={loadingDepKey:null,loadingDepPromise:null},Me=new Map;function Zt({key:en}){const tn=Ec(b,$,en);switch(Me.set(en,tn),Z||(F(b,$,new Set(Me.keys()),q),P(b,q)),tn.state){case"hasValue":return tn.contents;case"hasError":throw tn.contents;case"loading":throw Pe.loadingDepKey=en,Pe.loadingDepPromise=tn.contents,tn.contents}throw ve("Invalid Loadable state")}const $n=en=>(...tn)=>{if(fe)throw ve("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");return e==null&&Ya(!1),M5(b,en,tn,{node:e})};try{ie=r({get:Zt,getCallback:$n}),ie=L5(ie)?Zt(ie):ie,C5(ie)&&(ie.state==="hasError"&&(xe=!0),ie=ie.contents),Ke(ie)?ie=T(b,ie,$,Me,q,Pe).finally(Ee):Ee(),ie=ie instanceof jk?ie.value:ie}catch(en){ie=en,Ke(ie)?ie=O(b,ie,$,Me,q,Pe).finally(Ee):(xe=!0,Ee())}return xe?Xe=vc(ie):Ke(ie)?Xe=A5(ie):Xe=Ep(ie),Z=!1,D(b,q,Me),F(b,$,new Set(Me.keys()),q),[Xe,Me]}function w(b,$){let q=$.atomValues.get(n);if(q!=null)return q;const se=new Set;try{q=a.get(fe=>(typeof fe!="string"&&Ya(!1),Ec(b,$,fe).contents),{onNodeVisit:fe=>{fe.type==="branch"&&fe.nodeKey!==n&&se.add(fe.nodeKey)}})}catch(fe){throw ve(`Problem with cache lookup for selector "${n}": ${fe.message}`)}if(q){var Z;$.atomValues.set(n,q),F(b,$,se,(Z=C(b))===null||Z===void 0?void 0:Z.executionID)}return q}function y(b,$){const q=w(b,$);if(q!=null)return R(b),q;const se=I(b,$);if(se!=null){var Z;return((Z=se.loadingLoadable)===null||Z===void 0?void 0:Z.state)==="loading"&&_(b,se.executionID),se.loadingLoadable}const fe=F5(),[Ee,ie]=U(b,$,fe);return Ee.state==="loading"?(k(b,fe,Ee,ie,$),_(b,fe)):(R(b),Et($,Ee,ie)),Ee}function I(b,$){const q=dk([c.has(b)?[Ze(c.get(b))]:[],zd(ky(c,([Z])=>Z!==b),([,Z])=>Z)]);function se(Z){for(const[fe,Ee]of Z)if(!Ec(b,$,fe).is(Ee))return!0;return!1}for(const Z of q){if(Z.stateVersions.get($.version)||!se(Z.depValuesDiscoveredSoFarDuringAsyncWork))return Z.stateVersions.set($.version,!0),Z;Z.stateVersions.set($.version,!1)}}function C(b){return c.get(b)}function k(b,$,q,se,Z){c.set(b,{depValuesDiscoveredSoFarDuringAsyncWork:se,executionID:$,loadingLoadable:q,stateVersions:new Map([[Z.version,!0]])})}function D(b,$,q){if($e(b,$)){const se=C(b);se!=null&&(se.depValuesDiscoveredSoFarDuringAsyncWork=q)}}function R(b){c.delete(b)}function $e(b,$){var q;return $===((q=C(b))===null||q===void 0?void 0:q.executionID)}function Jt(b){return Array.from(b.entries()).map(([$,q])=>[$,q.contents])}function Et(b,$,q){b.atomValues.set(n,$);try{a.set(Jt(q),$)}catch(se){throw ve(`Problem with setting cache for selector "${n}": ${se.message}`)}}function pt(b){if(Ua.includes(n)){const $=`Recoil selector has circular dependencies: ${Ua.slice(Ua.indexOf(n)).join(" → ")}`;return vc(ve($))}Ua.push(n);try{return b()}finally{Ua.pop()}}function K(b,$){const q=$.atomValues.get(n);return q??a.get(se=>{var Z;return typeof se!="string"&&Ya(!1),(Z=k5(b,$,se))===null||Z===void 0?void 0:Z.contents})}function ae(b,$){return pt(()=>y(b,$))}function J(b){b.atomValues.delete(n)}function re(b,$){e==null&&Ya(!1);for(const se of o){var q;const Z=x5(se);(q=Z.clearCache)===null||q===void 0||q.call(Z,b,$)}o.clear(),J($),a.clear(),aT(b,e)}return s!=null?e=oT({key:n,nodeType:"selector",peek:K,get:ae,set:($,q,se)=>{let Z=!1;const fe=new Map;function Ee({key:Pe}){if(Z)throw ve("Recoil: Async selector sets are not currently supported.");const Me=Ec($,q,Pe);if(Me.state==="hasValue")return Me.contents;if(Me.state==="loading"){const Zt=`Getting value of asynchronous atom or selector "${Pe}" in a pending state while setting selector "${n}" is not yet supported.`;throw ve(Zt)}else throw Me.contents}function ie(Pe,Me){if(Z)throw ve("Recoil: Async selector sets are not currently supported.");const Zt=typeof Me=="function"?Me(Ee(Pe)):Me;P5($,q,Pe.key,Zt).forEach((en,tn)=>fe.set(tn,en))}function xe(Pe){ie(Pe,b5)}const Xe=s({set:ie,get:Ee,reset:xe},se);if(Xe!==void 0)throw Ke(Xe)?ve("Recoil: Async selector sets are not currently supported."):ve("Recoil: selector set should be a void function.");return Z=!0,fe},init:m,invalidate:J,clearCache:re,shouldDeleteConfigOnRelease:v,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:u}):e=oT({key:n,nodeType:"selector",peek:K,get:ae,init:m,invalidate:J,clearCache:re,shouldDeleteConfigOnRelease:v,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:u})}Wk.value=t=>new jk(t);var Yo=Wk;const{isLoadable:U5,loadableWithError:wp,loadableWithPromise:Tp,loadableWithValue:Gs}=Tu,{WrappedValue:Hk}=Uk,{peekNodeInfo:$5}=Fi,{DEFAULT_VALUE:Xi,DefaultValue:Zr,getConfigDeletionHandler:qk,registerNode:B5,setConfigDeletionHandler:j5}=yn,{isRecoilValue:z5}=Go,{getRecoilValueAsLoadable:W5,markRecoilValueModified:H5,setRecoilValue:lT,setRecoilValueLoadable:q5}=vr,{retainedByOptionWithDefault:G5}=Fs,$a=t=>t instanceof Hk?t.value:t;function K5(t){const{key:e,persistence_UNSTABLE:n}=t,r=G5(t.retainedBy_UNSTABLE);let i=0;function s(_){return Tp(_.then(T=>(o=Gs(T),T)).catch(T=>{throw o=wp(T),T}))}let o=Ke(t.default)?s(t.default):U5(t.default)?t.default.state==="loading"?s(t.default.contents):t.default:Gs($a(t.default));o.contents;let a;const u=new Map;function c(_){return _}function d(_,T){const O=T.then(F=>{var U,w;return((w=((U=_.getState().nextTree)!==null&&U!==void 0?U:_.getState().currentTree).atomValues.get(e))===null||w===void 0?void 0:w.contents)===O&&lT(_,S,F),F}).catch(F=>{var U,w;throw((w=((U=_.getState().nextTree)!==null&&U!==void 0?U:_.getState().currentTree).atomValues.get(e))===null||w===void 0?void 0:w.contents)===O&&q5(_,S,wp(F)),F});return O}function f(_,T,O){var F;i++;const U=()=>{var C;i--,(C=u.get(_))===null||C===void 0||C.forEach(k=>k()),u.delete(_)};if(_.getState().knownAtoms.add(e),o.state==="loading"){const C=()=>{var k;((k=_.getState().nextTree)!==null&&k!==void 0?k:_.getState().currentTree).atomValues.has(e)||H5(_,S)};o.contents.finally(C)}const w=(F=t.effects)!==null&&F!==void 0?F:t.effects_UNSTABLE;if(w!=null){let C=function(J){if($e&&J.key===e){const re=R;return re instanceof Zr?m(_,T):Ke(re)?Tp(re.then(b=>b instanceof Zr?o.toPromise():b)):Gs(re)}return W5(_,J)},k=function(J){return C(J).toPromise()},D=function(J){var re;const b=$5(_,(re=_.getState().nextTree)!==null&&re!==void 0?re:_.getState().currentTree,J.key);return $e&&J.key===e&&!(R instanceof Zr)?{...b,isSet:!0,loadable:C(J)}:b},R=Xi,$e=!0,Jt=!1,Et=null;const pt=J=>re=>{if($e){const b=C(S),$=b.state==="hasValue"?b.contents:Xi;R=typeof re=="function"?re($):re,Ke(R)&&(R=R.then(q=>(Et={effect:J,value:q},q)))}else{if(Ke(re))throw ve("Setting atoms to async values is not implemented.");typeof re!="function"&&(Et={effect:J,value:$a(re)}),lT(_,S,typeof re=="function"?b=>{const $=$a(re(b));return Et={effect:J,value:$},$}:$a(re))}},K=J=>()=>pt(J)(Xi),ae=J=>re=>{var b;const{release:$}=_.subscribeToTransactions(q=>{var se;let{currentTree:Z,previousTree:fe}=q.getState();fe||(fe=Z);const Ee=(se=Z.atomValues.get(e))!==null&&se!==void 0?se:o;if(Ee.state==="hasValue"){var ie,xe,Xe,Pe;const Me=Ee.contents,Zt=(ie=fe.atomValues.get(e))!==null&&ie!==void 0?ie:o,$n=Zt.state==="hasValue"?Zt.contents:Xi;((xe=Et)===null||xe===void 0?void 0:xe.effect)!==J||((Xe=Et)===null||Xe===void 0?void 0:Xe.value)!==Me?re(Me,$n,!Z.atomValues.has(e)):((Pe=Et)===null||Pe===void 0?void 0:Pe.effect)===J&&(Et=null)}},e);u.set(_,[...(b=u.get(_))!==null&&b!==void 0?b:[],$])};for(const J of w)try{const re=J({node:S,storeID:_.storeID,parentStoreID_UNSTABLE:_.parentStoreID,trigger:O,setSelf:pt(J),resetSelf:K(J),onSet:ae(J),getPromise:k,getLoadable:C,getInfo_UNSTABLE:D});if(re!=null){var y;u.set(_,[...(y=u.get(_))!==null&&y!==void 0?y:[],re])}}catch(re){R=re,Jt=!0}if($e=!1,!(R instanceof Zr)){var I;const J=Jt?wp(R):Ke(R)?Tp(d(_,R)):Gs($a(R));J.contents,T.atomValues.set(e,J),(I=_.getState().nextTree)===null||I===void 0||I.atomValues.set(e,J)}}return U}function m(_,T){var O,F;return(O=(F=T.atomValues.get(e))!==null&&F!==void 0?F:a)!==null&&O!==void 0?O:o}function v(_,T){if(T.atomValues.has(e))return Ze(T.atomValues.get(e));if(T.nonvalidatedAtoms.has(e)){if(a!=null)return a;if(n==null)return o;const O=T.nonvalidatedAtoms.get(e),F=n.validator(O,Xi);return a=F instanceof Zr?o:Gs(F),a}else return o}function E(){a=void 0}function A(_,T,O){if(T.atomValues.has(e)){const F=Ze(T.atomValues.get(e));if(F.state==="hasValue"&&O===F.contents)return new Map}else if(!T.nonvalidatedAtoms.has(e)&&O instanceof Zr)return new Map;return a=void 0,new Map().set(e,Gs(O))}function P(){return qk(e)!==void 0&&i<=0}const S=B5({key:e,nodeType:"atom",peek:m,get:v,set:A,init:f,invalidate:E,shouldDeleteConfigOnRelease:P,dangerouslyAllowMutability:t.dangerouslyAllowMutability,persistence_UNSTABLE:t.persistence_UNSTABLE?{type:t.persistence_UNSTABLE.type,backButton:t.persistence_UNSTABLE.backButton}:void 0,shouldRestoreFromSnapshots:!0,retainedBy:r});return S}function Fy(t){const{...e}=t,n="default"in t?t.default:new Promise(()=>{});return z5(n)?Q5({...e,default:n}):K5({...e,default:n})}function Q5(t){const e=Fy({...t,default:Xi,persistence_UNSTABLE:t.persistence_UNSTABLE===void 0?void 0:{...t.persistence_UNSTABLE,validator:r=>r instanceof Zr?r:Ze(t.persistence_UNSTABLE).validator(r,Xi)},effects:t.effects,effects_UNSTABLE:t.effects_UNSTABLE}),n=Yo({key:`${t.key}__withFallback`,get:({get:r})=>{const i=r(e);return i instanceof Zr?t.default:i},set:({set:r},i)=>r(e,i),cachePolicy_UNSTABLE:{eviction:"most-recent"},dangerouslyAllowMutability:t.dangerouslyAllowMutability});return j5(n.key,qk(t.key)),n}Fy.value=t=>new Hk(t);var Gk=Fy;class Y5{constructor(e){var n;ye(this,"_map",void 0),ye(this,"_keyMapper",void 0),this._map=new Map,this._keyMapper=(n=e==null?void 0:e.mapKey)!==null&&n!==void 0?n:r=>r}size(){return this._map.size}has(e){return this._map.has(this._keyMapper(e))}get(e){return this._map.get(this._keyMapper(e))}set(e,n){this._map.set(this._keyMapper(e),n)}delete(e){this._map.delete(this._keyMapper(e))}clear(){this._map.clear()}}var X5={MapCache:Y5},J5=X5.MapCache,Z5=Object.freeze({__proto__:null,MapCache:J5});const{LRUCache:uT}=Bk,{MapCache:eW}=Z5,Tc={equality:"reference",eviction:"none",maxSize:1/0};function tW({equality:t=Tc.equality,eviction:e=Tc.eviction,maxSize:n=Tc.maxSize}=Tc){const r=nW(t);return rW(e,n,r)}function nW(t){switch(t){case"reference":return e=>e;case"value":return e=>nf(e)}throw ve(`Unrecognized equality policy ${t}`)}function rW(t,e,n){switch(t){case"keep-all":return new eW({mapKey:n});case"lru":return new uT({mapKey:n,maxSize:Ze(e)});case"most-recent":return new uT({mapKey:n,maxSize:1})}throw ve(`Unrecognized eviction policy ${t}`)}var Kk=tW;const{setConfigDeletionHandler:iW}=yn;function sW(t){var e,n;const r=Kk({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return i=>{var s,o;const a=r.get(i);if(a!=null)return a;const{cachePolicyForParams_UNSTABLE:u,...c}=t,d="default"in t?t.default:new Promise(()=>{}),f=Gk({...c,key:`${t.key}__${(s=nf(i))!==null&&s!==void 0?s:"void"}`,default:typeof d=="function"?d(i):d,retainedBy_UNSTABLE:typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(i):t.retainedBy_UNSTABLE,effects:typeof t.effects=="function"?t.effects(i):typeof t.effects_UNSTABLE=="function"?t.effects_UNSTABLE(i):(o=t.effects)!==null&&o!==void 0?o:t.effects_UNSTABLE});return r.set(i,f),iW(f.key,()=>{r.delete(i)}),f}}var oW=sW;const{setConfigDeletionHandler:aW}=yn;let lW=0;function uW(t){var e,n;const r=Kk({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return i=>{var s;let o;try{o=r.get(i)}catch(m){throw ve(`Problem with cache lookup for selector ${t.key}: ${m.message}`)}if(o!=null)return o;const a=`${t.key}__selectorFamily/${(s=nf(i,{allowFunctions:!0}))!==null&&s!==void 0?s:"void"}/${lW++}`,u=m=>t.get(i)(m),c=t.cachePolicy_UNSTABLE,d=typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(i):t.retainedBy_UNSTABLE;let f;if(t.set!=null){const m=t.set;f=Yo({key:a,get:u,set:(E,A)=>m(i)(E,A),cachePolicy_UNSTABLE:c,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:d})}else f=Yo({key:a,get:u,cachePolicy_UNSTABLE:c,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:d});return r.set(i,f),aW(f.key,()=>{r.delete(i)}),f}}var Ui=uW;const cW=Ui({key:"__constant",get:t=>()=>t,cachePolicyForParams_UNSTABLE:{equality:"reference"}});function hW(t){return cW(t)}var dW=hW;const fW=Ui({key:"__error",get:t=>()=>{throw ve(t)},cachePolicyForParams_UNSTABLE:{equality:"reference"}});function pW(t){return fW(t)}var mW=pW;function gW(t){return t}var _W=gW;const{loadableWithError:Qk,loadableWithPromise:Yk,loadableWithValue:Xk}=Tu;function rf(t,e){const n=Array(e.length).fill(void 0),r=Array(e.length).fill(void 0);for(const[i,s]of e.entries())try{n[i]=t(s)}catch(o){r[i]=o}return[n,r]}function yW(t){return t!=null&&!Ke(t)}function sf(t){return Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(e=>t[e])}function hg(t,e){return Array.isArray(t)?e:Object.getOwnPropertyNames(t).reduce((n,r,i)=>({...n,[r]:e[i]}),{})}function Ro(t,e,n){const r=n.map((i,s)=>i==null?Xk(e[s]):Ke(i)?Yk(i):Qk(i));return hg(t,r)}function vW(t,e){return e.map((n,r)=>n===void 0?t[r]:n)}const EW=Ui({key:"__waitForNone",get:t=>({get:e})=>{const n=sf(t),[r,i]=rf(e,n);return Ro(t,r,i)},dangerouslyAllowMutability:!0}),wW=Ui({key:"__waitForAny",get:t=>({get:e})=>{const n=sf(t),[r,i]=rf(e,n);return i.some(s=>!Ke(s))?Ro(t,r,i):new Promise(s=>{for(const[o,a]of i.entries())Ke(a)&&a.then(u=>{r[o]=u,i[o]=void 0,s(Ro(t,r,i))}).catch(u=>{i[o]=u,s(Ro(t,r,i))})})},dangerouslyAllowMutability:!0}),TW=Ui({key:"__waitForAll",get:t=>({get:e})=>{const n=sf(t),[r,i]=rf(e,n);if(i.every(o=>o==null))return hg(t,r);const s=i.find(yW);if(s!=null)throw s;return Promise.all(i).then(o=>hg(t,vW(r,o)))},dangerouslyAllowMutability:!0}),SW=Ui({key:"__waitForAllSettled",get:t=>({get:e})=>{const n=sf(t),[r,i]=rf(e,n);return i.every(s=>!Ke(s))?Ro(t,r,i):Promise.all(i.map((s,o)=>Ke(s)?s.then(a=>{r[o]=a,i[o]=void 0}).catch(a=>{r[o]=void 0,i[o]=a}):null)).then(()=>Ro(t,r,i))},dangerouslyAllowMutability:!0}),IW=Ui({key:"__noWait",get:t=>({get:e})=>{try{return Yo.value(Xk(e(t)))}catch(n){return Yo.value(Ke(n)?Yk(n):Qk(n))}},dangerouslyAllowMutability:!0});var RW={waitForNone:EW,waitForAny:wW,waitForAll:TW,waitForAllSettled:SW,noWait:IW};const{RecoilLoadable:CW}=Tu,{DefaultValue:AW}=yn,{RecoilRoot:kW,useRecoilStoreID:PW}=Wr,{isRecoilValue:NW}=Go,{retentionZone:bW}=Hd,{freshSnapshot:DW}=Xd,{useRecoilState:xW,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:LW,useRecoilStateLoadable:OW,useRecoilValue:MW,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:VW,useRecoilValueLoadable:FW,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:UW,useResetRecoilState:$W,useSetRecoilState:BW}=Xz,{useGotoRecoilSnapshot:jW,useRecoilSnapshot:zW,useRecoilTransactionObserver:WW}=Lk,{useRecoilCallback:HW}=Fk,{noWait:qW,waitForAll:GW,waitForAllSettled:KW,waitForAny:QW,waitForNone:YW}=RW;var Uy={DefaultValue:AW,isRecoilValue:NW,RecoilLoadable:CW,RecoilEnv:ca,RecoilRoot:kW,useRecoilStoreID:PW,useRecoilBridgeAcrossReactRoots_UNSTABLE:I6,atom:Gk,selector:Yo,atomFamily:oW,selectorFamily:Ui,constSelector:dW,errorSelector:mW,readOnlySelector:_W,noWait:qW,waitForNone:YW,waitForAny:QW,waitForAll:GW,waitForAllSettled:KW,useRecoilValue:MW,useRecoilValueLoadable:FW,useRecoilState:xW,useRecoilStateLoadable:OW,useSetRecoilState:BW,useResetRecoilState:$W,useGetRecoilValueInfo_UNSTABLE:y6,useRecoilRefresher_UNSTABLE:Z6,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:UW,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:VW,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:LW,useRecoilCallback:HW,useRecoilTransaction_UNSTABLE:i5,useGotoRecoilSnapshot:jW,useRecoilSnapshot:zW,useRecoilTransactionObserver_UNSTABLE:WW,snapshot_UNSTABLE:DW,useRetain:xy,retentionZone:bW},XW=Uy.RecoilRoot,Jk=Uy.atom,Ni=Uy.useRecoilState;const of=Jk({key:"userAtom",default:{}}),JW=async()=>{const[t,e]=Ni(of);W.useEffect(()=>{Rn.onAuthStateChanged(async n=>{if(n){const r=Bo(zo,"Users",n.uid),i=await xd(r);i.exists()&&e(i.data())}})},[])},af=Jk({key:"TasksAtom",default:[]}),ZW=t=>{const e=ru(),[n,r]=Ni(af);JW();const[i,s]=Ni(of),o=async()=>{await Rn.signOut(),r([]),s({}),e("/REACT_VITE_TODOAPP/home")},[a,u]=W.useState();return W.useEffect(()=>{Rn.onAuthStateChanged(c=>{u(c)})},[]),V.jsx(V.Fragment,{children:V.jsxs("div",{className:"header container m-auto md:p-5 lg:p-5 flex justify-between items-center py-2 px-2 md:px-10 md:py-5",children:[V.jsx(xo,{to:"/REACT_VITE_TODOAPP/",children:V.jsx("h2",{className:`${t.activeTextAnimation?"animateText":""} text-white`,style:{textShadow:t.activeTextAnimation?"":"1px 1px 3px white"},children:"TODO"})}),V.jsxs("div",{className:"flex items-center gap-2",children:[a?V.jsxs("button",{className:"BtnLogOut",onClick:o,children:[V.jsx("div",{className:"sign",children:V.jsx("svg",{viewBox:"0 0 512 512",children:V.jsx("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})})}),V.jsx("div",{className:"text",children:"Logout"})]}):V.jsx(xo,{to:"/REACT_VITE_TODOAPP/home/login",className:"btn",style:{fontSize:"14px",padding:"3px",height:"fit-content"},children:"Login"}),V.jsx("a",{href:"https://github.com/Elsayed-Rady-Elsayed",children:V.jsx("i",{className:"fa-brands fa-github text-gray-600 hover:text-white transition-all"})}),V.jsx("a",{href:"https://www.linkedin.com/in/elsayed-rady-elsayed-73b541288/",children:V.jsx("i",{className:"fa-brands fa-linkedin text-gray-600 hover:text-[#378fe9] transition-all"})})]})]})})},eH=t=>V.jsxs("div",{className:"onBoarding absolute left-1/2 top-1/2 p-5 text-center",style:{transform:"translate(-50%,-50%)"},children:[V.jsx("h1",{className:`text-white mb-4 py-2 ${t.activeTextAnimation?"animateText-lg":""} text-2xl md:text-4xl lg:text-4xl capitalize`,style:{},children:"start doing your tasks"}),V.jsx(o3,{title:"get started"})]}),ur=t=>{const e=W.useRef(0),[n,r]=W.useState(""),i=s=>{e.current.style.borderColor=s};return t.setClicked&&n==""?i("red"):t.setClicked&&n.length>0&&i("#596A95"),V.jsxs("div",{className:"flex flex-col text-white/80 capitalize font-light",children:[V.jsx("label",{className:"mb-2",htmlFor:t.name,children:t.placeholder}),V.jsx("input",{ref:e,style:{boxShadow:"inset 2px 5px 10px rgba(0, 0, 0, 0.3)"},id:t.name,placeholder:t.placeholder,className:"bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]",name:t.name,autoComplete:"off",type:t.type,value:n,onChange:s=>{s.target.value===""&&i("red"),t.name=="title"&&s.target.value.trim()===""&&i("red"),r(s.target.value),s.target.value.trim().length>0&&t.value(s)}})]})},tH=()=>V.jsx("div",{className:"container m-auto bg-[#121212]",children:V.jsx($D,{})}),nH=t=>{const e=W.useRef(0),[n,r]=W.useState(""),i=s=>{e.current.style.borderColor=s};return t.setClicked&&n==""?i("red"):t.setClicked&&n.length>0&&i("#596A95"),V.jsxs("div",{className:"flex flex-col text-white/80 capitalize font-light",children:[V.jsx("label",{className:"mb-2",htmlFor:t.name,children:t.placeholder}),V.jsx("textarea",{ref:e,value:n,rows:"5",name:t.name,autoComplete:"off",placeholder:t.placeholder,id:t.name,style:{resize:"none",boxShadow:"inset 2px 5px 10px rgba(0, 0, 0, 0.3)"},onChange:s=>{s.target.value.trim()===""?i("red"):i("#596A95"),r(s.target.value),t.value(s)},className:"bg-[#222630] w-full px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"})]})},rH=t=>V.jsxs(xo,{to:t.path,children:[V.jsx("i",{className:"fa-solid fa-arrow-left text-white"}),V.jsx("span",{className:"text-white ms-2",children:"back"})]}),Zk=async()=>{const[t,e]=Ni(af);W.useEffect(()=>{Rn.onAuthStateChanged(async n=>{if(n){const r=Bo(zo,"Users",n.uid),i=await xd(r);i.exists()&&e(s=>[...i.data().taskData])}})},[])},iH=()=>{Zk();const t=ru(),[e,n]=W.useState({title:"",date:"",start:"",end:"",description:"",done:!1,pending:!1}),[r,i]=W.useState(!1),[s,o]=Ni(af),[a,u]=W.useState(!1),c=E=>{const{name:A,value:P}=E.target;n(S=>({...S,[A]:P}))},[d,f]=W.useState();W.useEffect(()=>{Rn.onAuthStateChanged(E=>{f(E)})},[]);const m=E=>{E.preventDefault(),Rn.onAuthStateChanged(async A=>{A?(await _4(Bo(zo,"Users",A.uid),{taskData:[...s,e]}),t("/REACT_VITE_TODOAPP/home")):(v(),t("/REACT_VITE_TODOAPP/home"))})},v=()=>{e.title.length>0&&e.date.length>0&&e.start.length>0&&e.end.length>0&&e.description.length>0?(u(!0),o(E=>[...E,e])):u(!1)};return console.log(s),V.jsx("form",{onSubmit:m,className:"w-full absolute left-1/2 top-1/2 flex justify-center p-2 md:p-0",style:{transform:"translate(-50%,-50%)"},children:V.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[V.jsx(rH,{path:"/REACT_VITE_TODOAPP/home"}),V.jsx(ur,{setClicked:r,name:"title",placeholder:"Title",type:"text",value:c}),V.jsx(ur,{setClicked:r,value:c,name:"date",placeholder:"date",type:"date"}),V.jsxs("div",{className:"time grid grid-cols-2 gap-2 w-full",children:[V.jsx(ur,{setClicked:r,value:c,name:"start",placeholder:"start time",type:"time"}),V.jsx(ur,{setClicked:r,value:c,name:"end",placeholder:"end time",type:"time"})," "]}),V.jsx(nH,{setClicked:r,value:c,name:"description",placeholder:"description"}),V.jsx("button",{onClick:()=>{i(!0)},className:"btn w-full mt-2",children:"add task"})]})})},sH=t=>V.jsxs("div",{className:"overflow-hidden cursor-pointer container m-auto p-2 bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid hover:border-[#596A95] border-[#2B3040]",children:[V.jsx("h2",{className:"cursor-pointer capitalize text-2xl",children:t.title}),V.jsx("p",{className:"text-gray-500 text-[12px]",children:t.date}),V.jsxs("div",{className:"flex gap-5",children:[V.jsx("div",{className:"capitalize text-white text-[12px]",children:V.jsxs("p",{children:["start : ",t.start]})}),V.jsx("div",{className:"capitalize text-white text-[12px]",children:V.jsxs("p",{children:["end : ",t.end]})})]}),V.jsx("p",{className:"text-[10px] mt-2 text-gray-400 truncate h-7",children:t.desciption})]}),oH=t=>{const e=W.useRef();return V.jsxs("div",{className:"alert bg-yellow-500 text-white flex items-center p-1 text-sm w-full",id:"warningItem",ref:e,children:[V.jsx("i",{className:"fa-solid fa-circle-exclamation me-2"}),V.jsx("span",{className:"capitalize text-[8px] md:text-[12px]",children:"you have't logined you can't save your data"}),V.jsx("span",{onClick:()=>{e.current.style.display="none"},className:"cursor-pointer ms-1 inline-block text-[8px] md:text-[12px] underline font-bold",children:"i know"})]})},aH=()=>{Zk();const[t,e]=Ni(af),[n,r]=W.useState(),i=t.map((s,o)=>V.jsx(sH,{title:s.title,date:s.date,start:s.start,end:s.end,desciption:s.description},o));return W.useEffect(()=>{Rn.onAuthStateChanged(s=>{r(s)})},[]),V.jsxs(V.Fragment,{children:[n?"":V.jsx(oH,{}),V.jsxs("div",{className:" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 m-5 md:m-3 gap-3 mt-3",children:[V.jsx(xo,{to:"/REACT_VITE_TODOAPP/home/addTask",className:"fixed bottom-10 right-10 cursor-pointer bg-white h-10 w-10 flex items-center justify-center rounded-[50%] hover:rotate-90 transition-all duration-500",children:V.jsx("i",{className:"fa-solid fa-plus"})}),i.length>0&&n!=null?i:i.length==0&&(n==null||n!=null)?V.jsx("div",{className:"w-full text-gray-400 text-sm text-center capitalize absolute top-1/2 left-1/2",style:{transform:"translate(-50%,-50%)"},children:"no tasks yet"}):i.length>0&&n==null?i:V.jsxs("div",{className:"loader",children:[V.jsx("div",{className:"square",id:"sq1"}),V.jsx("div",{className:"square",id:"sq2"}),V.jsx("div",{className:"square",id:"sq3"}),V.jsx("div",{className:"square",id:"sq4"}),V.jsx("div",{className:"square",id:"sq5"}),V.jsx("div",{className:"square",id:"sq6"}),V.jsx("div",{className:"square",id:"sq7"}),V.jsx("div",{className:"square",id:"sq8"}),V.jsx("div",{className:"square",id:"sq9"})]})]})]})},eP=t=>{const e=W.useRef();return V.jsx("div",{className:`alert ${t.color} text-white flex items-center p-1 text-sm w-full`,id:"warningItem",ref:e,children:t.title})},lH=()=>{const t=ru(),[e,n]=W.useState(!1),[r,i]=W.useState(!1),[s,o]=Ni(of),[a,u]=W.useState({color:"",title:""}),[c,d]=W.useState({email:"",password:""}),f=()=>{c.email.length>0&&c.password.length>6?n(!0):n(!1)},m=async E=>{if(E.preventDefault(),e&&r)try{await QM(Rn,c.email,c.password);const A=Rn.currentUser;u({color:"bg-green-500",title:"logined succesfully"}),setTimeout(()=>{t("/REACT_VITE_TODOAPP/home")},500)}catch(A){u({color:"bg-red-500",title:"email or password is wrong"}),console.log(A)}};W.useEffect(()=>{Rn.onAuthStateChanged(async E=>{if(E){const A=Bo(zo,"Users",E.uid),P=await xd(A);P.exists()&&o(P.data())}})},[]);const v=E=>{const{name:A,value:P}=E.target;d(S=>({...S,[A]:P}))};return V.jsxs(V.Fragment,{children:[e&&r?V.jsx(eP,{title:a.title,color:a.color}):"",V.jsx("div",{className:"w-[90%] md:w-[50%] lg:w-[30%] h-fit absolute top-1/2 left-1/2 p-2 bg-[#222630] px-3 py-2 outline-none text-white rounded-lg border-2 border-solid border-[#2B3040]",style:{transform:"translate(-50%,-50%)"},children:V.jsxs("form",{onSubmit:m,action:"",children:[V.jsx("h2",{className:"font-semibold text-xl text-center mb-4",children:"Login"}),V.jsx(ur,{setClicked:r,name:"email",placeholder:"email",type:"email",value:v}),V.jsx(ur,{setClicked:r,name:"password",placeholder:"password",type:"password",value:v}),V.jsx("button",{onClick:()=>{i(!0),f()},className:"btn w-full mt-5",children:"Login"}),V.jsxs("p",{className:"text-center my-2 text-sm",children:["don't have an account?",V.jsxs(xo,{to:"/REACT_VITE_TODOAPP/home/register",className:"underline cursor-pointer font-bold",children:[" ","Register"]})]})]})})]})},uH=()=>{const t=ru(),[e,n]=W.useState(!1),[r,i]=W.useState(!1),[s,o]=Ni(of),[a,u]=W.useState({color:"",title:""}),[c,d]=W.useState({email:"",password:"",firstName:"",lastName:""}),f=()=>{c.email.length>0&&c.password.length>6&&c.firstName.length>0&&c.lastName.length>0?n(!0):n(!1)},m=async E=>{if(E.preventDefault(),e)try{await KM(Rn,c.email,c.password);const A=Rn.currentUser;A&&await g4(Bo(zo,"Users",A.uid),{email:A.email,firstName:c.firstName,lastName:c.lastName}),u({color:"bg-green-500",title:"account created successfully"}),setTimeout(()=>{t("/REACT_VITE_TODOAPP/home")},500)}catch(A){u({color:"bg-red-500",title:"couldnot create your account"}),console.log(A)}};W.useEffect(()=>{Rn.onAuthStateChanged(async E=>{if(E){const A=Bo(zo,"Users",E.uid),P=await xd(A);P.exists()&&o(P.data())}})},[]);const v=E=>{const{name:A,value:P}=E.target;d(S=>({...S,[A]:P}))};return V.jsxs(V.Fragment,{children:[e&&r?V.jsx(eP,{title:a.title,color:a.color}):"",V.jsx("div",{className:"w-[90%] md:w-[50%] lg:w-[30%] h-fit absolute top-1/2 left-1/2 p-2 bg-[#222630] px-3 py-2 outline-none text-white rounded-lg border-2 border-solid border-[#2B3040]",style:{transform:"translate(-50%,-50%)"},children:V.jsxs("form",{onSubmit:m,action:"",children:[V.jsx("h2",{className:"font-semibold text-xl text-center mb-4",children:"Register"}),V.jsx(ur,{setClicked:r,name:"email",placeholder:"email",type:"email",value:v}),V.jsx(ur,{setClicked:r,name:"password",placeholder:"password",type:"password",value:v}),V.jsx("p",{className:"text-[10px] mt-1 text-gray-400",children:"password must be more than 6 characters"}),V.jsx(ur,{setClicked:r,name:"firstName",placeholder:"first Name",type:"text",value:v}),V.jsx(ur,{setClicked:r,name:"lastName",placeholder:"last name",type:"text",value:v}),V.jsx("button",{onClick:()=>{i(!0),f()},className:"btn w-full mt-5",children:"Register"})]})})]})};function cH(){const[t,e]=W.useState(V.jsxs("div",{className:"loader",children:[V.jsx("div",{className:"square",id:"sq1"}),V.jsx("div",{className:"square",id:"sq2"}),V.jsx("div",{className:"square",id:"sq3"}),V.jsx("div",{className:"square",id:"sq4"}),V.jsx("div",{className:"square",id:"sq5"}),V.jsx("div",{className:"square",id:"sq6"}),V.jsx("div",{className:"square",id:"sq7"}),V.jsx("div",{className:"square",id:"sq8"}),V.jsx("div",{className:"square",id:"sq9"})]}));return setTimeout(()=>{e(V.jsxs(V.Fragment,{children:[V.jsx(ZW,{activeTextAnimation:!0}),V.jsxs(jD,{children:[V.jsx(Ki,{path:"/REACT_VITE_TODOAPP/",element:V.jsx(eH,{activeTextAnimation:!0})}),V.jsxs(Ki,{path:"/REACT_VITE_TODOAPP/home",element:V.jsx(tH,{}),children:[V.jsx(Ki,{path:"/REACT_VITE_TODOAPP/home/login",element:V.jsx(lH,{})}),V.jsx(Ki,{path:"/REACT_VITE_TODOAPP/home/register",element:V.jsx(uH,{})}),V.jsx(Ki,{path:"/REACT_VITE_TODOAPP/home",element:V.jsx(aH,{})}),V.jsx(Ki,{path:"/REACT_VITE_TODOAPP/home/addTask",element:V.jsx(iH,{})})]})]})]}))},2e3),V.jsx("div",{className:"bg-[#121212] h-svh",children:t})}Sp.createRoot(document.getElementById("root")).render(V.jsx(je.StrictMode,{children:V.jsx(QD,{children:V.jsx(XW,{children:V.jsx(cH,{})})})}));
