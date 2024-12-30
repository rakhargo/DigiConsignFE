<script lang="ts" setup>
  import { RouterLink } from 'vue-router';
  import { onMounted } from 'vue';

  onMounted(() => {
    const nav = document.querySelector('.myNav');
    if (nav) {
      window.addEventListener('scroll', () => {
        const navHeight = parseFloat(getComputedStyle(nav).height);
        if (window.pageYOffset > (window.innerHeight*0.3 - navHeight)) {
          nav.classList.add('bg-black');
        } else {
          nav.classList.remove('bg-black');
        }
      });
    }
  });
</script>

<template>
<header>
      <nav class="myNav navbar navbar-expand-lg fixed-top">
        <div class="container">
          <RouterLink class="navbar-brand brand-name" id="brand-text" to="/">Digi Consign</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
              </li>
              <li class="nav-item ms-3">
                <RouterLink class="nav-link" to="/create-product">Upload</RouterLink>
              </li>
              <li class="nav-item ms-3">
                <RouterLink class="nav-link btn bg-white text-dark" to="/login">Log in</RouterLink>
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
