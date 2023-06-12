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
        <PedalesPiloto />
      </div>
      <CenterColumn />
      <div class="itemTableroInferior">
        <div class="controlesTableroInferior">Controles</div>
        <PedalesCopiloto />
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
  import PedalesPiloto from './components/pedales/PedalesPiloto.vue'
  import PedalesCopiloto from './components/pedales/PedalesCopiloto.vue'
</script>

<style src="./style.css">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style>
