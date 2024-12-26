<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import NavbarComponent from '../components/NavbarComponent.vue';

// Get product ID from route params
const route = useRoute();
const productId = route.params.id;

// Simulated product data
const product = ref({
  id: '',
  name: '',
  location: '',
  price: 0,
  condition: '',
  imageUrl: '',
});

// Fetch product details based on ID
function fetchProductDetails(id: string) {
  // Example dummy data, replace with an API if available
  const dummyProducts = [
    {
      id: '1',
      name: 'Vortexseries Oni R1',
      location: 'Kota Bekasi',
      price: 100000,
      condition: 'Judge By Pict',
      imageUrl: '/images/product/product1.jpeg',
    },
    {
      id: '2',
      name: 'Rexus Daxa Asteria V2',
      location: 'Kota Bandung',
      price: 250000,
      condition: 'Very Good Condition',
      imageUrl: '/images/product/product2.jpeg',
    },
    {
      id: '3',
      name: 'Logitech M191',
      location: 'Kab. Bandung',
      price: 50000,
      condition: 'Good Condition',
      imageUrl: '/images/product/product3.jpeg',
    },
  ];

  const foundProduct = dummyProducts.find((p) => p.id === id);
  if (foundProduct) {
    product.value = foundProduct;
  }
}

onMounted(() => {
  if (productId) {
    fetchProductDetails(productId as string);
  }
});

// Function to format price in Rupiah
function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

</script>

<template>
  <div>
    <!-- Navbar -->
    <NavbarComponent />
    <!-- Product Details -->
    <div class="product-detail-container">
      <div class="product-detail-card">
        <!-- Product Image -->
        <div class="product-image-container">

          <img :src="product.imageUrl" alt="Product Image" class="product-image" />
        </div>

        <!-- Product Details -->
        <div class="product-detail-content">
          <h1 class="product-name">{{ product.name }}</h1>
          <p class="product-location">
            <i class="fa fa-map-marker-alt"></i> {{ product.location }}
          </p>
          <p class="product-condition">
            <strong>Condition:</strong> {{ product.condition }}
          </p>
          <p class="product-price">{{ formatRupiah(product.price) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Overall container styling */
.product-detail-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px); /* Adjust for navbar height */
  background-color: #181818;
  padding: 20px;
}

/* Card layout */
.product-detail-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  overflow: hidden;
  padding: 20px;
}

/* Image styling */
.product-image-container {
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 20px;
}

.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
}

/* Details content styling */
.product-detail-content {
  text-align: center;
}

.product-name {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.product-location {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

.product-condition {
  font-size: 18px;
  color: #444;
  margin-bottom: 20px;
}

.product-price {
  font-size: 22px;
  font-weight: bold;
  color: #e74c3c;
  margin-top: 10px;
}
</style>
