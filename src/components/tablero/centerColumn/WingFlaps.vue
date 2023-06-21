<template>
  <div class="divGeneral">
    <h6 style="width: 10%; font-size: 65%; word-wrap: break-word">Wingflaps</h6>
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
        src="src\assets\rectangle.png"
        :style="{
          transform: `translateY(${currentTranslationY}px)`,
          width: '100%',
          height: '10%',
        }"
        draggable="false"
      />
      <div class="title">
        {{ currentTranslationY }}
      </div>
    </div>
    <div
      id="miDiv"
      class="WingFlapsAngle"
      :class="{ grabbingAngle: isDraggingAngle }"
      @mousedown="startDragAngle"
      @mouseup="stopDragAngle"
      @mousemove="handleDragAngle"
    >
      <img
        ref="imageAngle"
        src="src\assets\rectangle.png"
        :style="{
          transform: `translateY(${currentTranslationYAngle}px)`,
          width: '100%',
          height: '10%',
        }"
        draggable="false"
      />
      <div class="title">
        {{ currentTranslationYAngle }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        startX: 0,
        startY: 0,
        startXAngle: 0,
        startYAngle: 0,
        isDragging: false,
        isDraggingAngle: false,
        translationMultiplier: 1, // Factor de desplazamiento vertical
        lastTranslationY: 0, // Última posición de desplazamiento vertical
        currentTranslationY: 0, // Desplazamiento vertical actual
        translationMultiplierAngle: 1, // Factor de desplazamiento vertical
        lastTranslationYAngle: 0, // Última posición de desplazamiento vertical
        currentTranslationYAngle: 0, // Desplazamiento vertical actual
        velocity: 100,
      }
    },
    methods: {
      startDragAngle(event) {
        event.preventDefault() // Evita el arrastre predeterminado de la imagen
        this.startXAngle = event.clientX
        this.startYAngle = event.clientY
        this.isDraggingAngle = true
      },
      stopDragAngle() {
        this.isDraggingAngle = false
        this.lastTranslationYAngle = this.currentTranslationYAngle // Guardar la última posición al soltar la imagen
      },
      handleDragAngle(event) {
        if (this.isDraggingAngle) {
          const currentY = event.clientY
          const diffY = currentY - this.startYAngle

          const translationFactor = 5 // Factor de desplazamiento
          let newTranslationY = diffY * translationFactor

          const maxTranslationY = 60 // Límite máximo de desplazamiento hacia arriba
          const minTranslationY = 0 // Límite máximo de desplazamiento hacia abajo

          newTranslationY = Math.max(
            minTranslationY,
            Math.min(maxTranslationY, newTranslationY)
          )

          const nextTranslationY = this.lastTranslationYAngle + newTranslationY
          this.currentTranslationYAngle = Math.max(
            minTranslationY,
            Math.min(maxTranslationY, nextTranslationY)
          )
          this.calculateVelocity() // Ajustar dentro del rango

          this.$refs.imageAngle.style.transform = `translateYAngle(${this.currentTranslationYAngle}px)`
        }
      },
      startDrag(event) {
        event.preventDefault() // Evita el arrastre predeterminado de la imagen
        this.startX = event.clientX
        this.startY = event.clientY
        this.isDragging = true
      },
      stopDrag() {
        this.isDragging = false
        this.lastTranslationY = this.currentTranslationY // Guardar la última posición al soltar la imagen
      },
      handleDrag(event) {
        if (this.isDragging) {
          const currentY = event.clientY
          const diffY = currentY - this.startY

          const translationFactor = 5 // Factor de desplazamiento
          let newTranslationY = diffY * translationFactor

          const maxTranslationY = 70 // Límite máximo de desplazamiento hacia arriba
          const minTranslationY = 0 // Límite máximo de desplazamiento hacia abajo

          newTranslationY = Math.max(
            minTranslationY,
            Math.min(maxTranslationY, newTranslationY)
          )

          const nextTranslationY = this.lastTranslationY + newTranslationY
          this.currentTranslationY = Math.max(
            minTranslationY,
            Math.min(maxTranslationY, nextTranslationY)
          )
          this.calculateVelocity() // Ajustar dentro del rango

          this.$refs.image.style.transform = `translateY(${this.currentTranslationY}px)`
        }
      },
      calculateVelocity() {
        const currentVelocity = this.velocity
        switch (true) {
          case this.currentTranslationY == 0 &&
            this.currentTranslationYAngle == 0:
            this.velocity = currentVelocity
            console.log('La velocidad actual es ' + this.velocity)
            break
          case this.currentTranslationY == 35 &&
            this.currentTranslationYAngle == 0:
            this.velocity = currentVelocity * 0.95
            console.log('La velocidad actual es ' + this.velocity)
            break
          case this.currentTranslationY == 70 &&
            this.currentTranslationYAngle == 0:
            this.velocity = currentVelocity * 0.9
            console.log('La velocidad actual es ' + this.velocity)
            break
          case this.currentTranslationY == 35 &&
            this.currentTranslationYAngle == 20:
            this.velocity = currentVelocity * 0.85
            console.log('La velocidad actual es ' + this.velocity)
            break
          case this.currentTranslationY == 70 &&
            this.currentTranslationYAngle == 20:
            this.velocity = currentVelocity * 0.8
            console.log('La velocidad actual es ' + this.velocity)
            break
          case this.currentTranslationY == 35 &&
            this.currentTranslationYAngle == 40:
            this.velocity = currentVelocity * 0.75
            console.log('La velocidad actual es ' + this.velocity)
            break
          case this.currentTranslationY == 70 &&
            this.currentTranslationYAngle == 40:
            this.velocity = currentVelocity * 0.7
            console.log('La velocidad actual es ' + this.velocity)
            break
          case this.currentTranslationY == 35 &&
            this.currentTranslationYAngle == 60:
            this.velocity = currentVelocity * 0.65
            console.log('La velocidad actual es ' + this.velocity)
            break
          case this.currentTranslationY == 70 &&
            this.currentTranslationYAngle == 60:
            this.velocity = currentVelocity * 0.6
            console.log('La velocidad actual es ' + this.velocity)
            break
        }
        this.velocity = 100
      },
    },
  }
</script>

<style scoped>
  .WingFlaps {
    display: flex;
    justify-content: center;
    background-color: rgb(177, 177, 177);
    width: 50%;
    height: 80%;
    border-radius: 5%;
    margin: auto;
    position: relative;
    cursor: grab;
  }
  .WingFlapsAngle {
    display: flex;
    justify-content: center;

    background-color: rgb(177, 177, 177);
    width: 50%;
    height: 60%;
    border-radius: 5%;
    margin: auto;
    position: relative;
    cursor: grab;
  }

  .WingFlaps.grabbing {
    cursor: grabbing;
  }

  .WingFlapsAngle.grabbing {
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
  .divGeneral {
    display: flex;
    background-color: rgb(177, 177, 177);
    width: 50%;
    height: 100%;
    margin: auto;
  }
</style>
