// pedales.js
const pedales = {
  state: {
    // Estado inicial de los interactuadores
    mov_pedal_izq: 0,
    mov_pedal_derecha: 0,
  },
  mutations: {
    // Mutaciones para modificar el estado de los interactuadores
    incrementarMovPedalIzq(state) {
      if (state.mov_pedal_izq < 100) {
        state.mov_pedal_izq++
      }
    },
    incrementarMovPedalDerecha(state) {
      if (state.mov_pedal_derecha < 100) {
        state.mov_pedal_derecha++
      }
    },
    resetMovPedalIzq(state) {
      state.mov_pedal_izq = 0
    },
    resetMovPedalDerecha(state) {
      state.mov_pedal_derecha = 0
    },
  },
  actions: {
    // Acciones para realizar operaciones relacionadas con los interactuadores
    incrementarMovPedalIzq({ commit }) {
      commit('incrementarMovPedalIzq')
    },
    incrementarMovPedalDerecha({ commit }) {
      commit('incrementarMovPedalDerecha')
    },
    resetMovPedalIzq({ commit }) {
      commit('resetMovPedalIzq')
    },
    resetMovPedalDerecha({ commit }) {
      commit('resetMovPedalDerecha')
    },
  },
  getters: {
    // Getters para obtener datos del estado de los
    movPedalIzq: (state) => state.mov_pedal_izq,
    movPedalDerecha: (state) => state.mov_pedal_derecha,
  },
}

export default pedales
