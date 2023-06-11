<!-- App.vue -->
<template>
  <div id="app">
    <div class="content">
      <h1>Proyecto Construcción de Software - Vuejs + Vuex + Vite</h1>
      <h2>Además usa Husky, Conventional Commits, ESLint + Prettier</h2>
      <panel />
    </div>
  </div>
</template>

<script setup>
  import Panel from '@/components/Panel.vue'
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f0f0f0;
    font-family: 'Roboto', sans-serif;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>
