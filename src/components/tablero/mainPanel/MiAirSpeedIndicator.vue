<template>
  <div id = "airspeed" class="indicadorMainPanel">
    <div class="airspeed-indicator">
      <div ref="needle" class="needle" />
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.speedBase()
      setInterval(() => {
        const randomSpeed = Math.floor(Math.random() * 161)
        this.moveNeedle(randomSpeed)
      }, 1000)
    },
    methods: {
      //velocity seria el parametro recibido
      moveNeedle(velocity) {
        const needle = this.$refs.needle
        const baseAngle = 50
        const maxVelocity = 160
        const angle = baseAngle - (velocity / maxVelocity) * 180
        needle.style.transform = `rotate(${angle}deg)`
      },
      //Se pone el needle en la base del velocimetro
      speedBase() {
        this.moveNeedle(100)
      },
    },
    //-30 de velocity llega hasta 160mph
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

  .needle {
    position: absolute;
    top: 50%;
    left: 48%;
    transform-origin: 50% 0%;
    width: 4%;
    height: 35%;
    background-color: red;
    transition: transform 0.3s;
  }

  .needle::before {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -1%;
    width: 10%;
    height: 0px;
    border-style: solid;
    border-width: 0 6% 10% 6%;
    border-color: transparent transparent red transparent;
    transform: rotate(180deg);
  }

  #airspeed{
    right: 5%;
    position:relative;
    width: 80px;
    height: 80px;
    
  }
</style>
