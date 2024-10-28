<template>
  
    <div class="carousel">
      <div class="carousel-slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(slide, index) in images" :key="index" class="carousel-slide">
          <img :src="slide" alt="Slide Image" />
        </div>
      </div>
      <br>
      <LoadingBar :progress="loadingProgress" />
  
    </div>
  </template>
  
  <script lang="ts">
  import LoadingBar from './LoadingBarComponent.vue';
  
  export default {
    name: "CarouselComponent",
    components: {
      LoadingBar,
    },
    props: {
      images: {
        type: Array,
        required: true,
        default: () => [],
      },
      autoSlideInterval: {
        type: Number,
        default: 5000,
      },
    },
    data() {
      return {
        currentIndex: 0,
        loadingProgress: 0,
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.resetLoadingBar();
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.resetLoadingBar();
      },
      resetLoadingBar() {
        this.loadingProgress = 0;
      },
    },
    mounted() {
      // Auto-slide dengan interval dan loading bar
      this.autoSlideTimer = setInterval(() => {
        this.nextSlide();
      }, this.autoSlideInterval);
  
      this.loadingBarTimer = setInterval(() => {
        this.loadingProgress += 100 / (this.autoSlideInterval / 100);
        if (this.loadingProgress >= 100) {
          this.loadingProgress = 0;
        }
      }, 100);
    },
    beforeUnmount() {
      clearInterval(this.autoSlideTimer);
      clearInterval(this.loadingBarTimer);
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
  .carousel-slides {
    display: flex;
    transition: transform 0.5s ease;
  }
  .carousel-slide {
    min-width: 100%;
  }
  .carousel-slide img {
    width: 100%;
    display: block;
  }
  </style>
  