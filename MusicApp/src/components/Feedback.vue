<template>
    <div>
      <h2>Feedback e Crítica ao Vivo</h2>
      <form @submit.prevent="submitFeedback">
        <textarea v-model="feedback" placeholder="Deixe seu feedback"></textarea>
        <button type="submit">Enviar</button>
      </form>
      <h3>Comentários</h3>
      <ul>
        <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Feedback',
    data() {
      return {
        feedback: '',
        comments: [],
      };
    },
    methods: {
      submitFeedback() {
        const newComment = { id: Date.now(), text: this.feedback };
        this.comments.push(newComment);
        this.feedback = '';
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  textarea {
    margin: 0.5rem 0;
  }
  </style>