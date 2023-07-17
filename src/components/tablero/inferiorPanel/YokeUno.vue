<template>
    <div>
      <div id="miDiv1" ref="div1" class="MiYoke" :class="{ grabbing: isDragging1 }">
        <div class="panel-inferior">
          <div class="image-container">
            <div class="axis-y"></div>
            <img
              ref="image1"
              src="@/assets/img/yoke.png"
              :style="{
                transform: `translate(${currentTranslationX1}px, ${currentTranslationY1 + 20}px) rotate(${currentRotation1}deg)`,
                width: '200px',
                height: '150px',
                margin: '10px',
              }"
              :class="{
                translateYAnimation: isMovingVertically1,
                rotateAnimation: isRotating1,
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
      stopMoveUp1() {
        this.isMovingVertically1 = false;
        this.cancelMoveAnimation1();
        this.animateMoveBackToOrigin1();
      },
      moveUp1() {
        if (
          this.currentTranslationY1 < this.translateYLimit &&
          this.isMovingVertically1
        ) {
          this.currentTranslationY1 += this.stepSize;
          this.moveAnimationFrameId1 = requestAnimationFrame(this.moveUp1);
        }
      },
      startMoveDown1() {
        this.isMovingVertically1 = true;
        this.moveDown1();
      },
      stopMoveDown1() {
        this.isMovingVertically1 = false;
        this.cancelMoveAnimation1();
        this.animateMoveBackToOrigin1();
      },
      moveDown1() {
        if (
          this.currentTranslationY1 > -this.translateYLimit &&
          this.isMovingVertically1
        ) {
          this.currentTranslationY1 -= this.stepSize;
          this.moveAnimationFrameId1 = requestAnimationFrame(this.moveDown1);
        }
      },
      startRotateLeft1() {
        this.isRotating1 = true;
        this.rotateLeft1();
      },
      stopRotateLeft1() {
        this.isRotating1 = false;
        this.cancelRotateAnimation1();
        this.animateRotateBackToOrigin1();
      },
      rotateLeft1() {
        if (this.currentRotation1 > this.minRotation && this.isRotating1) {
          this.currentRotation1 -= this.stepSize;
          this.rotateAnimationFrameId1 = requestAnimationFrame(this.rotateLeft1);
        }
      },
      startRotateRight1() {
        this.isRotating1 = true;
        this.rotateRight1();
      },
      stopRotateRight1() {
        this.isRotating1 = false;
        this.cancelRotateAnimation1();
        this.animateRotateBackToOrigin1();
      },
      rotateRight1() {
        if (this.currentRotation1 < this.maxRotation && this.isRotating1) {
          this.currentRotation1 += this.stepSize;
          this.rotateAnimationFrameId1 = requestAnimationFrame(this.rotateRight1);
        }
      },
      cancelMoveAnimation1() {
        if (this.moveAnimationFrameId1) {
          cancelAnimationFrame(this.moveAnimationFrameId1);
          this.moveAnimationFrameId1 = null;
        }
      },
      cancelRotateAnimation1() {
        if (this.rotateAnimationFrameId1) {
          cancelAnimationFrame(this.rotateAnimationFrameId1);
          this.rotateAnimationFrameId1 = null;
        }
      },
      animateMoveBackToOrigin1() {
        if (this.currentTranslationY1 !== 0) {
          if (this.currentTranslationY1 < 0) {
            this.currentTranslationY1 += this.stepSize;
          } else {
            this.currentTranslationY1 -= this.stepSize;
          }
          requestAnimationFrame(this.animateMoveBackToOrigin1);
        }
      },
      animateRotateBackToOrigin1() {
        if (this.currentRotation1 !== 0) {
          if (this.currentRotation1 < 0) {
            this.currentRotation1 += this.stepSize;
          } else {
            this.currentRotation1 -= this.stepSize;
          }
          requestAnimationFrame(this.animateRotateBackToOrigin1);
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
  left: 80%;
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
