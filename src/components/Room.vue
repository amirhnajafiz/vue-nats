<template>
  <div>
    <div class="main-panel">
      <div class="holder">
        <div v-for="chat in chats" :key="chat.id" class="row">
          <div class="full-flex">
            <div class="circle">
              <span>
                {{ chat.sender.split("").slice(0, 2).join("").toUpperCase() }}
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
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
              <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            {{ chat.date }}
          </small>
        </div>
      </div>
      <div class="input-line">
        <input type="text" v-model="message" placeholder="Type something ..." />
        <button v-on:click="send()" class="send">
          <span style="margin-right: 5px;">
            Send
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
          </svg>
        </button>
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
      chats: [
        {
          id: 1,
          sender: "Amir",
          message: "Hello",
          date: new Date()
        }
      ],
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
      publish(this.$store.getters.userName, this.message, this.$store.getters.getJwt)
    }
  },
  mounted() {
    // getting the old messages from db
    suppress(this.$store.getters.userName, this.$store.getters.getJwt)
    this.chats = this.$store.getters.getChats

    // subscribe to all server IDs

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
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
