<template>
  <div>
    <Navbarxl />
    <Banner />
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
