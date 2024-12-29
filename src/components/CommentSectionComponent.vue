<script setup lang="ts">
import { ref, onMounted } from 'vue';
import api from '../api';
import { defineProps } from 'vue';
  
const props = defineProps({
  productId: {
    type: Number,
    required: true,
  },
});
const comments = ref([]);
const loading = ref(true);
const showAll = ref(false);

  async function fetchAllComment() {
  loading.value = true;

  try {
    const response = await api.get('/api/product/' + props.productId + '/komentar');
    comments.value = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchAllComment();
});

function toggleComments() {
  showAll.value = !showAll.value;
}

</script>

<template>
    <div class="comment-section">
      <div class="summary">
        <span>Diskusi ({{ comments.length }})</span>
        <button @click="toggleComments">{{ showAll ? 'Sembunyikan' : 'Lihat semua' }}</button>
      </div>
      <div v-if="showAll" class="comments-list">
        <div v-for="comment in comments" :key="comment.id" class="comment">
          <div class="comment-user">{{ comment.user.name }}</div>
          <div class="comment-content">{{ comment.isi_komentar }}</div>
          <div v-if="comment.balasan_komentar" class="reply">
            <div class="reply-seller">Seller</div>
            <div class="reply-content">{{ comment.balasan_komentar }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .comment-section {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
  }
  
  .summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .comments-list {
    margin-top: 10px;
  }
  
  .comment {
    border-bottom: 1px solid #eee;
    padding: 10px 0;
  }
  
  .comment-user {
    font-weight: bold;
  }
  
  .reply {
    margin-left: 20px;
    margin-top: 5px;
  }
  
  .reply-seller {
    font-weight: bold;
  }
  
  .reply-content {
    margin-left: 10px;
  }
  </style>
  