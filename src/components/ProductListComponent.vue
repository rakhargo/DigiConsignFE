<!-- ProductList.vue -->
<script setup lang="ts">
import ProductCard from './ProductCardComponent.vue';
import LoadingIndicator from './LoadingIndicatorComponent.vue';
import { ref, onMounted } from 'vue';

import api from '@/api';

const products = ref([]);
const loading = ref(true);

async function fetchAllProduct() {
  loading.value = true;

  try {
    const response = await api.get('/api/product');
    products.value = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchAllProduct();
});

</script>

<template>
  <div class="container">
    <h3 class="mb-4">Sering Dicari</h3>
    <LoadingIndicator v-if="loading" />
    <div class="row" data-aos="fade-right" data-aos-duration="1000">
      <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </div>
</template>

<style>
.product-list {
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-wrap: wrap;
  /* Membuat item membungkus ke baris berikutnya */
  justify-content: flex-start;
  /* Mengatur item ke kiri */
  gap: 3vw;
  /* Jarak antar item */
}
</style>
