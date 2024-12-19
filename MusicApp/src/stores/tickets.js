import { defineStore } from 'pinia'

export const ticketsStore = defineStore('tickets', {
  state: () => ({tickets:{normal:100,premium:100}}),
  actions: {
    buyNormal() {
        this.tickets.normal--
    },
    buyPremium() {
        this.tickets.premium--
    }
  }
})