<template>
    <div>
      <h2>Inscrição como Voluntários</h2>
      <form @submit.prevent="submitForm">
        <input v-model="name" placeholder="Nome" />
        <input v-model="age" type="number" placeholder="Idade" />
        <input v-model="contact" placeholder="Contato" />
        <textarea v-model="experience" placeholder="Experiência prévia"></textarea>
        <select v-model="role">
          <option value="recepcao">Recepção</option>
          <option value="apoio">Apoio nos bastidores</option>
          <option value="assistencia">Assistência no palco</option>
        </select>
        <button type="submit">Inscrever-se</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VolunteerForm',
    data() {
      return {
        name: '',
        age: '',
        contact: '',
        experience: '',
        role: 'recepcao',
      };
    },
    methods: {
      submitForm() {
        // Lógica para processar a inscrição do voluntário
        console.log(`Voluntário inscrito: ${this.name}, ${this.age}, ${this.contact}, ${this.experience}, ${this.role}`);
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  input, textarea, select {
    margin: 0.5rem 0;
  }
  </style>