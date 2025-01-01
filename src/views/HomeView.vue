<script lang="ts" setup>
import NavbarComponent from '../components/NavbarComponent.vue'
import LoadingBarComponent from '../components/LoadingBarComponent.vue'
import ProductListComponent from '../components/ProductListComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import CategoryGridComponent from '@/components/CategoryGridComponent.vue'

import { onMounted } from 'vue';
onMounted(() => {
  const nav = document.querySelector('.myNav');
  nav?.classList.remove('bg-black');
    if (nav) {
      window.addEventListener('scroll', () => {
        const navHeight = parseFloat(getComputedStyle(nav).height);
        if (window.pageYOffset > (window.innerHeight*0.3 - navHeight)) {
          nav.classList.add('bg-black');
        } else {
          nav.classList.remove('bg-black');
        }
      });
    }
});
</script>

<template>
  <!-- <main> -->
    <NavbarComponent />
    <HeroComponent/>
    <LoadingBarComponent />
    <CategoryGridComponent class="my-3"/>
    <div class="container-fluid bg-black">
      <ProductListComponent class="my-3"/>
    </div>
  <!-- </main> -->
</template>

