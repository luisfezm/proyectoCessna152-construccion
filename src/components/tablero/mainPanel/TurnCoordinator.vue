<template>
  <div class="">
    <div class="circular">
      <div class="turn-coordinator">
        <div
          class="airplane"
          :style="{
            transform:
              'translate(-50%, -50%) rotate(' + gradosDesviacion + 'deg)',
          }"
        />
        <div class="rectangular">
          <div class="circle" :style="circleStyle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gradosDesviacion: 0, //grados de desviacion que se obtienen como parametro
      }
    },
    computed: {
      circleStyle() {
        return {
          left: `calc(50% - 1px - ${this.gradosDesviacion}px)`, //Movimiento del circle en relacion con los gradosDesviacion recibidos
          right: `calc(50% - 1px - ${this.gradosDesviacion}px)`,
        }
      },
    },
    mounted() {
      setInterval(() => {
        this.moverAvion(Math.floor(Math.random() * 20) - 10) // Genera un valor aleatorio entre -10 y 10
      }, 2000)
    },
    methods: {
      moverAvion(grados) {
        this.gradosDesviacion = grados
      },
    },
  }
</script>
<style scoped>
  .circular {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
    background-color: rgb(16, 15, 15);
    width: 70px;
    height: 70px;
    margin-left: 1%;
    margin-top: 1%;
  }

  .turn-coordinator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding-bottom: 100%;
    background-color: #ddd;
    border-radius: 50%;
    background-image: url('https://i.ibb.co/41kG72r/Turn-Coordinator.png');
    background-size: cover;
    background-position: center;
  }

  .airplane {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 35%;
    transform-origin: bottom center;
    transform: translate(-50%, -50%);
    overflow: hidden;
    background-image: url('https://i.ibb.co/W0LK98P/avion.png');
    background-size: cover;
    background-position: center;
    animation: rotate 2s infinite alternate ease-in-out;
  }

  .rectangular {
    position: absolute;
    top: 65%;
    left: 50%;
    border-radius: 15%;
    transform: translate(-50%, -80%);
    height: 100hv;
    width: 6vw;
    margin-left: 1%;
    margin-top: 1%;
    background-color: gray;
  }

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: black;
  }

  @keyframes moveCircle {
    0% {
      transform: translateX(-50%) rotate(-10deg);
    }
    50% {
      transform: translateX(-150%) rotate(0deg);
    }
    100% {
      transform: translateX(-50%) rotate(-10deg);
    }
  }
</style>
