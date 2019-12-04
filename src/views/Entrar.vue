<template>
  <v-container fluid class="my-auto mt-12">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" lg="5" xl="5">
        <v-alert type="error" v-if="error">{{error}}</v-alert>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card class="mx-auto text-center">
            <router-link to="/" class="router-bar">
              <v-card-title class="logo justify-center font-weight-black display-2">{{$store.state.titlelogo}}</v-card-title>
            </router-link>
            <v-card-title class="title font-weight-regular justify-center">
              <span>Olá! Insira seu CPF e Senha para continuar.</span>
            </v-card-title>
            <v-card-text>
              <!-- :rules="emailRules" -->
              <v-text-field
                color="success"
                v-model="login.cpf"
                label="CPF"
                type="tel"
                required="Required"
                autocorrect="off"
                autocapitalize="none"
                shaped
                mask="true"
                v-mask="mask"
                filled
                hint="Insira seu CPF cadastrado na plataforma Agro+Feira."
              ></v-text-field>
              <!--  :rules="passRules" -->
              <v-text-field
                :append-icon="show ? 'visibility' : 'visibility_off'"
                label="Senha"
                :type="show ? 'text' : 'password'"
                color="success"
                v-model="login.pass"
                required
                shaped
                @click:append="show = !show"
                filled
                hint="Sua senha deve conter mais de 6 caracteres."
                v-on:keyup.enter="logar"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-row class="justify-center">
                <v-col cols="10">
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="white--text mt-n10"
                    block
                    rounded
                    large
                    @click="logar"
                  >Entrar</v-btn>
                  <!-- @click.prevent="logar" -->
                </v-col>
              </v-row>
            </v-card-actions>
            <v-container>
              <p>
                Não possui conta ?
                <router-link to="/registrar" class="decoration-link">Criar conta</router-link>
              </p>
            </v-container>
          </v-card>
        </v-form>
      </v-col>
      <!-- <router-view></router-view> -->
    </v-row>
  </v-container>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  data() {
    return {
      show: false,
      valid: true,
      password: "Password",
      mask: "###.###.###-##",
      error: false,
      login: {
        cpf: "",
        pass: ""
      },
      passRules: [v => v >= 6 || "Sua senha deve possuir mais de 6 caracteres"]
    };
  },
  methods: {
    logar() {
      this.$store
        .dispatch("logarUsuario", this.login)
        .then(() => {
          this.$router.push("/");
        })
        .catch(error => {
          this.error = error.response.data.error;
        });
    }
  }
};
</script>

<style>
</style>