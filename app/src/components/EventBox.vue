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
        title: "Event title",
        time: new Date(),
        sender: "me",
      };

      this.events.add(tmpEvent);
    }
  }
}
</script>

<style scoped>

</style>