<template>
  <div class="vistaPP">
    kfdjnfdkjndfkjvfkdjnfvkjdfnvkjndfkjvndfkjvndkjf

    <button @click="Vuelo1">Haz clic</button>
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    methods: {
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

<style>
  .vistaPP {
    background-image: url(https://w0.peakpx.com/wallpaper/750/101/HD-wallpaper-car-crash-accident-fire-crash-car.jpg);
    height: 300px;
    width: 900px;
  }
</style>
