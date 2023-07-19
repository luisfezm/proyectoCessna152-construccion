<template>
  <div id="app">
    <!-- Cuando haces clic en este botón, el valor de showModal se establece en true -->
    <button @click="showModal = true">Abrir Modal</button>

    <!-- Este div se muestra solo cuando showModal es true -->
    <div v-if="showModal" class="modal open">
      <div class="modal-content">
        <h2>Funcionalidades del simulador</h2>
        <!-- Cuando haces clic en este botón, el valor de showModal se establece en false -->
        <button @click="showModal = false">Cerrar</button>
        <!-- Aquí puede añadir el contenido del cuerpo del modal -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // Esta es la variable que controla si se muestra o no el modal
        showModal: false,
      }
    },
  }
</script>

<style scoped>
  .modal {
    /* Estos estilos se aplican al modal cuando está oculto */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.8s ease;
    opacity: 0;
    visibility: hidden;
    z-index: 9999; /* Asegúrate de que el modal aparezca por delante de otros elementos */
  }

  .modal-content {
    /* Estos estilos se aplican al contenido del modal */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 2em;
    width: 30%;
    border-radius: 0.5em;
  }

  .modal.open {
    /* Estos estilos se aplican al modal cuando está visible */
    opacity: 1;
    visibility: visible;
  }
</style>
