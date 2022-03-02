<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <p> {{ info }} </p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import login from "./api/login"

export default {
  name: 'App',
  data() {
    return{
      info: "test"
    }
  },
  components: {
    HelloWorld
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
