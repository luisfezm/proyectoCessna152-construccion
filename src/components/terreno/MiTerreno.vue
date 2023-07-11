<template>
  <div class="terreno">
    <div class="terrenoIzquierda">
      <MiMapa />
      <!-- Esta es la parte izquierda de la vista del vuelo, deben colocar aquí el componente que creen -->
    </div>
    <div class="terrenoDerecha">
      <!-- Esta es la parte derecha de la vista del vuelo, deben colocar aquí el componente que creen -->
      <TopView />
      <frontView />
    </div>
    <sideView />
  </div>      
</template>

<script>
  import MiMapa from '@/components/miniMapa/MiniMapa.vue'
  import frontView from './frontView.vue'
  import TopView from './TopView.vue'
  import sideView from './sideView.vue';

  export default {
    components: {
      MiMapa,
      frontView,
      TopView,
      sideView,
    },
  }
</script>

<style lang="scss" scoped>
  .terrenoDerecha {
    margin-left: 46%;
    margin-right: 0;
  }
</style>
