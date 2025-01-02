<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '../api';
import NavbarComponent from '../components/NavbarComponent.vue';
import ProductImageComponent from '@/components/ProductImageComponent.vue';
import ProductDetailComponent from '@/components/ProductDetailComponent.vue';
import AddToCartComponent from '@/components/AddToCartComponent.vue';
import ProductCommentsListComponent from '@/components/ProductCommentsListComponent.vue';
import LoadingBarComponent from '../components/LoadingBarComponent.vue';

// Define types
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  kondisi_barang: string;
  lokasi: { nama: string };
  image: string;
  user: { id: number; name: string };
  is_sold: number;
}

interface Comment {
  id: number;
  user: { name: string };
  isi_komentar: string;
  balasan_komentar?: string;
  created_at: string;
}

// Initialize refs
const route = useRoute();
const productId = route.params.id as string;
const product = ref<Product | null>(null);
const comments = ref<Comment[]>([]);
const loading = ref(true);
const commentsLoading = ref(true);

// Fetch product data by ID
async function fetchProductById() {
  loading.value = true;
  try {
    const response = await api.get(`/api/product/${productId}`);
    product.value = response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
  } finally {
    loading.value = false;
  }
}

// Fetch comments for the product
async function fetchComments() {
  commentsLoading.value = true;
  try {
    const response = await api.get(`/api/product/${productId}/komentar`);
    comments.value = response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
  } finally {
    commentsLoading.value = false;
  }
}

// Fetch data on mount
onMounted(() => {
  fetchProductById();
  fetchComments();
});
</script>

<template>
  <NavbarComponent class="mb-5" />
  <div class="container-fluid pt-5">
    <LoadingBarComponent v-if="loading" />
    <div v-else class="row">
      <div class="col-md-4 col-sm-6 mb-3">
        <div class="image-container">
        <ProductImageComponent :img="product?.image || ''" />
        <div v-if="product.is_sold" class="overlay">
          <span class="sold-text">Sold</span>
        </div>
      </div>
      </div>
      <div class="col-md-4 col-sm-6 mb-3">
        <ProductDetailComponent :product="product" />
      </div>
      <div class="col-md-4 col-sm-6 mb-3">
        <AddToCartComponent :product="product" />
      </div>
    </div>
    <hr />
    <div v-if="commentsLoading">
      <LoadingBarComponent />
    </div>
    <div v-else>
      <ProductCommentsListComponent :comments="comments" />
    </div>
  </div>
</template>

<style scoped>

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
