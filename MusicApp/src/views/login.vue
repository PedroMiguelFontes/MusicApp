<template>
    <div>
        <h1>Login</h1>
        <form v-on:submit="userStore.login"></form>
    </div>
</template>

<script>
    import { userStore } from '@/stores/musics';
    export default {
        data() {
            return {
                store: userStore
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>