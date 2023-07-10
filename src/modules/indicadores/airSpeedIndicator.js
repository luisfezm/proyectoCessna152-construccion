// airSpeedIndicator.js
const airSpeedIndicator = {
    state: {
      knots:75,
      degrees:0,
    },
    mutations: {
      // Mutaciones para modificar el estado de los indicadores
      setKnots(state, presionImpacto,presionEstatica,air_density) {
        state.knots = Math.sqrt((Math.pow(velocidadX, 2)+Math.pow(velocidaY, 2)+velocidaZ)*1.94384)
      },
      setDegrees(state, degrees) {
        state.degrees = degrees
        //console.log("degrees: "+degrees);
      },
      
    },
    actions: {
      // Acciones para realizar operaciones relacionadas con los indicadores
      setKnots({ commit }) {
        commit('setKnots', this.getters.velocidad_x,this.getters.velocidad_y,this.getters.velocidad_z)
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