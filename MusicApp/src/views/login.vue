<template>
    <div>
        <h1>Login</h1>
        <form v-on:submit="userStore.login()">
            <label for="userName">Username:</label>
            <input type="text" id="userName" v-model="name"><br>
            <label for="password">Password:</label>
            <input type="text" id="password" v-model="pass"><br>
            <input type="submit" value="Login">
        </form>
        <a href="/register">Create a new account</a>
    </div>
</template>

<script>
    import router from '@/router/index';
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