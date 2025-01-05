import {ref,computed} from 'vue'
import { defineStore } from 'pinia'
import router from '@/router/index'

export const userStore = defineStore('user', {
    state: () => ({users:[{username:'TestUser',pass:'123',role:'admin'}]},
                  {loggedUser:[{username:'',pass:'',role:''}]}
    ),
    actions: {
      login() {
        try {
          let search=user.find((user)=>user.name==user.username)
          if (search!=-1) {
            router.go('/home')
            this.loggedUser.push({username:user.username,pass:user.pass,role:user.role})
          } 
          else {
            console.log('Wrong information!')
          }
        } catch(error) {
          console.error('An error has ocurred')
        }},
      register() {
        this.users.push({username,pass,role:'admin'})
      }
    }
  })
  