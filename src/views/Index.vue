<template>
  <div>
    <Navbarxl />
    <v-container class="my-auto">
      <div>
        <div class="hidden-sm-and-up">
          <v-text-field
            placeholder="Buscar"
            color="success"
            clearable
            solo
            rounded
            v-model="busca"
            @append-icon-cb="buscarProdutos"
            class="mb-n5"
          >
            <template slot="append">
              <v-icon
                v-if="busca"
                color="success"
                @click.prevent="buscarProdutos"
                v-on:keyup.enter="buscarProdutos"
              >search</v-icon>
            </template>
          </v-text-field>
        </div>
        <v-card>
          <v-tabs
            background-color="white"
            center-active
            color="success"
            grow
            show-arrows
            elevation="2"
            disabled
          >
            <v-tab
              v-for="c in categorias"
              :key="c.id"
              @click="(filtraPorCategoria(c.id))"
            >{{c.name}}</v-tab>
          </v-tabs>
        </v-card>
        <Cards />
        <v-row>
          <v-col cols="12">
            <v-container fluid>
              <div class="caption text-center font-weight-light mb-1">
                <!-- Não encontrou o que procura ? Anuncie
                <v-icon small>local_atm</v-icon>-->
                <v-btn to="/perfil">Meus Produtos</v-btn>
                <v-btn to="/admin">Admin</v-btn>
                <v-btn @click="overlay = !overlay">Primeira vez</v-btn>
              </div>
              <v-overlay :value="overlay" opacity="0.9">
                <v-card flat color="transparent mt-n5">
                  <v-container>
                    <div></div>
                    <v-img src="../assets/logo.png" class="hidden-sm-and-down"></v-img>
                    <v-img src="../assets/logo-m.png" class="hidden-md-and-up"></v-img>
                    <v-card-title class="text-center">
                      Bem vindo ao classificados da Feira de animais!
                      <br />Deseja entrar como :
                    </v-card-title>
                    <v-card-actions>
                      <v-btn color="primary" to="/entrar" class="mr-5">Feirante</v-btn>
                      <div class="flex-grow-1"></div>
                      <v-btn color="amber" @click="overlay = false" class="ml-5">Visitante</v-btn>
                    </v-card-actions>
                  </v-container>
                </v-card>
              </v-overlay>
            </v-container>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import Navbarxl from "../components/Navbarxl";
import { api } from "@/services";
import Cards from "../components/Cards";
import { getCategorias } from "@/helpers";

export default {
  data() {
    return {
      categorias: null,
      busca: null,
      overlay: null
    };
  },
  methods: {
    filtraPorCategoria(idCat) {
      if (idCat !== 0) {
        this.$router.push({ query: { c: idCat } });
      } else {
        this.$router.push({ path: "/" });
      }
    },
    buscarProdutos() {
      this.$router.push({ query: { s: this.busca } });
    }
  },
  async mounted() {
    try {
      let cat = await api.get("category");
      let { data } = cat;
      this.categorias = data.categories;
      this.categorias.unshift({ id: 0, name: "Geral" });
    } catch (e) {
      console.log(e);
    }
  },
  components: { Cards, Navbarxl }
};
</script>
