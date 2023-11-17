<template>
  <div
    id="indicadorCenterColumnPanel"
    class="knob"
    draggable="false"
    @mousedown="startDrag"
    @mousemove="handleDrag"
  >
    <span class="number">{{ valor }}</span>
    <img
      src="@/assets/knob.svg"
      :style="{
        transform: `scale(${currentScale}) rotate(${currentRotation}deg)`,
      }"
      draggable="false"
    />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import store from '../../../store'

  export default {
    data() {
      return {
        axis: 0,
        startX: 0,
        startY: 0,
        isDragging: false,
        scaleMultiplier: 0.0002, // Factor de escala
        rotationMultiplier: 0.1, // Factor de rotación
        currentScale: 0.9, // Tamaño actual de la imagen
        maxScale: 1, // Límite máximo de escala
        minScale: 0.75, // Límite mínimo de escala
        currentRotation: 0, // Rotación actual en grados
        valor: 0
      }
    },

    mounted(){
      window.addEventListener('keypress', this.girarMixture);
    },


    methods: {

      girarMixture(event){
        if(event.key == 'o' && this.currentRotation != 0){
          this.currentRotation--;
          this.valor += -5;
        }else{
          if(event.key == 'p'){
            this.currentRotation++;
            this.valor += 5;
          }
        }
      },

      ...mapActions(['actualizarBencinaPorHora']),
      startDrag(event) {
        this.startX = event.clientX
        this.startY = event.clientY
        this.isDragging = true
        window.addEventListener('mouseup', this.stopDrag)
      },
      stopDrag() {
        this.isDragging = false
        this.currentScale = this.getCurrentScale()
        this.currentRotation = this.getCurrentRotation()
        window.removeEventListener('mouseup', this.stopDrag)
      },
      handleDrag(event) {
        if (this.isDragging) {
          const currentX = event.clientX
          const diffX = currentX - this.startX
          const currentY = event.clientY
          const diffY = currentY - this.startY

          const scaleFactor = 1 + diffY * this.scaleMultiplier

          let newScale = this.currentScale * scaleFactor
          newScale = Math.max(this.minScale, Math.min(this.maxScale, newScale))

          let newRotation =
            this.currentRotation + diffX * this.rotationMultiplier
          if (newRotation >= 360) {
            newRotation -= 360
          } else if (newRotation < 0) {
            newRotation += 360
          }
          this.currentScale = newScale

          let calculo = 1 - newScale
          if (calculo === 0) {
            this.axis = 0
          } else {
            this.axis = ((calculo * 400) / 10).toFixed(2)
            this.ajustarCombustiblePorHora(this.axis) // llamamos a la función para ajustar el combustible por hora
            this.actualizarBencinaPorHora(this.combustible_por_hora) // llamamos a la función para actualizar el combustible por hora
          }

          this.currentRotation = newRotation
        }
      },
      getCurrentScale() {
        const transformValue = this.$el.querySelector('img').style.transform
        const scaleRegex = /scale\(([0-9.]+)\)/
        const match = scaleRegex.exec(transformValue)

        if (match && match[1]) {
          return parseFloat(match[1])
        }

        return 1
      },
      getCurrentRotation() {
        const transformValue = this.$el.querySelector('img').style.transform
        const rotationRegex = /rotate\((-?[0-9.]+)deg\)/
        const match = rotationRegex.exec(transformValue)

        if (match && match[1]) {
          return parseFloat(match[1])
        }

        return 0
      },
      ajustarCombustiblePorHora(axis) {
        // función para ajustar el combustible por hora
        const combustibleInicial = 6 // combustible por hora inicial en galones por hora, el cessna 154 solo tiene 24,5 galones utilizables.
        const combustibleFinal = 7 // combustible por hora final en galones por hora.

        if (axis < 1 || axis > 10) {
          console.log('El valor de axis debe estar entre 1 y 10.')
          // setear mixture
          store.dispatch('setEstadoMixture', this.axis)
          return
        }

        const variacion = (combustibleFinal - combustibleInicial) / 9
        const combustible_por_hora = combustibleInicial + (axis - 1) * variacion

        console.log('axis:', axis)
        // setear mixture
        store.dispatch('setEstadoMixture', this.axis)
        store.dispatch('actualizarBencinaPorHora', combustible_por_hora)
        console.log('combustible_por_hora:', combustible_por_hora)
      },
    },
  }
</script>

<style>
  .knob {
    /* centrado generico */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: rgb(11, 143, 139);
    width: 80%;
    height: 80%;
    max-height: 80px;
    border-radius: 5%;
    margin: auto;
    position: relative;
  }
</style>
