(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function lp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sp={exports:{}},Va={},up={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),Y0=Symbol.for("react.portal"),Q0=Symbol.for("react.fragment"),X0=Symbol.for("react.strict_mode"),Z0=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),J0=Symbol.for("react.context"),eg=Symbol.for("react.forward_ref"),tg=Symbol.for("react.suspense"),ng=Symbol.for("react.memo"),rg=Symbol.for("react.lazy"),Jc=Symbol.iterator;function ig(e){return e===null||typeof e!="object"?null:(e=Jc&&e[Jc]||e["@@iterator"],typeof e=="function"?e:null)}var cp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dp=Object.assign,fp={};function Fr(e,t,n){this.props=e,this.context=t,this.refs=fp,this.updater=n||cp}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pp(){}pp.prototype=Fr.prototype;function Eu(e,t,n){this.props=e,this.context=t,this.refs=fp,this.updater=n||cp}var bu=Eu.prototype=new pp;bu.constructor=Eu;dp(bu,Fr.prototype);bu.isPureReactComponent=!0;var ed=Array.isArray,hp=Object.prototype.hasOwnProperty,Nu={current:null},mp={key:!0,ref:!0,__self:!0,__source:!0};function gp(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)hp.call(t,r)&&!mp.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gi,type:e,key:o,ref:a,props:i,_owner:Nu.current}}function og(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function ag(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var td=/\/+/g;function ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ag(""+e.key):t.toString(36)}function zo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Gi:case Y0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ml(a,0):r,ed(i)?(n="",e!=null&&(n=e.replace(td,"$&/")+"/"),zo(i,t,n,"",function(u){return u})):i!=null&&(Cu(i)&&(i=og(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(td,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ed(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+ml(o,l);a+=zo(o,t,n,s,i)}else if(s=ig(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+ml(o,l++),a+=zo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function no(e,t,n){if(e==null)return e;var r=[],i=0;return zo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function lg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Mo={transition:null},sg={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Mo,ReactCurrentOwner:Nu};function vp(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:no,forEach:function(e,t,n){no(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return no(e,function(){t++}),t},toArray:function(e){return no(e,function(t){return t})||[]},only:function(e){if(!Cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Fr;Y.Fragment=Q0;Y.Profiler=Z0;Y.PureComponent=Eu;Y.StrictMode=X0;Y.Suspense=tg;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sg;Y.act=vp;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Nu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)hp.call(t,s)&&!mp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Gi,type:e.type,key:i,ref:o,props:r,_owner:a}};Y.createContext=function(e){return e={$$typeof:J0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:K0,_context:e},e.Consumer=e};Y.createElement=gp;Y.createFactory=function(e){var t=gp.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:eg,render:e}};Y.isValidElement=Cu;Y.lazy=function(e){return{$$typeof:rg,_payload:{_status:-1,_result:e},_init:lg}};Y.memo=function(e,t){return{$$typeof:ng,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Mo.transition;Mo.transition={};try{e()}finally{Mo.transition=t}};Y.unstable_act=vp;Y.useCallback=function(e,t){return We.current.useCallback(e,t)};Y.useContext=function(e){return We.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return We.current.useDeferredValue(e)};Y.useEffect=function(e,t){return We.current.useEffect(e,t)};Y.useId=function(){return We.current.useId()};Y.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return We.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};Y.useRef=function(e){return We.current.useRef(e)};Y.useState=function(e){return We.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return We.current.useTransition()};Y.version="18.3.1";up.exports=Y;var $=up.exports;const xe=lp($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug=$,cg=Symbol.for("react.element"),dg=Symbol.for("react.fragment"),fg=Object.prototype.hasOwnProperty,pg=ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hg={key:!0,ref:!0,__self:!0,__source:!0};function yp(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)fg.call(t,r)&&!hg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:cg,type:e,key:o,ref:a,props:i,_owner:pg.current}}Va.Fragment=dg;Va.jsx=yp;Va.jsxs=yp;sp.exports=Va;var d=sp.exports,Xl={},xp={exports:{}},lt={},wp={exports:{}},kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,z){var F=_.length;_.push(z);e:for(;0<F;){var U=F-1>>>1,G=_[U];if(0<i(G,z))_[U]=z,_[F]=G,F=U;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var z=_[0],F=_.pop();if(F!==z){_[0]=F;e:for(var U=0,G=_.length,ee=G>>>1;U<ee;){var X=2*(U+1)-1,ne=_[X],ge=X+1,Ee=_[ge];if(0>i(ne,F))ge<G&&0>i(Ee,ne)?(_[U]=Ee,_[ge]=F,U=ge):(_[U]=ne,_[X]=F,U=X);else if(ge<G&&0>i(Ee,F))_[U]=Ee,_[ge]=F,U=ge;else break e}}return z}function i(_,z){var F=_.sortIndex-z.sortIndex;return F!==0?F:_.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,f=null,p=3,h=!1,y=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(_){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=_)r(u),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(u)}}function x(_){if(w=!1,g(_),!y)if(n(s)!==null)y=!0,b(S);else{var z=n(u);z!==null&&R(x,z.startTime-_)}}function S(_,z){y=!1,w&&(w=!1,m(M),M=-1),h=!0;var F=p;try{for(g(z),f=n(s);f!==null&&(!(f.expirationTime>z)||_&&!D());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var G=U(f.expirationTime<=z);z=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(s)&&r(s),g(z)}else r(s);f=n(s)}if(f!==null)var ee=!0;else{var X=n(u);X!==null&&R(x,X.startTime-z),ee=!1}return ee}finally{f=null,p=F,h=!1}}var C=!1,j=null,M=-1,L=5,A=-1;function D(){return!(e.unstable_now()-A<L)}function q(){if(j!==null){var _=e.unstable_now();A=_;var z=!0;try{z=j(!0,_)}finally{z?K():(C=!1,j=null)}}else C=!1}var K;if(typeof v=="function")K=function(){v(q)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,E=k.port2;k.port1.onmessage=q,K=function(){E.postMessage(null)}}else K=function(){N(q,0)};function b(_){j=_,C||(C=!0,K())}function R(_,z){M=N(function(){_(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,b(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var F=p;p=z;try{return _()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var F=p;p=_;try{return z()}finally{p=F}},e.unstable_scheduleCallback=function(_,z,F){var U=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?U+F:U):F=U,_){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=F+G,_={id:c++,callback:z,priorityLevel:_,startTime:F,expirationTime:G,sortIndex:-1},F>U?(_.sortIndex=F,t(u,_),n(s)===null&&_===n(u)&&(w?(m(M),M=-1):w=!0,R(x,F-U))):(_.sortIndex=G,t(s,_),y||h||(y=!0,b(S))),_},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(_){var z=p;return function(){var F=p;p=z;try{return _.apply(this,arguments)}finally{p=F}}}})(kp);wp.exports=kp;var mg=wp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg=$,at=mg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sp=new Set,xi={};function Vn(e,t){xr(e,t),xr(e+"Capture",t)}function xr(e,t){for(xi[e]=t,e=0;e<t.length;e++)Sp.add(t[e])}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,vg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nd={},rd={};function yg(e){return Zl.call(rd,e)?!0:Zl.call(nd,e)?!1:vg.test(e)?rd[e]=!0:(nd[e]=!0,!1)}function xg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wg(e,t,n,r){if(t===null||typeof t>"u"||xg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var _u=/[\-:]([a-z])/g;function ju(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_u,ju);Me[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_u,ju);Me[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_u,ju);Me[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function zu(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wg(t,n,i,r)&&(n=null),r||i===null?yg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),Mu=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),Ep=Symbol.for("react.provider"),bp=Symbol.for("react.context"),Pu=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),es=Symbol.for("react.suspense_list"),Fu=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),Np=Symbol.for("react.offscreen"),id=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,gl;function qr(e){if(gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gl=t&&t[1]||""}return`
`+gl+e}var vl=!1;function yl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qr(e):""}function kg(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=yl(e.type,!1),e;case 11:return e=yl(e.type.render,!1),e;case 1:return e=yl(e.type,!0),e;default:return""}}function ts(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case Xn:return"Portal";case Kl:return"Profiler";case Mu:return"StrictMode";case Jl:return"Suspense";case es:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bp:return(e.displayName||"Context")+".Consumer";case Ep:return(e._context.displayName||"Context")+".Provider";case Pu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fu:return t=e.displayName||null,t!==null?t:ts(e.type)||"Memo";case ln:t=e._payload,e=e._init;try{return ts(e(t))}catch{}}return null}function Sg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ts(t);case 8:return t===Mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Eg(e){var t=Cp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function io(e){e._valueTracker||(e._valueTracker=Eg(e))}function _p(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ns(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function od(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=En(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jp(e,t){t=t.checked,t!=null&&zu(e,"checked",t,!1)}function rs(e,t){jp(e,t);var n=En(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?is(e,t.type,n):t.hasOwnProperty("defaultValue")&&is(e,t.type,En(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ad(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function is(e,t,n){(t!=="number"||Yo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yr=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+En(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function os(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ld(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Yr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:En(n)}}function zp(e,t){var n=En(t.value),r=En(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function as(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oo,Pp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bg=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(e){bg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oi[t]=oi[e]})});function Fp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oi.hasOwnProperty(e)&&oi[e]?(""+t).trim():t+"px"}function Tp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ng=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ls(e,t){if(t){if(Ng[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function ss(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var us=null;function Tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cs=null,fr=null,pr=null;function ud(e){if(e=Yi(e)){if(typeof cs!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Za(t),cs(e.stateNode,e.type,t))}}function Ap(e){fr?pr?pr.push(e):pr=[e]:fr=e}function Rp(){if(fr){var e=fr,t=pr;if(pr=fr=null,ud(e),t)for(e=0;e<t.length;e++)ud(t[e])}}function Ip(e,t){return e(t)}function Op(){}var xl=!1;function Lp(e,t,n){if(xl)return e(t,n);xl=!0;try{return Ip(e,t,n)}finally{xl=!1,(fr!==null||pr!==null)&&(Op(),Rp())}}function ki(e,t){var n=e.stateNode;if(n===null)return null;var r=Za(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var ds=!1;if(Zt)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{ds=!1}function Cg(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ai=!1,Qo=null,Xo=!1,fs=null,_g={onError:function(e){ai=!0,Qo=e}};function jg(e,t,n,r,i,o,a,l,s){ai=!1,Qo=null,Cg.apply(_g,arguments)}function zg(e,t,n,r,i,o,a,l,s){if(jg.apply(this,arguments),ai){if(ai){var u=Qo;ai=!1,Qo=null}else throw Error(P(198));Xo||(Xo=!0,fs=u)}}function qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cd(e){if(qn(e)!==e)throw Error(P(188))}function Mg(e){var t=e.alternate;if(!t){if(t=qn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cd(i),e;if(o===r)return cd(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function $p(e){return e=Mg(e),e!==null?Up(e):null}function Up(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Up(e);if(t!==null)return t;e=e.sibling}return null}var Bp=at.unstable_scheduleCallback,dd=at.unstable_cancelCallback,Pg=at.unstable_shouldYield,Fg=at.unstable_requestPaint,ye=at.unstable_now,Tg=at.unstable_getCurrentPriorityLevel,Au=at.unstable_ImmediatePriority,Hp=at.unstable_UserBlockingPriority,Zo=at.unstable_NormalPriority,Ag=at.unstable_LowPriority,Wp=at.unstable_IdlePriority,qa=null,Rt=null;function Rg(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(qa,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Lg,Ig=Math.log,Og=Math.LN2;function Lg(e){return e>>>=0,e===0?32:31-(Ig(e)/Og|0)|0}var ao=64,lo=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ko(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Qr(l):(o&=a,o!==0&&(r=Qr(o)))}else a=n&~i,a!==0?r=Qr(a):o!==0&&(r=Qr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Dg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $g(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Nt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=Dg(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function ps(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gp(){var e=ao;return ao<<=1,!(ao&4194240)&&(ao=64),e}function wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function Ug(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ru(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function Vp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qp,Iu,Yp,Qp,Xp,hs=!1,so=[],mn=null,gn=null,vn=null,Si=new Map,Ei=new Map,dn=[],Bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Yi(t),t!==null&&Iu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hg(e,t,n,r,i){switch(t){case"focusin":return mn=Dr(mn,e,t,n,r,i),!0;case"dragenter":return gn=Dr(gn,e,t,n,r,i),!0;case"mouseover":return vn=Dr(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Si.set(o,Dr(Si.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ei.set(o,Dr(Ei.get(o)||null,e,t,n,r,i)),!0}return!1}function Zp(e){var t=Tn(e.target);if(t!==null){var n=qn(t);if(n!==null){if(t=n.tag,t===13){if(t=Dp(n),t!==null){e.blockedOn=t,Xp(e.priority,function(){Yp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ms(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);us=r,n.target.dispatchEvent(r),us=null}else return t=Yi(n),t!==null&&Iu(t),e.blockedOn=n,!1;t.shift()}return!0}function pd(e,t,n){Po(e)&&n.delete(t)}function Wg(){hs=!1,mn!==null&&Po(mn)&&(mn=null),gn!==null&&Po(gn)&&(gn=null),vn!==null&&Po(vn)&&(vn=null),Si.forEach(pd),Ei.forEach(pd)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,hs||(hs=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,Wg)))}function bi(e){function t(i){return $r(i,e)}if(0<so.length){$r(so[0],e);for(var n=1;n<so.length;n++){var r=so[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&$r(mn,e),gn!==null&&$r(gn,e),vn!==null&&$r(vn,e),Si.forEach(t),Ei.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)Zp(n),n.blockedOn===null&&dn.shift()}var hr=rn.ReactCurrentBatchConfig,Jo=!0;function Gg(e,t,n,r){var i=te,o=hr.transition;hr.transition=null;try{te=1,Ou(e,t,n,r)}finally{te=i,hr.transition=o}}function Vg(e,t,n,r){var i=te,o=hr.transition;hr.transition=null;try{te=4,Ou(e,t,n,r)}finally{te=i,hr.transition=o}}function Ou(e,t,n,r){if(Jo){var i=ms(e,t,n,r);if(i===null)Ml(e,t,r,ea,n),fd(e,r);else if(Hg(i,e,t,n,r))r.stopPropagation();else if(fd(e,r),t&4&&-1<Bg.indexOf(e)){for(;i!==null;){var o=Yi(i);if(o!==null&&qp(o),o=ms(e,t,n,r),o===null&&Ml(e,t,r,ea,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ml(e,t,r,null,n)}}var ea=null;function ms(e,t,n,r){if(ea=null,e=Tu(r),e=Tn(e),e!==null)if(t=qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ea=e,null}function Kp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tg()){case Au:return 1;case Hp:return 4;case Zo:case Ag:return 16;case Wp:return 536870912;default:return 16}default:return 16}}var pn=null,Lu=null,Fo=null;function Jp(){if(Fo)return Fo;var e,t=Lu,n=t.length,r,i="value"in pn?pn.value:pn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Fo=i.slice(e,1<r?1-r:void 0)}function To(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uo(){return!0}function hd(){return!1}function st(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?uo:hd,this.isPropagationStopped=hd,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Du=st(Tr),qi=fe({},Tr,{view:0,detail:0}),qg=st(qi),kl,Sl,Ur,Ya=fe({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(kl=e.screenX-Ur.screenX,Sl=e.screenY-Ur.screenY):Sl=kl=0,Ur=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),md=st(Ya),Yg=fe({},Ya,{dataTransfer:0}),Qg=st(Yg),Xg=fe({},qi,{relatedTarget:0}),El=st(Xg),Zg=fe({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kg=st(Zg),Jg=fe({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ev=st(Jg),tv=fe({},Tr,{data:0}),gd=st(tv),nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ov(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=iv[e])?!!t[e]:!1}function $u(){return ov}var av=fe({},qi,{key:function(e){if(e.key){var t=nv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=To(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(e){return e.type==="keypress"?To(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?To(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lv=st(av),sv=fe({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=st(sv),uv=fe({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),cv=st(uv),dv=fe({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=st(dv),pv=fe({},Ya,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hv=st(pv),mv=[9,13,27,32],Uu=Zt&&"CompositionEvent"in window,li=null;Zt&&"documentMode"in document&&(li=document.documentMode);var gv=Zt&&"TextEvent"in window&&!li,eh=Zt&&(!Uu||li&&8<li&&11>=li),yd=" ",xd=!1;function th(e,t){switch(e){case"keyup":return mv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function vv(e,t){switch(e){case"compositionend":return nh(t);case"keypress":return t.which!==32?null:(xd=!0,yd);case"textInput":return e=t.data,e===yd&&xd?null:e;default:return null}}function yv(e,t){if(Kn)return e==="compositionend"||!Uu&&th(e,t)?(e=Jp(),Fo=Lu=pn=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eh&&t.locale!=="ko"?null:t.data;default:return null}}var xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xv[e.type]:t==="textarea"}function rh(e,t,n,r){Ap(r),t=ta(t,"onChange"),0<t.length&&(n=new Du("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var si=null,Ni=null;function wv(e){hh(e,0)}function Qa(e){var t=tr(e);if(_p(t))return e}function kv(e,t){if(e==="change")return t}var ih=!1;if(Zt){var bl;if(Zt){var Nl="oninput"in document;if(!Nl){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),Nl=typeof kd.oninput=="function"}bl=Nl}else bl=!1;ih=bl&&(!document.documentMode||9<document.documentMode)}function Sd(){si&&(si.detachEvent("onpropertychange",oh),Ni=si=null)}function oh(e){if(e.propertyName==="value"&&Qa(Ni)){var t=[];rh(t,Ni,e,Tu(e)),Lp(wv,t)}}function Sv(e,t,n){e==="focusin"?(Sd(),si=t,Ni=n,si.attachEvent("onpropertychange",oh)):e==="focusout"&&Sd()}function Ev(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qa(Ni)}function bv(e,t){if(e==="click")return Qa(t)}function Nv(e,t){if(e==="input"||e==="change")return Qa(t)}function Cv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:Cv;function Ci(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zl.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function Ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bd(e,t){var n=Ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ed(n)}}function ah(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ah(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lh(){for(var e=window,t=Yo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yo(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _v(e){var t=lh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ah(n.ownerDocument.documentElement,n)){if(r!==null&&Bu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=bd(n,o);var a=bd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jv=Zt&&"documentMode"in document&&11>=document.documentMode,Jn=null,gs=null,ui=null,vs=!1;function Nd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vs||Jn==null||Jn!==Yo(r)||(r=Jn,"selectionStart"in r&&Bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&Ci(ui,r)||(ui=r,r=ta(gs,"onSelect"),0<r.length&&(t=new Du("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function co(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Cl={},sh={};Zt&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Xa(e){if(Cl[e])return Cl[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sh)return Cl[e]=t[n];return e}var uh=Xa("animationend"),ch=Xa("animationiteration"),dh=Xa("animationstart"),fh=Xa("transitionend"),ph=new Map,Cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){ph.set(e,t),Vn(t,[e])}for(var _l=0;_l<Cd.length;_l++){var jl=Cd[_l],zv=jl.toLowerCase(),Mv=jl[0].toUpperCase()+jl.slice(1);Nn(zv,"on"+Mv)}Nn(uh,"onAnimationEnd");Nn(ch,"onAnimationIteration");Nn(dh,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(fh,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function _d(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zg(r,t,void 0,e),e.currentTarget=null}function hh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;_d(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;_d(i,l,u),o=s}}}if(Xo)throw e=fs,Xo=!1,fs=null,e}function oe(e,t){var n=t[Ss];n===void 0&&(n=t[Ss]=new Set);var r=e+"__bubble";n.has(r)||(mh(t,e,2,!1),n.add(r))}function zl(e,t,n){var r=0;t&&(r|=4),mh(n,e,r,t)}var fo="_reactListening"+Math.random().toString(36).slice(2);function _i(e){if(!e[fo]){e[fo]=!0,Sp.forEach(function(n){n!=="selectionchange"&&(Pv.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fo]||(t[fo]=!0,zl("selectionchange",!1,t))}}function mh(e,t,n,r){switch(Kp(t)){case 1:var i=Gg;break;case 4:i=Vg;break;default:i=Ou}n=i.bind(null,t,n,e),i=void 0,!ds||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ml(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Tn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Lp(function(){var u=o,c=Tu(n),f=[];e:{var p=ph.get(e);if(p!==void 0){var h=Du,y=e;switch(e){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":h=lv;break;case"focusin":y="focus",h=El;break;case"focusout":y="blur",h=El;break;case"beforeblur":case"afterblur":h=El;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=cv;break;case uh:case ch:case dh:h=Kg;break;case fh:h=fv;break;case"scroll":h=qg;break;case"wheel":h=hv;break;case"copy":case"cut":case"paste":h=ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=vd}var w=(t&4)!==0,N=!w&&e==="scroll",m=w?p!==null?p+"Capture":null:p;w=[];for(var v=u,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=ki(v,m),x!=null&&w.push(ji(v,x,g)))),N)break;v=v.return}0<w.length&&(p=new h(p,y,null,n,c),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==us&&(y=n.relatedTarget||n.fromElement)&&(Tn(y)||y[Kt]))break e;if((h||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?Tn(y):null,y!==null&&(N=qn(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(w=md,x="onMouseLeave",m="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(w=vd,x="onPointerLeave",m="onPointerEnter",v="pointer"),N=h==null?p:tr(h),g=y==null?p:tr(y),p=new w(x,v+"leave",h,n,c),p.target=N,p.relatedTarget=g,x=null,Tn(c)===u&&(w=new w(m,v+"enter",y,n,c),w.target=g,w.relatedTarget=N,x=w),N=x,h&&y)t:{for(w=h,m=y,v=0,g=w;g;g=Yn(g))v++;for(g=0,x=m;x;x=Yn(x))g++;for(;0<v-g;)w=Yn(w),v--;for(;0<g-v;)m=Yn(m),g--;for(;v--;){if(w===m||m!==null&&w===m.alternate)break t;w=Yn(w),m=Yn(m)}w=null}else w=null;h!==null&&jd(f,p,h,w,!1),y!==null&&N!==null&&jd(f,N,y,w,!0)}}e:{if(p=u?tr(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var S=kv;else if(wd(p))if(ih)S=Nv;else{S=Ev;var C=Sv}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=bv);if(S&&(S=S(e,u))){rh(f,S,n,c);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&is(p,"number",p.value)}switch(C=u?tr(u):window,e){case"focusin":(wd(C)||C.contentEditable==="true")&&(Jn=C,gs=u,ui=null);break;case"focusout":ui=gs=Jn=null;break;case"mousedown":vs=!0;break;case"contextmenu":case"mouseup":case"dragend":vs=!1,Nd(f,n,c);break;case"selectionchange":if(jv)break;case"keydown":case"keyup":Nd(f,n,c)}var j;if(Uu)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Kn?th(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(eh&&n.locale!=="ko"&&(Kn||M!=="onCompositionStart"?M==="onCompositionEnd"&&Kn&&(j=Jp()):(pn=c,Lu="value"in pn?pn.value:pn.textContent,Kn=!0)),C=ta(u,M),0<C.length&&(M=new gd(M,e,null,n,c),f.push({event:M,listeners:C}),j?M.data=j:(j=nh(n),j!==null&&(M.data=j)))),(j=gv?vv(e,n):yv(e,n))&&(u=ta(u,"onBeforeInput"),0<u.length&&(c=new gd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=j))}hh(f,t)})}function ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ki(e,n),o!=null&&r.unshift(ji(e,o,i)),o=ki(e,t),o!=null&&r.push(ji(e,o,i))),e=e.return}return r}function Yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ki(n,o),s!=null&&a.unshift(ji(n,s,l))):i||(s=ki(n,o),s!=null&&a.push(ji(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Fv=/\r\n?/g,Tv=/\u0000|\uFFFD/g;function zd(e){return(typeof e=="string"?e:""+e).replace(Fv,`
`).replace(Tv,"")}function po(e,t,n){if(t=zd(t),zd(e)!==t&&n)throw Error(P(425))}function na(){}var ys=null,xs=null;function ws(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ks=typeof setTimeout=="function"?setTimeout:void 0,Av=typeof clearTimeout=="function"?clearTimeout:void 0,Md=typeof Promise=="function"?Promise:void 0,Rv=typeof queueMicrotask=="function"?queueMicrotask:typeof Md<"u"?function(e){return Md.resolve(null).then(e).catch(Iv)}:ks;function Iv(e){setTimeout(function(){throw e})}function Pl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),bi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bi(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Ar,zi="__reactProps$"+Ar,Kt="__reactContainer$"+Ar,Ss="__reactEvents$"+Ar,Ov="__reactListeners$"+Ar,Lv="__reactHandles$"+Ar;function Tn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pd(e);e!==null;){if(n=e[Pt])return n;e=Pd(e)}return t}e=n,n=e.parentNode}return null}function Yi(e){return e=e[Pt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Za(e){return e[zi]||null}var Es=[],nr=-1;function Cn(e){return{current:e}}function ae(e){0>nr||(e.current=Es[nr],Es[nr]=null,nr--)}function ie(e,t){nr++,Es[nr]=e.current,e.current=t}var bn={},Re=Cn(bn),Qe=Cn(!1),Ln=bn;function wr(e,t){var n=e.type.contextTypes;if(!n)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function ra(){ae(Qe),ae(Re)}function Fd(e,t,n){if(Re.current!==bn)throw Error(P(168));ie(Re,t),ie(Qe,n)}function gh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Sg(e)||"Unknown",i));return fe({},n,r)}function ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,Ln=Re.current,ie(Re,e),ie(Qe,Qe.current),!0}function Td(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=gh(e,t,Ln),r.__reactInternalMemoizedMergedChildContext=e,ae(Qe),ae(Re),ie(Re,e)):ae(Qe),ie(Qe,n)}var Ht=null,Ka=!1,Fl=!1;function vh(e){Ht===null?Ht=[e]:Ht.push(e)}function Dv(e){Ka=!0,vh(e)}function _n(){if(!Fl&&Ht!==null){Fl=!0;var e=0,t=te;try{var n=Ht;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,Ka=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(e+1)),Bp(Au,_n),i}finally{te=t,Fl=!1}}return null}var rr=[],ir=0,oa=null,aa=0,ct=[],dt=0,Dn=null,qt=1,Yt="";function Mn(e,t){rr[ir++]=aa,rr[ir++]=oa,oa=e,aa=t}function yh(e,t,n){ct[dt++]=qt,ct[dt++]=Yt,ct[dt++]=Dn,Dn=e;var r=qt;e=Yt;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var o=32-Nt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,qt=1<<32-Nt(t)+i|n<<i|r,Yt=o+e}else qt=1<<o|n<<i|r,Yt=e}function Hu(e){e.return!==null&&(Mn(e,1),yh(e,1,0))}function Wu(e){for(;e===oa;)oa=rr[--ir],rr[ir]=null,aa=rr[--ir],rr[ir]=null;for(;e===Dn;)Dn=ct[--dt],ct[dt]=null,Yt=ct[--dt],ct[dt]=null,qt=ct[--dt],ct[dt]=null}var ot=null,rt=null,le=!1,St=null;function xh(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ad(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,rt=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dn!==null?{id:qt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,rt=null,!0):!1;default:return!1}}function bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ns(e){if(le){var t=rt;if(t){var n=t;if(!Ad(e,t)){if(bs(e))throw Error(P(418));t=yn(n.nextSibling);var r=ot;t&&Ad(e,t)?xh(r,n):(e.flags=e.flags&-4097|2,le=!1,ot=e)}}else{if(bs(e))throw Error(P(418));e.flags=e.flags&-4097|2,le=!1,ot=e}}}function Rd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function ho(e){if(e!==ot)return!1;if(!le)return Rd(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ws(e.type,e.memoizedProps)),t&&(t=rt)){if(bs(e))throw wh(),Error(P(418));for(;t;)xh(e,t),t=yn(t.nextSibling)}if(Rd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=ot?yn(e.stateNode.nextSibling):null;return!0}function wh(){for(var e=rt;e;)e=yn(e.nextSibling)}function kr(){rt=ot=null,le=!1}function Gu(e){St===null?St=[e]:St.push(e)}var $v=rn.ReactCurrentBatchConfig;function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function mo(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Id(e){var t=e._init;return t(e._payload)}function kh(e){function t(m,v){if(e){var g=m.deletions;g===null?(m.deletions=[v],m.flags|=16):g.push(v)}}function n(m,v){if(!e)return null;for(;v!==null;)t(m,v),v=v.sibling;return null}function r(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function i(m,v){return m=Sn(m,v),m.index=0,m.sibling=null,m}function o(m,v,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<v?(m.flags|=2,v):g):(m.flags|=2,v)):(m.flags|=1048576,v)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,v,g,x){return v===null||v.tag!==6?(v=Dl(g,m.mode,x),v.return=m,v):(v=i(v,g),v.return=m,v)}function s(m,v,g,x){var S=g.type;return S===Zn?c(m,v,g.props.children,x,g.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ln&&Id(S)===v.type)?(x=i(v,g.props),x.ref=Br(m,v,g),x.return=m,x):(x=$o(g.type,g.key,g.props,null,m.mode,x),x.ref=Br(m,v,g),x.return=m,x)}function u(m,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=$l(g,m.mode,x),v.return=m,v):(v=i(v,g.children||[]),v.return=m,v)}function c(m,v,g,x,S){return v===null||v.tag!==7?(v=On(g,m.mode,x,S),v.return=m,v):(v=i(v,g),v.return=m,v)}function f(m,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Dl(""+v,m.mode,g),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ro:return g=$o(v.type,v.key,v.props,null,m.mode,g),g.ref=Br(m,null,v),g.return=m,g;case Xn:return v=$l(v,m.mode,g),v.return=m,v;case ln:var x=v._init;return f(m,x(v._payload),g)}if(Yr(v)||Or(v))return v=On(v,m.mode,g,null),v.return=m,v;mo(m,v)}return null}function p(m,v,g,x){var S=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:l(m,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ro:return g.key===S?s(m,v,g,x):null;case Xn:return g.key===S?u(m,v,g,x):null;case ln:return S=g._init,p(m,v,S(g._payload),x)}if(Yr(g)||Or(g))return S!==null?null:c(m,v,g,x,null);mo(m,g)}return null}function h(m,v,g,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,l(v,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ro:return m=m.get(x.key===null?g:x.key)||null,s(v,m,x,S);case Xn:return m=m.get(x.key===null?g:x.key)||null,u(v,m,x,S);case ln:var C=x._init;return h(m,v,g,C(x._payload),S)}if(Yr(x)||Or(x))return m=m.get(g)||null,c(v,m,x,S,null);mo(v,x)}return null}function y(m,v,g,x){for(var S=null,C=null,j=v,M=v=0,L=null;j!==null&&M<g.length;M++){j.index>M?(L=j,j=null):L=j.sibling;var A=p(m,j,g[M],x);if(A===null){j===null&&(j=L);break}e&&j&&A.alternate===null&&t(m,j),v=o(A,v,M),C===null?S=A:C.sibling=A,C=A,j=L}if(M===g.length)return n(m,j),le&&Mn(m,M),S;if(j===null){for(;M<g.length;M++)j=f(m,g[M],x),j!==null&&(v=o(j,v,M),C===null?S=j:C.sibling=j,C=j);return le&&Mn(m,M),S}for(j=r(m,j);M<g.length;M++)L=h(j,m,M,g[M],x),L!==null&&(e&&L.alternate!==null&&j.delete(L.key===null?M:L.key),v=o(L,v,M),C===null?S=L:C.sibling=L,C=L);return e&&j.forEach(function(D){return t(m,D)}),le&&Mn(m,M),S}function w(m,v,g,x){var S=Or(g);if(typeof S!="function")throw Error(P(150));if(g=S.call(g),g==null)throw Error(P(151));for(var C=S=null,j=v,M=v=0,L=null,A=g.next();j!==null&&!A.done;M++,A=g.next()){j.index>M?(L=j,j=null):L=j.sibling;var D=p(m,j,A.value,x);if(D===null){j===null&&(j=L);break}e&&j&&D.alternate===null&&t(m,j),v=o(D,v,M),C===null?S=D:C.sibling=D,C=D,j=L}if(A.done)return n(m,j),le&&Mn(m,M),S;if(j===null){for(;!A.done;M++,A=g.next())A=f(m,A.value,x),A!==null&&(v=o(A,v,M),C===null?S=A:C.sibling=A,C=A);return le&&Mn(m,M),S}for(j=r(m,j);!A.done;M++,A=g.next())A=h(j,m,M,A.value,x),A!==null&&(e&&A.alternate!==null&&j.delete(A.key===null?M:A.key),v=o(A,v,M),C===null?S=A:C.sibling=A,C=A);return e&&j.forEach(function(q){return t(m,q)}),le&&Mn(m,M),S}function N(m,v,g,x){if(typeof g=="object"&&g!==null&&g.type===Zn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ro:e:{for(var S=g.key,C=v;C!==null;){if(C.key===S){if(S=g.type,S===Zn){if(C.tag===7){n(m,C.sibling),v=i(C,g.props.children),v.return=m,m=v;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ln&&Id(S)===C.type){n(m,C.sibling),v=i(C,g.props),v.ref=Br(m,C,g),v.return=m,m=v;break e}n(m,C);break}else t(m,C);C=C.sibling}g.type===Zn?(v=On(g.props.children,m.mode,x,g.key),v.return=m,m=v):(x=$o(g.type,g.key,g.props,null,m.mode,x),x.ref=Br(m,v,g),x.return=m,m=x)}return a(m);case Xn:e:{for(C=g.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(m,v.sibling),v=i(v,g.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else t(m,v);v=v.sibling}v=$l(g,m.mode,x),v.return=m,m=v}return a(m);case ln:return C=g._init,N(m,v,C(g._payload),x)}if(Yr(g))return y(m,v,g,x);if(Or(g))return w(m,v,g,x);mo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(m,v.sibling),v=i(v,g),v.return=m,m=v):(n(m,v),v=Dl(g,m.mode,x),v.return=m,m=v),a(m)):n(m,v)}return N}var Sr=kh(!0),Sh=kh(!1),la=Cn(null),sa=null,or=null,Vu=null;function qu(){Vu=or=sa=null}function Yu(e){var t=la.current;ae(la),e._currentValue=t}function Cs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mr(e,t){sa=e,Vu=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ye=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Vu!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(sa===null)throw Error(P(308));or=e,sa.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var An=null;function Qu(e){An===null?An=[e]:An.push(e)}function Eh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Qu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Jt(e,r)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Jt(e,n)}return i=r.interleaved,i===null?(t.next=t,Qu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Jt(e,n)}function Ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}function Od(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ua(e,t,n,r){var i=e.updateQueue;sn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;a=0,c=u=s=null,l=o;do{var p=l.lane,h=l.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(p=t,h=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(h,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(h,f,p):y,p==null)break e;f=fe({},f,p);break e;case 2:sn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else h={eventTime:h,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=h,s=f):c=c.next=h,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Un|=a,e.lanes=a,e.memoizedState=f}}function Ld(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Qi={},It=Cn(Qi),Mi=Cn(Qi),Pi=Cn(Qi);function Rn(e){if(e===Qi)throw Error(P(174));return e}function Zu(e,t){switch(ie(Pi,t),ie(Mi,e),ie(It,Qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:as(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=as(t,e)}ae(It),ie(It,t)}function Er(){ae(It),ae(Mi),ae(Pi)}function Nh(e){Rn(Pi.current);var t=Rn(It.current),n=as(t,e.type);t!==n&&(ie(Mi,e),ie(It,n))}function Ku(e){Mi.current===e&&(ae(It),ae(Mi))}var ue=Cn(0);function ca(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Tl=[];function Ju(){for(var e=0;e<Tl.length;e++)Tl[e]._workInProgressVersionPrimary=null;Tl.length=0}var Ro=rn.ReactCurrentDispatcher,Al=rn.ReactCurrentBatchConfig,$n=0,de=null,ke=null,be=null,da=!1,ci=!1,Fi=0,Uv=0;function Pe(){throw Error(P(321))}function ec(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function tc(e,t,n,r,i,o){if($n=o,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?Gv:Vv,e=n(r,i),ci){o=0;do{if(ci=!1,Fi=0,25<=o)throw Error(P(301));o+=1,be=ke=null,t.updateQueue=null,Ro.current=qv,e=n(r,i)}while(ci)}if(Ro.current=fa,t=ke!==null&&ke.next!==null,$n=0,be=ke=de=null,da=!1,t)throw Error(P(300));return e}function nc(){var e=Fi!==0;return Fi=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?de.memoizedState=be=e:be=be.next=e,be}function vt(){if(ke===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=be===null?de.memoizedState:be.next;if(t!==null)be=t,ke=e;else{if(e===null)throw Error(P(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},be===null?de.memoizedState=be=e:be=be.next=e}return be}function Ti(e,t){return typeof t=="function"?t(e):t}function Rl(e){var t=vt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if(($n&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,de.lanes|=c,Un|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,_t(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,de.lanes|=o,Un|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Il(e){var t=vt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);_t(o,t.memoizedState)||(Ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ch(){}function _h(e,t){var n=de,r=vt(),i=t(),o=!_t(r.memoizedState,i);if(o&&(r.memoizedState=i,Ye=!0),r=r.queue,rc(Mh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Ai(9,zh.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(P(349));$n&30||jh(n,t,i)}return i}function jh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zh(e,t,n,r){t.value=n,t.getSnapshot=r,Ph(t)&&Fh(e)}function Mh(e,t,n){return n(function(){Ph(t)&&Fh(e)})}function Ph(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function Fh(e){var t=Jt(e,1);t!==null&&Ct(t,e,1,-1)}function Dd(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:e},t.queue=e,e=e.dispatch=Wv.bind(null,de,e),[t.memoizedState,e]}function Ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Th(){return vt().memoizedState}function Io(e,t,n,r){var i=Mt();de.flags|=e,i.memoizedState=Ai(1|t,n,void 0,r===void 0?null:r)}function Ja(e,t,n,r){var i=vt();r=r===void 0?null:r;var o=void 0;if(ke!==null){var a=ke.memoizedState;if(o=a.destroy,r!==null&&ec(r,a.deps)){i.memoizedState=Ai(t,n,o,r);return}}de.flags|=e,i.memoizedState=Ai(1|t,n,o,r)}function $d(e,t){return Io(8390656,8,e,t)}function rc(e,t){return Ja(2048,8,e,t)}function Ah(e,t){return Ja(4,2,e,t)}function Rh(e,t){return Ja(4,4,e,t)}function Ih(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Oh(e,t,n){return n=n!=null?n.concat([e]):null,Ja(4,4,Ih.bind(null,t,e),n)}function ic(){}function Lh(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ec(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dh(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ec(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $h(e,t,n){return $n&21?(_t(n,t)||(n=Gp(),de.lanes|=n,Un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n)}function Bv(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{te=n,Al.transition=r}}function Uh(){return vt().memoizedState}function Hv(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bh(e))Hh(t,n);else if(n=Eh(e,t,n,r),n!==null){var i=$e();Ct(n,e,r,i),Wh(n,t,r)}}function Wv(e,t,n){var r=kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bh(e))Hh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,_t(l,a)){var s=t.interleaved;s===null?(i.next=i,Qu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Eh(e,t,i,r),n!==null&&(i=$e(),Ct(n,e,r,i),Wh(n,t,r))}}function Bh(e){var t=e.alternate;return e===de||t!==null&&t===de}function Hh(e,t){ci=da=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}var fa={readContext:gt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Gv={readContext:gt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:$d,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Io(4194308,4,Ih.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Io(4194308,4,e,t)},useInsertionEffect:function(e,t){return Io(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hv.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Dd,useDebugValue:ic,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Dd(!1),t=e[0];return e=Bv.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=Mt();if(le){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ne===null)throw Error(P(349));$n&30||jh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,$d(Mh.bind(null,r,o,e),[e]),r.flags|=2048,Ai(9,zh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Ne.identifierPrefix;if(le){var n=Yt,r=qt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Uv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vv={readContext:gt,useCallback:Lh,useContext:gt,useEffect:rc,useImperativeHandle:Oh,useInsertionEffect:Ah,useLayoutEffect:Rh,useMemo:Dh,useReducer:Rl,useRef:Th,useState:function(){return Rl(Ti)},useDebugValue:ic,useDeferredValue:function(e){var t=vt();return $h(t,ke.memoizedState,e)},useTransition:function(){var e=Rl(Ti)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Ch,useSyncExternalStore:_h,useId:Uh,unstable_isNewReconciler:!1},qv={readContext:gt,useCallback:Lh,useContext:gt,useEffect:rc,useImperativeHandle:Oh,useInsertionEffect:Ah,useLayoutEffect:Rh,useMemo:Dh,useReducer:Il,useRef:Th,useState:function(){return Il(Ti)},useDebugValue:ic,useDeferredValue:function(e){var t=vt();return ke===null?t.memoizedState=e:$h(t,ke.memoizedState,e)},useTransition:function(){var e=Il(Ti)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Ch,useSyncExternalStore:_h,useId:Uh,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _s(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var el={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),i=kn(e),o=Xt(r,i);o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(Ct(t,e,i,r),Ao(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),i=kn(e),o=Xt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(Ct(t,e,i,r),Ao(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=kn(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(Ct(t,e,r,n),Ao(t,e,r))}};function Ud(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ci(n,r)||!Ci(i,o):!0}function Gh(e,t,n){var r=!1,i=bn,o=t.contextType;return typeof o=="object"&&o!==null?o=gt(o):(i=Xe(t)?Ln:Re.current,r=t.contextTypes,o=(r=r!=null)?wr(e,i):bn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=el,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&el.enqueueReplaceState(t,t.state,null)}function js(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Xu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gt(o):(o=Xe(t)?Ln:Re.current,i.context=wr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_s(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&el.enqueueReplaceState(i,i.state,null),ua(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function br(e,t){try{var n="",r=t;do n+=kg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yv=typeof WeakMap=="function"?WeakMap:Map;function Vh(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ha||(ha=!0,Ds=r),zs(e,t)},n}function qh(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){zs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zs(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Hd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=s1.bind(null,e,t,n),t.then(e,e))}function Wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var Qv=rn.ReactCurrentOwner,Ye=!1;function Ie(e,t,n,r){t.child=e===null?Sh(t,null,n,r):Sr(t,e.child,n,r)}function Vd(e,t,n,r,i){n=n.render;var o=t.ref;return mr(t,i),r=tc(e,t,n,r,o,i),n=nc(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(le&&n&&Hu(t),t.flags|=1,Ie(e,t,r,i),t.child)}function qd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!fc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Yh(e,t,o,r,i)):(e=$o(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ci,n(a,r)&&e.ref===t.ref)return en(e,t,i)}return t.flags|=1,e=Sn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Yh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ci(o,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,en(e,t,i)}return Ms(e,t,n,r,i)}function Qh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(lr,et),et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(lr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ie(lr,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ie(lr,et),et|=r;return Ie(e,t,i,n),t.child}function Xh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ms(e,t,n,r,i){var o=Xe(n)?Ln:Re.current;return o=wr(t,o),mr(t,i),n=tc(e,t,n,r,o,i),r=nc(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(le&&r&&Hu(t),t.flags|=1,Ie(e,t,n,i),t.child)}function Yd(e,t,n,r,i){if(Xe(n)){var o=!0;ia(t)}else o=!1;if(mr(t,i),t.stateNode===null)Oo(e,t),Gh(t,n,r),js(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=Xe(n)?Ln:Re.current,u=wr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Bd(t,a,r,u),sn=!1;var p=t.memoizedState;a.state=p,ua(t,r,a,i),s=t.memoizedState,l!==r||p!==s||Qe.current||sn?(typeof c=="function"&&(_s(t,n,c,r),s=t.memoizedState),(l=sn||Ud(t,n,l,r,p,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,bh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:wt(t.type,l),a.props=u,f=t.pendingProps,p=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=gt(s):(s=Xe(n)?Ln:Re.current,s=wr(t,s));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==s)&&Bd(t,a,r,s),sn=!1,p=t.memoizedState,a.state=p,ua(t,r,a,i);var y=t.memoizedState;l!==f||p!==y||Qe.current||sn?(typeof h=="function"&&(_s(t,n,h,r),y=t.memoizedState),(u=sn||Ud(t,n,u,r,p,y,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ps(e,t,n,r,o,i)}function Ps(e,t,n,r,i,o){Xh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Td(t,n,!1),en(e,t,o);r=t.stateNode,Qv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Sr(t,e.child,null,o),t.child=Sr(t,null,l,o)):Ie(e,t,l,o),t.memoizedState=r.state,i&&Td(t,n,!0),t.child}function Zh(e){var t=e.stateNode;t.pendingContext?Fd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fd(e,t.context,!1),Zu(e,t.containerInfo)}function Qd(e,t,n,r,i){return kr(),Gu(i),t.flags|=256,Ie(e,t,n,r),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0};function Ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kh(e,t,n){var r=t.pendingProps,i=ue.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(ue,i&1),e===null)return Ns(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=rl(a,r,0,null),e=On(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ts(n),t.memoizedState=Fs,e):oc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Xv(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Sn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Sn(l,o):(o=On(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ts(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Fs,r}return o=e.child,e=o.sibling,r=Sn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function oc(e,t){return t=rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function go(e,t,n,r){return r!==null&&Gu(r),Sr(t,e.child,null,n),e=oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ol(Error(P(422))),go(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=rl({mode:"visible",children:r.children},i,0,null),o=On(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Sr(t,e.child,null,a),t.child.memoizedState=Ts(a),t.memoizedState=Fs,o);if(!(t.mode&1))return go(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(P(419)),r=Ol(o,r,void 0),go(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ye||l){if(r=Ne,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jt(e,i),Ct(r,e,i,-1))}return dc(),r=Ol(Error(P(421))),go(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=u1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,rt=yn(i.nextSibling),ot=t,le=!0,St=null,e!==null&&(ct[dt++]=qt,ct[dt++]=Yt,ct[dt++]=Dn,qt=e.id,Yt=e.overflow,Dn=t),t=oc(t,r.children),t.flags|=4096,t)}function Xd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cs(e.return,t,n)}function Ll(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ie(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xd(e,n,t);else if(e.tag===19)Xd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ca(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ll(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ca(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ll(t,!0,n,null,o);break;case"together":Ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zv(e,t,n){switch(t.tag){case 3:Zh(t),kr();break;case 5:Nh(t);break;case 1:Xe(t.type)&&ia(t);break;case 4:Zu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(la,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?Kh(e,t,n):(ie(ue,ue.current&1),e=en(e,t,n),e!==null?e.sibling:null);ie(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Qh(e,t,n)}return en(e,t,n)}var em,As,tm,nm;em=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};As=function(){};tm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rn(It.current);var o=null;switch(n){case"input":i=ns(e,i),r=ns(e,r),o=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),o=[];break;case"textarea":i=os(e,i),r=os(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=na)}ls(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&oe("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};nm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kv(e,t,n){var r=t.pendingProps;switch(Wu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Xe(t.type)&&ra(),Fe(t),null;case 3:return r=t.stateNode,Er(),ae(Qe),ae(Re),Ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ho(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(Bs(St),St=null))),As(e,t),Fe(t),null;case 5:Ku(t);var i=Rn(Pi.current);if(n=t.type,e!==null&&t.stateNode!=null)tm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Fe(t),null}if(e=Rn(It.current),ho(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pt]=t,r[zi]=o,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Xr.length;i++)oe(Xr[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":od(r,o),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},oe("invalid",r);break;case"textarea":ld(r,o),oe("invalid",r)}ls(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&po(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&po(r.textContent,l,e),i=["children",""+l]):xi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&oe("scroll",r)}switch(n){case"input":io(r),ad(r,o,!0);break;case"textarea":io(r),sd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=na)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Pt]=t,e[zi]=r,em(e,t,!1,!1),t.stateNode=e;e:{switch(a=ss(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xr.length;i++)oe(Xr[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":od(e,r),i=ns(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":ld(e,r),i=os(e,r),oe("invalid",e);break;default:i=r}ls(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Tp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Pp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&wi(e,s):typeof s=="number"&&wi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&oe("scroll",e):s!=null&&zu(e,o,s,a))}switch(n){case"input":io(e),ad(e,r,!1);break;case"textarea":io(e),sd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dr(e,!!r.multiple,o,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=na)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)nm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Rn(Pi.current),Rn(It.current),ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(o=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:po(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Fe(t),null;case 13:if(ae(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&rt!==null&&t.mode&1&&!(t.flags&128))wh(),kr(),t.flags|=98560,o=!1;else if(o=ho(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[Pt]=t}else kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),o=!1}else St!==null&&(Bs(St),St=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?Se===0&&(Se=3):dc())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return Er(),As(e,t),e===null&&_i(t.stateNode.containerInfo),Fe(t),null;case 10:return Yu(t.type._context),Fe(t),null;case 17:return Xe(t.type)&&ra(),Fe(t),null;case 19:if(ae(ue),o=t.memoizedState,o===null)return Fe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Hr(o,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ca(e),a!==null){for(t.flags|=128,Hr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ue,ue.current&1|2),t.child}e=e.sibling}o.tail!==null&&ye()>Nr&&(t.flags|=128,r=!0,Hr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ca(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!le)return Fe(t),null}else 2*ye()-o.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,Hr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ye(),t.sibling=null,n=ue.current,ie(ue,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return cc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Jv(e,t){switch(Wu(t),t.tag){case 1:return Xe(t.type)&&ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),ae(Qe),ae(Re),Ju(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ku(t),null;case 13:if(ae(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ue),null;case 4:return Er(),null;case 10:return Yu(t.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var vo=!1,Te=!1,e1=typeof WeakSet=="function"?WeakSet:Set,O=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function Rs(e,t,n){try{n()}catch(r){he(e,t,r)}}var Zd=!1;function t1(e,t){if(ys=Jo,e=lh(),Bu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++c===r&&(s=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(xs={focusedElem:e,selectionRange:n},Jo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,N=y.memoizedState,m=t.stateNode,v=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:wt(t.type,w),N);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){he(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=Zd,Zd=!1,y}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Rs(t,n,o)}i=i.next}while(i!==r)}}function tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Is(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rm(e){var t=e.alternate;t!==null&&(e.alternate=null,rm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[zi],delete t[Ss],delete t[Ov],delete t[Lv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function im(e){return e.tag===5||e.tag===3||e.tag===4}function Kd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||im(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=na));else if(r!==4&&(e=e.child,e!==null))for(Os(e,t,n),e=e.sibling;e!==null;)Os(e,t,n),e=e.sibling}function Ls(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ls(e,t,n),e=e.sibling;e!==null;)Ls(e,t,n),e=e.sibling}var _e=null,kt=!1;function an(e,t,n){for(n=n.child;n!==null;)om(e,t,n),n=n.sibling}function om(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(qa,n)}catch{}switch(n.tag){case 5:Te||ar(n,t);case 6:var r=_e,i=kt;_e=null,an(e,t,n),_e=r,kt=i,_e!==null&&(kt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(kt?(e=_e,n=n.stateNode,e.nodeType===8?Pl(e.parentNode,n):e.nodeType===1&&Pl(e,n),bi(e)):Pl(_e,n.stateNode));break;case 4:r=_e,i=kt,_e=n.stateNode.containerInfo,kt=!0,an(e,t,n),_e=r,kt=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Rs(n,t,a),i=i.next}while(i!==r)}an(e,t,n);break;case 1:if(!Te&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}an(e,t,n);break;case 21:an(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,an(e,t,n),Te=r):an(e,t,n);break;default:an(e,t,n)}}function Jd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new e1),t.forEach(function(r){var i=c1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,kt=!1;break e;case 3:_e=l.stateNode.containerInfo,kt=!0;break e;case 4:_e=l.stateNode.containerInfo,kt=!0;break e}l=l.return}if(_e===null)throw Error(P(160));om(o,a,i),_e=null,kt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){he(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)am(t,e),t=t.sibling}function am(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),zt(e),r&4){try{di(3,e,e.return),tl(3,e)}catch(w){he(e,e.return,w)}try{di(5,e,e.return)}catch(w){he(e,e.return,w)}}break;case 1:xt(t,e),zt(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(xt(t,e),zt(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var i=e.stateNode;try{wi(i,"")}catch(w){he(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&jp(i,o),ss(l,a);var u=ss(l,o);for(a=0;a<s.length;a+=2){var c=s[a],f=s[a+1];c==="style"?Tp(i,f):c==="dangerouslySetInnerHTML"?Pp(i,f):c==="children"?wi(i,f):zu(i,c,f,u)}switch(l){case"input":rs(i,o);break;case"textarea":zp(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?dr(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?dr(i,!!o.multiple,o.defaultValue,!0):dr(i,!!o.multiple,o.multiple?[]:"",!1))}i[zi]=o}catch(w){he(e,e.return,w)}}break;case 6:if(xt(t,e),zt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){he(e,e.return,w)}}break;case 3:if(xt(t,e),zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bi(t.containerInfo)}catch(w){he(e,e.return,w)}break;case 4:xt(t,e),zt(e);break;case 13:xt(t,e),zt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(sc=ye())),r&4&&Jd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||c,xt(t,e),Te=u):xt(t,e),zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(O=e,c=e.child;c!==null;){for(f=O=c;O!==null;){switch(p=O,h=p.child,p.tag){case 0:case 11:case 14:case 15:di(4,p,p.return);break;case 1:ar(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){he(r,n,w)}}break;case 5:ar(p,p.return);break;case 22:if(p.memoizedState!==null){tf(f);continue}}h!==null?(h.return=p,O=h):tf(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Fp("display",a))}catch(w){he(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){he(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:xt(t,e),zt(e),r&4&&Jd(e);break;case 21:break;default:xt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(im(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wi(i,""),r.flags&=-33);var o=Kd(e);Ls(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Kd(e);Os(e,l,a);break;default:throw Error(P(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function n1(e,t,n){O=e,lm(e)}function lm(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||vo;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Te;l=vo;var u=Te;if(vo=a,(Te=s)&&!u)for(O=i;O!==null;)a=O,s=a.child,a.tag===22&&a.memoizedState!==null?nf(i):s!==null?(s.return=a,O=s):nf(i);for(;o!==null;)O=o,lm(o),o=o.sibling;O=i,vo=l,Te=u}ef(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):ef(e)}}function ef(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ld(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ld(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&bi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Te||t.flags&512&&Is(t)}catch(p){he(t,t.return,p)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function tf(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function nf(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tl(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){he(t,i,s)}}var o=t.return;try{Is(t)}catch(s){he(t,o,s)}break;case 5:var a=t.return;try{Is(t)}catch(s){he(t,a,s)}}}catch(s){he(t,t.return,s)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var r1=Math.ceil,pa=rn.ReactCurrentDispatcher,ac=rn.ReactCurrentOwner,mt=rn.ReactCurrentBatchConfig,J=0,Ne=null,we=null,ze=0,et=0,lr=Cn(0),Se=0,Ri=null,Un=0,nl=0,lc=0,fi=null,Ve=null,sc=0,Nr=1/0,Bt=null,ha=!1,Ds=null,wn=null,yo=!1,hn=null,ma=0,pi=0,$s=null,Lo=-1,Do=0;function $e(){return J&6?ye():Lo!==-1?Lo:Lo=ye()}function kn(e){return e.mode&1?J&2&&ze!==0?ze&-ze:$v.transition!==null?(Do===0&&(Do=Gp()),Do):(e=te,e!==0||(e=window.event,e=e===void 0?16:Kp(e.type)),e):1}function Ct(e,t,n,r){if(50<pi)throw pi=0,$s=null,Error(P(185));Vi(e,n,r),(!(J&2)||e!==Ne)&&(e===Ne&&(!(J&2)&&(nl|=n),Se===4&&fn(e,ze)),Ze(e,r),n===1&&J===0&&!(t.mode&1)&&(Nr=ye()+500,Ka&&_n()))}function Ze(e,t){var n=e.callbackNode;$g(e,t);var r=Ko(e,e===Ne?ze:0);if(r===0)n!==null&&dd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dd(n),t===1)e.tag===0?Dv(rf.bind(null,e)):vh(rf.bind(null,e)),Rv(function(){!(J&6)&&_n()}),n=null;else{switch(Vp(r)){case 1:n=Au;break;case 4:n=Hp;break;case 16:n=Zo;break;case 536870912:n=Wp;break;default:n=Zo}n=mm(n,sm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sm(e,t){if(Lo=-1,Do=0,J&6)throw Error(P(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Ko(e,e===Ne?ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ga(e,r);else{t=r;var i=J;J|=2;var o=cm();(Ne!==e||ze!==t)&&(Bt=null,Nr=ye()+500,In(e,t));do try{a1();break}catch(l){um(e,l)}while(!0);qu(),pa.current=o,J=i,we!==null?t=0:(Ne=null,ze=0,t=Se)}if(t!==0){if(t===2&&(i=ps(e),i!==0&&(r=i,t=Us(e,i))),t===1)throw n=Ri,In(e,0),fn(e,r),Ze(e,ye()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!i1(i)&&(t=ga(e,r),t===2&&(o=ps(e),o!==0&&(r=o,t=Us(e,o))),t===1))throw n=Ri,In(e,0),fn(e,r),Ze(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Pn(e,Ve,Bt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=sc+500-ye(),10<t)){if(Ko(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ks(Pn.bind(null,e,Ve,Bt),t);break}Pn(e,Ve,Bt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Nt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*r1(r/1960))-r,10<r){e.timeoutHandle=ks(Pn.bind(null,e,Ve,Bt),r);break}Pn(e,Ve,Bt);break;case 5:Pn(e,Ve,Bt);break;default:throw Error(P(329))}}}return Ze(e,ye()),e.callbackNode===n?sm.bind(null,e):null}function Us(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=ga(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&Bs(t)),e}function Bs(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function i1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!_t(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~lc,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function rf(e){if(J&6)throw Error(P(327));gr();var t=Ko(e,0);if(!(t&1))return Ze(e,ye()),null;var n=ga(e,t);if(e.tag!==0&&n===2){var r=ps(e);r!==0&&(t=r,n=Us(e,r))}if(n===1)throw n=Ri,In(e,0),fn(e,t),Ze(e,ye()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,Ve,Bt),Ze(e,ye()),null}function uc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Nr=ye()+500,Ka&&_n())}}function Bn(e){hn!==null&&hn.tag===0&&!(J&6)&&gr();var t=J;J|=1;var n=mt.transition,r=te;try{if(mt.transition=null,te=1,e)return e()}finally{te=r,mt.transition=n,J=t,!(J&6)&&_n()}}function cc(){et=lr.current,ae(lr)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Av(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ra();break;case 3:Er(),ae(Qe),ae(Re),Ju();break;case 5:Ku(r);break;case 4:Er();break;case 13:ae(ue);break;case 19:ae(ue);break;case 10:Yu(r.type._context);break;case 22:case 23:cc()}n=n.return}if(Ne=e,we=e=Sn(e.current,null),ze=et=t,Se=0,Ri=null,lc=nl=Un=0,Ve=fi=null,An!==null){for(t=0;t<An.length;t++)if(n=An[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}An=null}return e}function um(e,t){do{var n=we;try{if(qu(),Ro.current=fa,da){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}da=!1}if($n=0,be=ke=de=null,ci=!1,Fi=0,ac.current=null,n===null||n.return===null){Se=1,Ri=t,we=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Wd(a);if(h!==null){h.flags&=-257,Gd(h,a,l,o,t),h.mode&1&&Hd(o,u,t),t=h,s=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(s),t.updateQueue=w}else y.add(s);break e}else{if(!(t&1)){Hd(o,u,t),dc();break e}s=Error(P(426))}}else if(le&&l.mode&1){var N=Wd(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Gd(N,a,l,o,t),Gu(br(s,l));break e}}o=s=br(s,l),Se!==4&&(Se=2),fi===null?fi=[o]:fi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Vh(o,s,t);Od(o,m);break e;case 1:l=s;var v=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(wn===null||!wn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=qh(o,l,t);Od(o,x);break e}}o=o.return}while(o!==null)}fm(n)}catch(S){t=S,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function cm(){var e=pa.current;return pa.current=fa,e===null?fa:e}function dc(){(Se===0||Se===3||Se===2)&&(Se=4),Ne===null||!(Un&268435455)&&!(nl&268435455)||fn(Ne,ze)}function ga(e,t){var n=J;J|=2;var r=cm();(Ne!==e||ze!==t)&&(Bt=null,In(e,t));do try{o1();break}catch(i){um(e,i)}while(!0);if(qu(),J=n,pa.current=r,we!==null)throw Error(P(261));return Ne=null,ze=0,Se}function o1(){for(;we!==null;)dm(we)}function a1(){for(;we!==null&&!Pg();)dm(we)}function dm(e){var t=hm(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?fm(e):we=t,ac.current=null}function fm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jv(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,we=null;return}}else if(n=Kv(n,t,et),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Se===0&&(Se=5)}function Pn(e,t,n){var r=te,i=mt.transition;try{mt.transition=null,te=1,l1(e,t,n,r)}finally{mt.transition=i,te=r}return null}function l1(e,t,n,r){do gr();while(hn!==null);if(J&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ug(e,o),e===Ne&&(we=Ne=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,mm(Zo,function(){return gr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=mt.transition,mt.transition=null;var a=te;te=1;var l=J;J|=4,ac.current=null,t1(e,n),am(n,e),_v(xs),Jo=!!ys,xs=ys=null,e.current=n,n1(n),Fg(),J=l,te=a,mt.transition=o}else e.current=n;if(yo&&(yo=!1,hn=e,ma=i),o=e.pendingLanes,o===0&&(wn=null),Rg(n.stateNode),Ze(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ha)throw ha=!1,e=Ds,Ds=null,e;return ma&1&&e.tag!==0&&gr(),o=e.pendingLanes,o&1?e===$s?pi++:(pi=0,$s=e):pi=0,_n(),null}function gr(){if(hn!==null){var e=Vp(ma),t=mt.transition,n=te;try{if(mt.transition=null,te=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,ma=0,J&6)throw Error(P(331));var i=J;for(J|=4,O=e.current;O!==null;){var o=O,a=o.child;if(O.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:di(8,c,o)}var f=c.child;if(f!==null)f.return=c,O=f;else for(;O!==null;){c=O;var p=c.sibling,h=c.return;if(rm(c),c===u){O=null;break}if(p!==null){p.return=h,O=p;break}O=h}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}O=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,O=a;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:di(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,O=m;break e}O=o.return}}var v=e.current;for(O=v;O!==null;){a=O;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,O=g;else e:for(a=v;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:tl(9,l)}}catch(S){he(l,l.return,S)}if(l===a){O=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,O=x;break e}O=l.return}}if(J=i,_n(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(qa,e)}catch{}r=!0}return r}finally{te=n,mt.transition=t}}return!1}function of(e,t,n){t=br(n,t),t=Vh(e,t,1),e=xn(e,t,1),t=$e(),e!==null&&(Vi(e,1,t),Ze(e,t))}function he(e,t,n){if(e.tag===3)of(e,e,n);else for(;t!==null;){if(t.tag===3){of(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=br(n,e),e=qh(t,e,1),t=xn(t,e,1),e=$e(),t!==null&&(Vi(t,1,e),Ze(t,e));break}}t=t.return}}function s1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(ze&n)===n&&(Se===4||Se===3&&(ze&130023424)===ze&&500>ye()-sc?In(e,0):lc|=n),Ze(e,t)}function pm(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=$e();e=Jt(e,t),e!==null&&(Vi(e,t,n),Ze(e,n))}function u1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pm(e,n)}function c1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),pm(e,n)}var hm;hm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ye=!1,Zv(e,t,n);Ye=!!(e.flags&131072)}else Ye=!1,le&&t.flags&1048576&&yh(t,aa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oo(e,t),e=t.pendingProps;var i=wr(t,Re.current);mr(t,n),i=tc(null,t,r,e,i,n);var o=nc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,ia(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xu(t),i.updater=el,t.stateNode=i,i._reactInternals=t,js(t,r,e,n),t=Ps(null,t,r,!0,o,n)):(t.tag=0,le&&o&&Hu(t),Ie(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=f1(r),e=wt(r,e),i){case 0:t=Ms(null,t,r,e,n);break e;case 1:t=Yd(null,t,r,e,n);break e;case 11:t=Vd(null,t,r,e,n);break e;case 14:t=qd(null,t,r,wt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Ms(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Yd(e,t,r,i,n);case 3:e:{if(Zh(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,bh(e,t),ua(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=br(Error(P(423)),t),t=Qd(e,t,r,n,i);break e}else if(r!==i){i=br(Error(P(424)),t),t=Qd(e,t,r,n,i);break e}else for(rt=yn(t.stateNode.containerInfo.firstChild),ot=t,le=!0,St=null,n=Sh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),r===i){t=en(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return Nh(t),e===null&&Ns(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ws(r,i)?a=null:o!==null&&ws(r,o)&&(t.flags|=32),Xh(e,t),Ie(e,t,a,n),t.child;case 6:return e===null&&Ns(t),null;case 13:return Kh(e,t,n);case 4:return Zu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sr(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Vd(e,t,r,i,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ie(la,r._currentValue),r._currentValue=a,o!==null)if(_t(o.value,a)){if(o.children===i.children&&!Qe.current){t=en(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Xt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Cs(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(P(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Cs(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ie(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mr(t,n),i=gt(i),r=r(i),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,i=wt(r,t.pendingProps),i=wt(r.type,i),qd(e,t,r,i,n);case 15:return Yh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Oo(e,t),t.tag=1,Xe(r)?(e=!0,ia(t)):e=!1,mr(t,n),Gh(t,r,i),js(t,r,i,n),Ps(null,t,r,!0,e,n);case 19:return Jh(e,t,n);case 22:return Qh(e,t,n)}throw Error(P(156,t.tag))};function mm(e,t){return Bp(e,t)}function d1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new d1(e,t,n,r)}function fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f1(e){if(typeof e=="function")return fc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pu)return 11;if(e===Fu)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $o(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")fc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zn:return On(n.children,i,o,t);case Mu:a=8,i|=8;break;case Kl:return e=pt(12,n,t,i|2),e.elementType=Kl,e.lanes=o,e;case Jl:return e=pt(13,n,t,i),e.elementType=Jl,e.lanes=o,e;case es:return e=pt(19,n,t,i),e.elementType=es,e.lanes=o,e;case Np:return rl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ep:a=10;break e;case bp:a=9;break e;case Pu:a=11;break e;case Fu:a=14;break e;case ln:a=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=pt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function On(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function rl(e,t,n,r){return e=pt(22,e,r,t),e.elementType=Np,e.lanes=n,e.stateNode={isHidden:!1},e}function Dl(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function $l(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function p1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(e,t,n,r,i,o,a,l,s){return e=new p1(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xu(o),e}function h1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gm(e){if(!e)return bn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Xe(n))return gh(e,n,t)}return t}function vm(e,t,n,r,i,o,a,l,s){return e=pc(n,r,!0,e,i,o,a,l,s),e.context=gm(null),n=e.current,r=$e(),i=kn(n),o=Xt(r,i),o.callback=t??null,xn(n,o,i),e.current.lanes=i,Vi(e,i,r),Ze(e,r),e}function il(e,t,n,r){var i=t.current,o=$e(),a=kn(i);return n=gm(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,a),e!==null&&(Ct(e,i,a,o),Ao(e,i,a)),a}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hc(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function m1(){return null}var ym=typeof reportError=="function"?reportError:function(e){console.error(e)};function mc(e){this._internalRoot=e}ol.prototype.render=mc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));il(e,t,null,null)};ol.prototype.unmount=mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){il(null,e,null,null)}),t[Kt]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&Zp(e)}};function gc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lf(){}function g1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=va(a);o.call(u)}}var a=vm(t,r,e,0,null,!1,!1,"",lf);return e._reactRootContainer=a,e[Kt]=a.current,_i(e.nodeType===8?e.parentNode:e),Bn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=va(s);l.call(u)}}var s=pc(e,0,!1,null,null,!1,!1,"",lf);return e._reactRootContainer=s,e[Kt]=s.current,_i(e.nodeType===8?e.parentNode:e),Bn(function(){il(t,s,n,r)}),s}function ll(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=va(a);l.call(s)}}il(t,a,e,i)}else a=g1(n,t,e,i,r);return va(a)}qp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qr(t.pendingLanes);n!==0&&(Ru(t,n|1),Ze(t,ye()),!(J&6)&&(Nr=ye()+500,_n()))}break;case 13:Bn(function(){var r=Jt(e,1);if(r!==null){var i=$e();Ct(r,e,1,i)}}),hc(e,1)}};Iu=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=$e();Ct(t,e,134217728,n)}hc(e,134217728)}};Yp=function(e){if(e.tag===13){var t=kn(e),n=Jt(e,t);if(n!==null){var r=$e();Ct(n,e,t,r)}hc(e,t)}};Qp=function(){return te};Xp=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};cs=function(e,t,n){switch(t){case"input":if(rs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Za(r);if(!i)throw Error(P(90));_p(r),rs(r,i)}}}break;case"textarea":zp(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};Ip=uc;Op=Bn;var v1={usingClientEntryPoint:!1,Events:[Yi,tr,Za,Ap,Rp,uc]},Wr={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},y1={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$p(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||m1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{qa=xo.inject(y1),Rt=xo}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v1;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(t))throw Error(P(200));return h1(e,t,null,n)};lt.createRoot=function(e,t){if(!gc(e))throw Error(P(299));var n=!1,r="",i=ym;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=pc(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,_i(e.nodeType===8?e.parentNode:e),new mc(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=$p(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Bn(e)};lt.hydrate=function(e,t,n){if(!al(t))throw Error(P(200));return ll(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!gc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ym;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=vm(t,null,e,1,n??null,i,!1,o,a),e[Kt]=t.current,_i(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ol(t)};lt.render=function(e,t,n){if(!al(t))throw Error(P(200));return ll(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!al(e))throw Error(P(40));return e._reactRootContainer?(Bn(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};lt.unstable_batchedUpdates=uc;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!al(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ll(e,t,n,!1,r)};lt.version="18.3.1-next-f1338f8080-20240426";function xm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xm)}catch(e){console.error(e)}}xm(),xp.exports=lt;var x1=xp.exports,sf=x1;Xl.createRoot=sf.createRoot,Xl.hydrateRoot=sf.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Q=(e,t)=>{const n=$.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:s,...u},c)=>$.createElement("svg",{ref:c,...w1,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${k1(e)}`,l].join(" "),...u},[...t.map(([f,p])=>$.createElement(f,p)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=Q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=Q("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Q("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=Q("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=Q("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=Q("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=Q("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=Q("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=Q("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=Q("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=Q("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=Q("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=Q("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=Q("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=Q("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=Q("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=Q("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=Q("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=Q("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=Q("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=Q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=Q("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=Q("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=Q("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=Q("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=Q("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=Q("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=Q("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=Q("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=Q("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=Q("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=Q("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=Q("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=Q("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=Q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=Q("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function G1({onOpenContact:e}){const[t,n]=$.useState(!1),[r,i]=$.useState(!1);$.useEffect(()=>{const a=()=>{n(window.scrollY>20)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const o=a=>{i(!1);const l=document.getElementById(a);l&&l.scrollIntoView({behavior:"smooth"})};return d.jsxs("header",{className:`navbar-header ${t?"scrolled":""}`,children:[d.jsxs("div",{className:"container nav-container",children:[d.jsx("a",{href:"#",className:"nav-logo",children:d.jsx("img",{src:"./assets/coloured_logo.jpeg",alt:"Gaussians Logo",className:"logo-img"})}),d.jsxs("nav",{className:`nav-links ${r?"open":""}`,children:[d.jsx("button",{className:"nav-item",onClick:()=>o("about"),children:"About Gaussians"}),d.jsx("button",{className:"nav-item",onClick:()=>o("services"),children:"Services"}),d.jsx("button",{className:"nav-item",onClick:()=>o("forward"),children:"Gaussians Forward"}),d.jsx("button",{className:"nav-item",onClick:()=>{i(!1),e("Connect with Us Navigation")},children:"Connect with Us"}),d.jsx("div",{className:"mobile-cta",children:d.jsxs("button",{className:"btn-primary",onClick:e,children:["Talk to an Expert ",d.jsx(Cr,{size:16})]})})]}),d.jsx("div",{className:"nav-cta-desktop",children:d.jsxs("button",{className:"btn-primary",onClick:e,children:["Get Started ",d.jsx(Cr,{size:16})]})}),d.jsx("button",{className:"mobile-toggle",onClick:()=>i(!r),"aria-label":"Toggle menu",children:r?d.jsx(Cm,{size:24}):d.jsx(R1,{size:24})})]}),d.jsx("style",{children:`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all 0.3s ease;
          background: #FFFFFF;
          border-bottom: 1px solid rgba(226, 232, 240, 0.6);
        }

        .navbar-header.scrolled {
          padding: 0.85rem 0;
          box-shadow: 0 4px 20px rgba(90, 56, 253, 0.08);
          border-bottom: 1px solid rgba(216, 210, 255, 0.6);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .logo-img {
          height: 38px;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }

        .nav-item {
          background: none;
          border: none;
          color: var(--text-body);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 0.25rem 0;
          position: relative;
        }

        .nav-item:hover {
          color: var(--primary);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--primary);
          transition: var(--transition-fast);
          border-radius: 2px;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .mobile-cta {
          display: none;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
        }

        @media (max-width: 968px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: #FFFFFF;
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
          }

          .nav-links.open {
            transform: translateY(0);
          }

          .nav-cta-desktop {
            display: none;
          }

          .mobile-cta {
            display: block;
            width: 100%;
          }

          .mobile-cta button {
            width: 100%;
            justify-content: center;
          }

          .mobile-toggle {
            display: block;
          }
        }
      `})]})}function V1({onOpenContact:e,onExploreServices:t}){const n=$.useRef(null);return $.useEffect(()=>{const r=n.current;if(!r)return;const i=r.getContext("2d");let o;const a=()=>{r.width=r.parentElement.clientWidth,r.height=r.parentElement.clientHeight};a(),window.addEventListener("resize",a);const l=[{id:"GRC",title:"GRC",angle:-1.5708,dist:220},{id:"SOC2",title:"SOC 2",angle:-.3142,dist:215},{id:"Cloud",title:"Cloud",angle:.9425,dist:225},{id:"Risk",title:"Risk",angle:2.1991,dist:225},{id:"ISO",title:"ISO",angle:-2.8274,dist:215}];let s=0;const u=()=>{s+=.015,i.clearRect(0,0,r.width,r.height);const c=r.width/2,f=r.height/2;i.save(),i.beginPath(),i.arc(c,f,110+Math.sin(s)*8,0,Math.PI*2),i.strokeStyle="rgba(90, 56, 253, 0.15)",i.lineWidth=2,i.setLineDash([6,6]),i.stroke(),i.beginPath(),i.arc(c,f,180+Math.cos(s*.8)*10,0,Math.PI*2),i.strokeStyle="rgba(124, 58, 237, 0.12)",i.lineWidth=1.5,i.stroke(),i.restore(),l.forEach((p,h)=>{const y=c+Math.cos(p.angle+Math.sin(s*.5+h)*.05)*(p.dist*1.1),w=f+Math.sin(p.angle+Math.cos(s*.5+h)*.05)*(p.dist*.85);i.beginPath(),i.moveTo(c,f),i.lineTo(y,w),i.strokeStyle="rgba(90, 56, 253, 0.22)",i.lineWidth=1.5,i.stroke();const N=(s*.8+h*.35)%1,m=c+(y-c)*N,v=f+(w-f)*N,g=i.createRadialGradient(m,v,0,m,v,6);g.addColorStop(0,"#5A38FD"),g.addColorStop(1,"rgba(90, 56, 253, 0)"),i.fillStyle=g,i.beginPath(),i.arc(m,v,6,0,Math.PI*2),i.fill()}),o=requestAnimationFrame(u)};return u(),()=>{window.removeEventListener("resize",a),cancelAnimationFrame(o)}},[]),d.jsxs("section",{className:"hero-section",children:[d.jsx("div",{className:"hero-bg-glow"}),d.jsx("div",{className:"container hero-container",children:d.jsxs("div",{className:"hero-content",children:[d.jsxs("h1",{className:"hero-title",children:["Operationalizing ",d.jsx("br",{}),d.jsx("span",{className:"highlight-text",children:"Security, Compliance, and Trust"})]}),d.jsx("p",{className:"hero-description",children:"Helping organizations transform security, compliance, and risk management from business challenges into strategic advantages through practical execution and long-term partnership."}),d.jsxs("div",{className:"hero-callout",children:[d.jsx(sl,{size:20,className:"callout-icon"}),d.jsxs("span",{children:[d.jsx("strong",{children:"We do not only advise. We deliver."})," From audit readiness and risk management to managed services and specialist talent solutions."]})]})]})}),d.jsx("style",{children:`
        .hero-section {
          position: relative;
          padding: 9rem 0 5rem 0;
          background: radial-gradient(circle at 50% 30%, rgba(243, 240, 255, 0.8) 0%, rgba(255, 255, 255, 1) 70%);
          overflow: hidden;
        }

        .hero-bg-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(90, 56, 253, 0.12) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }

        .hero-container {
          display: flex;
          justify-content: center;
        }

        .hero-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge {
          margin-bottom: 1.5rem;
        }

        .badge-icon {
          color: var(--primary);
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          letter-spacing: -0.03em;
          text-align: center;
          max-width: 860px;
        }

        .highlight-text {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          max-width: 820px;
          line-height: 1.6;
          text-align: center;
        }

        .hero-callout {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: var(--bg-soft-purple);
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-md);
          padding: 1rem 1.5rem;
          margin-bottom: 2rem;
          font-size: 0.95rem;
          color: var(--text-dark);
          text-align: left;
          max-width: 760px;
        }

        .callout-icon {
          color: var(--primary);
          flex-shrink: 0;
        }


        .hero-supported-frameworks {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          background: rgba(248, 247, 255, 0.95);
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-full);
          padding: 0.85rem 2.5rem;
          margin-top: 1.5rem;
          font-size: 0.92rem;
          width: 100%;
          max-width: 1200px;
          box-shadow: var(--shadow-sm);
        }

        .sf-label {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          flex-shrink: 0;
        }

        .sf-pills {
          color: var(--text-muted);
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 100%;
          white-space: nowrap;
        }

        .sf-pills span {
          color: var(--text-dark);
          transition: var(--transition-fast);
        }

        .sf-pills span:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 7rem 0 3.5rem 0;
          }
          .hero-title {
            font-size: 2.2rem;
            line-height: 1.2;
          }
          .hero-description {
            font-size: 1rem;
          }
          .hero-callout {
            flex-direction: column;
            text-align: center;
            padding: 1rem;
            gap: 0.5rem;
          }
          .hero-supported-frameworks {
            flex-direction: column;
            border-radius: var(--radius-md);
            padding: 0.85rem 1rem;
            gap: 0.65rem;
          }
          .sf-pills {
            white-space: normal;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.4rem;
            font-size: 0.82rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `})]})}function q1(){const e=[{name:"Dun & Bradstreet",category:"Risk & Data Intelligence"},{name:"Allianz",category:"Insurance & Financial Assurance"},{name:"Ultragenyx",category:"Biotechnology & Health"},{name:"Credencys",category:"Digital Engineering"},{name:"Revature",category:"Technology Talent"},{name:"iThought",category:"Financial Advisory"}];return d.jsxs("section",{className:"ticker-section dark-ticker",children:[d.jsx("div",{className:"ticker-bg-glow"}),d.jsx("div",{className:"container relative-z",children:d.jsx("p",{className:"ticker-label dark-ticker-label",children:"TRUSTED BY FORWARD-THINKING ORGANIZATIONS"})}),d.jsx("div",{className:"ticker-wrapper",children:d.jsx("div",{className:"marquee-track",children:[...e,...e,...e].map((t,n)=>d.jsxs("div",{className:"client-badge dark-client-badge",children:[d.jsx("div",{className:"badge-icon-wrap dark-icon-wrap",children:d.jsx(N1,{size:18,className:"client-icon"})}),d.jsxs("div",{children:[d.jsx("span",{className:"client-name dark-name",children:t.name}),d.jsx("span",{className:"client-cat dark-cat",children:t.category})]})]},n))})}),d.jsx("style",{children:`
        .ticker-section {
          padding: 3rem 0 3.5rem 0;
          background: linear-gradient(135deg, #0A051C 0%, #150A36 50%, #0D0424 100%);
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(167, 139, 250, 0.2);
          border-bottom: 1px solid rgba(167, 139, 250, 0.2);
        }

        .ticker-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(124, 58, 237, 0.22) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .dark-ticker-label {
          text-align: center;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: #A78BFA;
          margin-bottom: 1.75rem;
          text-transform: uppercase;
        }

        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .ticker-wrapper::before,
        .ticker-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 140px;
          height: 100%;
          z-index: 3;
          pointer-events: none;
        }

        .ticker-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #0A051C, rgba(10, 5, 28, 0));
        }

        .ticker-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #0A051C, rgba(10, 5, 28, 0));
        }

        .dark-client-badge {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1.6rem;
          margin: 0 0.85rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(167, 139, 250, 0.25);
          transition: all 0.3s ease;
        }

        .dark-client-badge:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(167, 139, 250, 0.6);
          box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3);
          transform: translateY(-2px);
        }

        .dark-icon-wrap {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.35) 0%, rgba(99, 102, 241, 0.25) 100%);
          border: 1px solid rgba(167, 139, 250, 0.3);
          color: #DDD6FE;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dark-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          color: #FFFFFF;
          display: block;
        }

        .dark-cat {
          font-size: 0.75rem;
          color: rgba(226, 232, 240, 0.75);
          display: block;
        }
      `})]})}function Y1(){const[e,t]=$.useState(0),n=[{id:"leadership",num:"01",title:"Global Consulting & Industry Veterans",badge:"Experienced Leadership",metric:"15+ Yrs Leadership Exp.",desc:"Our team brings seasoned professionals with Big-4 and global consulting backgrounds, alongside real-world enterprise experience to solve your toughest trust & compliance challenges.",highlight:"Senior leaders actively involved in every client engagement.",icon:d.jsx(b1,{size:28})},{id:"flexibility",num:"02",title:"Flexible Engagement Models",badge:"Tailored Execution",metric:"4 Delivery Models",desc:"Whether you need strategic advisory, fully managed compliance operations, specialized staff augmentation, or dedicated offshore centers, we flex to fit your exact scale.",highlight:"Advisory, Managed Services, Staff Augmentation & Dedicated Teams.",icon:d.jsx(T1,{size:28})},{id:"execution",num:"03",title:"Hands-On Execution & Ownership",badge:"We Deliver",metric:"Operational Ownership",desc:"We don't stop at high-level reports. We design policies, test ITGCs, collect audit evidence, interface directly with auditors, and manage day-to-day security operations.",highlight:"Operational support that embeds directly into your workflow.",icon:d.jsx(ul,{size:28})},{id:"scalability",num:"04",title:"Scalable Delivery Without Compromise",badge:"Scale Without Limits",metric:"Zero Audit Surprises",desc:"Expand your security and compliance bandwidth quickly without sacrificing quality, oversight, or accountability across high-growth startups to global enterprises.",highlight:"Consistent audit-ready quality at optimal operating cost.",icon:d.jsx(bm,{size:28})},{id:"dedicated",num:"05",title:"Personalized Senior Leadership Attention",badge:"Senior Expert Access",metric:"Direct Executive Access",desc:"You deal directly with experts who understand your business context, not junior staff learning on your time. Personal ownership drives fast turnaround and high precision.",highlight:"Direct executive sponsorship on all key milestones.",icon:d.jsx(B1,{size:28})},{id:"trust",num:"06",title:"Long-Term Trust & Relentless Commitment",badge:"End-to-End Partner",metric:"Honest Advisory",desc:"We build relationships based on transparency, clear communication, and a relentless focus on customer success, guiding you from readiness through continuous governance.",highlight:"Earned trust through honest conversations and tangible results.",icon:d.jsx(P1,{size:28})}];return d.jsxs("section",{id:"difference",className:"difference-section",children:[d.jsxs("div",{className:"diff-bg-orbs",children:[d.jsx("div",{className:"orb orb-1"}),d.jsx("div",{className:"orb orb-2"})]}),d.jsxs("div",{className:"container relative-z",children:[d.jsxs("div",{className:"section-header fade-in-up",children:[d.jsxs("div",{className:"badge-pill diff-badge",children:[d.jsx(yc,{size:16}),d.jsx("span",{children:"THE GAUSSIANS DIFFERENCE"})]}),d.jsx("h2",{className:"diff-title",children:"Why Clients Choose Us"}),d.jsx("div",{className:"section-divider"}),d.jsx("p",{className:"diff-subtitle",children:"Building Trust • Delivering Assurance • Driving Business Outcomes"})]}),d.jsxs("div",{className:"showcase-container fade-in-up",children:[d.jsx("div",{className:"showcase-tabs",children:n.map((r,i)=>{const o=e===i;return d.jsxs("div",{className:`tab-item ${o?"active":""}`,onClick:()=>t(i),children:[d.jsx("div",{className:"tab-icon-box",children:r.icon}),d.jsxs("div",{className:"tab-info",children:[d.jsx("span",{className:"tab-badge",children:r.badge}),d.jsx("h4",{className:"tab-title",children:r.title})]})]},r.id)})}),d.jsxs("div",{className:"showcase-display glass-card",children:[d.jsxs("div",{className:"display-top",children:[d.jsxs("span",{className:"display-metric-pill",children:[d.jsx(W1,{size:14})," ",n[e].metric]}),d.jsxs("span",{className:"display-step-tag",children:["Pillar ",n[e].num," of 06"]})]}),d.jsxs("div",{className:"display-icon-header",children:[d.jsx("div",{className:"display-icon-circle",children:n[e].icon}),d.jsxs("div",{children:[d.jsx("span",{className:"display-badge",children:n[e].badge}),d.jsx("h3",{className:"display-title",children:n[e].title})]})]}),d.jsx("p",{className:"display-desc",children:n[e].desc}),d.jsxs("div",{className:"display-takeaway-box",children:[d.jsx(sl,{size:20,className:"takeaway-icon"}),d.jsxs("div",{children:[d.jsx("strong",{children:"Core Advantage:"})," ",n[e].highlight]})]})]})]}),d.jsxs("div",{className:"philosophy-banner glass-card fade-in-up",children:[d.jsx(O1,{size:36,className:"quote-icon"}),d.jsx("p",{className:"philosophy-quote",children:'"Trust is earned through honest conversations, transparent communication, professional execution, and a relentless commitment to client success."'}),d.jsxs("div",{className:"philosophy-brand",children:[d.jsx("span",{className:"line"}),d.jsx("span",{children:"The Gaussians Core Philosophy"}),d.jsx("span",{className:"line"})]})]})]}),d.jsx("style",{children:`
        .difference-section {
          padding: 6.5rem 0;
          background: linear-gradient(180deg, #F5F3FF 0%, #FFFFFF 50%, #F3F0FF 100%);
          position: relative;
          overflow: hidden;
        }

        .diff-bg-orbs .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.22;
          pointer-events: none;
        }

        .orb-1 {
          width: 550px;
          height: 550px;
          top: -100px;
          right: -100px;
          background: #5A38FD;
        }

        .orb-2 {
          width: 600px;
          height: 600px;
          bottom: -150px;
          left: -150px;
          background: #7C3AED;
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .diff-badge {
          background: #EEECFF;
          color: var(--primary);
          border: 1px solid var(--primary-border);
        }

        .diff-title {
          font-size: 2.6rem;
          margin-top: 0.5rem;
        }

        .diff-subtitle {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--primary);
          margin-top: 0.4rem;
        }

        /* Showcase Container */
        .showcase-container {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 2rem;
          margin-bottom: 3.5rem;
          align-items: center;
        }

        /* Tabs List */
        .showcase-tabs {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .tab-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.1rem 1.4rem;
          background: rgba(255, 255, 255, 0.9);
          border: 1.5px solid var(--border-purple);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tab-item:hover, .tab-item.active {
          background: #FFFFFF;
          border-color: var(--primary);
          box-shadow: 0 12px 30px -6px rgba(90, 56, 253, 0.18);
          transform: translateX(8px);
        }

        .tab-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: var(--bg-soft-purple);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .tab-item.active .tab-icon-box {
          background: linear-gradient(135deg, var(--primary) 0%, #4322EA 100%);
          color: #FFFFFF;
          box-shadow: 0 6px 18px rgba(90, 56, 253, 0.3);
        }

        .tab-badge {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .tab-title {
          font-size: 1.05rem;
          color: var(--text-dark);
          line-height: 1.25;
          margin-top: 0.1rem;
        }

        /* Showcase Display Right */
        .showcase-display {
          padding: 3rem 2.5rem;
          background: #FFFFFF;
          border: 2px solid var(--primary-border);
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 45px -10px rgba(90, 56, 253, 0.15);
          display: flex;
          flex-direction: column;
        }

        .display-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.75rem;
        }

        .display-metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.82rem;
          background: var(--primary-light);
          color: var(--primary);
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
        }

        .display-step-tag {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .display-icon-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .display-icon-circle {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--primary) 0%, #4322EA 100%);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 22px rgba(90, 56, 253, 0.3);
          flex-shrink: 0;
        }

        .display-badge {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .display-title {
          font-size: 1.65rem;
          color: var(--text-dark);
          line-height: 1.25;
          margin-top: 0.15rem;
        }

        .display-desc {
          font-size: 1.05rem;
          color: var(--text-body);
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }

        .display-takeaway-box {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: var(--bg-soft-purple);
          border: 1px solid var(--primary-border);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          margin-bottom: 2rem;
          font-size: 0.95rem;
          color: var(--text-dark);
        }

        .takeaway-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .display-footer-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-light);
        }

        .nav-btn-prev {
          background: transparent;
          border: 1.5px solid var(--primary-border);
          padding: 0.55rem 1.3rem;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--primary);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .nav-btn-prev:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .nav-btn-prev:not(:disabled):hover {
          background: var(--primary-light);
        }

        .nav-dots {
          display: flex;
          gap: 0.4rem;
        }

        .nav-dots .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary-border);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-dots .dot.active {
          width: 24px;
          border-radius: 4px;
          background: var(--primary);
        }

        .nav-btn-next {
          padding: 0.65rem 1.5rem;
          font-size: 0.9rem;
        }

        /* Philosophy Card */
        .philosophy-banner {
          background: linear-gradient(135deg, var(--primary) 0%, #3B1AD8 100%);
          border-radius: var(--radius-lg);
          padding: 3rem 3.5rem;
          color: #FFFFFF;
          text-align: center;
          box-shadow: 0 18px 45px rgba(90, 56, 253, 0.28);
        }

        .quote-icon {
          color: rgba(255, 255, 255, 0.35);
          margin-bottom: 0.75rem;
        }

        .philosophy-quote {
          font-size: 1.3rem;
          font-weight: 500;
          line-height: 1.6;
          max-width: 840px;
          margin: 0 auto 1.5rem auto;
        }

        .philosophy-brand {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .line {
          width: 36px;
          height: 2px;
          background: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 1024px) {
          .showcase-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .difference-section {
            padding: 4.5rem 0;
          }
          .diff-title {
            font-size: 2.1rem;
          }
          .tab-item {
            padding: 0.9rem 1.1rem;
          }
          .tab-title {
            font-size: 0.95rem;
          }
          .showcase-display {
            padding: 1.75rem 1.25rem;
          }
          .display-title {
            font-size: 1.35rem;
          }
          .display-desc {
            font-size: 0.95rem;
          }
          .display-footer-nav {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
          .nav-dots {
            order: -1;
          }
          .nav-btn-prev, .nav-btn-next {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
          .philosophy-banner {
            padding: 2.25rem 1.5rem;
          }
          .philosophy-quote {
            font-size: 1.05rem;
          }
        }
      `})]})}function Q1(){const e=[{id:"compliance",icon:d.jsx(ul,{size:26}),title:"Achieve Compliance",desc:"Structured, audit-ready programs that satisfy global regulators, enterprise clients, and board members."},{id:"security",icon:d.jsx(A1,{size:26}),title:"Strengthen Security",desc:"Practical, defense-in-depth security controls and governance that actively reduce cyber risk exposure."},{id:"audits",icon:d.jsx(z1,{size:26}),title:"Pass Audits with Confidence",desc:"Evidence-backed readiness across SOC 2, ISO 27001, HITRUST, and PCI DSS with zero audit surprises."},{id:"trm",icon:d.jsx(Nm,{size:26}),title:"Manage Technology & Third-Party Risk",desc:"Comprehensive vendor due diligence and technology risk management across IT, Cloud, AI, and Data."},{id:"scale",icon:d.jsx(wm,{size:26}),title:"Scale Operations Efficiently",desc:"Managed compliance operations that unlock your internal engineering team capacity without sacrificing quality."},{id:"specialists",icon:d.jsx(U1,{size:26}),title:"Access Experienced Specialists",desc:"Staff augmentation and dedicated offshore teams with deep domain expertise, aligned with your mission."}];return d.jsxs("section",{id:"how-we-help",className:"howwehelp-section",children:[d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("div",{className:"badge-pill",children:[d.jsx(Hs,{size:14,className:"badge-icon"}),d.jsx("span",{children:"How We Help"})]}),d.jsxs("h2",{children:["Helping Organizations ",d.jsx("span",{className:"highlight-text",children:"Navigate Risk"})," and ",d.jsx("span",{className:"highlight-text",children:"Build Trust"})]}),d.jsx("p",{children:"We partner with you to turn security and compliance requirements into structured, scalable, and business-aligned programs."})]}),d.jsx("div",{className:"help-grid",children:e.map(t=>d.jsxs("div",{className:"help-card glass-card animate-hover",children:[d.jsx("div",{className:"help-icon-wrapper",children:t.icon}),d.jsx("h3",{className:"help-card-title",children:t.title}),d.jsx("p",{className:"help-card-desc",children:t.desc})]},t.id))})]}),d.jsx("style",{children:`
        .howwehelp-section {
          padding: 6rem 0 5rem 0;
          background: #FFFFFF;
          position: relative;
        }

        .highlight-text {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .help-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
        }

        .help-card {
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          padding: 2.5rem 2rem;
          transition: var(--transition-normal);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: 0 4px 20px rgba(90, 56, 253, 0.02);
        }

        .help-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 15px 35px rgba(90, 56, 253, 0.08);
        }

        .help-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .help-card-title {
          font-size: 1.25rem;
          color: var(--text-dark);
          margin-bottom: 0.85rem;
          font-weight: 700;
        }

        .help-card-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .help-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .help-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function X1({onOpenContact:e}){const[t,n]=$.useState("all"),r=[{id:"all",name:"All Services & Frameworks"},{id:"cybersecurity",name:"Cybersecurity & Compliance"},{id:"risk",name:"Risk & Governance"},{id:"audit",name:"Audit & Assurance"},{id:"managed",name:"Managed Services"},{id:"program",name:"Program Implementation & Transformation"}],i=[{id:"soc",code:"SOC",name:"SOC 1, SOC 2 & SOC 3",category:"cybersecurity",desc:"Preparation, controls mapping, evidence collection, and auditor liaison for Type I & Type II audits across Trust Services Criteria.",badge:"Cybersecurity & Compliance"},{id:"iso27001",code:"ISO 27001",name:"ISO 27001",category:"cybersecurity",desc:"ISMS program design, Annex A controls implementation, internal audits, and certification readiness for Stage 1 & Stage 2 audits.",badge:"Cybersecurity & Compliance"},{id:"iso42001",code:"ISO 42001",name:"ISO 42001",category:"cybersecurity",desc:"The premier global standard for Artificial Intelligence Management Systems (AIMS), risk management, and AI transparency.",badge:"Cybersecurity & Compliance"},{id:"csa-star",code:"CSA STAR",name:"CSA STAR",category:"cybersecurity",desc:"Cloud Control Matrix (CCM) mapping, CAIQ self-assessment, and STAR Level 1 & Level 2 certification readiness.",badge:"Cybersecurity & Compliance"},{id:"pci-dss",code:"PCI DSS",name:"PCI DSS",category:"cybersecurity",desc:"CDE scope reduction, SAQ validation, ROC audit readiness, and continuous payment security monitoring.",badge:"Cybersecurity & Compliance"},{id:"hitrust",code:"HITRUST",name:"HITRUST",category:"cybersecurity",desc:"MyCSF portal management, validated assessment preparation, and CAP management for healthcare & tech vendors.",badge:"Cybersecurity & Compliance"},{id:"nist-csf",code:"NIST CSF",name:"NIST Cybersecurity Framework (CSF)",category:"cybersecurity",desc:"Comprehensive maturity assessments, gap remediation, and target profile alignment across the core CSF functions.",badge:"Cybersecurity & Compliance"},{id:"nist-ai",code:"NIST AI RMF",name:"NIST AI Risk Management Framework (AI RMF)",category:"cybersecurity",desc:"Govern, Map, Measure, and Manage functions for trustworthy, safe, and transparent AI system deployments.",badge:"Cybersecurity & Compliance"},{id:"cmmc",code:"CMMC",name:"CMMC",category:"cybersecurity",desc:"US DoD supply chain requirements, NIST SP 800-171 readiness, SSP authoring, and assessment prep.",badge:"Cybersecurity & Compliance"},{id:"cyber-essentials",code:"Cyber Essentials",name:"Cyber Essentials",category:"cybersecurity",desc:"United Kingdom cybersecurity certification readiness, boundary assessment, and basic security control audits.",badge:"Cybersecurity & Compliance"},{id:"hipaa",code:"HIPAA",name:"HIPAA",category:"cybersecurity",desc:"PHI protection, Administrative & Technical Safeguards, Business Associate Agreement (BAA) reviews.",badge:"Cybersecurity & Compliance"},{id:"gdpr",code:"GDPR",name:"GDPR & Privacy Programs",category:"cybersecurity",desc:"Data mapping, Privacy Impact Assessments (PIA/DPIA), DSAR workflows, and cross-border privacy compliance.",badge:"Cybersecurity & Compliance"},{id:"ccpa",code:"CCPA",name:"CCPA",category:"cybersecurity",desc:"California Consumer Privacy Act compliance, consumer rights workflows, and privacy policies.",badge:"Cybersecurity & Compliance"},{id:"cloud-sec",code:"Cloud",name:"Cloud Security Assessments",category:"cybersecurity",desc:"Security architecture design, cloud environment hardening, identity governance reviews, and vulnerability management tracking.",badge:"Cybersecurity & Compliance"},{id:"readiness-gap",code:"Gap Assess",name:"Compliance Readiness & Gap Assessments",category:"cybersecurity",desc:"Pre-audit gap remediation, controls mapping, evidence pre-validation, and organizational maturity reviews.",badge:"Cybersecurity & Compliance"},{id:"policy-frameworks",code:"Policies",name:"Policy & Control Frameworks (including AI policies)",category:"cybersecurity",desc:"Designing and drafting comprehensive policies, standards, procedures, and AI governance frameworks.",badge:"Cybersecurity & Compliance"},{id:"managed-compliance",code:"Compliance",name:"Compliance Managed Services",category:"cybersecurity",desc:"End-to-end management of compliance activities, continuous control monitoring, and reporting.",badge:"Cybersecurity & Compliance"},{id:"it-risk",code:"IT Risk",name:"IT Risk Assessments",category:"risk",desc:"Systemic risk identification, qualitative and quantitative impact evaluation, and strategic mitigation roadmap development.",badge:"Risk & Governance"},{id:"tprm",code:"TPRM",name:"Third Party Risk Management",category:"risk",desc:"Comprehensive vendor security due diligence assessments, questionnaire evaluations, and supply chain risk oversight programs.",badge:"Risk & Governance"},{id:"vendor-due",code:"Due Diligence",name:"Vendor Due Diligence",category:"risk",desc:"Evaluating third-party service providers, assessing technical safeguards, and identifying vendor business liabilities.",badge:"Risk & Governance"},{id:"tech-gov",code:"Governance",name:"Technology Governance: IT, Cloud, AI, Cyber, Data, Third Party",category:"risk",desc:"Establishing oversight structures and frameworks for IT, Cloud, Artificial Intelligence, Data, and Vendor lifecycle operations.",badge:"Risk & Governance"},{id:"tech-risk",code:"Risk Mgmt",name:"Technology Risk Management",category:"risk",desc:"Implementing continuous risk monitoring, vulnerability tracking, and technology governance operations.",badge:"Risk & Governance"},{id:"risk-design",code:"Framework",name:"Risk Framework Design",category:"risk",desc:"Designing, building, and operationalizing customized enterprise risk management frameworks and registries.",badge:"Risk & Governance"},{id:"control-val",code:"Validation",name:"Control Validation",category:"risk",desc:"Reviewing key internal controls to ensure they are designed and operating effectively to mitigate identified risks.",badge:"Risk & Governance"},{id:"sox",code:"SOX",name:"SOX",category:"audit",desc:"Internal control assessments, testing execution, and program validation for financial reporting and corporate transparency.",badge:"Audit & Assurance"},{id:"itgc",code:"ITGC",name:"ITGC Testing",category:"audit",desc:"Rigorous manual and automated validation of IT General Controls, database management, and change governance protocols.",badge:"Audit & Assurance"},{id:"itac",code:"ITAC",name:"ITAC Testing",category:"audit",desc:"Testing of IT Application Controls, automated system configurations, data integrations, and transaction mapping.",badge:"Audit & Assurance"},{id:"internal-audit",code:"Audit",name:"Internal Audit",category:"audit",desc:"Independent operational audits, internal control reviews, process documentation, and corporate compliance testing.",badge:"Audit & Assurance"},{id:"tech-assurance",code:"Assurance",name:"Technology Assurance",category:"audit",desc:"Reviewing core technology stacks, platform integrations, infrastructure controls, and database integrity schemas.",badge:"Audit & Assurance"},{id:"audit-readiness",code:"Readiness",name:"Audit Readiness",category:"audit",desc:"Pre-audit controls mapping, evidence pre-validation, gap remediation, and mock auditor evaluations.",badge:"Audit & Assurance"},{id:"audit-support",code:"Support",name:"Audit Support",category:"audit",desc:"Auditor liaison management, evidence coordination, request list tracking, and control walk-through facilitation.",badge:"Audit & Assurance"},{id:"comp-ops",code:"Ops",name:"Compliance Operations",category:"managed",desc:"Extend your bandwidth with external specialists executing day-to-day security and compliance operational workflows.",badge:"Managed Services"},{id:"audit-coord",code:"Coordination",name:"Audit Coordination",category:"managed",desc:"Liaising with auditors, managing request lists, gathering technical artifacts, and scheduling walk-throughs.",badge:"Managed Services"},{id:"evidence-coll",code:"Evidence",name:"Evidence Collection",category:"managed",desc:"Continuous evidence gathering, document repository updates, and control validation schemas.",badge:"Managed Services"},{id:"cust-quest",code:"Questionnaires",name:"Customer Security Questionnaires",category:"managed",desc:"Rapid processing and accurate technical answering of vendor security assessments and customer trust questionnaires.",badge:"Managed Services"},{id:"continuous-mon",code:"Monitoring",name:"Continuous Compliance Monitoring",category:"managed",desc:"Real-time control tracking, continuous compliance health checks, and dashboard reporting.",badge:"Managed Services"},{id:"sec-prog",code:"Security",name:"Security Program Development",category:"program",desc:"Custom blueprinting, development, and scaling of cybersecurity, risk advisory, and business resiliency frameworks.",badge:"Program Implementation & Transformation"},{id:"frame-impl",code:"Framework",name:"Framework Implementation",category:"program",desc:"Operationalizing and embedding governance, security, and compliance frameworks to deliver lasting business value.",badge:"Program Implementation & Transformation"},{id:"policy-proc",code:"Procedures",name:"Policy & Procedure Development",category:"program",desc:"Drafting, formatting, and operationalizing comprehensive company-wide IT, AI, and information security policies.",badge:"Program Implementation & Transformation"},{id:"control-design",code:"Design",name:"Control Design & Implementation",category:"program",desc:"Designing key technical and operational controls and embedding them into daily production workflows.",badge:"Program Implementation & Transformation"},{id:"training-aware",code:"Training",name:"Training & Awareness Programs",category:"program",desc:"Building and administering security training modules, compliance awareness sessions, and phishing simulations.",badge:"Program Implementation & Transformation"},{id:"comp-trans",code:"Transformation",name:"Compliance Transformation",category:"program",desc:"Modernizing legacy security infrastructure, automating evidence streams, and scaling compliance systems.",badge:"Program Implementation & Transformation"},{id:"remediation",code:"Remediation",name:"Remediation Management",category:"program",desc:"Managing plan of action & milestones (POA&M), audit finding remediation, and control hardening.",badge:"Program Implementation & Transformation"},{id:"continuous-improv",code:"Improvement",name:"Continuous Improvement Initiatives",category:"program",desc:"Regularly reviewing security processes, updating risk registries, and optimizing control efficiency.",badge:"Program Implementation & Transformation"}],o=t==="all"?i:i.filter(a=>a.category===t);return d.jsxs("section",{id:"services",className:"services-section",children:[d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("div",{className:"badge-pill",children:[d.jsx(ul,{size:16,className:"badge-icon"}),d.jsx("span",{children:"Services"})]}),d.jsxs("h2",{children:["Your Compliance Journey.",d.jsx("br",{}),"Our Commitment."]})]}),d.jsx("div",{className:"services-categories",children:r.map(a=>d.jsx("button",{className:`cat-filter-btn ${t===a.id?"active":""}`,onClick:()=>n(a.id),children:a.name},a.id))}),d.jsx("div",{className:"services-desc-banner",children:d.jsx("p",{children:"Whether you're preparing for an audit, strengthening your cybersecurity posture, building a compliance function, or scaling your team, Gaussians works alongside you every step of the way. We become an extension of your team, combining deep cybersecurity and compliance expertise with practical execution, operational ownership, and cost-effective delivery."})}),d.jsx("div",{className:"services-grid",children:o.map(a=>d.jsxs("div",{className:"service-card glass-card",children:[d.jsxs("div",{className:"service-card-header",children:[d.jsx("span",{className:"service-code-badge",children:a.code}),d.jsx("span",{className:"service-category-badge",children:a.badge})]}),d.jsx("h3",{className:"service-card-title",children:a.name}),d.jsx("p",{className:"service-card-desc",children:a.desc}),d.jsxs("button",{className:"service-card-btn",onClick:()=>e(a.name),children:["Discuss Service ",d.jsx(Cr,{size:14})]})]},a.id))})]}),d.jsx("style",{children:`
        .services-section {
          padding: 6rem 0;
          background: var(--bg-soft-purple);
        }

        /* Two-column split header */
        .services-header-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border-purple);
          margin-bottom: 0;
        }

        .services-header-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .services-main-title {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1.2;
          color: var(--text-dark);
          margin: 0;
          text-align: left;
        }

        .services-title-accent {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services-header-right {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .services-header-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .services-header-split {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .services-categories {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin: 2.5rem 0 1.75rem 0;
          flex-wrap: wrap;
        }

        .services-desc-banner {
          background: linear-gradient(135deg, rgba(90, 56, 253, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
          border: 1px solid var(--border-purple);
          border-left: 4px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 1.1rem 1.75rem;
          margin-bottom: 2.5rem;
        }

        .services-desc-banner p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0;
        }

        .cat-filter-btn {
          padding: 0.6rem 1.4rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-purple);
          background: #FFFFFF;
          color: var(--text-dark);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .cat-filter-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .cat-filter-btn.active {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
          box-shadow: 0 6px 20px rgba(90, 56, 253, 0.25);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .service-card {
          padding: 2rem;
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: var(--transition-normal);
          min-height: 250px;
        }

        .service-card:hover {
          border-color: var(--primary);
          box-shadow: 0 10px 30px rgba(90, 56, 253, 0.08);
          transform: translateY(-4px);
        }

        .service-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .service-code-badge {
          background: var(--primary-light);
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.9rem;
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-sm);
        }

        .service-category-badge {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          max-width: 180px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .service-card-title {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          color: var(--text-dark);
          font-weight: 750;
        }

        .service-card-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .service-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: none;
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          padding: 0;
          transition: var(--transition-fast);
          width: fit-content;
        }

        .service-card-btn:hover {
          gap: 0.6rem;
          color: var(--primary-hover);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Z1({onOpenContact:e}){const t=[{icon:d.jsx(I1,{size:26}),title:"Advisory & Consulting",desc:"Expert guidance to help design, assess and improve your programs."},{icon:d.jsx(wm,{size:26}),title:"Managed Services",desc:"Ongoing support to operate compliance, risk and assurance activities."},{icon:d.jsx(H1,{size:26}),title:"Staff Augmentation",desc:"Skilled professionals embedded within your team."},{icon:d.jsx(vc,{size:26}),title:"Dedicated Offshore Teams",desc:"Scalable, cost-effective teams aligned to your business objectives."}];return d.jsxs("section",{className:"delivery-section",children:[d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"section-header",children:[d.jsx("div",{className:"badge-pill",children:d.jsx("span",{children:"How We Deliver"})}),d.jsx("h2",{children:"Delivery Model"}),d.jsx("p",{children:"Flexible engagement structures designed to align with your organization's operating environment and objectives."})]}),d.jsx("div",{className:"delivery-grid",children:t.map((n,r)=>d.jsxs("div",{className:"delivery-card glass-card",children:[d.jsx("div",{className:"delivery-icon-box",children:n.icon}),d.jsx("h3",{className:"delivery-title",children:n.title}),d.jsx("p",{className:"delivery-desc",children:n.desc}),d.jsxs("button",{className:"delivery-link",onClick:()=>e(n.title),children:["Explore Model ",d.jsx(Cr,{size:14})]})]},r))})]}),d.jsx("style",{children:`
        .delivery-section {
          padding: 5rem 0 6rem 0;
          background: #FFFFFF;
        }

        .delivery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .delivery-card {
          padding: 2rem 1.5rem;
          background: var(--bg-soft-purple);
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .delivery-card:hover {
          background: #FFFFFF;
          border-color: var(--primary);
          box-shadow: 0 12px 28px rgba(90, 56, 253, 0.12);
        }

        .delivery-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .delivery-title {
          font-size: 1.15rem;
          color: var(--text-dark);
          margin-bottom: 0.6rem;
        }

        .delivery-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .delivery-link {
          background: none;
          border: none;
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .delivery-link:hover {
          gap: 0.6rem;
          color: var(--primary-hover);
        }

        @media (max-width: 1024px) {
          .delivery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .delivery-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function K1(){const[e,t]=$.useState(null),n=o=>t(a=>a===o?null:o),r=[{name:"Integrity",desc:"Guides every decision we make."},{name:"Transparency",desc:"Ensures our clients always know where they stand."},{name:"Ownership",desc:"Drives us to remain accountable for outcomes, not just activities."},{name:"Excellence",desc:"Pushes us to continually raise the standard of our work."}],i=[{key:"about",icon:d.jsx(uf,{size:22}),label:"About Gaussians",accent:"linear-gradient(135deg, #5A38FD 0%, #7C3AED 100%)",content:d.jsxs("div",{className:"panel-body-text",children:[d.jsx("p",{className:"story-text",children:"Gaussians was founded on a simple belief: every organization deserves a trusted partner who understands both the challenges of running a business and the realities of managing cybersecurity, compliance, and risk in an increasingly complex world."}),d.jsx("p",{className:"story-text",children:"We know that behind every audit, security review, compliance requirement, or customer questionnaire is a leadership team trying to grow the business, protect its reputation, earn customer trust, and make the right decisions with limited time and resources. Having worked alongside organizations at different stages of growth, we understand these pressures because we have lived them with our clients."}),d.jsx("p",{className:"story-text",children:"That understanding shapes the way we work."}),d.jsx("p",{className:"story-text",children:"At Gaussians, we do not see ourselves as an external consulting firm delivering reports and recommendations. We see ourselves as partners in our clients' journey. We work alongside leadership teams, security teams, compliance functions, auditors, and operational stakeholders to build trust, strengthen resilience, and create programs that support long-term business success."}),d.jsx("p",{className:"story-text",children:"Since our inception in 2021, we have grown from a founder-led vision into a team of dedicated professionals supporting organizations across global markets. Over the years, we have helped clients establish and mature cybersecurity, governance, risk, compliance, and assurance programs while building scalable operating models that continue to deliver value long after individual projects have concluded."})]})},{key:"special",icon:d.jsx(yc,{size:22}),label:"What Makes Gaussians Special",accent:"linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",content:d.jsxs("div",{className:"panel-body-text",children:[d.jsx("p",{className:"story-text font-semibold text-dark",children:"What makes Gaussians special is our people."}),d.jsx("p",{className:"story-text",children:"Our team brings together experienced professionals with diverse backgrounds across cybersecurity, governance, risk management, compliance, assurance, privacy, and technology advisory. Beyond technical expertise, our people are known for their curiosity, accountability, professionalism, and commitment to client success. We take pride in building teams that clients trust—not only for their knowledge, but for their ability to listen, collaborate, and deliver."}),d.jsxs("div",{className:"values-wrapper",children:[d.jsx("h4",{className:"values-heading",children:"We believe that successful partnerships are built on strong values:"}),d.jsx("div",{className:"values-grid",children:r.map((o,a)=>d.jsxs("div",{className:"value-pill",children:[d.jsx("div",{className:"value-dot"}),d.jsxs("div",{children:[d.jsxs("strong",{children:[o.name,":"]})," ",o.desc]})]},a))})]}),d.jsx("p",{className:"story-text",children:"Today, Gaussians combines strategic advisory, operational support, managed services, and specialist talent solutions to help organizations navigate change, manage risk, strengthen trust, and achieve their goals with confidence."}),d.jsx("p",{className:"story-text",style:{fontWeight:600,color:"var(--primary)",marginTop:"1rem"},children:"Our journey continues to evolve, but our purpose remains unchanged: to be the trusted partner organizations rely on when security, compliance, risk, and trust matter most."})]})},{key:"vision-mission",icon:d.jsx(Hs,{size:22}),label:"Vision and Mission",accent:"linear-gradient(135deg, #5A38FD 0%, #4322EA 100%)",content:d.jsxs("div",{className:"panel-body-mv-split",children:[d.jsxs("div",{className:"mv-card-inline mission-inline",children:[d.jsx("div",{className:"inline-badge",children:d.jsx(Hs,{size:24})}),d.jsx("h3",{children:"Mission"}),d.jsx("p",{children:"To be the trusted partner organizations rely on to strengthen security, manage risk, achieve compliance, and build lasting trust with their customers, stakeholders, and communities."})]}),d.jsxs("div",{className:"mv-card-inline vision-inline",children:[d.jsx("div",{className:"inline-badge vision-badge",children:d.jsx(j1,{size:24})}),d.jsx("h3",{children:"Vision"}),d.jsx("p",{children:"To create a world where security, compliance, and trust are not barriers to growth, but foundations for sustainable success."})]})]})},{key:"global",icon:d.jsx(vc,{size:22}),label:"Global Presence",accent:"linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",content:d.jsxs("div",{className:"panel-body-text",children:[d.jsx("p",{className:"story-text",children:"Supporting organizations across global markets with trusted expertise in cybersecurity, compliance, governance, and assurance."}),d.jsx("p",{className:"story-text",children:"Our flexible delivery model enables us to work seamlessly across regions, time zones, and operating environments through offshore, remote, hybrid, and embedded team structures—providing clients with experienced professionals, scalable support, and strong accountability."}),d.jsx("p",{className:"story-text font-semibold text-primary",style:{marginBottom:0},children:"Wherever our clients operate, our focus remains the same: strengthening trust, managing risk, and delivering outcomes."})]})},{key:"leadership",icon:d.jsx(Nm,{size:22}),label:"Leadership and Subject Matter Experts",accent:"linear-gradient(135deg, #EC4899 0%, #D946EF 100%)",content:d.jsxs("div",{className:"panel-body-text",children:[d.jsx("p",{className:"story-text",children:"Gaussians is led by experienced professionals who have spent their careers helping organizations navigate cybersecurity, compliance, governance, risk, and assurance challenges in complex and rapidly evolving business environments."}),d.jsx("p",{className:"story-text",children:"Our leadership team combines deep subject matter expertise with hands-on operational experience, having supported organizations ranging from high-growth startups to established global enterprises. Beyond advisory services, our leaders have built and scaled teams, established centers of excellence, managed large-scale compliance and risk programs, and partnered closely with business leaders to drive meaningful outcomes."}),d.jsx("p",{className:"story-text",children:"What sets our leadership apart is a commitment to staying connected to both our clients and our teams. We believe the best solutions come from understanding business realities, working collaboratively, and remaining accountable from strategy through execution."}),d.jsx("p",{className:"story-text font-semibold",style:{marginBottom:0},children:"At Gaussians, leadership is measured not only by expertise, but by the trust we earn, the people we develop, and the outcomes we help our clients achieve."})]})}];return d.jsxs("section",{id:"about",className:"about-section",children:[d.jsx("div",{className:"about-orb about-orb-1"}),d.jsx("div",{className:"about-orb about-orb-2"}),d.jsxs("div",{className:"container about-container",children:[d.jsxs("div",{className:"section-header fade-in-up about-header-block",children:[d.jsxs("div",{className:"badge-pill",children:[d.jsx(uf,{size:16}),d.jsx("span",{children:"About Gaussians"})]}),d.jsxs("h2",{className:"about-main-title",children:["Your Trusted Partner in ",d.jsx("span",{className:"about-gradient-text",children:"Security & Compliance"})]}),d.jsx("div",{className:"section-divider"}),d.jsx("p",{className:"about-subtitle",children:"Founded on a simple belief: every organization deserves a trusted partner who understands both business growth and the realities of managing security, compliance, and risk."})]}),d.jsx("div",{className:"accordion-group fade-in-up",children:i.map(o=>{const a=e===o.key;return d.jsxs("div",{className:`accordion-item ${a?"is-open":""} panel-${o.key}`,children:[d.jsxs("button",{className:"accordion-trigger",onClick:()=>n(o.key),"aria-expanded":a,children:[d.jsxs("div",{className:"accordion-trigger-left",children:[d.jsx("span",{className:"accordion-icon-box",style:{background:o.accent},children:o.icon}),d.jsx("span",{className:"accordion-label",children:o.label})]}),d.jsx(_1,{size:20,className:`accordion-chevron ${a?"rotated":""}`})]}),d.jsx("div",{className:"accordion-body",children:d.jsx("div",{className:"accordion-body-inner",children:o.content})})]},o.key)})})]}),d.jsx("style",{children:`
        .about-section {
          padding: 7rem 0 6rem;
          background: linear-gradient(160deg, #FAFAFE 0%, #F5F3FF 50%, #FFFFFF 100%);
          position: relative;
          overflow: hidden;
        }

        .about-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.18;
        }
        .about-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #5A38FD, transparent);
          top: -120px; left: -180px;
        }
        .about-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #A855F7, transparent);
          bottom: -100px; right: -120px;
        }

        .about-container {
          position: relative;
          z-index: 2;
        }

        .about-header-block {
          max-width: 750px;
          margin: 0 auto 3.5rem auto;
          text-align: center;
        }

        .about-main-title {
          font-size: clamp(2rem, 4vw, 2.9rem);
          line-height: 1.2;
        }

        .about-gradient-text {
          background: linear-gradient(135deg, var(--primary) 0%, #A855F7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-subtitle {
          font-size: 1.08rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 620px;
          margin: 0 auto;
        }

        /* Accordion */
        .accordion-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .accordion-item {
          border-radius: var(--radius-lg);
          border: 1.5px solid var(--border-purple);
          background: #FFFFFF;
          box-shadow: 0 4px 20px rgba(90, 56, 253, 0.04);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
        }

        .accordion-item.is-open {
          border-color: var(--primary);
          box-shadow: 0 8px 30px rgba(90, 56, 253, 0.1);
        }

        .accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.35rem 1.75rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 1rem;
          transition: background 0.2s ease;
        }

        .accordion-trigger:hover {
          background: var(--primary-light);
        }

        .accordion-trigger-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .accordion-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          flex-shrink: 0;
          box-shadow: 0 6px 16px rgba(90, 56, 253, 0.3);
        }

        .accordion-label {
          font-size: 1.08rem;
          font-weight: 700;
          color: var(--text-dark);
          font-family: var(--font-heading);
        }

        .accordion-chevron {
          color: var(--primary);
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .accordion-chevron.rotated {
          transform: rotate(180deg);
        }

        /* Accordion body */
        .accordion-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .accordion-item.is-open .accordion-body {
          max-height: 3500px;
        }

        .accordion-body-inner {
          padding: 2rem;
          border-top: 1px solid var(--border-purple);
        }

        /* Common content styles */
        .story-text {
          font-size: 1rem;
          color: var(--text-body);
          line-height: 1.7;
          margin-bottom: 1.1rem;
        }
        .story-text:last-of-type {
          margin-bottom: 0;
        }

        .text-dark {
          color: var(--text-dark);
        }
        .font-semibold {
          font-weight: 600;
        }

        /* What makes special values list */
        .values-wrapper {
          margin: 1.75rem 0;
          padding: 1.5rem;
          background: var(--bg-soft-purple);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-purple);
        }

        .values-heading {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: var(--primary);
          font-weight: 700;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }

        .value-pill {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.93rem;
          color: var(--text-body);
        }

        .value-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--primary);
          margin-top: 6px;
          flex-shrink: 0;
        }

        /* Vision & Mission inline grid */
        .panel-body-mv-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          padding-top: 1rem;
        }

        .mv-card-inline {
          padding: 2rem;
          background: var(--bg-soft-purple);
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          position: relative;
        }

        .mv-card-inline h3 {
          font-size: 1.4rem;
          color: var(--text-dark);
          margin-bottom: 0.75rem;
          margin-top: 1rem;
        }

        .mv-card-inline p {
          font-size: 0.98rem;
          line-height: 1.65;
          color: var(--text-body);
        }

        .inline-badge {
          width: 48px; height: 48px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--primary), var(--accent-purple));
          color: #FFFFFF;
          display: flex; align-items: center; justify-content: center;
        }

        .vision-badge {
          background: linear-gradient(135deg, var(--accent-purple), var(--indigo-accent));
        }

        /* Responsive styling */
        @media (max-width: 768px) {
          .panel-body-mv-split {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}var _m={exports:{}},J1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ey=J1,ty=ey;function jm(){}function zm(){}zm.resetWarningCache=jm;var ny=function(){function e(r,i,o,a,l,s){if(s!==ty){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:zm,resetWarningCache:jm};return n.PropTypes=n,n};_m.exports=ny();var ry=_m.exports;const T=lp(ry);class Ae{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials;let r=0;for(let i=0;i<this._n&&i<32;i++){const o=n[i],a=t+o,l=Math.abs(t)<Math.abs(o)?t-(a-o):o-(a-t);l&&(n[r++]=l),t=a}return n[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let n=this._n,r,i,o,a=0;if(n>0){for(a=t[--n];n>0&&(r=a,i=t[--n],a=r+i,o=i-(a-r),!o););n>0&&(o<0&&t[n-1]<0||o>0&&t[n-1]>0)&&(i=o*2,r=a+i,i==r-a&&(a=r))}return a}}function*iy(e){for(const t of e)yield*t}function Mm(e){return Array.from(iy(e))}function sr(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n;for(var r=-1,i=Math.max(0,Math.ceil((t-e)/n))|0,o=new Array(i);++r<i;)o[r]=e+r*n;return o}var H=1e-6,Ii=1e-12,V=Math.PI,me=V/2,ya=V/4,Ue=V*2,re=180/V,W=V/180,Z=Math.abs,Rr=Math.atan,Be=Math.atan2,B=Math.cos,wo=Math.ceil,Pm=Math.exp,Ws=Math.hypot,xa=Math.log,Ul=Math.pow,I=Math.sin,ht=Math.sign||function(e){return e>0?1:e<0?-1:0},Ce=Math.sqrt,xc=Math.tan;function Fm(e){return e>1?0:e<-1?V:Math.acos(e)}function He(e){return e>1?me:e<-1?-me:Math.asin(e)}function cf(e){return(e=I(e/2))*e}function ce(){}function wa(e,t){e&&ff.hasOwnProperty(e.type)&&ff[e.type](e,t)}var df={Feature:function(e,t){wa(e.geometry,t)},FeatureCollection:function(e,t){for(var n=e.features,r=-1,i=n.length;++r<i;)wa(n[r].geometry,t)}},ff={Sphere:function(e,t){t.sphere()},Point:function(e,t){e=e.coordinates,t.point(e[0],e[1],e[2])},MultiPoint:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)e=n[r],t.point(e[0],e[1],e[2])},LineString:function(e,t){Gs(e.coordinates,t,0)},MultiLineString:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)Gs(n[r],t,0)},Polygon:function(e,t){pf(e.coordinates,t)},MultiPolygon:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)pf(n[r],t)},GeometryCollection:function(e,t){for(var n=e.geometries,r=-1,i=n.length;++r<i;)wa(n[r],t)}};function Gs(e,t,n){var r=-1,i=e.length-n,o;for(t.lineStart();++r<i;)o=e[r],t.point(o[0],o[1],o[2]);t.lineEnd()}function pf(e,t){var n=-1,r=e.length;for(t.polygonStart();++n<r;)Gs(e[n],t,1);t.polygonEnd()}function Et(e,t){e&&df.hasOwnProperty(e.type)?df[e.type](e,t):wa(e,t)}var ka=new Ae,Sa=new Ae,Tm,Am,Vs,qs,Ys,Lt={point:ce,lineStart:ce,lineEnd:ce,polygonStart:function(){ka=new Ae,Lt.lineStart=oy,Lt.lineEnd=ay},polygonEnd:function(){var e=+ka;Sa.add(e<0?Ue+e:e),this.lineStart=this.lineEnd=this.point=ce},sphere:function(){Sa.add(Ue)}};function oy(){Lt.point=ly}function ay(){Rm(Tm,Am)}function ly(e,t){Lt.point=Rm,Tm=e,Am=t,e*=W,t*=W,Vs=e,qs=B(t=t/2+ya),Ys=I(t)}function Rm(e,t){e*=W,t*=W,t=t/2+ya;var n=e-Vs,r=n>=0?1:-1,i=r*n,o=B(t),a=I(t),l=Ys*a,s=qs*o+l*B(i),u=l*r*I(i);ka.add(Be(u,s)),Vs=e,qs=o,Ys=a}function sy(e){return Sa=new Ae,Et(e,Lt),Sa*2}function Ea(e){return[Be(e[1],e[0]),He(e[2])]}function Hn(e){var t=e[0],n=e[1],r=B(n);return[r*B(t),r*I(t),I(n)]}function ko(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function _r(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Bl(e,t){e[0]+=t[0],e[1]+=t[1],e[2]+=t[2]}function So(e,t){return[e[0]*t,e[1]*t,e[2]*t]}function ba(e){var t=Ce(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=t,e[1]/=t,e[2]/=t}var se,qe,pe,nt,Fn,Im,Om,vr,hi,un,tn,Wt={point:Qs,lineStart:hf,lineEnd:mf,polygonStart:function(){Wt.point=Dm,Wt.lineStart=uy,Wt.lineEnd=cy,hi=new Ae,Lt.polygonStart()},polygonEnd:function(){Lt.polygonEnd(),Wt.point=Qs,Wt.lineStart=hf,Wt.lineEnd=mf,ka<0?(se=-(pe=180),qe=-(nt=90)):hi>H?nt=90:hi<-H&&(qe=-90),tn[0]=se,tn[1]=pe},sphere:function(){se=-(pe=180),qe=-(nt=90)}};function Qs(e,t){un.push(tn=[se=e,pe=e]),t<qe&&(qe=t),t>nt&&(nt=t)}function Lm(e,t){var n=Hn([e*W,t*W]);if(vr){var r=_r(vr,n),i=[r[1],-r[0],0],o=_r(i,r);ba(o),o=Ea(o);var a=e-Fn,l=a>0?1:-1,s=o[0]*re*l,u,c=Z(a)>180;c^(l*Fn<s&&s<l*e)?(u=o[1]*re,u>nt&&(nt=u)):(s=(s+360)%360-180,c^(l*Fn<s&&s<l*e)?(u=-o[1]*re,u<qe&&(qe=u)):(t<qe&&(qe=t),t>nt&&(nt=t))),c?e<Fn?tt(se,e)>tt(se,pe)&&(pe=e):tt(e,pe)>tt(se,pe)&&(se=e):pe>=se?(e<se&&(se=e),e>pe&&(pe=e)):e>Fn?tt(se,e)>tt(se,pe)&&(pe=e):tt(e,pe)>tt(se,pe)&&(se=e)}else un.push(tn=[se=e,pe=e]);t<qe&&(qe=t),t>nt&&(nt=t),vr=n,Fn=e}function hf(){Wt.point=Lm}function mf(){tn[0]=se,tn[1]=pe,Wt.point=Qs,vr=null}function Dm(e,t){if(vr){var n=e-Fn;hi.add(Z(n)>180?n+(n>0?360:-360):n)}else Im=e,Om=t;Lt.point(e,t),Lm(e,t)}function uy(){Lt.lineStart()}function cy(){Dm(Im,Om),Lt.lineEnd(),Z(hi)>H&&(se=-(pe=180)),tn[0]=se,tn[1]=pe,vr=null}function tt(e,t){return(t-=e)<0?t+360:t}function dy(e,t){return e[0]-t[0]}function gf(e,t){return e[0]<=e[1]?e[0]<=t&&t<=e[1]:t<e[0]||e[1]<t}function fy(e){var t,n,r,i,o,a,l;if(nt=pe=-(se=qe=1/0),un=[],Et(e,Wt),n=un.length){for(un.sort(dy),t=1,r=un[0],o=[r];t<n;++t)i=un[t],gf(r,i[0])||gf(r,i[1])?(tt(r[0],i[1])>tt(r[0],r[1])&&(r[1]=i[1]),tt(i[0],r[1])>tt(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-1/0,n=o.length-1,t=0,r=o[n];t<=n;r=i,++t)i=o[t],(l=tt(r[1],i[0]))>a&&(a=l,se=i[0],pe=r[1])}return un=tn=null,se===1/0||qe===1/0?[[NaN,NaN],[NaN,NaN]]:[[se,qe],[pe,nt]]}var Zr,Na,Ca,_a,ja,za,Ma,Pa,Xs,Zs,Ks,$m,Um,Oe,Le,De,bt={sphere:ce,point:wc,lineStart:vf,lineEnd:yf,polygonStart:function(){bt.lineStart=my,bt.lineEnd=gy},polygonEnd:function(){bt.lineStart=vf,bt.lineEnd=yf}};function wc(e,t){e*=W,t*=W;var n=B(t);Xi(n*B(e),n*I(e),I(t))}function Xi(e,t,n){++Zr,Ca+=(e-Ca)/Zr,_a+=(t-_a)/Zr,ja+=(n-ja)/Zr}function vf(){bt.point=py}function py(e,t){e*=W,t*=W;var n=B(t);Oe=n*B(e),Le=n*I(e),De=I(t),bt.point=hy,Xi(Oe,Le,De)}function hy(e,t){e*=W,t*=W;var n=B(t),r=n*B(e),i=n*I(e),o=I(t),a=Be(Ce((a=Le*o-De*i)*a+(a=De*r-Oe*o)*a+(a=Oe*i-Le*r)*a),Oe*r+Le*i+De*o);Na+=a,za+=a*(Oe+(Oe=r)),Ma+=a*(Le+(Le=i)),Pa+=a*(De+(De=o)),Xi(Oe,Le,De)}function yf(){bt.point=wc}function my(){bt.point=vy}function gy(){Bm($m,Um),bt.point=wc}function vy(e,t){$m=e,Um=t,e*=W,t*=W,bt.point=Bm;var n=B(t);Oe=n*B(e),Le=n*I(e),De=I(t),Xi(Oe,Le,De)}function Bm(e,t){e*=W,t*=W;var n=B(t),r=n*B(e),i=n*I(e),o=I(t),a=Le*o-De*i,l=De*r-Oe*o,s=Oe*i-Le*r,u=Ws(a,l,s),c=He(u),f=u&&-c/u;Xs.add(f*a),Zs.add(f*l),Ks.add(f*s),Na+=c,za+=c*(Oe+(Oe=r)),Ma+=c*(Le+(Le=i)),Pa+=c*(De+(De=o)),Xi(Oe,Le,De)}function yy(e){Zr=Na=Ca=_a=ja=za=Ma=Pa=0,Xs=new Ae,Zs=new Ae,Ks=new Ae,Et(e,bt);var t=+Xs,n=+Zs,r=+Ks,i=Ws(t,n,r);return i<Ii&&(t=za,n=Ma,r=Pa,Na<H&&(t=Ca,n=_a,r=ja),i=Ws(t,n,r),i<Ii)?[NaN,NaN]:[Be(n,t)*re,He(r/i)*re]}function Qn(e){return function(){return e}}function Js(e,t){function n(r,i){return r=e(r,i),t(r[0],r[1])}return e.invert&&t.invert&&(n.invert=function(r,i){return r=t.invert(r,i),r&&e.invert(r[0],r[1])}),n}function eu(e,t){return[Z(e)>V?e+Math.round(-e/Ue)*Ue:e,t]}eu.invert=eu;function kc(e,t,n){return(e%=Ue)?t||n?Js(wf(e),kf(t,n)):wf(e):t||n?kf(t,n):eu}function xf(e){return function(t,n){return t+=e,[t>V?t-Ue:t<-V?t+Ue:t,n]}}function wf(e){var t=xf(e);return t.invert=xf(-e),t}function kf(e,t){var n=B(e),r=I(e),i=B(t),o=I(t);function a(l,s){var u=B(s),c=B(l)*u,f=I(l)*u,p=I(s),h=p*n+c*r;return[Be(f*i-h*o,c*n-p*r),He(h*i+f*o)]}return a.invert=function(l,s){var u=B(s),c=B(l)*u,f=I(l)*u,p=I(s),h=p*i-f*o;return[Be(f*i+p*o,c*n+h*r),He(h*n-c*r)]},a}function Hm(e){e=kc(e[0]*W,e[1]*W,e.length>2?e[2]*W:0);function t(n){return n=e(n[0]*W,n[1]*W),n[0]*=re,n[1]*=re,n}return t.invert=function(n){return n=e.invert(n[0]*W,n[1]*W),n[0]*=re,n[1]*=re,n},t}function Wm(e,t,n,r,i,o){if(n){var a=B(t),l=I(t),s=r*n;i==null?(i=t+r*Ue,o=t-s/2):(i=Sf(a,i),o=Sf(a,o),(r>0?i<o:i>o)&&(i+=r*Ue));for(var u,c=i;r>0?c>o:c<o;c-=s)u=Ea([a,-l*B(c),-l*I(c)]),e.point(u[0],u[1])}}function Sf(e,t){t=Hn(t),t[0]-=e,ba(t);var n=Fm(-t[1]);return((-t[2]<0?-n:n)+Ue-H)%Ue}function xy(){var e=Qn([0,0]),t=Qn(90),n=Qn(6),r,i,o={point:a};function a(s,u){r.push(s=i(s,u)),s[0]*=re,s[1]*=re}function l(){var s=e.apply(this,arguments),u=t.apply(this,arguments)*W,c=n.apply(this,arguments)*W;return r=[],i=kc(-s[0]*W,-s[1]*W,0).invert,Wm(o,u,c,1),s={type:"Polygon",coordinates:[r]},r=i=null,s}return l.center=function(s){return arguments.length?(e=typeof s=="function"?s:Qn([+s[0],+s[1]]),l):e},l.radius=function(s){return arguments.length?(t=typeof s=="function"?s:Qn(+s),l):t},l.precision=function(s){return arguments.length?(n=typeof s=="function"?s:Qn(+s),l):n},l}function Gm(){var e=[],t;return{point:function(n,r,i){t.push([n,r,i])},lineStart:function(){e.push(t=[])},lineEnd:ce,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var n=e;return e=[],t=null,n}}}function Uo(e,t){return Z(e[0]-t[0])<H&&Z(e[1]-t[1])<H}function Eo(e,t,n,r){this.x=e,this.z=t,this.o=n,this.e=r,this.v=!1,this.n=this.p=null}function Vm(e,t,n,r,i){var o=[],a=[],l,s;if(e.forEach(function(y){if(!((w=y.length-1)<=0)){var w,N=y[0],m=y[w],v;if(Uo(N,m)){if(!N[2]&&!m[2]){for(i.lineStart(),l=0;l<w;++l)i.point((N=y[l])[0],N[1]);i.lineEnd();return}m[0]+=2*H}o.push(v=new Eo(N,y,null,!0)),a.push(v.o=new Eo(N,null,v,!1)),o.push(v=new Eo(m,y,null,!1)),a.push(v.o=new Eo(m,null,v,!0))}}),!!o.length){for(a.sort(t),Ef(o),Ef(a),l=0,s=a.length;l<s;++l)a[l].e=n=!n;for(var u=o[0],c,f;;){for(var p=u,h=!0;p.v;)if((p=p.n)===u)return;c=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(h)for(l=0,s=c.length;l<s;++l)i.point((f=c[l])[0],f[1]);else r(p.x,p.n.x,1,i);p=p.n}else{if(h)for(c=p.p.z,l=c.length-1;l>=0;--l)i.point((f=c[l])[0],f[1]);else r(p.x,p.p.x,-1,i);p=p.p}p=p.o,c=p.z,h=!h}while(!p.v);i.lineEnd()}}}function Ef(e){if(t=e.length){for(var t,n=0,r=e[0],i;++n<t;)r.n=i=e[n],i.p=r,r=i;r.n=i=e[0],i.p=r}}function Hl(e){return Z(e[0])<=V?e[0]:ht(e[0])*((Z(e[0])+V)%Ue-V)}function qm(e,t){var n=Hl(t),r=t[1],i=I(r),o=[I(n),-B(n),0],a=0,l=0,s=new Ae;i===1?r=me+H:i===-1&&(r=-me-H);for(var u=0,c=e.length;u<c;++u)if(p=(f=e[u]).length)for(var f,p,h=f[p-1],y=Hl(h),w=h[1]/2+ya,N=I(w),m=B(w),v=0;v<p;++v,y=x,N=C,m=j,h=g){var g=f[v],x=Hl(g),S=g[1]/2+ya,C=I(S),j=B(S),M=x-y,L=M>=0?1:-1,A=L*M,D=A>V,q=N*C;if(s.add(Be(q*L*I(A),m*j+q*B(A))),a+=D?M+L*Ue:M,D^y>=n^x>=n){var K=_r(Hn(h),Hn(g));ba(K);var k=_r(o,K);ba(k);var E=(D^M>=0?-1:1)*He(k[2]);(r>E||r===E&&(K[0]||K[1]))&&(l+=D^M>=0?1:-1)}}return(a<-H||a<H&&s<-Ii)^l&1}function Ym(e,t,n,r){return function(i){var o=t(i),a=Gm(),l=t(a),s=!1,u,c,f,p={point:h,lineStart:w,lineEnd:N,polygonStart:function(){p.point=m,p.lineStart=v,p.lineEnd=g,c=[],u=[]},polygonEnd:function(){p.point=h,p.lineStart=w,p.lineEnd=N,c=Mm(c);var x=qm(u,r);c.length?(s||(i.polygonStart(),s=!0),Vm(c,ky,x,n,i)):x&&(s||(i.polygonStart(),s=!0),i.lineStart(),n(null,null,1,i),i.lineEnd()),s&&(i.polygonEnd(),s=!1),c=u=null},sphere:function(){i.polygonStart(),i.lineStart(),n(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function h(x,S){e(x,S)&&i.point(x,S)}function y(x,S){o.point(x,S)}function w(){p.point=y,o.lineStart()}function N(){p.point=h,o.lineEnd()}function m(x,S){f.push([x,S]),l.point(x,S)}function v(){l.lineStart(),f=[]}function g(){m(f[0][0],f[0][1]),l.lineEnd();var x=l.clean(),S=a.result(),C,j=S.length,M,L,A;if(f.pop(),u.push(f),f=null,!!j){if(x&1){if(L=S[0],(M=L.length-1)>0){for(s||(i.polygonStart(),s=!0),i.lineStart(),C=0;C<M;++C)i.point((A=L[C])[0],A[1]);i.lineEnd()}return}j>1&&x&2&&S.push(S.pop().concat(S.shift())),c.push(S.filter(wy))}}return p}}function wy(e){return e.length>1}function ky(e,t){return((e=e.x)[0]<0?e[1]-me-H:me-e[1])-((t=t.x)[0]<0?t[1]-me-H:me-t[1])}const tu=Ym(function(){return!0},Sy,by,[-V,-me]);function Sy(e){var t=NaN,n=NaN,r=NaN,i;return{lineStart:function(){e.lineStart(),i=1},point:function(o,a){var l=o>0?V:-V,s=Z(o-t);Z(s-V)<H?(e.point(t,n=(n+a)/2>0?me:-me),e.point(r,n),e.lineEnd(),e.lineStart(),e.point(l,n),e.point(o,n),i=0):r!==l&&s>=V&&(Z(t-r)<H&&(t-=r*H),Z(o-l)<H&&(o-=l*H),n=Ey(t,n,o,a),e.point(r,n),e.lineEnd(),e.lineStart(),e.point(l,n),i=0),e.point(t=o,n=a),r=l},lineEnd:function(){e.lineEnd(),t=n=NaN},clean:function(){return 2-i}}}function Ey(e,t,n,r){var i,o,a=I(e-n);return Z(a)>H?Rr((I(t)*(o=B(r))*I(n)-I(r)*(i=B(t))*I(e))/(i*o*a)):(t+r)/2}function by(e,t,n,r){var i;if(e==null)i=n*me,r.point(-V,i),r.point(0,i),r.point(V,i),r.point(V,0),r.point(V,-i),r.point(0,-i),r.point(-V,-i),r.point(-V,0),r.point(-V,i);else if(Z(e[0]-t[0])>H){var o=e[0]<t[0]?V:-V;i=n*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(t[0],t[1])}function Qm(e){var t=B(e),n=6*W,r=t>0,i=Z(t)>H;function o(c,f,p,h){Wm(h,e,n,p,c,f)}function a(c,f){return B(c)*B(f)>t}function l(c){var f,p,h,y,w;return{lineStart:function(){y=h=!1,w=1},point:function(N,m){var v=[N,m],g,x=a(N,m),S=r?x?0:u(N,m):x?u(N+(N<0?V:-V),m):0;if(!f&&(y=h=x)&&c.lineStart(),x!==h&&(g=s(f,v),(!g||Uo(f,g)||Uo(v,g))&&(v[2]=1)),x!==h)w=0,x?(c.lineStart(),g=s(v,f),c.point(g[0],g[1])):(g=s(f,v),c.point(g[0],g[1],2),c.lineEnd()),f=g;else if(i&&f&&r^x){var C;!(S&p)&&(C=s(v,f,!0))&&(w=0,r?(c.lineStart(),c.point(C[0][0],C[0][1]),c.point(C[1][0],C[1][1]),c.lineEnd()):(c.point(C[1][0],C[1][1]),c.lineEnd(),c.lineStart(),c.point(C[0][0],C[0][1],3)))}x&&(!f||!Uo(f,v))&&c.point(v[0],v[1]),f=v,h=x,p=S},lineEnd:function(){h&&c.lineEnd(),f=null},clean:function(){return w|(y&&h)<<1}}}function s(c,f,p){var h=Hn(c),y=Hn(f),w=[1,0,0],N=_r(h,y),m=ko(N,N),v=N[0],g=m-v*v;if(!g)return!p&&c;var x=t*m/g,S=-t*v/g,C=_r(w,N),j=So(w,x),M=So(N,S);Bl(j,M);var L=C,A=ko(j,L),D=ko(L,L),q=A*A-D*(ko(j,j)-1);if(!(q<0)){var K=Ce(q),k=So(L,(-A-K)/D);if(Bl(k,j),k=Ea(k),!p)return k;var E=c[0],b=f[0],R=c[1],_=f[1],z;b<E&&(z=E,E=b,b=z);var F=b-E,U=Z(F-V)<H,G=U||F<H;if(!U&&_<R&&(z=R,R=_,_=z),G?U?R+_>0^k[1]<(Z(k[0]-E)<H?R:_):R<=k[1]&&k[1]<=_:F>V^(E<=k[0]&&k[0]<=b)){var ee=So(L,(-A+K)/D);return Bl(ee,j),[k,Ea(ee)]}}}function u(c,f){var p=r?e:V-e,h=0;return c<-p?h|=1:c>p&&(h|=2),f<-p?h|=4:f>p&&(h|=8),h}return Ym(a,l,o,r?[0,-e]:[-V,e-V])}function Ny(e,t,n,r,i,o){var a=e[0],l=e[1],s=t[0],u=t[1],c=0,f=1,p=s-a,h=u-l,y;if(y=n-a,!(!p&&y>0)){if(y/=p,p<0){if(y<c)return;y<f&&(f=y)}else if(p>0){if(y>f)return;y>c&&(c=y)}if(y=i-a,!(!p&&y<0)){if(y/=p,p<0){if(y>f)return;y>c&&(c=y)}else if(p>0){if(y<c)return;y<f&&(f=y)}if(y=r-l,!(!h&&y>0)){if(y/=h,h<0){if(y<c)return;y<f&&(f=y)}else if(h>0){if(y>f)return;y>c&&(c=y)}if(y=o-l,!(!h&&y<0)){if(y/=h,h<0){if(y>f)return;y>c&&(c=y)}else if(h>0){if(y<c)return;y<f&&(f=y)}return c>0&&(e[0]=a+c*p,e[1]=l+c*h),f<1&&(t[0]=a+f*p,t[1]=l+f*h),!0}}}}}var Kr=1e9,bo=-Kr;function cl(e,t,n,r){function i(u,c){return e<=u&&u<=n&&t<=c&&c<=r}function o(u,c,f,p){var h=0,y=0;if(u==null||(h=a(u,f))!==(y=a(c,f))||s(u,c)<0^f>0)do p.point(h===0||h===3?e:n,h>1?r:t);while((h=(h+f+4)%4)!==y);else p.point(c[0],c[1])}function a(u,c){return Z(u[0]-e)<H?c>0?0:3:Z(u[0]-n)<H?c>0?2:1:Z(u[1]-t)<H?c>0?1:0:c>0?3:2}function l(u,c){return s(u.x,c.x)}function s(u,c){var f=a(u,1),p=a(c,1);return f!==p?f-p:f===0?c[1]-u[1]:f===1?u[0]-c[0]:f===2?u[1]-c[1]:c[0]-u[0]}return function(u){var c=u,f=Gm(),p,h,y,w,N,m,v,g,x,S,C,j={point:M,lineStart:q,lineEnd:K,polygonStart:A,polygonEnd:D};function M(E,b){i(E,b)&&c.point(E,b)}function L(){for(var E=0,b=0,R=h.length;b<R;++b)for(var _=h[b],z=1,F=_.length,U=_[0],G,ee,X=U[0],ne=U[1];z<F;++z)G=X,ee=ne,U=_[z],X=U[0],ne=U[1],ee<=r?ne>r&&(X-G)*(r-ee)>(ne-ee)*(e-G)&&++E:ne<=r&&(X-G)*(r-ee)<(ne-ee)*(e-G)&&--E;return E}function A(){c=f,p=[],h=[],C=!0}function D(){var E=L(),b=C&&E,R=(p=Mm(p)).length;(b||R)&&(u.polygonStart(),b&&(u.lineStart(),o(null,null,1,u),u.lineEnd()),R&&Vm(p,l,E,o,u),u.polygonEnd()),c=u,p=h=y=null}function q(){j.point=k,h&&h.push(y=[]),S=!0,x=!1,v=g=NaN}function K(){p&&(k(w,N),m&&x&&f.rejoin(),p.push(f.result())),j.point=M,x&&c.lineEnd()}function k(E,b){var R=i(E,b);if(h&&y.push([E,b]),S)w=E,N=b,m=R,S=!1,R&&(c.lineStart(),c.point(E,b));else if(R&&x)c.point(E,b);else{var _=[v=Math.max(bo,Math.min(Kr,v)),g=Math.max(bo,Math.min(Kr,g))],z=[E=Math.max(bo,Math.min(Kr,E)),b=Math.max(bo,Math.min(Kr,b))];Ny(_,z,e,t,n,r)?(x||(c.lineStart(),c.point(_[0],_[1])),c.point(z[0],z[1]),R||c.lineEnd(),C=!1):R&&(c.lineStart(),c.point(E,b),C=!1)}v=E,g=b,x=R}return j}}function Cy(){var e=0,t=0,n=960,r=500,i,o,a;return a={stream:function(l){return i&&o===l?i:i=cl(e,t,n,r)(o=l)},extent:function(l){return arguments.length?(e=+l[0][0],t=+l[0][1],n=+l[1][0],r=+l[1][1],i=o=null,a):[[e,t],[n,r]]}}}var nu,ru,Bo,Ho,jr={sphere:ce,point:ce,lineStart:_y,lineEnd:ce,polygonStart:ce,polygonEnd:ce};function _y(){jr.point=zy,jr.lineEnd=jy}function jy(){jr.point=jr.lineEnd=ce}function zy(e,t){e*=W,t*=W,ru=e,Bo=I(t),Ho=B(t),jr.point=My}function My(e,t){e*=W,t*=W;var n=I(t),r=B(t),i=Z(e-ru),o=B(i),a=I(i),l=r*a,s=Ho*n-Bo*r*o,u=Bo*n+Ho*r*o;nu.add(Be(Ce(l*l+s*s),u)),ru=e,Bo=n,Ho=r}function Xm(e){return nu=new Ae,Et(e,jr),+nu}var iu=[null,null],Py={type:"LineString",coordinates:iu};function Fa(e,t){return iu[0]=e,iu[1]=t,Xm(Py)}var bf={Feature:function(e,t){return Ta(e.geometry,t)},FeatureCollection:function(e,t){for(var n=e.features,r=-1,i=n.length;++r<i;)if(Ta(n[r].geometry,t))return!0;return!1}},Nf={Sphere:function(){return!0},Point:function(e,t){return Cf(e.coordinates,t)},MultiPoint:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)if(Cf(n[r],t))return!0;return!1},LineString:function(e,t){return _f(e.coordinates,t)},MultiLineString:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)if(_f(n[r],t))return!0;return!1},Polygon:function(e,t){return jf(e.coordinates,t)},MultiPolygon:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)if(jf(n[r],t))return!0;return!1},GeometryCollection:function(e,t){for(var n=e.geometries,r=-1,i=n.length;++r<i;)if(Ta(n[r],t))return!0;return!1}};function Ta(e,t){return e&&Nf.hasOwnProperty(e.type)?Nf[e.type](e,t):!1}function Cf(e,t){return Fa(e,t)===0}function _f(e,t){for(var n,r,i,o=0,a=e.length;o<a;o++){if(r=Fa(e[o],t),r===0||o>0&&(i=Fa(e[o],e[o-1]),i>0&&n<=i&&r<=i&&(n+r-i)*(1-Math.pow((n-r)/i,2))<Ii*i))return!0;n=r}return!1}function jf(e,t){return!!qm(e.map(Fy),Zm(t))}function Fy(e){return e=e.map(Zm),e.pop(),e}function Zm(e){return[e[0]*W,e[1]*W]}function Ty(e,t){return(e&&bf.hasOwnProperty(e.type)?bf[e.type]:Ta)(e,t)}function zf(e,t,n){var r=sr(e,t-H,n).concat(t);return function(i){return r.map(function(o){return[i,o]})}}function Mf(e,t,n){var r=sr(e,t-H,n).concat(t);return function(i){return r.map(function(o){return[o,i]})}}function Sc(){var e,t,n,r,i,o,a,l,s=10,u=s,c=90,f=360,p,h,y,w,N=2.5;function m(){return{type:"MultiLineString",coordinates:v()}}function v(){return sr(wo(r/c)*c,n,c).map(y).concat(sr(wo(l/f)*f,a,f).map(w)).concat(sr(wo(t/s)*s,e,s).filter(function(g){return Z(g%c)>H}).map(p)).concat(sr(wo(o/u)*u,i,u).filter(function(g){return Z(g%f)>H}).map(h))}return m.lines=function(){return v().map(function(g){return{type:"LineString",coordinates:g}})},m.outline=function(){return{type:"Polygon",coordinates:[y(r).concat(w(a).slice(1),y(n).reverse().slice(1),w(l).reverse().slice(1))]}},m.extent=function(g){return arguments.length?m.extentMajor(g).extentMinor(g):m.extentMinor()},m.extentMajor=function(g){return arguments.length?(r=+g[0][0],n=+g[1][0],l=+g[0][1],a=+g[1][1],r>n&&(g=r,r=n,n=g),l>a&&(g=l,l=a,a=g),m.precision(N)):[[r,l],[n,a]]},m.extentMinor=function(g){return arguments.length?(t=+g[0][0],e=+g[1][0],o=+g[0][1],i=+g[1][1],t>e&&(g=t,t=e,e=g),o>i&&(g=o,o=i,i=g),m.precision(N)):[[t,o],[e,i]]},m.step=function(g){return arguments.length?m.stepMajor(g).stepMinor(g):m.stepMinor()},m.stepMajor=function(g){return arguments.length?(c=+g[0],f=+g[1],m):[c,f]},m.stepMinor=function(g){return arguments.length?(s=+g[0],u=+g[1],m):[s,u]},m.precision=function(g){return arguments.length?(N=+g,p=zf(o,i,90),h=Mf(t,e,N),y=zf(l,a,90),w=Mf(r,n,N),m):N},m.extentMajor([[-180,-90+H],[180,90-H]]).extentMinor([[-180,-80-H],[180,80+H]])}function Ay(){return Sc()()}function Ry(e,t){var n=e[0]*W,r=e[1]*W,i=t[0]*W,o=t[1]*W,a=B(r),l=I(r),s=B(o),u=I(o),c=a*B(n),f=a*I(n),p=s*B(i),h=s*I(i),y=2*He(Ce(cf(o-r)+a*s*cf(i-n))),w=I(y),N=y?function(m){var v=I(m*=y)/w,g=I(y-m)/w,x=g*c+v*p,S=g*f+v*h,C=g*l+v*u;return[Be(S,x)*re,Be(C,Ce(x*x+S*S))*re]}:function(){return[n*re,r*re]};return N.distance=y,N}const Oi=e=>e;var Wl=new Ae,ou=new Ae,Km,Jm,au,lu,Gt={point:ce,lineStart:ce,lineEnd:ce,polygonStart:function(){Gt.lineStart=Iy,Gt.lineEnd=Ly},polygonEnd:function(){Gt.lineStart=Gt.lineEnd=Gt.point=ce,Wl.add(Z(ou)),ou=new Ae},result:function(){var e=Wl/2;return Wl=new Ae,e}};function Iy(){Gt.point=Oy}function Oy(e,t){Gt.point=e0,Km=au=e,Jm=lu=t}function e0(e,t){ou.add(lu*e-au*t),au=e,lu=t}function Ly(){e0(Km,Jm)}var zr=1/0,Aa=zr,Li=-zr,Ra=Li,Ia={point:Dy,lineStart:ce,lineEnd:ce,polygonStart:ce,polygonEnd:ce,result:function(){var e=[[zr,Aa],[Li,Ra]];return Li=Ra=-(Aa=zr=1/0),e}};function Dy(e,t){e<zr&&(zr=e),e>Li&&(Li=e),t<Aa&&(Aa=t),t>Ra&&(Ra=t)}var su=0,uu=0,Jr=0,Oa=0,La=0,ur=0,cu=0,du=0,ei=0,t0,n0,Ft,Tt,ft={point:Wn,lineStart:Pf,lineEnd:Ff,polygonStart:function(){ft.lineStart=By,ft.lineEnd=Hy},polygonEnd:function(){ft.point=Wn,ft.lineStart=Pf,ft.lineEnd=Ff},result:function(){var e=ei?[cu/ei,du/ei]:ur?[Oa/ur,La/ur]:Jr?[su/Jr,uu/Jr]:[NaN,NaN];return su=uu=Jr=Oa=La=ur=cu=du=ei=0,e}};function Wn(e,t){su+=e,uu+=t,++Jr}function Pf(){ft.point=$y}function $y(e,t){ft.point=Uy,Wn(Ft=e,Tt=t)}function Uy(e,t){var n=e-Ft,r=t-Tt,i=Ce(n*n+r*r);Oa+=i*(Ft+e)/2,La+=i*(Tt+t)/2,ur+=i,Wn(Ft=e,Tt=t)}function Ff(){ft.point=Wn}function By(){ft.point=Wy}function Hy(){r0(t0,n0)}function Wy(e,t){ft.point=r0,Wn(t0=Ft=e,n0=Tt=t)}function r0(e,t){var n=e-Ft,r=t-Tt,i=Ce(n*n+r*r);Oa+=i*(Ft+e)/2,La+=i*(Tt+t)/2,ur+=i,i=Tt*e-Ft*t,cu+=i*(Ft+e),du+=i*(Tt+t),ei+=i*3,Wn(Ft=e,Tt=t)}function i0(e){this._context=e}i0.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,t){switch(this._point){case 0:{this._context.moveTo(e,t),this._point=1;break}case 1:{this._context.lineTo(e,t);break}default:{this._context.moveTo(e+this._radius,t),this._context.arc(e,t,this._radius,0,Ue);break}}},result:ce};var fu=new Ae,Gl,o0,a0,ti,ni,Di={point:ce,lineStart:function(){Di.point=Gy},lineEnd:function(){Gl&&l0(o0,a0),Di.point=ce},polygonStart:function(){Gl=!0},polygonEnd:function(){Gl=null},result:function(){var e=+fu;return fu=new Ae,e}};function Gy(e,t){Di.point=l0,o0=ti=e,a0=ni=t}function l0(e,t){ti-=e,ni-=t,fu.add(Ce(ti*ti+ni*ni)),ti=e,ni=t}function s0(){this._string=[]}s0.prototype={_radius:4.5,_circle:Tf(4.5),pointRadius:function(e){return(e=+e)!==this._radius&&(this._radius=e,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._string.push("Z"),this._point=NaN},point:function(e,t){switch(this._point){case 0:{this._string.push("M",e,",",t),this._point=1;break}case 1:{this._string.push("L",e,",",t);break}default:{this._circle==null&&(this._circle=Tf(this._radius)),this._string.push("M",e,",",t,this._circle);break}}},result:function(){if(this._string.length){var e=this._string.join("");return this._string=[],e}else return null}};function Tf(e){return"m0,"+e+"a"+e+","+e+" 0 1,1 0,"+-2*e+"a"+e+","+e+" 0 1,1 0,"+2*e+"z"}function u0(e,t){var n=4.5,r,i;function o(a){return a&&(typeof n=="function"&&i.pointRadius(+n.apply(this,arguments)),Et(a,r(i))),i.result()}return o.area=function(a){return Et(a,r(Gt)),Gt.result()},o.measure=function(a){return Et(a,r(Di)),Di.result()},o.bounds=function(a){return Et(a,r(Ia)),Ia.result()},o.centroid=function(a){return Et(a,r(ft)),ft.result()},o.projection=function(a){return arguments.length?(r=a==null?(e=null,Oi):(e=a).stream,o):e},o.context=function(a){return arguments.length?(i=a==null?(t=null,new s0):new i0(t=a),typeof n!="function"&&i.pointRadius(n),o):t},o.pointRadius=function(a){return arguments.length?(n=typeof a=="function"?a:(i.pointRadius(+a),+a),o):n},o.projection(e).context(t)}function Vy(e){return{stream:Zi(e)}}function Zi(e){return function(t){var n=new pu;for(var r in e)n[r]=e[r];return n.stream=t,n}}function pu(){}pu.prototype={constructor:pu,point:function(e,t){this.stream.point(e,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Ec(e,t,n){var r=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),r!=null&&e.clipExtent(null),Et(n,e.stream(Ia)),t(Ia.result()),r!=null&&e.clipExtent(r),e}function dl(e,t,n){return Ec(e,function(r){var i=t[1][0]-t[0][0],o=t[1][1]-t[0][1],a=Math.min(i/(r[1][0]-r[0][0]),o/(r[1][1]-r[0][1])),l=+t[0][0]+(i-a*(r[1][0]+r[0][0]))/2,s=+t[0][1]+(o-a*(r[1][1]+r[0][1]))/2;e.scale(150*a).translate([l,s])},n)}function bc(e,t,n){return dl(e,[[0,0],t],n)}function Nc(e,t,n){return Ec(e,function(r){var i=+t,o=i/(r[1][0]-r[0][0]),a=(i-o*(r[1][0]+r[0][0]))/2,l=-o*r[0][1];e.scale(150*o).translate([a,l])},n)}function Cc(e,t,n){return Ec(e,function(r){var i=+t,o=i/(r[1][1]-r[0][1]),a=-o*r[0][0],l=(i-o*(r[1][1]+r[0][1]))/2;e.scale(150*o).translate([a,l])},n)}var Af=16,qy=B(30*W);function Rf(e,t){return+t?Qy(e,t):Yy(e)}function Yy(e){return Zi({point:function(t,n){t=e(t,n),this.stream.point(t[0],t[1])}})}function Qy(e,t){function n(r,i,o,a,l,s,u,c,f,p,h,y,w,N){var m=u-r,v=c-i,g=m*m+v*v;if(g>4*t&&w--){var x=a+p,S=l+h,C=s+y,j=Ce(x*x+S*S+C*C),M=He(C/=j),L=Z(Z(C)-1)<H||Z(o-f)<H?(o+f)/2:Be(S,x),A=e(L,M),D=A[0],q=A[1],K=D-r,k=q-i,E=v*K-m*k;(E*E/g>t||Z((m*K+v*k)/g-.5)>.3||a*p+l*h+s*y<qy)&&(n(r,i,o,a,l,s,D,q,L,x/=j,S/=j,C,w,N),N.point(D,q),n(D,q,L,x,S,C,u,c,f,p,h,y,w,N))}}return function(r){var i,o,a,l,s,u,c,f,p,h,y,w,N={point:m,lineStart:v,lineEnd:x,polygonStart:function(){r.polygonStart(),N.lineStart=S},polygonEnd:function(){r.polygonEnd(),N.lineStart=v}};function m(M,L){M=e(M,L),r.point(M[0],M[1])}function v(){f=NaN,N.point=g,r.lineStart()}function g(M,L){var A=Hn([M,L]),D=e(M,L);n(f,p,c,h,y,w,f=D[0],p=D[1],c=M,h=A[0],y=A[1],w=A[2],Af,r),r.point(f,p)}function x(){N.point=m,r.lineEnd()}function S(){v(),N.point=C,N.lineEnd=j}function C(M,L){g(i=M,L),o=f,a=p,l=h,s=y,u=w,N.point=g}function j(){n(f,p,c,h,y,w,o,a,i,l,s,u,Af,r),N.lineEnd=x,x()}return N}}var Xy=Zi({point:function(e,t){this.stream.point(e*W,t*W)}});function Zy(e){return Zi({point:function(t,n){var r=e(t,n);return this.stream.point(r[0],r[1])}})}function Ky(e,t,n,r,i){function o(a,l){return a*=r,l*=i,[t+e*a,n-e*l]}return o.invert=function(a,l){return[(a-t)/e*r,(n-l)/e*i]},o}function If(e,t,n,r,i,o){if(!o)return Ky(e,t,n,r,i);var a=B(o),l=I(o),s=a*e,u=l*e,c=a/e,f=l/e,p=(l*n-a*t)/e,h=(l*t+a*n)/e;function y(w,N){return w*=r,N*=i,[s*w-u*N+t,n-u*w-s*N]}return y.invert=function(w,N){return[r*(c*w-f*N+p),i*(h-f*w-c*N)]},y}function Dt(e){return _c(function(){return e})()}function _c(e){var t,n=150,r=480,i=250,o=0,a=0,l=0,s=0,u=0,c,f=0,p=1,h=1,y=null,w=tu,N=null,m,v,g,x=Oi,S=.5,C,j,M,L,A;function D(E){return M(E[0]*W,E[1]*W)}function q(E){return E=M.invert(E[0],E[1]),E&&[E[0]*re,E[1]*re]}D.stream=function(E){return L&&A===E?L:L=Xy(Zy(c)(w(C(x(A=E)))))},D.preclip=function(E){return arguments.length?(w=E,y=void 0,k()):w},D.postclip=function(E){return arguments.length?(x=E,N=m=v=g=null,k()):x},D.clipAngle=function(E){return arguments.length?(w=+E?Qm(y=E*W):(y=null,tu),k()):y*re},D.clipExtent=function(E){return arguments.length?(x=E==null?(N=m=v=g=null,Oi):cl(N=+E[0][0],m=+E[0][1],v=+E[1][0],g=+E[1][1]),k()):N==null?null:[[N,m],[v,g]]},D.scale=function(E){return arguments.length?(n=+E,K()):n},D.translate=function(E){return arguments.length?(r=+E[0],i=+E[1],K()):[r,i]},D.center=function(E){return arguments.length?(o=E[0]%360*W,a=E[1]%360*W,K()):[o*re,a*re]},D.rotate=function(E){return arguments.length?(l=E[0]%360*W,s=E[1]%360*W,u=E.length>2?E[2]%360*W:0,K()):[l*re,s*re,u*re]},D.angle=function(E){return arguments.length?(f=E%360*W,K()):f*re},D.reflectX=function(E){return arguments.length?(p=E?-1:1,K()):p<0},D.reflectY=function(E){return arguments.length?(h=E?-1:1,K()):h<0},D.precision=function(E){return arguments.length?(C=Rf(j,S=E*E),k()):Ce(S)},D.fitExtent=function(E,b){return dl(D,E,b)},D.fitSize=function(E,b){return bc(D,E,b)},D.fitWidth=function(E,b){return Nc(D,E,b)},D.fitHeight=function(E,b){return Cc(D,E,b)};function K(){var E=If(n,0,0,p,h,f).apply(null,t(o,a)),b=If(n,r-E[0],i-E[1],p,h,f);return c=kc(l,s,u),j=Js(t,b),M=Js(c,j),C=Rf(j,S),k()}function k(){return L=A=null,D}return function(){return t=e.apply(this,arguments),D.invert=t.invert&&q,K()}}function jc(e){var t=0,n=V/3,r=_c(e),i=r(t,n);return i.parallels=function(o){return arguments.length?r(t=o[0]*W,n=o[1]*W):[t*re,n*re]},i}function Jy(e){var t=B(e);function n(r,i){return[r*t,I(i)/t]}return n.invert=function(r,i){return[r/t,He(i*t)]},n}function c0(e,t){var n=I(e),r=(n+I(t))/2;if(Z(r)<H)return Jy(e);var i=1+n*(2*r-n),o=Ce(i)/r;function a(l,s){var u=Ce(i-2*r*I(s))/r;return[u*I(l*=r),o-u*B(l)]}return a.invert=function(l,s){var u=o-s,c=Be(l,Z(u))*ht(u);return u*r<0&&(c-=V*ht(l)*ht(u)),[c/r,He((i-(l*l+u*u)*r*r)/(2*r))]},a}function Da(){return jc(c0).scale(155.424).center([0,33.6442])}function d0(){return Da().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function ex(e){var t=e.length;return{point:function(n,r){for(var i=-1;++i<t;)e[i].point(n,r)},sphere:function(){for(var n=-1;++n<t;)e[n].sphere()},lineStart:function(){for(var n=-1;++n<t;)e[n].lineStart()},lineEnd:function(){for(var n=-1;++n<t;)e[n].lineEnd()},polygonStart:function(){for(var n=-1;++n<t;)e[n].polygonStart()},polygonEnd:function(){for(var n=-1;++n<t;)e[n].polygonEnd()}}}function tx(){var e,t,n=d0(),r,i=Da().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o,a=Da().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l,s,u={point:function(p,h){s=[p,h]}};function c(p){var h=p[0],y=p[1];return s=null,r.point(h,y),s||(o.point(h,y),s)||(l.point(h,y),s)}c.invert=function(p){var h=n.scale(),y=n.translate(),w=(p[0]-y[0])/h,N=(p[1]-y[1])/h;return(N>=.12&&N<.234&&w>=-.425&&w<-.214?i:N>=.166&&N<.234&&w>=-.214&&w<-.115?a:n).invert(p)},c.stream=function(p){return e&&t===p?e:e=ex([n.stream(t=p),i.stream(p),a.stream(p)])},c.precision=function(p){return arguments.length?(n.precision(p),i.precision(p),a.precision(p),f()):n.precision()},c.scale=function(p){return arguments.length?(n.scale(p),i.scale(p*.35),a.scale(p),c.translate(n.translate())):n.scale()},c.translate=function(p){if(!arguments.length)return n.translate();var h=n.scale(),y=+p[0],w=+p[1];return r=n.translate(p).clipExtent([[y-.455*h,w-.238*h],[y+.455*h,w+.238*h]]).stream(u),o=i.translate([y-.307*h,w+.201*h]).clipExtent([[y-.425*h+H,w+.12*h+H],[y-.214*h-H,w+.234*h-H]]).stream(u),l=a.translate([y-.205*h,w+.212*h]).clipExtent([[y-.214*h+H,w+.166*h+H],[y-.115*h-H,w+.234*h-H]]).stream(u),f()},c.fitExtent=function(p,h){return dl(c,p,h)},c.fitSize=function(p,h){return bc(c,p,h)},c.fitWidth=function(p,h){return Nc(c,p,h)},c.fitHeight=function(p,h){return Cc(c,p,h)};function f(){return e=t=null,c}return c.scale(1070)}function f0(e){return function(t,n){var r=B(t),i=B(n),o=e(r*i);return o===1/0?[2,0]:[o*i*I(t),o*I(n)]}}function Ki(e){return function(t,n){var r=Ce(t*t+n*n),i=e(r),o=I(i),a=B(i);return[Be(t*o,r*a),He(r&&n*o/r)]}}var zc=f0(function(e){return Ce(2/(1+e))});zc.invert=Ki(function(e){return 2*He(e/2)});function nx(){return Dt(zc).scale(124.75).clipAngle(180-.001)}var Mc=f0(function(e){return(e=Fm(e))&&e/I(e)});Mc.invert=Ki(function(e){return e});function rx(){return Dt(Mc).scale(79.4188).clipAngle(180-.001)}function Ji(e,t){return[e,xa(xc((me+t)/2))]}Ji.invert=function(e,t){return[e,2*Rr(Pm(t))-me]};function ix(){return p0(Ji).scale(961/Ue)}function p0(e){var t=Dt(e),n=t.center,r=t.scale,i=t.translate,o=t.clipExtent,a=null,l,s,u;t.scale=function(f){return arguments.length?(r(f),c()):r()},t.translate=function(f){return arguments.length?(i(f),c()):i()},t.center=function(f){return arguments.length?(n(f),c()):n()},t.clipExtent=function(f){return arguments.length?(f==null?a=l=s=u=null:(a=+f[0][0],l=+f[0][1],s=+f[1][0],u=+f[1][1]),c()):a==null?null:[[a,l],[s,u]]};function c(){var f=V*r(),p=t(Hm(t.rotate()).invert([0,0]));return o(a==null?[[p[0]-f,p[1]-f],[p[0]+f,p[1]+f]]:e===Ji?[[Math.max(p[0]-f,a),l],[Math.min(p[0]+f,s),u]]:[[a,Math.max(p[1]-f,l)],[s,Math.min(p[1]+f,u)]])}return c()}function No(e){return xc((me+e)/2)}function h0(e,t){var n=B(e),r=e===t?I(e):xa(n/B(t))/xa(No(t)/No(e)),i=n*Ul(No(e),r)/r;if(!r)return Ji;function o(a,l){i>0?l<-me+H&&(l=-me+H):l>me-H&&(l=me-H);var s=i/Ul(No(l),r);return[s*I(r*a),i-s*B(r*a)]}return o.invert=function(a,l){var s=i-l,u=ht(r)*Ce(a*a+s*s),c=Be(a,Z(s))*ht(s);return s*r<0&&(c-=V*ht(a)*ht(s)),[c/r,2*Rr(Ul(i/u,1/r))-me]},o}function ox(){return jc(h0).scale(109.5).parallels([30,30])}function $i(e,t){return[e,t]}$i.invert=$i;function ax(){return Dt($i).scale(152.63)}function m0(e,t){var n=B(e),r=e===t?I(e):(n-B(t))/(t-e),i=n/r+e;if(Z(r)<H)return $i;function o(a,l){var s=i-l,u=r*a;return[s*I(u),i-s*B(u)]}return o.invert=function(a,l){var s=i-l,u=Be(a,Z(s))*ht(s);return s*r<0&&(u-=V*ht(a)*ht(s)),[u/r,i-ht(r)*Ce(a*a+s*s)]},o}function lx(){return jc(m0).scale(131.154).center([0,13.9389])}var mi=1.340264,gi=-.081106,vi=893e-6,yi=.003796,$a=Ce(3)/2,sx=12;function Pc(e,t){var n=He($a*I(t)),r=n*n,i=r*r*r;return[e*B(n)/($a*(mi+3*gi*r+i*(7*vi+9*yi*r))),n*(mi+gi*r+i*(vi+yi*r))]}Pc.invert=function(e,t){for(var n=t,r=n*n,i=r*r*r,o=0,a,l,s;o<sx&&(l=n*(mi+gi*r+i*(vi+yi*r))-t,s=mi+3*gi*r+i*(7*vi+9*yi*r),n-=a=l/s,r=n*n,i=r*r*r,!(Z(a)<Ii));++o);return[$a*e*(mi+3*gi*r+i*(7*vi+9*yi*r))/B(n),He(I(n)/$a)]};function ux(){return Dt(Pc).scale(177.158)}function Fc(e,t){var n=B(t),r=B(e)*n;return[n*I(e)/r,I(t)/r]}Fc.invert=Ki(Rr);function cx(){return Dt(Fc).scale(144.049).clipAngle(60)}function dx(){var e=1,t=0,n=0,r=1,i=1,o=0,a,l,s=null,u,c,f,p=1,h=1,y=Zi({point:function(x,S){var C=g([x,S]);this.stream.point(C[0],C[1])}}),w=Oi,N,m;function v(){return p=e*r,h=e*i,N=m=null,g}function g(x){var S=x[0]*p,C=x[1]*h;if(o){var j=C*a-S*l;S=S*a+C*l,C=j}return[S+t,C+n]}return g.invert=function(x){var S=x[0]-t,C=x[1]-n;if(o){var j=C*a+S*l;S=S*a-C*l,C=j}return[S/p,C/h]},g.stream=function(x){return N&&m===x?N:N=y(w(m=x))},g.postclip=function(x){return arguments.length?(w=x,s=u=c=f=null,v()):w},g.clipExtent=function(x){return arguments.length?(w=x==null?(s=u=c=f=null,Oi):cl(s=+x[0][0],u=+x[0][1],c=+x[1][0],f=+x[1][1]),v()):s==null?null:[[s,u],[c,f]]},g.scale=function(x){return arguments.length?(e=+x,v()):e},g.translate=function(x){return arguments.length?(t=+x[0],n=+x[1],v()):[t,n]},g.angle=function(x){return arguments.length?(o=x%360*W,l=I(o),a=B(o),v()):o*re},g.reflectX=function(x){return arguments.length?(r=x?-1:1,v()):r<0},g.reflectY=function(x){return arguments.length?(i=x?-1:1,v()):i<0},g.fitExtent=function(x,S){return dl(g,x,S)},g.fitSize=function(x,S){return bc(g,x,S)},g.fitWidth=function(x,S){return Nc(g,x,S)},g.fitHeight=function(x,S){return Cc(g,x,S)},g}function Tc(e,t){var n=t*t,r=n*n;return[e*(.8707-.131979*n+r*(-.013791+r*(.003971*n-.001529*r))),t*(1.007226+n*(.015085+r*(-.044475+.028874*n-.005916*r)))]}Tc.invert=function(e,t){var n=t,r=25,i;do{var o=n*n,a=o*o;n-=i=(n*(1.007226+o*(.015085+a*(-.044475+.028874*o-.005916*a)))-t)/(1.007226+o*(.015085*3+a*(-.044475*7+.028874*9*o-.005916*11*a)))}while(Z(i)>H&&--r>0);return[e/(.8707+(o=n*n)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),n]};function fx(){return Dt(Tc).scale(175.295)}function Ac(e,t){return[B(t)*I(e),I(t)]}Ac.invert=Ki(He);function px(){return Dt(Ac).scale(249.5).clipAngle(90+H)}function Rc(e,t){var n=B(t),r=1+B(e)*n;return[n*I(e)/r,I(t)/r]}Rc.invert=Ki(function(e){return 2*Rr(e)});function hx(){return Dt(Rc).scale(250).clipAngle(142)}function Ic(e,t){return[xa(xc((me+t)/2)),-e]}Ic.invert=function(e,t){return[-t,2*Rr(Pm(e))-me]};function mx(){var e=p0(Ic),t=e.center,n=e.rotate;return e.center=function(r){return arguments.length?t([-r[1],r[0]]):(r=t(),[r[1],-r[0]])},e.rotate=function(r){return arguments.length?n([r[0],r[1],r.length>2?r[2]+90:90]):(r=n(),[r[0],r[1],r[2]-90])},n([0,0,90]).scale(159.155)}const gx=Object.freeze(Object.defineProperty({__proto__:null,geoAlbers:d0,geoAlbersUsa:tx,geoArea:sy,geoAzimuthalEqualArea:nx,geoAzimuthalEqualAreaRaw:zc,geoAzimuthalEquidistant:rx,geoAzimuthalEquidistantRaw:Mc,geoBounds:fy,geoCentroid:yy,geoCircle:xy,geoClipAntimeridian:tu,geoClipCircle:Qm,geoClipExtent:Cy,geoClipRectangle:cl,geoConicConformal:ox,geoConicConformalRaw:h0,geoConicEqualArea:Da,geoConicEqualAreaRaw:c0,geoConicEquidistant:lx,geoConicEquidistantRaw:m0,geoContains:Ty,geoDistance:Fa,geoEqualEarth:ux,geoEqualEarthRaw:Pc,geoEquirectangular:ax,geoEquirectangularRaw:$i,geoGnomonic:cx,geoGnomonicRaw:Fc,geoGraticule:Sc,geoGraticule10:Ay,geoIdentity:dx,geoInterpolate:Ry,geoLength:Xm,geoMercator:ix,geoMercatorRaw:Ji,geoNaturalEarth1:fx,geoNaturalEarth1Raw:Tc,geoOrthographic:px,geoOrthographicRaw:Ac,geoPath:u0,geoProjection:Dt,geoProjectionMutator:_c,geoRotation:Hm,geoStereographic:hx,geoStereographicRaw:Rc,geoStream:Et,geoTransform:Vy,geoTransverseMercator:mx,geoTransverseMercatorRaw:Ic},Symbol.toStringTag,{value:"Module"}));function vx(e){return e}function yx(e){if(e==null)return vx;var t,n,r=e.scale[0],i=e.scale[1],o=e.translate[0],a=e.translate[1];return function(l,s){s||(t=n=0);var u=2,c=l.length,f=new Array(c);for(f[0]=(t+=l[0])*r+o,f[1]=(n+=l[1])*i+a;u<c;)f[u]=l[u],++u;return f}}function xx(e,t){for(var n,r=e.length,i=r-t;i<--r;)n=e[i],e[i++]=e[r],e[r]=n}function wx(e,t){return typeof t=="string"&&(t=e.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(n){return Of(e,n)})}:Of(e,t)}function Of(e,t){var n=t.id,r=t.bbox,i=t.properties==null?{}:t.properties,o=g0(e,t);return n==null&&r==null?{type:"Feature",properties:i,geometry:o}:r==null?{type:"Feature",id:n,properties:i,geometry:o}:{type:"Feature",id:n,bbox:r,properties:i,geometry:o}}function g0(e,t){var n=yx(e.transform),r=e.arcs;function i(c,f){f.length&&f.pop();for(var p=r[c<0?~c:c],h=0,y=p.length;h<y;++h)f.push(n(p[h],h));c<0&&xx(f,y)}function o(c){return n(c)}function a(c){for(var f=[],p=0,h=c.length;p<h;++p)i(c[p],f);return f.length<2&&f.push(f[0]),f}function l(c){for(var f=a(c);f.length<4;)f.push(f[0]);return f}function s(c){return c.map(l)}function u(c){var f=c.type,p;switch(f){case"GeometryCollection":return{type:f,geometries:c.geometries.map(u)};case"Point":p=o(c.coordinates);break;case"MultiPoint":p=c.coordinates.map(o);break;case"LineString":p=a(c.arcs);break;case"MultiLineString":p=c.arcs.map(a);break;case"Polygon":p=s(c.arcs);break;case"MultiPolygon":p=c.arcs.map(s);break;default:return null}return{type:f,coordinates:p}}return u(t)}function kx(e,t){var n={},r={},i={},o=[],a=-1;t.forEach(function(u,c){var f=e.arcs[u<0?~u:u],p;f.length<3&&!f[1][0]&&!f[1][1]&&(p=t[++a],t[a]=u,t[c]=p)}),t.forEach(function(u){var c=l(u),f=c[0],p=c[1],h,y;if(h=i[f])if(delete i[h.end],h.push(u),h.end=p,y=r[p]){delete r[y.start];var w=y===h?h:h.concat(y);r[w.start=h.start]=i[w.end=y.end]=w}else r[h.start]=i[h.end]=h;else if(h=r[p])if(delete r[h.start],h.unshift(u),h.start=f,y=i[f]){delete i[y.end];var N=y===h?h:y.concat(h);r[N.start=y.start]=i[N.end=h.end]=N}else r[h.start]=i[h.end]=h;else h=[u],r[h.start=f]=i[h.end=p]=h});function l(u){var c=e.arcs[u<0?~u:u],f=c[0],p;return e.transform?(p=[0,0],c.forEach(function(h){p[0]+=h[0],p[1]+=h[1]})):p=c[c.length-1],u<0?[p,f]:[f,p]}function s(u,c){for(var f in u){var p=u[f];delete c[p.start],delete p.start,delete p.end,p.forEach(function(h){n[h<0?~h:h]=1}),o.push(p)}}return s(i,r),s(r,i),t.forEach(function(u){n[u<0?~u:u]||o.push([u])}),o}function Lf(e){return g0(e,Sx.apply(this,arguments))}function Sx(e,t,n){var r,i,o;if(arguments.length>1)r=Ex(e,t,n);else for(i=0,r=new Array(o=e.arcs.length);i<o;++i)r[i]=i;return{type:"MultiLineString",arcs:kx(e,r)}}function Ex(e,t,n){var r=[],i=[],o;function a(f){var p=f<0?~f:f;(i[p]||(i[p]=[])).push({i:f,g:o})}function l(f){f.forEach(a)}function s(f){f.forEach(l)}function u(f){f.forEach(s)}function c(f){switch(o=f,f.type){case"GeometryCollection":f.geometries.forEach(c);break;case"LineString":l(f.arcs);break;case"MultiLineString":case"Polygon":s(f.arcs);break;case"MultiPolygon":u(f.arcs);break}}return c(t),i.forEach(n==null?function(f){r.push(f[0].i)}:function(f){n(f[0].g,f[f.length-1].g)&&r.push(f[0].i)}),r}var bx={value:()=>{}};function Oc(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Wo(n)}function Wo(e){this._=e}function Nx(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Wo.prototype=Oc.prototype={constructor:Wo,on:function(e,t){var n=this._,r=Nx(e+"",n),i,o=-1,a=r.length;if(arguments.length<2){for(;++o<a;)if((i=(e=r[o]).type)&&(i=Cx(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<a;)if(i=(e=r[o]).type)n[i]=Df(n[i],e.name,t);else if(t==null)for(i in n)n[i]=Df(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Wo(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,o;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(t,n)}};function Cx(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function Df(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=bx,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var hu="http://www.w3.org/1999/xhtml";const $f={svg:"http://www.w3.org/2000/svg",xhtml:hu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function fl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),$f.hasOwnProperty(t)?{space:$f[t],local:e}:e}function _x(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===hu&&t.documentElement.namespaceURI===hu?t.createElement(e):t.createElementNS(n,e)}}function jx(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function v0(e){var t=fl(e);return(t.local?jx:_x)(t)}function zx(){}function Lc(e){return e==null?zx:function(){return this.querySelector(e)}}function Mx(e){typeof e!="function"&&(e=Lc(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],a=o.length,l=r[i]=new Array(a),s,u,c=0;c<a;++c)(s=o[c])&&(u=e.call(s,s.__data__,c,o))&&("__data__"in s&&(u.__data__=s.__data__),l[c]=u);return new Ke(r,this._parents)}function y0(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Px(){return[]}function x0(e){return e==null?Px:function(){return this.querySelectorAll(e)}}function Fx(e){return function(){var t=e.apply(this,arguments);return t==null?[]:y0(t)}}function Tx(e){typeof e=="function"?e=Fx(e):e=x0(e);for(var t=this._groups,n=t.length,r=[],i=[],o=0;o<n;++o)for(var a=t[o],l=a.length,s,u=0;u<l;++u)(s=a[u])&&(r.push(e.call(s,s.__data__,u,a)),i.push(s));return new Ke(r,i)}function w0(e){return function(){return this.matches(e)}}function k0(e){return function(t){return t.matches(e)}}var Ax=Array.prototype.find;function Rx(e){return function(){return Ax.call(this.children,e)}}function Ix(){return this.firstElementChild}function Ox(e){return this.select(e==null?Ix:Rx(typeof e=="function"?e:k0(e)))}var Lx=Array.prototype.filter;function Dx(){return this.children}function $x(e){return function(){return Lx.call(this.children,e)}}function Ux(e){return this.selectAll(e==null?Dx:$x(typeof e=="function"?e:k0(e)))}function Bx(e){typeof e!="function"&&(e=w0(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],a=o.length,l=r[i]=[],s,u=0;u<a;++u)(s=o[u])&&e.call(s,s.__data__,u,o)&&l.push(s);return new Ke(r,this._parents)}function S0(e){return new Array(e.length)}function Hx(){return new Ke(this._enter||this._groups.map(S0),this._parents)}function Ua(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Ua.prototype={constructor:Ua,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Wx(e){return function(){return e}}function Gx(e,t,n,r,i,o){for(var a=0,l,s=t.length,u=o.length;a<u;++a)(l=t[a])?(l.__data__=o[a],r[a]=l):n[a]=new Ua(e,o[a]);for(;a<s;++a)(l=t[a])&&(i[a]=l)}function Vx(e,t,n,r,i,o,a){var l,s,u=new Map,c=t.length,f=o.length,p=new Array(c),h;for(l=0;l<c;++l)(s=t[l])&&(p[l]=h=a.call(s,s.__data__,l,t)+"",u.has(h)?i[l]=s:u.set(h,s));for(l=0;l<f;++l)h=a.call(e,o[l],l,o)+"",(s=u.get(h))?(r[l]=s,s.__data__=o[l],u.delete(h)):n[l]=new Ua(e,o[l]);for(l=0;l<c;++l)(s=t[l])&&u.get(p[l])===s&&(i[l]=s)}function qx(e){return e.__data__}function Yx(e,t){if(!arguments.length)return Array.from(this,qx);var n=t?Vx:Gx,r=this._parents,i=this._groups;typeof e!="function"&&(e=Wx(e));for(var o=i.length,a=new Array(o),l=new Array(o),s=new Array(o),u=0;u<o;++u){var c=r[u],f=i[u],p=f.length,h=y0(e.call(c,c&&c.__data__,u,r)),y=h.length,w=l[u]=new Array(y),N=a[u]=new Array(y),m=s[u]=new Array(p);n(c,f,w,N,m,h,t);for(var v=0,g=0,x,S;v<y;++v)if(x=w[v]){for(v>=g&&(g=v+1);!(S=N[g])&&++g<y;);x._next=S||null}}return a=new Ke(a,r),a._enter=l,a._exit=s,a}function Qx(){return new Ke(this._exit||this._groups.map(S0),this._parents)}function Xx(e,t,n){var r=this.enter(),i=this,o=this.exit();return r=typeof e=="function"?e(r):r.append(e+""),t!=null&&(i=t(i)),n==null?o.remove():n(o),r&&i?r.merge(i).order():i}function Zx(e){if(!(e instanceof Ke))throw new Error("invalid merge");for(var t=this._groups,n=e._groups,r=t.length,i=n.length,o=Math.min(r,i),a=new Array(r),l=0;l<o;++l)for(var s=t[l],u=n[l],c=s.length,f=a[l]=new Array(c),p,h=0;h<c;++h)(p=s[h]||u[h])&&(f[h]=p);for(;l<r;++l)a[l]=t[l];return new Ke(a,this._parents)}function Kx(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,o=r[i],a;--i>=0;)(a=r[i])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function Jx(e){e||(e=e2);function t(f,p){return f&&p?e(f.__data__,p.__data__):!f-!p}for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var a=n[o],l=a.length,s=i[o]=new Array(l),u,c=0;c<l;++c)(u=a[c])&&(s[c]=u);s.sort(t)}return new Ke(i,this._parents).order()}function e2(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function t2(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function n2(){return Array.from(this)}function r2(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null}function i2(){let e=0;for(const t of this)++e;return e}function o2(){return!this.node()}function a2(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],o=0,a=i.length,l;o<a;++o)(l=i[o])&&e.call(l,l.__data__,o,i);return this}function l2(e){return function(){this.removeAttribute(e)}}function s2(e){return function(){this.removeAttributeNS(e.space,e.local)}}function u2(e,t){return function(){this.setAttribute(e,t)}}function c2(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function d2(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function f2(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function p2(e,t){var n=fl(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?s2:l2:typeof t=="function"?n.local?f2:d2:n.local?c2:u2)(n,t))}function E0(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function h2(e){return function(){this.style.removeProperty(e)}}function m2(e,t,n){return function(){this.style.setProperty(e,t,n)}}function g2(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function v2(e,t,n){return arguments.length>1?this.each((t==null?h2:typeof t=="function"?g2:m2)(e,t,n??"")):Mr(this.node(),e)}function Mr(e,t){return e.style.getPropertyValue(t)||E0(e).getComputedStyle(e,null).getPropertyValue(t)}function y2(e){return function(){delete this[e]}}function x2(e,t){return function(){this[e]=t}}function w2(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function k2(e,t){return arguments.length>1?this.each((t==null?y2:typeof t=="function"?w2:x2)(e,t)):this.node()[e]}function b0(e){return e.trim().split(/^|\s+/)}function Dc(e){return e.classList||new N0(e)}function N0(e){this._node=e,this._names=b0(e.getAttribute("class")||"")}N0.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function C0(e,t){for(var n=Dc(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function _0(e,t){for(var n=Dc(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function S2(e){return function(){C0(this,e)}}function E2(e){return function(){_0(this,e)}}function b2(e,t){return function(){(t.apply(this,arguments)?C0:_0)(this,e)}}function N2(e,t){var n=b0(e+"");if(arguments.length<2){for(var r=Dc(this.node()),i=-1,o=n.length;++i<o;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?b2:t?S2:E2)(n,t))}function C2(){this.textContent=""}function _2(e){return function(){this.textContent=e}}function j2(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function z2(e){return arguments.length?this.each(e==null?C2:(typeof e=="function"?j2:_2)(e)):this.node().textContent}function M2(){this.innerHTML=""}function P2(e){return function(){this.innerHTML=e}}function F2(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function T2(e){return arguments.length?this.each(e==null?M2:(typeof e=="function"?F2:P2)(e)):this.node().innerHTML}function A2(){this.nextSibling&&this.parentNode.appendChild(this)}function R2(){return this.each(A2)}function I2(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function O2(){return this.each(I2)}function L2(e){var t=typeof e=="function"?e:v0(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function D2(){return null}function $2(e,t){var n=typeof e=="function"?e:v0(e),r=t==null?D2:typeof t=="function"?t:Lc(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function U2(){var e=this.parentNode;e&&e.removeChild(this)}function B2(){return this.each(U2)}function H2(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function W2(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function G2(e){return this.select(e?W2:H2)}function V2(e){return arguments.length?this.property("__data__",e):this.node().__data__}function q2(e){return function(t){e.call(this,t,this.__data__)}}function Y2(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function Q2(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,o;n<i;++n)o=t[n],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):t[++r]=o;++r?t.length=r:delete this.__on}}}function X2(e,t,n){return function(){var r=this.__on,i,o=q2(t);if(r){for(var a=0,l=r.length;a<l;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=n),i.value=t;return}}this.addEventListener(e.type,o,n),i={type:e.type,name:e.name,value:t,listener:o,options:n},r?r.push(i):this.__on=[i]}}function Z2(e,t,n){var r=Y2(e+""),i,o=r.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var s=0,u=l.length,c;s<u;++s)for(i=0,c=l[s];i<o;++i)if((a=r[i]).type===c.type&&a.name===c.name)return c.value}return}for(l=t?X2:Q2,i=0;i<o;++i)this.each(l(r[i],t,n));return this}function j0(e,t,n){var r=E0(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function K2(e,t){return function(){return j0(this,e,t)}}function J2(e,t){return function(){return j0(this,e,t.apply(this,arguments))}}function ew(e,t){return this.each((typeof t=="function"?J2:K2)(e,t))}function*tw(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length,a;i<o;++i)(a=r[i])&&(yield a)}var z0=[null];function Ke(e,t){this._groups=e,this._parents=t}function eo(){return new Ke([[document.documentElement]],z0)}function nw(){return this}Ke.prototype=eo.prototype={constructor:Ke,select:Mx,selectAll:Tx,selectChild:Ox,selectChildren:Ux,filter:Bx,data:Yx,enter:Hx,exit:Qx,join:Xx,merge:Zx,selection:nw,order:Kx,sort:Jx,call:t2,nodes:n2,node:r2,size:i2,empty:o2,each:a2,attr:p2,style:v2,property:k2,classed:N2,text:z2,html:T2,raise:R2,lower:O2,append:L2,insert:$2,remove:B2,clone:G2,datum:V2,on:Z2,dispatch:ew,[Symbol.iterator]:tw};function Vt(e){return typeof e=="string"?new Ke([[document.querySelector(e)]],[document.documentElement]):new Ke([[e]],z0)}function rw(e){let t;for(;t=e.sourceEvent;)e=t;return e}function jn(e,t){if(e=rw(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}function mu(e){e.preventDefault(),e.stopImmediatePropagation()}function iw(e){var t=e.document.documentElement,n=Vt(e).on("dragstart.drag",mu,!0);"onselectstart"in t?n.on("selectstart.drag",mu,!0):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function ow(e,t){var n=e.document.documentElement,r=Vt(e).on("dragstart.drag",null);t&&(r.on("click.drag",mu,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function $c(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function M0(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function to(){}var Ui=.7,Ba=1/Ui,yr="\\s*([+-]?\\d+)\\s*",Bi="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ot="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",aw=/^#([0-9a-f]{3,8})$/,lw=new RegExp("^rgb\\("+[yr,yr,yr]+"\\)$"),sw=new RegExp("^rgb\\("+[Ot,Ot,Ot]+"\\)$"),uw=new RegExp("^rgba\\("+[yr,yr,yr,Bi]+"\\)$"),cw=new RegExp("^rgba\\("+[Ot,Ot,Ot,Bi]+"\\)$"),dw=new RegExp("^hsl\\("+[Bi,Ot,Ot]+"\\)$"),fw=new RegExp("^hsla\\("+[Bi,Ot,Ot,Bi]+"\\)$"),Uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};$c(to,Hi,{copy:function(e){return Object.assign(new this.constructor,this,e)},displayable:function(){return this.rgb().displayable()},hex:Bf,formatHex:Bf,formatHsl:pw,formatRgb:Hf,toString:Hf});function Bf(){return this.rgb().formatHex()}function pw(){return P0(this).formatHsl()}function Hf(){return this.rgb().formatRgb()}function Hi(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=aw.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Wf(t):n===3?new it(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Co(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Co(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=lw.exec(e))?new it(t[1],t[2],t[3],1):(t=sw.exec(e))?new it(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=uw.exec(e))?Co(t[1],t[2],t[3],t[4]):(t=cw.exec(e))?Co(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=dw.exec(e))?qf(t[1],t[2]/100,t[3]/100,1):(t=fw.exec(e))?qf(t[1],t[2]/100,t[3]/100,t[4]):Uf.hasOwnProperty(e)?Wf(Uf[e]):e==="transparent"?new it(NaN,NaN,NaN,0):null}function Wf(e){return new it(e>>16&255,e>>8&255,e&255,1)}function Co(e,t,n,r){return r<=0&&(e=t=n=NaN),new it(e,t,n,r)}function hw(e){return e instanceof to||(e=Hi(e)),e?(e=e.rgb(),new it(e.r,e.g,e.b,e.opacity)):new it}function gu(e,t,n,r){return arguments.length===1?hw(e):new it(e,t,n,r??1)}function it(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}$c(it,gu,M0(to,{brighter:function(e){return e=e==null?Ba:Math.pow(Ba,e),new it(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?Ui:Math.pow(Ui,e),new it(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Gf,formatHex:Gf,formatRgb:Vf,toString:Vf}));function Gf(){return"#"+Vl(this.r)+Vl(this.g)+Vl(this.b)}function Vf(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}function Vl(e){return e=Math.max(0,Math.min(255,Math.round(e)||0)),(e<16?"0":"")+e.toString(16)}function qf(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new At(e,t,n,r)}function P0(e){if(e instanceof At)return new At(e.h,e.s,e.l,e.opacity);if(e instanceof to||(e=Hi(e)),!e)return new At;if(e instanceof At)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),o=Math.max(t,n,r),a=NaN,l=o-i,s=(o+i)/2;return l?(t===o?a=(n-r)/l+(n<r)*6:n===o?a=(r-t)/l+2:a=(t-n)/l+4,l/=s<.5?o+i:2-o-i,a*=60):l=s>0&&s<1?0:a,new At(a,l,s,e.opacity)}function mw(e,t,n,r){return arguments.length===1?P0(e):new At(e,t,n,r??1)}function At(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}$c(At,mw,M0(to,{brighter:function(e){return e=e==null?Ba:Math.pow(Ba,e),new At(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?Ui:Math.pow(Ui,e),new At(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new it(ql(e>=240?e-240:e+120,i,r),ql(e,i,r),ql(e<120?e+240:e-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(e===1?")":", "+e+")")}}));function ql(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const F0=e=>()=>e;function gw(e,t){return function(n){return e+n*t}}function vw(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function yw(e){return(e=+e)==1?T0:function(t,n){return n-t?vw(t,n,e):F0(isNaN(t)?n:t)}}function T0(e,t){var n=t-e;return n?gw(e,n):F0(isNaN(e)?t:e)}const Yf=function e(t){var n=yw(t);function r(i,o){var a=n((i=gu(i)).r,(o=gu(o)).r),l=n(i.g,o.g),s=n(i.b,o.b),u=T0(i.opacity,o.opacity);return function(c){return i.r=a(c),i.g=l(c),i.b=s(c),i.opacity=u(c),i+""}}return r.gamma=e,r}(1);function cn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var vu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Yl=new RegExp(vu.source,"g");function xw(e){return function(){return e}}function ww(e){return function(t){return e(t)+""}}function kw(e,t){var n=vu.lastIndex=Yl.lastIndex=0,r,i,o,a=-1,l=[],s=[];for(e=e+"",t=t+"";(r=vu.exec(e))&&(i=Yl.exec(t));)(o=i.index)>n&&(o=t.slice(n,o),l[a]?l[a]+=o:l[++a]=o),(r=r[0])===(i=i[0])?l[a]?l[a]+=i:l[++a]=i:(l[++a]=null,s.push({i:a,x:cn(r,i)})),n=Yl.lastIndex;return n<t.length&&(o=t.slice(n),l[a]?l[a]+=o:l[++a]=o),l.length<2?s[0]?ww(s[0].x):xw(t):(t=s.length,function(u){for(var c=0,f;c<t;++c)l[(f=s[c]).i]=f.x(u);return l.join("")})}var Qf=180/Math.PI,yu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function A0(e,t,n,r,i,o){var a,l,s;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(s=e*n+t*r)&&(n-=e*s,r-=t*s),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,s/=l),e*r<t*n&&(e=-e,t=-t,s=-s,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(t,e)*Qf,skewX:Math.atan(s)*Qf,scaleX:a,scaleY:l}}var _o;function Sw(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?yu:A0(t.a,t.b,t.c,t.d,t.e,t.f)}function Ew(e){return e==null||(_o||(_o=document.createElementNS("http://www.w3.org/2000/svg","g")),_o.setAttribute("transform",e),!(e=_o.transform.baseVal.consolidate()))?yu:(e=e.matrix,A0(e.a,e.b,e.c,e.d,e.e,e.f))}function R0(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function o(u,c,f,p,h,y){if(u!==f||c!==p){var w=h.push("translate(",null,t,null,n);y.push({i:w-4,x:cn(u,f)},{i:w-2,x:cn(c,p)})}else(f||p)&&h.push("translate("+f+t+p+n)}function a(u,c,f,p){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),p.push({i:f.push(i(f)+"rotate(",null,r)-2,x:cn(u,c)})):c&&f.push(i(f)+"rotate("+c+r)}function l(u,c,f,p){u!==c?p.push({i:f.push(i(f)+"skewX(",null,r)-2,x:cn(u,c)}):c&&f.push(i(f)+"skewX("+c+r)}function s(u,c,f,p,h,y){if(u!==f||c!==p){var w=h.push(i(h)+"scale(",null,",",null,")");y.push({i:w-4,x:cn(u,f)},{i:w-2,x:cn(c,p)})}else(f!==1||p!==1)&&h.push(i(h)+"scale("+f+","+p+")")}return function(u,c){var f=[],p=[];return u=e(u),c=e(c),o(u.translateX,u.translateY,c.translateX,c.translateY,f,p),a(u.rotate,c.rotate,f,p),l(u.skewX,c.skewX,f,p),s(u.scaleX,u.scaleY,c.scaleX,c.scaleY,f,p),u=c=null,function(h){for(var y=-1,w=p.length,N;++y<w;)f[(N=p[y]).i]=N.x(h);return f.join("")}}}var bw=R0(Sw,"px, ","px)","deg)"),Nw=R0(Ew,", ",")",")"),Cw=1e-12;function Xf(e){return((e=Math.exp(e))+1/e)/2}function _w(e){return((e=Math.exp(e))-1/e)/2}function jw(e){return((e=Math.exp(2*e))-1)/(e+1)}const zw=function e(t,n,r){function i(o,a){var l=o[0],s=o[1],u=o[2],c=a[0],f=a[1],p=a[2],h=c-l,y=f-s,w=h*h+y*y,N,m;if(w<Cw)m=Math.log(p/u)/t,N=function(j){return[l+j*h,s+j*y,u*Math.exp(t*j*m)]};else{var v=Math.sqrt(w),g=(p*p-u*u+r*w)/(2*u*n*v),x=(p*p-u*u-r*w)/(2*p*n*v),S=Math.log(Math.sqrt(g*g+1)-g),C=Math.log(Math.sqrt(x*x+1)-x);m=(C-S)/t,N=function(j){var M=j*m,L=Xf(S),A=u/(n*v)*(L*jw(t*M+S)-_w(S));return[l+A*h,s+A*y,u*L/Xf(t*M+S)]}}return N.duration=m*1e3*t/Math.SQRT2,N}return i.rho=function(o){var a=Math.max(.001,+o),l=a*a,s=l*l;return e(a,l,s)},i}(Math.SQRT2,2,4);var Pr=0,ri=0,Gr=0,I0=1e3,Ha,ii,Wa=0,Gn=0,pl=0,Wi=typeof performance=="object"&&performance.now?performance:Date,O0=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Uc(){return Gn||(O0(Mw),Gn=Wi.now()+pl)}function Mw(){Gn=0}function Ga(){this._call=this._time=this._next=null}Ga.prototype=L0.prototype={constructor:Ga,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Uc():+n)+(t==null?0:+t),!this._next&&ii!==this&&(ii?ii._next=this:Ha=this,ii=this),this._call=e,this._time=n,xu()},stop:function(){this._call&&(this._call=null,this._time=1/0,xu())}};function L0(e,t,n){var r=new Ga;return r.restart(e,t,n),r}function Pw(){Uc(),++Pr;for(var e=Ha,t;e;)(t=Gn-e._time)>=0&&e._call.call(null,t),e=e._next;--Pr}function Zf(){Gn=(Wa=Wi.now())+pl,Pr=ri=0;try{Pw()}finally{Pr=0,Tw(),Gn=0}}function Fw(){var e=Wi.now(),t=e-Wa;t>I0&&(pl-=t,Wa=e)}function Tw(){for(var e,t=Ha,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Ha=n);ii=e,xu(r)}function xu(e){if(!Pr){ri&&(ri=clearTimeout(ri));var t=e-Gn;t>24?(e<1/0&&(ri=setTimeout(Zf,e-Wi.now()-pl)),Gr&&(Gr=clearInterval(Gr))):(Gr||(Wa=Wi.now(),Gr=setInterval(Fw,I0)),Pr=1,O0(Zf))}}function Kf(e,t,n){var r=new Ga;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var Aw=Oc("start","end","cancel","interrupt"),Rw=[],D0=0,Jf=1,wu=2,Go=3,ep=4,ku=5,Vo=6;function hl(e,t,n,r,i,o){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;Iw(e,n,{name:t,index:r,group:i,on:Aw,tween:Rw,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:D0})}function Bc(e,t){var n=jt(e,t);if(n.state>D0)throw new Error("too late; already scheduled");return n}function $t(e,t){var n=jt(e,t);if(n.state>Go)throw new Error("too late; already running");return n}function jt(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function Iw(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=L0(o,0,n.time);function o(u){n.state=Jf,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var c,f,p,h;if(n.state!==Jf)return s();for(c in r)if(h=r[c],h.name===n.name){if(h.state===Go)return Kf(a);h.state===ep?(h.state=Vo,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[c]):+c<t&&(h.state=Vo,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[c])}if(Kf(function(){n.state===Go&&(n.state=ep,n.timer.restart(l,n.delay,n.time),l(u))}),n.state=wu,n.on.call("start",e,e.__data__,n.index,n.group),n.state===wu){for(n.state=Go,i=new Array(p=n.tween.length),c=0,f=-1;c<p;++c)(h=n.tween[c].value.call(e,e.__data__,n.index,n.group))&&(i[++f]=h);i.length=f+1}}function l(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(s),n.state=ku,1),f=-1,p=i.length;++f<p;)i[f].call(e,c);n.state===ku&&(n.on.call("end",e,e.__data__,n.index,n.group),s())}function s(){n.state=Vo,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function qo(e,t){var n=e.__transition,r,i,o=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){o=!1;continue}i=r.state>wu&&r.state<ku,r.state=Vo,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}o&&delete e.__transition}}function Ow(e){return this.each(function(){qo(this,e)})}function Lw(e,t){var n,r;return function(){var i=$t(this,e),o=i.tween;if(o!==n){r=n=o;for(var a=0,l=r.length;a<l;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function Dw(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var o=$t(this,e),a=o.tween;if(a!==r){i=(r=a).slice();for(var l={name:t,value:n},s=0,u=i.length;s<u;++s)if(i[s].name===t){i[s]=l;break}s===u&&i.push(l)}o.tween=i}}function $w(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=jt(this.node(),n).tween,i=0,o=r.length,a;i<o;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?Lw:Dw)(n,e,t))}function Hc(e,t,n){var r=e._id;return e.each(function(){var i=$t(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return jt(i,r).value[t]}}function $0(e,t){var n;return(typeof t=="number"?cn:t instanceof Hi?Yf:(n=Hi(t))?(t=n,Yf):kw)(e,t)}function Uw(e){return function(){this.removeAttribute(e)}}function Bw(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Hw(e,t,n){var r,i=n+"",o;return function(){var a=this.getAttribute(e);return a===i?null:a===r?o:o=t(r=a,n)}}function Ww(e,t,n){var r,i=n+"",o;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?o:o=t(r=a,n)}}function Gw(e,t,n){var r,i,o;return function(){var a,l=n(this),s;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),s=l+"",a===s?null:a===r&&s===i?o:(i=s,o=t(r=a,l)))}}function Vw(e,t,n){var r,i,o;return function(){var a,l=n(this),s;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),s=l+"",a===s?null:a===r&&s===i?o:(i=s,o=t(r=a,l)))}}function qw(e,t){var n=fl(e),r=n==="transform"?Nw:$0;return this.attrTween(e,typeof t=="function"?(n.local?Vw:Gw)(n,r,Hc(this,"attr."+e,t)):t==null?(n.local?Bw:Uw)(n):(n.local?Ww:Hw)(n,r,t))}function Yw(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Qw(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Xw(e,t){var n,r;function i(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&Qw(e,o)),n}return i._value=t,i}function Zw(e,t){var n,r;function i(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&Yw(e,o)),n}return i._value=t,i}function Kw(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=fl(e);return this.tween(n,(r.local?Xw:Zw)(r,t))}function Jw(e,t){return function(){Bc(this,e).delay=+t.apply(this,arguments)}}function ek(e,t){return t=+t,function(){Bc(this,e).delay=t}}function tk(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Jw:ek)(t,e)):jt(this.node(),t).delay}function nk(e,t){return function(){$t(this,e).duration=+t.apply(this,arguments)}}function rk(e,t){return t=+t,function(){$t(this,e).duration=t}}function ik(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?nk:rk)(t,e)):jt(this.node(),t).duration}function ok(e,t){if(typeof t!="function")throw new Error;return function(){$t(this,e).ease=t}}function ak(e){var t=this._id;return arguments.length?this.each(ok(t,e)):jt(this.node(),t).ease}function lk(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;$t(this,e).ease=n}}function sk(e){if(typeof e!="function")throw new Error;return this.each(lk(this._id,e))}function uk(e){typeof e!="function"&&(e=w0(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],a=o.length,l=r[i]=[],s,u=0;u<a;++u)(s=o[u])&&e.call(s,s.__data__,u,o)&&l.push(s);return new nn(r,this._parents,this._name,this._id)}function ck(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,o=Math.min(r,i),a=new Array(r),l=0;l<o;++l)for(var s=t[l],u=n[l],c=s.length,f=a[l]=new Array(c),p,h=0;h<c;++h)(p=s[h]||u[h])&&(f[h]=p);for(;l<r;++l)a[l]=t[l];return new nn(a,this._parents,this._name,this._id)}function dk(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function fk(e,t,n){var r,i,o=dk(t)?Bc:$t;return function(){var a=o(this,e),l=a.on;l!==r&&(i=(r=l).copy()).on(t,n),a.on=i}}function pk(e,t){var n=this._id;return arguments.length<2?jt(this.node(),n).on.on(e):this.each(fk(n,e,t))}function hk(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function mk(){return this.on("end.remove",hk(this._id))}function gk(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Lc(e));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var l=r[a],s=l.length,u=o[a]=new Array(s),c,f,p=0;p<s;++p)(c=l[p])&&(f=e.call(c,c.__data__,p,l))&&("__data__"in c&&(f.__data__=c.__data__),u[p]=f,hl(u[p],t,n,p,u,jt(c,n)));return new nn(o,this._parents,t,n)}function vk(e){var t=this._name,n=this._id;typeof e!="function"&&(e=x0(e));for(var r=this._groups,i=r.length,o=[],a=[],l=0;l<i;++l)for(var s=r[l],u=s.length,c,f=0;f<u;++f)if(c=s[f]){for(var p=e.call(c,c.__data__,f,s),h,y=jt(c,n),w=0,N=p.length;w<N;++w)(h=p[w])&&hl(h,t,n,w,p,y);o.push(p),a.push(c)}return new nn(o,a,t,n)}var yk=eo.prototype.constructor;function xk(){return new yk(this._groups,this._parents)}function wk(e,t){var n,r,i;return function(){var o=Mr(this,e),a=(this.style.removeProperty(e),Mr(this,e));return o===a?null:o===n&&a===r?i:i=t(n=o,r=a)}}function U0(e){return function(){this.style.removeProperty(e)}}function kk(e,t,n){var r,i=n+"",o;return function(){var a=Mr(this,e);return a===i?null:a===r?o:o=t(r=a,n)}}function Sk(e,t,n){var r,i,o;return function(){var a=Mr(this,e),l=n(this),s=l+"";return l==null&&(s=l=(this.style.removeProperty(e),Mr(this,e))),a===s?null:a===r&&s===i?o:(i=s,o=t(r=a,l))}}function Ek(e,t){var n,r,i,o="style."+t,a="end."+o,l;return function(){var s=$t(this,e),u=s.on,c=s.value[o]==null?l||(l=U0(t)):void 0;(u!==n||i!==c)&&(r=(n=u).copy()).on(a,i=c),s.on=r}}function bk(e,t,n){var r=(e+="")=="transform"?bw:$0;return t==null?this.styleTween(e,wk(e,r)).on("end.style."+e,U0(e)):typeof t=="function"?this.styleTween(e,Sk(e,r,Hc(this,"style."+e,t))).each(Ek(this._id,e)):this.styleTween(e,kk(e,r,t),n).on("end.style."+e,null)}function Nk(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function Ck(e,t,n){var r,i;function o(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&Nk(e,a,n)),r}return o._value=t,o}function _k(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,Ck(e,t,n??""))}function jk(e){return function(){this.textContent=e}}function zk(e){return function(){var t=e(this);this.textContent=t??""}}function Mk(e){return this.tween("text",typeof e=="function"?zk(Hc(this,"text",e)):jk(e==null?"":e+""))}function Pk(e){return function(t){this.textContent=e.call(this,t)}}function Fk(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&Pk(i)),t}return r._value=e,r}function Tk(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Fk(e))}function Ak(){for(var e=this._name,t=this._id,n=B0(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],l=a.length,s,u=0;u<l;++u)if(s=a[u]){var c=jt(s,t);hl(s,e,n,u,a,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new nn(r,this._parents,e,n)}function Rk(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(o,a){var l={value:a},s={value:function(){--i===0&&o()}};n.each(function(){var u=$t(this,r),c=u.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(s)),u.on=t}),i===0&&o()})}var Ik=0;function nn(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function B0(){return++Ik}var zn=eo.prototype;nn.prototype={constructor:nn,select:gk,selectAll:vk,filter:uk,merge:ck,selection:xk,transition:Ak,call:zn.call,nodes:zn.nodes,node:zn.node,size:zn.size,empty:zn.empty,each:zn.each,on:pk,attr:qw,attrTween:Kw,style:bk,styleTween:_k,text:Mk,textTween:Tk,remove:mk,tween:$w,delay:tk,duration:ik,ease:ak,easeVarying:sk,end:Rk,[Symbol.iterator]:zn[Symbol.iterator]};function Ok(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Lk={time:null,delay:0,duration:250,ease:Ok};function Dk(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function $k(e){var t,n;e instanceof nn?(t=e._id,e=e._name):(t=B0(),(n=Lk).time=Uc(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],l=a.length,s,u=0;u<l;++u)(s=a[u])&&hl(s,e,t,u,a,n||Dk(s,t));return new nn(r,this._parents,e,t)}eo.prototype.interrupt=Ow;eo.prototype.transition=$k;const jo=e=>()=>e;function Uk(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Qt(e,t,n){this.k=e,this.x=t,this.y=n}Qt.prototype={constructor:Qt,scale:function(e){return e===1?this:new Qt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Qt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Wc=new Qt(1,0,0);Qt.prototype;function Ql(e){e.stopImmediatePropagation()}function Vr(e){e.preventDefault(),e.stopImmediatePropagation()}function Bk(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Hk(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function tp(){return this.__zoom||Wc}function Wk(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Gk(){return navigator.maxTouchPoints||"ontouchstart"in this}function Vk(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],o=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}function qk(){var e=Bk,t=Hk,n=Vk,r=Wk,i=Gk,o=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,s=zw,u=Oc("start","zoom","end"),c,f,p,h=500,y=150,w=0,N=10;function m(k){k.property("__zoom",tp).on("wheel.zoom",M).on("mousedown.zoom",L).on("dblclick.zoom",A).filter(i).on("touchstart.zoom",D).on("touchmove.zoom",q).on("touchend.zoom touchcancel.zoom",K).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}m.transform=function(k,E,b,R){var _=k.selection?k.selection():k;_.property("__zoom",tp),k!==_?S(k,E,b,R):_.interrupt().each(function(){C(this,arguments).event(R).start().zoom(null,typeof E=="function"?E.apply(this,arguments):E).end()})},m.scaleBy=function(k,E,b,R){m.scaleTo(k,function(){var _=this.__zoom.k,z=typeof E=="function"?E.apply(this,arguments):E;return _*z},b,R)},m.scaleTo=function(k,E,b,R){m.transform(k,function(){var _=t.apply(this,arguments),z=this.__zoom,F=b==null?x(_):typeof b=="function"?b.apply(this,arguments):b,U=z.invert(F),G=typeof E=="function"?E.apply(this,arguments):E;return n(g(v(z,G),F,U),_,a)},b,R)},m.translateBy=function(k,E,b,R){m.transform(k,function(){return n(this.__zoom.translate(typeof E=="function"?E.apply(this,arguments):E,typeof b=="function"?b.apply(this,arguments):b),t.apply(this,arguments),a)},null,R)},m.translateTo=function(k,E,b,R,_){m.transform(k,function(){var z=t.apply(this,arguments),F=this.__zoom,U=R==null?x(z):typeof R=="function"?R.apply(this,arguments):R;return n(Wc.translate(U[0],U[1]).scale(F.k).translate(typeof E=="function"?-E.apply(this,arguments):-E,typeof b=="function"?-b.apply(this,arguments):-b),z,a)},R,_)};function v(k,E){return E=Math.max(o[0],Math.min(o[1],E)),E===k.k?k:new Qt(E,k.x,k.y)}function g(k,E,b){var R=E[0]-b[0]*k.k,_=E[1]-b[1]*k.k;return R===k.x&&_===k.y?k:new Qt(k.k,R,_)}function x(k){return[(+k[0][0]+ +k[1][0])/2,(+k[0][1]+ +k[1][1])/2]}function S(k,E,b,R){k.on("start.zoom",function(){C(this,arguments).event(R).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(R).end()}).tween("zoom",function(){var _=this,z=arguments,F=C(_,z).event(R),U=t.apply(_,z),G=b==null?x(U):typeof b=="function"?b.apply(_,z):b,ee=Math.max(U[1][0]-U[0][0],U[1][1]-U[0][1]),X=_.__zoom,ne=typeof E=="function"?E.apply(_,z):E,ge=s(X.invert(G).concat(ee/X.k),ne.invert(G).concat(ee/ne.k));return function(Ee){if(Ee===1)Ee=ne;else{var ut=ge(Ee),ve=ee/ut[2];Ee=new Qt(ve,G[0]-ut[0]*ve,G[1]-ut[1]*ve)}F.zoom(null,Ee)}})}function C(k,E,b){return!b&&k.__zooming||new j(k,E)}function j(k,E){this.that=k,this.args=E,this.active=0,this.sourceEvent=null,this.extent=t.apply(k,E),this.taps=0}j.prototype={event:function(k){return k&&(this.sourceEvent=k),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(k,E){return this.mouse&&k!=="mouse"&&(this.mouse[1]=E.invert(this.mouse[0])),this.touch0&&k!=="touch"&&(this.touch0[1]=E.invert(this.touch0[0])),this.touch1&&k!=="touch"&&(this.touch1[1]=E.invert(this.touch1[0])),this.that.__zoom=E,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(k){var E=Vt(this.that).datum();u.call(k,this.that,new Uk(k,{sourceEvent:this.sourceEvent,target:m,transform:this.that.__zoom,dispatch:u}),E)}};function M(k,...E){if(!e.apply(this,arguments))return;var b=C(this,E).event(k),R=this.__zoom,_=Math.max(o[0],Math.min(o[1],R.k*Math.pow(2,r.apply(this,arguments)))),z=jn(k);if(b.wheel)(b.mouse[0][0]!==z[0]||b.mouse[0][1]!==z[1])&&(b.mouse[1]=R.invert(b.mouse[0]=z)),clearTimeout(b.wheel);else{if(R.k===_)return;b.mouse=[z,R.invert(z)],qo(this),b.start()}Vr(k),b.wheel=setTimeout(F,y),b.zoom("mouse",n(g(v(R,_),b.mouse[0],b.mouse[1]),b.extent,a));function F(){b.wheel=null,b.end()}}function L(k,...E){if(p||!e.apply(this,arguments))return;var b=C(this,E,!0).event(k),R=Vt(k.view).on("mousemove.zoom",G,!0).on("mouseup.zoom",ee,!0),_=jn(k,z),z=k.currentTarget,F=k.clientX,U=k.clientY;iw(k.view),Ql(k),b.mouse=[_,this.__zoom.invert(_)],qo(this),b.start();function G(X){if(Vr(X),!b.moved){var ne=X.clientX-F,ge=X.clientY-U;b.moved=ne*ne+ge*ge>w}b.event(X).zoom("mouse",n(g(b.that.__zoom,b.mouse[0]=jn(X,z),b.mouse[1]),b.extent,a))}function ee(X){R.on("mousemove.zoom mouseup.zoom",null),ow(X.view,b.moved),Vr(X),b.event(X).end()}}function A(k,...E){if(e.apply(this,arguments)){var b=this.__zoom,R=jn(k.changedTouches?k.changedTouches[0]:k,this),_=b.invert(R),z=b.k*(k.shiftKey?.5:2),F=n(g(v(b,z),R,_),t.apply(this,E),a);Vr(k),l>0?Vt(this).transition().duration(l).call(S,F,R,k):Vt(this).call(m.transform,F,R,k)}}function D(k,...E){if(e.apply(this,arguments)){var b=k.touches,R=b.length,_=C(this,E,k.changedTouches.length===R).event(k),z,F,U,G;for(Ql(k),F=0;F<R;++F)U=b[F],G=jn(U,this),G=[G,this.__zoom.invert(G),U.identifier],_.touch0?!_.touch1&&_.touch0[2]!==G[2]&&(_.touch1=G,_.taps=0):(_.touch0=G,z=!0,_.taps=1+!!c);c&&(c=clearTimeout(c)),z&&(_.taps<2&&(f=G[0],c=setTimeout(function(){c=null},h)),qo(this),_.start())}}function q(k,...E){if(this.__zooming){var b=C(this,E).event(k),R=k.changedTouches,_=R.length,z,F,U,G;for(Vr(k),z=0;z<_;++z)F=R[z],U=jn(F,this),b.touch0&&b.touch0[2]===F.identifier?b.touch0[0]=U:b.touch1&&b.touch1[2]===F.identifier&&(b.touch1[0]=U);if(F=b.that.__zoom,b.touch1){var ee=b.touch0[0],X=b.touch0[1],ne=b.touch1[0],ge=b.touch1[1],Ee=(Ee=ne[0]-ee[0])*Ee+(Ee=ne[1]-ee[1])*Ee,ut=(ut=ge[0]-X[0])*ut+(ut=ge[1]-X[1])*ut;F=v(F,Math.sqrt(Ee/ut)),U=[(ee[0]+ne[0])/2,(ee[1]+ne[1])/2],G=[(X[0]+ge[0])/2,(X[1]+ge[1])/2]}else if(b.touch0)U=b.touch0[0],G=b.touch0[1];else return;b.zoom("touch",n(g(F,U,G),b.extent,a))}}function K(k,...E){if(this.__zooming){var b=C(this,E).event(k),R=k.changedTouches,_=R.length,z,F;for(Ql(k),p&&clearTimeout(p),p=setTimeout(function(){p=null},h),z=0;z<_;++z)F=R[z],b.touch0&&b.touch0[2]===F.identifier?delete b.touch0:b.touch1&&b.touch1[2]===F.identifier&&delete b.touch1;if(b.touch1&&!b.touch0&&(b.touch0=b.touch1,delete b.touch1),b.touch0)b.touch0[1]=this.__zoom.invert(b.touch0[0]);else if(b.end(),b.taps===2&&(F=jn(F,this),Math.hypot(f[0]-F[0],f[1]-F[1])<N)){var U=Vt(this).on("dblclick.zoom");U&&U.apply(this,arguments)}}}return m.wheelDelta=function(k){return arguments.length?(r=typeof k=="function"?k:jo(+k),m):r},m.filter=function(k){return arguments.length?(e=typeof k=="function"?k:jo(!!k),m):e},m.touchable=function(k){return arguments.length?(i=typeof k=="function"?k:jo(!!k),m):i},m.extent=function(k){return arguments.length?(t=typeof k=="function"?k:jo([[+k[0][0],+k[0][1]],[+k[1][0],+k[1][1]]]),m):t},m.scaleExtent=function(k){return arguments.length?(o[0]=+k[0],o[1]=+k[1],m):[o[0],o[1]]},m.translateExtent=function(k){return arguments.length?(a[0][0]=+k[0][0],a[1][0]=+k[1][0],a[0][1]=+k[0][1],a[1][1]=+k[1][1],m):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},m.constrain=function(k){return arguments.length?(n=k,m):n},m.duration=function(k){return arguments.length?(l=+k,m):l},m.interpolate=function(k){return arguments.length?(s=k,m):s},m.on=function(){var k=u.on.apply(u,arguments);return k===u?m:k},m.clickDistance=function(k){return arguments.length?(w=(k=+k)*k,m):Math.sqrt(w)},m.tapDistance=function(k){return arguments.length?(N=+k,m):N},m}function np(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?np(Object(n),!0).forEach(function(r){Yk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):np(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Su(e){"@babel/helpers - typeof";return Su=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Su(e)}function Yk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Je(){return Je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Je.apply(this,arguments)}function Qk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function yt(e,t){if(e==null)return{};var n=Qk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function je(e,t){return Xk(e)||Zk(e,t)||Kk(e,t)||Jk()}function Xk(e){if(Array.isArray(e))return e}function Zk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(s){o=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Kk(e,t){if(e){if(typeof e=="string")return rp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rp(e,t)}}function rp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Jk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var e5=["width","height","projection","projectionConfig"],t5=u0,n5=yt(gx,["geoPath"]),Ut=$.createContext(),r5=function(t){var n=t.projectionConfig,r=n===void 0?{}:n,i=t.projection,o=i===void 0?"geoEqualEarth":i,a=t.width,l=a===void 0?800:a,s=t.height,u=s===void 0?600:s,c=typeof o=="function";if(c)return o;var f=n5[o]().translate([l/2,u/2]),p=[f.center?"center":null,f.rotate?"rotate":null,f.scale?"scale":null,f.parallels?"parallels":null];return p.forEach(function(h){h&&(f=f[h](r[h]||f[h]()))}),f},H0=function(t){var n=t.width,r=t.height,i=t.projection,o=t.projectionConfig,a=yt(t,e5),l=o.center||[],s=je(l,2),u=s[0],c=s[1],f=o.rotate||[],p=je(f,3),h=p[0],y=p[1],w=p[2],N=o.parallels||[],m=je(N,2),v=m[0],g=m[1],x=o.scale||null,S=$.useMemo(function(){return r5({projectionConfig:{center:u||u===0||c||c===0?[u,c]:null,rotate:h||h===0||y||y===0?[h,y,w]:null,parallels:v||v===0||g||g===0?[v,g]:null,scale:x},projection:i,width:n,height:r})},[n,r,i,u,c,h,y,w,v,g,x]),C=$.useCallback(S,[S]),j=$.useMemo(function(){return{width:n,height:r,projection:C,path:t5().projection(C)}},[n,r,C]);return xe.createElement(Ut.Provider,Je({value:j},a))};H0.propTypes={width:T.number,height:T.number,projection:T.oneOfType([T.string,T.func]),projectionConfig:T.object};var i5=["width","height","projection","projectionConfig","className"],Gc=$.forwardRef(function(e,t){var n=e.width,r=n===void 0?800:n,i=e.height,o=i===void 0?600:i,a=e.projection,l=a===void 0?"geoEqualEarth":a,s=e.projectionConfig,u=s===void 0?{}:s,c=e.className,f=c===void 0?"":c,p=yt(e,i5);return xe.createElement(H0,{width:r,height:o,projection:l,projectionConfig:u},xe.createElement("svg",Je({ref:t,viewBox:"0 0 ".concat(r," ").concat(o),className:"rsm-svg ".concat(f)},p)))});Gc.displayName="ComposableMap";Gc.propTypes={width:T.number,height:T.number,projection:T.oneOfType([T.string,T.func]),projectionConfig:T.object,className:T.string};function ip(e,t,n){var r=(e*n.k-e)/2,i=(t*n.k-t)/2;return[e/2-(r+n.x)/n.k,t/2-(i+n.y)/n.k]}function o5(e){return fetch(e).then(function(t){if(!t.ok)throw Error(t.statusText);return t.json()}).catch(function(t){console.log("There was a problem when fetching the data: ",t)})}function op(e,t){var n=e.type==="Topology";if(!n)return t?t(e.features||e):e.features||e;var r=wx(e,e.objects[Object.keys(e.objects)[0]]).features;return t?t(r):r}function ap(e){var t=e.type==="Topology";if(!t)return null;var n=Lf(e,e.objects[Object.keys(e.objects)[0]],function(i,o){return i===o}),r=Lf(e,e.objects[Object.keys(e.objects)[0]],function(i,o){return i!==o});return{outline:n,borders:r}}function a5(e,t,n){return e&&t?{outline:cr(cr({},e),{},{rsmKey:"outline",svgPath:n(e)}),borders:cr(cr({},t),{},{rsmKey:"borders",svgPath:n(t)})}:{}}function l5(e,t){return e?e.map(function(n,r){return cr(cr({},n),{},{rsmKey:"geo-".concat(r),svgPath:t(n)})}):[]}function s5(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:30,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:30,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.5,r=Array.isArray(n)?n:[n,n],i=e/2*r[0],o=t/2*r[1];return"M".concat(0,",",0," Q",-e/2-i,",").concat(-t/2+o," ").concat(-e,",").concat(-t)}function u5(e){return typeof e=="string"}function c5(e){var t=e.geography,n=e.parseGeographies,r=$.useContext(Ut),i=r.path,o=$.useState({}),a=je(o,2),l=a[0],s=a[1];$.useEffect(function(){(typeof window>"u"?"undefined":Su(window))!=="undefined"&&t&&(u5(t)?o5(t).then(function(h){h&&s({geographies:op(h,n),mesh:ap(h)})}):s({geographies:op(t,n),mesh:ap(t)}))},[t,n]);var u=$.useMemo(function(){var h=l.mesh||{},y=a5(h.outline,h.borders,i);return{geographies:l5(l.geographies,i),outline:y.outline,borders:y.borders}},[l,i]),c=u.geographies,f=u.outline,p=u.borders;return{geographies:c,outline:f,borders:p}}var d5=["geography","children","parseGeographies","className"],Vc=$.forwardRef(function(e,t){var n=e.geography,r=e.children,i=e.parseGeographies,o=e.className,a=o===void 0?"":o,l=yt(e,d5),s=$.useContext(Ut),u=s.path,c=s.projection,f=c5({geography:n,parseGeographies:i}),p=f.geographies,h=f.outline,y=f.borders;return xe.createElement("g",Je({ref:t,className:"rsm-geographies ".concat(a)},l),p&&p.length>0&&r({geographies:p,outline:h,borders:y,path:u,projection:c}))});Vc.displayName="Geographies";Vc.propTypes={geography:T.oneOfType([T.string,T.object,T.array]),children:T.func,parseGeographies:T.func,className:T.string};var f5=["geography","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"],qc=$.forwardRef(function(e,t){var n=e.geography,r=e.onMouseEnter,i=e.onMouseLeave,o=e.onMouseDown,a=e.onMouseUp,l=e.onFocus,s=e.onBlur,u=e.style,c=u===void 0?{}:u,f=e.className,p=f===void 0?"":f,h=yt(e,f5),y=$.useState(!1),w=je(y,2),N=w[0],m=w[1],v=$.useState(!1),g=je(v,2),x=g[0],S=g[1];function C(q){S(!0),r&&r(q)}function j(q){S(!1),N&&m(!1),i&&i(q)}function M(q){S(!0),l&&l(q)}function L(q){S(!1),N&&m(!1),s&&s(q)}function A(q){m(!0),o&&o(q)}function D(q){m(!1),a&&a(q)}return xe.createElement("path",Je({ref:t,tabIndex:"0",className:"rsm-geography ".concat(p),d:n.svgPath,onMouseEnter:C,onMouseLeave:j,onFocus:M,onBlur:L,onMouseDown:A,onMouseUp:D,style:c[N||x?N?"pressed":"hover":"default"]},h))});qc.displayName="Geography";qc.propTypes={geography:T.object,onMouseEnter:T.func,onMouseLeave:T.func,onMouseDown:T.func,onMouseUp:T.func,onFocus:T.func,onBlur:T.func,style:T.object,className:T.string};var p5=$.memo(qc),h5=["fill","stroke","step","className"],Yc=$.forwardRef(function(e,t){var n=e.fill,r=n===void 0?"transparent":n,i=e.stroke,o=i===void 0?"currentcolor":i,a=e.step,l=a===void 0?[10,10]:a,s=e.className,u=s===void 0?"":s,c=yt(e,h5),f=$.useContext(Ut),p=f.path;return xe.createElement("path",Je({ref:t,d:p(Sc().step(l)()),fill:r,stroke:o,className:"rsm-graticule ".concat(u)},c))});Yc.displayName="Graticule";Yc.propTypes={fill:T.string,stroke:T.string,step:T.array,className:T.string};$.memo(Yc);var m5=["value"],g5=$.createContext(),v5={x:0,y:0,k:1,transformString:"translate(0 0) scale(1)"},W0=function(t){var n=t.value,r=n===void 0?v5:n,i=yt(t,m5);return xe.createElement(g5.Provider,Je({value:r},i))};W0.propTypes={x:T.number,y:T.number,k:T.number,transformString:T.string};function y5(e){var t=e.center,n=e.filterZoomEvent,r=e.onMoveStart,i=e.onMoveEnd,o=e.onMove,a=e.translateExtent,l=a===void 0?[[-1/0,-1/0],[1/0,1/0]]:a,s=e.scaleExtent,u=s===void 0?[1,8]:s,c=e.zoom,f=c===void 0?1:c,p=$.useContext(Ut),h=p.width,y=p.height,w=p.projection,N=je(t,2),m=N[0],v=N[1],g=$.useState({x:0,y:0,k:1}),x=je(g,2),S=x[0],C=x[1],j=$.useRef({x:0,y:0,k:1}),M=$.useRef(),L=$.useRef(),A=$.useRef(!1),D=je(l,2),q=D[0],K=D[1],k=je(q,2),E=k[0],b=k[1],R=je(K,2),_=R[0],z=R[1],F=je(u,2),U=F[0],G=F[1];return $.useEffect(function(){var ee=Vt(M.current);function X(ve){!r||A.current||r({coordinates:w.invert(ip(h,y,ve.transform)),zoom:ve.transform.k},ve)}function ne(ve){if(!A.current){var on=ve.transform,Ir=ve.sourceEvent;C({x:on.x,y:on.y,k:on.k,dragging:Ir}),o&&o({x:on.x,y:on.y,zoom:on.k,dragging:Ir},ve)}}function ge(ve){if(A.current){A.current=!1;return}var on=w.invert(ip(h,y,ve.transform)),Ir=je(on,2),Zc=Ir[0],Kc=Ir[1];j.current={x:Zc,y:Kc,k:ve.transform.k},i&&i({coordinates:[Zc,Kc],zoom:ve.transform.k},ve)}function Ee(ve){return n?n(ve):ve?!ve.ctrlKey&&!ve.button:!1}var ut=qk().filter(Ee).scaleExtent([U,G]).translateExtent([[E,b],[_,z]]).on("start",X).on("zoom",ne).on("end",ge);L.current=ut,ee.call(ut)},[h,y,E,b,_,z,U,G,w,r,o,i,n]),$.useEffect(function(){if(!(m===j.current.x&&v===j.current.y&&f===j.current.k)){var ee=w([m,v]),X=ee[0]*f,ne=ee[1]*f,ge=Vt(M.current);A.current=!0,ge.call(L.current.transform,Wc.translate(h/2-X,y/2-ne).scale(f)),C({x:h/2-X,y:y/2-ne,k:f}),j.current={x:m,y:v,k:f}}},[m,v,f,h,y,w]),{mapRef:M,position:S,transformString:"translate(".concat(S.x," ").concat(S.y,") scale(").concat(S.k,")")}}var x5=["center","zoom","minZoom","maxZoom","translateExtent","filterZoomEvent","onMoveStart","onMove","onMoveEnd","className"],G0=$.forwardRef(function(e,t){var n=e.center,r=n===void 0?[0,0]:n,i=e.zoom,o=i===void 0?1:i,a=e.minZoom,l=a===void 0?1:a,s=e.maxZoom,u=s===void 0?8:s,c=e.translateExtent,f=e.filterZoomEvent,p=e.onMoveStart,h=e.onMove,y=e.onMoveEnd,w=e.className,N=yt(e,x5),m=$.useContext(Ut),v=m.width,g=m.height,x=y5({center:r,filterZoomEvent:f,onMoveStart:p,onMove:h,onMoveEnd:y,scaleExtent:[l,u],translateExtent:c,zoom:o}),S=x.mapRef,C=x.transformString,j=x.position;return xe.createElement(W0,{value:{x:j.x,y:j.y,k:j.k,transformString:C}},xe.createElement("g",{ref:S},xe.createElement("rect",{width:v,height:g,fill:"transparent"}),xe.createElement("g",Je({ref:t,transform:C,className:"rsm-zoomable-group ".concat(w)},N))))});G0.displayName="ZoomableGroup";G0.propTypes={center:T.array,zoom:T.number,minZoom:T.number,maxZoom:T.number,translateExtent:T.arrayOf(T.array),onMoveStart:T.func,onMove:T.func,onMoveEnd:T.func,className:T.string};var w5=["id","fill","stroke","strokeWidth","className"],Qc=$.forwardRef(function(e,t){var n=e.id,r=n===void 0?"rsm-sphere":n,i=e.fill,o=i===void 0?"transparent":i,a=e.stroke,l=a===void 0?"currentcolor":a,s=e.strokeWidth,u=s===void 0?.5:s,c=e.className,f=c===void 0?"":c,p=yt(e,w5),h=$.useContext(Ut),y=h.path,w=$.useMemo(function(){return y({type:"Sphere"})},[y]);return xe.createElement($.Fragment,null,xe.createElement("defs",null,xe.createElement("clipPath",{id:r},xe.createElement("path",{d:w}))),xe.createElement("path",Je({ref:t,d:w,fill:o,stroke:l,strokeWidth:u,style:{pointerEvents:"none"},className:"rsm-sphere ".concat(f)},p)))});Qc.displayName="Sphere";Qc.propTypes={id:T.string,fill:T.string,stroke:T.string,strokeWidth:T.number,className:T.string};$.memo(Qc);var k5=["coordinates","children","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"],Xc=$.forwardRef(function(e,t){var n=e.coordinates,r=e.children,i=e.onMouseEnter,o=e.onMouseLeave,a=e.onMouseDown,l=e.onMouseUp,s=e.onFocus,u=e.onBlur,c=e.style,f=c===void 0?{}:c,p=e.className,h=p===void 0?"":p,y=yt(e,k5),w=$.useContext(Ut),N=w.projection,m=$.useState(!1),v=je(m,2),g=v[0],x=v[1],S=$.useState(!1),C=je(S,2),j=C[0],M=C[1],L=N(n),A=je(L,2),D=A[0],q=A[1];function K(z){M(!0),i&&i(z)}function k(z){M(!1),g&&x(!1),o&&o(z)}function E(z){M(!0),s&&s(z)}function b(z){M(!1),g&&x(!1),u&&u(z)}function R(z){x(!0),a&&a(z)}function _(z){x(!1),l&&l(z)}return xe.createElement("g",Je({ref:t,transform:"translate(".concat(D,", ").concat(q,")"),className:"rsm-marker ".concat(h),onMouseEnter:K,onMouseLeave:k,onFocus:E,onBlur:b,onMouseDown:R,onMouseUp:_,style:f[g||j?g?"pressed":"hover":"default"]},y),r)});Xc.displayName="Marker";Xc.propTypes={coordinates:T.array,children:T.oneOfType([T.node,T.arrayOf(T.node)]),onMouseEnter:T.func,onMouseLeave:T.func,onMouseDown:T.func,onMouseUp:T.func,onFocus:T.func,onBlur:T.func,style:T.object,className:T.string};var S5=["from","to","coordinates","stroke","strokeWidth","fill","className"],V0=$.forwardRef(function(e,t){var n=e.from,r=n===void 0?[0,0]:n,i=e.to,o=i===void 0?[0,0]:i,a=e.coordinates,l=e.stroke,s=l===void 0?"currentcolor":l,u=e.strokeWidth,c=u===void 0?3:u,f=e.fill,p=f===void 0?"transparent":f,h=e.className,y=h===void 0?"":h,w=yt(e,S5),N=$.useContext(Ut),m=N.path,v={type:"LineString",coordinates:a||[r,o]};return xe.createElement("path",Je({ref:t,d:m(v),className:"rsm-line ".concat(y),stroke:s,strokeWidth:c,fill:p},w))});V0.displayName="Line";V0.propTypes={from:T.array,to:T.array,coordinates:T.array,stroke:T.string,strokeWidth:T.number,fill:T.string,className:T.string};var E5=["subject","children","connectorProps","dx","dy","curve","className"],q0=$.forwardRef(function(e,t){var n=e.subject,r=e.children,i=e.connectorProps,o=e.dx,a=o===void 0?30:o,l=e.dy,s=l===void 0?30:l,u=e.curve,c=u===void 0?0:u,f=e.className,p=f===void 0?"":f,h=yt(e,E5),y=$.useContext(Ut),w=y.projection,N=w(n),m=je(N,2),v=m[0],g=m[1],x=s5(a,s,c);return xe.createElement("g",Je({ref:t,transform:"translate(".concat(v+a,", ").concat(g+s,")"),className:"rsm-annotation ".concat(p)},h),xe.createElement("path",Je({d:x,fill:"transparent",stroke:"#000"},i)),r)});q0.displayName="Annotation";q0.propTypes={subject:T.array,children:T.oneOfType([T.node,T.arrayOf(T.node)]),dx:T.number,dy:T.number,curve:T.number,connectorProps:T.object,className:T.string};const b5="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",N5=[{id:"na",name:"North America",coords:[-98,39],hq:!1},{id:"london",name:"London",coords:[-.1,51.5],hq:!1},{id:"gurgaon",name:"Gurgaon HQ",coords:[77,28.5],hq:!0},{id:"sg",name:"Singapore",coords:[103.8,1.4],hq:!1},{id:"sydney",name:"Sydney",coords:[151.2,-33.9],hq:!1}],C5=[{num:"15+",label:"Countries"},{num:"100+",label:"Organizations"},{num:"5+",label:"Yrs of Client Delivery"},{num:"24/7",label:"Global Delivery"}];function _5({onOpenContact:e}){return d.jsxs("section",{id:"global-presence",className:"gp-section",children:[d.jsx("div",{className:"gp-glow-orb gp-orb-left"}),d.jsx("div",{className:"gp-glow-orb gp-orb-right"}),d.jsxs("div",{className:"container gp-inner",children:[d.jsxs("div",{className:"gp-text-col",children:[d.jsxs("div",{className:"badge-pill gp-badge",children:[d.jsx(vc,{size:14,className:"badge-icon"}),d.jsx("span",{children:"GLOBAL REACH & DELIVERY"})]}),d.jsxs("h2",{className:"gp-headline",children:["Supporting ",d.jsx("br",{}),d.jsx("span",{className:"gp-accent",children:"Global Organizations"})]}),d.jsx("p",{className:"gp-subtext",children:"Wherever our clients operate, our focus remains the same: strengthening trust, managing risk, and delivering outcomes. Our flexible delivery model enables us to work seamlessly across regions, time zones, and operating environments through offshore, remote, hybrid, and embedded team structures, providing clients with experienced professionals, scalable support, and strong accountability."}),d.jsx("div",{className:"gp-stats-grid",children:C5.map((t,n)=>d.jsxs("div",{className:"gp-stat-card",children:[d.jsx("span",{className:"gp-stat-num",children:t.num}),d.jsx("span",{className:"gp-stat-lbl",children:t.label})]},n))}),d.jsxs("button",{className:"btn-primary gp-cta-btn",onClick:()=>e("Global Organization Inquiry"),children:["Discuss Global Delivery ",d.jsx(Cr,{size:16})]})]}),d.jsxs("div",{className:"gp-map-col",children:[d.jsx("div",{className:"gp-map-frame",children:d.jsxs(Gc,{projection:"geoMercator",projectionConfig:{scale:155,center:[20,15]},style:{width:"100%",height:"100%"},children:[d.jsx(Vc,{geography:b5,children:({geographies:t})=>t.map(n=>d.jsx(p5,{geography:n,fill:"rgba(167,139,250,0.12)",stroke:"rgba(167,139,250,0.3)",strokeWidth:.5,style:{default:{outline:"none"},hover:{fill:"rgba(167,139,250,0.28)",outline:"none"},pressed:{outline:"none"}}},n.rsmKey))}),N5.map(t=>d.jsxs(Xc,{coordinates:t.coords,children:[d.jsxs("circle",{r:"16",fill:"none",stroke:t.hq?"#10B981":"#A78BFA",strokeWidth:"1",opacity:"0.3",children:[d.jsx("animate",{attributeName:"r",from:"8",to:"22",dur:t.hq?"1.6s":"2s",repeatCount:"indefinite"}),d.jsx("animate",{attributeName:"opacity",from:"0.7",to:"0",dur:t.hq?"1.6s":"2s",repeatCount:"indefinite"})]}),d.jsxs("circle",{r:"8",fill:"none",stroke:t.hq?"#10B981":"#A78BFA",strokeWidth:"1",opacity:"0.5",children:[d.jsx("animate",{attributeName:"r",from:"5",to:"14",dur:t.hq?"1.6s":"2s",begin:"0.4s",repeatCount:"indefinite"}),d.jsx("animate",{attributeName:"opacity",from:"0.5",to:"0",dur:t.hq?"1.6s":"2s",begin:"0.4s",repeatCount:"indefinite"})]}),d.jsx("circle",{r:t.hq?5.5:4,fill:t.hq?"#10B981":"#A78BFA",stroke:t.hq?"#D1FAE5":"#EDE9FE",strokeWidth:"1.5",style:{filter:`drop-shadow(0 0 8px ${t.hq?"rgba(16,185,129,0.9)":"rgba(167,139,250,0.9)"})`}}),d.jsx("text",{y:t.hq?-12:-10,textAnchor:"middle",style:{fontFamily:"Inter, sans-serif",fontWeight:700,fontSize:t.hq?"7px":"6px",fill:t.hq?"#6EE7B7":"#C4B5FD",letterSpacing:"0.03em"},children:t.name})]},t.id))]})}),d.jsxs("div",{className:"gp-map-legend",children:[d.jsxs("span",{className:"legend-item legend-hq",children:[d.jsx("span",{className:"legend-dot hq-dot"}),"Gurgaon HQ & Operations"]}),d.jsxs("span",{className:"legend-item",children:[d.jsx("span",{className:"legend-dot"}),"Delivery Hub"]})]})]})]}),d.jsx("style",{children:`
        .gp-section {
          position: relative;
          background: linear-gradient(160deg, #0F0829 0%, #1A0D4A 55%, #0D1A36 100%);
          padding: 5.5rem 0 4.5rem;
          overflow: hidden;
        }

        /* ambient glows */
        .gp-glow-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          pointer-events: none;
        }
        .gp-orb-left  { top: -200px; left: -180px;  background: radial-gradient(circle, rgba(90,56,253,0.18) 0%, transparent 65%); }
        .gp-orb-right { bottom: -200px; right: -180px; background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%); }

        /* ── layout ── */
        .gp-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 4rem;
          align-items: center;
        }

        /* ── left text ── */
        .gp-badge {
          background: rgba(90,56,253,0.18) !important;
          border: 1px solid rgba(167,139,250,0.35) !important;
          color: rgba(255,255,255,0.85) !important;
          margin-bottom: 1.5rem;
        }
        .gp-badge .badge-icon { color: #A78BFA; }

        .gp-headline {
          font-size: 2.75rem;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
        }

        .gp-accent {
          background: linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gp-subtext {
          font-size: 1.02rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.65;
          margin-bottom: 2.5rem;
        }

        /* stats 2x2 grid */
        .gp-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .gp-stat-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(167,139,250,0.2);
          border-radius: var(--radius-md);
          padding: 1.1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          transition: all 0.25s ease;
        }

        .gp-stat-card:hover {
          background: rgba(90,56,253,0.15);
          border-color: rgba(167,139,250,0.45);
        }

        .gp-stat-num {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 2rem;
          color: #A78BFA;
          line-height: 1;
        }

        .gp-stat-lbl {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          font-weight: 500;
        }

        .gp-cta-btn {
          background: linear-gradient(135deg, #5A38FD, #7C3AED) !important;
          box-shadow: 0 8px 25px rgba(90,56,253,0.45);
          padding: 0.9rem 2rem;
        }
        .gp-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(90,56,253,0.55);
        }

        /* ── map ── */
        .gp-map-col { position: relative; }

        .gp-map-frame {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(167,139,250,0.15);
          box-shadow: 0 0 60px rgba(90,56,253,0.12);
        }

        /* legend */
        .gp-map-legend {
          display: flex;
          gap: 1.75rem;
          margin-top: 1rem;
          justify-content: flex-end;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          font-weight: 500;
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #A78BFA;
          box-shadow: 0 0 6px rgba(167,139,250,0.7);
          flex-shrink: 0;
        }

        .hq-dot {
          background: #10B981;
          box-shadow: 0 0 6px rgba(16,185,129,0.8);
        }

        @media (max-width: 1024px) {
          .gp-inner { grid-template-columns: 1fr; }
          .gp-headline { font-size: 2.2rem; }
        }
      `})]})}function j5({onOpenContact:e}){const t=[{name:"Megha Bakshi",role:"Founder & Technology Risk and Trust Leader",tagline:"15+ Years of Experience",image:"./megha.jpeg",imagePosition:"center 20%",bio:"Megha founded Gaussians with a simple belief that security, compliance, and risk should enable business growth, not slow it down. Drawing on Big 4 and industry leadership experience, she partners with organizations to build practical, scalable programs that strengthen trust, manage risk, and support long-term success. She believes the best consultants don't simply deliver recommendations, they become trusted partners in their clients' journey.",highlights:["Global Consulting & Industry Veterans","Big-4 & Enterprise Background","15+ Years Executive Leadership"],avatarInitials:"MB"},{name:"Arjun Mallikarjuna Reddy",role:"Associate Director, Technology Assurance & Risk Advisory",tagline:"200+ Audit & GRC Engagements",image:"./arjun.jpeg",imagePosition:"center top",bio:`Mallikarjuna Reddy brings extensive experience working with multinational organizations, leading CPA firms, and growing businesses, with a strong background in external and internal audits, risk advisory, cybersecurity, compliance, and IT assurance.

Having led and contributed to 200+ engagements, he has worked across leading frameworks including SOC 1 & SOC 2, ISO 27001, CMMC, HITECH, PCI DSS, HIPAA, GDPR, NIST, SOX ITGC, ITGC, and TPRM.

He partners with organizations to strengthen governance, manage cybersecurity and technology risks, achieve compliance objectives, and build practical, scalable programs that support business growth, resilience, and long-term trust.`,highlights:["200+ Audit & GRC Engagements","MNC & Leading CPA Firm Experience","Audit, Cybersecurity & Compliance Leadership"],avatarInitials:"AM"}];return d.jsxs("section",{id:"leadership",className:"leadership-section",children:[d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"section-header",children:[d.jsx("div",{className:"badge-pill",children:d.jsx("span",{children:"LEADERSHIP & SUBJECT MATTER EXPERTS"})}),d.jsx("h2",{children:"Experienced Leaders. Trusted Advisors. Proven Outcomes."}),d.jsx("p",{children:"Our leadership team combines deep subject matter expertise with hands-on operational experience. We stay connected to our clients and teams to deliver practical solutions that drive measurable, lasting impact."})]}),d.jsx("div",{className:"leadership-grid",children:t.map((n,r)=>d.jsxs("div",{className:"leader-card glass-card",children:[d.jsxs("div",{className:"leader-header",children:[d.jsxs("div",{className:"leader-avatar-box",children:[n.image?d.jsx("img",{src:n.image,alt:n.name,className:"leader-avatar-img",style:{objectPosition:n.imagePosition||"center top"},onError:i=>{i.target.style.display="none",i.target.nextSibling.style.display="flex"}}):null,d.jsx("span",{className:"leader-avatar-fallback",style:{display:n.image?"none":"flex"},children:n.avatarInitials})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"leader-name",children:n.name}),d.jsx("div",{className:"leader-role",children:n.role}),d.jsx("div",{className:"leader-tagline",children:n.tagline})]})]}),n.bio&&d.jsx("div",{className:"leader-bio",children:n.bio.split(`

`).map((i,o)=>d.jsx("p",{style:{marginBottom:o<n.bio.split(`

`).length-1?"0.85rem":0},children:i},o))}),d.jsx("div",{className:"leader-highlights",children:n.highlights.map((i,o)=>d.jsxs("div",{className:"h-item",children:[d.jsx(C1,{size:15,className:"h-icon"}),d.jsx("span",{children:i})]},o))}),d.jsx("div",{className:"leader-footer",children:d.jsxs("button",{className:"btn-secondary leader-btn",onClick:()=>e(`Consultation with ${n.name}`),children:["Connect with ",n.name.split(" ")[0]]})})]},r))})]}),d.jsx("style",{children:`
        .leadership-section {
          padding: 6rem 0;
          background: var(--bg-soft-purple);
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          max-width: 1040px;
          margin: 0 auto;
        }

        .leader-card {
          padding: 2.5rem;
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
        }

        .leader-card:hover {
          border-color: var(--primary);
          box-shadow: 0 16px 35px rgba(90, 56, 253, 0.12);
        }

        .leader-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .leader-avatar-box {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(90, 56, 253, 0.25);
          flex-shrink: 0;
          position: relative;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-purple) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .leader-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .leader-avatar-fallback {
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        }

        .leader-name {
          font-size: 1.4rem;
          color: var(--text-dark);
          margin-bottom: 0.15rem;
        }

        .leader-role {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--primary);
        }

        .leader-tagline {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .leader-bio {
          font-size: 0.98rem;
          color: var(--text-body);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .leader-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          background: var(--bg-soft-purple);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }

        .h-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        .h-icon {
          color: var(--primary);
        }

        .leader-footer {
          display: flex;
          justify-content: flex-start;
        }

        .leader-btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 868px) {
          .leadership-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function z5({onOpenContact:e}){const t=[{num:"01",icon:d.jsx(M1,{size:24}),title:"Learn",subtitle:"Build Knowledge",desc:"Developing skills and expanding perspectives through structured training, workshops, and real-world exposure.",points:["Internships","Mentorship Programs","Training & Workshops","Webinars","Real-world Exposure"]},{num:"02",icon:d.jsx(D1,{size:24}),title:"Share",subtitle:"Inspire Others",desc:"Sharing industry insights, thought leadership articles, and expert discussions to make complex topics accessible.",points:["Thought Leadership","Industry Articles","Knowledge Webinars","Expert Roundtables"]},{num:"03",icon:d.jsx(bm,{size:24}),title:"Grow",subtitle:"Elevate Together",desc:"Fostering curiosity, innovation, and professional development across every stage of a cybersecurity career.",points:["Skill Acceleration","Career Pathways","Cross-domain Collaboration","Continuous Improvement"]},{num:"04",icon:d.jsx(F1,{size:24}),title:"Give Back",subtitle:"Create Impact",desc:"Contributing to the broader professional ecosystem through educational support and community mentorship.",points:["Community Initiatives","Pro-bono Guidance","Educational Forums","Nurturing Future Talent"]}];return d.jsxs("section",{id:"forward",className:"forward-section",children:[d.jsx("div",{className:"forward-bg-mesh"}),d.jsx("div",{className:"forward-glow-orb orb-1"}),d.jsx("div",{className:"forward-glow-orb orb-2"}),d.jsxs("div",{className:"container relative-z",children:[d.jsxs("div",{className:"section-header dark-header",children:[d.jsxs("div",{className:"badge-pill forward-pill",children:[d.jsx(yc,{size:16}),d.jsx("span",{children:"GAUSSIANS FORWARD"})]}),d.jsx("h2",{className:"dark-title",children:"Learn. Share. Grow. Give Back."}),d.jsx("div",{className:"section-divider forward-divider"}),d.jsx("p",{className:"dark-desc",children:"At Gaussians, we believe that building a stronger profession requires more than delivering great work for clients. It requires investing in people, sharing knowledge, creating opportunities, and contributing to communities."})]}),d.jsx("div",{className:"pillars-grid",children:t.map((n,r)=>d.jsxs("div",{className:"pillar-card dark-glass-card",children:[d.jsxs("div",{className:"pillar-top",children:[d.jsx("span",{className:"p-num",children:n.num}),d.jsx("div",{className:"p-icon",children:n.icon})]}),d.jsx("h3",{className:"p-title",children:n.title}),d.jsx("div",{className:"p-sub",children:n.subtitle}),d.jsx("p",{className:"p-desc",children:n.desc}),d.jsx("div",{className:"p-points",children:n.points.map((i,o)=>d.jsxs("div",{className:"pt-item",children:[d.jsx(sl,{size:14,className:"pt-icon"}),d.jsx("span",{children:i})]},o))})]},r))}),d.jsxs("div",{className:"forward-cta-banner dark-cta-glass",children:[d.jsxs("div",{className:"f-cta-content",children:[d.jsx("h3",{children:"Build a Better Tomorrow for Our Profession"}),d.jsx("p",{children:"Whether you are a student, early-career professional, experienced expert, or industry partner, there is a place for you in the Gaussians Forward community."})]}),d.jsxs("button",{className:"btn-primary forward-cta-btn",onClick:()=>e("Gaussians Forward Community"),children:["Get Involved ",d.jsx(Cr,{size:16})]})]})]}),d.jsx("style",{children:`
        .forward-section {
          padding: 6.5rem 0;
          background: linear-gradient(135deg, #0A051C 0%, #150A36 40%, #1F0D4F 75%, #0D0424 100%);
          position: relative;
          overflow: hidden;
        }

        .forward-bg-mesh {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px),
            radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 32px 32px;
          background-position: 0 0, 16px 16px;
          opacity: 0.6;
          pointer-events: none;
        }

        .forward-glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          top: -100px;
          left: -100px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(0, 0, 0, 0) 70%);
        }

        .orb-2 {
          width: 550px;
          height: 550px;
          bottom: -150px;
          right: -100px;
          background: radial-gradient(circle, rgba(90, 56, 253, 0.28) 0%, rgba(0, 0, 0, 0) 70%);
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .dark-header .dark-title {
          color: #FFFFFF;
          font-size: 2.6rem;
        }

        .dark-header .dark-desc {
          color: rgba(226, 232, 240, 0.82);
        }

        .forward-pill {
          background: rgba(124, 58, 237, 0.2) !important;
          border: 1px solid rgba(167, 139, 250, 0.4) !important;
          color: #A78BFA !important;
        }

        .forward-divider {
          background: linear-gradient(90deg, #A78BFA, #6366F1);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .dark-glass-card {
          padding: 2.2rem 1.6rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(167, 139, 250, 0.18);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          transition: all 0.35s ease;
        }

        .dark-glass-card:hover {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(167, 139, 250, 0.5);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(124, 58, 237, 0.3);
        }

        .pillar-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .p-num {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: #C4B5FD;
          letter-spacing: 0.05em;
        }

        .p-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.3) 0%, rgba(99, 102, 241, 0.2) 100%);
          border: 1px solid rgba(167, 139, 250, 0.3);
          color: #DDD6FE;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .p-title {
          font-size: 1.5rem;
          color: #FFFFFF;
          margin-bottom: 0.2rem;
        }

        .p-sub {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.8rem;
          color: #A78BFA;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .p-desc {
          font-size: 0.92rem;
          color: rgba(226, 232, 240, 0.78);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .p-points {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 1.1rem;
          border-top: 1px dashed rgba(167, 139, 250, 0.25);
        }

        .pt-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.84rem;
          font-weight: 600;
          color: #F1F5F9;
        }

        .pt-icon {
          color: #A78BFA;
          flex-shrink: 0;
        }

        .dark-cta-glass {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2.75rem 3rem;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.85) 0%, rgba(79, 70, 229, 0.85) 100%);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(196, 181, 253, 0.3);
          color: #FFFFFF;
          border-radius: var(--radius-lg);
          gap: 2rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35), 0 0 35px rgba(124, 58, 237, 0.3);
        }

        .f-cta-content h3 {
          color: #FFFFFF;
          font-size: 1.85rem;
          margin-bottom: 0.5rem;
        }

        .f-cta-content p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          max-width: 650px;
        }

        .forward-cta-btn {
          background: #FFFFFF !important;
          color: #4F46E5 !important;
          flex-shrink: 0;
          font-weight: 700;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .forward-cta-btn:hover {
          background: #F3E8FF !important;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .dark-cta-glass {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function M5({isOpen:e,onClose:t,defaultTopic:n}){const[r,i]=$.useState({name:"",email:"",phone:"",company:"",topic:n||"General Inquiry",message:""}),[o,a]=$.useState(!1);if($.useEffect(()=>{n&&i(u=>({...u,topic:n}))},[n]),!e)return null;const l=u=>{u.preventDefault(),a(!0)},s=()=>{a(!1),t()};return d.jsxs("div",{className:"modal-overlay",children:[d.jsxs("div",{className:"modal-container glass-card",children:[d.jsx("button",{className:"close-btn",onClick:s,"aria-label":"Close modal",children:d.jsx(Cm,{size:20})}),o?d.jsxs("div",{className:"success-state",children:[d.jsx("div",{className:"success-icon-box",children:d.jsx(sl,{size:54})}),d.jsx("h2",{children:"Consultation Requested!"}),d.jsxs("p",{children:["Thank you, ",d.jsx("strong",{children:r.name}),". A Gaussians security and compliance specialist will contact you shortly regarding ",d.jsx("strong",{children:r.topic}),"."]}),d.jsx("button",{className:"btn-primary",onClick:s,children:"Back to Website"})]}):d.jsxs("div",{className:"modal-content-grid",children:[d.jsxs("div",{className:"modal-info",children:[d.jsxs("div",{className:"badge-pill mb-2",children:[d.jsx(ul,{size:14})," ",d.jsx("span",{children:"Talk to an Expert"})]}),d.jsx("h2",{children:"Ready to Operationalize Security & Compliance?"}),d.jsx("p",{className:"modal-intro",children:"Schedule a consultation with our experienced practitioners. We discuss practical timelines, scoping, and custom delivery options."}),d.jsxs("div",{className:"direct-contacts",children:[d.jsxs("div",{className:"c-item",children:[d.jsx(km,{size:18,className:"c-icon"}),d.jsxs("div",{children:[d.jsx("span",{className:"c-label",children:"Email Us"}),d.jsx("span",{className:"c-val",children:"info@gaussians.com"})]})]}),d.jsxs("div",{className:"c-item",children:[d.jsx(Em,{size:18,className:"c-icon"}),d.jsxs("div",{children:[d.jsx("span",{className:"c-label",children:"Call Us"}),d.jsx("span",{className:"c-val",children:"+91 9711283991"})]})]}),d.jsxs("div",{className:"c-item",children:[d.jsx(Sm,{size:18,className:"c-icon"}),d.jsxs("div",{children:[d.jsx("span",{className:"c-label",children:"Global Headquarters"}),d.jsx("span",{className:"c-val",children:"Unit 314, Suncity Tower, Sector 65, Gurgaon, Haryana, 122002 India"})]})]})]})]}),d.jsxs("form",{onSubmit:l,className:"modal-form",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Full Name *"}),d.jsx("input",{type:"text",required:!0,placeholder:"e.g. Sarah Jenkins",value:r.name,onChange:u=>i({...r,name:u.target.value})})]}),d.jsxs("div",{className:"form-row",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Work Email *"}),d.jsx("input",{type:"email",required:!0,placeholder:"sarah@company.com",value:r.email,onChange:u=>i({...r,email:u.target.value})})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Phone Number"}),d.jsx("input",{type:"tel",placeholder:"+1 (555) 000-0000",value:r.phone,onChange:u=>i({...r,phone:u.target.value})})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Area of Interest / Service"}),d.jsxs("select",{value:r.topic,onChange:u=>i({...r,topic:u.target.value}),children:[d.jsx("option",{value:"General Inquiry",children:"General Inquiry"}),d.jsx("option",{value:"SOC 1 / SOC 2 / SOC 3",children:"SOC 1 / SOC 2 / SOC 3 Audit"}),d.jsx("option",{value:"ISO 27001 / ISO 42001",children:"ISO 27001 / ISO 42001 (AI Security)"}),d.jsx("option",{value:"NIST AI RMF / CSF 2.0",children:"NIST AI RMF / CSF 2.0"}),d.jsx("option",{value:"HITRUST / HIPAA",children:"HITRUST / HIPAA Compliance"}),d.jsx("option",{value:"Third Party Risk & Vendor Audit",children:"Third Party Risk & Vendor Audit"}),d.jsx("option",{value:"Managed Security & Compliance",children:"Managed Security & Compliance"}),d.jsx("option",{value:"Gaussians Forward Community",children:"Gaussians Forward Community"})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Project Details / Timelines"}),d.jsx("textarea",{rows:"3",placeholder:"Briefly describe your compliance goals, target timeline, or framework requirements...",value:r.message,onChange:u=>i({...r,message:u.target.value})})]}),d.jsxs("button",{type:"submit",className:"btn-primary form-submit-btn",children:["Schedule Consultation ",d.jsx(L1,{size:16})]})]})]})]}),d.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-container {
          position: relative;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          max-width: 920px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
          padding: 2.5rem;
        }

        .close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-soft-purple);
          border: 1px solid var(--border-purple);
          color: var(--text-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .close-btn:hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        .modal-content-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
        }

        .modal-info h2 {
          font-size: 1.8rem;
          margin: 0.75rem 0 1rem 0;
        }

        .modal-intro {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .direct-contacts {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .c-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .c-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .c-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .c-val {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-dark);
          margin-bottom: 0.4rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-purple);
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-dark);
          background: var(--bg-soft-purple);
          outline: none;
          transition: var(--transition-fast);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--primary);
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(90, 56, 253, 0.12);
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 0.85rem;
          margin-top: 0.5rem;
        }

        .success-state {
          text-align: center;
          padding: 3rem 1.5rem;
        }

        .success-icon-box {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .success-state h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .success-state p {
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .modal-content-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function P5({onOpenContact:e}){const t=n=>{const r=document.getElementById(n);r&&r.scrollIntoView({behavior:"smooth"})};return d.jsxs("footer",{id:"connect",className:"site-footer",children:[d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"footer-top-grid",children:[d.jsxs("div",{className:"footer-brand-col",children:[d.jsx("div",{className:"footer-logo",children:d.jsx("img",{src:"./assets/logo.jpeg",alt:"Gaussians Logo White",className:"f-logo-img"})}),d.jsx("p",{className:"footer-brand-desc",children:"Helping organizations transform security, compliance, and risk management from business challenges into strategic advantages through practical execution and long-term partnership."}),d.jsxs("div",{className:"footer-tagline-badge",children:[d.jsx($1,{size:16})," ",d.jsx("span",{children:"We do not only advise. We deliver."})]})]}),d.jsxs("div",{className:"footer-links-col",children:[d.jsx("h4",{className:"f-title",children:"Core Services"}),d.jsxs("ul",{children:[d.jsx("li",{children:d.jsx("button",{onClick:()=>t("services"),children:"Cybersecurity & Compliance"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("services"),children:"Risk & Governance"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("services"),children:"Audit & Assurance"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("services"),children:"Managed Services"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("services"),children:"Program Implementation"})})]})]}),d.jsxs("div",{className:"footer-links-col",children:[d.jsx("h4",{className:"f-title",children:"Key Frameworks"}),d.jsxs("ul",{children:[d.jsx("li",{children:d.jsx("button",{onClick:()=>t("frameworks"),children:"SOC 1, SOC 2 & SOC 3"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("frameworks"),children:"ISO 27001 & ISO 42001 (AI)"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("frameworks"),children:"NIST CSF 2.0 & NIST AI RMF"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("frameworks"),children:"HITRUST CSF & HIPAA"})}),d.jsx("li",{children:d.jsx("button",{onClick:()=>t("frameworks"),children:"PCI DSS v4.0 & GDPR"})})]})]}),d.jsxs("div",{className:"footer-contact-col",children:[d.jsx("h4",{className:"f-title",children:"Global Headquarters"}),d.jsxs("div",{className:"f-contact-item",children:[d.jsx(Sm,{size:16,className:"f-c-icon"}),d.jsx("span",{children:"Unit 314, Suncity Tower, Sector 65, Gurgaon, Haryana, 122002 India"})]}),d.jsxs("div",{className:"f-contact-item",children:[d.jsx(Em,{size:16,className:"f-c-icon"}),d.jsx("span",{children:"+91 9711283991"})]}),d.jsxs("div",{className:"f-contact-item",children:[d.jsx(km,{size:16,className:"f-c-icon"}),d.jsx("span",{children:"info@gaussians.com"})]}),d.jsxs("button",{className:"btn-primary f-btn",onClick:()=>e(),children:["Talk to an Expert ",d.jsx(S1,{size:16})]})]})]}),d.jsxs("div",{className:"footer-bottom",children:[d.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," Gaussians. All rights reserved. Building Trust. Delivering Assurance."]}),d.jsxs("div",{className:"f-bottom-links",children:[d.jsx("a",{href:"#",children:"Privacy Policy"}),d.jsx("span",{children:"•"}),d.jsx("a",{href:"#",children:"Terms of Service"}),d.jsx("span",{children:"•"}),d.jsx("button",{onClick:()=>t("forward"),children:"Gaussians Forward Initiative"})]})]})]}),d.jsx("style",{children:`
        .site-footer {
          background: #110B29;
          color: rgba(255, 255, 255, 0.8);
          padding: 5rem 0 2rem 0;
          position: relative;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 3rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .f-logo-img {
          height: 38px;
          object-fit: contain;
          margin-bottom: 1.25rem;
        }

        .footer-brand-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
        }

        .footer-tagline-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(90, 56, 253, 0.25);
          border: 1px solid rgba(124, 58, 237, 0.4);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 0.82rem;
          color: #D8D2FF;
          font-weight: 600;
        }

        .f-title {
          font-size: 1.05rem;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }

        .footer-links-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-col button {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          font-family: var(--font-body);
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 0;
          text-align: left;
        }

        .footer-links-col button:hover {
          color: #FFFFFF;
          transform: translateX(3px);
        }

        .footer-contact-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .f-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.4;
        }

        .f-c-icon {
          color: var(--primary-border);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .f-btn {
          margin-top: 0.5rem;
          width: fit-content;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .f-bottom-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .f-bottom-links a,
        .f-bottom-links button {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          text-decoration: none;
          cursor: pointer;
        }

        .f-bottom-links a:hover,
        .f-bottom-links button:hover {
          color: #FFFFFF;
        }

        @media (max-width: 968px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `})]})}function F5(){const[e,t]=$.useState(!1),[n,r]=$.useState("General Inquiry"),[i,o]=$.useState(!1),a=(s="General Inquiry")=>{r(s),t(!0)},l=()=>{const s=document.getElementById("services");s&&s.scrollIntoView({behavior:"smooth"})};return $.useEffect(()=>{const s=()=>{o(window.scrollY>600)};window.addEventListener("scroll",s);const u=new IntersectionObserver(p=>{p.forEach(h=>{h.isIntersecting&&h.target.classList.add("visible")})},{threshold:.08});return document.querySelectorAll(".fade-in-up, .scale-in, .slide-in-left").forEach(p=>u.observe(p)),()=>{u.disconnect(),window.removeEventListener("scroll",s)}},[]),d.jsxs("div",{className:"app-main",children:[d.jsx(G1,{onOpenContact:()=>a("Navbar Inquiry")}),d.jsxs("main",{children:[d.jsx(V1,{onOpenContact:()=>a("Hero Expert Consultation"),onExploreServices:l}),d.jsx(q1,{}),d.jsx(Y1,{}),d.jsx(Q1,{onOpenContact:s=>a(s)}),d.jsx(X1,{onOpenContact:s=>a(`${s} Consultation`)}),d.jsx(Z1,{onOpenContact:s=>a(`${s} Delivery Model`)}),d.jsx(K1,{onOpenContact:s=>a(s)}),d.jsx(_5,{onOpenContact:s=>a(s)}),d.jsx(j5,{onOpenContact:s=>a(s)}),d.jsx(z5,{onOpenContact:s=>a(s)})]}),d.jsx(P5,{onOpenContact:()=>a("Footer Inquiry")}),d.jsx(M5,{isOpen:e,onClose:()=>t(!1),defaultTopic:n}),i&&d.jsx("button",{className:"scroll-to-top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Scroll to top",children:d.jsx(E1,{size:20})})]})}Xl.createRoot(document.getElementById("root")).render(d.jsx(xe.StrictMode,{children:d.jsx(F5,{})}));
