<template>
    <header>
      <h1>MusicApp</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
      </nav>
    </header>
  </template>
  <script>
  export default {
    name: 'Header',
  };
  </script>
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
  }
  nav a {
    margin: 0 1rem;
    color: #fff;
    text-decoration: none;
  }
  </style>