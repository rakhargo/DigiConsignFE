<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const router = useRouter();

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match';
  } else {
    // Simulate user registration logic
    localStorage.setItem('user', JSON.stringify({ username: username.value, password: password.value }));
    router.push('/login');
  }
};
</script>

<template>
  <div class="auth-container">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister" class="auth-form">
      <label for="username">Username</label>
      <input id="username" v-model="username" type="text" placeholder="Choose a username" required />

      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" placeholder="Choose a password" required />

      <label for="confirm-password">Confirm Password</label>
      <input id="confirm-password" v-model="confirmPassword" type="password" placeholder="Confirm your password" required />

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

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
