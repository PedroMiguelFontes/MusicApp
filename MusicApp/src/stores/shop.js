import { defineStore } from 'pinia';

export const shopStore = defineStore('shop', {
  state: () => ({
    items: [{ name: 'Item 1', desc: 'Test', qtd: 3 }]
  }),
  actions: {
    addItem(name, desc, qtd) {
      if (!name || !desc || qtd <= 0) {
        console.log('Item information required and quantity must be greater than 0');
      } else {
        this.items.push({ name, desc, qtd });
        console.log('Item added');
      }
    },
    buyItem(index) {
      if (this.items[index].qtd > 0) {
        this.items[index].qtd--;
        console.log(`Bought 1 unit of ${this.items[index].name}`);
      } else {
        console.log(`No more ${this.items[index].name} available`);
      }
    },
    removeItem(index) {
      if (index >= 0 && index < this.items.length) {
        this.items.splice(index, 1);
        console.log('Item removed');
      } else {
        console.log('Invalid item index');
      }
    }
  }
});