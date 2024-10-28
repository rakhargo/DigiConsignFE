<template>
  <!-- <main> -->
    <NavbarComponent />
    <br>
    <CarouselComponent :images="['/images/panduan-keamanan.png', '/images/privacy-policy.png']"/>
    <br>
    <LoadingBarComponent />
  <!-- </main> -->
</template>

<script lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue'
import CarouselComponent from '../components/CarouselComponent.vue'
import LoadingBarComponent from '../components/LoadingBarComponent.vue'
export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    CarouselComponent,
    LoadingBarComponent,
  }
}
</script>
