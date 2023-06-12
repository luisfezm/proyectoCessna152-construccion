// store.js
import { createStore } from 'vuex';
import interactuadores from './interactuadores';
import indicadores from './indicadores';

const store = createStore({
  state: {
    luz: false
  },
  mutations: {
    toggleLuz(state) {
      state.luz = !state.luz;
    }
  },
  actions: {
    toggleLuz({ commit }) {
      commit('toggleLuz');
    }
  },
  getters: {},

  modules: {
    interactuadores,
    indicadores
  }
});

export default store;
