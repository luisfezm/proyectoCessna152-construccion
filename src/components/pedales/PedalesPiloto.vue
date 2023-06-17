<template>
  <div class="pedales">
    <PedalIzquierdo />
    <PedalDerecho />
  </div>
</template>

<script>
  import PedalIzquierdo from '@/components/pedales/MiPedalPilotoIzquierdo.vue'
  import PedalDerecho from '@/components/pedales/MiPedalPilotoDerecho.vue'

  export default {
    components: {
      PedalIzquierdo,
      PedalDerecho,
    },
  }
</script>
