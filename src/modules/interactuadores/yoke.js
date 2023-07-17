// yoke.js
const yoke = {
  state: {
    estadoPitch_yoke: 0,
    estadoRoll_yoke: 0,
  },
  mutations: {
    setEstadoPitch_yoke(state, pitch_yoke) {
      if (this.state.estadoPrendidoOApagado == true) {
        state.estadoPitch_yoke = pitch_yoke;
      }else{
        state.estadoPitch_yoke = 0;
      }
     
    },
    setEstadoRoll_yoke(state, roll_yoke) {
      if (this.state.estadoPrendidoOApagado == true) {
      state.estadoRoll_yoke = roll_yoke;
      }else{
        state.estadoRoll_yoke = 0;
      }
    },
    incrementEstadoPitch_yoke(state) {
      if (state.estadoPitch_yoke < 100) {
        state.estadoPitch_yoke += 0.5;
      }
    },
    decrementEstadoPitch_yoke(state) {
      if (state.estadoPitch_yoke > -100) {
        state.estadoPitch_yoke -= 0.5;
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
      state.estadoPitch_yoke = 0;
    },
    resetEstadoRoll_yoke(state) {
      state.estadoRoll_yoke = 0;
    },
  },
  actions: {
    setEstadoPitch_yoke({ commit }, pitch_yoke) {
      commit('setEstadoPitch_yoke', pitch_yoke);
    },
    setEstadoRoll_yoke({ commit }, roll_yoke) {
      commit('setEstadoRoll_yoke', roll_yoke);

    },
  },
  getters: {
    getEstadoPitch_yoke: (state) => state.estadoPitch_yoke,
    getEstadoRoll_yoke: (state) => state.estadoRoll_yoke,
  },
};

export default yoke;
