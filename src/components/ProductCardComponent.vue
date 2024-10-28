<script setup lang="ts">
// import { useCartStore } from '../stores/cart';
// import type { Product } from '../types/product';

// const props = defineProps<{
//   product: Product;
// }>();

// const cart = useCartStore();

import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({})
  }
});

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(amount);
}

</script>

<template>
    <div class="product-card">
    <!-- <div class="product-card bg-white rounded-lg shadow-md p-4 flex flex-col"> -->
      <img :src="props.product.imageUrl" class="product-image w-full object-cover rounded-md mb-4" alt="Product Image">
      <h3 class="text-lg font-bold mb-2">{{ props.product.name }}</h3>
      <p class="text-gray-600 mb-2 flex-grow">{{ props.product.location }}</p>
      <div class="flex justify-between items-center mt-4">
        <span class="text-xl font-bold">{{ formatRupiah(props.product.price) }}</span>
      </div>
      <span class="text-md text-gray-500">{{ props.product.condition }}</span>
    </div>
</template>
  
<!-- <style scoped>
  .product-card {
    max-width: 100%; /* Mengatur lebar maksimal card */
    /* width: 100%; */
    padding: 1rem;
    transition: transform 0.3s ease;
  }
  .product-card:hover {
    transform: scale(1.05); /* Menambah efek hover untuk memperbesar */
  }
  .product-image {
    height: 200px; /* Menentukan tinggi maksimal gambar */
    max-width: 100%; /* Memastikan gambar tidak melebihi lebar card */
    object-fit: cover;
  }
</style> -->
<style scoped>
.product-card {
  background-color: white; /* Latar belakang putih */
  border-radius: 12px; /* Sudut rounded */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Bayangan halus */
  max-width: 100%; /* Mengatur lebar maksimal card */
  padding: 1rem; /* Jarak dalam card */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Efek transisi */
}

.product-card:hover {
  transform: translateY(-5px); /* Efek hover untuk mengangkat kartu */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Bayangan lebih dalam saat hover */
}

.product-image {
  height: 200px; /* Menentukan tinggi maksimal gambar */
  max-width: 100%; /* Memastikan gambar tidak melebihi lebar card */
  object-fit: cover; /* Memastikan gambar tetap proporsional */
  border-radius: 12px 12px 0 0; /* Sudut rounded untuk gambar */
}

/* Mengubah warna font menjadi hitam */
h3, p, span {
  color: black; /* Mengubah warna font menjadi hitam */
}
</style>