import { defineStore } from "pinia";
export const shopStore = defineStore('shop', {
    state: () => ({items:[{name:'Item 1', desc:'Test',qtd:3}]}),
    actions: {
        addItem(name,desc,qtd) {

            if (name==''||desc==''||qtd=='') {
                console.log('Item information required')
            } else {
                this.items.push({name,desc,qtd})
                console.log('Item added')
            }
        }
    }
})