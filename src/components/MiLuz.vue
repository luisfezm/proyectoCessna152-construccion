<template>
  <div>
    <p v-if="encendida">Luz encendida</p>
    <p v-else>Luz apagada</p>
  </div>
</template>

<script>
  export default {
    props: ['encendida'],
  }
</script>
