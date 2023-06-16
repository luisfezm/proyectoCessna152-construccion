<template>
  <div class="indicadorMainPanel">
    <Attitude :size="70" :pitch="0" :roll="0" />
  </div>
</template>

<script>
  import { Attitude } from 'vue-flight-indicators'

  export default {
    name: 'IndicadorMainPanel',
    components: {
      Attitude,
    },
  }
</script>
