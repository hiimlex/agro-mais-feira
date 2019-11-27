<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay light transition="dialog-bottom-transition">
      <v-card class="grey lighten-3">
        <v-toolbar color="success" class="white--text" flat tile>
          <v-btn icon dark to="/">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Meus Produtos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark>
            <v-icon>menu</v-icon>
          </v-btn>
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
          <v-tab href="#ativos">Ativos</v-tab>
          <v-tab href="#pendentes">Pendentes</v-tab>
          <v-tab href="#negados">Negados</v-tab>
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
                <v-col cols="12" xs="12" sm="4" md="4" lg="3" xl="3" class="d-flex">
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto justify-content-center"
                      :elevation="hover ? 12 : 4"
                      v-for="ativo in ativos"
                      :key="ativo.id"
                      link
                      height="350px"
                    >
                      <v-img max-height="50%" min-height="50%" :src="ativo.foto"></v-img>
                      <v-card-text>
                        <v-card-title
                          class="headline justify-center mb-n5 text-no-wrap"
                        >{{ativo.nome}}</v-card-title>
                        <v-card-title
                          class="justify-center mb-n5 title text-no-wrap success--text font-weight-regular"
                        >R$ {{ativo.preco}}</v-card-title>
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
                    Dúvida quanto a alguma pendência procure fulano de tal.
                    <v-icon small>info</v-icon>
                  </div>
                </v-col>
              </v-row>
              <v-row class="my-auto">
                <v-col cols="12" xs="12" sm="4" md="4" lg="3" xl="3" class="d-flex">
                  <v-card
                    class="mx-auto justify-content-center"
                    :elevation="hover ? 12 : 4"
                    v-for="pendente in pendentes"
                    :key="pendente.id"
                    height="350px"
                    readonly
                  >
                    <v-img max-height="50%" min-height="50%" :src="pendente.foto"></v-img>
                    <v-card-text>
                      <v-card-title
                        class="headline justify-center mb-n5 text-no-wrap"
                      >{{pendente.nome}}</v-card-title>
                      <v-card-title
                        class="justify-center mb-n5 title text-no-wrap success--text font-weight-regular"
                      >R$ {{pendente.preco}}</v-card-title>
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
                <v-col cols="12" xs="12" sm="4" md="4" lg="3" xl="3" class="d-flex">
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto justify-content-center"
                      :elevation="hover ? 12 : 4"
                      v-for="pendente in pendentes"
                      :key="pendente.id"
                      height="350px"
                      link
                      @click="modal = !modal"
                    >
                      <v-img max-height="50%" min-height="50%" :src="pendente.foto"></v-img>
                      <v-card-text>
                        <v-card-title
                          class="headline justify-center mb-n5 text-no-wrap"
                        >{{pendente.nome}}</v-card-title>
                        <v-card-title
                          class="justify-center mb-n5 title text-no-wrap success--text font-weight-regular"
                        >R$ {{pendente.preco}}</v-card-title>
                        <div class="hidden-md-and-up"></div>
                      </v-card-text>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </v-container>
            <v-row justify="center">
              <v-dialog v-model="modal" persistent>
                <v-card>
                  <v-card-title class="headline text-center">Informações acerca do produto negado</v-card-title>
                  <v-card-text
                    class="text-justify"
                  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem hic rem rerum praesentium molestiae ab similique necessitatibus optio inventore pariatur culpa perspiciatis corrupti quam, repudiandae quaerat odio, incidunt architecto accusamus.</v-card-text>
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

export default {
  mixins: [validaToken],

  data() {
    return {
      dialog: true,
      modal: false,
      ativos: [
        {
          foto: require("../assets/uva.jpeg"),
          nome: "Uva",
          preco: "5.50",
          id: 1
        }
      ],
      pendentes: [
        {
          foto: require("../assets/uva.jpeg"),
          nome: "Uva",
          preco: "5.50",
          id: 1
        }
      ],
      negados: [
        {
          foto: require("../assets/uva.jpeg"),
          nome: "Uva",
          preco: "5.50",
          id: 1
        }
      ]
    };
  },
  components: { Cards }
};
</script>
