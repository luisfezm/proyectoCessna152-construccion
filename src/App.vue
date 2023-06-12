<!-- App.vue -->

<template>
  <div class="app">
    <MiTerreno />

    <div class="tableroSuperior">
      <MainPanel />
      <RadioPanel />
      <RightHandPanel />
    </div>
    <div class="tableroInferior">
      <div class="itemTableroInferior">
        <div class="controlesTableroInferior">Controles</div>
        <PedalesIzquierda />
      </div>
      <CenterColumn />
      <div class="itemTableroInferior">
        <div class="controlesTableroInferior">Controles</div>
        <PedalesDerecha />
      </div>
    </div>
  </div>
</template>

<script setup>
  import MiTerreno from './components/terreno/MiTerreno.vue'
  import MainPanel from './components/tablero/mainPanel/MainPanel.vue'
  import RadioPanel from './components/tablero/radioPanel/RadioPanel.vue'
  import RightHandPanel from './components/tablero/rightHandPanel/RightHandPanel.vue'
  import CenterColumn from './components/tablero/centerColumn/CenterColumnPanel.vue'
  import PedalesIzquierda from './components/pedales/PedalesIzquierda.vue'
  import PedalesDerecha from './components/pedales/PedalesDerecha.vue'
</script>

<style src="./style.css">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style>
