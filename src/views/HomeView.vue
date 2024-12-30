<script lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue'
import LoadingBarComponent from '../components/LoadingBarComponent.vue'
import ProductListComponent from '../components/ProductListComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    HeroComponent,
    LoadingBarComponent,
    ProductListComponent,
  }
}
</script>

<template>
  <!-- <main> -->
    <NavbarComponent />
    <HeroComponent/>
    <br>
    <LoadingBarComponent />
    <br>
    <ProductListComponent />
  <!-- </main> -->
</template>

