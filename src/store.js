// store.js
import { createStore } from 'vuex'
import fuelquantity from './modules/indicadores/fuelquantity'
import headingIndicator from './modules/indicadores/headingIndicator'
import horizonteArtificial from './modules/indicadores/horizonteArtificial'
import tacometro from './modules/indicadores/tacometro'
import pedales from './modules/interactuadores/pedales'
import throttle from './modules/interactuadores/throttle'
import mixture from './modules/interactuadores/mixture'
import trimwheel from './modules/interactuadores/trimwheel'
import yoke from './modules/interactuadores/yoke'

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
    horizonteArtificial,
    tacometro,
    headingIndicator,
    yoke,
    pedales,
    throttle,
    mixture,
    trimwheel,
    fuelquantity,
  },
})

export default store
