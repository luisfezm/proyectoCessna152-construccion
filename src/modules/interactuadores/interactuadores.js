// interactuadores.js
import store from '../../store.js';


const interactuadores = {
  state: {
    // Estado inicial de los interactuadores
    throttle_depth: 0,
    estadoPitch_yoke: 0,
    estadoRoll_yoke: 0,
    mov_pedal_izq: 0,
    mov_pedal_derecha: 0
  },
  mutations: {
    // Mutaciones para modificar el estado de los interactuadores
    incrementarMovPedalIzq(state) {
      if (state.mov_pedal_izq < 100) {
        state.mov_pedal_izq++;
      }
      
    },
    incrementarMovPedalDerecha(state) {
      if (state.mov_pedal_derecha < 100) {
        state.mov_pedal_derecha++;
      }

    },
    resetMovPedalIzq(state) {
      state.mov_pedal_izq = 0;

    },
    resetMovPedalDerecha(state) {
      state.mov_pedal_derecha = 0;
    },

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
    setEstadoPitch_yoke(state, pitch_yoke) {
      state.estadoPitch_yoke = pitch_yoke
    },
    setEstadoRoll_yoke(state, roll_yoke) {
      state.estadoRoll_yoke = roll_yoke
    },
  },
  actions: {
    // Acciones para realizar operaciones relacionadas con los interactuadores
    incrementarMovPedalIzq({ commit }) {
      commit("incrementarMovPedalIzq");
    },
    incrementarMovPedalDerecha({ commit }) {
      commit("incrementarMovPedalDerecha");
    },
    resetMovPedalIzq({ commit }) {
      commit("resetMovPedalIzq");
    },
    resetMovPedalDerecha({ commit }) {
      commit("resetMovPedalDerecha");
    },
      
    presionarThrottle({ commit }) {
      commit('presionarThrottle')
    },
    tirarThrottle({ commit }) {
      commit('tirarThrottle')
    },
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
    getThrottleDepth: (state) => state.throttle_depth,
    getEstadoPitch_yoke(state) {
      return state.estadoPitch_yoke
    },
    getEstadoRoll_yoke(state) {
      return state.estadoRoll_yoke
    },
     movPedalIzq: (state) => state.mov_pedal_izq,
    movPedalDerecha: (state) => state.mov_pedal_derecha
  },
}

export default interactuadores
