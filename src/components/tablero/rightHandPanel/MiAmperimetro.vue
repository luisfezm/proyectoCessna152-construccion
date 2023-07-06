
<template>
  <div class="circular">
    <div class="box">
      <div class="Amperimetro">
        <div
          id="measurer"
          :style="`transform: rotate(${ampToDegrees}deg); transition: ${transitionDuration}s`">
          <div id="point" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data() {
    return {
      amp: 0,
      ampToDegrees: -130,
      transitionDuration: 0,
      increaseInterval: null,
      variableTraspaso: 30,
    }
  },
  created() {
    setInterval(this.updateAMP, 10)
  },
  mounted() {
    setInterval(() => {
      this.startIncreasingAMP()
    }, 1000)
  },
  methods: {
    startIncreasingAMP() {
      console.log('Valor de throttle:', store.state.throttle)
      console.log('Valor de amp:', this.amp)
      this.increaseInterval = setInterval(() => {
        if (this.amp < 100) {
          this.amp += 1
          this.updateAMP()
        }
      }, 100)
    },
    stopIncreasingAMP() {
      clearInterval(this.increaseInterval)
    },
    decreaseAMP() {
      console.log('Valor de throttle:', store.state.throttle)
      console.log('Valor de amp:', this.amp)
      if (this.amp > 0) {
        this.amp -= 1
        this.updateAMP()
      }
    },
    releaseAccelerator() {
      this.increaseInterval = null
      this.updateAMP()
    },
    updateAMP() {
      this.amp = 0
      this.ampToDegrees = this.amp * 2.6
      this.transitionDuration = 3.5 - this.amp * 0.03
    },
    currentAmp() {
      return this.$store.getters.getAmp
    },
    accelerator(amp) {
      const measuredElement = document.getElementById('measurer')
      const range = 140
      const maxAmp = 3500
      const AmpRange = Math.max(Math.min(amp, maxAmp), 0)
      const percentage = AmpRange / maxAmp
      const degrees = percentage * range * 2 - range
      if (degrees >= 140) {
        measuredElement.style.cssText = `transform: rotate(${140}deg); transition: 4s;`
      } else {
        measuredElement.style.cssText = `transform: rotate(${
          degrees - 15
        }deg); transition: 4s;`
      }
    },
  },
}
</script>
  
  <style>
    .box #increase {
      width: 8px;
      height: 4px;
      position: absolute;
      background-color: green;
      right: 1px;
      bottom: 15px;
      outline: none;
      user-select: none;
      z-index: 4;
      cursor: pointer;
      border-radius: 5px;
    }
    .box #increase:hover {
      box-shadow: 0px 0px 10px 5px gray;
    }
    .box #decrease:hover {
      box-shadow: 0px 0px 10px 5px gray;
    }
    .box #decrease {
      width: 8px;
      height: 4px;
      position: absolute;
      bottom: 15px;
      outline: none;
      background-color: red;
      user-select: none;
      cursor: pointer;
      z-index: 4;
      border-radius: 5px;
    }
  
    .Amperimetro {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-image: url(https://i.ibb.co/dcWhF4X/Mi-proyecto.png);
      background-size: 100%, 100%;
      background-repeat: no-repeat;
      position: relative;
      background-color: rgb(0, 0, 0);
    }
  
    #measurer {
      width: 1px;
      height: 20px;
      border: 1px solid rgb(255, 0, 0);
      border-radius: 2px;
      background-color: rgb(255, 0, 0);
      position: absolute;
      top: 25%;
      left: 49%;
      z-index: 3;
      transform: rotate(-140deg);
      transition: transform 4s;
      transform-origin: bottom;
    }
  
    #point {
      width: 8px;
      height: 8px;
      position: absolute;
      border: 1px solid rgb(255, 0, 0);
      border-radius: 50%;
      bottom: -5px;
      left: -5px;
      background-color: rgb(255, 0, 0);
    }
  
    .circular {
      /* centrado generico */
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      border-radius: 50%;
      background-color: rgb(16, 15, 15);
      height: 90px;
      width: 90px;
    }
  </style>

