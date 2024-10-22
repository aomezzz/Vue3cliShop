<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>Below are some of our recommended dishes</p>
    
    <div class="menu">
      <div class="menu-item" v-for="(item, index) in recommendedMenu" :key="index">
        <img :src="item.image" alt="Menu item image" class="menu-image">
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <p class="price">{{ item.price }}</p>
        <button @click="orderItem(item)">Order</button> <!-- Order button -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: {
      type: String,
      default: 'Recommended Menu'
    }
  },
  data() {
    return {
      recommendedMenu: [
        {
          name: 'Spaghetti Carbonara',
          description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
          price: '$12.99',
          image: require('@/assets/Carbonara.jpg') // Ensure correct path
        },
        {
          name: 'Grilled Salmon',
          description: 'Fresh salmon fillet grilled to perfection, served with lemon butter sauce.',
          price: '$18.50',
          image: require('@/assets/GrilledSalmon.jpg') // Ensure correct path
        },
        {
          name: 'Caesar Salad',
          description: 'Crispy romaine lettuce tossed in Caesar dressing, topped with parmesan and croutons.',
          price: '$9.99',
          image: require('@/assets/CaesarSalad.jpg') // Ensure correct path
        },
        {
            name: 'Ribeye Steak',
            description: 'Juicy ribeye steak grilled to perfection, served with mashed potatoes.',
            price: '$25.00',
            image: require('@/assets/RibeyeSteak.jpg') // Updated path
        },
      ]
    };
  },
  methods: {
    orderItem(item) {
      // Handle the ordering logic here, e.g., display a message or add to cart
      alert(`You have ordered: ${item.name}`);
    }
  }
}
</script>

<style scoped>
.home {
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

button {
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #c62828;
}
</style>
