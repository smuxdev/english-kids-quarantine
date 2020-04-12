<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <HelloWorld msg="Welcome to" title="English Kids Quarantine" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.mapfre-logo {
  position: relative;
  left: -5rem;
  bottom: 1rem;
}
</style>
