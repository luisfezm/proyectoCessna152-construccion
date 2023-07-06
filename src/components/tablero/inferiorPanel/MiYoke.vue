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
    this.cancelMoveAnimation();
    this.cancelRotateAnimation();
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
      this.cancelMoveAnimation();
      this.animateMoveBackToOrigin();
    },
    moveUp() {
      if (this.currentTranslationY < this.translateYLimit && this.isMovingVertically) {
        this.currentTranslationY += this.stepSize;
        this.moveAnimationFrameId = requestAnimationFrame(this.moveUp);
      }
    },
    startMoveDown() {
      this.isMovingVertically = true;
      this.moveDown();
    },
    stopMoveDown() {
      this.isMovingVertically = false;
      this.cancelMoveAnimation();
      this.animateMoveBackToOrigin();
    },
    moveDown() {
      if (this.currentTranslationY > -this.translateYLimit && this.isMovingVertically) {
        this.currentTranslationY -= this.stepSize;
        this.moveAnimationFrameId = requestAnimationFrame(this.moveDown);
      }
    },
    startRotateLeft() {
      this.isRotating = true;
      this.rotateLeft();
    },
    stopRotateLeft() {
      this.isRotating = false;
      this.cancelRotateAnimation();
      this.animateRotateBackToOrigin();
    },
    rotateLeft() {
      if (this.currentRotation > this.minRotation && this.isRotating) {
        this.currentRotation -= this.stepSize;
        this.rotateAnimationFrameId = requestAnimationFrame(this.rotateLeft);
      }
    },
    startRotateRight() {
      this.isRotating = true;
      this.rotateRight();
    },
    stopRotateRight() {
      this.isRotating = false;
      this.cancelRotateAnimation();
      this.animateRotateBackToOrigin();
    },
    rotateRight() {
      if (this.currentRotation < this.maxRotation && this.isRotating) {
        this.currentRotation += this.stepSize;
        this.rotateAnimationFrameId = requestAnimationFrame(this.rotateRight);
      }
    },
    cancelMoveAnimation() {
      if (this.moveAnimationFrameId) {
        cancelAnimationFrame(this.moveAnimationFrameId);
        this.moveAnimationFrameId = null;
      }
    },
    cancelRotateAnimation() {
      if (this.rotateAnimationFrameId) {
        cancelAnimationFrame(this.rotateAnimationFrameId);
        this.rotateAnimationFrameId = null;
      }
    },
    animateMoveBackToOrigin() {
      if (this.currentTranslationY !== 0) {
        if (this.currentTranslationY < 0) {
          this.currentTranslationY += this.stepSize;
        } else {
          this.currentTranslationY -= this.stepSize;
        }
        requestAnimationFrame(this.animateMoveBackToOrigin);
      }
    },
    animateRotateBackToOrigin() {
      if (this.currentRotation !== 0) {
        if (this.currentRotation < 0) {
          this.currentRotation += this.stepSize;
        } else {
          this.currentRotation -= this.stepSize;
        }
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
      let aux = Math.round((value * 10) / 9);
      if (value < 0) {
        aux = Math.ceil((value * 10) / 9);
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
