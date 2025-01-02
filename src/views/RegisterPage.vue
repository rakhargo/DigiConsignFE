<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../api';


const nama = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const router = useRouter();

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match';
    return;
  }

  try {
    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: nama.value,
        email: email.value,
        password: password.value,
        password_confirmation: confirmPassword.value, // Laravel membutuhkan password confirmation
      }),
    });
    
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }    
    successMessage.value = data.message;
    router.push('/login'); // Arahkan ke halaman login setelah berhasil
  } catch (error) {
    errorMessage.value = error.message;
  }
};


</script>

<template>
  <div class="auth-container">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister" class="auth-form">
      <label for="nama">Nama Lengkap</label>
      <input id="nama" v-model="nama" type="text" placeholder="Nama Lengkap" required />

      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" placeholder="Enter your email" required />

      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" placeholder="Choose a password" required />

      <label for="confirm-password">Confirm Password</label>
      <input id="confirm-password" v-model="confirmPassword" type="password" placeholder="Confirm your password" required />

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>

      <button type="submit">Register</button>
    </form>
  </div>
</template>
<style scoped>
.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.auth-form label {
  font-weight: bold;
}

.auth-form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.auth-form button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.auth-form button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
