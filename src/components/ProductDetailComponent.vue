<script lang="ts" setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import { formatRupiah } from '@/utils/formatRupiah';
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const user_id = localStorage.getItem("user_id")
</script>
<template>
  <div class="row">
    <div class="col">
      <h3>{{ product.namaproduct }}</h3>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <h4>{{ formatRupiah(product.harga) }}</h4>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col">
      <h5 class="text-primary">Detail</h5>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <p><span class="text-secondary">Kondisi:</span> {{ product.kondisi_barang }}</p>
      <p><span class="text-secondary">Lokasi:</span> {{ product.lokasi.nama }}</p>
      <p>{{ product.deskripsi }}</p>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col">
      <RouterLink v-if="product.user.id == user_id" :to="`/profile/${product.user.id}`">Milik Saya</RouterLink>
      <h5 v-else class="text-primary">{{ product.user.name }}</h5>
    </div>
  </div>
</template>
<style scoped></style>
