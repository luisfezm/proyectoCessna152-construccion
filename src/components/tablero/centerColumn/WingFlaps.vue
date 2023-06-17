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
</template>

<script>
  export default {
    data() {
      return {
        startX: 0,
        startY: 0,
        isDragging: false,
        translationMultiplier: 1, // Factor de desplazamiento vertical
        lastTranslationY: 0, // Última posición de desplazamiento vertical
        currentTranslationY: 0, // Desplazamiento vertical actual
      }
    },
    methods: {
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

          const translationFactor = 1 // Factor de desplazamiento
          let newTranslationY = diffY * translationFactor

          const maxTranslationY = 40 // Límite máximo de desplazamiento hacia arriba
          const minTranslationY = -40 // Límite máximo de desplazamiento hacia abajo

          newTranslationY = Math.max(
            minTranslationY,
            Math.min(maxTranslationY, newTranslationY)
          )

          const nextTranslationY = this.lastTranslationY + newTranslationY
          this.currentTranslationY = Math.max(
            minTranslationY,
            Math.min(maxTranslationY, nextTranslationY)
          ) // Ajustar dentro del rango

          this.$refs.image.style.transform = `translateY(${this.currentTranslationY}px)`
        }
      },
    },
  }
</script>

<style>
  .WingFlaps {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(177, 177, 177);
    width: 50%;
    height: 80%;
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
</style>
