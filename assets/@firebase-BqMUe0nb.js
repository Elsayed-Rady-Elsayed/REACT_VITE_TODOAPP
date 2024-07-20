import{o as ru}from"./idb-BXWtuYvb.js";var Rl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(n,t){if(!n)throw Cn(t)},Cn=function(n){return new Error("Firebase Database ("+ou.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},tp=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[e++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[e++],a=n[e++],l=n[e++],u=((s&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(u>>10)),t[i++]=String.fromCharCode(56320+(u&1023))}else{const r=n[e++],a=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return t.join("")},Eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=r>>2,_=(r&3)<<4|l>>4;let v=(l&15)<<2|h>>6,C=h&63;u||(C=64,a||(v=64)),i.push(e[f],e[_],e[v],e[C])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(au(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):tp(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const h=s<n.length?e[n.charAt(s)]:64;++s;const _=s<n.length?e[n.charAt(s)]:64;if(++s,r==null||l==null||h==null||_==null)throw new ep;const v=r<<2|l>>4;if(i.push(v),h!==64){const C=l<<4&240|h>>2;if(i.push(C),_!==64){const S=h<<6&192|_;i.push(S)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ep extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lu=function(n){const t=au(n);return Eo.encodeByteArray(t,!0)},cs=function(n){return lu(n).replace(/\./g,"")},Br=function(n){try{return Eo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(n){return cu(void 0,n)}function cu(n,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const e=t;return new Date(e.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return t}for(const e in t)!t.hasOwnProperty(e)||!ip(e)||(n[e]=cu(n[e],t[e]));return n}function ip(n){return n!=="__proto__"}/**
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
 */function sp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rp=()=>sp().__FIREBASE_DEFAULTS__,op=()=>{if(typeof process>"u"||typeof Rl>"u")return;const n=Rl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ap=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Br(n[1]);return t&&JSON.parse(t)},Ps=()=>{try{return rp()||op()||ap()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lp=n=>{var t,e;return(e=(t=Ps())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},cp=n=>{const t=lp(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},uu=()=>{var n;return(n=Ps())===null||n===void 0?void 0:n.config},xI=n=>{var t;return(t=Ps())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function up(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cs(JSON.stringify(e)),cs(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Io())}function hp(){var n;const t=(n=Ps())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LI(){const n=Io();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function du(){return ou.NODE_ADMIN===!0}function pp(){return!hp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fu(){try{return typeof indexedDB=="object"}catch{return!1}}function pu(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}function _p(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="FirebaseError";class be extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=mp,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],a=r?gp(r,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new be(s,l,i)}}function gp(n,t){return n.replace(yp,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const yp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n){return JSON.parse(n)}function vt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=function(n){let t={},e={},i={},s="";try{const r=n.split(".");t=fi(Br(r[0])||""),e=fi(Br(r[1])||""),s=r[2],i=e.d||{},delete e.d}catch{}return{header:t,claims:e,data:i,signature:s}},vp=function(n){const t=_u(n),e=t.claims;return!!e&&typeof e=="object"&&e.hasOwnProperty("iat")},Ep=function(n){const t=_u(n).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function _n(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}function Sl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function us(n,t,e){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=t.call(e,n[s],s,n));return i}function qr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const r=n[s],a=t[s];if(bl(r)&&bl(a)){if(!qr(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function bl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function FI(n){const t={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function UI(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const i=this.W_;if(typeof t=="string")for(let _=0;_<16;_++)i[_]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let _=0;_<16;_++)i[_]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let _=16;_<80;_++){const v=i[_-3]^i[_-8]^i[_-14]^i[_-16];i[_]=(v<<1|v>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],a=this.chain_[2],l=this.chain_[3],u=this.chain_[4],h,f;for(let _=0;_<80;_++){_<40?_<20?(h=l^r&(a^l),f=1518500249):(h=r^a^l,f=1859775393):_<60?(h=r&a|l&(r|a),f=2400959708):(h=r^a^l,f=3395469782);const v=(s<<5|s>>>27)+h+u+f+i[_]&4294967295;u=l,l=a,a=(r<<30|r>>>2)&4294967295,r=s,s=v}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(t,e){if(t==null)return;e===void 0&&(e=t.length);const i=e-this.blockSize;let s=0;const r=this.buf_;let a=this.inbuf_;for(;s<e;){if(a===0)for(;s<=i;)this.compress_(t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[a]=t.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(r),a=0;break}}else for(;s<e;)if(r[a]=t[s],++a,++s,a===this.blockSize){this.compress_(r),a=0;break}}this.inbuf_=a,this.total_+=e}digest(){const t=[];let e=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=e&255,e/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)t[i]=this.chain_[s]>>r&255,++i;return t}}function BI(n,t){const e=new wp(n,t);return e.subscribe.bind(e)}class wp{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let s;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");Ap(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:i},s.next===void 0&&(s.next=Ar),s.error===void 0&&(s.error=Ar),s.complete===void 0&&(s.complete=Ar);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ap(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Ar(){}function Cp(n,t){return`${n} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,k(i<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(i)-56320;s=65536+(r<<10)+a}s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):s<65536?(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ds=function(n){let t=0;for(let e=0;e<n.length;e++){const i=n.charCodeAt(e);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,e++):t+=3}return t};/**
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
 */const Sp=1e3,bp=2,Pp=4*60*60*1e3,Np=.5;function Pl(n,t=Sp,e=bp){const i=t*Math.pow(e,n),s=Math.round(Np*i*(Math.random()-.5)*2);return Math.min(Pp,i+s)}/**
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
 */function ue(n){return n&&n._delegate?n._delegate:n}class te{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Oe="[DEFAULT]";/**
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
 */class Dp{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new To;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vp(t))try{this.getOrInitializeService({instanceIdentifier:Oe})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Oe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Oe){return this.instances.has(t)}getOptions(t=Oe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&a.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&t(a,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:kp(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Oe){return this.component?this.component.multipleInstances?t:Oe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kp(n){return n===Oe?void 0:n}function Vp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Op{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Dp(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Mp={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},xp=$.INFO,Lp={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Fp=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=Lp[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ks{constructor(t){this.name=t,this._logLevel=xp,this._logHandler=Fp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Mp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}/**
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
 */class Up{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Bp(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Bp(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jr="@firebase/app",Nl="0.10.6";/**
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
 */const Be=new ks("@firebase/app"),qp="@firebase/app-compat",jp="@firebase/analytics-compat",$p="@firebase/analytics",Wp="@firebase/app-check-compat",zp="@firebase/app-check",Gp="@firebase/auth",Hp="@firebase/auth-compat",Kp="@firebase/database",Qp="@firebase/database-compat",Yp="@firebase/functions",Xp="@firebase/functions-compat",Jp="@firebase/installations",Zp="@firebase/installations-compat",t_="@firebase/messaging",e_="@firebase/messaging-compat",n_="@firebase/performance",i_="@firebase/performance-compat",s_="@firebase/remote-config",r_="@firebase/remote-config-compat",o_="@firebase/storage",a_="@firebase/storage-compat",l_="@firebase/firestore",c_="@firebase/vertexai-preview",u_="@firebase/firestore-compat",h_="firebase",d_="10.12.3";/**
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
 */const $r="[DEFAULT]",f_={[jr]:"fire-core",[qp]:"fire-core-compat",[$p]:"fire-analytics",[jp]:"fire-analytics-compat",[zp]:"fire-app-check",[Wp]:"fire-app-check-compat",[Gp]:"fire-auth",[Hp]:"fire-auth-compat",[Kp]:"fire-rtdb",[Qp]:"fire-rtdb-compat",[Yp]:"fire-fn",[Xp]:"fire-fn-compat",[Jp]:"fire-iid",[Zp]:"fire-iid-compat",[t_]:"fire-fcm",[e_]:"fire-fcm-compat",[n_]:"fire-perf",[i_]:"fire-perf-compat",[s_]:"fire-rc",[r_]:"fire-rc-compat",[o_]:"fire-gcs",[a_]:"fire-gcs-compat",[l_]:"fire-fst",[u_]:"fire-fst-compat",[c_]:"fire-vertex","fire-js":"fire-js",[h_]:"fire-js-all"};/**
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
 */const hs=new Map,p_=new Map,Wr=new Map;function Dl(n,t){try{n.container.addComponent(t)}catch(e){Be.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function he(n){const t=n.name;if(Wr.has(t))return Be.debug(`There were multiple attempts to register component ${t}.`),!1;Wr.set(t,n);for(const e of hs.values())Dl(e,n);for(const e of p_.values())Dl(e,n);return!0}function wo(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function qI(n){return n.settings!==void 0}/**
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
 */const __={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ee=new Ns("app","Firebase",__);/**
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
 */class m_{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new te("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
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
 */const mu=d_;function g_(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:$r,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Ee.create("bad-app-name",{appName:String(s)});if(e||(e=uu()),!e)throw Ee.create("no-options");const r=hs.get(s);if(r){if(qr(e,r.options)&&qr(i,r.config))return r;throw Ee.create("duplicate-app",{appName:s})}const a=new Op(s);for(const u of Wr.values())a.addComponent(u);const l=new m_(e,i,a);return hs.set(s,l),l}function y_(n=$r){const t=hs.get(n);if(!t&&n===$r&&uu())return g_();if(!t)throw Ee.create("no-app",{appName:n});return t}function Kt(n,t,e){var i;let s=(i=f_[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),a=t.match(/\s|\//);if(r||a){const l=[`Unable to register library "${s}" with version "${t}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Be.warn(l.join(" "));return}he(new te(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const v_="firebase-heartbeat-database",E_=1,pi="firebase-heartbeat-store";let Cr=null;function gu(){return Cr||(Cr=ru(v_,E_,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(pi)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ee.create("idb-open",{originalErrorMessage:n.message})})),Cr}async function T_(n){try{const e=(await gu()).transaction(pi),i=await e.objectStore(pi).get(yu(n));return await e.done,i}catch(t){if(t instanceof be)Be.warn(t.message);else{const e=Ee.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Be.warn(e.message)}}}async function kl(n,t){try{const i=(await gu()).transaction(pi,"readwrite");await i.objectStore(pi).put(t,yu(n)),await i.done}catch(e){if(e instanceof be)Be.warn(e.message);else{const i=Ee.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Be.warn(i.message)}}}function yu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const I_=1024,w_=30*24*60*60*1e3;class A_{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new R_(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vl();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=w_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vl(),{heartbeatsToSend:i,unsentEntries:s}=C_(this._heartbeatsCache.heartbeats),r=cs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Vl(){return new Date().toISOString().substring(0,10)}function C_(n,t=I_){const e=[];let i=n.slice();for(const s of n){const r=e.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),Ol(e)>t){r.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ol(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class R_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fu()?pu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await T_(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return kl(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return kl(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ol(n){return cs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function S_(n){he(new te("platform-logger",t=>new Up(t),"PRIVATE")),he(new te("heartbeat",t=>new A_(t),"PRIVATE")),Kt(jr,Nl,n),Kt(jr,Nl,"esm2017"),Kt("fire-js","")}S_("");const vu="@firebase/installations",Ao="0.6.8";/**
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
 */const Eu=1e4,Tu=`w:${Ao}`,Iu="FIS_v2",b_="https://firebaseinstallations.googleapis.com/v1",P_=60*60*1e3,N_="installations",D_="Installations";/**
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
 */const k_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qe=new Ns(N_,D_,k_);function wu(n){return n instanceof be&&n.code.includes("request-failed")}/**
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
 */function Au({projectId:n}){return`${b_}/projects/${n}/installations`}function Cu(n){return{token:n.token,requestStatus:2,expiresIn:O_(n.expiresIn),creationTime:Date.now()}}async function Ru(n,t){const i=(await t.json()).error;return qe.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Su({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function V_(n,{refreshToken:t}){const e=Su(n);return e.append("Authorization",M_(t)),e}async function bu(n){const t=await n();return t.status>=500&&t.status<600?n():t}function O_(n){return Number(n.replace("s","000"))}function M_(n){return`${Iu} ${n}`}/**
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
 */async function x_({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const i=Au(n),s=Su(n),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:e,authVersion:Iu,appId:n.appId,sdkVersion:Tu},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await bu(()=>fetch(i,l));if(u.ok){const h=await u.json();return{fid:h.fid||e,registrationStatus:2,refreshToken:h.refreshToken,authToken:Cu(h.authToken)}}else throw await Ru("Create Installation",u)}/**
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
 */function Pu(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function L_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const F_=/^[cdef][\w-]{21}$/,zr="";function U_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=B_(n);return F_.test(e)?e:zr}catch{return zr}}function B_(n){return L_(n).substr(0,22)}/**
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
 */function Vs(n){return`${n.appName}!${n.appId}`}/**
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
 */const Nu=new Map;function Du(n,t){const e=Vs(n);ku(e,t),q_(e,t)}function ku(n,t){const e=Nu.get(n);if(e)for(const i of e)i(t)}function q_(n,t){const e=j_();e&&e.postMessage({key:n,fid:t}),$_()}let xe=null;function j_(){return!xe&&"BroadcastChannel"in self&&(xe=new BroadcastChannel("[Firebase] FID Change"),xe.onmessage=n=>{ku(n.data.key,n.data.fid)}),xe}function $_(){Nu.size===0&&xe&&(xe.close(),xe=null)}/**
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
 */const W_="firebase-installations-database",z_=1,je="firebase-installations-store";let Rr=null;function Co(){return Rr||(Rr=ru(W_,z_,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(je)}}})),Rr}async function ds(n,t){const e=Vs(n),s=(await Co()).transaction(je,"readwrite"),r=s.objectStore(je),a=await r.get(e);return await r.put(t,e),await s.done,(!a||a.fid!==t.fid)&&Du(n,t.fid),t}async function Vu(n){const t=Vs(n),i=(await Co()).transaction(je,"readwrite");await i.objectStore(je).delete(t),await i.done}async function Os(n,t){const e=Vs(n),s=(await Co()).transaction(je,"readwrite"),r=s.objectStore(je),a=await r.get(e),l=t(a);return l===void 0?await r.delete(e):await r.put(l,e),await s.done,l&&(!a||a.fid!==l.fid)&&Du(n,l.fid),l}/**
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
 */async function Ro(n){let t;const e=await Os(n.appConfig,i=>{const s=G_(i),r=H_(n,s);return t=r.registrationPromise,r.installationEntry});return e.fid===zr?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function G_(n){const t=n||{fid:U_(),registrationStatus:0};return Ou(t)}function H_(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(qe.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=K_(n,e);return{installationEntry:e,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Q_(n)}:{installationEntry:t}}async function K_(n,t){try{const e=await x_(n,t);return ds(n.appConfig,e)}catch(e){throw wu(e)&&e.customData.serverCode===409?await Vu(n.appConfig):await ds(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Q_(n){let t=await Ml(n.appConfig);for(;t.registrationStatus===1;)await Pu(100),t=await Ml(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:i}=await Ro(n);return i||e}return t}function Ml(n){return Os(n,t=>{if(!t)throw qe.create("installation-not-found");return Ou(t)})}function Ou(n){return Y_(n)?{fid:n.fid,registrationStatus:0}:n}function Y_(n){return n.registrationStatus===1&&n.registrationTime+Eu<Date.now()}/**
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
 */async function X_({appConfig:n,heartbeatServiceProvider:t},e){const i=J_(n,e),s=V_(n,e),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Tu,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await bu(()=>fetch(i,l));if(u.ok){const h=await u.json();return Cu(h)}else throw await Ru("Generate Auth Token",u)}function J_(n,{fid:t}){return`${Au(n)}/${t}/authTokens:generate`}/**
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
 */async function So(n,t=!1){let e;const i=await Os(n.appConfig,r=>{if(!Mu(r))throw qe.create("not-registered");const a=r.authToken;if(!t&&em(a))return r;if(a.requestStatus===1)return e=Z_(n,t),r;{if(!navigator.onLine)throw qe.create("app-offline");const l=im(r);return e=tm(n,l),l}});return e?await e:i.authToken}async function Z_(n,t){let e=await xl(n.appConfig);for(;e.authToken.requestStatus===1;)await Pu(100),e=await xl(n.appConfig);const i=e.authToken;return i.requestStatus===0?So(n,t):i}function xl(n){return Os(n,t=>{if(!Mu(t))throw qe.create("not-registered");const e=t.authToken;return sm(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function tm(n,t){try{const e=await X_(n,t),i=Object.assign(Object.assign({},t),{authToken:e});return await ds(n.appConfig,i),e}catch(e){if(wu(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Vu(n.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ds(n.appConfig,i)}throw e}}function Mu(n){return n!==void 0&&n.registrationStatus===2}function em(n){return n.requestStatus===2&&!nm(n)}function nm(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+P_}function im(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function sm(n){return n.requestStatus===1&&n.requestTime+Eu<Date.now()}/**
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
 */async function rm(n){const t=n,{installationEntry:e,registrationPromise:i}=await Ro(t);return i?i.catch(console.error):So(t).catch(console.error),e.fid}/**
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
 */async function om(n,t=!1){const e=n;return await am(e),(await So(e,t)).token}async function am(n){const{registrationPromise:t}=await Ro(n);t&&await t}/**
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
 */function lm(n){if(!n||!n.options)throw Sr("App Configuration");if(!n.name)throw Sr("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Sr(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Sr(n){return qe.create("missing-app-config-values",{valueName:n})}/**
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
 */const xu="installations",cm="installations-internal",um=n=>{const t=n.getProvider("app").getImmediate(),e=lm(t),i=wo(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},hm=n=>{const t=n.getProvider("app").getImmediate(),e=wo(t,xu).getImmediate();return{getId:()=>rm(e),getToken:s=>om(e,s)}};function dm(){he(new te(xu,um,"PUBLIC")),he(new te(cm,hm,"PRIVATE"))}dm();Kt(vu,Ao);Kt(vu,Ao,"esm2017");/**
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
 */const Ll="analytics",fm="firebase_id",pm="origin",_m=60*1e3,mm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bo="https://www.googletagmanager.com/gtag/js";/**
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
 */const Lt=new ks("@firebase/analytics");/**
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
 */const gm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$t=new Ns("analytics","Analytics",gm);/**
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
 */function ym(n){if(!n.startsWith(bo)){const t=$t.create("invalid-gtag-resource",{gtagURL:n});return Lt.warn(t.message),""}return n}function Lu(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function vm(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Em(n,t){const e=vm("firebase-js-sdk-policy",{createScriptURL:ym}),i=document.createElement("script"),s=`${bo}?l=${n}&id=${t}`;i.src=e?e==null?void 0:e.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Tm(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Im(n,t,e,i,s,r){const a=i[s];try{if(a)await t[a];else{const u=(await Lu(e)).find(h=>h.measurementId===s);u&&await t[u.appId]}}catch(l){Lt.error(l)}n("config",s,r)}async function wm(n,t,e,i,s){try{let r=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Lu(e);for(const u of a){const h=l.find(_=>_.measurementId===u),f=h&&t[h.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),n("event",i,s||{})}catch(r){Lt.error(r)}}function Am(n,t,e,i){async function s(r,...a){try{if(r==="event"){const[l,u]=a;await wm(n,t,e,l,u)}else if(r==="config"){const[l,u]=a;await Im(n,t,e,i,l,u)}else if(r==="consent"){const[l,u]=a;n("consent",l,u)}else if(r==="get"){const[l,u,h]=a;n("get",l,u,h)}else if(r==="set"){const[l]=a;n("set",l)}else n(r,...a)}catch(l){Lt.error(l)}}return s}function Cm(n,t,e,i,s){let r=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Am(r,n,t,e),{gtagCore:r,wrappedGtag:window[s]}}function Rm(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(bo)&&e.src.includes(n))return e;return null}/**
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
 */const Sm=30,bm=1e3;class Pm{constructor(t={},e=bm){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Fu=new Pm;function Nm(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Dm(n){var t;const{appId:e,apiKey:i}=n,s={method:"GET",headers:Nm(i)},r=mm.replace("{app-id}",e),a=await fetch(r,s);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();!((t=u.error)===null||t===void 0)&&t.message&&(l=u.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function km(n,t=Fu,e){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw $t.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw $t.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Mm;return setTimeout(async()=>{l.abort()},_m),Uu({appId:i,apiKey:s,measurementId:r},a,l,t)}async function Uu(n,{throttleEndTimeMillis:t,backoffCount:e},i,s=Fu){var r;const{appId:a,measurementId:l}=n;try{await Vm(i,t)}catch(u){if(l)return Lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await Dm(n);return s.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!Om(h)){if(s.deleteThrottleMetadata(a),l)return Lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw u}const f=Number((r=h==null?void 0:h.customData)===null||r===void 0?void 0:r.httpStatus)===503?Pl(e,s.intervalMillis,Sm):Pl(e,s.intervalMillis),_={throttleEndTimeMillis:Date.now()+f,backoffCount:e+1};return s.setThrottleMetadata(a,_),Lt.debug(`Calling attemptFetch again in ${f} millis`),Uu(n,_,i,s)}}function Vm(n,t){return new Promise((e,i)=>{const s=Math.max(t-Date.now(),0),r=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(r),i($t.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Om(n){if(!(n instanceof be)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Mm{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function xm(n,t,e,i,s){if(s&&s.global){n("event",e,i);return}else{const r=await t,a=Object.assign(Object.assign({},i),{send_to:r});n("event",e,a)}}/**
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
 */async function Lm(){if(fu())try{await pu()}catch(n){return Lt.warn($t.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Lt.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Fm(n,t,e,i,s,r,a){var l;const u=km(n);u.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&Lt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>Lt.error(C)),t.push(u);const h=Lm().then(C=>{if(C)return i.getId()}),[f,_]=await Promise.all([u,h]);Rm(r)||Em(r,f.measurementId),s("js",new Date);const v=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return v[pm]="firebase",v.update=!0,_!=null&&(v[fm]=_),s("config",f.measurementId,v),f.measurementId}/**
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
 */class Um{constructor(t){this.app=t}_delete(){return delete si[this.app.options.appId],Promise.resolve()}}let si={},Fl=[];const Ul={};let br="dataLayer",Bm="gtag",Bl,Bu,ql=!1;function qm(){const n=[];if(dp()&&n.push("This is a browser extension environment."),_p()||n.push("Cookies are not available."),n.length>0){const t=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),e=$t.create("invalid-analytics-context",{errorInfo:t});Lt.warn(e.message)}}function jm(n,t,e){qm();const i=n.options.appId;if(!i)throw $t.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(si[i]!=null)throw $t.create("already-exists",{id:i});if(!ql){Tm(br);const{wrappedGtag:r,gtagCore:a}=Cm(si,Fl,Ul,br,Bm);Bu=r,Bl=a,ql=!0}return si[i]=Fm(n,Fl,Ul,t,Bl,br,e),new Um(n)}function $m(n,t,e,i){n=ue(n),xm(Bu,si[n.app.options.appId],t,e,i).catch(s=>Lt.error(s))}const jl="@firebase/analytics",$l="0.10.5";function Wm(){he(new te(Ll,(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return jm(i,s,e)},"PUBLIC")),he(new te("analytics-internal",n,"PRIVATE")),Kt(jl,$l),Kt(jl,$l,"esm2017");function n(t){try{const e=t.getProvider(Ll).getImmediate();return{logEvent:(i,s,r)=>$m(e,i,s,r)}}catch(e){throw $t.create("interop-component-reg-failed",{reason:e})}}}Wm();var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ue,qu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(E,T,A){for(var g=Array(arguments.length-2),se=2;se<arguments.length;se++)g[se-2]=arguments[se];return m.prototype[T].apply(E,g)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,y){y||(y=0);var E=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)E[T]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(T=0;16>T;++T)E[T]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],T=I.g[2];var A=I.g[3],g=m+(A^y&(T^A))+E[0]+3614090360&4294967295;m=y+(g<<7&4294967295|g>>>25),g=A+(T^m&(y^T))+E[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(y^A&(m^y))+E[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(m^T&(A^m))+E[3]+3250441966&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(A^y&(T^A))+E[4]+4118548399&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(T^m&(y^T))+E[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(y^A&(m^y))+E[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(m^T&(A^m))+E[7]+4249261313&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(A^y&(T^A))+E[8]+1770035416&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(T^m&(y^T))+E[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(y^A&(m^y))+E[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(m^T&(A^m))+E[11]+2304563134&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(A^y&(T^A))+E[12]+1804603682&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(T^m&(y^T))+E[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(y^A&(m^y))+E[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(m^T&(A^m))+E[15]+1236535329&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(T^A&(y^T))+E[1]+4129170786&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(m^y))+E[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(A^m))+E[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(T^A))+E[0]+3921069994&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(y^T))+E[5]+3593408605&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(m^y))+E[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(A^m))+E[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(T^A))+E[4]+3889429448&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(y^T))+E[9]+568446438&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(m^y))+E[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(A^m))+E[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(T^A))+E[8]+1163531501&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(y^T))+E[13]+2850285829&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(m^y))+E[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(A^m))+E[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(T^A))+E[12]+2368359562&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(y^T^A)+E[5]+4294588738&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^T)+E[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^y)+E[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^m)+E[14]+4259657740&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(y^T^A)+E[1]+2763975236&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^T)+E[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^y)+E[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^m)+E[10]+3200236656&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(y^T^A)+E[13]+681279174&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^T)+E[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^y)+E[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^m)+E[6]+76029189&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(y^T^A)+E[9]+3654602809&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^T)+E[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^y)+E[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^m)+E[2]+3299628645&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(T^(y|~A))+E[0]+4096336452&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~T))+E[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~y))+E[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~m))+E[5]+4237533241&4294967295,y=T+(g<<21&4294967295|g>>>11),g=m+(T^(y|~A))+E[12]+1700485571&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~T))+E[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~y))+E[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~m))+E[1]+2240044497&4294967295,y=T+(g<<21&4294967295|g>>>11),g=m+(T^(y|~A))+E[8]+1873313359&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~T))+E[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~y))+E[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~m))+E[13]+1309151649&4294967295,y=T+(g<<21&4294967295|g>>>11),g=m+(T^(y|~A))+E[4]+4149444226&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~T))+E[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~y))+E[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~m))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+A&4294967295}i.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,E=this.B,T=this.h,A=0;A<m;){if(T==0)for(;A<=y;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<m;)if(E[T++]=I.charCodeAt(A++),T==this.blockSize){s(this,E),T=0;break}}else for(;A<m;)if(E[T++]=I[A++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=m},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var E=0;32>E;E+=8)I[y++]=this.g[m]>>>E&255;return I};function r(I,m){var y=l;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function a(I,m){this.h=m;for(var y=[],E=!0,T=I.length-1;0<=T;T--){var A=I[T]|0;E&&A==m||(y[T]=A,E=!1)}this.g=y}var l={};function u(I){return-128<=I&&128>I?r(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return N(h(-I));for(var m=[],y=1,E=0;I>=y;E++)m[E]=I/y|0,y*=4294967296;return new a(m,0)}function f(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return N(f(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),E=_,T=0;T<I.length;T+=8){var A=Math.min(8,I.length-T),g=parseInt(I.substring(T,T+A),m);8>A?(A=h(Math.pow(m,A)),E=E.j(A).add(h(g))):(E=E.j(y),E=E.add(h(g)))}return E}var _=u(0),v=u(1),C=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-N(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var E=this.i(y);I+=(0<=E?E:4294967296+E)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(V(this))return"-"+N(this).toString(I);for(var m=h(Math.pow(I,6)),y=this,E="";;){var T=at(y,m).g;y=H(y,T.j(m));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=T,S(y))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function V(I){return I.h==-1}n.l=function(I){return I=H(this,I),V(I)?-1:S(I)?0:1};function N(I){for(var m=I.g.length,y=[],E=0;E<m;E++)y[E]=~I.g[E];return new a(y,~I.h).add(v)}n.abs=function(){return V(this)?N(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],E=0,T=0;T<=m;T++){var A=E+(this.i(T)&65535)+(I.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=g>>>16,A&=65535,g&=65535,y[T]=g<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function H(I,m){return I.add(N(m))}n.j=function(I){if(S(this)||S(I))return _;if(V(this))return V(I)?N(this).j(N(I)):N(N(this).j(I));if(V(I))return N(this.j(N(I)));if(0>this.l(C)&&0>I.l(C))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],E=0;E<2*m;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<I.g.length;T++){var A=this.i(E)>>>16,g=this.i(E)&65535,se=I.i(T)>>>16,kn=I.i(T)&65535;y[2*E+2*T]+=g*kn,G(y,2*E+2*T),y[2*E+2*T+1]+=A*kn,G(y,2*E+2*T+1),y[2*E+2*T+1]+=g*se,G(y,2*E+2*T+1),y[2*E+2*T+2]+=A*se,G(y,2*E+2*T+2)}for(E=0;E<m;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=m;E<2*m;E++)y[E]=0;return new a(y,0)};function G(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function Y(I,m){this.g=I,this.h=m}function at(I,m){if(S(m))throw Error("division by zero");if(S(I))return new Y(_,_);if(V(I))return m=at(N(I),m),new Y(N(m.g),N(m.h));if(V(m))return m=at(I,N(m)),new Y(N(m.g),m.h);if(30<I.g.length){if(V(I)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var y=v,E=m;0>=E.l(I);)y=ie(y),E=ie(E);var T=gt(y,1),A=gt(E,1);for(E=gt(E,2),y=gt(y,2);!S(E);){var g=A.add(E);0>=g.l(I)&&(T=T.add(y),A=g),E=gt(E,1),y=gt(y,1)}return m=H(I,T.j(m)),new Y(T,m)}for(T=_;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=h(y),g=A.j(m);V(g)||0<g.l(I);)y-=E,A=h(y),g=A.j(m);S(A)&&(A=v),T=T.add(A),I=H(I,g)}return new Y(T,I)}n.A=function(I){return at(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)&I.i(E);return new a(y,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)|I.i(E);return new a(y,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)^I.i(E);return new a(y,this.h^I.h)};function ie(I){for(var m=I.g.length+1,y=[],E=0;E<m;E++)y[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(y,I.h)}function gt(I,m){var y=m>>5;m%=32;for(var E=I.g.length-y,T=[],A=0;A<E;A++)T[A]=0<m?I.i(A+y)>>>m|I.i(A+y+1)<<32-m:I.i(A+y);return new a(T,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,qu=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Ue=a}).apply(typeof Wl<"u"?Wl:typeof self<"u"?self:typeof window<"u"?window:{});var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ju,$u,ei,Wu,rs,Gr,zu,Gu,Hu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zi=="object"&&Zi];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=e(this);function s(o,c){if(c)t:{var d=i;o=o.split(".");for(var p=0;p<o.length-1;p++){var w=o[p];if(!(w in d))break t;d=d[w]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&t(d,o,{configurable:!0,writable:!0,value:c})}}function r(o,c){o instanceof String&&(o+="");var d=0,p=!1,w={next:function(){if(!p&&d<o.length){var R=d++;return{value:c(R,o[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(o){return o||function(){return r(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function _(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,p),o.apply(c,w)}}return function(){return o.apply(c,arguments)}}function v(o,c,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,v.apply(null,arguments)}function C(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function S(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,w,R){for(var D=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)D[Z-2]=arguments[Z];return c.prototype[w].apply(p,D)}}function V(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function N(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const w=o.length||0,R=p.length||0;o.length=w+R;for(let D=0;D<R;D++)o[w+D]=p[D]}else o.push(p)}}class H{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function G(o){return/^[\s\xa0]*$/.test(o)}function Y(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function at(o){return at[" "](o),o}at[" "]=function(){};var ie=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function gt(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function I(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function m(o){const c={};for(const d in o)c[d]=o[d];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let d,p;for(let w=1;w<arguments.length;w++){p=arguments[w];for(d in p)o[d]=p[d];for(let R=0;R<y.length;R++)d=y[R],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function T(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function g(){var o=tr;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class se{constructor(){this.h=this.g=null}add(c,d){const p=kn.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var kn=new H(()=>new vf,o=>o.reset());class vf{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Vn,On=!1,tr=new se,Ra=()=>{const o=l.Promise.resolve(void 0);Vn=()=>{o.then(Ef)}};var Ef=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(d){A(d)}var c=kn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}On=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function It(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var Tf=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function Mn(o,c){if(It.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(ie){t:{try{at(c.nodeName);var w=!0;break t}catch{}w=!1}w||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:If[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Mn.aa.h.call(this)}}S(Mn,It);var If={2:"touch",3:"pen",4:"mouse"};Mn.prototype.h=function(){Mn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Mi="closure_listenable_"+(1e6*Math.random()|0),wf=0;function Af(o,c,d,p,w){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=w,this.key=++wf,this.da=this.fa=!1}function xi(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Li(o){this.src=o,this.g={},this.h=0}Li.prototype.add=function(o,c,d,p,w){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var D=nr(o,c,p,w);return-1<D?(c=o[D],d||(c.fa=!1)):(c=new Af(c,this.src,R,!!p,w),c.fa=d,o.push(c)),c};function er(o,c){var d=c.type;if(d in o.g){var p=o.g[d],w=Array.prototype.indexOf.call(p,c,void 0),R;(R=0<=w)&&Array.prototype.splice.call(p,w,1),R&&(xi(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function nr(o,c,d,p){for(var w=0;w<o.length;++w){var R=o[w];if(!R.da&&R.listener==c&&R.capture==!!d&&R.ha==p)return w}return-1}var ir="closure_lm_"+(1e6*Math.random()|0),sr={};function Sa(o,c,d,p,w){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Sa(o,c[R],d,p,w);return null}return d=Na(d),o&&o[Mi]?o.K(c,d,h(p)?!!p.capture:!!p,w):Cf(o,c,d,!1,p,w)}function Cf(o,c,d,p,w,R){if(!c)throw Error("Invalid event type");var D=h(w)?!!w.capture:!!w,Z=or(o);if(Z||(o[ir]=Z=new Li(o)),d=Z.add(c,d,p,D,R),d.proxy)return d;if(p=Rf(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Tf||(w=D),w===void 0&&(w=!1),o.addEventListener(c.toString(),p,w);else if(o.attachEvent)o.attachEvent(Pa(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Rf(){function o(d){return c.call(o.src,o.listener,d)}const c=Sf;return o}function ba(o,c,d,p,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)ba(o,c[R],d,p,w);else p=h(p)?!!p.capture:!!p,d=Na(d),o&&o[Mi]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],d=nr(R,d,p,w),-1<d&&(xi(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=or(o))&&(c=o.g[c.toString()],o=-1,c&&(o=nr(c,d,p,w)),(d=-1<o?c[o]:null)&&rr(d))}function rr(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Mi])er(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(Pa(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=or(c))?(er(d,o),d.h==0&&(d.src=null,c[ir]=null)):xi(o)}}}function Pa(o){return o in sr?sr[o]:sr[o]="on"+o}function Sf(o,c){if(o.da)o=!0;else{c=new Mn(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&rr(o),o=d.call(p,c)}return o}function or(o){return o=o[ir],o instanceof Li?o:null}var ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function Na(o){return typeof o=="function"?o:(o[ar]||(o[ar]=function(c){return o.handleEvent(c)}),o[ar])}function wt(){_e.call(this),this.i=new Li(this),this.M=this,this.F=null}S(wt,_e),wt.prototype[Mi]=!0,wt.prototype.removeEventListener=function(o,c,d,p){ba(this,o,c,d,p)};function Vt(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new It(c,o);else if(c instanceof It)c.target=c.target||o;else{var w=c;c=new It(p,o),E(c,w)}if(w=!0,d)for(var R=d.length-1;0<=R;R--){var D=c.g=d[R];w=Fi(D,p,!0,c)&&w}if(D=c.g=o,w=Fi(D,p,!0,c)&&w,w=Fi(D,p,!1,c)&&w,d)for(R=0;R<d.length;R++)D=c.g=d[R],w=Fi(D,p,!1,c)&&w}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)xi(d[p]);delete o.g[c],o.h--}}this.F=null},wt.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},wt.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function Fi(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,R=0;R<c.length;++R){var D=c[R];if(D&&!D.da&&D.capture==d){var Z=D.listener,yt=D.ha||D.src;D.fa&&er(o.i,D),w=Z.call(yt,p)!==!1&&w}}return w&&!p.defaultPrevented}function Da(o,c,d){if(typeof o=="function")d&&(o=v(o,d));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function ka(o){o.g=Da(()=>{o.g=null,o.i&&(o.i=!1,ka(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class bf extends _e{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ka(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xn(o){_e.call(this),this.h=o,this.g={}}S(xn,_e);var Va=[];function Oa(o){gt(o.g,function(c,d){this.g.hasOwnProperty(d)&&rr(c)},o),o.g={}}xn.prototype.N=function(){xn.aa.N.call(this),Oa(this)},xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lr=l.JSON.stringify,Pf=l.JSON.parse,Nf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function cr(){}cr.prototype.h=null;function Ma(o){return o.h||(o.h=o.i())}function xa(){}var Ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ur(){It.call(this,"d")}S(ur,It);function hr(){It.call(this,"c")}S(hr,It);var Ne={},La=null;function Ui(){return La=La||new wt}Ne.La="serverreachability";function Fa(o){It.call(this,Ne.La,o)}S(Fa,It);function Fn(o){const c=Ui();Vt(c,new Fa(c))}Ne.STAT_EVENT="statevent";function Ua(o,c){It.call(this,Ne.STAT_EVENT,o),this.stat=c}S(Ua,It);function Ot(o){const c=Ui();Vt(c,new Ua(c,o))}Ne.Ma="timingevent";function Ba(o,c){It.call(this,Ne.Ma,o),this.size=c}S(Ba,It);function Un(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Bn(){this.g=!0}Bn.prototype.xa=function(){this.g=!1};function Df(o,c,d,p,w,R){o.info(function(){if(o.g)if(R)for(var D="",Z=R.split("&"),yt=0;yt<Z.length;yt++){var K=Z[yt].split("=");if(1<K.length){var At=K[0];K=K[1];var Ct=At.split("_");D=2<=Ct.length&&Ct[1]=="type"?D+(At+"="+K+"&"):D+(At+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+p+") [attempt "+w+"]: "+c+`
`+d+`
`+D})}function kf(o,c,d,p,w,R,D){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+w+"]: "+c+`
`+d+`
`+R+" "+D})}function en(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Of(o,d)+(p?" "+p:"")})}function Vf(o,c){o.info(function(){return"TIMEOUT: "+c})}Bn.prototype.info=function(){};function Of(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var w=p[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<w.length;D++)w[D]=""}}}}return lr(d)}catch{return c}}var Bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dr;function qi(){}S(qi,cr),qi.prototype.g=function(){return new XMLHttpRequest},qi.prototype.i=function(){return{}},dr=new qi;function me(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new xn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ja}function ja(){this.i=null,this.g="",this.h=!1}var $a={},fr={};function pr(o,c,d){o.L=1,o.v=zi(re(c)),o.m=d,o.P=!0,Wa(o,null)}function Wa(o,c){o.F=Date.now(),ji(o),o.A=re(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),sl(d.i,"t",p),o.C=0,d=o.j.J,o.h=new ja,o.g=Il(o.j,d?c:null,!o.m),0<o.O&&(o.M=new bf(v(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(Va[0]=w.toString()),w=Va);for(var R=0;R<w.length;R++){var D=Sa(d,w[R],p||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Fn(),Df(o.i,o.u,o.A,o.l,o.R,o.m)}me.prototype.ca=function(o){o=o.target;const c=this.M;c&&oe(o)==3?c.j():this.Y(o)},me.prototype.Y=function(o){try{if(o==this.g)t:{const Ct=oe(this.g);var c=this.g.Ba();const rn=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||hl(this.g)))){this.J||Ct!=4||c==7||(c==8||0>=rn?Fn(3):Fn(2)),_r(this);var d=this.g.Z();this.X=d;e:if(za(this)){var p=hl(this.g);o="";var w=p.length,R=oe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){De(this),qn(this);var D="";break e}this.h.i=new l.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(R&&c==w-1)});p.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=d==200,kf(this.i,this.u,this.A,this.l,this.R,Ct,d),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,yt=this.g;if((Z=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Z)){var K=Z;break e}}K=null}if(d=K)en(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mr(this,d);else{this.o=!1,this.s=3,Ot(12),De(this),qn(this);break t}}if(this.P){d=!0;let zt;for(;!this.J&&this.C<D.length;)if(zt=Mf(this,D),zt==fr){Ct==4&&(this.s=4,Ot(14),d=!1),en(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==$a){this.s=4,Ot(15),en(this.i,this.l,D,"[Invalid Chunk]"),d=!1;break}else en(this.i,this.l,zt,null),mr(this,zt);if(za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||D.length!=0||this.h.h||(this.s=1,Ot(16),d=!1),this.o=this.o&&d,!d)en(this.i,this.l,D,"[Invalid Chunked Response]"),De(this),qn(this);else if(0<D.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Ir(At),At.M=!0,Ot(11))}}else en(this.i,this.l,D,null),mr(this,D);Ct==4&&De(this),this.o&&!this.J&&(Ct==4?yl(this.j,this):(this.o=!1,ji(this)))}else Jf(this.g),d==400&&0<D.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),De(this),qn(this)}}}catch{}finally{}};function za(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Mf(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?fr:(d=Number(c.substring(d,p)),isNaN(d)?$a:(p+=1,p+d>c.length?fr:(c=c.slice(p,p+d),o.C=p+d,c)))}me.prototype.cancel=function(){this.J=!0,De(this)};function ji(o){o.S=Date.now()+o.I,Ga(o,o.I)}function Ga(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Un(v(o.ba,o),c)}function _r(o){o.B&&(l.clearTimeout(o.B),o.B=null)}me.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Vf(this.i,this.A),this.L!=2&&(Fn(),Ot(17)),De(this),this.s=2,qn(this)):Ga(this,this.S-o)};function qn(o){o.j.G==0||o.J||yl(o.j,o)}function De(o){_r(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Oa(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function mr(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||gr(d.h,o))){if(!o.K&&gr(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var w=p;if(w[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Yi(d),Ki(d);else break t;Tr(d),Ot(18)}}else d.za=w[1],0<d.za-d.T&&37500>w[2]&&d.F&&d.v==0&&!d.C&&(d.C=Un(v(d.Za,d),6e3));if(1>=Qa(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ve(d,11)}else if((o.K||d.g==o)&&Yi(d),!G(c))for(w=d.Da.g.parse(c),c=0;c<w.length;c++){let K=w[c];if(d.T=K[0],K=K[1],d.G==2)if(K[0]=="c"){d.K=K[1],d.ia=K[2];const At=K[3];At!=null&&(d.la=At,d.j.info("VER="+d.la));const Ct=K[4];Ct!=null&&(d.Aa=Ct,d.j.info("SVER="+d.Aa));const rn=K[5];rn!=null&&typeof rn=="number"&&0<rn&&(p=1.5*rn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const zt=o.g;if(zt){const Ji=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var R=p.h;R.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(yr(R,R.h),R.h=null))}if(p.D){const wr=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;wr&&(p.ya=wr,et(p.I,p.D,wr))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var D=o;if(p.qa=Tl(p,p.J?p.ia:null,p.W),D.K){Ya(p.h,D);var Z=D,yt=p.L;yt&&(Z.I=yt),Z.B&&(_r(Z),ji(Z)),p.g=D}else ml(p);0<d.i.length&&Qi(d)}else K[0]!="stop"&&K[0]!="close"||Ve(d,7);else d.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Ve(d,7):Er(d):K[0]!="noop"&&d.l&&d.l.ta(K),d.v=0)}}Fn(4)}catch{}}var xf=class{constructor(o,c){this.g=o,this.map=c}};function Ha(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ka(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Qa(o){return o.h?1:o.g?o.g.size:0}function gr(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function yr(o,c){o.g?o.g.add(c):o.h=c}function Ya(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Ha.prototype.cancel=function(){if(this.i=Xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Xa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return V(o.i)}function Lf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function Ff(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function Ja(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=Ff(o),p=Lf(o),w=p.length,R=0;R<w;R++)c.call(void 0,p[R],d&&d[R],o)}var Za=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uf(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),w=null;if(0<=p){var R=o[d].substring(0,p);w=o[d].substring(p+1)}else R=o[d];c(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ke(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ke){this.h=o.h,$i(this,o.j),this.o=o.o,this.g=o.g,Wi(this,o.s),this.l=o.l;var c=o.i,d=new Wn;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),tl(this,d),this.m=o.m}else o&&(c=String(o).match(Za))?(this.h=!1,$i(this,c[1]||"",!0),this.o=jn(c[2]||""),this.g=jn(c[3]||"",!0),Wi(this,c[4]),this.l=jn(c[5]||"",!0),tl(this,c[6]||"",!0),this.m=jn(c[7]||"")):(this.h=!1,this.i=new Wn(null,this.h))}ke.prototype.toString=function(){var o=[],c=this.j;c&&o.push($n(c,el,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push($n(c,el,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push($n(d,d.charAt(0)=="/"?jf:qf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",$n(d,Wf)),o.join("")};function re(o){return new ke(o)}function $i(o,c,d){o.j=d?jn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Wi(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function tl(o,c,d){c instanceof Wn?(o.i=c,zf(o.i,o.h)):(d||(c=$n(c,$f)),o.i=new Wn(c,o.h))}function et(o,c,d){o.i.set(c,d)}function zi(o){return et(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function jn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function $n(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,Bf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Bf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var el=/[#\/\?@]/g,qf=/[#\?:]/g,jf=/[#\?]/g,$f=/[#\?@]/g,Wf=/#/g;function Wn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function ge(o){o.g||(o.g=new Map,o.h=0,o.i&&Uf(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Wn.prototype,n.add=function(o,c){ge(this),this.i=null,o=nn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function nl(o,c){ge(o),c=nn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function il(o,c){return ge(o),c=nn(o,c),o.g.has(c)}n.forEach=function(o,c){ge(this),this.g.forEach(function(d,p){d.forEach(function(w){o.call(c,w,p,this)},this)},this)},n.na=function(){ge(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const w=o[p];for(let R=0;R<w.length;R++)d.push(c[p])}return d},n.V=function(o){ge(this);let c=[];if(typeof o=="string")il(this,o)&&(c=c.concat(this.g.get(nn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return ge(this),this.i=null,o=nn(this,o),il(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function sl(o,c,d){nl(o,c),0<d.length&&(o.i=null,o.g.set(nn(o,c),V(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const R=encodeURIComponent(String(p)),D=this.V(p);for(p=0;p<D.length;p++){var w=R;D[p]!==""&&(w+="="+encodeURIComponent(String(D[p]))),o.push(w)}}return this.i=o.join("&")};function nn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function zf(o,c){c&&!o.j&&(ge(o),o.i=null,o.g.forEach(function(d,p){var w=p.toLowerCase();p!=w&&(nl(this,p),sl(this,w,d))},o)),o.j=c}function Gf(o,c){const d=new Bn;if(l.Image){const p=new Image;p.onload=C(ye,d,"TestLoadImage: loaded",!0,c,p),p.onerror=C(ye,d,"TestLoadImage: error",!1,c,p),p.onabort=C(ye,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=C(ye,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Hf(o,c){const d=new Bn,p=new AbortController,w=setTimeout(()=>{p.abort(),ye(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(w),R.ok?ye(d,"TestPingServer: ok",!0,c):ye(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),ye(d,"TestPingServer: error",!1,c)})}function ye(o,c,d,p,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),p(d)}catch{}}function Kf(){this.g=new Nf}function Qf(o,c,d){const p=d||"";try{Ja(o,function(w,R){let D=w;h(w)&&(D=lr(w)),c.push(p+R+"="+encodeURIComponent(D))})}catch(w){throw c.push(p+"type="+encodeURIComponent("_badmap")),w}}function zn(o){this.l=o.Ub||null,this.j=o.eb||!1}S(zn,cr),zn.prototype.g=function(){return new Gi(this.l,this.j)},zn.prototype.i=function(o){return function(){return o}}({});function Gi(o,c){wt.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Gi,wt),n=Gi.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Hn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Hn(this)),this.g&&(this.readyState=3,Hn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function rl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Gn(this):Hn(this),this.readyState==3&&rl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Gn(this))},n.Qa=function(o){this.g&&(this.response=o,Gn(this))},n.ga=function(){this.g&&Gn(this)};function Gn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Hn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Hn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ol(o){let c="";return gt(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function vr(o,c,d){t:{for(p in d){var p=!1;break t}p=!0}p||(d=ol(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):et(o,c,d))}function rt(o){wt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(rt,wt);var Yf=/^https?$/i,Xf=["POST","PUT"];n=rt.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dr.g(),this.v=this.o?Ma(this.o):Ma(dr),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){al(this,R);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var w in p)d.set(w,p[w]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),w=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Xf,c,void 0))||p||w||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of d)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ul(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){al(this,R)}};function al(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,ll(o),Hi(o)}function ll(o){o.A||(o.A=!0,Vt(o,"complete"),Vt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Vt(this,"complete"),Vt(this,"abort"),Hi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hi(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?cl(this):this.bb())},n.bb=function(){cl(this)};function cl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||oe(o)!=4||o.Z()!=2)){if(o.u&&oe(o)==4)Da(o.Ea,0,o);else if(Vt(o,"readystatechange"),oe(o)==4){o.h=!1;try{const D=o.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var d;if(!(d=c)){var p;if(p=D===0){var w=String(o.D).match(Za)[1]||null;!w&&l.self&&l.self.location&&(w=l.self.location.protocol.slice(0,-1)),p=!Yf.test(w?w.toLowerCase():"")}d=p}if(d)Vt(o,"complete"),Vt(o,"success");else{o.m=6;try{var R=2<oe(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",ll(o)}}finally{Hi(o)}}}}function Hi(o,c){if(o.g){ul(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Vt(o,"ready");try{d.onreadystatechange=p}catch{}}}function ul(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function oe(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<oe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Pf(c)}};function hl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Jf(o){const c={};o=(o.g&&2<=oe(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(G(o[p]))continue;var d=T(o[p]);const w=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=c[w]||[];c[w]=R,R.push(d)}I(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kn(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function dl(o){this.Aa=0,this.i=[],this.j=new Bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kn("baseRetryDelayMs",5e3,o),this.cb=Kn("retryDelaySeedMs",1e4,o),this.Wa=Kn("forwardChannelMaxRetries",2,o),this.wa=Kn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ha(o&&o.concurrentRequestLimit),this.Da=new Kf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=dl.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,p){Ot(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Tl(this,null,this.W),Qi(this)};function Er(o){if(fl(o),o.G==3){var c=o.U++,d=re(o.I);if(et(d,"SID",o.K),et(d,"RID",c),et(d,"TYPE","terminate"),Qn(o,d),c=new me(o,o.j,c),c.L=2,c.v=zi(re(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Il(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ji(c)}El(o)}function Ki(o){o.g&&(Ir(o),o.g.cancel(),o.g=null)}function fl(o){Ki(o),o.u&&(l.clearTimeout(o.u),o.u=null),Yi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Qi(o){if(!Ka(o.h)&&!o.s){o.s=!0;var c=o.Ga;Vn||Ra(),On||(Vn(),On=!0),tr.add(c,o),o.B=0}}function Zf(o,c){return Qa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Un(v(o.Ga,o,c),vl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new me(this,this.j,o);let R=this.o;if(this.S&&(R?(R=m(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)t:{for(var c=0,d=0;d<this.i.length;d++){e:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break t}if(c===4096||d===this.i.length-1){c=d+1;break t}}c=1e3}else c=1e3;c=_l(this,w,c),d=re(this.I),et(d,"RID",o),et(d,"CVER",22),this.D&&et(d,"X-HTTP-Session-Id",this.D),Qn(this,d),R&&(this.O?c="headers="+encodeURIComponent(String(ol(R)))+"&"+c:this.m&&vr(d,this.m,R)),yr(this.h,w),this.Ua&&et(d,"TYPE","init"),this.P?(et(d,"$req",c),et(d,"SID","null"),w.T=!0,pr(w,d,null)):pr(w,d,c),this.G=2}}else this.G==3&&(o?pl(this,o):this.i.length==0||Ka(this.h)||pl(this))};function pl(o,c){var d;c?d=c.l:d=o.U++;const p=re(o.I);et(p,"SID",o.K),et(p,"RID",d),et(p,"AID",o.T),Qn(o,p),o.m&&o.o&&vr(p,o.m,o.o),d=new me(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=_l(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),yr(o.h,d),pr(d,p,c)}function Qn(o,c){o.H&&gt(o.H,function(d,p){et(c,p,d)}),o.l&&Ja({},function(d,p){et(c,p,d)})}function _l(o,c,d){d=Math.min(o.i.length,d);var p=o.l?v(o.l.Na,o.l,o):null;t:{var w=o.i;let R=-1;for(;;){const D=["count="+d];R==-1?0<d?(R=w[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let Z=!0;for(let yt=0;yt<d;yt++){let K=w[yt].g;const At=w[yt].map;if(K-=R,0>K)R=Math.max(0,w[yt].g-100),Z=!1;else try{Qf(At,D,"req"+K+"_")}catch{p&&p(At)}}if(Z){p=D.join("&");break t}}}return o=o.i.splice(0,d),c.D=o,p}function ml(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Vn||Ra(),On||(Vn(),On=!0),tr.add(c,o),o.v=0}}function Tr(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Un(v(o.Fa,o),vl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,gl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Un(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),Ki(this),gl(this))};function Ir(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function gl(o){o.g=new me(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=re(o.qa);et(c,"RID","rpc"),et(c,"SID",o.K),et(c,"AID",o.T),et(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&et(c,"TO",o.ja),et(c,"TYPE","xmlhttp"),Qn(o,c),o.m&&o.o&&vr(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=zi(re(c)),d.m=null,d.P=!0,Wa(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Ki(this),Tr(this),Ot(19))};function Yi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function yl(o,c){var d=null;if(o.g==c){Yi(o),Ir(o),o.g=null;var p=2}else if(gr(o.h,c))d=c.D,Ya(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var w=o.B;p=Ui(),Vt(p,new Ba(p,d)),Qi(o)}else ml(o);else if(w=c.s,w==3||w==0&&0<c.X||!(p==1&&Zf(o,c)||p==2&&Tr(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),w){case 1:Ve(o,5);break;case 4:Ve(o,10);break;case 3:Ve(o,6);break;default:Ve(o,2)}}}function vl(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Ve(o,c){if(o.j.info("Error code "+c),c==2){var d=v(o.fb,o),p=o.Xa;const w=!p;p=new ke(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||$i(p,"https"),zi(p),w?Gf(p.toString(),d):Hf(p.toString(),d)}else Ot(2);o.G=0,o.l&&o.l.sa(c),El(o),fl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function El(o){if(o.G=0,o.ka=[],o.l){const c=Xa(o.h);(c.length!=0||o.i.length!=0)&&(N(o.ka,c),N(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function Tl(o,c,d){var p=d instanceof ke?re(d):new ke(d);if(p.g!="")c&&(p.g=c+"."+p.g),Wi(p,p.s);else{var w=l.location;p=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var R=new ke(null);p&&$i(R,p),c&&(R.g=c),w&&Wi(R,w),d&&(R.l=d),p=R}return d=o.D,c=o.ya,d&&c&&et(p,d,c),et(p,"VER",o.la),Qn(o,p),p}function Il(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new rt(new zn({eb:d})):new rt(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wl(){}n=wl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xi(){}Xi.prototype.g=function(o,c){return new Ft(o,c)};function Ft(o,c){wt.call(this),this.g=new dl(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!G(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!G(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new sn(this)}S(Ft,wt),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Er(this.g)},Ft.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=lr(o),o=d);c.i.push(new xf(c.Ya++,o)),c.G==3&&Qi(c)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Er(this.g),delete this.g,Ft.aa.N.call(this)};function Al(o){ur.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const d in c){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}S(Al,ur);function Cl(){hr.call(this),this.status=1}S(Cl,hr);function sn(o){this.g=o}S(sn,wl),sn.prototype.ua=function(){Vt(this.g,"a")},sn.prototype.ta=function(o){Vt(this.g,new Al(o))},sn.prototype.sa=function(o){Vt(this.g,new Cl)},sn.prototype.ra=function(){Vt(this.g,"b")},Xi.prototype.createWebChannel=Xi.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,Hu=function(){return new Xi},Gu=function(){return Ui()},zu=Ne,Gr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bi.NO_ERROR=0,Bi.TIMEOUT=8,Bi.HTTP_ERROR=6,rs=Bi,qa.COMPLETE="complete",Wu=qa,xa.EventType=Ln,Ln.OPEN="a",Ln.CLOSE="b",Ln.ERROR="c",Ln.MESSAGE="d",wt.prototype.listen=wt.prototype.K,ei=xa,$u=zn,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,ju=rt}).apply(typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{});const zl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new ks("@firebase/firestore");function Yn(){return $e.logLevel}function O(n,...t){if($e.logLevel<=$.DEBUG){const e=t.map(Po);$e.debug(`Firestore (${Rn}): ${n}`,...e)}}function de(n,...t){if($e.logLevel<=$.ERROR){const e=t.map(Po);$e.error(`Firestore (${Rn}): ${n}`,...e)}}function mn(n,...t){if($e.logLevel<=$.WARN){const e=t.map(Po);$e.warn(`Firestore (${Rn}): ${n}`,...e)}}function Po(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n="Unexpected state"){const t=`FIRESTORE (${Rn}) INTERNAL ASSERTION FAILED: `+n;throw de(t),new Error(t)}function tt(n,t){n||L()}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends be{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(St.UNAUTHENTICATED))}shutdown(){}}class Gm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Hm{constructor(t){this.t=t,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=u=>this.i!==i?(i=this.i,e(u)):Promise.resolve();let r=new Te;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Te,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Te)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(tt(typeof i.accessToken=="string"),new Ku(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new St(t)}}class Km{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=St.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Qm{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Km(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ym{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xm{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.R;return this.R=r.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new Ym(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Jm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Jm(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<e&&(i+=t.charAt(s[r]%t.length))}return i}}function Q(n,t){return n<t?-1:n>t?1:0}function gn(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new dt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Q(this.nanoseconds,t.nanoseconds):Q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new dt(0,0))}static max(){return new F(new dt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e,i){e===void 0?e=0:e>t.length&&L(),i===void 0?i=t.length-e:i>t.length-e&&L(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return _i.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof _i?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const r=t.get(s),a=e.get(s);if(r<a)return-1;if(r>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ot extends _i{construct(t,e,i){return new ot(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new M(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new ot(e)}static emptyPath(){return new ot([])}}const Zm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends _i{construct(t,e,i){return new Et(t,e,i)}static isValidIdentifier(t){return Zm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const r=()=>{if(i.length===0)throw new M(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new M(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new M(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(r(),s++)}if(r(),a)throw new M(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Et(e)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(ot.fromString(t))}static fromName(t){return new x(ot.fromString(t).popFirst(5))}static empty(){return new x(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ot.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new ot(t.slice()))}}function tg(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(i===1e9?new dt(e+1,0):new dt(e,i));return new Ae(s,x.empty(),t)}function eg(n){return new Ae(n.readTime,n.key,-1)}class Ae{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Ae(F.min(),x.empty(),-1)}static max(){return new Ae(F.max(),x.empty(),-1)}}function ng(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:Q(n.largestBatchId,t.largestBatchId))}/**
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
 */const ig="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==ig)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(e,r).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,i)=>{e(t)})}static reject(t){return new b((e,i)=>{i(t)})}static waitFor(t){return new b((e,i)=>{let s=0,r=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++r,a&&r===s&&e()},u=>i(u))}),a=!0,r===s&&e()})}static or(t){let e=b.resolve(!1);for(const i of t)e=e.next(s=>s?b.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,r)=>{i.push(e.call(this,s,r))}),this.waitFor(i)}static mapArray(t,e){return new b((i,s)=>{const r=t.length,a=new Array(r);let l=0;for(let u=0;u<r;u++){const h=u;e(t[h]).next(f=>{a[h]=f,++l,l===r&&i(a)},f=>s(f))}})}static doWhile(t,e){return new b((i,s)=>{const r=()=>{t()===!0?e().next(()=>{r()},s):i()};r()})}}function rg(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ci(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class No{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}No.oe=-1;function Ms(n){return n==null}function fs(n){return n===0&&1/n==-1/0}function og(n){return typeof n=="number"&&Number.isInteger(n)&&!fs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Xe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Yu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ut=class Hr{constructor(t,e){this.comparator=t,this.root=e||Ie.EMPTY}insert(t,e){return new Hr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(t){return new Hr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ts(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ts(this.root,t,this.comparator,!1)}getReverseIterator(){return new ts(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ts(this.root,t,this.comparator,!0)}},ts=class{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}},Ie=class ae{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=i??ae.RED,this.left=s??ae.EMPTY,this.right=r??ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,r){return new ae(t??this.key,e??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,i),null):r===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ae.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}};Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,i,s,r){return this}insert(t,e,i){return new Ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.comparator=t,this.data=new ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Hl(this.data.getIterator())}getIteratorFrom(t){return new Hl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof Tt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Tt(this.comparator);return e.data=t,e}}class Hl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(t){this.fields=t,t.sort(Et.comparator)}static empty(){return new Ut([])}unionWith(t){let e=new Tt(Et.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return gn(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class Xu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Xu("Invalid base64 string: "+r):r}}(t);return new kt(e)}static fromUint8Array(t){const e=function(s){let r="";for(let a=0;a<s.length;++a)r+=String.fromCharCode(s[a]);return r}(t);return new kt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const ag=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ce(n){if(tt(!!n),typeof n=="string"){let t=0;const e=ag.exec(n);if(tt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function We(n){return typeof n=="string"?kt.fromBase64String(n):kt.fromUint8Array(n)}/**
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
 */function Do(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ko(n){const t=n.mapValue.fields.__previous_value__;return Do(t)?ko(t):t}function mi(n){const t=Ce(n.mapValue.fields.__local_write_time__.timestampValue);return new dt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(t,e,i,s,r,a,l,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class gi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof gi&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const es={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ze(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Do(n)?4:cg(n)?9007199254740991:10:L()}function ee(n,t){if(n===t)return!0;const e=ze(n);if(e!==ze(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return mi(n).isEqual(mi(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const a=Ce(s.timestampValue),l=Ce(r.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,r){return We(s.bytesValue).isEqual(We(r.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,r){return ct(s.geoPointValue.latitude)===ct(r.geoPointValue.latitude)&&ct(s.geoPointValue.longitude)===ct(r.geoPointValue.longitude)}(n,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ct(s.integerValue)===ct(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const a=ct(s.doubleValue),l=ct(r.doubleValue);return a===l?fs(a)===fs(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return gn(n.arrayValue.values||[],t.arrayValue.values||[],ee);case 10:return function(s,r){const a=s.mapValue.fields||{},l=r.mapValue.fields||{};if(Gl(a)!==Gl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ee(a[u],l[u])))return!1;return!0}(n,t);default:return L()}}function yi(n,t){return(n.values||[]).find(e=>ee(e,t))!==void 0}function yn(n,t){if(n===t)return 0;const e=ze(n),i=ze(t);if(e!==i)return Q(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,t.booleanValue);case 2:return function(r,a){const l=ct(r.integerValue||r.doubleValue),u=ct(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return Kl(n.timestampValue,t.timestampValue);case 4:return Kl(mi(n),mi(t));case 5:return Q(n.stringValue,t.stringValue);case 6:return function(r,a){const l=We(r),u=We(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(r,a){const l=r.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=Q(l[h],u[h]);if(f!==0)return f}return Q(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(r,a){const l=Q(ct(r.latitude),ct(a.latitude));return l!==0?l:Q(ct(r.longitude),ct(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(r,a){const l=r.values||[],u=a.values||[];for(let h=0;h<l.length&&h<u.length;++h){const f=yn(l[h],u[h]);if(f)return f}return Q(l.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(r,a){if(r===es.mapValue&&a===es.mapValue)return 0;if(r===es.mapValue)return 1;if(a===es.mapValue)return-1;const l=r.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let _=0;_<u.length&&_<f.length;++_){const v=Q(u[_],f[_]);if(v!==0)return v;const C=yn(l[u[_]],h[f[_]]);if(C!==0)return C}return Q(u.length,f.length)}(n.mapValue,t.mapValue);default:throw L()}}function Kl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Q(n,t);const e=Ce(n),i=Ce(t),s=Q(e.seconds,i.seconds);return s!==0?s:Q(e.nanos,i.nanos)}function vn(n){return Kr(n)}function Kr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=Ce(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return We(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const r of e.values||[])s?s=!1:i+=",",i+=Kr(r);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",r=!0;for(const a of i)r?r=!1:s+=",",s+=`${a}:${Kr(e.fields[a])}`;return s+"}"}(n.mapValue):L()}function Qr(n){return!!n&&"integerValue"in n}function Vo(n){return!!n&&"arrayValue"in n}function Ql(n){return!!n&&"nullValue"in n}function Yl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function os(n){return!!n&&"mapValue"in n}function ri(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Xe(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=ri(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ri(n.arrayValue.values[e]);return t}return Object.assign({},n)}function cg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.value=t}static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!os(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ri(e)}setAll(t){let e=Et.emptyPath(),i={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,i,s),i={},s=[],e=l.popLast()}a?i[l.lastSegment()]=ri(a):s.push(l.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,i,s)}delete(t){const e=this.field(t.popLast());os(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ee(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];os(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Xe(e,(s,r)=>t[s]=r);for(const s of i)delete t[s]}clone(){return new Mt(ri(this.value))}}function Ju(n){const t=[];return Xe(n.fields,(e,i)=>{const s=new Et([e]);if(os(i)){const r=Ju(i.mapValue).fields;if(r.length===0)t.push(s);else for(const a of r)t.push(s.child(a))}else t.push(s)}),new Ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,e,i,s,r,a,l){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=r,this.data=a,this.documentState=l}static newInvalidDocument(t){return new bt(t,0,F.min(),F.min(),F.min(),Mt.empty(),0)}static newFoundDocument(t,e,i,s){return new bt(t,1,e,F.min(),i,s,0)}static newNoDocument(t,e){return new bt(t,2,e,F.min(),F.min(),Mt.empty(),0)}static newUnknownDocument(t,e){return new bt(t,3,e,F.min(),F.min(),Mt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof bt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ps{constructor(t,e){this.position=t,this.inclusive=e}}function Xl(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const r=t[s],a=n.position[s];if(r.field.isKeyField()?i=x.comparator(x.fromName(a.referenceValue),e.key):i=yn(a,e.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Jl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ee(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class _s{constructor(t,e="asc"){this.field=t,this.dir=e}}function ug(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Zu{}class ht extends Zu{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new dg(t,e,i):e==="array-contains"?new _g(t,i):e==="in"?new mg(t,i):e==="not-in"?new gg(t,i):e==="array-contains-any"?new yg(t,i):new ht(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new fg(t,i):new pg(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(yn(e,this.value)):e!==null&&ze(this.value)===ze(e)&&this.matchesComparison(yn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends Zu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ne(t,e)}matches(t){return th(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function th(n){return n.op==="and"}function eh(n){return hg(n)&&th(n)}function hg(n){for(const t of n.filters)if(t instanceof ne)return!1;return!0}function Yr(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+vn(n.value);if(eh(n))return n.filters.map(t=>Yr(t)).join(",");{const t=n.filters.map(e=>Yr(e)).join(",");return`${n.op}(${t})`}}function nh(n,t){return n instanceof ht?function(i,s){return s instanceof ht&&i.op===s.op&&i.field.isEqual(s.field)&&ee(i.value,s.value)}(n,t):n instanceof ne?function(i,s){return s instanceof ne&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,a,l)=>r&&nh(a,s.filters[l]),!0):!1}(n,t):void L()}function ih(n){return n instanceof ht?function(e){return`${e.field.canonicalString()} ${e.op} ${vn(e.value)}`}(n):n instanceof ne?function(e){return e.op.toString()+" {"+e.getFilters().map(ih).join(" ,")+"}"}(n):"Filter"}class dg extends ht{constructor(t,e,i){super(t,e,i),this.key=x.fromName(i.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class fg extends ht{constructor(t,e){super(t,"in",e),this.keys=sh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class pg extends ht{constructor(t,e){super(t,"not-in",e),this.keys=sh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function sh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>x.fromName(i.referenceValue))}class _g extends ht{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Vo(e)&&yi(e.arrayValue,this.value)}}class mg extends ht{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&yi(this.value.arrayValue,e)}}class gg extends ht{constructor(t,e){super(t,"not-in",e)}matches(t){if(yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!yi(this.value.arrayValue,e)}}class yg extends ht{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Vo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>yi(this.value.arrayValue,i))}}/**
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
 */class vg{constructor(t,e=null,i=[],s=[],r=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=l,this.ue=null}}function Zl(n,t=null,e=[],i=[],s=null,r=null,a=null){return new vg(n,t,e,i,s,r,a)}function Oo(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Yr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Ms(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>vn(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>vn(i)).join(",")),t.ue=e}return t.ue}function Mo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ug(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!nh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Jl(n.startAt,t.startAt)&&Jl(n.endAt,t.endAt)}function Xr(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,e=null,i=[],s=[],r=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Eg(n,t,e,i,s,r,a,l){return new xs(n,t,e,i,s,r,a,l)}function xo(n){return new xs(n)}function tc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Tg(n){return n.collectionGroup!==null}function oi(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Tt(Et.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new _s(r,i))}),e.has(Et.keyField().canonicalString())||t.ce.push(new _s(Et.keyField(),i))}return t.ce}function Xt(n){const t=U(n);return t.le||(t.le=Ig(t,oi(n))),t.le}function Ig(n,t){if(n.limitType==="F")return Zl(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new _s(s.field,r)});const e=n.endAt?new ps(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ps(n.startAt.position,n.startAt.inclusive):null;return Zl(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Jr(n,t,e){return new xs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ls(n,t){return Mo(Xt(n),Xt(t))&&n.limitType===t.limitType}function rh(n){return`${Oo(Xt(n))}|lt:${n.limitType}`}function an(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>ih(s)).join(", ")}]`),Ms(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>vn(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>vn(s)).join(",")),`Target(${i})`}(Xt(n))}; limitType=${n.limitType})`}function Fs(n,t){return t.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):x.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(n,t)&&function(i,s){for(const r of oi(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(a,l,u){const h=Xl(a,l,u);return a.inclusive?h<=0:h<0}(i.startAt,oi(i),s)||i.endAt&&!function(a,l,u){const h=Xl(a,l,u);return a.inclusive?h>=0:h>0}(i.endAt,oi(i),s))}(n,t)}function wg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function oh(n){return(t,e)=>{let i=!1;for(const s of oi(n)){const r=Ag(s,t,e);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function Ag(n,t,e){const i=n.field.isKeyField()?x.comparator(t.key,e.key):function(r,a,l){const u=a.data.field(r),h=l.data.field(r);return u!==null&&h!==null?yn(u,h):L()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Xe(this.inner,(e,i)=>{for(const[s,r]of i)t(s,r)})}isEmpty(){return Yu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=new ut(x.comparator);function fe(){return Cg}const ah=new ut(x.comparator);function ni(...n){let t=ah;for(const e of n)t=t.insert(e.key,e);return t}function lh(n){let t=ah;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Le(){return ai()}function ch(){return ai()}function ai(){return new Sn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Rg=new ut(x.comparator),Sg=new Tt(x.comparator);function B(...n){let t=Sg;for(const e of n)t=t.add(e);return t}const bg=new Tt(Q);function Pg(){return bg}/**
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
 */function uh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fs(t)?"-0":t}}function hh(n){return{integerValue:""+n}}function Ng(n,t){return og(t)?hh(t):uh(n,t)}/**
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
 */class Us{constructor(){this._=void 0}}function Dg(n,t,e){return n instanceof ms?function(s,r){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Do(r)&&(r=ko(r)),r&&(a.fields.__previous_value__=r),{mapValue:a}}(e,t):n instanceof vi?fh(n,t):n instanceof Ei?ph(n,t):function(s,r){const a=dh(s,r),l=ec(a)+ec(s.Pe);return Qr(a)&&Qr(s.Pe)?hh(l):uh(s.serializer,l)}(n,t)}function kg(n,t,e){return n instanceof vi?fh(n,t):n instanceof Ei?ph(n,t):e}function dh(n,t){return n instanceof gs?function(i){return Qr(i)||function(r){return!!r&&"doubleValue"in r}(i)}(t)?t:{integerValue:0}:null}class ms extends Us{}class vi extends Us{constructor(t){super(),this.elements=t}}function fh(n,t){const e=_h(t);for(const i of n.elements)e.some(s=>ee(s,i))||e.push(i);return{arrayValue:{values:e}}}class Ei extends Us{constructor(t){super(),this.elements=t}}function ph(n,t){let e=_h(t);for(const i of n.elements)e=e.filter(s=>!ee(s,i));return{arrayValue:{values:e}}}class gs extends Us{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ec(n){return ct(n.integerValue||n.doubleValue)}function _h(n){return Vo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Vg(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof vi&&s instanceof vi||i instanceof Ei&&s instanceof Ei?gn(i.elements,s.elements,ee):i instanceof gs&&s instanceof gs?ee(i.Pe,s.Pe):i instanceof ms&&s instanceof ms}(n.transform,t.transform)}class Og{constructor(t,e){this.version=t,this.transformResults=e}}class Jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Jt}static exists(t){return new Jt(void 0,t)}static updateTime(t){return new Jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function as(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Bs{}function mh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new yh(n.key,Jt.none()):new Ri(n.key,n.data,Jt.none());{const e=n.data,i=Mt.empty();let s=new Tt(Et.comparator);for(let r of t.fields)if(!s.has(r)){let a=e.field(r);a===null&&r.length>1&&(r=r.popLast(),a=e.field(r)),a===null?i.delete(r):i.set(r,a),s=s.add(r)}return new Pe(n.key,i,new Ut(s.toArray()),Jt.none())}}function Mg(n,t,e){n instanceof Ri?function(s,r,a){const l=s.value.clone(),u=ic(s.fieldTransforms,r,a.transformResults);l.setAll(u),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Pe?function(s,r,a){if(!as(s.precondition,r))return void r.convertToUnknownDocument(a.version);const l=ic(s.fieldTransforms,r,a.transformResults),u=r.data;u.setAll(gh(s)),u.setAll(l),r.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(s,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function li(n,t,e,i){return n instanceof Ri?function(r,a,l,u){if(!as(r.precondition,a))return l;const h=r.value.clone(),f=sc(r.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,t,e,i):n instanceof Pe?function(r,a,l,u){if(!as(r.precondition,a))return l;const h=sc(r.fieldTransforms,u,a),f=a.data;return f.setAll(gh(r)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(_=>_.field))}(n,t,e,i):function(r,a,l){return as(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function xg(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),r=dh(i.transform,s||null);r!=null&&(e===null&&(e=Mt.empty()),e.set(i.field,r))}return e||null}function nc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&gn(i,s,(r,a)=>Vg(r,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ri extends Bs{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pe extends Bs{constructor(t,e,i,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function gh(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function ic(n,t,e){const i=new Map;tt(n.length===e.length);for(let s=0;s<e.length;s++){const r=n[s],a=r.transform,l=t.data.field(r.field);i.set(r.field,kg(a,l,e[s]))}return i}function sc(n,t,e){const i=new Map;for(const s of n){const r=s.transform,a=e.data.field(s.field);i.set(s.field,Dg(r,a,t))}return i}class yh extends Bs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lg extends Bs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&Mg(r,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=li(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=li(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=ch();return this.mutations.forEach(s=>{const r=t.get(s.key),a=r.overlayedDocument;let l=this.applyToLocalView(a,r.mutatedFields);l=e.has(s.key)?null:l;const u=mh(a,l);u!==null&&i.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(F.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&gn(this.mutations,t.mutations,(e,i)=>nc(e,i))&&gn(this.baseMutations,t.baseMutations,(e,i)=>nc(e,i))}}class Lo{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){tt(t.mutations.length===i.length);let s=function(){return Rg}();const r=t.mutations;for(let a=0;a<r.length;a++)s=s.insert(r[a].key,i[a].version);return new Lo(t,e,i,s)}}/**
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
 */class Ug{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Bg{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,j;function qg(n){switch(n){default:return L();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function vh(n){if(n===void 0)return de("GRPC error has no .code"),P.UNKNOWN;switch(n){case lt.OK:return P.OK;case lt.CANCELLED:return P.CANCELLED;case lt.UNKNOWN:return P.UNKNOWN;case lt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case lt.INTERNAL:return P.INTERNAL;case lt.UNAVAILABLE:return P.UNAVAILABLE;case lt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case lt.NOT_FOUND:return P.NOT_FOUND;case lt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case lt.ABORTED:return P.ABORTED;case lt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case lt.DATA_LOSS:return P.DATA_LOSS;default:return L()}}(j=lt||(lt={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jg(){return new TextEncoder}/**
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
 */const $g=new Ue([4294967295,4294967295],0);function rc(n){const t=jg().encode(n),e=new qu;return e.update(t),new Uint8Array(e.digest())}function oc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Ue([e,i],0),new Ue([s,r],0)]}class Fo{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new ii(`Invalid padding: ${e}`);if(i<0)throw new ii(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new ii(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new ii(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Ue.fromNumber(this.Ie)}Ee(t,e,i){let s=t.add(e.multiply(Ue.fromNumber(i)));return s.compare($g)===1&&(s=new Ue([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=rc(t),[i,s]=oc(e);for(let r=0;r<this.hashCount;r++){const a=this.Ee(i,s,r);if(!this.de(a))return!1}return!0}static create(t,e,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),a=new Fo(r,s,e);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=rc(t),[i,s]=oc(e);for(let r=0;r<this.hashCount;r++){const a=this.Ee(i,s,r);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,e,i,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const s=new Map;return s.set(t,Si.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new qs(F.min(),s,new ut(Q),fe(),B())}}class Si{constructor(t,e,i,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new Si(i,e,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e,i,s){this.Re=t,this.removedTargetIds=e,this.key=i,this.Ve=s}}class Eh{constructor(t,e){this.targetId=t,this.me=e}}class Th{constructor(t,e,i=kt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=s}}class ac{constructor(){this.fe=0,this.ge=cc(),this.pe=kt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=B(),e=B(),i=B();return this.ge.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:i=i.add(s);break;default:L()}}),new Si(this.pe,this.ye,t,e,i)}ve(){this.we=!1,this.ge=cc()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Wg{constructor(t){this.Le=t,this.Be=new Map,this.ke=fe(),this.qe=lc(),this.Qe=new ut(Q)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const i=this.Ge(e);switch(t.state){case 0:this.ze(e)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.ve(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),i.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((i,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,i=t.me.count,s=this.Je(e);if(s){const r=s.target;if(Xr(r))if(i===0){const a=new x(r.path);this.Ue(e,a,bt.newNoDocument(a,F.min()))}else tt(i===1);else{const a=this.Ye(e);if(a!==i){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,h)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=e;let a,l;try{a=We(i).toUint8Array()}catch(u){if(u instanceof Xu)return mn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Fo(a,s,r)}catch(u){return mn(u instanceof ii?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,i){return e.me.count===i-this.nt(t,e.targetId)?0:2}nt(t,e){const i=this.Le.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,r,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((r,a)=>{const l=this.Je(a);if(l){if(r.current&&Xr(l.target)){const u=new x(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,bt.newNoDocument(u,t))}r.be&&(e.set(a,r.Ce()),r.ve())}});let i=B();this.qe.forEach((r,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.ke.forEach((r,a)=>a.setReadTime(t));const s=new qs(t,e,this.Qe,this.ke,i);return this.ke=fe(),this.qe=lc(),this.Qe=new ut(Q),s}$e(t,e){if(!this.ze(t))return;const i=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,i),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,i){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),i&&(this.ke=this.ke.insert(e,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ac,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Tt(Q),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||O("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ac),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function lc(){return new ut(x.comparator)}function cc(){return new ut(x.comparator)}const zg={asc:"ASCENDING",desc:"DESCENDING"},Gg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hg={and:"AND",or:"OR"};class Kg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Zr(n,t){return n.useProto3Json||Ms(t)?t:{value:t}}function ys(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ih(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Qg(n,t){return ys(n,t.toTimestamp())}function Zt(n){return tt(!!n),F.fromTimestamp(function(e){const i=Ce(e);return new dt(i.seconds,i.nanos)}(n))}function Uo(n,t){return to(n,t).canonicalString()}function to(n,t){const e=function(s){return new ot(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function wh(n){const t=ot.fromString(n);return tt(bh(t)),t}function eo(n,t){return Uo(n.databaseId,t.path)}function Pr(n,t){const e=wh(t);if(e.get(1)!==n.databaseId.projectId)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(Ch(e))}function Ah(n,t){return Uo(n.databaseId,t)}function Yg(n){const t=wh(n);return t.length===4?ot.emptyPath():Ch(t)}function no(n){return new ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ch(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function uc(n,t,e){return{name:eo(n,t),fields:e.value.mapValue.fields}}function Xg(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(h,f){return h.useProto3Json?(tt(f===void 0||typeof f=="string"),kt.fromBase64String(f||"")):(tt(f===void 0||f instanceof Buffer||f instanceof Uint8Array),kt.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const f=h.code===void 0?P.UNKNOWN:vh(h.code);return new M(f,h.message||"")}(a);e=new Th(i,s,r,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Pr(n,i.document.name),r=Zt(i.document.updateTime),a=i.document.createTime?Zt(i.document.createTime):F.min(),l=new Mt({mapValue:{fields:i.document.fields}}),u=bt.newFoundDocument(s,r,a,l),h=i.targetIds||[],f=i.removedTargetIds||[];e=new ls(h,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Pr(n,i.document),r=i.readTime?Zt(i.readTime):F.min(),a=bt.newNoDocument(s,r),l=i.removedTargetIds||[];e=new ls([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Pr(n,i.document),r=i.removedTargetIds||[];e=new ls([],r,s,null)}else{if(!("filter"in t))return L();{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,a=new Bg(s,r),l=i.targetId;e=new Eh(l,a)}}return e}function Jg(n,t){let e;if(t instanceof Ri)e={update:uc(n,t.key,t.value)};else if(t instanceof yh)e={delete:eo(n,t.key)};else if(t instanceof Pe)e={update:uc(n,t.key,t.data),updateMask:ay(t.fieldMask)};else{if(!(t instanceof Lg))return L();e={verify:eo(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(r,a){const l=a.transform;if(l instanceof ms)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ei)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof gs)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw L()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Qg(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:L()}(n,t.precondition)),e}function Zg(n,t){return n&&n.length>0?(tt(t!==void 0),n.map(e=>function(s,r){let a=s.updateTime?Zt(s.updateTime):Zt(r);return a.isEqual(F.min())&&(a=Zt(r)),new Og(a,s.transformResults||[])}(e,t))):[]}function ty(n,t){return{documents:[Ah(n,t.path)]}}function ey(n,t){const e={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=Ah(n,s);const r=function(h){if(h.length!==0)return Sh(ne.create(h,"and"))}(t.filters);r&&(e.structuredQuery.where=r);const a=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:ln(v.field),direction:sy(v.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Zr(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:e,parent:s}}function ny(n){let t=Yg(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){tt(i===1);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let r=[];e.where&&(r=function(_){const v=Rh(_);return v instanceof ne&&eh(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(_){return _.map(v=>function(S){return new _s(cn(S.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(v))}(e.orderBy));let l=null;e.limit&&(l=function(_){let v;return v=typeof _=="object"?_.value:_,Ms(v)?null:v}(e.limit));let u=null;e.startAt&&(u=function(_){const v=!!_.before,C=_.values||[];return new ps(C,v)}(e.startAt));let h=null;return e.endAt&&(h=function(_){const v=!_.before,C=_.values||[];return new ps(C,v)}(e.endAt)),Eg(t,s,a,r,l,"F",u,h)}function iy(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Rh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=cn(e.unaryFilter.field);return ht.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=cn(e.unaryFilter.field);return ht.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=cn(e.unaryFilter.field);return ht.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=cn(e.unaryFilter.field);return ht.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return ht.create(cn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ne.create(e.compositeFilter.filters.map(i=>Rh(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function sy(n){return zg[n]}function ry(n){return Gg[n]}function oy(n){return Hg[n]}function ln(n){return{fieldPath:n.canonicalString()}}function cn(n){return Et.fromServerFormat(n.fieldPath)}function Sh(n){return n instanceof ht?function(e){if(e.op==="=="){if(Yl(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NAN"}};if(Ql(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Yl(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NOT_NAN"}};if(Ql(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ln(e.field),op:ry(e.op),value:e.value}}}(n):n instanceof ne?function(e){const i=e.getFilters().map(s=>Sh(s));return i.length===1?i[0]:{compositeFilter:{op:oy(e.op),filters:i}}}(n):L()}function ay(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function bh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e,i,s,r=F.min(),a=F.min(),l=kt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new ve(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ve(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ve(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ve(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(t){this.ct=t}}function cy(n){const t=ny({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jr(t,t.limit,"L"):t}/**
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
 */class uy{constructor(){this._n=new hy}addToCollectionParentIndex(t,e){return this._n.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(Ae.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(Ae.min())}updateCollectionGroup(t,e,i){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class hy{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new Tt(ot.comparator),r=!s.has(i);return this.index[e]=s.add(i),r}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new Tt(ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new En(0)}static Ln(){return new En(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.changes=new Sn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,bt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?b.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fy{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&li(i.mutation,s,Ut.empty(),dt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,B()).next(()=>i))}getLocalViewOfDocuments(t,e,i=B()){const s=Le();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(r=>{let a=ni();return r.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const i=Le();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,B()))}populateOverlays(t,e,i){const s=[];return i.forEach(r=>{e.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(t,s).next(r=>{r.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,i,s){let r=fe();const a=ai(),l=function(){return ai()}();return e.forEach((u,h)=>{const f=i.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Pe)?r=r.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),li(f.mutation,h,f.mutation.getFieldMask(),dt.now())):a.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((h,f)=>a.set(h,f)),e.forEach((h,f)=>{var _;return l.set(h,new fy(f,(_=a.get(h))!==null&&_!==void 0?_:null))}),l))}recalculateAndSaveOverlays(t,e){const i=ai();let s=new ut((a,l)=>a-l),r=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let f=i.get(u)||Ut.empty();f=l.applyToLocalView(h,f),i.set(u,f);const _=(s.get(l.batchId)||B()).add(u);s=s.insert(l.batchId,_)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,_=ch();f.forEach(v=>{if(!r.has(v)){const C=mh(e.get(v),i.get(v));C!==null&&_.set(v,C),r=r.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,_))}return b.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Tg(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(r=>{const a=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-r.size):b.resolve(Le());let l=-1,u=r;return a.next(h=>b.forEach(h,(f,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),r.get(f)?b.resolve():this.remoteDocumentCache.getEntry(t,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(t,h,r)).next(()=>this.computeViews(t,u,h,B())).next(f=>({batchId:l,changes:lh(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(i=>{let s=ni();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const r=e.collectionGroup;let a=ni();return this.indexManager.getCollectionParents(t,r).next(l=>b.forEach(l,u=>{const h=function(_,v){return new xs(v,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(e,u.child(r));return this.getDocumentsMatchingCollectionQuery(t,h,i,s).next(f=>{f.forEach((_,v)=>{a=a.insert(_,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,r,s))).next(a=>{r.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,bt.newInvalidDocument(f)))});let l=ni();return a.forEach((u,h)=>{const f=r.get(u);f!==void 0&&li(f.mutation,h,Ut.empty(),dt.now()),Fs(e,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class _y{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return b.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Zt(s.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:cy(s.bundledQuery),readTime:Zt(s.readTime)}}(e)),b.resolve()}}/**
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
 */class my{constructor(){this.overlays=new ut(x.comparator),this.hr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Le();return b.forEach(e,s=>this.getOverlay(t,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,r)=>{this.ht(t,e,r)}),b.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(i)),b.resolve()}getOverlaysForCollection(t,e,i){const s=Le(),r=e.length+1,a=new x(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>i&&s.set(u.getKey(),u)}return b.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let r=new ut((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>i){let f=r.get(h.largestBatchId);f===null&&(f=Le(),r=r.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Le(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return b.resolve(l)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new Ug(e,i));let r=this.hr.get(e);r===void 0&&(r=B(),this.hr.set(e,r)),this.hr.set(e,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.Pr=new Tt(pt.Ir),this.Tr=new Tt(pt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const i=new pt(t,e);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Ar(new pt(t,e))}Rr(t,e){t.forEach(i=>this.removeReference(i,e))}Vr(t){const e=new x(new ot([])),i=new pt(e,t),s=new pt(e,t+1),r=[];return this.Tr.forEachInRange([i,s],a=>{this.Ar(a),r.push(a.key)}),r}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new x(new ot([])),i=new pt(e,t),s=new pt(e,t+1);let r=B();return this.Tr.forEachInRange([i,s],a=>{r=r.add(a.key)}),r}containsKey(t){const e=new pt(t,0),i=this.Pr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class pt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return x.comparator(t.key,e.key)||Q(t.pr,e.pr)}static Er(t,e){return Q(t.pr,e.pr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Tt(pt.Ir)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Fg(r,e,i,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new pt(l.key,r)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.br(i),r=s<0?0:s;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new pt(e,0),s=new pt(e,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([i,s],a=>{const l=this.Sr(a.pr);r.push(l)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new Tt(Q);return e.forEach(s=>{const r=new pt(s,0),a=new pt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,a],l=>{i=i.add(l.pr)})}),b.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let r=i;x.isDocumentKey(r)||(r=r.child(""));const a=new pt(new x(r),0);let l=new Tt(Q);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.pr)),!0)},a),b.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(i=>{const s=this.Sr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){tt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return b.forEach(e.mutations,s=>{const r=new pt(s.key,e.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,e){const i=new pt(e,0),s=this.wr.firstAfterOrEqual(i);return b.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(t){this.vr=t,this.docs=function(){return new ut(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),r=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return b.resolve(i?i.document.mutableCopy():bt.newInvalidDocument(e))}getEntries(t,e){let i=fe();return e.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():bt.newInvalidDocument(s))}),b.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let r=fe();const a=e.path,l=new x(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||ng(eg(f),i)<=0||(s.has(f.key)||Fs(e,f))&&(r=r.insert(f.key,f.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(t,e,i,s){L()}Fr(t,e){return b.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new vy(this)}getSize(t){return b.resolve(this.size)}}class vy extends dy{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(i)}),b.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(t){this.persistence=t,this.Mr=new Sn(e=>Oo(e),Mo),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Bo,this.targetCount=0,this.Lr=En.Nn()}forEachTarget(t,e){return this.Mr.forEach((i,s)=>e(s)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Or&&(this.Or=e),b.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new En(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.qn(e),b.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,i){let s=0;const r=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&i.get(l.targetId)===null&&(this.Mr.delete(a),r.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),b.waitFor(r).next(()=>s)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const i=this.Mr.get(e)||null;return b.resolve(i)}addMatchingKeys(t,e,i){return this.Nr.dr(e,i),b.resolve()}removeMatchingKeys(t,e,i){this.Nr.Rr(e,i);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach(a=>{r.push(s.markPotentiallyOrphaned(t,a))}),b.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Nr.gr(e);return b.resolve(i)}containsKey(t,e){return b.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(t,e){this.Br={},this.overlays={},this.kr=new No(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Ey(this),this.indexManager=new uy,this.remoteDocumentCache=function(s){return new yy(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new ly(e),this.$r=new _y(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new my,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Br[t.toKey()];return i||(i=new gy(e,this.referenceDelegate),this.Br[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,i){O("MemoryPersistence","Starting transaction:",t);const s=new Iy(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(r=>this.referenceDelegate.Wr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gr(t,e){return b.or(Object.values(this.Br).map(i=>()=>i.containsKey(t,e)))}}class Iy extends sg{constructor(t){super(),this.currentSequenceNumber=t}}class qo{constructor(t){this.persistence=t,this.zr=new Bo,this.jr=null}static Hr(t){return new qo(t)}get Jr(){if(this.jr)return this.jr;throw L()}addReference(t,e,i){return this.zr.addReference(i,e),this.Jr.delete(i.toString()),b.resolve()}removeReference(t,e,i){return this.zr.removeReference(i,e),this.Jr.add(i.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),b.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(r=>this.Jr.add(r.toString()))}).next(()=>i.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Jr,i=>{const s=x.fromPath(i);return this.Yr(t,s).next(r=>{r||e.removeEntry(s,F.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(i=>{i?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return b.or([()=>b.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.qi=i,this.Qi=s}static Ki(t,e){let i=B(),s=B();for(const r of e.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new jo(t,e.fromCache,i,s)}}/**
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
 */class wy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Ay{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return pp()?8:rg(Io())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,i,s){const r={result:null};return this.ji(t,e).next(a=>{r.result=a}).next(()=>{if(!r.result)return this.Hi(t,e,s,i).next(a=>{r.result=a})}).next(()=>{if(r.result)return;const a=new wy;return this.Ji(t,e,a).next(l=>{if(r.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>r.result)}Yi(t,e,i,s){return i.documentReadCount<this.Wi?(Yn()<=$.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",an(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),b.resolve()):(Yn()<=$.DEBUG&&O("QueryEngine","Query:",an(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(Yn()<=$.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",an(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Xt(e))):b.resolve())}ji(t,e){if(tc(e))return b.resolve(null);let i=Xt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Jr(e,null,"F"),i=Xt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(r=>{const a=B(...r);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(u=>{const h=this.Zi(e,l);return this.Xi(e,h,a,u.readTime)?this.ji(t,Jr(e,null,"F")):this.es(t,h,e,u)}))})))}Hi(t,e,i,s){return tc(e)||s.isEqual(F.min())?b.resolve(null):this.zi.getDocuments(t,i).next(r=>{const a=this.Zi(e,r);return this.Xi(e,a,i,s)?b.resolve(null):(Yn()<=$.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),an(e)),this.es(t,a,e,tg(s,-1)).next(l=>l))})}Zi(t,e){let i=new Tt(oh(t));return e.forEach((s,r)=>{Fs(t,r)&&(i=i.add(r))}),i}Xi(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ji(t,e,i){return Yn()<=$.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",an(e)),this.zi.getDocumentsMatchingQuery(t,e,Ae.min(),i)}es(t,e,i,s){return this.zi.getDocumentsMatchingQuery(t,i,s).next(r=>(e.forEach(a=>{r=r.insert(a.key,a)}),r))}}/**
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
 */class Cy{constructor(t,e,i,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new ut(Q),this.rs=new Sn(r=>Oo(r),Mo),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(i)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new py(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Ry(n,t,e,i){return new Cy(n,t,e,i)}async function Ph(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,e._s(t),e.mutationQueue.getAllMutationBatches(i))).next(r=>{const a=[],l=[];let u=B();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of r){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(i,u).next(h=>({us:h,removedBatchIds:a,addedBatchIds:l}))})})}function Sy(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),r=e.os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const _=h.batch,v=_.keys();let C=b.resolve();return v.forEach(S=>{C=C.next(()=>f.getEntry(u,S)).next(V=>{const N=h.docVersions.get(S);tt(N!==null),V.version.compareTo(N)<0&&(_.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,_))}(e,i,t,r).next(()=>r.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let u=B();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Nh(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function by(n,t){const e=U(n),i=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const l=[];t.targetChanges.forEach((f,_)=>{const v=s.get(_);if(!v)return;l.push(e.Qr.removeMatchingKeys(r,f.removedDocuments,_).next(()=>e.Qr.addMatchingKeys(r,f.addedDocuments,_)));let C=v.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(_)!==null?C=C.withResumeToken(kt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,i)),s=s.insert(_,C),function(V,N,H){return V.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(v,C,f)&&l.push(e.Qr.updateTargetData(r,C))});let u=fe(),h=B();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(r,f))}),l.push(Py(r,a,t.documentUpdates).next(f=>{u=f.cs,h=f.ls})),!i.isEqual(F.min())){const f=e.Qr.getLastRemoteSnapshotVersion(r).next(_=>e.Qr.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(f)}return b.waitFor(l).next(()=>a.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,u,h)).next(()=>u)}).then(r=>(e.ns=s,r))}function Py(n,t,e){let i=B(),s=B();return e.forEach(r=>i=i.add(r)),t.getEntries(n,i).next(r=>{let a=fe();return e.forEach((l,u)=>{const h=r.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(F.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):O("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{cs:a,ls:s}})}function Ny(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function Dy(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return e.Qr.getTargetData(i,t).next(r=>r?(s=r,b.resolve(s)):e.Qr.allocateTargetId(i).next(a=>(s=new ve(t,a,"TargetPurposeListen",i.currentSequenceNumber),e.Qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=e.ns.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(i.targetId,i),e.rs.set(t,i.targetId)),i})}async function io(n,t,e){const i=U(n),s=i.ns.get(t),r=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",r,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ci(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.ns=i.ns.remove(t),i.rs.delete(s.target)}function hc(n,t,e){const i=U(n);let s=F.min(),r=B();return i.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const _=U(u),v=_.rs.get(f);return v!==void 0?b.resolve(_.ns.get(v)):_.Qr.getTargetData(h,f)}(i,a,Xt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{r=u})}).next(()=>i.ts.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?r:B())).next(l=>(ky(i,wg(t),l),{documents:l,hs:r})))}function ky(n,t,e){let i=n.ss.get(t)||F.min();e.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.ss.set(t,i)}class dc{constructor(){this.activeTargetIds=Pg()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Vy{constructor(){this.no=new dc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,i){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new dc,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Oy{io(t){}shutdown(){}}/**
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
 */class fc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ns=null;function Nr(){return ns===null?ns=function(){return 268435456+Math.round(2147483648*Math.random())}():ns++,"0x"+ns.toString(16)}/**
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
 */const My={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class Ly extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+e.host,this.So=`projects/${s}/databases/${r}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get Do(){return!1}Co(e,i,s,r,a){const l=Nr(),u=this.vo(e,i.toUriEncodedString());O("RestConnection",`Sending RPC '${e}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,r,a),this.Mo(e,u,h,s).then(f=>(O("RestConnection",`Received RPC '${e}' ${l}: `,f),f),f=>{throw mn("RestConnection",`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}xo(e,i,s,r,a,l){return this.Co(e,i,s,r,a)}Fo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,a)=>e[a]=r),s&&s.headers.forEach((r,a)=>e[a]=r)}vo(e,i){const s=My[e];return`${this.wo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,i,s){const r=Nr();return new Promise((a,l)=>{const u=new ju;u.setWithCredentials(!0),u.listenOnce(Wu.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case rs.NO_ERROR:const f=u.getResponseJson();O(Rt,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(f)),a(f);break;case rs.TIMEOUT:O(Rt,`RPC '${t}' ${r} timed out`),l(new M(P.DEADLINE_EXCEEDED,"Request time out"));break;case rs.HTTP_ERROR:const _=u.getStatus();if(O(Rt,`RPC '${t}' ${r} failed with status:`,_,"response text:",u.getResponseText()),_>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const C=v==null?void 0:v.error;if(C&&C.status&&C.message){const S=function(N){const H=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(H)>=0?H:P.UNKNOWN}(C.status);l(new M(S,C.message))}else l(new M(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new M(P.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{O(Rt,`RPC '${t}' ${r} completed.`)}});const h=JSON.stringify(s);O(Rt,`RPC '${t}' ${r} sending request:`,s),u.send(e,"POST",h,i,15)})}Oo(t,e,i){const s=Nr(),r=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Hu(),l=Gu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new $u({})),this.Fo(u.initMessageHeaders,e,i),u.encodeInitMessageHeaders=!0;const f=r.join("");O(Rt,`Creating RPC '${t}' stream ${s}: ${f}`,u);const _=a.createWebChannel(f,u);let v=!1,C=!1;const S=new xy({lo:N=>{C?O(Rt,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(v||(O(Rt,`Opening RPC '${t}' stream ${s} transport.`),_.open(),v=!0),O(Rt,`RPC '${t}' stream ${s} sending:`,N),_.send(N))},ho:()=>_.close()}),V=(N,H,G)=>{N.listen(H,Y=>{try{G(Y)}catch(at){setTimeout(()=>{throw at},0)}})};return V(_,ei.EventType.OPEN,()=>{C||(O(Rt,`RPC '${t}' stream ${s} transport opened.`),S.mo())}),V(_,ei.EventType.CLOSE,()=>{C||(C=!0,O(Rt,`RPC '${t}' stream ${s} transport closed`),S.po())}),V(_,ei.EventType.ERROR,N=>{C||(C=!0,mn(Rt,`RPC '${t}' stream ${s} transport errored:`,N),S.po(new M(P.UNAVAILABLE,"The operation could not be completed")))}),V(_,ei.EventType.MESSAGE,N=>{var H;if(!C){const G=N.data[0];tt(!!G);const Y=G,at=Y.error||((H=Y[0])===null||H===void 0?void 0:H.error);if(at){O(Rt,`RPC '${t}' stream ${s} received error:`,at);const ie=at.status;let gt=function(y){const E=lt[y];if(E!==void 0)return vh(E)}(ie),I=at.message;gt===void 0&&(gt=P.INTERNAL,I="Unknown error status: "+ie+" with message "+at.message),C=!0,S.po(new M(gt,I)),_.close()}else O(Rt,`RPC '${t}' stream ${s} received:`,G),S.yo(G)}}),V(l,zu.STAT_EVENT,N=>{N.stat===Gr.PROXY?O(Rt,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Gr.NOPROXY&&O(Rt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function Dr(){return typeof document<"u"?document:null}/**
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
 */function js(n){return new Kg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,e,i=1e3,s=1.5,r=6e4){this.oi=t,this.timerId=e,this.No=i,this.Lo=s,this.Bo=r,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-i);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,e,i,s,r,a,l,u){this.oi=t,this.Go=i,this.zo=s,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Dh(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(de(e.toString()),de("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.jo===e&&this.u_(i,s)},i=>{t(()=>{const s=new M(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(s)})})}u_(t,e){const i=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{i(()=>this.c_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return O("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fy extends kh{constructor(t,e,i,s,r,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,s,a),this.serializer=r}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=Xg(this.serializer,t),i=function(r){if(!("targetChange"in r))return F.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Zt(a.readTime):F.min()}(t);return this.listener.h_(e,i)}P_(t){const e={};e.database=no(this.serializer),e.addTarget=function(r,a){let l;const u=a.target;if(l=Xr(u)?{documents:ty(r,u)}:{query:ey(r,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ih(r,a.resumeToken);const h=Zr(r,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=ys(r,a.snapshotVersion.toTimestamp());const h=Zr(r,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const i=iy(this.serializer,t);i&&(e.labels=i),this.i_(e)}I_(t){const e={};e.database=no(this.serializer),e.removeTarget=t,this.i_(e)}}class Uy extends kh{constructor(t,e,i,s,r,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,a),this.serializer=r,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Zg(t.writeResults,t.commitTime),i=Zt(t.commitTime);return this.listener.A_(i,e)}return tt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=no(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>Jg(this.serializer,i))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.Co(t,to(e,i),s,r,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(P.UNKNOWN,r.toString())})}xo(t,e,i,s,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,to(e,i),s,a,l,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(P.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class qy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(de(e),this.y_=!1):O("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(t,e,i,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=r,this.O_.io(a=>{i.enqueueAndForget(async()=>{Je(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=U(u);h.M_.add(4),await bi(h),h.N_.set("Unknown"),h.M_.delete(4),await $s(h)}(this))})}),this.N_=new qy(i,s)}}async function $s(n){if(Je(n))for(const t of n.x_)await t(!0)}async function bi(n){for(const t of n.x_)await t(!1)}function Vh(n,t){const e=U(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Go(e)?zo(e):bn(e).Xo()&&Wo(e,t))}function $o(n,t){const e=U(n),i=bn(e);e.F_.delete(t),i.Xo()&&Oh(e,t),e.F_.size===0&&(i.Xo()?i.n_():Je(e)&&e.N_.set("Unknown"))}function Wo(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}bn(n).P_(t)}function Oh(n,t){n.L_.xe(t),bn(n).I_(t)}function zo(n){n.L_=new Wg({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),bn(n).start(),n.N_.w_()}function Go(n){return Je(n)&&!bn(n).Zo()&&n.F_.size>0}function Je(n){return U(n).M_.size===0}function Mh(n){n.L_=void 0}async function $y(n){n.N_.set("Online")}async function Wy(n){n.F_.forEach((t,e)=>{Wo(n,t)})}async function zy(n,t){Mh(n),Go(n)?(n.N_.D_(t),zo(n)):n.N_.set("Unknown")}async function Gy(n,t,e){if(n.N_.set("Online"),t instanceof Th&&t.state===2&&t.cause)try{await async function(s,r){const a=r.cause;for(const l of r.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(n,t)}catch(i){O("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await vs(n,i)}else if(t instanceof ls?n.L_.Ke(t):t instanceof Eh?n.L_.He(t):n.L_.We(t),!e.isEqual(F.min()))try{const i=await Nh(n.localStore);e.compareTo(i)>=0&&await function(r,a){const l=r.L_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=r.F_.get(h);f&&r.F_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=r.F_.get(u);if(!f)return;r.F_.set(u,f.withResumeToken(kt.EMPTY_BYTE_STRING,f.snapshotVersion)),Oh(r,u);const _=new ve(f.target,u,h,f.sequenceNumber);Wo(r,_)}),r.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(i){O("RemoteStore","Failed to raise snapshot:",i),await vs(n,i)}}async function vs(n,t,e){if(!Ci(t))throw t;n.M_.add(1),await bi(n),n.N_.set("Offline"),e||(e=()=>Nh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await $s(n)})}function xh(n,t){return t().catch(e=>vs(n,e,t))}async function Ws(n){const t=U(n),e=Re(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Hy(t);)try{const s=await Ny(t.localStore,i);if(s===null){t.v_.length===0&&e.n_();break}i=s.batchId,Ky(t,s)}catch(s){await vs(t,s)}Lh(t)&&Fh(t)}function Hy(n){return Je(n)&&n.v_.length<10}function Ky(n,t){n.v_.push(t);const e=Re(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Lh(n){return Je(n)&&!Re(n).Zo()&&n.v_.length>0}function Fh(n){Re(n).start()}async function Qy(n){Re(n).V_()}async function Yy(n){const t=Re(n);for(const e of n.v_)t.d_(e.mutations)}async function Xy(n,t,e){const i=n.v_.shift(),s=Lo.from(i,t,e);await xh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ws(n)}async function Jy(n,t){t&&Re(n).E_&&await async function(i,s){if(function(a){return qg(a)&&a!==P.ABORTED}(s.code)){const r=i.v_.shift();Re(i).t_(),await xh(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ws(i)}}(n,t),Lh(n)&&Fh(n)}async function pc(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const i=Je(e);e.M_.add(3),await bi(e),i&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await $s(e)}async function Zy(n,t){const e=U(n);t?(e.M_.delete(2),await $s(e)):t||(e.M_.add(2),await bi(e),e.N_.set("Unknown"))}function bn(n){return n.B_||(n.B_=function(e,i,s){const r=U(e);return r.f_(),new Fy(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Po:$y.bind(null,n),To:Wy.bind(null,n),Ao:zy.bind(null,n),h_:Gy.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),Go(n)?zo(n):n.N_.set("Unknown")):(await n.B_.stop(),Mh(n))})),n.B_}function Re(n){return n.k_||(n.k_=function(e,i,s){const r=U(e);return r.f_(),new Uy(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Qy.bind(null,n),Ao:Jy.bind(null,n),R_:Yy.bind(null,n),A_:Xy.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Ws(n)):(await n.k_.stop(),n.v_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,e,i,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,r){const a=Date.now()+i,l=new Ho(t,e,a,s,r);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ko(n,t){if(de("AsyncQueue",`${t}: ${n}`),Ci(n))return new M(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t){this.comparator=t?(e,i)=>t(e,i)||x.comparator(e.key,i.key):(e,i)=>x.comparator(e.key,i.key),this.keyedMap=ni(),this.sortedSet=new ut(this.comparator)}static emptySet(t){return new dn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof dn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new dn;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.q_=new ut(x.comparator)}track(t){const e=t.doc.key,i=this.q_.get(e);i?t.type!==0&&i.type===3?this.q_=this.q_.insert(e,t):t.type===3&&i.type!==1?this.q_=this.q_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.q_=this.q_.remove(e):t.type===1&&i.type===2?this.q_=this.q_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):L():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,i)=>{t.push(i)}),t}}class Tn{constructor(t,e,i,s,r,a,l,u,h){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,i,s,r){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Tn(t,e,dn.emptySet(e),a,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ls(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==i[s].type||!e[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class ev{constructor(){this.queries=new Sn(t=>rh(t),Ls),this.onlineState="Unknown",this.z_=new Set}}async function nv(n,t){const e=U(n);let i=3;const s=t.query;let r=e.queries.get(s);r?!r.W_()&&t.G_()&&(i=2):(r=new tv,i=t.G_()?0:1);try{switch(i){case 0:r.K_=await e.onListen(s,!0);break;case 1:r.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Ko(a,`Initialization of query '${an(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,r),r.U_.push(t),t.j_(e.onlineState),r.K_&&t.H_(r.K_)&&Qo(e)}async function iv(n,t){const e=U(n),i=t.query;let s=3;const r=e.queries.get(i);if(r){const a=r.U_.indexOf(t);a>=0&&(r.U_.splice(a,1),r.U_.length===0?s=t.G_()?0:1:!r.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function sv(n,t){const e=U(n);let i=!1;for(const s of t){const r=s.query,a=e.queries.get(r);if(a){for(const l of a.U_)l.H_(s)&&(i=!0);a.K_=s}}i&&Qo(e)}function rv(n,t,e){const i=U(n),s=i.queries.get(t);if(s)for(const r of s.U_)r.onError(e);i.queries.delete(t)}function Qo(n){n.z_.forEach(t=>{t.next()})}var so,mc;(mc=so||(so={})).J_="default",mc.Cache="cache";class ov{constructor(t,e,i){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=i||{}}H_(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new Tn(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const i=e!=="Offline";return(!this.options.ra||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Tn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==so.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t){this.key=t}}class Bh{constructor(t){this.key=t}}class av{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=B(),this.mutatedKeys=B(),this.Ia=oh(t),this.Ta=new dn(this.Ia)}get Ea(){return this.la}da(t,e){const i=e?e.Aa:new _c,s=e?e.Ta:this.Ta;let r=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,_)=>{const v=s.get(f),C=Fs(this.query,_)?_:null,S=!!v&&this.mutatedKeys.has(v.key),V=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let N=!1;v&&C?v.data.isEqual(C.data)?S!==V&&(i.track({type:3,doc:C}),N=!0):this.Ra(v,C)||(i.track({type:2,doc:C}),N=!0,(u&&this.Ia(C,u)>0||h&&this.Ia(C,h)<0)&&(l=!0)):!v&&C?(i.track({type:0,doc:C}),N=!0):v&&!C&&(i.track({type:1,doc:v}),N=!0,(u||h)&&(l=!0)),N&&(C?(a=a.add(C),r=V?r.add(f):r.delete(f)):(a=a.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),r=r.delete(f.key),i.track({type:1,doc:f})}return{Ta:a,Aa:i,Xi:l,mutatedKeys:r}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,s){const r=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((f,_)=>function(C,S){const V=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return V(C)-V(S)}(f.type,_.type)||this.Ia(f.doc,_.doc)),this.Va(i),s=s!=null&&s;const l=e&&!s?this.ma():[],u=this.Pa.size===0&&this.current&&!s?1:0,h=u!==this.ha;return this.ha=u,a.length!==0||h?{snapshot:new Tn(this.query,t.Ta,r,a,t.mutatedKeys,u===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new _c,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=B(),this.Ta.forEach(i=>{this.ga(i.key)&&(this.Pa=this.Pa.add(i.key))});const e=[];return t.forEach(i=>{this.Pa.has(i)||e.push(new Bh(i))}),this.Pa.forEach(i=>{t.has(i)||e.push(new Uh(i))}),e}pa(t){this.la=t.hs,this.Pa=B();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Tn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class lv{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class cv{constructor(t){this.key=t,this.wa=!1}}class uv{constructor(t,e,i,s,r,a){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Sn(l=>rh(l),Ls),this.Da=new Map,this.Ca=new Set,this.va=new ut(x.comparator),this.Fa=new Map,this.Ma=new Bo,this.xa={},this.Oa=new Map,this.Na=En.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function hv(n,t,e=!0){const i=Gh(n);let s;const r=i.ba.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.ya()):s=await qh(i,t,e,!0),s}async function dv(n,t){const e=Gh(n);await qh(e,t,!0,!1)}async function qh(n,t,e,i){const s=await Dy(n.localStore,Xt(t)),r=s.targetId,a=e?n.sharedClientState.addLocalQueryTarget(r):"not-current";let l;return i&&(l=await fv(n,t,r,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Vh(n.remoteStore,s),l}async function fv(n,t,e,i,s){n.Ba=(_,v,C)=>async function(V,N,H,G){let Y=N.view.da(H);Y.Xi&&(Y=await hc(V.localStore,N.query,!1).then(({documents:I})=>N.view.da(I,Y)));const at=G&&G.targetChanges.get(N.targetId),ie=G&&G.targetMismatches.get(N.targetId)!=null,gt=N.view.applyChanges(Y,V.isPrimaryClient,at,ie);return yc(V,N.targetId,gt.fa),gt.snapshot}(n,_,v,C);const r=await hc(n.localStore,t,!0),a=new av(t,r.hs),l=a.da(r.documents),u=Si.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,u);yc(n,e,h.fa);const f=new lv(t,e,a);return n.ba.set(t,f),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),h.snapshot}async function pv(n,t,e){const i=U(n),s=i.ba.get(t),r=i.Da.get(s.targetId);if(r.length>1)return i.Da.set(s.targetId,r.filter(a=>!Ls(a,t))),void i.ba.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await io(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),e&&$o(i.remoteStore,s.targetId),ro(i,s.targetId)}).catch(Ai)):(ro(i,s.targetId),await io(i.localStore,s.targetId,!0))}async function _v(n,t){const e=U(n),i=e.ba.get(t),s=e.Da.get(i.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),$o(e.remoteStore,i.targetId))}async function mv(n,t,e){const i=wv(n);try{const s=await function(a,l){const u=U(a),h=dt.now(),f=l.reduce((C,S)=>C.add(S.key),B());let _,v;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let S=fe(),V=B();return u.os.getEntries(C,f).next(N=>{S=N,S.forEach((H,G)=>{G.isValidDocument()||(V=V.add(H))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,S)).next(N=>{_=N;const H=[];for(const G of l){const Y=xg(G,_.get(G.key).overlayedDocument);Y!=null&&H.push(new Pe(G.key,Y,Ju(Y.value.mapValue),Jt.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,H,l)}).next(N=>{v=N;const H=N.applyToLocalDocumentSet(_,V);return u.documentOverlayCache.saveOverlays(C,N.batchId,H)})}).then(()=>({batchId:v.batchId,changes:lh(_)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.xa[a.currentUser.toKey()];h||(h=new ut(Q)),h=h.insert(l,u),a.xa[a.currentUser.toKey()]=h}(i,s.batchId,e),await Pi(i,s.changes),await Ws(i.remoteStore)}catch(s){const r=Ko(s,"Failed to persist write");e.reject(r)}}async function jh(n,t){const e=U(n);try{const i=await by(e.localStore,t);t.targetChanges.forEach((s,r)=>{const a=e.Fa.get(r);a&&(tt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?tt(a.wa):s.removedDocuments.size>0&&(tt(a.wa),a.wa=!1))}),await Pi(e,i,t)}catch(i){await Ai(i)}}function gc(n,t,e){const i=U(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.ba.forEach((r,a)=>{const l=a.view.j_(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=U(a);u.onlineState=l;let h=!1;u.queries.forEach((f,_)=>{for(const v of _.U_)v.j_(l)&&(h=!0)}),h&&Qo(u)}(i.eventManager,t),s.length&&i.Sa.h_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function gv(n,t,e){const i=U(n);i.sharedClientState.updateQueryState(t,"rejected",e);const s=i.Fa.get(t),r=s&&s.key;if(r){let a=new ut(x.comparator);a=a.insert(r,bt.newNoDocument(r,F.min()));const l=B().add(r),u=new qs(F.min(),new Map,new ut(Q),a,l);await jh(i,u),i.va=i.va.remove(r),i.Fa.delete(t),Yo(i)}else await io(i.localStore,t,!1).then(()=>ro(i,t,e)).catch(Ai)}async function yv(n,t){const e=U(n),i=t.batch.batchId;try{const s=await Sy(e.localStore,t);Wh(e,i,null),$h(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Pi(e,s)}catch(s){await Ai(s)}}async function vv(n,t,e){const i=U(n);try{const s=await function(a,l){const u=U(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(_=>(tt(_!==null),f=_.keys(),u.mutationQueue.removeMutationBatch(h,_))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(i.localStore,t);Wh(i,t,e),$h(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Pi(i,s)}catch(s){await Ai(s)}}function $h(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Wh(n,t,e){const i=U(n);let s=i.xa[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(e?r.reject(e):r.resolve(),s=s.remove(t)),i.xa[i.currentUser.toKey()]=s}}function ro(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Da.get(t))n.ba.delete(i),e&&n.Sa.ka(i,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(i=>{n.Ma.containsKey(i)||zh(n,i)})}function zh(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&($o(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Yo(n))}function yc(n,t,e){for(const i of e)i instanceof Uh?(n.Ma.addReference(i.key,t),Ev(n,i)):i instanceof Bh?(O("SyncEngine","Document no longer in limbo: "+i.key),n.Ma.removeReference(i.key,t),n.Ma.containsKey(i.key)||zh(n,i.key)):L()}function Ev(n,t){const e=t.key,i=e.path.canonicalString();n.va.get(e)||n.Ca.has(i)||(O("SyncEngine","New document in limbo: "+e),n.Ca.add(i),Yo(n))}function Yo(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new x(ot.fromString(t)),i=n.Na.next();n.Fa.set(i,new cv(e)),n.va=n.va.insert(e,i),Vh(n.remoteStore,new ve(Xt(xo(e.path)),i,"TargetPurposeLimboResolution",No.oe))}}async function Pi(n,t,e){const i=U(n),s=[],r=[],a=[];i.ba.isEmpty()||(i.ba.forEach((l,u)=>{a.push(i.Ba(u,t,e).then(h=>{var f;if((h||e)&&i.isPrimaryClient){const _=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(h){s.push(h);const _=jo.Ki(u.targetId,h);r.push(_)}}))}),await Promise.all(a),i.Sa.h_(s),await async function(u,h){const f=U(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>b.forEach(h,v=>b.forEach(v.qi,C=>f.persistence.referenceDelegate.addReference(_,v.targetId,C)).next(()=>b.forEach(v.Qi,C=>f.persistence.referenceDelegate.removeReference(_,v.targetId,C)))))}catch(_){if(!Ci(_))throw _;O("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of h){const v=_.targetId;if(!_.fromCache){const C=f.ns.get(v),S=C.snapshotVersion,V=C.withLastLimboFreeSnapshotVersion(S);f.ns=f.ns.insert(v,V)}}}(i.localStore,r))}async function Tv(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){O("SyncEngine","User change. New user:",t.toKey());const i=await Ph(e.localStore,t);e.currentUser=t,function(r,a){r.Oa.forEach(l=>{l.forEach(u=>{u.reject(new M(P.CANCELLED,a))})}),r.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Pi(e,i.us)}}function Iv(n,t){const e=U(n),i=e.Fa.get(t);if(i&&i.wa)return B().add(i.key);{let s=B();const r=e.Da.get(t);if(!r)return s;for(const a of r){const l=e.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function Gh(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=jh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Iv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=gv.bind(null,t),t.Sa.h_=sv.bind(null,t.eventManager),t.Sa.ka=rv.bind(null,t.eventManager),t}function wv(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vv.bind(null,t),t}class vc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=js(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Ry(this.persistence,new Ay,t.initialUser,this.serializer)}createPersistence(t){return new Ty(qo.Hr,this.serializer)}createSharedClientState(t){return new Vy}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Av{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>gc(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tv.bind(null,this.syncEngine),await Zy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ev}()}createDatastore(t){const e=js(t.databaseInfo.databaseId),i=function(r){return new Ly(r)}(t.databaseInfo);return function(r,a,l,u){return new By(r,a,l,u)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,r,a,l){return new jy(i,s,r,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>gc(this.syncEngine,e,0),function(){return fc.D()?new fc:new Oy}())}createSyncEngine(t,e){return function(s,r,a,l,u,h,f){const _=new uv(s,r,a,l,u,h);return f&&(_.La=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(i){const s=U(i);O("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await bi(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class Cv{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):de("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=Qu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Ko(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function kr(n,t){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Ph(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ec(n,t){n.asyncQueue.verifyOperationInProgress();const e=await bv(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>pc(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>pc(t.remoteStore,s)),n._onlineComponents=t}function Sv(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function bv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await kr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Sv(e))throw e;mn("Error using user provided cache. Falling back to memory cache: "+e),await kr(n,new vc)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await kr(n,new vc);return n._offlineComponents}async function Hh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Ec(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Ec(n,new Av))),n._onlineComponents}function Pv(n){return Hh(n).then(t=>t.syncEngine)}async function Nv(n){const t=await Hh(n),e=t.eventManager;return e.onListen=hv.bind(null,t.syncEngine),e.onUnlisten=pv.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=dv.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=_v.bind(null,t.syncEngine),e}function Dv(n,t,e={}){const i=new Te;return n.asyncQueue.enqueueAndForget(async()=>function(r,a,l,u,h){const f=new Cv({next:v=>{a.enqueueAndForget(()=>iv(r,_));const C=v.docs.has(l);!C&&v.fromCache?h.reject(new M(P.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&v.fromCache&&u&&u.source==="server"?h.reject(new M(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),_=new ov(xo(l.path),f,{includeMetadataChanges:!0,ra:!0});return nv(r,_)}(await Nv(n),n.asyncQueue,t,e,i)),i.promise}/**
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
 */function Kh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Tc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(n,t,e){if(!e)throw new M(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Vv(n,t,e,i){if(t===!0&&i===!0)throw new M(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ic(n){if(!x.isDocumentKey(n))throw new M(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function Ge(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new M(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Xo(n);throw new M(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class wc{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new M(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new M(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Vv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kh((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jo{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new M(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wc(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new zm;switch(i.type){case"firstParty":return new Qm(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new M(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=Tc.get(e);i&&(O("ComponentProvider","Removing Datastore"),Tc.delete(e),i.terminate())}(this),Promise.resolve()}}function Ov(n,t,e,i={}){var s;const r=(n=Ge(n,Jo))._getSettings(),a=`${t}:${e}`;if(r.host!=="firestore.googleapis.com"&&r.host!==a&&mn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:a,ssl:!1})),i.mockUserToken){let l,u;if(typeof i.mockUserToken=="string")l=i.mockUserToken,u=St.MOCK_USER;else{l=up(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new M(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new St(h)}n._authCredentials=new Gm(new Ku(l,u))}}/**
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
 */class Zo{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Zo(this.firestore,t,this._query)}}class Bt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bt(this.firestore,t,this._key)}}class Ti extends Zo{constructor(t,e,i){super(t,e,xo(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bt(this.firestore,null,new x(t))}withConverter(t){return new Ti(this.firestore,t,this._path)}}function GI(n,t,...e){if(n=ue(n),arguments.length===1&&(t=Qu.newId()),kv("doc","path",t),n instanceof Jo){const i=ot.fromString(t,...e);return Ic(i),new Bt(n,null,new x(i))}{if(!(n instanceof Bt||n instanceof Ti))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ot.fromString(t,...e));return Ic(i),new Bt(n.firestore,n instanceof Ti?n.converter:null,new x(i))}}/**
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
 */class Mv{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Dh(this,"async_queue_retry"),this.hu=()=>{const e=Dr();e&&O("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Dr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Dr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Te;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Ci(t))throw t;O("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(i=>{this.au=i,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(i);throw de("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.uu=!1,i))));return this.iu=e,e}enqueueAfterDelay(t,e,i){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Ho.createAndSchedule(this,t,e,i,r=>this.Eu(r));return this._u.push(s),s}Pu(){this.au&&L()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class zs extends Jo{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new Mv}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Yh(this),this._firestoreClient.terminate()}}function HI(n,t){const e=typeof n=="object"?n:y_(),i=typeof n=="string"?n:"(default)",s=wo(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=cp("firestore");r&&Ov(s,...r)}return s}function Qh(n){return n._firestoreClient||Yh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Yh(n){var t,e,i;const s=n._freezeSettings(),r=function(l,u,h,f){return new lg(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Kh(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Rv(n._authCredentials,n._appCheckCredentials,n._queue,r),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class In{constructor(t){this._byteString=t}static fromBase64String(t){try{return new In(kt.fromBase64String(t))}catch(e){throw new M(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new In(kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Gs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ta{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Q(this._lat,t._lat)||Q(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=/^__.*__$/;class Lv{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Pe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ri(t,this.data,e,this.fieldTransforms)}}class Xh{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new Pe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Jh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class na{constructor(t,e,i,s,r,a){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.mu(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new na(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.wu(t),s}Su(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Es(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Jh(this.fu)&&xv.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Fv{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||js(t)}Fu(t,e,i,s=!1){return new na({fu:t,methodName:e,vu:i,path:Et.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zh(n){const t=n._freezeSettings(),e=js(n._databaseId);return new Fv(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Uv(n,t,e,i,s,r={}){const a=n.Fu(r.merge||r.mergeFields?2:0,t,e,s);ia("Data must be an object, but it was:",a,i);const l=td(i,a);let u,h;if(r.merge)u=new Ut(a.fieldMask),h=a.fieldTransforms;else if(r.mergeFields){const f=[];for(const _ of r.mergeFields){const v=oo(t,_,e);if(!a.contains(v))throw new M(P.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);nd(f,v)||f.push(v)}u=new Ut(f),h=a.fieldTransforms.filter(_=>u.covers(_.field))}else u=null,h=a.fieldTransforms;return new Lv(new Mt(l),u,h)}class Hs extends ta{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Hs}}function Bv(n,t,e,i){const s=n.Fu(1,t,e);ia("Data must be an object, but it was:",s,i);const r=[],a=Mt.empty();Xe(i,(u,h)=>{const f=sa(t,u,e);h=ue(h);const _=s.Su(f);if(h instanceof Hs)r.push(f);else{const v=Ks(h,_);v!=null&&(r.push(f),a.set(f,v))}});const l=new Ut(r);return new Xh(a,l,s.fieldTransforms)}function qv(n,t,e,i,s,r){const a=n.Fu(1,t,e),l=[oo(t,i,e)],u=[s];if(r.length%2!=0)throw new M(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<r.length;v+=2)l.push(oo(t,r[v])),u.push(r[v+1]);const h=[],f=Mt.empty();for(let v=l.length-1;v>=0;--v)if(!nd(h,l[v])){const C=l[v];let S=u[v];S=ue(S);const V=a.Su(C);if(S instanceof Hs)h.push(C);else{const N=Ks(S,V);N!=null&&(h.push(C),f.set(C,N))}}const _=new Ut(h);return new Xh(f,_,a.fieldTransforms)}function Ks(n,t){if(ed(n=ue(n)))return ia("Unsupported field value:",t,n),td(n,t);if(n instanceof ta)return function(i,s){if(!Jh(s.fu))throw s.Du(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(i,s){const r=[];let a=0;for(const l of i){let u=Ks(l,s.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),r.push(u),a++}return{arrayValue:{values:r}}}(n,t)}return function(i,s){if((i=ue(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Ng(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=dt.fromDate(i);return{timestampValue:ys(s.serializer,r)}}if(i instanceof dt){const r=new dt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ys(s.serializer,r)}}if(i instanceof ea)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof In)return{bytesValue:Ih(s.serializer,i._byteString)};if(i instanceof Bt){const r=s.databaseId,a=i.firestore._databaseId;if(!a.isEqual(r))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Uo(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Du(`Unsupported field value: ${Xo(i)}`)}(n,t)}function td(n,t){const e={};return Yu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xe(n,(i,s)=>{const r=Ks(s,t.pu(i));r!=null&&(e[i]=r)}),{mapValue:{fields:e}}}function ed(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof ea||n instanceof In||n instanceof Bt||n instanceof ta)}function ia(n,t,e){if(!ed(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=Xo(e);throw i==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+i)}}function oo(n,t,e){if((t=ue(t))instanceof Gs)return t._internalPath;if(typeof t=="string")return sa(n,t);throw Es("Field path arguments must be of type string or ",n,!1,void 0,e)}const jv=new RegExp("[~\\*/\\[\\]]");function sa(n,t,e){if(t.search(jv)>=0)throw Es(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Gs(...t.split("."))._internalPath}catch{throw Es(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Es(n,t,e,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(r||a)&&(u+=" (found",r&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new M(P.INVALID_ARGUMENT,l+n+u)}function nd(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class id{constructor(t,e,i,s,r){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $v(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(sd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class $v extends id{data(){return super.data()}}function sd(n,t){return typeof t=="string"?sa(n,t):t instanceof Gs?t._internalPath:t._delegate._internalPath}class Wv{convertValue(t,e="none"){switch(ze(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ct(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(We(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return Xe(t,(s,r)=>{i[s]=this.convertValue(r,e)}),i}convertGeoPoint(t){return new ea(ct(t.latitude),ct(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=ko(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(mi(t));default:return null}}convertTimestamp(t){const e=Ce(t);return new dt(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=ot.fromString(t);tt(bh(i));const s=new gi(i.get(1),i.get(3)),r=new x(i.popFirst(5));return s.isEqual(e)||de(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
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
 */function zv(n,t,e){let i;return i=n?n.toFirestore(t):t,i}/**
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
 */class Gv{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class rd extends id{constructor(t,e,i,s,r,a){super(t,e,i,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Hv(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(sd("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class Hv extends rd{data(t={}){return super.data(t)}}/**
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
 */function KI(n){n=Ge(n,Bt);const t=Ge(n.firestore,zs);return Dv(Qh(t),n._key).then(e=>Qv(t,n,e))}class Kv extends Wv{constructor(t){super(),this.firestore=t}convertBytes(t){return new In(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Bt(this.firestore,null,e)}}function QI(n,t,e){n=Ge(n,Bt);const i=Ge(n.firestore,zs),s=zv(n.converter,t);return od(i,[Uv(Zh(i),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Jt.none())])}function YI(n,t,e,...i){n=Ge(n,Bt);const s=Ge(n.firestore,zs),r=Zh(s);let a;return a=typeof(t=ue(t))=="string"||t instanceof Gs?qv(r,"updateDoc",n._key,t,e,i):Bv(r,"updateDoc",n._key,t),od(s,[a.toMutation(n._key,Jt.exists(!0))])}function od(n,t){return function(i,s){const r=new Te;return i.asyncQueue.enqueueAndForget(async()=>mv(await Pv(i),s,r)),r.promise}(Qh(n),t)}function Qv(n,t,e){const i=e.docs.get(t._key),s=new Kv(n);return new rd(n,s,t._key,i,new Gv(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Rn=s})(mu),he(new te("firestore",(i,{instanceIdentifier:s,options:r})=>{const a=i.getProvider("app").getImmediate(),l=new zs(new Hm(i.getProvider("auth-internal")),new Xm(i.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new M(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gi(h.options.projectId,f)}(a,s),a);return r=Object.assign({useFetchStreams:e},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),Kt(zl,"4.6.4",t),Kt(zl,"4.6.4","esm2017")})();var Ac={};const Cc="@firebase/database",Rc="1.0.6";/**
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
 */let ad="";function Yv(n){ad=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){e==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),vt(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return e==null?null:fi(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){e==null?delete this.cache_[t]:this.cache_[t]=e}get(t){return pe(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const t=window[n];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Xv(t)}}catch{}return new Jv},Fe=ld("localStorage"),Zv=ld("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new ks("@firebase/database"),tE=function(){let n=1;return function(){return n++}}(),cd=function(n){const t=Rp(n),e=new Ip;e.update(t);const i=e.digest();return Eo.encodeByteArray(i)},Ni=function(...n){let t="";for(let e=0;e<n.length;e++){const i=n[e];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=Ni.apply(null,i):typeof i=="object"?t+=vt(i):t+=i,t+=" "}return t};let ci=null,Sc=!0;const eE=function(n,t){k(!t,"Can't turn on custom loggers persistently."),fn.logLevel=$.VERBOSE,ci=fn.log.bind(fn)},Pt=function(...n){if(Sc===!0&&(Sc=!1,ci===null&&Zv.get("logging_enabled")===!0&&eE()),ci){const t=Ni.apply(null,n);ci(t)}},Di=function(n){return function(...t){Pt(n,...t)}},ao=function(...n){const t="FIREBASE INTERNAL ERROR: "+Ni(...n);fn.error(t)},He=function(...n){const t=`FIREBASE FATAL ERROR: ${Ni(...n)}`;throw fn.error(t),new Error(t)},qt=function(...n){const t="FIREBASE WARNING: "+Ni(...n);fn.warn(t)},nE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ud=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},iE=function(n){if(document.readyState==="complete")n();else{let t=!1;const e=function(){if(!document.body){setTimeout(e,Math.floor(10));return}t||(t=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&e()}),window.attachEvent("onload",e))}},wn="[MIN_NAME]",Ke="[MAX_NAME]",Pn=function(n,t){if(n===t)return 0;if(n===wn||t===Ke)return-1;if(t===wn||n===Ke)return 1;{const e=bc(n),i=bc(t);return e!==null?i!==null?e-i===0?n.length-t.length:e-i:-1:i!==null?1:n<t?-1:1}},sE=function(n,t){return n===t?0:n<t?-1:1},Xn=function(n,t){if(t&&n in t)return t[n];throw new Error("Missing required key ("+n+") in object: "+vt(t))},ra=function(n){if(typeof n!="object"||n===null)return vt(n);const t=[];for(const i in n)t.push(i);t.sort();let e="{";for(let i=0;i<t.length;i++)i!==0&&(e+=","),e+=vt(t[i]),e+=":",e+=ra(n[t[i]]);return e+="}",e},hd=function(n,t){const e=n.length;if(e<=t)return[n];const i=[];for(let s=0;s<e;s+=t)s+t>e?i.push(n.substring(s,e)):i.push(n.substring(s,s+t));return i};function Wt(n,t){for(const e in n)n.hasOwnProperty(e)&&t(e,n[e])}const dd=function(n){k(!ud(n),"Invalid JSON number");const t=11,e=52,i=(1<<t-1)-1;let s,r,a,l,u;n===0?(r=0,a=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,a=Math.round(n*Math.pow(2,e-l)-Math.pow(2,e))):(r=0,a=Math.round(n/Math.pow(2,1-i-e))));const h=[];for(u=e;u;u-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(u=t;u;u-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const f=h.join("");let _="";for(u=0;u<64;u+=8){let v=parseInt(f.substr(u,8),2).toString(16);v.length===1&&(v="0"+v),_=_+v}return _.toLowerCase()},rE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},oE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},aE=new RegExp("^-?(0*)\\d{1,10}$"),lE=-2147483648,cE=2147483647,bc=function(n){if(aE.test(n)){const t=Number(n);if(t>=lE&&t<=cE)return t}return null},ki=function(n){try{n()}catch(t){setTimeout(()=>{const e=t.stack||"";throw qt("Exception was thrown by user callback.",e),t},Math.floor(0))}},uE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ui=function(n,t){const e=setTimeout(n,t);return typeof e=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(e):typeof e=="object"&&e.unref&&e.unref(),e};/**
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
 */class hE{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=e==null?void 0:e.getImmediate({optional:!0}),this.appCheck||e==null||e.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((e,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(e,i):e(null)},0)})}addTokenChangeListener(t){var e;(e=this.appCheckProvider)===null||e===void 0||e.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(t,e,i){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(e=>e&&e.code==="auth/token-not-initialized"?(Pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((e,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(e,i):e(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(e=>e.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(e=>e.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qt(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="5",fd="v",pd="s",_d="r",md="f",gd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yd="ls",vd="p",lo="ac",Ed="websocket",Td="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(t,e,i,s,r=!1,a="",l=!1,u=!1){this.secure=e,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fe.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Fe.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}}function pE(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Id(n,t,e){k(typeof t=="string","typeof type must == string"),k(typeof e=="object","typeof params must == object");let i;if(t===Ed)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(t===Td)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);pE(n)&&(e.ns=n.namespace);const s=[];return Wt(e,(r,a)=>{s.push(r+"="+a)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.counters_={}}incrementCounter(t,e=1){pe(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return np(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr={},Or={};function aa(n){const t=n.toString();return Vr[t]||(Vr[t]=new _E),Vr[t]}function mE(n,t){const e=n.toString();return Or[e]||(Or[e]=t()),Or[e]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){for(this.pendingResponses[t]=e;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ki(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="start",yE="close",vE="pLPCommand",EE="pRTLPCB",wd="id",Ad="pw",Cd="ser",TE="cb",IE="seg",wE="ts",AE="d",CE="dframe",Rd=1870,Sd=30,RE=Rd-Sd,SE=25e3,bE=3e4;class un{constructor(t,e,i,s,r,a,l){this.connId=t,this.repoInfo=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Di(t),this.stats_=aa(e),this.urlFn=u=>(this.appCheckToken&&(u[lo]=this.appCheckToken),Id(e,Td,u))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new gE(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(bE)),iE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new la((...r)=>{const[a,l,u,h,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===Pc)this.id=l,this.password=u;else if(a===yE)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...r)=>{const[a,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Pc]="t",i[Cd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[TE]=this.scriptTagHolder.uniqueCallbackIdentifier),i[fd]=oa,this.transportSessionId&&(i[pd]=this.transportSessionId),this.lastSessionId&&(i[yd]=this.lastSessionId),this.applicationId&&(i[vd]=this.applicationId),this.appCheckToken&&(i[lo]=this.appCheckToken),typeof location<"u"&&location.hostname&&gd.test(location.hostname)&&(i[_d]=md);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){un.forceAllow_=!0}static forceDisallow(){un.forceDisallow_=!0}static isAvailable(){return un.forceAllow_?!0:!un.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rE()&&!oE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=vt(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const i=lu(e),s=hd(i,RE);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(t,e){this.myDisconnFrame=document.createElement("iframe");const i={};i[CE]="t",i[wd]=t,i[Ad]=e,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=vt(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class la{constructor(t,e,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tE(),window[vE+this.uniqueCallbackIdentifier]=t,window[EE+this.uniqueCallbackIdentifier]=e,this.myIFrame=la.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){Pt("frame writing exception"),l.stack&&Pt(l.stack),Pt(l)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Pt("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[wd]=this.myID,t[Ad]=this.myPW,t[Cd]=this.currentSerial;let e=this.urlFn(t),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sd+i.length<=Rd;){const a=this.pendingSegs.shift();i=i+"&"+IE+s+"="+a.seg+"&"+wE+s+"="+a.ts+"&"+AE+s+"="+a.d,s++}return e=e+i,this.addLongPollTag_(e,this.currentSerial),!0}else return!1}enqueueSegment(t,e,i){this.pendingSegs.push({seg:t,ts:e,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const i=()=>{this.outstandingRequests.delete(e),this.newRequest_()},s=setTimeout(i,Math.floor(SE)),r=()=>{clearTimeout(s),i()};this.addTag(t,r)}addTag(t,e){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),e())},i.onerror=()=>{Pt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=16384,NE=45e3;let Ts=null;typeof MozWebSocket<"u"?Ts=MozWebSocket:typeof WebSocket<"u"&&(Ts=WebSocket);class Gt{constructor(t,e,i,s,r,a,l){this.connId=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Di(this.connId),this.stats_=aa(e),this.connURL=Gt.connectionURL_(e,a,l,s,i),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,i,s,r){const a={};return a[fd]=oa,typeof location<"u"&&location.hostname&&gd.test(location.hostname)&&(a[_d]=md),e&&(a[pd]=e),i&&(a[yd]=i),s&&(a[lo]=s),r&&(a[vd]=r),Id(t,Ed,a)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fe.set("previous_websocket_failure",!0);try{let i;du(),this.mySock=new Ts(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(e);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Ts!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Fe.isInMemoryStorage||Fe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fe.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const i=fi(e);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(k(this.frames===null,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const e=t.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(e);else{const i=this.extractFrameCount_(e);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const e=vt(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const i=hd(e,PE);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(NE))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[un,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=Gt&&Gt.isAvailable();let i=e&&!Gt.previouslyFailed();if(t.webSocketOnly&&(e||qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Gt];else{const s=this.transports_=[];for(const r of Ii.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Ii.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ii.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=6e4,kE=5e3,VE=10*1024,OE=100*1024,Mr="t",Nc="d",ME="s",Dc="r",xE="e",kc="o",Vc="a",Oc="n",Mc="p",LE="h";class FE{constructor(t,e,i,s,r,a,l,u,h,f){this.id=t,this.repoInfo_=e,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Di("c:"+this.id+":"),this.transportManager_=new Ii(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(e,i)},Math.floor(0));const s=t.healthyTimeout||0;s>0&&(this.healthyTimeout_=ui(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>VE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Mr in t){const e=t[Mr];e===Vc?this.upgradeIfSecondaryHealthy_():e===Dc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):e===kc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=Xn("t",t),i=Xn("d",t);if(e==="c")this.onSecondaryControl_(i);else if(e==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+e)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Mc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Oc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=Xn("t",t),i=Xn("d",t);e==="c"?this.onControl_(i):e==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=Xn(Mr,t);if(Nc in t){const i=t[Nc];if(e===LE){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(e===Oc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===ME?this.onConnectionShutdown_(i):e===Dc?this.onReset_(i):e===xE?ao("Server Error: "+i):e===kc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ao("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,i=t.v,s=t.h;this.sessionId=t.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),oa!==i&&qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,i),ui(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DE))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ui(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Mc,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{put(t,e,i,s){}merge(t,e,i,s){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,i){}onDisconnectMerge(t,e,i){}onDisconnectCancel(t,e){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t){this.allowedEvents_=t,this.listeners_={},k(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,e)}}on(t,e,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:i});const s=this.getInitialEvent(t);s&&e.apply(i,s)}off(t,e,i){this.validateEventType_(t);const s=this.listeners_[t]||[];for(let r=0;r<s.length;r++)if(s[r].callback===e&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(t){k(this.allowedEvents_.find(e=>e===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Pd{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Is}getInitialEvent(t){return k(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=32,Lc=768;class st{constructor(t,e){if(e===void 0){this.pieces_=t.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)this.pieces_[e]!==""&&(t+="/"+this.pieces_[e]);return t||"/"}}function J(){return new st("")}function W(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Se(n){return n.pieces_.length-n.pieceNum_}function it(n){let t=n.pieceNum_;return t<n.pieces_.length&&t++,new st(n.pieces_,t)}function Nd(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function UE(n){let t="";for(let e=n.pieceNum_;e<n.pieces_.length;e++)n.pieces_[e]!==""&&(t+="/"+encodeURIComponent(String(n.pieces_[e])));return t||"/"}function Dd(n,t=0){return n.pieces_.slice(n.pieceNum_+t)}function kd(n){if(n.pieceNum_>=n.pieces_.length)return null;const t=[];for(let e=n.pieceNum_;e<n.pieces_.length-1;e++)t.push(n.pieces_[e]);return new st(t,0)}function mt(n,t){const e=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)e.push(n.pieces_[i]);if(t instanceof st)for(let i=t.pieceNum_;i<t.pieces_.length;i++)e.push(t.pieces_[i]);else{const i=t.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&e.push(i[s])}return new st(e,0)}function q(n){return n.pieceNum_>=n.pieces_.length}function jt(n,t){const e=W(n),i=W(t);if(e===null)return t;if(e===i)return jt(it(n),it(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+n+")")}function Vd(n,t){if(Se(n)!==Se(t))return!1;for(let e=n.pieceNum_,i=t.pieceNum_;e<=n.pieces_.length;e++,i++)if(n.pieces_[e]!==t.pieces_[i])return!1;return!0}function Ht(n,t){let e=n.pieceNum_,i=t.pieceNum_;if(Se(n)>Se(t))return!1;for(;e<n.pieces_.length;){if(n.pieces_[e]!==t.pieces_[i])return!1;++e,++i}return!0}class BE{constructor(t,e){this.errorPrefix_=e,this.parts_=Dd(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ds(this.parts_[i]);Od(this)}}function qE(n,t){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(t),n.byteLength_+=Ds(t),Od(n)}function jE(n){const t=n.parts_.pop();n.byteLength_-=Ds(t),n.parts_.length>0&&(n.byteLength_-=1)}function Od(n){if(n.byteLength_>Lc)throw new Error(n.errorPrefix_+"has a key path longer than "+Lc+" bytes ("+n.byteLength_+").");if(n.parts_.length>xc)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xc+") or object contains a cycle "+Me(n))}function Me(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends Pd{constructor(){super(["visible"]);let t,e;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(e="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(e="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(e="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ca}getInitialEvent(t){return k(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=1e3,$E=60*5*1e3,Fc=30*1e3,WE=1.3,zE=3e4,GE="server_kill",Uc=3;class ce extends bd{constructor(t,e,i,s,r,a,l,u){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=ce.nextPersistentConnectionId_++,this.log_=Di("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Jn,this.maxReconnectDelay_=$E,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!du())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ca.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Is.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,i){const s=++this.requestNumber_,r={r:s,a:t,b:e};this.log_(vt(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(t){this.initConnection_();const e=new To,s={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?e.resolve(l):e.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),e.promise}listen(t,e,i,s){this.initConnection_();const r=t._queryIdentifier,a=t._path.toString();this.log_("Listen called for "+a+" "+r),this.listens.has(a)||this.listens.set(a,new Map),k(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(a).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:e,query:t,tag:i};this.listens.get(a).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(i)})}sendListen_(t){const e=t.query,i=e._path.toString(),s=e._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},a="q";t.tag&&(r.q=e._queryObject,r.t=t.tag),r.h=t.hashFn(),this.sendRequest(a,r,l=>{const u=l.d,h=l.s;ce.warnOnListenWarnings_(u,e),(this.listens.get(i)&&this.listens.get(i).get(s))===t&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(i,s),t.onComplete&&t.onComplete(h,u))})}static warnOnListenWarnings_(t,e){if(t&&typeof t=="object"&&pe(t,"w")){const i=_n(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+e._queryParams.getIndex().toString()+'"',r=e._path.toString();qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||Ep(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Fc)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=vp(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(e,i,s=>{const r=s.s,a=s.d||"error";this.authToken_===t&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const e=t.s,i=t.d||"error";e==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,i)})}unlisten(t,e){const i=t._path.toString(),s=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),k(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,t._queryObject,e)}sendUnlisten_(t,e,i,s){this.log_("Unlisten on "+t+" for "+e);const r={p:t},a="n";s&&(r.q=i,r.t=s),this.sendRequest(a,r)}onDisconnectPut(t,e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:i})}onDisconnectMerge(t,e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:i})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,i,s){const r={p:e,d:i};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(t,e,i,s){this.putInternal("p",t,e,i,s)}merge(t,e,i,s){this.putInternal("m",t,e,i,s)}putInternal(t,e,i,s,r){this.initConnection_();const a={p:e,d:i};r!==void 0&&(a.h=r),this.outstandingPuts_.push({action:t,request:a,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,s=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,i,r=>{this.log_(e+" response",r),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+vt(t));const e=t.r,i=this.requestCBHash_[e];i&&(delete this.requestCBHash_[e],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),t==="d"?this.onDataUpdate_(e.p,e.d,!1,e.t):t==="m"?this.onDataUpdate_(e.p,e.d,!0,e.t):t==="c"?this.onListenRevoked_(e.p,e.q):t==="ac"?this.onAuthRevoked_(e.s,e.d):t==="apc"?this.onAppCheckRevoked_(e.s,e.d):t==="sd"?this.onSecurityDebugPacket_(e):ao("Unrecognized action received from server: "+vt(t)+`
Are you using the latest client?`)}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Jn,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Jn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zE&&(this.reconnectDelay_=Jn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*WE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ce.nextConnectionId_++,r=this.lastSessionId;let a=!1,l=null;const u=function(){l?l.close():(a=!0,i())},h=function(_){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(_)};this.realtime_={close:u,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,v]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);a?Pt("getToken() completed but was canceled"):(Pt("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=v&&v.token,l=new FE(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,i,C=>{qt(C+" ("+this.repoInfo_.toString()+")"),this.interrupt(GE)},r))}catch(_){this.log_("Failed to get token: "+_),a||(this.repoInfo_.nodeAdmin&&qt(_),u())}}}interrupt(t){Pt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Pt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Sl(this.interruptReasons_)&&(this.reconnectDelay_=Jn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let i;e?i=e.map(r=>ra(r)).join("$"):i="default";const s=this.removeListen_(t,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(t,e){const i=new st(t).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(e),r.delete(e),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(t,e){Pt("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Uc&&(this.reconnectDelay_=Fc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){Pt("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Uc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";t["sdk."+e+"."+ad.replace(/\./g,"-")]=1,hu()?t["framework.cordova"]=1:fp()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Is.getInstance().currentlyOnline();return Sl(this.interruptReasons_)&&t}}ce.nextPersistentConnectionId_=0;ce.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new z(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const i=new z(wn,t),s=new z(wn,e);return this.compare(i,s)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is;class Md extends Qs{static get __EMPTY_NODE(){return is}static set __EMPTY_NODE(t){is=t}compare(t,e){return Pn(t.name,e.name)}isDefinedOn(t){throw Cn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return z.MIN}maxPost(){return new z(Ke,is)}makePost(t,e){return k(typeof t=="string","KeyIndex indexValue must always be a string."),new z(t,is)}toString(){return".key"}}const pn=new Md;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,e,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let a=1;for(;!t.isEmpty();)if(t=t,a=e?i(t.key,e):1,s&&(a*=-1),a<0)this.isReverse_?t=t.left:t=t.right;else if(a===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),e;if(this.resultGenerator_?e=this.resultGenerator_(t.key,t.value):e={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class _t{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=i??_t.RED,this.left=s??xt.EMPTY_NODE,this.right=r??xt.EMPTY_NODE}copy(t,e,i,s,r){return new _t(t??this.key,e??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const r=i(t,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(t,e,i),null):r===0?s=s.copy(null,e,null,null,null):s=s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return xt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let i,s;if(i=this,e(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),e(t,i.key)===0){if(i.right.isEmpty())return xt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}_t.RED=!0;_t.BLACK=!1;class HE{copy(t,e,i,s,r){return this}insert(t,e,i){return new _t(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xt{constructor(t,e=xt.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new xt(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,_t.BLACK,null,null))}remove(t){return new xt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,_t.BLACK,null,null))}get(t){let e,i=this.root_;for(;!i.isEmpty();){if(e=this.comparator_(t,i.key),e===0)return i.value;e<0?i=i.left:e>0&&(i=i.right)}return null}getPredecessorKey(t){let e,i=this.root_,s=null;for(;!i.isEmpty();)if(e=this.comparator_(t,i.key),e===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else e<0?i=i.left:e>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new ss(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new ss(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new ss(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new ss(this.root_,null,this.comparator_,!0,t)}}xt.EMPTY_NODE=new HE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(n,t){return Pn(n.name,t.name)}function ua(n,t){return Pn(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co;function QE(n){co=n}const xd=function(n){return typeof n=="number"?"number:"+dd(n):"string:"+n},Ld=function(n){if(n.isLeafNode()){const t=n.val();k(typeof t=="string"||typeof t=="number"||typeof t=="object"&&pe(t,".sv"),"Priority must be a string or number.")}else k(n===co||n.isEmpty(),"priority of unexpected type.");k(n===co||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc;class ft{constructor(t,e=ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ld(this.priorityNode_)}static set __childrenNodeConstructor(t){Bc=t}static get __childrenNodeConstructor(){return Bc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new ft(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return q(t)?this:W(t)===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return t===".priority"?this.updatePriority(e):e.isEmpty()&&t!==".priority"?this:ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const i=W(t);return i===null?e:e.isEmpty()&&i!==".priority"?this:(k(i!==".priority"||Se(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(it(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+xd(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",e==="number"?t+=dd(this.value_):t+=this.value_,this.lazyHash_=cd(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===ft.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof ft.__childrenNodeConstructor?-1:(k(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,i=typeof this.value_,s=ft.VALUE_TYPE_ORDER.indexOf(e),r=ft.VALUE_TYPE_ORDER.indexOf(i);return k(s>=0,"Unknown leaf type: "+e),k(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}else return!1}}ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd,Ud;function YE(n){Fd=n}function XE(n){Ud=n}class JE extends Qs{compare(t,e){const i=t.node.getPriority(),s=e.node.getPriority(),r=i.compareTo(s);return r===0?Pn(t.name,e.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Ke,new ft("[PRIORITY-POST]",Ud))}makePost(t,e){const i=Fd(t);return new z(e,new ft("[PRIORITY-POST]",i))}toString(){return".priority"}}const Dt=new JE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=Math.log(2);class tT{constructor(t){const e=r=>parseInt(Math.log(r)/ZE,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const s=i(this.count);this.bits_=t+1&s}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const ws=function(n,t,e,i){n.sort(t);const s=function(u,h){const f=h-u;let _,v;if(f===0)return null;if(f===1)return _=n[u],v=e?e(_):_,new _t(v,_.node,_t.BLACK,null,null);{const C=parseInt(f/2,10)+u,S=s(u,C),V=s(C+1,h);return _=n[C],v=e?e(_):_,new _t(v,_.node,_t.BLACK,S,V)}},r=function(u){let h=null,f=null,_=n.length;const v=function(S,V){const N=_-S,H=_;_-=S;const G=s(N+1,H),Y=n[N],at=e?e(Y):Y;C(new _t(at,Y.node,V,null,G))},C=function(S){h?(h.left=S,h=S):(f=S,h=S)};for(let S=0;S<u.count;++S){const V=u.nextBitIsOne(),N=Math.pow(2,u.count-(S+1));V?v(N,_t.BLACK):(v(N,_t.BLACK),v(N,_t.RED))}return f},a=new tT(n.length),l=r(a);return new xt(i||t,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr;const on={};class le{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return k(on&&Dt,"ChildrenNode.ts has not been loaded"),xr=xr||new le({".priority":on},{".priority":Dt}),xr}get(t){const e=_n(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof xt?e:null}hasIndex(t){return pe(this.indexSet_,t.toString())}addIndex(t,e){k(t!==pn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=e.getIterator(z.Wrap);let a=r.getNext();for(;a;)s=s||t.isDefinedOn(a.node),i.push(a),a=r.getNext();let l;s?l=ws(i,t.getCompare()):l=on;const u=t.toString(),h=Object.assign({},this.indexSet_);h[u]=t;const f=Object.assign({},this.indexes_);return f[u]=l,new le(f,h)}addToIndexes(t,e){const i=us(this.indexes_,(s,r)=>{const a=_n(this.indexSet_,r);if(k(a,"Missing index implementation for "+r),s===on)if(a.isDefinedOn(t.node)){const l=[],u=e.getIterator(z.Wrap);let h=u.getNext();for(;h;)h.name!==t.name&&l.push(h),h=u.getNext();return l.push(t),ws(l,a.getCompare())}else return on;else{const l=e.get(t.name);let u=s;return l&&(u=u.remove(new z(t.name,l))),u.insert(t,t.node)}});return new le(i,this.indexSet_)}removeFromIndexes(t,e){const i=us(this.indexes_,s=>{if(s===on)return s;{const r=e.get(t.name);return r?s.remove(new z(t.name,r)):s}});return new le(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn;class X{constructor(t,e,i){this.children_=t,this.priorityNode_=e,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ld(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zn||(Zn=new X(new xt(ua),null,le.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zn}updatePriority(t){return this.children_.isEmpty()?this:new X(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const e=this.children_.get(t);return e===null?Zn:e}}getChild(t){const e=W(t);return e===null?this:this.getImmediateChild(e).getChild(it(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,e){if(k(e,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(e);{const i=new z(t,e);let s,r;e.isEmpty()?(s=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(t,e),r=this.indexMap_.addToIndexes(i,this.children_));const a=s.isEmpty()?Zn:this.priorityNode_;return new X(s,a,r)}}updateChild(t,e){const i=W(t);if(i===null)return e;{k(W(t)!==".priority"||Se(t)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(it(t),e);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let i=0,s=0,r=!0;if(this.forEachChild(Dt,(a,l)=>{e[a]=l.val(t),i++,r&&X.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):r=!1}),!t&&r&&s<2*i){const a=[];for(const l in e)a[l]=e[l];return a}else return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+xd(this.getPriority().val())+":"),this.forEachChild(Dt,(e,i)=>{const s=i.hash();s!==""&&(t+=":"+e+":"+s)}),this.lazyHash_=t===""?"":cd(t)}return this.lazyHash_}getPredecessorChildName(t,e,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new z(t,e));return r?r.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const i=e.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new z(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const i=e.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new z(e,this.children_.get(e)):null}forEachChild(t,e){const i=this.resolveIndex_(t);return i?i.inorderTraversal(s=>e(s.name,s.node)):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const i=this.resolveIndex_(e);if(i)return i.getIteratorFrom(t,s=>s);{const s=this.children_.getIteratorFrom(t.name,z.Wrap);let r=s.peek();for(;r!=null&&e.compare(r,t)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const i=this.resolveIndex_(e);if(i)return i.getReverseIteratorFrom(t,s=>s);{const s=this.children_.getReverseIteratorFrom(t.name,z.Wrap);let r=s.peek();for(;r!=null&&e.compare(r,t)>0;)s.getNext(),r=s.peek();return s}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Vi?-1:0}withIndex(t){if(t===pn||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new X(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===pn||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority()))if(this.children_.count()===e.children_.count()){const i=this.getIterator(Dt),s=e.getIterator(Dt);let r=i.getNext(),a=s.getNext();for(;r&&a;){if(r.name!==a.name||!r.node.equals(a.node))return!1;r=i.getNext(),a=s.getNext()}return r===null&&a===null}else return!1;else return!1}}resolveIndex_(t){return t===pn?null:this.indexMap_.get(t.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eT extends X{constructor(){super(new xt(ua),X.EMPTY_NODE,le.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return X.EMPTY_NODE}isEmpty(){return!1}}const Vi=new eT;Object.defineProperties(z,{MIN:{value:new z(wn,X.EMPTY_NODE)},MAX:{value:new z(Ke,Vi)}});Md.__EMPTY_NODE=X.EMPTY_NODE;ft.__childrenNodeConstructor=X;QE(Vi);XE(Vi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=!0;function Nt(n,t=null){if(n===null)return X.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(t=n[".priority"]),k(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const e=n;return new ft(e,Nt(t))}if(!(n instanceof Array)&&nT){const e=[];let i=!1;if(Wt(n,(a,l)=>{if(a.substring(0,1)!=="."){const u=Nt(l);u.isEmpty()||(i=i||!u.getPriority().isEmpty(),e.push(new z(a,u)))}}),e.length===0)return X.EMPTY_NODE;const r=ws(e,KE,a=>a.name,ua);if(i){const a=ws(e,Dt.getCompare());return new X(r,Nt(t),new le({".priority":a},{".priority":Dt}))}else return new X(r,Nt(t),le.Default)}else{let e=X.EMPTY_NODE;return Wt(n,(i,s)=>{if(pe(n,i)&&i.substring(0,1)!=="."){const r=Nt(s);(r.isLeafNode()||!r.isEmpty())&&(e=e.updateImmediateChild(i,r))}}),e.updatePriority(Nt(t))}}YE(Nt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT extends Qs{constructor(t){super(),this.indexPath_=t,k(!q(t)&&W(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const i=this.extractChild(t.node),s=this.extractChild(e.node),r=i.compareTo(s);return r===0?Pn(t.name,e.name):r}makePost(t,e){const i=Nt(t),s=X.EMPTY_NODE.updateChild(this.indexPath_,i);return new z(e,s)}maxPost(){const t=X.EMPTY_NODE.updateChild(this.indexPath_,Vi);return new z(Ke,t)}toString(){return Dd(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT extends Qs{compare(t,e){const i=t.node.compareTo(e.node);return i===0?Pn(t.name,e.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(t,e){const i=Nt(t);return new z(e,i)}toString(){return".value"}}const rT=new sT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(n){return{type:"value",snapshotNode:n}}function aT(n,t){return{type:"child_added",snapshotNode:t,childName:n}}function lT(n,t){return{type:"child_removed",snapshotNode:t,childName:n}}function qc(n,t,e){return{type:"child_changed",snapshotNode:t,childName:n,oldSnap:e}}function cT(n,t){return{type:"child_moved",snapshotNode:t,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Dt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wn}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ke}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Dt}copy(){const t=new ha;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function jc(n){const t={};if(n.isDefault())return t;let e;if(n.index_===Dt?e="$priority":n.index_===rT?e="$value":n.index_===pn?e="$key":(k(n.index_ instanceof iT,"Unrecognized index type!"),e=n.index_.toString()),t.orderBy=vt(e),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";t[i]=vt(n.indexStartValue_),n.startNameSet_&&(t[i]+=","+vt(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";t[i]=vt(n.indexEndValue_),n.endNameSet_&&(t[i]+=","+vt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?t.limitToFirst=n.limit_:t.limitToLast=n.limit_),t}function $c(n){const t={};if(n.startSet_&&(t.sp=n.indexStartValue_,n.startNameSet_&&(t.sn=n.indexStartName_),t.sin=!n.startAfterSet_),n.endSet_&&(t.ep=n.indexEndValue_,n.endNameSet_&&(t.en=n.indexEndName_),t.ein=!n.endBeforeSet_),n.limitSet_){t.l=n.limit_;let e=n.viewFrom_;e===""&&(n.isViewFromLeft()?e="l":e="r"),t.vf=e}return n.index_!==Dt&&(t.i=n.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends bd{constructor(t,e,i,s){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Di("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return e!==void 0?"tag$"+e:(k(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,i,s){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const a=As.getListenId_(t,i),l={};this.listens_[a]=l;const u=jc(t._queryParams);this.restRequest_(r+".json",u,(h,f)=>{let _=f;if(h===404&&(_=null,h=null),h===null&&this.onDataUpdate_(r,_,!1,i),_n(this.listens_,a)===l){let v;h?h===401?v="permission_denied":v="rest_error:"+h:v="ok",s(v,null)}})}unlisten(t,e){const i=As.getListenId_(t,e);delete this.listens_[i]}get(t){const e=jc(t._queryParams),i=t._path.toString(),s=new To;return this.restRequest_(i+".json",e,(r,a)=>{let l=a;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(t){}restRequest_(t,e={},i){return e.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(e.auth=s.accessToken),r&&r.token&&(e.ac=r.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Tp(e);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=fi(l.responseText)}catch{qt("Failed to parse JSON response for "+a+": "+l.responseText)}i(null,u)}else l.status!==401&&l.status!==404&&qt("Got unsuccessful REST response for "+a+" Status: "+l.status),i(l.status);i=null}},l.open("GET",a,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(){return{value:null,children:new Map}}function Bd(n,t,e){if(q(t))n.value=e,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(t,e);else{const i=W(t);n.children.has(i)||n.children.set(i,Cs());const s=n.children.get(i);t=it(t),Bd(s,t,e)}}function uo(n,t,e){n.value!==null?e(t,n.value):hT(n,(i,s)=>{const r=new st(t.toString()+"/"+i);uo(s,r,e)})}function hT(n,t){n.children.forEach((e,i)=>{t(i,e)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&Wt(this.last_,(i,s)=>{e[i]=e[i]-s}),this.last_=t,e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=10*1e3,fT=30*1e3,pT=5*60*1e3;class _T{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new dT(t);const i=Wc+(fT-Wc)*Math.random();ui(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),e={};let i=!1;Wt(t,(s,r)=>{r>0&&pe(this.statsToReport_,s)&&(e[s]=r,i=!0)}),i&&this.server_.reportStats(e),ui(this.reportStats_.bind(this),Math.floor(Math.random()*2*pT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yt||(Yt={}));function qd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $d(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,e,i){this.path=t,this.affectedTree=e,this.revert=i,this.type=Yt.ACK_USER_WRITE,this.source=qd()}operationForChild(t){if(q(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new st(t));return new Rs(J(),e,this.revert)}}else return k(W(this.path)===t,"operationForChild called for unrelated child."),new Rs(it(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,e,i){this.source=t,this.path=e,this.snap=i,this.type=Yt.OVERWRITE}operationForChild(t){return q(this.path)?new Qe(this.source,J(),this.snap.getImmediateChild(t)):new Qe(this.source,it(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e,i){this.source=t,this.path=e,this.children=i,this.type=Yt.MERGE}operationForChild(t){if(q(this.path)){const e=this.children.subtree(new st(t));return e.isEmpty()?null:e.value?new Qe(this.source,J(),e.value):new wi(this.source,J(),e)}else return k(W(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new wi(this.source,it(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t,e,i){this.node_=t,this.fullyInitialized_=e,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(q(t))return this.isFullyInitialized()&&!this.filtered_;const e=W(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function mT(n,t,e,i){const s=[],r=[];return t.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&r.push(cT(a.childName,a.snapshotNode))}),ti(n,s,"child_removed",t,i,e),ti(n,s,"child_added",t,i,e),ti(n,s,"child_moved",r,i,e),ti(n,s,"child_changed",t,i,e),ti(n,s,"value",t,i,e),s}function ti(n,t,e,i,s,r){const a=i.filter(l=>l.type===e);a.sort((l,u)=>yT(n,l,u)),a.forEach(l=>{const u=gT(n,l,r);s.forEach(h=>{h.respondsTo(l.type)&&t.push(h.createEvent(u,n.query_))})})}function gT(n,t,e){return t.type==="value"||t.type==="child_removed"||(t.prevName=e.getPredecessorChildName(t.childName,t.snapshotNode,n.index_)),t}function yT(n,t,e){if(t.childName==null||e.childName==null)throw Cn("Should only compare child_ events.");const i=new z(t.childName,t.snapshotNode),s=new z(e.childName,e.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(n,t){return{eventCache:n,serverCache:t}}function hi(n,t,e,i){return Wd(new da(t,e,i),n.serverCache)}function zd(n,t,e,i){return Wd(n.eventCache,new da(t,e,i))}function ho(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ye(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr;const vT=()=>(Lr||(Lr=new xt(sE)),Lr);class nt{constructor(t,e=vT()){this.value=t,this.children=e}static fromObject(t){let e=new nt(null);return Wt(t,(i,s)=>{e=e.set(new st(i),s)}),e}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(this.value!=null&&e(this.value))return{path:J(),value:this.value};if(q(t))return null;{const i=W(t),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(it(t),e);return r!=null?{path:mt(new st(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(q(t))return this;{const e=W(t),i=this.children.get(e);return i!==null?i.subtree(it(t)):new nt(null)}}set(t,e){if(q(t))return new nt(e,this.children);{const i=W(t),r=(this.children.get(i)||new nt(null)).set(it(t),e),a=this.children.insert(i,r);return new nt(this.value,a)}}remove(t){if(q(t))return this.children.isEmpty()?new nt(null):new nt(null,this.children);{const e=W(t),i=this.children.get(e);if(i){const s=i.remove(it(t));let r;return s.isEmpty()?r=this.children.remove(e):r=this.children.insert(e,s),this.value===null&&r.isEmpty()?new nt(null):new nt(this.value,r)}else return this}}get(t){if(q(t))return this.value;{const e=W(t),i=this.children.get(e);return i?i.get(it(t)):null}}setTree(t,e){if(q(t))return e;{const i=W(t),r=(this.children.get(i)||new nt(null)).setTree(it(t),e);let a;return r.isEmpty()?a=this.children.remove(i):a=this.children.insert(i,r),new nt(this.value,a)}}fold(t){return this.fold_(J(),t)}fold_(t,e){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(mt(t,s),e)}),e(t,this.value,i)}findOnPath(t,e){return this.findOnPath_(t,J(),e)}findOnPath_(t,e,i){const s=this.value?i(e,this.value):!1;if(s)return s;if(q(t))return null;{const r=W(t),a=this.children.get(r);return a?a.findOnPath_(it(t),mt(e,r),i):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,J(),e)}foreachOnPath_(t,e,i){if(q(t))return this;{this.value&&i(e,this.value);const s=W(t),r=this.children.get(s);return r?r.foreachOnPath_(it(t),mt(e,s),i):new nt(null)}}foreach(t){this.foreach_(J(),t)}foreach_(t,e){this.children.inorderTraversal((i,s)=>{s.foreach_(mt(t,i),e)}),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal((e,i)=>{i.value&&t(e,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.writeTree_=t}static empty(){return new Qt(new nt(null))}}function di(n,t,e){if(q(t))return new Qt(new nt(e));{const i=n.writeTree_.findRootMostValueAndPath(t);if(i!=null){const s=i.path;let r=i.value;const a=jt(s,t);return r=r.updateChild(a,e),new Qt(n.writeTree_.set(s,r))}else{const s=new nt(e),r=n.writeTree_.setTree(t,s);return new Qt(r)}}}function zc(n,t,e){let i=n;return Wt(e,(s,r)=>{i=di(i,mt(t,s),r)}),i}function Gc(n,t){if(q(t))return Qt.empty();{const e=n.writeTree_.setTree(t,new nt(null));return new Qt(e)}}function fo(n,t){return Ze(n,t)!=null}function Ze(n,t){const e=n.writeTree_.findRootMostValueAndPath(t);return e!=null?n.writeTree_.get(e.path).getChild(jt(e.path,t)):null}function Hc(n){const t=[],e=n.writeTree_.value;return e!=null?e.isLeafNode()||e.forEachChild(Dt,(i,s)=>{t.push(new z(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&t.push(new z(i,s.value))}),t}function we(n,t){if(q(t))return n;{const e=Ze(n,t);return e!=null?new Qt(new nt(e)):new Qt(n.writeTree_.subtree(t))}}function po(n){return n.writeTree_.isEmpty()}function An(n,t){return Gd(J(),n.writeTree_,t)}function Gd(n,t,e){if(t.value!=null)return e.updateChild(n,t.value);{let i=null;return t.children.inorderTraversal((s,r)=>{s===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):e=Gd(mt(n,s),r,e)}),!e.getChild(n).isEmpty()&&i!==null&&(e=e.updateChild(mt(n,".priority"),i)),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n,t){return Jd(t,n)}function ET(n,t,e,i,s){k(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:t,snap:e,writeId:i,visible:s}),s&&(n.visibleWrites=di(n.visibleWrites,t,e)),n.lastWriteId=i}function TT(n,t){for(let e=0;e<n.allWrites.length;e++){const i=n.allWrites[e];if(i.writeId===t)return i}return null}function IT(n,t){const e=n.allWrites.findIndex(l=>l.writeId===t);k(e>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[e];n.allWrites.splice(e,1);let s=i.visible,r=!1,a=n.allWrites.length-1;for(;s&&a>=0;){const l=n.allWrites[a];l.visible&&(a>=e&&wT(l,i.path)?s=!1:Ht(i.path,l.path)&&(r=!0)),a--}if(s){if(r)return AT(n),!0;if(i.snap)n.visibleWrites=Gc(n.visibleWrites,i.path);else{const l=i.children;Wt(l,u=>{n.visibleWrites=Gc(n.visibleWrites,mt(i.path,u))})}return!0}else return!1}function wT(n,t){if(n.snap)return Ht(n.path,t);for(const e in n.children)if(n.children.hasOwnProperty(e)&&Ht(mt(n.path,e),t))return!0;return!1}function AT(n){n.visibleWrites=Kd(n.allWrites,CT,J()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function CT(n){return n.visible}function Kd(n,t,e){let i=Qt.empty();for(let s=0;s<n.length;++s){const r=n[s];if(t(r)){const a=r.path;let l;if(r.snap)Ht(e,a)?(l=jt(e,a),i=di(i,l,r.snap)):Ht(a,e)&&(l=jt(a,e),i=di(i,J(),r.snap.getChild(l)));else if(r.children){if(Ht(e,a))l=jt(e,a),i=zc(i,l,r.children);else if(Ht(a,e))if(l=jt(a,e),q(l))i=zc(i,J(),r.children);else{const u=_n(r.children,W(l));if(u){const h=u.getChild(it(l));i=di(i,J(),h)}}}else throw Cn("WriteRecord should have .snap or .children")}}return i}function Qd(n,t,e,i,s){if(!i&&!s){const r=Ze(n.visibleWrites,t);if(r!=null)return r;{const a=we(n.visibleWrites,t);if(po(a))return e;if(e==null&&!fo(a,J()))return null;{const l=e||X.EMPTY_NODE;return An(a,l)}}}else{const r=we(n.visibleWrites,t);if(!s&&po(r))return e;if(!s&&e==null&&!fo(r,J()))return null;{const a=function(h){return(h.visible||s)&&(!i||!~i.indexOf(h.writeId))&&(Ht(h.path,t)||Ht(t,h.path))},l=Kd(n.allWrites,a,t),u=e||X.EMPTY_NODE;return An(l,u)}}}function RT(n,t,e){let i=X.EMPTY_NODE;const s=Ze(n.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Dt,(r,a)=>{i=i.updateImmediateChild(r,a)}),i;if(e){const r=we(n.visibleWrites,t);return e.forEachChild(Dt,(a,l)=>{const u=An(we(r,new st(a)),l);i=i.updateImmediateChild(a,u)}),Hc(r).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}else{const r=we(n.visibleWrites,t);return Hc(r).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}}function ST(n,t,e,i,s){k(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=mt(t,e);if(fo(n.visibleWrites,r))return null;{const a=we(n.visibleWrites,r);return po(a)?s.getChild(e):An(a,s.getChild(e))}}function bT(n,t,e,i){const s=mt(t,e),r=Ze(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(e)){const a=we(n.visibleWrites,s);return An(a,i.getNode().getImmediateChild(e))}else return null}function PT(n,t){return Ze(n.visibleWrites,t)}function NT(n,t,e,i,s,r,a){let l;const u=we(n.visibleWrites,t),h=Ze(u,J());if(h!=null)l=h;else if(e!=null)l=An(u,e);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const f=[],_=a.getCompare(),v=r?l.getReverseIteratorFrom(i,a):l.getIteratorFrom(i,a);let C=v.getNext();for(;C&&f.length<s;)_(C,i)!==0&&f.push(C),C=v.getNext();return f}else return[]}function DT(){return{visibleWrites:Qt.empty(),allWrites:[],lastWriteId:-1}}function _o(n,t,e,i){return Qd(n.writeTree,n.treePath,t,e,i)}function Yd(n,t){return RT(n.writeTree,n.treePath,t)}function Kc(n,t,e,i){return ST(n.writeTree,n.treePath,t,e,i)}function Ss(n,t){return PT(n.writeTree,mt(n.treePath,t))}function kT(n,t,e,i,s,r){return NT(n.writeTree,n.treePath,t,e,i,s,r)}function fa(n,t,e){return bT(n.writeTree,n.treePath,t,e)}function Xd(n,t){return Jd(mt(n.treePath,t),n.writeTree)}function Jd(n,t){return{treePath:n,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,i=t.childName;k(e==="child_added"||e==="child_changed"||e==="child_removed","Only child changes supported for tracking"),k(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(e==="child_added"&&r==="child_removed")this.changeMap.set(i,qc(i,t.snapshotNode,s.snapshotNode));else if(e==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(e==="child_removed"&&r==="child_changed")this.changeMap.set(i,lT(i,s.oldSnap));else if(e==="child_changed"&&r==="child_added")this.changeMap.set(i,aT(i,t.snapshotNode));else if(e==="child_changed"&&r==="child_changed")this.changeMap.set(i,qc(i,t.snapshotNode,s.oldSnap));else throw Cn("Illegal combination of changes: "+t+" occurred after "+s)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{getCompleteChild(t){return null}getChildAfterChild(t,e,i){return null}}const Zd=new OT;class pa{constructor(t,e,i=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=i}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new da(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fa(this.writes_,t,i)}}getChildAfterChild(t,e,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ye(this.viewCache_),r=kT(this.writes_,s,e,1,i,t);return r.length===0?null:r[0]}}function MT(n,t){k(t.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),k(t.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function xT(n,t,e,i,s){const r=new VT;let a,l;if(e.type===Yt.OVERWRITE){const h=e;h.source.fromUser?a=mo(n,t,h.path,h.snap,i,s,r):(k(h.source.fromServer,"Unknown source."),l=h.source.tagged||t.serverCache.isFiltered()&&!q(h.path),a=bs(n,t,h.path,h.snap,i,s,l,r))}else if(e.type===Yt.MERGE){const h=e;h.source.fromUser?a=FT(n,t,h.path,h.children,i,s,r):(k(h.source.fromServer,"Unknown source."),l=h.source.tagged||t.serverCache.isFiltered(),a=go(n,t,h.path,h.children,i,s,l,r))}else if(e.type===Yt.ACK_USER_WRITE){const h=e;h.revert?a=qT(n,t,h.path,i,s,r):a=UT(n,t,h.path,h.affectedTree,i,s,r)}else if(e.type===Yt.LISTEN_COMPLETE)a=BT(n,t,e.path,i,r);else throw Cn("Unknown operation type: "+e.type);const u=r.getChanges();return LT(t,a,u),{viewCache:a,changes:u}}function LT(n,t,e){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ho(n);(e.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&e.push(oT(ho(t)))}}function tf(n,t,e,i,s,r){const a=t.eventCache;if(Ss(i,e)!=null)return t;{let l,u;if(q(e))if(k(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const h=Ye(t),f=h instanceof X?h:X.EMPTY_NODE,_=Yd(i,f);l=n.filter.updateFullNode(t.eventCache.getNode(),_,r)}else{const h=_o(i,Ye(t));l=n.filter.updateFullNode(t.eventCache.getNode(),h,r)}else{const h=W(e);if(h===".priority"){k(Se(e)===1,"Can't have a priority with additional path components");const f=a.getNode();u=t.serverCache.getNode();const _=Kc(i,e,f,u);_!=null?l=n.filter.updatePriority(f,_):l=a.getNode()}else{const f=it(e);let _;if(a.isCompleteForChild(h)){u=t.serverCache.getNode();const v=Kc(i,e,a.getNode(),u);v!=null?_=a.getNode().getImmediateChild(h).updateChild(f,v):_=a.getNode().getImmediateChild(h)}else _=fa(i,h,t.serverCache);_!=null?l=n.filter.updateChild(a.getNode(),h,_,f,s,r):l=a.getNode()}}return hi(t,l,a.isFullyInitialized()||q(e),n.filter.filtersNodes())}}function bs(n,t,e,i,s,r,a,l){const u=t.serverCache;let h;const f=a?n.filter:n.filter.getIndexedFilter();if(q(e))h=f.updateFullNode(u.getNode(),i,null);else if(f.filtersNodes()&&!u.isFiltered()){const C=u.getNode().updateChild(e,i);h=f.updateFullNode(u.getNode(),C,null)}else{const C=W(e);if(!u.isCompleteForPath(e)&&Se(e)>1)return t;const S=it(e),N=u.getNode().getImmediateChild(C).updateChild(S,i);C===".priority"?h=f.updatePriority(u.getNode(),N):h=f.updateChild(u.getNode(),C,N,S,Zd,null)}const _=zd(t,h,u.isFullyInitialized()||q(e),f.filtersNodes()),v=new pa(s,_,r);return tf(n,_,e,s,v,l)}function mo(n,t,e,i,s,r,a){const l=t.eventCache;let u,h;const f=new pa(s,t,r);if(q(e))h=n.filter.updateFullNode(t.eventCache.getNode(),i,a),u=hi(t,h,!0,n.filter.filtersNodes());else{const _=W(e);if(_===".priority")h=n.filter.updatePriority(t.eventCache.getNode(),i),u=hi(t,h,l.isFullyInitialized(),l.isFiltered());else{const v=it(e),C=l.getNode().getImmediateChild(_);let S;if(q(v))S=i;else{const V=f.getCompleteChild(_);V!=null?Nd(v)===".priority"&&V.getChild(kd(v)).isEmpty()?S=V:S=V.updateChild(v,i):S=X.EMPTY_NODE}if(C.equals(S))u=t;else{const V=n.filter.updateChild(l.getNode(),_,S,v,f,a);u=hi(t,V,l.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function Qc(n,t){return n.eventCache.isCompleteForChild(t)}function FT(n,t,e,i,s,r,a){let l=t;return i.foreach((u,h)=>{const f=mt(e,u);Qc(t,W(f))&&(l=mo(n,l,f,h,s,r,a))}),i.foreach((u,h)=>{const f=mt(e,u);Qc(t,W(f))||(l=mo(n,l,f,h,s,r,a))}),l}function Yc(n,t,e){return e.foreach((i,s)=>{t=t.updateChild(i,s)}),t}function go(n,t,e,i,s,r,a,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let u=t,h;q(e)?h=i:h=new nt(null).setTree(e,i);const f=t.serverCache.getNode();return h.children.inorderTraversal((_,v)=>{if(f.hasChild(_)){const C=t.serverCache.getNode().getImmediateChild(_),S=Yc(n,C,v);u=bs(n,u,new st(_),S,s,r,a,l)}}),h.children.inorderTraversal((_,v)=>{const C=!t.serverCache.isCompleteForChild(_)&&v.value===null;if(!f.hasChild(_)&&!C){const S=t.serverCache.getNode().getImmediateChild(_),V=Yc(n,S,v);u=bs(n,u,new st(_),V,s,r,a,l)}}),u}function UT(n,t,e,i,s,r,a){if(Ss(s,e)!=null)return t;const l=t.serverCache.isFiltered(),u=t.serverCache;if(i.value!=null){if(q(e)&&u.isFullyInitialized()||u.isCompleteForPath(e))return bs(n,t,e,u.getNode().getChild(e),s,r,l,a);if(q(e)){let h=new nt(null);return u.getNode().forEachChild(pn,(f,_)=>{h=h.set(new st(f),_)}),go(n,t,e,h,s,r,l,a)}else return t}else{let h=new nt(null);return i.foreach((f,_)=>{const v=mt(e,f);u.isCompleteForPath(v)&&(h=h.set(f,u.getNode().getChild(v)))}),go(n,t,e,h,s,r,l,a)}}function BT(n,t,e,i,s){const r=t.serverCache,a=zd(t,r.getNode(),r.isFullyInitialized()||q(e),r.isFiltered());return tf(n,a,e,i,Zd,s)}function qT(n,t,e,i,s,r){let a;if(Ss(i,e)!=null)return t;{const l=new pa(i,t,s),u=t.eventCache.getNode();let h;if(q(e)||W(e)===".priority"){let f;if(t.serverCache.isFullyInitialized())f=_o(i,Ye(t));else{const _=t.serverCache.getNode();k(_ instanceof X,"serverChildren would be complete if leaf node"),f=Yd(i,_)}f=f,h=n.filter.updateFullNode(u,f,r)}else{const f=W(e);let _=fa(i,f,t.serverCache);_==null&&t.serverCache.isCompleteForChild(f)&&(_=u.getImmediateChild(f)),_!=null?h=n.filter.updateChild(u,f,_,it(e),l,r):t.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(u,f,X.EMPTY_NODE,it(e),l,r):h=u,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=_o(i,Ye(t)),a.isLeafNode()&&(h=n.filter.updateFullNode(h,a,r)))}return a=t.serverCache.isFullyInitialized()||Ss(i,J())!=null,hi(t,h,a,n.filter.filtersNodes())}}function jT(n,t){const e=Ye(n.viewCache_);return e&&(n.query._queryParams.loadsAllData()||!q(t)&&!e.getImmediateChild(W(t)).isEmpty())?e.getChild(t):null}function Xc(n,t,e,i){t.type===Yt.MERGE&&t.source.queryId!==null&&(k(Ye(n.viewCache_),"We should always have a full cache before handling merges"),k(ho(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=xT(n.processor_,s,t,e,i);return MT(n.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,$T(n,r.changes,r.viewCache.eventCache.getNode())}function $T(n,t,e,i){const s=n.eventRegistrations_;return mT(n.eventGenerator_,t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jc;function WT(n){k(!Jc,"__referenceConstructor has already been defined"),Jc=n}function _a(n,t,e,i){const s=t.source.queryId;if(s!==null){const r=n.views.get(s);return k(r!=null,"SyncTree gave us an op for an invalid query."),Xc(r,t,e,i)}else{let r=[];for(const a of n.views.values())r=r.concat(Xc(a,t,e,i));return r}}function ma(n,t){let e=null;for(const i of n.views.values())e=e||jT(i,t);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc;function zT(n){k(!Zc,"__referenceConstructor has already been defined"),Zc=n}class tu{constructor(t){this.listenProvider_=t,this.syncPointTree_=new nt(null),this.pendingWriteTree_=DT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function GT(n,t,e,i,s){return ET(n.pendingWriteTree_,t,e,i,s),s?Xs(n,new Qe(qd(),t,e)):[]}function hn(n,t,e=!1){const i=TT(n.pendingWriteTree_,t);if(IT(n.pendingWriteTree_,t)){let r=new nt(null);return i.snap!=null?r=r.set(J(),!0):Wt(i.children,a=>{r=r.set(new st(a),!0)}),Xs(n,new Rs(i.path,r,e))}else return[]}function Ys(n,t,e){return Xs(n,new Qe(jd(),t,e))}function HT(n,t,e){const i=nt.fromObject(e);return Xs(n,new wi(jd(),t,i))}function KT(n,t,e,i){const s=rf(n,i);if(s!=null){const r=of(s),a=r.path,l=r.queryId,u=jt(a,t),h=new Qe($d(l),u,e);return af(n,a,h)}else return[]}function QT(n,t,e,i){const s=rf(n,i);if(s){const r=of(s),a=r.path,l=r.queryId,u=jt(a,t),h=nt.fromObject(e),f=new wi($d(l),u,h);return af(n,a,f)}else return[]}function ef(n,t,e){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(t,(a,l)=>{const u=jt(a,t),h=ma(l,u);if(h)return h});return Qd(s,t,r,e,!0)}function Xs(n,t){return nf(t,n.syncPointTree_,null,Hd(n.pendingWriteTree_,J()))}function nf(n,t,e,i){if(q(n.path))return sf(n,t,e,i);{const s=t.get(J());e==null&&s!=null&&(e=ma(s,J()));let r=[];const a=W(n.path),l=n.operationForChild(a),u=t.children.get(a);if(u&&l){const h=e?e.getImmediateChild(a):null,f=Xd(i,a);r=r.concat(nf(l,u,h,f))}return s&&(r=r.concat(_a(s,n,i,e))),r}}function sf(n,t,e,i){const s=t.get(J());e==null&&s!=null&&(e=ma(s,J()));let r=[];return t.children.inorderTraversal((a,l)=>{const u=e?e.getImmediateChild(a):null,h=Xd(i,a),f=n.operationForChild(a);f&&(r=r.concat(sf(f,l,u,h)))}),s&&(r=r.concat(_a(s,n,i,e))),r}function rf(n,t){return n.tagToQueryMap.get(t)}function of(n){const t=n.indexOf("$");return k(t!==-1&&t<n.length-1,"Bad queryKey."),{queryId:n.substr(t+1),path:new st(n.substr(0,t))}}function af(n,t,e){const i=n.syncPointTree_.get(t);k(i,"Missing sync point for query tag that we're tracking");const s=Hd(n.pendingWriteTree_,t);return _a(i,e,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new ga(e)}node(){return this.node_}}class ya{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=mt(this.path_,t);return new ya(this.syncTree_,e)}node(){return ef(this.syncTree_,this.path_)}}const YT=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},eu=function(n,t,e){if(!n||typeof n!="object")return n;if(k(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return XT(n[".sv"],t,e);if(typeof n[".sv"]=="object")return JT(n[".sv"],t);k(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},XT=function(n,t,e){switch(n){case"timestamp":return e.timestamp;default:k(!1,"Unexpected server value: "+n)}},JT=function(n,t,e){n.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&k(!1,"Unexpected increment value: "+i);const s=t.node();if(k(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const a=s.getValue();return typeof a!="number"?i:a+i},ZT=function(n,t,e,i){return va(t,new ya(e,n),i)},tI=function(n,t,e){return va(n,new ga(t),e)};function va(n,t,e){const i=n.getPriority().val(),s=eu(i,t.getImmediateChild(".priority"),e);let r;if(n.isLeafNode()){const a=n,l=eu(a.getValue(),t,e);return l!==a.getValue()||s!==a.getPriority().val()?new ft(l,Nt(s)):n}else{const a=n;return r=a,s!==a.getPriority().val()&&(r=r.updatePriority(new ft(s))),a.forEachChild(Dt,(l,u)=>{const h=va(u,t.getImmediateChild(l),e);h!==u&&(r=r.updateImmediateChild(l,h))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t="",e=null,i={children:{},childCount:0}){this.name=t,this.parent=e,this.node=i}}function Ta(n,t){let e=t instanceof st?t:new st(t),i=n,s=W(e);for(;s!==null;){const r=_n(i.node.children,s)||{children:{},childCount:0};i=new Ea(s,i,r),e=it(e),s=W(e)}return i}function Nn(n){return n.node.value}function lf(n,t){n.node.value=t,yo(n)}function cf(n){return n.node.childCount>0}function eI(n){return Nn(n)===void 0&&!cf(n)}function Js(n,t){Wt(n.node.children,(e,i)=>{t(new Ea(e,n,i))})}function uf(n,t,e,i){e&&!i&&t(n),Js(n,s=>{uf(s,t,!0,i)}),e&&i&&t(n)}function nI(n,t,e){let i=n.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function Oi(n){return new st(n.parent===null?n.name:Oi(n.parent)+"/"+n.name)}function yo(n){n.parent!==null&&iI(n.parent,n.name,n)}function iI(n,t,e){const i=eI(e),s=pe(n.node.children,t);i&&s?(delete n.node.children[t],n.node.childCount--,yo(n)):!i&&!s&&(n.node.children[t]=e.node,n.node.childCount++,yo(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=/[\[\].#$\/\u0000-\u001F\u007F]/,rI=/[\[\].#$\u0000-\u001F\u007F]/,Fr=10*1024*1024,hf=function(n){return typeof n=="string"&&n.length!==0&&!sI.test(n)},oI=function(n){return typeof n=="string"&&n.length!==0&&!rI.test(n)},aI=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oI(n)},df=function(n,t,e){const i=e instanceof st?new BE(e,n):e;if(t===void 0)throw new Error(n+"contains undefined "+Me(i));if(typeof t=="function")throw new Error(n+"contains a function "+Me(i)+" with contents = "+t.toString());if(ud(t))throw new Error(n+"contains "+t.toString()+" "+Me(i));if(typeof t=="string"&&t.length>Fr/3&&Ds(t)>Fr)throw new Error(n+"contains a string greater than "+Fr+" utf8 bytes "+Me(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let s=!1,r=!1;if(Wt(t,(a,l)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(r=!0,!hf(a)))throw new Error(n+" contains an invalid key ("+a+") "+Me(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qE(i,a),df(n,l,i),jE(i)}),s&&r)throw new Error(n+' contains ".value" child '+Me(i)+" in addition to actual children.")}},lI=function(n,t){const e=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!hf(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||e.length!==0&&!aI(e))throw new Error(Cp(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uI(n,t){let e=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();e!==null&&!Vd(r,e.path)&&(n.eventLists_.push(e),e=null),e===null&&(e={events:[],path:r}),e.events.push(s)}e&&n.eventLists_.push(e)}function tn(n,t,e){uI(n,e),hI(n,i=>Ht(i,t)||Ht(t,i))}function hI(n,t){n.recursionDepth_++;let e=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;t(r)?(dI(n.eventLists_[i]),n.eventLists_[i]=null):e=!1}}e&&(n.eventLists_=[]),n.recursionDepth_--}function dI(n){for(let t=0;t<n.events.length;t++){const e=n.events[t];if(e!==null){n.events[t]=null;const i=e.getEventRunner();ci&&Pt("event: "+e.toString()),ki(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="repo_interrupt",pI=25;class _I{constructor(t,e,i,s){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cs(),this.transactionQueueTree_=new Ea,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mI(n,t,e){if(n.stats_=aa(n.repoInfo_),n.forceRestClient_||uE())n.server_=new As(n.repoInfo_,(i,s,r,a)=>{nu(n,i,s,r,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>iu(n,!0),0);else{if(typeof e<"u"&&e!==null){if(typeof e!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{vt(e)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ce(n.repoInfo_,t,(i,s,r,a)=>{nu(n,i,s,r,a)},i=>{iu(n,i)},i=>{yI(n,i)},n.authTokenProvider_,n.appCheckProvider_,e),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=mE(n.repoInfo_,()=>new _T(n.stats_,n.server_)),n.infoData_=new uT,n.infoSyncTree_=new tu({startListening:(i,s,r,a)=>{let l=[];const u=n.infoData_.getNode(i._path);return u.isEmpty()||(l=Ys(n.infoSyncTree_,i._path,u),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),Ia(n,"connected",!1),n.serverSyncTree_=new tu({startListening:(i,s,r,a)=>(n.server_.listen(i,r,s,(l,u)=>{const h=a(l,u);tn(n.eventQueue_,i._path,h)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function gI(n){const e=n.infoData_.getNode(new st(".info/serverTimeOffset")).val()||0;return new Date().getTime()+e}function ff(n){return YT({timestamp:gI(n)})}function nu(n,t,e,i,s){n.dataUpdateCount++;const r=new st(t);e=n.interceptServerDataCallback_?n.interceptServerDataCallback_(t,e):e;let a=[];if(s)if(i){const u=us(e,h=>Nt(h));a=QT(n.serverSyncTree_,r,u,s)}else{const u=Nt(e);a=KT(n.serverSyncTree_,r,u,s)}else if(i){const u=us(e,h=>Nt(h));a=HT(n.serverSyncTree_,r,u)}else{const u=Nt(e);a=Ys(n.serverSyncTree_,r,u)}let l=r;a.length>0&&(l=Aa(n,r)),tn(n.eventQueue_,l,a)}function iu(n,t){Ia(n,"connected",t),t===!1&&EI(n)}function yI(n,t){Wt(t,(e,i)=>{Ia(n,e,i)})}function Ia(n,t,e){const i=new st("/.info/"+t),s=Nt(e);n.infoData_.updateSnapshot(i,s);const r=Ys(n.infoSyncTree_,i,s);tn(n.eventQueue_,i,r)}function vI(n){return n.nextWriteId_++}function EI(n){pf(n,"onDisconnectEvents");const t=ff(n),e=Cs();uo(n.onDisconnect_,J(),(s,r)=>{const a=ZT(s,r,n.serverSyncTree_,t);Bd(e,s,a)});let i=[];uo(e,J(),(s,r)=>{i=i.concat(Ys(n.serverSyncTree_,s,r));const a=AI(n,s);Aa(n,a)}),n.onDisconnect_=Cs(),tn(n.eventQueue_,J(),i)}function TI(n){n.persistentConnection_&&n.persistentConnection_.interrupt(fI)}function pf(n,...t){let e="";n.persistentConnection_&&(e=n.persistentConnection_.id+":"),Pt(e,...t)}function _f(n,t,e){return ef(n.serverSyncTree_,t,e)||X.EMPTY_NODE}function wa(n,t=n.transactionQueueTree_){if(t||Zs(n,t),Nn(t)){const e=gf(n,t);k(e.length>0,"Sending zero length transaction queue"),e.every(s=>s.status===0)&&II(n,Oi(t),e)}else cf(t)&&Js(t,e=>{wa(n,e)})}function II(n,t,e){const i=e.map(h=>h.currentWriteId),s=_f(n,t,i);let r=s;const a=s.hash();for(let h=0;h<e.length;h++){const f=e[h];k(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const _=jt(t,f.path);r=r.updateChild(_,f.currentOutputSnapshotRaw)}const l=r.val(!0),u=t;n.server_.put(u.toString(),l,h=>{pf(n,"transaction put response",{path:u.toString(),status:h});let f=[];if(h==="ok"){const _=[];for(let v=0;v<e.length;v++)e[v].status=2,f=f.concat(hn(n.serverSyncTree_,e[v].currentWriteId)),e[v].onComplete&&_.push(()=>e[v].onComplete(null,!0,e[v].currentOutputSnapshotResolved)),e[v].unwatcher();Zs(n,Ta(n.transactionQueueTree_,t)),wa(n,n.transactionQueueTree_),tn(n.eventQueue_,t,f);for(let v=0;v<_.length;v++)ki(_[v])}else{if(h==="datastale")for(let _=0;_<e.length;_++)e[_].status===3?e[_].status=4:e[_].status=0;else{qt("transaction at "+u.toString()+" failed: "+h);for(let _=0;_<e.length;_++)e[_].status=4,e[_].abortReason=h}Aa(n,t)}},a)}function Aa(n,t){const e=mf(n,t),i=Oi(e),s=gf(n,e);return wI(n,s,i),i}function wI(n,t,e){if(t.length===0)return;const i=[];let s=[];const a=t.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<t.length;l++){const u=t[l],h=jt(e,u.path);let f=!1,_;if(k(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)f=!0,_=u.abortReason,s=s.concat(hn(n.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=pI)f=!0,_="maxretry",s=s.concat(hn(n.serverSyncTree_,u.currentWriteId,!0));else{const v=_f(n,u.path,a);u.currentInputSnapshot=v;const C=t[l].update(v.val());if(C!==void 0){df("transaction failed: Data returned ",C,u.path);let S=Nt(C);typeof C=="object"&&C!=null&&pe(C,".priority")||(S=S.updatePriority(v.getPriority()));const N=u.currentWriteId,H=ff(n),G=tI(S,v,H);u.currentOutputSnapshotRaw=S,u.currentOutputSnapshotResolved=G,u.currentWriteId=vI(n),a.splice(a.indexOf(N),1),s=s.concat(GT(n.serverSyncTree_,u.path,G,u.currentWriteId,u.applyLocally)),s=s.concat(hn(n.serverSyncTree_,N,!0))}else f=!0,_="nodata",s=s.concat(hn(n.serverSyncTree_,u.currentWriteId,!0))}tn(n.eventQueue_,e,s),s=[],f&&(t[l].status=2,function(v){setTimeout(v,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&(_==="nodata"?i.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):i.push(()=>t[l].onComplete(new Error(_),!1,null))))}Zs(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)ki(i[l]);wa(n,n.transactionQueueTree_)}function mf(n,t){let e,i=n.transactionQueueTree_;for(e=W(t);e!==null&&Nn(i)===void 0;)i=Ta(i,e),t=it(t),e=W(t);return i}function gf(n,t){const e=[];return yf(n,t,e),e.sort((i,s)=>i.order-s.order),e}function yf(n,t,e){const i=Nn(t);if(i)for(let s=0;s<i.length;s++)e.push(i[s]);Js(t,s=>{yf(n,s,e)})}function Zs(n,t){const e=Nn(t);if(e){let i=0;for(let s=0;s<e.length;s++)e[s].status!==2&&(e[i]=e[s],i++);e.length=i,lf(t,e.length>0?e:void 0)}Js(t,i=>{Zs(n,i)})}function AI(n,t){const e=Oi(mf(n,t)),i=Ta(n.transactionQueueTree_,t);return nI(i,s=>{Ur(n,s)}),Ur(n,i),uf(i,s=>{Ur(n,s)}),e}function Ur(n,t){const e=Nn(t);if(e){const i=[];let s=[],r=-1;for(let a=0;a<e.length;a++)e[a].status===3||(e[a].status===1?(k(r===a-1,"All SENT items should be at beginning of queue."),r=a,e[a].status=3,e[a].abortReason="set"):(k(e[a].status===0,"Unexpected transaction status in abort"),e[a].unwatcher(),s=s.concat(hn(n.serverSyncTree_,e[a].currentWriteId,!0)),e[a].onComplete&&i.push(e[a].onComplete.bind(null,new Error("set"),!1,null))));r===-1?lf(t,void 0):e.length=r+1,tn(n.eventQueue_,Oi(t),s);for(let a=0;a<i.length;a++)ki(i[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(n){let t="";const e=n.split("/");for(let i=0;i<e.length;i++)if(e[i].length>0){let s=e[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}t+="/"+s}return t}function RI(n){const t={};n.charAt(0)==="?"&&(n=n.substring(1));for(const e of n.split("&")){if(e.length===0)continue;const i=e.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):qt(`Invalid query segment '${e}' in query '${n}'`)}return t}const su=function(n,t){const e=SI(n),i=e.namespace;e.domain==="firebase.com"&&He(e.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&e.domain!=="localhost"&&He("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),e.secure||nE();const s=e.scheme==="ws"||e.scheme==="wss";return{repoInfo:new fE(e.host,e.secure,i,s,t,"",i!==e.subdomain),path:new st(e.pathString)}},SI=function(n){let t="",e="",i="",s="",r="",a=!0,l="https",u=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(l=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let _=n.indexOf("?");_===-1&&(_=n.length),t=n.substring(0,Math.min(f,_)),f<_&&(s=CI(n.substring(f,_)));const v=RI(n.substring(Math.min(n.length,_)));h=t.indexOf(":"),h>=0?(a=l==="https"||l==="wss",u=parseInt(t.substring(h+1),10)):h=t.length;const C=t.slice(0,h);if(C.toLowerCase()==="localhost")e="localhost";else if(C.split(".").length<=2)e=C;else{const S=t.indexOf(".");i=t.substring(0,S).toLowerCase(),e=t.substring(S+1),r=i}"ns"in v&&(r=v.ns)}return{host:t,port:u,domain:e,subdomain:i,secure:a,scheme:l,pathString:s,namespace:r}};/**
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
 */class Ca{constructor(t,e,i,s){this._repo=t,this._path=e,this._queryParams=i,this._orderByCalled=s}get key(){return q(this._path)?null:Nd(this._path)}get ref(){return new Dn(this._repo,this._path)}get _queryIdentifier(){const t=$c(this._queryParams),e=ra(t);return e==="{}"?"default":e}get _queryObject(){return $c(this._queryParams)}isEqual(t){if(t=ue(t),!(t instanceof Ca))return!1;const e=this._repo===t._repo,i=Vd(this._path,t._path),s=this._queryIdentifier===t._queryIdentifier;return e&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+UE(this._path)}}class Dn extends Ca{constructor(t,e){super(t,e,new ha,!1)}get parent(){const t=kd(this._path);return t===null?null:new Dn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}WT(Dn);zT(Dn);/**
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
 */const bI="FIREBASE_DATABASE_EMULATOR_HOST",vo={};let PI=!1;function NI(n,t,e,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||He("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pt("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=su(r,s),l=a.repoInfo,u;typeof process<"u"&&Ac&&(u=Ac[bI]),u?(r=`http://${u}?ns=${l.namespace}`,a=su(r,s),l=a.repoInfo):a.repoInfo.secure;const h=new dE(n.name,n.options,t);lI("Invalid Firebase Database URL",a),q(a.path)||He("Database URL must point to the root of a Firebase Database (not including a child path).");const f=kI(l,n,h,new hE(n.name,e));return new VI(f,n)}function DI(n,t){const e=vo[t];(!e||e[n.key]!==n)&&He(`Database ${t}(${n.repoInfo_}) has already been deleted.`),TI(n),delete e[n.key]}function kI(n,t,e,i){let s=vo[t.name];s||(s={},vo[t.name]=s);let r=s[n.toURLString()];return r&&He("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new _I(n,PI,e,i),s[n.toURLString()]=r,r}class VI{constructor(t,e){this._repoInternal=t,this.app=e,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dn(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&He("Cannot call "+t+" on a deleted database.")}}/**
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
 */function OI(n){Yv(mu),he(new te("database",(t,{instanceIdentifier:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return NI(i,s,r,e)},"PUBLIC").setMultipleInstances(!0)),Kt(Cc,Rc,n),Kt(Cc,Rc,"esm2017")}ce.prototype.simpleListen=function(n,t){this.sendRequest("q",{p:n},t)};ce.prototype.echo=function(n,t){this.sendRequest("echo",{d:n},t)};OI();export{te as C,Ns as E,be as F,ks as L,mu as S,he as _,fp as a,wo as b,lp as c,y_ as d,dp as e,qI as f,xI as g,ue as h,hu as i,BI as j,qr as k,$ as l,Io as m,Br as n,LI as o,Sl as p,Tp as q,Kt as r,FI as s,UI as t,g_ as u,HI as v,GI as w,KI as x,YI as y,QI as z};
