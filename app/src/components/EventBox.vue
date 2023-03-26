<template>
  <div>
    <div v-for="event in events">
      <h4>
        {{ event.sender }}
      </h4>
      <p>
        {{ event.message }}
      </p>
      <small>
        {{ event.time }}
      </small>
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

      this.events.add(tmpEvent);
    }
  }
}
</script>

<style scoped>

</style>