// store.js
import { createStore } from 'vuex'
import fuelquantity from './modules/indicadores/fuelquantity'
//import primer from './modules/indicadores/primer'
import headingIndicator from './modules/indicadores/headingIndicator'
import horizonteArtificial from './modules/indicadores/horizonteArtificial'
import tacometro from './modules/indicadores/tacometro'
import altimeter from './modules/indicadores/altimeter'
import verticalspeedIndicator from './modules/indicadores/verticalspeedIndicator'
import yoke from './modules/interactuadores/yoke'
import pedales from './modules/interactuadores/pedales'
import throttle from './modules/interactuadores/throttle'
import mixture from './modules/interactuadores/mixture'
import trimwheel from './modules/interactuadores/trimwheel'
import avion from './modules/avion'
import topView from './modules/indicadores/topView'


const store = createStore({
  state: {
    luz: false,
    estadoPrendidoOApagado: false,
  },
  mutations: {
    toggleLuz(state) {
      state.luz = !state.luz
    },
    setEstadoPrendidoOApagado(state, value) {
      state.estadoPrendidoOApagado = value
    },
  },
  actions: {
    toggleLuz({ commit }) {
      commit('toggleLuz')
    },
    setEstadoPrendidoOApagado({ commit }, value) {
      commit('setEstadoPrendidoOApagado', value)
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
    mixture,
    trimwheel,
    fuelquantity,
    //primer,
    verticalspeedIndicator,
    avion,
    topView,
  },
})

export default store
