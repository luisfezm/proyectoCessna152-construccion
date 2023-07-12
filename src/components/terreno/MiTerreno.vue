<template>
  <div class="terreno">
    <div class="terrenoIzquierda">
      <MiMapa ref="miMapaRef" />
      <!-- Esta es la parte izquierda de la vista del vuelo, deben colocar aquí el componente que creen -->
    </div>

    <div class="vistaPrimeraPersona">
      <VistaPrimeraPersona />
    </div>

    <div class="terrenoDerecha">
      <!-- Esta es la parte derecha de la vista del vuelo, deben colocar aquí el componente que creen -->

      <frontView />
    </div>
  </div>
</template>

<script>
  import MiMapa from '@/components/miniMapa/MiniMapa.vue'
  import frontView from './frontView.vue'

  import VistaPrimeraPersona from './VistaPrimeraPersona.vue'
  import store from '@/store'
  export default {
    components: {
      MiMapa,
      frontView,

      VistaPrimeraPersona,
    },
    created() {
      setInterval(this.uptate, 0.1)
    },
    methods: {
      uptate() {
        const miMapaComponent = this.$refs.miMapaRef
        miMapaComponent.actualizarMapa(
          store.getters.latitud,
          store.getters.longitud
        )
      },
    },
  }
</script>

<style>
  .vistaPrimeraPersona {
    height: 300px;
    width: 900px;
  }
</style>
