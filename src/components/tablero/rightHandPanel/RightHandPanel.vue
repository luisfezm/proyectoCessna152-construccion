<template>
  <div class="rightHandPanel">
    <Tachometer />
    <ADFNeddle :angle="adfNeedleValue" />

    <div class="indicadorRightADF">
      <adfRadio
        ref="adfRadioComponent"
        @adfNeedleChange="handleAdfNeedleChange"
      />
    </div>
  </div>
</template>

<script>
  import Tachometer from '@/components/tablero/rightHandPanel/MiTachometer.vue'
  import ADFNeddle from '@/components/tablero/rightHandPanel/AdfNeddle.vue'
  import adfRadio from '@/components/tablero/rightHandPanel/adfRadio.vue'

  export default {
    components: {
      Tachometer,
      ADFNeddle,
      adfRadio,
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
