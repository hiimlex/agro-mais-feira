import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/services'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    titlelogo: "+Feira",
    login: false,
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
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
          context.commit("UPDATE_LOGIN", true);
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
