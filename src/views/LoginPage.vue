<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin" class="auth-form">
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" placeholder="Enter your email" required />

      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" placeholder="Enter your password" required />

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>

      <button type="submit">Login</button>
    </form>

    <p>
      Tidak punya akun? <router-link to="/register">Daftar di sini</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const successMessage = ref('');
    const router = useRouter(); 

    const handleLogin = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Login failed');
        }

        localStorage.setItem('token', data.access_token);
        successMessage.value = 'Login successful!';
        router.push('/'); // Redirect ke halaman utama
      } catch (error) {
        console.error('Error:', error.message);
        errorMessage.value = error.message;
      }
    };

    return { email, password, errorMessage, successMessage, handleLogin };
  },
};

</script>

<style scoped>
/* Styling halaman login */
.login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

p {
  margin-top: 15px;
}
</style>
