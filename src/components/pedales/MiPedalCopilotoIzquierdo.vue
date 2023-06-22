<template>
  <div>
    <button
      class="pedal"
      role="button"
      @mousedown="presionarPedalIzquierdo"
      @mouseup="soltarPedalIzquierdo"
      @mouseleave="soltarPedalIzquierdo"
    />
    <!-- <p>Movimiento del pedal izquierdo: {{ movPedalIzquierda }}</p> -->
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
      movPedalIzquierda() {
        return this.$store.getters.movPedalIzq
      },
    },
    methods: {
      presionarPedalIzquierdo() {
        clearTimeout(this.resetTimeoutId)
        this.resetTimeoutId = null

        if (!this.intervalId) {
          this.intervalId = setInterval(() => {
            this.$store.dispatch('incrementarMovPedalIzq')
          }, 100) // Ejecuta la función cada 100 ms mientras el botón esté presionado
        }
      },
      soltarPedalIzquierdo() {
        clearInterval(this.intervalId)
        this.intervalId = null

        if (!this.resetTimeoutId) {
          this.resetTimeoutId = setTimeout(() => {
            this.$store.dispatch('resetMovPedalIzq')
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
