<template>
  <div class="menu">
    <h1>Menu</h1>

    <div v-for="(section, index) in menuSections" :key="index" class="menu-section">
      <h2>{{ section.title }}</h2>

      <div v-for="(item, i) in section.items" :key="i" class="menu-item">
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p>Price: ${{ item.price.toFixed(2) }}</p>
          <img :src="item.photo" alt="Item Photo" class="item-photo" style="width: 150px;"> <!-- Bind item photo to src attribute -->
        </div>  

        <!-- <div class="item-controls">
          <button @click="addToOrder(section.title, item)">+</button>
          <span>{{ getOrderQuantity(section.title, item) }}</span>
          <button @click="subtractFromOrder(section.title, item)">-</button>
        </div> -->
      </div>
    </div>
    <ul>
      <li v-for="(quantity, itemName) in order" :key="itemName">
        {{ itemName }}: {{ quantity }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import appetizer1 from '@/assets/VegetableSamosa.jpg';
import appetizer2 from '@/assets/BuffaloCauliflowerWings.jpg';
import maincourse1 from '@/assets/fishandchips.jpg';
import maincourse2 from '@/assets/MolassesSoyGlazedSalmonandVegetablesRecipe.jpg';
import dessert1 from '@/assets/strawberry.jpg';
import dessert2 from '@/assets/coklat.jpg';
export default {
  name: 'Menu',
  data() {
    return {
      menuSections: [
        {
          title: 'Appetizers',
          items: [
            { name: 'Samosa', description: 'Vegetable', price: Math.random() * 100, photo: appetizer1},
            { name: 'Buffalo Cauliflower Wings', description: 'BBQ', price: Math.random() * 90, photo: appetizer2},
            // Add more appetizers as needed
          ],
        },
        {
          title: 'Main Courses',
          items: [
            { name: 'Fish and Chips', description: 'ala Fish & Co', price: Math.random() * 100, photo: maincourse1 },
            { name: 'Molasses-Soy Glazed ', description: ' Salmon and Vegetables ', price: Math.random() * 80, photo: maincourse2 },
            // Add more main courses as needed
          ],
        },
        {
          title: 'Desserts',
          items: [
            { name: 'Strawberry Dessert', description: 'Strawberry', price: Math.random() * 80, photo: dessert1 },
            { name: 'Chocolate Dessert', description: 'Chocolate', price: Math.random() * 90, photo: dessert2 },
            // Add more desserts as needed
          ],
        },
      ],
      order: {},
    };
  },
  methods: {
    addToOrder(sectionTitle, item) {
      const key = `${sectionTitle}-${item.name}`;
      this.order[key] = (this.order[key] || 0) + 1;
    },
    subtractFromOrder(sectionTitle, item) {
      const key = `${sectionTitle}-${item.name}`;
      if (this.order[key] > 0) {
        this.order[key]--;
        if (this.order[key] === 0) {
          delete this.order[key];
        }
      }
    },
    getOrderQuantity(sectionTitle, item) {
      const key = `${sectionTitle}-${item.name}`;
      return this.order[key] || 0;
    },
  },
};
</script>

<style scoped>
/* Add your custom styles for the Menu component here */
.menu {
  max-width: 1300px;
  margin-top: 70px;
  margin-right: 500px;
}

.menu-section {
  margin-bottom: 20px;
}

.menu-item {
  display: flex;
  width: 300px;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  /* padding: 10px 0; */
}
/* .item-controls {
  display: flex;
  align-items: center;
} */

button {
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  margin-left: 5px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

</style>