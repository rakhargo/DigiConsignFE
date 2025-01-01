<script lang="ts" setup>
import { defineProps } from 'vue';

// Props definition
const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});

// Function to format the date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}
</script>

<template>
  <div class="border rounded my-2 py-2 px-2">
    <div class="mb-2 px-1 py-1">
      <div class="mb-1">
        <strong>{{ comment.user.name }}</strong>
        <small class="text-muted"> • {{ formatDate(comment.created_at) }}</small>
      </div>
      <p class="comment-content">{{ comment.isi_komentar }}</p>

      <div v-if="comment.balasan_komentar" class="bg-secondary-subtle p-2 rounded mt-1">
        <strong class="text-primary">Penjual:</strong>
        <p>{{ comment.balasan_komentar }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
