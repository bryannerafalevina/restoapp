<!-- <template>
  <div>
    <h1>Add Menu</h1>
    <form @submit.prevent="addMenu">
      <label for="name">Name:</label>
      <input type="text" v-model="newMenu.name" required><br>
      <label for="price">Price:</label>
      <input type="number" v-model="newMenu.price" required><br>
      <label for="image">Image URL:</label>
      <input type="text" v-model="newMenu.image" required><br>
      <button type="submit">Add Menu</button>
    </form>

    <h1>Edit Menu</h1>
    <select v-model="selectedMenuId">
      <option disabled value="">Select a menu to edit</option>
      <option v-for="menu in menus" :key="menu.id" :value="menu.id">{{ menu.name }}</option>
    </select>
    <div v-if="selectedMenuId">
      <form @submit.prevent="editMenu">
        <label for="name">Name:</label>
        <input type="text" v-model="selectedMenu.name" required><br>
        <label for="price">Price:</label>
        <input type="number" v-model="selectedMenu.price" required><br>
        <label for="image">Image URL:</label>
        <input type="text" v-model="selectedMenu.image" required><br>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFoodmenuStore } from '@/stores/menu';

const menusStore = useFoodmenuStore();
const newMenu = ref({ name: '', price: 0, image: '' });
const selectedMenuId = ref('');
const selectedMenu = ref(null);

const addMenu = async () => {
  try {
    await menusStore.addMenu(newMenu.value);
    newMenu.value = { name: '', price: 0, image: '' };
  } catch (error) {
    console.error('Error adding menu:', error);
  }
};

const editMenu = async () => {
  if (!selectedMenuId.value || !selectedMenu.value) return;

  try {
    await menusStore.editMenu(selectedMenuId.value, selectedMenu.value);
  } catch (error) {
    console.error('Error editing menu:', error);
  }
};

// Fetch menus from JSON Server
const { menus } = menusStore;
</script> -->

<!-- 
<template>
  <div>
    <h1>Add Menu</h1>
    <form @submit.prevent="addMenu">
      <label for="name">Name:</label>
      <input type="text" v-model="newMenu.name" required><br>
      <label for="price">Price:</label>
      <input type="number" v-model="newMenu.price" required><br>
      <label for="image">Image URL:</label>
      <input type="text" v-model="newMenu.image" required><br>
      <button type="submit">Add Menu</button>
    </form>

    <h1>Edit Menu</h1>
    <select v-model="selectedMenuId" @change="selectMenu">
      <option disabled value="">Select a menu to edit</option>
      <option v-for="menu in menus" :key="menu.id" :value="menu.id">{{ menu.name }}</option>
    </select>
    <div v-if="selectedMenu">
      <form @submit.prevent="editMenu">
        <label for="name">Name:</label>
        <input type="text" v-model="selectedMenu.name" required><br>
        <label for="price">Price:</label>
        <input type="number" v-model="selectedMenu.price" required><br>
        <label for="image">Image URL:</label>
        <input type="text" v-model="selectedMenu.image" required><br>
        <button type="submit">Save Changes</button>
      </form>
      <img v-if="selectedMenu.image" :src="selectedMenu.image" alt="Menu Image">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFoodmenuStore } from '@/stores/menu';

const { items: menus, fetchItems, updateItem } = useFoodmenuStore();
const newMenu = ref({ name: '', price: 0, image: '' });
const selectedMenuId = ref('');
const selectedMenu = ref(null);

const addMenu = async () => {
  try {
    await addItem(newMenu.value);
    newMenu.value = { name: '', price: 0, image: '' };
  } catch (error) {
    console.error('Error adding menu:', error);
  }
};

const editMenu = async () => {
  if (!selectedMenu.value) return;

  try {
    await updateItem(selectedMenu.value);
    selectedMenuId.value = ''; // Reset selectedMenuId to trigger re-render of the select dropdown
  } catch (error) {
    console.error('Error editing menu:', error);
  }
};

const selectMenu = () => {
  selectedMenu.value = menus.find(menu => menu.id === selectedMenuId.value);
  selectedMenu.value = selected ? { ...selected } : null;
};

fetchItems();
</script> -->


