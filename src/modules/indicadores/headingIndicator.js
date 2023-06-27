// headingIndicator.js
const headingIndicator = {
  state: {
    // Estado inicial de los indicadores
    HeadingIndicator: 0,
  },
  mutations: {
    // Mutaciones para modificar el estado de los indicadores
    calcularHeadingIndicator(state, PedalValue) {
      state.HeadingIndicator += PedalValue / 10
      state.HeadingIndicator = state.HeadingIndicator % 360
    },
  },
  actions: {
    // Acciones para realizar operaciones relacionadas con los indicadores
    calcularHeadingIndicator({ commit }, PedalValue) {
      commit('calcularHeadingIndicator', PedalValue)
    },
  },
  getters: {
    // Getters para obtener datos del estado de los indicadores
    getHeadingIndicator: (state) => state.getHeadingIndicator,
  },
}

export default headingIndicator
