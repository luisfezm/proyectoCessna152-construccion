<template>
  <div class="base">
    <div
      :class="['palanca', { active: estadoPresionado }]"
      @mousedown="presionarBoton"
      @mouseup="soltarBoton"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        estadoPresionado: false,
        estadoPrimer: false,
        contador: 0,
      }
    },
    methods: {
      presionarBoton() {
        this.estadoPresionado = true
      },
      soltarBoton() {
        this.estadoPresionado = false
        this.contador++
        if (this.contador === 5) {
          this.estadoPrimer = !this.estadoPrimer
          this.contador = 0 // Reiniciar el contador después de cambiar el estado
        }
      },
    },
  }
</script>

<style>
  .base {
    width: 80px;
    height: 80px;
    background-color: black;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .palanca {
    width: 50px;
    height: 50px;
    background-color: silver;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .palanca.active {
    transform: scale(0.8);
  }
</style>
