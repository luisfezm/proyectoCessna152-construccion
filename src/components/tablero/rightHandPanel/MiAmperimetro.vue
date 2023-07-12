<template>
  <div class="circular">
    <div class="box">
      <div class="Amperimetro">
        <div
          id="measurer"
          :style="`transform: rotate(${ampToDegrees}deg); transition: ${transitionDuration}s`"
        >
          <div id="point" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex' //importo el mapState para poder acceder a los datos de la store
  import store from '@/store' //importo el store para poder acceder a los datos de la store

  export default {
    //aca se define la funcion export default
    data() {
      //aca se define la funcion data
      return {
        //aca se define la funcion data
        amp: 0, //aca se define el valor del amperimetro
        ampToDegrees: -130, //aca se define el angulo de giro del amperimetro
        transitionDuration: 0, //aca se define la velocidad de giro del amperimetro
        variableTraspaso: false, //aca se define la variable que se va a usar para pasar el valor de la store
      }
    },
    computed: {
      //aca se define la funcion computed
      ...mapState(['estadoPrendidoOApagado']), //aca se define el nombre de la store que se va a usar

      estadoPrendidoOApagado() {
        //aca se define la funcion que se va a usar para pasar el valor de la store
        return store.state.estadoPrendidoOApagado //aca se obtiene el valor de la store
      },
    },

    created() {
      //aca se define la funcion created
      setInterval(() => {
        //aca se define el intervalo de tiempo en el que se va a ejecutar la funcion created
        this.amp = this.estadoPrendidoOApagado ? 30 : 0 //aca se define el valor del amperimetro
      }, 10)
    },

    mounted() {
      //aca se define la funcion mounted
      setInterval(this.created, 10) //aca se llama a la funcion created para que se ejecute cada 10 milisegundos
      setInterval(this.updateAMP, 10) //aca se llama a la funcion updateAMP para que se ejecute cada 10 milisegundos
    },

    methods: {
      //aca se define la funcion methods
      startIncreasingAMP() {
        //console.log('Valor de throttle:', store.state.throttle)
        //console.log('Valor de amp:', this.amp)
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
        //aca se define la funcion updateAMP
        this.variableTraspaso = this.estadoPrendidoOApagado //aca se iguala la variable de traspaso con el valor de la store
        if (this.variableTraspaso == true) {
          //aca se pregunta si la variable de traspaso es true
          this.amp = 20 //aca se define el valor del amperimetro
        } else {
          this.amp = 0 //aca se define el valor del amperimetro
        }
        this.ampToDegrees = this.amp * 2.6 //aca se define el angulo de giro del amperimetro
        this.transitionDuration = 3.5 - this.amp * 0.03 //aca se define la velocidad de giro del amperimetro
      },

      currentAmp() {
        //aca se define la funcion currentAmp
        return this.$store.getters.getAmp //aca se obtiene el valor de la store
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
    /* left: 49%; */
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
    margin-left: 0%;
  }
</style>
