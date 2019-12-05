<template>
  <v-app class="poppins-font" dark>
    <v-content
      class="grey lighten-3 justify-content-center"
      transition="fade-transition"
      align-center
    >
      <router-view />

    </v-content>

  </v-app>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      popup: false,
   }
 },
 
  watch: {
    $route(to, from) {
      document.title = to.meta.title;
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap");

.poppins-font {
  font-family: "Poppins", sans-serif !important;
}
.bc-white {
  background: #fefefe !important;
}
.success {
  color: #68b6d1 !important;
}
.hover-link:hover {
  background-color: white;
  color: black;
  box-shadow: 1px 1px #68b6d1, 2px 2px #68b6d1, 2px 2px #68b6d1;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
}
.v-btn--active.hover-link:hover {
  background-color: white;
  color: black;
  box-shadow: 1px 1px #68b6d1, 3px 1px #68b6d1, 3px 1px #68b6d1;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
}
.hover-card:hover {
  background-color: white;
  color: black;
  box-shadow: 1px 1px #68b6d1, 3px 1px #68b6d1, 3px 1px #68b6d1;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
}
.v-btn--active {
  border-bottom: 2px solid #68b6d1 !important;
}
.radius-plus {
  border-radius: 30px !important;
}
.logo {
  font-size: 36px !important;
  font-weight: 700;
  color: #68b6d1;
}
.router-bar {
  text-decoration: none;
}
.float-and-center {
  margin-top: 10% !important;
}
.categorias-color-bc {
  background-color: #68b6d1;
  position: absolute;
  bottom: 15px;
  width: 100%;
  height: 36px;
}
.ativos-color-bc {
  background-color: #68b6d1;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 36px;
}
.text-capitalize {
  text-transform: capitalize !important;
}
.decoration-link {
  text-decoration: none;
  color: #3f51b5;
}
@media (max-width: 600px) {
  .categorias-color-bc {
    bottom: 0px;
  }
}
</style>
