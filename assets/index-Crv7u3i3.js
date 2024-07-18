function ek(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function iE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sE={exports:{}},Th={},oE={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Al=Symbol.for("react.element"),tk=Symbol.for("react.portal"),nk=Symbol.for("react.fragment"),rk=Symbol.for("react.strict_mode"),ik=Symbol.for("react.profiler"),sk=Symbol.for("react.provider"),ok=Symbol.for("react.context"),ak=Symbol.for("react.forward_ref"),lk=Symbol.for("react.suspense"),uk=Symbol.for("react.memo"),ck=Symbol.for("react.lazy"),Cy=Symbol.iterator;function hk(t){return t===null||typeof t!="object"?null:(t=Cy&&t[Cy]||t["@@iterator"],typeof t=="function"?t:null)}var aE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lE=Object.assign,uE={};function Oo(t,e,n){this.props=t,this.context=e,this.refs=uE,this.updater=n||aE}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cE(){}cE.prototype=Oo.prototype;function km(t,e,n){this.props=t,this.context=e,this.refs=uE,this.updater=n||aE}var Nm=km.prototype=new cE;Nm.constructor=km;lE(Nm,Oo.prototype);Nm.isPureReactComponent=!0;var Ay=Array.isArray,hE=Object.prototype.hasOwnProperty,Pm={current:null},dE={key:!0,ref:!0,__self:!0,__source:!0};function fE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hE.call(e,r)&&!dE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Al,type:t,key:s,ref:o,props:i,_owner:Pm.current}}function dk(t,e){return{$$typeof:Al,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Al}function fk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ky=/\/+/g;function jd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fk(""+t.key):e.toString(36)}function Ju(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Al:case tk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+jd(o,0):r,Ay(i)?(n="",t!=null&&(n=t.replace(ky,"$&/")+"/"),Ju(i,e,n,"",function(c){return c})):i!=null&&(bm(i)&&(i=dk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ky,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ay(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+jd(s,a);o+=Ju(s,e,n,u,i)}else if(u=hk(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+jd(s,a++),o+=Ju(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Eu(t,e,n){if(t==null)return t;var r=[],i=0;return Ju(t,r,"","",function(s){return e.call(n,s,i++)}),r}function pk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},Zu={transition:null},mk={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:Zu,ReactCurrentOwner:Pm};function pE(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:Eu,forEach:function(t,e,n){Eu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Eu(t,function(){e++}),e},toArray:function(t){return Eu(t,function(e){return e})||[]},only:function(t){if(!bm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ye.Component=Oo;ye.Fragment=nk;ye.Profiler=ik;ye.PureComponent=km;ye.StrictMode=rk;ye.Suspense=lk;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mk;ye.act=pE;ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=lE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)hE.call(e,u)&&!dE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Al,type:t.type,key:i,ref:s,props:r,_owner:o}};ye.createContext=function(t){return t={$$typeof:ok,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sk,_context:t},t.Consumer=t};ye.createElement=fE;ye.createFactory=function(t){var e=fE.bind(null,t);return e.type=t,e};ye.createRef=function(){return{current:null}};ye.forwardRef=function(t){return{$$typeof:ak,render:t}};ye.isValidElement=bm;ye.lazy=function(t){return{$$typeof:ck,_payload:{_status:-1,_result:t},_init:pk}};ye.memo=function(t,e){return{$$typeof:uk,type:t,compare:e===void 0?null:e}};ye.startTransition=function(t){var e=Zu.transition;Zu.transition={};try{t()}finally{Zu.transition=e}};ye.unstable_act=pE;ye.useCallback=function(t,e){return en.current.useCallback(t,e)};ye.useContext=function(t){return en.current.useContext(t)};ye.useDebugValue=function(){};ye.useDeferredValue=function(t){return en.current.useDeferredValue(t)};ye.useEffect=function(t,e){return en.current.useEffect(t,e)};ye.useId=function(){return en.current.useId()};ye.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};ye.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};ye.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};ye.useMemo=function(t,e){return en.current.useMemo(t,e)};ye.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};ye.useRef=function(t){return en.current.useRef(t)};ye.useState=function(t){return en.current.useState(t)};ye.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};ye.useTransition=function(){return en.current.useTransition()};ye.version="18.3.1";oE.exports=ye;var G=oE.exports;const Ue=iE(G),gk=ek({__proto__:null,default:Ue},[G]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _k=G,yk=Symbol.for("react.element"),vk=Symbol.for("react.fragment"),wk=Object.prototype.hasOwnProperty,Ek=_k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sk={key:!0,ref:!0,__self:!0,__source:!0};function mE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)wk.call(e,r)&&!Sk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yk,type:t,key:s,ref:o,props:i,_owner:Ek.current}}Th.Fragment=vk;Th.jsx=mE;Th.jsxs=mE;sE.exports=Th;var B=sE.exports,Hf={},gE={exports:{}},wn={},_E={exports:{}},yE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,ae){var J=q.length;q.push(ae);e:for(;0<J;){var re=J-1>>>1,P=q[re];if(0<i(P,ae))q[re]=ae,q[J]=P,J=re;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ae=q[0],J=q.pop();if(J!==ae){q[0]=J;e:for(var re=0,P=q.length,U=P>>>1;re<U;){var H=2*(re+1)-1,se=q[H],Z=H+1,ce=q[Z];if(0>i(se,J))Z<P&&0>i(ce,se)?(q[re]=ce,q[Z]=J,re=Z):(q[re]=se,q[H]=J,re=H);else if(Z<P&&0>i(ce,J))q[re]=ce,q[Z]=J,re=Z;else break e}}return ae}function i(q,ae){var J=q.sortIndex-ae.sortIndex;return J!==0?J:q.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,w=!1,v=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(q){for(var ae=n(c);ae!==null;){if(ae.callback===null)r(c);else if(ae.startTime<=q)r(c),ae.sortIndex=ae.expirationTime,e(u,ae);else break;ae=n(c)}}function L(q){if(A=!1,S(q),!v)if(n(u)!==null)v=!0,pt(V);else{var ae=n(c);ae!==null&&ct(L,ae.startTime-q)}}function V(q,ae){v=!1,A&&(A=!1,C(_),_=-1),w=!0;var J=m;try{for(S(ae),f=n(u);f!==null&&(!(f.expirationTime>ae)||q&&!k());){var re=f.callback;if(typeof re=="function"){f.callback=null,m=f.priorityLevel;var P=re(f.expirationTime<=ae);ae=t.unstable_now(),typeof P=="function"?f.callback=P:f===n(u)&&r(u),S(ae)}else r(u);f=n(u)}if(f!==null)var U=!0;else{var H=n(c);H!==null&&ct(L,H.startTime-ae),U=!1}return U}finally{f=null,m=J,w=!1}}var F=!1,E=null,_=-1,T=5,R=-1;function k(){return!(t.unstable_now()-R<T)}function b(){if(E!==null){var q=t.unstable_now();R=q;var ae=!0;try{ae=E(!0,q)}finally{ae?I():(F=!1,E=null)}}else F=!1}var I;if(typeof y=="function")I=function(){y(b)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,qt=Me.port2;Me.port1.onmessage=b,I=function(){qt.postMessage(null)}}else I=function(){x(b,0)};function pt(q){E=q,F||(F=!0,I())}function ct(q,ae){_=x(function(){q(t.unstable_now())},ae)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){v||w||(v=!0,pt(V))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var ae=3;break;default:ae=m}var J=m;m=ae;try{return q()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,ae){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var J=m;m=q;try{return ae()}finally{m=J}},t.unstable_scheduleCallback=function(q,ae,J){var re=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?re+J:re):J=re,q){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=J+P,q={id:d++,callback:ae,priorityLevel:q,startTime:J,expirationTime:P,sortIndex:-1},J>re?(q.sortIndex=J,e(c,q),n(u)===null&&q===n(c)&&(A?(C(_),_=-1):A=!0,ct(L,J-re))):(q.sortIndex=P,e(u,q),v||w||(v=!0,pt(V))),q},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(q){var ae=m;return function(){var J=m;m=ae;try{return q.apply(this,arguments)}finally{m=J}}}})(yE);_E.exports=yE;var Tk=_E.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ik=G,vn=Tk;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vE=new Set,Ya={};function ms(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(Ya[t]=e,t=0;t<e.length;t++)vE.add(e[t])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gf=Object.prototype.hasOwnProperty,Rk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ny={},Py={};function Ck(t){return Gf.call(Py,t)?!0:Gf.call(Ny,t)?!1:Rk.test(t)?Py[t]=!0:(Ny[t]=!0,!1)}function Ak(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kk(t,e,n,r){if(e===null||typeof e>"u"||Ak(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Om=/[\-:]([a-z])/g;function xm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Om,xm);xt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Om,xm);xt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Om,xm);xt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dm(t,e,n,r){var i=xt.hasOwnProperty(e)?xt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kk(e,n,i,r)&&(n=null),r||i===null?Ck(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Lr=Ik.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Su=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),Lm=Symbol.for("react.strict_mode"),Kf=Symbol.for("react.profiler"),wE=Symbol.for("react.provider"),EE=Symbol.for("react.context"),Mm=Symbol.for("react.forward_ref"),qf=Symbol.for("react.suspense"),Qf=Symbol.for("react.suspense_list"),Vm=Symbol.for("react.memo"),Wr=Symbol.for("react.lazy"),SE=Symbol.for("react.offscreen"),by=Symbol.iterator;function ra(t){return t===null||typeof t!="object"?null:(t=by&&t[by]||t["@@iterator"],typeof t=="function"?t:null)}var et=Object.assign,zd;function Sa(t){if(zd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zd=e&&e[1]||""}return`
`+zd+t}var Wd=!1;function Hd(t,e){if(!t||Wd)return"";Wd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Wd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Sa(t):""}function Nk(t){switch(t.tag){case 5:return Sa(t.type);case 16:return Sa("Lazy");case 13:return Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 2:case 15:return t=Hd(t.type,!1),t;case 11:return t=Hd(t.type.render,!1),t;case 1:return t=Hd(t.type,!0),t;default:return""}}function Yf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case Ms:return"Portal";case Kf:return"Profiler";case Lm:return"StrictMode";case qf:return"Suspense";case Qf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case EE:return(t.displayName||"Context")+".Consumer";case wE:return(t._context.displayName||"Context")+".Provider";case Mm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vm:return e=t.displayName||null,e!==null?e:Yf(t.type)||"Memo";case Wr:e=t._payload,t=t._init;try{return Yf(t(e))}catch{}}return null}function Pk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yf(e);case 8:return e===Lm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function TE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bk(t){var e=TE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tu(t){t._valueTracker||(t._valueTracker=bk(t))}function IE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=TE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xf(t,e){var n=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Oy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function RE(t,e){e=e.checked,e!=null&&Dm(t,"checked",e,!1)}function Jf(t,e){RE(t,e);var n=gi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zf(t,e.type,gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zf(t,e,n){(e!=="number"||yc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ta=Array.isArray;function Xs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ep(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Ta(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gi(n)}}function CE(t,e){var n=gi(e.value),r=gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ly(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function AE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?AE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Iu,kE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Iu=Iu||document.createElement("div"),Iu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Iu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ok=["Webkit","ms","Moz","O"];Object.keys(ka).forEach(function(t){Ok.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ka[e]=ka[t]})});function NE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ka.hasOwnProperty(t)&&ka[t]?(""+e).trim():e+"px"}function PE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=NE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xk=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function np(t,e){if(e){if(xk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function rp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ip=null;function Fm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sp=null,Js=null,Zs=null;function My(t){if(t=Pl(t)){if(typeof sp!="function")throw Error(z(280));var e=t.stateNode;e&&(e=kh(e),sp(t.stateNode,t.type,e))}}function bE(t){Js?Zs?Zs.push(t):Zs=[t]:Js=t}function OE(){if(Js){var t=Js,e=Zs;if(Zs=Js=null,My(t),e)for(t=0;t<e.length;t++)My(e[t])}}function xE(t,e){return t(e)}function DE(){}var Gd=!1;function LE(t,e,n){if(Gd)return t(e,n);Gd=!0;try{return xE(t,e,n)}finally{Gd=!1,(Js!==null||Zs!==null)&&(DE(),OE())}}function Ja(t,e){var n=t.stateNode;if(n===null)return null;var r=kh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var op=!1;if(kr)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){op=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{op=!1}function Dk(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Na=!1,vc=null,wc=!1,ap=null,Lk={onError:function(t){Na=!0,vc=t}};function Mk(t,e,n,r,i,s,o,a,u){Na=!1,vc=null,Dk.apply(Lk,arguments)}function Vk(t,e,n,r,i,s,o,a,u){if(Mk.apply(this,arguments),Na){if(Na){var c=vc;Na=!1,vc=null}else throw Error(z(198));wc||(wc=!0,ap=c)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ME(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vy(t){if(gs(t)!==t)throw Error(z(188))}function Fk(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vy(i),t;if(s===r)return Vy(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function VE(t){return t=Fk(t),t!==null?FE(t):null}function FE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=FE(t);if(e!==null)return e;t=t.sibling}return null}var UE=vn.unstable_scheduleCallback,Fy=vn.unstable_cancelCallback,Uk=vn.unstable_shouldYield,$k=vn.unstable_requestPaint,st=vn.unstable_now,Bk=vn.unstable_getCurrentPriorityLevel,Um=vn.unstable_ImmediatePriority,$E=vn.unstable_UserBlockingPriority,Ec=vn.unstable_NormalPriority,jk=vn.unstable_LowPriority,BE=vn.unstable_IdlePriority,Ih=null,sr=null;function zk(t){if(sr&&typeof sr.onCommitFiberRoot=="function")try{sr.onCommitFiberRoot(Ih,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:Gk,Wk=Math.log,Hk=Math.LN2;function Gk(t){return t>>>=0,t===0?32:31-(Wk(t)/Hk|0)|0}var Ru=64,Cu=4194304;function Ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ia(a):(s&=o,s!==0&&(r=Ia(s)))}else o=n&~i,o!==0?r=Ia(o):s!==0&&(r=Ia(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kn(e),i=1<<n,r|=t[n],e&=~i;return r}function Kk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=Kk(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function lp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jE(){var t=Ru;return Ru<<=1,!(Ru&4194240)&&(Ru=64),t}function Kd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function kl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function Qk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $m(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Pe=0;function zE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var WE,Bm,HE,GE,KE,up=!1,Au=[],ni=null,ri=null,ii=null,Za=new Map,el=new Map,Kr=[],Yk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uy(t,e){switch(t){case"focusin":case"focusout":ni=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":ii=null;break;case"pointerover":case"pointerout":Za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(e.pointerId)}}function sa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Pl(e),e!==null&&Bm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Xk(t,e,n,r,i){switch(e){case"focusin":return ni=sa(ni,t,e,n,r,i),!0;case"dragenter":return ri=sa(ri,t,e,n,r,i),!0;case"mouseover":return ii=sa(ii,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Za.set(s,sa(Za.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,el.set(s,sa(el.get(s)||null,t,e,n,r,i)),!0}return!1}function qE(t){var e=$i(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=ME(n),e!==null){t.blockedOn=e,KE(t.priority,function(){HE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ip=r,n.target.dispatchEvent(r),ip=null}else return e=Pl(n),e!==null&&Bm(e),t.blockedOn=n,!1;e.shift()}return!0}function $y(t,e,n){ec(t)&&n.delete(e)}function Jk(){up=!1,ni!==null&&ec(ni)&&(ni=null),ri!==null&&ec(ri)&&(ri=null),ii!==null&&ec(ii)&&(ii=null),Za.forEach($y),el.forEach($y)}function oa(t,e){t.blockedOn===e&&(t.blockedOn=null,up||(up=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,Jk)))}function tl(t){function e(i){return oa(i,t)}if(0<Au.length){oa(Au[0],t);for(var n=1;n<Au.length;n++){var r=Au[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ni!==null&&oa(ni,t),ri!==null&&oa(ri,t),ii!==null&&oa(ii,t),Za.forEach(e),el.forEach(e),n=0;n<Kr.length;n++)r=Kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kr.length&&(n=Kr[0],n.blockedOn===null);)qE(n),n.blockedOn===null&&Kr.shift()}var eo=Lr.ReactCurrentBatchConfig,Tc=!0;function Zk(t,e,n,r){var i=Pe,s=eo.transition;eo.transition=null;try{Pe=1,jm(t,e,n,r)}finally{Pe=i,eo.transition=s}}function eN(t,e,n,r){var i=Pe,s=eo.transition;eo.transition=null;try{Pe=4,jm(t,e,n,r)}finally{Pe=i,eo.transition=s}}function jm(t,e,n,r){if(Tc){var i=cp(t,e,n,r);if(i===null)rf(t,e,r,Ic,n),Uy(t,r);else if(Xk(i,t,e,n,r))r.stopPropagation();else if(Uy(t,r),e&4&&-1<Yk.indexOf(t)){for(;i!==null;){var s=Pl(i);if(s!==null&&WE(s),s=cp(t,e,n,r),s===null&&rf(t,e,r,Ic,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rf(t,e,r,null,n)}}var Ic=null;function cp(t,e,n,r){if(Ic=null,t=Fm(r),t=$i(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ME(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ic=t,null}function QE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bk()){case Um:return 1;case $E:return 4;case Ec:case jk:return 16;case BE:return 536870912;default:return 16}default:return 16}}var Zr=null,zm=null,tc=null;function YE(){if(tc)return tc;var t,e=zm,n=e.length,r,i="value"in Zr?Zr.value:Zr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return tc=i.slice(t,1<r?1-r:void 0)}function nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ku(){return!0}function By(){return!1}function En(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ku:By,this.isPropagationStopped=By,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ku)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ku)},persist:function(){},isPersistent:ku}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wm=En(xo),Nl=et({},xo,{view:0,detail:0}),tN=En(Nl),qd,Qd,aa,Rh=et({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(qd=t.screenX-aa.screenX,Qd=t.screenY-aa.screenY):Qd=qd=0,aa=t),qd)},movementY:function(t){return"movementY"in t?t.movementY:Qd}}),jy=En(Rh),nN=et({},Rh,{dataTransfer:0}),rN=En(nN),iN=et({},Nl,{relatedTarget:0}),Yd=En(iN),sN=et({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),oN=En(sN),aN=et({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lN=En(aN),uN=et({},xo,{data:0}),zy=En(uN),cN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dN[t])?!!e[t]:!1}function Hm(){return fN}var pN=et({},Nl,{key:function(t){if(t.key){var e=cN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hm,charCode:function(t){return t.type==="keypress"?nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mN=En(pN),gN=et({},Rh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wy=En(gN),_N=et({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hm}),yN=En(_N),vN=et({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),wN=En(vN),EN=et({},Rh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SN=En(EN),TN=[9,13,27,32],Gm=kr&&"CompositionEvent"in window,Pa=null;kr&&"documentMode"in document&&(Pa=document.documentMode);var IN=kr&&"TextEvent"in window&&!Pa,XE=kr&&(!Gm||Pa&&8<Pa&&11>=Pa),Hy=" ",Gy=!1;function JE(t,e){switch(t){case"keyup":return TN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ZE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fs=!1;function RN(t,e){switch(t){case"compositionend":return ZE(e);case"keypress":return e.which!==32?null:(Gy=!0,Hy);case"textInput":return t=e.data,t===Hy&&Gy?null:t;default:return null}}function CN(t,e){if(Fs)return t==="compositionend"||!Gm&&JE(t,e)?(t=YE(),tc=zm=Zr=null,Fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return XE&&e.locale!=="ko"?null:e.data;default:return null}}var AN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ky(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AN[t.type]:e==="textarea"}function eS(t,e,n,r){bE(r),e=Rc(e,"onChange"),0<e.length&&(n=new Wm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ba=null,nl=null;function kN(t){hS(t,0)}function Ch(t){var e=Bs(t);if(IE(e))return t}function NN(t,e){if(t==="change")return e}var tS=!1;if(kr){var Xd;if(kr){var Jd="oninput"in document;if(!Jd){var qy=document.createElement("div");qy.setAttribute("oninput","return;"),Jd=typeof qy.oninput=="function"}Xd=Jd}else Xd=!1;tS=Xd&&(!document.documentMode||9<document.documentMode)}function Qy(){ba&&(ba.detachEvent("onpropertychange",nS),nl=ba=null)}function nS(t){if(t.propertyName==="value"&&Ch(nl)){var e=[];eS(e,nl,t,Fm(t)),LE(kN,e)}}function PN(t,e,n){t==="focusin"?(Qy(),ba=e,nl=n,ba.attachEvent("onpropertychange",nS)):t==="focusout"&&Qy()}function bN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ch(nl)}function ON(t,e){if(t==="click")return Ch(e)}function xN(t,e){if(t==="input"||t==="change")return Ch(e)}function DN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:DN;function rl(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gf.call(e,i)||!Yn(t[i],e[i]))return!1}return!0}function Yy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xy(t,e){var n=Yy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yy(n)}}function rS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iS(){for(var t=window,e=yc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yc(t.document)}return e}function Km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LN(t){var e=iS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rS(n.ownerDocument.documentElement,n)){if(r!==null&&Km(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Xy(n,s);var o=Xy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var MN=kr&&"documentMode"in document&&11>=document.documentMode,Us=null,hp=null,Oa=null,dp=!1;function Jy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dp||Us==null||Us!==yc(r)||(r=Us,"selectionStart"in r&&Km(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oa&&rl(Oa,r)||(Oa=r,r=Rc(hp,"onSelect"),0<r.length&&(e=new Wm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Us)))}function Nu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:Nu("Animation","AnimationEnd"),animationiteration:Nu("Animation","AnimationIteration"),animationstart:Nu("Animation","AnimationStart"),transitionend:Nu("Transition","TransitionEnd")},Zd={},sS={};kr&&(sS=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Ah(t){if(Zd[t])return Zd[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sS)return Zd[t]=e[n];return t}var oS=Ah("animationend"),aS=Ah("animationiteration"),lS=Ah("animationstart"),uS=Ah("transitionend"),cS=new Map,Zy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Si(t,e){cS.set(t,e),ms(e,[t])}for(var ef=0;ef<Zy.length;ef++){var tf=Zy[ef],VN=tf.toLowerCase(),FN=tf[0].toUpperCase()+tf.slice(1);Si(VN,"on"+FN)}Si(oS,"onAnimationEnd");Si(aS,"onAnimationIteration");Si(lS,"onAnimationStart");Si("dblclick","onDoubleClick");Si("focusin","onFocus");Si("focusout","onBlur");Si(uS,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UN=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function ev(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Vk(r,e,void 0,t),t.currentTarget=null}function hS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ev(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ev(i,a,c),s=u}}}if(wc)throw t=ap,wc=!1,ap=null,t}function Be(t,e){var n=e[_p];n===void 0&&(n=e[_p]=new Set);var r=t+"__bubble";n.has(r)||(dS(e,t,2,!1),n.add(r))}function nf(t,e,n){var r=0;e&&(r|=4),dS(n,t,r,e)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function il(t){if(!t[Pu]){t[Pu]=!0,vE.forEach(function(n){n!=="selectionchange"&&(UN.has(n)||nf(n,!1,t),nf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pu]||(e[Pu]=!0,nf("selectionchange",!1,e))}}function dS(t,e,n,r){switch(QE(e)){case 1:var i=Zk;break;case 4:i=eN;break;default:i=jm}n=i.bind(null,e,n,t),i=void 0,!op||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$i(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}LE(function(){var c=s,d=Fm(n),f=[];e:{var m=cS.get(t);if(m!==void 0){var w=Wm,v=t;switch(t){case"keypress":if(nc(n)===0)break e;case"keydown":case"keyup":w=mN;break;case"focusin":v="focus",w=Yd;break;case"focusout":v="blur",w=Yd;break;case"beforeblur":case"afterblur":w=Yd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=jy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=rN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=yN;break;case oS:case aS:case lS:w=oN;break;case uS:w=wN;break;case"scroll":w=tN;break;case"wheel":w=SN;break;case"copy":case"cut":case"paste":w=lN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Wy}var A=(e&4)!==0,x=!A&&t==="scroll",C=A?m!==null?m+"Capture":null:m;A=[];for(var y=c,S;y!==null;){S=y;var L=S.stateNode;if(S.tag===5&&L!==null&&(S=L,C!==null&&(L=Ja(y,C),L!=null&&A.push(sl(y,L,S)))),x)break;y=y.return}0<A.length&&(m=new w(m,v,null,n,d),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==ip&&(v=n.relatedTarget||n.fromElement)&&($i(v)||v[Nr]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?$i(v):null,v!==null&&(x=gs(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(A=jy,L="onMouseLeave",C="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(A=Wy,L="onPointerLeave",C="onPointerEnter",y="pointer"),x=w==null?m:Bs(w),S=v==null?m:Bs(v),m=new A(L,y+"leave",w,n,d),m.target=x,m.relatedTarget=S,L=null,$i(d)===c&&(A=new A(C,y+"enter",v,n,d),A.target=S,A.relatedTarget=x,L=A),x=L,w&&v)t:{for(A=w,C=v,y=0,S=A;S;S=Os(S))y++;for(S=0,L=C;L;L=Os(L))S++;for(;0<y-S;)A=Os(A),y--;for(;0<S-y;)C=Os(C),S--;for(;y--;){if(A===C||C!==null&&A===C.alternate)break t;A=Os(A),C=Os(C)}A=null}else A=null;w!==null&&tv(f,m,w,A,!1),v!==null&&x!==null&&tv(f,x,v,A,!0)}}e:{if(m=c?Bs(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var V=NN;else if(Ky(m))if(tS)V=xN;else{V=bN;var F=PN}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=ON);if(V&&(V=V(t,c))){eS(f,V,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Zf(m,"number",m.value)}switch(F=c?Bs(c):window,t){case"focusin":(Ky(F)||F.contentEditable==="true")&&(Us=F,hp=c,Oa=null);break;case"focusout":Oa=hp=Us=null;break;case"mousedown":dp=!0;break;case"contextmenu":case"mouseup":case"dragend":dp=!1,Jy(f,n,d);break;case"selectionchange":if(MN)break;case"keydown":case"keyup":Jy(f,n,d)}var E;if(Gm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Fs?JE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(XE&&n.locale!=="ko"&&(Fs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Fs&&(E=YE()):(Zr=d,zm="value"in Zr?Zr.value:Zr.textContent,Fs=!0)),F=Rc(c,_),0<F.length&&(_=new zy(_,t,null,n,d),f.push({event:_,listeners:F}),E?_.data=E:(E=ZE(n),E!==null&&(_.data=E)))),(E=IN?RN(t,n):CN(t,n))&&(c=Rc(c,"onBeforeInput"),0<c.length&&(d=new zy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}hS(f,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ja(t,n),s!=null&&r.unshift(sl(t,s,i)),s=Ja(t,e),s!=null&&r.push(sl(t,s,i))),t=t.return}return r}function Os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ja(n,s),u!=null&&o.unshift(sl(n,u,a))):i||(u=Ja(n,s),u!=null&&o.push(sl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $N=/\r\n?/g,BN=/\u0000|\uFFFD/g;function nv(t){return(typeof t=="string"?t:""+t).replace($N,`
`).replace(BN,"")}function bu(t,e,n){if(e=nv(e),nv(t)!==e&&n)throw Error(z(425))}function Cc(){}var fp=null,pp=null;function mp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gp=typeof setTimeout=="function"?setTimeout:void 0,jN=typeof clearTimeout=="function"?clearTimeout:void 0,rv=typeof Promise=="function"?Promise:void 0,zN=typeof queueMicrotask=="function"?queueMicrotask:typeof rv<"u"?function(t){return rv.resolve(null).then(t).catch(WN)}:gp;function WN(t){setTimeout(function(){throw t})}function sf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),tl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);tl(e)}function si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function iv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),nr="__reactFiber$"+Do,ol="__reactProps$"+Do,Nr="__reactContainer$"+Do,_p="__reactEvents$"+Do,HN="__reactListeners$"+Do,GN="__reactHandles$"+Do;function $i(t){var e=t[nr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nr]||n[nr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=iv(t);t!==null;){if(n=t[nr])return n;t=iv(t)}return e}t=n,n=t.parentNode}return null}function Pl(t){return t=t[nr]||t[Nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function kh(t){return t[ol]||null}var yp=[],js=-1;function Ti(t){return{current:t}}function He(t){0>js||(t.current=yp[js],yp[js]=null,js--)}function Fe(t,e){js++,yp[js]=t.current,t.current=e}var _i={},Kt=Ti(_i),an=Ti(!1),Yi=_i;function ho(t,e){var n=t.type.contextTypes;if(!n)return _i;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ln(t){return t=t.childContextTypes,t!=null}function Ac(){He(an),He(Kt)}function sv(t,e,n){if(Kt.current!==_i)throw Error(z(168));Fe(Kt,e),Fe(an,n)}function fS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,Pk(t)||"Unknown",i));return et({},n,r)}function kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_i,Yi=Kt.current,Fe(Kt,t),Fe(an,an.current),!0}function ov(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=fS(t,e,Yi),r.__reactInternalMemoizedMergedChildContext=t,He(an),He(Kt),Fe(Kt,t)):He(an),Fe(an,n)}var gr=null,Nh=!1,of=!1;function pS(t){gr===null?gr=[t]:gr.push(t)}function KN(t){Nh=!0,pS(t)}function Ii(){if(!of&&gr!==null){of=!0;var t=0,e=Pe;try{var n=gr;for(Pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gr=null,Nh=!1}catch(i){throw gr!==null&&(gr=gr.slice(t+1)),UE(Um,Ii),i}finally{Pe=e,of=!1}}return null}var zs=[],Ws=0,Nc=null,Pc=0,Sn=[],Tn=0,Xi=null,_r=1,yr="";function Di(t,e){zs[Ws++]=Pc,zs[Ws++]=Nc,Nc=t,Pc=e}function mS(t,e,n){Sn[Tn++]=_r,Sn[Tn++]=yr,Sn[Tn++]=Xi,Xi=t;var r=_r;t=yr;var i=32-Kn(r)-1;r&=~(1<<i),n+=1;var s=32-Kn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_r=1<<32-Kn(e)+i|n<<i|r,yr=s+t}else _r=1<<s|n<<i|r,yr=t}function qm(t){t.return!==null&&(Di(t,1),mS(t,1,0))}function Qm(t){for(;t===Nc;)Nc=zs[--Ws],zs[Ws]=null,Pc=zs[--Ws],zs[Ws]=null;for(;t===Xi;)Xi=Sn[--Tn],Sn[Tn]=null,yr=Sn[--Tn],Sn[Tn]=null,_r=Sn[--Tn],Sn[Tn]=null}var _n=null,gn=null,Qe=!1,Bn=null;function gS(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function av(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,gn=si(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xi!==null?{id:_r,overflow:yr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,gn=null,!0):!1;default:return!1}}function vp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wp(t){if(Qe){var e=gn;if(e){var n=e;if(!av(t,e)){if(vp(t))throw Error(z(418));e=si(n.nextSibling);var r=_n;e&&av(t,e)?gS(r,n):(t.flags=t.flags&-4097|2,Qe=!1,_n=t)}}else{if(vp(t))throw Error(z(418));t.flags=t.flags&-4097|2,Qe=!1,_n=t}}}function lv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function Ou(t){if(t!==_n)return!1;if(!Qe)return lv(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mp(t.type,t.memoizedProps)),e&&(e=gn)){if(vp(t))throw _S(),Error(z(418));for(;e;)gS(t,e),e=si(e.nextSibling)}if(lv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=si(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=_n?si(t.stateNode.nextSibling):null;return!0}function _S(){for(var t=gn;t;)t=si(t.nextSibling)}function fo(){gn=_n=null,Qe=!1}function Ym(t){Bn===null?Bn=[t]:Bn.push(t)}var qN=Lr.ReactCurrentBatchConfig;function la(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function xu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function uv(t){var e=t._init;return e(t._payload)}function yS(t){function e(C,y){if(t){var S=C.deletions;S===null?(C.deletions=[y],C.flags|=16):S.push(y)}}function n(C,y){if(!t)return null;for(;y!==null;)e(C,y),y=y.sibling;return null}function r(C,y){for(C=new Map;y!==null;)y.key!==null?C.set(y.key,y):C.set(y.index,y),y=y.sibling;return C}function i(C,y){return C=ui(C,y),C.index=0,C.sibling=null,C}function s(C,y,S){return C.index=S,t?(S=C.alternate,S!==null?(S=S.index,S<y?(C.flags|=2,y):S):(C.flags|=2,y)):(C.flags|=1048576,y)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function a(C,y,S,L){return y===null||y.tag!==6?(y=ff(S,C.mode,L),y.return=C,y):(y=i(y,S),y.return=C,y)}function u(C,y,S,L){var V=S.type;return V===Vs?d(C,y,S.props.children,L,S.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Wr&&uv(V)===y.type)?(L=i(y,S.props),L.ref=la(C,y,S),L.return=C,L):(L=uc(S.type,S.key,S.props,null,C.mode,L),L.ref=la(C,y,S),L.return=C,L)}function c(C,y,S,L){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=pf(S,C.mode,L),y.return=C,y):(y=i(y,S.children||[]),y.return=C,y)}function d(C,y,S,L,V){return y===null||y.tag!==7?(y=Ki(S,C.mode,L,V),y.return=C,y):(y=i(y,S),y.return=C,y)}function f(C,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=ff(""+y,C.mode,S),y.return=C,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Su:return S=uc(y.type,y.key,y.props,null,C.mode,S),S.ref=la(C,null,y),S.return=C,S;case Ms:return y=pf(y,C.mode,S),y.return=C,y;case Wr:var L=y._init;return f(C,L(y._payload),S)}if(Ta(y)||ra(y))return y=Ki(y,C.mode,S,null),y.return=C,y;xu(C,y)}return null}function m(C,y,S,L){var V=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return V!==null?null:a(C,y,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Su:return S.key===V?u(C,y,S,L):null;case Ms:return S.key===V?c(C,y,S,L):null;case Wr:return V=S._init,m(C,y,V(S._payload),L)}if(Ta(S)||ra(S))return V!==null?null:d(C,y,S,L,null);xu(C,S)}return null}function w(C,y,S,L,V){if(typeof L=="string"&&L!==""||typeof L=="number")return C=C.get(S)||null,a(y,C,""+L,V);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Su:return C=C.get(L.key===null?S:L.key)||null,u(y,C,L,V);case Ms:return C=C.get(L.key===null?S:L.key)||null,c(y,C,L,V);case Wr:var F=L._init;return w(C,y,S,F(L._payload),V)}if(Ta(L)||ra(L))return C=C.get(S)||null,d(y,C,L,V,null);xu(y,L)}return null}function v(C,y,S,L){for(var V=null,F=null,E=y,_=y=0,T=null;E!==null&&_<S.length;_++){E.index>_?(T=E,E=null):T=E.sibling;var R=m(C,E,S[_],L);if(R===null){E===null&&(E=T);break}t&&E&&R.alternate===null&&e(C,E),y=s(R,y,_),F===null?V=R:F.sibling=R,F=R,E=T}if(_===S.length)return n(C,E),Qe&&Di(C,_),V;if(E===null){for(;_<S.length;_++)E=f(C,S[_],L),E!==null&&(y=s(E,y,_),F===null?V=E:F.sibling=E,F=E);return Qe&&Di(C,_),V}for(E=r(C,E);_<S.length;_++)T=w(E,C,_,S[_],L),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?_:T.key),y=s(T,y,_),F===null?V=T:F.sibling=T,F=T);return t&&E.forEach(function(k){return e(C,k)}),Qe&&Di(C,_),V}function A(C,y,S,L){var V=ra(S);if(typeof V!="function")throw Error(z(150));if(S=V.call(S),S==null)throw Error(z(151));for(var F=V=null,E=y,_=y=0,T=null,R=S.next();E!==null&&!R.done;_++,R=S.next()){E.index>_?(T=E,E=null):T=E.sibling;var k=m(C,E,R.value,L);if(k===null){E===null&&(E=T);break}t&&E&&k.alternate===null&&e(C,E),y=s(k,y,_),F===null?V=k:F.sibling=k,F=k,E=T}if(R.done)return n(C,E),Qe&&Di(C,_),V;if(E===null){for(;!R.done;_++,R=S.next())R=f(C,R.value,L),R!==null&&(y=s(R,y,_),F===null?V=R:F.sibling=R,F=R);return Qe&&Di(C,_),V}for(E=r(C,E);!R.done;_++,R=S.next())R=w(E,C,_,R.value,L),R!==null&&(t&&R.alternate!==null&&E.delete(R.key===null?_:R.key),y=s(R,y,_),F===null?V=R:F.sibling=R,F=R);return t&&E.forEach(function(b){return e(C,b)}),Qe&&Di(C,_),V}function x(C,y,S,L){if(typeof S=="object"&&S!==null&&S.type===Vs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Su:e:{for(var V=S.key,F=y;F!==null;){if(F.key===V){if(V=S.type,V===Vs){if(F.tag===7){n(C,F.sibling),y=i(F,S.props.children),y.return=C,C=y;break e}}else if(F.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Wr&&uv(V)===F.type){n(C,F.sibling),y=i(F,S.props),y.ref=la(C,F,S),y.return=C,C=y;break e}n(C,F);break}else e(C,F);F=F.sibling}S.type===Vs?(y=Ki(S.props.children,C.mode,L,S.key),y.return=C,C=y):(L=uc(S.type,S.key,S.props,null,C.mode,L),L.ref=la(C,y,S),L.return=C,C=L)}return o(C);case Ms:e:{for(F=S.key;y!==null;){if(y.key===F)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(C,y.sibling),y=i(y,S.children||[]),y.return=C,C=y;break e}else{n(C,y);break}else e(C,y);y=y.sibling}y=pf(S,C.mode,L),y.return=C,C=y}return o(C);case Wr:return F=S._init,x(C,y,F(S._payload),L)}if(Ta(S))return v(C,y,S,L);if(ra(S))return A(C,y,S,L);xu(C,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(C,y.sibling),y=i(y,S),y.return=C,C=y):(n(C,y),y=ff(S,C.mode,L),y.return=C,C=y),o(C)):n(C,y)}return x}var po=yS(!0),vS=yS(!1),bc=Ti(null),Oc=null,Hs=null,Xm=null;function Jm(){Xm=Hs=Oc=null}function Zm(t){var e=bc.current;He(bc),t._currentValue=e}function Ep(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function to(t,e){Oc=t,Xm=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(Xm!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(Oc===null)throw Error(z(308));Hs=t,Oc.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var Bi=null;function eg(t){Bi===null?Bi=[t]:Bi.push(t)}function wS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,eg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pr(t,r)}function Pr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hr=!1;function tg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ES(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function oi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pr(t,n)}return i=r.interleaved,i===null?(e.next=e,eg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pr(t,n)}function rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$m(t,n)}}function cv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xc(t,e,n,r){var i=t.updateQueue;Hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,w=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,A=a;switch(m=e,w=n,A.tag){case 1:if(v=A.payload,typeof v=="function"){f=v.call(w,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=A.payload,m=typeof v=="function"?v.call(w,f,m):v,m==null)break e;f=et({},f,m);break e;case 2:Hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=w,u=f):d=d.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zi|=o,t.lanes=o,t.memoizedState=f}}function hv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var bl={},or=Ti(bl),al=Ti(bl),ll=Ti(bl);function ji(t){if(t===bl)throw Error(z(174));return t}function ng(t,e){switch(Fe(ll,e),Fe(al,t),Fe(or,bl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tp(e,t)}He(or),Fe(or,e)}function mo(){He(or),He(al),He(ll)}function SS(t){ji(ll.current);var e=ji(or.current),n=tp(e,t.type);e!==n&&(Fe(al,t),Fe(or,n))}function rg(t){al.current===t&&(He(or),He(al))}var Je=Ti(0);function Dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var af=[];function ig(){for(var t=0;t<af.length;t++)af[t]._workInProgressVersionPrimary=null;af.length=0}var ic=Lr.ReactCurrentDispatcher,lf=Lr.ReactCurrentBatchConfig,Ji=0,Ze=null,dt=null,vt=null,Lc=!1,xa=!1,ul=0,QN=0;function Vt(){throw Error(z(321))}function sg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function og(t,e,n,r,i,s){if(Ji=s,Ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?ZN:eP,t=n(r,i),xa){s=0;do{if(xa=!1,ul=0,25<=s)throw Error(z(301));s+=1,vt=dt=null,e.updateQueue=null,ic.current=tP,t=n(r,i)}while(xa)}if(ic.current=Mc,e=dt!==null&&dt.next!==null,Ji=0,vt=dt=Ze=null,Lc=!1,e)throw Error(z(300));return t}function ag(){var t=ul!==0;return ul=0,t}function tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Ze.memoizedState=vt=t:vt=vt.next=t,vt}function Nn(){if(dt===null){var t=Ze.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var e=vt===null?Ze.memoizedState:vt.next;if(e!==null)vt=e,dt=t;else{if(t===null)throw Error(z(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},vt===null?Ze.memoizedState=vt=t:vt=vt.next=t}return vt}function cl(t,e){return typeof e=="function"?e(t):e}function uf(t){var e=Nn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=dt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Ji&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Ze.lanes|=d,Zi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Yn(r,e.memoizedState)||(sn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ze.lanes|=s,Zi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cf(t){var e=Nn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Yn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function TS(){}function IS(t,e){var n=Ze,r=Nn(),i=e(),s=!Yn(r.memoizedState,i);if(s&&(r.memoizedState=i,sn=!0),r=r.queue,lg(AS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||vt!==null&&vt.memoizedState.tag&1){if(n.flags|=2048,hl(9,CS.bind(null,n,r,i,e),void 0,null),Tt===null)throw Error(z(349));Ji&30||RS(n,e,i)}return i}function RS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ze.updateQueue,e===null?(e={lastEffect:null,stores:null},Ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function CS(t,e,n,r){e.value=n,e.getSnapshot=r,kS(e)&&NS(t)}function AS(t,e,n){return n(function(){kS(e)&&NS(t)})}function kS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function NS(t){var e=Pr(t,1);e!==null&&qn(e,t,1,-1)}function dv(t){var e=tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:t},e.queue=t,t=t.dispatch=JN.bind(null,Ze,t),[e.memoizedState,t]}function hl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ze.updateQueue,e===null?(e={lastEffect:null,stores:null},Ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function PS(){return Nn().memoizedState}function sc(t,e,n,r){var i=tr();Ze.flags|=t,i.memoizedState=hl(1|e,n,void 0,r===void 0?null:r)}function Ph(t,e,n,r){var i=Nn();r=r===void 0?null:r;var s=void 0;if(dt!==null){var o=dt.memoizedState;if(s=o.destroy,r!==null&&sg(r,o.deps)){i.memoizedState=hl(e,n,s,r);return}}Ze.flags|=t,i.memoizedState=hl(1|e,n,s,r)}function fv(t,e){return sc(8390656,8,t,e)}function lg(t,e){return Ph(2048,8,t,e)}function bS(t,e){return Ph(4,2,t,e)}function OS(t,e){return Ph(4,4,t,e)}function xS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function DS(t,e,n){return n=n!=null?n.concat([t]):null,Ph(4,4,xS.bind(null,e,t),n)}function ug(){}function LS(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function MS(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function VS(t,e,n){return Ji&21?(Yn(n,e)||(n=jE(),Ze.lanes|=n,Zi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function YN(t,e){var n=Pe;Pe=n!==0&&4>n?n:4,t(!0);var r=lf.transition;lf.transition={};try{t(!1),e()}finally{Pe=n,lf.transition=r}}function FS(){return Nn().memoizedState}function XN(t,e,n){var r=li(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},US(t))$S(e,n);else if(n=wS(t,e,n,r),n!==null){var i=Zt();qn(n,t,r,i),BS(n,e,r)}}function JN(t,e,n){var r=li(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(US(t))$S(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Yn(a,o)){var u=e.interleaved;u===null?(i.next=i,eg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=wS(t,e,i,r),n!==null&&(i=Zt(),qn(n,t,r,i),BS(n,e,r))}}function US(t){var e=t.alternate;return t===Ze||e!==null&&e===Ze}function $S(t,e){xa=Lc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function BS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$m(t,n)}}var Mc={readContext:kn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},ZN={readContext:kn,useCallback:function(t,e){return tr().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:fv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sc(4194308,4,xS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return sc(4,2,t,e)},useMemo:function(t,e){var n=tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=XN.bind(null,Ze,t),[r.memoizedState,t]},useRef:function(t){var e=tr();return t={current:t},e.memoizedState=t},useState:dv,useDebugValue:ug,useDeferredValue:function(t){return tr().memoizedState=t},useTransition:function(){var t=dv(!1),e=t[0];return t=YN.bind(null,t[1]),tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ze,i=tr();if(Qe){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Tt===null)throw Error(z(349));Ji&30||RS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,fv(AS.bind(null,r,s,t),[t]),r.flags|=2048,hl(9,CS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tr(),e=Tt.identifierPrefix;if(Qe){var n=yr,r=_r;n=(r&~(1<<32-Kn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ul++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eP={readContext:kn,useCallback:LS,useContext:kn,useEffect:lg,useImperativeHandle:DS,useInsertionEffect:bS,useLayoutEffect:OS,useMemo:MS,useReducer:uf,useRef:PS,useState:function(){return uf(cl)},useDebugValue:ug,useDeferredValue:function(t){var e=Nn();return VS(e,dt.memoizedState,t)},useTransition:function(){var t=uf(cl)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:TS,useSyncExternalStore:IS,useId:FS,unstable_isNewReconciler:!1},tP={readContext:kn,useCallback:LS,useContext:kn,useEffect:lg,useImperativeHandle:DS,useInsertionEffect:bS,useLayoutEffect:OS,useMemo:MS,useReducer:cf,useRef:PS,useState:function(){return cf(cl)},useDebugValue:ug,useDeferredValue:function(t){var e=Nn();return dt===null?e.memoizedState=t:VS(e,dt.memoizedState,t)},useTransition:function(){var t=cf(cl)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:TS,useSyncExternalStore:IS,useId:FS,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bh={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Zt(),i=li(t),s=Ir(r,i);s.payload=e,n!=null&&(s.callback=n),e=oi(t,s,i),e!==null&&(qn(e,t,i,r),rc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Zt(),i=li(t),s=Ir(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=oi(t,s,i),e!==null&&(qn(e,t,i,r),rc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),r=li(t),i=Ir(n,r);i.tag=2,e!=null&&(i.callback=e),e=oi(t,i,r),e!==null&&(qn(e,t,r,n),rc(e,t,r))}};function pv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!rl(n,r)||!rl(i,s):!0}function jS(t,e,n){var r=!1,i=_i,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(i=ln(e)?Yi:Kt.current,r=e.contextTypes,s=(r=r!=null)?ho(t,i):_i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function mv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bh.enqueueReplaceState(e,e.state,null)}function Tp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},tg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kn(s):(s=ln(e)?Yi:Kt.current,i.context=ho(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bh.enqueueReplaceState(i,i.state,null),xc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",r=e;do n+=Nk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function hf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ip(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nP=typeof WeakMap=="function"?WeakMap:Map;function zS(t,e,n){n=Ir(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fc||(Fc=!0,Dp=r),Ip(t,e)},n}function WS(t,e,n){n=Ir(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ip(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ip(t,e),typeof r!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gP.bind(null,t,e,n),e.then(t,t))}function _v(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ir(-1,1),e.tag=2,oi(n,e,1))),n.lanes|=1),t)}var rP=Lr.ReactCurrentOwner,sn=!1;function Jt(t,e,n,r){e.child=t===null?vS(e,null,n,r):po(e,t.child,n,r)}function vv(t,e,n,r,i){n=n.render;var s=e.ref;return to(e,i),r=og(t,e,n,r,s,i),n=ag(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,br(t,e,i)):(Qe&&n&&qm(e),e.flags|=1,Jt(t,e,r,i),e.child)}function wv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_g(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,HS(t,e,s,r,i)):(t=uc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(o,r)&&t.ref===e.ref)return br(t,e,i)}return e.flags|=1,t=ui(s,r),t.ref=e.ref,t.return=e,e.child=t}function HS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(rl(s,r)&&t.ref===e.ref)if(sn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,br(t,e,i)}return Rp(t,e,n,r,i)}function GS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fe(Ks,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Fe(Ks,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Fe(Ks,mn),mn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Fe(Ks,mn),mn|=r;return Jt(t,e,i,n),e.child}function KS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rp(t,e,n,r,i){var s=ln(n)?Yi:Kt.current;return s=ho(e,s),to(e,i),n=og(t,e,n,r,s,i),r=ag(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,br(t,e,i)):(Qe&&r&&qm(e),e.flags|=1,Jt(t,e,n,i),e.child)}function Ev(t,e,n,r,i){if(ln(n)){var s=!0;kc(e)}else s=!1;if(to(e,i),e.stateNode===null)oc(t,e),jS(e,n,r),Tp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=ln(n)?Yi:Kt.current,c=ho(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&mv(e,o,r,c),Hr=!1;var m=e.memoizedState;o.state=m,xc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||an.current||Hr?(typeof d=="function"&&(Sp(e,n,d,r),u=e.memoizedState),(a=Hr||pv(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ES(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Un(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=kn(u):(u=ln(n)?Yi:Kt.current,u=ho(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&mv(e,o,r,u),Hr=!1,m=e.memoizedState,o.state=m,xc(e,r,o,i);var v=e.memoizedState;a!==f||m!==v||an.current||Hr?(typeof w=="function"&&(Sp(e,n,w,r),v=e.memoizedState),(c=Hr||pv(e,n,c,r,m,v,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Cp(t,e,n,r,s,i)}function Cp(t,e,n,r,i,s){KS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ov(e,n,!1),br(t,e,s);r=e.stateNode,rP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=r.state,i&&ov(e,n,!0),e.child}function qS(t){var e=t.stateNode;e.pendingContext?sv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sv(t,e.context,!1),ng(t,e.containerInfo)}function Sv(t,e,n,r,i){return fo(),Ym(i),e.flags|=256,Jt(t,e,n,r),e.child}var Ap={dehydrated:null,treeContext:null,retryLane:0};function kp(t){return{baseLanes:t,cachePool:null,transitions:null}}function QS(t,e,n){var r=e.pendingProps,i=Je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Fe(Je,i&1),t===null)return wp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dh(o,r,0,null),t=Ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kp(n),e.memoizedState=Ap,t):cg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ui(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ui(a,s):(s=Ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ap,r}return s=t.child,t=s.sibling,r=ui(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cg(t,e){return e=Dh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Du(t,e,n,r){return r!==null&&Ym(r),po(e,t.child,null,n),t=cg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=hf(Error(z(422))),Du(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dh({mode:"visible",children:r.children},i,0,null),s=Ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&po(e,t.child,null,o),e.child.memoizedState=kp(o),e.memoizedState=Ap,s);if(!(e.mode&1))return Du(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=hf(s,r,void 0),Du(t,e,o,r)}if(a=(o&t.childLanes)!==0,sn||a){if(r=Tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pr(t,i),qn(r,t,i,-1))}return gg(),r=hf(Error(z(421))),Du(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_P.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gn=si(i.nextSibling),_n=e,Qe=!0,Bn=null,t!==null&&(Sn[Tn++]=_r,Sn[Tn++]=yr,Sn[Tn++]=Xi,_r=t.id,yr=t.overflow,Xi=e),e=cg(e,r.children),e.flags|=4096,e)}function Tv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ep(t.return,e,n)}function df(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function YS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Jt(t,e,r.children,n),r=Je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tv(t,n,e);else if(t.tag===19)Tv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Fe(Je,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Dc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),df(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}df(e,!0,n,null,s);break;case"together":df(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sP(t,e,n){switch(e.tag){case 3:qS(e),fo();break;case 5:SS(e);break;case 1:ln(e.type)&&kc(e);break;case 4:ng(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Fe(bc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Fe(Je,Je.current&1),e.flags|=128,null):n&e.child.childLanes?QS(t,e,n):(Fe(Je,Je.current&1),t=br(t,e,n),t!==null?t.sibling:null);Fe(Je,Je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return YS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Fe(Je,Je.current),r)break;return null;case 22:case 23:return e.lanes=0,GS(t,e,n)}return br(t,e,n)}var XS,Np,JS,ZS;XS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Np=function(){};JS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ji(or.current);var s=null;switch(n){case"input":i=Xf(t,i),r=Xf(t,r),s=[];break;case"select":i=et({},i,{value:void 0}),r=et({},r,{value:void 0}),s=[];break;case"textarea":i=ep(t,i),r=ep(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cc)}np(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Be("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ZS=function(t,e,n,r){n!==r&&(e.flags|=4)};function ua(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oP(t,e,n){var r=e.pendingProps;switch(Qm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return ln(e.type)&&Ac(),Ft(e),null;case 3:return r=e.stateNode,mo(),He(an),He(Kt),ig(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ou(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(Vp(Bn),Bn=null))),Np(t,e),Ft(e),null;case 5:rg(e);var i=ji(ll.current);if(n=e.type,t!==null&&e.stateNode!=null)JS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return Ft(e),null}if(t=ji(or.current),Ou(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nr]=e,r[ol]=s,t=(e.mode&1)!==0,n){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(i=0;i<Ra.length;i++)Be(Ra[i],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":Oy(r,s),Be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Be("invalid",r);break;case"textarea":Dy(r,s),Be("invalid",r)}np(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&bu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&bu(r.textContent,a,t),i=["children",""+a]):Ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Be("scroll",r)}switch(n){case"input":Tu(r),xy(r,s,!0);break;case"textarea":Tu(r),Ly(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=AE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nr]=e,t[ol]=r,XS(t,e,!1,!1),e.stateNode=t;e:{switch(o=rp(n,r),n){case"dialog":Be("cancel",t),Be("close",t),i=r;break;case"iframe":case"object":case"embed":Be("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ra.length;i++)Be(Ra[i],t);i=r;break;case"source":Be("error",t),i=r;break;case"img":case"image":case"link":Be("error",t),Be("load",t),i=r;break;case"details":Be("toggle",t),i=r;break;case"input":Oy(t,r),i=Xf(t,r),Be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=et({},r,{value:void 0}),Be("invalid",t);break;case"textarea":Dy(t,r),i=ep(t,r),Be("invalid",t);break;default:i=r}np(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?PE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&kE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xa(t,u):typeof u=="number"&&Xa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ya.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Be("scroll",t):u!=null&&Dm(t,s,u,o))}switch(n){case"input":Tu(t),xy(t,r,!1);break;case"textarea":Tu(t),Ly(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)ZS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=ji(ll.current),ji(or.current),Ou(e)){if(r=e.stateNode,n=e.memoizedProps,r[nr]=e,(s=r.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:bu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nr]=e,e.stateNode=r}return Ft(e),null;case 13:if(He(Je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&gn!==null&&e.mode&1&&!(e.flags&128))_S(),fo(),e.flags|=98560,s=!1;else if(s=Ou(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[nr]=e}else fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Bn!==null&&(Vp(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Je.current&1?ft===0&&(ft=3):gg())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return mo(),Np(t,e),t===null&&il(e.stateNode.containerInfo),Ft(e),null;case 10:return Zm(e.type._context),Ft(e),null;case 17:return ln(e.type)&&Ac(),Ft(e),null;case 19:if(He(Je),s=e.memoizedState,s===null)return Ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ua(s,!1);else{if(ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Dc(t),o!==null){for(e.flags|=128,ua(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Fe(Je,Je.current&1|2),e.child}t=t.sibling}s.tail!==null&&st()>_o&&(e.flags|=128,r=!0,ua(s,!1),e.lanes=4194304)}else{if(!r)if(t=Dc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Ft(e),null}else 2*st()-s.renderingStartTime>_o&&n!==1073741824&&(e.flags|=128,r=!0,ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=st(),e.sibling=null,n=Je.current,Fe(Je,r?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return mg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function aP(t,e){switch(Qm(e),e.tag){case 1:return ln(e.type)&&Ac(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),He(an),He(Kt),ig(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rg(e),null;case 13:if(He(Je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return He(Je),null;case 4:return mo(),null;case 10:return Zm(e.type._context),null;case 22:case 23:return mg(),null;case 24:return null;default:return null}}var Lu=!1,Bt=!1,lP=typeof WeakSet=="function"?WeakSet:Set,te=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){rt(t,e,r)}else n.current=null}function Pp(t,e,n){try{n()}catch(r){rt(t,e,r)}}var Iv=!1;function uP(t,e){if(fp=Tc,t=iS(),Km(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(pp={focusedElem:t,selectionRange:n},Tc=!1,te=e;te!==null;)if(e=te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,te=t;else for(;te!==null;){e=te;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var A=v.memoizedProps,x=v.memoizedState,C=e.stateNode,y=C.getSnapshotBeforeUpdate(e.elementType===e.type?A:Un(e.type,A),x);C.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(L){rt(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}return v=Iv,Iv=!1,v}function Da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pp(e,n,s)}i=i.next}while(i!==r)}}function Oh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eT(t){var e=t.alternate;e!==null&&(t.alternate=null,eT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nr],delete e[ol],delete e[_p],delete e[HN],delete e[GN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tT(t){return t.tag===5||t.tag===3||t.tag===4}function Rv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Op(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cc));else if(r!==4&&(t=t.child,t!==null))for(Op(t,e,n),t=t.sibling;t!==null;)Op(t,e,n),t=t.sibling}function xp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xp(t,e,n),t=t.sibling;t!==null;)xp(t,e,n),t=t.sibling}var kt=null,$n=!1;function jr(t,e,n){for(n=n.child;n!==null;)nT(t,e,n),n=n.sibling}function nT(t,e,n){if(sr&&typeof sr.onCommitFiberUnmount=="function")try{sr.onCommitFiberUnmount(Ih,n)}catch{}switch(n.tag){case 5:Bt||Gs(n,e);case 6:var r=kt,i=$n;kt=null,jr(t,e,n),kt=r,$n=i,kt!==null&&($n?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&($n?(t=kt,n=n.stateNode,t.nodeType===8?sf(t.parentNode,n):t.nodeType===1&&sf(t,n),tl(t)):sf(kt,n.stateNode));break;case 4:r=kt,i=$n,kt=n.stateNode.containerInfo,$n=!0,jr(t,e,n),kt=r,$n=i;break;case 0:case 11:case 14:case 15:if(!Bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pp(n,e,o),i=i.next}while(i!==r)}jr(t,e,n);break;case 1:if(!Bt&&(Gs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){rt(n,e,a)}jr(t,e,n);break;case 21:jr(t,e,n);break;case 22:n.mode&1?(Bt=(r=Bt)||n.memoizedState!==null,jr(t,e,n),Bt=r):jr(t,e,n);break;default:jr(t,e,n)}}function Cv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lP),e.forEach(function(r){var i=yP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,$n=!1;break e;case 3:kt=a.stateNode.containerInfo,$n=!0;break e;case 4:kt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(kt===null)throw Error(z(160));nT(s,o,i),kt=null,$n=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){rt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rT(e,t),e=e.sibling}function rT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),er(t),r&4){try{Da(3,t,t.return),Oh(3,t)}catch(A){rt(t,t.return,A)}try{Da(5,t,t.return)}catch(A){rt(t,t.return,A)}}break;case 1:Vn(e,t),er(t),r&512&&n!==null&&Gs(n,n.return);break;case 5:if(Vn(e,t),er(t),r&512&&n!==null&&Gs(n,n.return),t.flags&32){var i=t.stateNode;try{Xa(i,"")}catch(A){rt(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&RE(i,s),rp(a,o);var c=rp(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?PE(i,f):d==="dangerouslySetInnerHTML"?kE(i,f):d==="children"?Xa(i,f):Dm(i,d,f,c)}switch(a){case"input":Jf(i,s);break;case"textarea":CE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Xs(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?Xs(i,!!s.multiple,s.defaultValue,!0):Xs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ol]=s}catch(A){rt(t,t.return,A)}}break;case 6:if(Vn(e,t),er(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){rt(t,t.return,A)}}break;case 3:if(Vn(e,t),er(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tl(e.containerInfo)}catch(A){rt(t,t.return,A)}break;case 4:Vn(e,t),er(t);break;case 13:Vn(e,t),er(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fg=st())),r&4&&Cv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||d,Vn(e,t),Bt=c):Vn(e,t),er(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(te=t,d=t.child;d!==null;){for(f=te=d;te!==null;){switch(m=te,w=m.child,m.tag){case 0:case 11:case 14:case 15:Da(4,m,m.return);break;case 1:Gs(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(A){rt(r,n,A)}}break;case 5:Gs(m,m.return);break;case 22:if(m.memoizedState!==null){kv(f);continue}}w!==null?(w.return=m,te=w):kv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=NE("display",o))}catch(A){rt(t,t.return,A)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){rt(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vn(e,t),er(t),r&4&&Cv(t);break;case 21:break;default:Vn(e,t),er(t)}}function er(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tT(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xa(i,""),r.flags&=-33);var s=Rv(t);xp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Rv(t);Op(t,a,o);break;default:throw Error(z(161))}}catch(u){rt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cP(t,e,n){te=t,iT(t)}function iT(t,e,n){for(var r=(t.mode&1)!==0;te!==null;){var i=te,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Lu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Bt;a=Lu;var c=Bt;if(Lu=o,(Bt=u)&&!c)for(te=i;te!==null;)o=te,u=o.child,o.tag===22&&o.memoizedState!==null?Nv(i):u!==null?(u.return=o,te=u):Nv(i);for(;s!==null;)te=s,iT(s),s=s.sibling;te=i,Lu=a,Bt=c}Av(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,te=s):Av(t)}}function Av(t){for(;te!==null;){var e=te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Oh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&tl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Bt||e.flags&512&&bp(e)}catch(m){rt(e,e.return,m)}}if(e===t){te=null;break}if(n=e.sibling,n!==null){n.return=e.return,te=n;break}te=e.return}}function kv(t){for(;te!==null;){var e=te;if(e===t){te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,te=n;break}te=e.return}}function Nv(t){for(;te!==null;){var e=te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Oh(4,e)}catch(u){rt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){rt(e,i,u)}}var s=e.return;try{bp(e)}catch(u){rt(e,s,u)}break;case 5:var o=e.return;try{bp(e)}catch(u){rt(e,o,u)}}}catch(u){rt(e,e.return,u)}if(e===t){te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,te=a;break}te=e.return}}var hP=Math.ceil,Vc=Lr.ReactCurrentDispatcher,hg=Lr.ReactCurrentOwner,Cn=Lr.ReactCurrentBatchConfig,Re=0,Tt=null,lt=null,Ot=0,mn=0,Ks=Ti(0),ft=0,dl=null,Zi=0,xh=0,dg=0,La=null,rn=null,fg=0,_o=1/0,mr=null,Fc=!1,Dp=null,ai=null,Mu=!1,ei=null,Uc=0,Ma=0,Lp=null,ac=-1,lc=0;function Zt(){return Re&6?st():ac!==-1?ac:ac=st()}function li(t){return t.mode&1?Re&2&&Ot!==0?Ot&-Ot:qN.transition!==null?(lc===0&&(lc=jE()),lc):(t=Pe,t!==0||(t=window.event,t=t===void 0?16:QE(t.type)),t):1}function qn(t,e,n,r){if(50<Ma)throw Ma=0,Lp=null,Error(z(185));kl(t,n,r),(!(Re&2)||t!==Tt)&&(t===Tt&&(!(Re&2)&&(xh|=n),ft===4&&qr(t,Ot)),un(t,r),n===1&&Re===0&&!(e.mode&1)&&(_o=st()+500,Nh&&Ii()))}function un(t,e){var n=t.callbackNode;qk(t,e);var r=Sc(t,t===Tt?Ot:0);if(r===0)n!==null&&Fy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fy(n),e===1)t.tag===0?KN(Pv.bind(null,t)):pS(Pv.bind(null,t)),zN(function(){!(Re&6)&&Ii()}),n=null;else{switch(zE(r)){case 1:n=Um;break;case 4:n=$E;break;case 16:n=Ec;break;case 536870912:n=BE;break;default:n=Ec}n=dT(n,sT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sT(t,e){if(ac=-1,lc=0,Re&6)throw Error(z(327));var n=t.callbackNode;if(no()&&t.callbackNode!==n)return null;var r=Sc(t,t===Tt?Ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$c(t,r);else{e=r;var i=Re;Re|=2;var s=aT();(Tt!==t||Ot!==e)&&(mr=null,_o=st()+500,Gi(t,e));do try{pP();break}catch(a){oT(t,a)}while(!0);Jm(),Vc.current=s,Re=i,lt!==null?e=0:(Tt=null,Ot=0,e=ft)}if(e!==0){if(e===2&&(i=lp(t),i!==0&&(r=i,e=Mp(t,i))),e===1)throw n=dl,Gi(t,0),qr(t,r),un(t,st()),n;if(e===6)qr(t,r);else{if(i=t.current.alternate,!(r&30)&&!dP(i)&&(e=$c(t,r),e===2&&(s=lp(t),s!==0&&(r=s,e=Mp(t,s))),e===1))throw n=dl,Gi(t,0),qr(t,r),un(t,st()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Li(t,rn,mr);break;case 3:if(qr(t,r),(r&130023424)===r&&(e=fg+500-st(),10<e)){if(Sc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gp(Li.bind(null,t,rn,mr),e);break}Li(t,rn,mr);break;case 4:if(qr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Kn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=st()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hP(r/1960))-r,10<r){t.timeoutHandle=gp(Li.bind(null,t,rn,mr),r);break}Li(t,rn,mr);break;case 5:Li(t,rn,mr);break;default:throw Error(z(329))}}}return un(t,st()),t.callbackNode===n?sT.bind(null,t):null}function Mp(t,e){var n=La;return t.current.memoizedState.isDehydrated&&(Gi(t,e).flags|=256),t=$c(t,e),t!==2&&(e=rn,rn=n,e!==null&&Vp(e)),t}function Vp(t){rn===null?rn=t:rn.push.apply(rn,t)}function dP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qr(t,e){for(e&=~dg,e&=~xh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),r=1<<n;t[n]=-1,e&=~r}}function Pv(t){if(Re&6)throw Error(z(327));no();var e=Sc(t,0);if(!(e&1))return un(t,st()),null;var n=$c(t,e);if(t.tag!==0&&n===2){var r=lp(t);r!==0&&(e=r,n=Mp(t,r))}if(n===1)throw n=dl,Gi(t,0),qr(t,e),un(t,st()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Li(t,rn,mr),un(t,st()),null}function pg(t,e){var n=Re;Re|=1;try{return t(e)}finally{Re=n,Re===0&&(_o=st()+500,Nh&&Ii())}}function es(t){ei!==null&&ei.tag===0&&!(Re&6)&&no();var e=Re;Re|=1;var n=Cn.transition,r=Pe;try{if(Cn.transition=null,Pe=1,t)return t()}finally{Pe=r,Cn.transition=n,Re=e,!(Re&6)&&Ii()}}function mg(){mn=Ks.current,He(Ks)}function Gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jN(n)),lt!==null)for(n=lt.return;n!==null;){var r=n;switch(Qm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ac();break;case 3:mo(),He(an),He(Kt),ig();break;case 5:rg(r);break;case 4:mo();break;case 13:He(Je);break;case 19:He(Je);break;case 10:Zm(r.type._context);break;case 22:case 23:mg()}n=n.return}if(Tt=t,lt=t=ui(t.current,null),Ot=mn=e,ft=0,dl=null,dg=xh=Zi=0,rn=La=null,Bi!==null){for(e=0;e<Bi.length;e++)if(n=Bi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bi=null}return t}function oT(t,e){do{var n=lt;try{if(Jm(),ic.current=Mc,Lc){for(var r=Ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lc=!1}if(Ji=0,vt=dt=Ze=null,xa=!1,ul=0,hg.current=null,n===null||n.return===null){ft=1,dl=e,lt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ot,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=_v(o);if(w!==null){w.flags&=-257,yv(w,o,a,s,e),w.mode&1&&gv(s,c,e),e=w,u=c;var v=e.updateQueue;if(v===null){var A=new Set;A.add(u),e.updateQueue=A}else v.add(u);break e}else{if(!(e&1)){gv(s,c,e),gg();break e}u=Error(z(426))}}else if(Qe&&a.mode&1){var x=_v(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),yv(x,o,a,s,e),Ym(go(u,a));break e}}s=u=go(u,a),ft!==4&&(ft=2),La===null?La=[s]:La.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var C=zS(s,u,e);cv(s,C);break e;case 1:a=u;var y=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ai===null||!ai.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=WS(s,a,e);cv(s,L);break e}}s=s.return}while(s!==null)}uT(n)}catch(V){e=V,lt===n&&n!==null&&(lt=n=n.return);continue}break}while(!0)}function aT(){var t=Vc.current;return Vc.current=Mc,t===null?Mc:t}function gg(){(ft===0||ft===3||ft===2)&&(ft=4),Tt===null||!(Zi&268435455)&&!(xh&268435455)||qr(Tt,Ot)}function $c(t,e){var n=Re;Re|=2;var r=aT();(Tt!==t||Ot!==e)&&(mr=null,Gi(t,e));do try{fP();break}catch(i){oT(t,i)}while(!0);if(Jm(),Re=n,Vc.current=r,lt!==null)throw Error(z(261));return Tt=null,Ot=0,ft}function fP(){for(;lt!==null;)lT(lt)}function pP(){for(;lt!==null&&!Uk();)lT(lt)}function lT(t){var e=hT(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?uT(t):lt=e,hg.current=null}function uT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aP(n,e),n!==null){n.flags&=32767,lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ft=6,lt=null;return}}else if(n=oP(n,e,mn),n!==null){lt=n;return}if(e=e.sibling,e!==null){lt=e;return}lt=e=t}while(e!==null);ft===0&&(ft=5)}function Li(t,e,n){var r=Pe,i=Cn.transition;try{Cn.transition=null,Pe=1,mP(t,e,n,r)}finally{Cn.transition=i,Pe=r}return null}function mP(t,e,n,r){do no();while(ei!==null);if(Re&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qk(t,s),t===Tt&&(lt=Tt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mu||(Mu=!0,dT(Ec,function(){return no(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=Pe;Pe=1;var a=Re;Re|=4,hg.current=null,uP(t,n),rT(n,t),LN(pp),Tc=!!fp,pp=fp=null,t.current=n,cP(n),$k(),Re=a,Pe=o,Cn.transition=s}else t.current=n;if(Mu&&(Mu=!1,ei=t,Uc=i),s=t.pendingLanes,s===0&&(ai=null),zk(n.stateNode),un(t,st()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fc)throw Fc=!1,t=Dp,Dp=null,t;return Uc&1&&t.tag!==0&&no(),s=t.pendingLanes,s&1?t===Lp?Ma++:(Ma=0,Lp=t):Ma=0,Ii(),null}function no(){if(ei!==null){var t=zE(Uc),e=Cn.transition,n=Pe;try{if(Cn.transition=null,Pe=16>t?16:t,ei===null)var r=!1;else{if(t=ei,ei=null,Uc=0,Re&6)throw Error(z(331));var i=Re;for(Re|=4,te=t.current;te!==null;){var s=te,o=s.child;if(te.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(te=c;te!==null;){var d=te;switch(d.tag){case 0:case 11:case 15:Da(8,d,s)}var f=d.child;if(f!==null)f.return=d,te=f;else for(;te!==null;){d=te;var m=d.sibling,w=d.return;if(eT(d),d===c){te=null;break}if(m!==null){m.return=w,te=m;break}te=w}}}var v=s.alternate;if(v!==null){var A=v.child;if(A!==null){v.child=null;do{var x=A.sibling;A.sibling=null,A=x}while(A!==null)}}te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,te=o;else e:for(;te!==null;){if(s=te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var C=s.sibling;if(C!==null){C.return=s.return,te=C;break e}te=s.return}}var y=t.current;for(te=y;te!==null;){o=te;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,te=S;else e:for(o=y;te!==null;){if(a=te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oh(9,a)}}catch(V){rt(a,a.return,V)}if(a===o){te=null;break e}var L=a.sibling;if(L!==null){L.return=a.return,te=L;break e}te=a.return}}if(Re=i,Ii(),sr&&typeof sr.onPostCommitFiberRoot=="function")try{sr.onPostCommitFiberRoot(Ih,t)}catch{}r=!0}return r}finally{Pe=n,Cn.transition=e}}return!1}function bv(t,e,n){e=go(n,e),e=zS(t,e,1),t=oi(t,e,1),e=Zt(),t!==null&&(kl(t,1,e),un(t,e))}function rt(t,e,n){if(t.tag===3)bv(t,t,n);else for(;e!==null;){if(e.tag===3){bv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ai===null||!ai.has(r))){t=go(n,t),t=WS(e,t,1),e=oi(e,t,1),t=Zt(),e!==null&&(kl(e,1,t),un(e,t));break}}e=e.return}}function gP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(Ot&n)===n&&(ft===4||ft===3&&(Ot&130023424)===Ot&&500>st()-fg?Gi(t,0):dg|=n),un(t,e)}function cT(t,e){e===0&&(t.mode&1?(e=Cu,Cu<<=1,!(Cu&130023424)&&(Cu=4194304)):e=1);var n=Zt();t=Pr(t,e),t!==null&&(kl(t,e,n),un(t,n))}function _P(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cT(t,n)}function yP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),cT(t,n)}var hT;hT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,sP(t,e,n);sn=!!(t.flags&131072)}else sn=!1,Qe&&e.flags&1048576&&mS(e,Pc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;oc(t,e),t=e.pendingProps;var i=ho(e,Kt.current);to(e,n),i=og(null,e,r,t,i,n);var s=ag();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(r)?(s=!0,kc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tg(e),i.updater=bh,e.stateNode=i,i._reactInternals=e,Tp(e,r,t,n),e=Cp(null,e,r,!0,s,n)):(e.tag=0,Qe&&s&&qm(e),Jt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(oc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=wP(r),t=Un(r,t),i){case 0:e=Rp(null,e,r,t,n);break e;case 1:e=Ev(null,e,r,t,n);break e;case 11:e=vv(null,e,r,t,n);break e;case 14:e=wv(null,e,r,Un(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),Rp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),Ev(t,e,r,i,n);case 3:e:{if(qS(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ES(t,e),xc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=go(Error(z(423)),e),e=Sv(t,e,r,n,i);break e}else if(r!==i){i=go(Error(z(424)),e),e=Sv(t,e,r,n,i);break e}else for(gn=si(e.stateNode.containerInfo.firstChild),_n=e,Qe=!0,Bn=null,n=vS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fo(),r===i){e=br(t,e,n);break e}Jt(t,e,r,n)}e=e.child}return e;case 5:return SS(e),t===null&&wp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,mp(r,i)?o=null:s!==null&&mp(r,s)&&(e.flags|=32),KS(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&wp(e),null;case 13:return QS(t,e,n);case 4:return ng(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=po(e,null,r,n):Jt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),vv(t,e,r,i,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Fe(bc,r._currentValue),r._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===i.children&&!an.current){e=br(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ir(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ep(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ep(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,to(e,n),i=kn(i),r=r(i),e.flags|=1,Jt(t,e,r,n),e.child;case 14:return r=e.type,i=Un(r,e.pendingProps),i=Un(r.type,i),wv(t,e,r,i,n);case 15:return HS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),oc(t,e),e.tag=1,ln(r)?(t=!0,kc(e)):t=!1,to(e,n),jS(e,r,i),Tp(e,r,i,n),Cp(null,e,r,!0,t,n);case 19:return YS(t,e,n);case 22:return GS(t,e,n)}throw Error(z(156,e.tag))};function dT(t,e){return UE(t,e)}function vP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new vP(t,e,n,r)}function _g(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wP(t){if(typeof t=="function")return _g(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mm)return 11;if(t===Vm)return 14}return 2}function ui(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_g(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return Ki(n.children,i,s,e);case Lm:o=8,i|=8;break;case Kf:return t=In(12,n,e,i|2),t.elementType=Kf,t.lanes=s,t;case qf:return t=In(13,n,e,i),t.elementType=qf,t.lanes=s,t;case Qf:return t=In(19,n,e,i),t.elementType=Qf,t.lanes=s,t;case SE:return Dh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wE:o=10;break e;case EE:o=9;break e;case Mm:o=11;break e;case Vm:o=14;break e;case Wr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=In(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ki(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function Dh(t,e,n,r){return t=In(22,t,r,e),t.elementType=SE,t.lanes=n,t.stateNode={isHidden:!1},t}function ff(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function pf(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kd(0),this.expirationTimes=Kd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yg(t,e,n,r,i,s,o,a,u){return t=new EP(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tg(s),t}function SP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fT(t){if(!t)return _i;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(ln(n))return fS(t,n,e)}return e}function pT(t,e,n,r,i,s,o,a,u){return t=yg(n,r,!0,t,i,s,o,a,u),t.context=fT(null),n=t.current,r=Zt(),i=li(n),s=Ir(r,i),s.callback=e??null,oi(n,s,i),t.current.lanes=i,kl(t,i,r),un(t,r),t}function Lh(t,e,n,r){var i=e.current,s=Zt(),o=li(i);return n=fT(n),e.context===null?e.context=n:e.pendingContext=n,e=Ir(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=oi(i,e,o),t!==null&&(qn(t,i,o,s),rc(t,i,o)),o}function Bc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ov(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vg(t,e){Ov(t,e),(t=t.alternate)&&Ov(t,e)}function TP(){return null}var mT=typeof reportError=="function"?reportError:function(t){console.error(t)};function wg(t){this._internalRoot=t}Mh.prototype.render=wg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Lh(t,e,null,null)};Mh.prototype.unmount=wg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){Lh(null,t,null,null)}),e[Nr]=null}};function Mh(t){this._internalRoot=t}Mh.prototype.unstable_scheduleHydration=function(t){if(t){var e=GE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kr.length&&e!==0&&e<Kr[n].priority;n++);Kr.splice(n,0,t),n===0&&qE(t)}};function Eg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xv(){}function IP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Bc(o);s.call(c)}}var o=pT(e,r,t,0,null,!1,!1,"",xv);return t._reactRootContainer=o,t[Nr]=o.current,il(t.nodeType===8?t.parentNode:t),es(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Bc(u);a.call(c)}}var u=yg(t,0,!1,null,null,!1,!1,"",xv);return t._reactRootContainer=u,t[Nr]=u.current,il(t.nodeType===8?t.parentNode:t),es(function(){Lh(e,u,n,r)}),u}function Fh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Bc(o);a.call(u)}}Lh(e,o,t,i)}else o=IP(n,e,t,i,r);return Bc(o)}WE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ia(e.pendingLanes);n!==0&&($m(e,n|1),un(e,st()),!(Re&6)&&(_o=st()+500,Ii()))}break;case 13:es(function(){var r=Pr(t,1);if(r!==null){var i=Zt();qn(r,t,1,i)}}),vg(t,1)}};Bm=function(t){if(t.tag===13){var e=Pr(t,134217728);if(e!==null){var n=Zt();qn(e,t,134217728,n)}vg(t,134217728)}};HE=function(t){if(t.tag===13){var e=li(t),n=Pr(t,e);if(n!==null){var r=Zt();qn(n,t,e,r)}vg(t,e)}};GE=function(){return Pe};KE=function(t,e){var n=Pe;try{return Pe=t,e()}finally{Pe=n}};sp=function(t,e,n){switch(e){case"input":if(Jf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=kh(r);if(!i)throw Error(z(90));IE(r),Jf(r,i)}}}break;case"textarea":CE(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};xE=pg;DE=es;var RP={usingClientEntryPoint:!1,Events:[Pl,Bs,kh,bE,OE,pg]},ca={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CP={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=VE(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||TP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{Ih=Vu.inject(CP),sr=Vu}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RP;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eg(e))throw Error(z(200));return SP(t,e,null,n)};wn.createRoot=function(t,e){if(!Eg(t))throw Error(z(299));var n=!1,r="",i=mT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yg(t,1,!1,null,null,n,!1,r,i),t[Nr]=e.current,il(t.nodeType===8?t.parentNode:t),new wg(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=VE(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return es(t)};wn.hydrate=function(t,e,n){if(!Vh(e))throw Error(z(200));return Fh(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!Eg(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pT(e,null,t,1,n??null,i,!1,s,o),t[Nr]=e.current,il(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Mh(e)};wn.render=function(t,e,n){if(!Vh(e))throw Error(z(200));return Fh(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!Vh(t))throw Error(z(40));return t._reactRootContainer?(es(function(){Fh(null,null,t,!1,function(){t._reactRootContainer=null,t[Nr]=null})}),!0):!1};wn.unstable_batchedUpdates=pg;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Vh(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Fh(t,e,n,!1,r)};wn.version="18.3.1-next-f1338f8080-20240426";function gT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gT)}catch(t){console.error(t)}}gT(),gE.exports=wn;var _T=gE.exports;const AP=iE(_T);var Dv=_T;Hf.createRoot=Dv.createRoot,Hf.hydrateRoot=Dv.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fl.apply(this,arguments)}var ti;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ti||(ti={}));const Lv="popstate";function kP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Fp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jc(i)}return PP(e,n,null,t)}function ut(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NP(){return Math.random().toString(36).substr(2,8)}function Mv(t,e){return{usr:t.state,key:t.key,idx:e}}function Fp(t,e,n,r){return n===void 0&&(n=null),fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Lo(e):e,{state:n,key:e&&e.key||r||NP()})}function jc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Lo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ti.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(fl({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=ti.Pop;let x=d(),C=x==null?null:x-c;c=x,u&&u({action:a,location:A.location,delta:C})}function m(x,C){a=ti.Push;let y=Fp(A.location,x,C);c=d()+1;let S=Mv(y,c),L=A.createHref(y);try{o.pushState(S,"",L)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(L)}s&&u&&u({action:a,location:A.location,delta:1})}function w(x,C){a=ti.Replace;let y=Fp(A.location,x,C);c=d();let S=Mv(y,c),L=A.createHref(y);o.replaceState(S,"",L),s&&u&&u({action:a,location:A.location,delta:0})}function v(x){let C=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof x=="string"?x:jc(x);return y=y.replace(/ $/,"%20"),ut(C,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,C)}let A={get action(){return a},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Lv,f),u=x,()=>{i.removeEventListener(Lv,f),u=null}},createHref(x){return e(i,x)},createURL:v,encodeLocation(x){let C=v(x);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:m,replace:w,go(x){return o.go(x)}};return A}var Vv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vv||(Vv={}));function bP(t,e,n){return n===void 0&&(n="/"),OP(t,e,n,!1)}function OP(t,e,n,r){let i=typeof e=="string"?Lo(e):e,s=Sg(i.pathname||"/",n);if(s==null)return null;let o=vT(t);xP(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=WP(s);a=jP(o[u],c,r)}return a}function vT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ut(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ci([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(ut(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),vT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:$P(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of wT(s.path))i(s,o,u)}),e}function wT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=wT(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function xP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:BP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const DP=/^:[\w-]+$/,LP=3,MP=2,VP=1,FP=10,UP=-2,Fv=t=>t==="*";function $P(t,e){let n=t.split("/"),r=n.length;return n.some(Fv)&&(r+=UP),e&&(r+=MP),n.filter(i=>!Fv(i)).reduce((i,s)=>i+(DP.test(s)?LP:s===""?VP:FP),r)}function BP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jP(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Uv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Uv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:ci([s,f.pathname]),pathnameBase:qP(ci([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=ci([s,f.pathnameBase]))}return o}function Uv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:w}=d;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const v=a[f];return w&&!v?c[m]=void 0:c[m]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function zP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),yT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return yT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Sg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function HP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Lo(t):t;return{pathname:n?n.startsWith("/")?n:GP(n,e):e,search:QP(r),hash:YP(i)}}function GP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function mf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function KP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ET(t,e){let n=KP(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ST(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Lo(t):(i=fl({},t),ut(!i.pathname||!i.pathname.includes("?"),mf("?","pathname","search",i)),ut(!i.pathname||!i.pathname.includes("#"),mf("#","pathname","hash",i)),ut(!i.search||!i.search.includes("#"),mf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=HP(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const ci=t=>t.join("/").replace(/\/\/+/g,"/"),qP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),QP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function XP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const TT=["post","put","patch","delete"];new Set(TT);const JP=["get",...TT];new Set(JP);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pl.apply(this,arguments)}const Tg=G.createContext(null),ZP=G.createContext(null),_s=G.createContext(null),Uh=G.createContext(null),Ri=G.createContext({outlet:null,matches:[],isDataRoute:!1}),IT=G.createContext(null);function eb(t,e){let{relative:n}=e===void 0?{}:e;Ol()||ut(!1);let{basename:r,navigator:i}=G.useContext(_s),{hash:s,pathname:o,search:a}=CT(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:ci([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Ol(){return G.useContext(Uh)!=null}function $h(){return Ol()||ut(!1),G.useContext(Uh).location}function RT(t){G.useContext(_s).static||G.useLayoutEffect(t)}function Bh(){let{isDataRoute:t}=G.useContext(Ri);return t?mb():tb()}function tb(){Ol()||ut(!1);let t=G.useContext(Tg),{basename:e,future:n,navigator:r}=G.useContext(_s),{matches:i}=G.useContext(Ri),{pathname:s}=$h(),o=JSON.stringify(ET(i,n.v7_relativeSplatPath)),a=G.useRef(!1);return RT(()=>{a.current=!0}),G.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=ST(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ci([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const nb=G.createContext(null);function rb(t){let e=G.useContext(Ri).outlet;return e&&G.createElement(nb.Provider,{value:t},e)}function CT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=G.useContext(_s),{matches:i}=G.useContext(Ri),{pathname:s}=$h(),o=JSON.stringify(ET(i,r.v7_relativeSplatPath));return G.useMemo(()=>ST(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function ib(t,e){return sb(t,e)}function sb(t,e,n,r){Ol()||ut(!1);let{navigator:i}=G.useContext(_s),{matches:s}=G.useContext(Ri),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=$h(),d;if(e){var f;let x=typeof e=="string"?Lo(e):e;u==="/"||(f=x.pathname)!=null&&f.startsWith(u)||ut(!1),d=x}else d=c;let m=d.pathname||"/",w=m;if(u!=="/"){let x=u.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=bP(t,{pathname:w}),A=cb(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:ci([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:ci([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&A?G.createElement(Uh.Provider,{value:{location:pl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ti.Pop}},A):A}function ob(){let t=pb(),e=XP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),n?G.createElement("pre",{style:i},n):null,null)}const ab=G.createElement(ob,null);class lb extends G.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?G.createElement(Ri.Provider,{value:this.props.routeContext},G.createElement(IT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ub(t){let{routeContext:e,match:n,children:r}=t,i=G.useContext(Tg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),G.createElement(Ri.Provider,{value:e},r)}function cb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||ut(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:w}=n,v=f.route.loader&&m[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||v){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let w,v=!1,A=null,x=null;n&&(w=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||ab,u&&(c<0&&m===0?(v=!0,x=null):c===m&&(v=!0,x=f.route.hydrateFallbackElement||null)));let C=e.concat(o.slice(0,m+1)),y=()=>{let S;return w?S=A:v?S=x:f.route.Component?S=G.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,G.createElement(ub,{match:f,routeContext:{outlet:d,matches:C,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?G.createElement(lb,{location:n.location,revalidation:n.revalidation,component:A,error:w,children:y(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):y()},null)}var AT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(AT||{}),zc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(zc||{});function hb(t){let e=G.useContext(Tg);return e||ut(!1),e}function db(t){let e=G.useContext(ZP);return e||ut(!1),e}function fb(t){let e=G.useContext(Ri);return e||ut(!1),e}function kT(t){let e=fb(),n=e.matches[e.matches.length-1];return n.route.id||ut(!1),n.route.id}function pb(){var t;let e=G.useContext(IT),n=db(zc.UseRouteError),r=kT(zc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function mb(){let{router:t}=hb(AT.UseNavigateStable),e=kT(zc.UseNavigateStable),n=G.useRef(!1);return RT(()=>{n.current=!0}),G.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pl({fromRouteId:e},s)))},[t,e])}function gb(t){return rb(t.context)}function Mi(t){ut(!1)}function _b(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ti.Pop,navigator:s,static:o=!1,future:a}=t;Ol()&&ut(!1);let u=e.replace(/^\/*/,"/"),c=G.useMemo(()=>({basename:u,navigator:s,static:o,future:pl({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Lo(r));let{pathname:d="/",search:f="",hash:m="",state:w=null,key:v="default"}=r,A=G.useMemo(()=>{let x=Sg(d,u);return x==null?null:{location:{pathname:x,search:f,hash:m,state:w,key:v},navigationType:i}},[u,d,f,m,w,v,i]);return A==null?null:G.createElement(_s.Provider,{value:c},G.createElement(Uh.Provider,{children:n,value:A}))}function yb(t){let{children:e,location:n}=t;return ib(Up(e),n)}new Promise(()=>{});function Up(t,e){e===void 0&&(e=[]);let n=[];return G.Children.forEach(t,(r,i)=>{if(!G.isValidElement(r))return;let s=[...e,i];if(r.type===G.Fragment){n.push.apply(n,Up(r.props.children,s));return}r.type!==Mi&&ut(!1),!r.props.index||!r.props.children||ut(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Up(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $p(){return $p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$p.apply(this,arguments)}function vb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Eb(t,e){return t.button===0&&(!e||e==="_self")&&!wb(t)}const Sb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Tb="6";try{window.__reactRouterVersion=Tb}catch{}const Ib="startTransition",$v=gk[Ib];function Rb(t){let{basename:e,children:n,future:r,window:i}=t,s=G.useRef();s.current==null&&(s.current=kP({window:i,v5Compat:!0}));let o=s.current,[a,u]=G.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=G.useCallback(f=>{c&&$v?$v(()=>u(f)):u(f)},[u,c]);return G.useLayoutEffect(()=>o.listen(d),[o,d]),G.createElement(_b,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Cb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ab=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yo=G.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,m=vb(e,Sb),{basename:w}=G.useContext(_s),v,A=!1;if(typeof c=="string"&&Ab.test(c)&&(v=c,Cb))try{let S=new URL(window.location.href),L=c.startsWith("//")?new URL(S.protocol+c):new URL(c),V=Sg(L.pathname,w);L.origin===S.origin&&V!=null?c=V+L.search+L.hash:A=!0}catch{}let x=eb(c,{relative:i}),C=kb(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:f});function y(S){r&&r(S),S.defaultPrevented||C(S)}return G.createElement("a",$p({},m,{href:v||x,onClick:A||s?r:y,ref:n,target:u}))});var Bv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Bv||(Bv={}));var jv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jv||(jv={}));function kb(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=Bh(),c=$h(),d=CT(t,{relative:o});return G.useCallback(f=>{if(Eb(f,n)){f.preventDefault();let m=r!==void 0?r:jc(c)===jc(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}var zv={};/**
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
 */const NT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const X=function(t,e){if(!t)throw Mo(e)},Mo=function(t){return new Error("Firebase Database ("+NT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const PT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[f],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Pb;const m=s<<2|a>>4;if(r.push(m),c!==64){const w=a<<4&240|c>>2;if(r.push(w),f!==64){const v=c<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Pb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bT=function(t){const e=PT(t);return Ig.encodeByteArray(e,!0)},Wc=function(t){return bT(t).replace(/\./g,"")},Hc=function(t){try{return Ig.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bb(t){return OT(void 0,t)}function OT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ob(n)||(t[n]=OT(t[n],e[n]));return t}function Ob(t){return t!=="__proto__"}/**
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
 */function xb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Db=()=>xb().__FIREBASE_DEFAULTS__,Lb=()=>{if(typeof process>"u"||typeof zv>"u")return;const t=zv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hc(t[1]);return e&&JSON.parse(e)},jh=()=>{try{return Db()||Lb()||Mb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xT=t=>{var e,n;return(n=(e=jh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vb=t=>{const e=xT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},DT=()=>{var t;return(t=jh())===null||t===void 0?void 0:t.config},LT=t=>{var e;return(e=jh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Rg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Fb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wc(JSON.stringify(n)),Wc(JSON.stringify(o)),""].join(".")}/**
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
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function Ub(){var t;const e=(t=jh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $b(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FT(){return NT.NODE_ADMIN===!0}function Bb(){return!Ub()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UT(){try{return typeof indexedDB=="object"}catch{return!1}}function $T(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function jb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const zb="FirebaseError";class Zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zb,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Wb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zn(i,a,r)}}function Wb(t,e){return t.replace(Hb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Hb=/\{\$([^}]+)}/g;/**
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
 */function ml(t){return JSON.parse(t)}function Pt(t){return JSON.stringify(t)}/**
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
 */const BT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ml(Hc(s[0])||""),n=ml(Hc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Gb=function(t){const e=BT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Kb=function(t){const e=BT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Mr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Bp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Kc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wv(s)&&Wv(o)){if(!Kc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wv(t){return t!==null&&typeof t=="object"}/**
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
 */function Vo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class qb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Qb(t,e){const n=new Yb(t,e);return n.subscribe.bind(n)}class Yb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gf),i.error===void 0&&(i.error=gf),i.complete===void 0&&(i.complete=gf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gf(){}function Jb(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Zb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,X(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const eO=1e3,tO=2,nO=4*60*60*1e3,rO=.5;function Hv(t,e=eO,n=tO){const r=e*Math.pow(n,t),i=Math.round(rO*r*(Math.random()-.5)*2);return Math.min(nO,r+i)}/**
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
 */function Pn(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vi="[DEFAULT]";/**
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
 */class iO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Rg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oO(e))try{this.getOrInitializeService({instanceIdentifier:Vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vi){return this.instances.has(e)}getOptions(e=Vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vi){return this.component?this.component.multipleInstances?e:Vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sO(t){return t===Vi?void 0:t}function oO(t){return t.instantiationMode==="EAGER"}/**
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
 */class aO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const lO={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},uO=ve.INFO,cO={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},hO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=cO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=uO,this._logHandler=hO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const dO=(t,e)=>e.some(n=>t instanceof n);let Gv,Kv;function fO(){return Gv||(Gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pO(){return Kv||(Kv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jT=new WeakMap,jp=new WeakMap,zT=new WeakMap,_f=new WeakMap,Ag=new WeakMap;function mO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jT.set(n,t)}).catch(()=>{}),Ag.set(e,t),e}function gO(t){if(jp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jp.set(t,e)}let zp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _O(t){zp=t(zp)}function yO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yf(this),e,...n);return zT.set(r,e.sort?e.sort():[e]),hi(r)}:pO().includes(t)?function(...e){return t.apply(yf(this),e),hi(jT.get(this))}:function(...e){return hi(t.apply(yf(this),e))}}function vO(t){return typeof t=="function"?yO(t):(t instanceof IDBTransaction&&gO(t),dO(t,fO())?new Proxy(t,zp):t)}function hi(t){if(t instanceof IDBRequest)return mO(t);if(_f.has(t))return _f.get(t);const e=vO(t);return e!==t&&(_f.set(t,e),Ag.set(e,t)),e}const yf=t=>Ag.get(t);function WT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=hi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hi(o.result),u.oldVersion,u.newVersion,hi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const wO=["get","getKey","getAll","getAllKeys","count"],EO=["put","add","delete","clear"],vf=new Map;function qv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vf.get(e))return vf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=EO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wO.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return vf.set(e,s),s}_O(t=>({...t,get:(e,n,r)=>qv(e,n)||t.get(e,n,r),has:(e,n)=>!!qv(e,n)||t.has(e,n)}));/**
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
 */class SO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wp="@firebase/app",Qv="0.10.6";/**
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
 */const ts=new xl("@firebase/app"),IO="@firebase/app-compat",RO="@firebase/analytics-compat",CO="@firebase/analytics",AO="@firebase/app-check-compat",kO="@firebase/app-check",NO="@firebase/auth",PO="@firebase/auth-compat",bO="@firebase/database",OO="@firebase/database-compat",xO="@firebase/functions",DO="@firebase/functions-compat",LO="@firebase/installations",MO="@firebase/installations-compat",VO="@firebase/messaging",FO="@firebase/messaging-compat",UO="@firebase/performance",$O="@firebase/performance-compat",BO="@firebase/remote-config",jO="@firebase/remote-config-compat",zO="@firebase/storage",WO="@firebase/storage-compat",HO="@firebase/firestore",GO="@firebase/vertexai-preview",KO="@firebase/firestore-compat",qO="firebase",QO="10.12.3";/**
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
 */const Hp="[DEFAULT]",YO={[Wp]:"fire-core",[IO]:"fire-core-compat",[CO]:"fire-analytics",[RO]:"fire-analytics-compat",[kO]:"fire-app-check",[AO]:"fire-app-check-compat",[NO]:"fire-auth",[PO]:"fire-auth-compat",[bO]:"fire-rtdb",[OO]:"fire-rtdb-compat",[xO]:"fire-fn",[DO]:"fire-fn-compat",[LO]:"fire-iid",[MO]:"fire-iid-compat",[VO]:"fire-fcm",[FO]:"fire-fcm-compat",[UO]:"fire-perf",[$O]:"fire-perf-compat",[BO]:"fire-rc",[jO]:"fire-rc-compat",[zO]:"fire-gcs",[WO]:"fire-gcs-compat",[HO]:"fire-fst",[KO]:"fire-fst-compat",[GO]:"fire-vertex","fire-js":"fire-js",[qO]:"fire-js-all"};/**
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
 */const qc=new Map,XO=new Map,Gp=new Map;function Yv(t,e){try{t.container.addComponent(e)}catch(n){ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(Gp.has(e))return ts.debug(`There were multiple attempts to register component ${e}.`),!1;Gp.set(e,t);for(const n of qc.values())Yv(n,t);for(const n of XO.values())Yv(n,t);return!0}function Dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vr(t){return t.settings!==void 0}/**
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
 */const JO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},di=new ys("app","Firebase",JO);/**
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
 */class ZO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=QO;function HT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw di.create("bad-app-name",{appName:String(i)});if(n||(n=DT()),!n)throw di.create("no-options");const s=qc.get(i);if(s){if(Kc(n,s.options)&&Kc(r,s.config))return s;throw di.create("duplicate-app",{appName:i})}const o=new aO(i);for(const u of Gp.values())o.addComponent(u);const a=new ZO(n,r,o);return qc.set(i,a),a}function GT(t=Hp){const e=qc.get(t);if(!e&&t===Hp&&DT())return HT();if(!e)throw di.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let i=(r=YO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ts.warn(a.join(" "));return}Xn(new bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ex="firebase-heartbeat-database",tx=1,gl="firebase-heartbeat-store";let wf=null;function KT(){return wf||(wf=WT(ex,tx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gl)}catch(n){console.warn(n)}}}}).catch(t=>{throw di.create("idb-open",{originalErrorMessage:t.message})})),wf}async function nx(t){try{const n=(await KT()).transaction(gl),r=await n.objectStore(gl).get(qT(t));return await n.done,r}catch(e){if(e instanceof Zn)ts.warn(e.message);else{const n=di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ts.warn(n.message)}}}async function Xv(t,e){try{const r=(await KT()).transaction(gl,"readwrite");await r.objectStore(gl).put(e,qT(t)),await r.done}catch(n){if(n instanceof Zn)ts.warn(n.message);else{const r=di.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ts.warn(r.message)}}}function qT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rx=1024,ix=30*24*60*60*1e3;class sx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ax(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ix}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jv(),{heartbeatsToSend:r,unsentEntries:i}=ox(this._heartbeatsCache.heartbeats),s=Wc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Jv(){return new Date().toISOString().substring(0,10)}function ox(t,e=rx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ax{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UT()?$T().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zv(t){return Wc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lx(t){Xn(new bn("platform-logger",e=>new SO(e),"PRIVATE")),Xn(new bn("heartbeat",e=>new sx(e),"PRIVATE")),cn(Wp,Qv,t),cn(Wp,Qv,"esm2017"),cn("fire-js","")}lx("");var ux="firebase",cx="10.12.3";/**
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
 */cn(ux,cx,"app");const QT="@firebase/installations",kg="0.6.8";/**
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
 */const YT=1e4,XT=`w:${kg}`,JT="FIS_v2",hx="https://firebaseinstallations.googleapis.com/v1",dx=60*60*1e3,fx="installations",px="Installations";/**
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
 */const mx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ns=new ys(fx,px,mx);function ZT(t){return t instanceof Zn&&t.code.includes("request-failed")}/**
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
 */function eI({projectId:t}){return`${hx}/projects/${t}/installations`}function tI(t){return{token:t.token,requestStatus:2,expiresIn:_x(t.expiresIn),creationTime:Date.now()}}async function nI(t,e){const r=(await e.json()).error;return ns.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function rI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function gx(t,{refreshToken:e}){const n=rI(t);return n.append("Authorization",yx(e)),n}async function iI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _x(t){return Number(t.replace("s","000"))}function yx(t){return`${JT} ${t}`}/**
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
 */async function vx({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=eI(t),i=rI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:JT,appId:t.appId,sdkVersion:XT},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await iI(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:tI(c.authToken)}}else throw await nI("Create Installation",u)}/**
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
 */function sI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function wx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ex=/^[cdef][\w-]{21}$/,Kp="";function Sx(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Tx(t);return Ex.test(n)?n:Kp}catch{return Kp}}function Tx(t){return wx(t).substr(0,22)}/**
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
 */function Wh(t){return`${t.appName}!${t.appId}`}/**
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
 */const oI=new Map;function aI(t,e){const n=Wh(t);lI(n,e),Ix(n,e)}function lI(t,e){const n=oI.get(t);if(n)for(const r of n)r(e)}function Ix(t,e){const n=Rx();n&&n.postMessage({key:t,fid:e}),Cx()}let zi=null;function Rx(){return!zi&&"BroadcastChannel"in self&&(zi=new BroadcastChannel("[Firebase] FID Change"),zi.onmessage=t=>{lI(t.data.key,t.data.fid)}),zi}function Cx(){oI.size===0&&zi&&(zi.close(),zi=null)}/**
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
 */const Ax="firebase-installations-database",kx=1,rs="firebase-installations-store";let Ef=null;function Ng(){return Ef||(Ef=WT(Ax,kx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rs)}}})),Ef}async function Qc(t,e){const n=Wh(t),i=(await Ng()).transaction(rs,"readwrite"),s=i.objectStore(rs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&aI(t,e.fid),e}async function uI(t){const e=Wh(t),r=(await Ng()).transaction(rs,"readwrite");await r.objectStore(rs).delete(e),await r.done}async function Hh(t,e){const n=Wh(t),i=(await Ng()).transaction(rs,"readwrite"),s=i.objectStore(rs),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&aI(t,a.fid),a}/**
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
 */async function Pg(t){let e;const n=await Hh(t.appConfig,r=>{const i=Nx(r),s=Px(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Kp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Nx(t){const e=t||{fid:Sx(),registrationStatus:0};return cI(e)}function Px(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ns.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=bx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ox(t)}:{installationEntry:e}}async function bx(t,e){try{const n=await vx(t,e);return Qc(t.appConfig,n)}catch(n){throw ZT(n)&&n.customData.serverCode===409?await uI(t.appConfig):await Qc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ox(t){let e=await e0(t.appConfig);for(;e.registrationStatus===1;)await sI(100),e=await e0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Pg(t);return r||n}return e}function e0(t){return Hh(t,e=>{if(!e)throw ns.create("installation-not-found");return cI(e)})}function cI(t){return xx(t)?{fid:t.fid,registrationStatus:0}:t}function xx(t){return t.registrationStatus===1&&t.registrationTime+YT<Date.now()}/**
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
 */async function Dx({appConfig:t,heartbeatServiceProvider:e},n){const r=Lx(t,n),i=gx(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:XT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await iI(()=>fetch(r,a));if(u.ok){const c=await u.json();return tI(c)}else throw await nI("Generate Auth Token",u)}function Lx(t,{fid:e}){return`${eI(t)}/${e}/authTokens:generate`}/**
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
 */async function bg(t,e=!1){let n;const r=await Hh(t.appConfig,s=>{if(!hI(s))throw ns.create("not-registered");const o=s.authToken;if(!e&&Fx(o))return s;if(o.requestStatus===1)return n=Mx(t,e),s;{if(!navigator.onLine)throw ns.create("app-offline");const a=$x(s);return n=Vx(t,a),a}});return n?await n:r.authToken}async function Mx(t,e){let n=await t0(t.appConfig);for(;n.authToken.requestStatus===1;)await sI(100),n=await t0(t.appConfig);const r=n.authToken;return r.requestStatus===0?bg(t,e):r}function t0(t){return Hh(t,e=>{if(!hI(e))throw ns.create("not-registered");const n=e.authToken;return Bx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Vx(t,e){try{const n=await Dx(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Qc(t.appConfig,r),n}catch(n){if(ZT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await uI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qc(t.appConfig,r)}throw n}}function hI(t){return t!==void 0&&t.registrationStatus===2}function Fx(t){return t.requestStatus===2&&!Ux(t)}function Ux(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+dx}function $x(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Bx(t){return t.requestStatus===1&&t.requestTime+YT<Date.now()}/**
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
 */async function jx(t){const e=t,{installationEntry:n,registrationPromise:r}=await Pg(e);return r?r.catch(console.error):bg(e).catch(console.error),n.fid}/**
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
 */async function zx(t,e=!1){const n=t;return await Wx(n),(await bg(n,e)).token}async function Wx(t){const{registrationPromise:e}=await Pg(t);e&&await e}/**
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
 */function Hx(t){if(!t||!t.options)throw Sf("App Configuration");if(!t.name)throw Sf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Sf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Sf(t){return ns.create("missing-app-config-values",{valueName:t})}/**
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
 */const dI="installations",Gx="installations-internal",Kx=t=>{const e=t.getProvider("app").getImmediate(),n=Hx(e),r=Dl(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},qx=t=>{const e=t.getProvider("app").getImmediate(),n=Dl(e,dI).getImmediate();return{getId:()=>jx(n),getToken:i=>zx(n,i)}};function Qx(){Xn(new bn(dI,Kx,"PUBLIC")),Xn(new bn(Gx,qx,"PRIVATE"))}Qx();cn(QT,kg);cn(QT,kg,"esm2017");/**
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
 */const n0="analytics",Yx="firebase_id",Xx="origin",Jx=60*1e3,Zx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Og="https://www.googletagmanager.com/gtag/js";/**
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
 */const hn=new xl("@firebase/analytics");/**
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
 */const eD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},An=new ys("analytics","Analytics",eD);/**
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
 */function tD(t){if(!t.startsWith(Og)){const e=An.create("invalid-gtag-resource",{gtagURL:t});return hn.warn(e.message),""}return t}function fI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function nD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function rD(t,e){const n=nD("firebase-js-sdk-policy",{createScriptURL:tD}),r=document.createElement("script"),i=`${Og}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function iD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function sD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await fI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){hn.error(a)}t("config",i,s)}async function oD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await fI(n);for(const u of o){const c=a.find(f=>f.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){hn.error(s)}}function aD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await oD(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await sD(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){hn.error(a)}}return i}function lD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=aD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function uD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Og)&&n.src.includes(t))return n;return null}/**
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
 */const cD=30,hD=1e3;class dD{constructor(e={},n=hD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const pI=new dD;function fD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function pD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:fD(r)},s=Zx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw An.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function mD(t,e=pI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw An.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw An.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new yD;return setTimeout(async()=>{a.abort()},Jx),mI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function mI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=pI){var s;const{appId:o,measurementId:a}=t;try{await gD(r,e)}catch(u){if(a)return hn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await pD(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!_D(c)){if(i.deleteThrottleMetadata(o),a)return hn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Hv(n,i.intervalMillis,cD):Hv(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),hn.debug(`Calling attemptFetch again in ${d} millis`),mI(t,f,r,i)}}function gD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(An.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _D(t){if(!(t instanceof Zn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class yD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function wD(){if(UT())try{await $T()}catch(t){return hn.warn(An.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return hn.warn(An.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ED(t,e,n,r,i,s,o){var a;const u=mD(t);u.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&hn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>hn.error(w)),e.push(u);const c=wD().then(w=>{if(w)return r.getId()}),[d,f]=await Promise.all([u,c]);uD(s)||rD(s,d.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[Xx]="firebase",m.update=!0,f!=null&&(m[Yx]=f),i("config",d.measurementId,m),d.measurementId}/**
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
 */class SD{constructor(e){this.app=e}_delete(){return delete Va[this.app.options.appId],Promise.resolve()}}let Va={},r0=[];const i0={};let Tf="dataLayer",TD="gtag",s0,gI,o0=!1;function ID(){const t=[];if(MT()&&t.push("This is a browser extension environment."),jb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=An.create("invalid-analytics-context",{errorInfo:e});hn.warn(n.message)}}function RD(t,e,n){ID();const r=t.options.appId;if(!r)throw An.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)hn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw An.create("no-api-key");if(Va[r]!=null)throw An.create("already-exists",{id:r});if(!o0){iD(Tf);const{wrappedGtag:s,gtagCore:o}=lD(Va,r0,i0,Tf,TD);gI=s,s0=o,o0=!0}return Va[r]=ED(t,r0,i0,e,s0,Tf,n),new SD(t)}function CD(t,e,n,r){t=Pn(t),vD(gI,Va[t.app.options.appId],e,n,r).catch(i=>hn.error(i))}const a0="@firebase/analytics",l0="0.10.5";function AD(){Xn(new bn(n0,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return RD(r,i,n)},"PUBLIC")),Xn(new bn("analytics-internal",t,"PRIVATE")),cn(a0,l0),cn(a0,l0,"esm2017");function t(e){try{const n=e.getProvider(n0).getImmediate();return{logEvent:(r,i,s)=>CD(n,r,i,s)}}catch(n){throw An.create("interop-component-reg-failed",{reason:n})}}}AD();function xg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function _I(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kD=_I,yI=new ys("auth","Firebase",_I());/**
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
 */const Yc=new xl("@firebase/auth");function ND(t,...e){Yc.logLevel<=ve.WARN&&Yc.warn(`Auth (${vs}): ${t}`,...e)}function cc(t,...e){Yc.logLevel<=ve.ERROR&&Yc.error(`Auth (${vs}): ${t}`,...e)}/**
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
 */function Or(t,...e){throw Dg(t,...e)}function ar(t,...e){return Dg(t,...e)}function vI(t,e,n){const r=Object.assign(Object.assign({},kD()),{[e]:n});return new ys("auth","Firebase",r).create(e,{appName:t.name})}function fi(t){return vI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yI.create(t,...e)}function de(t,e,...n){if(!t)throw Dg(e,...n)}function wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cc(e),new Error(e)}function xr(t,e){t||wr(e)}/**
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
 */function qp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PD(){return u0()==="http:"||u0()==="https:"}function u0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function bD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PD()||MT()||"connection"in navigator)?navigator.onLine:!0}function OD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ll{constructor(e,n){this.shortDelay=e,this.longDelay=n,xr(n>e,"Short delay should be less than long delay!"),this.isMobile=Cg()||VT()}get(){return bD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lg(t,e){xr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const DD=new Ll(3e4,6e4);function Ml(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,n,r,i={}){return EI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),wI.fetch()(TI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function EI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xD),e);try{const i=new MD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Fu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Fu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw vI(t,d,c);Or(t,d)}}catch(i){if(i instanceof Zn)throw i;Or(t,"network-request-failed",{message:String(i)})}}async function SI(t,e,n,r,i={}){const s=await ws(t,e,n,r,i);return"mfaPendingCredential"in s&&Or(t,"multi-factor-auth-required",{_serverResponse:s}),s}function TI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lg(t.config,i):`${t.config.apiScheme}://${i}`}function LD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ar(this.auth,"network-request-failed")),DD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ar(t,e,r);return i.customData._tokenResponse=n,i}function c0(t){return t!==void 0&&t.enterprise!==void 0}class VD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return LD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function FD(t,e){return ws(t,"GET","/v2/recaptchaConfig",Ml(t,e))}/**
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
 */async function UD(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function II(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $D(t,e=!1){const n=Pn(t),r=await n.getIdToken(e),i=Mg(r);de(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fa(If(i.auth_time)),issuedAtTime:Fa(If(i.iat)),expirationTime:Fa(If(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function If(t){return Number(t)*1e3}function Mg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hc(n);return i?JSON.parse(i):(cc("Failed to decode base64 JWT payload"),null)}catch(i){return cc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function h0(t){const e=Mg(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _l(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zn&&BD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _l(t,II(n,{idToken:r}));de(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RI(s.providerUserInfo):[],a=WD(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Qp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function zD(t){const e=Pn(t);await Xc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RI(t){return t.map(e=>{var{providerId:n}=e,r=xg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function HD(t,e){const n=await EI(t,{},async()=>{const r=Vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=TI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GD(t,e){return ws(t,"POST","/v2/accounts:revokeToken",Ml(t,e))}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):h0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=h0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ro;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(de(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(de(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
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
 */function zr(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _l(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $D(this,e)}reload(){return zD(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vr(this.auth.app))return Promise.reject(fi(this.auth));const e=await this.getIdToken();return await _l(this,UD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:L,isAnonymous:V,providerData:F,stsTokenManager:E}=n;de(S&&E,e,"internal-error");const _=ro.fromJSON(this.name,E);de(typeof S=="string",e,"internal-error"),zr(f,e.name),zr(m,e.name),de(typeof L=="boolean",e,"internal-error"),de(typeof V=="boolean",e,"internal-error"),zr(w,e.name),zr(v,e.name),zr(A,e.name),zr(x,e.name),zr(C,e.name),zr(y,e.name);const T=new Er({uid:S,auth:e,email:m,emailVerified:L,displayName:f,isAnonymous:V,photoURL:v,phoneNumber:w,tenantId:A,stsTokenManager:_,createdAt:C,lastLoginAt:y});return F&&Array.isArray(F)&&(T.providerData=F.map(R=>Object.assign({},R))),x&&(T._redirectEventId=x),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new ro;i.updateFromServerResponse(n);const s=new Er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];de(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?RI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ro;a.updateFromIdToken(r);const u=new Er({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Qp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const d0=new Map;function Sr(t){xr(t instanceof Function,"Expected a class definition");let e=d0.get(t);return e?(xr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,d0.set(t,e),e)}/**
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
 */class CI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}CI.type="NONE";const f0=CI;/**
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
 */function hc(t,e,n){return`firebase:${t}:${e}:${n}`}class io{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hc(this.userKey,i.apiKey,s),this.fullPersistenceKey=hc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new io(Sr(f0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Sr(f0);const o=hc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Er._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new io(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new io(s,e,r))}}/**
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
 */function p0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bI(e))return"Blackberry";if(OI(e))return"Webos";if(Vg(e))return"Safari";if((e.includes("chrome/")||kI(e))&&!e.includes("edge/"))return"Chrome";if(PI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function AI(t=Dt()){return/firefox\//i.test(t)}function Vg(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kI(t=Dt()){return/crios\//i.test(t)}function NI(t=Dt()){return/iemobile/i.test(t)}function PI(t=Dt()){return/android/i.test(t)}function bI(t=Dt()){return/blackberry/i.test(t)}function OI(t=Dt()){return/webos/i.test(t)}function Gh(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KD(t=Dt()){var e;return Gh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qD(){return $b()&&document.documentMode===10}function xI(t=Dt()){return Gh(t)||PI(t)||OI(t)||bI(t)||/windows phone/i.test(t)||NI(t)}function QD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function DI(t,e=[]){let n;switch(t){case"Browser":n=p0(Dt());break;case"Worker":n=`${p0(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
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
 */class YD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function XD(t,e={}){return ws(t,"GET","/v2/passwordPolicy",Ml(t,e))}/**
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
 */const JD=6;class ZD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:JD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class eL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new m0(this),this.idTokenSubscription=new m0(this),this.beforeStateQueue=new YD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await io.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await II(this,{idToken:e}),r=await Er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(vr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vr(this.app))return Promise.reject(fi(this));const n=e?Pn(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vr(this.app)?Promise.reject(fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vr(this.app)?Promise.reject(fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XD(this),n=new ZD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[Sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ND(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fo(t){return Pn(t)}class m0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qb(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Kh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tL(t){Kh=t}function LI(t){return Kh.loadJS(t)}function nL(){return Kh.recaptchaEnterpriseScript}function rL(){return Kh.gapiScript}function iL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sL="recaptcha-enterprise",oL="NO_RECAPTCHA";class aL{constructor(e){this.type=sL,this.auth=Fo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{FD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new VD(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;c0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(oL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&c0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=nL();u.length!==0&&(u+=a),LI(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function g0(t,e,n,r=!1){const i=new aL(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function lL(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await g0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await g0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function uL(t,e){const n=Dl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Kc(s,e??{}))return i;Or(i,"already-initialized")}return n.initialize({options:e})}function cL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hL(t,e,n){const r=Fo(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=MI(e),{host:o,port:a}=dL(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),fL()}function MI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dL(t){const e=MI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:_0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:_0(o)}}}function _0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class VI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,n){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}/**
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
 */async function so(t,e){return SI(t,"POST","/v1/accounts:signInWithIdp",Ml(t,e))}/**
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
 */const pL="http://localhost";class is extends VI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Or("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new is(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return so(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,so(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,so(e,n)}buildRequest(){const e={requestUri:pL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vo(n)}return e}}/**
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
 */class FI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vl extends FI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qr extends Vl{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qr.PROVIDER_ID="facebook.com";/**
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
 */class Yr extends Vl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.GOOGLE_SIGN_IN_METHOD="google.com";Yr.PROVIDER_ID="google.com";/**
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
 */class Xr extends Vl{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.GITHUB_SIGN_IN_METHOD="github.com";Xr.PROVIDER_ID="github.com";/**
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
 */class Jr extends Vl{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jr.credential(n,r)}catch{return null}}}Jr.TWITTER_SIGN_IN_METHOD="twitter.com";Jr.PROVIDER_ID="twitter.com";/**
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
 */async function mL(t,e){return SI(t,"POST","/v1/accounts:signUp",Ml(t,e))}/**
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
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Er._fromIdTokenResponse(e,r,i),o=y0(r);return new ss({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=y0(r);return new ss({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function y0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Jc extends Zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Jc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Jc(e,n,r,i)}}function UI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Jc._fromErrorAndOperation(t,s,e,r):s})}async function gL(t,e,n=!1){const r=await _l(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",r)}/**
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
 */async function _L(t,e,n=!1){const{auth:r}=t;if(vr(r.app))return Promise.reject(fi(r));const i="reauthenticate";try{const s=await _l(t,UI(r,i,e,t),n);de(s.idToken,r,"internal-error");const o=Mg(s.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),ss._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Or(r,"user-mismatch"),s}}/**
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
 */async function yL(t,e,n=!1){if(vr(t.app))return Promise.reject(fi(t));const r="signIn",i=await UI(t,r,e),s=await ss._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
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
 */async function vL(t){const e=Fo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wL(t,e,n){if(vr(t.app))return Promise.reject(fi(t));const r=Fo(t),o=await lL(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mL).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&vL(t),u}),a=await ss._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function EL(t,e,n,r){return Pn(t).onIdTokenChanged(e,n,r)}function SL(t,e,n){return Pn(t).beforeAuthStateChanged(e,n)}const Zc="__sak";/**
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
 */class $I{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zc,"1"),this.storage.removeItem(Zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function TL(){const t=Dt();return Vg(t)||Gh(t)}const IL=1e3,RL=10;class BI extends $I{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TL()&&QD(),this.fallbackToPolling=xI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}BI.type="LOCAL";const CL=BI;/**
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
 */class jI extends $I{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jI.type="SESSION";const zI=jI;/**
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
 */function AL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await AL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qh.receivers=[];/**
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
 */function Fg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Fg("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function lr(){return window}function NL(t){lr().location.href=t}/**
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
 */function WI(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function PL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OL(){return WI()?self:null}/**
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
 */const HI="firebaseLocalStorageDb",xL=1,eh="firebaseLocalStorage",GI="fbase_key";class Fl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qh(t,e){return t.transaction([eh],e?"readwrite":"readonly").objectStore(eh)}function DL(){const t=indexedDB.deleteDatabase(HI);return new Fl(t).toPromise()}function Yp(){const t=indexedDB.open(HI,xL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(eh,{keyPath:GI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(eh)?e(r):(r.close(),await DL(),e(await Yp()))})})}async function v0(t,e,n){const r=Qh(t,!0).put({[GI]:e,value:n});return new Fl(r).toPromise()}async function LL(t,e){const n=Qh(t,!1).get(e),r=await new Fl(n).toPromise();return r===void 0?null:r.value}function w0(t,e){const n=Qh(t,!0).delete(e);return new Fl(n).toPromise()}const ML=800,VL=3;class KI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>VL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qh._getInstance(OL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PL(),!this.activeServiceWorker)return;this.sender=new kL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yp();return await v0(e,Zc,"1"),await w0(e,Zc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>v0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qh(i,!1).getAll();return new Fl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ML)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KI.type="LOCAL";const FL=KI;new Ll(3e4,6e4);/**
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
 */function UL(t,e){return e?Sr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ug extends VI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return so(e,this._buildIdpRequest())}_linkToIdToken(e,n){return so(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return so(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $L(t){return yL(t.auth,new Ug(t),t.bypassAuthState)}function BL(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),_L(n,new Ug(t),t.bypassAuthState)}async function jL(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),gL(n,new Ug(t),t.bypassAuthState)}/**
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
 */class qI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $L;case"linkViaPopup":case"linkViaRedirect":return jL;case"reauthViaPopup":case"reauthViaRedirect":return BL;default:Or(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zL=new Ll(2e3,1e4);class qs extends qI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qs.currentPopupAction&&qs.currentPopupAction.cancel(),qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=Fg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zL.get())};e()}}qs.currentPopupAction=null;/**
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
 */const WL="pendingRedirect",dc=new Map;class HL extends qI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dc.get(this.auth._key());if(!e){try{const r=await GL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dc.set(this.auth._key(),e)}return this.bypassAuthState||dc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GL(t,e){const n=QL(e),r=qL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function KL(t,e){dc.set(t._key(),e)}function qL(t){return Sr(t._redirectPersistence)}function QL(t){return hc(WL,t.config.apiKey,t.name)}async function YL(t,e,n=!1){if(vr(t.app))return Promise.reject(fi(t));const r=Fo(t),i=UL(r,e),o=await new HL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const XL=10*60*1e3;class JL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!QI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ar(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XL&&this.cachedEventUids.clear(),this.cachedEventUids.has(E0(e))}saveEventToCache(e){this.cachedEventUids.add(E0(e)),this.lastProcessedEventTime=Date.now()}}function E0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function QI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return QI(t);default:return!1}}/**
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
 */async function eM(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
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
 */const tM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nM=/^https?/;async function rM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eM(t);for(const n of e)try{if(iM(n))return}catch{}Or(t,"unauthorized-domain")}function iM(t){const e=qp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nM.test(n))return!1;if(tM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const sM=new Ll(3e4,6e4);function S0(){const t=lr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oM(t){return new Promise((e,n)=>{var r,i,s;function o(){S0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{S0(),n(ar(t,"network-request-failed"))},timeout:sM.get()})}if(!((i=(r=lr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=lr().gapi)===null||s===void 0)&&s.load)o();else{const a=iL("iframefcb");return lr()[a]=()=>{gapi.load?o():n(ar(t,"network-request-failed"))},LI(`${rL()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw fc=null,e})}let fc=null;function aM(t){return fc=fc||oM(t),fc}/**
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
 */const lM=new Ll(5e3,15e3),uM="__/auth/iframe",cM="emulator/auth/iframe",hM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fM(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lg(e,cM):`https://${t.config.authDomain}/${uM}`,r={apiKey:e.apiKey,appName:t.name,v:vs},i=dM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vo(r).slice(1)}`}async function pM(t){const e=await aM(t),n=lr().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:fM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ar(t,"network-request-failed"),a=lr().setTimeout(()=>{s(o)},lM.get());function u(){lr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const mM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gM=500,_M=600,yM="_blank",vM="http://localhost";class T0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wM(t,e,n,r=gM,i=_M){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},mM),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Dt().toLowerCase();n&&(a=kI(c)?yM:n),AI(c)&&(e=e||vM,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,v])=>`${m}${w}=${v},`,"");if(KD(c)&&a!=="_self")return EM(e||"",a),new T0(null);const f=window.open(e||"",a,d);de(f,t,"popup-blocked");try{f.focus()}catch{}return new T0(f)}function EM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SM="__/auth/handler",TM="emulator/auth/handler",IM=encodeURIComponent("fac");async function I0(t,e,n,r,i,s){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:i};if(e instanceof FI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Vl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${IM}=${encodeURIComponent(u)}`:"";return`${RM(t)}?${Vo(a).slice(1)}${c}`}function RM({config:t}){return t.emulator?Lg(t,TM):`https://${t.authDomain}/${SM}`}/**
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
 */const Rf="webStorageSupport";class CM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zI,this._completeRedirectFn=YL,this._overrideRedirectResult=KL}async _openPopup(e,n,r,i){var s;xr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await I0(e,n,r,qp(),i);return wM(e,o,Fg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await I0(e,n,r,qp(),i);return NL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pM(e),r=new JL(e);return n.register("authEvent",i=>(de(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rf,{type:Rf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rf];o!==void 0&&n(!!o),Or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xI()||Vg()||Gh()}}const AM=CM;var R0="@firebase/auth",C0="1.7.5";/**
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
 */class kM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PM(t){Xn(new bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DI(t)},c=new eL(r,i,s,u);return cL(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xn(new bn("auth-internal",e=>{const n=Fo(e.getProvider("auth").getImmediate());return(r=>new kM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(R0,C0,NM(t)),cn(R0,C0,"esm2017")}/**
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
 */const bM=5*60,OM=LT("authIdTokenMaxAge")||bM;let A0=null;const xM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OM)return;const i=n==null?void 0:n.token;A0!==i&&(A0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function DM(t=GT()){const e=Dl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uL(t,{popupRedirectResolver:AM,persistence:[FL,CL,zI]}),r=LT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=xM(s.toString());SL(n,o,()=>o(n.currentUser)),EL(n,a=>o(a))}}const i=xT("auth");return i&&hL(n,`http://${i}`),n}function LM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ar("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",LM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PM("Browser");var k0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function T(){}T.prototype=_.prototype,E.D=_.prototype,E.prototype=new T,E.prototype.constructor=E,E.C=function(R,k,b){for(var I=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)I[Me-2]=arguments[Me];return _.prototype[k].apply(R,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,T){T||(T=0);var R=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)R[k]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(k=0;16>k;++k)R[k]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=E.g[0],T=E.g[1],k=E.g[2];var b=E.g[3],I=_+(b^T&(k^b))+R[0]+3614090360&4294967295;_=T+(I<<7&4294967295|I>>>25),I=b+(k^_&(T^k))+R[1]+3905402710&4294967295,b=_+(I<<12&4294967295|I>>>20),I=k+(T^b&(_^T))+R[2]+606105819&4294967295,k=b+(I<<17&4294967295|I>>>15),I=T+(_^k&(b^_))+R[3]+3250441966&4294967295,T=k+(I<<22&4294967295|I>>>10),I=_+(b^T&(k^b))+R[4]+4118548399&4294967295,_=T+(I<<7&4294967295|I>>>25),I=b+(k^_&(T^k))+R[5]+1200080426&4294967295,b=_+(I<<12&4294967295|I>>>20),I=k+(T^b&(_^T))+R[6]+2821735955&4294967295,k=b+(I<<17&4294967295|I>>>15),I=T+(_^k&(b^_))+R[7]+4249261313&4294967295,T=k+(I<<22&4294967295|I>>>10),I=_+(b^T&(k^b))+R[8]+1770035416&4294967295,_=T+(I<<7&4294967295|I>>>25),I=b+(k^_&(T^k))+R[9]+2336552879&4294967295,b=_+(I<<12&4294967295|I>>>20),I=k+(T^b&(_^T))+R[10]+4294925233&4294967295,k=b+(I<<17&4294967295|I>>>15),I=T+(_^k&(b^_))+R[11]+2304563134&4294967295,T=k+(I<<22&4294967295|I>>>10),I=_+(b^T&(k^b))+R[12]+1804603682&4294967295,_=T+(I<<7&4294967295|I>>>25),I=b+(k^_&(T^k))+R[13]+4254626195&4294967295,b=_+(I<<12&4294967295|I>>>20),I=k+(T^b&(_^T))+R[14]+2792965006&4294967295,k=b+(I<<17&4294967295|I>>>15),I=T+(_^k&(b^_))+R[15]+1236535329&4294967295,T=k+(I<<22&4294967295|I>>>10),I=_+(k^b&(T^k))+R[1]+4129170786&4294967295,_=T+(I<<5&4294967295|I>>>27),I=b+(T^k&(_^T))+R[6]+3225465664&4294967295,b=_+(I<<9&4294967295|I>>>23),I=k+(_^T&(b^_))+R[11]+643717713&4294967295,k=b+(I<<14&4294967295|I>>>18),I=T+(b^_&(k^b))+R[0]+3921069994&4294967295,T=k+(I<<20&4294967295|I>>>12),I=_+(k^b&(T^k))+R[5]+3593408605&4294967295,_=T+(I<<5&4294967295|I>>>27),I=b+(T^k&(_^T))+R[10]+38016083&4294967295,b=_+(I<<9&4294967295|I>>>23),I=k+(_^T&(b^_))+R[15]+3634488961&4294967295,k=b+(I<<14&4294967295|I>>>18),I=T+(b^_&(k^b))+R[4]+3889429448&4294967295,T=k+(I<<20&4294967295|I>>>12),I=_+(k^b&(T^k))+R[9]+568446438&4294967295,_=T+(I<<5&4294967295|I>>>27),I=b+(T^k&(_^T))+R[14]+3275163606&4294967295,b=_+(I<<9&4294967295|I>>>23),I=k+(_^T&(b^_))+R[3]+4107603335&4294967295,k=b+(I<<14&4294967295|I>>>18),I=T+(b^_&(k^b))+R[8]+1163531501&4294967295,T=k+(I<<20&4294967295|I>>>12),I=_+(k^b&(T^k))+R[13]+2850285829&4294967295,_=T+(I<<5&4294967295|I>>>27),I=b+(T^k&(_^T))+R[2]+4243563512&4294967295,b=_+(I<<9&4294967295|I>>>23),I=k+(_^T&(b^_))+R[7]+1735328473&4294967295,k=b+(I<<14&4294967295|I>>>18),I=T+(b^_&(k^b))+R[12]+2368359562&4294967295,T=k+(I<<20&4294967295|I>>>12),I=_+(T^k^b)+R[5]+4294588738&4294967295,_=T+(I<<4&4294967295|I>>>28),I=b+(_^T^k)+R[8]+2272392833&4294967295,b=_+(I<<11&4294967295|I>>>21),I=k+(b^_^T)+R[11]+1839030562&4294967295,k=b+(I<<16&4294967295|I>>>16),I=T+(k^b^_)+R[14]+4259657740&4294967295,T=k+(I<<23&4294967295|I>>>9),I=_+(T^k^b)+R[1]+2763975236&4294967295,_=T+(I<<4&4294967295|I>>>28),I=b+(_^T^k)+R[4]+1272893353&4294967295,b=_+(I<<11&4294967295|I>>>21),I=k+(b^_^T)+R[7]+4139469664&4294967295,k=b+(I<<16&4294967295|I>>>16),I=T+(k^b^_)+R[10]+3200236656&4294967295,T=k+(I<<23&4294967295|I>>>9),I=_+(T^k^b)+R[13]+681279174&4294967295,_=T+(I<<4&4294967295|I>>>28),I=b+(_^T^k)+R[0]+3936430074&4294967295,b=_+(I<<11&4294967295|I>>>21),I=k+(b^_^T)+R[3]+3572445317&4294967295,k=b+(I<<16&4294967295|I>>>16),I=T+(k^b^_)+R[6]+76029189&4294967295,T=k+(I<<23&4294967295|I>>>9),I=_+(T^k^b)+R[9]+3654602809&4294967295,_=T+(I<<4&4294967295|I>>>28),I=b+(_^T^k)+R[12]+3873151461&4294967295,b=_+(I<<11&4294967295|I>>>21),I=k+(b^_^T)+R[15]+530742520&4294967295,k=b+(I<<16&4294967295|I>>>16),I=T+(k^b^_)+R[2]+3299628645&4294967295,T=k+(I<<23&4294967295|I>>>9),I=_+(k^(T|~b))+R[0]+4096336452&4294967295,_=T+(I<<6&4294967295|I>>>26),I=b+(T^(_|~k))+R[7]+1126891415&4294967295,b=_+(I<<10&4294967295|I>>>22),I=k+(_^(b|~T))+R[14]+2878612391&4294967295,k=b+(I<<15&4294967295|I>>>17),I=T+(b^(k|~_))+R[5]+4237533241&4294967295,T=k+(I<<21&4294967295|I>>>11),I=_+(k^(T|~b))+R[12]+1700485571&4294967295,_=T+(I<<6&4294967295|I>>>26),I=b+(T^(_|~k))+R[3]+2399980690&4294967295,b=_+(I<<10&4294967295|I>>>22),I=k+(_^(b|~T))+R[10]+4293915773&4294967295,k=b+(I<<15&4294967295|I>>>17),I=T+(b^(k|~_))+R[1]+2240044497&4294967295,T=k+(I<<21&4294967295|I>>>11),I=_+(k^(T|~b))+R[8]+1873313359&4294967295,_=T+(I<<6&4294967295|I>>>26),I=b+(T^(_|~k))+R[15]+4264355552&4294967295,b=_+(I<<10&4294967295|I>>>22),I=k+(_^(b|~T))+R[6]+2734768916&4294967295,k=b+(I<<15&4294967295|I>>>17),I=T+(b^(k|~_))+R[13]+1309151649&4294967295,T=k+(I<<21&4294967295|I>>>11),I=_+(k^(T|~b))+R[4]+4149444226&4294967295,_=T+(I<<6&4294967295|I>>>26),I=b+(T^(_|~k))+R[11]+3174756917&4294967295,b=_+(I<<10&4294967295|I>>>22),I=k+(_^(b|~T))+R[2]+718787259&4294967295,k=b+(I<<15&4294967295|I>>>17),I=T+(b^(k|~_))+R[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+k&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var T=_-this.blockSize,R=this.B,k=this.h,b=0;b<_;){if(k==0)for(;b<=T;)i(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<_;)if(R[k++]=E.charCodeAt(b++),k==this.blockSize){i(this,R),k=0;break}}else for(;b<_;)if(R[k++]=E[b++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var T=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=T&255,T/=256;for(this.u(E),E=Array(16),_=T=0;4>_;++_)for(var R=0;32>R;R+=8)E[T++]=this.g[_]>>>R&255;return E};function s(E,_){var T=a;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=_(E)}function o(E,_){this.h=_;for(var T=[],R=!0,k=E.length-1;0<=k;k--){var b=E[k]|0;R&&b==_||(T[k]=b,R=!1)}this.g=T}var a={};function u(E){return-128<=E&&128>E?s(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return x(c(-E));for(var _=[],T=1,R=0;E>=T;R++)_[R]=E/T|0,T*=4294967296;return new o(_,0)}function d(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return x(d(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(_,8)),R=f,k=0;k<E.length;k+=8){var b=Math.min(8,E.length-k),I=parseInt(E.substring(k,k+b),_);8>b?(b=c(Math.pow(_,b)),R=R.j(b).add(c(I))):(R=R.j(T),R=R.add(c(I)))}return R}var f=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-x(this).m();for(var E=0,_=1,T=0;T<this.g.length;T++){var R=this.i(T);E+=(0<=R?R:4294967296+R)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(v(this))return"0";if(A(this))return"-"+x(this).toString(E);for(var _=c(Math.pow(E,6)),T=this,R="";;){var k=L(T,_).g;T=C(T,k.j(_));var b=((0<T.g.length?T.g[0]:T.h)>>>0).toString(E);if(T=k,v(T))return b+R;for(;6>b.length;)b="0"+b;R=b+R}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function v(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function A(E){return E.h==-1}t.l=function(E){return E=C(this,E),A(E)?-1:v(E)?0:1};function x(E){for(var _=E.g.length,T=[],R=0;R<_;R++)T[R]=~E.g[R];return new o(T,~E.h).add(m)}t.abs=function(){return A(this)?x(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],R=0,k=0;k<=_;k++){var b=R+(this.i(k)&65535)+(E.i(k)&65535),I=(b>>>16)+(this.i(k)>>>16)+(E.i(k)>>>16);R=I>>>16,b&=65535,I&=65535,T[k]=I<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function C(E,_){return E.add(x(_))}t.j=function(E){if(v(this)||v(E))return f;if(A(this))return A(E)?x(this).j(x(E)):x(x(this).j(E));if(A(E))return x(this.j(x(E)));if(0>this.l(w)&&0>E.l(w))return c(this.m()*E.m());for(var _=this.g.length+E.g.length,T=[],R=0;R<2*_;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<E.g.length;k++){var b=this.i(R)>>>16,I=this.i(R)&65535,Me=E.i(k)>>>16,qt=E.i(k)&65535;T[2*R+2*k]+=I*qt,y(T,2*R+2*k),T[2*R+2*k+1]+=b*qt,y(T,2*R+2*k+1),T[2*R+2*k+1]+=I*Me,y(T,2*R+2*k+1),T[2*R+2*k+2]+=b*Me,y(T,2*R+2*k+2)}for(R=0;R<_;R++)T[R]=T[2*R+1]<<16|T[2*R];for(R=_;R<2*_;R++)T[R]=0;return new o(T,0)};function y(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function S(E,_){this.g=E,this.h=_}function L(E,_){if(v(_))throw Error("division by zero");if(v(E))return new S(f,f);if(A(E))return _=L(x(E),_),new S(x(_.g),x(_.h));if(A(_))return _=L(E,x(_)),new S(x(_.g),_.h);if(30<E.g.length){if(A(E)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,R=_;0>=R.l(E);)T=V(T),R=V(R);var k=F(T,1),b=F(R,1);for(R=F(R,2),T=F(T,2);!v(R);){var I=b.add(R);0>=I.l(E)&&(k=k.add(T),b=I),R=F(R,1),T=F(T,1)}return _=C(E,k.j(_)),new S(k,_)}for(k=f;0<=E.l(_);){for(T=Math.max(1,Math.floor(E.m()/_.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),b=c(T),I=b.j(_);A(I)||0<I.l(E);)T-=R,b=c(T),I=b.j(_);v(b)&&(b=m),k=k.add(b),E=C(E,I)}return new S(k,E)}t.A=function(E){return L(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],R=0;R<_;R++)T[R]=this.i(R)&E.i(R);return new o(T,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],R=0;R<_;R++)T[R]=this.i(R)|E.i(R);return new o(T,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],R=0;R<_;R++)T[R]=this.i(R)^E.i(R);return new o(T,this.h^E.h)};function V(E){for(var _=E.g.length+1,T=[],R=0;R<_;R++)T[R]=E.i(R)<<1|E.i(R-1)>>>31;return new o(T,E.h)}function F(E,_){var T=_>>5;_%=32;for(var R=E.g.length-T,k=[],b=0;b<R;b++)k[b]=0<_?E.i(b+T)>>>_|E.i(b+T+1)<<32-_:E.i(b+T);return new o(k,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,YI=o}).apply(typeof k0<"u"?k0:typeof self<"u"?self:typeof window<"u"?window:{});var Uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var XI,JI,Ca,ZI,pc,Xp,eR,tR,nR;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uu=="object"&&Uu];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var O=l[g];if(!(O in p))break e;p=p[O]}l=l[l.length-1],g=p[l],h=h(g),h!=g&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,g=!1,O={next:function(){if(!g&&p<l.length){var M=p++;return{value:h(M,l[M]),done:!1}}return g=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,g),l.apply(h,O)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function w(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function v(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(g,O,M){for(var K=Array(arguments.length-2),De=2;De<arguments.length;De++)K[De-2]=arguments[De];return h.prototype[O].apply(g,K)}}function A(l){const h=l.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=l[g];return p}return[]}function x(l,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(u(g)){const O=l.length||0,M=g.length||0;l.length=O+M;for(let K=0;K<M;K++)l[O+K]=g[K]}else l.push(g)}}class C{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function L(l){return L[" "](l),l}L[" "]=function(){};var V=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(l,h,p){for(const g in l)h.call(p,l[g],g,l)}function E(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function _(l){const h={};for(const p in l)h[p]=l[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,h){let p,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(p in g)l[p]=g[p];for(let M=0;M<T.length;M++)p=T[M],Object.prototype.hasOwnProperty.call(g,p)&&(l[p]=g[p])}}function k(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function b(l){a.setTimeout(()=>{throw l},0)}function I(){var l=ae;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Me{constructor(){this.h=this.g=null}add(h,p){const g=qt.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var qt=new C(()=>new pt,l=>l.reset());class pt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,q=!1,ae=new Me,J=()=>{const l=a.Promise.resolve(void 0);ct=()=>{l.then(re)}};var re=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(p){b(p)}var h=qt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}q=!1};function P(){this.s=this.s,this.C=this.C}P.prototype.s=!1,P.prototype.ma=function(){this.s||(this.s=!0,this.N())},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function U(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}U.prototype.h=function(){this.defaultPrevented=!0};var H=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function se(l,h){if(U.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(V){e:{try{L(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Z[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&se.aa.h.call(this)}}v(se,U);var Z={2:"touch",3:"pen",4:"mouse"};se.prototype.h=function(){se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ce="closure_listenable_"+(1e6*Math.random()|0),ge=0;function ie(l,h,p,g,O){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=O,this.key=++ge,this.da=this.fa=!1}function Ne(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function qe(l){this.src=l,this.g={},this.h=0}qe.prototype.add=function(l,h,p,g,O){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var K=Oe(l,h,g,O);return-1<K?(h=l[K],p||(h.fa=!1)):(h=new ie(h,this.src,M,!!g,O),h.fa=p,l.push(h)),h};function Ce(l,h){var p=h.type;if(p in l.g){var g=l.g[p],O=Array.prototype.indexOf.call(g,h,void 0),M;(M=0<=O)&&Array.prototype.splice.call(g,O,1),M&&(Ne(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Oe(l,h,p,g){for(var O=0;O<l.length;++O){var M=l[O];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==g)return O}return-1}var Qt="closure_lm_"+(1e6*Math.random()|0),xn={};function Yt(l,h,p,g,O){if(Array.isArray(h)){for(var M=0;M<h.length;M++)Yt(l,h[M],p,g,O);return null}return p=Cs(p),l&&l[ce]?l.K(h,p,c(g)?!!g.capture:!!g,O):Xt(l,h,p,!1,g,O)}function Xt(l,h,p,g,O,M){if(!h)throw Error("Invalid event type");var K=c(O)?!!O.capture:!!O,De=Ko(l);if(De||(l[Qt]=De=new qe(l)),p=De.add(h,p,g,K,M),p.proxy)return p;if(g=tu(),p.proxy=g,g.src=l,g.listener=p,l.addEventListener)H||(O=K),O===void 0&&(O=!1),l.addEventListener(h.toString(),g,O);else if(l.attachEvent)l.attachEvent(Go(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function tu(){function l(p){return h.call(l.src,l.listener,p)}const h=ru;return l}function nu(l,h,p,g,O){if(Array.isArray(h))for(var M=0;M<h.length;M++)nu(l,h[M],p,g,O);else g=c(g)?!!g.capture:!!g,p=Cs(p),l&&l[ce]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],p=Oe(M,p,g,O),-1<p&&(Ne(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=Ko(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Oe(h,p,g,O)),(p=-1<l?h[l]:null)&&ki(p))}function ki(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[ce])Ce(h.i,l);else{var p=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(p,g,l.capture):h.detachEvent?h.detachEvent(Go(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=Ko(h))?(Ce(p,l),p.h==0&&(p.src=null,h[Qt]=null)):Ne(l)}}}function Go(l){return l in xn?xn[l]:xn[l]="on"+l}function ru(l,h){if(l.da)l=!0;else{h=new se(h,this);var p=l.listener,g=l.ha||l.src;l.fa&&ki(l),l=p.call(g,h)}return l}function Ko(l){return l=l[Qt],l instanceof qe?l:null}var Ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cs(l){return typeof l=="function"?l:(l[Ni]||(l[Ni]=function(h){return l.handleEvent(h)}),l[Ni])}function mt(){P.call(this),this.i=new qe(this),this.M=this,this.F=null}v(mt,P),mt.prototype[ce]=!0,mt.prototype.removeEventListener=function(l,h,p,g){nu(this,l,h,p,g)};function Ct(l,h){var p,g=l.F;if(g)for(p=[];g;g=g.F)p.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new U(h,l);else if(h instanceof U)h.target=h.target||l;else{var O=h;h=new U(g,l),R(h,O)}if(O=!0,p)for(var M=p.length-1;0<=M;M--){var K=h.g=p[M];O=As(K,g,!0,h)&&O}if(K=h.g=l,O=As(K,g,!0,h)&&O,O=As(K,g,!1,h)&&O,p)for(M=0;M<p.length;M++)K=h.g=p[M],O=As(K,g,!1,h)&&O}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],g=0;g<p.length;g++)Ne(p[g]);delete l.g[h],l.h--}}this.F=null},mt.prototype.K=function(l,h,p,g){return this.i.add(String(l),h,!1,p,g)},mt.prototype.L=function(l,h,p,g){return this.i.add(String(l),h,!0,p,g)};function As(l,h,p,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,M=0;M<h.length;++M){var K=h[M];if(K&&!K.da&&K.capture==p){var De=K.listener,At=K.ha||K.src;K.fa&&Ce(l.i,K),O=De.call(At,g)!==!1&&O}}return O&&!g.defaultPrevented}function iu(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function su(l){l.g=iu(()=>{l.g=null,l.i&&(l.i=!1,su(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Nd extends P{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:su(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fr(l){P.call(this),this.h=l,this.g={}}v(Fr,P);var ou=[];function au(l){F(l.g,function(h,p){this.g.hasOwnProperty(p)&&ki(h)},l),l.g={}}Fr.prototype.N=function(){Fr.aa.N.call(this),au(this)},Fr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var D=a.JSON.stringify,N=a.JSON.parse,$=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Q(){}Q.prototype.h=null;function Y(l){return l.h||(l.h=l.i())}function ee(){}var oe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function le(){U.call(this,"d")}v(le,U);function ue(){U.call(this,"c")}v(ue,U);var he={},xe=null;function ht(){return xe=xe||new mt}he.La="serverreachability";function it(l){U.call(this,he.La,l)}v(it,U);function gt(l){const h=ht();Ct(h,new it(h))}he.STAT_EVENT="statevent";function nn(l,h){U.call(this,he.STAT_EVENT,l),this.stat=h}v(nn,U);function tt(l){const h=ht();Ct(h,new nn(h,l))}he.Ma="timingevent";function Pi(l,h){U.call(this,he.Ma,l),this.size=h}v(Pi,U);function Dn(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Ln(){this.g=!0}Ln.prototype.xa=function(){this.g=!1};function b1(l,h,p,g,O,M){l.info(function(){if(l.g)if(M)for(var K="",De=M.split("&"),At=0;At<De.length;At++){var Ae=De[At].split("=");if(1<Ae.length){var Lt=Ae[0];Ae=Ae[1];var Mt=Lt.split("_");K=2<=Mt.length&&Mt[1]=="type"?K+(Lt+"="+Ae+"&"):K+(Lt+"=redacted&")}}else K=null;else K=M;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+h+`
`+p+`
`+K})}function O1(l,h,p,g,O,M,K){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+h+`
`+p+`
`+M+" "+K})}function ks(l,h,p,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+D1(l,p)+(g?" "+g:"")})}function x1(l,h){l.info(function(){return"TIMEOUT: "+h})}Ln.prototype.info=function(){};function D1(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var g=p[l];if(!(2>g.length)){var O=g[1];if(Array.isArray(O)&&!(1>O.length)){var M=O[0];if(M!="noop"&&M!="stop"&&M!="close")for(var K=1;K<O.length;K++)O[K]=""}}}}return D(p)}catch{return h}}var lu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},B_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pd;function uu(){}v(uu,Q),uu.prototype.g=function(){return new XMLHttpRequest},uu.prototype.i=function(){return{}},Pd=new uu;function Ur(l,h,p,g){this.j=l,this.i=h,this.l=p,this.R=g||1,this.U=new Fr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new j_}function j_(){this.i=null,this.g="",this.h=!1}var z_={},bd={};function Od(l,h,p){l.L=1,l.v=fu(dr(h)),l.m=p,l.P=!0,W_(l,null)}function W_(l,h){l.F=Date.now(),cu(l),l.A=dr(l.v);var p=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),iy(p.i,"t",g),l.C=0,p=l.j.J,l.h=new j_,l.g=Sy(l.j,p?h:null,!l.m),0<l.O&&(l.M=new Nd(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,g=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(ou[0]=O.toString()),O=ou);for(var M=0;M<O.length;M++){var K=Yt(p,O[M],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),gt(),b1(l.i,l.u,l.A,l.l,l.R,l.m)}Ur.prototype.ca=function(l){l=l.target;const h=this.M;h&&fr(l)==3?h.j():this.Y(l)},Ur.prototype.Y=function(l){try{if(l==this.g)e:{const Mt=fr(this.g);var h=this.g.Ba();const bs=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||hy(this.g)))){this.J||Mt!=4||h==7||(h==8||0>=bs?gt(3):gt(2)),xd(this);var p=this.g.Z();this.X=p;t:if(H_(this)){var g=hy(this.g);l="";var O=g.length,M=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bi(this),qo(this);var K="";break t}this.h.i=new a.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(M&&h==O-1)});g.length=0,this.h.g+=l,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,O1(this.i,this.u,this.A,this.l,this.R,Mt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var De,At=this.g;if((De=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(De)){var Ae=De;break t}}Ae=null}if(p=Ae)ks(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dd(this,p);else{this.o=!1,this.s=3,tt(12),bi(this),qo(this);break e}}if(this.P){p=!0;let Mn;for(;!this.J&&this.C<K.length;)if(Mn=L1(this,K),Mn==bd){Mt==4&&(this.s=4,tt(14),p=!1),ks(this.i,this.l,null,"[Incomplete Response]");break}else if(Mn==z_){this.s=4,tt(15),ks(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else ks(this.i,this.l,Mn,null),Dd(this,Mn);if(H_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||K.length!=0||this.h.h||(this.s=1,tt(16),p=!1),this.o=this.o&&p,!p)ks(this.i,this.l,K,"[Invalid Chunked Response]"),bi(this),qo(this);else if(0<K.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),$d(Lt),Lt.M=!0,tt(11))}}else ks(this.i,this.l,K,null),Dd(this,K);Mt==4&&bi(this),this.o&&!this.J&&(Mt==4?yy(this.j,this):(this.o=!1,cu(this)))}else J1(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),bi(this),qo(this)}}}catch{}finally{}};function H_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function L1(l,h){var p=l.C,g=h.indexOf(`
`,p);return g==-1?bd:(p=Number(h.substring(p,g)),isNaN(p)?z_:(g+=1,g+p>h.length?bd:(h=h.slice(g,g+p),l.C=g+p,h)))}Ur.prototype.cancel=function(){this.J=!0,bi(this)};function cu(l){l.S=Date.now()+l.I,G_(l,l.I)}function G_(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Dn(m(l.ba,l),h)}function xd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Ur.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(x1(this.i,this.A),this.L!=2&&(gt(),tt(17)),bi(this),this.s=2,qo(this)):G_(this,this.S-l)};function qo(l){l.j.G==0||l.J||yy(l.j,l)}function bi(l){xd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,au(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Dd(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||Ld(p.h,l))){if(!l.K&&Ld(p.h,l)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)yu(p),gu(p);else break e;Ud(p),tt(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=Dn(m(p.Za,p),6e3));if(1>=Q_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else xi(p,11)}else if((l.K||p.g==l)&&yu(p),!y(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let Ae=O[h];if(p.T=Ae[0],Ae=Ae[1],p.G==2)if(Ae[0]=="c"){p.K=Ae[1],p.ia=Ae[2];const Lt=Ae[3];Lt!=null&&(p.la=Lt,p.j.info("VER="+p.la));const Mt=Ae[4];Mt!=null&&(p.Aa=Mt,p.j.info("SVER="+p.Aa));const bs=Ae[5];bs!=null&&typeof bs=="number"&&0<bs&&(g=1.5*bs,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Mn=l.g;if(Mn){const wu=Mn.g?Mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wu){var M=g.h;M.g||wu.indexOf("spdy")==-1&&wu.indexOf("quic")==-1&&wu.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Md(M,M.h),M.h=null))}if(g.D){const Bd=Mn.g?Mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bd&&(g.ya=Bd,$e(g.I,g.D,Bd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var K=l;if(g.qa=Ey(g,g.J?g.ia:null,g.W),K.K){Y_(g.h,K);var De=K,At=g.L;At&&(De.I=At),De.B&&(xd(De),cu(De)),g.g=K}else gy(g);0<p.i.length&&_u(p)}else Ae[0]!="stop"&&Ae[0]!="close"||xi(p,7);else p.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?xi(p,7):Fd(p):Ae[0]!="noop"&&p.l&&p.l.ta(Ae),p.v=0)}}gt(4)}catch{}}var M1=class{constructor(l,h){this.g=l,this.map=h}};function K_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function q_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Q_(l){return l.h?1:l.g?l.g.size:0}function Ld(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Md(l,h){l.g?l.g.add(h):l.h=h}function Y_(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}K_.prototype.cancel=function(){if(this.i=X_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function X_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return A(l.i)}function V1(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,g=0;g<p;g++)h.push(l[g]);return h}h=[],p=0;for(g in l)h[p++]=l[g];return h}function F1(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const g in l)h[p++]=g;return h}}}function J_(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=F1(l),g=V1(l),O=g.length,M=0;M<O;M++)h.call(void 0,g[M],p&&p[M],l)}var Z_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function U1(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var g=l[p].indexOf("="),O=null;if(0<=g){var M=l[p].substring(0,g);O=l[p].substring(g+1)}else M=l[p];h(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Oi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Oi){this.h=l.h,hu(this,l.j),this.o=l.o,this.g=l.g,du(this,l.s),this.l=l.l;var h=l.i,p=new Xo;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),ey(this,p),this.m=l.m}else l&&(h=String(l).match(Z_))?(this.h=!1,hu(this,h[1]||"",!0),this.o=Qo(h[2]||""),this.g=Qo(h[3]||"",!0),du(this,h[4]),this.l=Qo(h[5]||"",!0),ey(this,h[6]||"",!0),this.m=Qo(h[7]||"")):(this.h=!1,this.i=new Xo(null,this.h))}Oi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Yo(h,ty,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Yo(h,ty,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Yo(p,p.charAt(0)=="/"?j1:B1,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Yo(p,W1)),l.join("")};function dr(l){return new Oi(l)}function hu(l,h,p){l.j=p?Qo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function du(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function ey(l,h,p){h instanceof Xo?(l.i=h,H1(l.i,l.h)):(p||(h=Yo(h,z1)),l.i=new Xo(h,l.h))}function $e(l,h,p){l.i.set(h,p)}function fu(l){return $e(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Qo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Yo(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,$1),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function $1(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ty=/[#\/\?@]/g,B1=/[#\?:]/g,j1=/[#\?]/g,z1=/[#\?@]/g,W1=/#/g;function Xo(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function $r(l){l.g||(l.g=new Map,l.h=0,l.i&&U1(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Xo.prototype,t.add=function(l,h){$r(this),this.i=null,l=Ns(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function ny(l,h){$r(l),h=Ns(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function ry(l,h){return $r(l),h=Ns(l,h),l.g.has(h)}t.forEach=function(l,h){$r(this),this.g.forEach(function(p,g){p.forEach(function(O){l.call(h,O,g,this)},this)},this)},t.na=function(){$r(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const O=l[g];for(let M=0;M<O.length;M++)p.push(h[g])}return p},t.V=function(l){$r(this);let h=[];if(typeof l=="string")ry(this,l)&&(h=h.concat(this.g.get(Ns(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return $r(this),this.i=null,l=Ns(this,l),ry(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function iy(l,h,p){ny(l,h),0<p.length&&(l.i=null,l.g.set(Ns(l,h),A(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const M=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var O=M;K[g]!==""&&(O+="="+encodeURIComponent(String(K[g]))),l.push(O)}}return this.i=l.join("&")};function Ns(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function H1(l,h){h&&!l.j&&($r(l),l.i=null,l.g.forEach(function(p,g){var O=g.toLowerCase();g!=O&&(ny(this,g),iy(this,O,p))},l)),l.j=h}function G1(l,h){const p=new Ln;if(a.Image){const g=new Image;g.onload=w(Br,p,"TestLoadImage: loaded",!0,h,g),g.onerror=w(Br,p,"TestLoadImage: error",!1,h,g),g.onabort=w(Br,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(Br,p,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function K1(l,h){const p=new Ln,g=new AbortController,O=setTimeout(()=>{g.abort(),Br(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(M=>{clearTimeout(O),M.ok?Br(p,"TestPingServer: ok",!0,h):Br(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Br(p,"TestPingServer: error",!1,h)})}function Br(l,h,p,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(p)}catch{}}function q1(){this.g=new $}function Q1(l,h,p){const g=p||"";try{J_(l,function(O,M){let K=O;c(O)&&(K=D(O)),h.push(g+M+"="+encodeURIComponent(K))})}catch(O){throw h.push(g+"type="+encodeURIComponent("_badmap")),O}}function Jo(l){this.l=l.Ub||null,this.j=l.eb||!1}v(Jo,Q),Jo.prototype.g=function(){return new pu(this.l,this.j)},Jo.prototype.i=function(l){return function(){return l}}({});function pu(l,h){mt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(pu,mt),t=pu.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,ea(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ea(this)),this.g&&(this.readyState=3,ea(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function sy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Zo(this):ea(this),this.readyState==3&&sy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Zo(this))},t.Qa=function(l){this.g&&(this.response=l,Zo(this))},t.ga=function(){this.g&&Zo(this)};function Zo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ea(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function ea(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(pu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function oy(l){let h="";return F(l,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Vd(l,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=oy(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):$e(l,h,p))}function nt(l){mt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(nt,mt);var Y1=/^https?$/i,X1=["POST","PUT"];t=nt.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pd.g(),this.v=this.o?Y(this.o):Y(Pd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){ay(this,M);return}if(l=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)p.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const M of g.keys())p.set(M,g.get(M));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(X1,h,void 0))||g||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,K]of p)this.g.setRequestHeader(M,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cy(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){ay(this,M)}};function ay(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,ly(l),mu(l)}function ly(l){l.A||(l.A=!0,Ct(l,"complete"),Ct(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ct(this,"complete"),Ct(this,"abort"),mu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mu(this,!0)),nt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?uy(this):this.bb())},t.bb=function(){uy(this)};function uy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||fr(l)!=4||l.Z()!=2)){if(l.u&&fr(l)==4)iu(l.Ea,0,l);else if(Ct(l,"readystatechange"),fr(l)==4){l.h=!1;try{const K=l.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=K===0){var O=String(l.D).match(Z_)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),g=!Y1.test(O?O.toLowerCase():"")}p=g}if(p)Ct(l,"complete"),Ct(l,"success");else{l.m=6;try{var M=2<fr(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",ly(l)}}finally{mu(l)}}}}function mu(l,h){if(l.g){cy(l);const p=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Ct(l,"ready");try{p.onreadystatechange=g}catch{}}}function cy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function fr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),N(h)}};function hy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function J1(l){const h={};l=(l.g&&2<=fr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(y(l[g]))continue;var p=k(l[g]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[O]||[];h[O]=M,M.push(p)}E(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ta(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function dy(l){this.Aa=0,this.i=[],this.j=new Ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ta("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ta("baseRetryDelayMs",5e3,l),this.cb=ta("retryDelaySeedMs",1e4,l),this.Wa=ta("forwardChannelMaxRetries",2,l),this.wa=ta("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new K_(l&&l.concurrentRequestLimit),this.Da=new q1,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dy.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,g){tt(0),this.W=l,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Ey(this,null,this.W),_u(this)};function Fd(l){if(fy(l),l.G==3){var h=l.U++,p=dr(l.I);if($e(p,"SID",l.K),$e(p,"RID",h),$e(p,"TYPE","terminate"),na(l,p),h=new Ur(l,l.j,h),h.L=2,h.v=fu(dr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Sy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),cu(h)}wy(l)}function gu(l){l.g&&($d(l),l.g.cancel(),l.g=null)}function fy(l){gu(l),l.u&&(a.clearTimeout(l.u),l.u=null),yu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function _u(l){if(!q_(l.h)&&!l.s){l.s=!0;var h=l.Ga;ct||J(),q||(ct(),q=!0),ae.add(h,l),l.B=0}}function Z1(l,h){return Q_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Dn(m(l.Ga,l,h),vy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new Ur(this,this.j,l);let M=this.o;if(this.S&&(M?(M=_(M),R(M,this.S)):M=this.S),this.m!==null||this.O||(O.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=my(this,O,h),p=dr(this.I),$e(p,"RID",l),$e(p,"CVER",22),this.D&&$e(p,"X-HTTP-Session-Id",this.D),na(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(oy(M)))+"&"+h:this.m&&Vd(p,this.m,M)),Md(this.h,O),this.Ua&&$e(p,"TYPE","init"),this.P?($e(p,"$req",h),$e(p,"SID","null"),O.T=!0,Od(O,p,null)):Od(O,p,h),this.G=2}}else this.G==3&&(l?py(this,l):this.i.length==0||q_(this.h)||py(this))};function py(l,h){var p;h?p=h.l:p=l.U++;const g=dr(l.I);$e(g,"SID",l.K),$e(g,"RID",p),$e(g,"AID",l.T),na(l,g),l.m&&l.o&&Vd(g,l.m,l.o),p=new Ur(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=my(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Md(l.h,p),Od(p,g,h)}function na(l,h){l.H&&F(l.H,function(p,g){$e(h,g,p)}),l.l&&J_({},function(p,g){$e(h,g,p)})}function my(l,h,p){p=Math.min(l.i.length,p);var g=l.l?m(l.l.Na,l.l,l):null;e:{var O=l.i;let M=-1;for(;;){const K=["count="+p];M==-1?0<p?(M=O[0].g,K.push("ofs="+M)):M=0:K.push("ofs="+M);let De=!0;for(let At=0;At<p;At++){let Ae=O[At].g;const Lt=O[At].map;if(Ae-=M,0>Ae)M=Math.max(0,O[At].g-100),De=!1;else try{Q1(Lt,K,"req"+Ae+"_")}catch{g&&g(Lt)}}if(De){g=K.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,g}function gy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;ct||J(),q||(ct(),q=!0),ae.add(h,l),l.v=0}}function Ud(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Dn(m(l.Fa,l),vy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,_y(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Dn(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),gu(this),_y(this))};function $d(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function _y(l){l.g=new Ur(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=dr(l.qa);$e(h,"RID","rpc"),$e(h,"SID",l.K),$e(h,"AID",l.T),$e(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&$e(h,"TO",l.ja),$e(h,"TYPE","xmlhttp"),na(l,h),l.m&&l.o&&Vd(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=fu(dr(h)),p.m=null,p.P=!0,W_(p,l)}t.Za=function(){this.C!=null&&(this.C=null,gu(this),Ud(this),tt(19))};function yu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function yy(l,h){var p=null;if(l.g==h){yu(l),$d(l),l.g=null;var g=2}else if(Ld(l.h,h))p=h.D,Y_(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=l.B;g=ht(),Ct(g,new Pi(g,p)),_u(l)}else gy(l);else if(O=h.s,O==3||O==0&&0<h.X||!(g==1&&Z1(l,h)||g==2&&Ud(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),O){case 1:xi(l,5);break;case 4:xi(l,10);break;case 3:xi(l,6);break;default:xi(l,2)}}}function vy(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function xi(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),g=l.Xa;const O=!g;g=new Oi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||hu(g,"https"),fu(g),O?G1(g.toString(),p):K1(g.toString(),p)}else tt(2);l.G=0,l.l&&l.l.sa(h),wy(l),fy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function wy(l){if(l.G=0,l.ka=[],l.l){const h=X_(l.h);(h.length!=0||l.i.length!=0)&&(x(l.ka,h),x(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Ey(l,h,p){var g=p instanceof Oi?dr(p):new Oi(p);if(g.g!="")h&&(g.g=h+"."+g.g),du(g,g.s);else{var O=a.location;g=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var M=new Oi(null);g&&hu(M,g),h&&(M.g=h),O&&du(M,O),p&&(M.l=p),g=M}return p=l.D,h=l.ya,p&&h&&$e(g,p,h),$e(g,"VER",l.la),na(l,g),g}function Sy(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new nt(new Jo({eb:p})):new nt(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ty(){}t=Ty.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function vu(){}vu.prototype.g=function(l,h){return new pn(l,h)};function pn(l,h){mt.call(this),this.g=new dy(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Ps(this)}v(pn,mt),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Fd(this.g)},pn.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=D(l),l=p);h.i.push(new M1(h.Ya++,l)),h.G==3&&_u(h)},pn.prototype.N=function(){this.g.l=null,delete this.j,Fd(this.g),delete this.g,pn.aa.N.call(this)};function Iy(l){le.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}v(Iy,le);function Ry(){ue.call(this),this.status=1}v(Ry,ue);function Ps(l){this.g=l}v(Ps,Ty),Ps.prototype.ua=function(){Ct(this.g,"a")},Ps.prototype.ta=function(l){Ct(this.g,new Iy(l))},Ps.prototype.sa=function(l){Ct(this.g,new Ry)},Ps.prototype.ra=function(){Ct(this.g,"b")},vu.prototype.createWebChannel=vu.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,nR=function(){return new vu},tR=function(){return ht()},eR=he,Xp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lu.NO_ERROR=0,lu.TIMEOUT=8,lu.HTTP_ERROR=6,pc=lu,B_.COMPLETE="complete",ZI=B_,ee.EventType=oe,oe.OPEN="a",oe.CLOSE="b",oe.ERROR="c",oe.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Ca=ee,JI=Jo,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,XI=nt}).apply(typeof Uu<"u"?Uu:typeof self<"u"?self:typeof window<"u"?window:{});const N0="@firebase/firestore";/**
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
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
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
 */let Uo="10.12.3";/**
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
 */const os=new xl("@firebase/firestore");function ha(){return os.logLevel}function ne(t,...e){if(os.logLevel<=ve.DEBUG){const n=e.map($g);os.debug(`Firestore (${Uo}): ${t}`,...n)}}function as(t,...e){if(os.logLevel<=ve.ERROR){const n=e.map($g);os.error(`Firestore (${Uo}): ${t}`,...n)}}function th(t,...e){if(os.logLevel<=ve.WARN){const n=e.map($g);os.warn(`Firestore (${Uo}): ${t}`,...n)}}function $g(t){if(typeof t=="string")return t;try{/**
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
 */function Ee(t="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+t;throw as(e),new Error(e)}function Rt(t,e){t||Ee()}function Ge(t,e){return t}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class rR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class VM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FM{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new qi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Rt(typeof r.accessToken=="string"),new rR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Rt(e===null||typeof e=="string"),new $t(e)}}class UM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $M{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new UM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Rt(typeof n.token=="string"),this.R=n.token,new BM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function zM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class iR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=zM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ve(t,e){return t<e?-1:t>e?1:0}function wo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class It{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new fe(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new It(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Xe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Xe(e)}static min(){return new Xe(new It(0,0))}static max(){return new Xe(new It(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ee(),r===void 0?r=e.length-n:r>e.length-n&&Ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class at extends yl{construct(e,n,r){return new at(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new fe(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new at(n)}static emptyPath(){return new at([])}}const WM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends yl{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return WM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new fe(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new fe(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new fe(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new fe(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(at.fromString(e))}static fromName(e){return new _e(at.fromString(e).popFirst(5))}static empty(){return new _e(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&at.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return at.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new at(e.slice()))}}function HM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Xe.fromTimestamp(r===1e9?new It(n+1,0):new It(n,r));return new yi(i,_e.empty(),e)}function GM(t){return new yi(t.readTime,t.key,-1)}class yi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yi(Xe.min(),_e.empty(),-1)}static max(){return new yi(Xe.max(),_e.empty(),-1)}}function KM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=_e.comparator(t.documentKey,e.documentKey),n!==0?n:Ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const qM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function sR(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==qM)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function YM(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Yh(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class oR{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}oR.oe=-1;function Bg(t){return t==null}function nh(t){return t===0&&1/t==-1/0}function XM(t){return typeof t=="number"&&Number.isInteger(t)&&!nh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function P0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ul(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Jn=class Jp{constructor(e,n){this.comparator=e,this.root=n||pi.EMPTY}insert(e,n){return new Jp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pi.BLACK,null,null))}remove(e){return new Jp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pi.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $u(this.root,e,this.comparator,!1)}getReverseIterator(){return new $u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $u(this.root,e,this.comparator,!0)}},$u=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},pi=class pr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pr.RED,this.left=i??pr.EMPTY,this.right=s??pr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new pr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}};pi.EMPTY=null,pi.RED=!0,pi.BLACK=!1;pi.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new pi(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Gt{constructor(e){this.comparator=e,this.data=new Jn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new b0(this.data.getIterator())}getIteratorFrom(e){return new b0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Gt(this.comparator);return n.data=e,n}}class b0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Hn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new Hn([])}unionWith(e){let n=new Gt(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class JM extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dr{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new JM("Invalid base64 string: "+s):s}}(e);return new Dr(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Dr(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dr.EMPTY_BYTE_STRING=new Dr("");const ZM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(t){if(Rt(!!t),typeof t=="string"){let e=0;const n=ZM.exec(t);if(Rt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Nt(t.seconds),nanos:Nt(t.nanos)}}function Nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vl(t){return typeof t=="string"?Dr.fromBase64String(t):Dr.fromUint8Array(t)}/**
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
 */function jg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lR(t){const e=t.mapValue.fields.__previous_value__;return jg(e)?lR(e):e}function rh(t){const e=ls(t.mapValue.fields.__local_write_time__.timestampValue);return new It(e.seconds,e.nanos)}/**
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
 */class e2{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ih{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ih("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ih&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Bu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Eo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jg(t)?4:t2(t)?9007199254740991:10:Ee()}function ur(t,e){if(t===e)return!0;const n=Eo(t);if(n!==Eo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rh(t).isEqual(rh(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ls(i.timestampValue),a=ls(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return vl(i.bytesValue).isEqual(vl(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Nt(i.geoPointValue.latitude)===Nt(s.geoPointValue.latitude)&&Nt(i.geoPointValue.longitude)===Nt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Nt(i.integerValue)===Nt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Nt(i.doubleValue),a=Nt(s.doubleValue);return o===a?nh(o)===nh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return wo(t.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(P0(o)!==P0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ur(o[u],a[u])))return!1;return!0}(t,e);default:return Ee()}}function wl(t,e){return(t.values||[]).find(n=>ur(n,e))!==void 0}function So(t,e){if(t===e)return 0;const n=Eo(t),r=Eo(e);if(n!==r)return Ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ve(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Nt(s.integerValue||s.doubleValue),u=Nt(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return O0(t.timestampValue,e.timestampValue);case 4:return O0(rh(t),rh(e));case 5:return Ve(t.stringValue,e.stringValue);case 6:return function(s,o){const a=vl(s),u=vl(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=Ve(a[c],u[c]);if(d!==0)return d}return Ve(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ve(Nt(s.latitude),Nt(o.latitude));return a!==0?a:Ve(Nt(s.longitude),Nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=So(a[c],u[c]);if(d)return d}return Ve(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Bu.mapValue&&o===Bu.mapValue)return 0;if(s===Bu.mapValue)return 1;if(o===Bu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=Ve(u[f],d[f]);if(m!==0)return m;const w=So(a[u[f]],c[d[f]]);if(w!==0)return w}return Ve(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Ee()}}function O0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ve(t,e);const n=ls(t),r=ls(e),i=Ve(n.seconds,r.seconds);return i!==0?i:Ve(n.nanos,r.nanos)}function To(t){return Zp(t)}function Zp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ls(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vl(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return _e.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Zp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Zp(n.fields[o])}`;return i+"}"}(t.mapValue):Ee()}function em(t){return!!t&&"integerValue"in t}function zg(t){return!!t&&"arrayValue"in t}function mc(t){return!!t&&"mapValue"in t}function Ua(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ul(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ua(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ua(t.arrayValue.values[n]);return e}return Object.assign({},t)}function t2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class zn{constructor(e){this.value=e}static empty(){return new zn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!mc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(n)}setAll(e){let n=bt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ua(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());mc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];mc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ul(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new zn(Ua(this.value))}}function uR(t){const e=[];return Ul(t.fields,(n,r)=>{const i=new bt([n]);if(mc(r)){const s=uR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Hn(e)}/**
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
 */class jn{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new jn(e,0,Xe.min(),Xe.min(),Xe.min(),zn.empty(),0)}static newFoundDocument(e,n,r,i){return new jn(e,1,n,Xe.min(),r,i,0)}static newNoDocument(e,n){return new jn(e,2,n,Xe.min(),Xe.min(),zn.empty(),0)}static newUnknownDocument(e,n){return new jn(e,3,n,Xe.min(),Xe.min(),zn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sh{constructor(e,n){this.position=e,this.inclusive=n}}function x0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=_e.comparator(_e.fromName(o.referenceValue),n.key):r=So(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function D0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ur(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class oh{constructor(e,n="asc"){this.field=e,this.dir=n}}function n2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cR{}class Et extends cR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new i2(e,n,r):n==="array-contains"?new a2(e,r):n==="in"?new l2(e,r):n==="not-in"?new u2(e,r):n==="array-contains-any"?new c2(e,r):new Et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new s2(e,r):new o2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(So(n,this.value)):n!==null&&Eo(this.value)===Eo(n)&&this.matchesComparison(So(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vi extends cR{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new vi(e,n)}matches(e){return hR(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hR(t){return t.op==="and"}function dR(t){return r2(t)&&hR(t)}function r2(t){for(const e of t.filters)if(e instanceof vi)return!1;return!0}function tm(t){if(t instanceof Et)return t.field.canonicalString()+t.op.toString()+To(t.value);if(dR(t))return t.filters.map(e=>tm(e)).join(",");{const e=t.filters.map(n=>tm(n)).join(",");return`${t.op}(${e})`}}function fR(t,e){return t instanceof Et?function(r,i){return i instanceof Et&&r.op===i.op&&r.field.isEqual(i.field)&&ur(r.value,i.value)}(t,e):t instanceof vi?function(r,i){return i instanceof vi&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&fR(o,i.filters[a]),!0):!1}(t,e):void Ee()}function pR(t){return t instanceof Et?function(n){return`${n.field.canonicalString()} ${n.op} ${To(n.value)}`}(t):t instanceof vi?function(n){return n.op.toString()+" {"+n.getFilters().map(pR).join(" ,")+"}"}(t):"Filter"}class i2 extends Et{constructor(e,n,r){super(e,n,r),this.key=_e.fromName(r.referenceValue)}matches(e){const n=_e.comparator(e.key,this.key);return this.matchesComparison(n)}}class s2 extends Et{constructor(e,n){super(e,"in",n),this.keys=mR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class o2 extends Et{constructor(e,n){super(e,"not-in",n),this.keys=mR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>_e.fromName(r.referenceValue))}class a2 extends Et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zg(n)&&wl(n.arrayValue,this.value)}}class l2 extends Et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wl(this.value.arrayValue,n)}}class u2 extends Et{constructor(e,n){super(e,"not-in",n)}matches(e){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wl(this.value.arrayValue,n)}}class c2 extends Et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wl(this.value.arrayValue,r))}}/**
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
 */class h2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function L0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new h2(t,e,n,r,i,s,o)}function Wg(t){const e=Ge(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>tm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bg(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>To(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>To(r)).join(",")),e.ue=n}return e.ue}function Hg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!n2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!D0(t.startAt,e.startAt)&&D0(t.endAt,e.endAt)}/**
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
 */class Xh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function d2(t,e,n,r,i,s,o,a){return new Xh(t,e,n,r,i,s,o,a)}function f2(t){return new Xh(t)}function M0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function p2(t){return t.collectionGroup!==null}function $a(t){const e=Ge(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Gt(bt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new oh(s,r))}),n.has(bt.keyField().canonicalString())||e.ce.push(new oh(bt.keyField(),r))}return e.ce}function Qi(t){const e=Ge(t);return e.le||(e.le=m2(e,$a(t))),e.le}function m2(t,e){if(t.limitType==="F")return L0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new oh(i.field,s)});const n=t.endAt?new sh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new sh(t.startAt.position,t.startAt.inclusive):null;return L0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function nm(t,e,n){return new Xh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gR(t,e){return Hg(Qi(t),Qi(e))&&t.limitType===e.limitType}function _R(t){return`${Wg(Qi(t))}|lt:${t.limitType}`}function da(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>pR(i)).join(", ")}]`),Bg(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>To(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>To(i)).join(",")),`Target(${r})`}(Qi(t))}; limitType=${t.limitType})`}function Gg(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):_e.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of $a(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=x0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,$a(r),i)||r.endAt&&!function(o,a,u){const c=x0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,$a(r),i))}(t,e)}function g2(t){return(e,n)=>{let r=!1;for(const i of $a(t)){const s=_2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _2(t,e,n){const r=t.field.isKeyField()?_e.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?So(u,c):Ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ee()}}/**
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
 */class $o{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ul(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return aR(this.inner)}size(){return this.innerSize}}/**
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
 */const y2=new Jn(_e.comparator);function ah(){return y2}const yR=new Jn(_e.comparator);function ju(...t){let e=yR;for(const n of t)e=e.insert(n.key,n);return e}function vR(t){let e=yR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wi(){return Ba()}function wR(){return Ba()}function Ba(){return new $o(t=>t.toString(),(t,e)=>t.isEqual(e))}const v2=new Jn(_e.comparator),w2=new Gt(_e.comparator);function jt(...t){let e=w2;for(const n of t)e=e.add(n);return e}const E2=new Gt(Ve);function S2(){return E2}/**
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
 */function ER(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nh(e)?"-0":e}}function SR(t){return{integerValue:""+t}}function T2(t,e){return XM(e)?SR(e):ER(t,e)}/**
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
 */class Jh{constructor(){this._=void 0}}function I2(t,e,n){return t instanceof lh?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&jg(s)&&(s=lR(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof El?IR(t,e):t instanceof Sl?RR(t,e):function(i,s){const o=TR(i,s),a=V0(o)+V0(i.Pe);return em(o)&&em(i.Pe)?SR(a):ER(i.serializer,a)}(t,e)}function R2(t,e,n){return t instanceof El?IR(t,e):t instanceof Sl?RR(t,e):n}function TR(t,e){return t instanceof uh?function(r){return em(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class lh extends Jh{}class El extends Jh{constructor(e){super(),this.elements=e}}function IR(t,e){const n=CR(e);for(const r of t.elements)n.some(i=>ur(i,r))||n.push(r);return{arrayValue:{values:n}}}class Sl extends Jh{constructor(e){super(),this.elements=e}}function RR(t,e){let n=CR(e);for(const r of t.elements)n=n.filter(i=>!ur(i,r));return{arrayValue:{values:n}}}class uh extends Jh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function V0(t){return Nt(t.integerValue||t.doubleValue)}function CR(t){return zg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function C2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof El&&i instanceof El||r instanceof Sl&&i instanceof Sl?wo(r.elements,i.elements,ur):r instanceof uh&&i instanceof uh?ur(r.Pe,i.Pe):r instanceof lh&&i instanceof lh}(t.transform,e.transform)}class A2{constructor(e,n){this.version=e,this.transformResults=n}}class Rr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rr}static exists(e){return new Rr(void 0,e)}static updateTime(e){return new Rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zh{}function AR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new NR(t.key,Rr.none()):new $l(t.key,t.data,Rr.none());{const n=t.data,r=zn.empty();let i=new Gt(bt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Es(t.key,r,new Hn(i.toArray()),Rr.none())}}function k2(t,e,n){t instanceof $l?function(i,s,o){const a=i.value.clone(),u=U0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Es?function(i,s,o){if(!gc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=U0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(kR(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ja(t,e,n,r){return t instanceof $l?function(s,o,a,u){if(!gc(s.precondition,o))return a;const c=s.value.clone(),d=$0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Es?function(s,o,a,u){if(!gc(s.precondition,o))return a;const c=$0(s.fieldTransforms,u,o),d=o.data;return d.setAll(kR(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return gc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function N2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=TR(r.transform,i||null);s!=null&&(n===null&&(n=zn.empty()),n.set(r.field,s))}return n||null}function F0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&wo(r,i,(s,o)=>C2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $l extends Zh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Es extends Zh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function U0(t,e,n){const r=new Map;Rt(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,R2(o,a,n[i]))}return r}function $0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,I2(s,o,e))}return r}class NR extends Zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class P2 extends Zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class b2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&k2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ja(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ja(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=AR(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Xe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),jt())}isEqual(e){return this.batchId===e.batchId&&wo(this.mutations,e.mutations,(n,r)=>F0(n,r))&&wo(this.baseMutations,e.baseMutations,(n,r)=>F0(n,r))}}class Kg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Rt(e.mutations.length===r.length);let i=function(){return v2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kg(e,n,r,i)}}/**
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
 */class O2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ot,Se;function x2(t){switch(t){default:return Ee();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function D2(t){if(t===void 0)return as("GRPC error has no .code"),W.UNKNOWN;switch(t){case ot.OK:return W.OK;case ot.CANCELLED:return W.CANCELLED;case ot.UNKNOWN:return W.UNKNOWN;case ot.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ot.INTERNAL:return W.INTERNAL;case ot.UNAVAILABLE:return W.UNAVAILABLE;case ot.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ot.NOT_FOUND:return W.NOT_FOUND;case ot.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ot.ABORTED:return W.ABORTED;case ot.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ot.DATA_LOSS:return W.DATA_LOSS;default:return Ee()}}(Se=ot||(ot={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new YI([4294967295,4294967295],0);class L2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rm(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function M2(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function V2(t,e){return rm(t,e.toTimestamp())}function oo(t){return Rt(!!t),Xe.fromTimestamp(function(n){const r=ls(n);return new It(r.seconds,r.nanos)}(t))}function PR(t,e){return im(t,e).canonicalString()}function im(t,e){const n=function(i){return new at(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function F2(t){const e=at.fromString(t);return Rt(G2(e)),e}function sm(t,e){return PR(t.databaseId,e.path)}function U2(t){const e=F2(t);return e.length===4?at.emptyPath():B2(e)}function $2(t){return new at(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function B2(t){return Rt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function B0(t,e,n){return{name:sm(t,e),fields:n.value.mapValue.fields}}function j2(t,e){let n;if(e instanceof $l)n={update:B0(t,e.key,e.value)};else if(e instanceof NR)n={delete:sm(t,e.key)};else if(e instanceof Es)n={update:B0(t,e.key,e.data),updateMask:H2(e.fieldMask)};else{if(!(e instanceof P2))return Ee();n={verify:sm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof lh)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof El)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Sl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof uh)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:V2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ee()}(t,e.precondition)),n}function z2(t,e){return t&&t.length>0?(Rt(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?oo(i.updateTime):oo(s);return o.isEqual(Xe.min())&&(o=oo(s)),new A2(o,i.transformResults||[])}(n,e))):[]}function W2(t){let e=U2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Rt(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=bR(f);return m instanceof vi&&dR(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(v){return new oh(Ls(v.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Bg(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,w=f.values||[];return new sh(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,w=f.values||[];return new sh(w,m)}(n.endAt)),d2(e,i,o,s,a,"F",u,c)}function bR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ls(n.unaryFilter.field);return Et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ls(n.unaryFilter.field);return Et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ls(n.unaryFilter.field);return Et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ls(n.unaryFilter.field);return Et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(t):t.fieldFilter!==void 0?function(n){return Et.create(Ls(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vi.create(n.compositeFilter.filters.map(r=>bR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ee()}}(n.compositeFilter.op))}(t):Ee()}function Ls(t){return bt.fromServerFormat(t.fieldPath)}function H2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function G2(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class K2{constructor(e){this.ct=e}}function q2(t){const e=W2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nm(e,e.limit,"L"):e}/**
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
 */class Q2{constructor(){this._n=new Y2}addToCollectionParentIndex(e,n){return this._n.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(yi.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(yi.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class Y2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Gt(at.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Gt(at.comparator)).toArray()}}/**
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
 */class Io{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Io(0)}static Ln(){return new Io(-1)}}/**
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
 */class X2{constructor(){this.changes=new $o(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class J2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Z2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ja(r.mutation,i,Hn.empty(),It.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,jt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=jt()){const i=Wi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ju();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,jt()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ah();const o=Ba(),a=function(){return Ba()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Es)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ja(d.mutation,c,d.mutation.getFieldMask(),It.now())):o.set(c.key,Hn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new J2(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ba();let i=new Jn((o,a)=>o-a),s=jt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Hn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||jt()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=wR();d.forEach(m=>{if(!s.has(m)){const w=AR(n.get(m),r.get(m));w!==null&&f.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return _e.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):p2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Wi());let a=-1,u=s;return o.next(c=>j.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,jt())).next(d=>({batchId:a,changes:vR(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _e(n)).next(r=>{let i=ju();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ju();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,u=>{const c=function(f,m){return new Xh(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,jn.newInvalidDocument(d)))});let a=ju();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ja(d.mutation,c,Hn.empty(),It.now()),Gg(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class eV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return j.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:oo(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:q2(i.bundledQuery),readTime:oo(i.readTime)}}(n)),j.resolve()}}/**
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
 */class tV{constructor(){this.overlays=new Jn(_e.comparator),this.hr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wi();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Wi(),s=n.length+1,o=new _e(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Jn((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Wi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Wi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new O2(n,r));let s=this.hr.get(n);s===void 0&&(s=jt(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class qg{constructor(){this.Pr=new Gt(yt.Ir),this.Tr=new Gt(yt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new yt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new yt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new _e(new at([])),r=new yt(n,e),i=new yt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new _e(new at([])),r=new yt(n,e),i=new yt(n,e+1);let s=jt();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new yt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class yt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return _e.comparator(e.key,n.key)||Ve(e.pr,n.pr)}static Er(e,n){return Ve(e.pr,n.pr)||_e.comparator(e.key,n.key)}}/**
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
 */class nV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Gt(yt.Ir)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new b2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new yt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new yt(n,0),i=new yt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Gt(Ve);return n.forEach(i=>{const s=new yt(i,0),o=new yt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),j.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;_e.isDocumentKey(s)||(s=s.child(""));const o=new yt(new _e(s),0);let a=new Gt(Ve);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),j.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Rt(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return j.forEach(n.mutations,i=>{const s=new yt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new yt(n,0),i=this.wr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rV{constructor(e){this.vr=e,this.docs=function(){return new Jn(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():jn.newInvalidDocument(n))}getEntries(e,n){let r=ah();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():jn.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ah();const o=n.path,a=new _e(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||KM(GM(d),r)<=0||(i.has(d.key)||Gg(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Ee()}Fr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iV(this)}getSize(e){return j.resolve(this.size)}}class iV extends X2{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class sV{constructor(e){this.persistence=e,this.Mr=new $o(n=>Wg(n),Hg),this.lastRemoteSnapshotVersion=Xe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new qg,this.targetCount=0,this.Lr=Io.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),j.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Io(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.qn(n),j.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Nr.containsKey(n))}}/**
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
 */class oV{constructor(e,n){this.Br={},this.overlays={},this.kr=new oR(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new sV(this),this.indexManager=new Q2,this.remoteDocumentCache=function(i){return new rV(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new K2(n),this.$r=new eV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new nV(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const i=new aV(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return j.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class aV extends QM{constructor(e){super(),this.currentSequenceNumber=e}}class Qg{constructor(e){this.persistence=e,this.zr=new qg,this.jr=null}static Hr(e){return new Qg(e)}get Jr(){if(this.jr)return this.jr;throw Ee()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),j.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Jr,r=>{const i=_e.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,Xe.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return j.or([()=>j.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Yg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=jt(),i=jt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Yg(e,n.fromCache,r,i)}}/**
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
 */class lV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uV{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Bb()?8:YM(Dt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new lV;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ha()<=ve.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",da(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),j.resolve()):(ha()<=ve.DEBUG&&ne("QueryEngine","Query:",da(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ha()<=ve.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",da(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qi(n))):j.resolve())}ji(e,n){if(M0(n))return j.resolve(null);let r=Qi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nm(n,null,"F"),r=Qi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=jt(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,nm(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return M0(n)||i.isEqual(Xe.min())?j.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?j.resolve(null):(ha()<=ve.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),da(n)),this.es(e,o,n,HM(i,-1)).next(a=>a))})}Zi(e,n){let r=new Gt(g2(e));return n.forEach((i,s)=>{Gg(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ha()<=ve.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",da(n)),this.zi.getDocumentsMatchingQuery(e,n,yi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class cV{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Jn(Ve),this.rs=new $o(s=>Wg(s),Hg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z2(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function hV(t,e,n,r){return new cV(t,e,n,r)}async function OR(t,e){const n=Ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=jt();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function dV(t,e){const n=Ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let w=j.resolve();return m.forEach(v=>{w=w.next(()=>d.getEntry(u,v)).next(A=>{const x=c.docVersions.get(v);Rt(x!==null),A.version.compareTo(x)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),d.addEntry(A)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=jt();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function fV(t){const e=Ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function pV(t,e){const n=Ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class j0{constructor(){this.activeTargetIds=S2()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mV{constructor(){this.no=new j0,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new j0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gV{io(e){}shutdown(){}}/**
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
 */class z0{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zu=null;function Cf(){return zu===null?zu=function(){return 268435456+Math.round(2147483648*Math.random())}():zu++,"0x"+zu.toString(16)}/**
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
 */const _V={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class yV{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Ut="WebChannelConnection";class vV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Cf(),u=this.vo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(ne("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw th("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=_V[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Cf();return new Promise((o,a)=>{const u=new XI;u.setWithCredentials(!0),u.listenOnce(ZI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case pc.NO_ERROR:const d=u.getResponseJson();ne(Ut,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case pc.TIMEOUT:ne(Ut,`RPC '${e}' ${s} timed out`),a(new fe(W.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const f=u.getStatus();if(ne(Ut,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const v=function(x){const C=x.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(C)>=0?C:W.UNKNOWN}(w.status);a(new fe(v,w.message))}else a(new fe(W.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new fe(W.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{ne(Ut,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);ne(Ut,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Cf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nR(),a=tR(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new JI({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");ne(Ut,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,w=!1;const v=new yV({lo:x=>{w?ne(Ut,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(ne(Ut,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),ne(Ut,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},ho:()=>f.close()}),A=(x,C,y)=>{x.listen(C,S=>{try{y(S)}catch(L){setTimeout(()=>{throw L},0)}})};return A(f,Ca.EventType.OPEN,()=>{w||(ne(Ut,`RPC '${e}' stream ${i} transport opened.`),v.mo())}),A(f,Ca.EventType.CLOSE,()=>{w||(w=!0,ne(Ut,`RPC '${e}' stream ${i} transport closed`),v.po())}),A(f,Ca.EventType.ERROR,x=>{w||(w=!0,th(Ut,`RPC '${e}' stream ${i} transport errored:`,x),v.po(new fe(W.UNAVAILABLE,"The operation could not be completed")))}),A(f,Ca.EventType.MESSAGE,x=>{var C;if(!w){const y=x.data[0];Rt(!!y);const S=y,L=S.error||((C=S[0])===null||C===void 0?void 0:C.error);if(L){ne(Ut,`RPC '${e}' stream ${i} received error:`,L);const V=L.status;let F=function(T){const R=ot[T];if(R!==void 0)return D2(R)}(V),E=L.message;F===void 0&&(F=W.INTERNAL,E="Unknown error status: "+V+" with message "+L.message),w=!0,v.po(new fe(F,E)),f.close()}else ne(Ut,`RPC '${e}' stream ${i} received:`,y),v.yo(y)}}),A(a,eR.STAT_EVENT,x=>{x.stat===Xp.PROXY?ne(Ut,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Xp.NOPROXY&&ne(Ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function Af(){return typeof document<"u"?document:null}/**
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
 */function ed(t){return new L2(t,!0)}/**
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
 */class xR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class wV{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new xR(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(as(n.toString()),as("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new fe(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EV extends wV{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Rt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=z2(e.writeResults,e.commitTime),r=oo(e.commitTime);return this.listener.A_(r,n)}return Rt(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=$2(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>j2(this.serializer,r))};this.i_(n)}}/**
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
 */class SV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new fe(W.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,im(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new fe(W.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,im(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new fe(W.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class TV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(as(n),this.y_=!1):ne("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class IV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{jl(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Ge(u);c.M_.add(4),await Bl(c),c.N_.set("Unknown"),c.M_.delete(4),await td(c)}(this))})}),this.N_=new TV(r,i)}}async function td(t){if(jl(t))for(const e of t.x_)await e(!0)}async function Bl(t){for(const e of t.x_)await e(!1)}function jl(t){return Ge(t).M_.size===0}async function DR(t,e,n){if(!Yh(e))throw e;t.M_.add(1),await Bl(t),t.N_.set("Offline"),n||(n=()=>fV(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await td(t)})}function LR(t,e){return e().catch(n=>DR(t,n,e))}async function nd(t){const e=Ge(t),n=wi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;RV(e);)try{const i=await pV(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,CV(e,i)}catch(i){await DR(e,i)}MR(e)&&VR(e)}function RV(t){return jl(t)&&t.v_.length<10}function CV(t,e){t.v_.push(e);const n=wi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function MR(t){return jl(t)&&!wi(t).Zo()&&t.v_.length>0}function VR(t){wi(t).start()}async function AV(t){wi(t).V_()}async function kV(t){const e=wi(t);for(const n of t.v_)e.d_(n.mutations)}async function NV(t,e,n){const r=t.v_.shift(),i=Kg.from(r,e,n);await LR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nd(t)}async function PV(t,e){e&&wi(t).E_&&await async function(r,i){if(function(o){return x2(o)&&o!==W.ABORTED}(i.code)){const s=r.v_.shift();wi(r).t_(),await LR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await nd(r)}}(t,e),MR(t)&&VR(t)}async function W0(t,e){const n=Ge(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=jl(n);n.M_.add(3),await Bl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await td(n)}async function bV(t,e){const n=Ge(t);e?(n.M_.delete(2),await td(n)):e||(n.M_.add(2),await Bl(n),n.N_.set("Unknown"))}function wi(t){return t.k_||(t.k_=function(n,r,i){const s=Ge(n);return s.f_(),new EV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:AV.bind(null,t),Ao:PV.bind(null,t),R_:kV.bind(null,t),A_:NV.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await nd(t)):(await t.k_.stop(),t.v_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Xg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Xg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function FR(t,e){if(as("AsyncQueue",`${e}: ${t}`),Yh(t))return new fe(W.UNAVAILABLE,`${e}: ${t}`);throw t}class OV{constructor(){this.queries=new $o(e=>_R(e),gR),this.onlineState="Unknown",this.z_=new Set}}function xV(t){t.z_.forEach(e=>{e.next()})}var H0,G0;(G0=H0||(H0={})).J_="default",G0.Cache="cache";class DV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new $o(a=>_R(a),gR),this.Da=new Map,this.Ca=new Set,this.va=new Jn(_e.comparator),this.Fa=new Map,this.Ma=new qg,this.xa={},this.Oa=new Map,this.Na=Io.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function LV(t,e,n){const r=UV(t);try{const i=await function(o,a){const u=Ge(o),c=It.now(),d=a.reduce((w,v)=>w.add(v.key),jt());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let v=ah(),A=jt();return u.os.getEntries(w,d).next(x=>{v=x,v.forEach((C,y)=>{y.isValidDocument()||(A=A.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,v)).next(x=>{f=x;const C=[];for(const y of a){const S=N2(y,f.get(y.key).overlayedDocument);S!=null&&C.push(new Es(y.key,S,uR(S.value.mapValue),Rr.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,C,a)}).next(x=>{m=x;const C=x.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(w,x.batchId,C)})}).then(()=>({batchId:m.batchId,changes:vR(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Jn(Ve)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await rd(r,i.changes),await nd(r.remoteStore)}catch(i){const s=FR(i,"Failed to persist write");n.reject(s)}}function K0(t,e,n){const r=Ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=Ge(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&xV(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MV(t,e){const n=Ge(t),r=e.batch.batchId;try{const i=await dV(n.localStore,e);$R(n,r,null),UR(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await rd(n,i)}catch(i){await sR(i)}}async function VV(t,e,n){const r=Ge(t);try{const i=await function(o,a){const u=Ge(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Rt(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);$R(r,e,n),UR(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await rd(r,i)}catch(i){await sR(i)}}function UR(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function $R(t,e,n){const r=Ge(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}async function rd(t,e,n){const r=Ge(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Yg.Ki(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=Ge(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,m=>j.forEach(m.qi,w=>d.persistence.referenceDelegate.addReference(f,m.targetId,w)).next(()=>j.forEach(m.Qi,w=>d.persistence.referenceDelegate.removeReference(f,m.targetId,w)))))}catch(f){if(!Yh(f))throw f;ne("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const w=d.ns.get(m),v=w.snapshotVersion,A=w.withLastLimboFreeSnapshotVersion(v);d.ns=d.ns.insert(m,A)}}}(r.localStore,s))}async function FV(t,e){const n=Ge(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await OR(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new fe(W.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await rd(n,r.us)}}function UV(t){const e=Ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VV.bind(null,e),e}class q0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ed(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hV(this.persistence,new uV,e.initialUser,this.serializer)}createPersistence(e){return new oV(Qg.Hr,this.serializer)}createSharedClientState(e){return new mV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $V{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>K0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FV.bind(null,this.syncEngine),await bV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OV}()}createDatastore(e){const n=ed(e.databaseInfo.databaseId),r=function(s){return new vV(s)}(e.databaseInfo);return function(s,o,a,u){return new SV(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new IV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>K0(this.syncEngine,n,0),function(){return z0.D()?new z0:new gV}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new DV(i,s,o,a,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Ge(r);ne("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Bl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class BV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$t.UNAUTHENTICATED,this.clientId=iR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ne("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ne("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fe(W.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=FR(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kf(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await OR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Q0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zV(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>W0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>W0(e.remoteStore,i)),t._onlineComponents=e}function jV(t){return t.name==="FirebaseError"?t.code===W.FAILED_PRECONDITION||t.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function zV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await kf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!jV(n))throw n;th("Error using user provided cache. Falling back to memory cache: "+n),await kf(t,new q0)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await kf(t,new q0);return t._offlineComponents}async function WV(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await Q0(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await Q0(t,new $V))),t._onlineComponents}function HV(t){return WV(t).then(e=>e.syncEngine)}/**
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
 */function BR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Y0=new Map;/**
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
 */function GV(t,e,n){if(!n)throw new fe(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KV(t,e,n,r){if(e===!0&&r===!0)throw new fe(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function X0(t){if(!_e.isDocumentKey(t))throw new fe(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ee()}function om(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fe(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jg(t);throw new fe(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class J0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new fe(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=BR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new fe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new fe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new fe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zg{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new J0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fe(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new fe(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new J0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new MM;switch(r.type){case"firstParty":return new $M(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new fe(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Y0.get(n);r&&(ne("ComponentProvider","Removing Datastore"),Y0.delete(n),r.terminate())}(this),Promise.resolve()}}function qV(t,e,n,r={}){var i;const s=(t=om(t,Zg))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&th("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=$t.MOCK_USER;else{a=Fb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new fe(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new $t(c)}t._authCredentials=new VM(new rR(a,u))}}/**
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
 */class e_{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new e_(this.firestore,e,this._query)}}class Cr{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Cr(this.firestore,e,this._key)}}class Tl extends e_{constructor(e,n,r){super(e,n,f2(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Cr(this.firestore,null,new _e(e))}withConverter(e){return new Tl(this.firestore,e,this._path)}}function QV(t,e,...n){if(t=Pn(t),arguments.length===1&&(e=iR.newId()),GV("doc","path",e),t instanceof Zg){const r=at.fromString(e,...n);return X0(r),new Cr(t,null,new _e(r))}{if(!(t instanceof Cr||t instanceof Tl))throw new fe(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(at.fromString(e,...n));return X0(r),new Cr(t.firestore,t instanceof Tl?t.converter:null,new _e(r))}}/**
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
 */class YV{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new xR(this,"async_queue_retry"),this.hu=()=>{const n=Af();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Af();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Af();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new qi;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Yh(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw as("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Xg.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Ee()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class jR extends Zg{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new YV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zR(this),this._firestoreClient.terminate()}}function XV(t,e){const n=typeof t=="object"?t:GT(),r=typeof t=="string"?t:"(default)",i=Dl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Vb("firestore");s&&qV(i,...s)}return i}function JV(t){return t._firestoreClient||zR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new e2(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,BR(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new BV(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Il{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Il(Dr.fromBase64String(e))}catch(n){throw new fe(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Il(Dr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class WR{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class HR{constructor(e){this._methodName=e}}/**
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
 */class GR{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}}/**
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
 */const ZV=/^__.*__$/;class eF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Es(e,this.data,this.fieldMask,n,this.fieldTransforms):new $l(e,this.data,n,this.fieldTransforms)}}function KR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class t_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new t_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ch(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(KR(this.fu)&&ZV.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class tF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ed(e)}Fu(e,n,r,i=!1){return new t_({fu:e,methodName:n,vu:r,path:bt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nF(t){const e=t._freezeSettings(),n=ed(t._databaseId);return new tF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rF(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);XR("Data must be an object, but it was:",o,r);const a=QR(r,o);let u,c;if(s.merge)u=new Hn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=iF(e,f,n);if(!o.contains(m))throw new fe(W.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);aF(d,m)||d.push(m)}u=new Hn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new eF(new zn(a),u,c)}function qR(t,e){if(YR(t=Pn(t)))return XR("Unsupported field value:",e,t),QR(t,e);if(t instanceof HR)return function(r,i){if(!KR(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=qR(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return T2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=It.fromDate(r);return{timestampValue:rm(i.serializer,s)}}if(r instanceof It){const s=new It(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rm(i.serializer,s)}}if(r instanceof GR)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Il)return{bytesValue:M2(i.serializer,r._byteString)};if(r instanceof Cr){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:PR(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Jg(r)}`)}(t,e)}function QR(t,e){const n={};return aR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ul(t,(r,i)=>{const s=qR(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function YR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof It||t instanceof GR||t instanceof Il||t instanceof Cr||t instanceof HR)}function XR(t,e,n){if(!YR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Jg(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function iF(t,e,n){if((e=Pn(e))instanceof WR)return e._internalPath;if(typeof e=="string")return oF(t,e);throw ch("Field path arguments must be of type string or ",t,!1,void 0,n)}const sF=new RegExp("[~\\*/\\[\\]]");function oF(t,e,n){if(e.search(sF)>=0)throw ch(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new WR(...e.split("."))._internalPath}catch{throw ch(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ch(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new fe(W.INVALID_ARGUMENT,a+t+u)}function aF(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function lF(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function uF(t,e,n){t=om(t,Cr);const r=om(t.firestore,jR),i=lF(t.converter,e);return cF(r,[rF(nF(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Rr.none())])}function cF(t,e){return function(r,i){const s=new qi;return r.asyncQueue.enqueueAndForget(async()=>LV(await HV(r),i,s)),s.promise}(JV(t),e)}(function(e,n=!0){(function(i){Uo=i})(vs),Xn(new bn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new jR(new FM(r.getProvider("auth-internal")),new jM(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new fe(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ih(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),cn(N0,"4.6.4",e),cn(N0,"4.6.4","esm2017")})();const hF={apiKey:"AIzaSyC6iK6Lrux-4MEpEc-zJYFrdZaPLjGUhNQ",authDomain:"todoreactapp-74bab.firebaseapp.com",databaseURL:"https://todoreactapp-74bab-default-rtdb.europe-west1.firebasedatabase.app",projectId:"todoreactapp-74bab",storageBucket:"todoreactapp-74bab.appspot.com",messagingSenderId:"590837115647",appId:"1:590837115647:web:c608d9ebb993d4e2427aca",measurementId:"G-VG9R1F5WT0"},dF=HT(hF),fF=XV(dF),Z0=DM();var ew={};const tw="@firebase/database",nw="1.0.6";/**
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
 */let JR="";function pF(t){JR=t}/**
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
 */class mF{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ml(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class gF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ZR=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mF(e)}}catch{}return new gF},Hi=ZR("localStorage"),_F=ZR("sessionStorage");/**
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
 */const ao=new xl("@firebase/database"),yF=function(){let t=1;return function(){return t++}}(),eC=function(t){const e=Zb(t),n=new qb;n.update(e);const r=n.digest();return Ig.encodeByteArray(r)},zl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=zl.apply(null,r):typeof r=="object"?e+=Pt(r):e+=r,e+=" "}return e};let za=null,rw=!0;const vF=function(t,e){X(!e,"Can't turn on custom loggers persistently."),ao.logLevel=ve.VERBOSE,za=ao.log.bind(ao)},zt=function(...t){if(rw===!0&&(rw=!1,za===null&&_F.get("logging_enabled")===!0&&vF()),za){const e=zl.apply(null,t);za(e)}},Wl=function(t){return function(...e){zt(t,...e)}},am=function(...t){const e="FIREBASE INTERNAL ERROR: "+zl(...t);ao.error(e)},us=function(...t){const e=`FIREBASE FATAL ERROR: ${zl(...t)}`;throw ao.error(e),new Error(e)},yn=function(...t){const e="FIREBASE WARNING: "+zl(...t);ao.warn(e)},wF=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},EF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ro="[MIN_NAME]",cs="[MAX_NAME]",Bo=function(t,e){if(t===e)return 0;if(t===Ro||e===cs)return-1;if(e===Ro||t===cs)return 1;{const n=iw(t),r=iw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},SF=function(t,e){return t===e?0:t<e?-1:1},fa=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pt(e))},n_=function(t){if(typeof t!="object"||t===null)return Pt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Pt(e[r]),n+=":",n+=n_(t[e[r]]);return n+="}",n},nC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function On(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const rC=function(t){X(!tC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},TF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},IF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},RF=new RegExp("^-?(0*)\\d{1,10}$"),CF=-2147483648,AF=2147483647,iw=function(t){if(RF.test(t)){const e=Number(t);if(e>=CF&&e<=AF)return e}return null},Hl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw yn("Exception was thrown by user callback.",n),e},Math.floor(0))}},kF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class NF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){yn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class PF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(zt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yn(e)}}/**
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
 */const r_="5",iC="v",sC="s",oC="r",aC="f",lC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uC="ls",cC="p",lm="ac",hC="websocket",dC="long_polling";/**
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
 */class bF{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function OF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fC(t,e,n){X(typeof e=="string","typeof type must == string"),X(typeof n=="object","typeof params must == object");let r;if(e===hC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===dC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);OF(t)&&(n.ns=t.namespace);const i=[];return On(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class xF{constructor(){this.counters_={}}incrementCounter(e,n=1){Mr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return bb(this.counters_)}}/**
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
 */const Nf={},Pf={};function i_(t){const e=t.toString();return Nf[e]||(Nf[e]=new xF),Nf[e]}function DF(t,e){const n=t.toString();return Pf[n]||(Pf[n]=e()),Pf[n]}/**
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
 */class LF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Hl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const sw="start",MF="close",VF="pLPCommand",FF="pRTLPCB",pC="id",mC="pw",gC="ser",UF="cb",$F="seg",BF="ts",jF="d",zF="dframe",_C=1870,yC=30,WF=_C-yC,HF=25e3,GF=3e4;class Qs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wl(e),this.stats_=i_(n),this.urlFn=u=>(this.appCheckToken&&(u[lm]=this.appCheckToken),fC(n,dC,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new LF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GF)),EF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new s_((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===sw)this.id=a,this.password=u;else if(o===MF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[sw]="t",r[gC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[UF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[iC]=r_,this.transportSessionId&&(r[sC]=this.transportSessionId),this.lastSessionId&&(r[uC]=this.lastSessionId),this.applicationId&&(r[cC]=this.applicationId),this.appCheckToken&&(r[lm]=this.appCheckToken),typeof location<"u"&&location.hostname&&lC.test(location.hostname)&&(r[oC]=aC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qs.forceAllow_=!0}static forceDisallow(){Qs.forceDisallow_=!0}static isAvailable(){return Qs.forceAllow_?!0:!Qs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TF()&&!IF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bT(n),i=nC(r,WF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[zF]="t",r[pC]=e,r[mC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class s_{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yF(),window[VF+this.uniqueCallbackIdentifier]=e,window[FF+this.uniqueCallbackIdentifier]=n,this.myIFrame=s_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){zt("frame writing exception"),a.stack&&zt(a.stack),zt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||zt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pC]=this.myID,e[mC]=this.myPW,e[gC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yC+r.length<=_C;){const o=this.pendingSegs.shift();r=r+"&"+$F+i+"="+o.seg+"&"+BF+i+"="+o.ts+"&"+jF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(HF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{zt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const KF=16384,qF=45e3;let hh=null;typeof MozWebSocket<"u"?hh=MozWebSocket:typeof WebSocket<"u"&&(hh=WebSocket);class Wn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wl(this.connId),this.stats_=i_(n),this.connURL=Wn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[iC]=r_,typeof location<"u"&&location.hostname&&lC.test(location.hostname)&&(o[oC]=aC),n&&(o[sC]=n),r&&(o[uC]=r),i&&(o[lm]=i),s&&(o[cC]=s),fC(e,hC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hi.set("previous_websocket_failure",!0);try{let r;FT(),this.mySock=new hh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Wn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&hh!==null&&!Wn.forceDisallow_}static previouslyFailed(){return Hi.isInMemoryStorage||Hi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ml(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(X(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Pt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=nC(n,KF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wn.responsesRequiredToBeHealthy=2;Wn.healthyTimeout=3e4;/**
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
 */class Rl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qs,Wn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Wn&&Wn.isAvailable();let r=n&&!Wn.previouslyFailed();if(e.webSocketOnly&&(n||yn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Wn];else{const i=this.transports_=[];for(const s of Rl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Rl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rl.globalTransportInitialized_=!1;/**
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
 */const QF=6e4,YF=5e3,XF=10*1024,JF=100*1024,bf="t",ow="d",ZF="s",aw="r",eU="e",lw="o",uw="a",cw="n",hw="p",tU="h";class nU{constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wl("c:"+this.id+":"),this.transportManager_=new Rl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bf in e){const n=e[bf];n===uw?this.upgradeIfSecondaryHealthy_():n===aw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===lw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=fa("t",e),r=fa("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:uw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=fa("t",e),r=fa("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=fa(bf,e);if(ow in e){const r=e[ow];if(n===tU){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===cw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ZF?this.onConnectionShutdown_(r):n===aw?this.onReset_(r):n===eU?am("Server Error: "+r):n===lw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):am("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),r_!==r&&yn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Wa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class vC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class wC{constructor(e){this.allowedEvents_=e,this.listeners_={},X(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){X(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class dh extends wC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new dh}getInitialEvent(e){return X(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const dw=32,fw=768;class Ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function be(){return new Ke("")}function Te(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ei(t){return t.pieces_.length-t.pieceNum_}function ze(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ke(t.pieces_,e)}function EC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rU(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function SC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function TC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ke(e,0)}function St(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ke)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ke(n,0)}function we(t){return t.pieceNum_>=t.pieces_.length}function Rn(t,e){const n=Te(t),r=Te(e);if(n===null)return e;if(n===r)return Rn(ze(t),ze(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function IC(t,e){if(Ei(t)!==Ei(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Gn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ei(t)>Ei(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class iU{constructor(e,n){this.errorPrefix_=n,this.parts_=SC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=zh(this.parts_[r]);RC(this)}}function sU(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zh(e),RC(t)}function oU(t){const e=t.parts_.pop();t.byteLength_-=zh(e),t.parts_.length>0&&(t.byteLength_-=1)}function RC(t){if(t.byteLength_>fw)throw new Error(t.errorPrefix_+"has a key path longer than "+fw+" bytes ("+t.byteLength_+").");if(t.parts_.length>dw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dw+") or object contains a cycle "+Fi(t))}function Fi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class o_ extends wC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new o_}getInitialEvent(e){return X(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const pa=1e3,aU=60*5*1e3,pw=30*1e3,lU=1.3,uU=3e4,cU="server_kill",mw=3;class Ar extends vC{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Ar.nextPersistentConnectionId_++,this.log_=Wl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pa,this.maxReconnectDelay_=aU,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!FT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");o_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&dh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Pt(s)),X(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Rg,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),X(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;Ar.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mr(e,"w")){const r=vo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();yn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Kb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Gb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):am("Unrecognized action received from server: "+Pt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){X(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uU&&(this.reconnectDelay_=pa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ar.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){X(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?zt("getToken() completed but was canceled"):(zt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new nU(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,w=>{yn(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(cU)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&yn(f),u())}}}interrupt(e){zt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){zt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bp(this.interruptReasons_)&&(this.reconnectDelay_=pa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>n_(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ke(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){zt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mw&&(this.reconnectDelay_=pw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){zt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+JR.replace(/\./g,"-")]=1,Cg()?e["framework.cordova"]=1:VT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=dh.getInstance().currentlyOnline();return Bp(this.interruptReasons_)&&e}}Ar.nextPersistentConnectionId_=0;Ar.nextConnectionId_=0;/**
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
 */class Ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ie(e,n)}}/**
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
 */class id{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ie(Ro,e),i=new Ie(Ro,n);return this.compare(r,i)!==0}minPost(){return Ie.MIN}}/**
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
 */let Wu;class CC extends id{static get __EMPTY_NODE(){return Wu}static set __EMPTY_NODE(e){Wu=e}compare(e,n){return Bo(e.name,n.name)}isDefinedOn(e){throw Mo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ie.MIN}maxPost(){return new Ie(cs,Wu)}makePost(e,n){return X(typeof e=="string","KeyIndex indexValue must always be a string."),new Ie(e,Wu)}toString(){return".key"}}const lo=new CC;/**
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
 */class Hu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class wt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??wt.RED,this.left=i??on.EMPTY_NODE,this.right=s??on.EMPTY_NODE}copy(e,n,r,i,s){return new wt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return on.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return on.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}wt.RED=!0;wt.BLACK=!1;class hU{copy(e,n,r,i,s){return this}insert(e,n,r){return new wt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class on{constructor(e,n=on.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new on(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,wt.BLACK,null,null))}remove(e){return new on(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,wt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Hu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Hu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Hu(this.root_,null,this.comparator_,!0,e)}}on.EMPTY_NODE=new hU;/**
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
 */function dU(t,e){return Bo(t.name,e.name)}function a_(t,e){return Bo(t,e)}/**
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
 */let um;function fU(t){um=t}const AC=function(t){return typeof t=="number"?"number:"+rC(t):"string:"+t},kC=function(t){if(t.isLeafNode()){const e=t.val();X(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mr(e,".sv"),"Priority must be a string or number.")}else X(t===um||t.isEmpty(),"priority of unexpected type.");X(t===um||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let gw;class _t{constructor(e,n=_t.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,X(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kC(this.priorityNode_)}static set __childrenNodeConstructor(e){gw=e}static get __childrenNodeConstructor(){return gw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _t(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_t.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return we(e)?this:Te(e)===".priority"?this.priorityNode_:_t.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Te(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(X(r!==".priority"||Ei(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,_t.__childrenNodeConstructor.EMPTY_NODE.updateChild(ze(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=rC(this.value_):e+=this.value_,this.lazyHash_=eC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _t.__childrenNodeConstructor?-1:(X(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=_t.VALUE_TYPE_ORDER.indexOf(n),s=_t.VALUE_TYPE_ORDER.indexOf(r);return X(i>=0,"Unknown leaf type: "+n),X(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_t.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let NC,PC;function pU(t){NC=t}function mU(t){PC=t}class gU extends id{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Bo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ie.MIN}maxPost(){return new Ie(cs,new _t("[PRIORITY-POST]",PC))}makePost(e,n){const r=NC(e);return new Ie(n,new _t("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ht=new gU;/**
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
 */const _U=Math.log(2);class yU{constructor(e){const n=s=>parseInt(Math.log(s)/_U,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fh=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,m;if(d===0)return null;if(d===1)return f=t[u],m=n?n(f):f,new wt(m,f.node,wt.BLACK,null,null);{const w=parseInt(d/2,10)+u,v=i(u,w),A=i(w+1,c);return f=t[w],m=n?n(f):f,new wt(m,f.node,wt.BLACK,v,A)}},s=function(u){let c=null,d=null,f=t.length;const m=function(v,A){const x=f-v,C=f;f-=v;const y=i(x+1,C),S=t[x],L=n?n(S):S;w(new wt(L,S.node,A,null,y))},w=function(v){c?(c.left=v,c=v):(d=v,c=v)};for(let v=0;v<u.count;++v){const A=u.nextBitIsOne(),x=Math.pow(2,u.count-(v+1));A?m(x,wt.BLACK):(m(x,wt.BLACK),m(x,wt.RED))}return d},o=new yU(t.length),a=s(o);return new on(r||e,a)};/**
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
 */let Of;const xs={};class Tr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return X(xs&&Ht,"ChildrenNode.ts has not been loaded"),Of=Of||new Tr({".priority":xs},{".priority":Ht}),Of}get(e){const n=vo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof on?n:null}hasIndex(e){return Mr(this.indexSet_,e.toString())}addIndex(e,n){X(e!==lo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Ie.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=fh(r,e.getCompare()):a=xs;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Tr(d,c)}addToIndexes(e,n){const r=Gc(this.indexes_,(i,s)=>{const o=vo(this.indexSet_,s);if(X(o,"Missing index implementation for "+s),i===xs)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(Ie.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),fh(a,o.getCompare())}else return xs;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new Ie(e.name,a))),u.insert(e,e.node)}});return new Tr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Gc(this.indexes_,i=>{if(i===xs)return i;{const s=n.get(e.name);return s?i.remove(new Ie(e.name,s)):i}});return new Tr(r,this.indexSet_)}}/**
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
 */let ma;class ke{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&kC(this.priorityNode_),this.children_.isEmpty()&&X(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ma||(ma=new ke(new on(a_),null,Tr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ma}updatePriority(e){return this.children_.isEmpty()?this:new ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ma:n}}getChild(e){const n=Te(e);return n===null?this:this.getImmediateChild(n).getChild(ze(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(X(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ie(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ma:this.priorityNode_;return new ke(i,o,s)}}updateChild(e,n){const r=Te(e);if(r===null)return n;{X(Te(e)!==".priority"||Ei(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ze(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ht,(o,a)=>{n[o]=a.val(e),r++,s&&ke.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AC(this.getPriority().val())+":"),this.forEachChild(Ht,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":eC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Ie(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gl?-1:0}withIndex(e){if(e===lo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ke(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===lo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ht),i=n.getIterator(Ht);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===lo?null:this.indexMap_.get(e.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vU extends ke{constructor(){super(new on(a_),ke.EMPTY_NODE,Tr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}}const Gl=new vU;Object.defineProperties(Ie,{MIN:{value:new Ie(Ro,ke.EMPTY_NODE)},MAX:{value:new Ie(cs,Gl)}});CC.__EMPTY_NODE=ke.EMPTY_NODE;_t.__childrenNodeConstructor=ke;fU(Gl);mU(Gl);/**
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
 */const wU=!0;function Wt(t,e=null){if(t===null)return ke.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),X(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _t(n,Wt(e))}if(!(t instanceof Array)&&wU){const n=[];let r=!1;if(On(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Wt(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new Ie(o,u)))}}),n.length===0)return ke.EMPTY_NODE;const s=fh(n,dU,o=>o.name,a_);if(r){const o=fh(n,Ht.getCompare());return new ke(s,Wt(e),new Tr({".priority":o},{".priority":Ht}))}else return new ke(s,Wt(e),Tr.Default)}else{let n=ke.EMPTY_NODE;return On(t,(r,i)=>{if(Mr(t,r)&&r.substring(0,1)!=="."){const s=Wt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Wt(e))}}pU(Wt);/**
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
 */class EU extends id{constructor(e){super(),this.indexPath_=e,X(!we(e)&&Te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Bo(e.name,n.name):s}makePost(e,n){const r=Wt(e),i=ke.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ie(n,i)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,Gl);return new Ie(cs,e)}toString(){return SC(this.indexPath_,0).join("/")}}/**
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
 */class SU extends id{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Bo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ie.MIN}maxPost(){return Ie.MAX}makePost(e,n){const r=Wt(e);return new Ie(n,r)}toString(){return".value"}}const TU=new SU;/**
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
 */function IU(t){return{type:"value",snapshotNode:t}}function RU(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function CU(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _w(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function AU(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class l_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return X(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return X(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ro}hasEnd(){return this.endSet_}getIndexEndValue(){return X(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return X(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return X(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ht}copy(){const e=new l_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ht?n="$priority":t.index_===TU?n="$value":t.index_===lo?n="$key":(X(t.index_ instanceof EU,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Pt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Pt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Pt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Pt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ht&&(e.i=t.index_.toString()),e}/**
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
 */class ph extends vC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Wl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(X(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ph.getListenId_(e,r),a={};this.listens_[o]=a;const u=yw(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),vo(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=ph.getListenId_(e,n);delete this.listens_[r]}get(e){const n=yw(e._queryParams),r=e._path.toString(),i=new Rg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=ml(a.responseText)}catch{yn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&yn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class kU{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function mh(){return{value:null,children:new Map}}function bC(t,e,n){if(we(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Te(e);t.children.has(r)||t.children.set(r,mh());const i=t.children.get(r);e=ze(e),bC(i,e,n)}}function cm(t,e,n){t.value!==null?n(e,t.value):NU(t,(r,i)=>{const s=new Ke(e.toString()+"/"+r);cm(i,s,n)})}function NU(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class PU{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&On(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const ww=10*1e3,bU=30*1e3,OU=5*60*1e3;class xU{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PU(e);const r=ww+(bU-ww)*Math.random();Wa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;On(e,(i,s)=>{s>0&&Mr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Wa(this.reportStats_.bind(this),Math.floor(Math.random()*2*OU))}}/**
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
 */var rr;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rr||(rr={}));function OC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xC(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function DC(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class gh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=rr.ACK_USER_WRITE,this.source=OC()}operationForChild(e){if(we(this.path)){if(this.affectedTree.value!=null)return X(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ke(e));return new gh(be(),n,this.revert)}}else return X(Te(this.path)===e,"operationForChild called for unrelated child."),new gh(ze(this.path),this.affectedTree,this.revert)}}/**
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
 */class hs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=rr.OVERWRITE}operationForChild(e){return we(this.path)?new hs(this.source,be(),this.snap.getImmediateChild(e)):new hs(this.source,ze(this.path),this.snap)}}/**
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
 */class Cl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=rr.MERGE}operationForChild(e){if(we(this.path)){const n=this.children.subtree(new Ke(e));return n.isEmpty()?null:n.value?new hs(this.source,be(),n.value):new Cl(this.source,be(),n)}else return X(Te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cl(this.source,ze(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class u_{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(we(e))return this.isFullyInitialized()&&!this.filtered_;const n=Te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function DU(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(AU(o.childName,o.snapshotNode))}),ga(t,i,"child_removed",e,r,n),ga(t,i,"child_added",e,r,n),ga(t,i,"child_moved",s,r,n),ga(t,i,"child_changed",e,r,n),ga(t,i,"value",e,r,n),i}function ga(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>MU(t,a,u)),o.forEach(a=>{const u=LU(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function LU(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function MU(t,e,n){if(e.childName==null||n.childName==null)throw Mo("Should only compare child_ events.");const r=new Ie(e.childName,e.snapshotNode),i=new Ie(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function LC(t,e){return{eventCache:t,serverCache:e}}function Ha(t,e,n,r){return LC(new u_(e,n,r),t.serverCache)}function MC(t,e,n,r){return LC(t.eventCache,new u_(e,n,r))}function hm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ds(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let xf;const VU=()=>(xf||(xf=new on(SF)),xf);class je{constructor(e,n=VU()){this.value=e,this.children=n}static fromObject(e){let n=new je(null);return On(e,(r,i)=>{n=n.set(new Ke(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:be(),value:this.value};if(we(e))return null;{const r=Te(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ze(e),n);return s!=null?{path:St(new Ke(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(we(e))return this;{const n=Te(e),r=this.children.get(n);return r!==null?r.subtree(ze(e)):new je(null)}}set(e,n){if(we(e))return new je(n,this.children);{const r=Te(e),s=(this.children.get(r)||new je(null)).set(ze(e),n),o=this.children.insert(r,s);return new je(this.value,o)}}remove(e){if(we(e))return this.children.isEmpty()?new je(null):new je(null,this.children);{const n=Te(e),r=this.children.get(n);if(r){const i=r.remove(ze(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new je(null):new je(this.value,s)}else return this}}get(e){if(we(e))return this.value;{const n=Te(e),r=this.children.get(n);return r?r.get(ze(e)):null}}setTree(e,n){if(we(e))return n;{const r=Te(e),s=(this.children.get(r)||new je(null)).setTree(ze(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new je(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(St(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,be(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(we(e))return null;{const s=Te(e),o=this.children.get(s);return o?o.findOnPath_(ze(e),St(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,be(),n)}foreachOnPath_(e,n,r){if(we(e))return this;{this.value&&r(n,this.value);const i=Te(e),s=this.children.get(i);return s?s.foreachOnPath_(ze(e),St(n,i),r):new je(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(St(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Qn{constructor(e){this.writeTree_=e}static empty(){return new Qn(new je(null))}}function Ga(t,e,n){if(we(e))return new Qn(new je(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Rn(i,e);return s=s.updateChild(o,n),new Qn(t.writeTree_.set(i,s))}else{const i=new je(n),s=t.writeTree_.setTree(e,i);return new Qn(s)}}}function Ew(t,e,n){let r=t;return On(n,(i,s)=>{r=Ga(r,St(e,i),s)}),r}function Sw(t,e){if(we(e))return Qn.empty();{const n=t.writeTree_.setTree(e,new je(null));return new Qn(n)}}function dm(t,e){return Ss(t,e)!=null}function Ss(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Rn(n.path,e)):null}function Tw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ht,(r,i)=>{e.push(new Ie(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Ie(r,i.value))}),e}function mi(t,e){if(we(e))return t;{const n=Ss(t,e);return n!=null?new Qn(new je(n)):new Qn(t.writeTree_.subtree(e))}}function fm(t){return t.writeTree_.isEmpty()}function Co(t,e){return VC(be(),t.writeTree_,e)}function VC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(X(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=VC(St(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(St(t,".priority"),r)),n}}/**
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
 */function FC(t,e){return zC(e,t)}function FU(t,e,n,r,i){X(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ga(t.visibleWrites,e,n)),t.lastWriteId=r}function UU(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function $U(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);X(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&BU(a,r.path)?i=!1:Gn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return jU(t),!0;if(r.snap)t.visibleWrites=Sw(t.visibleWrites,r.path);else{const a=r.children;On(a,u=>{t.visibleWrites=Sw(t.visibleWrites,St(r.path,u))})}return!0}else return!1}function BU(t,e){if(t.snap)return Gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Gn(St(t.path,n),e))return!0;return!1}function jU(t){t.visibleWrites=UC(t.allWrites,zU,be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zU(t){return t.visible}function UC(t,e,n){let r=Qn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Gn(n,o)?(a=Rn(n,o),r=Ga(r,a,s.snap)):Gn(o,n)&&(a=Rn(o,n),r=Ga(r,be(),s.snap.getChild(a)));else if(s.children){if(Gn(n,o))a=Rn(n,o),r=Ew(r,a,s.children);else if(Gn(o,n))if(a=Rn(o,n),we(a))r=Ew(r,be(),s.children);else{const u=vo(s.children,Te(a));if(u){const c=u.getChild(ze(a));r=Ga(r,be(),c)}}}else throw Mo("WriteRecord should have .snap or .children")}}return r}function $C(t,e,n,r,i){if(!r&&!i){const s=Ss(t.visibleWrites,e);if(s!=null)return s;{const o=mi(t.visibleWrites,e);if(fm(o))return n;if(n==null&&!dm(o,be()))return null;{const a=n||ke.EMPTY_NODE;return Co(o,a)}}}else{const s=mi(t.visibleWrites,e);if(!i&&fm(s))return n;if(!i&&n==null&&!dm(s,be()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Gn(c.path,e)||Gn(e,c.path))},a=UC(t.allWrites,o,e),u=n||ke.EMPTY_NODE;return Co(a,u)}}}function WU(t,e,n){let r=ke.EMPTY_NODE;const i=Ss(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ht,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=mi(t.visibleWrites,e);return n.forEachChild(Ht,(o,a)=>{const u=Co(mi(s,new Ke(o)),a);r=r.updateImmediateChild(o,u)}),Tw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=mi(t.visibleWrites,e);return Tw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function HU(t,e,n,r,i){X(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=St(e,n);if(dm(t.visibleWrites,s))return null;{const o=mi(t.visibleWrites,s);return fm(o)?i.getChild(n):Co(o,i.getChild(n))}}function GU(t,e,n,r){const i=St(e,n),s=Ss(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=mi(t.visibleWrites,i);return Co(o,r.getNode().getImmediateChild(n))}else return null}function KU(t,e){return Ss(t.visibleWrites,e)}function qU(t,e,n,r,i,s,o){let a;const u=mi(t.visibleWrites,e),c=Ss(u,be());if(c!=null)a=c;else if(n!=null)a=Co(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let w=m.getNext();for(;w&&d.length<i;)f(w,r)!==0&&d.push(w),w=m.getNext();return d}else return[]}function QU(){return{visibleWrites:Qn.empty(),allWrites:[],lastWriteId:-1}}function pm(t,e,n,r){return $C(t.writeTree,t.treePath,e,n,r)}function BC(t,e){return WU(t.writeTree,t.treePath,e)}function Iw(t,e,n,r){return HU(t.writeTree,t.treePath,e,n,r)}function _h(t,e){return KU(t.writeTree,St(t.treePath,e))}function YU(t,e,n,r,i,s){return qU(t.writeTree,t.treePath,e,n,r,i,s)}function c_(t,e,n){return GU(t.writeTree,t.treePath,e,n)}function jC(t,e){return zC(St(t.treePath,e),t.writeTree)}function zC(t,e){return{treePath:t,writeTree:e}}/**
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
 */class XU{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;X(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),X(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,_w(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,CU(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,RU(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,_w(r,e.snapshotNode,i.oldSnap));else throw Mo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class JU{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const WC=new JU;class h_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new u_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return c_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ds(this.viewCache_),s=YU(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function ZU(t,e){X(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),X(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function e4(t,e,n,r,i){const s=new XU;let o,a;if(n.type===rr.OVERWRITE){const c=n;c.source.fromUser?o=mm(t,e,c.path,c.snap,r,i,s):(X(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!we(c.path),o=yh(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===rr.MERGE){const c=n;c.source.fromUser?o=n4(t,e,c.path,c.children,r,i,s):(X(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=gm(t,e,c.path,c.children,r,i,a,s))}else if(n.type===rr.ACK_USER_WRITE){const c=n;c.revert?o=s4(t,e,c.path,r,i,s):o=r4(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===rr.LISTEN_COMPLETE)o=i4(t,e,n.path,r,s);else throw Mo("Unknown operation type: "+n.type);const u=s.getChanges();return t4(e,o,u),{viewCache:o,changes:u}}function t4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=hm(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(IU(hm(e)))}}function HC(t,e,n,r,i,s){const o=e.eventCache;if(_h(r,n)!=null)return e;{let a,u;if(we(n))if(X(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ds(e),d=c instanceof ke?c:ke.EMPTY_NODE,f=BC(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=pm(r,ds(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Te(n);if(c===".priority"){X(Ei(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=Iw(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=ze(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=Iw(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=c_(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return Ha(e,a,o.isFullyInitialized()||we(n),t.filter.filtersNodes())}}function yh(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(we(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const w=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),w,null)}else{const w=Te(n);if(!u.isCompleteForPath(n)&&Ei(n)>1)return e;const v=ze(n),x=u.getNode().getImmediateChild(w).updateChild(v,r);w===".priority"?c=d.updatePriority(u.getNode(),x):c=d.updateChild(u.getNode(),w,x,v,WC,null)}const f=MC(e,c,u.isFullyInitialized()||we(n),d.filtersNodes()),m=new h_(i,f,s);return HC(t,f,n,i,m,a)}function mm(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new h_(i,e,s);if(we(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Ha(e,c,!0,t.filter.filtersNodes());else{const f=Te(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Ha(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=ze(n),w=a.getNode().getImmediateChild(f);let v;if(we(m))v=r;else{const A=d.getCompleteChild(f);A!=null?EC(m)===".priority"&&A.getChild(TC(m)).isEmpty()?v=A:v=A.updateChild(m,r):v=ke.EMPTY_NODE}if(w.equals(v))u=e;else{const A=t.filter.updateChild(a.getNode(),f,v,m,d,o);u=Ha(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Rw(t,e){return t.eventCache.isCompleteForChild(e)}function n4(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=St(n,u);Rw(e,Te(d))&&(a=mm(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=St(n,u);Rw(e,Te(d))||(a=mm(t,a,d,c,i,s,o))}),a}function Cw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function gm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;we(n)?c=r:c=new je(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const w=e.serverCache.getNode().getImmediateChild(f),v=Cw(t,w,m);u=yh(t,u,new Ke(f),v,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const w=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!w){const v=e.serverCache.getNode().getImmediateChild(f),A=Cw(t,v,m);u=yh(t,u,new Ke(f),A,i,s,o,a)}}),u}function r4(t,e,n,r,i,s,o){if(_h(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(we(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return yh(t,e,n,u.getNode().getChild(n),i,s,a,o);if(we(n)){let c=new je(null);return u.getNode().forEachChild(lo,(d,f)=>{c=c.set(new Ke(d),f)}),gm(t,e,n,c,i,s,a,o)}else return e}else{let c=new je(null);return r.foreach((d,f)=>{const m=St(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),gm(t,e,n,c,i,s,a,o)}}function i4(t,e,n,r,i){const s=e.serverCache,o=MC(e,s.getNode(),s.isFullyInitialized()||we(n),s.isFiltered());return HC(t,o,n,r,WC,i)}function s4(t,e,n,r,i,s){let o;if(_h(r,n)!=null)return e;{const a=new h_(r,e,i),u=e.eventCache.getNode();let c;if(we(n)||Te(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=pm(r,ds(e));else{const f=e.serverCache.getNode();X(f instanceof ke,"serverChildren would be complete if leaf node"),d=BC(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=Te(n);let f=c_(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,ze(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,ke.EMPTY_NODE,ze(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pm(r,ds(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||_h(r,be())!=null,Ha(e,c,o,t.filter.filtersNodes())}}function o4(t,e){const n=ds(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!we(e)&&!n.getImmediateChild(Te(e)).isEmpty())?n.getChild(e):null}function Aw(t,e,n,r){e.type===rr.MERGE&&e.source.queryId!==null&&(X(ds(t.viewCache_),"We should always have a full cache before handling merges"),X(hm(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=e4(t.processor_,i,e,n,r);return ZU(t.processor_,s.viewCache),X(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,a4(t,s.changes,s.viewCache.eventCache.getNode())}function a4(t,e,n,r){const i=t.eventRegistrations_;return DU(t.eventGenerator_,e,n,i)}/**
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
 */let kw;function l4(t){X(!kw,"__referenceConstructor has already been defined"),kw=t}function d_(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return X(s!=null,"SyncTree gave us an op for an invalid query."),Aw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Aw(o,e,n,r));return s}}function f_(t,e){let n=null;for(const r of t.views.values())n=n||o4(r,e);return n}/**
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
 */let Nw;function u4(t){X(!Nw,"__referenceConstructor has already been defined"),Nw=t}class Pw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new je(null),this.pendingWriteTree_=QU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function c4(t,e,n,r,i){return FU(t.pendingWriteTree_,e,n,r,i),i?od(t,new hs(OC(),e,n)):[]}function Ys(t,e,n=!1){const r=UU(t.pendingWriteTree_,e);if($U(t.pendingWriteTree_,e)){let s=new je(null);return r.snap!=null?s=s.set(be(),!0):On(r.children,o=>{s=s.set(new Ke(o),!0)}),od(t,new gh(r.path,s,n))}else return[]}function sd(t,e,n){return od(t,new hs(xC(),e,n))}function h4(t,e,n){const r=je.fromObject(n);return od(t,new Cl(xC(),e,r))}function d4(t,e,n,r){const i=QC(t,r);if(i!=null){const s=YC(i),o=s.path,a=s.queryId,u=Rn(o,e),c=new hs(DC(a),u,n);return XC(t,o,c)}else return[]}function f4(t,e,n,r){const i=QC(t,r);if(i){const s=YC(i),o=s.path,a=s.queryId,u=Rn(o,e),c=je.fromObject(n),d=new Cl(DC(a),u,c);return XC(t,o,d)}else return[]}function GC(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Rn(o,e),c=f_(a,u);if(c)return c});return $C(i,e,s,n,!0)}function od(t,e){return KC(e,t.syncPointTree_,null,FC(t.pendingWriteTree_,be()))}function KC(t,e,n,r){if(we(t.path))return qC(t,e,n,r);{const i=e.get(be());n==null&&i!=null&&(n=f_(i,be()));let s=[];const o=Te(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=jC(r,o);s=s.concat(KC(a,u,c,d))}return i&&(s=s.concat(d_(i,t,r,n))),s}}function qC(t,e,n,r){const i=e.get(be());n==null&&i!=null&&(n=f_(i,be()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=jC(r,o),d=t.operationForChild(o);d&&(s=s.concat(qC(d,a,u,c)))}),i&&(s=s.concat(d_(i,t,r,n))),s}function QC(t,e){return t.tagToQueryMap.get(e)}function YC(t){const e=t.indexOf("$");return X(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ke(t.substr(0,e))}}function XC(t,e,n){const r=t.syncPointTree_.get(e);X(r,"Missing sync point for query tag that we're tracking");const i=FC(t.pendingWriteTree_,e);return d_(r,n,i,null)}/**
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
 */class p_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new p_(n)}node(){return this.node_}}class m_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=St(this.path_,e);return new m_(this.syncTree_,n)}node(){return GC(this.syncTree_,this.path_)}}const p4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bw=function(t,e,n){if(!t||typeof t!="object")return t;if(X(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return m4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return g4(t[".sv"],e);X(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},m4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:X(!1,"Unexpected server value: "+t)}},g4=function(t,e,n){t.hasOwnProperty("increment")||X(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&X(!1,"Unexpected increment value: "+r);const i=e.node();if(X(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},_4=function(t,e,n,r){return g_(e,new m_(n,t),r)},y4=function(t,e,n){return g_(t,new p_(e),n)};function g_(t,e,n){const r=t.getPriority().val(),i=bw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=bw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new _t(a,Wt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new _t(i))),o.forEachChild(Ht,(a,u)=>{const c=g_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class __{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function y_(t,e){let n=e instanceof Ke?e:new Ke(e),r=t,i=Te(n);for(;i!==null;){const s=vo(r.node.children,i)||{children:{},childCount:0};r=new __(i,r,s),n=ze(n),i=Te(n)}return r}function jo(t){return t.node.value}function JC(t,e){t.node.value=e,_m(t)}function ZC(t){return t.node.childCount>0}function v4(t){return jo(t)===void 0&&!ZC(t)}function ad(t,e){On(t.node.children,(n,r)=>{e(new __(n,t,r))})}function eA(t,e,n,r){n&&!r&&e(t),ad(t,i=>{eA(i,e,!0,r)}),n&&r&&e(t)}function w4(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Kl(t){return new Ke(t.parent===null?t.name:Kl(t.parent)+"/"+t.name)}function _m(t){t.parent!==null&&E4(t.parent,t.name,t)}function E4(t,e,n){const r=v4(n),i=Mr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,_m(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,_m(t))}/**
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
 */const S4=/[\[\].#$\/\u0000-\u001F\u007F]/,T4=/[\[\].#$\u0000-\u001F\u007F]/,Df=10*1024*1024,tA=function(t){return typeof t=="string"&&t.length!==0&&!S4.test(t)},I4=function(t){return typeof t=="string"&&t.length!==0&&!T4.test(t)},R4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),I4(t)},nA=function(t,e,n){const r=n instanceof Ke?new iU(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fi(r));if(typeof e=="function")throw new Error(t+"contains a function "+Fi(r)+" with contents = "+e.toString());if(tC(e))throw new Error(t+"contains "+e.toString()+" "+Fi(r));if(typeof e=="string"&&e.length>Df/3&&zh(e)>Df)throw new Error(t+"contains a string greater than "+Df+" utf8 bytes "+Fi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(On(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!tA(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sU(r,o),nA(t,a,r),oU(r)}),i&&s)throw new Error(t+' contains ".value" child '+Fi(r)+" in addition to actual children.")}},C4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!R4(n))throw new Error(Jb(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class A4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function k4(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!IC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ts(t,e,n){k4(t,n),N4(t,r=>Gn(r,e)||Gn(e,r))}function N4(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(P4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function P4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();za&&zt("event: "+n.toString()),Hl(r)}}}/**
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
 */const b4="repo_interrupt",O4=25;class x4{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new A4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mh(),this.transactionQueueTree_=new __,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function D4(t,e,n){if(t.stats_=i_(t.repoInfo_),t.forceRestClient_||kF())t.server_=new ph(t.repoInfo_,(r,i,s,o)=>{Ow(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>xw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ar(t.repoInfo_,e,(r,i,s,o)=>{Ow(t,r,i,s,o)},r=>{xw(t,r)},r=>{M4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=DF(t.repoInfo_,()=>new xU(t.stats_,t.server_)),t.infoData_=new kU,t.infoSyncTree_=new Pw({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=sd(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),v_(t,"connected",!1),t.serverSyncTree_=new Pw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);Ts(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function L4(t){const n=t.infoData_.getNode(new Ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rA(t){return p4({timestamp:L4(t)})}function Ow(t,e,n,r,i){t.dataUpdateCount++;const s=new Ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Gc(n,c=>Wt(c));o=f4(t.serverSyncTree_,s,u,i)}else{const u=Wt(n);o=d4(t.serverSyncTree_,s,u,i)}else if(r){const u=Gc(n,c=>Wt(c));o=h4(t.serverSyncTree_,s,u)}else{const u=Wt(n);o=sd(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=E_(t,s)),Ts(t.eventQueue_,a,o)}function xw(t,e){v_(t,"connected",e),e===!1&&F4(t)}function M4(t,e){On(e,(n,r)=>{v_(t,n,r)})}function v_(t,e,n){const r=new Ke("/.info/"+e),i=Wt(n);t.infoData_.updateSnapshot(r,i);const s=sd(t.infoSyncTree_,r,i);Ts(t.eventQueue_,r,s)}function V4(t){return t.nextWriteId_++}function F4(t){iA(t,"onDisconnectEvents");const e=rA(t),n=mh();cm(t.onDisconnect_,be(),(i,s)=>{const o=_4(i,s,t.serverSyncTree_,e);bC(n,i,o)});let r=[];cm(n,be(),(i,s)=>{r=r.concat(sd(t.serverSyncTree_,i,s));const o=j4(t,i);E_(t,o)}),t.onDisconnect_=mh(),Ts(t.eventQueue_,be(),r)}function U4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(b4)}function iA(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),zt(n,...e)}function sA(t,e,n){return GC(t.serverSyncTree_,e,n)||ke.EMPTY_NODE}function w_(t,e=t.transactionQueueTree_){if(e||ld(t,e),jo(e)){const n=aA(t,e);X(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&$4(t,Kl(e),n)}else ZC(e)&&ad(e,n=>{w_(t,n)})}function $4(t,e,n){const r=n.map(c=>c.currentWriteId),i=sA(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];X(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Rn(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{iA(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(Ys(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();ld(t,y_(t.transactionQueueTree_,e)),w_(t,t.transactionQueueTree_),Ts(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)Hl(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{yn("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}E_(t,e)}},o)}function E_(t,e){const n=oA(t,e),r=Kl(n),i=aA(t,n);return B4(t,i,r),r}function B4(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Rn(n,u.path);let d=!1,f;if(X(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(Ys(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=O4)d=!0,f="maxretry",i=i.concat(Ys(t.serverSyncTree_,u.currentWriteId,!0));else{const m=sA(t,u.path,o);u.currentInputSnapshot=m;const w=e[a].update(m.val());if(w!==void 0){nA("transaction failed: Data returned ",w,u.path);let v=Wt(w);typeof w=="object"&&w!=null&&Mr(w,".priority")||(v=v.updatePriority(m.getPriority()));const x=u.currentWriteId,C=rA(t),y=y4(v,m,C);u.currentOutputSnapshotRaw=v,u.currentOutputSnapshotResolved=y,u.currentWriteId=V4(t),o.splice(o.indexOf(x),1),i=i.concat(c4(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),i=i.concat(Ys(t.serverSyncTree_,x,!0))}else d=!0,f="nodata",i=i.concat(Ys(t.serverSyncTree_,u.currentWriteId,!0))}Ts(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}ld(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Hl(r[a]);w_(t,t.transactionQueueTree_)}function oA(t,e){let n,r=t.transactionQueueTree_;for(n=Te(e);n!==null&&jo(r)===void 0;)r=y_(r,n),e=ze(e),n=Te(e);return r}function aA(t,e){const n=[];return lA(t,e,n),n.sort((r,i)=>r.order-i.order),n}function lA(t,e,n){const r=jo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ad(e,i=>{lA(t,i,n)})}function ld(t,e){const n=jo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,JC(e,n.length>0?n:void 0)}ad(e,r=>{ld(t,r)})}function j4(t,e){const n=Kl(oA(t,e)),r=y_(t.transactionQueueTree_,e);return w4(r,i=>{Lf(t,i)}),Lf(t,r),eA(r,i=>{Lf(t,i)}),n}function Lf(t,e){const n=jo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(X(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(X(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ys(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?JC(e,void 0):n.length=s+1,Ts(t.eventQueue_,Kl(e),i);for(let o=0;o<r.length;o++)Hl(r[o])}}/**
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
 */function z4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function W4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):yn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Dw=function(t,e){const n=H4(t),r=n.namespace;n.domain==="firebase.com"&&us(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&us("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wF();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bF(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ke(n.pathString)}},H4=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=z4(t.substring(d,f)));const m=W4(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const w=e.slice(0,c);if(w.toLowerCase()==="localhost")n="localhost";else if(w.split(".").length<=2)n=w;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class S_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return we(this._path)?null:EC(this._path)}get ref(){return new zo(this._repo,this._path)}get _queryIdentifier(){const e=vw(this._queryParams),n=n_(e);return n==="{}"?"default":n}get _queryObject(){return vw(this._queryParams)}isEqual(e){if(e=Pn(e),!(e instanceof S_))return!1;const n=this._repo===e._repo,r=IC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rU(this._path)}}class zo extends S_{constructor(e,n){super(e,n,new l_,!1)}get parent(){const e=TC(this._path);return e===null?null:new zo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}l4(zo);u4(zo);/**
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
 */const G4="FIREBASE_DATABASE_EMULATOR_HOST",ym={};let K4=!1;function q4(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||us("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),zt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Dw(s,i),a=o.repoInfo,u;typeof process<"u"&&ew&&(u=ew[G4]),u?(s=`http://${u}?ns=${a.namespace}`,o=Dw(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new PF(t.name,t.options,e);C4("Invalid Firebase Database URL",o),we(o.path)||us("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Y4(a,t,c,new NF(t.name,n));return new X4(d,t)}function Q4(t,e){const n=ym[e];(!n||n[t.key]!==t)&&us(`Database ${e}(${t.repoInfo_}) has already been deleted.`),U4(t),delete n[t.key]}function Y4(t,e,n,r){let i=ym[e.name];i||(i={},ym[e.name]=i);let s=i[t.toURLString()];return s&&us("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new x4(t,K4,n,r),i[t.toURLString()]=s,s}class X4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(D4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zo(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Q4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&us("Cannot call "+e+" on a deleted database.")}}/**
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
 */function J4(t){pF(vs),Xn(new bn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return q4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),cn(tw,nw,t),cn(tw,nw,"esm2017")}Ar.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ar.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};J4();const Z4=t=>B.jsx(yo,{to:"/REACT_VITE_TODOAPP/home",className:"capitalize bg-white rounded-3xl text-black px-4 py-2 hover:bg-transparent hover:border hover:border-white hover:text-white border border-transparent transition-all",children:t.title});/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var uA=t$,Lw=n$,e$=Object.prototype.toString,Gu=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function t$(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var n={},r=e||{},i=r.decode||r$,s=0;s<t.length;){var o=t.indexOf("=",s);if(o===-1)break;var a=t.indexOf(";",s);if(a===-1)a=t.length;else if(a<o){s=t.lastIndexOf(";",o-1)+1;continue}var u=t.slice(s,o).trim();if(n[u]===void 0){var c=t.slice(o+1,a).trim();c.charCodeAt(0)===34&&(c=c.slice(1,-1)),n[u]=o$(c,i)}s=a+1}return n}function n$(t,e,n){var r=n||{},i=r.encode||i$;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!Gu.test(t))throw new TypeError("argument name is invalid");var s=i(e);if(s&&!Gu.test(s))throw new TypeError("argument val is invalid");var o=t+"="+s;if(r.maxAge!=null){var a=r.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Gu.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Gu.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){var u=r.expires;if(!s$(u)||isNaN(u.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+u.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.partitioned&&(o+="; Partitioned"),r.priority){var c=typeof r.priority=="string"?r.priority.toLowerCase():r.priority;switch(c){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(r.sameSite){var d=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(d){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return o}function r$(t){return t.indexOf("%")!==-1?decodeURIComponent(t):t}function i$(t){return encodeURIComponent(t)}function s$(t){return e$.call(t)==="[object Date]"||t instanceof Date}function o$(t,e){try{return e(t)}catch{return t}}function a$(){const t=typeof global>"u"?void 0:global.TEST_HAS_DOCUMENT_COOKIE;return typeof t=="boolean"?t:typeof document=="object"&&typeof document.cookie=="string"}function l$(t){return typeof t=="string"?uA(t):typeof t=="object"&&t!==null?t:{}}function Mf(t,e={}){const n=u$(t);if(!e.doNotParse)try{return JSON.parse(n)}catch{}return t}function u$(t){return t&&t[0]==="j"&&t[1]===":"?t.substr(2):t}class T_{constructor(e,n={}){this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.update=()=>{if(!this.HAS_DOCUMENT_COOKIE)return;const i=this.cookies;this.cookies=uA(document.cookie),this._checkChanges(i)};const r=typeof document>"u"?"":document.cookie;this.cookies=l$(e||r),this.defaultSetOptions=n,this.HAS_DOCUMENT_COOKIE=a$()}_emitChange(e){for(let n=0;n<this.changeListeners.length;++n)this.changeListeners[n](e)}_checkChanges(e){new Set(Object.keys(e).concat(Object.keys(this.cookies))).forEach(r=>{e[r]!==this.cookies[r]&&this._emitChange({name:r,value:Mf(this.cookies[r])})})}_startPolling(){this.pollingInterval=setInterval(this.update,300)}_stopPolling(){this.pollingInterval&&clearInterval(this.pollingInterval)}get(e,n={}){return n.doNotUpdate||this.update(),Mf(this.cookies[e],n)}getAll(e={}){e.doNotUpdate||this.update();const n={};for(let r in this.cookies)n[r]=Mf(this.cookies[r],e);return n}set(e,n,r){r?r=Object.assign(Object.assign({},this.defaultSetOptions),r):r=this.defaultSetOptions;const i=typeof n=="string"?n:JSON.stringify(n);this.cookies=Object.assign(Object.assign({},this.cookies),{[e]:i}),this.HAS_DOCUMENT_COOKIE&&(document.cookie=Lw(e,i,r)),this._emitChange({name:e,value:n,options:r})}remove(e,n){const r=n=Object.assign(Object.assign(Object.assign({},this.defaultSetOptions),n),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Object.assign({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=Lw(e,"",r)),this._emitChange({name:e,value:void 0,options:n})}addChangeListener(e){this.changeListeners.push(e),this.HAS_DOCUMENT_COOKIE&&this.changeListeners.length===1&&(typeof window=="object"&&"cookieStore"in window?window.cookieStore.addEventListener("change",this.update):this._startPolling())}removeChangeListener(e){const n=this.changeListeners.indexOf(e);n>=0&&this.changeListeners.splice(n,1),this.HAS_DOCUMENT_COOKIE&&this.changeListeners.length===0&&(typeof window=="object"&&"cookieStore"in window?window.cookieStore.removeEventListener("change",this.update):this._stopPolling())}}const c$=t=>{const e=new T_;return B.jsx(B.Fragment,{children:B.jsxs("div",{className:"header container m-auto md:p-5 lg:p-5 flex justify-between items-center px-10 py-5",children:[B.jsx(yo,{to:"/REACT_VITE_TODOAPP/",children:B.jsx("h2",{className:`${t.activeTextAnimation?"animateText":""} text-white`,style:{textShadow:t.activeTextAnimation?"":"1px 1px 3px white"},children:"TODO"})}),B.jsxs("div",{className:"flex items-center gap-2",children:[e.get("isLogined")?"":B.jsx(yo,{to:"/REACT_VITE_TODOAPP/home/login",className:"btn",style:{fontSize:"14px",padding:"3px",height:"fit-content"},children:"Login"}),B.jsx("a",{href:"https://github.com/Elsayed-Rady-Elsayed",children:B.jsx("i",{className:"fa-brands fa-github text-gray-600 hover:text-white transition-all"})}),B.jsx("a",{className:"ms-3",href:"https://www.linkedin.com/in/elsayed-rady-elsayed-73b541288/",children:B.jsx("i",{className:"fa-brands fa-linkedin text-gray-600 hover:text-[#378fe9] transition-all"})})]})]})})},h$=t=>B.jsxs("div",{className:"onBoarding absolute left-1/2 top-1/2 p-5 text-center",style:{transform:"translate(-50%,-50%)"},children:[B.jsx("h1",{className:`text-white mb-4 py-2 ${t.activeTextAnimation?"animateText-lg":""} text-2xl md:text-4xl lg:text-4xl capitalize`,style:{},children:"start doing your tasks"}),B.jsx(Z4,{title:"get started"})]}),ir=t=>{const e=G.useRef(0),[n,r]=G.useState(""),i=s=>{e.current.style.borderColor=s};return t.setClicked&&n==""?i("red"):t.setClicked&&n.length>0&&i("#596A95"),B.jsxs("div",{className:"flex flex-col text-white/80 capitalize font-light",children:[B.jsx("label",{className:"mb-2",htmlFor:t.name,children:t.placeholder}),B.jsx("input",{ref:e,style:{boxShadow:"inset 2px 5px 10px rgba(0, 0, 0, 0.3)"},id:t.name,placeholder:t.placeholder,className:"bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]",name:t.name,autoComplete:"off",type:t.type,value:n,onChange:s=>{s.target.value===""&&i("red"),t.name=="title"&&s.target.value.trim()===""&&i("red"),r(s.target.value),s.target.value.trim().length>0&&t.value(s)}})]})},d$=()=>B.jsx("div",{className:"container m-auto bg-[#121212]",children:B.jsx(gb,{})}),f$=t=>{const e=G.useRef(0),[n,r]=G.useState(""),i=s=>{e.current.style.borderColor=s};return t.setClicked&&n==""?i("red"):t.setClicked&&n.length>0&&i("#596A95"),B.jsxs("div",{className:"flex flex-col text-white/80 capitalize font-light",children:[B.jsx("label",{className:"mb-2",htmlFor:t.name,children:t.placeholder}),B.jsx("textarea",{ref:e,value:n,rows:"5",name:t.name,autoComplete:"off",placeholder:t.placeholder,id:t.name,style:{resize:"none",boxShadow:"inset 2px 5px 10px rgba(0, 0, 0, 0.3)"},onChange:s=>{s.target.value.trim()===""?i("red"):i("#596A95"),r(s.target.value),t.value(s)},className:"bg-[#222630] w-full px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"})]})},p$=t=>B.jsxs(yo,{to:t.path,children:[B.jsx("i",{className:"fa-solid fa-arrow-left text-white"}),B.jsx("span",{className:"text-white ms-2",children:"back"})]});var cA={};function m$(t){const e=new Error(t);if(e.stack===void 0)try{throw e}catch{}return e}var g$=m$,me=g$;function _$(t){return!!t&&typeof t.then=="function"}var We=_$;function y$(t,e){if(t!=null)return t;throw me(e??"Got unexpected null or undefined")}var Ye=y$;function pe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class ud{getValue(){throw me("BaseLoadable")}toPromise(){throw me("BaseLoadable")}valueMaybe(){throw me("BaseLoadable")}valueOrThrow(){throw me(`Loadable expected value, but in "${this.state}" state`)}promiseMaybe(){throw me("BaseLoadable")}promiseOrThrow(){throw me(`Loadable expected promise, but in "${this.state}" state`)}errorMaybe(){throw me("BaseLoadable")}errorOrThrow(){throw me(`Loadable expected error, but in "${this.state}" state`)}is(e){return e.state===this.state&&e.contents===this.contents}map(e){throw me("BaseLoadable")}}class v$ extends ud{constructor(e){super(),pe(this,"state","hasValue"),pe(this,"contents",void 0),this.contents=e}getValue(){return this.contents}toPromise(){return Promise.resolve(this.contents)}valueMaybe(){return this.contents}valueOrThrow(){return this.contents}promiseMaybe(){}errorMaybe(){}map(e){try{const n=e(this.contents);return We(n)?fs(n):Ao(n)?n:ql(n)}catch(n){return We(n)?fs(n.next(()=>this.map(e))):cd(n)}}}class w$ extends ud{constructor(e){super(),pe(this,"state","hasError"),pe(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return Promise.reject(this.contents)}valueMaybe(){}promiseMaybe(){}errorMaybe(){return this.contents}errorOrThrow(){return this.contents}map(e){return this}}class hA extends ud{constructor(e){super(),pe(this,"state","loading"),pe(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return this.contents}valueMaybe(){}promiseMaybe(){return this.contents}promiseOrThrow(){return this.contents}errorMaybe(){}map(e){return fs(this.contents.then(n=>{const r=e(n);if(Ao(r)){const i=r;switch(i.state){case"hasValue":return i.contents;case"hasError":throw i.contents;case"loading":return i.contents}}return r}).catch(n=>{if(We(n))return n.then(()=>this.map(e).contents);throw n}))}}function ql(t){return Object.freeze(new v$(t))}function cd(t){return Object.freeze(new w$(t))}function fs(t){return Object.freeze(new hA(t))}function dA(){return Object.freeze(new hA(new Promise(()=>{})))}function E$(t){return t.every(e=>e.state==="hasValue")?ql(t.map(e=>e.contents)):t.some(e=>e.state==="hasError")?cd(Ye(t.find(e=>e.state==="hasError"),"Invalid loadable passed to loadableAll").contents):fs(Promise.all(t.map(e=>e.contents)))}function fA(t){const n=(Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(i=>t[i])).map(i=>Ao(i)?i:We(i)?fs(i):ql(i)),r=E$(n);return Array.isArray(t)?r:r.map(i=>Object.getOwnPropertyNames(t).reduce((s,o,a)=>({...s,[o]:i[a]}),{}))}function Ao(t){return t instanceof ud}const S$={of:t=>We(t)?fs(t):Ao(t)?t:ql(t),error:t=>cd(t),loading:()=>dA(),all:fA,isLoadable:Ao};var Is={loadableWithValue:ql,loadableWithError:cd,loadableWithPromise:fs,loadableLoading:dA,loadableAll:fA,isLoadable:Ao,RecoilLoadable:S$},T$=Is.loadableWithValue,I$=Is.loadableWithError,R$=Is.loadableWithPromise,C$=Is.loadableLoading,A$=Is.loadableAll,k$=Is.isLoadable,N$=Is.RecoilLoadable,Ql=Object.freeze({__proto__:null,loadableWithValue:T$,loadableWithError:I$,loadableWithPromise:R$,loadableLoading:C$,loadableAll:A$,isLoadable:k$,RecoilLoadable:N$});const vm={RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED:!0,RECOIL_GKS_ENABLED:new Set(["recoil_hamt_2020","recoil_sync_external_store","recoil_suppress_rerender_in_callback","recoil_memory_managament_2020"])};function P$(t,e){var n,r;const i=(n=cA[t])===null||n===void 0||(r=n.toLowerCase())===null||r===void 0?void 0:r.trim();if(i==null||i==="")return;if(!["true","false"].includes(i))throw me(`process.env.${t} value must be 'true', 'false', or empty: ${i}`);e(i==="true")}function b$(t,e){var n;const r=(n=cA[t])===null||n===void 0?void 0:n.trim();r==null||r===""||e(r.split(/\s*,\s*|\s+/))}function O$(){var t;typeof process>"u"||((t=process)===null||t===void 0?void 0:t.env)!=null&&(P$("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED",e=>{vm.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=e}),b$("RECOIL_GKS_ENABLED",e=>{e.forEach(n=>{vm.RECOIL_GKS_ENABLED.add(n)})}))}O$();var Wo=vm;function hd(t){return Wo.RECOIL_GKS_ENABLED.has(t)}hd.setPass=t=>{Wo.RECOIL_GKS_ENABLED.add(t)};hd.setFail=t=>{Wo.RECOIL_GKS_ENABLED.delete(t)};hd.clear=()=>{Wo.RECOIL_GKS_ENABLED.clear()};var Le=hd;function x$(t,e,{error:n}={}){return null}var D$=x$,I_=D$,Vf,Ff,Uf;const L$=(Vf=Ue.createMutableSource)!==null&&Vf!==void 0?Vf:Ue.unstable_createMutableSource,pA=(Ff=Ue.useMutableSource)!==null&&Ff!==void 0?Ff:Ue.unstable_useMutableSource,mA=(Uf=Ue.useSyncExternalStore)!==null&&Uf!==void 0?Uf:Ue.unstable_useSyncExternalStore;function M$(){var t;const{ReactCurrentDispatcher:e,ReactCurrentOwner:n}=Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;return((t=e==null?void 0:e.current)!==null&&t!==void 0?t:n.currentDispatcher).useSyncExternalStore!=null}function V$(){return Le("recoil_transition_support")?{mode:"TRANSITION_SUPPORT",early:!0,concurrent:!0}:Le("recoil_sync_external_store")&&mA!=null?{mode:"SYNC_EXTERNAL_STORE",early:!0,concurrent:!1}:Le("recoil_mutable_source")&&pA!=null&&typeof window<"u"&&!window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE?Le("recoil_suppress_rerender_in_callback")?{mode:"MUTABLE_SOURCE",early:!0,concurrent:!0}:{mode:"MUTABLE_SOURCE",early:!1,concurrent:!1}:Le("recoil_suppress_rerender_in_callback")?{mode:"LEGACY",early:!0,concurrent:!1}:{mode:"LEGACY",early:!1,concurrent:!1}}function F$(){return!1}var Yl={createMutableSource:L$,useMutableSource:pA,useSyncExternalStore:mA,currentRendererSupportsUseSyncExternalStore:M$,reactMode:V$,isFastRefreshEnabled:F$};class R_{constructor(e){pe(this,"key",void 0),this.key=e}toJSON(){return{key:this.key}}}class gA extends R_{}class _A extends R_{}function U$(t){return t instanceof gA||t instanceof _A}var dd={AbstractRecoilValue:R_,RecoilState:gA,RecoilValueReadOnly:_A,isRecoilValue:U$},$$=dd.AbstractRecoilValue,B$=dd.RecoilState,j$=dd.RecoilValueReadOnly,z$=dd.isRecoilValue,ko=Object.freeze({__proto__:null,AbstractRecoilValue:$$,RecoilState:B$,RecoilValueReadOnly:j$,isRecoilValue:z$});function W$(t,e){return function*(){let n=0;for(const r of t)yield e(r,n++)}()}var fd=W$;class yA{}const H$=new yA,ps=new Map,C_=new Map;function G$(t){return fd(t,e=>Ye(C_.get(e)))}function K$(t){if(ps.has(t)){const e=`Duplicate atom key "${t}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;console.warn(e)}}function q$(t){Wo.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED&&K$(t.key),ps.set(t.key,t);const e=t.set==null?new ko.RecoilValueReadOnly(t.key):new ko.RecoilState(t.key);return C_.set(t.key,e),e}class vA extends Error{}function Q$(t){const e=ps.get(t);if(e==null)throw new vA(`Missing definition for RecoilValue: "${t}""`);return e}function Y$(t){return ps.get(t)}const vh=new Map;function X$(t){var e;if(!Le("recoil_memory_managament_2020"))return;const n=ps.get(t);if(n!=null&&(e=n.shouldDeleteConfigOnRelease)!==null&&e!==void 0&&e.call(n)){var r;ps.delete(t),(r=wA(t))===null||r===void 0||r(),vh.delete(t)}}function J$(t,e){Le("recoil_memory_managament_2020")&&(e===void 0?vh.delete(t):vh.set(t,e))}function wA(t){return vh.get(t)}var fn={nodes:ps,recoilValues:C_,registerNode:q$,getNode:Q$,getNodeMaybe:Y$,deleteNodeConfigIfPossible:X$,setConfigDeletionHandler:J$,getConfigDeletionHandler:wA,recoilValuesForKeys:G$,NodeMissingError:vA,DefaultValue:yA,DEFAULT_VALUE:H$};function Z$(t,e){e()}var eB={enqueueExecution:Z$};function tB(t,e){return e={exports:{}},t(e,e.exports),e.exports}var nB=tB(function(t){var e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},n={},r=5,i=Math.pow(2,r),s=i-1,o=i/2,a=i/4,u={},c=function(N){return function(){return N}},d=n.hash=function(D){var N=typeof D>"u"?"undefined":e(D);if(N==="number")return D;N!=="string"&&(D+="");for(var $=0,Q=0,Y=D.length;Q<Y;++Q){var ee=D.charCodeAt(Q);$=($<<5)-$+ee|0}return $},f=function(N){return N-=N>>1&1431655765,N=(N&858993459)+(N>>2&858993459),N=N+(N>>4)&252645135,N+=N>>8,N+=N>>16,N&127},m=function(N,$){return $>>>N&s},w=function(N){return 1<<N},v=function(N,$){return f(N&$-1)},A=function(N,$,Q,Y){var ee=Y;if(!N){var oe=Y.length;ee=new Array(oe);for(var le=0;le<oe;++le)ee[le]=Y[le]}return ee[$]=Q,ee},x=function(N,$,Q){var Y=Q.length-1,ee=0,oe=0,le=Q;if(N)ee=oe=$;else for(le=new Array(Y);ee<$;)le[oe++]=Q[ee++];for(++ee;ee<=Y;)le[oe++]=Q[ee++];return N&&(le.length=Y),le},C=function(N,$,Q,Y){var ee=Y.length;if(N){for(var oe=ee;oe>=$;)Y[oe--]=Y[oe];return Y[$]=Q,Y}for(var le=0,ue=0,he=new Array(ee+1);le<$;)he[ue++]=Y[le++];for(he[$]=Q;le<ee;)he[++ue]=Y[le++];return he},y=1,S=2,L=3,V=4,F={__hamt_isEmpty:!0},E=function(N){return N===F||N&&N.__hamt_isEmpty},_=function(N,$,Q,Y){return{type:y,edit:N,hash:$,key:Q,value:Y,_modify:q}},T=function(N,$,Q){return{type:S,edit:N,hash:$,children:Q,_modify:ae}},R=function(N,$,Q){return{type:L,edit:N,mask:$,children:Q,_modify:J}},k=function(N,$,Q){return{type:V,edit:N,size:$,children:Q,_modify:re}},b=function(N){return N===F||N.type===y||N.type===S},I=function(N,$,Q,Y,ee){for(var oe=[],le=Y,ue=0,he=0;le;++he)le&1&&(oe[he]=ee[ue++]),le>>>=1;return oe[$]=Q,k(N,ue+1,oe)},Me=function(N,$,Q,Y){for(var ee=new Array($-1),oe=0,le=0,ue=0,he=Y.length;ue<he;++ue)if(ue!==Q){var xe=Y[ue];xe&&!E(xe)&&(ee[oe++]=xe,le|=1<<ue)}return R(N,le,ee)},qt=function D(N,$,Q,Y,ee,oe){if(Q===ee)return T(N,Q,[oe,Y]);var le=m($,Q),ue=m($,ee);return R(N,w(le)|w(ue),le===ue?[D(N,$+r,Q,Y,ee,oe)]:le<ue?[Y,oe]:[oe,Y])},pt=function(N,$,Q,Y,ee,oe,le,ue){for(var he=ee.length,xe=0;xe<he;++xe){var ht=ee[xe];if(Q(le,ht.key)){var it=ht.value,gt=oe(it);return gt===it?ee:gt===u?(--ue.value,x(N,xe,ee)):A(N,xe,_($,Y,le,gt),ee)}}var nn=oe();return nn===u?ee:(++ue.value,A(N,he,_($,Y,le,nn),ee))},ct=function(N,$){return N===$.edit},q=function(N,$,Q,Y,ee,oe,le){if($(oe,this.key)){var ue=Y(this.value);return ue===this.value?this:ue===u?(--le.value,F):ct(N,this)?(this.value=ue,this):_(N,ee,oe,ue)}var he=Y();return he===u?this:(++le.value,qt(N,Q,this.hash,this,ee,_(N,ee,oe,he)))},ae=function(N,$,Q,Y,ee,oe,le){if(ee===this.hash){var ue=ct(N,this),he=pt(ue,N,$,this.hash,this.children,Y,oe,le);return he===this.children?this:he.length>1?T(N,this.hash,he):he[0]}var xe=Y();return xe===u?this:(++le.value,qt(N,Q,this.hash,this,ee,_(N,ee,oe,xe)))},J=function(N,$,Q,Y,ee,oe,le){var ue=this.mask,he=this.children,xe=m(Q,ee),ht=w(xe),it=v(ue,ht),gt=ue&ht,nn=gt?he[it]:F,tt=nn._modify(N,$,Q+r,Y,ee,oe,le);if(nn===tt)return this;var Pi=ct(N,this),Dn=ue,Ln=void 0;if(gt&&E(tt)){if(Dn&=~ht,!Dn)return F;if(he.length<=2&&b(he[it^1]))return he[it^1];Ln=x(Pi,it,he)}else if(!gt&&!E(tt)){if(he.length>=o)return I(N,xe,tt,ue,he);Dn|=ht,Ln=C(Pi,it,tt,he)}else Ln=A(Pi,it,tt,he);return Pi?(this.mask=Dn,this.children=Ln,this):R(N,Dn,Ln)},re=function(N,$,Q,Y,ee,oe,le){var ue=this.size,he=this.children,xe=m(Q,ee),ht=he[xe],it=(ht||F)._modify(N,$,Q+r,Y,ee,oe,le);if(ht===it)return this;var gt=ct(N,this),nn=void 0;if(E(ht)&&!E(it))++ue,nn=A(gt,xe,it,he);else if(!E(ht)&&E(it)){if(--ue,ue<=a)return Me(N,ue,xe,he);nn=A(gt,xe,F,he)}else nn=A(gt,xe,it,he);return gt?(this.size=ue,this.children=nn,this):k(N,ue,nn)};F._modify=function(D,N,$,Q,Y,ee,oe){var le=Q();return le===u?F:(++oe.value,_(D,Y,ee,le))};function P(D,N,$,Q,Y){this._editable=D,this._edit=N,this._config=$,this._root=Q,this._size=Y}P.prototype.setTree=function(D,N){return this._editable?(this._root=D,this._size=N,this):D===this._root?this:new P(this._editable,this._edit,this._config,D,N)};var U=n.tryGetHash=function(D,N,$,Q){for(var Y=Q._root,ee=0,oe=Q._config.keyEq;;)switch(Y.type){case y:return oe($,Y.key)?Y.value:D;case S:{if(N===Y.hash)for(var le=Y.children,ue=0,he=le.length;ue<he;++ue){var xe=le[ue];if(oe($,xe.key))return xe.value}return D}case L:{var ht=m(ee,N),it=w(ht);if(Y.mask&it){Y=Y.children[v(Y.mask,it)],ee+=r;break}return D}case V:{if(Y=Y.children[m(ee,N)],Y){ee+=r;break}return D}default:return D}};P.prototype.tryGetHash=function(D,N,$){return U(D,N,$,this)};var H=n.tryGet=function(D,N,$){return U(D,$._config.hash(N),N,$)};P.prototype.tryGet=function(D,N){return H(D,N,this)};var se=n.getHash=function(D,N,$){return U(void 0,D,N,$)};P.prototype.getHash=function(D,N){return se(D,N,this)},n.get=function(D,N){return U(void 0,N._config.hash(D),D,N)},P.prototype.get=function(D,N){return H(N,D,this)};var Z=n.has=function(D,N,$){return U(u,D,N,$)!==u};P.prototype.hasHash=function(D,N){return Z(D,N,this)};var ce=n.has=function(D,N){return Z(N._config.hash(D),D,N)};P.prototype.has=function(D){return ce(D,this)};var ge=function(N,$){return N===$};n.make=function(D){return new P(0,0,{keyEq:D&&D.keyEq||ge,hash:D&&D.hash||d},F,0)},n.empty=n.make();var ie=n.isEmpty=function(D){return D&&!!E(D._root)};P.prototype.isEmpty=function(){return ie(this)};var Ne=n.modifyHash=function(D,N,$,Q){var Y={value:Q._size},ee=Q._root._modify(Q._editable?Q._edit:NaN,Q._config.keyEq,0,D,N,$,Y);return Q.setTree(ee,Y.value)};P.prototype.modifyHash=function(D,N,$){return Ne($,D,N,this)};var qe=n.modify=function(D,N,$){return Ne(D,$._config.hash(N),N,$)};P.prototype.modify=function(D,N){return qe(N,D,this)};var Ce=n.setHash=function(D,N,$,Q){return Ne(c($),D,N,Q)};P.prototype.setHash=function(D,N,$){return Ce(D,N,$,this)};var Oe=n.set=function(D,N,$){return Ce($._config.hash(D),D,N,$)};P.prototype.set=function(D,N){return Oe(D,N,this)};var Qt=c(u),xn=n.removeHash=function(D,N,$){return Ne(Qt,D,N,$)};P.prototype.removeHash=P.prototype.deleteHash=function(D,N){return xn(D,N,this)};var Yt=n.remove=function(D,N){return xn(N._config.hash(D),D,N)};P.prototype.remove=P.prototype.delete=function(D){return Yt(D,this)};var Xt=n.beginMutation=function(D){return new P(D._editable+1,D._edit+1,D._config,D._root,D._size)};P.prototype.beginMutation=function(){return Xt(this)};var tu=n.endMutation=function(D){return D._editable=D._editable&&D._editable-1,D};P.prototype.endMutation=function(){return tu(this)};var nu=n.mutate=function(D,N){var $=Xt(N);return D($),tu($)};P.prototype.mutate=function(D){return nu(D,this)};var ki=function(N){return N&&Go(N[0],N[1],N[2],N[3],N[4])},Go=function(N,$,Q,Y,ee){for(;Q<N;){var oe=$[Q++];if(oe&&!E(oe))return ru(oe,Y,[N,$,Q,Y,ee])}return ki(ee)},ru=function(N,$,Q){switch(N.type){case y:return{value:$(N),rest:Q};case S:case V:case L:var Y=N.children;return Go(Y.length,Y,0,$,Q);default:return ki(Q)}},Ko={done:!0};function Ni(D){this.v=D}Ni.prototype.next=function(){if(!this.v)return Ko;var D=this.v;return this.v=ki(D.rest),D},Ni.prototype[Symbol.iterator]=function(){return this};var Cs=function(N,$){return new Ni(ru(N._root,$))},mt=function(N){return[N.key,N.value]},Ct=n.entries=function(D){return Cs(D,mt)};P.prototype.entries=P.prototype[Symbol.iterator]=function(){return Ct(this)};var As=function(N){return N.key},iu=n.keys=function(D){return Cs(D,As)};P.prototype.keys=function(){return iu(this)};var su=function(N){return N.value},Nd=n.values=P.prototype.values=function(D){return Cs(D,su)};P.prototype.values=function(){return Nd(this)};var Fr=n.fold=function(D,N,$){var Q=$._root;if(Q.type===y)return D(N,Q.value,Q.key);for(var Y=[Q.children],ee=void 0;ee=Y.pop();)for(var oe=0,le=ee.length;oe<le;){var ue=ee[oe++];ue&&ue.type&&(ue.type===y?N=D(N,ue.value,ue.key):Y.push(ue.children))}return N};P.prototype.fold=function(D,N){return Fr(D,N,this)};var ou=n.forEach=function(D,N){return Fr(function($,Q,Y){return D(Q,Y,N)},null,N)};P.prototype.forEach=function(D){return ou(D,this)};var au=n.count=function(D){return D._size};P.prototype.count=function(){return au(this)},Object.defineProperty(P.prototype,"size",{get:P.prototype.count}),t.exports?t.exports=n:(void 0).hamt=n});class rB{constructor(e){pe(this,"_map",void 0),this._map=new Map(e==null?void 0:e.entries())}keys(){return this._map.keys()}entries(){return this._map.entries()}get(e){return this._map.get(e)}has(e){return this._map.has(e)}set(e,n){return this._map.set(e,n),this}delete(e){return this._map.delete(e),this}clone(){return k_(this)}toMap(){return new Map(this._map)}}class A_{constructor(e){if(pe(this,"_hamt",nB.empty.beginMutation()),e instanceof A_){const n=e._hamt.endMutation();e._hamt=n.beginMutation(),this._hamt=n.beginMutation()}else if(e)for(const[n,r]of e.entries())this._hamt.set(n,r)}keys(){return this._hamt.keys()}entries(){return this._hamt.entries()}get(e){return this._hamt.get(e)}has(e){return this._hamt.has(e)}set(e,n){return this._hamt.set(e,n),this}delete(e){return this._hamt.delete(e),this}clone(){return k_(this)}toMap(){return new Map(this._hamt)}}function k_(t){return Le("recoil_hamt_2020")?new A_(t):new rB(t)}var iB={persistentMap:k_},sB=iB.persistentMap,oB=Object.freeze({__proto__:null,persistentMap:sB});function aB(t,...e){const n=new Set;e:for(const r of t){for(const i of e)if(i.has(r))continue e;n.add(r)}return n}var Ka=aB;function lB(t,e){const n=new Map;return t.forEach((r,i)=>{n.set(i,e(r,i))}),n}var wh=lB;function uB(){return{nodeDeps:new Map,nodeToNodeSubscriptions:new Map}}function cB(t){return{nodeDeps:wh(t.nodeDeps,e=>new Set(e)),nodeToNodeSubscriptions:wh(t.nodeToNodeSubscriptions,e=>new Set(e))}}function $f(t,e,n,r){const{nodeDeps:i,nodeToNodeSubscriptions:s}=n,o=i.get(t);if(o&&r&&o!==r.nodeDeps.get(t))return;i.set(t,e);const a=o==null?e:Ka(e,o);for(const u of a)s.has(u)||s.set(u,new Set),Ye(s.get(u)).add(t);if(o){const u=Ka(o,e);for(const c of u){if(!s.has(c))return;const d=Ye(s.get(c));d.delete(t),d.size===0&&s.delete(c)}}}function hB(t,e,n,r){var i,s,o,a;const u=n.getState();r===u.currentTree.version||r===((i=u.nextTree)===null||i===void 0?void 0:i.version)||((s=u.previousTree)===null||s===void 0||s.version);const c=n.getGraph(r);if($f(t,e,c),r===((o=u.previousTree)===null||o===void 0?void 0:o.version)){const f=n.getGraph(u.currentTree.version);$f(t,e,f,c)}if(r===((a=u.previousTree)===null||a===void 0?void 0:a.version)||r===u.currentTree.version){var d;const f=(d=u.nextTree)===null||d===void 0?void 0:d.version;if(f!==void 0){const m=n.getGraph(f);$f(t,e,m,c)}}}var Xl={cloneGraph:cB,graph:uB,saveDepsToStore:hB};let dB=0;const fB=()=>dB++;let pB=0;const mB=()=>pB++;let gB=0;const _B=()=>gB++;var pd={getNextTreeStateVersion:fB,getNextStoreID:mB,getNextComponentID:_B};const{persistentMap:Mw}=oB,{graph:yB}=Xl,{getNextTreeStateVersion:EA}=pd;function SA(){const t=EA();return{version:t,stateID:t,transactionMetadata:{},dirtyAtoms:new Set,atomValues:Mw(),nonvalidatedAtoms:Mw()}}function vB(){const t=SA();return{currentTree:t,nextTree:null,previousTree:null,commitDepth:0,knownAtoms:new Set,knownSelectors:new Set,transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(t.version,yB()),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map}}var TA={makeEmptyTreeState:SA,makeEmptyStoreState:vB,getNextTreeStateVersion:EA};class IA{}function wB(){return new IA}var md={RetentionZone:IA,retentionZone:wB};function EB(t,e){const n=new Set(t);return n.add(e),n}function SB(t,e){const n=new Set(t);return n.delete(e),n}function TB(t,e,n){const r=new Map(t);return r.set(e,n),r}function IB(t,e,n){const r=new Map(t);return r.set(e,n(r.get(e))),r}function RB(t,e){const n=new Map(t);return n.delete(e),n}function CB(t,e){const n=new Map(t);return e.forEach(r=>n.delete(r)),n}var RA={setByAddingToSet:EB,setByDeletingFromSet:SB,mapBySettingInMap:TB,mapByUpdatingInMap:IB,mapByDeletingFromMap:RB,mapByDeletingMultipleFromMap:CB};function*AB(t,e){let n=0;for(const r of t)e(r,n++)&&(yield r)}var N_=AB;function kB(t,e){return new Proxy(t,{get:(r,i)=>(!(i in r)&&i in e&&(r[i]=e[i]()),r[i]),ownKeys:r=>Object.keys(r)})}var CA=kB;const{getNode:Jl,getNodeMaybe:NB,recoilValuesForKeys:Vw}=fn,{RetentionZone:Fw}=md,{setByAddingToSet:PB}=RA,bB=Object.freeze(new Set);class OB extends Error{}function xB(t,e,n){if(!Le("recoil_memory_managament_2020"))return()=>{};const{nodesRetainedByZone:r}=t.getState().retention;function i(s){let o=r.get(s);o||r.set(s,o=new Set),o.add(e)}if(n instanceof Fw)i(n);else if(Array.isArray(n))for(const s of n)i(s);return()=>{if(!Le("recoil_memory_managament_2020"))return;const{retention:s}=t.getState();function o(a){const u=s.nodesRetainedByZone.get(a);u==null||u.delete(e),u&&u.size===0&&s.nodesRetainedByZone.delete(a)}if(n instanceof Fw)o(n);else if(Array.isArray(n))for(const a of n)o(a)}}function P_(t,e,n,r){const i=t.getState();if(i.nodeCleanupFunctions.has(n))return;const s=Jl(n),o=xB(t,n,s.retainedBy),a=s.init(t,e,r);i.nodeCleanupFunctions.set(n,()=>{a(),o()})}function DB(t,e,n){P_(t,t.getState().currentTree,e,n)}function LB(t,e){var n;const r=t.getState();(n=r.nodeCleanupFunctions.get(e))===null||n===void 0||n(),r.nodeCleanupFunctions.delete(e)}function MB(t,e,n){return P_(t,e,n,"get"),Jl(n).get(t,e)}function AA(t,e,n){return Jl(n).peek(t,e)}function VB(t,e,n){var r;const i=NB(e);return i==null||(r=i.invalidate)===null||r===void 0||r.call(i,t),{...t,atomValues:t.atomValues.clone().delete(e),nonvalidatedAtoms:t.nonvalidatedAtoms.clone().set(e,n),dirtyAtoms:PB(t.dirtyAtoms,e)}}function FB(t,e,n,r){const i=Jl(n);if(i.set==null)throw new OB(`Attempt to set read-only RecoilValue: ${n}`);const s=i.set;return P_(t,e,n,"set"),s(t,e,r)}function UB(t,e,n){const r=t.getState(),i=t.getGraph(e.version),s=Jl(n).nodeType;return CA({type:s},{loadable:()=>AA(t,e,n),isActive:()=>r.knownAtoms.has(n)||r.knownSelectors.has(n),isSet:()=>s==="selector"?!1:e.atomValues.has(n),isModified:()=>e.dirtyAtoms.has(n),deps:()=>{var o;return Vw((o=i.nodeDeps.get(n))!==null&&o!==void 0?o:[])},subscribers:()=>{var o,a;return{nodes:Vw(N_(kA(t,e,new Set([n])),u=>u!==n)),components:fd((o=(a=r.nodeToComponentSubscriptions.get(n))===null||a===void 0?void 0:a.values())!==null&&o!==void 0?o:[],([u])=>({name:u}))}}})}function kA(t,e,n){const r=new Set,i=Array.from(n),s=t.getGraph(e.version);for(let a=i.pop();a;a=i.pop()){var o;r.add(a);const u=(o=s.nodeToNodeSubscriptions.get(a))!==null&&o!==void 0?o:bB;for(const c of u)r.has(c)||i.push(c)}return r}var Ci={getNodeLoadable:MB,peekNodeLoadable:AA,setNodeValue:FB,initializeNode:DB,cleanUpNode:LB,setUnvalidatedAtomValue_DEPRECATED:VB,peekNodeInfo:UB,getDownstreamNodes:kA};let NA=null;function $B(t){NA=t}function BB(){var t;(t=NA)===null||t===void 0||t()}var PA={setInvalidateMemoizedSnapshot:$B,invalidateMemoizedSnapshot:BB};const{getDownstreamNodes:jB,getNodeLoadable:bA,setNodeValue:zB}=Ci,{getNextComponentID:WB}=pd,{getNode:HB,getNodeMaybe:OA}=fn,{DefaultValue:b_}=fn,{reactMode:GB}=Yl,{AbstractRecoilValue:KB,RecoilState:qB,RecoilValueReadOnly:QB,isRecoilValue:YB}=ko,{invalidateMemoizedSnapshot:XB}=PA;function JB(t,{key:e},n=t.getState().currentTree){var r,i;const s=t.getState();n.version===s.currentTree.version||n.version===((r=s.nextTree)===null||r===void 0?void 0:r.version)||(n.version,(i=s.previousTree)===null||i===void 0||i.version);const o=bA(t,n,e);return o.state==="loading"&&o.contents.catch(()=>{}),o}function ZB(t,e){const n=t.clone();return e.forEach((r,i)=>{r.state==="hasValue"&&r.contents instanceof b_?n.delete(i):n.set(i,r)}),n}function ej(t,e,{key:n},r){if(typeof r=="function"){const i=bA(t,e,n);if(i.state==="loading"){const s=`Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;throw me(s)}else if(i.state==="hasError")throw i.contents;return r(i.contents)}else return r}function tj(t,e,n){if(n.type==="set"){const{recoilValue:i,valueOrUpdater:s}=n,o=ej(t,e,i,s),a=zB(t,e,i.key,o);for(const[u,c]of a.entries())wm(e,u,c)}else if(n.type==="setLoadable"){const{recoilValue:{key:i},loadable:s}=n;wm(e,i,s)}else if(n.type==="markModified"){const{recoilValue:{key:i}}=n;e.dirtyAtoms.add(i)}else if(n.type==="setUnvalidated"){var r;const{recoilValue:{key:i},unvalidatedValue:s}=n,o=OA(i);o==null||(r=o.invalidate)===null||r===void 0||r.call(o,e),e.atomValues.delete(i),e.nonvalidatedAtoms.set(i,s),e.dirtyAtoms.add(i)}else I_(`Unknown action ${n.type}`)}function wm(t,e,n){n.state==="hasValue"&&n.contents instanceof b_?t.atomValues.delete(e):t.atomValues.set(e,n),t.dirtyAtoms.add(e),t.nonvalidatedAtoms.delete(e)}function xA(t,e){t.replaceState(n=>{const r=DA(n);for(const i of e)tj(t,r,i);return LA(t,r),XB(),r})}function gd(t,e){if(qa.length){const n=qa[qa.length-1];let r=n.get(t);r||n.set(t,r=[]),r.push(e)}else xA(t,[e])}const qa=[];function nj(){const t=new Map;return qa.push(t),()=>{for(const[e,n]of t)xA(e,n);qa.pop()}}function DA(t){return{...t,atomValues:t.atomValues.clone(),nonvalidatedAtoms:t.nonvalidatedAtoms.clone(),dirtyAtoms:new Set(t.dirtyAtoms)}}function LA(t,e){const n=jB(t,e,e.dirtyAtoms);for(const s of n){var r,i;(r=OA(s))===null||r===void 0||(i=r.invalidate)===null||i===void 0||i.call(r,e)}}function MA(t,e,n){gd(t,{type:"set",recoilValue:e,valueOrUpdater:n})}function rj(t,e,n){if(n instanceof b_)return MA(t,e,n);gd(t,{type:"setLoadable",recoilValue:e,loadable:n})}function ij(t,e){gd(t,{type:"markModified",recoilValue:e})}function sj(t,e,n){gd(t,{type:"setUnvalidated",recoilValue:e,unvalidatedValue:n})}function oj(t,{key:e},n,r=null){const i=WB(),s=t.getState();s.nodeToComponentSubscriptions.has(e)||s.nodeToComponentSubscriptions.set(e,new Map),Ye(s.nodeToComponentSubscriptions.get(e)).set(i,[r??"<not captured>",n]);const o=GB();if(o.early&&(o.mode==="LEGACY"||o.mode==="MUTABLE_SOURCE")){const a=t.getState().nextTree;a&&a.dirtyAtoms.has(e)&&n(a)}return{release:()=>{const a=t.getState(),u=a.nodeToComponentSubscriptions.get(e);u===void 0||!u.has(i)||(u.delete(i),u.size===0&&a.nodeToComponentSubscriptions.delete(e))}}}function aj(t,e){var n;const{currentTree:r}=t.getState(),i=HB(e.key);(n=i.clearCache)===null||n===void 0||n.call(i,t,r)}var cr={RecoilValueReadOnly:QB,AbstractRecoilValue:KB,RecoilState:qB,getRecoilValueAsLoadable:JB,setRecoilValue:MA,setRecoilValueLoadable:rj,markRecoilValueModified:ij,setUnvalidatedRecoilValue:sj,subscribeToRecoilValue:oj,isRecoilValue:YB,applyAtomValueWrites:ZB,batchStart:nj,writeLoadableToTreeState:wm,invalidateDownstreams:LA,copyTreeState:DA,refreshRecoilValue:aj};function lj(t,e,n){const r=t.entries();let i=r.next();for(;!i.done;){const s=i.value;if(e.call(n,s[1],s[0],t))return!0;i=r.next()}return!1}var uj=lj;const{cleanUpNode:cj}=Ci,{deleteNodeConfigIfPossible:hj,getNode:VA}=fn,{RetentionZone:FA}=md,dj=12e4,UA=new Set;function $A(t,e){const n=t.getState(),r=n.currentTree;if(n.nextTree)return;const i=new Set;for(const o of e)if(o instanceof FA)for(const a of gj(n,o))i.add(a);else i.add(o);const s=fj(t,i);for(const o of s)mj(t,r,o)}function fj(t,e){const n=t.getState(),r=n.currentTree,i=t.getGraph(r.version),s=new Set,o=new Set;return a(e),s;function a(u){const c=new Set,d=pj(t,r,u,s,o);for(const v of d){var f;if(VA(v).retainedBy==="recoilRoot"){o.add(v);continue}if(((f=n.retention.referenceCounts.get(v))!==null&&f!==void 0?f:0)>0){o.add(v);continue}if(BA(v).some(x=>n.retention.referenceCounts.get(x))){o.add(v);continue}const A=i.nodeToNodeSubscriptions.get(v);if(A&&uj(A,x=>o.has(x))){o.add(v);continue}s.add(v),c.add(v)}const m=new Set;for(const v of c)for(const A of(w=i.nodeDeps.get(v))!==null&&w!==void 0?w:UA){var w;s.has(A)||m.add(A)}m.size&&a(m)}}function pj(t,e,n,r,i){const s=t.getGraph(e.version),o=[],a=new Set;for(;n.size>0;)u(Ye(n.values().next().value));return o;function u(c){if(r.has(c)||i.has(c)){n.delete(c);return}if(a.has(c))return;const d=s.nodeToNodeSubscriptions.get(c);if(d)for(const f of d)u(f);a.add(c),n.delete(c),o.push(c)}}function mj(t,e,n){if(!Le("recoil_memory_managament_2020"))return;cj(t,n);const r=t.getState();r.knownAtoms.delete(n),r.knownSelectors.delete(n),r.nodeTransactionSubscriptions.delete(n),r.retention.referenceCounts.delete(n);const i=BA(n);for(const u of i){var s;(s=r.retention.nodesRetainedByZone.get(u))===null||s===void 0||s.delete(n)}e.atomValues.delete(n),e.dirtyAtoms.delete(n),e.nonvalidatedAtoms.delete(n);const o=r.graphsByVersion.get(e.version);if(o){const u=o.nodeDeps.get(n);if(u!==void 0){o.nodeDeps.delete(n);for(const c of u){var a;(a=o.nodeToNodeSubscriptions.get(c))===null||a===void 0||a.delete(n)}}o.nodeToNodeSubscriptions.delete(n)}hj(n)}function gj(t,e){var n;return(n=t.retention.nodesRetainedByZone.get(e))!==null&&n!==void 0?n:UA}function BA(t){const e=VA(t).retainedBy;return e===void 0||e==="components"||e==="recoilRoot"?[]:e instanceof FA?[e]:e}function _j(t,e){const n=t.getState();n.nextTree?n.retention.retainablesToCheckForRelease.add(e):$A(t,new Set([e]))}function yj(t,e,n){var r;if(!Le("recoil_memory_managament_2020"))return;const i=t.getState().retention.referenceCounts,s=((r=i.get(e))!==null&&r!==void 0?r:0)+n;s===0?jA(t,e):i.set(e,s)}function jA(t,e){if(!Le("recoil_memory_managament_2020"))return;t.getState().retention.referenceCounts.delete(e),_j(t,e)}function vj(t){if(!Le("recoil_memory_managament_2020"))return;const e=t.getState();$A(t,e.retention.retainablesToCheckForRelease),e.retention.retainablesToCheckForRelease.clear()}function wj(t){return t===void 0?"recoilRoot":t}var Rs={SUSPENSE_TIMEOUT_MS:dj,updateRetainCount:yj,updateRetainCountToZero:jA,releaseScheduledRetainablesNow:vj,retainedByOptionWithDefault:wj};const{unstable_batchedUpdates:Ej}=AP;var Sj={unstable_batchedUpdates:Ej};const{unstable_batchedUpdates:Tj}=Sj;var Ij={unstable_batchedUpdates:Tj};const{batchStart:Rj}=cr,{unstable_batchedUpdates:Cj}=Ij;let O_=Cj||(t=>t());const Aj=t=>{O_=t},kj=()=>O_,Nj=t=>{O_(()=>{let e=()=>{};try{e=Rj(),t()}finally{e()}})};var _d={getBatcher:kj,setBatcher:Aj,batchUpdates:Nj};function*Pj(t){for(const e of t)for(const n of e)yield n}var zA=Pj;const WA=typeof Window>"u"||typeof window>"u",bj=t=>!WA&&(t===window||t instanceof Window),Oj=typeof navigator<"u"&&navigator.product==="ReactNative";var yd={isSSR:WA,isReactNative:Oj,isWindow:bj};function xj(t,e){let n;return(...r)=>{n||(n={});const i=e(...r);return Object.hasOwnProperty.call(n,i)||(n[i]=t(...r)),n[i]}}function Dj(t,e){let n,r;return(...i)=>{const s=e(...i);return n===s||(n=s,r=t(...i)),r}}function Lj(t,e){let n,r;return[(...o)=>{const a=e(...o);return n===a||(n=a,r=t(...o)),r},()=>{n=null}]}var Mj={memoizeWithArgsHash:xj,memoizeOneWithArgsHash:Dj,memoizeOneWithArgsHashAndInvalidation:Lj};const{batchUpdates:Em}=_d,{initializeNode:Vj,peekNodeInfo:Fj}=Ci,{graph:Uj}=Xl,{getNextStoreID:$j}=pd,{DEFAULT_VALUE:Bj,recoilValues:Uw,recoilValuesForKeys:$w}=fn,{AbstractRecoilValue:jj,getRecoilValueAsLoadable:zj,setRecoilValue:Bw,setUnvalidatedRecoilValue:Wj}=cr,{updateRetainCount:_c}=Rs,{setInvalidateMemoizedSnapshot:Hj}=PA,{getNextTreeStateVersion:Gj,makeEmptyStoreState:Kj}=TA,{isSSR:qj}=yd,{memoizeOneWithArgsHashAndInvalidation:Qj}=Mj;class vd{constructor(e,n){pe(this,"_store",void 0),pe(this,"_refCount",1),pe(this,"getLoadable",r=>(this.checkRefCount_INTERNAL(),zj(this._store,r))),pe(this,"getPromise",r=>(this.checkRefCount_INTERNAL(),this.getLoadable(r).toPromise())),pe(this,"getNodes_UNSTABLE",r=>{if(this.checkRefCount_INTERNAL(),(r==null?void 0:r.isModified)===!0){if((r==null?void 0:r.isInitialized)===!1)return[];const o=this._store.getState().currentTree;return $w(o.dirtyAtoms)}const i=this._store.getState().knownAtoms,s=this._store.getState().knownSelectors;return(r==null?void 0:r.isInitialized)==null?Uw.values():r.isInitialized===!0?$w(zA([i,s])):N_(Uw.values(),({key:o})=>!i.has(o)&&!s.has(o))}),pe(this,"getInfo_UNSTABLE",({key:r})=>(this.checkRefCount_INTERNAL(),Fj(this._store,this._store.getState().currentTree,r))),pe(this,"map",r=>{this.checkRefCount_INTERNAL();const i=new Sm(this,Em);return r(i),i}),pe(this,"asyncMap",async r=>{this.checkRefCount_INTERNAL();const i=new Sm(this,Em);return i.retain(),await r(i),i.autoRelease_INTERNAL(),i}),this._store={storeID:$j(),parentStoreID:n,getState:()=>e,replaceState:r=>{e.currentTree=r(e.currentTree)},getGraph:r=>{const i=e.graphsByVersion;if(i.has(r))return Ye(i.get(r));const s=Uj();return i.set(r,s),s},subscribeToTransactions:()=>({release:()=>{}}),addTransactionMetadata:()=>{throw me("Cannot subscribe to Snapshots")}};for(const r of this._store.getState().knownAtoms)Vj(this._store,r,"get"),_c(this._store,r,1);this.autoRelease_INTERNAL()}retain(){this._refCount<=0,this._refCount++;let e=!1;return()=>{e||(e=!0,this._release())}}autoRelease_INTERNAL(){qj||window.setTimeout(()=>this._release(),10)}_release(){if(this._refCount--,this._refCount===0){if(this._store.getState().nodeCleanupFunctions.forEach(e=>e()),this._store.getState().nodeCleanupFunctions.clear(),!Le("recoil_memory_managament_2020"))return}else this._refCount<0}isRetained(){return this._refCount>0}checkRefCount_INTERNAL(){Le("recoil_memory_managament_2020")&&this._refCount<=0}getStore_INTERNAL(){return this.checkRefCount_INTERNAL(),this._store}getID(){return this.checkRefCount_INTERNAL(),this._store.getState().currentTree.stateID}getStoreID(){return this.checkRefCount_INTERNAL(),this._store.storeID}}function HA(t,e,n=!1){const r=t.getState(),i=n?Gj():e.version;return{currentTree:{version:n?i:e.version,stateID:n?i:e.stateID,transactionMetadata:{...e.transactionMetadata},dirtyAtoms:new Set(e.dirtyAtoms),atomValues:e.atomValues.clone(),nonvalidatedAtoms:e.nonvalidatedAtoms.clone()},commitDepth:0,nextTree:null,previousTree:null,knownAtoms:new Set(r.knownAtoms),knownSelectors:new Set(r.knownSelectors),transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(i,t.getGraph(e.version)),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map(fd(r.nodeCleanupFunctions.entries(),([s])=>[s,()=>{}]))}}function Yj(t){const e=new vd(Kj());return t!=null?e.map(t):e}const[jw,GA]=Qj((t,e)=>{var n;const r=t.getState(),i=e==="latest"?(n=r.nextTree)!==null&&n!==void 0?n:r.currentTree:Ye(r.previousTree);return new vd(HA(t,i),t.storeID)},(t,e)=>{var n,r;return String(e)+String(t.storeID)+String((n=t.getState().nextTree)===null||n===void 0?void 0:n.version)+String(t.getState().currentTree.version)+String((r=t.getState().previousTree)===null||r===void 0?void 0:r.version)});Hj(GA);function Xj(t,e="latest"){const n=jw(t,e);return n.isRetained()?n:(GA(),jw(t,e))}class Sm extends vd{constructor(e,n){super(HA(e.getStore_INTERNAL(),e.getStore_INTERNAL().getState().currentTree,!0),e.getStoreID()),pe(this,"_batch",void 0),pe(this,"set",(r,i)=>{this.checkRefCount_INTERNAL();const s=this.getStore_INTERNAL();this._batch(()=>{_c(s,r.key,1),Bw(this.getStore_INTERNAL(),r,i)})}),pe(this,"reset",r=>{this.checkRefCount_INTERNAL();const i=this.getStore_INTERNAL();this._batch(()=>{_c(i,r.key,1),Bw(this.getStore_INTERNAL(),r,Bj)})}),pe(this,"setUnvalidatedAtomValues_DEPRECATED",r=>{this.checkRefCount_INTERNAL();const i=this.getStore_INTERNAL();Em(()=>{for(const[s,o]of r.entries())_c(i,s,1),Wj(i,new jj(s),o)})}),this._batch=n}}var wd={Snapshot:vd,MutableSnapshot:Sm,freshSnapshot:Yj,cloneSnapshot:Xj},Jj=wd.Snapshot,Zj=wd.MutableSnapshot,e9=wd.freshSnapshot,t9=wd.cloneSnapshot,Ed=Object.freeze({__proto__:null,Snapshot:Jj,MutableSnapshot:Zj,freshSnapshot:e9,cloneSnapshot:t9});function n9(...t){const e=new Set;for(const n of t)for(const r of n)e.add(r);return e}var r9=n9;const{useRef:i9}=Ue;function s9(t){const e=i9(t);return e.current===t&&typeof t=="function"&&(e.current=t()),e}var zw=s9;const{getNextTreeStateVersion:o9,makeEmptyStoreState:KA}=TA,{cleanUpNode:a9,getDownstreamNodes:l9,initializeNode:u9,setNodeValue:c9,setUnvalidatedAtomValue_DEPRECATED:h9}=Ci,{graph:d9}=Xl,{cloneGraph:f9}=Xl,{getNextStoreID:qA}=pd,{createMutableSource:Bf,reactMode:QA}=Yl,{applyAtomValueWrites:p9}=cr,{releaseScheduledRetainablesNow:YA}=Rs,{freshSnapshot:m9}=Ed,{useCallback:g9,useContext:XA,useEffect:Tm,useMemo:_9,useRef:y9,useState:v9}=Ue;function _a(){throw me("This component must be used inside a <RecoilRoot> component.")}const JA=Object.freeze({storeID:qA(),getState:_a,replaceState:_a,getGraph:_a,subscribeToTransactions:_a,addTransactionMetadata:_a});let Im=!1;function Ww(t){if(Im)throw me("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");const e=t.getState();if(e.nextTree===null){Le("recoil_memory_managament_2020")&&Le("recoil_release_on_cascading_update_killswitch_2021")&&e.commitDepth>0&&YA(t);const n=e.currentTree.version,r=o9();e.nextTree={...e.currentTree,version:r,stateID:r,dirtyAtoms:new Set,transactionMetadata:{}},e.graphsByVersion.set(r,f9(Ye(e.graphsByVersion.get(n))))}}const ZA=Ue.createContext({current:JA}),Sd=()=>XA(ZA),e1=Ue.createContext(null);function w9(){return XA(e1)}function x_(t,e,n){const r=l9(t,n,n.dirtyAtoms);for(const i of r){const s=e.nodeToComponentSubscriptions.get(i);if(s)for(const[o,[a,u]]of s)u(n)}}function t1(t){const e=t.getState(),n=e.currentTree,r=n.dirtyAtoms;if(r.size){for(const[i,s]of e.nodeTransactionSubscriptions)if(r.has(i))for(const[o,a]of s)a(t);for(const[i,s]of e.transactionSubscriptions)s(t);(!QA().early||e.suspendedComponentResolvers.size>0)&&(x_(t,e,n),e.suspendedComponentResolvers.forEach(i=>i()),e.suspendedComponentResolvers.clear())}e.queuedComponentCallbacks_DEPRECATED.forEach(i=>i(n)),e.queuedComponentCallbacks_DEPRECATED.splice(0,e.queuedComponentCallbacks_DEPRECATED.length)}function E9(t){const e=t.getState();e.commitDepth++;try{const{nextTree:n}=e;if(n==null)return;e.previousTree=e.currentTree,e.currentTree=n,e.nextTree=null,t1(t),e.previousTree!=null?e.graphsByVersion.delete(e.previousTree.version):I_("Ended batch with no previous state, which is unexpected","recoil"),e.previousTree=null,Le("recoil_memory_managament_2020")&&n==null&&YA(t)}finally{e.commitDepth--}}function S9({setNotifyBatcherOfChange:t}){const e=Sd(),[,n]=v9([]);return t(()=>n({})),Tm(()=>(t(()=>n({})),()=>{t(()=>{})}),[t]),Tm(()=>{eB.enqueueExecution("Batcher",()=>{E9(e.current)})}),null}function T9(t,e){const n=KA();return e({set:(r,i)=>{const s=n.currentTree,o=c9(t,s,r.key,i),a=new Set(o.keys()),u=s.nonvalidatedAtoms.clone();for(const c of a)u.delete(c);n.currentTree={...s,dirtyAtoms:r9(s.dirtyAtoms,a),atomValues:p9(s.atomValues,o),nonvalidatedAtoms:u}},setUnvalidatedAtomValues:r=>{r.forEach((i,s)=>{n.currentTree=h9(n.currentTree,s,i)})}}),n}function I9(t){const e=m9(t),n=e.getStore_INTERNAL().getState();return e.retain(),n.nodeCleanupFunctions.forEach(r=>r()),n.nodeCleanupFunctions.clear(),n}let Hw=0;function R9({initializeState_DEPRECATED:t,initializeState:e,store_INTERNAL:n,children:r}){let i;const s=w=>{const v=i.current.graphsByVersion;if(v.has(w))return Ye(v.get(w));const A=d9();return v.set(w,A),A},o=(w,v)=>{if(v==null){const{transactionSubscriptions:A}=f.current.getState(),x=Hw++;return A.set(x,w),{release:()=>{A.delete(x)}}}else{const{nodeTransactionSubscriptions:A}=f.current.getState();A.has(v)||A.set(v,new Map);const x=Hw++;return Ye(A.get(v)).set(x,w),{release:()=>{const C=A.get(v);C&&(C.delete(x),C.size===0&&A.delete(v))}}}},a=w=>{Ww(f.current);for(const v of Object.keys(w))Ye(f.current.getState().nextTree).transactionMetadata[v]=w[v]},u=w=>{Ww(f.current);const v=Ye(i.current.nextTree);let A;try{Im=!0,A=w(v)}finally{Im=!1}A!==v&&(i.current.nextTree=A,QA().early&&x_(f.current,i.current,A),Ye(c.current)())},c=y9(null),d=g9(w=>{c.current=w},[c]),f=zw(()=>n??{storeID:qA(),getState:()=>i.current,replaceState:u,getGraph:s,subscribeToTransactions:o,addTransactionMetadata:a});n!=null&&(f.current=n),i=zw(()=>t!=null?T9(f.current,t):e!=null?I9(e):KA());const m=_9(()=>Bf==null?void 0:Bf(i,()=>i.current.currentTree.version),[i]);return Tm(()=>{const w=f.current;for(const v of new Set(w.getState().knownAtoms))u9(w,v,"get");return()=>{for(const v of w.getState().knownAtoms)a9(w,v)}},[f]),Ue.createElement(ZA.Provider,{value:f},Ue.createElement(e1.Provider,{value:m},Ue.createElement(S9,{setNotifyBatcherOfChange:d}),r))}function C9(t){const{override:e,...n}=t,r=Sd();return e===!1&&r.current!==JA?t.children:Ue.createElement(R9,n)}function A9(){return Sd().current.storeID}var Vr={RecoilRoot:C9,useStoreRef:Sd,useRecoilMutableSource:w9,useRecoilStoreID:A9,notifyComponents_FOR_TESTING:x_,sendEndOfBatchNotifications_FOR_TESTING:t1};function k9(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}var N9=k9;const{useEffect:P9,useRef:b9}=Ue;function O9(t){const e=b9();return P9(()=>{e.current=t}),e.current}var n1=O9;const{useStoreRef:x9}=Vr,{SUSPENSE_TIMEOUT_MS:D9}=Rs,{updateRetainCount:ya}=Rs,{RetentionZone:L9}=md,{useEffect:M9,useRef:V9}=Ue,{isSSR:Gw}=yd;function F9(t){if(Le("recoil_memory_managament_2020"))return U9(t)}function U9(t){const n=(Array.isArray(t)?t:[t]).map(o=>o instanceof L9?o:o.key),r=x9();M9(()=>{if(!Le("recoil_memory_managament_2020"))return;const o=r.current;if(i.current&&!Gw)window.clearTimeout(i.current),i.current=null;else for(const a of n)ya(o,a,1);return()=>{for(const a of n)ya(o,a,-1)}},[r,...n]);const i=V9(),s=n1(n);if(!Gw&&(s===void 0||!N9(s,n))){const o=r.current;for(const a of n)ya(o,a,1);if(s)for(const a of s)ya(o,a,-1);i.current&&window.clearTimeout(i.current),i.current=window.setTimeout(()=>{i.current=null;for(const a of n)ya(o,a,-1)},D9)}}var D_=F9;function $9(){return"<component name not available>"}var Zl=$9;const{batchUpdates:B9}=_d,{DEFAULT_VALUE:r1}=fn,{currentRendererSupportsUseSyncExternalStore:j9,reactMode:Ho,useMutableSource:z9,useSyncExternalStore:W9}=Yl,{useRecoilMutableSource:H9,useStoreRef:hr}=Vr,{AbstractRecoilValue:Rm,getRecoilValueAsLoadable:eu,setRecoilValue:Eh,setUnvalidatedRecoilValue:G9,subscribeToRecoilValue:No}=cr,{useCallback:dn,useEffect:Po,useMemo:i1,useRef:Qa,useState:L_}=Ue,{setByAddingToSet:K9}=RA,{isSSR:q9}=yd;function M_(t,e,n){if(t.state==="hasValue")return t.contents;throw t.state==="loading"?new Promise(i=>{const s=n.current.getState().suspendedComponentResolvers;s.add(i),q9&&We(t.contents)&&t.contents.finally(()=>{s.delete(i)})}):t.state==="hasError"?t.contents:me(`Invalid value of loadable atom "${e.key}"`)}function Q9(){const t=Zl(),e=hr(),[,n]=L_([]),r=Qa(new Set);r.current=new Set;const i=Qa(new Set),s=Qa(new Map),o=dn(u=>{const c=s.current.get(u);c&&(c.release(),s.current.delete(u))},[s]),a=dn((u,c)=>{s.current.has(c)&&n([])},[]);return Po(()=>{const u=e.current;Ka(r.current,i.current).forEach(c=>{if(s.current.has(c))return;const d=No(u,new Rm(c),m=>a(m,c),t);s.current.set(c,d),u.getState().nextTree?u.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{a(u.getState(),c)}):a(u.getState(),c)}),Ka(i.current,r.current).forEach(c=>{o(c)}),i.current=r.current}),Po(()=>{const u=s.current;return Ka(r.current,new Set(u.keys())).forEach(c=>{const d=No(e.current,new Rm(c),f=>a(f,c),t);u.set(c,d)}),()=>u.forEach((c,d)=>o(d))},[t,e,o,a]),i1(()=>{function u(v){return A=>{Eh(e.current,v,A)}}function c(v){return()=>Eh(e.current,v,r1)}function d(v){var A;r.current.has(v.key)||(r.current=K9(r.current,v.key));const x=e.current.getState();return eu(e.current,v,Ho().early&&(A=x.nextTree)!==null&&A!==void 0?A:x.currentTree)}function f(v){const A=d(v);return M_(A,v,e)}function m(v){return[f(v),u(v)]}function w(v){return[d(v),u(v)]}return{getRecoilValue:f,getRecoilValueLoadable:d,getRecoilState:m,getRecoilStateLoadable:w,getSetRecoilState:u,getResetRecoilState:c}},[r,e])}const Y9={current:0};function X9(t){const e=hr(),n=Zl(),r=dn(()=>{var a;const u=e.current,c=u.getState(),d=Ho().early&&(a=c.nextTree)!==null&&a!==void 0?a:c.currentTree;return{loadable:eu(u,t,d),key:t.key}},[e,t]),i=dn(a=>{let u;return()=>{var c,d;const f=a();return(c=u)!==null&&c!==void 0&&c.loadable.is(f.loadable)&&((d=u)===null||d===void 0?void 0:d.key)===f.key?u:(u=f,f)}},[]),s=i1(()=>i(r),[r,i]),o=dn(a=>{const u=e.current;return No(u,t,a,n).release},[e,t,n]);return W9(o,s,s).loadable}function J9(t){const e=hr(),n=dn(()=>{var c;const d=e.current,f=d.getState(),m=Ho().early&&(c=f.nextTree)!==null&&c!==void 0?c:f.currentTree;return eu(d,t,m)},[e,t]),r=dn(()=>n(),[n]),i=Zl(),s=dn((c,d)=>{const f=e.current;return No(f,t,()=>{if(!Le("recoil_suppress_rerender_in_callback"))return d();const w=n();u.current.is(w)||d(),u.current=w},i).release},[e,t,i,n]),o=H9();if(o==null)throw me("Recoil hooks must be used in components contained within a <RecoilRoot> component.");const a=z9(o,r,s),u=Qa(a);return Po(()=>{u.current=a}),a}function Cm(t){const e=hr(),n=Zl(),r=dn(()=>{var u;const c=e.current,d=c.getState(),f=Ho().early&&(u=d.nextTree)!==null&&u!==void 0?u:d.currentTree;return eu(c,t,f)},[e,t]),i=dn(()=>({loadable:r(),key:t.key}),[r,t.key]),s=dn(u=>{const c=i();return u.loadable.is(c.loadable)&&u.key===c.key?u:c},[i]);Po(()=>{const u=No(e.current,t,c=>{a(s)},n);return a(s),u.release},[n,t,e,s]);const[o,a]=L_(i);return o.key!==t.key?i().loadable:o.loadable}function Z9(t){const e=hr(),[,n]=L_([]),r=Zl(),i=dn(()=>{var a;const u=e.current,c=u.getState(),d=Ho().early&&(a=c.nextTree)!==null&&a!==void 0?a:c.currentTree;return eu(u,t,d)},[e,t]),s=i(),o=Qa(s);return Po(()=>{o.current=s}),Po(()=>{const a=e.current,u=a.getState(),c=No(a,t,f=>{var m;if(!Le("recoil_suppress_rerender_in_callback"))return n([]);const w=i();(m=o.current)!==null&&m!==void 0&&m.is(w)||n(w),o.current=w},r);if(u.nextTree)a.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{o.current=null,n([])});else{var d;if(!Le("recoil_suppress_rerender_in_callback"))return n([]);const f=i();(d=o.current)!==null&&d!==void 0&&d.is(f)||n(f),o.current=f}return c.release},[r,i,t,e]),s}function V_(t){return Le("recoil_memory_managament_2020")&&D_(t),{TRANSITION_SUPPORT:Cm,SYNC_EXTERNAL_STORE:j9()?X9:Cm,MUTABLE_SOURCE:J9,LEGACY:Z9}[Ho().mode](t)}function s1(t){const e=hr(),n=V_(t);return M_(n,t,e)}function Td(t){const e=hr();return dn(n=>{Eh(e.current,t,n)},[e,t])}function e3(t){const e=hr();return dn(()=>{Eh(e.current,t,r1)},[e,t])}function t3(t){return[s1(t),Td(t)]}function n3(t){return[V_(t),Td(t)]}function r3(){const t=hr();return(e,n={})=>{B9(()=>{t.current.addTransactionMetadata(n),e.forEach((r,i)=>G9(t.current,new Rm(i),r))})}}function o1(t){return Le("recoil_memory_managament_2020")&&D_(t),Cm(t)}function a1(t){const e=hr(),n=o1(t);return M_(n,t,e)}function i3(t){return[a1(t),Td(t)]}var s3={recoilComponentGetRecoilValueCount_FOR_TESTING:Y9,useRecoilInterface:Q9,useRecoilState:t3,useRecoilStateLoadable:n3,useRecoilValue:s1,useRecoilValueLoadable:V_,useResetRecoilState:e3,useSetRecoilState:Td,useSetUnvalidatedAtomValues:r3,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:o1,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:a1,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:i3};function o3(t,e){const n=new Map;for(const[r,i]of t)e(i,r)&&n.set(r,i);return n}var a3=o3;function l3(t,e){const n=new Set;for(const r of t)e(r)&&n.add(r);return n}var u3=l3;function c3(...t){const e=new Map;for(let n=0;n<t.length;n++){const r=t[n].keys();let i;for(;!(i=r.next()).done;)e.set(i.value,t[n].get(i.value))}return e}var h3=c3;const{batchUpdates:d3}=_d,{DEFAULT_VALUE:f3,getNode:l1,nodes:p3}=fn,{useStoreRef:F_}=Vr,{AbstractRecoilValue:m3,setRecoilValueLoadable:g3}=cr,{SUSPENSE_TIMEOUT_MS:_3}=Rs,{cloneSnapshot:Sh}=Ed,{useCallback:Id,useEffect:u1,useRef:Kw,useState:y3}=Ue,{isSSR:qw}=yd;function Rd(t){const e=F_();u1(()=>e.current.subscribeToTransactions(t).release,[t,e])}function Qw(t){const e=t.atomValues.toMap(),n=wh(a3(e,(r,i)=>{const o=l1(i).persistence_UNSTABLE;return o!=null&&o.type!=="none"&&r.state==="hasValue"}),r=>r.contents);return h3(t.nonvalidatedAtoms.toMap(),n)}function v3(t){Rd(Id(e=>{let n=e.getState().previousTree;const r=e.getState().currentTree;n||(n=e.getState().currentTree);const i=Qw(r),s=Qw(n),o=wh(p3,u=>{var c,d,f,m;return{persistence_UNSTABLE:{type:(c=(d=u.persistence_UNSTABLE)===null||d===void 0?void 0:d.type)!==null&&c!==void 0?c:"none",backButton:(f=(m=u.persistence_UNSTABLE)===null||m===void 0?void 0:m.backButton)!==null&&f!==void 0?f:!1}}}),a=u3(r.dirtyAtoms,u=>i.has(u)||s.has(u));t({atomValues:i,previousAtomValues:s,atomInfo:o,modifiedAtoms:a,transactionMetadata:{...r.transactionMetadata}})},[t]))}function w3(t){Rd(Id(e=>{const n=Sh(e,"latest"),r=Sh(e,"previous");t({snapshot:n,previousSnapshot:r})},[t]))}function E3(){const t=F_(),[e,n]=y3(()=>Sh(t.current)),r=n1(e),i=Kw(),s=Kw();if(Rd(Id(a=>n(Sh(a)),[])),u1(()=>{const a=e.retain();if(i.current&&!qw){var u;window.clearTimeout(i.current),i.current=null,(u=s.current)===null||u===void 0||u.call(s),s.current=null}return()=>{window.setTimeout(a,10)}},[e]),r!==e&&!qw){if(i.current){var o;window.clearTimeout(i.current),i.current=null,(o=s.current)===null||o===void 0||o.call(s),s.current=null}s.current=e.retain(),i.current=window.setTimeout(()=>{var a;i.current=null,(a=s.current)===null||a===void 0||a.call(s),s.current=null},_3)}return e}function c1(t,e){var n;const r=t.getState(),i=(n=r.nextTree)!==null&&n!==void 0?n:r.currentTree,s=e.getStore_INTERNAL().getState().currentTree;d3(()=>{const o=new Set;for(const c of[i.atomValues.keys(),s.atomValues.keys()])for(const d of c){var a,u;((a=i.atomValues.get(d))===null||a===void 0?void 0:a.contents)!==((u=s.atomValues.get(d))===null||u===void 0?void 0:u.contents)&&l1(d).shouldRestoreFromSnapshots&&o.add(d)}o.forEach(c=>{g3(t,new m3(c),s.atomValues.has(c)?Ye(s.atomValues.get(c)):f3)}),t.replaceState(c=>({...c,stateID:e.getID()}))})}function S3(){const t=F_();return Id(e=>c1(t.current,e),[t])}var h1={useRecoilSnapshot:E3,gotoSnapshot:c1,useGotoRecoilSnapshot:S3,useRecoilTransactionObserver:w3,useTransactionObservation_DEPRECATED:v3,useTransactionSubscription_DEPRECATED:Rd};const{peekNodeInfo:T3}=Ci,{useStoreRef:I3}=Vr;function R3(){const t=I3();return({key:e})=>T3(t.current,t.current.getState().currentTree,e)}var C3=R3;const{reactMode:A3}=Yl,{RecoilRoot:k3,useStoreRef:N3}=Vr,{useMemo:P3}=Ue;function b3(){A3().mode==="MUTABLE_SOURCE"&&console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");const t=N3().current;return P3(()=>{function e({children:n}){return Ue.createElement(k3,{store_INTERNAL:t},n)}return e},[t])}var O3=b3;const{loadableWithValue:x3}=Ql,{initializeNode:D3}=Ci,{DEFAULT_VALUE:L3,getNode:M3}=fn,{copyTreeState:V3,getRecoilValueAsLoadable:F3,invalidateDownstreams:U3,writeLoadableToTreeState:$3}=cr;function Yw(t){return M3(t.key).nodeType==="atom"}class B3{constructor(e,n){pe(this,"_store",void 0),pe(this,"_treeState",void 0),pe(this,"_changes",void 0),pe(this,"get",r=>{if(this._changes.has(r.key))return this._changes.get(r.key);if(!Yw(r))throw me("Reading selectors within atomicUpdate is not supported");const i=F3(this._store,r,this._treeState);if(i.state==="hasValue")return i.contents;throw i.state==="hasError"?i.contents:me(`Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`)}),pe(this,"set",(r,i)=>{if(!Yw(r))throw me("Setting selectors within atomicUpdate is not supported");if(typeof i=="function"){const s=this.get(r);this._changes.set(r.key,i(s))}else D3(this._store,r.key,"set"),this._changes.set(r.key,i)}),pe(this,"reset",r=>{this.set(r,L3)}),this._store=e,this._treeState=n,this._changes=new Map}newTreeState_INTERNAL(){if(this._changes.size===0)return this._treeState;const e=V3(this._treeState);for(const[n,r]of this._changes)$3(e,n,x3(r));return U3(this._store,e),e}}function j3(t){return e=>{t.replaceState(n=>{const r=new B3(t,n);return e(r),r.newTreeState_INTERNAL()})}}var z3={atomicUpdater:j3},W3=z3.atomicUpdater,d1=Object.freeze({__proto__:null,atomicUpdater:W3});function H3(t,e){if(!t)throw new Error(e)}var G3=H3,Aa=G3;const{atomicUpdater:K3}=d1,{batchUpdates:q3}=_d,{DEFAULT_VALUE:Q3}=fn,{useStoreRef:Y3}=Vr,{refreshRecoilValue:X3,setRecoilValue:Xw}=cr,{cloneSnapshot:J3}=Ed,{gotoSnapshot:Z3}=h1,{useCallback:e6}=Ue;class f1{}const t6=new f1;function p1(t,e,n,r){let i=t6,s;if(q3(()=>{const a="useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";if(typeof e!="function")throw me(a);const u=CA({...r??{},set:(d,f)=>Xw(t,d,f),reset:d=>Xw(t,d,Q3),refresh:d=>X3(t,d),gotoSnapshot:d=>Z3(t,d),transact_UNSTABLE:d=>K3(t)(d)},{snapshot:()=>{const d=J3(t);return s=d.retain(),d}}),c=e(u);if(typeof c!="function")throw me(a);i=c(...n)}),i instanceof f1&&Aa(!1),We(i))i=i.finally(()=>{var a;(a=s)===null||a===void 0||a()});else{var o;(o=s)===null||o===void 0||o()}return i}function n6(t,e){const n=Y3();return e6((...r)=>p1(n.current,t,r),e!=null?[...e,n]:void 0)}var m1={recoilCallback:p1,useRecoilCallback:n6};const{useStoreRef:r6}=Vr,{refreshRecoilValue:i6}=cr,{useCallback:s6}=Ue;function o6(t){const e=r6();return s6(()=>{const n=e.current;i6(n,t)},[t,e])}var a6=o6;const{atomicUpdater:l6}=d1,{useStoreRef:u6}=Vr,{useMemo:c6}=Ue;function h6(t,e){const n=u6();return c6(()=>(...r)=>{l6(n.current)(s=>{t(s)(...r)})},e!=null?[...e,n]:void 0)}var d6=h6;class f6{constructor(e){pe(this,"value",void 0),this.value=e}}var p6={WrappedValue:f6},m6=p6.WrappedValue,g1=Object.freeze({__proto__:null,WrappedValue:m6});const{isFastRefreshEnabled:g6}=Yl;class Jw extends Error{}class _6{constructor(e){var n,r,i;pe(this,"_name",void 0),pe(this,"_numLeafs",void 0),pe(this,"_root",void 0),pe(this,"_onHit",void 0),pe(this,"_onSet",void 0),pe(this,"_mapNodeValue",void 0),this._name=e==null?void 0:e.name,this._numLeafs=0,this._root=null,this._onHit=(n=e==null?void 0:e.onHit)!==null&&n!==void 0?n:()=>{},this._onSet=(r=e==null?void 0:e.onSet)!==null&&r!==void 0?r:()=>{},this._mapNodeValue=(i=e==null?void 0:e.mapNodeValue)!==null&&i!==void 0?i:s=>s}size(){return this._numLeafs}root(){return this._root}get(e,n){var r;return(r=this.getLeafNode(e,n))===null||r===void 0?void 0:r.value}getLeafNode(e,n){if(this._root==null)return;let r=this._root;for(;r;){if(n==null||n.onNodeVisit(r),r.type==="leaf")return this._onHit(r),r;const i=this._mapNodeValue(e(r.nodeKey));r=r.branches.get(i)}}set(e,n,r){const i=()=>{var s,o,a,u;let c,d;for(const[x,C]of e){var f,m,w;const y=this._root;if((y==null?void 0:y.type)==="leaf")throw this.invalidCacheError();const S=c;if(c=S?S.branches.get(d):y,c=(f=c)!==null&&f!==void 0?f:{type:"branch",nodeKey:x,parent:S,branches:new Map,branchKey:d},c.type!=="branch"||c.nodeKey!==x)throw this.invalidCacheError();S==null||S.branches.set(d,c),r==null||(m=r.onNodeVisit)===null||m===void 0||m.call(r,c),d=this._mapNodeValue(C),this._root=(w=this._root)!==null&&w!==void 0?w:c}const v=c?(s=c)===null||s===void 0?void 0:s.branches.get(d):this._root;if(v!=null&&(v.type!=="leaf"||v.branchKey!==d))throw this.invalidCacheError();const A={type:"leaf",value:n,parent:c,branchKey:d};(o=c)===null||o===void 0||o.branches.set(d,A),this._root=(a=this._root)!==null&&a!==void 0?a:A,this._numLeafs++,this._onSet(A),r==null||(u=r.onNodeVisit)===null||u===void 0||u.call(r,A)};try{i()}catch(s){if(s instanceof Jw)this.clear(),i();else throw s}}delete(e){const n=this.root();if(!n)return!1;if(e===n)return this._root=null,this._numLeafs=0,!0;let r=e.parent,i=e.branchKey;for(;r;){var s;if(r.branches.delete(i),r===n)return r.branches.size===0?(this._root=null,this._numLeafs=0):this._numLeafs--,!0;if(r.branches.size>0)break;i=(s=r)===null||s===void 0?void 0:s.branchKey,r=r.parent}for(;r!==n;r=r.parent)if(r==null)return!1;return this._numLeafs--,!0}clear(){this._numLeafs=0,this._root=null}invalidCacheError(){const e=g6()?"Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.":"Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";throw I_(e+(this._name!=null?` - ${this._name}`:"")),new Jw}}var y6={TreeCache:_6},v6=y6.TreeCache,_1=Object.freeze({__proto__:null,TreeCache:v6});class w6{constructor(e){var n;pe(this,"_maxSize",void 0),pe(this,"_size",void 0),pe(this,"_head",void 0),pe(this,"_tail",void 0),pe(this,"_map",void 0),pe(this,"_keyMapper",void 0),this._maxSize=e.maxSize,this._size=0,this._head=null,this._tail=null,this._map=new Map,this._keyMapper=(n=e.mapKey)!==null&&n!==void 0?n:r=>r}head(){return this._head}tail(){return this._tail}size(){return this._size}maxSize(){return this._maxSize}has(e){return this._map.has(this._keyMapper(e))}get(e){const n=this._keyMapper(e),r=this._map.get(n);if(r)return this.set(e,r.value),r.value}set(e,n){const r=this._keyMapper(e);this._map.get(r)&&this.delete(e);const s=this.head(),o={key:e,right:s,left:null,value:n};s?s.left=o:this._tail=o,this._map.set(r,o),this._head=o,this._size++,this._maybeDeleteLRU()}_maybeDeleteLRU(){this.size()>this.maxSize()&&this.deleteLru()}deleteLru(){const e=this.tail();e&&this.delete(e.key)}delete(e){const n=this._keyMapper(e);if(!this._size||!this._map.has(n))return;const r=Ye(this._map.get(n)),i=r.right,s=r.left;i&&(i.left=r.left),s&&(s.right=r.right),r===this.head()&&(this._head=i),r===this.tail()&&(this._tail=s),this._map.delete(n),this._size--}clear(){this._size=0,this._head=null,this._tail=null,this._map=new Map}}var E6={LRUCache:w6},S6=E6.LRUCache,y1=Object.freeze({__proto__:null,LRUCache:S6});const{LRUCache:T6}=y1,{TreeCache:I6}=_1;function R6({name:t,maxSize:e,mapNodeValue:n=r=>r}){const r=new T6({maxSize:e}),i=new I6({name:t,mapNodeValue:n,onHit:s=>{r.set(s,!0)},onSet:s=>{const o=r.tail();r.set(s,!0),o&&i.size()>e&&i.delete(o.key)}});return i}var Zw=R6;function Fn(t,e,n){if(typeof t=="string"&&!t.includes('"')&&!t.includes("\\"))return`"${t}"`;switch(typeof t){case"undefined":return"";case"boolean":return t?"true":"false";case"number":case"symbol":return String(t);case"string":return JSON.stringify(t);case"function":if((e==null?void 0:e.allowFunctions)!==!0)throw me("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${t.name})__`}if(t===null)return"null";if(typeof t!="object"){var r;return(r=JSON.stringify(t))!==null&&r!==void 0?r:""}if(We(t))return"__PROMISE__";if(Array.isArray(t))return`[${t.map((i,s)=>Fn(i,e,s.toString()))}]`;if(typeof t.toJSON=="function")return Fn(t.toJSON(n),e,n);if(t instanceof Map){const i={};for(const[s,o]of t)i[typeof s=="string"?s:Fn(s,e)]=o;return Fn(i,e,n)}return t instanceof Set?Fn(Array.from(t).sort((i,s)=>Fn(i,e).localeCompare(Fn(s,e))),e,n):Symbol!==void 0&&t[Symbol.iterator]!=null&&typeof t[Symbol.iterator]=="function"?Fn(Array.from(t),e,n):`{${Object.keys(t).filter(i=>t[i]!==void 0).sort().map(i=>`${Fn(i,e)}:${Fn(t[i],e,i)}`).join(",")}}`}function C6(t,e={allowFunctions:!1}){return Fn(t,e)}var Cd=C6;const{TreeCache:A6}=_1,Ku={equality:"reference",eviction:"keep-all",maxSize:1/0};function k6({equality:t=Ku.equality,eviction:e=Ku.eviction,maxSize:n=Ku.maxSize}=Ku,r){const i=N6(t);return P6(e,n,i,r)}function N6(t){switch(t){case"reference":return e=>e;case"value":return e=>Cd(e)}throw me(`Unrecognized equality policy ${t}`)}function P6(t,e,n,r){switch(t){case"keep-all":return new A6({name:r,mapNodeValue:n});case"lru":return Zw({name:r,maxSize:Ye(e),mapNodeValue:n});case"most-recent":return Zw({name:r,maxSize:1,mapNodeValue:n})}throw me(`Unrecognized eviction policy ${t}`)}var b6=k6;function O6(t){return()=>null}var x6={startPerfBlock:O6};const{isLoadable:D6,loadableWithError:qu,loadableWithPromise:L6,loadableWithValue:jf}=Ql,{WrappedValue:v1}=g1,{getNodeLoadable:Qu,peekNodeLoadable:M6,setNodeValue:V6}=Ci,{saveDepsToStore:F6}=Xl,{DEFAULT_VALUE:U6,getConfigDeletionHandler:$6,getNode:B6,registerNode:eE}=fn,{isRecoilValue:j6}=ko,{markRecoilValueModified:tE}=cr,{retainedByOptionWithDefault:z6}=Rs,{recoilCallback:W6}=m1,{startPerfBlock:H6}=x6;class w1{}const va=new w1,wa=[],Yu=new Map,G6=(()=>{let t=0;return()=>t++})();function E1(t){let e=null;const{key:n,get:r,cachePolicy_UNSTABLE:i}=t,s=t.set!=null?t.set:void 0,o=new Set,a=b6(i??{equality:"reference",eviction:"keep-all"},n),u=z6(t.retainedBy_UNSTABLE),c=new Map;let d=0;function f(){return!Le("recoil_memory_managament_2020")||d>0}function m(P){return P.getState().knownSelectors.add(n),d++,()=>{d--}}function w(){return $6(n)!==void 0&&!f()}function v(P,U,H,se,Z){pt(U,se,Z),A(P,H)}function A(P,U){Me(P,U)&&I(P),C(U,!0)}function x(P,U){Me(P,U)&&(Ye(R(P)).stateVersions.clear(),C(U,!1))}function C(P,U){const H=Yu.get(P);if(H!=null){for(const se of H)tE(se,Ye(e));U&&Yu.delete(P)}}function y(P,U){let H=Yu.get(U);H==null&&Yu.set(U,H=new Set),H.add(P)}function S(P,U,H,se,Z,ce){return U.then(ge=>{if(!f())throw I(P),va;const ie=jf(ge);return v(P,H,Z,ie,se),ge}).catch(ge=>{if(!f())throw I(P),va;if(We(ge))return L(P,ge,H,se,Z,ce);const ie=qu(ge);throw v(P,H,Z,ie,se),ge})}function L(P,U,H,se,Z,ce){return U.then(ge=>{if(!f())throw I(P),va;ce.loadingDepKey!=null&&ce.loadingDepPromise===U?H.atomValues.set(ce.loadingDepKey,jf(ge)):P.getState().knownSelectors.forEach(Ce=>{H.atomValues.delete(Ce)});const ie=E(P,H);if(ie&&ie.state!=="loading"){if((Me(P,Z)||R(P)==null)&&A(P,Z),ie.state==="hasValue")return ie.contents;throw ie.contents}if(!Me(P,Z)){const Ce=T(P,H);if(Ce!=null)return Ce.loadingLoadable.contents}const[Ne,qe]=F(P,H,Z);if(Ne.state!=="loading"&&v(P,H,Z,Ne,qe),Ne.state==="hasError")throw Ne.contents;return Ne.contents}).catch(ge=>{if(ge instanceof w1)throw va;if(!f())throw I(P),va;const ie=qu(ge);throw v(P,H,Z,ie,se),ge})}function V(P,U,H,se){var Z,ce,ge,ie;if(Me(P,se)||U.version===((Z=P.getState())===null||Z===void 0||(ce=Z.currentTree)===null||ce===void 0?void 0:ce.version)||U.version===((ge=P.getState())===null||ge===void 0||(ie=ge.nextTree)===null||ie===void 0?void 0:ie.version)){var Ne,qe,Ce;F6(n,H,P,(Ne=(qe=P.getState())===null||qe===void 0||(Ce=qe.nextTree)===null||Ce===void 0?void 0:Ce.version)!==null&&Ne!==void 0?Ne:P.getState().currentTree.version)}for(const Oe of H)o.add(Oe)}function F(P,U,H){const se=H6(n);let Z=!0,ce=!0;const ge=()=>{se(),ce=!1};let ie,Ne=!1,qe;const Ce={loadingDepKey:null,loadingDepPromise:null},Oe=new Map;function Qt({key:Yt}){const Xt=Qu(P,U,Yt);switch(Oe.set(Yt,Xt),Z||(V(P,U,new Set(Oe.keys()),H),x(P,H)),Xt.state){case"hasValue":return Xt.contents;case"hasError":throw Xt.contents;case"loading":throw Ce.loadingDepKey=Yt,Ce.loadingDepPromise=Xt.contents,Xt.contents}throw me("Invalid Loadable state")}const xn=Yt=>(...Xt)=>{if(ce)throw me("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");return e==null&&Aa(!1),W6(P,Yt,Xt,{node:e})};try{ie=r({get:Qt,getCallback:xn}),ie=j6(ie)?Qt(ie):ie,D6(ie)&&(ie.state==="hasError"&&(Ne=!0),ie=ie.contents),We(ie)?ie=S(P,ie,U,Oe,H,Ce).finally(ge):ge(),ie=ie instanceof v1?ie.value:ie}catch(Yt){ie=Yt,We(ie)?ie=L(P,ie,U,Oe,H,Ce).finally(ge):(Ne=!0,ge())}return Ne?qe=qu(ie):We(ie)?qe=L6(ie):qe=jf(ie),Z=!1,b(P,H,Oe),V(P,U,new Set(Oe.keys()),H),[qe,Oe]}function E(P,U){let H=U.atomValues.get(n);if(H!=null)return H;const se=new Set;try{H=a.get(ce=>(typeof ce!="string"&&Aa(!1),Qu(P,U,ce).contents),{onNodeVisit:ce=>{ce.type==="branch"&&ce.nodeKey!==n&&se.add(ce.nodeKey)}})}catch(ce){throw me(`Problem with cache lookup for selector "${n}": ${ce.message}`)}if(H){var Z;U.atomValues.set(n,H),V(P,U,se,(Z=R(P))===null||Z===void 0?void 0:Z.executionID)}return H}function _(P,U){const H=E(P,U);if(H!=null)return I(P),H;const se=T(P,U);if(se!=null){var Z;return((Z=se.loadingLoadable)===null||Z===void 0?void 0:Z.state)==="loading"&&y(P,se.executionID),se.loadingLoadable}const ce=G6(),[ge,ie]=F(P,U,ce);return ge.state==="loading"?(k(P,ce,ge,ie,U),y(P,ce)):(I(P),pt(U,ge,ie)),ge}function T(P,U){const H=zA([c.has(P)?[Ye(c.get(P))]:[],fd(N_(c,([Z])=>Z!==P),([,Z])=>Z)]);function se(Z){for(const[ce,ge]of Z)if(!Qu(P,U,ce).is(ge))return!0;return!1}for(const Z of H){if(Z.stateVersions.get(U.version)||!se(Z.depValuesDiscoveredSoFarDuringAsyncWork))return Z.stateVersions.set(U.version,!0),Z;Z.stateVersions.set(U.version,!1)}}function R(P){return c.get(P)}function k(P,U,H,se,Z){c.set(P,{depValuesDiscoveredSoFarDuringAsyncWork:se,executionID:U,loadingLoadable:H,stateVersions:new Map([[Z.version,!0]])})}function b(P,U,H){if(Me(P,U)){const se=R(P);se!=null&&(se.depValuesDiscoveredSoFarDuringAsyncWork=H)}}function I(P){c.delete(P)}function Me(P,U){var H;return U===((H=R(P))===null||H===void 0?void 0:H.executionID)}function qt(P){return Array.from(P.entries()).map(([U,H])=>[U,H.contents])}function pt(P,U,H){P.atomValues.set(n,U);try{a.set(qt(H),U)}catch(se){throw me(`Problem with setting cache for selector "${n}": ${se.message}`)}}function ct(P){if(wa.includes(n)){const U=`Recoil selector has circular dependencies: ${wa.slice(wa.indexOf(n)).join(" → ")}`;return qu(me(U))}wa.push(n);try{return P()}finally{wa.pop()}}function q(P,U){const H=U.atomValues.get(n);return H??a.get(se=>{var Z;return typeof se!="string"&&Aa(!1),(Z=M6(P,U,se))===null||Z===void 0?void 0:Z.contents})}function ae(P,U){return ct(()=>_(P,U))}function J(P){P.atomValues.delete(n)}function re(P,U){e==null&&Aa(!1);for(const se of o){var H;const Z=B6(se);(H=Z.clearCache)===null||H===void 0||H.call(Z,P,U)}o.clear(),J(U),a.clear(),tE(P,e)}return s!=null?e=eE({key:n,nodeType:"selector",peek:q,get:ae,set:(U,H,se)=>{let Z=!1;const ce=new Map;function ge({key:Ce}){if(Z)throw me("Recoil: Async selector sets are not currently supported.");const Oe=Qu(U,H,Ce);if(Oe.state==="hasValue")return Oe.contents;if(Oe.state==="loading"){const Qt=`Getting value of asynchronous atom or selector "${Ce}" in a pending state while setting selector "${n}" is not yet supported.`;throw me(Qt)}else throw Oe.contents}function ie(Ce,Oe){if(Z)throw me("Recoil: Async selector sets are not currently supported.");const Qt=typeof Oe=="function"?Oe(ge(Ce)):Oe;V6(U,H,Ce.key,Qt).forEach((Yt,Xt)=>ce.set(Xt,Yt))}function Ne(Ce){ie(Ce,U6)}const qe=s({set:ie,get:ge,reset:Ne},se);if(qe!==void 0)throw We(qe)?me("Recoil: Async selector sets are not currently supported."):me("Recoil: selector set should be a void function.");return Z=!0,ce},init:m,invalidate:J,clearCache:re,shouldDeleteConfigOnRelease:w,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:u}):e=eE({key:n,nodeType:"selector",peek:q,get:ae,init:m,invalidate:J,clearCache:re,shouldDeleteConfigOnRelease:w,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:u})}E1.value=t=>new v1(t);var bo=E1;const{isLoadable:K6,loadableWithError:zf,loadableWithPromise:Wf,loadableWithValue:Ds}=Ql,{WrappedValue:S1}=g1,{peekNodeInfo:q6}=Ci,{DEFAULT_VALUE:Ui,DefaultValue:Gr,getConfigDeletionHandler:T1,registerNode:Q6,setConfigDeletionHandler:Y6}=fn,{isRecoilValue:X6}=ko,{getRecoilValueAsLoadable:J6,markRecoilValueModified:Z6,setRecoilValue:nE,setRecoilValueLoadable:ez}=cr,{retainedByOptionWithDefault:tz}=Rs,Ea=t=>t instanceof S1?t.value:t;function nz(t){const{key:e,persistence_UNSTABLE:n}=t,r=tz(t.retainedBy_UNSTABLE);let i=0;function s(y){return Wf(y.then(S=>(o=Ds(S),S)).catch(S=>{throw o=zf(S),S}))}let o=We(t.default)?s(t.default):K6(t.default)?t.default.state==="loading"?s(t.default.contents):t.default:Ds(Ea(t.default));o.contents;let a;const u=new Map;function c(y){return y}function d(y,S){const L=S.then(V=>{var F,E;return((E=((F=y.getState().nextTree)!==null&&F!==void 0?F:y.getState().currentTree).atomValues.get(e))===null||E===void 0?void 0:E.contents)===L&&nE(y,C,V),V}).catch(V=>{var F,E;throw((E=((F=y.getState().nextTree)!==null&&F!==void 0?F:y.getState().currentTree).atomValues.get(e))===null||E===void 0?void 0:E.contents)===L&&ez(y,C,zf(V)),V});return L}function f(y,S,L){var V;i++;const F=()=>{var R;i--,(R=u.get(y))===null||R===void 0||R.forEach(k=>k()),u.delete(y)};if(y.getState().knownAtoms.add(e),o.state==="loading"){const R=()=>{var k;((k=y.getState().nextTree)!==null&&k!==void 0?k:y.getState().currentTree).atomValues.has(e)||Z6(y,C)};o.contents.finally(R)}const E=(V=t.effects)!==null&&V!==void 0?V:t.effects_UNSTABLE;if(E!=null){let R=function(J){if(Me&&J.key===e){const re=I;return re instanceof Gr?m(y,S):We(re)?Wf(re.then(P=>P instanceof Gr?o.toPromise():P)):Ds(re)}return J6(y,J)},k=function(J){return R(J).toPromise()},b=function(J){var re;const P=q6(y,(re=y.getState().nextTree)!==null&&re!==void 0?re:y.getState().currentTree,J.key);return Me&&J.key===e&&!(I instanceof Gr)?{...P,isSet:!0,loadable:R(J)}:P},I=Ui,Me=!0,qt=!1,pt=null;const ct=J=>re=>{if(Me){const P=R(C),U=P.state==="hasValue"?P.contents:Ui;I=typeof re=="function"?re(U):re,We(I)&&(I=I.then(H=>(pt={effect:J,value:H},H)))}else{if(We(re))throw me("Setting atoms to async values is not implemented.");typeof re!="function"&&(pt={effect:J,value:Ea(re)}),nE(y,C,typeof re=="function"?P=>{const U=Ea(re(P));return pt={effect:J,value:U},U}:Ea(re))}},q=J=>()=>ct(J)(Ui),ae=J=>re=>{var P;const{release:U}=y.subscribeToTransactions(H=>{var se;let{currentTree:Z,previousTree:ce}=H.getState();ce||(ce=Z);const ge=(se=Z.atomValues.get(e))!==null&&se!==void 0?se:o;if(ge.state==="hasValue"){var ie,Ne,qe,Ce;const Oe=ge.contents,Qt=(ie=ce.atomValues.get(e))!==null&&ie!==void 0?ie:o,xn=Qt.state==="hasValue"?Qt.contents:Ui;((Ne=pt)===null||Ne===void 0?void 0:Ne.effect)!==J||((qe=pt)===null||qe===void 0?void 0:qe.value)!==Oe?re(Oe,xn,!Z.atomValues.has(e)):((Ce=pt)===null||Ce===void 0?void 0:Ce.effect)===J&&(pt=null)}},e);u.set(y,[...(P=u.get(y))!==null&&P!==void 0?P:[],U])};for(const J of E)try{const re=J({node:C,storeID:y.storeID,parentStoreID_UNSTABLE:y.parentStoreID,trigger:L,setSelf:ct(J),resetSelf:q(J),onSet:ae(J),getPromise:k,getLoadable:R,getInfo_UNSTABLE:b});if(re!=null){var _;u.set(y,[...(_=u.get(y))!==null&&_!==void 0?_:[],re])}}catch(re){I=re,qt=!0}if(Me=!1,!(I instanceof Gr)){var T;const J=qt?zf(I):We(I)?Wf(d(y,I)):Ds(Ea(I));J.contents,S.atomValues.set(e,J),(T=y.getState().nextTree)===null||T===void 0||T.atomValues.set(e,J)}}return F}function m(y,S){var L,V;return(L=(V=S.atomValues.get(e))!==null&&V!==void 0?V:a)!==null&&L!==void 0?L:o}function w(y,S){if(S.atomValues.has(e))return Ye(S.atomValues.get(e));if(S.nonvalidatedAtoms.has(e)){if(a!=null)return a;if(n==null)return o;const L=S.nonvalidatedAtoms.get(e),V=n.validator(L,Ui);return a=V instanceof Gr?o:Ds(V),a}else return o}function v(){a=void 0}function A(y,S,L){if(S.atomValues.has(e)){const V=Ye(S.atomValues.get(e));if(V.state==="hasValue"&&L===V.contents)return new Map}else if(!S.nonvalidatedAtoms.has(e)&&L instanceof Gr)return new Map;return a=void 0,new Map().set(e,Ds(L))}function x(){return T1(e)!==void 0&&i<=0}const C=Q6({key:e,nodeType:"atom",peek:m,get:w,set:A,init:f,invalidate:v,shouldDeleteConfigOnRelease:x,dangerouslyAllowMutability:t.dangerouslyAllowMutability,persistence_UNSTABLE:t.persistence_UNSTABLE?{type:t.persistence_UNSTABLE.type,backButton:t.persistence_UNSTABLE.backButton}:void 0,shouldRestoreFromSnapshots:!0,retainedBy:r});return C}function U_(t){const{...e}=t,n="default"in t?t.default:new Promise(()=>{});return X6(n)?rz({...e,default:n}):nz({...e,default:n})}function rz(t){const e=U_({...t,default:Ui,persistence_UNSTABLE:t.persistence_UNSTABLE===void 0?void 0:{...t.persistence_UNSTABLE,validator:r=>r instanceof Gr?r:Ye(t.persistence_UNSTABLE).validator(r,Ui)},effects:t.effects,effects_UNSTABLE:t.effects_UNSTABLE}),n=bo({key:`${t.key}__withFallback`,get:({get:r})=>{const i=r(e);return i instanceof Gr?t.default:i},set:({set:r},i)=>r(e,i),cachePolicy_UNSTABLE:{eviction:"most-recent"},dangerouslyAllowMutability:t.dangerouslyAllowMutability});return Y6(n.key,T1(t.key)),n}U_.value=t=>new S1(t);var I1=U_;class iz{constructor(e){var n;pe(this,"_map",void 0),pe(this,"_keyMapper",void 0),this._map=new Map,this._keyMapper=(n=e==null?void 0:e.mapKey)!==null&&n!==void 0?n:r=>r}size(){return this._map.size}has(e){return this._map.has(this._keyMapper(e))}get(e){return this._map.get(this._keyMapper(e))}set(e,n){this._map.set(this._keyMapper(e),n)}delete(e){this._map.delete(this._keyMapper(e))}clear(){this._map.clear()}}var sz={MapCache:iz},oz=sz.MapCache,az=Object.freeze({__proto__:null,MapCache:oz});const{LRUCache:rE}=y1,{MapCache:lz}=az,Xu={equality:"reference",eviction:"none",maxSize:1/0};function uz({equality:t=Xu.equality,eviction:e=Xu.eviction,maxSize:n=Xu.maxSize}=Xu){const r=cz(t);return hz(e,n,r)}function cz(t){switch(t){case"reference":return e=>e;case"value":return e=>Cd(e)}throw me(`Unrecognized equality policy ${t}`)}function hz(t,e,n){switch(t){case"keep-all":return new lz({mapKey:n});case"lru":return new rE({mapKey:n,maxSize:Ye(e)});case"most-recent":return new rE({mapKey:n,maxSize:1})}throw me(`Unrecognized eviction policy ${t}`)}var R1=uz;const{setConfigDeletionHandler:dz}=fn;function fz(t){var e,n;const r=R1({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return i=>{var s,o;const a=r.get(i);if(a!=null)return a;const{cachePolicyForParams_UNSTABLE:u,...c}=t,d="default"in t?t.default:new Promise(()=>{}),f=I1({...c,key:`${t.key}__${(s=Cd(i))!==null&&s!==void 0?s:"void"}`,default:typeof d=="function"?d(i):d,retainedBy_UNSTABLE:typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(i):t.retainedBy_UNSTABLE,effects:typeof t.effects=="function"?t.effects(i):typeof t.effects_UNSTABLE=="function"?t.effects_UNSTABLE(i):(o=t.effects)!==null&&o!==void 0?o:t.effects_UNSTABLE});return r.set(i,f),dz(f.key,()=>{r.delete(i)}),f}}var pz=fz;const{setConfigDeletionHandler:mz}=fn;let gz=0;function _z(t){var e,n;const r=R1({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return i=>{var s;let o;try{o=r.get(i)}catch(m){throw me(`Problem with cache lookup for selector ${t.key}: ${m.message}`)}if(o!=null)return o;const a=`${t.key}__selectorFamily/${(s=Cd(i,{allowFunctions:!0}))!==null&&s!==void 0?s:"void"}/${gz++}`,u=m=>t.get(i)(m),c=t.cachePolicy_UNSTABLE,d=typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(i):t.retainedBy_UNSTABLE;let f;if(t.set!=null){const m=t.set;f=bo({key:a,get:u,set:(v,A)=>m(i)(v,A),cachePolicy_UNSTABLE:c,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:d})}else f=bo({key:a,get:u,cachePolicy_UNSTABLE:c,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:d});return r.set(i,f),mz(f.key,()=>{r.delete(i)}),f}}var Ai=_z;const yz=Ai({key:"__constant",get:t=>()=>t,cachePolicyForParams_UNSTABLE:{equality:"reference"}});function vz(t){return yz(t)}var wz=vz;const Ez=Ai({key:"__error",get:t=>()=>{throw me(t)},cachePolicyForParams_UNSTABLE:{equality:"reference"}});function Sz(t){return Ez(t)}var Tz=Sz;function Iz(t){return t}var Rz=Iz;const{loadableWithError:C1,loadableWithPromise:A1,loadableWithValue:k1}=Ql;function Ad(t,e){const n=Array(e.length).fill(void 0),r=Array(e.length).fill(void 0);for(const[i,s]of e.entries())try{n[i]=t(s)}catch(o){r[i]=o}return[n,r]}function Cz(t){return t!=null&&!We(t)}function kd(t){return Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(e=>t[e])}function Am(t,e){return Array.isArray(t)?e:Object.getOwnPropertyNames(t).reduce((n,r,i)=>({...n,[r]:e[i]}),{})}function uo(t,e,n){const r=n.map((i,s)=>i==null?k1(e[s]):We(i)?A1(i):C1(i));return Am(t,r)}function Az(t,e){return e.map((n,r)=>n===void 0?t[r]:n)}const kz=Ai({key:"__waitForNone",get:t=>({get:e})=>{const n=kd(t),[r,i]=Ad(e,n);return uo(t,r,i)},dangerouslyAllowMutability:!0}),Nz=Ai({key:"__waitForAny",get:t=>({get:e})=>{const n=kd(t),[r,i]=Ad(e,n);return i.some(s=>!We(s))?uo(t,r,i):new Promise(s=>{for(const[o,a]of i.entries())We(a)&&a.then(u=>{r[o]=u,i[o]=void 0,s(uo(t,r,i))}).catch(u=>{i[o]=u,s(uo(t,r,i))})})},dangerouslyAllowMutability:!0}),Pz=Ai({key:"__waitForAll",get:t=>({get:e})=>{const n=kd(t),[r,i]=Ad(e,n);if(i.every(o=>o==null))return Am(t,r);const s=i.find(Cz);if(s!=null)throw s;return Promise.all(i).then(o=>Am(t,Az(r,o)))},dangerouslyAllowMutability:!0}),bz=Ai({key:"__waitForAllSettled",get:t=>({get:e})=>{const n=kd(t),[r,i]=Ad(e,n);return i.every(s=>!We(s))?uo(t,r,i):Promise.all(i.map((s,o)=>We(s)?s.then(a=>{r[o]=a,i[o]=void 0}).catch(a=>{r[o]=void 0,i[o]=a}):null)).then(()=>uo(t,r,i))},dangerouslyAllowMutability:!0}),Oz=Ai({key:"__noWait",get:t=>({get:e})=>{try{return bo.value(k1(e(t)))}catch(n){return bo.value(We(n)?A1(n):C1(n))}},dangerouslyAllowMutability:!0});var xz={waitForNone:kz,waitForAny:Nz,waitForAll:Pz,waitForAllSettled:bz,noWait:Oz};const{RecoilLoadable:Dz}=Ql,{DefaultValue:Lz}=fn,{RecoilRoot:Mz,useRecoilStoreID:Vz}=Vr,{isRecoilValue:Fz}=ko,{retentionZone:Uz}=md,{freshSnapshot:$z}=Ed,{useRecoilState:Bz,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:jz,useRecoilStateLoadable:zz,useRecoilValue:Wz,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:Hz,useRecoilValueLoadable:Gz,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:Kz,useResetRecoilState:qz,useSetRecoilState:Qz}=s3,{useGotoRecoilSnapshot:Yz,useRecoilSnapshot:Xz,useRecoilTransactionObserver:Jz}=h1,{useRecoilCallback:Zz}=m1,{noWait:e5,waitForAll:t5,waitForAllSettled:n5,waitForAny:r5,waitForNone:i5}=xz;var $_={DefaultValue:Lz,isRecoilValue:Fz,RecoilLoadable:Dz,RecoilEnv:Wo,RecoilRoot:Mz,useRecoilStoreID:Vz,useRecoilBridgeAcrossReactRoots_UNSTABLE:O3,atom:I1,selector:bo,atomFamily:pz,selectorFamily:Ai,constSelector:wz,errorSelector:Tz,readOnlySelector:Rz,noWait:e5,waitForNone:i5,waitForAny:r5,waitForAll:t5,waitForAllSettled:n5,useRecoilValue:Wz,useRecoilValueLoadable:Gz,useRecoilState:Bz,useRecoilStateLoadable:zz,useSetRecoilState:Qz,useResetRecoilState:qz,useGetRecoilValueInfo_UNSTABLE:C3,useRecoilRefresher_UNSTABLE:a6,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:Kz,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:Hz,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:jz,useRecoilCallback:Zz,useRecoilTransaction_UNSTABLE:d6,useGotoRecoilSnapshot:Yz,useRecoilSnapshot:Xz,useRecoilTransactionObserver_UNSTABLE:Jz,snapshot_UNSTABLE:$z,useRetain:D_,retentionZone:Uz},s5=$_.RecoilRoot,o5=$_.atom,N1=$_.useRecoilState;const P1=o5({key:"TasksAtom",default:[]}),a5=()=>{const t=Bh(),[e,n]=G.useState({title:"",date:"",start:"",end:"",description:"",done:!1,pending:!1}),[r,i]=G.useState(!1),[s,o]=N1(P1),[a,u]=G.useState(!1),c=m=>{const{name:w,value:v}=m.target;n(A=>({...A,[w]:v}))},d=m=>{m.preventDefault()},f=()=>{e.title.length>0&&e.date.length>0&&e.start.length>0&&e.end.length>0&&e.description.length>0?(u(!0),o(m=>[...m,e]),t("/REACT_VITE_TODOAPP/home")):u(!1)};return console.log(e),console.log(s),B.jsx("form",{onSubmit:d,className:"w-full absolute left-1/2 top-1/2 flex justify-center p-2 md:p-0",style:{transform:"translate(-50%,-50%)"},children:B.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[B.jsx(p$,{path:"/REACT_VITE_TODOAPP/home"}),B.jsx(ir,{setClicked:r,name:"title",placeholder:"Title",type:"text",value:c}),B.jsx(ir,{setClicked:r,value:c,name:"date",placeholder:"date",type:"date"}),B.jsxs("div",{className:"time grid grid-cols-2 gap-2 w-full",children:[B.jsx(ir,{setClicked:r,value:c,name:"start",placeholder:"start time",type:"time"}),B.jsx(ir,{setClicked:r,value:c,name:"end",placeholder:"end time",type:"time"})," "]}),B.jsx(f$,{setClicked:r,value:c,name:"description",placeholder:"description"}),B.jsx("button",{onClick:()=>{i(!0),f()},className:"btn w-full mt-2",children:"add task"})]})})},l5=t=>B.jsxs("div",{className:"overflow-hidden cursor-pointer container m-auto p-2 bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid hover:border-[#596A95] border-[#2B3040]",children:[B.jsx("h2",{className:"cursor-pointer capitalize text-2xl",children:t.title}),B.jsx("p",{className:"text-gray-500 text-[12px]",children:t.date}),B.jsxs("div",{className:"flex gap-5",children:[B.jsx("div",{className:"capitalize text-white text-[12px]",children:B.jsxs("p",{children:["start : ",t.start]})}),B.jsx("div",{className:"capitalize text-white text-[12px]",children:B.jsxs("p",{children:["end : ",t.end]})})]}),B.jsx("p",{className:"text-[10px] mt-2 text-gray-400 truncate h-7",children:t.desciption})]}),u5=t=>{const e=G.useRef();return B.jsxs("div",{className:"alert bg-yellow-500 text-white flex items-center p-1 text-sm w-full",id:"warningItem",ref:e,children:[B.jsx("i",{className:"fa-solid fa-circle-exclamation me-2"}),B.jsx("span",{className:"capitalize text-[8px] md:text-[12px]",children:"you have't logined you can't save your data"}),B.jsx("span",{onClick:()=>{e.current.style.display="none"},className:"cursor-pointer ms-1 inline-block text-[8px] md:text-[12px] underline font-bold",children:"i know"})]})},c5=()=>{const[t,e]=N1(P1),n=new T_,r=t.map((i,s)=>B.jsx(l5,{title:i.title,date:i.date,start:i.start,end:i.end,desciption:i.description},s));return B.jsxs(B.Fragment,{children:[n.get("isLogined")?"":B.jsx(u5,{}),B.jsxs("div",{className:" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 m-5 md:m-3 gap-3 mt-3",children:[B.jsx(yo,{to:"/REACT_VITE_TODOAPP/home/addTask",className:"fixed bottom-10 right-10 cursor-pointer bg-white h-10 w-10 flex items-center justify-center rounded-[50%] hover:rotate-90 transition-all duration-500",children:B.jsx("i",{className:"fa-solid fa-plus"})}),r]})]})},h5=()=>{Bh();const[t,e]=G.useState(!1),[n,r]=G.useState(!1),[i,s]=G.useState({email:"",password:""}),o=()=>{i.email.length>0&&i.password.length>6?(e(!0),setTaskAtomStored(c=>[...c,TaskData])):e(!1)},a=c=>{c.preventDefault()},u=c=>{const{name:d,value:f}=c.target;setTaskData(m=>({...m,[d]:f}))};return B.jsx("div",{className:"w-[90%] md:w-[50%] lg:w-[30%] h-fit absolute top-1/2 left-1/2 p-2 bg-[#222630] px-3 py-2 outline-none text-white rounded-lg border-2 border-solid border-[#2B3040]",style:{transform:"translate(-50%,-50%)"},children:B.jsxs("form",{onSubmit:a,action:"",children:[B.jsx("h2",{className:"font-semibold text-xl text-center mb-4",children:"Login"}),B.jsx(ir,{setClicked:n,name:"email",placeholder:"email",type:"email",value:u}),B.jsx(ir,{setClicked:n,name:"password",placeholder:"password",type:"password",value:u}),B.jsx("button",{onClick:()=>{r(!0),o()},className:"btn w-full mt-5",children:"Login"}),B.jsxs("p",{className:"text-center my-2 text-sm",children:["don't have an account?",B.jsxs(yo,{to:"/REACT_VITE_TODOAPP/home/register",className:"underline cursor-pointer font-bold",children:[" ","register"]})]})]})})},d5=t=>{const e=G.useRef();return B.jsx("div",{className:`alert ${t.color} text-white flex items-center p-1 text-sm w-full`,id:"warningItem",ref:e,children:t.title})},f5=()=>{const t=Bh(),[e,n]=G.useState(!1),[r,i]=G.useState(!1),s=new T_,[o,a]=G.useState({color:"",title:""}),[u,c]=G.useState({email:"",password:"",firstName:"",lastName:""}),d=()=>{u.email.length>0&&u.password.length>6&&u.firstName.length>0&&u.lastName.length>0?n(!0):n(!1)},f=async w=>{if(w.preventDefault(),e)try{await wL(Z0,u.email,u.password);const v=Z0.currentUser;v&&(await uF(QV(fF,"Users",v.uid),{email:v.email,firstName:u.firstName,lastName:u.lastName}),s.set("isLogined",!0)),a({color:"bg-green-500",title:"account created successfully"}),setTimeout(()=>{t("/REACT_VITE_TODOAPP/home")},500)}catch(v){a({color:"bg-red-500",title:"couldnot create your account"}),console.log(v)}},m=w=>{const{name:v,value:A}=w.target;c(x=>({...x,[v]:A}))};return B.jsxs(B.Fragment,{children:[e&&r?B.jsx(d5,{title:o.title,color:o.color}):"",B.jsx("div",{className:"w-[90%] md:w-[50%] lg:w-[30%] h-fit absolute top-1/2 left-1/2 p-2 bg-[#222630] px-3 py-2 outline-none text-white rounded-lg border-2 border-solid border-[#2B3040]",style:{transform:"translate(-50%,-50%)"},children:B.jsxs("form",{onSubmit:f,action:"",children:[B.jsx("h2",{className:"font-semibold text-xl text-center mb-4",children:"Register"}),B.jsx(ir,{setClicked:r,name:"email",placeholder:"email",type:"email",value:m}),B.jsx(ir,{setClicked:r,name:"password",placeholder:"password",type:"password",value:m}),B.jsx("p",{className:"text-[10px] mt-1 text-gray-400",children:"password must be more than 6 characters"}),B.jsx(ir,{setClicked:r,name:"firstName",placeholder:"first Name",type:"text",value:m}),B.jsx(ir,{setClicked:r,name:"lastName",placeholder:"last name",type:"text",value:m}),B.jsx("button",{onClick:()=>{i(!0),d()},className:"btn w-full mt-5",children:"Register"})]})})]})};function p5(){return B.jsxs("div",{className:"bg-[#121212] h-svh",children:[B.jsx(c$,{activeTextAnimation:!0}),B.jsxs(yb,{children:[B.jsx(Mi,{path:"/REACT_VITE_TODOAPP/",element:B.jsx(h$,{activeTextAnimation:!0})}),B.jsxs(Mi,{path:"/REACT_VITE_TODOAPP/home",element:B.jsx(d$,{}),children:[B.jsx(Mi,{path:"/REACT_VITE_TODOAPP/home/login",element:B.jsx(h5,{})}),B.jsx(Mi,{path:"/REACT_VITE_TODOAPP/home/register",element:B.jsx(f5,{})}),B.jsx(Mi,{path:"/REACT_VITE_TODOAPP/home",element:B.jsx(c5,{})}),B.jsx(Mi,{path:"/REACT_VITE_TODOAPP/home/addTask",element:B.jsx(a5,{})})]})]})]})}Hf.createRoot(document.getElementById("root")).render(B.jsx(Ue.StrictMode,{children:B.jsx(Rb,{children:B.jsx(s5,{children:B.jsx(p5,{})})})}));
