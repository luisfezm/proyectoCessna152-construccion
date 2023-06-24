<<<<<<< HEAD
=======
// yoke.js


>>>>>>> sprint3
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
<<<<<<< HEAD
    presionarTecla_yoke({ commit, state }, teclas) {
      teclas.forEach((tecla) => {
        switch (tecla) {
          case 'W':
            commit('incrementEstadoPitch_yoke');
            console.log('W');
            break;
          case 'S':
            commit('decrementEstadoPitch_yoke');
            console.log('S');
            break;
          case 'A':
            commit('decrementEstadoRoll_yoke');
            console.log('A');
            break;
          case 'D':
            commit('incrementEstadoRoll_yoke');
            console.log('D');
            break;
        }
      });
=======
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
>>>>>>> sprint3

      console.log('Nuevo estado del yoke:');
      console.log('Pitch_yoke:', state.estadoPitch_yoke);
      console.log('Roll_yoke:', state.estadoRoll_yoke);
      console.log('---');
    },
    soltarTecla_yoke({ commit, state }) {
<<<<<<< HEAD
      const interval = setInterval(() => {
        commit('resetEstadoPitch_yoke');
        commit('resetEstadoRoll_yoke');
        console.log('Pitch_yoke:', state.estadoPitch_yoke);
        console.log('Roll_yoke:', state.estadoRoll_yoke);
        console.log('---');
        if (state.estadoPitch_yoke === 0 && state.estadoRoll_yoke === 0) {
          clearInterval(interval);
        }
      }, 10);
=======
      commit('setEstadoPitch_yoke', 0)
        commit('setEstadoRoll_yoke', 0)
        console.log('Pitch_yoke:', state.estadoPitch_yoke)
        console.log('Roll_yoke:', state.estadoRoll_yoke)
      
>>>>>>> sprint3
    },
  },
  getters: {
    getEstadoPitch_yoke: (state) => state.estadoPitch_yoke,
    getEstadoRoll_yoke: (state) => state.estadoRoll_yoke,
  },
};

<<<<<<< HEAD
export default yoke;
=======

export default yoke
>>>>>>> sprint3
