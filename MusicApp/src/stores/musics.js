import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const musicStore = defineStore('music', {
  state: () => ({musics:[{name:'TestMusic',author:'TestAuthor',releaseyear:1998}]}),
  actions: {
    addMusic(name,author,releaseyear) {
      if (name==''||author==''||releaseyear=='') {
        console.log('Information required')
      } else {
        this.music.push(name,author,releaseyear)
      }
    },
    removeMusic(name) {
      try {
        let search=musics.find(music=>music.name=name)
        if (name=='') {
          console.log('Please input a name')
        } else if (search==-1) {
          console.log('No music found')
        } else {
          this.musics.pop(search)
          console.log('Music deleted sucessfully')
        }
      } catch(error) {
        console.log('An error has ocurred')
      }
      
    }
  }
})


