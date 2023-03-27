<script setup>
import Event from "./Event.vue";
</script>

<template>
  <div>
    <div v-for="event in events">
      <Event
        class="row box-row"
        :payload="event.message"
        :time="new Date(event.time)"
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
    addEvent(event) {
      this.events.unshift(event);
    },
    listenForEvents() {
      // open websocket on relay server
      let ws = new WebSocket("ws://localhost:8080");

      let self = this;
      ws.onmessage = function (event) {
        self.addEvent(JSON.parse(event.data));
      }
    }
  },
  mounted() {
    this.listenForEvents();
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