<template>
  <div class="back">
    <img
      id="rotarImg"
      class="rotar"
      src="src/assets/artificial_horizon1.svg"
      alt="test"
    />
    <img
      id="agujaImg"
      class="aguja"
      src="src/assets/artificial_horizon_aguja.svg"
      alt="aguja"
    />
  </div>
</template>

<script>
  export default {
    mounted() {
      const rotarImg = document.getElementById('rotarImg')
      const agujaImg = document.getElementById('agujaImg')

      rotarImg.addEventListener('load', () => {
        this.rotarImagen(10)
      })

      agujaImg.addEventListener('load', () => {
        this.moverVerticalmente(5, 10)
      })
    },

    methods: {
      rotarImagen(grados) {
        const rotarImg = document.getElementById('rotarImg')

        rotarImg.style.transform = `rotate(${grados}deg) translateY(0px)`
      },

      moverVerticalmente(pixels, grados) {
        // Convertir el ángulo de grados a radianes
        var angleInRadians = (grados * Math.PI) / 180

        // Calcular las coordenadas del punto rotado
        var newX =
          0 * Math.cos(angleInRadians) - pixels * Math.sin(angleInRadians)
        var newY =
          0 * Math.sin(angleInRadians) + pixels * Math.cos(angleInRadians)
        console.log(newX, newY)
        const agujaImg = document.getElementById('agujaImg')
        agujaImg.style.transform = `translateY(${newY}px) rotate(${grados}deg) translateX(${newX}px)`
      },
    },
  }
</script>

<style>
  .back {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url('src/assets/artificial_horizon_back.svg');
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .aguja {
    position: absolute;
  }
</style>
