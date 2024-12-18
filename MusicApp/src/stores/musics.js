import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => (name:'TestMusic',author:'TestAuthor',releaseyear:1998),
  actions: {
    addmusic() {

    }
  }
})


