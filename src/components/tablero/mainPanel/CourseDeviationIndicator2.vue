<template>
  <div>
   
    <div class="cdi-container">
      <div class="cdi">
        <div class="cdi-needle" :style="`transform: rotate(${agujaRotacion}deg);`"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      agujaRotacion: 0,
      coordenadaDestino: "0,0", 
      coordenadaActual: "0,0",
      //coordenadas Curico: -34.98279, -71.23943
      //coordenadas Rancagua: -34.17083, -70.74444
      //coordenadas Santiago: -33.45694, -70.64827
    };
  },
  mounted() {
    // Simulación de actualización en tiempo real
    setInterval(() => {
      // Parsear las coordenadas deseadas en valores numéricos de x e y
      const [destinoX, destinoY] = this.coordenadaDestino.split(",").map(parseFloat);

      // Parsear las coordenadas actuales en valores numéricos de x e y
      const [actualX, actualY] = this.coordenadaActual.split(",").map(parseFloat);

      // Calcular la desviación en los ejes x e y
      const desviacionX = destinoX - actualX;
      const desviacionY = destinoY - actualY;

      // Calcular el rumbo en radianes
      const angulo = Math.atan2(desviacionY, desviacionX);

      // Convertir el rumbo de radianes a grados y limitarlo a un rango de 0 a 360 grados
      const limitarAngulo = (angulo * 180 / Math.PI + 360) % 360;

      // Calcular la posición angular de la aguja del CDI
      this.agujaRotacion = -limitarAngulo;
    }, 100);
  },
  methods: {
    updateHeading() {
      this.coordenadaActual = this.coordenadaDestino;
    },
  },
};
</script>

<style scoped>
.cdi-container {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://i.ibb.co/GHdM8K5/cdi.png');
  background-size: cover;
  background-position: center;
}

.cdi {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
}

.cdi-needle {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: top center;
  transition: transform 0.2s ease;
}



</style>
