import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Menu from '../components/Menu.vue';
import About from '../components/Aboutus.vue';
import Contact from '../components/Contact.vue';
import Login from '../components/Login.vue'; // Ensure correct path and name
import Signin from '../components/Signin.vue';
import Address from '../components/Address.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/signin', name: 'Signin', component: Signin },
  { path: '/login', name: 'Login', component: Login },
  { path: '/Address', name: 'Address', component: Address },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
