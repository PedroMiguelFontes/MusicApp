<template>
    <div>
      <h2>Sistema de Inscrição com Tipos de Ingressos</h2>
      <form @submit.prevent="purchaseTicket">
        <label for="ticketType">Tipo de Ingresso:</label>
        <select v-model="ticketType" id="ticketType">
          <option value="normal">Normal</option>
          <option value="vip">VIP</option>
          <option value="premium">Premium</option>
        </select>
        <label for="days">Quantidade de Dias:</label>
        <input type="number" v-model="days" id="days" min="1" max="7" />
        <button type="submit">Comprar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TicketSystem',
    data() {
      return {
        ticketType: 'normal',
        days: 1,
      };
    },
    methods: {
      purchaseTicket() {
        // Lógica para processar a compra do ingresso
        console.log(`Comprado ingresso ${this.ticketType} para ${this.days} dias.`);
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  label, select, input, button {
    margin: 0.5rem 0;
  }
  </style>