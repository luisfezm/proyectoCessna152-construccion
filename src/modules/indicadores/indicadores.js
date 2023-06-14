// indicadores.js

const indicadores = {
    state: {
      // Estado inicial de los indicadores
      HeadingIndicator: 0,

    },
    mutations: {
      // Mutaciones para modificar el estado de los indicadores

      calcularHeadingIndicator(state,PedalValue){
        state.HeadingIndicator = PedalValue/10;
      }

    },
    actions: {
      // Acciones para realizar operaciones relacionadas con los indicadores
      asyncCalcular({ commit }, PedalValue) {
        setTimeout(() => {
          commit('calcularHeadingIndicator', valorPedal);
        }, 1000);
        
      },
    },
    getters: {
      // Getters para obtener datos del estado de los indicadores
      getHeadingIndicator(state){
        return state.incremento;
      }
    }
  };
  
  export default indicadores;
  
