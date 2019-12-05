<template>
  <v-container fluid class="my-auto mt-12">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" lg="6" xl="6">
        <v-form v-if="anunciando" v-model="valid" ref="form" lazy-validation>
          <v-card class="mx-auto">
            <router-link to="/" class="router-bar">
              <v-card-title
                class="logo justify-center font-weight-black display-2"
              >{{$store.state.titlelogo}}</v-card-title>
            </router-link>
            <v-card-title class="title font-weight-regular justify-center">
              <span class>Anunciar Produto</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-container>
              <v-subheader class="text-uppercase mt-n5 mb-2 justify-center">Imagem do produto:</v-subheader>
              <v-row v-if="image_error" justify="center">
                <v-alert width="350" type="error">Ops, você esqueceu de enviar uma imagem</v-alert>
              </v-row>
              <br />
              <v-row class="mt-n4" justify="center">
                <v-card flat tile class="mb-3">
                  <vUploadCloud
                    v-model="produto.img"
                    upload-preset="wpwi7ukx"
                    cloud-name="agromais-iss"
                    required
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
                :rules="[v => !!v || 'Informe um nome']"
                counter
                maxlength="14"
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
                :rules="[v => !!v || 'Informe a categoria']"
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
                :rules="[v => !!v || 'Informe uma descrição']"
                counter
                maxlength="100"
                no-resize
              ></v-textarea>
              <v-divider></v-divider>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn
                  color="success"
                  class="white--text"
                  @click.prevent="validate"
                  :disabled="!valid"
                >{{anunciar}}</v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-form>
        <v-card class="mx-auto" v-if="notificacao">
          <router-link to="/" class="router-bar">
            <v-card-title class="logo justify-center font-weight-black display-2">Agro+Feira</v-card-title>
          </router-link>
          <v-container>
            <v-alert type="success" prominent color="green dark-3" dark>{{message}}</v-alert>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { api } from "@/services";
import vUploadCloud from "../components/v-cloudinary-upload";
import { Money } from "v-money";
import { validaToken } from "../mixins";

export default {
  components: { vUploadCloud, Money },
  mixins: [validaToken],
  data() {
    return {
      anunciando: true,
      dialog: true,
      items: null,
      message:
        "Seu produto foi cadastrado com sucesso, aguarde aprovação da administração da feira.",
      notificacao: false,
      anunciar: "Anunciar",
      edicao: false,
      image_error: false,
      valid: true,
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
  created() {
    this.editar();
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        if (this.produto.img === null) {
          this.image_error = true;
        } else {
          this.produtoPut();
        }
      }else{
                  this.image_error = true;

      }
    },
    editar() {
      const id = this.$route.query.id_prod;
      if (id) {
        api.get(`/product/${id}`).then(response => {
          this.anunciar = "Editar";
          this.edicao = true;
          this.produto.title = response.data.product.title;
          this.produto.price = response.data.product.price;
          this.produto.img = response.data.product.img;
          this.produto.desc = response.data.product.desc;
          this.produto.id_category = response.data.product.id_category;
        }).catch(()=>{
          this.$router.push("/")
        });
      }
    },
    produtoPut() {
      if (this.edicao) {
        const id = this.$route.query.id_prod;
         const admin_edit = this.$route.query.admin;

        api.put(`/product/${id}`, {
          product: {
            status: 'Pendente',
            title: this.produto.title,
            price: this.produto.price,
            img: this.produto.img,
            desc: this.produto.desc,
            id_category: this.produto.id_category,
            
          }
          
          },
          {
            
          }).then(response => {
          this.message = response.data.message;
          this.notificacao = true;
          this.anunciando = false;
           if(admin_edit){
            setTimeout(() => this.$router.push("/Admin"), 3000);
          }else{
          setTimeout(() => this.$router.push("/meus_produtos"), 3000);
          }
        });
      } else {

        api.post("product", this.produto).then(response => {
          this.notificacao = true;
          this.anunciando = false;
          setTimeout(() => this.$router.push("/meus_produtos"), 3000);
        });
      }
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