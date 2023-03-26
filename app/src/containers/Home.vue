<script setup>
import EventBox from "../components/EventBox.vue";
</script>

<template>
  <div class="container">
    <h1 class="title">
      Vue-Nats
    </h1>
    <EventBox
        class="box"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
.title {
  margin: 50px auto;
  text-align: center;
}

.box {
  width: 50%;
  margin: 100px auto 0;
  padding: 20px 40px;
  border: 2px solid gainsboro;
  border-radius: 5px;
  height: 350px;
  overflow: scroll;
}
</style>