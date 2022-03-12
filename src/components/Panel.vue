<template>
  <div class="panel-container">
      <div class="row">
          <div class="form-row"> 
              <label for="name">Name</label>
              <input id="name" type="text" v-model="username" placeholder="Amirhossein ..." />
          </div>
          <div class="form-row">
              <label for="password">Password</label>
              <input id="password" type="password" v-model="password" placeholder="Password ..." />
          </div>
          <div class="form-row more-margin">
              <button class="btn join">
                  Join
              </button>
              <button class="btn reset" v-on:click="clear()">
                  Reset
              </button>
          </div>
      </div>
  </div>
</template>

<script>
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
        login() {
            
        }
    }
}
</script>

<style scoped>
.panel-container {
    width: 50%;
    margin: 10px auto;
    margin-top: 80px;
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
    padding: 5px;
    border-radius: 5px;
    background: rgb(0, 128, 105);
    color: white;
    margin-bottom: 5px;
    margin-right: 5px;
    width: 100px;
}

input:hover, input:focus {
    border: 1px solid gainsboro;
}

.btn {
    padding: 10px;
    width: 100px;
    outline: none;
    border: 0px solid black;
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