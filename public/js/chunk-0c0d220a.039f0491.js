(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c0d220a"],{3530:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",light:"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{staticClass:"grey lighten-3"},[i("v-toolbar",{staticClass:"white--text",attrs:{color:"success",flat:"",tile:""}},[i("v-btn",{attrs:{icon:"",dark:"",to:"/"}},[i("v-icon",[t._v("mdi-close")])],1),i("v-toolbar-title",[t._v("Produtos da feira")]),i("v-spacer")],1),i("v-tabs",{staticClass:"mt-n2",attrs:{grow:"",color:"white",dark:"","background-color":"success","center-active":"",centered:""}},[i("v-tab",{attrs:{href:"#ativos"}},[t._v("Ativos")]),i("v-tab",{attrs:{href:"#pendentes"}},[t._v("Pendentes")]),i("v-tab-item",{staticClass:"grey lighten-3",attrs:{id:"ativos"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"my-auto"},[i("v-col",{staticClass:"d-flex",attrs:{cols:"12",xs:"12",sm:"4",md:"4",lg:"3",xl:"3"}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return t._l(t.ativos,function(e){return i("v-card",{key:e.id,staticClass:"mx-auto justify-content-center",attrs:{elevation:n?12:4,link:"",height:"350px"}},[i("v-img",{attrs:{"max-height":"50%","min-height":"50%",src:e.foto}}),i("v-card-text",[i("v-card-title",{staticClass:"headline justify-center mb-n5 text-no-wrap"},[t._v(t._s(e.nome))]),i("v-card-title",{staticClass:"justify-center mb-n5 title text-no-wrap success--text font-weight-regular"},[t._v("R$ "+t._s(e.preco))]),i("div",{staticClass:"hidden-md-and-up"})],1)],1)})}}])})],1)],1)],1)],1),i("v-tab-item",{staticClass:"grey lighten-3",attrs:{id:"pendentes"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"my-auto"},[i("v-col",{staticClass:"d-flex",attrs:{cols:"12",xs:"12",sm:"4",md:"4",lg:"3",xl:"3"}},t._l(t.pendentes,function(e){return i("v-card",{key:e.id,staticClass:"mx-auto justify-content-center",attrs:{elevation:t.hover?12:4,height:"350px",readonly:""}},[i("v-img",{attrs:{"max-height":"50%","min-height":"50%",src:e.foto}}),i("v-card-text",{staticClass:"mt-n3"},[i("v-card-title",{staticClass:"headline justify-center mb-n5 text-no-wrap"},[t._v(t._s(e.nome))]),i("v-card-title",{staticClass:"justify-center mb-n5 title text-no-wrap success--text font-weight-regular"},[t._v("R$ "+t._s(e.preco))]),i("div",{staticClass:"hidden-md-and-up"})],1),i("v-card-actions",[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{color:"error",dark:""}},n),[t._v("Negar")])]}}],null,!0)},[i("span",[t._v("Negar o Produto")])]),i("div",{staticClass:"flex-grow-1"}),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{color:"accent",dark:""}},n),[t._v("Ver")])]}}],null,!0)},[i("span",[t._v("Ver o Produto")])]),i("div",{staticClass:"flex-grow-1"}),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{color:"primary",dark:""}},n),[t._v("Aceitar")])]}}],null,!0)},[i("span",[t._v("Aceitar o Produto")])])],1)],1)}),1)],1)],1)],1)],1)],1)],1)],1)},o=[],s=i("6210"),a=i("9c9e"),r={mixins:[a["a"]],data:function(){return{dialog:!0,modal:!1,hover:2,ativos:[{foto:i("bbae"),nome:"Uva",preco:"5.50",id:1}],pendentes:[{foto:i("bbae"),nome:"Uva",preco:"5.50",id:1}],negados:[{foto:i("bbae"),nome:"Uva",preco:"5.50",id:1}]}},components:{Cards:s["a"]}},c=r,h=i("2877"),d=i("6544"),u=i.n(d),l=i("8336"),f=i("b0af"),v=i("99d9"),p=i("62ad"),m=i("a523"),g=i("169a"),b=i("ce87"),w=i("132d"),y=i("adda"),T=i("0fd9"),x=i("2fa4"),C=i("71a3"),O=i("c671"),_=i("fe57"),A=i("71d9"),k=i("2a7f"),L=i("bd86"),S=(i("c5f6"),i("9734"),i("4ad4")),j=i("a9ad"),I=i("16b7"),W=i("b848"),B=i("75eb"),Y=i("f573"),V=i("f2e7"),N=i("80d2"),D=i("d9bd"),P=i("58df"),X=Object(P["a"])(j["a"],I["a"],W["a"],B["a"],Y["a"],V["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,o=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||n?s=o+e.width/2-i.width/2:(this.left||this.right)&&(s=o+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-i.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(o+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(N["f"])(this.maxWidth),minWidth:Object(N["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick(function(){t.value&&t.callActivate()})},mounted:function(){"v-slot"===Object(N["p"])(this,"activator",!0)&&Object(D["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=S["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===N["s"].esc&&(t.getActivator(e),t.runDelay("close"))},e}},render:function(t){var e,i=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},Object(L["a"])(e,this.contentClass,!0),Object(L["a"])(e,"menuable__content__active",this.isActive),Object(L["a"])(e,"v-tooltip__content--fixed",this.activatorFixed),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.getContentSlot()));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[i]),this.genActivator()])}}),F=Object(h["a"])(c,n,o,!1,null,null,null);e["default"]=F.exports;u()(F,{VBtn:l["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:p["a"],VContainer:m["a"],VDialog:g["a"],VHover:b["a"],VIcon:w["a"],VImg:y["a"],VRow:T["a"],VSpacer:x["a"],VTab:C["a"],VTabItem:O["a"],VTabs:_["a"],VToolbar:A["a"],VToolbarTitle:k["b"],VTooltip:X})},9734:function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return r}),i.d(e,"c",function(){return c});var n=i("b0af"),o=i("80d2"),s=Object(o["h"])("v-card__actions"),a=Object(o["h"])("v-card__subtitle"),r=Object(o["h"])("v-card__text"),c=Object(o["h"])("v-card__title");n["a"]},"9c9e":function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i("dde5"),o={beforeUpdate:function(){var t=this;window.localStorage.token&&n["a"].validaToken().catch(function(e){window.localStorage.removeItem("token"),t.$router.push("entrar")})}}},"9d26":function(t,e,i){"use strict";var n=i("132d");e["a"]=n["a"]},bbae:function(t,e,i){t.exports=i.p+"img/uva.fcdd754c.jpeg"},c671:function(t,e,i){"use strict";var n=i("9d65"),o=i("4e82"),s=i("c3f0"),a=i("80d2"),r=i("58df"),c=Object(r["a"])(n["a"],Object(o["a"])("windowGroup","v-window-item","v-window")),h=c.extend().extend().extend({name:"v-window-item",directives:{Touch:s["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()))},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(a["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick(function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(a["f"])(t.clientHeight))})}},render:function(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},[this.genWindowItem()])}});e["a"]=h.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=h.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},f573:function(t,e,i){"use strict";i("c5f6");var n=i("fe6c"),o=i("21be"),s=i("4ad4"),a=i("58df"),r=i("80d2"),c=Object(a["a"])(o["a"],n["a"],s["a"]);e["a"]=c.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),o=0;if(o+=this.left?i-(n-t.width):i,this.offsetX){var s=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));o+=this.left?-s:t.width}return this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),o},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(r["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(r["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,o=this.dimensions.content.height,s=t+o,a=i<s;return a&&this.offsetOverflow&&n.top>o?t=this.pageYOffset+(n.top-o):a&&!this.allowOverflow?t=i-o-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=s["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame(function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()})},startTransition:function(){var t=this;return new Promise(function(e){return requestAnimationFrame(function(){t.isContentActive=t.hasJustFocused=t.isActive,e()})})},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek(function(){e.content=t.measure(t.$refs.content),t.dimensions=e})}}})}}]);
//# sourceMappingURL=chunk-0c0d220a.039f0491.js.map