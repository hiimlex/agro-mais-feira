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
          <v-img max-height="60%" min-height="60%" :src="'https://res.cloudinary.com/djwxazf5a/image/upload/c_fill,h_500,q_100,w_500/'+produto.img"></v-img>
          <v-card-title class="justify-center mb-n3 text-no-wrap">{{produto.title}}</v-card-title>
          <v-card-text class="justify-center mb-n5">
            <v-row
              class="justify-center subtitle-1 text-truncate"
            >{{produto.user.name}}</v-row>
            <v-row class="justify-center green--text body-1">R$ {{produto.price}}</v-row>
          </v-card-text>

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
        return `product${query}`;
      } else {
        return "/product";
      }
    }
  },
  methods: {
    getProdutos() {
      this.produtos = null;
      api.get(this.url).then(response => {
        if (response.data) {
          this.produtos = response.data.products;
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