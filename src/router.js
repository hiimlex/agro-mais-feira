import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index'
import Registrar from './views/Registrar'
import Entrar from './views/Entrar'
import Anunciar from './views/Anunciar'
import Perfil from './views/Perfil'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: Registrar
  },
  {
    path: '/entrar',
    name: 'entrar',
    component: Entrar
  },
  {
    path: '/anunciar',
    name: 'anunciar',
    component: Anunciar,
    meta: {
      login: true
    }
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil
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
