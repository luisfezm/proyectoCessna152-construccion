<template>
  <div>
    <button
      class="pedal"
      role="button"
      :style="{
        'background-image': `url(${pedalImage})`,
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        'background-color': '#2b2b2b',
      }"
      @mousedown="presionarPedalDerecho"
      @mouseup="soltarPedalDerecho"
      @mouseleave="soltarPedalDerecho"
    />
    <!-- <p>Movimiento del pedal derecho: {{ movPedalDerecha }}</p> -->
  </div>
</template>

<script>
  import store from '@/store'
  import pedalImage from '@/assets/img/pedal.png'
  export default {
    data() {
      return {
        pedalImage,
        intervalId: null,
        resetTimeoutId: null,
      }
    },
    computed: {
      movPedalDerecha() {
        return store.getters.movPedalDerecha
      },
    },
    methods: {
      presionarPedalDerecho() {
        clearTimeout(this.resetTimeoutId)
        this.resetTimeoutId = null

        if (!this.intervalId) {
          this.intervalId = setInterval(() => {
            store.dispatch('incrementarMovPedalDerecha')
            store.dispatch(
              'calcularHeadingIndicator',
              store.getters.movPedalDerecha
            )
          }, 100) // Ejecuta la función cada 100 ms mientras el botón esté presionado
        }
      },
      soltarPedalDerecho() {
        clearInterval(this.intervalId)
        this.intervalId = null

        if (!this.resetTimeoutId) {
          this.resetTimeoutId = setTimeout(() => {
            store.dispatch('resetMovPedalDerecha')
            this.resetTimeoutId = null
          }, 1000) // Ejecuta la función después de 1 segundo (1000 ms) de haber soltado el botón
        }
      },
    },
  }
</script>

<style scoped>
  .pedal {
    background-image: url('~@/assets/img/pedal.png');
    background-size: contain;
    height: 45px;
    padding: 10px 20px;
    border: none;
    /*background-color: #f2f2f2;*/
    border-radius: 0;
    display: block;
    transition: transform 0.3s;
    /*background-color: #0d0d0d;*/
  }

  .pedal:active {
    transform: perspective(200px) rotateX(40deg);
  }
</style>
