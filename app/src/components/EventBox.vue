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
          "message": "hello world",
          "time": new Date(),
          "sender": "Reza",
        },
        {
          "message": "hello mate, how are you",
          "time": new Date(),
          "sender": "Amir222",
        },
        {
          "message": "hello there",
          "time": new Date(),
          "sender": "Amir",
        },
        {
          "message": "Hi",
          "time": new Date(),
          "sender": "Fuck me",
        },
        {
          "message": "hello",
          "time": new Date(),
          "sender": "Amir",
        },
        {
          "message": "hello",
          "time": new Date(),
          "sender": "Amir",
        },
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
  padding: 5px 18px;
  background-color: aliceblue;
  color: #000000;
  border-radius: 4px 30px 30px 4px;
  max-width: 100%;
  display: inline-block;
}
</style>