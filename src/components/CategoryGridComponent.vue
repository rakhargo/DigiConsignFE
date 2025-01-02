<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import img_mouse from '@/assets/img/mouse.jpg';
import img_headset from '@/assets/img/headset.jpg';
import img_keyboard from '@/assets/img/keyboard.jpg';
import img_vga from '@/assets/img/rtx-4090.jpg';
import img_ram from '@/assets/img/ram.jpg';
import img_monitor from '@/assets/img/monitor.jpg';

// Define categories data manually
const categories = ref([
  { id : 1, name: 'Mouse', image: img_mouse },
  { id : 2, name: 'Headset', image: img_headset },
  { id : 3, name: 'Keyboard', image: img_keyboard },
  { id : 4, name: 'VGA', image: img_vga },
  { id : 5, name: 'RAM', image: img_ram },
  { id : 6, name: 'Monitor', image: img_monitor }
]);

const router = useRouter();

function navigateToCategory(id: number) {
  router.push('/category/' + id);
}
</script>

<template>
  <div class="container" data-aos="fade-up" data-aos-duration="1000">
    <div class="row mb-3 justify-content-between">
      <div class="col">
        <h4 class="fw-bold">Kategori Produk</h4>
      </div>
      <div class="col text-end align-self-center">
        <RouterLink to="/categories">Lihat Semua</RouterLink>
      </div>
    </div>
    <div class="row justify-content-center">
      <div v-for="category in categories" :key="category.name"
        class="category-item col-lg-4 col-md-6 col-sm-6"
        :style="{ backgroundImage: 'url(' + category.image + ')' }" @click="navigateToCategory(category.id)">
        <div class="category-name text-white">{{ category.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-item {
  background: no-repeat center center scroll;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  min-height: 200px;
}

.category-item:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
