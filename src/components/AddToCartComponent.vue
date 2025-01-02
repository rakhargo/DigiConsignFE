<script lang="ts" setup>
import { formatRupiah } from '@/utils/formatRupiah';
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="container-fluid border border-2 rounded py-3 px-2">
    <div class="row">
      <div class="col">
        <div>
          <img :src="props.product.image" class="img-thumbnail d-inline rounded thumbnail"><p class="d-inline">{{ props.product.namaproduct }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p>Subtotal</p>
      </div>
      <div class="col">
        <p>{{ formatRupiah(props.product.harga) }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <RouterLink v-if=!props.product.is_sold class="btn btn-primary w-100" :to="'/product/'+props.product.id">+ Keranjang</RouterLink>
        <span v-else class="btn btn-danger w-100" style="pointer-events: none;">Sold</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thumbnail {
  max-width: 50px !important;
  max-height: 50px !important;
}
</style>
