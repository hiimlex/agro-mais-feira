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
              <v-subheader class="text-uppercase mt-n5 justify-center">Imagem do produto:</v-subheader>
                <v-row class="justify-center">
                        <vUploadCloud 
            v-model="image"
            upload-preset="tqunldff"
            cloud-name="djwxazf5a"
          />
                </v-row>
              <!-- <v-row class="mt-n4" justify="center">
                <v-col cols="4" sm="4" class="mt-n2 mb-2">
                  <v-card flat tile>
                    <v-img :src="img[0]" aspect-ratio="1"></v-img>
                  </v-card>
                </v-col>
              </v-row>
              <v-file-input
                v-model="preview"
                color="success"
                accept="image/png, image/jpeg, image/bmp"
                label="Foto do produto"
                placeholder="Envie a foto do produto"
                prepend-icon
                prepend-inner-icon="mdi-paperclip"
                small-chips
                clearable
              ></v-file-input>-->
              <v-divider></v-divider>
              <v-subheader class="text-uppercase justify-center">Informações do produto:</v-subheader>
              <v-text-field
                filled
                shaped
                v-model="nome"
                type="text"
                label="Nome do produto"
                color="success"
                hint="Digite o nome do produto."
                required
                counter
                maxlength="20"
              ></v-text-field>
              <v-select
                :items="items"
                filled
                shaped
                v-model="categoria"
                label="Categoria"
                required
                color="success"
                item-color="success"
                transition="slide-x-transition"
              ></v-select>
              <v-text-field
                filled
                shaped
                v-model="preco"
                type="text"
                label="Preço"
                color="success"
                hint="Digite o preço do produto."
                required
              ></v-text-field>
              <v-textarea
                filled
                shaped
                v-model="descricao"
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
                <v-btn color="success" class="white--text">Anunciar</v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import vUploadCloud from '../components/v-cloudinary-upload'

export default {
 components: { vUploadCloud },

  data() {
    return {
      dialog: true,
      nome: "",
      image: null,
      categoria: null,
      items: ["Fruta", "sla"],
      descricao: "",
      preco: "",
      n: 3
    };

  },
  watch:{
    image: function(){
      console.log(this.image)
    }
  }
};
</script>

<style>
</style>