<template>
  <div class="img">
    <div id="right" />
    <div id="left" />
  </div>
</template>

<script>
  export default {
    mounted() {
      // let aux = 220
      // let aux_2 = 220
      setInterval(() => {
        let gasoline_1 =
          document.getElementById(
            'right'
          ) /*gasolina 1 es el estanque 1 de gasolina */
        let gasoline_2 =
          document.getElementById(
            'left'
          ) /*gasolina 2 es el estanque 2 de gasolina 2 */
        /*modificacion de la rotacion de las agujas */
        if (this.$store.getters.getStateGasoline_1 <= 137) {
          gasoline_2.style.zIndex = '20'
        }
        gasoline_1.style.transform = `rotate(${this.$store.getters.getStateGasoline_1}deg)`
        gasoline_2.style.transform = `rotate(${this.$store.getters.getStateGasoline_2}deg)`
      }, 1000)
      /*se ejecuta siempre cada 1 segundo de intervalo, aunque se puede modificar el tiempo */
    },
  }
</script>

<style scoped>
  .img {
    /*contenedor*/
    background-image: url('https://i.ibb.co/N7wm9J6/Fuel-Quantity.png');
    width: 140px;
    height: 80px;
    background-size: 100%, 100%;
    background-position: center;
    background-repeat: no-repeat;
    left: 200px;
    position: relative;
  }

  #right {
    /*aguja derecha */
    width: 2px;
    height: 22px;
    background-color: white;
    transform: rotate(220deg); /*137 hasta 220*/
    top: 77%;
    transition: 3s;
    position: absolute;
    transform-origin: top;
    left: 21%;
    z-index: 10;
  }

  #left {
    /*aguja izquierda*/
    width: 2px;
    height: 22px;
    background-color: white;
    transform: rotate(220deg);
    left: 76%;
    top: 77%;
    transition: 3s;
    position: absolute;
    transform-origin: top;
    z-index: 0;
  }
</style>
