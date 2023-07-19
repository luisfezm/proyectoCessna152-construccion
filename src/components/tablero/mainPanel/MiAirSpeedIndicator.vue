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
      setInterval(this.setValues,100)   
     
    },
/*

      30 deg   -->>  40 knots
      160 deg  -->>  100 knots
      290 deg  -->> 180 knots
      320 deg  -->> 200 knots


      80 kntos    *180
      /290

      100 deg   70k
      x          50k
 
*/
    methods: {
      setValues(){
        this.$store.dispatch('setKnots')
        
        let knot = this.$store.getters.getknots
        this.moveNeedle(knot)
      },
     moveNeedle(knots){
      let aux
      //actalizar varialvle Knots en el store
      //this.$store.dispatch('setKnots',(knots))

      if(knots<=0){
        aux=0
      }
      else if(knots<100){
        if(knots <=40){
          aux = (knots*30)/40
        }
        
        else if(knots<70){
          aux = ((knots*100)/70)-15
        }
        else if(knots>=70){
          aux = ((knots*160)/100)-10
        }  
      }else if(knots<=200){
        aux = (knots*290)/180
      }else{
        aux=320
      }
      //actualizar variable degree en el store
      this.$store.dispatch('setDegrees',aux)
      //console.log("los nudos son: "+this.$store.getters.getknots)
      //console.log("los grados son: "+this.$store.getters.getdegrees)
      document.getElementById("needleAir").style.cssText = `transform: rotate(${this.$store.getters.getdegrees}deg);transition:0.5s`;
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