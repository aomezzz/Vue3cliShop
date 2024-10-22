<template>
    <div class="menu-page">
      <h1>{{ msg }}</h1>
      <p>Explore our full range of delicious dishes:</p>
      
      <div class="menu">  
        <div class="menu-item" v-for="(item, index) in fullMenu" :key="index">
          <img :src="item.image" alt="Menu item image" class="menu-image">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <p class="price">{{ item.price }}</p>
          <button class="order-btn" @click="order(item)">Order Now</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuPage',
    props: {
      msg: {
        type: String,
        default: 'Our Menu'
      }
    },
    data() {
      return {
        fullMenu: [
          {
            name: 'Spaghetti Carbonara',
            description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
            price: '$12.99',
            image: require('@/assets/Carbonara.jpg') // Updated path
          },
          {
            name: 'Grilled Salmon',
            description: 'Fresh salmon fillet grilled to perfection, served with lemon butter sauce.',
            price: '$18.50',
            image: require('@/assets/GrilledSalmon.jpg') // Updated path
          },
          {
            name: 'Caesar Salad',
            description: 'Crispy romaine lettuce tossed in Caesar dressing, topped with parmesan and croutons.',
            price: '$9.99',
            image: require('@/assets/CaesarSalad.jpg') // Updated path
          },
          {
            name: 'Margherita Pizza',
            description: 'Traditional Italian pizza topped with fresh tomatoes, mozzarella, and basil.',
            price: '$15.99',
            image: require('@/assets/MargheritaPizza.jpg') // Updated path
          },
          {
            name: 'Tom Yum Soup',
            description: 'A hot and sour Thai soup with shrimp, lemongrass, and chili.',
            price: '$10.50',
            image: require('@/assets/TomYum.jpg') // Updated path
          },
          {
            name: 'Ribeye Steak',
            description: 'Juicy ribeye steak grilled to perfection, served with mashed potatoes.',
            price: '$25.00',
            image: require('@/assets/RibeyeSteak.jpg') // Updated path
          },
          {
            name: 'Sushi Platter',
            description: 'Assorted sushi rolls including salmon, tuna, and avocado.',
            price: '$22.50',
            image: require('@/assets/SushiPlatter.jpg') // Updated path
          },
          {
            name: 'Pad Thai',
            description: 'Classic Thai stir-fried noodles with shrimp, tofu, peanuts, and lime.',
            price: '$12.00',
            image: require('@/assets/PadThai.jpg') // Updated path
          },
          {
            name: 'Cheeseburger',
            description: 'Juicy beef burger with cheddar cheese, lettuce, tomato, and pickles.',
            price: '$11.99',
            image: require('@/assets/Cheeseburger.jpg') // Updated path
          },
          {
            name: 'Chocolate Cake',
            description: 'Rich and moist chocolate cake topped with ganache.',
            price: '$6.99',
            image: require('@/assets/ChocolateCake.jpg') // Updated path
          },
          {
            name: 'Pancakes',
            description: 'Fluffy pancakes served with maple syrup and fresh berries.',
            price: '$8.99',
            image: require('@/assets/Pancake.jpg') // New item
          },
          {
            name: 'Beef Tacos',
            description: 'Soft tacos filled with seasoned beef, lettuce, and cheese.',
            price: '$9.50',
            image: require('@/assets/BeefTacos.jpg') // New item
          }
        ]
      };
    },
    methods: {
      order(item) {
        alert(`You have ordered: ${item.name}`);
      }
    }
  }
  </script>
  
  <style scoped>
  .menu-page {
    text-align: center;
  }
  
  .menu {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  
  .menu-item {
    width: 250px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 20px;
    padding: 20px;
    text-align: center;
  }
  
  .menu-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  h2 {
    color: #d32f2f;
  }
  
  .price {
    font-weight: bold;
    color: #2c3e50;
    margin-top: 10px;
  }
  
  .order-btn {
    background-color: #d32f2f;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .order-btn:hover {
    background-color: #b71c1c;
  }
  </style>
  