<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay light transition="dialog-bottom-transition">
      <v-card class="grey lighten-3">
        <v-toolbar color="success" class="white--text" flat tile>
          <v-btn icon dark to="/">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Meus Produtos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu transition="fade-transition">
            <template v-slot:activator="{ on }">
              <v-btn icon text dark class="mr-n3">
                <v-icon v-on="on">more_vert</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="deslogar">
                <v-list-item-title >Sair</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
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
          <v-tab href="#ativos" @click="tab = 'Aceito'">Ativos</v-tab>
          <v-tab href="#pendentes" @click="tab = 'Pendente'">Pendentes</v-tab>
          <v-tab href="#negados" @click="tab = 'Negado'">Negados</v-tab>
          <v-tab-item id="ativos" class="grey lighten-3">
            <v-container fluid>
              <v-row class="justify-center">
                <v-col>
                  <div class="subtitle-1 text-center font-weight-light mb-1">
                    Clique no produto para editar as informações.
                    <v-icon small>edit</v-icon>
                  </div>
                </v-col>
              </v-row>
              <v-row class="my-auto">
                <v-col v-for="ativo in ativos" :key="ativo.id" cols="12" xs="12" sm="4" md="4" lg="3" xl="3" class="d-flex">
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto justify-content-center"
                      :elevation="hover ? 12 : 4"
                      @click="editar(ativo.id)"
                      link
                      height="350px"
                    >
                      <v-img max-height="50%" min-height="50%" :src="'https://res.cloudinary.com/djwxazf5a/image/upload/c_fill,h_500,q_100,w_500/'+ativo.img"
></v-img>
                      <v-card-text>
                        <v-card-title
                          class="headline justify-center mb-n5 text-no-wrap"
                        >{{ativo.title}}</v-card-title>
                        <v-card-title
                          class="justify-center mb-n5 title text-no-wrap success--text font-weight-regular"
                        >R$ {{ativo.price}}</v-card-title>
                        <div class="hidden-md-and-up"></div>
                      </v-card-text>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item id="pendentes" class="grey lighten-3">
            <v-container fluid>
              <v-row class="justify-center">
                <v-col>
                  <div class="subtitle-1 text-center font-weight-light mb-1">
                    Dúvida quanto a alguma pendência? procure a administração da feira.
                    <v-icon small>info</v-icon>
                  </div>
                </v-col>
              </v-row>
              <v-row class="my-auto">
                <v-col v-for="pendente in pendentes"  :key="pendente.id" cols="12" xs="12" sm="4" md="4" lg="3" xl="3" class="d-flex">
                  <v-card
                    class="mx-auto justify-content-center"
                    :elevation="hover ? 12 : 4"
                    
                    height="350px"
                    readonly
                  >
                    <v-img max-height="50%" min-height="50%" :src="'https://res.cloudinary.com/djwxazf5a/image/upload/c_fill,h_500,q_100,w_500/'+pendente.img"
></v-img>
                    <v-card-text>
                      <v-card-title
                        class="headline justify-center mb-n5 text-no-wrap"
                      >{{pendente.title}}</v-card-title>
                      <v-card-title
                        class="justify-center mb-n5 title text-no-wrap success--text font-weight-regular"
                      >R$ {{pendente.price}}</v-card-title>
                      <div class="hidden-md-and-up"></div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item id="negados" class="grey lighten-3">
            <v-container fluid>
              <v-row class="justify-center">
                <v-col>
                  <div class="subtitle-1 text-center font-weight-light mb-1">
                    Clique no produto para saber o motivo dele ter sido negado.
                    <v-icon small>info</v-icon>
                  </div>
                </v-col>
              </v-row>
              <v-row class="my-auto">
                <v-col v-for="(negado, index) in negados"    :key="negado.id" cols="12" xs="12" sm="4" md="4" lg="3" xl="3" class="d-flex">
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto justify-content-center"
                      :elevation="hover ? 12 : 4"
                      
                      height="350px"
                      link
                      @click="m_negado(index)"
                    >
                      <v-img max-height="50%" min-height="50%" :src="'https://res.cloudinary.com/djwxazf5a/image/upload/c_fill,h_500,q_100,w_500/'+negado.img"
></v-img>
                      <v-card-text>
                        <v-card-title
                          class="headline justify-center mb-n5 text-no-wrap"
                        >{{negado.title}}</v-card-title>
                        <v-card-title
                          class="justify-center mb-n5 title text-no-wrap success--text font-weight-regular"
                        >R$ {{negado.price}}</v-card-title>
                        <div class="hidden-md-and-up"></div>
                      </v-card-text>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </v-container>
            <v-row v-if="modal" justify="center">
              <v-dialog v-model="modal" persistent>
                <v-card>
                  <v-card-title class="headline text-center">Informações acerca do produto negado</v-card-title>
                  <br>
                  <v-card-text
                    class="text-justify"
                    
                  >{{ negados[id_negado].product_denied[0].message}}</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="black" text @click="modal = false">Sair</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              
            </v-row>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Cards from "../components/Cards";
import { validaToken } from "../mixins"
import { api  } from "../services"
export default {
  mixins: [validaToken],
  components: { Cards },

  data() {
    return {
      dialog: true,
      modal: false,
      id_negado:null,
      hover: null,
      tab: null,
      ativos: [],
      pendentes: [],
      negados: []
    };
  },
  created(){
    this.getProdutos()
  },
  methods: {
    editar(id){
        this.$router.replace({ name: "anunciar", query: {id_prod: id} })
    },
    m_negado(id){
      this.id_negado = id
      this.modal = true
    },
    getProdutos(){
      api.get("/my_products")
      .then(response => {
        this.produtos = response.data.products
        this.ativos =     this.produtos.filter(o => o.status === 'Aceito')

      })
    },
    deslogar(){
        this.$store.dispatch("deslogar").then(response => {
        this.$router.push("/");
      });
      }
  },
  watch:{
    tab: function(){
      if(this.tab === 'Aceito'){
        this.ativos =  this.produtos.filter(o => o.status === this.tab)
      }else if(this.tab === 'Pendente'){
        this.pendentes =  this.produtos.filter(o => o.status === this.tab)
      }else{
        this.negados =  this.produtos.filter(o => o.status === this.tab)

      }
    }
  }
};
</script>
