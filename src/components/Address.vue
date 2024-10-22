<template>
    <div class="address-form">
      <h1>Address Form</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="street">Address:</label>
          <input type="text" id="street" v-model="street" required />
        </div>
        <div class="form-group">
          <label for="city">City:</label>
          <input type="text" id="city" v-model="city" required />
        </div>
        <div class="form-group">
          <label for="state">State:</label>
          <input type="text" id="state" v-model="state" required />
        </div>
        <div class="form-group">
          <label for="zip">ZIP Code:</label>
          <input type="text" id="zip" v-model="zip" required />
        </div>
        <button type="submit" class="submit-btn">Submit</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddressForm',
    data() {
      return {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        errorMessage: '',
      };
    },
    methods: {
      handleSubmit() {
        this.errorMessage = ''; // Reset error message
        
        // Basic validation
        if (!this.name || !this.street || !this.city || !this.state || !this.zip) {
          this.errorMessage = 'Please fill in all fields.';
          return;
        }
  
        // Submit logic goes here (e.g., API call)
        alert(`Address submitted:\n${this.name}\n${this.street}, ${this.city}, ${this.state}, ${this.zip}`);
        
        // Reset fields after submission
        this.name = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .address-form {
    max-width: 500px;
    margin: 40px auto; /* Center the form */
    padding: 30px;
    background-color: #ffffff; /* White background */
    border-radius: 12px; /* Rounded corners */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* Soft shadow */
  }
  
  h1 {
    color: #d32f2f; /* Red text */
    text-align: center; /* Center the heading */
    font-family: 'Arial', sans-serif; /* Custom font */
    font-size: 28px; /* Larger font size */
    margin-bottom: 20px; /* Space below heading */
  }
  
  .form-group {
    margin-bottom: 20px; /* Increased space between fields */
  }
  
  label {
    display: block; /* Block display for labels */
    margin-bottom: 5px; /* Space below the label */
    color: #333; /* Dark color for labels */
    font-weight: bold; /* Bold labels */
  }
  
  input[type="text"] {
    width: 100%; /* Full width */
    max-width: 400px; /* Limit the width */
    padding: 10px; /* Reduced padding */
    border: 2px solid #d32f2f; /* Red border */
    border-radius: 5px; /* Rounded corners */
    font-size: 16px; /* Increased font size */
    transition: border-color 0.3s; /* Smooth transition for border color */
  }
  
  input:focus {
    border-color: #b71c1c; /* Darker red on focus */
    outline: none; /* Remove default outline */
  }
  
  .submit-btn {
    background-color: #d32f2f; /* Red button color */
    color: white; /* Text color */
    border: none; /* No border */
    padding: 12px; /* Button padding */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Pointer cursor */
    font-size: 18px; /* Larger font size */
    width: 100%; /* Full width */
    transition: background-color 0.3s, transform 0.3s; /* Smooth transition */
  }
  
  .submit-btn:hover {
    background-color: #b71c1c; /* Darker shade on hover */
    transform: scale(1.05); /* Slightly enlarge button */
  }
  
  .error {
    color: #d32f2f; /* Red color for error messages */
    margin-top: 10px; /* Space above error message */
    text-align: center; /* Center error message */
  }
  </style>
  