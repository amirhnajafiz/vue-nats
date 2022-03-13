<template>
  <div class="container">
    <navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  components: { Navigation },
  name: "App",
};
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  margin: 0;
  padding: 10px;
  height: 100vh;
  background-image: linear-gradient(to bottom right, rgb(0, 255, 200), rgb(253, 253, 253));
}
</style>
