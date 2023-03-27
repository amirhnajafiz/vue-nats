<script setup>
import Event from "./Event.vue";
</script>

<template>
  <div>
    <button style="margin-bottom: 10px;" v-on:click="generate">
      New
    </button>
    <TransitionGroup name="list" tag="div">
      <div v-for="event in events" :key="event.id">
        <Event
            class="row box-row"
            :payload="event.message"
            :time="new Date(event.time)"
            :sender="event.sender"
        />
      </div>
    </TransitionGroup>
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
          "id": 0,
          "message": "hello world",
          "time": new Date(),
          "sender": "Reza",
        },
        {
          "id": 1,
          "message": "hello mate, how are you",
          "time": new Date(),
          "sender": "Amir222",
        }
      ],
    }
  },
  methods: {
    addEvent(event) {
      this.events.splice(0, 0, event);
    },
    listenForEvents() {
      // open websocket on relay server
      let ws = new WebSocket("ws://localhost:8080");

      let self = this;
      ws.onmessage = function (event) {
        self.addEvent(JSON.parse(event.data));
      }
    },
    generate() {
      this.addEvent({
        "message": "new",
        "time": new Date(),
        "sender": "me",
        "id": this.events.length
      })
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

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>