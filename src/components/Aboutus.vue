<template>
    <section id="about" class="section">
      <h2>About Us</h2>
      <div class="about-content">
        <img :src="require('@/assets/restaurant.jpg')" alt="Restaurant interior" class="about-image" />
        <div class="text-content">
          <p>
            Welcome to Chutip Restaurant! We pride ourselves on serving fresh and delicious dishes inspired by both local and international flavors. 
            Our chefs use only the finest ingredients, ensuring that each plate is not only a meal but an experience.
          </p>
          <p>
            Whether you're celebrating a special occasion, enjoying a casual meal with friends, or looking for a place to unwind, 
            our welcoming atmosphere and friendly staff will make your visit memorable. Join us for an unforgettable dining experience.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  }
  </script>
  
  <style scoped>
  .section {
    padding: 40px;
    background-color: #f9f9f9; /* Light background for contrast */
    text-align: center; /* Center align text */
  }
  
  h2 {
    color: #d32f2f; /* Main theme color */
    margin-bottom: 20px; /* Space below the heading */
  }
  
  .about-content {
    display: flex; /* Use flexbox for layout */
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items */
    max-width: 800px; /* Limit max width */
    margin: 0 auto; /* Center the content */
  }
  
  .about-image {
    width: 100%; /* Responsive image */
    height: auto; /* Maintain aspect ratio */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    margin-bottom: 20px; /* Space below the image */
  }
  
  .text-content {
    background-color: #ffffff; /* White background for text */
    padding: 20px; /* Padding inside the text block */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Slight shadow for depth */
  }
  
  .text-content p {
    color: #333; /* Darker text color for readability */
    line-height: 1.6; /* Improve readability */
    margin: 10px 0; /* Space between paragraphs */
  }
  </style>
  