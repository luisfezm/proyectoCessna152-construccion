// store.js
import { createStore } from 'vuex'
import horizonteArtificial from './modules/indicadores/horizonteArtificial'
import tacometro from './modules/indicadores/tacometro'
import altimeter from './modules/indicadores/altimeter'
import headingIndicator from './modules/indicadores/headingIndicator'
import verticalspeedIndicator from './modules/indicadores/verticalspeedIndicator'
import yoke from './modules/interactuadores/yoke'
import pedales from './modules/interactuadores/pedales'
import throttle from './modules/interactuadores/throttle'

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
  getters: {
  
  },

  modules: {
    horizonteArtificial,
    tacometro,
    headingIndicator,
    altimeter,
    yoke,
    pedales,
    throttle,
    verticalspeedIndicator,
  },
})

export default store
