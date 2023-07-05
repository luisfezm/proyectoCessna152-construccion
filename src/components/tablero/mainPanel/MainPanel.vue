<template>
  <div class="mainPanel">
    <div class="mainTopPanel">
      <MiAirSpeedIndicator />
      <MiArtificialHorizon />
      <MiAltimeter />
      <TurnCoordinator />
      <CourseDeviationIndicator1 />

    </div>

    <div class="mainBotPanel">
      <MiHeadingIndicator />
      <VerticalSpeed />
      <CourseDeviationIndicator2 />
    </div>
  </div>
</template>

<script>
  import MiAirSpeedIndicator from '@/components/tablero/mainPanel/MiAirSpeedIndicator.vue'
  import MiArtificialHorizon from '@/components/tablero/mainPanel/MiArtificialHorizon.vue'
  import MiAltimeter from './MiAltimeter.vue'
  import TurnCoordinator from './TurnCoordinator.vue'
  import VerticalSpeed from './VerticalSpeed.vue'
  import MiHeadingIndicator from './MiHeadingIndicator.vue'
  import CourseDeviationIndicator1 from './CourseDeviationIndicator1.vue'
  import CourseDeviationIndicator2 from './CourseDeviationIndicator2.vue'


  export default {
    components: {
      MiAirSpeedIndicator,
      MiArtificialHorizon,
      MiAltimeter,
      TurnCoordinator,
      VerticalSpeed,
      MiHeadingIndicator,
      CourseDeviationIndicator1,
      CourseDeviationIndicator2

    },
  }
</script>


