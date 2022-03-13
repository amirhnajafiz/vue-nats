<template>
  <div class="panel-container">
      <div class="row">
          <div class="form-row"> 
              <label for="name">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                </svg>
              </label>
              <input id="name" type="text" v-model="username" placeholder="Name ..." />
          </div>
          <div class="form-row">
              <label for="password">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
              </label>
              <input id="password" type="password" v-model="password" placeholder="Password ..." />
          </div>
          <div class="form-row more-margin">
              <button class="btn join" v-on:click="join()">
                  <span style="margin-right: 3px;">
                    Join
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                  </svg>
              </button>
              <button class="btn reset" v-on:click="clear()">
                  <span style="margin-right: 3px;">
                    Reset
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                  </svg>
              </button>
          </div>
      </div>
  </div>
</template>

<script>
import login from "../api/login"

export default {
    name: "panel",
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        clear() {
            this.username = "";
            this.password = "";
            document.getElementById("name").innerText = "";
            document.getElementById("password").innerText = "";
        },
        join() {
            login(this.username, this.password)
            if (this.$store.getters.getJwt != null) {
                this.$router.push("/chat")
            } else {
                alert('cannot login')
            }
        }
    }
}
</script>

<style scoped>
.panel-container {
    width: 50%;
    margin: 80px auto 10px;
}

.row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.form-row {
    width: 50%;
    margin: 10px auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid white;
    outline: none;
    margin-bottom: 5px;
    flex-grow: 2;
}

label {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 5px;
    color: rgb(0, 128, 105);
    margin-bottom: 5px;
    margin-right: 5px;
    width: 50px;
}

input:hover, input:focus {
    border: 1px solid gainsboro;
}

.btn {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 10px;
    width: 100px;
    outline: none;
    border: 0 solid black;
    border-radius: 5px;
}

.join {
    background: rgb(0, 64, 99);
    color: #fff;
}

.join:hover {
    background: rgb(0, 52, 80);
}

.reset {
    background: rgb(225, 225, 225);
}

.reset:hover {
    background: rgb(184, 184, 184);
}

.more-margin {
    margin-top: 50px;
}
</style>