<!-- <template>
  <div>
    <h1>Add Menu</h1>
    <form @submit.prevent="addMenu">
      <label for="name">Name:</label>
      <input type="text" v-model="newMenu.name" required><br>
      <label for="price">Price:</label>
      <input type="number" v-model="newMenu.price" required><br>
      <label for="image">Image URL:</label>
      <input type="text" v-model="newMenu.image" required><br>
      <button type="submit">Add Menu</button>
    </form>
    
    <h1>Edit Menu</h1>
    <select v-model="selectedMenuId" @change="selectMenu">
      <option disabled value="">Select a menu to edit</option>
      <option v-for="menu in menus" :key="menu.id" :value="menu.id">{{ menu.name }}</option>
    </select>
    <div v-if="selectedMenu">
      <form @submit.prevent="editMenu">
        <label for="name">Name:</label>
        <input type="text" v-model="selectedMenu.name" required><br>
        <label for="price">Price:</label>
        <input type="number" v-model="selectedMenu.price" required><br>
        <label for="image">Image URL:</label>
        <input type="text" v-model="selectedMenu.image" required><br>
        <button type="submit">Save Changes</button>
      </form>
      <img v-if="selectedMenu.image" :src="selectedMenu.image" alt="Menu Image">
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useFoodmenuStore } from '@/stores/menu';

const { items: menus, fetchItems, addItem, updateItem } = useFoodmenuStore();
const newMenu = ref({ name: '', price: 0, image: '' });
const selectedMenuId = ref('');
const selectedMenu = ref(null);

const addMenu = async () => {
  try {
    await addItem(newMenu.value);
    newMenu.value = { name: '', price: 0, image: '' };
    fetchItems();
  } catch (error) {
    console.error('Error adding menu:', error);
  }
};
const editMenu = async () => {
  if (!selectedMenu.value && menus.length > 0) {
    selectedMenu.value = { ...menus[0] }; // Select the first menu item if none is selected
  } else if (!selectedMenu.value) {
    return; // Return early if there are no menu items
  }

  try {
    await updateItem(selectedMenu.value);
    selectedMenuId.value = ''; // Reset selectedMenuId to trigger re-render of the select dropdown
  } catch (error) {
    console.error('Error editing menu:', error);
  }
};

const selectMenu = () => {
  selectedMenu.value = menus.find(menu => menu.id === selectedMenuId.value);
};

fetchItems();
</script> -->


<!-- <template>
  <div class="container p-5">
    <button @click="showAddModal = true">Add your order</button>
    <button @click="showEditNameModal = true">Edit Menu Item</button>

    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h1>Add Menu</h1>
        <form @submit.prevent="addMenu">
          <label for="name">Name:</label>
          <input type="text" v-model="newMenu.name" required><br>
          <label for="price">Price:</label>
          <input type="number" v-model="newMenu.price" required><br>
          <label for="image">Image URL:</label>
          <input type="text" v-model="newMenu.image" required><br>
          <button type="submit">Add Menu</button>
          <button @click="showAddModal = false">Close</button>
        </form>
      </div>
    </div>

 <div v-if="showEditNameModal" class="modal">
      <div class="modal-content">
        <h1>Edit Menu Name</h1>
        <form @submit.prevent="selectMenu">
          <label for="name">Name:</label>
          <input type="text" v-model="editMenuName" required><br>
          <button type="submit">Edit Menu</button>
          <button @click="showEditNameModal = false">Close</button>
        </form>
      </div>
    </div>

    <div v-if="showEditModal" class="modal">
      <div class="modal-content">
        <h1>Edit Menu</h1>
        <form @submit.prevent="editMenuItem">
          <label for="name">Name:</label>
          <input type="text" v-model="selectedMenu.name" required><br>
          <label for="price">Price:</label>
          <input type="number" v-model="selectedMenu.price" required><br>
          <label for="image">Image URL:</label>
          <input type="text" v-model="selectedMenu.image" required><br>
          <button type="submit">Save Changes</button>
          <button @click="showEditModal = false">Close</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFoodmenuStore } from '@/stores/menu';

const showAddModal = ref(false)
const showEditModal = ref(false)
const showEditNameModal = ref(false);
const editMenuName = ref('');
const { items: menus, fetchItems, addItem, updateItem } = useFoodmenuStore();
const newMenu = ref({ name: '', price: 0, image: '' });
const selectedMenu = ref(null);

const addMenu = async () => {
  try {
    await addItem(newMenu.value);
    newMenu.value = { name: '', price: 0, image: '' };
    fetchItems();
    showAddModal.value = false; // Close the modal after adding
  } catch (error) {
    console.error('Error adding menu:', error);
  }
};

const editMenuItem = async () => {
  if (!selectedMenu.value) return;

  try {
    await updateItem(selectedMenu.value);
    showEditModal.value = false; // Close the modal after editing
  } catch (error) {
    console.error('Error editing menu:', error);
  }
};

const selectMenu = () => {
  selectedMenu.value = menus.find(menu => menu.name === editMenuName.value);
  if (!selectedMenu.value) return;
  
  editMenuName.value = ''; // Reset editMenuName
  showEditModal.value = true; // Show the edit modal
};

