const indicadores = {
  state: {
    // Estado inicial de los indicadores
    numero: 0,
    throttle: 0,
    rpm: 0,
    HeadingIndicator: 0
  },
  mutations: {
    // Mutaciones para modificar el estado de los indicadores
    updateNumero(state, numero) {
      state.numero = numero
    },
    updateThrottle(state, throttle) {
      state.throttle = throttle
    },
    updateRpm(state, rpm) {
      state.rpm = rpm
    },
      calcularHeadingIndicator(state,PedalValue){
        
        state.HeadingIndicator += PedalValue/10;
        state.HeadingIndicator = state.HeadingIndicator % 360;
      }
  },
  actions: {
    // Acciones para realizar operaciones relacionadas con los indicadores
    updateNumero({ commit }, numero) {
      commit('updateNumero', numero)
    },
    updateThrottle({ commit }, throttle) {
      commit('updateThrottle', throttle)
    },
    updateRpm({ commit }, throttle) {
      commit('updateRpm', throttle)
    },
    convertThrottleToRpm({ commit }, throttle) {
      const minRpm = 0
      const maxRpm = 3500
      const rpm = (throttle / 100) * maxRpm + minRpm // Aca esta la formula para covertir las rpm
      commit('updateRpm', rpm)
    },
      calcularHeadingIndicator({ commit },PedalValue) {
        commit('calcularHeadingIndicator',PedalValue);
      }
  },
  getters: {
    // Getters para obtener datos del estado de los indicadores
    getNumero: (state) => state.numero,
    getThrottle: (state) => state.throttle,
    getRpm: (state) => state.rpm,
      getHeadingIndicator(state){
        return state.HeadingIndicator;
      }
  },
}

export default indicadores
