<!-- <template>
  <div>
    <h1>Book a Table</h1>
    <div class="container">
    <form @submit.prevent="bookTable">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="date">Date:</label>
      <input type="date" id="date" v-model="date" required />

      <label for="time">Time:</label>
      <input type="time" id="time" v-model="time" required />

      <label for="guests">Number of Guests:</label>
      <input type="number" id="guests" v-model="guests" min="1" required />

      <button type="submit">Book Table</button>
    </form>
  </div>
  </div>
</template>

<style scoped>
.container{
  width: 100px;
  height:100%;
}
</style>

<script setup>
import { name, email, date, time, guests, bookTable, reset } from '../stores/Booking';
</script> -->

<template>
  <div>
    <div class="container">
      <img src="https://picsum.photos/200/300" alt="Placeholder Image">
      <div class="form-box">
        <h2> Reservation </h2>
        <h1>Book a Table</h1>
        <form @submit.prevent="bookTable" class="form-grid">
          <label for="name">Your Name:</label>
          <input type="text" id="name" v-model="name" required placeholder="Your Name" />

          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required placeholder="Your E-mail"/>

          <label for="date">Date:</label>
          <input type="date" id="date" v-model="date" required />

          <label for="time">Time:</label>
          <input type="time" id="time" v-model="time" required />

          <label for="guests">Number of Guests:</label>
          <input type="number" id="guests" v-model="guests" min="1" required />
        
          <button type="submit" class="button">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>
  <footer class="footer">
      <p>&copy; 2024 Your Restaurant Name. All rights reserved.</p>
  </footer>
</template>


<style scoped>
/* .container {
  width: 2000px;
  height: 700%; */
  /* display: flex; */
  /* align-items: center;
} */

.form-box {
  border: 1px solid #BBC3A4;
  padding: 1rem;
  /* display: flexbox; */
  background-color: #C7C8CC;
  top:50%;
  width: 900px;
  height: 350px;
  /* align-items: center; */
}

/* Add margin to the right of the image */
.form-box img {
  height: 200px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

label {
  display: block;
}

input {
  width: 100%;
}

.button{
  background-color: #7D7C7C;
  border: 1px solid #888;
  width: 204%; /* Could be more or less, depending on screen size */
  height: 35px;
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


<script setup>
import { name, email, date, time, guests, bookTable, reset } from '../stores/Booking';
</script>