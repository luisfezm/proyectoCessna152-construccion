<template>
  <div class="indicadorMainPanel">
    <Heading :size="70" :heading="heading" />
  </div>
</template>

<script>
  import { Heading } from 'vue-flight-indicators'

  export default {
    name: 'IndicadorMainPanel',
    components: {
      Heading,
    },
  }
</script>
