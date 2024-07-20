function CP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fT={exports:{}},Yh={},pT={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu=Symbol.for("react.element"),AP=Symbol.for("react.portal"),kP=Symbol.for("react.fragment"),PP=Symbol.for("react.strict_mode"),NP=Symbol.for("react.profiler"),bP=Symbol.for("react.provider"),xP=Symbol.for("react.context"),DP=Symbol.for("react.forward_ref"),LP=Symbol.for("react.suspense"),OP=Symbol.for("react.memo"),MP=Symbol.for("react.lazy"),Av=Symbol.iterator;function VP(t){return t===null||typeof t!="object"?null:(t=Av&&t[Av]||t["@@iterator"],typeof t=="function"?t:null)}var mT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gT=Object.assign,_T={};function ea(t,e,n){this.props=t,this.context=e,this.refs=_T,this.updater=n||mT}ea.prototype.isReactComponent={};ea.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ea.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yT(){}yT.prototype=ea.prototype;function pg(t,e,n){this.props=t,this.context=e,this.refs=_T,this.updater=n||mT}var mg=pg.prototype=new yT;mg.constructor=pg;gT(mg,ea.prototype);mg.isPureReactComponent=!0;var kv=Array.isArray,vT=Object.prototype.hasOwnProperty,gg={current:null},wT={key:!0,ref:!0,__self:!0,__source:!0};function ET(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vT.call(e,r)&&!wT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:tu,type:t,key:s,ref:o,props:i,_owner:gg.current}}function FP(t,e){return{$$typeof:tu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _g(t){return typeof t=="object"&&t!==null&&t.$$typeof===tu}function UP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pv=/\/+/g;function Sf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UP(""+t.key):e.toString(36)}function Cc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case tu:case AP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sf(o,0):r,kv(i)?(n="",t!=null&&(n=t.replace(Pv,"$&/")+"/"),Cc(i,e,n,"",function(c){return c})):i!=null&&(_g(i)&&(i=FP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",kv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Sf(s,a);o+=Cc(s,e,n,l,i)}else if(l=VP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Sf(s,a++),o+=Cc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xu(t,e,n){if(t==null)return t;var r=[],i=0;return Cc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function $P(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},Ac={transition:null},BP={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:Ac,ReactCurrentOwner:gg};function TT(){throw Error("act(...) is not supported in production builds of React.")}Ee.Children={map:Xu,forEach:function(t,e,n){Xu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xu(t,function(){e++}),e},toArray:function(t){return Xu(t,function(e){return e})||[]},only:function(t){if(!_g(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ee.Component=ea;Ee.Fragment=kP;Ee.Profiler=NP;Ee.PureComponent=pg;Ee.StrictMode=PP;Ee.Suspense=LP;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BP;Ee.act=TT;Ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vT.call(e,l)&&!wT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:tu,type:t.type,key:i,ref:s,props:r,_owner:o}};Ee.createContext=function(t){return t={$$typeof:xP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bP,_context:t},t.Consumer=t};Ee.createElement=ET;Ee.createFactory=function(t){var e=ET.bind(null,t);return e.type=t,e};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(t){return{$$typeof:DP,render:t}};Ee.isValidElement=_g;Ee.lazy=function(t){return{$$typeof:MP,_payload:{_status:-1,_result:t},_init:$P}};Ee.memo=function(t,e){return{$$typeof:OP,type:t,compare:e===void 0?null:e}};Ee.startTransition=function(t){var e=Ac.transition;Ac.transition={};try{t()}finally{Ac.transition=e}};Ee.unstable_act=TT;Ee.useCallback=function(t,e){return on.current.useCallback(t,e)};Ee.useContext=function(t){return on.current.useContext(t)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(t){return on.current.useDeferredValue(t)};Ee.useEffect=function(t,e){return on.current.useEffect(t,e)};Ee.useId=function(){return on.current.useId()};Ee.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};Ee.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};Ee.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};Ee.useMemo=function(t,e){return on.current.useMemo(t,e)};Ee.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};Ee.useRef=function(t){return on.current.useRef(t)};Ee.useState=function(t){return on.current.useState(t)};Ee.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};Ee.useTransition=function(){return on.current.useTransition()};Ee.version="18.3.1";pT.exports=Ee;var U=pT.exports;const je=dT(U),jP=CP({__proto__:null,default:je},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zP=U,WP=Symbol.for("react.element"),HP=Symbol.for("react.fragment"),qP=Object.prototype.hasOwnProperty,GP=zP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KP={key:!0,ref:!0,__self:!0,__source:!0};function ST(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qP.call(e,r)&&!KP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:WP,type:t,key:s,ref:o,props:i,_owner:GP.current}}Yh.Fragment=HP;Yh.jsx=ST;Yh.jsxs=ST;fT.exports=Yh;var L=fT.exports,Rp={},IT={exports:{}},Nn={},RT={exports:{}},CT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,ae){var J=K.length;K.push(ae);e:for(;0<J;){var re=J-1>>>1,b=K[re];if(0<i(b,ae))K[re]=ae,K[J]=b,J=re;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var ae=K[0],J=K.pop();if(J!==ae){K[0]=J;e:for(var re=0,b=K.length,B=b>>>1;re<B;){var q=2*(re+1)-1,se=K[q],Z=q+1,fe=K[Z];if(0>i(se,J))Z<b&&0>i(fe,se)?(K[re]=fe,K[Z]=J,re=Z):(K[re]=se,K[q]=J,re=q);else if(Z<b&&0>i(fe,J))K[re]=fe,K[Z]=J,re=Z;else break e}}return ae}function i(K,ae){var J=K.sortIndex-ae.sortIndex;return J!==0?J:K.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,m=3,y=!1,w=!1,C=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(K){for(var ae=n(c);ae!==null;){if(ae.callback===null)r(c);else if(ae.startTime<=K)r(c),ae.sortIndex=ae.expirationTime,e(l,ae);else break;ae=n(c)}}function O(K){if(C=!1,T(K),!w)if(n(l)!==null)w=!0,wt(F);else{var ae=n(c);ae!==null&&pt(O,ae.startTime-K)}}function F(K,ae){w=!1,C&&(C=!1,E(v),v=-1),y=!0;var J=m;try{for(T(ae),f=n(l);f!==null&&(!(f.expirationTime>ae)||K&&!k());){var re=f.callback;if(typeof re=="function"){f.callback=null,m=f.priorityLevel;var b=re(f.expirationTime<=ae);ae=t.unstable_now(),typeof b=="function"?f.callback=b:f===n(l)&&r(l),T(ae)}else r(l);f=n(l)}if(f!==null)var B=!0;else{var q=n(c);q!==null&&pt(O,q.startTime-ae),B=!1}return B}finally{f=null,m=J,y=!1}}var $=!1,S=null,v=-1,I=5,A=-1;function k(){return!(t.unstable_now()-A<I)}function x(){if(S!==null){var K=t.unstable_now();A=K;var ae=!0;try{ae=S(!0,K)}finally{ae?R():($=!1,S=null)}}else $=!1}var R;if(typeof g=="function")R=function(){g(x)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Zt=$e.port2;$e.port1.onmessage=x,R=function(){Zt.postMessage(null)}}else R=function(){P(x,0)};function wt(K){S=K,$||($=!0,R())}function pt(K,ae){v=P(function(){K(t.unstable_now())},ae)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,wt(F))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(K){switch(m){case 1:case 2:case 3:var ae=3;break;default:ae=m}var J=m;m=ae;try{return K()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,ae){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var J=m;m=K;try{return ae()}finally{m=J}},t.unstable_scheduleCallback=function(K,ae,J){var re=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?re+J:re):J=re,K){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=J+b,K={id:h++,callback:ae,priorityLevel:K,startTime:J,expirationTime:b,sortIndex:-1},J>re?(K.sortIndex=J,e(c,K),n(l)===null&&K===n(c)&&(C?(E(v),v=-1):C=!0,pt(O,J-re))):(K.sortIndex=b,e(l,K),w||y||(w=!0,wt(F))),K},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(K){var ae=m;return function(){var J=m;m=ae;try{return K.apply(this,arguments)}finally{m=J}}}})(CT);RT.exports=CT;var QP=RT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YP=U,Pn=QP;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var AT=new Set,Tl={};function bs(t,e){bo(t,e),bo(t+"Capture",e)}function bo(t,e){for(Tl[t]=e,t=0;t<e.length;t++)AT.add(e[t])}var Ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cp=Object.prototype.hasOwnProperty,XP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nv={},bv={};function JP(t){return Cp.call(bv,t)?!0:Cp.call(Nv,t)?!1:XP.test(t)?bv[t]=!0:(Nv[t]=!0,!1)}function ZP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function eN(t,e,n,r){if(e===null||typeof e>"u"||ZP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var yg=/[\-:]([a-z])/g;function vg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yg,vg);Vt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yg,vg);Vt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yg,vg);Vt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function wg(t,e,n,r){var i=Vt.hasOwnProperty(e)?Vt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eN(e,n,i,r)&&(n=null),r||i===null?JP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qr=YP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),no=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),Eg=Symbol.for("react.strict_mode"),Ap=Symbol.for("react.profiler"),kT=Symbol.for("react.provider"),PT=Symbol.for("react.context"),Tg=Symbol.for("react.forward_ref"),kp=Symbol.for("react.suspense"),Pp=Symbol.for("react.suspense_list"),Sg=Symbol.for("react.memo"),ti=Symbol.for("react.lazy"),NT=Symbol.for("react.offscreen"),xv=Symbol.iterator;function Ca(t){return t===null||typeof t!="object"?null:(t=xv&&t[xv]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Object.assign,If;function Wa(t){if(If===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);If=e&&e[1]||""}return`
`+If+t}var Rf=!1;function Cf(t,e){if(!t||Rf)return"";Rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wa(t):""}function tN(t){switch(t.tag){case 5:return Wa(t.type);case 16:return Wa("Lazy");case 13:return Wa("Suspense");case 19:return Wa("SuspenseList");case 0:case 2:case 15:return t=Cf(t.type,!1),t;case 11:return t=Cf(t.type.render,!1),t;case 1:return t=Cf(t.type,!0),t;default:return""}}function Np(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ro:return"Fragment";case no:return"Portal";case Ap:return"Profiler";case Eg:return"StrictMode";case kp:return"Suspense";case Pp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case PT:return(t.displayName||"Context")+".Consumer";case kT:return(t._context.displayName||"Context")+".Provider";case Tg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sg:return e=t.displayName||null,e!==null?e:Np(t.type)||"Memo";case ti:e=t._payload,t=t._init;try{return Np(t(e))}catch{}}return null}function nN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Np(e);case 8:return e===Eg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rN(t){var e=bT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zu(t){t._valueTracker||(t._valueTracker=rN(t))}function xT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Gc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bp(t,e){var n=e.checked;return nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function DT(t,e){e=e.checked,e!=null&&wg(t,"checked",e,!1)}function xp(t,e){DT(t,e);var n=ki(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dp(t,e.type,ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dp(t,e,n){(e!=="number"||Gc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ha=Array.isArray;function yo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ki(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ov(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Ha(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ki(n)}}function LT(t,e){var n=ki(e.value),r=ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function OT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Op(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?OT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ec,MT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ec=ec||document.createElement("div"),ec.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ec.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var el={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iN=["Webkit","ms","Moz","O"];Object.keys(el).forEach(function(t){iN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),el[e]=el[t]})});function VT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||el.hasOwnProperty(t)&&el[t]?(""+e).trim():e+"px"}function FT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=VT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var sN=nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mp(t,e){if(e){if(sN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function Vp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fp=null;function Ig(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Up=null,vo=null,wo=null;function Vv(t){if(t=iu(t)){if(typeof Up!="function")throw Error(H(280));var e=t.stateNode;e&&(e=td(e),Up(t.stateNode,t.type,e))}}function UT(t){vo?wo?wo.push(t):wo=[t]:vo=t}function $T(){if(vo){var t=vo,e=wo;if(wo=vo=null,Vv(t),e)for(t=0;t<e.length;t++)Vv(e[t])}}function BT(t,e){return t(e)}function jT(){}var Af=!1;function zT(t,e,n){if(Af)return t(e,n);Af=!0;try{return BT(t,e,n)}finally{Af=!1,(vo!==null||wo!==null)&&(jT(),$T())}}function Il(t,e){var n=t.stateNode;if(n===null)return null;var r=td(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var $p=!1;if(Ur)try{var Aa={};Object.defineProperty(Aa,"passive",{get:function(){$p=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{$p=!1}function oN(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var tl=!1,Kc=null,Qc=!1,Bp=null,aN={onError:function(t){tl=!0,Kc=t}};function lN(t,e,n,r,i,s,o,a,l){tl=!1,Kc=null,oN.apply(aN,arguments)}function uN(t,e,n,r,i,s,o,a,l){if(lN.apply(this,arguments),tl){if(tl){var c=Kc;tl=!1,Kc=null}else throw Error(H(198));Qc||(Qc=!0,Bp=c)}}function xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function WT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fv(t){if(xs(t)!==t)throw Error(H(188))}function cN(t){var e=t.alternate;if(!e){if(e=xs(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fv(i),t;if(s===r)return Fv(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function HT(t){return t=cN(t),t!==null?qT(t):null}function qT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qT(t);if(e!==null)return e;t=t.sibling}return null}var GT=Pn.unstable_scheduleCallback,Uv=Pn.unstable_cancelCallback,hN=Pn.unstable_shouldYield,dN=Pn.unstable_requestPaint,lt=Pn.unstable_now,fN=Pn.unstable_getCurrentPriorityLevel,Rg=Pn.unstable_ImmediatePriority,KT=Pn.unstable_UserBlockingPriority,Yc=Pn.unstable_NormalPriority,pN=Pn.unstable_LowPriority,QT=Pn.unstable_IdlePriority,Xh=null,fr=null;function mN(t){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(Xh,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:yN,gN=Math.log,_N=Math.LN2;function yN(t){return t>>>=0,t===0?32:31-(gN(t)/_N|0)|0}var tc=64,nc=4194304;function qa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=qa(a):(s&=o,s!==0&&(r=qa(s)))}else o=n&~i,o!==0?r=qa(o):s!==0&&(r=qa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zn(e),i=1<<n,r|=t[n],e&=~i;return r}function vN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=vN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function jp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function YT(){var t=tc;return tc<<=1,!(tc&4194240)&&(tc=64),t}function kf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function EN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Zn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Le=0;function XT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var JT,Ag,ZT,eS,tS,zp=!1,rc=[],pi=null,mi=null,gi=null,Rl=new Map,Cl=new Map,ii=[],TN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $v(t,e){switch(t){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":mi=null;break;case"mouseover":case"mouseout":gi=null;break;case"pointerover":case"pointerout":Rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(e.pointerId)}}function ka(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=iu(e),e!==null&&Ag(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function SN(t,e,n,r,i){switch(e){case"focusin":return pi=ka(pi,t,e,n,r,i),!0;case"dragenter":return mi=ka(mi,t,e,n,r,i),!0;case"mouseover":return gi=ka(gi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Rl.set(s,ka(Rl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Cl.set(s,ka(Cl.get(s)||null,t,e,n,r,i)),!0}return!1}function nS(t){var e=ns(t.target);if(e!==null){var n=xs(e);if(n!==null){if(e=n.tag,e===13){if(e=WT(n),e!==null){t.blockedOn=e,tS(t.priority,function(){ZT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fp=r,n.target.dispatchEvent(r),Fp=null}else return e=iu(n),e!==null&&Ag(e),t.blockedOn=n,!1;e.shift()}return!0}function Bv(t,e,n){kc(t)&&n.delete(e)}function IN(){zp=!1,pi!==null&&kc(pi)&&(pi=null),mi!==null&&kc(mi)&&(mi=null),gi!==null&&kc(gi)&&(gi=null),Rl.forEach(Bv),Cl.forEach(Bv)}function Pa(t,e){t.blockedOn===e&&(t.blockedOn=null,zp||(zp=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,IN)))}function Al(t){function e(i){return Pa(i,t)}if(0<rc.length){Pa(rc[0],t);for(var n=1;n<rc.length;n++){var r=rc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pi!==null&&Pa(pi,t),mi!==null&&Pa(mi,t),gi!==null&&Pa(gi,t),Rl.forEach(e),Cl.forEach(e),n=0;n<ii.length;n++)r=ii[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ii.length&&(n=ii[0],n.blockedOn===null);)nS(n),n.blockedOn===null&&ii.shift()}var Eo=qr.ReactCurrentBatchConfig,Jc=!0;function RN(t,e,n,r){var i=Le,s=Eo.transition;Eo.transition=null;try{Le=1,kg(t,e,n,r)}finally{Le=i,Eo.transition=s}}function CN(t,e,n,r){var i=Le,s=Eo.transition;Eo.transition=null;try{Le=4,kg(t,e,n,r)}finally{Le=i,Eo.transition=s}}function kg(t,e,n,r){if(Jc){var i=Wp(t,e,n,r);if(i===null)Ff(t,e,r,Zc,n),$v(t,r);else if(SN(i,t,e,n,r))r.stopPropagation();else if($v(t,r),e&4&&-1<TN.indexOf(t)){for(;i!==null;){var s=iu(i);if(s!==null&&JT(s),s=Wp(t,e,n,r),s===null&&Ff(t,e,r,Zc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ff(t,e,r,null,n)}}var Zc=null;function Wp(t,e,n,r){if(Zc=null,t=Ig(r),t=ns(t),t!==null)if(e=xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=WT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zc=t,null}function rS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fN()){case Rg:return 1;case KT:return 4;case Yc:case pN:return 16;case QT:return 536870912;default:return 16}default:return 16}}var ci=null,Pg=null,Pc=null;function iS(){if(Pc)return Pc;var t,e=Pg,n=e.length,r,i="value"in ci?ci.value:ci.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pc=i.slice(t,1<r?1-r:void 0)}function Nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ic(){return!0}function jv(){return!1}function bn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ic:jv,this.isPropagationStopped=jv,this}return nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){},isPersistent:ic}),e}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ng=bn(ta),ru=nt({},ta,{view:0,detail:0}),AN=bn(ru),Pf,Nf,Na,Jh=nt({},ru,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Na&&(Na&&t.type==="mousemove"?(Pf=t.screenX-Na.screenX,Nf=t.screenY-Na.screenY):Nf=Pf=0,Na=t),Pf)},movementY:function(t){return"movementY"in t?t.movementY:Nf}}),zv=bn(Jh),kN=nt({},Jh,{dataTransfer:0}),PN=bn(kN),NN=nt({},ru,{relatedTarget:0}),bf=bn(NN),bN=nt({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),xN=bn(bN),DN=nt({},ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LN=bn(DN),ON=nt({},ta,{data:0}),Wv=bn(ON),MN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FN[t])?!!e[t]:!1}function bg(){return UN}var $N=nt({},ru,{key:function(t){if(t.key){var e=MN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bg,charCode:function(t){return t.type==="keypress"?Nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BN=bn($N),jN=nt({},Jh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hv=bn(jN),zN=nt({},ru,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bg}),WN=bn(zN),HN=nt({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),qN=bn(HN),GN=nt({},Jh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KN=bn(GN),QN=[9,13,27,32],xg=Ur&&"CompositionEvent"in window,nl=null;Ur&&"documentMode"in document&&(nl=document.documentMode);var YN=Ur&&"TextEvent"in window&&!nl,sS=Ur&&(!xg||nl&&8<nl&&11>=nl),qv=" ",Gv=!1;function oS(t,e){switch(t){case"keyup":return QN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var io=!1;function XN(t,e){switch(t){case"compositionend":return aS(e);case"keypress":return e.which!==32?null:(Gv=!0,qv);case"textInput":return t=e.data,t===qv&&Gv?null:t;default:return null}}function JN(t,e){if(io)return t==="compositionend"||!xg&&oS(t,e)?(t=iS(),Pc=Pg=ci=null,io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sS&&e.locale!=="ko"?null:e.data;default:return null}}var ZN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZN[t.type]:e==="textarea"}function lS(t,e,n,r){UT(r),e=eh(e,"onChange"),0<e.length&&(n=new Ng("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var rl=null,kl=null;function eb(t){vS(t,0)}function Zh(t){var e=ao(t);if(xT(e))return t}function tb(t,e){if(t==="change")return e}var uS=!1;if(Ur){var xf;if(Ur){var Df="oninput"in document;if(!Df){var Qv=document.createElement("div");Qv.setAttribute("oninput","return;"),Df=typeof Qv.oninput=="function"}xf=Df}else xf=!1;uS=xf&&(!document.documentMode||9<document.documentMode)}function Yv(){rl&&(rl.detachEvent("onpropertychange",cS),kl=rl=null)}function cS(t){if(t.propertyName==="value"&&Zh(kl)){var e=[];lS(e,kl,t,Ig(t)),zT(eb,e)}}function nb(t,e,n){t==="focusin"?(Yv(),rl=e,kl=n,rl.attachEvent("onpropertychange",cS)):t==="focusout"&&Yv()}function rb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zh(kl)}function ib(t,e){if(t==="click")return Zh(e)}function sb(t,e){if(t==="input"||t==="change")return Zh(e)}function ob(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nr=typeof Object.is=="function"?Object.is:ob;function Pl(t,e){if(nr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cp.call(e,i)||!nr(t[i],e[i]))return!1}return!0}function Xv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jv(t,e){var n=Xv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xv(n)}}function hS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dS(){for(var t=window,e=Gc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gc(t.document)}return e}function Dg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ab(t){var e=dS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hS(n.ownerDocument.documentElement,n)){if(r!==null&&Dg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jv(n,s);var o=Jv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lb=Ur&&"documentMode"in document&&11>=document.documentMode,so=null,Hp=null,il=null,qp=!1;function Zv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qp||so==null||so!==Gc(r)||(r=so,"selectionStart"in r&&Dg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),il&&Pl(il,r)||(il=r,r=eh(Hp,"onSelect"),0<r.length&&(e=new Ng("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=so)))}function sc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oo={animationend:sc("Animation","AnimationEnd"),animationiteration:sc("Animation","AnimationIteration"),animationstart:sc("Animation","AnimationStart"),transitionend:sc("Transition","TransitionEnd")},Lf={},fS={};Ur&&(fS=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function ed(t){if(Lf[t])return Lf[t];if(!oo[t])return t;var e=oo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fS)return Lf[t]=e[n];return t}var pS=ed("animationend"),mS=ed("animationiteration"),gS=ed("animationstart"),_S=ed("transitionend"),yS=new Map,e0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Oi(t,e){yS.set(t,e),bs(e,[t])}for(var Of=0;Of<e0.length;Of++){var Mf=e0[Of],ub=Mf.toLowerCase(),cb=Mf[0].toUpperCase()+Mf.slice(1);Oi(ub,"on"+cb)}Oi(pS,"onAnimationEnd");Oi(mS,"onAnimationIteration");Oi(gS,"onAnimationStart");Oi("dblclick","onDoubleClick");Oi("focusin","onFocus");Oi("focusout","onBlur");Oi(_S,"onTransitionEnd");bo("onMouseEnter",["mouseout","mouseover"]);bo("onMouseLeave",["mouseout","mouseover"]);bo("onPointerEnter",["pointerout","pointerover"]);bo("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));function t0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,uN(r,e,void 0,t),t.currentTarget=null}function vS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;t0(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;t0(i,a,c),s=l}}}if(Qc)throw t=Bp,Qc=!1,Bp=null,t}function He(t,e){var n=e[Xp];n===void 0&&(n=e[Xp]=new Set);var r=t+"__bubble";n.has(r)||(wS(e,t,2,!1),n.add(r))}function Vf(t,e,n){var r=0;e&&(r|=4),wS(n,t,r,e)}var oc="_reactListening"+Math.random().toString(36).slice(2);function Nl(t){if(!t[oc]){t[oc]=!0,AT.forEach(function(n){n!=="selectionchange"&&(hb.has(n)||Vf(n,!1,t),Vf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oc]||(e[oc]=!0,Vf("selectionchange",!1,e))}}function wS(t,e,n,r){switch(rS(e)){case 1:var i=RN;break;case 4:i=CN;break;default:i=kg}n=i.bind(null,e,n,t),i=void 0,!$p||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ff(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ns(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}zT(function(){var c=s,h=Ig(n),f=[];e:{var m=yS.get(t);if(m!==void 0){var y=Ng,w=t;switch(t){case"keypress":if(Nc(n)===0)break e;case"keydown":case"keyup":y=BN;break;case"focusin":w="focus",y=bf;break;case"focusout":w="blur",y=bf;break;case"beforeblur":case"afterblur":y=bf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=zv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=PN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=WN;break;case pS:case mS:case gS:y=xN;break;case _S:y=qN;break;case"scroll":y=AN;break;case"wheel":y=KN;break;case"copy":case"cut":case"paste":y=LN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Hv}var C=(e&4)!==0,P=!C&&t==="scroll",E=C?m!==null?m+"Capture":null:m;C=[];for(var g=c,T;g!==null;){T=g;var O=T.stateNode;if(T.tag===5&&O!==null&&(T=O,E!==null&&(O=Il(g,E),O!=null&&C.push(bl(g,O,T)))),P)break;g=g.return}0<C.length&&(m=new y(m,w,null,n,h),f.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Fp&&(w=n.relatedTarget||n.fromElement)&&(ns(w)||w[$r]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?ns(w):null,w!==null&&(P=xs(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(C=zv,O="onMouseLeave",E="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(C=Hv,O="onPointerLeave",E="onPointerEnter",g="pointer"),P=y==null?m:ao(y),T=w==null?m:ao(w),m=new C(O,g+"leave",y,n,h),m.target=P,m.relatedTarget=T,O=null,ns(h)===c&&(C=new C(E,g+"enter",w,n,h),C.target=T,C.relatedTarget=P,O=C),P=O,y&&w)t:{for(C=y,E=w,g=0,T=C;T;T=Ys(T))g++;for(T=0,O=E;O;O=Ys(O))T++;for(;0<g-T;)C=Ys(C),g--;for(;0<T-g;)E=Ys(E),T--;for(;g--;){if(C===E||E!==null&&C===E.alternate)break t;C=Ys(C),E=Ys(E)}C=null}else C=null;y!==null&&n0(f,m,y,C,!1),w!==null&&P!==null&&n0(f,P,w,C,!0)}}e:{if(m=c?ao(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var F=tb;else if(Kv(m))if(uS)F=sb;else{F=rb;var $=nb}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=ib);if(F&&(F=F(t,c))){lS(f,F,n,h);break e}$&&$(t,m,c),t==="focusout"&&($=m._wrapperState)&&$.controlled&&m.type==="number"&&Dp(m,"number",m.value)}switch($=c?ao(c):window,t){case"focusin":(Kv($)||$.contentEditable==="true")&&(so=$,Hp=c,il=null);break;case"focusout":il=Hp=so=null;break;case"mousedown":qp=!0;break;case"contextmenu":case"mouseup":case"dragend":qp=!1,Zv(f,n,h);break;case"selectionchange":if(lb)break;case"keydown":case"keyup":Zv(f,n,h)}var S;if(xg)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else io?oS(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(sS&&n.locale!=="ko"&&(io||v!=="onCompositionStart"?v==="onCompositionEnd"&&io&&(S=iS()):(ci=h,Pg="value"in ci?ci.value:ci.textContent,io=!0)),$=eh(c,v),0<$.length&&(v=new Wv(v,t,null,n,h),f.push({event:v,listeners:$}),S?v.data=S:(S=aS(n),S!==null&&(v.data=S)))),(S=YN?XN(t,n):JN(t,n))&&(c=eh(c,"onBeforeInput"),0<c.length&&(h=new Wv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=S))}vS(f,e)})}function bl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Il(t,n),s!=null&&r.unshift(bl(t,s,i)),s=Il(t,e),s!=null&&r.push(bl(t,s,i))),t=t.return}return r}function Ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function n0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Il(n,s),l!=null&&o.unshift(bl(n,l,a))):i||(l=Il(n,s),l!=null&&o.push(bl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var db=/\r\n?/g,fb=/\u0000|\uFFFD/g;function r0(t){return(typeof t=="string"?t:""+t).replace(db,`
`).replace(fb,"")}function ac(t,e,n){if(e=r0(e),r0(t)!==e&&n)throw Error(H(425))}function th(){}var Gp=null,Kp=null;function Qp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yp=typeof setTimeout=="function"?setTimeout:void 0,pb=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,mb=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(t){return i0.resolve(null).then(t).catch(gb)}:Yp;function gb(t){setTimeout(function(){throw t})}function Uf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Al(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Al(e)}function _i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function s0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var na=Math.random().toString(36).slice(2),ur="__reactFiber$"+na,xl="__reactProps$"+na,$r="__reactContainer$"+na,Xp="__reactEvents$"+na,_b="__reactListeners$"+na,yb="__reactHandles$"+na;function ns(t){var e=t[ur];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$r]||n[ur]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=s0(t);t!==null;){if(n=t[ur])return n;t=s0(t)}return e}t=n,n=t.parentNode}return null}function iu(t){return t=t[ur]||t[$r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function td(t){return t[xl]||null}var Jp=[],lo=-1;function Mi(t){return{current:t}}function Qe(t){0>lo||(t.current=Jp[lo],Jp[lo]=null,lo--)}function Be(t,e){lo++,Jp[lo]=t.current,t.current=e}var Pi={},Yt=Mi(Pi),mn=Mi(!1),hs=Pi;function xo(t,e){var n=t.type.contextTypes;if(!n)return Pi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gn(t){return t=t.childContextTypes,t!=null}function nh(){Qe(mn),Qe(Yt)}function o0(t,e,n){if(Yt.current!==Pi)throw Error(H(168));Be(Yt,e),Be(mn,n)}function ES(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,nN(t)||"Unknown",i));return nt({},n,r)}function rh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pi,hs=Yt.current,Be(Yt,t),Be(mn,mn.current),!0}function a0(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=ES(t,e,hs),r.__reactInternalMemoizedMergedChildContext=t,Qe(mn),Qe(Yt),Be(Yt,t)):Qe(mn),Be(mn,n)}var Pr=null,nd=!1,$f=!1;function TS(t){Pr===null?Pr=[t]:Pr.push(t)}function vb(t){nd=!0,TS(t)}function Vi(){if(!$f&&Pr!==null){$f=!0;var t=0,e=Le;try{var n=Pr;for(Le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pr=null,nd=!1}catch(i){throw Pr!==null&&(Pr=Pr.slice(t+1)),GT(Rg,Vi),i}finally{Le=e,$f=!1}}return null}var uo=[],co=0,ih=null,sh=0,xn=[],Dn=0,ds=null,Nr=1,br="";function Xi(t,e){uo[co++]=sh,uo[co++]=ih,ih=t,sh=e}function SS(t,e,n){xn[Dn++]=Nr,xn[Dn++]=br,xn[Dn++]=ds,ds=t;var r=Nr;t=br;var i=32-Zn(r)-1;r&=~(1<<i),n+=1;var s=32-Zn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nr=1<<32-Zn(e)+i|n<<i|r,br=s+t}else Nr=1<<s|n<<i|r,br=t}function Lg(t){t.return!==null&&(Xi(t,1),SS(t,1,0))}function Og(t){for(;t===ih;)ih=uo[--co],uo[co]=null,sh=uo[--co],uo[co]=null;for(;t===ds;)ds=xn[--Dn],xn[Dn]=null,br=xn[--Dn],xn[Dn]=null,Nr=xn[--Dn],xn[Dn]=null}var Cn=null,In=null,Je=!1,Yn=null;function IS(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function l0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,In=_i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ds!==null?{id:Nr,overflow:br}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,In=null,!0):!1;default:return!1}}function Zp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function em(t){if(Je){var e=In;if(e){var n=e;if(!l0(t,e)){if(Zp(t))throw Error(H(418));e=_i(n.nextSibling);var r=Cn;e&&l0(t,e)?IS(r,n):(t.flags=t.flags&-4097|2,Je=!1,Cn=t)}}else{if(Zp(t))throw Error(H(418));t.flags=t.flags&-4097|2,Je=!1,Cn=t}}}function u0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function lc(t){if(t!==Cn)return!1;if(!Je)return u0(t),Je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qp(t.type,t.memoizedProps)),e&&(e=In)){if(Zp(t))throw RS(),Error(H(418));for(;e;)IS(t,e),e=_i(e.nextSibling)}if(u0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=_i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Cn?_i(t.stateNode.nextSibling):null;return!0}function RS(){for(var t=In;t;)t=_i(t.nextSibling)}function Do(){In=Cn=null,Je=!1}function Mg(t){Yn===null?Yn=[t]:Yn.push(t)}var wb=qr.ReactCurrentBatchConfig;function ba(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function uc(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function c0(t){var e=t._init;return e(t._payload)}function CS(t){function e(E,g){if(t){var T=E.deletions;T===null?(E.deletions=[g],E.flags|=16):T.push(g)}}function n(E,g){if(!t)return null;for(;g!==null;)e(E,g),g=g.sibling;return null}function r(E,g){for(E=new Map;g!==null;)g.key!==null?E.set(g.key,g):E.set(g.index,g),g=g.sibling;return E}function i(E,g){return E=Ei(E,g),E.index=0,E.sibling=null,E}function s(E,g,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<g?(E.flags|=2,g):T):(E.flags|=2,g)):(E.flags|=1048576,g)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,g,T,O){return g===null||g.tag!==6?(g=Gf(T,E.mode,O),g.return=E,g):(g=i(g,T),g.return=E,g)}function l(E,g,T,O){var F=T.type;return F===ro?h(E,g,T.props.children,O,T.key):g!==null&&(g.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ti&&c0(F)===g.type)?(O=i(g,T.props),O.ref=ba(E,g,T),O.return=E,O):(O=Vc(T.type,T.key,T.props,null,E.mode,O),O.ref=ba(E,g,T),O.return=E,O)}function c(E,g,T,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==T.containerInfo||g.stateNode.implementation!==T.implementation?(g=Kf(T,E.mode,O),g.return=E,g):(g=i(g,T.children||[]),g.return=E,g)}function h(E,g,T,O,F){return g===null||g.tag!==7?(g=us(T,E.mode,O,F),g.return=E,g):(g=i(g,T),g.return=E,g)}function f(E,g,T){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Gf(""+g,E.mode,T),g.return=E,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ju:return T=Vc(g.type,g.key,g.props,null,E.mode,T),T.ref=ba(E,null,g),T.return=E,T;case no:return g=Kf(g,E.mode,T),g.return=E,g;case ti:var O=g._init;return f(E,O(g._payload),T)}if(Ha(g)||Ca(g))return g=us(g,E.mode,T,null),g.return=E,g;uc(E,g)}return null}function m(E,g,T,O){var F=g!==null?g.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return F!==null?null:a(E,g,""+T,O);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ju:return T.key===F?l(E,g,T,O):null;case no:return T.key===F?c(E,g,T,O):null;case ti:return F=T._init,m(E,g,F(T._payload),O)}if(Ha(T)||Ca(T))return F!==null?null:h(E,g,T,O,null);uc(E,T)}return null}function y(E,g,T,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(T)||null,a(g,E,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ju:return E=E.get(O.key===null?T:O.key)||null,l(g,E,O,F);case no:return E=E.get(O.key===null?T:O.key)||null,c(g,E,O,F);case ti:var $=O._init;return y(E,g,T,$(O._payload),F)}if(Ha(O)||Ca(O))return E=E.get(T)||null,h(g,E,O,F,null);uc(g,O)}return null}function w(E,g,T,O){for(var F=null,$=null,S=g,v=g=0,I=null;S!==null&&v<T.length;v++){S.index>v?(I=S,S=null):I=S.sibling;var A=m(E,S,T[v],O);if(A===null){S===null&&(S=I);break}t&&S&&A.alternate===null&&e(E,S),g=s(A,g,v),$===null?F=A:$.sibling=A,$=A,S=I}if(v===T.length)return n(E,S),Je&&Xi(E,v),F;if(S===null){for(;v<T.length;v++)S=f(E,T[v],O),S!==null&&(g=s(S,g,v),$===null?F=S:$.sibling=S,$=S);return Je&&Xi(E,v),F}for(S=r(E,S);v<T.length;v++)I=y(S,E,v,T[v],O),I!==null&&(t&&I.alternate!==null&&S.delete(I.key===null?v:I.key),g=s(I,g,v),$===null?F=I:$.sibling=I,$=I);return t&&S.forEach(function(k){return e(E,k)}),Je&&Xi(E,v),F}function C(E,g,T,O){var F=Ca(T);if(typeof F!="function")throw Error(H(150));if(T=F.call(T),T==null)throw Error(H(151));for(var $=F=null,S=g,v=g=0,I=null,A=T.next();S!==null&&!A.done;v++,A=T.next()){S.index>v?(I=S,S=null):I=S.sibling;var k=m(E,S,A.value,O);if(k===null){S===null&&(S=I);break}t&&S&&k.alternate===null&&e(E,S),g=s(k,g,v),$===null?F=k:$.sibling=k,$=k,S=I}if(A.done)return n(E,S),Je&&Xi(E,v),F;if(S===null){for(;!A.done;v++,A=T.next())A=f(E,A.value,O),A!==null&&(g=s(A,g,v),$===null?F=A:$.sibling=A,$=A);return Je&&Xi(E,v),F}for(S=r(E,S);!A.done;v++,A=T.next())A=y(S,E,v,A.value,O),A!==null&&(t&&A.alternate!==null&&S.delete(A.key===null?v:A.key),g=s(A,g,v),$===null?F=A:$.sibling=A,$=A);return t&&S.forEach(function(x){return e(E,x)}),Je&&Xi(E,v),F}function P(E,g,T,O){if(typeof T=="object"&&T!==null&&T.type===ro&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ju:e:{for(var F=T.key,$=g;$!==null;){if($.key===F){if(F=T.type,F===ro){if($.tag===7){n(E,$.sibling),g=i($,T.props.children),g.return=E,E=g;break e}}else if($.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ti&&c0(F)===$.type){n(E,$.sibling),g=i($,T.props),g.ref=ba(E,$,T),g.return=E,E=g;break e}n(E,$);break}else e(E,$);$=$.sibling}T.type===ro?(g=us(T.props.children,E.mode,O,T.key),g.return=E,E=g):(O=Vc(T.type,T.key,T.props,null,E.mode,O),O.ref=ba(E,g,T),O.return=E,E=O)}return o(E);case no:e:{for($=T.key;g!==null;){if(g.key===$)if(g.tag===4&&g.stateNode.containerInfo===T.containerInfo&&g.stateNode.implementation===T.implementation){n(E,g.sibling),g=i(g,T.children||[]),g.return=E,E=g;break e}else{n(E,g);break}else e(E,g);g=g.sibling}g=Kf(T,E.mode,O),g.return=E,E=g}return o(E);case ti:return $=T._init,P(E,g,$(T._payload),O)}if(Ha(T))return w(E,g,T,O);if(Ca(T))return C(E,g,T,O);uc(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,g!==null&&g.tag===6?(n(E,g.sibling),g=i(g,T),g.return=E,E=g):(n(E,g),g=Gf(T,E.mode,O),g.return=E,E=g),o(E)):n(E,g)}return P}var Lo=CS(!0),AS=CS(!1),oh=Mi(null),ah=null,ho=null,Vg=null;function Fg(){Vg=ho=ah=null}function Ug(t){var e=oh.current;Qe(oh),t._currentValue=e}function tm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function To(t,e){ah=t,Vg=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(Vg!==t)if(t={context:t,memoizedValue:e,next:null},ho===null){if(ah===null)throw Error(H(308));ho=t,ah.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return e}var rs=null;function $g(t){rs===null?rs=[t]:rs.push(t)}function kS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$g(e)):(n.next=i.next,i.next=n),e.interleaved=n,Br(t,r)}function Br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ni=!1;function Bg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function PS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Br(t,n)}return i=r.interleaved,i===null?(e.next=e,$g(r)):(e.next=i.next,i.next=e),r.interleaved=e,Br(t,n)}function bc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cg(t,n)}}function h0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lh(t,e,n,r){var i=t.updateQueue;ni=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,C=a;switch(m=e,y=n,C.tag){case 1:if(w=C.payload,typeof w=="function"){f=w.call(y,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=C.payload,m=typeof w=="function"?w.call(y,f,m):w,m==null)break e;f=nt({},f,m);break e;case 2:ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,l=f):h=h.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ps|=o,t.lanes=o,t.memoizedState=f}}function d0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var su={},pr=Mi(su),Dl=Mi(su),Ll=Mi(su);function is(t){if(t===su)throw Error(H(174));return t}function jg(t,e){switch(Be(Ll,e),Be(Dl,t),Be(pr,su),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Op(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Op(e,t)}Qe(pr),Be(pr,e)}function Oo(){Qe(pr),Qe(Dl),Qe(Ll)}function NS(t){is(Ll.current);var e=is(pr.current),n=Op(e,t.type);e!==n&&(Be(Dl,t),Be(pr,n))}function zg(t){Dl.current===t&&(Qe(pr),Qe(Dl))}var et=Mi(0);function uh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bf=[];function Wg(){for(var t=0;t<Bf.length;t++)Bf[t]._workInProgressVersionPrimary=null;Bf.length=0}var xc=qr.ReactCurrentDispatcher,jf=qr.ReactCurrentBatchConfig,fs=0,tt=null,gt=null,Rt=null,ch=!1,sl=!1,Ol=0,Eb=0;function Bt(){throw Error(H(321))}function Hg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nr(t[n],e[n]))return!1;return!0}function qg(t,e,n,r,i,s){if(fs=s,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xc.current=t===null||t.memoizedState===null?Rb:Cb,t=n(r,i),sl){s=0;do{if(sl=!1,Ol=0,25<=s)throw Error(H(301));s+=1,Rt=gt=null,e.updateQueue=null,xc.current=Ab,t=n(r,i)}while(sl)}if(xc.current=hh,e=gt!==null&&gt.next!==null,fs=0,Rt=gt=tt=null,ch=!1,e)throw Error(H(300));return t}function Gg(){var t=Ol!==0;return Ol=0,t}function lr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?tt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Un(){if(gt===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=Rt===null?tt.memoizedState:Rt.next;if(e!==null)Rt=e,gt=t;else{if(t===null)throw Error(H(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Rt===null?tt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Ml(t,e){return typeof e=="function"?e(t):e}function zf(t){var e=Un(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=gt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((fs&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,tt.lanes|=h,ps|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,nr(r,e.memoizedState)||(hn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,tt.lanes|=s,ps|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wf(t){var e=Un(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nr(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function bS(){}function xS(t,e){var n=tt,r=Un(),i=e(),s=!nr(r.memoizedState,i);if(s&&(r.memoizedState=i,hn=!0),r=r.queue,Kg(OS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Vl(9,LS.bind(null,n,r,i,e),void 0,null),kt===null)throw Error(H(349));fs&30||DS(n,e,i)}return i}function DS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function LS(t,e,n,r){e.value=n,e.getSnapshot=r,MS(e)&&VS(t)}function OS(t,e,n){return n(function(){MS(e)&&VS(t)})}function MS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nr(t,n)}catch{return!0}}function VS(t){var e=Br(t,1);e!==null&&er(e,t,1,-1)}function f0(t){var e=lr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ml,lastRenderedState:t},e.queue=t,t=t.dispatch=Ib.bind(null,tt,t),[e.memoizedState,t]}function Vl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function FS(){return Un().memoizedState}function Dc(t,e,n,r){var i=lr();tt.flags|=t,i.memoizedState=Vl(1|e,n,void 0,r===void 0?null:r)}function rd(t,e,n,r){var i=Un();r=r===void 0?null:r;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,r!==null&&Hg(r,o.deps)){i.memoizedState=Vl(e,n,s,r);return}}tt.flags|=t,i.memoizedState=Vl(1|e,n,s,r)}function p0(t,e){return Dc(8390656,8,t,e)}function Kg(t,e){return rd(2048,8,t,e)}function US(t,e){return rd(4,2,t,e)}function $S(t,e){return rd(4,4,t,e)}function BS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jS(t,e,n){return n=n!=null?n.concat([t]):null,rd(4,4,BS.bind(null,e,t),n)}function Qg(){}function zS(t,e){var n=Un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function WS(t,e){var n=Un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function HS(t,e,n){return fs&21?(nr(n,e)||(n=YT(),tt.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function Tb(t,e){var n=Le;Le=n!==0&&4>n?n:4,t(!0);var r=jf.transition;jf.transition={};try{t(!1),e()}finally{Le=n,jf.transition=r}}function qS(){return Un().memoizedState}function Sb(t,e,n){var r=wi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},GS(t))KS(e,n);else if(n=kS(t,e,n,r),n!==null){var i=sn();er(n,t,r,i),QS(n,e,r)}}function Ib(t,e,n){var r=wi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(GS(t))KS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,nr(a,o)){var l=e.interleaved;l===null?(i.next=i,$g(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=kS(t,e,i,r),n!==null&&(i=sn(),er(n,t,r,i),QS(n,e,r))}}function GS(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function KS(t,e){sl=ch=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function QS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cg(t,n)}}var hh={readContext:Fn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},Rb={readContext:Fn,useCallback:function(t,e){return lr().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:p0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dc(4194308,4,BS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dc(4,2,t,e)},useMemo:function(t,e){var n=lr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=lr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Sb.bind(null,tt,t),[r.memoizedState,t]},useRef:function(t){var e=lr();return t={current:t},e.memoizedState=t},useState:f0,useDebugValue:Qg,useDeferredValue:function(t){return lr().memoizedState=t},useTransition:function(){var t=f0(!1),e=t[0];return t=Tb.bind(null,t[1]),lr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=tt,i=lr();if(Je){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),kt===null)throw Error(H(349));fs&30||DS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,p0(OS.bind(null,r,s,t),[t]),r.flags|=2048,Vl(9,LS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=lr(),e=kt.identifierPrefix;if(Je){var n=br,r=Nr;n=(r&~(1<<32-Zn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ol++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Eb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Cb={readContext:Fn,useCallback:zS,useContext:Fn,useEffect:Kg,useImperativeHandle:jS,useInsertionEffect:US,useLayoutEffect:$S,useMemo:WS,useReducer:zf,useRef:FS,useState:function(){return zf(Ml)},useDebugValue:Qg,useDeferredValue:function(t){var e=Un();return HS(e,gt.memoizedState,t)},useTransition:function(){var t=zf(Ml)[0],e=Un().memoizedState;return[t,e]},useMutableSource:bS,useSyncExternalStore:xS,useId:qS,unstable_isNewReconciler:!1},Ab={readContext:Fn,useCallback:zS,useContext:Fn,useEffect:Kg,useImperativeHandle:jS,useInsertionEffect:US,useLayoutEffect:$S,useMemo:WS,useReducer:Wf,useRef:FS,useState:function(){return Wf(Ml)},useDebugValue:Qg,useDeferredValue:function(t){var e=Un();return gt===null?e.memoizedState=t:HS(e,gt.memoizedState,t)},useTransition:function(){var t=Wf(Ml)[0],e=Un().memoizedState;return[t,e]},useMutableSource:bS,useSyncExternalStore:xS,useId:qS,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var id={isMounted:function(t){return(t=t._reactInternals)?xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=sn(),i=wi(t),s=Mr(r,i);s.payload=e,n!=null&&(s.callback=n),e=yi(t,s,i),e!==null&&(er(e,t,i,r),bc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=sn(),i=wi(t),s=Mr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yi(t,s,i),e!==null&&(er(e,t,i,r),bc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),r=wi(t),i=Mr(n,r);i.tag=2,e!=null&&(i.callback=e),e=yi(t,i,r),e!==null&&(er(e,t,r,n),bc(e,t,r))}};function m0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pl(n,r)||!Pl(i,s):!0}function YS(t,e,n){var r=!1,i=Pi,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(i=gn(e)?hs:Yt.current,r=e.contextTypes,s=(r=r!=null)?xo(t,i):Pi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=id,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function g0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&id.enqueueReplaceState(e,e.state,null)}function rm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Bg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Fn(s):(s=gn(e)?hs:Yt.current,i.context=xo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&id.enqueueReplaceState(i,i.state,null),lh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Mo(t,e){try{var n="",r=e;do n+=tN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function im(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kb=typeof WeakMap=="function"?WeakMap:Map;function XS(t,e,n){n=Mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fh||(fh=!0,pm=r),im(t,e)},n}function JS(t,e,n){n=Mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){im(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){im(t,e),typeof r!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jb.bind(null,t,e,n),e.then(t,t))}function y0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function v0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mr(-1,1),e.tag=2,yi(n,e,1))),n.lanes|=1),t)}var Pb=qr.ReactCurrentOwner,hn=!1;function rn(t,e,n,r){e.child=t===null?AS(e,null,n,r):Lo(e,t.child,n,r)}function w0(t,e,n,r,i){n=n.render;var s=e.ref;return To(e,i),r=qg(t,e,n,r,s,i),n=Gg(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jr(t,e,i)):(Je&&n&&Lg(e),e.flags|=1,rn(t,e,r,i),e.child)}function E0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!r_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ZS(t,e,s,r,i)):(t=Vc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pl,n(o,r)&&t.ref===e.ref)return jr(t,e,i)}return e.flags|=1,t=Ei(s,r),t.ref=e.ref,t.return=e,e.child=t}function ZS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Pl(s,r)&&t.ref===e.ref)if(hn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,jr(t,e,i)}return sm(t,e,n,r,i)}function eI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(po,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Be(po,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Be(po,Sn),Sn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Be(po,Sn),Sn|=r;return rn(t,e,i,n),e.child}function tI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sm(t,e,n,r,i){var s=gn(n)?hs:Yt.current;return s=xo(e,s),To(e,i),n=qg(t,e,n,r,s,i),r=Gg(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jr(t,e,i)):(Je&&r&&Lg(e),e.flags|=1,rn(t,e,n,i),e.child)}function T0(t,e,n,r,i){if(gn(n)){var s=!0;rh(e)}else s=!1;if(To(e,i),e.stateNode===null)Lc(t,e),YS(e,n,r),rm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=gn(n)?hs:Yt.current,c=xo(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&g0(e,o,r,c),ni=!1;var m=e.memoizedState;o.state=m,lh(e,r,o,i),l=e.memoizedState,a!==r||m!==l||mn.current||ni?(typeof h=="function"&&(nm(e,n,h,r),l=e.memoizedState),(a=ni||m0(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,PS(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=gn(n)?hs:Yt.current,l=xo(e,l));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&g0(e,o,r,l),ni=!1,m=e.memoizedState,o.state=m,lh(e,r,o,i);var w=e.memoizedState;a!==f||m!==w||mn.current||ni?(typeof y=="function"&&(nm(e,n,y,r),w=e.memoizedState),(c=ni||m0(e,n,c,r,m,w,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return om(t,e,n,r,s,i)}function om(t,e,n,r,i,s){tI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&a0(e,n,!1),jr(t,e,s);r=e.stateNode,Pb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Lo(e,t.child,null,s),e.child=Lo(e,null,a,s)):rn(t,e,a,s),e.memoizedState=r.state,i&&a0(e,n,!0),e.child}function nI(t){var e=t.stateNode;e.pendingContext?o0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&o0(t,e.context,!1),jg(t,e.containerInfo)}function S0(t,e,n,r,i){return Do(),Mg(i),e.flags|=256,rn(t,e,n,r),e.child}var am={dehydrated:null,treeContext:null,retryLane:0};function lm(t){return{baseLanes:t,cachePool:null,transitions:null}}function rI(t,e,n){var r=e.pendingProps,i=et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Be(et,i&1),t===null)return em(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ad(o,r,0,null),t=us(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lm(n),e.memoizedState=am,t):Yg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Nb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ei(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ei(a,s):(s=us(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?lm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=am,r}return s=t.child,t=s.sibling,r=Ei(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yg(t,e){return e=ad({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cc(t,e,n,r){return r!==null&&Mg(r),Lo(e,t.child,null,n),t=Yg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hf(Error(H(422))),cc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ad({mode:"visible",children:r.children},i,0,null),s=us(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Lo(e,t.child,null,o),e.child.memoizedState=lm(o),e.memoizedState=am,s);if(!(e.mode&1))return cc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=Hf(s,r,void 0),cc(t,e,o,r)}if(a=(o&t.childLanes)!==0,hn||a){if(r=kt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Br(t,i),er(r,t,i,-1))}return n_(),r=Hf(Error(H(421))),cc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,In=_i(i.nextSibling),Cn=e,Je=!0,Yn=null,t!==null&&(xn[Dn++]=Nr,xn[Dn++]=br,xn[Dn++]=ds,Nr=t.id,br=t.overflow,ds=e),e=Yg(e,r.children),e.flags|=4096,e)}function I0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),tm(t.return,e,n)}function qf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function iI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rn(t,e,r.children,n),r=et.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&I0(t,n,e);else if(t.tag===19)I0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Be(et,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&uh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qf(e,!0,n,null,s);break;case"together":qf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=Ei(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ei(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bb(t,e,n){switch(e.tag){case 3:nI(e),Do();break;case 5:NS(e);break;case 1:gn(e.type)&&rh(e);break;case 4:jg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Be(oh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Be(et,et.current&1),e.flags|=128,null):n&e.child.childLanes?rI(t,e,n):(Be(et,et.current&1),t=jr(t,e,n),t!==null?t.sibling:null);Be(et,et.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Be(et,et.current),r)break;return null;case 22:case 23:return e.lanes=0,eI(t,e,n)}return jr(t,e,n)}var sI,um,oI,aI;sI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};um=function(){};oI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,is(pr.current);var s=null;switch(n){case"input":i=bp(t,i),r=bp(t,r),s=[];break;case"select":i=nt({},i,{value:void 0}),r=nt({},r,{value:void 0}),s=[];break;case"textarea":i=Lp(t,i),r=Lp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=th)}Mp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Tl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Tl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&He("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};aI=function(t,e,n,r){n!==r&&(e.flags|=4)};function xa(t,e){if(!Je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xb(t,e,n){var r=e.pendingProps;switch(Og(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return gn(e.type)&&nh(),jt(e),null;case 3:return r=e.stateNode,Oo(),Qe(mn),Qe(Yt),Wg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(_m(Yn),Yn=null))),um(t,e),jt(e),null;case 5:zg(e);var i=is(Ll.current);if(n=e.type,t!==null&&e.stateNode!=null)oI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return jt(e),null}if(t=is(pr.current),lc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ur]=e,r[xl]=s,t=(e.mode&1)!==0,n){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(i=0;i<Ga.length;i++)He(Ga[i],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":Dv(r,s),He("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},He("invalid",r);break;case"textarea":Ov(r,s),He("invalid",r)}Mp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ac(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ac(r.textContent,a,t),i=["children",""+a]):Tl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&He("scroll",r)}switch(n){case"input":Zu(r),Lv(r,s,!0);break;case"textarea":Zu(r),Mv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=th)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=OT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ur]=e,t[xl]=r,sI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vp(n,r),n){case"dialog":He("cancel",t),He("close",t),i=r;break;case"iframe":case"object":case"embed":He("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ga.length;i++)He(Ga[i],t);i=r;break;case"source":He("error",t),i=r;break;case"img":case"image":case"link":He("error",t),He("load",t),i=r;break;case"details":He("toggle",t),i=r;break;case"input":Dv(t,r),i=bp(t,r),He("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=nt({},r,{value:void 0}),He("invalid",t);break;case"textarea":Ov(t,r),i=Lp(t,r),He("invalid",t);break;default:i=r}Mp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?FT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&MT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sl(t,l):typeof l=="number"&&Sl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Tl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&He("scroll",t):l!=null&&wg(t,s,l,o))}switch(n){case"input":Zu(t),Lv(t,r,!1);break;case"textarea":Zu(t),Mv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ki(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yo(t,!!r.multiple,s,!1):r.defaultValue!=null&&yo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=th)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)aI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=is(Ll.current),is(pr.current),lc(e)){if(r=e.stateNode,n=e.memoizedProps,r[ur]=e,(s=r.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:ac(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ac(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ur]=e,e.stateNode=r}return jt(e),null;case 13:if(Qe(et),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Je&&In!==null&&e.mode&1&&!(e.flags&128))RS(),Do(),e.flags|=98560,s=!1;else if(s=lc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[ur]=e}else Do(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Yn!==null&&(_m(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||et.current&1?yt===0&&(yt=3):n_())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Oo(),um(t,e),t===null&&Nl(e.stateNode.containerInfo),jt(e),null;case 10:return Ug(e.type._context),jt(e),null;case 17:return gn(e.type)&&nh(),jt(e),null;case 19:if(Qe(et),s=e.memoizedState,s===null)return jt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xa(s,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uh(t),o!==null){for(e.flags|=128,xa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Be(et,et.current&1|2),e.child}t=t.sibling}s.tail!==null&&lt()>Vo&&(e.flags|=128,r=!0,xa(s,!1),e.lanes=4194304)}else{if(!r)if(t=uh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Je)return jt(e),null}else 2*lt()-s.renderingStartTime>Vo&&n!==1073741824&&(e.flags|=128,r=!0,xa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=lt(),e.sibling=null,n=et.current,Be(et,r?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return t_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Sn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function Db(t,e){switch(Og(e),e.tag){case 1:return gn(e.type)&&nh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oo(),Qe(mn),Qe(Yt),Wg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zg(e),null;case 13:if(Qe(et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));Do()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qe(et),null;case 4:return Oo(),null;case 10:return Ug(e.type._context),null;case 22:case 23:return t_(),null;case 24:return null;default:return null}}var hc=!1,Ht=!1,Lb=typeof WeakSet=="function"?WeakSet:Set,te=null;function fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){st(t,e,r)}else n.current=null}function cm(t,e,n){try{n()}catch(r){st(t,e,r)}}var R0=!1;function Ob(t,e){if(Gp=Jc,t=dS(),Dg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(l=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kp={focusedElem:t,selectionRange:n},Jc=!1,te=e;te!==null;)if(e=te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,te=t;else for(;te!==null;){e=te;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var C=w.memoizedProps,P=w.memoizedState,E=e.stateNode,g=E.getSnapshotBeforeUpdate(e.elementType===e.type?C:Kn(e.type,C),P);E.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(O){st(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}return w=R0,R0=!1,w}function ol(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&cm(e,n,s)}i=i.next}while(i!==r)}}function sd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function hm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lI(t){var e=t.alternate;e!==null&&(t.alternate=null,lI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ur],delete e[xl],delete e[Xp],delete e[_b],delete e[yb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uI(t){return t.tag===5||t.tag===3||t.tag===4}function C0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=th));else if(r!==4&&(t=t.child,t!==null))for(dm(t,e,n),t=t.sibling;t!==null;)dm(t,e,n),t=t.sibling}function fm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fm(t,e,n),t=t.sibling;t!==null;)fm(t,e,n),t=t.sibling}var xt=null,Qn=!1;function Zr(t,e,n){for(n=n.child;n!==null;)cI(t,e,n),n=n.sibling}function cI(t,e,n){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(Xh,n)}catch{}switch(n.tag){case 5:Ht||fo(n,e);case 6:var r=xt,i=Qn;xt=null,Zr(t,e,n),xt=r,Qn=i,xt!==null&&(Qn?(t=xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(Qn?(t=xt,n=n.stateNode,t.nodeType===8?Uf(t.parentNode,n):t.nodeType===1&&Uf(t,n),Al(t)):Uf(xt,n.stateNode));break;case 4:r=xt,i=Qn,xt=n.stateNode.containerInfo,Qn=!0,Zr(t,e,n),xt=r,Qn=i;break;case 0:case 11:case 14:case 15:if(!Ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cm(n,e,o),i=i.next}while(i!==r)}Zr(t,e,n);break;case 1:if(!Ht&&(fo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){st(n,e,a)}Zr(t,e,n);break;case 21:Zr(t,e,n);break;case 22:n.mode&1?(Ht=(r=Ht)||n.memoizedState!==null,Zr(t,e,n),Ht=r):Zr(t,e,n);break;default:Zr(t,e,n)}}function A0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Lb),e.forEach(function(r){var i=Wb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xt=a.stateNode,Qn=!1;break e;case 3:xt=a.stateNode.containerInfo,Qn=!0;break e;case 4:xt=a.stateNode.containerInfo,Qn=!0;break e}a=a.return}if(xt===null)throw Error(H(160));cI(s,o,i),xt=null,Qn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){st(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hI(e,t),e=e.sibling}function hI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),ar(t),r&4){try{ol(3,t,t.return),sd(3,t)}catch(C){st(t,t.return,C)}try{ol(5,t,t.return)}catch(C){st(t,t.return,C)}}break;case 1:qn(e,t),ar(t),r&512&&n!==null&&fo(n,n.return);break;case 5:if(qn(e,t),ar(t),r&512&&n!==null&&fo(n,n.return),t.flags&32){var i=t.stateNode;try{Sl(i,"")}catch(C){st(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&DT(i,s),Vp(a,o);var c=Vp(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?FT(i,f):h==="dangerouslySetInnerHTML"?MT(i,f):h==="children"?Sl(i,f):wg(i,h,f,c)}switch(a){case"input":xp(i,s);break;case"textarea":LT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?yo(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?yo(i,!!s.multiple,s.defaultValue,!0):yo(i,!!s.multiple,s.multiple?[]:"",!1))}i[xl]=s}catch(C){st(t,t.return,C)}}break;case 6:if(qn(e,t),ar(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){st(t,t.return,C)}}break;case 3:if(qn(e,t),ar(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Al(e.containerInfo)}catch(C){st(t,t.return,C)}break;case 4:qn(e,t),ar(t);break;case 13:qn(e,t),ar(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zg=lt())),r&4&&A0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||h,qn(e,t),Ht=c):qn(e,t),ar(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(te=t,h=t.child;h!==null;){for(f=te=h;te!==null;){switch(m=te,y=m.child,m.tag){case 0:case 11:case 14:case 15:ol(4,m,m.return);break;case 1:fo(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(C){st(r,n,C)}}break;case 5:fo(m,m.return);break;case 22:if(m.memoizedState!==null){P0(f);continue}}y!==null?(y.return=m,te=y):P0(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=VT("display",o))}catch(C){st(t,t.return,C)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){st(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:qn(e,t),ar(t),r&4&&A0(t);break;case 21:break;default:qn(e,t),ar(t)}}function ar(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uI(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sl(i,""),r.flags&=-33);var s=C0(t);fm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=C0(t);dm(t,a,o);break;default:throw Error(H(161))}}catch(l){st(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Mb(t,e,n){te=t,dI(t)}function dI(t,e,n){for(var r=(t.mode&1)!==0;te!==null;){var i=te,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=hc;var c=Ht;if(hc=o,(Ht=l)&&!c)for(te=i;te!==null;)o=te,l=o.child,o.tag===22&&o.memoizedState!==null?N0(i):l!==null?(l.return=o,te=l):N0(i);for(;s!==null;)te=s,dI(s),s=s.sibling;te=i,hc=a,Ht=c}k0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,te=s):k0(t)}}function k0(t){for(;te!==null;){var e=te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||sd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&d0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}d0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Al(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Ht||e.flags&512&&hm(e)}catch(m){st(e,e.return,m)}}if(e===t){te=null;break}if(n=e.sibling,n!==null){n.return=e.return,te=n;break}te=e.return}}function P0(t){for(;te!==null;){var e=te;if(e===t){te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,te=n;break}te=e.return}}function N0(t){for(;te!==null;){var e=te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sd(4,e)}catch(l){st(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){st(e,i,l)}}var s=e.return;try{hm(e)}catch(l){st(e,s,l)}break;case 5:var o=e.return;try{hm(e)}catch(l){st(e,o,l)}}}catch(l){st(e,e.return,l)}if(e===t){te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,te=a;break}te=e.return}}var Vb=Math.ceil,dh=qr.ReactCurrentDispatcher,Xg=qr.ReactCurrentOwner,Mn=qr.ReactCurrentBatchConfig,ke=0,kt=null,ht=null,Ot=0,Sn=0,po=Mi(0),yt=0,Fl=null,ps=0,od=0,Jg=0,al=null,un=null,Zg=0,Vo=1/0,kr=null,fh=!1,pm=null,vi=null,dc=!1,hi=null,ph=0,ll=0,mm=null,Oc=-1,Mc=0;function sn(){return ke&6?lt():Oc!==-1?Oc:Oc=lt()}function wi(t){return t.mode&1?ke&2&&Ot!==0?Ot&-Ot:wb.transition!==null?(Mc===0&&(Mc=YT()),Mc):(t=Le,t!==0||(t=window.event,t=t===void 0?16:rS(t.type)),t):1}function er(t,e,n,r){if(50<ll)throw ll=0,mm=null,Error(H(185));nu(t,n,r),(!(ke&2)||t!==kt)&&(t===kt&&(!(ke&2)&&(od|=n),yt===4&&si(t,Ot)),_n(t,r),n===1&&ke===0&&!(e.mode&1)&&(Vo=lt()+500,nd&&Vi()))}function _n(t,e){var n=t.callbackNode;wN(t,e);var r=Xc(t,t===kt?Ot:0);if(r===0)n!==null&&Uv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Uv(n),e===1)t.tag===0?vb(b0.bind(null,t)):TS(b0.bind(null,t)),mb(function(){!(ke&6)&&Vi()}),n=null;else{switch(XT(r)){case 1:n=Rg;break;case 4:n=KT;break;case 16:n=Yc;break;case 536870912:n=QT;break;default:n=Yc}n=wI(n,fI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fI(t,e){if(Oc=-1,Mc=0,ke&6)throw Error(H(327));var n=t.callbackNode;if(So()&&t.callbackNode!==n)return null;var r=Xc(t,t===kt?Ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mh(t,r);else{e=r;var i=ke;ke|=2;var s=mI();(kt!==t||Ot!==e)&&(kr=null,Vo=lt()+500,ls(t,e));do try{$b();break}catch(a){pI(t,a)}while(!0);Fg(),dh.current=s,ke=i,ht!==null?e=0:(kt=null,Ot=0,e=yt)}if(e!==0){if(e===2&&(i=jp(t),i!==0&&(r=i,e=gm(t,i))),e===1)throw n=Fl,ls(t,0),si(t,r),_n(t,lt()),n;if(e===6)si(t,r);else{if(i=t.current.alternate,!(r&30)&&!Fb(i)&&(e=mh(t,r),e===2&&(s=jp(t),s!==0&&(r=s,e=gm(t,s))),e===1))throw n=Fl,ls(t,0),si(t,r),_n(t,lt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Ji(t,un,kr);break;case 3:if(si(t,r),(r&130023424)===r&&(e=Zg+500-lt(),10<e)){if(Xc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){sn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yp(Ji.bind(null,t,un,kr),e);break}Ji(t,un,kr);break;case 4:if(si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Zn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=lt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vb(r/1960))-r,10<r){t.timeoutHandle=Yp(Ji.bind(null,t,un,kr),r);break}Ji(t,un,kr);break;case 5:Ji(t,un,kr);break;default:throw Error(H(329))}}}return _n(t,lt()),t.callbackNode===n?fI.bind(null,t):null}function gm(t,e){var n=al;return t.current.memoizedState.isDehydrated&&(ls(t,e).flags|=256),t=mh(t,e),t!==2&&(e=un,un=n,e!==null&&_m(e)),t}function _m(t){un===null?un=t:un.push.apply(un,t)}function Fb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function si(t,e){for(e&=~Jg,e&=~od,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),r=1<<n;t[n]=-1,e&=~r}}function b0(t){if(ke&6)throw Error(H(327));So();var e=Xc(t,0);if(!(e&1))return _n(t,lt()),null;var n=mh(t,e);if(t.tag!==0&&n===2){var r=jp(t);r!==0&&(e=r,n=gm(t,r))}if(n===1)throw n=Fl,ls(t,0),si(t,e),_n(t,lt()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ji(t,un,kr),_n(t,lt()),null}function e_(t,e){var n=ke;ke|=1;try{return t(e)}finally{ke=n,ke===0&&(Vo=lt()+500,nd&&Vi())}}function ms(t){hi!==null&&hi.tag===0&&!(ke&6)&&So();var e=ke;ke|=1;var n=Mn.transition,r=Le;try{if(Mn.transition=null,Le=1,t)return t()}finally{Le=r,Mn.transition=n,ke=e,!(ke&6)&&Vi()}}function t_(){Sn=po.current,Qe(po)}function ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pb(n)),ht!==null)for(n=ht.return;n!==null;){var r=n;switch(Og(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nh();break;case 3:Oo(),Qe(mn),Qe(Yt),Wg();break;case 5:zg(r);break;case 4:Oo();break;case 13:Qe(et);break;case 19:Qe(et);break;case 10:Ug(r.type._context);break;case 22:case 23:t_()}n=n.return}if(kt=t,ht=t=Ei(t.current,null),Ot=Sn=e,yt=0,Fl=null,Jg=od=ps=0,un=al=null,rs!==null){for(e=0;e<rs.length;e++)if(n=rs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}rs=null}return t}function pI(t,e){do{var n=ht;try{if(Fg(),xc.current=hh,ch){for(var r=tt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ch=!1}if(fs=0,Rt=gt=tt=null,sl=!1,Ol=0,Xg.current=null,n===null||n.return===null){yt=1,Fl=e,ht=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=y0(o);if(y!==null){y.flags&=-257,v0(y,o,a,s,e),y.mode&1&&_0(s,c,e),e=y,l=c;var w=e.updateQueue;if(w===null){var C=new Set;C.add(l),e.updateQueue=C}else w.add(l);break e}else{if(!(e&1)){_0(s,c,e),n_();break e}l=Error(H(426))}}else if(Je&&a.mode&1){var P=y0(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),v0(P,o,a,s,e),Mg(Mo(l,a));break e}}s=l=Mo(l,a),yt!==4&&(yt=2),al===null?al=[s]:al.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=XS(s,l,e);h0(s,E);break e;case 1:a=l;var g=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(vi===null||!vi.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=JS(s,a,e);h0(s,O);break e}}s=s.return}while(s!==null)}_I(n)}catch(F){e=F,ht===n&&n!==null&&(ht=n=n.return);continue}break}while(!0)}function mI(){var t=dh.current;return dh.current=hh,t===null?hh:t}function n_(){(yt===0||yt===3||yt===2)&&(yt=4),kt===null||!(ps&268435455)&&!(od&268435455)||si(kt,Ot)}function mh(t,e){var n=ke;ke|=2;var r=mI();(kt!==t||Ot!==e)&&(kr=null,ls(t,e));do try{Ub();break}catch(i){pI(t,i)}while(!0);if(Fg(),ke=n,dh.current=r,ht!==null)throw Error(H(261));return kt=null,Ot=0,yt}function Ub(){for(;ht!==null;)gI(ht)}function $b(){for(;ht!==null&&!hN();)gI(ht)}function gI(t){var e=vI(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?_I(t):ht=e,Xg.current=null}function _I(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Db(n,e),n!==null){n.flags&=32767,ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,ht=null;return}}else if(n=xb(n,e,Sn),n!==null){ht=n;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);yt===0&&(yt=5)}function Ji(t,e,n){var r=Le,i=Mn.transition;try{Mn.transition=null,Le=1,Bb(t,e,n,r)}finally{Mn.transition=i,Le=r}return null}function Bb(t,e,n,r){do So();while(hi!==null);if(ke&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(EN(t,s),t===kt&&(ht=kt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dc||(dc=!0,wI(Yc,function(){return So(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var o=Le;Le=1;var a=ke;ke|=4,Xg.current=null,Ob(t,n),hI(n,t),ab(Kp),Jc=!!Gp,Kp=Gp=null,t.current=n,Mb(n),dN(),ke=a,Le=o,Mn.transition=s}else t.current=n;if(dc&&(dc=!1,hi=t,ph=i),s=t.pendingLanes,s===0&&(vi=null),mN(n.stateNode),_n(t,lt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fh)throw fh=!1,t=pm,pm=null,t;return ph&1&&t.tag!==0&&So(),s=t.pendingLanes,s&1?t===mm?ll++:(ll=0,mm=t):ll=0,Vi(),null}function So(){if(hi!==null){var t=XT(ph),e=Mn.transition,n=Le;try{if(Mn.transition=null,Le=16>t?16:t,hi===null)var r=!1;else{if(t=hi,hi=null,ph=0,ke&6)throw Error(H(331));var i=ke;for(ke|=4,te=t.current;te!==null;){var s=te,o=s.child;if(te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(te=c;te!==null;){var h=te;switch(h.tag){case 0:case 11:case 15:ol(8,h,s)}var f=h.child;if(f!==null)f.return=h,te=f;else for(;te!==null;){h=te;var m=h.sibling,y=h.return;if(lI(h),h===c){te=null;break}if(m!==null){m.return=y,te=m;break}te=y}}}var w=s.alternate;if(w!==null){var C=w.child;if(C!==null){w.child=null;do{var P=C.sibling;C.sibling=null,C=P}while(C!==null)}}te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,te=o;else e:for(;te!==null;){if(s=te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ol(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,te=E;break e}te=s.return}}var g=t.current;for(te=g;te!==null;){o=te;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,te=T;else e:for(o=g;te!==null;){if(a=te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sd(9,a)}}catch(F){st(a,a.return,F)}if(a===o){te=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,te=O;break e}te=a.return}}if(ke=i,Vi(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(Xh,t)}catch{}r=!0}return r}finally{Le=n,Mn.transition=e}}return!1}function x0(t,e,n){e=Mo(n,e),e=XS(t,e,1),t=yi(t,e,1),e=sn(),t!==null&&(nu(t,1,e),_n(t,e))}function st(t,e,n){if(t.tag===3)x0(t,t,n);else for(;e!==null;){if(e.tag===3){x0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vi===null||!vi.has(r))){t=Mo(n,t),t=JS(e,t,1),e=yi(e,t,1),t=sn(),e!==null&&(nu(e,1,t),_n(e,t));break}}e=e.return}}function jb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Ot&n)===n&&(yt===4||yt===3&&(Ot&130023424)===Ot&&500>lt()-Zg?ls(t,0):Jg|=n),_n(t,e)}function yI(t,e){e===0&&(t.mode&1?(e=nc,nc<<=1,!(nc&130023424)&&(nc=4194304)):e=1);var n=sn();t=Br(t,e),t!==null&&(nu(t,e,n),_n(t,n))}function zb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yI(t,n)}function Wb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),yI(t,n)}var vI;vI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,bb(t,e,n);hn=!!(t.flags&131072)}else hn=!1,Je&&e.flags&1048576&&SS(e,sh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lc(t,e),t=e.pendingProps;var i=xo(e,Yt.current);To(e,n),i=qg(null,e,r,t,i,n);var s=Gg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(r)?(s=!0,rh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bg(e),i.updater=id,e.stateNode=i,i._reactInternals=e,rm(e,r,t,n),e=om(null,e,r,!0,s,n)):(e.tag=0,Je&&s&&Lg(e),rn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qb(r),t=Kn(r,t),i){case 0:e=sm(null,e,r,t,n);break e;case 1:e=T0(null,e,r,t,n);break e;case 11:e=w0(null,e,r,t,n);break e;case 14:e=E0(null,e,r,Kn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),sm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),T0(t,e,r,i,n);case 3:e:{if(nI(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,PS(t,e),lh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Mo(Error(H(423)),e),e=S0(t,e,r,n,i);break e}else if(r!==i){i=Mo(Error(H(424)),e),e=S0(t,e,r,n,i);break e}else for(In=_i(e.stateNode.containerInfo.firstChild),Cn=e,Je=!0,Yn=null,n=AS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Do(),r===i){e=jr(t,e,n);break e}rn(t,e,r,n)}e=e.child}return e;case 5:return NS(e),t===null&&em(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qp(r,i)?o=null:s!==null&&Qp(r,s)&&(e.flags|=32),tI(t,e),rn(t,e,o,n),e.child;case 6:return t===null&&em(e),null;case 13:return rI(t,e,n);case 4:return jg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Lo(e,null,r,n):rn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),w0(t,e,r,i,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Be(oh,r._currentValue),r._currentValue=o,s!==null)if(nr(s.value,o)){if(s.children===i.children&&!mn.current){e=jr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Mr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),tm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),tm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,To(e,n),i=Fn(i),r=r(i),e.flags|=1,rn(t,e,r,n),e.child;case 14:return r=e.type,i=Kn(r,e.pendingProps),i=Kn(r.type,i),E0(t,e,r,i,n);case 15:return ZS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Lc(t,e),e.tag=1,gn(r)?(t=!0,rh(e)):t=!1,To(e,n),YS(e,r,i),rm(e,r,i,n),om(null,e,r,!0,t,n);case 19:return iI(t,e,n);case 22:return eI(t,e,n)}throw Error(H(156,e.tag))};function wI(t,e){return GT(t,e)}function Hb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,r){return new Hb(t,e,n,r)}function r_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qb(t){if(typeof t=="function")return r_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tg)return 11;if(t===Sg)return 14}return 2}function Ei(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")r_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ro:return us(n.children,i,s,e);case Eg:o=8,i|=8;break;case Ap:return t=Ln(12,n,e,i|2),t.elementType=Ap,t.lanes=s,t;case kp:return t=Ln(13,n,e,i),t.elementType=kp,t.lanes=s,t;case Pp:return t=Ln(19,n,e,i),t.elementType=Pp,t.lanes=s,t;case NT:return ad(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kT:o=10;break e;case PT:o=9;break e;case Tg:o=11;break e;case Sg:o=14;break e;case ti:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function us(t,e,n,r){return t=Ln(7,t,r,e),t.lanes=n,t}function ad(t,e,n,r){return t=Ln(22,t,r,e),t.elementType=NT,t.lanes=n,t.stateNode={isHidden:!1},t}function Gf(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Kf(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kf(0),this.expirationTimes=kf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function i_(t,e,n,r,i,s,o,a,l){return t=new Gb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bg(s),t}function Kb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:no,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function EI(t){if(!t)return Pi;t=t._reactInternals;e:{if(xs(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(gn(n))return ES(t,n,e)}return e}function TI(t,e,n,r,i,s,o,a,l){return t=i_(n,r,!0,t,i,s,o,a,l),t.context=EI(null),n=t.current,r=sn(),i=wi(n),s=Mr(r,i),s.callback=e??null,yi(n,s,i),t.current.lanes=i,nu(t,i,r),_n(t,r),t}function ld(t,e,n,r){var i=e.current,s=sn(),o=wi(i);return n=EI(n),e.context===null?e.context=n:e.pendingContext=n,e=Mr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yi(i,e,o),t!==null&&(er(t,i,o,s),bc(t,i,o)),o}function gh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function D0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function s_(t,e){D0(t,e),(t=t.alternate)&&D0(t,e)}function Qb(){return null}var SI=typeof reportError=="function"?reportError:function(t){console.error(t)};function o_(t){this._internalRoot=t}ud.prototype.render=o_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));ld(t,e,null,null)};ud.prototype.unmount=o_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){ld(null,t,null,null)}),e[$r]=null}};function ud(t){this._internalRoot=t}ud.prototype.unstable_scheduleHydration=function(t){if(t){var e=eS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ii.length&&e!==0&&e<ii[n].priority;n++);ii.splice(n,0,t),n===0&&nS(t)}};function a_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function L0(){}function Yb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=gh(o);s.call(c)}}var o=TI(e,r,t,0,null,!1,!1,"",L0);return t._reactRootContainer=o,t[$r]=o.current,Nl(t.nodeType===8?t.parentNode:t),ms(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=gh(l);a.call(c)}}var l=i_(t,0,!1,null,null,!1,!1,"",L0);return t._reactRootContainer=l,t[$r]=l.current,Nl(t.nodeType===8?t.parentNode:t),ms(function(){ld(e,l,n,r)}),l}function hd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=gh(o);a.call(l)}}ld(e,o,t,i)}else o=Yb(n,e,t,i,r);return gh(o)}JT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qa(e.pendingLanes);n!==0&&(Cg(e,n|1),_n(e,lt()),!(ke&6)&&(Vo=lt()+500,Vi()))}break;case 13:ms(function(){var r=Br(t,1);if(r!==null){var i=sn();er(r,t,1,i)}}),s_(t,1)}};Ag=function(t){if(t.tag===13){var e=Br(t,134217728);if(e!==null){var n=sn();er(e,t,134217728,n)}s_(t,134217728)}};ZT=function(t){if(t.tag===13){var e=wi(t),n=Br(t,e);if(n!==null){var r=sn();er(n,t,e,r)}s_(t,e)}};eS=function(){return Le};tS=function(t,e){var n=Le;try{return Le=t,e()}finally{Le=n}};Up=function(t,e,n){switch(e){case"input":if(xp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=td(r);if(!i)throw Error(H(90));xT(r),xp(r,i)}}}break;case"textarea":LT(t,n);break;case"select":e=n.value,e!=null&&yo(t,!!n.multiple,e,!1)}};BT=e_;jT=ms;var Xb={usingClientEntryPoint:!1,Events:[iu,ao,td,UT,$T,e_]},Da={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jb={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=HT(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||Qb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{Xh=fc.inject(Jb),fr=fc}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xb;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a_(e))throw Error(H(200));return Kb(t,e,null,n)};Nn.createRoot=function(t,e){if(!a_(t))throw Error(H(299));var n=!1,r="",i=SI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=i_(t,1,!1,null,null,n,!1,r,i),t[$r]=e.current,Nl(t.nodeType===8?t.parentNode:t),new o_(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=HT(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return ms(t)};Nn.hydrate=function(t,e,n){if(!cd(e))throw Error(H(200));return hd(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!a_(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=SI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=TI(e,null,t,1,n??null,i,!1,s,o),t[$r]=e.current,Nl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ud(e)};Nn.render=function(t,e,n){if(!cd(e))throw Error(H(200));return hd(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!cd(t))throw Error(H(40));return t._reactRootContainer?(ms(function(){hd(null,null,t,!1,function(){t._reactRootContainer=null,t[$r]=null})}),!0):!1};Nn.unstable_batchedUpdates=e_;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cd(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return hd(t,e,n,!1,r)};Nn.version="18.3.1-next-f1338f8080-20240426";function II(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(II)}catch(t){console.error(t)}}II(),IT.exports=Nn;var RI=IT.exports;const Zb=dT(RI);var O0=RI;Rp.createRoot=O0.createRoot,Rp.hydrateRoot=O0.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ul.apply(this,arguments)}var di;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(di||(di={}));const M0="popstate";function ex(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ym("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_h(i)}return nx(e,n,null,t)}function dt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function CI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tx(){return Math.random().toString(36).substr(2,8)}function V0(t,e){return{usr:t.state,key:t.key,idx:e}}function ym(t,e,n,r){return n===void 0&&(n=null),Ul({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ra(e):e,{state:n,key:e&&e.key||r||tx()})}function _h(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ra(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function nx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=di.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Ul({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=di.Pop;let P=h(),E=P==null?null:P-c;c=P,l&&l({action:a,location:C.location,delta:E})}function m(P,E){a=di.Push;let g=ym(C.location,P,E);c=h()+1;let T=V0(g,c),O=C.createHref(g);try{o.pushState(T,"",O)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(O)}s&&l&&l({action:a,location:C.location,delta:1})}function y(P,E){a=di.Replace;let g=ym(C.location,P,E);c=h();let T=V0(g,c),O=C.createHref(g);o.replaceState(T,"",O),s&&l&&l({action:a,location:C.location,delta:0})}function w(P){let E=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof P=="string"?P:_h(P);return g=g.replace(/ $/,"%20"),dt(E,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,E)}let C={get action(){return a},get location(){return t(i,o)},listen(P){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(M0,f),l=P,()=>{i.removeEventListener(M0,f),l=null}},createHref(P){return e(i,P)},createURL:w,encodeLocation(P){let E=w(P);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:y,go(P){return o.go(P)}};return C}var F0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(F0||(F0={}));function rx(t,e,n){return n===void 0&&(n="/"),ix(t,e,n,!1)}function ix(t,e,n,r){let i=typeof e=="string"?ra(e):e,s=l_(i.pathname||"/",n);if(s==null)return null;let o=AI(t);sx(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=gx(s);a=px(o[l],c,r)}return a}function AI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(dt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Ti([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(dt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),AI(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:dx(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of kI(s.path))i(s,o,l)}),e}function kI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=kI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function sx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:fx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ox=/^:[\w-]+$/,ax=3,lx=2,ux=1,cx=10,hx=-2,U0=t=>t==="*";function dx(t,e){let n=t.split("/"),r=n.length;return n.some(U0)&&(r+=hx),e&&(r+=lx),n.filter(i=>!U0(i)).reduce((i,s)=>i+(ox.test(s)?ax:s===""?ux:cx),r)}function fx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function px(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=$0({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),m=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=$0({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ti([s,f.pathname]),pathnameBase:wx(Ti([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Ti([s,f.pathnameBase]))}return o}function $0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=mx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:y}=h;if(m==="*"){let C=a[f]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const w=a[f];return y&&!w?c[m]=void 0:c[m]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function mx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),CI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function gx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return CI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function l_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function _x(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ra(t):t;return{pathname:n?n.startsWith("/")?n:yx(n,e):e,search:Ex(r),hash:Tx(i)}}function yx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function PI(t,e){let n=vx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function NI(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ra(t):(i=Ul({},t),dt(!i.pathname||!i.pathname.includes("?"),Qf("?","pathname","search",i)),dt(!i.pathname||!i.pathname.includes("#"),Qf("#","pathname","hash",i)),dt(!i.search||!i.search.includes("#"),Qf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=_x(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Ti=t=>t.join("/").replace(/\/\/+/g,"/"),wx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ex=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Tx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Sx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bI=["post","put","patch","delete"];new Set(bI);const Ix=["get",...bI];new Set(Ix);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $l(){return $l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$l.apply(this,arguments)}const u_=U.createContext(null),Rx=U.createContext(null),Ds=U.createContext(null),dd=U.createContext(null),Fi=U.createContext({outlet:null,matches:[],isDataRoute:!1}),xI=U.createContext(null);function Cx(t,e){let{relative:n}=e===void 0?{}:e;ou()||dt(!1);let{basename:r,navigator:i}=U.useContext(Ds),{hash:s,pathname:o,search:a}=LI(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ti([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ou(){return U.useContext(dd)!=null}function fd(){return ou()||dt(!1),U.useContext(dd).location}function DI(t){U.useContext(Ds).static||U.useLayoutEffect(t)}function Ui(){let{isDataRoute:t}=U.useContext(Fi);return t?Bx():Ax()}function Ax(){ou()||dt(!1);let t=U.useContext(u_),{basename:e,future:n,navigator:r}=U.useContext(Ds),{matches:i}=U.useContext(Fi),{pathname:s}=fd(),o=JSON.stringify(PI(i,n.v7_relativeSplatPath)),a=U.useRef(!1);return DI(()=>{a.current=!0}),U.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=NI(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ti([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}const kx=U.createContext(null);function Px(t){let e=U.useContext(Fi).outlet;return e&&U.createElement(kx.Provider,{value:t},e)}function LI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(Ds),{matches:i}=U.useContext(Fi),{pathname:s}=fd(),o=JSON.stringify(PI(i,r.v7_relativeSplatPath));return U.useMemo(()=>NI(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Nx(t,e){return bx(t,e)}function bx(t,e,n,r){ou()||dt(!1);let{navigator:i}=U.useContext(Ds),{matches:s}=U.useContext(Fi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=fd(),h;if(e){var f;let P=typeof e=="string"?ra(e):e;l==="/"||(f=P.pathname)!=null&&f.startsWith(l)||dt(!1),h=P}else h=c;let m=h.pathname||"/",y=m;if(l!=="/"){let P=l.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let w=rx(t,{pathname:y}),C=Mx(w&&w.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:Ti([l,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?l:Ti([l,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&C?U.createElement(dd.Provider,{value:{location:$l({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:di.Pop}},C):C}function xx(){let t=$x(),e=Sx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const Dx=U.createElement(xx,null);class Lx extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Fi.Provider,{value:this.props.routeContext},U.createElement(xI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ox(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(u_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Fi.Provider,{value:e},r)}function Mx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||dt(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:y}=n,w=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||w){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let y,w=!1,C=null,P=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,C=f.route.errorElement||Dx,l&&(c<0&&m===0?(w=!0,P=null):c===m&&(w=!0,P=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),g=()=>{let T;return y?T=C:w?T=P:f.route.Component?T=U.createElement(f.route.Component,null):f.route.element?T=f.route.element:T=h,U.createElement(Ox,{match:f,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:T})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?U.createElement(Lx,{location:n.location,revalidation:n.revalidation,component:C,error:y,children:g(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):g()},null)}var OI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(OI||{}),yh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(yh||{});function Vx(t){let e=U.useContext(u_);return e||dt(!1),e}function Fx(t){let e=U.useContext(Rx);return e||dt(!1),e}function Ux(t){let e=U.useContext(Fi);return e||dt(!1),e}function MI(t){let e=Ux(),n=e.matches[e.matches.length-1];return n.route.id||dt(!1),n.route.id}function $x(){var t;let e=U.useContext(xI),n=Fx(yh.UseRouteError),r=MI(yh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Bx(){let{router:t}=Vx(OI.UseNavigateStable),e=MI(yh.UseNavigateStable),n=U.useRef(!1);return DI(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,$l({fromRouteId:e},s)))},[t,e])}function jx(t){return Px(t.context)}function Cr(t){dt(!1)}function zx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=di.Pop,navigator:s,static:o=!1,future:a}=t;ou()&&dt(!1);let l=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:l,navigator:s,static:o,future:$l({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ra(r));let{pathname:h="/",search:f="",hash:m="",state:y=null,key:w="default"}=r,C=U.useMemo(()=>{let P=l_(h,l);return P==null?null:{location:{pathname:P,search:f,hash:m,state:y,key:w},navigationType:i}},[l,h,f,m,y,w,i]);return C==null?null:U.createElement(Ds.Provider,{value:c},U.createElement(dd.Provider,{children:n,value:C}))}function Wx(t){let{children:e,location:n}=t;return Nx(vm(e),n)}new Promise(()=>{});function vm(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,vm(r.props.children,s));return}r.type!==Cr&&dt(!1),!r.props.index||!r.props.children||dt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=vm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wm(){return wm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wm.apply(this,arguments)}function Hx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function qx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Gx(t,e){return t.button===0&&(!e||e==="_self")&&!qx(t)}const Kx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Qx="6";try{window.__reactRouterVersion=Qx}catch{}const Yx="startTransition",B0=jP[Yx];function Xx(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=ex({window:i,v5Compat:!0}));let o=s.current,[a,l]=U.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=U.useCallback(f=>{c&&B0?B0(()=>l(f)):l(f)},[l,c]);return U.useLayoutEffect(()=>o.listen(h),[o,h]),U.createElement(zx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Jx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fo=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,unstable_viewTransition:f}=e,m=Hx(e,Kx),{basename:y}=U.useContext(Ds),w,C=!1;if(typeof c=="string"&&Zx.test(c)&&(w=c,Jx))try{let T=new URL(window.location.href),O=c.startsWith("//")?new URL(T.protocol+c):new URL(c),F=l_(O.pathname,y);O.origin===T.origin&&F!=null?c=F+O.search+O.hash:C=!0}catch{}let P=Cx(c,{relative:i}),E=eD(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,unstable_viewTransition:f});function g(T){r&&r(T),T.defaultPrevented||E(T)}return U.createElement("a",wm({},m,{href:w||P,onClick:C||s?r:g,ref:n,target:l}))});var j0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(j0||(j0={}));var z0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(z0||(z0={}));function eD(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ui(),c=fd(),h=LI(t,{relative:o});return U.useCallback(f=>{if(Gx(f,n)){f.preventDefault();let m=r!==void 0?r:_h(c)===_h(h);l(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}var W0={};/**
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
 */const VI={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const X=function(t,e){if(!t)throw ia(e)},ia=function(t){return new Error("Firebase Database ("+VI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const FI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},c_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(m=64)),r.push(n[h],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(FI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new nD;const m=s<<2|a>>4;if(r.push(m),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UI=function(t){const e=FI(t);return c_.encodeByteArray(e,!0)},vh=function(t){return UI(t).replace(/\./g,"")},wh=function(t){try{return c_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rD(t){return $I(void 0,t)}function $I(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!iD(n)||(t[n]=$I(t[n],e[n]));return t}function iD(t){return t!=="__proto__"}/**
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
 */function sD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oD=()=>sD().__FIREBASE_DEFAULTS__,aD=()=>{if(typeof process>"u"||typeof W0>"u")return;const t=W0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wh(t[1]);return e&&JSON.parse(e)},pd=()=>{try{return oD()||aD()||lD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},BI=t=>{var e,n;return(n=(e=pd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uD=t=>{const e=BI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jI=()=>{var t;return(t=pd())===null||t===void 0?void 0:t.config},zI=t=>{var e;return(e=pd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class h_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vh(JSON.stringify(n)),vh(JSON.stringify(o)),""].join(".")}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function d_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function hD(){var t;const e=(t=pd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dD(){const t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qI(){return VI.NODE_ADMIN===!0}function fD(){return!hD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function GI(){try{return typeof indexedDB=="object"}catch{return!1}}function KI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function pD(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const mD="FirebaseError";class or extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mD,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new or(i,a,r)}}function gD(t,e){return t.replace(_D,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _D=/\{\$([^}]+)}/g;/**
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
 */function Bl(t){return JSON.parse(t)}function Dt(t){return JSON.stringify(t)}/**
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
 */const QI=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Bl(wh(s[0])||""),n=Bl(wh(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},yD=function(t){const e=QI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vD=function(t){const e=QI(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Gr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Uo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Em(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Eh(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Th(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(H0(s)&&H0(o)){if(!Th(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function H0(t){return t!==null&&typeof t=="object"}/**
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
 */function sa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ka(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Qa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class wD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const m=(i<<5|i>>>27)+c+l+h+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ED(t,e){const n=new TD(t,e);return n.subscribe.bind(n)}class TD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yf),i.error===void 0&&(i.error=Yf),i.complete===void 0&&(i.complete=Yf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yf(){}function ID(t,e){return`${t} failed: ${e} argument `}/**
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
 */const RD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,X(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},md=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const CD=1e3,AD=2,kD=4*60*60*1e3,PD=.5;function q0(t,e=CD,n=AD){const r=e*Math.pow(n,t),i=Math.round(PD*r*(Math.random()-.5)*2);return Math.min(kD,r+i)}/**
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
 */function Xt(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zi="[DEFAULT]";/**
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
 */class ND{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new h_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xD(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bD(t){return t===Zi?void 0:t}function xD(t){return t.instantiationMode==="EAGER"}/**
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
 */class DD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ND(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const LD={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},OD=Te.INFO,MD={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},VD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class au{constructor(e){this.name=e,this._logLevel=OD,this._logHandler=VD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const FD=(t,e)=>e.some(n=>t instanceof n);let G0,K0;function UD(){return G0||(G0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $D(){return K0||(K0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const YI=new WeakMap,Tm=new WeakMap,XI=new WeakMap,Xf=new WeakMap,f_=new WeakMap;function BD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Si(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&YI.set(n,t)}).catch(()=>{}),f_.set(e,t),e}function jD(t){if(Tm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Tm.set(t,e)}let Sm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||XI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Si(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zD(t){Sm=t(Sm)}function WD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jf(this),e,...n);return XI.set(r,e.sort?e.sort():[e]),Si(r)}:$D().includes(t)?function(...e){return t.apply(Jf(this),e),Si(YI.get(this))}:function(...e){return Si(t.apply(Jf(this),e))}}function HD(t){return typeof t=="function"?WD(t):(t instanceof IDBTransaction&&jD(t),FD(t,UD())?new Proxy(t,Sm):t)}function Si(t){if(t instanceof IDBRequest)return BD(t);if(Xf.has(t))return Xf.get(t);const e=HD(t);return e!==t&&(Xf.set(t,e),f_.set(e,t)),e}const Jf=t=>f_.get(t);function JI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Si(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Si(o.result),l.oldVersion,l.newVersion,Si(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const qD=["get","getKey","getAll","getAllKeys","count"],GD=["put","add","delete","clear"],Zf=new Map;function Q0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zf.get(e))return Zf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Zf.set(e,s),s}zD(t=>({...t,get:(e,n,r)=>Q0(e,n)||t.get(e,n,r),has:(e,n)=>!!Q0(e,n)||t.has(e,n)}));/**
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
 */class KD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Im="@firebase/app",Y0="0.10.6";/**
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
 */const gs=new au("@firebase/app"),YD="@firebase/app-compat",XD="@firebase/analytics-compat",JD="@firebase/analytics",ZD="@firebase/app-check-compat",eL="@firebase/app-check",tL="@firebase/auth",nL="@firebase/auth-compat",rL="@firebase/database",iL="@firebase/database-compat",sL="@firebase/functions",oL="@firebase/functions-compat",aL="@firebase/installations",lL="@firebase/installations-compat",uL="@firebase/messaging",cL="@firebase/messaging-compat",hL="@firebase/performance",dL="@firebase/performance-compat",fL="@firebase/remote-config",pL="@firebase/remote-config-compat",mL="@firebase/storage",gL="@firebase/storage-compat",_L="@firebase/firestore",yL="@firebase/vertexai-preview",vL="@firebase/firestore-compat",wL="firebase",EL="10.12.3";/**
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
 */const Rm="[DEFAULT]",TL={[Im]:"fire-core",[YD]:"fire-core-compat",[JD]:"fire-analytics",[XD]:"fire-analytics-compat",[eL]:"fire-app-check",[ZD]:"fire-app-check-compat",[tL]:"fire-auth",[nL]:"fire-auth-compat",[rL]:"fire-rtdb",[iL]:"fire-rtdb-compat",[sL]:"fire-fn",[oL]:"fire-fn-compat",[aL]:"fire-iid",[lL]:"fire-iid-compat",[uL]:"fire-fcm",[cL]:"fire-fcm-compat",[hL]:"fire-perf",[dL]:"fire-perf-compat",[fL]:"fire-rc",[pL]:"fire-rc-compat",[mL]:"fire-gcs",[gL]:"fire-gcs-compat",[_L]:"fire-fst",[vL]:"fire-fst-compat",[yL]:"fire-vertex","fire-js":"fire-js",[wL]:"fire-js-all"};/**
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
 */const Sh=new Map,SL=new Map,Cm=new Map;function X0(t,e){try{t.container.addComponent(e)}catch(n){gs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rr(t){const e=t.name;if(Cm.has(e))return gs.debug(`There were multiple attempts to register component ${e}.`),!1;Cm.set(e,t);for(const n of Sh.values())X0(n,t);for(const n of SL.values())X0(n,t);return!0}function lu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cr(t){return t.settings!==void 0}/**
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
 */const IL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ii=new Ls("app","Firebase",IL);/**
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
 */class RL{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ii.create("app-deleted",{appName:this._name})}}/**
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
 */const Os=EL;function ZI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ii.create("bad-app-name",{appName:String(i)});if(n||(n=jI()),!n)throw Ii.create("no-options");const s=Sh.get(i);if(s){if(Th(n,s.options)&&Th(r,s.config))return s;throw Ii.create("duplicate-app",{appName:i})}const o=new DD(i);for(const l of Cm.values())o.addComponent(l);const a=new RL(n,r,o);return Sh.set(i,a),a}function eR(t=Rm){const e=Sh.get(t);if(!e&&t===Rm&&jI())return ZI();if(!e)throw Ii.create("no-app",{appName:t});return e}function yn(t,e,n){var r;let i=(r=TL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gs.warn(a.join(" "));return}rr(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const CL="firebase-heartbeat-database",AL=1,jl="firebase-heartbeat-store";let ep=null;function tR(){return ep||(ep=JI(CL,AL,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(jl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ii.create("idb-open",{originalErrorMessage:t.message})})),ep}async function kL(t){try{const n=(await tR()).transaction(jl),r=await n.objectStore(jl).get(nR(t));return await n.done,r}catch(e){if(e instanceof or)gs.warn(e.message);else{const n=Ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gs.warn(n.message)}}}async function J0(t,e){try{const r=(await tR()).transaction(jl,"readwrite");await r.objectStore(jl).put(e,nR(t)),await r.done}catch(n){if(n instanceof or)gs.warn(n.message);else{const r=Ii.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gs.warn(r.message)}}}function nR(t){return`${t.name}!${t.options.appId}`}/**
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
 */const PL=1024,NL=30*24*60*60*1e3;class bL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Z0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=NL}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Z0(),{heartbeatsToSend:r,unsentEntries:i}=xL(this._heartbeatsCache.heartbeats),s=vh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Z0(){return new Date().toISOString().substring(0,10)}function xL(t,e=PL){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ew(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ew(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GI()?KI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return J0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return J0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ew(t){return vh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function LL(t){rr(new $n("platform-logger",e=>new KD(e),"PRIVATE")),rr(new $n("heartbeat",e=>new bL(e),"PRIVATE")),yn(Im,Y0,t),yn(Im,Y0,"esm2017"),yn("fire-js","")}LL("");var OL="firebase",ML="10.12.3";/**
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
 */yn(OL,ML,"app");const rR="@firebase/installations",p_="0.6.8";/**
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
 */const iR=1e4,sR=`w:${p_}`,oR="FIS_v2",VL="https://firebaseinstallations.googleapis.com/v1",FL=60*60*1e3,UL="installations",$L="Installations";/**
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
 */const BL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_s=new Ls(UL,$L,BL);function aR(t){return t instanceof or&&t.code.includes("request-failed")}/**
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
 */function lR({projectId:t}){return`${VL}/projects/${t}/installations`}function uR(t){return{token:t.token,requestStatus:2,expiresIn:zL(t.expiresIn),creationTime:Date.now()}}async function cR(t,e){const r=(await e.json()).error;return _s.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function hR({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function jL(t,{refreshToken:e}){const n=hR(t);return n.append("Authorization",WL(e)),n}async function dR(t){const e=await t();return e.status>=500&&e.status<600?t():e}function zL(t){return Number(t.replace("s","000"))}function WL(t){return`${oR} ${t}`}/**
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
 */async function HL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=lR(t),i=hR(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:oR,appId:t.appId,sdkVersion:sR},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await dR(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:uR(c.authToken)}}else throw await cR("Create Installation",l)}/**
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
 */function fR(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function qL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const GL=/^[cdef][\w-]{21}$/,Am="";function KL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=QL(t);return GL.test(n)?n:Am}catch{return Am}}function QL(t){return qL(t).substr(0,22)}/**
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
 */function gd(t){return`${t.appName}!${t.appId}`}/**
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
 */const pR=new Map;function mR(t,e){const n=gd(t);gR(n,e),YL(n,e)}function gR(t,e){const n=pR.get(t);if(n)for(const r of n)r(e)}function YL(t,e){const n=XL();n&&n.postMessage({key:t,fid:e}),JL()}let ss=null;function XL(){return!ss&&"BroadcastChannel"in self&&(ss=new BroadcastChannel("[Firebase] FID Change"),ss.onmessage=t=>{gR(t.data.key,t.data.fid)}),ss}function JL(){pR.size===0&&ss&&(ss.close(),ss=null)}/**
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
 */const ZL="firebase-installations-database",eO=1,ys="firebase-installations-store";let tp=null;function m_(){return tp||(tp=JI(ZL,eO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ys)}}})),tp}async function Ih(t,e){const n=gd(t),i=(await m_()).transaction(ys,"readwrite"),s=i.objectStore(ys),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&mR(t,e.fid),e}async function _R(t){const e=gd(t),r=(await m_()).transaction(ys,"readwrite");await r.objectStore(ys).delete(e),await r.done}async function _d(t,e){const n=gd(t),i=(await m_()).transaction(ys,"readwrite"),s=i.objectStore(ys),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&mR(t,a.fid),a}/**
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
 */async function g_(t){let e;const n=await _d(t.appConfig,r=>{const i=tO(r),s=nO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Am?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tO(t){const e=t||{fid:KL(),registrationStatus:0};return yR(e)}function nO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(_s.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:iO(t)}:{installationEntry:e}}async function rO(t,e){try{const n=await HL(t,e);return Ih(t.appConfig,n)}catch(n){throw aR(n)&&n.customData.serverCode===409?await _R(t.appConfig):await Ih(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function iO(t){let e=await tw(t.appConfig);for(;e.registrationStatus===1;)await fR(100),e=await tw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await g_(t);return r||n}return e}function tw(t){return _d(t,e=>{if(!e)throw _s.create("installation-not-found");return yR(e)})}function yR(t){return sO(t)?{fid:t.fid,registrationStatus:0}:t}function sO(t){return t.registrationStatus===1&&t.registrationTime+iR<Date.now()}/**
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
 */async function oO({appConfig:t,heartbeatServiceProvider:e},n){const r=aO(t,n),i=jL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:sR,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await dR(()=>fetch(r,a));if(l.ok){const c=await l.json();return uR(c)}else throw await cR("Generate Auth Token",l)}function aO(t,{fid:e}){return`${lR(t)}/${e}/authTokens:generate`}/**
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
 */async function __(t,e=!1){let n;const r=await _d(t.appConfig,s=>{if(!vR(s))throw _s.create("not-registered");const o=s.authToken;if(!e&&cO(o))return s;if(o.requestStatus===1)return n=lO(t,e),s;{if(!navigator.onLine)throw _s.create("app-offline");const a=dO(s);return n=uO(t,a),a}});return n?await n:r.authToken}async function lO(t,e){let n=await nw(t.appConfig);for(;n.authToken.requestStatus===1;)await fR(100),n=await nw(t.appConfig);const r=n.authToken;return r.requestStatus===0?__(t,e):r}function nw(t){return _d(t,e=>{if(!vR(e))throw _s.create("not-registered");const n=e.authToken;return fO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function uO(t,e){try{const n=await oO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ih(t.appConfig,r),n}catch(n){if(aR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _R(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ih(t.appConfig,r)}throw n}}function vR(t){return t!==void 0&&t.registrationStatus===2}function cO(t){return t.requestStatus===2&&!hO(t)}function hO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+FL}function dO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function fO(t){return t.requestStatus===1&&t.requestTime+iR<Date.now()}/**
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
 */async function pO(t){const e=t,{installationEntry:n,registrationPromise:r}=await g_(e);return r?r.catch(console.error):__(e).catch(console.error),n.fid}/**
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
 */async function mO(t,e=!1){const n=t;return await gO(n),(await __(n,e)).token}async function gO(t){const{registrationPromise:e}=await g_(t);e&&await e}/**
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
 */function _O(t){if(!t||!t.options)throw np("App Configuration");if(!t.name)throw np("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw np(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function np(t){return _s.create("missing-app-config-values",{valueName:t})}/**
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
 */const wR="installations",yO="installations-internal",vO=t=>{const e=t.getProvider("app").getImmediate(),n=_O(e),r=lu(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wO=t=>{const e=t.getProvider("app").getImmediate(),n=lu(e,wR).getImmediate();return{getId:()=>pO(n),getToken:i=>mO(n,i)}};function EO(){rr(new $n(wR,vO,"PUBLIC")),rr(new $n(yO,wO,"PRIVATE"))}EO();yn(rR,p_);yn(rR,p_,"esm2017");/**
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
 */const rw="analytics",TO="firebase_id",SO="origin",IO=60*1e3,RO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",y_="https://www.googletagmanager.com/gtag/js";/**
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
 */const vn=new au("@firebase/analytics");/**
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
 */const CO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Vn=new Ls("analytics","Analytics",CO);/**
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
 */function AO(t){if(!t.startsWith(y_)){const e=Vn.create("invalid-gtag-resource",{gtagURL:t});return vn.warn(e.message),""}return t}function ER(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function kO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function PO(t,e){const n=kO("firebase-js-sdk-policy",{createScriptURL:AO}),r=document.createElement("script"),i=`${y_}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function NO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function bO(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await ER(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){vn.error(a)}t("config",i,s)}async function xO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await ER(n);for(const l of o){const c=a.find(f=>f.measurementId===l),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){vn.error(s)}}function DO(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await xO(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await bO(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){vn.error(a)}}return i}function LO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=DO(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function OO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(y_)&&n.src.includes(t))return n;return null}/**
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
 */const MO=30,VO=1e3;class FO{constructor(e={},n=VO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const TR=new FO;function UO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $O(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:UO(r)},s=RO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Vn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function BO(t,e=TR,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Vn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Vn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new WO;return setTimeout(async()=>{a.abort()},IO),SR({appId:r,apiKey:i,measurementId:s},o,a,e)}async function SR(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=TR){var s;const{appId:o,measurementId:a}=t;try{await jO(r,e)}catch(l){if(a)return vn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await $O(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!zO(c)){if(i.deleteThrottleMetadata(o),a)return vn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?q0(n,i.intervalMillis,MO):q0(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),vn.debug(`Calling attemptFetch again in ${h} millis`),SR(t,f,r,i)}}function jO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Vn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zO(t){if(!(t instanceof or)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class WO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function HO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function qO(){if(GI())try{await KI()}catch(t){return vn.warn(Vn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return vn.warn(Vn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function GO(t,e,n,r,i,s,o){var a;const l=BO(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&vn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>vn.error(y)),e.push(l);const c=qO().then(y=>{if(y)return r.getId()}),[h,f]=await Promise.all([l,c]);OO(s)||PO(s,h.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[SO]="firebase",m.update=!0,f!=null&&(m[TO]=f),i("config",h.measurementId,m),h.measurementId}/**
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
 */class KO{constructor(e){this.app=e}_delete(){return delete ul[this.app.options.appId],Promise.resolve()}}let ul={},iw=[];const sw={};let rp="dataLayer",QO="gtag",ow,IR,aw=!1;function YO(){const t=[];if(WI()&&t.push("This is a browser extension environment."),pD()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Vn.create("invalid-analytics-context",{errorInfo:e});vn.warn(n.message)}}function XO(t,e,n){YO();const r=t.options.appId;if(!r)throw Vn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)vn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Vn.create("no-api-key");if(ul[r]!=null)throw Vn.create("already-exists",{id:r});if(!aw){NO(rp);const{wrappedGtag:s,gtagCore:o}=LO(ul,iw,sw,rp,QO);IR=s,ow=o,aw=!0}return ul[r]=GO(t,iw,sw,e,ow,rp,n),new KO(t)}function JO(t,e,n,r){t=Xt(t),HO(IR,ul[t.app.options.appId],e,n,r).catch(i=>vn.error(i))}const lw="@firebase/analytics",uw="0.10.5";function ZO(){rr(new $n(rw,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return XO(r,i,n)},"PUBLIC")),rr(new $n("analytics-internal",t,"PRIVATE")),yn(lw,uw),yn(lw,uw,"esm2017");function t(e){try{const n=e.getProvider(rw).getImmediate();return{logEvent:(r,i,s)=>JO(n,r,i,s)}}catch(n){throw Vn.create("interop-component-reg-failed",{reason:n})}}}ZO();function v_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function RR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eM=RR,CR=new Ls("auth","Firebase",RR());/**
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
 */const Rh=new au("@firebase/auth");function tM(t,...e){Rh.logLevel<=Te.WARN&&Rh.warn(`Auth (${Os}): ${t}`,...e)}function Fc(t,...e){Rh.logLevel<=Te.ERROR&&Rh.error(`Auth (${Os}): ${t}`,...e)}/**
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
 */function ir(t,...e){throw w_(t,...e)}function mr(t,...e){return w_(t,...e)}function AR(t,e,n){const r=Object.assign(Object.assign({},eM()),{[e]:n});return new Ls("auth","Firebase",r).create(e,{appName:t.name})}function Vr(t){return AR(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function w_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return CR.create(t,...e)}function de(t,e,...n){if(!t)throw w_(e,...n)}function xr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fc(e),new Error(e)}function zr(t,e){t||xr(e)}/**
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
 */function km(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nM(){return cw()==="http:"||cw()==="https:"}function cw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nM()||WI()||"connection"in navigator)?navigator.onLine:!0}function iM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class uu{constructor(e,n){this.shortDelay=e,this.longDelay=n,zr(n>e,"Short delay should be less than long delay!"),this.isMobile=d_()||HI()}get(){return rM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function E_(t,e){zr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kR{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oM=new uu(3e4,6e4);function $i(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bi(t,e,n,r,i={}){return PR(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=sa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),kR.fetch()(NR(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function PR(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sM),e);try{const i=new lM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw AR(t,h,c);ir(t,h)}}catch(i){if(i instanceof or)throw i;ir(t,"network-request-failed",{message:String(i)})}}async function cu(t,e,n,r,i={}){const s=await Bi(t,e,n,r,i);return"mfaPendingCredential"in s&&ir(t,"multi-factor-auth-required",{_serverResponse:s}),s}function NR(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?E_(t.config,i):`${t.config.apiScheme}://${i}`}function aM(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mr(this.auth,"network-request-failed")),oM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mr(t,e,r);return i.customData._tokenResponse=n,i}function hw(t){return t!==void 0&&t.enterprise!==void 0}class uM{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return aM(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function cM(t,e){return Bi(t,"GET","/v2/recaptchaConfig",$i(t,e))}/**
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
 */async function hM(t,e){return Bi(t,"POST","/v1/accounts:delete",e)}async function bR(t,e){return Bi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function cl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dM(t,e=!1){const n=Xt(t),r=await n.getIdToken(e),i=T_(r);de(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:cl(ip(i.auth_time)),issuedAtTime:cl(ip(i.iat)),expirationTime:cl(ip(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ip(t){return Number(t)*1e3}function T_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fc("JWT malformed, contained fewer than 3 sections"),null;try{const i=wh(n);return i?JSON.parse(i):(Fc("Failed to decode base64 JWT payload"),null)}catch(i){return Fc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dw(t){const e=T_(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof or&&fM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cl(this.lastLoginAt),this.creationTime=cl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ch(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zl(t,bR(n,{idToken:r}));de(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xR(s.providerUserInfo):[],a=gM(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function mM(t){const e=Xt(t);await Ch(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xR(t){return t.map(e=>{var{providerId:n}=e,r=v_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _M(t,e){const n=await PR(t,{},async()=>{const r=sa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=NR(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kR.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yM(t,e){return Bi(t,"POST","/v2/accounts:revokeToken",$i(t,e))}/**
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
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=dw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _M(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Io;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(de(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(de(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
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
 */function ei(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=v_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zl(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dM(this,e)}reload(){return mM(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ch(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cr(this.auth.app))return Promise.reject(Vr(this.auth));const e=await this.getIdToken();return await zl(this,hM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:O,isAnonymous:F,providerData:$,stsTokenManager:S}=n;de(T&&S,e,"internal-error");const v=Io.fromJSON(this.name,S);de(typeof T=="string",e,"internal-error"),ei(f,e.name),ei(m,e.name),de(typeof O=="boolean",e,"internal-error"),de(typeof F=="boolean",e,"internal-error"),ei(y,e.name),ei(w,e.name),ei(C,e.name),ei(P,e.name),ei(E,e.name),ei(g,e.name);const I=new Dr({uid:T,auth:e,email:m,emailVerified:O,displayName:f,isAnonymous:F,photoURL:w,phoneNumber:y,tenantId:C,stsTokenManager:v,createdAt:E,lastLoginAt:g});return $&&Array.isArray($)&&(I.providerData=$.map(A=>Object.assign({},A))),P&&(I._redirectEventId=P),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Io;i.updateFromServerResponse(n);const s=new Dr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ch(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];de(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?xR(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Io;a.updateFromIdToken(r);const l=new Dr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Pm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const fw=new Map;function Lr(t){zr(t instanceof Function,"Expected a class definition");let e=fw.get(t);return e?(zr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fw.set(t,e),e)}/**
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
 */class DR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}DR.type="NONE";const pw=DR;/**
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
 */function Uc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ro{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Uc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Uc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ro(Lr(pw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Lr(pw);const o=Uc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Dr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ro(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ro(s,e,r))}}/**
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
 */function mw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(MR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FR(e))return"Blackberry";if(UR(e))return"Webos";if(S_(e))return"Safari";if((e.includes("chrome/")||OR(e))&&!e.includes("edge/"))return"Chrome";if(VR(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function LR(t=Ft()){return/firefox\//i.test(t)}function S_(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OR(t=Ft()){return/crios\//i.test(t)}function MR(t=Ft()){return/iemobile/i.test(t)}function VR(t=Ft()){return/android/i.test(t)}function FR(t=Ft()){return/blackberry/i.test(t)}function UR(t=Ft()){return/webos/i.test(t)}function yd(t=Ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vM(t=Ft()){var e;return yd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wM(){return dD()&&document.documentMode===10}function $R(t=Ft()){return yd(t)||VR(t)||UR(t)||FR(t)||/windows phone/i.test(t)||MR(t)}function EM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function BR(t,e=[]){let n;switch(t){case"Browser":n=mw(Ft());break;case"Worker":n=`${mw(Ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
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
 */class TM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SM(t,e={}){return Bi(t,"GET","/v2/passwordPolicy",$i(t,e))}/**
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
 */const IM=6;class RM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:IM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class CM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gw(this),this.idTokenSubscription=new gw(this),this.beforeStateQueue=new TM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ro.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bR(this,{idToken:e}),r=await Dr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ch(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cr(this.app))return Promise.reject(Vr(this));const n=e?Xt(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cr(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cr(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SM(this),n=new RM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ls("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lr(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Ro.create(this,[Lr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ms(t){return Xt(t)}class gw{constructor(e){this.auth=e,this.observer=null,this.addObserver=ED(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AM(t){vd=t}function jR(t){return vd.loadJS(t)}function kM(){return vd.recaptchaEnterpriseScript}function PM(){return vd.gapiScript}function NM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bM="recaptcha-enterprise",xM="NO_RECAPTCHA";class DM{constructor(e){this.type=bM,this.auth=Ms(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{cM(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new uM(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;hw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(xM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&hw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=kM();l.length!==0&&(l+=a),jR(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function _w(t,e,n,r=!1){const i=new DM(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Nm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await _w(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _w(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function LM(t,e){const n=lu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Th(s,e??{}))return i;ir(i,"already-initialized")}return n.initialize({options:e})}function OM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MM(t,e,n){const r=Ms(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=zR(e),{host:o,port:a}=VM(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),FM()}function zR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VM(t){const e=zR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yw(o)}}}function yw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class I_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,n){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}async function UM(t,e){return Bi(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $M(t,e){return cu(t,"POST","/v1/accounts:signInWithPassword",$i(t,e))}/**
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
 */async function BM(t,e){return cu(t,"POST","/v1/accounts:signInWithEmailLink",$i(t,e))}async function jM(t,e){return cu(t,"POST","/v1/accounts:signInWithEmailLink",$i(t,e))}/**
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
 */class Wl extends I_{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nm(e,n,"signInWithPassword",$M);case"emailLink":return BM(e,{email:this._email,oobCode:this._password});default:ir(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nm(e,r,"signUpPassword",UM);case"emailLink":return jM(e,{idToken:n,email:this._email,oobCode:this._password});default:ir(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Co(t,e){return cu(t,"POST","/v1/accounts:signInWithIdp",$i(t,e))}/**
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
 */const zM="http://localhost";class vs extends I_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ir("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=v_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Co(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Co(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Co(e,n)}buildRequest(){const e={requestUri:zM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sa(n)}return e}}/**
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
 */function WM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HM(t){const e=Ka(Qa(t)).link,n=e?Ka(Qa(e)).deep_link_id:null,r=Ka(Qa(t)).deep_link_id;return(r?Ka(Qa(r)).link:null)||r||n||e||t}class R_{constructor(e){var n,r,i,s,o,a;const l=Ka(Qa(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=WM((i=l.mode)!==null&&i!==void 0?i:null);de(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=HM(e);try{return new R_(n)}catch{return null}}}/**
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
 */class oa{constructor(){this.providerId=oa.PROVIDER_ID}static credential(e,n){return Wl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=R_.parseLink(n);return de(r,"argument-error"),Wl._fromEmailAndCode(e,r.code,r.tenantId)}}oa.PROVIDER_ID="password";oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class WR{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hu extends WR{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class oi extends hu{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
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
 */class ai extends hu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vs._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ai.credential(n,r)}catch{return null}}}ai.GOOGLE_SIGN_IN_METHOD="google.com";ai.PROVIDER_ID="google.com";/**
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
 */class li extends hu{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.GITHUB_SIGN_IN_METHOD="github.com";li.PROVIDER_ID="github.com";/**
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
 */class ui extends hu{constructor(){super("twitter.com")}static credential(e,n){return vs._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ui.credential(n,r)}catch{return null}}}ui.TWITTER_SIGN_IN_METHOD="twitter.com";ui.PROVIDER_ID="twitter.com";/**
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
 */async function qM(t,e){return cu(t,"POST","/v1/accounts:signUp",$i(t,e))}/**
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
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Dr._fromIdTokenResponse(e,r,i),o=vw(r);return new ws({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vw(r);return new ws({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ah extends or{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ah.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ah(e,n,r,i)}}function HR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ah._fromErrorAndOperation(t,s,e,r):s})}async function GM(t,e,n=!1){const r=await zl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ws._forOperation(t,"link",r)}/**
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
 */async function KM(t,e,n=!1){const{auth:r}=t;if(cr(r.app))return Promise.reject(Vr(r));const i="reauthenticate";try{const s=await zl(t,HR(r,i,e,t),n);de(s.idToken,r,"internal-error");const o=T_(s.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),ws._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ir(r,"user-mismatch"),s}}/**
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
 */async function qR(t,e,n=!1){if(cr(t.app))return Promise.reject(Vr(t));const r="signIn",i=await HR(t,r,e),s=await ws._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function QM(t,e){return qR(Ms(t),e)}/**
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
 */async function GR(t){const e=Ms(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YM(t,e,n){if(cr(t.app))return Promise.reject(Vr(t));const r=Ms(t),o=await Nm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qM).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&GR(t),l}),a=await ws._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function XM(t,e,n){return cr(t.app)?Promise.reject(Vr(t)):QM(Xt(t),oa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&GR(t),r})}function JM(t,e,n,r){return Xt(t).onIdTokenChanged(e,n,r)}function ZM(t,e,n){return Xt(t).beforeAuthStateChanged(e,n)}const kh="__sak";/**
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
 */class KR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kh,"1"),this.storage.removeItem(kh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function e2(){const t=Ft();return S_(t)||yd(t)}const t2=1e3,n2=10;class QR extends KR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=e2()&&EM(),this.fallbackToPolling=$R(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,n2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},t2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}QR.type="LOCAL";const r2=QR;/**
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
 */class YR extends KR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}YR.type="SESSION";const XR=YR;/**
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
 */function i2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await i2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wd.receivers=[];/**
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
 */function C_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class s2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=C_("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gr(){return window}function o2(t){gr().location.href=t}/**
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
 */function JR(){return typeof gr().WorkerGlobalScope<"u"&&typeof gr().importScripts=="function"}async function a2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function u2(){return JR()?self:null}/**
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
 */const ZR="firebaseLocalStorageDb",c2=1,Ph="firebaseLocalStorage",eC="fbase_key";class du{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ed(t,e){return t.transaction([Ph],e?"readwrite":"readonly").objectStore(Ph)}function h2(){const t=indexedDB.deleteDatabase(ZR);return new du(t).toPromise()}function bm(){const t=indexedDB.open(ZR,c2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ph,{keyPath:eC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ph)?e(r):(r.close(),await h2(),e(await bm()))})})}async function ww(t,e,n){const r=Ed(t,!0).put({[eC]:e,value:n});return new du(r).toPromise()}async function d2(t,e){const n=Ed(t,!1).get(e),r=await new du(n).toPromise();return r===void 0?null:r.value}function Ew(t,e){const n=Ed(t,!0).delete(e);return new du(n).toPromise()}const f2=800,p2=3;class tC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>p2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return JR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wd._getInstance(u2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await a2(),!this.activeServiceWorker)return;this.sender=new s2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||l2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bm();return await ww(e,kh,"1"),await Ew(e,kh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ww(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>d2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ew(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ed(i,!1).getAll();return new du(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),f2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tC.type="LOCAL";const m2=tC;new uu(3e4,6e4);/**
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
 */function g2(t,e){return e?Lr(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class A_ extends I_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Co(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _2(t){return qR(t.auth,new A_(t),t.bypassAuthState)}function y2(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),KM(n,new A_(t),t.bypassAuthState)}async function v2(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),GM(n,new A_(t),t.bypassAuthState)}/**
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
 */class nC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _2;case"linkViaPopup":case"linkViaRedirect":return v2;case"reauthViaPopup":case"reauthViaRedirect":return y2;default:ir(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const w2=new uu(2e3,1e4);class mo extends nC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mo.currentPopupAction&&mo.currentPopupAction.cancel(),mo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=C_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,w2.get())};e()}}mo.currentPopupAction=null;/**
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
 */const E2="pendingRedirect",$c=new Map;class T2 extends nC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$c.get(this.auth._key());if(!e){try{const r=await S2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$c.set(this.auth._key(),e)}return this.bypassAuthState||$c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S2(t,e){const n=C2(e),r=R2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function I2(t,e){$c.set(t._key(),e)}function R2(t){return Lr(t._redirectPersistence)}function C2(t){return Uc(E2,t.config.apiKey,t.name)}async function A2(t,e,n=!1){if(cr(t.app))return Promise.reject(Vr(t));const r=Ms(t),i=g2(r,e),o=await new T2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const k2=10*60*1e3;class P2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!N2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=k2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tw(e))}saveEventToCache(e){this.cachedEventUids.add(Tw(e)),this.lastProcessedEventTime=Date.now()}}function Tw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function N2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rC(t);default:return!1}}/**
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
 */async function b2(t,e={}){return Bi(t,"GET","/v1/projects",e)}/**
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
 */const x2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,D2=/^https?/;async function L2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await b2(t);for(const n of e)try{if(O2(n))return}catch{}ir(t,"unauthorized-domain")}function O2(t){const e=km(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!D2.test(n))return!1;if(x2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const M2=new uu(3e4,6e4);function Sw(){const t=gr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function V2(t){return new Promise((e,n)=>{var r,i,s;function o(){Sw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sw(),n(mr(t,"network-request-failed"))},timeout:M2.get()})}if(!((i=(r=gr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gr().gapi)===null||s===void 0)&&s.load)o();else{const a=NM("iframefcb");return gr()[a]=()=>{gapi.load?o():n(mr(t,"network-request-failed"))},jR(`${PM()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Bc=null,e})}let Bc=null;function F2(t){return Bc=Bc||V2(t),Bc}/**
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
 */const U2=new uu(5e3,15e3),$2="__/auth/iframe",B2="emulator/auth/iframe",j2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function W2(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?E_(e,B2):`https://${t.config.authDomain}/${$2}`,r={apiKey:e.apiKey,appName:t.name,v:Os},i=z2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${sa(r).slice(1)}`}async function H2(t){const e=await F2(t),n=gr().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:W2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:j2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mr(t,"network-request-failed"),a=gr().setTimeout(()=>{s(o)},U2.get());function l(){gr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const q2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},G2=500,K2=600,Q2="_blank",Y2="http://localhost";class Iw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X2(t,e,n,r=G2,i=K2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},q2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ft().toLowerCase();n&&(a=OR(c)?Q2:n),LR(c)&&(e=e||Y2,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[y,w])=>`${m}${y}=${w},`,"");if(vM(c)&&a!=="_self")return J2(e||"",a),new Iw(null);const f=window.open(e||"",a,h);de(f,t,"popup-blocked");try{f.focus()}catch{}return new Iw(f)}function J2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Z2="__/auth/handler",eV="emulator/auth/handler",tV=encodeURIComponent("fac");async function Rw(t,e,n,r,i,s){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:i};if(e instanceof WR){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Em(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof hu){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${tV}=${encodeURIComponent(l)}`:"";return`${nV(t)}?${sa(a).slice(1)}${c}`}function nV({config:t}){return t.emulator?E_(t,eV):`https://${t.authDomain}/${Z2}`}/**
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
 */const sp="webStorageSupport";class rV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=XR,this._completeRedirectFn=A2,this._overrideRedirectResult=I2}async _openPopup(e,n,r,i){var s;zr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Rw(e,n,r,km(),i);return X2(e,o,C_())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Rw(e,n,r,km(),i);return o2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await H2(e),r=new P2(e);return n.register("authEvent",i=>(de(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sp,{type:sp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sp];o!==void 0&&n(!!o),ir(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $R()||S_()||yd()}}const iV=rV;var Cw="@firebase/auth",Aw="1.7.5";/**
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
 */class sV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aV(t){rr(new $n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BR(t)},c=new CM(r,i,s,l);return OM(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rr(new $n("auth-internal",e=>{const n=Ms(e.getProvider("auth").getImmediate());return(r=>new sV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Cw,Aw,oV(t)),yn(Cw,Aw,"esm2017")}/**
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
 */const lV=5*60,uV=zI("authIdTokenMaxAge")||lV;let kw=null;const cV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uV)return;const i=n==null?void 0:n.token;kw!==i&&(kw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hV(t=eR()){const e=lu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LM(t,{popupRedirectResolver:iV,persistence:[m2,r2,XR]}),r=zI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=cV(s.toString());ZM(n,o,()=>o(n.currentUser)),JM(n,a=>o(a))}}const i=BI("auth");return i&&MM(n,`http://${i}`),n}function dV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}AM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aV("Browser");var Pw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cs,iC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function I(){}I.prototype=v.prototype,S.D=v.prototype,S.prototype=new I,S.prototype.constructor=S,S.C=function(A,k,x){for(var R=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)R[$e-2]=arguments[$e];return v.prototype[k].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,v,I){I||(I=0);var A=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)A[k]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(k=0;16>k;++k)A[k]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=S.g[0],I=S.g[1],k=S.g[2];var x=S.g[3],R=v+(x^I&(k^x))+A[0]+3614090360&4294967295;v=I+(R<<7&4294967295|R>>>25),R=x+(k^v&(I^k))+A[1]+3905402710&4294967295,x=v+(R<<12&4294967295|R>>>20),R=k+(I^x&(v^I))+A[2]+606105819&4294967295,k=x+(R<<17&4294967295|R>>>15),R=I+(v^k&(x^v))+A[3]+3250441966&4294967295,I=k+(R<<22&4294967295|R>>>10),R=v+(x^I&(k^x))+A[4]+4118548399&4294967295,v=I+(R<<7&4294967295|R>>>25),R=x+(k^v&(I^k))+A[5]+1200080426&4294967295,x=v+(R<<12&4294967295|R>>>20),R=k+(I^x&(v^I))+A[6]+2821735955&4294967295,k=x+(R<<17&4294967295|R>>>15),R=I+(v^k&(x^v))+A[7]+4249261313&4294967295,I=k+(R<<22&4294967295|R>>>10),R=v+(x^I&(k^x))+A[8]+1770035416&4294967295,v=I+(R<<7&4294967295|R>>>25),R=x+(k^v&(I^k))+A[9]+2336552879&4294967295,x=v+(R<<12&4294967295|R>>>20),R=k+(I^x&(v^I))+A[10]+4294925233&4294967295,k=x+(R<<17&4294967295|R>>>15),R=I+(v^k&(x^v))+A[11]+2304563134&4294967295,I=k+(R<<22&4294967295|R>>>10),R=v+(x^I&(k^x))+A[12]+1804603682&4294967295,v=I+(R<<7&4294967295|R>>>25),R=x+(k^v&(I^k))+A[13]+4254626195&4294967295,x=v+(R<<12&4294967295|R>>>20),R=k+(I^x&(v^I))+A[14]+2792965006&4294967295,k=x+(R<<17&4294967295|R>>>15),R=I+(v^k&(x^v))+A[15]+1236535329&4294967295,I=k+(R<<22&4294967295|R>>>10),R=v+(k^x&(I^k))+A[1]+4129170786&4294967295,v=I+(R<<5&4294967295|R>>>27),R=x+(I^k&(v^I))+A[6]+3225465664&4294967295,x=v+(R<<9&4294967295|R>>>23),R=k+(v^I&(x^v))+A[11]+643717713&4294967295,k=x+(R<<14&4294967295|R>>>18),R=I+(x^v&(k^x))+A[0]+3921069994&4294967295,I=k+(R<<20&4294967295|R>>>12),R=v+(k^x&(I^k))+A[5]+3593408605&4294967295,v=I+(R<<5&4294967295|R>>>27),R=x+(I^k&(v^I))+A[10]+38016083&4294967295,x=v+(R<<9&4294967295|R>>>23),R=k+(v^I&(x^v))+A[15]+3634488961&4294967295,k=x+(R<<14&4294967295|R>>>18),R=I+(x^v&(k^x))+A[4]+3889429448&4294967295,I=k+(R<<20&4294967295|R>>>12),R=v+(k^x&(I^k))+A[9]+568446438&4294967295,v=I+(R<<5&4294967295|R>>>27),R=x+(I^k&(v^I))+A[14]+3275163606&4294967295,x=v+(R<<9&4294967295|R>>>23),R=k+(v^I&(x^v))+A[3]+4107603335&4294967295,k=x+(R<<14&4294967295|R>>>18),R=I+(x^v&(k^x))+A[8]+1163531501&4294967295,I=k+(R<<20&4294967295|R>>>12),R=v+(k^x&(I^k))+A[13]+2850285829&4294967295,v=I+(R<<5&4294967295|R>>>27),R=x+(I^k&(v^I))+A[2]+4243563512&4294967295,x=v+(R<<9&4294967295|R>>>23),R=k+(v^I&(x^v))+A[7]+1735328473&4294967295,k=x+(R<<14&4294967295|R>>>18),R=I+(x^v&(k^x))+A[12]+2368359562&4294967295,I=k+(R<<20&4294967295|R>>>12),R=v+(I^k^x)+A[5]+4294588738&4294967295,v=I+(R<<4&4294967295|R>>>28),R=x+(v^I^k)+A[8]+2272392833&4294967295,x=v+(R<<11&4294967295|R>>>21),R=k+(x^v^I)+A[11]+1839030562&4294967295,k=x+(R<<16&4294967295|R>>>16),R=I+(k^x^v)+A[14]+4259657740&4294967295,I=k+(R<<23&4294967295|R>>>9),R=v+(I^k^x)+A[1]+2763975236&4294967295,v=I+(R<<4&4294967295|R>>>28),R=x+(v^I^k)+A[4]+1272893353&4294967295,x=v+(R<<11&4294967295|R>>>21),R=k+(x^v^I)+A[7]+4139469664&4294967295,k=x+(R<<16&4294967295|R>>>16),R=I+(k^x^v)+A[10]+3200236656&4294967295,I=k+(R<<23&4294967295|R>>>9),R=v+(I^k^x)+A[13]+681279174&4294967295,v=I+(R<<4&4294967295|R>>>28),R=x+(v^I^k)+A[0]+3936430074&4294967295,x=v+(R<<11&4294967295|R>>>21),R=k+(x^v^I)+A[3]+3572445317&4294967295,k=x+(R<<16&4294967295|R>>>16),R=I+(k^x^v)+A[6]+76029189&4294967295,I=k+(R<<23&4294967295|R>>>9),R=v+(I^k^x)+A[9]+3654602809&4294967295,v=I+(R<<4&4294967295|R>>>28),R=x+(v^I^k)+A[12]+3873151461&4294967295,x=v+(R<<11&4294967295|R>>>21),R=k+(x^v^I)+A[15]+530742520&4294967295,k=x+(R<<16&4294967295|R>>>16),R=I+(k^x^v)+A[2]+3299628645&4294967295,I=k+(R<<23&4294967295|R>>>9),R=v+(k^(I|~x))+A[0]+4096336452&4294967295,v=I+(R<<6&4294967295|R>>>26),R=x+(I^(v|~k))+A[7]+1126891415&4294967295,x=v+(R<<10&4294967295|R>>>22),R=k+(v^(x|~I))+A[14]+2878612391&4294967295,k=x+(R<<15&4294967295|R>>>17),R=I+(x^(k|~v))+A[5]+4237533241&4294967295,I=k+(R<<21&4294967295|R>>>11),R=v+(k^(I|~x))+A[12]+1700485571&4294967295,v=I+(R<<6&4294967295|R>>>26),R=x+(I^(v|~k))+A[3]+2399980690&4294967295,x=v+(R<<10&4294967295|R>>>22),R=k+(v^(x|~I))+A[10]+4293915773&4294967295,k=x+(R<<15&4294967295|R>>>17),R=I+(x^(k|~v))+A[1]+2240044497&4294967295,I=k+(R<<21&4294967295|R>>>11),R=v+(k^(I|~x))+A[8]+1873313359&4294967295,v=I+(R<<6&4294967295|R>>>26),R=x+(I^(v|~k))+A[15]+4264355552&4294967295,x=v+(R<<10&4294967295|R>>>22),R=k+(v^(x|~I))+A[6]+2734768916&4294967295,k=x+(R<<15&4294967295|R>>>17),R=I+(x^(k|~v))+A[13]+1309151649&4294967295,I=k+(R<<21&4294967295|R>>>11),R=v+(k^(I|~x))+A[4]+4149444226&4294967295,v=I+(R<<6&4294967295|R>>>26),R=x+(I^(v|~k))+A[11]+3174756917&4294967295,x=v+(R<<10&4294967295|R>>>22),R=k+(v^(x|~I))+A[2]+718787259&4294967295,k=x+(R<<15&4294967295|R>>>17),R=I+(x^(k|~v))+A[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,S.g[2]=S.g[2]+k&4294967295,S.g[3]=S.g[3]+x&4294967295}r.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var I=v-this.blockSize,A=this.B,k=this.h,x=0;x<v;){if(k==0)for(;x<=I;)i(this,S,x),x+=this.blockSize;if(typeof S=="string"){for(;x<v;)if(A[k++]=S.charCodeAt(x++),k==this.blockSize){i(this,A),k=0;break}}else for(;x<v;)if(A[k++]=S[x++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var I=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=I&255,I/=256;for(this.u(S),S=Array(16),v=I=0;4>v;++v)for(var A=0;32>A;A+=8)S[I++]=this.g[v]>>>A&255;return S};function s(S,v){var I=a;return Object.prototype.hasOwnProperty.call(I,S)?I[S]:I[S]=v(S)}function o(S,v){this.h=v;for(var I=[],A=!0,k=S.length-1;0<=k;k--){var x=S[k]|0;A&&x==v||(I[k]=x,A=!1)}this.g=I}var a={};function l(S){return-128<=S&&128>S?s(S,function(v){return new o([v|0],0>v?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return P(c(-S));for(var v=[],I=1,A=0;S>=I;A++)v[A]=S/I|0,I*=4294967296;return new o(v,0)}function h(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return P(h(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(v,8)),A=f,k=0;k<S.length;k+=8){var x=Math.min(8,S.length-k),R=parseInt(S.substring(k,k+x),v);8>x?(x=c(Math.pow(v,x)),A=A.j(x).add(c(R))):(A=A.j(I),A=A.add(c(R)))}return A}var f=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(C(this))return-P(this).m();for(var S=0,v=1,I=0;I<this.g.length;I++){var A=this.i(I);S+=(0<=A?A:4294967296+A)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(w(this))return"0";if(C(this))return"-"+P(this).toString(S);for(var v=c(Math.pow(S,6)),I=this,A="";;){var k=O(I,v).g;I=E(I,k.j(v));var x=((0<I.g.length?I.g[0]:I.h)>>>0).toString(S);if(I=k,w(I))return x+A;for(;6>x.length;)x="0"+x;A=x+A}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function w(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function C(S){return S.h==-1}t.l=function(S){return S=E(this,S),C(S)?-1:w(S)?0:1};function P(S){for(var v=S.g.length,I=[],A=0;A<v;A++)I[A]=~S.g[A];return new o(I,~S.h).add(m)}t.abs=function(){return C(this)?P(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),I=[],A=0,k=0;k<=v;k++){var x=A+(this.i(k)&65535)+(S.i(k)&65535),R=(x>>>16)+(this.i(k)>>>16)+(S.i(k)>>>16);A=R>>>16,x&=65535,R&=65535,I[k]=R<<16|x}return new o(I,I[I.length-1]&-2147483648?-1:0)};function E(S,v){return S.add(P(v))}t.j=function(S){if(w(this)||w(S))return f;if(C(this))return C(S)?P(this).j(P(S)):P(P(this).j(S));if(C(S))return P(this.j(P(S)));if(0>this.l(y)&&0>S.l(y))return c(this.m()*S.m());for(var v=this.g.length+S.g.length,I=[],A=0;A<2*v;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<S.g.length;k++){var x=this.i(A)>>>16,R=this.i(A)&65535,$e=S.i(k)>>>16,Zt=S.i(k)&65535;I[2*A+2*k]+=R*Zt,g(I,2*A+2*k),I[2*A+2*k+1]+=x*Zt,g(I,2*A+2*k+1),I[2*A+2*k+1]+=R*$e,g(I,2*A+2*k+1),I[2*A+2*k+2]+=x*$e,g(I,2*A+2*k+2)}for(A=0;A<v;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=v;A<2*v;A++)I[A]=0;return new o(I,0)};function g(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function T(S,v){this.g=S,this.h=v}function O(S,v){if(w(v))throw Error("division by zero");if(w(S))return new T(f,f);if(C(S))return v=O(P(S),v),new T(P(v.g),P(v.h));if(C(v))return v=O(S,P(v)),new T(P(v.g),v.h);if(30<S.g.length){if(C(S)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=v;0>=A.l(S);)I=F(I),A=F(A);var k=$(I,1),x=$(A,1);for(A=$(A,2),I=$(I,2);!w(A);){var R=x.add(A);0>=R.l(S)&&(k=k.add(I),x=R),A=$(A,1),I=$(I,1)}return v=E(S,k.j(v)),new T(k,v)}for(k=f;0<=S.l(v);){for(I=Math.max(1,Math.floor(S.m()/v.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),x=c(I),R=x.j(v);C(R)||0<R.l(S);)I-=A,x=c(I),R=x.j(v);w(x)&&(x=m),k=k.add(x),S=E(S,R)}return new T(k,S)}t.A=function(S){return O(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)&S.i(A);return new o(I,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)|S.i(A);return new o(I,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)^S.i(A);return new o(I,this.h^S.h)};function F(S){for(var v=S.g.length+1,I=[],A=0;A<v;A++)I[A]=S.i(A)<<1|S.i(A-1)>>>31;return new o(I,S.h)}function $(S,v){var I=v>>5;v%=32;for(var A=S.g.length-I,k=[],x=0;x<A;x++)k[x]=0<v?S.i(x+I)>>>v|S.i(x+I+1)<<32-v:S.i(x+I);return new o(k,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iC=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,cs=o}).apply(typeof Pw<"u"?Pw:typeof self<"u"?self:typeof window<"u"?window:{});var mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sC,oC,Ya,aC,jc,xm,lC,uC,cC;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,p){return u==Array.prototype||u==Object.prototype||(u[d]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof mc=="object"&&mc];for(var d=0;d<u.length;++d){var p=u[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var p=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var D=u[_];if(!(D in p))break e;p=p[D]}u=u[u.length-1],_=p[u],d=d(_),d!=_&&d!=null&&e(p,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var p=0,_=!1,D={next:function(){if(!_&&p<u.length){var V=p++;return{value:d(V,u[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,p){return u.call.apply(u.bind,arguments)}function f(u,d,p){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),u.apply(d,D)}}return function(){return u.apply(d,arguments)}}function m(u,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function y(u,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function w(u,d){function p(){}p.prototype=d.prototype,u.aa=d.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(_,D,V){for(var G=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)G[Fe-2]=arguments[Fe];return d.prototype[D].apply(_,G)}}function C(u){const d=u.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=u[_];return p}return[]}function P(u,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const D=u.length||0,V=_.length||0;u.length=D+V;for(let G=0;G<V;G++)u[D+G]=_[G]}else u.push(_)}}class E{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function g(u){return/^[\s\xa0]*$/.test(u)}function T(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function O(u){return O[" "](u),u}O[" "]=function(){};var F=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function $(u,d,p){for(const _ in u)d.call(p,u[_],_,u)}function S(u,d){for(const p in u)d.call(void 0,u[p],p,u)}function v(u){const d={};for(const p in u)d[p]=u[p];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,d){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)u[p]=_[p];for(let V=0;V<I.length;V++)p=I[V],Object.prototype.hasOwnProperty.call(_,p)&&(u[p]=_[p])}}function k(u){var d=1;u=u.split(":");const p=[];for(;0<d&&u.length;)p.push(u.shift()),d--;return u.length&&p.push(u.join(":")),p}function x(u){a.setTimeout(()=>{throw u},0)}function R(){var u=ae;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class $e{constructor(){this.h=this.g=null}add(d,p){const _=Zt.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Zt=new E(()=>new wt,u=>u.reset());class wt{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,K=!1,ae=new $e,J=()=>{const u=a.Promise.resolve(void 0);pt=()=>{u.then(re)}};var re=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(p){x(p)}var d=Zt;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}K=!1};function b(){this.s=this.s,this.C=this.C}b.prototype.s=!1,b.prototype.ma=function(){this.s||(this.s=!0,this.N())},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var q=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return u}();function se(u,d){if(B.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(F){e:{try{O(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else p=="mouseover"?d=u.fromElement:p=="mouseout"&&(d=u.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Z[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&se.aa.h.call(this)}}w(se,B);var Z={2:"touch",3:"pen",4:"mouse"};se.prototype.h=function(){se.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var fe="closure_listenable_"+(1e6*Math.random()|0),we=0;function ie(u,d,p,_,D){this.listener=u,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=D,this.key=++we,this.da=this.fa=!1}function De(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Xe(u){this.src=u,this.g={},this.h=0}Xe.prototype.add=function(u,d,p,_,D){var V=u.toString();u=this.g[V],u||(u=this.g[V]=[],this.h++);var G=Me(u,d,_,D);return-1<G?(d=u[G],p||(d.fa=!1)):(d=new ie(d,this.src,V,!!_,D),d.fa=p,u.push(d)),d};function Pe(u,d){var p=d.type;if(p in u.g){var _=u.g[p],D=Array.prototype.indexOf.call(_,d,void 0),V;(V=0<=D)&&Array.prototype.splice.call(_,D,1),V&&(De(d),u.g[p].length==0&&(delete u.g[p],u.h--))}}function Me(u,d,p,_){for(var D=0;D<u.length;++D){var V=u[D];if(!V.da&&V.listener==d&&V.capture==!!p&&V.ha==_)return D}return-1}var en="closure_lm_"+(1e6*Math.random()|0),jn={};function tn(u,d,p,_,D){if(Array.isArray(d)){for(var V=0;V<d.length;V++)tn(u,d[V],p,_,D);return null}return p=Ws(p),u&&u[fe]?u.K(d,p,c(_)?!!_.capture:!!_,D):nn(u,d,p,!1,_,D)}function nn(u,d,p,_,D,V){if(!d)throw Error("Invalid event type");var G=c(D)?!!D.capture:!!D,Fe=ga(u);if(Fe||(u[en]=Fe=new Xe(u)),p=Fe.add(d,p,_,G,V),p.proxy)return p;if(_=bu(),p.proxy=_,_.src=u,_.listener=p,u.addEventListener)q||(D=G),D===void 0&&(D=!1),u.addEventListener(d.toString(),_,D);else if(u.attachEvent)u.attachEvent(ma(d.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function bu(){function u(p){return d.call(u.src,u.listener,p)}const d=Du;return u}function xu(u,d,p,_,D){if(Array.isArray(d))for(var V=0;V<d.length;V++)xu(u,d[V],p,_,D);else _=c(_)?!!_.capture:!!_,p=Ws(p),u&&u[fe]?(u=u.i,d=String(d).toString(),d in u.g&&(V=u.g[d],p=Me(V,p,_,D),-1<p&&(De(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete u.g[d],u.h--)))):u&&(u=ga(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Me(d,p,_,D)),(p=-1<u?d[u]:null)&&Hi(p))}function Hi(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[fe])Pe(d.i,u);else{var p=u.type,_=u.proxy;d.removeEventListener?d.removeEventListener(p,_,u.capture):d.detachEvent?d.detachEvent(ma(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=ga(d))?(Pe(p,u),p.h==0&&(p.src=null,d[en]=null)):De(u)}}}function ma(u){return u in jn?jn[u]:jn[u]="on"+u}function Du(u,d){if(u.da)u=!0;else{d=new se(d,this);var p=u.listener,_=u.ha||u.src;u.fa&&Hi(u),u=p.call(_,d)}return u}function ga(u){return u=u[en],u instanceof Xe?u:null}var qi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ws(u){return typeof u=="function"?u:(u[qi]||(u[qi]=function(d){return u.handleEvent(d)}),u[qi])}function Et(){b.call(this),this.i=new Xe(this),this.M=this,this.F=null}w(Et,b),Et.prototype[fe]=!0,Et.prototype.removeEventListener=function(u,d,p,_){xu(this,u,d,p,_)};function Nt(u,d){var p,_=u.F;if(_)for(p=[];_;_=_.F)p.push(_);if(u=u.M,_=d.type||d,typeof d=="string")d=new B(d,u);else if(d instanceof B)d.target=d.target||u;else{var D=d;d=new B(_,u),A(d,D)}if(D=!0,p)for(var V=p.length-1;0<=V;V--){var G=d.g=p[V];D=Hs(G,_,!0,d)&&D}if(G=d.g=u,D=Hs(G,_,!0,d)&&D,D=Hs(G,_,!1,d)&&D,p)for(V=0;V<p.length;V++)G=d.g=p[V],D=Hs(G,_,!1,d)&&D}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var p=u.g[d],_=0;_<p.length;_++)De(p[_]);delete u.g[d],u.h--}}this.F=null},Et.prototype.K=function(u,d,p,_){return this.i.add(String(u),d,!1,p,_)},Et.prototype.L=function(u,d,p,_){return this.i.add(String(u),d,!0,p,_)};function Hs(u,d,p,_){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,V=0;V<d.length;++V){var G=d[V];if(G&&!G.da&&G.capture==p){var Fe=G.listener,bt=G.ha||G.src;G.fa&&Pe(u.i,G),D=Fe.call(bt,_)!==!1&&D}}return D&&!_.defaultPrevented}function Lu(u,d,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function Ou(u){u.g=Lu(()=>{u.g=null,u.i&&(u.i=!1,Ou(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class cf extends b{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ou(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qr(u){b.call(this),this.h=u,this.g={}}w(Qr,b);var Mu=[];function Vu(u){$(u.g,function(d,p){this.g.hasOwnProperty(p)&&Hi(d)},u),u.g={}}Qr.prototype.N=function(){Qr.aa.N.call(this),Vu(this)},Qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var M=a.JSON.stringify,N=a.JSON.parse,z=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Q(){}Q.prototype.h=null;function Y(u){return u.h||(u.h=u.i())}function ee(){}var oe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function le(){B.call(this,"d")}w(le,B);function ue(){B.call(this,"c")}w(ue,B);var pe={},Ve=null;function mt(){return Ve=Ve||new Et}pe.La="serverreachability";function at(u){B.call(this,pe.La,u)}w(at,B);function Tt(u){const d=mt();Nt(d,new at(d))}pe.STAT_EVENT="statevent";function ln(u,d){B.call(this,pe.STAT_EVENT,u),this.stat=d}w(ln,B);function rt(u){const d=mt();Nt(d,new ln(d,u))}pe.Ma="timingevent";function Gi(u,d){B.call(this,pe.Ma,u),this.size=d}w(Gi,B);function zn(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function Wn(){this.g=!0}Wn.prototype.xa=function(){this.g=!1};function rP(u,d,p,_,D,V){u.info(function(){if(u.g)if(V)for(var G="",Fe=V.split("&"),bt=0;bt<Fe.length;bt++){var Ne=Fe[bt].split("=");if(1<Ne.length){var Ut=Ne[0];Ne=Ne[1];var $t=Ut.split("_");G=2<=$t.length&&$t[1]=="type"?G+(Ut+"="+Ne+"&"):G+(Ut+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+d+`
`+p+`
`+G})}function iP(u,d,p,_,D,V,G){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+d+`
`+p+`
`+V+" "+G})}function qs(u,d,p,_){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+oP(u,p)+(_?" "+_:"")})}function sP(u,d){u.info(function(){return"TIMEOUT: "+d})}Wn.prototype.info=function(){};function oP(u,d){if(!u.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var _=p[u];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var V=D[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<D.length;G++)D[G]=""}}}}return M(p)}catch{return d}}var Fu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hf;function Uu(){}w(Uu,Q),Uu.prototype.g=function(){return new XMLHttpRequest},Uu.prototype.i=function(){return{}},hf=new Uu;function Yr(u,d,p,_){this.j=u,this.i=d,this.l=p,this.R=_||1,this.U=new Qr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zy}function zy(){this.i=null,this.g="",this.h=!1}var Wy={},df={};function ff(u,d,p){u.L=1,u.v=zu(Ir(d)),u.m=p,u.P=!0,Hy(u,null)}function Hy(u,d){u.F=Date.now(),$u(u),u.A=Ir(u.v);var p=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),sv(p.i,"t",_),u.C=0,p=u.j.J,u.h=new zy,u.g=Sv(u.j,p?d:null,!u.m),0<u.O&&(u.M=new cf(m(u.Y,u,u.g),u.O)),d=u.U,p=u.g,_=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(Mu[0]=D.toString()),D=Mu);for(var V=0;V<D.length;V++){var G=tn(p,D[V],_||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=u.H?v(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),Tt(),rP(u.i,u.u,u.A,u.l,u.R,u.m)}Yr.prototype.ca=function(u){u=u.target;const d=this.M;d&&Rr(u)==3?d.j():this.Y(u)},Yr.prototype.Y=function(u){try{if(u==this.g)e:{const $t=Rr(this.g);var d=this.g.Ba();const Qs=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||dv(this.g)))){this.J||$t!=4||d==7||(d==8||0>=Qs?Tt(3):Tt(2)),pf(this);var p=this.g.Z();this.X=p;t:if(qy(this)){var _=dv(this.g);u="";var D=_.length,V=Rr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ki(this),_a(this);var G="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,u+=this.h.i.decode(_[d],{stream:!(V&&d==D-1)});_.length=0,this.h.g+=u,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,iP(this.i,this.u,this.A,this.l,this.R,$t,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,bt=this.g;if((Fe=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Fe)){var Ne=Fe;break t}}Ne=null}if(p=Ne)qs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mf(this,p);else{this.o=!1,this.s=3,rt(12),Ki(this),_a(this);break e}}if(this.P){p=!0;let Hn;for(;!this.J&&this.C<G.length;)if(Hn=aP(this,G),Hn==df){$t==4&&(this.s=4,rt(14),p=!1),qs(this.i,this.l,null,"[Incomplete Response]");break}else if(Hn==Wy){this.s=4,rt(15),qs(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else qs(this.i,this.l,Hn,null),mf(this,Hn);if(qy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||G.length!=0||this.h.h||(this.s=1,rt(16),p=!1),this.o=this.o&&p,!p)qs(this.i,this.l,G,"[Invalid Chunked Response]"),Ki(this),_a(this);else if(0<G.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Ef(Ut),Ut.M=!0,rt(11))}}else qs(this.i,this.l,G,null),mf(this,G);$t==4&&Ki(this),this.o&&!this.J&&($t==4?vv(this.j,this):(this.o=!1,$u(this)))}else IP(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Ki(this),_a(this)}}}catch{}finally{}};function qy(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function aP(u,d){var p=u.C,_=d.indexOf(`
`,p);return _==-1?df:(p=Number(d.substring(p,_)),isNaN(p)?Wy:(_+=1,_+p>d.length?df:(d=d.slice(_,_+p),u.C=_+p,d)))}Yr.prototype.cancel=function(){this.J=!0,Ki(this)};function $u(u){u.S=Date.now()+u.I,Gy(u,u.I)}function Gy(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=zn(m(u.ba,u),d)}function pf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Yr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(sP(this.i,this.A),this.L!=2&&(Tt(),rt(17)),Ki(this),this.s=2,_a(this)):Gy(this,this.S-u)};function _a(u){u.j.G==0||u.J||vv(u.j,u)}function Ki(u){pf(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,Vu(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function mf(u,d){try{var p=u.j;if(p.G!=0&&(p.g==u||gf(p.h,u))){if(!u.K&&gf(p.h,u)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)Ku(p),qu(p);else break e;wf(p),rt(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=zn(m(p.Za,p),6e3));if(1>=Yy(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Yi(p,11)}else if((u.K||p.g==u)&&Ku(p),!g(d))for(D=p.Da.g.parse(d),d=0;d<D.length;d++){let Ne=D[d];if(p.T=Ne[0],Ne=Ne[1],p.G==2)if(Ne[0]=="c"){p.K=Ne[1],p.ia=Ne[2];const Ut=Ne[3];Ut!=null&&(p.la=Ut,p.j.info("VER="+p.la));const $t=Ne[4];$t!=null&&(p.Aa=$t,p.j.info("SVER="+p.Aa));const Qs=Ne[5];Qs!=null&&typeof Qs=="number"&&0<Qs&&(_=1.5*Qs,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Hn=u.g;if(Hn){const Yu=Hn.g?Hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yu){var V=_.h;V.g||Yu.indexOf("spdy")==-1&&Yu.indexOf("quic")==-1&&Yu.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(_f(V,V.h),V.h=null))}if(_.D){const Tf=Hn.g?Hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Tf&&(_.ya=Tf,We(_.I,_.D,Tf))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var G=u;if(_.qa=Tv(_,_.J?_.ia:null,_.W),G.K){Xy(_.h,G);var Fe=G,bt=_.L;bt&&(Fe.I=bt),Fe.B&&(pf(Fe),$u(Fe)),_.g=G}else _v(_);0<p.i.length&&Gu(p)}else Ne[0]!="stop"&&Ne[0]!="close"||Yi(p,7);else p.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Yi(p,7):vf(p):Ne[0]!="noop"&&p.l&&p.l.ta(Ne),p.v=0)}}Tt(4)}catch{}}var lP=class{constructor(u,d){this.g=u,this.map=d}};function Ky(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qy(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Yy(u){return u.h?1:u.g?u.g.size:0}function gf(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function _f(u,d){u.g?u.g.add(d):u.h=d}function Xy(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}Ky.prototype.cancel=function(){if(this.i=Jy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Jy(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const p of u.g.values())d=d.concat(p.D);return d}return C(u.i)}function uP(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],p=u.length,_=0;_<p;_++)d.push(u[_]);return d}d=[],p=0;for(_ in u)d[p++]=u[_];return d}function cP(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var p=0;p<u;p++)d.push(p);return d}d=[],p=0;for(const _ in u)d[p++]=_;return d}}}function Zy(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var p=cP(u),_=uP(u),D=_.length,V=0;V<D;V++)d.call(void 0,_[V],p&&p[V],u)}var ev=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hP(u,d){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var _=u[p].indexOf("="),D=null;if(0<=_){var V=u[p].substring(0,_);D=u[p].substring(_+1)}else V=u[p];d(V,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Qi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Qi){this.h=u.h,Bu(this,u.j),this.o=u.o,this.g=u.g,ju(this,u.s),this.l=u.l;var d=u.i,p=new wa;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),tv(this,p),this.m=u.m}else u&&(d=String(u).match(ev))?(this.h=!1,Bu(this,d[1]||"",!0),this.o=ya(d[2]||""),this.g=ya(d[3]||"",!0),ju(this,d[4]),this.l=ya(d[5]||"",!0),tv(this,d[6]||"",!0),this.m=ya(d[7]||"")):(this.h=!1,this.i=new wa(null,this.h))}Qi.prototype.toString=function(){var u=[],d=this.j;d&&u.push(va(d,nv,!0),":");var p=this.g;return(p||d=="file")&&(u.push("//"),(d=this.o)&&u.push(va(d,nv,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(va(p,p.charAt(0)=="/"?pP:fP,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",va(p,gP)),u.join("")};function Ir(u){return new Qi(u)}function Bu(u,d,p){u.j=p?ya(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function ju(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function tv(u,d,p){d instanceof wa?(u.i=d,_P(u.i,u.h)):(p||(d=va(d,mP)),u.i=new wa(d,u.h))}function We(u,d,p){u.i.set(d,p)}function zu(u){return We(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ya(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function va(u,d,p){return typeof u=="string"?(u=encodeURI(u).replace(d,dP),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function dP(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var nv=/[#\/\?@]/g,fP=/[#\?:]/g,pP=/[#\?]/g,mP=/[#\?@]/g,gP=/#/g;function wa(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Xr(u){u.g||(u.g=new Map,u.h=0,u.i&&hP(u.i,function(d,p){u.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=wa.prototype,t.add=function(u,d){Xr(this),this.i=null,u=Gs(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(d),this.h+=1,this};function rv(u,d){Xr(u),d=Gs(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function iv(u,d){return Xr(u),d=Gs(u,d),u.g.has(d)}t.forEach=function(u,d){Xr(this),this.g.forEach(function(p,_){p.forEach(function(D){u.call(d,D,_,this)},this)},this)},t.na=function(){Xr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const D=u[_];for(let V=0;V<D.length;V++)p.push(d[_])}return p},t.V=function(u){Xr(this);let d=[];if(typeof u=="string")iv(this,u)&&(d=d.concat(this.g.get(Gs(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)d=d.concat(u[p])}return d},t.set=function(u,d){return Xr(this),this.i=null,u=Gs(this,u),iv(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function sv(u,d,p){rv(u,d),0<p.length&&(u.i=null,u.g.set(Gs(u,d),C(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const V=encodeURIComponent(String(_)),G=this.V(_);for(_=0;_<G.length;_++){var D=V;G[_]!==""&&(D+="="+encodeURIComponent(String(G[_]))),u.push(D)}}return this.i=u.join("&")};function Gs(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function _P(u,d){d&&!u.j&&(Xr(u),u.i=null,u.g.forEach(function(p,_){var D=_.toLowerCase();_!=D&&(rv(this,_),sv(this,D,p))},u)),u.j=d}function yP(u,d){const p=new Wn;if(a.Image){const _=new Image;_.onload=y(Jr,p,"TestLoadImage: loaded",!0,d,_),_.onerror=y(Jr,p,"TestLoadImage: error",!1,d,_),_.onabort=y(Jr,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=y(Jr,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else d(!1)}function vP(u,d){const p=new Wn,_=new AbortController,D=setTimeout(()=>{_.abort(),Jr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:_.signal}).then(V=>{clearTimeout(D),V.ok?Jr(p,"TestPingServer: ok",!0,d):Jr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Jr(p,"TestPingServer: error",!1,d)})}function Jr(u,d,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function wP(){this.g=new z}function EP(u,d,p){const _=p||"";try{Zy(u,function(D,V){let G=D;c(D)&&(G=M(D)),d.push(_+V+"="+encodeURIComponent(G))})}catch(D){throw d.push(_+"type="+encodeURIComponent("_badmap")),D}}function Ea(u){this.l=u.Ub||null,this.j=u.eb||!1}w(Ea,Q),Ea.prototype.g=function(){return new Wu(this.l,this.j)},Ea.prototype.i=function(u){return function(){return u}}({});function Wu(u,d){Et.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Wu,Et),t=Wu.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Sa(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ta(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Sa(this)),this.g&&(this.readyState=3,Sa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ov(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ov(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?Ta(this):Sa(this),this.readyState==3&&ov(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Ta(this))},t.Qa=function(u){this.g&&(this.response=u,Ta(this))},t.ga=function(){this.g&&Ta(this)};function Ta(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Sa(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=d.next();return u.join(`\r
`)};function Sa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function av(u){let d="";return $(u,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function yf(u,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=av(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):We(u,d,p))}function it(u){Et.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(it,Et);var TP=/^https?$/i,SP=["POST","PUT"];t=it.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hf.g(),this.v=this.o?Y(this.o):Y(hf),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(V){lv(this,V);return}if(u=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())p.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(SP,d,void 0))||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of p)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hv(this),this.u=!0,this.g.send(u),this.u=!1}catch(V){lv(this,V)}};function lv(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,uv(u),Hu(u)}function uv(u){u.A||(u.A=!0,Nt(u,"complete"),Nt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Nt(this,"complete"),Nt(this,"abort"),Hu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hu(this,!0)),it.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cv(this):this.bb())},t.bb=function(){cv(this)};function cv(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Rr(u)!=4||u.Z()!=2)){if(u.u&&Rr(u)==4)Lu(u.Ea,0,u);else if(Nt(u,"readystatechange"),Rr(u)==4){u.h=!1;try{const G=u.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=G===0){var D=String(u.D).match(ev)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),_=!TP.test(D?D.toLowerCase():"")}p=_}if(p)Nt(u,"complete"),Nt(u,"success");else{u.m=6;try{var V=2<Rr(u)?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.Z()+"]",uv(u)}}finally{Hu(u)}}}}function Hu(u,d){if(u.g){hv(u);const p=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||Nt(u,"ready");try{p.onreadystatechange=_}catch{}}}function hv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Rr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Rr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),N(d)}};function dv(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function IP(u){const d={};u=(u.g&&2<=Rr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(g(u[_]))continue;var p=k(u[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=d[D]||[];d[D]=V,V.push(p)}S(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ia(u,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||d}function fv(u){this.Aa=0,this.i=[],this.j=new Wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ia("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ia("baseRetryDelayMs",5e3,u),this.cb=Ia("retryDelaySeedMs",1e4,u),this.Wa=Ia("forwardChannelMaxRetries",2,u),this.wa=Ia("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ky(u&&u.concurrentRequestLimit),this.Da=new wP,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fv.prototype,t.la=8,t.G=1,t.connect=function(u,d,p,_){rt(0),this.W=u,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Tv(this,null,this.W),Gu(this)};function vf(u){if(pv(u),u.G==3){var d=u.U++,p=Ir(u.I);if(We(p,"SID",u.K),We(p,"RID",d),We(p,"TYPE","terminate"),Ra(u,p),d=new Yr(u,u.j,d),d.L=2,d.v=zu(Ir(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Sv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),$u(d)}Ev(u)}function qu(u){u.g&&(Ef(u),u.g.cancel(),u.g=null)}function pv(u){qu(u),u.u&&(a.clearTimeout(u.u),u.u=null),Ku(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Gu(u){if(!Qy(u.h)&&!u.s){u.s=!0;var d=u.Ga;pt||J(),K||(pt(),K=!0),ae.add(d,u),u.B=0}}function RP(u,d){return Yy(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=zn(m(u.Ga,u,d),wv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new Yr(this,this.j,u);let V=this.o;if(this.S&&(V?(V=v(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(D.H=V,V=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=gv(this,D,d),p=Ir(this.I),We(p,"RID",u),We(p,"CVER",22),this.D&&We(p,"X-HTTP-Session-Id",this.D),Ra(this,p),V&&(this.O?d="headers="+encodeURIComponent(String(av(V)))+"&"+d:this.m&&yf(p,this.m,V)),_f(this.h,D),this.Ua&&We(p,"TYPE","init"),this.P?(We(p,"$req",d),We(p,"SID","null"),D.T=!0,ff(D,p,null)):ff(D,p,d),this.G=2}}else this.G==3&&(u?mv(this,u):this.i.length==0||Qy(this.h)||mv(this))};function mv(u,d){var p;d?p=d.l:p=u.U++;const _=Ir(u.I);We(_,"SID",u.K),We(_,"RID",p),We(_,"AID",u.T),Ra(u,_),u.m&&u.o&&yf(_,u.m,u.o),p=new Yr(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),d&&(u.i=d.D.concat(u.i)),d=gv(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),_f(u.h,p),ff(p,_,d)}function Ra(u,d){u.H&&$(u.H,function(p,_){We(d,_,p)}),u.l&&Zy({},function(p,_){We(d,_,p)})}function gv(u,d,p){p=Math.min(u.i.length,p);var _=u.l?m(u.l.Na,u.l,u):null;e:{var D=u.i;let V=-1;for(;;){const G=["count="+p];V==-1?0<p?(V=D[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let Fe=!0;for(let bt=0;bt<p;bt++){let Ne=D[bt].g;const Ut=D[bt].map;if(Ne-=V,0>Ne)V=Math.max(0,D[bt].g-100),Fe=!1;else try{EP(Ut,G,"req"+Ne+"_")}catch{_&&_(Ut)}}if(Fe){_=G.join("&");break e}}}return u=u.i.splice(0,p),d.D=u,_}function _v(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;pt||J(),K||(pt(),K=!0),ae.add(d,u),u.v=0}}function wf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=zn(m(u.Fa,u),wv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,yv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=zn(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),qu(this),yv(this))};function Ef(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function yv(u){u.g=new Yr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=Ir(u.qa);We(d,"RID","rpc"),We(d,"SID",u.K),We(d,"AID",u.T),We(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&We(d,"TO",u.ja),We(d,"TYPE","xmlhttp"),Ra(u,d),u.m&&u.o&&yf(d,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=zu(Ir(d)),p.m=null,p.P=!0,Hy(p,u)}t.Za=function(){this.C!=null&&(this.C=null,qu(this),wf(this),rt(19))};function Ku(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function vv(u,d){var p=null;if(u.g==d){Ku(u),Ef(u),u.g=null;var _=2}else if(gf(u.h,d))p=d.D,Xy(u.h,d),_=1;else return;if(u.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var D=u.B;_=mt(),Nt(_,new Gi(_,p)),Gu(u)}else _v(u);else if(D=d.s,D==3||D==0&&0<d.X||!(_==1&&RP(u,d)||_==2&&wf(u)))switch(p&&0<p.length&&(d=u.h,d.i=d.i.concat(p)),D){case 1:Yi(u,5);break;case 4:Yi(u,10);break;case 3:Yi(u,6);break;default:Yi(u,2)}}}function wv(u,d){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*d}function Yi(u,d){if(u.j.info("Error code "+d),d==2){var p=m(u.fb,u),_=u.Xa;const D=!_;_=new Qi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Bu(_,"https"),zu(_),D?yP(_.toString(),p):vP(_.toString(),p)}else rt(2);u.G=0,u.l&&u.l.sa(d),Ev(u),pv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Ev(u){if(u.G=0,u.ka=[],u.l){const d=Jy(u.h);(d.length!=0||u.i.length!=0)&&(P(u.ka,d),P(u.ka,u.i),u.h.i.length=0,C(u.i),u.i.length=0),u.l.ra()}}function Tv(u,d,p){var _=p instanceof Qi?Ir(p):new Qi(p);if(_.g!="")d&&(_.g=d+"."+_.g),ju(_,_.s);else{var D=a.location;_=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var V=new Qi(null);_&&Bu(V,_),d&&(V.g=d),D&&ju(V,D),p&&(V.l=p),_=V}return p=u.D,d=u.ya,p&&d&&We(_,p,d),We(_,"VER",u.la),Ra(u,_),_}function Sv(u,d,p){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new it(new Ea({eb:p})):new it(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iv(){}t=Iv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qu(){}Qu.prototype.g=function(u,d){return new Tn(u,d)};function Tn(u,d){Et.call(this),this.g=new fv(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!g(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!g(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Ks(this)}w(Tn,Et),Tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tn.prototype.close=function(){vf(this.g)},Tn.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=M(u),u=p);d.i.push(new lP(d.Ya++,u)),d.G==3&&Gu(d)},Tn.prototype.N=function(){this.g.l=null,delete this.j,vf(this.g),delete this.g,Tn.aa.N.call(this)};function Rv(u){le.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const p in d){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}w(Rv,le);function Cv(){ue.call(this),this.status=1}w(Cv,ue);function Ks(u){this.g=u}w(Ks,Iv),Ks.prototype.ua=function(){Nt(this.g,"a")},Ks.prototype.ta=function(u){Nt(this.g,new Rv(u))},Ks.prototype.sa=function(u){Nt(this.g,new Cv)},Ks.prototype.ra=function(){Nt(this.g,"b")},Qu.prototype.createWebChannel=Qu.prototype.g,Tn.prototype.send=Tn.prototype.o,Tn.prototype.open=Tn.prototype.m,Tn.prototype.close=Tn.prototype.close,cC=function(){return new Qu},uC=function(){return mt()},lC=pe,xm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fu.NO_ERROR=0,Fu.TIMEOUT=8,Fu.HTTP_ERROR=6,jc=Fu,jy.COMPLETE="complete",aC=jy,ee.EventType=oe,oe.OPEN="a",oe.CLOSE="b",oe.ERROR="c",oe.MESSAGE="d",Et.prototype.listen=Et.prototype.K,Ya=ee,oC=Ea,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,sC=it}).apply(typeof mc<"u"?mc:typeof self<"u"?self:typeof window<"u"?window:{});const Nw="@firebase/firestore";/**
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
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
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
 */let aa="10.12.3";/**
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
 */const Es=new au("@firebase/firestore");function La(){return Es.logLevel}function ne(t,...e){if(Es.logLevel<=Te.DEBUG){const n=e.map(k_);Es.debug(`Firestore (${aa}): ${t}`,...n)}}function Wr(t,...e){if(Es.logLevel<=Te.ERROR){const n=e.map(k_);Es.error(`Firestore (${aa}): ${t}`,...n)}}function $o(t,...e){if(Es.logLevel<=Te.WARN){const n=e.map(k_);Es.warn(`Firestore (${aa}): ${t}`,...n)}}function k_(t){if(typeof t=="string")return t;try{/**
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${aa}) INTERNAL ASSERTION FAILED: `+t;throw Wr(e),new Error(e)}function ze(t,e){t||me()}function _e(t,e){return t}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends or{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ri{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Wt.UNAUTHENTICATED))}shutdown(){}}class pV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mV{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ri;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ri,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ri)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string"),new hC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string"),new Wt(e)}}class gV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _V{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new gV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string"),this.R=n.token,new yV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function wV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class dC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=wV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Bo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class vt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new vt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Hl{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ot extends Hl{construct(e,n,r){return new ot(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ot(n)}static emptyPath(){return new ot([])}}const EV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lt extends Hl{construct(e,n,r){return new Lt(e,n,r)}static isValidIdentifier(e){return EV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ce(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ce(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ce(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Lt(n)}static emptyPath(){return new Lt([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(ot.fromString(e))}static fromName(e){return new he(ot.fromString(e).popFirst(5))}static empty(){return new he(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ot.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new ot(e.slice()))}}function TV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ge.fromTimestamp(r===1e9?new vt(n+1,0):new vt(n,r));return new Ni(i,he.empty(),e)}function SV(t){return new Ni(t.readTime,t.key,-1)}class Ni{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ni(ge.min(),he.empty(),-1)}static max(){return new Ni(ge.max(),he.empty(),-1)}}function IV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const RV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fu(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==RV)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function AV(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function pu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class P_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}P_.oe=-1;function Td(t){return t==null}function Nh(t){return t===0&&1/t==-1/0}function kV(t){return typeof t=="number"&&Number.isInteger(t)&&!Nh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function bw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let ft=class Dm{constructor(e,n){this.comparator=e,this.root=n||Ci.EMPTY}insert(e,n){return new Dm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ci.BLACK,null,null))}remove(e){return new Dm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ci.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gc(this.root,e,this.comparator,!1)}getReverseIterator(){return new gc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gc(this.root,e,this.comparator,!0)}},gc=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ci=class Ar{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ar.RED,this.left=i??Ar.EMPTY,this.right=s??Ar.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ar(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ar.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ar.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ar.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ar.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}};Ci.EMPTY=null,Ci.RED=!0,Ci.BLACK=!1;Ci.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ci(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Mt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xw(this.data.getIterator())}getIteratorFrom(e){return new xw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Mt(this.comparator);return n.data=e,n}}class xw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rn{constructor(e){this.fields=e,e.sort(Lt.comparator)}static empty(){return new Rn([])}unionWith(e){let n=new Mt(Lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pC("Invalid base64 string: "+s):s}}(e);return new Jt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const PV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(t){if(ze(!!t),typeof t=="string"){let e=0;const n=PV.exec(t);if(ze(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ts(t){return typeof t=="string"?Jt.fromBase64String(t):Jt.fromUint8Array(t)}/**
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
 */function N_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function b_(t){const e=t.mapValue.fields.__previous_value__;return N_(e)?b_(e):e}function ql(t){const e=bi(t.mapValue.fields.__local_write_time__.timestampValue);return new vt(e.seconds,e.nanos)}/**
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
 */class NV{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Gl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const _c={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?N_(t)?4:bV(t)?9007199254740991:10:me()}function wr(t,e){if(t===e)return!0;const n=Ss(t);if(n!==Ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ql(t).isEqual(ql(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=bi(i.timestampValue),a=bi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ts(i.bytesValue).isEqual(Ts(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ct(i.geoPointValue.latitude)===ct(s.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ct(i.integerValue)===ct(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ct(i.doubleValue),a=ct(s.doubleValue);return o===a?Nh(o)===Nh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Bo(t.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(bw(o)!==bw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!wr(o[l],a[l])))return!1;return!0}(t,e);default:return me()}}function Kl(t,e){return(t.values||[]).find(n=>wr(n,e))!==void 0}function jo(t,e){if(t===e)return 0;const n=Ss(t),r=Ss(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ct(s.integerValue||s.doubleValue),l=ct(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Dw(t.timestampValue,e.timestampValue);case 4:return Dw(ql(t),ql(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ts(s),l=Ts(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=be(a[c],l[c]);if(h!==0)return h}return be(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=be(ct(s.latitude),ct(o.latitude));return a!==0?a:be(ct(s.longitude),ct(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=jo(a[c],l[c]);if(h)return h}return be(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===_c.mapValue&&o===_c.mapValue)return 0;if(s===_c.mapValue)return 1;if(o===_c.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=be(l[f],h[f]);if(m!==0)return m;const y=jo(a[l[f]],c[h[f]]);if(y!==0)return y}return be(l.length,h.length)}(t.mapValue,e.mapValue);default:throw me()}}function Dw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=bi(t),r=bi(e),i=be(n.seconds,r.seconds);return i!==0?i:be(n.nanos,r.nanos)}function zo(t){return Lm(t)}function Lm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=bi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Lm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Lm(n.fields[o])}`;return i+"}"}(t.mapValue):me()}function Om(t){return!!t&&"integerValue"in t}function x_(t){return!!t&&"arrayValue"in t}function Lw(t){return!!t&&"nullValue"in t}function Ow(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zc(t){return!!t&&"mapValue"in t}function hl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=hl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bV(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hl(n)}setAll(e){let n=Lt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=hl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());zc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];zc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Vs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new cn(hl(this.value))}}function mC(t){const e=[];return Vs(t.fields,(n,r)=>{const i=new Lt([n]);if(zc(r)){const s=mC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Rn(e)}/**
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
 */class qt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new qt(e,0,ge.min(),ge.min(),ge.min(),cn.empty(),0)}static newFoundDocument(e,n,r,i){return new qt(e,1,n,ge.min(),r,i,0)}static newNoDocument(e,n){return new qt(e,2,n,ge.min(),ge.min(),cn.empty(),0)}static newUnknownDocument(e,n){return new qt(e,3,n,ge.min(),ge.min(),cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bh{constructor(e,n){this.position=e,this.inclusive=n}}function Mw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=jo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xh{constructor(e,n="asc"){this.field=e,this.dir=n}}function xV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gC{}class _t extends gC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LV(e,n,r):n==="array-contains"?new VV(e,r):n==="in"?new FV(e,r):n==="not-in"?new UV(e,r):n==="array-contains-any"?new $V(e,r):new _t(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OV(e,r):new MV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(jo(n,this.value)):n!==null&&Ss(this.value)===Ss(n)&&this.matchesComparison(jo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Er extends gC{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Er(e,n)}matches(e){return _C(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _C(t){return t.op==="and"}function yC(t){return DV(t)&&_C(t)}function DV(t){for(const e of t.filters)if(e instanceof Er)return!1;return!0}function Mm(t){if(t instanceof _t)return t.field.canonicalString()+t.op.toString()+zo(t.value);if(yC(t))return t.filters.map(e=>Mm(e)).join(",");{const e=t.filters.map(n=>Mm(n)).join(",");return`${t.op}(${e})`}}function vC(t,e){return t instanceof _t?function(r,i){return i instanceof _t&&r.op===i.op&&r.field.isEqual(i.field)&&wr(r.value,i.value)}(t,e):t instanceof Er?function(r,i){return i instanceof Er&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&vC(o,i.filters[a]),!0):!1}(t,e):void me()}function wC(t){return t instanceof _t?function(n){return`${n.field.canonicalString()} ${n.op} ${zo(n.value)}`}(t):t instanceof Er?function(n){return n.op.toString()+" {"+n.getFilters().map(wC).join(" ,")+"}"}(t):"Filter"}class LV extends _t{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class OV extends _t{constructor(e,n){super(e,"in",n),this.keys=EC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MV extends _t{constructor(e,n){super(e,"not-in",n),this.keys=EC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function EC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class VV extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return x_(n)&&Kl(n.arrayValue,this.value)}}class FV extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Kl(this.value.arrayValue,n)}}class UV extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(Kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Kl(this.value.arrayValue,n)}}class $V extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!x_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Kl(this.value.arrayValue,r))}}/**
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
 */class BV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Fw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BV(t,e,n,r,i,s,o)}function D_(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Td(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zo(r)).join(",")),e.ue=n}return e.ue}function L_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vw(t.startAt,e.startAt)&&Vw(t.endAt,e.endAt)}function Vm(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Sd{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jV(t,e,n,r,i,s,o,a){return new Sd(t,e,n,r,i,s,o,a)}function O_(t){return new Sd(t)}function Uw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zV(t){return t.collectionGroup!==null}function dl(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Mt(Lt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new xh(s,r))}),n.has(Lt.keyField().canonicalString())||e.ce.push(new xh(Lt.keyField(),r))}return e.ce}function _r(t){const e=_e(t);return e.le||(e.le=WV(e,dl(t))),e.le}function WV(t,e){if(t.limitType==="F")return Fw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new xh(i.field,s)});const n=t.endAt?new bh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bh(t.startAt.position,t.startAt.inclusive):null;return Fw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fm(t,e,n){return new Sd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Id(t,e){return L_(_r(t),_r(e))&&t.limitType===e.limitType}function TC(t){return`${D_(_r(t))}|lt:${t.limitType}`}function Zs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>wC(i)).join(", ")}]`),Td(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>zo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>zo(i)).join(",")),`Target(${r})`}(_r(t))}; limitType=${t.limitType})`}function Rd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):he.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of dl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Mw(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,dl(r),i)||r.endAt&&!function(o,a,l){const c=Mw(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,dl(r),i))}(t,e)}function HV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function SC(t){return(e,n)=>{let r=!1;for(const i of dl(t)){const s=qV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qV(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?jo(l,c):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
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
 */class la{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return fC(this.inner)}size(){return this.innerSize}}/**
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
 */const GV=new ft(he.comparator);function Hr(){return GV}const IC=new ft(he.comparator);function Xa(...t){let e=IC;for(const n of t)e=e.insert(n.key,n);return e}function RC(t){let e=IC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function os(){return fl()}function CC(){return fl()}function fl(){return new la(t=>t.toString(),(t,e)=>t.isEqual(e))}const KV=new ft(he.comparator),QV=new Mt(he.comparator);function Se(...t){let e=QV;for(const n of t)e=e.add(n);return e}const YV=new Mt(be);function XV(){return YV}/**
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
 */function AC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nh(e)?"-0":e}}function kC(t){return{integerValue:""+t}}function JV(t,e){return kV(e)?kC(e):AC(t,e)}/**
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
 */class Cd{constructor(){this._=void 0}}function ZV(t,e,n){return t instanceof Dh?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&N_(s)&&(s=b_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ql?NC(t,e):t instanceof Yl?bC(t,e):function(i,s){const o=PC(i,s),a=$w(o)+$w(i.Pe);return Om(o)&&Om(i.Pe)?kC(a):AC(i.serializer,a)}(t,e)}function eF(t,e,n){return t instanceof Ql?NC(t,e):t instanceof Yl?bC(t,e):n}function PC(t,e){return t instanceof Lh?function(r){return Om(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Dh extends Cd{}class Ql extends Cd{constructor(e){super(),this.elements=e}}function NC(t,e){const n=xC(e);for(const r of t.elements)n.some(i=>wr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Yl extends Cd{constructor(e){super(),this.elements=e}}function bC(t,e){let n=xC(e);for(const r of t.elements)n=n.filter(i=>!wr(i,r));return{arrayValue:{values:n}}}class Lh extends Cd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function $w(t){return ct(t.integerValue||t.doubleValue)}function xC(t){return x_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ql&&i instanceof Ql||r instanceof Yl&&i instanceof Yl?Bo(r.elements,i.elements,wr):r instanceof Lh&&i instanceof Lh?wr(r.Pe,i.Pe):r instanceof Dh&&i instanceof Dh}(t.transform,e.transform)}class nF{constructor(e,n){this.version=e,this.transformResults=n}}class yr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yr}static exists(e){return new yr(void 0,e)}static updateTime(e){return new yr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ad{}function DC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new OC(t.key,yr.none()):new mu(t.key,t.data,yr.none());{const n=t.data,r=cn.empty();let i=new Mt(Lt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ji(t.key,r,new Rn(i.toArray()),yr.none())}}function rF(t,e,n){t instanceof mu?function(i,s,o){const a=i.value.clone(),l=jw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ji?function(i,s,o){if(!Wc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=jw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(LC(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pl(t,e,n,r){return t instanceof mu?function(s,o,a,l){if(!Wc(s.precondition,o))return a;const c=s.value.clone(),h=zw(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ji?function(s,o,a,l){if(!Wc(s.precondition,o))return a;const c=zw(s.fieldTransforms,l,o),h=o.data;return h.setAll(LC(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Wc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function iF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=PC(r.transform,i||null);s!=null&&(n===null&&(n=cn.empty()),n.set(r.field,s))}return n||null}function Bw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bo(r,i,(s,o)=>tF(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mu extends Ad{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ji extends Ad{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function LC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jw(t,e,n){const r=new Map;ze(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,eF(o,a,n[i]))}return r}function zw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZV(s,o,e))}return r}class OC extends Ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sF extends Ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class oF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&rF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=CC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=DC(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&Bo(this.mutations,e.mutations,(n,r)=>Bw(n,r))&&Bo(this.baseMutations,e.baseMutations,(n,r)=>Bw(n,r))}}class M_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ze(e.mutations.length===r.length);let i=function(){return KV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new M_(e,n,r,i)}}/**
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
 */class aF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ut,Re;function uF(t){switch(t){default:return me();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function MC(t){if(t===void 0)return Wr("GRPC error has no .code"),W.UNKNOWN;switch(t){case ut.OK:return W.OK;case ut.CANCELLED:return W.CANCELLED;case ut.UNKNOWN:return W.UNKNOWN;case ut.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ut.INTERNAL:return W.INTERNAL;case ut.UNAVAILABLE:return W.UNAVAILABLE;case ut.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ut.NOT_FOUND:return W.NOT_FOUND;case ut.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ut.ABORTED:return W.ABORTED;case ut.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ut.DATA_LOSS:return W.DATA_LOSS;default:return me()}}(Re=ut||(ut={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cF(){return new TextEncoder}/**
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
 */const hF=new cs([4294967295,4294967295],0);function Ww(t){const e=cF().encode(t),n=new iC;return n.update(e),new Uint8Array(n.digest())}function Hw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cs([n,r],0),new cs([i,s],0)]}class V_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ja(`Invalid padding: ${n}`);if(r<0)throw new Ja(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=cs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(cs.fromNumber(r)));return i.compare(hF)===1&&(i=new cs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ww(e),[r,i]=Hw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new V_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Ww(e),[r,i]=Hw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,gu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kd(ge.min(),i,new ft(be),Hr(),Se())}}class gu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gu(r,n,Se(),Se(),Se())}}/**
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
 */class Hc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class VC{constructor(e,n){this.targetId=e,this.me=n}}class FC{constructor(e,n,r=Jt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qw{constructor(){this.fe=0,this.ge=Kw(),this.pe=Jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Se(),n=Se(),r=Se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:me()}}),new gu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Kw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ze(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class dF{constructor(e){this.Le=e,this.Be=new Map,this.ke=Hr(),this.qe=Gw(),this.Qe=new ft(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Vm(s))if(r===0){const o=new he(s.path);this.Ue(n,o,qt.newNoDocument(o,ge.min()))}else ze(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ts(r).toUint8Array()}catch(l){if(l instanceof pC)return $o("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new V_(o,i,s)}catch(l){return $o(l instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Vm(a.target)){const l=new he(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,qt.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=Se();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new kd(e,n,this.Qe,this.ke,r);return this.ke=Hr(),this.qe=Gw(),this.Qe=new ft(be),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new qw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Mt(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new qw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Gw(){return new ft(he.comparator)}function Kw(){return new ft(he.comparator)}const fF={asc:"ASCENDING",desc:"DESCENDING"},pF={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mF={and:"AND",or:"OR"};class gF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Um(t,e){return t.useProto3Json||Td(e)?e:{value:e}}function Oh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function UC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _F(t,e){return Oh(t,e.toTimestamp())}function vr(t){return ze(!!t),ge.fromTimestamp(function(n){const r=bi(n);return new vt(r.seconds,r.nanos)}(t))}function F_(t,e){return $m(t,e).canonicalString()}function $m(t,e){const n=function(i){return new ot(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $C(t){const e=ot.fromString(t);return ze(HC(e)),e}function Bm(t,e){return F_(t.databaseId,e.path)}function op(t,e){const n=$C(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(jC(n))}function BC(t,e){return F_(t.databaseId,e)}function yF(t){const e=$C(t);return e.length===4?ot.emptyPath():jC(e)}function jm(t){return new ot(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jC(t){return ze(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qw(t,e,n){return{name:Bm(t,e),fields:n.value.mapValue.fields}}function vF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ze(h===void 0||typeof h=="string"),Jt.fromBase64String(h||"")):(ze(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Jt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?W.UNKNOWN:MC(c.code);return new ce(h,c.message||"")}(o);n=new FC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=op(t,r.document.name),s=vr(r.document.updateTime),o=r.document.createTime?vr(r.document.createTime):ge.min(),a=new cn({mapValue:{fields:r.document.fields}}),l=qt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Hc(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=op(t,r.document),s=r.readTime?vr(r.readTime):ge.min(),o=qt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Hc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=op(t,r.document),s=r.removedTargetIds||[];n=new Hc([],s,i,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new lF(i,s),a=r.targetId;n=new VC(a,o)}}return n}function wF(t,e){let n;if(e instanceof mu)n={update:Qw(t,e.key,e.value)};else if(e instanceof OC)n={delete:Bm(t,e.key)};else if(e instanceof ji)n={update:Qw(t,e.key,e.data),updateMask:PF(e.fieldMask)};else{if(!(e instanceof sF))return me();n={verify:Bm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Dh)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ql)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Yl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Lh)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_F(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:me()}(t,e.precondition)),n}function EF(t,e){return t&&t.length>0?(ze(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?vr(i.updateTime):vr(s);return o.isEqual(ge.min())&&(o=vr(s)),new nF(o,i.transformResults||[])}(n,e))):[]}function TF(t,e){return{documents:[BC(t,e.path)]}}function SF(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=BC(t,i);const s=function(c){if(c.length!==0)return WC(Er.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:eo(m.field),direction:CF(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Um(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function IF(t){let e=yF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ze(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=zC(f);return m instanceof Er&&yC(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(w){return new xh(to(w.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Td(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,y=f.values||[];return new bh(y,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,y=f.values||[];return new bh(y,m)}(n.endAt)),jV(e,i,o,s,a,"F",l,c)}function RF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=to(n.unaryFilter.field);return _t.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=to(n.unaryFilter.field);return _t.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=to(n.unaryFilter.field);return _t.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=to(n.unaryFilter.field);return _t.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return _t.create(to(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Er.create(n.compositeFilter.filters.map(r=>zC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function CF(t){return fF[t]}function AF(t){return pF[t]}function kF(t){return mF[t]}function eo(t){return{fieldPath:t.canonicalString()}}function to(t){return Lt.fromServerFormat(t.fieldPath)}function WC(t){return t instanceof _t?function(n){if(n.op==="=="){if(Ow(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NAN"}};if(Lw(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ow(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NAN"}};if(Lw(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eo(n.field),op:AF(n.op),value:n.value}}}(t):t instanceof Er?function(n){const r=n.getFilters().map(i=>WC(i));return r.length===1?r[0]:{compositeFilter:{op:kF(n.op),filters:r}}}(t):me()}function PF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function HC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class fi{constructor(e,n,r,i,s=ge.min(),o=ge.min(),a=Jt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new fi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class NF{constructor(e){this.ct=e}}function bF(t){const e=IF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fm(e,e.limit,"L"):e}/**
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
 */class xF{constructor(){this._n=new DF}addToCollectionParentIndex(e,n){return this._n.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Ni.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Ni.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class DF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Mt(ot.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Mt(ot.comparator)).toArray()}}/**
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
 */class Wo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Wo(0)}static Ln(){return new Wo(-1)}}/**
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
 */class LF{constructor(){this.changes=new la(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class OF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class MF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&pl(r.mutation,i,Rn.empty(),vt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Se()){const i=os();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=os();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Hr();const o=fl(),a=function(){return fl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof ji)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),pl(h.mutation,c,h.mutation.getFieldMask(),vt.now())):o.set(c.key,Rn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new OF(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fl();let i=new ft((o,a)=>o-a),s=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Rn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||Se()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=CC();h.forEach(m=>{if(!s.has(m)){const y=DC(n.get(m),r.get(m));y!==null&&f.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zV(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(os());let a=-1,l=s;return o.next(c=>j.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,Se())).next(h=>({batchId:a,changes:RC(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let i=Xa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xa();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,l=>{const c=function(f,m){return new Sd(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,qt.newInvalidDocument(h)))});let a=Xa();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&pl(h.mutation,c,Rn.empty(),vt.now()),Rd(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class VF{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return j.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vr(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:bF(i.bundledQuery),readTime:vr(i.readTime)}}(n)),j.resolve()}}/**
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
 */class FF{constructor(){this.overlays=new ft(he.comparator),this.hr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=os();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=os(),s=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ft((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=os(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=os(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aF(n,r));let s=this.hr.get(n);s===void 0&&(s=Se(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class U_{constructor(){this.Pr=new Mt(It.Ir),this.Tr=new Mt(It.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new It(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new It(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new he(new ot([])),r=new It(n,e),i=new It(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new he(new ot([])),r=new It(n,e),i=new It(n,e+1);let s=Se();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new It(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class It{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return he.comparator(e.key,n.key)||be(e.pr,n.pr)}static Er(e,n){return be(e.pr,n.pr)||he.comparator(e.key,n.key)}}/**
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
 */class UF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Mt(It.Ir)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new It(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new It(n,0),i=new It(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Mt(be);return n.forEach(i=>{const s=new It(i,0),o=new It(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),j.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;he.isDocumentKey(s)||(s=s.child(""));const o=new It(new he(s),0);let a=new Mt(be);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),j.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ze(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return j.forEach(n.mutations,i=>{const s=new It(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new It(n,0),i=this.wr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $F{constructor(e){this.vr=e,this.docs=function(){return new ft(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():qt.newInvalidDocument(n))}getEntries(e,n){let r=Hr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():qt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Hr();const o=n.path,a=new he(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||IV(SV(h),r)<=0||(i.has(h.key)||Rd(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){me()}Fr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BF(this)}getSize(e){return j.resolve(this.size)}}class BF extends LF{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class jF{constructor(e){this.persistence=e,this.Mr=new la(n=>D_(n),L_),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Or=0,this.Nr=new U_,this.targetCount=0,this.Lr=Wo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),j.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Wo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.qn(n),j.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Nr.containsKey(n))}}/**
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
 */class zF{constructor(e,n){this.Br={},this.overlays={},this.kr=new P_(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new jF(this),this.indexManager=new xF,this.remoteDocumentCache=function(i){return new $F(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new NF(n),this.$r=new VF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new UF(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const i=new WF(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return j.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class WF extends CV{constructor(e){super(),this.currentSequenceNumber=e}}class $_{constructor(e){this.persistence=e,this.zr=new U_,this.jr=null}static Hr(e){return new $_(e)}get Jr(){if(this.jr)return this.jr;throw me()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),j.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Jr,r=>{const i=he.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ge.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return j.or([()=>j.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class B_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Se(),i=Se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new B_(e,n.fromCache,r,i)}}/**
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
 */class HF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class qF{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return fD()?8:AV(Ft())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new HF;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(La()<=Te.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Zs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),j.resolve()):(La()<=Te.DEBUG&&ne("QueryEngine","Query:",Zs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(La()<=Te.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Zs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_r(n))):j.resolve())}ji(e,n){if(Uw(n))return j.resolve(null);let r=_r(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fm(n,null,"F"),r=_r(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Se(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,Fm(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return Uw(n)||i.isEqual(ge.min())?j.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?j.resolve(null):(La()<=Te.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zs(n)),this.es(e,o,n,TV(i,-1)).next(a=>a))})}Zi(e,n){let r=new Mt(SC(e));return n.forEach((i,s)=>{Rd(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return La()<=Te.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Zs(n)),this.zi.getDocumentsMatchingQuery(e,n,Ni.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class GF{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ft(be),this.rs=new la(s=>D_(s),L_),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MF(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function KF(t,e,n,r){return new GF(t,e,n,r)}async function qC(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Se();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function QF(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,m=f.keys();let y=j.resolve();return m.forEach(w=>{y=y.next(()=>h.getEntry(l,w)).next(C=>{const P=c.docVersions.get(w);ze(P!==null),C.version.compareTo(P)<0&&(f.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),h.addEntry(C)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function GC(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function YF(t,e){const n=_e(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,f)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Jt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),i=i.insert(f,y),function(C,P,E){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,y,h)&&a.push(n.Qr.updateTargetData(s,y))});let l=Hr(),c=Se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(XF(s,o,e.documentUpdates).next(h=>{l=h.cs,c=h.ls})),!r.isEqual(ge.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function XF(t,e,n){let r=Se(),i=Se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Hr();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function JF(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZF(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new fi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function zm(t,e,n){const r=_e(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pu(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Yw(t,e,n){const r=_e(t);let i=ge.min(),s=Se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=_e(l),m=f.rs.get(h);return m!==void 0?j.resolve(f.ns.get(m)):f.Qr.getTargetData(c,h)}(r,o,_r(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ge.min(),n?s:Se())).next(a=>(eU(r,HV(e),a),{documents:a,hs:s})))}function eU(t,e,n){let r=t.ss.get(e)||ge.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Xw{constructor(){this.activeTargetIds=XV()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tU{constructor(){this.no=new Xw,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Xw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nU{io(e){}shutdown(){}}/**
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
 */class Jw{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yc=null;function ap(){return yc===null?yc=function(){return 268435456+Math.round(2147483648*Math.random())}():yc++,"0x"+yc.toString(16)}/**
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
 */const rU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class iU{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const zt="WebChannelConnection";class sU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=ap(),l=this.vo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(h=>(ne("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw $o("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+aa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=rU[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=ap();return new Promise((o,a)=>{const l=new sC;l.setWithCredentials(!0),l.listenOnce(aC.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case jc.NO_ERROR:const h=l.getResponseJson();ne(zt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case jc.TIMEOUT:ne(zt,`RPC '${e}' ${s} timed out`),a(new ce(W.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const f=l.getStatus();if(ne(zt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const w=function(P){const E=P.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(E)>=0?E:W.UNKNOWN}(y.status);a(new ce(w,y.message))}else a(new ce(W.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ce(W.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{ne(zt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);ne(zt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=ap(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cC(),a=uC(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new oC({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");ne(zt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let m=!1,y=!1;const w=new iU({lo:P=>{y?ne(zt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(ne(zt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),ne(zt,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},ho:()=>f.close()}),C=(P,E,g)=>{P.listen(E,T=>{try{g(T)}catch(O){setTimeout(()=>{throw O},0)}})};return C(f,Ya.EventType.OPEN,()=>{y||(ne(zt,`RPC '${e}' stream ${i} transport opened.`),w.mo())}),C(f,Ya.EventType.CLOSE,()=>{y||(y=!0,ne(zt,`RPC '${e}' stream ${i} transport closed`),w.po())}),C(f,Ya.EventType.ERROR,P=>{y||(y=!0,$o(zt,`RPC '${e}' stream ${i} transport errored:`,P),w.po(new ce(W.UNAVAILABLE,"The operation could not be completed")))}),C(f,Ya.EventType.MESSAGE,P=>{var E;if(!y){const g=P.data[0];ze(!!g);const T=g,O=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(O){ne(zt,`RPC '${e}' stream ${i} received error:`,O);const F=O.status;let $=function(I){const A=ut[I];if(A!==void 0)return MC(A)}(F),S=O.message;$===void 0&&($=W.INTERNAL,S="Unknown error status: "+F+" with message "+O.message),y=!0,w.po(new ce($,S)),f.close()}else ne(zt,`RPC '${e}' stream ${i} received:`,g),w.yo(g)}}),C(a,lC.STAT_EVENT,P=>{P.stat===xm.PROXY?ne(zt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===xm.NOPROXY&&ne(zt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}function lp(){return typeof document<"u"?document:null}/**
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
 */function Pd(t){return new gF(t,!0)}/**
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
 */class KC{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class QC{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new KC(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(Wr(n.toString()),Wr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new ce(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oU extends QC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=vF(this.serializer,e),r=function(s){if(!("targetChange"in s))return ge.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?vr(o.readTime):ge.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=jm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Vm(l)?{documents:TF(s,l)}:{query:SF(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=UC(s,o.resumeToken);const c=Um(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=Oh(s,o.snapshotVersion.toTimestamp());const c=Um(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=RF(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=jm(this.serializer),n.removeTarget=e,this.i_(n)}}class aU extends QC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(ze(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=EF(e.writeResults,e.commitTime),r=vr(e.commitTime);return this.listener.A_(r,n)}return ze(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=jm(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wF(this.serializer,r))};this.i_(n)}}/**
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
 */class lU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new ce(W.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,$m(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ce(W.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,$m(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(W.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class uU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Wr(n),this.y_=!1):ne("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class cU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Fs(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=_e(l);c.M_.add(4),await _u(c),c.N_.set("Unknown"),c.M_.delete(4),await Nd(c)}(this))})}),this.N_=new uU(r,i)}}async function Nd(t){if(Fs(t))for(const e of t.x_)await e(!0)}async function _u(t){for(const e of t.x_)await e(!1)}function YC(t,e){const n=_e(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),H_(n)?W_(n):ua(n).Xo()&&z_(n,e))}function j_(t,e){const n=_e(t),r=ua(n);n.F_.delete(e),r.Xo()&&XC(n,e),n.F_.size===0&&(r.Xo()?r.n_():Fs(n)&&n.N_.set("Unknown"))}function z_(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ua(t).P_(e)}function XC(t,e){t.L_.xe(e),ua(t).I_(e)}function W_(t){t.L_=new dF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ua(t).start(),t.N_.w_()}function H_(t){return Fs(t)&&!ua(t).Zo()&&t.F_.size>0}function Fs(t){return _e(t).M_.size===0}function JC(t){t.L_=void 0}async function hU(t){t.N_.set("Online")}async function dU(t){t.F_.forEach((e,n)=>{z_(t,e)})}async function fU(t,e){JC(t),H_(t)?(t.N_.D_(e),W_(t)):t.N_.set("Unknown")}async function pU(t,e,n){if(t.N_.set("Online"),e instanceof FC&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mh(t,r)}else if(e instanceof Hc?t.L_.Ke(e):e instanceof VC?t.L_.He(e):t.L_.We(e),!n.isEqual(ge.min()))try{const r=await GC(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.F_.get(l);if(!h)return;s.F_.set(l,h.withResumeToken(Jt.EMPTY_BYTE_STRING,h.snapshotVersion)),XC(s,l);const f=new fi(h.target,l,c,h.sequenceNumber);z_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Mh(t,r)}}async function Mh(t,e,n){if(!pu(e))throw e;t.M_.add(1),await _u(t),t.N_.set("Offline"),n||(n=()=>GC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Nd(t)})}function ZC(t,e){return e().catch(n=>Mh(t,n,e))}async function bd(t){const e=_e(t),n=xi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;mU(e);)try{const i=await JF(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,gU(e,i)}catch(i){await Mh(e,i)}eA(e)&&tA(e)}function mU(t){return Fs(t)&&t.v_.length<10}function gU(t,e){t.v_.push(e);const n=xi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function eA(t){return Fs(t)&&!xi(t).Zo()&&t.v_.length>0}function tA(t){xi(t).start()}async function _U(t){xi(t).V_()}async function yU(t){const e=xi(t);for(const n of t.v_)e.d_(n.mutations)}async function vU(t,e,n){const r=t.v_.shift(),i=M_.from(r,e,n);await ZC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bd(t)}async function wU(t,e){e&&xi(t).E_&&await async function(r,i){if(function(o){return uF(o)&&o!==W.ABORTED}(i.code)){const s=r.v_.shift();xi(r).t_(),await ZC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bd(r)}}(t,e),eA(t)&&tA(t)}async function Zw(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=Fs(n);n.M_.add(3),await _u(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Nd(n)}async function EU(t,e){const n=_e(t);e?(n.M_.delete(2),await Nd(n)):e||(n.M_.add(2),await _u(n),n.N_.set("Unknown"))}function ua(t){return t.B_||(t.B_=function(n,r,i){const s=_e(n);return s.f_(),new oU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:hU.bind(null,t),To:dU.bind(null,t),Ao:fU.bind(null,t),h_:pU.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),H_(t)?W_(t):t.N_.set("Unknown")):(await t.B_.stop(),JC(t))})),t.B_}function xi(t){return t.k_||(t.k_=function(n,r,i){const s=_e(n);return s.f_(),new aU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:_U.bind(null,t),Ao:wU.bind(null,t),R_:yU.bind(null,t),A_:vU.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await bd(t)):(await t.k_.stop(),t.v_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class q_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ri,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new q_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function G_(t,e){if(Wr("AsyncQueue",`${e}: ${t}`),pu(t))return new ce(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ao{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=Xa(),this.sortedSet=new ft(this.comparator)}static emptySet(e){return new Ao(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ao;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class eE{constructor(){this.q_=new ft(he.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):me():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ho{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ho(e,n,Ao.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Id(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class TU{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class SU{constructor(){this.queries=new la(e=>TC(e),Id),this.onlineState="Unknown",this.z_=new Set}}async function IU(t,e){const n=_e(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new TU,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=G_(o,`Initialization of query '${Zs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&K_(n)}async function RU(t,e){const n=_e(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function CU(t,e){const n=_e(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&K_(n)}function AU(t,e,n){const r=_e(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function K_(t){t.z_.forEach(e=>{e.next()})}var Wm,tE;(tE=Wm||(Wm={})).J_="default",tE.Cache="cache";class kU{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ho(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Wm.Cache}}/**
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
 */class nA{constructor(e){this.key=e}}class rA{constructor(e){this.key=e}}class PU{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Se(),this.mutatedKeys=Se(),this.Ia=SC(e),this.Ta=new Ao(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new eE,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),y=Rd(this.query,f)?f:null,w=!!m&&this.mutatedKeys.has(m.key),C=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let P=!1;m&&y?m.data.isEqual(y.data)?w!==C&&(r.track({type:3,doc:y}),P=!0):this.Ra(m,y)||(r.track({type:2,doc:y}),P=!0,(l&&this.Ia(y,l)>0||c&&this.Ia(y,c)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),P=!0):m&&!y&&(r.track({type:1,doc:m}),P=!0,(l||c)&&(a=!0)),P&&(y?(o=o.add(y),s=C?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,f)=>function(y,w){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return C(y)-C(w)}(h.type,f.type)||this.Ia(h.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new Ho(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new eE,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Se(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new rA(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new nA(r))}),n}pa(e){this.la=e.hs,this.Pa=Se();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Ho.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class NU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bU{constructor(e){this.key=e,this.wa=!1}}class xU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new la(a=>TC(a),Id),this.Da=new Map,this.Ca=new Set,this.va=new ft(he.comparator),this.Fa=new Map,this.Ma=new U_,this.xa={},this.Oa=new Map,this.Na=Wo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function DU(t,e,n=!0){const r=uA(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await iA(r,e,n,!0),i}async function LU(t,e){const n=uA(t);await iA(n,e,!0,!1)}async function iA(t,e,n,r){const i=await ZF(t.localStore,_r(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await OU(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&YC(t.remoteStore,i),a}async function OU(t,e,n,r,i){t.Ba=(f,m,y)=>async function(C,P,E,g){let T=P.view.da(E);T.Xi&&(T=await Yw(C.localStore,P.query,!1).then(({documents:S})=>P.view.da(S,T)));const O=g&&g.targetChanges.get(P.targetId),F=g&&g.targetMismatches.get(P.targetId)!=null,$=P.view.applyChanges(T,C.isPrimaryClient,O,F);return rE(C,P.targetId,$.fa),$.snapshot}(t,f,m,y);const s=await Yw(t.localStore,e,!0),o=new PU(e,s.hs),a=o.da(s.documents),l=gu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);rE(t,n,c.fa);const h=new NU(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function MU(t,e,n){const r=_e(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Id(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&j_(r.remoteStore,i.targetId),Hm(r,i.targetId)}).catch(fu)):(Hm(r,i.targetId),await zm(r.localStore,i.targetId,!0))}async function VU(t,e){const n=_e(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),j_(n.remoteStore,r.targetId))}async function FU(t,e,n){const r=HU(t);try{const i=await function(o,a){const l=_e(o),c=vt.now(),h=a.reduce((y,w)=>y.add(w.key),Se());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let w=Hr(),C=Se();return l.os.getEntries(y,h).next(P=>{w=P,w.forEach((E,g)=>{g.isValidDocument()||(C=C.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,w)).next(P=>{f=P;const E=[];for(const g of a){const T=iF(g,f.get(g.key).overlayedDocument);T!=null&&E.push(new ji(g.key,T,mC(T.value.mapValue),yr.exists(!0)))}return l.mutationQueue.addMutationBatch(y,c,E,a)}).next(P=>{m=P;const E=P.applyToLocalDocumentSet(f,C);return l.documentOverlayCache.saveOverlays(y,P.batchId,E)})}).then(()=>({batchId:m.batchId,changes:RC(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new ft(be)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await yu(r,i.changes),await bd(r.remoteStore)}catch(i){const s=G_(i,"Failed to persist write");n.reject(s)}}async function sA(t,e){const n=_e(t);try{const r=await YF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(ze(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?ze(o.wa):i.removedDocuments.size>0&&(ze(o.wa),o.wa=!1))}),await yu(n,r,e)}catch(r){await fu(r)}}function nE(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=_e(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&K_(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UU(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ft(he.comparator);o=o.insert(s,qt.newNoDocument(s,ge.min()));const a=Se().add(s),l=new kd(ge.min(),new Map,new ft(be),o,a);await sA(r,l),r.va=r.va.remove(s),r.Fa.delete(e),Q_(r)}else await zm(r.localStore,e,!1).then(()=>Hm(r,e,n)).catch(fu)}async function $U(t,e){const n=_e(t),r=e.batch.batchId;try{const i=await QF(n.localStore,e);aA(n,r,null),oA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yu(n,i)}catch(i){await fu(i)}}async function BU(t,e,n){const r=_e(t);try{const i=await function(o,a){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(ze(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);aA(r,e,n),oA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yu(r,i)}catch(i){await fu(i)}}function oA(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function aA(t,e,n){const r=_e(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Hm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||lA(t,r)})}function lA(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(j_(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Q_(t))}function rE(t,e,n){for(const r of n)r instanceof nA?(t.Ma.addReference(r.key,e),jU(t,r)):r instanceof rA?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||lA(t,r.key)):me()}function jU(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Q_(t))}function Q_(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new he(ot.fromString(e)),r=t.Na.next();t.Fa.set(r,new bU(n)),t.va=t.va.insert(n,r),YC(t.remoteStore,new fi(_r(O_(n.path)),r,"TargetPurposeLimboResolution",P_.oe))}}async function yu(t,e,n){const r=_e(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=B_.Ki(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const h=_e(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,m=>j.forEach(m.qi,y=>h.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>j.forEach(m.Qi,y=>h.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!pu(f))throw f;ne("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const y=h.ns.get(m),w=y.snapshotVersion,C=y.withLastLimboFreeSnapshotVersion(w);h.ns=h.ns.insert(m,C)}}}(r.localStore,s))}async function zU(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await qC(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new ce(W.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yu(n,r.us)}}function WU(t,e){const n=_e(t),r=n.Fa.get(e);if(r&&r.wa)return Se().add(r.key);{let i=Se();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function uA(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UU.bind(null,e),e.Sa.h_=CU.bind(null,e.eventManager),e.Sa.ka=AU.bind(null,e.eventManager),e}function HU(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$U.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BU.bind(null,e),e}class iE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return KF(this.persistence,new qF,e.initialUser,this.serializer)}createPersistence(e){return new zF($_.Hr,this.serializer)}createSharedClientState(e){return new tU}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zU.bind(null,this.syncEngine),await EU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SU}()}createDatastore(e){const n=Pd(e.databaseInfo.databaseId),r=function(s){return new sU(s)}(e.databaseInfo);return function(s,o,a,l){return new lU(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new cU(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>nE(this.syncEngine,n,0),function(){return Jw.D()?new Jw:new nU}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new xU(i,s,o,a,l,c);return h&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=_e(r);ne("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await _u(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class GU{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Wr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class KU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Wt.UNAUTHENTICATED,this.clientId=dC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ne("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ne("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce(W.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ri;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=G_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function up(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YU(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Zw(e.remoteStore,i)),t._onlineComponents=e}function QU(t){return t.name==="FirebaseError"?t.code===W.FAILED_PRECONDITION||t.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function YU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await up(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!QU(n))throw n;$o("Error using user provided cache. Falling back to memory cache: "+n),await up(t,new iE)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await up(t,new iE);return t._offlineComponents}async function cA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await sE(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await sE(t,new qU))),t._onlineComponents}function XU(t){return cA(t).then(e=>e.syncEngine)}async function JU(t){const e=await cA(t),n=e.eventManager;return n.onListen=DU.bind(null,e.syncEngine),n.onUnlisten=MU.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=LU.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VU.bind(null,e.syncEngine),n}function ZU(t,e,n={}){const r=new Ri;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new GU({next:m=>{o.enqueueAndForget(()=>RU(s,f));const y=m.docs.has(a);!y&&m.fromCache?c.reject(new ce(W.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?c.reject(new ce(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new kU(O_(a.path),h,{includeMetadataChanges:!0,ra:!0});return IU(s,f)}(await JU(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function hA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const oE=new Map;/**
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
 */function e4(t,e,n){if(!n)throw new ce(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function t4(t,e,n,r){if(e===!0&&r===!0)throw new ce(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function aE(t){if(!he.isDocumentKey(t))throw new ce(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Y_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Is(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Y_(t);throw new ce(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class lE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}t4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ce(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ce(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ce(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class X_{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ce(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fV;switch(r.type){case"firstParty":return new _V(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=oE.get(n);r&&(ne("ComponentProvider","Removing Datastore"),oE.delete(n),r.terminate())}(this),Promise.resolve()}}function n4(t,e,n,r={}){var i;const s=(t=Is(t,X_))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Wt.MOCK_USER;else{a=cD(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new ce(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Wt(c)}t._authCredentials=new pV(new hC(a,l))}}/**
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
 */class J_{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new J_(this.firestore,e,this._query)}}class An{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new An(this.firestore,e,this._key)}}class Xl extends J_{constructor(e,n,r){super(e,n,O_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new An(this.firestore,null,new he(e))}withConverter(e){return new Xl(this.firestore,e,this._path)}}function dn(t,e,...n){if(t=Xt(t),arguments.length===1&&(e=dC.newId()),e4("doc","path",e),t instanceof X_){const r=ot.fromString(e,...n);return aE(r),new An(t,null,new he(r))}{if(!(t instanceof An||t instanceof Xl))throw new ce(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ot.fromString(e,...n));return aE(r),new An(t.firestore,t instanceof Xl?t.converter:null,new he(r))}}/**
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
 */class r4{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new KC(this,"async_queue_retry"),this.hu=()=>{const n=lp();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=lp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=lp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Ri;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!pu(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Wr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=q_.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&me()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class xd extends X_{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new r4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fA(this),this._firestoreClient.terminate()}}function i4(t,e){const n=typeof t=="object"?t:eR(),r=typeof t=="string"?t:"(default)",i=lu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=uD("firestore");s&&n4(i,...s)}return i}function dA(t){return t._firestoreClient||fA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new NV(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,hA(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new KU(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class qo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qo(Jt.fromBase64String(e))}catch(n){throw new ce(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qo(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Dd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Z_{constructor(e){this._methodName=e}}/**
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
 */class ey{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */const s4=/^__.*__$/;class o4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new mu(e,this.data,n,this.fieldTransforms)}}class pA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ji(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class ty{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ty(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Vh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(mA(this.fu)&&s4.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class a4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pd(e)}Fu(e,n,r,i=!1){return new ty({fu:e,methodName:n,vu:r,path:Lt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gA(t){const e=t._freezeSettings(),n=Pd(t._databaseId);return new a4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function l4(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);ny("Data must be an object, but it was:",o,r);const a=_A(r,o);let l,c;if(s.merge)l=new Rn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=qm(e,f,n);if(!o.contains(m))throw new ce(W.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);vA(h,m)||h.push(m)}l=new Rn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new o4(new cn(a),l,c)}class Ld extends Z_{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ld}}function u4(t,e,n,r){const i=t.Fu(1,e,n);ny("Data must be an object, but it was:",i,r);const s=[],o=cn.empty();Vs(r,(l,c)=>{const h=ry(e,l,n);c=Xt(c);const f=i.Su(h);if(c instanceof Ld)s.push(h);else{const m=Od(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new Rn(s);return new pA(o,a,i.fieldTransforms)}function c4(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[qm(e,r,n)],l=[i];if(s.length%2!=0)throw new ce(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(qm(e,s[m])),l.push(s[m+1]);const c=[],h=cn.empty();for(let m=a.length-1;m>=0;--m)if(!vA(c,a[m])){const y=a[m];let w=l[m];w=Xt(w);const C=o.Su(y);if(w instanceof Ld)c.push(y);else{const P=Od(w,C);P!=null&&(c.push(y),h.set(y,P))}}const f=new Rn(c);return new pA(h,f,o.fieldTransforms)}function Od(t,e){if(yA(t=Xt(t)))return ny("Unsupported field value:",e,t),_A(t,e);if(t instanceof Z_)return function(r,i){if(!mA(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Od(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Xt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JV(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=vt.fromDate(r);return{timestampValue:Oh(i.serializer,s)}}if(r instanceof vt){const s=new vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oh(i.serializer,s)}}if(r instanceof ey)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qo)return{bytesValue:UC(i.serializer,r._byteString)};if(r instanceof An){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:F_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Y_(r)}`)}(t,e)}function _A(t,e){const n={};return fC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vs(t,(r,i)=>{const s=Od(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof vt||t instanceof ey||t instanceof qo||t instanceof An||t instanceof Z_)}function ny(t,e,n){if(!yA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Y_(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function qm(t,e,n){if((e=Xt(e))instanceof Dd)return e._internalPath;if(typeof e=="string")return ry(t,e);throw Vh("Field path arguments must be of type string or ",t,!1,void 0,n)}const h4=new RegExp("[~\\*/\\[\\]]");function ry(t,e,n){if(e.search(h4)>=0)throw Vh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dd(...e.split("."))._internalPath}catch{throw Vh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ce(W.INVALID_ARGUMENT,a+t+l)}function vA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class wA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new An(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new d4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(EA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class d4 extends wA{data(){return super.data()}}function EA(t,e){return typeof e=="string"?ry(t,e):e instanceof Dd?e._internalPath:e._delegate._internalPath}class f4{convertValue(e,n="none"){switch(Ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ey(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=b_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ql(e));default:return null}}convertTimestamp(e){const n=bi(e);return new vt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ot.fromString(e);ze(HC(r));const i=new Gl(r.get(1),r.get(3)),s=new he(r.popFirst(5));return i.isEqual(n)||Wr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function p4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class m4{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class TA extends wA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new g4(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(EA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class g4 extends TA{data(e={}){return super.data(e)}}/**
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
 */function Di(t){t=Is(t,An);const e=Is(t.firestore,xd);return ZU(dA(e),t._key).then(n=>v4(e,t,n))}class _4 extends f4{constructor(e){super(),this.firestore=e}convertBytes(e){return new qo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new An(this.firestore,null,n)}}function y4(t,e,n){t=Is(t,An);const r=Is(t.firestore,xd),i=p4(t.converter,e);return SA(r,[l4(gA(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,yr.none())])}function Jl(t,e,n,...r){t=Is(t,An);const i=Is(t.firestore,xd),s=gA(i);let o;return o=typeof(e=Xt(e))=="string"||e instanceof Dd?c4(s,"updateDoc",t._key,e,n,r):u4(s,"updateDoc",t._key,e),SA(i,[o.toMutation(t._key,yr.exists(!0))])}function SA(t,e){return function(r,i){const s=new Ri;return r.asyncQueue.enqueueAndForget(async()=>FU(await XU(r),i,s)),s.promise}(dA(t),e)}function v4(t,e,n){const r=n.docs.get(e._key),i=new _4(t);return new TA(t,i,e._key,r,new m4(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){aa=i})(Os),rr(new $n("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new xd(new mV(r.getProvider("auth-internal")),new vV(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ce(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gl(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),yn(Nw,"4.6.4",e),yn(Nw,"4.6.4","esm2017")})();const w4={apiKey:"AIzaSyC6iK6Lrux-4MEpEc-zJYFrdZaPLjGUhNQ",authDomain:"todoreactapp-74bab.firebaseapp.com",databaseURL:"https://todoreactapp-74bab-default-rtdb.europe-west1.firebasedatabase.app",projectId:"todoreactapp-74bab",storageBucket:"todoreactapp-74bab.appspot.com",messagingSenderId:"590837115647",appId:"1:590837115647:web:c608d9ebb993d4e2427aca",measurementId:"G-VG9R1F5WT0"},E4=ZI(w4),fn=i4(E4),Pt=hV();var uE={};const cE="@firebase/database",hE="1.0.6";/**
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
 */let IA="";function T4(t){IA=t}/**
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
 */class S4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Dt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class I4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Gr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const RA=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new S4(e)}}catch{}return new I4},as=RA("localStorage"),R4=RA("sessionStorage");/**
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
 */const ko=new au("@firebase/database"),C4=function(){let t=1;return function(){return t++}}(),CA=function(t){const e=RD(t),n=new wD;n.update(e);const r=n.digest();return c_.encodeByteArray(r)},vu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=vu.apply(null,r):typeof r=="object"?e+=Dt(r):e+=r,e+=" "}return e};let ml=null,dE=!0;const A4=function(t,e){X(!e,"Can't turn on custom loggers persistently."),ko.logLevel=Te.VERBOSE,ml=ko.log.bind(ko)},Gt=function(...t){if(dE===!0&&(dE=!1,ml===null&&R4.get("logging_enabled")===!0&&A4()),ml){const e=vu.apply(null,t);ml(e)}},wu=function(t){return function(...e){Gt(t,...e)}},Gm=function(...t){const e="FIREBASE INTERNAL ERROR: "+vu(...t);ko.error(e)},Rs=function(...t){const e=`FIREBASE FATAL ERROR: ${vu(...t)}`;throw ko.error(e),new Error(e)},kn=function(...t){const e="FIREBASE WARNING: "+vu(...t);ko.warn(e)},k4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&kn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},AA=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},P4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Go="[MIN_NAME]",Cs="[MAX_NAME]",ca=function(t,e){if(t===e)return 0;if(t===Go||e===Cs)return-1;if(e===Go||t===Cs)return 1;{const n=fE(t),r=fE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},N4=function(t,e){return t===e?0:t<e?-1:1},Oa=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Dt(e))},iy=function(t){if(typeof t!="object"||t===null)return Dt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Dt(e[r]),n+=":",n+=iy(t[e[r]]);return n+="}",n},kA=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Bn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const PA=function(t){X(!AA(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(h.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},b4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},x4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},D4=new RegExp("^-?(0*)\\d{1,10}$"),L4=-2147483648,O4=2147483647,fE=function(t){if(D4.test(t)){const e=Number(t);if(e>=L4&&e<=O4)return e}return null},Eu=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw kn("Exception was thrown by user callback.",n),e},Math.floor(0))}},M4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gl=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class V4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){kn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class F4{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',kn(e)}}/**
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
 */const sy="5",NA="v",bA="s",xA="r",DA="f",LA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,OA="ls",MA="p",Km="ac",VA="websocket",FA="long_polling";/**
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
 */class U4{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=as.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&as.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function UA(t,e,n){X(typeof e=="string","typeof type must == string"),X(typeof n=="object","typeof params must == object");let r;if(e===VA)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===FA)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$4(t)&&(n.ns=t.namespace);const i=[];return Bn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class B4{constructor(){this.counters_={}}incrementCounter(e,n=1){Gr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return rD(this.counters_)}}/**
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
 */const cp={},hp={};function oy(t){const e=t.toString();return cp[e]||(cp[e]=new B4),cp[e]}function j4(t,e){const n=t.toString();return hp[n]||(hp[n]=e()),hp[n]}/**
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
 */class z4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Eu(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const pE="start",W4="close",H4="pLPCommand",q4="pRTLPCB",$A="id",BA="pw",jA="ser",G4="cb",K4="seg",Q4="ts",Y4="d",X4="dframe",zA=1870,WA=30,J4=zA-WA,Z4=25e3,e$=3e4;class go{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wu(e),this.stats_=oy(n),this.urlFn=l=>(this.appCheckToken&&(l[Km]=this.appCheckToken),UA(n,FA,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new z4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(e$)),P4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ay((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===pE)this.id=a,this.password=l;else if(o===W4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[pE]="t",r[jA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[G4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[NA]=sy,this.transportSessionId&&(r[bA]=this.transportSessionId),this.lastSessionId&&(r[OA]=this.lastSessionId),this.applicationId&&(r[MA]=this.applicationId),this.appCheckToken&&(r[Km]=this.appCheckToken),typeof location<"u"&&location.hostname&&LA.test(location.hostname)&&(r[xA]=DA);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){go.forceAllow_=!0}static forceDisallow(){go.forceDisallow_=!0}static isAvailable(){return go.forceAllow_?!0:!go.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!b4()&&!x4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=UI(n),i=kA(r,J4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[X4]="t",r[$A]=e,r[BA]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Dt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ay{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=C4(),window[H4+this.uniqueCallbackIdentifier]=e,window[q4+this.uniqueCallbackIdentifier]=n,this.myIFrame=ay.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Gt("frame writing exception"),a.stack&&Gt(a.stack),Gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Gt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$A]=this.myID,e[BA]=this.myPW,e[jA]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+WA+r.length<=zA;){const o=this.pendingSegs.shift();r=r+"&"+K4+i+"="+o.seg+"&"+Q4+i+"="+o.ts+"&"+Y4+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Z4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const t$=16384,n$=45e3;let Fh=null;typeof MozWebSocket<"u"?Fh=MozWebSocket:typeof WebSocket<"u"&&(Fh=WebSocket);class Xn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wu(this.connId),this.stats_=oy(n),this.connURL=Xn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[NA]=sy,typeof location<"u"&&location.hostname&&LA.test(location.hostname)&&(o[xA]=DA),n&&(o[bA]=n),r&&(o[OA]=r),i&&(o[Km]=i),s&&(o[MA]=s),UA(e,VA,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,as.set("previous_websocket_failure",!0);try{let r;qI(),this.mySock=new Fh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Fh!==null&&!Xn.forceDisallow_}static previouslyFailed(){return as.isInMemoryStorage||as.get("previous_websocket_failure")===!0}markConnectionHealthy(){as.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Bl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(X(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kA(n,t$);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(n$))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xn.responsesRequiredToBeHealthy=2;Xn.healthyTimeout=3e4;/**
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
 */class Zl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[go,Xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Xn&&Xn.isAvailable();let r=n&&!Xn.previouslyFailed();if(e.webSocketOnly&&(n||kn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Xn];else{const i=this.transports_=[];for(const s of Zl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Zl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zl.globalTransportInitialized_=!1;/**
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
 */const r$=6e4,i$=5e3,s$=10*1024,o$=100*1024,dp="t",mE="d",a$="s",gE="r",l$="e",_E="o",yE="a",vE="n",wE="p",u$="h";class c${constructor(e,n,r,i,s,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wu("c:"+this.id+":"),this.transportManager_=new Zl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=gl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>o$?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>s$?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(dp in e){const n=e[dp];n===yE?this.upgradeIfSecondaryHealthy_():n===gE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_E&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Oa("t",e),r=Oa("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Oa("t",e),r=Oa("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Oa(dp,e);if(mE in e){const r=e[mE];if(n===u$){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===vE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===a$?this.onConnectionShutdown_(r):n===gE?this.onReset_(r):n===l$?Gm("Server Error: "+r):n===_E?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sy!==r&&kn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),gl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(r$))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(i$))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(as.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class HA{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class qA{constructor(e){this.allowedEvents_=e,this.listeners_={},X(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){X(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Uh extends qA{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!d_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Uh}getInitialEvent(e){return X(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const EE=32,TE=768;class Ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Oe(){return new Ye("")}function Ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Li(t){return t.pieces_.length-t.pieceNum_}function Ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ye(t.pieces_,e)}function GA(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function h$(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function KA(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function QA(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ye(e,0)}function At(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ye(n,0)}function Ie(t){return t.pieceNum_>=t.pieces_.length}function On(t,e){const n=Ce(t),r=Ce(e);if(n===null)return e;if(n===r)return On(Ge(t),Ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function YA(t,e){if(Li(t)!==Li(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Jn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Li(t)>Li(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class d${constructor(e,n){this.errorPrefix_=n,this.parts_=KA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=md(this.parts_[r]);XA(this)}}function f$(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=md(e),XA(t)}function p$(t){const e=t.parts_.pop();t.byteLength_-=md(e),t.parts_.length>0&&(t.byteLength_-=1)}function XA(t){if(t.byteLength_>TE)throw new Error(t.errorPrefix_+"has a key path longer than "+TE+" bytes ("+t.byteLength_+").");if(t.parts_.length>EE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+EE+") or object contains a cycle "+es(t))}function es(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ly extends qA{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ly}getInitialEvent(e){return X(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ma=1e3,m$=60*5*1e3,SE=30*1e3,g$=1.3,_$=3e4,y$="server_kill",IE=3;class Fr extends HA{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fr.nextPersistentConnectionId_++,this.log_=wu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ma,this.maxReconnectDelay_=m$,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!qI())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ly.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Uh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Dt(s)),X(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new h_,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),X(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Fr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Gr(e,"w")){const r=Uo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();kn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=SE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yD(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Dt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gm("Unrecognized action received from server: "+Dt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){X(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ma,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ma,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_$&&(this.reconnectDelay_=Ma),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*g$)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){X(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Gt("getToken() completed but was canceled"):(Gt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new c$(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{kn(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(y$)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&kn(f),l())}}}interrupt(e){Gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Em(this.interruptReasons_)&&(this.reconnectDelay_=Ma,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>iy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ye(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=IE&&(this.reconnectDelay_=SE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=IE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+IA.replace(/\./g,"-")]=1,d_()?e["framework.cordova"]=1:HI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Uh.getInstance().currentlyOnline();return Em(this.interruptReasons_)&&e}}Fr.nextPersistentConnectionId_=0;Fr.nextConnectionId_=0;/**
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
 */class Md{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ae(Go,e),i=new Ae(Go,n);return this.compare(r,i)!==0}minPost(){return Ae.MIN}}/**
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
 */let vc;class JA extends Md{static get __EMPTY_NODE(){return vc}static set __EMPTY_NODE(e){vc=e}compare(e,n){return ca(e.name,n.name)}isDefinedOn(e){throw ia("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(Cs,vc)}makePost(e,n){return X(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,vc)}toString(){return".key"}}const Po=new JA;/**
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
 */class wc{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ct.RED,this.left=i??pn.EMPTY_NODE,this.right=s??pn.EMPTY_NODE}copy(e,n,r,i,s){return new Ct(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return pn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ct.RED=!0;Ct.BLACK=!1;class v${copy(e,n,r,i,s){return this}insert(e,n,r){return new Ct(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pn{constructor(e,n=pn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new pn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ct.BLACK,null,null))}remove(e){return new pn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ct.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new wc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new wc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new wc(this.root_,null,this.comparator_,!0,e)}}pn.EMPTY_NODE=new v$;/**
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
 */function w$(t,e){return ca(t.name,e.name)}function uy(t,e){return ca(t,e)}/**
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
 */let Qm;function E$(t){Qm=t}const ZA=function(t){return typeof t=="number"?"number:"+PA(t):"string:"+t},e1=function(t){if(t.isLeafNode()){const e=t.val();X(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gr(e,".sv"),"Priority must be a string or number.")}else X(t===Qm||t.isEmpty(),"priority of unexpected type.");X(t===Qm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let RE;class St{constructor(e,n=St.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,X(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),e1(this.priorityNode_)}static set __childrenNodeConstructor(e){RE=e}static get __childrenNodeConstructor(){return RE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new St(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:St.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ie(e)?this:Ce(e)===".priority"?this.priorityNode_:St.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:St.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ce(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(X(r!==".priority"||Li(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,St.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ZA(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=PA(this.value_):e+=this.value_,this.lazyHash_=CA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===St.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof St.__childrenNodeConstructor?-1:(X(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=St.VALUE_TYPE_ORDER.indexOf(n),s=St.VALUE_TYPE_ORDER.indexOf(r);return X(i>=0,"Unknown leaf type: "+n),X(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}St.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let t1,n1;function T$(t){t1=t}function S$(t){n1=t}class I$ extends Md{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ca(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(Cs,new St("[PRIORITY-POST]",n1))}makePost(e,n){const r=t1(e);return new Ae(n,new St("[PRIORITY-POST]",r))}toString(){return".priority"}}const Qt=new I$;/**
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
 */const R$=Math.log(2);class C${constructor(e){const n=s=>parseInt(Math.log(s)/R$,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $h=function(t,e,n,r){t.sort(e);const i=function(l,c){const h=c-l;let f,m;if(h===0)return null;if(h===1)return f=t[l],m=n?n(f):f,new Ct(m,f.node,Ct.BLACK,null,null);{const y=parseInt(h/2,10)+l,w=i(l,y),C=i(y+1,c);return f=t[y],m=n?n(f):f,new Ct(m,f.node,Ct.BLACK,w,C)}},s=function(l){let c=null,h=null,f=t.length;const m=function(w,C){const P=f-w,E=f;f-=w;const g=i(P+1,E),T=t[P],O=n?n(T):T;y(new Ct(O,T.node,C,null,g))},y=function(w){c?(c.left=w,c=w):(h=w,c=w)};for(let w=0;w<l.count;++w){const C=l.nextBitIsOne(),P=Math.pow(2,l.count-(w+1));C?m(P,Ct.BLACK):(m(P,Ct.BLACK),m(P,Ct.RED))}return h},o=new C$(t.length),a=s(o);return new pn(r||e,a)};/**
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
 */let fp;const Xs={};class Or{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return X(Xs&&Qt,"ChildrenNode.ts has not been loaded"),fp=fp||new Or({".priority":Xs},{".priority":Qt}),fp}get(e){const n=Uo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pn?n:null}hasIndex(e){return Gr(this.indexSet_,e.toString())}addIndex(e,n){X(e!==Po,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Ae.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=$h(r,e.getCompare()):a=Xs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Or(h,c)}addToIndexes(e,n){const r=Eh(this.indexes_,(i,s)=>{const o=Uo(this.indexSet_,s);if(X(o,"Missing index implementation for "+s),i===Xs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ae.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),$h(a,o.getCompare())}else return Xs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Ae(e.name,a))),l.insert(e,e.node)}});return new Or(r,this.indexSet_)}removeFromIndexes(e,n){const r=Eh(this.indexes_,i=>{if(i===Xs)return i;{const s=n.get(e.name);return s?i.remove(new Ae(e.name,s)):i}});return new Or(r,this.indexSet_)}}/**
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
 */let Va;class xe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&e1(this.priorityNode_),this.children_.isEmpty()&&X(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Va||(Va=new xe(new pn(uy),null,Or.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Va}updatePriority(e){return this.children_.isEmpty()?this:new xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Va:n}}getChild(e){const n=Ce(e);return n===null?this:this.getImmediateChild(n).getChild(Ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(X(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ae(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Va:this.priorityNode_;return new xe(i,o,s)}}updateChild(e,n){const r=Ce(e);if(r===null)return n;{X(Ce(e)!==".priority"||Li(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ge(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Qt,(o,a)=>{n[o]=a.val(e),r++,s&&xe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ZA(this.getPriority().val())+":"),this.forEachChild(Qt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":CA(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Ae(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ae.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Tu?-1:0}withIndex(e){if(e===Po||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new xe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Po||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Qt),i=n.getIterator(Qt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Po?null:this.indexMap_.get(e.toString())}}xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class A$ extends xe{constructor(){super(new pn(uy),xe.EMPTY_NODE,Or.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return xe.EMPTY_NODE}isEmpty(){return!1}}const Tu=new A$;Object.defineProperties(Ae,{MIN:{value:new Ae(Go,xe.EMPTY_NODE)},MAX:{value:new Ae(Cs,Tu)}});JA.__EMPTY_NODE=xe.EMPTY_NODE;St.__childrenNodeConstructor=xe;E$(Tu);S$(Tu);/**
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
 */const k$=!0;function Kt(t,e=null){if(t===null)return xe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),X(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new St(n,Kt(e))}if(!(t instanceof Array)&&k$){const n=[];let r=!1;if(Bn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Kt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ae(o,l)))}}),n.length===0)return xe.EMPTY_NODE;const s=$h(n,w$,o=>o.name,uy);if(r){const o=$h(n,Qt.getCompare());return new xe(s,Kt(e),new Or({".priority":o},{".priority":Qt}))}else return new xe(s,Kt(e),Or.Default)}else{let n=xe.EMPTY_NODE;return Bn(t,(r,i)=>{if(Gr(t,r)&&r.substring(0,1)!=="."){const s=Kt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Kt(e))}}T$(Kt);/**
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
 */class P$ extends Md{constructor(e){super(),this.indexPath_=e,X(!Ie(e)&&Ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ca(e.name,n.name):s}makePost(e,n){const r=Kt(e),i=xe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ae(n,i)}maxPost(){const e=xe.EMPTY_NODE.updateChild(this.indexPath_,Tu);return new Ae(Cs,e)}toString(){return KA(this.indexPath_,0).join("/")}}/**
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
 */class N$ extends Md{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ca(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,n){const r=Kt(e);return new Ae(n,r)}toString(){return".value"}}const b$=new N$;/**
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
 */function x$(t){return{type:"value",snapshotNode:t}}function D$(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function L$(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function CE(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function O$(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class cy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return X(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return X(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Go}hasEnd(){return this.endSet_}getIndexEndValue(){return X(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return X(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return X(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qt}copy(){const e=new cy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function AE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Qt?n="$priority":t.index_===b$?n="$value":t.index_===Po?n="$key":(X(t.index_ instanceof P$,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Dt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Dt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Dt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Dt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Dt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Qt&&(e.i=t.index_.toString()),e}/**
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
 */class Bh extends HA{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=wu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(X(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Bh.getListenId_(e,r),a={};this.listens_[o]=a;const l=AE(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Uo(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Bh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=AE(e._queryParams),r=e._path.toString(),i=new h_;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sa(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Bl(a.responseText)}catch{kn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&kn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class M${constructor(){this.rootNode_=xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function jh(){return{value:null,children:new Map}}function r1(t,e,n){if(Ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ce(e);t.children.has(r)||t.children.set(r,jh());const i=t.children.get(r);e=Ge(e),r1(i,e,n)}}function Ym(t,e,n){t.value!==null?n(e,t.value):V$(t,(r,i)=>{const s=new Ye(e.toString()+"/"+r);Ym(i,s,n)})}function V$(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class F${constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Bn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const PE=10*1e3,U$=30*1e3,$$=5*60*1e3;class B${constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new F$(e);const r=PE+(U$-PE)*Math.random();gl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Bn(e,(i,s)=>{s>0&&Gr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),gl(this.reportStats_.bind(this),Math.floor(Math.random()*2*$$))}}/**
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
 */var hr;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hr||(hr={}));function i1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function s1(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function o1(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class zh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=hr.ACK_USER_WRITE,this.source=i1()}operationForChild(e){if(Ie(this.path)){if(this.affectedTree.value!=null)return X(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ye(e));return new zh(Oe(),n,this.revert)}}else return X(Ce(this.path)===e,"operationForChild called for unrelated child."),new zh(Ge(this.path),this.affectedTree,this.revert)}}/**
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
 */class As{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=hr.OVERWRITE}operationForChild(e){return Ie(this.path)?new As(this.source,Oe(),this.snap.getImmediateChild(e)):new As(this.source,Ge(this.path),this.snap)}}/**
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
 */class eu{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=hr.MERGE}operationForChild(e){if(Ie(this.path)){const n=this.children.subtree(new Ye(e));return n.isEmpty()?null:n.value?new As(this.source,Oe(),n.value):new eu(this.source,Oe(),n)}else return X(Ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new eu(this.source,Ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class hy{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function j$(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(O$(o.childName,o.snapshotNode))}),Fa(t,i,"child_removed",e,r,n),Fa(t,i,"child_added",e,r,n),Fa(t,i,"child_moved",s,r,n),Fa(t,i,"child_changed",e,r,n),Fa(t,i,"value",e,r,n),i}function Fa(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>W$(t,a,l)),o.forEach(a=>{const l=z$(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function z$(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function W$(t,e,n){if(e.childName==null||n.childName==null)throw ia("Should only compare child_ events.");const r=new Ae(e.childName,e.snapshotNode),i=new Ae(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function a1(t,e){return{eventCache:t,serverCache:e}}function _l(t,e,n,r){return a1(new hy(e,n,r),t.serverCache)}function l1(t,e,n,r){return a1(t.eventCache,new hy(e,n,r))}function Xm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ks(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let pp;const H$=()=>(pp||(pp=new pn(N4)),pp);class qe{constructor(e,n=H$()){this.value=e,this.children=n}static fromObject(e){let n=new qe(null);return Bn(e,(r,i)=>{n=n.set(new Ye(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Oe(),value:this.value};if(Ie(e))return null;{const r=Ce(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ge(e),n);return s!=null?{path:At(new Ye(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ie(e))return this;{const n=Ce(e),r=this.children.get(n);return r!==null?r.subtree(Ge(e)):new qe(null)}}set(e,n){if(Ie(e))return new qe(n,this.children);{const r=Ce(e),s=(this.children.get(r)||new qe(null)).set(Ge(e),n),o=this.children.insert(r,s);return new qe(this.value,o)}}remove(e){if(Ie(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const n=Ce(e),r=this.children.get(n);if(r){const i=r.remove(Ge(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new qe(null):new qe(this.value,s)}else return this}}get(e){if(Ie(e))return this.value;{const n=Ce(e),r=this.children.get(n);return r?r.get(Ge(e)):null}}setTree(e,n){if(Ie(e))return n;{const r=Ce(e),s=(this.children.get(r)||new qe(null)).setTree(Ge(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new qe(this.value,o)}}fold(e){return this.fold_(Oe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(At(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Oe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Ie(e))return null;{const s=Ce(e),o=this.children.get(s);return o?o.findOnPath_(Ge(e),At(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Oe(),n)}foreachOnPath_(e,n,r){if(Ie(e))return this;{this.value&&r(n,this.value);const i=Ce(e),s=this.children.get(i);return s?s.foreachOnPath_(Ge(e),At(n,i),r):new qe(null)}}foreach(e){this.foreach_(Oe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(At(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class tr{constructor(e){this.writeTree_=e}static empty(){return new tr(new qe(null))}}function yl(t,e,n){if(Ie(e))return new tr(new qe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=On(i,e);return s=s.updateChild(o,n),new tr(t.writeTree_.set(i,s))}else{const i=new qe(n),s=t.writeTree_.setTree(e,i);return new tr(s)}}}function NE(t,e,n){let r=t;return Bn(n,(i,s)=>{r=yl(r,At(e,i),s)}),r}function bE(t,e){if(Ie(e))return tr.empty();{const n=t.writeTree_.setTree(e,new qe(null));return new tr(n)}}function Jm(t,e){return Us(t,e)!=null}function Us(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(On(n.path,e)):null}function xE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Qt,(r,i)=>{e.push(new Ae(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Ae(r,i.value))}),e}function Ai(t,e){if(Ie(e))return t;{const n=Us(t,e);return n!=null?new tr(new qe(n)):new tr(t.writeTree_.subtree(e))}}function Zm(t){return t.writeTree_.isEmpty()}function Ko(t,e){return u1(Oe(),t.writeTree_,e)}function u1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(X(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=u1(At(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(At(t,".priority"),r)),n}}/**
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
 */function c1(t,e){return m1(e,t)}function q$(t,e,n,r,i){X(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=yl(t.visibleWrites,e,n)),t.lastWriteId=r}function G$(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function K$(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);X(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Q$(a,r.path)?i=!1:Jn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Y$(t),!0;if(r.snap)t.visibleWrites=bE(t.visibleWrites,r.path);else{const a=r.children;Bn(a,l=>{t.visibleWrites=bE(t.visibleWrites,At(r.path,l))})}return!0}else return!1}function Q$(t,e){if(t.snap)return Jn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Jn(At(t.path,n),e))return!0;return!1}function Y$(t){t.visibleWrites=h1(t.allWrites,X$,Oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function X$(t){return t.visible}function h1(t,e,n){let r=tr.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Jn(n,o)?(a=On(n,o),r=yl(r,a,s.snap)):Jn(o,n)&&(a=On(o,n),r=yl(r,Oe(),s.snap.getChild(a)));else if(s.children){if(Jn(n,o))a=On(n,o),r=NE(r,a,s.children);else if(Jn(o,n))if(a=On(o,n),Ie(a))r=NE(r,Oe(),s.children);else{const l=Uo(s.children,Ce(a));if(l){const c=l.getChild(Ge(a));r=yl(r,Oe(),c)}}}else throw ia("WriteRecord should have .snap or .children")}}return r}function d1(t,e,n,r,i){if(!r&&!i){const s=Us(t.visibleWrites,e);if(s!=null)return s;{const o=Ai(t.visibleWrites,e);if(Zm(o))return n;if(n==null&&!Jm(o,Oe()))return null;{const a=n||xe.EMPTY_NODE;return Ko(o,a)}}}else{const s=Ai(t.visibleWrites,e);if(!i&&Zm(s))return n;if(!i&&n==null&&!Jm(s,Oe()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Jn(c.path,e)||Jn(e,c.path))},a=h1(t.allWrites,o,e),l=n||xe.EMPTY_NODE;return Ko(a,l)}}}function J$(t,e,n){let r=xe.EMPTY_NODE;const i=Us(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Qt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ai(t.visibleWrites,e);return n.forEachChild(Qt,(o,a)=>{const l=Ko(Ai(s,new Ye(o)),a);r=r.updateImmediateChild(o,l)}),xE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ai(t.visibleWrites,e);return xE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Z$(t,e,n,r,i){X(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=At(e,n);if(Jm(t.visibleWrites,s))return null;{const o=Ai(t.visibleWrites,s);return Zm(o)?i.getChild(n):Ko(o,i.getChild(n))}}function e3(t,e,n,r){const i=At(e,n),s=Us(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ai(t.visibleWrites,i);return Ko(o,r.getNode().getImmediateChild(n))}else return null}function t3(t,e){return Us(t.visibleWrites,e)}function n3(t,e,n,r,i,s,o){let a;const l=Ai(t.visibleWrites,e),c=Us(l,Oe());if(c!=null)a=c;else if(n!=null)a=Ko(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=m.getNext();for(;y&&h.length<i;)f(y,r)!==0&&h.push(y),y=m.getNext();return h}else return[]}function r3(){return{visibleWrites:tr.empty(),allWrites:[],lastWriteId:-1}}function eg(t,e,n,r){return d1(t.writeTree,t.treePath,e,n,r)}function f1(t,e){return J$(t.writeTree,t.treePath,e)}function DE(t,e,n,r){return Z$(t.writeTree,t.treePath,e,n,r)}function Wh(t,e){return t3(t.writeTree,At(t.treePath,e))}function i3(t,e,n,r,i,s){return n3(t.writeTree,t.treePath,e,n,r,i,s)}function dy(t,e,n){return e3(t.writeTree,t.treePath,e,n)}function p1(t,e){return m1(At(t.treePath,e),t.writeTree)}function m1(t,e){return{treePath:t,writeTree:e}}/**
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
 */class s3{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;X(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),X(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,CE(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,L$(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,D$(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,CE(r,e.snapshotNode,i.oldSnap));else throw ia("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class o3{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const g1=new o3;class fy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new hy(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ks(this.viewCache_),s=i3(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function a3(t,e){X(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),X(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function l3(t,e,n,r,i){const s=new s3;let o,a;if(n.type===hr.OVERWRITE){const c=n;c.source.fromUser?o=tg(t,e,c.path,c.snap,r,i,s):(X(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Ie(c.path),o=Hh(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===hr.MERGE){const c=n;c.source.fromUser?o=c3(t,e,c.path,c.children,r,i,s):(X(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ng(t,e,c.path,c.children,r,i,a,s))}else if(n.type===hr.ACK_USER_WRITE){const c=n;c.revert?o=f3(t,e,c.path,r,i,s):o=h3(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===hr.LISTEN_COMPLETE)o=d3(t,e,n.path,r,s);else throw ia("Unknown operation type: "+n.type);const l=s.getChanges();return u3(e,o,l),{viewCache:o,changes:l}}function u3(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Xm(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(x$(Xm(e)))}}function _1(t,e,n,r,i,s){const o=e.eventCache;if(Wh(r,n)!=null)return e;{let a,l;if(Ie(n))if(X(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ks(e),h=c instanceof xe?c:xe.EMPTY_NODE,f=f1(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=eg(r,ks(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Ce(n);if(c===".priority"){X(Li(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=DE(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ge(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const m=DE(r,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(c).updateChild(h,m):f=o.getNode().getImmediateChild(c)}else f=dy(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return _l(e,a,o.isFullyInitialized()||Ie(n),t.filter.filtersNodes())}}function Hh(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(Ie(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),y,null)}else{const y=Ce(n);if(!l.isCompleteForPath(n)&&Li(n)>1)return e;const w=Ge(n),P=l.getNode().getImmediateChild(y).updateChild(w,r);y===".priority"?c=h.updatePriority(l.getNode(),P):c=h.updateChild(l.getNode(),y,P,w,g1,null)}const f=l1(e,c,l.isFullyInitialized()||Ie(n),h.filtersNodes()),m=new fy(i,f,s);return _1(t,f,n,i,m,a)}function tg(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const h=new fy(i,e,s);if(Ie(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=_l(e,c,!0,t.filter.filtersNodes());else{const f=Ce(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=_l(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Ge(n),y=a.getNode().getImmediateChild(f);let w;if(Ie(m))w=r;else{const C=h.getCompleteChild(f);C!=null?GA(m)===".priority"&&C.getChild(QA(m)).isEmpty()?w=C:w=C.updateChild(m,r):w=xe.EMPTY_NODE}if(y.equals(w))l=e;else{const C=t.filter.updateChild(a.getNode(),f,w,m,h,o);l=_l(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function LE(t,e){return t.eventCache.isCompleteForChild(e)}function c3(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const h=At(n,l);LE(e,Ce(h))&&(a=tg(t,a,h,c,i,s,o))}),r.foreach((l,c)=>{const h=At(n,l);LE(e,Ce(h))||(a=tg(t,a,h,c,i,s,o))}),a}function OE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ng(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Ie(n)?c=r:c=new qe(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),w=OE(t,y,m);l=Hh(t,l,new Ye(f),w,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const y=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!y){const w=e.serverCache.getNode().getImmediateChild(f),C=OE(t,w,m);l=Hh(t,l,new Ye(f),C,i,s,o,a)}}),l}function h3(t,e,n,r,i,s,o){if(Wh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Hh(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Ie(n)){let c=new qe(null);return l.getNode().forEachChild(Po,(h,f)=>{c=c.set(new Ye(h),f)}),ng(t,e,n,c,i,s,a,o)}else return e}else{let c=new qe(null);return r.foreach((h,f)=>{const m=At(n,h);l.isCompleteForPath(m)&&(c=c.set(h,l.getNode().getChild(m)))}),ng(t,e,n,c,i,s,a,o)}}function d3(t,e,n,r,i){const s=e.serverCache,o=l1(e,s.getNode(),s.isFullyInitialized()||Ie(n),s.isFiltered());return _1(t,o,n,r,g1,i)}function f3(t,e,n,r,i,s){let o;if(Wh(r,n)!=null)return e;{const a=new fy(r,e,i),l=e.eventCache.getNode();let c;if(Ie(n)||Ce(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=eg(r,ks(e));else{const f=e.serverCache.getNode();X(f instanceof xe,"serverChildren would be complete if leaf node"),h=f1(r,f)}h=h,c=t.filter.updateFullNode(l,h,s)}else{const h=Ce(n);let f=dy(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?c=t.filter.updateChild(l,h,f,Ge(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,xe.EMPTY_NODE,Ge(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=eg(r,ks(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Wh(r,Oe())!=null,_l(e,c,o,t.filter.filtersNodes())}}function p3(t,e){const n=ks(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ie(e)&&!n.getImmediateChild(Ce(e)).isEmpty())?n.getChild(e):null}function ME(t,e,n,r){e.type===hr.MERGE&&e.source.queryId!==null&&(X(ks(t.viewCache_),"We should always have a full cache before handling merges"),X(Xm(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=l3(t.processor_,i,e,n,r);return a3(t.processor_,s.viewCache),X(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,m3(t,s.changes,s.viewCache.eventCache.getNode())}function m3(t,e,n,r){const i=t.eventRegistrations_;return j$(t.eventGenerator_,e,n,i)}/**
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
 */let VE;function g3(t){X(!VE,"__referenceConstructor has already been defined"),VE=t}function py(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return X(s!=null,"SyncTree gave us an op for an invalid query."),ME(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ME(o,e,n,r));return s}}function my(t,e){let n=null;for(const r of t.views.values())n=n||p3(r,e);return n}/**
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
 */let FE;function _3(t){X(!FE,"__referenceConstructor has already been defined"),FE=t}class UE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=r3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function y3(t,e,n,r,i){return q$(t.pendingWriteTree_,e,n,r,i),i?Fd(t,new As(i1(),e,n)):[]}function _o(t,e,n=!1){const r=G$(t.pendingWriteTree_,e);if(K$(t.pendingWriteTree_,e)){let s=new qe(null);return r.snap!=null?s=s.set(Oe(),!0):Bn(r.children,o=>{s=s.set(new Ye(o),!0)}),Fd(t,new zh(r.path,s,n))}else return[]}function Vd(t,e,n){return Fd(t,new As(s1(),e,n))}function v3(t,e,n){const r=qe.fromObject(n);return Fd(t,new eu(s1(),e,r))}function w3(t,e,n,r){const i=E1(t,r);if(i!=null){const s=T1(i),o=s.path,a=s.queryId,l=On(o,e),c=new As(o1(a),l,n);return S1(t,o,c)}else return[]}function E3(t,e,n,r){const i=E1(t,r);if(i){const s=T1(i),o=s.path,a=s.queryId,l=On(o,e),c=qe.fromObject(n),h=new eu(o1(a),l,c);return S1(t,o,h)}else return[]}function y1(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=On(o,e),c=my(a,l);if(c)return c});return d1(i,e,s,n,!0)}function Fd(t,e){return v1(e,t.syncPointTree_,null,c1(t.pendingWriteTree_,Oe()))}function v1(t,e,n,r){if(Ie(t.path))return w1(t,e,n,r);{const i=e.get(Oe());n==null&&i!=null&&(n=my(i,Oe()));let s=[];const o=Ce(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=p1(r,o);s=s.concat(v1(a,l,c,h))}return i&&(s=s.concat(py(i,t,r,n))),s}}function w1(t,e,n,r){const i=e.get(Oe());n==null&&i!=null&&(n=my(i,Oe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=p1(r,o),h=t.operationForChild(o);h&&(s=s.concat(w1(h,a,l,c)))}),i&&(s=s.concat(py(i,t,r,n))),s}function E1(t,e){return t.tagToQueryMap.get(e)}function T1(t){const e=t.indexOf("$");return X(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ye(t.substr(0,e))}}function S1(t,e,n){const r=t.syncPointTree_.get(e);X(r,"Missing sync point for query tag that we're tracking");const i=c1(t.pendingWriteTree_,e);return py(r,n,i,null)}/**
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
 */class gy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gy(n)}node(){return this.node_}}class _y{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=At(this.path_,e);return new _y(this.syncTree_,n)}node(){return y1(this.syncTree_,this.path_)}}const T3=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},$E=function(t,e,n){if(!t||typeof t!="object")return t;if(X(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return S3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return I3(t[".sv"],e);X(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},S3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:X(!1,"Unexpected server value: "+t)}},I3=function(t,e,n){t.hasOwnProperty("increment")||X(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&X(!1,"Unexpected increment value: "+r);const i=e.node();if(X(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},R3=function(t,e,n,r){return yy(e,new _y(n,t),r)},C3=function(t,e,n){return yy(t,new gy(e),n)};function yy(t,e,n){const r=t.getPriority().val(),i=$E(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=$E(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new St(a,Kt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new St(i))),o.forEachChild(Qt,(a,l)=>{const c=yy(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class vy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function wy(t,e){let n=e instanceof Ye?e:new Ye(e),r=t,i=Ce(n);for(;i!==null;){const s=Uo(r.node.children,i)||{children:{},childCount:0};r=new vy(i,r,s),n=Ge(n),i=Ce(n)}return r}function ha(t){return t.node.value}function I1(t,e){t.node.value=e,rg(t)}function R1(t){return t.node.childCount>0}function A3(t){return ha(t)===void 0&&!R1(t)}function Ud(t,e){Bn(t.node.children,(n,r)=>{e(new vy(n,t,r))})}function C1(t,e,n,r){n&&!r&&e(t),Ud(t,i=>{C1(i,e,!0,r)}),n&&r&&e(t)}function k3(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Su(t){return new Ye(t.parent===null?t.name:Su(t.parent)+"/"+t.name)}function rg(t){t.parent!==null&&P3(t.parent,t.name,t)}function P3(t,e,n){const r=A3(n),i=Gr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,rg(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,rg(t))}/**
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
 */const N3=/[\[\].#$\/\u0000-\u001F\u007F]/,b3=/[\[\].#$\u0000-\u001F\u007F]/,mp=10*1024*1024,A1=function(t){return typeof t=="string"&&t.length!==0&&!N3.test(t)},x3=function(t){return typeof t=="string"&&t.length!==0&&!b3.test(t)},D3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),x3(t)},k1=function(t,e,n){const r=n instanceof Ye?new d$(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+es(r));if(typeof e=="function")throw new Error(t+"contains a function "+es(r)+" with contents = "+e.toString());if(AA(e))throw new Error(t+"contains "+e.toString()+" "+es(r));if(typeof e=="string"&&e.length>mp/3&&md(e)>mp)throw new Error(t+"contains a string greater than "+mp+" utf8 bytes "+es(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Bn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!A1(o)))throw new Error(t+" contains an invalid key ("+o+") "+es(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);f$(r,o),k1(t,a,r),p$(r)}),i&&s)throw new Error(t+' contains ".value" child '+es(r)+" in addition to actual children.")}},L3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!A1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!D3(n))throw new Error(ID(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class O3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function M3(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!YA(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function $s(t,e,n){M3(t,n),V3(t,r=>Jn(r,e)||Jn(e,r))}function V3(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(F3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function F3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ml&&Gt("event: "+n.toString()),Eu(r)}}}/**
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
 */const U3="repo_interrupt",$3=25;class B3{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new O3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jh(),this.transactionQueueTree_=new vy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function j3(t,e,n){if(t.stats_=oy(t.repoInfo_),t.forceRestClient_||M4())t.server_=new Bh(t.repoInfo_,(r,i,s,o)=>{BE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Dt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Fr(t.repoInfo_,e,(r,i,s,o)=>{BE(t,r,i,s,o)},r=>{jE(t,r)},r=>{W3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=j4(t.repoInfo_,()=>new B$(t.stats_,t.server_)),t.infoData_=new M$,t.infoSyncTree_=new UE({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Vd(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ey(t,"connected",!1),t.serverSyncTree_=new UE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);$s(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function z3(t){const n=t.infoData_.getNode(new Ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function P1(t){return T3({timestamp:z3(t)})}function BE(t,e,n,r,i){t.dataUpdateCount++;const s=new Ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Eh(n,c=>Kt(c));o=E3(t.serverSyncTree_,s,l,i)}else{const l=Kt(n);o=w3(t.serverSyncTree_,s,l,i)}else if(r){const l=Eh(n,c=>Kt(c));o=v3(t.serverSyncTree_,s,l)}else{const l=Kt(n);o=Vd(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Sy(t,s)),$s(t.eventQueue_,a,o)}function jE(t,e){Ey(t,"connected",e),e===!1&&q3(t)}function W3(t,e){Bn(e,(n,r)=>{Ey(t,n,r)})}function Ey(t,e,n){const r=new Ye("/.info/"+e),i=Kt(n);t.infoData_.updateSnapshot(r,i);const s=Vd(t.infoSyncTree_,r,i);$s(t.eventQueue_,r,s)}function H3(t){return t.nextWriteId_++}function q3(t){N1(t,"onDisconnectEvents");const e=P1(t),n=jh();Ym(t.onDisconnect_,Oe(),(i,s)=>{const o=R3(i,s,t.serverSyncTree_,e);r1(n,i,o)});let r=[];Ym(n,Oe(),(i,s)=>{r=r.concat(Vd(t.serverSyncTree_,i,s));const o=Y3(t,i);Sy(t,o)}),t.onDisconnect_=jh(),$s(t.eventQueue_,Oe(),r)}function G3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(U3)}function N1(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Gt(n,...e)}function b1(t,e,n){return y1(t.serverSyncTree_,e,n)||xe.EMPTY_NODE}function Ty(t,e=t.transactionQueueTree_){if(e||$d(t,e),ha(e)){const n=D1(t,e);X(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&K3(t,Su(e),n)}else R1(e)&&Ud(e,n=>{Ty(t,n)})}function K3(t,e,n){const r=n.map(c=>c.currentWriteId),i=b1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];X(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=On(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{N1(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(_o(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();$d(t,wy(t.transactionQueueTree_,e)),Ty(t,t.transactionQueueTree_),$s(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)Eu(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{kn("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Sy(t,e)}},o)}function Sy(t,e){const n=x1(t,e),r=Su(n),i=D1(t,n);return Q3(t,i,r),r}function Q3(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=On(n,l.path);let h=!1,f;if(X(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,i=i.concat(_o(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=$3)h=!0,f="maxretry",i=i.concat(_o(t.serverSyncTree_,l.currentWriteId,!0));else{const m=b1(t,l.path,o);l.currentInputSnapshot=m;const y=e[a].update(m.val());if(y!==void 0){k1("transaction failed: Data returned ",y,l.path);let w=Kt(y);typeof y=="object"&&y!=null&&Gr(y,".priority")||(w=w.updatePriority(m.getPriority()));const P=l.currentWriteId,E=P1(t),g=C3(w,m,E);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=g,l.currentWriteId=H3(t),o.splice(o.indexOf(P),1),i=i.concat(y3(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(_o(t.serverSyncTree_,P,!0))}else h=!0,f="nodata",i=i.concat(_o(t.serverSyncTree_,l.currentWriteId,!0))}$s(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}$d(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Eu(r[a]);Ty(t,t.transactionQueueTree_)}function x1(t,e){let n,r=t.transactionQueueTree_;for(n=Ce(e);n!==null&&ha(r)===void 0;)r=wy(r,n),e=Ge(e),n=Ce(e);return r}function D1(t,e){const n=[];return L1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function L1(t,e,n){const r=ha(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ud(e,i=>{L1(t,i,n)})}function $d(t,e){const n=ha(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,I1(e,n.length>0?n:void 0)}Ud(e,r=>{$d(t,r)})}function Y3(t,e){const n=Su(x1(t,e)),r=wy(t.transactionQueueTree_,e);return k3(r,i=>{gp(t,i)}),gp(t,r),C1(r,i=>{gp(t,i)}),n}function gp(t,e){const n=ha(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(X(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(X(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(_o(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?I1(e,void 0):n.length=s+1,$s(t.eventQueue_,Su(e),i);for(let o=0;o<r.length;o++)Eu(r[o])}}/**
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
 */function X3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function J3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):kn(`Invalid query segment '${n}' in query '${t}'`)}return e}const zE=function(t,e){const n=Z3(t),r=n.namespace;n.domain==="firebase.com"&&Rs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Rs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||k4();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new U4(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ye(n.pathString)}},Z3=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=X3(t.substring(h,f)));const m=J3(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const w=e.indexOf(".");r=e.substring(0,w).toLowerCase(),n=e.substring(w+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class Iy{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Ie(this._path)?null:GA(this._path)}get ref(){return new da(this._repo,this._path)}get _queryIdentifier(){const e=kE(this._queryParams),n=iy(e);return n==="{}"?"default":n}get _queryObject(){return kE(this._queryParams)}isEqual(e){if(e=Xt(e),!(e instanceof Iy))return!1;const n=this._repo===e._repo,r=YA(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+h$(this._path)}}class da extends Iy{constructor(e,n){super(e,n,new cy,!1)}get parent(){const e=QA(this._path);return e===null?null:new da(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}g3(da);_3(da);/**
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
 */const eB="FIREBASE_DATABASE_EMULATOR_HOST",ig={};let tB=!1;function nB(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Rs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Gt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zE(s,i),a=o.repoInfo,l;typeof process<"u"&&uE&&(l=uE[eB]),l?(s=`http://${l}?ns=${a.namespace}`,o=zE(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new F4(t.name,t.options,e);L3("Invalid Firebase Database URL",o),Ie(o.path)||Rs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=iB(a,t,c,new V4(t.name,n));return new sB(h,t)}function rB(t,e){const n=ig[e];(!n||n[t.key]!==t)&&Rs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),G3(t),delete n[t.key]}function iB(t,e,n,r){let i=ig[e.name];i||(i={},ig[e.name]=i);let s=i[t.toURLString()];return s&&Rs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new B3(t,tB,n,r),i[t.toURLString()]=s,s}class sB{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(j3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new da(this._repo,Oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rB(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rs("Cannot call "+e+" on a deleted database.")}}/**
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
 */function oB(t){T4(Os),rr(new $n("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return nB(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),yn(cE,hE,t),yn(cE,hE,"esm2017")}Fr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};oB();const aB=t=>L.jsx(Fo,{to:"/REACT_VITE_TODOAPP/home",className:"capitalize bg-white rounded-3xl text-black px-4 py-2 hover:bg-transparent hover:border hover:border-white hover:text-white border border-transparent transition-all",children:t.title});var O1={};function lB(t){const e=new Error(t);if(e.stack===void 0)try{throw e}catch{}return e}var uB=lB,ve=uB;function cB(t){return!!t&&typeof t.then=="function"}var Ke=cB;function hB(t,e){if(t!=null)return t;throw ve(e??"Got unexpected null or undefined")}var Ze=hB;function ye(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Bd{getValue(){throw ve("BaseLoadable")}toPromise(){throw ve("BaseLoadable")}valueMaybe(){throw ve("BaseLoadable")}valueOrThrow(){throw ve(`Loadable expected value, but in "${this.state}" state`)}promiseMaybe(){throw ve("BaseLoadable")}promiseOrThrow(){throw ve(`Loadable expected promise, but in "${this.state}" state`)}errorMaybe(){throw ve("BaseLoadable")}errorOrThrow(){throw ve(`Loadable expected error, but in "${this.state}" state`)}is(e){return e.state===this.state&&e.contents===this.contents}map(e){throw ve("BaseLoadable")}}class dB extends Bd{constructor(e){super(),ye(this,"state","hasValue"),ye(this,"contents",void 0),this.contents=e}getValue(){return this.contents}toPromise(){return Promise.resolve(this.contents)}valueMaybe(){return this.contents}valueOrThrow(){return this.contents}promiseMaybe(){}errorMaybe(){}map(e){try{const n=e(this.contents);return Ke(n)?Ps(n):Qo(n)?n:Iu(n)}catch(n){return Ke(n)?Ps(n.next(()=>this.map(e))):jd(n)}}}class fB extends Bd{constructor(e){super(),ye(this,"state","hasError"),ye(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return Promise.reject(this.contents)}valueMaybe(){}promiseMaybe(){}errorMaybe(){return this.contents}errorOrThrow(){return this.contents}map(e){return this}}class M1 extends Bd{constructor(e){super(),ye(this,"state","loading"),ye(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return this.contents}valueMaybe(){}promiseMaybe(){return this.contents}promiseOrThrow(){return this.contents}errorMaybe(){}map(e){return Ps(this.contents.then(n=>{const r=e(n);if(Qo(r)){const i=r;switch(i.state){case"hasValue":return i.contents;case"hasError":throw i.contents;case"loading":return i.contents}}return r}).catch(n=>{if(Ke(n))return n.then(()=>this.map(e).contents);throw n}))}}function Iu(t){return Object.freeze(new dB(t))}function jd(t){return Object.freeze(new fB(t))}function Ps(t){return Object.freeze(new M1(t))}function V1(){return Object.freeze(new M1(new Promise(()=>{})))}function pB(t){return t.every(e=>e.state==="hasValue")?Iu(t.map(e=>e.contents)):t.some(e=>e.state==="hasError")?jd(Ze(t.find(e=>e.state==="hasError"),"Invalid loadable passed to loadableAll").contents):Ps(Promise.all(t.map(e=>e.contents)))}function F1(t){const n=(Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(i=>t[i])).map(i=>Qo(i)?i:Ke(i)?Ps(i):Iu(i)),r=pB(n);return Array.isArray(t)?r:r.map(i=>Object.getOwnPropertyNames(t).reduce((s,o,a)=>({...s,[o]:i[a]}),{}))}function Qo(t){return t instanceof Bd}const mB={of:t=>Ke(t)?Ps(t):Qo(t)?t:Iu(t),error:t=>jd(t),loading:()=>V1(),all:F1,isLoadable:Qo};var Bs={loadableWithValue:Iu,loadableWithError:jd,loadableWithPromise:Ps,loadableLoading:V1,loadableAll:F1,isLoadable:Qo,RecoilLoadable:mB},gB=Bs.loadableWithValue,_B=Bs.loadableWithError,yB=Bs.loadableWithPromise,vB=Bs.loadableLoading,wB=Bs.loadableAll,EB=Bs.isLoadable,TB=Bs.RecoilLoadable,Ru=Object.freeze({__proto__:null,loadableWithValue:gB,loadableWithError:_B,loadableWithPromise:yB,loadableLoading:vB,loadableAll:wB,isLoadable:EB,RecoilLoadable:TB});const sg={RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED:!0,RECOIL_GKS_ENABLED:new Set(["recoil_hamt_2020","recoil_sync_external_store","recoil_suppress_rerender_in_callback","recoil_memory_managament_2020"])};function SB(t,e){var n,r;const i=(n=O1[t])===null||n===void 0||(r=n.toLowerCase())===null||r===void 0?void 0:r.trim();if(i==null||i==="")return;if(!["true","false"].includes(i))throw ve(`process.env.${t} value must be 'true', 'false', or empty: ${i}`);e(i==="true")}function IB(t,e){var n;const r=(n=O1[t])===null||n===void 0?void 0:n.trim();r==null||r===""||e(r.split(/\s*,\s*|\s+/))}function RB(){var t;typeof process>"u"||((t=process)===null||t===void 0?void 0:t.env)!=null&&(SB("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED",e=>{sg.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=e}),IB("RECOIL_GKS_ENABLED",e=>{e.forEach(n=>{sg.RECOIL_GKS_ENABLED.add(n)})}))}RB();var fa=sg;function zd(t){return fa.RECOIL_GKS_ENABLED.has(t)}zd.setPass=t=>{fa.RECOIL_GKS_ENABLED.add(t)};zd.setFail=t=>{fa.RECOIL_GKS_ENABLED.delete(t)};zd.clear=()=>{fa.RECOIL_GKS_ENABLED.clear()};var Ue=zd;function CB(t,e,{error:n}={}){return null}var AB=CB,Ry=AB,_p,yp,vp;const kB=(_p=je.createMutableSource)!==null&&_p!==void 0?_p:je.unstable_createMutableSource,U1=(yp=je.useMutableSource)!==null&&yp!==void 0?yp:je.unstable_useMutableSource,$1=(vp=je.useSyncExternalStore)!==null&&vp!==void 0?vp:je.unstable_useSyncExternalStore;function PB(){var t;const{ReactCurrentDispatcher:e,ReactCurrentOwner:n}=je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;return((t=e==null?void 0:e.current)!==null&&t!==void 0?t:n.currentDispatcher).useSyncExternalStore!=null}function NB(){return Ue("recoil_transition_support")?{mode:"TRANSITION_SUPPORT",early:!0,concurrent:!0}:Ue("recoil_sync_external_store")&&$1!=null?{mode:"SYNC_EXTERNAL_STORE",early:!0,concurrent:!1}:Ue("recoil_mutable_source")&&U1!=null&&typeof window<"u"&&!window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE?Ue("recoil_suppress_rerender_in_callback")?{mode:"MUTABLE_SOURCE",early:!0,concurrent:!0}:{mode:"MUTABLE_SOURCE",early:!1,concurrent:!1}:Ue("recoil_suppress_rerender_in_callback")?{mode:"LEGACY",early:!0,concurrent:!1}:{mode:"LEGACY",early:!1,concurrent:!1}}function bB(){return!1}var Cu={createMutableSource:kB,useMutableSource:U1,useSyncExternalStore:$1,currentRendererSupportsUseSyncExternalStore:PB,reactMode:NB,isFastRefreshEnabled:bB};class Cy{constructor(e){ye(this,"key",void 0),this.key=e}toJSON(){return{key:this.key}}}class B1 extends Cy{}class j1 extends Cy{}function xB(t){return t instanceof B1||t instanceof j1}var Wd={AbstractRecoilValue:Cy,RecoilState:B1,RecoilValueReadOnly:j1,isRecoilValue:xB},DB=Wd.AbstractRecoilValue,LB=Wd.RecoilState,OB=Wd.RecoilValueReadOnly,MB=Wd.isRecoilValue,Yo=Object.freeze({__proto__:null,AbstractRecoilValue:DB,RecoilState:LB,RecoilValueReadOnly:OB,isRecoilValue:MB});function VB(t,e){return function*(){let n=0;for(const r of t)yield e(r,n++)}()}var Hd=VB;class z1{}const FB=new z1,Ns=new Map,Ay=new Map;function UB(t){return Hd(t,e=>Ze(Ay.get(e)))}function $B(t){if(Ns.has(t)){const e=`Duplicate atom key "${t}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;console.warn(e)}}function BB(t){fa.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED&&$B(t.key),Ns.set(t.key,t);const e=t.set==null?new Yo.RecoilValueReadOnly(t.key):new Yo.RecoilState(t.key);return Ay.set(t.key,e),e}class W1 extends Error{}function jB(t){const e=Ns.get(t);if(e==null)throw new W1(`Missing definition for RecoilValue: "${t}""`);return e}function zB(t){return Ns.get(t)}const qh=new Map;function WB(t){var e;if(!Ue("recoil_memory_managament_2020"))return;const n=Ns.get(t);if(n!=null&&(e=n.shouldDeleteConfigOnRelease)!==null&&e!==void 0&&e.call(n)){var r;Ns.delete(t),(r=H1(t))===null||r===void 0||r(),qh.delete(t)}}function HB(t,e){Ue("recoil_memory_managament_2020")&&(e===void 0?qh.delete(t):qh.set(t,e))}function H1(t){return qh.get(t)}var En={nodes:Ns,recoilValues:Ay,registerNode:BB,getNode:jB,getNodeMaybe:zB,deleteNodeConfigIfPossible:WB,setConfigDeletionHandler:HB,getConfigDeletionHandler:H1,recoilValuesForKeys:UB,NodeMissingError:W1,DefaultValue:z1,DEFAULT_VALUE:FB};function qB(t,e){e()}var GB={enqueueExecution:qB};function KB(t,e){return e={exports:{}},t(e,e.exports),e.exports}var QB=KB(function(t){var e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},n={},r=5,i=Math.pow(2,r),s=i-1,o=i/2,a=i/4,l={},c=function(N){return function(){return N}},h=n.hash=function(M){var N=typeof M>"u"?"undefined":e(M);if(N==="number")return M;N!=="string"&&(M+="");for(var z=0,Q=0,Y=M.length;Q<Y;++Q){var ee=M.charCodeAt(Q);z=(z<<5)-z+ee|0}return z},f=function(N){return N-=N>>1&1431655765,N=(N&858993459)+(N>>2&858993459),N=N+(N>>4)&252645135,N+=N>>8,N+=N>>16,N&127},m=function(N,z){return z>>>N&s},y=function(N){return 1<<N},w=function(N,z){return f(N&z-1)},C=function(N,z,Q,Y){var ee=Y;if(!N){var oe=Y.length;ee=new Array(oe);for(var le=0;le<oe;++le)ee[le]=Y[le]}return ee[z]=Q,ee},P=function(N,z,Q){var Y=Q.length-1,ee=0,oe=0,le=Q;if(N)ee=oe=z;else for(le=new Array(Y);ee<z;)le[oe++]=Q[ee++];for(++ee;ee<=Y;)le[oe++]=Q[ee++];return N&&(le.length=Y),le},E=function(N,z,Q,Y){var ee=Y.length;if(N){for(var oe=ee;oe>=z;)Y[oe--]=Y[oe];return Y[z]=Q,Y}for(var le=0,ue=0,pe=new Array(ee+1);le<z;)pe[ue++]=Y[le++];for(pe[z]=Q;le<ee;)pe[++ue]=Y[le++];return pe},g=1,T=2,O=3,F=4,$={__hamt_isEmpty:!0},S=function(N){return N===$||N&&N.__hamt_isEmpty},v=function(N,z,Q,Y){return{type:g,edit:N,hash:z,key:Q,value:Y,_modify:K}},I=function(N,z,Q){return{type:T,edit:N,hash:z,children:Q,_modify:ae}},A=function(N,z,Q){return{type:O,edit:N,mask:z,children:Q,_modify:J}},k=function(N,z,Q){return{type:F,edit:N,size:z,children:Q,_modify:re}},x=function(N){return N===$||N.type===g||N.type===T},R=function(N,z,Q,Y,ee){for(var oe=[],le=Y,ue=0,pe=0;le;++pe)le&1&&(oe[pe]=ee[ue++]),le>>>=1;return oe[z]=Q,k(N,ue+1,oe)},$e=function(N,z,Q,Y){for(var ee=new Array(z-1),oe=0,le=0,ue=0,pe=Y.length;ue<pe;++ue)if(ue!==Q){var Ve=Y[ue];Ve&&!S(Ve)&&(ee[oe++]=Ve,le|=1<<ue)}return A(N,le,ee)},Zt=function M(N,z,Q,Y,ee,oe){if(Q===ee)return I(N,Q,[oe,Y]);var le=m(z,Q),ue=m(z,ee);return A(N,y(le)|y(ue),le===ue?[M(N,z+r,Q,Y,ee,oe)]:le<ue?[Y,oe]:[oe,Y])},wt=function(N,z,Q,Y,ee,oe,le,ue){for(var pe=ee.length,Ve=0;Ve<pe;++Ve){var mt=ee[Ve];if(Q(le,mt.key)){var at=mt.value,Tt=oe(at);return Tt===at?ee:Tt===l?(--ue.value,P(N,Ve,ee)):C(N,Ve,v(z,Y,le,Tt),ee)}}var ln=oe();return ln===l?ee:(++ue.value,C(N,pe,v(z,Y,le,ln),ee))},pt=function(N,z){return N===z.edit},K=function(N,z,Q,Y,ee,oe,le){if(z(oe,this.key)){var ue=Y(this.value);return ue===this.value?this:ue===l?(--le.value,$):pt(N,this)?(this.value=ue,this):v(N,ee,oe,ue)}var pe=Y();return pe===l?this:(++le.value,Zt(N,Q,this.hash,this,ee,v(N,ee,oe,pe)))},ae=function(N,z,Q,Y,ee,oe,le){if(ee===this.hash){var ue=pt(N,this),pe=wt(ue,N,z,this.hash,this.children,Y,oe,le);return pe===this.children?this:pe.length>1?I(N,this.hash,pe):pe[0]}var Ve=Y();return Ve===l?this:(++le.value,Zt(N,Q,this.hash,this,ee,v(N,ee,oe,Ve)))},J=function(N,z,Q,Y,ee,oe,le){var ue=this.mask,pe=this.children,Ve=m(Q,ee),mt=y(Ve),at=w(ue,mt),Tt=ue&mt,ln=Tt?pe[at]:$,rt=ln._modify(N,z,Q+r,Y,ee,oe,le);if(ln===rt)return this;var Gi=pt(N,this),zn=ue,Wn=void 0;if(Tt&&S(rt)){if(zn&=~mt,!zn)return $;if(pe.length<=2&&x(pe[at^1]))return pe[at^1];Wn=P(Gi,at,pe)}else if(!Tt&&!S(rt)){if(pe.length>=o)return R(N,Ve,rt,ue,pe);zn|=mt,Wn=E(Gi,at,rt,pe)}else Wn=C(Gi,at,rt,pe);return Gi?(this.mask=zn,this.children=Wn,this):A(N,zn,Wn)},re=function(N,z,Q,Y,ee,oe,le){var ue=this.size,pe=this.children,Ve=m(Q,ee),mt=pe[Ve],at=(mt||$)._modify(N,z,Q+r,Y,ee,oe,le);if(mt===at)return this;var Tt=pt(N,this),ln=void 0;if(S(mt)&&!S(at))++ue,ln=C(Tt,Ve,at,pe);else if(!S(mt)&&S(at)){if(--ue,ue<=a)return $e(N,ue,Ve,pe);ln=C(Tt,Ve,$,pe)}else ln=C(Tt,Ve,at,pe);return Tt?(this.size=ue,this.children=ln,this):k(N,ue,ln)};$._modify=function(M,N,z,Q,Y,ee,oe){var le=Q();return le===l?$:(++oe.value,v(M,Y,ee,le))};function b(M,N,z,Q,Y){this._editable=M,this._edit=N,this._config=z,this._root=Q,this._size=Y}b.prototype.setTree=function(M,N){return this._editable?(this._root=M,this._size=N,this):M===this._root?this:new b(this._editable,this._edit,this._config,M,N)};var B=n.tryGetHash=function(M,N,z,Q){for(var Y=Q._root,ee=0,oe=Q._config.keyEq;;)switch(Y.type){case g:return oe(z,Y.key)?Y.value:M;case T:{if(N===Y.hash)for(var le=Y.children,ue=0,pe=le.length;ue<pe;++ue){var Ve=le[ue];if(oe(z,Ve.key))return Ve.value}return M}case O:{var mt=m(ee,N),at=y(mt);if(Y.mask&at){Y=Y.children[w(Y.mask,at)],ee+=r;break}return M}case F:{if(Y=Y.children[m(ee,N)],Y){ee+=r;break}return M}default:return M}};b.prototype.tryGetHash=function(M,N,z){return B(M,N,z,this)};var q=n.tryGet=function(M,N,z){return B(M,z._config.hash(N),N,z)};b.prototype.tryGet=function(M,N){return q(M,N,this)};var se=n.getHash=function(M,N,z){return B(void 0,M,N,z)};b.prototype.getHash=function(M,N){return se(M,N,this)},n.get=function(M,N){return B(void 0,N._config.hash(M),M,N)},b.prototype.get=function(M,N){return q(N,M,this)};var Z=n.has=function(M,N,z){return B(l,M,N,z)!==l};b.prototype.hasHash=function(M,N){return Z(M,N,this)};var fe=n.has=function(M,N){return Z(N._config.hash(M),M,N)};b.prototype.has=function(M){return fe(M,this)};var we=function(N,z){return N===z};n.make=function(M){return new b(0,0,{keyEq:M&&M.keyEq||we,hash:M&&M.hash||h},$,0)},n.empty=n.make();var ie=n.isEmpty=function(M){return M&&!!S(M._root)};b.prototype.isEmpty=function(){return ie(this)};var De=n.modifyHash=function(M,N,z,Q){var Y={value:Q._size},ee=Q._root._modify(Q._editable?Q._edit:NaN,Q._config.keyEq,0,M,N,z,Y);return Q.setTree(ee,Y.value)};b.prototype.modifyHash=function(M,N,z){return De(z,M,N,this)};var Xe=n.modify=function(M,N,z){return De(M,z._config.hash(N),N,z)};b.prototype.modify=function(M,N){return Xe(N,M,this)};var Pe=n.setHash=function(M,N,z,Q){return De(c(z),M,N,Q)};b.prototype.setHash=function(M,N,z){return Pe(M,N,z,this)};var Me=n.set=function(M,N,z){return Pe(z._config.hash(M),M,N,z)};b.prototype.set=function(M,N){return Me(M,N,this)};var en=c(l),jn=n.removeHash=function(M,N,z){return De(en,M,N,z)};b.prototype.removeHash=b.prototype.deleteHash=function(M,N){return jn(M,N,this)};var tn=n.remove=function(M,N){return jn(N._config.hash(M),M,N)};b.prototype.remove=b.prototype.delete=function(M){return tn(M,this)};var nn=n.beginMutation=function(M){return new b(M._editable+1,M._edit+1,M._config,M._root,M._size)};b.prototype.beginMutation=function(){return nn(this)};var bu=n.endMutation=function(M){return M._editable=M._editable&&M._editable-1,M};b.prototype.endMutation=function(){return bu(this)};var xu=n.mutate=function(M,N){var z=nn(N);return M(z),bu(z)};b.prototype.mutate=function(M){return xu(M,this)};var Hi=function(N){return N&&ma(N[0],N[1],N[2],N[3],N[4])},ma=function(N,z,Q,Y,ee){for(;Q<N;){var oe=z[Q++];if(oe&&!S(oe))return Du(oe,Y,[N,z,Q,Y,ee])}return Hi(ee)},Du=function(N,z,Q){switch(N.type){case g:return{value:z(N),rest:Q};case T:case F:case O:var Y=N.children;return ma(Y.length,Y,0,z,Q);default:return Hi(Q)}},ga={done:!0};function qi(M){this.v=M}qi.prototype.next=function(){if(!this.v)return ga;var M=this.v;return this.v=Hi(M.rest),M},qi.prototype[Symbol.iterator]=function(){return this};var Ws=function(N,z){return new qi(Du(N._root,z))},Et=function(N){return[N.key,N.value]},Nt=n.entries=function(M){return Ws(M,Et)};b.prototype.entries=b.prototype[Symbol.iterator]=function(){return Nt(this)};var Hs=function(N){return N.key},Lu=n.keys=function(M){return Ws(M,Hs)};b.prototype.keys=function(){return Lu(this)};var Ou=function(N){return N.value},cf=n.values=b.prototype.values=function(M){return Ws(M,Ou)};b.prototype.values=function(){return cf(this)};var Qr=n.fold=function(M,N,z){var Q=z._root;if(Q.type===g)return M(N,Q.value,Q.key);for(var Y=[Q.children],ee=void 0;ee=Y.pop();)for(var oe=0,le=ee.length;oe<le;){var ue=ee[oe++];ue&&ue.type&&(ue.type===g?N=M(N,ue.value,ue.key):Y.push(ue.children))}return N};b.prototype.fold=function(M,N){return Qr(M,N,this)};var Mu=n.forEach=function(M,N){return Qr(function(z,Q,Y){return M(Q,Y,N)},null,N)};b.prototype.forEach=function(M){return Mu(M,this)};var Vu=n.count=function(M){return M._size};b.prototype.count=function(){return Vu(this)},Object.defineProperty(b.prototype,"size",{get:b.prototype.count}),t.exports?t.exports=n:(void 0).hamt=n});class YB{constructor(e){ye(this,"_map",void 0),this._map=new Map(e==null?void 0:e.entries())}keys(){return this._map.keys()}entries(){return this._map.entries()}get(e){return this._map.get(e)}has(e){return this._map.has(e)}set(e,n){return this._map.set(e,n),this}delete(e){return this._map.delete(e),this}clone(){return Py(this)}toMap(){return new Map(this._map)}}class ky{constructor(e){if(ye(this,"_hamt",QB.empty.beginMutation()),e instanceof ky){const n=e._hamt.endMutation();e._hamt=n.beginMutation(),this._hamt=n.beginMutation()}else if(e)for(const[n,r]of e.entries())this._hamt.set(n,r)}keys(){return this._hamt.keys()}entries(){return this._hamt.entries()}get(e){return this._hamt.get(e)}has(e){return this._hamt.has(e)}set(e,n){return this._hamt.set(e,n),this}delete(e){return this._hamt.delete(e),this}clone(){return Py(this)}toMap(){return new Map(this._hamt)}}function Py(t){return Ue("recoil_hamt_2020")?new ky(t):new YB(t)}var XB={persistentMap:Py},JB=XB.persistentMap,ZB=Object.freeze({__proto__:null,persistentMap:JB});function ej(t,...e){const n=new Set;e:for(const r of t){for(const i of e)if(i.has(r))continue e;n.add(r)}return n}var vl=ej;function tj(t,e){const n=new Map;return t.forEach((r,i)=>{n.set(i,e(r,i))}),n}var Gh=tj;function nj(){return{nodeDeps:new Map,nodeToNodeSubscriptions:new Map}}function rj(t){return{nodeDeps:Gh(t.nodeDeps,e=>new Set(e)),nodeToNodeSubscriptions:Gh(t.nodeToNodeSubscriptions,e=>new Set(e))}}function wp(t,e,n,r){const{nodeDeps:i,nodeToNodeSubscriptions:s}=n,o=i.get(t);if(o&&r&&o!==r.nodeDeps.get(t))return;i.set(t,e);const a=o==null?e:vl(e,o);for(const l of a)s.has(l)||s.set(l,new Set),Ze(s.get(l)).add(t);if(o){const l=vl(o,e);for(const c of l){if(!s.has(c))return;const h=Ze(s.get(c));h.delete(t),h.size===0&&s.delete(c)}}}function ij(t,e,n,r){var i,s,o,a;const l=n.getState();r===l.currentTree.version||r===((i=l.nextTree)===null||i===void 0?void 0:i.version)||((s=l.previousTree)===null||s===void 0||s.version);const c=n.getGraph(r);if(wp(t,e,c),r===((o=l.previousTree)===null||o===void 0?void 0:o.version)){const f=n.getGraph(l.currentTree.version);wp(t,e,f,c)}if(r===((a=l.previousTree)===null||a===void 0?void 0:a.version)||r===l.currentTree.version){var h;const f=(h=l.nextTree)===null||h===void 0?void 0:h.version;if(f!==void 0){const m=n.getGraph(f);wp(t,e,m,c)}}}var Au={cloneGraph:rj,graph:nj,saveDepsToStore:ij};let sj=0;const oj=()=>sj++;let aj=0;const lj=()=>aj++;let uj=0;const cj=()=>uj++;var qd={getNextTreeStateVersion:oj,getNextStoreID:lj,getNextComponentID:cj};const{persistentMap:WE}=ZB,{graph:hj}=Au,{getNextTreeStateVersion:q1}=qd;function G1(){const t=q1();return{version:t,stateID:t,transactionMetadata:{},dirtyAtoms:new Set,atomValues:WE(),nonvalidatedAtoms:WE()}}function dj(){const t=G1();return{currentTree:t,nextTree:null,previousTree:null,commitDepth:0,knownAtoms:new Set,knownSelectors:new Set,transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(t.version,hj()),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map}}var K1={makeEmptyTreeState:G1,makeEmptyStoreState:dj,getNextTreeStateVersion:q1};class Q1{}function fj(){return new Q1}var Gd={RetentionZone:Q1,retentionZone:fj};function pj(t,e){const n=new Set(t);return n.add(e),n}function mj(t,e){const n=new Set(t);return n.delete(e),n}function gj(t,e,n){const r=new Map(t);return r.set(e,n),r}function _j(t,e,n){const r=new Map(t);return r.set(e,n(r.get(e))),r}function yj(t,e){const n=new Map(t);return n.delete(e),n}function vj(t,e){const n=new Map(t);return e.forEach(r=>n.delete(r)),n}var Y1={setByAddingToSet:pj,setByDeletingFromSet:mj,mapBySettingInMap:gj,mapByUpdatingInMap:_j,mapByDeletingFromMap:yj,mapByDeletingMultipleFromMap:vj};function*wj(t,e){let n=0;for(const r of t)e(r,n++)&&(yield r)}var Ny=wj;function Ej(t,e){return new Proxy(t,{get:(r,i)=>(!(i in r)&&i in e&&(r[i]=e[i]()),r[i]),ownKeys:r=>Object.keys(r)})}var X1=Ej;const{getNode:ku,getNodeMaybe:Tj,recoilValuesForKeys:HE}=En,{RetentionZone:qE}=Gd,{setByAddingToSet:Sj}=Y1,Ij=Object.freeze(new Set);class Rj extends Error{}function Cj(t,e,n){if(!Ue("recoil_memory_managament_2020"))return()=>{};const{nodesRetainedByZone:r}=t.getState().retention;function i(s){let o=r.get(s);o||r.set(s,o=new Set),o.add(e)}if(n instanceof qE)i(n);else if(Array.isArray(n))for(const s of n)i(s);return()=>{if(!Ue("recoil_memory_managament_2020"))return;const{retention:s}=t.getState();function o(a){const l=s.nodesRetainedByZone.get(a);l==null||l.delete(e),l&&l.size===0&&s.nodesRetainedByZone.delete(a)}if(n instanceof qE)o(n);else if(Array.isArray(n))for(const a of n)o(a)}}function by(t,e,n,r){const i=t.getState();if(i.nodeCleanupFunctions.has(n))return;const s=ku(n),o=Cj(t,n,s.retainedBy),a=s.init(t,e,r);i.nodeCleanupFunctions.set(n,()=>{a(),o()})}function Aj(t,e,n){by(t,t.getState().currentTree,e,n)}function kj(t,e){var n;const r=t.getState();(n=r.nodeCleanupFunctions.get(e))===null||n===void 0||n(),r.nodeCleanupFunctions.delete(e)}function Pj(t,e,n){return by(t,e,n,"get"),ku(n).get(t,e)}function J1(t,e,n){return ku(n).peek(t,e)}function Nj(t,e,n){var r;const i=Tj(e);return i==null||(r=i.invalidate)===null||r===void 0||r.call(i,t),{...t,atomValues:t.atomValues.clone().delete(e),nonvalidatedAtoms:t.nonvalidatedAtoms.clone().set(e,n),dirtyAtoms:Sj(t.dirtyAtoms,e)}}function bj(t,e,n,r){const i=ku(n);if(i.set==null)throw new Rj(`Attempt to set read-only RecoilValue: ${n}`);const s=i.set;return by(t,e,n,"set"),s(t,e,r)}function xj(t,e,n){const r=t.getState(),i=t.getGraph(e.version),s=ku(n).nodeType;return X1({type:s},{loadable:()=>J1(t,e,n),isActive:()=>r.knownAtoms.has(n)||r.knownSelectors.has(n),isSet:()=>s==="selector"?!1:e.atomValues.has(n),isModified:()=>e.dirtyAtoms.has(n),deps:()=>{var o;return HE((o=i.nodeDeps.get(n))!==null&&o!==void 0?o:[])},subscribers:()=>{var o,a;return{nodes:HE(Ny(Z1(t,e,new Set([n])),l=>l!==n)),components:Hd((o=(a=r.nodeToComponentSubscriptions.get(n))===null||a===void 0?void 0:a.values())!==null&&o!==void 0?o:[],([l])=>({name:l}))}}})}function Z1(t,e,n){const r=new Set,i=Array.from(n),s=t.getGraph(e.version);for(let a=i.pop();a;a=i.pop()){var o;r.add(a);const l=(o=s.nodeToNodeSubscriptions.get(a))!==null&&o!==void 0?o:Ij;for(const c of l)r.has(c)||i.push(c)}return r}var zi={getNodeLoadable:Pj,peekNodeLoadable:J1,setNodeValue:bj,initializeNode:Aj,cleanUpNode:kj,setUnvalidatedAtomValue_DEPRECATED:Nj,peekNodeInfo:xj,getDownstreamNodes:Z1};let ek=null;function Dj(t){ek=t}function Lj(){var t;(t=ek)===null||t===void 0||t()}var tk={setInvalidateMemoizedSnapshot:Dj,invalidateMemoizedSnapshot:Lj};const{getDownstreamNodes:Oj,getNodeLoadable:nk,setNodeValue:Mj}=zi,{getNextComponentID:Vj}=qd,{getNode:Fj,getNodeMaybe:rk}=En,{DefaultValue:xy}=En,{reactMode:Uj}=Cu,{AbstractRecoilValue:$j,RecoilState:Bj,RecoilValueReadOnly:jj,isRecoilValue:zj}=Yo,{invalidateMemoizedSnapshot:Wj}=tk;function Hj(t,{key:e},n=t.getState().currentTree){var r,i;const s=t.getState();n.version===s.currentTree.version||n.version===((r=s.nextTree)===null||r===void 0?void 0:r.version)||(n.version,(i=s.previousTree)===null||i===void 0||i.version);const o=nk(t,n,e);return o.state==="loading"&&o.contents.catch(()=>{}),o}function qj(t,e){const n=t.clone();return e.forEach((r,i)=>{r.state==="hasValue"&&r.contents instanceof xy?n.delete(i):n.set(i,r)}),n}function Gj(t,e,{key:n},r){if(typeof r=="function"){const i=nk(t,e,n);if(i.state==="loading"){const s=`Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;throw ve(s)}else if(i.state==="hasError")throw i.contents;return r(i.contents)}else return r}function Kj(t,e,n){if(n.type==="set"){const{recoilValue:i,valueOrUpdater:s}=n,o=Gj(t,e,i,s),a=Mj(t,e,i.key,o);for(const[l,c]of a.entries())og(e,l,c)}else if(n.type==="setLoadable"){const{recoilValue:{key:i},loadable:s}=n;og(e,i,s)}else if(n.type==="markModified"){const{recoilValue:{key:i}}=n;e.dirtyAtoms.add(i)}else if(n.type==="setUnvalidated"){var r;const{recoilValue:{key:i},unvalidatedValue:s}=n,o=rk(i);o==null||(r=o.invalidate)===null||r===void 0||r.call(o,e),e.atomValues.delete(i),e.nonvalidatedAtoms.set(i,s),e.dirtyAtoms.add(i)}else Ry(`Unknown action ${n.type}`)}function og(t,e,n){n.state==="hasValue"&&n.contents instanceof xy?t.atomValues.delete(e):t.atomValues.set(e,n),t.dirtyAtoms.add(e),t.nonvalidatedAtoms.delete(e)}function ik(t,e){t.replaceState(n=>{const r=sk(n);for(const i of e)Kj(t,r,i);return ok(t,r),Wj(),r})}function Kd(t,e){if(wl.length){const n=wl[wl.length-1];let r=n.get(t);r||n.set(t,r=[]),r.push(e)}else ik(t,[e])}const wl=[];function Qj(){const t=new Map;return wl.push(t),()=>{for(const[e,n]of t)ik(e,n);wl.pop()}}function sk(t){return{...t,atomValues:t.atomValues.clone(),nonvalidatedAtoms:t.nonvalidatedAtoms.clone(),dirtyAtoms:new Set(t.dirtyAtoms)}}function ok(t,e){const n=Oj(t,e,e.dirtyAtoms);for(const s of n){var r,i;(r=rk(s))===null||r===void 0||(i=r.invalidate)===null||i===void 0||i.call(r,e)}}function ak(t,e,n){Kd(t,{type:"set",recoilValue:e,valueOrUpdater:n})}function Yj(t,e,n){if(n instanceof xy)return ak(t,e,n);Kd(t,{type:"setLoadable",recoilValue:e,loadable:n})}function Xj(t,e){Kd(t,{type:"markModified",recoilValue:e})}function Jj(t,e,n){Kd(t,{type:"setUnvalidated",recoilValue:e,unvalidatedValue:n})}function Zj(t,{key:e},n,r=null){const i=Vj(),s=t.getState();s.nodeToComponentSubscriptions.has(e)||s.nodeToComponentSubscriptions.set(e,new Map),Ze(s.nodeToComponentSubscriptions.get(e)).set(i,[r??"<not captured>",n]);const o=Uj();if(o.early&&(o.mode==="LEGACY"||o.mode==="MUTABLE_SOURCE")){const a=t.getState().nextTree;a&&a.dirtyAtoms.has(e)&&n(a)}return{release:()=>{const a=t.getState(),l=a.nodeToComponentSubscriptions.get(e);l===void 0||!l.has(i)||(l.delete(i),l.size===0&&a.nodeToComponentSubscriptions.delete(e))}}}function e9(t,e){var n;const{currentTree:r}=t.getState(),i=Fj(e.key);(n=i.clearCache)===null||n===void 0||n.call(i,t,r)}var Tr={RecoilValueReadOnly:jj,AbstractRecoilValue:$j,RecoilState:Bj,getRecoilValueAsLoadable:Hj,setRecoilValue:ak,setRecoilValueLoadable:Yj,markRecoilValueModified:Xj,setUnvalidatedRecoilValue:Jj,subscribeToRecoilValue:Zj,isRecoilValue:zj,applyAtomValueWrites:qj,batchStart:Qj,writeLoadableToTreeState:og,invalidateDownstreams:ok,copyTreeState:sk,refreshRecoilValue:e9};function t9(t,e,n){const r=t.entries();let i=r.next();for(;!i.done;){const s=i.value;if(e.call(n,s[1],s[0],t))return!0;i=r.next()}return!1}var n9=t9;const{cleanUpNode:r9}=zi,{deleteNodeConfigIfPossible:i9,getNode:lk}=En,{RetentionZone:uk}=Gd,s9=12e4,ck=new Set;function hk(t,e){const n=t.getState(),r=n.currentTree;if(n.nextTree)return;const i=new Set;for(const o of e)if(o instanceof uk)for(const a of u9(n,o))i.add(a);else i.add(o);const s=o9(t,i);for(const o of s)l9(t,r,o)}function o9(t,e){const n=t.getState(),r=n.currentTree,i=t.getGraph(r.version),s=new Set,o=new Set;return a(e),s;function a(l){const c=new Set,h=a9(t,r,l,s,o);for(const w of h){var f;if(lk(w).retainedBy==="recoilRoot"){o.add(w);continue}if(((f=n.retention.referenceCounts.get(w))!==null&&f!==void 0?f:0)>0){o.add(w);continue}if(dk(w).some(P=>n.retention.referenceCounts.get(P))){o.add(w);continue}const C=i.nodeToNodeSubscriptions.get(w);if(C&&n9(C,P=>o.has(P))){o.add(w);continue}s.add(w),c.add(w)}const m=new Set;for(const w of c)for(const C of(y=i.nodeDeps.get(w))!==null&&y!==void 0?y:ck){var y;s.has(C)||m.add(C)}m.size&&a(m)}}function a9(t,e,n,r,i){const s=t.getGraph(e.version),o=[],a=new Set;for(;n.size>0;)l(Ze(n.values().next().value));return o;function l(c){if(r.has(c)||i.has(c)){n.delete(c);return}if(a.has(c))return;const h=s.nodeToNodeSubscriptions.get(c);if(h)for(const f of h)l(f);a.add(c),n.delete(c),o.push(c)}}function l9(t,e,n){if(!Ue("recoil_memory_managament_2020"))return;r9(t,n);const r=t.getState();r.knownAtoms.delete(n),r.knownSelectors.delete(n),r.nodeTransactionSubscriptions.delete(n),r.retention.referenceCounts.delete(n);const i=dk(n);for(const l of i){var s;(s=r.retention.nodesRetainedByZone.get(l))===null||s===void 0||s.delete(n)}e.atomValues.delete(n),e.dirtyAtoms.delete(n),e.nonvalidatedAtoms.delete(n);const o=r.graphsByVersion.get(e.version);if(o){const l=o.nodeDeps.get(n);if(l!==void 0){o.nodeDeps.delete(n);for(const c of l){var a;(a=o.nodeToNodeSubscriptions.get(c))===null||a===void 0||a.delete(n)}}o.nodeToNodeSubscriptions.delete(n)}i9(n)}function u9(t,e){var n;return(n=t.retention.nodesRetainedByZone.get(e))!==null&&n!==void 0?n:ck}function dk(t){const e=lk(t).retainedBy;return e===void 0||e==="components"||e==="recoilRoot"?[]:e instanceof uk?[e]:e}function c9(t,e){const n=t.getState();n.nextTree?n.retention.retainablesToCheckForRelease.add(e):hk(t,new Set([e]))}function h9(t,e,n){var r;if(!Ue("recoil_memory_managament_2020"))return;const i=t.getState().retention.referenceCounts,s=((r=i.get(e))!==null&&r!==void 0?r:0)+n;s===0?fk(t,e):i.set(e,s)}function fk(t,e){if(!Ue("recoil_memory_managament_2020"))return;t.getState().retention.referenceCounts.delete(e),c9(t,e)}function d9(t){if(!Ue("recoil_memory_managament_2020"))return;const e=t.getState();hk(t,e.retention.retainablesToCheckForRelease),e.retention.retainablesToCheckForRelease.clear()}function f9(t){return t===void 0?"recoilRoot":t}var js={SUSPENSE_TIMEOUT_MS:s9,updateRetainCount:h9,updateRetainCountToZero:fk,releaseScheduledRetainablesNow:d9,retainedByOptionWithDefault:f9};const{unstable_batchedUpdates:p9}=Zb;var m9={unstable_batchedUpdates:p9};const{unstable_batchedUpdates:g9}=m9;var _9={unstable_batchedUpdates:g9};const{batchStart:y9}=Tr,{unstable_batchedUpdates:v9}=_9;let Dy=v9||(t=>t());const w9=t=>{Dy=t},E9=()=>Dy,T9=t=>{Dy(()=>{let e=()=>{};try{e=y9(),t()}finally{e()}})};var Qd={getBatcher:E9,setBatcher:w9,batchUpdates:T9};function*S9(t){for(const e of t)for(const n of e)yield n}var pk=S9;const mk=typeof Window>"u"||typeof window>"u",I9=t=>!mk&&(t===window||t instanceof Window),R9=typeof navigator<"u"&&navigator.product==="ReactNative";var Yd={isSSR:mk,isReactNative:R9,isWindow:I9};function C9(t,e){let n;return(...r)=>{n||(n={});const i=e(...r);return Object.hasOwnProperty.call(n,i)||(n[i]=t(...r)),n[i]}}function A9(t,e){let n,r;return(...i)=>{const s=e(...i);return n===s||(n=s,r=t(...i)),r}}function k9(t,e){let n,r;return[(...o)=>{const a=e(...o);return n===a||(n=a,r=t(...o)),r},()=>{n=null}]}var P9={memoizeWithArgsHash:C9,memoizeOneWithArgsHash:A9,memoizeOneWithArgsHashAndInvalidation:k9};const{batchUpdates:ag}=Qd,{initializeNode:N9,peekNodeInfo:b9}=zi,{graph:x9}=Au,{getNextStoreID:D9}=qd,{DEFAULT_VALUE:L9,recoilValues:GE,recoilValuesForKeys:KE}=En,{AbstractRecoilValue:O9,getRecoilValueAsLoadable:M9,setRecoilValue:QE,setUnvalidatedRecoilValue:V9}=Tr,{updateRetainCount:qc}=js,{setInvalidateMemoizedSnapshot:F9}=tk,{getNextTreeStateVersion:U9,makeEmptyStoreState:$9}=K1,{isSSR:B9}=Yd,{memoizeOneWithArgsHashAndInvalidation:j9}=P9;class Xd{constructor(e,n){ye(this,"_store",void 0),ye(this,"_refCount",1),ye(this,"getLoadable",r=>(this.checkRefCount_INTERNAL(),M9(this._store,r))),ye(this,"getPromise",r=>(this.checkRefCount_INTERNAL(),this.getLoadable(r).toPromise())),ye(this,"getNodes_UNSTABLE",r=>{if(this.checkRefCount_INTERNAL(),(r==null?void 0:r.isModified)===!0){if((r==null?void 0:r.isInitialized)===!1)return[];const o=this._store.getState().currentTree;return KE(o.dirtyAtoms)}const i=this._store.getState().knownAtoms,s=this._store.getState().knownSelectors;return(r==null?void 0:r.isInitialized)==null?GE.values():r.isInitialized===!0?KE(pk([i,s])):Ny(GE.values(),({key:o})=>!i.has(o)&&!s.has(o))}),ye(this,"getInfo_UNSTABLE",({key:r})=>(this.checkRefCount_INTERNAL(),b9(this._store,this._store.getState().currentTree,r))),ye(this,"map",r=>{this.checkRefCount_INTERNAL();const i=new lg(this,ag);return r(i),i}),ye(this,"asyncMap",async r=>{this.checkRefCount_INTERNAL();const i=new lg(this,ag);return i.retain(),await r(i),i.autoRelease_INTERNAL(),i}),this._store={storeID:D9(),parentStoreID:n,getState:()=>e,replaceState:r=>{e.currentTree=r(e.currentTree)},getGraph:r=>{const i=e.graphsByVersion;if(i.has(r))return Ze(i.get(r));const s=x9();return i.set(r,s),s},subscribeToTransactions:()=>({release:()=>{}}),addTransactionMetadata:()=>{throw ve("Cannot subscribe to Snapshots")}};for(const r of this._store.getState().knownAtoms)N9(this._store,r,"get"),qc(this._store,r,1);this.autoRelease_INTERNAL()}retain(){this._refCount<=0,this._refCount++;let e=!1;return()=>{e||(e=!0,this._release())}}autoRelease_INTERNAL(){B9||window.setTimeout(()=>this._release(),10)}_release(){if(this._refCount--,this._refCount===0){if(this._store.getState().nodeCleanupFunctions.forEach(e=>e()),this._store.getState().nodeCleanupFunctions.clear(),!Ue("recoil_memory_managament_2020"))return}else this._refCount<0}isRetained(){return this._refCount>0}checkRefCount_INTERNAL(){Ue("recoil_memory_managament_2020")&&this._refCount<=0}getStore_INTERNAL(){return this.checkRefCount_INTERNAL(),this._store}getID(){return this.checkRefCount_INTERNAL(),this._store.getState().currentTree.stateID}getStoreID(){return this.checkRefCount_INTERNAL(),this._store.storeID}}function gk(t,e,n=!1){const r=t.getState(),i=n?U9():e.version;return{currentTree:{version:n?i:e.version,stateID:n?i:e.stateID,transactionMetadata:{...e.transactionMetadata},dirtyAtoms:new Set(e.dirtyAtoms),atomValues:e.atomValues.clone(),nonvalidatedAtoms:e.nonvalidatedAtoms.clone()},commitDepth:0,nextTree:null,previousTree:null,knownAtoms:new Set(r.knownAtoms),knownSelectors:new Set(r.knownSelectors),transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(i,t.getGraph(e.version)),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map(Hd(r.nodeCleanupFunctions.entries(),([s])=>[s,()=>{}]))}}function z9(t){const e=new Xd($9());return t!=null?e.map(t):e}const[YE,_k]=j9((t,e)=>{var n;const r=t.getState(),i=e==="latest"?(n=r.nextTree)!==null&&n!==void 0?n:r.currentTree:Ze(r.previousTree);return new Xd(gk(t,i),t.storeID)},(t,e)=>{var n,r;return String(e)+String(t.storeID)+String((n=t.getState().nextTree)===null||n===void 0?void 0:n.version)+String(t.getState().currentTree.version)+String((r=t.getState().previousTree)===null||r===void 0?void 0:r.version)});F9(_k);function W9(t,e="latest"){const n=YE(t,e);return n.isRetained()?n:(_k(),YE(t,e))}class lg extends Xd{constructor(e,n){super(gk(e.getStore_INTERNAL(),e.getStore_INTERNAL().getState().currentTree,!0),e.getStoreID()),ye(this,"_batch",void 0),ye(this,"set",(r,i)=>{this.checkRefCount_INTERNAL();const s=this.getStore_INTERNAL();this._batch(()=>{qc(s,r.key,1),QE(this.getStore_INTERNAL(),r,i)})}),ye(this,"reset",r=>{this.checkRefCount_INTERNAL();const i=this.getStore_INTERNAL();this._batch(()=>{qc(i,r.key,1),QE(this.getStore_INTERNAL(),r,L9)})}),ye(this,"setUnvalidatedAtomValues_DEPRECATED",r=>{this.checkRefCount_INTERNAL();const i=this.getStore_INTERNAL();ag(()=>{for(const[s,o]of r.entries())qc(i,s,1),V9(i,new O9(s),o)})}),this._batch=n}}var Jd={Snapshot:Xd,MutableSnapshot:lg,freshSnapshot:z9,cloneSnapshot:W9},H9=Jd.Snapshot,q9=Jd.MutableSnapshot,G9=Jd.freshSnapshot,K9=Jd.cloneSnapshot,Zd=Object.freeze({__proto__:null,Snapshot:H9,MutableSnapshot:q9,freshSnapshot:G9,cloneSnapshot:K9});function Q9(...t){const e=new Set;for(const n of t)for(const r of n)e.add(r);return e}var Y9=Q9;const{useRef:X9}=je;function J9(t){const e=X9(t);return e.current===t&&typeof t=="function"&&(e.current=t()),e}var XE=J9;const{getNextTreeStateVersion:Z9,makeEmptyStoreState:yk}=K1,{cleanUpNode:ez,getDownstreamNodes:tz,initializeNode:nz,setNodeValue:rz,setUnvalidatedAtomValue_DEPRECATED:iz}=zi,{graph:sz}=Au,{cloneGraph:oz}=Au,{getNextStoreID:vk}=qd,{createMutableSource:Ep,reactMode:wk}=Cu,{applyAtomValueWrites:az}=Tr,{releaseScheduledRetainablesNow:Ek}=js,{freshSnapshot:lz}=Zd,{useCallback:uz,useContext:Tk,useEffect:ug,useMemo:cz,useRef:hz,useState:dz}=je;function Ua(){throw ve("This component must be used inside a <RecoilRoot> component.")}const Sk=Object.freeze({storeID:vk(),getState:Ua,replaceState:Ua,getGraph:Ua,subscribeToTransactions:Ua,addTransactionMetadata:Ua});let cg=!1;function JE(t){if(cg)throw ve("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");const e=t.getState();if(e.nextTree===null){Ue("recoil_memory_managament_2020")&&Ue("recoil_release_on_cascading_update_killswitch_2021")&&e.commitDepth>0&&Ek(t);const n=e.currentTree.version,r=Z9();e.nextTree={...e.currentTree,version:r,stateID:r,dirtyAtoms:new Set,transactionMetadata:{}},e.graphsByVersion.set(r,oz(Ze(e.graphsByVersion.get(n))))}}const Ik=je.createContext({current:Sk}),ef=()=>Tk(Ik),Rk=je.createContext(null);function fz(){return Tk(Rk)}function Ly(t,e,n){const r=tz(t,n,n.dirtyAtoms);for(const i of r){const s=e.nodeToComponentSubscriptions.get(i);if(s)for(const[o,[a,l]]of s)l(n)}}function Ck(t){const e=t.getState(),n=e.currentTree,r=n.dirtyAtoms;if(r.size){for(const[i,s]of e.nodeTransactionSubscriptions)if(r.has(i))for(const[o,a]of s)a(t);for(const[i,s]of e.transactionSubscriptions)s(t);(!wk().early||e.suspendedComponentResolvers.size>0)&&(Ly(t,e,n),e.suspendedComponentResolvers.forEach(i=>i()),e.suspendedComponentResolvers.clear())}e.queuedComponentCallbacks_DEPRECATED.forEach(i=>i(n)),e.queuedComponentCallbacks_DEPRECATED.splice(0,e.queuedComponentCallbacks_DEPRECATED.length)}function pz(t){const e=t.getState();e.commitDepth++;try{const{nextTree:n}=e;if(n==null)return;e.previousTree=e.currentTree,e.currentTree=n,e.nextTree=null,Ck(t),e.previousTree!=null?e.graphsByVersion.delete(e.previousTree.version):Ry("Ended batch with no previous state, which is unexpected","recoil"),e.previousTree=null,Ue("recoil_memory_managament_2020")&&n==null&&Ek(t)}finally{e.commitDepth--}}function mz({setNotifyBatcherOfChange:t}){const e=ef(),[,n]=dz([]);return t(()=>n({})),ug(()=>(t(()=>n({})),()=>{t(()=>{})}),[t]),ug(()=>{GB.enqueueExecution("Batcher",()=>{pz(e.current)})}),null}function gz(t,e){const n=yk();return e({set:(r,i)=>{const s=n.currentTree,o=rz(t,s,r.key,i),a=new Set(o.keys()),l=s.nonvalidatedAtoms.clone();for(const c of a)l.delete(c);n.currentTree={...s,dirtyAtoms:Y9(s.dirtyAtoms,a),atomValues:az(s.atomValues,o),nonvalidatedAtoms:l}},setUnvalidatedAtomValues:r=>{r.forEach((i,s)=>{n.currentTree=iz(n.currentTree,s,i)})}}),n}function _z(t){const e=lz(t),n=e.getStore_INTERNAL().getState();return e.retain(),n.nodeCleanupFunctions.forEach(r=>r()),n.nodeCleanupFunctions.clear(),n}let ZE=0;function yz({initializeState_DEPRECATED:t,initializeState:e,store_INTERNAL:n,children:r}){let i;const s=y=>{const w=i.current.graphsByVersion;if(w.has(y))return Ze(w.get(y));const C=sz();return w.set(y,C),C},o=(y,w)=>{if(w==null){const{transactionSubscriptions:C}=f.current.getState(),P=ZE++;return C.set(P,y),{release:()=>{C.delete(P)}}}else{const{nodeTransactionSubscriptions:C}=f.current.getState();C.has(w)||C.set(w,new Map);const P=ZE++;return Ze(C.get(w)).set(P,y),{release:()=>{const E=C.get(w);E&&(E.delete(P),E.size===0&&C.delete(w))}}}},a=y=>{JE(f.current);for(const w of Object.keys(y))Ze(f.current.getState().nextTree).transactionMetadata[w]=y[w]},l=y=>{JE(f.current);const w=Ze(i.current.nextTree);let C;try{cg=!0,C=y(w)}finally{cg=!1}C!==w&&(i.current.nextTree=C,wk().early&&Ly(f.current,i.current,C),Ze(c.current)())},c=hz(null),h=uz(y=>{c.current=y},[c]),f=XE(()=>n??{storeID:vk(),getState:()=>i.current,replaceState:l,getGraph:s,subscribeToTransactions:o,addTransactionMetadata:a});n!=null&&(f.current=n),i=XE(()=>t!=null?gz(f.current,t):e!=null?_z(e):yk());const m=cz(()=>Ep==null?void 0:Ep(i,()=>i.current.currentTree.version),[i]);return ug(()=>{const y=f.current;for(const w of new Set(y.getState().knownAtoms))nz(y,w,"get");return()=>{for(const w of y.getState().knownAtoms)ez(y,w)}},[f]),je.createElement(Ik.Provider,{value:f},je.createElement(Rk.Provider,{value:m},je.createElement(mz,{setNotifyBatcherOfChange:h}),r))}function vz(t){const{override:e,...n}=t,r=ef();return e===!1&&r.current!==Sk?t.children:je.createElement(yz,n)}function wz(){return ef().current.storeID}var Kr={RecoilRoot:vz,useStoreRef:ef,useRecoilMutableSource:fz,useRecoilStoreID:wz,notifyComponents_FOR_TESTING:Ly,sendEndOfBatchNotifications_FOR_TESTING:Ck};function Ez(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}var Tz=Ez;const{useEffect:Sz,useRef:Iz}=je;function Rz(t){const e=Iz();return Sz(()=>{e.current=t}),e.current}var Ak=Rz;const{useStoreRef:Cz}=Kr,{SUSPENSE_TIMEOUT_MS:Az}=js,{updateRetainCount:$a}=js,{RetentionZone:kz}=Gd,{useEffect:Pz,useRef:Nz}=je,{isSSR:eT}=Yd;function bz(t){if(Ue("recoil_memory_managament_2020"))return xz(t)}function xz(t){const n=(Array.isArray(t)?t:[t]).map(o=>o instanceof kz?o:o.key),r=Cz();Pz(()=>{if(!Ue("recoil_memory_managament_2020"))return;const o=r.current;if(i.current&&!eT)window.clearTimeout(i.current),i.current=null;else for(const a of n)$a(o,a,1);return()=>{for(const a of n)$a(o,a,-1)}},[r,...n]);const i=Nz(),s=Ak(n);if(!eT&&(s===void 0||!Tz(s,n))){const o=r.current;for(const a of n)$a(o,a,1);if(s)for(const a of s)$a(o,a,-1);i.current&&window.clearTimeout(i.current),i.current=window.setTimeout(()=>{i.current=null;for(const a of n)$a(o,a,-1)},Az)}}var Oy=bz;function Dz(){return"<component name not available>"}var Pu=Dz;const{batchUpdates:Lz}=Qd,{DEFAULT_VALUE:kk}=En,{currentRendererSupportsUseSyncExternalStore:Oz,reactMode:pa,useMutableSource:Mz,useSyncExternalStore:Vz}=Cu,{useRecoilMutableSource:Fz,useStoreRef:Sr}=Kr,{AbstractRecoilValue:hg,getRecoilValueAsLoadable:Nu,setRecoilValue:Kh,setUnvalidatedRecoilValue:Uz,subscribeToRecoilValue:Xo}=Tr,{useCallback:wn,useEffect:Jo,useMemo:Pk,useRef:El,useState:My}=je,{setByAddingToSet:$z}=Y1,{isSSR:Bz}=Yd;function Vy(t,e,n){if(t.state==="hasValue")return t.contents;throw t.state==="loading"?new Promise(i=>{const s=n.current.getState().suspendedComponentResolvers;s.add(i),Bz&&Ke(t.contents)&&t.contents.finally(()=>{s.delete(i)})}):t.state==="hasError"?t.contents:ve(`Invalid value of loadable atom "${e.key}"`)}function jz(){const t=Pu(),e=Sr(),[,n]=My([]),r=El(new Set);r.current=new Set;const i=El(new Set),s=El(new Map),o=wn(l=>{const c=s.current.get(l);c&&(c.release(),s.current.delete(l))},[s]),a=wn((l,c)=>{s.current.has(c)&&n([])},[]);return Jo(()=>{const l=e.current;vl(r.current,i.current).forEach(c=>{if(s.current.has(c))return;const h=Xo(l,new hg(c),m=>a(m,c),t);s.current.set(c,h),l.getState().nextTree?l.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{a(l.getState(),c)}):a(l.getState(),c)}),vl(i.current,r.current).forEach(c=>{o(c)}),i.current=r.current}),Jo(()=>{const l=s.current;return vl(r.current,new Set(l.keys())).forEach(c=>{const h=Xo(e.current,new hg(c),f=>a(f,c),t);l.set(c,h)}),()=>l.forEach((c,h)=>o(h))},[t,e,o,a]),Pk(()=>{function l(w){return C=>{Kh(e.current,w,C)}}function c(w){return()=>Kh(e.current,w,kk)}function h(w){var C;r.current.has(w.key)||(r.current=$z(r.current,w.key));const P=e.current.getState();return Nu(e.current,w,pa().early&&(C=P.nextTree)!==null&&C!==void 0?C:P.currentTree)}function f(w){const C=h(w);return Vy(C,w,e)}function m(w){return[f(w),l(w)]}function y(w){return[h(w),l(w)]}return{getRecoilValue:f,getRecoilValueLoadable:h,getRecoilState:m,getRecoilStateLoadable:y,getSetRecoilState:l,getResetRecoilState:c}},[r,e])}const zz={current:0};function Wz(t){const e=Sr(),n=Pu(),r=wn(()=>{var a;const l=e.current,c=l.getState(),h=pa().early&&(a=c.nextTree)!==null&&a!==void 0?a:c.currentTree;return{loadable:Nu(l,t,h),key:t.key}},[e,t]),i=wn(a=>{let l;return()=>{var c,h;const f=a();return(c=l)!==null&&c!==void 0&&c.loadable.is(f.loadable)&&((h=l)===null||h===void 0?void 0:h.key)===f.key?l:(l=f,f)}},[]),s=Pk(()=>i(r),[r,i]),o=wn(a=>{const l=e.current;return Xo(l,t,a,n).release},[e,t,n]);return Vz(o,s,s).loadable}function Hz(t){const e=Sr(),n=wn(()=>{var c;const h=e.current,f=h.getState(),m=pa().early&&(c=f.nextTree)!==null&&c!==void 0?c:f.currentTree;return Nu(h,t,m)},[e,t]),r=wn(()=>n(),[n]),i=Pu(),s=wn((c,h)=>{const f=e.current;return Xo(f,t,()=>{if(!Ue("recoil_suppress_rerender_in_callback"))return h();const y=n();l.current.is(y)||h(),l.current=y},i).release},[e,t,i,n]),o=Fz();if(o==null)throw ve("Recoil hooks must be used in components contained within a <RecoilRoot> component.");const a=Mz(o,r,s),l=El(a);return Jo(()=>{l.current=a}),a}function dg(t){const e=Sr(),n=Pu(),r=wn(()=>{var l;const c=e.current,h=c.getState(),f=pa().early&&(l=h.nextTree)!==null&&l!==void 0?l:h.currentTree;return Nu(c,t,f)},[e,t]),i=wn(()=>({loadable:r(),key:t.key}),[r,t.key]),s=wn(l=>{const c=i();return l.loadable.is(c.loadable)&&l.key===c.key?l:c},[i]);Jo(()=>{const l=Xo(e.current,t,c=>{a(s)},n);return a(s),l.release},[n,t,e,s]);const[o,a]=My(i);return o.key!==t.key?i().loadable:o.loadable}function qz(t){const e=Sr(),[,n]=My([]),r=Pu(),i=wn(()=>{var a;const l=e.current,c=l.getState(),h=pa().early&&(a=c.nextTree)!==null&&a!==void 0?a:c.currentTree;return Nu(l,t,h)},[e,t]),s=i(),o=El(s);return Jo(()=>{o.current=s}),Jo(()=>{const a=e.current,l=a.getState(),c=Xo(a,t,f=>{var m;if(!Ue("recoil_suppress_rerender_in_callback"))return n([]);const y=i();(m=o.current)!==null&&m!==void 0&&m.is(y)||n(y),o.current=y},r);if(l.nextTree)a.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{o.current=null,n([])});else{var h;if(!Ue("recoil_suppress_rerender_in_callback"))return n([]);const f=i();(h=o.current)!==null&&h!==void 0&&h.is(f)||n(f),o.current=f}return c.release},[r,i,t,e]),s}function Fy(t){return Ue("recoil_memory_managament_2020")&&Oy(t),{TRANSITION_SUPPORT:dg,SYNC_EXTERNAL_STORE:Oz()?Wz:dg,MUTABLE_SOURCE:Hz,LEGACY:qz}[pa().mode](t)}function Nk(t){const e=Sr(),n=Fy(t);return Vy(n,t,e)}function tf(t){const e=Sr();return wn(n=>{Kh(e.current,t,n)},[e,t])}function Gz(t){const e=Sr();return wn(()=>{Kh(e.current,t,kk)},[e,t])}function Kz(t){return[Nk(t),tf(t)]}function Qz(t){return[Fy(t),tf(t)]}function Yz(){const t=Sr();return(e,n={})=>{Lz(()=>{t.current.addTransactionMetadata(n),e.forEach((r,i)=>Uz(t.current,new hg(i),r))})}}function bk(t){return Ue("recoil_memory_managament_2020")&&Oy(t),dg(t)}function xk(t){const e=Sr(),n=bk(t);return Vy(n,t,e)}function Xz(t){return[xk(t),tf(t)]}var Jz={recoilComponentGetRecoilValueCount_FOR_TESTING:zz,useRecoilInterface:jz,useRecoilState:Kz,useRecoilStateLoadable:Qz,useRecoilValue:Nk,useRecoilValueLoadable:Fy,useResetRecoilState:Gz,useSetRecoilState:tf,useSetUnvalidatedAtomValues:Yz,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:bk,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:xk,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:Xz};function Zz(t,e){const n=new Map;for(const[r,i]of t)e(i,r)&&n.set(r,i);return n}var e6=Zz;function t6(t,e){const n=new Set;for(const r of t)e(r)&&n.add(r);return n}var n6=t6;function r6(...t){const e=new Map;for(let n=0;n<t.length;n++){const r=t[n].keys();let i;for(;!(i=r.next()).done;)e.set(i.value,t[n].get(i.value))}return e}var i6=r6;const{batchUpdates:s6}=Qd,{DEFAULT_VALUE:o6,getNode:Dk,nodes:a6}=En,{useStoreRef:Uy}=Kr,{AbstractRecoilValue:l6,setRecoilValueLoadable:u6}=Tr,{SUSPENSE_TIMEOUT_MS:c6}=js,{cloneSnapshot:Qh}=Zd,{useCallback:nf,useEffect:Lk,useRef:tT,useState:h6}=je,{isSSR:nT}=Yd;function rf(t){const e=Uy();Lk(()=>e.current.subscribeToTransactions(t).release,[t,e])}function rT(t){const e=t.atomValues.toMap(),n=Gh(e6(e,(r,i)=>{const o=Dk(i).persistence_UNSTABLE;return o!=null&&o.type!=="none"&&r.state==="hasValue"}),r=>r.contents);return i6(t.nonvalidatedAtoms.toMap(),n)}function d6(t){rf(nf(e=>{let n=e.getState().previousTree;const r=e.getState().currentTree;n||(n=e.getState().currentTree);const i=rT(r),s=rT(n),o=Gh(a6,l=>{var c,h,f,m;return{persistence_UNSTABLE:{type:(c=(h=l.persistence_UNSTABLE)===null||h===void 0?void 0:h.type)!==null&&c!==void 0?c:"none",backButton:(f=(m=l.persistence_UNSTABLE)===null||m===void 0?void 0:m.backButton)!==null&&f!==void 0?f:!1}}}),a=n6(r.dirtyAtoms,l=>i.has(l)||s.has(l));t({atomValues:i,previousAtomValues:s,atomInfo:o,modifiedAtoms:a,transactionMetadata:{...r.transactionMetadata}})},[t]))}function f6(t){rf(nf(e=>{const n=Qh(e,"latest"),r=Qh(e,"previous");t({snapshot:n,previousSnapshot:r})},[t]))}function p6(){const t=Uy(),[e,n]=h6(()=>Qh(t.current)),r=Ak(e),i=tT(),s=tT();if(rf(nf(a=>n(Qh(a)),[])),Lk(()=>{const a=e.retain();if(i.current&&!nT){var l;window.clearTimeout(i.current),i.current=null,(l=s.current)===null||l===void 0||l.call(s),s.current=null}return()=>{window.setTimeout(a,10)}},[e]),r!==e&&!nT){if(i.current){var o;window.clearTimeout(i.current),i.current=null,(o=s.current)===null||o===void 0||o.call(s),s.current=null}s.current=e.retain(),i.current=window.setTimeout(()=>{var a;i.current=null,(a=s.current)===null||a===void 0||a.call(s),s.current=null},c6)}return e}function Ok(t,e){var n;const r=t.getState(),i=(n=r.nextTree)!==null&&n!==void 0?n:r.currentTree,s=e.getStore_INTERNAL().getState().currentTree;s6(()=>{const o=new Set;for(const c of[i.atomValues.keys(),s.atomValues.keys()])for(const h of c){var a,l;((a=i.atomValues.get(h))===null||a===void 0?void 0:a.contents)!==((l=s.atomValues.get(h))===null||l===void 0?void 0:l.contents)&&Dk(h).shouldRestoreFromSnapshots&&o.add(h)}o.forEach(c=>{u6(t,new l6(c),s.atomValues.has(c)?Ze(s.atomValues.get(c)):o6)}),t.replaceState(c=>({...c,stateID:e.getID()}))})}function m6(){const t=Uy();return nf(e=>Ok(t.current,e),[t])}var Mk={useRecoilSnapshot:p6,gotoSnapshot:Ok,useGotoRecoilSnapshot:m6,useRecoilTransactionObserver:f6,useTransactionObservation_DEPRECATED:d6,useTransactionSubscription_DEPRECATED:rf};const{peekNodeInfo:g6}=zi,{useStoreRef:_6}=Kr;function y6(){const t=_6();return({key:e})=>g6(t.current,t.current.getState().currentTree,e)}var v6=y6;const{reactMode:w6}=Cu,{RecoilRoot:E6,useStoreRef:T6}=Kr,{useMemo:S6}=je;function I6(){w6().mode==="MUTABLE_SOURCE"&&console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");const t=T6().current;return S6(()=>{function e({children:n}){return je.createElement(E6,{store_INTERNAL:t},n)}return e},[t])}var R6=I6;const{loadableWithValue:C6}=Ru,{initializeNode:A6}=zi,{DEFAULT_VALUE:k6,getNode:P6}=En,{copyTreeState:N6,getRecoilValueAsLoadable:b6,invalidateDownstreams:x6,writeLoadableToTreeState:D6}=Tr;function iT(t){return P6(t.key).nodeType==="atom"}class L6{constructor(e,n){ye(this,"_store",void 0),ye(this,"_treeState",void 0),ye(this,"_changes",void 0),ye(this,"get",r=>{if(this._changes.has(r.key))return this._changes.get(r.key);if(!iT(r))throw ve("Reading selectors within atomicUpdate is not supported");const i=b6(this._store,r,this._treeState);if(i.state==="hasValue")return i.contents;throw i.state==="hasError"?i.contents:ve(`Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`)}),ye(this,"set",(r,i)=>{if(!iT(r))throw ve("Setting selectors within atomicUpdate is not supported");if(typeof i=="function"){const s=this.get(r);this._changes.set(r.key,i(s))}else A6(this._store,r.key,"set"),this._changes.set(r.key,i)}),ye(this,"reset",r=>{this.set(r,k6)}),this._store=e,this._treeState=n,this._changes=new Map}newTreeState_INTERNAL(){if(this._changes.size===0)return this._treeState;const e=N6(this._treeState);for(const[n,r]of this._changes)D6(e,n,C6(r));return x6(this._store,e),e}}function O6(t){return e=>{t.replaceState(n=>{const r=new L6(t,n);return e(r),r.newTreeState_INTERNAL()})}}var M6={atomicUpdater:O6},V6=M6.atomicUpdater,Vk=Object.freeze({__proto__:null,atomicUpdater:V6});function F6(t,e){if(!t)throw new Error(e)}var U6=F6,Za=U6;const{atomicUpdater:$6}=Vk,{batchUpdates:B6}=Qd,{DEFAULT_VALUE:j6}=En,{useStoreRef:z6}=Kr,{refreshRecoilValue:W6,setRecoilValue:sT}=Tr,{cloneSnapshot:H6}=Zd,{gotoSnapshot:q6}=Mk,{useCallback:G6}=je;class Fk{}const K6=new Fk;function Uk(t,e,n,r){let i=K6,s;if(B6(()=>{const a="useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";if(typeof e!="function")throw ve(a);const l=X1({...r??{},set:(h,f)=>sT(t,h,f),reset:h=>sT(t,h,j6),refresh:h=>W6(t,h),gotoSnapshot:h=>q6(t,h),transact_UNSTABLE:h=>$6(t)(h)},{snapshot:()=>{const h=H6(t);return s=h.retain(),h}}),c=e(l);if(typeof c!="function")throw ve(a);i=c(...n)}),i instanceof Fk&&Za(!1),Ke(i))i=i.finally(()=>{var a;(a=s)===null||a===void 0||a()});else{var o;(o=s)===null||o===void 0||o()}return i}function Q6(t,e){const n=z6();return G6((...r)=>Uk(n.current,t,r),e!=null?[...e,n]:void 0)}var $k={recoilCallback:Uk,useRecoilCallback:Q6};const{useStoreRef:Y6}=Kr,{refreshRecoilValue:X6}=Tr,{useCallback:J6}=je;function Z6(t){const e=Y6();return J6(()=>{const n=e.current;X6(n,t)},[t,e])}var e5=Z6;const{atomicUpdater:t5}=Vk,{useStoreRef:n5}=Kr,{useMemo:r5}=je;function i5(t,e){const n=n5();return r5(()=>(...r)=>{t5(n.current)(s=>{t(s)(...r)})},e!=null?[...e,n]:void 0)}var s5=i5;class o5{constructor(e){ye(this,"value",void 0),this.value=e}}var a5={WrappedValue:o5},l5=a5.WrappedValue,Bk=Object.freeze({__proto__:null,WrappedValue:l5});const{isFastRefreshEnabled:u5}=Cu;class oT extends Error{}class c5{constructor(e){var n,r,i;ye(this,"_name",void 0),ye(this,"_numLeafs",void 0),ye(this,"_root",void 0),ye(this,"_onHit",void 0),ye(this,"_onSet",void 0),ye(this,"_mapNodeValue",void 0),this._name=e==null?void 0:e.name,this._numLeafs=0,this._root=null,this._onHit=(n=e==null?void 0:e.onHit)!==null&&n!==void 0?n:()=>{},this._onSet=(r=e==null?void 0:e.onSet)!==null&&r!==void 0?r:()=>{},this._mapNodeValue=(i=e==null?void 0:e.mapNodeValue)!==null&&i!==void 0?i:s=>s}size(){return this._numLeafs}root(){return this._root}get(e,n){var r;return(r=this.getLeafNode(e,n))===null||r===void 0?void 0:r.value}getLeafNode(e,n){if(this._root==null)return;let r=this._root;for(;r;){if(n==null||n.onNodeVisit(r),r.type==="leaf")return this._onHit(r),r;const i=this._mapNodeValue(e(r.nodeKey));r=r.branches.get(i)}}set(e,n,r){const i=()=>{var s,o,a,l;let c,h;for(const[P,E]of e){var f,m,y;const g=this._root;if((g==null?void 0:g.type)==="leaf")throw this.invalidCacheError();const T=c;if(c=T?T.branches.get(h):g,c=(f=c)!==null&&f!==void 0?f:{type:"branch",nodeKey:P,parent:T,branches:new Map,branchKey:h},c.type!=="branch"||c.nodeKey!==P)throw this.invalidCacheError();T==null||T.branches.set(h,c),r==null||(m=r.onNodeVisit)===null||m===void 0||m.call(r,c),h=this._mapNodeValue(E),this._root=(y=this._root)!==null&&y!==void 0?y:c}const w=c?(s=c)===null||s===void 0?void 0:s.branches.get(h):this._root;if(w!=null&&(w.type!=="leaf"||w.branchKey!==h))throw this.invalidCacheError();const C={type:"leaf",value:n,parent:c,branchKey:h};(o=c)===null||o===void 0||o.branches.set(h,C),this._root=(a=this._root)!==null&&a!==void 0?a:C,this._numLeafs++,this._onSet(C),r==null||(l=r.onNodeVisit)===null||l===void 0||l.call(r,C)};try{i()}catch(s){if(s instanceof oT)this.clear(),i();else throw s}}delete(e){const n=this.root();if(!n)return!1;if(e===n)return this._root=null,this._numLeafs=0,!0;let r=e.parent,i=e.branchKey;for(;r;){var s;if(r.branches.delete(i),r===n)return r.branches.size===0?(this._root=null,this._numLeafs=0):this._numLeafs--,!0;if(r.branches.size>0)break;i=(s=r)===null||s===void 0?void 0:s.branchKey,r=r.parent}for(;r!==n;r=r.parent)if(r==null)return!1;return this._numLeafs--,!0}clear(){this._numLeafs=0,this._root=null}invalidCacheError(){const e=u5()?"Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.":"Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";throw Ry(e+(this._name!=null?` - ${this._name}`:"")),new oT}}var h5={TreeCache:c5},d5=h5.TreeCache,jk=Object.freeze({__proto__:null,TreeCache:d5});class f5{constructor(e){var n;ye(this,"_maxSize",void 0),ye(this,"_size",void 0),ye(this,"_head",void 0),ye(this,"_tail",void 0),ye(this,"_map",void 0),ye(this,"_keyMapper",void 0),this._maxSize=e.maxSize,this._size=0,this._head=null,this._tail=null,this._map=new Map,this._keyMapper=(n=e.mapKey)!==null&&n!==void 0?n:r=>r}head(){return this._head}tail(){return this._tail}size(){return this._size}maxSize(){return this._maxSize}has(e){return this._map.has(this._keyMapper(e))}get(e){const n=this._keyMapper(e),r=this._map.get(n);if(r)return this.set(e,r.value),r.value}set(e,n){const r=this._keyMapper(e);this._map.get(r)&&this.delete(e);const s=this.head(),o={key:e,right:s,left:null,value:n};s?s.left=o:this._tail=o,this._map.set(r,o),this._head=o,this._size++,this._maybeDeleteLRU()}_maybeDeleteLRU(){this.size()>this.maxSize()&&this.deleteLru()}deleteLru(){const e=this.tail();e&&this.delete(e.key)}delete(e){const n=this._keyMapper(e);if(!this._size||!this._map.has(n))return;const r=Ze(this._map.get(n)),i=r.right,s=r.left;i&&(i.left=r.left),s&&(s.right=r.right),r===this.head()&&(this._head=i),r===this.tail()&&(this._tail=s),this._map.delete(n),this._size--}clear(){this._size=0,this._head=null,this._tail=null,this._map=new Map}}var p5={LRUCache:f5},m5=p5.LRUCache,zk=Object.freeze({__proto__:null,LRUCache:m5});const{LRUCache:g5}=zk,{TreeCache:_5}=jk;function y5({name:t,maxSize:e,mapNodeValue:n=r=>r}){const r=new g5({maxSize:e}),i=new _5({name:t,mapNodeValue:n,onHit:s=>{r.set(s,!0)},onSet:s=>{const o=r.tail();r.set(s,!0),o&&i.size()>e&&i.delete(o.key)}});return i}var aT=y5;function Gn(t,e,n){if(typeof t=="string"&&!t.includes('"')&&!t.includes("\\"))return`"${t}"`;switch(typeof t){case"undefined":return"";case"boolean":return t?"true":"false";case"number":case"symbol":return String(t);case"string":return JSON.stringify(t);case"function":if((e==null?void 0:e.allowFunctions)!==!0)throw ve("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${t.name})__`}if(t===null)return"null";if(typeof t!="object"){var r;return(r=JSON.stringify(t))!==null&&r!==void 0?r:""}if(Ke(t))return"__PROMISE__";if(Array.isArray(t))return`[${t.map((i,s)=>Gn(i,e,s.toString()))}]`;if(typeof t.toJSON=="function")return Gn(t.toJSON(n),e,n);if(t instanceof Map){const i={};for(const[s,o]of t)i[typeof s=="string"?s:Gn(s,e)]=o;return Gn(i,e,n)}return t instanceof Set?Gn(Array.from(t).sort((i,s)=>Gn(i,e).localeCompare(Gn(s,e))),e,n):Symbol!==void 0&&t[Symbol.iterator]!=null&&typeof t[Symbol.iterator]=="function"?Gn(Array.from(t),e,n):`{${Object.keys(t).filter(i=>t[i]!==void 0).sort().map(i=>`${Gn(i,e)}:${Gn(t[i],e,i)}`).join(",")}}`}function v5(t,e={allowFunctions:!1}){return Gn(t,e)}var sf=v5;const{TreeCache:w5}=jk,Ec={equality:"reference",eviction:"keep-all",maxSize:1/0};function E5({equality:t=Ec.equality,eviction:e=Ec.eviction,maxSize:n=Ec.maxSize}=Ec,r){const i=T5(t);return S5(e,n,i,r)}function T5(t){switch(t){case"reference":return e=>e;case"value":return e=>sf(e)}throw ve(`Unrecognized equality policy ${t}`)}function S5(t,e,n,r){switch(t){case"keep-all":return new w5({name:r,mapNodeValue:n});case"lru":return aT({name:r,maxSize:Ze(e),mapNodeValue:n});case"most-recent":return aT({name:r,maxSize:1,mapNodeValue:n})}throw ve(`Unrecognized eviction policy ${t}`)}var I5=E5;function R5(t){return()=>null}var C5={startPerfBlock:R5};const{isLoadable:A5,loadableWithError:Tc,loadableWithPromise:k5,loadableWithValue:Tp}=Ru,{WrappedValue:Wk}=Bk,{getNodeLoadable:Sc,peekNodeLoadable:P5,setNodeValue:N5}=zi,{saveDepsToStore:b5}=Au,{DEFAULT_VALUE:x5,getConfigDeletionHandler:D5,getNode:L5,registerNode:lT}=En,{isRecoilValue:O5}=Yo,{markRecoilValueModified:uT}=Tr,{retainedByOptionWithDefault:M5}=js,{recoilCallback:V5}=$k,{startPerfBlock:F5}=C5;class Hk{}const Ba=new Hk,ja=[],Ic=new Map,U5=(()=>{let t=0;return()=>t++})();function qk(t){let e=null;const{key:n,get:r,cachePolicy_UNSTABLE:i}=t,s=t.set!=null?t.set:void 0,o=new Set,a=I5(i??{equality:"reference",eviction:"keep-all"},n),l=M5(t.retainedBy_UNSTABLE),c=new Map;let h=0;function f(){return!Ue("recoil_memory_managament_2020")||h>0}function m(b){return b.getState().knownSelectors.add(n),h++,()=>{h--}}function y(){return D5(n)!==void 0&&!f()}function w(b,B,q,se,Z){wt(B,se,Z),C(b,q)}function C(b,B){$e(b,B)&&R(b),E(B,!0)}function P(b,B){$e(b,B)&&(Ze(A(b)).stateVersions.clear(),E(B,!1))}function E(b,B){const q=Ic.get(b);if(q!=null){for(const se of q)uT(se,Ze(e));B&&Ic.delete(b)}}function g(b,B){let q=Ic.get(B);q==null&&Ic.set(B,q=new Set),q.add(b)}function T(b,B,q,se,Z,fe){return B.then(we=>{if(!f())throw R(b),Ba;const ie=Tp(we);return w(b,q,Z,ie,se),we}).catch(we=>{if(!f())throw R(b),Ba;if(Ke(we))return O(b,we,q,se,Z,fe);const ie=Tc(we);throw w(b,q,Z,ie,se),we})}function O(b,B,q,se,Z,fe){return B.then(we=>{if(!f())throw R(b),Ba;fe.loadingDepKey!=null&&fe.loadingDepPromise===B?q.atomValues.set(fe.loadingDepKey,Tp(we)):b.getState().knownSelectors.forEach(Pe=>{q.atomValues.delete(Pe)});const ie=S(b,q);if(ie&&ie.state!=="loading"){if(($e(b,Z)||A(b)==null)&&C(b,Z),ie.state==="hasValue")return ie.contents;throw ie.contents}if(!$e(b,Z)){const Pe=I(b,q);if(Pe!=null)return Pe.loadingLoadable.contents}const[De,Xe]=$(b,q,Z);if(De.state!=="loading"&&w(b,q,Z,De,Xe),De.state==="hasError")throw De.contents;return De.contents}).catch(we=>{if(we instanceof Hk)throw Ba;if(!f())throw R(b),Ba;const ie=Tc(we);throw w(b,q,Z,ie,se),we})}function F(b,B,q,se){var Z,fe,we,ie;if($e(b,se)||B.version===((Z=b.getState())===null||Z===void 0||(fe=Z.currentTree)===null||fe===void 0?void 0:fe.version)||B.version===((we=b.getState())===null||we===void 0||(ie=we.nextTree)===null||ie===void 0?void 0:ie.version)){var De,Xe,Pe;b5(n,q,b,(De=(Xe=b.getState())===null||Xe===void 0||(Pe=Xe.nextTree)===null||Pe===void 0?void 0:Pe.version)!==null&&De!==void 0?De:b.getState().currentTree.version)}for(const Me of q)o.add(Me)}function $(b,B,q){const se=F5(n);let Z=!0,fe=!0;const we=()=>{se(),fe=!1};let ie,De=!1,Xe;const Pe={loadingDepKey:null,loadingDepPromise:null},Me=new Map;function en({key:tn}){const nn=Sc(b,B,tn);switch(Me.set(tn,nn),Z||(F(b,B,new Set(Me.keys()),q),P(b,q)),nn.state){case"hasValue":return nn.contents;case"hasError":throw nn.contents;case"loading":throw Pe.loadingDepKey=tn,Pe.loadingDepPromise=nn.contents,nn.contents}throw ve("Invalid Loadable state")}const jn=tn=>(...nn)=>{if(fe)throw ve("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");return e==null&&Za(!1),V5(b,tn,nn,{node:e})};try{ie=r({get:en,getCallback:jn}),ie=O5(ie)?en(ie):ie,A5(ie)&&(ie.state==="hasError"&&(De=!0),ie=ie.contents),Ke(ie)?ie=T(b,ie,B,Me,q,Pe).finally(we):we(),ie=ie instanceof Wk?ie.value:ie}catch(tn){ie=tn,Ke(ie)?ie=O(b,ie,B,Me,q,Pe).finally(we):(De=!0,we())}return De?Xe=Tc(ie):Ke(ie)?Xe=k5(ie):Xe=Tp(ie),Z=!1,x(b,q,Me),F(b,B,new Set(Me.keys()),q),[Xe,Me]}function S(b,B){let q=B.atomValues.get(n);if(q!=null)return q;const se=new Set;try{q=a.get(fe=>(typeof fe!="string"&&Za(!1),Sc(b,B,fe).contents),{onNodeVisit:fe=>{fe.type==="branch"&&fe.nodeKey!==n&&se.add(fe.nodeKey)}})}catch(fe){throw ve(`Problem with cache lookup for selector "${n}": ${fe.message}`)}if(q){var Z;B.atomValues.set(n,q),F(b,B,se,(Z=A(b))===null||Z===void 0?void 0:Z.executionID)}return q}function v(b,B){const q=S(b,B);if(q!=null)return R(b),q;const se=I(b,B);if(se!=null){var Z;return((Z=se.loadingLoadable)===null||Z===void 0?void 0:Z.state)==="loading"&&g(b,se.executionID),se.loadingLoadable}const fe=U5(),[we,ie]=$(b,B,fe);return we.state==="loading"?(k(b,fe,we,ie,B),g(b,fe)):(R(b),wt(B,we,ie)),we}function I(b,B){const q=pk([c.has(b)?[Ze(c.get(b))]:[],Hd(Ny(c,([Z])=>Z!==b),([,Z])=>Z)]);function se(Z){for(const[fe,we]of Z)if(!Sc(b,B,fe).is(we))return!0;return!1}for(const Z of q){if(Z.stateVersions.get(B.version)||!se(Z.depValuesDiscoveredSoFarDuringAsyncWork))return Z.stateVersions.set(B.version,!0),Z;Z.stateVersions.set(B.version,!1)}}function A(b){return c.get(b)}function k(b,B,q,se,Z){c.set(b,{depValuesDiscoveredSoFarDuringAsyncWork:se,executionID:B,loadingLoadable:q,stateVersions:new Map([[Z.version,!0]])})}function x(b,B,q){if($e(b,B)){const se=A(b);se!=null&&(se.depValuesDiscoveredSoFarDuringAsyncWork=q)}}function R(b){c.delete(b)}function $e(b,B){var q;return B===((q=A(b))===null||q===void 0?void 0:q.executionID)}function Zt(b){return Array.from(b.entries()).map(([B,q])=>[B,q.contents])}function wt(b,B,q){b.atomValues.set(n,B);try{a.set(Zt(q),B)}catch(se){throw ve(`Problem with setting cache for selector "${n}": ${se.message}`)}}function pt(b){if(ja.includes(n)){const B=`Recoil selector has circular dependencies: ${ja.slice(ja.indexOf(n)).join(" → ")}`;return Tc(ve(B))}ja.push(n);try{return b()}finally{ja.pop()}}function K(b,B){const q=B.atomValues.get(n);return q??a.get(se=>{var Z;return typeof se!="string"&&Za(!1),(Z=P5(b,B,se))===null||Z===void 0?void 0:Z.contents})}function ae(b,B){return pt(()=>v(b,B))}function J(b){b.atomValues.delete(n)}function re(b,B){e==null&&Za(!1);for(const se of o){var q;const Z=L5(se);(q=Z.clearCache)===null||q===void 0||q.call(Z,b,B)}o.clear(),J(B),a.clear(),uT(b,e)}return s!=null?e=lT({key:n,nodeType:"selector",peek:K,get:ae,set:(B,q,se)=>{let Z=!1;const fe=new Map;function we({key:Pe}){if(Z)throw ve("Recoil: Async selector sets are not currently supported.");const Me=Sc(B,q,Pe);if(Me.state==="hasValue")return Me.contents;if(Me.state==="loading"){const en=`Getting value of asynchronous atom or selector "${Pe}" in a pending state while setting selector "${n}" is not yet supported.`;throw ve(en)}else throw Me.contents}function ie(Pe,Me){if(Z)throw ve("Recoil: Async selector sets are not currently supported.");const en=typeof Me=="function"?Me(we(Pe)):Me;N5(B,q,Pe.key,en).forEach((tn,nn)=>fe.set(nn,tn))}function De(Pe){ie(Pe,x5)}const Xe=s({set:ie,get:we,reset:De},se);if(Xe!==void 0)throw Ke(Xe)?ve("Recoil: Async selector sets are not currently supported."):ve("Recoil: selector set should be a void function.");return Z=!0,fe},init:m,invalidate:J,clearCache:re,shouldDeleteConfigOnRelease:y,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:l}):e=lT({key:n,nodeType:"selector",peek:K,get:ae,init:m,invalidate:J,clearCache:re,shouldDeleteConfigOnRelease:y,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:l})}qk.value=t=>new Wk(t);var Zo=qk;const{isLoadable:$5,loadableWithError:Sp,loadableWithPromise:Ip,loadableWithValue:Js}=Ru,{WrappedValue:Gk}=Bk,{peekNodeInfo:B5}=zi,{DEFAULT_VALUE:ts,DefaultValue:ri,getConfigDeletionHandler:Kk,registerNode:j5,setConfigDeletionHandler:z5}=En,{isRecoilValue:W5}=Yo,{getRecoilValueAsLoadable:H5,markRecoilValueModified:q5,setRecoilValue:cT,setRecoilValueLoadable:G5}=Tr,{retainedByOptionWithDefault:K5}=js,za=t=>t instanceof Gk?t.value:t;function Q5(t){const{key:e,persistence_UNSTABLE:n}=t,r=K5(t.retainedBy_UNSTABLE);let i=0;function s(g){return Ip(g.then(T=>(o=Js(T),T)).catch(T=>{throw o=Sp(T),T}))}let o=Ke(t.default)?s(t.default):$5(t.default)?t.default.state==="loading"?s(t.default.contents):t.default:Js(za(t.default));o.contents;let a;const l=new Map;function c(g){return g}function h(g,T){const O=T.then(F=>{var $,S;return((S=(($=g.getState().nextTree)!==null&&$!==void 0?$:g.getState().currentTree).atomValues.get(e))===null||S===void 0?void 0:S.contents)===O&&cT(g,E,F),F}).catch(F=>{var $,S;throw((S=(($=g.getState().nextTree)!==null&&$!==void 0?$:g.getState().currentTree).atomValues.get(e))===null||S===void 0?void 0:S.contents)===O&&G5(g,E,Sp(F)),F});return O}function f(g,T,O){var F;i++;const $=()=>{var A;i--,(A=l.get(g))===null||A===void 0||A.forEach(k=>k()),l.delete(g)};if(g.getState().knownAtoms.add(e),o.state==="loading"){const A=()=>{var k;((k=g.getState().nextTree)!==null&&k!==void 0?k:g.getState().currentTree).atomValues.has(e)||q5(g,E)};o.contents.finally(A)}const S=(F=t.effects)!==null&&F!==void 0?F:t.effects_UNSTABLE;if(S!=null){let A=function(J){if($e&&J.key===e){const re=R;return re instanceof ri?m(g,T):Ke(re)?Ip(re.then(b=>b instanceof ri?o.toPromise():b)):Js(re)}return H5(g,J)},k=function(J){return A(J).toPromise()},x=function(J){var re;const b=B5(g,(re=g.getState().nextTree)!==null&&re!==void 0?re:g.getState().currentTree,J.key);return $e&&J.key===e&&!(R instanceof ri)?{...b,isSet:!0,loadable:A(J)}:b},R=ts,$e=!0,Zt=!1,wt=null;const pt=J=>re=>{if($e){const b=A(E),B=b.state==="hasValue"?b.contents:ts;R=typeof re=="function"?re(B):re,Ke(R)&&(R=R.then(q=>(wt={effect:J,value:q},q)))}else{if(Ke(re))throw ve("Setting atoms to async values is not implemented.");typeof re!="function"&&(wt={effect:J,value:za(re)}),cT(g,E,typeof re=="function"?b=>{const B=za(re(b));return wt={effect:J,value:B},B}:za(re))}},K=J=>()=>pt(J)(ts),ae=J=>re=>{var b;const{release:B}=g.subscribeToTransactions(q=>{var se;let{currentTree:Z,previousTree:fe}=q.getState();fe||(fe=Z);const we=(se=Z.atomValues.get(e))!==null&&se!==void 0?se:o;if(we.state==="hasValue"){var ie,De,Xe,Pe;const Me=we.contents,en=(ie=fe.atomValues.get(e))!==null&&ie!==void 0?ie:o,jn=en.state==="hasValue"?en.contents:ts;((De=wt)===null||De===void 0?void 0:De.effect)!==J||((Xe=wt)===null||Xe===void 0?void 0:Xe.value)!==Me?re(Me,jn,!Z.atomValues.has(e)):((Pe=wt)===null||Pe===void 0?void 0:Pe.effect)===J&&(wt=null)}},e);l.set(g,[...(b=l.get(g))!==null&&b!==void 0?b:[],B])};for(const J of S)try{const re=J({node:E,storeID:g.storeID,parentStoreID_UNSTABLE:g.parentStoreID,trigger:O,setSelf:pt(J),resetSelf:K(J),onSet:ae(J),getPromise:k,getLoadable:A,getInfo_UNSTABLE:x});if(re!=null){var v;l.set(g,[...(v=l.get(g))!==null&&v!==void 0?v:[],re])}}catch(re){R=re,Zt=!0}if($e=!1,!(R instanceof ri)){var I;const J=Zt?Sp(R):Ke(R)?Ip(h(g,R)):Js(za(R));J.contents,T.atomValues.set(e,J),(I=g.getState().nextTree)===null||I===void 0||I.atomValues.set(e,J)}}return $}function m(g,T){var O,F;return(O=(F=T.atomValues.get(e))!==null&&F!==void 0?F:a)!==null&&O!==void 0?O:o}function y(g,T){if(T.atomValues.has(e))return Ze(T.atomValues.get(e));if(T.nonvalidatedAtoms.has(e)){if(a!=null)return a;if(n==null)return o;const O=T.nonvalidatedAtoms.get(e),F=n.validator(O,ts);return a=F instanceof ri?o:Js(F),a}else return o}function w(){a=void 0}function C(g,T,O){if(T.atomValues.has(e)){const F=Ze(T.atomValues.get(e));if(F.state==="hasValue"&&O===F.contents)return new Map}else if(!T.nonvalidatedAtoms.has(e)&&O instanceof ri)return new Map;return a=void 0,new Map().set(e,Js(O))}function P(){return Kk(e)!==void 0&&i<=0}const E=j5({key:e,nodeType:"atom",peek:m,get:y,set:C,init:f,invalidate:w,shouldDeleteConfigOnRelease:P,dangerouslyAllowMutability:t.dangerouslyAllowMutability,persistence_UNSTABLE:t.persistence_UNSTABLE?{type:t.persistence_UNSTABLE.type,backButton:t.persistence_UNSTABLE.backButton}:void 0,shouldRestoreFromSnapshots:!0,retainedBy:r});return E}function $y(t){const{...e}=t,n="default"in t?t.default:new Promise(()=>{});return W5(n)?Y5({...e,default:n}):Q5({...e,default:n})}function Y5(t){const e=$y({...t,default:ts,persistence_UNSTABLE:t.persistence_UNSTABLE===void 0?void 0:{...t.persistence_UNSTABLE,validator:r=>r instanceof ri?r:Ze(t.persistence_UNSTABLE).validator(r,ts)},effects:t.effects,effects_UNSTABLE:t.effects_UNSTABLE}),n=Zo({key:`${t.key}__withFallback`,get:({get:r})=>{const i=r(e);return i instanceof ri?t.default:i},set:({set:r},i)=>r(e,i),cachePolicy_UNSTABLE:{eviction:"most-recent"},dangerouslyAllowMutability:t.dangerouslyAllowMutability});return z5(n.key,Kk(t.key)),n}$y.value=t=>new Gk(t);var Qk=$y;class X5{constructor(e){var n;ye(this,"_map",void 0),ye(this,"_keyMapper",void 0),this._map=new Map,this._keyMapper=(n=e==null?void 0:e.mapKey)!==null&&n!==void 0?n:r=>r}size(){return this._map.size}has(e){return this._map.has(this._keyMapper(e))}get(e){return this._map.get(this._keyMapper(e))}set(e,n){this._map.set(this._keyMapper(e),n)}delete(e){this._map.delete(this._keyMapper(e))}clear(){this._map.clear()}}var J5={MapCache:X5},Z5=J5.MapCache,eW=Object.freeze({__proto__:null,MapCache:Z5});const{LRUCache:hT}=zk,{MapCache:tW}=eW,Rc={equality:"reference",eviction:"none",maxSize:1/0};function nW({equality:t=Rc.equality,eviction:e=Rc.eviction,maxSize:n=Rc.maxSize}=Rc){const r=rW(t);return iW(e,n,r)}function rW(t){switch(t){case"reference":return e=>e;case"value":return e=>sf(e)}throw ve(`Unrecognized equality policy ${t}`)}function iW(t,e,n){switch(t){case"keep-all":return new tW({mapKey:n});case"lru":return new hT({mapKey:n,maxSize:Ze(e)});case"most-recent":return new hT({mapKey:n,maxSize:1})}throw ve(`Unrecognized eviction policy ${t}`)}var Yk=nW;const{setConfigDeletionHandler:sW}=En;function oW(t){var e,n;const r=Yk({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return i=>{var s,o;const a=r.get(i);if(a!=null)return a;const{cachePolicyForParams_UNSTABLE:l,...c}=t,h="default"in t?t.default:new Promise(()=>{}),f=Qk({...c,key:`${t.key}__${(s=sf(i))!==null&&s!==void 0?s:"void"}`,default:typeof h=="function"?h(i):h,retainedBy_UNSTABLE:typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(i):t.retainedBy_UNSTABLE,effects:typeof t.effects=="function"?t.effects(i):typeof t.effects_UNSTABLE=="function"?t.effects_UNSTABLE(i):(o=t.effects)!==null&&o!==void 0?o:t.effects_UNSTABLE});return r.set(i,f),sW(f.key,()=>{r.delete(i)}),f}}var aW=oW;const{setConfigDeletionHandler:lW}=En;let uW=0;function cW(t){var e,n;const r=Yk({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return i=>{var s;let o;try{o=r.get(i)}catch(m){throw ve(`Problem with cache lookup for selector ${t.key}: ${m.message}`)}if(o!=null)return o;const a=`${t.key}__selectorFamily/${(s=sf(i,{allowFunctions:!0}))!==null&&s!==void 0?s:"void"}/${uW++}`,l=m=>t.get(i)(m),c=t.cachePolicy_UNSTABLE,h=typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(i):t.retainedBy_UNSTABLE;let f;if(t.set!=null){const m=t.set;f=Zo({key:a,get:l,set:(w,C)=>m(i)(w,C),cachePolicy_UNSTABLE:c,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:h})}else f=Zo({key:a,get:l,cachePolicy_UNSTABLE:c,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:h});return r.set(i,f),lW(f.key,()=>{r.delete(i)}),f}}var Wi=cW;const hW=Wi({key:"__constant",get:t=>()=>t,cachePolicyForParams_UNSTABLE:{equality:"reference"}});function dW(t){return hW(t)}var fW=dW;const pW=Wi({key:"__error",get:t=>()=>{throw ve(t)},cachePolicyForParams_UNSTABLE:{equality:"reference"}});function mW(t){return pW(t)}var gW=mW;function _W(t){return t}var yW=_W;const{loadableWithError:Xk,loadableWithPromise:Jk,loadableWithValue:Zk}=Ru;function of(t,e){const n=Array(e.length).fill(void 0),r=Array(e.length).fill(void 0);for(const[i,s]of e.entries())try{n[i]=t(s)}catch(o){r[i]=o}return[n,r]}function vW(t){return t!=null&&!Ke(t)}function af(t){return Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(e=>t[e])}function fg(t,e){return Array.isArray(t)?e:Object.getOwnPropertyNames(t).reduce((n,r,i)=>({...n,[r]:e[i]}),{})}function No(t,e,n){const r=n.map((i,s)=>i==null?Zk(e[s]):Ke(i)?Jk(i):Xk(i));return fg(t,r)}function wW(t,e){return e.map((n,r)=>n===void 0?t[r]:n)}const EW=Wi({key:"__waitForNone",get:t=>({get:e})=>{const n=af(t),[r,i]=of(e,n);return No(t,r,i)},dangerouslyAllowMutability:!0}),TW=Wi({key:"__waitForAny",get:t=>({get:e})=>{const n=af(t),[r,i]=of(e,n);return i.some(s=>!Ke(s))?No(t,r,i):new Promise(s=>{for(const[o,a]of i.entries())Ke(a)&&a.then(l=>{r[o]=l,i[o]=void 0,s(No(t,r,i))}).catch(l=>{i[o]=l,s(No(t,r,i))})})},dangerouslyAllowMutability:!0}),SW=Wi({key:"__waitForAll",get:t=>({get:e})=>{const n=af(t),[r,i]=of(e,n);if(i.every(o=>o==null))return fg(t,r);const s=i.find(vW);if(s!=null)throw s;return Promise.all(i).then(o=>fg(t,wW(r,o)))},dangerouslyAllowMutability:!0}),IW=Wi({key:"__waitForAllSettled",get:t=>({get:e})=>{const n=af(t),[r,i]=of(e,n);return i.every(s=>!Ke(s))?No(t,r,i):Promise.all(i.map((s,o)=>Ke(s)?s.then(a=>{r[o]=a,i[o]=void 0}).catch(a=>{r[o]=void 0,i[o]=a}):null)).then(()=>No(t,r,i))},dangerouslyAllowMutability:!0}),RW=Wi({key:"__noWait",get:t=>({get:e})=>{try{return Zo.value(Zk(e(t)))}catch(n){return Zo.value(Ke(n)?Jk(n):Xk(n))}},dangerouslyAllowMutability:!0});var CW={waitForNone:EW,waitForAny:TW,waitForAll:SW,waitForAllSettled:IW,noWait:RW};const{RecoilLoadable:AW}=Ru,{DefaultValue:kW}=En,{RecoilRoot:PW,useRecoilStoreID:NW}=Kr,{isRecoilValue:bW}=Yo,{retentionZone:xW}=Gd,{freshSnapshot:DW}=Zd,{useRecoilState:LW,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:OW,useRecoilStateLoadable:MW,useRecoilValue:VW,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:FW,useRecoilValueLoadable:UW,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:$W,useResetRecoilState:BW,useSetRecoilState:jW}=Jz,{useGotoRecoilSnapshot:zW,useRecoilSnapshot:WW,useRecoilTransactionObserver:HW}=Mk,{useRecoilCallback:qW}=$k,{noWait:GW,waitForAll:KW,waitForAllSettled:QW,waitForAny:YW,waitForNone:XW}=CW;var By={DefaultValue:kW,isRecoilValue:bW,RecoilLoadable:AW,RecoilEnv:fa,RecoilRoot:PW,useRecoilStoreID:NW,useRecoilBridgeAcrossReactRoots_UNSTABLE:R6,atom:Qk,selector:Zo,atomFamily:aW,selectorFamily:Wi,constSelector:fW,errorSelector:gW,readOnlySelector:yW,noWait:GW,waitForNone:XW,waitForAny:YW,waitForAll:KW,waitForAllSettled:QW,useRecoilValue:VW,useRecoilValueLoadable:UW,useRecoilState:LW,useRecoilStateLoadable:MW,useSetRecoilState:jW,useResetRecoilState:BW,useGetRecoilValueInfo_UNSTABLE:v6,useRecoilRefresher_UNSTABLE:e5,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:$W,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:FW,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:OW,useRecoilCallback:qW,useRecoilTransaction_UNSTABLE:s5,useGotoRecoilSnapshot:zW,useRecoilSnapshot:WW,useRecoilTransactionObserver_UNSTABLE:HW,snapshot_UNSTABLE:DW,useRetain:Oy,retentionZone:xW},JW=By.RecoilRoot,eP=By.atom,sr=By.useRecoilState;const lf=eP({key:"userAtom",default:{}}),ZW=async()=>{const[t,e]=sr(lf);U.useEffect(()=>{Pt.onAuthStateChanged(async n=>{if(n){const r=dn(fn,"Users",n.uid),i=await Di(r);i.exists()&&e(i.data())}})},[])},zs=eP({key:"TasksAtom",default:[]}),eH=t=>{const e=Ui(),[n,r]=sr(zs);ZW();const[i,s]=sr(lf),o=async()=>{await Pt.signOut(),r([]),s({}),e("/REACT_VITE_TODOAPP/home")},[a,l]=U.useState();return U.useEffect(()=>{Pt.onAuthStateChanged(c=>{l(c)})},[]),L.jsx(L.Fragment,{children:L.jsxs("div",{className:"header container m-auto md:p-5 lg:p-5 flex justify-between items-center py-2 px-2 md:px-10 md:py-5",children:[L.jsx(Fo,{to:"/REACT_VITE_TODOAPP/",children:L.jsx("h2",{className:`${t.activeTextAnimation?"animateText":""} text-white`,style:{textShadow:t.activeTextAnimation?"":"1px 1px 3px white"},children:"TODO"})}),L.jsxs("div",{className:"flex items-center gap-2",children:[a?L.jsxs("button",{className:"BtnLogOut",onClick:o,children:[L.jsx("div",{className:"sign",children:L.jsx("svg",{viewBox:"0 0 512 512",children:L.jsx("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})})}),L.jsx("div",{className:"text",children:"Logout"})]}):L.jsx(Fo,{to:"/REACT_VITE_TODOAPP/home/login",className:"btn",style:{fontSize:"14px",padding:"3px",height:"fit-content"},children:"Login"}),L.jsx("a",{href:"https://github.com/Elsayed-Rady-Elsayed",children:L.jsx("i",{className:"fa-brands fa-github text-gray-600 hover:text-white transition-all"})}),L.jsx("a",{href:"https://www.linkedin.com/in/elsayed-rady-elsayed-73b541288/",children:L.jsx("i",{className:"fa-brands fa-linkedin text-gray-600 hover:text-[#378fe9] transition-all"})})]})]})})},tH=t=>L.jsxs("div",{className:"onBoarding absolute left-1/2 top-1/2 p-5 text-center",style:{transform:"translate(-50%,-50%)"},children:[L.jsx("h1",{className:`text-white mb-4 py-2 ${t.activeTextAnimation?"animateText-lg":""} text-2xl md:text-4xl lg:text-4xl capitalize`,style:{},children:"start doing your tasks"}),L.jsx(aB,{title:"get started"})]}),dr=t=>{const e=U.useRef(0),[n,r]=U.useState(""),i=s=>{e.current.style.borderColor=s};return t.setClicked&&n==""?i("red"):t.setClicked&&n.length>0&&i("#596A95"),L.jsxs("div",{className:"flex flex-col text-white/80 capitalize font-light",children:[L.jsx("label",{className:"mb-2",htmlFor:t.name,children:t.placeholder}),L.jsx("input",{ref:e,style:{boxShadow:"inset 2px 5px 10px rgba(0, 0, 0, 0.3)"},id:t.name,placeholder:t.placeholder,className:"bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]",name:t.name,autoComplete:"off",type:t.type,value:n,onChange:s=>{s.target.value===""&&i("red"),t.name=="title"&&s.target.value.trim()===""&&i("red"),r(s.target.value),s.target.value.trim().length>0&&t.value(s)}})]})},nH=()=>L.jsx("div",{className:"container m-auto bg-[#121212]",children:L.jsx(jx,{})}),rH=t=>{const e=U.useRef(0),[n,r]=U.useState(""),i=s=>{e.current.style.borderColor=s};return t.setClicked&&n==""?i("red"):t.setClicked&&n.length>0&&i("#596A95"),L.jsxs("div",{className:"flex flex-col text-white/80 capitalize font-light",children:[L.jsx("label",{className:"mb-2",htmlFor:t.name,children:t.placeholder}),L.jsx("textarea",{ref:e,value:n,rows:"5",name:t.name,autoComplete:"off",placeholder:t.placeholder,id:t.name,style:{resize:"none",boxShadow:"inset 2px 5px 10px rgba(0, 0, 0, 0.3)"},onChange:s=>{s.target.value.trim()===""?i("red"):i("#596A95"),r(s.target.value),t.value(s)},className:"bg-[#222630] w-full px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"})]})},tP=t=>L.jsxs(Fo,{to:t.path,children:[L.jsx("i",{className:"fa-solid fa-arrow-left text-white"}),L.jsx("span",{className:"text-white ms-2",children:"back"})]}),uf=async()=>{const[t,e]=sr(zs);U.useEffect(()=>{Pt.onAuthStateChanged(async n=>{if(n){const r=dn(fn,"Users",n.uid),i=await Di(r);i.exists()&&e(s=>[...i.data().taskData])}})},[])},iH=()=>{uf();const t=Ui(),[e,n]=U.useState({title:"",date:"",start:"",end:"",description:"",done:!1,pending:!1}),[r,i]=U.useState(!1),[s,o]=sr(zs),[a,l]=U.useState(!1),c=w=>{const{name:C,value:P}=w.target;n(E=>({...E,[C]:P}))},[h,f]=U.useState();U.useEffect(()=>{Pt.onAuthStateChanged(w=>{f(w)})},[]);const m=w=>{w.preventDefault(),Pt.onAuthStateChanged(async C=>{C&&e.title.length>0&&e.date.length>0&&e.start.length>0&&e.end.length>0&&e.description.length>0?(await Jl(dn(fn,"Users",C.uid),{taskData:[...s,e]}),t("/REACT_VITE_TODOAPP/home")):(y(),t("/REACT_VITE_TODOAPP/home"))})},y=()=>{e.title.length>0&&e.date.length>0&&e.start.length>0&&e.end.length>0&&e.description.length>0?(l(!0),o(w=>[...w,e])):l(!1)};return L.jsx("form",{onSubmit:m,className:"w-full absolute left-1/2 top-1/2 flex justify-center p-2 md:p-0",style:{transform:"translate(-50%,-50%)"},children:L.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[L.jsx(tP,{path:"/home"}),L.jsx(dr,{setClicked:r,name:"title",placeholder:"Title",type:"text",value:c}),L.jsx(dr,{setClicked:r,value:c,name:"date",placeholder:"date",type:"date"}),L.jsxs("div",{className:"time grid grid-cols-2 gap-2 w-full",children:[L.jsx(dr,{setClicked:r,value:c,name:"start",placeholder:"start time",type:"time"}),L.jsx(dr,{setClicked:r,value:c,name:"end",placeholder:"end time",type:"time"})," "]}),L.jsx(rH,{setClicked:r,value:c,name:"description",placeholder:"description"}),L.jsx("button",{onClick:()=>{i(!0)},className:"btn w-full mt-2",children:"add task"})]})})},sH=t=>{const e=Ui(),n=()=>{window.location.reload()},[r,i]=sr(zs),s=()=>{e(`/REACT_VITE_TODOAPP/home/eidtTask/${t.id}`)},o=l=>{Pt.onAuthStateChanged(async c=>{if(c){let h=[];const f=dn(fn,"Users",c.uid),m=await Di(f);m.exists()&&(h=[...m.data().taskData],h[t.id].done=!l),await Jl(dn(fn,"Users",c.uid),{taskData:h}),e("/REACT_VITE_TODOAPP/home"),n()}else i(h=>h.map((f,m)=>m===t.id?{...f,done:!f.done}:f))})},a=()=>{Pt.onAuthStateChanged(async l=>{if(l){let c=[];const h=dn(fn,"Users",l.uid),f=await Di(h);f.exists()&&(c=[...f.data().taskData],c=c.filter((m,y)=>y!==t.id)),await Jl(dn(fn,"Users",l.uid),{taskData:c}),e("/REACT_VITE_TODOAPP/home"),n()}else{let c=[];c=[...r],c=c.filter((h,f)=>f!==t.id),i(c)}})};return L.jsxs("div",{onClick:s,className:"relative overflow-hidden cursor-pointer container m-auto bg-[#222630] w-[100%] outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid hover:border-[#596A95] border-[#2B3040]",children:[L.jsxs("div",{className:"icons absolute end-2 flex z-30",children:[t.iSdone?L.jsx("i",{onClick:l=>{l.stopPropagation(),o(t.iSdone)},className:"fa-solid fa-circle-check text-green-400 py-3 px-2"}):L.jsx("i",{onClick:l=>{l.stopPropagation(),o(t.iSdone)},className:"text-green-400 fa-regular fa-circle-check py-3 px-2"}),L.jsx("i",{onClick:l=>{l.stopPropagation(),a()},className:"fa-regular fa-trash-can text-red-500 py-3 px-2"}),L.jsx("i",{onClick:l=>{l.stopPropagation(),e(`/REACT_VITE_TODOAPP/home/timer/${t.id}`)},className:"fa-solid fa-stopwatch-20 text-yellow-500 py-3 px-2"})]}),t.iSdone?L.jsx("div",{className:"absolute w-full h-full bg-white/20 text-green-500 text-2xl font-bold flex items-center justify-center",children:"Done Task"}):"",L.jsx("h2",{className:"cursor-pointer capitalize text-2xl m-2",children:t.title}),L.jsx("p",{className:"text-gray-500 text-[12px] m-2",children:t.date}),L.jsxs("div",{className:"flex gap-5 m-2",children:[L.jsx("div",{className:"capitalize text-white text-[12px] ",children:L.jsxs("p",{children:["start : ",t.start]})}),L.jsx("div",{className:"capitalize text-white text-[12px]",children:L.jsxs("p",{children:["end : ",t.end]})})]}),L.jsx("p",{className:"text-[10px] mt-2 text-gray-400 truncate h-7 m-2",children:t.desciption})]})},oH=t=>{const e=U.useRef();return L.jsxs("div",{className:"alert bg-yellow-500 text-white flex items-center p-1 text-sm w-full",id:"warningItem",ref:e,children:[L.jsx("i",{className:"fa-solid fa-circle-exclamation me-2"}),L.jsx("span",{className:"capitalize text-[8px] md:text-[12px]",children:"you have't logined you can't save your data"}),L.jsx("span",{onClick:()=>{e.current.style.display="none"},className:"cursor-pointer ms-1 inline-block text-[8px] md:text-[12px] underline font-bold",children:"i know"})]})},aH=()=>{uf();const[t,e]=sr(zs),[n,r]=U.useState(),i=t.map((s,o)=>L.jsx(sH,{iSdone:s.done,id:o,title:s.title,date:s.date,start:s.start,end:s.end,desciption:s.description},o));return U.useEffect(()=>{Pt.onAuthStateChanged(s=>{r(s)})},[]),L.jsxs(L.Fragment,{children:[n?"":L.jsx(oH,{}),L.jsxs("div",{className:" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 m-5 md:m-3 gap-3 mt-3",children:[L.jsx(Fo,{to:"/REACT_VITE_TODOAPP/home/addTask",className:"fixed bottom-10 right-10 cursor-pointer bg-white h-10 w-10 flex items-center justify-center rounded-[50%] hover:rotate-90 transition-all duration-500",children:L.jsx("i",{className:"fa-solid fa-plus"})}),i.length>0&&n!=null?i:i.length==0&&(n==null||n!=null)?L.jsx("div",{className:"w-full text-gray-400 text-sm text-center capitalize absolute top-1/2 left-1/2",style:{transform:"translate(-50%,-50%)"},children:"no tasks yet"}):i.length>0&&n==null?i:L.jsxs("div",{className:"loader",children:[L.jsx("div",{className:"square",id:"sq1"}),L.jsx("div",{className:"square",id:"sq2"}),L.jsx("div",{className:"square",id:"sq3"}),L.jsx("div",{className:"square",id:"sq4"}),L.jsx("div",{className:"square",id:"sq5"}),L.jsx("div",{className:"square",id:"sq6"}),L.jsx("div",{className:"square",id:"sq7"}),L.jsx("div",{className:"square",id:"sq8"}),L.jsx("div",{className:"square",id:"sq9"})]})]})]})},nP=t=>{const e=U.useRef();return L.jsx("div",{className:`alert ${t.color} text-white flex items-center p-1 text-sm w-full`,id:"warningItem",ref:e,children:t.title})},lH=()=>{const t=Ui(),[e,n]=U.useState(!1),[r,i]=U.useState(!1),[s,o]=sr(lf),[a,l]=U.useState({color:"",title:""}),[c,h]=U.useState({email:"",password:""}),f=()=>{c.email.length>0&&c.password.length>6?n(!0):n(!1)},m=async w=>{if(w.preventDefault(),e&&r)try{await XM(Pt,c.email,c.password);const C=Pt.currentUser;l({color:"bg-green-500",title:"logined succesfully"}),setTimeout(()=>{t("/REACT_VITE_TODOAPP/home")},500)}catch(C){l({color:"bg-red-500",title:"email or password is wrong"}),console.log(C)}};U.useEffect(()=>{Pt.onAuthStateChanged(async w=>{if(w){const C=dn(fn,"Users",w.uid),P=await Di(C);P.exists()&&o(P.data())}})},[]);const y=w=>{const{name:C,value:P}=w.target;h(E=>({...E,[C]:P}))};return L.jsxs(L.Fragment,{children:[e&&r?L.jsx(nP,{title:a.title,color:a.color}):"",L.jsx("div",{className:"w-[90%] md:w-[50%] lg:w-[30%] h-fit absolute top-1/2 left-1/2 p-2 bg-[#222630] px-3 py-2 outline-none text-white rounded-lg border-2 border-solid border-[#2B3040]",style:{transform:"translate(-50%,-50%)"},children:L.jsxs("form",{onSubmit:m,action:"",children:[L.jsx("h2",{className:"font-semibold text-xl text-center mb-4",children:"Login"}),L.jsx(dr,{setClicked:r,name:"email",placeholder:"email",type:"email",value:y}),L.jsx(dr,{setClicked:r,name:"password",placeholder:"password",type:"password",value:y}),L.jsx("button",{onClick:()=>{i(!0),f()},className:"btn w-full mt-5",children:"Login"}),L.jsxs("p",{className:"text-center my-2 text-sm",children:["don't have an account?",L.jsxs(Fo,{to:"/REACT_VITE_TODOAPP/home/register",className:"underline cursor-pointer font-bold",children:[" ","Register"]})]})]})})]})},uH=()=>{const t=Ui(),[e,n]=U.useState(!1),[r,i]=U.useState(!1),[s,o]=sr(lf),[a,l]=U.useState({color:"",title:""}),[c,h]=U.useState({email:"",password:"",firstName:"",lastName:""}),f=()=>{c.email.length>0&&c.password.length>6&&c.firstName.length>0&&c.lastName.length>0?n(!0):n(!1)},m=async w=>{if(w.preventDefault(),e)try{await YM(Pt,c.email,c.password);const C=Pt.currentUser;C&&await y4(dn(fn,"Users",C.uid),{email:C.email,firstName:c.firstName,lastName:c.lastName}),l({color:"bg-green-500",title:"account created successfully"}),setTimeout(()=>{t("/REACT_VITE_TODOAPP/home")},500)}catch(C){l({color:"bg-red-500",title:"couldnot create your account"}),console.log(C)}};U.useEffect(()=>{Pt.onAuthStateChanged(async w=>{if(w){const C=dn(fn,"Users",w.uid),P=await Di(C);P.exists()&&o(P.data())}})},[]);const y=w=>{const{name:C,value:P}=w.target;h(E=>({...E,[C]:P}))};return L.jsxs(L.Fragment,{children:[e&&r?L.jsx(nP,{title:a.title,color:a.color}):"",L.jsx("div",{className:"w-[90%] md:w-[50%] lg:w-[30%] h-fit absolute top-1/2 left-1/2 p-2 bg-[#222630] px-3 py-2 outline-none text-white rounded-lg border-2 border-solid border-[#2B3040]",style:{transform:"translate(-50%,-50%)"},children:L.jsxs("form",{onSubmit:m,action:"",children:[L.jsx("h2",{className:"font-semibold text-xl text-center mb-4",children:"Register"}),L.jsx(dr,{setClicked:r,name:"email",placeholder:"email",type:"email",value:y}),L.jsx(dr,{setClicked:r,name:"password",placeholder:"password",type:"password",value:y}),L.jsx("p",{className:"text-[10px] mt-1 text-gray-400",children:"password must be more than 6 characters"}),L.jsx(dr,{setClicked:r,name:"firstName",placeholder:"first Name",type:"text",value:y}),L.jsx(dr,{setClicked:r,name:"lastName",placeholder:"last name",type:"text",value:y}),L.jsx("button",{onClick:()=>{i(!0),f()},className:"btn w-full mt-5",children:"Register"})]})})]})},cH=()=>{uf();const[t,e]=sr(zs),n=window.location.pathname.split("/").slice(-1).join(),r=Ui(),[i,s]=U.useState({title:"",date:"",start:"",end:"",description:"",done:!1,pending:!1}),[o,a]=U.useState(!1);U.useState(!1),U.useEffect(()=>{t[n]!=null&&s(t[n])},[]);const l=g=>{const{name:T,value:O}=g.target;s(F=>({...F,[T]:O}))},[c,h]=U.useState();U.useEffect(()=>{Pt.onAuthStateChanged(g=>{h(g)})},[]),U.useState([]);const f=g=>{g.preventDefault(),Pt.onAuthStateChanged(async T=>{if(T&&i.title.length>0&&i.date.length>0&&i.start.length>0&&i.end.length>0&&i.description.length>0){let O=[];const F=dn(fn,"Users",T.uid),$=await Di(F);$.exists()&&(O=[...$.data().taskData],O[n]=i),await Jl(dn(fn,"Users",T.uid),{taskData:O}),r("/REACT_VITE_TODOAPP/home")}else{let O=[];e(O),O=[t],O[n]=i,r("/REACT_VITE_TODOAPP/home")}})},m=U.useRef(0),y=U.useRef(0),w=U.useRef(0),C=U.useRef(0),P=U.useRef(0);U.useState("");const E=(g,T)=>{T.current.style.borderColor=g};return L.jsx("form",{onSubmit:f,className:"w-full absolute left-1/2 top-1/2 flex justify-center p-2 md:p-0",style:{transform:"translate(-50%,-50%)"},children:L.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[L.jsx(tP,{path:"/REACT_VITE_TODOAPP/home"}),L.jsxs("div",{className:"flex flex-col text-white/80 capitalize font-light",children:[L.jsx("label",{className:"mb-2",htmlFor:"Title",children:"Title"}),L.jsx("input",{ref:m,style:{boxShadow:"inset 2px 5px 10px rgba(0, 0, 0, 0.3)"},id:"title",placeholder:"Title",className:"bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]",name:"title",autoComplete:"off",type:"text",value:i.title,onChange:g=>{g.target.value===""?E("red",m):E("#596A95",m),g.target.name=="title"&&g.target.value.trim()===""&&E("red",m),l(g)}})]}),L.jsxs("div",{className:"flex flex-col text-white/80 capitalize font-light",children:[L.jsx("label",{className:"mb-2",htmlFor:"date",children:"date"}),L.jsx("input",{ref:y,style:{boxShadow:"inset 2px 5px 10px rgba(0, 0, 0, 0.3)"},id:"date",placeholder:"date",className:"bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]",name:"date",autoComplete:"off",type:"date",value:i.date,onChange:g=>{g.target.value===""?E("red",y):E("#596A95",y),g.target.name=="title"&&g.target.value.trim()===""&&E("red",y),l(g)}})]}),L.jsxs("div",{className:"time grid grid-cols-2 gap-2 w-full",children:[L.jsxs("div",{className:"flex flex-col text-white/80 capitalize font-light",children:[L.jsx("label",{className:"mb-2",htmlFor:"start",children:"start time"}),L.jsx("input",{ref:w,style:{boxShadow:"inset 2px 5px 10px rgba(0, 0, 0, 0.3)"},id:"start",placeholder:"start time",className:"bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]",name:"start",autoComplete:"off",type:"time",value:i.start,onChange:g=>{g.target.value===""?E("red",w):E("#596A95",w),g.target.name=="title"&&g.target.value.trim()===""&&E("red",w),l(g)}})]}),L.jsxs("div",{className:"flex flex-col text-white/80 capitalize font-light",children:[L.jsx("label",{className:"mb-2",htmlFor:"end",children:"end time"}),L.jsx("input",{ref:C,style:{boxShadow:"inset 2px 5px 10px rgba(0, 0, 0, 0.3)"},id:"end",placeholder:"end time",className:"bg-[#222630] w-[100%] px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]",name:"end",autoComplete:"off",type:"time",value:i.end,onChange:g=>{g.target.value===""?E("red",C):E("#596A95",C),g.target.name=="title"&&g.target.value.trim()===""&&E("red",C),l(g)}})]})]}),L.jsxs("div",{className:"flex flex-col text-white/80 capitalize font-light",children:[L.jsx("label",{className:"mb-2",htmlFor:"description",children:"description"}),L.jsx("textarea",{ref:P,value:i.description,rows:"5",name:"description",autoComplete:"off",placeholder:"description",id:"description",style:{resize:"none",boxShadow:"inset 2px 5px 10px rgba(0, 0, 0, 0.3)"},onChange:g=>{g.target.value===""?E("red",P):E("#596A95",P),g.target.name=="title"&&g.target.value.trim()===""&&E("red",P),l(g)},className:"bg-[#222630] w-full px-3 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"})]}),L.jsx("button",{onClick:()=>{a(!0)},className:"btn w-full mt-2",children:"edit task"})]})})},hH=t=>{U.useState("");const e=Ui(),n=Number(window.location.pathname.split("/").splice(-1).join()),[r,i]=sr(zs),s=()=>{window.location.reload()},[o,a]=U.useState(0);U.useEffect(()=>{const h=setInterval(()=>{a(f=>f+1)},1e3);return()=>clearInterval(h)},[]);const l=h=>{const f=Math.floor(h/3600),m=Math.floor(h%3600/60),y=h%60;return`${String(f).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(y).padStart(2,"0")}`},c=()=>{Pt.onAuthStateChanged(async h=>{if(h){let f=[];const m=dn(fn,"Users",h.uid),y=await Di(m);y.exists()&&(f=[...y.data().taskData],f[n].done=!0),await Jl(dn(fn,"Users",h.uid),{taskData:f}),window.history.back(),s()}else i(f=>f.map((m,y)=>y===n?{...m,done:!m.done}:m)),window.history.back()})};return L.jsxs("div",{className:"text-center flex flex-col items-center",children:[L.jsx("div",{className:"timer w-56 border p-5 text-2xl mt-6 border-[#596A95] rounded-lg text-white",children:l(o)}),L.jsxs("div",{className:"btns flex flex-col md:flex-row w-full gap-2 mt-5",children:[L.jsx("button",{className:"btn bg-red-500 w-full",onClick:()=>{c()},children:"End Task"}),L.jsx("button",{className:"btn bg-yellow-500 w-full",onClick:()=>{e("/REACT_VITE_TODOAPP/home"),s()},children:"Pend Task"})]})]})};function dH(){uf();const[t,e]=U.useState(L.jsxs("div",{className:"loader",children:[L.jsx("div",{className:"square",id:"sq1"}),L.jsx("div",{className:"square",id:"sq2"}),L.jsx("div",{className:"square",id:"sq3"}),L.jsx("div",{className:"square",id:"sq4"}),L.jsx("div",{className:"square",id:"sq5"}),L.jsx("div",{className:"square",id:"sq6"}),L.jsx("div",{className:"square",id:"sq7"}),L.jsx("div",{className:"square",id:"sq8"}),L.jsx("div",{className:"square",id:"sq9"})]}));return setTimeout(()=>{e(L.jsxs(L.Fragment,{children:[L.jsx(eH,{activeTextAnimation:!0}),L.jsxs(Wx,{children:[L.jsx(Cr,{path:"/REACT_VITE_TODOAPP/",element:L.jsx(tH,{activeTextAnimation:!0})}),L.jsxs(Cr,{path:"/REACT_VITE_TODOAPP/home",element:L.jsx(nH,{}),children:[L.jsx(Cr,{path:"/REACT_VITE_TODOAPP/home/login",element:L.jsx(lH,{})}),L.jsx(Cr,{path:"/REACT_VITE_TODOAPP/home/register",element:L.jsx(uH,{})}),L.jsx(Cr,{path:"/REACT_VITE_TODOAPP/home",element:L.jsx(aH,{})}),L.jsx(Cr,{path:"/REACT_VITE_TODOAPP/home/timer/:id",element:L.jsx(hH,{})}),L.jsx(Cr,{path:"/REACT_VITE_TODOAPP/home/addTask",element:L.jsx(iH,{})}),L.jsx(Cr,{path:"/REACT_VITE_TODOAPP/home/eidtTask/:id",element:L.jsx(cH,{})})]})]})]}))},2e3),L.jsx("div",{className:"bg-[#121212] h-svh",children:t})}createBrowserRouter([{path:"/",element:L.jsx("div",{children:"Hello world!"})}]);Rp.createRoot(document.getElementById("root")).render(L.jsx(je.StrictMode,{children:L.jsx(Xx,{children:L.jsx(JW,{children:L.jsx(dH,{})})})}));
