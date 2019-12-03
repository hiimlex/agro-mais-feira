<template>
  <v-row v-if="produtos" justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay light transition="dialog-bottom-transition">
      <v-card class="grey lighten-3">
        <v-snackbar
          v-model="snackbar"
          color="green darken-1"
          top=""
          v-if="message"
        >
          {{ message }}
          <v-btn depressed color="green darken-1" @click.native="snackbar = false">X</v-btn>
        </v-snackbar>
        <v-toolbar color="success" class="white--text" flat tile>
          <v-btn icon dark to="/">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Produtos da feira</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-tabs
          grow
          color="white"
          dark
          class="mt-n2"
          background-color="success"
          center-active
          centered
        >
          <v-tab href="#ativos" @click="tab = 'Aceito'">Ativos </v-tab>
          <v-tab href="#pendentes" @click="tab = 'Pendente'">Pendentes</v-tab>
          <v-tab-item id="ativos" class="grey lighten-3">
            <v-container fluid>
              <v-row class="my-auto">
                <v-col  v-for="aceito in ativos"
                      :key="aceito.id" cols="12" xs="12" sm="4" md="4" lg="3" xl="3" class="d-flex">
                           

                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto justify-content-center"
                     
                      link
                      height="350px"
                    >
                      <v-img max-height="50%" lazy-src="" min-height="50%" :src="'https://res.cloudinary.com/djwxazf5a/image/upload/c_fill,h_500,q_100,w_500/'+aceito.img"
></v-img>
                      <v-card-text>
                        <v-card-title
                          class="headline justify-center mb-n5 text-no-wrap"
                        >{{aceito.title}}</v-card-title>
                        <v-card-title
                          class="justify-center mb-n5 title text-no-wrap success--text font-weight-regular"
                        >R$ {{aceito.price}}</v-card-title>

                      </v-card-text>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item id="pendentes" class="grey lighten-3">
            <v-container fluid>
              <v-row class="my-auto">
                <v-col   v-for="pendente in pendentes"  :key="pendente.id" cols="12" xs="12" sm="4" md="4" lg="3" xl="3" class="d-flex">
                  <v-card
                    class="mx-auto justify-content-center"
                  
                    height="350px"
                    readonly
                  >
                    <v-img max-height="50%" min-height="50%"  :src="'https://res.cloudinary.com/djwxazf5a/image/upload/c_fill,h_500,q_100,w_500/'+pendente.img"
></v-img>
                    <v-card-text class="mt-n3">
                      <v-card-title
                        class="headline justify-center mb-n5 text-no-wrap"
                      >{{pendente.title}}</v-card-title>
                      <v-card-title
                        class="justify-center mb-n5 title text-no-wrap success--text font-weight-regular"
                      >R$ {{pendente.price}}</v-card-title>
                      
                      <div class="hidden-md-and-up"></div>
                    </v-card-text>
                    <v-card-actions>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn color="error" dark v-on="on">Negar</v-btn>
                        </template>
                        <span>Negar o Produto</span>
                      </v-tooltip>

                      <div class="flex-grow-1"></div>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn color="primary" dark v-on="on" @click="produto('Aceito',pendente.id)">Aceitar</v-btn>
                        </template>
                        <span>Aceitar o Produto</span>
                      </v-tooltip>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-dialog>
    
  </v-row>
</template>

<script>
import { validaToken } from "../mixins"
import { api } from "../services"
export default {
  mixins: [validaToken],
  data() {
    return {
      dialog: true,
      modal: false,
      hover: 2,
      snackbar: false,
      message: null,
      timeout: 6000,
      ativos: [],
      produtos: null,
      tab: null,
      pendentes: []
    };
  },
  created(){
    this.getProdutos()
  },
  methods: {
    produto(s,idProd){
      api.put(`/product/${idProd}`, {
        product: {
          status: "Aceito"
        }        
      }).then(response => {
        this.snackbar = true
        this.message = response.data.message
        location.reload();

      })
    },
    getProdutos(){
      api.get("/product")
      .then(response => {
        this.produtos = response.data.products
        this.ativos =     this.produtos.filter(o => o.status === 'Aceito')

      })
    },

  },
  watch: {
    tab: function(){
      if(this.tab === 'Aceito'){
        this.ativos =  this.produtos.filter(o => o.status === this.tab)
      }else{
        this.pendentes =  this.produtos.filter(o => o.status === this.tab)
      }
    }
  }
  
};
</script>
