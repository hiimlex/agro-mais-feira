import { api } from '@/services'

//valida token, mixin created
export const validaToken = {
  created() {
    if (window.localStorage.token) {
      api
        .validaToken()
        .catch(error => {
          this.$store.commit('UPDATE_LOGIN', false)
          this.$store.commit('UPDATE_ADMIN', false)

          window.localStorage.removeItem('token')
          if(this.$route.path == '/'){
            this.$router.replace('/')
          }else{
            this.$router.replace('entrar')
          }
        })

    }
  }
}

export const islogged = {
  beforeMount() {
    if (window.localStorage.token) {
      api
        .validaToken()
        .then(response =>{
          if(response.data.admin){
            this.$store.commit('UPDATE_ADMIN', true)
          }else{
            this.$store.commit('UPDATE_LOGIN', true)
          }
          
        })
        .catch(error => {
          this.$store.commit('UPDATE_LOGIN', false)
          this.$store.commit('UPDATE_ADMIN', false)

          window.localStorage.removeItem('token')

          if(this.$route.path == '/'){
            this.$router.replace('/')
          }else{
            this.$router.replace('entrar')
          }
        })

    }else{
      this.$store.commit('UPDATE_ADMIN', false)
      this.$store.commit('UPDATE_LOGIN', false)
    }
  }
}