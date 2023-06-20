<template>
  <div class="indicadorMainPanel">
    <div class="airspeed-indicator">
      <div ref="needle" class="needle" id="needleAir" />
    </div>
  </div>
</template>

<script>
  import PedalPilotoDerecho from '../../pedales/MiPedalPilotoDerecho.vue'
  export default {
    mounted() {
      //utilizar la letra "p" para acelerar
      document.addEventListener('keydown', (event) => {
        var keyValue = event.key;
        if(keyValue=='p'){
          //funcion que traslada la aguja 
          this.moveNeedle()
        }
        
      }, false);
      document.addEventListener('keyup', (event) => {
        var keyValue = event.key;
        if(keyValue=='p'){
          //funcion que retorna la aguja a su posicion inicial
          this.moveNeedleUp()
        }
        
     
      }, false);
     
    },
    methods: {
     moveNeedle(){
      //0.4 turn limita la vuelta de la aguja hasta el limite del Airspeed indicator
      document.getElementById("needleAir").style.cssText = "transform: rotate(0.4turn);transition:6s";
     },
     moveNeedleUp(){
      //-180 deg es la pocicion inicial (en reposo) de la aguja
      document.getElementById("needleAir").style.cssText = "transform: rotate(-180deg);transition:10s";
     } 
    },
    
  }
</script>

<style scoped>
  .circular {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
    background-color: rgb(16, 15, 15);
    height: 100hv;
    width: 6vw;
    margin-left: 1%;
    margin-top: 1%;
  }

  .airspeed-indicator {
    position: relative;
    width: 100%;
    padding-bottom: 100%; /* Mantiene una relación de aspecto cuadrada */
    background-color: #ddd;
    border-radius: 50%;
    margin: 0 auto;
    background-image: url('https://i.ibb.co/3M0XNSx/speedindicator-Rojo.png');
    background-size: cover;
    background-position: center;
  }

  #needleAir {
    position: absolute;
    top: 50%;
    left: 48%;
    transform-origin: 50% 0%;
    width: 4%;
    height: 35%;
    background-color: red;
    transition: transform 0.3s;
    transform: rotate(-180deg);
  }


</style>
