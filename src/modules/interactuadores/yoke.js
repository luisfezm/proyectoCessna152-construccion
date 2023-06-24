const yoke = {
  state: {
    estadoPitch_yoke: 0,
    estadoRoll_yoke: 0,
  },
  mutations: {
    setEstadoPitch_yoke(state, pitch_yoke) {
      state.estadoPitch_yoke = pitch_yoke;
    },
    setEstadoRoll_yoke(state, roll_yoke) {
      state.estadoRoll_yoke = roll_yoke;
    },
    incrementEstadoPitch_yoke(state) {
      if (state.estadoPitch_yoke < 100) {
        state.estadoPitch_yoke += 1;
      }
    },
    decrementEstadoPitch_yoke(state) {
      if (state.estadoPitch_yoke > -100) {
        state.estadoPitch_yoke -= 1;
      }
    },
    incrementEstadoRoll_yoke(state) {
      if (state.estadoRoll_yoke < 100) {
        state.estadoRoll_yoke += 1;
      }
    },
    decrementEstadoRoll_yoke(state) {
      if (state.estadoRoll_yoke > -100) {
        state.estadoRoll_yoke -= 1;
      }
    },
    resetEstadoPitch_yoke(state) {
      if (state.estadoPitch_yoke !== 0) {
        state.estadoPitch_yoke += state.estadoPitch_yoke > 0 ? -1 : 1;
      }
    },
    resetEstadoRoll_yoke(state) {
      if (state.estadoRoll_yoke !== 0) {
        state.estadoRoll_yoke += state.estadoRoll_yoke > 0 ? -1 : 1;
      }
    },
  },
  actions: {
    // Acciones para realizar operaciones relacionadas con los interactuadores
    presionarTecla_yoke({ commit, state }, tecla) {
      switch (tecla) {
        case 'W':
          commit('setEstadoPitch_yoke', 1)
          TurnCoordinator.
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

      console.log('Nuevo estado del yoke:');
      console.log('Pitch_yoke:', state.estadoPitch_yoke);
      console.log('Roll_yoke:', state.estadoRoll_yoke);
      console.log('---');
    },
    soltarTecla_yoke({ commit, state }) {
      commit('setEstadoPitch_yoke', 0)
        commit('setEstadoRoll_yoke', 0)
        console.log('Pitch_yoke:', state.estadoPitch_yoke)
        console.log('Roll_yoke:', state.estadoRoll_yoke)
    },
  },
  getters: {
    getEstadoPitch_yoke: (state) => state.estadoPitch_yoke,
    getEstadoRoll_yoke: (state) => state.estadoRoll_yoke,
  },
};
export default yoke;

