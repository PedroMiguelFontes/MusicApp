<template>
    <div>
      <h2>Line-Up Interativo e Personalizável</h2>
      <ul>
        <li v-for="act in lineUp" :key="act.id">
          {{ act.name }} - {{ act.time }}
          <button @click="addToSchedule(act)">Adicionar ao Calendário</button>
        </li>
      </ul>
      <h3>Meu Calendário</h3>
      <ul>
        <li v-for="act in mySchedule" :key="act.id">{{ act.name }} - {{ act.time }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LineUp',
    data() {
      return {
        lineUp: [
          { id: 1, name: 'Banda 1', time: '18:00' },
          { id: 2, name: 'Banda 2', time: '20:00' },
        ],
        mySchedule: [],
      };
    },
    methods: {
      addToSchedule(act) {
        this.mySchedule.push(act);
      },
    },
  };
  </script>
  
  <style scoped>
  h3 {
    margin-top: 1rem;
  }
  </style>