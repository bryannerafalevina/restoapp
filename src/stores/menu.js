import { ref } from 'vue';
import { defineStore } from 'pinia';
const STORAGE_KEY = 'foodmenu_items';

export const useFoodmenuStore = defineStore('foodmenu', {
  state: () => ({
    items: [],
  }),
  actions: {
    async fetchItems() {
      try {
        const response = await fetch('http://localhost:3000/dishes');
        const data = await response.json();
        this.items = data;
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    async addItem(newItem) {
      try {
        const maxId = Math.max(...this.items.map(item => item.id), 0);
        const newId = maxId + 1;
        newItem.id = `${newId}`;
        const response = await fetch('http://localhost:3000/dishes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newItem),
        });

        const addedItem = await response.json();
        this.items.push(addedItem);
      } catch (error) {
        console.error('Error adding item:', error);
      }
    },
    async updateItem(updatedItem) {
      try {
        const response = await fetch(`http://localhost:3000/dishes/${updatedItem.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedItem),
        });

        if (!response.ok) {
          throw new Error('Failed to update item');
        }
        const index = this.items.findIndex((item) => item.id === updatedItem.id);
        this.items[index] = updatedItem;
      } catch (error) {
        console.error('Error updating item:', error);
      }
    },
    async deleteItem(itemId) {
      try {
        await fetch(`http://localhost:3000/dishes/${itemId}`, {
          method: 'DELETE',
        });

        this.items = this.items.filter((item) => item.id !== itemId);
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
  },
});

export function useFoodmenu() {
  const store = useFoodmenuStore();

  const items = ref([]);

  store.$on('update:items', (newItems) => {
    items.value = newItems;
  });

  // const fetchItems = () => {
  //   store.fetchItems();
  // };

  // const addItem = (newItem) => {
  //   store.addItem(newItem);
  // };

  // const updateItem = (updatedItem) => {
  //   store.updateItem(updatedItem);
  // };

  const fetchItems = () => {
    const storedItems = localStorage.getItem(STORAGE_KEY);
    if (storedItems) {
      items.value = JSON.parse(storedItems);
    }
  };

  const addItem = async (newItem) => {
    items.value.push(newItem);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value));
  };

  const updateItem = async (updatedItem) => {
    const index = items.value.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      items.value.splice(index, 1, updatedItem);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value));
    }
  };


  const deleteItem = (itemId) => {
    store.deleteItem(itemId);
  };

  return {
    items,
    fetchItems,
    addItem,
    updateItem,
    deleteItem,
  };
}
