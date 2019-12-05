<template>
  <v-dialog v-model="popup" scrollable max-width="800" overlay-opacity="1">
    <v-card>
      <v-card-title class="headline justify-center">Bem vindo à Feira de animais do Crato!</v-card-title>
      <v-card-text>
        <v-row align="center" justify="center">
          <v-img src="../assets/logo.png" max-width="500" class="hidden-sm-and-down"></v-img>
          <v-img src="../assets/logo-m.png" width="340" class="hidden-md-and-up"></v-img>
        </v-row>
        <hr />
        <v-row align="center" justify="center">
          <v-card-title class="headline justify-center">Apoiado por:</v-card-title>
          <br>
          <v-col lg="3" xs="12">
            <a href="https://crato.ce.gov.br/" target="_blank">
              <v-img width="240" src="../assets/logo-crato.png"></v-img>
            </a>
          </v-col>
          <v-col lg="3" xs="12">
            <a href="https://ifce.edu.br/crato" target="_blank">
              <v-img width="240" src="../assets/logo-if.png"></v-img>
            </a>
          </v-col>
          <v-col lg="3" xs="12">
            <v-img width="240" src="../assets/logo-lais.jpg"></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" class="mr-5" @click.native="feirante">Feirante</v-btn>
        <div class="flex-grow-1"></div>

        <v-btn color="amber" class="ml-5 white--text" @click.native="banner">Visitante</v-btn>
        <div class="flex-grow-1"></div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Banner",
  data(){
    return{
      popup: true
    }
  },created(){
    if(localStorage.popup){
      this.popup = false
    }
  },
  methods: {
    banner() {
      this.popup = false;
      localStorage.popup =  false
    },
    feirante() {
      this.popup = false;
      localStorage.popup =  false
      this.$router.push("/entrar");
    }
  }
};
</script>

<style>
</style>