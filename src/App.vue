<template>
  <div id="app">
    <router-view />
    <Header @navigate="navigate" /> <!-- Pass navigate method to Header -->
    <NavBar @navigate="navigate" /> <!-- Pass navigate method to NavBar -->
    <component :is="currentPage" /> <!-- Dynamically render the current page -->
    <Footer />
  </div>
</template>

<script>
import HomePage from './components/Home.vue'; // Import HomePage
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';
import Aboutus from './components/Aboutus.vue';
import Contact from './components/Contact.vue';
import UserLogin from './components/Login.vue';
import UserSignin from './components/Signin.vue';
import AddressPage from './components/Address.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    Header,
    Footer,
    Menu,
    Aboutus,
    Contact,
    UserLogin,
    UserSignin,
    AddressPage
  },
  data() {
    return {
      currentPage: 'HomePage' // Set default page to HomePage
    };
  },
  methods: {
    navigate(page) {
      this.currentPage = page; // Update currentPage based on navigation
    }
  }
}
</script>

<style>
/* Reset margin and padding for html and body to avoid any unwanted space */
html, body {
  margin: 0;
  padding: 0;
  height: 100%; /* Ensure body takes full height */
}

/* Style for the main application container */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%; /* Ensure app takes full height */
  box-sizing: border-box; /* Include padding and borders in element's total width and height */
}
</style>
