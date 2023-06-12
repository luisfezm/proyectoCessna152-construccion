<template>
  <div class="rightHandPanel">
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
