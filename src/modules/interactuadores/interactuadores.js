// interactuadores.js
import store from '../../store.js';


const interactuadores = {
  state: {
    mov_pedal_izq: 0,
    mov_pedal_derecha: 0
  },

  mutations: {
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

    }
  },

  actions: {
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
    }
  },

  getters: {
    movPedalIzq: (state) => state.mov_pedal_izq,
    movPedalDerecha: (state) => state.mov_pedal_derecha
  },

};

export default interactuadores;