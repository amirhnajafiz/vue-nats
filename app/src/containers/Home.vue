<script setup>
import EventBox from "../components/EventBox.vue";
</script>

<template>
  <div class="container">
    <h1 class="title">
      {{ message }}
    </h1>
    <EventBox
        @connectionFailed="displayError"
        class="box"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: "Vue Nats"
    }
  },
  methods: {
    displayError() {
      this.message = "Server failed to respond!";
      document.getElementsByTagName("body").item(0).style.background = "rgba(215,0,0,0.79)";
    }
  }
}
</script>

<style scoped>
.title {
  margin: 100px auto 0;
  text-align: center;
}

.box {
  width: 50%;
  margin: 70px auto 0;
  padding: 20px 40px;
  border: 3px solid rgba(14, 47, 42, 0.92);
  border-radius: 5px;
  height: 350px;
  overflow: scroll;
  background-color: #163260;
  box-shadow: 0 0 15px rgba(9, 9, 9, 0.5);
}
</style>