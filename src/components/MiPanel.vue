<template>
  <div>
    <MiBoton @toggle="toggleLuz" />
    <MiLuz :encendida="luz" />
  </div>
  <!-- si ves este div borralo, era solo para probar el Horizonte artificial -->
  <div>
    <div>
      <button @click="$store.dispatch('actualizar', { roll: 0, pitch: 100 })">
        pitch max+
      </button>
      <button @click="$store.dispatch('actualizar', { roll: 0, pitch: 1 })">
        pitch min+
      </button>
      <button @click="$store.dispatch('actualizar', { roll: 0, pitch: -1 })">
        pitch min-
      </button>
      <button @click="$store.dispatch('actualizar', { roll: 0, pitch: -100 })">
        pitch max-
      </button>
    </div>
    <div>
      <button @click="$store.dispatch('actualizar', { roll: 100, pitch: 0 })">
        roll max+
      </button>
      <button @click="$store.dispatch('actualizar', { roll: 1, pitch: 0 })">
        roll min+
      </button>
      <button @click="$store.dispatch('actualizar', { roll: -1, pitch: 0 })">
        roll min-</button
      ><button @click="$store.dispatch('actualizar', { roll: -100, pitch: 0 })">
        roll max-
      </button>
    </div>
    <div>
      pitch: {{ $store.getters.anguloPitch }}° vel:{{
        $store.getters.velocidadPitch
      }}<br />
      roll: {{ $store.getters.anguloRoll }}° vel:{{
        $store.getters.velocidadRoll
      }}
    </div>
  </div>
  <!-- aqui termina el div de prueba -->
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
