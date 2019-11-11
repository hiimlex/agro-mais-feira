<template>
  <v-app class="poppins-font bc-white">
        <v-content class="grey lighten-4 justify-content-center" transition="fade-transition">
            <router-view transition="fade"/>
        </v-content>
  </v-app>  
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap");

html {
  overflow: hidden !important;
}
.poppins-font {
  font-family: "Poppins", sans-serif !important;
}
.bc-white {
  background: #fefefe !important;
}
.success {
  color: #009b36 !important;
}
</style>
