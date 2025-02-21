<template>
    <div>
      <h2>Painel de Acesso Exclusivo Após a Compra</h2>
      <div v-if="ticketType === 'vip' || ticketType === 'premium'">
        <h3>Playlists Exclusivas</h3>
        <ul>
          <li v-for="playlist in playlists" :key="playlist.id">{{ playlist.name }}</li>
        </ul>
        <h3>Informação sobre os Artistas</h3>
        <ul>
          <li v-for="artist in artists" :key="artist.id">{{ artist.name }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExclusiveAccess',
    data() {
      return {
        ticketType: 'vip', // Isso deve ser obtido do estado do usuário autenticado
        playlists: [
          { id: 1, name: 'Playlist 1' },
          { id: 2, name: 'Playlist 2' },
        ],
        artists: [
          { id: 1, name: 'Artista 1' },
          { id: 2, name: 'Artista 2' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  h3 {
    margin-top: 1rem;
  }
  </style>