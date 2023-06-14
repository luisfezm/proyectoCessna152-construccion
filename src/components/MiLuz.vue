<template>
  <div>
    <p>Throttle es: {{ getThrottle }}</p>
    <p>Rpm es: {{ getRpm }}</p>
    <button @click="updateThrottle(50)">Cambiar throttle 50</button>
    <button @click="convertThrottleToRpm(getThrottle)">Transformar</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['getNumero']),
      ...mapGetters(['getThrottle']),
      ...mapGetters(['getRpm']),
    },
    methods: {
      ...mapActions(['updateNumero']),
      ...mapActions(['updateThrottle']),
      ...mapActions(['convertThrottleToRpm']),
    },
  }
</script>
