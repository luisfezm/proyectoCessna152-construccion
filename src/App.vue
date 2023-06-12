<!-- App.vue -->
<template>
  <div id="app">

    <div class = "content1">
      <!--- vista primera persona --->
      
      <div class="primeraPersona">
        <PrimeraPersona/>
      </div>

      <!--- vista de mapa  --->
      
      <div class="vistaMapa">
        <VistaMapa/>
      </div>
      
        <!-- vista de alturas -->
        <!-- mar y tierra -->
      <div class="alturasAvion">
        <AlturasAvion/>
      </div>

    </div>

    <div class= "content2">
      <!-- vista de controles de manejo -->
        <div class="tablero">
          <ControlesManejo/>
        </div>
      
      <!-- mostrar elementos afectados del avion -->

        <div class="partesAvion">
          <PartesAvion/>
        </div>
      
      </div>

  </div>    
  
</template>

<script setup>
  import AlturasAvion from './components/AlturasAvion.vue';
  import PrimeraPersona from './components/PrimeraPersona.vue';
  import PartesAvion from './components/PartesAvion.vue';
  import ControlesManejo from './components/ControlesManejo.vue';
  import VistaMapa from './components/VistaMapa.vue'
</script>

<script>

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  #app {
    display: flex;
    flex-direction: column;
    background-color: bisque;
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 100vh;
  }


  .content1 {
    display: flex;
    flex-direction: row;
    height: 40vh;
    width: 100vw;
  }

  .content2 {
    display: flex;
    flex-direction: row;
    height: 60vh;
    width: 100vw;
  }
  /* 40 30 30 */

  .primeraPersona {
    background-color: rgb(81, 207, 207);
    width: 40vw;
    
  }

  .vistaMapa {
    background-color: rgb(111, 149, 54);
    width: 30vw;
   
  }

  .alturasAvion{
    background-color: rgb(115, 115, 146);
    width: 30vw;

    
  }

  .tablero{
    background-color: white;
    width: 70vw;
  }

  .partesAvion{
    background-color: rgb(63, 92, 99);
    width: 30vw;
  }


</style>
