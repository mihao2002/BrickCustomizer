(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Zf={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function Sy(){if(f_)return Uo;f_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Uo.Fragment=t,Uo.jsx=i,Uo.jsxs=i,Uo}var h_;function My(){return h_||(h_=1,Zf.exports=Sy()),Zf.exports}var yr=My(),Kf={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function Ey(){if(d_)return ae;d_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(N,nt,vt){this.props=N,this.context=nt,this.refs=T,this.updater=vt||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=y.prototype;function O(N,nt,vt){this.props=N,this.context=nt,this.refs=T,this.updater=vt||S}var L=O.prototype=new _;L.constructor=O,E(L,y.prototype),L.isPureReactComponent=!0;var w=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function B(N,nt,vt,St,$,pt){return vt=pt.ref,{$$typeof:r,type:N,key:nt,ref:vt!==void 0?vt:null,props:pt}}function k(N,nt){return B(N.type,nt,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function R(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(vt){return nt[vt]})}var U=/\/+/g;function J(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?R(""+N.key):nt.toString(36)}function W(){}function et(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(W,W):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ct(N,nt,vt,St,$){var pt=typeof N;(pt==="undefined"||pt==="boolean")&&(N=null);var yt=!1;if(N===null)yt=!0;else switch(pt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(N.$$typeof){case r:case t:yt=!0;break;case g:return yt=N._init,ct(yt(N._payload),nt,vt,St,$)}}if(yt)return $=$(N),yt=St===""?"."+J(N,0):St,w($)?(vt="",yt!=null&&(vt=yt.replace(U,"$&/")+"/"),ct($,nt,vt,"",function(ie){return ie})):$!=null&&(D($)&&($=k($,vt+($.key==null||N&&N.key===$.key?"":(""+$.key).replace(U,"$&/")+"/")+yt)),nt.push($)),1;yt=0;var bt=St===""?".":St+":";if(w(N))for(var Dt=0;Dt<N.length;Dt++)St=N[Dt],pt=bt+J(St,Dt),yt+=ct(St,nt,vt,pt,$);else if(Dt=v(N),typeof Dt=="function")for(N=Dt.call(N),Dt=0;!(St=N.next()).done;)St=St.value,pt=bt+J(St,Dt++),yt+=ct(St,nt,vt,pt,$);else if(pt==="object"){if(typeof N.then=="function")return ct(et(N),nt,vt,St,$);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return yt}function I(N,nt,vt){if(N==null)return N;var St=[],$=0;return ct(N,St,"","",function(pt){return nt.call(vt,pt,$++)}),St}function Y(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(vt){(N._status===0||N._status===-1)&&(N._status=1,N._result=vt)},function(vt){(N._status===0||N._status===-1)&&(N._status=2,N._result=vt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var X=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function mt(){}return ae.Children={map:I,forEach:function(N,nt,vt){I(N,function(){nt.apply(this,arguments)},vt)},count:function(N){var nt=0;return I(N,function(){nt++}),nt},toArray:function(N){return I(N,function(nt){return nt})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ae.Component=y,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=O,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ae.__COMPILER_RUNTIME={__proto__:null,c:function(N){return z.H.useMemoCache(N)}},ae.cache=function(N){return function(){return N.apply(null,arguments)}},ae.cloneElement=function(N,nt,vt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var St=E({},N.props),$=N.key,pt=void 0;if(nt!=null)for(yt in nt.ref!==void 0&&(pt=void 0),nt.key!==void 0&&($=""+nt.key),nt)!H.call(nt,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&nt.ref===void 0||(St[yt]=nt[yt]);var yt=arguments.length-2;if(yt===1)St.children=vt;else if(1<yt){for(var bt=Array(yt),Dt=0;Dt<yt;Dt++)bt[Dt]=arguments[Dt+2];St.children=bt}return B(N.type,$,void 0,void 0,pt,St)},ae.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ae.createElement=function(N,nt,vt){var St,$={},pt=null;if(nt!=null)for(St in nt.key!==void 0&&(pt=""+nt.key),nt)H.call(nt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&($[St]=nt[St]);var yt=arguments.length-2;if(yt===1)$.children=vt;else if(1<yt){for(var bt=Array(yt),Dt=0;Dt<yt;Dt++)bt[Dt]=arguments[Dt+2];$.children=bt}if(N&&N.defaultProps)for(St in yt=N.defaultProps,yt)$[St]===void 0&&($[St]=yt[St]);return B(N,pt,void 0,void 0,null,$)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(N){return{$$typeof:d,render:N}},ae.isValidElement=D,ae.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Y}},ae.memo=function(N,nt){return{$$typeof:p,type:N,compare:nt===void 0?null:nt}},ae.startTransition=function(N){var nt=z.T,vt={};z.T=vt;try{var St=N(),$=z.S;$!==null&&$(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(mt,X)}catch(pt){X(pt)}finally{z.T=nt}},ae.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ae.use=function(N){return z.H.use(N)},ae.useActionState=function(N,nt,vt){return z.H.useActionState(N,nt,vt)},ae.useCallback=function(N,nt){return z.H.useCallback(N,nt)},ae.useContext=function(N){return z.H.useContext(N)},ae.useDebugValue=function(){},ae.useDeferredValue=function(N,nt){return z.H.useDeferredValue(N,nt)},ae.useEffect=function(N,nt,vt){var St=z.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(N,nt)},ae.useId=function(){return z.H.useId()},ae.useImperativeHandle=function(N,nt,vt){return z.H.useImperativeHandle(N,nt,vt)},ae.useInsertionEffect=function(N,nt){return z.H.useInsertionEffect(N,nt)},ae.useLayoutEffect=function(N,nt){return z.H.useLayoutEffect(N,nt)},ae.useMemo=function(N,nt){return z.H.useMemo(N,nt)},ae.useOptimistic=function(N,nt){return z.H.useOptimistic(N,nt)},ae.useReducer=function(N,nt,vt){return z.H.useReducer(N,nt,vt)},ae.useRef=function(N){return z.H.useRef(N)},ae.useState=function(N){return z.H.useState(N)},ae.useSyncExternalStore=function(N,nt,vt){return z.H.useSyncExternalStore(N,nt,vt)},ae.useTransition=function(){return z.H.useTransition()},ae.version="19.1.1",ae}var p_;function Ad(){return p_||(p_=1,Kf.exports=Ey()),Kf.exports}var Cc=Ad(),Qf={exports:{}},No={},Jf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function Ty(){return m_||(m_=1,(function(r){function t(I,Y){var X=I.length;I.push(Y);t:for(;0<X;){var mt=X-1>>>1,N=I[mt];if(0<l(N,Y))I[mt]=Y,I[X]=N,X=mt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var Y=I[0],X=I.pop();if(X!==Y){I[0]=X;t:for(var mt=0,N=I.length,nt=N>>>1;mt<nt;){var vt=2*(mt+1)-1,St=I[vt],$=vt+1,pt=I[$];if(0>l(St,X))$<N&&0>l(pt,St)?(I[mt]=pt,I[$]=X,mt=$):(I[mt]=St,I[vt]=X,mt=vt);else if($<N&&0>l(pt,X))I[mt]=pt,I[$]=X,mt=$;else break t}}return Y}function l(I,Y){var X=I.sortIndex-Y.sortIndex;return X!==0?X:I.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,v=3,S=!1,E=!1,T=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(I){for(var Y=i(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=I)s(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function z(I){if(T=!1,w(I),!E)if(i(m)!==null)E=!0,H||(H=!0,J());else{var Y=i(p);Y!==null&&ct(z,Y.startTime-I)}}var H=!1,B=-1,k=5,D=-1;function R(){return y?!0:!(r.unstable_now()-D<k)}function U(){if(y=!1,H){var I=r.unstable_now();D=I;var Y=!0;try{t:{E=!1,T&&(T=!1,O(B),B=-1),S=!0;var X=v;try{e:{for(w(I),x=i(m);x!==null&&!(x.expirationTime>I&&R());){var mt=x.callback;if(typeof mt=="function"){x.callback=null,v=x.priorityLevel;var N=mt(x.expirationTime<=I);if(I=r.unstable_now(),typeof N=="function"){x.callback=N,w(I),Y=!0;break e}x===i(m)&&s(m),w(I)}else s(m);x=i(m)}if(x!==null)Y=!0;else{var nt=i(p);nt!==null&&ct(z,nt.startTime-I),Y=!1}}break t}finally{x=null,v=X,S=!1}Y=void 0}}finally{Y?J():H=!1}}}var J;if(typeof L=="function")J=function(){L(U)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,et=W.port2;W.port1.onmessage=U,J=function(){et.postMessage(null)}}else J=function(){_(U,0)};function ct(I,Y){B=_(function(){I(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(I){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var X=v;v=Y;try{return I()}finally{v=X}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(I,Y){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var X=v;v=I;try{return Y()}finally{v=X}},r.unstable_scheduleCallback=function(I,Y,X){var mt=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?mt+X:mt):X=mt,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=X+N,I={id:g++,callback:Y,priorityLevel:I,startTime:X,expirationTime:N,sortIndex:-1},X>mt?(I.sortIndex=X,t(p,I),i(m)===null&&I===i(p)&&(T?(O(B),B=-1):T=!0,ct(z,X-mt))):(I.sortIndex=N,t(m,I),E||S||(E=!0,H||(H=!0,J()))),I},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(I){var Y=v;return function(){var X=v;v=Y;try{return I.apply(this,arguments)}finally{v=X}}}})($f)),$f}var g_;function by(){return g_||(g_=1,Jf.exports=Ty()),Jf.exports}var th={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function Ay(){if(__)return wn;__=1;var r=Ad();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},wn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.1.1",wn}var v_;function Ry(){if(v_)return th.exports;v_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),th.exports=Ay(),th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function Cy(){if(x_)return No;x_=1;var r=by(),t=Ad(),i=Ry();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,b=u.child;b;){if(b===a){M=!0,a=u,o=f;break}if(b===o){M=!0,o=u,a=f;break}b=b.sibling}if(!M){for(b=f.child;b;){if(b===a){M=!0,a=f,o=u;break}if(b===o){M=!0,o=f,a=u;break}b=b.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var W=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===W?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case T:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:et(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return et(e(n))}catch{}}return null}var ct=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},mt=[],N=-1;function nt(e){return{current:e}}function vt(e){0>N||(e.current=mt[N],mt[N]=null,N--)}function St(e,n){N++,mt[N]=e.current,e.current=n}var $=nt(null),pt=nt(null),yt=nt(null),bt=nt(null);function Dt(e,n){switch(St(yt,n),St(pt,e),St($,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Fg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Fg(n),e=Hg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt($),St($,e)}function ie(){vt($),vt(pt),vt(yt)}function qt(e){e.memoizedState!==null&&St(bt,e);var n=$.current,a=Hg(n,e.type);n!==a&&(St(pt,e),St($,a))}function Le(e){pt.current===e&&(vt($),vt(pt)),bt.current===e&&(vt(bt),Ro._currentValue=X)}var Ce=Object.prototype.hasOwnProperty,re=r.unstable_scheduleCallback,G=r.unstable_cancelCallback,bn=r.unstable_shouldYield,ue=r.unstable_requestPaint,te=r.unstable_now,Bt=r.unstable_getCurrentPriorityLevel,Ae=r.unstable_ImmediatePriority,Ft=r.unstable_UserBlockingPriority,P=r.unstable_NormalPriority,A=r.unstable_LowPriority,at=r.unstable_IdlePriority,xt=r.log,Mt=r.unstable_setDisableYieldValue,ht=null,It=null;function At(e){if(typeof xt=="function"&&Mt(e),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(ht,e)}catch{}}var Rt=Math.clz32?Math.clz32:Ht,_e=Math.log,Tt=Math.LN2;function Ht(e){return e>>>=0,e===0?32:31-(_e(e)/Tt|0)|0}var Yt=256,Kt=4194304;function Ot(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function le(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=Ot(o):(M&=b,M!==0?u=Ot(M):a||(a=b&~e,a!==0&&(u=Ot(a))))):(b=o&~f,b!==0?u=Ot(b):M!==0?u=Ot(M):a||(a=o&~e,a!==0&&(u=Ot(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ee(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ue(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=Yt;return Yt<<=1,(Yt&4194048)===0&&(Yt=256),e}function Lt(){var e=Kt;return Kt<<=1,(Kt&62914560)===0&&(Kt=4194304),e}function ut(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function gt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pt(e,n,a,o,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,F=e.expirationTimes,it=e.hiddenUpdates;for(a=M&~a;0<a;){var ft=31-Rt(a),_t=1<<ft;b[ft]=0,F[ft]=-1;var st=it[ft];if(st!==null)for(it[ft]=null,ft=0;ft<st.length;ft++){var ot=st[ft];ot!==null&&(ot.lane&=-536870913)}a&=~_t}o!==0&&Nt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function Nt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Rt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function ne(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Rt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function He(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $e(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:s_(e.type))}function kn(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var hn=Math.random().toString(36).slice(2),sn="__reactFiber$"+hn,xn="__reactProps$"+hn,On="__reactContainer$"+hn,Ya="__reactEvents$"+hn,Yo="__reactListeners$"+hn,jo="__reactHandles$"+hn,ja="__reactResources$"+hn,la="__reactMarker$"+hn;function ca(e){delete e[sn],delete e[xn],delete e[Ya],delete e[Yo],delete e[jo]}function wi(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[On]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Xg(e);e!==null;){if(a=e[sn])return a;e=Xg(e)}return n}e=a,a=e.parentNode}return null}function Di(e){if(e=e[sn]||e[On]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Za(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ua(e){var n=e[ja];return n||(n=e[ja]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(e){e[la]=!0}var Zo=new Set,Ko={};function Li(e,n){C(e,n),C(e+"Capture",n)}function C(e,n){for(Ko[e]=n,e=0;e<n.length;e++)Zo.add(n[e])}var j=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},lt={};function Q(e){return Ce.call(lt,e)?!0:Ce.call(rt,e)?!1:j.test(e)?lt[e]=!0:(rt[e]=!0,!1)}function Et(e,n,a){if(Q(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ut(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var zt,Jt;function jt(e){if(zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);zt=n&&n[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+e+Jt}var kt=!1;function he(e,n){if(!e||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var st=ot}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ot){st=ot}e.call(_t.prototype)}}else{try{throw Error()}catch(ot){st=ot}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&st&&typeof ot.stack=="string")return[ot.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],b=f[1];if(M&&b){var F=M.split(`
`),it=b.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===it.length)for(o=F.length-1,u=it.length-1;1<=o&&0<=u&&F[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==it[u]){var ft=`
`+F[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jt(a):""}function Ee(e){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return jt("Activity");default:return""}}function We(e){try{var n="";do n+=Ee(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xt(e){var n=xe(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){e._valueTracker||(e._valueTracker=Xt(e))}function Se(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=xe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function An(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fa=/[\n"\\]/g;function Ge(e){return e.replace(fa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ui(e,n,a,o,u,f,M,b){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ve(n)):e.value!==""+ve(n)&&(e.value=""+ve(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,M,ve(n)):a!=null?Rn(e,M,ve(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+ve(b):e.removeAttribute("name")}function Be(e,n,a,o,u,f,M,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ve(a):"",n=n!=null?""+ve(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Rn(e,n,a){n==="number"&&An(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ve(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function dn(e,n,a){if(n!=null&&(n=""+ve(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ve(a):""}function yn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ct(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ve(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function xi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Hd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Fd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Fd(e,f,n[f])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return yv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var jc=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,ws=null;function Gd(e){var n=Di(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ui(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[xn]||null;if(!u)throw Error(s(90));Ui(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Se(o)}break t;case"textarea":dn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(e,!!a.multiple,n,!1)}}}var Kc=!1;function Vd(e,n,a){if(Kc)return e(n,a);Kc=!0;try{var o=e(n);return o}finally{if(Kc=!1,(Cs!==null||ws!==null)&&(Il(),Cs&&(n=Cs,e=ws,ws=Cs=null,Gd(n),e)))for(n=0;n<e.length;n++)Gd(e[n])}}function Fr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(Oi)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Qc=!1}var ha=null,Jc=null,Jo=null;function kd(){if(Jo)return Jo;var e,n=Jc,a=n.length,o,u="value"in ha?ha.value:ha.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return Jo=u.slice(e,1<o?1-o:void 0)}function $o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Xd(){return!1}function Pn(e){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Xd,this.isPropagationStopped=Xd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Pn(Ka),Gr=g({},Ka,{view:0,detail:0}),Sv=Pn(Gr),$c,tu,Vr,nl=g({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?($c=e.screenX-Vr.screenX,tu=e.screenY-Vr.screenY):tu=$c=0,Vr=e),$c)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),Wd=Pn(nl),Mv=g({},nl,{dataTransfer:0}),Ev=Pn(Mv),Tv=g({},Gr,{relatedTarget:0}),eu=Pn(Tv),bv=g({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=Pn(bv),Rv=g({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cv=Pn(Rv),wv=g({},Ka,{data:0}),qd=Pn(wv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Uv[e])?!!n[e]:!1}function nu(){return Nv}var Ov=g({},Gr,{key:function(e){if(e.key){var n=Dv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pv=Pn(Ov),Iv=g({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=Pn(Iv),zv=g({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),Bv=Pn(zv),Fv=g({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=Pn(Fv),Gv=g({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=Pn(Gv),kv=g({},Ka,{newState:0,oldState:0}),Xv=Pn(kv),Wv=[9,13,27,32],iu=Oi&&"CompositionEvent"in window,kr=null;Oi&&"documentMode"in document&&(kr=document.documentMode);var qv=Oi&&"TextEvent"in window&&!kr,jd=Oi&&(!iu||kr&&8<kr&&11>=kr),Zd=" ",Kd=!1;function Qd(e,n){switch(e){case"keyup":return Wv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ds=!1;function Yv(e,n){switch(e){case"compositionend":return Jd(n);case"keypress":return n.which!==32?null:(Kd=!0,Zd);case"textInput":return e=n.data,e===Zd&&Kd?null:e;default:return null}}function jv(e,n){if(Ds)return e==="compositionend"||!iu&&Qd(e,n)?(e=kd(),Jo=Jc=ha=null,Ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jd&&n.locale!=="ko"?null:n.data;default:return null}}var Zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zv[e.type]:n==="textarea"}function tp(e,n,a,o){Cs?ws?ws.push(o):ws=[o]:Cs=o,n=Vl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Xr=null,Wr=null;function Kv(e){Og(e,0)}function il(e){var n=Za(e);if(Se(n))return e}function ep(e,n){if(e==="change")return n}var np=!1;if(Oi){var au;if(Oi){var su="oninput"in document;if(!su){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),su=typeof ip.oninput=="function"}au=su}else au=!1;np=au&&(!document.documentMode||9<document.documentMode)}function ap(){Xr&&(Xr.detachEvent("onpropertychange",sp),Wr=Xr=null)}function sp(e){if(e.propertyName==="value"&&il(Wr)){var n=[];tp(n,Wr,e,Zc(e)),Vd(Kv,n)}}function Qv(e,n,a){e==="focusin"?(ap(),Xr=n,Wr=a,Xr.attachEvent("onpropertychange",sp)):e==="focusout"&&ap()}function Jv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(Wr)}function $v(e,n){if(e==="click")return il(n)}function tx(e,n){if(e==="input"||e==="change")return il(n)}function ex(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:ex;function qr(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ce.call(n,u)||!Xn(e[u],n[u]))return!1}return!0}function rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function op(e,n){var a=rp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rp(a)}}function lp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=An(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=An(e.document)}return n}function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var nx=Oi&&"documentMode"in document&&11>=document.documentMode,Ls=null,ou=null,Yr=null,lu=!1;function up(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||Ls==null||Ls!==An(o)||(o=Ls,"selectionStart"in o&&ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Yr&&qr(Yr,o)||(Yr=o,o=Vl(ou,"onSelect"),0<o.length&&(n=new el("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ls)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Us={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},cu={},fp={};Oi&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Ja(e){if(cu[e])return cu[e];if(!Us[e])return e;var n=Us[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in fp)return cu[e]=n[a];return e}var hp=Ja("animationend"),dp=Ja("animationiteration"),pp=Ja("animationstart"),ix=Ja("transitionrun"),ax=Ja("transitionstart"),sx=Ja("transitioncancel"),mp=Ja("transitionend"),gp=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function ui(e,n){gp.set(e,n),Li(n,[e])}var _p=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=_p.get(e);return a!==void 0?a:(n={value:e,source:n,stack:We(n)},_p.set(e,n),n)}return{value:e,source:n,stack:We(n)}}var ei=[],Ns=0,fu=0;function al(){for(var e=Ns,n=fu=Ns=0;n<e;){var a=ei[n];ei[n++]=null;var o=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&vp(a,u,f)}}function sl(e,n,a,o){ei[Ns++]=e,ei[Ns++]=n,ei[Ns++]=a,ei[Ns++]=o,fu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function hu(e,n,a,o){return sl(e,n,a,o),rl(e)}function Os(e,n){return sl(e,null,null,n),rl(e)}function vp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Rt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function rl(e){if(50<xo)throw xo=0,xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ps={};function rx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,n,a,o){return new rx(e,n,a,o)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,n){var a=e.alternate;return a===null?(a=Wn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function xp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,a,o,u,f){var M=0;if(o=e,typeof e=="function")du(e)&&(M=1);else if(typeof e=="string")M=ly(e,a,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Wn(31,a,n,u),e.elementType=D,e.lanes=f,e;case E:return $a(a.children,u,f,n);case T:M=8,u|=24;break;case y:return e=Wn(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case z:return e=Wn(13,a,n,u),e.elementType=z,e.lanes=f,e;case H:return e=Wn(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case L:M=10;break t;case O:M=9;break t;case w:M=11;break t;case B:M=14;break t;case k:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Wn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function $a(e,n,a,o){return e=Wn(7,e,o,n),e.lanes=a,e}function pu(e,n,a){return e=Wn(6,e,null,n),e.lanes=a,e}function mu(e,n,a){return n=Wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Is=[],zs=0,ll=null,cl=0,ni=[],ii=0,ts=null,Ii=1,zi="";function es(e,n){Is[zs++]=cl,Is[zs++]=ll,ll=e,cl=n}function yp(e,n,a){ni[ii++]=Ii,ni[ii++]=zi,ni[ii++]=ts,ts=e;var o=Ii;e=zi;var u=32-Rt(o)-1;o&=~(1<<u),a+=1;var f=32-Rt(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Ii=1<<32-Rt(n)+u|a<<u|o,zi=f+e}else Ii=1<<f|a<<u|o,zi=e}function gu(e){e.return!==null&&(es(e,1),yp(e,1,0))}function _u(e){for(;e===ll;)ll=Is[--zs],Is[zs]=null,cl=Is[--zs],Is[zs]=null;for(;e===ts;)ts=ni[--ii],ni[ii]=null,zi=ni[--ii],ni[ii]=null,Ii=ni[--ii],ni[ii]=null}var Un=null,je=null,Re=!1,ns=null,yi=!1,vu=Error(s(519));function is(e){var n=Error(s(418,""));throw Kr(ti(n,e)),vu}function Sp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[xn]=o,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)pe(So[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Be(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ye(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),yn(n,o.value,o.defaultValue,o.children),Ye(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Bg(n.textContent,a)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=kl),n=!0):n=!1,n||is(e)}function Mp(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Un=Un.return}}function jr(e){if(e!==Un)return!1;if(!Re)return Mp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pf(e.type,e.memoizedProps)),a=!a),a&&je&&is(e),Mp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){je=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}je=null}}else n===27?(n=je,Ca(e.type)?(e=Ff,Ff=null,je=e):je=n):je=Un?hi(e.stateNode.nextSibling):null;return!0}function Zr(){je=Un=null,Re=!1}function Ep(){var e=ns;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),ns=null),e}function Kr(e){ns===null?ns=[e]:ns.push(e)}var xu=nt(null),as=null,Bi=null;function da(e,n,a){St(xu,n._currentValue),n._currentValue=a}function Fi(e){e._currentValue=xu.current,vt(xu)}function yu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Su(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var F=0;F<n.length;F++)if(b.context===n[F]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),yu(f.return,a,e),o||(M=null);break t}f=b.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),yu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Qr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var b=u.type;Xn(u.pendingProps.value,M.value)||(e!==null?e.push(b):e=[b])}}else if(u===bt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}u=u.return}e!==null&&Su(n,e,a,o),n.flags|=262144}function ul(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ss(e){as=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Tp(as,e)}function fl(e,n){return as===null&&ss(e),Tp(e,n)}function Tp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(e===null)throw Error(s(308));Bi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Bi=Bi.next=n;return a}var ox=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},lx=r.unstable_scheduleCallback,cx=r.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new ox,data:new Map,refCount:0}}function Jr(e){e.refCount--,e.refCount===0&&lx(cx,function(){e.controller.abort()})}var $r=null,Eu=0,Bs=0,Fs=null;function ux(e,n){if($r===null){var a=$r=[];Eu=0,Bs=Af(),Fs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Eu++,n.then(bp,bp),n}function bp(){if(--Eu===0&&$r!==null){Fs!==null&&(Fs.status="fulfilled");var e=$r;$r=null,Bs=0,Fs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function fx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Ap=I.S;I.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ux(e,n),Ap!==null&&Ap(e,n)};var rs=nt(null);function Tu(){var e=rs.current;return e!==null?e:Ve.pooledCache}function hl(e,n){n===null?St(rs,rs.current):St(rs,n.pool)}function Rp(){var e=Tu();return e===null?null:{parent:on._currentValue,pool:e}}var to=Error(s(460)),Cp=Error(s(474)),dl=Error(s(542)),bu={then:function(){}};function wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pl(){}function Dp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(pl,pl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Up(e),e;default:if(typeof n.status=="string")n.then(pl,pl);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Up(e),e}throw eo=n,to}}var eo=null;function Lp(){if(eo===null)throw Error(s(459));var e=eo;return eo=null,e}function Up(e){if(e===to||e===dl)throw Error(s(483))}var pa=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(we&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=rl(e),vp(e,null,a),n}return sl(e,o,n,a),rl(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ne(e,a)}}function Cu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var wu=!1;function io(){if(wu){var e=Fs;if(e!==null)throw e}}function ao(e,n,a,o){wu=!1;var u=e.updateQueue;pa=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var F=b,it=F.next;F.next=null,M===null?f=it:M.next=it,M=F;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==M&&(b===null?ft.firstBaseUpdate=it:b.next=it,ft.lastBaseUpdate=F))}if(f!==null){var _t=u.baseState;M=0,ft=it=F=null,b=f;do{var st=b.lane&-536870913,ot=st!==b.lane;if(ot?(ye&st)===st:(o&st)===st){st!==0&&st===Bs&&(wu=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var $t=e,Zt=b;st=n;var Pe=a;switch(Zt.tag){case 1:if($t=Zt.payload,typeof $t=="function"){_t=$t.call(Pe,_t,st);break t}_t=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=Zt.payload,st=typeof $t=="function"?$t.call(Pe,_t,st):$t,st==null)break t;_t=g({},_t,st);break t;case 2:pa=!0}}st=b.callback,st!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[st]:ot.push(st))}else ot={lane:st,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(it=ft=ot,F=_t):ft=ft.next=ot,M|=st;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ft===null&&(F=_t),u.baseState=F,u.firstBaseUpdate=it,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ta|=M,e.lanes=M,e.memoizedState=_t}}function Np(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Op(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Np(a[e],n)}var Hs=nt(null),ml=nt(0);function Pp(e,n){e=qi,St(ml,e),St(Hs,n),qi=e|n.baseLanes}function Du(){St(ml,qi),St(Hs,Hs.current)}function Lu(){qi=ml.current,vt(Hs),vt(ml)}var _a=0,ce=null,Ne=null,en=null,gl=!1,Gs=!1,os=!1,_l=0,so=0,Vs=null,hx=0;function Qe(){throw Error(s(321))}function Uu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Xn(e[a],n[a]))return!1;return!0}function Nu(e,n,a,o,u,f){return _a=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?vm:xm,os=!1,f=a(o,u),os=!1,Gs&&(f=zp(n,a,o,u)),Ip(e),f}function Ip(e){I.H=El;var n=Ne!==null&&Ne.next!==null;if(_a=0,en=Ne=ce=null,gl=!1,so=0,Vs=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&ul(e)&&(pn=!0))}function zp(e,n,a,o){ce=e;var u=0;do{if(Gs&&(Vs=null),so=0,Gs=!1,25<=u)throw Error(s(301));if(u+=1,en=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=xx,f=n(a,o)}while(Gs);return f}function dx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?ro(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ce.flags|=1024),n}function Ou(){var e=_l!==0;return _l=0,e}function Pu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Iu(e){if(gl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}gl=!1}_a=0,en=Ne=ce=null,Gs=!1,so=_l=0,Vs=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ce.memoizedState=en=e:en=en.next=e,en}function nn(){if(Ne===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=en===null?ce.memoizedState:en.next;if(n!==null)en=n,Ne=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},en===null?ce.memoizedState=en=e:en=en.next=e}return en}function zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(e){var n=so;return so+=1,Vs===null&&(Vs=[]),e=Dp(Vs,e,n),n=ce,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?vm:xm),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ro(e);if(e.$$typeof===L)return Cn(e)}throw Error(s(438,String(e)))}function Bu(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zu(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=nn();return Fu(n,Ne,e)}function Fu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=M=null,F=null,it=n,ft=!1;do{var _t=it.lane&-536870913;if(_t!==it.lane?(ye&_t)===_t:(_a&_t)===_t){var st=it.revertLane;if(st===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),_t===Bs&&(ft=!0);else if((_a&st)===st){it=it.next,st===Bs&&(ft=!0);continue}else _t={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},F===null?(b=F=_t,M=f):F=F.next=_t,ce.lanes|=st,Ta|=st;_t=it.action,os&&a(f,_t),f=it.hasEagerState?it.eagerState:a(f,_t)}else st={lane:_t,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},F===null?(b=F=st,M=f):F=F.next=st,ce.lanes|=_t,Ta|=_t;it=it.next}while(it!==null&&it!==n);if(F===null?M=f:F.next=b,!Xn(f,e.memoizedState)&&(pn=!0,ft&&(a=Fs,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=F,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Hu(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);Xn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Bp(e,n,a){var o=ce,u=nn(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Xn((Ne||u).memoizedState,a);M&&(u.memoizedState=a,pn=!0),u=u.queue;var b=Gp.bind(null,o,u,e);if(oo(2048,8,b,[e]),u.getSnapshot!==n||M||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,ks(9,yl(),Hp.bind(null,o,u,a,n),null),Ve===null)throw Error(s(349));f||(_a&124)!==0||Fp(o,n,a)}return a}function Fp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=zu(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Hp(e,n,a,o){n.value=a,n.getSnapshot=o,Vp(n)&&kp(e)}function Gp(e,n,a){return a(function(){Vp(n)&&kp(e)})}function Vp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Xn(e,a)}catch{return!0}}function kp(e){var n=Os(e,2);n!==null&&Kn(n,e,2)}function Gu(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),os){At(!0);try{a()}finally{At(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function Xp(e,n,a,o){return e.baseState=a,Fu(e,Ne,typeof o=="function"?o:Hi)}function px(e,n,a,o,u){if(Ml(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=I.T,M={};I.T=M;try{var b=a(u,o),F=I.S;F!==null&&F(M,b),qp(e,n,b)}catch(it){Vu(e,n,it)}finally{I.T=f}}else try{f=a(u,o),qp(e,n,f)}catch(it){Vu(e,n,it)}}function qp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Yp(e,n,o)},function(o){return Vu(e,n,o)}):Yp(e,n,a)}function Yp(e,n,a){n.status="fulfilled",n.value=a,jp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Wp(e,a)))}function Vu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,jp(n),n=n.next;while(n!==o)}e.action=null}function jp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Zp(e,n){return n}function Kp(e,n){if(Re){var a=Ve.formState;if(a!==null){t:{var o=ce;if(Re){if(je){e:{for(var u=je,f=yi;u.nodeType!==8;){if(!f){u=null;break e}if(u=hi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=hi(u.nextSibling),o=u.data==="F!";break t}}is(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:n},a.queue=o,a=mm.bind(null,ce,o),o.dispatch=a,o=Gu(!1),f=Yu.bind(null,ce,!1,o.queue),o=In(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=px.bind(null,ce,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Qp(e){var n=nn();return Jp(n,Ne,e)}function Jp(e,n,a){if(n=Fu(e,n,Zp)[0],e=xl(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ro(n)}catch(M){throw M===to?dl:M}else o=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,ks(9,yl(),mx.bind(null,u,a),null)),[o,f,e]}function mx(e,n){e.action=n}function $p(e){var n=nn(),a=Ne;if(a!==null)return Jp(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ks(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=zu(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function yl(){return{destroy:void 0,resource:void 0}}function tm(){return nn().memoizedState}function Sl(e,n,a,o){var u=In();o=o===void 0?null:o,ce.flags|=e,u.memoizedState=ks(1|n,yl(),a,o)}function oo(e,n,a,o){var u=nn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ne!==null&&o!==null&&Uu(o,Ne.memoizedState.deps)?u.memoizedState=ks(n,f,a,o):(ce.flags|=e,u.memoizedState=ks(1|n,f,a,o))}function em(e,n){Sl(8390656,8,e,n)}function nm(e,n){oo(2048,8,e,n)}function im(e,n){return oo(4,2,e,n)}function am(e,n){return oo(4,4,e,n)}function sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rm(e,n,a){a=a!=null?a.concat([e]):null,oo(4,4,sm.bind(null,n,e),a)}function ku(){}function om(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Uu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function lm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Uu(n,o[1]))return o[0];if(o=e(),os){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[o,n],o}function Xu(e,n,a){return a===void 0||(_a&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=fg(),ce.lanes|=e,Ta|=e,a)}function cm(e,n,a,o){return Xn(a,n)?a:Hs.current!==null?(e=Xu(e,a,o),Xn(e,n)||(pn=!0),e):(_a&42)===0?(pn=!0,e.memoizedState=a):(e=fg(),ce.lanes|=e,Ta|=e,n)}function um(e,n,a,o,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var M=I.T,b={};I.T=b,Yu(e,!1,n,a);try{var F=u(),it=I.S;if(it!==null&&it(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ft=fx(F,o);lo(e,n,ft,Zn(e))}else lo(e,n,o,Zn(e))}catch(_t){lo(e,n,{then:function(){},status:"rejected",reason:_t},Zn())}finally{Y.p=f,I.T=M}}function gx(){}function Wu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=fm(e).queue;um(e,u,n,X,a===null?gx:function(){return hm(e),a(o)})}function fm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function hm(e){var n=fm(e).next.queue;lo(e,n,{},Zn())}function qu(){return Cn(Ro)}function dm(){return nn().memoizedState}function pm(){return nn().memoizedState}function _x(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=ma(a);var o=ga(n,e,a);o!==null&&(Kn(o,n,a),no(o,n,a)),n={cache:Mu()},e.payload=n;return}n=n.return}}function vx(e,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(e)?gm(n,a):(a=hu(e,n,a,o),a!==null&&(Kn(a,e,o),_m(a,n,o)))}function mm(e,n,a){var o=Zn();lo(e,n,a,o)}function lo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(e))gm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,b=f(M,a);if(u.hasEagerState=!0,u.eagerState=b,Xn(b,M))return sl(e,n,u,0),Ve===null&&al(),!1}catch{}finally{}if(a=hu(e,n,u,o),a!==null)return Kn(a,e,o),_m(a,n,o),!0}return!1}function Yu(e,n,a,o){if(o={lane:2,revertLane:Af(),action:o,hasEagerState:!1,eagerState:null,next:null},Ml(e)){if(n)throw Error(s(479))}else n=hu(e,a,o,2),n!==null&&Kn(n,e,2)}function Ml(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function gm(e,n){Gs=gl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function _m(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ne(e,a)}}var El={readContext:Cn,use:vl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},vm={readContext:Cn,use:vl,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:em,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Sl(4194308,4,sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Sl(4194308,4,e,n)},useInsertionEffect:function(e,n){Sl(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(os){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var u=a(n);if(os){At(!0);try{a(n)}finally{At(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=vx.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=Gu(e);var n=e.queue,a=mm.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,n){var a=In();return Xu(a,e,n)},useTransition:function(){var e=Gu(!1);return e=um.bind(null,ce,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,u=In();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(ye&124)!==0||Fp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,em(Gp.bind(null,o,f,e),[e]),o.flags|=2048,ks(9,yl(),Hp.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=Ve.identifierPrefix;if(Re){var a=zi,o=Ii;a=(o&~(1<<32-Rt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=_l++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=hx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:qu,useFormState:Kp,useActionState:Kp,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:Bu,useCacheRefresh:function(){return In().memoizedState=_x.bind(null,ce)}},xm={readContext:Cn,use:vl,useCallback:om,useContext:Cn,useEffect:nm,useImperativeHandle:rm,useInsertionEffect:im,useLayoutEffect:am,useMemo:lm,useReducer:xl,useRef:tm,useState:function(){return xl(Hi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=nn();return cm(a,Ne.memoizedState,e,n)},useTransition:function(){var e=xl(Hi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Bp,useId:dm,useHostTransitionStatus:qu,useFormState:Qp,useActionState:Qp,useOptimistic:function(e,n){var a=nn();return Xp(a,Ne,e,n)},useMemoCache:Bu,useCacheRefresh:pm},xx={readContext:Cn,use:vl,useCallback:om,useContext:Cn,useEffect:nm,useImperativeHandle:rm,useInsertionEffect:im,useLayoutEffect:am,useMemo:lm,useReducer:Hu,useRef:tm,useState:function(){return Hu(Hi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=nn();return Ne===null?Xu(a,e,n):cm(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Hu(Hi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Bp,useId:dm,useHostTransitionStatus:qu,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=nn();return Ne!==null?Xp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:pm},Xs=null,co=0;function Tl(e){var n=co;return co+=1,Xs===null&&(Xs=[]),Dp(Xs,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ym(e){var n=e._init;return n(e._payload)}function Sm(e){function n(Z,V){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[V],Z.flags|=16):tt.push(V)}}function a(Z,V){if(!e)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function o(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function u(Z,V){return Z=Pi(Z,V),Z.index=0,Z.sibling=null,Z}function f(Z,V,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<V?(Z.flags|=67108866,V):tt):(Z.flags|=67108866,V)):(Z.flags|=1048576,V)}function M(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,V,tt,dt){return V===null||V.tag!==6?(V=pu(tt,Z.mode,dt),V.return=Z,V):(V=u(V,tt),V.return=Z,V)}function F(Z,V,tt,dt){var Gt=tt.type;return Gt===E?ft(Z,V,tt.props.children,dt,tt.key):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===k&&ym(Gt)===V.type)?(V=u(V,tt.props),uo(V,tt),V.return=Z,V):(V=ol(tt.type,tt.key,tt.props,null,Z.mode,dt),uo(V,tt),V.return=Z,V)}function it(Z,V,tt,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=mu(tt,Z.mode,dt),V.return=Z,V):(V=u(V,tt.children||[]),V.return=Z,V)}function ft(Z,V,tt,dt,Gt){return V===null||V.tag!==7?(V=$a(tt,Z.mode,dt,Gt),V.return=Z,V):(V=u(V,tt),V.return=Z,V)}function _t(Z,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=pu(""+V,Z.mode,tt),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return tt=ol(V.type,V.key,V.props,null,Z.mode,tt),uo(tt,V),tt.return=Z,tt;case S:return V=mu(V,Z.mode,tt),V.return=Z,V;case k:var dt=V._init;return V=dt(V._payload),_t(Z,V,tt)}if(ct(V)||J(V))return V=$a(V,Z.mode,tt,null),V.return=Z,V;if(typeof V.then=="function")return _t(Z,Tl(V),tt);if(V.$$typeof===L)return _t(Z,fl(Z,V),tt);bl(Z,V)}return null}function st(Z,V,tt,dt){var Gt=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Gt!==null?null:b(Z,V,""+tt,dt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case v:return tt.key===Gt?F(Z,V,tt,dt):null;case S:return tt.key===Gt?it(Z,V,tt,dt):null;case k:return Gt=tt._init,tt=Gt(tt._payload),st(Z,V,tt,dt)}if(ct(tt)||J(tt))return Gt!==null?null:ft(Z,V,tt,dt,null);if(typeof tt.then=="function")return st(Z,V,Tl(tt),dt);if(tt.$$typeof===L)return st(Z,V,fl(Z,tt),dt);bl(Z,tt)}return null}function ot(Z,V,tt,dt,Gt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Z=Z.get(tt)||null,b(V,Z,""+dt,Gt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case v:return Z=Z.get(dt.key===null?tt:dt.key)||null,F(V,Z,dt,Gt);case S:return Z=Z.get(dt.key===null?tt:dt.key)||null,it(V,Z,dt,Gt);case k:var fe=dt._init;return dt=fe(dt._payload),ot(Z,V,tt,dt,Gt)}if(ct(dt)||J(dt))return Z=Z.get(tt)||null,ft(V,Z,dt,Gt,null);if(typeof dt.then=="function")return ot(Z,V,tt,Tl(dt),Gt);if(dt.$$typeof===L)return ot(Z,V,tt,fl(V,dt),Gt);bl(V,dt)}return null}function $t(Z,V,tt,dt){for(var Gt=null,fe=null,Vt=V,Qt=V=0,gn=null;Vt!==null&&Qt<tt.length;Qt++){Vt.index>Qt?(gn=Vt,Vt=null):gn=Vt.sibling;var Te=st(Z,Vt,tt[Qt],dt);if(Te===null){Vt===null&&(Vt=gn);break}e&&Vt&&Te.alternate===null&&n(Z,Vt),V=f(Te,V,Qt),fe===null?Gt=Te:fe.sibling=Te,fe=Te,Vt=gn}if(Qt===tt.length)return a(Z,Vt),Re&&es(Z,Qt),Gt;if(Vt===null){for(;Qt<tt.length;Qt++)Vt=_t(Z,tt[Qt],dt),Vt!==null&&(V=f(Vt,V,Qt),fe===null?Gt=Vt:fe.sibling=Vt,fe=Vt);return Re&&es(Z,Qt),Gt}for(Vt=o(Vt);Qt<tt.length;Qt++)gn=ot(Vt,Z,Qt,tt[Qt],dt),gn!==null&&(e&&gn.alternate!==null&&Vt.delete(gn.key===null?Qt:gn.key),V=f(gn,V,Qt),fe===null?Gt=gn:fe.sibling=gn,fe=gn);return e&&Vt.forEach(function(Na){return n(Z,Na)}),Re&&es(Z,Qt),Gt}function Zt(Z,V,tt,dt){if(tt==null)throw Error(s(151));for(var Gt=null,fe=null,Vt=V,Qt=V=0,gn=null,Te=tt.next();Vt!==null&&!Te.done;Qt++,Te=tt.next()){Vt.index>Qt?(gn=Vt,Vt=null):gn=Vt.sibling;var Na=st(Z,Vt,Te.value,dt);if(Na===null){Vt===null&&(Vt=gn);break}e&&Vt&&Na.alternate===null&&n(Z,Vt),V=f(Na,V,Qt),fe===null?Gt=Na:fe.sibling=Na,fe=Na,Vt=gn}if(Te.done)return a(Z,Vt),Re&&es(Z,Qt),Gt;if(Vt===null){for(;!Te.done;Qt++,Te=tt.next())Te=_t(Z,Te.value,dt),Te!==null&&(V=f(Te,V,Qt),fe===null?Gt=Te:fe.sibling=Te,fe=Te);return Re&&es(Z,Qt),Gt}for(Vt=o(Vt);!Te.done;Qt++,Te=tt.next())Te=ot(Vt,Z,Qt,Te.value,dt),Te!==null&&(e&&Te.alternate!==null&&Vt.delete(Te.key===null?Qt:Te.key),V=f(Te,V,Qt),fe===null?Gt=Te:fe.sibling=Te,fe=Te);return e&&Vt.forEach(function(yy){return n(Z,yy)}),Re&&es(Z,Qt),Gt}function Pe(Z,V,tt,dt){if(typeof tt=="object"&&tt!==null&&tt.type===E&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case v:t:{for(var Gt=tt.key;V!==null;){if(V.key===Gt){if(Gt=tt.type,Gt===E){if(V.tag===7){a(Z,V.sibling),dt=u(V,tt.props.children),dt.return=Z,Z=dt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===k&&ym(Gt)===V.type){a(Z,V.sibling),dt=u(V,tt.props),uo(dt,tt),dt.return=Z,Z=dt;break t}a(Z,V);break}else n(Z,V);V=V.sibling}tt.type===E?(dt=$a(tt.props.children,Z.mode,dt,tt.key),dt.return=Z,Z=dt):(dt=ol(tt.type,tt.key,tt.props,null,Z.mode,dt),uo(dt,tt),dt.return=Z,Z=dt)}return M(Z);case S:t:{for(Gt=tt.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(Z,V.sibling),dt=u(V,tt.children||[]),dt.return=Z,Z=dt;break t}else{a(Z,V);break}else n(Z,V);V=V.sibling}dt=mu(tt,Z.mode,dt),dt.return=Z,Z=dt}return M(Z);case k:return Gt=tt._init,tt=Gt(tt._payload),Pe(Z,V,tt,dt)}if(ct(tt))return $t(Z,V,tt,dt);if(J(tt)){if(Gt=J(tt),typeof Gt!="function")throw Error(s(150));return tt=Gt.call(tt),Zt(Z,V,tt,dt)}if(typeof tt.then=="function")return Pe(Z,V,Tl(tt),dt);if(tt.$$typeof===L)return Pe(Z,V,fl(Z,tt),dt);bl(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(Z,V.sibling),dt=u(V,tt),dt.return=Z,Z=dt):(a(Z,V),dt=pu(tt,Z.mode,dt),dt.return=Z,Z=dt),M(Z)):a(Z,V)}return function(Z,V,tt,dt){try{co=0;var Gt=Pe(Z,V,tt,dt);return Xs=null,Gt}catch(Vt){if(Vt===to||Vt===dl)throw Vt;var fe=Wn(29,Vt,null,Z.mode);return fe.lanes=dt,fe.return=Z,fe}finally{}}}var Ws=Sm(!0),Mm=Sm(!1),ai=nt(null),Si=null;function va(e){var n=e.alternate;St(ln,ln.current&1),St(ai,e),Si===null&&(n===null||Hs.current!==null||n.memoizedState!==null)&&(Si=e)}function Em(e){if(e.tag===22){if(St(ln,ln.current),St(ai,e),Si===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Si=e)}}else xa()}function xa(){St(ln,ln.current),St(ai,ai.current)}function Gi(e){vt(ai),Si===e&&(Si=null),vt(ln)}var ln=nt(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Bf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ju(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Zn(),u=ma(o);u.payload=n,a!=null&&(u.callback=a),n=ga(e,u,o),n!==null&&(Kn(n,e,o),no(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Zn(),u=ma(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ga(e,u,o),n!==null&&(Kn(n,e,o),no(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),o=ma(a);o.tag=2,n!=null&&(o.callback=n),n=ga(e,o,a),n!==null&&(Kn(n,e,a),no(n,e,a))}};function Tm(e,n,a,o,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!qr(a,o)||!qr(u,f):!0}function bm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Zu.enqueueReplaceState(n,n.state,null)}function ls(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Am(e){Rl(e)}function Rm(e){console.error(e)}function Cm(e){Rl(e)}function Cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function wm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ku(e,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,n)},a}function Dm(e){return e=ma(e),e.tag=3,e}function Lm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){wm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){wm(n,a,o),typeof u!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function yx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qr(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Si===null?Sf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===bu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ef(e,o,u)),!1;case 22:return a.flags|=65536,o===bu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ef(e,o,u)),!1}throw Error(s(435,a.tag))}return Ef(e,o,u),Sf(),!1}if(Re)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==vu&&(e=Error(s(422),{cause:o}),Kr(ti(e,a)))):(o!==vu&&(n=Error(s(423),{cause:o}),Kr(ti(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ti(o,a),u=Ku(e.stateNode,o,u),Cu(e,u),Ze!==4&&(Ze=2)),!1;var f=Error(s(520),{cause:o});if(f=ti(f,a),vo===null?vo=[f]:vo.push(f),Ze!==4&&(Ze=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ku(a.stateNode,o,e),Cu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Dm(u),Lm(u,e,a,o),Cu(a,u),!1}a=a.return}while(a!==null);return!1}var Um=Error(s(461)),pn=!1;function Sn(e,n,a,o){n.child=e===null?Mm(n,null,a,o):Ws(n,e.child,a,o)}function Nm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var b in o)b!=="ref"&&(M[b]=o[b])}else M=o;return ss(n),o=Nu(e,n,a,M,f,u),b=Ou(),e!==null&&!pn?(Pu(e,n,u),Vi(e,n,u)):(Re&&b&&gu(n),n.flags|=1,Sn(e,n,o,u),n.child)}function Om(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Pm(e,n,f,o,u)):(e=ol(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!sf(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:qr,a(M,o)&&e.ref===n.ref)return Vi(e,n,u)}return n.flags|=1,e=Pi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Pm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(qr(f,o)&&e.ref===n.ref)if(pn=!1,n.pendingProps=o=f,sf(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,Vi(e,n,u)}return Qu(e,n,a,o,u)}function Im(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return zm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?Pp(n,f):Du(),Em(n);else return n.lanes=n.childLanes=536870912,zm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(hl(n,f.cachePool),Pp(n,f),xa(),n.memoizedState=null):(e!==null&&hl(n,null),Du(),xa());return Sn(e,n,u,a),n.child}function zm(e,n,a,o){var u=Tu();return u=u===null?null:{parent:on._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&hl(n,null),Du(),Em(n),e!==null&&Qr(e,n,o,!0),null}function wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Qu(e,n,a,o,u){return ss(n),a=Nu(e,n,a,o,void 0,u),o=Ou(),e!==null&&!pn?(Pu(e,n,u),Vi(e,n,u)):(Re&&o&&gu(n),n.flags|=1,Sn(e,n,a,u),n.child)}function Bm(e,n,a,o,u,f){return ss(n),n.updateQueue=null,a=zp(n,o,a,u),Ip(e),o=Ou(),e!==null&&!pn?(Pu(e,n,f),Vi(e,n,f)):(Re&&o&&gu(n),n.flags|=1,Sn(e,n,a,f),n.child)}function Fm(e,n,a,o,u){if(ss(n),n.stateNode===null){var f=Ps,M=a.contextType;typeof M=="object"&&M!==null&&(f=Cn(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Au(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Cn(M):Ps,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(ju(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Zu.enqueueReplaceState(f,f.state,null),ao(n,o,f,u),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,F=ls(a,b);f.props=F;var it=f.context,ft=a.contextType;M=Ps,typeof ft=="object"&&ft!==null&&(M=Cn(ft));var _t=a.getDerivedStateFromProps;ft=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||it!==M)&&bm(n,f,o,M),pa=!1;var st=n.memoizedState;f.state=st,ao(n,o,f,u),io(),it=n.memoizedState,b||st!==it||pa?(typeof _t=="function"&&(ju(n,a,_t,o),it=n.memoizedState),(F=pa||Tm(n,a,F,o,st,it,M))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=M,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ru(e,n),M=n.memoizedProps,ft=ls(a,M),f.props=ft,_t=n.pendingProps,st=f.context,it=a.contextType,F=Ps,typeof it=="object"&&it!==null&&(F=Cn(it)),b=a.getDerivedStateFromProps,(it=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==_t||st!==F)&&bm(n,f,o,F),pa=!1,st=n.memoizedState,f.state=st,ao(n,o,f,u),io();var ot=n.memoizedState;M!==_t||st!==ot||pa||e!==null&&e.dependencies!==null&&ul(e.dependencies)?(typeof b=="function"&&(ju(n,a,b,o),ot=n.memoizedState),(ft=pa||Tm(n,a,ft,o,st,ot,F)||e!==null&&e.dependencies!==null&&ul(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=F,o=ft):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,wl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ws(n,e.child,null,u),n.child=Ws(n,null,a,u)):Sn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Vi(e,n,u),e}function Hm(e,n,a,o){return Zr(),n.flags|=256,Sn(e,n,a,o),n.child}var Ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $u(e){return{baseLanes:e,cachePool:Rp()}}function tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function Gm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?va(n):xa(),Re){var b=je,F;if(F=b){t:{for(F=b,b=yi;F.nodeType!==8;){if(!b){b=null;break t}if(F=hi(F.nextSibling),F===null){b=null;break t}}b=F}b!==null?(n.memoizedState={dehydrated:b,treeContext:ts!==null?{id:Ii,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},F=Wn(18,null,null,0),F.stateNode=b,F.return=n,n.child=F,Un=n,je=null,F=!0):F=!1}F||is(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Bf(b)?n.lanes=32:n.lanes=536870912,null;Gi(n)}return b=o.children,o=o.fallback,u?(xa(),u=n.mode,b=Dl({mode:"hidden",children:b},u),o=$a(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,u=n.child,u.memoizedState=$u(a),u.childLanes=tf(e,M,a),n.memoizedState=Ju,o):(va(n),ef(n,b))}if(F=e.memoizedState,F!==null&&(b=F.dehydrated,b!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=nf(e,n,a)):n.memoizedState!==null?(xa(),n.child=e.child,n.flags|=128,n=null):(xa(),u=o.fallback,b=n.mode,o=Dl({mode:"visible",children:o.children},b),u=$a(u,b,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Ws(n,e.child,null,a),o=n.child,o.memoizedState=$u(a),o.childLanes=tf(e,M,a),n.memoizedState=Ju,n=u);else if(va(n),Bf(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var it=M.dgst;M=it,o=Error(s(419)),o.stack="",o.digest=M,Kr({value:o,source:null,stack:null}),n=nf(e,n,a)}else if(pn||Qr(e,n,a,!1),M=(a&e.childLanes)!==0,pn||M){if(M=Ve,M!==null&&(o=a&-a,o=(o&42)!==0?1:He(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==F.retryLane))throw F.retryLane=o,Os(e,o),Kn(M,e,o),Um;b.data==="$?"||Sf(),n=nf(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,je=hi(b.nextSibling),Un=n,Re=!0,ns=null,yi=!1,e!==null&&(ni[ii++]=Ii,ni[ii++]=zi,ni[ii++]=ts,Ii=e.id,zi=e.overflow,ts=n),n=ef(n,o.children),n.flags|=4096);return n}return u?(xa(),u=o.fallback,b=n.mode,F=e.child,it=F.sibling,o=Pi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,it!==null?u=Pi(it,u):(u=$a(u,b,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,b=e.child.memoizedState,b===null?b=$u(a):(F=b.cachePool,F!==null?(it=on._currentValue,F=F.parent!==it?{parent:it,pool:it}:F):F=Rp(),b={baseLanes:b.baseLanes|a,cachePool:F}),u.memoizedState=b,u.childLanes=tf(e,M,a),n.memoizedState=Ju,o):(va(n),a=e.child,e=a.sibling,a=Pi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function ef(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=Wn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function nf(e,n,a){return Ws(n,e.child,null,a),e=ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Vm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),yu(e.return,n,a)}function af(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function km(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Sn(e,n,o.children,a),o=ln.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vm(e,a,n);else if(e.tag===19)Vm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(ln,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Al(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),af(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Al(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}af(n,!0,a,null,f);break;case"together":af(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Pi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Pi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ul(e)))}function Sx(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),da(n,on,e.memoizedState.cache),Zr();break;case 27:case 5:qt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Gm(e,n,a):(va(n),e=Vi(e,n,a),e!==null?e.sibling:null);va(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return km(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(ln,ln.current),o)break;return null;case 22:case 23:return n.lanes=0,Im(e,n,a);case 24:da(n,on,e.memoizedState.cache)}return Vi(e,n,a)}function Xm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!sf(e,a)&&(n.flags&128)===0)return pn=!1,Sx(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Re&&(n.flags&1048576)!==0&&yp(n,cl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")du(o)?(e=ls(o,e),n.tag=1,n=Fm(null,n,o,e,a)):(n.tag=0,n=Qu(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=Nm(null,n,o,e,a);break t}else if(u===B){n.tag=14,n=Om(null,n,o,e,a);break t}}throw n=et(o)||o,Error(s(306,n,""))}}return n;case 0:return Qu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ls(o,n.pendingProps),Fm(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ru(e,n),ao(n,o,null,a);var M=n.memoizedState;if(o=M.cache,da(n,on,o),o!==f.cache&&Su(n,[on],a,!0),io(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Hm(e,n,o,a);break t}else if(o!==u){u=ti(Error(s(424)),n),Kr(u),n=Hm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=hi(e.firstChild),Un=n,Re=!0,ns=null,yi=!0,a=Mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zr(),o===u){n=Vi(e,n,a);break t}Sn(e,n,o,a)}n=n.child}return n;case 26:return wl(e,n),e===null?(a=jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=Xl(yt.current).createElement(a),o[sn]=n,o[xn]=e,En(o,a,e),tn(o),n.stateNode=o):n.memoizedState=jg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qt(n),e===null&&Re&&(o=n.stateNode=Wg(n.type,n.pendingProps,yt.current),Un=n,yi=!0,u=je,Ca(n.type)?(Ff=u,je=hi(o.firstChild)):je=u),Sn(e,n,n.pendingProps.children,a),wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=o=je)&&(o=Zx(o,n.type,n.pendingProps,yi),o!==null?(n.stateNode=o,Un=n,je=hi(o.firstChild),yi=!1,u=!0):u=!1),u||is(n)),qt(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,Pf(u,f)?o=null:M!==null&&Pf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Nu(e,n,dx,null,null,a),Ro._currentValue=u),wl(e,n),Sn(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=je)&&(a=Kx(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Un=n,je=null,e=!0):e=!1),e||is(n)),null;case 13:return Gm(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ws(n,null,o,a):Sn(e,n,o,a),n.child;case 11:return Nm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,da(n,n.type,o.value),Sn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ss(n),u=Cn(u),o=o(u),n.flags|=1,Sn(e,n,o,a),n.child;case 14:return Om(e,n,n.type,n.pendingProps,a);case 15:return Pm(e,n,n.type,n.pendingProps,a);case 19:return km(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Dl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Pi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Im(e,n,a);case 24:return ss(n),o=Cn(on),e===null?(u=Tu(),u===null&&(u=Ve,f=Mu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Au(n),da(n,on,u)):((e.lanes&a)!==0&&(Ru(e,n),ao(n,null,null,a),io()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),da(n,on,o)):(o=f.cache,da(n,on,o),o!==u.cache&&Su(n,[on],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ki(e){e.flags|=4}function Wm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$g(n)){if(n=ai.current,n!==null&&((ye&4194048)===ye?Si!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Si))throw eo=bu,Cp;e.flags|=8192}}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,Zs|=n)}function fo(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Mx(e,n,a){var o=n.pendingProps;switch(_u(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Fi(on),ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(jr(n)?ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ep())),qe(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(qe(n),Wm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),qe(n),Wm(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==o&&ki(n),qe(n),n.flags&=-16777217),null;case 27:Le(n),a=yt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=$.current,jr(n)?Sp(n):(e=Wg(u,o,a),n.stateNode=e,ki(n))}return qe(n),null;case 5:if(Le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(e=$.current,jr(n))Sp(n);else{switch(u=Xl(yt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[sn]=n,e[xn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(En(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=yt.current,jr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Bg(e.nodeValue,a)),e||is(n)}else e=Xl(e).createTextNode(o),e[sn]=n,n.stateNode=e}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=jr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[sn]=n}else Zr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=Ep(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),qe(n),null;case 4:return ie(),e===null&&Df(n.stateNode.containerInfo),qe(n),null;case 10:return Fi(n.type),qe(n),null;case 19:if(vt(ln),u=n.memoizedState,u===null)return qe(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)fo(u,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Al(e),f!==null){for(n.flags|=128,fo(u,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)xp(a,e),a=a.sibling;return St(ln,ln.current&1|2),n.child}e=e.sibling}u.tail!==null&&te()>Ol&&(n.flags|=128,o=!0,fo(u,!1),n.lanes=4194304)}else{if(!o)if(e=Al(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),fo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Re)return qe(n),null}else 2*te()-u.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,o=!0,fo(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=te(),n.sibling=null,e=ln.current,St(ln,o?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Gi(n),Lu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(on),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ex(e,n){switch(_u(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fi(on),ie(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(Gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Zr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(ln),null;case 4:return ie(),null;case 10:return Fi(n.type),null;case 22:case 23:return Gi(n),Lu(),e!==null&&vt(rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Fi(on),null;case 25:return null;default:return null}}function qm(e,n){switch(_u(n),n.tag){case 3:Fi(on),ie();break;case 26:case 27:case 5:Le(n);break;case 4:ie();break;case 13:Gi(n);break;case 19:vt(ln);break;case 10:Fi(n.type);break;case 22:case 23:Gi(n),Lu(),e!==null&&vt(rs);break;case 24:Fi(on)}}function ho(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(b){Fe(n,n.return,b)}}function ya(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var M=o.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,u=n;var F=a,it=b;try{it()}catch(ft){Fe(u,F,ft)}}}o=o.next}while(o!==f)}}catch(ft){Fe(n,n.return,ft)}}function Ym(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Op(n,a)}catch(o){Fe(e,e.return,o)}}}function jm(e,n,a){a.props=ls(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Mi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function Zm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function rf(e,n,a){try{var o=e.stateNode;Xx(o,e.type,a,n),o[xn]=n}catch(u){Fe(e,e.return,u)}}function Km(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=kl));else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(lf(e,n,a),e=e.sibling;e!==null;)lf(e,n,a),e=e.sibling}function Ul(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ul(e,n,a),e=e.sibling;e!==null;)Ul(e,n,a),e=e.sibling}function Qm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[sn]=e,n[xn]=a}catch(f){Fe(e,e.return,f)}}var Xi=!1,Je=!1,cf=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Tx(e,n){if(e=e.containerInfo,Nf=Kl,e=cp(e),ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,b=-1,F=-1,it=0,ft=0,_t=e,st=null;e:for(;;){for(var ot;_t!==a||u!==0&&_t.nodeType!==3||(b=M+u),_t!==f||o!==0&&_t.nodeType!==3||(F=M+o),_t.nodeType===3&&(M+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)st=_t,_t=ot;for(;;){if(_t===e)break e;if(st===a&&++it===u&&(b=M),st===f&&++ft===o&&(F=M),(ot=_t.nextSibling)!==null)break;_t=st,st=_t.parentNode}_t=ot}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:e,selectionRange:a},Kl=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var $t=ls(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate($t,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Zt){Fe(a,a.return,Zt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function $m(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),o&4&&ho(5,a);break;case 1:if(Sa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Fe(a,a.return,M)}else{var u=ls(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Fe(a,a.return,M)}}o&64&&Ym(a),o&512&&po(a,a.return);break;case 3:if(Sa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Op(e,n)}catch(M){Fe(a,a.return,M)}}break;case 27:n===null&&o&4&&Qm(a);case 26:case 5:Sa(e,a),n===null&&o&4&&Zm(a),o&512&&po(a,a.return);break;case 12:Sa(e,a);break;case 13:Sa(e,a),o&4&&ng(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Nx.bind(null,a),Qx(e,a))));break;case 22:if(o=a.memoizedState!==null||Xi,!o){n=n!==null&&n.memoizedState!==null||Je,u=Xi;var f=Je;Xi=o,(Je=n)&&!f?Ma(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),Xi=u,Je=f}break;case 30:break;default:Sa(e,a)}}function tg(e){var n=e.alternate;n!==null&&(e.alternate=null,tg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ca(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,zn=!1;function Wi(e,n,a){for(a=a.child;a!==null;)eg(e,n,a),a=a.sibling}function eg(e,n,a){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:Je||Mi(a,n),Wi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Mi(a,n);var o=Xe,u=zn;Ca(a.type)&&(Xe=a.stateNode,zn=!1),Wi(e,n,a),Eo(a.stateNode),Xe=o,zn=u;break;case 5:Je||Mi(a,n);case 6:if(o=Xe,u=zn,Xe=null,Wi(e,n,a),Xe=o,zn=u,Xe!==null)if(zn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Xe!==null&&(zn?(e=Xe,kg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Lo(e)):kg(Xe,a.stateNode));break;case 4:o=Xe,u=zn,Xe=a.stateNode.containerInfo,zn=!0,Wi(e,n,a),Xe=o,zn=u;break;case 0:case 11:case 14:case 15:Je||ya(2,a,n),Je||ya(4,a,n),Wi(e,n,a);break;case 1:Je||(Mi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&jm(a,n,o)),Wi(e,n,a);break;case 21:Wi(e,n,a);break;case 22:Je=(o=Je)||a.memoizedState!==null,Wi(e,n,a),Je=o;break;default:Wi(e,n,a)}}function ng(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lo(e)}catch(a){Fe(n,n.return,a)}}function bx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Jm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Jm),n;default:throw Error(s(435,e.tag))}}function uf(e,n){var a=bx(e);n.forEach(function(o){var u=Ox.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function qn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,M=n,b=M;t:for(;b!==null;){switch(b.tag){case 27:if(Ca(b.type)){Xe=b.stateNode,zn=!1;break t}break;case 5:Xe=b.stateNode,zn=!1;break t;case 3:case 4:Xe=b.stateNode.containerInfo,zn=!0;break t}b=b.return}if(Xe===null)throw Error(s(160));eg(f,M,u),Xe=null,zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ig(n,e),n=n.sibling}var fi=null;function ig(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Yn(e),o&4&&(ya(3,e,e.return),ho(3,e),ya(5,e,e.return));break;case 1:qn(n,e),Yn(e),o&512&&(Je||a===null||Mi(a,a.return)),o&64&&Xi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=fi;if(qn(n,e),Yn(e),o&512&&(Je||a===null||Mi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[la]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,o,a),f[sn]=e,tn(f),o=f;break t;case"link":var M=Qg("link","href",u).get(o+(a.href||""));if(M){for(var b=0;b<M.length;b++)if(f=M[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(b,1);break e}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;case"meta":if(M=Qg("meta","content",u).get(o+(a.content||""))){for(b=0;b<M.length;b++)if(f=M[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(b,1);break e}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[sn]=e,tn(f),o=f}e.stateNode=o}else Jg(u,e.type,e.stateNode);else e.stateNode=Kg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Jg(u,e.type,e.stateNode):Kg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&rf(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Yn(e),o&512&&(Je||a===null||Mi(a,a.return)),a!==null&&o&4&&rf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Yn(e),o&512&&(Je||a===null||Mi(a,a.return)),e.flags&32){u=e.stateNode;try{xi(u,"")}catch(ot){Fe(e,e.return,ot)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,rf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(cf=!0);break;case 6:if(qn(n,e),Yn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ot){Fe(e,e.return,ot)}}break;case 3:if(Yl=null,u=fi,fi=Wl(n.containerInfo),qn(n,e),fi=u,Yn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(ot){Fe(e,e.return,ot)}cf&&(cf=!1,ag(e));break;case 4:o=fi,fi=Wl(e.stateNode.containerInfo),qn(n,e),Yn(e),fi=o;break;case 12:qn(n,e),Yn(e);break;case 13:qn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gf=te()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uf(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,it=Xi,ft=Je;if(Xi=it||u,Je=ft||F,qn(n,e),Je=ft,Xi=it,Yn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||Xi||Je||cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=F.stateNode;var _t=F.memoizedProps.style,st=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(ot){Fe(F,F.return,ot)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(ot){Fe(F,F.return,ot)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,uf(e,a))));break;case 19:qn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uf(e,o)));break;case 30:break;case 21:break;default:qn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Km(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=of(e);Ul(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(xi(M,""),a.flags&=-33);var b=of(e);Ul(e,b,M);break;case 3:case 4:var F=a.stateNode.containerInfo,it=of(e);lf(e,it,F);break;default:throw Error(s(161))}}catch(ft){Fe(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$m(e,n.alternate,n),n=n.sibling}function cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),cs(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jm(n,n.return,a),cs(n);break;case 27:Eo(n.stateNode);case 26:case 5:Mi(n,n.return),cs(n);break;case 22:n.memoizedState===null&&cs(n);break;case 30:cs(n);break;default:cs(n)}e=e.sibling}}function Ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:Ma(u,f,a),ho(4,f);break;case 1:if(Ma(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Fe(o,o.return,it)}if(o=f,u=o.updateQueue,u!==null){var b=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Np(F[u],b)}catch(it){Fe(o,o.return,it)}}a&&M&64&&Ym(f),po(f,f.return);break;case 27:Qm(f);case 26:case 5:Ma(u,f,a),a&&o===null&&M&4&&Zm(f),po(f,f.return);break;case 12:Ma(u,f,a);break;case 13:Ma(u,f,a),a&&M&4&&ng(u,f);break;case 22:f.memoizedState===null&&Ma(u,f,a),po(f,f.return);break;case 30:break;default:Ma(u,f,a)}n=n.sibling}}function ff(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jr(a))}function hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e))}function Ei(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sg(e,n,a,o),n=n.sibling}function sg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,o),u&2048&&ho(9,n);break;case 1:Ei(e,n,a,o);break;case 3:Ei(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e)));break;case 12:if(u&2048){Ei(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,b=f.onPostCommit;typeof b=="function"&&b(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Fe(n,n.return,F)}}else Ei(e,n,a,o);break;case 13:Ei(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,o):mo(e,n):f._visibility&2?Ei(e,n,a,o):(f._visibility|=2,qs(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&ff(M,n);break;case 24:Ei(e,n,a,o),u&2048&&hf(n.alternate,n);break;default:Ei(e,n,a,o)}}function qs(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,M=n,b=a,F=o,it=M.flags;switch(M.tag){case 0:case 11:case 15:qs(f,M,b,F,u),ho(8,M);break;case 23:break;case 22:var ft=M.stateNode;M.memoizedState!==null?ft._visibility&2?qs(f,M,b,F,u):mo(f,M):(ft._visibility|=2,qs(f,M,b,F,u)),u&&it&2048&&ff(M.alternate,M);break;case 24:qs(f,M,b,F,u),u&&it&2048&&hf(M.alternate,M);break;default:qs(f,M,b,F,u)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:mo(a,o),u&2048&&ff(o.alternate,o);break;case 24:mo(a,o),u&2048&&hf(o.alternate,o);break;default:mo(a,o)}n=n.sibling}}var go=8192;function Ys(e){if(e.subtreeFlags&go)for(e=e.child;e!==null;)rg(e),e=e.sibling}function rg(e){switch(e.tag){case 26:Ys(e),e.flags&go&&e.memoizedState!==null&&uy(fi,e.memoizedState,e.memoizedProps);break;case 5:Ys(e);break;case 3:case 4:var n=fi;fi=Wl(e.stateNode.containerInfo),Ys(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=go,go=16777216,Ys(e),go=n):Ys(e));break;default:Ys(e)}}function og(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,cg(o,e)}og(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&ya(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):_o(e);break;default:_o(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,cg(o,e)}og(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function cg(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=e;mn!==null;){o=mn;var u=o.sibling,f=o.return;if(tg(o),o===a){mn=null;break t}if(u!==null){u.return=f,mn=u;break t}mn=f}}}var Ax={getCacheForType:function(e){var n=Cn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Rx=typeof WeakMap=="function"?WeakMap:Map,we=0,Ve=null,de=null,ye=0,De=0,jn=null,Ea=!1,js=!1,df=!1,qi=0,Ze=0,Ta=0,us=0,pf=0,si=0,Zs=0,vo=null,Bn=null,mf=!1,gf=0,Ol=1/0,Pl=null,ba=null,Mn=0,Aa=null,Ks=null,Qs=0,_f=0,vf=null,ug=null,xo=0,xf=null;function Zn(){if((we&2)!==0&&ye!==0)return ye&-ye;if(I.T!==null){var e=Bs;return e!==0?e:Af()}return Me()}function fg(){si===0&&(si=(ye&536870912)===0||Re?q():536870912);var e=ai.current;return e!==null&&(e.flags|=32),si}function Kn(e,n,a){(e===Ve&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(Js(e,0),Ra(e,ye,si,!1)),gt(e,a),((we&2)===0||e!==Ve)&&(e===Ve&&((we&2)===0&&(us|=a),Ze===4&&Ra(e,ye,si,!1)),Ti(e))}function hg(e,n,a){if((we&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ee(e,n),u=o?Dx(e,n):Mf(e,n,!0),f=o;do{if(u===0){js&&!o&&Ra(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Cx(a)){u=Mf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var b=e;u=vo;var F=b.current.memoizedState.isDehydrated;if(F&&(Js(b,M).flags|=256),M=Mf(b,M,!1),M!==2){if(df&&!F){b.errorRecoveryDisabledLanes|=f,us|=f,u=4;break t}f=Bn,Bn=u,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){Js(e,0),Ra(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ra(o,n,si,!Ea);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=gf+300-te(),10<u)){if(Ra(o,n,si,!Ea),le(o,0,!0)!==0)break t;o.timeoutHandle=Gg(dg.bind(null,o,a,Bn,Pl,mf,n,si,us,Zs,Ea,f,2,-0,0),u);break t}dg(o,a,Bn,Pl,mf,n,si,us,Zs,Ea,f,0,-0,0)}}break}while(!0);Ti(e)}function dg(e,n,a,o,u,f,M,b,F,it,ft,_t,st,ot){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(Ao={stylesheets:null,count:0,unsuspend:cy},rg(n),_t=fy(),_t!==null)){e.cancelPendingCommit=_t(yg.bind(null,e,n,f,a,o,u,M,b,F,ft,1,st,ot)),Ra(e,f,M,!it);return}yg(e,n,f,a,o,u,M,b,F)}function Cx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Xn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(e,n,a,o){n&=~pf,n&=~us,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Rt(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&Nt(e,a,n)}function Il(){return(we&6)===0?(yo(0),!1):!0}function yf(){if(de!==null){if(De===0)var e=de.return;else e=de,Bi=as=null,Iu(e),Xs=null,co=0,e=de;for(;e!==null;)qm(e.alternate,e),e=e.return;de=null}}function Js(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,qx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),yf(),Ve=e,de=a=Pi(e.current,null),ye=n,De=0,jn=null,Ea=!1,js=ee(e,n),df=!1,Zs=si=pf=us=Ta=Ze=0,Bn=vo=null,mf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Rt(o),f=1<<u;n|=e[u],o&=~f}return qi=n,al(),a}function pg(e,n){ce=null,I.H=El,n===to||n===dl?(n=Lp(),De=3):n===Cp?(n=Lp(),De=4):De=n===Um?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,de===null&&(Ze=1,Cl(e,ti(n,e.current)))}function mg(){var e=I.H;return I.H=El,e===null?El:e}function gg(){var e=I.A;return I.A=Ax,e}function Sf(){Ze=4,Ea||(ye&4194048)!==ye&&ai.current!==null||(js=!0),(Ta&134217727)===0&&(us&134217727)===0||Ve===null||Ra(Ve,ye,si,!1)}function Mf(e,n,a){var o=we;we|=2;var u=mg(),f=gg();(Ve!==e||ye!==n)&&(Pl=null,Js(e,n)),n=!1;var M=Ze;t:do try{if(De!==0&&de!==null){var b=de,F=jn;switch(De){case 8:yf(),M=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var it=De;if(De=0,jn=null,$s(e,b,F,it),a&&js){M=0;break t}break;default:it=De,De=0,jn=null,$s(e,b,F,it)}}wx(),M=Ze;break}catch(ft){pg(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Bi=as=null,we=o,I.H=u,I.A=f,de===null&&(Ve=null,ye=0,al()),M}function wx(){for(;de!==null;)_g(de)}function Dx(e,n){var a=we;we|=2;var o=mg(),u=gg();Ve!==e||ye!==n?(Pl=null,Ol=te()+500,Js(e,n)):js=ee(e,n);t:do try{if(De!==0&&de!==null){n=de;var f=jn;e:switch(De){case 1:De=0,jn=null,$s(e,n,f,1);break;case 2:case 9:if(wp(f)){De=0,jn=null,vg(n);break}n=function(){De!==2&&De!==9||Ve!==e||(De=7),Ti(e)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:wp(f)?(De=0,jn=null,vg(n)):(De=0,jn=null,$s(e,n,f,7));break;case 5:var M=null;switch(de.tag){case 26:M=de.memoizedState;case 5:case 27:var b=de;if(!M||$g(M)){De=0,jn=null;var F=b.sibling;if(F!==null)de=F;else{var it=b.return;it!==null?(de=it,zl(it)):de=null}break e}}De=0,jn=null,$s(e,n,f,5);break;case 6:De=0,jn=null,$s(e,n,f,6);break;case 8:yf(),Ze=6;break t;default:throw Error(s(462))}}Lx();break}catch(ft){pg(e,ft)}while(!0);return Bi=as=null,I.H=o,I.A=u,we=a,de!==null?0:(Ve=null,ye=0,al(),Ze)}function Lx(){for(;de!==null&&!bn();)_g(de)}function _g(e){var n=Xm(e.alternate,e,qi);e.memoizedProps=e.pendingProps,n===null?zl(e):de=n}function vg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Bm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Bm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Iu(n);default:qm(a,n),n=de=xp(n,qi),n=Xm(a,n,qi)}e.memoizedProps=e.pendingProps,n===null?zl(e):de=n}function $s(e,n,a,o){Bi=as=null,Iu(n),Xs=null,co=0;var u=n.return;try{if(yx(e,u,n,a,ye)){Ze=1,Cl(e,ti(a,e.current)),de=null;return}}catch(f){if(u!==null)throw de=u,f;Ze=1,Cl(e,ti(a,e.current)),de=null;return}n.flags&32768?(Re||o===1?e=!0:js||(ye&536870912)!==0?e=!1:(Ea=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),xg(n,e)):zl(n)}function zl(e){var n=e;do{if((n.flags&32768)!==0){xg(n,Ea);return}e=n.return;var a=Mx(n.alternate,n,qi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);Ze===0&&(Ze=5)}function xg(e,n){do{var a=Ex(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ze=6,de=null}function yg(e,n,a,o,u,f,M,b,F){e.cancelPendingCommit=null;do Bl();while(Mn!==0);if((we&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=fu,Pt(e,a,f,M,b,F),e===Ve&&(de=Ve=null,ye=0),Ks=n,Aa=e,Qs=a,_f=f,vf=u,ug=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Px(P,function(){return bg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=Y.p,Y.p=2,M=we,we|=4;try{Tx(e,n,a)}finally{we=M,Y.p=u,I.T=o}}Mn=1,Sg(),Mg(),Eg()}}function Sg(){if(Mn===1){Mn=0;var e=Aa,n=Ks,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=Y.p;Y.p=2;var u=we;we|=4;try{ig(n,e);var f=Of,M=cp(e.containerInfo),b=f.focusedElem,F=f.selectionRange;if(M!==b&&b&&b.ownerDocument&&lp(b.ownerDocument.documentElement,b)){if(F!==null&&ru(b)){var it=F.start,ft=F.end;if(ft===void 0&&(ft=it),"selectionStart"in b)b.selectionStart=it,b.selectionEnd=Math.min(ft,b.value.length);else{var _t=b.ownerDocument||document,st=_t&&_t.defaultView||window;if(st.getSelection){var ot=st.getSelection(),$t=b.textContent.length,Zt=Math.min(F.start,$t),Pe=F.end===void 0?Zt:Math.min(F.end,$t);!ot.extend&&Zt>Pe&&(M=Pe,Pe=Zt,Zt=M);var Z=op(b,Zt),V=op(b,Pe);if(Z&&V&&(ot.rangeCount!==1||ot.anchorNode!==Z.node||ot.anchorOffset!==Z.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var tt=_t.createRange();tt.setStart(Z.node,Z.offset),ot.removeAllRanges(),Zt>Pe?(ot.addRange(tt),ot.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),ot.addRange(tt))}}}}for(_t=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&_t.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var dt=_t[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Kl=!!Nf,Of=Nf=null}finally{we=u,Y.p=o,I.T=a}}e.current=n,Mn=2}}function Mg(){if(Mn===2){Mn=0;var e=Aa,n=Ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=Y.p;Y.p=2;var u=we;we|=4;try{$m(e,n.alternate,n)}finally{we=u,Y.p=o,I.T=a}}Mn=3}}function Eg(){if(Mn===4||Mn===3){Mn=0,ue();var e=Aa,n=Ks,a=Qs,o=ug;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Ks=Aa=null,Tg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ba=null),$e(a),n=n.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=Y.p,Y.p=2,I.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var b=o[M];f(b.value,{componentStack:b.stack})}}finally{I.T=n,Y.p=u}}(Qs&3)!==0&&Bl(),Ti(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===xf?xo++:(xo=0,xf=e):xo=0,yo(0)}}function Tg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Jr(n)))}function Bl(e){return Sg(),Mg(),Eg(),bg()}function bg(){if(Mn!==5)return!1;var e=Aa,n=_f;_f=0;var a=$e(Qs),o=I.T,u=Y.p;try{Y.p=32>a?32:a,I.T=null,a=vf,vf=null;var f=Aa,M=Qs;if(Mn=0,Ks=Aa=null,Qs=0,(we&6)!==0)throw Error(s(331));var b=we;if(we|=4,lg(f.current),sg(f,f.current,M,a),we=b,yo(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{Y.p=u,I.T=o,Tg(e,n)}}function Ag(e,n,a){n=ti(a,n),n=Ku(e.stateNode,n,2),e=ga(e,n,2),e!==null&&(gt(e,2),Ti(e))}function Fe(e,n,a){if(e.tag===3)Ag(e,e,a);else for(;n!==null;){if(n.tag===3){Ag(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ba===null||!ba.has(o))){e=ti(a,e),a=Dm(2),o=ga(n,a,2),o!==null&&(Lm(a,o,n,e),gt(o,2),Ti(o));break}}n=n.return}}function Ef(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Rx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(df=!0,u.add(a),e=Ux.bind(null,e,n,a),n.then(e,e))}function Ux(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(ye&a)===a&&(Ze===4||Ze===3&&(ye&62914560)===ye&&300>te()-gf?(we&2)===0&&Js(e,0):pf|=a,Zs===ye&&(Zs=0)),Ti(e)}function Rg(e,n){n===0&&(n=Lt()),e=Os(e,n),e!==null&&(gt(e,n),Ti(e))}function Nx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Rg(e,a)}function Ox(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Rg(e,a)}function Px(e,n){return re(e,n)}var Fl=null,tr=null,Tf=!1,Hl=!1,bf=!1,fs=0;function Ti(e){e!==tr&&e.next===null&&(tr===null?Fl=tr=e:tr=tr.next=e),Hl=!0,Tf||(Tf=!0,zx())}function yo(e,n){if(!bf&&Hl){bf=!0;do for(var a=!1,o=Fl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Rt(42|e)+1)-1,f&=u&~(M&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Lg(o,f))}else f=ye,f=le(o,o===Ve?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ee(o,f)||(a=!0,Lg(o,f));o=o.next}while(a);bf=!1}}function Ix(){Cg()}function Cg(){Hl=Tf=!1;var e=0;fs!==0&&(Wx()&&(e=fs),fs=0);for(var n=te(),a=null,o=Fl;o!==null;){var u=o.next,f=wg(o,n);f===0?(o.next=null,a===null?Fl=u:a.next=u,u===null&&(tr=a)):(a=o,(e!==0||(f&3)!==0)&&(Hl=!0)),o=u}yo(e)}function wg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-Rt(f),b=1<<M,F=u[M];F===-1?((b&a)===0||(b&o)!==0)&&(u[M]=Ue(b,n)):F<=n&&(e.expiredLanes|=b),f&=~b}if(n=Ve,a=ye,a=le(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(De===2||De===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&G(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ee(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&G(o),$e(a)){case 2:case 8:a=Ft;break;case 32:a=P;break;case 268435456:a=at;break;default:a=P}return o=Dg.bind(null,e),a=re(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&G(o),e.callbackPriority=2,e.callbackNode=null,2}function Dg(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bl()&&e.callbackNode!==a)return null;var o=ye;return o=le(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(hg(e,o,n),wg(e,te()),e.callbackNode!=null&&e.callbackNode===a?Dg.bind(null,e):null)}function Lg(e,n){if(Bl())return null;hg(e,n,!0)}function zx(){Yx(function(){(we&6)!==0?re(Ae,Ix):Cg()})}function Af(){return fs===0&&(fs=q()),fs}function Ug(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function Ng(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Bx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ug((u[xn]||null).action),M=o.submitter;M&&(n=(n=M[xn]||null)?Ug(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var b=new el("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fs!==0){var F=M?Ng(u,M):new FormData(u);Wu(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(b.preventDefault(),F=M?Ng(u,M):new FormData(u),Wu(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Rf=0;Rf<uu.length;Rf++){var Cf=uu[Rf],Fx=Cf.toLowerCase(),Hx=Cf[0].toUpperCase()+Cf.slice(1);ui(Fx,"on"+Hx)}ui(hp,"onAnimationEnd"),ui(dp,"onAnimationIteration"),ui(pp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(ix,"onTransitionRun"),ui(ax,"onTransitionStart"),ui(sx,"onTransitionCancel"),ui(mp,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Li("onBeforeInput",["compositionend","keypress","textInput","paste"]),Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Og(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var b=o[M],F=b.instance,it=b.currentTarget;if(b=b.listener,F!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=it;try{f(u)}catch(ft){Rl(ft)}u.currentTarget=null,f=F}else for(M=0;M<o.length;M++){if(b=o[M],F=b.instance,it=b.currentTarget,b=b.listener,F!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=it;try{f(u)}catch(ft){Rl(ft)}u.currentTarget=null,f=F}}}}function pe(e,n){var a=n[Ya];a===void 0&&(a=n[Ya]=new Set);var o=e+"__bubble";a.has(o)||(Pg(n,e,2,!1),a.add(o))}function wf(e,n,a){var o=0;n&&(o|=4),Pg(a,e,o,n)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[Gl]){e[Gl]=!0,Zo.forEach(function(a){a!=="selectionchange"&&(Gx.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gl]||(n[Gl]=!0,wf("selectionchange",!1,n))}}function Pg(e,n,a,o){switch(s_(n)){case 2:var u=py;break;case 8:u=my;break;default:u=Xf}a=u.bind(null,n,a,e),u=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Lf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var b=o.stateNode.containerInfo;if(b===u)break;if(M===4)for(M=o.return;M!==null;){var F=M.tag;if((F===3||F===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;b!==null;){if(M=wi(b),M===null)return;if(F=M.tag,F===5||F===6||F===26||F===27){o=f=M;continue t}b=b.parentNode}}o=o.return}Vd(function(){var it=f,ft=Zc(a),_t=[];t:{var st=gp.get(e);if(st!==void 0){var ot=el,$t=e;switch(e){case"keypress":if($o(a)===0)break t;case"keydown":case"keyup":ot=Pv;break;case"focusin":$t="focus",ot=eu;break;case"focusout":$t="blur",ot=eu;break;case"beforeblur":case"afterblur":ot=eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Bv;break;case hp:case dp:case pp:ot=Av;break;case mp:ot=Hv;break;case"scroll":case"scrollend":ot=Sv;break;case"wheel":ot=Vv;break;case"copy":case"cut":case"paste":ot=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Yd;break;case"toggle":case"beforetoggle":ot=Xv}var Zt=(n&4)!==0,Pe=!Zt&&(e==="scroll"||e==="scrollend"),Z=Zt?st!==null?st+"Capture":null:st;Zt=[];for(var V=it,tt;V!==null;){var dt=V;if(tt=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||tt===null||Z===null||(dt=Fr(V,Z),dt!=null&&Zt.push(Mo(V,dt,tt))),Pe)break;V=V.return}0<Zt.length&&(st=new ot(st,$t,null,a,ft),_t.push({event:st,listeners:Zt}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",st&&a!==jc&&($t=a.relatedTarget||a.fromElement)&&(wi($t)||$t[On]))break t;if((ot||st)&&(st=ft.window===ft?ft:(st=ft.ownerDocument)?st.defaultView||st.parentWindow:window,ot?($t=a.relatedTarget||a.toElement,ot=it,$t=$t?wi($t):null,$t!==null&&(Pe=c($t),Zt=$t.tag,$t!==Pe||Zt!==5&&Zt!==27&&Zt!==6)&&($t=null)):(ot=null,$t=it),ot!==$t)){if(Zt=Wd,dt="onMouseLeave",Z="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Zt=Yd,dt="onPointerLeave",Z="onPointerEnter",V="pointer"),Pe=ot==null?st:Za(ot),tt=$t==null?st:Za($t),st=new Zt(dt,V+"leave",ot,a,ft),st.target=Pe,st.relatedTarget=tt,dt=null,wi(ft)===it&&(Zt=new Zt(Z,V+"enter",$t,a,ft),Zt.target=tt,Zt.relatedTarget=Pe,dt=Zt),Pe=dt,ot&&$t)e:{for(Zt=ot,Z=$t,V=0,tt=Zt;tt;tt=er(tt))V++;for(tt=0,dt=Z;dt;dt=er(dt))tt++;for(;0<V-tt;)Zt=er(Zt),V--;for(;0<tt-V;)Z=er(Z),tt--;for(;V--;){if(Zt===Z||Z!==null&&Zt===Z.alternate)break e;Zt=er(Zt),Z=er(Z)}Zt=null}else Zt=null;ot!==null&&Ig(_t,st,ot,Zt,!1),$t!==null&&Pe!==null&&Ig(_t,Pe,$t,Zt,!0)}}t:{if(st=it?Za(it):window,ot=st.nodeName&&st.nodeName.toLowerCase(),ot==="select"||ot==="input"&&st.type==="file")var Gt=ep;else if($d(st))if(np)Gt=tx;else{Gt=Jv;var fe=Qv}else ot=st.nodeName,!ot||ot.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?it&&Yc(it.elementType)&&(Gt=ep):Gt=$v;if(Gt&&(Gt=Gt(e,it))){tp(_t,Gt,a,ft);break t}fe&&fe(e,st,it),e==="focusout"&&it&&st.type==="number"&&it.memoizedProps.value!=null&&Rn(st,"number",st.value)}switch(fe=it?Za(it):window,e){case"focusin":($d(fe)||fe.contentEditable==="true")&&(Ls=fe,ou=it,Yr=null);break;case"focusout":Yr=ou=Ls=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,up(_t,a,ft);break;case"selectionchange":if(nx)break;case"keydown":case"keyup":up(_t,a,ft)}var Vt;if(iu)t:{switch(e){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else Ds?Qd(e,a)&&(Qt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Qt="onCompositionStart");Qt&&(jd&&a.locale!=="ko"&&(Ds||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&Ds&&(Vt=kd()):(ha=ft,Jc="value"in ha?ha.value:ha.textContent,Ds=!0)),fe=Vl(it,Qt),0<fe.length&&(Qt=new qd(Qt,e,null,a,ft),_t.push({event:Qt,listeners:fe}),Vt?Qt.data=Vt:(Vt=Jd(a),Vt!==null&&(Qt.data=Vt)))),(Vt=qv?Yv(e,a):jv(e,a))&&(Qt=Vl(it,"onBeforeInput"),0<Qt.length&&(fe=new qd("onBeforeInput","beforeinput",null,a,ft),_t.push({event:fe,listeners:Qt}),fe.data=Vt)),Bx(_t,e,it,a,ft)}Og(_t,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Vl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Fr(e,a),u!=null&&o.unshift(Mo(e,u,f)),u=Fr(e,n),u!=null&&o.push(Mo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ig(e,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var b=a,F=b.alternate,it=b.stateNode;if(b=b.tag,F!==null&&F===o)break;b!==5&&b!==26&&b!==27||it===null||(F=it,u?(it=Fr(a,f),it!=null&&M.unshift(Mo(a,it,F))):u||(it=Fr(a,f),it!=null&&M.push(Mo(a,it,F)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Vx=/\r\n?/g,kx=/\u0000|\uFFFD/g;function zg(e){return(typeof e=="string"?e:""+e).replace(Vx,`
`).replace(kx,"")}function Bg(e,n){return n=zg(n),zg(e)===n}function kl(){}function Oe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xi(e,""+o);break;case"className":Ct(e,"class",o);break;case"tabIndex":Ct(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,o);break;case"style":Hd(e,o,f);break;case"data":if(n!=="object"){Ct(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Qo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",u.name,u,null),Oe(e,n,"formEncType",u.formEncType,u,null),Oe(e,n,"formMethod",u.formMethod,u,null),Oe(e,n,"formTarget",u.formTarget,u,null)):(Oe(e,n,"encType",u.encType,u,null),Oe(e,n,"method",u.method,u,null),Oe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Qo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=kl);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Qo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Et(e,"popover",o);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Et(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xv.get(a)||a,Et(e,a,o))}}function Uf(e,n,a,o,u,f){switch(a){case"style":Hd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?xi(e,o):(typeof o=="number"||typeof o=="bigint")&&xi(e,""+o);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ko.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Et(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,f,M,a,null)}}u&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var b=f=M=u=null,F=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":M=ft;break;case"checked":F=ft;break;case"defaultChecked":it=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Oe(e,n,o,ft,a,null)}}Be(e,f,b,F,it,M,u,!1),Ye(e);return;case"select":pe("invalid",e),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":M=b;break;case"multiple":o=b;default:Oe(e,n,u,b,a,null)}n=f,a=M,e.multiple=!!o,n!=null?rn(e,!!o,n,!1):a!=null&&rn(e,!!o,a,!0);return;case"textarea":pe("invalid",e),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(b=a[M],b!=null))switch(M){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Oe(e,n,M,b,a,null)}yn(e,o,u,f),Ye(e);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,F,o,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(o=0;o<So.length;o++)pe(So[o],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,it,o,a,null)}return;default:if(Yc(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Uf(e,n,ft,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Oe(e,n,b,o,a,null))}function Xx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,b=null,F=null,it=null,ft=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":F=_t;default:o.hasOwnProperty(ot)||Oe(e,n,ot,null,o,_t)}}for(var st in o){var ot=o[st];if(_t=a[st],o.hasOwnProperty(st)&&(ot!=null||_t!=null))switch(st){case"type":f=ot;break;case"name":u=ot;break;case"checked":it=ot;break;case"defaultChecked":ft=ot;break;case"value":M=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==_t&&Oe(e,n,st,ot,o,_t)}}Ui(e,M,b,F,it,ft,f,u);return;case"select":ot=M=b=st=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ot=F;default:o.hasOwnProperty(f)||Oe(e,n,f,null,o,F)}for(u in o)if(f=o[u],F=a[u],o.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":st=f;break;case"defaultValue":b=f;break;case"multiple":M=f;default:f!==F&&Oe(e,n,u,f,o,F)}n=b,a=M,o=ot,st!=null?rn(e,!!a,st,!1):!!o!=!!a&&(n!=null?rn(e,!!a,n,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":ot=st=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Oe(e,n,b,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":st=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Oe(e,n,M,u,o,f)}dn(e,st,ot);return;case"option":for(var $t in a)if(st=a[$t],a.hasOwnProperty($t)&&st!=null&&!o.hasOwnProperty($t))switch($t){case"selected":e.selected=!1;break;default:Oe(e,n,$t,null,o,st)}for(F in o)if(st=o[F],ot=a[F],o.hasOwnProperty(F)&&st!==ot&&(st!=null||ot!=null))switch(F){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Oe(e,n,F,st,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)st=a[Zt],a.hasOwnProperty(Zt)&&st!=null&&!o.hasOwnProperty(Zt)&&Oe(e,n,Zt,null,o,st);for(it in o)if(st=o[it],ot=a[it],o.hasOwnProperty(it)&&st!==ot&&(st!=null||ot!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Oe(e,n,it,st,o,ot)}return;default:if(Yc(n)){for(var Pe in a)st=a[Pe],a.hasOwnProperty(Pe)&&st!==void 0&&!o.hasOwnProperty(Pe)&&Uf(e,n,Pe,void 0,o,st);for(ft in o)st=o[ft],ot=a[ft],!o.hasOwnProperty(ft)||st===ot||st===void 0&&ot===void 0||Uf(e,n,ft,st,o,ot);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!o.hasOwnProperty(Z)&&Oe(e,n,Z,null,o,st);for(_t in o)st=o[_t],ot=a[_t],!o.hasOwnProperty(_t)||st===ot||st==null&&ot==null||Oe(e,n,_t,st,o,ot)}var Nf=null,Of=null;function Xl(e){return e.nodeType===9?e:e.ownerDocument}function Fg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Pf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var If=null;function Wx(){var e=window.event;return e&&e.type==="popstate"?e===If?!1:(If=e,!0):(If=null,!1)}var Gg=typeof setTimeout=="function"?setTimeout:void 0,qx=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(e){return Vg.resolve(null).then(e).catch(jx)}:Gg;function jx(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function kg(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Eo(M.documentElement),a&2&&Eo(M.body),a&4)for(a=M.head,Eo(a),M=a.firstChild;M;){var b=M.nextSibling,F=M.nodeName;M[la]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=b}}if(u===0){e.removeChild(f),Lo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Lo(n)}function zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),ca(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Zx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[la])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function Kx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function Bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Qx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Ff=null;function Xg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Wg(e,n,a){switch(n=Xl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ca(e)}var ri=new Map,qg=new Set;function Wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=Y.d;Y.d={f:Jx,r:$x,D:ty,C:ey,L:ny,m:iy,X:sy,S:ay,M:ry};function Jx(){var e=Yi.f(),n=Il();return e||n}function $x(e){var n=Di(e);n!==null&&n.tag===5&&n.type==="form"?hm(n):Yi.r(e)}var nr=typeof document>"u"?null:document;function Yg(e,n,a){var o=nr;if(o&&typeof n=="string"&&n){var u=Ge(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),qg.has(u)||(qg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",e),tn(n),o.head.appendChild(n)))}}function ty(e){Yi.D(e),Yg("dns-prefetch",e,null)}function ey(e,n){Yi.C(e,n),Yg("preconnect",e,n)}function ny(e,n,a){Yi.L(e,n,a);var o=nr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ge(a.imageSizes)+'"]')):u+='[href="'+Ge(e)+'"]';var f=u;switch(n){case"style":f=ir(e);break;case"script":f=ar(e)}ri.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(To(f))||n==="script"&&o.querySelector(bo(f))||(n=o.createElement("link"),En(n,"link",e),tn(n),o.head.appendChild(n)))}}function iy(e,n){Yi.m(e,n);var a=nr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ge(o)+'"][href="'+Ge(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ar(e)}if(!ri.has(f)&&(e=g({rel:"modulepreload",href:e},n),ri.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}o=a.createElement("link"),En(o,"link",e),tn(o),a.head.appendChild(o)}}}function ay(e,n,a){Yi.S(e,n,a);var o=nr;if(o&&e){var u=ua(o).hoistableStyles,f=ir(e);n=n||"default";var M=u.get(f);if(!M){var b={loading:0,preload:null};if(M=o.querySelector(To(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(f))&&Hf(e,a);var F=M=o.createElement("link");tn(F),En(F,"link",e),F._p=new Promise(function(it,ft){F.onload=it,F.onerror=ft}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ql(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:b},u.set(f,M)}}}function sy(e,n){Yi.X(e,n);var a=nr;if(a&&e){var o=ua(a).hoistableScripts,u=ar(e),f=o.get(u);f||(f=a.querySelector(bo(u)),f||(e=g({src:e,async:!0},n),(n=ri.get(u))&&Gf(e,n),f=a.createElement("script"),tn(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ry(e,n){Yi.M(e,n);var a=nr;if(a&&e){var o=ua(a).hoistableScripts,u=ar(e),f=o.get(u);f||(f=a.querySelector(bo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ri.get(u))&&Gf(e,n),f=a.createElement("script"),tn(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function jg(e,n,a,o){var u=(u=yt.current)?Wl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ir(a.href),a=ua(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ir(a.href);var f=ua(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(To(e)))&&!f._p&&(M.instance=f,M.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),f||oy(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ar(a),a=ua(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ir(e){return'href="'+Ge(e)+'"'}function To(e){return'link[rel="stylesheet"]['+e+"]"}function Zg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function oy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),tn(n),e.head.appendChild(n))}function ar(e){return'[src="'+Ge(e)+'"]'}function bo(e){return"script[async]"+e}function Kg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ge(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),tn(o),En(o,"style",u),ql(o,a.precedence,e),n.instance=o;case"stylesheet":u=ir(a.href);var f=e.querySelector(To(u));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;o=Zg(a),(u=ri.get(u))&&Hf(o,u),f=(e.ownerDocument||e).createElement("link"),tn(f);var M=f;return M._p=new Promise(function(b,F){M.onload=b,M.onerror=F}),En(f,"link",o),n.state.loading|=4,ql(f,a.precedence,e),n.instance=f;case"script":return f=ar(a.src),(u=e.querySelector(bo(f)))?(n.instance=u,tn(u),u):(o=a,(u=ri.get(f))&&(o=g({},a),Gf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),tn(u),En(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ql(o,a.precedence,e));return n.instance}function ql(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var b=o[M];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yl=null;function Qg(e,n,a){if(Yl===null){var o=new Map,u=Yl=new Map;u.set(a,o)}else u=Yl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[la]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var b=o.get(M);b?b.push(f):o.set(M,[f])}}return o}function Jg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ly(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $g(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ao=null;function cy(){}function uy(e,n,a){if(Ao===null)throw Error(s(475));var o=Ao;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ir(a.href),f=e.querySelector(To(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=jl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,tn(f);return}f=e.ownerDocument||e,a=Zg(a),(u=ri.get(u))&&Hf(a,u),f=f.createElement("link"),tn(f);var M=f;M._p=new Promise(function(b,F){M.onload=b,M.onerror=F}),En(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=jl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function fy(){if(Ao===null)throw Error(s(475));var e=Ao;return e.stylesheets&&e.count===0&&Vf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Vf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function jl(){if(this.count--,this.count===0){if(this.stylesheets)Vf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Vf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(hy,e),Zl=null,jl.call(e))}function hy(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var o=a.get(null);else{a=new Map,Zl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:L,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function dy(e,n,a,o,u,f,M,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ut(0),this.hiddenUpdates=ut(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function t_(e,n,a,o,u,f,M,b,F,it,ft,_t){return e=new dy(e,n,a,M,b,F,it,_t),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),e.current=f,f.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Au(f),e}function e_(e){return e?(e=Ps,e):Ps}function n_(e,n,a,o,u,f){u=e_(u),o.context===null?o.context=u:o.pendingContext=u,o=ma(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ga(e,o,n),a!==null&&(Kn(a,e,n),no(a,e,n))}function i_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function kf(e,n){i_(e,n),(e=e.alternate)&&i_(e,n)}function a_(e){if(e.tag===13){var n=Os(e,67108864);n!==null&&Kn(n,e,67108864),kf(e,67108864)}}var Kl=!0;function py(e,n,a,o){var u=I.T;I.T=null;var f=Y.p;try{Y.p=2,Xf(e,n,a,o)}finally{Y.p=f,I.T=u}}function my(e,n,a,o){var u=I.T;I.T=null;var f=Y.p;try{Y.p=8,Xf(e,n,a,o)}finally{Y.p=f,I.T=u}}function Xf(e,n,a,o){if(Kl){var u=Wf(o);if(u===null)Lf(e,n,o,Ql,a),r_(e,o);else if(_y(u,e,n,a,o))o.stopPropagation();else if(r_(e,o),n&4&&-1<gy.indexOf(e)){for(;u!==null;){var f=Di(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Ot(f.pendingLanes);if(M!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var F=1<<31-Rt(M);b.entanglements[1]|=F,M&=~F}Ti(f),(we&6)===0&&(Ol=te()+500,yo(0))}}break;case 13:b=Os(f,2),b!==null&&Kn(b,f,2),Il(),kf(f,2)}if(f=Wf(o),f===null&&Lf(e,n,o,Ql,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Lf(e,n,o,null,a)}}function Wf(e){return e=Zc(e),qf(e)}var Ql=null;function qf(e){if(Ql=null,e=wi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ql=e,null}function s_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bt()){case Ae:return 2;case Ft:return 8;case P:case A:return 32;case at:return 268435456;default:return 32}default:return 32}}var Yf=!1,wa=null,Da=null,La=null,Co=new Map,wo=new Map,Ua=[],gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r_(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Di(n),n!==null&&a_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function _y(e,n,a,o,u){switch(n){case"focusin":return wa=Do(wa,e,n,a,o,u),!0;case"dragenter":return Da=Do(Da,e,n,a,o,u),!0;case"mouseover":return La=Do(La,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Do(Co.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,wo.set(f,Do(wo.get(f)||null,e,n,a,o,u)),!0}return!1}function o_(e){var n=wi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,kn(e.priority,function(){if(a.tag===13){var o=Zn();o=He(o);var u=Os(a,o);u!==null&&Kn(u,a,o),kf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Wf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);jc=o,a.target.dispatchEvent(o),jc=null}else return n=Di(a),n!==null&&a_(n),e.blockedOn=a,!1;n.shift()}return!0}function l_(e,n,a){Jl(e)&&a.delete(n)}function vy(){Yf=!1,wa!==null&&Jl(wa)&&(wa=null),Da!==null&&Jl(Da)&&(Da=null),La!==null&&Jl(La)&&(La=null),Co.forEach(l_),wo.forEach(l_)}function $l(e,n){e.blockedOn===n&&(e.blockedOn=null,Yf||(Yf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,vy)))}var tc=null;function c_(e){tc!==e&&(tc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){tc===e&&(tc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(qf(o||a)===null)continue;break}var f=Di(a);f!==null&&(e.splice(n,3),n-=3,Wu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Lo(e){function n(F){return $l(F,e)}wa!==null&&$l(wa,e),Da!==null&&$l(Da,e),La!==null&&$l(La,e),Co.forEach(n),wo.forEach(n);for(var a=0;a<Ua.length;a++){var o=Ua[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)o_(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[xn]||null;if(typeof f=="function")M||c_(a);else if(M){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[xn]||null)b=M.formAction;else if(qf(u)!==null)continue}else b=M.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),c_(a)}}}function jf(e){this._internalRoot=e}ec.prototype.render=jf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Zn();n_(a,o,e,n,null,null)},ec.prototype.unmount=jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;n_(e.current,2,null,e,null,null),Il(),n[On]=null}};function ec(e){this._internalRoot=e}ec.prototype.unstable_scheduleHydration=function(e){if(e){var n=Me();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&o_(e)}};var u_=t.version;if(u_!=="19.1.1")throw Error(s(527,u_,"19.1.1"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var xy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{ht=nc.inject(xy),It=nc}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Am,f=Rm,M=Cm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=t_(e,1,!1,null,null,a,o,u,f,M,b,null),e[On]=n.current,Df(e),new jf(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Am,M=Rm,b=Cm,F=null,it=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&(it=a.formState)),n=t_(e,1,!0,n,a??null,o,u,f,M,b,F,it),n.context=e_(null),a=n.current,o=Zn(),o=He(o),u=ma(o),u.callback=null,ga(a,u,o),a=o,n.current.lanes=a,gt(n,a),Ti(n),e[On]=n.current,Df(e),new ec(n)},No.version="19.1.1",No}var y_;function wy(){if(y_)return Qf.exports;y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Qf.exports=Cy(),Qf.exports}var Dy=wy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rd="174",Tr={ROTATE:0,DOLLY:1,PAN:2},Sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ly=0,S_=1,Uy=2,B0=1,Ny=2,ta=3,qa=0,Gn=1,ea=2,Xa=0,br=1,M_=2,E_=3,T_=4,Oy=5,ys=100,Py=101,Iy=102,zy=103,By=104,Fy=200,Hy=201,Gy=202,Vy=203,Ih=204,zh=205,ky=206,Xy=207,Wy=208,qy=209,Yy=210,jy=211,Zy=212,Ky=213,Qy=214,Bh=0,Fh=1,Hh=2,wr=3,Gh=4,Vh=5,kh=6,Xh=7,F0=0,Jy=1,$y=2,Wa=0,tS=1,eS=2,nS=3,iS=4,aS=5,sS=6,rS=7,H0=300,Dr=301,Lr=302,Wh=303,qh=304,kc=306,Yh=1e3,Ms=1001,jh=1002,vi=1003,oS=1004,ic=1005,Ai=1006,eh=1007,Es=1008,ra=1009,G0=1010,V0=1011,Vo=1012,Cd=1013,Ts=1014,na=1015,ko=1016,wd=1017,Dd=1018,Ur=1020,k0=35902,X0=1021,W0=1022,_i=1023,q0=1024,Y0=1025,Ar=1026,Nr=1027,j0=1028,Ld=1029,Z0=1030,Ud=1031,Nd=1033,wc=33776,Dc=33777,Lc=33778,Uc=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,td=37492,ed=37496,nd=37808,id=37809,ad=37810,sd=37811,rd=37812,od=37813,ld=37814,cd=37815,ud=37816,fd=37817,hd=37818,dd=37819,pd=37820,md=37821,Nc=36492,gd=36494,_d=36495,K0=36283,vd=36284,xd=36285,yd=36286,lS=3200,cS=3201,Q0=0,uS=1,Va="",$n="srgb",Or="srgb-linear",Ic="linear",Ie="srgb",sr=7680,b_=519,fS=512,hS=513,dS=514,J0=515,pS=516,mS=517,gS=518,_S=519,A_=35044,R_="300 es",ia=2e3,zc=2001;class Rs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oc=Math.PI/180,Sd=180/Math.PI;function Xo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function me(r,t,i){return Math.max(t,Math.min(i,r))}function vS(r,t){return(r%t+t)%t}function nh(r,t,i){return(1-i)*r+i*t}function Oo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xS={DEG2RAD:Oc};class Wt{constructor(t=0,i=0){Wt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,i,s,l,c,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],x=s[7],v=s[2],S=s[5],E=s[8],T=l[0],y=l[3],_=l[6],O=l[1],L=l[4],w=l[7],z=l[2],H=l[5],B=l[8];return c[0]=h*T+d*O+m*z,c[3]=h*y+d*L+m*H,c[6]=h*_+d*w+m*B,c[1]=p*T+g*O+x*z,c[4]=p*y+g*L+x*H,c[7]=p*_+g*w+x*B,c[2]=v*T+S*O+E*z,c[5]=v*y+S*L+E*H,c[8]=v*_+S*w+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,v=d*m-g*c,S=p*c-h*m,E=i*x+s*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=x*T,t[1]=(l*p-g*s)*T,t[2]=(d*s-l*h)*T,t[3]=v*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=S*T,t[7]=(s*m-p*i)*T,t[8]=(h*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ih.makeScale(t,i)),this}rotate(t){return this.premultiply(ih.makeRotation(-t)),this}translate(t,i){return this.premultiply(ih.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ih=new se;function $0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Bc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yS(){const r=Bc("canvas");return r.style.display="block",r}const C_={};function vs(r){r in C_||(C_[r]=!0,console.warn(r))}function SS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function MS(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ES(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const w_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),D_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TS(){const r={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Rr(l.r),l.g=Rr(l.g),l.b=Rr(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Ic:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Or]:{primaries:t,whitePoint:s,transfer:Ic,toXYZ:w_,fromXYZ:D_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:t,whitePoint:s,transfer:Ie,toXYZ:w_,fromXYZ:D_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),r}const be=TS();function aa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let rr;class bS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{rr===void 0&&(rr=Bc("canvas")),rr.width=t.width,rr.height=t.height;const s=rr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=rr}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Bc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=aa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(aa(i[s]/255)*255):i[s]=aa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let AS=0;class Od{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(ah(l[h].image)):c.push(ah(l[h]))}else c=ah(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ah(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RS=0;class Vn extends Rs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Ms,l=Ms,c=Ai,h=Es,d=_i,m=ra,p=Vn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Xo(),this.name="",this.source=new Od(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==H0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yh:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yh:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=H0;Vn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,s=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],x=m[8],v=m[1],S=m[5],E=m[9],T=m[2],y=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+T)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,w=(S+1)/2,z=(_+1)/2,H=(g+v)/4,B=(x+T)/4,k=(E+y)/4;return L>w&&L>z?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=H/s,c=B/s):w>z?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=H/l,c=k/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=B/c,l=k/c),this.set(s,l,c,i),this}let O=Math.sqrt((y-E)*(y-E)+(x-T)*(x-T)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(x-T)/O,this.z=(v-g)/O,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CS extends Rs{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Vn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Od(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends CS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class tv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wS extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],x=s[l+3];const v=c[h+0],S=c[h+1],E=c[h+2],T=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=v,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(x!==T||m!==v||p!==S||g!==E){let y=1-d;const _=m*v+p*S+g*E+x*T,O=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const z=Math.sqrt(L),H=Math.atan2(z,_*O);y=Math.sin(y*H)/z,d=Math.sin(d*H)/z}const w=d*O;if(m=m*y+v*w,p=p*y+S*w,g=g*y+E*w,x=x*y+T*w,y===1-d){const z=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=z,p*=z,g*=z,x*=z}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],x=c[h],v=c[h+1],S=c[h+2],E=c[h+3];return t[i]=d*E+g*x+m*S-p*v,t[i+1]=m*E+g*v+p*x-d*S,t[i+2]=p*E+g*S+d*v-m*x,t[i+3]=g*E-d*x-m*v-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),x=d(c/2),v=m(s/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=v*g*x+p*S*E,this._y=p*S*x-v*g*E,this._z=p*g*E+v*S*x,this._w=p*g*x-v*S*E;break;case"YXZ":this._x=v*g*x+p*S*E,this._y=p*S*x-v*g*E,this._z=p*g*E-v*S*x,this._w=p*g*x+v*S*E;break;case"ZXY":this._x=v*g*x-p*S*E,this._y=p*S*x+v*g*E,this._z=p*g*E+v*S*x,this._w=p*g*x-v*S*E;break;case"ZYX":this._x=v*g*x-p*S*E,this._y=p*S*x+v*g*E,this._z=p*g*E-v*S*x,this._w=p*g*x+v*S*E;break;case"YZX":this._x=v*g*x+p*S*E,this._y=p*S*x+v*g*E,this._z=p*g*E-v*S*x,this._w=p*g*x-v*S*E;break;case"XZY":this._x=v*g*x-p*S*E,this._y=p*S*x-v*g*E,this._z=p*g*E+v*S*x,this._w=p*g*x+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=s+d+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>x){const S=2*Math.sqrt(1+s-d-x);this._w=(g-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>x){const S=2*Math.sqrt(1+d-s-x);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+x-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=h*x+this._w*v,this._x=s*x+this._x*v,this._y=l*x+this._y*v,this._z=c*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(L_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(L_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*g,this.y=s+m*g+d*p-c*x,this.z=l+m*x+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return sh.copy(this).projectOnVector(t),this.sub(sh)}reflect(t){return this.sub(sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sh=new K,L_=new As;class Wo{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,di):di.fromBufferAttribute(c,h),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ac.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ac.copy(s.boundingBox)),ac.applyMatrix4(t.matrixWorld),this.union(ac)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),sc.subVectors(this.max,Po),or.subVectors(t.a,Po),lr.subVectors(t.b,Po),cr.subVectors(t.c,Po),Oa.subVectors(lr,or),Pa.subVectors(cr,lr),hs.subVectors(or,cr);let i=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-hs.z,hs.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,hs.z,0,-hs.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-hs.y,hs.x,0];return!rh(i,or,lr,cr,sc)||(i=[1,0,0,0,1,0,0,0,1],!rh(i,or,lr,cr,sc))?!1:(rc.crossVectors(Oa,Pa),i=[rc.x,rc.y,rc.z],rh(i,or,lr,cr,sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ji=[new K,new K,new K,new K,new K,new K,new K,new K],di=new K,ac=new Wo,or=new K,lr=new K,cr=new K,Oa=new K,Pa=new K,hs=new K,Po=new K,sc=new K,rc=new K,ds=new K;function rh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){ds.fromArray(r,c);const d=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),m=t.dot(ds),p=i.dot(ds),g=s.dot(ds);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const DS=new Wo,Io=new K,oh=new K;class Xc{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):DS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Io,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(oh)),this.expandByPoint(Io.copy(t.center).sub(oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new K,lh=new K,oc=new K,Ia=new K,ch=new K,lc=new K,uh=new K;class Ir{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){lh.copy(t).add(i).multiplyScalar(.5),oc.copy(i).sub(t).normalize(),Ia.copy(this.origin).sub(lh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(oc),d=Ia.dot(this.direction),m=-Ia.dot(oc),p=Ia.lengthSq(),g=Math.abs(1-h*h);let x,v,S,E;if(g>0)if(x=h*m-d,v=h*d-m,E=c*g,x>=0)if(v>=-E)if(v<=E){const T=1/g;x*=T,v*=T,S=x*(x+h*v+2*d)+v*(h*x+v+2*m)+p}else v=c,x=Math.max(0,-(h*v+d)),S=-x*x+v*(v+2*m)+p;else v=-c,x=Math.max(0,-(h*v+d)),S=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-h*c+d)),v=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-c,-m),c),S=v*(v+2*m)+p):(x=Math.max(0,-(h*c+d)),v=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+v*(v+2*m)+p);else v=h>0?-c:c,x=Math.max(0,-(h*v+d)),S=-x*x+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(lh).addScaledVector(oc,v),S}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const s=Zi.dot(this.direction),l=Zi.dot(Zi)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,h=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,h=(t.min.y-v.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(d=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,s,l,c){ch.subVectors(i,t),lc.subVectors(s,t),uh.crossVectors(ch,lc);let h=this.direction.dot(uh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ia.subVectors(this.origin,t);const m=d*this.direction.dot(lc.crossVectors(Ia,lc));if(m<0)return null;const p=d*this.direction.dot(ch.cross(Ia));if(p<0||m+p>h)return null;const g=-d*Ia.dot(uh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,i,s,l,c,h,d,m,p,g,x,v,S,E,T,y){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,x,v,S,E,T,y)}set(t,i,s,l,c,h,d,m,p,g,x,v,S,E,T,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=S,_[7]=E,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/ur.setFromMatrixColumn(t,0).length(),c=1/ur.setFromMatrixColumn(t,1).length(),h=1/ur.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const v=h*g,S=h*x,E=d*g,T=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=S+E*p,i[5]=v-T*p,i[9]=-d*m,i[2]=T-v*p,i[6]=E+S*p,i[10]=h*m}else if(t.order==="YXZ"){const v=m*g,S=m*x,E=p*g,T=p*x;i[0]=v+T*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=S*d-E,i[6]=T+v*d,i[10]=h*m}else if(t.order==="ZXY"){const v=m*g,S=m*x,E=p*g,T=p*x;i[0]=v-T*d,i[4]=-h*x,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*g,i[9]=T-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const v=h*g,S=h*x,E=d*g,T=d*x;i[0]=m*g,i[4]=E*p-S,i[8]=v*p+T,i[1]=m*x,i[5]=T*p+v,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const v=h*m,S=h*p,E=d*m,T=d*p;i[0]=m*g,i[4]=T-v*x,i[8]=E*x+S,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*x+E,i[10]=v-T*x}else if(t.order==="XZY"){const v=h*m,S=h*p,E=d*m,T=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+T,i[5]=h*g,i[9]=S*x-E,i[2]=E*x-S,i[6]=d*g,i[10]=T*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(LS,t,US)}lookAt(t,i,s){const l=this.elements;return Qn.subVectors(t,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),za.crossVectors(s,Qn),za.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),za.crossVectors(s,Qn)),za.normalize(),cc.crossVectors(Qn,za),l[0]=za.x,l[4]=cc.x,l[8]=Qn.x,l[1]=za.y,l[5]=cc.y,l[9]=Qn.y,l[2]=za.z,l[6]=cc.z,l[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],x=s[5],v=s[9],S=s[13],E=s[2],T=s[6],y=s[10],_=s[14],O=s[3],L=s[7],w=s[11],z=s[15],H=l[0],B=l[4],k=l[8],D=l[12],R=l[1],U=l[5],J=l[9],W=l[13],et=l[2],ct=l[6],I=l[10],Y=l[14],X=l[3],mt=l[7],N=l[11],nt=l[15];return c[0]=h*H+d*R+m*et+p*X,c[4]=h*B+d*U+m*ct+p*mt,c[8]=h*k+d*J+m*I+p*N,c[12]=h*D+d*W+m*Y+p*nt,c[1]=g*H+x*R+v*et+S*X,c[5]=g*B+x*U+v*ct+S*mt,c[9]=g*k+x*J+v*I+S*N,c[13]=g*D+x*W+v*Y+S*nt,c[2]=E*H+T*R+y*et+_*X,c[6]=E*B+T*U+y*ct+_*mt,c[10]=E*k+T*J+y*I+_*N,c[14]=E*D+T*W+y*Y+_*nt,c[3]=O*H+L*R+w*et+z*X,c[7]=O*B+L*U+w*ct+z*mt,c[11]=O*k+L*J+w*I+z*N,c[15]=O*D+L*W+w*Y+z*nt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],v=t[10],S=t[14],E=t[3],T=t[7],y=t[11],_=t[15];return E*(+c*m*x-l*p*x-c*d*v+s*p*v+l*d*S-s*m*S)+T*(+i*m*S-i*p*v+c*h*v-l*h*S+l*p*g-c*m*g)+y*(+i*p*x-i*d*S-c*h*x+s*h*S+c*d*g-s*p*g)+_*(-l*d*g-i*m*x+i*d*v+l*h*x-s*h*v+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],v=t[10],S=t[11],E=t[12],T=t[13],y=t[14],_=t[15],O=x*y*p-T*v*p+T*m*S-d*y*S-x*m*_+d*v*_,L=E*v*p-g*y*p-E*m*S+h*y*S+g*m*_-h*v*_,w=g*T*p-E*x*p+E*d*S-h*T*S-g*d*_+h*x*_,z=E*x*m-g*T*m-E*d*v+h*T*v+g*d*y-h*x*y,H=i*O+s*L+l*w+c*z;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=O*B,t[1]=(T*v*c-x*y*c-T*l*S+s*y*S+x*l*_-s*v*_)*B,t[2]=(d*y*c-T*m*c+T*l*p-s*y*p-d*l*_+s*m*_)*B,t[3]=(x*m*c-d*v*c-x*l*p+s*v*p+d*l*S-s*m*S)*B,t[4]=L*B,t[5]=(g*y*c-E*v*c+E*l*S-i*y*S-g*l*_+i*v*_)*B,t[6]=(E*m*c-h*y*c-E*l*p+i*y*p+h*l*_-i*m*_)*B,t[7]=(h*v*c-g*m*c+g*l*p-i*v*p-h*l*S+i*m*S)*B,t[8]=w*B,t[9]=(E*x*c-g*T*c-E*s*S+i*T*S+g*s*_-i*x*_)*B,t[10]=(h*T*c-E*d*c+E*s*p-i*T*p-h*s*_+i*d*_)*B,t[11]=(g*d*c-h*x*c-g*s*p+i*x*p+h*s*S-i*d*S)*B,t[12]=z*B,t[13]=(g*T*l-E*x*l+E*s*v-i*T*v-g*s*y+i*x*y)*B,t[14]=(E*d*l-h*T*l-E*s*m+i*T*m+h*s*y-i*d*y)*B,t[15]=(h*x*l-g*d*l+g*s*m-i*x*m-h*s*v+i*d*v)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,x=d+d,v=c*p,S=c*g,E=c*x,T=h*g,y=h*x,_=d*x,O=m*p,L=m*g,w=m*x,z=s.x,H=s.y,B=s.z;return l[0]=(1-(T+_))*z,l[1]=(S+w)*z,l[2]=(E-L)*z,l[3]=0,l[4]=(S-w)*H,l[5]=(1-(v+_))*H,l[6]=(y+O)*H,l[7]=0,l[8]=(E+L)*B,l[9]=(y-O)*B,l[10]=(1-(v+T))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=ur.set(l[0],l[1],l[2]).length();const h=ur.set(l[4],l[5],l[6]).length(),d=ur.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/c,g=1/h,x=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=x,pi.elements[9]*=x,pi.elements[10]*=x,i.setFromRotationMatrix(pi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=ia){const m=this.elements,p=2*c/(i-t),g=2*c/(s-l),x=(i+t)/(i-t),v=(s+l)/(s-l);let S,E;if(d===ia)S=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===zc)S=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=S,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=ia){const m=this.elements,p=1/(i-t),g=1/(s-l),x=1/(h-c),v=(i+t)*p,S=(s+l)*g;let E,T;if(d===ia)E=(h+c)*x,T=-2*x;else if(d===zc)E=c*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-S,m[2]=0,m[6]=0,m[10]=T,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const ur=new K,pi=new ke,LS=new K(0,0,0),US=new K(1,1,1),za=new K,cc=new K,Qn=new K,U_=new ke,N_=new As;class Ri{constructor(t=0,i=0,s=0,l=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-me(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return U_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(U_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return N_.setFromEuler(this),this.setFromQuaternion(N_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Pd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let NS=0;const O_=new K,fr=new As,Ki=new ke,uc=new K,zo=new K,OS=new K,PS=new As,P_=new K(1,0,0),I_=new K(0,1,0),z_=new K(0,0,1),B_={type:"added"},IS={type:"removed"},hr={type:"childadded",child:null},fh={type:"childremoved",child:null};class vn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new K,i=new Ri,s=new As,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ke},normalMatrix:{value:new se}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fr.setFromAxisAngle(t,i),this.quaternion.multiply(fr),this}rotateOnWorldAxis(t,i){return fr.setFromAxisAngle(t,i),this.quaternion.premultiply(fr),this}rotateX(t){return this.rotateOnAxis(P_,t)}rotateY(t){return this.rotateOnAxis(I_,t)}rotateZ(t){return this.rotateOnAxis(z_,t)}translateOnAxis(t,i){return O_.copy(t).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(P_,t)}translateY(t){return this.translateOnAxis(I_,t)}translateZ(t){return this.translateOnAxis(z_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?uc.copy(t):uc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(zo,uc,this.up):Ki.lookAt(uc,zo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),fr.setFromRotationMatrix(Ki),this.quaternion.premultiply(fr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(B_),hr.child=t,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(IS),fh.child=t,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(B_),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,OS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,PS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),v=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}vn.DEFAULT_UP=new K(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new K,Qi=new K,hh=new K,Ji=new K,dr=new K,pr=new K,F_=new K,dh=new K,ph=new K,mh=new K,gh=new Ke,_h=new Ke,vh=new Ke;class gi{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),mi.subVectors(t,i),l.cross(mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){mi.subVectors(l,i),Qi.subVectors(s,i),hh.subVectors(t,i);const h=mi.dot(mi),d=mi.dot(Qi),m=mi.dot(hh),p=Qi.dot(Qi),g=Qi.dot(hh),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const v=1/x,S=(p*m-d*g)*v,E=(h*g-d*m)*v;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ji.x),m.addScaledVector(h,Ji.y),m.addScaledVector(d,Ji.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return gh.setScalar(0),_h.setScalar(0),vh.setScalar(0),gh.fromBufferAttribute(t,i),_h.fromBufferAttribute(t,s),vh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(gh,c.x),h.addScaledVector(_h,c.y),h.addScaledVector(vh,c.z),h}static isFrontFacing(t,i,s,l){return mi.subVectors(s,i),Qi.subVectors(t,i),mi.cross(Qi).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),mi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return gi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;dr.subVectors(l,s),pr.subVectors(c,s),dh.subVectors(t,s);const m=dr.dot(dh),p=pr.dot(dh);if(m<=0&&p<=0)return i.copy(s);ph.subVectors(t,l);const g=dr.dot(ph),x=pr.dot(ph);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(dr,h);mh.subVectors(t,c);const S=dr.dot(mh),E=pr.dot(mh);if(E>=0&&S<=E)return i.copy(c);const T=S*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(pr,d);const y=g*E-S*x;if(y<=0&&x-g>=0&&S-E>=0)return F_.subVectors(c,l),d=(x-g)/(x-g+(S-E)),i.copy(l).addScaledVector(F_,d);const _=1/(y+T+v);return h=T*_,d=v*_,i.copy(s).addScaledVector(dr,h).addScaledVector(pr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},fc={h:0,s:0,l:0};function xh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ge{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=$n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=s,be.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=be.workingColorSpace){if(t=vS(t,1),i=me(i,0,1),s=me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=xh(h,c,t+1/3),this.g=xh(h,c,t),this.b=xh(h,c,t-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(t,i=$n){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=$n){const s=ev[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$n){return be.fromWorkingColorSpace(Ln.copy(this),t),Math.round(me(Ln.r*255,0,255))*65536+Math.round(me(Ln.g*255,0,255))*256+Math.round(me(Ln.b*255,0,255))}getHexString(t=$n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.fromWorkingColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=be.workingColorSpace){return be.fromWorkingColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=$n){be.fromWorkingColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==$n?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+i,Ba.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ba),t.getHSL(fc);const s=nh(Ba.h,fc.h,i),l=nh(Ba.s,fc.s,i),c=nh(Ba.l,fc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new ge;ge.NAMES=ev;let zS=0;class zr extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=br,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=zh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(s.blending=this.blending),this.side!==qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ih&&(s.blendSrc=this.blendSrc),this.blendDst!==zh&&(s.blendDst=this.blendDst),this.blendEquation!==ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nv extends zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=F0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new K,hc=new Wt;let BS=0;class Tn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=A_,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(t),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Oo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array),c=Fn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==A_&&(t.usage=this.usage),t}}class iv extends Tn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class av extends Tn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class sa extends Tn{constructor(t,i,s){super(new Float32Array(t),i,s)}}let FS=0;const oi=new ke,yh=new vn,mr=new K,Jn=new Wo,Bo=new Wo,_n=new K;class Ci extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($0(t)?av:iv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new se().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,i,s){return oi.makeTranslation(t,i,s),this.applyMatrix4(oi),this}scale(t,i,s){return oi.makeScale(t,i,s),this.applyMatrix4(oi),this}lookAt(t){return yh.lookAt(t),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new sa(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Jn.min,Bo.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,Bo.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(Bo.min),Jn.expandByPoint(Bo.max))}Jn.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)_n.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(mr.fromBufferAttribute(t,p),_n.add(mr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<s.count;k++)d[k]=new K,m[k]=new K;const p=new K,g=new K,x=new K,v=new Wt,S=new Wt,E=new Wt,T=new K,y=new K;function _(k,D,R){p.fromBufferAttribute(s,k),g.fromBufferAttribute(s,D),x.fromBufferAttribute(s,R),v.fromBufferAttribute(c,k),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,R),g.sub(p),x.sub(p),S.sub(v),E.sub(v);const U=1/(S.x*E.y-E.x*S.y);isFinite(U)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(U),y.copy(x).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(U),d[k].add(T),d[D].add(T),d[R].add(T),m[k].add(y),m[D].add(y),m[R].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let k=0,D=O.length;k<D;++k){const R=O[k],U=R.start,J=R.count;for(let W=U,et=U+J;W<et;W+=3)_(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const L=new K,w=new K,z=new K,H=new K;function B(k){z.fromBufferAttribute(l,k),H.copy(z);const D=d[k];L.copy(D),L.sub(z.multiplyScalar(z.dot(D))).normalize(),w.crossVectors(H,D);const U=w.dot(m[k])<0?-1:1;h.setXYZW(k,L.x,L.y,L.z,U)}for(let k=0,D=O.length;k<D;++k){const R=O[k],U=R.start,J=R.count;for(let W=U,et=U+J;W<et;W+=3)B(t.getX(W+0)),B(t.getX(W+1)),B(t.getX(W+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Tn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,g=new K,x=new K;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),T=t.getX(v+1),y=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),g.subVectors(h,c),x.subVectors(l,c),g.cross(x),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,c),x.subVectors(l,c),g.cross(x),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,v=new p.constructor(m.length*g);let S=0,E=0;for(let T=0,y=m.length;T<y;T++){d.isInterleavedBufferAttribute?S=m[T]*d.data.stride+d.offset:S=m[T]*g;for(let _=0;_<g;_++)v[E++]=p[S++]}return new Tn(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,x=p.length;g<x;g++){const v=p[g],S=t(v,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const S=p[x];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],x=c[p];for(let v=0,S=x.length;v<S;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H_=new ke,ps=new Ir,dc=new Xc,G_=new K,pc=new K,mc=new K,gc=new K,Sh=new K,_c=new K,V_=new K,vc=new K;class ci extends vn{constructor(t=new Ci,i=new nv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){_c.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],x=c[m];g!==0&&(Sh.fromBufferAttribute(x,t),h?_c.addScaledVector(Sh,g):_c.addScaledVector(Sh.sub(i),g))}i.add(_c)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),dc.copy(s.boundingSphere),dc.applyMatrix4(c),ps.copy(t.ray).recast(t.near),!(dc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(dc,G_)===null||ps.origin.distanceToSquared(G_)>(t.far-t.near)**2))&&(H_.copy(c).invert(),ps.copy(t.ray).applyMatrix4(H_),!(s.boundingBox!==null&&ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ps)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,T=v.length;E<T;E++){const y=v[E],_=h[y.materialIndex],O=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let w=O,z=L;w<z;w+=3){const H=d.getX(w),B=d.getX(w+1),k=d.getX(w+2);l=xc(this,_,t,s,p,g,x,H,B,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const O=d.getX(y),L=d.getX(y+1),w=d.getX(y+2);l=xc(this,h,t,s,p,g,x,O,L,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,T=v.length;E<T;E++){const y=v[E],_=h[y.materialIndex],O=Math.max(y.start,S.start),L=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let w=O,z=L;w<z;w+=3){const H=w,B=w+1,k=w+2;l=xc(this,_,t,s,p,g,x,H,B,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const O=y,L=y+1,w=y+2;l=xc(this,h,t,s,p,g,x,O,L,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function HS(r,t,i,s,l,c,h,d){let m;if(t.side===Gn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===qa,d),m===null)return null;vc.copy(d),vc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(vc);return p<i.near||p>i.far?null:{distance:p,point:vc.clone(),object:r}}function xc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,pc),r.getVertexPosition(m,mc),r.getVertexPosition(p,gc);const g=HS(r,t,i,s,pc,mc,gc,V_);if(g){const x=new K;gi.getBarycoord(V_,pc,mc,gc,x),l&&(g.uv=gi.getInterpolatedAttribute(l,d,m,p,x,new Wt)),c&&(g.uv1=gi.getInterpolatedAttribute(c,d,m,p,x,new Wt)),h&&(g.normal=gi.getInterpolatedAttribute(h,d,m,p,x,new K),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new K,materialIndex:0};gi.getNormal(pc,mc,gc,v.normal),g.face=v,g.barycoord=x}return g}class qo extends Ci{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new sa(p,3)),this.setAttribute("normal",new sa(g,3)),this.setAttribute("uv",new sa(x,2));function E(T,y,_,O,L,w,z,H,B,k,D){const R=w/B,U=z/k,J=w/2,W=z/2,et=H/2,ct=B+1,I=k+1;let Y=0,X=0;const mt=new K;for(let N=0;N<I;N++){const nt=N*U-W;for(let vt=0;vt<ct;vt++){const St=vt*R-J;mt[T]=St*O,mt[y]=nt*L,mt[_]=et,p.push(mt.x,mt.y,mt.z),mt[T]=0,mt[y]=0,mt[_]=H>0?1:-1,g.push(mt.x,mt.y,mt.z),x.push(vt/B),x.push(1-N/k),Y+=1}}for(let N=0;N<k;N++)for(let nt=0;nt<B;nt++){const vt=v+nt+ct*N,St=v+nt+ct*(N+1),$=v+(nt+1)+ct*(N+1),pt=v+(nt+1)+ct*N;m.push(vt,St,pt),m.push(St,$,pt),X+=6}d.addGroup(S,X,D),S+=X,v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Nn(r){const t={};for(let i=0;i<r.length;i++){const s=Pr(r[i]);for(const l in s)t[l]=s[l]}return t}function GS(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function sv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const rv={clone:Pr,merge:Nn};var VS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oa extends zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=GS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ov extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=ia}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new K,k_=new Wt,X_=new Wt;class li extends ov{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Sd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(Oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,i){return this.getViewBounds(t,k_,X_),i.subVectors(X_,k_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Oc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gr=-90,_r=1;class XS extends vn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(gr,_r,t,i);l.layers=this.layers,this.add(l);const c=new li(gr,_r,t,i);c.layers=this.layers,this.add(c);const h=new li(gr,_r,t,i);h.layers=this.layers,this.add(h);const d=new li(gr,_r,t,i);d.layers=this.layers,this.add(d);const m=new li(gr,_r,t,i);m.layers=this.layers,this.add(m);const p=new li(gr,_r,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===zc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(x,v,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class lv extends Vn{constructor(t,i,s,l,c,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Dr,super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class WS extends bs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new lv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ai}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qo(5,5,5),c=new oa({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Gn,blending:Xa});c.uniforms.tEquirect.value=i;const h=new ci(l,c),d=i.minFilter;return i.minFilter===Es&&(i.minFilter=Ai),new XS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Ho extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qS={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const y=i.getJointPose(T,s),_=this._getHandJoint(p,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(qS)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ho;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class YS extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Eh=new K,jS=new K,ZS=new se;class Ga{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Eh.subVectors(s,i).cross(jS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Eh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ZS.getNormalMatrix(t),l=this.coplanarPoint(Eh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Xc,yc=new K;class Id{constructor(t=new Ga,i=new Ga,s=new Ga,l=new Ga,c=new Ga,h=new Ga){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ia){const s=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],v=l[7],S=l[8],E=l[9],T=l[10],y=l[11],_=l[12],O=l[13],L=l[14],w=l[15];if(s[0].setComponents(m-c,v-p,y-S,w-_).normalize(),s[1].setComponents(m+c,v+p,y+S,w+_).normalize(),s[2].setComponents(m+h,v+g,y+E,w+O).normalize(),s[3].setComponents(m-h,v-g,y-E,w-O).normalize(),s[4].setComponents(m-d,v-x,y-T,w-L).normalize(),i===ia)s[5].setComponents(m+d,v+x,y+T,w+L).normalize();else if(i===zc)s[5].setComponents(d,x,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(yc.x=l.normal.x>0?t.max.x:t.min.x,yc.y=l.normal.y>0?t.max.y:t.min.y,yc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Md extends zr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fc=new K,Hc=new K,W_=new ke,Fo=new Ir,Sc=new Xc,Th=new K,q_=new K;class KS extends vn{constructor(t=new Ci,i=new Md){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Fc.fromBufferAttribute(i,l-1),Hc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Fc.distanceTo(Hc);t.setAttribute("lineDistance",new sa(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(l),Sc.radius+=c,t.ray.intersectsSphere(Sc)===!1)return;W_.copy(l).invert(),Fo.copy(t.ray).applyMatrix4(W_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const S=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let T=S,y=E-1;T<y;T+=p){const _=g.getX(T),O=g.getX(T+1),L=Mc(this,t,Fo,m,_,O,T);L&&i.push(L)}if(this.isLineLoop){const T=g.getX(E-1),y=g.getX(S),_=Mc(this,t,Fo,m,T,y,E-1);_&&i.push(_)}}else{const S=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let T=S,y=E-1;T<y;T+=p){const _=Mc(this,t,Fo,m,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=Mc(this,t,Fo,m,E-1,S,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Mc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(Fc.fromBufferAttribute(d,l),Hc.fromBufferAttribute(d,c),i.distanceSqToSegment(Fc,Hc,Th,q_)>s)return;Th.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Th);if(!(p<t.near||p>t.far))return{distance:p,point:q_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const Y_=new K,j_=new K;class cv extends KS{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Y_.fromBufferAttribute(i,l),j_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Y_.distanceTo(j_);t.setAttribute("lineDistance",new sa(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uv extends Vn{constructor(t,i,s,l,c,h,d,m,p,g=Ar){if(g!==Ar&&g!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Ar&&(s=Ts),s===void 0&&g===Nr&&(s=Ur),super(null,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:vi,this.minFilter=m!==void 0?m:vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Od(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Wc extends Ci{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,x=t/d,v=i/m,S=[],E=[],T=[],y=[];for(let _=0;_<g;_++){const O=_*v-h;for(let L=0;L<p;L++){const w=L*x-c;E.push(w,-O,0),T.push(0,0,1),y.push(L/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<d;O++){const L=O+p*_,w=O+p*(_+1),z=O+1+p*(_+1),H=O+1+p*_;S.push(L,w,H),S.push(w,z,H)}this.setIndex(S),this.setAttribute("position",new sa(E,3)),this.setAttribute("normal",new sa(T,3)),this.setAttribute("uv",new sa(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ha extends zr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q0,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class QS extends zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class JS extends zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Z_={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class $S{constructor(t,i,s){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,v=p.length;x<v;x+=2){const S=p[x],E=p[x+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null}}}const tM=new $S;class Mr{constructor(t){this.manager=t!==void 0?t:tM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Mr.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i={};class eM extends Error{constructor(t,i){super(t),this.response=i}}class Ed extends Mr{constructor(t){super(t)}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=Z_.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if($i[t]!==void 0){$i[t].push({onLoad:i,onProgress:s,onError:l});return}$i[t]=[],$i[t].push({onLoad:i,onProgress:s,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=$i[t],x=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=v?parseInt(v):0,E=S!==0;let T=0;const y=new ReadableStream({start(_){O();function O(){x.read().then(({done:L,value:w})=>{if(L)_.close();else{T+=w.byteLength;const z=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:S});for(let H=0,B=g.length;H<B;H++){const k=g[H];k.onProgress&&k.onProgress(z)}_.enqueue(w),O()}},L=>{_.error(L)})}}});return new Response(y)}else throw new eM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return p.json();default:if(d===void 0)return p.text();{const x=/charset="?([^;"\s]*)"?/i.exec(d),v=x&&x[1]?x[1].toLowerCase():void 0,S=new TextDecoder(v);return p.arrayBuffer().then(E=>S.decode(E))}}}).then(p=>{Z_.add(t,p);const g=$i[t];delete $i[t];for(let x=0,v=g.length;x<v;x++){const S=g[x];S.onLoad&&S.onLoad(p)}}).catch(p=>{const g=$i[t];if(g===void 0)throw this.manager.itemError(t),p;delete $i[t];for(let x=0,v=g.length;x<v;x++){const S=g[x];S.onError&&S.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class fv extends vn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class nM extends fv{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const bh=new ke,K_=new K,Q_=new K;class iM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Id,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;K_.setFromMatrixPosition(t.matrixWorld),i.position.copy(K_),Q_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Q_),i.updateMatrixWorld(),bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(bh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class hv extends ov{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class aM extends iM{constructor(){super(new hv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sM extends fv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new aM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rM extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const J_=new ke;class oM{constructor(t,i,s=0,l=1/0){this.ray=new Ir(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Pd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return J_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(J_),this}intersectObject(t,i=!0,s=[]){return Td(t,this,s,i),s.sort($_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Td(t[l],this,s,i);return s.sort($_),s}}function $_(r,t){return r.distance-t.distance}function Td(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Td(c[h],t,i,!0)}}class t0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lM extends Rs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function e0(r,t,i,s){const l=cM(s);switch(i){case X0:return r*t;case q0:return r*t;case Y0:return r*t*2;case j0:return r*t/l.components*l.byteLength;case Ld:return r*t/l.components*l.byteLength;case Z0:return r*t*2/l.components*l.byteLength;case Ud:return r*t*2/l.components*l.byteLength;case W0:return r*t*3/l.components*l.byteLength;case _i:return r*t*4/l.components*l.byteLength;case Nd:return r*t*4/l.components*l.byteLength;case wc:case Dc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Uc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kh:case Jh:return Math.max(r,16)*Math.max(t,8)/4;case Zh:case Qh:return Math.max(r,8)*Math.max(t,8)/2;case $h:case td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ed:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case id:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ad:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case sd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case rd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case od:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ld:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case cd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ud:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case hd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case dd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case pd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case md:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Nc:case gd:case _d:return Math.ceil(r/4)*Math.ceil(t/4)*16;case K0:case vd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case xd:case yd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cM(r){switch(r){case ra:case G0:return{byteLength:1,components:1};case Vo:case V0:case ko:return{byteLength:2,components:1};case wd:case Dd:return{byteLength:2,components:4};case Ts:case Cd:case na:return{byteLength:4,components:1};case k0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function uM(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const g=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,g);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],T=x[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,x[v]=T)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const T=x[S];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var fM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_M=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$E=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_T=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ST=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:fM,alphahash_pars_fragment:hM,alphamap_fragment:dM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:gM,aomap_fragment:_M,aomap_pars_fragment:vM,batching_pars_vertex:xM,batching_vertex:yM,begin_vertex:SM,beginnormal_vertex:MM,bsdfs:EM,iridescence_fragment:TM,bumpmap_pars_fragment:bM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:RM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:wM,color_fragment:DM,color_pars_fragment:LM,color_pars_vertex:UM,color_vertex:NM,common:OM,cube_uv_reflection_fragment:PM,defaultnormal_vertex:IM,displacementmap_pars_vertex:zM,displacementmap_vertex:BM,emissivemap_fragment:FM,emissivemap_pars_fragment:HM,colorspace_fragment:GM,colorspace_pars_fragment:VM,envmap_fragment:kM,envmap_common_pars_fragment:XM,envmap_pars_fragment:WM,envmap_pars_vertex:qM,envmap_physical_pars_fragment:iE,envmap_vertex:YM,fog_vertex:jM,fog_pars_vertex:ZM,fog_fragment:KM,fog_pars_fragment:QM,gradientmap_pars_fragment:JM,lightmap_pars_fragment:$M,lights_lambert_fragment:tE,lights_lambert_pars_fragment:eE,lights_pars_begin:nE,lights_toon_fragment:aE,lights_toon_pars_fragment:sE,lights_phong_fragment:rE,lights_phong_pars_fragment:oE,lights_physical_fragment:lE,lights_physical_pars_fragment:cE,lights_fragment_begin:uE,lights_fragment_maps:fE,lights_fragment_end:hE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:gE,map_fragment:_E,map_pars_fragment:vE,map_particle_fragment:xE,map_particle_pars_fragment:yE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:ME,morphinstance_vertex:EE,morphcolor_vertex:TE,morphnormal_vertex:bE,morphtarget_pars_vertex:AE,morphtarget_vertex:RE,normal_fragment_begin:CE,normal_fragment_maps:wE,normal_pars_fragment:DE,normal_pars_vertex:LE,normal_vertex:UE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:OE,clearcoat_normal_fragment_maps:PE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:zE,opaque_fragment:BE,packing:FE,premultiplied_alpha_fragment:HE,project_vertex:GE,dithering_fragment:VE,dithering_pars_fragment:kE,roughnessmap_fragment:XE,roughnessmap_pars_fragment:WE,shadowmap_pars_fragment:qE,shadowmap_pars_vertex:YE,shadowmap_vertex:jE,shadowmask_pars_fragment:ZE,skinbase_vertex:KE,skinning_pars_vertex:QE,skinning_vertex:JE,skinnormal_vertex:$E,specularmap_fragment:tT,specularmap_pars_fragment:eT,tonemapping_fragment:nT,tonemapping_pars_fragment:iT,transmission_fragment:aT,transmission_pars_fragment:sT,uv_pars_fragment:rT,uv_pars_vertex:oT,uv_vertex:lT,worldpos_vertex:cT,background_vert:uT,background_frag:fT,backgroundCube_vert:hT,backgroundCube_frag:dT,cube_vert:pT,cube_frag:mT,depth_vert:gT,depth_frag:_T,distanceRGBA_vert:vT,distanceRGBA_frag:xT,equirect_vert:yT,equirect_frag:ST,linedashed_vert:MT,linedashed_frag:ET,meshbasic_vert:TT,meshbasic_frag:bT,meshlambert_vert:AT,meshlambert_frag:RT,meshmatcap_vert:CT,meshmatcap_frag:wT,meshnormal_vert:DT,meshnormal_frag:LT,meshphong_vert:UT,meshphong_frag:NT,meshphysical_vert:OT,meshphysical_frag:PT,meshtoon_vert:IT,meshtoon_frag:zT,points_vert:BT,points_frag:FT,shadow_vert:HT,shadow_frag:GT,sprite_vert:VT,sprite_frag:kT},wt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},bi={basic:{uniforms:Nn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Nn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ge(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Nn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Nn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Nn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new ge(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Nn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Nn([wt.points,wt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Nn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Nn([wt.common,wt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Nn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Nn([wt.sprite,wt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Nn([wt.common,wt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Nn([wt.lights,wt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};bi.physical={uniforms:Nn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Ec={r:0,b:0,g:0},gs=new Ri,XT=new ke;function WT(r,t,i,s,l,c,h){const d=new ge(0);let m=c===!0?0:1,p,g,x=null,v=0,S=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:t).get(w)),w}function T(L){let w=!1;const z=E(L);z===null?_(d,m):z&&z.isColor&&(_(z,1),w=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,w){const z=E(w);z&&(z.isCubeTexture||z.mapping===kc)?(g===void 0&&(g=new ci(new qo(1,1,1),new oa({name:"BackgroundCubeMaterial",uniforms:Pr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,B,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gs.copy(w.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(XT.makeRotationFromEuler(gs)),g.material.toneMapped=be.getTransfer(z.colorSpace)!==Ie,(x!==z||v!==z.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,x=z,v=z.version,S=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new ci(new Wc(2,2),new oa({name:"BackgroundMaterial",uniforms:Pr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=be.getTransfer(z.colorSpace)!==Ie,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(x!==z||v!==z.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,x=z,v=z.version,S=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,w){L.getRGB(Ec,sv(r)),s.buffers.color.setClear(Ec.r,Ec.g,Ec.b,w,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,w=1){d.set(L),m=w,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:T,addToRenderList:y,dispose:O}}function qT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,h=!1;function d(R,U,J,W,et){let ct=!1;const I=x(W,J,U);c!==I&&(c=I,p(c.object)),ct=S(R,W,J,et),ct&&E(R,W,J,et),et!==null&&t.update(et,r.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,w(R,U,J,W),et!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function m(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function g(R){return r.deleteVertexArray(R)}function x(R,U,J){const W=J.wireframe===!0;let et=s[R.id];et===void 0&&(et={},s[R.id]=et);let ct=et[U.id];ct===void 0&&(ct={},et[U.id]=ct);let I=ct[W];return I===void 0&&(I=v(m()),ct[W]=I),I}function v(R){const U=[],J=[],W=[];for(let et=0;et<i;et++)U[et]=0,J[et]=0,W[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:J,attributeDivisors:W,object:R,attributes:{},index:null}}function S(R,U,J,W){const et=c.attributes,ct=U.attributes;let I=0;const Y=J.getAttributes();for(const X in Y)if(Y[X].location>=0){const N=et[X];let nt=ct[X];if(nt===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor)),N===void 0||N.attribute!==nt||nt&&N.data!==nt.data)return!0;I++}return c.attributesNum!==I||c.index!==W}function E(R,U,J,W){const et={},ct=U.attributes;let I=0;const Y=J.getAttributes();for(const X in Y)if(Y[X].location>=0){let N=ct[X];N===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(N=R.instanceColor));const nt={};nt.attribute=N,N&&N.data&&(nt.data=N.data),et[X]=nt,I++}c.attributes=et,c.attributesNum=I,c.index=W}function T(){const R=c.newAttributes;for(let U=0,J=R.length;U<J;U++)R[U]=0}function y(R){_(R,0)}function _(R,U){const J=c.newAttributes,W=c.enabledAttributes,et=c.attributeDivisors;J[R]=1,W[R]===0&&(r.enableVertexAttribArray(R),W[R]=1),et[R]!==U&&(r.vertexAttribDivisor(R,U),et[R]=U)}function O(){const R=c.newAttributes,U=c.enabledAttributes;for(let J=0,W=U.length;J<W;J++)U[J]!==R[J]&&(r.disableVertexAttribArray(J),U[J]=0)}function L(R,U,J,W,et,ct,I){I===!0?r.vertexAttribIPointer(R,U,J,et,ct):r.vertexAttribPointer(R,U,J,W,et,ct)}function w(R,U,J,W){T();const et=W.attributes,ct=J.getAttributes(),I=U.defaultAttributeValues;for(const Y in ct){const X=ct[Y];if(X.location>=0){let mt=et[Y];if(mt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor)),mt!==void 0){const N=mt.normalized,nt=mt.itemSize,vt=t.get(mt);if(vt===void 0)continue;const St=vt.buffer,$=vt.type,pt=vt.bytesPerElement,yt=$===r.INT||$===r.UNSIGNED_INT||mt.gpuType===Cd;if(mt.isInterleavedBufferAttribute){const bt=mt.data,Dt=bt.stride,ie=mt.offset;if(bt.isInstancedInterleavedBuffer){for(let qt=0;qt<X.locationSize;qt++)_(X.location+qt,bt.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let qt=0;qt<X.locationSize;qt++)y(X.location+qt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let qt=0;qt<X.locationSize;qt++)L(X.location+qt,nt/X.locationSize,$,N,Dt*pt,(ie+nt/X.locationSize*qt)*pt,yt)}else{if(mt.isInstancedBufferAttribute){for(let bt=0;bt<X.locationSize;bt++)_(X.location+bt,mt.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let bt=0;bt<X.locationSize;bt++)y(X.location+bt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let bt=0;bt<X.locationSize;bt++)L(X.location+bt,nt/X.locationSize,$,N,nt*pt,nt/X.locationSize*bt*pt,yt)}}else if(I!==void 0){const N=I[Y];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(X.location,N);break;case 3:r.vertexAttrib3fv(X.location,N);break;case 4:r.vertexAttrib4fv(X.location,N);break;default:r.vertexAttrib1fv(X.location,N)}}}}O()}function z(){k();for(const R in s){const U=s[R];for(const J in U){const W=U[J];for(const et in W)g(W[et].object),delete W[et];delete U[J]}delete s[R]}}function H(R){if(s[R.id]===void 0)return;const U=s[R.id];for(const J in U){const W=U[J];for(const et in W)g(W[et].object),delete W[et];delete U[J]}delete s[R.id]}function B(R){for(const U in s){const J=s[U];if(J[R.id]===void 0)continue;const W=J[R.id];for(const et in W)g(W[et].object),delete W[et];delete J[R.id]}}function k(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:D,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:y,disableUnusedAttributes:O}}function YT(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,x){x!==0&&(r.drawArraysInstanced(s,p,g,x),i.update(g,s,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,x);let S=0;for(let E=0;E<x;E++)S+=g[E];i.update(S,s,1)}function m(p,g,x,v){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,x);let E=0;for(let T=0;T<x;T++)E+=g[T]*v[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function jT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==_i&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const k=B===ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ra&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==na&&!k)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:z,maxSamples:H}}function ZT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ga,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||s!==0||l;return l=v,s=x.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,_=r.get(x);if(!l||E===null||E.length===0||c&&!y)c?g(null):p();else{const O=c?0:s,L=O*4;let w=_.clippingState||null;m.value=w,w=g(E,v,L,S);for(let z=0;z!==L;++z)w[z]=i[z];_.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(x,v,S,E){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=m.value,E!==!0||y===null){const _=S+T*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,w=S;L!==T;++L,w+=4)h.copy(x[L]).applyMatrix4(O,d),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function KT(r){let t=new WeakMap;function i(h,d){return d===Wh?h.mapping=Dr:d===qh&&(h.mapping=Lr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Wh||d===qh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new WS(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Er=4,n0=[.125,.215,.35,.446,.526,.582],Ss=20,Ah=new hv,i0=new ge;let Rh=null,Ch=0,wh=0,Dh=!1;const xs=(1+Math.sqrt(5))/2,vr=1/xs,a0=[new K(-xs,vr,0),new K(xs,vr,0),new K(-vr,0,xs),new K(vr,0,xs),new K(0,xs,-vr),new K(0,xs,vr),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],QT=new K;class s0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=QT}=c;Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rh,Ch,wh),this._renderer.xr.enabled=Dh,t.scissorTest=!1,Tc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Dr||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:ko,format:_i,colorSpace:Or,depthBuffer:!1},l=r0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JT(c)),this._blurMaterial=$T(c,t,i)}return l}_compileMaterial(t){const i=new ci(this._lodPlanes[0],t);this._renderer.compile(i,Ah)}_sceneToCubeUV(t,i,s,l,c){const m=new li(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,S=x.toneMapping;x.getClearColor(i0),x.toneMapping=Wa,x.autoClear=!1;const E=new nv({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),T=new ci(new qo,E);let y=!1;const _=t.background;_?_.isColor&&(E.color.copy(_),t.background=null,y=!0):(E.color.copy(i0),y=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):L===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const w=this._cubeSize;Tc(l,L*w,O>2?w:0,w,w),x.setRenderTarget(l),y&&x.render(T,m),x.render(t,m)}T.geometry.dispose(),T.material.dispose(),x.toneMapping=S,x.autoClear=v,t.background=_}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Dr||t.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=l0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new ci(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Tc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ah)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=a0[(l-c-1)%a0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new ci(this._lodPlanes[l],p),v=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ss-1),T=c/E,y=isFinite(c)?1+Math.floor(g*T):Ss;y>Ss&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ss}`);const _=[];let O=0;for(let B=0;B<Ss;++B){const k=B/T,D=Math.exp(-k*k/2);_.push(D),B===0?O+=D:B<y&&(O+=2*D)}for(let B=0;B<_.length;B++)_[B]=_[B]/O;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-s;const w=this._sizeLods[l],z=3*w*(l>L-Er?l-L+Er:0),H=4*(this._cubeSize-w);Tc(i,z,H,3*w,2*w),m.setRenderTarget(i),m.render(x,Ah)}}function JT(r){const t=[],i=[],s=[];let l=r;const c=r-Er+1+n0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Er?m=n0[h-r+Er-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,E=6,T=3,y=2,_=1,O=new Float32Array(T*E*S),L=new Float32Array(y*E*S),w=new Float32Array(_*E*S);for(let H=0;H<S;H++){const B=H%3*2/3-1,k=H>2?0:-1,D=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];O.set(D,T*E*H),L.set(v,y*E*H);const R=[H,H,H,H,H,H];w.set(R,_*E*H)}const z=new Ci;z.setAttribute("position",new Tn(O,T)),z.setAttribute("uv",new Tn(L,y)),z.setAttribute("faceIndex",new Tn(w,_)),t.push(z),l>Er&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function r0(r,t,i){const s=new bs(r,t,i);return s.texture.mapping=kc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Tc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function $T(r,t,i){const s=new Float32Array(Ss),l=new K(0,1,0);return new oa({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function o0(){return new oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function l0(){return new oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Wh||m===qh,g=m===Dr||m===Lr;if(p||g){let x=t.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new s0(r)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new s0(r)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function eb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&vs("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function nb(r,t,i,s){const l={},c=new WeakMap;function h(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete l[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const S in v)t.update(v[S],r.ARRAY_BUFFER)}function p(x){const v=[],S=x.index,E=x.attributes.position;let T=0;if(S!==null){const O=S.array;T=S.version;for(let L=0,w=O.length;L<w;L+=3){const z=O[L+0],H=O[L+1],B=O[L+2];v.push(z,H,H,B,B,z)}}else if(E!==void 0){const O=E.array;T=E.version;for(let L=0,w=O.length/3-1;L<w;L+=3){const z=L+0,H=L+1,B=L+2;v.push(z,H,H,B,B,z)}}else return;const y=new($0(v)?av:iv)(v,1);y.version=T;const _=c.get(x);_&&t.remove(_),c.set(x,y)}function g(x){const v=c.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function ib(r,t,i){let s;function l(v){s=v}let c,h;function d(v){c=v.type,h=v.bytesPerElement}function m(v,S){r.drawElements(s,S,c,v*h),i.update(S,s,1)}function p(v,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,v*h,E),i.update(S,s,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,v,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];i.update(y,s,1)}function x(v,S,E,T){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)p(v[_]/h,S[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,c,v,0,T,0,E);let _=0;for(let O=0;O<E;O++)_+=S[O]*T[O];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function ab(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function sb(r,t,i){const s=new WeakMap,l=new Ke;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=s.get(d);if(v===void 0||v.count!==x){let R=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var S=R;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),T===!0&&(w=2),y===!0&&(w=3);let z=d.attributes.position.count*w,H=1;z>t.maxTextureSize&&(H=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const B=new Float32Array(z*H*4*x),k=new tv(B,z,H,x);k.type=na,k.needsUpdate=!0;const D=w*4;for(let U=0;U<x;U++){const J=_[U],W=O[U],et=L[U],ct=z*H*4*U;for(let I=0;I<J.count;I++){const Y=I*D;E===!0&&(l.fromBufferAttribute(J,I),B[ct+Y+0]=l.x,B[ct+Y+1]=l.y,B[ct+Y+2]=l.z,B[ct+Y+3]=0),T===!0&&(l.fromBufferAttribute(W,I),B[ct+Y+4]=l.x,B[ct+Y+5]=l.y,B[ct+Y+6]=l.z,B[ct+Y+7]=0),y===!0&&(l.fromBufferAttribute(et,I),B[ct+Y+8]=l.x,B[ct+Y+9]=l.y,B[ct+Y+10]=l.z,B[ct+Y+11]=et.itemSize===4?l.w:1)}}v={count:x,texture:k,size:new Wt(z,H)},s.set(d,v),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function rb(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const pv=new Vn,c0=new uv(1,1),mv=new tv,gv=new wS,_v=new lv,u0=[],f0=[],h0=new Float32Array(16),d0=new Float32Array(9),p0=new Float32Array(4);function Br(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=u0[l];if(c===void 0&&(c=new Float32Array(l),u0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function un(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function fn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function qc(r,t){let i=f0[t];i===void 0&&(i=new Int32Array(t),f0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function ob(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function lb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2fv(this.addr,t),fn(i,t)}}function cb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(un(i,t))return;r.uniform3fv(this.addr,t),fn(i,t)}}function ub(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4fv(this.addr,t),fn(i,t)}}function fb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;p0.set(s),r.uniformMatrix2fv(this.addr,!1,p0),fn(i,s)}}function hb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;d0.set(s),r.uniformMatrix3fv(this.addr,!1,d0),fn(i,s)}}function db(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;h0.set(s),r.uniformMatrix4fv(this.addr,!1,h0),fn(i,s)}}function pb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function mb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2iv(this.addr,t),fn(i,t)}}function gb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;r.uniform3iv(this.addr,t),fn(i,t)}}function _b(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4iv(this.addr,t),fn(i,t)}}function vb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function xb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2uiv(this.addr,t),fn(i,t)}}function yb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;r.uniform3uiv(this.addr,t),fn(i,t)}}function Sb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4uiv(this.addr,t),fn(i,t)}}function Mb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(c0.compareFunction=J0,c=c0):c=pv,i.setTexture2D(t||c,l)}function Eb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||gv,l)}function Tb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||_v,l)}function bb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||mv,l)}function Ab(r){switch(r){case 5126:return ob;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return fb;case 35675:return hb;case 35676:return db;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return _b;case 5125:return vb;case 36294:return xb;case 36295:return yb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return bb}}function Rb(r,t){r.uniform1fv(this.addr,t)}function Cb(r,t){const i=Br(t,this.size,2);r.uniform2fv(this.addr,i)}function wb(r,t){const i=Br(t,this.size,3);r.uniform3fv(this.addr,i)}function Db(r,t){const i=Br(t,this.size,4);r.uniform4fv(this.addr,i)}function Lb(r,t){const i=Br(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Ub(r,t){const i=Br(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Nb(r,t){const i=Br(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Ob(r,t){r.uniform1iv(this.addr,t)}function Pb(r,t){r.uniform2iv(this.addr,t)}function Ib(r,t){r.uniform3iv(this.addr,t)}function zb(r,t){r.uniform4iv(this.addr,t)}function Bb(r,t){r.uniform1uiv(this.addr,t)}function Fb(r,t){r.uniform2uiv(this.addr,t)}function Hb(r,t){r.uniform3uiv(this.addr,t)}function Gb(r,t){r.uniform4uiv(this.addr,t)}function Vb(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);un(s,c)||(r.uniform1iv(this.addr,c),fn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||pv,c[h])}function kb(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);un(s,c)||(r.uniform1iv(this.addr,c),fn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||gv,c[h])}function Xb(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);un(s,c)||(r.uniform1iv(this.addr,c),fn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||_v,c[h])}function Wb(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);un(s,c)||(r.uniform1iv(this.addr,c),fn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||mv,c[h])}function qb(r){switch(r){case 5126:return Rb;case 35664:return Cb;case 35665:return wb;case 35666:return Db;case 35674:return Lb;case 35675:return Ub;case 35676:return Nb;case 5124:case 35670:return Ob;case 35667:case 35671:return Pb;case 35668:case 35672:return Ib;case 35669:case 35673:return zb;case 5125:return Bb;case 36294:return Fb;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return Wb}}class Yb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Ab(i.type)}}class jb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qb(i.type)}}class Zb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function m0(r,t){r.seq.push(t),r.map[t.id]=t}function Kb(r,t,i){const s=r.name,l=s.length;for(Lh.lastIndex=0;;){const c=Lh.exec(s),h=Lh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){m0(i,p===void 0?new Yb(d,r,t):new jb(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new Zb(d),m0(i,x)),i=x}}}class Pc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);Kb(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function g0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const Qb=37297;let Jb=0;function $b(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const _0=new se;function tA(r){be._getMatrix(_0,be.workingColorSpace,r);const t=`mat3( ${_0.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(r)){case Ic:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function v0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+$b(r.getShaderSource(t),h)}else return l}function eA(r,t){const i=tA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function nA(r,t){let i;switch(t){case tS:i="Linear";break;case eS:i="Reinhard";break;case nS:i="Cineon";break;case iS:i="ACESFilmic";break;case sS:i="AgX";break;case rS:i="Neutral";break;case aS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new K;function iA(){be.getLuminanceCoefficients(bc);const r=bc.x.toFixed(4),t=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function sA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function rA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Go(r){return r!==""}function x0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function y0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(r){return r.replace(oA,cA)}const lA=new Map;function cA(r,t){let i=oe[t];if(i===void 0){const s=lA.get(t);if(s!==void 0)i=oe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return bd(i)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S0(r){return r.replace(uA,fA)}function fA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function M0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===B0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ny?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function dA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Dr:case Lr:t="ENVMAP_TYPE_CUBE";break;case kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function mA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case F0:t="ENVMAP_BLENDING_MULTIPLY";break;case Jy:t="ENVMAP_BLENDING_MIX";break;case $y:t="ENVMAP_BLENDING_ADD";break}return t}function gA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function _A(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=hA(i),p=dA(i),g=pA(i),x=mA(i),v=gA(i),S=aA(i),E=sA(c),T=l.createProgram();let y,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Go).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Go).join(`
`),_.length>0&&(_+=`
`)):(y=[M0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),_=[M0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?oe.tonemapping_pars_fragment:"",i.toneMapping!==Wa?nA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,eA("linearToOutputTexel",i.outputColorSpace),iA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),h=bd(h),h=x0(h,i),h=y0(h,i),d=bd(d),d=x0(d,i),d=y0(d,i),h=S0(h),d=S0(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===R_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=O+y+h,w=O+_+d,z=g0(l,l.VERTEX_SHADER,L),H=g0(l,l.FRAGMENT_SHADER,w);l.attachShader(T,z),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(U){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(T).trim(),W=l.getShaderInfoLog(z).trim(),et=l.getShaderInfoLog(H).trim();let ct=!0,I=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ct=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,z,H);else{const Y=v0(l,z,"vertex"),X=v0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+J+`
`+Y+`
`+X)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(W===""||et==="")&&(I=!1);I&&(U.diagnostics={runnable:ct,programLog:J,vertexShader:{log:W,prefix:y},fragmentShader:{log:et,prefix:_}})}l.deleteShader(z),l.deleteShader(H),k=new Pc(l,T),D=rA(l,T)}let k;this.getUniforms=function(){return k===void 0&&B(this),k};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(T,Qb)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Jb++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=H,this}let vA=0;class xA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new yA(t),i.set(t,s)),s}}class yA{constructor(t){this.id=vA++,this.code=t,this.usedTimes=0}}function SA(r,t,i,s,l,c,h){const d=new Pd,m=new xA,p=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,R,U,J,W){const et=J.fog,ct=W.geometry,I=D.isMeshStandardMaterial?J.environment:null,Y=(D.isMeshStandardMaterial?i:t).get(D.envMap||I),X=Y&&Y.mapping===kc?Y.image.height:null,mt=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const N=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,nt=N!==void 0?N.length:0;let vt=0;ct.morphAttributes.position!==void 0&&(vt=1),ct.morphAttributes.normal!==void 0&&(vt=2),ct.morphAttributes.color!==void 0&&(vt=3);let St,$,pt,yt;if(mt){const Me=bi[mt];St=Me.vertexShader,$=Me.fragmentShader}else St=D.vertexShader,$=D.fragmentShader,m.update(D),pt=m.getVertexShaderID(D),yt=m.getFragmentShaderID(D);const bt=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),ie=W.isInstancedMesh===!0,qt=W.isBatchedMesh===!0,Le=!!D.map,Ce=!!D.matcap,re=!!Y,G=!!D.aoMap,bn=!!D.lightMap,ue=!!D.bumpMap,te=!!D.normalMap,Bt=!!D.displacementMap,Ae=!!D.emissiveMap,Ft=!!D.metalnessMap,P=!!D.roughnessMap,A=D.anisotropy>0,at=D.clearcoat>0,xt=D.dispersion>0,Mt=D.iridescence>0,ht=D.sheen>0,It=D.transmission>0,At=A&&!!D.anisotropyMap,Rt=at&&!!D.clearcoatMap,_e=at&&!!D.clearcoatNormalMap,Tt=at&&!!D.clearcoatRoughnessMap,Ht=Mt&&!!D.iridescenceMap,Yt=Mt&&!!D.iridescenceThicknessMap,Kt=ht&&!!D.sheenColorMap,Ot=ht&&!!D.sheenRoughnessMap,le=!!D.specularMap,ee=!!D.specularColorMap,Ue=!!D.specularIntensityMap,q=It&&!!D.transmissionMap,Lt=It&&!!D.thicknessMap,ut=!!D.gradientMap,gt=!!D.alphaMap,Pt=D.alphaTest>0,Nt=!!D.alphaHash,ne=!!D.extensions;let He=Wa;D.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(He=r.toneMapping);const $e={shaderID:mt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:$,defines:D.defines,customVertexShaderID:pt,customFragmentShaderID:yt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:qt,batchingColor:qt&&W._colorsTexture!==null,instancing:ie,instancingColor:ie&&W.instanceColor!==null,instancingMorph:ie&&W.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Or,alphaToCoverage:!!D.alphaToCoverage,map:Le,matcap:Ce,envMap:re,envMapMode:re&&Y.mapping,envMapCubeUVHeight:X,aoMap:G,lightMap:bn,bumpMap:ue,normalMap:te,displacementMap:v&&Bt,emissiveMap:Ae,normalMapObjectSpace:te&&D.normalMapType===uS,normalMapTangentSpace:te&&D.normalMapType===Q0,metalnessMap:Ft,roughnessMap:P,anisotropy:A,anisotropyMap:At,clearcoat:at,clearcoatMap:Rt,clearcoatNormalMap:_e,clearcoatRoughnessMap:Tt,dispersion:xt,iridescence:Mt,iridescenceMap:Ht,iridescenceThicknessMap:Yt,sheen:ht,sheenColorMap:Kt,sheenRoughnessMap:Ot,specularMap:le,specularColorMap:ee,specularIntensityMap:Ue,transmission:It,transmissionMap:q,thicknessMap:Lt,gradientMap:ut,opaque:D.transparent===!1&&D.blending===br&&D.alphaToCoverage===!1,alphaMap:gt,alphaTest:Pt,alphaHash:Nt,combine:D.combine,mapUv:Le&&T(D.map.channel),aoMapUv:G&&T(D.aoMap.channel),lightMapUv:bn&&T(D.lightMap.channel),bumpMapUv:ue&&T(D.bumpMap.channel),normalMapUv:te&&T(D.normalMap.channel),displacementMapUv:Bt&&T(D.displacementMap.channel),emissiveMapUv:Ae&&T(D.emissiveMap.channel),metalnessMapUv:Ft&&T(D.metalnessMap.channel),roughnessMapUv:P&&T(D.roughnessMap.channel),anisotropyMapUv:At&&T(D.anisotropyMap.channel),clearcoatMapUv:Rt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:_e&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(D.sheenRoughnessMap.channel),specularMapUv:le&&T(D.specularMap.channel),specularColorMapUv:ee&&T(D.specularColorMap.channel),specularIntensityMapUv:Ue&&T(D.specularIntensityMap.channel),transmissionMapUv:q&&T(D.transmissionMap.channel),thicknessMapUv:Lt&&T(D.thicknessMap.channel),alphaMapUv:gt&&T(D.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(te||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ct.attributes.uv&&(Le||gt),fog:!!et,useFog:D.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Dt,skinning:W.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:Le&&D.map.isVideoTexture===!0&&be.getTransfer(D.map.colorSpace)===Ie,decodeVideoTextureEmissive:Ae&&D.emissiveMap.isVideoTexture===!0&&be.getTransfer(D.emissiveMap.colorSpace)===Ie,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ea,flipSided:D.side===Gn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ne&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&D.extensions.multiDraw===!0||qt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return $e.vertexUv1s=p.has(1),$e.vertexUv2s=p.has(2),$e.vertexUv3s=p.has(3),p.clear(),$e}function _(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const U in D.defines)R.push(U),R.push(D.defines[U]);return D.isRawShaderMaterial===!1&&(O(R,D),L(R,D),R.push(r.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function O(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function L(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const R=E[D.type];let U;if(R){const J=bi[R];U=rv.clone(J.uniforms)}else U=D.uniforms;return U}function z(D,R){let U;for(let J=0,W=g.length;J<W;J++){const et=g[J];if(et.cacheKey===R){U=et,++U.usedTimes;break}}return U===void 0&&(U=new _A(r,R,D,c),g.push(U)),U}function H(D){if(--D.usedTimes===0){const R=g.indexOf(D);g[R]=g[g.length-1],g.pop(),D.destroy()}}function B(D){m.remove(D)}function k(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:w,acquireProgram:z,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:k}}function MA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function EA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function E0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function T0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(x,v,S,E,T,y){let _=r[t];return _===void 0?(_={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:T,group:y},r[t]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=S,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=T,_.group=y),t++,_}function d(x,v,S,E,T,y){const _=h(x,v,S,E,T,y);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(x,v,S,E,T,y){const _=h(x,v,S,E,T,y);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||EA),s.length>1&&s.sort(v||E0),l.length>1&&l.sort(v||E0)}function g(){for(let x=t,v=r.length;x<v;x++){const S=r[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function TA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new T0,r.set(s,[h])):l>=c.length?(h=new T0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function bA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new ge};break;case"SpotLight":i={position:new K,direction:new K,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function AA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let RA=0;function CA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function wA(r){const t=new bA,i=AA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,c=new ke,h=new ke;function d(p){let g=0,x=0,v=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,E=0,T=0,y=0,_=0,O=0,L=0,w=0,z=0,H=0,B=0;p.sort(CA);for(let D=0,R=p.length;D<R;D++){const U=p[D],J=U.color,W=U.intensity,et=U.distance,ct=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)g+=J.r*W,x+=J.g*W,v+=J.b*W;else if(U.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(U.sh.coefficients[I],W);B++}else if(U.isDirectionalLight){const I=t.get(U);if(I.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Y=U.shadow,X=i.get(U);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,s.directionalShadow[S]=X,s.directionalShadowMap[S]=ct,s.directionalShadowMatrix[S]=U.shadow.matrix,O++}s.directional[S]=I,S++}else if(U.isSpotLight){const I=t.get(U);I.position.setFromMatrixPosition(U.matrixWorld),I.color.copy(J).multiplyScalar(W),I.distance=et,I.coneCos=Math.cos(U.angle),I.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),I.decay=U.decay,s.spot[T]=I;const Y=U.shadow;if(U.map&&(s.spotLightMap[z]=U.map,z++,Y.updateMatrices(U),U.castShadow&&H++),s.spotLightMatrix[T]=Y.matrix,U.castShadow){const X=i.get(U);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,s.spotShadow[T]=X,s.spotShadowMap[T]=ct,w++}T++}else if(U.isRectAreaLight){const I=t.get(U);I.color.copy(J).multiplyScalar(W),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),s.rectArea[y]=I,y++}else if(U.isPointLight){const I=t.get(U);if(I.color.copy(U.color).multiplyScalar(U.intensity),I.distance=U.distance,I.decay=U.decay,U.castShadow){const Y=U.shadow,X=i.get(U);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,s.pointShadow[E]=X,s.pointShadowMap[E]=ct,s.pointShadowMatrix[E]=U.shadow.matrix,L++}s.point[E]=I,E++}else if(U.isHemisphereLight){const I=t.get(U);I.skyColor.copy(U.color).multiplyScalar(W),I.groundColor.copy(U.groundColor).multiplyScalar(W),s.hemi[_]=I,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=wt.LTC_FLOAT_1,s.rectAreaLTC2=wt.LTC_FLOAT_2):(s.rectAreaLTC1=wt.LTC_HALF_1,s.rectAreaLTC2=wt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=v;const k=s.hash;(k.directionalLength!==S||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==y||k.hemiLength!==_||k.numDirectionalShadows!==O||k.numPointShadows!==L||k.numSpotShadows!==w||k.numSpotMaps!==z||k.numLightProbes!==B)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=y,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+z-H,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=B,k.directionalLength=S,k.pointLength=E,k.spotLength=T,k.rectAreaLength=y,k.hemiLength=_,k.numDirectionalShadows=O,k.numPointShadows=L,k.numSpotShadows=w,k.numSpotMaps=z,k.numLightProbes=B,s.version=RA++)}function m(p,g){let x=0,v=0,S=0,E=0,T=0;const y=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const L=p[_];if(L.isDirectionalLight){const w=s.directional[x];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),x++}else if(L.isSpotLight){const w=s.spot[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),h.identity(),c.copy(L.matrixWorld),c.premultiply(y),h.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const w=s.point[v];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const w=s.hemi[T];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(y),T++}}}return{setup:d,setupView:m,state:s}}function b0(r){const t=new wA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function DA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new b0(r),t.set(l,[d])):c>=h.length?(d=new b0(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NA(r,t,i){let s=new Id;const l=new Wt,c=new Wt,h=new Ke,d=new QS({depthPacking:cS}),m=new JS,p={},g=i.maxTextureSize,x={[qa]:Gn,[Gn]:qa,[ea]:ea},v=new oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:LA,fragmentShader:UA}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ci;E.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ci(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B0;let _=this.type;this.render=function(H,B,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const D=r.getRenderTarget(),R=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Xa),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const W=_!==ta&&this.type===ta,et=_===ta&&this.type!==ta;for(let ct=0,I=H.length;ct<I;ct++){const Y=H[ct],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const mt=X.getFrameExtents();if(l.multiply(mt),c.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/mt.x),l.x=c.x*mt.x,X.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/mt.y),l.y=c.y*mt.y,X.mapSize.y=c.y)),X.map===null||W===!0||et===!0){const nt=this.type!==ta?{minFilter:vi,magFilter:vi}:{};X.map!==null&&X.map.dispose(),X.map=new bs(l.x,l.y,nt),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const N=X.getViewportCount();for(let nt=0;nt<N;nt++){const vt=X.getViewport(nt);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),J.viewport(h),X.updateMatrices(Y,nt),s=X.getFrustum(),w(B,k,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===ta&&O(X,k),X.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(D,R,U)};function O(H,B){const k=t.update(T);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new bs(l.x,l.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(B,null,k,v,T,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(B,null,k,S,T,null)}function L(H,B,k,D){let R=null;const U=k.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(U!==void 0)R=U;else if(R=k.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const J=R.uuid,W=B.uuid;let et=p[J];et===void 0&&(et={},p[J]=et);let ct=et[W];ct===void 0&&(ct=R.clone(),et[W]=ct,B.addEventListener("dispose",z)),R=ct}if(R.visible=B.visible,R.wireframe=B.wireframe,D===ta?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:x[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=r.properties.get(R);J.light=k}return R}function w(H,B,k,D,R){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===ta)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,H.matrixWorld);const W=t.update(H),et=H.material;if(Array.isArray(et)){const ct=W.groups;for(let I=0,Y=ct.length;I<Y;I++){const X=ct[I],mt=et[X.materialIndex];if(mt&&mt.visible){const N=L(H,mt,D,R);H.onBeforeShadow(r,H,B,k,W,N,X),r.renderBufferDirect(k,null,W,N,H,X),H.onAfterShadow(r,H,B,k,W,N,X)}}}else if(et.visible){const ct=L(H,et,D,R);H.onBeforeShadow(r,H,B,k,W,ct,null),r.renderBufferDirect(k,null,W,ct,H,null),H.onAfterShadow(r,H,B,k,W,ct,null)}}const J=H.children;for(let W=0,et=J.length;W<et;W++)w(J[W],B,k,D,R)}function z(H){H.target.removeEventListener("dispose",z);for(const k in p){const D=p[k],R=H.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const OA={[Bh]:Fh,[Hh]:kh,[Gh]:Xh,[wr]:Vh,[Fh]:Bh,[kh]:Hh,[Xh]:Gh,[Vh]:wr};function PA(r,t){function i(){let q=!1;const Lt=new Ke;let ut=null;const gt=new Ke(0,0,0,0);return{setMask:function(Pt){ut!==Pt&&!q&&(r.colorMask(Pt,Pt,Pt,Pt),ut=Pt)},setLocked:function(Pt){q=Pt},setClear:function(Pt,Nt,ne,He,$e){$e===!0&&(Pt*=He,Nt*=He,ne*=He),Lt.set(Pt,Nt,ne,He),gt.equals(Lt)===!1&&(r.clearColor(Pt,Nt,ne,He),gt.copy(Lt))},reset:function(){q=!1,ut=null,gt.set(-1,0,0,0)}}}function s(){let q=!1,Lt=!1,ut=null,gt=null,Pt=null;return{setReversed:function(Nt){if(Lt!==Nt){const ne=t.get("EXT_clip_control");Lt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const He=Pt;Pt=null,this.setClear(He)}Lt=Nt},getReversed:function(){return Lt},setTest:function(Nt){Nt?bt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(Nt){ut!==Nt&&!q&&(r.depthMask(Nt),ut=Nt)},setFunc:function(Nt){if(Lt&&(Nt=OA[Nt]),gt!==Nt){switch(Nt){case Bh:r.depthFunc(r.NEVER);break;case Fh:r.depthFunc(r.ALWAYS);break;case Hh:r.depthFunc(r.LESS);break;case wr:r.depthFunc(r.LEQUAL);break;case Gh:r.depthFunc(r.EQUAL);break;case Vh:r.depthFunc(r.GEQUAL);break;case kh:r.depthFunc(r.GREATER);break;case Xh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=Nt}},setLocked:function(Nt){q=Nt},setClear:function(Nt){Pt!==Nt&&(Lt&&(Nt=1-Nt),r.clearDepth(Nt),Pt=Nt)},reset:function(){q=!1,ut=null,gt=null,Pt=null,Lt=!1}}}function l(){let q=!1,Lt=null,ut=null,gt=null,Pt=null,Nt=null,ne=null,He=null,$e=null;return{setTest:function(Me){q||(Me?bt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Me){Lt!==Me&&!q&&(r.stencilMask(Me),Lt=Me)},setFunc:function(Me,kn,hn){(ut!==Me||gt!==kn||Pt!==hn)&&(r.stencilFunc(Me,kn,hn),ut=Me,gt=kn,Pt=hn)},setOp:function(Me,kn,hn){(Nt!==Me||ne!==kn||He!==hn)&&(r.stencilOp(Me,kn,hn),Nt=Me,ne=kn,He=hn)},setLocked:function(Me){q=Me},setClear:function(Me){$e!==Me&&(r.clearStencil(Me),$e=Me)},reset:function(){q=!1,Lt=null,ut=null,gt=null,Pt=null,Nt=null,ne=null,He=null,$e=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,_=null,O=null,L=null,w=null,z=null,H=null,B=new ge(0,0,0),k=0,D=!1,R=null,U=null,J=null,W=null,et=null;const ct=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Y=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),I=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),I=Y>=2);let mt=null,N={};const nt=r.getParameter(r.SCISSOR_BOX),vt=r.getParameter(r.VIEWPORT),St=new Ke().fromArray(nt),$=new Ke().fromArray(vt);function pt(q,Lt,ut,gt){const Pt=new Uint8Array(4),Nt=r.createTexture();r.bindTexture(q,Nt),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ne=0;ne<ut;ne++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,gt,0,r.RGBA,r.UNSIGNED_BYTE,Pt):r.texImage2D(Lt+ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pt);return Nt}const yt={};yt[r.TEXTURE_2D]=pt(r.TEXTURE_2D,r.TEXTURE_2D,1),yt[r.TEXTURE_CUBE_MAP]=pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[r.TEXTURE_2D_ARRAY]=pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),yt[r.TEXTURE_3D]=pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),bt(r.DEPTH_TEST),h.setFunc(wr),ue(!1),te(S_),bt(r.CULL_FACE),G(Xa);function bt(q){g[q]!==!0&&(r.enable(q),g[q]=!0)}function Dt(q){g[q]!==!1&&(r.disable(q),g[q]=!1)}function ie(q,Lt){return x[q]!==Lt?(r.bindFramebuffer(q,Lt),x[q]=Lt,q===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Lt),q===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function qt(q,Lt){let ut=S,gt=!1;if(q){ut=v.get(Lt),ut===void 0&&(ut=[],v.set(Lt,ut));const Pt=q.textures;if(ut.length!==Pt.length||ut[0]!==r.COLOR_ATTACHMENT0){for(let Nt=0,ne=Pt.length;Nt<ne;Nt++)ut[Nt]=r.COLOR_ATTACHMENT0+Nt;ut.length=Pt.length,gt=!0}}else ut[0]!==r.BACK&&(ut[0]=r.BACK,gt=!0);gt&&r.drawBuffers(ut)}function Le(q){return E!==q?(r.useProgram(q),E=q,!0):!1}const Ce={[ys]:r.FUNC_ADD,[Py]:r.FUNC_SUBTRACT,[Iy]:r.FUNC_REVERSE_SUBTRACT};Ce[zy]=r.MIN,Ce[By]=r.MAX;const re={[Fy]:r.ZERO,[Hy]:r.ONE,[Gy]:r.SRC_COLOR,[Ih]:r.SRC_ALPHA,[Yy]:r.SRC_ALPHA_SATURATE,[Wy]:r.DST_COLOR,[ky]:r.DST_ALPHA,[Vy]:r.ONE_MINUS_SRC_COLOR,[zh]:r.ONE_MINUS_SRC_ALPHA,[qy]:r.ONE_MINUS_DST_COLOR,[Xy]:r.ONE_MINUS_DST_ALPHA,[jy]:r.CONSTANT_COLOR,[Zy]:r.ONE_MINUS_CONSTANT_COLOR,[Ky]:r.CONSTANT_ALPHA,[Qy]:r.ONE_MINUS_CONSTANT_ALPHA};function G(q,Lt,ut,gt,Pt,Nt,ne,He,$e,Me){if(q===Xa){T===!0&&(Dt(r.BLEND),T=!1);return}if(T===!1&&(bt(r.BLEND),T=!0),q!==Oy){if(q!==y||Me!==D){if((_!==ys||w!==ys)&&(r.blendEquation(r.FUNC_ADD),_=ys,w=ys),Me)switch(q){case br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case M_:r.blendFunc(r.ONE,r.ONE);break;case E_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case T_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case M_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case E_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case T_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}O=null,L=null,z=null,H=null,B.set(0,0,0),k=0,y=q,D=Me}return}Pt=Pt||Lt,Nt=Nt||ut,ne=ne||gt,(Lt!==_||Pt!==w)&&(r.blendEquationSeparate(Ce[Lt],Ce[Pt]),_=Lt,w=Pt),(ut!==O||gt!==L||Nt!==z||ne!==H)&&(r.blendFuncSeparate(re[ut],re[gt],re[Nt],re[ne]),O=ut,L=gt,z=Nt,H=ne),(He.equals(B)===!1||$e!==k)&&(r.blendColor(He.r,He.g,He.b,$e),B.copy(He),k=$e),y=q,D=!1}function bn(q,Lt){q.side===ea?Dt(r.CULL_FACE):bt(r.CULL_FACE);let ut=q.side===Gn;Lt&&(ut=!ut),ue(ut),q.blending===br&&q.transparent===!1?G(Xa):G(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const gt=q.stencilWrite;d.setTest(gt),gt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ae(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ue(q){R!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),R=q)}function te(q){q!==Ly?(bt(r.CULL_FACE),q!==U&&(q===S_?r.cullFace(r.BACK):q===Uy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),U=q}function Bt(q){q!==J&&(I&&r.lineWidth(q),J=q)}function Ae(q,Lt,ut){q?(bt(r.POLYGON_OFFSET_FILL),(W!==Lt||et!==ut)&&(r.polygonOffset(Lt,ut),W=Lt,et=ut)):Dt(r.POLYGON_OFFSET_FILL)}function Ft(q){q?bt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function P(q){q===void 0&&(q=r.TEXTURE0+ct-1),mt!==q&&(r.activeTexture(q),mt=q)}function A(q,Lt,ut){ut===void 0&&(mt===null?ut=r.TEXTURE0+ct-1:ut=mt);let gt=N[ut];gt===void 0&&(gt={type:void 0,texture:void 0},N[ut]=gt),(gt.type!==q||gt.texture!==Lt)&&(mt!==ut&&(r.activeTexture(ut),mt=ut),r.bindTexture(q,Lt||yt[q]),gt.type=q,gt.texture=Lt)}function at(){const q=N[mt];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function xt(){try{r.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{r.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{r.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function It(){try{r.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{r.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{r.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Tt(){try{r.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ht(){try{r.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{r.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(q){St.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),St.copy(q))}function Ot(q){$.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),$.copy(q))}function le(q,Lt){let ut=p.get(Lt);ut===void 0&&(ut=new WeakMap,p.set(Lt,ut));let gt=ut.get(q);gt===void 0&&(gt=r.getUniformBlockIndex(Lt,q.name),ut.set(q,gt))}function ee(q,Lt){const gt=p.get(Lt).get(q);m.get(Lt)!==gt&&(r.uniformBlockBinding(Lt,gt,q.__bindingPointIndex),m.set(Lt,gt))}function Ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},mt=null,N={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,_=null,O=null,L=null,w=null,z=null,H=null,B=new ge(0,0,0),k=0,D=!1,R=null,U=null,J=null,W=null,et=null,St.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:bt,disable:Dt,bindFramebuffer:ie,drawBuffers:qt,useProgram:Le,setBlending:G,setMaterial:bn,setFlipSided:ue,setCullFace:te,setLineWidth:Bt,setPolygonOffset:Ae,setScissorTest:Ft,activeTexture:P,bindTexture:A,unbindTexture:at,compressedTexImage2D:xt,compressedTexImage3D:Mt,texImage2D:Ht,texImage3D:Yt,updateUBOMapping:le,uniformBlockBinding:ee,texStorage2D:_e,texStorage3D:Tt,texSubImage2D:ht,texSubImage3D:It,compressedTexSubImage2D:At,compressedTexSubImage3D:Rt,scissor:Kt,viewport:Ot,reset:Ue}}function IA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Wt,g=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,A){return S?new OffscreenCanvas(P,A):Bc("canvas")}function T(P,A,at){let xt=1;const Mt=Ft(P);if((Mt.width>at||Mt.height>at)&&(xt=at/Math.max(Mt.width,Mt.height)),xt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ht=Math.floor(xt*Mt.width),It=Math.floor(xt*Mt.height);x===void 0&&(x=E(ht,It));const At=A?E(ht,It):x;return At.width=ht,At.height=It,At.getContext("2d").drawImage(P,0,0,ht,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+It+")."),At}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),P;return P}function y(P){return P.generateMipmaps}function _(P){r.generateMipmap(P)}function O(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,A,at,xt,Mt=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ht=A;if(A===r.RED&&(at===r.FLOAT&&(ht=r.R32F),at===r.HALF_FLOAT&&(ht=r.R16F),at===r.UNSIGNED_BYTE&&(ht=r.R8)),A===r.RED_INTEGER&&(at===r.UNSIGNED_BYTE&&(ht=r.R8UI),at===r.UNSIGNED_SHORT&&(ht=r.R16UI),at===r.UNSIGNED_INT&&(ht=r.R32UI),at===r.BYTE&&(ht=r.R8I),at===r.SHORT&&(ht=r.R16I),at===r.INT&&(ht=r.R32I)),A===r.RG&&(at===r.FLOAT&&(ht=r.RG32F),at===r.HALF_FLOAT&&(ht=r.RG16F),at===r.UNSIGNED_BYTE&&(ht=r.RG8)),A===r.RG_INTEGER&&(at===r.UNSIGNED_BYTE&&(ht=r.RG8UI),at===r.UNSIGNED_SHORT&&(ht=r.RG16UI),at===r.UNSIGNED_INT&&(ht=r.RG32UI),at===r.BYTE&&(ht=r.RG8I),at===r.SHORT&&(ht=r.RG16I),at===r.INT&&(ht=r.RG32I)),A===r.RGB_INTEGER&&(at===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),at===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),at===r.UNSIGNED_INT&&(ht=r.RGB32UI),at===r.BYTE&&(ht=r.RGB8I),at===r.SHORT&&(ht=r.RGB16I),at===r.INT&&(ht=r.RGB32I)),A===r.RGBA_INTEGER&&(at===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),at===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),at===r.UNSIGNED_INT&&(ht=r.RGBA32UI),at===r.BYTE&&(ht=r.RGBA8I),at===r.SHORT&&(ht=r.RGBA16I),at===r.INT&&(ht=r.RGBA32I)),A===r.RGB&&at===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),A===r.RGBA){const It=Mt?Ic:be.getTransfer(xt);at===r.FLOAT&&(ht=r.RGBA32F),at===r.HALF_FLOAT&&(ht=r.RGBA16F),at===r.UNSIGNED_BYTE&&(ht=It===Ie?r.SRGB8_ALPHA8:r.RGBA8),at===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),at===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function w(P,A){let at;return P?A===null||A===Ts||A===Ur?at=r.DEPTH24_STENCIL8:A===na?at=r.DEPTH32F_STENCIL8:A===Vo&&(at=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ts||A===Ur?at=r.DEPTH_COMPONENT24:A===na?at=r.DEPTH_COMPONENT32F:A===Vo&&(at=r.DEPTH_COMPONENT16),at}function z(P,A){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==vi&&P.minFilter!==Ai?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function H(P){const A=P.target;A.removeEventListener("dispose",H),k(A),A.isVideoTexture&&g.delete(A)}function B(P){const A=P.target;A.removeEventListener("dispose",B),R(A)}function k(P){const A=s.get(P);if(A.__webglInit===void 0)return;const at=P.source,xt=v.get(at);if(xt){const Mt=xt[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(P),Object.keys(xt).length===0&&v.delete(at)}s.remove(P)}function D(P){const A=s.get(P);r.deleteTexture(A.__webglTexture);const at=P.source,xt=v.get(at);delete xt[A.__cacheKey],h.memory.textures--}function R(P){const A=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(A.__webglFramebuffer[xt]))for(let Mt=0;Mt<A.__webglFramebuffer[xt].length;Mt++)r.deleteFramebuffer(A.__webglFramebuffer[xt][Mt]);else r.deleteFramebuffer(A.__webglFramebuffer[xt]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[xt])}else{if(Array.isArray(A.__webglFramebuffer))for(let xt=0;xt<A.__webglFramebuffer.length;xt++)r.deleteFramebuffer(A.__webglFramebuffer[xt]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xt=0;xt<A.__webglColorRenderbuffer.length;xt++)A.__webglColorRenderbuffer[xt]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[xt]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const at=P.textures;for(let xt=0,Mt=at.length;xt<Mt;xt++){const ht=s.get(at[xt]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(at[xt])}s.remove(P)}let U=0;function J(){U=0}function W(){const P=U;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),U+=1,P}function et(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function ct(P,A){const at=s.get(P);if(P.isVideoTexture&&Bt(P),P.isRenderTargetTexture===!1&&P.version>0&&at.__version!==P.version){const xt=P.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(at,P,A);return}}i.bindTexture(r.TEXTURE_2D,at.__webglTexture,r.TEXTURE0+A)}function I(P,A){const at=s.get(P);if(P.version>0&&at.__version!==P.version){$(at,P,A);return}i.bindTexture(r.TEXTURE_2D_ARRAY,at.__webglTexture,r.TEXTURE0+A)}function Y(P,A){const at=s.get(P);if(P.version>0&&at.__version!==P.version){$(at,P,A);return}i.bindTexture(r.TEXTURE_3D,at.__webglTexture,r.TEXTURE0+A)}function X(P,A){const at=s.get(P);if(P.version>0&&at.__version!==P.version){pt(at,P,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,at.__webglTexture,r.TEXTURE0+A)}const mt={[Yh]:r.REPEAT,[Ms]:r.CLAMP_TO_EDGE,[jh]:r.MIRRORED_REPEAT},N={[vi]:r.NEAREST,[oS]:r.NEAREST_MIPMAP_NEAREST,[ic]:r.NEAREST_MIPMAP_LINEAR,[Ai]:r.LINEAR,[eh]:r.LINEAR_MIPMAP_NEAREST,[Es]:r.LINEAR_MIPMAP_LINEAR},nt={[fS]:r.NEVER,[_S]:r.ALWAYS,[hS]:r.LESS,[J0]:r.LEQUAL,[dS]:r.EQUAL,[gS]:r.GEQUAL,[pS]:r.GREATER,[mS]:r.NOTEQUAL};function vt(P,A){if(A.type===na&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ai||A.magFilter===eh||A.magFilter===ic||A.magFilter===Es||A.minFilter===Ai||A.minFilter===eh||A.minFilter===ic||A.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,mt[A.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,mt[A.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,mt[A.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,N[A.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,N[A.minFilter]),A.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,nt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===vi||A.minFilter!==ic&&A.minFilter!==Es||A.type===na&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function St(P,A){let at=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",H));const xt=A.source;let Mt=v.get(xt);Mt===void 0&&(Mt={},v.set(xt,Mt));const ht=et(A);if(ht!==P.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,at=!0),Mt[ht].usedTimes++;const It=Mt[P.__cacheKey];It!==void 0&&(Mt[P.__cacheKey].usedTimes--,It.usedTimes===0&&D(A)),P.__cacheKey=ht,P.__webglTexture=Mt[ht].texture}return at}function $(P,A,at){let xt=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xt=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xt=r.TEXTURE_3D);const Mt=St(P,A),ht=A.source;i.bindTexture(xt,P.__webglTexture,r.TEXTURE0+at);const It=s.get(ht);if(ht.version!==It.__version||Mt===!0){i.activeTexture(r.TEXTURE0+at);const At=be.getPrimaries(be.workingColorSpace),Rt=A.colorSpace===Va?null:be.getPrimaries(A.colorSpace),_e=A.colorSpace===Va||At===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Tt=T(A.image,!1,l.maxTextureSize);Tt=Ae(A,Tt);const Ht=c.convert(A.format,A.colorSpace),Yt=c.convert(A.type);let Kt=L(A.internalFormat,Ht,Yt,A.colorSpace,A.isVideoTexture);vt(xt,A);let Ot;const le=A.mipmaps,ee=A.isVideoTexture!==!0,Ue=It.__version===void 0||Mt===!0,q=ht.dataReady,Lt=z(A,Tt);if(A.isDepthTexture)Kt=w(A.format===Nr,A.type),Ue&&(ee?i.texStorage2D(r.TEXTURE_2D,1,Kt,Tt.width,Tt.height):i.texImage2D(r.TEXTURE_2D,0,Kt,Tt.width,Tt.height,0,Ht,Yt,null));else if(A.isDataTexture)if(le.length>0){ee&&Ue&&i.texStorage2D(r.TEXTURE_2D,Lt,Kt,le[0].width,le[0].height);for(let ut=0,gt=le.length;ut<gt;ut++)Ot=le[ut],ee?q&&i.texSubImage2D(r.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Ht,Yt,Ot.data):i.texImage2D(r.TEXTURE_2D,ut,Kt,Ot.width,Ot.height,0,Ht,Yt,Ot.data);A.generateMipmaps=!1}else ee?(Ue&&i.texStorage2D(r.TEXTURE_2D,Lt,Kt,Tt.width,Tt.height),q&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Ht,Yt,Tt.data)):i.texImage2D(r.TEXTURE_2D,0,Kt,Tt.width,Tt.height,0,Ht,Yt,Tt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ee&&Ue&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Lt,Kt,le[0].width,le[0].height,Tt.depth);for(let ut=0,gt=le.length;ut<gt;ut++)if(Ot=le[ut],A.format!==_i)if(Ht!==null)if(ee){if(q)if(A.layerUpdates.size>0){const Pt=e0(Ot.width,Ot.height,A.format,A.type);for(const Nt of A.layerUpdates){const ne=Ot.data.subarray(Nt*Pt/Ot.data.BYTES_PER_ELEMENT,(Nt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,Nt,Ot.width,Ot.height,1,Ht,ne)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,Ot.width,Ot.height,Tt.depth,Ht,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ut,Kt,Ot.width,Ot.height,Tt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?q&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,Ot.width,Ot.height,Tt.depth,Ht,Yt,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ut,Kt,Ot.width,Ot.height,Tt.depth,0,Ht,Yt,Ot.data)}else{ee&&Ue&&i.texStorage2D(r.TEXTURE_2D,Lt,Kt,le[0].width,le[0].height);for(let ut=0,gt=le.length;ut<gt;ut++)Ot=le[ut],A.format!==_i?Ht!==null?ee?q&&i.compressedTexSubImage2D(r.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Ht,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,ut,Kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?q&&i.texSubImage2D(r.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Ht,Yt,Ot.data):i.texImage2D(r.TEXTURE_2D,ut,Kt,Ot.width,Ot.height,0,Ht,Yt,Ot.data)}else if(A.isDataArrayTexture)if(ee){if(Ue&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Lt,Kt,Tt.width,Tt.height,Tt.depth),q)if(A.layerUpdates.size>0){const ut=e0(Tt.width,Tt.height,A.format,A.type);for(const gt of A.layerUpdates){const Pt=Tt.data.subarray(gt*ut/Tt.data.BYTES_PER_ELEMENT,(gt+1)*ut/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,gt,Tt.width,Tt.height,1,Ht,Yt,Pt)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ht,Yt,Tt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Kt,Tt.width,Tt.height,Tt.depth,0,Ht,Yt,Tt.data);else if(A.isData3DTexture)ee?(Ue&&i.texStorage3D(r.TEXTURE_3D,Lt,Kt,Tt.width,Tt.height,Tt.depth),q&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ht,Yt,Tt.data)):i.texImage3D(r.TEXTURE_3D,0,Kt,Tt.width,Tt.height,Tt.depth,0,Ht,Yt,Tt.data);else if(A.isFramebufferTexture){if(Ue)if(ee)i.texStorage2D(r.TEXTURE_2D,Lt,Kt,Tt.width,Tt.height);else{let ut=Tt.width,gt=Tt.height;for(let Pt=0;Pt<Lt;Pt++)i.texImage2D(r.TEXTURE_2D,Pt,Kt,ut,gt,0,Ht,Yt,null),ut>>=1,gt>>=1}}else if(le.length>0){if(ee&&Ue){const ut=Ft(le[0]);i.texStorage2D(r.TEXTURE_2D,Lt,Kt,ut.width,ut.height)}for(let ut=0,gt=le.length;ut<gt;ut++)Ot=le[ut],ee?q&&i.texSubImage2D(r.TEXTURE_2D,ut,0,0,Ht,Yt,Ot):i.texImage2D(r.TEXTURE_2D,ut,Kt,Ht,Yt,Ot);A.generateMipmaps=!1}else if(ee){if(Ue){const ut=Ft(Tt);i.texStorage2D(r.TEXTURE_2D,Lt,Kt,ut.width,ut.height)}q&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ht,Yt,Tt)}else i.texImage2D(r.TEXTURE_2D,0,Kt,Ht,Yt,Tt);y(A)&&_(xt),It.__version=ht.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function pt(P,A,at){if(A.image.length!==6)return;const xt=St(P,A),Mt=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+at);const ht=s.get(Mt);if(Mt.version!==ht.__version||xt===!0){i.activeTexture(r.TEXTURE0+at);const It=be.getPrimaries(be.workingColorSpace),At=A.colorSpace===Va?null:be.getPrimaries(A.colorSpace),Rt=A.colorSpace===Va||It===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const _e=A.isCompressedTexture||A.image[0].isCompressedTexture,Tt=A.image[0]&&A.image[0].isDataTexture,Ht=[];for(let gt=0;gt<6;gt++)!_e&&!Tt?Ht[gt]=T(A.image[gt],!0,l.maxCubemapSize):Ht[gt]=Tt?A.image[gt].image:A.image[gt],Ht[gt]=Ae(A,Ht[gt]);const Yt=Ht[0],Kt=c.convert(A.format,A.colorSpace),Ot=c.convert(A.type),le=L(A.internalFormat,Kt,Ot,A.colorSpace),ee=A.isVideoTexture!==!0,Ue=ht.__version===void 0||xt===!0,q=Mt.dataReady;let Lt=z(A,Yt);vt(r.TEXTURE_CUBE_MAP,A);let ut;if(_e){ee&&Ue&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,le,Yt.width,Yt.height);for(let gt=0;gt<6;gt++){ut=Ht[gt].mipmaps;for(let Pt=0;Pt<ut.length;Pt++){const Nt=ut[Pt];A.format!==_i?Kt!==null?ee?q&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,0,0,Nt.width,Nt.height,Kt,Nt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,le,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?q&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,0,0,Nt.width,Nt.height,Kt,Ot,Nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,le,Nt.width,Nt.height,0,Kt,Ot,Nt.data)}}}else{if(ut=A.mipmaps,ee&&Ue){ut.length>0&&Lt++;const gt=Ft(Ht[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,le,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Tt){ee?q&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ht[gt].width,Ht[gt].height,Kt,Ot,Ht[gt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,le,Ht[gt].width,Ht[gt].height,0,Kt,Ot,Ht[gt].data);for(let Pt=0;Pt<ut.length;Pt++){const ne=ut[Pt].image[gt].image;ee?q&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,0,0,ne.width,ne.height,Kt,Ot,ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,le,ne.width,ne.height,0,Kt,Ot,ne.data)}}else{ee?q&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Kt,Ot,Ht[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,le,Kt,Ot,Ht[gt]);for(let Pt=0;Pt<ut.length;Pt++){const Nt=ut[Pt];ee?q&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,0,0,Kt,Ot,Nt.image[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,le,Kt,Ot,Nt.image[gt])}}}y(A)&&_(r.TEXTURE_CUBE_MAP),ht.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function yt(P,A,at,xt,Mt,ht){const It=c.convert(at.format,at.colorSpace),At=c.convert(at.type),Rt=L(at.internalFormat,It,At,at.colorSpace),_e=s.get(A),Tt=s.get(at);if(Tt.__renderTarget=A,!_e.__hasExternalTextures){const Ht=Math.max(1,A.width>>ht),Yt=Math.max(1,A.height>>ht);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ht,Rt,Ht,Yt,A.depth,0,It,At,null):i.texImage2D(Mt,ht,Rt,Ht,Yt,0,It,At,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),te(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xt,Mt,Tt.__webglTexture,0,ue(A)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xt,Mt,Tt.__webglTexture,ht),i.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(P,A,at){if(r.bindRenderbuffer(r.RENDERBUFFER,P),A.depthBuffer){const xt=A.depthTexture,Mt=xt&&xt.isDepthTexture?xt.type:null,ht=w(A.stencilBuffer,Mt),It=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=ue(A);te(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,At,ht,A.width,A.height):at?r.renderbufferStorageMultisample(r.RENDERBUFFER,At,ht,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ht,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,It,r.RENDERBUFFER,P)}else{const xt=A.textures;for(let Mt=0;Mt<xt.length;Mt++){const ht=xt[Mt],It=c.convert(ht.format,ht.colorSpace),At=c.convert(ht.type),Rt=L(ht.internalFormat,It,At,ht.colorSpace),_e=ue(A);at&&te(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,Rt,A.width,A.height):te(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,Rt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Rt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Dt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(A.depthTexture);xt.__renderTarget=A,(!xt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ct(A.depthTexture,0);const Mt=xt.__webglTexture,ht=ue(A);if(A.depthTexture.format===Ar)te(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0);else if(A.depthTexture.format===Nr)te(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function ie(P){const A=s.get(P),at=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const xt=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xt){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xt.removeEventListener("dispose",Mt)};xt.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=xt}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Dt(A.__webglFramebuffer,P)}else if(at){A.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[xt]),A.__webglDepthbuffer[xt]===void 0)A.__webglDepthbuffer[xt]=r.createRenderbuffer(),bt(A.__webglDepthbuffer[xt],P,!1);else{const Mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[xt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ht)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),bt(A.__webglDepthbuffer,P,!1);else{const xt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,Mt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(P,A,at){const xt=s.get(P);A!==void 0&&yt(xt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),at!==void 0&&ie(P)}function Le(P){const A=P.texture,at=s.get(P),xt=s.get(A);P.addEventListener("dispose",B);const Mt=P.textures,ht=P.isWebGLCubeRenderTarget===!0,It=Mt.length>1;if(It||(xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture()),xt.__version=A.version,h.memory.textures++),ht){at.__webglFramebuffer=[];for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[At]=[];for(let Rt=0;Rt<A.mipmaps.length;Rt++)at.__webglFramebuffer[At][Rt]=r.createFramebuffer()}else at.__webglFramebuffer[At]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let At=0;At<A.mipmaps.length;At++)at.__webglFramebuffer[At]=r.createFramebuffer()}else at.__webglFramebuffer=r.createFramebuffer();if(It)for(let At=0,Rt=Mt.length;At<Rt;At++){const _e=s.get(Mt[At]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),h.memory.textures++)}if(P.samples>0&&te(P)===!1){at.__webglMultisampledFramebuffer=r.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let At=0;At<Mt.length;At++){const Rt=Mt[At];at.__webglColorRenderbuffer[At]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,at.__webglColorRenderbuffer[At]);const _e=c.convert(Rt.format,Rt.colorSpace),Tt=c.convert(Rt.type),Ht=L(Rt.internalFormat,_e,Tt,Rt.colorSpace,P.isXRRenderTarget===!0),Yt=ue(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,Ht,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,at.__webglColorRenderbuffer[At])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(at.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(at.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){i.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),vt(r.TEXTURE_CUBE_MAP,A);for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0)for(let Rt=0;Rt<A.mipmaps.length;Rt++)yt(at.__webglFramebuffer[At][Rt],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt);else yt(at.__webglFramebuffer[At],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);y(A)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let At=0,Rt=Mt.length;At<Rt;At++){const _e=Mt[At],Tt=s.get(_e);i.bindTexture(r.TEXTURE_2D,Tt.__webglTexture),vt(r.TEXTURE_2D,_e),yt(at.__webglFramebuffer,P,_e,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,0),y(_e)&&_(r.TEXTURE_2D)}i.unbindTexture()}else{let At=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(At=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(At,xt.__webglTexture),vt(At,A),A.mipmaps&&A.mipmaps.length>0)for(let Rt=0;Rt<A.mipmaps.length;Rt++)yt(at.__webglFramebuffer[Rt],P,A,r.COLOR_ATTACHMENT0,At,Rt);else yt(at.__webglFramebuffer,P,A,r.COLOR_ATTACHMENT0,At,0);y(A)&&_(At),i.unbindTexture()}P.depthBuffer&&ie(P)}function Ce(P){const A=P.textures;for(let at=0,xt=A.length;at<xt;at++){const Mt=A[at];if(y(Mt)){const ht=O(P),It=s.get(Mt).__webglTexture;i.bindTexture(ht,It),_(ht),i.unbindTexture()}}}const re=[],G=[];function bn(P){if(P.samples>0){if(te(P)===!1){const A=P.textures,at=P.width,xt=P.height;let Mt=r.COLOR_BUFFER_BIT;const ht=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,It=s.get(P),At=A.length>1;if(At)for(let Rt=0;Rt<A.length;Rt++)i.bindFramebuffer(r.FRAMEBUFFER,It.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,It.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Rt=0;Rt<A.length;Rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),At){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,It.__webglColorRenderbuffer[Rt]);const _e=s.get(A[Rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,at,xt,0,0,at,xt,Mt,r.NEAREST),m===!0&&(re.length=0,G.length=0,re.push(r.COLOR_ATTACHMENT0+Rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(re.push(ht),G.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,G)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),At)for(let Rt=0;Rt<A.length;Rt++){i.bindFramebuffer(r.FRAMEBUFFER,It.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,It.__webglColorRenderbuffer[Rt]);const _e=s.get(A[Rt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,It.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,_e,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const A=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function ue(P){return Math.min(l.maxSamples,P.samples)}function te(P){const A=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Bt(P){const A=h.render.frame;g.get(P)!==A&&(g.set(P,A),P.update())}function Ae(P,A){const at=P.colorSpace,xt=P.format,Mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||at!==Or&&at!==Va&&(be.getTransfer(at)===Ie?(xt!==_i||Mt!==ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}function Ft(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=ct,this.setTexture2DArray=I,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=qt,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=te}function zA(r,t){function i(s,l=Va){let c;const h=be.getTransfer(l);if(s===ra)return r.UNSIGNED_BYTE;if(s===wd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Dd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===k0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===G0)return r.BYTE;if(s===V0)return r.SHORT;if(s===Vo)return r.UNSIGNED_SHORT;if(s===Cd)return r.INT;if(s===Ts)return r.UNSIGNED_INT;if(s===na)return r.FLOAT;if(s===ko)return r.HALF_FLOAT;if(s===X0)return r.ALPHA;if(s===W0)return r.RGB;if(s===_i)return r.RGBA;if(s===q0)return r.LUMINANCE;if(s===Y0)return r.LUMINANCE_ALPHA;if(s===Ar)return r.DEPTH_COMPONENT;if(s===Nr)return r.DEPTH_STENCIL;if(s===j0)return r.RED;if(s===Ld)return r.RED_INTEGER;if(s===Z0)return r.RG;if(s===Ud)return r.RG_INTEGER;if(s===Nd)return r.RGBA_INTEGER;if(s===wc||s===Dc||s===Lc||s===Uc)if(h===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h||s===td||s===ed)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===$h||s===td)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ed)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===nd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===id)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ad)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===od)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ld)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ud)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===md)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nc||s===gd||s===_d)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Nc)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===K0||s===vd||s===xd||s===yd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Nc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ur?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const BA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Vn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new oa({vertexShader:BA,fragmentShader:FA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ci(new Wc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GA extends Rs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,v=null,S=null,E=null;const T=new HA,y=i.getContextAttributes();let _=null,O=null;const L=[],w=[],z=new Wt;let H=null;const B=new li;B.viewport=new Ke;const k=new li;k.viewport=new Ke;const D=[B,k],R=new rM;let U=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let pt=L[$];return pt===void 0&&(pt=new Mh,L[$]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function($){let pt=L[$];return pt===void 0&&(pt=new Mh,L[$]=pt),pt.getGripSpace()},this.getHand=function($){let pt=L[$];return pt===void 0&&(pt=new Mh,L[$]=pt),pt.getHandSpace()};function W($){const pt=w.indexOf($.inputSource);if(pt===-1)return;const yt=L[pt];yt!==void 0&&(yt.update($.inputSource,$.frame,p||h),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function et(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",et),l.removeEventListener("inputsourceschange",ct);for(let $=0;$<L.length;$++){const pt=w[$];pt!==null&&(w[$]=null,L[$].disconnect(pt))}U=null,J=null,T.reset(),t.setRenderTarget(_),S=null,v=null,x=null,l=null,O=null,St.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",et),l.addEventListener("inputsourceschange",ct),y.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,bt=null,Dt=null;y.depth&&(Dt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=y.stencil?Nr:Ar,bt=y.stencil?Ur:Ts);const ie={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(ie),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new bs(v.textureWidth,v.textureHeight,{format:_i,type:ra,depthTexture:new uv(v.textureWidth,v.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new bs(S.framebufferWidth,S.framebufferHeight,{format:_i,type:ra,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ct($){for(let pt=0;pt<$.removed.length;pt++){const yt=$.removed[pt],bt=w.indexOf(yt);bt>=0&&(w[bt]=null,L[bt].disconnect(yt))}for(let pt=0;pt<$.added.length;pt++){const yt=$.added[pt];let bt=w.indexOf(yt);if(bt===-1){for(let ie=0;ie<L.length;ie++)if(ie>=w.length){w.push(yt),bt=ie;break}else if(w[ie]===null){w[ie]=yt,bt=ie;break}if(bt===-1)break}const Dt=L[bt];Dt&&Dt.connect(yt)}}const I=new K,Y=new K;function X($,pt,yt){I.setFromMatrixPosition(pt.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);const bt=I.distanceTo(Y),Dt=pt.projectionMatrix.elements,ie=yt.projectionMatrix.elements,qt=Dt[14]/(Dt[10]-1),Le=Dt[14]/(Dt[10]+1),Ce=(Dt[9]+1)/Dt[5],re=(Dt[9]-1)/Dt[5],G=(Dt[8]-1)/Dt[0],bn=(ie[8]+1)/ie[0],ue=qt*G,te=qt*bn,Bt=bt/(-G+bn),Ae=Bt*-G;if(pt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ae),$.translateZ(Bt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Dt[10]===-1)$.projectionMatrix.copy(pt.projectionMatrix),$.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Ft=qt+Bt,P=Le+Bt,A=ue-Ae,at=te+(bt-Ae),xt=Ce*Le/P*Ft,Mt=re*Le/P*Ft;$.projectionMatrix.makePerspective(A,at,xt,Mt,Ft,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function mt($,pt){pt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(pt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let pt=$.near,yt=$.far;T.texture!==null&&(T.depthNear>0&&(pt=T.depthNear),T.depthFar>0&&(yt=T.depthFar)),R.near=k.near=B.near=pt,R.far=k.far=B.far=yt,(U!==R.near||J!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,J=R.far),B.layers.mask=$.layers.mask|2,k.layers.mask=$.layers.mask|4,R.layers.mask=B.layers.mask|k.layers.mask;const bt=$.parent,Dt=R.cameras;mt(R,bt);for(let ie=0;ie<Dt.length;ie++)mt(Dt[ie],bt);Dt.length===2?X(R,B,k):R.projectionMatrix.copy(B.projectionMatrix),N($,R,bt)};function N($,pt,yt){yt===null?$.matrix.copy(pt.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(pt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(pt.projectionMatrix),$.projectionMatrixInverse.copy(pt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Sd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function($){m=$,v!==null&&(v.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let nt=null;function vt($,pt){if(g=pt.getViewerPose(p||h),E=pt,g!==null){const yt=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let bt=!1;yt.length!==R.cameras.length&&(R.cameras.length=0,bt=!0);for(let qt=0;qt<yt.length;qt++){const Le=yt[qt];let Ce=null;if(S!==null)Ce=S.getViewport(Le);else{const G=x.getViewSubImage(v,Le);Ce=G.viewport,qt===0&&(t.setRenderTargetTextures(O,G.colorTexture,v.ignoreDepthValues?void 0:G.depthStencilTexture),t.setRenderTarget(O))}let re=D[qt];re===void 0&&(re=new li,re.layers.enable(qt),re.viewport=new Ke,D[qt]=re),re.matrix.fromArray(Le.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Le.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),qt===0&&(R.matrix.copy(re.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),bt===!0&&R.cameras.push(re)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const qt=x.getDepthInformation(yt[0]);qt&&qt.isValid&&qt.texture&&T.init(t,qt,l.renderState)}}for(let yt=0;yt<L.length;yt++){const bt=w[yt],Dt=L[yt];bt!==null&&Dt!==void 0&&Dt.update(bt,pt,p||h)}nt&&nt($,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),E=null}const St=new dv;St.setAnimationLoop(vt),this.setAnimationLoop=function($){nt=$},this.dispose=function(){}}}const _s=new Ri,VA=new ke;function kA(r,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,sv(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,O,L,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),x(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),v(y,_),_.isMeshPhysicalMaterial&&S(y,_,w)):_.isMeshMatcapMaterial?(c(y,_),E(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),T(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,O,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Gn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Gn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const O=t.get(_),L=O.envMap,w=O.envMapRotation;L&&(y.envMap.value=L,_s.copy(w),_s.x*=-1,_s.y*=-1,_s.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),y.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(_s)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,O,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*O,y.scale.value=L*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,O){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const O=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function XA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,L){const w=L.program;s.uniformBlockBinding(O,w)}function p(O,L){let w=l[O.id];w===void 0&&(E(O),w=g(O),l[O.id]=w,O.addEventListener("dispose",y));const z=L.program;s.updateUBOMapping(O,z);const H=t.render.frame;c[O.id]!==H&&(v(O),c[O.id]=H)}function g(O){const L=x();O.__bindingPointIndex=L;const w=r.createBuffer(),z=O.__size,H=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,z,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,w),w}function x(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const L=l[O.id],w=O.uniforms,z=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let H=0,B=w.length;H<B;H++){const k=Array.isArray(w[H])?w[H]:[w[H]];for(let D=0,R=k.length;D<R;D++){const U=k[D];if(S(U,H,D,z)===!0){const J=U.__offset,W=Array.isArray(U.value)?U.value:[U.value];let et=0;for(let ct=0;ct<W.length;ct++){const I=W[ct],Y=T(I);typeof I=="number"||typeof I=="boolean"?(U.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,J+et,U.__data)):I.isMatrix3?(U.__data[0]=I.elements[0],U.__data[1]=I.elements[1],U.__data[2]=I.elements[2],U.__data[3]=0,U.__data[4]=I.elements[3],U.__data[5]=I.elements[4],U.__data[6]=I.elements[5],U.__data[7]=0,U.__data[8]=I.elements[6],U.__data[9]=I.elements[7],U.__data[10]=I.elements[8],U.__data[11]=0):(I.toArray(U.__data,et),et+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(O,L,w,z){const H=O.value,B=L+"_"+w;if(z[B]===void 0)return typeof H=="number"||typeof H=="boolean"?z[B]=H:z[B]=H.clone(),!0;{const k=z[B];if(typeof H=="number"||typeof H=="boolean"){if(k!==H)return z[B]=H,!0}else if(k.equals(H)===!1)return k.copy(H),!0}return!1}function E(O){const L=O.uniforms;let w=0;const z=16;for(let B=0,k=L.length;B<k;B++){const D=Array.isArray(L[B])?L[B]:[L[B]];for(let R=0,U=D.length;R<U;R++){const J=D[R],W=Array.isArray(J.value)?J.value:[J.value];for(let et=0,ct=W.length;et<ct;et++){const I=W[et],Y=T(I),X=w%z,mt=X%Y.boundary,N=X+mt;w+=mt,N!==0&&z-N<Y.storage&&(w+=z-N),J.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=Y.storage}}}const H=w%z;return H>0&&(w+=z-H),O.__size=w,O.__cache={},this}function T(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function y(O){const L=O.target;L.removeEventListener("dispose",y);const w=h.indexOf(L.__bindingPointIndex);h.splice(w,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const O in l)r.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class WA{constructor(t={}){const{canvas:i=yS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const O=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=Wa,this.toneMappingExposure=1;const w=this;let z=!1,H=0,B=0,k=null,D=-1,R=null;const U=new Ke,J=new Ke;let W=null;const et=new ge(0);let ct=0,I=i.width,Y=i.height,X=1,mt=null,N=null;const nt=new Ke(0,0,I,Y),vt=new Ke(0,0,I,Y);let St=!1;const $=new Id;let pt=!1,yt=!1;this.transmissionResolutionScale=1;const bt=new ke,Dt=new ke,ie=new K,qt=new Ke,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function re(){return k===null?X:1}let G=s;function bn(C,j){return i.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rd}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),G===null){const j="webgl2";if(G=bn(j,C),G===null)throw bn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ue,te,Bt,Ae,Ft,P,A,at,xt,Mt,ht,It,At,Rt,_e,Tt,Ht,Yt,Kt,Ot,le,ee,Ue,q;function Lt(){ue=new eb(G),ue.init(),ee=new zA(G,ue),te=new jT(G,ue,t,ee),Bt=new PA(G,ue),te.reverseDepthBuffer&&v&&Bt.buffers.depth.setReversed(!0),Ae=new ab(G),Ft=new MA,P=new IA(G,ue,Bt,Ft,te,ee,Ae),A=new KT(w),at=new tb(w),xt=new uM(G),Ue=new qT(G,xt),Mt=new nb(G,xt,Ae,Ue),ht=new rb(G,Mt,xt,Ae),Kt=new sb(G,te,P),Tt=new ZT(Ft),It=new SA(w,A,at,ue,te,Ue,Tt),At=new kA(w,Ft),Rt=new TA,_e=new DA(ue),Yt=new WT(w,A,at,Bt,ht,S,m),Ht=new NA(w,ht,te),q=new XA(G,Ae,te,Bt),Ot=new YT(G,ue,Ae),le=new ib(G,ue,Ae),Ae.programs=It.programs,w.capabilities=te,w.extensions=ue,w.properties=Ft,w.renderLists=Rt,w.shadowMap=Ht,w.state=Bt,w.info=Ae}Lt();const ut=new GA(w,G);this.xr=ut,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(I,Y,!1))},this.getSize=function(C){return C.set(I,Y)},this.setSize=function(C,j,rt=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,Y=j,i.width=Math.floor(C*X),i.height=Math.floor(j*X),rt===!0&&(i.style.width=C+"px",i.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(I*X,Y*X).floor()},this.setDrawingBufferSize=function(C,j,rt){I=C,Y=j,X=rt,i.width=Math.floor(C*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,j,rt,lt){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,j,rt,lt),Bt.viewport(U.copy(nt).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(vt)},this.setScissor=function(C,j,rt,lt){C.isVector4?vt.set(C.x,C.y,C.z,C.w):vt.set(C,j,rt,lt),Bt.scissor(J.copy(vt).multiplyScalar(X).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(C){Bt.setScissorTest(St=C)},this.setOpaqueSort=function(C){mt=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,rt=!0){let lt=0;if(C){let Q=!1;if(k!==null){const Et=k.texture.format;Q=Et===Nd||Et===Ud||Et===Ld}if(Q){const Et=k.texture.type,Ct=Et===ra||Et===Ts||Et===Vo||Et===Ur||Et===wd||Et===Dd,Ut=Yt.getClearColor(),zt=Yt.getClearAlpha(),Jt=Ut.r,jt=Ut.g,kt=Ut.b;Ct?(E[0]=Jt,E[1]=jt,E[2]=kt,E[3]=zt,G.clearBufferuiv(G.COLOR,0,E)):(T[0]=Jt,T[1]=jt,T[2]=kt,T[3]=zt,G.clearBufferiv(G.COLOR,0,T))}else lt|=G.COLOR_BUFFER_BIT}j&&(lt|=G.DEPTH_BUFFER_BIT),rt&&(lt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),Yt.dispose(),Rt.dispose(),_e.dispose(),Ft.dispose(),A.dispose(),at.dispose(),ht.dispose(),Ue.dispose(),q.dispose(),It.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",sn),ut.removeEventListener("sessionend",xn),On.stop()};function gt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const C=Ae.autoReset,j=Ht.enabled,rt=Ht.autoUpdate,lt=Ht.needsUpdate,Q=Ht.type;Lt(),Ae.autoReset=C,Ht.enabled=j,Ht.autoUpdate=rt,Ht.needsUpdate=lt,Ht.type=Q}function Nt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ne(C){const j=C.target;j.removeEventListener("dispose",ne),He(j)}function He(C){$e(C),Ft.remove(C)}function $e(C){const j=Ft.get(C).programs;j!==void 0&&(j.forEach(function(rt){It.releaseProgram(rt)}),C.isShaderMaterial&&It.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,rt,lt,Q,Et){j===null&&(j=Le);const Ct=Q.isMesh&&Q.matrixWorld.determinant()<0,Ut=Za(C,j,rt,lt,Q);Bt.setMaterial(lt,Ct);let zt=rt.index,Jt=1;if(lt.wireframe===!0){if(zt=Mt.getWireframeAttribute(rt),zt===void 0)return;Jt=2}const jt=rt.drawRange,kt=rt.attributes.position;let he=jt.start*Jt,Ee=(jt.start+jt.count)*Jt;Et!==null&&(he=Math.max(he,Et.start*Jt),Ee=Math.min(Ee,(Et.start+Et.count)*Jt)),zt!==null?(he=Math.max(he,0),Ee=Math.min(Ee,zt.count)):kt!=null&&(he=Math.max(he,0),Ee=Math.min(Ee,kt.count));const We=Ee-he;if(We<0||We===1/0)return;Ue.setup(Q,lt,Ut,rt,zt);let ve,xe=Ot;if(zt!==null&&(ve=xt.get(zt),xe=le,xe.setIndex(ve)),Q.isMesh)lt.wireframe===!0?(Bt.setLineWidth(lt.wireframeLinewidth*re()),xe.setMode(G.LINES)):xe.setMode(G.TRIANGLES);else if(Q.isLine){let Xt=lt.linewidth;Xt===void 0&&(Xt=1),Bt.setLineWidth(Xt*re()),Q.isLineSegments?xe.setMode(G.LINES):Q.isLineLoop?xe.setMode(G.LINE_LOOP):xe.setMode(G.LINE_STRIP)}else Q.isPoints?xe.setMode(G.POINTS):Q.isSprite&&xe.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)vs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))xe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Xt=Q._multiDrawStarts,Ye=Q._multiDrawCounts,Se=Q._multiDrawCount,An=zt?xt.get(zt).bytesPerElement:1,fa=Ft.get(lt).currentProgram.getUniforms();for(let Ge=0;Ge<Se;Ge++)fa.setValue(G,"_gl_DrawID",Ge),xe.render(Xt[Ge]/An,Ye[Ge])}else if(Q.isInstancedMesh)xe.renderInstances(he,We,Q.count);else if(rt.isInstancedBufferGeometry){const Xt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,Xt);xe.renderInstances(he,We,Ye)}else xe.render(he,We)};function Me(C,j,rt){C.transparent===!0&&C.side===ea&&C.forceSinglePass===!1?(C.side=Gn,C.needsUpdate=!0,ca(C,j,rt),C.side=qa,C.needsUpdate=!0,ca(C,j,rt),C.side=ea):ca(C,j,rt)}this.compile=function(C,j,rt=null){rt===null&&(rt=C),_=_e.get(rt),_.init(j),L.push(_),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),C!==rt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const lt=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Et=Q.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){const Ut=Et[Ct];Me(Ut,rt,Q),lt.add(Ut)}else Me(Et,rt,Q),lt.add(Et)}),_=L.pop(),lt},this.compileAsync=function(C,j,rt=null){const lt=this.compile(C,j,rt);return new Promise(Q=>{function Et(){if(lt.forEach(function(Ct){Ft.get(Ct).currentProgram.isReady()&&lt.delete(Ct)}),lt.size===0){Q(C);return}setTimeout(Et,10)}ue.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let kn=null;function hn(C){kn&&kn(C)}function sn(){On.stop()}function xn(){On.start()}const On=new dv;On.setAnimationLoop(hn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(C){kn=C,ut.setAnimationLoop(C),C===null?On.stop():On.start()},ut.addEventListener("sessionstart",sn),ut.addEventListener("sessionend",xn),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(j),j=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,j,k),_=_e.get(C,L.length),_.init(j),L.push(_),Dt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),$.setFromProjectionMatrix(Dt),yt=this.localClippingEnabled,pt=Tt.init(this.clippingPlanes,yt),y=Rt.get(C,O.length),y.init(),O.push(y),ut.enabled===!0&&ut.isPresenting===!0){const Et=w.xr.getDepthSensingMesh();Et!==null&&Ya(Et,j,-1/0,w.sortObjects)}Ya(C,j,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(mt,N),Ce=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Ce&&Yt.addToRenderList(y,C),this.info.render.frame++,pt===!0&&Tt.beginShadows();const rt=_.state.shadowsArray;Ht.render(rt,C,j),pt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,Q=y.transmissive;if(_.setupLights(),j.isArrayCamera){const Et=j.cameras;if(Q.length>0)for(let Ct=0,Ut=Et.length;Ct<Ut;Ct++){const zt=Et[Ct];jo(lt,Q,C,zt)}Ce&&Yt.render(C);for(let Ct=0,Ut=Et.length;Ct<Ut;Ct++){const zt=Et[Ct];Yo(y,C,zt,zt.viewport)}}else Q.length>0&&jo(lt,Q,C,j),Ce&&Yt.render(C),Yo(y,C,j);k!==null&&B===0&&(P.updateMultisampleRenderTarget(k),P.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(w,C,j),Ue.resetDefaultState(),D=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],pt===!0&&Tt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Ya(C,j,rt,lt){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){lt&&qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Dt);const Ct=ht.update(C),Ut=C.material;Ut.visible&&y.push(C,Ct,Ut,rt,qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){const Ct=ht.update(C),Ut=C.material;if(lt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qt.copy(C.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),qt.copy(Ct.boundingSphere.center)),qt.applyMatrix4(C.matrixWorld).applyMatrix4(Dt)),Array.isArray(Ut)){const zt=Ct.groups;for(let Jt=0,jt=zt.length;Jt<jt;Jt++){const kt=zt[Jt],he=Ut[kt.materialIndex];he&&he.visible&&y.push(C,Ct,he,rt,qt.z,kt)}}else Ut.visible&&y.push(C,Ct,Ut,rt,qt.z,null)}}const Et=C.children;for(let Ct=0,Ut=Et.length;Ct<Ut;Ct++)Ya(Et[Ct],j,rt,lt)}function Yo(C,j,rt,lt){const Q=C.opaque,Et=C.transmissive,Ct=C.transparent;_.setupLightsView(rt),pt===!0&&Tt.setGlobalState(w.clippingPlanes,rt),lt&&Bt.viewport(U.copy(lt)),Q.length>0&&ja(Q,j,rt),Et.length>0&&ja(Et,j,rt),Ct.length>0&&ja(Ct,j,rt),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function jo(C,j,rt,lt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[lt.id]===void 0&&(_.state.transmissionRenderTarget[lt.id]=new bs(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?ko:ra,minFilter:Es,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Et=_.state.transmissionRenderTarget[lt.id],Ct=lt.viewport||U;Et.setSize(Ct.z*w.transmissionResolutionScale,Ct.w*w.transmissionResolutionScale);const Ut=w.getRenderTarget();w.setRenderTarget(Et),w.getClearColor(et),ct=w.getClearAlpha(),ct<1&&w.setClearColor(16777215,.5),w.clear(),Ce&&Yt.render(rt);const zt=w.toneMapping;w.toneMapping=Wa;const Jt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),_.setupLightsView(lt),pt===!0&&Tt.setGlobalState(w.clippingPlanes,lt),ja(C,rt,lt),P.updateMultisampleRenderTarget(Et),P.updateRenderTargetMipmap(Et),ue.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let kt=0,he=j.length;kt<he;kt++){const Ee=j[kt],We=Ee.object,ve=Ee.geometry,xe=Ee.material,Xt=Ee.group;if(xe.side===ea&&We.layers.test(lt.layers)){const Ye=xe.side;xe.side=Gn,xe.needsUpdate=!0,la(We,rt,lt,ve,xe,Xt),xe.side=Ye,xe.needsUpdate=!0,jt=!0}}jt===!0&&(P.updateMultisampleRenderTarget(Et),P.updateRenderTargetMipmap(Et))}w.setRenderTarget(Ut),w.setClearColor(et,ct),Jt!==void 0&&(lt.viewport=Jt),w.toneMapping=zt}function ja(C,j,rt){const lt=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Et=C.length;Q<Et;Q++){const Ct=C[Q],Ut=Ct.object,zt=Ct.geometry,Jt=lt===null?Ct.material:lt,jt=Ct.group;Ut.layers.test(rt.layers)&&la(Ut,j,rt,zt,Jt,jt)}}function la(C,j,rt,lt,Q,Et){C.onBeforeRender(w,j,rt,lt,Q,Et),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(w,j,rt,lt,C,Et),Q.transparent===!0&&Q.side===ea&&Q.forceSinglePass===!1?(Q.side=Gn,Q.needsUpdate=!0,w.renderBufferDirect(rt,j,lt,Q,C,Et),Q.side=qa,Q.needsUpdate=!0,w.renderBufferDirect(rt,j,lt,Q,C,Et),Q.side=ea):w.renderBufferDirect(rt,j,lt,Q,C,Et),C.onAfterRender(w,j,rt,lt,Q,Et)}function ca(C,j,rt){j.isScene!==!0&&(j=Le);const lt=Ft.get(C),Q=_.state.lights,Et=_.state.shadowsArray,Ct=Q.state.version,Ut=It.getParameters(C,Q.state,Et,j,rt),zt=It.getProgramCacheKey(Ut);let Jt=lt.programs;lt.environment=C.isMeshStandardMaterial?j.environment:null,lt.fog=j.fog,lt.envMap=(C.isMeshStandardMaterial?at:A).get(C.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Jt===void 0&&(C.addEventListener("dispose",ne),Jt=new Map,lt.programs=Jt);let jt=Jt.get(zt);if(jt!==void 0){if(lt.currentProgram===jt&&lt.lightsStateVersion===Ct)return Di(C,Ut),jt}else Ut.uniforms=It.getUniforms(C),C.onBeforeCompile(Ut,w),jt=It.acquireProgram(Ut,zt),Jt.set(zt,jt),lt.uniforms=Ut.uniforms;const kt=lt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=Tt.uniform),Di(C,Ut),lt.needsLights=tn(C),lt.lightsStateVersion=Ct,lt.needsLights&&(kt.ambientLightColor.value=Q.state.ambient,kt.lightProbe.value=Q.state.probe,kt.directionalLights.value=Q.state.directional,kt.directionalLightShadows.value=Q.state.directionalShadow,kt.spotLights.value=Q.state.spot,kt.spotLightShadows.value=Q.state.spotShadow,kt.rectAreaLights.value=Q.state.rectArea,kt.ltc_1.value=Q.state.rectAreaLTC1,kt.ltc_2.value=Q.state.rectAreaLTC2,kt.pointLights.value=Q.state.point,kt.pointLightShadows.value=Q.state.pointShadow,kt.hemisphereLights.value=Q.state.hemi,kt.directionalShadowMap.value=Q.state.directionalShadowMap,kt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,kt.spotShadowMap.value=Q.state.spotShadowMap,kt.spotLightMatrix.value=Q.state.spotLightMatrix,kt.spotLightMap.value=Q.state.spotLightMap,kt.pointShadowMap.value=Q.state.pointShadowMap,kt.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=jt,lt.uniformsList=null,jt}function wi(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Pc.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Di(C,j){const rt=Ft.get(C);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function Za(C,j,rt,lt,Q){j.isScene!==!0&&(j=Le),P.resetTextureUnits();const Et=j.fog,Ct=lt.isMeshStandardMaterial?j.environment:null,Ut=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Or,zt=(lt.isMeshStandardMaterial?at:A).get(lt.envMap||Ct),Jt=lt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,jt=!!rt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),kt=!!rt.morphAttributes.position,he=!!rt.morphAttributes.normal,Ee=!!rt.morphAttributes.color;let We=Wa;lt.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(We=w.toneMapping);const ve=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,xe=ve!==void 0?ve.length:0,Xt=Ft.get(lt),Ye=_.state.lights;if(pt===!0&&(yt===!0||C!==R)){const dn=C===R&&lt.id===D;Tt.setState(lt,C,dn)}let Se=!1;lt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ye.state.version||Xt.outputColorSpace!==Ut||Q.isBatchedMesh&&Xt.batching===!1||!Q.isBatchedMesh&&Xt.batching===!0||Q.isBatchedMesh&&Xt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Xt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Xt.instancing===!1||!Q.isInstancedMesh&&Xt.instancing===!0||Q.isSkinnedMesh&&Xt.skinning===!1||!Q.isSkinnedMesh&&Xt.skinning===!0||Q.isInstancedMesh&&Xt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xt.instancingMorph===!1&&Q.morphTexture!==null||Xt.envMap!==zt||lt.fog===!0&&Xt.fog!==Et||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Tt.numPlanes||Xt.numIntersection!==Tt.numIntersection)||Xt.vertexAlphas!==Jt||Xt.vertexTangents!==jt||Xt.morphTargets!==kt||Xt.morphNormals!==he||Xt.morphColors!==Ee||Xt.toneMapping!==We||Xt.morphTargetsCount!==xe)&&(Se=!0):(Se=!0,Xt.__version=lt.version);let An=Xt.currentProgram;Se===!0&&(An=ca(lt,j,Q));let fa=!1,Ge=!1,Ui=!1;const Be=An.getUniforms(),Rn=Xt.uniforms;if(Bt.useProgram(An.program)&&(fa=!0,Ge=!0,Ui=!0),lt.id!==D&&(D=lt.id,Ge=!0),fa||R!==C){Bt.buffers.depth.getReversed()?(bt.copy(C.projectionMatrix),MS(bt),ES(bt),Be.setValue(G,"projectionMatrix",bt)):Be.setValue(G,"projectionMatrix",C.projectionMatrix),Be.setValue(G,"viewMatrix",C.matrixWorldInverse);const yn=Be.map.cameraPosition;yn!==void 0&&yn.setValue(G,ie.setFromMatrixPosition(C.matrixWorld)),te.logarithmicDepthBuffer&&Be.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Be.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Ge=!0,Ui=!0)}if(Q.isSkinnedMesh){Be.setOptional(G,Q,"bindMatrix"),Be.setOptional(G,Q,"bindMatrixInverse");const dn=Q.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Be.setValue(G,"boneTexture",dn.boneTexture,P))}Q.isBatchedMesh&&(Be.setOptional(G,Q,"batchingTexture"),Be.setValue(G,"batchingTexture",Q._matricesTexture,P),Be.setOptional(G,Q,"batchingIdTexture"),Be.setValue(G,"batchingIdTexture",Q._indirectTexture,P),Be.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Be.setValue(G,"batchingColorTexture",Q._colorsTexture,P));const rn=rt.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Kt.update(Q,rt,An),(Ge||Xt.receiveShadow!==Q.receiveShadow)&&(Xt.receiveShadow=Q.receiveShadow,Be.setValue(G,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Rn.envMap.value=zt,Rn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&j.environment!==null&&(Rn.envMapIntensity.value=j.environmentIntensity),Ge&&(Be.setValue(G,"toneMappingExposure",w.toneMappingExposure),Xt.needsLights&&ua(Rn,Ui),Et&&lt.fog===!0&&At.refreshFogUniforms(Rn,Et),At.refreshMaterialUniforms(Rn,lt,X,Y,_.state.transmissionRenderTarget[C.id]),Pc.upload(G,wi(Xt),Rn,P)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Pc.upload(G,wi(Xt),Rn,P),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Be.setValue(G,"center",Q.center),Be.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Be.setValue(G,"normalMatrix",Q.normalMatrix),Be.setValue(G,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const dn=lt.uniformsGroups;for(let yn=0,xi=dn.length;yn<xi;yn++){const Ni=dn[yn];q.update(Ni,An),q.bind(Ni,An)}}return An}function ua(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function tn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,j,rt){Ft.get(C.texture).__webglTexture=j,Ft.get(C.depthTexture).__webglTexture=rt;const lt=Ft.get(C);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=rt===void 0,lt.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const rt=Ft.get(C);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0};const Zo=G.createFramebuffer();this.setRenderTarget=function(C,j=0,rt=0){k=C,H=j,B=rt;let lt=!0,Q=null,Et=!1,Ct=!1;if(C){const zt=Ft.get(C);if(zt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(G.FRAMEBUFFER,null),lt=!1;else if(zt.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(zt.__hasExternalTextures)P.rebindTextures(C,Ft.get(C.texture).__webglTexture,Ft.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const kt=C.depthTexture;if(zt.__boundDepthTexture!==kt){if(kt!==null&&Ft.has(kt)&&(C.width!==kt.image.width||C.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ct=!0);const jt=Ft.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[j])?Q=jt[j][rt]:Q=jt[j],Et=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?Q=Ft.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?Q=jt[rt]:Q=jt,U.copy(C.viewport),J.copy(C.scissor),W=C.scissorTest}else U.copy(nt).multiplyScalar(X).floor(),J.copy(vt).multiplyScalar(X).floor(),W=St;if(rt!==0&&(Q=Zo),Bt.bindFramebuffer(G.FRAMEBUFFER,Q)&&lt&&Bt.drawBuffers(C,Q),Bt.viewport(U),Bt.scissor(J),Bt.setScissorTest(W),Et){const zt=Ft.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,zt.__webglTexture,rt)}else if(Ct){const zt=Ft.get(C.texture),Jt=j;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,zt.__webglTexture,rt,Jt)}else if(C!==null&&rt!==0){const zt=Ft.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(C,j,rt,lt,Q,Et,Ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){Bt.bindFramebuffer(G.FRAMEBUFFER,Ut);try{const zt=C.texture,Jt=zt.format,jt=zt.type;if(!te.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-lt&&rt>=0&&rt<=C.height-Q&&G.readPixels(j,rt,lt,Q,ee.convert(Jt),ee.convert(jt),Et)}finally{const zt=k!==null?Ft.get(k).__webglFramebuffer:null;Bt.bindFramebuffer(G.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(C,j,rt,lt,Q,Et,Ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){const zt=C.texture,Jt=zt.format,jt=zt.type;if(!te.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-lt&&rt>=0&&rt<=C.height-Q){Bt.bindFramebuffer(G.FRAMEBUFFER,Ut);const kt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,kt),G.bufferData(G.PIXEL_PACK_BUFFER,Et.byteLength,G.STREAM_READ),G.readPixels(j,rt,lt,Q,ee.convert(Jt),ee.convert(jt),0);const he=k!==null?Ft.get(k).__webglFramebuffer:null;Bt.bindFramebuffer(G.FRAMEBUFFER,he);const Ee=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await SS(G,Ee,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,kt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Et),G.deleteBuffer(kt),G.deleteSync(Ee),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,rt=0){C.isTexture!==!0&&(vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const lt=Math.pow(2,-rt),Q=Math.floor(C.image.width*lt),Et=Math.floor(C.image.height*lt),Ct=j!==null?j.x:0,Ut=j!==null?j.y:0;P.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Ct,Ut,Q,Et),Bt.unbindTexture()};const Ko=G.createFramebuffer(),Li=G.createFramebuffer();this.copyTextureToTexture=function(C,j,rt=null,lt=null,Q=0,Et=null){C.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,C=arguments[1],j=arguments[2],Et=arguments[3]||0,rt=null),Et===null&&(Q!==0?(vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Q,Q=0):Et=0);let Ct,Ut,zt,Jt,jt,kt,he,Ee,We;const ve=C.isCompressedTexture?C.mipmaps[Et]:C.image;if(rt!==null)Ct=rt.max.x-rt.min.x,Ut=rt.max.y-rt.min.y,zt=rt.isBox3?rt.max.z-rt.min.z:1,Jt=rt.min.x,jt=rt.min.y,kt=rt.isBox3?rt.min.z:0;else{const rn=Math.pow(2,-Q);Ct=Math.floor(ve.width*rn),Ut=Math.floor(ve.height*rn),C.isDataArrayTexture?zt=ve.depth:C.isData3DTexture?zt=Math.floor(ve.depth*rn):zt=1,Jt=0,jt=0,kt=0}lt!==null?(he=lt.x,Ee=lt.y,We=lt.z):(he=0,Ee=0,We=0);const xe=ee.convert(j.format),Xt=ee.convert(j.type);let Ye;j.isData3DTexture?(P.setTexture3D(j,0),Ye=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(P.setTexture2DArray(j,0),Ye=G.TEXTURE_2D_ARRAY):(P.setTexture2D(j,0),Ye=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const Se=G.getParameter(G.UNPACK_ROW_LENGTH),An=G.getParameter(G.UNPACK_IMAGE_HEIGHT),fa=G.getParameter(G.UNPACK_SKIP_PIXELS),Ge=G.getParameter(G.UNPACK_SKIP_ROWS),Ui=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ve.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ve.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,kt);const Be=C.isDataArrayTexture||C.isData3DTexture,Rn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const rn=Ft.get(C),dn=Ft.get(j),yn=Ft.get(rn.__renderTarget),xi=Ft.get(dn.__renderTarget);Bt.bindFramebuffer(G.READ_FRAMEBUFFER,yn.__webglFramebuffer),Bt.bindFramebuffer(G.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Ni=0;Ni<zt;Ni++)Be&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(C).__webglTexture,Q,kt+Ni),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(j).__webglTexture,Et,We+Ni)),G.blitFramebuffer(Jt,jt,Ct,Ut,he,Ee,Ct,Ut,G.DEPTH_BUFFER_BIT,G.NEAREST);Bt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Ft.has(C)){const rn=Ft.get(C),dn=Ft.get(j);Bt.bindFramebuffer(G.READ_FRAMEBUFFER,Ko),Bt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Li);for(let yn=0;yn<zt;yn++)Be?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rn.__webglTexture,Q,kt+yn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,rn.__webglTexture,Q),Rn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,Et,We+yn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,Et),Q!==0?G.blitFramebuffer(Jt,jt,Ct,Ut,he,Ee,Ct,Ut,G.COLOR_BUFFER_BIT,G.NEAREST):Rn?G.copyTexSubImage3D(Ye,Et,he,Ee,We+yn,Jt,jt,Ct,Ut):G.copyTexSubImage2D(Ye,Et,he,Ee,Jt,jt,Ct,Ut);Bt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Rn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Ye,Et,he,Ee,We,Ct,Ut,zt,xe,Xt,ve.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(Ye,Et,he,Ee,We,Ct,Ut,zt,xe,ve.data):G.texSubImage3D(Ye,Et,he,Ee,We,Ct,Ut,zt,xe,Xt,ve):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Et,he,Ee,Ct,Ut,xe,Xt,ve.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Et,he,Ee,ve.width,ve.height,xe,ve.data):G.texSubImage2D(G.TEXTURE_2D,Et,he,Ee,Ct,Ut,xe,Xt,ve);G.pixelStorei(G.UNPACK_ROW_LENGTH,Se),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,An),G.pixelStorei(G.UNPACK_SKIP_PIXELS,fa),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ge),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ui),Et===0&&j.generateMipmaps&&G.generateMipmap(Ye),Bt.unbindTexture()},this.copyTextureToTexture3D=function(C,j,rt=null,lt=null,Q=0){return C.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,lt=arguments[1]||null,C=arguments[2],j=arguments[3],Q=arguments[4]||0),vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,rt,lt,Q)},this.initRenderTarget=function(C){Ft.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Bt.unbindTexture()},this.resetState=function(){H=0,B=0,k=null,Bt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}const A0={type:"change"},Bd={type:"start"},vv={type:"end"},Ac=new Ir,R0=new Ga,qA=Math.cos(70*xS.DEG2RAD),cn=new K,Hn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uh=1e-6;class YA extends lM{constructor(t,i=null){super(t,i),this.state=ze.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Sr.ROTATE,TWO:Sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new As,this._lastTargetPosition=new K,this._quat=new As().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new t0,this._sphericalDelta=new t0,this._scale=1,this._panOffset=new K,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new K,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ZA.bind(this),this._onPointerDown=jA.bind(this),this._onPointerUp=KA.bind(this),this._onContextMenu=i1.bind(this),this._onMouseWheel=$A.bind(this),this._onKeyDown=t1.bind(this),this._onTouchStart=e1.bind(this),this._onTouchMove=n1.bind(this),this._onMouseDown=QA.bind(this),this._onMouseMove=JA.bind(this),this._interceptControlDown=a1.bind(this),this._interceptControlUp=s1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(A0),this.update(),this.state=ze.NONE}update(t=null){const i=this.object.position;cn.copy(i).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Hn:s>Math.PI&&(s-=Hn),l<-Math.PI?l+=Hn:l>Math.PI&&(l-=Hn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=cn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<qA?this.object.lookAt(this.target):(R0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(R0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Uh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uh||this._lastTargetPosition.distanceToSquared(this.target)>Uh?(this.dispatchEvent(A0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Hn/60*this.autoRotateSpeed*t:Hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){cn.setFromMatrixColumn(i,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,i){this.screenSpacePanning===!0?cn.setFromMatrixColumn(i,1):(cn.setFromMatrixColumn(i,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;cn.copy(l).sub(this.target);let c=cn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Wt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function jA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function ZA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function KA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vv),this.state=ze.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function QA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ze.DOLLY;break;case Tr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ze.ROTATE}break;case Tr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Bd)}function JA(r){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function $A(r){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(r.preventDefault(),this.dispatchEvent(Bd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(vv))}function t1(r){this.enabled!==!1&&this._handleKeyDown(r)}function e1(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Sr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ze.TOUCH_ROTATE;break;case Sr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case Sr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ze.TOUCH_DOLLY_PAN;break;case Sr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Bd)}function n1(r){switch(this._trackPointer(r),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ze.NONE}}function i1(r){this.enabled!==!1&&r.preventDefault()}function a1(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s1(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const C0=0,w0=1,D0=2,L0=3,U0=4,N0=5,Nh=0,r1=1,o1=2,l1=3,c1=4,u1=5,O0=6,ka="16",Cr="24",Rc=$n,Gc=new K,Vc=new K;class f1 extends cv{constructor(t,i){super(t,i),this.isConditionalLine=!0}}function h1(r){for(let t=0,i=r.length;t<i;t++){const s=r[t],l=s.vertices,c=l[0],h=l[1],d=l[2];Gc.subVectors(h,c),Vc.subVectors(d,h),s.faceNormal=new K().crossVectors(Gc,Vc).normalize()}}const P0=new Ir;function d1(r,t,i=!1){const s=100.00000001000001;function l(v){const S=~~(v.x*s),E=~~(v.y*s),T=~~(v.z*s);return`${S},${E},${T}`}function c(v,S){return`${l(v)}_${l(S)}`}function h(v,S,E){E.direction.subVectors(S,v).normalize();const T=v.dot(E.direction);return E.origin.copy(v).addScaledVector(E.direction,-T),E}function d(v){return c(v.origin,v.direction)}const m=new Set,p=new Map,g={},x=[];for(let v=0,S=t.length;v<S;v++){const T=t[v].vertices,y=T[0],_=T[1];if(m.add(c(y,_)),m.add(c(_,y)),i){const O=h(y,_,new Ir),L=d(O);if(!p.has(L)){h(_,y,O);const B=d(O),k={ray:O,distances:[]};p.set(L,k),p.set(B,k)}const w=p.get(L);let z=w.ray.direction.dot(y),H=w.ray.direction.dot(_);z>H&&([z,H]=[H,z]),w.distances.push(z,H)}}for(let v=0,S=r.length;v<S;v++){const E=r[v],T=E.vertices,y=T.length;for(let _=0;_<y;_++){const O=_,L=(_+1)%y,w=T[O],z=T[L],H=c(w,z);if(m.has(H))continue;if(i){h(w,z,P0);const k=d(P0);if(p.has(k)){const D=p.get(k),{ray:R,distances:U}=D;let J=R.direction.dot(w),W=R.direction.dot(z);J>W&&([J,W]=[W,J]);let et=!1;for(let ct=0,I=U.length;ct<I;ct+=2)if(J>=U[ct]&&W<=U[ct+1]){et=!0;break}if(et)continue}}const B={index:O,tri:E};g[H]=B}}for(;;){let v=null;for(const E in g){v=g[E];break}if(v===null)break;const S=[v];for(;S.length>0;){const E=S.pop().tri,T=E.vertices,y=E.normals,_=E.faceNormal,O=T.length;for(let L=0;L<O;L++){const w=L,z=(L+1)%O,H=T[w],B=T[z],k=c(H,B);delete g[k];const D=c(B,H),R=g[D];if(R){const U=R.tri,J=R.index,W=U.normals,et=W.length,ct=U.faceNormal;if(Math.abs(U.faceNormal.dot(E.faceNormal))<.25)continue;D in g&&(S.push(R),delete g[D]);const I=(J+1)%et;y[w]&&W[I]&&y[w]!==W[I]&&(W[I].norm.add(y[w].norm),y[w].norm=W[I].norm);let Y=y[w]||W[I];Y===null&&(Y={norm:new K},x.push(Y.norm)),y[w]===null&&(y[w]=Y,Y.norm.add(_)),W[I]===null&&(W[I]=Y,Y.norm.add(ct)),y[z]&&W[J]&&y[z]!==W[J]&&(W[J].norm.add(y[z].norm),y[z].norm=W[J].norm);let X=y[z]||W[J];X===null&&(X={norm:new K},x.push(X.norm)),y[z]===null&&(y[z]=X,X.norm.add(_)),W[J]===null&&(W[J]=X,X.norm.add(ct))}}}}for(let v=0,S=x.length;v<S;v++)x[v].normalize()}function I0(r){return r==="Part"||r==="Unofficial_Part"}function p1(r){return/primitive/i.test(r)||r==="Subpart"}class xr{constructor(t,i){this.line=t,this.lineLength=t.length,this.currentCharIndex=0,this.currentChar=" ",this.lineNumber=i}seekNonSpace(){for(;this.currentCharIndex<this.lineLength;){if(this.currentChar=this.line.charAt(this.currentCharIndex),this.currentChar!==" "&&this.currentChar!=="	")return;this.currentCharIndex++}}getToken(){const t=this.currentCharIndex++;for(;this.currentCharIndex<this.lineLength&&(this.currentChar=this.line.charAt(this.currentCharIndex),!(this.currentChar===" "||this.currentChar==="	"));)this.currentCharIndex++;const i=this.currentCharIndex;return this.seekNonSpace(),this.line.substring(t,i)}getVector(){return new K(parseFloat(this.getToken()),parseFloat(this.getToken()),parseFloat(this.getToken()))}getRemainingString(){return this.line.substring(this.currentCharIndex,this.lineLength)}isAtTheEnd(){return this.currentCharIndex>=this.lineLength}setToEnd(){this.currentCharIndex=this.lineLength}getLineNumberString(){return this.lineNumber>=0?" at line "+this.lineNumber:""}}class m1{constructor(t){this.loader=t,this._cache={}}cloneResult(t){const i={};return i.faces=t.faces.map(s=>({colorCode:s.colorCode,material:s.material,vertices:s.vertices.map(l=>l.clone()),normals:s.normals.map(()=>null),faceNormal:null})),i.conditionalSegments=t.conditionalSegments.map(s=>({colorCode:s.colorCode,material:s.material,vertices:s.vertices.map(l=>l.clone()),controlPoints:s.controlPoints.map(l=>l.clone())})),i.lineSegments=t.lineSegments.map(s=>({colorCode:s.colorCode,material:s.material,vertices:s.vertices.map(l=>l.clone())})),i.type=t.type,i.category=t.category,i.keywords=t.keywords,i.author=t.author,i.subobjects=t.subobjects,i.fileName=t.fileName,i.totalFaces=t.totalFaces,i.startingBuildingStep=t.startingBuildingStep,i.materials=t.materials,i.group=null,i}async fetchData(t){let i=!1,s=Nh;for(;s!==O0;){let l=t;switch(s){case l1:s=s+1;break;case Nh:l="parts/"+l,s=s+1;break;case r1:l="p/"+l,s=s+1;break;case o1:l="models/"+l,s=s+1;break;case c1:l=t.substring(0,t.lastIndexOf("/")+1)+l,s=s+1;break;case u1:i?s=O0:(t=t.toLowerCase(),l=t,i=!0,s=Nh);break}const c=this.loader,h=new Ed(c.manager);h.setPath(c.partsLibraryPath),h.setRequestHeader(c.requestHeader),h.setWithCredentials(c.withCredentials);try{return await h.loadAsync(l)}catch{continue}}throw new Error('LDrawLoader: Subobject "'+t+'" could not be loaded.')}parse(t,i=null){const s=this.loader,l=[],c=[],h=[],d=[],m={},p=D=>m[D]||null;let g="Model",x=null,v=null,S=null,E=0;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`));const T=t.split(`
`),y=T.length;let _=!1,O=null,L=null,w=!1,z=!0,H=!1,B=!0,k=!1;for(let D=0;D<y;D++){const R=T[D];if(R.length===0)continue;if(_){R.startsWith("0 FILE ")?(this.setData(O,L),O=R.substring(7),L=""):L+=R+`
`;continue}const U=new xr(R,D+1);if(U.seekNonSpace(),U.isAtTheEnd())continue;const J=U.getToken();let W,et,ct,I,Y,X,mt,N,nt,vt,St;switch(J){case"0":const $=U.getToken();if($)switch($){case"!LDRAW_ORG":g=U.getToken();break;case"!COLOUR":W=s.parseColorMetaDirective(U),W?m[W.userData.code]=W:console.warn("LDrawLoader: Error parsing material"+U.getLineNumberString());break;case"!CATEGORY":x=U.getToken();break;case"!KEYWORDS":const Ae=U.getRemainingString().split(",");Ae.length>0&&(v||(v=[]),Ae.forEach(function(Ft){v.push(Ft.trim())}));break;case"FILE":D>0&&(_=!0,O=U.getRemainingString(),L="",w=!1,z=!0);break;case"BFC":for(;!U.isAtTheEnd();){const Ft=U.getToken();switch(Ft){case"CERTIFY":case"NOCERTIFY":w=Ft==="CERTIFY",z=!0;break;case"CW":case"CCW":z=Ft==="CCW";break;case"INVERTNEXT":H=!0;break;case"CLIP":case"NOCLIP":B=Ft==="CLIP";break;default:console.warn('THREE.LDrawLoader: BFC directive "'+Ft+'" is unknown.');break}}break;case"STEP":k=!0;break;case"Author:":S=U.getToken();break}break;case"1":et=U.getToken(),W=p(et);const pt=parseFloat(U.getToken()),yt=parseFloat(U.getToken()),bt=parseFloat(U.getToken()),Dt=parseFloat(U.getToken()),ie=parseFloat(U.getToken()),qt=parseFloat(U.getToken()),Le=parseFloat(U.getToken()),Ce=parseFloat(U.getToken()),re=parseFloat(U.getToken()),G=parseFloat(U.getToken()),bn=parseFloat(U.getToken()),ue=parseFloat(U.getToken()),te=new ke().set(Dt,ie,qt,pt,Le,Ce,re,yt,G,bn,ue,bt,0,0,0,1);let Bt=U.getRemainingString().trim().replace(/\\/g,"/");s.fileMap[Bt]?Bt=s.fileMap[Bt]:Bt.startsWith("s/")?Bt="parts/"+Bt:Bt.startsWith("48/")&&(Bt="p/"+Bt),d.push({material:W,colorCode:et,matrix:te,fileName:Bt,inverted:H,startingBuildingStep:k}),k=!1,H=!1;break;case"2":et=U.getToken(),W=p(et),X=U.getVector(),mt=U.getVector(),ct={material:W,colorCode:et,vertices:[X,mt]},c.push(ct);break;case"5":et=U.getToken(),W=p(et),X=U.getVector(),mt=U.getVector(),vt=U.getVector(),St=U.getVector(),ct={material:W,colorCode:et,vertices:[X,mt],controlPoints:[vt,St]},h.push(ct);break;case"3":et=U.getToken(),W=p(et),I=z,Y=!w||!B,I===!0?(X=U.getVector(),mt=U.getVector(),N=U.getVector()):(N=U.getVector(),mt=U.getVector(),X=U.getVector()),l.push({material:W,colorCode:et,faceNormal:null,vertices:[X,mt,N],normals:[null,null,null]}),E++,Y===!0&&(l.push({material:W,colorCode:et,faceNormal:null,vertices:[N,mt,X],normals:[null,null,null]}),E++);break;case"4":et=U.getToken(),W=p(et),I=z,Y=!w||!B,I===!0?(X=U.getVector(),mt=U.getVector(),N=U.getVector(),nt=U.getVector()):(nt=U.getVector(),N=U.getVector(),mt=U.getVector(),X=U.getVector()),l.push({material:W,colorCode:et,faceNormal:null,vertices:[X,mt,N,nt],normals:[null,null,null,null]}),E+=2,Y===!0&&(l.push({material:W,colorCode:et,faceNormal:null,vertices:[nt,N,mt,X],normals:[null,null,null,null]}),E+=2);break;default:throw new Error('LDrawLoader: Unknown line type "'+J+'"'+U.getLineNumberString()+".")}}return _&&this.setData(O,L),{faces:l,conditionalSegments:h,lineSegments:c,type:g,category:x,keywords:v,author:S,subobjects:d,totalFaces:E,startingBuildingStep:k,materials:m,fileName:i,group:null}}getData(t,i=!0){const s=t.toLowerCase(),l=this._cache[s];return l===null||l instanceof Promise?null:i?this.cloneResult(l):l}async ensureDataLoaded(t){const i=t.toLowerCase();i in this._cache||(this._cache[i]=this.fetchData(t).then(s=>{const l=this.parse(s,t);return this._cache[i]=l,l})),await this._cache[i]}setData(t,i){const s=t.toLowerCase();this._cache[s]=this.parse(i,t)}}function Oh(r,t,i,s){return(!s&&r===ka||s&&r===Cr)&&(r=t),i[r]||null}class g1{constructor(t){this.loader=t,this.parseCache=new m1(t),this._cache={}}async processIntoMesh(t){const i=this.loader,s=this.parseCache,l=new Set,c=async(d,m=null)=>{const p=d.subobjects,g=[];for(let S=0,E=p.length;S<E;S++){const T=p[S],y=s.ensureDataLoaded(T.fileName).then(()=>{const _=s.getData(T.fileName,!1);return p1(_.type)?c(s.getData(T.fileName),T):this.loadModel(T.fileName).catch(O=>(console.warn(O),null))});g.push(y)}const x=new Ho;x.userData.category=d.category,x.userData.keywords=d.keywords,x.userData.author=d.author,x.userData.type=d.type,x.userData.fileName=d.fileName,d.group=x;const v=await Promise.all(g);for(let S=0,E=v.length;S<E;S++){const T=d.subobjects[S],y=v[S];if(y===null)continue;if(y.isGroup){const J=y;T.matrix.decompose(J.position,J.quaternion,J.scale),J.userData.startingBuildingStep=T.startingBuildingStep,J.name=T.fileName,i.applyMaterialsToMesh(J,T.colorCode,d.materials),J.userData.colorCode=T.colorCode,x.add(J);continue}y.group.children.length&&x.add(y.group);const _=d.lineSegments,O=d.conditionalSegments,L=d.faces,w=y.lineSegments,z=y.conditionalSegments,H=y.faces,B=T.matrix,k=T.inverted,D=B.determinant()<0,R=T.colorCode,U=R===ka?Cr:R;for(let J=0,W=w.length;J<W;J++){const et=w[J],ct=et.vertices;ct[0].applyMatrix4(B),ct[1].applyMatrix4(B),et.colorCode=et.colorCode===Cr?U:et.colorCode,et.material=et.material||Oh(et.colorCode,et.colorCode,d.materials,!0),_.push(et)}for(let J=0,W=z.length;J<W;J++){const et=z[J],ct=et.vertices,I=et.controlPoints;ct[0].applyMatrix4(B),ct[1].applyMatrix4(B),I[0].applyMatrix4(B),I[1].applyMatrix4(B),et.colorCode=et.colorCode===Cr?U:et.colorCode,et.material=et.material||Oh(et.colorCode,et.colorCode,d.materials,!0),O.push(et)}for(let J=0,W=H.length;J<W;J++){const et=H[J],ct=et.vertices;for(let I=0,Y=ct.length;I<Y;I++)ct[I].applyMatrix4(B);et.colorCode=et.colorCode===ka?R:et.colorCode,et.material=et.material||Oh(et.colorCode,R,d.materials,!1),l.add(et.colorCode),D!==k&&ct.reverse(),L.push(et)}d.totalFaces+=y.totalFaces}return m&&(i.applyMaterialsToMesh(x,m.colorCode,d.materials),x.userData.colorCode=m.colorCode),d};for(let d=0,m=t.faces;d<m;d++)l.add(t.faces[d].colorCode);if(await c(t),i.smoothNormals){const d=l.size>1;h1(t.faces),d1(t.faces,t.lineSegments,d)}const h=t.group;return t.faces.length>0&&h.add(Ph(this.loader,t.faces,3,!1,t.totalFaces)),t.lineSegments.length>0&&h.add(Ph(this.loader,t.lineSegments,2)),t.conditionalSegments.length>0&&h.add(Ph(this.loader,t.conditionalSegments,2,!0)),h}hasCachedModel(t){return t!==null&&t.toLowerCase()in this._cache}async getCachedModel(t){if(t!==null&&this.hasCachedModel(t)){const i=t.toLowerCase();return(await this._cache[i]).clone()}else return null}async loadModel(t){const i=this.parseCache,s=t.toLowerCase();if(this.hasCachedModel(t))return this.getCachedModel(t);{await i.ensureDataLoaded(t);const l=i.getData(t),c=this.processIntoMesh(l);return this.hasCachedModel(t)?this.getCachedModel(t):(I0(l.type)&&(this._cache[s]=c),(await c).clone())}}async parseModel(t){const s=this.parseCache.parse(t);return I0(s.type)&&this.hasCachedModel(s.fileName)?this.getCachedModel(s.fileName):this.processIntoMesh(s)}}function _1(r,t){return r.colorCode===t.colorCode?0:r.colorCode<t.colorCode?-1:1}function Ph(r,t,i,s=!1,l=null){t.sort(_1),l===null&&(l=t.length);const c=new Float32Array(i*l*3),h=i===3?new Float32Array(i*l*3):null,d=[],m=new Array(6),p=new Ci;let g=null,x=0,v=0,S=0;for(let T=0,y=t.length;T<y;T++){const _=t[T];let O=_.vertices;O.length===4&&(m[0]=O[0],m[1]=O[1],m[2]=O[2],m[3]=O[0],m[4]=O[2],m[5]=O[3],O=m);for(let L=0,w=O.length;L<w;L++){const z=O[L],H=S+L*3;c[H+0]=z.x,c[H+1]=z.y,c[H+2]=z.z}if(i===3){if(!_.faceNormal){const w=O[0],z=O[1],H=O[2];Gc.subVectors(z,w),Vc.subVectors(H,z),_.faceNormal=new K().crossVectors(Gc,Vc).normalize()}let L=_.normals;L.length===4&&(m[0]=L[0],m[1]=L[1],m[2]=L[2],m[3]=L[0],m[4]=L[2],m[5]=L[3],L=m);for(let w=0,z=L.length;w<z;w++){let H=_.faceNormal;L[w]&&(H=L[w].norm);const B=S+w*3;h[B+0]=H.x,h[B+1]=H.y,h[B+2]=H.z}}if(g!==_.colorCode){g!==null&&p.addGroup(x,v,d.length-1);const L=_.material;if(L!==null){if(i===3)d.push(L);else if(i===2)if(s){const w=r.edgeMaterialCache.get(L);d.push(r.conditionalEdgeMaterialCache.get(w))}else d.push(r.edgeMaterialCache.get(L))}else d.push(_.colorCode);g=_.colorCode,x=S/3,v=O.length}else v+=O.length;S+=3*O.length}v>0&&p.addGroup(x,1/0,d.length-1),p.setAttribute("position",new Tn(c,3)),h!==null&&p.setAttribute("normal",new Tn(h,3));let E=null;if(i===2?s?E=new f1(p,d.length===1?d[0]:d):E=new cv(p,d.length===1?d[0]:d):i===3&&(E=new ci(p,d.length===1?d[0]:d)),s){E.isConditionalLine=!0;const T=new Float32Array(t.length*3*2),y=new Float32Array(t.length*3*2),_=new Float32Array(t.length*3*2);for(let O=0,L=t.length;O<L;O++){const w=t[O],z=w.vertices,H=w.controlPoints,B=H[0],k=H[1],D=z[0],R=z[1],U=O*3*2;T[U+0]=B.x,T[U+1]=B.y,T[U+2]=B.z,T[U+3]=B.x,T[U+4]=B.y,T[U+5]=B.z,y[U+0]=k.x,y[U+1]=k.y,y[U+2]=k.z,y[U+3]=k.x,y[U+4]=k.y,y[U+5]=k.z,_[U+0]=R.x-D.x,_[U+1]=R.y-D.y,_[U+2]=R.z-D.z,_[U+3]=R.x-D.x,_[U+4]=R.y-D.y,_[U+5]=R.z-D.z}p.setAttribute("control0",new Tn(T,3,!1)),p.setAttribute("control1",new Tn(y,3,!1)),p.setAttribute("direction",new Tn(_,3,!1))}return E}class v1 extends Mr{constructor(t){super(t),this.materials=[],this.materialLibrary={},this.edgeMaterialCache=new WeakMap,this.conditionalEdgeMaterialCache=new WeakMap,this.partsCache=new g1(this),this.fileMap={},this.smoothNormals=!0,this.partsLibraryPath="",this.ConditionalLineMaterial=null,this.missingColorMaterial=new Ha({name:Mr.DEFAULT_MATERIAL_NAME,color:16711935,roughness:.3,metalness:0}),this.missingEdgeColorMaterial=new Md({name:Mr.DEFAULT_MATERIAL_NAME,color:16711935}),this.missingConditionalEdgeColorMaterial=null,this.edgeMaterialCache.set(this.missingColorMaterial,this.missingEdgeColorMaterial),this.conditionalEdgeMaterialCache.set(this.missingEdgeColorMaterial,this.missingConditionalEdgeColorMaterial)}setPartsLibraryPath(t){return this.partsLibraryPath=t,this}setConditionalLineMaterial(t){return this.ConditionalLineMaterial=t,this.missingConditionalEdgeColorMaterial=new this.ConditionalLineMaterial({name:Mr.DEFAULT_MATERIAL_NAME,fog:!0,color:16711935}),this}async preloadMaterials(t){const i=new Ed(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials);const s=await i.loadAsync(t),l=/^0 !COLOUR/,c=s.split(/[\n\r]/g),h=[];for(let d=0,m=c.length;d<m;d++){const p=c[d];if(l.test(p)){const g=p.replace(l,""),x=this.parseColorMetaDirective(new xr(g));h.push(x)}}this.setMaterials(h)}load(t,i,s,l){const c=new Ed(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,h=>{this.setMaterials([]),this.partsCache.parseModel(h,this.materialLibrary).then(d=>{this.applyMaterialsToMesh(d,ka,this.materialLibrary,!0),this.computeBuildingSteps(d),d.userData.fileName=t,i(d)}).catch(l)},s,l)}parse(t,i,s){this.partsCache.parseModel(t,this.materialLibrary).then(l=>{this.applyMaterialsToMesh(l,ka,this.materialLibrary,!0),this.computeBuildingSteps(l),l.userData.fileName="",i(l)}).catch(s)}setMaterials(t){this.materialLibrary={},this.materials=[];for(let i=0,s=t.length;i<s;i++)this.addMaterial(t[i]);return this.addMaterial(this.parseColorMetaDirective(new xr("Main_Colour CODE 16 VALUE #FF8080 EDGE #333333"))),this.addMaterial(this.parseColorMetaDirective(new xr("Edge_Colour CODE 24 VALUE #A0A0A0 EDGE #333333"))),this}setFileMap(t){return this.fileMap=t,this}addMaterial(t){const i=this.materialLibrary;return i[t.userData.code]||(this.materials.push(t),i[t.userData.code]=t),this}getMaterial(t){if(t.startsWith("0x2")){const i=t.substring(3);return this.parseColorMetaDirective(new xr("Direct_Color_"+i+" CODE -1 VALUE #"+i+" EDGE #"+i))}return this.materialLibrary[t]||null}applyMaterialsToMesh(t,i,s,l=!1){const c=this,h=i===ka;t.traverse(m=>{if(m.isMesh||m.isLineSegments)if(Array.isArray(m.material))for(let p=0,g=m.material.length;p<g;p++)m.material[p].isMaterial||(m.material[p]=d(m,m.material[p]));else m.material.isMaterial||(m.material=d(m,m.material))});function d(m,p){if(h&&!(p in s)&&!l)return p;const g=m.isLineSegments||m.isConditionalLine;(!g&&p===ka||g&&p===Cr)&&(p=i);let v=null;if(p in s)v=s[p];else if(l)v=c.getMaterial(p),v===null&&(console.warn(`LDrawLoader: Material properties for code ${p} not available.`),v=c.missingColorMaterial);else return p;return m.isLineSegments&&(v=c.edgeMaterialCache.get(v),m.isConditionalLine&&(v=c.conditionalEdgeMaterialCache.get(v))),v}}getMainMaterial(){return this.getMaterial(ka)}getMainEdgeMaterial(){const t=this.getMaterial(Cr);return t?this.edgeMaterialCache.get(t):null}parseColorMetaDirective(t){let i=null,s="#FF00FF",l="#FF00FF",c=1,h=!1,d=0,m=C0,p=null;const g=t.getToken();if(!g)throw new Error('LDrawLoader: Material name was expected after "!COLOUR tag'+t.getLineNumberString()+".");let x=null;for(;x=t.getToken(),!!x;)if(!S(x))switch(x.toUpperCase()){case"CODE":i=t.getToken();break;case"VALUE":if(s=t.getToken(),s.startsWith("0x"))s="#"+s.substring(2);else if(!s.startsWith("#"))throw new Error("LDrawLoader: Invalid color while parsing material"+t.getLineNumberString()+".");break;case"EDGE":if(l=t.getToken(),l.startsWith("0x"))l="#"+l.substring(2);else if(!l.startsWith("#")){if(p=this.getMaterial(l),!p)throw new Error("LDrawLoader: Invalid edge color while parsing material"+t.getLineNumberString()+".");p=this.edgeMaterialCache.get(p)}break;case"ALPHA":if(c=parseInt(t.getToken()),isNaN(c))throw new Error("LDrawLoader: Invalid alpha value in material definition"+t.getLineNumberString()+".");c=Math.max(0,Math.min(1,c/255)),c<1&&(h=!0);break;case"LUMINANCE":if(!S(t.getToken()))throw new Error("LDrawLoader: Invalid luminance value in material definition"+xr.getLineNumberString()+".");break;case"CHROME":m=w0;break;case"PEARLESCENT":m=D0;break;case"RUBBER":m=L0;break;case"MATTE_METALLIC":m=U0;break;case"METAL":m=N0;break;case"MATERIAL":t.setToEnd();break;default:throw new Error('LDrawLoader: Unknown token "'+x+'" while parsing material'+t.getLineNumberString()+".")}let v=null;switch(m){case C0:v=new Ha({roughness:.3,metalness:0});break;case D0:v=new Ha({roughness:.3,metalness:.25});break;case w0:v=new Ha({roughness:0,metalness:1});break;case L0:v=new Ha({roughness:.9,metalness:0});break;case U0:v=new Ha({roughness:.8,metalness:.4});break;case N0:v=new Ha({roughness:.2,metalness:.85});break}if(v.color.setStyle(s,Rc),v.transparent=h,v.premultipliedAlpha=!0,v.opacity=c,v.depthWrite=!h,v.polygonOffset=!0,v.polygonOffsetFactor=1,d!==0&&v.emissive.setStyle(s,Rc).multiplyScalar(d),!p){if(p=new Md({color:new ge().setStyle(l,Rc),transparent:h,opacity:c,depthWrite:!h}),p.color,p.userData.code=i,p.name=g+" - Edge",this.ConditionalLineMaterial===null)throw new Error("THREE.LDrawLoader: ConditionalLineMaterial type must be specified via .setConditionalLineMaterial().");const E=new this.ConditionalLineMaterial({fog:!0,transparent:h,depthWrite:!h,color:new ge().setStyle(l,Rc),opacity:c});E.userData.code=i,E.name=g+" - Conditional Edge",this.conditionalEdgeMaterialCache.set(p,E)}return v.userData.code=i,v.name=g,this.edgeMaterialCache.set(v,p),this.addMaterial(v),v;function S(E){let T;return E.startsWith("LUMINANCE")?T=parseInt(E.substring(9)):T=parseInt(E),isNaN(T)?!1:(d=Math.max(0,Math.min(1,T/255)),!0)}}computeBuildingSteps(t){let i=0;t.traverse(s=>{s.isGroup&&(s.userData.startingBuildingStep&&i++,s.userData.buildingStep=i)}),t.userData.numBuildingSteps=i+1}}function x1(r,t=!1){const i=r[0].index!==null,s=new Set(Object.keys(r[0].attributes)),l=new Set(Object.keys(r[0].morphAttributes)),c={},h={},d=r[0].morphTargetsRelative,m=new Ci;let p=0;for(let g=0;g<r.length;++g){const x=r[g];let v=0;if(i!==(x.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const S in x.attributes){if(!s.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+S+'" attribute exists among all geometries, or in none of them.'),null;c[S]===void 0&&(c[S]=[]),c[S].push(x.attributes[S]),v++}if(v!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(d!==x.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const S in x.morphAttributes){if(!l.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;h[S]===void 0&&(h[S]=[]),h[S].push(x.morphAttributes[S])}if(t){let S;if(i)S=x.index.count;else if(x.attributes.position!==void 0)S=x.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;m.addGroup(p,S,g),p+=S}}if(i){let g=0;const x=[];for(let v=0;v<r.length;++v){const S=r[v].index;for(let E=0;E<S.count;++E)x.push(S.getX(E)+g);g+=r[v].attributes.position.count}m.setIndex(x)}for(const g in c){const x=z0(c[g]);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;m.setAttribute(g,x)}for(const g in h){const x=h[g][0].length;if(x===0)break;m.morphAttributes=m.morphAttributes||{},m.morphAttributes[g]=[];for(let v=0;v<x;++v){const S=[];for(let T=0;T<h[g].length;++T)S.push(h[g][T][v]);const E=z0(S);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;m.morphAttributes[g].push(E)}}return m}function z0(r){let t,i,s,l=-1,c=0;for(let p=0;p<r.length;++p){const g=r[p];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=g.itemSize),i!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=g.normalized),s!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=g.gpuType),l!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*i}const h=new t(c),d=new Tn(h,i,s);let m=0;for(let p=0;p<r.length;++p){const g=r[p];if(g.isInterleavedBufferAttribute){const x=m/i;for(let v=0,S=g.count;v<S;v++)for(let E=0;E<i;E++){const T=g.getComponent(v,E);d.setComponent(v+x,E,T)}}else h.set(g.array,m);m+=g.count*i}return l!==void 0&&(d.gpuType=l),d}class y1 extends oa{static get type(){return"LDrawConditionalLineMaterial"}constructor(t){super({uniforms:rv.merge([wt.fog,{diffuse:{value:new ge},opacity:{value:1}}]),vertexShader:`
				attribute vec3 control0;
				attribute vec3 control1;
				attribute vec3 direction;
				varying float discardFlag;

				#include <common>
				#include <color_pars_vertex>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>
				void main() {
					#include <color_vertex>

					vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

					// Transform the line segment ends and control points into camera clip space
					vec4 c0 = projectionMatrix * modelViewMatrix * vec4( control0, 1.0 );
					vec4 c1 = projectionMatrix * modelViewMatrix * vec4( control1, 1.0 );
					vec4 p0 = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
					vec4 p1 = projectionMatrix * modelViewMatrix * vec4( position + direction, 1.0 );

					c0.xy /= c0.w;
					c1.xy /= c1.w;
					p0.xy /= p0.w;
					p1.xy /= p1.w;

					// Get the direction of the segment and an orthogonal vector
					vec2 dir = p1.xy - p0.xy;
					vec2 norm = vec2( -dir.y, dir.x );

					// Get control point directions from the line
					vec2 c0dir = c0.xy - p1.xy;
					vec2 c1dir = c1.xy - p1.xy;

					// If the vectors to the controls points are pointed in different directions away
					// from the line segment then the line should not be drawn.
					float d0 = dot( normalize( norm ), normalize( c0dir ) );
					float d1 = dot( normalize( norm ), normalize( c1dir ) );
					discardFlag = float( sign( d0 ) != sign( d1 ) );

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>
				}
			`,fragmentShader:`
			uniform vec3 diffuse;
			uniform float opacity;
			varying float discardFlag;

			#include <common>
			#include <color_pars_fragment>
			#include <fog_pars_fragment>
			#include <logdepthbuf_pars_fragment>
			#include <clipping_planes_pars_fragment>
			void main() {

				if ( discardFlag > 0.5 ) discard;

				#include <clipping_planes_fragment>
				vec3 outgoingLight = vec3( 0.0 );
				vec4 diffuseColor = vec4( diffuse, opacity );
				#include <logdepthbuf_fragment>
				#include <color_fragment>
				outgoingLight = diffuseColor.rgb; // simple shader
				gl_FragColor = vec4( outgoingLight, diffuseColor.a );
				#include <tonemapping_fragment>
				#include <colorspace_fragment>
				#include <fog_fragment>
				#include <premultiplied_alpha_fragment>
			}
			`}),Object.defineProperties(this,{opacity:{get:function(){return this.uniforms.opacity.value},set:function(i){this.uniforms.opacity.value=i}},color:{get:function(){return this.uniforms.diffuse.value}}}),this.setValues(t),this.isLDrawConditionalLineMaterial=!0}}function S1(r,t,i=50){r.geometry.computeBoundingBox();const s=r.geometry.boundingBox;if(!s)throw new Error("Bounding box could not be computed");const l=s.max.x-s.min.x,c=s.max.y-s.min.y,h=s.max.z-s.min.z,d=2*(l+h),m=2*h+c,p=r.geometry.attributes.position,g=new Float32Array(p.count*2),x={top:{x:h,y:0},left:{x:0,y:h},front:{x:h,y:h},right:{x:h+l,y:h},back:{x:h+l+h,y:h},bottom:{x:h,y:h+c}},v={top:_=>new Wt(x.top.x+(_.x-s.min.x),x.top.y+(h-(_.z-s.min.z))),bottom:_=>new Wt(x.bottom.x+(_.x-s.min.x),x.bottom.y+(_.z-s.min.z)),front:_=>new Wt(x.front.x+(_.x-s.min.x),x.front.y+(c-(_.y-s.min.y))),back:_=>new Wt(x.back.x+(l-(_.x-s.min.x)),x.back.y+(c-(_.y-s.min.y))),left:_=>new Wt(x.left.x+(_.z-s.min.z),x.left.y+(c-(_.y-s.min.y))),right:_=>new Wt(x.right.x+(h-(_.z-s.min.z)),x.right.y+(c-(_.y-s.min.y)))},S={top:_=>new K(_.x,s.max.y+1,_.z),bottom:_=>new K(_.x,s.min.y-1,_.z),front:_=>new K(_.x,_.y,s.min.z-1),back:_=>new K(_.x,_.y,s.max.z+1),left:_=>new K(s.min.x-1,_.y,_.z),right:_=>new K(s.max.x+1,_.y,_.z)},E=new oM;for(let _=0;_<p.count;_+=3){const O=new K(p.getX(_),p.getY(_),p.getZ(_)),L=new K(p.getX(_+1),p.getY(_+1),p.getZ(_+1)),w=new K(p.getX(_+2),p.getY(_+2),p.getZ(_+2)),z=new K().crossVectors(new K().subVectors(L,O),new K().subVectors(w,O)).normalize();let H,B;Math.abs(z.y)>Math.abs(z.x)&&Math.abs(z.y)>Math.abs(z.z)?(H=z.y>0?v.top:v.bottom,B=z.y>0?"top":"bottom"):Math.abs(z.z)>Math.abs(z.x)?(H=z.z>0?v.back:v.front,B=z.z>0?"back":"front"):(H=z.x>0?v.right:v.left,B=z.x>0?"right":"left");const k=[O,L,w];let D=!1;for(let R of k){const U=S[B](R),J=new K().subVectors(R,U).normalize();E.set(U,J);const W=E.intersectObject(r,!0);if(W.length&&Math.abs(W[0].point.distanceTo(U)-R.distanceTo(U))<.001){D=!0;break}}if(!D){g.set([0,0,0,0,0,0],_*2);continue}k.forEach((R,U)=>{const J=H(R),W=_+U;g[W*2]=J.x/d,g[W*2+1]=1-J.y/m})}r.geometry.setAttribute("uv",new Tn(g,2));const T=document.createElement("canvas");T.width=d*i,T.height=m*i;const y=T.getContext("2d");if(!y)throw new Error("Failed to get 2D context");y.fillStyle="#fff",y.fillRect(0,0,T.width,T.height),y.strokeStyle="#00AAFF",y.lineWidth=1;for(let _=0;_<p.count;_+=3){const O=new Wt(g[_*2]*d,g[_*2+1]*m),L=new Wt(g[(_+1)*2]*d,g[(_+1)*2+1]*m),w=new Wt(g[(_+2)*2]*d,g[(_+2)*2+1]*m);O.equals(new Wt(0,0))&&L.equals(new Wt(0,0))&&w.equals(new Wt(0,0))||(y.beginPath(),y.moveTo(O.x*i,O.y*i),y.lineTo(L.x*i,L.y*i),y.lineTo(w.x*i,w.y*i),y.closePath(),y.stroke())}t(T.toDataURL("image/png"))}const M1=()=>{const r=Cc.useRef(null),[t,i]=Cc.useState("");return Cc.useEffect(()=>{if(!r.current)return;const s=new YS;s.background=new ge(15790320);const l=new li(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.set(150,150,150);const c=new WA({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),r.current.appendChild(c.domElement);const h=new YA(l,c.domElement);h.update();const d=new nM(16777215,4473924,1.2);d.position.set(0,200,0),s.add(d);const m=new sM(16777215,.8);m.position.set(100,200,100).normalize(),s.add(m);const p=new v1;p.setConditionalLineMaterial(y1),p.setPartsLibraryPath("/LDraw/"),p.load("/LDraw/3001.dat",x=>{const v=[];x.traverse(T=>{T instanceof ci&&(T.updateMatrix(),v.push(T.geometry.clone().applyMatrix4(T.matrix)))});const S=x1(v,!0),E=new ci(S,new Ha({color:16777215,opacity:.5,transparent:!0}));E.rotation.x=Math.PI,s.add(E),S1(E,i)},void 0,x=>console.error("Error loading part:",x));function g(){h.update(),c.render(s,l),requestAnimationFrame(g)}g(),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)})},[]),yr.jsxs("div",{children:[yr.jsx("div",{ref:r,style:{width:"100vw",height:"100vh"}}),yr.jsx("input",{type:"file",id:"textureInput",accept:"image/*"}),yr.jsx("button",{onClick:()=>{if(t){const s=document.createElement("a");s.href=t,s.download="uvmap.png",s.click()}},children:"Download UV Map"})]})};Dy.createRoot(document.getElementById("root")).render(yr.jsx(Cc.StrictMode,{children:yr.jsx(M1,{})}));
