<template>
  <div class="indicadorMainPanel">
    <Attitude id="attitude" :size="70" :pitch="pitchValue"  :roll="rollValue" :class="{ 'rotate-animation': isAnimating }" />
  </div>
</template>

<script>
  import { Attitude } from 'vue-flight-indicators'
  import { mapGetters } from 'vuex'

  export default {
    name: 'IndicadorMainPanel',
    components: {
      Attitude,
    },
    data() {
      return {
        pitchValue: 0, // Valor inicial de pitch
        rollValue: 0,  // Valor inicial de roll
        isAnimating: false, // Nuevo dato para controlar la animación
      };
    },
    methods: {
  cambiarValores(pitch, roll) {
    this.isAnimating = true;
    
    setTimeout(() => {
      this.pitchValue = pitch;
      this.rollValue = roll;
      this.isAnimating = false;
      
      console.log("-------------------------")
      console.log("RollVUE = " + this.rollValue)
      console.log("Roll = " + this.getRoll())
      console.log("PitchVUE = " + this.pitchValue)
      console.log("Pitch = " + this.getPitch())
      console.log("-------------------------")
    }, 2000);
  },
      ...mapGetters(['getCurrentTranslationY']),
      pitch() {
        return this.getCurrentTranslationY * 0.4 // Fórmula para que el movimiento del pitch sea más suave
      },
      // Obtener el pitch y roll desde HorizonteArtificial.js
      getPitch(){ 
        return this.$store.getters.anguloPitch;
      },
      getRoll(){
        return this.$store.getters.anguloRoll;
      }
    },
    mounted() {
  setInterval(() => {
    const pitch = this.getPitch();
    const roll = this.getRoll();
    
    this.cambiarValores(pitch, roll);
    
    const attitudeQ = document.querySelector(".roll.indicator-box");
    attitudeQ.style.cssText = `transform: rotate(${this.pitchValue}deg); transition: 1s;`
    
  
    const inAttitude = document.querySelector(".pitch.indicator-box");
    inAttitude.style.cssText = `transition: 1s;`
  }, 500);
},

  };
</script>