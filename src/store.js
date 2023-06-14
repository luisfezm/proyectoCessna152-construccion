// store.js

import { createStore } from 'vuex'
import interactuadores from './modules/interactuadores/interactuadores'
import indicadores from './modules/indicadores/indicadores'
import horizonteArtificial from './modules/indicadores/horizonteArtificial'
// import NombreArchivo from "./modules/indicadores/NombreArchivo"

const store = createStore({
  state: {
    luz: false,
  },
  mutations: {
    toggleLuz(state) {
      state.luz = !state.luz
    },
  },
  actions: {
    toggleLuz({ commit }) {
      commit('toggleLuz')
    },
  },
  getters: {},

  modules: {
    interactuadores,
    indicadores,
    horizonteArtificial,
  },
})

export default store
