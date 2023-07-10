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
          <PrimerBoton />
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
  import PrimerBoton from './components/tablero/mainPanel/PrimerBoton.vue'
  import IgnitionSwitch from './components/tablero/mainPanel/IgnitionSwitch.vue'
  import MainPanel from './components/tablero/mainPanel/MainPanel.vue'
  import RadioPanel from './components/tablero/radioPanel/RadioPanel.vue'
  import RightHandPanel from './components/tablero/rightHandPanel/RightHandPanel.vue'
  import MiTerreno from './components/terreno/MiTerreno.vue'
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
      PrimerBoton,
      IgnitionSwitch,
    },
    data() {
      return {
        mixture: 0,
        throttle: 0,
        plane_surface: 0,
        air_density: 0,
        air_resistance: 0,
        motor_strength: 0,
        potencia: 0,
        V: 0,
        angulo_avion: 0,
        coordenadas_actuales: {
          latitud: 0,
          longitud: 0,
        },
      }
    },
    created() {
      store.dispatch('setPeso', 500)
      setInterval(this.update, 100) // 100 ms = 0.1 segundos
    },
    methods: {
      update() {
        this.coordenadas_actuales.longitud = store.getters.longitud
        this.coordenadas_actuales.latitud = store.getters.latitud
        this.angulo_avion = store.getters.getHeadingIndicator
        this.mixture = store.getters.getEstadoMixture
        console.log('mixture:', this.mixture)
        this.throttle = store.getters.getThrottleDepth
        this.plane_surface = store.getters.plane_surface
        this.air_resistance = store.getters.air_resistance
        this.air_density = store.getters.air_density
        this.motor_strength = store.getters.motor_strenght

        this.potencia =
          (((this.throttle / 100) * this.mixture) / 10) * this.motor_strength
        this.V = Math.sqrt(
          ((2 * this.potencia) / 0.5) *
            (this.air_density * this.plane_surface * this.air_resistance)
        )
        console.log('velocidad:' + this.V)
        this.calcularVelocidadDespuesDeRotacion(this.V, this.angulo_avion)
        console.log('velX:', store.getters.velocidad_x)
        console.log('velY:', store.getters.velocidad_y)
        // actualizar posicion
        this.calcularNuevaPosicion(this.V, this.angulo_avion, 0.1)

        console.log(
          'posicion_actual: ',
          store.getters.latitud,
          ',',
          store.getters.longitud
        )
      },
      // Función auxiliar para convertir grados a radianes
      toRadians(degrees) {
        return degrees * (Math.PI / 180)
      },

      // Función auxiliar para convertir radianes a grados
      toDegrees(radians) {
        return radians * (180 / Math.PI)
      },
      calcularVelocidadDespuesDeRotacion(velocidad, angulo) {
        // Convertir el ángulo de grados a radianes
        var anguloRadianes = (angulo * Math.PI) / 180
        // Calcular las componentes x e y de la velocidad después de la rotación
        var velocidadX = velocidad * Math.sin(anguloRadianes)
        var velocidadY = velocidad * Math.cos(anguloRadianes)
        store.dispatch('setVelocidadY', velocidadY)
        store.dispatch('setVelocidadX', velocidadX)
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
        store.dispatch('setLatitud', nuevaLatitud)
        store.dispatch('setLongitud', nuevaLongitud)
      },
    },
  }
</script>

<style src="./style.css">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style>
