<!-- ProductList.vue -->
<script setup lang="ts">
import ProductCard from './ProductCardComponent.vue';
import LoadingIndicator from './LoadingIndicatorComponent.vue';
import { ref, watch, defineProps } from 'vue';

import api from '@/api';

const products = ref([]);
const loading = ref(true);
const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
});

async function fetchAllProduct() {
  loading.value = true;

  try {
    const response = await api.get(`/api/user/${props.id}/product`);
    products.value = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

watch(() => props.id, fetchAllProduct, { immediate: true });

</script>

<template>
  <div class="container py-3" data-aos="fade-up" data-aos-duration="1000">
    <h4 class="mb-4 fw-bold">Produk yang Dijual</h4>
    <LoadingIndicator v-if="loading" />
    <div class="row" data-aos="fade-right" data-aos-duration="1500">
      <div v-if="products.length === 0" class="text-center mt-5">
        <p>Belum ada produk yang dijual.</p>
      </div>
      <ProductCard v-else v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </div>
</template>

<style scoped>

</style>
