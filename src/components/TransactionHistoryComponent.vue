<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import TransactionCardComponent from './TransactionCardComponent.vue';
import api from '@/api';

// Define the reactive state for transactions
const transactions = ref([]);
const loading = ref(true);
const errorMessage = ref<string | null>(null);

const fetchTransactions = async () => {
  try {
    const userId = localStorage.getItem('user_id'); // Assuming user ID is stored in local storage
    const token = localStorage.getItem('token'); // Assuming authentication token is stored in local storage
    const response = await api.get(`/api/user/${userId}/transaction`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    transactions.value = response.data;
    loading.value = false;
  } catch (error) {
    console.error('Failed to fetch transactions:', error);
    errorMessage.value = 'Failed to load transactions. Please try again later.';
    loading.value = false;
  }
};

// Fetch transactions when the component is mounted
onMounted(fetchTransactions);
</script>

<template>
  <div class="container">
    <h2 class="mb-4">Transaction History</h2>
    <div v-if="loading" class="text-center">
      <p>Loading transactions...</p>
    </div>
    <div v-else-if="errorMessage" class="alert alert-danger">
      {{ errorMessage }}
    </div>
    <div v-else>
      <div v-if="transactions.length === 0" class="text-center">
        <p>No transactions found.</p>
      </div>
      <div v-else>
        <TransactionCardComponent
          v-for="transaction in transactions"
          :key="transaction.id"
          :transaction="transaction"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
