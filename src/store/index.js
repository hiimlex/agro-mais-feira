import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/services'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    titlelogo: "+Feira",
    login: false,
    admin: false,
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_ADMIN(state, payload) {
      state.admin = payload;
    },
  },
  actions: {
    logarUsuario(context, payload) {
      return api
        .login({
          cpf: payload.cpf,
          password: payload.pass
        })
        .then(response => {
          window.localStorage.token = `${response.data.token}`;
        });
    },
    deslogar(context) {
      let token = localStorage.removeItem('token')
      if (!token) {
        return true
      }
    }

  }
})
