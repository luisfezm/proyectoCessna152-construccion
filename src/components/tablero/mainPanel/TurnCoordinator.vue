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
  
  //import store from '../../../store'

  export default {
    data() {
      return {
        gradosDesviacion: 0, //grados de desviacion que se obtienen como parametro
      }
    },
    computed: {


      circleStyle() {
        return {
          left: `calc(50% - 1px - ${this.gradosDesviacion/4}px)`, //Movimiento del circle en relacion con los gradosDesviacion recibidos
          right: `calc(50% - 1px - ${this.gradosDesviacion/4}px)`,
        }
      },
    },
    mounted() {   
      setInterval(() => {  //Cada segundo revisa el estado del getEstadoRoll_yoke
        
        console.log('ESTADO ' + this.$store.getters.getEstadoRoll_yoke)
       
        this.moverAvion(this.$store.getters.getEstadoRoll_yoke) // LLamo a la funcion para mover el indicador con el valor del estado
      }, 500)
    },
    methods: {
      moverAvion(estado) {
        if(estado == -1){  //El avion esta girando hacia la izquierda
          
          this.$store.dispatch('actualizar', {roll: -100 , pitch: 0})
          this.gradosDesviacion = this.$store.getters.anguloRoll
          console.log("DESVIACION   "+this.$store.getters.anguloRoll)
        }

        if(estado == 1){ //El avion esta girando hacia la derecha
           
          this.$store.dispatch('actualizar', {roll: 100 , pitch: 0})
          this.gradosDesviacion = this.$store.getters.anguloRoll

          console.log("DESVIACION   "+this.$store.getters.anguloRoll)
        }
        if(this.gradosDesviacion >= 25){
          this.gradosDesviacion = 25;
        }

        if(this.gradosDesviacion <= -25){
          this.gradosDesviacion = -25;
        }
        
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
