<template>
  <div class="circular">
    <div class="box">
      <div class="tachometer">
        <div
          id="measurer"
          :style="`transform: rotate(${rpmToDegrees}deg); transition: ${transitionDuration}s`"
        >
          <div id="point" />
        </div>
        <button
          id="increase"
          @mousedown="startIncreasingRPM"
          @mouseup="stopIncreasingRPM"
        />
        <button
          id="decrease"
          @mousedown="decreaseRPM"
          @mouseup="releaseAccelerator"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store'
  //import { throttle } from '@/store/modules/throttle.js'

  export default {
    data() {
      return {
        rpm: 0,
        rpmToDegrees: -130, // Cambiar el valor inicial a -130 grados para que en 0 RPM el puntero esté en la posición inicial
        transitionDuration: 0,
        increaseInterval: null,
        variableTraspaso: 0,
      }
    },
    created() {
      setInterval(this.updateRPM, 10)
    },

    methods: {
      startIncreasingRPM() {
        console.log('Valor de throttle:', store.state.throttle) // Mostrar el valor de "throttle" por consola
        console.log('Valor de rpm:', this.rpm) // Mostrar el valor de "rpm" por consola
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
        console.log('Valor de throttle:', store.state.throttle) // Mostrar el valor de "throttle" por consola
        console.log('Valor de rpm:', this.rpm) // Mostrar el valor de "rpm" por consola
        if (this.rpm > 0) {
          this.rpm -= 1
          this.updateRPM()
        }
      },
      releaseAccelerator() {
        // this.rpm = 0;
        this.increaseInterval = null
        this.updateRPM()
      },
      updateRPM() {
        this.rpm = store.getters.getThrottleDepth // Obtener el valor de "throttle_depth" del módulo "throttle" y convertirlo a entero para la variable "rpm"
        //console.log('--Valor de getThrottleDepth:', store.getters.getThrottleDepth);
        //console.log('--Valor de rpm:', this.rpm); // Mostrar el valor de "rpm" por consola
        this.rpmToDegrees = -130 + this.rpm * 2.6 // Convertir RPM a grados (-130 a 0)
        this.transitionDuration = 3.5 - this.rpm * 0.03 // Ajustar la duración de la transición según las RPM
      },
      updateRPMbar() {
        this.updateRPM()
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
    transform-origin: bottom;
    transform: rotate(-130deg); /* Grados para rotar el medidor de velocidad */
    transition: 2s;
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
    transition: 2s;
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
