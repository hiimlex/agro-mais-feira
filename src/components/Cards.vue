<template>
  <v-content>
    <v-snackbar
      color="red darken-3"
      v-model="snackbar"
      :timeout="timeout"
      :top="y === 'top'"
      :multi-line="true"
    >
      {{message}}
      <v-btn dark text @click.native="snackbar = false">X</v-btn>
    </v-snackbar>
    <v-row class="my-auto" v-if="produtos">
      <v-col
        cols="6"
        xs="6"
        sm="4"
        md="4"
        lg="3"
        xl="3"
        class="d-flex"
        v-for="produto in orderProdutos"
        :key="produto.id"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="mx-auto justify-content-center pb-6"
            :elevation="hover ? 12 : 4"
            link
            :to="{name: 'produto', params:{id: produto.id}}"
            @click.prevent="gatrack(produto.id)"
          >
            <v-img
              max-height="60%"
              min-height="60%"
              :src="'https://res.cloudinary.com/agromais-iss/image/upload/c_fill,h_500,q_100,w_500/'+produto.img"
            ></v-img>
            <v-card-text class="justify-center mt-n4">
              <v-card-title class="justify-center "><span class="text-truncate">{{produto.title}}</span></v-card-title>
              <v-row class="justify-center subtitle-1 "><span class="text-truncate">{{produto.user.name}}</span></v-row>
              <v-row justify="center" align="center" class=" green--text title">{{produto.price | semPreco}}</v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import { api } from "@/services";
import { serialize } from "@/helpers";
export default {
  data() {
    return {
      online: false,
      produtos: null,
      busca: null,
      snackbar: false,
      timeout: 6000,
      message: null,
      y: "top"
    };
  },
  filters:{
    semPreco: function(price){
      if(price === '0.00' )
      { return ""
      }else{
        return `R$ ${price}`
      }
    }
  },
    beforeUpdate() {
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
  },
  computed: {
     orderProdutos: function () {
    return _.orderBy(this.produtos, 'id')
  },
    url() {
      const query = serialize(this.$route.query);
      if (query) {
        return `product${query}`;
      } else {
        return "/product";
      }
    }
  },
  methods: {
    gatrack(id){
     this.$ga.event('Produto', 'click', id, 2)

    },
    getProdutos() {
      this.produtos = "";
      this.snackbar = false;
      api
        .get(this.url)
        .then(response => {
          if (response.data) {
            this.produtos = response.data.products
          }
        })
        .catch(e => {

          this.snackbar = true;
          this.message = e.response.data.message+" !"
    
        });
    }
  },
  watch: {
    url() {
      this.getProdutos();
    }
  },
  created() {
    if(window.navigator.onLine){
      this.getProdutos();
    }else{
            this.snackbar = true;
            this.message = "Por favor verifique sua conexão!";
            this.online = false
    }
  }
};
</script>

<style scoped>
.card-text {
  margin-top: -4%;
}
</style>