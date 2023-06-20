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
     
    },
    methods: {
     
      
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
