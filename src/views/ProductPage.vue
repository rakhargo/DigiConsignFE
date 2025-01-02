<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import { useRouter } from 'vue-router';
import api from '../api';

interface Kategori {
  id: number;
  nama: string;
}

interface Lokasi {
  id: number;
  nama: string;
}

const router = useRouter();
const kategori = ref<Kategori[]>([]);
const lokasi = ref<Lokasi[]>([]);
const formData = ref({
  name: '',
  price: 0,
  condition: '',
  location: '',
  category: '',
  description: '',
  image: null,
});
async function fetchAllKategori() {
  try {
    const response = await api.get('/api/kategori');
    kategori.value = response.data;
  } catch (error) {
    console.error(error);
  } 
}

async function fetchAllLokasi() {
  try {
    const response = await api.get('/api/lokasi');
    lokasi.value = response.data;
  } catch (error) {
    console.error(error);
  } 
}

console.log("userid")
console.log(localStorage.getItem('user_id'))
async function handleSubmit() {
  const userId = localStorage.getItem('user_id');
  const data = {
    namaproduct: formData.value.name,
    harga: formData.value.price,
    kondisi_barang: formData.value.condition,
    lokasi_id: formData.value.location, // Pastikan ini adalah ID lokasi
    kategori_id: formData.value.category, // Pastikan ini adalah ID kategori
    user_id: userId, // ID pengguna yang sedang login
    tanggal_publish: new Date().toISOString(), // Tanggal publish
    deskripsi: formData.value.description,
    image: formData.value.image, // Anda perlu mengunggah gambar ini
  };
  try {
    const response = await api.post('/api/product', data, {
      headers: {
        'Content-Type': 'multipart/form-data', // Pastikan header ini ditambahkan
      },
    });
    console.log('Product created:', response.data);
    // Reset form setelah berhasil
    resetForm();
    router.push('/');
  } catch (error) {
    console.error('Error creating product:', error);
  }
}

function handleImageUpload(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    formData.value.image = target.files[0]; // Simpan file gambar
  }
}

function resetForm() {
  formData.value = {
    name: '',
    price: 0,
    condition: '',
    location: '',
    category: '',
    description: '',
    image: null,
  };
}

onMounted(() => {
  fetchAllKategori();
  fetchAllLokasi();
});

</script>

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
        <label for="name">Product Name</label>
        <input type="text" id="name" v-model="formData.name" placeholder="Enter product name" required />
      </div>

      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" id="price" v-model="formData.price" placeholder="Enter price" required />
      </div>

      <div class="form-group">
        <label for="condition">Condition</label>
        <select id="condition" v-model="formData.condition" required>
          <option value="">Select condition</option>
          <option value="Brand New In Box">Brand New In Box</option>
          <option value="Brand New Open Box">Brand New Open Box</option>
          <option value="Very Good Condition">Very Good Condition</option>
          <option value="Good Condition">Good Condition</option>
          <option value="Judge By Pict">Judge By Pict</option>
        </select>
      </div>

      <div class="form-group">
        <label for="location">Location</label>
        <select id="location" v-model="formData.location" required>
          <option value="">Select location</option>
          <option v-for="loc in lokasi" :key="loc.id" :value="loc.id">{{ loc.nama }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <select id="category" v-model="formData.category" required>
          <option value="">Select category</option>
          <option v-for="cat in kategori" :key="cat.id" :value="cat.id">{{ cat.nama }}</option>
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
