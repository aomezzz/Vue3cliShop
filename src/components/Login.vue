<template>
  <div class="login-page">
    <div class="login-container">
      <h1>Log In</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="login-btn">Log In</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  mounted() {
    if (this.isLoggedIn()) {
      this.$router.push({ name: 'Home' }); // Redirect to Home if logged in
    }
  },
  methods: {
    isLoggedIn() {
      return !!localStorage.getItem('user'); // Check if user is logged in
    },
    handleLogin() {
      this.errorMessage = ''; // Reset error message
      
      // Basic validation
      if (!this.username || !this.password) {
        this.errorMessage = 'Please enter your username and password.';
        return;
      }

      // Log-in logic goes here (e.g., API call)
      alert(`Logged in as: ${this.username}`);
      
      // Save user to local storage
      localStorage.setItem('user', this.username); // Save user in Local Storage

      // Reset fields after successful login
      this.username = '';
      this.password = '';

      // Redirect to Home
      this.$router.push({ name: 'Home' });
    },
    navigateTo(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full viewport height */
  background-color: #f7f7f7; /* Light background color */
}

.login-container {
  max-width: 400px;
  width: 100%; /* Full width */
  padding: 20px;
  background-color: #ffffff; /* White background */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* Soft shadow */
}

h1 {
  color: #d32f2f; /* Main theme color */
  margin-bottom: 20px; /* Space below heading */
  text-align: center; /* Center the heading */
}

.form-group {
  margin-bottom: 15px; /* Space between fields */
  text-align: center; /* Center align the fields */
}

label {
  display: block; /* Block display for labels */
  margin-bottom: 5px; /* Space below the label */
  color: #333; /* Dark color for labels */
}

input[type="text"],
input[type="password"] {
  width: 80%; /* ปรับความกว้างให้สั้นลง */
  padding: 10px; /* Padding inside inputs */
  border: 1px solid #ccc; /* Light border */
  border-radius: 5px; /* Rounded corners */
  font-size: 16px; /* Increased font size */
  box-sizing: border-box; /* Include padding and border in width */
}

input:focus {
  border-color: #d32f2f; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

.login-btn {
  background-color: #d32f2f; /* Button color */
  color: white; /* Text color */
  border: none; /* No border */
  padding: 10px; /* Button padding */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor */
  font-size: 16px; /* Font size */
  width: 100%; /* Full width */
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition */
}

.login-btn:hover {
  background-color: #b71c1c; /* Darker shade on hover */
  transform: scale(1.05); /* Slightly enlarge button */
}

.error {
  color: red; /* Style for error messages */
  margin-top: 10px; /* Space above error message */
  text-align: center; /* Center error message */
}
</style>
