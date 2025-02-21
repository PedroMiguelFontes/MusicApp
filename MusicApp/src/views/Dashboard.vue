<template>
    <div>
      <Header />
      <h1>Dashboard</h1>
      <AddMusic />
      <TicketSystem />
      <ExclusiveAccess />
      <LineUp />
      <Feedback />
      <Networking />
      <Merchandising />
      <Notifications />
      <VolunteerForm />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import AddMusic from '@/components/AddMusic.vue';
  import TicketSystem from '@/components/TicketSystem.vue';
  import ExclusiveAccess from '@/components/ExclusiveAccess.vue';
  import LineUp from '@/components/Lineup.vue';
  import Feedback from '@/components/Feedback.vue';
  import Networking from '@/components/Networking.vue';
  import Merchandising from '@/components/Merchandising.vue';
  import Notifications from '@/components/Notifications.vue';
  import VolunteerForm from '@/components/VolunteerForm.vue';
  
  export default {
    name: 'Dashboard',
    components: {
      Header,
      Footer,
      AddMusic,
      TicketSystem,
      ExclusiveAccess,
      LineUp,
      Feedback,
      Networking,
      Merchandising,
      Notifications,
      VolunteerForm,
    },
  };
  </script>