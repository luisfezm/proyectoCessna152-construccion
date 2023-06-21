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
    data(){
      return{
        knots: 0
      }
    },
    mounted() {
      //utilizar la letra "p" para acelerar
      //knots mide los nudos que recorre el avion
      this.knots=120
      document.addEventListener('keydown', (event) => {
        var keyValue = event.key;
        if(keyValue=='p'){
          //funcion que traslada la aguja 
          this.moveNeedle(this.knots)
        }
        
      }, false);
      document.addEventListener('keyup', (event) => {
        var keyValue = event.key;
        if(keyValue=='p'){
          //funcion que retorna la aguja a su posicion inicial
          this.moveNeedleUp()
        }
        
     
      }, false);
      //console.log(document.getElementById("needleAir"));
     
    },
/*

      30 deg   -->>  40 knots
      z              30
      160 deg  -->>  100 knots

      50 -> x
      40 -> 30 
      50*160
      /100
      -----
      290 deg  -->> 180 knots

      80 kntos    *180
      /290


      80 -> x
      180 -> 290
        80 *290
        /180
    
*/


    methods: {
     moveNeedle(knots){
      let aux
      if(knots<=100){
        if(knots <40){
          aux = (knots*30)/40
        }
        else if(knots ==40){
          aux =30
        }
        else if(knots<=50){
          aux = 50
        }
        else if(knots<=60){
          aux = 70
        }
        else if(knots<=70){
          aux = 100
        }
        else if(knots>70){
          aux = (knots*160)/100
        }
        
      }else{
        if(knots<=320){
          aux = (knots*290)/180
        }else{
          aux=320
        }
      }
      //0.4 turn limita la vuelta de la aguja hasta el limite del Airspeed indicator
      document.getElementById("needleAir").style.cssText = `transform: rotate(${aux}deg);transition:6s`;
      //document.getElementById("needleAir").style.transform = `rotate(${140}deg)`
      //document.getElementById("needleAir").style.cssText = "transition:6s";

     },
     moveNeedleUp(){
      //-180 deg es la pocicion inicial (en reposo) de la aguja
      document.getElementById("needleAir").style.cssText = "transform: rotate(0deg);transition:10s";
     },
     
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
    top: 15%;
    left: 48%;
    
    width: 4%;
    height: 35%;
    background-color: red;
    transition: transform 0.3s;
    transform-origin: bottom ;
 
  }


</style>
