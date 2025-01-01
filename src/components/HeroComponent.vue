<script lang="ts" setup>
import img from '@/assets/img/herobg.jpg';
import { RouterLink } from 'vue-router';
import {ref, onMounted} from 'vue';

const isLoggedIn = ref(false);
onMounted(() => {
  const token = localStorage.getItem('token');
  isLoggedIn.value = !!token;
});
</script>
<template>
  <section id="landing" :style="{ backgroundImage: 'url(' + img + ')' }" class="hero-section">
    <div class="container-fluid" data-aos="zoom-out-left" data-aos-duration="1000">
      <div class="row my-2">
        <div class="col ms-4">
          <div class="hero-content">
            <h1>Jual Beli Barang Kamu</h1>
            <br>
              <h1>
                di Digi Consign
              </h1>
          </div>
        </div>
      </div>
      <div v-if="!isLoggedIn" class="row my-3">
        <div class="col ms-5">
          <RouterLink to="/register" class="btn bg-white register-btn">
            Register
          </RouterLink>
          <RouterLink to="/login" class="btn border text-white ms-3 login-btn">
            Log in
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  background: no-repeat center center scroll;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
}

.hero-content {
  max-width: 800px;
  padding: 20px;
}

.register-btn:hover {
  background-color: #000 !important;
  color: #fff;
}
.login-btn:hover {
  background-color: #b9b8b8 !important;
  color: #000 !important;
}
</style>
