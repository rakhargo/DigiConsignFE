<script lang="ts" setup>
import { defineProps } from 'vue';

// Define props to receive the image URL
const props = defineProps<{
  img: string;
}>();
</script>

<template>
  <!-- Use props.img to bind the image source -->
  <img :src="img" class="img-fluid rounded" alt="Product Image" />
</template>

<style scoped>
/* Add any necessary styles */
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
