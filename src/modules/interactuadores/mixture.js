const mixture = {
  state: {
    consumoBencinaHora: 6,
    estadoMixture: 0,
  },
  mutations: {
    // Mutación para actualizar el consumo de bencina por hora
    actualizarConsumoBencinaHora(state, payload) {
      state.consumoBencinaHora = payload;
    },
  },
  actions: {
    // Acciones para realizar operaciones relacionadas con los interactuadores
    teclaPresionada(context, event) {
      console.log('estadoMixture:', context.state.estadoMixture);
    },
    // Acción para actualizar el consumo de bencina por hora
    actualizarBencinaPorHora(context, axis) {
      context.commit('actualizarConsumoBencinaHora', axis);
    },
  },
  getters: {
    // Getters para obtener datos del estado de los interactuadores
    getEstadoMixture(state) {
      return state.estadoMixture;
    },
    // Getter para obtener el consumo de bencina por hora
    getConsumoBencinaHora(state) {
      return state.consumoBencinaHora;
    },
  },
};

export default mixture;