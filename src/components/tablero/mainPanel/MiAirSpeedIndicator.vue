<template>
  <div id="indicadorMainPanel " class="indicadorMainPanel">
    <div id="AirspeedIndicator-container" class="AirspeedIndicator-container">
      <div id="centerPoint" class="centerPoint" />
      <div class="speedometerCenterHide" />
      <div class="speedometerBottomHide" />
      <div class="arrowContainer">
        <div class="arrowWrapper speed-0">
          <div class="arrow" />
        </div>
      </div>
      <div
        id="speedometerScale-1"
        class="speedometerScale speedometerScale-1"
      />
      <div
        id="speedometerScale-2"
        class="speedometerScale speedometerScale-2"
      />
      <div
        id="speedometerScale-3"
        class="speedometerScale speedometerScale-3"
      />
      <div
        id="speedometerScale-4"
        class="speedometerScale speedometerScale-4"
      />
      <div
        id="speedometerScale-5"
        class="speedometerScale speedometerScale-5"
      />
      <div
        id="speedometerScale-6"
        class="speedometerScale speedometerScale-6"
      />
      <div
        id="speedometerScale-7"
        class="speedometerScale speedometerScale-7"
      />
      <div
        id="speedometerScale-8"
        class="speedometerScale speedometerScale-8"
      />
      <div
        id="speedometerScale-9"
        class="speedometerScale speedometerScale-9"
      />
      <div
        id="speedometerScale-10"
        class="speedometerScale speedometerScale-10"
      />
      <div
        id="speedometerScale-11"
        class="speedometerScale speedometerScale-11"
      />
      <div
        id="speedometerScale-12"
        class="speedometerScale speedometerScale-12"
      />
      <div
        id="speedometerScale-13"
        class="speedometerScale speedometerScale-13"
      />
      <div
        id="speedometerScale-14"
        class="speedometerScale speedometerScale-14"
      />
      <div
        id="speedometerScale-15"
        class="speedometerScale speedometerScale-15"
      />
      <div
        id="speedometerScale-16"
        class="speedometerScale speedometerScale-16"
      />
      <div
        id="speedometerScale-17"
        class="speedometerScale speedometerScale-17"
      />
      <div
        id="speedometerScale-18"
        class="speedometerScale speedometerScale-18"
      />
      <div
        id="speedometerScale-19"
        class="speedometerScale speedometerScale-19"
      />
    </div>
    <div class="divspeedController">
      <button class="increase" @click="increaseSpeed()">Aumentar</button>
      <button class="disminuir" @click="decreaseSpeed()">Disminuir</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AirSpeed',
    data() {
      return {
        speed: 0,
        prevSpeed: 0,
        currentScale: 1,
      }
    },
    methods: {
      increaseSpeed() {
        if (this.speed < 180) {
          this.speed = this.speed + 10
          console.log('AAAAAAAAAA')
          this.addClass()
          console.log('AAAAAAAAAA')
          this.currentScale = this.currentScale + 1
          this.changeActive()
        }
      },
      decreaseSpeed() {
        if (this.speed > 0) {
          this.speed = this.speed - 10
          this.addClass()
          this.currentScale = this.currentScale - 1
          this.changeActive()
        }
      },
      addClass() {
        console.log('AAAAAAAAAAs')
        let newClass = 'speed-' + this.speed
        let prevClass = 'speed-' + this.prevSpeed
        let el = document.getElementsByClassName('arrowWrapper')[0]
        if (el.classList.contains(prevClass)) {
          el.classList.remove(prevClass)
          el.classList.add(newClass)
        }
        this.prevSpeed = this.speed
      },
      changeActive() {
        let tempClass = 'speedometerScale-' + this.currentScale
        let el = document.getElementsByClassName(tempClass)[0]
        el.classList.toggle('active')
      },
    },
  }
