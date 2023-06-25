<template>
  <div class="frame">
    <div class="numbers">{{ first }},{{ second }},{{ third }}</div>
  </div>
  <img class="first" src="@/assets/adfKnob.svg" alt="" @click="modifyFirst()" />
  <img
    class="second"
    src="@/assets/adfKnob.svg"
    alt=""
    @click="modifySecond()"
  />
  <img class="third" src="@/assets/adfKnob.svg" alt="" @click="modifyThird()" />
</template>
<script>
  import store from '@/store'
  import { searchPoint } from '@/modules/indicadores/adfRadio.js'

  export default {
    emits: ['adfNeedleChange'], // Declaración del evento adfNeedleChange
    data() {
      return {
        adf_needle: 0,
        first: 0,
        second: 0,
        third: 0,
        headingIndicatorValue: 0,
        adf_point: 0,
        currentPosition: {
          x: 0,
          y: 0,
        },
        destinationPoint: {
          x: 0,
          y: 0,
        },
      }
    },
    created() {
      // Inicializar el estado de headingIndicator
      this.headingIndicatorValue = store.getters.getHeadingIndicator
      this.adf_point = 0

      // Mostrar el valor de headingIndicator utilizando el getter
      console.log(
        'Valor actual de headingIndicator:',
        this.headingIndicatorValue
      )

      this.updateAdfPoint()

      setInterval(this.updateAdf, 10)
    },
    methods: {
      calculateAngle(x1, y1, x2, y2) {
        const deltaX = x2 - x1
        const deltaY = y2 - y1

        const radians = Math.atan2(deltaY, deltaX)
        let angle = radians * (180 / Math.PI)

        // Ajustar el ángulo en la dirección de las agujas del reloj (restar 90 grados)
        angle -= 90

        // Asegurarse de que el ángulo esté dentro del rango de 0 a 360 grados
        if (angle < 0) {
          angle += 360
        } else if (angle >= 360) {
          angle %= 360
        }

        return 360 - angle
      },
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
        this.headingIndicatorValue = store.getters.getHeadingIndicator
        if (this.headingIndicatorValue < 0) {
          this.headingIndicatorValue += 360
        }
        let aux = this.calculateAngle(
          this.currentPosition.x,
          this.currentPosition.y,
          this.destinationPoint.x,
          this.destinationPoint.y
        )
        this.adf_needle = aux - this.headingIndicatorValue
        this.$emit('adfNeedleChange', this.adf_needle)
      },
      updateAdfPoint() {
        this.adf_point = this.first * 100 + this.second * 10 + this.third
        let formattedAdfPoint = this.adf_point.toString().padStart(3, '0')
        let foundPoint = searchPoint(formattedAdfPoint)

        if (foundPoint) {
          this.destinationPoint.x = foundPoint.x
          this.destinationPoint.y = foundPoint.y
          console.log('Valor actual de x: ' + this.currentPosition.x)
          console.log('Valor actual de y: ' + this.currentPosition.y)
          console.log('Valor de destino de x: ' + this.destinationPoint.x)
          console.log('Valor de destino de y: ' + this.destinationPoint.y)
        } else {
          console.log('No se encontró ningún punto con el valor especificado')
        }
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
