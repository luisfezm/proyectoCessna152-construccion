<template>
  <div class="ignition-switch">  <!-- // aca se crea el switch de ignicion sigan viendo...  -->
    <div class="key" :class="{ active: isKeyActive }" @click="toggleKey"> <!-- // aca se llama a la funcion toggleKey cuando se hace click en el switch sigan viendo... -->
      <div class="key-handle"></div> <!-- // aca se crea el switch sigan viendo... -->
      <div class="key-positions"> <!--    // aca se crean las posiciones del switch sigan viendo... -->
        <div v-for="(state, index) in throttleStates" :key="index" class="key-position" :class="{ active: throttleIndex === index }"></div> <!--  // aca se crean las posiciones del switch sigan viendo... -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';  // aca se importa la funcion ref de vue sigan viendo...

export default {

  setup() {
    const estadoPrendidoOApagado = ref(false);  // aca se crea la variable estadoPrendidoOApagado para ver si esta prendido o apagado el motor sigan viendo...

    return {
      estadoPrendidoOApagado
    };
  },

  data() {
    return {
      isKeyActive: false,   // aca se crea la variable isKeyActive para ver si esta activo el switch sigan viendo...
      throttleStates: ['off', 'r', 'l', 'both', 'start'], // aca se crea la variable throttleStates para ver los estados del switch sigan viendo...
      throttleIndex: 0  // aca se crea la variable throttleIndex para ver el indice del switch sigan viendo...
    };
  },

  methods: {
    toggleKey() {
      this.throttleIndex++; // aca se incrementa el indice del switch sigan viendo...
      if (this.throttleIndex >= this.throttleStates.length) { // aca se verifica si el indice es mayor o igual a la longitud del switch sigan viendo...
        this.throttleIndex = 0; // aca se reinicia el indice del switch sigan viendo...
      }
      this.isKeyActive = true;  // aca se activa el switch sigan viendo...

      if (this.throttleStates[this.throttleIndex] === 'off') {  // aca se verifica si el estado del switch es off sigan viendo...
        this.estadoPrendidoOApagado = false;  // aca se apaga el motor sigan viendo...
      } else if (this.throttleStates[this.throttleIndex] === 'start') { // aca se verifica si el estado del switch es start sigan viendo...
        this.estadoPrendidoOApagado = true; // aca se prende el motor sigan viendo...
      }

      console.log('Estado actual del ignition switch:', this.throttleStates[this.throttleIndex]); // aca se muestra el estado actual del switch sigan viendo...
      console.log('Estado actual del estadoMotor:', this.estadoPrendidoOApagado); // aca se muestra el estado actual del motor sigan viendo...

    }
  }
};
</script>

<style>


.ignition-switch {  
  width: 100px;
  height: 200px;
  display: flex;
  align-items: center;
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
