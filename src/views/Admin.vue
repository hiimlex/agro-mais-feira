<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay light transition="dialog-bottom-transition">
      <v-card class="grey lighten-3">
        <v-toolbar color="success" class="white--text" flat tile>
          <v-btn icon dark to="/">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Produtos da feira</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-tabs
          grow
          color="white"
          dark
          class="mt-n2"
          background-color="success"
          center-active
          centered
        >
          <v-tab href="#ativos">Ativos</v-tab>
          <v-tab href="#pendentes">Pendentes</v-tab>
          <v-tab-item id="ativos" class="grey lighten-3">
            <v-container fluid>
              <v-row class="my-auto">
                <v-col cols="12" xs="12" sm="4" md="4" lg="3" xl="3" class="d-flex">
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto justify-content-center"
                      :elevation="hover ? 12 : 4"
                      v-for="ativo in ativos"
                      :key="ativo.id"
                      link
                      height="350px"
                    >
                      <v-img max-height="50%" min-height="50%" :src="ativo.foto"></v-img>
                      <v-card-text>
                        <v-card-title
                          class="headline justify-center mb-n5 text-no-wrap"
                        >{{ativo.nome}}</v-card-title>
                        <v-card-title
                          class="justify-center mb-n5 title text-no-wrap success--text font-weight-regular"
                        >R$ {{ativo.preco}}</v-card-title>
                        <div class="hidden-md-and-up"></div>
                      </v-card-text>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item id="pendentes" class="grey lighten-3">
            <v-container fluid>
              <v-row class="my-auto">
                <v-col cols="12" xs="12" sm="4" md="4" lg="3" xl="3" class="d-flex">
                  <v-card
                    class="mx-auto justify-content-center"
                    :elevation="hover ? 12 : 4"
                    v-for="pendente in pendentes"
                    :key="pendente.id"
                    height="350px"
                    readonly
                  >
                    <v-img max-height="50%" min-height="50%" :src="pendente.foto"></v-img>
                    <v-card-text class="mt-n3">
                      <v-card-title
                        class="headline justify-center mb-n5 text-no-wrap"
                      >{{pendente.nome}}</v-card-title>
                      <v-card-title
                        class="justify-center mb-n5 title text-no-wrap success--text font-weight-regular"
                      >R$ {{pendente.preco}}</v-card-title>
                      <div class="hidden-md-and-up"></div>
                    </v-card-text>
                    <v-card-actions>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn color="primary" dark v-on="on">Aceitar</v-btn>
                        </template>
                        <span>Aceitar o Produto</span>
                      </v-tooltip>
                      <div class="flex-grow-1"></div>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn color="accent" dark v-on="on" @click="ver = true">Ver</v-btn>
                        </template>
                        <span>Ver o Produto</span>
                      </v-tooltip>
                      <div class="flex-grow-1"></div>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn color="error" dark v-on="on" @click="negar = true">Negar</v-btn>
                        </template>
                        <span>Negar o Produto</span>
                      </v-tooltip>
                    </v-card-actions>
                    <v-dialog persistent max-width="500px" v-model="ver">
                      <v-card>
                        <v-container fluid>
                          <v-card-title class="subtitle-1">
                            <span class="font-weight-medium">Produtor:</span> &nbsp;
                            <span class="font-weight-regular">alguma mensagem aqui</span>
                          </v-card-title>
                          <v-card-title class="subtitle-1">
                            <span class="font-weight-medium">Contato:</span> &nbsp;
                            <span class="font-weight-regular">alguma mensagem aqui</span>
                          </v-card-title>
                          <v-card-title class="subtitle-1">
                            <span class="font-weight-medium">Descrição:</span> &nbsp;
                            <span class="font-weight-regular">alguma mensagem aqui</span>
                          </v-card-title>
                        </v-container>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="seccondary"
                            text
                            @click="ver=false"
                            class="font-weight-regular"
                          >Fechar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-card>
                  <v-dialog v-model="negar" persistent max-width="500px">
                    <v-card>
                      <v-card-title
                        class="headline justify-center"
                      >Informe ao produtor o que há de errado com esse produto.</v-card-title>
                      <v-container fluid>
                        <v-form>
                          <v-radio-group v-model="mensagem">
                            <v-radio
                              label="1 - Este produto contém uma imagem com conteudo explicito."
                              value="1 - Este produto contém uma imagem com conteudo explicito."
                            ></v-radio>
                            <v-radio
                              label="2 - A imagem não condiz com o nome do produto."
                              value="2 - A imagem não condiz com o nome do produto."
                            ></v-radio>
                            <v-radio
                              label="3 - O produto não está na categoria correta"
                              value="3 - O produto não está na categoria correta"
                            ></v-radio>
                            <v-radio
                              label="4 - Descrição não está legivel."
                              value="4 - Descrição não está legivel."
                            ></v-radio>
                          </v-radio-group>
                          <v-checkbox label="Outro:" class="mt-n3" v-model="outro"></v-checkbox>
                          <v-textarea
                            v-if="outro"
                            filled
                            class="mt-n2"
                            v-model="mensagem"
                            auto-grow
                            color="primary"
                            label="Informe ao produtor qual o erro."
                            clearable
                          ></v-textarea>
                        </v-form>
                      </v-container>
                      <v-card-actions>
                        <v-btn color="seccondary" @click="negar = false">Cancelar</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="error" @click="negar = false">Enviar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Cards from "../components/Cards";
import { validaToken } from "../mixins";

export default {
  mixins: [validaToken],

  data() {
    return {
      ver: false,
      outro: "",
      mensagem: "",
      negar: false,
      dialog: true,
      modal: false,
      hover: 2,
      ativos: [
        {
          foto: require("../assets/uva.jpeg"),
          nome: "Uva",
          preco: "5.50",
          id: 1
        }
      ],
      pendentes: [
        {
          foto: require("../assets/uva.jpeg"),
          nome: "Uva",
          preco: "5.50",
          id: 1
        }
      ],
      negados: [
        {
          foto: require("../assets/uva.jpeg"),
          nome: "Uva",
          preco: "5.50",
          id: 1
        }
      ]
    };
  }
};
</script>
