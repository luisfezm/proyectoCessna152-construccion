<template>
  <div class="FlightHourRecorder">
    <div id="container">
      <div class="hinder2" />
      <div id="stage">
        <div id="hours1" class="wheel">
          <div class="plane one">0</div>
          <div class="plane two">1</div>
          <div class="plane three">2</div>
          <div class="plane four" />
          <div class="plane five" />
          <div class="plane six" />
          <div class="plane seven" />
          <div class="plane eight" />
          <div class="plane nine" />
          <div class="plane ten" />
        </div>

        <div id="hours2" class="wheel">
          <div class="plane one">0</div>
          <div class="plane two">1</div>
          <div class="plane three">2</div>
          <div class="plane four">3</div>
          <div class="plane five">4</div>
          <div class="plane six">5</div>
          <div class="plane seven">6</div>
          <div class="plane eight">7</div>
          <div class="plane nine">8</div>
          <div class="plane ten">9</div>
        </div>

        <div id="minutes1" class="wheel">
          <div class="plane one">0</div>
          <div class="plane two">1</div>
          <div class="plane three">2</div>
          <div class="plane four">3</div>
          <div class="plane five">4</div>
          <div class="plane six">5</div>
          <div class="plane seven" />
          <div class="plane eight" />
          <div class="plane nine" />
          <div class="plane ten" />
        </div>

        <div id="minutes2" class="wheel">
          <div class="plane one">0</div>
          <div class="plane two">1</div>
          <div class="plane three">2</div>
          <div class="plane four">3</div>
          <div class="plane five">4</div>
          <div class="plane six">5</div>
          <div class="plane seven">6</div>
          <div class="plane eight">7</div>
          <div class="plane nine">8</div>
          <div class="plane ten">9</div>
        </div>

        <div id="seconds1" class="wheel">
          <div class="plane one">0</div>
          <div class="plane two">1</div>
          <div class="plane three">2</div>
          <div class="plane four">3</div>
          <div class="plane five">4</div>
          <div class="plane six">5</div>
          <div class="plane seven" />
          <div class="plane eight" />
          <div class="plane nine" />
          <div class="plane ten" />
        </div>

        <div id="seconds2" class="wheel">
          <div class="plane one">0</div>
          <div class="plane two">1</div>
          <div class="plane three">2</div>
          <div class="plane four">3</div>
          <div class="plane five">4</div>
          <div class="plane six">5</div>
          <div class="plane seven">6</div>
          <div class="plane eight">7</div>
          <div class="plane nine">8</div>
          <div class="plane ten">9</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        seconds2: 0, // segundos unidades
        seconds1: 0, // segundos decenas
        minutes2: 0, // minutos unidades
        minutes1: 0, // minutos decenas
        auxminutes1: 0, // auxiliar para minutos
        decenasMin: 0, // auxiliar para decenas de minutos
        auxhoras: 0, // auxiliar para horas decenas
        hours2: 0, // horas unidades
        decenasHoras: 0, // auxiliar para horas
        hours1: 0, // horas decenas
        onAir: true,
      }
    },

    mounted() {
      if (this.onAir) {
        setInterval(this.tickTock, 1000) // cada 1 segundo real avanza un segundo
      }
    },

    methods: {
      tickTock() {
        if (this.seconds2 === 9) {
          // segundos unidades
          this.seconds2 = 0 //cada 10 segundos vuelve a 0
        } else {
          this.seconds2++
        }

        if ((this.seconds1 === 5) & (this.seconds2 == 0)) {
          // segundos decenas
          this.seconds1 = 0 // cada 60 segundos vuelve a 0
          this.auxminutes2 = 1
        } else {
          if (this.seconds2 === 0) {
            this.seconds1++
          }
        }

        if ((this.minutes2 === 9) & (this.auxminutes2 == 1)) {
          this.minutes2 = 0
          this.auxminutes1 = 1 // minutos unidades
          this.auxminutes2 = 0 // cada 10 minutos vuelve a 0
          this.decenasMin = 1
        } else {
          if (this.auxminutes2 == 1) {
            this.minutes2++
            this.auxminutes2 = 0
          }
        }

        if ((this.minutes1 == 5) & (this.decenasMin == 1)) {
          this.minutes1 = 0
          this.decenasMin = 0
          this.auxhoras = 1 // minutos decenas
        } else {
          // cada 60 minutos vuelve a 0
          if (this.decenasMin == 1) {
            this.minutes1++
            this.decenasMin = 0
          }
        }

        if ((this.hours2 == 9) & (this.auxhoras == 1)) {
          this.hours2 = 0
          this.auxhoras = 0 // horas unidades
          this.decenasHoras = 1 // cada 10 horas vuelve a 0
        } else {
          if (this.auxhoras == 1) {
            this.hours2++
            this.auxhoras = 0
          }
        }

        if ((this.hours1 == 9) & (this.decenasHoras == 1)) {
          this.hours1 = 0
          this.decenasHoras = 0
        } else {
          // horas decenas
          if (this.decenasHoras == 1) {
            // cada 100 horas vuelve a 0
            this.hours1++
            this.decenasHoras = 0
          }
        }

        this.setRotation('hours1', this.hours1 * 36)
        this.setRotation('hours2', this.hours2 * 36)
        this.setRotation('minutes1', this.minutes1 * 36)
        this.setRotation('minutes2', this.minutes2 * 36)
        this.setRotation('seconds1', this.seconds1 * 36)
        this.setRotation('seconds2', this.seconds2 * 36)
      },

      setRotation(el, ang) {
        var transform = document.getElementById(el).style.transform
        var current_angle = parseInt(transform.match(/\d+/))
        transform
          ? (current_angle = parseInt(transform.match(/\d+/)))
          : (current_angle = 0)
        var rotations = Math.floor(current_angle / 360)
        if (current_angle - 360 * rotations != ang) {
          var new_angle
          ang == 0
            ? (new_angle = 360 * (rotations + 1))
            : (new_angle = 360 * rotations + ang)
          document.getElementById(el).style.transform =
            'rotateX(-' + new_angle + 'deg)'
        }
      },
    },
  }
