<template>
    <header class="header">
      <router-link to="/"> <!-- Make logo clickable to go to home -->
        <img alt="Restaurant Logo" :src="logoSrc" class="logo">
      </router-link>
      <nav>
        <div class="button-container"> <!-- Add a container to center buttons -->
          <li @click="navigateTo('HomePage')">Home</li>
          <li @click="navigateTo('Menu')">Menu</li>
          <li @click="navigateTo('Contact')">Contact</li>
          <li @click="navigateTo('AddressPage')">Delivery</li>
          <li @click="navigateTo('Aboutus')">About us</li>
          <li @click="navigateTo('UserLogin')">Login</li>
          <li @click="navigateTo('UserSignin')">Sign in</li>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    data() {
      return {
        logoSrc: require('@/assets/LOGO.jpg') // Ensure correct path to the logo
      };
    },
    methods: {
      navigateTo(page) {
        this.$emit('navigate', page); // Emit navigate event with the page name
      }
    }
  }
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  