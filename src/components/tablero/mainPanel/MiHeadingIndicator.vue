<template>
  <div id="heading">
    <Heading :size="80" :heading="headingValue" />
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
          return -this.$store.getters.getHeadingIndicator
        },
      },
    },
  }
</script>

<style>
  #heading {
    position: relative;
    width: 80px;
    height: 80px;
  }
</style>
