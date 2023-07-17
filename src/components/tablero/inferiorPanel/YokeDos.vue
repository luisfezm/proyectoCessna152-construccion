<template>
  <div>
    <div id="miDiv2" ref="div2" class="MiYoke" :class="{ grabbing: isDragging2 }">
      <div class="panel-inferior">
        <div class="image-container">
          <div class="axis-y"></div>
          <img
            ref="image2"
            src="@/assets/img/yoke.png"
            :style="{
              transform: `translate(${currentTranslationX2}px, ${currentTranslationY2 + 20}px) rotate(${currentRotation2}deg)`,
              width: '200px',
              height: '150px',
              margin: '10px',
            }"
            :class="{
              translateYAnimation: isMovingVertically2,
              rotateAnimation: isRotating2,
            }"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store';

  export default {
    data() {
      return {
        currentTranslationX1: 0,
        currentTranslationY1: 0,
        currentRotation1: 0,
        isMovingVertically1: false,
        isRotating1: false,
        isDragging1: false,

        currentTranslationX2: 0,
        currentTranslationY2: 0,
        currentRotation2: 0,
        isMovingVertically2: false,
        isRotating2: false,
        isDragging2: false,

        stepSize: 0.25,
        maxRotationDisplay: 100,
        minRotationDisplay: -100,
        maxRotation: 90,
        minRotation: -90,
        translateYLimit: 50,
        translateXLimit: 100,

        moveAnimationFrameId1: null,
        moveAnimationFrameId2: null,
        rotateAnimationFrameId1: null,
        rotateAnimationFrameId2: null,
      };
    },
    computed: {
      displayedRotation1() {
        return Math.round(
          (this.currentRotation1 / this.maxRotation) * this.maxRotationDisplay
        );
      },
      displayedRotation2() {
        return Math.round(
          (this.currentRotation2 / this.maxRotation) * this.maxRotationDisplay
        );
      },
    },
    watch: {
      currentTranslationY1(value) {
        let aux = Math.round(value * 4);
        store.dispatch('setEstadoPitch_yoke1', aux);
        console.log(
          'El estado del PITCH en el backend del yoke 1 es: ' +
            store.getters.getEstadoPitch_yoke1
        );
      },
      currentRotation1(value) {
        let aux = Math.round((value * 10) / 9);
        if (value < 0) {
          aux = Math.ceil((value * 10) / 9);
        }
        store.dispatch('setEstadoRoll_yoke1', aux);
        console.log(
          'El estado del ROLL en el backend del yoke 1 es: ' +
            store.getters.getEstadoRoll_yoke1
        );
      },
      currentTranslationY2(value) {
        let aux = Math.round(value * 4);
        store.dispatch('setEstadoPitch_yoke2', aux);
        console.log(
          'El estado del PITCH en el backend del yoke 2 es: ' +
            store.getters.getEstadoPitch_yoke2
        );
      },
      currentRotation2(value) {
        let aux = Math.round((value * 10) / 9);
        if (value < 0) {
          aux = Math.ceil((value * 10) / 9);
        }
        store.dispatch('setEstadoRoll_yoke2', aux);
        console.log(
          'El estado del ROLL en el backend del yoke 2 es: ' +
            store.getters.getEstadoRoll_yoke2
        );
      },
    },
    mounted() {
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('keyup', this.handleKeyUp);
    },
    beforeUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('keyup', this.handleKeyUp);
      this.cancelMoveAnimation1();
      this.cancelMoveAnimation2();
      this.cancelRotateAnimation1();
      this.cancelRotateAnimation2();
    },
    methods: {
      handleKeyDown(event) {
        switch (event.key) {
        case 'ArrowUp':
          this.startMoveUp1();
          break;
        case 'ArrowDown':
          this.startMoveDown1();
          break;
        case 'ArrowLeft':
          this.startRotateLeft1();
          break;
        case 'ArrowRight':
          this.startRotateRight1();
          break;
        case 'w':
          this.startMoveUp2();
          break;
        case 's':
          this.startMoveDown2();
          break;
        case 'a':
          this.startRotateLeft2();
          break;
        case 'd':
          this.startRotateRight2();
          break;
        default:
          break;
        }
      },
      handleKeyUp(event) {
        switch (event.key) {
        case 'ArrowUp':
          this.stopMoveUp1();
          break;
        case 'ArrowDown':
          this.stopMoveDown1();
          break;
        case 'ArrowLeft':
          this.stopRotateLeft1();
          break;
        case 'ArrowRight':
          this.stopRotateRight1();
          break;
        case 'w':
          this.stopMoveUp2();
          break;
        case 's':
          this.stopMoveDown2();
          break;
        case 'a':
          this.stopRotateLeft2();
          break;
        case 'd':
          this.stopRotateRight2();
          break;
        default:
          break;
        }
      },
      startMoveUp1() {
        this.isMovingVertically1 = true;
        this.moveUp1();
      },
    

      // Yoke 2 methods
      startMoveUp2() {
        this.isMovingVertically2 = true;
        this.moveUp2();
      },
      stopMoveUp2() {
        this.isMovingVertically2 = false;
        this.cancelMoveAnimation2();
        this.animateMoveBackToOrigin2();
      },
      moveUp2() {
        if (
          this.currentTranslationY2 < this.translateYLimit &&
          this.isMovingVertically2
        ) {
          this.currentTranslationY2 += this.stepSize;
          this.moveAnimationFrameId2 = requestAnimationFrame(this.moveUp2);
        }
      },
      startMoveDown2() {
        this.isMovingVertically2 = true;
        this.moveDown2();
      },
      stopMoveDown2() {
        this.isMovingVertically2 = false;
        this.cancelMoveAnimation2();
        this.animateMoveBackToOrigin2();
      },
      moveDown2() {
        if (
          this.currentTranslationY2 > -this.translateYLimit &&
          this.isMovingVertically2
        ) {
          this.currentTranslationY2 -= this.stepSize;
          this.moveAnimationFrameId2 = requestAnimationFrame(this.moveDown2);
        }
      },
      startRotateLeft2() {
        this.isRotating2 = true;
        this.rotateLeft2();
      },
      stopRotateLeft2() {
        this.isRotating2 = false;
        this.cancelRotateAnimation2();
        this.animateRotateBackToOrigin2();
      },
      rotateLeft2() {
        if (this.currentRotation2 > this.minRotation && this.isRotating2) {
          this.currentRotation2 -= this.stepSize;
          this.rotateAnimationFrameId2 = requestAnimationFrame(this.rotateLeft2);
        }
      },
      startRotateRight2() {
        this.isRotating2 = true;
        this.rotateRight2();
      },
      stopRotateRight2() {
        this.isRotating2 = false;
        this.cancelRotateAnimation2();
        this.animateRotateBackToOrigin2();
      },
      rotateRight2() {
        if (this.currentRotation2 < this.maxRotation && this.isRotating2) {
          this.currentRotation2 += this.stepSize;
          this.rotateAnimationFrameId2 = requestAnimationFrame(this.rotateRight2);
        }
      },
      cancelMoveAnimation2() {
        if (this.moveAnimationFrameId2) {
          cancelAnimationFrame(this.moveAnimationFrameId2);
          this.moveAnimationFrameId2 = null;
        }
      },
      cancelRotateAnimation2() {
        if (this.rotateAnimationFrameId2) {
          cancelAnimationFrame(this.rotateAnimationFrameId2);
          this.rotateAnimationFrameId2 = null;
        }
      },
      animateMoveBackToOrigin2() {
        if (this.currentTranslationY2 !== 0) {
          if (this.currentTranslationY2 < 0) {
            this.currentTranslationY2 += this.stepSize;
          } else {
            this.currentTranslationY2 -= this.stepSize;
          }
          requestAnimationFrame(this.animateMoveBackToOrigin2);
        }
      },
      animateRotateBackToOrigin2() {
        if (this.currentRotation2 !== 0) {
          if (this.currentRotation2 < 0) {
            this.currentRotation2 += this.stepSize;
          } else {
            this.currentRotation2 -= this.stepSize;
          }
          requestAnimationFrame(this.animateRotateBackToOrigin2);
        }
      },
    },
  };
</script>

<style>
.panel-inferior {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
  height: 10vh;
}

.image-container {
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(70%, -50%);
}

.axis-y {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 4px;
  height: 85%;
  background-color: transparent;
  border: 4px solid rgba(99, 95, 95, 0.952);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.MiYoke img {
  margin: 60px 40px 60px 40px;
}
</style>