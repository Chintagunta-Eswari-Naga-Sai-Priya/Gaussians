(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function sp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var up={exports:{}},Ya={},cp={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),X0=Symbol.for("react.portal"),Z0=Symbol.for("react.fragment"),K0=Symbol.for("react.strict_mode"),J0=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),ng=Symbol.for("react.forward_ref"),rg=Symbol.for("react.suspense"),ig=Symbol.for("react.memo"),og=Symbol.for("react.lazy"),ed=Symbol.iterator;function ag(e){return e===null||typeof e!="object"?null:(e=ed&&e[ed]||e["@@iterator"],typeof e=="function"?e:null)}var dp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fp=Object.assign,pp={};function Pr(e,t,n){this.props=e,this.context=t,this.refs=pp,this.updater=n||dp}Pr.prototype.isReactComponent={};Pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hp(){}hp.prototype=Pr.prototype;function bu(e,t,n){this.props=e,this.context=t,this.refs=pp,this.updater=n||dp}var Nu=bu.prototype=new hp;Nu.constructor=bu;fp(Nu,Pr.prototype);Nu.isPureReactComponent=!0;var td=Array.isArray,mp=Object.prototype.hasOwnProperty,ju={current:null},gp={key:!0,ref:!0,__self:!0,__source:!0};function vp(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)mp.call(t,r)&&!gp.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Vi,type:e,key:o,ref:a,props:i,_owner:ju.current}}function lg(e,t){return{$$typeof:Vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Eu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function sg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nd=/\/+/g;function ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sg(""+e.key):t.toString(36)}function Mo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Vi:case X0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ml(a,0):r,td(i)?(n="",e!=null&&(n=e.replace(nd,"$&/")+"/"),Mo(i,t,n,"",function(c){return c})):i!=null&&(Eu(i)&&(i=lg(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(nd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",td(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+ml(o,l);a+=Mo(o,t,n,s,i)}else if(s=ag(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+ml(o,l++),a+=Mo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function io(e,t,n){if(e==null)return e;var r=[],i=0;return Mo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ug(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Po={transition:null},cg={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Po,ReactCurrentOwner:ju};function yp(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!Eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Pr;Q.Fragment=Z0;Q.Profiler=J0;Q.PureComponent=bu;Q.StrictMode=K0;Q.Suspense=rg;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cg;Q.act=yp;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ju.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)mp.call(t,s)&&!gp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Vi,type:e.type,key:i,ref:o,props:r,_owner:a}};Q.createContext=function(e){return e={$$typeof:tg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:eg,_context:e},e.Consumer=e};Q.createElement=vp;Q.createFactory=function(e){var t=vp.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:ng,render:e}};Q.isValidElement=Eu;Q.lazy=function(e){return{$$typeof:og,_payload:{_status:-1,_result:e},_init:ug}};Q.memo=function(e,t){return{$$typeof:ig,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Po.transition;Po.transition={};try{e()}finally{Po.transition=t}};Q.unstable_act=yp;Q.useCallback=function(e,t){return We.current.useCallback(e,t)};Q.useContext=function(e){return We.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return We.current.useDeferredValue(e)};Q.useEffect=function(e,t){return We.current.useEffect(e,t)};Q.useId=function(){return We.current.useId()};Q.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return We.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};Q.useRef=function(e){return We.current.useRef(e)};Q.useState=function(e){return We.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return We.current.useTransition()};Q.version="18.3.1";cp.exports=Q;var I=cp.exports;const xe=sp(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg=I,fg=Symbol.for("react.element"),pg=Symbol.for("react.fragment"),hg=Object.prototype.hasOwnProperty,mg=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gg={key:!0,ref:!0,__self:!0,__source:!0};function xp(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)hg.call(t,r)&&!gg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:fg,type:e,key:o,ref:a,props:i,_owner:mg.current}}Ya.Fragment=pg;Ya.jsx=xp;Ya.jsxs=xp;up.exports=Ya;var u=up.exports,Xl={},wp={exports:{}},lt={},kp={exports:{}},Sp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,F){var P=_.length;_.push(F);e:for(;0<P;){var U=P-1>>>1,V=_[U];if(0<i(V,F))_[U]=F,_[P]=V,P=U;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var F=_[0],P=_.pop();if(P!==F){_[0]=P;e:for(var U=0,V=_.length,ee=V>>>1;U<ee;){var X=2*(U+1)-1,ne=_[X],ge=X+1,be=_[ge];if(0>i(ne,P))ge<V&&0>i(be,ne)?(_[U]=be,_[ge]=P,U=ge):(_[U]=ne,_[X]=P,U=X);else if(ge<V&&0>i(be,P))_[U]=be,_[ge]=P,U=ge;else break e}}return F}function i(_,F){var P=_.sortIndex-F.sortIndex;return P!==0?P:_.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],d=1,f=null,p=3,h=!1,y=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=_)r(c),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(c)}}function x(_){if(w=!1,m(_),!y)if(n(s)!==null)y=!0,E(k);else{var F=n(c);F!==null&&R(x,F.startTime-_)}}function k(_,F){y=!1,w&&(w=!1,g(z),z=-1),h=!0;var P=p;try{for(m(F),f=n(s);f!==null&&(!(f.expirationTime>F)||_&&!$());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var V=U(f.expirationTime<=F);F=e.unstable_now(),typeof V=="function"?f.callback=V:f===n(s)&&r(s),m(F)}else r(s);f=n(s)}if(f!==null)var ee=!0;else{var X=n(c);X!==null&&R(x,X.startTime-F),ee=!1}return ee}finally{f=null,p=P,h=!1}}var N=!1,C=null,z=-1,D=5,A=-1;function $(){return!(e.unstable_now()-A<D)}function Y(){if(C!==null){var _=e.unstable_now();A=_;var F=!0;try{F=C(!0,_)}finally{F?K():(N=!1,C=null)}}else N=!1}var K;if(typeof v=="function")K=function(){v(Y)};else if(typeof MessageChannel<"u"){var S=new MessageChannel,b=S.port2;S.port1.onmessage=Y,K=function(){b.postMessage(null)}}else K=function(){j(Y,0)};function E(_){C=_,N||(N=!0,K())}function R(_,F){z=j(function(){_(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,E(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var P=p;p=F;try{return _()}finally{p=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,F){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var P=p;p=_;try{return F()}finally{p=P}},e.unstable_scheduleCallback=function(_,F,P){var U=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?U+P:U):P=U,_){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=P+V,_={id:d++,callback:F,priorityLevel:_,startTime:P,expirationTime:V,sortIndex:-1},P>U?(_.sortIndex=P,t(c,_),n(s)===null&&_===n(c)&&(w?(g(z),z=-1):w=!0,R(x,P-U))):(_.sortIndex=V,t(s,_),y||h||(y=!0,E(k))),_},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(_){var F=p;return function(){var P=p;p=F;try{return _.apply(this,arguments)}finally{p=P}}}})(Sp);kp.exports=Sp;var vg=kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg=I,at=vg;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bp=new Set,xi={};function qn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(xi[e]=t,e=0;e<t.length;e++)bp.add(t[e])}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,xg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rd={},id={};function wg(e){return Zl.call(id,e)?!0:Zl.call(rd,e)?!1:xg.test(e)?id[e]=!0:(rd[e]=!0,!1)}function kg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sg(e,t,n,r){if(t===null||typeof t>"u"||kg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var _u=/[\-:]([a-z])/g;function Cu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_u,Cu);ze[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_u,Cu);ze[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_u,Cu);ze[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fu(e,t,n,r){var i=ze.hasOwnProperty(t)?ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sg(t,n,i,r)&&(n=null),r||i===null?wg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),zu=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),Np=Symbol.for("react.provider"),jp=Symbol.for("react.context"),Mu=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),es=Symbol.for("react.suspense_list"),Pu=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),Ep=Symbol.for("react.offscreen"),od=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=od&&e[od]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,gl;function qr(e){if(gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gl=t&&t[1]||""}return`
`+gl+e}var vl=!1;function yl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qr(e):""}function bg(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=yl(e.type,!1),e;case 11:return e=yl(e.type.render,!1),e;case 1:return e=yl(e.type,!0),e;default:return""}}function ts(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Zn:return"Portal";case Kl:return"Profiler";case zu:return"StrictMode";case Jl:return"Suspense";case es:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jp:return(e.displayName||"Context")+".Consumer";case Np:return(e._context.displayName||"Context")+".Provider";case Mu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pu:return t=e.displayName||null,t!==null?t:ts(e.type)||"Memo";case ln:t=e._payload,e=e._init;try{return ts(e(t))}catch{}}return null}function Ng(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ts(t);case 8:return t===zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _p(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jg(e){var t=_p(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ao(e){e._valueTracker||(e._valueTracker=jg(e))}function Cp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_p(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ns(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ad(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fp(e,t){t=t.checked,t!=null&&Fu(e,"checked",t,!1)}function rs(e,t){Fp(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?is(e,t.type,n):t.hasOwnProperty("defaultValue")&&is(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ld(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function is(e,t,n){(t!=="number"||Xo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yr=Array.isArray;function fr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function os(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Yr(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function zp(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ud(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function as(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lo,Pp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Eg=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(e){Eg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oi[t]=oi[e]})});function Tp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oi.hasOwnProperty(e)&&oi[e]?(""+t).trim():t+"px"}function Ap(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Tp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _g=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ls(e,t){if(t){if(_g[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function ss(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var us=null;function Tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cs=null,pr=null,hr=null;function cd(e){if(e=Yi(e)){if(typeof cs!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Ja(t),cs(e.stateNode,e.type,t))}}function Rp(e){pr?hr?hr.push(e):hr=[e]:pr=e}function Ip(){if(pr){var e=pr,t=hr;if(hr=pr=null,cd(e),t)for(e=0;e<t.length;e++)cd(t[e])}}function Op(e,t){return e(t)}function Lp(){}var xl=!1;function Dp(e,t,n){if(xl)return e(t,n);xl=!0;try{return Op(e,t,n)}finally{xl=!1,(pr!==null||hr!==null)&&(Lp(),Ip())}}function ki(e,t){var n=e.stateNode;if(n===null)return null;var r=Ja(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var ds=!1;if(Zt)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{ds=!1}function Cg(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ai=!1,Zo=null,Ko=!1,fs=null,Fg={onError:function(e){ai=!0,Zo=e}};function zg(e,t,n,r,i,o,a,l,s){ai=!1,Zo=null,Cg.apply(Fg,arguments)}function Mg(e,t,n,r,i,o,a,l,s){if(zg.apply(this,arguments),ai){if(ai){var c=Zo;ai=!1,Zo=null}else throw Error(M(198));Ko||(Ko=!0,fs=c)}}function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dd(e){if(Yn(e)!==e)throw Error(M(188))}function Pg(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return dd(i),e;if(o===r)return dd(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Up(e){return e=Pg(e),e!==null?Bp(e):null}function Bp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bp(e);if(t!==null)return t;e=e.sibling}return null}var Hp=at.unstable_scheduleCallback,fd=at.unstable_cancelCallback,Tg=at.unstable_shouldYield,Ag=at.unstable_requestPaint,ye=at.unstable_now,Rg=at.unstable_getCurrentPriorityLevel,Au=at.unstable_ImmediatePriority,Wp=at.unstable_UserBlockingPriority,Jo=at.unstable_NormalPriority,Ig=at.unstable_LowPriority,Vp=at.unstable_IdlePriority,Qa=null,Rt=null;function Og(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Qa,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:$g,Lg=Math.log,Dg=Math.LN2;function $g(e){return e>>>=0,e===0?32:31-(Lg(e)/Dg|0)|0}var so=64,uo=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ea(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Qr(l):(o&=a,o!==0&&(r=Qr(o)))}else a=n&~i,a!==0?r=Qr(a):o!==0&&(r=Qr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ug(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-jt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=Ug(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function ps(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gp(){var e=so;return so<<=1,!(so&4194240)&&(so=64),e}function wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function Hg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-jt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ru(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function qp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yp,Iu,Qp,Xp,Zp,hs=!1,co=[],mn=null,gn=null,vn=null,Si=new Map,bi=new Map,dn=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(t.pointerId)}}function Dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Yi(t),t!==null&&Iu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vg(e,t,n,r,i){switch(t){case"focusin":return mn=Dr(mn,e,t,n,r,i),!0;case"dragenter":return gn=Dr(gn,e,t,n,r,i),!0;case"mouseover":return vn=Dr(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Si.set(o,Dr(Si.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bi.set(o,Dr(bi.get(o)||null,e,t,n,r,i)),!0}return!1}function Kp(e){var t=Tn(e.target);if(t!==null){var n=Yn(t);if(n!==null){if(t=n.tag,t===13){if(t=$p(n),t!==null){e.blockedOn=t,Zp(e.priority,function(){Qp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function To(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ms(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);us=r,n.target.dispatchEvent(r),us=null}else return t=Yi(n),t!==null&&Iu(t),e.blockedOn=n,!1;t.shift()}return!0}function hd(e,t,n){To(e)&&n.delete(t)}function Gg(){hs=!1,mn!==null&&To(mn)&&(mn=null),gn!==null&&To(gn)&&(gn=null),vn!==null&&To(vn)&&(vn=null),Si.forEach(hd),bi.forEach(hd)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,hs||(hs=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,Gg)))}function Ni(e){function t(i){return $r(i,e)}if(0<co.length){$r(co[0],e);for(var n=1;n<co.length;n++){var r=co[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&$r(mn,e),gn!==null&&$r(gn,e),vn!==null&&$r(vn,e),Si.forEach(t),bi.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)Kp(n),n.blockedOn===null&&dn.shift()}var mr=rn.ReactCurrentBatchConfig,ta=!0;function qg(e,t,n,r){var i=te,o=mr.transition;mr.transition=null;try{te=1,Ou(e,t,n,r)}finally{te=i,mr.transition=o}}function Yg(e,t,n,r){var i=te,o=mr.transition;mr.transition=null;try{te=4,Ou(e,t,n,r)}finally{te=i,mr.transition=o}}function Ou(e,t,n,r){if(ta){var i=ms(e,t,n,r);if(i===null)zl(e,t,r,na,n),pd(e,r);else if(Vg(i,e,t,n,r))r.stopPropagation();else if(pd(e,r),t&4&&-1<Wg.indexOf(e)){for(;i!==null;){var o=Yi(i);if(o!==null&&Yp(o),o=ms(e,t,n,r),o===null&&zl(e,t,r,na,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else zl(e,t,r,null,n)}}var na=null;function ms(e,t,n,r){if(na=null,e=Tu(r),e=Tn(e),e!==null)if(t=Yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return na=e,null}function Jp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rg()){case Au:return 1;case Wp:return 4;case Jo:case Ig:return 16;case Vp:return 536870912;default:return 16}default:return 16}}var pn=null,Lu=null,Ao=null;function eh(){if(Ao)return Ao;var e,t=Lu,n=t.length,r,i="value"in pn?pn.value:pn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ao=i.slice(e,1<r?1-r:void 0)}function Ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fo(){return!0}function md(){return!1}function st(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fo:md,this.isPropagationStopped=md,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Du=st(Tr),qi=fe({},Tr,{view:0,detail:0}),Qg=st(qi),kl,Sl,Ur,Xa=fe({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(kl=e.screenX-Ur.screenX,Sl=e.screenY-Ur.screenY):Sl=kl=0,Ur=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),gd=st(Xa),Xg=fe({},Xa,{dataTransfer:0}),Zg=st(Xg),Kg=fe({},qi,{relatedTarget:0}),bl=st(Kg),Jg=fe({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),ev=st(Jg),tv=fe({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nv=st(tv),rv=fe({},Tr,{data:0}),vd=st(rv),iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=av[e])?!!t[e]:!1}function $u(){return lv}var sv=fe({},qi,{key:function(e){if(e.key){var t=iv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ov[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uv=st(sv),cv=fe({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=st(cv),dv=fe({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),fv=st(dv),pv=fe({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hv=st(pv),mv=fe({},Xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gv=st(mv),vv=[9,13,27,32],Uu=Zt&&"CompositionEvent"in window,li=null;Zt&&"documentMode"in document&&(li=document.documentMode);var yv=Zt&&"TextEvent"in window&&!li,th=Zt&&(!Uu||li&&8<li&&11>=li),xd=" ",wd=!1;function nh(e,t){switch(e){case"keyup":return vv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function xv(e,t){switch(e){case"compositionend":return rh(t);case"keypress":return t.which!==32?null:(wd=!0,xd);case"textInput":return e=t.data,e===xd&&wd?null:e;default:return null}}function wv(e,t){if(Jn)return e==="compositionend"||!Uu&&nh(e,t)?(e=eh(),Ao=Lu=pn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return th&&t.locale!=="ko"?null:t.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kv[e.type]:t==="textarea"}function ih(e,t,n,r){Rp(r),t=ra(t,"onChange"),0<t.length&&(n=new Du("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var si=null,ji=null;function Sv(e){mh(e,0)}function Za(e){var t=nr(e);if(Cp(t))return e}function bv(e,t){if(e==="change")return t}var oh=!1;if(Zt){var Nl;if(Zt){var jl="oninput"in document;if(!jl){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),jl=typeof Sd.oninput=="function"}Nl=jl}else Nl=!1;oh=Nl&&(!document.documentMode||9<document.documentMode)}function bd(){si&&(si.detachEvent("onpropertychange",ah),ji=si=null)}function ah(e){if(e.propertyName==="value"&&Za(ji)){var t=[];ih(t,ji,e,Tu(e)),Dp(Sv,t)}}function Nv(e,t,n){e==="focusin"?(bd(),si=t,ji=n,si.attachEvent("onpropertychange",ah)):e==="focusout"&&bd()}function jv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Za(ji)}function Ev(e,t){if(e==="click")return Za(t)}function _v(e,t){if(e==="input"||e==="change")return Za(t)}function Cv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:Cv;function Ei(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zl.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function Nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jd(e,t){var n=Nd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nd(n)}}function lh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sh(){for(var e=window,t=Xo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xo(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fv(e){var t=sh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lh(n.ownerDocument.documentElement,n)){if(r!==null&&Bu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=jd(n,o);var a=jd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zv=Zt&&"documentMode"in document&&11>=document.documentMode,er=null,gs=null,ui=null,vs=!1;function Ed(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vs||er==null||er!==Xo(r)||(r=er,"selectionStart"in r&&Bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&Ei(ui,r)||(ui=r,r=ra(gs,"onSelect"),0<r.length&&(t=new Du("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},El={},uh={};Zt&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Ka(e){if(El[e])return El[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uh)return El[e]=t[n];return e}var ch=Ka("animationend"),dh=Ka("animationiteration"),fh=Ka("animationstart"),ph=Ka("transitionend"),hh=new Map,_d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){hh.set(e,t),qn(t,[e])}for(var _l=0;_l<_d.length;_l++){var Cl=_d[_l],Mv=Cl.toLowerCase(),Pv=Cl[0].toUpperCase()+Cl.slice(1);jn(Mv,"on"+Pv)}jn(ch,"onAnimationEnd");jn(dh,"onAnimationIteration");jn(fh,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(ph,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function Cd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mg(r,t,void 0,e),e.currentTarget=null}function mh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Cd(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Cd(i,l,c),o=s}}}if(Ko)throw e=fs,Ko=!1,fs=null,e}function oe(e,t){var n=t[Ss];n===void 0&&(n=t[Ss]=new Set);var r=e+"__bubble";n.has(r)||(gh(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),gh(n,e,r,t)}var ho="_reactListening"+Math.random().toString(36).slice(2);function _i(e){if(!e[ho]){e[ho]=!0,bp.forEach(function(n){n!=="selectionchange"&&(Tv.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ho]||(t[ho]=!0,Fl("selectionchange",!1,t))}}function gh(e,t,n,r){switch(Jp(t)){case 1:var i=qg;break;case 4:i=Yg;break;default:i=Ou}n=i.bind(null,t,n,e),i=void 0,!ds||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function zl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Tn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Dp(function(){var c=o,d=Tu(n),f=[];e:{var p=hh.get(e);if(p!==void 0){var h=Du,y=e;switch(e){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":h=uv;break;case"focusin":y="focus",h=bl;break;case"focusout":y="blur",h=bl;break;case"beforeblur":case"afterblur":h=bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=fv;break;case ch:case dh:case fh:h=ev;break;case ph:h=hv;break;case"scroll":h=Qg;break;case"wheel":h=gv;break;case"copy":case"cut":case"paste":h=nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=yd}var w=(t&4)!==0,j=!w&&e==="scroll",g=w?p!==null?p+"Capture":null:p;w=[];for(var v=c,m;v!==null;){m=v;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,g!==null&&(x=ki(v,g),x!=null&&w.push(Ci(v,x,m)))),j)break;v=v.return}0<w.length&&(p=new h(p,y,null,n,d),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==us&&(y=n.relatedTarget||n.fromElement)&&(Tn(y)||y[Kt]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=c,y=y?Tn(y):null,y!==null&&(j=Yn(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=c),h!==y)){if(w=gd,x="onMouseLeave",g="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(w=yd,x="onPointerLeave",g="onPointerEnter",v="pointer"),j=h==null?p:nr(h),m=y==null?p:nr(y),p=new w(x,v+"leave",h,n,d),p.target=j,p.relatedTarget=m,x=null,Tn(d)===c&&(w=new w(g,v+"enter",y,n,d),w.target=m,w.relatedTarget=j,x=w),j=x,h&&y)t:{for(w=h,g=y,v=0,m=w;m;m=Qn(m))v++;for(m=0,x=g;x;x=Qn(x))m++;for(;0<v-m;)w=Qn(w),v--;for(;0<m-v;)g=Qn(g),m--;for(;v--;){if(w===g||g!==null&&w===g.alternate)break t;w=Qn(w),g=Qn(g)}w=null}else w=null;h!==null&&Fd(f,p,h,w,!1),y!==null&&j!==null&&Fd(f,j,y,w,!0)}}e:{if(p=c?nr(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var k=bv;else if(kd(p))if(oh)k=_v;else{k=jv;var N=Nv}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=Ev);if(k&&(k=k(e,c))){ih(f,k,n,d);break e}N&&N(e,p,c),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&is(p,"number",p.value)}switch(N=c?nr(c):window,e){case"focusin":(kd(N)||N.contentEditable==="true")&&(er=N,gs=c,ui=null);break;case"focusout":ui=gs=er=null;break;case"mousedown":vs=!0;break;case"contextmenu":case"mouseup":case"dragend":vs=!1,Ed(f,n,d);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Ed(f,n,d)}var C;if(Uu)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Jn?nh(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(th&&n.locale!=="ko"&&(Jn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Jn&&(C=eh()):(pn=d,Lu="value"in pn?pn.value:pn.textContent,Jn=!0)),N=ra(c,z),0<N.length&&(z=new vd(z,e,null,n,d),f.push({event:z,listeners:N}),C?z.data=C:(C=rh(n),C!==null&&(z.data=C)))),(C=yv?xv(e,n):wv(e,n))&&(c=ra(c,"onBeforeInput"),0<c.length&&(d=new vd("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=C))}mh(f,t)})}function Ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ra(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ki(e,n),o!=null&&r.unshift(Ci(e,o,i)),o=ki(e,t),o!=null&&r.push(Ci(e,o,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=ki(n,o),s!=null&&a.unshift(Ci(n,s,l))):i||(s=ki(n,o),s!=null&&a.push(Ci(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Av=/\r\n?/g,Rv=/\u0000|\uFFFD/g;function zd(e){return(typeof e=="string"?e:""+e).replace(Av,`
`).replace(Rv,"")}function mo(e,t,n){if(t=zd(t),zd(e)!==t&&n)throw Error(M(425))}function ia(){}var ys=null,xs=null;function ws(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ks=typeof setTimeout=="function"?setTimeout:void 0,Iv=typeof clearTimeout=="function"?clearTimeout:void 0,Md=typeof Promise=="function"?Promise:void 0,Ov=typeof queueMicrotask=="function"?queueMicrotask:typeof Md<"u"?function(e){return Md.resolve(null).then(e).catch(Lv)}:ks;function Lv(e){setTimeout(function(){throw e})}function Ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ni(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ni(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Ar,Fi="__reactProps$"+Ar,Kt="__reactContainer$"+Ar,Ss="__reactEvents$"+Ar,Dv="__reactListeners$"+Ar,$v="__reactHandles$"+Ar;function Tn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pd(e);e!==null;){if(n=e[Mt])return n;e=Pd(e)}return t}e=n,n=e.parentNode}return null}function Yi(e){return e=e[Mt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ja(e){return e[Fi]||null}var bs=[],rr=-1;function En(e){return{current:e}}function ae(e){0>rr||(e.current=bs[rr],bs[rr]=null,rr--)}function ie(e,t){rr++,bs[rr]=e.current,e.current=t}var Nn={},Re=En(Nn),Qe=En(!1),Ln=Nn;function kr(e,t){var n=e.type.contextTypes;if(!n)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function oa(){ae(Qe),ae(Re)}function Td(e,t,n){if(Re.current!==Nn)throw Error(M(168));ie(Re,t),ie(Qe,n)}function vh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Ng(e)||"Unknown",i));return fe({},n,r)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Ln=Re.current,ie(Re,e),ie(Qe,Qe.current),!0}function Ad(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=vh(e,t,Ln),r.__reactInternalMemoizedMergedChildContext=e,ae(Qe),ae(Re),ie(Re,e)):ae(Qe),ie(Qe,n)}var Ht=null,el=!1,Pl=!1;function yh(e){Ht===null?Ht=[e]:Ht.push(e)}function Uv(e){el=!0,yh(e)}function _n(){if(!Pl&&Ht!==null){Pl=!0;var e=0,t=te;try{var n=Ht;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,el=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(e+1)),Hp(Au,_n),i}finally{te=t,Pl=!1}}return null}var ir=[],or=0,la=null,sa=0,ct=[],dt=0,Dn=null,qt=1,Yt="";function zn(e,t){ir[or++]=sa,ir[or++]=la,la=e,sa=t}function xh(e,t,n){ct[dt++]=qt,ct[dt++]=Yt,ct[dt++]=Dn,Dn=e;var r=qt;e=Yt;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var o=32-jt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,qt=1<<32-jt(t)+i|n<<i|r,Yt=o+e}else qt=1<<o|n<<i|r,Yt=e}function Hu(e){e.return!==null&&(zn(e,1),xh(e,1,0))}function Wu(e){for(;e===la;)la=ir[--or],ir[or]=null,sa=ir[--or],ir[or]=null;for(;e===Dn;)Dn=ct[--dt],ct[dt]=null,Yt=ct[--dt],ct[dt]=null,qt=ct[--dt],ct[dt]=null}var ot=null,rt=null,le=!1,St=null;function wh(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,rt=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dn!==null?{id:qt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,rt=null,!0):!1;default:return!1}}function Ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function js(e){if(le){var t=rt;if(t){var n=t;if(!Rd(e,t)){if(Ns(e))throw Error(M(418));t=yn(n.nextSibling);var r=ot;t&&Rd(e,t)?wh(r,n):(e.flags=e.flags&-4097|2,le=!1,ot=e)}}else{if(Ns(e))throw Error(M(418));e.flags=e.flags&-4097|2,le=!1,ot=e}}}function Id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function go(e){if(e!==ot)return!1;if(!le)return Id(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ws(e.type,e.memoizedProps)),t&&(t=rt)){if(Ns(e))throw kh(),Error(M(418));for(;t;)wh(e,t),t=yn(t.nextSibling)}if(Id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=ot?yn(e.stateNode.nextSibling):null;return!0}function kh(){for(var e=rt;e;)e=yn(e.nextSibling)}function Sr(){rt=ot=null,le=!1}function Vu(e){St===null?St=[e]:St.push(e)}var Bv=rn.ReactCurrentBatchConfig;function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Od(e){var t=e._init;return t(e._payload)}function Sh(e){function t(g,v){if(e){var m=g.deletions;m===null?(g.deletions=[v],g.flags|=16):m.push(v)}}function n(g,v){if(!e)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function i(g,v){return g=Sn(g,v),g.index=0,g.sibling=null,g}function o(g,v,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<v?(g.flags|=2,v):m):(g.flags|=2,v)):(g.flags|=1048576,v)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,v,m,x){return v===null||v.tag!==6?(v=Dl(m,g.mode,x),v.return=g,v):(v=i(v,m),v.return=g,v)}function s(g,v,m,x){var k=m.type;return k===Kn?d(g,v,m.props.children,x,m.key):v!==null&&(v.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ln&&Od(k)===v.type)?(x=i(v,m.props),x.ref=Br(g,v,m),x.return=g,x):(x=Bo(m.type,m.key,m.props,null,g.mode,x),x.ref=Br(g,v,m),x.return=g,x)}function c(g,v,m,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==m.containerInfo||v.stateNode.implementation!==m.implementation?(v=$l(m,g.mode,x),v.return=g,v):(v=i(v,m.children||[]),v.return=g,v)}function d(g,v,m,x,k){return v===null||v.tag!==7?(v=On(m,g.mode,x,k),v.return=g,v):(v=i(v,m),v.return=g,v)}function f(g,v,m){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Dl(""+v,g.mode,m),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oo:return m=Bo(v.type,v.key,v.props,null,g.mode,m),m.ref=Br(g,null,v),m.return=g,m;case Zn:return v=$l(v,g.mode,m),v.return=g,v;case ln:var x=v._init;return f(g,x(v._payload),m)}if(Yr(v)||Or(v))return v=On(v,g.mode,m,null),v.return=g,v;vo(g,v)}return null}function p(g,v,m,x){var k=v!==null?v.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:l(g,v,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oo:return m.key===k?s(g,v,m,x):null;case Zn:return m.key===k?c(g,v,m,x):null;case ln:return k=m._init,p(g,v,k(m._payload),x)}if(Yr(m)||Or(m))return k!==null?null:d(g,v,m,x,null);vo(g,m)}return null}function h(g,v,m,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(m)||null,l(v,g,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case oo:return g=g.get(x.key===null?m:x.key)||null,s(v,g,x,k);case Zn:return g=g.get(x.key===null?m:x.key)||null,c(v,g,x,k);case ln:var N=x._init;return h(g,v,m,N(x._payload),k)}if(Yr(x)||Or(x))return g=g.get(m)||null,d(v,g,x,k,null);vo(v,x)}return null}function y(g,v,m,x){for(var k=null,N=null,C=v,z=v=0,D=null;C!==null&&z<m.length;z++){C.index>z?(D=C,C=null):D=C.sibling;var A=p(g,C,m[z],x);if(A===null){C===null&&(C=D);break}e&&C&&A.alternate===null&&t(g,C),v=o(A,v,z),N===null?k=A:N.sibling=A,N=A,C=D}if(z===m.length)return n(g,C),le&&zn(g,z),k;if(C===null){for(;z<m.length;z++)C=f(g,m[z],x),C!==null&&(v=o(C,v,z),N===null?k=C:N.sibling=C,N=C);return le&&zn(g,z),k}for(C=r(g,C);z<m.length;z++)D=h(C,g,z,m[z],x),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?z:D.key),v=o(D,v,z),N===null?k=D:N.sibling=D,N=D);return e&&C.forEach(function($){return t(g,$)}),le&&zn(g,z),k}function w(g,v,m,x){var k=Or(m);if(typeof k!="function")throw Error(M(150));if(m=k.call(m),m==null)throw Error(M(151));for(var N=k=null,C=v,z=v=0,D=null,A=m.next();C!==null&&!A.done;z++,A=m.next()){C.index>z?(D=C,C=null):D=C.sibling;var $=p(g,C,A.value,x);if($===null){C===null&&(C=D);break}e&&C&&$.alternate===null&&t(g,C),v=o($,v,z),N===null?k=$:N.sibling=$,N=$,C=D}if(A.done)return n(g,C),le&&zn(g,z),k;if(C===null){for(;!A.done;z++,A=m.next())A=f(g,A.value,x),A!==null&&(v=o(A,v,z),N===null?k=A:N.sibling=A,N=A);return le&&zn(g,z),k}for(C=r(g,C);!A.done;z++,A=m.next())A=h(C,g,z,A.value,x),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?z:A.key),v=o(A,v,z),N===null?k=A:N.sibling=A,N=A);return e&&C.forEach(function(Y){return t(g,Y)}),le&&zn(g,z),k}function j(g,v,m,x){if(typeof m=="object"&&m!==null&&m.type===Kn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case oo:e:{for(var k=m.key,N=v;N!==null;){if(N.key===k){if(k=m.type,k===Kn){if(N.tag===7){n(g,N.sibling),v=i(N,m.props.children),v.return=g,g=v;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ln&&Od(k)===N.type){n(g,N.sibling),v=i(N,m.props),v.ref=Br(g,N,m),v.return=g,g=v;break e}n(g,N);break}else t(g,N);N=N.sibling}m.type===Kn?(v=On(m.props.children,g.mode,x,m.key),v.return=g,g=v):(x=Bo(m.type,m.key,m.props,null,g.mode,x),x.ref=Br(g,v,m),x.return=g,g=x)}return a(g);case Zn:e:{for(N=m.key;v!==null;){if(v.key===N)if(v.tag===4&&v.stateNode.containerInfo===m.containerInfo&&v.stateNode.implementation===m.implementation){n(g,v.sibling),v=i(v,m.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else t(g,v);v=v.sibling}v=$l(m,g.mode,x),v.return=g,g=v}return a(g);case ln:return N=m._init,j(g,v,N(m._payload),x)}if(Yr(m))return y(g,v,m,x);if(Or(m))return w(g,v,m,x);vo(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,v!==null&&v.tag===6?(n(g,v.sibling),v=i(v,m),v.return=g,g=v):(n(g,v),v=Dl(m,g.mode,x),v.return=g,g=v),a(g)):n(g,v)}return j}var br=Sh(!0),bh=Sh(!1),ua=En(null),ca=null,ar=null,Gu=null;function qu(){Gu=ar=ca=null}function Yu(e){var t=ua.current;ae(ua),e._currentValue=t}function Es(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){ca=e,Gu=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ye=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Gu!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(ca===null)throw Error(M(308));ar=e,ca.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var An=null;function Qu(e){An===null?An=[e]:An.push(e)}function Nh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Qu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Jt(e,r)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Jt(e,n)}return i=r.interleaved,i===null?(t.next=t,Qu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Jt(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}function Ld(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function da(e,t,n,r){var i=e.updateQueue;sn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;a=0,d=c=s=null,l=o;do{var p=l.lane,h=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(p=t,h=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(h,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(h,f,p):y,p==null)break e;f=fe({},f,p);break e;case 2:sn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else h={eventTime:h,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=h,s=f):d=d.next=h,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(s=f),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Un|=a,e.lanes=a,e.memoizedState=f}}function Dd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Qi={},It=En(Qi),zi=En(Qi),Mi=En(Qi);function Rn(e){if(e===Qi)throw Error(M(174));return e}function Zu(e,t){switch(ie(Mi,t),ie(zi,e),ie(It,Qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:as(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=as(t,e)}ae(It),ie(It,t)}function Nr(){ae(It),ae(zi),ae(Mi)}function Eh(e){Rn(Mi.current);var t=Rn(It.current),n=as(t,e.type);t!==n&&(ie(zi,e),ie(It,n))}function Ku(e){zi.current===e&&(ae(It),ae(zi))}var ue=En(0);function fa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Tl=[];function Ju(){for(var e=0;e<Tl.length;e++)Tl[e]._workInProgressVersionPrimary=null;Tl.length=0}var Oo=rn.ReactCurrentDispatcher,Al=rn.ReactCurrentBatchConfig,$n=0,de=null,ke=null,Ne=null,pa=!1,ci=!1,Pi=0,Hv=0;function Me(){throw Error(M(321))}function ec(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function tc(e,t,n,r,i,o){if($n=o,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?qv:Yv,e=n(r,i),ci){o=0;do{if(ci=!1,Pi=0,25<=o)throw Error(M(301));o+=1,Ne=ke=null,t.updateQueue=null,Oo.current=Qv,e=n(r,i)}while(ci)}if(Oo.current=ha,t=ke!==null&&ke.next!==null,$n=0,Ne=ke=de=null,pa=!1,t)throw Error(M(300));return e}function nc(){var e=Pi!==0;return Pi=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?de.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function vt(){if(ke===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ne===null?de.memoizedState:Ne.next;if(t!==null)Ne=t,ke=e;else{if(e===null)throw Error(M(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ne===null?de.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Ti(e,t){return typeof t=="function"?t(e):t}function Rl(e){var t=vt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var d=c.lane;if(($n&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,de.lanes|=d,Un|=d}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,_t(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,de.lanes|=o,Un|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Il(e){var t=vt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);_t(o,t.memoizedState)||(Ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function _h(){}function Ch(e,t){var n=de,r=vt(),i=t(),o=!_t(r.memoizedState,i);if(o&&(r.memoizedState=i,Ye=!0),r=r.queue,rc(Mh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Ai(9,zh.bind(null,n,r,i,t),void 0,null),je===null)throw Error(M(349));$n&30||Fh(n,t,i)}return i}function Fh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zh(e,t,n,r){t.value=n,t.getSnapshot=r,Ph(t)&&Th(e)}function Mh(e,t,n){return n(function(){Ph(t)&&Th(e)})}function Ph(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function Th(e){var t=Jt(e,1);t!==null&&Et(t,e,1,-1)}function $d(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:e},t.queue=e,e=e.dispatch=Gv.bind(null,de,e),[t.memoizedState,e]}function Ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ah(){return vt().memoizedState}function Lo(e,t,n,r){var i=zt();de.flags|=e,i.memoizedState=Ai(1|t,n,void 0,r===void 0?null:r)}function tl(e,t,n,r){var i=vt();r=r===void 0?null:r;var o=void 0;if(ke!==null){var a=ke.memoizedState;if(o=a.destroy,r!==null&&ec(r,a.deps)){i.memoizedState=Ai(t,n,o,r);return}}de.flags|=e,i.memoizedState=Ai(1|t,n,o,r)}function Ud(e,t){return Lo(8390656,8,e,t)}function rc(e,t){return tl(2048,8,e,t)}function Rh(e,t){return tl(4,2,e,t)}function Ih(e,t){return tl(4,4,e,t)}function Oh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lh(e,t,n){return n=n!=null?n.concat([e]):null,tl(4,4,Oh.bind(null,t,e),n)}function ic(){}function Dh(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ec(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $h(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ec(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uh(e,t,n){return $n&21?(_t(n,t)||(n=Gp(),de.lanes|=n,Un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n)}function Wv(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{te=n,Al.transition=r}}function Bh(){return vt().memoizedState}function Vv(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hh(e))Wh(t,n);else if(n=Nh(e,t,n,r),n!==null){var i=$e();Et(n,e,r,i),Vh(n,t,r)}}function Gv(e,t,n){var r=kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hh(e))Wh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,_t(l,a)){var s=t.interleaved;s===null?(i.next=i,Qu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Nh(e,t,i,r),n!==null&&(i=$e(),Et(n,e,r,i),Vh(n,t,r))}}function Hh(e){var t=e.alternate;return e===de||t!==null&&t===de}function Wh(e,t){ci=pa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}var ha={readContext:gt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},qv={readContext:gt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Ud,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4194308,4,Oh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vv.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:$d,useDebugValue:ic,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=$d(!1),t=e[0];return e=Wv.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=zt();if(le){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),je===null)throw Error(M(349));$n&30||Fh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ud(Mh.bind(null,r,o,e),[e]),r.flags|=2048,Ai(9,zh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=zt(),t=je.identifierPrefix;if(le){var n=Yt,r=qt;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yv={readContext:gt,useCallback:Dh,useContext:gt,useEffect:rc,useImperativeHandle:Lh,useInsertionEffect:Rh,useLayoutEffect:Ih,useMemo:$h,useReducer:Rl,useRef:Ah,useState:function(){return Rl(Ti)},useDebugValue:ic,useDeferredValue:function(e){var t=vt();return Uh(t,ke.memoizedState,e)},useTransition:function(){var e=Rl(Ti)[0],t=vt().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:Ch,useId:Bh,unstable_isNewReconciler:!1},Qv={readContext:gt,useCallback:Dh,useContext:gt,useEffect:rc,useImperativeHandle:Lh,useInsertionEffect:Rh,useLayoutEffect:Ih,useMemo:$h,useReducer:Il,useRef:Ah,useState:function(){return Il(Ti)},useDebugValue:ic,useDeferredValue:function(e){var t=vt();return ke===null?t.memoizedState=e:Uh(t,ke.memoizedState,e)},useTransition:function(){var e=Il(Ti)[0],t=vt().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:Ch,useId:Bh,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _s(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nl={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),i=kn(e),o=Xt(r,i);o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(Et(t,e,i,r),Io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),i=kn(e),o=Xt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(Et(t,e,i,r),Io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=kn(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(Et(t,e,r,n),Io(t,e,r))}};function Bd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,r)||!Ei(i,o):!0}function Gh(e,t,n){var r=!1,i=Nn,o=t.contextType;return typeof o=="object"&&o!==null?o=gt(o):(i=Xe(t)?Ln:Re.current,r=t.contextTypes,o=(r=r!=null)?kr(e,i):Nn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nl.enqueueReplaceState(t,t.state,null)}function Cs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Xu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gt(o):(o=Xe(t)?Ln:Re.current,i.context=kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_s(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&nl.enqueueReplaceState(i,i.state,null),da(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t){try{var n="",r=t;do n+=bg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xv=typeof WeakMap=="function"?WeakMap:Map;function qh(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ga||(ga=!0,Ds=r),Fs(e,t)},n}function Yh(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fs(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=c1.bind(null,e,t,n),t.then(e,e))}function Vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var Zv=rn.ReactCurrentOwner,Ye=!1;function Ie(e,t,n,r){t.child=e===null?bh(t,null,n,r):br(t,e.child,n,r)}function qd(e,t,n,r,i){n=n.render;var o=t.ref;return gr(t,i),r=tc(e,t,n,r,o,i),n=nc(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(le&&n&&Hu(t),t.flags|=1,Ie(e,t,r,i),t.child)}function Yd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!fc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Qh(e,t,o,r,i)):(e=Bo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(a,r)&&e.ref===t.ref)return en(e,t,i)}return t.flags|=1,e=Sn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Qh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ei(o,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,en(e,t,i)}return zs(e,t,n,r,i)}function Xh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(sr,et),et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(sr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ie(sr,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ie(sr,et),et|=r;return Ie(e,t,i,n),t.child}function Zh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zs(e,t,n,r,i){var o=Xe(n)?Ln:Re.current;return o=kr(t,o),gr(t,i),n=tc(e,t,n,r,o,i),r=nc(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(le&&r&&Hu(t),t.flags|=1,Ie(e,t,n,i),t.child)}function Qd(e,t,n,r,i){if(Xe(n)){var o=!0;aa(t)}else o=!1;if(gr(t,i),t.stateNode===null)Do(e,t),Gh(t,n,r),Cs(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=gt(c):(c=Xe(n)?Ln:Re.current,c=kr(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Hd(t,a,r,c),sn=!1;var p=t.memoizedState;a.state=p,da(t,r,a,i),s=t.memoizedState,l!==r||p!==s||Qe.current||sn?(typeof d=="function"&&(_s(t,n,d,r),s=t.memoizedState),(l=sn||Bd(t,n,l,r,p,s,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,jh(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:wt(t.type,l),a.props=c,f=t.pendingProps,p=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=gt(s):(s=Xe(n)?Ln:Re.current,s=kr(t,s));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==s)&&Hd(t,a,r,s),sn=!1,p=t.memoizedState,a.state=p,da(t,r,a,i);var y=t.memoizedState;l!==f||p!==y||Qe.current||sn?(typeof h=="function"&&(_s(t,n,h,r),y=t.memoizedState),(c=sn||Bd(t,n,c,r,p,y,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ms(e,t,n,r,o,i)}function Ms(e,t,n,r,i,o){Zh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ad(t,n,!1),en(e,t,o);r=t.stateNode,Zv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=br(t,e.child,null,o),t.child=br(t,null,l,o)):Ie(e,t,l,o),t.memoizedState=r.state,i&&Ad(t,n,!0),t.child}function Kh(e){var t=e.stateNode;t.pendingContext?Td(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Td(e,t.context,!1),Zu(e,t.containerInfo)}function Xd(e,t,n,r,i){return Sr(),Vu(i),t.flags|=256,Ie(e,t,n,r),t.child}var Ps={dehydrated:null,treeContext:null,retryLane:0};function Ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jh(e,t,n){var r=t.pendingProps,i=ue.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(ue,i&1),e===null)return js(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ol(a,r,0,null),e=On(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ts(n),t.memoizedState=Ps,e):oc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Kv(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Sn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Sn(l,o):(o=On(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ts(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ps,r}return o=e.child,e=o.sibling,r=Sn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function oc(e,t){return t=ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yo(e,t,n,r){return r!==null&&Vu(r),br(t,e.child,null,n),e=oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ol(Error(M(422))),yo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ol({mode:"visible",children:r.children},i,0,null),o=On(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&br(t,e.child,null,a),t.child.memoizedState=Ts(a),t.memoizedState=Ps,o);if(!(t.mode&1))return yo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(M(419)),r=Ol(o,r,void 0),yo(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ye||l){if(r=je,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jt(e,i),Et(r,e,i,-1))}return dc(),r=Ol(Error(M(421))),yo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=d1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,rt=yn(i.nextSibling),ot=t,le=!0,St=null,e!==null&&(ct[dt++]=qt,ct[dt++]=Yt,ct[dt++]=Dn,qt=e.id,Yt=e.overflow,Dn=t),t=oc(t,r.children),t.flags|=4096,t)}function Zd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Es(e.return,t,n)}function Ll(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function em(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ie(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zd(e,n,t);else if(e.tag===19)Zd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ll(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ll(t,!0,n,null,o);break;case"together":Ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Do(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jv(e,t,n){switch(t.tag){case 3:Kh(t),Sr();break;case 5:Eh(t);break;case 1:Xe(t.type)&&aa(t);break;case 4:Zu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(ua,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?Jh(e,t,n):(ie(ue,ue.current&1),e=en(e,t,n),e!==null?e.sibling:null);ie(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return em(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Xh(e,t,n)}return en(e,t,n)}var tm,As,nm,rm;tm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};As=function(){};nm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rn(It.current);var o=null;switch(n){case"input":i=ns(e,i),r=ns(e,r),o=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),o=[];break;case"textarea":i=os(e,i),r=os(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ia)}ls(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xi.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xi.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&oe("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};rm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function e1(e,t,n){var r=t.pendingProps;switch(Wu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Xe(t.type)&&oa(),Pe(t),null;case 3:return r=t.stateNode,Nr(),ae(Qe),ae(Re),Ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(Bs(St),St=null))),As(e,t),Pe(t),null;case 5:Ku(t);var i=Rn(Mi.current);if(n=t.type,e!==null&&t.stateNode!=null)nm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Pe(t),null}if(e=Rn(It.current),go(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Mt]=t,r[Fi]=o,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Xr.length;i++)oe(Xr[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":ad(r,o),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},oe("invalid",r);break;case"textarea":sd(r,o),oe("invalid",r)}ls(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&mo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&mo(r.textContent,l,e),i=["children",""+l]):xi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&oe("scroll",r)}switch(n){case"input":ao(r),ld(r,o,!0);break;case"textarea":ao(r),ud(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ia)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Mt]=t,e[Fi]=r,tm(e,t,!1,!1),t.stateNode=e;e:{switch(a=ss(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xr.length;i++)oe(Xr[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":ad(e,r),i=ns(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":sd(e,r),i=os(e,r),oe("invalid",e);break;default:i=r}ls(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Ap(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Pp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&wi(e,s):typeof s=="number"&&wi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&oe("scroll",e):s!=null&&Fu(e,o,s,a))}switch(n){case"input":ao(e),ld(e,r,!1);break;case"textarea":ao(e),ud(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?fr(e,!!r.multiple,o,!1):r.defaultValue!=null&&fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ia)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)rm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Rn(Mi.current),Rn(It.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(o=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return Pe(t),null;case 13:if(ae(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&rt!==null&&t.mode&1&&!(t.flags&128))kh(),Sr(),t.flags|=98560,o=!1;else if(o=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[Mt]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),o=!1}else St!==null&&(Bs(St),St=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?Se===0&&(Se=3):dc())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return Nr(),As(e,t),e===null&&_i(t.stateNode.containerInfo),Pe(t),null;case 10:return Yu(t.type._context),Pe(t),null;case 17:return Xe(t.type)&&oa(),Pe(t),null;case 19:if(ae(ue),o=t.memoizedState,o===null)return Pe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Hr(o,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=fa(e),a!==null){for(t.flags|=128,Hr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ue,ue.current&1|2),t.child}e=e.sibling}o.tail!==null&&ye()>Er&&(t.flags|=128,r=!0,Hr(o,!1),t.lanes=4194304)}else{if(!r)if(e=fa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!le)return Pe(t),null}else 2*ye()-o.renderingStartTime>Er&&n!==1073741824&&(t.flags|=128,r=!0,Hr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ye(),t.sibling=null,n=ue.current,ie(ue,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return cc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function t1(e,t){switch(Wu(t),t.tag){case 1:return Xe(t.type)&&oa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),ae(Qe),ae(Re),Ju(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ku(t),null;case 13:if(ae(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ue),null;case 4:return Nr(),null;case 10:return Yu(t.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var xo=!1,Te=!1,n1=typeof WeakSet=="function"?WeakSet:Set,L=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function Rs(e,t,n){try{n()}catch(r){he(e,t,r)}}var Kd=!1;function r1(e,t){if(ys=ta,e=sh(),Bu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===i&&(l=a),p===o&&++d===r&&(s=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(xs={focusedElem:e,selectionRange:n},ta=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,j=y.memoizedState,g=t.stateNode,v=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:wt(t.type,w),j);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(x){he(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=Kd,Kd=!1,y}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Rs(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Is(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function im(e){var t=e.alternate;t!==null&&(e.alternate=null,im(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Fi],delete t[Ss],delete t[Dv],delete t[$v])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function om(e){return e.tag===5||e.tag===3||e.tag===4}function Jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||om(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ia));else if(r!==4&&(e=e.child,e!==null))for(Os(e,t,n),e=e.sibling;e!==null;)Os(e,t,n),e=e.sibling}function Ls(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ls(e,t,n),e=e.sibling;e!==null;)Ls(e,t,n),e=e.sibling}var _e=null,kt=!1;function an(e,t,n){for(n=n.child;n!==null;)am(e,t,n),n=n.sibling}function am(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:Te||lr(n,t);case 6:var r=_e,i=kt;_e=null,an(e,t,n),_e=r,kt=i,_e!==null&&(kt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(kt?(e=_e,n=n.stateNode,e.nodeType===8?Ml(e.parentNode,n):e.nodeType===1&&Ml(e,n),Ni(e)):Ml(_e,n.stateNode));break;case 4:r=_e,i=kt,_e=n.stateNode.containerInfo,kt=!0,an(e,t,n),_e=r,kt=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Rs(n,t,a),i=i.next}while(i!==r)}an(e,t,n);break;case 1:if(!Te&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}an(e,t,n);break;case 21:an(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,an(e,t,n),Te=r):an(e,t,n);break;default:an(e,t,n)}}function ef(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new n1),t.forEach(function(r){var i=f1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,kt=!1;break e;case 3:_e=l.stateNode.containerInfo,kt=!0;break e;case 4:_e=l.stateNode.containerInfo,kt=!0;break e}l=l.return}if(_e===null)throw Error(M(160));am(o,a,i),_e=null,kt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){he(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lm(t,e),t=t.sibling}function lm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Ft(e),r&4){try{di(3,e,e.return),rl(3,e)}catch(w){he(e,e.return,w)}try{di(5,e,e.return)}catch(w){he(e,e.return,w)}}break;case 1:xt(t,e),Ft(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(xt(t,e),Ft(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var i=e.stateNode;try{wi(i,"")}catch(w){he(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Fp(i,o),ss(l,a);var c=ss(l,o);for(a=0;a<s.length;a+=2){var d=s[a],f=s[a+1];d==="style"?Ap(i,f):d==="dangerouslySetInnerHTML"?Pp(i,f):d==="children"?wi(i,f):Fu(i,d,f,c)}switch(l){case"input":rs(i,o);break;case"textarea":zp(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?fr(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?fr(i,!!o.multiple,o.defaultValue,!0):fr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Fi]=o}catch(w){he(e,e.return,w)}}break;case 6:if(xt(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){he(e,e.return,w)}}break;case 3:if(xt(t,e),Ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(w){he(e,e.return,w)}break;case 4:xt(t,e),Ft(e);break;case 13:xt(t,e),Ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(sc=ye())),r&4&&ef(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(c=Te)||d,xt(t,e),Te=c):xt(t,e),Ft(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(f=L=d;L!==null;){switch(p=L,h=p.child,p.tag){case 0:case 11:case 14:case 15:di(4,p,p.return);break;case 1:lr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){he(r,n,w)}}break;case 5:lr(p,p.return);break;case 22:if(p.memoizedState!==null){nf(f);continue}}h!==null?(h.return=p,L=h):nf(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Tp("display",a))}catch(w){he(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){he(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:xt(t,e),Ft(e),r&4&&ef(e);break;case 21:break;default:xt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(om(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wi(i,""),r.flags&=-33);var o=Jd(e);Ls(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Jd(e);Os(e,l,a);break;default:throw Error(M(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function i1(e,t,n){L=e,sm(e)}function sm(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||xo;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Te;l=xo;var c=Te;if(xo=a,(Te=s)&&!c)for(L=i;L!==null;)a=L,s=a.child,a.tag===22&&a.memoizedState!==null?rf(i):s!==null?(s.return=a,L=s):rf(i);for(;o!==null;)L=o,sm(o),o=o.sibling;L=i,xo=l,Te=c}tf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):tf(e)}}function tf(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Dd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ni(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Te||t.flags&512&&Is(t)}catch(p){he(t,t.return,p)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function nf(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function rf(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){he(t,i,s)}}var o=t.return;try{Is(t)}catch(s){he(t,o,s)}break;case 5:var a=t.return;try{Is(t)}catch(s){he(t,a,s)}}}catch(s){he(t,t.return,s)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var o1=Math.ceil,ma=rn.ReactCurrentDispatcher,ac=rn.ReactCurrentOwner,mt=rn.ReactCurrentBatchConfig,J=0,je=null,we=null,Fe=0,et=0,sr=En(0),Se=0,Ri=null,Un=0,il=0,lc=0,fi=null,Ge=null,sc=0,Er=1/0,Bt=null,ga=!1,Ds=null,wn=null,wo=!1,hn=null,va=0,pi=0,$s=null,$o=-1,Uo=0;function $e(){return J&6?ye():$o!==-1?$o:$o=ye()}function kn(e){return e.mode&1?J&2&&Fe!==0?Fe&-Fe:Bv.transition!==null?(Uo===0&&(Uo=Gp()),Uo):(e=te,e!==0||(e=window.event,e=e===void 0?16:Jp(e.type)),e):1}function Et(e,t,n,r){if(50<pi)throw pi=0,$s=null,Error(M(185));Gi(e,n,r),(!(J&2)||e!==je)&&(e===je&&(!(J&2)&&(il|=n),Se===4&&fn(e,Fe)),Ze(e,r),n===1&&J===0&&!(t.mode&1)&&(Er=ye()+500,el&&_n()))}function Ze(e,t){var n=e.callbackNode;Bg(e,t);var r=ea(e,e===je?Fe:0);if(r===0)n!==null&&fd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fd(n),t===1)e.tag===0?Uv(of.bind(null,e)):yh(of.bind(null,e)),Ov(function(){!(J&6)&&_n()}),n=null;else{switch(qp(r)){case 1:n=Au;break;case 4:n=Wp;break;case 16:n=Jo;break;case 536870912:n=Vp;break;default:n=Jo}n=gm(n,um.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function um(e,t){if($o=-1,Uo=0,J&6)throw Error(M(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=ea(e,e===je?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ya(e,r);else{t=r;var i=J;J|=2;var o=dm();(je!==e||Fe!==t)&&(Bt=null,Er=ye()+500,In(e,t));do try{s1();break}catch(l){cm(e,l)}while(!0);qu(),ma.current=o,J=i,we!==null?t=0:(je=null,Fe=0,t=Se)}if(t!==0){if(t===2&&(i=ps(e),i!==0&&(r=i,t=Us(e,i))),t===1)throw n=Ri,In(e,0),fn(e,r),Ze(e,ye()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!a1(i)&&(t=ya(e,r),t===2&&(o=ps(e),o!==0&&(r=o,t=Us(e,o))),t===1))throw n=Ri,In(e,0),fn(e,r),Ze(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Mn(e,Ge,Bt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=sc+500-ye(),10<t)){if(ea(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ks(Mn.bind(null,e,Ge,Bt),t);break}Mn(e,Ge,Bt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-jt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*o1(r/1960))-r,10<r){e.timeoutHandle=ks(Mn.bind(null,e,Ge,Bt),r);break}Mn(e,Ge,Bt);break;case 5:Mn(e,Ge,Bt);break;default:throw Error(M(329))}}}return Ze(e,ye()),e.callbackNode===n?um.bind(null,e):null}function Us(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=ya(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&Bs(t)),e}function Bs(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function a1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!_t(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~lc,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function of(e){if(J&6)throw Error(M(327));vr();var t=ea(e,0);if(!(t&1))return Ze(e,ye()),null;var n=ya(e,t);if(e.tag!==0&&n===2){var r=ps(e);r!==0&&(t=r,n=Us(e,r))}if(n===1)throw n=Ri,In(e,0),fn(e,t),Ze(e,ye()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,Ge,Bt),Ze(e,ye()),null}function uc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Er=ye()+500,el&&_n())}}function Bn(e){hn!==null&&hn.tag===0&&!(J&6)&&vr();var t=J;J|=1;var n=mt.transition,r=te;try{if(mt.transition=null,te=1,e)return e()}finally{te=r,mt.transition=n,J=t,!(J&6)&&_n()}}function cc(){et=sr.current,ae(sr)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Iv(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oa();break;case 3:Nr(),ae(Qe),ae(Re),Ju();break;case 5:Ku(r);break;case 4:Nr();break;case 13:ae(ue);break;case 19:ae(ue);break;case 10:Yu(r.type._context);break;case 22:case 23:cc()}n=n.return}if(je=e,we=e=Sn(e.current,null),Fe=et=t,Se=0,Ri=null,lc=il=Un=0,Ge=fi=null,An!==null){for(t=0;t<An.length;t++)if(n=An[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}An=null}return e}function cm(e,t){do{var n=we;try{if(qu(),Oo.current=ha,pa){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pa=!1}if($n=0,Ne=ke=de=null,ci=!1,Pi=0,ac.current=null,n===null||n.return===null){Se=1,Ri=t,we=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Fe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Vd(a);if(h!==null){h.flags&=-257,Gd(h,a,l,o,t),h.mode&1&&Wd(o,c,t),t=h,s=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(s),t.updateQueue=w}else y.add(s);break e}else{if(!(t&1)){Wd(o,c,t),dc();break e}s=Error(M(426))}}else if(le&&l.mode&1){var j=Vd(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Gd(j,a,l,o,t),Vu(jr(s,l));break e}}o=s=jr(s,l),Se!==4&&(Se=2),fi===null?fi=[o]:fi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=qh(o,s,t);Ld(o,g);break e;case 1:l=s;var v=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(wn===null||!wn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Yh(o,l,t);Ld(o,x);break e}}o=o.return}while(o!==null)}pm(n)}catch(k){t=k,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function dm(){var e=ma.current;return ma.current=ha,e===null?ha:e}function dc(){(Se===0||Se===3||Se===2)&&(Se=4),je===null||!(Un&268435455)&&!(il&268435455)||fn(je,Fe)}function ya(e,t){var n=J;J|=2;var r=dm();(je!==e||Fe!==t)&&(Bt=null,In(e,t));do try{l1();break}catch(i){cm(e,i)}while(!0);if(qu(),J=n,ma.current=r,we!==null)throw Error(M(261));return je=null,Fe=0,Se}function l1(){for(;we!==null;)fm(we)}function s1(){for(;we!==null&&!Tg();)fm(we)}function fm(e){var t=mm(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?pm(e):we=t,ac.current=null}function pm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=t1(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,we=null;return}}else if(n=e1(n,t,et),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Se===0&&(Se=5)}function Mn(e,t,n){var r=te,i=mt.transition;try{mt.transition=null,te=1,u1(e,t,n,r)}finally{mt.transition=i,te=r}return null}function u1(e,t,n,r){do vr();while(hn!==null);if(J&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Hg(e,o),e===je&&(we=je=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,gm(Jo,function(){return vr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=mt.transition,mt.transition=null;var a=te;te=1;var l=J;J|=4,ac.current=null,r1(e,n),lm(n,e),Fv(xs),ta=!!ys,xs=ys=null,e.current=n,i1(n),Ag(),J=l,te=a,mt.transition=o}else e.current=n;if(wo&&(wo=!1,hn=e,va=i),o=e.pendingLanes,o===0&&(wn=null),Og(n.stateNode),Ze(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ga)throw ga=!1,e=Ds,Ds=null,e;return va&1&&e.tag!==0&&vr(),o=e.pendingLanes,o&1?e===$s?pi++:(pi=0,$s=e):pi=0,_n(),null}function vr(){if(hn!==null){var e=qp(va),t=mt.transition,n=te;try{if(mt.transition=null,te=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,va=0,J&6)throw Error(M(331));var i=J;for(J|=4,L=e.current;L!==null;){var o=L,a=o.child;if(L.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(L=c;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:di(8,d,o)}var f=d.child;if(f!==null)f.return=d,L=f;else for(;L!==null;){d=L;var p=d.sibling,h=d.return;if(im(d),d===c){L=null;break}if(p!==null){p.return=h,L=p;break}L=h}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}L=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,L=a;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:di(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,L=g;break e}L=o.return}}var v=e.current;for(L=v;L!==null;){a=L;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,L=m;else e:for(a=v;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){he(l,l.return,k)}if(l===a){L=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,L=x;break e}L=l.return}}if(J=i,_n(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Qa,e)}catch{}r=!0}return r}finally{te=n,mt.transition=t}}return!1}function af(e,t,n){t=jr(n,t),t=qh(e,t,1),e=xn(e,t,1),t=$e(),e!==null&&(Gi(e,1,t),Ze(e,t))}function he(e,t,n){if(e.tag===3)af(e,e,n);else for(;t!==null;){if(t.tag===3){af(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=jr(n,e),e=Yh(t,e,1),t=xn(t,e,1),e=$e(),t!==null&&(Gi(t,1,e),Ze(t,e));break}}t=t.return}}function c1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Fe&n)===n&&(Se===4||Se===3&&(Fe&130023424)===Fe&&500>ye()-sc?In(e,0):lc|=n),Ze(e,t)}function hm(e,t){t===0&&(e.mode&1?(t=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):t=1);var n=$e();e=Jt(e,t),e!==null&&(Gi(e,t,n),Ze(e,n))}function d1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hm(e,n)}function f1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),hm(e,n)}var mm;mm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ye=!1,Jv(e,t,n);Ye=!!(e.flags&131072)}else Ye=!1,le&&t.flags&1048576&&xh(t,sa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Do(e,t),e=t.pendingProps;var i=kr(t,Re.current);gr(t,n),i=tc(null,t,r,e,i,n);var o=nc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,aa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xu(t),i.updater=nl,t.stateNode=i,i._reactInternals=t,Cs(t,r,e,n),t=Ms(null,t,r,!0,o,n)):(t.tag=0,le&&o&&Hu(t),Ie(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Do(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=h1(r),e=wt(r,e),i){case 0:t=zs(null,t,r,e,n);break e;case 1:t=Qd(null,t,r,e,n);break e;case 11:t=qd(null,t,r,e,n);break e;case 14:t=Yd(null,t,r,wt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),zs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Qd(e,t,r,i,n);case 3:e:{if(Kh(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,jh(e,t),da(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=jr(Error(M(423)),t),t=Xd(e,t,r,n,i);break e}else if(r!==i){i=jr(Error(M(424)),t),t=Xd(e,t,r,n,i);break e}else for(rt=yn(t.stateNode.containerInfo.firstChild),ot=t,le=!0,St=null,n=bh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===i){t=en(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return Eh(t),e===null&&js(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ws(r,i)?a=null:o!==null&&ws(r,o)&&(t.flags|=32),Zh(e,t),Ie(e,t,a,n),t.child;case 6:return e===null&&js(t),null;case 13:return Jh(e,t,n);case 4:return Zu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=br(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),qd(e,t,r,i,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ie(ua,r._currentValue),r._currentValue=a,o!==null)if(_t(o.value,a)){if(o.children===i.children&&!Qe.current){t=en(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Xt(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Es(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(M(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Es(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ie(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gr(t,n),i=gt(i),r=r(i),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,i=wt(r,t.pendingProps),i=wt(r.type,i),Yd(e,t,r,i,n);case 15:return Qh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Do(e,t),t.tag=1,Xe(r)?(e=!0,aa(t)):e=!1,gr(t,n),Gh(t,r,i),Cs(t,r,i,n),Ms(null,t,r,!0,e,n);case 19:return em(e,t,n);case 22:return Xh(e,t,n)}throw Error(M(156,t.tag))};function gm(e,t){return Hp(e,t)}function p1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new p1(e,t,n,r)}function fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function h1(e){if(typeof e=="function")return fc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mu)return 11;if(e===Pu)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")fc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kn:return On(n.children,i,o,t);case zu:a=8,i|=8;break;case Kl:return e=pt(12,n,t,i|2),e.elementType=Kl,e.lanes=o,e;case Jl:return e=pt(13,n,t,i),e.elementType=Jl,e.lanes=o,e;case es:return e=pt(19,n,t,i),e.elementType=es,e.lanes=o,e;case Ep:return ol(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Np:a=10;break e;case jp:a=9;break e;case Mu:a=11;break e;case Pu:a=14;break e;case ln:a=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=pt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function On(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function ol(e,t,n,r){return e=pt(22,e,r,t),e.elementType=Ep,e.lanes=n,e.stateNode={isHidden:!1},e}function Dl(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function $l(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function m1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(e,t,n,r,i,o,a,l,s){return e=new m1(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xu(o),e}function g1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vm(e){if(!e)return Nn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Xe(n))return vh(e,n,t)}return t}function ym(e,t,n,r,i,o,a,l,s){return e=pc(n,r,!0,e,i,o,a,l,s),e.context=vm(null),n=e.current,r=$e(),i=kn(n),o=Xt(r,i),o.callback=t??null,xn(n,o,i),e.current.lanes=i,Gi(e,i,r),Ze(e,r),e}function al(e,t,n,r){var i=t.current,o=$e(),a=kn(i);return n=vm(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,a),e!==null&&(Et(e,i,a,o),Io(e,i,a)),a}function xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hc(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}function v1(){return null}var xm=typeof reportError=="function"?reportError:function(e){console.error(e)};function mc(e){this._internalRoot=e}ll.prototype.render=mc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));al(e,t,null,null)};ll.prototype.unmount=mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){al(null,e,null,null)}),t[Kt]=null}};function ll(e){this._internalRoot=e}ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&Kp(e)}};function gc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sf(){}function y1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=xa(a);o.call(c)}}var a=ym(t,r,e,0,null,!1,!1,"",sf);return e._reactRootContainer=a,e[Kt]=a.current,_i(e.nodeType===8?e.parentNode:e),Bn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=xa(s);l.call(c)}}var s=pc(e,0,!1,null,null,!1,!1,"",sf);return e._reactRootContainer=s,e[Kt]=s.current,_i(e.nodeType===8?e.parentNode:e),Bn(function(){al(t,s,n,r)}),s}function ul(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=xa(a);l.call(s)}}al(t,a,e,i)}else a=y1(n,t,e,i,r);return xa(a)}Yp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qr(t.pendingLanes);n!==0&&(Ru(t,n|1),Ze(t,ye()),!(J&6)&&(Er=ye()+500,_n()))}break;case 13:Bn(function(){var r=Jt(e,1);if(r!==null){var i=$e();Et(r,e,1,i)}}),hc(e,1)}};Iu=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=$e();Et(t,e,134217728,n)}hc(e,134217728)}};Qp=function(e){if(e.tag===13){var t=kn(e),n=Jt(e,t);if(n!==null){var r=$e();Et(n,e,t,r)}hc(e,t)}};Xp=function(){return te};Zp=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};cs=function(e,t,n){switch(t){case"input":if(rs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ja(r);if(!i)throw Error(M(90));Cp(r),rs(r,i)}}}break;case"textarea":zp(e,n);break;case"select":t=n.value,t!=null&&fr(e,!!n.multiple,t,!1)}};Op=uc;Lp=Bn;var x1={usingClientEntryPoint:!1,Events:[Yi,nr,Ja,Rp,Ip,uc]},Wr={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w1={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Up(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||v1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{Qa=ko.inject(w1),Rt=ko}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x1;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(t))throw Error(M(200));return g1(e,t,null,n)};lt.createRoot=function(e,t){if(!gc(e))throw Error(M(299));var n=!1,r="",i=xm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=pc(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,_i(e.nodeType===8?e.parentNode:e),new mc(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Up(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Bn(e)};lt.hydrate=function(e,t,n){if(!sl(t))throw Error(M(200));return ul(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!gc(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=xm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ym(t,null,e,1,n??null,i,!1,o,a),e[Kt]=t.current,_i(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ll(t)};lt.render=function(e,t,n){if(!sl(t))throw Error(M(200));return ul(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!sl(e))throw Error(M(40));return e._reactRootContainer?(Bn(function(){ul(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};lt.unstable_batchedUpdates=uc;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sl(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return ul(e,t,n,!1,r)};lt.version="18.3.1-next-f1338f8080-20240426";function wm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wm)}catch(e){console.error(e)}}wm(),wp.exports=lt;var k1=wp.exports,uf=k1;Xl.createRoot=uf.createRoot,Xl.hydrateRoot=uf.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),G=(e,t)=>{const n=I.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:s,...c},d)=>I.createElement("svg",{ref:d,...S1,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${b1(e)}`,l].join(" "),...c},[...t.map(([f,p])=>I.createElement(f,p)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=G("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=G("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=G("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=G("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=G("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=G("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=G("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=G("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=G("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=G("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=G("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=G("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=G("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=G("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=G("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=G("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=G("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=G("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=G("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=G("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=G("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=G("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=G("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=G("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=G("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=G("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=G("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=G("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=G("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=G("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=G("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=G("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=G("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=G("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=G("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=G("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=G("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=G("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=G("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Y1({onOpenContact:e}){const[t,n]=I.useState(!1),[r,i]=I.useState(!1);I.useEffect(()=>{const a=()=>{n(window.scrollY>20)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const o=a=>{i(!1);const l=document.getElementById(a);l&&l.scrollIntoView({behavior:"smooth"})};return u.jsxs("header",{className:`navbar-header ${t?"scrolled":""}`,children:[u.jsxs("div",{className:"container nav-container",children:[u.jsx("a",{href:"#",className:"nav-logo",children:u.jsx("img",{src:"./assets/coloured_logo.jpeg",alt:"Gaussians Logo",className:"logo-img"})}),u.jsxs("nav",{className:`nav-links ${r?"open":""}`,children:[u.jsx("button",{className:"nav-item",onClick:()=>o("about"),children:"About Gaussians"}),u.jsx("button",{className:"nav-item",onClick:()=>o("services"),children:"Services"}),u.jsx("button",{className:"nav-item",onClick:()=>o("forward"),children:"Gaussians Forward"}),u.jsx("div",{className:"mobile-cta",children:u.jsxs("button",{className:"btn-primary",onClick:()=>{i(!1),e("Connect with Us Navigation")},children:["Connect with Us ",u.jsx(Hn,{size:16})]})})]}),u.jsx("div",{className:"nav-cta-desktop",children:u.jsxs("button",{className:"btn-primary",onClick:()=>e("Connect with Us Navigation"),children:["Connect with Us ",u.jsx(Hn,{size:16})]})}),u.jsx("button",{className:"mobile-toggle",onClick:()=>i(!r),"aria-label":"Toggle menu",children:r?u.jsx(xc,{size:24}):u.jsx(O1,{size:24})})]}),u.jsx("style",{children:`
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
          height: 56px;
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
          font-size: var(--fs-nav);
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
      `})]})}function Q1({onOpenContact:e,onExploreServices:t}){const n=I.useRef(null);return I.useEffect(()=>{const r=n.current;if(!r)return;const i=r.getContext("2d");let o;const a=()=>{r.width=r.parentElement.clientWidth,r.height=r.parentElement.clientHeight};a(),window.addEventListener("resize",a);const l=[{id:"GRC",title:"GRC",angle:-1.5708,dist:220},{id:"SOC2",title:"SOC 2",angle:-.3142,dist:215},{id:"Cloud",title:"Cloud",angle:.9425,dist:225},{id:"Risk",title:"Risk",angle:2.1991,dist:225},{id:"ISO",title:"ISO",angle:-2.8274,dist:215}];let s=0;const c=()=>{s+=.015,i.clearRect(0,0,r.width,r.height);const d=r.width/2,f=r.height/2;i.save(),i.beginPath(),i.arc(d,f,110+Math.sin(s)*8,0,Math.PI*2),i.strokeStyle="rgba(90, 56, 253, 0.15)",i.lineWidth=2,i.setLineDash([6,6]),i.stroke(),i.beginPath(),i.arc(d,f,180+Math.cos(s*.8)*10,0,Math.PI*2),i.strokeStyle="rgba(124, 58, 237, 0.12)",i.lineWidth=1.5,i.stroke(),i.restore(),l.forEach((p,h)=>{const y=d+Math.cos(p.angle+Math.sin(s*.5+h)*.05)*(p.dist*1.1),w=f+Math.sin(p.angle+Math.cos(s*.5+h)*.05)*(p.dist*.85);i.beginPath(),i.moveTo(d,f),i.lineTo(y,w),i.strokeStyle="rgba(90, 56, 253, 0.22)",i.lineWidth=1.5,i.stroke();const j=(s*.8+h*.35)%1,g=d+(y-d)*j,v=f+(w-f)*j,m=i.createRadialGradient(g,v,0,g,v,6);m.addColorStop(0,"#5A38FD"),m.addColorStop(1,"rgba(90, 56, 253, 0)"),i.fillStyle=m,i.beginPath(),i.arc(g,v,6,0,Math.PI*2),i.fill()}),o=requestAnimationFrame(c)};return c(),()=>{window.removeEventListener("resize",a),cancelAnimationFrame(o)}},[]),u.jsxs("section",{className:"hero-section",children:[u.jsx("div",{className:"hero-bg-glow"}),u.jsx("div",{className:"container hero-container",children:u.jsxs("div",{className:"hero-content",children:[u.jsxs("h1",{className:"hero-title",children:["Operationalizing ",u.jsx("br",{}),u.jsx("span",{className:"highlight-text",children:"Security, Compliance, and Trust"})]}),u.jsx("p",{className:"hero-description",children:"Helping organizations transform security, compliance, and risk management from business challenges into strategic advantages through practical execution and long-term partnership."}),u.jsxs("div",{className:"hero-callout",children:[u.jsx(Xi,{size:20,className:"callout-icon"}),u.jsxs("span",{children:[u.jsx("strong",{children:"We do not only advise. We deliver."})," From audit readiness and risk management to managed services and specialist talent solutions."]})]})]})}),u.jsx("style",{children:`
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
          font-size: var(--fs-hero);
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
          font-size: var(--fs-body);
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
          font-size: var(--fs-body);
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
          font-size: var(--fs-body);
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
            font-size: calc(var(--fs-hero) * 0.6);
            line-height: 1.2;
          }
          .hero-description {
            font-size: var(--fs-body);
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
            font-size: var(--fs-small);
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
      `})]})}function X1(){const[e,t]=I.useState(null),n=i=>t(e===i?null:i),r=[{id:"leadership",num:"01",title:"Global Consulting & Industry Veterans",badge:"Experienced Leadership",metric:"15+ Yrs Leadership Exp.",desc:"Our team brings seasoned professionals with Big-4 and global consulting backgrounds, alongside real-world enterprise experience to solve your toughest trust & compliance challenges.",highlight:"Senior leaders actively involved in every client engagement.",icon:u.jsx(E1,{size:22})},{id:"flexibility",num:"02",title:"Flexible Engagement Models",badge:"Tailored Execution",metric:"4 Delivery Models",desc:"Whether you need strategic advisory, fully managed compliance operations, specialized staff augmentation, or dedicated offshore centers, we flex to fit your exact scale.",highlight:"Advisory, Managed Services, Staff Augmentation & Dedicated Teams.",icon:u.jsx(R1,{size:22})},{id:"execution",num:"03",title:"Hands-On Execution & Ownership",badge:"We Deliver",metric:"Operational Ownership",desc:"We don't stop at high-level reports. We design policies, test ITGCs, collect audit evidence, interface directly with auditors, and manage day-to-day security operations.",highlight:"Operational support that embeds directly into your workflow.",icon:u.jsx(Zi,{size:22})},{id:"scalability",num:"04",title:"Scalable Delivery Without Compromise",badge:"Scale Without Limits",metric:"Zero Audit Surprises",desc:"Expand your security and compliance bandwidth quickly without sacrificing quality, oversight, or accountability across high-growth startups to global enterprises.",highlight:"Consistent audit-ready quality at optimal operating cost.",icon:u.jsx(_m,{size:22})},{id:"dedicated",num:"05",title:"Personalized Senior Leadership Attention",badge:"Senior Expert Access",metric:"Direct Executive Access",desc:"You deal directly with experts who understand your business context, not junior staff learning on your time. Personal ownership drives fast turnaround and high precision.",highlight:"Direct executive sponsorship on all key milestones.",icon:u.jsx(V1,{size:22})},{id:"trust",num:"06",title:"Long-Term Trust & Relentless Commitment",badge:"End-to-End Partner",metric:"Honest Advisory",desc:"We build relationships based on transparency, clear communication, and a relentless focus on customer success, guiding you from readiness through continuous governance.",highlight:"Earned trust through honest conversations and tangible results.",icon:u.jsx(T1,{size:22})}];return u.jsxs("section",{id:"difference",className:"difference-section",children:[u.jsxs("div",{className:"diff-bg-orbs",children:[u.jsx("div",{className:"orb orb-1"}),u.jsx("div",{className:"orb orb-2"})]}),u.jsxs("div",{className:"container relative-z",children:[u.jsxs("div",{className:"section-header fade-in-up",children:[u.jsxs("div",{className:"badge-pill diff-badge",children:[u.jsx(yc,{size:16}),u.jsx("span",{children:"THE GAUSSIANS DIFFERENCE"})]}),u.jsx("h2",{className:"diff-title",children:"Why Clients Choose Us"}),u.jsx("div",{className:"section-divider"}),u.jsx("p",{className:"diff-subtitle",children:"Building Trust • Delivering Assurance • Driving Business Outcomes"})]}),u.jsx("div",{className:"accordion-list fade-in-up",children:r.map((i,o)=>{const a=e===o;return u.jsxs("div",{className:`accordion-item ${a?"open":""}`,children:[u.jsxs("button",{className:"accordion-trigger",onClick:()=>n(o),"aria-expanded":a,children:[u.jsxs("div",{className:"acc-left",children:[u.jsx("div",{className:`acc-icon-box ${a?"active":""}`,children:i.icon}),u.jsxs("div",{className:"acc-title-group",children:[u.jsx("span",{className:"acc-badge",children:i.badge}),u.jsx("h4",{className:"acc-title",children:i.title})]})]}),u.jsxs("div",{className:"acc-right",children:[a&&u.jsxs("span",{className:"acc-metric",children:[u.jsx(q1,{size:13})," ",i.metric]}),u.jsx("div",{className:`acc-chevron ${a?"rotated":""}`,children:u.jsx(km,{size:20})})]})]}),u.jsx("div",{className:"accordion-body",children:u.jsxs("div",{className:"acc-body-inner",children:[u.jsx("p",{className:"acc-desc",children:i.desc}),u.jsxs("div",{className:"acc-takeaway",children:[u.jsx(Xi,{size:17,className:"acc-check-icon"}),u.jsxs("div",{children:[u.jsx("strong",{children:"Core Advantage: "}),i.highlight]})]})]})})]},i.id)})}),u.jsxs("div",{className:"philosophy-banner glass-card fade-in-up",children:[u.jsx(D1,{size:36,className:"quote-icon"}),u.jsx("p",{className:"philosophy-quote",children:'"Trust is earned through honest conversations, transparent communication, professional execution, and a relentless commitment to client success."'}),u.jsxs("div",{className:"philosophy-brand",children:[u.jsx("span",{className:"line"}),u.jsx("span",{children:"The Gaussians Core Philosophy"}),u.jsx("span",{className:"line"})]})]})]}),u.jsx("style",{children:`
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
          font-size: var(--fs-section);
          margin-top: 0.5rem;
        }

        .diff-subtitle {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-body);
          color: var(--primary);
          margin-top: 0.4rem;
        }

        /* Accordion */
        .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 3.5rem;
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        .accordion-item {
          background: #FFFFFF;
          border: 1.5px solid var(--border-purple);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .accordion-item.open {
          border-color: var(--primary);
          box-shadow: 0 12px 35px -8px rgba(90, 56, 253, 0.18);
        }

        .accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.15rem 1.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s ease;
        }

        .accordion-trigger:hover {
          background: rgba(90, 56, 253, 0.03);
        }

        .acc-left {
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }

        .acc-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--bg-soft-purple);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .acc-icon-box.active {
          background: linear-gradient(135deg, var(--primary) 0%, #4322EA 100%);
          color: #FFFFFF;
          box-shadow: 0 6px 18px rgba(90, 56, 253, 0.3);
        }

        .acc-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .acc-badge {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .acc-title {
          font-size: var(--fs-card);
          color: var(--text-dark);
          line-height: 1.3;
          margin: 0;
        }

        .acc-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .acc-metric {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          background: var(--primary-light);
          color: var(--primary);
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        .acc-chevron {
          color: var(--primary);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .acc-chevron.rotated {
          transform: rotate(180deg);
        }

        /* Accordion Body - animated open/close */
        .accordion-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .accordion-item.open .accordion-body {
          max-height: 500px;
        }

        .acc-body-inner {
          overflow: hidden;
          min-height: 0;
          padding: 0 1.5rem;
          transition: padding 0.35s ease;
        }

        .accordion-item.open .acc-body-inner {
          padding: 0 1.5rem 1.5rem 1.5rem;
        }

        .acc-desc {
          font-size: var(--fs-body);
          color: var(--text-body);
          line-height: 1.65;
          margin-bottom: 1rem;
          padding-left: calc(44px + 1.1rem);
        }

        .acc-takeaway {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: var(--bg-soft-purple);
          border: 1px solid var(--primary-border);
          border-radius: var(--radius-md);
          padding: 0.9rem 1.1rem;
          font-size: var(--fs-body);
          color: var(--text-dark);
          margin-left: calc(44px + 1.1rem);
        }

        .acc-check-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Philosophy Card */
        .philosophy-banner {
          background: linear-gradient(135deg, var(--primary) 0%, #3B1AD8 100%);
          border-radius: var(--radius-lg);
          padding: 3rem 3.5rem;
          color: #FFFFFF;
          text-align: center;
          box-shadow: 0 18px 45px rgba(90, 56, 253, 0.28);
          margin-top: 3.5rem;
        }

        .quote-icon {
          color: rgba(255, 255, 255, 0.35);
          margin-bottom: 0.75rem;
        }

        .philosophy-quote {
          font-size: var(--fs-body);
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
          font-size: var(--fs-small);
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .line {
          width: 36px;
          height: 2px;
          background: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 768px) {
          .difference-section {
            padding: 4.5rem 0;
          }
          .diff-title {
            font-size: calc(var(--fs-section) * 0.9);
          }
          .accordion-trigger {
            padding: 1rem 1.1rem;
          }
          .acc-metric {
            display: none;
          }
          .acc-desc, .acc-takeaway {
            margin-left: 0;
          }
          .philosophy-banner {
            padding: 2.25rem 1.5rem;
          }
          .philosophy-quote {
            font-size: 1.05rem;
          }
        }
      `})]})}function Z1(){const e=[{id:"compliance",icon:u.jsx(Zi,{size:26}),title:"Achieve Compliance",desc:"Structured, audit-ready programs that satisfy global regulators, enterprise clients, and board members.",img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=420&q=80&auto=format&fit=crop"},{id:"security",icon:u.jsx(I1,{size:26}),title:"Strengthen Security",desc:"Practical, defense-in-depth security controls and governance that actively reduce cyber risk exposure.",img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=420&q=80&auto=format&fit=crop"},{id:"audits",icon:u.jsx(M1,{size:26}),title:"Pass Audits with Confidence",desc:"Evidence-backed readiness across SOC 2, ISO 27001, HITRUST, and PCI DSS with zero audit surprises.",img:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=420&q=80&auto=format&fit=crop"},{id:"trm",icon:u.jsx(Cm,{size:26}),title:"Manage Technology & Third-Party Risk",desc:"Comprehensive vendor due diligence and technology risk management across IT, Cloud, AI, and Data.",img:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=420&q=80&auto=format&fit=crop"},{id:"scale",icon:u.jsx(Sm,{size:26}),title:"Scale Operations Efficiently",desc:"Managed compliance operations that unlock your internal engineering team capacity without sacrificing quality.",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=420&q=80&auto=format&fit=crop"},{id:"specialists",icon:u.jsx(W1,{size:26}),title:"Access Experienced Specialists",desc:"Staff augmentation and dedicated offshore teams with deep domain expertise, aligned with your mission.",img:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=420&q=80&auto=format&fit=crop"}];return u.jsxs("section",{id:"how-we-help",className:"howwehelp-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsxs("div",{className:"badge-pill",children:[u.jsx(Hs,{size:14,className:"badge-icon"}),u.jsx("span",{children:"How We Help"})]}),u.jsxs("h2",{children:["Helping Organizations ",u.jsx("span",{className:"highlight-text",children:"Navigate Risk"})," and ",u.jsx("span",{className:"highlight-text",children:"Build Trust"})]}),u.jsx("p",{children:"We partner with you to turn security and compliance requirements into structured, scalable, and business-aligned programs."})]}),u.jsx("div",{className:"help-grid",children:e.map(t=>u.jsxs("div",{className:"help-card glass-card animate-hover",children:[u.jsxs("div",{className:"help-card-img-wrap",children:[u.jsx("img",{src:t.img,alt:t.title,className:"help-card-img",loading:"lazy"}),u.jsx("div",{className:"help-card-img-overlay"}),u.jsx("div",{className:"help-icon-wrapper",children:t.icon})]}),u.jsxs("div",{className:"help-card-body",children:[u.jsx("h3",{className:"help-card-title",children:t.title}),u.jsx("p",{className:"help-card-desc",children:t.desc})]})]},t.id))})]}),u.jsx("style",{children:`
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
          transition: var(--transition-normal);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(90, 56, 253, 0.02);
        }

        .help-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 15px 35px rgba(90, 56, 253, 0.1);
        }

        /* Photo at the top of card */
        .help-card-img-wrap {
          position: relative;
          width: 100%;
          height: 160px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .help-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .help-card:hover .help-card-img {
          transform: scale(1.06);
        }

        .help-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(90, 56, 253, 0.35) 0%,
            rgba(15, 23, 42, 0.55) 100%
          );
        }

        .help-icon-wrapper {
          position: absolute;
          bottom: 1rem;
          left: 1.25rem;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: #FFFFFF;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.18);
        }

        .help-card-body {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .help-card-title {
          font-size: var(--fs-card);
          color: var(--text-dark);
          margin-bottom: 0;
          font-weight: 700;
        }

        .help-card-desc {
          font-size: var(--fs-body);
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
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
      `})]})}function K1({onOpenContact:e,onOpenFrameworks:t}){const[n,r]=I.useState("all"),i=[{id:"all",name:"All Services"},{id:"cybersecurity",name:"Cybersecurity & Compliance"},{id:"risk",name:"Risk & Governance"},{id:"audit",name:"Audit & Assurance"},{id:"managed",name:"Managed Services"},{id:"program",name:"Program & Transformation"}],o=[{id:"soc",code:"SOC 1 / 2 / 3",name:"SOC Audits",category:"cybersecurity",desc:"End-to-end audit readiness, controls mapping, evidence collection, and auditor liaison for Type I & II.",badge:"Cybersecurity",img:"https://images.unsplash.com/photo-1507209575474-fa671a6b3f45?w=480&q=80&auto=format&fit=crop"},{id:"iso27001",code:"ISO 27001",name:"ISO 27001 Certification",category:"cybersecurity",desc:"ISMS design, Annex A controls implementation, and certification readiness for Stage 1 & Stage 2.",badge:"Cybersecurity",img:"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=480&q=80&auto=format&fit=crop"},{id:"iso42001",code:"ISO 42001",name:"AI Management Systems",category:"cybersecurity",desc:"Premier standard for AI Governance, risk management, and AI transparency programs.",badge:"AI Leadership",img:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=480&q=80&auto=format&fit=crop"},{id:"tprm",code:"TPRM",name:"Third Party Risk Management",category:"risk",desc:"Vendor security due diligence, questionnaire evaluations, and supply chain risk oversight.",badge:"Risk & Governance",img:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=480&q=80&auto=format&fit=crop"},{id:"itgc",code:"ITGC / ITAC",name:"ITGC & ITAC Testing",category:"audit",desc:"Rigorous validation of IT General Controls, database management, and application controls.",badge:"Audit & Assurance",img:"https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=480&q=80&auto=format&fit=crop"},{id:"managed-compliance",code:"Managed",name:"Compliance Managed Services",category:"managed",desc:"We run your day-to-day compliance operations — evidence collection, monitoring, and reporting.",badge:"Managed Services",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&q=80&auto=format&fit=crop"}],a=n==="all"?o:o.filter(l=>l.category===n);return u.jsxs("section",{id:"services",className:"services-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsxs("div",{className:"badge-pill",children:[u.jsx(Zi,{size:16,className:"badge-icon"}),u.jsx("span",{children:"Services"})]}),u.jsxs("h2",{children:["Your Compliance Journey.",u.jsx("br",{}),"Our Commitment."]})]}),u.jsx("div",{className:"services-desc-banner",children:u.jsx("p",{children:"Whether you're preparing for an audit, strengthening your cybersecurity posture, building a compliance function, or scaling your team — Gaussians works alongside you every step of the way."})}),u.jsx("div",{className:"services-categories",children:i.map(l=>u.jsx("button",{className:`cat-filter-btn ${n===l.id?"active":""}`,onClick:()=>r(l.id),children:l.name},l.id))}),u.jsx("div",{className:"services-grid",children:a.map(l=>u.jsxs("div",{className:"service-card glass-card",children:[u.jsxs("div",{className:"service-card-header",children:[u.jsx("span",{className:"service-code-badge",children:l.code}),u.jsx("span",{className:"service-category-badge",children:l.badge})]}),u.jsx("h3",{className:"service-card-title",children:l.name}),u.jsx("p",{className:"service-card-desc",children:l.desc}),u.jsxs("button",{className:"service-card-btn",onClick:()=>e(l.name),children:["Discuss Service ",u.jsx(Hn,{size:14})]})]},l.id))}),u.jsx("div",{className:"explore-more-banner",children:u.jsxs("div",{className:"explore-more-content",children:[u.jsxs("div",{className:"explore-more-text",children:[u.jsx("h3",{className:"explore-more-title",children:"Explore Our Full Service Portfolio"}),u.jsx("p",{className:"explore-more-desc",children:"We support 15+ global frameworks across cybersecurity, AI governance, privacy, risk, audit, and managed services. Tell us what you need."}),u.jsxs("div",{className:"explore-more-tags",children:[u.jsx("span",{className:"explore-tag",children:"GDPR / CCPA"}),u.jsx("span",{className:"explore-tag",children:"HIPAA"}),u.jsx("span",{className:"explore-tag",children:"PCI DSS"}),u.jsx("span",{className:"explore-tag",children:"NIST CSF / AI RMF"}),u.jsx("span",{className:"explore-tag",children:"HITRUST"}),u.jsx("span",{className:"explore-tag",children:"CMMC"}),u.jsx("span",{className:"explore-tag",children:"SOX / ITGC"}),u.jsx("span",{className:"explore-tag",children:"CSA STAR"}),u.jsx("span",{className:"explore-tag",children:"+ More"})]})]}),u.jsxs("button",{className:"btn-primary explore-more-btn",onClick:t,children:["Explore Frameworks Catalog ",u.jsx(Hn,{size:16})]})]})})]}),u.jsx("style",{children:`
        .services-section {
          padding: 6rem 0;
          background: var(--bg-soft-purple);
        }

        .services-desc-banner {
          background: linear-gradient(135deg, rgba(90, 56, 253, 0.06) 0%, rgba(168, 85, 247, 0.06) 100%);
          border: 1px solid var(--border-purple);
          border-left: 4px solid var(--primary);
          border-radius: var(--radius-md);
          padding: 1.1rem 1.75rem;
          margin-bottom: 2rem;
        }

        .services-desc-banner p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0;
        }

        .services-categories {
          display: flex;
          justify-content: center;
          gap: 0.65rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .cat-filter-btn {
          padding: 0.55rem 1.25rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-purple);
          background: #FFFFFF;
          color: var(--text-dark);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.88rem;
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
          margin-bottom: 2.5rem;
        }

        .service-card {
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: var(--transition-normal);
        }

        .service-card:hover {
          border-color: var(--primary);
          box-shadow: 0 10px 30px rgba(90, 56, 253, 0.12);
          transform: translateY(-4px);
        }

        /* Photo header */
        /* Card body */
        .service-card {
          padding: 2rem;
          overflow: visible;
          min-height: 230px;
          justify-content: space-between;
        }

        .service-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.1rem;
        }

        .service-code-badge {
          background: var(--primary-light);
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: var(--fs-small);
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-sm);
        }

        .service-category-badge {
          font-size: var(--fs-small);
          font-weight: 600;
          color: var(--text-muted);
        }

        .service-card-title {
          font-size: var(--fs-card);
          margin-bottom: 0.65rem;
          color: var(--text-dark);
          font-weight: 700;
        }

        .service-card-desc {
          font-size: var(--fs-body);
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
          font-size: var(--fs-small);
          cursor: pointer;
          padding: 0;
          transition: var(--transition-fast);
          width: fit-content;
        }

        .service-card-btn:hover {
          gap: 0.65rem;
          color: var(--primary-hover);
        }

        /* Explore More Banner */
        .explore-more-banner {
          background: linear-gradient(135deg, var(--primary) 0%, #3B1AD8 100%);
          border-radius: var(--radius-lg);
          padding: 2.75rem 3rem;
          box-shadow: 0 18px 50px rgba(90, 56, 253, 0.28);
        }

        .explore-more-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
        }

        .explore-more-text {
          flex: 1;
        }

        .explore-more-title {
          font-size: var(--fs-section);
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }

        .explore-more-desc {
          font-size: var(--fs-body);
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          max-width: 600px;
        }

        .explore-more-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .explore-tag {
          padding: 0.3rem 0.85rem;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          color: #FFFFFF;
          backdrop-filter: blur(4px);
        }

        .explore-more-btn {
          background: #FFFFFF !important;
          color: var(--primary) !important;
          flex-shrink: 0;
          font-weight: 700;
          font-size: var(--fs-body);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.18);
          white-space: nowrap;
        }

        .explore-more-btn:hover {
          background: #F3E8FF !important;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .explore-more-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .explore-more-banner {
            padding: 2rem 1.5rem;
          }
          .explore-more-title {
            font-size: 1.4rem;
          }
          .explore-more-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function J1({onOpenContact:e}){const t=[{icon:u.jsx(L1,{size:26}),title:"Advisory & Consulting",desc:"Expert guidance to help design, assess and improve your security and compliance programs.",img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=480&q=80&auto=format&fit=crop"},{icon:u.jsx(Sm,{size:26}),title:"Managed Services",desc:"Ongoing support to operate compliance, risk and assurance activities day-to-day.",img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=480&q=80&auto=format&fit=crop"},{icon:u.jsx(G1,{size:26}),title:"Staff Augmentation",desc:"Skilled professionals embedded within your team on a flexible, on-demand basis.",img:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=480&q=80&auto=format&fit=crop"},{icon:u.jsx(vc,{size:26}),title:"Dedicated Offshore Teams",desc:"Scalable, cost-effective teams aligned to your business objectives globally.",img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=480&q=80&auto=format&fit=crop"}];return u.jsxs("section",{className:"delivery-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("div",{className:"badge-pill",children:u.jsx("span",{children:"How We Deliver"})}),u.jsx("h2",{children:"Delivery Model"}),u.jsx("p",{children:"Flexible engagement structures designed to align with your organization's operating environment and objectives."})]}),u.jsx("div",{className:"delivery-grid",children:t.map((n,r)=>u.jsxs("div",{className:"delivery-card glass-card",children:[u.jsxs("div",{className:"delivery-card-img-wrap",children:[u.jsx("img",{src:n.img,alt:n.title,className:"delivery-card-img",loading:"lazy"}),u.jsx("div",{className:"delivery-img-overlay"}),u.jsx("div",{className:"delivery-icon-box",children:n.icon})]}),u.jsxs("div",{className:"delivery-card-body",children:[u.jsx("h3",{className:"delivery-title",children:n.title}),u.jsx("p",{className:"delivery-desc",children:n.desc}),u.jsxs("button",{className:"delivery-link",onClick:()=>e(n.title),children:["Explore Model ",u.jsx(Hn,{size:14})]})]})]},r))})]}),u.jsx("style",{children:`
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
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: var(--transition-normal);
        }

        .delivery-card:hover {
          border-color: var(--primary);
          box-shadow: 0 16px 40px rgba(90, 56, 253, 0.14);
          transform: translateY(-4px);
        }

        /* Photo header */
        .delivery-card-img-wrap {
          position: relative;
          width: 100%;
          height: 145px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .delivery-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .delivery-card:hover .delivery-card-img {
          transform: scale(1.06);
        }

        .delivery-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(90, 56, 253, 0.3) 0%,
            rgba(15, 23, 42, 0.6) 100%
          );
        }

        .delivery-icon-box {
          position: absolute;
          bottom: 1rem;
          left: 1.1rem;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: #FFFFFF;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.18);
        }

        /* Card body */
        .delivery-card-body {
          padding: 1.4rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 0.6rem;
        }

        .delivery-title {
          font-size: var(--fs-card);
          color: var(--text-dark);
          margin: 0;
        }

        .delivery-desc {
          font-size: var(--fs-body);
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
          flex-grow: 1;
        }

        .delivery-link {
          background: none;
          border: none;
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 0;
          margin-top: 0.5rem;
          width: fit-content;
        }

        .delivery-link:hover {
          gap: 0.65rem;
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
      `})]})}function ey(){const[e,t]=I.useState(null),n=o=>t(a=>a===o?null:o),r=[{name:"Integrity",desc:"Guides every decision we make."},{name:"Transparency",desc:"Ensures our clients always know where they stand."},{name:"Ownership",desc:"Drives us to remain accountable for outcomes, not just activities."},{name:"Excellence",desc:"Pushes us to continually raise the standard of our work."}],i=[{key:"about",icon:u.jsx(cf,{size:22}),label:"About Gaussians",accent:"linear-gradient(135deg, #5A38FD 0%, #7C3AED 100%)",content:u.jsxs("div",{className:"panel-body-text",children:[u.jsx("p",{className:"story-text",children:"Gaussians was founded on a simple belief: every organization deserves a trusted partner who understands both the challenges of running a business and the realities of managing cybersecurity, compliance, and risk in an increasingly complex world."}),u.jsx("p",{className:"story-text",children:"We know that behind every audit, security review, compliance requirement, or customer questionnaire is a leadership team trying to grow the business, protect its reputation, earn customer trust, and make the right decisions with limited time and resources. Having worked alongside organizations at different stages of growth, we understand these pressures because we have lived them with our clients."}),u.jsx("p",{className:"story-text",children:"That understanding shapes the way we work."}),u.jsx("p",{className:"story-text",children:"At Gaussians, we do not see ourselves as an external consulting firm delivering reports and recommendations. We see ourselves as partners in our clients' journey. We work alongside leadership teams, security teams, compliance functions, auditors, and operational stakeholders to build trust, strengthen resilience, and create programs that support long-term business success."}),u.jsx("p",{className:"story-text",children:"Since our inception in 2021, we have grown from a founder-led vision into a team of dedicated professionals supporting organizations across global markets. Over the years, we have helped clients establish and mature cybersecurity, governance, risk, compliance, and assurance programs while building scalable operating models that continue to deliver value long after individual projects have concluded."})]})},{key:"special",icon:u.jsx(yc,{size:22}),label:"What Makes Gaussians Special",accent:"linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",content:u.jsxs("div",{className:"panel-body-text",children:[u.jsx("p",{className:"story-text font-semibold text-dark",children:"What makes Gaussians special is our people."}),u.jsx("p",{className:"story-text",children:"Our team brings together experienced professionals with diverse backgrounds across cybersecurity, governance, risk management, compliance, assurance, privacy, and technology advisory. Beyond technical expertise, our people are known for their curiosity, accountability, professionalism, and commitment to client success. We take pride in building teams that clients trust—not only for their knowledge, but for their ability to listen, collaborate, and deliver."}),u.jsxs("div",{className:"values-wrapper",children:[u.jsx("h4",{className:"values-heading",children:"We believe that successful partnerships are built on strong values:"}),u.jsx("div",{className:"values-grid",children:r.map((o,a)=>u.jsxs("div",{className:"value-pill",children:[u.jsx("div",{className:"value-dot"}),u.jsxs("div",{children:[u.jsxs("strong",{children:[o.name,":"]})," ",o.desc]})]},a))})]}),u.jsx("p",{className:"story-text",children:"Today, Gaussians combines strategic advisory, operational support, managed services, and specialist talent solutions to help organizations navigate change, manage risk, strengthen trust, and achieve their goals with confidence."}),u.jsx("p",{className:"story-text",style:{fontWeight:600,color:"var(--primary)",marginTop:"1rem"},children:"Our journey continues to evolve, but our purpose remains unchanged: to be the trusted partner organizations rely on when security, compliance, risk, and trust matter most."})]})},{key:"vision-mission",icon:u.jsx(Hs,{size:22}),label:"Mission and Vision",accent:"linear-gradient(135deg, #5A38FD 0%, #4322EA 100%)",content:u.jsxs("div",{className:"panel-body-mv-split",children:[u.jsxs("div",{className:"mv-card-inline mission-inline",children:[u.jsx("div",{className:"inline-badge",children:u.jsx(Hs,{size:24})}),u.jsx("h3",{children:"Mission"}),u.jsx("p",{children:"To be the trusted partner organizations rely on to strengthen security, manage risk, achieve compliance, and build lasting trust with their customers, stakeholders, and communities."})]}),u.jsxs("div",{className:"mv-card-inline vision-inline",children:[u.jsx("div",{className:"inline-badge vision-badge",children:u.jsx(z1,{size:24})}),u.jsx("h3",{children:"Vision"}),u.jsx("p",{children:"To create a world where security, compliance, and trust are not barriers to growth, but foundations for sustainable success."})]})]})},{key:"global",icon:u.jsx(vc,{size:22}),label:"Global Presence",accent:"linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",content:u.jsxs("div",{className:"panel-body-text",children:[u.jsx("p",{className:"story-text",children:"Supporting organizations across global markets with trusted expertise in cybersecurity, compliance, governance, and assurance."}),u.jsx("p",{className:"story-text",children:"Our flexible delivery model enables us to work seamlessly across regions, time zones, and operating environments through offshore, remote, hybrid, and embedded team structures—providing clients with experienced professionals, scalable support, and strong accountability."}),u.jsx("p",{className:"story-text font-semibold text-primary",style:{marginBottom:0},children:"Wherever our clients operate, our focus remains the same: strengthening trust, managing risk, and delivering outcomes."})]})},{key:"leadership",icon:u.jsx(Cm,{size:22}),label:"Leadership and Subject Matter Experts",accent:"linear-gradient(135deg, #EC4899 0%, #D946EF 100%)",content:u.jsxs("div",{className:"panel-body-text",children:[u.jsx("p",{className:"story-text",children:"Gaussians is led by experienced professionals who have spent their careers helping organizations navigate cybersecurity, compliance, governance, risk, and assurance challenges in complex and rapidly evolving business environments."}),u.jsx("p",{className:"story-text",children:"Our leadership team combines deep subject matter expertise with hands-on operational experience, having supported organizations ranging from high-growth startups to established global enterprises. Beyond advisory services, our leaders have built and scaled teams, established centers of excellence, managed large-scale compliance and risk programs, and partnered closely with business leaders to drive meaningful outcomes."}),u.jsx("p",{className:"story-text",children:"What sets our leadership apart is a commitment to staying connected to both our clients and our teams. We believe the best solutions come from understanding business realities, working collaboratively, and remaining accountable from strategy through execution."}),u.jsx("p",{className:"story-text font-semibold",style:{marginBottom:0},children:"At Gaussians, leadership is measured not only by expertise, but by the trust we earn, the people we develop, and the outcomes we help our clients achieve."})]})}];return u.jsxs("section",{id:"about",className:"about-section",children:[u.jsx("div",{className:"about-orb about-orb-1"}),u.jsx("div",{className:"about-orb about-orb-2"}),u.jsxs("div",{className:"container about-container",children:[u.jsxs("div",{className:"section-header fade-in-up about-header-block",children:[u.jsxs("div",{className:"badge-pill",children:[u.jsx(cf,{size:16}),u.jsx("span",{children:"About Gaussians"})]}),u.jsxs("h2",{className:"about-main-title",children:["Your Trusted Partner in ",u.jsx("span",{className:"about-gradient-text",children:"Security & Compliance"})]}),u.jsx("div",{className:"section-divider"}),u.jsx("p",{className:"about-subtitle",children:"Founded on a simple belief: every organization deserves a trusted partner who understands both business growth and the realities of managing security, compliance, and risk."})]}),u.jsx("div",{className:"accordion-group fade-in-up",children:i.map(o=>{const a=e===o.key;return u.jsxs("div",{className:`accordion-item ${a?"is-open":""} panel-${o.key}`,children:[u.jsxs("button",{className:"accordion-trigger",onClick:()=>n(o.key),"aria-expanded":a,children:[u.jsxs("div",{className:"accordion-trigger-left",children:[u.jsx("span",{className:"accordion-icon-box",style:{background:o.accent},children:o.icon}),u.jsx("span",{className:"accordion-label",children:o.label})]}),u.jsx(km,{size:20,className:`accordion-chevron ${a?"rotated":""}`})]}),u.jsx("div",{className:"accordion-body",children:u.jsx("div",{className:"accordion-body-inner",children:o.content})})]},o.key)})})]}),u.jsx("style",{children:`
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
          font-size: var(--fs-section);
          line-height: 1.2;
        }

        .about-gradient-text {
          background: linear-gradient(135deg, var(--primary) 0%, #A855F7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-subtitle {
          font-size: var(--fs-body);
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
          font-size: var(--fs-card);
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
          font-size: var(--fs-body);
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
          font-size: var(--fs-body);
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
          font-size: var(--fs-body);
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
          font-size: var(--fs-card);
          color: var(--text-dark);
          margin-bottom: 0.75rem;
          margin-top: 1rem;
        }

        .mv-card-inline p {
          font-size: var(--fs-body);
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
      `})]})}var Fm={exports:{}},ty="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ny=ty,ry=ny;function zm(){}function Mm(){}Mm.resetWarningCache=zm;var iy=function(){function e(r,i,o,a,l,s){if(s!==ry){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Mm,resetWarningCache:zm};return n.PropTypes=n,n};Fm.exports=iy();var oy=Fm.exports;const T=sp(oy);class Ae{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials;let r=0;for(let i=0;i<this._n&&i<32;i++){const o=n[i],a=t+o,l=Math.abs(t)<Math.abs(o)?t-(a-o):o-(a-t);l&&(n[r++]=l),t=a}return n[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let n=this._n,r,i,o,a=0;if(n>0){for(a=t[--n];n>0&&(r=a,i=t[--n],a=r+i,o=i-(a-r),!o););n>0&&(o<0&&t[n-1]<0||o>0&&t[n-1]>0)&&(i=o*2,r=a+i,i==r-a&&(a=r))}return a}}function*ay(e){for(const t of e)yield*t}function Pm(e){return Array.from(ay(e))}function ur(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n;for(var r=-1,i=Math.max(0,Math.ceil((t-e)/n))|0,o=new Array(i);++r<i;)o[r]=e+r*n;return o}var H=1e-6,Ii=1e-12,q=Math.PI,me=q/2,wa=q/4,Ue=q*2,re=180/q,W=q/180,Z=Math.abs,Rr=Math.atan,Be=Math.atan2,B=Math.cos,So=Math.ceil,Tm=Math.exp,Ws=Math.hypot,ka=Math.log,Ul=Math.pow,O=Math.sin,ht=Math.sign||function(e){return e>0?1:e<0?-1:0},Ee=Math.sqrt,wc=Math.tan;function Am(e){return e>1?0:e<-1?q:Math.acos(e)}function He(e){return e>1?me:e<-1?-me:Math.asin(e)}function df(e){return(e=O(e/2))*e}function ce(){}function Sa(e,t){e&&pf.hasOwnProperty(e.type)&&pf[e.type](e,t)}var ff={Feature:function(e,t){Sa(e.geometry,t)},FeatureCollection:function(e,t){for(var n=e.features,r=-1,i=n.length;++r<i;)Sa(n[r].geometry,t)}},pf={Sphere:function(e,t){t.sphere()},Point:function(e,t){e=e.coordinates,t.point(e[0],e[1],e[2])},MultiPoint:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)e=n[r],t.point(e[0],e[1],e[2])},LineString:function(e,t){Vs(e.coordinates,t,0)},MultiLineString:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)Vs(n[r],t,0)},Polygon:function(e,t){hf(e.coordinates,t)},MultiPolygon:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)hf(n[r],t)},GeometryCollection:function(e,t){for(var n=e.geometries,r=-1,i=n.length;++r<i;)Sa(n[r],t)}};function Vs(e,t,n){var r=-1,i=e.length-n,o;for(t.lineStart();++r<i;)o=e[r],t.point(o[0],o[1],o[2]);t.lineEnd()}function hf(e,t){var n=-1,r=e.length;for(t.polygonStart();++n<r;)Vs(e[n],t,1);t.polygonEnd()}function bt(e,t){e&&ff.hasOwnProperty(e.type)?ff[e.type](e,t):Sa(e,t)}var ba=new Ae,Na=new Ae,Rm,Im,Gs,qs,Ys,Lt={point:ce,lineStart:ce,lineEnd:ce,polygonStart:function(){ba=new Ae,Lt.lineStart=ly,Lt.lineEnd=sy},polygonEnd:function(){var e=+ba;Na.add(e<0?Ue+e:e),this.lineStart=this.lineEnd=this.point=ce},sphere:function(){Na.add(Ue)}};function ly(){Lt.point=uy}function sy(){Om(Rm,Im)}function uy(e,t){Lt.point=Om,Rm=e,Im=t,e*=W,t*=W,Gs=e,qs=B(t=t/2+wa),Ys=O(t)}function Om(e,t){e*=W,t*=W,t=t/2+wa;var n=e-Gs,r=n>=0?1:-1,i=r*n,o=B(t),a=O(t),l=Ys*a,s=qs*o+l*B(i),c=l*r*O(i);ba.add(Be(c,s)),Gs=e,qs=o,Ys=a}function cy(e){return Na=new Ae,bt(e,Lt),Na*2}function ja(e){return[Be(e[1],e[0]),He(e[2])]}function Wn(e){var t=e[0],n=e[1],r=B(n);return[r*B(t),r*O(t),O(n)]}function bo(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function _r(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Bl(e,t){e[0]+=t[0],e[1]+=t[1],e[2]+=t[2]}function No(e,t){return[e[0]*t,e[1]*t,e[2]*t]}function Ea(e){var t=Ee(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=t,e[1]/=t,e[2]/=t}var se,qe,pe,nt,Pn,Lm,Dm,yr,hi,un,tn,Wt={point:Qs,lineStart:mf,lineEnd:gf,polygonStart:function(){Wt.point=Um,Wt.lineStart=dy,Wt.lineEnd=fy,hi=new Ae,Lt.polygonStart()},polygonEnd:function(){Lt.polygonEnd(),Wt.point=Qs,Wt.lineStart=mf,Wt.lineEnd=gf,ba<0?(se=-(pe=180),qe=-(nt=90)):hi>H?nt=90:hi<-H&&(qe=-90),tn[0]=se,tn[1]=pe},sphere:function(){se=-(pe=180),qe=-(nt=90)}};function Qs(e,t){un.push(tn=[se=e,pe=e]),t<qe&&(qe=t),t>nt&&(nt=t)}function $m(e,t){var n=Wn([e*W,t*W]);if(yr){var r=_r(yr,n),i=[r[1],-r[0],0],o=_r(i,r);Ea(o),o=ja(o);var a=e-Pn,l=a>0?1:-1,s=o[0]*re*l,c,d=Z(a)>180;d^(l*Pn<s&&s<l*e)?(c=o[1]*re,c>nt&&(nt=c)):(s=(s+360)%360-180,d^(l*Pn<s&&s<l*e)?(c=-o[1]*re,c<qe&&(qe=c)):(t<qe&&(qe=t),t>nt&&(nt=t))),d?e<Pn?tt(se,e)>tt(se,pe)&&(pe=e):tt(e,pe)>tt(se,pe)&&(se=e):pe>=se?(e<se&&(se=e),e>pe&&(pe=e)):e>Pn?tt(se,e)>tt(se,pe)&&(pe=e):tt(e,pe)>tt(se,pe)&&(se=e)}else un.push(tn=[se=e,pe=e]);t<qe&&(qe=t),t>nt&&(nt=t),yr=n,Pn=e}function mf(){Wt.point=$m}function gf(){tn[0]=se,tn[1]=pe,Wt.point=Qs,yr=null}function Um(e,t){if(yr){var n=e-Pn;hi.add(Z(n)>180?n+(n>0?360:-360):n)}else Lm=e,Dm=t;Lt.point(e,t),$m(e,t)}function dy(){Lt.lineStart()}function fy(){Um(Lm,Dm),Lt.lineEnd(),Z(hi)>H&&(se=-(pe=180)),tn[0]=se,tn[1]=pe,yr=null}function tt(e,t){return(t-=e)<0?t+360:t}function py(e,t){return e[0]-t[0]}function vf(e,t){return e[0]<=e[1]?e[0]<=t&&t<=e[1]:t<e[0]||e[1]<t}function hy(e){var t,n,r,i,o,a,l;if(nt=pe=-(se=qe=1/0),un=[],bt(e,Wt),n=un.length){for(un.sort(py),t=1,r=un[0],o=[r];t<n;++t)i=un[t],vf(r,i[0])||vf(r,i[1])?(tt(r[0],i[1])>tt(r[0],r[1])&&(r[1]=i[1]),tt(i[0],r[1])>tt(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-1/0,n=o.length-1,t=0,r=o[n];t<=n;r=i,++t)i=o[t],(l=tt(r[1],i[0]))>a&&(a=l,se=i[0],pe=r[1])}return un=tn=null,se===1/0||qe===1/0?[[NaN,NaN],[NaN,NaN]]:[[se,qe],[pe,nt]]}var Zr,_a,Ca,Fa,za,Ma,Pa,Ta,Xs,Zs,Ks,Bm,Hm,Oe,Le,De,Nt={sphere:ce,point:kc,lineStart:yf,lineEnd:xf,polygonStart:function(){Nt.lineStart=vy,Nt.lineEnd=yy},polygonEnd:function(){Nt.lineStart=yf,Nt.lineEnd=xf}};function kc(e,t){e*=W,t*=W;var n=B(t);Ki(n*B(e),n*O(e),O(t))}function Ki(e,t,n){++Zr,Ca+=(e-Ca)/Zr,Fa+=(t-Fa)/Zr,za+=(n-za)/Zr}function yf(){Nt.point=my}function my(e,t){e*=W,t*=W;var n=B(t);Oe=n*B(e),Le=n*O(e),De=O(t),Nt.point=gy,Ki(Oe,Le,De)}function gy(e,t){e*=W,t*=W;var n=B(t),r=n*B(e),i=n*O(e),o=O(t),a=Be(Ee((a=Le*o-De*i)*a+(a=De*r-Oe*o)*a+(a=Oe*i-Le*r)*a),Oe*r+Le*i+De*o);_a+=a,Ma+=a*(Oe+(Oe=r)),Pa+=a*(Le+(Le=i)),Ta+=a*(De+(De=o)),Ki(Oe,Le,De)}function xf(){Nt.point=kc}function vy(){Nt.point=xy}function yy(){Wm(Bm,Hm),Nt.point=kc}function xy(e,t){Bm=e,Hm=t,e*=W,t*=W,Nt.point=Wm;var n=B(t);Oe=n*B(e),Le=n*O(e),De=O(t),Ki(Oe,Le,De)}function Wm(e,t){e*=W,t*=W;var n=B(t),r=n*B(e),i=n*O(e),o=O(t),a=Le*o-De*i,l=De*r-Oe*o,s=Oe*i-Le*r,c=Ws(a,l,s),d=He(c),f=c&&-d/c;Xs.add(f*a),Zs.add(f*l),Ks.add(f*s),_a+=d,Ma+=d*(Oe+(Oe=r)),Pa+=d*(Le+(Le=i)),Ta+=d*(De+(De=o)),Ki(Oe,Le,De)}function wy(e){Zr=_a=Ca=Fa=za=Ma=Pa=Ta=0,Xs=new Ae,Zs=new Ae,Ks=new Ae,bt(e,Nt);var t=+Xs,n=+Zs,r=+Ks,i=Ws(t,n,r);return i<Ii&&(t=Ma,n=Pa,r=Ta,_a<H&&(t=Ca,n=Fa,r=za),i=Ws(t,n,r),i<Ii)?[NaN,NaN]:[Be(n,t)*re,He(r/i)*re]}function Xn(e){return function(){return e}}function Js(e,t){function n(r,i){return r=e(r,i),t(r[0],r[1])}return e.invert&&t.invert&&(n.invert=function(r,i){return r=t.invert(r,i),r&&e.invert(r[0],r[1])}),n}function eu(e,t){return[Z(e)>q?e+Math.round(-e/Ue)*Ue:e,t]}eu.invert=eu;function Sc(e,t,n){return(e%=Ue)?t||n?Js(kf(e),Sf(t,n)):kf(e):t||n?Sf(t,n):eu}function wf(e){return function(t,n){return t+=e,[t>q?t-Ue:t<-q?t+Ue:t,n]}}function kf(e){var t=wf(e);return t.invert=wf(-e),t}function Sf(e,t){var n=B(e),r=O(e),i=B(t),o=O(t);function a(l,s){var c=B(s),d=B(l)*c,f=O(l)*c,p=O(s),h=p*n+d*r;return[Be(f*i-h*o,d*n-p*r),He(h*i+f*o)]}return a.invert=function(l,s){var c=B(s),d=B(l)*c,f=O(l)*c,p=O(s),h=p*i-f*o;return[Be(f*i+p*o,d*n+h*r),He(h*n-d*r)]},a}function Vm(e){e=Sc(e[0]*W,e[1]*W,e.length>2?e[2]*W:0);function t(n){return n=e(n[0]*W,n[1]*W),n[0]*=re,n[1]*=re,n}return t.invert=function(n){return n=e.invert(n[0]*W,n[1]*W),n[0]*=re,n[1]*=re,n},t}function Gm(e,t,n,r,i,o){if(n){var a=B(t),l=O(t),s=r*n;i==null?(i=t+r*Ue,o=t-s/2):(i=bf(a,i),o=bf(a,o),(r>0?i<o:i>o)&&(i+=r*Ue));for(var c,d=i;r>0?d>o:d<o;d-=s)c=ja([a,-l*B(d),-l*O(d)]),e.point(c[0],c[1])}}function bf(e,t){t=Wn(t),t[0]-=e,Ea(t);var n=Am(-t[1]);return((-t[2]<0?-n:n)+Ue-H)%Ue}function ky(){var e=Xn([0,0]),t=Xn(90),n=Xn(6),r,i,o={point:a};function a(s,c){r.push(s=i(s,c)),s[0]*=re,s[1]*=re}function l(){var s=e.apply(this,arguments),c=t.apply(this,arguments)*W,d=n.apply(this,arguments)*W;return r=[],i=Sc(-s[0]*W,-s[1]*W,0).invert,Gm(o,c,d,1),s={type:"Polygon",coordinates:[r]},r=i=null,s}return l.center=function(s){return arguments.length?(e=typeof s=="function"?s:Xn([+s[0],+s[1]]),l):e},l.radius=function(s){return arguments.length?(t=typeof s=="function"?s:Xn(+s),l):t},l.precision=function(s){return arguments.length?(n=typeof s=="function"?s:Xn(+s),l):n},l}function qm(){var e=[],t;return{point:function(n,r,i){t.push([n,r,i])},lineStart:function(){e.push(t=[])},lineEnd:ce,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var n=e;return e=[],t=null,n}}}function Ho(e,t){return Z(e[0]-t[0])<H&&Z(e[1]-t[1])<H}function jo(e,t,n,r){this.x=e,this.z=t,this.o=n,this.e=r,this.v=!1,this.n=this.p=null}function Ym(e,t,n,r,i){var o=[],a=[],l,s;if(e.forEach(function(y){if(!((w=y.length-1)<=0)){var w,j=y[0],g=y[w],v;if(Ho(j,g)){if(!j[2]&&!g[2]){for(i.lineStart(),l=0;l<w;++l)i.point((j=y[l])[0],j[1]);i.lineEnd();return}g[0]+=2*H}o.push(v=new jo(j,y,null,!0)),a.push(v.o=new jo(j,null,v,!1)),o.push(v=new jo(g,y,null,!1)),a.push(v.o=new jo(g,null,v,!0))}}),!!o.length){for(a.sort(t),Nf(o),Nf(a),l=0,s=a.length;l<s;++l)a[l].e=n=!n;for(var c=o[0],d,f;;){for(var p=c,h=!0;p.v;)if((p=p.n)===c)return;d=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(h)for(l=0,s=d.length;l<s;++l)i.point((f=d[l])[0],f[1]);else r(p.x,p.n.x,1,i);p=p.n}else{if(h)for(d=p.p.z,l=d.length-1;l>=0;--l)i.point((f=d[l])[0],f[1]);else r(p.x,p.p.x,-1,i);p=p.p}p=p.o,d=p.z,h=!h}while(!p.v);i.lineEnd()}}}function Nf(e){if(t=e.length){for(var t,n=0,r=e[0],i;++n<t;)r.n=i=e[n],i.p=r,r=i;r.n=i=e[0],i.p=r}}function Hl(e){return Z(e[0])<=q?e[0]:ht(e[0])*((Z(e[0])+q)%Ue-q)}function Qm(e,t){var n=Hl(t),r=t[1],i=O(r),o=[O(n),-B(n),0],a=0,l=0,s=new Ae;i===1?r=me+H:i===-1&&(r=-me-H);for(var c=0,d=e.length;c<d;++c)if(p=(f=e[c]).length)for(var f,p,h=f[p-1],y=Hl(h),w=h[1]/2+wa,j=O(w),g=B(w),v=0;v<p;++v,y=x,j=N,g=C,h=m){var m=f[v],x=Hl(m),k=m[1]/2+wa,N=O(k),C=B(k),z=x-y,D=z>=0?1:-1,A=D*z,$=A>q,Y=j*N;if(s.add(Be(Y*D*O(A),g*C+Y*B(A))),a+=$?z+D*Ue:z,$^y>=n^x>=n){var K=_r(Wn(h),Wn(m));Ea(K);var S=_r(o,K);Ea(S);var b=($^z>=0?-1:1)*He(S[2]);(r>b||r===b&&(K[0]||K[1]))&&(l+=$^z>=0?1:-1)}}return(a<-H||a<H&&s<-Ii)^l&1}function Xm(e,t,n,r){return function(i){var o=t(i),a=qm(),l=t(a),s=!1,c,d,f,p={point:h,lineStart:w,lineEnd:j,polygonStart:function(){p.point=g,p.lineStart=v,p.lineEnd=m,d=[],c=[]},polygonEnd:function(){p.point=h,p.lineStart=w,p.lineEnd=j,d=Pm(d);var x=Qm(c,r);d.length?(s||(i.polygonStart(),s=!0),Ym(d,by,x,n,i)):x&&(s||(i.polygonStart(),s=!0),i.lineStart(),n(null,null,1,i),i.lineEnd()),s&&(i.polygonEnd(),s=!1),d=c=null},sphere:function(){i.polygonStart(),i.lineStart(),n(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function h(x,k){e(x,k)&&i.point(x,k)}function y(x,k){o.point(x,k)}function w(){p.point=y,o.lineStart()}function j(){p.point=h,o.lineEnd()}function g(x,k){f.push([x,k]),l.point(x,k)}function v(){l.lineStart(),f=[]}function m(){g(f[0][0],f[0][1]),l.lineEnd();var x=l.clean(),k=a.result(),N,C=k.length,z,D,A;if(f.pop(),c.push(f),f=null,!!C){if(x&1){if(D=k[0],(z=D.length-1)>0){for(s||(i.polygonStart(),s=!0),i.lineStart(),N=0;N<z;++N)i.point((A=D[N])[0],A[1]);i.lineEnd()}return}C>1&&x&2&&k.push(k.pop().concat(k.shift())),d.push(k.filter(Sy))}}return p}}function Sy(e){return e.length>1}function by(e,t){return((e=e.x)[0]<0?e[1]-me-H:me-e[1])-((t=t.x)[0]<0?t[1]-me-H:me-t[1])}const tu=Xm(function(){return!0},Ny,Ey,[-q,-me]);function Ny(e){var t=NaN,n=NaN,r=NaN,i;return{lineStart:function(){e.lineStart(),i=1},point:function(o,a){var l=o>0?q:-q,s=Z(o-t);Z(s-q)<H?(e.point(t,n=(n+a)/2>0?me:-me),e.point(r,n),e.lineEnd(),e.lineStart(),e.point(l,n),e.point(o,n),i=0):r!==l&&s>=q&&(Z(t-r)<H&&(t-=r*H),Z(o-l)<H&&(o-=l*H),n=jy(t,n,o,a),e.point(r,n),e.lineEnd(),e.lineStart(),e.point(l,n),i=0),e.point(t=o,n=a),r=l},lineEnd:function(){e.lineEnd(),t=n=NaN},clean:function(){return 2-i}}}function jy(e,t,n,r){var i,o,a=O(e-n);return Z(a)>H?Rr((O(t)*(o=B(r))*O(n)-O(r)*(i=B(t))*O(e))/(i*o*a)):(t+r)/2}function Ey(e,t,n,r){var i;if(e==null)i=n*me,r.point(-q,i),r.point(0,i),r.point(q,i),r.point(q,0),r.point(q,-i),r.point(0,-i),r.point(-q,-i),r.point(-q,0),r.point(-q,i);else if(Z(e[0]-t[0])>H){var o=e[0]<t[0]?q:-q;i=n*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(t[0],t[1])}function Zm(e){var t=B(e),n=6*W,r=t>0,i=Z(t)>H;function o(d,f,p,h){Gm(h,e,n,p,d,f)}function a(d,f){return B(d)*B(f)>t}function l(d){var f,p,h,y,w;return{lineStart:function(){y=h=!1,w=1},point:function(j,g){var v=[j,g],m,x=a(j,g),k=r?x?0:c(j,g):x?c(j+(j<0?q:-q),g):0;if(!f&&(y=h=x)&&d.lineStart(),x!==h&&(m=s(f,v),(!m||Ho(f,m)||Ho(v,m))&&(v[2]=1)),x!==h)w=0,x?(d.lineStart(),m=s(v,f),d.point(m[0],m[1])):(m=s(f,v),d.point(m[0],m[1],2),d.lineEnd()),f=m;else if(i&&f&&r^x){var N;!(k&p)&&(N=s(v,f,!0))&&(w=0,r?(d.lineStart(),d.point(N[0][0],N[0][1]),d.point(N[1][0],N[1][1]),d.lineEnd()):(d.point(N[1][0],N[1][1]),d.lineEnd(),d.lineStart(),d.point(N[0][0],N[0][1],3)))}x&&(!f||!Ho(f,v))&&d.point(v[0],v[1]),f=v,h=x,p=k},lineEnd:function(){h&&d.lineEnd(),f=null},clean:function(){return w|(y&&h)<<1}}}function s(d,f,p){var h=Wn(d),y=Wn(f),w=[1,0,0],j=_r(h,y),g=bo(j,j),v=j[0],m=g-v*v;if(!m)return!p&&d;var x=t*g/m,k=-t*v/m,N=_r(w,j),C=No(w,x),z=No(j,k);Bl(C,z);var D=N,A=bo(C,D),$=bo(D,D),Y=A*A-$*(bo(C,C)-1);if(!(Y<0)){var K=Ee(Y),S=No(D,(-A-K)/$);if(Bl(S,C),S=ja(S),!p)return S;var b=d[0],E=f[0],R=d[1],_=f[1],F;E<b&&(F=b,b=E,E=F);var P=E-b,U=Z(P-q)<H,V=U||P<H;if(!U&&_<R&&(F=R,R=_,_=F),V?U?R+_>0^S[1]<(Z(S[0]-b)<H?R:_):R<=S[1]&&S[1]<=_:P>q^(b<=S[0]&&S[0]<=E)){var ee=No(D,(-A+K)/$);return Bl(ee,C),[S,ja(ee)]}}}function c(d,f){var p=r?e:q-e,h=0;return d<-p?h|=1:d>p&&(h|=2),f<-p?h|=4:f>p&&(h|=8),h}return Xm(a,l,o,r?[0,-e]:[-q,e-q])}function _y(e,t,n,r,i,o){var a=e[0],l=e[1],s=t[0],c=t[1],d=0,f=1,p=s-a,h=c-l,y;if(y=n-a,!(!p&&y>0)){if(y/=p,p<0){if(y<d)return;y<f&&(f=y)}else if(p>0){if(y>f)return;y>d&&(d=y)}if(y=i-a,!(!p&&y<0)){if(y/=p,p<0){if(y>f)return;y>d&&(d=y)}else if(p>0){if(y<d)return;y<f&&(f=y)}if(y=r-l,!(!h&&y>0)){if(y/=h,h<0){if(y<d)return;y<f&&(f=y)}else if(h>0){if(y>f)return;y>d&&(d=y)}if(y=o-l,!(!h&&y<0)){if(y/=h,h<0){if(y>f)return;y>d&&(d=y)}else if(h>0){if(y<d)return;y<f&&(f=y)}return d>0&&(e[0]=a+d*p,e[1]=l+d*h),f<1&&(t[0]=a+f*p,t[1]=l+f*h),!0}}}}}var Kr=1e9,Eo=-Kr;function cl(e,t,n,r){function i(c,d){return e<=c&&c<=n&&t<=d&&d<=r}function o(c,d,f,p){var h=0,y=0;if(c==null||(h=a(c,f))!==(y=a(d,f))||s(c,d)<0^f>0)do p.point(h===0||h===3?e:n,h>1?r:t);while((h=(h+f+4)%4)!==y);else p.point(d[0],d[1])}function a(c,d){return Z(c[0]-e)<H?d>0?0:3:Z(c[0]-n)<H?d>0?2:1:Z(c[1]-t)<H?d>0?1:0:d>0?3:2}function l(c,d){return s(c.x,d.x)}function s(c,d){var f=a(c,1),p=a(d,1);return f!==p?f-p:f===0?d[1]-c[1]:f===1?c[0]-d[0]:f===2?c[1]-d[1]:d[0]-c[0]}return function(c){var d=c,f=qm(),p,h,y,w,j,g,v,m,x,k,N,C={point:z,lineStart:Y,lineEnd:K,polygonStart:A,polygonEnd:$};function z(b,E){i(b,E)&&d.point(b,E)}function D(){for(var b=0,E=0,R=h.length;E<R;++E)for(var _=h[E],F=1,P=_.length,U=_[0],V,ee,X=U[0],ne=U[1];F<P;++F)V=X,ee=ne,U=_[F],X=U[0],ne=U[1],ee<=r?ne>r&&(X-V)*(r-ee)>(ne-ee)*(e-V)&&++b:ne<=r&&(X-V)*(r-ee)<(ne-ee)*(e-V)&&--b;return b}function A(){d=f,p=[],h=[],N=!0}function $(){var b=D(),E=N&&b,R=(p=Pm(p)).length;(E||R)&&(c.polygonStart(),E&&(c.lineStart(),o(null,null,1,c),c.lineEnd()),R&&Ym(p,l,b,o,c),c.polygonEnd()),d=c,p=h=y=null}function Y(){C.point=S,h&&h.push(y=[]),k=!0,x=!1,v=m=NaN}function K(){p&&(S(w,j),g&&x&&f.rejoin(),p.push(f.result())),C.point=z,x&&d.lineEnd()}function S(b,E){var R=i(b,E);if(h&&y.push([b,E]),k)w=b,j=E,g=R,k=!1,R&&(d.lineStart(),d.point(b,E));else if(R&&x)d.point(b,E);else{var _=[v=Math.max(Eo,Math.min(Kr,v)),m=Math.max(Eo,Math.min(Kr,m))],F=[b=Math.max(Eo,Math.min(Kr,b)),E=Math.max(Eo,Math.min(Kr,E))];_y(_,F,e,t,n,r)?(x||(d.lineStart(),d.point(_[0],_[1])),d.point(F[0],F[1]),R||d.lineEnd(),N=!1):R&&(d.lineStart(),d.point(b,E),N=!1)}v=b,m=E,x=R}return C}}function Cy(){var e=0,t=0,n=960,r=500,i,o,a;return a={stream:function(l){return i&&o===l?i:i=cl(e,t,n,r)(o=l)},extent:function(l){return arguments.length?(e=+l[0][0],t=+l[0][1],n=+l[1][0],r=+l[1][1],i=o=null,a):[[e,t],[n,r]]}}}var nu,ru,Wo,Vo,Cr={sphere:ce,point:ce,lineStart:Fy,lineEnd:ce,polygonStart:ce,polygonEnd:ce};function Fy(){Cr.point=My,Cr.lineEnd=zy}function zy(){Cr.point=Cr.lineEnd=ce}function My(e,t){e*=W,t*=W,ru=e,Wo=O(t),Vo=B(t),Cr.point=Py}function Py(e,t){e*=W,t*=W;var n=O(t),r=B(t),i=Z(e-ru),o=B(i),a=O(i),l=r*a,s=Vo*n-Wo*r*o,c=Wo*n+Vo*r*o;nu.add(Be(Ee(l*l+s*s),c)),ru=e,Wo=n,Vo=r}function Km(e){return nu=new Ae,bt(e,Cr),+nu}var iu=[null,null],Ty={type:"LineString",coordinates:iu};function Aa(e,t){return iu[0]=e,iu[1]=t,Km(Ty)}var jf={Feature:function(e,t){return Ra(e.geometry,t)},FeatureCollection:function(e,t){for(var n=e.features,r=-1,i=n.length;++r<i;)if(Ra(n[r].geometry,t))return!0;return!1}},Ef={Sphere:function(){return!0},Point:function(e,t){return _f(e.coordinates,t)},MultiPoint:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)if(_f(n[r],t))return!0;return!1},LineString:function(e,t){return Cf(e.coordinates,t)},MultiLineString:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)if(Cf(n[r],t))return!0;return!1},Polygon:function(e,t){return Ff(e.coordinates,t)},MultiPolygon:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)if(Ff(n[r],t))return!0;return!1},GeometryCollection:function(e,t){for(var n=e.geometries,r=-1,i=n.length;++r<i;)if(Ra(n[r],t))return!0;return!1}};function Ra(e,t){return e&&Ef.hasOwnProperty(e.type)?Ef[e.type](e,t):!1}function _f(e,t){return Aa(e,t)===0}function Cf(e,t){for(var n,r,i,o=0,a=e.length;o<a;o++){if(r=Aa(e[o],t),r===0||o>0&&(i=Aa(e[o],e[o-1]),i>0&&n<=i&&r<=i&&(n+r-i)*(1-Math.pow((n-r)/i,2))<Ii*i))return!0;n=r}return!1}function Ff(e,t){return!!Qm(e.map(Ay),Jm(t))}function Ay(e){return e=e.map(Jm),e.pop(),e}function Jm(e){return[e[0]*W,e[1]*W]}function Ry(e,t){return(e&&jf.hasOwnProperty(e.type)?jf[e.type]:Ra)(e,t)}function zf(e,t,n){var r=ur(e,t-H,n).concat(t);return function(i){return r.map(function(o){return[i,o]})}}function Mf(e,t,n){var r=ur(e,t-H,n).concat(t);return function(i){return r.map(function(o){return[o,i]})}}function bc(){var e,t,n,r,i,o,a,l,s=10,c=s,d=90,f=360,p,h,y,w,j=2.5;function g(){return{type:"MultiLineString",coordinates:v()}}function v(){return ur(So(r/d)*d,n,d).map(y).concat(ur(So(l/f)*f,a,f).map(w)).concat(ur(So(t/s)*s,e,s).filter(function(m){return Z(m%d)>H}).map(p)).concat(ur(So(o/c)*c,i,c).filter(function(m){return Z(m%f)>H}).map(h))}return g.lines=function(){return v().map(function(m){return{type:"LineString",coordinates:m}})},g.outline=function(){return{type:"Polygon",coordinates:[y(r).concat(w(a).slice(1),y(n).reverse().slice(1),w(l).reverse().slice(1))]}},g.extent=function(m){return arguments.length?g.extentMajor(m).extentMinor(m):g.extentMinor()},g.extentMajor=function(m){return arguments.length?(r=+m[0][0],n=+m[1][0],l=+m[0][1],a=+m[1][1],r>n&&(m=r,r=n,n=m),l>a&&(m=l,l=a,a=m),g.precision(j)):[[r,l],[n,a]]},g.extentMinor=function(m){return arguments.length?(t=+m[0][0],e=+m[1][0],o=+m[0][1],i=+m[1][1],t>e&&(m=t,t=e,e=m),o>i&&(m=o,o=i,i=m),g.precision(j)):[[t,o],[e,i]]},g.step=function(m){return arguments.length?g.stepMajor(m).stepMinor(m):g.stepMinor()},g.stepMajor=function(m){return arguments.length?(d=+m[0],f=+m[1],g):[d,f]},g.stepMinor=function(m){return arguments.length?(s=+m[0],c=+m[1],g):[s,c]},g.precision=function(m){return arguments.length?(j=+m,p=zf(o,i,90),h=Mf(t,e,j),y=zf(l,a,90),w=Mf(r,n,j),g):j},g.extentMajor([[-180,-90+H],[180,90-H]]).extentMinor([[-180,-80-H],[180,80+H]])}function Iy(){return bc()()}function Oy(e,t){var n=e[0]*W,r=e[1]*W,i=t[0]*W,o=t[1]*W,a=B(r),l=O(r),s=B(o),c=O(o),d=a*B(n),f=a*O(n),p=s*B(i),h=s*O(i),y=2*He(Ee(df(o-r)+a*s*df(i-n))),w=O(y),j=y?function(g){var v=O(g*=y)/w,m=O(y-g)/w,x=m*d+v*p,k=m*f+v*h,N=m*l+v*c;return[Be(k,x)*re,Be(N,Ee(x*x+k*k))*re]}:function(){return[n*re,r*re]};return j.distance=y,j}const Oi=e=>e;var Wl=new Ae,ou=new Ae,e0,t0,au,lu,Vt={point:ce,lineStart:ce,lineEnd:ce,polygonStart:function(){Vt.lineStart=Ly,Vt.lineEnd=$y},polygonEnd:function(){Vt.lineStart=Vt.lineEnd=Vt.point=ce,Wl.add(Z(ou)),ou=new Ae},result:function(){var e=Wl/2;return Wl=new Ae,e}};function Ly(){Vt.point=Dy}function Dy(e,t){Vt.point=n0,e0=au=e,t0=lu=t}function n0(e,t){ou.add(lu*e-au*t),au=e,lu=t}function $y(){n0(e0,t0)}var Fr=1/0,Ia=Fr,Li=-Fr,Oa=Li,La={point:Uy,lineStart:ce,lineEnd:ce,polygonStart:ce,polygonEnd:ce,result:function(){var e=[[Fr,Ia],[Li,Oa]];return Li=Oa=-(Ia=Fr=1/0),e}};function Uy(e,t){e<Fr&&(Fr=e),e>Li&&(Li=e),t<Ia&&(Ia=t),t>Oa&&(Oa=t)}var su=0,uu=0,Jr=0,Da=0,$a=0,cr=0,cu=0,du=0,ei=0,r0,i0,Pt,Tt,ft={point:Vn,lineStart:Pf,lineEnd:Tf,polygonStart:function(){ft.lineStart=Wy,ft.lineEnd=Vy},polygonEnd:function(){ft.point=Vn,ft.lineStart=Pf,ft.lineEnd=Tf},result:function(){var e=ei?[cu/ei,du/ei]:cr?[Da/cr,$a/cr]:Jr?[su/Jr,uu/Jr]:[NaN,NaN];return su=uu=Jr=Da=$a=cr=cu=du=ei=0,e}};function Vn(e,t){su+=e,uu+=t,++Jr}function Pf(){ft.point=By}function By(e,t){ft.point=Hy,Vn(Pt=e,Tt=t)}function Hy(e,t){var n=e-Pt,r=t-Tt,i=Ee(n*n+r*r);Da+=i*(Pt+e)/2,$a+=i*(Tt+t)/2,cr+=i,Vn(Pt=e,Tt=t)}function Tf(){ft.point=Vn}function Wy(){ft.point=Gy}function Vy(){o0(r0,i0)}function Gy(e,t){ft.point=o0,Vn(r0=Pt=e,i0=Tt=t)}function o0(e,t){var n=e-Pt,r=t-Tt,i=Ee(n*n+r*r);Da+=i*(Pt+e)/2,$a+=i*(Tt+t)/2,cr+=i,i=Tt*e-Pt*t,cu+=i*(Pt+e),du+=i*(Tt+t),ei+=i*3,Vn(Pt=e,Tt=t)}function a0(e){this._context=e}a0.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(e,t){switch(this._point){case 0:{this._context.moveTo(e,t),this._point=1;break}case 1:{this._context.lineTo(e,t);break}default:{this._context.moveTo(e+this._radius,t),this._context.arc(e,t,this._radius,0,Ue);break}}},result:ce};var fu=new Ae,Vl,l0,s0,ti,ni,Di={point:ce,lineStart:function(){Di.point=qy},lineEnd:function(){Vl&&u0(l0,s0),Di.point=ce},polygonStart:function(){Vl=!0},polygonEnd:function(){Vl=null},result:function(){var e=+fu;return fu=new Ae,e}};function qy(e,t){Di.point=u0,l0=ti=e,s0=ni=t}function u0(e,t){ti-=e,ni-=t,fu.add(Ee(ti*ti+ni*ni)),ti=e,ni=t}function c0(){this._string=[]}c0.prototype={_radius:4.5,_circle:Af(4.5),pointRadius:function(e){return(e=+e)!==this._radius&&(this._radius=e,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._string.push("Z"),this._point=NaN},point:function(e,t){switch(this._point){case 0:{this._string.push("M",e,",",t),this._point=1;break}case 1:{this._string.push("L",e,",",t);break}default:{this._circle==null&&(this._circle=Af(this._radius)),this._string.push("M",e,",",t,this._circle);break}}},result:function(){if(this._string.length){var e=this._string.join("");return this._string=[],e}else return null}};function Af(e){return"m0,"+e+"a"+e+","+e+" 0 1,1 0,"+-2*e+"a"+e+","+e+" 0 1,1 0,"+2*e+"z"}function d0(e,t){var n=4.5,r,i;function o(a){return a&&(typeof n=="function"&&i.pointRadius(+n.apply(this,arguments)),bt(a,r(i))),i.result()}return o.area=function(a){return bt(a,r(Vt)),Vt.result()},o.measure=function(a){return bt(a,r(Di)),Di.result()},o.bounds=function(a){return bt(a,r(La)),La.result()},o.centroid=function(a){return bt(a,r(ft)),ft.result()},o.projection=function(a){return arguments.length?(r=a==null?(e=null,Oi):(e=a).stream,o):e},o.context=function(a){return arguments.length?(i=a==null?(t=null,new c0):new a0(t=a),typeof n!="function"&&i.pointRadius(n),o):t},o.pointRadius=function(a){return arguments.length?(n=typeof a=="function"?a:(i.pointRadius(+a),+a),o):n},o.projection(e).context(t)}function Yy(e){return{stream:Ji(e)}}function Ji(e){return function(t){var n=new pu;for(var r in e)n[r]=e[r];return n.stream=t,n}}function pu(){}pu.prototype={constructor:pu,point:function(e,t){this.stream.point(e,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Nc(e,t,n){var r=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),r!=null&&e.clipExtent(null),bt(n,e.stream(La)),t(La.result()),r!=null&&e.clipExtent(r),e}function dl(e,t,n){return Nc(e,function(r){var i=t[1][0]-t[0][0],o=t[1][1]-t[0][1],a=Math.min(i/(r[1][0]-r[0][0]),o/(r[1][1]-r[0][1])),l=+t[0][0]+(i-a*(r[1][0]+r[0][0]))/2,s=+t[0][1]+(o-a*(r[1][1]+r[0][1]))/2;e.scale(150*a).translate([l,s])},n)}function jc(e,t,n){return dl(e,[[0,0],t],n)}function Ec(e,t,n){return Nc(e,function(r){var i=+t,o=i/(r[1][0]-r[0][0]),a=(i-o*(r[1][0]+r[0][0]))/2,l=-o*r[0][1];e.scale(150*o).translate([a,l])},n)}function _c(e,t,n){return Nc(e,function(r){var i=+t,o=i/(r[1][1]-r[0][1]),a=-o*r[0][0],l=(i-o*(r[1][1]+r[0][1]))/2;e.scale(150*o).translate([a,l])},n)}var Rf=16,Qy=B(30*W);function If(e,t){return+t?Zy(e,t):Xy(e)}function Xy(e){return Ji({point:function(t,n){t=e(t,n),this.stream.point(t[0],t[1])}})}function Zy(e,t){function n(r,i,o,a,l,s,c,d,f,p,h,y,w,j){var g=c-r,v=d-i,m=g*g+v*v;if(m>4*t&&w--){var x=a+p,k=l+h,N=s+y,C=Ee(x*x+k*k+N*N),z=He(N/=C),D=Z(Z(N)-1)<H||Z(o-f)<H?(o+f)/2:Be(k,x),A=e(D,z),$=A[0],Y=A[1],K=$-r,S=Y-i,b=v*K-g*S;(b*b/m>t||Z((g*K+v*S)/m-.5)>.3||a*p+l*h+s*y<Qy)&&(n(r,i,o,a,l,s,$,Y,D,x/=C,k/=C,N,w,j),j.point($,Y),n($,Y,D,x,k,N,c,d,f,p,h,y,w,j))}}return function(r){var i,o,a,l,s,c,d,f,p,h,y,w,j={point:g,lineStart:v,lineEnd:x,polygonStart:function(){r.polygonStart(),j.lineStart=k},polygonEnd:function(){r.polygonEnd(),j.lineStart=v}};function g(z,D){z=e(z,D),r.point(z[0],z[1])}function v(){f=NaN,j.point=m,r.lineStart()}function m(z,D){var A=Wn([z,D]),$=e(z,D);n(f,p,d,h,y,w,f=$[0],p=$[1],d=z,h=A[0],y=A[1],w=A[2],Rf,r),r.point(f,p)}function x(){j.point=g,r.lineEnd()}function k(){v(),j.point=N,j.lineEnd=C}function N(z,D){m(i=z,D),o=f,a=p,l=h,s=y,c=w,j.point=m}function C(){n(f,p,d,h,y,w,o,a,i,l,s,c,Rf,r),j.lineEnd=x,x()}return j}}var Ky=Ji({point:function(e,t){this.stream.point(e*W,t*W)}});function Jy(e){return Ji({point:function(t,n){var r=e(t,n);return this.stream.point(r[0],r[1])}})}function ex(e,t,n,r,i){function o(a,l){return a*=r,l*=i,[t+e*a,n-e*l]}return o.invert=function(a,l){return[(a-t)/e*r,(n-l)/e*i]},o}function Of(e,t,n,r,i,o){if(!o)return ex(e,t,n,r,i);var a=B(o),l=O(o),s=a*e,c=l*e,d=a/e,f=l/e,p=(l*n-a*t)/e,h=(l*t+a*n)/e;function y(w,j){return w*=r,j*=i,[s*w-c*j+t,n-c*w-s*j]}return y.invert=function(w,j){return[r*(d*w-f*j+p),i*(h-f*w-d*j)]},y}function Dt(e){return Cc(function(){return e})()}function Cc(e){var t,n=150,r=480,i=250,o=0,a=0,l=0,s=0,c=0,d,f=0,p=1,h=1,y=null,w=tu,j=null,g,v,m,x=Oi,k=.5,N,C,z,D,A;function $(b){return z(b[0]*W,b[1]*W)}function Y(b){return b=z.invert(b[0],b[1]),b&&[b[0]*re,b[1]*re]}$.stream=function(b){return D&&A===b?D:D=Ky(Jy(d)(w(N(x(A=b)))))},$.preclip=function(b){return arguments.length?(w=b,y=void 0,S()):w},$.postclip=function(b){return arguments.length?(x=b,j=g=v=m=null,S()):x},$.clipAngle=function(b){return arguments.length?(w=+b?Zm(y=b*W):(y=null,tu),S()):y*re},$.clipExtent=function(b){return arguments.length?(x=b==null?(j=g=v=m=null,Oi):cl(j=+b[0][0],g=+b[0][1],v=+b[1][0],m=+b[1][1]),S()):j==null?null:[[j,g],[v,m]]},$.scale=function(b){return arguments.length?(n=+b,K()):n},$.translate=function(b){return arguments.length?(r=+b[0],i=+b[1],K()):[r,i]},$.center=function(b){return arguments.length?(o=b[0]%360*W,a=b[1]%360*W,K()):[o*re,a*re]},$.rotate=function(b){return arguments.length?(l=b[0]%360*W,s=b[1]%360*W,c=b.length>2?b[2]%360*W:0,K()):[l*re,s*re,c*re]},$.angle=function(b){return arguments.length?(f=b%360*W,K()):f*re},$.reflectX=function(b){return arguments.length?(p=b?-1:1,K()):p<0},$.reflectY=function(b){return arguments.length?(h=b?-1:1,K()):h<0},$.precision=function(b){return arguments.length?(N=If(C,k=b*b),S()):Ee(k)},$.fitExtent=function(b,E){return dl($,b,E)},$.fitSize=function(b,E){return jc($,b,E)},$.fitWidth=function(b,E){return Ec($,b,E)},$.fitHeight=function(b,E){return _c($,b,E)};function K(){var b=Of(n,0,0,p,h,f).apply(null,t(o,a)),E=Of(n,r-b[0],i-b[1],p,h,f);return d=Sc(l,s,c),C=Js(t,E),z=Js(d,C),N=If(C,k),S()}function S(){return D=A=null,$}return function(){return t=e.apply(this,arguments),$.invert=t.invert&&Y,K()}}function Fc(e){var t=0,n=q/3,r=Cc(e),i=r(t,n);return i.parallels=function(o){return arguments.length?r(t=o[0]*W,n=o[1]*W):[t*re,n*re]},i}function tx(e){var t=B(e);function n(r,i){return[r*t,O(i)/t]}return n.invert=function(r,i){return[r/t,He(i*t)]},n}function f0(e,t){var n=O(e),r=(n+O(t))/2;if(Z(r)<H)return tx(e);var i=1+n*(2*r-n),o=Ee(i)/r;function a(l,s){var c=Ee(i-2*r*O(s))/r;return[c*O(l*=r),o-c*B(l)]}return a.invert=function(l,s){var c=o-s,d=Be(l,Z(c))*ht(c);return c*r<0&&(d-=q*ht(l)*ht(c)),[d/r,He((i-(l*l+c*c)*r*r)/(2*r))]},a}function Ua(){return Fc(f0).scale(155.424).center([0,33.6442])}function p0(){return Ua().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function nx(e){var t=e.length;return{point:function(n,r){for(var i=-1;++i<t;)e[i].point(n,r)},sphere:function(){for(var n=-1;++n<t;)e[n].sphere()},lineStart:function(){for(var n=-1;++n<t;)e[n].lineStart()},lineEnd:function(){for(var n=-1;++n<t;)e[n].lineEnd()},polygonStart:function(){for(var n=-1;++n<t;)e[n].polygonStart()},polygonEnd:function(){for(var n=-1;++n<t;)e[n].polygonEnd()}}}function rx(){var e,t,n=p0(),r,i=Ua().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o,a=Ua().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l,s,c={point:function(p,h){s=[p,h]}};function d(p){var h=p[0],y=p[1];return s=null,r.point(h,y),s||(o.point(h,y),s)||(l.point(h,y),s)}d.invert=function(p){var h=n.scale(),y=n.translate(),w=(p[0]-y[0])/h,j=(p[1]-y[1])/h;return(j>=.12&&j<.234&&w>=-.425&&w<-.214?i:j>=.166&&j<.234&&w>=-.214&&w<-.115?a:n).invert(p)},d.stream=function(p){return e&&t===p?e:e=nx([n.stream(t=p),i.stream(p),a.stream(p)])},d.precision=function(p){return arguments.length?(n.precision(p),i.precision(p),a.precision(p),f()):n.precision()},d.scale=function(p){return arguments.length?(n.scale(p),i.scale(p*.35),a.scale(p),d.translate(n.translate())):n.scale()},d.translate=function(p){if(!arguments.length)return n.translate();var h=n.scale(),y=+p[0],w=+p[1];return r=n.translate(p).clipExtent([[y-.455*h,w-.238*h],[y+.455*h,w+.238*h]]).stream(c),o=i.translate([y-.307*h,w+.201*h]).clipExtent([[y-.425*h+H,w+.12*h+H],[y-.214*h-H,w+.234*h-H]]).stream(c),l=a.translate([y-.205*h,w+.212*h]).clipExtent([[y-.214*h+H,w+.166*h+H],[y-.115*h-H,w+.234*h-H]]).stream(c),f()},d.fitExtent=function(p,h){return dl(d,p,h)},d.fitSize=function(p,h){return jc(d,p,h)},d.fitWidth=function(p,h){return Ec(d,p,h)},d.fitHeight=function(p,h){return _c(d,p,h)};function f(){return e=t=null,d}return d.scale(1070)}function h0(e){return function(t,n){var r=B(t),i=B(n),o=e(r*i);return o===1/0?[2,0]:[o*i*O(t),o*O(n)]}}function eo(e){return function(t,n){var r=Ee(t*t+n*n),i=e(r),o=O(i),a=B(i);return[Be(t*o,r*a),He(r&&n*o/r)]}}var zc=h0(function(e){return Ee(2/(1+e))});zc.invert=eo(function(e){return 2*He(e/2)});function ix(){return Dt(zc).scale(124.75).clipAngle(180-.001)}var Mc=h0(function(e){return(e=Am(e))&&e/O(e)});Mc.invert=eo(function(e){return e});function ox(){return Dt(Mc).scale(79.4188).clipAngle(180-.001)}function to(e,t){return[e,ka(wc((me+t)/2))]}to.invert=function(e,t){return[e,2*Rr(Tm(t))-me]};function ax(){return m0(to).scale(961/Ue)}function m0(e){var t=Dt(e),n=t.center,r=t.scale,i=t.translate,o=t.clipExtent,a=null,l,s,c;t.scale=function(f){return arguments.length?(r(f),d()):r()},t.translate=function(f){return arguments.length?(i(f),d()):i()},t.center=function(f){return arguments.length?(n(f),d()):n()},t.clipExtent=function(f){return arguments.length?(f==null?a=l=s=c=null:(a=+f[0][0],l=+f[0][1],s=+f[1][0],c=+f[1][1]),d()):a==null?null:[[a,l],[s,c]]};function d(){var f=q*r(),p=t(Vm(t.rotate()).invert([0,0]));return o(a==null?[[p[0]-f,p[1]-f],[p[0]+f,p[1]+f]]:e===to?[[Math.max(p[0]-f,a),l],[Math.min(p[0]+f,s),c]]:[[a,Math.max(p[1]-f,l)],[s,Math.min(p[1]+f,c)]])}return d()}function _o(e){return wc((me+e)/2)}function g0(e,t){var n=B(e),r=e===t?O(e):ka(n/B(t))/ka(_o(t)/_o(e)),i=n*Ul(_o(e),r)/r;if(!r)return to;function o(a,l){i>0?l<-me+H&&(l=-me+H):l>me-H&&(l=me-H);var s=i/Ul(_o(l),r);return[s*O(r*a),i-s*B(r*a)]}return o.invert=function(a,l){var s=i-l,c=ht(r)*Ee(a*a+s*s),d=Be(a,Z(s))*ht(s);return s*r<0&&(d-=q*ht(a)*ht(s)),[d/r,2*Rr(Ul(i/c,1/r))-me]},o}function lx(){return Fc(g0).scale(109.5).parallels([30,30])}function $i(e,t){return[e,t]}$i.invert=$i;function sx(){return Dt($i).scale(152.63)}function v0(e,t){var n=B(e),r=e===t?O(e):(n-B(t))/(t-e),i=n/r+e;if(Z(r)<H)return $i;function o(a,l){var s=i-l,c=r*a;return[s*O(c),i-s*B(c)]}return o.invert=function(a,l){var s=i-l,c=Be(a,Z(s))*ht(s);return s*r<0&&(c-=q*ht(a)*ht(s)),[c/r,i-ht(r)*Ee(a*a+s*s)]},o}function ux(){return Fc(v0).scale(131.154).center([0,13.9389])}var mi=1.340264,gi=-.081106,vi=893e-6,yi=.003796,Ba=Ee(3)/2,cx=12;function Pc(e,t){var n=He(Ba*O(t)),r=n*n,i=r*r*r;return[e*B(n)/(Ba*(mi+3*gi*r+i*(7*vi+9*yi*r))),n*(mi+gi*r+i*(vi+yi*r))]}Pc.invert=function(e,t){for(var n=t,r=n*n,i=r*r*r,o=0,a,l,s;o<cx&&(l=n*(mi+gi*r+i*(vi+yi*r))-t,s=mi+3*gi*r+i*(7*vi+9*yi*r),n-=a=l/s,r=n*n,i=r*r*r,!(Z(a)<Ii));++o);return[Ba*e*(mi+3*gi*r+i*(7*vi+9*yi*r))/B(n),He(O(n)/Ba)]};function dx(){return Dt(Pc).scale(177.158)}function Tc(e,t){var n=B(t),r=B(e)*n;return[n*O(e)/r,O(t)/r]}Tc.invert=eo(Rr);function fx(){return Dt(Tc).scale(144.049).clipAngle(60)}function px(){var e=1,t=0,n=0,r=1,i=1,o=0,a,l,s=null,c,d,f,p=1,h=1,y=Ji({point:function(x,k){var N=m([x,k]);this.stream.point(N[0],N[1])}}),w=Oi,j,g;function v(){return p=e*r,h=e*i,j=g=null,m}function m(x){var k=x[0]*p,N=x[1]*h;if(o){var C=N*a-k*l;k=k*a+N*l,N=C}return[k+t,N+n]}return m.invert=function(x){var k=x[0]-t,N=x[1]-n;if(o){var C=N*a+k*l;k=k*a-N*l,N=C}return[k/p,N/h]},m.stream=function(x){return j&&g===x?j:j=y(w(g=x))},m.postclip=function(x){return arguments.length?(w=x,s=c=d=f=null,v()):w},m.clipExtent=function(x){return arguments.length?(w=x==null?(s=c=d=f=null,Oi):cl(s=+x[0][0],c=+x[0][1],d=+x[1][0],f=+x[1][1]),v()):s==null?null:[[s,c],[d,f]]},m.scale=function(x){return arguments.length?(e=+x,v()):e},m.translate=function(x){return arguments.length?(t=+x[0],n=+x[1],v()):[t,n]},m.angle=function(x){return arguments.length?(o=x%360*W,l=O(o),a=B(o),v()):o*re},m.reflectX=function(x){return arguments.length?(r=x?-1:1,v()):r<0},m.reflectY=function(x){return arguments.length?(i=x?-1:1,v()):i<0},m.fitExtent=function(x,k){return dl(m,x,k)},m.fitSize=function(x,k){return jc(m,x,k)},m.fitWidth=function(x,k){return Ec(m,x,k)},m.fitHeight=function(x,k){return _c(m,x,k)},m}function Ac(e,t){var n=t*t,r=n*n;return[e*(.8707-.131979*n+r*(-.013791+r*(.003971*n-.001529*r))),t*(1.007226+n*(.015085+r*(-.044475+.028874*n-.005916*r)))]}Ac.invert=function(e,t){var n=t,r=25,i;do{var o=n*n,a=o*o;n-=i=(n*(1.007226+o*(.015085+a*(-.044475+.028874*o-.005916*a)))-t)/(1.007226+o*(.015085*3+a*(-.044475*7+.028874*9*o-.005916*11*a)))}while(Z(i)>H&&--r>0);return[e/(.8707+(o=n*n)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),n]};function hx(){return Dt(Ac).scale(175.295)}function Rc(e,t){return[B(t)*O(e),O(t)]}Rc.invert=eo(He);function mx(){return Dt(Rc).scale(249.5).clipAngle(90+H)}function Ic(e,t){var n=B(t),r=1+B(e)*n;return[n*O(e)/r,O(t)/r]}Ic.invert=eo(function(e){return 2*Rr(e)});function gx(){return Dt(Ic).scale(250).clipAngle(142)}function Oc(e,t){return[ka(wc((me+t)/2)),-e]}Oc.invert=function(e,t){return[-t,2*Rr(Tm(e))-me]};function vx(){var e=m0(Oc),t=e.center,n=e.rotate;return e.center=function(r){return arguments.length?t([-r[1],r[0]]):(r=t(),[r[1],-r[0]])},e.rotate=function(r){return arguments.length?n([r[0],r[1],r.length>2?r[2]+90:90]):(r=n(),[r[0],r[1],r[2]-90])},n([0,0,90]).scale(159.155)}const yx=Object.freeze(Object.defineProperty({__proto__:null,geoAlbers:p0,geoAlbersUsa:rx,geoArea:cy,geoAzimuthalEqualArea:ix,geoAzimuthalEqualAreaRaw:zc,geoAzimuthalEquidistant:ox,geoAzimuthalEquidistantRaw:Mc,geoBounds:hy,geoCentroid:wy,geoCircle:ky,geoClipAntimeridian:tu,geoClipCircle:Zm,geoClipExtent:Cy,geoClipRectangle:cl,geoConicConformal:lx,geoConicConformalRaw:g0,geoConicEqualArea:Ua,geoConicEqualAreaRaw:f0,geoConicEquidistant:ux,geoConicEquidistantRaw:v0,geoContains:Ry,geoDistance:Aa,geoEqualEarth:dx,geoEqualEarthRaw:Pc,geoEquirectangular:sx,geoEquirectangularRaw:$i,geoGnomonic:fx,geoGnomonicRaw:Tc,geoGraticule:bc,geoGraticule10:Iy,geoIdentity:px,geoInterpolate:Oy,geoLength:Km,geoMercator:ax,geoMercatorRaw:to,geoNaturalEarth1:hx,geoNaturalEarth1Raw:Ac,geoOrthographic:mx,geoOrthographicRaw:Rc,geoPath:d0,geoProjection:Dt,geoProjectionMutator:Cc,geoRotation:Vm,geoStereographic:gx,geoStereographicRaw:Ic,geoStream:bt,geoTransform:Yy,geoTransverseMercator:vx,geoTransverseMercatorRaw:Oc},Symbol.toStringTag,{value:"Module"}));function xx(e){return e}function wx(e){if(e==null)return xx;var t,n,r=e.scale[0],i=e.scale[1],o=e.translate[0],a=e.translate[1];return function(l,s){s||(t=n=0);var c=2,d=l.length,f=new Array(d);for(f[0]=(t+=l[0])*r+o,f[1]=(n+=l[1])*i+a;c<d;)f[c]=l[c],++c;return f}}function kx(e,t){for(var n,r=e.length,i=r-t;i<--r;)n=e[i],e[i++]=e[r],e[r]=n}function Sx(e,t){return typeof t=="string"&&(t=e.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(n){return Lf(e,n)})}:Lf(e,t)}function Lf(e,t){var n=t.id,r=t.bbox,i=t.properties==null?{}:t.properties,o=y0(e,t);return n==null&&r==null?{type:"Feature",properties:i,geometry:o}:r==null?{type:"Feature",id:n,properties:i,geometry:o}:{type:"Feature",id:n,bbox:r,properties:i,geometry:o}}function y0(e,t){var n=wx(e.transform),r=e.arcs;function i(d,f){f.length&&f.pop();for(var p=r[d<0?~d:d],h=0,y=p.length;h<y;++h)f.push(n(p[h],h));d<0&&kx(f,y)}function o(d){return n(d)}function a(d){for(var f=[],p=0,h=d.length;p<h;++p)i(d[p],f);return f.length<2&&f.push(f[0]),f}function l(d){for(var f=a(d);f.length<4;)f.push(f[0]);return f}function s(d){return d.map(l)}function c(d){var f=d.type,p;switch(f){case"GeometryCollection":return{type:f,geometries:d.geometries.map(c)};case"Point":p=o(d.coordinates);break;case"MultiPoint":p=d.coordinates.map(o);break;case"LineString":p=a(d.arcs);break;case"MultiLineString":p=d.arcs.map(a);break;case"Polygon":p=s(d.arcs);break;case"MultiPolygon":p=d.arcs.map(s);break;default:return null}return{type:f,coordinates:p}}return c(t)}function bx(e,t){var n={},r={},i={},o=[],a=-1;t.forEach(function(c,d){var f=e.arcs[c<0?~c:c],p;f.length<3&&!f[1][0]&&!f[1][1]&&(p=t[++a],t[a]=c,t[d]=p)}),t.forEach(function(c){var d=l(c),f=d[0],p=d[1],h,y;if(h=i[f])if(delete i[h.end],h.push(c),h.end=p,y=r[p]){delete r[y.start];var w=y===h?h:h.concat(y);r[w.start=h.start]=i[w.end=y.end]=w}else r[h.start]=i[h.end]=h;else if(h=r[p])if(delete r[h.start],h.unshift(c),h.start=f,y=i[f]){delete i[y.end];var j=y===h?h:y.concat(h);r[j.start=y.start]=i[j.end=h.end]=j}else r[h.start]=i[h.end]=h;else h=[c],r[h.start=f]=i[h.end=p]=h});function l(c){var d=e.arcs[c<0?~c:c],f=d[0],p;return e.transform?(p=[0,0],d.forEach(function(h){p[0]+=h[0],p[1]+=h[1]})):p=d[d.length-1],c<0?[p,f]:[f,p]}function s(c,d){for(var f in c){var p=c[f];delete d[p.start],delete p.start,delete p.end,p.forEach(function(h){n[h<0?~h:h]=1}),o.push(p)}}return s(i,r),s(r,i),t.forEach(function(c){n[c<0?~c:c]||o.push([c])}),o}function Df(e){return y0(e,Nx.apply(this,arguments))}function Nx(e,t,n){var r,i,o;if(arguments.length>1)r=jx(e,t,n);else for(i=0,r=new Array(o=e.arcs.length);i<o;++i)r[i]=i;return{type:"MultiLineString",arcs:bx(e,r)}}function jx(e,t,n){var r=[],i=[],o;function a(f){var p=f<0?~f:f;(i[p]||(i[p]=[])).push({i:f,g:o})}function l(f){f.forEach(a)}function s(f){f.forEach(l)}function c(f){f.forEach(s)}function d(f){switch(o=f,f.type){case"GeometryCollection":f.geometries.forEach(d);break;case"LineString":l(f.arcs);break;case"MultiLineString":case"Polygon":s(f.arcs);break;case"MultiPolygon":c(f.arcs);break}}return d(t),i.forEach(n==null?function(f){r.push(f[0].i)}:function(f){n(f[0].g,f[f.length-1].g)&&r.push(f[0].i)}),r}var Ex={value:()=>{}};function Lc(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Go(n)}function Go(e){this._=e}function _x(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Go.prototype=Lc.prototype={constructor:Go,on:function(e,t){var n=this._,r=_x(e+"",n),i,o=-1,a=r.length;if(arguments.length<2){for(;++o<a;)if((i=(e=r[o]).type)&&(i=Cx(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<a;)if(i=(e=r[o]).type)n[i]=$f(n[i],e.name,t);else if(t==null)for(i in n)n[i]=$f(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Go(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,o;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(t,n)}};function Cx(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function $f(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=Ex,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var hu="http://www.w3.org/1999/xhtml";const Uf={svg:"http://www.w3.org/2000/svg",xhtml:hu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function fl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Uf.hasOwnProperty(t)?{space:Uf[t],local:e}:e}function Fx(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===hu&&t.documentElement.namespaceURI===hu?t.createElement(e):t.createElementNS(n,e)}}function zx(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function x0(e){var t=fl(e);return(t.local?zx:Fx)(t)}function Mx(){}function Dc(e){return e==null?Mx:function(){return this.querySelector(e)}}function Px(e){typeof e!="function"&&(e=Dc(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],a=o.length,l=r[i]=new Array(a),s,c,d=0;d<a;++d)(s=o[d])&&(c=e.call(s,s.__data__,d,o))&&("__data__"in s&&(c.__data__=s.__data__),l[d]=c);return new Ke(r,this._parents)}function w0(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Tx(){return[]}function k0(e){return e==null?Tx:function(){return this.querySelectorAll(e)}}function Ax(e){return function(){var t=e.apply(this,arguments);return t==null?[]:w0(t)}}function Rx(e){typeof e=="function"?e=Ax(e):e=k0(e);for(var t=this._groups,n=t.length,r=[],i=[],o=0;o<n;++o)for(var a=t[o],l=a.length,s,c=0;c<l;++c)(s=a[c])&&(r.push(e.call(s,s.__data__,c,a)),i.push(s));return new Ke(r,i)}function S0(e){return function(){return this.matches(e)}}function b0(e){return function(t){return t.matches(e)}}var Ix=Array.prototype.find;function Ox(e){return function(){return Ix.call(this.children,e)}}function Lx(){return this.firstElementChild}function Dx(e){return this.select(e==null?Lx:Ox(typeof e=="function"?e:b0(e)))}var $x=Array.prototype.filter;function Ux(){return this.children}function Bx(e){return function(){return $x.call(this.children,e)}}function Hx(e){return this.selectAll(e==null?Ux:Bx(typeof e=="function"?e:b0(e)))}function Wx(e){typeof e!="function"&&(e=S0(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],a=o.length,l=r[i]=[],s,c=0;c<a;++c)(s=o[c])&&e.call(s,s.__data__,c,o)&&l.push(s);return new Ke(r,this._parents)}function N0(e){return new Array(e.length)}function Vx(){return new Ke(this._enter||this._groups.map(N0),this._parents)}function Ha(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Ha.prototype={constructor:Ha,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Gx(e){return function(){return e}}function qx(e,t,n,r,i,o){for(var a=0,l,s=t.length,c=o.length;a<c;++a)(l=t[a])?(l.__data__=o[a],r[a]=l):n[a]=new Ha(e,o[a]);for(;a<s;++a)(l=t[a])&&(i[a]=l)}function Yx(e,t,n,r,i,o,a){var l,s,c=new Map,d=t.length,f=o.length,p=new Array(d),h;for(l=0;l<d;++l)(s=t[l])&&(p[l]=h=a.call(s,s.__data__,l,t)+"",c.has(h)?i[l]=s:c.set(h,s));for(l=0;l<f;++l)h=a.call(e,o[l],l,o)+"",(s=c.get(h))?(r[l]=s,s.__data__=o[l],c.delete(h)):n[l]=new Ha(e,o[l]);for(l=0;l<d;++l)(s=t[l])&&c.get(p[l])===s&&(i[l]=s)}function Qx(e){return e.__data__}function Xx(e,t){if(!arguments.length)return Array.from(this,Qx);var n=t?Yx:qx,r=this._parents,i=this._groups;typeof e!="function"&&(e=Gx(e));for(var o=i.length,a=new Array(o),l=new Array(o),s=new Array(o),c=0;c<o;++c){var d=r[c],f=i[c],p=f.length,h=w0(e.call(d,d&&d.__data__,c,r)),y=h.length,w=l[c]=new Array(y),j=a[c]=new Array(y),g=s[c]=new Array(p);n(d,f,w,j,g,h,t);for(var v=0,m=0,x,k;v<y;++v)if(x=w[v]){for(v>=m&&(m=v+1);!(k=j[m])&&++m<y;);x._next=k||null}}return a=new Ke(a,r),a._enter=l,a._exit=s,a}function Zx(){return new Ke(this._exit||this._groups.map(N0),this._parents)}function Kx(e,t,n){var r=this.enter(),i=this,o=this.exit();return r=typeof e=="function"?e(r):r.append(e+""),t!=null&&(i=t(i)),n==null?o.remove():n(o),r&&i?r.merge(i).order():i}function Jx(e){if(!(e instanceof Ke))throw new Error("invalid merge");for(var t=this._groups,n=e._groups,r=t.length,i=n.length,o=Math.min(r,i),a=new Array(r),l=0;l<o;++l)for(var s=t[l],c=n[l],d=s.length,f=a[l]=new Array(d),p,h=0;h<d;++h)(p=s[h]||c[h])&&(f[h]=p);for(;l<r;++l)a[l]=t[l];return new Ke(a,this._parents)}function e2(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,o=r[i],a;--i>=0;)(a=r[i])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function t2(e){e||(e=n2);function t(f,p){return f&&p?e(f.__data__,p.__data__):!f-!p}for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var a=n[o],l=a.length,s=i[o]=new Array(l),c,d=0;d<l;++d)(c=a[d])&&(s[d]=c);s.sort(t)}return new Ke(i,this._parents).order()}function n2(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function r2(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function i2(){return Array.from(this)}function o2(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null}function a2(){let e=0;for(const t of this)++e;return e}function l2(){return!this.node()}function s2(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],o=0,a=i.length,l;o<a;++o)(l=i[o])&&e.call(l,l.__data__,o,i);return this}function u2(e){return function(){this.removeAttribute(e)}}function c2(e){return function(){this.removeAttributeNS(e.space,e.local)}}function d2(e,t){return function(){this.setAttribute(e,t)}}function f2(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function p2(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function h2(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function m2(e,t){var n=fl(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?c2:u2:typeof t=="function"?n.local?h2:p2:n.local?f2:d2)(n,t))}function j0(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function g2(e){return function(){this.style.removeProperty(e)}}function v2(e,t,n){return function(){this.style.setProperty(e,t,n)}}function y2(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function x2(e,t,n){return arguments.length>1?this.each((t==null?g2:typeof t=="function"?y2:v2)(e,t,n??"")):zr(this.node(),e)}function zr(e,t){return e.style.getPropertyValue(t)||j0(e).getComputedStyle(e,null).getPropertyValue(t)}function w2(e){return function(){delete this[e]}}function k2(e,t){return function(){this[e]=t}}function S2(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function b2(e,t){return arguments.length>1?this.each((t==null?w2:typeof t=="function"?S2:k2)(e,t)):this.node()[e]}function E0(e){return e.trim().split(/^|\s+/)}function $c(e){return e.classList||new _0(e)}function _0(e){this._node=e,this._names=E0(e.getAttribute("class")||"")}_0.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function C0(e,t){for(var n=$c(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function F0(e,t){for(var n=$c(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function N2(e){return function(){C0(this,e)}}function j2(e){return function(){F0(this,e)}}function E2(e,t){return function(){(t.apply(this,arguments)?C0:F0)(this,e)}}function _2(e,t){var n=E0(e+"");if(arguments.length<2){for(var r=$c(this.node()),i=-1,o=n.length;++i<o;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?E2:t?N2:j2)(n,t))}function C2(){this.textContent=""}function F2(e){return function(){this.textContent=e}}function z2(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function M2(e){return arguments.length?this.each(e==null?C2:(typeof e=="function"?z2:F2)(e)):this.node().textContent}function P2(){this.innerHTML=""}function T2(e){return function(){this.innerHTML=e}}function A2(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function R2(e){return arguments.length?this.each(e==null?P2:(typeof e=="function"?A2:T2)(e)):this.node().innerHTML}function I2(){this.nextSibling&&this.parentNode.appendChild(this)}function O2(){return this.each(I2)}function L2(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function D2(){return this.each(L2)}function $2(e){var t=typeof e=="function"?e:x0(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function U2(){return null}function B2(e,t){var n=typeof e=="function"?e:x0(e),r=t==null?U2:typeof t=="function"?t:Dc(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function H2(){var e=this.parentNode;e&&e.removeChild(this)}function W2(){return this.each(H2)}function V2(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function G2(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function q2(e){return this.select(e?G2:V2)}function Y2(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Q2(e){return function(t){e.call(this,t,this.__data__)}}function X2(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function Z2(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,o;n<i;++n)o=t[n],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):t[++r]=o;++r?t.length=r:delete this.__on}}}function K2(e,t,n){return function(){var r=this.__on,i,o=Q2(t);if(r){for(var a=0,l=r.length;a<l;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=n),i.value=t;return}}this.addEventListener(e.type,o,n),i={type:e.type,name:e.name,value:t,listener:o,options:n},r?r.push(i):this.__on=[i]}}function J2(e,t,n){var r=X2(e+""),i,o=r.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var s=0,c=l.length,d;s<c;++s)for(i=0,d=l[s];i<o;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(l=t?K2:Z2,i=0;i<o;++i)this.each(l(r[i],t,n));return this}function z0(e,t,n){var r=j0(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function ew(e,t){return function(){return z0(this,e,t)}}function tw(e,t){return function(){return z0(this,e,t.apply(this,arguments))}}function nw(e,t){return this.each((typeof t=="function"?tw:ew)(e,t))}function*rw(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length,a;i<o;++i)(a=r[i])&&(yield a)}var M0=[null];function Ke(e,t){this._groups=e,this._parents=t}function no(){return new Ke([[document.documentElement]],M0)}function iw(){return this}Ke.prototype=no.prototype={constructor:Ke,select:Px,selectAll:Rx,selectChild:Dx,selectChildren:Hx,filter:Wx,data:Xx,enter:Vx,exit:Zx,join:Kx,merge:Jx,selection:iw,order:e2,sort:t2,call:r2,nodes:i2,node:o2,size:a2,empty:l2,each:s2,attr:m2,style:x2,property:b2,classed:_2,text:M2,html:R2,raise:O2,lower:D2,append:$2,insert:B2,remove:W2,clone:q2,datum:Y2,on:J2,dispatch:nw,[Symbol.iterator]:rw};function Gt(e){return typeof e=="string"?new Ke([[document.querySelector(e)]],[document.documentElement]):new Ke([[e]],M0)}function ow(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Cn(e,t){if(e=ow(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}function mu(e){e.preventDefault(),e.stopImmediatePropagation()}function aw(e){var t=e.document.documentElement,n=Gt(e).on("dragstart.drag",mu,!0);"onselectstart"in t?n.on("selectstart.drag",mu,!0):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function lw(e,t){var n=e.document.documentElement,r=Gt(e).on("dragstart.drag",null);t&&(r.on("click.drag",mu,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function Uc(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function P0(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ro(){}var Ui=.7,Wa=1/Ui,xr="\\s*([+-]?\\d+)\\s*",Bi="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ot="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",sw=/^#([0-9a-f]{3,8})$/,uw=new RegExp("^rgb\\("+[xr,xr,xr]+"\\)$"),cw=new RegExp("^rgb\\("+[Ot,Ot,Ot]+"\\)$"),dw=new RegExp("^rgba\\("+[xr,xr,xr,Bi]+"\\)$"),fw=new RegExp("^rgba\\("+[Ot,Ot,Ot,Bi]+"\\)$"),pw=new RegExp("^hsl\\("+[Bi,Ot,Ot]+"\\)$"),hw=new RegExp("^hsla\\("+[Bi,Ot,Ot,Bi]+"\\)$"),Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Uc(ro,Hi,{copy:function(e){return Object.assign(new this.constructor,this,e)},displayable:function(){return this.rgb().displayable()},hex:Hf,formatHex:Hf,formatHsl:mw,formatRgb:Wf,toString:Wf});function Hf(){return this.rgb().formatHex()}function mw(){return T0(this).formatHsl()}function Wf(){return this.rgb().formatRgb()}function Hi(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=sw.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Vf(t):n===3?new it(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Co(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Co(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=uw.exec(e))?new it(t[1],t[2],t[3],1):(t=cw.exec(e))?new it(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=dw.exec(e))?Co(t[1],t[2],t[3],t[4]):(t=fw.exec(e))?Co(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=pw.exec(e))?Yf(t[1],t[2]/100,t[3]/100,1):(t=hw.exec(e))?Yf(t[1],t[2]/100,t[3]/100,t[4]):Bf.hasOwnProperty(e)?Vf(Bf[e]):e==="transparent"?new it(NaN,NaN,NaN,0):null}function Vf(e){return new it(e>>16&255,e>>8&255,e&255,1)}function Co(e,t,n,r){return r<=0&&(e=t=n=NaN),new it(e,t,n,r)}function gw(e){return e instanceof ro||(e=Hi(e)),e?(e=e.rgb(),new it(e.r,e.g,e.b,e.opacity)):new it}function gu(e,t,n,r){return arguments.length===1?gw(e):new it(e,t,n,r??1)}function it(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Uc(it,gu,P0(ro,{brighter:function(e){return e=e==null?Wa:Math.pow(Wa,e),new it(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?Ui:Math.pow(Ui,e),new it(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Gf,formatHex:Gf,formatRgb:qf,toString:qf}));function Gf(){return"#"+Gl(this.r)+Gl(this.g)+Gl(this.b)}function qf(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}function Gl(e){return e=Math.max(0,Math.min(255,Math.round(e)||0)),(e<16?"0":"")+e.toString(16)}function Yf(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new At(e,t,n,r)}function T0(e){if(e instanceof At)return new At(e.h,e.s,e.l,e.opacity);if(e instanceof ro||(e=Hi(e)),!e)return new At;if(e instanceof At)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),o=Math.max(t,n,r),a=NaN,l=o-i,s=(o+i)/2;return l?(t===o?a=(n-r)/l+(n<r)*6:n===o?a=(r-t)/l+2:a=(t-n)/l+4,l/=s<.5?o+i:2-o-i,a*=60):l=s>0&&s<1?0:a,new At(a,l,s,e.opacity)}function vw(e,t,n,r){return arguments.length===1?T0(e):new At(e,t,n,r??1)}function At(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Uc(At,vw,P0(ro,{brighter:function(e){return e=e==null?Wa:Math.pow(Wa,e),new At(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?Ui:Math.pow(Ui,e),new At(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new it(ql(e>=240?e-240:e+120,i,r),ql(e,i,r),ql(e<120?e+240:e-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(e===1?")":", "+e+")")}}));function ql(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const A0=e=>()=>e;function yw(e,t){return function(n){return e+n*t}}function xw(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function ww(e){return(e=+e)==1?R0:function(t,n){return n-t?xw(t,n,e):A0(isNaN(t)?n:t)}}function R0(e,t){var n=t-e;return n?yw(e,n):A0(isNaN(e)?t:e)}const Qf=function e(t){var n=ww(t);function r(i,o){var a=n((i=gu(i)).r,(o=gu(o)).r),l=n(i.g,o.g),s=n(i.b,o.b),c=R0(i.opacity,o.opacity);return function(d){return i.r=a(d),i.g=l(d),i.b=s(d),i.opacity=c(d),i+""}}return r.gamma=e,r}(1);function cn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var vu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Yl=new RegExp(vu.source,"g");function kw(e){return function(){return e}}function Sw(e){return function(t){return e(t)+""}}function bw(e,t){var n=vu.lastIndex=Yl.lastIndex=0,r,i,o,a=-1,l=[],s=[];for(e=e+"",t=t+"";(r=vu.exec(e))&&(i=Yl.exec(t));)(o=i.index)>n&&(o=t.slice(n,o),l[a]?l[a]+=o:l[++a]=o),(r=r[0])===(i=i[0])?l[a]?l[a]+=i:l[++a]=i:(l[++a]=null,s.push({i:a,x:cn(r,i)})),n=Yl.lastIndex;return n<t.length&&(o=t.slice(n),l[a]?l[a]+=o:l[++a]=o),l.length<2?s[0]?Sw(s[0].x):kw(t):(t=s.length,function(c){for(var d=0,f;d<t;++d)l[(f=s[d]).i]=f.x(c);return l.join("")})}var Xf=180/Math.PI,yu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function I0(e,t,n,r,i,o){var a,l,s;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(s=e*n+t*r)&&(n-=e*s,r-=t*s),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,s/=l),e*r<t*n&&(e=-e,t=-t,s=-s,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(t,e)*Xf,skewX:Math.atan(s)*Xf,scaleX:a,scaleY:l}}var Fo;function Nw(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?yu:I0(t.a,t.b,t.c,t.d,t.e,t.f)}function jw(e){return e==null||(Fo||(Fo=document.createElementNS("http://www.w3.org/2000/svg","g")),Fo.setAttribute("transform",e),!(e=Fo.transform.baseVal.consolidate()))?yu:(e=e.matrix,I0(e.a,e.b,e.c,e.d,e.e,e.f))}function O0(e,t,n,r){function i(c){return c.length?c.pop()+" ":""}function o(c,d,f,p,h,y){if(c!==f||d!==p){var w=h.push("translate(",null,t,null,n);y.push({i:w-4,x:cn(c,f)},{i:w-2,x:cn(d,p)})}else(f||p)&&h.push("translate("+f+t+p+n)}function a(c,d,f,p){c!==d?(c-d>180?d+=360:d-c>180&&(c+=360),p.push({i:f.push(i(f)+"rotate(",null,r)-2,x:cn(c,d)})):d&&f.push(i(f)+"rotate("+d+r)}function l(c,d,f,p){c!==d?p.push({i:f.push(i(f)+"skewX(",null,r)-2,x:cn(c,d)}):d&&f.push(i(f)+"skewX("+d+r)}function s(c,d,f,p,h,y){if(c!==f||d!==p){var w=h.push(i(h)+"scale(",null,",",null,")");y.push({i:w-4,x:cn(c,f)},{i:w-2,x:cn(d,p)})}else(f!==1||p!==1)&&h.push(i(h)+"scale("+f+","+p+")")}return function(c,d){var f=[],p=[];return c=e(c),d=e(d),o(c.translateX,c.translateY,d.translateX,d.translateY,f,p),a(c.rotate,d.rotate,f,p),l(c.skewX,d.skewX,f,p),s(c.scaleX,c.scaleY,d.scaleX,d.scaleY,f,p),c=d=null,function(h){for(var y=-1,w=p.length,j;++y<w;)f[(j=p[y]).i]=j.x(h);return f.join("")}}}var Ew=O0(Nw,"px, ","px)","deg)"),_w=O0(jw,", ",")",")"),Cw=1e-12;function Zf(e){return((e=Math.exp(e))+1/e)/2}function Fw(e){return((e=Math.exp(e))-1/e)/2}function zw(e){return((e=Math.exp(2*e))-1)/(e+1)}const Mw=function e(t,n,r){function i(o,a){var l=o[0],s=o[1],c=o[2],d=a[0],f=a[1],p=a[2],h=d-l,y=f-s,w=h*h+y*y,j,g;if(w<Cw)g=Math.log(p/c)/t,j=function(C){return[l+C*h,s+C*y,c*Math.exp(t*C*g)]};else{var v=Math.sqrt(w),m=(p*p-c*c+r*w)/(2*c*n*v),x=(p*p-c*c-r*w)/(2*p*n*v),k=Math.log(Math.sqrt(m*m+1)-m),N=Math.log(Math.sqrt(x*x+1)-x);g=(N-k)/t,j=function(C){var z=C*g,D=Zf(k),A=c/(n*v)*(D*zw(t*z+k)-Fw(k));return[l+A*h,s+A*y,c*D/Zf(t*z+k)]}}return j.duration=g*1e3*t/Math.SQRT2,j}return i.rho=function(o){var a=Math.max(.001,+o),l=a*a,s=l*l;return e(a,l,s)},i}(Math.SQRT2,2,4);var Mr=0,ri=0,Vr=0,L0=1e3,Va,ii,Ga=0,Gn=0,pl=0,Wi=typeof performance=="object"&&performance.now?performance:Date,D0=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Bc(){return Gn||(D0(Pw),Gn=Wi.now()+pl)}function Pw(){Gn=0}function qa(){this._call=this._time=this._next=null}qa.prototype=$0.prototype={constructor:qa,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Bc():+n)+(t==null?0:+t),!this._next&&ii!==this&&(ii?ii._next=this:Va=this,ii=this),this._call=e,this._time=n,xu()},stop:function(){this._call&&(this._call=null,this._time=1/0,xu())}};function $0(e,t,n){var r=new qa;return r.restart(e,t,n),r}function Tw(){Bc(),++Mr;for(var e=Va,t;e;)(t=Gn-e._time)>=0&&e._call.call(null,t),e=e._next;--Mr}function Kf(){Gn=(Ga=Wi.now())+pl,Mr=ri=0;try{Tw()}finally{Mr=0,Rw(),Gn=0}}function Aw(){var e=Wi.now(),t=e-Ga;t>L0&&(pl-=t,Ga=e)}function Rw(){for(var e,t=Va,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Va=n);ii=e,xu(r)}function xu(e){if(!Mr){ri&&(ri=clearTimeout(ri));var t=e-Gn;t>24?(e<1/0&&(ri=setTimeout(Kf,e-Wi.now()-pl)),Vr&&(Vr=clearInterval(Vr))):(Vr||(Ga=Wi.now(),Vr=setInterval(Aw,L0)),Mr=1,D0(Kf))}}function Jf(e,t,n){var r=new qa;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var Iw=Lc("start","end","cancel","interrupt"),Ow=[],U0=0,ep=1,wu=2,qo=3,tp=4,ku=5,Yo=6;function hl(e,t,n,r,i,o){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;Lw(e,n,{name:t,index:r,group:i,on:Iw,tween:Ow,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:U0})}function Hc(e,t){var n=Ct(e,t);if(n.state>U0)throw new Error("too late; already scheduled");return n}function $t(e,t){var n=Ct(e,t);if(n.state>qo)throw new Error("too late; already running");return n}function Ct(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function Lw(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=$0(o,0,n.time);function o(c){n.state=ep,n.timer.restart(a,n.delay,n.time),n.delay<=c&&a(c-n.delay)}function a(c){var d,f,p,h;if(n.state!==ep)return s();for(d in r)if(h=r[d],h.name===n.name){if(h.state===qo)return Jf(a);h.state===tp?(h.state=Yo,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=Yo,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(Jf(function(){n.state===qo&&(n.state=tp,n.timer.restart(l,n.delay,n.time),l(c))}),n.state=wu,n.on.call("start",e,e.__data__,n.index,n.group),n.state===wu){for(n.state=qo,i=new Array(p=n.tween.length),d=0,f=-1;d<p;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(i[++f]=h);i.length=f+1}}function l(c){for(var d=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(s),n.state=ku,1),f=-1,p=i.length;++f<p;)i[f].call(e,d);n.state===ku&&(n.on.call("end",e,e.__data__,n.index,n.group),s())}function s(){n.state=Yo,n.timer.stop(),delete r[t];for(var c in r)return;delete e.__transition}}function Qo(e,t){var n=e.__transition,r,i,o=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){o=!1;continue}i=r.state>wu&&r.state<ku,r.state=Yo,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}o&&delete e.__transition}}function Dw(e){return this.each(function(){Qo(this,e)})}function $w(e,t){var n,r;return function(){var i=$t(this,e),o=i.tween;if(o!==n){r=n=o;for(var a=0,l=r.length;a<l;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function Uw(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var o=$t(this,e),a=o.tween;if(a!==r){i=(r=a).slice();for(var l={name:t,value:n},s=0,c=i.length;s<c;++s)if(i[s].name===t){i[s]=l;break}s===c&&i.push(l)}o.tween=i}}function Bw(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=Ct(this.node(),n).tween,i=0,o=r.length,a;i<o;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?$w:Uw)(n,e,t))}function Wc(e,t,n){var r=e._id;return e.each(function(){var i=$t(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return Ct(i,r).value[t]}}function B0(e,t){var n;return(typeof t=="number"?cn:t instanceof Hi?Qf:(n=Hi(t))?(t=n,Qf):bw)(e,t)}function Hw(e){return function(){this.removeAttribute(e)}}function Ww(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Vw(e,t,n){var r,i=n+"",o;return function(){var a=this.getAttribute(e);return a===i?null:a===r?o:o=t(r=a,n)}}function Gw(e,t,n){var r,i=n+"",o;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?o:o=t(r=a,n)}}function qw(e,t,n){var r,i,o;return function(){var a,l=n(this),s;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),s=l+"",a===s?null:a===r&&s===i?o:(i=s,o=t(r=a,l)))}}function Yw(e,t,n){var r,i,o;return function(){var a,l=n(this),s;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),s=l+"",a===s?null:a===r&&s===i?o:(i=s,o=t(r=a,l)))}}function Qw(e,t){var n=fl(e),r=n==="transform"?_w:B0;return this.attrTween(e,typeof t=="function"?(n.local?Yw:qw)(n,r,Wc(this,"attr."+e,t)):t==null?(n.local?Ww:Hw)(n):(n.local?Gw:Vw)(n,r,t))}function Xw(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Zw(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Kw(e,t){var n,r;function i(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&Zw(e,o)),n}return i._value=t,i}function Jw(e,t){var n,r;function i(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&Xw(e,o)),n}return i._value=t,i}function e5(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=fl(e);return this.tween(n,(r.local?Kw:Jw)(r,t))}function t5(e,t){return function(){Hc(this,e).delay=+t.apply(this,arguments)}}function n5(e,t){return t=+t,function(){Hc(this,e).delay=t}}function r5(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?t5:n5)(t,e)):Ct(this.node(),t).delay}function i5(e,t){return function(){$t(this,e).duration=+t.apply(this,arguments)}}function o5(e,t){return t=+t,function(){$t(this,e).duration=t}}function a5(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?i5:o5)(t,e)):Ct(this.node(),t).duration}function l5(e,t){if(typeof t!="function")throw new Error;return function(){$t(this,e).ease=t}}function s5(e){var t=this._id;return arguments.length?this.each(l5(t,e)):Ct(this.node(),t).ease}function u5(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;$t(this,e).ease=n}}function c5(e){if(typeof e!="function")throw new Error;return this.each(u5(this._id,e))}function d5(e){typeof e!="function"&&(e=S0(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],a=o.length,l=r[i]=[],s,c=0;c<a;++c)(s=o[c])&&e.call(s,s.__data__,c,o)&&l.push(s);return new nn(r,this._parents,this._name,this._id)}function f5(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,o=Math.min(r,i),a=new Array(r),l=0;l<o;++l)for(var s=t[l],c=n[l],d=s.length,f=a[l]=new Array(d),p,h=0;h<d;++h)(p=s[h]||c[h])&&(f[h]=p);for(;l<r;++l)a[l]=t[l];return new nn(a,this._parents,this._name,this._id)}function p5(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function h5(e,t,n){var r,i,o=p5(t)?Hc:$t;return function(){var a=o(this,e),l=a.on;l!==r&&(i=(r=l).copy()).on(t,n),a.on=i}}function m5(e,t){var n=this._id;return arguments.length<2?Ct(this.node(),n).on.on(e):this.each(h5(n,e,t))}function g5(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function v5(){return this.on("end.remove",g5(this._id))}function y5(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Dc(e));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var l=r[a],s=l.length,c=o[a]=new Array(s),d,f,p=0;p<s;++p)(d=l[p])&&(f=e.call(d,d.__data__,p,l))&&("__data__"in d&&(f.__data__=d.__data__),c[p]=f,hl(c[p],t,n,p,c,Ct(d,n)));return new nn(o,this._parents,t,n)}function x5(e){var t=this._name,n=this._id;typeof e!="function"&&(e=k0(e));for(var r=this._groups,i=r.length,o=[],a=[],l=0;l<i;++l)for(var s=r[l],c=s.length,d,f=0;f<c;++f)if(d=s[f]){for(var p=e.call(d,d.__data__,f,s),h,y=Ct(d,n),w=0,j=p.length;w<j;++w)(h=p[w])&&hl(h,t,n,w,p,y);o.push(p),a.push(d)}return new nn(o,a,t,n)}var w5=no.prototype.constructor;function k5(){return new w5(this._groups,this._parents)}function S5(e,t){var n,r,i;return function(){var o=zr(this,e),a=(this.style.removeProperty(e),zr(this,e));return o===a?null:o===n&&a===r?i:i=t(n=o,r=a)}}function H0(e){return function(){this.style.removeProperty(e)}}function b5(e,t,n){var r,i=n+"",o;return function(){var a=zr(this,e);return a===i?null:a===r?o:o=t(r=a,n)}}function N5(e,t,n){var r,i,o;return function(){var a=zr(this,e),l=n(this),s=l+"";return l==null&&(s=l=(this.style.removeProperty(e),zr(this,e))),a===s?null:a===r&&s===i?o:(i=s,o=t(r=a,l))}}function j5(e,t){var n,r,i,o="style."+t,a="end."+o,l;return function(){var s=$t(this,e),c=s.on,d=s.value[o]==null?l||(l=H0(t)):void 0;(c!==n||i!==d)&&(r=(n=c).copy()).on(a,i=d),s.on=r}}function E5(e,t,n){var r=(e+="")=="transform"?Ew:B0;return t==null?this.styleTween(e,S5(e,r)).on("end.style."+e,H0(e)):typeof t=="function"?this.styleTween(e,N5(e,r,Wc(this,"style."+e,t))).each(j5(this._id,e)):this.styleTween(e,b5(e,r,t),n).on("end.style."+e,null)}function _5(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function C5(e,t,n){var r,i;function o(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&_5(e,a,n)),r}return o._value=t,o}function F5(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,C5(e,t,n??""))}function z5(e){return function(){this.textContent=e}}function M5(e){return function(){var t=e(this);this.textContent=t??""}}function P5(e){return this.tween("text",typeof e=="function"?M5(Wc(this,"text",e)):z5(e==null?"":e+""))}function T5(e){return function(t){this.textContent=e.call(this,t)}}function A5(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&T5(i)),t}return r._value=e,r}function R5(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,A5(e))}function I5(){for(var e=this._name,t=this._id,n=W0(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],l=a.length,s,c=0;c<l;++c)if(s=a[c]){var d=Ct(s,t);hl(s,e,n,c,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new nn(r,this._parents,e,n)}function O5(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(o,a){var l={value:a},s={value:function(){--i===0&&o()}};n.each(function(){var c=$t(this,r),d=c.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(s)),c.on=t}),i===0&&o()})}var L5=0;function nn(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function W0(){return++L5}var Fn=no.prototype;nn.prototype={constructor:nn,select:y5,selectAll:x5,filter:d5,merge:f5,selection:k5,transition:I5,call:Fn.call,nodes:Fn.nodes,node:Fn.node,size:Fn.size,empty:Fn.empty,each:Fn.each,on:m5,attr:Qw,attrTween:e5,style:E5,styleTween:F5,text:P5,textTween:R5,remove:v5,tween:Bw,delay:r5,duration:a5,ease:s5,easeVarying:c5,end:O5,[Symbol.iterator]:Fn[Symbol.iterator]};function D5(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var $5={time:null,delay:0,duration:250,ease:D5};function U5(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function B5(e){var t,n;e instanceof nn?(t=e._id,e=e._name):(t=W0(),(n=$5).time=Bc(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],l=a.length,s,c=0;c<l;++c)(s=a[c])&&hl(s,e,t,c,a,n||U5(s,t));return new nn(r,this._parents,e,t)}no.prototype.interrupt=Dw;no.prototype.transition=B5;const zo=e=>()=>e;function H5(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Qt(e,t,n){this.k=e,this.x=t,this.y=n}Qt.prototype={constructor:Qt,scale:function(e){return e===1?this:new Qt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Qt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Vc=new Qt(1,0,0);Qt.prototype;function Ql(e){e.stopImmediatePropagation()}function Gr(e){e.preventDefault(),e.stopImmediatePropagation()}function W5(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function V5(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function np(){return this.__zoom||Vc}function G5(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function q5(){return navigator.maxTouchPoints||"ontouchstart"in this}function Y5(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],o=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}function Q5(){var e=W5,t=V5,n=Y5,r=G5,i=q5,o=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,s=Mw,c=Lc("start","zoom","end"),d,f,p,h=500,y=150,w=0,j=10;function g(S){S.property("__zoom",np).on("wheel.zoom",z).on("mousedown.zoom",D).on("dblclick.zoom",A).filter(i).on("touchstart.zoom",$).on("touchmove.zoom",Y).on("touchend.zoom touchcancel.zoom",K).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(S,b,E,R){var _=S.selection?S.selection():S;_.property("__zoom",np),S!==_?k(S,b,E,R):_.interrupt().each(function(){N(this,arguments).event(R).start().zoom(null,typeof b=="function"?b.apply(this,arguments):b).end()})},g.scaleBy=function(S,b,E,R){g.scaleTo(S,function(){var _=this.__zoom.k,F=typeof b=="function"?b.apply(this,arguments):b;return _*F},E,R)},g.scaleTo=function(S,b,E,R){g.transform(S,function(){var _=t.apply(this,arguments),F=this.__zoom,P=E==null?x(_):typeof E=="function"?E.apply(this,arguments):E,U=F.invert(P),V=typeof b=="function"?b.apply(this,arguments):b;return n(m(v(F,V),P,U),_,a)},E,R)},g.translateBy=function(S,b,E,R){g.transform(S,function(){return n(this.__zoom.translate(typeof b=="function"?b.apply(this,arguments):b,typeof E=="function"?E.apply(this,arguments):E),t.apply(this,arguments),a)},null,R)},g.translateTo=function(S,b,E,R,_){g.transform(S,function(){var F=t.apply(this,arguments),P=this.__zoom,U=R==null?x(F):typeof R=="function"?R.apply(this,arguments):R;return n(Vc.translate(U[0],U[1]).scale(P.k).translate(typeof b=="function"?-b.apply(this,arguments):-b,typeof E=="function"?-E.apply(this,arguments):-E),F,a)},R,_)};function v(S,b){return b=Math.max(o[0],Math.min(o[1],b)),b===S.k?S:new Qt(b,S.x,S.y)}function m(S,b,E){var R=b[0]-E[0]*S.k,_=b[1]-E[1]*S.k;return R===S.x&&_===S.y?S:new Qt(S.k,R,_)}function x(S){return[(+S[0][0]+ +S[1][0])/2,(+S[0][1]+ +S[1][1])/2]}function k(S,b,E,R){S.on("start.zoom",function(){N(this,arguments).event(R).start()}).on("interrupt.zoom end.zoom",function(){N(this,arguments).event(R).end()}).tween("zoom",function(){var _=this,F=arguments,P=N(_,F).event(R),U=t.apply(_,F),V=E==null?x(U):typeof E=="function"?E.apply(_,F):E,ee=Math.max(U[1][0]-U[0][0],U[1][1]-U[0][1]),X=_.__zoom,ne=typeof b=="function"?b.apply(_,F):b,ge=s(X.invert(V).concat(ee/X.k),ne.invert(V).concat(ee/ne.k));return function(be){if(be===1)be=ne;else{var ut=ge(be),ve=ee/ut[2];be=new Qt(ve,V[0]-ut[0]*ve,V[1]-ut[1]*ve)}P.zoom(null,be)}})}function N(S,b,E){return!E&&S.__zooming||new C(S,b)}function C(S,b){this.that=S,this.args=b,this.active=0,this.sourceEvent=null,this.extent=t.apply(S,b),this.taps=0}C.prototype={event:function(S){return S&&(this.sourceEvent=S),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(S,b){return this.mouse&&S!=="mouse"&&(this.mouse[1]=b.invert(this.mouse[0])),this.touch0&&S!=="touch"&&(this.touch0[1]=b.invert(this.touch0[0])),this.touch1&&S!=="touch"&&(this.touch1[1]=b.invert(this.touch1[0])),this.that.__zoom=b,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(S){var b=Gt(this.that).datum();c.call(S,this.that,new H5(S,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:c}),b)}};function z(S,...b){if(!e.apply(this,arguments))return;var E=N(this,b).event(S),R=this.__zoom,_=Math.max(o[0],Math.min(o[1],R.k*Math.pow(2,r.apply(this,arguments)))),F=Cn(S);if(E.wheel)(E.mouse[0][0]!==F[0]||E.mouse[0][1]!==F[1])&&(E.mouse[1]=R.invert(E.mouse[0]=F)),clearTimeout(E.wheel);else{if(R.k===_)return;E.mouse=[F,R.invert(F)],Qo(this),E.start()}Gr(S),E.wheel=setTimeout(P,y),E.zoom("mouse",n(m(v(R,_),E.mouse[0],E.mouse[1]),E.extent,a));function P(){E.wheel=null,E.end()}}function D(S,...b){if(p||!e.apply(this,arguments))return;var E=N(this,b,!0).event(S),R=Gt(S.view).on("mousemove.zoom",V,!0).on("mouseup.zoom",ee,!0),_=Cn(S,F),F=S.currentTarget,P=S.clientX,U=S.clientY;aw(S.view),Ql(S),E.mouse=[_,this.__zoom.invert(_)],Qo(this),E.start();function V(X){if(Gr(X),!E.moved){var ne=X.clientX-P,ge=X.clientY-U;E.moved=ne*ne+ge*ge>w}E.event(X).zoom("mouse",n(m(E.that.__zoom,E.mouse[0]=Cn(X,F),E.mouse[1]),E.extent,a))}function ee(X){R.on("mousemove.zoom mouseup.zoom",null),lw(X.view,E.moved),Gr(X),E.event(X).end()}}function A(S,...b){if(e.apply(this,arguments)){var E=this.__zoom,R=Cn(S.changedTouches?S.changedTouches[0]:S,this),_=E.invert(R),F=E.k*(S.shiftKey?.5:2),P=n(m(v(E,F),R,_),t.apply(this,b),a);Gr(S),l>0?Gt(this).transition().duration(l).call(k,P,R,S):Gt(this).call(g.transform,P,R,S)}}function $(S,...b){if(e.apply(this,arguments)){var E=S.touches,R=E.length,_=N(this,b,S.changedTouches.length===R).event(S),F,P,U,V;for(Ql(S),P=0;P<R;++P)U=E[P],V=Cn(U,this),V=[V,this.__zoom.invert(V),U.identifier],_.touch0?!_.touch1&&_.touch0[2]!==V[2]&&(_.touch1=V,_.taps=0):(_.touch0=V,F=!0,_.taps=1+!!d);d&&(d=clearTimeout(d)),F&&(_.taps<2&&(f=V[0],d=setTimeout(function(){d=null},h)),Qo(this),_.start())}}function Y(S,...b){if(this.__zooming){var E=N(this,b).event(S),R=S.changedTouches,_=R.length,F,P,U,V;for(Gr(S),F=0;F<_;++F)P=R[F],U=Cn(P,this),E.touch0&&E.touch0[2]===P.identifier?E.touch0[0]=U:E.touch1&&E.touch1[2]===P.identifier&&(E.touch1[0]=U);if(P=E.that.__zoom,E.touch1){var ee=E.touch0[0],X=E.touch0[1],ne=E.touch1[0],ge=E.touch1[1],be=(be=ne[0]-ee[0])*be+(be=ne[1]-ee[1])*be,ut=(ut=ge[0]-X[0])*ut+(ut=ge[1]-X[1])*ut;P=v(P,Math.sqrt(be/ut)),U=[(ee[0]+ne[0])/2,(ee[1]+ne[1])/2],V=[(X[0]+ge[0])/2,(X[1]+ge[1])/2]}else if(E.touch0)U=E.touch0[0],V=E.touch0[1];else return;E.zoom("touch",n(m(P,U,V),E.extent,a))}}function K(S,...b){if(this.__zooming){var E=N(this,b).event(S),R=S.changedTouches,_=R.length,F,P;for(Ql(S),p&&clearTimeout(p),p=setTimeout(function(){p=null},h),F=0;F<_;++F)P=R[F],E.touch0&&E.touch0[2]===P.identifier?delete E.touch0:E.touch1&&E.touch1[2]===P.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(P=Cn(P,this),Math.hypot(f[0]-P[0],f[1]-P[1])<j)){var U=Gt(this).on("dblclick.zoom");U&&U.apply(this,arguments)}}}return g.wheelDelta=function(S){return arguments.length?(r=typeof S=="function"?S:zo(+S),g):r},g.filter=function(S){return arguments.length?(e=typeof S=="function"?S:zo(!!S),g):e},g.touchable=function(S){return arguments.length?(i=typeof S=="function"?S:zo(!!S),g):i},g.extent=function(S){return arguments.length?(t=typeof S=="function"?S:zo([[+S[0][0],+S[0][1]],[+S[1][0],+S[1][1]]]),g):t},g.scaleExtent=function(S){return arguments.length?(o[0]=+S[0],o[1]=+S[1],g):[o[0],o[1]]},g.translateExtent=function(S){return arguments.length?(a[0][0]=+S[0][0],a[1][0]=+S[1][0],a[0][1]=+S[0][1],a[1][1]=+S[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(S){return arguments.length?(n=S,g):n},g.duration=function(S){return arguments.length?(l=+S,g):l},g.interpolate=function(S){return arguments.length?(s=S,g):s},g.on=function(){var S=c.on.apply(c,arguments);return S===c?g:S},g.clickDistance=function(S){return arguments.length?(w=(S=+S)*S,g):Math.sqrt(w)},g.tapDistance=function(S){return arguments.length?(j=+S,g):j},g}function rp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function dr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rp(Object(n),!0).forEach(function(r){X5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Su(e){"@babel/helpers - typeof";return Su=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Su(e)}function X5(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Je(){return Je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Je.apply(this,arguments)}function Z5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function yt(e,t){if(e==null)return{};var n=Z5(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ce(e,t){return K5(e)||J5(e,t)||ek(e,t)||tk()}function K5(e){if(Array.isArray(e))return e}function J5(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(s){o=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function ek(e,t){if(e){if(typeof e=="string")return ip(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ip(e,t)}}function ip(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var nk=["width","height","projection","projectionConfig"],rk=d0,ik=yt(yx,["geoPath"]),Ut=I.createContext(),ok=function(t){var n=t.projectionConfig,r=n===void 0?{}:n,i=t.projection,o=i===void 0?"geoEqualEarth":i,a=t.width,l=a===void 0?800:a,s=t.height,c=s===void 0?600:s,d=typeof o=="function";if(d)return o;var f=ik[o]().translate([l/2,c/2]),p=[f.center?"center":null,f.rotate?"rotate":null,f.scale?"scale":null,f.parallels?"parallels":null];return p.forEach(function(h){h&&(f=f[h](r[h]||f[h]()))}),f},V0=function(t){var n=t.width,r=t.height,i=t.projection,o=t.projectionConfig,a=yt(t,nk),l=o.center||[],s=Ce(l,2),c=s[0],d=s[1],f=o.rotate||[],p=Ce(f,3),h=p[0],y=p[1],w=p[2],j=o.parallels||[],g=Ce(j,2),v=g[0],m=g[1],x=o.scale||null,k=I.useMemo(function(){return ok({projectionConfig:{center:c||c===0||d||d===0?[c,d]:null,rotate:h||h===0||y||y===0?[h,y,w]:null,parallels:v||v===0||m||m===0?[v,m]:null,scale:x},projection:i,width:n,height:r})},[n,r,i,c,d,h,y,w,v,m,x]),N=I.useCallback(k,[k]),C=I.useMemo(function(){return{width:n,height:r,projection:N,path:rk().projection(N)}},[n,r,N]);return xe.createElement(Ut.Provider,Je({value:C},a))};V0.propTypes={width:T.number,height:T.number,projection:T.oneOfType([T.string,T.func]),projectionConfig:T.object};var ak=["width","height","projection","projectionConfig","className"],Gc=I.forwardRef(function(e,t){var n=e.width,r=n===void 0?800:n,i=e.height,o=i===void 0?600:i,a=e.projection,l=a===void 0?"geoEqualEarth":a,s=e.projectionConfig,c=s===void 0?{}:s,d=e.className,f=d===void 0?"":d,p=yt(e,ak);return xe.createElement(V0,{width:r,height:o,projection:l,projectionConfig:c},xe.createElement("svg",Je({ref:t,viewBox:"0 0 ".concat(r," ").concat(o),className:"rsm-svg ".concat(f)},p)))});Gc.displayName="ComposableMap";Gc.propTypes={width:T.number,height:T.number,projection:T.oneOfType([T.string,T.func]),projectionConfig:T.object,className:T.string};function op(e,t,n){var r=(e*n.k-e)/2,i=(t*n.k-t)/2;return[e/2-(r+n.x)/n.k,t/2-(i+n.y)/n.k]}function lk(e){return fetch(e).then(function(t){if(!t.ok)throw Error(t.statusText);return t.json()}).catch(function(t){console.log("There was a problem when fetching the data: ",t)})}function ap(e,t){var n=e.type==="Topology";if(!n)return t?t(e.features||e):e.features||e;var r=Sx(e,e.objects[Object.keys(e.objects)[0]]).features;return t?t(r):r}function lp(e){var t=e.type==="Topology";if(!t)return null;var n=Df(e,e.objects[Object.keys(e.objects)[0]],function(i,o){return i===o}),r=Df(e,e.objects[Object.keys(e.objects)[0]],function(i,o){return i!==o});return{outline:n,borders:r}}function sk(e,t,n){return e&&t?{outline:dr(dr({},e),{},{rsmKey:"outline",svgPath:n(e)}),borders:dr(dr({},t),{},{rsmKey:"borders",svgPath:n(t)})}:{}}function uk(e,t){return e?e.map(function(n,r){return dr(dr({},n),{},{rsmKey:"geo-".concat(r),svgPath:t(n)})}):[]}function ck(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:30,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:30,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.5,r=Array.isArray(n)?n:[n,n],i=e/2*r[0],o=t/2*r[1];return"M".concat(0,",",0," Q",-e/2-i,",").concat(-t/2+o," ").concat(-e,",").concat(-t)}function dk(e){return typeof e=="string"}function fk(e){var t=e.geography,n=e.parseGeographies,r=I.useContext(Ut),i=r.path,o=I.useState({}),a=Ce(o,2),l=a[0],s=a[1];I.useEffect(function(){(typeof window>"u"?"undefined":Su(window))!=="undefined"&&t&&(dk(t)?lk(t).then(function(h){h&&s({geographies:ap(h,n),mesh:lp(h)})}):s({geographies:ap(t,n),mesh:lp(t)}))},[t,n]);var c=I.useMemo(function(){var h=l.mesh||{},y=sk(h.outline,h.borders,i);return{geographies:uk(l.geographies,i),outline:y.outline,borders:y.borders}},[l,i]),d=c.geographies,f=c.outline,p=c.borders;return{geographies:d,outline:f,borders:p}}var pk=["geography","children","parseGeographies","className"],qc=I.forwardRef(function(e,t){var n=e.geography,r=e.children,i=e.parseGeographies,o=e.className,a=o===void 0?"":o,l=yt(e,pk),s=I.useContext(Ut),c=s.path,d=s.projection,f=fk({geography:n,parseGeographies:i}),p=f.geographies,h=f.outline,y=f.borders;return xe.createElement("g",Je({ref:t,className:"rsm-geographies ".concat(a)},l),p&&p.length>0&&r({geographies:p,outline:h,borders:y,path:c,projection:d}))});qc.displayName="Geographies";qc.propTypes={geography:T.oneOfType([T.string,T.object,T.array]),children:T.func,parseGeographies:T.func,className:T.string};var hk=["geography","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"],Yc=I.forwardRef(function(e,t){var n=e.geography,r=e.onMouseEnter,i=e.onMouseLeave,o=e.onMouseDown,a=e.onMouseUp,l=e.onFocus,s=e.onBlur,c=e.style,d=c===void 0?{}:c,f=e.className,p=f===void 0?"":f,h=yt(e,hk),y=I.useState(!1),w=Ce(y,2),j=w[0],g=w[1],v=I.useState(!1),m=Ce(v,2),x=m[0],k=m[1];function N(Y){k(!0),r&&r(Y)}function C(Y){k(!1),j&&g(!1),i&&i(Y)}function z(Y){k(!0),l&&l(Y)}function D(Y){k(!1),j&&g(!1),s&&s(Y)}function A(Y){g(!0),o&&o(Y)}function $(Y){g(!1),a&&a(Y)}return xe.createElement("path",Je({ref:t,tabIndex:"0",className:"rsm-geography ".concat(p),d:n.svgPath,onMouseEnter:N,onMouseLeave:C,onFocus:z,onBlur:D,onMouseDown:A,onMouseUp:$,style:d[j||x?j?"pressed":"hover":"default"]},h))});Yc.displayName="Geography";Yc.propTypes={geography:T.object,onMouseEnter:T.func,onMouseLeave:T.func,onMouseDown:T.func,onMouseUp:T.func,onFocus:T.func,onBlur:T.func,style:T.object,className:T.string};var mk=I.memo(Yc),gk=["fill","stroke","step","className"],Qc=I.forwardRef(function(e,t){var n=e.fill,r=n===void 0?"transparent":n,i=e.stroke,o=i===void 0?"currentcolor":i,a=e.step,l=a===void 0?[10,10]:a,s=e.className,c=s===void 0?"":s,d=yt(e,gk),f=I.useContext(Ut),p=f.path;return xe.createElement("path",Je({ref:t,d:p(bc().step(l)()),fill:r,stroke:o,className:"rsm-graticule ".concat(c)},d))});Qc.displayName="Graticule";Qc.propTypes={fill:T.string,stroke:T.string,step:T.array,className:T.string};I.memo(Qc);var vk=["value"],yk=I.createContext(),xk={x:0,y:0,k:1,transformString:"translate(0 0) scale(1)"},G0=function(t){var n=t.value,r=n===void 0?xk:n,i=yt(t,vk);return xe.createElement(yk.Provider,Je({value:r},i))};G0.propTypes={x:T.number,y:T.number,k:T.number,transformString:T.string};function wk(e){var t=e.center,n=e.filterZoomEvent,r=e.onMoveStart,i=e.onMoveEnd,o=e.onMove,a=e.translateExtent,l=a===void 0?[[-1/0,-1/0],[1/0,1/0]]:a,s=e.scaleExtent,c=s===void 0?[1,8]:s,d=e.zoom,f=d===void 0?1:d,p=I.useContext(Ut),h=p.width,y=p.height,w=p.projection,j=Ce(t,2),g=j[0],v=j[1],m=I.useState({x:0,y:0,k:1}),x=Ce(m,2),k=x[0],N=x[1],C=I.useRef({x:0,y:0,k:1}),z=I.useRef(),D=I.useRef(),A=I.useRef(!1),$=Ce(l,2),Y=$[0],K=$[1],S=Ce(Y,2),b=S[0],E=S[1],R=Ce(K,2),_=R[0],F=R[1],P=Ce(c,2),U=P[0],V=P[1];return I.useEffect(function(){var ee=Gt(z.current);function X(ve){!r||A.current||r({coordinates:w.invert(op(h,y,ve.transform)),zoom:ve.transform.k},ve)}function ne(ve){if(!A.current){var on=ve.transform,Ir=ve.sourceEvent;N({x:on.x,y:on.y,k:on.k,dragging:Ir}),o&&o({x:on.x,y:on.y,zoom:on.k,dragging:Ir},ve)}}function ge(ve){if(A.current){A.current=!1;return}var on=w.invert(op(h,y,ve.transform)),Ir=Ce(on,2),Kc=Ir[0],Jc=Ir[1];C.current={x:Kc,y:Jc,k:ve.transform.k},i&&i({coordinates:[Kc,Jc],zoom:ve.transform.k},ve)}function be(ve){return n?n(ve):ve?!ve.ctrlKey&&!ve.button:!1}var ut=Q5().filter(be).scaleExtent([U,V]).translateExtent([[b,E],[_,F]]).on("start",X).on("zoom",ne).on("end",ge);D.current=ut,ee.call(ut)},[h,y,b,E,_,F,U,V,w,r,o,i,n]),I.useEffect(function(){if(!(g===C.current.x&&v===C.current.y&&f===C.current.k)){var ee=w([g,v]),X=ee[0]*f,ne=ee[1]*f,ge=Gt(z.current);A.current=!0,ge.call(D.current.transform,Vc.translate(h/2-X,y/2-ne).scale(f)),N({x:h/2-X,y:y/2-ne,k:f}),C.current={x:g,y:v,k:f}}},[g,v,f,h,y,w]),{mapRef:z,position:k,transformString:"translate(".concat(k.x," ").concat(k.y,") scale(").concat(k.k,")")}}var kk=["center","zoom","minZoom","maxZoom","translateExtent","filterZoomEvent","onMoveStart","onMove","onMoveEnd","className"],q0=I.forwardRef(function(e,t){var n=e.center,r=n===void 0?[0,0]:n,i=e.zoom,o=i===void 0?1:i,a=e.minZoom,l=a===void 0?1:a,s=e.maxZoom,c=s===void 0?8:s,d=e.translateExtent,f=e.filterZoomEvent,p=e.onMoveStart,h=e.onMove,y=e.onMoveEnd,w=e.className,j=yt(e,kk),g=I.useContext(Ut),v=g.width,m=g.height,x=wk({center:r,filterZoomEvent:f,onMoveStart:p,onMove:h,onMoveEnd:y,scaleExtent:[l,c],translateExtent:d,zoom:o}),k=x.mapRef,N=x.transformString,C=x.position;return xe.createElement(G0,{value:{x:C.x,y:C.y,k:C.k,transformString:N}},xe.createElement("g",{ref:k},xe.createElement("rect",{width:v,height:m,fill:"transparent"}),xe.createElement("g",Je({ref:t,transform:N,className:"rsm-zoomable-group ".concat(w)},j))))});q0.displayName="ZoomableGroup";q0.propTypes={center:T.array,zoom:T.number,minZoom:T.number,maxZoom:T.number,translateExtent:T.arrayOf(T.array),onMoveStart:T.func,onMove:T.func,onMoveEnd:T.func,className:T.string};var Sk=["id","fill","stroke","strokeWidth","className"],Xc=I.forwardRef(function(e,t){var n=e.id,r=n===void 0?"rsm-sphere":n,i=e.fill,o=i===void 0?"transparent":i,a=e.stroke,l=a===void 0?"currentcolor":a,s=e.strokeWidth,c=s===void 0?.5:s,d=e.className,f=d===void 0?"":d,p=yt(e,Sk),h=I.useContext(Ut),y=h.path,w=I.useMemo(function(){return y({type:"Sphere"})},[y]);return xe.createElement(I.Fragment,null,xe.createElement("defs",null,xe.createElement("clipPath",{id:r},xe.createElement("path",{d:w}))),xe.createElement("path",Je({ref:t,d:w,fill:o,stroke:l,strokeWidth:c,style:{pointerEvents:"none"},className:"rsm-sphere ".concat(f)},p)))});Xc.displayName="Sphere";Xc.propTypes={id:T.string,fill:T.string,stroke:T.string,strokeWidth:T.number,className:T.string};I.memo(Xc);var bk=["coordinates","children","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"],Zc=I.forwardRef(function(e,t){var n=e.coordinates,r=e.children,i=e.onMouseEnter,o=e.onMouseLeave,a=e.onMouseDown,l=e.onMouseUp,s=e.onFocus,c=e.onBlur,d=e.style,f=d===void 0?{}:d,p=e.className,h=p===void 0?"":p,y=yt(e,bk),w=I.useContext(Ut),j=w.projection,g=I.useState(!1),v=Ce(g,2),m=v[0],x=v[1],k=I.useState(!1),N=Ce(k,2),C=N[0],z=N[1],D=j(n),A=Ce(D,2),$=A[0],Y=A[1];function K(F){z(!0),i&&i(F)}function S(F){z(!1),m&&x(!1),o&&o(F)}function b(F){z(!0),s&&s(F)}function E(F){z(!1),m&&x(!1),c&&c(F)}function R(F){x(!0),a&&a(F)}function _(F){x(!1),l&&l(F)}return xe.createElement("g",Je({ref:t,transform:"translate(".concat($,", ").concat(Y,")"),className:"rsm-marker ".concat(h),onMouseEnter:K,onMouseLeave:S,onFocus:b,onBlur:E,onMouseDown:R,onMouseUp:_,style:f[m||C?m?"pressed":"hover":"default"]},y),r)});Zc.displayName="Marker";Zc.propTypes={coordinates:T.array,children:T.oneOfType([T.node,T.arrayOf(T.node)]),onMouseEnter:T.func,onMouseLeave:T.func,onMouseDown:T.func,onMouseUp:T.func,onFocus:T.func,onBlur:T.func,style:T.object,className:T.string};var Nk=["from","to","coordinates","stroke","strokeWidth","fill","className"],Y0=I.forwardRef(function(e,t){var n=e.from,r=n===void 0?[0,0]:n,i=e.to,o=i===void 0?[0,0]:i,a=e.coordinates,l=e.stroke,s=l===void 0?"currentcolor":l,c=e.strokeWidth,d=c===void 0?3:c,f=e.fill,p=f===void 0?"transparent":f,h=e.className,y=h===void 0?"":h,w=yt(e,Nk),j=I.useContext(Ut),g=j.path,v={type:"LineString",coordinates:a||[r,o]};return xe.createElement("path",Je({ref:t,d:g(v),className:"rsm-line ".concat(y),stroke:s,strokeWidth:d,fill:p},w))});Y0.displayName="Line";Y0.propTypes={from:T.array,to:T.array,coordinates:T.array,stroke:T.string,strokeWidth:T.number,fill:T.string,className:T.string};var jk=["subject","children","connectorProps","dx","dy","curve","className"],Q0=I.forwardRef(function(e,t){var n=e.subject,r=e.children,i=e.connectorProps,o=e.dx,a=o===void 0?30:o,l=e.dy,s=l===void 0?30:l,c=e.curve,d=c===void 0?0:c,f=e.className,p=f===void 0?"":f,h=yt(e,jk),y=I.useContext(Ut),w=y.projection,j=w(n),g=Ce(j,2),v=g[0],m=g[1],x=ck(a,s,d);return xe.createElement("g",Je({ref:t,transform:"translate(".concat(v+a,", ").concat(m+s,")"),className:"rsm-annotation ".concat(p)},h),xe.createElement("path",Je({d:x,fill:"transparent",stroke:"#000"},i)),r)});Q0.displayName="Annotation";Q0.propTypes={subject:T.array,children:T.oneOfType([T.node,T.arrayOf(T.node)]),dx:T.number,dy:T.number,curve:T.number,connectorProps:T.object,className:T.string};const Ek="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",_k=[{id:"na",name:"North America",coords:[-98,39],hq:!1},{id:"london",name:"London",coords:[-.1,51.5],hq:!1},{id:"gurgaon",name:"Gurgaon HQ",coords:[77,28.5],hq:!0},{id:"sg",name:"Singapore",coords:[103.8,1.4],hq:!1},{id:"sydney",name:"Sydney",coords:[151.2,-33.9],hq:!1}],Ck=[{num:"15+",label:"Countries"},{num:"100+",label:"Organizations"},{num:"5+",label:"Yrs of Client Delivery"},{num:"24/7",label:"Global Delivery"}];function Fk({onOpenContact:e}){return u.jsxs("section",{id:"global-presence",className:"gp-section",children:[u.jsx("div",{className:"gp-glow-orb gp-orb-left"}),u.jsx("div",{className:"gp-glow-orb gp-orb-right"}),u.jsxs("div",{className:"container gp-inner",children:[u.jsxs("div",{className:"gp-text-col",children:[u.jsxs("div",{className:"badge-pill gp-badge",children:[u.jsx(vc,{size:14,className:"badge-icon"}),u.jsx("span",{children:"GLOBAL REACH & DELIVERY"})]}),u.jsxs("h2",{className:"gp-headline",children:["Supporting ",u.jsx("br",{}),u.jsx("span",{className:"gp-accent",children:"Global Organizations"})]}),u.jsx("p",{className:"gp-subtext",children:"Wherever our clients operate, our focus remains the same: strengthening trust, managing risk, and delivering outcomes. Our flexible delivery model enables us to work seamlessly across regions, time zones, and operating environments through offshore, remote, hybrid, and embedded team structures, providing clients with experienced professionals, scalable support, and strong accountability."}),u.jsx("div",{className:"gp-stats-grid",children:Ck.map((t,n)=>u.jsxs("div",{className:"gp-stat-card",children:[u.jsx("span",{className:"gp-stat-num",children:t.num}),u.jsx("span",{className:"gp-stat-lbl",children:t.label})]},n))}),u.jsxs("button",{className:"btn-primary gp-cta-btn",onClick:()=>e("Global Organization Inquiry"),children:["Discuss Global Delivery ",u.jsx(Hn,{size:16})]})]}),u.jsxs("div",{className:"gp-map-col",children:[u.jsx("div",{className:"gp-map-frame",children:u.jsxs(Gc,{projection:"geoMercator",projectionConfig:{scale:155,center:[20,15]},style:{width:"100%",height:"100%"},children:[u.jsx(qc,{geography:Ek,children:({geographies:t})=>t.map(n=>u.jsx(mk,{geography:n,fill:"rgba(167,139,250,0.12)",stroke:"rgba(167,139,250,0.3)",strokeWidth:.5,style:{default:{outline:"none"},hover:{fill:"rgba(167,139,250,0.28)",outline:"none"},pressed:{outline:"none"}}},n.rsmKey))}),_k.map(t=>u.jsxs(Zc,{coordinates:t.coords,children:[u.jsxs("circle",{r:"16",fill:"none",stroke:t.hq?"#10B981":"#A78BFA",strokeWidth:"1",opacity:"0.3",children:[u.jsx("animate",{attributeName:"r",from:"8",to:"22",dur:t.hq?"1.6s":"2s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",from:"0.7",to:"0",dur:t.hq?"1.6s":"2s",repeatCount:"indefinite"})]}),u.jsxs("circle",{r:"8",fill:"none",stroke:t.hq?"#10B981":"#A78BFA",strokeWidth:"1",opacity:"0.5",children:[u.jsx("animate",{attributeName:"r",from:"5",to:"14",dur:t.hq?"1.6s":"2s",begin:"0.4s",repeatCount:"indefinite"}),u.jsx("animate",{attributeName:"opacity",from:"0.5",to:"0",dur:t.hq?"1.6s":"2s",begin:"0.4s",repeatCount:"indefinite"})]}),u.jsx("circle",{r:t.hq?5.5:4,fill:t.hq?"#10B981":"#A78BFA",stroke:t.hq?"#D1FAE5":"#EDE9FE",strokeWidth:"1.5",style:{filter:`drop-shadow(0 0 8px ${t.hq?"rgba(16,185,129,0.9)":"rgba(167,139,250,0.9)"})`}}),u.jsx("text",{y:t.hq?-12:-10,textAnchor:"middle",style:{fontFamily:"Inter, sans-serif",fontWeight:700,fontSize:t.hq?"7px":"6px",fill:t.hq?"#6EE7B7":"#C4B5FD",letterSpacing:"0.03em"},children:t.name})]},t.id))]})}),u.jsxs("div",{className:"gp-map-legend",children:[u.jsxs("span",{className:"legend-item legend-hq",children:[u.jsx("span",{className:"legend-dot hq-dot"}),"Gurgaon HQ & Operations"]}),u.jsxs("span",{className:"legend-item",children:[u.jsx("span",{className:"legend-dot"}),"Delivery Hub"]})]})]})]}),u.jsx("style",{children:`
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
          font-size: var(--fs-section);
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
          font-size: var(--fs-body);
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
          font-size: var(--fs-small);
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
          font-size: var(--fs-small);
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
      `})]})}function zk({onOpenContact:e}){const t=[{name:"Megha Bakshi",role:"Founder & Technology Risk and Trust Leader",tagline:"15+ Years of Experience",image:"./megha.jpeg",imagePosition:"center 20%",bio:"Megha founded Gaussians with a simple belief that security, compliance, and risk should enable business growth, not slow it down. Drawing on Big 4 and industry leadership experience, she partners with organizations to build practical, scalable programs that strengthen trust, manage risk, and support long-term success.",highlights:["Global Consulting & Industry Veterans","Big-4 & Enterprise Background","15+ Years Executive Leadership"],avatarInitials:"MB",accentColor:"#5A38FD"},{name:"Mallikarjuna Reddy",role:"Associate Director, Technology Assurance & Risk Advisory",tagline:"200+ Audit & GRC Engagements",image:"./arjun.jpeg",imagePosition:"center top",bio:"Mallikarjuna Reddy brings extensive experience working with multinational organizations, leading CPA firms, and growing businesses, with a strong background in external and internal audits, risk advisory, cybersecurity, compliance, and IT assurance. Having led and contributed to 200+ engagements across SOC 1 & SOC 2, ISO 27001, CMMC, HITECH, PCI DSS, HIPAA, GDPR, NIST, SOX ITGC, and TPRM.",highlights:["200+ Audit & GRC Engagements","MNC & Leading CPA Firm Experience","Audit, Cybersecurity & Compliance Leadership"],avatarInitials:"MR",accentColor:"#7C3AED"}];return u.jsxs("section",{id:"leadership",className:"leadership-section",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsxs("div",{className:"badge-pill",children:[u.jsx(_1,{size:14,className:"badge-icon"}),u.jsx("span",{children:"Leadership & Subject Matter Experts"})]}),u.jsx("h2",{children:"Experienced Leaders. Trusted Advisors. Proven Outcomes."}),u.jsx("p",{children:"Our leadership team combines deep subject matter expertise with hands-on operational experience."})]}),u.jsx("div",{className:"leadership-list",children:t.map((n,r)=>u.jsxs("div",{className:"leader-card glass-card",children:[u.jsxs("div",{className:"leader-avatar-col",children:[u.jsx("div",{className:"leader-avatar-ring",style:{"--accent":n.accentColor},children:u.jsxs("div",{className:"leader-avatar-wrap",children:[n.image?u.jsx("img",{src:n.image,alt:n.name,className:"leader-avatar-img",style:{objectPosition:n.imagePosition||"center top"},onError:i=>{i.target.style.display="none",i.target.nextSibling.style.display="flex"}}):null,u.jsx("div",{className:"leader-avatar-fallback",style:{display:n.image?"none":"flex",background:n.accentColor},children:n.avatarInitials})]})}),u.jsx("div",{className:"leader-tagline-badge",children:n.tagline})]}),u.jsxs("div",{className:"leader-content",children:[u.jsxs("div",{className:"leader-name-block",children:[u.jsx("h3",{className:"leader-name",children:n.name}),u.jsx("div",{className:"leader-role",children:n.role})]}),u.jsx("p",{className:"leader-bio",children:n.bio}),u.jsx("div",{className:"leader-highlights",children:n.highlights.map((i,o)=>u.jsxs("div",{className:"h-item",children:[u.jsx(C1,{size:14,className:"h-icon"}),u.jsx("span",{children:i})]},o))}),u.jsxs("button",{className:"btn-secondary leader-btn",onClick:()=>e(`Consultation with ${n.name}`),children:["Connect with ",n.name.split(" ")[0]]})]})]},r))})]}),u.jsx("style",{children:`
        .leadership-section {
          padding: 6rem 0;
          background: var(--bg-soft-purple);
        }

        .leadership-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 980px;
          margin: 0 auto;
        }

        .leader-card {
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: row;
          gap: 2.5rem;
          padding: 2.5rem;
          align-items: flex-start;
          transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }

        .leader-card:hover {
          border-color: var(--primary);
          box-shadow: 0 16px 45px rgba(90, 56, 253, 0.12);
          transform: translateY(-3px);
        }

        /* Avatar column */
        .leader-avatar-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
          flex-shrink: 0;
        }

        .leader-avatar-ring {
          width: 152px;
          height: 152px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, var(--accent, #5A38FD), #A855F7);
          box-shadow: 0 8px 28px rgba(90, 56, 253, 0.22);
        }

        .leader-avatar-wrap {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: var(--bg-soft-purple);
          border: 3px solid #FFFFFF;
        }

        .leader-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.4s ease;
        }

        .leader-card:hover .leader-avatar-img {
          transform: scale(1.06);
        }

        .leader-avatar-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.5rem;
          border-radius: 50%;
        }

        .leader-tagline-badge {
          background: var(--primary-light);
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
          text-align: center;
          white-space: nowrap;
        }

        /* Content column */
        .leader-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 0;
        }

        .leader-name-block {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .leader-name {
          font-size: 1.85rem;
          color: var(--text-dark);
          line-height: 1.2;
          margin: 0;
        }

        .leader-role {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--primary);
          line-height: 1.4;
        }

        .leader-bio {
          font-size: var(--fs-body);
          color: var(--text-body);
          line-height: 1.7;
          margin: 0;
        }

        .leader-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.25rem;
          background: var(--bg-soft-purple);
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-md);
        }

        .h-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--fs-small);
          font-weight: 600;
          color: var(--text-dark);
        }

        .h-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .leader-btn {
          align-self: flex-start;
        }

        @media (max-width: 768px) {
          .leader-card {
            flex-direction: column;
            align-items: center;
            padding: 2rem 1.5rem;
            text-align: center;
            gap: 1.5rem;
          }

          .leader-highlights {
            justify-content: center;
          }

          .leader-btn {
            align-self: center;
            width: 100%;
            justify-content: center;
          }

          .leader-name {
            font-size: 1.5rem;
          }
        }
      `})]})}function Mk({onOpenContact:e}){const t=[{num:"01",icon:u.jsx(P1,{size:24}),title:"Learn",subtitle:"Build Knowledge",desc:"Developing skills and expanding perspectives through structured training, workshops, and real-world exposure.",points:["Internships","Mentorship Programs","Training & Workshops","Webinars","Real-world Exposure"]},{num:"02",icon:u.jsx(U1,{size:24}),title:"Share",subtitle:"Inspire Others",desc:"Sharing industry insights, thought leadership articles, and expert discussions to make complex topics accessible.",points:["Thought Leadership","Industry Articles","Knowledge Webinars","Expert Roundtables"]},{num:"03",icon:u.jsx(_m,{size:24}),title:"Grow",subtitle:"Elevate Together",desc:"Fostering curiosity, innovation, and professional development across every stage of a cybersecurity career.",points:["Skill Acceleration","Career Pathways","Cross-domain Collaboration","Continuous Improvement"]},{num:"04",icon:u.jsx(A1,{size:24}),title:"Give Back",subtitle:"Create Impact",desc:"Contributing to the broader professional ecosystem through educational support and community mentorship.",points:["Community Initiatives","Pro-bono Guidance","Educational Forums","Nurturing Future Talent"]}];return u.jsxs("section",{id:"forward",className:"forward-section",children:[u.jsx("div",{className:"forward-bg-mesh"}),u.jsx("div",{className:"forward-glow-orb orb-1"}),u.jsx("div",{className:"forward-glow-orb orb-2"}),u.jsxs("div",{className:"container relative-z",children:[u.jsxs("div",{className:"section-header dark-header",children:[u.jsxs("div",{className:"badge-pill forward-pill",children:[u.jsx(yc,{size:16}),u.jsx("span",{children:"GAUSSIANS FORWARD"})]}),u.jsx("h2",{className:"dark-title",children:"Learn. Share. Grow. Give Back."}),u.jsx("div",{className:"section-divider forward-divider"}),u.jsx("p",{className:"dark-desc",children:"At Gaussians, we believe that building a stronger profession requires more than delivering great work for clients. It requires investing in people, sharing knowledge, creating opportunities, and contributing to communities."})]}),u.jsx("div",{className:"pillars-grid",children:t.map((n,r)=>u.jsxs("div",{className:"pillar-card dark-glass-card",children:[u.jsxs("div",{className:"pillar-top",children:[u.jsx("span",{className:"p-num",children:n.num}),u.jsx("div",{className:"p-icon",children:n.icon})]}),u.jsx("h3",{className:"p-title",children:n.title}),u.jsx("div",{className:"p-sub",children:n.subtitle}),u.jsx("p",{className:"p-desc",children:n.desc}),u.jsx("div",{className:"p-points",children:n.points.map((i,o)=>u.jsxs("div",{className:"pt-item",children:[u.jsx(Xi,{size:14,className:"pt-icon"}),u.jsx("span",{children:i})]},o))})]},r))}),u.jsxs("div",{className:"forward-cta-banner dark-cta-glass",children:[u.jsxs("div",{className:"f-cta-content",children:[u.jsx("h3",{children:"Build a Better Tomorrow for Our Profession"}),u.jsx("p",{children:"Whether you are a student, early-career professional, experienced expert, or industry partner, there is a place for you in the Gaussians Forward community."})]}),u.jsxs("button",{className:"btn-primary forward-cta-btn",onClick:()=>e("Gaussians Forward Community"),children:["Get Involved ",u.jsx(Hn,{size:16})]})]})]}),u.jsx("style",{children:`
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
          font-size: var(--fs-section);
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
          font-size: var(--fs-body);
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
          font-size: var(--fs-card);
          color: #FFFFFF;
          margin-bottom: 0.2rem;
        }

        .p-sub {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--fs-small);
          color: #A78BFA;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .p-desc {
          font-size: var(--fs-body);
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
          font-size: var(--fs-small);
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
          font-size: var(--fs-section);
          margin-bottom: 0.5rem;
        }

        .f-cta-content p {
          color: rgba(255, 255, 255, 0.9);
          font-size: var(--fs-body);
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
      `})]})}function Pk({isOpen:e,onClose:t,defaultTopic:n}){const[r,i]=I.useState({name:"",email:"",phone:"",company:"",topic:n||"General Inquiry",message:""}),[o,a]=I.useState(!1);if(I.useEffect(()=>{n&&i(c=>({...c,topic:n}))},[n]),!e)return null;const l=c=>{c.preventDefault(),a(!0)},s=()=>{a(!1),t()};return u.jsxs("div",{className:"modal-overlay",children:[u.jsxs("div",{className:"modal-container glass-card",children:[u.jsx("button",{className:"close-btn",onClick:s,"aria-label":"Close modal",children:u.jsx(xc,{size:20})}),o?u.jsxs("div",{className:"success-state",children:[u.jsx("div",{className:"success-icon-box",children:u.jsx(Xi,{size:54})}),u.jsx("h2",{children:"Consultation Requested!"}),u.jsxs("p",{children:["Thank you, ",u.jsx("strong",{children:r.name}),". A Gaussians security and compliance specialist will contact you shortly regarding ",u.jsx("strong",{children:r.topic}),"."]}),u.jsx("button",{className:"btn-primary",onClick:s,children:"Back to Website"})]}):u.jsxs("div",{className:"modal-content-grid",children:[u.jsxs("div",{className:"modal-info",children:[u.jsxs("div",{className:"badge-pill mb-2",children:[u.jsx(Zi,{size:14})," ",u.jsx("span",{children:"Talk to an Expert"})]}),u.jsx("h2",{children:"Ready to Operationalize Security & Compliance?"}),u.jsx("p",{className:"modal-intro",children:"Schedule a consultation with our experienced practitioners. We discuss practical timelines, scoping, and custom delivery options."}),u.jsxs("div",{className:"direct-contacts",children:[u.jsxs("div",{className:"c-item",children:[u.jsx(bm,{size:18,className:"c-icon"}),u.jsxs("div",{children:[u.jsx("span",{className:"c-label",children:"Email Us"}),u.jsx("span",{className:"c-val",children:"info@gaussians.com"})]})]}),u.jsxs("div",{className:"c-item",children:[u.jsx(jm,{size:18,className:"c-icon"}),u.jsxs("div",{children:[u.jsx("span",{className:"c-label",children:"Call Us"}),u.jsx("span",{className:"c-val",children:"+91 9711283991"})]})]}),u.jsxs("div",{className:"c-item",children:[u.jsx(Nm,{size:18,className:"c-icon"}),u.jsxs("div",{children:[u.jsx("span",{className:"c-label",children:"Global Headquarters"}),u.jsx("span",{className:"c-val",children:"Unit 314, Suncity Tower, Sector 65, Gurgaon, Haryana, 122002 India"})]})]})]})]}),u.jsxs("form",{onSubmit:l,className:"modal-form",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Full Name *"}),u.jsx("input",{type:"text",required:!0,placeholder:"e.g. Sarah Jenkins",value:r.name,onChange:c=>i({...r,name:c.target.value})})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Work Email *"}),u.jsx("input",{type:"email",required:!0,placeholder:"sarah@company.com",value:r.email,onChange:c=>i({...r,email:c.target.value})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Phone Number"}),u.jsx("input",{type:"tel",placeholder:"+1 (555) 000-0000",value:r.phone,onChange:c=>i({...r,phone:c.target.value})})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Area of Interest / Service"}),u.jsxs("select",{value:r.topic,onChange:c=>i({...r,topic:c.target.value}),children:[u.jsx("option",{value:"General Inquiry",children:"General Inquiry"}),u.jsx("option",{value:"SOC 1 / SOC 2 / SOC 3",children:"SOC 1 / SOC 2 / SOC 3 Audit"}),u.jsx("option",{value:"ISO 27001 / ISO 42001",children:"ISO 27001 / ISO 42001 (AI Security)"}),u.jsx("option",{value:"NIST AI RMF / CSF 2.0",children:"NIST AI RMF / CSF 2.0"}),u.jsx("option",{value:"HITRUST / HIPAA",children:"HITRUST / HIPAA Compliance"}),u.jsx("option",{value:"Third Party Risk & Vendor Audit",children:"Third Party Risk & Vendor Audit"}),u.jsx("option",{value:"Managed Security & Compliance",children:"Managed Security & Compliance"}),u.jsx("option",{value:"Gaussians Forward Community",children:"Gaussians Forward Community"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Project Details / Timelines"}),u.jsx("textarea",{rows:"3",placeholder:"Briefly describe your compliance goals, target timeline, or framework requirements...",value:r.message,onChange:c=>i({...r,message:c.target.value})})]}),u.jsxs("button",{type:"submit",className:"btn-primary form-submit-btn",children:["Schedule Consultation ",u.jsx(Em,{size:16})]})]})]})]}),u.jsx("style",{children:`
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
      `})]})}function Tk({isOpen:e,onClose:t}){const[n,r]=I.useState(""),[i,o]=I.useState("all"),[a,l]=I.useState([]),[s,c]=I.useState({name:"",email:"",message:""}),[d,f]=I.useState(!1),p=[{id:"all",name:"All Categories"},{id:"security",name:"Security & Governance"},{id:"ai",name:"AI & Emerging Tech"},{id:"privacy",name:"Privacy & Data"},{id:"cloud",name:"Cloud & Infrastructure"}],h=[{id:"soc2",code:"SOC 2",name:"SOC 1, SOC 2 & SOC 3",category:"security",desc:"Control mapping, evidence collection, and auditor liaison for Type I & II audits."},{id:"iso27001",code:"ISO 27001",name:"ISO/IEC 27001:2022",category:"security",desc:"ISMS design, internal audits, and Stage 1 & Stage 2 certification readiness."},{id:"iso42001",code:"ISO 42001",name:"ISO/IEC 42001 (AI MS)",category:"ai",desc:"Global standard for Artificial Intelligence Management Systems (AIMS)."},{id:"nist_ai",code:"NIST AI RMF",name:"NIST AI Risk Management",category:"ai",desc:"Govern, Map, and Measure functions for trustworthy, safe, and transparent AI system deployments."},{id:"nist_csf",code:"NIST CSF",name:"NIST Cybersecurity Framework 2.0",category:"security",desc:"Maturity assessments, gap remediation, and alignment across CSF functions."},{id:"hitrust",code:"HITRUST",name:"HITRUST CSF (r2 & e1)",category:"security",desc:"Validated assessment preparation and CAP management for healthcare & tech."},{id:"pci_dss",code:"PCI DSS",name:"PCI DSS v4.0",category:"privacy",desc:"CDE scope reduction, SAQ validation, and ROC audit readiness."},{id:"gdpr_ccpa",code:"GDPR / CCPA",name:"GDPR, CCPA & Privacy Laws",category:"privacy",desc:"Data mapping, DPIAs, DSAR workflows, and global privacy compliance."},{id:"csa_star",code:"CSA STAR",name:"Cloud Security Alliance STAR",category:"cloud",desc:"CCM mapping, CAIQ self-assessment, and STAR Level 1 & 2 readiness."},{id:"hipaa",code:"HIPAA",name:"HIPAA Security & Privacy",category:"privacy",desc:"PHI protection, Safeguards, and Business Associate Agreement (BAA) reviews."},{id:"cmmc",code:"CMMC",name:"CMMC & Cyber Essentials",category:"security",desc:"DoD supply chain requirements, NIST SP 800-171 readiness, and SSP authoring."}],y=m=>{l(x=>x.includes(m)?x.filter(k=>k!==m):[...x,m])},w=m=>{const x=m.map(N=>N.name),k=x.every(N=>a.includes(N));l(k?N=>N.filter(C=>!x.includes(C)):N=>Array.from(new Set([...N,...x])))},j=m=>{m.preventDefault(),f(!0)},g=()=>{l([]),c({name:"",email:"",message:""}),f(!1),t()},v=h.filter(m=>{const x=m.name.toLowerCase().includes(n.toLowerCase())||m.code.toLowerCase().includes(n.toLowerCase())||m.desc.toLowerCase().includes(n.toLowerCase()),k=i==="all"||m.category===i;return x&&k});return e?u.jsxs("div",{className:"modal-overlay",children:[u.jsxs("div",{className:"modal-container fw-explorer-container glass-card",children:[u.jsx("button",{className:"close-btn",onClick:g,"aria-label":"Close modal",children:u.jsx(xc,{size:20})}),d?u.jsxs("div",{className:"success-state",children:[u.jsx("div",{className:"success-icon-box",children:u.jsx(Xi,{size:54})}),u.jsx("h2",{children:"Framework Inquiry Submitted!"}),u.jsxs("p",{children:["Thank you, ",u.jsx("strong",{children:s.name}),". A Gaussians compliance engineer will follow up shortly to discuss your scoping and requirements for:"]}),u.jsx("div",{className:"submitted-list",children:a.length>0?a.map((m,x)=>u.jsx("span",{className:"submitted-tag",children:m},x)):u.jsx("span",{className:"submitted-tag",children:"General Services Portfolio"})}),u.jsx("button",{className:"btn-primary",onClick:g,children:"Back to Website"})]}):u.jsxs("div",{className:"explorer-grid",children:[u.jsxs("div",{className:"explorer-main",children:[u.jsxs("div",{className:"explorer-header",children:[u.jsxs("div",{className:"badge-pill mb-2",children:[u.jsx(Zi,{size:14})," ",u.jsx("span",{children:"Interactive Catalog"})]}),u.jsx("h2",{children:"Explore Compliance Frameworks"}),u.jsx("p",{className:"subtitle",children:"Select the frameworks you want to assess or implement, then submit a request on the right."})]}),u.jsxs("div",{className:"filter-bar",children:[u.jsxs("div",{className:"search-box",children:[u.jsx($1,{size:18,className:"search-icon"}),u.jsx("input",{type:"text",placeholder:"Search SOC 2, ISO, HIPAA, AI...",value:n,onChange:m=>r(m.target.value)})]}),u.jsx("div",{className:"cat-scroll",children:p.map(m=>u.jsx("button",{className:`cat-btn ${i===m.id?"active":""}`,onClick:()=>o(m.id),children:m.name},m.id))})]}),v.length>0&&u.jsx("button",{className:"bulk-select-btn",onClick:()=>w(v),children:v.map(m=>m.name).every(m=>a.includes(m))?"Deselect All Visible":"Select All Visible"}),u.jsx("div",{className:"catalog-list",children:v.length>0?v.map(m=>{const x=a.includes(m.name);return u.jsxs("div",{className:`catalog-item ${x?"selected":""}`,onClick:()=>y(m.name),children:[u.jsx("div",{className:"item-checkbox",children:x?u.jsx(F1,{size:20,className:"checkbox-icon checked"}):u.jsx(H1,{size:20,className:"checkbox-icon"})}),u.jsxs("div",{className:"item-details",children:[u.jsxs("div",{className:"item-header",children:[u.jsx("span",{className:"item-code",children:m.code}),u.jsx("span",{className:"item-category",children:m.category})]}),u.jsx("h4",{className:"item-name",children:m.name}),u.jsx("p",{className:"item-desc",children:m.desc})]})]},m.id)}):u.jsx("div",{className:"no-results",children:u.jsxs("p",{children:['No frameworks found matching "',n,'" under this category.']})})})]}),u.jsxs("div",{className:"explorer-sidebar",children:[u.jsx("h3",{children:"Request Details"}),u.jsx("p",{className:"sidebar-intro",children:"Submit this request to receive a custom compliance plan, readiness template, and pricing overview."}),u.jsxs("div",{className:"selected-preview",children:[u.jsxs("span",{className:"preview-label",children:["Selected Frameworks (",a.length,")"]}),a.length>0?u.jsx("div",{className:"preview-tags",children:a.map((m,x)=>u.jsxs("span",{className:"preview-tag",children:[m,u.jsx("button",{className:"tag-remove",onClick:()=>y(m),children:"×"})]},x))}):u.jsx("div",{className:"preview-empty",children:u.jsx("p",{children:"Please select one or more frameworks on the left list to build your custom package."})})]}),u.jsxs("form",{onSubmit:j,className:"explorer-form",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Full Name *"}),u.jsx("input",{type:"text",required:!0,placeholder:"e.g. Michael Chen",value:s.name,onChange:m=>c({...s,name:m.target.value})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Work Email *"}),u.jsx("input",{type:"email",required:!0,placeholder:"michael@company.com",value:s.email,onChange:m=>c({...s,email:m.target.value})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Project Details / Custom Needs"}),u.jsx("textarea",{rows:"4",placeholder:"Briefly describe your timing, current audit timeline, or scope size...",value:s.message,onChange:m=>c({...s,message:m.target.value})})]}),u.jsxs("button",{type:"submit",className:"btn-primary submit-btn",children:["Submit Request ",u.jsx(Em,{size:15})]})]})]})]})]}),u.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fwFadeIn 0.25s ease;
        }

        @keyframes fwFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
          z-index: 10;
        }

        .close-btn:hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        .fw-explorer-container {
          position: relative;
          max-width: 1080px;
          width: 100%;
          max-height: 85vh;
          overflow-y: hidden;
          padding: 2.5rem;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
        }

        .explorer-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 2.5rem;
          height: calc(85vh - 5rem);
          overflow: hidden;
        }

        .explorer-main {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          height: 100%;
          padding-right: 0.5rem;
        }

        .explorer-header h2 {
          font-size: var(--fs-section);
          margin-bottom: 0.5rem;
        }

        .explorer-header .subtitle {
          font-size: var(--fs-body);
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .filter-bar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .search-box {
          position: relative;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-box input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.75rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-purple);
          font-size: var(--fs-body);
          outline: none;
          background: var(--bg-soft-purple);
          transition: var(--transition-fast);
        }

        .search-box input:focus {
          border-color: var(--primary);
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(90, 56, 253, 0.1);
        }

        .cat-scroll {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          scrollbar-width: thin;
        }

        .cat-btn {
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-purple);
          background: #FFFFFF;
          font-size: var(--fs-small);
          font-weight: 600;
          color: var(--text-dark);
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition-fast);
        }

        .cat-btn:hover, .cat-btn.active {
          border-color: var(--primary);
          color: var(--primary);
        }

        .cat-btn.active {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
        }

        .bulk-select-btn {
          align-self: flex-start;
          background: none;
          border: none;
          color: var(--primary);
          font-size: var(--fs-small);
          font-weight: 700;
          cursor: pointer;
          margin-bottom: 0.75rem;
          padding: 0;
        }

        .bulk-select-btn:hover {
          text-decoration: underline;
        }

        .catalog-list {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-right: 0.5rem;
          scrollbar-width: thin;
        }

        .catalog-item {
          display: flex;
          gap: 1rem;
          padding: 1.15rem;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-md);
          background: #FFFFFF;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .catalog-item:hover {
          border-color: var(--primary-border);
          background: rgba(90, 56, 253, 0.02);
        }

        .catalog-item.selected {
          border-color: var(--primary);
          background: rgba(90, 56, 253, 0.04);
        }

        .checkbox-icon {
          color: var(--text-muted);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .checkbox-icon.checked {
          color: var(--primary);
        }

        .item-details {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .item-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .item-code {
          background: var(--primary-light);
          color: var(--primary);
          font-size: var(--fs-small);
          font-weight: 800;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .item-category {
          font-size: var(--fs-small);
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .item-name {
          font-size: var(--fs-body);
          color: var(--text-dark);
          font-weight: 700;
        }

        .item-desc {
          font-size: var(--fs-small);
          color: var(--text-muted);
          line-height: 1.45;
        }

        .no-results {
          text-align: center;
          padding: 3rem 1.5rem;
          color: var(--text-muted);
          font-size: var(--fs-body);
        }

        /* Sidebar style */
        .explorer-sidebar {
          background: var(--bg-soft-purple);
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          height: 100%;
        }

        .explorer-sidebar h3 {
          font-size: var(--fs-card);
          margin-bottom: 0.5rem;
        }

        .sidebar-intro {
          font-size: var(--fs-small);
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .selected-preview {
          margin-bottom: 1.5rem;
        }

        .preview-label {
          display: block;
          font-size: var(--fs-small);
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 0.65rem;
        }

        .preview-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          max-height: 120px;
          overflow-y: auto;
        }

        .preview-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.65rem;
          background: #FFFFFF;
          border: 1px solid var(--border-purple);
          border-radius: var(--radius-full);
          font-size: var(--fs-small);
          font-weight: 600;
          color: var(--primary);
        }

        .tag-remove {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 1.1rem;
          line-height: 1;
          padding: 0;
        }

        .tag-remove:hover {
          color: red;
        }

        .preview-empty {
          padding: 1.15rem;
          border: 1px dashed var(--border-purple);
          border-radius: var(--radius-md);
          text-align: center;
          background: #FFFFFF;
        }

        .preview-empty p {
          font-size: var(--fs-small);
          color: var(--text-muted);
          line-height: 1.4;
        }

        .form-group label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: var(--fs-small);
          color: var(--text-dark);
          margin-bottom: 0.4rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.7rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-purple);
          font-family: var(--font-body);
          font-size: var(--fs-body);
          color: var(--text-dark);
          background: #FFFFFF;
          outline: none;
          transition: var(--transition-fast);
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(90, 56, 253, 0.1);
        }

        .explorer-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          padding: 0.8rem;
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
          font-size: var(--fs-section);
          margin-bottom: 1rem;
        }

        .success-state p {
          font-size: var(--fs-body);
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .submitted-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          justify-content: center;
          margin-bottom: 1.75rem;
        }

        .submitted-tag {
          padding: 0.3rem 0.8rem;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: var(--radius-full);
          font-size: var(--fs-small);
          font-weight: 600;
        }

        @media (max-width: 868px) {
          .fw-explorer-container {
            max-height: 95vh;
          }
          .explorer-grid {
            grid-template-columns: 1fr;
            height: calc(95vh - 5rem);
            overflow-y: auto;
          }
          .explorer-main, .explorer-sidebar {
            height: auto;
            overflow-y: visible;
          }
        }
      `})]}):null}function Ak({onOpenContact:e}){const t=n=>{const r=document.getElementById(n);r&&r.scrollIntoView({behavior:"smooth"})};return u.jsxs("footer",{id:"connect",className:"site-footer",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"footer-top-grid",children:[u.jsxs("div",{className:"footer-brand-col",children:[u.jsx("div",{className:"footer-logo",children:u.jsx("img",{src:"./assets/logo.jpeg",alt:"Gaussians Logo White",className:"f-logo-img"})}),u.jsx("p",{className:"footer-brand-desc",children:"Helping organizations transform security, compliance, and risk management from business challenges into strategic advantages through practical execution and long-term partnership."}),u.jsxs("div",{className:"footer-tagline-badge",children:[u.jsx(B1,{size:16})," ",u.jsx("span",{children:"We do not only advise. We deliver."})]})]}),u.jsxs("div",{className:"footer-links-col",children:[u.jsx("h4",{className:"f-title",children:"Core Services"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("button",{onClick:()=>t("services"),children:"Cybersecurity & Compliance"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>t("services"),children:"Risk & Governance"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>t("services"),children:"Audit & Assurance"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>t("services"),children:"Managed Services"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>t("services"),children:"Program Implementation"})})]})]}),u.jsxs("div",{className:"footer-links-col",children:[u.jsx("h4",{className:"f-title",children:"Key Frameworks"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("button",{onClick:()=>t("frameworks"),children:"SOC 1, SOC 2 & SOC 3"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>t("frameworks"),children:"ISO 27001 & ISO 42001 (AI)"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>t("frameworks"),children:"NIST CSF 2.0 & NIST AI RMF"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>t("frameworks"),children:"HITRUST CSF & HIPAA"})}),u.jsx("li",{children:u.jsx("button",{onClick:()=>t("frameworks"),children:"PCI DSS v4.0 & GDPR"})})]})]}),u.jsxs("div",{className:"footer-contact-col",children:[u.jsx("h4",{className:"f-title",children:"Global Headquarters"}),u.jsxs("div",{className:"f-contact-item",children:[u.jsx(Nm,{size:16,className:"f-c-icon"}),u.jsx("span",{children:"Unit 314, Suncity Tower, Sector 65, Gurgaon, Haryana, 122002 India"})]}),u.jsxs("div",{className:"f-contact-item",children:[u.jsx(jm,{size:16,className:"f-c-icon"}),u.jsx("span",{children:"+91 9711283991"})]}),u.jsxs("div",{className:"f-contact-item",children:[u.jsx(bm,{size:16,className:"f-c-icon"}),u.jsx("span",{children:"info@gaussians.com"})]}),u.jsxs("button",{className:"btn-primary f-btn",onClick:()=>e(),children:["Talk to an Expert ",u.jsx(N1,{size:16})]})]})]}),u.jsxs("div",{className:"footer-bottom",children:[u.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," Gaussians. All rights reserved. Building Trust. Delivering Assurance."]}),u.jsxs("div",{className:"f-bottom-links",children:[u.jsx("a",{href:"#",children:"Privacy Policy"}),u.jsx("span",{children:"•"}),u.jsx("a",{href:"#",children:"Terms of Service"}),u.jsx("span",{children:"•"}),u.jsx("button",{onClick:()=>t("forward"),children:"Gaussians Forward Initiative"})]})]})]}),u.jsx("style",{children:`
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
          display: block;
          mix-blend-mode: screen;
        }

        .footer-brand-desc {
          font-size: var(--fs-body);
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
          font-size: var(--fs-small);
          color: #D8D2FF;
          font-weight: 600;
        }

        .f-title {
          font-size: var(--fs-card);
          color: #FFFFFF;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
          font-weight: 700;
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
          font-size: var(--fs-body);
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
          font-size: var(--fs-body);
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
          font-size: var(--fs-small);
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
          font-size: var(--fs-small);
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
      `})]})}function Rk(){const[e,t]=I.useState(!1),[n,r]=I.useState(!1),[i,o]=I.useState("General Inquiry"),[a,l]=I.useState(!1),s=(d="General Inquiry")=>{o(d),t(!0)},c=()=>{const d=document.getElementById("services");d&&d.scrollIntoView({behavior:"smooth"})};return I.useEffect(()=>{const d=()=>{l(window.scrollY>600)};window.addEventListener("scroll",d);const f=new IntersectionObserver(y=>{y.forEach(w=>{w.isIntersecting&&w.target.classList.add("visible")})},{threshold:.08});return document.querySelectorAll(".fade-in-up, .scale-in, .slide-in-left").forEach(y=>f.observe(y)),()=>{f.disconnect(),window.removeEventListener("scroll",d)}},[]),u.jsxs("div",{className:"app-main",children:[u.jsx(Y1,{onOpenContact:()=>s("Navbar Inquiry")}),u.jsxs("main",{children:[u.jsx(Q1,{onOpenContact:()=>s("Hero Expert Consultation"),onExploreServices:c}),u.jsx(X1,{}),u.jsx(Z1,{onOpenContact:d=>s(d)}),u.jsx(K1,{onOpenContact:d=>s(`${d} Consultation`),onOpenFrameworks:()=>r(!0)}),u.jsx(J1,{onOpenContact:d=>s(`${d} Delivery Model`)}),u.jsx(ey,{onOpenContact:d=>s(d)}),u.jsx(Fk,{onOpenContact:d=>s(d)}),u.jsx(zk,{onOpenContact:d=>s(d)}),u.jsx(Mk,{onOpenContact:d=>s(d)})]}),u.jsx(Ak,{onOpenContact:()=>s("Footer Inquiry")}),u.jsx(Pk,{isOpen:e,onClose:()=>t(!1),defaultTopic:i}),u.jsx(Tk,{isOpen:n,onClose:()=>r(!1)}),a&&u.jsx("button",{className:"scroll-to-top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Scroll to top",children:u.jsx(j1,{size:20})})]})}Xl.createRoot(document.getElementById("root")).render(u.jsx(xe.StrictMode,{children:u.jsx(Rk,{})}));
