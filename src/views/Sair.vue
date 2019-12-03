<template>
  
</template>

<script>
export default {
created(){
      this.$store.dispatch("deslogar").then(response => {
        this.$router.push("/");
      });
   }
}

</script>

<style>

</style>