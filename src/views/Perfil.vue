<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay light transition="dialog-bottom-transition">
      <v-card class="grey lighten-3">
        <v-toolbar color="success" class="white--text" flat>
          <v-btn icon dark to="/">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Meus Produtos</v-toolbar-title>
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
          <v-tab href="#ativos">Ativos</v-tab>
          <v-tab href="#pendentes">Pendentes</v-tab>
          <v-tab href="#negados">Negados</v-tab>
          <v-tab-item id="ativos" class="grey lighten-3">
            <v-container fluid>
              <v-row class="my-auto">
                <v-col cols="12" xs="12" sm="4" md="4" lg="3" xl="3" class="d-flex">
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto justify-content-center"
                      :elevation="hover ? 12 : 4"
                      v-for="ativo in ativos"
                      :key="ativo.id"
                      height="300px "
                    >
                      <v-img max-height="50%" min-height="50%" :src="ativo.foto">
                        <div>
                          <v-btn tile class="float-right">
                            <v-icon>edit</v-icon>
                          </v-btn>
                        </div>
                      </v-img>
                      <v-card-title class="justify-center mb-n5 text-no-wrap">{{ativo.nome}}</v-card-title>
                      <v-card-title
                        class="justify-center mb-n5 title text-no-wrap success--text font-weight-regular"
                      >R$ {{ativo.preco}}</v-card-title>
                      <div class="hidden-md-and-up">
                        <br />
                        <br />
                        <br />
                      </div>
                      <div class="ativos-color-bc">
                        <v-list-item dense>
                          <v-list-item-content class="justify-center white--text">Categoria</v-list-item-content>
                        </v-list-item>
                      </div>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item id="pendentes" class="grey lighten-3">
            <v-container fluid>
              <Cards readonly />
            </v-container>
          </v-tab-item>
          <v-tab-item id="negados" class="grey lighten-3">
            <v-container fluid>
              <Cards />
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Cards from "../components/Cards";

export default {
  data() {
    return {
      dialog: true,
      ativos: [
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
