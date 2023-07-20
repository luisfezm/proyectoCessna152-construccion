<template>
  <div class="topview">
    <div class="imageairplane">
      <div ref="ailerons_left" class="ailerons_left" />
      <div ref="ailerons_right" class="ailerons_right" />
      <div ref="wingflaps_left" class="wingflaps_left" />
      <div ref="wingflaps_right" class="wingflaps_right" />
      <div ref="elevator_left" class="elevator_left" />
      <div ref="elevator_right" class="elevator_right" />
      <div ref="red_rudder" class="red_rudder" />
      <!-- <div ref="orange_trim" class="orange_trim" /> -->
      <div id="top_propeller" ref="top_propeller" class="top_propeller" />
    </div>

    <div class="tabla">
      <p ref="indicator_tabla" class="text_tabla" />
    </div>
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
        this.getAilerons()
        this.getValues()
        this.moveYellow()
        this.moveGreen()
        //  this.moveOrange()
        this.moveBlue()
        this.moveRed()
        this.movePropeller()
      },

      getAilerons() {
        let p = this.$refs.indicator_tabla
        p.textContent = 'Rudder: '
        p.append(
          this.$store.getters.getRed_Rudder +
            ' deg | ' +
            'Yellow: ' +
            this.$store.getters.getYellow_Aileron +
            ' deg  | ' +
            'Blue: ' +
            this.$store.getters.getBlue_Aileron +
            ' deg |  ' +
            'Green:' +
            this.$store.getters.getGreen_Flaps +
            ' deg '
        )
      },

      moveYellow() {
        const leftYellow = this.$refs.ailerons_left
        const rightYellow = this.$refs.ailerons_right
        let yellowAux = this.$store.getters.getYellow_Aileron

        if (this.$store.getters.getYellow_Aileron < 0) {
          leftYellow.style.transform = `rotateX(${30 - yellowAux}deg)`

          rightYellow.style.transform = `rotateX(${30 - yellowAux}deg)`
        } else if (this.$store.getters.getYellow_Aileron > 0) {
          leftYellow.style.transform = `rotateX(${30 + yellowAux}deg)`

          rightYellow.style.transform = `rotateX(${30 + yellowAux}deg)`
        } else {
          leftYellow.style.transform = `rotateX(${0}deg)`
          rightYellow.style.transform = `rotateX(${0}deg)`
        }

        leftYellow.style.transition = `${0.8}S`
        rightYellow.style.transition = `${0.8}S`
      },
      moveOrange() {
        const orangeAileron = this.$refs.orange_trim
        let orangeAux = this.$store.getters.getOrange_Trim

        if (this.$store.getters.getOrange_Trim < 0) {
          orangeAileron.style.transform = `rotateX(${210 - orangeAux}deg)`
        } else if (this.$store.getters.getOrange_Trim > 0) {
          orangeAileron.style.transform = `rotateX(${210 + orangeAux}deg)`
        } else {
          orangeAileron.style.transform = `rotateX(${168}deg)`
        }

        orangeAileron.style.transition = `${0.8}S`
      },

      moveGreen() {
        const leftGreen = this.$refs.wingflaps_left
        const rightGreen = this.$refs.wingflaps_right
        let greenAux = this.$store.getters.getGreen_Flaps

        if (this.$store.getters.getGreen_Flaps < 0) {
          leftGreen.style.transform = `rotateX(${30 - greenAux}deg)`

          rightGreen.style.transform = `rotateX(${30 - greenAux}deg)`
        } else if (this.$store.getters.getGreen_Flaps > 0) {
          leftGreen.style.transform = `rotateX(${30 + greenAux}deg)`

          rightGreen.style.transform = `rotateX(${30 + greenAux}deg)`
        } else {
          leftGreen.style.transform = `rotateX(${0}deg)`
          rightGreen.style.transform = `rotateX(${0}deg)`
        }

        leftGreen.style.transition = `${0.8}S`
        rightGreen.style.transition = `${0.8}S`
      },

      moveBlue() {
        const leftBlue = this.$refs.elevator_left
        const rightBlue = this.$refs.elevator_right
        let auxAileronBlue = this.$store.getters.getBlue_Aileron

        if (this.$store.getters.getBlue_Aileron < 0) {
          leftBlue.style.transform = `rotateX(${30 - auxAileronBlue}deg)`
          leftBlue.style.transition = `0.8s`

          rightBlue.style.transform = `rotateX(${210 - auxAileronBlue}deg)`
          rightBlue.style.transition = `0.8s`
        } else if (this.$store.getters.getBlue_Aileron > 0) {
          leftBlue.style.transform = `rotateX(${30 + auxAileronBlue}deg)`
          leftBlue.style.transition = `0.8s`

          rightBlue.style.transform = `rotateX(${210 + auxAileronBlue}deg)`
          rightBlue.style.transition = `0.8s`
        } else {
          if (this.$store.getters.getBlue_Aileron == 0) {
            leftBlue.style.transform = `rotateX(${0}deg)`
            leftBlue.style.transition = `1s`

            rightBlue.style.transition = `1s`
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

      async movePropeller() {
        // let valor_Motor = this.$refs.top_propeller

        if (this.$store.getters.getEstado_Helice == true) {
          const valor_Motor = document.getElementById('top_propeller')
          valor_Motor.classList.add('animar')
          await this.sleep(2000)
          valor_Motor.classList.remove('animar')
          valor_Motor.classList.add('animar2')
        } else {
          const valor_Motor = document.getElementById('top_propeller')
          valor_Motor.classList.remove('animar')
          valor_Motor.classList.remove('animar2')
        }
      },

      sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
      },

      getValues() {
        this.$store.dispatch('obtenerVariablesRoll') // obtener valores de cada aleron
      },
    },
  }
