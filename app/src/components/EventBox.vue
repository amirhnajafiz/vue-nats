<script setup>
import Event from "./Event.vue";
</script>

<template>
  <div>
    <TransitionGroup v-if="events.length > 0" name="list">
      <div v-for="event in events" :key="event.id">
        <Event
            class="row box-row"
            :payload="event.message"
            :time="new Date(event.time)"
            :sender="event.sender"
        />
      </div>
    </TransitionGroup>
    <div v-else>
      No events!
    </div>
  </div>
</template>

<script>
export default {
  name: "EventBox",
  components: {Event},
  data() {
    return {
      events: []
    }
  },
  methods: {
    addEvent(event) {
      event.id = this.events.length;
      this.events.splice(0, 0, event);
    },
    listenForEvents() {
      // open websocket on relay server
      let ws = new WebSocket("ws://localhost:8080");

      let self = this;
      ws.onmessage = function (event) {
        self.addEvent(JSON.parse(event.data));
      }
      ws.onerror = function (err) {
        self.$emit('connectionFailed');
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
  padding: 7px 18px;
  background-color: aliceblue;
  color: #000000;
  border-radius: 4px 30px 30px 4px;
  max-width: 100%;
  display: inline-block;
}

.list-enter-active,
.list-leave-active {
  transition: all 2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>