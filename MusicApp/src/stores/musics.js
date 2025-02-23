import { defineStore } from 'pinia';
import { fetchTopTracks } from '@/api/lastfm';

export const musicStore = defineStore('music', {
  state: () => ({
    musics: [{ name: 'TestMusic', author: 'TestAuthor', releaseyear: 1998 }],
    musicList: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchMusicFromApi(artistName) {
      this.loading = true;
      this.error = null;

      try {
        const tracks = await fetchTopTracks(artistName);
        this.musicList = tracks.map(track => ({
          name: track.name,
          artist: track.artist.name,
          listeners: track.listeners,
        }));
      } catch (error) {
        this.error = 'Erro ao buscar músicas do artista.';
      } finally {
        this.loading = false;
      }
    },

    addLocalMusic(music) {
      this.musicList.push(music);
    },

    removeMusic(index) {
      if (index >= 0 && index < this.musicList.length) {
        this.musicList.splice(index, 1);
      }
    }
  }
});