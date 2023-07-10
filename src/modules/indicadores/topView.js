// topView.js
const topView = {
    state: {
      // Estado inicial de los interactuadores
      yellow_aileron: 0,
      blue_aileron: 0,
      red_rudder: 0,
    },
    mutations: {
      // Mutaciones para modificar el estado de los interactuadores

    obtenerVariables(state){
       let roll_yoke =  this.getters.getEstadoRoll_yoke   // giro izquierda o derecha  alerones amarillos
       let pitch_yoke = this.getters.getEstadoPitch_yoke  // undir o tirar manubrio para alerones azules
       let rudder_left = this.getters.movPedalIzq         // giro aleron rojo izquierda
       let rudder_right = this.getters.movPedalDerecha    // giro aleron rojo derecha
       

       if (roll_yoke < 0) {
          state.yellow_aileron  = ((roll_yoke * 30) / 100)
       } else if (roll_yoke > 0) {

            state.yellow_aileron  = ((roll_yoke * 30 ) / 100 )
       }
       else{
          state.yellow_aileron  = 0
       }

       if (pitch_yoke <0) {
          state.blue_aileron  = ((pitch_yoke * 30 ) / 100)
       } else if (pitch_yoke > 0) {
            state.blue_aileron  = ((pitch_yoke * 30 ) / 100) 
       }
       else{
          state.blue_aileron  = 0
       }

       if (rudder_left > 0) {
         state.red_rudder = (rudder_left * 30) / 100
         //state.red_rudder = -1
       } else if (rudder_right > 0) {
         //state.red_rudder = 1
         state.red_rudder = -((rudder_right * 30) / 100)
       } else {
         state.red_rudder = 0
       }

    },

    },
    actions: {
      // Acciones para realizar operaciones relacionadas con los interactuadores
      obtenerVariablesRoll({ commit, state }) {
        commit('obtenerVariables')
      },
    },
    getters: {
      // Getters para obtener datos del estado de los alerones
         getYellow_Aileron: (state) => state.yellow_aileron,
         getBlue_Aileron: (state) => state.blue_aileron,
         getRed_Rudder: (state) => state.red_rudder,
    },
  }
  
  export default topView
 