<template>
  <div>
    <div
      class="led"
      :class="{ 'led-red': !estadoLed, 'led-green': estadoLed }"
    />
  </div>
  <div class="base">
    <div
      :class="['palanca', { active: estadoPresionado }]"
      @mousedown="presionarBoton"
      @mouseup="soltarBoton"
    />
  </div>
</template>

<script>
  export default {
    // Exportar
    data() {
      // Datos
      return {
        estadoPresionado: false, // Estado para iniciar la animación
        estadoPrimer: false, // Estado para cambiar el color del primer botón
        contador: 0, // Contador para cambiar el estadoPrimer
      }
    },
    methods: {
      // Métodos
      presionarBoton() {
        // Cuando se presiona el botón
        this.estadoPresionado = true // Cambiar el estado para iniciar la animación
      },
      soltarBoton() {
        // Cuando se suelta el botón
        this.estadoPresionado = false // Cambiar el estado para reiniciar la animación
        this.contador++ // Aumentar el contador
        if (this.contador === 5) {
          this.estadoPrimer = !this.estadoPrimer // Cambiar el estado
          this.contador = 0 // Reiniciar el contador después de cambiar el estado
        }
      },
      // Si el contador llega a 5
    },
  }
</script>

<style>
  .base {
    width: 80px;
    height: 80px;
    background-color: black;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .palanca {
    width: 50px;
    height: 50px;
    background-color: silver;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .palanca.active {
    transform: scale(0.8);
  }

  .led {
    width: 10px;
    height: 10px;
    border-radius: 10%;
    background-color: red;
  }

  .led-green {
    background-color: green;
  }
</style>
