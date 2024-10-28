<script lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue'
import CarouselComponent from '../components/CarouselComponent.vue'
import LoadingBarComponent from '../components/LoadingBarComponent.vue'
import ProductListComponent from '../components/ProductListComponent.vue'

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    CarouselComponent,
    LoadingBarComponent,
    ProductListComponent,
  }
}
</script>

<template>
  <!-- <main> -->
    <NavbarComponent />
    <br>
    <CarouselComponent :images="['/images/panduan-keamanan.png', '/images/privacy-policy.png']"/>
    <br>
    <LoadingBarComponent />
    <br>
    <ProductListComponent />
  <!-- </main> -->
</template>

