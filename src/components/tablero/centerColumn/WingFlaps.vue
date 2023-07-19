<template>
  <div
    id="miDiv"
    class="WingFlaps"
    :class="{ grabbing: isDragging }"
    @mousedown="startDrag"
    @mouseup="stopDrag"
    @mousemove="handleDrag"
  >
    <img
      ref="image"
      src="@\assets\rectangle.png"
      :style="{
        transform: `translateY(${currentTranslationY}px)`,
        width: '100%',
        height: '10%',
        marginTop: '-30px',
        position: 'relative',
      }"
      draggable="false"
    />
    <div class="title">
      {{ currentTranslationY }}
    </div>
    <!--<div class="velocidad">Velocidad: {{ velocidad }}</div>-->
  </div>
</template>

<script>
  import store from '../../../store'

  export default {
    data() {
      return {
        startX: 0,
        startY: 0,
        isDragging: false,
        translationMultiplier: 1, // Factor de desplazamiento vertical
        lastTranslationY: 0, // Última posición de desplazamiento vertical
        currentTranslationY: 0, // Desplazamiento vertical actual
        wingFlapsAngle: 0, // Variable para controlar el ángulo de los wingflaps
        velocidad: 0, // Variable para almacenar la velocidad calculada
      }
    },
    watch: {
      wingFlapsAngle: {
        handler: 'actualizarVelocidad', // Llama al método actualizarVelocidad cuando cambie el ángulo
      },
    },
    methods: {
      startDrag(event) {
        event.preventDefault() // Evita el arrastre predeterminado de la imagen
        this.startX = event.clientX
        this.startY = event.clientY
        this.isDragging = true
        window.addEventListener('mouseup', this.stopDrag)
      },
      stopDrag() {
        this.isDragging = false
        this.lastTranslationY = this.currentTranslationY
        window.removeEventListener('mouseup', this.stopDrag)
      },
      handleDrag(event) {
        if (this.isDragging) {
          const currentY = event.clientY
          const diffY = currentY - this.startY

          //const translationFactor = 1; // Factor de desplazamiento
          let newTranslationY =
            this.lastTranslationY + diffY * this.translationMultiplier

          const maxTranslationY = 30 // Límite máximo de desplazamiento hacia abajo
          const minTranslationY = 0 // Límite máximo de desplazamiento hacia arriba

          newTranslationY = Math.max(
            minTranslationY,
            Math.min(maxTranslationY, newTranslationY)
          )

          const nextTranslationY = newTranslationY
          this.currentTranslationY = Math.max(
            minTranslationY,
            Math.min(maxTranslationY, nextTranslationY)
          )

          this.wingFlapsAngle = this.currentTranslationY // Actualiza el ángulo de los wingflaps

          this.$refs.image.style.transform = `translateY(${this.currentTranslationY}px)`
        }
      },
      // Función para calcular la velocidad según el ángulo de los wingflaps
      calcularNuevaVelocidad(angulo) {
        const velocidadActual = store.getters.velocidad // Velocidad actual del avión (ajustar según necesidades), STORE
        console.log(velocidadActual)
        if (angulo === 0) {
          return velocidadActual * 0.05
        } else if (angulo === 10) {
          return velocidadActual * 0.15
        } else if (angulo === 20) {
          return velocidadActual * 0.25
        } else if (angulo === 30) {
          return velocidadActual * 0.35
        } else {
          return null
        }
      },

      // Método para actualizar la velocidad cuando cambie el ángulo de los wingflaps
      actualizarVelocidad() {
        let velocidad = this.calcularNuevaVelocidad(this.wingFlapsAngle)
        //console.log('Nueva velocidad:', velocidad)
        store.dispatch('setVelocidad', velocidad) // Actualiza la velocidad en el STORE
      },
    },
  }
</script>

<style>
  .WingFlaps {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(69, 69, 69);
    width: 35%;
    height: 60%;
    border-radius: 5%;
    margin: auto;
    position: relative;
    cursor: grab;
  }

  .WingFlaps.grabbing {
    cursor: grabbing;
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: bold;
    color: white;
  }
  /*
  .velocidad {
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
    margin-right: 10px;
  }
  */
</style>