</script>
<style scoped>
  .right-top .FlightHourRecorder {
    position: relative;
    /* right: 10%; */
    top: 10%;
  }

  .right-bottom .FlightHourRecorder {
    position: relative;
    /* right: 10%; */
    top: 25%;
  }
  body {
    color: #fff;
    font-family: 'HelveticaNeue', Helvetica, sans-serif;
  }
  #container {
    width: 90px;
    height: 90px;
    margin: 0 auto;
    perspective-origin: center center;
    position: absolute;
  }

  .hinder2 {
    position: absolute;
    width: 90px;
    height: 90px;
    background-repeat: no-repeat;
    background-size: 100%, 100%;
    z-index: 10;
    background-image: url(https://i.ibb.co/swjNfML/hourindicator.png);
  }
  #stage {
    width: 32px;
    left: 23px;
    top: 24px;
    position: absolute;
    height: 10px;
    transition: transform 2s;
    transform-style: preserve-3d;
    transform: translateZ(-300px);
    background-color: black;
  }

  .wheel {
    height: 1%;
    width: 5%;
    transform-style: preserve-3d;
    transition: transform 1s;
  }

  .plane {
    font-family: 'HelveticaNeue-CondensedBold', Helvetica, sans-serif;
    font-weight: bold;
    position: absolute;
    color: white;
    height: 100%;
    width: 100%;
    border-radius: 25%;
    text-align: center;
    font-size: 70%;
    line-height: 1;
    background: rgba(10, 10, 10, 0.95);

    transition: transform 2s, opacity 2s;
    backface-visibility: hidden;
    text-shadow: 0 -2px 0 rgba(0, 0, 0, 1);
  }

  #hours1 {
    position: absolute;
    top: 10%;
    left: 0%;
  }

  #hours2 {
    position: absolute;
    top: 10%;
    left: 15.5%;
  }

  #minutes1 {
    position: absolute;
    top: 10%;
    left: 35%;
  }

  #minutes2 {
    position: absolute;
    top: 10%;
    left: 50%;
  }

  #seconds1 {
    position: absolute;
    top: 10%;
    left: 67%;
  }

  #seconds2 {
    position: absolute;
    top: 10%;
    left: 81%;
  }

  .one {
    transform: translateZ(20px);
  }

  .two {
    transform: rotateX(36deg) translateZ(20px);
  }

  .three {
    transform: rotateX(72deg) translateZ(20px);
  }

  .four {
    transform: rotateX(108deg) translateZ(20px);
  }

  .five {
    transform: rotateX(144deg) translateZ(20px);
  }

  .six {
    transform: rotateX(180deg) translateZ(20px);
  }

  .seven {
    transform: rotateX(216deg) translateZ(20px);
  }

  .eight {
    transform: rotateX(252deg) translateZ(20px);
  }

  .nine {
    transform: rotateX(288deg) translateZ(20px);
  }

  .ten {
    transform: rotateX(324deg) translateZ(20px);
  }
</style>
