<template>
  <div class="rightHandPanel">
    <Tachometer />
    <ADFNeddle />
    <FlightHourRecorder />

    <div class="indicadorRightADF">ADF navigation box</div>
  </div>
</template>

<script>
  import Tachometer from '@/components/tablero/rightHandPanel/MiTachometer.vue'
  import ADFNeddle from '@/components/tablero/rightHandPanel/AdfNeddle.vue'
  import FlightHourRecorder from '@/components/tablero/rightHandPanel/FlightHourRecorder.vue'

  export default {
    components: {
      Tachometer,
      ADFNeddle,
      FlightHourRecorder,
    },
  }
</script>
