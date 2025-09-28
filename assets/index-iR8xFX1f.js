(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Kf={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function Ey(){if(h_)return No;h_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var f in l)f!=="key"&&(c[f]=l[f])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var d_;function Ty(){return d_||(d_=1,Kf.exports=Ey()),Kf.exports}var Wt=Ty(),Qf={exports:{}},Oo={},Jf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function by(){return p_||(p_=1,(function(s){function t(I,q){var X=I.length;I.push(q);t:for(;0<X;){var mt=X-1>>>1,N=I[mt];if(0<l(N,q))I[mt]=q,I[X]=N,X=mt;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var q=I[0],X=I.pop();if(X!==q){I[0]=X;t:for(var mt=0,N=I.length,nt=N>>>1;mt<nt;){var vt=2*(mt+1)-1,St=I[vt],$=vt+1,pt=I[$];if(0>l(St,X))$<N&&0>l(pt,St)?(I[mt]=pt,I[$]=X,mt=$):(I[mt]=St,I[vt]=X,mt=vt);else if($<N&&0>l(pt,X))I[mt]=pt,I[$]=X,mt=$;else break t}}return q}function l(I,q){var X=I.sortIndex-q.sortIndex;return X!==0?X:I.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,f=h.now();s.unstable_now=function(){return h.now()-f}}var m=[],p=[],g=1,v=null,_=3,S=!1,E=!1,T=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(I){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=I)r(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function B(I){if(T=!1,w(I),!E)if(i(m)!==null)E=!0,H||(H=!0,J());else{var q=i(p);q!==null&&ct(B,q.startTime-I)}}var H=!1,z=-1,k=5,D=-1;function R(){return y?!0:!(s.unstable_now()-D<k)}function U(){if(y=!1,H){var I=s.unstable_now();D=I;var q=!0;try{t:{E=!1,T&&(T=!1,O(z),z=-1),S=!0;var X=_;try{e:{for(w(I),v=i(m);v!==null&&!(v.expirationTime>I&&R());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,_=v.priorityLevel;var N=mt(v.expirationTime<=I);if(I=s.unstable_now(),typeof N=="function"){v.callback=N,w(I),q=!0;break e}v===i(m)&&r(m),w(I)}else r(m);v=i(m)}if(v!==null)q=!0;else{var nt=i(p);nt!==null&&ct(B,nt.startTime-I),q=!1}}break t}finally{v=null,_=X,S=!1}q=void 0}}finally{q?J():H=!1}}}var J;if(typeof L=="function")J=function(){L(U)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,et=Y.port2;Y.port1.onmessage=U,J=function(){et.postMessage(null)}}else J=function(){x(U,0)};function ct(I,q){z=x(function(){I(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(I){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var X=_;_=q;try{return I()}finally{_=X}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var X=_;_=I;try{return q()}finally{_=X}},s.unstable_scheduleCallback=function(I,q,X){var mt=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?mt+X:mt):X=mt,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=X+N,I={id:g++,callback:q,priorityLevel:I,startTime:X,expirationTime:N,sortIndex:-1},X>mt?(I.sortIndex=X,t(p,I),i(m)===null&&I===i(p)&&(T?(O(z),z=-1):T=!0,ct(B,X-mt))):(I.sortIndex=N,t(m,I),E||S||(E=!0,H||(H=!0,J()))),I},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(I){var q=_;return function(){var X=_;_=q;try{return I.apply(this,arguments)}finally{_=X}}}})($f)),$f}var m_;function Ay(){return m_||(m_=1,Jf.exports=by()),Jf.exports}var th={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function Ry(){if(g_)return re;g_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(N,nt,vt){this.props=N,this.context=nt,this.refs=T,this.updater=vt||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=y.prototype;function O(N,nt,vt){this.props=N,this.context=nt,this.refs=T,this.updater=vt||S}var L=O.prototype=new x;L.constructor=O,E(L,y.prototype),L.isPureReactComponent=!0;var w=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function z(N,nt,vt,St,$,pt){return vt=pt.ref,{$$typeof:s,type:N,key:nt,ref:vt!==void 0?vt:null,props:pt}}function k(N,nt){return z(N.type,nt,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function R(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(vt){return nt[vt]})}var U=/\/+/g;function J(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?R(""+N.key):nt.toString(36)}function Y(){}function et(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(Y,Y):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ct(N,nt,vt,St,$){var pt=typeof N;(pt==="undefined"||pt==="boolean")&&(N=null);var yt=!1;if(N===null)yt=!0;else switch(pt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(N.$$typeof){case s:case t:yt=!0;break;case g:return yt=N._init,ct(yt(N._payload),nt,vt,St,$)}}if(yt)return $=$(N),yt=St===""?"."+J(N,0):St,w($)?(vt="",yt!=null&&(vt=yt.replace(U,"$&/")+"/"),ct($,nt,vt,"",function(ae){return ae})):$!=null&&(D($)&&($=k($,vt+($.key==null||N&&N.key===$.key?"":(""+$.key).replace(U,"$&/")+"/")+yt)),nt.push($)),1;yt=0;var bt=St===""?".":St+":";if(w(N))for(var Dt=0;Dt<N.length;Dt++)St=N[Dt],pt=bt+J(St,Dt),yt+=ct(St,nt,vt,pt,$);else if(Dt=_(N),typeof Dt=="function")for(N=Dt.call(N),Dt=0;!(St=N.next()).done;)St=St.value,pt=bt+J(St,Dt++),yt+=ct(St,nt,vt,pt,$);else if(pt==="object"){if(typeof N.then=="function")return ct(et(N),nt,vt,St,$);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return yt}function I(N,nt,vt){if(N==null)return N;var St=[],$=0;return ct(N,St,"","",function(pt){return nt.call(vt,pt,$++)}),St}function q(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(vt){(N._status===0||N._status===-1)&&(N._status=1,N._result=vt)},function(vt){(N._status===0||N._status===-1)&&(N._status=2,N._result=vt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var X=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function mt(){}return re.Children={map:I,forEach:function(N,nt,vt){I(N,function(){nt.apply(this,arguments)},vt)},count:function(N){var nt=0;return I(N,function(){nt++}),nt},toArray:function(N){return I(N,function(nt){return nt})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=O,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cloneElement=function(N,nt,vt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var St=E({},N.props),$=N.key,pt=void 0;if(nt!=null)for(yt in nt.ref!==void 0&&(pt=void 0),nt.key!==void 0&&($=""+nt.key),nt)!H.call(nt,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&nt.ref===void 0||(St[yt]=nt[yt]);var yt=arguments.length-2;if(yt===1)St.children=vt;else if(1<yt){for(var bt=Array(yt),Dt=0;Dt<yt;Dt++)bt[Dt]=arguments[Dt+2];St.children=bt}return z(N.type,$,void 0,void 0,pt,St)},re.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},re.createElement=function(N,nt,vt){var St,$={},pt=null;if(nt!=null)for(St in nt.key!==void 0&&(pt=""+nt.key),nt)H.call(nt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&($[St]=nt[St]);var yt=arguments.length-2;if(yt===1)$.children=vt;else if(1<yt){for(var bt=Array(yt),Dt=0;Dt<yt;Dt++)bt[Dt]=arguments[Dt+2];$.children=bt}if(N&&N.defaultProps)for(St in yt=N.defaultProps,yt)$[St]===void 0&&($[St]=yt[St]);return z(N,pt,void 0,void 0,null,$)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:f,render:N}},re.isValidElement=D,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:q}},re.memo=function(N,nt){return{$$typeof:p,type:N,compare:nt===void 0?null:nt}},re.startTransition=function(N){var nt=B.T,vt={};B.T=vt;try{var St=N(),$=B.S;$!==null&&$(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(mt,X)}catch(pt){X(pt)}finally{B.T=nt}},re.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},re.use=function(N){return B.H.use(N)},re.useActionState=function(N,nt,vt){return B.H.useActionState(N,nt,vt)},re.useCallback=function(N,nt){return B.H.useCallback(N,nt)},re.useContext=function(N){return B.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,nt){return B.H.useDeferredValue(N,nt)},re.useEffect=function(N,nt,vt){var St=B.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(N,nt)},re.useId=function(){return B.H.useId()},re.useImperativeHandle=function(N,nt,vt){return B.H.useImperativeHandle(N,nt,vt)},re.useInsertionEffect=function(N,nt){return B.H.useInsertionEffect(N,nt)},re.useLayoutEffect=function(N,nt){return B.H.useLayoutEffect(N,nt)},re.useMemo=function(N,nt){return B.H.useMemo(N,nt)},re.useOptimistic=function(N,nt){return B.H.useOptimistic(N,nt)},re.useReducer=function(N,nt,vt){return B.H.useReducer(N,nt,vt)},re.useRef=function(N){return B.H.useRef(N)},re.useState=function(N){return B.H.useState(N)},re.useSyncExternalStore=function(N,nt,vt){return B.H.useSyncExternalStore(N,nt,vt)},re.useTransition=function(){return B.H.useTransition()},re.version="19.1.1",re}var __;function Rd(){return __||(__=1,th.exports=Ry()),th.exports}var eh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function Cy(){if(v_)return Dn;v_=1;var s=Rd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Dn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=f(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=f(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=f(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.1.1",Dn}var x_;function wy(){if(x_)return eh.exports;x_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),eh.exports=Cy(),eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function Dy(){if(y_)return Oo;y_=1;var s=Ay(),t=Rd(),i=wy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function f(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return f(u),e;if(d===o)return f(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,b=u.child;b;){if(b===a){M=!0,a=u,o=d;break}if(b===o){M=!0,o=u,a=d;break}b=b.sibling}if(!M){for(b=d.child;b;){if(b===a){M=!0,a=d,o=u;break}if(b===o){M=!0,o=d,a=u;break}b=b.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case T:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:et(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return et(e(n))}catch{}}return null}var ct=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},mt=[],N=-1;function nt(e){return{current:e}}function vt(e){0>N||(e.current=mt[N],mt[N]=null,N--)}function St(e,n){N++,mt[N]=e.current,e.current=n}var $=nt(null),pt=nt(null),yt=nt(null),bt=nt(null);function Dt(e,n){switch(St(yt,n),St(pt,e),St($,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Hg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Hg(n),e=Gg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt($),St($,e)}function ae(){vt($),vt(pt),vt(yt)}function Yt(e){e.memoizedState!==null&&St(bt,e);var n=$.current,a=Gg(n,e.type);n!==a&&(St(pt,e),St($,a))}function Ue(e){pt.current===e&&(vt($),vt(pt)),bt.current===e&&(vt(bt),Co._currentValue=X)}var we=Object.prototype.hasOwnProperty,oe=s.unstable_scheduleCallback,G=s.unstable_cancelCallback,An=s.unstable_shouldYield,fe=s.unstable_requestPaint,ee=s.unstable_now,Bt=s.unstable_getCurrentPriorityLevel,Re=s.unstable_ImmediatePriority,Ft=s.unstable_UserBlockingPriority,P=s.unstable_NormalPriority,A=s.unstable_LowPriority,at=s.unstable_IdlePriority,xt=s.log,Mt=s.unstable_setDisableYieldValue,ht=null,It=null;function At(e){if(typeof xt=="function"&&Mt(e),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(ht,e)}catch{}}var Rt=Math.clz32?Math.clz32:Ht,ve=Math.log,Tt=Math.LN2;function Ht(e){return e>>>=0,e===0?32:31-(ve(e)/Tt|0)|0}var jt=256,Qt=4194304;function Ot(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ce(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~d,o!==0?u=Ot(o):(M&=b,M!==0?u=Ot(M):a||(a=b&~e,a!==0&&(u=Ot(a))))):(b=o&~d,b!==0?u=Ot(b):M!==0?u=Ot(M):a||(a=o&~e,a!==0&&(u=Ot(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=jt;return jt<<=1,(jt&4194048)===0&&(jt=256),e}function Lt(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function ut(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function gt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pt(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,F=e.expirationTimes,it=e.hiddenUpdates;for(a=M&~a;0<a;){var ft=31-Rt(a),_t=1<<ft;b[ft]=0,F[ft]=-1;var rt=it[ft];if(rt!==null)for(it[ft]=null,ft=0;ft<rt.length;ft++){var ot=rt[ft];ot!==null&&(ot.lane&=-536870913)}a&=~_t}o!==0&&Nt(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function Nt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Rt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function ie(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Rt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ge(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:s_(e.type))}function Wn(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var dn=Math.random().toString(36).slice(2),sn="__reactFiber$"+dn,yn="__reactProps$"+dn,In="__reactContainer$"+dn,Ka="__reactEvents$"+dn,Zo="__reactListeners$"+dn,Ko="__reactHandles$"+dn,Qa="__reactResources$"+dn,fa="__reactMarker$"+dn;function ha(e){delete e[sn],delete e[yn],delete e[Ka],delete e[Zo],delete e[Ko]}function Ui(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[In]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Wg(e);e!==null;){if(a=e[sn])return a;e=Wg(e)}return n}e=a,a=e.parentNode}return null}function Ni(e){if(e=e[sn]||e[In]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function da(e){var n=e[Qa];return n||(n=e[Qa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[fa]=!0}var Qo=new Set,Jo={};function Oi(e,n){C(e,n),C(e+"Capture",n)}function C(e,n){for(Jo[e]=n,e=0;e<n.length;e++)Qo.add(n[e])}var j=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},lt={};function Q(e){return we.call(lt,e)?!0:we.call(st,e)?!1:j.test(e)?lt[e]=!0:(st[e]=!0,!1)}function Et(e,n,a){if(Q(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ut(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var zt,$t;function Zt(e){if(zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);zt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+e+$t}var kt=!1;function pe(e,n){if(!e||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var rt=ot}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ot){rt=ot}e.call(_t.prototype)}}else{try{throw Error()}catch(ot){rt=ot}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&rt&&typeof ot.stack=="string")return[ot.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],b=d[1];if(M&&b){var F=M.split(`
`),it=b.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===it.length)for(o=F.length-1,u=it.length-1;1<=o&&0<=u&&F[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==it[u]){var ft=`
`+F[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Zt(a):""}function Te(e){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return pe(e.type,!1);case 11:return pe(e.type.render,!1);case 1:return pe(e.type,!0);case 31:return Zt("Activity");default:return""}}function qe(e){try{var n="";do n+=Te(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xt(e){var n=ye(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){e._valueTracker||(e._valueTracker=Xt(e))}function Me(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ye(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Rn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pa=/[\n"\\]/g;function Ve(e){return e.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pi(e,n,a,o,u,d,M,b){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xe(n)):e.value!==""+xe(n)&&(e.value=""+xe(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Cn(e,M,xe(n)):a!=null?Cn(e,M,xe(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+xe(b):e.removeAttribute("name")}function Fe(e,n,a,o,u,d,M,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+xe(a):"",n=n!=null?""+xe(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Cn(e,n,a){n==="number"&&Rn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+xe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function pn(e,n,a){if(n!=null&&(n=""+xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xe(a):""}function Sn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ct(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=xe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Si(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ii.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Gd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Hd(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Hd(e,d,n[d])}function jc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(e){return Mv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Zc=null;function Kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lr=null,Ur=null;function Vd(e){var n=Ni(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Pi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[yn]||null;if(!u)throw Error(r(90));Pi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Me(o)}break t;case"textarea":pn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var Qc=!1;function kd(e,n,a){if(Qc)return e(n,a);Qc=!0;try{var o=e(n);return o}finally{if(Qc=!1,(Lr!==null||Ur!==null)&&(Bl(),Lr&&(n=Lr,e=Ur,Ur=Lr=null,Vd(n),e)))for(n=0;n<e.length;n++)Vd(e[n])}}function Hs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(zi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Jc=!1}var ma=null,$c=null,tl=null;function Xd(){if(tl)return tl;var e,n=$c,a=n.length,o,u="value"in ma?ma.value:ma.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return tl=u.slice(e,1<o?1-o:void 0)}function el(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function Wd(){return!1}function zn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?nl:Wd,this.isPropagationStopped=Wd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=zn($a),Vs=g({},$a,{view:0,detail:0}),Ev=zn(Vs),tu,eu,ks,al=g({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ks&&(ks&&e.type==="mousemove"?(tu=e.screenX-ks.screenX,eu=e.screenY-ks.screenY):eu=tu=0,ks=e),tu)},movementY:function(e){return"movementY"in e?e.movementY:eu}}),qd=zn(al),Tv=g({},al,{dataTransfer:0}),bv=zn(Tv),Av=g({},Vs,{relatedTarget:0}),nu=zn(Av),Rv=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=zn(Rv),wv=g({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dv=zn(wv),Lv=g({},$a,{data:0}),Yd=zn(Lv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ov[e])?!!n[e]:!1}function iu(){return Pv}var Iv=g({},Vs,{key:function(e){if(e.key){var n=Uv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zv=zn(Iv),Bv=g({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=zn(Bv),Fv=g({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),Hv=zn(Fv),Gv=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=zn(Gv),kv=g({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=zn(kv),Wv=g({},$a,{newState:0,oldState:0}),qv=zn(Wv),Yv=[9,13,27,32],au=zi&&"CompositionEvent"in window,Xs=null;zi&&"documentMode"in document&&(Xs=document.documentMode);var jv=zi&&"TextEvent"in window&&!Xs,Zd=zi&&(!au||Xs&&8<Xs&&11>=Xs),Kd=" ",Qd=!1;function Jd(e,n){switch(e){case"keyup":return Yv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function Zv(e,n){switch(e){case"compositionend":return $d(n);case"keypress":return n.which!==32?null:(Qd=!0,Kd);case"textInput":return e=n.data,e===Kd&&Qd?null:e;default:return null}}function Kv(e,n){if(Nr)return e==="compositionend"||!au&&Jd(e,n)?(e=Xd(),tl=$c=ma=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zd&&n.locale!=="ko"?null:n.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qv[e.type]:n==="textarea"}function ep(e,n,a,o){Lr?Ur?Ur.push(o):Ur=[o]:Lr=o,n=Xl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ws=null,qs=null;function Jv(e){Pg(e,0)}function rl(e){var n=Ja(e);if(Me(n))return e}function np(e,n){if(e==="change")return n}var ip=!1;if(zi){var ru;if(zi){var su="oninput"in document;if(!su){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),su=typeof ap.oninput=="function"}ru=su}else ru=!1;ip=ru&&(!document.documentMode||9<document.documentMode)}function rp(){Ws&&(Ws.detachEvent("onpropertychange",sp),qs=Ws=null)}function sp(e){if(e.propertyName==="value"&&rl(qs)){var n=[];ep(n,qs,e,Kc(e)),kd(Jv,n)}}function $v(e,n,a){e==="focusin"?(rp(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",sp)):e==="focusout"&&rp()}function tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(qs)}function ex(e,n){if(e==="click")return rl(n)}function nx(e,n){if(e==="input"||e==="change")return rl(n)}function ix(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:ix;function Ys(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!we.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lp(e,n){var a=op(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=op(a)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Rn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Rn(e.document)}return n}function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ax=zi&&"documentMode"in document&&11>=document.documentMode,Or=null,lu=null,js=null,cu=!1;function fp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Or==null||Or!==Rn(o)||(o=Or,"selectionStart"in o&&ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),js&&Ys(js,o)||(js=o,o=Xl(lu,"onSelect"),0<o.length&&(n=new il("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Or)))}function tr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Pr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},uu={},hp={};zi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function er(e){if(uu[e])return uu[e];if(!Pr[e])return e;var n=Pr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return uu[e]=n[a];return e}var dp=er("animationend"),pp=er("animationiteration"),mp=er("animationstart"),rx=er("transitionrun"),sx=er("transitionstart"),ox=er("transitioncancel"),gp=er("transitionend"),_p=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function di(e,n){_p.set(e,n),Oi(n,[e])}var vp=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:qe(n)},vp.set(e,n),n)}return{value:e,source:n,stack:qe(n)}}var ii=[],Ir=0,hu=0;function sl(){for(var e=Ir,n=hu=Ir=0;n<e;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var d=ii[n];if(ii[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&xp(a,u,d)}}function ol(e,n,a,o){ii[Ir++]=e,ii[Ir++]=n,ii[Ir++]=a,ii[Ir++]=o,hu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function du(e,n,a,o){return ol(e,n,a,o),ll(e)}function zr(e,n){return ol(e,null,null,n),ll(e)}function xp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Rt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function ll(e){if(50<yo)throw yo=0,yf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Br={};function lx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new lx(e,n,a,o)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function yp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cl(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")pu(e)&&(M=1);else if(typeof e=="string")M=uy(e,a,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Yn(31,a,n,u),e.elementType=D,e.lanes=d,e;case E:return nr(a.children,u,d,n);case T:M=8,u|=24;break;case y:return e=Yn(12,a,n,u|2),e.elementType=y,e.lanes=d,e;case B:return e=Yn(13,a,n,u),e.elementType=B,e.lanes=d,e;case H:return e=Yn(19,a,n,u),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case L:M=10;break t;case O:M=9;break t;case w:M=11;break t;case z:M=14;break t;case k:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Yn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function nr(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function mu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function gu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fr=[],Hr=0,ul=null,fl=0,ai=[],ri=0,ir=null,Fi=1,Hi="";function ar(e,n){Fr[Hr++]=fl,Fr[Hr++]=ul,ul=e,fl=n}function Sp(e,n,a){ai[ri++]=Fi,ai[ri++]=Hi,ai[ri++]=ir,ir=e;var o=Fi;e=Hi;var u=32-Rt(o)-1;o&=~(1<<u),a+=1;var d=32-Rt(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Fi=1<<32-Rt(n)+u|a<<u|o,Hi=d+e}else Fi=1<<d|a<<u|o,Hi=e}function _u(e){e.return!==null&&(ar(e,1),Sp(e,1,0))}function vu(e){for(;e===ul;)ul=Fr[--Hr],Fr[Hr]=null,fl=Fr[--Hr],Fr[Hr]=null;for(;e===ir;)ir=ai[--ri],ai[ri]=null,Hi=ai[--ri],ai[ri]=null,Fi=ai[--ri],ai[ri]=null}var Nn=null,Ze=null,Ce=!1,rr=null,Mi=!1,xu=Error(r(519));function sr(e){var n=Error(r(418,""));throw Qs(ni(n,e)),xu}function Mp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[yn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)ge(Mo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Fe(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),je(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Sn(n,o.value,o.defaultValue,o.children),je(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Fg(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Wl),n=!0):n=!1,n||sr(e)}function Ep(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Nn=Nn.return}}function Zs(e){if(e!==Nn)return!1;if(!Ce)return Ep(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||If(e.type,e.memoizedProps)),a=!a),a&&Ze&&sr(e),Ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,La(e.type)?(e=Hf,Hf=null,Ze=e):Ze=n):Ze=Nn?mi(e.stateNode.nextSibling):null;return!0}function Ks(){Ze=Nn=null,Ce=!1}function Tp(){var e=rr;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),rr=null),e}function Qs(e){rr===null?rr=[e]:rr.push(e)}var yu=nt(null),or=null,Gi=null;function ga(e,n,a){St(yu,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=yu.current,vt(yu)}function Su(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Mu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var F=0;F<n.length;F++)if(b.context===n[F]){d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),Su(d.return,a,e),o||(M=null);break t}d=b.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),Su(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Js(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var b=u.type;qn(u.pendingProps.value,M.value)||(e!==null?e.push(b):e=[b])}}else if(u===bt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}u=u.return}e!==null&&Mu(n,e,a,o),n.flags|=262144}function hl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){or=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return bp(or,e)}function dl(e,n){return or===null&&lr(e),bp(e,n)}function bp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(r(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var cx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ux=s.unstable_scheduleCallback,fx=s.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new cx,data:new Map,refCount:0}}function $s(e){e.refCount--,e.refCount===0&&ux(fx,function(){e.controller.abort()})}var to=null,Tu=0,Gr=0,Vr=null;function hx(e,n){if(to===null){var a=to=[];Tu=0,Gr=Rf(),Vr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Tu++,n.then(Ap,Ap),n}function Ap(){if(--Tu===0&&to!==null){Vr!==null&&(Vr.status="fulfilled");var e=to;to=null,Gr=0,Vr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function dx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Rp=I.S;I.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&hx(e,n),Rp!==null&&Rp(e,n)};var cr=nt(null);function bu(){var e=cr.current;return e!==null?e:ke.pooledCache}function pl(e,n){n===null?St(cr,cr.current):St(cr,n.pool)}function Cp(){var e=bu();return e===null?null:{parent:ln._currentValue,pool:e}}var eo=Error(r(460)),wp=Error(r(474)),ml=Error(r(542)),Au={then:function(){}};function Dp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gl(){}function Lp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(gl,gl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e;default:if(typeof n.status=="string")n.then(gl,gl);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e}throw no=n,eo}}var no=null;function Up(){if(no===null)throw Error(r(459));var e=no;return no=null,e}function Np(e){if(e===eo||e===ml)throw Error(r(483))}var _a=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ll(e),xp(e,null,a),n}return ol(e,o,n,a),ll(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ie(e,a)}}function wu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Du=!1;function ao(){if(Du){var e=Vr;if(e!==null)throw e}}function ro(e,n,a,o){Du=!1;var u=e.updateQueue;_a=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var F=b,it=F.next;F.next=null,M===null?d=it:M.next=it,M=F;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==M&&(b===null?ft.firstBaseUpdate=it:b.next=it,ft.lastBaseUpdate=F))}if(d!==null){var _t=u.baseState;M=0,ft=it=F=null,b=d;do{var rt=b.lane&-536870913,ot=rt!==b.lane;if(ot?(Se&rt)===rt:(o&rt)===rt){rt!==0&&rt===Gr&&(Du=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var te=e,Kt=b;rt=n;var Ie=a;switch(Kt.tag){case 1:if(te=Kt.payload,typeof te=="function"){_t=te.call(Ie,_t,rt);break t}_t=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=Kt.payload,rt=typeof te=="function"?te.call(Ie,_t,rt):te,rt==null)break t;_t=g({},_t,rt);break t;case 2:_a=!0}}rt=b.callback,rt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[rt]:ot.push(rt))}else ot={lane:rt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(it=ft=ot,F=_t):ft=ft.next=ot,M|=rt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ft===null&&(F=_t),u.baseState=F,u.firstBaseUpdate=it,u.lastBaseUpdate=ft,d===null&&(u.shared.lanes=0),Ra|=M,e.lanes=M,e.memoizedState=_t}}function Op(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Op(a[e],n)}var kr=nt(null),_l=nt(0);function Ip(e,n){e=Zi,St(_l,e),St(kr,n),Zi=e|n.baseLanes}function Lu(){St(_l,Zi),St(kr,kr.current)}function Uu(){Zi=_l.current,vt(kr),vt(_l)}var ya=0,ue=null,Oe=null,nn=null,vl=!1,Xr=!1,ur=!1,xl=0,so=0,Wr=null,px=0;function Je(){throw Error(r(321))}function Nu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Ou(e,n,a,o,u,d){return ya=d,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?xm:ym,ur=!1,d=a(o,u),ur=!1,Xr&&(d=Bp(n,a,o,u)),zp(e),d}function zp(e){I.H=bl;var n=Oe!==null&&Oe.next!==null;if(ya=0,nn=Oe=ue=null,vl=!1,so=0,Wr=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&hl(e)&&(mn=!0))}function Bp(e,n,a,o){ue=e;var u=0;do{if(Xr&&(Wr=null),so=0,Xr=!1,25<=u)throw Error(r(301));if(u+=1,nn=Oe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=Sx,d=n(a,o)}while(Xr);return d}function mx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ue.flags|=1024),n}function Pu(){var e=xl!==0;return xl=0,e}function Iu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zu(e){if(vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vl=!1}ya=0,nn=Oe=ue=null,Xr=!1,so=xl=0,Wr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ue.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Oe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=nn===null?ue.memoizedState:nn.next;if(n!==null)nn=n,Oe=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},nn===null?ue.memoizedState=nn=e:nn=nn.next=e}return nn}function Bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=so;return so+=1,Wr===null&&(Wr=[]),e=Lp(Wr,e,n),n=ue,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?xm:ym),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===L)return wn(e)}throw Error(r(438,String(e)))}function Fu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function ki(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=an();return Hu(n,Oe,e)}function Hu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var b=M=null,F=null,it=n,ft=!1;do{var _t=it.lane&-536870913;if(_t!==it.lane?(Se&_t)===_t:(ya&_t)===_t){var rt=it.revertLane;if(rt===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),_t===Gr&&(ft=!0);else if((ya&rt)===rt){it=it.next,rt===Gr&&(ft=!0);continue}else _t={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},F===null?(b=F=_t,M=d):F=F.next=_t,ue.lanes|=rt,Ra|=rt;_t=it.action,ur&&a(d,_t),d=it.hasEagerState?it.eagerState:a(d,_t)}else rt={lane:_t,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},F===null?(b=F=rt,M=d):F=F.next=rt,ue.lanes|=_t,Ra|=_t;it=it.next}while(it!==null&&it!==n);if(F===null?M=d:F.next=b,!qn(d,e.memoizedState)&&(mn=!0,ft&&(a=Vr,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=F,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Gu(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);qn(d,n.memoizedState)||(mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Fp(e,n,a){var o=ue,u=an(),d=Ce;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!qn((Oe||u).memoizedState,a);M&&(u.memoizedState=a,mn=!0),u=u.queue;var b=Vp.bind(null,o,u,e);if(lo(2048,8,b,[e]),u.getSnapshot!==n||M||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,qr(9,Ml(),Gp.bind(null,o,u,a,n),null),ke===null)throw Error(r(349));d||(ya&124)!==0||Hp(o,n,a)}return a}function Hp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Bu(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Gp(e,n,a,o){n.value=a,n.getSnapshot=o,kp(n)&&Xp(e)}function Vp(e,n,a){return a(function(){kp(n)&&Xp(e)})}function kp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Xp(e){var n=zr(e,2);n!==null&&Jn(n,e,2)}function Vu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),ur){At(!0);try{a()}finally{At(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n}function Wp(e,n,a,o){return e.baseState=a,Hu(e,Oe,typeof o=="function"?o:ki)}function gx(e,n,a,o,u){if(Tl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,qp(n,d)):(d.next=a.next,n.pending=a.next=d)}}function qp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=I.T,M={};I.T=M;try{var b=a(u,o),F=I.S;F!==null&&F(M,b),Yp(e,n,b)}catch(it){ku(e,n,it)}finally{I.T=d}}else try{d=a(u,o),Yp(e,n,d)}catch(it){ku(e,n,it)}}function Yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){jp(e,n,o)},function(o){return ku(e,n,o)}):jp(e,n,a)}function jp(e,n,a){n.status="fulfilled",n.value=a,Zp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,qp(e,a)))}function ku(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Zp(n),n=n.next;while(n!==o)}e.action=null}function Zp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Kp(e,n){return n}function Qp(e,n){if(Ce){var a=ke.formState;if(a!==null){t:{var o=ue;if(Ce){if(Ze){e:{for(var u=Ze,d=Mi;u.nodeType!==8;){if(!d){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ze=mi(u.nextSibling),o=u.data==="F!";break t}}sr(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:n},a.queue=o,a=gm.bind(null,ue,o),o.dispatch=a,o=Vu(!1),d=ju.bind(null,ue,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=gx.bind(null,ue,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Jp(e){var n=an();return $p(n,Oe,e)}function $p(e,n,a){if(n=Hu(e,n,Kp)[0],e=Sl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(M){throw M===eo?ml:M}else o=n;n=an();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,qr(9,Ml(),_x.bind(null,u,a),null)),[o,d,e]}function _x(e,n){e.action=n}function tm(e){var n=an(),a=Oe;if(a!==null)return $p(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function qr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Bu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ml(){return{destroy:void 0,resource:void 0}}function em(){return an().memoizedState}function El(e,n,a,o){var u=Bn();o=o===void 0?null:o,ue.flags|=e,u.memoizedState=qr(1|n,Ml(),a,o)}function lo(e,n,a,o){var u=an();o=o===void 0?null:o;var d=u.memoizedState.inst;Oe!==null&&o!==null&&Nu(o,Oe.memoizedState.deps)?u.memoizedState=qr(n,d,a,o):(ue.flags|=e,u.memoizedState=qr(1|n,d,a,o))}function nm(e,n){El(8390656,8,e,n)}function im(e,n){lo(2048,8,e,n)}function am(e,n){return lo(4,2,e,n)}function rm(e,n){return lo(4,4,e,n)}function sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function om(e,n,a){a=a!=null?a.concat([e]):null,lo(4,4,sm.bind(null,n,e),a)}function Xu(){}function lm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Nu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function cm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Nu(n,o[1]))return o[0];if(o=e(),ur){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[o,n],o}function Wu(e,n,a){return a===void 0||(ya&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=hg(),ue.lanes|=e,Ra|=e,a)}function um(e,n,a,o){return qn(a,n)?a:kr.current!==null?(e=Wu(e,a,o),qn(e,n)||(mn=!0),e):(ya&42)===0?(mn=!0,e.memoizedState=a):(e=hg(),ue.lanes|=e,Ra|=e,n)}function fm(e,n,a,o,u){var d=q.p;q.p=d!==0&&8>d?d:8;var M=I.T,b={};I.T=b,ju(e,!1,n,a);try{var F=u(),it=I.S;if(it!==null&&it(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ft=dx(F,o);co(e,n,ft,Qn(e))}else co(e,n,o,Qn(e))}catch(_t){co(e,n,{then:function(){},status:"rejected",reason:_t},Qn())}finally{q.p=d,I.T=M}}function vx(){}function qu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=hm(e).queue;fm(e,u,n,X,a===null?vx:function(){return dm(e),a(o)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function dm(e){var n=hm(e).next.queue;co(e,n,{},Qn())}function Yu(){return wn(Co)}function pm(){return an().memoizedState}function mm(){return an().memoizedState}function xx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=va(a);var o=xa(n,e,a);o!==null&&(Jn(o,n,a),io(o,n,a)),n={cache:Eu()},e.payload=n;return}n=n.return}}function yx(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?_m(n,a):(a=du(e,n,a,o),a!==null&&(Jn(a,e,o),vm(a,n,o)))}function gm(e,n,a){var o=Qn();co(e,n,a,o)}function co(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))_m(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,b=d(M,a);if(u.hasEagerState=!0,u.eagerState=b,qn(b,M))return ol(e,n,u,0),ke===null&&sl(),!1}catch{}finally{}if(a=du(e,n,u,o),a!==null)return Jn(a,e,o),vm(a,n,o),!0}return!1}function ju(e,n,a,o){if(o={lane:2,revertLane:Rf(),action:o,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(r(479))}else n=du(e,a,o,2),n!==null&&Jn(n,e,2)}function Tl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function _m(e,n){Xr=vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ie(e,a)}}var bl={readContext:wn,use:yl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},xm={readContext:wn,use:yl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:nm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,El(4194308,4,sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return El(4194308,4,e,n)},useInsertionEffect:function(e,n){El(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(ur){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(ur){At(!0);try{a(n)}finally{At(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=yx.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Vu(e);var n=e.queue,a=gm.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(e,n){var a=Bn();return Wu(a,e,n)},useTransition:function(){var e=Vu(!1);return e=fm.bind(null,ue,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,u=Bn();if(Ce){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Se&124)!==0||Hp(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,nm(Vp.bind(null,o,d,e),[e]),o.flags|=2048,qr(9,Ml(),Gp.bind(null,o,d,a,n),null),a},useId:function(){var e=Bn(),n=ke.identifierPrefix;if(Ce){var a=Hi,o=Fi;a=(o&~(1<<32-Rt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=px++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:Qp,useActionState:Qp,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Fu,useCacheRefresh:function(){return Bn().memoizedState=xx.bind(null,ue)}},ym={readContext:wn,use:yl,useCallback:lm,useContext:wn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:cm,useReducer:Sl,useRef:em,useState:function(){return Sl(ki)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=an();return um(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Sl(ki)[0],n=an().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:Yu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e,n){var a=an();return Wp(a,Oe,e,n)},useMemoCache:Fu,useCacheRefresh:mm},Sx={readContext:wn,use:yl,useCallback:lm,useContext:wn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:cm,useReducer:Gu,useRef:em,useState:function(){return Gu(ki)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=an();return Oe===null?Wu(a,e,n):um(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Gu(ki)[0],n=an().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:Yu,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=an();return Oe!==null?Wp(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:mm},Yr=null,uo=0;function Al(e){var n=uo;return uo+=1,Yr===null&&(Yr=[]),Lp(Yr,e,n)}function fo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Sm(e){var n=e._init;return n(e._payload)}function Mm(e){function n(Z,V){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[V],Z.flags|=16):tt.push(V)}}function a(Z,V){if(!e)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function o(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function u(Z,V){return Z=Bi(Z,V),Z.index=0,Z.sibling=null,Z}function d(Z,V,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<V?(Z.flags|=67108866,V):tt):(Z.flags|=67108866,V)):(Z.flags|=1048576,V)}function M(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,V,tt,dt){return V===null||V.tag!==6?(V=mu(tt,Z.mode,dt),V.return=Z,V):(V=u(V,tt),V.return=Z,V)}function F(Z,V,tt,dt){var Gt=tt.type;return Gt===E?ft(Z,V,tt.props.children,dt,tt.key):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===k&&Sm(Gt)===V.type)?(V=u(V,tt.props),fo(V,tt),V.return=Z,V):(V=cl(tt.type,tt.key,tt.props,null,Z.mode,dt),fo(V,tt),V.return=Z,V)}function it(Z,V,tt,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=gu(tt,Z.mode,dt),V.return=Z,V):(V=u(V,tt.children||[]),V.return=Z,V)}function ft(Z,V,tt,dt,Gt){return V===null||V.tag!==7?(V=nr(tt,Z.mode,dt,Gt),V.return=Z,V):(V=u(V,tt),V.return=Z,V)}function _t(Z,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=mu(""+V,Z.mode,tt),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case _:return tt=cl(V.type,V.key,V.props,null,Z.mode,tt),fo(tt,V),tt.return=Z,tt;case S:return V=gu(V,Z.mode,tt),V.return=Z,V;case k:var dt=V._init;return V=dt(V._payload),_t(Z,V,tt)}if(ct(V)||J(V))return V=nr(V,Z.mode,tt,null),V.return=Z,V;if(typeof V.then=="function")return _t(Z,Al(V),tt);if(V.$$typeof===L)return _t(Z,dl(Z,V),tt);Rl(Z,V)}return null}function rt(Z,V,tt,dt){var Gt=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Gt!==null?null:b(Z,V,""+tt,dt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case _:return tt.key===Gt?F(Z,V,tt,dt):null;case S:return tt.key===Gt?it(Z,V,tt,dt):null;case k:return Gt=tt._init,tt=Gt(tt._payload),rt(Z,V,tt,dt)}if(ct(tt)||J(tt))return Gt!==null?null:ft(Z,V,tt,dt,null);if(typeof tt.then=="function")return rt(Z,V,Al(tt),dt);if(tt.$$typeof===L)return rt(Z,V,dl(Z,tt),dt);Rl(Z,tt)}return null}function ot(Z,V,tt,dt,Gt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Z=Z.get(tt)||null,b(V,Z,""+dt,Gt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case _:return Z=Z.get(dt.key===null?tt:dt.key)||null,F(V,Z,dt,Gt);case S:return Z=Z.get(dt.key===null?tt:dt.key)||null,it(V,Z,dt,Gt);case k:var he=dt._init;return dt=he(dt._payload),ot(Z,V,tt,dt,Gt)}if(ct(dt)||J(dt))return Z=Z.get(tt)||null,ft(V,Z,dt,Gt,null);if(typeof dt.then=="function")return ot(Z,V,tt,Al(dt),Gt);if(dt.$$typeof===L)return ot(Z,V,tt,dl(V,dt),Gt);Rl(V,dt)}return null}function te(Z,V,tt,dt){for(var Gt=null,he=null,Vt=V,Jt=V=0,_n=null;Vt!==null&&Jt<tt.length;Jt++){Vt.index>Jt?(_n=Vt,Vt=null):_n=Vt.sibling;var be=rt(Z,Vt,tt[Jt],dt);if(be===null){Vt===null&&(Vt=_n);break}e&&Vt&&be.alternate===null&&n(Z,Vt),V=d(be,V,Jt),he===null?Gt=be:he.sibling=be,he=be,Vt=_n}if(Jt===tt.length)return a(Z,Vt),Ce&&ar(Z,Jt),Gt;if(Vt===null){for(;Jt<tt.length;Jt++)Vt=_t(Z,tt[Jt],dt),Vt!==null&&(V=d(Vt,V,Jt),he===null?Gt=Vt:he.sibling=Vt,he=Vt);return Ce&&ar(Z,Jt),Gt}for(Vt=o(Vt);Jt<tt.length;Jt++)_n=ot(Vt,Z,Jt,tt[Jt],dt),_n!==null&&(e&&_n.alternate!==null&&Vt.delete(_n.key===null?Jt:_n.key),V=d(_n,V,Jt),he===null?Gt=_n:he.sibling=_n,he=_n);return e&&Vt.forEach(function(Ia){return n(Z,Ia)}),Ce&&ar(Z,Jt),Gt}function Kt(Z,V,tt,dt){if(tt==null)throw Error(r(151));for(var Gt=null,he=null,Vt=V,Jt=V=0,_n=null,be=tt.next();Vt!==null&&!be.done;Jt++,be=tt.next()){Vt.index>Jt?(_n=Vt,Vt=null):_n=Vt.sibling;var Ia=rt(Z,Vt,be.value,dt);if(Ia===null){Vt===null&&(Vt=_n);break}e&&Vt&&Ia.alternate===null&&n(Z,Vt),V=d(Ia,V,Jt),he===null?Gt=Ia:he.sibling=Ia,he=Ia,Vt=_n}if(be.done)return a(Z,Vt),Ce&&ar(Z,Jt),Gt;if(Vt===null){for(;!be.done;Jt++,be=tt.next())be=_t(Z,be.value,dt),be!==null&&(V=d(be,V,Jt),he===null?Gt=be:he.sibling=be,he=be);return Ce&&ar(Z,Jt),Gt}for(Vt=o(Vt);!be.done;Jt++,be=tt.next())be=ot(Vt,Z,Jt,be.value,dt),be!==null&&(e&&be.alternate!==null&&Vt.delete(be.key===null?Jt:be.key),V=d(be,V,Jt),he===null?Gt=be:he.sibling=be,he=be);return e&&Vt.forEach(function(My){return n(Z,My)}),Ce&&ar(Z,Jt),Gt}function Ie(Z,V,tt,dt){if(typeof tt=="object"&&tt!==null&&tt.type===E&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case _:t:{for(var Gt=tt.key;V!==null;){if(V.key===Gt){if(Gt=tt.type,Gt===E){if(V.tag===7){a(Z,V.sibling),dt=u(V,tt.props.children),dt.return=Z,Z=dt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===k&&Sm(Gt)===V.type){a(Z,V.sibling),dt=u(V,tt.props),fo(dt,tt),dt.return=Z,Z=dt;break t}a(Z,V);break}else n(Z,V);V=V.sibling}tt.type===E?(dt=nr(tt.props.children,Z.mode,dt,tt.key),dt.return=Z,Z=dt):(dt=cl(tt.type,tt.key,tt.props,null,Z.mode,dt),fo(dt,tt),dt.return=Z,Z=dt)}return M(Z);case S:t:{for(Gt=tt.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(Z,V.sibling),dt=u(V,tt.children||[]),dt.return=Z,Z=dt;break t}else{a(Z,V);break}else n(Z,V);V=V.sibling}dt=gu(tt,Z.mode,dt),dt.return=Z,Z=dt}return M(Z);case k:return Gt=tt._init,tt=Gt(tt._payload),Ie(Z,V,tt,dt)}if(ct(tt))return te(Z,V,tt,dt);if(J(tt)){if(Gt=J(tt),typeof Gt!="function")throw Error(r(150));return tt=Gt.call(tt),Kt(Z,V,tt,dt)}if(typeof tt.then=="function")return Ie(Z,V,Al(tt),dt);if(tt.$$typeof===L)return Ie(Z,V,dl(Z,tt),dt);Rl(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(Z,V.sibling),dt=u(V,tt),dt.return=Z,Z=dt):(a(Z,V),dt=mu(tt,Z.mode,dt),dt.return=Z,Z=dt),M(Z)):a(Z,V)}return function(Z,V,tt,dt){try{uo=0;var Gt=Ie(Z,V,tt,dt);return Yr=null,Gt}catch(Vt){if(Vt===eo||Vt===ml)throw Vt;var he=Yn(29,Vt,null,Z.mode);return he.lanes=dt,he.return=Z,he}finally{}}}var jr=Mm(!0),Em=Mm(!1),si=nt(null),Ei=null;function Sa(e){var n=e.alternate;St(cn,cn.current&1),St(si,e),Ei===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(Ei=e)}function Tm(e){if(e.tag===22){if(St(cn,cn.current),St(si,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else Ma()}function Ma(){St(cn,cn.current),St(si,si.current)}function Xi(e){vt(si),Ei===e&&(Ei=null),vt(cn)}var cn=nt(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ff(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Zu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=va(o);u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(Jn(n,e,o),io(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(Jn(n,e,o),io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(Jn(n,e,a),io(n,e,a))}};function bm(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,o)||!Ys(u,d):!0}function Am(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ku.enqueueReplaceState(n,n.state,null)}function fr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Rm(e){wl(e)}function Cm(e){console.error(e)}function wm(e){wl(e)}function Dl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Dm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qu(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Dl(e,n)},a}function Lm(e){return e=va(e),e.tag=3,e}function Um(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Dm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Dm(n,a,o),typeof u!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Mx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Js(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ei===null?Mf():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Au?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Tf(e,o,u)),!1;case 22:return a.flags|=65536,o===Au?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Tf(e,o,u)),!1}throw Error(r(435,a.tag))}return Tf(e,o,u),Mf(),!1}if(Ce)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==xu&&(e=Error(r(422),{cause:o}),Qs(ni(e,a)))):(o!==xu&&(n=Error(r(423),{cause:o}),Qs(ni(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ni(o,a),u=Qu(e.stateNode,o,u),wu(e,u),Ke!==4&&(Ke=2)),!1;var d=Error(r(520),{cause:o});if(d=ni(d,a),xo===null?xo=[d]:xo.push(d),Ke!==4&&(Ke=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Qu(a.stateNode,o,e),wu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ca===null||!Ca.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Lm(u),Um(u,e,a,o),wu(a,u),!1}a=a.return}while(a!==null);return!1}var Nm=Error(r(461)),mn=!1;function Mn(e,n,a,o){n.child=e===null?Em(n,null,a,o):jr(n,e.child,a,o)}function Om(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var b in o)b!=="ref"&&(M[b]=o[b])}else M=o;return lr(n),o=Ou(e,n,a,M,d,u),b=Pu(),e!==null&&!mn?(Iu(e,n,u),Wi(e,n,u)):(Ce&&b&&_u(n),n.flags|=1,Mn(e,n,o,u),n.child)}function Pm(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!pu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Im(e,n,d,o,u)):(e=cl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!sf(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(M,o)&&e.ref===n.ref)return Wi(e,n,u)}return n.flags|=1,e=Bi(d,o),e.ref=n.ref,e.return=n,n.child=e}function Im(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(Ys(d,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=d,sf(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,Wi(e,n,u)}return Ju(e,n,a,o,u)}function zm(e,n,a){var o=n.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(u=n.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return Bm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&pl(n,d!==null?d.cachePool:null),d!==null?Ip(n,d):Lu(),Tm(n);else return n.lanes=n.childLanes=536870912,Bm(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(pl(n,d.cachePool),Ip(n,d),Ma(),n.memoizedState=null):(e!==null&&pl(n,null),Lu(),Ma());return Mn(e,n,u,a),n.child}function Bm(e,n,a,o){var u=bu();return u=u===null?null:{parent:ln._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&pl(n,null),Lu(),Tm(n),e!==null&&Js(e,n,o,!0),null}function Ll(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ju(e,n,a,o,u){return lr(n),a=Ou(e,n,a,o,void 0,u),o=Pu(),e!==null&&!mn?(Iu(e,n,u),Wi(e,n,u)):(Ce&&o&&_u(n),n.flags|=1,Mn(e,n,a,u),n.child)}function Fm(e,n,a,o,u,d){return lr(n),n.updateQueue=null,a=Bp(n,o,a,u),zp(e),o=Pu(),e!==null&&!mn?(Iu(e,n,d),Wi(e,n,d)):(Ce&&o&&_u(n),n.flags|=1,Mn(e,n,a,d),n.child)}function Hm(e,n,a,o,u){if(lr(n),n.stateNode===null){var d=Br,M=a.contextType;typeof M=="object"&&M!==null&&(d=wn(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ku,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ru(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?wn(M):Br,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Zu(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&Ku.enqueueReplaceState(d,d.state,null),ro(n,o,d,u),ao(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var b=n.memoizedProps,F=fr(a,b);d.props=F;var it=d.context,ft=a.contextType;M=Br,typeof ft=="object"&&ft!==null&&(M=wn(ft));var _t=a.getDerivedStateFromProps;ft=typeof _t=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||it!==M)&&Am(n,d,o,M),_a=!1;var rt=n.memoizedState;d.state=rt,ro(n,o,d,u),ao(),it=n.memoizedState,b||rt!==it||_a?(typeof _t=="function"&&(Zu(n,a,_t,o),it=n.memoizedState),(F=_a||bm(n,a,F,o,rt,it,M))?(ft||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),d.props=o,d.state=it,d.context=M,o=F):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Cu(e,n),M=n.memoizedProps,ft=fr(a,M),d.props=ft,_t=n.pendingProps,rt=d.context,it=a.contextType,F=Br,typeof it=="object"&&it!==null&&(F=wn(it)),b=a.getDerivedStateFromProps,(it=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==_t||rt!==F)&&Am(n,d,o,F),_a=!1,rt=n.memoizedState,d.state=rt,ro(n,o,d,u),ao();var ot=n.memoizedState;M!==_t||rt!==ot||_a||e!==null&&e.dependencies!==null&&hl(e.dependencies)?(typeof b=="function"&&(Zu(n,a,b,o),ot=n.memoizedState),(ft=_a||bm(n,a,ft,o,rt,ot,F)||e!==null&&e.dependencies!==null&&hl(e.dependencies))?(it||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ot,F),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ot,F)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),d.props=o,d.state=ot,d.context=F,o=ft):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Ll(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=jr(n,e.child,null,u),n.child=jr(n,null,a,u)):Mn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Wi(e,n,u),e}function Gm(e,n,a,o){return Ks(),n.flags|=256,Mn(e,n,a,o),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tf(e){return{baseLanes:e,cachePool:Cp()}}function ef(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function Vm(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?Sa(n):Ma(),Ce){var b=Ze,F;if(F=b){t:{for(F=b,b=Mi;F.nodeType!==8;){if(!b){b=null;break t}if(F=mi(F.nextSibling),F===null){b=null;break t}}b=F}b!==null?(n.memoizedState={dehydrated:b,treeContext:ir!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},F=Yn(18,null,null,0),F.stateNode=b,F.return=n,n.child=F,Nn=n,Ze=null,F=!0):F=!1}F||sr(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Ff(b)?n.lanes=32:n.lanes=536870912,null;Xi(n)}return b=o.children,o=o.fallback,u?(Ma(),u=n.mode,b=Ul({mode:"hidden",children:b},u),o=nr(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,u=n.child,u.memoizedState=tf(a),u.childLanes=ef(e,M,a),n.memoizedState=$u,o):(Sa(n),nf(n,b))}if(F=e.memoizedState,F!==null&&(b=F.dehydrated,b!==null)){if(d)n.flags&256?(Sa(n),n.flags&=-257,n=af(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),u=o.fallback,b=n.mode,o=Ul({mode:"visible",children:o.children},b),u=nr(u,b,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,jr(n,e.child,null,a),o=n.child,o.memoizedState=tf(a),o.childLanes=ef(e,M,a),n.memoizedState=$u,n=u);else if(Sa(n),Ff(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var it=M.dgst;M=it,o=Error(r(419)),o.stack="",o.digest=M,Qs({value:o,source:null,stack:null}),n=af(e,n,a)}else if(mn||Js(e,n,a,!1),M=(a&e.childLanes)!==0,mn||M){if(M=ke,M!==null&&(o=a&-a,o=(o&42)!==0?1:Ge(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==F.retryLane))throw F.retryLane=o,zr(e,o),Jn(M,e,o),Nm;b.data==="$?"||Mf(),n=af(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Ze=mi(b.nextSibling),Nn=n,Ce=!0,rr=null,Mi=!1,e!==null&&(ai[ri++]=Fi,ai[ri++]=Hi,ai[ri++]=ir,Fi=e.id,Hi=e.overflow,ir=n),n=nf(n,o.children),n.flags|=4096);return n}return u?(Ma(),u=o.fallback,b=n.mode,F=e.child,it=F.sibling,o=Bi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,it!==null?u=Bi(it,u):(u=nr(u,b,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,b=e.child.memoizedState,b===null?b=tf(a):(F=b.cachePool,F!==null?(it=ln._currentValue,F=F.parent!==it?{parent:it,pool:it}:F):F=Cp(),b={baseLanes:b.baseLanes|a,cachePool:F}),u.memoizedState=b,u.childLanes=ef(e,M,a),n.memoizedState=$u,o):(Sa(n),a=e.child,e=a.sibling,a=Bi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function nf(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=Yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function af(e,n,a){return jr(n,e.child,null,a),e=nf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function km(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Su(e.return,n,a)}function rf(e,n,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function Xm(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(Mn(e,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&km(e,a,n);else if(e.tag===19)km(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(cn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),rf(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}rf(n,!0,a,null,d);break;case"together":rf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Bi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Bi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hl(e)))}function Ex(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),ga(n,ln,e.memoizedState.cache),Ks();break;case 27:case 5:Yt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Vm(e,n,a):(Sa(n),e=Wi(e,n,a),e!==null?e.sibling:null);Sa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Js(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Xm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,zm(e,n,a);case 24:ga(n,ln,e.memoizedState.cache)}return Wi(e,n,a)}function Wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!sf(e,a)&&(n.flags&128)===0)return mn=!1,Ex(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Ce&&(n.flags&1048576)!==0&&Sp(n,fl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")pu(o)?(e=fr(o,e),n.tag=1,n=Hm(null,n,o,e,a)):(n.tag=0,n=Ju(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=Om(null,n,o,e,a);break t}else if(u===z){n.tag=14,n=Pm(null,n,o,e,a);break t}}throw n=et(o)||o,Error(r(306,n,""))}}return n;case 0:return Ju(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=fr(o,n.pendingProps),Hm(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Cu(e,n),ro(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ga(n,ln,o),o!==d.cache&&Mu(n,[ln],a,!0),ao(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Gm(e,n,o,a);break t}else if(o!==u){u=ni(Error(r(424)),n),Qs(u),n=Gm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=mi(e.firstChild),Nn=n,Ce=!0,rr=null,Mi=!0,a=Em(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ks(),o===u){n=Wi(e,n,a);break t}Mn(e,n,o,a)}n=n.child}return n;case 26:return Ll(e,n),e===null?(a=Zg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,o=ql(yt.current).createElement(a),o[sn]=n,o[yn]=e,Tn(o,a,e),en(o),n.stateNode=o):n.memoizedState=Zg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yt(n),e===null&&Ce&&(o=n.stateNode=qg(n.type,n.pendingProps,yt.current),Nn=n,Mi=!0,u=Ze,La(n.type)?(Hf=u,Ze=mi(o.firstChild)):Ze=u),Mn(e,n,n.pendingProps.children,a),Ll(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=o=Ze)&&(o=Qx(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Nn=n,Ze=mi(o.firstChild),Mi=!1,u=!0):u=!1),u||sr(n)),Yt(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,If(u,d)?o=null:M!==null&&If(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Ou(e,n,mx,null,null,a),Co._currentValue=u),Ll(e,n),Mn(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=Ze)&&(a=Jx(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Nn=n,Ze=null,e=!0):e=!1),e||sr(n)),null;case 13:return Vm(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=jr(n,null,o,a):Mn(e,n,o,a),n.child;case 11:return Om(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),Mn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,lr(n),u=wn(u),o=o(u),n.flags|=1,Mn(e,n,o,a),n.child;case 14:return Pm(e,n,n.type,n.pendingProps,a);case 15:return Im(e,n,n.type,n.pendingProps,a);case 19:return Xm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ul(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Bi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return zm(e,n,a);case 24:return lr(n),o=wn(ln),e===null?(u=bu(),u===null&&(u=ke,d=Eu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ru(n),ga(n,ln,u)):((e.lanes&a)!==0&&(Cu(e,n),ro(n,null,null,a),ao()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,ln,o)):(o=d.cache,ga(n,ln,o),o!==u.cache&&Mu(n,[ln],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(e){e.flags|=4}function qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t_(n)){if(n=si.current,n!==null&&((Se&4194048)===Se?Ei!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==Ei))throw no=Au,wp;e.flags|=8192}}function Nl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,Jr|=n)}function ho(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Tx(e,n,a){var o=n.pendingProps;switch(vu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(ln),ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zs(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tp())),Ye(n),null;case 26:return a=n.memoizedState,e===null?(qi(n),a!==null?(Ye(n),qm(n,a)):(Ye(n),n.flags&=-16777217)):a?a!==e.memoizedState?(qi(n),Ye(n),qm(n,a)):(Ye(n),n.flags&=-16777217):(e.memoizedProps!==o&&qi(n),Ye(n),n.flags&=-16777217),null;case 27:Ue(n),a=yt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}e=$.current,Zs(n)?Mp(n):(e=qg(u,o,a),n.stateNode=e,qi(n))}return Ye(n),null;case 5:if(Ue(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(e=$.current,Zs(n))Mp(n);else{switch(u=ql(yt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[sn]=n,e[yn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Tn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&qi(n)}}return Ye(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=yt.current,Zs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Fg(e.nodeValue,a)),e||sr(n)}else e=ql(e).createTextNode(o),e[sn]=n,n.stateNode=e}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else Ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=Tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Xi(n),n):(Xi(n),null)}if(Xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),Ye(n),null;case 4:return ae(),e===null&&Lf(n.stateNode.containerInfo),Ye(n),null;case 10:return Vi(n.type),Ye(n),null;case 19:if(vt(cn),u=n.memoizedState,u===null)return Ye(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)ho(u,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Cl(e),d!==null){for(n.flags|=128,ho(u,!1),e=d.updateQueue,n.updateQueue=e,Nl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)yp(a,e),a=a.sibling;return St(cn,cn.current&1|2),n.child}e=e.sibling}u.tail!==null&&ee()>Il&&(n.flags|=128,o=!0,ho(u,!1),n.lanes=4194304)}else{if(!o)if(e=Cl(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Nl(n,e),ho(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ce)return Ye(n),null}else 2*ee()-u.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,o=!0,ho(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(e=u.last,e!==null?e.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ee(),n.sibling=null,e=cn.current,St(cn,o?e&1|2:e&1),n):(Ye(n),null);case 22:case 23:return Xi(n),Uu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(cr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(ln),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function bx(e,n){switch(vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(ln),ae(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ue(n),null;case 13:if(Xi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ks()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(cn),null;case 4:return ae(),null;case 10:return Vi(n.type),null;case 22:case 23:return Xi(n),Uu(),e!==null&&vt(cr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(ln),null;case 25:return null;default:return null}}function Ym(e,n){switch(vu(n),n.tag){case 3:Vi(ln),ae();break;case 26:case 27:case 5:Ue(n);break;case 4:ae();break;case 13:Xi(n);break;case 19:vt(cn);break;case 10:Vi(n.type);break;case 22:case 23:Xi(n),Uu(),e!==null&&vt(cr);break;case 24:Vi(ln)}}function po(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(b){He(n,n.return,b)}}function Ea(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,u=n;var F=a,it=b;try{it()}catch(ft){He(u,F,ft)}}}o=o.next}while(o!==d)}}catch(ft){He(n,n.return,ft)}}function jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Pp(n,a)}catch(o){He(e,e.return,o)}}}function Zm(e,n,a){a.props=fr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){He(e,n,o)}}function mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){He(e,n,u)}}function Ti(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){He(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(e,n,u)}else a.current=null}function Km(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){He(e,e.return,u)}}function of(e,n,a){try{var o=e.stateNode;qx(o,e.type,a,n),o[yn]=n}catch(u){He(e,e.return,u)}}function Qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function lf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wl));else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(cf(e,n,a),e=e.sibling;e!==null;)cf(e,n,a),e=e.sibling}function Ol(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ol(e,n,a),e=e.sibling;e!==null;)Ol(e,n,a),e=e.sibling}function Jm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[sn]=e,n[yn]=a}catch(d){He(e,e.return,d)}}var Yi=!1,$e=!1,uf=!1,$m=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Ax(e,n){if(e=e.containerInfo,Of=Jl,e=up(e),ou(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,b=-1,F=-1,it=0,ft=0,_t=e,rt=null;e:for(;;){for(var ot;_t!==a||u!==0&&_t.nodeType!==3||(b=M+u),_t!==d||o!==0&&_t.nodeType!==3||(F=M+o),_t.nodeType===3&&(M+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)rt=_t,_t=ot;for(;;){if(_t===e)break e;if(rt===a&&++it===u&&(b=M),rt===d&&++ft===o&&(F=M),(ot=_t.nextSibling)!==null)break;_t=rt,rt=_t.parentNode}_t=ot}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:e,selectionRange:a},Jl=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var te=fr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(te,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(Kt){He(a,a.return,Kt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Bf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function tg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a),o&4&&po(5,a);break;case 1:if(Ta(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){He(a,a.return,M)}else{var u=fr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){He(a,a.return,M)}}o&64&&jm(a),o&512&&mo(a,a.return);break;case 3:if(Ta(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(e,n)}catch(M){He(a,a.return,M)}}break;case 27:n===null&&o&4&&Jm(a);case 26:case 5:Ta(e,a),n===null&&o&4&&Km(a),o&512&&mo(a,a.return);break;case 12:Ta(e,a);break;case 13:Ta(e,a),o&4&&ig(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Px.bind(null,a),$x(e,a))));break;case 22:if(o=a.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||$e,u=Yi;var d=$e;Yi=o,($e=n)&&!d?ba(e,a,(a.subtreeFlags&8772)!==0):Ta(e,a),Yi=u,$e=d}break;case 30:break;default:Ta(e,a)}}function eg(e){var n=e.alternate;n!==null&&(e.alternate=null,eg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ha(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Fn=!1;function ji(e,n,a){for(a=a.child;a!==null;)ng(e,n,a),a=a.sibling}function ng(e,n,a){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:$e||Ti(a,n),ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Ti(a,n);var o=We,u=Fn;La(a.type)&&(We=a.stateNode,Fn=!1),ji(e,n,a),To(a.stateNode),We=o,Fn=u;break;case 5:$e||Ti(a,n);case 6:if(o=We,u=Fn,We=null,ji(e,n,a),We=o,Fn=u,We!==null)if(Fn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(d){He(a,n,d)}else try{We.removeChild(a.stateNode)}catch(d){He(a,n,d)}break;case 18:We!==null&&(Fn?(e=We,Xg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Uo(e)):Xg(We,a.stateNode));break;case 4:o=We,u=Fn,We=a.stateNode.containerInfo,Fn=!0,ji(e,n,a),We=o,Fn=u;break;case 0:case 11:case 14:case 15:$e||Ea(2,a,n),$e||Ea(4,a,n),ji(e,n,a);break;case 1:$e||(Ti(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Zm(a,n,o)),ji(e,n,a);break;case 21:ji(e,n,a);break;case 22:$e=(o=$e)||a.memoizedState!==null,ji(e,n,a),$e=o;break;default:ji(e,n,a)}}function ig(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Uo(e)}catch(a){He(n,n.return,a)}}function Rx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new $m),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new $m),n;default:throw Error(r(435,e.tag))}}function ff(e,n){var a=Rx(e);n.forEach(function(o){var u=Ix.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,b=M;t:for(;b!==null;){switch(b.tag){case 27:if(La(b.type)){We=b.stateNode,Fn=!1;break t}break;case 5:We=b.stateNode,Fn=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,Fn=!0;break t}b=b.return}if(We===null)throw Error(r(160));ng(d,M,u),We=null,Fn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ag(n,e),n=n.sibling}var pi=null;function ag(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(Ea(3,e,e.return),po(3,e),Ea(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&($e||a===null||Ti(a,a.return)),o&64&&Yi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=pi;if(jn(n,e),Zn(e),o&512&&($e||a===null||Ti(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[fa]||d[sn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Tn(d,o,a),d[sn]=e,en(d),o=d;break t;case"link":var M=Jg("link","href",u).get(o+(a.href||""));if(M){for(var b=0;b<M.length;b++)if(d=M[b],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(b,1);break e}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=Jg("meta","content",u).get(o+(a.content||""))){for(b=0;b<M.length;b++)if(d=M[b],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(b,1);break e}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[sn]=e,en(d),o=d}e.stateNode=o}else $g(u,e.type,e.stateNode);else e.stateNode=Qg(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?$g(u,e.type,e.stateNode):Qg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&of(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&($e||a===null||Ti(a,a.return)),a!==null&&o&4&&of(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&($e||a===null||Ti(a,a.return)),e.flags&32){u=e.stateNode;try{Si(u,"")}catch(ot){He(e,e.return,ot)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,of(e,u,a!==null?a.memoizedProps:u)),o&1024&&(uf=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ot){He(e,e.return,ot)}}break;case 3:if(Zl=null,u=pi,pi=Yl(n.containerInfo),jn(n,e),pi=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Uo(n.containerInfo)}catch(ot){He(e,e.return,ot)}uf&&(uf=!1,rg(e));break;case 4:o=pi,pi=Yl(e.stateNode.containerInfo),jn(n,e),Zn(e),pi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_f=ee()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ff(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,it=Yi,ft=$e;if(Yi=it||u,$e=ft||F,jn(n,e),$e=ft,Yi=it,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||Yi||$e||hr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(d=F.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=F.stateNode;var _t=F.memoizedProps.style,rt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(ot){He(F,F.return,ot)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(ot){He(F,F.return,ot)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ff(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ff(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Qm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=lf(e);Ol(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(Si(M,""),a.flags&=-33);var b=lf(e);Ol(e,b,M);break;case 3:case 4:var F=a.stateNode.containerInfo,it=lf(e);cf(e,it,F);break;default:throw Error(r(161))}}catch(ft){He(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function rg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;rg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)tg(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),hr(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Zm(n,n.return,a),hr(n);break;case 27:To(n.stateNode);case 26:case 5:Ti(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:ba(u,d,a),po(4,d);break;case 1:if(ba(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){He(o,o.return,it)}if(o=d,u=o.updateQueue,u!==null){var b=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Op(F[u],b)}catch(it){He(o,o.return,it)}}a&&M&64&&jm(d),mo(d,d.return);break;case 27:Jm(d);case 26:case 5:ba(u,d,a),a&&o===null&&M&4&&Km(d),mo(d,d.return);break;case 12:ba(u,d,a);break;case 13:ba(u,d,a),a&&M&4&&ig(u,d);break;case 22:d.memoizedState===null&&ba(u,d,a),mo(d,d.return);break;case 30:break;default:ba(u,d,a)}n=n.sibling}}function hf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$s(a))}function df(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e))}function bi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sg(e,n,a,o),n=n.sibling}function sg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,o),u&2048&&po(9,n);break;case 1:bi(e,n,a,o);break;case 3:bi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e)));break;case 12:if(u&2048){bi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,b=d.onPostCommit;typeof b=="function"&&b(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){He(n,n.return,F)}}else bi(e,n,a,o);break;case 13:bi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?bi(e,n,a,o):go(e,n):d._visibility&2?bi(e,n,a,o):(d._visibility|=2,Zr(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&hf(M,n);break;case 24:bi(e,n,a,o),u&2048&&df(n.alternate,n);break;default:bi(e,n,a,o)}}function Zr(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,M=n,b=a,F=o,it=M.flags;switch(M.tag){case 0:case 11:case 15:Zr(d,M,b,F,u),po(8,M);break;case 23:break;case 22:var ft=M.stateNode;M.memoizedState!==null?ft._visibility&2?Zr(d,M,b,F,u):go(d,M):(ft._visibility|=2,Zr(d,M,b,F,u)),u&&it&2048&&hf(M.alternate,M);break;case 24:Zr(d,M,b,F,u),u&&it&2048&&df(M.alternate,M);break;default:Zr(d,M,b,F,u)}n=n.sibling}}function go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:go(a,o),u&2048&&hf(o.alternate,o);break;case 24:go(a,o),u&2048&&df(o.alternate,o);break;default:go(a,o)}n=n.sibling}}var _o=8192;function Kr(e){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)og(e),e=e.sibling}function og(e){switch(e.tag){case 26:Kr(e),e.flags&_o&&e.memoizedState!==null&&hy(pi,e.memoizedState,e.memoizedProps);break;case 5:Kr(e);break;case 3:case 4:var n=pi;pi=Yl(e.stateNode.containerInfo),Kr(e),pi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=_o,_o=16777216,Kr(e),_o=n):Kr(e));break;default:Kr(e)}}function lg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,ug(o,e)}lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Pl(e)):vo(e);break;default:vo(e)}}function Pl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,ug(o,e)}lg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}e=e.sibling}}function ug(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$s(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,d=o.return;if(eg(o),o===a){gn=null;break t}if(u!==null){u.return=d,gn=u;break t}gn=d}}}var Cx={getCacheForType:function(e){var n=wn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},wx=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,me=null,Se=0,Le=0,Kn=null,Aa=!1,Qr=!1,pf=!1,Zi=0,Ke=0,Ra=0,dr=0,mf=0,oi=0,Jr=0,xo=null,Hn=null,gf=!1,_f=0,Il=1/0,zl=null,Ca=null,En=0,wa=null,$r=null,ts=0,vf=0,xf=null,fg=null,yo=0,yf=null;function Qn(){if((De&2)!==0&&Se!==0)return Se&-Se;if(I.T!==null){var e=Gr;return e!==0?e:Rf()}return Ee()}function hg(){oi===0&&(oi=(Se&536870912)===0||Ce?W():536870912);var e=si.current;return e!==null&&(e.flags|=32),oi}function Jn(e,n,a){(e===ke&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(es(e,0),Da(e,Se,oi,!1)),gt(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(dr|=a),Ke===4&&Da(e,Se,oi,!1)),Ai(e))}function dg(e,n,a){if((De&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ne(e,n),u=o?Ux(e,n):Ef(e,n,!0),d=o;do{if(u===0){Qr&&!o&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!Dx(a)){u=Ef(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var b=e;u=xo;var F=b.current.memoizedState.isDehydrated;if(F&&(es(b,M).flags|=256),M=Ef(b,M,!1),M!==2){if(pf&&!F){b.errorRecoveryDisabledLanes|=d,dr|=d,u=4;break t}d=Hn,Hn=u,d!==null&&(Hn===null?Hn=d:Hn.push.apply(Hn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){es(e,0),Da(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,oi,!Aa);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=_f+300-ee(),10<u)){if(Da(o,n,oi,!Aa),ce(o,0,!0)!==0)break t;o.timeoutHandle=Vg(pg.bind(null,o,a,Hn,zl,gf,n,oi,dr,Jr,Aa,d,2,-0,0),u);break t}pg(o,a,Hn,zl,gf,n,oi,dr,Jr,Aa,d,0,-0,0)}}break}while(!0);Ai(e)}function pg(e,n,a,o,u,d,M,b,F,it,ft,_t,rt,ot){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(Ro={stylesheets:null,count:0,unsuspend:fy},og(n),_t=dy(),_t!==null)){e.cancelPendingCommit=_t(Sg.bind(null,e,n,d,a,o,u,M,b,F,ft,1,rt,ot)),Da(e,d,M,!it);return}Sg(e,n,d,a,o,u,M,b,F)}function Dx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!qn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,o){n&=~mf,n&=~dr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Rt(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&Nt(e,a,n)}function Bl(){return(De&6)===0?(So(0),!1):!0}function Sf(){if(me!==null){if(Le===0)var e=me.return;else e=me,Gi=or=null,zu(e),Yr=null,uo=0,e=me;for(;e!==null;)Ym(e.alternate,e),e=e.return;me=null}}function es(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,jx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sf(),ke=e,me=a=Bi(e.current,null),Se=n,Le=0,Kn=null,Aa=!1,Qr=ne(e,n),pf=!1,Jr=oi=mf=dr=Ra=Ke=0,Hn=xo=null,gf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Rt(o),d=1<<u;n|=e[u],o&=~d}return Zi=n,sl(),a}function mg(e,n){ue=null,I.H=bl,n===eo||n===ml?(n=Up(),Le=3):n===wp?(n=Up(),Le=4):Le=n===Nm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,me===null&&(Ke=1,Dl(e,ni(n,e.current)))}function gg(){var e=I.H;return I.H=bl,e===null?bl:e}function _g(){var e=I.A;return I.A=Cx,e}function Mf(){Ke=4,Aa||(Se&4194048)!==Se&&si.current!==null||(Qr=!0),(Ra&134217727)===0&&(dr&134217727)===0||ke===null||Da(ke,Se,oi,!1)}function Ef(e,n,a){var o=De;De|=2;var u=gg(),d=_g();(ke!==e||Se!==n)&&(zl=null,es(e,n)),n=!1;var M=Ke;t:do try{if(Le!==0&&me!==null){var b=me,F=Kn;switch(Le){case 8:Sf(),M=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var it=Le;if(Le=0,Kn=null,ns(e,b,F,it),a&&Qr){M=0;break t}break;default:it=Le,Le=0,Kn=null,ns(e,b,F,it)}}Lx(),M=Ke;break}catch(ft){mg(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Gi=or=null,De=o,I.H=u,I.A=d,me===null&&(ke=null,Se=0,sl()),M}function Lx(){for(;me!==null;)vg(me)}function Ux(e,n){var a=De;De|=2;var o=gg(),u=_g();ke!==e||Se!==n?(zl=null,Il=ee()+500,es(e,n)):Qr=ne(e,n);t:do try{if(Le!==0&&me!==null){n=me;var d=Kn;e:switch(Le){case 1:Le=0,Kn=null,ns(e,n,d,1);break;case 2:case 9:if(Dp(d)){Le=0,Kn=null,xg(n);break}n=function(){Le!==2&&Le!==9||ke!==e||(Le=7),Ai(e)},d.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:Dp(d)?(Le=0,Kn=null,xg(n)):(Le=0,Kn=null,ns(e,n,d,7));break;case 5:var M=null;switch(me.tag){case 26:M=me.memoizedState;case 5:case 27:var b=me;if(!M||t_(M)){Le=0,Kn=null;var F=b.sibling;if(F!==null)me=F;else{var it=b.return;it!==null?(me=it,Fl(it)):me=null}break e}}Le=0,Kn=null,ns(e,n,d,5);break;case 6:Le=0,Kn=null,ns(e,n,d,6);break;case 8:Sf(),Ke=6;break t;default:throw Error(r(462))}}Nx();break}catch(ft){mg(e,ft)}while(!0);return Gi=or=null,I.H=o,I.A=u,De=a,me!==null?0:(ke=null,Se=0,sl(),Ke)}function Nx(){for(;me!==null&&!An();)vg(me)}function vg(e){var n=Wm(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Fl(e):me=n}function xg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Fm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Fm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:zu(n);default:Ym(a,n),n=me=yp(n,Zi),n=Wm(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Fl(e):me=n}function ns(e,n,a,o){Gi=or=null,zu(n),Yr=null,uo=0;var u=n.return;try{if(Mx(e,u,n,a,Se)){Ke=1,Dl(e,ni(a,e.current)),me=null;return}}catch(d){if(u!==null)throw me=u,d;Ke=1,Dl(e,ni(a,e.current)),me=null;return}n.flags&32768?(Ce||o===1?e=!0:Qr||(Se&536870912)!==0?e=!1:(Aa=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),yg(n,e)):Fl(n)}function Fl(e){var n=e;do{if((n.flags&32768)!==0){yg(n,Aa);return}e=n.return;var a=Tx(n.alternate,n,Zi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ke===0&&(Ke=5)}function yg(e,n){do{var a=bx(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ke=6,me=null}function Sg(e,n,a,o,u,d,M,b,F){e.cancelPendingCommit=null;do Hl();while(En!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=hu,Pt(e,a,d,M,b,F),e===ke&&(me=ke=null,Se=0),$r=n,wa=e,ts=a,vf=d,xf=u,fg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zx(P,function(){return Ag(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=q.p,q.p=2,M=De,De|=4;try{Ax(e,n,a)}finally{De=M,q.p=u,I.T=o}}En=1,Mg(),Eg(),Tg()}}function Mg(){if(En===1){En=0;var e=wa,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=q.p;q.p=2;var u=De;De|=4;try{ag(n,e);var d=Pf,M=up(e.containerInfo),b=d.focusedElem,F=d.selectionRange;if(M!==b&&b&&b.ownerDocument&&cp(b.ownerDocument.documentElement,b)){if(F!==null&&ou(b)){var it=F.start,ft=F.end;if(ft===void 0&&(ft=it),"selectionStart"in b)b.selectionStart=it,b.selectionEnd=Math.min(ft,b.value.length);else{var _t=b.ownerDocument||document,rt=_t&&_t.defaultView||window;if(rt.getSelection){var ot=rt.getSelection(),te=b.textContent.length,Kt=Math.min(F.start,te),Ie=F.end===void 0?Kt:Math.min(F.end,te);!ot.extend&&Kt>Ie&&(M=Ie,Ie=Kt,Kt=M);var Z=lp(b,Kt),V=lp(b,Ie);if(Z&&V&&(ot.rangeCount!==1||ot.anchorNode!==Z.node||ot.anchorOffset!==Z.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var tt=_t.createRange();tt.setStart(Z.node,Z.offset),ot.removeAllRanges(),Kt>Ie?(ot.addRange(tt),ot.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),ot.addRange(tt))}}}}for(_t=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&_t.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var dt=_t[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Jl=!!Of,Pf=Of=null}finally{De=u,q.p=o,I.T=a}}e.current=n,En=2}}function Eg(){if(En===2){En=0;var e=wa,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=q.p;q.p=2;var u=De;De|=4;try{tg(e,n.alternate,n)}finally{De=u,q.p=o,I.T=a}}En=3}}function Tg(){if(En===4||En===3){En=0,fe();var e=wa,n=$r,a=ts,o=fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,$r=wa=null,bg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ca=null),tn(a),n=n.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=q.p,q.p=2,I.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var b=o[M];d(b.value,{componentStack:b.stack})}}finally{I.T=n,q.p=u}}(ts&3)!==0&&Hl(),Ai(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===yf?yo++:(yo=0,yf=e):yo=0,So(0)}}function bg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$s(n)))}function Hl(e){return Mg(),Eg(),Tg(),Ag()}function Ag(){if(En!==5)return!1;var e=wa,n=vf;vf=0;var a=tn(ts),o=I.T,u=q.p;try{q.p=32>a?32:a,I.T=null,a=xf,xf=null;var d=wa,M=ts;if(En=0,$r=wa=null,ts=0,(De&6)!==0)throw Error(r(331));var b=De;if(De|=4,cg(d.current),sg(d,d.current,M,a),De=b,So(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(ht,d)}catch{}return!0}finally{q.p=u,I.T=o,bg(e,n)}}function Rg(e,n,a){n=ni(a,n),n=Qu(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(gt(e,2),Ai(e))}function He(e,n,a){if(e.tag===3)Rg(e,e,a);else for(;n!==null;){if(n.tag===3){Rg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){e=ni(a,e),a=Lm(2),o=xa(n,a,2),o!==null&&(Um(a,o,n,e),gt(o,2),Ai(o));break}}n=n.return}}function Tf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new wx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(pf=!0,u.add(a),e=Ox.bind(null,e,n,a),n.then(e,e))}function Ox(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Se&a)===a&&(Ke===4||Ke===3&&(Se&62914560)===Se&&300>ee()-_f?(De&2)===0&&es(e,0):mf|=a,Jr===Se&&(Jr=0)),Ai(e)}function Cg(e,n){n===0&&(n=Lt()),e=zr(e,n),e!==null&&(gt(e,n),Ai(e))}function Px(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Cg(e,a)}function Ix(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Cg(e,a)}function zx(e,n){return oe(e,n)}var Gl=null,is=null,bf=!1,Vl=!1,Af=!1,pr=0;function Ai(e){e!==is&&e.next===null&&(is===null?Gl=is=e:is=is.next=e),Vl=!0,bf||(bf=!0,Fx())}function So(e,n){if(!Af&&Vl){Af=!0;do for(var a=!1,o=Gl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,b=o.pingedLanes;d=(1<<31-Rt(42|e)+1)-1,d&=u&~(M&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Ug(o,d))}else d=Se,d=ce(o,o===ke?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||ne(o,d)||(a=!0,Ug(o,d));o=o.next}while(a);Af=!1}}function Bx(){wg()}function wg(){Vl=bf=!1;var e=0;pr!==0&&(Yx()&&(e=pr),pr=0);for(var n=ee(),a=null,o=Gl;o!==null;){var u=o.next,d=Dg(o,n);d===0?(o.next=null,a===null?Gl=u:a.next=u,u===null&&(is=a)):(a=o,(e!==0||(d&3)!==0)&&(Vl=!0)),o=u}So(e)}function Dg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Rt(d),b=1<<M,F=u[M];F===-1?((b&a)===0||(b&o)!==0)&&(u[M]=Ne(b,n)):F<=n&&(e.expiredLanes|=b),d&=~b}if(n=ke,a=Se,a=ce(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&G(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&G(o),tn(a)){case 2:case 8:a=Ft;break;case 32:a=P;break;case 268435456:a=at;break;default:a=P}return o=Lg.bind(null,e),a=oe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&G(o),e.callbackPriority=2,e.callbackNode=null,2}function Lg(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hl()&&e.callbackNode!==a)return null;var o=Se;return o=ce(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(dg(e,o,n),Dg(e,ee()),e.callbackNode!=null&&e.callbackNode===a?Lg.bind(null,e):null)}function Ug(e,n){if(Hl())return null;dg(e,n,!0)}function Fx(){Zx(function(){(De&6)!==0?oe(Re,Bx):wg()})}function Rf(){return pr===0&&(pr=W()),pr}function Ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$o(""+e)}function Og(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Hx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Ng((u[yn]||null).action),M=o.submitter;M&&(n=(n=M[yn]||null)?Ng(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var b=new il("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pr!==0){var F=M?Og(u,M):new FormData(u);qu(a,{pending:!0,data:F,method:u.method,action:d},null,F)}}else typeof d=="function"&&(b.preventDefault(),F=M?Og(u,M):new FormData(u),qu(a,{pending:!0,data:F,method:u.method,action:d},d,F))},currentTarget:u}]})}}for(var Cf=0;Cf<fu.length;Cf++){var wf=fu[Cf],Gx=wf.toLowerCase(),Vx=wf[0].toUpperCase()+wf.slice(1);di(Gx,"on"+Vx)}di(dp,"onAnimationEnd"),di(pp,"onAnimationIteration"),di(mp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(rx,"onTransitionRun"),di(sx,"onTransitionStart"),di(ox,"onTransitionCancel"),di(gp,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Pg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var b=o[M],F=b.instance,it=b.currentTarget;if(b=b.listener,F!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=it;try{d(u)}catch(ft){wl(ft)}u.currentTarget=null,d=F}else for(M=0;M<o.length;M++){if(b=o[M],F=b.instance,it=b.currentTarget,b=b.listener,F!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=it;try{d(u)}catch(ft){wl(ft)}u.currentTarget=null,d=F}}}}function ge(e,n){var a=n[Ka];a===void 0&&(a=n[Ka]=new Set);var o=e+"__bubble";a.has(o)||(Ig(n,e,2,!1),a.add(o))}function Df(e,n,a){var o=0;n&&(o|=4),Ig(a,e,o,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[kl]){e[kl]=!0,Qo.forEach(function(a){a!=="selectionchange"&&(kx.has(a)||Df(a,!1,e),Df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kl]||(n[kl]=!0,Df("selectionchange",!1,n))}}function Ig(e,n,a,o){switch(s_(n)){case 2:var u=gy;break;case 8:u=_y;break;default:u=Wf}a=u.bind(null,n,a,e),u=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Uf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var b=o.stateNode.containerInfo;if(b===u)break;if(M===4)for(M=o.return;M!==null;){var F=M.tag;if((F===3||F===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;b!==null;){if(M=Ui(b),M===null)return;if(F=M.tag,F===5||F===6||F===26||F===27){o=d=M;continue t}b=b.parentNode}}o=o.return}kd(function(){var it=d,ft=Kc(a),_t=[];t:{var rt=_p.get(e);if(rt!==void 0){var ot=il,te=e;switch(e){case"keypress":if(el(a)===0)break t;case"keydown":case"keyup":ot=zv;break;case"focusin":te="focus",ot=nu;break;case"focusout":te="blur",ot=nu;break;case"beforeblur":case"afterblur":ot=nu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Hv;break;case dp:case pp:case mp:ot=Cv;break;case gp:ot=Vv;break;case"scroll":case"scrollend":ot=Ev;break;case"wheel":ot=Xv;break;case"copy":case"cut":case"paste":ot=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=jd;break;case"toggle":case"beforetoggle":ot=qv}var Kt=(n&4)!==0,Ie=!Kt&&(e==="scroll"||e==="scrollend"),Z=Kt?rt!==null?rt+"Capture":null:rt;Kt=[];for(var V=it,tt;V!==null;){var dt=V;if(tt=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||tt===null||Z===null||(dt=Hs(V,Z),dt!=null&&Kt.push(Eo(V,dt,tt))),Ie)break;V=V.return}0<Kt.length&&(rt=new ot(rt,te,null,a,ft),_t.push({event:rt,listeners:Kt}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",rt&&a!==Zc&&(te=a.relatedTarget||a.fromElement)&&(Ui(te)||te[In]))break t;if((ot||rt)&&(rt=ft.window===ft?ft:(rt=ft.ownerDocument)?rt.defaultView||rt.parentWindow:window,ot?(te=a.relatedTarget||a.toElement,ot=it,te=te?Ui(te):null,te!==null&&(Ie=c(te),Kt=te.tag,te!==Ie||Kt!==5&&Kt!==27&&Kt!==6)&&(te=null)):(ot=null,te=it),ot!==te)){if(Kt=qd,dt="onMouseLeave",Z="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Kt=jd,dt="onPointerLeave",Z="onPointerEnter",V="pointer"),Ie=ot==null?rt:Ja(ot),tt=te==null?rt:Ja(te),rt=new Kt(dt,V+"leave",ot,a,ft),rt.target=Ie,rt.relatedTarget=tt,dt=null,Ui(ft)===it&&(Kt=new Kt(Z,V+"enter",te,a,ft),Kt.target=tt,Kt.relatedTarget=Ie,dt=Kt),Ie=dt,ot&&te)e:{for(Kt=ot,Z=te,V=0,tt=Kt;tt;tt=as(tt))V++;for(tt=0,dt=Z;dt;dt=as(dt))tt++;for(;0<V-tt;)Kt=as(Kt),V--;for(;0<tt-V;)Z=as(Z),tt--;for(;V--;){if(Kt===Z||Z!==null&&Kt===Z.alternate)break e;Kt=as(Kt),Z=as(Z)}Kt=null}else Kt=null;ot!==null&&zg(_t,rt,ot,Kt,!1),te!==null&&Ie!==null&&zg(_t,Ie,te,Kt,!0)}}t:{if(rt=it?Ja(it):window,ot=rt.nodeName&&rt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&rt.type==="file")var Gt=np;else if(tp(rt))if(ip)Gt=nx;else{Gt=tx;var he=$v}else ot=rt.nodeName,!ot||ot.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&jc(it.elementType)&&(Gt=np):Gt=ex;if(Gt&&(Gt=Gt(e,it))){ep(_t,Gt,a,ft);break t}he&&he(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&Cn(rt,"number",rt.value)}switch(he=it?Ja(it):window,e){case"focusin":(tp(he)||he.contentEditable==="true")&&(Or=he,lu=it,js=null);break;case"focusout":js=lu=Or=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,fp(_t,a,ft);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":fp(_t,a,ft)}var Vt;if(au)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Nr?Jd(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Zd&&a.locale!=="ko"&&(Nr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Nr&&(Vt=Xd()):(ma=ft,$c="value"in ma?ma.value:ma.textContent,Nr=!0)),he=Xl(it,Jt),0<he.length&&(Jt=new Yd(Jt,e,null,a,ft),_t.push({event:Jt,listeners:he}),Vt?Jt.data=Vt:(Vt=$d(a),Vt!==null&&(Jt.data=Vt)))),(Vt=jv?Zv(e,a):Kv(e,a))&&(Jt=Xl(it,"onBeforeInput"),0<Jt.length&&(he=new Yd("onBeforeInput","beforeinput",null,a,ft),_t.push({event:he,listeners:Jt}),he.data=Vt)),Hx(_t,e,it,a,ft)}Pg(_t,n)})}function Eo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Hs(e,a),u!=null&&o.unshift(Eo(e,u,d)),u=Hs(e,n),u!=null&&o.push(Eo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function as(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zg(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var b=a,F=b.alternate,it=b.stateNode;if(b=b.tag,F!==null&&F===o)break;b!==5&&b!==26&&b!==27||it===null||(F=it,u?(it=Hs(a,d),it!=null&&M.unshift(Eo(a,it,F))):u||(it=Hs(a,d),it!=null&&M.push(Eo(a,it,F)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Xx=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function Bg(e){return(typeof e=="string"?e:""+e).replace(Xx,`
`).replace(Wx,"")}function Fg(e,n){return n=Bg(n),Bg(e)===n}function Wl(){}function Pe(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Si(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Si(e,""+o);break;case"className":Ct(e,"class",o);break;case"tabIndex":Ct(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,o);break;case"style":Gd(e,o,d);break;case"data":if(n!=="object"){Ct(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$o(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",u.name,u,null),Pe(e,n,"formEncType",u.formEncType,u,null),Pe(e,n,"formMethod",u.formMethod,u,null),Pe(e,n,"formTarget",u.formTarget,u,null)):(Pe(e,n,"encType",u.encType,u,null),Pe(e,n,"method",u.method,u,null),Pe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$o(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Wl);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=$o(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Et(e,"popover",o);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Et(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sv.get(a)||a,Et(e,a,o))}}function Nf(e,n,a,o,u,d){switch(a){case"style":Gd(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Si(e,o):(typeof o=="number"||typeof o=="bigint")&&Si(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[yn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Et(e,a,o)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,d,M,a,null)}}u&&Pe(e,n,"srcSet",a.srcSet,a,null),o&&Pe(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var b=d=M=u=null,F=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":M=ft;break;case"checked":F=ft;break;case"defaultChecked":it=ft;break;case"value":d=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Pe(e,n,o,ft,a,null)}}Fe(e,d,b,F,it,M,u,!1),je(e);return;case"select":ge("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":M=b;break;case"multiple":o=b;default:Pe(e,n,u,b,a,null)}n=d,a=M,e.multiple=!!o,n!=null?on(e,!!o,n,!1):a!=null&&on(e,!!o,a,!0);return;case"textarea":ge("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(b=a[M],b!=null))switch(M){case"value":o=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Pe(e,n,M,b,a,null)}Sn(e,o,u,d),je(e);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pe(e,n,F,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<Mo.length;o++)ge(Mo[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,it,o,a,null)}return;default:if(jc(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Nf(e,n,ft,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Pe(e,n,b,o,a,null))}function qx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,b=null,F=null,it=null,ft=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":F=_t;default:o.hasOwnProperty(ot)||Pe(e,n,ot,null,o,_t)}}for(var rt in o){var ot=o[rt];if(_t=a[rt],o.hasOwnProperty(rt)&&(ot!=null||_t!=null))switch(rt){case"type":d=ot;break;case"name":u=ot;break;case"checked":it=ot;break;case"defaultChecked":ft=ot;break;case"value":M=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==_t&&Pe(e,n,rt,ot,o,_t)}}Pi(e,M,b,F,it,ft,d,u);return;case"select":ot=M=b=rt=null;for(d in a)if(F=a[d],a.hasOwnProperty(d)&&F!=null)switch(d){case"value":break;case"multiple":ot=F;default:o.hasOwnProperty(d)||Pe(e,n,d,null,o,F)}for(u in o)if(d=o[u],F=a[u],o.hasOwnProperty(u)&&(d!=null||F!=null))switch(u){case"value":rt=d;break;case"defaultValue":b=d;break;case"multiple":M=d;default:d!==F&&Pe(e,n,u,d,o,F)}n=b,a=M,o=ot,rt!=null?on(e,!!a,rt,!1):!!o!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":ot=rt=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(e,n,b,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":rt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Pe(e,n,M,u,o,d)}pn(e,rt,ot);return;case"option":for(var te in a)if(rt=a[te],a.hasOwnProperty(te)&&rt!=null&&!o.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Pe(e,n,te,null,o,rt)}for(F in o)if(rt=o[F],ot=a[F],o.hasOwnProperty(F)&&rt!==ot&&(rt!=null||ot!=null))switch(F){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Pe(e,n,F,rt,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)rt=a[Kt],a.hasOwnProperty(Kt)&&rt!=null&&!o.hasOwnProperty(Kt)&&Pe(e,n,Kt,null,o,rt);for(it in o)if(rt=o[it],ot=a[it],o.hasOwnProperty(it)&&rt!==ot&&(rt!=null||ot!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:Pe(e,n,it,rt,o,ot)}return;default:if(jc(n)){for(var Ie in a)rt=a[Ie],a.hasOwnProperty(Ie)&&rt!==void 0&&!o.hasOwnProperty(Ie)&&Nf(e,n,Ie,void 0,o,rt);for(ft in o)rt=o[ft],ot=a[ft],!o.hasOwnProperty(ft)||rt===ot||rt===void 0&&ot===void 0||Nf(e,n,ft,rt,o,ot);return}}for(var Z in a)rt=a[Z],a.hasOwnProperty(Z)&&rt!=null&&!o.hasOwnProperty(Z)&&Pe(e,n,Z,null,o,rt);for(_t in o)rt=o[_t],ot=a[_t],!o.hasOwnProperty(_t)||rt===ot||rt==null&&ot==null||Pe(e,n,_t,rt,o,ot)}var Of=null,Pf=null;function ql(e){return e.nodeType===9?e:e.ownerDocument}function Hg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function If(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Yx(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,jx=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(e){return kg.resolve(null).then(e).catch(Kx)}:Vg;function Kx(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function Xg(e,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&To(M.documentElement),a&2&&To(M.body),a&4)for(a=M.head,To(a),M=a.firstChild;M;){var b=M.nextSibling,F=M.nodeName;M[fa]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=b}}if(u===0){e.removeChild(d),Uo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Uo(n)}function Bf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Qx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function Jx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function $x(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Hf=null;function Wg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function qg(e,n,a){switch(n=ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ha(e)}var li=new Map,Yg=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ki=q.d;q.d={f:ty,r:ey,D:ny,C:iy,L:ay,m:ry,X:oy,S:sy,M:ly};function ty(){var e=Ki.f(),n=Bl();return e||n}function ey(e){var n=Ni(e);n!==null&&n.tag===5&&n.type==="form"?dm(n):Ki.r(e)}var rs=typeof document>"u"?null:document;function jg(e,n,a){var o=rs;if(o&&typeof n=="string"&&n){var u=Ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Yg.has(u)||(Yg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",e),en(n),o.head.appendChild(n)))}}function ny(e){Ki.D(e),jg("dns-prefetch",e,null)}function iy(e,n){Ki.C(e,n),jg("preconnect",e,n)}function ay(e,n,a){Ki.L(e,n,a);var o=rs;if(o&&e&&n){var u='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ve(a.imageSizes)+'"]')):u+='[href="'+Ve(e)+'"]';var d=u;switch(n){case"style":d=ss(e);break;case"script":d=os(e)}li.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(bo(d))||n==="script"&&o.querySelector(Ao(d))||(n=o.createElement("link"),Tn(n,"link",e),en(n),o.head.appendChild(n)))}}function ry(e,n){Ki.m(e,n);var a=rs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ve(o)+'"][href="'+Ve(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=os(e)}if(!li.has(d)&&(e=g({rel:"modulepreload",href:e},n),li.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(d)))return}o=a.createElement("link"),Tn(o,"link",e),en(o),a.head.appendChild(o)}}}function sy(e,n,a){Ki.S(e,n,a);var o=rs;if(o&&e){var u=da(o).hoistableStyles,d=ss(e);n=n||"default";var M=u.get(d);if(!M){var b={loading:0,preload:null};if(M=o.querySelector(bo(d)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(d))&&Gf(e,a);var F=M=o.createElement("link");en(F),Tn(F,"link",e),F._p=new Promise(function(it,ft){F.onload=it,F.onerror=ft}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,jl(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:b},u.set(d,M)}}}function oy(e,n){Ki.X(e,n);var a=rs;if(a&&e){var o=da(a).hoistableScripts,u=os(e),d=o.get(u);d||(d=a.querySelector(Ao(u)),d||(e=g({src:e,async:!0},n),(n=li.get(u))&&Vf(e,n),d=a.createElement("script"),en(d),Tn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function ly(e,n){Ki.M(e,n);var a=rs;if(a&&e){var o=da(a).hoistableScripts,u=os(e),d=o.get(u);d||(d=a.querySelector(Ao(u)),d||(e=g({src:e,async:!0,type:"module"},n),(n=li.get(u))&&Vf(e,n),d=a.createElement("script"),en(d),Tn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Zg(e,n,a,o){var u=(u=yt.current)?Yl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ss(a.href),a=da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ss(a.href);var d=da(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(bo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),d||cy(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=os(a),a=da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ss(e){return'href="'+Ve(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function Kg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function cy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),en(n),e.head.appendChild(n))}function os(e){return'[src="'+Ve(e)+'"]'}function Ao(e){return"script[async]"+e}function Qg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(o)return n.instance=o,en(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),en(o),Tn(o,"style",u),jl(o,a.precedence,e),n.instance=o;case"stylesheet":u=ss(a.href);var d=e.querySelector(bo(u));if(d)return n.state.loading|=4,n.instance=d,en(d),d;o=Kg(a),(u=li.get(u))&&Gf(o,u),d=(e.ownerDocument||e).createElement("link"),en(d);var M=d;return M._p=new Promise(function(b,F){M.onload=b,M.onerror=F}),Tn(d,"link",o),n.state.loading|=4,jl(d,a.precedence,e),n.instance=d;case"script":return d=os(a.src),(u=e.querySelector(Ao(d)))?(n.instance=u,en(u),u):(o=a,(u=li.get(d))&&(o=g({},a),Vf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),en(u),Tn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,jl(o,a.precedence,e));return n.instance}function jl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var b=o[M];if(b.dataset.precedence===n)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function Jg(e,n,a){if(Zl===null){var o=new Map,u=Zl=new Map;u.set(a,o)}else u=Zl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[fa]||d[sn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var b=o.get(M);b?b.push(d):o.set(M,[d])}}return o}function $g(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function uy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ro=null;function fy(){}function hy(e,n,a){if(Ro===null)throw Error(r(475));var o=Ro;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ss(a.href),d=e.querySelector(bo(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Kl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,en(d);return}d=e.ownerDocument||e,a=Kg(a),(u=li.get(u))&&Gf(a,u),d=d.createElement("link"),en(d);var M=d;M._p=new Promise(function(b,F){M.onload=b,M.onerror=F}),Tn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Kl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function dy(){if(Ro===null)throw Error(r(475));var e=Ro;return e.stylesheets&&e.count===0&&kf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&kf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Kl(){if(this.count--,this.count===0){if(this.stylesheets)kf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ql=null;function kf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ql=new Map,n.forEach(py,e),Ql=null,Kl.call(e))}function py(e,n){if(!(n.state.loading&4)){var a=Ql.get(e);if(a)var o=a.get(null);else{a=new Map,Ql.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=Kl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Co={$$typeof:L,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function my(e,n,a,o,u,d,M,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ut(0),this.hiddenUpdates=ut(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function e_(e,n,a,o,u,d,M,b,F,it,ft,_t){return e=new my(e,n,a,M,b,F,it,_t),n=1,d===!0&&(n|=24),d=Yn(3,null,null,n),e.current=d,d.stateNode=e,n=Eu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ru(d),e}function n_(e){return e?(e=Br,e):Br}function i_(e,n,a,o,u,d){u=n_(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=xa(e,o,n),a!==null&&(Jn(a,e,n),io(a,e,n))}function a_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Xf(e,n){a_(e,n),(e=e.alternate)&&a_(e,n)}function r_(e){if(e.tag===13){var n=zr(e,67108864);n!==null&&Jn(n,e,67108864),Xf(e,67108864)}}var Jl=!0;function gy(e,n,a,o){var u=I.T;I.T=null;var d=q.p;try{q.p=2,Wf(e,n,a,o)}finally{q.p=d,I.T=u}}function _y(e,n,a,o){var u=I.T;I.T=null;var d=q.p;try{q.p=8,Wf(e,n,a,o)}finally{q.p=d,I.T=u}}function Wf(e,n,a,o){if(Jl){var u=qf(o);if(u===null)Uf(e,n,o,$l,a),o_(e,o);else if(xy(u,e,n,a,o))o.stopPropagation();else if(o_(e,o),n&4&&-1<vy.indexOf(e)){for(;u!==null;){var d=Ni(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Ot(d.pendingLanes);if(M!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var F=1<<31-Rt(M);b.entanglements[1]|=F,M&=~F}Ai(d),(De&6)===0&&(Il=ee()+500,So(0))}}break;case 13:b=zr(d,2),b!==null&&Jn(b,d,2),Bl(),Xf(d,2)}if(d=qf(o),d===null&&Uf(e,n,o,$l,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Uf(e,n,o,null,a)}}function qf(e){return e=Kc(e),Yf(e)}var $l=null;function Yf(e){if($l=null,e=Ui(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $l=e,null}function s_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bt()){case Re:return 2;case Ft:return 8;case P:case A:return 32;case at:return 268435456;default:return 32}default:return 32}}var jf=!1,Ua=null,Na=null,Oa=null,wo=new Map,Do=new Map,Pa=[],vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o_(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Lo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ni(n),n!==null&&r_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function xy(e,n,a,o,u){switch(n){case"focusin":return Ua=Lo(Ua,e,n,a,o,u),!0;case"dragenter":return Na=Lo(Na,e,n,a,o,u),!0;case"mouseover":return Oa=Lo(Oa,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return wo.set(d,Lo(wo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Do.set(d,Lo(Do.get(d)||null,e,n,a,o,u)),!0}return!1}function l_(e){var n=Ui(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Wn(e.priority,function(){if(a.tag===13){var o=Qn();o=Ge(o);var u=zr(a,o);u!==null&&Jn(u,a,o),Xf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Zc=o,a.target.dispatchEvent(o),Zc=null}else return n=Ni(a),n!==null&&r_(n),e.blockedOn=a,!1;n.shift()}return!0}function c_(e,n,a){tc(e)&&a.delete(n)}function yy(){jf=!1,Ua!==null&&tc(Ua)&&(Ua=null),Na!==null&&tc(Na)&&(Na=null),Oa!==null&&tc(Oa)&&(Oa=null),wo.forEach(c_),Do.forEach(c_)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,jf||(jf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,yy)))}var nc=null;function u_(e){nc!==e&&(nc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){nc===e&&(nc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Yf(o||a)===null)continue;break}var d=Ni(a);d!==null&&(e.splice(n,3),n-=3,qu(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Uo(e){function n(F){return ec(F,e)}Ua!==null&&ec(Ua,e),Na!==null&&ec(Na,e),Oa!==null&&ec(Oa,e),wo.forEach(n),Do.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)l_(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[yn]||null;if(typeof d=="function")M||u_(a);else if(M){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[yn]||null)b=M.formAction;else if(Yf(u)!==null)continue}else b=M.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),u_(a)}}}function Zf(e){this._internalRoot=e}ic.prototype.render=Zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();i_(a,o,e,n,null,null)},ic.prototype.unmount=Zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;i_(e.current,2,null,e,null,null),Bl(),n[In]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&l_(e)}};var f_=t.version;if(f_!=="19.1.1")throw Error(r(527,f_,"19.1.1"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Sy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{ht=ac.inject(Sy),It=ac}catch{}}return Oo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Rm,d=Cm,M=wm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=e_(e,1,!1,null,null,a,o,u,d,M,b,null),e[In]=n.current,Lf(e),new Zf(n)},Oo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=Rm,M=Cm,b=wm,F=null,it=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&(it=a.formState)),n=e_(e,1,!0,n,a??null,o,u,d,M,b,F,it),n.context=n_(null),a=n.current,o=Qn(),o=Ge(o),u=va(o),u.callback=null,xa(a,u,o),a=o,n.current.lanes=a,gt(n,a),Ai(n),e[In]=n.current,Lf(e),new ic(n)},Oo.version="19.1.1",Oo}var S_;function Ly(){if(S_)return Qf.exports;S_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Qf.exports=Dy(),Qf.exports}var Uy=Ly(),kn=Rd();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cd="174",bs={ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ny=0,M_=1,Oy=2,H0=1,Py=2,ia=3,la=0,Xn=1,Ci=2,ja=0,As=1,E_=2,T_=3,b_=4,Iy=5,Er=100,zy=101,By=102,Fy=103,Hy=104,Gy=200,Vy=201,ky=202,Xy=203,zh=204,Bh=205,Wy=206,qy=207,Yy=208,jy=209,Zy=210,Ky=211,Qy=212,Jy=213,$y=214,Fh=0,Hh=1,Gh=2,Ds=3,Vh=4,kh=5,Xh=6,Wh=7,G0=0,tS=1,eS=2,Za=0,nS=1,iS=2,aS=3,rS=4,sS=5,oS=6,lS=7,V0=300,Ls=301,Us=302,qh=303,Yh=304,Xc=306,jh=1e3,br=1001,Zh=1002,hi=1003,cS=1004,rc=1005,wi=1006,nh=1007,Ar=1008,ca=1009,k0=1010,X0=1011,ko=1012,wd=1013,Rr=1014,aa=1015,Wo=1016,Dd=1017,Ld=1018,Ns=1020,W0=35902,q0=1021,Y0=1022,yi=1023,j0=1024,Z0=1025,Rs=1026,Os=1027,K0=1028,Ud=1029,Q0=1030,Nd=1031,Od=1033,Dc=33776,Lc=33777,Uc=33778,Nc=33779,Kh=35840,Qh=35841,Jh=35842,$h=35843,td=36196,ed=37492,nd=37496,id=37808,ad=37809,rd=37810,sd=37811,od=37812,ld=37813,cd=37814,ud=37815,fd=37816,hd=37817,dd=37818,pd=37819,md=37820,gd=37821,Oc=36492,_d=36494,vd=36495,J0=36283,xd=36284,yd=36285,Sd=36286,uS=3200,fS=3201,$0=0,hS=1,Wa="",ei="srgb",Ps="srgb-linear",zc="linear",ze="srgb",ls=7680,A_=519,dS=512,pS=513,mS=514,tv=515,gS=516,_S=517,vS=518,xS=519,R_=35044,C_="300 es",ra=2e3,Bc=2001;class Dr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,Md=180/Math.PI;function qo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function _e(s,t,i){return Math.max(t,Math.min(i,s))}function yS(s,t){return(s%t+t)%t}function ih(s,t,i){return(1-i)*s+i*t}function Po(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const SS={DEG2RAD:Pc};class qt{constructor(t=0,i=0){qt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,i,r,l,c,h,f,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,f,m,p)}set(t,i,r,l,c,h,f,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=f,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],f=r[3],m=r[6],p=r[1],g=r[4],v=r[7],_=r[2],S=r[5],E=r[8],T=l[0],y=l[3],x=l[6],O=l[1],L=l[4],w=l[7],B=l[2],H=l[5],z=l[8];return c[0]=h*T+f*O+m*B,c[3]=h*y+f*L+m*H,c[6]=h*x+f*w+m*z,c[1]=p*T+g*O+v*B,c[4]=p*y+g*L+v*H,c[7]=p*x+g*w+v*z,c[2]=_*T+S*O+E*B,c[5]=_*y+S*L+E*H,c[8]=_*x+S*w+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*f*p-r*c*g+r*f*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8],v=g*h-f*p,_=f*m-g*c,S=p*c-h*m,E=i*v+r*_+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(l*p-g*r)*T,t[2]=(f*r-l*h)*T,t[3]=_*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-f*i)*T,t[6]=S*T,t[7]=(r*m-p*i)*T,t[8]=(h*i-r*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,f){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*f)+h+t,-l*p,l*m,-l*(-p*h+m*f)+f+i,0,0,1),this}scale(t,i){return this.premultiply(ah.makeScale(t,i)),this}rotate(t){return this.premultiply(ah.makeRotation(-t)),this}translate(t,i){return this.premultiply(ah.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new se;function ev(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function MS(){const s=Xo("canvas");return s.style.display="block",s}const w_={};function Sr(s){s in w_||(w_[s]=!0,console.warn(s))}function ES(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function TS(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bS(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const D_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AS(){const s={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ze&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Cs(l.r),l.g=Cs(l.g),l.b=Cs(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?zc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ps]:{primaries:t,whitePoint:r,transfer:zc,toXYZ:D_,fromXYZ:L_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:D_,fromXYZ:L_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const Ae=AS();function sa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let cs;class RS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{cs===void 0&&(cs=Xo("canvas")),cs.width=t.width,cs.height=t.height;const r=cs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=cs}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xo("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=sa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(sa(i[r]/255)*255):i[r]=sa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let CS=0;class Pd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=qo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,f=l.length;h<f;h++)l[h].isDataTexture?c.push(rh(l[h].image)):c.push(rh(l[h]))}else c=rh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function rh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?RS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wS=0;class Pn extends Dr{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=br,l=br,c=wi,h=Ar,f=yi,m=ca,p=Pn.DEFAULT_ANISOTROPY,g=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=qo(),this.name="",this.source=new Pd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==V0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jh:t.x=t.x-Math.floor(t.x);break;case br:t.x=t.x<0?0:1;break;case Zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jh:t.y=t.y-Math.floor(t.y);break;case br:t.y=t.y<0?0:1;break;case Zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=V0;Pn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,r=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],_=m[1],S=m[5],E=m[9],T=m[2],y=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,w=(S+1)/2,B=(x+1)/2,H=(g+_)/4,z=(v+T)/4,k=(E+y)/4;return L>w&&L>B?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=H/r,c=z/r):w>B?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=H/l,c=k/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=z/c,l=k/c),this.set(r,l,c,i),this}let O=Math.sqrt((y-E)*(y-E)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(v-T)/O,this.z=(_-g)/O,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DS extends Dr{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Pn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let f=0;f<h;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Pd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends DS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class nv extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=hi,this.minFilter=hi,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class LS extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=hi,this.minFilter=hi,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,f){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const _=c[h+0],S=c[h+1],E=c[h+2],T=c[h+3];if(f===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(f===1){t[i+0]=_,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(v!==T||m!==_||p!==S||g!==E){let y=1-f;const x=m*_+p*S+g*E+v*T,O=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const B=Math.sqrt(L),H=Math.atan2(B,x*O);y=Math.sin(y*H)/B,f=Math.sin(f*H)/B}const w=f*O;if(m=m*y+_*w,p=p*y+S*w,g=g*y+E*w,v=v*y+T*w,y===1-f){const B=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=B,p*=B,g*=B,v*=B}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,h){const f=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[h],_=c[h+1],S=c[h+2],E=c[h+3];return t[i]=f*E+g*v+m*S-p*_,t[i+1]=m*E+g*_+p*v-f*S,t[i+2]=p*E+g*S+f*_-m*v,t[i+3]=g*E-f*v-m*_-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,f=Math.cos,m=Math.sin,p=f(r/2),g=f(l/2),v=f(c/2),_=m(r/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=_*g*v+p*S*E,this._y=p*S*v-_*g*E,this._z=p*g*E+_*S*v,this._w=p*g*v-_*S*E;break;case"YXZ":this._x=_*g*v+p*S*E,this._y=p*S*v-_*g*E,this._z=p*g*E-_*S*v,this._w=p*g*v+_*S*E;break;case"ZXY":this._x=_*g*v-p*S*E,this._y=p*S*v+_*g*E,this._z=p*g*E+_*S*v,this._w=p*g*v-_*S*E;break;case"ZYX":this._x=_*g*v-p*S*E,this._y=p*S*v+_*g*E,this._z=p*g*E-_*S*v,this._w=p*g*v+_*S*E;break;case"YZX":this._x=_*g*v+p*S*E,this._y=p*S*v+_*g*E,this._z=p*g*E-_*S*v,this._w=p*g*v-_*S*E;break;case"XZY":this._x=_*g*v-p*S*E,this._y=p*S*v-_*g*E,this._z=p*g*E+_*S*v,this._w=p*g*v+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],f=i[5],m=i[9],p=i[2],g=i[6],v=i[10],_=r+f+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(g-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,f=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*f+l*p-c*m,this._y=l*g+h*m+c*f-r*p,this._z=c*g+h*p+r*m-l*f,this._w=h*g-r*f-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let f=h*t._w+r*t._x+l*t._y+c*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-f*f;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,f),v=Math.sin((1-i)*g)/p,_=Math.sin(i*g)/p;return this._w=h*v+this._w*_,this._x=r*v+this._x*_,this._y=l*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,r=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(U_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(U_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,f=t.z,m=t.w,p=2*(h*l-f*r),g=2*(f*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-f*g,this.y=r+m*g+f*p-c*v,this.z=l+m*v+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,f=i.y,m=i.z;return this.x=l*m-c*f,this.y=c*h-r*m,this.z=r*f-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return sh.copy(this).projectOnVector(t),this.sub(sh)}reflect(t){return this.sub(sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sh=new K,U_=new wr;class Yo{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,f=c.count;h<f;h++)t.isMesh===!0?t.getVertexPosition(h,gi):gi.fromBufferAttribute(c,h),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sc.copy(r.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),oc.subVectors(this.max,Io),us.subVectors(t.a,Io),fs.subVectors(t.b,Io),hs.subVectors(t.c,Io),za.subVectors(fs,us),Ba.subVectors(hs,fs),mr.subVectors(us,hs);let i=[0,-za.z,za.y,0,-Ba.z,Ba.y,0,-mr.z,mr.y,za.z,0,-za.x,Ba.z,0,-Ba.x,mr.z,0,-mr.x,-za.y,za.x,0,-Ba.y,Ba.x,0,-mr.y,mr.x,0];return!oh(i,us,fs,hs,oc)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,us,fs,hs,oc))?!1:(lc.crossVectors(za,Ba),i=[lc.x,lc.y,lc.z],oh(i,us,fs,hs,oc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qi=[new K,new K,new K,new K,new K,new K,new K,new K],gi=new K,sc=new Yo,us=new K,fs=new K,hs=new K,za=new K,Ba=new K,mr=new K,Io=new K,oc=new K,lc=new K,gr=new K;function oh(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){gr.fromArray(s,c);const f=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),m=t.dot(gr),p=i.dot(gr),g=r.dot(gr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>f)return!1}return!0}const US=new Yo,zo=new K,lh=new K;class Wc{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):US.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(zo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(lh)),this.expandByPoint(zo.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new K,ch=new K,cc=new K,Fa=new K,uh=new K,uc=new K,fh=new K;class zs{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ch.copy(t).add(i).multiplyScalar(.5),cc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(ch);const c=t.distanceTo(i)*.5,h=-this.direction.dot(cc),f=Fa.dot(this.direction),m=-Fa.dot(cc),p=Fa.lengthSq(),g=Math.abs(1-h*h);let v,_,S,E;if(g>0)if(v=h*m-f,_=h*f-m,E=c*g,v>=0)if(_>=-E)if(_<=E){const T=1/g;v*=T,_*=T,S=v*(v+h*_+2*f)+_*(h*v+_+2*m)+p}else _=c,v=Math.max(0,-(h*_+f)),S=-v*v+_*(_+2*m)+p;else _=-c,v=Math.max(0,-(h*_+f)),S=-v*v+_*(_+2*m)+p;else _<=-E?(v=Math.max(0,-(-h*c+f)),_=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+_*(_+2*m)+p):_<=E?(v=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+p):(v=Math.max(0,-(h*c+f)),_=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+_*(_+2*m)+p);else _=h>0?-c:c,v=Math.max(0,-(h*_+f)),S=-v*v+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ch).addScaledVector(cc,_),S}intersectSphere(t,i){Ji.subVectors(t.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),f=r-h,m=r+h;return m<0?null:f<0?this.at(m,i):this.at(f,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,f,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(r=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,h=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,h=(t.min.y-_.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(f=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),r>m||f>l)||((f>r||r!==r)&&(r=f),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,i,r,l,c){uh.subVectors(i,t),uc.subVectors(r,t),fh.crossVectors(uh,uc);let h=this.direction.dot(fh),f;if(h>0){if(l)return null;f=1}else if(h<0)f=-1,h=-h;else return null;Fa.subVectors(this.origin,t);const m=f*this.direction.dot(uc.crossVectors(Fa,uc));if(m<0)return null;const p=f*this.direction.dot(uh.cross(Fa));if(p<0||m+p>h)return null;const g=-f*Fa.dot(fh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,i,r,l,c,h,f,m,p,g,v,_,S,E,T,y){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,f,m,p,g,v,_,S,E,T,y)}set(t,i,r,l,c,h,f,m,p,g,v,_,S,E,T,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=f,x[13]=m,x[2]=p,x[6]=g,x[10]=v,x[14]=_,x[3]=S,x[7]=E,x[11]=T,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ds.setFromMatrixColumn(t,0).length(),c=1/ds.setFromMatrixColumn(t,1).length(),h=1/ds.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),f=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=h*g,S=h*v,E=f*g,T=f*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=_-T*p,i[9]=-f*m,i[2]=T-_*p,i[6]=E+S*p,i[10]=h*m}else if(t.order==="YXZ"){const _=m*g,S=m*v,E=p*g,T=p*v;i[0]=_+T*f,i[4]=E*f-S,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-f,i[2]=S*f-E,i[6]=T+_*f,i[10]=h*m}else if(t.order==="ZXY"){const _=m*g,S=m*v,E=p*g,T=p*v;i[0]=_-T*f,i[4]=-h*v,i[8]=E+S*f,i[1]=S+E*f,i[5]=h*g,i[9]=T-_*f,i[2]=-h*p,i[6]=f,i[10]=h*m}else if(t.order==="ZYX"){const _=h*g,S=h*v,E=f*g,T=f*v;i[0]=m*g,i[4]=E*p-S,i[8]=_*p+T,i[1]=m*v,i[5]=T*p+_,i[9]=S*p-E,i[2]=-p,i[6]=f*m,i[10]=h*m}else if(t.order==="YZX"){const _=h*m,S=h*p,E=f*m,T=f*p;i[0]=m*g,i[4]=T-_*v,i[8]=E*v+S,i[1]=v,i[5]=h*g,i[9]=-f*g,i[2]=-p*g,i[6]=S*v+E,i[10]=_-T*v}else if(t.order==="XZY"){const _=h*m,S=h*p,E=f*m,T=f*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=_*v+T,i[5]=h*g,i[9]=S*v-E,i[2]=E*v-S,i[6]=f*g,i[10]=T*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(NS,t,OS)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ha.crossVectors(r,$n),Ha.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ha.crossVectors(r,$n)),Ha.normalize(),fc.crossVectors($n,Ha),l[0]=Ha.x,l[4]=fc.x,l[8]=$n.x,l[1]=Ha.y,l[5]=fc.y,l[9]=$n.y,l[2]=Ha.z,l[6]=fc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],f=r[4],m=r[8],p=r[12],g=r[1],v=r[5],_=r[9],S=r[13],E=r[2],T=r[6],y=r[10],x=r[14],O=r[3],L=r[7],w=r[11],B=r[15],H=l[0],z=l[4],k=l[8],D=l[12],R=l[1],U=l[5],J=l[9],Y=l[13],et=l[2],ct=l[6],I=l[10],q=l[14],X=l[3],mt=l[7],N=l[11],nt=l[15];return c[0]=h*H+f*R+m*et+p*X,c[4]=h*z+f*U+m*ct+p*mt,c[8]=h*k+f*J+m*I+p*N,c[12]=h*D+f*Y+m*q+p*nt,c[1]=g*H+v*R+_*et+S*X,c[5]=g*z+v*U+_*ct+S*mt,c[9]=g*k+v*J+_*I+S*N,c[13]=g*D+v*Y+_*q+S*nt,c[2]=E*H+T*R+y*et+x*X,c[6]=E*z+T*U+y*ct+x*mt,c[10]=E*k+T*J+y*I+x*N,c[14]=E*D+T*Y+y*q+x*nt,c[3]=O*H+L*R+w*et+B*X,c[7]=O*z+L*U+w*ct+B*mt,c[11]=O*k+L*J+w*I+B*N,c[15]=O*D+L*Y+w*q+B*nt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],f=t[5],m=t[9],p=t[13],g=t[2],v=t[6],_=t[10],S=t[14],E=t[3],T=t[7],y=t[11],x=t[15];return E*(+c*m*v-l*p*v-c*f*_+r*p*_+l*f*S-r*m*S)+T*(+i*m*S-i*p*_+c*h*_-l*h*S+l*p*g-c*m*g)+y*(+i*p*v-i*f*S-c*h*v+r*h*S+c*f*g-r*p*g)+x*(-l*f*g-i*m*v+i*f*_+l*h*v-r*h*_+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8],v=t[9],_=t[10],S=t[11],E=t[12],T=t[13],y=t[14],x=t[15],O=v*y*p-T*_*p+T*m*S-f*y*S-v*m*x+f*_*x,L=E*_*p-g*y*p-E*m*S+h*y*S+g*m*x-h*_*x,w=g*T*p-E*v*p+E*f*S-h*T*S-g*f*x+h*v*x,B=E*v*m-g*T*m-E*f*_+h*T*_+g*f*y-h*v*y,H=i*O+r*L+l*w+c*B;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return t[0]=O*z,t[1]=(T*_*c-v*y*c-T*l*S+r*y*S+v*l*x-r*_*x)*z,t[2]=(f*y*c-T*m*c+T*l*p-r*y*p-f*l*x+r*m*x)*z,t[3]=(v*m*c-f*_*c-v*l*p+r*_*p+f*l*S-r*m*S)*z,t[4]=L*z,t[5]=(g*y*c-E*_*c+E*l*S-i*y*S-g*l*x+i*_*x)*z,t[6]=(E*m*c-h*y*c-E*l*p+i*y*p+h*l*x-i*m*x)*z,t[7]=(h*_*c-g*m*c+g*l*p-i*_*p-h*l*S+i*m*S)*z,t[8]=w*z,t[9]=(E*v*c-g*T*c-E*r*S+i*T*S+g*r*x-i*v*x)*z,t[10]=(h*T*c-E*f*c+E*r*p-i*T*p-h*r*x+i*f*x)*z,t[11]=(g*f*c-h*v*c-g*r*p+i*v*p+h*r*S-i*f*S)*z,t[12]=B*z,t[13]=(g*T*l-E*v*l+E*r*_-i*T*_-g*r*y+i*v*y)*z,t[14]=(E*f*l-h*T*l-E*r*m+i*T*m+h*r*y-i*f*y)*z,t[15]=(h*v*l-g*f*l+g*r*m-i*v*m-h*r*_+i*f*_)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,f=t.y,m=t.z,p=c*h,g=c*f;return this.set(p*h+r,p*f-l*m,p*m+l*f,0,p*f+l*m,g*f+r,g*m-l*h,0,p*m-l*f,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,f=i._z,m=i._w,p=c+c,g=h+h,v=f+f,_=c*p,S=c*g,E=c*v,T=h*g,y=h*v,x=f*v,O=m*p,L=m*g,w=m*v,B=r.x,H=r.y,z=r.z;return l[0]=(1-(T+x))*B,l[1]=(S+w)*B,l[2]=(E-L)*B,l[3]=0,l[4]=(S-w)*H,l[5]=(1-(_+x))*H,l[6]=(y+O)*H,l[7]=0,l[8]=(E+L)*z,l[9]=(y-O)*z,l[10]=(1-(_+T))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=ds.set(l[0],l[1],l[2]).length();const h=ds.set(l[4],l[5],l[6]).length(),f=ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/c,g=1/h,v=1/f;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),r.x=c,r.y=h,r.z=f,this}makePerspective(t,i,r,l,c,h,f=ra){const m=this.elements,p=2*c/(i-t),g=2*c/(r-l),v=(i+t)/(i-t),_=(r+l)/(r-l);let S,E;if(f===ra)S=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(f===Bc)S=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=_,m[13]=0,m[2]=0,m[6]=0,m[10]=S,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,h,f=ra){const m=this.elements,p=1/(i-t),g=1/(r-l),v=1/(h-c),_=(i+t)*p,S=(r+l)*g;let E,T;if(f===ra)E=(h+c)*v,T=-2*v;else if(f===Bc)E=c*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-_,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-S,m[2]=0,m[6]=0,m[10]=T,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ds=new K,_i=new Xe,NS=new K(0,0,0),OS=new K(1,1,1),Ha=new K,fc=new K,$n=new K,N_=new Xe,O_=new wr;class Di{constructor(t=0,i=0,r=0,l=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],f=l[8],m=l[1],p=l[5],g=l[9],v=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return N_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(N_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return O_.setFromEuler(this),this.setFromQuaternion(O_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class Id{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let PS=0;const P_=new K,ps=new wr,$i=new Xe,hc=new K,Bo=new K,IS=new K,zS=new wr,I_=new K(1,0,0),z_=new K(0,1,0),B_=new K(0,0,1),F_={type:"added"},BS={type:"removed"},ms={type:"childadded",child:null},hh={type:"childremoved",child:null};class xn extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new K,i=new Di,r=new wr,l=new K(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xe},normalMatrix:{value:new se}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ps.setFromAxisAngle(t,i),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,i){return ps.setFromAxisAngle(t,i),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(I_,t)}rotateY(t){return this.rotateOnAxis(z_,t)}rotateZ(t){return this.rotateOnAxis(B_,t)}translateOnAxis(t,i){return P_.copy(t).applyQuaternion(this.quaternion),this.position.add(P_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(I_,t)}translateY(t){return this.translateOnAxis(z_,t)}translateZ(t){return this.translateOnAxis(B_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?hc.copy(t):hc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Bo,hc,this.up):$i.lookAt(hc,Bo,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),ps.setFromRotationMatrix($i),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(F_),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(BS),hh.child=t,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(F_),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,IS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,zS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(c(t.materials,this.material[m]));l.material=f}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];l.animations.push(c(t.animations,m))}}if(i){const f=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),_=h(t.skeletons),S=h(t.animations),E=h(t.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(f){const m=[];for(const p in f){const g=f[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}xn.DEFAULT_UP=new K(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new K,ta=new K,dh=new K,ea=new K,gs=new K,_s=new K,H_=new K,ph=new K,mh=new K,gh=new K,_h=new Qe,vh=new Qe,xh=new Qe;class xi{constructor(t=new K,i=new K,r=new K){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),vi.subVectors(t,i),l.cross(vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){vi.subVectors(l,i),ta.subVectors(r,i),dh.subVectors(t,i);const h=vi.dot(vi),f=vi.dot(ta),m=vi.dot(dh),p=ta.dot(ta),g=ta.dot(dh),v=h*p-f*f;if(v===0)return c.set(0,0,0),null;const _=1/v,S=(p*m-f*g)*_,E=(h*g-f*m)*_;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(t,i,r,l,c,h,f,m){return this.getBarycoord(t,i,r,l,ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ea.x),m.addScaledVector(h,ea.y),m.addScaledVector(f,ea.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return _h.setScalar(0),vh.setScalar(0),xh.setScalar(0),_h.fromBufferAttribute(t,i),vh.fromBufferAttribute(t,r),xh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(_h,c.x),h.addScaledVector(vh,c.y),h.addScaledVector(xh,c.z),h}static isFrontFacing(t,i,r,l){return vi.subVectors(r,i),ta.subVectors(t,i),vi.cross(ta).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),vi.cross(ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return xi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,f;gs.subVectors(l,r),_s.subVectors(c,r),ph.subVectors(t,r);const m=gs.dot(ph),p=_s.dot(ph);if(m<=0&&p<=0)return i.copy(r);mh.subVectors(t,l);const g=gs.dot(mh),v=_s.dot(mh);if(g>=0&&v<=g)return i.copy(l);const _=m*v-g*p;if(_<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(gs,h);gh.subVectors(t,c);const S=gs.dot(gh),E=_s.dot(gh);if(E>=0&&S<=E)return i.copy(c);const T=S*p-m*E;if(T<=0&&p>=0&&E<=0)return f=p/(p-E),i.copy(r).addScaledVector(_s,f);const y=g*E-S*v;if(y<=0&&v-g>=0&&S-E>=0)return H_.subVectors(c,l),f=(v-g)/(v-g+(S-E)),i.copy(l).addScaledVector(H_,f);const x=1/(y+T+_);return h=T*x,f=_*x,i.copy(r).addScaledVector(gs,h).addScaledVector(_s,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},dc={h:0,s:0,l:0};function yh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class de{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ae.workingColorSpace){if(t=yS(t,1),i=_e(i,0,1),r=_e(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=yh(h,c,t+1/3),this.g=yh(h,c,t),this.b=yh(h,c,t-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(t,i=ei){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],f=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ei){const r=iv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Ae.fromWorkingColorSpace(Un.copy(this),t),Math.round(_e(Un.r*255,0,255))*65536+Math.round(_e(Un.g*255,0,255))*256+Math.round(_e(Un.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,c=Un.b,h=Math.max(r,l,c),f=Math.min(r,l,c);let m,p;const g=(f+h)/2;if(f===h)m=0,p=0;else{const v=h-f;switch(p=g<=.5?v/(h+f):v/(2-h-f),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ei){Ae.fromWorkingColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==ei?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(dc);const r=ih(Ga.h,dc.h,i),l=ih(Ga.s,dc.s,i),c=ih(Ga.l,dc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new de;de.NAMES=iv;let FS=0;class Bs extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=As,this.side=la,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Bh,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==la&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zh&&(r.blendSrc=this.blendSrc),this.blendDst!==Bh&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const f in c){const m=c[f];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class av extends Bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=G0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new K,pc=new qt;let HS=0;class bn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=R_,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(t),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Po(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==R_&&(t.usage=this.usage),t}}class rv extends bn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class sv extends bn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class oa extends bn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let GS=0;const ci=new Xe,Sh=new xn,vs=new K,ti=new Yo,Fo=new Yo,vn=new K;class Li extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ev(t)?sv:rv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new se().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return Sh.lookAt(t),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new oa(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const f=i[c];Fo.setFromBufferAttribute(f),this.morphTargetsRelative?(vn.addVectors(ti.min,Fo.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Fo.max),ti.expandByPoint(vn)):(ti.expandByPoint(Fo.min),ti.expandByPoint(Fo.max))}ti.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const f=i[c],m=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)vn.fromBufferAttribute(f,p),m&&(vs.fromBufferAttribute(t,p),vn.add(vs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),f=[],m=[];for(let k=0;k<r.count;k++)f[k]=new K,m[k]=new K;const p=new K,g=new K,v=new K,_=new qt,S=new qt,E=new qt,T=new K,y=new K;function x(k,D,R){p.fromBufferAttribute(r,k),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,R),_.fromBufferAttribute(c,k),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,R),g.sub(p),v.sub(p),S.sub(_),E.sub(_);const U=1/(S.x*E.y-E.x*S.y);isFinite(U)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(U),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(U),f[k].add(T),f[D].add(T),f[R].add(T),m[k].add(y),m[D].add(y),m[R].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let k=0,D=O.length;k<D;++k){const R=O[k],U=R.start,J=R.count;for(let Y=U,et=U+J;Y<et;Y+=3)x(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const L=new K,w=new K,B=new K,H=new K;function z(k){B.fromBufferAttribute(l,k),H.copy(B);const D=f[k];L.copy(D),L.sub(B.multiplyScalar(B.dot(D))).normalize(),w.crossVectors(H,D);const U=w.dot(m[k])<0?-1:1;h.setXYZW(k,L.x,L.y,L.z,U)}for(let k=0,D=O.length;k<D;++k){const R=O[k],U=R.start,J=R.count;for(let Y=U,et=U+J;Y<et;Y+=3)z(t.getX(Y+0)),z(t.getX(Y+1)),z(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const l=new K,c=new K,h=new K,f=new K,m=new K,p=new K,g=new K,v=new K;if(t)for(let _=0,S=t.count;_<S;_+=3){const E=t.getX(_+0),T=t.getX(_+1),y=t.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),f.add(g),m.add(g),p.add(g),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(f,m){const p=f.array,g=f.itemSize,v=f.normalized,_=new p.constructor(m.length*g);let S=0,E=0;for(let T=0,y=m.length;T<y;T++){f.isInterleavedBufferAttribute?S=m[T]*f.data.stride+f.offset:S=m[T]*g;for(let x=0;x<g;x++)_[E++]=p[S++]}return new bn(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,r=this.index.array,l=this.attributes;for(const f in l){const m=l[f],p=t(m,r);i.setAttribute(f,p)}const c=this.morphAttributes;for(const f in c){const m=[],p=c[f];for(let g=0,v=p.length;g<v;g++){const _=p[g],S=t(_,r);m.push(S)}i.morphAttributes[f]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let f=0,m=h.length;f<m;f++){const p=h[f];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const G_=new Xe,_r=new zs,mc=new Wc,V_=new K,gc=new K,_c=new K,vc=new K,Mh=new K,xc=new K,k_=new K,yc=new K;class fi extends xn{constructor(t=new Li,i=new av){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const f=this.morphTargetInfluences;if(c&&f){xc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=f[m],v=c[m];g!==0&&(Mh.fromBufferAttribute(v,t),h?xc.addScaledVector(Mh,g):xc.addScaledVector(Mh.sub(i),g))}i.add(xc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(c),_r.copy(t.ray).recast(t.near),!(mc.containsPoint(_r.origin)===!1&&(_r.intersectSphere(mc,V_)===null||_r.origin.distanceToSquared(V_)>(t.far-t.near)**2))&&(G_.copy(c).invert(),_r.copy(t.ray).applyMatrix4(G_),!(r.boundingBox!==null&&_r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,_r)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,f=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const y=_[E],x=h[y.materialIndex],O=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let w=O,B=L;w<B;w+=3){const H=f.getX(w),z=f.getX(w+1),k=f.getX(w+2);l=Sc(this,x,t,r,p,g,v,H,z,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=E,x=T;y<x;y+=3){const O=f.getX(y),L=f.getX(y+1),w=f.getX(y+2);l=Sc(this,h,t,r,p,g,v,O,L,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const y=_[E],x=h[y.materialIndex],O=Math.max(y.start,S.start),L=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let w=O,B=L;w<B;w+=3){const H=w,z=w+1,k=w+2;l=Sc(this,x,t,r,p,g,v,H,z,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let y=E,x=T;y<x;y+=3){const O=y,L=y+1,w=y+2;l=Sc(this,h,t,r,p,g,v,O,L,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function VS(s,t,i,r,l,c,h,f){let m;if(t.side===Xn?m=r.intersectTriangle(h,c,l,!0,f):m=r.intersectTriangle(l,c,h,t.side===la,f),m===null)return null;yc.copy(f),yc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(yc);return p<i.near||p>i.far?null:{distance:p,point:yc.clone(),object:s}}function Sc(s,t,i,r,l,c,h,f,m,p){s.getVertexPosition(f,gc),s.getVertexPosition(m,_c),s.getVertexPosition(p,vc);const g=VS(s,t,i,r,gc,_c,vc,k_);if(g){const v=new K;xi.getBarycoord(k_,gc,_c,vc,v),l&&(g.uv=xi.getInterpolatedAttribute(l,f,m,p,v,new qt)),c&&(g.uv1=xi.getInterpolatedAttribute(c,f,m,p,v,new qt)),h&&(g.normal=xi.getInterpolatedAttribute(h,f,m,p,v,new K),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:m,c:p,normal:new K,materialIndex:0};xi.getNormal(gc,_c,vc,_.normal),g.face=_,g.barycoord=v}return g}class jo extends Li{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const f=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,r,i,t,h,c,0),E("z","y","x",1,-1,r,i,-t,h,c,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new oa(p,3)),this.setAttribute("normal",new oa(g,3)),this.setAttribute("uv",new oa(v,2));function E(T,y,x,O,L,w,B,H,z,k,D){const R=w/z,U=B/k,J=w/2,Y=B/2,et=H/2,ct=z+1,I=k+1;let q=0,X=0;const mt=new K;for(let N=0;N<I;N++){const nt=N*U-Y;for(let vt=0;vt<ct;vt++){const St=vt*R-J;mt[T]=St*O,mt[y]=nt*L,mt[x]=et,p.push(mt.x,mt.y,mt.z),mt[T]=0,mt[y]=0,mt[x]=H>0?1:-1,g.push(mt.x,mt.y,mt.z),v.push(vt/z),v.push(1-N/k),q+=1}}for(let N=0;N<k;N++)for(let nt=0;nt<z;nt++){const vt=_+nt+ct*N,St=_+nt+ct*(N+1),$=_+(nt+1)+ct*(N+1),pt=_+(nt+1)+ct*N;m.push(vt,St,pt),m.push(St,$,pt),X+=6}f.addGroup(S,X,D),S+=X,_+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function On(s){const t={};for(let i=0;i<s.length;i++){const r=Is(s[i]);for(const l in r)t[l]=r[l]}return t}function kS(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function ov(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const lv={clone:Is,merge:On};var XS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends Bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XS,this.fragmentShader=WS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=kS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class cv extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ra}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new K,X_=new qt,W_=new qt;class ui extends cv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Md*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Md*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-t/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Va.x,Va.y).multiplyScalar(-t/Va.z)}getViewSize(t,i){return this.getViewBounds(t,X_,W_),i.subVectors(W_,X_)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Pc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,ys=1;class qS extends xn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(xs,ys,t,i);l.layers=this.layers,this.add(l);const c=new ui(xs,ys,t,i);c.layers=this.layers,this.add(c);const h=new ui(xs,ys,t,i);h.layers=this.layers,this.add(h);const f=new ui(xs,ys,t,i);f.layers=this.layers,this.add(f);const m=new ui(xs,ys,t,i);m.layers=this.layers,this.add(m);const p=new ui(xs,ys,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,f,m]=i;for(const p of i)this.remove(p);if(t===ra)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Bc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,f,m,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,f),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,_,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class uv extends Pn{constructor(t,i,r,l,c,h,f,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Ls,super(t,i,r,l,c,h,f,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class YS extends Cr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new uv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:wi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new jo(5,5,5),c=new ua({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ja});c.uniforms.tEquirect.value=i;const h=new fi(l,c),f=i.minFilter;return i.minFilter===Ar&&(i.minFilter=wi),new qS(1,10,this).update(t,h),i.minFilter=f,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Go extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jS={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const f=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const y=i.getJointPose(T,r),x=this._getHandJoint(p,T);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(jS)))}return f!==null&&(f.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Go;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class ZS extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Th=new K,KS=new K,QS=new se;class Xa{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Th.subVectors(r,i).cross(KS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Th),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||QS.getNormalMatrix(t),l=this.coplanarPoint(Th).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Wc,Mc=new K;class zd{constructor(t=new Xa,i=new Xa,r=new Xa,l=new Xa,c=new Xa,h=new Xa){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const f=this.planes;return f[0].copy(t),f[1].copy(i),f[2].copy(r),f[3].copy(l),f[4].copy(c),f[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ra){const r=this.planes,l=t.elements,c=l[0],h=l[1],f=l[2],m=l[3],p=l[4],g=l[5],v=l[6],_=l[7],S=l[8],E=l[9],T=l[10],y=l[11],x=l[12],O=l[13],L=l[14],w=l[15];if(r[0].setComponents(m-c,_-p,y-S,w-x).normalize(),r[1].setComponents(m+c,_+p,y+S,w+x).normalize(),r[2].setComponents(m+h,_+g,y+E,w+O).normalize(),r[3].setComponents(m-h,_-g,y-E,w-O).normalize(),r[4].setComponents(m-f,_-v,y-T,w-L).normalize(),i===ra)r[5].setComponents(m+f,_+v,y+T,w+L).normalize();else if(i===Bc)r[5].setComponents(f,v,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(t){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Mc.x=l.normal.x>0?t.max.x:t.min.x,Mc.y=l.normal.y>0?t.max.y:t.min.y,Mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ed extends Bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fc=new K,Hc=new K,q_=new Xe,Ho=new zs,Ec=new Wc,bh=new K,Y_=new K;class JS extends xn{constructor(t=new Li,i=new Ed){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Fc.fromBufferAttribute(i,l-1),Hc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Fc.distanceTo(Hc);t.setAttribute("lineDistance",new oa(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(l),Ec.radius+=c,t.ray.intersectsSphere(Ec)===!1)return;q_.copy(l).invert(),Ho.copy(t.ray).applyMatrix4(q_);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const S=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let T=S,y=E-1;T<y;T+=p){const x=g.getX(T),O=g.getX(T+1),L=Tc(this,t,Ho,m,x,O,T);L&&i.push(L)}if(this.isLineLoop){const T=g.getX(E-1),y=g.getX(S),x=Tc(this,t,Ho,m,T,y,E-1);x&&i.push(x)}}else{const S=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let T=S,y=E-1;T<y;T+=p){const x=Tc(this,t,Ho,m,T,T+1,T);x&&i.push(x)}if(this.isLineLoop){const T=Tc(this,t,Ho,m,E-1,S,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Tc(s,t,i,r,l,c,h){const f=s.geometry.attributes.position;if(Fc.fromBufferAttribute(f,l),Hc.fromBufferAttribute(f,c),i.distanceSqToSegment(Fc,Hc,bh,Y_)>r)return;bh.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(bh);if(!(p<t.near||p>t.far))return{distance:p,point:Y_.clone().applyMatrix4(s.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:s}}const j_=new K,Z_=new K;class fv extends JS{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)j_.fromBufferAttribute(i,l),Z_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+j_.distanceTo(Z_);t.setAttribute("lineDistance",new oa(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hv extends Pn{constructor(t,i,r,l,c,h,f,m,p,g=Rs){if(g!==Rs&&g!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Rs&&(r=Rr),r===void 0&&g===Os&&(r=Ns),super(null,l,c,h,f,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=f!==void 0?f:hi,this.minFilter=m!==void 0?m:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qc extends Li{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,f=Math.floor(r),m=Math.floor(l),p=f+1,g=m+1,v=t/f,_=i/m,S=[],E=[],T=[],y=[];for(let x=0;x<g;x++){const O=x*_-h;for(let L=0;L<p;L++){const w=L*v-c;E.push(w,-O,0),T.push(0,0,1),y.push(L/f),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<f;O++){const L=O+p*x,w=O+p*(x+1),B=O+1+p*(x+1),H=O+1+p*x;S.push(L,w,H),S.push(w,B,H)}this.setIndex(S),this.setAttribute("position",new oa(E,3)),this.setAttribute("normal",new oa(T,3)),this.setAttribute("uv",new oa(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.width,t.height,t.widthSegments,t.heightSegments)}}class ka extends Bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$0,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $S extends Bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tM extends Bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class eM{constructor(t,i,r){const l=this;let c=!1,h=0,f=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.itemStart=function(g){f++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,f),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,f),h===f&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=p.length;v<_;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null}}}const nM=new eM;class Ya{constructor(t){this.manager=t!==void 0?t:nM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ya.DEFAULT_MATERIAL_NAME="__DEFAULT";const na={};class iM extends Error{constructor(t,i){super(t),this.response=i}}class Td extends Ya{constructor(t){super(t)}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=Gc.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(na[t]!==void 0){na[t].push({onLoad:i,onProgress:r,onError:l});return}na[t]=[],na[t].push({onLoad:i,onProgress:r,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=na[t],v=p.body.getReader(),_=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=_?parseInt(_):0,E=S!==0;let T=0;const y=new ReadableStream({start(x){O();function O(){v.read().then(({done:L,value:w})=>{if(L)x.close();else{T+=w.byteLength;const B=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:S});for(let H=0,z=g.length;H<z;H++){const k=g[H];k.onProgress&&k.onProgress(B)}x.enqueue(w),O()}},L=>{x.error(L)})}}});return new Response(y)}else throw new iM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return p.json();default:if(f===void 0)return p.text();{const v=/charset="?([^;"\s]*)"?/i.exec(f),_=v&&v[1]?v[1].toLowerCase():void 0,S=new TextDecoder(_);return p.arrayBuffer().then(E=>S.decode(E))}}}).then(p=>{Gc.add(t,p);const g=na[t];delete na[t];for(let v=0,_=g.length;v<_;v++){const S=g[v];S.onLoad&&S.onLoad(p)}}).catch(p=>{const g=na[t];if(g===void 0)throw this.manager.itemError(t),p;delete na[t];for(let v=0,_=g.length;v<_;v++){const S=g[v];S.onError&&S.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class aM extends Ya{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=Gc.get(t);if(h!==void 0)return c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0),h;const f=Xo("img");function m(){g(),Gc.add(t,this),i&&i(this),c.manager.itemEnd(t)}function p(v){g(),l&&l(v),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){f.removeEventListener("load",m,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",m,!1),f.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),c.manager.itemStart(t),f.src=t,f}}class rM extends Ya{constructor(t){super(t)}load(t,i,r,l){const c=new Pn,h=new aM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(f){c.image=f,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class dv extends xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class sM extends dv{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Ah=new Xe,K_=new K,Q_=new K;class oM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zd,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;K_.setFromMatrixPosition(t.matrixWorld),i.position.copy(K_),Q_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Q_),i.updateMatrixWorld(),Ah.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ah)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class pv extends cv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,f=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,f-=g*this.view.offsetY,m=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,f,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class lM extends oM{constructor(){super(new pv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cM extends dv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new lM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uM extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const J_=new Xe;class fM{constructor(t,i,r=0,l=1/0){this.ray=new zs(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Id,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return J_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(J_),this}intersectObject(t,i=!0,r=[]){return bd(t,this,r,i),r.sort($_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)bd(t[l],this,r,i);return r.sort($_),r}}function $_(s,t){return s.distance-t.distance}function bd(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,f=c.length;h<f;h++)bd(c[h],t,i,!0)}}class t0{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hM extends Dr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function e0(s,t,i,r){const l=dM(r);switch(i){case q0:return s*t;case j0:return s*t;case Z0:return s*t*2;case K0:return s*t/l.components*l.byteLength;case Ud:return s*t/l.components*l.byteLength;case Q0:return s*t*2/l.components*l.byteLength;case Nd:return s*t*2/l.components*l.byteLength;case Y0:return s*t*3/l.components*l.byteLength;case yi:return s*t*4/l.components*l.byteLength;case Od:return s*t*4/l.components*l.byteLength;case Dc:case Lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Uc:case Nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qh:case $h:return Math.max(s,16)*Math.max(t,8)/4;case Kh:case Jh:return Math.max(s,8)*Math.max(t,8)/2;case td:case ed:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case nd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case id:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ad:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case rd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case sd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case od:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ld:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case cd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ud:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case fd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case hd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case dd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case md:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case gd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Oc:case _d:case vd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case J0:case xd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case yd:case Sd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function dM(s){switch(s){case ca:case k0:return{byteLength:1,components:1};case ko:case X0:case Wo:return{byteLength:2,components:1};case Dd:case Ld:return{byteLength:2,components:4};case Rr:case wd:case aa:return{byteLength:4,components:1};case W0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mv(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function pM(s){const t=new WeakMap;function i(f,m){const p=f.array,g=f.usage,v=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,f),v.length===0)s.bufferSubData(p,0,g);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],T=v[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,v[_]=T)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const T=v[S];s.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=t.get(f);m&&(s.deleteBuffer(m.buffer),t.delete(f))}function h(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,i(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,m),p.version=f.version}}return{get:l,remove:c,update:h}}var mM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gM=`#ifdef USE_ALPHAHASH
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
#endif`,_M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SM=`#ifdef USE_AOMAP
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
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EM=`#ifdef USE_BATCHING
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
#endif`,TM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CM=`#ifdef USE_IRIDESCENCE
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
#endif`,wM=`#ifdef USE_BUMPMAP
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
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,BM=`#define PI 3.141592653589793
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
} // validated`,FM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HM=`vec3 transformedNormal = objectNormal;
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
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WM="gl_FragColor = linearToOutputTexel( gl_FragColor );",qM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
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
}`,iE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sE=`uniform bool receiveShadow;
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
#endif`,oE=`#ifdef USE_ENVMAP
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
#endif`,lE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hE=`PhysicalMaterial material;
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
#endif`,dE=`struct PhysicalMaterial {
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
}`,pE=`
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
#endif`,mE=`#if defined( RE_IndirectDiffuse )
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
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_E=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ME=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TE=`#if defined( USE_POINTS_UV )
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
#endif`,bE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`#ifdef USE_MORPHTARGETS
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
#endif`,LE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zE=`#ifdef USE_NORMALMAP
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
#endif`,BE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$E=`float getShadowMask() {
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
}`,tT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eT=`#ifdef USE_SKINNING
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
#endif`,nT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lT=`#ifdef USE_TRANSMISSION
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
#endif`,cT=`#ifdef USE_TRANSMISSION
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
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mT=`uniform sampler2D t2D;
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`#include <common>
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
}`,ST=`#if DEPTH_PACKING == 3200
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
}`,MT=`#define DISTANCE
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
}`,ET=`#define DISTANCE
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
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
}`,RT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,wT=`uniform vec3 diffuse;
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
}`,DT=`#define LAMBERT
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
}`,LT=`#define LAMBERT
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
}`,UT=`#define MATCAP
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
}`,NT=`#define MATCAP
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
}`,OT=`#define NORMAL
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
}`,PT=`#define NORMAL
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
}`,IT=`#define PHONG
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
}`,zT=`#define PHONG
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
}`,BT=`#define STANDARD
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
}`,FT=`#define STANDARD
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
}`,HT=`#define TOON
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
}`,GT=`#define TOON
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
}`,VT=`uniform float size;
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
}`,kT=`uniform vec3 diffuse;
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
}`,XT=`#include <common>
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
}`,WT=`uniform vec3 color;
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
}`,qT=`uniform float rotation;
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
}`,YT=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:mM,alphahash_pars_fragment:gM,alphamap_fragment:_M,alphamap_pars_fragment:vM,alphatest_fragment:xM,alphatest_pars_fragment:yM,aomap_fragment:SM,aomap_pars_fragment:MM,batching_pars_vertex:EM,batching_vertex:TM,begin_vertex:bM,beginnormal_vertex:AM,bsdfs:RM,iridescence_fragment:CM,bumpmap_pars_fragment:wM,clipping_planes_fragment:DM,clipping_planes_pars_fragment:LM,clipping_planes_pars_vertex:UM,clipping_planes_vertex:NM,color_fragment:OM,color_pars_fragment:PM,color_pars_vertex:IM,color_vertex:zM,common:BM,cube_uv_reflection_fragment:FM,defaultnormal_vertex:HM,displacementmap_pars_vertex:GM,displacementmap_vertex:VM,emissivemap_fragment:kM,emissivemap_pars_fragment:XM,colorspace_fragment:WM,colorspace_pars_fragment:qM,envmap_fragment:YM,envmap_common_pars_fragment:jM,envmap_pars_fragment:ZM,envmap_pars_vertex:KM,envmap_physical_pars_fragment:oE,envmap_vertex:QM,fog_vertex:JM,fog_pars_vertex:$M,fog_fragment:tE,fog_pars_fragment:eE,gradientmap_pars_fragment:nE,lightmap_pars_fragment:iE,lights_lambert_fragment:aE,lights_lambert_pars_fragment:rE,lights_pars_begin:sE,lights_toon_fragment:lE,lights_toon_pars_fragment:cE,lights_phong_fragment:uE,lights_phong_pars_fragment:fE,lights_physical_fragment:hE,lights_physical_pars_fragment:dE,lights_fragment_begin:pE,lights_fragment_maps:mE,lights_fragment_end:gE,logdepthbuf_fragment:_E,logdepthbuf_pars_fragment:vE,logdepthbuf_pars_vertex:xE,logdepthbuf_vertex:yE,map_fragment:SE,map_pars_fragment:ME,map_particle_fragment:EE,map_particle_pars_fragment:TE,metalnessmap_fragment:bE,metalnessmap_pars_fragment:AE,morphinstance_vertex:RE,morphcolor_vertex:CE,morphnormal_vertex:wE,morphtarget_pars_vertex:DE,morphtarget_vertex:LE,normal_fragment_begin:UE,normal_fragment_maps:NE,normal_pars_fragment:OE,normal_pars_vertex:PE,normal_vertex:IE,normalmap_pars_fragment:zE,clearcoat_normal_fragment_begin:BE,clearcoat_normal_fragment_maps:FE,clearcoat_pars_fragment:HE,iridescence_pars_fragment:GE,opaque_fragment:VE,packing:kE,premultiplied_alpha_fragment:XE,project_vertex:WE,dithering_fragment:qE,dithering_pars_fragment:YE,roughnessmap_fragment:jE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:KE,shadowmap_pars_vertex:QE,shadowmap_vertex:JE,shadowmask_pars_fragment:$E,skinbase_vertex:tT,skinning_pars_vertex:eT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:aT,specularmap_pars_fragment:rT,tonemapping_fragment:sT,tonemapping_pars_fragment:oT,transmission_fragment:lT,transmission_pars_fragment:cT,uv_pars_fragment:uT,uv_pars_vertex:fT,uv_vertex:hT,worldpos_vertex:dT,background_vert:pT,background_frag:mT,backgroundCube_vert:gT,backgroundCube_frag:_T,cube_vert:vT,cube_frag:xT,depth_vert:yT,depth_frag:ST,distanceRGBA_vert:MT,distanceRGBA_frag:ET,equirect_vert:TT,equirect_frag:bT,linedashed_vert:AT,linedashed_frag:RT,meshbasic_vert:CT,meshbasic_frag:wT,meshlambert_vert:DT,meshlambert_frag:LT,meshmatcap_vert:UT,meshmatcap_frag:NT,meshnormal_vert:OT,meshnormal_frag:PT,meshphong_vert:IT,meshphong_frag:zT,meshphysical_vert:BT,meshphysical_frag:FT,meshtoon_vert:HT,meshtoon_frag:GT,points_vert:VT,points_frag:kT,shadow_vert:XT,shadow_frag:WT,sprite_vert:qT,sprite_frag:YT},wt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ri={basic:{uniforms:On([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:On([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new de(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:On([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:On([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:On([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new de(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:On([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:On([wt.points,wt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:On([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:On([wt.common,wt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:On([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:On([wt.sprite,wt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:On([wt.common,wt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:On([wt.lights,wt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ri.physical={uniforms:On([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const bc={r:0,b:0,g:0},xr=new Di,jT=new Xe;function ZT(s,t,i,r,l,c,h){const f=new de(0);let m=c===!0?0:1,p,g,v=null,_=0,S=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:t).get(w)),w}function T(L){let w=!1;const B=E(L);B===null?x(f,m):B&&B.isColor&&(x(B,1),w=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,w){const B=E(w);B&&(B.isCubeTexture||B.mapping===Xc)?(g===void 0&&(g=new fi(new jo(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:Is(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),xr.copy(w.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(jT.makeRotationFromEuler(xr)),g.material.toneMapped=Ae.getTransfer(B.colorSpace)!==ze,(v!==B||_!==B.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=B,_=B.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new fi(new qc(2,2),new ua({name:"BackgroundMaterial",uniforms:Is(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:la,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(B.colorSpace)!==ze,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||_!==B.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=B,_=B.version,S=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,w){L.getRGB(bc,ov(s)),r.buffers.color.setClear(bc.r,bc.g,bc.b,w,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,w=1){f.set(L),m=w,x(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(f,m)},render:T,addToRenderList:y,dispose:O}}function KT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,h=!1;function f(R,U,J,Y,et){let ct=!1;const I=v(Y,J,U);c!==I&&(c=I,p(c.object)),ct=S(R,Y,J,et),ct&&E(R,Y,J,et),et!==null&&t.update(et,s.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,w(R,U,J,Y),et!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function v(R,U,J){const Y=J.wireframe===!0;let et=r[R.id];et===void 0&&(et={},r[R.id]=et);let ct=et[U.id];ct===void 0&&(ct={},et[U.id]=ct);let I=ct[Y];return I===void 0&&(I=_(m()),ct[Y]=I),I}function _(R){const U=[],J=[],Y=[];for(let et=0;et<i;et++)U[et]=0,J[et]=0,Y[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:J,attributeDivisors:Y,object:R,attributes:{},index:null}}function S(R,U,J,Y){const et=c.attributes,ct=U.attributes;let I=0;const q=J.getAttributes();for(const X in q)if(q[X].location>=0){const N=et[X];let nt=ct[X];if(nt===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor)),N===void 0||N.attribute!==nt||nt&&N.data!==nt.data)return!0;I++}return c.attributesNum!==I||c.index!==Y}function E(R,U,J,Y){const et={},ct=U.attributes;let I=0;const q=J.getAttributes();for(const X in q)if(q[X].location>=0){let N=ct[X];N===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(N=R.instanceColor));const nt={};nt.attribute=N,N&&N.data&&(nt.data=N.data),et[X]=nt,I++}c.attributes=et,c.attributesNum=I,c.index=Y}function T(){const R=c.newAttributes;for(let U=0,J=R.length;U<J;U++)R[U]=0}function y(R){x(R,0)}function x(R,U){const J=c.newAttributes,Y=c.enabledAttributes,et=c.attributeDivisors;J[R]=1,Y[R]===0&&(s.enableVertexAttribArray(R),Y[R]=1),et[R]!==U&&(s.vertexAttribDivisor(R,U),et[R]=U)}function O(){const R=c.newAttributes,U=c.enabledAttributes;for(let J=0,Y=U.length;J<Y;J++)U[J]!==R[J]&&(s.disableVertexAttribArray(J),U[J]=0)}function L(R,U,J,Y,et,ct,I){I===!0?s.vertexAttribIPointer(R,U,J,et,ct):s.vertexAttribPointer(R,U,J,Y,et,ct)}function w(R,U,J,Y){T();const et=Y.attributes,ct=J.getAttributes(),I=U.defaultAttributeValues;for(const q in ct){const X=ct[q];if(X.location>=0){let mt=et[q];if(mt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor)),mt!==void 0){const N=mt.normalized,nt=mt.itemSize,vt=t.get(mt);if(vt===void 0)continue;const St=vt.buffer,$=vt.type,pt=vt.bytesPerElement,yt=$===s.INT||$===s.UNSIGNED_INT||mt.gpuType===wd;if(mt.isInterleavedBufferAttribute){const bt=mt.data,Dt=bt.stride,ae=mt.offset;if(bt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<X.locationSize;Yt++)x(X.location+Yt,bt.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Yt=0;Yt<X.locationSize;Yt++)y(X.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Yt=0;Yt<X.locationSize;Yt++)L(X.location+Yt,nt/X.locationSize,$,N,Dt*pt,(ae+nt/X.locationSize*Yt)*pt,yt)}else{if(mt.isInstancedBufferAttribute){for(let bt=0;bt<X.locationSize;bt++)x(X.location+bt,mt.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let bt=0;bt<X.locationSize;bt++)y(X.location+bt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let bt=0;bt<X.locationSize;bt++)L(X.location+bt,nt/X.locationSize,$,N,nt*pt,nt/X.locationSize*bt*pt,yt)}}else if(I!==void 0){const N=I[q];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(X.location,N);break;case 3:s.vertexAttrib3fv(X.location,N);break;case 4:s.vertexAttrib4fv(X.location,N);break;default:s.vertexAttrib1fv(X.location,N)}}}}O()}function B(){k();for(const R in r){const U=r[R];for(const J in U){const Y=U[J];for(const et in Y)g(Y[et].object),delete Y[et];delete U[J]}delete r[R]}}function H(R){if(r[R.id]===void 0)return;const U=r[R.id];for(const J in U){const Y=U[J];for(const et in Y)g(Y[et].object),delete Y[et];delete U[J]}delete r[R.id]}function z(R){for(const U in r){const J=r[U];if(J[R.id]===void 0)continue;const Y=J[R.id];for(const et in Y)g(Y[et].object),delete Y[et];delete J[R.id]}}function k(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:k,resetDefaultState:D,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:y,disableUnusedAttributes:O}}function QT(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function f(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];i.update(S,r,1)}function m(p,g,v,_){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],g[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*_[T];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function JT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==yi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const k=z===Wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ca&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==aa&&!k)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:B,maxSamples:H}}function $T(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Xa,f=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||r!==0||l;return l=_,r=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,x=s.get(v);if(!l||E===null||E.length===0||c&&!y)c?g(null):p();else{const O=c?0:r,L=O*4;let w=x.clippingState||null;m.value=w,w=g(E,_,L,S);for(let B=0;B!==L;++B)w[B]=i[B];x.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,_,S,E){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=m.value,E!==!0||y===null){const x=S+T*4,O=_.matrixWorldInverse;f.getNormalMatrix(O),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,w=S;L!==T;++L,w+=4)h.copy(v[L]).applyMatrix4(O,f),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function tb(s){let t=new WeakMap;function i(h,f){return f===qh?h.mapping=Ls:f===Yh&&(h.mapping=Us),h}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===qh||f===Yh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new YS(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const f=h.target;f.removeEventListener("dispose",l);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ts=4,n0=[.125,.215,.35,.446,.526,.582],Tr=20,Rh=new pv,i0=new de;let Ch=null,wh=0,Dh=0,Lh=!1;const Mr=(1+Math.sqrt(5))/2,Ss=1/Mr,a0=[new K(-Mr,Ss,0),new K(Mr,Ss,0),new K(-Ss,0,Mr),new K(Ss,0,Mr),new K(0,Mr,-Ss),new K(0,Mr,Ss),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],eb=new K;class r0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:f=eb}=c;Ch=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,f),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ch,wh,Dh),this._renderer.xr.enabled=Lh,t.scissorTest=!1,Ac(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ls||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ch=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Wo,format:yi,colorSpace:Ps,depthBuffer:!1},l=s0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s0(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nb(c)),this._blurMaterial=ib(c,t,i)}return l}_compileMaterial(t){const i=new fi(this._lodPlanes[0],t);this._renderer.compile(i,Rh)}_sceneToCubeUV(t,i,r,l,c){const m=new ui(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(i0),v.toneMapping=Za,v.autoClear=!1;const E=new av({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),T=new fi(new jo,E);let y=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,y=!0):(E.color.copy(i0),y=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):L===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const w=this._cubeSize;Ac(l,L*w,O>2?w:0,w,w),v.setRenderTarget(l),y&&v.render(T,m),v.render(t,m)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=S,v.autoClear=_,t.background=x}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ls||t.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=l0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new fi(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=t;const m=this._cubeSize;Ac(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Rh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=a0[(l-c-1)%a0.length];this._blur(t,c-1,c,h,f)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,f){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new fi(this._lodPlanes[l],p),_=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Tr-1),T=c/E,y=isFinite(c)?1+Math.floor(g*T):Tr;y>Tr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Tr}`);const x=[];let O=0;for(let z=0;z<Tr;++z){const k=z/T,D=Math.exp(-k*k/2);x.push(D),z===0?O+=D:z<y&&(O+=2*D)}for(let z=0;z<x.length;z++)x[z]=x[z]/O;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=h==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-r;const w=this._sizeLods[l],B=3*w*(l>L-Ts?l-L+Ts:0),H=4*(this._cubeSize-w);Ac(i,B,H,3*w,2*w),m.setRenderTarget(i),m.render(v,Rh)}}function nb(s){const t=[],i=[],r=[];let l=s;const c=s-Ts+1+n0.length;for(let h=0;h<c;h++){const f=Math.pow(2,l);i.push(f);let m=1/f;h>s-Ts?m=n0[h-s+Ts-1]:h===0&&(m=0),r.push(m);const p=1/(f-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,T=3,y=2,x=1,O=new Float32Array(T*E*S),L=new Float32Array(y*E*S),w=new Float32Array(x*E*S);for(let H=0;H<S;H++){const z=H%3*2/3-1,k=H>2?0:-1,D=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];O.set(D,T*E*H),L.set(_,y*E*H);const R=[H,H,H,H,H,H];w.set(R,x*E*H)}const B=new Li;B.setAttribute("position",new bn(O,T)),B.setAttribute("uv",new bn(L,y)),B.setAttribute("faceIndex",new bn(w,x)),t.push(B),l>Ts&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function s0(s,t,i){const r=new Cr(s,t,i);return r.texture.mapping=Xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ac(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function ib(s,t,i){const r=new Float32Array(Tr),l=new K(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Bd(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function o0(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bd(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function l0(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function Bd(){return`

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
	`}function ab(s){let t=new WeakMap,i=null;function r(f){if(f&&f.isTexture){const m=f.mapping,p=m===qh||m===Yh,g=m===Ls||m===Us;if(p||g){let v=t.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return i===null&&(i=new r0(s)),v=p?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new r0(s)),v=p?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",c),v.texture):null}}}return f}function l(f){let m=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&m++;return m===p}function c(f){const m=f.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function rb(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Sr("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function sb(s,t,i,r){const l={},c=new WeakMap;function h(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",h),delete l[_.id];const S=c.get(_);S&&(t.remove(S),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function f(v,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const S in _)t.update(_[S],s.ARRAY_BUFFER)}function p(v){const _=[],S=v.index,E=v.attributes.position;let T=0;if(S!==null){const O=S.array;T=S.version;for(let L=0,w=O.length;L<w;L+=3){const B=O[L+0],H=O[L+1],z=O[L+2];_.push(B,H,H,z,z,B)}}else if(E!==void 0){const O=E.array;T=E.version;for(let L=0,w=O.length/3-1;L<w;L+=3){const B=L+0,H=L+1,z=L+2;_.push(B,H,H,z,z,B)}}else return;const y=new(ev(_)?sv:rv)(_,1);y.version=T;const x=c.get(v);x&&t.remove(x),c.set(v,y)}function g(v){const _=c.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:f,update:m,getWireframeAttribute:g}}function ob(s,t,i){let r;function l(_){r=_}let c,h;function f(_){c=_.type,h=_.bytesPerElement}function m(_,S){s.drawElements(r,S,c,_*h),i.update(S,r,1)}function p(_,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,_*h,E),i.update(S,r,E))}function g(_,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,_,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];i.update(y,r,1)}function v(_,S,E,T){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)p(_[x]/h,S[x],T[x]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,_,0,T,0,E);let x=0;for(let O=0;O<E;O++)x+=S[O]*T[O];i.update(x,r,1)}}this.setMode=l,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function lb(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,f){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=f*(c/3);break;case s.LINES:i.lines+=f*(c/2);break;case s.LINE_STRIP:i.lines+=f*(c-1);break;case s.LINE_LOOP:i.lines+=f*c;break;case s.POINTS:i.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function cb(s,t,i){const r=new WeakMap,l=new Qe;function c(h,f,m){const p=h.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(f);if(_===void 0||_.count!==v){let R=function(){k.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var S=R;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],O=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let w=0;E===!0&&(w=1),T===!0&&(w=2),y===!0&&(w=3);let B=f.attributes.position.count*w,H=1;B>t.maxTextureSize&&(H=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const z=new Float32Array(B*H*4*v),k=new nv(z,B,H,v);k.type=aa,k.needsUpdate=!0;const D=w*4;for(let U=0;U<v;U++){const J=x[U],Y=O[U],et=L[U],ct=B*H*4*U;for(let I=0;I<J.count;I++){const q=I*D;E===!0&&(l.fromBufferAttribute(J,I),z[ct+q+0]=l.x,z[ct+q+1]=l.y,z[ct+q+2]=l.z,z[ct+q+3]=0),T===!0&&(l.fromBufferAttribute(Y,I),z[ct+q+4]=l.x,z[ct+q+5]=l.y,z[ct+q+6]=l.z,z[ct+q+7]=0),y===!0&&(l.fromBufferAttribute(et,I),z[ct+q+8]=l.x,z[ct+q+9]=l.y,z[ct+q+10]=l.z,z[ct+q+11]=et.itemSize===4?l.w:1)}}_={count:v,texture:k,size:new qt(B,H)},r.set(f,_),f.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const T=f.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function ub(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return v}function h(){l=new WeakMap}function f(m){const p=m.target;p.removeEventListener("dispose",f),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const gv=new Pn,c0=new hv(1,1),_v=new nv,vv=new LS,xv=new uv,u0=[],f0=[],h0=new Float32Array(16),d0=new Float32Array(9),p0=new Float32Array(4);function Fs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=u0[l];if(c===void 0&&(c=new Float32Array(l),u0[l]=c),t!==0){r.toArray(c,0);for(let h=1,f=0;h!==t;++h)f+=i,s[h].toArray(c,f)}return c}function fn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function hn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Yc(s,t){let i=f0[t];i===void 0&&(i=new Int32Array(t),f0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function fb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function hb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2fv(this.addr,t),hn(i,t)}}function db(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;s.uniform3fv(this.addr,t),hn(i,t)}}function pb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4fv(this.addr,t),hn(i,t)}}function mb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;p0.set(r),s.uniformMatrix2fv(this.addr,!1,p0),hn(i,r)}}function gb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;d0.set(r),s.uniformMatrix3fv(this.addr,!1,d0),hn(i,r)}}function _b(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;h0.set(r),s.uniformMatrix4fv(this.addr,!1,h0),hn(i,r)}}function vb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function xb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2iv(this.addr,t),hn(i,t)}}function yb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3iv(this.addr,t),hn(i,t)}}function Sb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4iv(this.addr,t),hn(i,t)}}function Mb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function Eb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2uiv(this.addr,t),hn(i,t)}}function Tb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3uiv(this.addr,t),hn(i,t)}}function bb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4uiv(this.addr,t),hn(i,t)}}function Ab(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(c0.compareFunction=tv,c=c0):c=gv,i.setTexture2D(t||c,l)}function Rb(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||vv,l)}function Cb(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||xv,l)}function wb(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||_v,l)}function Db(s){switch(s){case 5126:return fb;case 35664:return hb;case 35665:return db;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return _b;case 5124:case 35670:return vb;case 35667:case 35671:return xb;case 35668:case 35672:return yb;case 35669:case 35673:return Sb;case 5125:return Mb;case 36294:return Eb;case 36295:return Tb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return wb}}function Lb(s,t){s.uniform1fv(this.addr,t)}function Ub(s,t){const i=Fs(t,this.size,2);s.uniform2fv(this.addr,i)}function Nb(s,t){const i=Fs(t,this.size,3);s.uniform3fv(this.addr,i)}function Ob(s,t){const i=Fs(t,this.size,4);s.uniform4fv(this.addr,i)}function Pb(s,t){const i=Fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Ib(s,t){const i=Fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function zb(s,t){const i=Fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Bb(s,t){s.uniform1iv(this.addr,t)}function Fb(s,t){s.uniform2iv(this.addr,t)}function Hb(s,t){s.uniform3iv(this.addr,t)}function Gb(s,t){s.uniform4iv(this.addr,t)}function Vb(s,t){s.uniform1uiv(this.addr,t)}function kb(s,t){s.uniform2uiv(this.addr,t)}function Xb(s,t){s.uniform3uiv(this.addr,t)}function Wb(s,t){s.uniform4uiv(this.addr,t)}function qb(s,t,i){const r=this.cache,l=t.length,c=Yc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||gv,c[h])}function Yb(s,t,i){const r=this.cache,l=t.length,c=Yc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||vv,c[h])}function jb(s,t,i){const r=this.cache,l=t.length,c=Yc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||xv,c[h])}function Zb(s,t,i){const r=this.cache,l=t.length,c=Yc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||_v,c[h])}function Kb(s){switch(s){case 5126:return Lb;case 35664:return Ub;case 35665:return Nb;case 35666:return Ob;case 35674:return Pb;case 35675:return Ib;case 35676:return zb;case 5124:case 35670:return Bb;case 35667:case 35671:return Fb;case 35668:case 35672:return Hb;case 35669:case 35673:return Gb;case 5125:return Vb;case 36294:return kb;case 36295:return Xb;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Zb}}class Qb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Db(i.type)}}class Jb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Kb(i.type)}}class $b{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const f=l[c];f.setValue(t,i[f.id],r)}}}const Uh=/(\w+)(\])?(\[|\.)?/g;function m0(s,t){s.seq.push(t),s.map[t.id]=t}function tA(s,t,i){const r=s.name,l=r.length;for(Uh.lastIndex=0;;){const c=Uh.exec(r),h=Uh.lastIndex;let f=c[1];const m=c[2]==="]",p=c[3];if(m&&(f=f|0),p===void 0||p==="["&&h+2===l){m0(i,p===void 0?new Qb(f,s,t):new Jb(f,s,t));break}else{let v=i.map[f];v===void 0&&(v=new $b(f),m0(i,v)),i=v}}}class Ic{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);tA(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const f=i[c],m=r[f.id];m.needsUpdate!==!1&&f.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function g0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const eA=37297;let nA=0;function iA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const f=h+1;r.push(`${f===t?">":" "} ${f}: ${i[h]}`)}return r.join(`
`)}const _0=new se;function aA(s){Ae._getMatrix(_0,Ae.workingColorSpace,s);const t=`mat3( ${_0.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(s)){case zc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function v0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+iA(s.getShaderSource(t),h)}else return l}function rA(s,t){const i=aA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function sA(s,t){let i;switch(t){case nS:i="Linear";break;case iS:i="Reinhard";break;case aS:i="Cineon";break;case rS:i="ACESFilmic";break;case oS:i="AgX";break;case lS:i="Neutral";break;case sS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rc=new K;function oA(){Ae.getLuminanceCoefficients(Rc);const s=Rc.x.toFixed(4),t=Rc.y.toFixed(4),i=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function cA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function uA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:f}}return i}function Vo(s){return s!==""}function x0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function y0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(s){return s.replace(fA,dA)}const hA=new Map;function dA(s,t){let i=le[t];if(i===void 0){const r=hA.get(t);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ad(i)}const pA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S0(s){return s.replace(pA,mA)}function mA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function M0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===H0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Py?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ia&&(t="SHADOWMAP_TYPE_VSM"),t}function _A(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ls:case Us:t="ENVMAP_TYPE_CUBE";break;case Xc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function xA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case G0:t="ENVMAP_BLENDING_MULTIPLY";break;case tS:t="ENVMAP_BLENDING_MIX";break;case eS:t="ENVMAP_BLENDING_ADD";break}return t}function yA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function SA(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,f=i.fragmentShader;const m=gA(i),p=_A(i),g=vA(i),v=xA(i),_=yA(i),S=lA(i),E=cA(c),T=l.createProgram();let y,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Vo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Vo).join(`
`),x.length>0&&(x+=`
`)):(y=[M0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),x=[M0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?le.tonemapping_pars_fragment:"",i.toneMapping!==Za?sA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,rA("linearToOutputTexel",i.outputColorSpace),oA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),h=Ad(h),h=x0(h,i),h=y0(h,i),f=Ad(f),f=x0(f,i),f=y0(f,i),h=S0(h),f=S0(f),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===C_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===C_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=O+y+h,w=O+x+f,B=g0(l,l.VERTEX_SHADER,L),H=g0(l,l.FRAGMENT_SHADER,w);l.attachShader(T,B),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(U){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(T).trim(),Y=l.getShaderInfoLog(B).trim(),et=l.getShaderInfoLog(H).trim();let ct=!0,I=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ct=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,B,H);else{const q=v0(l,B,"vertex"),X=v0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+J+`
`+q+`
`+X)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||et==="")&&(I=!1);I&&(U.diagnostics={runnable:ct,programLog:J,vertexShader:{log:Y,prefix:y},fragmentShader:{log:et,prefix:x}})}l.deleteShader(B),l.deleteShader(H),k=new Ic(l,T),D=uA(l,T)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(T,eA)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=nA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=H,this}let MA=0;class EA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new TA(t),i.set(t,r)),r}}class TA{constructor(t){this.id=MA++,this.code=t,this.usedTimes=0}}function bA(s,t,i,r,l,c,h){const f=new Id,m=new EA,p=new Set,g=[],v=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,R,U,J,Y){const et=J.fog,ct=Y.geometry,I=D.isMeshStandardMaterial?J.environment:null,q=(D.isMeshStandardMaterial?i:t).get(D.envMap||I),X=q&&q.mapping===Xc?q.image.height:null,mt=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const N=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,nt=N!==void 0?N.length:0;let vt=0;ct.morphAttributes.position!==void 0&&(vt=1),ct.morphAttributes.normal!==void 0&&(vt=2),ct.morphAttributes.color!==void 0&&(vt=3);let St,$,pt,yt;if(mt){const Ee=Ri[mt];St=Ee.vertexShader,$=Ee.fragmentShader}else St=D.vertexShader,$=D.fragmentShader,m.update(D),pt=m.getVertexShaderID(D),yt=m.getFragmentShaderID(D);const bt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),ae=Y.isInstancedMesh===!0,Yt=Y.isBatchedMesh===!0,Ue=!!D.map,we=!!D.matcap,oe=!!q,G=!!D.aoMap,An=!!D.lightMap,fe=!!D.bumpMap,ee=!!D.normalMap,Bt=!!D.displacementMap,Re=!!D.emissiveMap,Ft=!!D.metalnessMap,P=!!D.roughnessMap,A=D.anisotropy>0,at=D.clearcoat>0,xt=D.dispersion>0,Mt=D.iridescence>0,ht=D.sheen>0,It=D.transmission>0,At=A&&!!D.anisotropyMap,Rt=at&&!!D.clearcoatMap,ve=at&&!!D.clearcoatNormalMap,Tt=at&&!!D.clearcoatRoughnessMap,Ht=Mt&&!!D.iridescenceMap,jt=Mt&&!!D.iridescenceThicknessMap,Qt=ht&&!!D.sheenColorMap,Ot=ht&&!!D.sheenRoughnessMap,ce=!!D.specularMap,ne=!!D.specularColorMap,Ne=!!D.specularIntensityMap,W=It&&!!D.transmissionMap,Lt=It&&!!D.thicknessMap,ut=!!D.gradientMap,gt=!!D.alphaMap,Pt=D.alphaTest>0,Nt=!!D.alphaHash,ie=!!D.extensions;let Ge=Za;D.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ge=s.toneMapping);const tn={shaderID:mt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:$,defines:D.defines,customVertexShaderID:pt,customFragmentShaderID:yt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Yt,batchingColor:Yt&&Y._colorsTexture!==null,instancing:ae,instancingColor:ae&&Y.instanceColor!==null,instancingMorph:ae&&Y.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:bt===null?s.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Ps,alphaToCoverage:!!D.alphaToCoverage,map:Ue,matcap:we,envMap:oe,envMapMode:oe&&q.mapping,envMapCubeUVHeight:X,aoMap:G,lightMap:An,bumpMap:fe,normalMap:ee,displacementMap:_&&Bt,emissiveMap:Re,normalMapObjectSpace:ee&&D.normalMapType===hS,normalMapTangentSpace:ee&&D.normalMapType===$0,metalnessMap:Ft,roughnessMap:P,anisotropy:A,anisotropyMap:At,clearcoat:at,clearcoatMap:Rt,clearcoatNormalMap:ve,clearcoatRoughnessMap:Tt,dispersion:xt,iridescence:Mt,iridescenceMap:Ht,iridescenceThicknessMap:jt,sheen:ht,sheenColorMap:Qt,sheenRoughnessMap:Ot,specularMap:ce,specularColorMap:ne,specularIntensityMap:Ne,transmission:It,transmissionMap:W,thicknessMap:Lt,gradientMap:ut,opaque:D.transparent===!1&&D.blending===As&&D.alphaToCoverage===!1,alphaMap:gt,alphaTest:Pt,alphaHash:Nt,combine:D.combine,mapUv:Ue&&T(D.map.channel),aoMapUv:G&&T(D.aoMap.channel),lightMapUv:An&&T(D.lightMap.channel),bumpMapUv:fe&&T(D.bumpMap.channel),normalMapUv:ee&&T(D.normalMap.channel),displacementMapUv:Bt&&T(D.displacementMap.channel),emissiveMapUv:Re&&T(D.emissiveMap.channel),metalnessMapUv:Ft&&T(D.metalnessMap.channel),roughnessMapUv:P&&T(D.roughnessMap.channel),anisotropyMapUv:At&&T(D.anisotropyMap.channel),clearcoatMapUv:Rt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:ve&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(D.sheenRoughnessMap.channel),specularMapUv:ce&&T(D.specularMap.channel),specularColorMapUv:ne&&T(D.specularColorMap.channel),specularIntensityMapUv:Ne&&T(D.specularIntensityMap.channel),transmissionMapUv:W&&T(D.transmissionMap.channel),thicknessMapUv:Lt&&T(D.thicknessMap.channel),alphaMapUv:gt&&T(D.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(ee||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ct.attributes.uv&&(Ue||gt),fog:!!et,useFog:D.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Dt,skinning:Y.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ue&&D.map.isVideoTexture===!0&&Ae.getTransfer(D.map.colorSpace)===ze,decodeVideoTextureEmissive:Re&&D.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(D.emissiveMap.colorSpace)===ze,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ci,flipSided:D.side===Xn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ie&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&D.extensions.multiDraw===!0||Yt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function x(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const U in D.defines)R.push(U),R.push(D.defines[U]);return D.isRawShaderMaterial===!1&&(O(R,D),L(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function O(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function L(D,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),D.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),D.push(f.mask)}function w(D){const R=E[D.type];let U;if(R){const J=Ri[R];U=lv.clone(J.uniforms)}else U=D.uniforms;return U}function B(D,R){let U;for(let J=0,Y=g.length;J<Y;J++){const et=g[J];if(et.cacheKey===R){U=et,++U.usedTimes;break}}return U===void 0&&(U=new SA(s,R,D,c),g.push(U)),U}function H(D){if(--D.usedTimes===0){const R=g.indexOf(D);g[R]=g[g.length-1],g.pop(),D.destroy()}}function z(D){m.remove(D)}function k(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:w,acquireProgram:B,releaseProgram:H,releaseShaderCache:z,programs:g,dispose:k}}function AA(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let f=s.get(h);return f===void 0&&(f={},s.set(h,f)),f}function r(h){s.delete(h)}function l(h,f,m){s.get(h)[f]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function RA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function E0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function T0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(v,_,S,E,T,y){let x=s[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:T,group:y},s[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=T,x.group=y),t++,x}function f(v,_,S,E,T,y){const x=h(v,_,S,E,T,y);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(v,_,S,E,T,y){const x=h(v,_,S,E,T,y);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(v,_){i.length>1&&i.sort(v||RA),r.length>1&&r.sort(_||E0),l.length>1&&l.sort(_||E0)}function g(){for(let v=t,_=s.length;v<_;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:f,unshift:m,finish:g,sort:p}}function CA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new T0,s.set(r,[h])):l>=c.length?(h=new T0,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function wA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new de};break;case"SpotLight":i={position:new K,direction:new K,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new de,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new de,groundColor:new de};break;case"RectAreaLight":i={color:new de,position:new K,halfWidth:new K,halfHeight:new K};break}return s[t.id]=i,i}}}function DA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let LA=0;function UA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function NA(s){const t=new wA,i=DA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,c=new Xe,h=new Xe;function f(p){let g=0,v=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,T=0,y=0,x=0,O=0,L=0,w=0,B=0,H=0,z=0;p.sort(UA);for(let D=0,R=p.length;D<R;D++){const U=p[D],J=U.color,Y=U.intensity,et=U.distance,ct=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)g+=J.r*Y,v+=J.g*Y,_+=J.b*Y;else if(U.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(U.sh.coefficients[I],Y);z++}else if(U.isDirectionalLight){const I=t.get(U);if(I.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const q=U.shadow,X=i.get(U);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.directionalShadow[S]=X,r.directionalShadowMap[S]=ct,r.directionalShadowMatrix[S]=U.shadow.matrix,O++}r.directional[S]=I,S++}else if(U.isSpotLight){const I=t.get(U);I.position.setFromMatrixPosition(U.matrixWorld),I.color.copy(J).multiplyScalar(Y),I.distance=et,I.coneCos=Math.cos(U.angle),I.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),I.decay=U.decay,r.spot[T]=I;const q=U.shadow;if(U.map&&(r.spotLightMap[B]=U.map,B++,q.updateMatrices(U),U.castShadow&&H++),r.spotLightMatrix[T]=q.matrix,U.castShadow){const X=i.get(U);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.spotShadow[T]=X,r.spotShadowMap[T]=ct,w++}T++}else if(U.isRectAreaLight){const I=t.get(U);I.color.copy(J).multiplyScalar(Y),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=I,y++}else if(U.isPointLight){const I=t.get(U);if(I.color.copy(U.color).multiplyScalar(U.intensity),I.distance=U.distance,I.decay=U.decay,U.castShadow){const q=U.shadow,X=i.get(U);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,r.pointShadow[E]=X,r.pointShadowMap[E]=ct,r.pointShadowMatrix[E]=U.shadow.matrix,L++}r.point[E]=I,E++}else if(U.isHemisphereLight){const I=t.get(U);I.skyColor.copy(U.color).multiplyScalar(Y),I.groundColor.copy(U.groundColor).multiplyScalar(Y),r.hemi[x]=I,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const k=r.hash;(k.directionalLength!==S||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==y||k.hemiLength!==x||k.numDirectionalShadows!==O||k.numPointShadows!==L||k.numSpotShadows!==w||k.numSpotMaps!==B||k.numLightProbes!==z)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+B-H,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=z,k.directionalLength=S,k.pointLength=E,k.spotLength=T,k.rectAreaLength=y,k.hemiLength=x,k.numDirectionalShadows=O,k.numPointShadows=L,k.numSpotShadows=w,k.numSpotMaps=B,k.numLightProbes=z,r.version=LA++)}function m(p,g){let v=0,_=0,S=0,E=0,T=0;const y=g.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const L=p[x];if(L.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),v++}else if(L.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),h.identity(),c.copy(L.matrixWorld),c.premultiply(y),h.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const w=r.point[_];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),_++}else if(L.isHemisphereLight){const w=r.hemi[T];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(y),T++}}}return{setup:f,setupView:m,state:r}}function b0(s){const t=new NA(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function f(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:f,setupLightsView:m,pushLight:c,pushShadow:h}}function OA(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let f;return h===void 0?(f=new b0(s),t.set(l,[f])):c>=h.length?(f=new b0(s),h.push(f)):f=h[c],f}function r(){t=new WeakMap}return{get:i,dispose:r}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
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
}`;function zA(s,t,i){let r=new zd;const l=new qt,c=new qt,h=new Qe,f=new $S({depthPacking:fS}),m=new tM,p={},g=i.maxTextureSize,v={[la]:Xn,[Xn]:la,[Ci]:Ci},_=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:PA,fragmentShader:IA}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Li;E.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new fi(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H0;let x=this.type;this.render=function(H,z,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),J=s.state;J.setBlending(ja),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Y=x!==ia&&this.type===ia,et=x===ia&&this.type!==ia;for(let ct=0,I=H.length;ct<I;ct++){const q=H[ct],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const mt=X.getFrameExtents();if(l.multiply(mt),c.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/mt.x),l.x=c.x*mt.x,X.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/mt.y),l.y=c.y*mt.y,X.mapSize.y=c.y)),X.map===null||Y===!0||et===!0){const nt=this.type!==ia?{minFilter:hi,magFilter:hi}:{};X.map!==null&&X.map.dispose(),X.map=new Cr(l.x,l.y,nt),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const N=X.getViewportCount();for(let nt=0;nt<N;nt++){const vt=X.getViewport(nt);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),J.viewport(h),X.updateMatrices(q,nt),r=X.getFrustum(),w(z,k,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===ia&&O(X,k),X.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(D,R,U)};function O(H,z){const k=t.update(T);_.defines.VSM_SAMPLES!==H.blurSamples&&(_.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Cr(l.x,l.y)),_.uniforms.shadow_pass.value=H.map.texture,_.uniforms.resolution.value=H.mapSize,_.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(z,null,k,_,T,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(z,null,k,S,T,null)}function L(H,z,k,D){let R=null;const U=k.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(U!==void 0)R=U;else if(R=k.isPointLight===!0?m:f,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const J=R.uuid,Y=z.uuid;let et=p[J];et===void 0&&(et={},p[J]=et);let ct=et[Y];ct===void 0&&(ct=R.clone(),et[Y]=ct,z.addEventListener("dispose",B)),R=ct}if(R.visible=z.visible,R.wireframe=z.wireframe,D===ia?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:v[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=s.properties.get(R);J.light=k}return R}function w(H,z,k,D,R){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===ia)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,H.matrixWorld);const Y=t.update(H),et=H.material;if(Array.isArray(et)){const ct=Y.groups;for(let I=0,q=ct.length;I<q;I++){const X=ct[I],mt=et[X.materialIndex];if(mt&&mt.visible){const N=L(H,mt,D,R);H.onBeforeShadow(s,H,z,k,Y,N,X),s.renderBufferDirect(k,null,Y,N,H,X),H.onAfterShadow(s,H,z,k,Y,N,X)}}}else if(et.visible){const ct=L(H,et,D,R);H.onBeforeShadow(s,H,z,k,Y,ct,null),s.renderBufferDirect(k,null,Y,ct,H,null),H.onAfterShadow(s,H,z,k,Y,ct,null)}}const J=H.children;for(let Y=0,et=J.length;Y<et;Y++)w(J[Y],z,k,D,R)}function B(H){H.target.removeEventListener("dispose",B);for(const k in p){const D=p[k],R=H.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const BA={[Fh]:Hh,[Gh]:Xh,[Vh]:Wh,[Ds]:kh,[Hh]:Fh,[Xh]:Gh,[Wh]:Vh,[kh]:Ds};function FA(s,t){function i(){let W=!1;const Lt=new Qe;let ut=null;const gt=new Qe(0,0,0,0);return{setMask:function(Pt){ut!==Pt&&!W&&(s.colorMask(Pt,Pt,Pt,Pt),ut=Pt)},setLocked:function(Pt){W=Pt},setClear:function(Pt,Nt,ie,Ge,tn){tn===!0&&(Pt*=Ge,Nt*=Ge,ie*=Ge),Lt.set(Pt,Nt,ie,Ge),gt.equals(Lt)===!1&&(s.clearColor(Pt,Nt,ie,Ge),gt.copy(Lt))},reset:function(){W=!1,ut=null,gt.set(-1,0,0,0)}}}function r(){let W=!1,Lt=!1,ut=null,gt=null,Pt=null;return{setReversed:function(Nt){if(Lt!==Nt){const ie=t.get("EXT_clip_control");Lt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);const Ge=Pt;Pt=null,this.setClear(Ge)}Lt=Nt},getReversed:function(){return Lt},setTest:function(Nt){Nt?bt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(Nt){ut!==Nt&&!W&&(s.depthMask(Nt),ut=Nt)},setFunc:function(Nt){if(Lt&&(Nt=BA[Nt]),gt!==Nt){switch(Nt){case Fh:s.depthFunc(s.NEVER);break;case Hh:s.depthFunc(s.ALWAYS);break;case Gh:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case Vh:s.depthFunc(s.EQUAL);break;case kh:s.depthFunc(s.GEQUAL);break;case Xh:s.depthFunc(s.GREATER);break;case Wh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Nt}},setLocked:function(Nt){W=Nt},setClear:function(Nt){Pt!==Nt&&(Lt&&(Nt=1-Nt),s.clearDepth(Nt),Pt=Nt)},reset:function(){W=!1,ut=null,gt=null,Pt=null,Lt=!1}}}function l(){let W=!1,Lt=null,ut=null,gt=null,Pt=null,Nt=null,ie=null,Ge=null,tn=null;return{setTest:function(Ee){W||(Ee?bt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(Ee){Lt!==Ee&&!W&&(s.stencilMask(Ee),Lt=Ee)},setFunc:function(Ee,Wn,dn){(ut!==Ee||gt!==Wn||Pt!==dn)&&(s.stencilFunc(Ee,Wn,dn),ut=Ee,gt=Wn,Pt=dn)},setOp:function(Ee,Wn,dn){(Nt!==Ee||ie!==Wn||Ge!==dn)&&(s.stencilOp(Ee,Wn,dn),Nt=Ee,ie=Wn,Ge=dn)},setLocked:function(Ee){W=Ee},setClear:function(Ee){tn!==Ee&&(s.clearStencil(Ee),tn=Ee)},reset:function(){W=!1,Lt=null,ut=null,gt=null,Pt=null,Nt=null,ie=null,Ge=null,tn=null}}}const c=new i,h=new r,f=new l,m=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,S=[],E=null,T=!1,y=null,x=null,O=null,L=null,w=null,B=null,H=null,z=new de(0,0,0),k=0,D=!1,R=null,U=null,J=null,Y=null,et=null;const ct=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,q=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),I=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),I=q>=2);let mt=null,N={};const nt=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),St=new Qe().fromArray(nt),$=new Qe().fromArray(vt);function pt(W,Lt,ut,gt){const Pt=new Uint8Array(4),Nt=s.createTexture();s.bindTexture(W,Nt),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<ut;ie++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Lt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,Pt):s.texImage2D(Lt+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pt);return Nt}const yt={};yt[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),f.setClear(0),bt(s.DEPTH_TEST),h.setFunc(Ds),fe(!1),ee(M_),bt(s.CULL_FACE),G(ja);function bt(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function Dt(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function ae(W,Lt){return v[W]!==Lt?(s.bindFramebuffer(W,Lt),v[W]=Lt,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Lt),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Yt(W,Lt){let ut=S,gt=!1;if(W){ut=_.get(Lt),ut===void 0&&(ut=[],_.set(Lt,ut));const Pt=W.textures;if(ut.length!==Pt.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let Nt=0,ie=Pt.length;Nt<ie;Nt++)ut[Nt]=s.COLOR_ATTACHMENT0+Nt;ut.length=Pt.length,gt=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,gt=!0);gt&&s.drawBuffers(ut)}function Ue(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const we={[Er]:s.FUNC_ADD,[zy]:s.FUNC_SUBTRACT,[By]:s.FUNC_REVERSE_SUBTRACT};we[Fy]=s.MIN,we[Hy]=s.MAX;const oe={[Gy]:s.ZERO,[Vy]:s.ONE,[ky]:s.SRC_COLOR,[zh]:s.SRC_ALPHA,[Zy]:s.SRC_ALPHA_SATURATE,[Yy]:s.DST_COLOR,[Wy]:s.DST_ALPHA,[Xy]:s.ONE_MINUS_SRC_COLOR,[Bh]:s.ONE_MINUS_SRC_ALPHA,[jy]:s.ONE_MINUS_DST_COLOR,[qy]:s.ONE_MINUS_DST_ALPHA,[Ky]:s.CONSTANT_COLOR,[Qy]:s.ONE_MINUS_CONSTANT_COLOR,[Jy]:s.CONSTANT_ALPHA,[$y]:s.ONE_MINUS_CONSTANT_ALPHA};function G(W,Lt,ut,gt,Pt,Nt,ie,Ge,tn,Ee){if(W===ja){T===!0&&(Dt(s.BLEND),T=!1);return}if(T===!1&&(bt(s.BLEND),T=!0),W!==Iy){if(W!==y||Ee!==D){if((x!==Er||w!==Er)&&(s.blendEquation(s.FUNC_ADD),x=Er,w=Er),Ee)switch(W){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case E_:s.blendFunc(s.ONE,s.ONE);break;case T_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case b_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case E_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case T_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case b_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}O=null,L=null,B=null,H=null,z.set(0,0,0),k=0,y=W,D=Ee}return}Pt=Pt||Lt,Nt=Nt||ut,ie=ie||gt,(Lt!==x||Pt!==w)&&(s.blendEquationSeparate(we[Lt],we[Pt]),x=Lt,w=Pt),(ut!==O||gt!==L||Nt!==B||ie!==H)&&(s.blendFuncSeparate(oe[ut],oe[gt],oe[Nt],oe[ie]),O=ut,L=gt,B=Nt,H=ie),(Ge.equals(z)===!1||tn!==k)&&(s.blendColor(Ge.r,Ge.g,Ge.b,tn),z.copy(Ge),k=tn),y=W,D=!1}function An(W,Lt){W.side===Ci?Dt(s.CULL_FACE):bt(s.CULL_FACE);let ut=W.side===Xn;Lt&&(ut=!ut),fe(ut),W.blending===As&&W.transparent===!1?G(ja):G(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const gt=W.stencilWrite;f.setTest(gt),gt&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Re(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?bt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function fe(W){R!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),R=W)}function ee(W){W!==Ny?(bt(s.CULL_FACE),W!==U&&(W===M_?s.cullFace(s.BACK):W===Oy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),U=W}function Bt(W){W!==J&&(I&&s.lineWidth(W),J=W)}function Re(W,Lt,ut){W?(bt(s.POLYGON_OFFSET_FILL),(Y!==Lt||et!==ut)&&(s.polygonOffset(Lt,ut),Y=Lt,et=ut)):Dt(s.POLYGON_OFFSET_FILL)}function Ft(W){W?bt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function P(W){W===void 0&&(W=s.TEXTURE0+ct-1),mt!==W&&(s.activeTexture(W),mt=W)}function A(W,Lt,ut){ut===void 0&&(mt===null?ut=s.TEXTURE0+ct-1:ut=mt);let gt=N[ut];gt===void 0&&(gt={type:void 0,texture:void 0},N[ut]=gt),(gt.type!==W||gt.texture!==Lt)&&(mt!==ut&&(s.activeTexture(ut),mt=ut),s.bindTexture(W,Lt||yt[W]),gt.type=W,gt.texture=Lt)}function at(){const W=N[mt];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function xt(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function It(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function At(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ht(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function jt(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qt(W){St.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),St.copy(W))}function Ot(W){$.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),$.copy(W))}function ce(W,Lt){let ut=p.get(Lt);ut===void 0&&(ut=new WeakMap,p.set(Lt,ut));let gt=ut.get(W);gt===void 0&&(gt=s.getUniformBlockIndex(Lt,W.name),ut.set(W,gt))}function ne(W,Lt){const gt=p.get(Lt).get(W);m.get(Lt)!==gt&&(s.uniformBlockBinding(Lt,gt,W.__bindingPointIndex),m.set(Lt,gt))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},mt=null,N={},v={},_=new WeakMap,S=[],E=null,T=!1,y=null,x=null,O=null,L=null,w=null,B=null,H=null,z=new de(0,0,0),k=0,D=!1,R=null,U=null,J=null,Y=null,et=null,St.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),f.reset()}return{buffers:{color:c,depth:h,stencil:f},enable:bt,disable:Dt,bindFramebuffer:ae,drawBuffers:Yt,useProgram:Ue,setBlending:G,setMaterial:An,setFlipSided:fe,setCullFace:ee,setLineWidth:Bt,setPolygonOffset:Re,setScissorTest:Ft,activeTexture:P,bindTexture:A,unbindTexture:at,compressedTexImage2D:xt,compressedTexImage3D:Mt,texImage2D:Ht,texImage3D:jt,updateUBOMapping:ce,uniformBlockBinding:ne,texStorage2D:ve,texStorage3D:Tt,texSubImage2D:ht,texSubImage3D:It,compressedTexSubImage2D:At,compressedTexSubImage3D:Rt,scissor:Qt,viewport:Ot,reset:Ne}}function HA(s,t,i,r,l,c,h){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new qt,g=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,A){return S?new OffscreenCanvas(P,A):Xo("canvas")}function T(P,A,at){let xt=1;const Mt=Ft(P);if((Mt.width>at||Mt.height>at)&&(xt=at/Math.max(Mt.width,Mt.height)),xt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ht=Math.floor(xt*Mt.width),It=Math.floor(xt*Mt.height);v===void 0&&(v=E(ht,It));const At=A?E(ht,It):v;return At.width=ht,At.height=It,At.getContext("2d").drawImage(P,0,0,ht,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+It+")."),At}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),P;return P}function y(P){return P.generateMipmaps}function x(P){s.generateMipmap(P)}function O(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,A,at,xt,Mt=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ht=A;if(A===s.RED&&(at===s.FLOAT&&(ht=s.R32F),at===s.HALF_FLOAT&&(ht=s.R16F),at===s.UNSIGNED_BYTE&&(ht=s.R8)),A===s.RED_INTEGER&&(at===s.UNSIGNED_BYTE&&(ht=s.R8UI),at===s.UNSIGNED_SHORT&&(ht=s.R16UI),at===s.UNSIGNED_INT&&(ht=s.R32UI),at===s.BYTE&&(ht=s.R8I),at===s.SHORT&&(ht=s.R16I),at===s.INT&&(ht=s.R32I)),A===s.RG&&(at===s.FLOAT&&(ht=s.RG32F),at===s.HALF_FLOAT&&(ht=s.RG16F),at===s.UNSIGNED_BYTE&&(ht=s.RG8)),A===s.RG_INTEGER&&(at===s.UNSIGNED_BYTE&&(ht=s.RG8UI),at===s.UNSIGNED_SHORT&&(ht=s.RG16UI),at===s.UNSIGNED_INT&&(ht=s.RG32UI),at===s.BYTE&&(ht=s.RG8I),at===s.SHORT&&(ht=s.RG16I),at===s.INT&&(ht=s.RG32I)),A===s.RGB_INTEGER&&(at===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),at===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),at===s.UNSIGNED_INT&&(ht=s.RGB32UI),at===s.BYTE&&(ht=s.RGB8I),at===s.SHORT&&(ht=s.RGB16I),at===s.INT&&(ht=s.RGB32I)),A===s.RGBA_INTEGER&&(at===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),at===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),at===s.UNSIGNED_INT&&(ht=s.RGBA32UI),at===s.BYTE&&(ht=s.RGBA8I),at===s.SHORT&&(ht=s.RGBA16I),at===s.INT&&(ht=s.RGBA32I)),A===s.RGB&&at===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),A===s.RGBA){const It=Mt?zc:Ae.getTransfer(xt);at===s.FLOAT&&(ht=s.RGBA32F),at===s.HALF_FLOAT&&(ht=s.RGBA16F),at===s.UNSIGNED_BYTE&&(ht=It===ze?s.SRGB8_ALPHA8:s.RGBA8),at===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),at===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function w(P,A){let at;return P?A===null||A===Rr||A===Ns?at=s.DEPTH24_STENCIL8:A===aa?at=s.DEPTH32F_STENCIL8:A===ko&&(at=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Rr||A===Ns?at=s.DEPTH_COMPONENT24:A===aa?at=s.DEPTH_COMPONENT32F:A===ko&&(at=s.DEPTH_COMPONENT16),at}function B(P,A){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==hi&&P.minFilter!==wi?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function H(P){const A=P.target;A.removeEventListener("dispose",H),k(A),A.isVideoTexture&&g.delete(A)}function z(P){const A=P.target;A.removeEventListener("dispose",z),R(A)}function k(P){const A=r.get(P);if(A.__webglInit===void 0)return;const at=P.source,xt=_.get(at);if(xt){const Mt=xt[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(P),Object.keys(xt).length===0&&_.delete(at)}r.remove(P)}function D(P){const A=r.get(P);s.deleteTexture(A.__webglTexture);const at=P.source,xt=_.get(at);delete xt[A.__cacheKey],h.memory.textures--}function R(P){const A=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(A.__webglFramebuffer[xt]))for(let Mt=0;Mt<A.__webglFramebuffer[xt].length;Mt++)s.deleteFramebuffer(A.__webglFramebuffer[xt][Mt]);else s.deleteFramebuffer(A.__webglFramebuffer[xt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[xt])}else{if(Array.isArray(A.__webglFramebuffer))for(let xt=0;xt<A.__webglFramebuffer.length;xt++)s.deleteFramebuffer(A.__webglFramebuffer[xt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xt=0;xt<A.__webglColorRenderbuffer.length;xt++)A.__webglColorRenderbuffer[xt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[xt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const at=P.textures;for(let xt=0,Mt=at.length;xt<Mt;xt++){const ht=r.get(at[xt]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),h.memory.textures--),r.remove(at[xt])}r.remove(P)}let U=0;function J(){U=0}function Y(){const P=U;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),U+=1,P}function et(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function ct(P,A){const at=r.get(P);if(P.isVideoTexture&&Bt(P),P.isRenderTargetTexture===!1&&P.version>0&&at.__version!==P.version){const xt=P.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(at,P,A);return}}i.bindTexture(s.TEXTURE_2D,at.__webglTexture,s.TEXTURE0+A)}function I(P,A){const at=r.get(P);if(P.version>0&&at.__version!==P.version){$(at,P,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,at.__webglTexture,s.TEXTURE0+A)}function q(P,A){const at=r.get(P);if(P.version>0&&at.__version!==P.version){$(at,P,A);return}i.bindTexture(s.TEXTURE_3D,at.__webglTexture,s.TEXTURE0+A)}function X(P,A){const at=r.get(P);if(P.version>0&&at.__version!==P.version){pt(at,P,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture,s.TEXTURE0+A)}const mt={[jh]:s.REPEAT,[br]:s.CLAMP_TO_EDGE,[Zh]:s.MIRRORED_REPEAT},N={[hi]:s.NEAREST,[cS]:s.NEAREST_MIPMAP_NEAREST,[rc]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[nh]:s.LINEAR_MIPMAP_NEAREST,[Ar]:s.LINEAR_MIPMAP_LINEAR},nt={[dS]:s.NEVER,[xS]:s.ALWAYS,[pS]:s.LESS,[tv]:s.LEQUAL,[mS]:s.EQUAL,[vS]:s.GEQUAL,[gS]:s.GREATER,[_S]:s.NOTEQUAL};function vt(P,A){if(A.type===aa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===wi||A.magFilter===nh||A.magFilter===rc||A.magFilter===Ar||A.minFilter===wi||A.minFilter===nh||A.minFilter===rc||A.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,mt[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,mt[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,mt[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,N[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,N[A.minFilter]),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,nt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===hi||A.minFilter!==rc&&A.minFilter!==Ar||A.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function St(P,A){let at=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",H));const xt=A.source;let Mt=_.get(xt);Mt===void 0&&(Mt={},_.set(xt,Mt));const ht=et(A);if(ht!==P.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,at=!0),Mt[ht].usedTimes++;const It=Mt[P.__cacheKey];It!==void 0&&(Mt[P.__cacheKey].usedTimes--,It.usedTimes===0&&D(A)),P.__cacheKey=ht,P.__webglTexture=Mt[ht].texture}return at}function $(P,A,at){let xt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xt=s.TEXTURE_3D);const Mt=St(P,A),ht=A.source;i.bindTexture(xt,P.__webglTexture,s.TEXTURE0+at);const It=r.get(ht);if(ht.version!==It.__version||Mt===!0){i.activeTexture(s.TEXTURE0+at);const At=Ae.getPrimaries(Ae.workingColorSpace),Rt=A.colorSpace===Wa?null:Ae.getPrimaries(A.colorSpace),ve=A.colorSpace===Wa||At===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Tt=T(A.image,!1,l.maxTextureSize);Tt=Re(A,Tt);const Ht=c.convert(A.format,A.colorSpace),jt=c.convert(A.type);let Qt=L(A.internalFormat,Ht,jt,A.colorSpace,A.isVideoTexture);vt(xt,A);let Ot;const ce=A.mipmaps,ne=A.isVideoTexture!==!0,Ne=It.__version===void 0||Mt===!0,W=ht.dataReady,Lt=B(A,Tt);if(A.isDepthTexture)Qt=w(A.format===Os,A.type),Ne&&(ne?i.texStorage2D(s.TEXTURE_2D,1,Qt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,Qt,Tt.width,Tt.height,0,Ht,jt,null));else if(A.isDataTexture)if(ce.length>0){ne&&Ne&&i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ce[0].width,ce[0].height);for(let ut=0,gt=ce.length;ut<gt;ut++)Ot=ce[ut],ne?W&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Ht,jt,Ot.data):i.texImage2D(s.TEXTURE_2D,ut,Qt,Ot.width,Ot.height,0,Ht,jt,Ot.data);A.generateMipmaps=!1}else ne?(Ne&&i.texStorage2D(s.TEXTURE_2D,Lt,Qt,Tt.width,Tt.height),W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Ht,jt,Tt.data)):i.texImage2D(s.TEXTURE_2D,0,Qt,Tt.width,Tt.height,0,Ht,jt,Tt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ne&&Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Qt,ce[0].width,ce[0].height,Tt.depth);for(let ut=0,gt=ce.length;ut<gt;ut++)if(Ot=ce[ut],A.format!==yi)if(Ht!==null)if(ne){if(W)if(A.layerUpdates.size>0){const Pt=e0(Ot.width,Ot.height,A.format,A.type);for(const Nt of A.layerUpdates){const ie=Ot.data.subarray(Nt*Pt/Ot.data.BYTES_PER_ELEMENT,(Nt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Nt,Ot.width,Ot.height,1,Ht,ie)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ot.width,Ot.height,Tt.depth,Ht,Ot.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,Qt,Ot.width,Ot.height,Tt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?W&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ot.width,Ot.height,Tt.depth,Ht,jt,Ot.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ut,Qt,Ot.width,Ot.height,Tt.depth,0,Ht,jt,Ot.data)}else{ne&&Ne&&i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ce[0].width,ce[0].height);for(let ut=0,gt=ce.length;ut<gt;ut++)Ot=ce[ut],A.format!==yi?Ht!==null?ne?W&&i.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Ht,Ot.data):i.compressedTexImage2D(s.TEXTURE_2D,ut,Qt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?W&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Ht,jt,Ot.data):i.texImage2D(s.TEXTURE_2D,ut,Qt,Ot.width,Ot.height,0,Ht,jt,Ot.data)}else if(A.isDataArrayTexture)if(ne){if(Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Qt,Tt.width,Tt.height,Tt.depth),W)if(A.layerUpdates.size>0){const ut=e0(Tt.width,Tt.height,A.format,A.type);for(const gt of A.layerUpdates){const Pt=Tt.data.subarray(gt*ut/Tt.data.BYTES_PER_ELEMENT,(gt+1)*ut/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,Tt.width,Tt.height,1,Ht,jt,Pt)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ht,jt,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Qt,Tt.width,Tt.height,Tt.depth,0,Ht,jt,Tt.data);else if(A.isData3DTexture)ne?(Ne&&i.texStorage3D(s.TEXTURE_3D,Lt,Qt,Tt.width,Tt.height,Tt.depth),W&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ht,jt,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,Qt,Tt.width,Tt.height,Tt.depth,0,Ht,jt,Tt.data);else if(A.isFramebufferTexture){if(Ne)if(ne)i.texStorage2D(s.TEXTURE_2D,Lt,Qt,Tt.width,Tt.height);else{let ut=Tt.width,gt=Tt.height;for(let Pt=0;Pt<Lt;Pt++)i.texImage2D(s.TEXTURE_2D,Pt,Qt,ut,gt,0,Ht,jt,null),ut>>=1,gt>>=1}}else if(ce.length>0){if(ne&&Ne){const ut=Ft(ce[0]);i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ut.width,ut.height)}for(let ut=0,gt=ce.length;ut<gt;ut++)Ot=ce[ut],ne?W&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ht,jt,Ot):i.texImage2D(s.TEXTURE_2D,ut,Qt,Ht,jt,Ot);A.generateMipmaps=!1}else if(ne){if(Ne){const ut=Ft(Tt);i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ut.width,ut.height)}W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ht,jt,Tt)}else i.texImage2D(s.TEXTURE_2D,0,Qt,Ht,jt,Tt);y(A)&&x(xt),It.__version=ht.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function pt(P,A,at){if(A.image.length!==6)return;const xt=St(P,A),Mt=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+at);const ht=r.get(Mt);if(Mt.version!==ht.__version||xt===!0){i.activeTexture(s.TEXTURE0+at);const It=Ae.getPrimaries(Ae.workingColorSpace),At=A.colorSpace===Wa?null:Ae.getPrimaries(A.colorSpace),Rt=A.colorSpace===Wa||It===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const ve=A.isCompressedTexture||A.image[0].isCompressedTexture,Tt=A.image[0]&&A.image[0].isDataTexture,Ht=[];for(let gt=0;gt<6;gt++)!ve&&!Tt?Ht[gt]=T(A.image[gt],!0,l.maxCubemapSize):Ht[gt]=Tt?A.image[gt].image:A.image[gt],Ht[gt]=Re(A,Ht[gt]);const jt=Ht[0],Qt=c.convert(A.format,A.colorSpace),Ot=c.convert(A.type),ce=L(A.internalFormat,Qt,Ot,A.colorSpace),ne=A.isVideoTexture!==!0,Ne=ht.__version===void 0||xt===!0,W=Mt.dataReady;let Lt=B(A,jt);vt(s.TEXTURE_CUBE_MAP,A);let ut;if(ve){ne&&Ne&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ce,jt.width,jt.height);for(let gt=0;gt<6;gt++){ut=Ht[gt].mipmaps;for(let Pt=0;Pt<ut.length;Pt++){const Nt=ut[Pt];A.format!==yi?Qt!==null?ne?W&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,0,0,Nt.width,Nt.height,Qt,Nt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,ce,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,0,0,Nt.width,Nt.height,Qt,Ot,Nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt,ce,Nt.width,Nt.height,0,Qt,Ot,Nt.data)}}}else{if(ut=A.mipmaps,ne&&Ne){ut.length>0&&Lt++;const gt=Ft(Ht[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ce,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Tt){ne?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ht[gt].width,Ht[gt].height,Qt,Ot,Ht[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ce,Ht[gt].width,Ht[gt].height,0,Qt,Ot,Ht[gt].data);for(let Pt=0;Pt<ut.length;Pt++){const ie=ut[Pt].image[gt].image;ne?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,0,0,ie.width,ie.height,Qt,Ot,ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,ce,ie.width,ie.height,0,Qt,Ot,ie.data)}}else{ne?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Qt,Ot,Ht[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ce,Qt,Ot,Ht[gt]);for(let Pt=0;Pt<ut.length;Pt++){const Nt=ut[Pt];ne?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,0,0,Qt,Ot,Nt.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt+1,ce,Qt,Ot,Nt.image[gt])}}}y(A)&&x(s.TEXTURE_CUBE_MAP),ht.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function yt(P,A,at,xt,Mt,ht){const It=c.convert(at.format,at.colorSpace),At=c.convert(at.type),Rt=L(at.internalFormat,It,At,at.colorSpace),ve=r.get(A),Tt=r.get(at);if(Tt.__renderTarget=A,!ve.__hasExternalTextures){const Ht=Math.max(1,A.width>>ht),jt=Math.max(1,A.height>>ht);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ht,Rt,Ht,jt,A.depth,0,It,At,null):i.texImage2D(Mt,ht,Rt,Ht,jt,0,It,At,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),ee(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xt,Mt,Tt.__webglTexture,0,fe(A)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xt,Mt,Tt.__webglTexture,ht),i.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(P,A,at){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer){const xt=A.depthTexture,Mt=xt&&xt.isDepthTexture?xt.type:null,ht=w(A.stencilBuffer,Mt),It=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=fe(A);ee(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,ht,A.width,A.height):at?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,ht,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ht,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,It,s.RENDERBUFFER,P)}else{const xt=A.textures;for(let Mt=0;Mt<xt.length;Mt++){const ht=xt[Mt],It=c.convert(ht.format,ht.colorSpace),At=c.convert(ht.type),Rt=L(ht.internalFormat,It,At,ht.colorSpace),ve=fe(A);at&&ee(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,Rt,A.width,A.height):ee(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,Rt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Rt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=r.get(A.depthTexture);xt.__renderTarget=A,(!xt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ct(A.depthTexture,0);const Mt=xt.__webglTexture,ht=fe(A);if(A.depthTexture.format===Rs)ee(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0);else if(A.depthTexture.format===Os)ee(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function ae(P){const A=r.get(P),at=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const xt=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xt){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xt.removeEventListener("dispose",Mt)};xt.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=xt}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Dt(A.__webglFramebuffer,P)}else if(at){A.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[xt]),A.__webglDepthbuffer[xt]===void 0)A.__webglDepthbuffer[xt]=s.createRenderbuffer(),bt(A.__webglDepthbuffer[xt],P,!1);else{const Mt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[xt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,ht)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),bt(A.__webglDepthbuffer,P,!1);else{const xt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,Mt)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(P,A,at){const xt=r.get(P);A!==void 0&&yt(xt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),at!==void 0&&ae(P)}function Ue(P){const A=P.texture,at=r.get(P),xt=r.get(A);P.addEventListener("dispose",z);const Mt=P.textures,ht=P.isWebGLCubeRenderTarget===!0,It=Mt.length>1;if(It||(xt.__webglTexture===void 0&&(xt.__webglTexture=s.createTexture()),xt.__version=A.version,h.memory.textures++),ht){at.__webglFramebuffer=[];for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[At]=[];for(let Rt=0;Rt<A.mipmaps.length;Rt++)at.__webglFramebuffer[At][Rt]=s.createFramebuffer()}else at.__webglFramebuffer[At]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let At=0;At<A.mipmaps.length;At++)at.__webglFramebuffer[At]=s.createFramebuffer()}else at.__webglFramebuffer=s.createFramebuffer();if(It)for(let At=0,Rt=Mt.length;At<Rt;At++){const ve=r.get(Mt[At]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),h.memory.textures++)}if(P.samples>0&&ee(P)===!1){at.__webglMultisampledFramebuffer=s.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let At=0;At<Mt.length;At++){const Rt=Mt[At];at.__webglColorRenderbuffer[At]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,at.__webglColorRenderbuffer[At]);const ve=c.convert(Rt.format,Rt.colorSpace),Tt=c.convert(Rt.type),Ht=L(Rt.internalFormat,ve,Tt,Rt.colorSpace,P.isXRRenderTarget===!0),jt=fe(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,Ht,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,at.__webglColorRenderbuffer[At])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(at.__webglDepthRenderbuffer=s.createRenderbuffer(),bt(at.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,xt.__webglTexture),vt(s.TEXTURE_CUBE_MAP,A);for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0)for(let Rt=0;Rt<A.mipmaps.length;Rt++)yt(at.__webglFramebuffer[At][Rt],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt);else yt(at.__webglFramebuffer[At],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);y(A)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let At=0,Rt=Mt.length;At<Rt;At++){const ve=Mt[At],Tt=r.get(ve);i.bindTexture(s.TEXTURE_2D,Tt.__webglTexture),vt(s.TEXTURE_2D,ve),yt(at.__webglFramebuffer,P,ve,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,0),y(ve)&&x(s.TEXTURE_2D)}i.unbindTexture()}else{let At=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(At=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(At,xt.__webglTexture),vt(At,A),A.mipmaps&&A.mipmaps.length>0)for(let Rt=0;Rt<A.mipmaps.length;Rt++)yt(at.__webglFramebuffer[Rt],P,A,s.COLOR_ATTACHMENT0,At,Rt);else yt(at.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,At,0);y(A)&&x(At),i.unbindTexture()}P.depthBuffer&&ae(P)}function we(P){const A=P.textures;for(let at=0,xt=A.length;at<xt;at++){const Mt=A[at];if(y(Mt)){const ht=O(P),It=r.get(Mt).__webglTexture;i.bindTexture(ht,It),x(ht),i.unbindTexture()}}}const oe=[],G=[];function An(P){if(P.samples>0){if(ee(P)===!1){const A=P.textures,at=P.width,xt=P.height;let Mt=s.COLOR_BUFFER_BIT;const ht=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=r.get(P),At=A.length>1;if(At)for(let Rt=0;Rt<A.length;Rt++)i.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Rt=0;Rt<A.length;Rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),At){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,It.__webglColorRenderbuffer[Rt]);const ve=r.get(A[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,at,xt,0,0,at,xt,Mt,s.NEAREST),m===!0&&(oe.length=0,G.length=0,oe.push(s.COLOR_ATTACHMENT0+Rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(oe.push(ht),G.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,G)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),At)for(let Rt=0;Rt<A.length;Rt++){i.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,It.__webglColorRenderbuffer[Rt]);const ve=r.get(A[Rt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,ve,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const A=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function fe(P){return Math.min(l.maxSamples,P.samples)}function ee(P){const A=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Bt(P){const A=h.render.frame;g.get(P)!==A&&(g.set(P,A),P.update())}function Re(P,A){const at=P.colorSpace,xt=P.format,Mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||at!==Ps&&at!==Wa&&(Ae.getTransfer(at)===ze?(xt!==yi||Mt!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}function Ft(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=Y,this.resetTextureUnits=J,this.setTexture2D=ct,this.setTexture2DArray=I,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Yt,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ee}function GA(s,t){function i(r,l=Wa){let c;const h=Ae.getTransfer(l);if(r===ca)return s.UNSIGNED_BYTE;if(r===Dd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ld)return s.UNSIGNED_SHORT_5_5_5_1;if(r===W0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===k0)return s.BYTE;if(r===X0)return s.SHORT;if(r===ko)return s.UNSIGNED_SHORT;if(r===wd)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===aa)return s.FLOAT;if(r===Wo)return s.HALF_FLOAT;if(r===q0)return s.ALPHA;if(r===Y0)return s.RGB;if(r===yi)return s.RGBA;if(r===j0)return s.LUMINANCE;if(r===Z0)return s.LUMINANCE_ALPHA;if(r===Rs)return s.DEPTH_COMPONENT;if(r===Os)return s.DEPTH_STENCIL;if(r===K0)return s.RED;if(r===Ud)return s.RED_INTEGER;if(r===Q0)return s.RG;if(r===Nd)return s.RG_INTEGER;if(r===Od)return s.RGBA_INTEGER;if(r===Dc||r===Lc||r===Uc||r===Nc)if(h===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Dc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Dc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kh||r===Qh||r===Jh||r===$h)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Kh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===td||r===ed||r===nd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===td||r===ed)return h===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===nd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===gd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===id)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ad)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===od)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ld)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ud)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===md)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oc||r===_d||r===vd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Oc)return h===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_d)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===J0||r===xd||r===yd||r===Sd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Oc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===xd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ns?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const VA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
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

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Pn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ua({vertexShader:VA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fi(new qc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends Dr{constructor(t,i){super();const r=this;let l=null,c=1,h=null,f="local-floor",m=1,p=null,g=null,v=null,_=null,S=null,E=null;const T=new XA,y=i.getContextAttributes();let x=null,O=null;const L=[],w=[],B=new qt;let H=null;const z=new ui;z.viewport=new Qe;const k=new ui;k.viewport=new Qe;const D=[z,k],R=new uM;let U=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let pt=L[$];return pt===void 0&&(pt=new Eh,L[$]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function($){let pt=L[$];return pt===void 0&&(pt=new Eh,L[$]=pt),pt.getGripSpace()},this.getHand=function($){let pt=L[$];return pt===void 0&&(pt=new Eh,L[$]=pt),pt.getHandSpace()};function Y($){const pt=w.indexOf($.inputSource);if(pt===-1)return;const yt=L[pt];yt!==void 0&&(yt.update($.inputSource,$.frame,p||h),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function et(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",et),l.removeEventListener("inputsourceschange",ct);for(let $=0;$<L.length;$++){const pt=w[$];pt!==null&&(w[$]=null,L[$].disconnect(pt))}U=null,J=null,T.reset(),t.setRenderTarget(x),S=null,_=null,v=null,l=null,O=null,St.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",et),l.addEventListener("inputsourceschange",ct),y.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,bt=null,Dt=null;y.depth&&(Dt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=y.stencil?Os:Rs,bt=y.stencil?Ns:Rr);const ae={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};v=new XRWebGLBinding(l,i),_=v.createProjectionLayer(ae),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),O=new Cr(_.textureWidth,_.textureHeight,{format:yi,type:ca,depthTexture:new hv(_.textureWidth,_.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Cr(S.framebufferWidth,S.framebufferHeight,{format:yi,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(f),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ct($){for(let pt=0;pt<$.removed.length;pt++){const yt=$.removed[pt],bt=w.indexOf(yt);bt>=0&&(w[bt]=null,L[bt].disconnect(yt))}for(let pt=0;pt<$.added.length;pt++){const yt=$.added[pt];let bt=w.indexOf(yt);if(bt===-1){for(let ae=0;ae<L.length;ae++)if(ae>=w.length){w.push(yt),bt=ae;break}else if(w[ae]===null){w[ae]=yt,bt=ae;break}if(bt===-1)break}const Dt=L[bt];Dt&&Dt.connect(yt)}}const I=new K,q=new K;function X($,pt,yt){I.setFromMatrixPosition(pt.matrixWorld),q.setFromMatrixPosition(yt.matrixWorld);const bt=I.distanceTo(q),Dt=pt.projectionMatrix.elements,ae=yt.projectionMatrix.elements,Yt=Dt[14]/(Dt[10]-1),Ue=Dt[14]/(Dt[10]+1),we=(Dt[9]+1)/Dt[5],oe=(Dt[9]-1)/Dt[5],G=(Dt[8]-1)/Dt[0],An=(ae[8]+1)/ae[0],fe=Yt*G,ee=Yt*An,Bt=bt/(-G+An),Re=Bt*-G;if(pt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Re),$.translateZ(Bt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Dt[10]===-1)$.projectionMatrix.copy(pt.projectionMatrix),$.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Ft=Yt+Bt,P=Ue+Bt,A=fe-Re,at=ee+(bt-Re),xt=we*Ue/P*Ft,Mt=oe*Ue/P*Ft;$.projectionMatrix.makePerspective(A,at,xt,Mt,Ft,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function mt($,pt){pt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(pt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let pt=$.near,yt=$.far;T.texture!==null&&(T.depthNear>0&&(pt=T.depthNear),T.depthFar>0&&(yt=T.depthFar)),R.near=k.near=z.near=pt,R.far=k.far=z.far=yt,(U!==R.near||J!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,J=R.far),z.layers.mask=$.layers.mask|2,k.layers.mask=$.layers.mask|4,R.layers.mask=z.layers.mask|k.layers.mask;const bt=$.parent,Dt=R.cameras;mt(R,bt);for(let ae=0;ae<Dt.length;ae++)mt(Dt[ae],bt);Dt.length===2?X(R,z,k):R.projectionMatrix.copy(z.projectionMatrix),N($,R,bt)};function N($,pt,yt){yt===null?$.matrix.copy(pt.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(pt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(pt.projectionMatrix),$.projectionMatrixInverse.copy(pt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Md*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function($){m=$,_!==null&&(_.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let nt=null;function vt($,pt){if(g=pt.getViewerPose(p||h),E=pt,g!==null){const yt=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let bt=!1;yt.length!==R.cameras.length&&(R.cameras.length=0,bt=!0);for(let Yt=0;Yt<yt.length;Yt++){const Ue=yt[Yt];let we=null;if(S!==null)we=S.getViewport(Ue);else{const G=v.getViewSubImage(_,Ue);we=G.viewport,Yt===0&&(t.setRenderTargetTextures(O,G.colorTexture,_.ignoreDepthValues?void 0:G.depthStencilTexture),t.setRenderTarget(O))}let oe=D[Yt];oe===void 0&&(oe=new ui,oe.layers.enable(Yt),oe.viewport=new Qe,D[Yt]=oe),oe.matrix.fromArray(Ue.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ue.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(we.x,we.y,we.width,we.height),Yt===0&&(R.matrix.copy(oe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),bt===!0&&R.cameras.push(oe)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Yt=v.getDepthInformation(yt[0]);Yt&&Yt.isValid&&Yt.texture&&T.init(t,Yt,l.renderState)}}for(let yt=0;yt<L.length;yt++){const bt=w[yt],Dt=L[yt];bt!==null&&Dt!==void 0&&Dt.update(bt,pt,p||h)}nt&&nt($,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),E=null}const St=new mv;St.setAnimationLoop(vt),this.setAnimationLoop=function($){nt=$},this.dispose=function(){}}}const yr=new Di,qA=new Xe;function YA(s,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,ov(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,O,L,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),v(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x)):x.isMeshStandardMaterial?(c(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,w)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),T(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?m(y,x,O,L):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Xn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Xn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const O=t.get(x),L=O.envMap,w=O.envMapRotation;L&&(y.envMap.value=L,yr.copy(w),yr.x*=-1,yr.y*=-1,yr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),y.envMapRotation.value.setFromMatrix4(qA.makeRotationFromEuler(yr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,O,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*O,y.scale.value=L*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,O){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function T(y,x){const O=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function jA(s,t,i,r){let l={},c={},h=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,L){const w=L.program;r.uniformBlockBinding(O,w)}function p(O,L){let w=l[O.id];w===void 0&&(E(O),w=g(O),l[O.id]=w,O.addEventListener("dispose",y));const B=L.program;r.updateUBOMapping(O,B);const H=t.render.frame;c[O.id]!==H&&(_(O),c[O.id]=H)}function g(O){const L=v();O.__bindingPointIndex=L;const w=s.createBuffer(),B=O.__size,H=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,B,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,w),w}function v(){for(let O=0;O<f;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const L=l[O.id],w=O.uniforms,B=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let H=0,z=w.length;H<z;H++){const k=Array.isArray(w[H])?w[H]:[w[H]];for(let D=0,R=k.length;D<R;D++){const U=k[D];if(S(U,H,D,B)===!0){const J=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value];let et=0;for(let ct=0;ct<Y.length;ct++){const I=Y[ct],q=T(I);typeof I=="number"||typeof I=="boolean"?(U.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,J+et,U.__data)):I.isMatrix3?(U.__data[0]=I.elements[0],U.__data[1]=I.elements[1],U.__data[2]=I.elements[2],U.__data[3]=0,U.__data[4]=I.elements[3],U.__data[5]=I.elements[4],U.__data[6]=I.elements[5],U.__data[7]=0,U.__data[8]=I.elements[6],U.__data[9]=I.elements[7],U.__data[10]=I.elements[8],U.__data[11]=0):(I.toArray(U.__data,et),et+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(O,L,w,B){const H=O.value,z=L+"_"+w;if(B[z]===void 0)return typeof H=="number"||typeof H=="boolean"?B[z]=H:B[z]=H.clone(),!0;{const k=B[z];if(typeof H=="number"||typeof H=="boolean"){if(k!==H)return B[z]=H,!0}else if(k.equals(H)===!1)return k.copy(H),!0}return!1}function E(O){const L=O.uniforms;let w=0;const B=16;for(let z=0,k=L.length;z<k;z++){const D=Array.isArray(L[z])?L[z]:[L[z]];for(let R=0,U=D.length;R<U;R++){const J=D[R],Y=Array.isArray(J.value)?J.value:[J.value];for(let et=0,ct=Y.length;et<ct;et++){const I=Y[et],q=T(I),X=w%B,mt=X%q.boundary,N=X+mt;w+=mt,N!==0&&B-N<q.storage&&(w+=B-N),J.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=q.storage}}}const H=w%B;return H>0&&(w+=B-H),O.__size=w,O.__cache={},this}function T(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function y(O){const L=O.target;L.removeEventListener("dispose",y);const w=h.indexOf(L.__bindingPointIndex);h.splice(w,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const O in l)s.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}class ZA{constructor(t={}){const{canvas:i=MS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,x=null;const O=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=Za,this.toneMappingExposure=1;const w=this;let B=!1,H=0,z=0,k=null,D=-1,R=null;const U=new Qe,J=new Qe;let Y=null;const et=new de(0);let ct=0,I=i.width,q=i.height,X=1,mt=null,N=null;const nt=new Qe(0,0,I,q),vt=new Qe(0,0,I,q);let St=!1;const $=new zd;let pt=!1,yt=!1;this.transmissionResolutionScale=1;const bt=new Xe,Dt=new Xe,ae=new K,Yt=new Qe,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function oe(){return k===null?X:1}let G=r;function An(C,j){return i.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:c,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Cd}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),G===null){const j="webgl2";if(G=An(j,C),G===null)throw An(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let fe,ee,Bt,Re,Ft,P,A,at,xt,Mt,ht,It,At,Rt,ve,Tt,Ht,jt,Qt,Ot,ce,ne,Ne,W;function Lt(){fe=new rb(G),fe.init(),ne=new GA(G,fe),ee=new JT(G,fe,t,ne),Bt=new FA(G,fe),ee.reverseDepthBuffer&&_&&Bt.buffers.depth.setReversed(!0),Re=new lb(G),Ft=new AA,P=new HA(G,fe,Bt,Ft,ee,ne,Re),A=new tb(w),at=new ab(w),xt=new pM(G),Ne=new KT(G,xt),Mt=new sb(G,xt,Re,Ne),ht=new ub(G,Mt,xt,Re),Qt=new cb(G,ee,P),Tt=new $T(Ft),It=new bA(w,A,at,fe,ee,Ne,Tt),At=new YA(w,Ft),Rt=new CA,ve=new OA(fe),jt=new ZT(w,A,at,Bt,ht,S,m),Ht=new zA(w,ht,ee),W=new jA(G,Re,ee,Bt),Ot=new QT(G,fe,Re),ce=new ob(G,fe,Re),Re.programs=It.programs,w.capabilities=ee,w.extensions=fe,w.properties=Ft,w.renderLists=Rt,w.shadowMap=Ht,w.state=Bt,w.info=Re}Lt();const ut=new WA(w,G);this.xr=ut,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(I,q,!1))},this.getSize=function(C){return C.set(I,q)},this.setSize=function(C,j,st=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,q=j,i.width=Math.floor(C*X),i.height=Math.floor(j*X),st===!0&&(i.style.width=C+"px",i.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(I*X,q*X).floor()},this.setDrawingBufferSize=function(C,j,st){I=C,q=j,X=st,i.width=Math.floor(C*st),i.height=Math.floor(j*st),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,j,st,lt){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,j,st,lt),Bt.viewport(U.copy(nt).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(vt)},this.setScissor=function(C,j,st,lt){C.isVector4?vt.set(C.x,C.y,C.z,C.w):vt.set(C,j,st,lt),Bt.scissor(J.copy(vt).multiplyScalar(X).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(C){Bt.setScissorTest(St=C)},this.setOpaqueSort=function(C){mt=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,st=!0){let lt=0;if(C){let Q=!1;if(k!==null){const Et=k.texture.format;Q=Et===Od||Et===Nd||Et===Ud}if(Q){const Et=k.texture.type,Ct=Et===ca||Et===Rr||Et===ko||Et===Ns||Et===Dd||Et===Ld,Ut=jt.getClearColor(),zt=jt.getClearAlpha(),$t=Ut.r,Zt=Ut.g,kt=Ut.b;Ct?(E[0]=$t,E[1]=Zt,E[2]=kt,E[3]=zt,G.clearBufferuiv(G.COLOR,0,E)):(T[0]=$t,T[1]=Zt,T[2]=kt,T[3]=zt,G.clearBufferiv(G.COLOR,0,T))}else lt|=G.COLOR_BUFFER_BIT}j&&(lt|=G.DEPTH_BUFFER_BIT),st&&(lt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),jt.dispose(),Rt.dispose(),ve.dispose(),Ft.dispose(),A.dispose(),at.dispose(),ht.dispose(),Ne.dispose(),W.dispose(),It.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",sn),ut.removeEventListener("sessionend",yn),In.stop()};function gt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const C=Re.autoReset,j=Ht.enabled,st=Ht.autoUpdate,lt=Ht.needsUpdate,Q=Ht.type;Lt(),Re.autoReset=C,Ht.enabled=j,Ht.autoUpdate=st,Ht.needsUpdate=lt,Ht.type=Q}function Nt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ie(C){const j=C.target;j.removeEventListener("dispose",ie),Ge(j)}function Ge(C){tn(C),Ft.remove(C)}function tn(C){const j=Ft.get(C).programs;j!==void 0&&(j.forEach(function(st){It.releaseProgram(st)}),C.isShaderMaterial&&It.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,st,lt,Q,Et){j===null&&(j=Ue);const Ct=Q.isMesh&&Q.matrixWorld.determinant()<0,Ut=Ja(C,j,st,lt,Q);Bt.setMaterial(lt,Ct);let zt=st.index,$t=1;if(lt.wireframe===!0){if(zt=Mt.getWireframeAttribute(st),zt===void 0)return;$t=2}const Zt=st.drawRange,kt=st.attributes.position;let pe=Zt.start*$t,Te=(Zt.start+Zt.count)*$t;Et!==null&&(pe=Math.max(pe,Et.start*$t),Te=Math.min(Te,(Et.start+Et.count)*$t)),zt!==null?(pe=Math.max(pe,0),Te=Math.min(Te,zt.count)):kt!=null&&(pe=Math.max(pe,0),Te=Math.min(Te,kt.count));const qe=Te-pe;if(qe<0||qe===1/0)return;Ne.setup(Q,lt,Ut,st,zt);let xe,ye=Ot;if(zt!==null&&(xe=xt.get(zt),ye=ce,ye.setIndex(xe)),Q.isMesh)lt.wireframe===!0?(Bt.setLineWidth(lt.wireframeLinewidth*oe()),ye.setMode(G.LINES)):ye.setMode(G.TRIANGLES);else if(Q.isLine){let Xt=lt.linewidth;Xt===void 0&&(Xt=1),Bt.setLineWidth(Xt*oe()),Q.isLineSegments?ye.setMode(G.LINES):Q.isLineLoop?ye.setMode(G.LINE_LOOP):ye.setMode(G.LINE_STRIP)}else Q.isPoints?ye.setMode(G.POINTS):Q.isSprite&&ye.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Sr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))ye.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Xt=Q._multiDrawStarts,je=Q._multiDrawCounts,Me=Q._multiDrawCount,Rn=zt?xt.get(zt).bytesPerElement:1,pa=Ft.get(lt).currentProgram.getUniforms();for(let Ve=0;Ve<Me;Ve++)pa.setValue(G,"_gl_DrawID",Ve),ye.render(Xt[Ve]/Rn,je[Ve])}else if(Q.isInstancedMesh)ye.renderInstances(pe,qe,Q.count);else if(st.isInstancedBufferGeometry){const Xt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,je=Math.min(st.instanceCount,Xt);ye.renderInstances(pe,qe,je)}else ye.render(pe,qe)};function Ee(C,j,st){C.transparent===!0&&C.side===Ci&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,ha(C,j,st),C.side=la,C.needsUpdate=!0,ha(C,j,st),C.side=Ci):ha(C,j,st)}this.compile=function(C,j,st=null){st===null&&(st=C),x=ve.get(st),x.init(j),L.push(x),st.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),C!==st&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const lt=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Et=Q.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){const Ut=Et[Ct];Ee(Ut,st,Q),lt.add(Ut)}else Ee(Et,st,Q),lt.add(Et)}),x=L.pop(),lt},this.compileAsync=function(C,j,st=null){const lt=this.compile(C,j,st);return new Promise(Q=>{function Et(){if(lt.forEach(function(Ct){Ft.get(Ct).currentProgram.isReady()&&lt.delete(Ct)}),lt.size===0){Q(C);return}setTimeout(Et,10)}fe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Wn=null;function dn(C){Wn&&Wn(C)}function sn(){In.stop()}function yn(){In.start()}const In=new mv;In.setAnimationLoop(dn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(C){Wn=C,ut.setAnimationLoop(C),C===null?In.stop():In.start()},ut.addEventListener("sessionstart",sn),ut.addEventListener("sessionend",yn),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(j),j=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,j,k),x=ve.get(C,L.length),x.init(j),L.push(x),Dt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),$.setFromProjectionMatrix(Dt),yt=this.localClippingEnabled,pt=Tt.init(this.clippingPlanes,yt),y=Rt.get(C,O.length),y.init(),O.push(y),ut.enabled===!0&&ut.isPresenting===!0){const Et=w.xr.getDepthSensingMesh();Et!==null&&Ka(Et,j,-1/0,w.sortObjects)}Ka(C,j,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(mt,N),we=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,we&&jt.addToRenderList(y,C),this.info.render.frame++,pt===!0&&Tt.beginShadows();const st=x.state.shadowsArray;Ht.render(st,C,j),pt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,Q=y.transmissive;if(x.setupLights(),j.isArrayCamera){const Et=j.cameras;if(Q.length>0)for(let Ct=0,Ut=Et.length;Ct<Ut;Ct++){const zt=Et[Ct];Ko(lt,Q,C,zt)}we&&jt.render(C);for(let Ct=0,Ut=Et.length;Ct<Ut;Ct++){const zt=Et[Ct];Zo(y,C,zt,zt.viewport)}}else Q.length>0&&Ko(lt,Q,C,j),we&&jt.render(C),Zo(y,C,j);k!==null&&z===0&&(P.updateMultisampleRenderTarget(k),P.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(w,C,j),Ne.resetDefaultState(),D=-1,R=null,L.pop(),L.length>0?(x=L[L.length-1],pt===!0&&Tt.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Ka(C,j,st,lt){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){lt&&Yt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Dt);const Ct=ht.update(C),Ut=C.material;Ut.visible&&y.push(C,Ct,Ut,st,Yt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){const Ct=ht.update(C),Ut=C.material;if(lt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Yt.copy(C.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Yt.copy(Ct.boundingSphere.center)),Yt.applyMatrix4(C.matrixWorld).applyMatrix4(Dt)),Array.isArray(Ut)){const zt=Ct.groups;for(let $t=0,Zt=zt.length;$t<Zt;$t++){const kt=zt[$t],pe=Ut[kt.materialIndex];pe&&pe.visible&&y.push(C,Ct,pe,st,Yt.z,kt)}}else Ut.visible&&y.push(C,Ct,Ut,st,Yt.z,null)}}const Et=C.children;for(let Ct=0,Ut=Et.length;Ct<Ut;Ct++)Ka(Et[Ct],j,st,lt)}function Zo(C,j,st,lt){const Q=C.opaque,Et=C.transmissive,Ct=C.transparent;x.setupLightsView(st),pt===!0&&Tt.setGlobalState(w.clippingPlanes,st),lt&&Bt.viewport(U.copy(lt)),Q.length>0&&Qa(Q,j,st),Et.length>0&&Qa(Et,j,st),Ct.length>0&&Qa(Ct,j,st),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Ko(C,j,st,lt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[lt.id]===void 0&&(x.state.transmissionRenderTarget[lt.id]=new Cr(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?Wo:ca,minFilter:Ar,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Et=x.state.transmissionRenderTarget[lt.id],Ct=lt.viewport||U;Et.setSize(Ct.z*w.transmissionResolutionScale,Ct.w*w.transmissionResolutionScale);const Ut=w.getRenderTarget();w.setRenderTarget(Et),w.getClearColor(et),ct=w.getClearAlpha(),ct<1&&w.setClearColor(16777215,.5),w.clear(),we&&jt.render(st);const zt=w.toneMapping;w.toneMapping=Za;const $t=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),x.setupLightsView(lt),pt===!0&&Tt.setGlobalState(w.clippingPlanes,lt),Qa(C,st,lt),P.updateMultisampleRenderTarget(Et),P.updateRenderTargetMipmap(Et),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let kt=0,pe=j.length;kt<pe;kt++){const Te=j[kt],qe=Te.object,xe=Te.geometry,ye=Te.material,Xt=Te.group;if(ye.side===Ci&&qe.layers.test(lt.layers)){const je=ye.side;ye.side=Xn,ye.needsUpdate=!0,fa(qe,st,lt,xe,ye,Xt),ye.side=je,ye.needsUpdate=!0,Zt=!0}}Zt===!0&&(P.updateMultisampleRenderTarget(Et),P.updateRenderTargetMipmap(Et))}w.setRenderTarget(Ut),w.setClearColor(et,ct),$t!==void 0&&(lt.viewport=$t),w.toneMapping=zt}function Qa(C,j,st){const lt=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Et=C.length;Q<Et;Q++){const Ct=C[Q],Ut=Ct.object,zt=Ct.geometry,$t=lt===null?Ct.material:lt,Zt=Ct.group;Ut.layers.test(st.layers)&&fa(Ut,j,st,zt,$t,Zt)}}function fa(C,j,st,lt,Q,Et){C.onBeforeRender(w,j,st,lt,Q,Et),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(w,j,st,lt,C,Et),Q.transparent===!0&&Q.side===Ci&&Q.forceSinglePass===!1?(Q.side=Xn,Q.needsUpdate=!0,w.renderBufferDirect(st,j,lt,Q,C,Et),Q.side=la,Q.needsUpdate=!0,w.renderBufferDirect(st,j,lt,Q,C,Et),Q.side=Ci):w.renderBufferDirect(st,j,lt,Q,C,Et),C.onAfterRender(w,j,st,lt,Q,Et)}function ha(C,j,st){j.isScene!==!0&&(j=Ue);const lt=Ft.get(C),Q=x.state.lights,Et=x.state.shadowsArray,Ct=Q.state.version,Ut=It.getParameters(C,Q.state,Et,j,st),zt=It.getProgramCacheKey(Ut);let $t=lt.programs;lt.environment=C.isMeshStandardMaterial?j.environment:null,lt.fog=j.fog,lt.envMap=(C.isMeshStandardMaterial?at:A).get(C.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",ie),$t=new Map,lt.programs=$t);let Zt=$t.get(zt);if(Zt!==void 0){if(lt.currentProgram===Zt&&lt.lightsStateVersion===Ct)return Ni(C,Ut),Zt}else Ut.uniforms=It.getUniforms(C),C.onBeforeCompile(Ut,w),Zt=It.acquireProgram(Ut,zt),$t.set(zt,Zt),lt.uniforms=Ut.uniforms;const kt=lt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=Tt.uniform),Ni(C,Ut),lt.needsLights=en(C),lt.lightsStateVersion=Ct,lt.needsLights&&(kt.ambientLightColor.value=Q.state.ambient,kt.lightProbe.value=Q.state.probe,kt.directionalLights.value=Q.state.directional,kt.directionalLightShadows.value=Q.state.directionalShadow,kt.spotLights.value=Q.state.spot,kt.spotLightShadows.value=Q.state.spotShadow,kt.rectAreaLights.value=Q.state.rectArea,kt.ltc_1.value=Q.state.rectAreaLTC1,kt.ltc_2.value=Q.state.rectAreaLTC2,kt.pointLights.value=Q.state.point,kt.pointLightShadows.value=Q.state.pointShadow,kt.hemisphereLights.value=Q.state.hemi,kt.directionalShadowMap.value=Q.state.directionalShadowMap,kt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,kt.spotShadowMap.value=Q.state.spotShadowMap,kt.spotLightMatrix.value=Q.state.spotLightMatrix,kt.spotLightMap.value=Q.state.spotLightMap,kt.pointShadowMap.value=Q.state.pointShadowMap,kt.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=Zt,lt.uniformsList=null,Zt}function Ui(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Ic.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Ni(C,j){const st=Ft.get(C);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function Ja(C,j,st,lt,Q){j.isScene!==!0&&(j=Ue),P.resetTextureUnits();const Et=j.fog,Ct=lt.isMeshStandardMaterial?j.environment:null,Ut=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ps,zt=(lt.isMeshStandardMaterial?at:A).get(lt.envMap||Ct),$t=lt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Zt=!!st.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),kt=!!st.morphAttributes.position,pe=!!st.morphAttributes.normal,Te=!!st.morphAttributes.color;let qe=Za;lt.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(qe=w.toneMapping);const xe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ye=xe!==void 0?xe.length:0,Xt=Ft.get(lt),je=x.state.lights;if(pt===!0&&(yt===!0||C!==R)){const pn=C===R&&lt.id===D;Tt.setState(lt,C,pn)}let Me=!1;lt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==je.state.version||Xt.outputColorSpace!==Ut||Q.isBatchedMesh&&Xt.batching===!1||!Q.isBatchedMesh&&Xt.batching===!0||Q.isBatchedMesh&&Xt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Xt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Xt.instancing===!1||!Q.isInstancedMesh&&Xt.instancing===!0||Q.isSkinnedMesh&&Xt.skinning===!1||!Q.isSkinnedMesh&&Xt.skinning===!0||Q.isInstancedMesh&&Xt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xt.instancingMorph===!1&&Q.morphTexture!==null||Xt.envMap!==zt||lt.fog===!0&&Xt.fog!==Et||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Tt.numPlanes||Xt.numIntersection!==Tt.numIntersection)||Xt.vertexAlphas!==$t||Xt.vertexTangents!==Zt||Xt.morphTargets!==kt||Xt.morphNormals!==pe||Xt.morphColors!==Te||Xt.toneMapping!==qe||Xt.morphTargetsCount!==ye)&&(Me=!0):(Me=!0,Xt.__version=lt.version);let Rn=Xt.currentProgram;Me===!0&&(Rn=ha(lt,j,Q));let pa=!1,Ve=!1,Pi=!1;const Fe=Rn.getUniforms(),Cn=Xt.uniforms;if(Bt.useProgram(Rn.program)&&(pa=!0,Ve=!0,Pi=!0),lt.id!==D&&(D=lt.id,Ve=!0),pa||R!==C){Bt.buffers.depth.getReversed()?(bt.copy(C.projectionMatrix),TS(bt),bS(bt),Fe.setValue(G,"projectionMatrix",bt)):Fe.setValue(G,"projectionMatrix",C.projectionMatrix),Fe.setValue(G,"viewMatrix",C.matrixWorldInverse);const Sn=Fe.map.cameraPosition;Sn!==void 0&&Sn.setValue(G,ae.setFromMatrixPosition(C.matrixWorld)),ee.logarithmicDepthBuffer&&Fe.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Fe.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Ve=!0,Pi=!0)}if(Q.isSkinnedMesh){Fe.setOptional(G,Q,"bindMatrix"),Fe.setOptional(G,Q,"bindMatrixInverse");const pn=Q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Fe.setValue(G,"boneTexture",pn.boneTexture,P))}Q.isBatchedMesh&&(Fe.setOptional(G,Q,"batchingTexture"),Fe.setValue(G,"batchingTexture",Q._matricesTexture,P),Fe.setOptional(G,Q,"batchingIdTexture"),Fe.setValue(G,"batchingIdTexture",Q._indirectTexture,P),Fe.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Fe.setValue(G,"batchingColorTexture",Q._colorsTexture,P));const on=st.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Qt.update(Q,st,Rn),(Ve||Xt.receiveShadow!==Q.receiveShadow)&&(Xt.receiveShadow=Q.receiveShadow,Fe.setValue(G,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Cn.envMap.value=zt,Cn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&j.environment!==null&&(Cn.envMapIntensity.value=j.environmentIntensity),Ve&&(Fe.setValue(G,"toneMappingExposure",w.toneMappingExposure),Xt.needsLights&&da(Cn,Pi),Et&&lt.fog===!0&&At.refreshFogUniforms(Cn,Et),At.refreshMaterialUniforms(Cn,lt,X,q,x.state.transmissionRenderTarget[C.id]),Ic.upload(G,Ui(Xt),Cn,P)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Ic.upload(G,Ui(Xt),Cn,P),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Fe.setValue(G,"center",Q.center),Fe.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Fe.setValue(G,"normalMatrix",Q.normalMatrix),Fe.setValue(G,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const pn=lt.uniformsGroups;for(let Sn=0,Si=pn.length;Sn<Si;Sn++){const Ii=pn[Sn];W.update(Ii,Rn),W.bind(Ii,Rn)}}return Rn}function da(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function en(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,j,st){Ft.get(C.texture).__webglTexture=j,Ft.get(C.depthTexture).__webglTexture=st;const lt=Ft.get(C);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=st===void 0,lt.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const st=Ft.get(C);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0};const Qo=G.createFramebuffer();this.setRenderTarget=function(C,j=0,st=0){k=C,H=j,z=st;let lt=!0,Q=null,Et=!1,Ct=!1;if(C){const zt=Ft.get(C);if(zt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(G.FRAMEBUFFER,null),lt=!1;else if(zt.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(zt.__hasExternalTextures)P.rebindTextures(C,Ft.get(C.texture).__webglTexture,Ft.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const kt=C.depthTexture;if(zt.__boundDepthTexture!==kt){if(kt!==null&&Ft.has(kt)&&(C.width!==kt.image.width||C.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const $t=C.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);const Zt=Ft.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Zt[j])?Q=Zt[j][st]:Q=Zt[j],Et=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?Q=Ft.get(C).__webglMultisampledFramebuffer:Array.isArray(Zt)?Q=Zt[st]:Q=Zt,U.copy(C.viewport),J.copy(C.scissor),Y=C.scissorTest}else U.copy(nt).multiplyScalar(X).floor(),J.copy(vt).multiplyScalar(X).floor(),Y=St;if(st!==0&&(Q=Qo),Bt.bindFramebuffer(G.FRAMEBUFFER,Q)&&lt&&Bt.drawBuffers(C,Q),Bt.viewport(U),Bt.scissor(J),Bt.setScissorTest(Y),Et){const zt=Ft.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,zt.__webglTexture,st)}else if(Ct){const zt=Ft.get(C.texture),$t=j;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,zt.__webglTexture,st,$t)}else if(C!==null&&st!==0){const zt=Ft.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zt.__webglTexture,st)}D=-1},this.readRenderTargetPixels=function(C,j,st,lt,Q,Et,Ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){Bt.bindFramebuffer(G.FRAMEBUFFER,Ut);try{const zt=C.texture,$t=zt.format,Zt=zt.type;if(!ee.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-lt&&st>=0&&st<=C.height-Q&&G.readPixels(j,st,lt,Q,ne.convert($t),ne.convert(Zt),Et)}finally{const zt=k!==null?Ft.get(k).__webglFramebuffer:null;Bt.bindFramebuffer(G.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(C,j,st,lt,Q,Et,Ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){const zt=C.texture,$t=zt.format,Zt=zt.type;if(!ee.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-lt&&st>=0&&st<=C.height-Q){Bt.bindFramebuffer(G.FRAMEBUFFER,Ut);const kt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,kt),G.bufferData(G.PIXEL_PACK_BUFFER,Et.byteLength,G.STREAM_READ),G.readPixels(j,st,lt,Q,ne.convert($t),ne.convert(Zt),0);const pe=k!==null?Ft.get(k).__webglFramebuffer:null;Bt.bindFramebuffer(G.FRAMEBUFFER,pe);const Te=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ES(G,Te,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,kt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Et),G.deleteBuffer(kt),G.deleteSync(Te),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,st=0){C.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const lt=Math.pow(2,-st),Q=Math.floor(C.image.width*lt),Et=Math.floor(C.image.height*lt),Ct=j!==null?j.x:0,Ut=j!==null?j.y:0;P.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Ct,Ut,Q,Et),Bt.unbindTexture()};const Jo=G.createFramebuffer(),Oi=G.createFramebuffer();this.copyTextureToTexture=function(C,j,st=null,lt=null,Q=0,Et=null){C.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,C=arguments[1],j=arguments[2],Et=arguments[3]||0,st=null),Et===null&&(Q!==0?(Sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Q,Q=0):Et=0);let Ct,Ut,zt,$t,Zt,kt,pe,Te,qe;const xe=C.isCompressedTexture?C.mipmaps[Et]:C.image;if(st!==null)Ct=st.max.x-st.min.x,Ut=st.max.y-st.min.y,zt=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,Zt=st.min.y,kt=st.isBox3?st.min.z:0;else{const on=Math.pow(2,-Q);Ct=Math.floor(xe.width*on),Ut=Math.floor(xe.height*on),C.isDataArrayTexture?zt=xe.depth:C.isData3DTexture?zt=Math.floor(xe.depth*on):zt=1,$t=0,Zt=0,kt=0}lt!==null?(pe=lt.x,Te=lt.y,qe=lt.z):(pe=0,Te=0,qe=0);const ye=ne.convert(j.format),Xt=ne.convert(j.type);let je;j.isData3DTexture?(P.setTexture3D(j,0),je=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(P.setTexture2DArray(j,0),je=G.TEXTURE_2D_ARRAY):(P.setTexture2D(j,0),je=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const Me=G.getParameter(G.UNPACK_ROW_LENGTH),Rn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),pa=G.getParameter(G.UNPACK_SKIP_PIXELS),Ve=G.getParameter(G.UNPACK_SKIP_ROWS),Pi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,xe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,$t),G.pixelStorei(G.UNPACK_SKIP_ROWS,Zt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,kt);const Fe=C.isDataArrayTexture||C.isData3DTexture,Cn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const on=Ft.get(C),pn=Ft.get(j),Sn=Ft.get(on.__renderTarget),Si=Ft.get(pn.__renderTarget);Bt.bindFramebuffer(G.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Bt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Ii=0;Ii<zt;Ii++)Fe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(C).__webglTexture,Q,kt+Ii),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(j).__webglTexture,Et,qe+Ii)),G.blitFramebuffer($t,Zt,Ct,Ut,pe,Te,Ct,Ut,G.DEPTH_BUFFER_BIT,G.NEAREST);Bt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Ft.has(C)){const on=Ft.get(C),pn=Ft.get(j);Bt.bindFramebuffer(G.READ_FRAMEBUFFER,Jo),Bt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Oi);for(let Sn=0;Sn<zt;Sn++)Fe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,on.__webglTexture,Q,kt+Sn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,on.__webglTexture,Q),Cn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,Et,qe+Sn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,Et),Q!==0?G.blitFramebuffer($t,Zt,Ct,Ut,pe,Te,Ct,Ut,G.COLOR_BUFFER_BIT,G.NEAREST):Cn?G.copyTexSubImage3D(je,Et,pe,Te,qe+Sn,$t,Zt,Ct,Ut):G.copyTexSubImage2D(je,Et,pe,Te,$t,Zt,Ct,Ut);Bt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Cn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(je,Et,pe,Te,qe,Ct,Ut,zt,ye,Xt,xe.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(je,Et,pe,Te,qe,Ct,Ut,zt,ye,xe.data):G.texSubImage3D(je,Et,pe,Te,qe,Ct,Ut,zt,ye,Xt,xe):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Et,pe,Te,Ct,Ut,ye,Xt,xe.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Et,pe,Te,xe.width,xe.height,ye,xe.data):G.texSubImage2D(G.TEXTURE_2D,Et,pe,Te,Ct,Ut,ye,Xt,xe);G.pixelStorei(G.UNPACK_ROW_LENGTH,Me),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Rn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,pa),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ve),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Pi),Et===0&&j.generateMipmaps&&G.generateMipmap(je),Bt.unbindTexture()},this.copyTextureToTexture3D=function(C,j,st=null,lt=null,Q=0){return C.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,lt=arguments[1]||null,C=arguments[2],j=arguments[3],Q=arguments[4]||0),Sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,st,lt,Q)},this.initRenderTarget=function(C){Ft.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Bt.unbindTexture()},this.resetState=function(){H=0,z=0,k=null,Bt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const A0={type:"change"},Fd={type:"start"},yv={type:"end"},Cc=new zs,R0=new Xa,KA=Math.cos(70*SS.DEG2RAD),un=new K,Vn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nh=1e-6;class QA extends hM{constructor(t,i=null){super(t,i),this.state=Be.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bs.ROTATE,MIDDLE:bs.DOLLY,RIGHT:bs.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new wr,this._lastTargetPosition=new K,this._quat=new wr().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new t0,this._sphericalDelta=new t0,this._scale=1,this._panOffset=new K,this._rotateStart=new qt,this._rotateEnd=new qt,this._rotateDelta=new qt,this._panStart=new qt,this._panEnd=new qt,this._panDelta=new qt,this._dollyStart=new qt,this._dollyEnd=new qt,this._dollyDelta=new qt,this._dollyDirection=new K,this._mouse=new qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$A.bind(this),this._onPointerDown=JA.bind(this),this._onPointerUp=t1.bind(this),this._onContextMenu=o1.bind(this),this._onMouseWheel=i1.bind(this),this._onKeyDown=a1.bind(this),this._onTouchStart=r1.bind(this),this._onTouchMove=s1.bind(this),this._onMouseDown=e1.bind(this),this._onMouseMove=n1.bind(this),this._interceptControlDown=l1.bind(this),this._interceptControlUp=c1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(A0),this.update(),this.state=Be.NONE}update(t=null){const i=this.object.position;un.copy(i).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Vn:r>Math.PI&&(r-=Vn),l<-Math.PI?l+=Vn:l>Math.PI&&(l-=Vn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),i.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const f=un.length();h=this._clampDistance(f*this._scale);const m=f-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const f=new K(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),h=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Cc.origin.copy(this.object.position),Cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cc.direction))<KA?this.object.lookAt(this.target):(R0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cc.intersectPlane(R0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nh||this._lastTargetPosition.distanceToSquared(this.target)>Nh?(this.dispatchEvent(A0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){un.setFromMatrixColumn(i,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,i){this.screenSpacePanning===!0?un.setFromMatrixColumn(i,1):(un.setFromMatrixColumn(i,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;un.copy(l).sub(this.target);let c=un.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,h=r.width,f=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,f=(t.pageY+i.y)*.5;this._updateZoomParameters(h,f)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new qt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function JA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function $A(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function t1(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yv),this.state=Be.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function e1(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Be.DOLLY;break;case bs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Be.ROTATE}break;case bs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(Fd)}function n1(s){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function i1(s){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(s.preventDefault(),this.dispatchEvent(Fd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(yv))}function a1(s){this.enabled!==!1&&this._handleKeyDown(s)}function r1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Be.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Be.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(Fd)}function s1(s){switch(this._trackPointer(s),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Be.NONE}}function o1(s){this.enabled!==!1&&s.preventDefault()}function l1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function c1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const C0=0,w0=1,D0=2,L0=3,U0=4,N0=5,Oh=0,u1=1,f1=2,h1=3,d1=4,p1=5,O0=6,qa="16",ws="24",wc=ei,Vc=new K,kc=new K;class m1 extends fv{constructor(t,i){super(t,i),this.isConditionalLine=!0}}function g1(s){for(let t=0,i=s.length;t<i;t++){const r=s[t],l=r.vertices,c=l[0],h=l[1],f=l[2];Vc.subVectors(h,c),kc.subVectors(f,h),r.faceNormal=new K().crossVectors(Vc,kc).normalize()}}const P0=new zs;function _1(s,t,i=!1){const r=100.00000001000001;function l(_){const S=~~(_.x*r),E=~~(_.y*r),T=~~(_.z*r);return`${S},${E},${T}`}function c(_,S){return`${l(_)}_${l(S)}`}function h(_,S,E){E.direction.subVectors(S,_).normalize();const T=_.dot(E.direction);return E.origin.copy(_).addScaledVector(E.direction,-T),E}function f(_){return c(_.origin,_.direction)}const m=new Set,p=new Map,g={},v=[];for(let _=0,S=t.length;_<S;_++){const T=t[_].vertices,y=T[0],x=T[1];if(m.add(c(y,x)),m.add(c(x,y)),i){const O=h(y,x,new zs),L=f(O);if(!p.has(L)){h(x,y,O);const z=f(O),k={ray:O,distances:[]};p.set(L,k),p.set(z,k)}const w=p.get(L);let B=w.ray.direction.dot(y),H=w.ray.direction.dot(x);B>H&&([B,H]=[H,B]),w.distances.push(B,H)}}for(let _=0,S=s.length;_<S;_++){const E=s[_],T=E.vertices,y=T.length;for(let x=0;x<y;x++){const O=x,L=(x+1)%y,w=T[O],B=T[L],H=c(w,B);if(m.has(H))continue;if(i){h(w,B,P0);const k=f(P0);if(p.has(k)){const D=p.get(k),{ray:R,distances:U}=D;let J=R.direction.dot(w),Y=R.direction.dot(B);J>Y&&([J,Y]=[Y,J]);let et=!1;for(let ct=0,I=U.length;ct<I;ct+=2)if(J>=U[ct]&&Y<=U[ct+1]){et=!0;break}if(et)continue}}const z={index:O,tri:E};g[H]=z}}for(;;){let _=null;for(const E in g){_=g[E];break}if(_===null)break;const S=[_];for(;S.length>0;){const E=S.pop().tri,T=E.vertices,y=E.normals,x=E.faceNormal,O=T.length;for(let L=0;L<O;L++){const w=L,B=(L+1)%O,H=T[w],z=T[B],k=c(H,z);delete g[k];const D=c(z,H),R=g[D];if(R){const U=R.tri,J=R.index,Y=U.normals,et=Y.length,ct=U.faceNormal;if(Math.abs(U.faceNormal.dot(E.faceNormal))<.25)continue;D in g&&(S.push(R),delete g[D]);const I=(J+1)%et;y[w]&&Y[I]&&y[w]!==Y[I]&&(Y[I].norm.add(y[w].norm),y[w].norm=Y[I].norm);let q=y[w]||Y[I];q===null&&(q={norm:new K},v.push(q.norm)),y[w]===null&&(y[w]=q,q.norm.add(x)),Y[I]===null&&(Y[I]=q,q.norm.add(ct)),y[B]&&Y[J]&&y[B]!==Y[J]&&(Y[J].norm.add(y[B].norm),y[B].norm=Y[J].norm);let X=y[B]||Y[J];X===null&&(X={norm:new K},v.push(X.norm)),y[B]===null&&(y[B]=X,X.norm.add(x)),Y[J]===null&&(Y[J]=X,X.norm.add(ct))}}}}for(let _=0,S=v.length;_<S;_++)v[_].normalize()}function I0(s){return s==="Part"||s==="Unofficial_Part"}function v1(s){return/primitive/i.test(s)||s==="Subpart"}class Ms{constructor(t,i){this.line=t,this.lineLength=t.length,this.currentCharIndex=0,this.currentChar=" ",this.lineNumber=i}seekNonSpace(){for(;this.currentCharIndex<this.lineLength;){if(this.currentChar=this.line.charAt(this.currentCharIndex),this.currentChar!==" "&&this.currentChar!=="	")return;this.currentCharIndex++}}getToken(){const t=this.currentCharIndex++;for(;this.currentCharIndex<this.lineLength&&(this.currentChar=this.line.charAt(this.currentCharIndex),!(this.currentChar===" "||this.currentChar==="	"));)this.currentCharIndex++;const i=this.currentCharIndex;return this.seekNonSpace(),this.line.substring(t,i)}getVector(){return new K(parseFloat(this.getToken()),parseFloat(this.getToken()),parseFloat(this.getToken()))}getRemainingString(){return this.line.substring(this.currentCharIndex,this.lineLength)}isAtTheEnd(){return this.currentCharIndex>=this.lineLength}setToEnd(){this.currentCharIndex=this.lineLength}getLineNumberString(){return this.lineNumber>=0?" at line "+this.lineNumber:""}}class x1{constructor(t){this.loader=t,this._cache={}}cloneResult(t){const i={};return i.faces=t.faces.map(r=>({colorCode:r.colorCode,material:r.material,vertices:r.vertices.map(l=>l.clone()),normals:r.normals.map(()=>null),faceNormal:null})),i.conditionalSegments=t.conditionalSegments.map(r=>({colorCode:r.colorCode,material:r.material,vertices:r.vertices.map(l=>l.clone()),controlPoints:r.controlPoints.map(l=>l.clone())})),i.lineSegments=t.lineSegments.map(r=>({colorCode:r.colorCode,material:r.material,vertices:r.vertices.map(l=>l.clone())})),i.type=t.type,i.category=t.category,i.keywords=t.keywords,i.author=t.author,i.subobjects=t.subobjects,i.fileName=t.fileName,i.totalFaces=t.totalFaces,i.startingBuildingStep=t.startingBuildingStep,i.materials=t.materials,i.group=null,i}async fetchData(t){let i=!1,r=Oh;for(;r!==O0;){let l=t;switch(r){case h1:r=r+1;break;case Oh:l="parts/"+l,r=r+1;break;case u1:l="p/"+l,r=r+1;break;case f1:l="models/"+l,r=r+1;break;case d1:l=t.substring(0,t.lastIndexOf("/")+1)+l,r=r+1;break;case p1:i?r=O0:(t=t.toLowerCase(),l=t,i=!0,r=Oh);break}const c=this.loader,h=new Td(c.manager);h.setPath(c.partsLibraryPath),h.setRequestHeader(c.requestHeader),h.setWithCredentials(c.withCredentials);try{return await h.loadAsync(l)}catch{continue}}throw new Error('LDrawLoader: Subobject "'+t+'" could not be loaded.')}parse(t,i=null){const r=this.loader,l=[],c=[],h=[],f=[],m={},p=D=>m[D]||null;let g="Model",v=null,_=null,S=null,E=0;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`));const T=t.split(`
`),y=T.length;let x=!1,O=null,L=null,w=!1,B=!0,H=!1,z=!0,k=!1;for(let D=0;D<y;D++){const R=T[D];if(R.length===0)continue;if(x){R.startsWith("0 FILE ")?(this.setData(O,L),O=R.substring(7),L=""):L+=R+`
`;continue}const U=new Ms(R,D+1);if(U.seekNonSpace(),U.isAtTheEnd())continue;const J=U.getToken();let Y,et,ct,I,q,X,mt,N,nt,vt,St;switch(J){case"0":const $=U.getToken();if($)switch($){case"!LDRAW_ORG":g=U.getToken();break;case"!COLOUR":Y=r.parseColorMetaDirective(U),Y?m[Y.userData.code]=Y:console.warn("LDrawLoader: Error parsing material"+U.getLineNumberString());break;case"!CATEGORY":v=U.getToken();break;case"!KEYWORDS":const Re=U.getRemainingString().split(",");Re.length>0&&(_||(_=[]),Re.forEach(function(Ft){_.push(Ft.trim())}));break;case"FILE":D>0&&(x=!0,O=U.getRemainingString(),L="",w=!1,B=!0);break;case"BFC":for(;!U.isAtTheEnd();){const Ft=U.getToken();switch(Ft){case"CERTIFY":case"NOCERTIFY":w=Ft==="CERTIFY",B=!0;break;case"CW":case"CCW":B=Ft==="CCW";break;case"INVERTNEXT":H=!0;break;case"CLIP":case"NOCLIP":z=Ft==="CLIP";break;default:console.warn('THREE.LDrawLoader: BFC directive "'+Ft+'" is unknown.');break}}break;case"STEP":k=!0;break;case"Author:":S=U.getToken();break}break;case"1":et=U.getToken(),Y=p(et);const pt=parseFloat(U.getToken()),yt=parseFloat(U.getToken()),bt=parseFloat(U.getToken()),Dt=parseFloat(U.getToken()),ae=parseFloat(U.getToken()),Yt=parseFloat(U.getToken()),Ue=parseFloat(U.getToken()),we=parseFloat(U.getToken()),oe=parseFloat(U.getToken()),G=parseFloat(U.getToken()),An=parseFloat(U.getToken()),fe=parseFloat(U.getToken()),ee=new Xe().set(Dt,ae,Yt,pt,Ue,we,oe,yt,G,An,fe,bt,0,0,0,1);let Bt=U.getRemainingString().trim().replace(/\\/g,"/");r.fileMap[Bt]?Bt=r.fileMap[Bt]:Bt.startsWith("s/")?Bt="parts/"+Bt:Bt.startsWith("48/")&&(Bt="p/"+Bt),f.push({material:Y,colorCode:et,matrix:ee,fileName:Bt,inverted:H,startingBuildingStep:k}),k=!1,H=!1;break;case"2":et=U.getToken(),Y=p(et),X=U.getVector(),mt=U.getVector(),ct={material:Y,colorCode:et,vertices:[X,mt]},c.push(ct);break;case"5":et=U.getToken(),Y=p(et),X=U.getVector(),mt=U.getVector(),vt=U.getVector(),St=U.getVector(),ct={material:Y,colorCode:et,vertices:[X,mt],controlPoints:[vt,St]},h.push(ct);break;case"3":et=U.getToken(),Y=p(et),I=B,q=!w||!z,I===!0?(X=U.getVector(),mt=U.getVector(),N=U.getVector()):(N=U.getVector(),mt=U.getVector(),X=U.getVector()),l.push({material:Y,colorCode:et,faceNormal:null,vertices:[X,mt,N],normals:[null,null,null]}),E++,q===!0&&(l.push({material:Y,colorCode:et,faceNormal:null,vertices:[N,mt,X],normals:[null,null,null]}),E++);break;case"4":et=U.getToken(),Y=p(et),I=B,q=!w||!z,I===!0?(X=U.getVector(),mt=U.getVector(),N=U.getVector(),nt=U.getVector()):(nt=U.getVector(),N=U.getVector(),mt=U.getVector(),X=U.getVector()),l.push({material:Y,colorCode:et,faceNormal:null,vertices:[X,mt,N,nt],normals:[null,null,null,null]}),E+=2,q===!0&&(l.push({material:Y,colorCode:et,faceNormal:null,vertices:[nt,N,mt,X],normals:[null,null,null,null]}),E+=2);break;default:throw new Error('LDrawLoader: Unknown line type "'+J+'"'+U.getLineNumberString()+".")}}return x&&this.setData(O,L),{faces:l,conditionalSegments:h,lineSegments:c,type:g,category:v,keywords:_,author:S,subobjects:f,totalFaces:E,startingBuildingStep:k,materials:m,fileName:i,group:null}}getData(t,i=!0){const r=t.toLowerCase(),l=this._cache[r];return l===null||l instanceof Promise?null:i?this.cloneResult(l):l}async ensureDataLoaded(t){const i=t.toLowerCase();i in this._cache||(this._cache[i]=this.fetchData(t).then(r=>{const l=this.parse(r,t);return this._cache[i]=l,l})),await this._cache[i]}setData(t,i){const r=t.toLowerCase();this._cache[r]=this.parse(i,t)}}function Ph(s,t,i,r){return(!r&&s===qa||r&&s===ws)&&(s=t),i[s]||null}class y1{constructor(t){this.loader=t,this.parseCache=new x1(t),this._cache={}}async processIntoMesh(t){const i=this.loader,r=this.parseCache,l=new Set,c=async(f,m=null)=>{const p=f.subobjects,g=[];for(let S=0,E=p.length;S<E;S++){const T=p[S],y=r.ensureDataLoaded(T.fileName).then(()=>{const x=r.getData(T.fileName,!1);return v1(x.type)?c(r.getData(T.fileName),T):this.loadModel(T.fileName).catch(O=>(console.warn(O),null))});g.push(y)}const v=new Go;v.userData.category=f.category,v.userData.keywords=f.keywords,v.userData.author=f.author,v.userData.type=f.type,v.userData.fileName=f.fileName,f.group=v;const _=await Promise.all(g);for(let S=0,E=_.length;S<E;S++){const T=f.subobjects[S],y=_[S];if(y===null)continue;if(y.isGroup){const J=y;T.matrix.decompose(J.position,J.quaternion,J.scale),J.userData.startingBuildingStep=T.startingBuildingStep,J.name=T.fileName,i.applyMaterialsToMesh(J,T.colorCode,f.materials),J.userData.colorCode=T.colorCode,v.add(J);continue}y.group.children.length&&v.add(y.group);const x=f.lineSegments,O=f.conditionalSegments,L=f.faces,w=y.lineSegments,B=y.conditionalSegments,H=y.faces,z=T.matrix,k=T.inverted,D=z.determinant()<0,R=T.colorCode,U=R===qa?ws:R;for(let J=0,Y=w.length;J<Y;J++){const et=w[J],ct=et.vertices;ct[0].applyMatrix4(z),ct[1].applyMatrix4(z),et.colorCode=et.colorCode===ws?U:et.colorCode,et.material=et.material||Ph(et.colorCode,et.colorCode,f.materials,!0),x.push(et)}for(let J=0,Y=B.length;J<Y;J++){const et=B[J],ct=et.vertices,I=et.controlPoints;ct[0].applyMatrix4(z),ct[1].applyMatrix4(z),I[0].applyMatrix4(z),I[1].applyMatrix4(z),et.colorCode=et.colorCode===ws?U:et.colorCode,et.material=et.material||Ph(et.colorCode,et.colorCode,f.materials,!0),O.push(et)}for(let J=0,Y=H.length;J<Y;J++){const et=H[J],ct=et.vertices;for(let I=0,q=ct.length;I<q;I++)ct[I].applyMatrix4(z);et.colorCode=et.colorCode===qa?R:et.colorCode,et.material=et.material||Ph(et.colorCode,R,f.materials,!1),l.add(et.colorCode),D!==k&&ct.reverse(),L.push(et)}f.totalFaces+=y.totalFaces}return m&&(i.applyMaterialsToMesh(v,m.colorCode,f.materials),v.userData.colorCode=m.colorCode),f};for(let f=0,m=t.faces;f<m;f++)l.add(t.faces[f].colorCode);if(await c(t),i.smoothNormals){const f=l.size>1;g1(t.faces),_1(t.faces,t.lineSegments,f)}const h=t.group;return t.faces.length>0&&h.add(Ih(this.loader,t.faces,3,!1,t.totalFaces)),t.lineSegments.length>0&&h.add(Ih(this.loader,t.lineSegments,2)),t.conditionalSegments.length>0&&h.add(Ih(this.loader,t.conditionalSegments,2,!0)),h}hasCachedModel(t){return t!==null&&t.toLowerCase()in this._cache}async getCachedModel(t){if(t!==null&&this.hasCachedModel(t)){const i=t.toLowerCase();return(await this._cache[i]).clone()}else return null}async loadModel(t){const i=this.parseCache,r=t.toLowerCase();if(this.hasCachedModel(t))return this.getCachedModel(t);{await i.ensureDataLoaded(t);const l=i.getData(t),c=this.processIntoMesh(l);return this.hasCachedModel(t)?this.getCachedModel(t):(I0(l.type)&&(this._cache[r]=c),(await c).clone())}}async parseModel(t){const r=this.parseCache.parse(t);return I0(r.type)&&this.hasCachedModel(r.fileName)?this.getCachedModel(r.fileName):this.processIntoMesh(r)}}function S1(s,t){return s.colorCode===t.colorCode?0:s.colorCode<t.colorCode?-1:1}function Ih(s,t,i,r=!1,l=null){t.sort(S1),l===null&&(l=t.length);const c=new Float32Array(i*l*3),h=i===3?new Float32Array(i*l*3):null,f=[],m=new Array(6),p=new Li;let g=null,v=0,_=0,S=0;for(let T=0,y=t.length;T<y;T++){const x=t[T];let O=x.vertices;O.length===4&&(m[0]=O[0],m[1]=O[1],m[2]=O[2],m[3]=O[0],m[4]=O[2],m[5]=O[3],O=m);for(let L=0,w=O.length;L<w;L++){const B=O[L],H=S+L*3;c[H+0]=B.x,c[H+1]=B.y,c[H+2]=B.z}if(i===3){if(!x.faceNormal){const w=O[0],B=O[1],H=O[2];Vc.subVectors(B,w),kc.subVectors(H,B),x.faceNormal=new K().crossVectors(Vc,kc).normalize()}let L=x.normals;L.length===4&&(m[0]=L[0],m[1]=L[1],m[2]=L[2],m[3]=L[0],m[4]=L[2],m[5]=L[3],L=m);for(let w=0,B=L.length;w<B;w++){let H=x.faceNormal;L[w]&&(H=L[w].norm);const z=S+w*3;h[z+0]=H.x,h[z+1]=H.y,h[z+2]=H.z}}if(g!==x.colorCode){g!==null&&p.addGroup(v,_,f.length-1);const L=x.material;if(L!==null){if(i===3)f.push(L);else if(i===2)if(r){const w=s.edgeMaterialCache.get(L);f.push(s.conditionalEdgeMaterialCache.get(w))}else f.push(s.edgeMaterialCache.get(L))}else f.push(x.colorCode);g=x.colorCode,v=S/3,_=O.length}else _+=O.length;S+=3*O.length}_>0&&p.addGroup(v,1/0,f.length-1),p.setAttribute("position",new bn(c,3)),h!==null&&p.setAttribute("normal",new bn(h,3));let E=null;if(i===2?r?E=new m1(p,f.length===1?f[0]:f):E=new fv(p,f.length===1?f[0]:f):i===3&&(E=new fi(p,f.length===1?f[0]:f)),r){E.isConditionalLine=!0;const T=new Float32Array(t.length*3*2),y=new Float32Array(t.length*3*2),x=new Float32Array(t.length*3*2);for(let O=0,L=t.length;O<L;O++){const w=t[O],B=w.vertices,H=w.controlPoints,z=H[0],k=H[1],D=B[0],R=B[1],U=O*3*2;T[U+0]=z.x,T[U+1]=z.y,T[U+2]=z.z,T[U+3]=z.x,T[U+4]=z.y,T[U+5]=z.z,y[U+0]=k.x,y[U+1]=k.y,y[U+2]=k.z,y[U+3]=k.x,y[U+4]=k.y,y[U+5]=k.z,x[U+0]=R.x-D.x,x[U+1]=R.y-D.y,x[U+2]=R.z-D.z,x[U+3]=R.x-D.x,x[U+4]=R.y-D.y,x[U+5]=R.z-D.z}p.setAttribute("control0",new bn(T,3,!1)),p.setAttribute("control1",new bn(y,3,!1)),p.setAttribute("direction",new bn(x,3,!1))}return E}class M1 extends Ya{constructor(t){super(t),this.materials=[],this.materialLibrary={},this.edgeMaterialCache=new WeakMap,this.conditionalEdgeMaterialCache=new WeakMap,this.partsCache=new y1(this),this.fileMap={},this.smoothNormals=!0,this.partsLibraryPath="",this.ConditionalLineMaterial=null,this.missingColorMaterial=new ka({name:Ya.DEFAULT_MATERIAL_NAME,color:16711935,roughness:.3,metalness:0}),this.missingEdgeColorMaterial=new Ed({name:Ya.DEFAULT_MATERIAL_NAME,color:16711935}),this.missingConditionalEdgeColorMaterial=null,this.edgeMaterialCache.set(this.missingColorMaterial,this.missingEdgeColorMaterial),this.conditionalEdgeMaterialCache.set(this.missingEdgeColorMaterial,this.missingConditionalEdgeColorMaterial)}setPartsLibraryPath(t){return this.partsLibraryPath=t,this}setConditionalLineMaterial(t){return this.ConditionalLineMaterial=t,this.missingConditionalEdgeColorMaterial=new this.ConditionalLineMaterial({name:Ya.DEFAULT_MATERIAL_NAME,fog:!0,color:16711935}),this}async preloadMaterials(t){const i=new Td(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials);const r=await i.loadAsync(t),l=/^0 !COLOUR/,c=r.split(/[\n\r]/g),h=[];for(let f=0,m=c.length;f<m;f++){const p=c[f];if(l.test(p)){const g=p.replace(l,""),v=this.parseColorMetaDirective(new Ms(g));h.push(v)}}this.setMaterials(h)}load(t,i,r,l){const c=new Td(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,h=>{this.setMaterials([]),this.partsCache.parseModel(h,this.materialLibrary).then(f=>{this.applyMaterialsToMesh(f,qa,this.materialLibrary,!0),this.computeBuildingSteps(f),f.userData.fileName=t,i(f)}).catch(l)},r,l)}parse(t,i,r){this.partsCache.parseModel(t,this.materialLibrary).then(l=>{this.applyMaterialsToMesh(l,qa,this.materialLibrary,!0),this.computeBuildingSteps(l),l.userData.fileName="",i(l)}).catch(r)}setMaterials(t){this.materialLibrary={},this.materials=[];for(let i=0,r=t.length;i<r;i++)this.addMaterial(t[i]);return this.addMaterial(this.parseColorMetaDirective(new Ms("Main_Colour CODE 16 VALUE #FF8080 EDGE #333333"))),this.addMaterial(this.parseColorMetaDirective(new Ms("Edge_Colour CODE 24 VALUE #A0A0A0 EDGE #333333"))),this}setFileMap(t){return this.fileMap=t,this}addMaterial(t){const i=this.materialLibrary;return i[t.userData.code]||(this.materials.push(t),i[t.userData.code]=t),this}getMaterial(t){if(t.startsWith("0x2")){const i=t.substring(3);return this.parseColorMetaDirective(new Ms("Direct_Color_"+i+" CODE -1 VALUE #"+i+" EDGE #"+i))}return this.materialLibrary[t]||null}applyMaterialsToMesh(t,i,r,l=!1){const c=this,h=i===qa;t.traverse(m=>{if(m.isMesh||m.isLineSegments)if(Array.isArray(m.material))for(let p=0,g=m.material.length;p<g;p++)m.material[p].isMaterial||(m.material[p]=f(m,m.material[p]));else m.material.isMaterial||(m.material=f(m,m.material))});function f(m,p){if(h&&!(p in r)&&!l)return p;const g=m.isLineSegments||m.isConditionalLine;(!g&&p===qa||g&&p===ws)&&(p=i);let _=null;if(p in r)_=r[p];else if(l)_=c.getMaterial(p),_===null&&(console.warn(`LDrawLoader: Material properties for code ${p} not available.`),_=c.missingColorMaterial);else return p;return m.isLineSegments&&(_=c.edgeMaterialCache.get(_),m.isConditionalLine&&(_=c.conditionalEdgeMaterialCache.get(_))),_}}getMainMaterial(){return this.getMaterial(qa)}getMainEdgeMaterial(){const t=this.getMaterial(ws);return t?this.edgeMaterialCache.get(t):null}parseColorMetaDirective(t){let i=null,r="#FF00FF",l="#FF00FF",c=1,h=!1,f=0,m=C0,p=null;const g=t.getToken();if(!g)throw new Error('LDrawLoader: Material name was expected after "!COLOUR tag'+t.getLineNumberString()+".");let v=null;for(;v=t.getToken(),!!v;)if(!S(v))switch(v.toUpperCase()){case"CODE":i=t.getToken();break;case"VALUE":if(r=t.getToken(),r.startsWith("0x"))r="#"+r.substring(2);else if(!r.startsWith("#"))throw new Error("LDrawLoader: Invalid color while parsing material"+t.getLineNumberString()+".");break;case"EDGE":if(l=t.getToken(),l.startsWith("0x"))l="#"+l.substring(2);else if(!l.startsWith("#")){if(p=this.getMaterial(l),!p)throw new Error("LDrawLoader: Invalid edge color while parsing material"+t.getLineNumberString()+".");p=this.edgeMaterialCache.get(p)}break;case"ALPHA":if(c=parseInt(t.getToken()),isNaN(c))throw new Error("LDrawLoader: Invalid alpha value in material definition"+t.getLineNumberString()+".");c=Math.max(0,Math.min(1,c/255)),c<1&&(h=!0);break;case"LUMINANCE":if(!S(t.getToken()))throw new Error("LDrawLoader: Invalid luminance value in material definition"+Ms.getLineNumberString()+".");break;case"CHROME":m=w0;break;case"PEARLESCENT":m=D0;break;case"RUBBER":m=L0;break;case"MATTE_METALLIC":m=U0;break;case"METAL":m=N0;break;case"MATERIAL":t.setToEnd();break;default:throw new Error('LDrawLoader: Unknown token "'+v+'" while parsing material'+t.getLineNumberString()+".")}let _=null;switch(m){case C0:_=new ka({roughness:.3,metalness:0});break;case D0:_=new ka({roughness:.3,metalness:.25});break;case w0:_=new ka({roughness:0,metalness:1});break;case L0:_=new ka({roughness:.9,metalness:0});break;case U0:_=new ka({roughness:.8,metalness:.4});break;case N0:_=new ka({roughness:.2,metalness:.85});break}if(_.color.setStyle(r,wc),_.transparent=h,_.premultipliedAlpha=!0,_.opacity=c,_.depthWrite=!h,_.polygonOffset=!0,_.polygonOffsetFactor=1,f!==0&&_.emissive.setStyle(r,wc).multiplyScalar(f),!p){if(p=new Ed({color:new de().setStyle(l,wc),transparent:h,opacity:c,depthWrite:!h}),p.color,p.userData.code=i,p.name=g+" - Edge",this.ConditionalLineMaterial===null)throw new Error("THREE.LDrawLoader: ConditionalLineMaterial type must be specified via .setConditionalLineMaterial().");const E=new this.ConditionalLineMaterial({fog:!0,transparent:h,depthWrite:!h,color:new de().setStyle(l,wc),opacity:c});E.userData.code=i,E.name=g+" - Conditional Edge",this.conditionalEdgeMaterialCache.set(p,E)}return _.userData.code=i,_.name=g,this.edgeMaterialCache.set(_,p),this.addMaterial(_),_;function S(E){let T;return E.startsWith("LUMINANCE")?T=parseInt(E.substring(9)):T=parseInt(E),isNaN(T)?!1:(f=Math.max(0,Math.min(1,T/255)),!0)}}computeBuildingSteps(t){let i=0;t.traverse(r=>{r.isGroup&&(r.userData.startingBuildingStep&&i++,r.userData.buildingStep=i)}),t.userData.numBuildingSteps=i+1}}function E1(s,t=!1){const i=s[0].index!==null,r=new Set(Object.keys(s[0].attributes)),l=new Set(Object.keys(s[0].morphAttributes)),c={},h={},f=s[0].morphTargetsRelative,m=new Li;let p=0;for(let g=0;g<s.length;++g){const v=s[g];let _=0;if(i!==(v.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const S in v.attributes){if(!r.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+S+'" attribute exists among all geometries, or in none of them.'),null;c[S]===void 0&&(c[S]=[]),c[S].push(v.attributes[S]),_++}if(_!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(f!==v.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const S in v.morphAttributes){if(!l.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;h[S]===void 0&&(h[S]=[]),h[S].push(v.morphAttributes[S])}if(t){let S;if(i)S=v.index.count;else if(v.attributes.position!==void 0)S=v.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;m.addGroup(p,S,g),p+=S}}if(i){let g=0;const v=[];for(let _=0;_<s.length;++_){const S=s[_].index;for(let E=0;E<S.count;++E)v.push(S.getX(E)+g);g+=s[_].attributes.position.count}m.setIndex(v)}for(const g in c){const v=z0(c[g]);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;m.setAttribute(g,v)}for(const g in h){const v=h[g][0].length;if(v===0)break;m.morphAttributes=m.morphAttributes||{},m.morphAttributes[g]=[];for(let _=0;_<v;++_){const S=[];for(let T=0;T<h[g].length;++T)S.push(h[g][T][_]);const E=z0(S);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;m.morphAttributes[g].push(E)}}return m}function z0(s){let t,i,r,l=-1,c=0;for(let p=0;p<s.length;++p){const g=s[p];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=g.itemSize),i!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=g.normalized),r!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=g.gpuType),l!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*i}const h=new t(c),f=new bn(h,i,r);let m=0;for(let p=0;p<s.length;++p){const g=s[p];if(g.isInterleavedBufferAttribute){const v=m/i;for(let _=0,S=g.count;_<S;_++)for(let E=0;E<i;E++){const T=g.getComponent(_,E);f.setComponent(_+v,E,T)}}else h.set(g.array,m);m+=g.count*i}return l!==void 0&&(f.gpuType=l),f}class T1 extends ua{static get type(){return"LDrawConditionalLineMaterial"}constructor(t){super({uniforms:lv.merge([wt.fog,{diffuse:{value:new de},opacity:{value:1}}]),vertexShader:`
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
			`}),Object.defineProperties(this,{opacity:{get:function(){return this.uniforms.opacity.value},set:function(i){this.uniforms.opacity.value=i}},color:{get:function(){return this.uniforms.diffuse.value}}}),this.setValues(t),this.isLDrawConditionalLineMaterial=!0}}function b1(s,t,i=50){s.geometry.computeBoundingBox();const r=s.geometry.boundingBox;if(!r)throw new Error("Bounding box could not be computed");const l=r.max.x-r.min.x,c=r.max.y-r.min.y,h=r.max.z-r.min.z,f=2*(l+h),m=2*h+c,p=s.geometry.attributes.position,g=new Float32Array(p.count*2),v={top:{x:h,y:0},left:{x:0,y:h},front:{x:h,y:h},right:{x:h+l,y:h},back:{x:h+l+h,y:h},bottom:{x:h,y:h+c}},_={top:y=>new qt(v.top.x+(y.x-r.min.x),v.top.y+(h-(y.z-r.min.z))),bottom:y=>new qt(v.bottom.x+(y.x-r.min.x),v.bottom.y+(y.z-r.min.z)),front:y=>new qt(v.front.x+(y.x-r.min.x),v.front.y+(c-(y.y-r.min.y))),back:y=>new qt(v.back.x+(l-(y.x-r.min.x)),v.back.y+(c-(y.y-r.min.y))),left:y=>new qt(v.left.x+(r.max.z-y.z),v.left.y+(c-(y.y-r.min.y))),right:y=>new qt(v.right.x+(h-(r.max.z-y.z)),v.right.y+(c-(y.y-r.min.y)))},S={top:y=>new K(y.x,r.max.y+1,y.z),bottom:y=>new K(y.x,r.min.y-1,y.z),front:y=>new K(y.x,y.y,r.min.z-1),back:y=>new K(y.x,y.y,r.max.z+1),left:y=>new K(r.min.x-1,y.y,y.z),right:y=>new K(r.max.x+1,y.y,y.z)},E=new fM;for(let y=0;y<p.count;y+=3){const x=new K(p.getX(y),p.getY(y),p.getZ(y)),O=new K(p.getX(y+1),p.getY(y+1),p.getZ(y+1)),L=new K(p.getX(y+2),p.getY(y+2),p.getZ(y+2)),w=new K().crossVectors(new K().subVectors(O,x),new K().subVectors(L,x)).normalize();let B,H;Math.abs(w.y)>Math.abs(w.x)&&Math.abs(w.y)>Math.abs(w.z)?(B=w.y>0?_.top:_.bottom,H=w.y>0?"top":"bottom"):Math.abs(w.z)>Math.abs(w.x)?(B=w.z>0?_.back:_.front,H=w.z>0?"back":"front"):(B=w.x>0?_.right:_.left,H=w.x>0?"right":"left");const z=[x,O,L];let k=!1;for(let D of z){const R=S[H](D),U=new K().subVectors(D,R).normalize();E.set(R,U);const J=E.intersectObject(s,!0);if(J.length&&Math.abs(J[0].point.distanceTo(R)-D.distanceTo(R))<.001){k=!0;break}}if(!k){g.set([0,0,0,0,0,0],y*2);continue}z.forEach((D,R)=>{const U=B(D),J=y+R;g[J*2]=U.x/f,g[J*2+1]=1-U.y/m})}s.geometry.setAttribute("uv",new bn(g,2));const T=A1(g,f,m,i);t(T)}function A1(s,t,i,r){const l=document.createElement("canvas");l.width=t*r,l.height=i*r;const c=l.getContext("2d");if(!c)throw new Error("Failed to get 2D context");c.fillStyle="#fff",c.fillRect(0,0,l.width,l.height),c.strokeStyle="#00AAFF",c.lineWidth=1;for(let h=0;h<s.length;h+=6){const f=new qt(s[h]*t,s[h+1]*i),m=new qt(s[h+2]*t,s[h+3]*i),p=new qt(s[h+4]*t,s[h+5]*i);f.equals(new qt(0,0))&&m.equals(new qt(0,0))&&p.equals(new qt(0,0))||(c.beginPath(),c.moveTo(f.x*r,f.y*r),c.lineTo(m.x*r,m.y*r),c.lineTo(p.x*r,p.y*r),c.closePath(),c.stroke())}return l.toDataURL("image/png")}const R1=({modelPath:s,color:t,background:i,transparent:r,texture:l,onMeshReady:c,onStatus:h})=>{const f=kn.useRef(null),m=kn.useRef(null),p=kn.useRef(null),g=kn.useRef(null),v=kn.useRef(null);return kn.useEffect(()=>{if(!f.current)return;const _=new ZS;_.background=new de(i),m.current=_;const S=new ui(75,f.current.clientWidth/f.current.clientHeight,.1,1e3);S.position.set(150,150,150),v.current=S;const E=new ZA({antialias:!0});E.setSize(f.current.clientWidth,f.current.clientHeight),f.current.appendChild(E.domElement),g.current=E;const T=new QA(S,E.domElement);T.update(),_.add(new sM(16777215,4473924,1.2));const y=new cM(16777215,.8);y.position.set(100,200,100).normalize(),_.add(y);function x(){T.update(),E.render(_,S),requestAnimationFrame(x)}x();function O(){!f.current||!g.current||!v.current||(S.aspect=f.current.clientWidth/f.current.clientHeight,S.updateProjectionMatrix(),E.setSize(f.current.clientWidth,f.current.clientHeight))}return window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O),f.current?.removeChild(E.domElement)}},[]),kn.useEffect(()=>{if(!m.current)return;p.current&&(m.current.remove(p.current),p.current.geometry.dispose(),p.current.material.dispose());const _=new M1;_.setConditionalLineMaterial(T1),_.setPartsLibraryPath("LDraw/"),_.load(s,S=>{const E=[];S.traverse(O=>{O instanceof fi&&(O.updateMatrix(),E.push(O.geometry.clone().applyMatrix4(O.matrix)))});const T=E1(E,!0),y=new ka;y.onBeforeCompile=O=>{O.fragmentShader=O.fragmentShader.replace("#include <map_fragment>",`
              #ifdef USE_MAP
                vec4 texelColor = texture2D( map, vMapUv );

                // If texture pixel is visible, use it
                // If texture pixel is transparent, fall back to base color
                diffuseColor.rgb = mix( diffuseColor.rgb, texelColor.rgb, texelColor.a );
              #endif
            `)},B0(y,t,r,l);const x=new fi(T,y);x.rotation.x=Math.PI,m.current.add(x),p.current=x,b1(x,O=>c(x,O))},void 0,S=>h({message:`Error loading part: ${S}`,type:"error"}))},[s]),kn.useEffect(()=>{if(!p.current)return;const _=p.current.material;B0(_,t,r,l)},[t,r,l]),kn.useEffect(()=>{m.current&&(m.current.background=new de(i))},[i]),Wt.jsx("div",{ref:f,style:{flex:1}})};function B0(s,t,i,r){if(s.color.set(t),s.opacity=i?.5:1,s.transparent=i,s.side=i?Ci:la,r){const l=new rM;s.map=l.load(r,c=>{c.flipY=!1,c.minFilter=hi,c.generateMipmaps=!1})}else s.map=null;s.needsUpdate=!0}const C1=({scene:s,onDescriptionChange:t,onColorChange:i,onBackgroundChange:r,onTransparentChange:l,onTextureChange:c,onModelChange:h,onStatus:f})=>{const m=p=>{if(!p)return;const g=new FileReader;g.onload=()=>{c(g.result),f({message:`Texture loaded from ${p.name}`})},g.readAsDataURL(p)};return Wt.jsxs("div",{className:"controlspanel",children:[Wt.jsx("span",{className:"region",children:Wt.jsxs("label",{className:"header",children:["Description:",Wt.jsx("input",{className:"description",type:"text",value:s.description,onChange:p=>t(p.target.value),placeholder:"Describe your customization"})]})}),Wt.jsx("span",{className:"region",children:Wt.jsxs("label",{className:"header",children:["Model:",Wt.jsxs("select",{onChange:p=>h(p.target.value),value:s.model,children:[Wt.jsx("option",{value:"LDraw/3001.dat",children:"3001"}),Wt.jsx("option",{value:"LDraw/3062a.dat",children:"3062a"})]})]})}),Wt.jsx("span",{className:"region",children:Wt.jsxs("label",{className:"header",children:["Color:",Wt.jsx("input",{type:"color",value:s.color,onChange:p=>i(p.target.value)})]})}),Wt.jsx("span",{className:"region",children:Wt.jsxs("label",{className:"header",children:["Background:",Wt.jsx("input",{type:"color",value:s.background,onChange:p=>r(p.target.value)})]})}),Wt.jsx("span",{className:"region",children:Wt.jsxs("label",{className:"header",children:["Transparent:",Wt.jsx("input",{type:"checkbox",checked:s.transparent,onChange:p=>l(p.target.checked)})]})}),Wt.jsx("span",{className:"region",children:Wt.jsxs("label",{className:"header",children:["Texture:",Wt.jsx("input",{id:"textureInput",type:"file",accept:"image/*",style:{display:"none"},onChange:p=>m(p.target.files?.[0])}),Wt.jsx("input",{type:"checkbox",checked:!!s.texture,onChange:p=>{const g=document.getElementById("textureInput");p.target.checked&&!s.texture?g.click():p.target.checked||(c(void 0),g.value="")}})]})})]})};function w1(s){return JSON.stringify(s,null,2)}function D1(s){return JSON.parse(s)}function L1(s){return s==="LDraw/3001.dat"||s==="LDraw/3062a.dat"}function F0(s){return/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(s)}function U1(s){if(!s)return!0;if(/^data:image\/(png|jpeg|jpg|gif|bmp|webp);base64,/.test(s))try{return atob(s.split(",")[1]),!0}catch{return!1}else return!1}function N1(s){if(!F0(s.background))throw new Error("Invalid background");if(!F0(s.color))throw new Error("Invalid color");if(!L1(s.model))throw new Error("Invalid model");if(!U1(s.texture))throw new Error("Invalid texture")}function O1(s,t){fetch("http://example.com/your-endpoint",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(i=>{if(!i.ok)throw new Error(i.statusText);t({message:"Scene uploaded successfully",type:"info"})}).catch(i=>{t({message:`Upload failed: ${i.message}`,type:"error"})})}const P1=({scene:s,uvMapDataURL:t,onLoadScene:i,onStatus:r})=>{const[l,c]=kn.useState(""),[h,f]=kn.useState(!1),m=()=>{const S=w1({...s,texture:h?s.texture:void 0}),E=new Blob([S],{type:"application/json"}),T=document.createElement("a");T.href=URL.createObjectURL(E),T.download="scene.json",T.click(),URL.revokeObjectURL(T.href)},p=S=>{try{const E=D1(S);i(E)&&r({message:"Import scene successfully."})}catch{r({message:"Invalid scene JSON",type:"error"})}},g=S=>{if(!S)return;const E=new FileReader;E.onload=()=>{p(E.result)},E.readAsText(S)},v=()=>{if(t){const S=document.createElement("a");S.href=t,S.download="uvmap.png",S.click()}},_=()=>{O1(s,r)};return Wt.jsxs("div",{className:"toolbar",children:[Wt.jsxs("div",{className:"region",children:[Wt.jsx("div",{className:"header",children:"Export customization to file:"}),Wt.jsx("div",{children:Wt.jsxs("label",{children:[Wt.jsx("input",{type:"checkbox",checked:h,onChange:S=>f(S.target.checked)}),"Include Texture in Export"]})}),Wt.jsx("button",{onClick:m,children:"Export Scene"})]}),Wt.jsxs("div",{className:"region",children:[Wt.jsx("div",{className:"header",children:"Import customization from text:"}),Wt.jsx("div",{children:Wt.jsx("textarea",{value:l,onChange:S=>c(S.target.value),placeholder:"Paste scene JSON here"})}),Wt.jsx("button",{onClick:()=>p(l),children:"Load Scene"})]}),Wt.jsxs("div",{className:"region",children:[Wt.jsx("div",{className:"header",children:"Import customization from file:"}),Wt.jsx("input",{type:"file",id:"importScene",accept:"application/json",style:{display:"none"},onChange:S=>{const E=S.target;g(E.files?.[0]),E.value=""}}),Wt.jsx("button",{onClick:()=>document.getElementById("importScene")?.click(),children:"Import Scene"})]}),Wt.jsxs("div",{className:"region",children:[Wt.jsx("div",{className:"header",children:"Upload customization to endpoint:"}),Wt.jsx("button",{onClick:_,children:"Upload Scene"})]}),Wt.jsxs("div",{className:"region",children:[Wt.jsx("div",{className:"header",children:"Download UV map template:"}),Wt.jsx("button",{onClick:v,children:"Download UV Map"})]})]})},I1=({message:s,type:t})=>{const i=()=>{switch(t){case"error":return"#ff4d4f";default:return"#3498fdff"}};return Wt.jsx("div",{className:"status",style:{backgroundColor:i()},children:s})},z1=()=>{const[s,t]=kn.useState({description:"",color:"#ffffff",background:"#f0f0f0",transparent:!1,model:"LDraw/3001.dat",texture:void 0}),i=f=>{try{return N1(f),t(f),h({message:"Set scene successfully."}),!0}catch(m){return h({message:m instanceof Error?m.message:"Failed to set scene.",type:"error"}),!1}},[r,l]=kn.useState(""),[c,h]=kn.useState({message:"",type:"info"});return Wt.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"row",width:"100vw",height:"100vh"},children:[Wt.jsx(P1,{scene:s,uvMapDataURL:r,onLoadScene:f=>i(f),onStatus:f=>h(f)}),Wt.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[Wt.jsx(C1,{scene:s,onDescriptionChange:f=>i({...s,description:f}),onColorChange:f=>i({...s,color:f}),onBackgroundChange:f=>i({...s,background:f}),onTransparentChange:f=>i({...s,transparent:f}),onTextureChange:f=>i({...s,texture:f}),onModelChange:f=>i({...s,model:f}),onStatus:f=>h(f)}),Wt.jsx(R1,{modelPath:s.model,color:s.color,background:s.background,transparent:s.transparent,texture:s.texture,onMeshReady:(f,m)=>l(m),onStatus:f=>h(f)}),Wt.jsx(I1,{message:c.message,type:c.type})]})]})};Uy.createRoot(document.getElementById("root")).render(Wt.jsx(z1,{}));
