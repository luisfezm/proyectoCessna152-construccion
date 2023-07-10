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
    <div class="indicators">
      <p ref="indicator_p">hola</p>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      setInterval(this.getStates, 100)
      setInterval(this.moveAileron, 100)
      setInterval(this.moveElevators, 100)
      setInterval(this.moveRudder, 100)
    },
    methods: {
      getStates() {
        this.$store.dispatch('obtenerVariablesRoll')
        let p = this.$refs.indicator_p
        p.textContent = 'Rudder: '
        p.append(this.$store.getters.getRed_Rudder + ' grados')
      },
      moveAileron() {
        let ly = this.$refs.left_Yellow
        let ry = this.$refs.rigth_Yellow
        if (this.$store.getters.getYellow_Aileron == 1) {
          ly.style.transform = `rotateX(${120}deg)`
          //ly.style.transition= `${0.4}S`;
          ry.style.transform = `rotateX(${60}deg)`
          //ry.style.transition= `${0.4}S`;
        } else if (this.$store.getters.getYellow_Aileron == -1) {
          ly.style.transform = `rotateX(${60}deg)`
          ry.style.transform = `rotateX(${120}deg)`
        } else {
          ly.style.transform = `rotateX(${90}deg)`
          ry.style.transform = `rotateX(${90}deg)`
        }
        ly.style.transition = `${0.4}S`
        ry.style.transition = `${0.4}S`
      },
      moveElevators() {
        let lb = this.$refs.left_blue
        let rb = this.$refs.rigth_blue
        if (this.$store.getters.getBlue_Aileron == 1) {
          lb.style.transform = `rotateX(${120}deg)`
          rb.style.transform = `rotateX(${120}deg)`
        } else if (this.$store.getters.getBlue_Aileron == -1) {
          lb.style.transform = `rotateX(${60}deg)`
          rb.style.transform = `rotateX(${60}deg)`
        } else {
          lb.style.transform = `rotateX(${90}deg)`
          rb.style.transform = `rotateX(${90}deg)`
        }
        lb.style.transition = `${0.4}S`
        rb.style.transition = `${0.4}S`
      },
      moveRudder() {
        let rr = this.$refs.red_rudder
        /*
          if(this.$store.getters.getRed_Rudder==-1){
            rr.style.transform = `rotateY(${120}deg)` 
          }else if(this.$store.getters.getRed_Rudder==1){
            rr.style.transform = `rotateY(${120}deg)` 
          }
          
          else{
            rr.style.transform = `rotateY(${90}deg)`
          }
          */
        let aux = this.$store.getters.getRed_Rudder + 90
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
    position: relative;

    background-color: white;
    border: 1px solid black;
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
    transform: rotateX(90deg);
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
    border: 1px solid black;
    position: absolute;
    bottom: 0px;
  }
</style>
