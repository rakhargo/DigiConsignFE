<script lang="ts" setup>
import { defineProps } from 'vue';
import ProductCommentComponent from './ProductCommentComponent.vue';

const props = defineProps({
  comments: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="mx-3">
    <h4>Diskusi ({{ comments.length }})</h4>
    <div class="row">
      <div class="col-11">
        <input type="text" name="" id="" class="form-control border border-2 rounded" placeholder="Mulai diskusi...">
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary">Kirim</button>
      </div>
    </div>
    <ProductCommentComponent v-for="comment in comments" :key="comment.id" :comment="comment" />
  </div>
</template>

<style scoped>
h4 {
  margin-bottom: 1rem;
}
</style>
