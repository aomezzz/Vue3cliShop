<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <p>If you have any questions or inquiries, feel free to reach out to us using the information below:</p>

    <div class="contact-info">
      <p><strong>Location:</strong> 123 Food Street, Flavor Town</p>
      <p><strong>Phone:</strong> (+66) 98-406-6454</p>
      <p><strong>Email:</strong> aomezzz.aomsin@gmail.com</p>
    </div>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Your Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="message">Comment</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Prepare email data
      const templateParams = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      // Send email via EmailJS
      emailjs.send('service_jef26m5', 'template_oiv7038', templateParams, '7F5mgOM1iccIAOA_1')
        .then(() => {
          alert(`Thank you, ${this.name}. Your message has been sent!`);
          // Clear the form
          this.name = '';
          this.email = '';
          this.message = '';
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          alert('An error occurred while sending the message.');
        });
    }
  }
}
</script>

<style scoped>
/* Styling remains the same */
.contact-page {
  text-align: center;
  padding: 20px;
}

.contact-info {
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, textarea {
  width: 50%; /* Set the width to 50% for shorter fields */
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

textarea {
  resize: vertical;
  min-height: 80px; /* Reduce minimum height for textarea */
}

.submit-btn {
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #b71c1c;
}
</style>
