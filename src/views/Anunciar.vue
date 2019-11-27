<template>
  <v-container fluid class="my-auto mt-12">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" lg="6" xl="6">
        <v-form>
          <v-card class="mx-auto">
            <router-link to="/" class="router-bar">
              <v-card-title class="logo justify-center font-weight-black display-2">Agro+Feira</v-card-title>
            </router-link>
            <v-card-title class="title font-weight-regular justify-center">
              <span class>Anunciar Produto</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-container>
              <v-subheader class="text-uppercase mt-n5 mb-2 justify-center">Imagem do produto:</v-subheader>
              <v-row class="mt-n4" justify="center">
                <v-card flat tile class="mb-3">
                  <vUploadCloud
                    v-model="produto.img"
                    upload-preset="hfljpegu"
                    cloud-name="djwxazf5a"
                  />
                </v-card>
              </v-row>
              <v-divider></v-divider>
              <v-subheader class="text-uppercase justify-center">Informações do produto:</v-subheader>
              <v-text-field
                filled
                shaped
                v-model="produto.title"
                type="text"
                label="Nome do produto"
                color="success"
                hint="Digite o nome do produto."
                required
                counter
                maxlength="12"
              ></v-text-field>
              <v-select
                :items="items"
                item-text="name"
                item-value="id"
                filled
                shaped
                v-model="produto.id_category"
                label="Categoria"
                required
                color="success"
                item-color="success"
                transition="slide-x-transition"
              ></v-select>
              <div
                class="v-input theme--light v-text-field v-text-field--filled v-text-field--is-booted v-text-field--enclosed v-text-field--shaped"
              >
                <div class="v-input__control">
                  <div class="v-input__slot">
                    <money v-model="produto.price" v-bind="money"></money>
                  </div>
                </div>
              </div>
              <v-textarea
                filled
                shaped
                v-model="produto.desc"
                type="text"
                label="Descrição"
                color="success"
                hint="Digite a descrição do produto"
                required
                counter
                maxlength="100"
                no-resize
              ></v-textarea>
              <v-divider></v-divider>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="success" class="white--text" @click.prevent="anunciar">Anunciar</v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { api } from "@/services";
import vUploadCloud from "../components/v-cloudinary-upload";
import { Money } from "v-money";
import { validaToken } from "../mixins"

export default {
  components: { vUploadCloud, Money },
  mixins: [validaToken],
  data() {
    return {
      dialog: true,
      items: null,
      money: {
        prefix: "R$ ",
        decimal: ",",
        thousands: ".",
        precision: 2,
        masked: false
      },
      produto: {
        title: null,
        price: "",
        img: null,
        desc: null,
        id_category: null
      },
      n: 3
    };
  },
  methods: {
    anunciar() {
      api.post("product", this.produto).then(response => {
        console.log(response);
      });
    }
  },
  async mounted() {
    try {
      let cat = await api.get("category");
      let { data } = cat;
      this.items = data.categories;
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style>
</style>