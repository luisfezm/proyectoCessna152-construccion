<template>
  <div class="terreno">
    <div class="terrenoIzquierda">
      <MiMapa />
      <!-- Esta es la parte izquierda de la vista del vuelo, deben colocar aquí el componente que creen -->
    </div>

    <div class="vistaPrimeraPersona">
      <h1 />
    </div>

    <div class="terrenoDerecha">
      <!-- Esta es la parte derecha de la vista del vuelo, deben colocar aquí el componente que creen -->
      <TopView />
      <frontView />
    </div>
  </div>
</template>

<script>
  import MiMapa from '@/components/miniMapa/MiniMapa.vue'
  import frontView from './frontView.vue'
  import TopView from './TopView.vue'

  export default {
    components: {
      MiMapa,
      frontView,
      TopView,
    },
  }
</script>

<style>
  .vistaPrimeraPersona {
    height: 300px;
    width: 1300px;
    background-color: black;
  }
</style>
