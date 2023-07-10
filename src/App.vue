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

        headAvion: 9,

        //quisas en el futuro meterlo al avion
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
        // importa el valor de la altura desde el store
        const altura = store.getters.altura
        // si la altura es 0, entonces el avion esta en el suelo (se debería mostrar imagen de despegue)
        if (altura === 0) {
          console.log('altura:', altura)
        } else if (altura > 0) {
          console.log('altura:', altura)
        }

        // importa el valor de la velocidad desde el store
        const Avionvivo = store.getters.Avionvivo
        if (Avionvivo === 0) {
          //aqui hace el mati su cosa rara
        }

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
        console.log('poentecia:' + this.potencia)
        this.calcularVelocidadDespuesDeRotacion(this.V, this.angulo_avion)

        //angulo pich
        //store.getters.anguloroll

        this.calcularVelocidadAltura(this.V, this.headAvion)

        console.log('velX:', store.getters.velocidad_x)
        console.log('velY:', store.getters.velocidad_y)

        //subida
        console.log('*-*-*velosidad subida: ', store.getters.velocidad_z)
        console.log('*-*-*altura actual', store.getters.altura)

        // actualizar posicion
        this.coordenadas_actuales.latitud += store.getters.velocidad_y * 0.1
        this.coordenadas_actuales.longitud += store.getters.velocidad_x * 0.1

        store.dispatch(
          'setAltura',
          store.getters.altura + store.getters.velocidad_z * 0.1
        )

        store.dispatch('setCoordenadas', this.coordenadas_actuales)
        console.log(
          'posicion_actual: ',
          store.getters.longitud,
          ',',
          store.getters.latitud
        )
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

      calcularVelocidadAltura(velocidad, anguloVertical) {
        var anguloRadianes = (anguloVertical * Math.PI) / 180
        var velocidadaltura = velocidad * Math.sin(anguloRadianes)

        store.dispatch('setVelocidadZ', velocidadaltura)
      },

      // ---------------------------  Planificasion -----------------------------

      //calcular velocidad para la altura usando formulas simples [mati]

      //usar la funcion anterior modificando de forma estruccturada el store para simular cosas ()

      //trabajar el div para mostrar la vista [opcional]
      //modificar los divs para que no queden espacios

      //crear .vue para visualizar la primera persona Template, script y style. [tavo]

      //mostrar cambios en vista de primera persona (segun altura actual)
    },
  }
</script>

<style src="./style.css">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style>
