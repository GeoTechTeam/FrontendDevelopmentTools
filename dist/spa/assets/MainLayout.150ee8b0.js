import{c as M,a as f,h as y,b as oe,e as H,r as S,o as U,d as G,i as fe,w as Ze,R as et,t as Pe,s as Re,f as tt,g as nt,Q as X,j as $e,k as N,l as at,u as ot,m as lt,n as Q,p as ze,q as Be,v as _e,x as de,y as rt,z as it,A as ve,B as st,C as he,D as ut,E as te,F as ct,G as dt,H as ft,I as vt,J as W,K as ht,L as z,M as bt}from"./index.47011def.js";import{u as gt,a as ue,b as xe,r as mt,g as yt,c as Tt,d as wt,e as ce,f as Ct,Q as qt}from"./use-quasar.da7eaab4.js";var St=M({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:T}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:o.value},oe(T.default))}});let Rt=0;const Qe=["click","keydown"],Ie={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Rt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ae(e,T,o,a){const n=fe(Pe,H);if(n===H)return console.error("QTab/QRouteTab component needs to be child of QTabs"),H;const{proxy:v}=N(),h=S(null),C=S(null),b=S(null),u=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),L=f(()=>n.currentModel.value===e.name),P=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(L.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(a!==void 0?a.linkClass.value:"")),k=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),d=f(()=>e.disable===!0||n.hasFocus.value===!0||L.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function R(r,i){if(i!==!0&&h.value!==null&&h.value.focus(),e.disable===!0){a!==void 0&&a.hasRouterLink.value===!0&&Re(r);return}if(a===void 0){n.updateModel({name:e.name}),o("click",r);return}if(a.hasRouterLink.value===!0){const m=(q={})=>{let p;const B=q.to===void 0||at(q.to,e.to)===!0?n.avoidRouteWatcher=gt():null;return a.navigateToRouterLink(r,{...q,returnRouterError:!0}).catch(V=>{p=V}).then(V=>{if(B===n.avoidRouteWatcher&&(n.avoidRouteWatcher=!1,p===void 0&&(V===void 0||V.message.startsWith("Avoided redundant navigation")===!0)&&n.updateModel({name:e.name})),q.returnRouterError===!0)return p!==void 0?Promise.reject(p):V})};o("click",r,m),r.defaultPrevented!==!0&&m();return}o("click",r)}function I(r){tt(r,[13,32])?R(r,!0):nt(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&n.onKbdNavigate(r.keyCode,v.$el)===!0&&Re(r),o("keydown",r)}function E(){const r=n.tabProps.value.narrowIndicator,i=[],m=y("div",{ref:b,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&i.push(y(X,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&i.push(y("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&i.push(e.alertIcon!==void 0?y(X,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):y("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&i.push(m);const q=[y("div",{class:"q-focus-helper",tabindex:-1,ref:h}),y("div",{class:k.value},$e(T.default,i))];return r===!1&&q.push(m),q}const A={name:f(()=>e.name),rootRef:C,tabIndicatorRef:b,routeData:a};U(()=>{n.unregisterTab(A)}),G(()=>{n.registerTab(A)});function s(r,i){const m={ref:C,class:P.value,tabindex:d.value,role:"tab","aria-selected":L.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:R,onKeydown:I,...i};return Ze(y(r,m,E()),[[et,u.value]])}return{renderTab:s,$tabs:n}}var Le=M({name:"QRouteTab",props:{...ot,...Ie},emits:Qe,setup(e,{slots:T,emit:o}){const a=lt({useDisableForRouterLinkProps:!1}),{renderTab:n,$tabs:v}=Ae(e,T,o,{exact:f(()=>e.exact),...a});return Q(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,()=>{v.verifyRouteModel()}),()=>n(a.linkTag.value,a.linkAttrs.value)}}),ne=M({name:"QTab",props:Ie,emits:Qe,setup(e,{slots:T,emit:o}){const{renderTab:a}=Ae(e,T,o);return()=>a("div")}});function _t(){const e=S(!ze.value);return e.value===!1&&G(()=>{e.value=!0}),e}const Me=typeof ResizeObserver!="undefined",pe=Me===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ae=M({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:T}){let o=null,a,n={width:-1,height:-1};function v(b){b===!0||e.debounce===0||e.debounce==="0"?h():o===null&&(o=setTimeout(h,e.debounce))}function h(){if(o!==null&&(clearTimeout(o),o=null),a){const{offsetWidth:b,offsetHeight:u}=a;(b!==n.width||u!==n.height)&&(n={width:b,height:u},T("resize",n))}}const{proxy:C}=N();if(Me===!0){let b;const u=L=>{a=C.$el.parentNode,a?(b=new ResizeObserver(v),b.observe(a),h()):L!==!0&&_e(()=>{u(!0)})};return G(()=>{u()}),U(()=>{o!==null&&clearTimeout(o),b!==void 0&&(b.disconnect!==void 0?b.disconnect():a&&b.unobserve(a))}),Be}else{let L=function(){o!==null&&(clearTimeout(o),o=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",v,de.passive),u=void 0)},P=function(){L(),a&&a.contentDocument&&(u=a.contentDocument.defaultView,u.addEventListener("resize",v,de.passive),h())};const b=_t();let u;return G(()=>{_e(()=>{a=C.$el,a&&P()})}),U(L),C.trigger=v,()=>{if(b.value===!0)return y("object",{style:pe.style,tabindex:-1,type:"text/html",data:pe.url,"aria-hidden":"true",onLoad:P})}}}});function xt(e,T,o){const a=o===!0?["left","right"]:["top","bottom"];return`absolute-${T===!0?a[0]:a[1]}${e?` text-${e}`:""}`}const Lt=["left","center","right","justify"];var pt=M({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Lt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:T,emit:o}){const{proxy:a}=N(),{$q:n}=a,{registerTick:v}=ue(),{registerTick:h}=ue(),{registerTick:C}=ue(),{registerTimeout:b,removeTimeout:u}=xe(),{registerTimeout:L,removeTimeout:P}=xe(),k=S(null),d=S(null),R=S(e.modelValue),I=S(!1),E=S(!0),A=S(!1),s=S(!1),r=[],i=S(0),m=S(!1);let q=null,p=null,B;const V=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:xt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ve=f(()=>{const t=i.value,l=R.value;for(let c=0;c<t;c++)if(r[c].name.value===l)return!0;return!1}),Ee=f(()=>`q-tabs__content--align-${I.value===!0?"left":s.value===!0?"justify":e.align}`),Oe=f(()=>`q-tabs row no-wrap items-center q-tabs--${I.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),He=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ee.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),J=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Y=f(()=>e.vertical!==!0&&n.lang.rtl===!0),le=f(()=>mt===!1&&Y.value===!0);Q(Y,K),Q(()=>e.modelValue,t=>{re({name:t,setCurrent:!0,skipEmit:!0})}),Q(()=>e.outsideArrows,Z);function re({name:t,setCurrent:l,skipEmit:c}){R.value!==t&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",t),(l===!0||e["onUpdate:modelValue"]===void 0)&&(Fe(R.value,t),R.value=t))}function Z(){v(()=>{be({width:k.value.offsetWidth,height:k.value.offsetHeight})})}function be(t){if(J.value===void 0||d.value===null)return;const l=t[J.value.container],c=Math.min(d.value[J.value.scroll],Array.prototype.reduce.call(d.value.children,(x,w)=>x+(w[J.value.content]||0),0)),_=l>0&&c>l;I.value=_,_===!0&&h(K),s.value=l<parseInt(e.breakpoint,10)}function Fe(t,l){const c=t!=null&&t!==""?r.find(x=>x.name.value===t):null,_=l!=null&&l!==""?r.find(x=>x.name.value===l):null;if(c&&_){const x=c.tabIndicatorRef.value,w=_.tabIndicatorRef.value;q!==null&&(clearTimeout(q),q=null),x.style.transition="none",x.style.transform="none",w.style.transition="none",w.style.transform="none";const g=x.getBoundingClientRect(),$=w.getBoundingClientRect();w.style.transform=e.vertical===!0?`translate3d(0,${g.top-$.top}px,0) scale3d(1,${$.height?g.height/$.height:1},1)`:`translate3d(${g.left-$.left}px,0,0) scale3d(${$.width?g.width/$.width:1},1,1)`,C(()=>{q=setTimeout(()=>{q=null,w.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",w.style.transform="none"},70)})}_&&I.value===!0&&j(_.rootRef.value)}function j(t){const{left:l,width:c,top:_,height:x}=d.value.getBoundingClientRect(),w=t.getBoundingClientRect();let g=e.vertical===!0?w.top-_:w.left-l;if(g<0){d.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(g),K();return}g+=e.vertical===!0?w.height-x:w.width-c,g>0&&(d.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(g),K())}function K(){const t=d.value;if(t===null)return;const l=t.getBoundingClientRect(),c=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);Y.value===!0?(E.value=Math.ceil(c+l.width)<t.scrollWidth-1,A.value=c>0):(E.value=c>0,A.value=e.vertical===!0?Math.ceil(c+l.height)<t.scrollHeight:Math.ceil(c+l.width)<t.scrollWidth)}function ge(t){p!==null&&clearInterval(p),p=setInterval(()=>{Ne(t)===!0&&F()},5)}function me(){ge(le.value===!0?Number.MAX_SAFE_INTEGER:0)}function ye(){ge(le.value===!0?0:Number.MAX_SAFE_INTEGER)}function F(){p!==null&&(clearInterval(p),p=null)}function De(t,l){const c=Array.prototype.filter.call(d.value.children,$=>$===l||$.matches&&$.matches(".q-tab.q-focusable")===!0),_=c.length;if(_===0)return;if(t===36)return j(c[0]),c[0].focus(),!0;if(t===35)return j(c[_-1]),c[_-1].focus(),!0;const x=t===(e.vertical===!0?38:37),w=t===(e.vertical===!0?40:39),g=x===!0?-1:w===!0?1:void 0;if(g!==void 0){const $=Y.value===!0?-1:1,O=c.indexOf(l)+g*$;return O>=0&&O<_&&(j(c[O]),c[O].focus({preventScroll:!0})),!0}}const We=f(()=>le.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,l)=>{t.scrollLeft=-l}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,l)=>{t.scrollTop=l}}:{get:t=>t.scrollLeft,set:(t,l)=>{t.scrollLeft=l}});function Ne(t){const l=d.value,{get:c,set:_}=We.value;let x=!1,w=c(l);const g=t<w?-1:1;return w+=g*5,w<0?(x=!0,w=0):(g===-1&&w<=t||g===1&&w>=t)&&(x=!0,w=t),_(l,w),K(),x}function Te(t,l){for(const c in t)if(t[c]!==l[c])return!1;return!0}function je(){let t=null,l={matchedLen:0,queryDiff:9999,hrefLen:0};const c=r.filter(g=>g.routeData!==void 0&&g.routeData.hasRouterLink.value===!0),{hash:_,query:x}=a.$route,w=Object.keys(x).length;for(const g of c){const $=g.routeData.exact.value===!0;if(g.routeData[$===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:O,query:ie,matched:Je,href:Ye}=g.routeData.resolvedLink.value,se=Object.keys(ie).length;if($===!0){if(O!==_||se!==w||Te(x,ie)===!1)continue;t=g.name.value;break}if(O!==""&&O!==_||se!==0&&Te(ie,x)===!1)continue;const D={matchedLen:Je.length,queryDiff:w-se,hrefLen:Ye.length-O.length};if(D.matchedLen>l.matchedLen){t=g.name.value,l=D;continue}else if(D.matchedLen!==l.matchedLen)continue;if(D.queryDiff<l.queryDiff)t=g.name.value,l=D;else if(D.queryDiff!==l.queryDiff)continue;D.hrefLen>l.hrefLen&&(t=g.name.value,l=D)}t===null&&r.some(g=>g.routeData===void 0&&g.name.value===R.value)===!0||re({name:t,setCurrent:!0})}function Ke(t){if(u(),m.value!==!0&&k.value!==null&&t.target&&typeof t.target.closest=="function"){const l=t.target.closest(".q-tab");l&&k.value.contains(l)===!0&&(m.value=!0,I.value===!0&&j(l))}}function Ue(){b(()=>{m.value=!1},30)}function ee(){Ce.avoidRouteWatcher===!1?L(je):P()}function we(){if(B===void 0){const t=Q(()=>a.$route.fullPath,ee);B=()=>{t(),B=void 0}}}function Ge(t){r.push(t),i.value++,Z(),t.routeData===void 0||a.$route===void 0?L(()=>{if(I.value===!0){const l=R.value,c=l!=null&&l!==""?r.find(_=>_.name.value===l):null;c&&j(c.rootRef.value)}}):(we(),t.routeData.hasRouterLink.value===!0&&ee())}function Xe(t){r.splice(r.indexOf(t),1),i.value--,Z(),B!==void 0&&t.routeData!==void 0&&(r.every(l=>l.routeData===void 0)===!0&&B(),ee())}const Ce={currentModel:R,tabProps:V,hasFocus:m,hasActiveTab:Ve,registerTab:Ge,unregisterTab:Xe,verifyRouteModel:ee,updateModel:re,onKbdNavigate:De,avoidRouteWatcher:!1};ve(Pe,Ce);function qe(){q!==null&&clearTimeout(q),F(),B!==void 0&&B()}let Se;return U(qe),rt(()=>{Se=B!==void 0,qe()}),it(()=>{Se===!0&&we(),Z()}),()=>y("div",{ref:k,class:Oe.value,role:"tablist",onFocusin:Ke,onFocusout:Ue},[y(ae,{onResize:be}),y("div",{ref:d,class:He.value,onScroll:K},oe(T.default)),y(X,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:me,onTouchstartPassive:me,onMouseupPassive:F,onMouseleavePassive:F,onTouchendPassive:F}),y(X,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(A.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ye,onTouchstartPassive:ye,onMouseupPassive:F,onMouseleavePassive:F,onTouchendPassive:F})])}});const kt=y("div",{class:"q-space"});var Pt=M({name:"QSpace",setup(){return()=>kt}}),$t=M({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:T}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:o.value,role:"toolbar"},oe(T.default))}}),zt=M({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:T,emit:o}){const{proxy:{$q:a}}=N(),n=fe(he,H);if(n===H)return console.error("QHeader needs to be child of QLayout"),H;const v=S(parseInt(e.heightHint,10)),h=S(!0),C=f(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||a.platform.is.ios&&n.isContainer.value===!0),b=f(()=>{if(e.modelValue!==!0)return 0;if(C.value===!0)return h.value===!0?v.value:0;const s=v.value-n.scroll.value.position;return s>0?s:0}),u=f(()=>e.modelValue!==!0||C.value===!0&&h.value!==!0),L=f(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),P=f(()=>"q-header q-layout__section--marginal "+(C.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),k=f(()=>{const s=n.rows.value.top,r={};return s[0]==="l"&&n.left.space===!0&&(r[a.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),s[2]==="r"&&n.right.space===!0&&(r[a.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),r});function d(s,r){n.update("header",s,r)}function R(s,r){s.value!==r&&(s.value=r)}function I({height:s}){R(v,s),d("size",s)}function E(s){L.value===!0&&R(h,!0),o("focusin",s)}Q(()=>e.modelValue,s=>{d("space",s),R(h,!0),n.animate()}),Q(b,s=>{d("offset",s)}),Q(()=>e.reveal,s=>{s===!1&&R(h,e.modelValue)}),Q(h,s=>{n.animate(),o("reveal",s)}),Q(n.scroll,s=>{e.reveal===!0&&R(h,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const A={};return n.instances.header=A,e.modelValue===!0&&d("size",v.value),d("space",e.modelValue),d("offset",b.value),U(()=>{n.instances.header===A&&(n.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const s=st(T.default,[]);return e.elevated===!0&&s.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(y(ae,{debounce:0,onResize:I})),y("header",{class:P.value,style:k.value,onFocusin:E},s)}}}),Bt=M({name:"QPageContainer",setup(e,{slots:T}){const{proxy:{$q:o}}=N(),a=fe(he,H);if(a===H)return console.error("QPageContainer needs to be child of QLayout"),H;ve(ut,!0);const n=f(()=>{const v={};return a.header.space===!0&&(v.paddingTop=`${a.header.size}px`),a.right.space===!0&&(v[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(v.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(v[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),v});return()=>y("div",{class:"q-page-container",style:n.value},oe(T.default))}});const{passive:ke}=de,Qt=["both","horizontal","vertical"];var It=M({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Qt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:T}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,n,v;Q(()=>e.scrollTarget,()=>{b(),C()});function h(){a!==null&&a();const P=Math.max(0,Tt(n)),k=wt(n),d={top:P-o.position.top,left:k-o.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const R=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";o.position={top:P,left:k},o.directionChanged=o.direction!==R,o.delta=d,o.directionChanged===!0&&(o.direction=R,o.inflectionPoint=o.position),T("scroll",{...o})}function C(){n=yt(v,e.scrollTarget),n.addEventListener("scroll",u,ke),u(!0)}function b(){n!==void 0&&(n.removeEventListener("scroll",u,ke),n=void 0)}function u(P){if(P===!0||e.debounce===0||e.debounce==="0")h();else if(a===null){const[k,d]=e.debounce?[setTimeout(h,e.debounce),clearTimeout]:[requestAnimationFrame(h),cancelAnimationFrame];a=()=>{d(k),a=null}}}const{proxy:L}=N();return Q(()=>L.$q.lang.rtl,h),G(()=>{v=L.$el.parentNode,C()}),U(()=>{a!==null&&a(),b()}),Object.assign(L,{trigger:u,getPosition:()=>o}),Be}}),At=M({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:T,emit:o}){const{proxy:{$q:a}}=N(),n=S(null),v=S(a.screen.height),h=S(e.container===!0?0:a.screen.width),C=S({position:0,direction:"down",inflectionPoint:0}),b=S(0),u=S(ze.value===!0?0:ce()),L=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),P=f(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),k=f(()=>u.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),d=f(()=>u.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function R(i){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};C.value=m,e.onScroll!==void 0&&o("scroll",m)}}function I(i){const{height:m,width:q}=i;let p=!1;v.value!==m&&(p=!0,v.value=m,e.onScrollHeight!==void 0&&o("scrollHeight",m),A()),h.value!==q&&(p=!0,h.value=q),p===!0&&e.onResize!==void 0&&o("resize",i)}function E({height:i}){b.value!==i&&(b.value=i,A())}function A(){if(e.container===!0){const i=v.value>b.value?ce():0;u.value!==i&&(u.value=i)}}let s=null;const r={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:n,height:v,containerHeight:b,scrollbarWidth:u,totalWidth:f(()=>h.value+u.value),rows:f(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:te({size:0,offset:0,space:!1}),right:te({size:300,offset:0,space:!1}),footer:te({size:0,offset:0,space:!1}),left:te({size:300,offset:0,space:!1}),scroll:C,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,m,q){r[i][m]=q}};if(ve(he,r),ce()>0){let q=function(){i=null,m.classList.remove("hide-scrollbar")},p=function(){if(i===null){if(m.scrollHeight>a.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(q,300)},B=function(V){i!==null&&V==="remove"&&(clearTimeout(i),q()),window[`${V}EventListener`]("resize",p)},i=null;const m=document.body;Q(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),ct(()=>{B("remove")})}return()=>{const i=$e(T.default,[y(It,{onScroll:R}),y(ae,{onResize:I})]),m=y("div",{class:L.value,style:P.value,ref:e.container===!0?void 0:n,tabindex:-1},i);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:n},[y(ae,{onResize:E}),y("div",{class:"absolute-full",style:k.value},[y("div",{class:"scroll",style:d.value},[m])])]):m}}});const Mt=dt("TabOptionStore",{state:()=>({option:"table"}),getters:{getOption:e=>e.option},actions:{Change(e){this.option=e}},persist:!0}),Ot={__name:"MainLayout",setup(e){const T=Mt();console.log(T.getOption);const o=S(T.getOption),a=["\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0432\u043E\u0434\u0430","\u0418\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u044F","\u0410\u0440\u0442\u0441\u043A\u0432\u0430\u0436\u0438\u043D\u044B","\u041F\u0438\u0442\u044C\u0435\u0432\u0430\u044F \u0432\u043E\u0434\u0430"],n=S("\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0432\u043E\u0434\u0430");Ct();function v(h){console.log(h),T.Change(h)}return(h,C)=>{const b=ht("router-view");return ft(),vt(At,{view:"hHh lpR fFf"},{default:W(()=>[z(zt,{elevated:"",class:"bg-primary text-white","height-hint":"98"},{default:W(()=>[z($t,null,{default:W(()=>[z(St,null,{default:W(()=>[bt(" \u0425\u0410\u041C ")]),_:1}),z(pt,{modelValue:o.value,"onUpdate:modelValue":[C[0]||(C[0]=u=>o.value=u),v],shrink:"",stretch:""},{default:W(()=>[z(Le,{name:"table",icon:"dataset",label:"\u0422\u0430\u0431\u043B\u0438\u0446\u0430",to:"/",onClick:v,exact:""}),z(Le,{name:"map",icon:"map",label:"\u041A\u0430\u0440\u0442\u0430",to:"/map",exact:""}),z(ne,{name:"videos",label:"\u0421\u0431\u043E\u0440 \u0434\u0430\u043D\u043D\u044B\u0445"}),z(ne,{name:"protocols",label:"\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u044B"}),z(ne,{name:"diffs",label:"\u041F\u043E\u0433\u0440\u0435\u0448\u043D\u043E\u0441\u0442\u044C"}),z(ne,{name:"help",label:"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A"})]),_:1},8,["modelValue"]),z(Pt),z(qt,{color:"black","bg-color":"white",filled:"",modelValue:n.value,"onUpdate:modelValue":C[1]||(C[1]=u=>n.value=u),options:a,dense:""},{prepend:W(()=>[z(X,{name:"water_drop"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),z(Bt,null,{default:W(()=>[z(b)]),_:1})]),_:1})}}};export{Ot as default};
