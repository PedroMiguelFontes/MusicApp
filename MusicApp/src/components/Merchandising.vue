<template>
    <div>
      <h2>Espaço para Merchandising Exclusivo e Personalizado</h2>
      <ul>
        <li v-for="item in merchandise" :key="item.id">
          {{ item.name }} - {{ item.price }}
          <button @click="buyItem(item)">Comprar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Merchandising',
    data() {
      return {
        merchandise: [
          { id: 1, name: 'Camiseta', price: 'R$ 50,00' },
          { id: 2, name: 'Boné', price: 'R$ 30,00' },
        ],
      };
    },
    methods: {
      buyItem(item) {
        // Lógica para processar a compra do item
        console.log(`Comprado: ${item.name} por ${item.price}`);
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0.5rem 0;
  }
  </style>