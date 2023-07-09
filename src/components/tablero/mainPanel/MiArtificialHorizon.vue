<template>
  <div id="horizon" class="indicadorMainPanel">
    <Attitude
      id="attitude"
      :size="80"
      :pitch="pitchValue"
      :roll="rollValue"
      :class="{ 'rotate-animation': isAnimating }"
    />
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
        rollValue: 0, // Valor inicial de roll
        nPitch: 0,
        nRoll: 0,
        isAnimating: false, // Nuevo dato para controlar la animación
      }
    },
    mounted() {
      setInterval(() => {
        this.cambiarValores(this.getPitch(), this.getRoll())
        const attitudeQ = document.querySelector('.roll.indicator-box')
        //console.log("attitudeQ: "+attitudeQ)
        attitudeQ.style.cssText = `transform: rotate(${this.getPitch()}deg); transition: 4s;`

        const inAttitude = document.querySelector('.pitch.indicator-box')
        inAttitude.style.cssText = `transition: 1.5s;`
        //console.log("dentroAttitude: "+inAttitude)
      }, 1000)
    },
    methods: {
      // Aquí puedes definir métodos para modificar los valores de pitch y roll
      cambiarValores(pitch, roll) {
        this.isAnimating = true

        setInterval(() => {
          //Se asignan nuevos valores de rotacion para el Artificial Horizon
          this.pitchValue = pitch
          this.rollValue = roll
          this.isAnimating = false
        }, 1000) // Ajusta la duración de la animación según tus necesidades
      },
      computed: {
        ...mapGetters(['getCurrentTranslationY']),
        pitch() {
          return this.getCurrentTranslationY * 0.4 //formula para que el movimiento del pitch sea mas suave
        },
      },

      //Obtener el pitch y roll Desde HorizonteArtificial.js
      getPitch() {
        //console.log("Pitch desde HorizonJS = " + this.$store.getters.anguloPitch)
        return (this.nPitch = this.$store.getters.anguloPitch)
      },
      getRoll() {
        //console.log("Roll desde HorizonJS = " + this.$store.getters.anguloRoll)
        return (this.nRoll = this.$store.getters.anguloRoll)
      },
    },
  }
</script>

<style>
  #horizon {
    position: relative;
    width: 80px;
    height: 80px;
  }
</style>
