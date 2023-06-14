 <template>
  <div class="principal">
    <div class="divicionPrincipalizq">
      <div class="PrimeraFila">
        <ContenedorCircularEjemplo />
        <ArtificialHorizon />
        <ContenedorCircular />
        <ContenedorCircular />
        <ContenedorCircular />
      </div>

      <div class="SegundaFila">
        <VerticalSpeed/>
        <TurnCoordinator/>
        <AirspeedIndicator/>
        <ContenedorCircular />
      </div>

      <div class="TerceraFila">
        <div class="pedalesCabina">
          <Pedales />
          <Pedales />
        </div>

        <div class="mando">
          <MandoPrincipal />
        </div>
      </div>
    </div>

    <div class="divicionPrincipalder">
      <div class="ElementosRectangulares">
        <div class="elementos">
          <ContenedorRectangulo />
          <ContenedorRectangulo />
          <ContenedorRectangulo />
        </div>

        <div class="radio">
          <h2>posiblemente aqui meta botones en vez de radio</h2>
        </div>
      </div>

      <div class="Palancas">
        <CarburetorHeat id="primera"/>
        <MixtureKnob id="segunda" />
        <TrottleKnob id="tercera" />
        <TrimWheel />
        <WingFlaps />
      </div>
    </div>
  </div>
</template>

<script setup>
  import ContenedorCircular from './elementos/ContenedorCircular.vue'
  import palancas from './elementos/palancas.vue'
  import MandoPrincipal from './elementos/MandoPrincipal.vue'
  import ContenedorRectangulo from './elementos/ContenedorRectangulo.vue'
  import Pedales from './elementos/Pedales.vue'

  /* importar los nuevos componentes */
   
  import AirspeedIndicator from './elementos/AirspeedIndicator.vue';
  import TurnCoordinator from './elementos/TurnCoordinator.vue';
  import ContenedorCircularEjemplo from './elementos/ContenedorCircularEjemplo.vue'
  import ArtificialHorizon from './elementos/ArtificialHorizon.vue'
  import MixtureKnob from './elementos/MixtureKnob.vue'
  import TrottleKnob from './elementos/TrottleKnob.vue'
  import TrimWheel from './elementos/TrimWheel.vue'
  import WingFlaps from './elementos/WingFlaps.vue'
  import CarburetorHeat from './elementos/CarburetorHeat.vue';
  import VerticalSpeed from './elementos/VerticalSpeed.vue';
</script>

<script>
  export default {}
</script>

<style>
  .PrimeraFila {
    display: flex;
    flex-direction: row;
    background-color: rgb(196, 141, 79);
    height: 20%;
    width: 100%;
  }

  .SegundaFila {
    display: flex;
    flex-direction: row;
    background-color: rgb(196, 141, 79);
    height: 20%;
    width: 68%;
  }
  .pedalesCabina {
    display: flex;
    flex-direction: row;
    background-color: rgb(196, 141, 79);
    height: 40%;
    margin-top: 20%;
  }

  .TerceraFila {
    background-color: rgb(196, 141, 79);
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .divicionPrincipalizq {
    background-color: rgb(196, 141, 79);
    height: 100%;
    width: 50%;
  }

  .espacio {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  .divicionPrincipalder {
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 235, 80);
    height: 100%;
    width: 50%;
  }

  .principal {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  .elementos {
    display: flex;
    flex-direction: column;

    background-color: rgb(196, 141, 79);
    height: 100%;
    width: 100%;
  }

  .mando {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(196, 141, 79);
    height: 100%;
    width: 100%;
  }

  .radio {
    background-color: rgb(196, 141, 79);
    height: 100%;
    width: 100%;
    /* centrado generico */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Palancas {
    display: flex;
    flex-direction: row;
    background-color: rgb(196, 141, 79);
    height: 50%;
    width: 100%;
  }

  .ElementosRectangulares {
    display: flex;
    flex-direction: row;
    background-color: rgb(255, 80, 80);
    height: 50%;
    width: 100%;
  }

  /* Palancas */
  #primera {
    background-color: rgb(110, 132, 124);
  }

  #segunda {
    background-color: rgb(161, 193, 182);
  }
  #tercera {
    background-color: rgb(99, 119, 112);
  }
  #cuarta {
    background-color: rgb(148, 181, 170);
  }
  #quinta {
    background-color: rgb(82, 106, 98);
  }
</style>

