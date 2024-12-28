<template>
  <NavbarComponent />
  <div class="create-product-page">
    <h1>Create New Product</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="product-image">Upload Photo</label>
        <input type="file" id="product-image" @change="handleImageUpload" />
      </div>

      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" id="price" v-model="formData.price" placeholder="Enter price" required />
      </div>

      <div class="form-group">
        <label for="condition">Condition</label>
        <select id="condition" v-model="formData.condition" required>
          <option value="">Select condition</option>
          <option value="good">Good</option>
          <option value="very_good">Very Good</option>
        </select>
      </div>

      <div class="form-group">
        <label for="location">Location</label>
        <select id="location" v-model="formData.location" required>
          <option value="">Select location</option>
          <option value="jakarta">Jakarta</option>
          <option value="bekasi">Bekasi</option>
        </select>
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <select id="category" v-model="formData.category" required>
          <option value="">Select category</option>
          <option value="laptop">Laptop</option>
          <option value="mouse">Mouse</option>
        </select>
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="formData.description" placeholder="Enter product description" required></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue';

export default {
  name: 'CreateProductPage',
  components: {
    NavbarComponent,
  },
  data() {
    return {
      formData: {
        price: '',
        condition: '',
        location: '',
        category: '',
        description: '',
      },
    };
  },
  methods: {
    handleImageUpload(event: Event) {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log('Uploaded file:', file);
      }
    },
    handleSubmit() {
      console.log('Form data submitted:', this.formData);
      alert('Product created successfully!');
    },
  },
};
</script>

<style scoped>
.create-product-page {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background: #000000;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #fff;
  font-weight: bold;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ffffff;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
