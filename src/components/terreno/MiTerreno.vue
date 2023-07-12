<template>
  <div class="terreno">
    <div class="terrenoIzquierda">
      <MiMapa ref="miMapaRef" />
      <!-- Esta es la parte izquierda de la vista del vuelo, deben colocar aquí el componente que creen -->
    </div>
    <div class="terrenoDerecha">
      <!-- Esta es la parte derecha de la vista del vuelo, deben colocar aquí el componente que creen -->
      <frontView />
    </div>
  </div>
</template>

<script>
  import MiMapa from '@/components/miniMapa/MiniMapa.vue'
  import FrontView from './frontView.vue'
  import store from '@/store'

  export default {
    components: {
      MiMapa,
      FrontView,
    },
    data() {
      return {
        latitud: null,
        longitud: null,
      }
    },
    computed: {
      latitudStore() {
        return store.getters.latitud
      },
      longitudStore() {
        return store.getters.longitud
      },
    },
    watch: {
      latitudStore(newValue) {
        this.latitud = newValue
        this.update()
      },
      longitudStore(newValue) {
        this.longitud = newValue
        this.update()
      },
    },
    mounted() {
      this.latitud = this.latitudStore
      this.longitud = this.longitudStore
      this.update()
    },
    methods: {
      update() {
        const miMapaComponent = this.$refs.miMapaRef
        miMapaComponent.actualizarMapa(this.latitud, this.longitud)
      },
    },
  }
</script>
