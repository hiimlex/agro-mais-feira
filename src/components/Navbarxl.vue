<template>
  <div id="Navbar" class="my-auto">
    <!-- Desktop and mobile -->
    <v-app-bar elevation="2">
      <v-app-bar-nav-icon
        class="hidden-md-and-up icon-menu"
        color="success"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/" class="router-bar">
        <v-toolbar-title class="logo ml-3">Agro+Feira</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <v-btn icon disabled>
        <v-icon></v-icon>
      </v-btn>
      <v-text-field
        autofocus
        placeholder="Buscar"
        color="success"
        clearable
        solo
        rounded
        v-model="busca"
        class="mt-8 border-color-green-search hidden-sm-and-down"
      >
        <template slot="append">
          <v-icon v-if="busca" color="success" @click.prevent="buscarProdutos">search</v-icon>
        </template>
      </v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down mr-3">
        <v-btn
          text
          class="hover-link"
          v-for="link in links"
          :key="link.name"
          :to="link.route"
        >{{link.name}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <div class="text-center">
        <v-list-item-title class="logo">Agro+</v-list-item-title>
      </div>
      <v-divider></v-divider>
      <!-- Links -->
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.name" link :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="subtitle font-weight-medium">{{ link.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      links: [
        { icon: "person", name: "Entrar", route: "entrar" },
        { icon: "person_add", name: "Registrar", route: "registrar" },
        { icon: "local_atm", name: "Anunciar", route: "anunciar" },
        { icon: "info", name: "Blog", route: "blog" }
      ]
    };
  }
};
</script>