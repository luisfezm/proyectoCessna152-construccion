// interactuadores.js

const interactuadores = {
    state: {
      // Estado inicial de los interactuadores
      throttle_depth: 0,
        estadoPitch_yoke: 0,
      estadoRoll_yoke: 0
    },
    mutations: {
      // Mutaciones para modificar el estado de los interactuadores
      
      presionarThrottle(state){
        if (state.throttle_depth<100){
          state.throttle_depth++;
        }
      },
      tirarThrottle(state){
        if(state.throttle_depth>0){
          state.throttle_depth--
        }
          
      },
      setEstadoPitch_yoke(state, pitch_yoke) {
      state.estadoPitch_yoke = pitch_yoke
    },
    setEstadoRoll_yoke(state, roll_yoke) {
      state.estadoRoll_yoke = roll_yoke
    }
        
    },
    actions: {
      // Acciones para realizar operaciones relacionadas con los interactuadores
      presionarThrottle({ commit }){
        commit("presionarThrottle")
      },
      tirarThrottle({ commit }){
        commit("tirarThrottle")
      },
        presionarTecla_yoke({ commit, state }, tecla) {
      switch (tecla) {
        case 'W':
          commit('setEstadoPitch_yoke', 1)
          break
        case 'S':
          commit('setEstadoPitch_yoke', -1)
          break
        case 'A':
          commit('setEstadoRoll_yoke', -1)
          break
        case 'D':
          commit('setEstadoRoll_yoke', 1)
          break
      }

      console.log('Nuevo estado del yoke:')
      console.log('Pitch_yoke:', state.estadoPitch_yoke)
      console.log('Roll_yoke:', state.estadoRoll_yoke)
      console.log('---')
    },
    soltarTecla_yoke({ commit, state }) {
      commit('setEstadoPitch_yoke', 0)
      commit('setEstadoRoll_yoke', 0)
      console.log('Pitch_yoke:', state.estadoPitch_yoke)
      console.log('Roll_yoke:', state.estadoRoll_yoke)
    }
    },
    getters: {
      // Getters para obtener datos del estado de los 
      getThrottleDepth:(state) => state.throttle_depth,
      getEstadoPitch_yoke(state) {
      return state.estadoPitch_yoke;
    },
    getEstadoRoll_yoke(state) {
      return state.estadoRoll_yoke;
      }
    }
   

    
  }
};

export default interactuadores;
