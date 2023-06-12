<template>
  <div class="pedales">
    <!-- Estos componentes se borran y agregan los que crean ustedes -->
    <Pedal />
    <Pedal />
  </div>
</template>

<script>
  import Pedal from '@/components/pedales/MiPedal.vue'

  export default {
    components: {
      Pedal,
    },
  }
</script>
