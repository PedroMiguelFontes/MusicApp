<template>
    <div>
        <h1>Ingressos</h1>
        <button v-on:click="ticketsStore.buyNormal()">Comprar bilhete normal</button>
        <button v-on:click="ticketsStore.buyPremium()">Comprar bilhete premium</button>
    </div>
</template>

<script>
    import { ticketsStore } from '@/stores/tickets';
    export default {
        data() {
            return {
                store: ticketsStore
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>