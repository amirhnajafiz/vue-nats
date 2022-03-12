<template>
  <div>
      <div class="main-panel">
          <div v-for="chat in chats" :key="chat.id" class="row">
              <div class="full-flex">
                  <div class="circle">
                      <span>
                          {{ chat.sender.split(' ').slice(0, 2).join(' ').toUpperCase() }}
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
  </div>
</template>

<script>
export default {
    name: "Room",
    data() {
        return {
            chats: [
                {
                    id: "1",
                    sender: "me",
                    message: "hi",
                    date: new Date(),
                },
                {
                    id: "2",
                    sender: "me",
                    message: "hi",
                    date: new Date(),
                },
                {
                    id: "3",
                    sender: "me",
                    message: "hi",
                    date: new Date(),
                },
                {
                    id: "4",
                    sender: "me",
                    message: "hi",
                    date: new Date(),
                },
                {
                    id: "5",
                    sender: "me",
                    message: "hi",
                    date: new Date(),
                },
                {
                    id: "6",
                    sender: "me",
                    message: "hi",
                    date: new Date(),
                }
            ]
        }
    }
}
</script>

<style scoped>
.main-panel {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    width: 80%;
    margin: 10px auto;
    height: 600px;
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
</style>