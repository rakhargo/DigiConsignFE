<!-- ProductList.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from './ProductCardComponent.vue';

// const imageUrls = [""];

const products = ref([
  {
    name: "Vortexseries Oni R1",
    location: "Kota Bekasi",
    price: 100000,
    condition: "Judge By Pict",
    imageUrl: "/images/product/product1.jpeg"
  },
  {
    name: "Rexus Daxa Asteria V2",
    location: "Kota Bandung",
    price: 250000,
    condition: "Very Good Condition",
    imageUrl: "/images/product/product2.jpeg"
  },
  {
    name: "Logitech M191",
    location: "Kab. Bandung",
    price: 50000,
    condition: "Good Condition",
    imageUrl: "/images/product/product3.jpeg"
  },
]);
</script>

<template>
  <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"> -->
  <div class="product-list flex flex-wrap justify-start gap-4 p-4">
    <ProductCard 
      v-for="(product, index) in products" 
      :key="index" 
      :product="product" 
    />
  </div>
</template>

<style>
.product-list {
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-wrap: wrap; /* Membuat item membungkus ke baris berikutnya */
  justify-content: flex-start; /* Mengatur item ke kiri */
  gap: 3vw; /* Jarak antar item */
}
</style>