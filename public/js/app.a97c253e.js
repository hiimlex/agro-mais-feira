(function(t){function e(e){for(var a,r,s=e[0],i=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o={app:0},c=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-48f9b27c":"7b567a7f","chunk-574c8ecf":"c3c1bc81","chunk-7276ca61":"a0704d40","chunk-730e830d":"1cd92796","chunk-9a392f72":"a6bb9364"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-48f9b27c":1,"chunk-7276ca61":1,"chunk-730e830d":1,"chunk-9a392f72":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-48f9b27c":"7a992a65","chunk-574c8ecf":"31d6cfe0","chunk-7276ca61":"a4f0ed9a","chunk-730e830d":"c4a07a7c","chunk-9a392f72":"ed98a7c8"}[t]+".css",o=i.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("1356"),r=n.n(a);r.a},1356:function(t,e,n){},"145c":function(t,e,n){"use strict";var a=n("27cc"),r=n.n(a);r.a},"27cc":function(t,e,n){},"41cb":function(t,e,n){"use strict";var a=n("2b0e"),r=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbarxl"),n("v-container",{staticClass:"my-auto"},[n("div",[n("div",{staticClass:"hidden-sm-and-up"},[n("v-text-field",{staticClass:"mb-n5",attrs:{autofocus:"",placeholder:"Buscar",color:"success",clearable:"",solo:"",rounded:""},on:{"append-icon-cb":t.buscarProdutos},model:{value:t.busca,callback:function(e){t.busca=e},expression:"busca"}},[n("template",{slot:"append"},[t.busca?n("v-icon",{attrs:{color:"success"},on:{click:function(e){return e.preventDefault(),t.buscarProdutos(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.buscarProdutos(e)}}},[t._v("search")]):t._e()],1)],2)],1),n("v-card",[n("v-tabs",{attrs:{"background-color":"white","center-active":"",color:"success",grow:"","show-arrows":"",elevation:"2"}},t._l(t.categorias,function(e){return n("v-tab",{key:e.id,on:{click:function(n){t.filtraPorCategoria(e.id)}}},[t._v(t._s(e.name))])}),1)],1),n("Cards"),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-container",{attrs:{fluid:""}},[n("div",{staticClass:"caption text-center font-weight-light mb-1"},[n("v-btn",{attrs:{to:"/perfil"}},[t._v("Meus Produtos")])],1)])],1)],1)],1)])],1)},c=[],s=(n("96cf"),n("3b8d")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-auto",attrs:{id:"Navbar"}},[n("v-app-bar",{attrs:{elevation:"2"}},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up icon-menu",attrs:{color:"success"},on:{click:function(e){t.drawer=!t.drawer}}}),n("div",{staticClass:"flex-grow-1 hidden-md-and-up"}),n("v-btn",{staticClass:"hidden-sm-and-down",attrs:{icon:"",disabled:""}},[n("v-icon")],1),n("router-link",{staticClass:"router-bar",attrs:{to:"/"}},[n("div",{staticClass:"text-center"},[n("v-toolbar-title",{staticClass:"logo ml-3"},[t._v("Agro+Feira")])],1)]),n("div",{staticClass:"flex-grow-1"}),n("v-text-field",{staticClass:"mt-8 border-color-green-search hidden-sm-and-down",attrs:{autofocus:"",placeholder:"Buscar",color:"success",clearable:"",solo:"",rounded:""},model:{value:t.busca,callback:function(e){t.busca=e},expression:"busca"}},[n("template",{slot:"append"},[t.busca?n("v-icon",{attrs:{color:"success"},on:{click:function(e){return e.preventDefault(),t.buscarProdutos(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.buscarProdutos(e)}}},[t._v("search")]):t._e()],1)],2),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down mr-3"},t._l(t.links,function(e){return n("v-btn",{key:e.name,staticClass:"hover-link",attrs:{text:"",to:e.route}},[t._v(t._s(e.name))])}),1)],1),n("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("div",{staticClass:"text-center"},[n("v-list-item-title",{staticClass:"logo"},[t._v("Agro+")])],1),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.links,function(e){return n("v-list-item",{key:e.name,attrs:{link:"",color:"success",to:e.route}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"subtitle font-weight-medium"},[t._v(t._s(e.name))])],1)],1)}),1),n("v-divider")],1)],1)},u=[],l={data:function(){return{drawer:null,links:[{icon:"home",name:"Home",route:"/"},{icon:"person",name:"Entrar",route:"entrar"},{icon:"person_add",name:"Registrar",route:"registrar"},{icon:"local_atm",name:"Anunciar",route:"anunciar"}],busca:null}},methods:{buscarProdutos:function(){this.$router.push({query:{s:this.busca}})}}},d=l,f=n("2877"),p=n("6544"),m=n.n(p),v=n("40dc"),h=n("5bc1"),b=n("8336"),g=n("ce7e6"),k=n("132d"),_=n("8860"),y=n("da13"),w=n("5d23"),C=n("34c3"),x=n("f774"),P=n("2fa4"),V=n("8654"),E=n("2a7f"),O=Object(f["a"])(d,i,u,!1,null,null,null),A=O.exports;m()(O,{VAppBar:v["a"],VAppBarNavIcon:h["a"],VBtn:b["a"],VDivider:g["a"],VIcon:k["a"],VList:_["a"],VListItem:y["a"],VListItemContent:w["a"],VListItemIcon:C["a"],VListItemTitle:w["b"],VNavigationDrawer:x["a"],VSpacer:P["a"],VTextField:V["a"],VToolbarItems:E["a"],VToolbarTitle:E["b"]});var T=n("dde5"),j=n("6210"),S=(n("d7c2"),{data:function(){return{categorias:null,busca:null}},methods:{filtraPorCategoria:function(t){this.$router.push({query:{c:t}})},buscarProdutos:function(){this.$router.push({query:{s:this.busca}})}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T["a"].get("category");case 3:e=t.sent,n=e.data,this.categorias=n.categories,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function e(){return t.apply(this,arguments)}return e}(),components:{Cards:j["a"],Navbarxl:A}}),I=S,L=n("b0af"),U=n("62ad"),D=n("a523"),N=n("0fd9"),R=n("71a3"),$=n("fe57"),B=Object(f["a"])(I,o,c,!1,null,null,null),q=B.exports;m()(B,{VBtn:b["a"],VCard:L["a"],VCol:U["a"],VContainer:D["a"],VIcon:k["a"],VRow:N["a"],VTab:R["a"],VTabs:$["a"],VTextField:V["a"]}),a["a"].use(r["a"]);var F=[{path:"/",name:"index",component:q,meta:{title:"Agro+Feira"}},{path:"/registrar",name:"registrar",component:function(){return n.e("chunk-730e830d").then(n.bind(null,"be2b"))},meta:{title:"Criar Conta - Agro+Feira"}},{path:"/entrar",name:"entrar",component:function(){return n.e("chunk-574c8ecf").then(n.bind(null,"ab7e"))},meta:{title:"Entrar"}},{path:"/anunciar",name:"anunciar",component:function(){return n.e("chunk-9a392f72").then(n.bind(null,"41f6"))},meta:{title:"Anunciar produto ou serviço",login:!0}},{path:"/produto/:id",name:"produto",component:function(){return n.e("chunk-48f9b27c").then(n.bind(null,"e9c2"))},meta:{title:"Detalhes"},props:!0},{path:"/perfil",name:"perfil",component:function(){return n.e("chunk-7276ca61").then(n.bind(null,"68f9"))},meta:{title:"Meu Perfil",login:!0}}],M=new r["a"]({mode:"history",base:"/",routes:F});M.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.login})?window.localStorage.token?n():n("/entrar"):n()});e["a"]=M},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"poppins-font",attrs:{dark:""}},[n("v-content",{staticClass:"grey lighten-3 justify-content-center",attrs:{transition:"fade-transition","align-center":""}},[n("router-view")],1)],1)},o=[],c={name:"App",watch:{$route:function(t){document.title=t.meta.title}}},s=c,i=(n("034f"),n("2877")),u=n("6544"),l=n.n(u),d=n("7496"),f=n("a75b"),p=Object(i["a"])(s,r,o,!1,null,null,null),m=p.exports;l()(p,{VApp:d["a"],VContent:f["a"]});n("d1e7");var v=n("f309");a["a"].use(v["a"]);var h=new v["a"]({icons:{iconfont:"md"},theme:{themes:{light:{success:"#009B36"}}}}),b=n("41cb"),g=n("2f62"),k=n("dde5");a["a"].use(g["a"]);var _=new g["a"].Store({strict:!0,state:{login:!1,p_incomplete:null,usuario:{id:null,acao:null,pessoa:[]}},mutations:{UPDATE_USUARIO:function(t,e){t.usuario=Object.assign(t.usuario,e)},UPDATE_LOGIN:function(t,e){t.login=e},UPDATE_MESSAGE_PERFIL:function(t,e){t.p_incomplete=e?null:"Para ter acesso a todas as funcionalidades termine seu cadastro!!!"}},actions:{getPerfil:function(t){return k["a"].get("/meu_perfil").then(function(e){t.commit("UPDATE_USUARIO",e.data.data),t.commit("UPDATE_LOGIN",!0)})},logarUsuario:function(t,e){return k["a"].login({cpf:e.cpf,password:e.pass}).then(function(e){window.localStorage.token="".concat(e.data.token),t.commit("UPDATE_LOGIN",!0)})},deslogar:function(t){var e=localStorage.removeItem("token");if(!e)return t.commit("UPDATE_MESSAGE_PERFIL",!1),t.commit("UPDATE_LOGIN",!1),t.commit("UPDATE_USUARIO",{id:null,acao:null,pessoa:null}),!0}}}),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-overlay",{attrs:{opacity:"0"}},[n("v-progress-circular",{attrs:{color:"green",indeterminate:"",size:"64"}})],1)},w=[],C={name:"Loading"},x=C,P=n("a797"),V=n("490a"),E=Object(i["a"])(x,y,w,!1,null,null,null),O=E.exports;l()(E,{VOverlay:P["a"],VProgressCircular:V["a"]}),a["a"].config.productionTip=!1,a["a"].component("Loading",O),new a["a"]({vuetify:h,router:b["a"],store:_,render:function(t){return t(m)}}).$mount("#app")},6210:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-snackbar",{attrs:{color:"red darken-3",timeout:t.timeout,top:"top"===t.y,right:"right"===t.x,"multi-line":!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.message)+"\n\n      \n      "),n("v-btn",{attrs:{dark:"",text:""},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("X")])],1),t.produtos?n("v-row",{staticClass:"my-auto"},t._l(t.produtos,function(e){return n("v-col",{key:e.id,staticClass:"d-flex",attrs:{cols:"6",xs:"6",sm:"4",md:"4",lg:"3",xl:"3"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var r=a.hover;return[n("v-card",{staticClass:"mx-auto justify-content-center pb-6",attrs:{elevation:r?12:4,link:"",to:{name:"produto",params:{id:e.id}}}},[n("v-img",{attrs:{"max-height":"60%","min-height":"60%",src:"https://res.cloudinary.com/djwxazf5a/image/upload/c_fill,h_500,q_100,w_500/"+e.img}}),n("v-card-title",{staticClass:"justify-center mb-n3 text-no-wrap"},[t._v(t._s(e.title))]),n("v-card-text",{staticClass:"justify-center mb-n5"},[n("v-row",{staticClass:"justify-center subtitle-1 text-truncate"},[t._v(t._s(e.user.name))]),n("v-row",{staticClass:"justify-center green--text body-1"},[t._v("R$ "+t._s(e.price))])],1)],1)]}}],null,!0)})],1)}),1):t._e()],1)},r=[],o=n("dde5"),c=n("d7c2"),s={data:function(){return{produtos:null,busca:null,snackbar:!1,timeout:6e3,message:null,y:"top",x:"right"}},computed:{url:function(){var t=Object(c["a"])(this.$route.query);return t?"product".concat(t):"/product"}},methods:{getProdutos:function(){var t=this;this.produtos="",this.snackbar=!1,o["a"].get(this.url).then(function(e){e.data&&(t.produtos=e.data.products)}).catch(function(e){t.snackbar=!0,console.log("sd"),t.message="Desculpe, não localizamos nenhum produto para esta categoria!"})}},watch:{url:function(){this.getProdutos()}},created:function(){this.getProdutos()}},i=s,u=(n("145c"),n("2877")),l=n("6544"),d=n.n(l),f=n("8336"),p=n("b0af"),m=n("99d9"),v=n("62ad"),h=n("a75b"),b=n("ce87"),g=n("adda"),k=n("0fd9"),_=n("2db4"),y=Object(u["a"])(i,a,r,!1,null,"3a566baf",null);e["a"]=y.exports;d()(y,{VBtn:f["a"],VCard:p["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:v["a"],VContent:h["a"],VHover:b["a"],VImg:g["a"],VRow:k["a"],VSnackbar:_["a"]})},d7c2:function(t,e,n){"use strict";function a(t){var e="";for(var n in t)e+="?".concat(n,"=").concat(t[n]);return e}n.d(e,"a",function(){return a})},dde5:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n("bc3a"),r=n.n(a),o=r.a.create({baseURL:"https://agromais-feira-api.herokuapp.com/"});o.interceptors.request.use(function(t){var e=window.localStorage.token;return e&&(t.headers.token=e),t},function(t){return Promise.reject(t)});var c={get:function(t){return o.get(t)},post:function(t,e){return o.post(t,e)},put:function(t,e){return o.put(t,e)},delete:function(t){return o.delete(t)},login:function(t){return r.a.post("https://agromais-feira-api.herokuapp.com/login",t)},validaToken:function(){return o.post("verify_token")}}}});
//# sourceMappingURL=app.a97c253e.js.map