<template>
  <div class="mainPanel">
    <div class="mainTopPanel">
      <Altimeter />
      <Altimeter />
      <Altimeter />
      <Altimeter />
      <Altimeter />
      <Altimeter />
    </div>
    <div class="mainBotPanel">
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
