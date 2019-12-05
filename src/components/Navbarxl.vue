  <template>
  <div id="Navbar" class="my-auto">
    <!-- Desktop and mobile -->
    <v-app-bar elevation="2">
      <v-app-bar-nav-icon
        class="hidden-md-and-up icon-menu"
        color="success"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div class="flex-grow-1 hidden-md-and-up"></div>
      <v-btn icon disabled class="hidden-sm-and-down">
        <v-icon></v-icon>
      </v-btn>
      <router-link to="/" class="router-bar">
        <div class="text-center">
          <v-toolbar-title class="logo ml-3">{{$store.state.titlelogo}}</v-toolbar-title>
        </div>
      </router-link>
      <div class="flex-grow-1"></div>
      <v-text-field
        autofocus
        placeholder="Buscar"
        color="success"
        clearable
        solo
        rounded
        v-model="busca"
          v-on:keyup.enter="buscarProdutos"
        class="mt-8 border-color-green-search hidden-sm-and-down"
      >
        <template slot="append">
          <v-icon
            v-if="busca"
            color="success"
            @click.prevent="buscarProdutos"
            v-on:keyup.enter="buscarProdutos"
          >search</v-icon>
        </template>
      </v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down mr-3" v-if="!$store.state.login && !$store.state.admin">
        <v-btn
          text
          class="hover-link"
          v-for="link in links_guest"
          :key="link.name"
          :to="link.route"
        >{{link.name}}</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down mr-3" v-if="$store.state.login">
        <v-btn
          text
          class="hover-link"
          v-for="link in links_logged"
          :key="link.name"
          :to="link.route"
        >{{link.name}}</v-btn>
      </v-toolbar-items>
         <v-toolbar-items class="hidden-sm-and-down mr-3" v-if="$store.state.admin">
        <v-btn
          text
          class="hover-link"
          v-for="link in links_admin"
          :key="link.name"
          :to="link.route"
        >{{link.name}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <div class="text-center">
        <v-list-item-title class="logo">Feira</v-list-item-title>
      </div>
      <v-divider></v-divider>
      <!-- Links -->
      <v-list dense v-if="!$store.state.login && !$store.state.admin">
        <v-list-item link color="success" v-for="link in links_guest" :key="link.name" :to="link.route">
            <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title class="subtitle font-weight-medium">{{ link.name }}</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>
      </v-list>
      <v-list dense v-if="$store.state.login">
        <v-list-item link color="success" v-for="link in links_logged" :key="link.name" :to="link.route">
            <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title class="subtitle font-weight-medium">{{ link.name }}</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>
      </v-list>
      <v-list dense v-if="$store.state.admin">
        <v-list-item link color="success" v-for="link in links_admin" :key="link.name" :to="link.route">
            <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title class="subtitle font-weight-medium">{{ link.name }}</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { islogged  } from "../mixins"

export default {
   mixins: [islogged],
  data() {
    return {
      drawer: null,
      title: null,
      links_guest: [
        { icon: "home", name: "Home", route: "/"},
        { icon: "person", name: "Entrar", route: "entrar"},
        { icon: "person_add", name: "Registrar", route: "registrar"},
        { icon: "local_atm", name: "Anunciar", route: "anunciar"},
        { icon: "info", name: "Sobre", route: "sobre"}
      ],
      links_logged: [
        { icon: "home", name: "Home", route: "/"},
        { icon: "person", name: "Meus Produtos", route: "meus_produtos"},
        { icon: "local_atm", name: "Anunciar", route: "anunciar"},
        { icon: "exit_to_app", name: "Sair", route: "Sair"}
      ],
      links_admin: [
        { icon: "home", name: "Home", route: "/"},
        { icon: "account_box", name: "Administração", route: "Admin"},
        { icon: "person_add", name: "Registrar", route: "registrar"},
        { icon: "exit_to_app", name: "Sair", route: "Sair"}
      ],
      busca: null
    };
  },

  methods: {
    buscarProdutos() {
      this.$router.push({ query: { s: this.busca } });
    }
  }
};
</script>