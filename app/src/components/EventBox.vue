<script setup>
import Event from "./Event.vue";
</script>

<template>
  <div>
    <div v-for="event in events">
      <Event
        :payload="event.message"
        :time="event.time"
        :sender="event.sender"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "EventBox",
  components: {Event},
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
    for (let i = 0; i < 10; i++) {
      this.addEvent();
    }
  }
}
</script>

<style scoped>

</style>