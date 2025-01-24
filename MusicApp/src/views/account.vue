<template>
    <div>
      <h1>Account Page</h1>
      <img :src="userImage" alt="account image">
      <button @click="changeInfo">Change info</button>
      <div v-if="showForm">
        <h2>Change Account Info</h2>
        <form @submit.prevent="updateInfo">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="newUsername" required><br>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="newPassword" required><br>
          <button type="submit">Update</button>
          <button @click="cancelUpdate">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { userStore } from '@/stores/users';
  
  export default {
    data() {
      return {
        showForm: false,
        newUsername: '',
        newPassword: '',
        userImage: '@/assets/image.png'
      }
    },
    computed: {
      store() {
        return userStore();
      }
    },
    methods: {
      changeInfo() {
        this.showForm = true;
      },
      updateInfo() {
        this.store.updateUserInfo(this.newUsername, this.newPassword);
        console.log(`Updating info to Username: ${this.newUsername}, Password: ${this.newPassword}`);
        this.showForm = false;
      },
      cancelUpdate() {
        this.showForm = false;
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  /* Add your styles here */
  </style>