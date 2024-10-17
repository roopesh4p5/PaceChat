(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ju(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const fw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dw=ju(fw);function gp(t){return!!t||t===""}function qu(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?gw(r):qu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(We(t))return t;if(qe(t))return t}}const pw=/;(?![^(]*\))/g,mw=/:(.+)/;function gw(t){const e={};return t.split(pw).forEach(n=>{if(n){const r=n.split(mw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Hu(t){let e="";if(We(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=Hu(t[n]);r&&(e+=r+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qt=t=>We(t)?t:t==null?"":Q(t)||qe(t)&&(t.toString===_p||!ie(t.toString))?JSON.stringify(t,yp,2):String(t),yp=(t,e)=>e&&e.__v_isRef?yp(t,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:vp(e)?{[`Set(${e.size})`]:[...e.values()]}:qe(e)&&!Q(e)&&!Ep(e)?String(e):e,Ce={},jr=[],Ft=()=>{},yw=()=>!1,vw=/^on[^a-z]/,sa=t=>vw.test(t),zu=t=>t.startsWith("onUpdate:"),it=Object.assign,Ku=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ww=Object.prototype.hasOwnProperty,fe=(t,e)=>ww.call(t,e),Q=Array.isArray,qr=t=>ia(t)==="[object Map]",vp=t=>ia(t)==="[object Set]",ie=t=>typeof t=="function",We=t=>typeof t=="string",Wu=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",wp=t=>qe(t)&&ie(t.then)&&ie(t.catch),_p=Object.prototype.toString,ia=t=>_p.call(t),_w=t=>ia(t).slice(8,-1),Ep=t=>ia(t)==="[object Object]",Gu=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ho=ju(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ew=/-(\w)/g,nn=oa(t=>t.replace(Ew,(e,n)=>n?n.toUpperCase():"")),bw=/\B([A-Z])/g,us=oa(t=>t.replace(bw,"-$1").toLowerCase()),aa=oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),oc=oa(t=>t?`on${aa(t)}`:""),ni=(t,e)=>!Object.is(t,e),fo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},So=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Co=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mh;const Tw=()=>Mh||(Mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Wt;class bp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Wt&&(this.parent=Wt,this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Tp(t){return new bp(t)}function Iw(t,e=Wt){e&&e.active&&e.effects.push(t)}const Xu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ip=t=>(t.w&Bn)>0,Sp=t=>(t.n&Bn)>0,Sw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bn},Cw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ip(s)&&!Sp(s)?s.delete(t):e[n++]=s,s.w&=~Bn,s.n&=~Bn}e.length=n}},Vc=new WeakMap;let Os=0,Bn=1;const Bc=30;let Lt;const fr=Symbol(""),jc=Symbol("");class Qu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Iw(this,r)}run(){if(!this.active)return this.fn();let e=Lt,n=Ln;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Lt,Lt=this,Ln=!0,Bn=1<<++Os,Os<=Bc?Sw(this):Lh(this),this.fn()}finally{Os<=Bc&&Cw(this),Bn=1<<--Os,Lt=this.parent,Ln=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Lt===this?this.deferStop=!0:this.active&&(Lh(this),this.onStop&&this.onStop(),this.active=!1)}}function Lh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ln=!0;const Cp=[];function ls(){Cp.push(Ln),Ln=!1}function hs(){const t=Cp.pop();Ln=t===void 0?!0:t}function At(t,e,n){if(Ln&&Lt){let r=Vc.get(t);r||Vc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Xu()),Ap(s)}}function Ap(t,e){let n=!1;Os<=Bc?Sp(t)||(t.n|=Bn,n=!Ip(t)):n=!t.has(Lt),n&&(t.add(Lt),Lt.deps.push(t))}function mn(t,e,n,r,s,i){const o=Vc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?Gu(n)&&a.push(o.get("length")):(a.push(o.get(fr)),qr(t)&&a.push(o.get(jc)));break;case"delete":Q(t)||(a.push(o.get(fr)),qr(t)&&a.push(o.get(jc)));break;case"set":qr(t)&&a.push(o.get(fr));break}if(a.length===1)a[0]&&qc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);qc(Xu(c))}}function qc(t,e){const n=Q(t)?t:[...t];for(const r of n)r.computed&&$h(r);for(const r of n)r.computed||$h(r)}function $h(t,e){(t!==Lt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Aw=ju("__proto__,__v_isRef,__isVue"),Rp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wu)),Rw=Yu(),kw=Yu(!1,!0),Dw=Yu(!0),Uh=Nw();function Nw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=pe(this);for(let i=0,o=this.length;i<o;i++)At(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(pe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ls();const r=pe(this)[e].apply(this,n);return hs(),r}}),t}function Yu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Ww:Pp:e?Op:Np).get(r))return r;const o=Q(r);if(!t&&o&&fe(Uh,s))return Reflect.get(Uh,s,i);const a=Reflect.get(r,s,i);return(Wu(s)?Rp.has(s):Aw(s))||(t||At(r,"get",s),e)?a:Me(a)?o&&Gu(s)?a:a.value:qe(a)?t?xp(a):Ht(a):a}}const Ow=kp(),Pw=kp(!0);function kp(t=!1){return function(n,r,s,i){let o=n[r];if(Qr(o)&&Me(o)&&!Me(s))return!1;if(!t&&!Qr(s)&&(Hc(s)||(s=pe(s),o=pe(o)),!Q(n)&&Me(o)&&!Me(s)))return o.value=s,!0;const a=Q(n)&&Gu(r)?Number(r)<n.length:fe(n,r),c=Reflect.set(n,r,s,i);return n===pe(i)&&(a?ni(s,o)&&mn(n,"set",r,s):mn(n,"add",r,s)),c}}function xw(t,e){const n=fe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&mn(t,"delete",e,void 0),r}function Mw(t,e){const n=Reflect.has(t,e);return(!Wu(e)||!Rp.has(e))&&At(t,"has",e),n}function Lw(t){return At(t,"iterate",Q(t)?"length":fr),Reflect.ownKeys(t)}const Dp={get:Rw,set:Ow,deleteProperty:xw,has:Mw,ownKeys:Lw},$w={get:Dw,set(t,e){return!0},deleteProperty(t,e){return!0}},Uw=it({},Dp,{get:kw,set:Pw}),Ju=t=>t,ca=t=>Reflect.getPrototypeOf(t);function Xi(t,e,n=!1,r=!1){t=t.__v_raw;const s=pe(t),i=pe(e);n||(e!==i&&At(s,"get",e),At(s,"get",i));const{has:o}=ca(s),a=r?Ju:n?tl:ri;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Qi(t,e=!1){const n=this.__v_raw,r=pe(n),s=pe(t);return e||(t!==s&&At(r,"has",t),At(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Yi(t,e=!1){return t=t.__v_raw,!e&&At(pe(t),"iterate",fr),Reflect.get(t,"size",t)}function Fh(t){t=pe(t);const e=pe(this);return ca(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function Vh(t,e){e=pe(e);const n=pe(this),{has:r,get:s}=ca(n);let i=r.call(n,t);i||(t=pe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ni(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function Bh(t){const e=pe(this),{has:n,get:r}=ca(e);let s=n.call(e,t);s||(t=pe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&mn(e,"delete",t,void 0),i}function jh(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function Ji(t,e){return function(r,s){const i=this,o=i.__v_raw,a=pe(o),c=e?Ju:t?tl:ri;return!t&&At(a,"iterate",fr),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function Zi(t,e,n){return function(...r){const s=this.__v_raw,i=pe(s),o=qr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?Ju:e?tl:ri;return!e&&At(i,"iterate",c?jc:fr),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:this}}function Fw(){const t={get(i){return Xi(this,i)},get size(){return Yi(this)},has:Qi,add:Fh,set:Vh,delete:Bh,clear:jh,forEach:Ji(!1,!1)},e={get(i){return Xi(this,i,!1,!0)},get size(){return Yi(this)},has:Qi,add:Fh,set:Vh,delete:Bh,clear:jh,forEach:Ji(!1,!0)},n={get(i){return Xi(this,i,!0)},get size(){return Yi(this,!0)},has(i){return Qi.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Ji(!0,!1)},r={get(i){return Xi(this,i,!0,!0)},get size(){return Yi(this,!0)},has(i){return Qi.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Ji(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Zi(i,!1,!1),n[i]=Zi(i,!0,!1),e[i]=Zi(i,!1,!0),r[i]=Zi(i,!0,!0)}),[t,n,e,r]}const[Vw,Bw,jw,qw]=Fw();function Zu(t,e){const n=e?t?qw:jw:t?Bw:Vw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(fe(n,s)&&s in r?n:r,s,i)}const Hw={get:Zu(!1,!1)},zw={get:Zu(!1,!0)},Kw={get:Zu(!0,!1)},Np=new WeakMap,Op=new WeakMap,Pp=new WeakMap,Ww=new WeakMap;function Gw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xw(t){return t.__v_skip||!Object.isExtensible(t)?0:Gw(_w(t))}function Ht(t){return Qr(t)?t:el(t,!1,Dp,Hw,Np)}function Qw(t){return el(t,!1,Uw,zw,Op)}function xp(t){return el(t,!0,$w,Kw,Pp)}function el(t,e,n,r,s){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Xw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function dn(t){return Qr(t)?dn(t.__v_raw):!!(t&&t.__v_isReactive)}function Qr(t){return!!(t&&t.__v_isReadonly)}function Hc(t){return!!(t&&t.__v_isShallow)}function Mp(t){return dn(t)||Qr(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Yr(t){return So(t,"__v_skip",!0),t}const ri=t=>qe(t)?Ht(t):t,tl=t=>qe(t)?xp(t):t;function Lp(t){Ln&&Lt&&(t=pe(t),Ap(t.dep||(t.dep=Xu())))}function $p(t,e){t=pe(t),t.dep&&qc(t.dep)}function Me(t){return!!(t&&t.__v_isRef===!0)}function Le(t){return Up(t,!1)}function Yw(t){return Up(t,!0)}function Up(t,e){return Me(t)?t:new Jw(t,e)}class Jw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:ri(e)}get value(){return Lp(this),this._value}set value(e){e=this.__v_isShallow?e:pe(e),ni(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ri(e),$p(this))}}function V(t){return Me(t)?t.value:t}const Zw={get:(t,e,n)=>V(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Me(s)&&!Me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Fp(t){return dn(t)?t:new Proxy(t,Zw)}function e_(t){const e=Q(t)?new Array(t.length):{};for(const n in t)e[n]=n_(t,n);return e}class t_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function n_(t,e,n){const r=t[e];return Me(r)?r:new t_(t,e,n)}class r_{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Qu(e,()=>{this._dirty||(this._dirty=!0,$p(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=pe(this);return Lp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function s_(t,e,n=!1){let r,s;const i=ie(t);return i?(r=t,s=Ft):(r=t.get,s=t.set),new r_(r,s,i||!s,n)}function $n(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ua(i,e,n)}return s}function Ot(t,e,n,r){if(ie(t)){const i=$n(t,e,n,r);return i&&wp(i)&&i.catch(o=>{ua(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ot(t[i],e,n,r));return s}function ua(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){$n(c,null,10,[t,o,a]);return}}i_(t,n,s,r)}function i_(t,e,n,r=!0){console.error(t)}let Ao=!1,zc=!1;const It=[];let un=0;const Bs=[];let Ps=null,Mr=0;const js=[];let An=null,Lr=0;const Vp=Promise.resolve();let nl=null,Kc=null;function si(t){const e=nl||Vp;return t?e.then(this?t.bind(this):t):e}function o_(t){let e=un+1,n=It.length;for(;e<n;){const r=e+n>>>1;ii(It[r])<t?e=r+1:n=r}return e}function Bp(t){(!It.length||!It.includes(t,Ao&&t.allowRecurse?un+1:un))&&t!==Kc&&(t.id==null?It.push(t):It.splice(o_(t.id),0,t),jp())}function jp(){!Ao&&!zc&&(zc=!0,nl=Vp.then(zp))}function a_(t){const e=It.indexOf(t);e>un&&It.splice(e,1)}function qp(t,e,n,r){Q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),jp()}function c_(t){qp(t,Ps,Bs,Mr)}function u_(t){qp(t,An,js,Lr)}function la(t,e=null){if(Bs.length){for(Kc=e,Ps=[...new Set(Bs)],Bs.length=0,Mr=0;Mr<Ps.length;Mr++)Ps[Mr]();Ps=null,Mr=0,Kc=null,la(t,e)}}function Hp(t){if(la(),js.length){const e=[...new Set(js)];if(js.length=0,An){An.push(...e);return}for(An=e,An.sort((n,r)=>ii(n)-ii(r)),Lr=0;Lr<An.length;Lr++)An[Lr]();An=null,Lr=0}}const ii=t=>t.id==null?1/0:t.id;function zp(t){zc=!1,Ao=!0,la(t),It.sort((n,r)=>ii(n)-ii(r));const e=Ft;try{for(un=0;un<It.length;un++){const n=It[un];n&&n.active!==!1&&$n(n,null,14)}}finally{un=0,It.length=0,Hp(),Ao=!1,nl=null,(It.length||Bs.length||js.length)&&zp(t)}}function l_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[l]||Ce;f&&(s=n.map(p=>p.trim())),h&&(s=n.map(Co))}let a,c=r[a=oc(e)]||r[a=oc(nn(e))];!c&&i&&(c=r[a=oc(us(e))]),c&&Ot(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(u,t,6,s)}}function Kp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=u=>{const l=Kp(u,e,!0);l&&(a=!0,it(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(Q(i)?i.forEach(c=>o[c]=null):it(o,i),r.set(t,o),o)}function ha(t,e){return!t||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,us(e))||fe(t,e))}let Nt=null,Wp=null;function Ro(t){const e=Nt;return Nt=t,Wp=t&&t.type.__scopeId||null,e}function oi(t,e=Nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Zh(-1);const i=Ro(e),o=t(...s);return Ro(i),r._d&&Zh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ac(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:p,ctx:d,inheritAttrs:v}=t;let y,_;const A=Ro(t);try{if(n.shapeFlag&4){const O=s||r;y=Xt(l.call(O,O,h,i,p,f,d)),_=c}else{const O=e;y=Xt(O.length>1?O(i,{attrs:c,slots:a,emit:u}):O(i,null)),_=e.props?c:h_(c)}}catch(O){qs.length=0,ua(O,t,1),y=nt(Vt)}let M=y;if(_&&v!==!1){const O=Object.keys(_),{shapeFlag:B}=M;O.length&&B&7&&(o&&O.some(zu)&&(_=f_(_,o)),M=jn(M,_))}return n.dirs&&(M=jn(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),y=M,Ro(A),y}const h_=t=>{let e;for(const n in t)(n==="class"||n==="style"||sa(n))&&((e||(e={}))[n]=t[n]);return e},f_=(t,e)=>{const n={};for(const r in t)(!zu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function d_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?qh(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==r[f]&&!ha(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?qh(r,o,u):!0:!!o;return!1}function qh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ha(n,i))return!0}return!1}function p_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const m_=t=>t.__isSuspense;function g_(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):u_(t)}function Hr(t,e){if(Qe){let n=Qe.provides;const r=Qe.parent&&Qe.parent.provides;r===n&&(n=Qe.provides=Object.create(r)),n[t]=e}}function Pt(t,e,n=!1){const r=Qe||Nt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r.proxy):e}}function fa(t,e){return rl(t,null,e)}const Hh={};function Ct(t,e,n){return rl(t,e,n)}function rl(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ce){const a=Qe;let c,u=!1,l=!1;if(Me(t)?(c=()=>t.value,u=Hc(t)):dn(t)?(c=()=>t,r=!0):Q(t)?(l=!0,u=t.some(_=>dn(_)||Hc(_)),c=()=>t.map(_=>{if(Me(_))return _.value;if(dn(_))return ir(_);if(ie(_))return $n(_,a,2)})):ie(t)?e?c=()=>$n(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ot(t,a,3,[f])}:c=Ft,e&&r){const _=c;c=()=>ir(_())}let h,f=_=>{h=y.onStop=()=>{$n(_,a,4)}};if(ci)return f=Ft,e?n&&Ot(e,a,3,[c(),l?[]:void 0,f]):c(),Ft;let p=l?[]:Hh;const d=()=>{if(!!y.active)if(e){const _=y.run();(r||u||(l?_.some((A,M)=>ni(A,p[M])):ni(_,p)))&&(h&&h(),Ot(e,a,3,[_,p===Hh?void 0:p,f]),p=_)}else y.run()};d.allowRecurse=!!e;let v;s==="sync"?v=d:s==="post"?v=()=>vt(d,a&&a.suspense):v=()=>c_(d);const y=new Qu(c,v);return e?n?d():p=y.run():s==="post"?vt(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&Ku(a.scope.effects,y)}}function y_(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?Gp(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const o=Qe;Jr(this);const a=rl(s,i.bind(r),n);return o?Jr(o):dr(),a}function Gp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ir(t,e){if(!qe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))ir(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)ir(t[n],e);else if(vp(t)||qr(t))t.forEach(n=>{ir(n,e)});else if(Ep(t))for(const n in t)ir(t[n],e);return t}function v_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zp(()=>{t.isMounted=!0}),ma(()=>{t.isUnmounting=!0}),t}const Dt=[Function,Array],w_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},setup(t,{slots:e}){const n=ya(),r=v_();let s;return()=>{const i=e.default&&Yp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Vt){o=v;break}}const a=pe(t),{mode:c}=a;if(r.isLeaving)return cc(o);const u=zh(o);if(!u)return cc(o);const l=Wc(u,a,r,n);Gc(u,l);const h=n.subTree,f=h&&zh(h);let p=!1;const{getTransitionKey:d}=u.type;if(d){const v=d();s===void 0?s=v:v!==s&&(s=v,p=!0)}if(f&&f.type!==Vt&&(!rr(u,f)||p)){const v=Wc(f,a,r,n);if(Gc(f,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update()},cc(o);c==="in-out"&&u.type!==Vt&&(v.delayLeave=(y,_,A)=>{const M=Qp(r,f);M[String(f.key)]=f,y._leaveCb=()=>{_(),y._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=A})}return o}}},Xp=w_;function Qp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Wc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:d,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:A}=e,M=String(t.key),O=Qp(n,t),B=(x,Y)=>{x&&Ot(x,r,9,Y)},ne=(x,Y)=>{const ue=Y[1];B(x,Y),Q(x)?x.every(Ee=>Ee.length<=1)&&ue():x.length<=1&&ue()},G={mode:i,persisted:o,beforeEnter(x){let Y=a;if(!n.isMounted)if(s)Y=v||a;else return;x._leaveCb&&x._leaveCb(!0);const ue=O[M];ue&&rr(t,ue)&&ue.el._leaveCb&&ue.el._leaveCb(),B(Y,[x])},enter(x){let Y=c,ue=u,Ee=l;if(!n.isMounted)if(s)Y=y||c,ue=_||u,Ee=A||l;else return;let L=!1;const me=x._enterCb=Oe=>{L||(L=!0,Oe?B(Ee,[x]):B(ue,[x]),G.delayedLeave&&G.delayedLeave(),x._enterCb=void 0)};Y?ne(Y,[x,me]):me()},leave(x,Y){const ue=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return Y();B(h,[x]);let Ee=!1;const L=x._leaveCb=me=>{Ee||(Ee=!0,Y(),me?B(d,[x]):B(p,[x]),x._leaveCb=void 0,O[ue]===t&&delete O[ue])};O[ue]=t,f?ne(f,[x,L]):L()},clone(x){return Wc(x,e,n,r)}};return G}function cc(t){if(da(t))return t=jn(t),t.children=null,t}function zh(t){return da(t)?t.children?t.children[0]:void 0:t}function Gc(t,e){t.shapeFlag&6&&t.component?Gc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Yp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Gt?(o.patchFlag&128&&s++,r=r.concat(Yp(o.children,e,a))):(e||o.type!==Vt)&&r.push(a!=null?jn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function sl(t){return ie(t)?{setup:t,name:t.name}:t}const po=t=>!!t.type.__asyncLoader,da=t=>t.type.__isKeepAlive;function __(t,e){Jp(t,"a",e)}function E_(t,e){Jp(t,"da",e)}function Jp(t,e,n=Qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(pa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)da(s.parent.vnode)&&b_(r,e,n,s),s=s.parent}}function b_(t,e,n,r){const s=pa(e,t,r,!0);ol(()=>{Ku(r[e],s)},n)}function pa(t,e,n=Qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ls(),Jr(n);const a=Ot(e,n,t,o);return dr(),hs(),a});return r?s.unshift(i):s.push(i),i}}const En=t=>(e,n=Qe)=>(!ci||t==="sp")&&pa(t,e,n),il=En("bm"),Zp=En("m"),T_=En("bu"),I_=En("u"),ma=En("bum"),ol=En("um"),S_=En("sp"),C_=En("rtg"),A_=En("rtc");function R_(t,e=Qe){pa("ec",t,e)}function or(t,e){const n=Nt;if(n===null)return t;const r=va(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Ce]=e[i];ie(o)&&(o={mounted:o,updated:o}),o.deep&&ir(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function Yn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ls(),Ot(c,n,8,[t.el,a,t,e]),hs())}}const al="components";function cl(t,e){return tm(al,t,!0,e)||t}const em=Symbol();function k_(t){return We(t)?tm(al,t,!1)||t:t||em}function tm(t,e,n=!0,r=!1){const s=Nt||Qe;if(s){const i=s.type;if(t===al){const a=sE(i,!1);if(a&&(a===e||a===nn(e)||a===aa(nn(e))))return i}const o=Kh(s[t]||i[t],e)||Kh(s.appContext[t],e);return!o&&r?i:o}}function Kh(t,e){return t&&(t[e]||t[nn(e)]||t[aa(nn(e))])}function wO(t,e,n,r){let s;const i=n&&n[r];if(Q(t)||We(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(qe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Xc=t=>t?dm(t)?va(t)||t.proxy:Xc(t.parent):null,ko=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xc(t.parent),$root:t=>Xc(t.root),$emit:t=>t.emit,$options:t=>rm(t),$forceUpdate:t=>t.f||(t.f=()=>Bp(t.update)),$nextTick:t=>t.n||(t.n=si.bind(t.proxy)),$watch:t=>y_.bind(t)}),D_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Ce&&fe(r,e))return o[e]=1,r[e];if(s!==Ce&&fe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&fe(u,e))return o[e]=3,i[e];if(n!==Ce&&fe(n,e))return o[e]=4,n[e];Qc&&(o[e]=0)}}const l=ko[e];let h,f;if(l)return e==="$attrs"&&At(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&fe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,fe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Ce&&fe(s,e)?(s[e]=n,!0):r!==Ce&&fe(r,e)?(r[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&fe(t,o)||e!==Ce&&fe(e,o)||(a=i[0])&&fe(a,o)||fe(r,o)||fe(ko,o)||fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Qc=!0;function N_(t){const e=rm(t),n=t.proxy,r=t.ctx;Qc=!1,e.beforeCreate&&Wh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:p,updated:d,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:A,destroyed:M,unmounted:O,render:B,renderTracked:ne,renderTriggered:G,errorCaptured:x,serverPrefetch:Y,expose:ue,inheritAttrs:Ee,components:L,directives:me,filters:Oe}=e;if(u&&O_(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const ve=o[be];ie(ve)&&(r[be]=ve.bind(n))}if(s){const be=s.call(n,n);qe(be)&&(t.data=Ht(be))}if(Qc=!0,i)for(const be in i){const ve=i[be],ht=ie(ve)?ve.bind(n,n):ie(ve.get)?ve.get.bind(n,n):Ft,Te=!ie(ve)&&ie(ve.set)?ve.set.bind(n):Ft,Ze=oe({get:ht,set:Te});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:ze=>Ze.value=ze})}if(a)for(const be in a)nm(a[be],r,n,be);if(c){const be=ie(c)?c.call(n):c;Reflect.ownKeys(be).forEach(ve=>{Hr(ve,be[ve])})}l&&Wh(l,t,"c");function ke(be,ve){Q(ve)?ve.forEach(ht=>be(ht.bind(n))):ve&&be(ve.bind(n))}if(ke(il,h),ke(Zp,f),ke(T_,p),ke(I_,d),ke(__,v),ke(E_,y),ke(R_,x),ke(A_,ne),ke(C_,G),ke(ma,A),ke(ol,O),ke(S_,Y),Q(ue))if(ue.length){const be=t.exposed||(t.exposed={});ue.forEach(ve=>{Object.defineProperty(be,ve,{get:()=>n[ve],set:ht=>n[ve]=ht})})}else t.exposed||(t.exposed={});B&&t.render===Ft&&(t.render=B),Ee!=null&&(t.inheritAttrs=Ee),L&&(t.components=L),me&&(t.directives=me)}function O_(t,e,n=Ft,r=!1){Q(t)&&(t=Yc(t));for(const s in t){const i=t[s];let o;qe(i)?"default"in i?o=Pt(i.from||s,i.default,!0):o=Pt(i.from||s):o=Pt(i),Me(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Wh(t,e,n){Ot(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function nm(t,e,n,r){const s=r.includes(".")?Gp(n,r):()=>n[r];if(We(t)){const i=e[t];ie(i)&&Ct(s,i)}else if(ie(t))Ct(s,t.bind(n));else if(qe(t))if(Q(t))t.forEach(i=>nm(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&Ct(s,i,t)}}function rm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Do(c,u,o,!0)),Do(c,e,o)),i.set(e,c),c}function Do(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Do(t,i,n,!0),s&&s.forEach(o=>Do(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=P_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const P_={data:Gh,props:tr,emits:tr,methods:tr,computed:tr,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:tr,directives:tr,watch:M_,provide:Gh,inject:x_};function Gh(t,e){return e?t?function(){return it(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function x_(t,e){return tr(Yc(t),Yc(e))}function Yc(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function tr(t,e){return t?it(it(Object.create(null),t),e):e}function M_(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function L_(t,e,n,r=!1){const s={},i={};So(i,ga,1),t.propsDefaults=Object.create(null),sm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qw(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function $_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=pe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(ha(t.emitsOptions,f))continue;const p=e[f];if(c)if(fe(i,f))p!==i[f]&&(i[f]=p,u=!0);else{const d=nn(f);s[d]=Jc(c,a,d,p,t,!1)}else p!==i[f]&&(i[f]=p,u=!0)}}}else{sm(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!fe(e,h)&&((l=us(h))===h||!fe(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=Jc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!fe(e,h)&&!0)&&(delete i[h],u=!0)}u&&mn(t,"set","$attrs")}function sm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ho(c))continue;const u=e[c];let l;s&&fe(s,l=nn(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:ha(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=pe(n),u=a||Ce;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Jc(s,c,h,u[h],t,!fe(u,h))}}return o}function Jc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Jr(s),r=u[n]=c.call(null,e),dr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===us(n))&&(r=!0))}return r}function im(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const l=h=>{c=!0;const[f,p]=im(h,e,!0);it(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return r.set(t,jr),jr;if(Q(i))for(let l=0;l<i.length;l++){const h=nn(i[l]);Xh(h)&&(o[h]=Ce)}else if(i)for(const l in i){const h=nn(l);if(Xh(h)){const f=i[l],p=o[h]=Q(f)||ie(f)?{type:f}:f;if(p){const d=Jh(Boolean,p.type),v=Jh(String,p.type);p[0]=d>-1,p[1]=v<0||d<v,(d>-1||fe(p,"default"))&&a.push(h)}}}const u=[o,a];return r.set(t,u),u}function Xh(t){return t[0]!=="$"}function Qh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Yh(t,e){return Qh(t)===Qh(e)}function Jh(t,e){return Q(e)?e.findIndex(n=>Yh(n,t)):ie(e)&&Yh(e,t)?0:-1}const om=t=>t[0]==="_"||t==="$stable",ul=t=>Q(t)?t.map(Xt):[Xt(t)],U_=(t,e,n)=>{if(e._n)return e;const r=oi((...s)=>ul(e(...s)),n);return r._c=!1,r},am=(t,e,n)=>{const r=t._ctx;for(const s in t){if(om(s))continue;const i=t[s];if(ie(i))e[s]=U_(s,i,r);else if(i!=null){const o=ul(i);e[s]=()=>o}}},cm=(t,e)=>{const n=ul(e);t.slots.default=()=>n},F_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),So(e,"_",n)):am(e,t.slots={})}else t.slots={},e&&cm(t,e);So(t.slots,ga,1)},V_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(it(s,e),!n&&a===1&&delete s._):(i=!e.$stable,am(e,s)),o=e}else e&&(cm(t,e),o={default:1});if(i)for(const a in s)!om(a)&&!(a in o)&&delete s[a]};function um(){return{app:null,config:{isNativeTag:yw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let B_=0;function j_(t,e){return function(r,s=null){ie(r)||(r=Object.assign({},r)),s!=null&&!qe(s)&&(s=null);const i=um(),o=new Set;let a=!1;const c=i.app={_uid:B_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:oE,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(c,...l)):ie(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=nt(r,s);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,va(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Zc(t,e,n,r,s=!1){if(Q(t)){t.forEach((f,p)=>Zc(f,e&&(Q(e)?e[p]:e),n,r,s));return}if(po(r)&&!s)return;const i=r.shapeFlag&4?va(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(We(u)?(l[u]=null,fe(h,u)&&(h[u]=null)):Me(u)&&(u.value=null)),ie(c))$n(c,a,12,[o,l]);else{const f=We(c),p=Me(c);if(f||p){const d=()=>{if(t.f){const v=f?l[c]:c.value;s?Q(v)&&Ku(v,i):Q(v)?v.includes(i)||v.push(i):f?(l[c]=[i],fe(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,fe(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(l[t.k]=o))};o?(d.id=-1,vt(d,n)):d()}}}const vt=g_;function q_(t){return H_(t)}function H_(t,e){const n=Tw();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:p=Ft,cloneNode:d,insertStaticContent:v}=t,y=(m,g,w,I=null,T=null,k=null,P=!1,R=null,D=!!g.dynamicChildren)=>{if(m===g)return;m&&!rr(m,g)&&(I=q(m),kt(m,T,k,!0),m=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:S,ref:K,shapeFlag:F}=g;switch(S){case ll:_(m,g,w,I);break;case Vt:A(m,g,w,I);break;case uc:m==null&&M(g,w,I,P);break;case Gt:me(m,g,w,I,T,k,P,R,D);break;default:F&1?ne(m,g,w,I,T,k,P,R,D):F&6?Oe(m,g,w,I,T,k,P,R,D):(F&64||F&128)&&S.process(m,g,w,I,T,k,P,R,D,Ae)}K!=null&&T&&Zc(K,m&&m.ref,k,g||m,!g)},_=(m,g,w,I)=>{if(m==null)r(g.el=a(g.children),w,I);else{const T=g.el=m.el;g.children!==m.children&&u(T,g.children)}},A=(m,g,w,I)=>{m==null?r(g.el=c(g.children||""),w,I):g.el=m.el},M=(m,g,w,I)=>{[m.el,m.anchor]=v(m.children,g,w,I,m.el,m.anchor)},O=({el:m,anchor:g},w,I)=>{let T;for(;m&&m!==g;)T=f(m),r(m,w,I),m=T;r(g,w,I)},B=({el:m,anchor:g})=>{let w;for(;m&&m!==g;)w=f(m),s(m),m=w;s(g)},ne=(m,g,w,I,T,k,P,R,D)=>{P=P||g.type==="svg",m==null?G(g,w,I,T,k,P,R,D):ue(m,g,T,k,P,R,D)},G=(m,g,w,I,T,k,P,R)=>{let D,S;const{type:K,props:F,shapeFlag:W,transition:ee,patchFlag:de,dirs:Ie}=m;if(m.el&&d!==void 0&&de===-1)D=m.el=d(m.el);else{if(D=m.el=o(m.type,k,F&&F.is,F),W&8?l(D,m.children):W&16&&Y(m.children,D,null,I,T,k&&K!=="foreignObject",P,R),Ie&&Yn(m,null,I,"created"),F){for(const De in F)De!=="value"&&!ho(De)&&i(D,De,null,F[De],k,m.children,I,T,N);"value"in F&&i(D,"value",null,F.value),(S=F.onVnodeBeforeMount)&&Kt(S,I,m)}x(D,m,m.scopeId,P,I)}Ie&&Yn(m,null,I,"beforeMount");const Se=(!T||T&&!T.pendingBranch)&&ee&&!ee.persisted;Se&&ee.beforeEnter(D),r(D,g,w),((S=F&&F.onVnodeMounted)||Se||Ie)&&vt(()=>{S&&Kt(S,I,m),Se&&ee.enter(D),Ie&&Yn(m,null,I,"mounted")},T)},x=(m,g,w,I,T)=>{if(w&&p(m,w),I)for(let k=0;k<I.length;k++)p(m,I[k]);if(T){let k=T.subTree;if(g===k){const P=T.vnode;x(m,P,P.scopeId,P.slotScopeIds,T.parent)}}},Y=(m,g,w,I,T,k,P,R,D=0)=>{for(let S=D;S<m.length;S++){const K=m[S]=R?Rn(m[S]):Xt(m[S]);y(null,K,g,w,I,T,k,P,R)}},ue=(m,g,w,I,T,k,P)=>{const R=g.el=m.el;let{patchFlag:D,dynamicChildren:S,dirs:K}=g;D|=m.patchFlag&16;const F=m.props||Ce,W=g.props||Ce;let ee;w&&Jn(w,!1),(ee=W.onVnodeBeforeUpdate)&&Kt(ee,w,g,m),K&&Yn(g,m,w,"beforeUpdate"),w&&Jn(w,!0);const de=T&&g.type!=="foreignObject";if(S?Ee(m.dynamicChildren,S,R,w,I,de,k):P||ht(m,g,R,null,w,I,de,k,!1),D>0){if(D&16)L(R,g,F,W,w,I,T);else if(D&2&&F.class!==W.class&&i(R,"class",null,W.class,T),D&4&&i(R,"style",F.style,W.style,T),D&8){const Ie=g.dynamicProps;for(let Se=0;Se<Ie.length;Se++){const De=Ie[Se],Mt=F[De],Nr=W[De];(Nr!==Mt||De==="value")&&i(R,De,Mt,Nr,T,m.children,w,I,N)}}D&1&&m.children!==g.children&&l(R,g.children)}else!P&&S==null&&L(R,g,F,W,w,I,T);((ee=W.onVnodeUpdated)||K)&&vt(()=>{ee&&Kt(ee,w,g,m),K&&Yn(g,m,w,"updated")},I)},Ee=(m,g,w,I,T,k,P)=>{for(let R=0;R<g.length;R++){const D=m[R],S=g[R],K=D.el&&(D.type===Gt||!rr(D,S)||D.shapeFlag&70)?h(D.el):w;y(D,S,K,null,I,T,k,P,!0)}},L=(m,g,w,I,T,k,P)=>{if(w!==I){for(const R in I){if(ho(R))continue;const D=I[R],S=w[R];D!==S&&R!=="value"&&i(m,R,S,D,P,g.children,T,k,N)}if(w!==Ce)for(const R in w)!ho(R)&&!(R in I)&&i(m,R,w[R],null,P,g.children,T,k,N);"value"in I&&i(m,"value",w.value,I.value)}},me=(m,g,w,I,T,k,P,R,D)=>{const S=g.el=m?m.el:a(""),K=g.anchor=m?m.anchor:a("");let{patchFlag:F,dynamicChildren:W,slotScopeIds:ee}=g;ee&&(R=R?R.concat(ee):ee),m==null?(r(S,w,I),r(K,w,I),Y(g.children,w,K,T,k,P,R,D)):F>0&&F&64&&W&&m.dynamicChildren?(Ee(m.dynamicChildren,W,w,T,k,P,R),(g.key!=null||T&&g===T.subTree)&&lm(m,g,!0)):ht(m,g,w,K,T,k,P,R,D)},Oe=(m,g,w,I,T,k,P,R,D)=>{g.slotScopeIds=R,m==null?g.shapeFlag&512?T.ctx.activate(g,w,I,P,D):Pe(g,w,I,T,k,P,D):ke(m,g,D)},Pe=(m,g,w,I,T,k,P)=>{const R=m.component=Z_(m,I,T);if(da(m)&&(R.ctx.renderer=Ae),eE(R),R.asyncDep){if(T&&T.registerDep(R,be),!m.el){const D=R.subTree=nt(Vt);A(null,D,g,w)}return}be(R,m,g,w,T,k,P)},ke=(m,g,w)=>{const I=g.component=m.component;if(d_(m,g,w))if(I.asyncDep&&!I.asyncResolved){ve(I,g,w);return}else I.next=g,a_(I.update),I.update();else g.el=m.el,I.vnode=g},be=(m,g,w,I,T,k,P)=>{const R=()=>{if(m.isMounted){let{next:K,bu:F,u:W,parent:ee,vnode:de}=m,Ie=K,Se;Jn(m,!1),K?(K.el=de.el,ve(m,K,P)):K=de,F&&fo(F),(Se=K.props&&K.props.onVnodeBeforeUpdate)&&Kt(Se,ee,K,de),Jn(m,!0);const De=ac(m),Mt=m.subTree;m.subTree=De,y(Mt,De,h(Mt.el),q(Mt),m,T,k),K.el=De.el,Ie===null&&p_(m,De.el),W&&vt(W,T),(Se=K.props&&K.props.onVnodeUpdated)&&vt(()=>Kt(Se,ee,K,de),T)}else{let K;const{el:F,props:W}=g,{bm:ee,m:de,parent:Ie}=m,Se=po(g);if(Jn(m,!1),ee&&fo(ee),!Se&&(K=W&&W.onVnodeBeforeMount)&&Kt(K,Ie,g),Jn(m,!0),F&&re){const De=()=>{m.subTree=ac(m),re(F,m.subTree,m,T,null)};Se?g.type.__asyncLoader().then(()=>!m.isUnmounted&&De()):De()}else{const De=m.subTree=ac(m);y(null,De,w,I,m,T,k),g.el=De.el}if(de&&vt(de,T),!Se&&(K=W&&W.onVnodeMounted)){const De=g;vt(()=>Kt(K,Ie,De),T)}(g.shapeFlag&256||Ie&&po(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&m.a&&vt(m.a,T),m.isMounted=!0,g=w=I=null}},D=m.effect=new Qu(R,()=>Bp(S),m.scope),S=m.update=()=>D.run();S.id=m.uid,Jn(m,!0),S()},ve=(m,g,w)=>{g.component=m;const I=m.vnode.props;m.vnode=g,m.next=null,$_(m,g.props,I,w),V_(m,g.children,w),ls(),la(void 0,m.update),hs()},ht=(m,g,w,I,T,k,P,R,D=!1)=>{const S=m&&m.children,K=m?m.shapeFlag:0,F=g.children,{patchFlag:W,shapeFlag:ee}=g;if(W>0){if(W&128){Ze(S,F,w,I,T,k,P,R,D);return}else if(W&256){Te(S,F,w,I,T,k,P,R,D);return}}ee&8?(K&16&&N(S,T,k),F!==S&&l(w,F)):K&16?ee&16?Ze(S,F,w,I,T,k,P,R,D):N(S,T,k,!0):(K&8&&l(w,""),ee&16&&Y(F,w,I,T,k,P,R,D))},Te=(m,g,w,I,T,k,P,R,D)=>{m=m||jr,g=g||jr;const S=m.length,K=g.length,F=Math.min(S,K);let W;for(W=0;W<F;W++){const ee=g[W]=D?Rn(g[W]):Xt(g[W]);y(m[W],ee,w,null,T,k,P,R,D)}S>K?N(m,T,k,!0,!1,F):Y(g,w,I,T,k,P,R,D,F)},Ze=(m,g,w,I,T,k,P,R,D)=>{let S=0;const K=g.length;let F=m.length-1,W=K-1;for(;S<=F&&S<=W;){const ee=m[S],de=g[S]=D?Rn(g[S]):Xt(g[S]);if(rr(ee,de))y(ee,de,w,null,T,k,P,R,D);else break;S++}for(;S<=F&&S<=W;){const ee=m[F],de=g[W]=D?Rn(g[W]):Xt(g[W]);if(rr(ee,de))y(ee,de,w,null,T,k,P,R,D);else break;F--,W--}if(S>F){if(S<=W){const ee=W+1,de=ee<K?g[ee].el:I;for(;S<=W;)y(null,g[S]=D?Rn(g[S]):Xt(g[S]),w,de,T,k,P,R,D),S++}}else if(S>W)for(;S<=F;)kt(m[S],T,k,!0),S++;else{const ee=S,de=S,Ie=new Map;for(S=de;S<=W;S++){const Tt=g[S]=D?Rn(g[S]):Xt(g[S]);Tt.key!=null&&Ie.set(Tt.key,S)}let Se,De=0;const Mt=W-de+1;let Nr=!1,Oh=0;const Is=new Array(Mt);for(S=0;S<Mt;S++)Is[S]=0;for(S=ee;S<=F;S++){const Tt=m[S];if(De>=Mt){kt(Tt,T,k,!0);continue}let zt;if(Tt.key!=null)zt=Ie.get(Tt.key);else for(Se=de;Se<=W;Se++)if(Is[Se-de]===0&&rr(Tt,g[Se])){zt=Se;break}zt===void 0?kt(Tt,T,k,!0):(Is[zt-de]=S+1,zt>=Oh?Oh=zt:Nr=!0,y(Tt,g[zt],w,null,T,k,P,R,D),De++)}const Ph=Nr?z_(Is):jr;for(Se=Ph.length-1,S=Mt-1;S>=0;S--){const Tt=de+S,zt=g[Tt],xh=Tt+1<K?g[Tt+1].el:I;Is[S]===0?y(null,zt,w,xh,T,k,P,R,D):Nr&&(Se<0||S!==Ph[Se]?ze(zt,w,xh,2):Se--)}}},ze=(m,g,w,I,T=null)=>{const{el:k,type:P,transition:R,children:D,shapeFlag:S}=m;if(S&6){ze(m.component.subTree,g,w,I);return}if(S&128){m.suspense.move(g,w,I);return}if(S&64){P.move(m,g,w,Ae);return}if(P===Gt){r(k,g,w);for(let F=0;F<D.length;F++)ze(D[F],g,w,I);r(m.anchor,g,w);return}if(P===uc){O(m,g,w);return}if(I!==2&&S&1&&R)if(I===0)R.beforeEnter(k),r(k,g,w),vt(()=>R.enter(k),T);else{const{leave:F,delayLeave:W,afterLeave:ee}=R,de=()=>r(k,g,w),Ie=()=>{F(k,()=>{de(),ee&&ee()})};W?W(k,de,Ie):Ie()}else r(k,g,w)},kt=(m,g,w,I=!1,T=!1)=>{const{type:k,props:P,ref:R,children:D,dynamicChildren:S,shapeFlag:K,patchFlag:F,dirs:W}=m;if(R!=null&&Zc(R,null,w,m,!0),K&256){g.ctx.deactivate(m);return}const ee=K&1&&W,de=!po(m);let Ie;if(de&&(Ie=P&&P.onVnodeBeforeUnmount)&&Kt(Ie,g,m),K&6)j(m.component,w,I);else{if(K&128){m.suspense.unmount(w,I);return}ee&&Yn(m,null,g,"beforeUnmount"),K&64?m.type.remove(m,g,w,T,Ae,I):S&&(k!==Gt||F>0&&F&64)?N(S,g,w,!1,!0):(k===Gt&&F&384||!T&&K&16)&&N(D,g,w),I&&Ts(m)}(de&&(Ie=P&&P.onVnodeUnmounted)||ee)&&vt(()=>{Ie&&Kt(Ie,g,m),ee&&Yn(m,null,g,"unmounted")},w)},Ts=m=>{const{type:g,el:w,anchor:I,transition:T}=m;if(g===Gt){E(w,I);return}if(g===uc){B(m);return}const k=()=>{s(w),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(m.shapeFlag&1&&T&&!T.persisted){const{leave:P,delayLeave:R}=T,D=()=>P(w,k);R?R(m.el,k,D):D()}else k()},E=(m,g)=>{let w;for(;m!==g;)w=f(m),s(m),m=w;s(g)},j=(m,g,w)=>{const{bum:I,scope:T,update:k,subTree:P,um:R}=m;I&&fo(I),T.stop(),k&&(k.active=!1,kt(P,m,g,w)),R&&vt(R,g),vt(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},N=(m,g,w,I=!1,T=!1,k=0)=>{for(let P=k;P<m.length;P++)kt(m[P],g,w,I,T)},q=m=>m.shapeFlag&6?q(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),we=(m,g,w)=>{m==null?g._vnode&&kt(g._vnode,null,null,!0):y(g._vnode||null,m,g,null,null,null,w),Hp(),g._vnode=m},Ae={p:y,um:kt,m:ze,r:Ts,mt:Pe,mc:Y,pc:ht,pbc:Ee,n:q,o:t};let ae,re;return e&&([ae,re]=e(Ae)),{render:we,hydrate:ae,createApp:j_(we,ae)}}function Jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lm(t,e,n=!1){const r=t.children,s=e.children;if(Q(r)&&Q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rn(s[i]),a.el=o.el),n||lm(o,a))}}function z_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const K_=t=>t.__isTeleport,Gt=Symbol(void 0),ll=Symbol(void 0),Vt=Symbol(void 0),uc=Symbol(void 0),qs=[];let Ut=null;function _t(t=!1){qs.push(Ut=t?null:[])}function W_(){qs.pop(),Ut=qs[qs.length-1]||null}let ai=1;function Zh(t){ai+=t}function hm(t){return t.dynamicChildren=ai>0?Ut||jr:null,W_(),ai>0&&Ut&&Ut.push(t),t}function $t(t,e,n,r,s,i){return hm(X(t,e,n,r,s,i,!0))}function eu(t,e,n,r,s){return hm(nt(t,e,n,r,s,!0))}function tu(t){return t?t.__v_isVNode===!0:!1}function rr(t,e){return t.type===e.type&&t.key===e.key}const ga="__vInternal",fm=({key:t})=>t!=null?t:null,mo=({ref:t,ref_key:e,ref_for:n})=>t!=null?We(t)||Me(t)||ie(t)?{i:Nt,r:t,k:e,f:!!n}:t:null;function X(t,e=null,n=null,r=0,s=null,i=t===Gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fm(e),ref:e&&mo(e),scopeId:Wp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(hl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),ai>0&&!o&&Ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ut.push(c),c}const nt=G_;function G_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===em)&&(t=Vt),tu(t)){const a=jn(t,e,!0);return n&&hl(a,n),ai>0&&!i&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(iE(t)&&(t=t.__vccOpts),e){e=X_(e);let{class:a,style:c}=e;a&&!We(a)&&(e.class=Hu(a)),qe(c)&&(Mp(c)&&!Q(c)&&(c=it({},c)),e.style=qu(c))}const o=We(t)?1:m_(t)?128:K_(t)?64:qe(t)?4:ie(t)?2:0;return X(t,e,n,r,s,o,i,!0)}function X_(t){return t?Mp(t)||ga in t?it({},t):t:null}function jn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Q_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&fm(a),ref:e&&e.ref?n&&s?Q(s)?s.concat(mo(e)):[s,mo(e)]:mo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jn(t.ssContent),ssFallback:t.ssFallback&&jn(t.ssFallback),el:t.el,anchor:t.anchor}}function fs(t=" ",e=0){return nt(ll,null,t,e)}function Mn(t="",e=!1){return e?(_t(),eu(Vt,null,t)):nt(Vt,null,t)}function Xt(t){return t==null||typeof t=="boolean"?nt(Vt):Q(t)?nt(Gt,null,t.slice()):typeof t=="object"?Rn(t):nt(ll,null,String(t))}function Rn(t){return t.el===null||t.memo?t:jn(t)}function hl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),hl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ga in e)?e._ctx=Nt:s===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),r&64?(n=16,e=[fs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Q_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Hu([e.class,r.class]));else if(s==="style")e.style=qu([e.style,r.style]);else if(sa(s)){const i=e[s],o=r[s];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){Ot(t,e,7,[n,r])}const Y_=um();let J_=0;function Z_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Y_,i={uid:J_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:im(r,s),emitsOptions:Kp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=l_.bind(null,i),t.ce&&t.ce(i),i}let Qe=null;const ya=()=>Qe||Nt,Jr=t=>{Qe=t,t.scope.on()},dr=()=>{Qe&&Qe.scope.off(),Qe=null};function dm(t){return t.vnode.shapeFlag&4}let ci=!1;function eE(t,e=!1){ci=e;const{props:n,children:r}=t.vnode,s=dm(t);L_(t,n,s,e),F_(t,r);const i=s?tE(t,e):void 0;return ci=!1,i}function tE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Yr(new Proxy(t.ctx,D_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?rE(t):null;Jr(t),ls();const i=$n(r,t,0,[t.props,s]);if(hs(),dr(),wp(i)){if(i.then(dr,dr),e)return i.then(o=>{ef(t,o,e)}).catch(o=>{ua(o,t,0)});t.asyncDep=i}else ef(t,i,e)}else pm(t,e)}function ef(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=Fp(e)),pm(t,n)}let tf;function pm(t,e,n){const r=t.type;if(!t.render){if(!e&&tf&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=it(it({isCustomElement:i,delimiters:a},o),c);r.render=tf(s,u)}}t.render=r.render||Ft}Jr(t),ls(),N_(t),hs(),dr()}function nE(t){return new Proxy(t.attrs,{get(e,n){return At(t,"get","$attrs"),e[n]}})}function rE(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=nE(t))},slots:t.slots,emit:t.emit,expose:e}}function va(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fp(Yr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ko)return ko[n](t)}}))}function sE(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function iE(t){return ie(t)&&"__vccOpts"in t}const oe=(t,e)=>s_(t,e,ci);function wa(t,e,n){const r=arguments.length;return r===2?qe(e)&&!Q(e)?tu(e)?nt(t,null,[e]):nt(t,e):nt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&tu(n)&&(n=[n]),nt(t,e,n))}const oE="3.2.37",aE="http://www.w3.org/2000/svg",sr=typeof document<"u"?document:null,nf=sr&&sr.createElement("template"),cE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?sr.createElementNS(aE,t):sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{nf.innerHTML=r?`<svg>${t}</svg>`:t;const a=nf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function uE(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function lE(t,e,n){const r=t.style,s=We(n);if(n&&!s){for(const i in n)nu(r,i,n[i]);if(e&&!We(e))for(const i in e)n[i]==null&&nu(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const rf=/\s*!important$/;function nu(t,e,n){if(Q(n))n.forEach(r=>nu(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=hE(t,e);rf.test(n)?t.setProperty(us(r),n.replace(rf,""),"important"):t[r]=n}}const sf=["Webkit","Moz","ms"],lc={};function hE(t,e){const n=lc[e];if(n)return n;let r=nn(e);if(r!=="filter"&&r in t)return lc[e]=r;r=aa(r);for(let s=0;s<sf.length;s++){const i=sf[s]+r;if(i in t)return lc[e]=i}return e}const of="http://www.w3.org/1999/xlink";function fE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(of,e.slice(6,e.length)):t.setAttributeNS(of,e,n);else{const i=dw(e);n==null||i&&!gp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function dE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=gp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[mm,pE]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ru=0;const mE=Promise.resolve(),gE=()=>{ru=0},yE=()=>ru||(mE.then(gE),ru=mm());function $r(t,e,n,r){t.addEventListener(e,n,r)}function vE(t,e,n,r){t.removeEventListener(e,n,r)}function wE(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=_E(e);if(r){const u=i[e]=EE(r,s);$r(t,a,u,c)}else o&&(vE(t,a,o,c),i[e]=void 0)}}const af=/(?:Once|Passive|Capture)$/;function _E(t){let e;if(af.test(t)){e={};let n;for(;n=t.match(af);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[us(t.slice(2)),e]}function EE(t,e){const n=r=>{const s=r.timeStamp||mm();(pE||s>=n.attached-1)&&Ot(bE(r,n.value),e,5,[r])};return n.value=t,n.attached=yE(),n}function bE(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const cf=/^on[a-z]/,TE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?uE(t,r,s):e==="style"?lE(t,n,r):sa(e)?zu(e)||wE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):IE(t,e,r,s))?dE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fE(t,e,r,s))};function IE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&cf.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||cf.test(e)&&We(n)?!1:e in t}const Tn="transition",Ss="animation",fl=(t,{slots:e})=>wa(Xp,SE(t),e);fl.displayName="Transition";const gm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};fl.props=it({},Xp.props,gm);const Zn=(t,e=[])=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},uf=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function SE(t){const e={};for(const L in t)L in gm||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,d=CE(s),v=d&&d[0],y=d&&d[1],{onBeforeEnter:_,onEnter:A,onEnterCancelled:M,onLeave:O,onLeaveCancelled:B,onBeforeAppear:ne=_,onAppear:G=A,onAppearCancelled:x=M}=e,Y=(L,me,Oe)=>{er(L,me?l:a),er(L,me?u:o),Oe&&Oe()},ue=(L,me)=>{L._isLeaving=!1,er(L,h),er(L,p),er(L,f),me&&me()},Ee=L=>(me,Oe)=>{const Pe=L?G:A,ke=()=>Y(me,L,Oe);Zn(Pe,[me,ke]),lf(()=>{er(me,L?c:i),In(me,L?l:a),uf(Pe)||hf(me,r,v,ke)})};return it(e,{onBeforeEnter(L){Zn(_,[L]),In(L,i),In(L,o)},onBeforeAppear(L){Zn(ne,[L]),In(L,c),In(L,u)},onEnter:Ee(!1),onAppear:Ee(!0),onLeave(L,me){L._isLeaving=!0;const Oe=()=>ue(L,me);In(L,h),kE(),In(L,f),lf(()=>{!L._isLeaving||(er(L,h),In(L,p),uf(O)||hf(L,r,y,Oe))}),Zn(O,[L,Oe])},onEnterCancelled(L){Y(L,!1),Zn(M,[L])},onAppearCancelled(L){Y(L,!0),Zn(x,[L])},onLeaveCancelled(L){ue(L),Zn(B,[L])}})}function CE(t){if(t==null)return null;if(qe(t))return[hc(t.enter),hc(t.leave)];{const e=hc(t);return[e,e]}}function hc(t){return Co(t)}function In(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function er(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function lf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let AE=0;function hf(t,e,n,r){const s=t._endId=++AE,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=RE(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),i()},f=p=>{p.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function RE(t,e){const n=window.getComputedStyle(t),r=d=>(n[d]||"").split(", "),s=r(Tn+"Delay"),i=r(Tn+"Duration"),o=ff(s,i),a=r(Ss+"Delay"),c=r(Ss+"Duration"),u=ff(a,c);let l=null,h=0,f=0;e===Tn?o>0&&(l=Tn,h=o,f=i.length):e===Ss?u>0&&(l=Ss,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?Tn:Ss:null,f=l?l===Tn?i.length:c.length:0);const p=l===Tn&&/\b(transform|all)(,|$)/.test(n[Tn+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:p}}function ff(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>df(n)+df(t[r])))}function df(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function kE(){return document.body.offsetHeight}const pf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>fo(e,n):e};function DE(t){t.target.composing=!0}function mf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ar={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=pf(s);const i=r||s.props&&s.props.type==="number";$r(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Co(a)),t._assign(a)}),n&&$r(t,"change",()=>{t.value=t.value.trim()}),e||($r(t,"compositionstart",DE),$r(t,"compositionend",mf),$r(t,"change",mf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=pf(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Co(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},NE=["ctrl","shift","alt","meta"],OE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>NE.some(n=>t[`${n}Key`]&&!e.includes(n))},ym=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=OE[e[s]];if(i&&i(n,e))return}return t(n,...r)},PE=it({patchProp:TE},cE);let gf;function xE(){return gf||(gf=q_(PE))}const ME=(...t)=>{const e=xE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=LE(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function LE(t){return We(t)?document.querySelector(t):t}var $E=!1;/*!
  * pinia v2.0.21
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let vm;const _a=t=>vm=t,wm=Symbol();function su(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hs||(Hs={}));function UE(){const t=Tp(!0),e=t.run(()=>Le({}));let n=[],r=[];const s=Yr({install(i){_a(s),s._a=i,i.provide(wm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!$E?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const _m=()=>{};function yf(t,e,n,r=_m){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ya()&&ol(s),s}function Or(t,...e){t.slice().forEach(n=>{n(...e)})}function iu(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];su(s)&&su(r)&&t.hasOwnProperty(n)&&!Me(r)&&!dn(r)?t[n]=iu(s,r):t[n]=r}return t}const FE=Symbol();function VE(t){return!su(t)||!t.hasOwnProperty(FE)}const{assign:an}=Object;function BE(t){return!!(Me(t)&&t.effect)}function jE(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const l=e_(n.state.value[t]);return an(l,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Yr(oe(()=>{_a(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return c=Em(t,u,e,n,r,!0),c.$reset=function(){const h=s?s():{};this.$patch(f=>{an(f,h)})},c}function Em(t,e,n={},r,s,i){let o;const a=an({actions:{}},n),c={deep:!0};let u,l,h=Yr([]),f=Yr([]),p;const d=r.state.value[t];!i&&!d&&(r.state.value[t]={}),Le({});let v;function y(G){let x;u=l=!1,typeof G=="function"?(G(r.state.value[t]),x={type:Hs.patchFunction,storeId:t,events:p}):(iu(r.state.value[t],G),x={type:Hs.patchObject,payload:G,storeId:t,events:p});const Y=v=Symbol();si().then(()=>{v===Y&&(u=!0)}),l=!0,Or(h,x,r.state.value[t])}const _=_m;function A(){o.stop(),h=[],f=[],r._s.delete(t)}function M(G,x){return function(){_a(r);const Y=Array.from(arguments),ue=[],Ee=[];function L(Pe){ue.push(Pe)}function me(Pe){Ee.push(Pe)}Or(f,{args:Y,name:G,store:B,after:L,onError:me});let Oe;try{Oe=x.apply(this&&this.$id===t?this:B,Y)}catch(Pe){throw Or(Ee,Pe),Pe}return Oe instanceof Promise?Oe.then(Pe=>(Or(ue,Pe),Pe)).catch(Pe=>(Or(Ee,Pe),Promise.reject(Pe))):(Or(ue,Oe),Oe)}}const O={_p:r,$id:t,$onAction:yf.bind(null,f),$patch:y,$reset:_,$subscribe(G,x={}){const Y=yf(h,G,x.detached,()=>ue()),ue=o.run(()=>Ct(()=>r.state.value[t],Ee=>{(x.flush==="sync"?l:u)&&G({storeId:t,type:Hs.direct,events:p},Ee)},an({},c,x)));return Y},$dispose:A},B=Ht(an({},O));r._s.set(t,B);const ne=r._e.run(()=>(o=Tp(),o.run(()=>e())));for(const G in ne){const x=ne[G];if(Me(x)&&!BE(x)||dn(x))i||(d&&VE(x)&&(Me(x)?x.value=d[G]:iu(x,d[G])),r.state.value[t][G]=x);else if(typeof x=="function"){const Y=M(G,x);ne[G]=Y,a.actions[G]=x}}return an(B,ne),an(pe(B),ne),Object.defineProperty(B,"$state",{get:()=>r.state.value[t],set:G=>{y(x=>{an(x,G)})}}),r._p.forEach(G=>{an(B,o.run(()=>G({store:B,app:r._a,pinia:r,options:a})))}),d&&i&&n.hydrate&&n.hydrate(B.$state,d),u=!0,l=!0,B}function qE(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=ya();return a=a||u&&Pt(wm),a&&_a(a),a=vm,a._s.has(r)||(i?Em(r,e,s,a):jE(r,s,a)),a._s.get(r)}return o.$id=r,o}const dl="/chat/assets/Logo.697df3b1.webp";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const bm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},HE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(f=64)),r.push(n[l],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const d=u<<6&192|h;r.push(d)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},zE=function(t){const e=bm(t);return Tm.encodeByteArray(e,!0)},Im=function(t){return zE(t).replace(/\./g,"")},KE=function(t){try{return Tm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function Cm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Am(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GE(){return Ye().indexOf("Electron/")>=0}function Rm(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XE(){return Ye().indexOf("MSAppHost/")>=0}function QE(){return typeof indexedDB=="object"}function YE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="FirebaseError";class sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JE,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ZE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new sn(s,a,r)}}function ZE(t,e){return t.replace(eb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eb=/\{\$([^}]+)}/g;function tb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(vf(i)&&vf(o)){if(!No(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function vf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nb(t,e){const n=new rb(t,e);return n.subscribe.bind(n)}class rb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=fc),s.error===void 0&&(s.error=fc),s.complete===void 0&&(s.complete=fc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fc(){}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class ib{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ab(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ob(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ob(t){return t===nr?void 0:t}function ab(t){return t.instantiationMode==="EAGER"}/**
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
 */class cb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ib(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const ub={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},lb=ge.INFO,hb={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},fb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pl{constructor(e){this.name=e,this._logLevel=lb,this._logHandler=fb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ub[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const db=(t,e)=>e.some(n=>t instanceof n);let wf,_f;function pb(){return wf||(wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mb(){return _f||(_f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const km=new WeakMap,ou=new WeakMap,Dm=new WeakMap,dc=new WeakMap,ml=new WeakMap;function gb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Un(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&km.set(n,t)}).catch(()=>{}),ml.set(e,t),e}function yb(t){if(ou.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ou.set(t,e)}let au={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ou.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vb(t){au=t(au)}function wb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pc(this),e,...n);return Dm.set(r,e.sort?e.sort():[e]),Un(r)}:mb().includes(t)?function(...e){return t.apply(pc(this),e),Un(km.get(this))}:function(...e){return Un(t.apply(pc(this),e))}}function _b(t){return typeof t=="function"?wb(t):(t instanceof IDBTransaction&&yb(t),db(t,pb())?new Proxy(t,au):t)}function Un(t){if(t instanceof IDBRequest)return gb(t);if(dc.has(t))return dc.get(t);const e=_b(t);return e!==t&&(dc.set(t,e),ml.set(e,t)),e}const pc=t=>ml.get(t);function Eb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Un(o.result),c.oldVersion,c.newVersion,Un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const bb=["get","getKey","getAll","getAllKeys","count"],Tb=["put","add","delete","clear"],mc=new Map;function Ef(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mc.get(e))return mc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Tb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return mc.set(e,i),i}vb(t=>({...t,get:(e,n,r)=>Ef(e,n)||t.get(e,n,r),has:(e,n)=>!!Ef(e,n)||t.has(e,n)}));/**
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
 */class Ib{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cu="@firebase/app",bf="0.7.31";/**
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
 */const yr=new pl("@firebase/app"),Cb="@firebase/app-compat",Ab="@firebase/analytics-compat",Rb="@firebase/analytics",kb="@firebase/app-check-compat",Db="@firebase/app-check",Nb="@firebase/auth",Ob="@firebase/auth-compat",Pb="@firebase/database",xb="@firebase/database-compat",Mb="@firebase/functions",Lb="@firebase/functions-compat",$b="@firebase/installations",Ub="@firebase/installations-compat",Fb="@firebase/messaging",Vb="@firebase/messaging-compat",Bb="@firebase/performance",jb="@firebase/performance-compat",qb="@firebase/remote-config",Hb="@firebase/remote-config-compat",zb="@firebase/storage",Kb="@firebase/storage-compat",Wb="@firebase/firestore",Gb="@firebase/firestore-compat",Xb="firebase",Qb="9.9.3";/**
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
 */const Nm="[DEFAULT]",Yb={[cu]:"fire-core",[Cb]:"fire-core-compat",[Rb]:"fire-analytics",[Ab]:"fire-analytics-compat",[Db]:"fire-app-check",[kb]:"fire-app-check-compat",[Nb]:"fire-auth",[Ob]:"fire-auth-compat",[Pb]:"fire-rtdb",[xb]:"fire-rtdb-compat",[Mb]:"fire-fn",[Lb]:"fire-fn-compat",[$b]:"fire-iid",[Ub]:"fire-iid-compat",[Fb]:"fire-fcm",[Vb]:"fire-fcm-compat",[Bb]:"fire-perf",[jb]:"fire-perf-compat",[qb]:"fire-rc",[Hb]:"fire-rc-compat",[zb]:"fire-gcs",[Kb]:"fire-gcs-compat",[Wb]:"fire-fst",[Gb]:"fire-fst-compat","fire-js":"fire-js",[Xb]:"fire-js-all"};/**
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
 */const Oo=new Map,uu=new Map;function Jb(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vr(t){const e=t.name;if(uu.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;uu.set(e,t);for(const n of Oo.values())Jb(n,t);return!0}function Ea(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Zb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wr=new Si("app","Firebase",Zb);/**
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
 */class e0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=Qb;function t0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Nm,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw wr.create("bad-app-name",{appName:String(r)});const s=Oo.get(r);if(s){if(No(t,s.options)&&No(n,s.config))return s;throw wr.create("duplicate-app",{appName:r})}const i=new cb(r);for(const a of uu.values())i.addComponent(a);const o=new e0(t,n,i);return Oo.set(r,o),o}function gl(t=Nm){const e=Oo.get(t);if(!e)throw wr.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let s=(r=Yb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(a.join(" "));return}vr(new qn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const n0="firebase-heartbeat-database",r0=1,ui="firebase-heartbeat-store";let gc=null;function Om(){return gc||(gc=Eb(n0,r0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ui)}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),gc}async function s0(t){var e;try{return(await Om()).transaction(ui).objectStore(ui).get(Pm(t))}catch(n){if(n instanceof sn)yr.warn(n.message);else{const r=wr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});yr.warn(r.message)}}}async function Tf(t,e){var n;try{const s=(await Om()).transaction(ui,"readwrite");return await s.objectStore(ui).put(e,Pm(t)),s.done}catch(r){if(r instanceof sn)yr.warn(r.message);else{const s=wr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});yr.warn(s.message)}}}function Pm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const i0=1024,o0=30*24*60*60*1e3;class a0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new u0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=If();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=o0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=If(),{heartbeatsToSend:n,unsentEntries:r}=c0(this._heartbeatsCache.heartbeats),s=Im(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function If(){return new Date().toISOString().substring(0,10)}function c0(t,e=i0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class u0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QE()?YE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await s0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sf(t){return Im(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function l0(t){vr(new qn("platform-logger",e=>new Ib(e),"PRIVATE")),vr(new qn("heartbeat",e=>new a0(e),"PRIVATE")),Jt(cu,bf,t),Jt(cu,bf,"esm2017"),Jt("fire-js","")}l0("");function yl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function xm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h0=xm,Mm=new Si("auth","Firebase",xm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=new pl("@firebase/auth");function go(t,...e){Cf.logLevel<=ge.ERROR&&Cf.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw vl(t,...e)}function Zt(t,...e){return vl(t,...e)}function f0(t,e,n){const r=Object.assign(Object.assign({},h0()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function vl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mm.create(t,...e)}function J(t,e,...n){if(!t)throw vl(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function gn(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=new Map;function hn(t){gn(t instanceof Function,"Expected a class definition");let e=Af.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Af.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t,e){const n=Ea(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(No(i,e!=null?e:{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function p0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function m0(){return Rf()==="http:"||Rf()==="https:"}function Rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(m0()||Cm()||"connection"in navigator)?navigator.onLine:!0}function y0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Sm()||Am()}get(){return g0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new Ai(3e4,6e4);function Ri(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ki(t,e,n,r,s={}){return $m(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ci(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Lm.fetch()(Um(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function $m(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},v0),e);try{const s=new _0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw eo(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw f0(t,l,u);jt(t,l)}}catch(s){if(s instanceof sn)throw s;jt(t,"network-request-failed")}}async function Di(t,e,n,r,s={}){const i=await ki(t,e,n,r,s);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Um(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?wl(t.config,s):`${t.config.apiScheme}://${s}`}class _0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),w0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(t,e){return ki(t,"POST","/v1/accounts:delete",e)}async function b0(t,e){return ki(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function T0(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=_l(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zs(yc(s.auth_time)),issuedAtTime:zs(yc(s.iat)),expirationTime:zs(yc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yc(t){return Number(t)*1e3}function _l(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=KE(r);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function I0(t){const e=_l(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&S0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function S0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Po(t){var e;const n=t.auth,r=await t.getIdToken(),s=await li(t,b0(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?k0(i.providerUserInfo):[],a=R0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fm(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function A0(t){const e=$e(t);await Po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function k0(t){return t.map(e=>{var{providerId:n}=e,r=yl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(t,e){const n=await $m(t,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Um(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):I0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await D0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hi;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new C0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return T0(this,e)}reload(){return A0(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,E0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,d=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,A=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:M,emailVerified:O,isAnonymous:B,providerData:ne,stsTokenManager:G}=n;J(M&&G,e,"internal-error");const x=hi.fromJSON(this.name,G);J(typeof M=="string",e,"internal-error"),Sn(h,e.name),Sn(f,e.name),J(typeof O=="boolean",e,"internal-error"),J(typeof B=="boolean",e,"internal-error"),Sn(p,e.name),Sn(d,e.name),Sn(v,e.name),Sn(y,e.name),Sn(_,e.name),Sn(A,e.name);const Y=new pr({uid:M,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:B,photoURL:d,phoneNumber:p,tenantId:v,stsTokenManager:x,createdAt:_,lastLoginAt:A});return ne&&Array.isArray(ne)&&(Y.providerData=ne.map(ue=>Object.assign({},ue))),y&&(Y._redirectEventId=y),Y}static async _fromIdTokenResponse(e,n,r=!1){const s=new hi;s.updateFromServerResponse(n);const i=new pr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Po(i),i}}/**
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
 */class Vm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vm.type="NONE";const kf=Vm;/**
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
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(hn(kf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||hn(kf);const o=yo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=pr._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new zr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zm(e))return"Blackberry";if(Km(e))return"Webos";if(El(e))return"Safari";if((e.includes("chrome/")||jm(e))&&!e.includes("edge/"))return"Chrome";if(Hm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bm(t=Ye()){return/firefox\//i.test(t)}function El(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jm(t=Ye()){return/crios\//i.test(t)}function qm(t=Ye()){return/iemobile/i.test(t)}function Hm(t=Ye()){return/android/i.test(t)}function zm(t=Ye()){return/blackberry/i.test(t)}function Km(t=Ye()){return/webos/i.test(t)}function ba(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function N0(t=Ye()){var e;return ba(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function O0(){return Rm()&&document.documentMode===10}function Wm(t=Ye()){return ba(t)||Hm(t)||Km(t)||zm(t)||/windows phone/i.test(t)||qm(t)}function P0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t,e=[]){let n;switch(t){case"Browser":n=Df(Ye());break;case"Worker":n=`${Df(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
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
 */class x0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nf(this),this.idTokenSubscription=new Nf(this),this.beforeStateQueue=new x0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Po(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ta(t){return $e(t)}class Nf{constructor(e){this.auth=e,this.observer=null,this.addObserver=nb(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function L0(t,e){return ki(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(t,e){return Di(t,"POST","/v1/accounts:signInWithPassword",Ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(t,e){return Di(t,"POST","/v1/accounts:signInWithEmailLink",Ri(t,e))}async function F0(t,e){return Di(t,"POST","/v1/accounts:signInWithEmailLink",Ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends bl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new fi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return $0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return U0(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return L0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return F0(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t,e){return Di(t,"POST","/v1/accounts:signInWithIdp",Ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="http://localhost";class _r extends bl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:V0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function j0(t){const e=xs(Ms(t)).link,n=e?xs(Ms(e)).deep_link_id:null,r=xs(Ms(t)).deep_link_id;return(r?xs(Ms(r)).link:null)||r||n||e||t}class Tl{constructor(e){var n,r,s,i,o,a;const c=xs(Ms(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=B0((s=c.mode)!==null&&s!==void 0?s:null);J(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=j0(e);try{return new Tl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return fi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tl.parseLink(n);return J(r,"argument-error"),fi._fromEmailAndCode(e,r.code,r.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ni extends Xm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Ni{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Ni{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Ni{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(t,e){return Di(t,"POST","/v1/accounts:signUp",Ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pr._fromIdTokenResponse(e,r,s),o=Of(r);return new Er({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Of(r);return new Er({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Of(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends sn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new xo(e,n,r,s)}}function Qm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(t,i,e,r):i})}async function H0(t,e,n=!1){const r=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Er._forOperation(t,"link",r)}/**
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
 */async function z0(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await li(t,Qm(s,i,e,t),n);J(o.idToken,s,"internal-error");const a=_l(o.idToken);J(a,s,"internal-error");const{sub:c}=a;return J(t.uid===c,s,"user-mismatch"),Er._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&jt(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(t,e,n=!1){const r="signIn",s=await Qm(t,r,e),i=await Er._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function K0(t,e){return Ym(Ta(t),e)}async function W0(t,e,n){const r=Ta(t),s=await q0(r,{returnSecureToken:!0,email:e,password:n}),i=await Er._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function G0(t,e,n){return K0($e(t),ps.credential(e,n))}function Jm(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function X0(t){return $e(t).signOut()}const Mo="__sak";/**
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
 */class Zm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(){const t=Ye();return El(t)||ba(t)}const Y0=1e3,J0=10;class eg extends Zm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Q0()&&P0(),this.fallbackToPolling=Wm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);O0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,J0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eg.type="LOCAL";const Z0=eg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg extends Zm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tg.type="SESSION";const ng=tg;/**
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
 */function eT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ia(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await eT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ia.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Il("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function nT(t){en().location.href=t}/**
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
 */function rg(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function rT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iT(){return rg()?self:null}/**
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
 */const sg="firebaseLocalStorageDb",oT=1,Lo="firebaseLocalStorage",ig="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sa(t,e){return t.transaction([Lo],e?"readwrite":"readonly").objectStore(Lo)}function aT(){const t=indexedDB.deleteDatabase(sg);return new Oi(t).toPromise()}function hu(){const t=indexedDB.open(sg,oT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lo,{keyPath:ig})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lo)?e(r):(r.close(),await aT(),e(await hu()))})})}async function Pf(t,e,n){const r=Sa(t,!0).put({[ig]:e,value:n});return new Oi(r).toPromise()}async function cT(t,e){const n=Sa(t,!1).get(e),r=await new Oi(n).toPromise();return r===void 0?null:r.value}function xf(t,e){const n=Sa(t,!0).delete(e);return new Oi(n).toPromise()}const uT=800,lT=3;class og{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ia._getInstance(iT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rT(),!this.activeServiceWorker)return;this.sender=new tT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hu();return await Pf(e,Mo,"1"),await xf(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Sa(s,!1).getAll();return new Oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}og.type="LOCAL";const hT=og;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",fT().appendChild(r)})}function pT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ai(3e4,6e4);/**
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
 */function mT(t,e){return e?hn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sl extends bl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gT(t){return Ym(t.auth,new Sl(t),t.bypassAuthState)}function yT(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),z0(n,new Sl(t),t.bypassAuthState)}async function vT(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),H0(n,new Sl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gT;case"linkViaPopup":case"linkViaRedirect":return vT;case"reauthViaPopup":case"reauthViaRedirect":return yT;default:jt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=new Ai(2e3,1e4);class Fr extends ag{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Il();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,wT.get())};e()}}Fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="pendingRedirect",vo=new Map;class ET extends ag{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await bT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bT(t,e){const n=ST(e),r=IT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function TT(t,e){vo.set(t._key(),e)}function IT(t){return hn(t._redirectPersistence)}function ST(t){return yo(_T,t.config.apiKey,t.name)}async function CT(t,e,n=!1){const r=Ta(t),s=mT(r,e),o=await new ET(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=10*60*1e3;class RT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mf(e))}saveEventToCache(e){this.cachedEventUids.add(Mf(e)),this.lastProcessedEventTime=Date.now()}}function Mf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(t,e={}){return ki(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OT=/^https?/;async function PT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DT(t);for(const n of e)try{if(xT(n))return}catch{}jt(t,"unauthorized-domain")}function xT(t){const e=lu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OT.test(n))return!1;if(NT.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const MT=new Ai(3e4,6e4);function Lf(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LT(t){return new Promise((e,n)=>{var r,s,i;function o(){Lf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lf(),n(Zt(t,"network-request-failed"))},timeout:MT.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)o();else{const a=pT("iframefcb");return en()[a]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},dT(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw wo=null,e})}let wo=null;function $T(t){return wo=wo||LT(t),wo}/**
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
 */const UT=new Ai(5e3,15e3),FT="__/auth/iframe",VT="emulator/auth/iframe",BT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qT(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wl(e,VT):`https://${t.config.authDomain}/${FT}`,r={apiKey:e.apiKey,appName:t.name,v:ds},s=jT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ci(r).slice(1)}`}async function HT(t){const e=await $T(t),n=en().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:qT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),a=en().setTimeout(()=>{i(o)},UT.get());function c(){en().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const zT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KT=500,WT=600,GT="_blank",XT="http://localhost";class $f{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QT(t,e,n,r=KT,s=WT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},zT),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ye().toLowerCase();n&&(a=jm(u)?GT:n),Bm(u)&&(e=e||XT,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[p,d])=>`${f}${p}=${d},`,"");if(N0(u)&&a!=="_self")return YT(e||"",a),new $f(null);const h=window.open(e||"",a,l);J(h,t,"popup-blocked");try{h.focus()}catch{}return new $f(h)}function YT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const JT="__/auth/handler",ZT="emulator/auth/handler";function Uf(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:s};if(e instanceof Xm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Ni){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${eI(t)}?${Ci(a).slice(1)}`}function eI({config:t}){return t.emulator?wl(t,ZT):`https://${t.authDomain}/${JT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="webStorageSupport";class tI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ng,this._completeRedirectFn=CT,this._overrideRedirectResult=TT}async _openPopup(e,n,r,s){var i;gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Uf(e,n,r,lu(),s);return QT(e,o,Il())}async _openRedirect(e,n,r,s){return await this._originValidation(e),nT(Uf(e,n,r,lu(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HT(e),r=new RT(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vc,{type:vc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[vc];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wm()||El()||ba()}}const nI=tI;var Ff="@firebase/auth",Vf="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iI(t){vr(new qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{J(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),J(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gm(t)},l=new M0(a,c,u);return p0(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vr(new qn("auth-internal",e=>{const n=Ta(e.getProvider("auth").getImmediate());return(r=>new rI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Ff,Vf,sI(t)),Jt(Ff,Vf,"esm2017")}/**
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
 */function oI(t=gl()){const e=Ea(t,"auth");return e.isInitialized()?e.getImmediate():d0(t,{popupRedirectResolver:nI,persistence:[hT,Z0,ng]})}iI("Browser");var aI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Cl=Cl||{},Z=aI||self;function $o(){}function fu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Pi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function cI(t){return Object.prototype.hasOwnProperty.call(t,wc)&&t[wc]||(t[wc]=++uI)}var wc="closure_uid_"+(1e9*Math.random()>>>0),uI=0;function lI(t,e,n){return t.call.apply(t.bind,arguments)}function hI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=lI:rt=hI,rt.apply(null,arguments)}function to(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function at(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Wn(){this.s=this.s,this.o=this.o}var fI=0;Wn.prototype.s=!1;Wn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),fI!=0)&&cI(this)};Wn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ug=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},lg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function dI(t){e:{var e=sS;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Bf(t){return Array.prototype.concat.apply([],arguments)}function Al(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Uo(t){return/^[\s\xa0]*$/.test(t)}var jf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function pt(t,e){return t.indexOf(e)!=-1}function _c(t,e){return t<e?-1:t>e?1:0}var mt;e:{var qf=Z.navigator;if(qf){var Hf=qf.userAgent;if(Hf){mt=Hf;break e}}mt=""}function Rl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function hg(t){const e={};for(const n in t)e[n]=t[n];return e}var zf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<zf.length;i++)n=zf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function kl(t){return kl[" "](t),t}kl[" "]=$o;function pI(t){var e=yI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var mI=pt(mt,"Opera"),Zr=pt(mt,"Trident")||pt(mt,"MSIE"),dg=pt(mt,"Edge"),du=dg||Zr,pg=pt(mt,"Gecko")&&!(pt(mt.toLowerCase(),"webkit")&&!pt(mt,"Edge"))&&!(pt(mt,"Trident")||pt(mt,"MSIE"))&&!pt(mt,"Edge"),gI=pt(mt.toLowerCase(),"webkit")&&!pt(mt,"Edge");function mg(){var t=Z.document;return t?t.documentMode:void 0}var Fo;e:{var Ec="",bc=function(){var t=mt;if(pg)return/rv:([^\);]+)(\)|;)/.exec(t);if(dg)return/Edge\/([\d\.]+)/.exec(t);if(Zr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(gI)return/WebKit\/(\S+)/.exec(t);if(mI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bc&&(Ec=bc?bc[1]:""),Zr){var Tc=mg();if(Tc!=null&&Tc>parseFloat(Ec)){Fo=String(Tc);break e}}Fo=Ec}var yI={};function vI(){return pI(function(){let t=0;const e=jf(String(Fo)).split("."),n=jf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=_c(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||_c(s[2].length==0,i[2].length==0)||_c(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var pu;if(Z.document&&Zr){var Kf=mg();pu=Kf||parseInt(Fo,10)||void 0}else pu=void 0;var wI=pu,_I=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",$o,e),Z.removeEventListener("test",$o,e)}catch{}return t}();function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};function di(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pg){e:{try{kl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:EI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&di.Z.h.call(this)}}at(di,ut);var EI={2:"touch",3:"pen",4:"mouse"};di.prototype.h=function(){di.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xi="closure_listenable_"+(1e6*Math.random()|0),bI=0;function TI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++bI,this.ca=this.fa=!1}function Ca(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Aa(t){this.src=t,this.g={},this.h=0}Aa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=gu(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new TI(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function mu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ug(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ca(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function gu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Dl="closure_lm_"+(1e6*Math.random()|0),Ic={};function gg(t,e,n,r,s){if(r&&r.once)return vg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)gg(t,e[i],n,r,s);return null}return n=Pl(n),t&&t[xi]?t.N(e,n,Pi(r)?!!r.capture:!!r,s):yg(t,e,n,!1,r,s)}function yg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Pi(s)?!!s.capture:!!s,a=Ol(t);if(a||(t[Dl]=a=new Aa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=II(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)_I||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(_g(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function II(){function t(n){return e.call(t.src,t.listener,n)}var e=SI;return t}function vg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vg(t,e[i],n,r,s);return null}return n=Pl(n),t&&t[xi]?t.O(e,n,Pi(r)?!!r.capture:!!r,s):yg(t,e,n,!0,r,s)}function wg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)wg(t,e[i],n,r,s);else r=Pi(r)?!!r.capture:!!r,n=Pl(n),t&&t[xi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=gu(i,n,r,s),-1<n&&(Ca(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ol(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gu(e,n,r,s)),(n=-1<t?e[t]:null)&&Nl(n))}function Nl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[xi])mu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_g(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ol(e))?(mu(n,t),n.h==0&&(n.src=null,e[Dl]=null)):Ca(t)}}}function _g(t){return t in Ic?Ic[t]:Ic[t]="on"+t}function SI(t,e){if(t.ca)t=!0;else{e=new di(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Nl(t),t=n.call(r,e)}return t}function Ol(t){return t=t[Dl],t instanceof Aa?t:null}var Sc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pl(t){return typeof t=="function"?t:(t[Sc]||(t[Sc]=function(e){return t.handleEvent(e)}),t[Sc])}function Je(){Wn.call(this),this.i=new Aa(this),this.P=this,this.I=null}at(Je,Wn);Je.prototype[xi]=!0;Je.prototype.removeEventListener=function(t,e,n,r){wg(this,t,e,n,r)};function st(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var s=e;e=new ut(r,t),fg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=no(o,r,!0,e)&&s}if(o=e.g=t,s=no(o,r,!0,e)&&s,s=no(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=no(o,r,!1,e)&&s}Je.prototype.M=function(){if(Je.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ca(n[r]);delete t.g[e],t.h--}}this.I=null};Je.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function no(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&mu(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var xl=Z.JSON.stringify;function CI(){var t=bg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class AI{constructor(){this.h=this.g=null}add(e,n){const r=Eg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Eg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new RI,t=>t.reset());class RI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kI(t){Z.setTimeout(()=>{throw t},0)}function Ml(t,e){yu||DI(),vu||(yu(),vu=!0),bg.add(t,e)}var yu;function DI(){var t=Z.Promise.resolve(void 0);yu=function(){t.then(NI)}}var vu=!1,bg=new AI;function NI(){for(var t;t=CI();){try{t.h.call(t.g)}catch(n){kI(n)}var e=Eg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vu=!1}function Ra(t,e){Je.call(this),this.h=t||1,this.g=e||Z,this.j=rt(this.kb,this),this.l=Date.now()}at(Ra,Je);$=Ra.prototype;$.da=!1;$.S=null;$.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),st(this,"tick"),this.da&&(Ll(this),this.start()))}};$.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ll(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}$.M=function(){Ra.Z.M.call(this),Ll(this),delete this.g};function $l(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function Tg(t){t.g=$l(()=>{t.g=null,t.i&&(t.i=!1,Tg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class OI extends Wn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tg(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(t){Wn.call(this),this.h=t,this.g={}}at(pi,Wn);var Wf=[];function Ig(t,e,n,r){Array.isArray(n)||(n&&(Wf[0]=n.toString()),n=Wf);for(var s=0;s<n.length;s++){var i=gg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Sg(t){Rl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Nl(e)},t),t.g={}}pi.prototype.M=function(){pi.Z.M.call(this),Sg(this)};pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ka(){this.g=!0}ka.prototype.Aa=function(){this.g=!1};function PI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function xI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Vr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LI(t,n)+(r?" "+r:"")})}function MI(t,e){t.info(function(){return"TIMEOUT: "+e})}ka.prototype.info=function(){};function LI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return xl(n)}catch{return e}}var Rr={},Gf=null;function Da(){return Gf=Gf||new Je}Rr.Ma="serverreachability";function Cg(t){ut.call(this,Rr.Ma,t)}at(Cg,ut);function mi(t){const e=Da();st(e,new Cg(e))}Rr.STAT_EVENT="statevent";function Ag(t,e){ut.call(this,Rr.STAT_EVENT,t),this.stat=e}at(Ag,ut);function gt(t){const e=Da();st(e,new Ag(e,t))}Rr.Na="timingevent";function Rg(t,e){ut.call(this,Rr.Na,t),this.size=e}at(Rg,ut);function Mi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var Na={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},kg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ul(){}Ul.prototype.h=null;function Xf(t){return t.h||(t.h=t.i())}function Dg(){}var Li={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Fl(){ut.call(this,"d")}at(Fl,ut);function Vl(){ut.call(this,"c")}at(Vl,ut);var wu;function Oa(){}at(Oa,Ul);Oa.prototype.g=function(){return new XMLHttpRequest};Oa.prototype.i=function(){return{}};wu=new Oa;function $i(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new pi(this),this.P=$I,t=du?125:void 0,this.W=new Ra(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ng}function Ng(){this.i=null,this.g="",this.h=!1}var $I=45e3,_u={},Vo={};$=$i.prototype;$.setTimeout=function(t){this.P=t};function Eu(t,e,n){t.K=1,t.v=xa(yn(e)),t.s=n,t.U=!0,Og(t,null)}function Og(t,e){t.F=Date.now(),Ui(t),t.A=yn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Fg(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ng,t.g=iy(t.l,n?e:null,!t.s),0<t.O&&(t.L=new OI(rt(t.Ia,t,t.g),t.O)),Ig(t.V,t.g,"readystatechange",t.gb),e=t.H?hg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),mi(),PI(t.j,t.u,t.A,t.m,t.X,t.s)}$.gb=function(t){t=t.target;const e=this.L;e&&fn(t)==3?e.l():this.Ia(t)};$.Ia=function(t){try{if(t==this.g)e:{const l=fn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||du||this.g&&(this.h.h||this.g.ga()||Zf(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?mi(3):mi(2)),Pa(this);var n=this.g.ba();this.N=n;t:if(Pg(this)){var r=Zf(this.g);t="";var s=r.length,i=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),Ks(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,xI(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Uo(a)){var u=a;break t}}u=null}if(n=u)Vr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bu(this,n);else{this.i=!1,this.o=3,gt(12),cr(this),Ks(this);break e}}this.U?(xg(this,l,o),du&&this.i&&l==3&&(Ig(this.V,this.W,"tick",this.fb),this.W.start())):(Vr(this.j,this.m,o,null),bu(this,o)),l==4&&cr(this),this.i&&!this.I&&(l==4?ty(this.l,this):(this.i=!1,Ui(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),cr(this),Ks(this)}}}catch{}finally{}};function Pg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function xg(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=UI(t,n),s==Vo){e==4&&(t.o=4,gt(14),r=!1),Vr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==_u){t.o=4,gt(15),Vr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Vr(t.j,t.m,s,null),bu(t,s);Pg(t)&&s!=Vo&&s!=_u&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xl(e),e.L=!0,gt(11))):(Vr(t.j,t.m,n,"[Invalid Chunked Response]"),cr(t),Ks(t))}$.fb=function(){if(this.g){var t=fn(this.g),e=this.g.ga();this.C<e.length&&(Pa(this),xg(this,t,e),this.i&&t!=4&&Ui(this))}};function UI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Vo:(n=Number(e.substring(n,r)),isNaN(n)?_u:(r+=1,r+n>e.length?Vo:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,cr(this)};function Ui(t){t.Y=Date.now()+t.P,Mg(t,t.P)}function Mg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Mi(rt(t.eb,t),e)}function Pa(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}$.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(MI(this.j,this.A),this.K!=2&&(mi(),gt(17)),cr(this),this.o=2,Ks(this)):Mg(this,this.Y-t)};function Ks(t){t.l.G==0||t.I||ty(t.l,t)}function cr(t){Pa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ll(t.W),Sg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function bu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Tu(n.i,t))){if(n.I=t.N,!t.J&&Tu(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ho(n),$a(n);else break e;Gl(n),gt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Mi(rt(n.ab,n),6e3));if(1>=jg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ur(n,11)}else if((t.J||n.g==t)&&Ho(n),!Uo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const d=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var i=r.i;!i.g&&(pt(d,"spdy")||pt(d,"quic")||pt(d,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(ql(i,i.h),i.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,xe(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=sy(r,r.H?r.la:null,r.W),o.J){qg(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Pa(a),Ui(a)),r.g=o}else Zg(r);0<n.l.length&&Ua(n)}else u[0]!="stop"&&u[0]!="close"||ur(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ur(n,7):Wl(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}mi(4)}catch{}}function FI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(fu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Bl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fu(t)||typeof t=="string")lg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(fu(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=FI(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function ms(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ms)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}$=ms.prototype;$.R=function(){jl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};$.T=function(){return jl(this),this.g.concat()};function jl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];br(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],br(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}$.get=function(t,e){return br(this.h,t)?this.h[t]:e};$.set=function(t,e){br(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};$.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function br(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Lg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function VI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Tr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Tr){this.g=e!==void 0?e:t.g,Bo(this,t.j),this.s=t.s,jo(this,t.i),qo(this,t.m),this.l=t.l,e=t.h;var n=new gi;n.i=e.i,e.g&&(n.g=new ms(e.g),n.h=e.h),Qf(this,n),this.o=t.o}else t&&(n=String(t).match(Lg))?(this.g=!!e,Bo(this,n[1]||"",!0),this.s=Ws(n[2]||""),jo(this,n[3]||"",!0),qo(this,n[4]),this.l=Ws(n[5]||"",!0),Qf(this,n[6]||"",!0),this.o=Ws(n[7]||"")):(this.g=!!e,this.h=new gi(null,this.g))}Tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ls(e,Yf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ls(e,Yf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ls(n,n.charAt(0)=="/"?zI:HI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ls(n,WI)),t.join("")};function yn(t){return new Tr(t)}function Bo(t,e,n){t.j=n?Ws(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jo(t,e,n){t.i=n?Ws(e,!0):e}function qo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qf(t,e,n){e instanceof gi?(t.h=e,GI(t.h,t.g)):(n||(e=Ls(e,KI)),t.h=new gi(e,t.g))}function xe(t,e,n){t.h.set(e,n)}function xa(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function BI(t){return t instanceof Tr?yn(t):new Tr(t,void 0)}function jI(t,e,n,r){var s=new Tr(null,void 0);return t&&Bo(s,t),e&&jo(s,e),n&&qo(s,n),r&&(s.l=r),s}function Ws(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ls(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yf=/[#\/\?@]/g,HI=/[#\?:]/g,zI=/[#\?]/g,KI=/[#\?@]/g,WI=/#/g;function gi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gn(t){t.g||(t.g=new ms,t.h=0,t.i&&VI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=gi.prototype;$.add=function(t,e){Gn(this),this.i=null,t=gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $g(t,e){Gn(t),e=gs(t,e),br(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,br(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&jl(t)))}function Ug(t,e){return Gn(t),e=gs(t,e),br(t.g.h,e)}$.forEach=function(t,e){Gn(this),this.g.forEach(function(n,r){lg(n,function(s){t.call(e,s,r,this)},this)},this)};$.T=function(){Gn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};$.R=function(t){Gn(this);var e=[];if(typeof t=="string")Ug(this,t)&&(e=Bf(e,this.g.get(gs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Bf(e,t[n])}return e};$.set=function(t,e){return Gn(this),this.i=null,t=gs(this,t),Ug(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Fg(t,e,n){$g(t,e),0<n.length&&(t.i=null,t.g.set(gs(t,e),Al(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function GI(t,e){e&&!t.j&&(Gn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&($g(this,r),Fg(this,s,n))},t)),t.j=e}var XI=class{constructor(t,e){this.h=t,this.g=e}};function Vg(t){this.l=t||QI,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ea&&Z.g.Ea()&&Z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QI=10;function Bg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jg(t){return t.h?1:t.g?t.g.size:0}function Tu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ql(t,e){t.g?t.g.add(e):t.h=e}function qg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Vg.prototype.cancel=function(){if(this.i=Hg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Hg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Al(t.i)}function Hl(){}Hl.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};Hl.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function YI(){this.g=new Hl}function JI(t,e,n){const r=n||"";try{Bl(t,function(s,i){let o=s;Pi(s)&&(o=xl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function ZI(t,e){const n=new ka;if(Z.Image){const r=new Image;r.onload=to(ro,n,r,"TestLoadImage: loaded",!0,e),r.onerror=to(ro,n,r,"TestLoadImage: error",!1,e),r.onabort=to(ro,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=to(ro,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ro(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Fi(t){this.l=t.$b||null,this.j=t.ib||!1}at(Fi,Ul);Fi.prototype.g=function(){return new Ma(this.l,this.j)};Fi.prototype.i=function(t){return function(){return t}}({});function Ma(t,e){Je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(Ma,Je);var zl=0;$=Ma.prototype;$.open=function(t,e){if(this.readyState!=zl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yi(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=zl};$.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function zg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}$.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vi(this):yi(this),this.readyState==3&&zg(this)}};$.Ua=function(t){this.g&&(this.response=this.responseText=t,Vi(this))};$.Ta=function(t){this.g&&(this.response=t,Vi(this))};$.ha=function(){this.g&&Vi(this)};function Vi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yi(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ma.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eS=Z.JSON.parse;function He(t){Je.call(this),this.headers=new ms,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Kg,this.K=this.L=!1}at(He,Je);var Kg="",tS=/^https?$/i,nS=["POST","PUT"];$=He.prototype;$.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():wu.g(),this.C=this.u?Xf(this.u):Xf(wu),this.g.onreadystatechange=rt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Jf(this,i);return}t=n||"";const s=new ms(this.headers);r&&Bl(r,function(i,o){s.set(o,i)}),r=dI(s.T()),n=Z.FormData&&t instanceof Z.FormData,!(0<=ug(nS,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xg(this),0<this.B&&((this.K=rS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.pa,this)):this.A=$l(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Jf(this,i)}};function rS(t){return Zr&&vI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function sS(t){return t.toLowerCase()=="content-type"}$.pa=function(){typeof Cl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function Jf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wg(t),La(t)}function Wg(t){t.D||(t.D=!0,st(t,"complete"),st(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),La(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),La(this,!0)),He.Z.M.call(this)};$.Fa=function(){this.s||(this.F||this.v||this.l?Gg(this):this.cb())};$.cb=function(){Gg(this)};function Gg(t){if(t.h&&typeof Cl<"u"&&(!t.C[1]||fn(t)!=4||t.ba()!=2)){if(t.v&&fn(t)==4)$l(t.Fa,0,t);else if(st(t,"readystatechange"),fn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Lg)[1]||null;if(!s&&Z.self&&Z.self.location){var i=Z.self.location.protocol;s=i.substr(0,i.length-1)}r=!tS.test(s?s.toLowerCase():"")}n=r}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var o=2<fn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Wg(t)}}finally{La(t)}}}}function La(t,e){if(t.g){Xg(t);const n=t.g,r=t.C[0]?$o:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=r}catch{}}}function Xg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function fn(t){return t.g?t.g.readyState:0}$.ba=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};$.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eS(e)}};function Zf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Kg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Da=function(){return this.m};$.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function iS(t){let e="";return Rl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Kl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=iS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function Cs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qg(t){this.za=0,this.l=[],this.h=new ka,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Cs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Cs("baseRetryDelayMs",5e3,t),this.$a=Cs("retryDelaySeedMs",1e4,t),this.Ya=Cs("forwardChannelMaxRetries",2,t),this.ra=Cs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Vg(t&&t.concurrentRequestLimit),this.Ca=new YI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}$=Qg.prototype;$.ma=8;$.G=1;function Wl(t){if(Yg(t),t.G==3){var e=t.V++,n=yn(t.F);xe(n,"SID",t.J),xe(n,"RID",e),xe(n,"TYPE","terminate"),Bi(t,n),e=new $i(t,t.h,e,void 0),e.K=2,e.v=xa(yn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=iy(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ui(e)}ry(t)}$.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function $a(t){t.g&&(Xl(t),t.g.cancel(),t.g=null)}function Yg(t){$a(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Ho(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function Cc(t,e){t.l.push(new XI(t.Za++,e)),t.G==3&&Ua(t)}function Ua(t){Bg(t.i)||t.m||(t.m=!0,Ml(t.Ha,t),t.C=0)}function oS(t,e){return jg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Mi(rt(t.Ha,t,e),ny(t,t.C)),t.C++,!0)}$.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new $i(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=hg(i),fg(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Jg(this,s,e),n=yn(this.F),xe(n,"RID",t),xe(n,"CVER",22),this.D&&xe(n,"X-HTTP-Session-Id",this.D),Bi(this,n),this.o&&i&&Kl(n,this.o,i),ql(this.i,s),this.Ra&&xe(n,"TYPE","init"),this.ja?(xe(n,"$req",e),xe(n,"SID","null"),s.$=!0,Eu(s,n,null)):Eu(s,n,e),this.G=2}}else this.G==3&&(t?ed(this,t):this.l.length==0||Bg(this.i)||ed(this))};function ed(t,e){var n;e?n=e.m:n=t.V++;const r=yn(t.F);xe(r,"SID",t.J),xe(r,"RID",n),xe(r,"AID",t.U),Bi(t,r),t.o&&t.s&&Kl(r,t.o,t.s),n=new $i(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Jg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ql(t.i,n),Eu(n,r,e)}function Bi(t,e){t.j&&Bl({},function(n,r){xe(e,r,n)})}function Jg(t,e,n){n=Math.min(t.l.length,n);var r=t.j?rt(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{JI(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Zg(t){t.g||t.u||(t.Y=1,Ml(t.Ga,t),t.A=0)}function Gl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Mi(rt(t.Ga,t),ny(t,t.A)),t.A++,!0)}$.Ga=function(){if(this.u=null,ey(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Mi(rt(this.bb,this),t)}};$.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,gt(10),$a(this),ey(this))};function Xl(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function ey(t){t.g=new $i(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=yn(t.oa);xe(e,"RID","rpc"),xe(e,"SID",t.J),xe(e,"CI",t.N?"0":"1"),xe(e,"AID",t.U),Bi(t,e),xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Kl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=xa(yn(e)),n.s=null,n.U=!0,Og(n,t)}$.ab=function(){this.v!=null&&(this.v=null,$a(this),Gl(this),gt(19))};function Ho(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function ty(t,e){var n=null;if(t.g==e){Ho(t),Xl(t),t.g=null;var r=2}else if(Tu(t.i,e))n=e.D,qg(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Da(),st(r,new Rg(r,n)),Ua(t)}else Zg(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&oS(t,e)||r==2&&Gl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ur(t,5);break;case 4:ur(t,10);break;case 3:ur(t,6);break;default:ur(t,2)}}}function ny(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ur(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=rt(t.jb,t);n||(n=new Tr("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||Bo(n,"https"),xa(n)),ZI(n.toString(),r)}else gt(2);t.G=0,t.j&&t.j.va(e),ry(t),Yg(t)}$.jb=function(t){t?(this.h.info("Successfully pinged google.com"),gt(2)):(this.h.info("Failed to ping google.com"),gt(1))};function ry(t){t.G=0,t.I=-1,t.j&&((Hg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Al(t.l),t.l.length=0),t.j.ua())}function sy(t,e,n){let r=BI(n);if(r.i!="")e&&jo(r,e+"."+r.i),qo(r,r.m);else{const s=Z.location;r=jI(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Rl(t.aa,function(s,i){xe(r,i,s)}),e=t.D,n=t.sa,e&&n&&xe(r,e,n),xe(r,"VER",t.ma),Bi(t,r),r}function iy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new He(new Fi({ib:!0})):new He(t.qa),e.L=t.H,e}function oy(){}$=oy.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Oa=function(){};function zo(){if(Zr&&!(10<=Number(wI)))throw Error("Environmental error: no available transport.")}zo.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){Je.call(this),this.g=new Qg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Uo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Uo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ys(this)}at(Rt,Je);Rt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ml(rt(t.hb,t,e))),gt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=sy(t,null,t.W),Ua(t)};Rt.prototype.close=function(){Wl(this.g)};Rt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Cc(this.g,e)}else this.v?(e={},e.__data__=xl(t),Cc(this.g,e)):Cc(this.g,t)};Rt.prototype.M=function(){this.g.j=null,delete this.j,Wl(this.g),delete this.g,Rt.Z.M.call(this)};function ay(t){Fl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}at(ay,Fl);function cy(){Vl.call(this),this.status=1}at(cy,Vl);function ys(t){this.g=t}at(ys,oy);ys.prototype.xa=function(){st(this.g,"a")};ys.prototype.wa=function(t){st(this.g,new ay(t))};ys.prototype.va=function(t){st(this.g,new cy)};ys.prototype.ua=function(){st(this.g,"b")};zo.prototype.createWebChannel=zo.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;Na.NO_ERROR=0;Na.TIMEOUT=8;Na.HTTP_ERROR=6;kg.COMPLETE="complete";Dg.EventType=Li;Li.OPEN="a";Li.CLOSE="b";Li.ERROR="c";Li.MESSAGE="d";Je.prototype.listen=Je.prototype.N;He.prototype.listenOnce=He.prototype.O;He.prototype.getLastError=He.prototype.La;He.prototype.getLastErrorCode=He.prototype.Da;He.prototype.getStatus=He.prototype.ba;He.prototype.getResponseJson=He.prototype.Qa;He.prototype.getResponseText=He.prototype.ga;He.prototype.send=He.prototype.ea;var aS=function(){return new zo},cS=function(){return Da()},Ac=Na,uS=kg,lS=Rr,td={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},hS=Fi,so=Dg,fS=He;const nd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new pl("@firebase/firestore");function rd(){return Ir.logLevel}function H(t,...e){if(Ir.logLevel<=ge.DEBUG){const n=e.map(Ql);Ir.debug(`Firestore (${vs}): ${t}`,...n)}}function vn(t,...e){if(Ir.logLevel<=ge.ERROR){const n=e.map(Ql);Ir.error(`Firestore (${vs}): ${t}`,...n)}}function sd(t,...e){if(Ir.logLevel<=ge.WARN){const n=e.map(Ql);Ir.warn(`Firestore (${vs}): ${t}`,...n)}}function Ql(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t="Unexpected state"){const e=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function Re(t,e){t||te()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class mS{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new dS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new wt(e)}}class gS{constructor(e,n,r){this.type="FirstParty",this.user=wt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class yS{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new gS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wS{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.p=n.token,new vS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=_S(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function es(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new je(0,0))}static max(){return new ce(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends vi{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const ES=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends vi{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return ES.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ne.fromString(e))}static fromName(e){return new z(Ne.fromString(e).popFirst(5))}static empty(){return new z(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ne(e.slice()))}}function bS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Hn(s,z.empty(),e)}function TS(t){return new Hn(t.readTime,t.key,-1)}class Hn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hn(ce.min(),z.empty(),-1)}static max(){return new Hn(ce.max(),z.empty(),-1)}}function IS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==SS)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new C((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,n){return new C((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function qi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Yl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ly(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yl.ot=-1;class Ge{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new io(this.root,e,this.comparator,!1)}getReverseIterator(){return new io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new io(this.root,e,this.comparator,!0)}}class io{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:et.RED,this.left=s!=null?s:et.EMPTY,this.right=i!=null?i:et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,r,s){return this}insert(t,e,n){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new od(this.data.getIterator())}getIteratorFrom(e){return new od(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class od{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Ke(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ot(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const AS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(Re(!!t),typeof t=="string"){let e=0;const n=AS.exec(t);if(Re(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fy(t){const e=t.mapValue.fields.__previous_value__;return hy(e)?fy(e):e}function wi(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ns{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ns("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ns&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t){return t==null}function Ko(t){return t===0&&1/t==-1/0}function kS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ko(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hy(t)?4:DS(t)?9007199254740991:10:te()}function rn(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wi(t).isEqual(wi(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=zn(r.timestampValue),o=zn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return ts(r.bytesValue).isEqual(ts(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ve(r.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(r.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ve(r.integerValue)===Ve(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ve(r.doubleValue),o=Ve(s.doubleValue);return i===o?Ko(i)===Ko(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(id(i)!==id(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!rn(i[a],o[a])))return!1;return!0}(t,e);default:return te()}}function _i(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ve(s.integerValue||s.doubleValue),a=Ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ad(t.timestampValue,e.timestampValue);case 4:return ad(wi(t),wi(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(s,i){const o=ts(s),a=ts(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ye(o[c],a[c]);if(u!==0)return u}return ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ye(Ve(s.latitude),Ve(i.latitude));return o!==0?o:ye(Ve(s.longitude),Ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=rs(o[c],a[c]);if(u)return u}return ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===oo.mapValue&&i===oo.mapValue)return 0;if(s===oo.mapValue)return 1;if(i===oo.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ye(a[l],u[l]);if(h!==0)return h;const f=rs(o[a[l]],c[u[l]]);if(f!==0)return f}return ye(a.length,u.length)}(t.mapValue,e.mapValue);default:throw te()}}function ad(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=zn(t),r=zn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Wr(t){return Iu(t)}function Iu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=zn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ts(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Iu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Iu(r.fields[a])}`;return i+"}"}(t.mapValue):te();var e,n}function cd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Su(t){return!!t&&"integerValue"in t}function Jl(t){return!!t&&"arrayValue"in t}function ud(t){return!!t&&"nullValue"in t}function ld(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _o(t){return!!t&&"mapValue"in t}function Gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Gs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());_o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];_o(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){kr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(Gs(this.value))}}function dy(t){const e=[];return kr(t.fields,(n,r)=>{const s=new ct([n]);if(_o(r)){const i=dy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new tt(e,0,ce.min(),ce.min(),Et.empty(),0)}static newFoundDocument(e,n,r){return new tt(e,1,n,ce.min(),r,0)}static newNoDocument(e,n){return new tt(e,2,n,ce.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,ce.min(),Et.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class NS{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function hd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new NS(t,e,n,r,s,i,o)}function Zl(t){const e=se(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Wr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wr(r)).join(",")),e.ut=n}return e.ut}function OS(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Wr(r.value)}`;var r}).join(", ")}]`),Fa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Wr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Wr(n)).join(",")),`Target(${e})`}function eh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!VS(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!rn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dd(t.startAt,e.startAt)&&dd(t.endAt,e.endAt)}function Cu(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class yt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new PS(e,n,r):n==="array-contains"?new LS(e,r):n==="in"?new $S(e,r):n==="not-in"?new US(e,r):n==="array-contains-any"?new FS(e,r):new yt(e,n,r)}static ct(e,n,r){return n==="in"?new xS(e,r):new MS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(rs(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.at(rs(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class PS extends yt{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.at(n)}}class xS extends yt{constructor(e,n){super(e,"in",n),this.keys=py("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MS extends yt{constructor(e,n){super(e,"not-in",n),this.keys=py("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function py(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class LS extends yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jl(n)&&_i(n.arrayValue,this.value)}}class $S extends yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_i(this.value.arrayValue,n)}}class US extends yt{constructor(e,n){super(e,"not-in",n)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_i(this.value.arrayValue,n)}}class FS extends yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}class Wo{constructor(e,n){this.position=e,this.inclusive=n}}class Gr{constructor(e,n="asc"){this.field=e,this.dir=n}}function VS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function fd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function dd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function BS(t,e,n,r,s,i,o,a){return new ws(t,e,n,r,s,i,o,a)}function Va(t){return new ws(t)}function pd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function th(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function nh(t){for(const e of t.filters)if(e.ht())return e.field;return null}function my(t){return t.collectionGroup!==null}function Ei(t){const e=se(t);if(e.lt===null){e.lt=[];const n=nh(e),r=th(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Gr(n)),e.lt.push(new Gr(ct.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Gr(ct.keyField(),i))}}}return e.lt}function wn(t){const e=se(t);if(!e.ft)if(e.limitType==="F")e.ft=hd(e.path,e.collectionGroup,Ei(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ei(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Gr(i.field,o))}const r=e.endAt?new Wo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Wo(e.startAt.position,e.startAt.inclusive):null;e.ft=hd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.ft}function Au(t,e,n){return new ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ba(t,e){return eh(wn(t),wn(e))&&t.limitType===e.limitType}function gy(t){return`${Zl(wn(t))}|lt:${t.limitType}`}function Ru(t){return`Query(target=${OS(wn(t))}; limitType=${t.limitType})`}function rh(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):z.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=fd(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ei(n),r)||n.endAt&&!function(s,i,o){const a=fd(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ei(n),r))}(t,e)}function jS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yy(t){return(e,n)=>{let r=!1;for(const s of Ei(t)){const i=qS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qS(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?rs(a,c):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ko(e)?"-0":e}}function wy(t){return{integerValue:""+t}}function HS(t,e){return kS(e)?wy(e):vy(t,e)}/**
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
 */class ja{constructor(){this._=void 0}}function zS(t,e,n){return t instanceof Go?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof bi?Ey(t,e):t instanceof Ti?by(t,e):function(r,s){const i=_y(r,s),o=md(i)+md(r._t);return Su(i)&&Su(r._t)?wy(o):vy(r.wt,o)}(t,e)}function KS(t,e,n){return t instanceof bi?Ey(t,e):t instanceof Ti?by(t,e):n}function _y(t,e){return t instanceof Xo?Su(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Go extends ja{}class bi extends ja{constructor(e){super(),this.elements=e}}function Ey(t,e){const n=Ty(e);for(const r of t.elements)n.some(s=>rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ti extends ja{constructor(e){super(),this.elements=e}}function by(t,e){let n=Ty(e);for(const r of t.elements)n=n.filter(s=>!rn(s,r));return{arrayValue:{values:n}}}class Xo extends ja{constructor(e,n){super(),this.wt=e,this._t=n}}function md(t){return Ve(t.integerValue||t.doubleValue)}function Ty(t){return Jl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function WS(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof bi&&r instanceof bi||n instanceof Ti&&r instanceof Ti?es(n.elements,r.elements,rn):n instanceof Xo&&r instanceof Xo?rn(n._t,r._t):n instanceof Go&&r instanceof Go}(t.transform,e.transform)}class GS{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qa{}function Iy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cy(t.key,Bt.none()):new Hi(t.key,t.data,Bt.none());{const n=t.data,r=Et.empty();let s=new Ke(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Xn(t.key,r,new xt(s.toArray()),Bt.none())}}function XS(t,e,n){t instanceof Hi?function(r,s,i){const o=r.value.clone(),a=yd(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Xn?function(r,s,i){if(!Eo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=yd(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Sy(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Xs(t,e,n,r){return t instanceof Hi?function(s,i,o,a){if(!Eo(s.precondition,i))return o;const c=s.value.clone(),u=vd(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xn?function(s,i,o,a){if(!Eo(s.precondition,i))return o;const c=vd(s.fieldTransforms,a,i),u=i.data;return u.setAll(Sy(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(s,i,o){return Eo(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function QS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=_y(r.transform,s||null);i!=null&&(n===null&&(n=Et.empty()),n.set(r.field,i))}return n||null}function gd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&es(n,r,(s,i)=>WS(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Hi extends qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xn extends qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yd(t,e,n){const r=new Map;Re(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,KS(o,a,n[s]))}return r}function vd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,zS(i,o,e))}return r}class Cy extends qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YS extends qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,he;function ZS(t){switch(t){default:return te();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Ay(t){if(t===void 0)return vn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Fe.OK:return b.OK;case Fe.CANCELLED:return b.CANCELLED;case Fe.UNKNOWN:return b.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return b.INTERNAL;case Fe.UNAVAILABLE:return b.UNAVAILABLE;case Fe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Fe.NOT_FOUND:return b.NOT_FOUND;case Fe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Fe.ABORTED:return b.ABORTED;case Fe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Fe.DATA_LOSS:return b.DATA_LOSS;default:return te()}}(he=Fe||(Fe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ly(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new Ge(z.comparator);function _n(){return eC}const Ry=new Ge(z.comparator);function $s(...t){let e=Ry;for(const n of t)e=e.insert(n.key,n);return e}function ky(t){let e=Ry;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function lr(){return Qs()}function Dy(){return Qs()}function Qs(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const tC=new Ge(z.comparator),nC=new Ke(z.comparator);function le(...t){let e=nC;for(const n of t)e=e.add(n);return e}const rC=new Ke(ye);function Ny(){return rC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,zi.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ha(ce.min(),r,Ny(),_n(),le())}}class zi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new zi(ot.EMPTY_BYTE_STRING,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r,s){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=s}}class Oy{constructor(e,n){this.targetId=e,this.It=n}}class Py{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wd{constructor(){this.Tt=0,this.Et=Ed(),this.At=ot.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=le(),n=le(),r=le();return this.Et.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te()}}),new zi(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=Ed()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class sC{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=_n(),this.Bt=_d(),this.Lt=new Ke(ye)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,s)=>{this.jt(s)&&n(s)})}zt(e){const n=e.targetId,r=e.It.count,s=this.Ht(n);if(s){const i=s.target;if(Cu(i))if(r===0){const o=new z(i.path);this.Kt(n,o,tt.newNoDocument(o,ce.min()))}else Re(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Cu(a.target)){const c=new z(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,tt.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let r=le();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const s=new Ha(e,n,this.Lt,this.$t,r);return this.$t=_n(),this.Bt=_d(),this.Lt=new Ke(ye),s}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const s=this.Qt(e);this.Xt(e,n)?s.Ct(n,1):s.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new wd,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Ke(ye),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new wd),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function _d(){return new Ge(z.comparator)}function Ed(){return new Ge(z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),oC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class aC{constructor(e,n){this.databaseId=e,this.dt=n}}function Qo(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xy(t,e){return t.dt?e.toBase64():e.toUint8Array()}function cC(t,e){return Qo(t,e.toTimestamp())}function pn(t){return Re(!!t),ce.fromTimestamp(function(e){const n=zn(e);return new je(n.seconds,n.nanos)}(t))}function sh(t,e){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function My(t){const e=Ne.fromString(t);return Re(Uy(e)),e}function ku(t,e){return sh(t.databaseId,e.path)}function Rc(t,e){const n=My(e);if(n.get(1)!==t.databaseId.projectId)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(Ly(n))}function Du(t,e){return sh(t.databaseId,e)}function uC(t){const e=My(t);return e.length===4?Ne.emptyPath():Ly(e)}function Nu(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ly(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bd(t,e,n){return{name:ku(t,e),fields:n.value.mapValue.fields}}function lC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.dt?(Re(u===void 0||typeof u=="string"),ot.fromBase64String(u||"")):(Re(u===void 0||u instanceof Uint8Array),ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?b.UNKNOWN:Ay(c.code);return new U(u,c.message||"")}(o);n=new Py(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Rc(t,r.document.name),i=pn(r.document.updateTime),o=new Et({mapValue:{fields:r.document.fields}}),a=tt.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new bo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Rc(t,r.document),i=r.readTime?pn(r.readTime):ce.min(),o=tt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Rc(t,r.document),i=r.removedTargetIds||[];n=new bo([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new JS(s),o=r.targetId;n=new Oy(o,i)}}return n}function hC(t,e){let n;if(e instanceof Hi)n={update:bd(t,e.key,e.value)};else if(e instanceof Cy)n={delete:ku(t,e.key)};else if(e instanceof Xn)n={update:bd(t,e.key,e.data),updateMask:EC(e.fieldMask)};else{if(!(e instanceof YS))return te();n={verify:ku(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Go)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof bi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ti)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Xo)return{fieldPath:i.field.canonicalString(),increment:o._t};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:cC(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te()}(t,e.precondition)),n}function fC(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?pn(r.updateTime):pn(s);return i.isEqual(ce.min())&&(i=pn(s)),new GS(i,r.transformResults||[])}(n,e))):[]}function dC(t,e){return{documents:[Du(t,e.path)]}}function pC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Du(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Du(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(ld(h.value))return{unaryFilter:{field:Pr(h.field),op:"IS_NAN"}};if(ud(h.value))return{unaryFilter:{field:Pr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(ld(h.value))return{unaryFilter:{field:Pr(h.field),op:"IS_NOT_NAN"}};if(ud(h.value))return{unaryFilter:{field:Pr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(h.field),op:vC(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Pr(l.field),direction:yC(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.dt||Fa(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function mC(t){let e=uC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=$y(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Gr(Br(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Fa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new Wo(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new Wo(f,h)}(n.endAt)),BS(e,s,o,i,a,"F",c,u)}function gC(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function $y(t){return t?t.unaryFilter!==void 0?[_C(t)]:t.fieldFilter!==void 0?[wC(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>$y(e)).reduce((e,n)=>e.concat(n)):te():[]}function yC(t){return iC[t]}function vC(t){return oC[t]}function Pr(t){return{fieldPath:t.canonicalString()}}function Br(t){return ct.fromServerFormat(t.fieldPath)}function wC(t){return yt.create(Br(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(t.fieldFilter.op),t.fieldFilter.value)}function _C(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Br(t.unaryFilter.field);return yt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Br(t.unaryFilter.field);return yt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Br(t.unaryFilter.field);return yt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Br(t.unaryFilter.field);return yt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return te()}}function EC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&XS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Dy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Iy(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,r)=>gd(n,r))&&es(this.baseMutations,e.baseMutations,(n,r)=>gd(n,r))}}class ih{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length);let s=tC;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ih(e,n,r,s)}}/**
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
 */class TC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mr{constructor(e,n,r,s,i=ce.min(),o=ce.min(),a=ot.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.ne=e}}function SC(t){const e=mC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Au(e,e.limit,"L"):e}/**
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
 */class CC{constructor(){this.ze=new AC}addToCollectionParentIndex(e,n){return this.ze.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Hn.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class AC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new ss(0)}static Rn(){return new ss(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&Xs(r.mutation,s,xt.empty(),je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=lr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=$s();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=_n();const o=Qs(),a=Qs();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Xn)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Xs(l.mutation,u,l.mutation.getFieldMask(),je.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new kC(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Qs();let s=new Ge((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||xt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||le()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Dy();l.forEach(f=>{if(!i.has(f)){const p=Iy(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):my(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):C.resolve(lr());let a=-1,c=i;return o.next(u=>C.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?C.resolve():this.getBaseDocument(e,l,h).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,le())).next(l=>({batchId:a,changes:ky(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let s=$s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=$s();return this.indexManager.getCollectionParents(e,s).next(o=>C.forEach(o,a=>{const c=function(u,l){return new ws(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,tt.newInvalidDocument(u)))});let o=$s();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Xs(u.mutation,c,xt.empty(),je.now()),rh(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):C.resolve(tt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return C.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:pn(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:SC(r.bundledQuery),readTime:pn(r.readTime)}}(n)),C.resolve()}}/**
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
 */class OC{constructor(){this.overlays=new Ge(z.comparator),this.Xn=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=lr();return C.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ie(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Xn.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const s=lr(),i=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=lr(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=lr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return C.resolve(a)}ie(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Xn.get(s.largestBatchId).delete(r.key);this.Xn.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new TC(n,r));let i=this.Xn.get(n);i===void 0&&(i=le(),this.Xn.set(n,i)),this.Xn.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.Zn=new Ke(Xe.ts),this.es=new Ke(Xe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Xe(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new z(new Ne([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new z(new Ne([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=le();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return z.comparator(e.key,n.key)||ye(e.ls,n.ls)}static ns(e,n){return ye(e.ls,n.ls)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Ke(Xe.ts)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bC(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.ds=this.ds.add(new Xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ws(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this._s(o.ls);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ye);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),C.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new z(i),0);let a=new Ke(ye);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.ls)),!0)},o),C.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Re(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return C.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Xe(n,0),s=this.ds.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.ps=e,this.docs=new Ge(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=_n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),C.resolve(r)}getAllFromCollection(e,n,r){let s=_n();const i=new z(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||IS(TS(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,s){te()}Is(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MC(this)}getSize(e){return C.resolve(this.size)}}class MC extends RC{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.zn.addEntry(e,s)):this.zn.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.persistence=e,this.Ts=new _s(n=>Zl(n),eh),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Es=0,this.As=new oh,this.targetCount=0,this.Rs=ss.An()}forEachTarget(e,n){return this.Ts.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),C.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.vn(n),C.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Yl(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new LC(this),this.indexManager=new CC,this.remoteDocumentCache=function(r){return new xC(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new IC(n),this.Ds=new NC(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new PC(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new UC(this.Ps.next());return this.referenceDelegate.Cs(),r(s).next(i=>this.referenceDelegate.xs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ns(e,n){return C.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class UC extends CS{constructor(e){super(),this.currentSequenceNumber=e}}class ah{constructor(e){this.persistence=e,this.ks=new oh,this.Ms=null}static Os(e){return new ah(e)}get Fs(){if(this.Ms)return this.Ms;throw te()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),C.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(s=>this.Fs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Fs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Fs,r=>{const s=z.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return C.or([()=>C.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=s}static Vi(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ch(e,n.fromCache,r,s)}}/**
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
 */class FC{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ci(e,n).next(i=>i||this.xi(e,n,s,r)).next(i=>i||this.Ni(e,n))}Ci(e,n){if(pd(n))return C.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Au(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ki(n,a);return this.Mi(n,u,o,c.readTime)?this.Ci(e,Au(n,null,"F")):this.Oi(e,u,n,c)}))})))}xi(e,n,r,s){return pd(n)||s.isEqual(ce.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,r,s)?this.Ni(e,n):(rd()<=ge.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ru(n)),this.Oi(e,o,n,bS(s,-1)))})}ki(e,n){let r=new Ke(yy(e));return n.forEach((s,i)=>{rh(e,i)&&(r=r.add(i))}),r}Mi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(e,n){return rd()<=ge.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ru(n)),this.Di.getDocumentsMatchingQuery(e,n,Hn.min())}Oi(e,n,r,s){return this.Di.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,r,s){this.persistence=e,this.Fi=n,this.wt=s,this.$i=new Ge(ye),this.Bi=new _s(i=>Zl(i),eh),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DC(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function BC(t,e,n,r){return new VC(t,e,n,r)}async function Fy(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=le();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function jC(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=C.resolve();return h.forEach(p=>{f=f.next(()=>u.getEntry(a,p)).next(d=>{const v=c.docVersions.get(p);Re(v!==null),d.version.compareTo(v)<0&&(l.applyToRemoteDocument(d,c),d.isValidDocument()&&(d.setReadTime(c.commitVersion),u.addEntry(d)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=le();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Vy(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function qC(t,e){const n=se(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const a=[];e.targetChanges.forEach((l,h)=>{const f=s.get(h);if(!f)return;a.push(n.Vs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,l.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ot.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),s=s.insert(h,p),function(d,v,y){return d.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-d.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,p,l)&&a.push(n.Vs.updateTargetData(i,p))});let c=_n(),u=le();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(HC(i,o,e.documentUpdates).next(l=>{c=l.Gi,u=l.Qi})),!r.isEqual(ce.min())){const l=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.$i=s,i))}function HC(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=_n();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:s}})}function zC(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function KC(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Vs.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):n.Vs.allocateTargetId(r).next(o=>(s=new mr(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.$i.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function Ou(t,e,n){const r=se(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!qi(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function Td(t,e,n){const r=se(t);let s=ce.min(),i=le();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=se(a),h=l.Bi.get(u);return h!==void 0?C.resolve(l.$i.get(h)):l.Vs.getTargetData(c,u)}(r,o,wn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:le())).next(a=>(WC(r,jS(e),a),{documents:a,ji:i})))}function WC(t,e,n){let r=ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Li.set(e,r)}class Id{constructor(){this.activeTargetIds=Ny()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GC{constructor(){this.Fr=new Id,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Id,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XC{Br(e){}shutdown(){}}/**
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
 */class Sd{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,s,i){const o=this.oo(e,n);H("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.co(e,o,a,r).then(c=>(H("RestConnection","Received: ",c),c),c=>{throw sd("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ao(e,n,r,s,i,o){return this.ro(e,n,r,s,i)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+vs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}oo(e,n){const r=QC[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new fS;a.listenOnce(uS.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ac.NO_ERROR:const u=a.getResponseJson();H("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Ac.TIMEOUT:H("Connection",'RPC "'+e+'" timed out'),o(new U(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ac.HTTP_ERROR:const l=a.getStatus();if(H("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const d=p.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(d)>=0?d:b.UNKNOWN}(h.status);o(new U(f,h.message))}else o(new U(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(b.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{H("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ho(e,n,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=aS(),o=cS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new hS({})),this.uo(a.initMessageHeaders,n,r),Sm()||Am()||GE()||Rm()||XE()||Cm()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");H("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new YC({jr:d=>{h?H("Connection","Not sending because WebChannel is closed:",d):(l||(H("Connection","Opening WebChannel transport."),u.open(),l=!0),H("Connection","WebChannel sending:",d),u.send(d))},Wr:()=>u.close()}),p=(d,v,y)=>{d.listen(v,_=>{try{y(_)}catch(A){setTimeout(()=>{throw A},0)}})};return p(u,so.EventType.OPEN,()=>{h||H("Connection","WebChannel transport opened.")}),p(u,so.EventType.CLOSE,()=>{h||(h=!0,H("Connection","WebChannel transport closed"),f.eo())}),p(u,so.EventType.ERROR,d=>{h||(h=!0,sd("Connection","WebChannel transport errored:",d),f.eo(new U(b.UNAVAILABLE,"The operation could not be completed")))}),p(u,so.EventType.MESSAGE,d=>{var v;if(!h){const y=d.data[0];Re(!!y);const _=y,A=_.error||((v=_[0])===null||v===void 0?void 0:v.error);if(A){H("Connection","WebChannel received error:",A);const M=A.status;let O=function(ne){const G=Fe[ne];if(G!==void 0)return Ay(G)}(M),B=A.message;O===void 0&&(O=b.INTERNAL,B="Unknown error status: "+M+" with message "+A.message),h=!0,f.eo(new U(O,B)),u.close()}else H("Connection","WebChannel received:",y),f.no(y)}}),p(o,lS.STAT_EVENT,d=>{d.stat===td.PROXY?H("Connection","Detected buffering proxy"):d.stat===td.NOPROXY&&H("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){return new aC(t,!0)}class By{constructor(e,n,r=1e3,s=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,r,s,i,o,a,c){this.js=e,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new By(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===n&&this.Uo(r,s)},r=>{e(()=>{const s=new U(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZC extends jy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=lC(this.wt,e),r=function(s){if(!("targetChange"in s))return ce.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ce.min():i.readTime?pn(i.readTime):ce.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=Nu(this.wt),n.addTarget=function(s,i){let o;const a=i.target;return o=Cu(a)?{documents:dC(s,a)}:{query:pC(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=xy(s,i.resumeToken):i.snapshotVersion.compareTo(ce.min())>0&&(o.readTime=Qo(s,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=gC(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=Nu(this.wt),n.removeTarget=e,this.Oo(n)}}class eA extends jy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=fC(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.Jo(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Nu(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hC(this.wt,r))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(b.UNKNOWN,s.toString())})}ao(e,n,r,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(b.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class nA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(vn(n),this.su=!1):H("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{Dr(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=se(a);c.lu.add(4),await Ki(c),c._u.set("Unknown"),c.lu.delete(4),await Ka(c)}(this))})}),this._u=new nA(r,s)}}async function Ka(t){if(Dr(t))for(const e of t.fu)await e(!0)}async function Ki(t){for(const e of t.fu)await e(!1)}function qy(t,e){const n=se(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),hh(n)?lh(n):Es(n).Co()&&uh(n,e))}function Hy(t,e){const n=se(t),r=Es(n);n.hu.delete(e),r.Co()&&zy(n,e),n.hu.size===0&&(r.Co()?r.ko():Dr(n)&&n._u.set("Unknown"))}function uh(t,e){t.wu.Nt(e.targetId),Es(t).Qo(e)}function zy(t,e){t.wu.Nt(e),Es(t).jo(e)}function lh(t){t.wu=new sC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Es(t).start(),t._u.iu()}function hh(t){return Dr(t)&&!Es(t).Do()&&t.hu.size>0}function Dr(t){return se(t).lu.size===0}function Ky(t){t.wu=void 0}async function sA(t){t.hu.forEach((e,n)=>{uh(t,e)})}async function iA(t,e){Ky(t),hh(t)?(t._u.uu(e),lh(t)):t._u.set("Unknown")}async function oA(t,e,n){if(t._u.set("Online"),e instanceof Py&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yo(t,r)}else if(e instanceof bo?t.wu.Ut(e):e instanceof Oy?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(ce.min()))try{const r=await Vy(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.hu.get(c);u&&s.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.hu.get(a);if(!c)return;s.hu.set(a,c.withResumeToken(ot.EMPTY_BYTE_STRING,c.snapshotVersion)),zy(s,a);const u=new mr(c.target,a,1,c.sequenceNumber);uh(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Yo(t,r)}}async function Yo(t,e,n){if(!qi(e))throw e;t.lu.add(1),await Ki(t),t._u.set("Offline"),n||(n=()=>Vy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Ka(t)})}function Wy(t,e){return e().catch(n=>Yo(t,n,e))}async function Wa(t){const e=se(t),n=Kn(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;aA(e);)try{const s=await zC(e.localStore,r);if(s===null){e.au.length===0&&n.ko();break}r=s.batchId,cA(e,s)}catch(s){await Yo(e,s)}Gy(e)&&Xy(e)}function aA(t){return Dr(t)&&t.au.length<10}function cA(t,e){t.au.push(e);const n=Kn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Gy(t){return Dr(t)&&!Kn(t).Do()&&t.au.length>0}function Xy(t){Kn(t).start()}async function uA(t){Kn(t).Xo()}async function lA(t){const e=Kn(t);for(const n of t.au)e.Ho(n.mutations)}async function hA(t,e,n){const r=t.au.shift(),s=ih.from(r,e,n);await Wy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Wa(t)}async function fA(t,e){e&&Kn(t).zo&&await async function(n,r){if(s=r.code,ZS(s)&&s!==b.ABORTED){const i=n.au.shift();Kn(n).No(),await Wy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Wa(n)}var s}(t,e),Gy(t)&&Xy(t)}async function Cd(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Dr(n);n.lu.add(3),await Ki(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Ka(n)}async function dA(t,e){const n=se(t);e?(n.lu.delete(2),await Ka(n)):e||(n.lu.add(2),await Ki(n),n._u.set("Unknown"))}function Es(t){return t.mu||(t.mu=function(e,n,r){const s=se(e);return s.tu(),new ZC(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:sA.bind(null,t),Jr:iA.bind(null,t),Go:oA.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),hh(t)?lh(t):t._u.set("Unknown")):(await t.mu.stop(),Ky(t))})),t.mu}function Kn(t){return t.gu||(t.gu=function(e,n,r){const s=se(e);return s.tu(),new eA(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:uA.bind(null,t),Jr:fA.bind(null,t),Yo:lA.bind(null,t),Jo:hA.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Wa(t)):(await t.gu.stop(),t.au.length>0&&(H("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new fh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dh(t,e){if(vn("AsyncQueue",`${e}: ${t}`),qi(t))return new U(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new Xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.yu=new Ge(z.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):te():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new is(e,n,Xr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ba(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.Iu=void 0,this.listeners=[]}}class mA{constructor(){this.queries=new _s(e=>gy(e),Ba),this.onlineState="Unknown",this.Tu=new Set}}async function Qy(t,e){const n=se(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new pA),s)try{i.Iu=await n.onListen(r)}catch(o){const a=dh(o,`Initialization of query '${Ru(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&ph(n)}async function Yy(t,e){const n=se(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function gA(t,e){const n=se(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&ph(n)}function yA(t,e,n){const r=se(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function ph(t){t.Tu.forEach(e=>{e.next()})}class Jy{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.key=e}}class ev{constructor(e){this.key=e}}class vA{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=le(),this.mutatedKeys=le(),this.Lu=yy(e),this.Uu=new Xr(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new Ad,s=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const f=s.get(l),p=rh(this.query,h)?h:null,d=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;f&&p?f.data.isEqual(p.data)?d!==v&&(r.track({type:3,doc:p}),y=!0):this.Qu(f,p)||(r.track({type:2,doc:p}),y=!0,(c&&this.Lu(p,c)>0||u&&this.Lu(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),y=!0):f&&!p&&(r.track({type:1,doc:f}),y=!0,(c||u)&&(a=!0)),y&&(p?(o=o.add(p),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((u,l)=>function(h,f){const p=d=>{switch(d){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return p(h)-p(f)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new is(this.query,e.Uu,s,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Ad,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=le(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new ev(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new Zy(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=le();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return is.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class wA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _A{constructor(e){this.key=e,this.Xu=!1}}class EA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new _s(a=>gy(a),Ba),this.ec=new Map,this.nc=new Set,this.sc=new Ge(z.comparator),this.ic=new Map,this.rc=new oh,this.oc={},this.uc=new Map,this.cc=ss.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function bA(t,e){const n=OA(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await KC(n.localStore,wn(e));n.isPrimaryClient&&qy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await TA(n,e,r,a==="current")}return s}async function TA(t,e,n,r){t.hc=(l,h,f)=>async function(p,d,v,y){let _=d.view.Ku(v);_.Mi&&(_=await Td(p.localStore,d.query,!1).then(({documents:O})=>d.view.Ku(O,_)));const A=y&&y.targetChanges.get(d.targetId),M=d.view.applyChanges(_,p.isPrimaryClient,A);return kd(p,d.targetId,M.zu),M.snapshot}(t,l,h,f);const s=await Td(t.localStore,e,!0),i=new vA(e,s.ji),o=i.Ku(s.documents),a=zi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);kd(t,n,c.zu);const u=new wA(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function IA(t,e){const n=se(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter(i=>!Ba(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ou(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Hy(n.remoteStore,r.targetId),Pu(n,r.targetId)}).catch(ji)):(Pu(n,r.targetId),await Ou(n.localStore,r.targetId,!0))}async function SA(t,e,n){const r=PA(t);try{const s=await function(i,o){const a=se(i),c=je.now(),u=o.reduce((f,p)=>f.add(p.key),le());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=_n(),d=le();return a.Ui.getEntries(f,u).next(v=>{p=v,p.forEach((y,_)=>{_.isValidDocument()||(d=d.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(v=>{l=v;const y=[];for(const _ of o){const A=QS(_,l.get(_.key).overlayedDocument);A!=null&&y.push(new Xn(_.key,A,dy(A.value.mapValue),Bt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,y,o)}).next(v=>{h=v;const y=v.applyToLocalDocumentSet(l,d);return a.documentOverlayCache.saveOverlays(f,v.batchId,y)})}).then(()=>({batchId:h.batchId,changes:ky(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new Ge(ye)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Wi(r,s.changes),await Wa(r.remoteStore)}catch(s){const i=dh(s,"Failed to persist write");n.reject(i)}}async function tv(t,e){const n=se(t);try{const r=await qC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ic.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?Re(o.Xu):s.removedDocuments.size>0&&(Re(o.Xu),o.Xu=!1))}),await Wi(n,r,e)}catch(r){await ji(r)}}function Rd(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=se(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Eu(o)&&(c=!0)}),c&&ph(a)}(r.eventManager,e),s.length&&r.Zu.Go(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CA(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let o=new Ge(z.comparator);o=o.insert(i,tt.newNoDocument(i,ce.min()));const a=le().add(i),c=new Ha(ce.min(),new Map,new Ke(ye),o,a);await tv(r,c),r.sc=r.sc.remove(i),r.ic.delete(e),mh(r)}else await Ou(r.localStore,e,!1).then(()=>Pu(r,e,n)).catch(ji)}async function AA(t,e){const n=se(t),r=e.batch.batchId;try{const s=await jC(n.localStore,e);rv(n,r,null),nv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wi(n,s)}catch(s){await ji(s)}}async function RA(t,e,n){const r=se(t);try{const s=await function(i,o){const a=se(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(Re(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);rv(r,e,n),nv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wi(r,s)}catch(s){await ji(s)}}function nv(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function rv(t,e,n){const r=se(t);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function Pu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||sv(t,r)})}function sv(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Hy(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),mh(t))}function kd(t,e,n){for(const r of n)r instanceof Zy?(t.rc.addReference(r.key,e),kA(t,r)):r instanceof ev?(H("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||sv(t,r.key)):te()}function kA(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(H("SyncEngine","New document in limbo: "+n),t.nc.add(r),mh(t))}function mh(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new z(Ne.fromString(e)),r=t.cc.next();t.ic.set(r,new _A(n)),t.sc=t.sc.insert(n,r),qy(t.remoteStore,new mr(wn(Va(n.path)),r,2,Yl.ot))}}async function Wi(t,e,n){const r=se(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,c)=>{o.push(r.hc(c,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const l=ch.Vi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.Zu.Go(s),await async function(a,c){const u=se(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>C.forEach(c,h=>C.forEach(h.Pi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>C.forEach(h.vi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!qi(l))throw l;H("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.$i.get(h),p=f.snapshotVersion,d=f.withLastLimboFreeSnapshotVersion(p);u.$i=u.$i.insert(h,d)}}}(r.localStore,i))}async function DA(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Fy(n.localStore,e);n.currentUser=e,function(s,i){s.uc.forEach(o=>{o.forEach(a=>{a.reject(new U(b.CANCELLED,i))})}),s.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wi(n,r.Ki)}}function NA(t,e){const n=se(t),r=n.ic.get(e);if(r&&r.Xu)return le().add(r.key);{let s=le();const i=n.ec.get(e);if(!i)return s;for(const o of i){const a=n.tc.get(o);s=s.unionWith(a.view.qu)}return s}}function OA(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CA.bind(null,e),e.Zu.Go=gA.bind(null,e.eventManager),e.Zu.lc=yA.bind(null,e.eventManager),e}function PA(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RA.bind(null,e),e}class xA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=za(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return BC(this.persistence,new FC,e.initialUser,this.wt)}_c(e){return new $C(ah.Os,this.wt)}dc(e){return new GC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class MA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DA.bind(null,this.syncEngine),await dA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mA}createDatastore(e){const n=za(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new JC(s));var s;return function(i,o,a,c){return new tA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Rd(this.syncEngine,a,0),o=Sd.V()?new Sd:new XC,new rA(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new EA(r,s,i,o,a,c);return u&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);H("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Ki(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=uy.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $A(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Fy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function UA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FA(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Cd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Cd(e.remoteStore,i)),t.onlineComponents=e}async function FA(t){return t.offlineComponents||(H("FirestoreClient","Using default OfflineComponentProvider"),await $A(t,new xA)),t.offlineComponents}async function ov(t){return t.onlineComponents||(H("FirestoreClient","Using default OnlineComponentProvider"),await UA(t,new MA)),t.onlineComponents}function VA(t){return ov(t).then(e=>e.syncEngine)}async function xu(t){const e=await ov(t),n=e.eventManager;return n.onListen=bA.bind(null,e.syncEngine),n.onUnlisten=IA.bind(null,e.syncEngine),n}function BA(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new iv({next:h=>{i.enqueueAndForget(()=>Yy(s,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new U(b.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new U(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Jy(Va(o.path),u,{includeMetadataChanges:!0,Du:!0});return Qy(s,l)}(await xu(t),t.asyncQueue,e,n,r)),r.promise}const Dd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t,e,n){if(!n)throw new U(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jA(t,e,n,r){if(e===!0&&r===!0)throw new U(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nd(t){if(!z.isDocumentKey(t))throw new U(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Od(t){if(z.isDocumentKey(t))throw new U(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ga(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ga(t);throw new U(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,jA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pd({}),this._settingsFrozen=!1,e instanceof ns?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new U(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ns(s.options.projectId)}(e))}get app(){if(!this._app)throw new U(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new pS;switch(n.type){case"gapi":const r=n.client;return Re(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new yS(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new U(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Dd.get(e);n&&(H("ComponentProvider","Removing Datastore"),Dd.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class bs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bs(this.firestore,e,this._query)}}class Vn extends bs{constructor(e,n,r){super(e,n,Va(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new z(e))}withConverter(e){return new Vn(this.firestore,e,this._path)}}function _O(t,e,...n){if(t=$e(t),av("collection","path",e),t instanceof gh){const r=Ne.fromString(e,...n);return Od(r),new Vn(t,null,r)}{if(!(t instanceof lt||t instanceof Vn))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Od(r),new Vn(t.firestore,null,r)}}function Us(t,e,...n){if(t=$e(t),arguments.length===1&&(e=uy.I()),av("doc","path",e),t instanceof gh){const r=Ne.fromString(e,...n);return Nd(r),new lt(t,null,new z(r))}{if(!(t instanceof lt||t instanceof Vn))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Nd(r),new lt(t.firestore,t instanceof Vn?t.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new By(this,"async_queue_retry"),this.Kc=()=>{const n=kc();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=kc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Fn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!qi(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const s=fh.createAndSchedule(this,e,n,r,i=>this.Wc(i));return this.$c.push(s),s}Gc(){this.Bc&&te()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function xd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Cr extends gh{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new qA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||cv(this),this._firestoreClient.terminate()}}function HA(t=gl()){return Ea(t,"firestore").getImmediate()}function yh(t){return t._firestoreClient||cv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cv(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new RS(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new LA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(ot.fromBase64String(e))}catch(n){throw new U(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=/^__.*__$/;class KA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Hi(e,this.data,n,this.fieldTransforms)}}class uv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function lv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class _h{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new _h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.sa(e),s}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.Xc(),s}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Jo(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(lv(this.Zc)&&zA.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class WA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||za(e)}aa(e,n,r,s=!1){return new _h({Zc:e,methodName:n,ca:r,path:ct.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Qa(t){const e=t._freezeSettings(),n=za(t._databaseId);return new WA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hv(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);Eh("Data must be an object, but it was:",o,r);const a=fv(r,o);let c,u;if(i.merge)c=new xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=Mu(e,h,n);if(!o.contains(f))throw new U(b.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);pv(l,f)||l.push(f)}c=new xt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new KA(new Et(a),c,u)}class Ya extends vh{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ya}}function GA(t,e,n,r){const s=t.aa(1,e,n);Eh("Data must be an object, but it was:",s,r);const i=[],o=Et.empty();kr(r,(c,u)=>{const l=bh(e,c,n);u=$e(u);const h=s.ia(l);if(u instanceof Ya)i.push(l);else{const f=Gi(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new xt(i);return new uv(o,a,s.fieldTransforms)}function XA(t,e,n,r,s,i){const o=t.aa(1,e,n),a=[Mu(e,r,n)],c=[s];if(i.length%2!=0)throw new U(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Mu(e,i[f])),c.push(i[f+1]);const u=[],l=Et.empty();for(let f=a.length-1;f>=0;--f)if(!pv(u,a[f])){const p=a[f];let d=c[f];d=$e(d);const v=o.ia(p);if(d instanceof Ya)u.push(p);else{const y=Gi(d,v);y!=null&&(u.push(p),l.set(p,y))}}const h=new xt(u);return new uv(l,h,o.fieldTransforms)}function QA(t,e,n,r=!1){return Gi(n,t.aa(r?4:3,e))}function Gi(t,e){if(dv(t=$e(t)))return Eh("Unsupported field value:",e,t),fv(t,e);if(t instanceof vh)return function(n,r){if(!lv(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Gi(o,r.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=$e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return HS(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=je.fromDate(n);return{timestampValue:Qo(r.wt,s)}}if(n instanceof je){const s=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Qo(r.wt,s)}}if(n instanceof wh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof os)return{bytesValue:xy(r.wt,n._byteString)};if(n instanceof lt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${Ga(n)}`)}(t,e)}function fv(t,e){const n={};return ly(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,(r,s)=>{const i=Gi(s,e.ea(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function dv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof wh||t instanceof os||t instanceof lt||t instanceof vh)}function Eh(t,e,n){if(!dv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ga(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function Mu(t,e,n){if((e=$e(e))instanceof Xa)return e._internalPath;if(typeof e=="string")return bh(t,e);throw Jo("Field path arguments must be of type string or ",t,!1,void 0,n)}const YA=new RegExp("[~\\*/\\[\\]]");function bh(t,e,n){if(e.search(YA)>=0)throw Jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xa(...e.split("."))._internalPath}catch{throw Jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Jo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(b.INVALID_ARGUMENT,a+t+c)}function pv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ja("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JA extends mv{data(){return super.data()}}function Ja(t,e){return typeof e=="string"?bh(t,e):e instanceof Xa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gv extends mv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ja("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class To extends gv{data(e={}){return super.data(e)}}class ZA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Fs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new To(this._firestore,this._userDataWriter,r.key,r,new Fs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new To(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new To(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:eR(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yv{}function EO(t,...e){for(const n of e)t=n._apply(t);return t}class nR extends yv{constructor(e,n,r){super(),this.fa=e,this.da=n,this._a=r,this.type="where"}_apply(e){const n=Qa(e.firestore),r=function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ld(l,u);const p=[];for(const d of l)p.push(Md(a,s,d));h={arrayValue:{values:p}}}else h=Md(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ld(l,u),h=QA(o,i,l,u==="in"||u==="not-in");const f=yt.create(c,u,h);return function(p,d){if(d.ht()){const y=nh(p);if(y!==null&&!y.isEqual(d.field))throw new U(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${y.toString()}' and '${d.field.toString()}'`);const _=th(p);_!==null&&vv(p,d.field,_)}const v=function(y,_){for(const A of y.filters)if(_.indexOf(A.op)>=0)return A.op;return null}(p,function(y){switch(y){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(d.op));if(v!==null)throw v===d.op?new U(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${d.op.toString()}' filter.`):new U(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${d.op.toString()}' filters with '${v.toString()}' filters.`)}(s,f),f}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new bs(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new ws(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function bO(t,e,n){const r=e,s=Ja("where",t);return new nR(s,r,n)}class rR extends yv{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new U(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new U(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Gr(s,i);return function(a,c){if(th(a)===null){const u=nh(a);u!==null&&vv(a,u,c.field)}}(r,o),o}(e._query,this.fa,this.wa);return new bs(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new ws(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function TO(t,e="asc"){const n=e,r=Ja("orderBy",t);return new rR(r,n)}function Md(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new U(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!my(e)&&n.indexOf("/")!==-1)throw new U(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!z.isDocumentKey(r))throw new U(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cd(t,new z(r))}if(n instanceof lt)return cd(t,n._key);throw new U(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ga(n)}.`)}function Ld(t,e){if(!Array.isArray(t)||t.length===0)throw new U(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new U(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function vv(t,e,n){if(!n.isEqual(e))throw new U(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){const r={};return kr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new wh(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wi(e));default:return null}}convertTimestamp(e){const n=zn(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Re(Uy(r));const s=new ns(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t){t=tn(t,lt);const e=tn(t.firestore,Cr);return BA(yh(e),t._key).then(n=>Ev(e,t,n))}class _v extends sR{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function iR(t,e,n){t=tn(t,lt);const r=tn(t.firestore,Cr),s=wv(t.converter,e,n);return Th(r,[hv(Qa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Bt.none())])}function Dc(t,e,n,...r){t=tn(t,lt);const s=tn(t.firestore,Cr),i=Qa(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof Xa?XA(i,"updateDoc",t._key,e,n,r):GA(i,"updateDoc",t._key,e),Th(s,[o.toMutation(t._key,Bt.exists(!0))])}function SO(t,e){const n=tn(t.firestore,Cr),r=Us(t),s=wv(t.converter,e);return Th(n,[hv(Qa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function CO(t,...e){var n,r,s;t=$e(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||xd(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(xd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(t instanceof lt)u=tn(t.firestore,Cr),l=Va(t._key.path),c={next:h=>{e[o]&&e[o](Ev(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=tn(t,bs);u=tn(h.firestore,Cr),l=h._query;const f=new _v(u);c={next:p=>{e[o]&&e[o](new ZA(u,f,h,p))},error:e[o+1],complete:e[o+2]},tR(t._query)}return function(h,f,p,d){const v=new iv(d),y=new Jy(f,v,p);return h.asyncQueue.enqueueAndForget(async()=>Qy(await xu(h),y)),()=>{v.Tc(),h.asyncQueue.enqueueAndForget(async()=>Yy(await xu(h),y))}}(yh(u),l,a,c)}function Th(t,e){return function(n,r){const s=new Fn;return n.asyncQueue.enqueueAndForget(async()=>SA(await VA(n),r,s)),s.promise}(yh(t),e)}function Ev(t,e,n){const r=n.docs.get(e._key),s=new _v(t);return new gv(t,s,e._key,r,new Fs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){vs=n})(ds),vr(new qn("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Cr(s,new mS(n.getProvider("auth-internal")),new wS(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Jt(nd,"3.4.14",t),Jt(nd,"3.4.14","esm2017")})();/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ur=typeof window<"u";function oR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function Nc(t,e){const n={};for(const r in e){const s=e[r];n[r]=qt(s)?s.map(t):t(s)}return n}const Ys=()=>{},qt=Array.isArray,aR=/\/$/,cR=t=>t.replace(aR,"");function Oc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=fR(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function uR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $d(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&as(e.matched[r],n.matched[s])&&bv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function as(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hR(t[n],e[n]))return!1;return!0}function hR(t,e){return qt(t)?Ud(t,e):qt(e)?Ud(e,t):t===e}function Ud(t,e){return qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function fR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ii;(function(t){t.pop="pop",t.push="push"})(Ii||(Ii={}));var Js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Js||(Js={}));function dR(t){if(!t)if(Ur){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cR(t)}const pR=/^[^#]+#/;function mR(t,e){return t.replace(pR,"#")+e}function gR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Za=()=>({left:window.pageXOffset,top:window.pageYOffset});function yR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Fd(t,e){return(history.state?history.state.position-e:-1)+t}const Lu=new Map;function vR(t,e){Lu.set(t,e)}function wR(t){const e=Lu.get(t);return Lu.delete(t),e}let _R=()=>location.protocol+"//"+location.host;function Tv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),$d(c,"")}return $d(n,t)+r+s}function ER(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=Tv(t,location),d=n.value,v=e.value;let y=0;if(f){if(n.value=p,e.value=f,o&&o===d){o=null;return}y=v?f.position-v.position:0}else r(p);s.forEach(_=>{_(n.value,d,{delta:y,type:Ii.pop,direction:y?y>0?Js.forward:Js.back:Js.unknown})})};function c(){o=n.value}function u(f){s.push(f);const p=()=>{const d=s.indexOf(f);d>-1&&s.splice(d,1)};return i.push(p),p}function l(){const{history:f}=window;!f.state||f.replaceState(_e({},f.state,{scroll:Za()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Vd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Za():null}}function bR(t){const{history:e,location:n}=window,r={value:Tv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:_R()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),s.value=u}catch(p){console.error(p),n[l?"replace":"assign"](f)}}function o(c,u){const l=_e({},e.state,Vd(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=_e({},s.value,e.state,{forward:c,scroll:Za()});i(l.current,l,!0);const h=_e({},Vd(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function TR(t){t=dR(t);const e=bR(t),n=ER(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=_e({location:"",base:t,go:r,createHref:mR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function IR(t){return typeof t=="string"||t&&typeof t=="object"}function Iv(t){return typeof t=="string"||typeof t=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Sv=Symbol("");var Bd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bd||(Bd={}));function cs(t,e){return _e(new Error,{type:t,[Sv]:!0},e)}function on(t,e){return t instanceof Error&&Sv in t&&(e==null||!!(t.type&e))}const jd="[^/]+?",SR={sensitive:!1,strict:!1,start:!0,end:!0},CR=/[.+*?^${}()[\]/\\]/g;function AR(t,e){const n=_e({},SR,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const f=u[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(CR,"\\$&"),p+=40;else if(f.type===1){const{value:d,repeatable:v,optional:y,regexp:_}=f;i.push({name:d,repeatable:v,optional:y});const A=_||jd;if(A!==jd){p+=10;try{new RegExp(`(${A})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${d}" (${A}): `+O.message)}}let M=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(M=y&&u.length<2?`(?:/${M})`:"/"+M),y&&(M+="?"),s+=M,p+=20,y&&(p+=-8),v&&(p+=-20),A===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const p=l[f]||"",d=i[f-1];h[d.name]=p&&d.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of f)if(p.type===0)l+=p.value;else if(p.type===1){const{value:d,repeatable:v,optional:y}=p,_=d in u?u[d]:"";if(qt(_)&&!v)throw new Error(`Provided param "${d}" is an array but it is not repeatable (* or + modifiers)`);const A=qt(_)?_.join("/"):_;if(!A)if(y)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${d}"`);l+=A}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function RR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function kR(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=RR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(qd(r))return 1;if(qd(s))return-1}return s.length-r.length}function qd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const DR={type:0,value:""},NR=/[a-zA-Z0-9_]/;function OR(t){if(!t)return[[]];if(t==="/")return[[DR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:NR.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function PR(t,e,n){const r=AR(OR(t.path),n),s=_e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function xR(t,e){const n=[],r=new Map;e=Kd({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,f){const p=!f,d=MR(l);d.aliasOf=f&&f.record;const v=Kd(e,l),y=[d];if("alias"in l){const M=typeof l.alias=="string"?[l.alias]:l.alias;for(const O of M)y.push(_e({},d,{components:f?f.record.components:d.components,path:O,aliasOf:f?f.record:d}))}let _,A;for(const M of y){const{path:O}=M;if(h&&O[0]!=="/"){const B=h.record.path,ne=B[B.length-1]==="/"?"":"/";M.path=h.record.path+(O&&ne+O)}if(_=PR(M,h,v),f?f.alias.push(_):(A=A||_,A!==_&&A.alias.push(_),p&&l.name&&!zd(_)&&o(l.name)),d.children){const B=d.children;for(let ne=0;ne<B.length;ne++)i(B[ne],_,f&&f.children[ne])}f=f||_,c(_)}return A?()=>{o(A)}:Ys}function o(l){if(Iv(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&kR(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Cv(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!zd(l)&&r.set(l.record.name,l)}function u(l,h){let f,p={},d,v;if("name"in l&&l.name){if(f=r.get(l.name),!f)throw cs(1,{location:l});v=f.record.name,p=_e(Hd(h.params,f.keys.filter(A=>!A.optional).map(A=>A.name)),l.params&&Hd(l.params,f.keys.map(A=>A.name))),d=f.stringify(p)}else if("path"in l)d=l.path,f=n.find(A=>A.re.test(d)),f&&(p=f.parse(d),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(A=>A.re.test(h.path)),!f)throw cs(1,{location:l,currentLocation:h});v=f.record.name,p=_e({},h.params,l.params),d=f.stringify(p)}const y=[];let _=f;for(;_;)y.unshift(_.record),_=_.parent;return{name:v,path:d,params:p,matched:y,meta:$R(y)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Hd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function MR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:LR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function LR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function zd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $R(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function Kd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Cv(t,e){return e.children.some(n=>n===t||Cv(t,n))}const Av=/#/g,UR=/&/g,FR=/\//g,VR=/=/g,BR=/\?/g,Rv=/\+/g,jR=/%5B/g,qR=/%5D/g,kv=/%5E/g,HR=/%60/g,Dv=/%7B/g,zR=/%7C/g,Nv=/%7D/g,KR=/%20/g;function Ih(t){return encodeURI(""+t).replace(zR,"|").replace(jR,"[").replace(qR,"]")}function WR(t){return Ih(t).replace(Dv,"{").replace(Nv,"}").replace(kv,"^")}function $u(t){return Ih(t).replace(Rv,"%2B").replace(KR,"+").replace(Av,"%23").replace(UR,"%26").replace(HR,"`").replace(Dv,"{").replace(Nv,"}").replace(kv,"^")}function GR(t){return $u(t).replace(VR,"%3D")}function XR(t){return Ih(t).replace(Av,"%23").replace(BR,"%3F")}function QR(t){return t==null?"":XR(t).replace(FR,"%2F")}function Zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function YR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Rv," "),o=i.indexOf("="),a=Zo(o<0?i:i.slice(0,o)),c=o<0?null:Zo(i.slice(o+1));if(a in e){let u=e[a];qt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Wd(t){let e="";for(let n in t){const r=t[n];if(n=GR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(qt(r)?r.map(i=>i&&$u(i)):[r&&$u(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function JR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=qt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ZR=Symbol(""),Gd=Symbol(""),ec=Symbol(""),Ov=Symbol(""),Uu=Symbol("");function As(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function kn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(cs(4,{from:n,to:e})):h instanceof Error?a(h):IR(h)?a(cs(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Pc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(e1(a)){const u=(a.__vccOpts||a)[e];u&&s.push(kn(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=oR(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&kn(f,n,r,i,o)()}))}}return s}function e1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xd(t){const e=Pt(ec),n=Pt(Ov),r=oe(()=>e.resolve(V(t.to))),s=oe(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(as.bind(null,l));if(f>-1)return f;const p=Qd(c[u-2]);return u>1&&Qd(l)===p&&h[h.length-1].path!==p?h.findIndex(as.bind(null,c[u-2])):f}),i=oe(()=>s.value>-1&&s1(n.params,r.value.params)),o=oe(()=>s.value>-1&&s.value===n.matched.length-1&&bv(n.params,r.value.params));function a(c={}){return r1(c)?e[V(t.replace)?"replace":"push"](V(t.to)).catch(Ys):Promise.resolve()}return{route:r,href:oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const t1=sl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xd,setup(t,{slots:e}){const n=Ht(Xd(t)),{options:r}=Pt(ec),s=oe(()=>({[Yd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:wa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),n1=t1;function r1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function s1(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Qd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yd=(t,e,n)=>t!=null?t:e!=null?e:n,i1=sl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Pt(Uu),s=oe(()=>t.route||r.value),i=Pt(Gd,0),o=oe(()=>{let u=V(i);const{matched:l}=s.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=oe(()=>s.value.matched[o.value]);Hr(Gd,oe(()=>o.value+1)),Hr(ZR,a),Hr(Uu,s);const c=Le();return Ct(()=>[c.value,a.value,t.name],([u,l,h],[f,p,d])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!as(l,p)||!f)&&(l.enterCallbacks[h]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return Jd(n.default,{Component:f,route:u});const p=h.props[l],d=p?p===!0?u.params:typeof p=="function"?p(u):p:null,y=wa(f,_e({},d,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Jd(n.default,{Component:y,route:u})||y}}});function Jd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const o1=i1;function a1(t){const e=xR(t.routes,t),n=t.parseQuery||YR,r=t.stringifyQuery||Wd,s=t.history,i=As(),o=As(),a=As(),c=Yw(Cn);let u=Cn;Ur&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Nc.bind(null,E=>""+E),h=Nc.bind(null,QR),f=Nc.bind(null,Zo);function p(E,j){let N,q;return Iv(E)?(N=e.getRecordMatcher(E),q=j):q=E,e.addRoute(q,N)}function d(E){const j=e.getRecordMatcher(E);j&&e.removeRoute(j)}function v(){return e.getRoutes().map(E=>E.record)}function y(E){return!!e.getRecordMatcher(E)}function _(E,j){if(j=_e({},j||c.value),typeof E=="string"){const re=Oc(n,E,j.path),m=e.resolve({path:re.path},j),g=s.createHref(re.fullPath);return _e(re,m,{params:f(m.params),hash:Zo(re.hash),redirectedFrom:void 0,href:g})}let N;if("path"in E)N=_e({},E,{path:Oc(n,E.path,j.path).path});else{const re=_e({},E.params);for(const m in re)re[m]==null&&delete re[m];N=_e({},E,{params:h(E.params)}),j.params=h(j.params)}const q=e.resolve(N,j),we=E.hash||"";q.params=l(f(q.params));const Ae=uR(r,_e({},E,{hash:WR(we),path:q.path})),ae=s.createHref(Ae);return _e({fullPath:Ae,hash:we,query:r===Wd?JR(E.query):E.query||{}},q,{redirectedFrom:void 0,href:ae})}function A(E){return typeof E=="string"?Oc(n,E,c.value.path):_e({},E)}function M(E,j){if(u!==E)return cs(8,{from:j,to:E})}function O(E){return G(E)}function B(E){return O(_e(A(E),{replace:!0}))}function ne(E){const j=E.matched[E.matched.length-1];if(j&&j.redirect){const{redirect:N}=j;let q=typeof N=="function"?N(E):N;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=A(q):{path:q},q.params={}),_e({query:E.query,hash:E.hash,params:"path"in q?{}:E.params},q)}}function G(E,j){const N=u=_(E),q=c.value,we=E.state,Ae=E.force,ae=E.replace===!0,re=ne(N);if(re)return G(_e(A(re),{state:typeof re=="object"?_e({},we,re.state):we,force:Ae,replace:ae}),j||N);const m=N;m.redirectedFrom=j;let g;return!Ae&&lR(r,q,N)&&(g=cs(16,{to:m,from:q}),Te(q,q,!0,!1)),(g?Promise.resolve(g):Y(m,q)).catch(w=>on(w)?on(w,2)?w:ht(w):be(w,m,q)).then(w=>{if(w){if(on(w,2))return G(_e({replace:ae},A(w.to),{state:typeof w.to=="object"?_e({},we,w.to.state):we,force:Ae}),j||m)}else w=Ee(m,q,!0,ae,we);return ue(m,q,w),w})}function x(E,j){const N=M(E,j);return N?Promise.reject(N):Promise.resolve()}function Y(E,j){let N;const[q,we,Ae]=c1(E,j);N=Pc(q.reverse(),"beforeRouteLeave",E,j);for(const re of q)re.leaveGuards.forEach(m=>{N.push(kn(m,E,j))});const ae=x.bind(null,E,j);return N.push(ae),xr(N).then(()=>{N=[];for(const re of i.list())N.push(kn(re,E,j));return N.push(ae),xr(N)}).then(()=>{N=Pc(we,"beforeRouteUpdate",E,j);for(const re of we)re.updateGuards.forEach(m=>{N.push(kn(m,E,j))});return N.push(ae),xr(N)}).then(()=>{N=[];for(const re of E.matched)if(re.beforeEnter&&!j.matched.includes(re))if(qt(re.beforeEnter))for(const m of re.beforeEnter)N.push(kn(m,E,j));else N.push(kn(re.beforeEnter,E,j));return N.push(ae),xr(N)}).then(()=>(E.matched.forEach(re=>re.enterCallbacks={}),N=Pc(Ae,"beforeRouteEnter",E,j),N.push(ae),xr(N))).then(()=>{N=[];for(const re of o.list())N.push(kn(re,E,j));return N.push(ae),xr(N)}).catch(re=>on(re,8)?re:Promise.reject(re))}function ue(E,j,N){for(const q of a.list())q(E,j,N)}function Ee(E,j,N,q,we){const Ae=M(E,j);if(Ae)return Ae;const ae=j===Cn,re=Ur?history.state:{};N&&(q||ae?s.replace(E.fullPath,_e({scroll:ae&&re&&re.scroll},we)):s.push(E.fullPath,we)),c.value=E,Te(E,j,N,ae),ht()}let L;function me(){L||(L=s.listen((E,j,N)=>{if(!Ts.listening)return;const q=_(E),we=ne(q);if(we){G(_e(we,{replace:!0}),q).catch(Ys);return}u=q;const Ae=c.value;Ur&&vR(Fd(Ae.fullPath,N.delta),Za()),Y(q,Ae).catch(ae=>on(ae,12)?ae:on(ae,2)?(G(ae.to,q).then(re=>{on(re,20)&&!N.delta&&N.type===Ii.pop&&s.go(-1,!1)}).catch(Ys),Promise.reject()):(N.delta&&s.go(-N.delta,!1),be(ae,q,Ae))).then(ae=>{ae=ae||Ee(q,Ae,!1),ae&&(N.delta&&!on(ae,8)?s.go(-N.delta,!1):N.type===Ii.pop&&on(ae,20)&&s.go(-1,!1)),ue(q,Ae,ae)}).catch(Ys)}))}let Oe=As(),Pe=As(),ke;function be(E,j,N){ht(E);const q=Pe.list();return q.length?q.forEach(we=>we(E,j,N)):console.error(E),Promise.reject(E)}function ve(){return ke&&c.value!==Cn?Promise.resolve():new Promise((E,j)=>{Oe.add([E,j])})}function ht(E){return ke||(ke=!E,me(),Oe.list().forEach(([j,N])=>E?N(E):j()),Oe.reset()),E}function Te(E,j,N,q){const{scrollBehavior:we}=t;if(!Ur||!we)return Promise.resolve();const Ae=!N&&wR(Fd(E.fullPath,0))||(q||!N)&&history.state&&history.state.scroll||null;return si().then(()=>we(E,j,Ae)).then(ae=>ae&&yR(ae)).catch(ae=>be(ae,E,j))}const Ze=E=>s.go(E);let ze;const kt=new Set,Ts={currentRoute:c,listening:!0,addRoute:p,removeRoute:d,hasRoute:y,getRoutes:v,resolve:_,options:t,push:O,replace:B,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Pe.add,isReady:ve,install(E){const j=this;E.component("RouterLink",n1),E.component("RouterView",o1),E.config.globalProperties.$router=j,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>V(c)}),Ur&&!ze&&c.value===Cn&&(ze=!0,O(s.location).catch(we=>{}));const N={};for(const we in Cn)N[we]=oe(()=>c.value[we]);E.provide(ec,j),E.provide(Ov,Ht(N)),E.provide(Uu,c);const q=E.unmount;kt.add(E),E.unmount=function(){kt.delete(E),kt.size<1&&(u=Cn,L&&L(),L=null,c.value=Cn,ze=!1,ke=!1),q()}}};return Ts}function xr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function c1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>as(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>as(u,c))||s.push(c))}return[n,r,s]}function Zs(){return Pt(ec)}var u1="firebase",l1="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(u1,l1,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="firebasestorage.googleapis.com",xv="storageBucket",h1=2*60*1e3,f1=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends sn{constructor(e,n){super(xc(e),`Firebase Storage: ${n} (${xc(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}_codeEquals(e){return xc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function xc(t){return"storage/"+t}function Sh(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue("unknown",t)}function d1(t){return new Ue("object-not-found","Object '"+t+"' does not exist.")}function p1(t){return new Ue("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m1(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue("unauthenticated",t)}function g1(){return new Ue("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function y1(t){return new Ue("unauthorized","User does not have permission to access '"+t+"'.")}function v1(){return new Ue("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w1(){return new Ue("canceled","User canceled the upload/download.")}function _1(t){return new Ue("invalid-url","Invalid URL '"+t+"'.")}function E1(t){return new Ue("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function b1(){return new Ue("no-default-bucket","No default bucket found. Did you set the '"+xv+"' property when initializing the app?")}function T1(){return new Ue("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function I1(){return new Ue("no-download-url","The given file does not have any download URLs.")}function Fu(t){return new Ue("invalid-argument",t)}function Mv(){return new Ue("app-deleted","The Firebase app was deleted.")}function S1(t){return new Ue("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ei(t,e){return new Ue("invalid-format","String does not match format '"+t+"': "+e)}function Rs(t){throw new Ue("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=St.makeFromUrl(e,n)}catch{return new St(e,"")}if(r.path==="")return r;throw E1(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${s}/o${f}`,"i"),d={bucket:1,path:3},v=n===Pv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",_=new RegExp(`^https?://${v}/${s}/${y}`,"i"),M=[{regex:a,indices:c,postModify:i},{regex:p,indices:d,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<M.length;O++){const B=M[O],ne=B.regex.exec(e);if(ne){const G=ne[B.indices.bucket];let x=ne[B.indices.path];x||(x=""),r=new St(G,x),B.postModify(r);break}}if(r==null)throw _1(e);return r}}class C1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...y){u||(u=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(p,c())},y)}function f(){i&&clearTimeout(i)}function p(y,..._){if(u){f();return}if(y){f(),l.call(null,y,..._);return}if(c()||o){f(),l.call(null,y,..._);return}r<64&&(r*=2);let M;a===1?(a=2,M=0):M=(r+Math.random())*1e3,h(M)}let d=!1;function v(y){d||(d=!0,f(),!u&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function R1(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t){return t!==void 0}function D1(t){return typeof t=="object"&&!Array.isArray(t)}function Ch(t){return typeof t=="string"||t instanceof String}function Zd(t){return Ah()&&t instanceof Blob}function Ah(){return typeof Blob<"u"}function ep(t,e,n,r){if(r<e)throw Fu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Lv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gr||(gr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n,r,s,i,o,a,c,u,l,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ao(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===gr.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=i.getErrorCode()===gr.ABORT;r(!1,new ao(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new ao(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());k1(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Sh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Mv():w1();o(c)}else{const c=v1();o(c)}};this.canceled_?n(!1,new ao(!1,null,!0)):this.backoffId_=A1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&R1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class ao{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function O1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function P1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function x1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function M1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function L1(t,e,n,r,s,i){const o=Lv(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return x1(c,e),O1(c,n),P1(c,i),M1(c,r),new N1(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function U1(...t){const e=$1();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ah())return new Blob(t);throw new Ue("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function F1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function V1(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Mc{constructor(e,n){this.data=e,this.contentType=n||null}}function B1(t,e){switch(t){case Yt.RAW:return new Mc($v(e));case Yt.BASE64:case Yt.BASE64URL:return new Mc(Uv(t,e));case Yt.DATA_URL:return new Mc(q1(e),H1(e))}throw Sh()}function $v(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function j1(t){let e;try{e=decodeURIComponent(t)}catch{throw ei(Yt.DATA_URL,"Malformed data URL.")}return $v(e)}function Uv(t,e){switch(t){case Yt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ei(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Yt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ei(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=V1(e)}catch{throw ei(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Fv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ei(Yt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=z1(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function q1(t){const e=new Fv(t);return e.base64?Uv(Yt.BASE64,e.rest):j1(e.rest)}function H1(t){return new Fv(t).contentType}function z1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){let r=0,s="";Zd(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Zd(this.data_)){const r=this.data_,s=F1(r,e,n);return s===null?null:new xn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new xn(r,!0)}}static getBlob(...e){if(Ah()){const n=e.map(r=>r instanceof xn?r.data_:r);return new xn(U1.apply(null,n))}else{const n=e.map(o=>Ch(o)?B1(Yt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new xn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t){let e;try{e=JSON.parse(t)}catch{return null}return D1(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function W1(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Bv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(t,e){return e}class ft{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||G1}}let co=null;function X1(t){return!Ch(t)||t.length<2?t:Bv(t)}function jv(){if(co)return co;const t=[];t.push(new ft("bucket")),t.push(new ft("generation")),t.push(new ft("metageneration")),t.push(new ft("name","fullPath",!0));function e(i,o){return X1(o)}const n=new ft("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ft("size");return s.xform=r,t.push(s),t.push(new ft("timeCreated")),t.push(new ft("updated")),t.push(new ft("md5Hash",null,!0)),t.push(new ft("cacheControl",null,!0)),t.push(new ft("contentDisposition",null,!0)),t.push(new ft("contentEncoding",null,!0)),t.push(new ft("contentLanguage",null,!0)),t.push(new ft("contentType",null,!0)),t.push(new ft("metadata","customMetadata",!0)),co=t,co}function Q1(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new St(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Y1(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Q1(r,t),r}function qv(t,e,n){const r=Vv(e);return r===null?null:Y1(t,r,n)}function J1(t,e,n,r){const s=Vv(e);if(s===null||!Ch(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,f="/b/"+o(l)+"/o/"+o(h),p=tc(f,n,r),d=Lv({alt:"media",token:u});return p+d})[0]}function Z1(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Rh{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t){if(!t)throw Sh()}function ek(t,e){function n(r,s){const i=qv(t,s,e);return Hv(i!==null),i}return n}function tk(t,e){function n(r,s){const i=qv(t,s,e);return Hv(i!==null),J1(i,s,t.host,t._protocol)}return n}function zv(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=g1():s=m1():n.getStatus()===402?s=p1(t.bucket):n.getStatus()===403?s=y1(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function Kv(t){const e=zv(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=d1(t.path)),i.serverResponse=s.serverResponse,i}return n}function nk(t,e,n){const r=e.fullServerUrl(),s=tc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Rh(s,i,tk(t,n),o);return a.errorHandler=Kv(e),a}function rk(t,e){const n=e.fullServerUrl(),r=tc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const a=new Rh(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=Kv(e),a}function sk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ik(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=sk(null,e)),r}function ok(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let M="";for(let O=0;O<2;O++)M=M+Math.random().toString().slice(2);return M}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=ik(e,r,s),l=Z1(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=xn.getBlob(h,r,f);if(p===null)throw T1();const d={name:u.fullPath},v=tc(i,t.host,t._protocol),y="POST",_=t.maxUploadRetryTime,A=new Rh(v,y,ek(t,n),_);return A.urlParams=d,A.headers=o,A.body=p.uploadData(),A.errorHandler=zv(e),A}class ak{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Rs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Rs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Rs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Rs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Rs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ck extends ak{initXhr(){this.xhr_.responseType="text"}}function kh(){return new ck}/**
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
 */class Ar{constructor(e,n){this._service=e,n instanceof St?this._location=n:this._location=St.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ar(e,n)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bv(this._location.path)}get storage(){return this._service}get parent(){const e=K1(this._location.path);if(e===null)return null;const n=new St(this._location.bucket,e);return new Ar(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw S1(e)}}function uk(t,e,n){t._throwIfRoot("uploadBytes");const r=ok(t.storage,t._location,jv(),new xn(e,!0),n);return t.storage.makeRequestWithTokens(r,kh).then(s=>({metadata:s,ref:t}))}function lk(t){t._throwIfRoot("getDownloadURL");const e=nk(t.storage,t._location,jv());return t.storage.makeRequestWithTokens(e,kh).then(n=>{if(n===null)throw I1();return n})}function hk(t){t._throwIfRoot("deleteObject");const e=rk(t.storage,t._location);return t.storage.makeRequestWithTokens(e,kh)}function fk(t,e){const n=W1(t._location.path,e),r=new St(t._location.bucket,n);return new Ar(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){return/^[A-Za-z]+:\/\//.test(t)}function pk(t,e){return new Ar(t,e)}function Wv(t,e){if(t instanceof Dh){const n=t;if(n._bucket==null)throw b1();const r=new Ar(n,n._bucket);return e!=null?Wv(r,e):r}else return e!==void 0?fk(t,e):t}function mk(t,e){if(e&&dk(e)){if(t instanceof Dh)return pk(t,e);throw Fu("To use ref(service, url), the first argument must be a Storage instance.")}else return Wv(t,e)}function tp(t,e){const n=e==null?void 0:e[xv];return n==null?null:St.makeFromBucketSpec(n,t)}class Dh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Pv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=h1,this._maxUploadRetryTime=f1,this._requests=new Set,s!=null?this._bucket=St.makeFromBucketSpec(s,this._host):this._bucket=tp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=tp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ep("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ep("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ar(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new C1(Mv());{const i=L1(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const np="@firebase/storage",rp="0.9.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="storage";function AO(t,e,n){return t=$e(t),uk(t,e,n)}function RO(t){return t=$e(t),lk(t)}function kO(t){return t=$e(t),hk(t)}function DO(t,e){return t=$e(t),mk(t,e)}function gk(t=gl(),e){return t=$e(t),Ea(t,Gv).getImmediate({identifier:e})}function yk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Dh(n,r,s,e,ds)}function vk(){vr(new qn(Gv,yk,"PUBLIC").setMultipleInstances(!0)),Jt(np,rp,""),Jt(np,rp,"esm2017")}vk();const wk={apiKey:"AIzaSyAXoMjidvObHiglzOE50M7tt4mms_SG318",authDomain:"chatapp-b8958.firebaseapp.com",projectId:"chatapp-b8958",storageBucket:"chatapp-b8958.appspot.com",messagingSenderId:"484438330865",appId:"1:484438330865:web:1fc437cf144f556f81c850"},Nh=t0(wk),Vs=oI(Nh),uo=HA(Nh),NO=gk(Nh),nc=qE({id:"auth",state:()=>({user:null,registerLoading:!1,loginLoading:!1,registerError:"",loginError:""}),actions:{async registerUser(t,e,n){const r=Zs();this.registerLoading=!0,this.registerError="";try{const s=await W0(Vs,e,n);await iR(Us(uo,"users",s.user.uid),{uid:s.user.uid,username:t,email:e,avatar:"",avatarPath:"",bio:"",createdAt:je.fromDate(new Date),online:!0}),this.user=s.user,this.registerLoading=!1;try{await r.push("/chat")}catch(i){console.error("Navigation error:",i)}}catch(s){this.registerError=s.message,this.registerLoading=!1,console.error("Registration error:",this.registerError)}},async loginUser(t,e){const n=Zs();this.loginLoading=!0,this.loginError="";try{const r=await G0(Vs,t,e);await Dc(Us(uo,"users",r.user.uid),{online:!0}),this.user=r.user,this.loginLoading=!1,sessionStorage.setItem("userEmail",r.user.email);try{await n.push("/")}catch(s){console.error("Navigation error:",s)}}catch(r){this.loginError=r.message,this.loginLoading=!1,console.error("Login error:",this.loginError)}},async logOut(){var e;const t=Zs();try{(e=this.user)!=null&&e.uid&&await Dc(Us(uo,"users",this.user.uid),{online:!1}),await X0(Vs),this.user=null,sessionStorage.removeItem("userEmail");try{await t.push("/")}catch(n){console.error("Navigation error:",n)}}catch(n){console.error("Error logging out:",n)}},initUser(){Jm(Vs,async t=>{t?(this.user=t,await Dc(Us(uo,"users",t.uid),{online:!0})):this.user=null})}}}),_k={class:"w-full h-16 flex-between p-2"},Ek={class:"flex p-3"},bk=["src"],Tk=X("h2",{class:"ml-6 flex items-center text-xl"},"Pace Chats",-1),Ik={__name:"Navbar",setup(t){const e=nc(),n=Le("");return fa(()=>{n.value=e.userData}),(r,s)=>(_t(),$t("div",null,[X("header",null,[X("nav",_k,[X("div",Ek,[X("img",{src:V(dl),alt:"Logo",class:"w-10 h-10"},null,8,bk),Tk])])])]))}};const Sk=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ck={__name:"App",setup(t){const e=nc(),n=Le("");return fa(()=>{n.value=e.userData}),(r,s)=>{const i=cl("router-view");return _t(),$t("div",null,[n.value?Mn("",!0):(_t(),eu(Ik,{key:0})),nt(i,null,{default:oi(({Component:o})=>[nt(fl,{name:"slide-fade",mode:"out-in"},{default:oi(()=>[(_t(),eu(k_(o)))]),_:2},1024)]),_:1})])}}},Ak=Sk(Ck,[["__scopeId","data-v-26f6b1ad"]]),Rk="modulepreload",kk=function(t){return"/chat/"+t},sp={},ip=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=kk(s),s in sp)return;sp[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Rk,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function op(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,r)=>(e.includes(r)||(n[r]=V(t[r])),n),{})}function ea(t){return typeof t=="function"}function Dk(t){return dn(t)||Qr(t)}function Xv(t,e,n){let r=t;const s=e.split(".");for(let i=0;i<s.length;i++){if(!r[s[i]])return n;r=r[s[i]]}return r}function Lc(t,e,n){return oe(()=>t.some(r=>Xv(e,r,{[n]:!1})[n]))}function ap(t,e,n){return oe(()=>t.reduce((r,s)=>{const i=Xv(e,s,{[n]:!1})[n]||[];return r.concat(i)},[]))}function Qv(t,e,n,r){return t.call(r,V(e),V(n),r)}function Yv(t){return t.$valid!==void 0?!t.$valid:!t}function Nk(t,e,n,r,s,i,o){let{$lazy:a,$rewardEarly:c}=s,u=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],l=arguments.length>8?arguments[8]:void 0,h=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0;const p=Le(!!r.value),d=Le(0);n.value=!1;const v=Ct([e,r].concat(u,f),()=>{if(a&&!r.value||c&&!h.value&&!n.value)return;let y;try{y=Qv(t,e,l,o)}catch(_){y=Promise.reject(_)}d.value++,n.value=!!d.value,p.value=!1,Promise.resolve(y).then(_=>{d.value--,n.value=!!d.value,i.value=_,p.value=Yv(_)}).catch(_=>{d.value--,n.value=!!d.value,i.value=_,p.value=!0})},{immediate:!0,deep:typeof e=="object"});return{$invalid:p,$unwatch:v}}function Ok(t,e,n,r,s,i,o,a){let{$lazy:c,$rewardEarly:u}=r;const l=()=>({}),h=oe(()=>{if(c&&!n.value||u&&!a.value)return!1;let f=!0;try{const p=Qv(t,e,o,i);s.value=p,f=Yv(p)}catch(p){s.value=p}return f});return{$unwatch:l,$invalid:h}}function Pk(t,e,n,r,s,i,o,a,c,u,l){const h=Le(!1),f=t.$params||{},p=Le(null);let d,v;t.$async?{$invalid:d,$unwatch:v}=Nk(t.$validator,e,h,n,r,p,s,t.$watchTargets,c,u,l):{$invalid:d,$unwatch:v}=Ok(t.$validator,e,n,r,p,s,c,u);const y=t.$message;return{$message:ea(y)?oe(()=>y(op({$pending:h,$invalid:d,$params:op(f),$model:e,$response:p,$validator:i,$propertyPath:a,$property:o}))):y||"",$params:f,$pending:h,$invalid:d,$response:p,$unwatch:v}}function xk(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=V(t),n=Object.keys(e),r={},s={},i={};let o=null;return n.forEach(a=>{const c=e[a];switch(!0){case ea(c.$validator):r[a]=c;break;case ea(c):r[a]={$validator:c};break;case a==="$validationGroups":o=c;break;case a.startsWith("$"):i[a]=c;break;default:s[a]=c}}),{rules:r,nestedValidators:s,config:i,validationGroups:o}}function Mk(){}const Lk="__root";function Jv(t,e,n){if(n)return e?e(t()):t();try{var r=Promise.resolve(t());return e?r.then(e):r}catch(s){return Promise.reject(s)}}function $k(t,e){return Jv(t,Mk,e)}function Uk(t,e){var n=t();return n&&n.then?n.then(e):e(n)}function Fk(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(r){return Promise.reject(r)}}}function Vk(t,e,n,r,s,i,o,a,c){const u=Object.keys(t),l=r.get(s,t),h=Le(!1),f=Le(!1),p=Le(0);if(l){if(!l.$partial)return l;l.$unwatch(),h.value=l.$dirty.value}const d={$dirty:h,$path:s,$touch:()=>{h.value||(h.value=!0)},$reset:()=>{h.value&&(h.value=!1)},$commit:()=>{}};return u.length?(u.forEach(v=>{d[v]=Pk(t[v],e,d.$dirty,i,o,v,n,s,c,f,p)}),d.$externalResults=oe(()=>a.value?[].concat(a.value).map((v,y)=>({$propertyPath:s,$property:n,$validator:"$externalResults",$uid:`${s}-externalResult-${y}`,$message:v,$params:{},$response:null,$pending:!1})):[]),d.$invalid=oe(()=>{const v=u.some(y=>V(d[y].$invalid));return f.value=v,!!d.$externalResults.value.length||v}),d.$pending=oe(()=>u.some(v=>V(d[v].$pending))),d.$error=oe(()=>d.$dirty.value?d.$pending.value||d.$invalid.value:!1),d.$silentErrors=oe(()=>u.filter(v=>V(d[v].$invalid)).map(v=>{const y=d[v];return Ht({$propertyPath:s,$property:n,$validator:v,$uid:`${s}-${v}`,$message:y.$message,$params:y.$params,$response:y.$response,$pending:y.$pending})}).concat(d.$externalResults.value)),d.$errors=oe(()=>d.$dirty.value?d.$silentErrors.value:[]),d.$unwatch=()=>u.forEach(v=>{d[v].$unwatch()}),d.$commit=()=>{f.value=!0,p.value=Date.now()},r.set(s,t,d),d):(l&&r.set(s,t,d),d)}function Bk(t,e,n,r,s,i,o){const a=Object.keys(t);return a.length?a.reduce((c,u)=>(c[u]=Vu({validations:t[u],state:e,key:u,parentKey:n,resultsCache:r,globalConfig:s,instance:i,externalResults:o}),c),{}):{}}function jk(t,e,n){const r=oe(()=>[e,n].filter(d=>d).reduce((d,v)=>d.concat(Object.values(V(v))),[])),s=oe({get(){return t.$dirty.value||(r.value.length?r.value.every(d=>d.$dirty):!1)},set(d){t.$dirty.value=d}}),i=oe(()=>{const d=V(t.$silentErrors)||[],v=r.value.filter(y=>(V(y).$silentErrors||[]).length).reduce((y,_)=>y.concat(..._.$silentErrors),[]);return d.concat(v)}),o=oe(()=>{const d=V(t.$errors)||[],v=r.value.filter(y=>(V(y).$errors||[]).length).reduce((y,_)=>y.concat(..._.$errors),[]);return d.concat(v)}),a=oe(()=>r.value.some(d=>d.$invalid)||V(t.$invalid)||!1),c=oe(()=>r.value.some(d=>V(d.$pending))||V(t.$pending)||!1),u=oe(()=>r.value.some(d=>d.$dirty)||r.value.some(d=>d.$anyDirty)||s.value),l=oe(()=>s.value?c.value||a.value:!1),h=()=>{t.$touch(),r.value.forEach(d=>{d.$touch()})},f=()=>{t.$commit(),r.value.forEach(d=>{d.$commit()})},p=()=>{t.$reset(),r.value.forEach(d=>{d.$reset()})};return r.value.length&&r.value.every(d=>d.$dirty)&&h(),{$dirty:s,$errors:o,$invalid:a,$anyDirty:u,$error:l,$pending:c,$touch:h,$reset:p,$silentErrors:i,$commit:f}}function Vu(t){const e=Fk(function(){return me(),Uk(function(){if(y.$rewardEarly)return ke(),$k(si)},function(){return Jv(si,function(){return new Promise(Te=>{if(!L.value)return Te(!Y.value);const Ze=Ct(L,()=>{Te(!Y.value),Ze()})})})})});let{validations:n,state:r,key:s,parentKey:i,childResults:o,resultsCache:a,globalConfig:c={},instance:u,externalResults:l}=t;const h=i?`${i}.${s}`:s,{rules:f,nestedValidators:p,config:d,validationGroups:v}=xk(n),y=Object.assign({},c,d),_=s?oe(()=>{const Te=V(r);return Te?V(Te[s]):void 0}):r,A=Object.assign({},V(l)||{}),M=oe(()=>{const Te=V(l);return s?Te?V(Te[s]):void 0:Te}),O=Vk(f,_,s,a,h,y,u,M,r),B=Bk(p,_,h,a,y,u,M),ne={};v&&Object.entries(v).forEach(Te=>{let[Ze,ze]=Te;ne[Ze]={$invalid:Lc(ze,B,"$invalid"),$error:Lc(ze,B,"$error"),$pending:Lc(ze,B,"$pending"),$errors:ap(ze,B,"$errors"),$silentErrors:ap(ze,B,"$silentErrors")}});const{$dirty:G,$errors:x,$invalid:Y,$anyDirty:ue,$error:Ee,$pending:L,$touch:me,$reset:Oe,$silentErrors:Pe,$commit:ke}=jk(O,B,o),be=s?oe({get:()=>V(_),set:Te=>{G.value=!0;const Ze=V(r),ze=V(l);ze&&(ze[s]=A[s]),Me(Ze[s])?Ze[s].value=Te:Ze[s]=Te}}):null;s&&y.$autoDirty&&Ct(_,()=>{G.value||me();const Te=V(l);Te&&(Te[s]=A[s])},{flush:"sync"});function ve(Te){return(o.value||{})[Te]}function ht(){Me(l)?l.value=A:Object.keys(A).length===0?Object.keys(l).forEach(Te=>{delete l[Te]}):Object.assign(l,A)}return Ht(Object.assign({},O,{$model:be,$dirty:G,$error:Ee,$errors:x,$invalid:Y,$anyDirty:ue,$pending:L,$touch:me,$reset:Oe,$path:h||Lk,$silentErrors:Pe,$validate:e,$commit:ke},o&&{$getResultsForChild:ve,$clearExternalResults:ht,$validationGroups:ne},B))}class qk{constructor(){this.storage=new Map}set(e,n,r){this.storage.set(e,{rules:n,result:r})}checkRulesValidity(e,n,r){const s=Object.keys(r),i=Object.keys(n);return i.length!==s.length||!i.every(a=>s.includes(a))?!1:i.every(a=>n[a].$params?Object.keys(n[a].$params).every(c=>V(r[a].$params[c])===V(n[a].$params[c])):!0)}get(e,n){const r=this.storage.get(e);if(!r)return;const{rules:s,result:i}=r,o=this.checkRulesValidity(e,n,s),a=i.$unwatch?i.$unwatch:()=>({});return o?i:{$dirty:i.$dirty,$partial:!0,$unwatch:a}}}const Io={COLLECT_ALL:!0,COLLECT_NONE:!1},cp=Symbol("vuelidate#injectChildResults"),up=Symbol("vuelidate#removeChildResults");function Hk(t){let{$scope:e,instance:n}=t;const r={},s=Le([]),i=oe(()=>s.value.reduce((l,h)=>(l[h]=V(r[h]),l),{}));function o(l,h){let{$registerAs:f,$scope:p,$stopPropagation:d}=h;d||e===Io.COLLECT_NONE||p===Io.COLLECT_NONE||e!==Io.COLLECT_ALL&&e!==p||(r[f]=l,s.value.push(f))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],o);function a(l){s.value=s.value.filter(h=>h!==l),delete r[l]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],a);const c=Pt(cp,[]);Hr(cp,n.__vuelidateInjectInstances);const u=Pt(up,[]);return Hr(up,n.__vuelidateRemoveInstances),{childResults:i,sendValidationResultsToParent:c,removeValidationResultsFromParent:u}}function Zv(t){return new Proxy(t,{get(e,n){return typeof e[n]=="object"?Zv(e[n]):oe(()=>e[n])}})}let lp=0;function ew(t,e){var n;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(r=t,t=void 0,e=void 0);let{$registerAs:s,$scope:i=Io.COLLECT_ALL,$stopPropagation:o,$externalResults:a,currentVueInstance:c}=r;const u=c||((n=ya())===null||n===void 0?void 0:n.proxy),l=u?u.$options:{};s||(lp+=1,s=`_vuelidate_${lp}`);const h=Le({}),f=new qk,{childResults:p,sendValidationResultsToParent:d,removeValidationResultsFromParent:v}=u?Hk({$scope:i,instance:u}):{childResults:Le({})};if(!t&&l.validations){const y=l.validations;e=Le({}),il(()=>{e.value=u,Ct(()=>ea(y)?y.call(e.value,new Zv(e.value)):y,_=>{h.value=Vu({validations:_,state:e,childResults:p,resultsCache:f,globalConfig:r,instance:u,externalResults:a||u.vuelidateExternalResults})},{immediate:!0})}),r=l.validationsConfig||r}else{const y=Me(t)||Dk(t)?t:Ht(t||{});Ct(y,_=>{h.value=Vu({validations:_,state:e,childResults:p,resultsCache:f,globalConfig:r,instance:u!=null?u:{},externalResults:a})},{immediate:!0})}return u&&(d.forEach(y=>y(h,{$registerAs:s,$scope:i,$stopPropagation:o})),ma(()=>v.forEach(y=>y(s)))),oe(()=>Object.assign({},V(h.value),p.value))}function ta(t){return typeof t=="function"}function Bu(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function rc(t){return ta(t.$validator)?Object.assign({},t):{$validator:t}}function tw(t){return typeof t=="object"?t.$valid:t}function nw(t){return t.$validator||t}function zk(t,e){if(!Bu(t))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof t}`);if(!Bu(e)&&!ta(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=rc(e);return n.$params=Object.assign({},n.$params||{},t),n}function Kk(t,e){if(!ta(t)&&typeof V(t)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof t}`);if(!Bu(e)&&!ta(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=rc(e);return n.$message=t,n}function Wk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const n=rc(t);return Object.assign({},n,{$async:!0,$watchTargets:e})}function Gk(t){return{$validator(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return V(e).reduce((i,o,a)=>{const c=Object.entries(o).reduce((u,l)=>{let[h,f]=l;const p=t[h]||{},d=Object.entries(p).reduce((v,y)=>{let[_,A]=y;const O=nw(A).call(this,f,o,a,...r),B=tw(O);if(v.$data[_]=O,v.$data.$invalid=!B||!!v.$data.$invalid,v.$data.$error=v.$data.$invalid,!B){let ne=A.$message||"";const G=A.$params||{};typeof ne=="function"&&(ne=ne({$pending:!1,$invalid:!B,$params:G,$model:f,$response:O})),v.$errors.push({$property:h,$message:ne,$params:G,$response:O,$model:f,$pending:!1,$validator:_})}return{$valid:v.$valid&&B,$data:v.$data,$errors:v.$errors}},{$valid:!0,$data:{},$errors:[]});return u.$data[h]=d.$data,u.$errors[h]=d.$errors,{$valid:u.$valid&&d.$valid,$data:u.$data,$errors:u.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:i.$valid&&c.$valid,$data:i.$data.concat(c.$data),$errors:i.$errors.concat(c.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:n}=e;return n?n.$errors.map(r=>Object.values(r).map(s=>s.map(i=>i.$message)).reduce((s,i)=>s.concat(i),[])):[]}}}const sc=t=>{if(t=V(t),Array.isArray(t))return!!t.length;if(t==null)return!1;if(t===!1)return!0;if(t instanceof Date)return!isNaN(t.getTime());if(typeof t=="object"){for(let e in t)return!0;return!1}return!!String(t).length},rw=t=>(t=V(t),Array.isArray(t)?t.length:typeof t=="object"?Object.keys(t).length:String(t).length);function Qn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r=>(r=V(r),!sc(r)||e.every(s=>s.test(r)))}var cn=Object.freeze({__proto__:null,withParams:zk,withMessage:Kk,withAsync:Wk,forEach:Gk,req:sc,len:rw,regex:Qn,unwrap:V,unwrapNormalizedValidator:nw,unwrapValidatorResponse:tw,normalizeValidatorObject:rc});Qn(/^[a-zA-Z]*$/);Qn(/^[a-zA-Z0-9]*$/);Qn(/^\d*(\.\d+)?$/);const Xk=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var Qk=Qn(Xk),sw={$validator:Qk,$message:"Value is not a valid email address",$params:{type:"email"}};function Yk(t){return e=>!sc(e)||rw(e)>=V(t)}function iw(t){return{$validator:Yk(t),$message:e=>{let{$params:n}=e;return`This field should be at least ${n.min} characters long`},$params:{min:t,type:"minLength"}}}function Jk(t){return typeof t=="string"&&(t=t.trim()),sc(t)}var hr={$validator:Jk,$message:"Value is required",$params:{type:"required"}};function Zk(t){return e=>V(e)===V(t)}function eD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"other";return{$validator:Zk(t),$message:n=>`The value must be equal to the ${e} value`,$params:{equalTo:t,otherName:e,type:"sameAs"}}}const tD=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;Qn(tD);Qn(/(^[0-9]*$)|(^-[0-9]+$)/);Qn(/^[-]?\d*(\.\d+)?$/);const nD={class:"grid-center"},rD={class:"max-w-sm w-72 mt-6 md:w-80 md:mt-10"},sD=["onSubmit"],iD={class:"flex items-center justify-center m-4"},oD=["src"],aD=X("h2",{class:"text-xl pl-3"},"Pace Chats",-1),cD={class:"pb-3 sm:pb-4"},uD=X("label",{for:"username",class:"w-full text-black"},"Username",-1),lD={key:0,class:"error"},hD={class:"pb-3 sm:pb-4"},fD=X("label",{for:"email",class:"w-full text-black"},"Email",-1),dD={key:0,class:"error"},pD={class:"pb-2 sm:pb-3"},mD=X("label",{for:"password",class:"w-full text-black"},"Password",-1),gD={key:0,class:"error"},yD={class:"error"},vD={class:"pb-2"},wD={class:"text-black"},_D=fs("Please "),ED={class:"text-green-500 hover:text-green-600 hover:font-bold cursor-pointer"},bD=fs("Register"),TD=fs(" with your Account first "),ID={type:"submit",class:"form-btn"},SD={__name:"Login",setup(t){const e=Ht({email:"",username:"",password:""}),n=Zs(),r=nc(),s=Le(!1),i=Le(""),o=Le("");fa(()=>{i.value=r.userData,s.value=r.loginLoading,o.value=r.loginError,i.value&&n.push("/chat")});const a=oe(()=>({email:{required:cn.withMessage("Email is required",hr),email:sw},username:{required:cn.withMessage("Username is required",hr)},password:{required:cn.withMessage("Password is required",hr),minLength:iw(8)}})),c=ew(a,e),u=async()=>{await c.value.$validate()&&r.loginUser(e.email,e.password),setTimeout(()=>{o.value="",s.value=""},2e3)};return(l,h)=>{const f=cl("router-link");return _t(),$t("div",nD,[X("div",rD,[X("form",{onSubmit:ym(u,["prevent"]),class:"w-full shadow-md rounded-md py-4 px-6"},[X("div",iD,[X("img",{src:V(dl),alt:"Logo",class:"w-10 h-10"},null,8,oD),aD]),X("div",cD,[uD,or(X("input",{type:"text",placeholder:"Username",class:"form-input text-black","onUpdate:modelValue":h[0]||(h[0]=p=>e.username=p)},null,512),[[ar,e.username]]),V(c).username.$error?(_t(),$t("p",lD,Qt(V(c).username.$errors[0].$message),1)):Mn("",!0)]),X("div",hD,[fD,or(X("input",{type:"email",placeholder:"yourname@pacewisdom.com",class:"form-input text-black","onUpdate:modelValue":h[1]||(h[1]=p=>e.email=p)},null,512),[[ar,e.email]]),V(c).email.$error?(_t(),$t("p",dD,Qt(V(c).email.$errors[0].$message),1)):Mn("",!0)]),X("div",pD,[mD,or(X("input",{type:"password",placeholder:"Password",class:"form-input text-black","onUpdate:modelValue":h[2]||(h[2]=p=>e.password=p)},null,512),[[ar,e.password]]),V(c).password.$error?(_t(),$t("p",gD,Qt(V(c).password.$errors[0].$message),1)):Mn("",!0)]),X("div",null,[X("p",yD,Qt(o.value),1)]),X("div",vD,[X("p",wD,[_D,X("span",ED,[nt(f,{to:"/register"},{default:oi(()=>[bD]),_:1})]),TD])]),X("div",null,[X("button",ID,Qt(s.value?"Signing In...":"Sign In"),1)])],40,sD)])])}}},CD={class:"grid-center"},AD={class:"max-w-lg w-96 mt-4 md:w-80 md:mt-6"},RD={class:"flex items-center justify-center m-4"},kD=["src"],DD=X("h2",{class:"text-xl pl-3"},"Pace Chats",-1),ND={class:"pb-3 sm:pb-4"},OD=X("label",{for:"username",class:"form-label text-black"},"Username",-1),PD={key:0,class:"error"},xD={class:"pb-3 sm:pb-4"},MD=X("label",{for:"email",class:"form-label text-black"},"Email",-1),LD={key:0,class:"error"},$D={class:"pb-2 sm:pb-3"},UD=X("label",{for:"password",class:"form-label text-black"},"Password",-1),FD={key:0,class:"error"},VD={class:"pb-2 sm:pb-3"},BD=X("label",{for:"password",class:"form-label text-black"},"ConfirmPassword",-1),jD={key:0,class:"error"},qD={class:"pb-2"},HD={class:"text-black"},zD=fs("Already Registered? "),KD={class:"text-green-500 hover:text-green-600 hover:font-bold cursor-pointer"},WD=fs("Login"),GD={type:"submit",class:"form-btn"},XD={__name:"Register",setup(t){const e=Ht({email:"",username:"",password:"",confirmPassword:""}),n=Zs(),r=nc(),s=Le(!1),i=Le(""),o=Le("");fa(()=>{i.value=r.userData,s.value=r.registerLoading,o.value=r.registerError,i.value&&n.push("/profile")});const a=h=>/^[a-zA-Z0-9._%+-]+@pacewisdom\.com$/.test(h),c=oe(()=>({email:{required:cn.withMessage("Email is required",hr),email:cn.withMessage("Invalid email format",sw),paceWisdomEmail:cn.withMessage("Email Address must contain Company Domain",a)},username:{required:cn.withMessage("Username is required",hr)},password:{required:cn.withMessage("Password is required",hr),minLength:iw(8)},confirmPassword:{required:cn.withMessage("Passwords do not match",hr),sameAs:eD(e.password)}})),u=ew(c,e),l=async()=>{await u.value.$validate()&&r.registerUser(e.username,e.email,e.password),setTimeout(()=>{o.value="",s.value=""},2e3)};return(h,f)=>{const p=cl("router-link");return _t(),$t("div",CD,[X("div",AD,[X("form",{onSubmit:f[4]||(f[4]=ym(d=>l(),["prevent"])),class:"w-full shadow-md rounded-md py-4 px-6"},[X("div",RD,[X("img",{src:V(dl),alt:"Logo",class:"w-10 h-10"},null,8,kD),DD]),X("div",ND,[OD,or(X("input",{type:"text",placeholder:"Username",class:"form-input text-black","onUpdate:modelValue":f[0]||(f[0]=d=>e.username=d)},null,512),[[ar,e.username]]),V(u).username.$error?(_t(),$t("p",PD,Qt(V(u).username.$errors[0].$message),1)):Mn("",!0)]),X("div",xD,[MD,or(X("input",{type:"email",placeholder:"yourname@pacewisdom.com",class:"form-input text-black","onUpdate:modelValue":f[1]||(f[1]=d=>e.email=d)},null,512),[[ar,e.email]]),V(u).email.$error?(_t(),$t("p",LD,Qt(V(u).email.$errors[0].$message),1)):Mn("",!0)]),X("div",$D,[UD,or(X("input",{type:"password",placeholder:"Password",class:"form-input text-black","onUpdate:modelValue":f[2]||(f[2]=d=>e.password=d)},null,512),[[ar,e.password]]),V(u).password.$error?(_t(),$t("p",FD,Qt(V(u).password.$errors[0].$message),1)):Mn("",!0)]),X("div",VD,[BD,or(X("input",{type:"password",placeholder:"Password",class:"form-input text-black","onUpdate:modelValue":f[3]||(f[3]=d=>e.confirmPassword=d)},null,512),[[ar,e.confirmPassword]]),V(u).confirmPassword.$error?(_t(),$t("p",jD,Qt(V(u).confirmPassword.$errors[0].$message),1)):Mn("",!0)]),X("div",qD,[X("p",HD,[zD,X("span",KD,[nt(p,{to:"/"},{default:oi(()=>[WD]),_:1})])])]),X("div",null,[X("button",GD,Qt(s.value?"Signing Up...":"Sign Up"),1)])],32)])])}}},QD=[{path:"/",name:"chat",component:()=>ip(()=>import("./Chat.b51a0d97.js"),["assets/Chat.b51a0d97.js","assets/Chat.40531afc.css","assets/Placeholder.9175119a.js"]),meta:{auth:!0}},{path:"/login",name:"login",component:SD,meta:{auth:!1}},{path:"/register",name:"register",component:XD,meta:{auth:!1}},{path:"/profile",name:"profile",component:()=>ip(()=>import("./Profile.47f2253e.js"),["assets/Profile.47f2253e.js","assets/Placeholder.9175119a.js"]),meta:{auth:!0}}],ow=a1({history:TR("/chat/"),routes:QD}),YD=()=>new Promise((t,e)=>{const n=Jm(Vs,r=>{n(),t(r)},e)});ow.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.auth)?await YD()?n():n("/login"):n()});function JD(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function bt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function Be(t){bt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function na(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function ti(t,e){bt(2,arguments);var n=Be(t),r=Be(e),s=n.getTime()-r.getTime();return s<0?-1:s>0?1:s}var aw=6e4,cw=36e5;function ZD(t,e){bt(2,arguments);var n=Be(t),r=Be(e),s=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth();return s*12+i}function eN(t,e){return bt(2,arguments),Be(t).getTime()-Be(e).getTime()}var hp={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},tN="trunc";function nN(t){return t?hp[t]:hp[tN]}function rN(t){bt(1,arguments);var e=Be(t);return e.setHours(23,59,59,999),e}function sN(t){bt(1,arguments);var e=Be(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function iN(t){bt(1,arguments);var e=Be(t);return rN(e).getTime()===sN(e).getTime()}function oN(t,e){bt(2,arguments);var n=Be(t),r=Be(e),s=ti(n,r),i=Math.abs(ZD(n,r)),o;if(i<1)o=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-s*i);var a=ti(n,r)===-s;iN(Be(t))&&i===1&&ti(t,r)===1&&(a=!1),o=s*(i-Number(a))}return o===0?0:o}function aN(t,e,n){bt(2,arguments);var r=eN(t,e)/1e3;return nN(n==null?void 0:n.roundingMethod)(r)}var cN={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},uN=function(t,e,n){var r,s=cN[t];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},lN=uN;function $c(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var hN={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},fN={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},dN={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},pN={date:$c({formats:hN,defaultWidth:"full"}),time:$c({formats:fN,defaultWidth:"full"}),dateTime:$c({formats:dN,defaultWidth:"full"})},mN=pN,gN={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},yN=function(t,e,n,r){return gN[t]},vN=yN;function ks(t){return function(e,n){var r=n||{},s=r.context?String(r.context):"standalone",i;if(s==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=r.width?String(r.width):o;i=t.formattingValues[a]||t.formattingValues[o]}else{var c=t.defaultWidth,u=r.width?String(r.width):t.defaultWidth;i=t.values[u]||t.values[c]}var l=t.argumentCallback?t.argumentCallback(e):e;return i[l]}}var wN={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},_N={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},EN={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},bN={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},TN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},IN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},SN=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},CN={ordinalNumber:SN,era:ks({values:wN,defaultWidth:"wide"}),quarter:ks({values:_N,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:ks({values:EN,defaultWidth:"wide"}),day:ks({values:bN,defaultWidth:"wide"}),dayPeriod:ks({values:TN,defaultWidth:"wide",formattingValues:IN,defaultFormattingWidth:"wide"})},AN=CN;function Ds(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,s=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(s);if(!i)return null;var o=i[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(a)?kN(a,function(h){return h.test(o)}):RN(a,function(h){return h.test(o)}),u;u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;var l=e.slice(o.length);return{value:u,rest:l}}}function RN(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function kN(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function DN(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var s=r[0],i=e.match(t.parsePattern);if(!i)return null;var o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(s.length);return{value:o,rest:a}}}var NN=/^(\d+)(th|st|nd|rd)?/i,ON=/\d+/i,PN={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},xN={any:[/^b/i,/^(a|c)/i]},MN={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},LN={any:[/1/i,/2/i,/3/i,/4/i]},$N={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},UN={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},FN={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},VN={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},BN={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},jN={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},qN={ordinalNumber:DN({matchPattern:NN,parsePattern:ON,valueCallback:function(t){return parseInt(t,10)}}),era:Ds({matchPatterns:PN,defaultMatchWidth:"wide",parsePatterns:xN,defaultParseWidth:"any"}),quarter:Ds({matchPatterns:MN,defaultMatchWidth:"wide",parsePatterns:LN,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Ds({matchPatterns:$N,defaultMatchWidth:"wide",parsePatterns:UN,defaultParseWidth:"any"}),day:Ds({matchPatterns:FN,defaultMatchWidth:"wide",parsePatterns:VN,defaultParseWidth:"any"}),dayPeriod:Ds({matchPatterns:BN,defaultMatchWidth:"any",parsePatterns:jN,defaultParseWidth:"any"})},HN=qN,zN={code:"en-US",formatDistance:lN,formatLong:mN,formatRelative:vN,localize:AN,match:HN,options:{weekStartsOn:0,firstWeekContainsDate:1}},uw=zN;function KN(t,e){if(t==null)throw new TypeError("assign requires that input parameter not be null or undefined");e=e||{};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function lw(t){return KN({},t)}var fp=1440,WN=2520,Uc=43200,GN=86400;function XN(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};bt(2,arguments);var r=n.locale||uw;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=ti(t,e);if(isNaN(s))throw new RangeError("Invalid time value");var i=lw(n);i.addSuffix=Boolean(n.addSuffix),i.comparison=s;var o,a;s>0?(o=Be(e),a=Be(t)):(o=Be(t),a=Be(e));var c=aN(a,o),u=(na(a)-na(o))/1e3,l=Math.round((c-u)/60),h;if(l<2)return n.includeSeconds?c<5?r.formatDistance("lessThanXSeconds",5,i):c<10?r.formatDistance("lessThanXSeconds",10,i):c<20?r.formatDistance("lessThanXSeconds",20,i):c<40?r.formatDistance("halfAMinute",null,i):c<60?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",1,i):l===0?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",l,i);if(l<45)return r.formatDistance("xMinutes",l,i);if(l<90)return r.formatDistance("aboutXHours",1,i);if(l<fp){var f=Math.round(l/60);return r.formatDistance("aboutXHours",f,i)}else{if(l<WN)return r.formatDistance("xDays",1,i);if(l<Uc){var p=Math.round(l/fp);return r.formatDistance("xDays",p,i)}else if(l<GN)return h=Math.round(l/Uc),r.formatDistance("aboutXMonths",h,i)}if(h=oN(a,o),h<12){var d=Math.round(l/Uc);return r.formatDistance("xMonths",d,i)}else{var v=h%12,y=Math.floor(h/12);return v<3?r.formatDistance("aboutXYears",y,i):v<9?r.formatDistance("overXYears",y,i):r.formatDistance("almostXYears",y+1,i)}}var dp=1e3*60,ra=60*24,pp=ra*30,mp=ra*365;function QN(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};bt(2,arguments);var r=n.locale||uw;if(!r.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var s=ti(t,e);if(isNaN(s))throw new RangeError("Invalid time value");var i=lw(n);i.addSuffix=Boolean(n.addSuffix),i.comparison=s;var o,a;s>0?(o=Be(e),a=Be(t)):(o=Be(t),a=Be(e));var c=n.roundingMethod==null?"round":String(n.roundingMethod),u;if(c==="floor")u=Math.floor;else if(c==="ceil")u=Math.ceil;else if(c==="round")u=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var l=a.getTime()-o.getTime(),h=l/dp,f=na(a)-na(o),p=(l-f)/dp,d;if(n.unit==null?h<1?d="second":h<60?d="minute":h<ra?d="hour":p<pp?d="day":p<mp?d="month":d="year":d=String(n.unit),d==="second"){var v=u(l/1e3);return r.formatDistance("xSeconds",v,i)}else if(d==="minute"){var y=u(h);return r.formatDistance("xMinutes",y,i)}else if(d==="hour"){var _=u(h/60);return r.formatDistance("xHours",_,i)}else if(d==="day"){var A=u(p/ra);return r.formatDistance("xDays",A,i)}else if(d==="month"){var M=u(p/pp);return M===12&&n.unit!=="month"?r.formatDistance("xYears",1,i):r.formatDistance("xMonths",M,i)}else if(d==="year"){var O=u(p/mp);return r.formatDistance("xYears",O,i)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function YN(t,e){return bt(1,arguments),XN(t,Date.now(),e)}function JN(t,e){return bt(1,arguments),QN(t,Date.now(),e)}function ZN(t,e){bt(1,arguments);var n=e||{},r=n.additionalDigits==null?2:JD(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var s=rO(t),i;if(s.date){var o=sO(s.date,r);i=iO(o.restDateString,o.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var a=i.getTime(),c=0,u;if(s.time&&(c=oO(s.time),isNaN(c)))return new Date(NaN);if(s.timezone){if(u=aO(s.timezone),isNaN(u))return new Date(NaN)}else{var l=new Date(a+c),h=new Date(0);return h.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),h.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),h}return new Date(a+c+u)}var lo={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},eO=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,tO=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,nO=/^([+-])(\d{2})(?::?(\d{2}))?$/;function rO(t){var e={},n=t.split(lo.dateTimeDelimiter),r;if(n.length>2)return e;if(/:/.test(n[0])?r=n[0]:(e.date=n[0],r=n[1],lo.timeZoneDelimiter.test(e.date)&&(e.date=t.split(lo.timeZoneDelimiter)[0],r=t.substr(e.date.length,t.length))),r){var s=lo.timezone.exec(r);s?(e.time=r.replace(s[1],""),e.timezone=s[1]):e.time=r}return e}function sO(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var s=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:i===null?s:i*100,restDateString:t.slice((r[1]||r[2]).length)}}function iO(t,e){if(e===null)return new Date(NaN);var n=t.match(eO);if(!n)return new Date(NaN);var r=!!n[4],s=Ns(n[1]),i=Ns(n[2])-1,o=Ns(n[3]),a=Ns(n[4]),c=Ns(n[5])-1;if(r)return fO(e,a,c)?cO(e,a,c):new Date(NaN);var u=new Date(0);return!lO(e,i,o)||!hO(e,s)?new Date(NaN):(u.setUTCFullYear(e,i,Math.max(s,o)),u)}function Ns(t){return t?parseInt(t):1}function oO(t){var e=t.match(tO);if(!e)return NaN;var n=Fc(e[1]),r=Fc(e[2]),s=Fc(e[3]);return dO(n,r,s)?n*cw+r*aw+s*1e3:NaN}function Fc(t){return t&&parseFloat(t.replace(",","."))||0}function aO(t){if(t==="Z")return 0;var e=t.match(nO);if(!e)return 0;var n=e[1]==="+"?-1:1,r=parseInt(e[2]),s=e[3]&&parseInt(e[3])||0;return pO(r,s)?n*(r*cw+s*aw):NaN}function cO(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var s=r.getUTCDay()||7,i=(e-1)*7+n+1-s;return r.setUTCDate(r.getUTCDate()+i),r}var uO=[31,null,31,30,31,30,31,31,30,31,30,31];function hw(t){return t%400===0||t%4===0&&t%100!==0}function lO(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(uO[e]||(hw(t)?29:28))}function hO(t,e){return e>=1&&e<=(hw(t)?366:365)}function fO(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}function dO(t,e,n){return t===24?e===0&&n===0:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}function pO(t,e){return e>=0&&e<=59}var mO=(t,e={},n)=>{var r,s;return typeof t=="string"&&(t=ZN(t)),e.useStrict?JN(t,{addSuffix:(r=e.addSuffix)!=null?r:!0,locale:n,unit:e.unit,roundingMethod:e.roundingMethod}):YN(t,{includeSeconds:e.includeSeconds,addSuffix:(s=e.addSuffix)!=null?s:!0,locale:n})};const gO=(t={})=>{const e=t.name||"Timeago";return sl({name:e,props:{datetime:{type:[String,Number,Date],required:!0},title:{type:[String,Boolean],required:!1,default:null},autoUpdate:{type:[Number,Boolean],required:!1,default:null},converter:{type:Function,required:!1,default:null},converterOptions:{type:Object,required:!1,default:null},locale:{type:Object,required:!1,default:null}},setup(n){const r=Le();il(()=>{a()}),ma(()=>{c()});const s=u=>(n.converter||mO)(u||n.datetime,n.converterOptions||t.converterOptions,n.locale||t.locale),i=Le(s()),o=u=>{i.value=s(u)},a=()=>{if(n.autoUpdate){const u=n.autoUpdate===!0?60:n.autoUpdate;r.value=setInterval(()=>{o(n.datetime)},u*1e3)}},c=()=>{r.value&&(clearInterval(r.value),r.value=void 0)};return Ct(()=>n.autoUpdate,u=>{c(),u&&a()}),Ct(()=>[n.datetime,n.converter],()=>{o()}),Ct(()=>n.converterOptions,()=>{o()},{deep:!0}),{timeago:i,updateTimer:r}},render(){return wa("timeago",{attrs:{datetime:new Date(this.datetime).toISOString(),title:typeof this.title=="string"?this.title:this.title===!1?null:this.timeago}},[this.timeago])}})};var yO=(t,e)=>{if(t.config.globalProperties.$timeago)return;Number(t.version.split(".")[0])<3&&console.warn("[vue-timeago3] This plugin requires at least Vue version 3.0");const r=gO(e);t.component(r.name,r)};const vO=UE(),ic=ME(Ak);ic.use(vO);ic.use(yO);ic.use(ow);ic.mount("#app");export{ym as A,DO as B,NO as C,AO as D,RO as E,Gt as F,SO as G,je as H,_O as I,uo as J,iR as K,Us as L,nc as M,Zs as N,Vs as O,EO as P,bO as Q,CO as R,IO as S,Dc as T,kO as U,TO as W,Sk as _,X as a,aa as b,$t as c,nt as d,Mn as e,Le as f,sl as g,oe as h,Pt as i,Ct as j,Zp as k,ma as l,Ht as m,Hu as n,_t as o,xp as p,ya as q,cl as r,wO as s,Qt as t,V as u,or as v,fa as w,ar as x,Hr as y,eu as z};
