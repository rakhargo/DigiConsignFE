<script lang="ts" setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
import api from '../api';
import { useRouter } from 'vue-router';

// Props definition
const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});

const user_id = localStorage.getItem("user_id");
const router = useRouter();
const formData = ref({
  balasan_komentar: '',
});
async function handleSubmit() {
  const data = {
    balasan_komentar: formData.value.balasan_komentar,
  };
  try {
    const response = await api.post('/api/komentar/' + props.comment.id + '/balas', data, {
      headers: {
        'Content-Type': 'multipart/form-data', // Pastikan header ini ditambahkan
      },
    });
    console.log('Reply created:', response.data);
    // Reset form setelah berhasil
    location.reload();
  } catch (error) {
    console.error('Error creating Reply:', error);
  }
}

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

      <form @submit.prevent="handleSubmit">
        <div v-if="comment.product.user_id == user_id && !comment.balasan_komentar" class="row">
          <div class="col-11">
            <input type="text" v-model="formData.balasan_komentar" id="" class="form-control border border-2 rounded" placeholder="Balas...">
          </div>
          <div class="col">
            <button type="submit" class="btn btn-primary">Kirim</button>
          </div>
        </div>
      </form>

      <div v-if="comment.balasan_komentar" class="bg-secondary-subtle p-2 rounded mt-1">
        <strong class="text-primary">Penjual:</strong>
        <p>{{ comment.balasan_komentar }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
