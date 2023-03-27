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
      events: [
        {
          "message": "hello",
          "time": new Date(),
          "sender": "Amir",
        }
      ],
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
  padding: 10px 20px;
  background-color: aliceblue;
  color: #163260;
  border-radius: 30px;
  max-width: 100%;
  display: inline-block;
}
</style>