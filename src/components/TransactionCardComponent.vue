<script lang="ts" setup>
import { DefineProps } from 'vue';
import { formatRupiah } from '@/utils/formatRupiah';

const props = defineProps({
  transaction: {
    type: Object,
    required: true,
  },
});

// Format the date
const formattedDate = new Date(props.transaction.created_at).toISOString().split('T')[0];
</script>

<template>
  <div class="row my-2 border rounded">
    <div class="col p-3">
      <div class="row">
        <div class="col">
          <p>
            <span class="text-secondary">Tanggal Transaksi: </span><span class="fw-bold">{{ formattedDate }}</span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>
            <span class="text-secondary">Penjual: </span><span class="fw-bold">{{ transaction.seller.name }}</span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-8">
          <div>
            <img :src="transaction.product.image" class="img-thumbnail d-inline rounded thumbnail" />
            <p class="d-inline fw-bold">{{ transaction.product.namaproduct }}</p>
          </div>
        </div>
        <div class="col">
          <p>Total harga</p>
          <p class="fw-bold">{{ formatRupiah(transaction.product.harga) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thumbnail {
  max-width: 100px !important;
  max-height: 100px !important;
  object-fit: contain;
}
</style>