const openEditModal = () => {
  showEditNameModal.value = false; // Close the menu name selection modal
  showEditModal.value = true; // Show the edit modal
};

const closeModal = () => {
  showAddModal.value = false;
  showEditModal.value = false;
  showEditNameModal.value = false;
};

fetchItems();
</script> -->
<!-- 
<style scoped>
.modal {
  display: block; /* Display by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style> -->

<template>
  <div class="space-after-edit-menu">
    <h1 class="text">Your Order</h1>
    <button @click="showAddModal = true" class="button-addyourorder">Add your order</button>
  <div v-for="menu in foodmenustore.items" :key="menu.id" class="added-menu">
    <h2>{{ menu.name }}</h2>
    <p>Price: ${{ menu.price }}</p>
    <img :src="menu.image" alt="Menu Image">
    <br>
    <button @click="selectMenu(menu)">Edit</button>
  </div>
  </div>
<div class="container p-5">
<!-- <div class="row">
  <div class="col"> -->
<!-- <button @click="showEditNameModal = true">Edit Menu Item</button> -->

<div v-if="showAddModal" class="modal">
  <div class="modal-content">
    <h1 style="text-align: center">Add Menu</h1>
    <div class="modal-body">
    <form @submit.prevent="addMenu" class="menu-form" style="margin-top: 20px;margin-left: 20px;" >
      <div class="input-group">
      <label for="name" style="display: flex;">Name:</label>
      <input type="text" v-model="newMenu.name" required placeholder="Enter menu name" ><br>
    </div>
    <div class="input-group">
      <label for="price" style="display: flex;">Price:</label>
      <input type="number" v-model="newMenu.price" required placeholder="Enter menu price"><br>
    </div>
    <div class="input-group">
      <label for="image" style="display: flex;">Image URL:</label>
      <input type="text" v-model="newMenu.image" required placeholder="Enter image URL"><br>
    </div>
    <div class="input-group" style="display: inline-flex;margin-top: 6px;" >
      <button type="submit" style="width: 255px;" >Add Menu</button>
      <button @click="showAddModal = false" style="width: 255px; margin-left: 15px;">Close</button>
    </div>
    </form>
    <div class="col-md-6" style="margin-left: 50px;">
        <img src="https://picsum.photos/200/300" alt="Image" class="img-fluid" style="width: 320px; height: 100%;">
    </div>
    </div>
  </div>
</div>

<!-- Modal for selecting menu name to edit -->
<div v-if="showEditNameModal" class="modal">
    <div class="modal-content">
      <h1>Edit Menu Name</h1>
      <form @submit.prevent="selectMenu">
        <label for="name">Name:</label>
        <input type="text" v-model="editMenuName" required><br>
        <button type="submit">Edit Menu</button>
        <button @click="showEditNameModal = false">Close</button>
      </form>
    </div>
  </div>

  <div v-if="showEditModal" class="modal">
  <div class="modal-content">
    <h1>Edit Menu</h1>
    <form @submit.prevent="editMenuItem">
      <label for="name">Name:</label>
      <input type="text" v-model="selectedMenu.name" required><br>
      <label for="price">Price:</label>
      <input type="number" v-model="selectedMenu.price" required><br>
      <label for="image">Image URL:</label>
      <input type="text" v-model="selectedMenu.image" required><br>
      <button type="submit">Save Changes</button>
      <button @click="showEditModal = false">Close</button>
    </form>
</div>
</div>
</div>
<footer class="footer">
      <p>&copy; 2024 Your Restaurant Name. All rights reserved.</p>
    </footer>
<!-- </div>
</div> -->

<!-- <div class="space-after-edit-menu">
<div v-for="menu in foodmenustore.items" :key="menu.id" class="added-menu">
  <h2>{{ menu.name }}</h2>
  <p>Price: ${{ menu.price }}</p>
  <img :src="menu.image" alt="Menu Image">
  <br>
  <button @click="selectMenu(menu)">Edit</button>
</div>
</div> -->

<!-- <div class="container-xxl py-5">
<div class="container" style="margin-top: 70px;">
  <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
    <h5 class="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
    <h1 class="mb-5">Most Popular Items</h1>
    <button type="button" class="btn btn-primary py-2 px-4" @click="showAddModal = true">Add Menu</button>
  </div>
  <hr>
  <div class="tab-class text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
    <div class="row g-4">
      <div class="col-lg-6" v-for="item in foodmenustore.items" :key="item.id">
        <div class="d-flex align-items-center">
          <img class="flex-shrink-0 img-fluid rounded" :src="item.image" alt="" style="width: 80px;">
          <div class="w-100 d-flex flex-column text-start ps-4">
            <h4 class="d-flex justify-content-between border-bottom pb-2">
              <h2>{{ item.name }}</h2>
              <h4 class="text-primary">Price: {{ item.price }}</h4>
            </h4>
            <div class="mt-3">
              <button @click="selectMenu(item)" class="btn btn-primary">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div> -->

</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useFoodmenuStore } from '@/stores/menu';

const showAddModal = ref(false)
const showEditModal = ref(false)
const showEditNameModal = ref(false);
const editMenuName = ref('');
const { items: menus, fetchItems, addItem, updateItem } = useFoodmenuStore();
const newMenu = ref({ name: '', price: '', image: '' });
const selectedMenu = ref(null);
const addedMenus = ref([]);
const STORAGE_KEY = 'foodmenu_items';
const foodmenustore = useFoodmenuStore()
const fetchMenus = async () => {
  try {
  await fetchItems();
  addedMenus.value = getItem();
  } catch (error) {
  console.error('Error fetching menus:', error);
  }
};

onMounted(async () => {
await fetchMenus();
});


// const addMenu = async () => {
//   try {
//     await addItem(newMenu.value);
//     const menu = { id: newId, ...newMenu.value };
//     addedMenus.value.push(menu);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(addedMenus.value)); // Store added menus in local storage
//     fetchItems();
//     newMenu.value = { name: '', price: 0, image: '' };
//     showAddModal.value = false;
//   } catch (error) {
//     console.error('Error adding menu:', error);
//   }
// };

const addMenu = async () => {
  try {
    await addItem(newMenu.value);
    const menu = { ...newMenu.value };
    addedMenus.value.push(menu);
    newMenu.value = { name: '', price: '', image: '' };
    showAddModal.value = false;
  } catch (error) {
    console.error('Error adding menu:', error);
  }
};
// const editMenuItem = async () => {
//   if (!selectedMenu.value) return;

//   try {
//     await updateItem(selectedMenu.value);
//     showEditModal.value = false; // Close the modal after editing
//   } catch (error) {
//     console.error('Error editing menu:', error);
//   }
// };


// const editMenuItem = async () => {
//   if (!selectedMenu.value) return;

//   try {
//     await updateItem(selectedMenu.value);
//     showEditModal.value = false; // Close the modal after editing
//   } catch (error) {
//     console.error('Error editing menu:', error);
//   }
// };

const editMenuItem = async () => {
if (!selectedMenu.value) return;

try {
await updateItem(selectedMenu.value);
showEditModal.value = false; // Close the modal after editing
} catch (error) {
console.error('Error editing menu:', error);
}
};


const selectMenu = (menu) => {
selectedMenu.value = menu;
showEditModal.value = true; // Show the edit modal
};

const getItem = () => {
const item = localStorage.getItem(STORAGE_KEY);
return item ? JSON.parse(item) : [];
};

fetchItems();


</script>

<style scoped>
.menu-form {
  margin-right: 30px;

}

/* Styles for modals and overlay */
.modal {
display: block; /* Display by default */
position: fixed; /* Stay in place */
z-index: 1000; /* Sit on top */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
background-color: #9BABB8;
margin: 15% auto; /* 15% from the top and centered */
padding: 20px;
border: 1px solid #888;
width: 80%; /* Could be more or less, depending on screen size */
z-index: 1001; /* Sit on top of the modal */
}

.modal-body{
  display: inline-flex;
  background-color: #f8f9fa;
  margin-top: 10px;
  justify-content: space-around;
}
.close {
color: #aaa;
width: 200px;
float: right;
font-size: 28px;
font-weight: bold;
}
.close:hover,
.close:focus {
color: black;
text-decoration: none;
cursor: pointer;
}
/* Styles for added menus */
.added-menu {
margin-bottom: 5px; /* Reduced margin */
}

.added-menu img {
max-width: 100%;
}

.button-addyourorder{
height: 50px;
background-color: #B4B4B8;
margin-bottom: 20px;
width: 50%; /* Could be more or less, depending on screen size */
margin-top: 5px;
}

.text{
margin-top: 80px;
}

  .input-group {
    margin-bottom: 15px;
  }

  .input-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .input-group input {
    width: 530px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .input-group button {
    padding: 8px 15px;
    background-color: #607274;
    border: none;
    border-radius: 4px;
    margin-right: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .input-group button:hover {
    background-color: #C6DCBA;
  }

  .input-group button:last-child {
    background-color: #607274;
  }

  .input-group button:last-child:hover {
    background-color: #C6DCBA;
  }

  .footer {
  background-color: rgba(51, 51, 51, 0.8); 
  color: white;
  text-align: center;
  padding: 0.5rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

</style>
