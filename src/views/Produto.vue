<template>
  <v-row justify="center">
    <v-dialog
      v-if="produto"
      fullscreen
      light
      v-model="dialog"
      hide-overlay
      transition="dialog-botton-transition"
    >
      <v-card class="grey lighten-2">
        <v-toolbar color="success" dark>
          <v-btn icon text @click="voltar">
            <v-icon size="28" color="white">arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title class="white--text ml-n5 font-weight-bold title">
            <span>Detalhes</span>
          </v-toolbar-title>
          <div class="flex-grow-1"></div>
        </v-toolbar>
        <div class="hidden-sm-and-down mt-8">
          <v-container>
            <v-card flat>
              <v-row class="align-center justify-center">
                <v-col md="5" xl="5">
                  <div class="pa-8">
                    <v-img
                      aspect-ratio="1.7"
                      height="350"
                      width="350"
                      :src="'https://res.cloudinary.com/djwxazf5a/image/upload/c_fill,h_500,q_100,w_500/'+produto.img"
                    ></v-img>
                  </div>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col md="6" xl="6">
                  <v-container class="pa-8">
                    <div
                      class="display-1 text-capitalize font-weight-bold text-justify"
                    >{{produto.title}}</div>
                    <!-- Colocar depois as children -->
                    <div class="subtitle-1 text-justify font-weight-medium">
                      por
                      <span>{{produto.user.name}}</span>
                    </div>
                    <div
                      class="display-1 text-justify font-weight-light text-justify mb-2"
                    >R$ {{produto.price}}</div>
                  </v-container>
                  <v-divider inset></v-divider>
                  <v-container>
                    <div class="text-center title font-weight-medium mt-2">
                      <b>Informações Adicionais:</b>
                    </div>
                    <div class="title font-weight-light mb-2">
                      <v-icon left class="mt-n1">local_offer</v-icon>
                      <b>Categoria:</b>
                      {{produto.category.name}}
                    </div>
                    <div class="title font-weight-light mb-2 text-justify">
                      <v-icon left class="mt-n1">room</v-icon>
                      <b>Localização:</b>
                      {{produto.location}}
                    </div>
                    <div class="title font-weight-light mb-2 text-justify">
                      <v-icon left class="mt-n1">phone</v-icon>
                      <b>Contato:</b>
                      {{produto.user.phone}}
                    </div>
                    <div class="title font-weight-light mb-2 text-justify">
                      <v-icon left class="mt-n1">info</v-icon>
                      <b>Descrição:</b>
                      {{produto.desc}}
                    </div>
                  </v-container>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </div>
        <div class="hidden-md-and-up">
          <div>
            <v-img
              height="300"
              :src="'https://res.cloudinary.com/djwxazf5a/image/upload/c_fill,h_500,q_100,w_500/'+produto.img"
            ></v-img>
          </div>
          <v-card flat class="white">
            <v-container>
              <div
                class="headline text-capitalize font-weight-medium text-justify"
              >{{produto.title}}</div>
              <!-- Colocar depois as children -->
              <div class="subtitle-1 text-justify font-weight-medium">
                por
                <span>{{produto.user.name}}</span>
              </div>
              <div
                class="display-1 text-justify font-weight-light text-justify mb-2"
              >R$ {{produto.price}}</div>
            </v-container>
          </v-card>
        </div>
        <div class="hidden-md-and-up">
          <v-divider></v-divider>
          <v-card class="white" flat>
            <v-container>
              <div class="text-center title font-weight-medium mt-2">
                <b>Informações Adicionais:</b>
              </div>

              <div class="title font-weight-light mb-2">
                <v-icon left class="mt-n1">local_offer</v-icon>
                <b>Categoria:</b>
                {{produto.category.name}}
              </div>
              <div class="title font-weight-light mb-2 text-justify">
                <v-icon left class="mt-n1">room</v-icon>
                <b>Localização:</b>
                {{produto.location}}
              </div>
              <div class="title font-weight-light mb-2 text-justify">
                <v-icon left class="mt-n1">phone</v-icon>
                <b>Contato:</b>
                {{produto.user.phone}}
              </div>
              <div class="title font-weight-light mb-2 text-justify">
                <v-icon left class="mt-n1">info</v-icon>
                <b>Descrição:</b>
                {{produto.desc}}
              </div>
            </v-container>
          </v-card>
        </div>
      </v-card>
    </v-dialog>
    <!-- <loading v-else /> -->
  </v-row>
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
    voltar() {
      this.$router.go(-1);
    },
    exibeProduto() {
      api
        .get(`product/${this.id}`)
        .then(response => {
          this.produto = response.data.product;
        })
        .catch(e => {
          this.$router.push("/");
        });
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