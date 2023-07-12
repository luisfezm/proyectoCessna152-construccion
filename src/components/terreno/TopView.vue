<template>
  <div class="topview">
    <div class="imageairplane">
      <div ref="ailerons_left" class="ailerons_left" />
      <div ref="ailerons_right" class="ailerons_right" />
      <div class="wingflaps-left" />
      <div class="wingflaps-right" />
      <div ref="elevator_left" class="elevator_left" />
      <div ref="elevator_right" class="elevator_right" />
      <div ref="red_rudder" class="red_rudder" />
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
        this.moveBlue()
        this.moveRed()
      },

      getAilerons() {
        let p = this.$refs.indicator_tabla
        p.textContent = 'Rudder: '
        p.append(
          this.$store.getters.getRed_Rudder +
            ' deg | ' +
            'Aileron Yellow: ' +
            this.$store.getters.getYellow_Aileron +
            ' deg  | ' +
            'Aileron Blue: ' +
            this.$store.getters.getBlue_Aileron +
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

  .wingflaps-left {
    width: 32px;
    height: 8px;
    left: 59px;
    top: 80px;
    transform: rotate(-1deg);
    position: relative;
    background-color: green;
  }

  .wingflaps-right {
    width: 32px;
    height: 8px;
    left: 106px;
    top: 80px;
    transform: rotate(-1deg);
    position: absolute;
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

  .tabla {
    width: 340px;
    height: 100px;

    height: 100%;
    position: absolute;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    top: 277px;
    font-size: 10px;
  }
  .text_tabla {
    color: black;
    border-radius: 4px;
  }
</style>
