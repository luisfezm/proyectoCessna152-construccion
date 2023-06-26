// airSpeedIndicator.js
const airSpeedIndicator = {
    state: {
      knots:0,
      degrees:0
    },
    mutations: {
      // Mutaciones para modificar el estado de los indicadores
      setKnots(state, knots) {
        state.knots = knots
        console.log("knots: "+ knots);
      },
      setDegrees(state, degrees) {
        state.degrees = degrees
        console.log("degrees: "+degrees);
      },
    },
    actions: {
      // Acciones para realizar operaciones relacionadas con los indicadores
      setKnots({ commit }, knots) {
        commit('setKnots', knots)
      },
      setDegrees({ commit }, degrees) {
        commit('setDegrees', degrees)
      },
    },
    getters: {
      // Getters para obtener datos del estado de los indicadores
      getknots: (state) => state.knots,
      getdegrees: (state) => state.degrees,
    },
  }
  
  export default airSpeedIndicator