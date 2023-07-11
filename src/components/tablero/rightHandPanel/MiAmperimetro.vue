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
  import { mapState } from 'vuex'
  import store from '@/store'

  export default {
    data() {
      return {
        amp: 0,
        ampToDegrees: -130,
        transitionDuration: 0,
        increaseInterval: null,
        variableTraspaso: 30,
        variableTraspaso2: false,
      }
    },
    computed: {
      ...mapState(['estadoPrendidoOApagado']),

      estadoPrendidoOApagado() {
        return store.state.estadoPrendidoOApagado
      },
    },

    created() {
      setInterval(() => {
        this.amp = this.estadoPrendidoOApagado ? 30 : 0
      }, 10)
    },

    mounted() {
      setInterval(this.created, 10)
      setInterval(this.updateAMP, 10)
    },

    methods: {
      updateAMP() {
        this.variableTraspaso2 = this.estadoPrendidoOApagado
        if (this.variableTraspaso2 == true) {
          this.amp = 20 //aca se define el valor del amperimetro
        } else {
          this.amp = 0 //aca se define el valor del amperimetro
        }
        this.ampToDegrees = this.amp * 2.6 //aca se define el angulo de giro del amperimetro
        this.transitionDuration = 3.5 - this.amp * 0.03 //aca se define la velocidad de giro del amperimetro
      },

      currentAmp() {
        return this.$store.getters.getAmp
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
