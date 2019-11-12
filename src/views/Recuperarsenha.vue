<template>
  <v-container class="my-auto">
    <v-row class="justify-center mt-5">
      <v-col cols="12" sm="10" lg="6" xl="6">
        <v-card class="mx-auto text-center" max-width="500">
          <v-card-title class="title font-weight-regular justify-center">
            <span>Insira seu CPF para recuperar sua senha.</span>
          </v-card-title>
          <v-card-text>
            <v-text-field
              color="success"
              v-model="cpf"
              label="CPF"
              required="Required"
              mask="true"
              v-mask="mask"
              shaped
              filled
              hint="Insira o CPF que você utilizou para criar sua conta Agro+Feira."
            ></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text to="/entrar">Fazer login</v-btn>
            <div class="flex-grow-1"></div>
            <v-btn color="success" class="white--text">Enviar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  data() {
    return {
      cpf: "",
      mask: "###.###.###-##"
    };
  }
};
</script>

<style>
</style>