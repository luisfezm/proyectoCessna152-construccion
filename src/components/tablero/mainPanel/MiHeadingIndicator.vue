<template>
  <div id = "heading" class="indicadorMainPanel">
    <Heading
      :size="80"
      :heading="headingValue"
      class="{ 'rotate-animation': isAnimating }"
    />
  </div>
</template>

<script>
  import { Heading } from 'vue-flight-indicators'

  export default {
    name: 'IndicadorMainPanel',
    components: {
      Heading,
    },
    data() {
      return {
        headingValue: 0, // Valor inicial de heading
      }
    },

    mounted() {
      setInterval(() => {
        this.cambiarValores(this.headingValue)
        const attitudeQ = document.querySelector('.heading.indicator-box')
        //console.log("attitudeQ: "+attitudeQ)
        attitudeQ.style.cssText = `transform: rotate(${this.headingValue}deg); transition: 4s;`
      }, 1000)
    },
    methods: {
      // Aquí puedes definir métodos para modificar los valores de pitch y roll
      cambiarValores(heading) {
        this.isAnimating = true
        heading = Math.floor(Math.random() * 360)
        setInterval(() => {
          //Se asignan nuevos valores de rotacion para el Artificial Horizon
          this.headingValue = heading
          this.isAnimating = false
        }, 1000) // Ajusta la duración de la animación según tus necesidades
      },
      /*
    //Obtener el pitch y roll Desde HorizonteArtificial.js
    getPitch(){ 
      //console.log("Pitch desde HorizonJS = " + this.$store.getters.anguloPitch)
      return this.nPitch = this.$store.getters.anguloPitch
    },
    getRoll(){
      //console.log("Roll desde HorizonJS = " + this.$store.getters.anguloRoll)
      return this.nRoll = this.$store.getters.anguloRoll
    }*/
    },
  }
</script>

<style>
 #heading{
  position: relative;
  right: 12%;
  width: 80px;
  height: 80px;
 }
</style>


