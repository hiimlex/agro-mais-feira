import { api } from '@/services'

//valida token, mixin created
export const validaToken = {
  created() {
    if (window.localStorage.token) {
      api
        .validaToken()
        .catch(error => {
          window.localStorage.removeItem('token')
          console.log(this.$route)
          if(this.$route.path == '/'){
            this.$router.replace('/')
          }else{
            this.$router.push('entrar')
          }
        })

    }
  }
}
