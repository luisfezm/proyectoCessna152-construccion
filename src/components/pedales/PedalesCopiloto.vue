<template>
  <div class="pedales">
    <PedalIzquierdo />
    <PedalDerecho />
  </div>
</template>

<script>
  import PedalIzquierdo from '@/components/pedales/MiPedalCopilotoIzquierdo.vue'
  import PedalDerecho from '@/components/pedales/MiPedalCopilotoDerecho.vue'

  export default {
    components: {
      PedalIzquierdo,
      PedalDerecho,
    },
  }
</script>
