<template>
  <div class="frontView">
    <div class="imagen" />
    <div ref="left_Yellow" class="aileron left_Yellow" />
    <div ref="rigth_Yellow" class="aileron rigth_Yellow" />
    <div ref="left_green" class="flaps left_green" />
    <div ref="rigth_green" class="flaps rigth_green" />
    <div ref="left_blue" class="elevators left_blue" />
    <div ref="rigth_blue" class="elevators rigth_blue" />
    <div ref="red_rudder" class="rudder" />
    
    <div class="front_propeller" ref="propeller" id="front_propeller">
      <!-- <div id="line1"></div>
      <div id="line2"></div> -->
    </div>
  </div>
</template>

<script>
  export default {
    mounted() { 
      setInterval(this.runfuntions,100)
    },

    methods: {
      runfuntions(){
        this.moveAileron()
        this.moveElevators()
        this.moveRudder()
        this.movePropeller()
        this.moveFlaps()
      },
      moveAileron() {
        let ly = this.$refs.left_Yellow
        let ry = this.$refs.rigth_Yellow
        let auxyellow = this.$store.getters.getYellow_Aileron
        if (this.$store.getters.getYellow_Aileron > 0) {
          // si 30 --> 100%
          // x deg --> 50%

          ly.style.transform = `rotateX(${90 - auxyellow}deg)`
          ry.style.transform = `rotateX(${90 + auxyellow}deg)`
        } else if (this.$store.getters.getYellow_Aileron < 0) {
          ly.style.transform = `rotateX(${90 - auxyellow}deg)`
          ry.style.transform = `rotateX(${90 + auxyellow}deg)`
        } else {
          ly.style.transform = `rotateX(${90}deg)`
          ry.style.transform = `rotateX(${90}deg)`
        }
        ly.style.transition = `${0.4}S`
        ry.style.transition = `${0.4}S`
      },
      async movePropeller() {
        // let valor_Motor = this.$refs.top_propeller
          
        
        if (this.$store.state.estadoPrendidoOApagado == true) {
          const valor_Motor = document.getElementById('front_propeller')
          valor_Motor.classList.add('animar')
         
          
          await this.sleep(2000)
          valor_Motor.classList.remove('animar')
          valor_Motor.classList.add('animar2')
        } else {
          const valor_Motor = document.getElementById('front_propeller')
          valor_Motor.classList.remove('animar')
          valor_Motor.classList.remove('animar2')
        }
        
      },

      sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
      },
      moveElevators() {
        let lb = this.$refs.left_blue
        let rb = this.$refs.rigth_blue
        let auxBlue = this.$store.getters.getBlue_Aileron
        if (this.$store.getters.getBlue_Aileron > 0) {
          lb.style.transform = `rotateX(${120 + auxBlue}deg)`
          rb.style.transform = `rotateX(${120 + auxBlue}deg)`
        } else if (this.$store.getters.getBlue_Aileron < 0) {
          lb.style.transform = `rotateX(${60 + auxBlue}deg)`
          rb.style.transform = `rotateX(${60 + auxBlue}deg)`
        } else {
          lb.style.transform = `rotateX(${90}deg)`
          rb.style.transform = `rotateX(${90}deg)`
        }
        lb.style.transition = `${0.8}S`
        rb.style.transition = `${0.8}S`
      },
      moveFlaps() {
        let lg = this.$refs.left_green
        let rg = this.$refs.rigth_green
        //parte complementaria de topview.js
        let auxGreen = this.$store.getters.getOrange_Trim
        lg.style.transform = `rotateX(${90 - auxGreen}deg)`
        rg.style.transform = `rotateX(${90 - auxGreen}deg)`
      
        lg.style.transition = `${0.8}S`
        rg.style.transition = `${0.8}S`
      },
      moveRudder() {
        let rr = this.$refs.red_rudder
        let aux = this.$store.getters.getRed_Rudder - 90
        rr.style.transform = `rotateY(${aux}deg)`
        rr.style.transition = `${0.4}S`
      },
    },
  }
</script>

<style scoped>
  .frontView {
    width: 200px;
    height: 150px;
    position: absolute;
    margin-left: auto;
    margin-right: 0;
    /* border: 1px solid black; */
  }
  .imagen {
    background-image: url(https://i.ibb.co/q1mgsd2/bbbb.png);
    background-size: 100%;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 50px;
  }
  .aileron {
    width: 46px;
    height: 10px;
    position: absolute;
    background-color: rgb(216, 216, 0);
    transform-origin: top;
  }
  .left_Yellow {
    top: 78px;
    left: 13px;
    rotate: 1deg;
  }
  .rigth_Yellow {
    top: 78px;
    left: 141px;
    rotate: -1deg;
  }
  .flaps {
    width: 30px;
    height: 10px;
    background-color: green;
    position: absolute;
    transform: rotateX(90deg);
    transform-origin: top;
  }
  .left_green {
    top: 79px;
    left: 59px;
  }
  .rigth_green {
    top: 79px;
    left: 110px;
  }
  .elevators {
    width: 17px;
    height: 8px;
    background-color: blue;
    position: absolute;
    transform: rotateX(90deg);
    transform-origin: top;
  }
  .left_blue {
    top: 85px;
    left: 72px;
  }
  .rigth_blue {
    top: 85px;
    left: 110px;
  }
  .rudder {
    width: 8px;
    height: 17px;
    background-color: red;
    position: absolute;
    top: 60px;
    left: 100px;
    transform-origin: left;
    transform: rotateY(90deg);
  }
  .indicators {
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: 0px;
  }
  #front_propeller {
    background: black;
    height: 15px;
    position: absolute;
    width: 3px;
    top: 51.3%;
    left: 49.8%;
    border-radius: 40%;
    transform-origin: bottom;
    
  }
  .animar {
    animation: front_propeller 1.5s linear infinite;
  }
  .animar2 {
    animation: front_propeller 0.2s linear infinite;
  }
  @keyframes front_propeller {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

   #front_propeller:after {
    background: black;
    height: 15px;
    position: absolute;
    content: "";
    width: 3px;
    top: 100%;
    border-radius: 40%;  
  }  

  

 
</style>