</script>

<style lang="scss" scoped>
  .topview {
    position: absolute;
    margin-left: auto;
    margin-right: 0;
  }
  .imageairplane {
    width: 200px;
    height: 150px;
    background-image: url(https://i.ibb.co/9h74fLX/avion-4.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid transparent;
    position: absolute;
    left: 200px;
    rotate: 180deg;
  }

  .ailerons_left {
    width: 49px;
    height: 8px;
    transform: rotateX(10deg);
    left: 137px;
    position: absolute;
    background-color: yellow;
    top: 84px;
    transform-origin: bottom;
    rotate: 9deg;
  }
  .ailerons_right {
    width: 49px;
    height: 8px;
    transform: rotateX(10deg);
    left: 11px;
    position: absolute;
    background-color: yellow;
    top: 84px;
    transform-origin: bottom;
    rotate: -9deg;
  }

  .wingflaps_left {
    width: 32px;
    height: 8px;
    left: 59px;
    top: 80px;
    transform: rotateX(-1deg);
    position: absolute;
    transform-origin: bottom;
    background-color: green;
  }

  .wingflaps_right {
    width: 32px;
    height: 8px;
    left: 106px;
    top: 80px;
    transform: rotateX(-1deg);
    position: absolute;
    transform-origin: bottom;
    background-color: green;
  }

  .elevator_left {
    width: 32px;
    height: 9px;
    left: 94px;
    top: 27px;
    rotate: 189deg;
    position: absolute;
    clip-path: polygon(0 38%, 77% 0, 81% 99%, 0% 100%);
    background-color: rgb(21, 70, 216);
    transform-origin: top;
  }

  .elevator_right {
    width: 32px;
    height: 9px;
    transform-origin: top;
    left: 70px;
    top: 27px;
    transform: rotateX(168deg);
    rotate: -10deg;
    position: absolute;
    clip-path: polygon(0 38%, 77% 0, 81% 99%, 0% 100%);
    background-color: rgb(21, 70, 216);
  }
  .orange_trim {
    width: 24px;
    height: 5px;
    transform-origin: top;
    left: 76px;
    top: 23px;
    transform: rotateX(0deg);
    rotate: -10deg;
    position: absolute;
    clip-path: polygon(0 38%, 77% 0, 81% 99%, 0% 100%);
    background-color: rgb(237, 150, 0);
  }

  .red_rudder {
    width: 1.5px;
    height: 13px;
    left: 98px;
    top: 1px;
    transform: translateZ(77px);
    position: absolute;
    transform: rotateZ(1deg);
    background-color: red;
    transform-origin: bottom;
  }

  #top_propeller {
    width: 2px;
    border-radius: 35%;
    height: 36px;
    background-color: black;
    position: absolute;
    left: 98px;
    top: 123px;
    right: 20px;
    rotate: 90deg;
  }

  .animar {
    animation: top_propeller 1.5s linear infinite;
  }
  .animar2 {
    animation: top_propeller 0.2s linear infinite;
  }

  @keyframes top_propeller {
    from {
      transform: rotateX(0deg);
    }
    to {
      transform: rotateX(360deg);
    }
  }
  .tabla {
    width: 340px;
    height: 100%;
    left: 20px;
    position: absolute;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    top: 270px;
    font-size: 10px;
  }
  .text_tabla {
    color: black;
    background-color: transparent;
    border-radius: 4px;
  }
</style>
