<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" placeholder="Masukkan username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" placeholder="Masukkan password" required />
      </div>
      <button type="submit" class="btn">Login</button>
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
  name: 'LoginPage',
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const handleLogin = () => {
      // Tambahkan logika autentikasi di sini
      console.log('Username:', username.value);
      console.log('Password:', password.value);

      // Contoh pengalihan setelah login berhasil
      router.push('/');
    };

    return { username, password, handleLogin };
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
