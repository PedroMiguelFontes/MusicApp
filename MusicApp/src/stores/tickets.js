import { defineStore } from 'pinia';

export const ticketsStore = defineStore('tickets', {
  state: () => ({
    tickets: { normal: 100, premium: 100 }
  }),
  actions: {
    buyNormal() {
      if (this.tickets.normal > 0) {
        this.tickets.normal--;
      } else {
        console.log('No more normal tickets available');
      }
    },
    buyPremium() {
      if (this.tickets.premium > 0) {
        this.tickets.premium--;
      } else {
        console.log('No more premium tickets available');
      }
    },
    getTickets(type, number) {
      if (type === 'normal') {
        this.tickets.normal += number;
      } else if (type === 'premium') {
        this.tickets.premium += number;
      }
    }
  }
});