//Mixture.js
const mixture = {
    state: {
      // Estado inicial de los interactuadores
      estadoMixture: 0
    },
    mutations: {
      // Mutaciones para modificar el estado de los interactuadores
      incrementarMixture(state) {
        if (state.estadoMixture < 10) {
          state.estadoMixture += 1;
        }
      },
      disminuirMixture(state) {
        if (state.estadoMixture > 0) {
          state.estadoMixture -= 1;
        }
      }
    },
    actions: {
      // Acciones para realizar operaciones relacionadas con los interactuadores
      teclaPresionada(context, event) {
        if (event.key === 'n') {
          context.commit('incrementarMixture');
        } else if (event.key === 'm') {
          context.commit('disminuirMixture');
        }
        console.log('estadoMixture:', context.state.estadoMixture);
      }
    },
    getters: {
      // Getters para obtener datos del estado de los interactuadores
      getEstadoMixture(state) {
        return state.estadoMixture;
      }
    }
  };
  
  export default mixture;
  