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
        //temporal
        angulo_Pitch: 0,
        yoke_pich: 0,
        yoke_roll: 0,

        //usado para probar
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
        VistaPrimeraPersona.methods.funcionVerificar()

        //a futuro cambiar a archivo .js
        //cordenadas de torre

        if (this.coordenadas_actuales.latitud > 400) {
          console.log(
            'oh no hesldkfjaslkdfjdslkajflksdjflkasdfjklsadjf chocado alkfjasdlkfj'
          )
          store.dispatch('alternaChoque')
        }

        this.coordenadas_actuales.longitud = store.getters.longitud
        this.coordenadas_actuales.latitud = store.getters.latitud
        this.angulo_avion = store.getters.getHeadingIndicator
        this.mixture = store.getters.getEstadoMixture / 10
        this.throttle = Math.round(store.getters.getThrottleDepth) / 100
        this.plane_surface = store.getters.plane_surface
        this.air_resistance = store.getters.air_resistance
        this.air_density = store.getters.air_density
        this.motor_strength = store.getters.motor_strenght
        this.throttle = this.throttle.toFixed(2)
        this.potencia = this.throttle * this.mixture * this.motor_strength
        this.potencia = Math.round(this.potencia)
        console.log('potencia', this.potencia)
        this.angulo_Pitch = store.getters.anguloPitch
        this.yoke_pich = store.getters.getEstadoPitch_yoke
        this.yoke_roll = store.getters.getEstadoRoll_yoke
        this.V = Math.sqrt(
          ((2 * this.potencia) / 0.5) *
            (this.air_density * this.plane_surface * this.air_resistance)
        )

        console.log('velocidad:' + this.V)
        store.dispatch('setVelocidad', this.V)
        this.calcularVelocidadDespuesDeRotacion(this.V, this.angulo_avion)

        //valor store
        //store.getters.aanguloPitch

        //valor de prueba
        //this.headAvion

        this.calcularVelocidadAltura(this.V, this.angulo_Pitch)

        //console.log('velX:', store.getters.velocidad_x)
        //console.log('velY:', store.getters.velocidad_y)
        console.log('mati velz:', store.getters.velocidad_z)

        // --------- inicio peligro pruebas quisas colapce despues xd ---------
        // !!!!!!!! peligroso puede colapsar con otra implementacion !!!!!!!!!!
        //actualizar horizonte artificial (nesesario para el picht)

        this.$store.dispatch('actualizar', {
          roll: this.yoke_roll,
          pitch: this.yoke_pich,
        })
        console.log('mati horisonte artificial', this.angulo_Pitch)
        // ---------------- fin peligro pruebas ------------

        //subida
        //console.log('------------------------')
        //console.log('*-*-*velosidad subida: ', store.getters.velocidad_z)
        console.log('mati altura actual', store.getters.altura)

        // actualizar posicion
        this.calcularNuevaPosicion(this.V, this.angulo_avion, 0.1)

        store.dispatch(
          'setAltura',
          store.getters.altura + store.getters.velocidad_z * 0.1
        )
        store.dispatch('setCoordenadas', this.coordenadas_actuales)
        console.log(
          'mati posicion_actual: ',
          store.getters.longitud,
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

      calcularVelocidadAltura(velocidad, anguloVertical) {
        var anguloRadianes = (anguloVertical * Math.PI) / 180
        var velocidadaltura = velocidad * Math.sin(anguloRadianes)

        // if (anguloRadianes < 0 ){
        //   console.log('mati entreee')
        //   //anguloRadianes = anguloRadianes * -1
        //   velocidadaltura = (velocidad * Math.sin(anguloRadianes * -1))
        // }

        console.log('mati velozidad fun z', velocidadaltura)
        console.log('mati rad z', anguloRadianes)
        store.dispatch('setVelocidadZ', velocidadaltura)
      },

      // ---------------------------  Planificasion -----------------------------

      //calcular velocidad para la altura usando formulas simples [mati]

      //usar la funcion anterior modificando de forma estruccturada el store para simular cosas ()

      //trabajar el div para mostrar la vista [opcional]
      //modificar los divs para que no queden espacios

      //crear .vue para visualizar la primera persona

      //mostrar cambios en vista de primera persona (segun altura actual)
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
