<template>
    <div>
      <h1>Ingressos</h1>
      <p>Bilhetes normais disponíveis: {{ store.tickets.normal }}</p>
      <p>Bilhetes premium disponíveis: {{ store.tickets.premium }}</p>
      <button @click="buyNormal">Comprar bilhete normal</button>
      <button @click="buyPremium">Comprar bilhete premium</button>
    </div>
  </template>
  
  <script>
        import { ticketsStore } from '@/stores/tickets';
        import { userStore } from '@/stores/users';
  export default {
    setup() {
      const user = userStore();
      const store = ticketsStore();
      const buyNormal = () => {
        store.buyNormal();
      };
      const buyPremium = () => {
        store.buyPremium();
      };
      return { store, buyNormal, buyPremium , user};
    }
  }
  </script>
  
  <style lang="scss" scoped>

  </style>