// airSpeedIndicator.js
const airSpeedIndicator = {
    state: {
      knots:0,
      degrees:0,
    },
    mutations: {
      // Mutaciones para modificar el estado de los indicadores
      setKnots(state, conversion) {
        state.knots = conversion
      },
      setDegrees(state, degrees) {
        state.degrees = degrees
        //console.log("degrees: "+degrees);
      },
      
    },
    actions: {
      // Acciones para realizar operaciones relacionadas con los indicadores

      // conversion de velocidad a knots
      setKnots({ commit }) {
        //let conversion=  Math.sqrt((Math.pow(this.getters.velocidad_x, 2)+Math.pow(this.getters.velocidad_y, 2)+Math.pow(this.getters.velocidad_z, 2))*1.94384)
        //console.log("velocidad: "+ store.getters.velocidad);
        let conversion = this.getters.velocidad*1.94384

        
        commit('setKnots', conversion)
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