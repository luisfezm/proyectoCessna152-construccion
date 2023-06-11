<!-- Panel.vue -->
<template>
  <div>
    <boton @toggle="toggleLuz" />
    <luz :encendida="luz" />
  </div>
</template>

<script>
  import Boton from './Boton.vue'
  import Luz from './Luz.vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      Boton,
      Luz,
    },
    computed: {
      ...mapState(['luz']),
    },
    methods: {
      ...mapActions(['toggleLuz']),
    },
  }
</script>
