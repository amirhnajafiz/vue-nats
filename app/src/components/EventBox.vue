<script setup>
import Event from "./Event.vue";
</script>

<template>
  <div>
    <div v-for="event in events">
      <Event
        class="row box-row"
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

      this.events.unshift(tmpEvent);
    },
    listenForEvents() {
      const url = "ws://localhost:8999/"
      let ws = new WebSocket(url);

      ws.onmessage = function (event) {
        console.log(JSON.parse(event.data))
      }
    }
  },
  mounted() {
    this.simulate();
  }
}
</script>

<style scoped>
.box-row {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid darkblue;
}
</style>