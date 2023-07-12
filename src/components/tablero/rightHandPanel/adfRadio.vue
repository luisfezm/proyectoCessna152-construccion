<template>
  <div class="frame">
    <div class="numbers">{{ first }},{{ second }},{{ third }}</div>
  </div>

  <img class="first" src="@/assets/adfKnob.svg" alt="" @click="modifyFirst" />
  <img class="second" src="@/assets/adfKnob.svg" alt="" @click="modifySecond" />
  <img class="third" src="@/assets/adfKnob.svg" alt="" @click="modifyThird" />
</template>

<script>
  import { searchPoint } from '@/modules/indicadores/adfRadio.js'
  import store from '@/store'

  export default {
    emits: ['adfNeedleChange'], // Declaración del evento adfNeedleChange
    data() {
      return {
        adf_needle: 0,
        first: 0,
        second: 0,
        third: 0,
        adf_point: 0,
        currentPosition: {
          lat: 0,
          lon: 0,
        },
        destinationPoint: {
          lat: 0,
          lon: 0,
        },
      }
    },
    computed: {
      formattedAdfPoint() {
        return this.adf_point.toString().padStart(3, '0')
      },
      foundPoint() {
        return searchPoint(this.formattedAdfPoint)
      },
      calculatedRumbo() {
        const lat1Rad = this.toRadians(this.currentPosition.lat)
        const lon1Rad = this.toRadians(this.currentPosition.lon)
        const lat2Rad = this.toRadians(this.destinationPoint.lat)
        const lon2Rad = this.toRadians(this.destinationPoint.lon)
        const deltaLon = lon2Rad - lon1Rad
        const y = Math.sin(deltaLon) * Math.cos(lat2Rad)
        const x =
          Math.cos(lat1Rad) * Math.sin(lat2Rad) -
          Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(deltaLon)
        let initialBearingRad = Math.atan2(y, x)
        initialBearingRad = this.toDegrees(initialBearingRad)
        const initialBearingDeg = (initialBearingRad + 360) % 360
        return initialBearingDeg.toFixed(2)
      },
      // Computed property for headingIndicatorValue
      headingIndicatorValue() {
        return store.getters.getHeadingIndicator
      },
    },
    watch: {
      adf_point: {
        handler() {
          this.updateAdf()
        },
        deep: true,
      },
      headingIndicatorValue: {
        handler() {
          this.updateAdf()
        },
        deep: true,
      },
      'currentPosition.lat': {
        handler() {
          this.updateAdf()
        },
        deep: true,
      },
      'currentPosition.lon': {
        handler() {
          this.updateAdf()
        },
        deep: true,
      },
    },
    created() {
      this.updateAdfPoint()
    },
    methods: {
      modifyFirst() {
        this.first += 1
        this.first %= 10

        this.updateAdfPoint()
      },
      modifySecond() {
        this.second += 1
        this.second %= 10
        this.updateAdfPoint()
      },
      modifyThird() {
        this.third += 1
        this.third %= 10
        this.updateAdfPoint()
      },
      updateAdf() {
        const aux = this.calculatedRumbo
        console.log('el angulo calculado por las posiciones: ', aux)
        this.adf_needle = aux - this.headingIndicatorValue
        this.$emit('adfNeedleChange', this.adf_needle)
      },
      updateAdfPoint() {
        this.adf_point = this.first * 100 + this.second * 10 + this.third

        this.currentPosition.lat = store.getters.latitud
        this.currentPosition.lon = store.getters.longitud
        if (this.foundPoint) {
          this.destinationPoint.lat = this.foundPoint.latitude
          this.destinationPoint.lon = this.foundPoint.longitude
          console.log('Latitud  Actual  : ' + this.currentPosition.lat)
          console.log('Longitud Actual  : ' + this.currentPosition.lon)
          console.log('Latitud  Destino : ' + this.destinationPoint.lat)
          console.log('Longitud Destino : ' + this.destinationPoint.lon)
        } else {
          console.log('No se encontró ningún punto con el valor especificado')
        }
      },
      toRadians(degrees) {
        return degrees * (Math.PI / 180)
      },
      toDegrees(radians) {
        return radians * (180 / Math.PI)
      },
    },
  }
</script>

<style>
  .first {
    height: 30px;
    transform: translateX(-36px) translateY(15px);
  }

  .second {
    height: 30px;
    transform: translateX(-26px) translateY(15px);
  }

  .third {
    height: 30px;
    transform: translateX(-16px) translateY(15px);
  }

  .numbers {
    position: relative;
    z-index: 2;
    border: 3px solid #000;
    border-radius: 5px;
    color: #223412;
    background-color: #94d457;
    padding: 2px;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .frame {
    position: relative;
    z-index: 1;
    transform: translateY(-20px) translateX(45px);
    border: 3px solid #000;
    border-radius: 5px;
    background-color: #393b39e6;
    padding: 2px;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
</style>
