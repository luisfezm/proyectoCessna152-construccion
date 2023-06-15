<template>
  <div class="centerColumnPanel">
    <WingFlaps />
    <MiThrottle />
    <WingFlaps />
    <WingFlaps />
    <WingFlaps />
    <WingFlaps />
  </div>
</template>

<script>
  import WingFlaps from '@/components/tablero/centerColumn/WingFlaps.vue'
  import MiThrottle from '@/components/tablero/centerColumn/MiThrottle.vue'

  export default {
    components: {
      WingFlaps,
      MiThrottle,
    },
  }
</script>
