<template>
  <div class="radioPanel">
    <!-- Aquí van los componentes de la radio, se creó como ejemplo el componente COMM1, pero debe quedar solo uno y agregar los otros componentes que se les pidió crear-->
    <Comm1 />
    <Comm1 />
    <Comm1 />
    <Comm1 />
    <!-- Este último div también es un componente, se colocó solo por fines del esqueleto, deben llevarse este div con su clase al componente que se les pidió crear -->
    <div class="indicadorRadioTransponder" />
  </div>
</template>

<script>
  import Comm1 from '@/components/tablero/radioPanel/MiComm1.vue'

  export default {
    components: {
      Comm1,
    },
  }
</script>
