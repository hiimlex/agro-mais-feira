(function(e){function n(n){for(var r,a,u=n[0],i=n[1],f=n[2],l=0,s=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(s.length)s.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==c[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-103f94ba":"392ce8ec","chunk-1cbf1fa0":"6abc5e62","chunk-351f2db6":"5494f5d3","chunk-0c0d220a":"039f0491","chunk-7e93484a":"dfb2b42e","chunk-6419dfd6":"09b0b024","chunk-5931506d":"8eab7e6e","chunk-cca1f5ec":"1a70b85c","chunk-f42e0664":"4b1ec7c3","chunk-4151baf6":"40f3791a","chunk-574c8ecf":"c3c1bc81","chunk-1a627f02":"51a52292"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-103f94ba":1,"chunk-1cbf1fa0":1,"chunk-351f2db6":1,"chunk-0c0d220a":1,"chunk-7e93484a":1,"chunk-6419dfd6":1,"chunk-5931506d":1,"chunk-cca1f5ec":1,"chunk-f42e0664":1,"chunk-4151baf6":1,"chunk-1a627f02":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-103f94ba":"c22e8a21","chunk-1cbf1fa0":"a4f0ed9a","chunk-351f2db6":"52fc479f","chunk-0c0d220a":"8b8f4869","chunk-7e93484a":"e73c0fdc","chunk-6419dfd6":"3715e4a6","chunk-5931506d":"bbd08968","chunk-cca1f5ec":"bf749864","chunk-f42e0664":"f98e784c","chunk-4151baf6":"0f3126d1","chunk-574c8ecf":"31d6cfe0","chunk-1a627f02":"508d42ac"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var f=o[u],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===c))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){f=s[u],l=f.getAttribute("data-href");if(l===r||l===c)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),t(o)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){a[e]=0}));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(function(n,t){r=c[e]=[n,t]});n.push(r[2]=o);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}c[e]=void 0}};var d=setTimeout(function(){f({type:"timeout",target:l})},12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var s=0;s<f.length;s++)n(f[s]);var d=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("1356"),a=t.n(r);a.a},1356:function(e,n,t){},"41cb":function(e,n,t){"use strict";var r=t("2b0e"),a=t("8c4f");r["a"].use(a["a"]);var c=[{path:"/",name:"index",component:function(){return Promise.all([t.e("chunk-103f94ba"),t.e("chunk-cca1f5ec"),t.e("chunk-351f2db6"),t.e("chunk-7e93484a"),t.e("chunk-4151baf6")]).then(t.bind(null,"d504"))},meta:{title:"Feira de animais"}},{path:"/registrar",name:"registrar",component:function(){return Promise.all([t.e("chunk-103f94ba"),t.e("chunk-cca1f5ec"),t.e("chunk-1cbf1fa0"),t.e("chunk-f42e0664")]).then(t.bind(null,"be2b"))},meta:{title:"Criar Conta"}},{path:"/entrar",name:"entrar",component:function(){return Promise.all([t.e("chunk-103f94ba"),t.e("chunk-cca1f5ec"),t.e("chunk-574c8ecf")]).then(t.bind(null,"ab7e"))},meta:{title:"Entrar"}},{path:"/anunciar",name:"anunciar",component:function(){return Promise.all([t.e("chunk-103f94ba"),t.e("chunk-cca1f5ec"),t.e("chunk-7e93484a"),t.e("chunk-1a627f02")]).then(t.bind(null,"41f6"))},meta:{title:"Anunciar produto ou serviço",login:!0}},{path:"/produto/:id",name:"produto",component:function(){return Promise.all([t.e("chunk-103f94ba"),t.e("chunk-1cbf1fa0"),t.e("chunk-5931506d")]).then(t.bind(null,"e9c2"))},meta:{title:"Detalhes"},props:!0},{path:"/perfil",name:"perfil",component:function(){return Promise.all([t.e("chunk-103f94ba"),t.e("chunk-1cbf1fa0"),t.e("chunk-351f2db6"),t.e("chunk-7e93484a"),t.e("chunk-6419dfd6")]).then(t.bind(null,"68f9"))},meta:{title:"Meu Perfil",login:!0}},{path:"/admin",name:"admin",component:function(){return Promise.all([t.e("chunk-103f94ba"),t.e("chunk-1cbf1fa0"),t.e("chunk-351f2db6"),t.e("chunk-0c0d220a")]).then(t.bind(null,"3530"))},meta:{title:"Administrador",login:!0}}],o=new a["a"]({mode:"history",base:"/",routes:c});o.beforeEach(function(e,n,t){e.matched.some(function(e){return e.meta.login})?window.localStorage.token?t():t("/entrar"):t()}),n["a"]=o},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",{staticClass:"poppins-font",attrs:{dark:""}},[t("v-content",{staticClass:"grey lighten-3 justify-content-center",attrs:{transition:"fade-transition","align-center":""}},[t("router-view")],1)],1)},c=[],o={name:"App",watch:{$route:function(e){document.title=e.meta.title}}},u=o,i=(t("034f"),t("2877")),f=t("6544"),l=t.n(f),s=t("7496"),d=t("a75b"),h=Object(i["a"])(u,a,c,!1,null,null,null),p=h.exports;l()(h,{VApp:s["a"],VContent:d["a"]});t("d1e7");var m=t("f309");r["a"].use(m["a"]);var b=new m["a"]({icons:{iconfont:"md"},theme:{themes:{light:{success:"#68B6D1"}}}}),k=t("41cb"),g=t("2f62"),v=t("dde5");r["a"].use(g["a"]);var y=new g["a"].Store({strict:!0,state:{login:!1,p_incomplete:null,usuario:{id:null,acao:null,pessoa:[]}},mutations:{UPDATE_USUARIO:function(e,n){e.usuario=Object.assign(e.usuario,n)},UPDATE_LOGIN:function(e,n){e.login=n},UPDATE_MESSAGE_PERFIL:function(e,n){e.p_incomplete=n?null:"Para ter acesso a todas as funcionalidades termine seu cadastro!!!"}},actions:{getPerfil:function(e){return v["a"].get("/meu_perfil").then(function(n){e.commit("UPDATE_USUARIO",n.data.data),e.commit("UPDATE_LOGIN",!0)})},logarUsuario:function(e,n){return v["a"].login({cpf:n.cpf,password:n.pass}).then(function(n){window.localStorage.token="".concat(n.data.token),e.commit("UPDATE_LOGIN",!0)})},deslogar:function(e){var n=localStorage.removeItem("token");if(!n)return e.commit("UPDATE_MESSAGE_PERFIL",!1),e.commit("UPDATE_LOGIN",!1),e.commit("UPDATE_USUARIO",{id:null,acao:null,pessoa:null}),!0}}}),P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-overlay",{attrs:{opacity:"0"}},[t("v-progress-circular",{attrs:{color:"green",indeterminate:"",size:"64"}})],1)},w=[],E={name:"Loading"},_=E,A=t("a797"),O=t("490a"),S=Object(i["a"])(_,P,w,!1,null,null,null),T=S.exports;l()(S,{VOverlay:A["a"],VProgressCircular:O["a"]}),r["a"].config.productionTip=!1,r["a"].component("Loading",T),new r["a"]({vuetify:b,router:k["a"],store:y,render:function(e){return e(p)}}).$mount("#app")},dde5:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t("bc3a"),a=t.n(r),c=a.a.create({baseURL:"https://agromais-feira-api.herokuapp.com/"});c.interceptors.request.use(function(e){var n=window.localStorage.token;return n&&(e.headers.token=n),e},function(e){return Promise.reject(e)});var o={get:function(e){return c.get(e)},post:function(e,n){return c.post(e,n)},put:function(e,n){return c.put(e,n)},delete:function(e){return c.delete(e)},login:function(e){return a.a.post("https://agromais-feira-api.herokuapp.com/login",e)},validaToken:function(){return c.post("verify_token")}}}});
//# sourceMappingURL=app.9138a58c.js.map