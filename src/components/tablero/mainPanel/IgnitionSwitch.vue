<template>
  <PrimerBoton ref="primerBoton" />
  <div class="ignition-switch">
    <div class="key" :class="{ active: isKeyActive }" @click="toggleKey">
      <div class="key-handle" />
      <div class="key-positions">
        <div
          v-for="(state, index) in throttleStates"
          :key="index"
          class="key-position"
          :class="{ active: throttleIndex === index }"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import PrimerBoton from './PrimerBoton.vue' // aca se importa el componente PrimerBoton sigan viendo...
  import store from '@/store' // aca se importa el store sigan viendo...

  export default {
    // aca se exporta el componente IgnitionSwitch sigan viendo...
    components: {
      // aca se importa el componente PrimerBoton sigan viendo...
      PrimerBoton, // aca se importa el componente PrimerBoton sigan viendo...
    },

    data() {
      // aca se crea la data del switch sigan viendo...
      return {
        // aca se retorna la data del switch sigan viendo...
        isKeyActive: false, // aca se crea la variable isKeyActive para ver si esta activo el switch sigan viendo...
        throttleStates: ['off', 'r', 'l', 'both', 'start'], // aca se crea la variable throttleStates para ver los estados del switch sigan viendo...
        throttleIndex: 0, // aca se crea la variable throttleIndex para ver el indice del switch sigan viendo...
        estadoPrimerONOFF: false, // Nueva variable para almacenar el valor de estadoPrimer
        estadoPrendidoOApagado: false, // Nueva variable para almacenar el valor de estadoPrendidoOApagado
        variableTraspasoMotor: false, // Nueva variable para almacenar el valor de variableTraspasoMotor
      }
    },

    methods: {
      // aca se crean los metodos del switch sigan viendo...
      toggleKey() {
        // aca se crea el metodo toggleKey para ver si esta activo el switch sigan viendo...
        this.estadoPrimerONOFF = this.$refs.primerBoton.estadoPrimer
        this.throttleIndex++ // aca se incrementa el indice del switch sigan viendo...
        if (this.throttleIndex >= this.throttleStates.length) {
          // aca se verifica si el indice es mayor o igual a la longitud del switch sigan viendo...
          this.throttleIndex = 0 // aca se reinicia el indice del switch sigan viendo...
        }

        if (this.throttleStates[this.throttleIndex] === 'off') {
          // aca se verifica si el estado del switch es off sigan viendo...
          this.estadoPrendidoOApagado = false // aca se cambia el estado del motor a apagado sigan viendo...
          this.isKeyActive = true // aca se cambia el estado del switch a activo sigan viendo...
        } else if (this.throttleStates[this.throttleIndex] === 'start') {
          // aca se verifica si el estado del switch es start sigan viendo...
          if (this.estadoPrimerONOFF === true) {
            // aca se verifica si el estado del primer boton es true sigan viendo...
            this.estadoPrendidoOApagado = true // aca se cambia el estado del motor a prendido sigan viendo...
            this.isKeyActive = false // aca se cambia el estado del switch a inactivo sigan viendo...
          }
        }

        store.dispatch('setEstadoPrendidoOApagado', this.estadoPrendidoOApagado) // aca se envia el estado del motor al store sigan viendo...

        console.log(
          'Estado actual del ignition switch:',
          this.throttleStates[this.throttleIndex]
        ) // aca se muestra el estado actual del switch sigan viendo...
        console.log(
          'Estado actual del estadoMotor:',
          this.estadoPrendidoOApagado
        ) // aca se muestra el estado actual del motor sigan viendo...
      },
    },
  }
</script>

<style>
  .ignition-switch {
    width: 100px;
    height: 200px;
    display: flex;
    justify-content: center;
  }

  .key {
    width: 80px;
    height: 80px;
    background-color: #c2c2c2;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: transform 1s;
  }

  .key-handle {
    width: 20px;
    height: 40px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 1s;
  }

  .key.active .key-handle {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .ignition-switch .key-positions {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 80%;
  }

  .ignition-switch .key-position {
    width: 10px;
    height: 10px;
    background-color: #c2c2c2;
    border-radius: 50%;
    transition: background-color 0.3s;
  }

  .ignition-switch .key-position.active {
    background-color: #ff0000;
  }
</style>
