<template>
  <div class="rightHandPanel">
    <!-- Se colocaron varios componentes de Tachometer, sin embargo, es solo con fines del esqueleto, deben agregar los componentes que se les pidió crear y borrar el resto de componentes Tachometer que están aquí -->
    <Tachometer />
    <Tachometer />
    <Tachometer />
    <Tachometer />
    <div class="indicadorRightADF" />
  </div>
</template>

<script>
  import Tachometer from '@/components/tablero/rightHandPanel/MiTachometer.vue'

  export default {
    components: {
      Tachometer,
    },
  }
</script>
