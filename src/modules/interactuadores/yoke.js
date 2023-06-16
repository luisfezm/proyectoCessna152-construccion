// yoke.js
const yoke = {
  state: {
    // Estado inicial de los interactuadores
    estadoPitch_yoke: 0,
    estadoRoll_yoke: 0,
  },
  mutations: {
    // Mutaciones para modificar el estado de los interactuadores
    setEstadoPitch_yoke(state, pitch_yoke) {
      state.estadoPitch_yoke = pitch_yoke
    },
    setEstadoRoll_yoke(state, roll_yoke) {
      state.estadoRoll_yoke = roll_yoke
    },
  },
  actions: {
    // Acciones para realizar operaciones relacionadas con los interactuadores
    presionarTecla_yoke({ commit, state }, tecla) {
      switch (tecla) {
        case 'W':
          commit('setEstadoPitch_yoke', 1)
          break
        case 'S':
          commit('setEstadoPitch_yoke', -1)
          break
        case 'A':
          commit('setEstadoRoll_yoke', -1)
          break
        case 'D':
          commit('setEstadoRoll_yoke', 1)
          break
      }

      console.log('Nuevo estado del yoke:')
      console.log('Pitch_yoke:', state.estadoPitch_yoke)
      console.log('Roll_yoke:', state.estadoRoll_yoke)
      console.log('---')
    },
    soltarTecla_yoke({ commit, state }) {
      commit('setEstadoPitch_yoke', 0)
      commit('setEstadoRoll_yoke', 0)
      console.log('Pitch_yoke:', state.estadoPitch_yoke)
      console.log('Roll_yoke:', state.estadoRoll_yoke)
    },
  },
  getters: {
    // Getters para obtener datos del estado de los
    getEstadoPitch_yoke: (state) => state.estadoPitch_yoke,
    getEstadoRoll_yoke: (state) => state.estadoRoll_yoke,
  },
}

export default yoke
