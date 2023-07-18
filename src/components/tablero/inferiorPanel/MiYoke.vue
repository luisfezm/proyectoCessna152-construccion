<template>
    <div id="miDiv" ref="div" class="MiYoke" :class="{ grabbing: isDragging }">
      <div class="panel-inferior">
        <div class="image-container">
          <div class="axis-y"/>
          <img
            ref="image"
            src="@/assets/img/yoke.png"
            :style="{
              transform: `translate(${currentTranslationX}px, ${
                currentTranslationY + 20
              }px) rotate(${currentRotation}deg)`,
              width: '160px', 
              height: '120px',
              left: `${translateXLimit + 500}px`, 
              top: `${-translateYLimit}px`,
            }"
            :class="{
              translateYAnimation: isMovingVertically,
              rotateAnimation: isRotating,
            }"
            draggable="false"
          >
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
        translateYLimit: 50,
        translateXLimit: 100,
        moveAnimationFrameId: null,
        rotateAnimationFrameId: null,
      }
    },
    computed: {
      displayedRotation() {
        return Math.round(
          (this.currentRotation / this.maxRotation) * this.maxRotationDisplay
        )
      },
    },
    watch: {
      currentTranslationY(value) {
        let aux = Math.round(value * 4)
        store.dispatch('setEstadoPitch_yoke', aux)
        console.log(
          'El estado del PITCH en el backend es de: ' +
            store.getters.getEstadoPitch_yoke
        )
      },
      currentRotation(value) {
        let aux = Math.round((value * 10) / 9)
        if (value < 0) {
          aux = Math.ceil((value * 10) / 9)
        }
        store.dispatch('setEstadoRoll_yoke', aux)
        console.log(
          'El estado del ROLL en el backend es de: ' +
            store.getters.getEstadoRoll_yoke
        )
      },
    },
    mounted() {
      //console.log('aaaaaaaaaa')
      window.addEventListener('keydown', this.handleKeyDown)
      window.addEventListener('keyup', this.handleKeyUp)
    },
    beforeUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown)
      window.removeEventListener('keyup', this.handleKeyUp)
      this.cancelMoveAnimation()
      this.cancelRotateAnimation()
    },
    methods: {
      handleKeyDown(event) {
        switch (event.key) {
        case 'ArrowUp':
          this.startMoveUp()
          break
        case 'ArrowDown':
          this.startMoveDown()
          break
        case 'ArrowLeft':
          this.startRotateLeft()
          break
        case 'ArrowRight':
          this.startRotateRight()
          break
        default:
          break
        }
      },
      handleKeyUp(event) {
        switch (event.key) {
        case 'ArrowUp':
          this.stopMoveUp()
          break
        case 'ArrowDown':
          this.stopMoveDown()
          break
        case 'ArrowLeft':
          this.stopRotateLeft()
          break
        case 'ArrowRight':
          this.stopRotateRight()
          break
        default:
          break
        }
      },
      startMoveUp() {
        this.isMovingVertically = true
        this.moveUp()
      },
      stopMoveUp() {
        this.isMovingVertically = false
        this.cancelMoveAnimation()
        this.animateMoveBackToOrigin()
      },
      moveUp() {
        if (
          this.currentTranslationY < this.translateYLimit &&
          this.isMovingVertically
        ) {
          this.currentTranslationY += this.stepSize
          this.moveAnimationFrameId = requestAnimationFrame(this.moveUp)
        }
      },
      startMoveDown() {
        this.isMovingVertically = true
        this.moveDown()
      },
      stopMoveDown() {
        this.isMovingVertically = false
        this.cancelMoveAnimation()
        this.animateMoveBackToOrigin()
      },
      moveDown() {
        if (
          this.currentTranslationY > -this.translateYLimit &&
          this.isMovingVertically
        ) {
          this.currentTranslationY -= this.stepSize
          this.moveAnimationFrameId = requestAnimationFrame(this.moveDown)
        }
      },
      startRotateLeft() {
        this.isRotating = true
        this.rotateLeft()
      },
      stopRotateLeft() {
        this.isRotating = false
        this.cancelRotateAnimation()
        this.animateRotateBackToOrigin()
      },
      rotateLeft() {
        if (this.currentRotation > this.minRotation && this.isRotating) {
          this.currentRotation -= this.stepSize
          this.rotateAnimationFrameId = requestAnimationFrame(this.rotateLeft)
        }
      },
      startRotateRight() {
        this.isRotating = true
        this.rotateRight()
      },
      stopRotateRight() {
        this.isRotating = false
        this.cancelRotateAnimation()
        this.animateRotateBackToOrigin()
      },
      rotateRight() {
        if (this.currentRotation < this.maxRotation && this.isRotating) {
          this.currentRotation += this.stepSize
          this.rotateAnimationFrameId = requestAnimationFrame(this.rotateRight)
        }
      },
      cancelMoveAnimation() {
        if (this.moveAnimationFrameId) {
          cancelAnimationFrame(this.moveAnimationFrameId)
          this.moveAnimationFrameId = null
        }
      },
      cancelRotateAnimation() {
        if (this.rotateAnimationFrameId) {
          cancelAnimationFrame(this.rotateAnimationFrameId)
          this.rotateAnimationFrameId = null
        }
      },
      animateMoveBackToOrigin() {
        if (this.currentTranslationY !== 0) {
          if (this.currentTranslationY < 0) {
            this.currentTranslationY += this.stepSize
          } else {
            this.currentTranslationY -= this.stepSize
          }
          requestAnimationFrame(this.animateMoveBackToOrigin)
        }
      },
      animateRotateBackToOrigin() {
        if (this.currentRotation !== 0) {
          if (this.currentRotation < 0) {
            this.currentRotation += this.stepSize
          } else {
            this.currentRotation -= this.stepSize
          }
          requestAnimationFrame(this.animateRotateBackToOrigin)
        }
      },
    },
  }
  </script>
  
  <style>
  .panel-inferior {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      height: 10vh;
    }
  
   .image-container {
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(168%, -50%); 
  }
  
  
  .axis-y {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 4px;
    height: 78%;
    background-color: transparent; 
    border: 4px solid rgba(99, 95, 95, 0.952); 
    border-radius: 50%; 
    transform: translateX(-50%);
    z-index: 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  </style>