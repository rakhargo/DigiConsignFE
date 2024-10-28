<template>
    <div class="loading-bar-wrapper">
      <div class="loading-bar" :style="{ width: `${progress}%` }"></div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: "LoadingBarComponent",
    props: {
      progress: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  };
  </script>
  
  <style scoped>
  .loading-bar {
    height: 5px;
    background-color: white;
    transition: width 0.1s linear;
  }
  .loading-bar-wrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%; 
    height: 5px;
    background-color: #333;
    border-radius: 5px;
    overflow: hidden;
  }
  </style>
  