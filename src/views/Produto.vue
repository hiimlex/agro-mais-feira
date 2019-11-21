<template>
  <v-container class="my-auto" fluid>
    <div class="hidden-md-and-up">
      <v-row justify="center">
        <v-dialog
          v-if="produto"
          fullscreen
          light
          v-model="dialog"
          hide-overlay
          transition="dialog-botton-transition"
        >
          <v-card class="grey lighten-3">
            <v-toolbar color="success" flat>
              <v-btn icon text @click="voltar">
                <v-icon size="28" color="white">arrow_back</v-icon>
              </v-btn>
              <v-toolbar-title class="white--text ml-n5 font-weight-bold title">
                <span>Detalhes</span>
              </v-toolbar-title>
              <div class="flex-grow-1"></div>
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
              <v-tab href="#produto">Produto</v-tab>
              <v-tab href="#descricao">Descrição</v-tab>
              <v-tab-item id="produto">
                <v-card flat color="white">
                 <v-img max-height="60%" min-height="60%" :src="'https://res.cloudinary.com/djwxazf5a/image/upload/c_fill,h_500,q_100,w_500/'+produto.img"></v-img>

                  <v-container class="grey lighten-4">
                    <div
                      class="headline text-capitalize grey--text text--darken-3 font-weight-light text-justify"
                    >{{produto.title}}</div>
                    <!-- Colocar depois as children -->
                    <div class="caption grey--text text--darken-3 text-justify font-weight-light">
                      por
                      <router-link
                        :to="'perfil/publico'"
                        class="remove-text-underline grey--text font-weight-medium"
                      >
                        <span>{{produto.user.name}}</span>
                      </router-link>
                    </div>
                    <div
                      class="display-1 text-justify grey--text text--darken-3 font-weight-light"
                    >R$ {{produto.price}}</div>
                  </v-container>
                </v-card>
              </v-tab-item>
              <v-tab-item id="descricao">
                <v-container class="grey lighten-4 my-auto">
                  <div class="body-1 font-weight-light mb-3 grey--text text--darken-3">
                    <span class="text-uppercase font-weight-medium">Categoria:</span>
                    {{produto.category.name}}
                  </div>
                  <div class="body-1 font-weight-light mb-3 grey--text text--darken-3">
                    <span class="text-uppercase font-weight-medium">Localização na feira ou serviço:</span>
                    {{produto.location}}
                  </div>
                  <div class="body-1 font-weight-light mb-3 grey--text text--darken-3">
                    <span class="text-uppercase font-weight-medium">Descrição:</span>
                  </div>
                  <div
                    class="body-1 font-weight-light text-justify grey--text text--darken-3"
                  >{{produto.desc}}</div>
                </v-container>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-dialog>
        <loading v-else />
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { api } from "@/services";

export default {
  props: ["id"],
  data() {
    return {
      dialog: true,
      produto: null,
      tab: null,
      tabs: 3
    };
  },
  methods: {
    voltar(){
      this.$router.go(-1)
    },
    exibeProduto() {
      api.get(`product/${this.id}`).then(response => {
        this.produto = response.data.product;
      }).catch(e =>{
        this.$router.push("/")
      })
    }
  },
  created() {
    this.exibeProduto();
  }
};
</script>

<style>
.remove-text-underline {
  text-decoration: none;
}
</style>