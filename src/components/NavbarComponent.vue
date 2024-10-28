<template>
    <nav class="navbar">
      <div class="navbar-left">
        <h1 class="navbar-title">Digi Consign</h1>
      </div>
      <div class="navbar-right">
        <button class="cart-button">
          <!-- <i class="fas fa-shopping-cart"></i> -->
          <!-- <span class="cart-count">3</span> -->
        </button>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  export default {
    name: "NavbarComponent"
  };
  </script>
  
  <style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
  }
  
  .navbar-title {
    font-size: 24px;
    font-weight: bold;
  }
  
  .cart-button {
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    position: relative;
  }
  
  /* .cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: red;
    color: #fff;
    font-size: 12px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  } */
  </style>
  