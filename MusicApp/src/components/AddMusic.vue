<template>
    <div>
      <h2>Adicionar Música</h2>
      <input v-model="track" placeholder="Nome da música" />
      <button @click="searchTrack">Buscar</button>
      <ul v-if="results.length">
        <li v-for="result in results" :key="result.mbid">
          {{ result.artist }} - {{ result.name }}
          <button @click="addTrack(result)">Adicionar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { searchTrack, getTrackInfo } from '@/services/lastfm';
  
  export default {
    name: 'AddMusic',
    data() {
      return {
        track: '',
        results: [],
      };
    },
    methods: {
      async searchTrack() {
        try {
          const response = await searchTrack(this.track);
          this.results = response.data.results.trackmatches.track;
        } catch (error) {
          console.error('Erro ao buscar música:', error);
        }
      },
      async addTrack(track) {
        try {
          const response = await getTrackInfo(track.artist, track.name);
          const trackInfo = response.data.track;
          // Aqui você pode adicionar a lógica para salvar a música no seu backend ou estado da aplicação
          console.log('Música adicionada:', trackInfo);
        } catch (error) {
          console.error('Erro ao adicionar música:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  input {
    margin-right: 1rem;
  }
  button {
    margin-left: 1rem;
  }
  </style>