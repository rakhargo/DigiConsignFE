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
  <div class="container py-3" data-aos="fade-up" data-aos-duration="1000">
    <h4 class="mb-4 fw-bold text-white">Sering Dicari</h4>
    <LoadingIndicator v-if="loading" />
    <div class="row" data-aos="fade-right" data-aos-duration="1500">
      <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </div>
</template>

<style scoped>

</style>
