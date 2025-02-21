<template>
    <div>
      <Header />
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Senha" />
        <button type="submit">Login</button>
      </form>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Lógica para processar o login
        console.log(`Login com: ${this.email}, ${this.password}`);
      },
    },
    components: {
      Header,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    margin: 0.5rem 0;
  }
  </style>