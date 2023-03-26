<template>
  <div>
    <div v-for="event in events">

    </div>
  </div>
</template>

<script>
export default {
  name: "EventBox",
  data() {
    return {
      events: [],
    }
  }
}
</script>

<style scoped>

</style>