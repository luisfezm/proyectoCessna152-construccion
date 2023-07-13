<template>
  <div class="app">
    <MiTerreno />

    <div class="tableroSuperior">
      <MainPanel />
      <RadioPanel />
      <RightHandPanel />
    </div>
    <div class="tableroInferior">
      <div class="itemTableroInferior">
        <div class="controlesTableroInferior">
          <IgnitionSwitch />
          <MiYoke />
          <FuelQuantity />
        </div>
        <PedalesPiloto />
      </div>
      <CenterColumn />
      <div class="itemTableroInferior">
        <div class="controlesTableroInferior">
          <MiYoke />
        </div>
        <PedalesCopiloto />
      </div>
    </div>
  </div>
</template>

<script>
  import PedalesCopiloto from './components/pedales/PedalesCopiloto.vue'
  import MiYoke from './components/tablero/inferiorPanel/MiYoke.vue'
  import PedalesPiloto from './components/pedales/PedalesPiloto.vue'
  import CenterColumn from './components/tablero/centerColumn/CenterColumnPanel.vue'
  import FuelQuantity from './components/tablero/mainPanel/FuelQuantity.vue'
  import IgnitionSwitch from './components/tablero/mainPanel/IgnitionSwitch.vue'
  import MainPanel from './components/tablero/mainPanel/MainPanel.vue'
  import RadioPanel from './components/tablero/radioPanel/RadioPanel.vue'
  import RightHandPanel from './components/tablero/rightHandPanel/RightHandPanel.vue'
  import MiTerreno from './components/terreno/MiTerreno.vue'
  import VistaPrimeraPersona from './components/terreno/VistaPrimeraPersona.vue'
  import store from '@/store'

  export default {
    components: {
      PedalesCopiloto,
      PedalesPiloto,
      CenterColumn,
      FuelQuantity,
      MainPanel,
      RadioPanel,
      RightHandPanel,
      MiTerreno,
      MiYoke,
      IgnitionSwitch,
    },
    data() {
      return {
        tiempo: 0.1,
      }
    },
    computed: {
      coordenadas_actuales() {
        return {
          latitud: store.getters.latitud,
          longitud: store.getters.longitud,
        }
      },

      altura() {
        return store.getters.altura
      },

      angulo_avion() {
        return store.getters.getHeadingIndicator
      },
      mixture() {
        return store.getters.getEstadoMixture / 10
      },
      throttle() {
        return Math.round(store.getters.getThrottleDepth) / 100
      },
      plane_surface() {
        return store.getters.plane_surface
      },
      air_resistance() {
        return store.getters.air_resistance
      },
      air_density() {
        return store.getters.air_density
      },
      motor_strength() {
        return store.getters.motor_strenght
      },
      potencia() {
        return Math.round(this.throttle * this.mixture * this.motor_strength)
      },
      V() {
        return Math.sqrt(
          ((2 * this.potencia) / 0.5) *
            (this.air_density * this.plane_surface * this.air_resistance)
        )
      },
      velocidad_x() {
        return this.calcularVelocidadDespuesDeRotacion(
          this.V,
          this.angulo_avion
        ).velocidadX
      },
      velocidad_y() {
        return this.calcularVelocidadDespuesDeRotacion(
          this.V,
          this.angulo_avion
        ).velocidadY
      },

      angulo_pitch() {
        return store.getters.getEstadoPitch_yoke
      },

      angulo_roll() {
        return store.getters.getEstadoRoll_yoke
      },
    },
    created() {
      store.dispatch('setPeso', 500)
    },
    mounted() {
      this.startUpdateInterval()
    },
    beforeUnmount() {
      this.stopUpdateInterval()
    },
    methods: {
      startUpdateInterval() {
        this.updateInterval = setInterval(() => {
          if (store.getters.choque === false) {
            store.dispatch('setVelocidad', this.V)
            this.calcularNuevaPosicion(this.V, this.angulo_avion, this.tiempo)
            this.calcularVelocidadAltura(this.V, this.angulo_pitch)
          }

          VistaPrimeraPersona.methods.funcionVerificar()
          store.dispatch(
            'setAltura',
            store.getters.altura + store.getters.velocidad_z * 0.1
          )
          console.log('altura:', this.altura)

          //despues se movera a una funcion de un js [solo sprint 4]
          if (this.coordenadas_actuales.latitud >= -34.9971013333662) {
            console.log('oh no he chocado ')
            store.dispatch('alternaChoque', true)
          } else {
            console.log(this.coordenadas_actuales.latitud)
            store.dispatch('alternaChoque', false)
          }
        }, 100) // 100 ms = 0.1 segundos
      },
      stopUpdateInterval() {
        clearInterval(this.updateInterval)
      },
      // Función auxiliar para convertir grados a radianes
      toRadians(degrees) {
        return degrees * (Math.PI / 180)
      },
      // Función auxiliar para convertir radianes a grados
      toDegrees(radians) {
        return radians * (180 / Math.PI)
      },

      calcularVelocidadAltura(velocidad, anguloVertical) {
        var anguloRadianes = (anguloVertical * Math.PI) / 180
        var velocidadaltura = velocidad * Math.sin(anguloRadianes)

        store.dispatch('setVelocidadZ', velocidadaltura)
      },

      calcularVelocidadDespuesDeRotacion(velocidad, angulo) {
        // Convertir el ángulo de grados a radianes
        var anguloRadianes = (angulo * Math.PI) / 180
        // Calcular las componentes x e y de la velocidad después de la rotación
        var velocidadX = velocidad * Math.sin(anguloRadianes)
        var velocidadY = velocidad * Math.cos(anguloRadianes)
        return {
          velocidadX,
          velocidadY,
        }
      },

      calcularNuevaPosicion(velocidad, rumbo, tiempo) {
        // Conversión de unidades
        const radioTierra = 6371000 // Radio promedio de la Tierra en metros

        // Convertir latitud y longitud a radianes
        var latitudInicialRad = this.toRadians(
          this.coordenadas_actuales.latitud
        )
        var longitudInicialRad = this.toRadians(
          this.coordenadas_actuales.longitud
        )
        var rumboRad = this.toRadians(rumbo)

        // Calcular desplazamiento angular en longitud (en radianes)
        var deltaLongitud =
          (velocidad * tiempo) / (radioTierra * Math.cos(latitudInicialRad))

        // Calcular desplazamiento angular en latitud (en radianes)
        var deltaLatitud = (velocidad * tiempo) / radioTierra

        // Calcular nueva latitud y longitud
        var nuevaLatitudRad =
          latitudInicialRad + deltaLatitud * Math.cos(rumboRad)
        var nuevaLongitudRad =
          longitudInicialRad + deltaLongitud * Math.sin(rumboRad)

        // Convertir latitud y longitud de radianes a grados
        var nuevaLatitud = this.toDegrees(nuevaLatitudRad)
        var nuevaLongitud = this.toDegrees(nuevaLongitudRad)

        console.log(nuevaLatitud)
        console.log(nuevaLongitud)

        store.dispatch('setLatitud', nuevaLatitud)
        store.dispatch('setLongitud', nuevaLongitud)
      },
    },
  }
</script>

<style src="./style.css">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style>
