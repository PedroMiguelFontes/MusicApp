import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const musicStore = defineStore('music', {
  state: () => ({music:[{name:'TestMusic',author:'TestAuthor',releaseyear:1998}]}),
  actions: {
    addmusic(name,author,releaseyear) {
      if (name==''||author==''||releaseyear=='') {
        alert('Information required')
      } else {
        this.music.push(name,author,releaseyear)
      }
    }
  }
})


