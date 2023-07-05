<template>
  <div class="circular">
    <div class="box">
      <div class="tachometer">
        <div
          id="measurer"
          :style="`transform: rotate(${rpmToDegrees}deg); transition: ${transitionDuration}s`">
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
      rpm: 0,
      rpmToDegrees: -130,
      transitionDuration: 0,
      increaseInterval: null,
      variableTraspaso: 0,
    }
  },
  created() {
    setInterval(this.updateRPM, 10)
  },
  mounted() {
    setInterval(() => {
      this.startIncreasingRPM()
     // this.accelerator(this.currentRpm())
    }, 1000)
  },
  methods: {
    startIncreasingRPM() {
      //console.log('Valor de throttle:', store.state.throttle)
      //console.log('Valor de rpm:', this.rpm)
      this.increaseInterval = setInterval(() => {
        if (this.rpm < 100) {
          this.rpm += 1
          this.updateRPM()
        }
      }, 100)
    },
    stopIncreasingRPM() {
      clearInterval(this.increaseInterval)
    },
    decreaseRPM() {
      //console.log('Valor de throttle:', store.state.throttle)
      //console.log('Valor de rpm:', this.rpm)
      if (this.rpm > 0) {
        this.rpm -= 1
        this.updateRPM()
      }
    },
    releaseAccelerator() {
      this.increaseInterval = null
      this.updateRPM()
    },
    updateRPM() {
      this.rpm = store.getters.getThrottleDepth
      this.rpmToDegrees = -130 + this.rpm * 2.6
      this.transitionDuration = 3.5 - this.rpm * 0.03
    },
    currentRpm() {
      return this.$store.getters.getRpm
    },
    accelerator(rpm) {
      const measuredElement = document.getElementById('measurer')
      const range = 140
      const maxRpm = 3500
      const RpmRange = Math.max(Math.min(rpm, maxRpm), 0)
      const percentage = RpmRange / maxRpm
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

  .tachometer {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-image: url(https://i.ibb.co/Mkgvbf1/tacometro5.png);
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    position: relative;
    background-color: rgb(0, 0, 0);
  }

  #measurer {
    width: 1px;
    height: 20px;
    border: 1px solid white;
    border-radius: 2px;
    background-color: white;
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
    border: 1px solid white;
    border-radius: 50%;
    bottom: -5px;
    left: -5px;
    background-color: white;
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
