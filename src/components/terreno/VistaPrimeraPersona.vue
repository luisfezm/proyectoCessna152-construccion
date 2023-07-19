<template>
  <div class="img-move-wrapper">
    <!-- <button @click="Vuelo1">vuelo de prueba 1</button> -->

    <img
      id="torre"
      src="https://cdn.discordapp.com/attachments/1104247966946037770/1128939075991257168/edificio.jpg"
      class="img-move img-move-1 img-fluid"
    />

    <img
      id="imagen"
      src="https://cdn.discordapp.com/attachments/791019332346839102/1130661741085339808/imagen0.jpg"
      class="img-move img-move-2 img-fluid"
    />
  </div>
</template>

<script>
  import store from '@/store'
  export default {
    methods: {
      funcionVerificar() {
        var imagen = document.getElementById('imagen')

        var Avionvivo = store.getters.choque
        var precordillera = store.getters.precordillera
        //console.log('vivo avion uwuwuwu', Avionvivo)
        if (Avionvivo === true) {
          console.log('muerte')
          imagen.src =
            'https://cdn.discordapp.com/attachments/791019332346839102/1130661740774957057/explosion.png'
        } else if (precordillera === true) {
          console.log('precordillera')
          imagen.src =
            'https://cdn.discordapp.com/attachments/791019332346839102/1130661741701898332/imagen2.png'
        } else {
          let altura = store.getters.altura
          if (altura === 0) {
            imagen.src =
              'https://cdn.discordapp.com/attachments/791019332346839102/1130661741085339808/imagen0.jpg'
            //console.log('test: inicio')
          } else if (altura > 0) {
            //console.log('test: despegue')
            imagen.src =
              'https://cdn.discordapp.com/attachments/791019332346839102/1130661741412503572/imagen1.jpg'
          }
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
        console.log('muro invisible al llegar -34.9971013333662')

        setTimeout(() => {
          //cambio de valores

          if (store.getters.choque === false) {
            store.dispatch('setEstadoPitch_yoke', 0)
            store.dispatch('setThrottleDepth', 10)
            store.dispatch('setEstadoMixture', 10)
          } else {
            store.dispatch('setEstadoPitch_yoke', 0)
            store.dispatch('setThrottleDepth', 0)
            store.dispatch('setEstadoMixture', 0)
          }

          console.log('------------------')
          console.log('mati inicia movimiento en tierra')
          console.log('trotle: ', store.getters.getThrottleDepth)
          console.log('mixture: ', store.getters.getEstadoMixture)
          console.log('angulo pich: ', store.getters.anguloPitch)
        }, 2000)

        //estado consiguiendo altura
        setTimeout(() => {
          //cambio de valores
          if (store.getters.choque === false) {
            store.dispatch('setEstadoPitch_yoke', 20)
            store.dispatch('setThrottleDepth', 10)
            store.dispatch('setEstadoMixture', 10)
          } else {
            store.dispatch('setEstadoPitch_yoke', 0)
            store.dispatch('setThrottleDepth', 0)
            store.dispatch('setEstadoMixture', 0)
          }

          console.log('------------------')
          console.log('mati conseguir altura')
          console.log('trotle: ', store.getters.getThrottleDepth)
          console.log('mixture: ', store.getters.getEstadoMixture)
          console.log('angulo pich: ', store.getters.anguloPitch)
        }, 4000)

        //estado manteniendo se en el aire
        setTimeout(() => {
          //cambio de valores
          if (store.getters.choque === false) {
            store.dispatch('setEstadoPitch_yoke', 0)
            store.dispatch('setThrottleDepth', 30)
            store.dispatch('setEstadoMixture', 30)
          } else {
            store.dispatch('setEstadoPitch_yoke', 0)
            store.dispatch('setThrottleDepth', 0)
            store.dispatch('setEstadoMixture', 0)
          }

          console.log('------------------')
          console.log('mati baja aire')
          console.log('trotle: ', store.getters.getThrottleDepth)
          console.log('mixture: ', store.getters.getEstadoMixture)
          console.log('angulo pich: ', store.getters.anguloPitch)
        }, 8000)

        //estado bajando hasta colicionar
        setTimeout(() => {
          //cambio de valores

          if (store.getters.choque === false) {
            store.dispatch('setEstadoPitch_yoke', -10)
            store.dispatch('setThrottleDepth', 10)
            store.dispatch('setEstadoMixture', 10)
          } else {
            store.dispatch('setEstadoPitch_yoke', 0)
            store.dispatch('setThrottleDepth', 0)
            store.dispatch('setEstadoMixture', 0)
          }

          console.log('------------------')
          console.log('mati subiendo altura')
          console.log('trotle: ', store.getters.getThrottleDepth)
          console.log('mixture: ', store.getters.getEstadoMixture)
          console.log('angulo pich: ', store.getters.anguloPitch)
        }, 8500)

        setTimeout(() => {
          //cambio de valores
          if (store.getters.choque === false) {
            store.dispatch('setEstadoPitch_yoke', 0)
            store.dispatch('setThrottleDepth', 15)
            store.dispatch('setEstadoMixture', 15)
          } else {
            store.dispatch('setEstadoPitch_yoke', 0)
            store.dispatch('setThrottleDepth', 0)
            store.dispatch('setEstadoMixture', 0)
          }

          console.log('------------------')
          console.log('mati subiendo altura')
          console.log('trotle: ', store.getters.getThrottleDepth)
          console.log('mixture: ', store.getters.getEstadoMixture)
          console.log('angulo pich: ', store.getters.anguloPitch)
        }, 15000)

        setTimeout(() => {
          //cambio de valores
          if (store.getters.choque === false) {
            store.dispatch('setEstadoPitch_yoke', 0)
            store.dispatch('setThrottleDepth', 15)
            store.dispatch('setEstadoMixture', 15)
          } else {
            store.dispatch('setEstadoPitch_yoke', 0)
            store.dispatch('setThrottleDepth', 0)
            store.dispatch('setEstadoMixture', 0)
          }

          console.log('------------------')
          console.log('mati subiendo altura')
          console.log('trotle: ', store.getters.getThrottleDepth)
          console.log('mixture: ', store.getters.getEstadoMixture)
          console.log('angulo pich: ', store.getters.anguloPitch)
        }, 33000)
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
    position: absolute;
  }

  .img-move {
    position: absolute;
  }

  .img-move-1 {
    left: 400px;
    top: 100px;

    visibility: hidden;

    z-index: 1; /* This image will be on top */
  }

  .img-move-2 {
    left: 0px;
    top: 20px;
    z-index: 0;
  }

  .img-move-wrapper {
    position: relative;
    overflow: hidden;
    width: 800px;
    height: 300px;
    /*max-width: 1140px; /* Bootstrap 4 container max-width for extra large devices */
  }

  .edificio_mapa {
    top: 50px; /* Ajusta la posición vertical de la imagen superpuesta */
    left: 50px;
    z-index: 2;
  }

  .vistaAvion {
    position: absolute;
    width: 900px;
    height: 300px;
    z-index: 1;
  }
</style>
