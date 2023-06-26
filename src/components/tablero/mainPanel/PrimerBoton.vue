<template>
  <div class="base">
    <div
      :class="['palanca', { active: estadoPalanca }]"
      @mousedown="cambiarEstadoPalanca"
      @mouseup="cambiarEstadoPalanca"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        estadoPalanca: false,
      }
    },
    methods: {
      cambiarEstadoPalanca() {
        this.estadoPalanca = !this.estadoPalanca
      },
    },
  }
</script>

<style>
  .base {
    width: 100px;
    height: 100px;
    background-color: black;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .palanca {
    width: 60px;
    height: 60px;
    background-color: silver;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .active {
    transform: scale(0.8);
  }
</style>
