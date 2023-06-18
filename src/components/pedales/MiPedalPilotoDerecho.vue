<template>
  <div>
    <button
      class="pedal"
      role="button"
      @mousedown="presionarPedalDerecho"
      @mouseup="soltarPedalDerecho"
      @mouseleave="soltarPedalDerecho"
    />
    <p>Movimiento del pedal derecho: {{ movPedalDerecha }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        intervalId: null,
        resetTimeoutId: null,
      }
    },
    computed: {
      movPedalDerecha() {
        return this.$store.getters.movPedalDerecha
      },
    },
    methods: {
      presionarPedalDerecho() {
        clearTimeout(this.resetTimeoutId)
        this.resetTimeoutId = null

        if (!this.intervalId) {
          this.intervalId = setInterval(() => {
            this.$store.dispatch('incrementarMovPedalDerecha')
          }, 100) // Ejecuta la función cada 100 ms mientras el botón esté presionado
        }
      },
      soltarPedalDerecho() {
        clearInterval(this.intervalId)
        this.intervalId = null

        if (!this.resetTimeoutId) {
          this.resetTimeoutId = setTimeout(() => {
            this.$store.dispatch('resetMovPedalDerecha')
            this.resetTimeoutId = null
          }, 1000) // Ejecuta la función después de 1 segundo (1000 ms) de haber soltado el botón
        }
      },
    },
  }
</script>

<style scoped>
  .pedal {
    height: 45px;
    padding: 10px 20px;
    border: none;
    background-color: #f2f2f2;
    border-radius: 0;
    display: block;
    transition: transform 0.3s;
    background-color: #0d0d0d;
  }

  .pedal:active {
    transform: perspective(200px) rotateX(40deg);
  }
</style>
