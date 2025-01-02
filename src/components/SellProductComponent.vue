<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import api from '@/api'; // Assuming you have an API utility setup
import { useRouter } from 'vue-router';

const router = useRouter();
// Form data structure
const form = ref({
  namaproduct: '',
  harga: 0,
  kondisi_barang: '',
  lokasi_id: null,
  kategori_id: null,
  deskripsi: '',
  user_id: localStorage.getItem("user_id"),
  image: null, // For storing the uploaded image file
  tanggal_publish: '',
  is_sold: 0,
});

// Options for lokasi and kategori
const lokasiOptions = ref([]);
const kategoriOptions = ref([]);

// Fetch lokasi and kategori options on mount
const fetchOptions = async () => {
  try {
    const [lokasiResponse, kategoriResponse] = await Promise.all([
      api.get('/api/lokasi'),
      api.get('/api/kategori'),
    ]);

    lokasiOptions.value = lokasiResponse.data;
    kategoriOptions.value = kategoriResponse.data;
  } catch (error) {
    console.error('Error fetching options:', error);
  }
};

// Handle image upload
const handleImageUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    form.value.image = file;
  }
};

// Handle form submission
const handleSubmit = async () => {
  try {
    // Add tanggal_publish to the form data
    form.value.tanggal_publish = new Date().toISOString();

    // Create FormData object for file upload
    const formData = new FormData();
    Object.keys(form.value).forEach((key) => {
      formData.append(key, form.value[key as keyof typeof form.value] as string | Blob);
    });
    console.log('Form data:', formData.keys);

    // Submit the form data
    const token = localStorage.getItem('token');
    const response = await api.post('/api/product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
    });

    alert('Product uploaded successfully!');
    router.push('/product/' + response.data.id);
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Failed to upload product. Please try again.');
  }
};

// Fetch options when the component is mounted
onMounted(() => {
  fetchOptions();
});
</script>

<template>
  <div class="sell-product-form">
    <h1>Sell Product</h1>
    <form @submit.prevent="handleSubmit">
      <!-- Gambar Produk -->
      <div class="form-group">
        <label for="image">Gambar Produk</label>
        <input id="image" type="file" @change="handleImageUpload" required />
      </div>

      <!-- Nama Produk -->
      <div class="form-group">
        <label for="nama_produk">Nama Produk</label>
        <input id="nama_produk" v-model="form.namaproduct" type="text" placeholder="Enter product name" required />
      </div>

      <!-- Harga -->
      <div class="form-group">
        <label for="harga">Harga</label>
        <input id="harga" v-model.number="form.harga" type="number" placeholder="Enter price" required />
      </div>

      <!-- Kondisi Barang -->
      <div class="form-group">
        <label for="kondisi">Kondisi Barang</label>
        <select id="kondisi" v-model="form.kondisi_barang" required>
          <option value="Brand New in Box">Brand New in Box</option>
          <option value="Brand New Open Box">Brand New Open Box</option>
          <option value="Very Good Condition">Very Good Condition</option>
          <option value="Good Condition">Good Condition</option>
          <option value="Judge by Pict">Judge by Pict</option>
        </select>
      </div>

      <!-- Lokasi -->
      <div class="form-group">
        <label for="lokasi">Lokasi</label>
        <select id="lokasi" v-model="form.lokasi_id" required>
          <option v-for="lokasi in lokasiOptions" :key="lokasi.id" :value="lokasi.id">{{ lokasi.nama }}</option>
        </select>
      </div>

      <!-- Kategori -->
      <div class="form-group">
        <label for="kategori">Kategori</label>
        <select id="kategori" v-model="form.kategori_id" required>
          <option v-for="kategori in kategoriOptions" :key="kategori.id" :value="kategori.id">{{ kategori.nama }}</option>
        </select>
      </div>

      <!-- Deskripsi -->
      <div class="form-group">
        <label for="deskripsi">Deskripsi</label>
        <textarea id="deskripsi" v-model="form.deskripsi" placeholder="Enter product description" required></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.sell-product-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, select, textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
