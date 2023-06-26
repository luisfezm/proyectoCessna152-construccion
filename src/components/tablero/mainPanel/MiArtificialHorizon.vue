<template>
  <div class="indicadorMainPanel">
    <Attitude id="attitude" :size="70" :pitch="0"  :roll="0"  />
  </div>
</template>

<script>
  import { Attitude } from 'vue-flight-indicators'


  export default {
    name: 'IndicadorMainPanel',
    components: {
      Attitude,
    },


    mounted() {
  setInterval(() => {
 

    const attitudeQ = document.querySelector(".roll.indicator-box");
    attitudeQ.style.cssText = `transform: rotate(${this.$store.getters.anguloRoll}deg); transition: 1s;`;
    
  
    const inAttitude = (this.$store.getters.anguloPitch)/5;
    const element = document.querySelector('.pitch.indicator-box');
    element.style.cssText = `transform: translateY(${inAttitude}px); transition: 1s`;

  }, 500);
},

  };
</script>