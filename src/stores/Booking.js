import { ref } from 'vue';

const name = ref('');
const email = ref('');
const date = ref('');
const time = ref('');
const guests = ref(1);
// const newId = 0
let nextId = 1;
  
const bookTable = async () => {
  try {
    const response = await fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: nextId++,
        name: name.value,
        email: email.value,
        date: date.value,
        time: time.value,
        guests: guests.value,
      }),
    });

    if (response.ok) {
      console.log('Booking successful!');
      reset();
    } else {
      console.error('Failed to book table:', response.statusText);
    }
  } catch (error) {
    console.error('Error booking table:', error);
  }
};

const reset = () => {
  name.value = '';
  email.value = '';
  date.value = '';
  time.value = '';
  guests.value = 1;
};

export { name, email, date, time, guests, bookTable, reset };
