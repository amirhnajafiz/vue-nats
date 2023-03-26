<script setup>
const props = defineProps({
  payload: String,
  time: Date,
  sender: String
})
</script>

<template>
  <div class="holder">
    <div>
      {{ this.payload }}
    </div>
    <div class="meta-holder">
      <small>
        Send by: {{ this.sender }}
      </small>
      <small>
        at: {{ this.time }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "Event"
}
</script>

<style scoped>
.holder {
  display: flex;
  flex-direction: column;
}

.meta-holder {
  display: flex;
  justify-content: space-between;
}
</style>