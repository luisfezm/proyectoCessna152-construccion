<template>
  <div class="terreno">
    <div class="terrenoIzquierda">
      <MiMapa />
      <!-- soy la parte izquierda del terreno -->
    </div>
    <div class="terrenoDerecha">
      <!-- soy la parte derecha del terreno -->
    </div>
  </div>
</template>

<script>
  import MiMapa from '@/components/miniMapa/MiniMapa.vue'

  export default {
    components: {
      MiMapa,
    },
  }
</script>
