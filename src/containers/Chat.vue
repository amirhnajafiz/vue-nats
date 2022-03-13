<template>
  <div>
      <!-- chat page -->
      <h1>
        Welcome to the Room {{ this.$store.getters.userName }}
      </h1>
      <room />
  </div>
</template>

<script>
import Room from '../components/Room.vue'
export default {
  name: "chat",
  components: { Room },
}
</script>
