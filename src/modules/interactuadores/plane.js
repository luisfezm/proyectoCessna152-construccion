// throttle.js
const plane = {
    state: {
      // Estado inicial de los interactuadores
      throttle_depth: 0,
      mixture_depht: 0,
      plane_weight:10898.91,//newrtons
      motor_strenght:82,// (P): 82 kW (110 HP).
      plane_surface:16.2,//: 16.2 m².
      air_density:1.225, // 1.225 kg/m³.
      plane_velocity:0, //m/s
      air_resistance:0.32 //es el coeficionte aerodinamico del avion
    },
    mutations: {
      // Mutaciones para modificar el estado de los interactuadores
      setAirDensity(state,value) {
        state.air_density=value
      },
      setValues(state) {
        state.throttle_depth= store.getters.getThrottleDepth
        state.mixture_depht= store.getters.getEstadoMixture
 
      },
      setVelocity(state) {
        let P=state.throttle_depth*state.mixture_depht
        let pt=P*state.motor_strenght
        let V = Math.sqrt((2*pt)/(state.plane_weight*plane_surface,state.air_resistance))
        state.plane_velocity = V

      },
    },
    actions: {
      // Acciones para realizar operaciones relacionadas con los interactuadores
      setAirDensity({ commit }) {
        commit('setAirDensity')  
      },
      setValues({ commit }) {
        commit('setValues') 
      },
      setVelocity({ commit }) {
        commit('setVelocity') 
    },
    getters: {
      // Getters para obtener datos del estado de los interactuadores
      getVelocity: (state) => state.plane_velocity,
    },
  }
}; 
export default plane