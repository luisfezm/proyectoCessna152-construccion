<template>
  <div class="indicadorMainPanel">
    <Attitude :size="70" :pitch="pitch" :roll="0" />
  </div>
</template>

<script>
  import { Attitude } from 'vue-flight-indicators'
  import { mapGetters } from 'vuex'

  export default {
    name: 'IndicadorMainPanel',
    components: {
      Attitude,
    },
    computed: {
      ...mapGetters(['getCurrentTranslationY']),
      pitch() {
        return this.getCurrentTranslationY * 0.4 //formula para que el movimiento del pitch sea mas suave
      },
    },
  }
</script>
