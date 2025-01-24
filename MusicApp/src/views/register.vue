<template>
    <div>
        <h1>Create an account</h1>
        <form v-on:submit="register">
            <label for="userName">Username:</label>
            <input type="text" id="userName"><br>
            <label for="password">Password:</label>
            <input type="text" id="password"><br>
            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script>
    import { userStore } from '@/stores/users';

    export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        register() {
            const store = userStore();
            store.register(this.username, this.password);
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>