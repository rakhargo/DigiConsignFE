<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import TransactionHistoryComponent from '@/components/TransactionHistoryComponent.vue';
import ProductByUserComponent from '@/components/ProductByUserComponent.vue';
import api from '../api';

interface Product {
  id: number;
  name: string;
}

const user = ref({
  email: '',
});

const products = ref<Product[]>([]);

// Ambil user_id dari localStorage
const userId = localStorage.getItem('user_id');
const token = localStorage.getItem('token');
const user_name = localStorage.getItem('username');


async function fetchUserProfile() {
  try {
    const response = await api.get(`/api/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    user.value = response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
}

async function fetchUserProducts() {
  try {
    const response = await api.get(`/api/user/${userId}/product`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    products.value = response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

onMounted(() => {
  fetchUserProfile();
  fetchUserProducts();
});
</script>

<template>
  <NavbarComponent class="mb-5"/>
  <div class="container-fluid pt-5">
    <div class="row mx-3">
      <div class="col-3 mt-4 py-3 px-3 border rounded border-2 h-100">
        <div class="row">
          <div class="col-3 my-auto pb-2">
            <i class='bx bxs-user-circle fs-1'></i>
          </div>
          <div class="col">
            <p class="fs-5">{{ user_name }}</p>
            <p class="text-secondary">{{ user.email }}</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <TransactionHistoryComponent />
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col">
            <ProductByUserComponent :id="userId" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
