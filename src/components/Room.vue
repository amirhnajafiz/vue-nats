<template>
  <div>
    <div class="main-panel">
      <div class="holder">
        <div v-for="chat in chats" :key="chat.id" class="row">
          <div class="full-flex">
            <div class="circle">
              <span>
                {{ chat.sender.split(" ").slice(0, 2).join(" ").toUpperCase() }}
              </span>
            </div>
            <small>
              {{ chat.sender }}
            </small>
          </div>
          <p>
            {{ chat.message }}
          </p>
          <small class="small-text">
            {{ chat.date }}
          </small>
        </div>
      </div>
      <div class="input-line">
        <input type="text" v-model="message" placeholder="Type something ..." />
        <button v-on:click="send()" class="send">Send</button>
        <button v-on:click="exit()" class="exit">Exit room</button>
      </div>
    </div>
  </div>
</template>

<script>
import publish from '../api/chat/publish'
import suppress from '../api/chat/suppress'

export default {
  name: "Room",
  data() {
    return {
      chats: [],
      message: "",
    };
  },
  methods: {
    exit() {
      this.$store.commit("LogOut");
      this.$router.push("/");
      window.location.reload();
    },
    send() {
      let res = publish(this.$store.getters.userName, this.message, this.$store.getters.getJwt)
      if (!res) {
        alert("failed to send message")
      }
    }
  },
  mounted() {
    // getting the old messages from db
    this.chats = suppress(this.$store.getters.userName, this.$store.getters.getJwt)

    // subscribe to all server IDs
    this.$nats.subscribe(process.env.NATS_TOPIC, (event) => {
      console.log('Server reading:', event);
      this.chats.append(event)
    });
  },
};
</script>

<style scoped>
.main-panel {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  width: 80%;
  margin: 10px auto;
}

.holder {
  height: 500px;
  overflow: scroll;
}

.row {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  border-bottom: 1px solid gainsboro;
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: rgb(0, 64, 99);
  color: #fff;
  border-radius: 50%;
  margin-right: 10px;
  font-size: 12px;
}

.full-flex {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
}

.small-text {
  font-size: 0.5em;
}

.input-line {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
}

input {
  flex-grow: 2;
  padding: 10px;
  outline: none;
  border: 1px solid gainsboro;
}

input:hover,
input:focus {
  border: 1px solid gray;
}

.send,
.exit {
  border: 0 solid black;
  outline: none;
}

.send {
  border: 1px solid rgb(0, 64, 99);
  background: rgb(0, 64, 99);
  color: #fff;
}

.send:hover {
  border-color: rgb(0, 52, 80);
  background: rgb(0, 52, 80);
}

.exit {
  border: 1px solid rgb(140, 0, 0);
  background: rgb(140, 0, 0);
  color: #fff;
}

.exit:hover {
  border-color: rgb(100, 0, 0);
  background: rgb(100, 0, 0);
}
</style>
