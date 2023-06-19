<template>
  <div class="rightHandPanel">
    <Tachometer />
    <ADFNeddle :angulo="adf_needle" />

    <div class="indicadorRightADF">
      <span class="numeros">{{ primero }}, {{ segundo }}, {{ tercero }}</span>
      <img
        class="primera"
        src="src/assets/tknob.svg"
        alt=""
        @click="modificarPrimero()"
      />
      <img
        class="segunda"
        src="src/assets/tknob.svg"
        alt=""
        @click="modificarSegundo()"
      />
      <img
        class="tercera"
        src="src/assets/tknob.svg"
        alt=""
        @click="modificarTercero()"
      />
    </div>
  </div>
</template>

<script>
  import Tachometer from '@/components/tablero/rightHandPanel/MiTachometer.vue'
  import ADFNeddle from '@/components/tablero/rightHandPanel/AdfNeddle.vue'
  import store from '@/store'
  export default {
    components: {
      Tachometer,
      ADFNeddle,
    },
    data() {
      return {
        adf_needle: 0,
        primero: 0,
        segundo: 0,
        tercero: 0,
        headingIndicatorValue: 0,
        adf_point: 0,
        posicionActual: {
          x: 0,
          y: 0,
        },
        puntoDestino: {
          x: 0,
          y: 0,
        },
      }
    },
    created() {
      // Inicializar el estado del headingIndicator
      this.headingIndicatorValue = store.getters.getHeadingIndicator
      this.adf_point = 0

      // Mostrar el valor del headingIndicator utilizando el getter
      console.log(
        'Valor actual del headingIndicator:',
        this.headingIndicatorValue
      )

      this.actualizarAdfPoint()

      setInterval(this.actualizarAdf, 10)
    },
    methods: {
      calcularAngulo(x1, y1, x2, y2) {
        const deltaX = x2 - x1
        const deltaY = y2 - y1

        const radianes = Math.atan2(deltaY, deltaX)
        let angulo = radianes * (180 / Math.PI)

        // Ajustar el ángulo al sentido de las manecillas del reloj (restar 90 grados)
        angulo -= 90

        // Asegurarse de que el ángulo esté dentro del rango de 0 a 360 grados
        if (angulo < 0) {
          angulo += 360
        } else if (angulo >= 360) {
          angulo %= 360
        }

        return 360 - angulo
      },
      modificarPrimero() {
        this.primero += 1
        this.primero %= 10
        this.actualizarAdfPoint()
      },
      modificarSegundo() {
        this.segundo += 1
        this.segundo %= 10
        this.actualizarAdfPoint()
      },
      modificarTercero() {
        this.tercero += 1
        this.tercero %= 10
        this.actualizarAdfPoint()
      },
      actualizarAdf() {
        this.headingIndicatorValue = store.getters.getHeadingIndicator
        if (this.headingIndicatorValue < 0) {
          this.headingIndicatorValue += 360
        }
        this.adf_needle = this.headingIndicatorValue
      },
      actualizarAdfPoint() {
        this.adf_point = this.primero * 100 + this.segundo * 10 + this.tercero

        //console.log(this.adf_point);
      },
    },
  }
</script>

<style>
  .primera {
    height: 30px;
    transform: translateX(-30px);
  }

  .segunda {
    height: 30px;
    transform: translateX(-20px);
  }

  .tercera {
    height: 30px;
    transform: translateX(-10px);
  }

  .numeros {
    transform: translateY(-30px) translateX(45px);
  }
</style>
