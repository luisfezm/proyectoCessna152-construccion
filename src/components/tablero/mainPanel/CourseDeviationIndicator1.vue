<template>
  <div id="indicador">
    <div class="cdi-container">
      <div class="cdi">
        <div
          class="cdi-needle"
          :style="`transform: rotate(${agujaRotacion}deg);`"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { searchPoint } from '@/modules/indicadores/adfRadio.js'
  import store from '@/store'
  export default {
    data() {
      return {
        agujaRotacion: 0, //grados
        //coordenadaDestino: '-33.45694, -70.64827', //coordenadas tipo (x,y)
        //coordenadaActual: '-34.17083, -70.74444', //coordenadas tipo (x,y)
        currentPosition: {
          lat: 0,
          lon: 0,
        },
        destinationPoint: {
          lat: 0,
          lon: 0,
        },
        //coordenadas Curico: -34.98279, -71.23943
        //coordenadas Rancagua: -34.17083, -70.74444
        //coordenadas Santiago: -33.45694, -70.64827
      }
    },
    created() {
      this.currentPosition.lat = store.getters.latitud
      this.currentPosition.lon = store.getters.longitud
      let foundPoint = searchPoint(store.getters.puntoADF)
      if (foundPoint) {
        this.destinationPoint.lat = foundPoint.latitude
        this.destinationPoint.lon = foundPoint.longitude
        console.log('Latitud  Actual  C: ' + this.currentPosition.lat)
        console.log('Longitud Actual  C: ' + this.currentPosition.lon)
        console.log('Latitud  Destino C: ' + this.destinationPoint.lat)
        console.log('Longitud Destino C: ' + this.destinationPoint.lon)
      }
      setInterval(this.updateCourse, 10)
    },
    mounted() {
      // Simulación de actualización en tiempo real
      setInterval(() => {
        // Calcular la desviación en los ejes x e y
        const desviacionX = this.destinationPoint.lat - this.currentPosition.lat
        const desviacionY = this.destinationPoint.lon - this.currentPosition.lon
        console.log('Desviación X : ', desviacionX)
        console.log('Desviación Y : ', desviacionY)
        // Calcular el rumbo en radianes
        const angulo = Math.atan2(desviacionY, desviacionX)

        // Convertir el rumbo de radianes a grados y limitarlo a un rango de 0 a 360 grados
        const limitarAngulo = ((angulo * 180) / Math.PI + 360) % 360

        // Calcular la posición angular de la aguja del CDI
        this.agujaRotacion = -limitarAngulo
      }, 100)
    },
    methods: {
      updateCourse() {
        this.currentPosition.lat = store.getters.latitud
        this.currentPosition.lon = store.getters.longitud
        let foundPoint = searchPoint(store.getters.puntoADF)
        console.log('Store Getter  : ', store.getters.puntoADF)
        console.log('Store Getter  : ', foundPoint)
        if (foundPoint) {
          this.destinationPoint.lat = foundPoint.latitude
          this.destinationPoint.lon = foundPoint.longitude
          console.log('ASLatitud  Actual  C: ' + this.currentPosition.lat)
          console.log('ASLongitud Actual  C: ' + this.currentPosition.lon)
          console.log('ASLatitud  Destino C: ' + this.destinationPoint.lat)
          console.log('ASLongitud Destino C: ' + this.destinationPoint.lon)
        }
      },
      updateHeading() {
        this.coordenadaActual = this.coordenadaDestino
      },
    },
  }
</script>

<style scoped>
  .cdi-container {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://i.ibb.co/GHdM8K5/cdi.png');
    background-size: cover;
    background-position: center;
  }

  .cdi {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: relative;
  }

  .cdi-needle {
    width: 2px;
    height: 100%;
    background-color: red;
    position: absolute;
    top: 0;
    left: 50%;
    transform-origin: top center;
    transition: transform 0.2s ease;
  }

  #indicador {
    margin-left: 2%;
    margin-top: 1%;
    width: 80px;
    height: 80px;
  }
</style>
