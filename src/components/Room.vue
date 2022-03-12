<template>
  <div>
      <div>
          <div v-for="chat in chats" :key="chat.id">
              <p>
                  {{ chat.message }}
              </p> 
              <small>
                  {{ chat.sender + " | " + chat.date }}
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
                }
            ]
        }
    }
}
</script>

<style>

</style>