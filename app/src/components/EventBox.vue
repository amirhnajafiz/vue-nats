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
  },
  methods: {
    addEvent() {
      let tmpEvent = {
        message: "Event message",
        time: new Date(),
        sender: "me",
      };

      this.events.push(tmpEvent);
    }
  },
  mounted() {
    this.addEvent();
  }
}
</script>

<style scoped>

</style>