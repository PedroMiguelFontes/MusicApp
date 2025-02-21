<template>
    <div>
      <h2>Funcionalidade de Networking para Participantes</h2>
      <form @submit.prevent="connect">
        <input v-model="name" placeholder="Seu nome" />
        <input v-model="contact" placeholder="Seu contato" />
        <button type="submit">Conectar</button>
      </form>
      <h3>Conexões</h3>
      <ul>
        <li v-for="connection in connections" :key="connection.id">{{ connection.name }} - {{ connection.contact }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Networking',
    data() {
      return {
        name: '',
        contact: '',
        connections: [],
      };
    },
    methods: {
      connect() {
        const newConnection = { id: Date.now(), name: this.name, contact: this.contact };
        this.connections.push(newConnection);
        this.name = '';
        this.contact = '';
      },
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