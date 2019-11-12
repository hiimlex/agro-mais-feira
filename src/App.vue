<template>
  <v-app class="poppins-font" dark>
    <Navbarxl />
    <v-content class="grey lighten-4 justify-content-center" transition="fade-transition">
      <router-view transition="fade" />
    </v-content>
  </v-app>
</template>

<script>
import Navbarxl from "./components/Navbarxl";
export default {
  name: "App",
  components: {
    Navbarxl
  },
  data: () => ({
    //
  })
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
  color: #009b36 !important;
}
.hover-link:hover {
  background-color: white;
  color: black;
  box-shadow: 1px 1px #009b36, 2px 2px #009b36, 2px 2px #009b36;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
}
.v-btn--active.hover-link:hover {
  background-color: white;
  color: black;
  box-shadow: 1px 1px #009b36, 3px 1px #009b36, 3px 1px #009b36;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
}
.v-btn--active {
  border-bottom: 2px solid #009b36 !important;
}
.radius-plus {
  border-radius: 30px !important;
}
.logo {
  font-size: 36px !important;
  font-weight: 700;
  color: #009b36;
}
.router-bar {
  text-decoration: none;
}
.float-and-center {
  margin-top: 10% !important;
}
</style>
