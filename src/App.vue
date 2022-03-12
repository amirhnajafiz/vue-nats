<template>
  <div class="container">
    <navigation />
    <p>{{ info }}</p>
    <router-view />
  </div>
</template>

<script>
import login from "./api/login";
import Navigation from "./components/Navigation.vue";

export default {
  components: { Navigation },
  name: "App",
  data() {
    return {
      info: "test",
    };
  },
  created() {
    login(this.info, this.info);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: 0;
  padding: 10px;
  height: 100vh;
  background-image: linear-gradient(to bottom right, rgb(0, 255, 200), rgb(253, 253, 253));
}
</style>
