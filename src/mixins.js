import { api } from '@/services'

//valida token, mixin created
export const validaToken = {
  beforeUpdate() {
    if (window.localStorage.token) {
      api
        .validaToken()
        .catch(error => {
          window.localStorage.removeItem('token')
          this.$router.push('entrar')
        })

    }
  }
}
