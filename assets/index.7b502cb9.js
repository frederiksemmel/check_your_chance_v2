(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(l){if(l.ep)return;l.ep=!0;const i=s(l);fetch(l.href,i)}})();function Z(){}const de=t=>t;function Bt(t,r){for(const s in r)t[s]=r[s];return t}function re(t){return t()}function qt(){return Object.create(null)}function Ht(t){t.forEach(re)}function ge(t){return typeof t=="function"}function ne(t,r){return t!=t?r==r:t!==r||t&&typeof t=="object"||typeof t=="function"}let kt;function At(t,r){return kt||(kt=document.createElement("a")),kt.href=r,t===kt.href}function pe(t){return Object.keys(t).length===0}function be(t,...r){if(t==null)return Z;const s=t.subscribe(...r);return s.unsubscribe?()=>s.unsubscribe():s}function ve(t,r,s){t.$$.on_destroy.push(be(r,s))}const se=typeof window<"u";let me=se?()=>window.performance.now():()=>Date.now(),ie=se?t=>requestAnimationFrame(t):Z;const ot=new Set;function oe(t){ot.forEach(r=>{r.c(t)||(ot.delete(r),r.f())}),ot.size!==0&&ie(oe)}function ye(t){let r;return ot.size===0&&ie(oe),{promise:new Promise(s=>{ot.add(r={c:t,f:s})}),abort(){ot.delete(r)}}}function m(t,r){t.appendChild(r)}function Gt(t,r,s){t.insertBefore(r,s||null)}function Et(t){t.parentNode.removeChild(t)}function P(t){return document.createElement(t)}function V(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Tt(t){return document.createTextNode(t)}function $(){return Tt(" ")}function _e(t,r,s,a){return t.addEventListener(r,s,a),()=>t.removeEventListener(r,s,a)}function b(t,r,s){s==null?t.removeAttribute(r):t.getAttribute(r)!==s&&t.setAttribute(r,s)}function we(t,r,s){t.setAttributeNS("http://www.w3.org/1999/xlink",r,s)}function xe(t){return Array.from(t.childNodes)}function Ut(t,r){r=""+r,t.wholeText!==r&&(t.data=r)}function z(t,r,s,a){s===null?t.style.removeProperty(r):t.style.setProperty(r,s,a?"important":"")}let vt;function bt(t){vt=t}function ke(){if(!vt)throw new Error("Function called outside component initialization");return vt}function Ae(t){ke().$$.on_mount.push(t)}const gt=[],Jt=[],Ct=[],Vt=[],Se=Promise.resolve();let Pt=!1;function Fe(){Pt||(Pt=!0,Se.then(ae))}function Nt(t){Ct.push(t)}const Rt=new Set;let St=0;function ae(){const t=vt;do{for(;St<gt.length;){const r=gt[St];St++,bt(r),Ee(r.$$)}for(bt(null),gt.length=0,St=0;Jt.length;)Jt.pop()();for(let r=0;r<Ct.length;r+=1){const s=Ct[r];Rt.has(s)||(Rt.add(s),s())}Ct.length=0}while(gt.length);for(;Vt.length;)Vt.pop()();Pt=!1,Rt.clear(),bt(t)}function Ee(t){if(t.fragment!==null){t.update(),Ht(t.before_update);const r=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,r),t.after_update.forEach(Nt)}}const Ce=new Set;function Oe(t,r){t&&t.i&&(Ce.delete(t),t.i(r))}const He=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Re(t,r,s,a){const{fragment:l,on_mount:i,on_destroy:c,after_update:h}=t.$$;l&&l.m(r,s),a||Nt(()=>{const g=i.map(re).filter(ge);c?c.push(...g):Ht(g),t.$$.on_mount=[]}),h.forEach(Nt)}function Te(t,r){const s=t.$$;s.fragment!==null&&(Ht(s.on_destroy),s.fragment&&s.fragment.d(r),s.on_destroy=s.fragment=null,s.ctx=[])}function Pe(t,r){t.$$.dirty[0]===-1&&(gt.push(t),Fe(),t.$$.dirty.fill(0)),t.$$.dirty[r/31|0]|=1<<r%31}function Ne(t,r,s,a,l,i,c,h=[-1]){const g=vt;bt(t);const f=t.$$={fragment:null,ctx:null,props:i,update:Z,not_equal:l,bound:qt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(g?g.$$.context:[])),callbacks:qt(),dirty:h,skip_bound:!1,root:r.target||g.$$.root};c&&c(f.root);let y=!1;if(f.ctx=s?s(t,r.props||{},(_,x,...S)=>{const v=S.length?S[0]:x;return f.ctx&&l(f.ctx[_],f.ctx[_]=v)&&(!f.skip_bound&&f.bound[_]&&f.bound[_](v),y&&Pe(t,_)),x}):[],f.update(),y=!0,Ht(f.before_update),f.fragment=a?a(f.ctx):!1,r.target){if(r.hydrate){const _=xe(r.target);f.fragment&&f.fragment.l(_),_.forEach(Et)}else f.fragment&&f.fragment.c();r.intro&&Oe(t.$$.fragment),Re(t,r.target,r.anchor,r.customElement),ae()}bt(g)}class Ie{$destroy(){Te(this,1),this.$destroy=Z}$on(r,s){const a=this.$$.callbacks[r]||(this.$$.callbacks[r]=[]);return a.push(s),()=>{const l=a.indexOf(s);l!==-1&&a.splice(l,1)}}$set(r){this.$$set&&!pe(r)&&(this.$$.skip_bound=!0,this.$$set(r),this.$$.skip_bound=!1)}}const Me="/check_your_chance_v2/assets/track_bg.0951bd20.svg",Le="/check_your_chance_v2/assets/checkpoints.cf29a96e.svg",De="/check_your_chance_v2/assets/girl.078d3006.png",$e="/check_your_chance_v2/assets/cyc_logo.9f261468.svg";function Wt(t,r){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),s.push.apply(s,a)}return s}function U(t){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?Wt(Object(s),!0).forEach(function(a){je(t,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Wt(Object(s)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))})}return t}function Dt(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function Xt(t,r){for(var s=0;s<r.length;s++){var a=r[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function $t(t,r,s){return r&&Xt(t.prototype,r),s&&Xt(t,s),Object.defineProperty(t,"prototype",{writable:!1}),t}function je(t,r,s){return r in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,t}function pt(t){return ze(t)||Be(t)||qe(t)||Ge()}function ze(t){if(Array.isArray(t))return It(t)}function Be(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qe(t,r){if(!!t){if(typeof t=="string")return It(t,r);var s=Object.prototype.toString.call(t).slice(8,-1);if(s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set")return Array.from(t);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return It(t,r)}}function It(t,r){(r==null||r>t.length)&&(r=t.length);for(var s=0,a=new Array(r);s<r;s++)a[s]=t[s];return a}function Ge(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var tt=$t(function t(r){var s=r.x,a=r.y,l=r.progress,i=r.segment;Dt(this,t),this.x=s,this.y=a,this.progress=l,this.segment=i});function Ue(t,r){return r={exports:{}},t(r,r.exports),r.exports}var mt=Ue(function(t){(function(r){var s=/^\s+/,a=/\s+$/,l=0,i=r.round,c=r.min,h=r.max,g=r.random;function f(e,o){if(e=e||"",o=o||{},e instanceof f)return e;if(!(this instanceof f))return new f(e,o);var n=y(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=i(100*this._a)/100,this._format=o.format||n.format,this._gradientType=o.gradientType,this._r<1&&(this._r=i(this._r)),this._g<1&&(this._g=i(this._g)),this._b<1&&(this._b=i(this._b)),this._ok=n.ok,this._tc_id=l++}f.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),o,n,u,p,d,w;return o=e.r/255,n=e.g/255,u=e.b/255,o<=.03928?p=o/12.92:p=r.pow((o+.055)/1.055,2.4),n<=.03928?d=n/12.92:d=r.pow((n+.055)/1.055,2.4),u<=.03928?w=u/12.92:w=r.pow((u+.055)/1.055,2.4),.2126*p+.7152*d+.0722*w},setAlpha:function(e){return this._a=ct(e),this._roundA=i(100*this._a)/100,this},toHsv:function(){var e=v(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=v(this._r,this._g,this._b),o=i(e.h*360),n=i(e.s*100),u=i(e.v*100);return this._a==1?"hsv("+o+", "+n+"%, "+u+"%)":"hsva("+o+", "+n+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var e=x(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=x(this._r,this._g,this._b),o=i(e.h*360),n=i(e.s*100),u=i(e.l*100);return this._a==1?"hsl("+o+", "+n+"%, "+u+"%)":"hsla("+o+", "+n+"%, "+u+"%, "+this._roundA+")"},toHex:function(e){return H(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return F(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:i(this._r),g:i(this._g),b:i(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+i(this._r)+", "+i(this._g)+", "+i(this._b)+")":"rgba("+i(this._r)+", "+i(this._g)+", "+i(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:i(k(this._r,255)*100)+"%",g:i(k(this._g,255)*100)+"%",b:i(k(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+i(k(this._r,255)*100)+"%, "+i(k(this._g,255)*100)+"%, "+i(k(this._b,255)*100)+"%)":"rgba("+i(k(this._r,255)*100)+"%, "+i(k(this._g,255)*100)+"%, "+i(k(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:_t[H(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var o="#"+E(this._r,this._g,this._b,this._a),n=o,u=this._gradientType?"GradientType = 1, ":"";if(e){var p=f(e);n="#"+E(p._r,p._g,p._b,p._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+o+",endColorstr="+n+")"},toString:function(e){var o=!!e;e=e||this._format;var n=!1,u=this._a<1&&this._a>=0,p=!o&&u&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return p?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},clone:function(){return f(this.toString())},_applyModification:function(e,o){var n=e.apply(null,[this].concat([].slice.call(o)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(M,arguments)},brighten:function(){return this._applyModification(yt,arguments)},darken:function(){return this._applyModification(et,arguments)},desaturate:function(){return this._applyModification(I,arguments)},saturate:function(){return this._applyModification(C,arguments)},greyscale:function(){return this._applyModification(T,arguments)},spin:function(){return this._applyModification(W,arguments)},_applyCombination:function(e,o){return e.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(lt,arguments)},complement:function(){return this._applyCombination(at,arguments)},monochromatic:function(){return this._applyCombination(ft,arguments)},splitcomplement:function(){return this._applyCombination(K,arguments)},triad:function(){return this._applyCombination(rt,arguments)},tetrad:function(){return this._applyCombination(j,arguments)}},f.fromRatio=function(e,o){if(typeof e=="object"){var n={};for(var u in e)e.hasOwnProperty(u)&&(u==="a"?n[u]=e[u]:n[u]=B(e[u]));e=n}return f(e,o)};function y(e){var o={r:0,g:0,b:0},n=1,u=null,p=null,d=null,w=!1,O=!1;return typeof e=="string"&&(e=st(e)),typeof e=="object"&&(q(e.r)&&q(e.g)&&q(e.b)?(o=_(e.r,e.g,e.b),w=!0,O=String(e.r).substr(-1)==="%"?"prgb":"rgb"):q(e.h)&&q(e.s)&&q(e.v)?(u=B(e.s),p=B(e.v),o=A(e.h,u,p),w=!0,O="hsv"):q(e.h)&&q(e.s)&&q(e.l)&&(u=B(e.s),d=B(e.l),o=S(e.h,u,d),w=!0,O="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=ct(n),{ok:w,format:e.format||O,r:c(255,h(o.r,0)),g:c(255,h(o.g,0)),b:c(255,h(o.b,0)),a:n}}function _(e,o,n){return{r:k(e,255)*255,g:k(o,255)*255,b:k(n,255)*255}}function x(e,o,n){e=k(e,255),o=k(o,255),n=k(n,255);var u=h(e,o,n),p=c(e,o,n),d,w,O=(u+p)/2;if(u==p)d=w=0;else{var R=u-p;switch(w=O>.5?R/(2-u-p):R/(u+p),u){case e:d=(o-n)/R+(o<n?6:0);break;case o:d=(n-e)/R+2;break;case n:d=(e-o)/R+4;break}d/=6}return{h:d,s:w,l:O}}function S(e,o,n){var u,p,d;e=k(e,360),o=k(o,100),n=k(n,100);function w(G,dt,J){return J<0&&(J+=1),J>1&&(J-=1),J<1/6?G+(dt-G)*6*J:J<1/2?dt:J<2/3?G+(dt-G)*(2/3-J)*6:G}if(o===0)u=p=d=n;else{var O=n<.5?n*(1+o):n+o-n*o,R=2*n-O;u=w(R,O,e+1/3),p=w(R,O,e),d=w(R,O,e-1/3)}return{r:u*255,g:p*255,b:d*255}}function v(e,o,n){e=k(e,255),o=k(o,255),n=k(n,255);var u=h(e,o,n),p=c(e,o,n),d,w,O=u,R=u-p;if(w=u===0?0:R/u,u==p)d=0;else{switch(u){case e:d=(o-n)/R+(o<n?6:0);break;case o:d=(n-e)/R+2;break;case n:d=(e-o)/R+4;break}d/=6}return{h:d,s:w,v:O}}function A(e,o,n){e=k(e,360)*6,o=k(o,100),n=k(n,100);var u=r.floor(e),p=e-u,d=n*(1-o),w=n*(1-p*o),O=n*(1-(1-p)*o),R=u%6,G=[n,w,d,d,O,n][R],dt=[O,n,n,w,d,d][R],J=[d,d,O,n,n,w][R];return{r:G*255,g:dt*255,b:J*255}}function H(e,o,n,u){var p=[N(i(e).toString(16)),N(i(o).toString(16)),N(i(n).toString(16))];return u&&p[0].charAt(0)==p[0].charAt(1)&&p[1].charAt(0)==p[1].charAt(1)&&p[2].charAt(0)==p[2].charAt(1)?p[0].charAt(0)+p[1].charAt(0)+p[2].charAt(0):p.join("")}function F(e,o,n,u,p){var d=[N(i(e).toString(16)),N(i(o).toString(16)),N(i(n).toString(16)),N(ut(u))];return p&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}function E(e,o,n,u){var p=[N(ut(u)),N(i(e).toString(16)),N(i(o).toString(16)),N(i(n).toString(16))];return p.join("")}f.equals=function(e,o){return!e||!o?!1:f(e).toRgbString()==f(o).toRgbString()},f.random=function(){return f.fromRatio({r:g(),g:g(),b:g()})};function I(e,o){o=o===0?0:o||10;var n=f(e).toHsl();return n.s-=o/100,n.s=X(n.s),f(n)}function C(e,o){o=o===0?0:o||10;var n=f(e).toHsl();return n.s+=o/100,n.s=X(n.s),f(n)}function T(e){return f(e).desaturate(100)}function M(e,o){o=o===0?0:o||10;var n=f(e).toHsl();return n.l+=o/100,n.l=X(n.l),f(n)}function yt(e,o){o=o===0?0:o||10;var n=f(e).toRgb();return n.r=h(0,c(255,n.r-i(255*-(o/100)))),n.g=h(0,c(255,n.g-i(255*-(o/100)))),n.b=h(0,c(255,n.b-i(255*-(o/100)))),f(n)}function et(e,o){o=o===0?0:o||10;var n=f(e).toHsl();return n.l-=o/100,n.l=X(n.l),f(n)}function W(e,o){var n=f(e).toHsl(),u=(n.h+o)%360;return n.h=u<0?360+u:u,f(n)}function at(e){var o=f(e).toHsl();return o.h=(o.h+180)%360,f(o)}function rt(e){var o=f(e).toHsl(),n=o.h;return[f(e),f({h:(n+120)%360,s:o.s,l:o.l}),f({h:(n+240)%360,s:o.s,l:o.l})]}function j(e){var o=f(e).toHsl(),n=o.h;return[f(e),f({h:(n+90)%360,s:o.s,l:o.l}),f({h:(n+180)%360,s:o.s,l:o.l}),f({h:(n+270)%360,s:o.s,l:o.l})]}function K(e){var o=f(e).toHsl(),n=o.h;return[f(e),f({h:(n+72)%360,s:o.s,l:o.l}),f({h:(n+216)%360,s:o.s,l:o.l})]}function lt(e,o,n){o=o||6,n=n||30;var u=f(e).toHsl(),p=360/n,d=[f(e)];for(u.h=(u.h-(p*o>>1)+720)%360;--o;)u.h=(u.h+p)%360,d.push(f(u));return d}function ft(e,o){o=o||6;for(var n=f(e).toHsv(),u=n.h,p=n.s,d=n.v,w=[],O=1/o;o--;)w.push(f({h:u,s:p,v:d})),d=(d+O)%1;return w}f.mix=function(e,o,n){n=n===0?0:n||50;var u=f(e).toRgb(),p=f(o).toRgb(),d=n/100,w={r:(p.r-u.r)*d+u.r,g:(p.g-u.g)*d+u.g,b:(p.b-u.b)*d+u.b,a:(p.a-u.a)*d+u.a};return f(w)},f.readability=function(e,o){var n=f(e),u=f(o);return(r.max(n.getLuminance(),u.getLuminance())+.05)/(r.min(n.getLuminance(),u.getLuminance())+.05)},f.isReadable=function(e,o,n){var u=f.readability(e,o),p,d;switch(d=!1,p=xt(n),p.level+p.size){case"AAsmall":case"AAAlarge":d=u>=4.5;break;case"AAlarge":d=u>=3;break;case"AAAsmall":d=u>=7;break}return d},f.mostReadable=function(e,o,n){var u=null,p=0,d,w,O,R;n=n||{},w=n.includeFallbackColors,O=n.level,R=n.size;for(var G=0;G<o.length;G++)d=f.readability(e,o[G]),d>p&&(p=d,u=f(o[G]));return f.isReadable(e,u,{level:O,size:R})||!w?u:(n.includeFallbackColors=!1,f.mostReadable(e,["#fff","#000"],n))};var Y=f.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},_t=f.hexNames=Q(Y);function Q(e){var o={};for(var n in e)e.hasOwnProperty(n)&&(o[e[n]]=n);return o}function ct(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function k(e,o){nt(e)&&(e="100%");var n=wt(e);return e=c(o,h(0,parseFloat(e))),n&&(e=parseInt(e*o,10)/100),r.abs(e-o)<1e-6?1:e%o/parseFloat(o)}function X(e){return c(1,h(0,e))}function L(e){return parseInt(e,16)}function nt(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function wt(e){return typeof e=="string"&&e.indexOf("%")!=-1}function N(e){return e.length==1?"0"+e:""+e}function B(e){return e<=1&&(e=e*100+"%"),e}function ut(e){return r.round(parseFloat(e)*255).toString(16)}function ht(e){return L(e)/255}var D=function(){var e="[-\\+]?\\d+%?",o="[-\\+]?\\d*\\.\\d+%?",n="(?:"+o+")|(?:"+e+")",u="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",p="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+u),rgba:new RegExp("rgba"+p),hsl:new RegExp("hsl"+u),hsla:new RegExp("hsla"+p),hsv:new RegExp("hsv"+u),hsva:new RegExp("hsva"+p),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function q(e){return!!D.CSS_UNIT.exec(e)}function st(e){e=e.replace(s,"").replace(a,"").toLowerCase();var o=!1;if(Y[e])e=Y[e],o=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=D.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=D.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=D.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=D.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=D.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=D.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=D.hex8.exec(e))?{r:L(n[1]),g:L(n[2]),b:L(n[3]),a:ht(n[4]),format:o?"name":"hex8"}:(n=D.hex6.exec(e))?{r:L(n[1]),g:L(n[2]),b:L(n[3]),format:o?"name":"hex"}:(n=D.hex4.exec(e))?{r:L(n[1]+""+n[1]),g:L(n[2]+""+n[2]),b:L(n[3]+""+n[3]),a:ht(n[4]+""+n[4]),format:o?"name":"hex8"}:(n=D.hex3.exec(e))?{r:L(n[1]+""+n[1]),g:L(n[2]+""+n[2]),b:L(n[3]+""+n[3]),format:o?"name":"hex"}:!1}function xt(e){var o,n;return e=e||{level:"AA",size:"small"},o=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),o!=="AA"&&o!=="AAA"&&(o="AA"),n!=="small"&&n!=="large"&&(n="small"),{level:o,size:n}}t.exports?t.exports=f:window.tinycolor=f})(Math)});const le={r:256,g:256,b:256,a:1},fe={h:360,s:1,v:1,a:1};function jt(t,r,s){let a={};for(let l in t)t.hasOwnProperty(l)&&(a[l]=s===0?0:(r[l]-t[l])/s);return a}function zt(t,r,s,a){let l={};for(let i in r)r.hasOwnProperty(i)&&(l[i]=t[i]*s+r[i],l[i]=l[i]<0?l[i]+a[i]:a[i]!==1?l[i]%a[i]:l[i]);return l}function Mt(t,r,s){const a=t.color.toRgb(),l=r.color.toRgb(),i=jt(a,l,s);let c=[t.color];for(let h=1;h<s;h++){const g=zt(i,a,h,le);c.push(mt(g))}return c}function Zt(t,r,s,a){const l=t.color.toHsv(),i=r.color.toHsv();if(l.s===0||i.s===0)return Mt(t,r,s);let c;if(typeof a=="boolean")c=a;else{const y=l.h<i.h&&i.h-l.h<180||l.h>i.h&&l.h-i.h>180;c=a==="long"&&y||a==="short"&&!y}const h=jt(l,i,s);let g=[t.color],f;l.h<=i.h&&!c||l.h>=i.h&&c?f=i.h-l.h:c?f=360-i.h+l.h:f=360-l.h+i.h,h.h=Math.pow(-1,c?1:0)*Math.abs(f)/s;for(let y=1;y<s;y++){const _=zt(h,l,y,fe);g.push(mt(_))}return g}function Kt(t,r){const s=t.length;if(r=parseInt(r,10),isNaN(r)||r<2)throw new Error("Invalid number of steps (< 2)");if(r<s)throw new Error("Number of steps cannot be inferior to number of stops");let a=[];for(let i=1;i<s;i++){const c=(r-1)*(t[i].pos-t[i-1].pos);a.push(Math.max(1,Math.round(c)))}let l=1;for(let i=s-1;i--;)l+=a[i];for(;l!==r;)if(l<r){const i=Math.min.apply(null,a);a[a.indexOf(i)]++,l++}else{const i=Math.max.apply(null,a);a[a.indexOf(i)]--,l--}return a}function Yt(t,r,s,a){if(r<0||r>1)throw new Error("Position must be between 0 and 1");let l,i;for(let g=0,f=t.length;g<f-1;g++)if(r>=t[g].pos&&r<t[g+1].pos){l=t[g],i=t[g+1];break}l||(l=i=t[t.length-1]);const c=jt(l.color[s](),i.color[s](),(i.pos-l.pos)*100),h=zt(c,l.color[s](),(r-l.pos)*100,a);return mt(h)}class Ot{constructor(r){if(r.length<2)throw new Error("Invalid number of stops (< 2)");const s=r[0].pos!==void 0;let a=r.length,l=-1,i=!1;this.stops=r.map((c,h)=>{const g=c.pos!==void 0;if(s^g)throw new Error("Cannot mix positionned and not posionned color stops");if(g){const f=c.color!==void 0;if(!f&&(i||h===0||h===a-1))throw new Error("Cannot define two consecutive position-only stops");if(i=!f,c={color:f?mt(c.color):null,colorLess:!f,pos:c.pos},c.pos<0||c.pos>1)throw new Error("Color stops positions must be between 0 and 1");if(c.pos<l)throw new Error("Color stops positions are not ordered");l=c.pos}else c={color:mt(c.color!==void 0?c.color:c),pos:h/(a-1)};return c}),this.stops[0].pos!==0&&(this.stops.unshift({color:this.stops[0].color,pos:0}),a++),this.stops[a-1].pos!==1&&this.stops.push({color:this.stops[a-1].color,pos:1})}reverse(){let r=[];return this.stops.forEach(function(s){r.push({color:s.color,pos:1-s.pos})}),new Ot(r.reverse())}loop(){let r=[],s=[];return this.stops.forEach(a=>{r.push({color:a.color,pos:a.pos/2})}),this.stops.slice(0,-1).forEach(a=>{s.push({color:a.color,pos:1-a.pos/2})}),new Ot(r.concat(s.reverse()))}rgb(r){const s=Kt(this.stops,r);let a=[];this.stops.forEach((l,i)=>{l.colorLess&&(l.color=Mt(this.stops[i-1],this.stops[i+1],2)[1])});for(let l=0,i=this.stops.length;l<i-1;l++){const c=Mt(this.stops[l],this.stops[l+1],s[l]);a.splice(a.length,0,...c)}return a.push(this.stops[this.stops.length-1].color),a}hsv(r,s){const a=Kt(this.stops,r);let l=[];this.stops.forEach((i,c)=>{i.colorLess&&(i.color=Zt(this.stops[c-1],this.stops[c+1],2,s)[1])});for(let i=0,c=this.stops.length;i<c-1;i++){const h=Zt(this.stops[i],this.stops[i+1],a[i],s);l.splice(l.length,0,...h)}return l.push(this.stops[this.stops.length-1].color),l}css(r,s){r=r||"linear",s=s||(r==="linear"?"to right":"ellipse at center");let a=r+"-gradient("+s;return this.stops.forEach(function(l){a+=", "+(l.colorLess?"":l.color.toRgbString()+" ")+l.pos*100+"%"}),a+=")",a}rgbAt(r){return Yt(this.stops,r,"toRgb",le)}hsvAt(r){return Yt(this.stops,r,"toHsv",fe)}}var Je=function(t){if(arguments.length===1){if(!Array.isArray(arguments[0]))throw new Error('"stops" is not an array');t=arguments[0]}else t=Array.prototype.slice.call(arguments);return new Ot(t)},Ft=function(r,s){for(var a=document.createElementNS("http://www.w3.org/2000/svg",r),l=Object.keys(s),i=0;i<l.length;i++){var c=l[i];a.setAttribute(c,s[c])}return a},Qt=function(r,s,a,l){var i=function(g,f){return typeof g=="string"?g:Je(g).rgbAt(f)},c={};return s&&(c.stroke=i(s,l),c["stroke-width"]=a),r&&(c.fill=i(r,l)),c},Ve=function(r){for(var s="",a=0;a<r.length;a++){var l=r[a],i=l.x,c=l.y,h=a===0?null:r[a-1];a===0&&a!==r.length-1?s+="M".concat(i,",").concat(c):i!==h.x&&c!==h.y?s+="L".concat(i,",").concat(c):i!==h.x?s+="H".concat(i):c!==h.y&&(s+="V".concat(c)),a===r.length-1&&(s+="Z")}return s},We=function(r){var s=pt(r).sort(function(a,l){return a.progress-l.progress});return s[s.length/2|0]},ce=function(r){return r instanceof Element||r instanceof HTMLDocument?r:r.node()},ue=$t(function t(r){var s=r.samples;Dt(this,t),this.samples=s,this.progress=We(s).progress}),he=2,Xe=function(r){var s=r.path,a=r.segments,l=r.samples,i=r.precision,c=i===void 0?he:i;s=ce(s),l>1&&l--;for(var h=s.getTotalLength(),g=a*l,f=[],y=[],_=0;_<=g;_++){var x=_/g,S=s.getPointAtLength(x*h),v=S.x,A=S.y;c&&(v=+v.toFixed(c),A=+A.toFixed(c)),f.push(new tt({x:v,y:A,progress:x}))}for(var H=0;H<a;H++){for(var F=H*l,E=F+l,I=[],C=0;C<l;C++)I.push(f[F+C]);I.push(f[E]),y.push(new ue({samples:I}))}return y},Ze=function(r,s,a,l){var i=Ke(r,s,a),c=Ye(i,a,l);return c},Ke=function(r,s,a){for(var l=function(F,E,I,C){var T=new tt(U(U({},C),{},{x:Math.sin(F)*E+C.x,y:-Math.cos(F)*E+C.y})),M=new tt(U(U({},C),{},{x:-Math.sin(F)*E+C.x,y:Math.cos(F)*E+C.y}));return I&&(T.x=+T.x.toFixed(I),T.y=+T.y.toFixed(I),M.x=+M.x.toFixed(I),M.y=+M.y.toFixed(I)),[T,M]},i=s/2,c=[],h=0;h<r.length;h++){for(var g=r[h].samples,f=[],y=0;y<g.length&&g[y+1]!==void 0;y++){var _=g[y],x=g[y+1],S=Math.atan2(x.y-_.y,x.x-_.x),v=l(S,i,a,_),A=l(S,i,a,x);y===0&&f.push.apply(f,pt(v)),f.push.apply(f,pt(A))}c.push(new ue({samples:[].concat(pt(f.filter(function(H,F){return F%2===0})),pt(f.filter(function(H,F){return F%2===1}).reverse()))}))}return c},Ye=function(r,s,a){for(var l=function(A,H){return{x:(A.x+H.x)/2,y:(A.y+H.y)/2}},i=function(A,H,F){return U(U({},A[H]),{},{x:F.x,y:F.y})},c=JSON.parse(JSON.stringify(r)),h=0;h<r.length;h++){var g=a||r[h+1]?r[h].samples:c[h].samples,f=a?r[h+1]?r[h+1].samples:r[0].samples:r[h+1]?r[h+1].samples:c[0].samples,y=g.length/2,_=f.length-1,x=l(g[y-1],f[0]),S=l(g[y],f[_]);s&&(x.x=+x.x.toFixed(s),x.y=+x.y.toFixed(s),S.x=+S.x.toFixed(s),S.y=+S.y.toFixed(s)),g[y-1]=new tt(U({},i(g,y-1,x))),g[y]=new tt(U({},i(g,y,S))),f[0]=new tt(U({},i(f,0,x))),f[_]=new tt(U({},i(f,_,S)))}return r},Qe=function(){function t(r){var s=r.path,a=r.segments,l=r.samples,i=r.precision,c=i===void 0?he:i;Dt(this,t),this.path=ce(s),this.segments=a,this.samples=l,this.precision=c,this.pathClosed=this.path.nodeName=="path"?this.path.getAttribute("d").match(/z/gi):!0,this.renders=[],this.svg=s.closest("svg"),this.group=Ft("g",{class:"gradient-path"}),this.data=Xe({path:s,segments:a,samples:l,precision:c}),this.svg.appendChild(this.group),this.path.parentNode.removeChild(this.path)}return $t(t,[{key:"render",value:function(s){var a=s.type,l=s.stroke,i=s.strokeWidth,c=s.fill,h=s.width,g={},f=Ft("g",{class:"element-".concat(a)});if(this.group.appendChild(f),g.group=f,a==="path"){g.data=h&&c?Ze(this.data,h,this.precision,this.pathClosed):this.data;for(var y=0;y<g.data.length;y++){var _=g.data[y],x=_.samples,S=_.progress;f.appendChild(Ft("path",U({class:"path-segment",d:Ve(x)},Qt(c,l,i,S))))}}else if(a==="circle"){g.data=this.data.flatMap(function(I){var C=I.samples;return C});for(var v=0;v<g.data.length;v++){var A=g.data[v],H=A.x,F=A.y,E=A.progress;f.appendChild(Ft("circle",U({class:"circle-sample",cx:H,cy:F,r:h/2},Qt(c,l,i,E))))}}return this.renders.push(g),this}}]),t}();const it=[];function tr(t,r=Z){let s;const a=new Set;function l(h){if(ne(t,h)&&(t=h,s)){const g=!it.length;for(const f of a)f[1](),it.push(f,t);if(g){for(let f=0;f<it.length;f+=2)it[f][0](it[f+1]);it.length=0}}}function i(h){l(h(t))}function c(h,g=Z){const f=[h,g];return a.add(f),a.size===1&&(s=r(l)||Z),h(t),()=>{a.delete(f),a.size===0&&(s(),s=null)}}return{set:l,update:i,subscribe:c}}function er(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function te(t){return Object.prototype.toString.call(t)==="[object Date]"}function Lt(t,r){if(t===r||t!==t)return()=>t;const s=typeof t;if(s!==typeof r||Array.isArray(t)!==Array.isArray(r))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const a=r.map((l,i)=>Lt(t[i],l));return l=>a.map(i=>i(l))}if(s==="object"){if(!t||!r)throw new Error("Object cannot be null");if(te(t)&&te(r)){t=t.getTime(),r=r.getTime();const i=r-t;return c=>new Date(t+c*i)}const a=Object.keys(r),l={};return a.forEach(i=>{l[i]=Lt(t[i],r[i])}),i=>{const c={};return a.forEach(h=>{c[h]=l[h](i)}),c}}if(s==="number"){const a=r-t;return l=>t+l*a}throw new Error(`Cannot interpolate ${s} values`)}function rr(t,r={}){const s=tr(t);let a,l=t;function i(c,h){if(t==null)return s.set(t=c),Promise.resolve();l=c;let g=a,f=!1,{delay:y=0,duration:_=400,easing:x=de,interpolate:S=Lt}=Bt(Bt({},r),h);if(_===0)return g&&(g.abort(),g=null),s.set(t=l),Promise.resolve();const v=me()+y;let A;return a=ye(H=>{if(H<v)return!0;f||(A=S(t,c),typeof _=="function"&&(_=_(t,c)),f=!0),g&&(g.abort(),g=null);const F=H-v;return F>_?(s.set(t=c),!1):(s.set(t=A(x(F/_))),!0)}),a.promise}return{set:i,update:(c,h)=>i(c(l,t),h),subscribe:s.subscribe}}const{document:nr}=He;function sr(t){let r,s,a,l,i,c,h,g,f,y,_,x,S,v,A,H,F,E,I,C,T,M,yt,et,W,at,rt,j,K,lt,ft,Y,_t,Q,ct,k,X,L,nt,wt,N,B,ut,ht,D,q,st,xt,e,o,n,u,p;return{c(){r=P("style"),r.textContent='@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap");',s=$(),a=P("main"),l=P("input"),i=$(),c=P("div"),h=P("div"),g=P("img"),y=$(),_=P("div"),x=Tt(t[4]),S=$(),v=P("div"),A=P("img"),F=$(),E=V("svg"),I=V("defs"),C=V("mask"),T=V("path"),M=V("path"),yt=$(),et=P("div"),W=V("svg"),at=V("defs"),rt=V("path"),j=V("text"),K=V("textPath"),lt=V("tspan"),ft=Tt(t[0]),_t=$(),Q=P("img"),k=$(),X=P("div"),X.textContent="START",L=$(),nt=P("div"),nt.textContent="ZIEL",wt=$(),N=P("div"),B=P("img"),ht=$(),D=P("div"),D.textContent="Berufsorientierung",q=$(),st=P("div"),st.textContent="Lehrstelle",xt=$(),e=P("div"),e.textContent="Lehrabschluss",o=$(),n=P("div"),n.textContent="Erster Job",b(l,"type","range"),z(l,"width","500px"),b(l,"min","0"),b(l,"max","3000"),At(g.src,f=$e)||b(g,"src",f),b(g,"alt","CYC Logo"),b(g,"class","svelte-kb8x2s"),b(h,"class","logo svelte-kb8x2s"),b(_,"class","counter svelte-kb8x2s"),b(c,"class","top-row svelte-kb8x2s"),At(A.src,H=Me)||b(A,"src",H),b(A,"alt","Track Background"),b(A,"class","svelte-kb8x2s"),b(T,"d","M 5e-5,742.99995 H 1100.0001 c 236.1929,0 236.3465,-326.49995 0,-326.49995 -236.34655,0 -501.73954,3e-5 -735.00005,0 -233.26051,-3e-5 -238.67685,-326.5 0,-326.5 h 583.8425 486.15755"),b(T,"stroke-width","180"),b(T,"stroke-dasharray","31, 31"),z(T,"stroke","#FFFFFFFF"),z(T,"stroke-width","180"),z(T,"stroke-dasharray","3983.4"),z(T,"stroke-dashoffset",t[3]),z(T,"stroke-opacity","1"),b(C,"maskUnits","userSpaceOnUse"),b(C,"x","0"),b(C,"y","0"),b(C,"width","1435"),b(C,"height","833"),b(C,"id","path-mask"),b(M,"d","M 5e-5,742.99995 H 1100.0001 c 236.1929,0 236.3465,-326.49995 0,-326.49995 -236.34655,0 -501.73954,3e-5 -735.00005,0 -233.26051,-3e-5 -238.67685,-326.5 0,-326.5 h 583.8425 486.15755"),b(M,"stroke-width","180"),b(M,"id","gradient-path"),z(M,"stroke","#FFFFFFFF"),z(M,"stroke-width","180"),z(M,"stroke-dasharray","none"),z(M,"stroke-opacity","1"),b(E,"width","1435"),b(E,"height","833"),b(E,"viewBox","0 0 1435 833"),b(E,"fill","none"),b(E,"version","1.1"),b(E,"id","gradient-path-svg"),b(E,"overflow","visible"),b(E,"class","svelte-kb8x2s"),b(rt,"id","testPath"),b(rt,"d","M 5e-5,742.99995 H 1100.0001 c 236.1929,0 236.3465,-326.49995 0,-326.49995 -236.34655,0 -501.73954,3e-5 -735.00005,0 -233.26051,-3e-5 -238.67685,-326.5 0,-326.5 h 583.8425 486.15755"),we(K,"xlink:href","#testPath"),b(K,"startOffset",Y=t[2]+"%"),b(j,"x","0px"),b(j,"y","0px"),b(j,"fill","#FFF"),b(j,"font-size","6em"),b(j,"font-family","Inter"),b(j,"font-weight","bold"),b(j,"dominant-baseline","mathematical"),b(j,"baseline-shift","12px"),b(W,"width","1435"),b(W,"height","833"),b(W,"class","svelte-kb8x2s"),b(et,"class","path-counter"),At(Q.src,ct=Le)||b(Q,"src",ct),b(Q,"alt","Track Checkpoints"),b(Q,"class","svelte-kb8x2s"),b(X,"class","marks start svelte-kb8x2s"),b(nt,"class","marks ziel svelte-kb8x2s"),At(B.src,ut=De)||b(B,"src",ut),b(B,"alt","Foto"),b(B,"class","svelte-kb8x2s"),b(N,"class","person svelte-kb8x2s"),z(N,"offset-distance",t[1]+"%"),b(D,"class","chkpt chkpt1 svelte-kb8x2s"),b(st,"class","chkpt chkpt2 svelte-kb8x2s"),b(e,"class","chkpt chkpt3 svelte-kb8x2s"),b(n,"class","chkpt chkpt4 svelte-kb8x2s"),b(v,"class","track svelte-kb8x2s"),b(a,"class","svelte-kb8x2s")},m(d,w){m(nr.head,r),Gt(d,s,w),Gt(d,a,w),m(a,l),m(a,i),m(a,c),m(c,h),m(h,g),m(c,y),m(c,_),m(_,x),m(a,S),m(a,v),m(v,A),m(v,F),m(v,E),m(E,I),m(I,C),m(C,T),m(E,M),m(v,yt),m(v,et),m(et,W),m(W,at),m(at,rt),m(W,j),m(j,K),m(K,lt),m(lt,ft),m(v,_t),m(v,Q),m(v,k),m(v,X),m(v,L),m(v,nt),m(v,wt),m(v,N),m(N,B),m(v,ht),m(v,D),m(v,q),m(v,st),m(v,xt),m(v,e),m(v,o),m(v,n),u||(p=_e(l,"input",t[8]),u=!0)},p(d,[w]){w&16&&Ut(x,d[4]),w&8&&z(T,"stroke-dashoffset",d[3]),w&1&&Ut(ft,d[0]),w&4&&Y!==(Y=d[2]+"%")&&b(K,"startOffset",Y),w&2&&z(N,"offset-distance",d[1]+"%")},i:Z,o:Z,d(d){Et(r),d&&Et(s),d&&Et(a),u=!1,p()}}}function ee(t){return"CHF "+Math.round(t)}function ir(t,r,s){let a,l,i,c,h,g,f,y=rr(1700,{duration:4e3,easing:er});ve(t,y,x=>s(7,f=x)),Ae(async()=>{new Qe({path:document.querySelector("#gradient-path"),segments:300,samples:3,precision:2}).render({type:"path",fill:[{color:"#F7797D",pos:0},{color:"#6DD5ED",pos:.25},{color:"#C6FFDD",pos:.5},{color:"#FBD786",pos:.75},{color:"#F7797D",pos:1}],width:120,stroke:[{color:"#F7797D",pos:0},{color:"#6DD5ED",pos:.25},{color:"#C6FFDD",pos:.5},{color:"#FBD786",pos:.75},{color:"#F7797D",pos:1}],strokeWidth:2}),document.querySelector(".gradient-path").setAttribute("mask","url(#path-mask)")});const _=x=>{y.set(x.target.value*1)};return t.$$.update=()=>{t.$$.dirty&128&&s(4,a=ee(f+6e3)),t.$$.dirty&128&&s(6,l=f/3e3),t.$$.dirty&64&&s(3,i=3983.4*(1-l)),t.$$.dirty&64&&s(2,c=l*100-15),t.$$.dirty&64&&s(1,h=l*100),t.$$.dirty&128&&s(0,g=ee(f))},[g,h,c,i,a,y,l,f,_]}class or extends Ie{constructor(r){super(),Ne(this,r,ir,sr,ne,{})}}new or({target:document.getElementById("app")});
