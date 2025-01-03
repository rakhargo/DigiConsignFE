<script lang="ts" setup>
  import { RouterLink } from 'vue-router';
  import { onMounted, ref } from 'vue';


  const isLoggedIn = ref(false);

  onMounted(() => {
    const token = localStorage.getItem('token');
    isLoggedIn.value = !!token;
    console.log(token);
  });
</script>

<template>
<header>
      <nav class="myNav navbar navbar-expand-lg fixed-top bg-black">
        <div class="container">
          <RouterLink class="navbar-brand brand-name" id="brand-text" to="/">Digi Consign</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li v-if="isLoggedIn" class="nav-item">
                <RouterLink class="nav-link mt-1" aria-current="page" to="/sell">Jual Produk</RouterLink>
              </li>
              <li class="nav-item dropdown">
                <RouterLink v-if="!isLoggedIn" class="nav-link btn bg-white text-dark" to="/login">Log in</RouterLink>
                <a v-if="isLoggedIn" class="nav-link my-auto" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class='bx bxs-user-circle fs-2'></i></a>
                <ul class="dropdown-menu">
                  <li><RouterLink class="dropdown-item" to="/profile">Profile</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/logout">Logout</RouterLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          </header>
</template>

<style scoped>
.brand-name{
  font-family: 'Orbitron', sans-serif;
}

#brand-text{
    font-size: 26px;
    color: #fff;
}

.myNav{
    z-index: 10;
    width: 100%;
    transition: background-color 0.3s;
}

.myNav .nav-link{
    color:#fff;
}

.myNav .nav-link:hover{
    color:#afafaf;
}

.myNav .navbar-toggler{
    background: #fff;
}

.myNav .nav-link:focus{
    color:#fff;
}

.myNav .nav-link.active{
    color:#fff;
}

.bg-black {
  background-color: black !important;
}
</style>
