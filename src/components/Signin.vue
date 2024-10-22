<template>
  <div class="signin-page">
    <h1>Sign In</h1>
    <form @submit.prevent="handleSignin">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>
      <div class="form-group">
        <label for="profile">Profile:</label>
        <input type="file" id="profile" @change="handleFileUpload" accept="image/*" required />
        <p v-if="profileImage" class="image-preview">Image Preview:</p>
        <img v-if="profileImage" :src="profileImage" class="preview-image" />
      </div>
      <button type="submit" class="signin-btn">Sign In</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SigninPage',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      profileImage: null,
      errorMessage: ''
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileImage = e.target.result; // Set image preview
        };
        reader.readAsDataURL(file);
      } else {
        this.errorMessage = 'Please upload a valid image file.';
      }
    },
    handleSignin() {
      this.errorMessage = ''; // Reset error message

      // Basic validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.errorMessage = 'Please enter a valid email address.';
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match.';
        return;
      }

      // Sign-in logic goes here (e.g., API call)
      alert(`Signed in as: ${this.username}, Email: ${this.email}, Profile Image: ${this.profileImage ? 'Uploaded' : 'Not Uploaded'}`);
      
      // Reset fields after successful sign-in
      this.username = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      this.profileImage = null;
    }
  }
}
</script>

<style scoped>
.signin-page {
  max-width: 400px;
  margin: 40px auto; /* Centered on the page */
  padding: 20px; /* Padding around the form */
  border: 1px solid #ddd; /* Light border */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* Soft shadow */
  background-color: #fff; /* White background */
}

h1 {
  color: #d32f2f; /* Main theme color */
  margin-bottom: 30px; /* Space below heading */
}

.form-group {
  margin-bottom: 20px; /* Space between fields */
  text-align: left; /* Align labels and inputs to the left */
}

label {
  display: block; /* Block display for labels */
  margin-bottom: 8px; /* Space below the label */
  color: #333; /* Dark color for labels */
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="file"] {
  width: calc(100% - 20px); /* Full width with padding */
  padding: 12px; /* Padding inside inputs */
  border: 1px solid #ccc; /* Light border */
  border-radius: 5px; /* Rounded corners */
  font-size: 16px; /* Increased font size */
}

input[type="file"] {
  margin-top: 10px; /* Space above file input */
}

input:focus {
  border-color: #d32f2f; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

.signin-btn {
  background-color: #d32f2f; /* Button color */
  color: white; /* Text color */
  border: none; /* No border */
  padding: 12px 20px; /* Button padding */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor */
  font-size: 16px; /* Font size */
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition */
}

.signin-btn:hover {
  background-color: #b71c1c; /* Darker shade on hover */
  transform: scale(1.05); /* Slightly enlarge button */
}

.error {
  color: red; /* Style for error messages */
  margin-top: 10px; /* Space above error message */
}

.image-preview {
  margin-top: 10px; /* Space above image preview */
}

.preview-image {
  max-width: 100%; /* Responsive image */
  height: auto; /* Maintain aspect ratio */
  margin-top: 5px; /* Space above the image */
  border-radius: 5px; /* Rounded corners for image */
}
</style>
