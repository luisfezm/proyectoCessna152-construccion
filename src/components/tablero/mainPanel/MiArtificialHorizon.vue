<template>
  <div class="indicadorMainPanel">
    <Attitude :size="70" :pitch="30" :roll="50" />
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
