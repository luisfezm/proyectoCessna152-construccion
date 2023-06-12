<template>
  <div class="mainPanel">
    <div class="mainTopPanel">
      <!-- Aquí van los componentes del mainTopPanel -->
      <!-- El componente Altimer debe ir solo una vez, deben crear los otros componentes 
            y colocarlos como corresponda -->
      <Altimeter />

      <Altimeter />
      <Altimeter />
      <Altimeter />
      <Altimeter />
      <Altimeter />
    </div>
    <div class="mainBotPanel">
      <!-- Aquí van los componentes del mainTopPanel -->
      <!-- Deben borrar estos componentes y crear los que se les pidió -->
      <Altimeter />
      <Altimeter />
      <Altimeter />
      <Altimeter />
      <Altimeter />
    </div>
  </div>
</template>

<script>
  import Altimeter from '@/components/tablero/mainPanel/MiAltimeter.vue'

  export default {
    components: {
      Altimeter,
    },
  }
</script>
