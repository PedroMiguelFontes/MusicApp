import {ref,computed} from 'vue'
import { defineStore } from 'pinia'
import router from '@/router/index'

export const userStore = defineStore('user', {
    state: () => ({user:[{username:'TestUser',pass:'123',role:'admin'}]}),
    actions: {
      login() {
        let search=user.find((user)=>user.name==user.username)
        if (search!=-1) {
          router.go('/home')
        } else {
          alert('Wrong information!')
        }
      }
    }
  })
  