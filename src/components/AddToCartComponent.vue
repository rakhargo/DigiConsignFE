<script lang="ts" setup>
import { formatRupiah } from '@/utils/formatRupiah';
import { defineProps, ref } from 'vue';
import api from '@/api'; // Assuming you have an API utility setup


const props = defineProps({
  product: {
    type: Object as () => {
      id: number;
      image: string;
      namaproduct: string;
      harga: number;
      is_sold: boolean;
      user: {
        id: number;
      };
    },
    required: true,
  },
});

const isBuying = ref(false);
const buyer_id = localStorage.getItem('user_id');
const seller_id = props.product.user.id;
const product_id = props.product.id;
const metodePembayaran = ref('');
const alamat = ref('');
const buktiPembayaran = ref<File | null>(null);
const isSold = ref(props.product.is_sold);

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files) {
    buktiPembayaran.value = target.files[0];
  }
};

const submitPurchase = async () => {
  if (!metodePembayaran.value || !alamat.value || !buktiPembayaran.value) {
    alert("All fields are required!");
    return;
  }

  try {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('alamat', alamat.value);
    formData.append('metode_pembayaran', metodePembayaran.value);
    formData.append('bukti_pembayaran', buktiPembayaran.value);
    formData.append('product_id', product_id.toString());
    formData.append('buyer_id', buyer_id!);
    formData.append('seller_id', seller_id.toString());

    const response = await api.post('/api/transaction', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    alert('Pembelian berhasil!');

    // Update the UI on successful transaction
    isBuying.value = false;
    isSold.value = true;
  } catch (error) {
    console.error('Purchase Failed:', error);
    alert('Transaction failed. Please try again.');
  }
};
</script>

<template>
  <div class="container-fluid border border-2 rounded py-3 px-2">
    <div class="row">
      <div class="col">
        <div>
          <img :src="product.image" class="img-thumbnail d-inline rounded thumbnail" />
          <p class="d-inline">{{ product.namaproduct }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p>Subtotal</p>
      </div>
      <div class="col">
        <p>{{ formatRupiah(product.harga) }}</p>
      </div>
    </div>
    <div class="row" id="buy-row">
      <div class="col">
        <!-- Display the Buy button or Sold message -->
        <button
          v-if="!isSold && !isBuying"
          class="btn btn-primary w-100"
          @click="isBuying = true"
        >
          Beli
        </button>
        <span
          v-else-if="isSold"
          class="btn btn-danger w-100"
          style="pointer-events: none;"
        >
          Sold
        </span>
        <!-- Display the purchase form -->
        <form v-else @submit.prevent="submitPurchase" class="mt-3">
          <div class="mb-3">
            <label for="alamat" class="form-label">Alamat</label>
            <input
              type="text"
              class="form-control"
              id="alamat"
              v-model="alamat"
              required
            />
          </div>
          <div class="mb-3">
            <label for="metodePembayaran" class="form-label">Metode Pembayaran</label>
            <select
              class="form-select"
              id="metodePembayaran"
              v-model="metodePembayaran"
              required
            >
              <option disabled value="">Pilih metode pembayaran</option>
              <option value="transfer">Transfer Bank</option>
              <option value="e-wallet">E-Wallet</option>
              <option value="cod">Cash on Delivery (COD)</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="buktiPembayaran" class="form-label">Bukti Pembayaran</label>
            <input
              type="file"
              class="form-control"
              id="buktiPembayaran"
              accept="image/*"
              @change="handleFileChange"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Beli</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thumbnail {
  max-width: 50px !important;
  max-height: 50px !important;
  object-fit: contain;
}
</style>
