<script setup lang="ts">
import { useRouter } from 'vue-router';
import { formatRupiah } from '@/utils/formatRupiah';

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const router = useRouter();

function navigateToDetail() {
  router.push('/product/' + props.product.id);
}

function getClass(kondisi_barang: string) {
  if(kondisi_barang === "Brand New in Box" || kondisi_barang === "Brand New Open Box") return "border-success text-success";
  else if(kondisi_barang === "Very Good Condition" || kondisi_barang === "Good Condition") return "border-primary text-primary";
  else return "border-warning text-warning";
}
</script>

<template>
  <div class="col-xl-3 col-md-4 col-sm-6 mb-3">
    <div class="card mx-auto product-card" @click="navigateToDetail">
    <!-- <img :src="props.product.image" class="card-img-top" alt="Foto produk {{props.product.namaproduct}}"> -->
    <div class="image-container">
        <img :src="props.product.image" class="card-img-top" alt="Foto produk {{props.product.namaproduct}}">
        <div v-if="props.product.is_sold" class="overlay">
          <span class="sold-text">Sold</span>
        </div>
      </div>
    <div class="card-body">
      <h5 class="card-title">{{props.product.namaproduct}}</h5>
      <p class="card-text"><b>{{ formatRupiah(props.product.harga) }}</b></p>
      <div :class="['border', 'rounded', 'my-3', getClass(props.product.kondisi_barang)]">
        <p class="card-text text-center my-1">{{props.product.kondisi_barang}}</p>
      </div>
      <p class="fs-6 fw-bold"><i class='bx bx-map'></i> {{props.product.lokasi.nama}}</p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
  </div>
</template>

<style scoped>
.card-img-top{
  height: 35vh;
  object-fit: contain;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.image-container {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Dark overlay with opacity */
  display: flex;
  justify-content: center;
  align-items: center;
}

.sold-text {
  color: white;
  font-size: 1.5rem; /* Adjust size as needed */
  font-weight: bold;
}
</style>
