import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index'
//import Registrar from './views/Registrar'
//import Entrar from './views/Entrar'
//import Anunciar from './views/Anunciar'
//import Perfil from './views/Perfil'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    meta: {
      title: "Agro+Feira"
    }
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: () => import('./views/Registrar.vue'),
    meta: {
      title: "Criar Conta - Agro+Feira"
    }
  },
  {
    path: '/entrar',
    name: 'entrar',
    component: () => import('./views/Entrar.vue'),
    meta: {
      title: "Entrar"
    }
  },
  {
    path: '/anunciar',
    name: 'anunciar',
    component: () => import('./views/Anunciar.vue'),
    meta: {
      title: "Anunciar produto ou serviço",
      login: true
    }
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: () => import('./views/Produto.vue'),
    meta: {
      title: "Detalhes"
    },
    props: true

  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('./views/Perfil.vue'),
    meta: {
      title: "Meu Perfil",
      login: true
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) {
    if (!window.localStorage.token){
      next("/entrar");
    } else {
      next();
    }
  } else {
    next();
  }
})
export default router
