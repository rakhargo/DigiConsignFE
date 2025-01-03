<script lang="ts" setup>
import { defineProps } from 'vue';

// Define props to receive the image URL
const props = defineProps<{
  img: string;
}>();
</script>

<template>
  <!-- Use props.img to bind the image source -->
  <img :src="img" class="img-fluid rounded border d-flex mx-auto" alt="Product Image"/>
</template>

<style scoped>
/* Add any necessary styles */
.img-fluid {
  max-width: 100%;
  max-height: 45vh;
  object-fit: contain;
}
</style>
