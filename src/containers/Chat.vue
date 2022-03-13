<template>
  <div>
      <!-- chat page -->
      <h1 style="text-align: center;">
        Welcome to the Room {{ username }}
      </h1>
      <room />
  </div>
</template>

<script>
import Room from '../components/Room.vue'
export default {
  name: "chat",
  data() {
    return {
      username: ""
    }
  },
  components: { Room },
  mounted() {
    this.username = this.$store.getters.userName;
  }
}
</script>
