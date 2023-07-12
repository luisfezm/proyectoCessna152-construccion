<template>
  
  <div class="radioPanel">

    <div class="buttons">
      <button class="mic">EXT</button>
      <button class="mic"> 1 </button>
      <button class="mic"> 2 </button>
      <button class="botones">BOTH</button>
      <button class="botones">NAV1</button>
      <button class="botones">NAV2</button>
      <button class="botones">AOE</button>
      <button class="botones">DME</button>
      <button class="botones">MKR</button>
      <button class="mic">SPXR</button>
    </div>

    <!-- Aquí van los componentes de la radio, se creó como ejemplo el componente COMM1, pero debe quedar solo uno y agregar los otros componentes que se les pidió crear-->
    <div class="radios">
      <div class="item item1"> <Comm1 /> </div>
      <div class="item item2"> <Nav1 /> </div>
      <div class="item item3"> <Comm2 /> </div>
      <div class="item item4"> <Nav2 /> </div>
      
    </div>
    <!--<Comm1 />
    <Comm1 />
    <Comm1 />
    <Comm1 />-->
    <!-- Este último div también es un componente, se colocó solo por fines del esqueleto, deben llevarse este div con su clase al componente que se les pidió crear -->
    <div class="indicadorRadioTransponder">
      
      <div class="transponder"> <Transponder/> </div>
    </div>
  </div>
</template>

<script>
  import Comm1 from '@/components/tablero/radioPanel/MiComm1.vue'
  import Comm2 from '@/components/tablero/radioPanel/MiComm2.vue'
  import Nav1 from '@/components/tablero/radioPanel/MiNav1.vue'
  import Nav2 from '@/components/tablero/radioPanel/MiNav2.vue'
  import Transponder from '@/components/tablero/radioPanel/Transponder.vue'

  export default {
    components: {
      Comm1,
      Comm2,
      Nav1,
      Nav2,
      Transponder,
    },
  }
</script>

<style scoped>

.radioPanel{
  display: flex;
  flex-direction: column;
 
}
.buttons{
  display: flex;
  z-index: 1;
  margin-left: -10px;
  justify-content: center;
  border-color: #7980bed8;
  
}
.mic{
  background-color: greenyellow;
  font-size: 10px;
  width: 35px;
  padding: 2px;
  margin-left: 4px;
}
.botones{
  background-color: #7980bed8;
  font-size: 10px;
  width: 35px;
  padding: 0px;
  margin-left: 4px;
  justify-content: center;
}

.radios{
  z-index: 1;
  display: grid;
  grid-template-areas: 
    "area1 area2"
    "area3 area4";
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-left: -10px;
}
.item{
  height: 90px; /* Ajusta la altura según tus necesidades */
}

.item.item3 {
  grid-area: area3; /* Asignar el área "area3" */
  margin-top: -15px; /* Subir 8 píxeles */
}

.item.item4 {
  grid-area: area4; /* Asignar el área "area4" */
  margin-top: -15px; /* Subir 8 píxeles */
}

.indicadorRadioTransponder{
  z-index: 1;
}


</style>