<script setup>
const props = defineProps({
  payload: String,
  time: Date,
  sender: String
})
</script>

<template>
  <div class="holder">
    <p style="margin-bottom: 10px;">
      {{ this.payload }}
    </p>
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
  font-size: 0.9rem;
}
</style>