<script lang="ts" setup>
import { useRouter } from 'vue-router';
import api from '@/api';

const logout = async () => {
  const router = useRouter();
  try {
    // Optional: Call the backend logout endpoint
    await api.post('/api/logout', {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    // Clear local storage and user-related data
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');

    // Redirect to the login page
    router.push('/');
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
logout();
</script>
