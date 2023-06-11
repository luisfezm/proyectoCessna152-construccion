<template>
  <div>
    <MiBoton @toggle="toggleLuz" />
    <MiLuz :encendida="luz" />
  </div>
</template>

<script>
  import MiBoton from '@/components/MiBoton.vue'
  import MiLuz from '@/components/MiLuz.vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      MiBoton,
      MiLuz,
    },
    computed: {
      ...mapState(['luz']),
    },
    methods: {
      ...mapActions(['toggleLuz']),
    },
  }
</script>
