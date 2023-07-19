<template>
    <div class="imagenCessna">
      <img src="https://i.imgur.com/5SjqiUf.png" :style="{ transform: imageTransformCola, transformOrigin: 'left center' }">
      <img src="https://i.imgur.com/mWvEqGj.png" :style="{ transform: imageTransform, transformOrigin: 'left center' }">
      <img src="https://i.imgur.com/E73yWP5.png" :style="{ transform: imageTransformAla, transformOrigin: 'left center' }">
      <img src="https://i.imgur.com/WsPdnoR.png" :style="{ transform: imageTransformWingFlaps, transformOrigin: 'left center' }">
      <img src="https://i.imgur.com/E73yWP5.png" :style="{ transform: imageTransformAlaAtras, transformOrigin: 'left center' }">
      <img src="https://i.imgur.com/L1kG2Gu.png" style="width: 25px; height: 110px; position: relative; top: 11px; left: -370px;">
    </div>
  </template>
  
  <script>
  import store from "@/store";
  
  export default {
    data() {
      return {
        showImage: true,
        angulo: 0,
        anguloRudder: 0,
        anguloAmarillo: 0,
      };
    },
  
    created() {
      setInterval(this.update, 100);
    },
  
    methods: {
      update() {
        this.anguloRudder = store.getters.getRed_Rudder;
        var estadoPitchYoke = store.getters.getEstadoPitch_yoke;
        this.angulo = estadoPitchYoke * 0.3;
        var estadoRollYoke = store.getters.getEstadoRoll_yoke;
        this.anguloAmarillo = estadoRollYoke * 0.3;

        this.angulo_wingflags = store.getters.get
      },
    },
  
    computed: {
      imageTransform() {
        const translateX = 520; // Posición X original
        const translateY = -25; // Posición Y original
        const imageWidth = 280; // Ancho de la imagen azul
  
        return `scale(0.45) translate(${translateX}px, ${translateY}px) rotateZ(${this.angulo}deg)`;
      },
      imageTransformCola() {
        const translateX = 760; // Posición X original
        const translateY = -50; // Posición Y original
        const imageWidth = 280; // Ancho de la imagen roja
  
        return `scale(0.7) translate(${translateX - imageWidth}px, ${translateY}px) rotateY(${this.anguloRudder}deg)`;
      },
      imageTransformAla() {
        const translateX = -200; // Posición X original
        const translateY = -45; // Posición Y original
        const imageWidth = 280; // Ancho de la imagen amarilla
  
        return `scale(0.5) translate(${translateX + imageWidth}px, ${translateY}px) rotateZ(${this.anguloAmarillo}deg)`;
      },
      imageTransformAlaAtras() {
        const translateX = 5; // Posición X original
        const translateY = -45; // Posición Y original
        const imageWidth = 280; // Ancho de la imagen amarilla
  
        return `scale(0.5) translate(${translateX - imageWidth}px, ${translateY}px) rotateZ(${-this.anguloAmarillo}deg)`;
      },
      imageTransformWingFlaps() {
        // Puedes ajustar los valores de posición y escala según necesites
        const translateX = -95; // Posición X original
        const translateY = -45; // Posición Y original
        return `scale(0.5) translate(${translateX}px, ${translateY}px) rotateZ(${store.getters.angulo_wingflags}deg)`;
      },
    },
  };
  </script>
  
  <style>
  .CessnaRojo {
    transform: scale(0.32) translateX(340px) translateY(-49px);
  }
  
  .CessnaAzul {
    transform: scale(0.34) translateX(35px) translateY(-18px);
  }
  
  .CessnaAmarillo {
    transform: scale(0.6) translateX(-200px) translateY(-20px);
  }
  
  .CessnaVerde {
    transform: scale(0.5) translateX(-265px) translateY(-60px);
  }
  
  .sideView {
    background-image: url("https://background-image-url.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
  }
  
  .imagenCessna {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform: scale(0.65) translateX(-300px) translateY(180px);
    align-items: center;
    background-image: url("https://i.imgur.com/CgC90ym.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  .angulo-span {
    position: absolute;
    background-color: rgba(255, 255, 255, 1);
    transform: translateX(-130px) translateY(-56px);
  }
  </style>