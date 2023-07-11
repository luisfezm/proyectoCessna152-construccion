<template>
  <div class="vistaPP">
    <img
      id="imagen"
      src="src/assets/primerapersona/imagen0.jpg"
      style="width: 900px; height: 300px"
    />
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    methods: {
      funcionVerificar() {
        var imagen = document.getElementById('imagen')
        let altura = store.getters.altura
        if (altura === 0) {
          console.log('test: inicio')
          imagen.src = 'src/assets/primerapersona/imagen0.jpg'
        } else if (altura > 0) {
          console.log('test: despegue')
          imagen.src = 'src/assets/primerapersona/imagen1.jpg'
        }

        const Avionvivo = store.getters.Avionvivo
        if (Avionvivo === 0) {
          // elmati ve esto
        }
      },
    },
  }
</script>

<style scoped>
  .vistaPP {
    width: 300px;
    height: 900px;
    background-size: cover;
    background-position: center;
  }
</style>
