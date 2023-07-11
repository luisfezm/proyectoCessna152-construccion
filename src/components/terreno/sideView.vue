<template>
    <div class="sideView">
      <div class="imagen" style="margin-top: -205px;"></div>
      <span class="angulo-span">
        Elevator: {{ this.angulo.toFixed(2) }} grados
      </span>
      <img v-if="anguloRudder != 0" src="https://i.imgur.com/VULLiFb.png" :style="{ transform: imageTransformCola }">
      <img v-if="anguloRudder == 0" src="https://i.imgur.com/3a4D2Zy.png" :style="{ transform: imageTransformCola }">

      <img v-if="angulo != 0" src="https://i.imgur.com/e3uBXzl.png" :style="{ transform: imageTransform }">
      <img v-if="angulo == 0" src="https://i.imgur.com/TIJnNj1.png" :style="{ transform: imageTransform }">
    </div>
  </template>
  
  <script>
  import store from "@/store";
  
  export default {
    data() {
      return {
        showImage: true,
        angulo: 0,
        anguloRudder: 0
      };
    },
  
    created() {
      setInterval(this.update, 100);
    },
  
    methods: {
      update() {
        this.anguloRudder = store.getters.getRed_Rudder;
        var estadoPitchYoke = store.getters.getEstadoPitch_yoke;

        if (estadoPitchYoke > 0) {
          this.angulo = estadoPitchYoke * 0.25;
        } else {
          this.angulo = estadoPitchYoke * 0.15;
        }
      },
    },
  
    computed: {
      imageTransform() {
        return `scale(0.45) translateY(-260px) translateX(-292px) rotateZ(${this.angulo}deg)`;
      },
      imageTransformCola() {
        return `scale(0.45) translateY(-450px) translateX(-104px) rotateX(${this.anguloRudder}deg)`;
      },
    },
  };
  </script>
  
  <style>
  .sideView {
    background-image: url("https://background-image-url.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    /* Agregamos posicionamiento relativo */
  }
  
  .imagen {
    width: 200px;
    height: 200px;
    background-image: url("https://i.imgur.com/8QN8rqJ.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  .angulo-span {
    position: absolute;
    /* Agregamos posicionamiento absoluto */
    background-color: rgba(255, 255, 255, 1);
    /* Color de fondo del span con transparencia */
    transform: translateX(-130px) translateY(-56px);
  }
  </style>
  