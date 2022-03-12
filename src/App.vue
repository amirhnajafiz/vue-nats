<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p> {{ info }} </p>
</template>

<script>
import login from "./api/login"

export default {
  name: 'App',
  data() {
    return{
      info: "test"
    }
  },
  created() {
    login(this.info, this.info)
  }
}
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
</style>