</script>
<style scoped>
  #indicadorMainPanel {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #AirspeedIndicator-container {
    width: 60px;
    height: 60px;
    border: 3px solid black;
    border-radius: 50%;
    margin: 2px auto;
    position: relative;
  }
  #centerPoint {
    width: 5px;
    height: 5px;
    background-color: black;
    border-radius: 50%;
    position: absolute;
    top: 27px;
    left: 27px;
    z-index: 12;
  }
  .speedometerScale {
    width: 1px;
    height: 61px;
    background-color: black;
    position: absolute;
    left: 30px;
    top: 0px;
  }
  .speedometerScale-1 {
    transform: rotate(-90deg);
  }
  .speedometerScale-2 {
    transform: rotate(-80deg);
  }
  .speedometerScale-3 {
    transform: rotate(-70deg);
  }
  .speedometerScale-4 {
    transform: rotate(-60deg);
  }
  .speedometerScale-5 {
    transform: rotate(-50deg);
  }
  .speedometerScale-6 {
    transform: rotate(-40deg);
  }
  .speedometerScale-7 {
    transform: rotate(-30deg);
  }
  .speedometerScale-8 {
    transform: rotate(-20deg);
  }
  .speedometerScale-9 {
    transform: rotate(-10deg);
  }
  .speedometerScale-10 {
    transform: rotate(0deg);
  }
  .speedometerScale-11 {
    transform: rotate(10deg);
  }
  .speedometerScale-12 {
    transform: rotate(20deg);
  }
  .speedometerScale-13 {
    transform: rotate(30deg);
  }
  .speedometerScale-14 {
    transform: rotate(40deg);
  }
  .speedometerScale-15 {
    transform: rotate(50deg);
  }
  .speedometerScale-16 {
    transform: rotate(60deg);
  }
  .speedometerScale-17 {
    transform: rotate(70deg);
  }
  .speedometerScale-18 {
    transform: rotate(80deg);
  }
  .speedometerScale-19 {
    transform: rotate(90deg);
  }
  .speedometerCenterHide {
    width: 55px;
    height: 55px;
    background-color: grey;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: 9;
  }
  .speedometerBottomHide {
    width: 60px;
    height: 30px;
    background-color: grey;
    position: absolute;
    z-index: 11;
    top: 30px;
    left: 0px;
    border-top: 1px solid;
    border-radius: 30px 30px 0 0;
    transform: rotate(180deg);
  }
  .arrowContainer {
    width: 64px;
    height: 64px;
    background-color: transparent;
    position: absolute;
    z-index: 12;
    top: 0px;
    left: -1px;
  }
  .arrowWrapper {
    width: 64px;
    height: 64px;
    background-color: transparent;
    position: relative;
    transition: all 0.4s;
  }
  .arrow {
    width: 30px;
    height: 3px;
    background-color: black;
    position: absolute;
    top: 30px;
    left: 2px;
  }
  .speed-0 {
    transform: rotate(0deg);
  }
  .speed-10 {
    transform: rotate(10deg);
  }
  .speed-20 {
    transform: rotate(20deg);
  }
  .speed-30 {
    transform: rotate(30deg);
  }
  .speed-40 {
    transform: rotate(40deg);
  }
  .speed-50 {
    transform: rotate(50deg);
  }
  .speed-60 {
    transform: rotate(60deg);
  }
  .speed-70 {
    transform: rotate(70deg);
  }
  .speed-80 {
    transform: rotate(80deg);
  }
  .speed-90 {
    transform: rotate(90deg);
  }
  .speed-100 {
    transform: rotate(100deg);
  }
  .speed-110 {
    transform: rotate(110deg);
  }
  .speed-120 {
    transform: rotate(120deg);
  }
  .speed-130 {
    transform: rotate(130deg);
  }
  .speed-140 {
    transform: rotate(140deg);
  }
  .speed-150 {
    transform: rotate(150deg);
  }
  .speed-160 {
    transform: rotate(160deg);
  }
  .speed-170 {
    transform: rotate(170deg);
  }
  .speed-180 {
    transform: rotate(180deg);
  }
  .divspeedController {
    width: 10;
    height: 10;
    cursor: pointer;
    color: white;
  }
  .increase {
    background-color: green;
  }
  .decrease {
    background-color: red;
  }
</style>
