<template>
  <div class="pedales">
    <div class="pedal-izquierdo" :class="{ 'presionado': izquierdoPresionado }" @mousedown="presionarIzquierdo" @mouseup="soltarIzquierdo"></div>
    <div class="pedal-derecho" :class="{ 'presionado': derechoPresionado }" @mousedown="presionarDerecho" @mouseup="soltarDerecho"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        izquierdoPresionado: false,
        derechoPresionado: false
      };
    },
    methods: {
      presionarIzquierdo() {
        this.izquierdoPresionado = true;
      // Aquí puedes realizar acciones relacionadas con el pedal izquierdo, como enviar datos al backend o realizar cambios en el estado del avión.
      },
      soltarIzquierdo() {
        this.izquierdoPresionado = false;
      // Aquí puedes realizar acciones relacionadas con el pedal izquierdo al soltarlo.
      },
      presionarDerecho() {
        this.derechoPresionado = true;
      // Aquí puedes realizar acciones relacionadas con el pedal derecho, como enviar datos al backend o realizar cambios en el estado del avión.
      },
      soltarDerecho() {
        this.derechoPresionado = false;
      // Aquí puedes realizar acciones relacionadas con el pedal derecho al soltarlo.
      }
    }
  };
</script>

<style>
.pedales {
  display: flex;
  justify-content: space-between;
}

.pedal-izquierdo, .pedal-derecho {
  width: 50px;
  height: 100px;
  background-color: rgb(103, 102, 102);
  transition: background-color 0.2s ease;
}

.pedal-izquierdo.presionado, .pedal-derecho.presionado {
  background-color: red;
}
</style>


