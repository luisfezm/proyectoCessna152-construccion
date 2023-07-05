<template>
  <div class="rightHandPanel">
    <div class="right-top">
      <Tachometer />
      <ADFNeddle :angle="adfNeedleValue" />

    </div>
    <div class="right-bottom">
      <FlightHourRecorder />
       <div class="indicadorRightADF">
         <adfRadio
           ref="adfRadioComponent"
           @adfNeedleChange="handleAdfNeedleChange"
          />
       </div>
    </div>
    
    
  </div>
</template>

<script>
  
import ADFNeddle from '@/components/tablero/rightHandPanel/AdfNeddle.vue'
import FlightHourRecorder from '@/components/tablero/rightHandPanel/FlightHourRecorder.vue'
import Tachometer from '@/components/tablero/rightHandPanel/MiTachometer.vue'
import adfRadio from '@/components/tablero/rightHandPanel/adfRadio.vue'

  export default {
    components: {
      Tachometer,
      ADFNeddle,
      adfRadio,
      FlightHourRecorder,
     
    },
    data() {
      return {
        adfNeedleValue: 0,
      }
    },
    methods: {
      handleAdfNeedleChange(newValue) {
        this.adfNeedleValue = newValue
      },
    },
  }
</script>


