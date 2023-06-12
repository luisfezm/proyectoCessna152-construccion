<template>

  <div class="principal">

    <div class = "divicionPrincipalizq">

      <div class = "PrimeraFila" >
        <ContenedorCircular/>
        <ContenedorCircular/>
        <ContenedorCircular/>
        <ContenedorCircular/>
        <ContenedorCircular/>
        <ContenedorCircular/>

      </div>
  
      <div class = "SegundaFila" > 
        <ContenedorCircular/>
        <ContenedorCircular/>
        <ContenedorCircular/>
        <ContenedorCircular/>
               
      </div>
      
      <div class = "TerceraFila">
        <div class = "pedales">
          <Pedales/>
          <Pedales/>
        </div>
        
        <div class = "mando">
          <MandoPrincipal/>
        </div>

      </div>

    </div>

    <div class = "divicionPrincipalder">
      <div class="ElementosRectangulares">
        
        <div class="elementos">
          <ContenedorRectangulo/>
          <ContenedorRectangulo/>
          <ContenedorRectangulo/>
        </div>
        
        <div class="radio">
          <h2> posiblemente aqui meta botones en vez de radio</h2>
          
        </div>

      </div>

      <div class = "Palancas">
        <palancas id="primera"/>
        <palancas id="segunda"/>
        <palancas id="tercera"/>
        <palancas id="cuarta"/>
        <palancas id="quinta"/>
      </div>

    </div>

  </div>
</template>

<script setup>
  import ContenedorCircular from './elementos/ContenedorCircular.vue';
  import palancas from './elementos/palancas.vue';
  import MandoPrincipal from './elementos/MandoPrincipal.vue';
  import ContenedorRectangulo from './elementos/ContenedorRectangulo.vue';
  import Pedales from './elementos/Pedales.vue'
</script>

<script>
  export default {}
</script>


<style>
  .PrimeraFila{
    display: flex;
    flex-direction: row;
    background-color: royalblue;
    height: 20%;
    width: 100%;

  }

  .SegundaFila{
    display: flex;
    flex-direction: row;
    background-color: rgb(52, 168, 48);
    height: 20%;
    width: 68%;
  }

  .TerceraFila{
    background-color: rgb(168, 120, 48);
    height: 60%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .divicionPrincipalizq{
    
    background-color: coral;
    height: 100%;
    width: 50%;
  }

  .divicionPrincipalder{
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 235, 80);
    height: 100%;
    width: 50%;
  }  

  .principal{
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  .elementos{
    display: flex;
    flex-direction: column;
    
    background-color: rgb(169, 169, 43);
    height: 100%;
    width: 100%;
  }

  .mando{
    display: flex;
  justify-content: center;
  align-items: center;

    background-color: rgb(169, 169, 43);
    height: 100%;
    width: 100%;
  }

  .radio{
    background-color: beige;
    height: 100%;
    width: 100%;
    /* centrado generico */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Palancas{
    display: flex;
    flex-direction: row;
    background-color: rgb(90, 82, 196);
    height: 50%;
    width: 100%;

  }

  .ElementosRectangulares{
    display: flex;
    flex-direction: row;
    background-color: rgb(255, 80, 80);
    height: 50%;
    width: 100%;
  }

  /* Palancas */
  #primera{
    background-color: aquamarine; 
  }

  #segunda{
    background-color: rgb(7, 156, 107);
    
  }
  #tercera{
    background-color: rgb(18, 101, 73);
    
  }
  #cuarta{
    background-color: rgb(7, 156, 107);
    
  }
  #quinta{
    background-color: rgb(66, 207, 160);
    
  }




</style>