import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router/index'

export const userStore = defineStore('user', {
  state: () => ({
    users: [{ username: 'TestUser', pass: '123', role: 'admin' }],
    loggedUser: null 
  }),
  actions: {
    login(username, pass) {
      try {
        let user = this.users.find(user => user.username === username && user.pass === pass);
        if (user) {
          router.push('/home');
          this.loggedUser = { username: user.username, pass: user.pass, role: user.role };
        } else {
          console.log('Wrong information!');
        }
      } catch (error) {
        console.error('An error has occurred');
      }
    },
    register(username, pass) {
      this.users.push({ username, pass, role: 'user' });
    },
    updateUserInfo(newUsername, newPassword) {
      if (this.loggedUser) {
        const user = this.users.find(user => user.username === this.loggedUser.username);
        if (user) {
          user.username = newUsername;
          user.pass = newPassword;
          this.loggedUser.username = newUsername;
          this.loggedUser.pass = newPassword;
        }
      }
    }
  }
})
  