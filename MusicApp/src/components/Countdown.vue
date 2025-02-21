<template>
    <div class="countdown">
      <h2>Countdown to Event</h2>
      <p>{{ timeLeft }}</p>
    </div>
  </template>
  <script>
  export default {
    name: 'Countdown',
    data() {
      return {
        timeLeft: '',
      };
    },
    mounted() {
      this.startCountdown();
    },
    methods: {
      startCountdown() {
        const eventDate = new Date('2023-12-31T00:00:00');
        setInterval(() => {
          const now = new Date();
          const timeDiff = eventDate - now;
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
          this.timeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
      },
    },
  };
  </script>
  <style scoped>
  .countdown {
    text-align: center;
    margin: 2rem 0;
  }
  </style>