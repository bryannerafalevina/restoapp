<template>
  <header>
    <a href="/"><font-awesome-icon icon="utensils"  size="1x" class="text"/>Restaurant</a>    
    <div class="container">
      <router-link to="/">Home</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/book-a-table">Book a Table</router-link>
    </div> 
  </header>
  <router-view />
  
</template>

<style>

.container{
  margin-left: 20px;
  display: flex;
}
header {
  background-color: #D1D9D9;
  display: flex;
  top: 0;
  left: 0;
  justify-content: space-between; 
  align-items: center;
  padding: 5px;
  position: fixed;
  width: 100%;
}

nav a.router-link-exact-active {
  color: orange;
}

</style>