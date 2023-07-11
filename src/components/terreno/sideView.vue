<template>
    <div class="imagenCessna">
        <img src="https://i.imgur.com/5SjqiUf.png" :style="{ transform: imageTransformCola }">
        <img src="https://i.imgur.com/mWvEqGj.png" :style="{ transform: imageTransform }">
        <img src="https://i.imgur.com/E73yWP5.png" :style="{ transform: imageTransformAla }">
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
        },
    },

    computed: {
        imageTransform() {
            const translateX = 174; // Posición X original
            const translateY = -16; // Posición Y original

            return `scale(0.49) translate(${translateX}px, ${translateY}px) rotateZ(${this.angulo}deg)`;
        },
        imageTransformCola() {
            const translateX = 390; // Posición X original
            const translateY = -49; // Posición Y original

            return `scale(0.49) translate(${translateX}px, ${translateY}px) rotateY(${this.anguloRudder}deg)`;
        },
        imageTransformAla() {

            return `scale(0.6) translateX(-210px) translateY(-25px) rotateZ(${this.anguloAmarillo}deg)`;
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

.imagenCessna {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform: scale(1) translateX(-265px) translateY(30px);
    align-items: center;
    background-image: url("https://i.imgur.com/CgC90ym.png");
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
  