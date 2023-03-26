<script setup>
const props = defineProps({
  payload: String,
  time: Date,
  sender: String
})
</script>

<template>
  <div>
    <h4>
      {{ this.sender }}
    </h4>
    <p>
      {{ this.payload }}
    </p>
    <small>
      {{ this.time }}
    </small>
  </div>
</template>

<script>
export default {
  name: "Event"
}
</script>

<style scoped>

</style>