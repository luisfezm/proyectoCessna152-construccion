<template>
  <div class="vistaPP">
    <img
      id="imagen"
      src="src/assets/primerapersona/imagen0.jpg"
      style="width: 900px; height: 300px"
    />
    <button @click="Vuelo1">Haz clic</button>
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
        } else if (altura > 0) {
          imagen.src = 'src/assets/primerapersona/imagen0.jpg'
          console.log('test: despegue')
          imagen.src = 'src/assets/primerapersona/imagen1.jpg'
        }

        const Avionvivo = store.getters.Avionvivo
        if (Avionvivo === 0) {
          // elmati ve esto
        }
      },
      //vuelo en linea recta
      Vuelo1() {
        //los timer se ejecutan al mismo tiempo

        //variables del store a modificar
        //trotle      (potencia)                |store.getters.getThrottleDepth   | setThrottleDepth
        //mixture  (potencia)                   |store.getters.getEstadoMixture   | setEstadoMixture
        //angulo subida  (artificial horizon)   |store.getters.anguloPitch        | no usado xd
        //modificar yoke pich                   |

        //estado inicial: iniciando despegue
        console.log('inicia el vuelo predefinido 1- Pasos:')
        console.log('1.- gana velocidad en tierra')
        console.log('2.- gana altura hasta x punto')
        console.log('3.- mantendra el vuelo')
        console.log('4.- chocara y explotara')

        setTimeout(() => {
          //cambio de valores
          store.dispatch('setEstadoPitch_yoke', 0)
          store.dispatch('setThrottleDepth', 10)
          store.dispatch('setEstadoMixture', 10)

          console.log('------------------')
          console.log('mati inicia movimiento en tierra')
          console.log('trotle: ', store.getters.getThrottleDepth)
          console.log('mixture: ', store.getters.getEstadoMixture)
          console.log('angulo pich: ', store.getters.anguloPitch)
        }, 2000)

        //estado consiguiendo altura
        setTimeout(() => {
          //cambio de valores
          store.dispatch('setEstadoPitch_yoke', 10)
          store.dispatch('setThrottleDepth', 10)
          store.dispatch('setEstadoMixture', 10)

          console.log('------------------')
          console.log('mati conseguir altura')
          console.log('trotle: ', store.getters.getThrottleDepth)
          console.log('mixture: ', store.getters.getEstadoMixture)
          console.log('angulo pich: ', store.getters.anguloPitch)
        }, 3000)

        //estado manteniendo se en el aire
        setTimeout(() => {
          //cambio de valores
          store.dispatch('setEstadoPitch_yoke', -30)
          store.dispatch('setThrottleDepth', 10)
          store.dispatch('setEstadoMixture', 10)

          console.log('------------------')
          console.log('mati baja aire')
          console.log('trotle: ', store.getters.getThrottleDepth)
          console.log('mixture: ', store.getters.getEstadoMixture)
          console.log('angulo pich: ', store.getters.anguloPitch)
        }, 4000)

        //estado bajando hasta colicionar
        setTimeout(() => {
          //cambio de valores
          store.dispatch('setEstadoPitch_yoke', 70)
          store.dispatch('setThrottleDepth', 10)
          store.dispatch('setEstadoMixture', 10)

          console.log('------------------')
          console.log('mati subiendo altura')
          console.log('trotle: ', store.getters.getThrottleDepth)
          console.log('mixture: ', store.getters.getEstadoMixture)
          console.log('angulo pich: ', store.getters.anguloPitch)
        }, 13000)
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
