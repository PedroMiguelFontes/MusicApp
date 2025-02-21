<template>
    <div>
      <Header />
      <h1>Register</h1>
      <form @submit.prevent="register">
        <input v-model="name" placeholder="Nome" />
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Senha" />
        <button type="submit">Registrar</button>
      </form>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'Register',
    data() {
      return {
        name: '',
        email: '',
        password: '',
      };
    },
    methods: {
      register() {
        // Lógica para processar o registro
        console.log(`Registrado com: ${this.name}, ${this.email}, ${this.password}`);
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