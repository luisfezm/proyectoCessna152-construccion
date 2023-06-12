<template>
  <div class="rightHandPanel">
    <Tachometer />
    <ADFNeddle />
    <Tachometer />
    <Tachometer />
    <div class="indicadorRightADF">ADF navigation box</div>
  </div>
</template>

<script>
  import Tachometer from '@/components/tablero/rightHandPanel/MiTachometer.vue'
  import ADFNeddle from '@/components/tablero/rightHandPanel/AdfNeddle.vue'

  export default {
    components: {
      Tachometer,
      ADFNeddle,
    },
  }
</script>
