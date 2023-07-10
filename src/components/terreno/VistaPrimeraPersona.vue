<template>
  <div class="vistaPP">
    kfdjnfdkjndfkjvfkdjnfvkjdfnvkjndfkjvndfkjvndkjf

    <button @click="Vuelo1">Haz clic</button>
  </div>
</template>

<script>
  export default {
    methods: {
      //vuelo en linea recta
      Vuelo1() {
        //los timer se ejecutan al mismo tiempo

        //variables del store a modificar
        //trotle      (potencia)
        //carburator  (potencia)
        //angulo subida  (artificial horizon)

        //angulo del avion arriba y abajo
        //

        //estado inicial: iniciando despegue
        setTimeout(() => {
          console.log('')
        }, 2000)

        //estado consiguiendo altura
        setTimeout(() => {
          console.log(
            '*-*-120938210938120938093820913812093091230958329875-fs*daf-dsa-f*das-f*asd-fas-*df*asd*fs-adf*'
          )
        }, 3000)

        //estado manteniendo se en el aire
        setTimeout(() => {
          console.log(
            '*-*-*dsSKDJFAKJSDFHSADKÑHFSLDKAJFHSLKAFHs-fs-fs*daf-dsa-f*das-f*asd-fas-*df*asd*fs-adf*'
          )
        }, 4000)

        //estado bajando hasta colicionar
      },
    },
  }
</script>

<style>
  .vistaPP {
    background-image: url(https://w0.peakpx.com/wallpaper/750/101/HD-wallpaper-car-crash-accident-fire-crash-car.jpg);
    height: 300px;
    width: 900px;
  }
</style>
