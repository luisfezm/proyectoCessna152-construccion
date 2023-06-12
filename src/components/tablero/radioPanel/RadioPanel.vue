<template>
  <div class="radioPanel">
    <Comm1 />
    <Comm1 />
    <Comm1 />
    <Comm1 />
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
