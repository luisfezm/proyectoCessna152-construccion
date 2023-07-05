<template>
  <div
    id="miDiv"
    class="MiYoke"
    :class="{ grabbing: isDragging }"
    ref="div"
  >
    <div class="panel-inferior">
      <div class="image-container">
        <img
          ref="image"
          src="src/assets/img/Yoke.png"
          :style="{
            transform: `translate(${currentTranslationX}px, ${currentTranslationY + 20}px) rotate(${currentRotation}deg)`,
            width: '80px',
            height: '70px'
          }"
          :class="{ translateYAnimation: isMovingVertically, rotateAnimation: isRotating }"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data() {
    return {
      currentTranslationX: 0,
      currentTranslationY: 0,
      currentRotation: 0,
      isMovingVertically: false,
      isRotating: false,
      isDragging: false,
      stepSize: 0.25,
      maxRotationDisplay: 100,
      minRotationDisplay: -100,
      maxRotation: 90,
      minRotation: -90,
      translateYLimit: 25,
      translateXLimit: 0,
      moveAnimationFrameId: null,
      rotateAnimationFrameId: null,
    };
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  },
  methods: {
    handleKeyDown(event) {
      switch (event.key) {
        case 'ArrowUp':
          this.startMoveUp();
          break;
        case 'ArrowDown':
          this.startMoveDown();
          break;
        case 'ArrowLeft':
          this.startRotateLeft();
          break;
        case 'ArrowRight':
          this.startRotateRight();
          break;
        default:
          break;
      }
    },
    handleKeyUp(event) {
      switch (event.key) {
        case 'ArrowUp':
          this.stopMoveUp();
          break;
        case 'ArrowDown':
          this.stopMoveDown();
          break;
        case 'ArrowLeft':
          this.stopRotateLeft();
          break;
        case 'ArrowRight':
          this.stopRotateRight();
          break;
        default:
          break;
      }
    },
    startMoveUp() {
      this.isMovingVertically = true;
      this.moveUp();
    },
    stopMoveUp() {
      this.isMovingVertically = false;
      cancelAnimationFrame(this.moveAnimationFrameId);
      this.moveAnimationFrameId = null;
      this.animateMoveBackToOrigin();
    },
    moveUp() {
      if (this.currentTranslationY < this.translateYLimit) {
        this.currentTranslationY += this.stepSize;
        this.moveAnimationFrameId = requestAnimationFrame(this.moveUp);
      } else {
        this.currentTranslationY = Math.min(this.currentTranslationY, this.translateYLimit);
      }
    },
    startMoveDown() {
      this.isMovingVertically = true;
      this.moveDown();
    },
    stopMoveDown() {
      this.isMovingVertically = false;
      cancelAnimationFrame(this.moveAnimationFrameId);
      this.moveAnimationFrameId = null;
      this.animateMoveBackToOrigin();
    },
    moveDown() {
      if (this.currentTranslationY > -this.translateYLimit) {
        this.currentTranslationY -= this.stepSize;
        this.moveAnimationFrameId = requestAnimationFrame(this.moveDown);
      } else {
        this.currentTranslationY = Math.max(this.currentTranslationY, -this.translateYLimit);
      }
    },
    startRotateLeft() {
      this.isRotating = true;
      this.rotateLeft();
    },
    stopRotateLeft() {
      this.isRotating = false;
      cancelAnimationFrame(this.rotateAnimationFrameId);
      this.rotateAnimationFrameId = null;
      this.animateRotateBackToOrigin();
    },
    rotateLeft() {
      if (this.currentRotation > this.minRotation) {
        this.currentRotation -= this.stepSize;
        this.rotateAnimationFrameId = requestAnimationFrame(this.rotateLeft);
      } else {
        this.currentRotation = Math.max(this.currentRotation, this.minRotation);
      }
    },
    startRotateRight() {
      this.isRotating = true;
      this.rotateRight();
    },
    stopRotateRight() {
      this.isRotating = false;
      cancelAnimationFrame(this.rotateAnimationFrameId);
      this.rotateAnimationFrameId = null;
      this.animateRotateBackToOrigin();
    },
    rotateRight() {
      if (this.currentRotation < this.maxRotation) {
        this.currentRotation += this.stepSize;
        this.rotateAnimationFrameId = requestAnimationFrame(this.rotateRight);
      } else {
        this.currentRotation = Math.min(this.currentRotation, this.maxRotation);
      }
    },
    animateMoveBackToOrigin() {
      if (this.currentTranslationY < 0) {
        this.currentTranslationY += this.stepSize;
        requestAnimationFrame(this.animateMoveBackToOrigin);
      } else if (this.currentTranslationY > 0) {
        this.currentTranslationY -= this.stepSize;
        requestAnimationFrame(this.animateMoveBackToOrigin);
      }
    },
    animateRotateBackToOrigin() {
      if (this.currentRotation < 0) {
        this.currentRotation += this.stepSize;
        requestAnimationFrame(this.animateRotateBackToOrigin);
      } else if (this.currentRotation > 0) {
        this.currentRotation -= this.stepSize;
        requestAnimationFrame(this.animateRotateBackToOrigin);
      }
    },
  },
  watch: {
    currentTranslationY(value) {
      let aux = Math.round(value * 4);
      store.dispatch('setEstadoPitch_yoke', aux);
      console.log("El estado del PITCH en el backend es de: " + store.getters.getEstadoPitch_yoke);
    },
    currentRotation(value) {
      let aux = Math.round((value * 10) / 9); // Cambiado a redondear el valor
      if (value < 0) {
        aux = Math.ceil((value * 10) / 9); // Redondear hacia arriba para valores negativos
      }
      store.dispatch('setEstadoRoll_yoke', aux);
      console.log("El estado del ROLL en el backend es de: " + store.getters.getEstadoRoll_yoke);
    },
  },
  computed: {
    displayedRotation() {
      return Math.round((this.currentRotation / this.maxRotation) * this.maxRotationDisplay);
    },
  },
};
</script>

<style>
.panel-inferior {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.image-container {
  position: relative;
}
</style>
