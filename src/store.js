// store.js
import { createStore } from 'vuex';

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
  getters: {}
});

export default store;
