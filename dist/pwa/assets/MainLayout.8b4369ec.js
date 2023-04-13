import{c as M,h as ae,R as Ge,Q as X,a as $e,b as Xe}from"./use-router-link.09084bb0.js";import{c as v,h as y,i as fe,e as F,r as C,o as U,a as J,t as ke,w as Je,s as _e,b as Ye,d as Ze,g as N,f as et,j as ze,n as pe,k as Re,l as de,m as A,p as ve,q as tt,u as nt,v as he,x as lt,y as ne,z as at,A as ot,B as rt,C as W,D as it,E as B,F as ut}from"./index.6f6fbe91.js";import{u as st,a as se,b as xe,r as ct,g as dt,c as ft,d as vt,e as ce,Q as ht}from"./QSelect.1458211f.js";var bt=M({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:T}){const o=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:o.value},ae(T.default))}});const gt=y("div",{class:"q-space"});var mt=M({name:"QSpace",setup(){return()=>gt}}),yt=M({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:T}){const o=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:o.value,role:"toolbar"},ae(T.default))}});let wt=0;const Tt=["click","keydown"],qt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${wt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ct(e,T,o,l){const n=fe(ke,F);if(n===F)return console.error("QTab/QRouteTab component needs to be child of QTabs"),F;const{proxy:f}=N(),b=C(null),S=C(null),g=C(null),c=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),L=v(()=>n.currentModel.value===e.name),k=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(L.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(l!==void 0?l.linkClass.value:"")),$=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),d=v(()=>e.disable===!0||n.hasFocus.value===!0||L.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function _(r,i){if(i!==!0&&b.value!==null&&b.value.focus(),e.disable===!0){l!==void 0&&l.hasRouterLink.value===!0&&_e(r);return}if(l===void 0){n.updateModel({name:e.name}),o("click",r);return}if(l.hasRouterLink.value===!0){const m=(q={})=>{let P;const p=q.to===void 0||et(q.to,e.to)===!0?n.avoidRouteWatcher=st():null;return l.navigateToRouterLink(r,{...q,returnRouterError:!0}).catch(V=>{P=V}).then(V=>{if(p===n.avoidRouteWatcher&&(n.avoidRouteWatcher=!1,P===void 0&&(V===void 0||V.message.startsWith("Avoided redundant navigation")===!0)&&n.updateModel({name:e.name})),q.returnRouterError===!0)return P!==void 0?Promise.reject(P):V})};o("click",r,m),r.defaultPrevented!==!0&&m();return}o("click",r)}function Q(r){Ye(r,[13,32])?_(r,!0):Ze(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&n.onKbdNavigate(r.keyCode,f.$el)===!0&&_e(r),o("keydown",r)}function E(){const r=n.tabProps.value.narrowIndicator,i=[],m=y("div",{ref:g,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&i.push(y(X,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&i.push(y("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&i.push(e.alertIcon!==void 0?y(X,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):y("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&i.push(m);const q=[y("div",{class:"q-focus-helper",tabindex:-1,ref:b}),y("div",{class:$.value},$e(T.default,i))];return r===!1&&q.push(m),q}const I={name:v(()=>e.name),rootRef:S,tabIndicatorRef:g,routeData:l};U(()=>{n.unregisterTab(I)}),J(()=>{n.registerTab(I)});function u(r,i){const m={ref:S,class:k.value,tabindex:d.value,role:"tab","aria-selected":L.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:_,onKeydown:Q,...i};return Je(y(r,m,E()),[[Ge,c.value]])}return{renderTab:u,$tabs:n}}var G=M({name:"QTab",props:qt,emits:Tt,setup(e,{slots:T,emit:o}){const{renderTab:l}=Ct(e,T,o);return()=>l("div")}});function St(){const e=C(!ze.value);return e.value===!1&&J(()=>{e.value=!0}),e}const Be=typeof ResizeObserver!="undefined",Le=Be===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var le=M({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:T}){let o=null,l,n={width:-1,height:-1};function f(g){g===!0||e.debounce===0||e.debounce==="0"?b():o===null&&(o=setTimeout(b,e.debounce))}function b(){if(o!==null&&(clearTimeout(o),o=null),l){const{offsetWidth:g,offsetHeight:c}=l;(g!==n.width||c!==n.height)&&(n={width:g,height:c},T("resize",n))}}const{proxy:S}=N();if(Be===!0){let g;const c=L=>{l=S.$el.parentNode,l?(g=new ResizeObserver(f),g.observe(l),b()):L!==!0&&Re(()=>{c(!0)})};return J(()=>{c()}),U(()=>{o!==null&&clearTimeout(o),g!==void 0&&(g.disconnect!==void 0?g.disconnect():l&&g.unobserve(l))}),pe}else{let L=function(){o!==null&&(clearTimeout(o),o=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",f,de.passive),c=void 0)},k=function(){L(),l&&l.contentDocument&&(c=l.contentDocument.defaultView,c.addEventListener("resize",f,de.passive),b())};const g=St();let c;return J(()=>{Re(()=>{l=S.$el,l&&k()})}),U(L),S.trigger=f,()=>{if(g.value===!0)return y("object",{style:Le.style,tabindex:-1,type:"text/html",data:Le.url,"aria-hidden":"true",onLoad:k})}}}});function _t(e,T,o){const l=o===!0?["left","right"]:["top","bottom"];return`absolute-${T===!0?l[0]:l[1]}${e?` text-${e}`:""}`}const Rt=["left","center","right","justify"];var xt=M({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Rt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:T,emit:o}){const{proxy:l}=N(),{$q:n}=l,{registerTick:f}=se(),{registerTick:b}=se(),{registerTick:S}=se(),{registerTimeout:g,removeTimeout:c}=xe(),{registerTimeout:L,removeTimeout:k}=xe(),$=C(null),d=C(null),_=C(e.modelValue),Q=C(!1),E=C(!0),I=C(!1),u=C(!1),r=[],i=C(0),m=C(!1);let q=null,P=null,p;const V=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:_t(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Qe=v(()=>{const t=i.value,a=_.value;for(let s=0;s<t;s++)if(r[s].name.value===a)return!0;return!1}),Ie=v(()=>`q-tabs__content--align-${Q.value===!0?"left":u.value===!0?"justify":e.align}`),Ae=v(()=>`q-tabs row no-wrap items-center q-tabs--${Q.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ve=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ie.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),Y=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Z=v(()=>e.vertical!==!0&&n.lang.rtl===!0),oe=v(()=>ct===!1&&Z.value===!0);A(Z,K),A(()=>e.modelValue,t=>{re({name:t,setCurrent:!0,skipEmit:!0})}),A(()=>e.outsideArrows,ee);function re({name:t,setCurrent:a,skipEmit:s}){_.value!==t&&(s!==!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(Me(_.value,t),_.value=t))}function ee(){f(()=>{be({width:$.value.offsetWidth,height:$.value.offsetHeight})})}function be(t){if(Y.value===void 0||d.value===null)return;const a=t[Y.value.container],s=Math.min(d.value[Y.value.scroll],Array.prototype.reduce.call(d.value.children,(x,w)=>x+(w[Y.value.content]||0),0)),R=a>0&&s>a;Q.value=R,R===!0&&b(K),u.value=a<parseInt(e.breakpoint,10)}function Me(t,a){const s=t!=null&&t!==""?r.find(x=>x.name.value===t):null,R=a!=null&&a!==""?r.find(x=>x.name.value===a):null;if(s&&R){const x=s.tabIndicatorRef.value,w=R.tabIndicatorRef.value;q!==null&&(clearTimeout(q),q=null),x.style.transition="none",x.style.transform="none",w.style.transition="none",w.style.transform="none";const h=x.getBoundingClientRect(),z=w.getBoundingClientRect();w.style.transform=e.vertical===!0?`translate3d(0,${h.top-z.top}px,0) scale3d(1,${z.height?h.height/z.height:1},1)`:`translate3d(${h.left-z.left}px,0,0) scale3d(${z.width?h.width/z.width:1},1,1)`,S(()=>{q=setTimeout(()=>{q=null,w.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",w.style.transform="none"},70)})}R&&Q.value===!0&&j(R.rootRef.value)}function j(t){const{left:a,width:s,top:R,height:x}=d.value.getBoundingClientRect(),w=t.getBoundingClientRect();let h=e.vertical===!0?w.top-R:w.left-a;if(h<0){d.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(h),K();return}h+=e.vertical===!0?w.height-x:w.width-s,h>0&&(d.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(h),K())}function K(){const t=d.value;if(t===null)return;const a=t.getBoundingClientRect(),s=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);Z.value===!0?(E.value=Math.ceil(s+a.width)<t.scrollWidth-1,I.value=s>0):(E.value=s>0,I.value=e.vertical===!0?Math.ceil(s+a.height)<t.scrollHeight:Math.ceil(s+a.width)<t.scrollWidth)}function ge(t){P!==null&&clearInterval(P),P=setInterval(()=>{Fe(t)===!0&&O()},5)}function me(){ge(oe.value===!0?Number.MAX_SAFE_INTEGER:0)}function ye(){ge(oe.value===!0?0:Number.MAX_SAFE_INTEGER)}function O(){P!==null&&(clearInterval(P),P=null)}function Ee(t,a){const s=Array.prototype.filter.call(d.value.children,z=>z===a||z.matches&&z.matches(".q-tab.q-focusable")===!0),R=s.length;if(R===0)return;if(t===36)return j(s[0]),s[0].focus(),!0;if(t===35)return j(s[R-1]),s[R-1].focus(),!0;const x=t===(e.vertical===!0?38:37),w=t===(e.vertical===!0?40:39),h=x===!0?-1:w===!0?1:void 0;if(h!==void 0){const z=Z.value===!0?-1:1,H=s.indexOf(a)+h*z;return H>=0&&H<R&&(j(s[H]),s[H].focus({preventScroll:!0})),!0}}const He=v(()=>oe.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Fe(t){const a=d.value,{get:s,set:R}=He.value;let x=!1,w=s(a);const h=t<w?-1:1;return w+=h*5,w<0?(x=!0,w=0):(h===-1&&w<=t||h===1&&w>=t)&&(x=!0,w=t),R(a,w),K(),x}function we(t,a){for(const s in t)if(t[s]!==a[s])return!1;return!0}function Oe(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const s=r.filter(h=>h.routeData!==void 0&&h.routeData.hasRouterLink.value===!0),{hash:R,query:x}=l.$route,w=Object.keys(x).length;for(const h of s){const z=h.routeData.exact.value===!0;if(h.routeData[z===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:H,query:ie,matched:Ke,href:Ue}=h.routeData.resolvedLink.value,ue=Object.keys(ie).length;if(z===!0){if(H!==R||ue!==w||we(x,ie)===!1)continue;t=h.name.value;break}if(H!==""&&H!==R||ue!==0&&we(ie,x)===!1)continue;const D={matchedLen:Ke.length,queryDiff:w-ue,hrefLen:Ue.length-H.length};if(D.matchedLen>a.matchedLen){t=h.name.value,a=D;continue}else if(D.matchedLen!==a.matchedLen)continue;if(D.queryDiff<a.queryDiff)t=h.name.value,a=D;else if(D.queryDiff!==a.queryDiff)continue;D.hrefLen>a.hrefLen&&(t=h.name.value,a=D)}t===null&&r.some(h=>h.routeData===void 0&&h.name.value===_.value)===!0||re({name:t,setCurrent:!0})}function De(t){if(c(),m.value!==!0&&$.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&$.value.contains(a)===!0&&(m.value=!0,Q.value===!0&&j(a))}}function We(){g(()=>{m.value=!1},30)}function te(){qe.avoidRouteWatcher===!1?L(Oe):k()}function Te(){if(p===void 0){const t=A(()=>l.$route.fullPath,te);p=()=>{t(),p=void 0}}}function Ne(t){r.push(t),i.value++,ee(),t.routeData===void 0||l.$route===void 0?L(()=>{if(Q.value===!0){const a=_.value,s=a!=null&&a!==""?r.find(R=>R.name.value===a):null;s&&j(s.rootRef.value)}}):(Te(),t.routeData.hasRouterLink.value===!0&&te())}function je(t){r.splice(r.indexOf(t),1),i.value--,ee(),p!==void 0&&t.routeData!==void 0&&(r.every(a=>a.routeData===void 0)===!0&&p(),te())}const qe={currentModel:_,tabProps:V,hasFocus:m,hasActiveTab:Qe,registerTab:Ne,unregisterTab:je,verifyRouteModel:te,updateModel:re,onKbdNavigate:Ee,avoidRouteWatcher:!1};ve(ke,qe);function Ce(){q!==null&&clearTimeout(q),O(),p!==void 0&&p()}let Se;return U(Ce),tt(()=>{Se=p!==void 0,Ce()}),nt(()=>{Se===!0&&Te(),ee()}),()=>y("div",{ref:$,class:Ae.value,role:"tablist",onFocusin:De,onFocusout:We},[y(le,{onResize:be}),y("div",{ref:d,class:Ve.value,onScroll:K},ae(T.default)),y(X,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:me,onTouchstartPassive:me,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O}),y(X,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ye,onTouchstartPassive:ye,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O})])}}),Lt=M({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:T,emit:o}){const{proxy:{$q:l}}=N(),n=fe(he,F);if(n===F)return console.error("QHeader needs to be child of QLayout"),F;const f=C(parseInt(e.heightHint,10)),b=C(!0),S=v(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||l.platform.is.ios&&n.isContainer.value===!0),g=v(()=>{if(e.modelValue!==!0)return 0;if(S.value===!0)return b.value===!0?f.value:0;const u=f.value-n.scroll.value.position;return u>0?u:0}),c=v(()=>e.modelValue!==!0||S.value===!0&&b.value!==!0),L=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),k=v(()=>"q-header q-layout__section--marginal "+(S.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),$=v(()=>{const u=n.rows.value.top,r={};return u[0]==="l"&&n.left.space===!0&&(r[l.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),u[2]==="r"&&n.right.space===!0&&(r[l.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),r});function d(u,r){n.update("header",u,r)}function _(u,r){u.value!==r&&(u.value=r)}function Q({height:u}){_(f,u),d("size",u)}function E(u){L.value===!0&&_(b,!0),o("focusin",u)}A(()=>e.modelValue,u=>{d("space",u),_(b,!0),n.animate()}),A(g,u=>{d("offset",u)}),A(()=>e.reveal,u=>{u===!1&&_(b,e.modelValue)}),A(b,u=>{n.animate(),o("reveal",u)}),A(n.scroll,u=>{e.reveal===!0&&_(b,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const I={};return n.instances.header=I,e.modelValue===!0&&d("size",f.value),d("space",e.modelValue),d("offset",g.value),U(()=>{n.instances.header===I&&(n.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const u=Xe(T.default,[]);return e.elevated===!0&&u.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(y(le,{debounce:0,onResize:Q})),y("header",{class:k.value,style:$.value,onFocusin:E},u)}}}),Pt=M({name:"QPageContainer",setup(e,{slots:T}){const{proxy:{$q:o}}=N(),l=fe(he,F);if(l===F)return console.error("QPageContainer needs to be child of QLayout"),F;ve(lt,!0);const n=v(()=>{const f={};return l.header.space===!0&&(f.paddingTop=`${l.header.size}px`),l.right.space===!0&&(f[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(f.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(f[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),f});return()=>y("div",{class:"q-page-container",style:n.value},ae(T.default))}});const{passive:Pe}=de,$t=["both","horizontal","vertical"];var kt=M({name:"QScrollObserver",props:{axis:{type:String,validator:e=>$t.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:T}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,n,f;A(()=>e.scrollTarget,()=>{g(),S()});function b(){l!==null&&l();const k=Math.max(0,ft(n)),$=vt(n),d={top:k-o.position.top,left:$-o.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const _=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";o.position={top:k,left:$},o.directionChanged=o.direction!==_,o.delta=d,o.directionChanged===!0&&(o.direction=_,o.inflectionPoint=o.position),T("scroll",{...o})}function S(){n=dt(f,e.scrollTarget),n.addEventListener("scroll",c,Pe),c(!0)}function g(){n!==void 0&&(n.removeEventListener("scroll",c,Pe),n=void 0)}function c(k){if(k===!0||e.debounce===0||e.debounce==="0")b();else if(l===null){const[$,d]=e.debounce?[setTimeout(b,e.debounce),clearTimeout]:[requestAnimationFrame(b),cancelAnimationFrame];l=()=>{d($),l=null}}}const{proxy:L}=N();return A(()=>L.$q.lang.rtl,b),J(()=>{f=L.$el.parentNode,S()}),U(()=>{l!==null&&l(),g()}),Object.assign(L,{trigger:c,getPosition:()=>o}),pe}}),zt=M({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:T,emit:o}){const{proxy:{$q:l}}=N(),n=C(null),f=C(l.screen.height),b=C(e.container===!0?0:l.screen.width),S=C({position:0,direction:"down",inflectionPoint:0}),g=C(0),c=C(ze.value===!0?0:ce()),L=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),k=v(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),$=v(()=>c.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),d=v(()=>c.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function _(i){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};S.value=m,e.onScroll!==void 0&&o("scroll",m)}}function Q(i){const{height:m,width:q}=i;let P=!1;f.value!==m&&(P=!0,f.value=m,e.onScrollHeight!==void 0&&o("scrollHeight",m),I()),b.value!==q&&(P=!0,b.value=q),P===!0&&e.onResize!==void 0&&o("resize",i)}function E({height:i}){g.value!==i&&(g.value=i,I())}function I(){if(e.container===!0){const i=f.value>g.value?ce():0;c.value!==i&&(c.value=i)}}let u=null;const r={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:n,height:f,containerHeight:g,scrollbarWidth:c,totalWidth:v(()=>b.value+c.value),rows:v(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:S,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,m,q){r[i][m]=q}};if(ve(he,r),ce()>0){let q=function(){i=null,m.classList.remove("hide-scrollbar")},P=function(){if(i===null){if(m.scrollHeight>l.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(q,300)},p=function(V){i!==null&&V==="remove"&&(clearTimeout(i),q()),window[`${V}EventListener`]("resize",P)},i=null;const m=document.body;A(()=>e.container!==!0?"add":"remove",p),e.container!==!0&&p("add"),at(()=>{p("remove")})}return()=>{const i=$e(T.default,[y(kt,{onScroll:_}),y(le,{onResize:Q})]),m=y("div",{class:L.value,style:k.value,ref:e.container===!0?void 0:n,tabindex:-1},i);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:n},[y(le,{onResize:E}),y("div",{class:"absolute-full",style:$.value},[y("div",{class:"scroll",style:d.value},[m])])]):m}}});const It={__name:"MainLayout",setup(e){const T=C("images"),o=["\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0432\u043E\u0434\u0430","\u0418\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u044F","\u0410\u0440\u0442\u0441\u043A\u0432\u0430\u0436\u0438\u043D\u044B","\u041F\u0438\u0442\u044C\u0435\u0432\u0430\u044F \u0432\u043E\u0434\u0430"],l=C("\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0432\u043E\u0434\u0430");return(n,f)=>{const b=it("router-view");return ot(),rt(zt,{view:"hHh lpR fFf"},{default:W(()=>[B(Lt,{elevated:"",class:"bg-primary text-white","height-hint":"98"},{default:W(()=>[B(yt,null,{default:W(()=>[B(bt,null,{default:W(()=>[ut(" \u0425\u0410\u041C ")]),_:1}),B(mt),B(ht,{color:"black","bg-color":"white",filled:"",modelValue:l.value,"onUpdate:modelValue":f[0]||(f[0]=S=>l.value=S),options:o,dense:""},{prepend:W(()=>[B(X,{name:"water_drop"})]),_:1},8,["modelValue"])]),_:1}),B(xt,{modelValue:T.value,"onUpdate:modelValue":f[1]||(f[1]=S=>T.value=S)},{default:W(()=>[B(G,{name:"images",label:"\u0416\u0443\u0440\u043D\u0430\u043B \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),B(G,{name:"videos",label:"\u0421\u0431\u043E\u0440 \u0434\u0430\u043D\u043D\u044B\u0445"}),B(G,{name:"protocols",label:"\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u044B"}),B(G,{name:"diffs",label:"\u041F\u043E\u0433\u0440\u0435\u0448\u043D\u043E\u0441\u0442\u044C"}),B(G,{name:"help",label:"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A"})]),_:1},8,["modelValue"])]),_:1}),B(Pt,null,{default:W(()=>[B(b)]),_:1})]),_:1})}}};export{It as default};
