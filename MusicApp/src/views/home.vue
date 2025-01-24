<template>
    <div>
        <h1>Welcome to MusicApp, {{ userStore.loggedUser.name }}!</h1>
        <ul>
            <li>Store</li>
            <li>MusicList</li>
            <li>Tickets</li>
            <li></li>
        </ul>
    </div>
</template>

<script>
    import { userStore } from '@/stores/users';
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