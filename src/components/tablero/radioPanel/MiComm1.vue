<template>
  <div>
    <h1>Radio de Avión</h1>
    <div>
      <label for="frecuencia">Frecuencia:</label>
      <input type="text" id="frecuencia" v-model="frecuencia" />
    </div>
    <div>
      <button @click="subirFrecuencia">Subir Frecuencia</button>
      <button @click="bajarFrecuencia">Bajar Frecuencia</button>
    </div>
    <p>Frecuencia actual: {{ frecuencia }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        frecuencia: "118.1" // Frecuencia inicial
      };
    },
    methods: {
      subirFrecuencia() {
        const frecuenciaNumerica = parseFloat(this.frecuencia);
        if (frecuenciaNumerica < 136.0) {
          this.frecuencia = (frecuenciaNumerica + 0.025).toFixed(3);
        }
      },
      bajarFrecuencia() {
        const frecuenciaNumerica = parseFloat(this.frecuencia);
        if (frecuenciaNumerica > 108.0) {
          this.frecuencia = (frecuenciaNumerica - 0.025).toFixed(3);
        }
      }
    }
  };
</script>

<style scoped>
h1 {
  font-size: 20px;
  margin-bottom: 10px;
}

label {
  margin-right: 10px;
}

button {
  margin-right: 10px;
}
</style>

