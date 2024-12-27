<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const router = useRouter();

function navigateToDetail() {
  router.push(`/product/${props.product.id}`);
}

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}
</script>

<template>
  <div class="product-card" @click="navigateToDetail">
    <img :src="props.product.image" class="product-image" alt="Product Image" />
    <h3 class="text-lg font-bold mb-2">{{ props.product.namaproduct }}</h3>
    <p class="text-gray-600 mb-2">{{ props.product.lokasi.nama }}</p>
    <div class="flex justify-between items-center mt-4">
      <span class="text-xl font-bold">{{ formatRupiah(props.product.harga) }}</span>
    </div>
    <span class="text-md text-gray-500">{{ props.product.kondisi_barang }}</span>
  </div>
</template>

<style scoped>
.product-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer; /* Menjadikan kursor menjadi pointer saat hover */
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-image {
  height: 200px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}

h3, p, span {
  color: black;
}
</style>
