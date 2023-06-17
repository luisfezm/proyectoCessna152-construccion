<template>
  <div class="mainPanel">
    <div class="mainTopPanel">
      <MiAirSpeedIndicator />

      <MiArtificialHorizon />
      <MiAltimeter />
      <TurnCoordinator />
    </div>

    <div class="mainBotPanel">
      <VerticalSpeed />
    </div>
  </div>
</template>

<script>
  import MiAirSpeedIndicator from '@/components/tablero/mainPanel/MiAirSpeedIndicator.vue'
  import MiArtificialHorizon from '@/components/tablero/mainPanel/MiArtificialHorizon.vue'
  import MiAltimeter from './MiAltimeter.vue'
  import TurnCoordinator from './TurnCoordinator.vue'
  import VerticalSpeed from './VerticalSpeed.vue'

  export default {
    components: {
      MiAirSpeedIndicator,
      MiArtificialHorizon,
      MiAltimeter,
      TurnCoordinator,
      VerticalSpeed,
    },
  }
</script>
