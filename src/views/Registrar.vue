<template>
  <v-container class="my-auto mt-8">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" lg="5" xl="5">
        <v-form>
          <v-card class="mx-auto">
            <router-link to="/" class="router-bar">
              <v-card-title class="logo justify-center font-weight-black display-2">Agro+Feira</v-card-title>
            </router-link>
            <v-card-title class="title font-weight-regular justify-center">
              <span>Crie sua conta Agro+Feira</span>
            </v-card-title>
            <v-card-text>
              <v-text-field
                filled
                color="success"
                v-model="nome"
                label="Nome"
                required
                autofocus
                shaped
                hint="Digite seu Nome completo"
                counter
                maxlength="40"
              ></v-text-field>
              <v-text-field
                filled
                color="success"
                v-model="cpf"
                label="CPF"
                required
                mask="true"
                v-mask="mask"
                shaped
                hint="Este é o CPF que você irá utilizar para entrar na sua conta Agro+Feira"
              ></v-text-field>
              <v-text-field
                filled
                color="success"
                v-model="contato"
                required
                label="Contato ou Whatsapp"
                mask="true"
                v-mask="mask1"
                shaped
                hint="Este é o seu Número que será utilizado como Contato"
              ></v-text-field>
              <v-text-field
                :append-icon="show ? 'visibility' : 'visibility_off'"
                filled
                label="Senha"
                :type="show ? 'text' : 'password'"
                color="success"
                v-model="pass"
                :rules="passRules"
                required
                shaped
                hint="Este é a senha que você irá utilizar para entrar na sua conta Agro+Feira"
              ></v-text-field>
              <v-checkbox
                v-model="termos"
                color="success"
                label="Você aceita os termos de usuário ?"
                class="ml-1 mt-n3 mb-n3"
                @click.prevent="aceitarTermos()"
              ></v-checkbox>
            </v-card-text>
            <v-card-actions>
              <v-row class="justify-center">
                <v-col cols="10">
                  <v-btn
                    color="success"
                    @click="createAccount"
                    class="white--text mt-n6"
                    :disabled="!active"
                    block
                    rounded
                    large
                  >Criar conta</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-container>
              <p class="text-center">
                Já possui conta ?
                <router-link to="/entrar" class="decoration-link">Faça login</router-link>
              </p>
            </v-container>
          </v-card>
        </v-form>
        <!-- snackbar -->
        <v-snackbar
          v-model="snackbarHidden"
          :color="cor"
          class="white--text"
          :timeout="timeout"
        >{{ message }}</v-snackbar>
        <v-row justify="center">
          <v-dialog v-model="modal" persistent max-width="40%" scrollable>
            <v-card>
              <v-card-title class="headline">Termos de usuário</v-card-title>
              <v-card-text class="text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.
              </v-card-text>
              <v-card-actions>
                <v-btn color="indigo" text @click="negarTermos">Negar</v-btn>
                <div class="flex-grow-1"></div>
                <v-btn color="green darken-1" text @click="modal = false">Aceito</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { api } from "@/services";
import router from "@/router";
import { mask, mask1 } from "vue-the-mask";
export default {
  directives: { mask, mask1 },
  data() {
    return {
      mask: "###.###.###-##",
      mask1: "(##) #####-####",
      show: false,
      active: true,
      nome: "",
      password: "Password",
      cor: "success",
      valid: true,
      timeout: 6000,
      snackbarHidden: false,
      message: null,
      cpf: "",
      termos: false,
      status: false,
      modal: false,
      pass: null,
      passRules: [v => v >= 6 || "Sua senha deve possuir mais de 6 caracteres"],
      contato: ""
    };
  },
  methods: {
    createAccount() {
      if (this.pass !== null) {
        (this.active = false),
          api
            .post("registro", {
              email: this.email,
              pass: this.pass
            })
            .then(response => {
              (this.cor = "success"),
                (this.message = response.data.message),
                (this.snackbarHidden = true);
              this.status = true;
              setTimeout(function() {
                router.replace("/login");
              }, 3000);
            })
            .catch(error => {
              (this.cor = "error"),
                (this.message = error.response.data.error),
                (this.snackbarHidden = true),
                (this.active = true);
            });
      }
    },
    aceitarTermos() {
      if (this.modal !== null) {
        this.modal = true;
        this.termos = true;
      }
    },
    negarTermos() {
      this.modal = false;
      this.termos = false;
    }
  }
};
</script>

<style>
</style>