import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index'
import Registrar from './views/Registrar'
import Entrar from './views/Entrar'
import Anunciar from './views/Anunciar'

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
    component: Anunciar
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
