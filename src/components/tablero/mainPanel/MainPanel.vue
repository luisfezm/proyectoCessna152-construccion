<template>
  <div class="mainPanel">
    <div class="mainTopPanel">
      <MiAirSpeedIndicator />
      <MiArtificialHorizon />
      <div class="indicadorMainPanel">Reloj</div>
      <Altimeter />
      <CDINav1 />
      <div class="indicadorMainPanel">SG</div>
    </div>
    <div class="mainBotPanel">
      <TurnCoordinator />
      <HeadingIndicator />
      <Volante />
      <VerticalSpeedIndicator />
      <div class="indicadorMainPanel">CDI Nav 2</div>
    </div>
  </div>
</template>

<script>
  import Altimeter from '@/components/tablero/mainPanel/MiAltimeter.vue'
  import MiAirSpeedIndicator from '@/components/tablero/mainPanel/MiAirSpeedIndicator.vue'
  import MiArtificialHorizon from '@/components/tablero/mainPanel/MiArtificialHorizon.vue'
  import CDINav1 from '@/components/tablero/mainPanel/CdiNav1.vue'
  import TurnCoordinator from '@/components/tablero/mainPanel/TurnCoordinator.vue'
  import HeadingIndicator from '@/components/tablero/mainPanel/HeadingIndicator.vue'
  import Volante from '@/components/tablero/mainPanel/MiVolante.vue'
  import VerticalSpeedIndicator from '@/components/tablero/mainPanel/VerticalSpeedIndicator.vue'

  export default {
    components: {
      Altimeter,
      MiAirSpeedIndicator,
      MiArtificialHorizon,
      CDINav1,
      TurnCoordinator,
      HeadingIndicator,
      Volante,
      VerticalSpeedIndicator,
    },
  }
</script>
