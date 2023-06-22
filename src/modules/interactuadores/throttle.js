// throttle.js
const throttle = {
  state: {
    // Estado inicial de los interactuadores
    throttle_depth: 0,
  },
  mutations: {
    // Mutaciones para modificar el estado de los interactuadores
    presionarThrottle(state) {
      if (state.throttle_depth < 100) {
        state.throttle_depth++
      }
    },
    tirarThrottle(state) {
      if (state.throttle_depth > 0) {
        state.throttle_depth--
      }
    },
    setThrottleDepth(state, value) {
      state.throttle_depth = value
    },
  },
  actions: {
    // Acciones para realizar operaciones relacionadas con los interactuadores
    presionarThrottle({ commit }) {
      commit('presionarThrottle')
    },
    tirarThrottle({ commit }) {
      commit('tirarThrottle')
    },
    setThrottleDepth({ commit }, value) {
      commit('setThrottleDepth', value)
    },
  },
  getters: {
    // Getters para obtener datos del estado de los interactuadores
    getThrottleDepth: (state) => state.throttle_depth,
  },
}

export default throttle