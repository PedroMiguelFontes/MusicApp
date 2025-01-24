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
    <button v-if="isAdmin">Adicionar Produto</button>
</template>

<script>
    import { shopStore } from '@/stores/shop';
    import { userStore } from '@/stores/users';
    export default {
        data() {
        return {
            newProduct: {
            name: '',
            desc: '',
            qtd: 0
        },
        showAddProductForm: false
    }
    },
    computed: {
        store() {
            return shopStore();
        },
        isAdmin() {
            const store = userStore();
            return store.loggedUser && store.loggedUser.role === 'admin';
        }
    },
    methods: {
    buyItem(index) {
        const item = this.store.items[index];
        if (item.qtd > 0) {
            item.qtd--;
            console.log(`Bought 1 unit of ${item.name}`);
        } else {
            console.log(`No more ${item.name} available`);
        }
    },
    addProduct() {
      this.store.addItem(this.newProduct.name, this.newProduct.desc, this.newProduct.qtd);
      this.newProduct = { name: '', desc: '', qtd: 0 }; 
      this.showAddProductForm = false; 
    }
  }
    }
</script>

<style lang="scss" scoped>

</style>