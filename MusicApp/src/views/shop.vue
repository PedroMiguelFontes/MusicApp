<template>
    <div>
        <h1>Shop</h1>
        <table>
            <th>
                <td>Nome</td>
                <td>Descrição</td>
                <td>Qtd</td>
                <td>Ação</td>
            </th>
            <tr v-for="item in items">
                <td>{{ item.name }}</td>
                <td>{{ item.desc }}</td>
                <td>{{ item.qtd }}</td>
                <td><button v-on:click="shopStore.buy()">Comprar</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
    import { shopStore } from '@/stores/shop';
    export default {
        data() {
            return {
                store: shopStore
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>