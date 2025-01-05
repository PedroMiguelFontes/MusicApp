<template>
    <div>
        <table>
            <th>
                <td>Name</td>
                <td>Author</td>
                <td>Release year</td>
            </th>
            <tr v-for="music in musics">
                <td>{{ music.name }}</td>
                <td>{{ music.author }}</td>
                <td>{{ music.releaseyear }}</td>
            </tr>
        </table>
        <button v-if="userStore.loggedUser.role=='Admin'" v-on:click="musicStore.addMusic()">Add music</button>
    </div>
</template>

<script>
    import { musicStore } from '@/stores/musics';
    import { userStore } from '@/stores/users';
    export default {
        data() {
            return {
                store: musicStore,userStore
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>