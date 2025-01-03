<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import api from '../api';

interface Transaction {
  id: number;
  description: string;
  date: string;
  amount: number;
}

interface Product {
  id: number;
  name: string;
}

const user = ref({
  name: '',
  email: '',
});

const transactions = ref<Transaction[]>([]);
const products = ref<Product[]>([]);

// Ambil user_id dari localStorage
const userId = localStorage.getItem('user_id');

async function fetchUserProfile() {
  try {
    const response = await api.get(`/api/user/profile/${userId}`);
    user.value = response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
}

async function fetchUserTransactions() {
  try {
    const response = await api.get(`/api/user/transactions/${userId}`);
    transactions.value = response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
}

async function fetchUserProducts() {
  try {
    const response = await api.get(`/api/user/products/${userId}`);
    products.value = response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

onMounted(() => {
  fetchUserProfile();
  fetchUserTransactions();
  fetchUserProducts();
});
</script>

<template>
  <NavbarComponent />
  <div class="profile-page">
    <div class="profile-header">
      <div class="profile-details">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
      </div>
    </div>

    <div class="profile-content">
      <div class="transaction-history">
        <h3>Transaction History</h3>
        <ul>
          <li v-for="transaction in transactions" :key="transaction.id">
            <strong>{{ transaction.date }}</strong>: {{ transaction.description }} - ${{ transaction.amount }}
          </li>
        </ul>
      </div>
      <div class="owned-products">
        <h3>Owned Products</h3>
        <ul>
          <li v-for="product in products" :key="product.id">{{ product.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.profile-header {
  margin-top: 3.5rem; /* Tambahkan jarak agar tidak tertutup navbar */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-details h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.profile-details p {
  font-size: 1rem;
  color: #555;
}

.profile-content {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.transaction-history, .owned-products {
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.transaction-history h3, .owned-products h3 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: #007bff;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
</style>
