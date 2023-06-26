<template>
  <div class="indicadorMainPanel">
    <div class="airspeed-indicator">
      <div ref="needle" class="needle" id="needleAir" />
    </div>
  </div>
</template>

<script>
  
  export default {
   
    mounted() {
      
      //knots mide los nudos que recorre el avion
      //funcion que mueve la aguja, que se ingresa como parametro la cantidad de nudos(knots)
      this.moveNeedle(0)



      ////--------------Para Probar el Codigo ---------------------
/*
      document.addEventListener('keypress', (event) => {
      //utilizar la letra "p" para acelerar 10 knots
      //utilizar la letra "o" para desacelerar 10 knots  
       
        var keyValue = event.key;
        if(keyValue=='o'){
           this.$store.dispatch('setKnots',(this.$store.getters.getknots-10))
          //funcion que traslada la aguja 
          this.moveNeedle(this.$store.getters.getknots)
        }
        
      }, false);
      document.addEventListener('keypress', (event) => {
        var keyValue = event.key;
        if(keyValue=='p'){
          //funcion que retorna la aguja a su posicion inicial
          this.$store.dispatch('setKnots',(this.$store.getters.getknots+10))
          this.moveNeedle(this.$store.getters.getknots)
        }
      }, false);
*/
      
     
    },
/*

      30 deg   -->>  40 knots
      160 deg  -->>  100 knots
      290 deg  -->> 180 knots
      320 deg  -->> 200 knots


      80 kntos    *180
      /290
 
*/
    methods: {
     moveNeedle(knots){
      let aux
      //actalizar varialvle Knots en el store
      this.$store.dispatch('setKnots',(knots))

      if(knots<=0){
        aux=0
      }
      else if(knots<=100){
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
        
      }else if(knots<=200){
        aux = (knots*290)/180
      }else{
        aux=320
      }
      //actalizar variable degreed en el store
      this.$store.dispatch('setDegrees',aux)
      document.getElementById("needleAir").style.cssText = `transform: rotate(${this.$store.getters.getdegrees}deg);transition:6s`;
      
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
