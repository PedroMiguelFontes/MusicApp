<template>
  <div>
    <input v-model="artistName" placeholder="Digite o nome do artista" />
    <button @click="searchMusic">Buscar Músicas</button>
    <div v-if="loading">Carregando músicas...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="(music, index) in musicList" :key="index">
        {{ music.name }} - {{ music.artist }} ({{ music.listeners }} ouvintes)
      </li>
    </ul>
    <div v-if="isAdmin">
      <h2>Adicionar Música</h2>
      <form @submit.prevent="addMusic">
        <input v-model="newMusic.name" placeholder="Nome da Música" required />
        <input v-model="newMusic.artist" placeholder="Artista" required />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { musicStore } from '@/stores/musics'
import { userStore } from '@/stores/users'

export default {
  data() {
    return {
      artistName: '',
      newMusic: {
        name: '',
        artist: ''
      }
    }
  },
  computed: {
    musicList() {
      const store = musicStore()
      return store.musicList
    },
    loading() {
      const store = musicStore()
      return store.loading
    },
    error() {
      const store = musicStore()
      return store.error
    },
    isAdmin() {
      const store = userStore()
      return store.loggedUser && store.loggedUser.role === 'admin'
    }
  },
  methods: {
    async searchMusic() {
      const store = musicStore()
      await store.fetchMusicFromApi(this.artistName)
    },
    addMusic() {
      const store = musicStore()
      store.addLocalMusic(this.newMusic)
      this.newMusic = { name: '', artist: '' } // Reset the form
    }
  }
}
</script>

<style lang="scss" scoped>

</style>