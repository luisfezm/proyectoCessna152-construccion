<template>
  <div class="indicadorMainPanel">
    <Heading :size="70" :heading="headingValue" />
  </div>
</template>

<script>
  import { Heading } from 'vue-flight-indicators'

  export default {
    name: 'IndicadorMainPanel',
    components: {
      Heading,
    },
    data() {
      return {
        headingValue: 0, //grados de desviacion que se obtienen como parametro
      }
    },
    methods: {
      moverAvion(estado) {
        if (estado == -1) {
          //El avion esta girando hacia la izquierda
          this.$store.dispatch('actualizar', { roll: -100, pitch: 0 })
          this.headingValue = this.$store.getters.getHeadingIndicator
          console.log('DESVIACION   ' + this.$store.getters.getHeadingIndicator)
        }

        if (estado == 1) {
          //El avion esta girando hacia la derecha

          this.$store.dispatch('actualizar', { roll: 100, pitch: 0 })
          this.headingValue = this.$store.getters.getHeadingIndicator

          console.log('DESVIACION   ' + this.$store.getters.getHeadingIndicator)
        }
        if (this.headingValue >= 25) {
          this.headingValue = 25
        }

        if (this.headingValue <= -25) {
          this.headingValue = -25
        }
      },
    },
  }
</script>
