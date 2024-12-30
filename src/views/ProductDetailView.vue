<!-- <script lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue'

export default {
  name: "ProductDetailView",
  components: {
    NavbarComponent,
  }
}
</script>

<template>
    <NavbarComponent />
    <br>
</template>
 -->
 <script setup lang="ts">
 import { ref, onMounted } from 'vue';
 import { useRoute } from 'vue-router';
 import LoadingIndicator from '../components/LoadingIndicatorComponent.vue';
 import CommentSection from '../components/CommentSectionComponent.vue';
 import api from '../api';
 
 const route = useRoute();
 const productId = route.params.id; // Mengambil id dari props jika props: true diaktifkan
 const product = ref({});
 const loading = ref(true);
 
 async function fetchProductById() {
   loading.value = true;
   try {
     const response = await api.get('/api/product/' + productId);
     product.value = response.data;
   } catch (error) {
     console.error('Error fetching product:', error);
   } finally {
     loading.value = false;
   }
 }
 
 onMounted(() => {
   fetchProductById();
 });

 function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}
 </script>
 
 <template>
   <LoadingIndicator v-if="loading"/>
   <div v-else>
     <h1>{{ product.namaproduct }}</h1>
     <img :src="product.image" alt="Product Image" />
     <p>Seller: {{ product.user.name }}</p>
     <p>{{ product.kondisi_barang }}</p>
     <p>{{ formatRupiah(product.harga) }}</p>
     <p>{{ product.deskripsi }}</p>
    <CommentSection :productId="productId"/>
   </div>
 </template>
 