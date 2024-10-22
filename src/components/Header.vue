<template>
  <header class="header">
    <router-link to="/"> <!-- Make logo clickable to go to home -->
      <img alt="Restaurant Logo" :src="logoSrc" class="logo">
    </router-link>
    <nav>
      <div class="button-container"> <!-- Add a container to center buttons -->
        <button @click="navigateTo('HomePage')">Home</button>
        <button @click="navigateTo('Menu')">Menu</button>
        <button @click="navigateTo('Contact')">Contact</button>
        <button @click="navigateTo('AddressPage')">Delivery</button>
        <button @click="navigateTo('Aboutus')">About us</button>
        <button @click="navigateTo('UserLogin')">Login</button>
        <button @click="navigateTo('UserSignin')">Sign in</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
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
/* Ensure there's no margin or padding around the body and html */
html, body {
  margin: 0;
  padding: 0;
}

.header {
  background-color: #d32f2f;
  padding: 20px;
  display: flex; /* Use flexbox for layout */
  align-items: center; /* Center items vertically */
  justify-content: space-between; /* Distribute space between logo and nav */
  color: white;
  width: 100vw; /* Ensure the header takes the full width of the viewport */
  box-sizing: border-box; /* Include padding in width calculation */
  margin: 0; /* Remove any default margin */
}

.logo {
  width: 100px;
  height: auto;
}

nav {
  flex-grow: 1; /* Allow nav to grow and take space between logo and buttons */
  display: flex; /* Use flexbox for nav */
  justify-content: center; /* Center the button container */
}

.button-container {
  display: flex; /* Use flexbox for button alignment */
  gap: 10px; /* Space between buttons */
}

button {
  background-color: #ffffff;
  color: #d32f2f;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for color change */
}

button:hover {
  background-color: #f5f5f5; /* Change background color on hover */
  color: #b71c1c; /* Darken text color on hover */
}
</style>
