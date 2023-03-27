<script setup>
const props = defineProps({
  payload: String,
  time: Date,
  sender: String
})
</script>

<template>
  <div class="holder">
    <p>
      {{ this.payload }}
    </p>
    <div class="meta-holder">
      <small style="margin-right: 25px;">
        Send by: {{ this.sender }}
      </small>
      <small>
        At: {{ this.time.toLocaleString() }}
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
  font-size: 0.78rem;
  color: #b4b4b4;
}
</style>