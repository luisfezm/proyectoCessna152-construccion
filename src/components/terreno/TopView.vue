<template>
  <div class="topview">
    <div class="imageairplane">
      <div ref="ailerons_left" class="ailerons_left" />
      <div ref="ailerons_right" class="ailerons_right" />
    </div>

    <div class="wingflaps-left" />
    <div class="wingflaps-right" />
    <div ref="elevator_left" class="elevator_left" />
    <div ref="elevator_right" class="elevator_right" />

    <div ref="red_rudder" class="red_rudder" />
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      setInterval(this.moveTopView, 100) // llamar a la funcion para mover los alerones
    },
    methods: {
      moveTopView() {
        this.getValues()
        this.moveYellow()
        this.moveBlue()
        this.moveRed()
      },

      moveYellow() {
        const leftYellow = this.$refs.ailerons_left
        const rightYellow = this.$refs.ailerons_right

        if (this.$store.getters.getYellow_Aileron == 1) {
          leftYellow.style.transform = `rotateX(${-60}deg)`
          leftYellow.style.transition = `0.5s`

          rightYellow.style.transform = `rotateX(${60}deg)`
          rightYellow.style.transition = `0.5s`
        } else if (this.$store.getters.getYellow_Aileron == -1) {
          leftYellow.style.transform = `rotateX(${60}deg)`
          leftYellow.style.transition = `0.5s`

          rightYellow.style.transform = `rotateX(${-60}deg)`
          rightYellow.style.transition = `0.5s`
        } else {
          if (this.$store.getters.getYellow_Aileron == 0) {
            leftYellow.style.transform = `rotateX(${0}deg)`
            leftYellow.style.transition = `0.2s`

            rightYellow.style.transform = `rotateX(${0}deg)`
            rightYellow.style.transition = `0.2s`
          }
        }
      },

      moveBlue() {
        const leftBlue = this.$refs.elevator_left
        const rightBlue = this.$refs.elevator_right

        if (this.$store.getters.getBlue_Aileron == 1) {
          leftBlue.style.transform = `rotateX(${60}deg)`
          leftBlue.style.transition = `0.5s`

          rightBlue.style.transform = `rotateX(${240}deg)`
          rightBlue.style.transition = `0.5s`
        } else if (this.$store.getters.getBlue_Aileron == -1) {
          leftBlue.style.transform = `rotateX(${-50}deg)`
          leftBlue.style.transition = `0.5s`

          rightBlue.style.transform = `rotateX(${130}deg)`
          rightBlue.style.transition = `0.5s`
        } else {
          if (this.$store.getters.getBlue_Aileron == 0) {
            leftBlue.style.transform = `rotateX(${0}deg)`
            leftBlue.style.transition = `0.2s`

            rightBlue.style.transition = `0.2s`
            rightBlue.style.transform = `rotateX(${168}deg)`
          }
        }
      },

      moveRed() {
        let redRudder = this.$refs.red_rudder
        let aux = this.$store.getters.getRed_Rudder
        redRudder.style.transform = `rotateZ(${aux}deg)`
        redRudder.style.transition = `${0.3}S`
      },

      getValues() {
        this.$store.dispatch('obtenerVariablesRoll') // obtener valores de cada aleron
      },
    },
  }
</script>

<style lang="scss" scoped>
  .topview {
    position: relative;
  }
  .imageairplane {
    width: 316px;
    height: 234px;
    background-image: url(https://i.ibb.co/pQpk7Tz/cessnaviewuppp.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid black;
    position: relative;
    top: 50px;
    rotate: 180deg;
  }

  .ailerons_left {
    width: 79px;
    height: 9px;
    transform: rotateX(10deg);
    left: 18px;
    position: relative;
    background-color: yellow;
    top: 136px;
    transform-origin: bottom;
    rotate: -9deg;
  }
  .ailerons_right {
    width: 79px;
    height: 9px;
    transform: rotateX(-10deg);
    left: 216px;
    rotate: 9deg;
    position: relative;
    transform-origin: bottom;
    background-color: yellow;
    top: 127px;
  }

  .wingflaps-left {
    width: 49px;
    height: 9px;
    left: 97px;
    top: -91px;
    transform: rotate(-1deg);
    position: relative;
    background-color: green;
  }

  .wingflaps-right {
    width: 49px;
    height: 9px;
    left: 170px;
    top: -100px;
    transform: rotate(-1deg);
    position: relative;
    background-color: green;
  }

  .elevator_left {
    width: 51px;
    height: 10px;
    left: 152px;
    top: -20.5px;
    rotate: 178deg;
    transform: rotate(-2deg);
    position: relative;
    clip-path: polygon(0 38%, 77% 0, 81% 99%, 0% 100%);
    background-color: rgb(21, 70, 216);
    transform-origin: bottom;
  }

  .elevator_right {
    width: 51px;
    height: 10px;
    transform-origin: bottom;
    left: 112px;
    top: -30.5px;
    transform: rotateX(168deg);
    rotate: 0deg;
    position: relative;
    clip-path: polygon(0 38%, 77% 0, 81% 99%, 0% 100%);
    background-color: rgb(21, 70, 216);
  }

  .red_rudder {
    width: 1.5px;
    height: 10px;
    left: 157px;
    top: -8px;
    transform: translateZ(77px);
    position: relative;
    transform: rotateZ(1deg);
    background-color: red;
    transform-origin: top;
  }
</style>
