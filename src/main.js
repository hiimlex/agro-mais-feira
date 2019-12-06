import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import Loading from './components/progress'
import Banner from './components/banner'
import _ from 'lodash';

Vue.config.productionTip = false

Vue.component("Loading", Loading)
Vue.component("Banner", Banner )
Vue.use(VueAnalytics, {
  id: 'UA-154143439-1',
  router
})
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')


