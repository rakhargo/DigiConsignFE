<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <a href="#">Digi Consign</a>
      </div>
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><a href="#about">About</a></li>
        <li><router-link to="/login">Login</router-link></li>
        <li class="menu-icon">
          <router-link to="/cart">
            <IconCart />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavbarComponent',
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-brand a {
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
}

.menu {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.menu li a {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.menu li a:hover {
  background-color: #444;
  border-radius: 5px;
}
</style>
