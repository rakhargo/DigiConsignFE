<script lang="ts" setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import api from '../api';
import { useRouter } from 'vue-router';
import ProductCommentComponent from './ProductCommentComponent.vue';

const props = defineProps({
  comments: {
    type: Array,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});
const user_id = localStorage.getItem("user_id");
const router = useRouter();
const formData = ref({
  isi_komentar: '',
});

async function handleSubmit() {
  const data = {
    isi_komentar: formData.value.isi_komentar,
    user_id: user_id,
  };
  console.log('Data:', data);
  try {
    const response = await api.post('/api/product/' + props.comments[0].product.id + '/komentar', data, {
      headers: {
        'Content-Type': 'multipart/form-data', // Pastikan header ini ditambahkan
      },
    });
    console.log('Comment created:', response.data);
    // Reset form setelah berhasil
    // router.push('/product/' + props.comments[0].product.id);
    location.reload();
  } catch (error) {
    console.error('Error creating Comment:', error);
  }
}

</script>

<template>
  <div class="mx-3">
    <h4>Diskusi ({{ comments.length }})</h4>

    <form @submit.prevent="handleSubmit">
      <div v-if="props.user_id != user_id" class="row">
        <div class="col-11">
          <input type="text" v-model="formData.isi_komentar" class="form-control border border-2 rounded" placeholder="Mulai diskusi...">
        </div>
        <div class="col">
          <button type="submit" class="btn btn-primary">Kirim</button>
        </div>
      </div>
    </form>

    <ProductCommentComponent v-for="comment in comments" :key="comment.id" :comment="comment" />
  </div>
</template>

<style scoped>
h4 {
  margin-bottom: 1rem;
}
</style>
