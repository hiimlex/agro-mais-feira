<template>
  <v-row class="my-auto" v-if="produtos">
    <v-col
      cols="6"
      xs="6"
      sm="4"
      md="4"
      lg="3"
      xl="3"
      class="d-flex"
      v-for="produto in produtos"
      :key="produto.id"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="mx-auto justify-content-center pb-6"
          :elevation="hover ? 12 : 4"
          link
          :to="{name: 'produto', params:{id: produto.id}}"
        >
          <v-img max-height="60%" min-height="60%" :src="produto.imagem_produto[0].imagem"></v-img>
          <v-card-title class="justify-center mb-n3 text-no-wrap">{{produto.nome}}</v-card-title>
          <v-card-text class="justify-center mb-n5">
            <v-row
              class="justify-center subtitle-1 text-truncate"
            >{{produto.produtor.pessoa[0].nome}}</v-row>
            <v-row class="justify-center green--text body-1">R$ {{produto.preco}}</v-row>
          </v-card-text>
          <div class="categorias-color-bc mb-n4 mt-2">
            <v-list-item dense>
              <v-list-item-content class="justify-center white--text">Categoria</v-list-item-content>
            </v-list-item>
          </div>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import { api } from "@/services";
import { serialize } from "@/helpers";
export default {
  data() {
    return {
      produtos: null,
      busca: null
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      if (query) {
        return `produtos${query}`;
      } else {
        return "/produtos";
      }
    }
  },
  methods: {
    getProdutos() {
      this.produtos = null;
      api.get(this.url).then(response => {
        if (response.data) {
          this.produtos = response.data.produtos;
        }
      });
    }
  },
  watch: {
    url() {
      this.getProdutos();
    }
  },
  created() {
    this.getProdutos();
  }
};
</script>

<style scoped>
.card-text {
  margin-top: -4%;
}
</style>