<template>
  <div class="indicadorMainPanel">
    <Heading :size="70" :heading="headingValue" />
  </div>
</template>

<script>
  import { Heading } from 'vue-flight-indicators'

  export default {
    name: 'IndicadorMainPanel',
    components: {
      Heading,
    },
    computed: {
      headingValue: {
        get() {
          return this.$store.getters.getHeadingIndicator
        },
      },
    },
  }
</script>
