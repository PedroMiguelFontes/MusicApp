<template>
    <div>
        <h1>Create an account</h1>
        <form v-on:submit="">
            <label for="userName">Username:</label>
            <input type="text" id="userName"><br>
            <label for="password">Password:</label>
            <input type="text" id="password"><br>
            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>