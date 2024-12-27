<template>
  <div class="cart-page">
    <h1>Your Cart</h1>
    <p>This is where the cart items will be displayed.</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CartPage',
};
</script>

<style scoped>
.cart-page {
  padding: 2rem;
  text-align: center;
}

.cart-page h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cart-page p {
  font-size: 1.2rem;
  color: #555;
}
</style>
