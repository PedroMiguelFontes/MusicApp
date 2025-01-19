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
        <div v-if="userStore.loggedUser.role=='Admin'">
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
    import { musicStore } from '@/stores/musics';
    import { userStore } from '@/stores/users';
    export default {
        setup() {
            const musicStore = musicStore(); 
            const artistName = '';
            const newMusic = { name: '', artist: '' };

            const searchMusic = async () => {
            if (artistName.trim()) {
                await musicStore.fetchMusicFromApi(artistName);
            }
        };

            const addMusic = () => {
                if (newMusic.name.trim() && newMusic.artist.trim()) {
                    musicStore.addLocalMusic({ ...newMusic, listeners: 0 }); 
                    newMusic.name = '';
                    newMusic.artist = '';
                }
            };

            const removeMusic = (index) => {
                musicStore.removeMusic(index);
            };

        },
        data() {
            return {
                store: musicStore,userStore,
                artistName,
                newMusic,
                searchMusic,
                addMusic,
                removeMusic,
                musicList: musicStore.musicList, 
                loading: musicStore.loading, 
                error: musicStore.error, 
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>