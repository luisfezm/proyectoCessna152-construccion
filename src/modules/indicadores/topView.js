// topView.js
const topView = {
    state: {
      // Estado inicial de los interactuadores
      yellow_aileron: 0,
      blue_aileron: 0,
      red_rudder: 0,
      green_flaps: 0,
      orange_trim:0,
      estado_helice:false,
    },
    mutations: {
      // Mutaciones para modificar el estado de los interactuadores

    obtenerVariables(state){
       let roll_yoke =  this.getters.getEstadoRoll_yoke   // giro izquierda o derecha  alerones amarillos
       let pitch_yoke = this.getters.getEstadoPitch_yoke  // undir o tirar manubrio para alerones azules
       let rudder_left = this.getters.movPedalIzq         // giro aleron rojo izquierda
       let rudder_right = this.getters.movPedalDerecha    // giro aleron rojo derecha
       let estado_motor_avion = this.state.estadoPrendidoOApagado // obtencion de booleano para la helice
       let green_wing_flaps = 0  // giro de alerones verdes
       let orange_trim_aileron = 0 // giro de aleron naranjo
      // ALERONES AMARILLOS
       if (roll_yoke < 0) {
          state.yellow_aileron  = ((roll_yoke * 30) / 100)
       } else if (roll_yoke > 0) {

            state.yellow_aileron  = ((roll_yoke * 30 ) / 100 )
       }
       else{
          state.yellow_aileron  = 0
       }
       //ALERONES VERDES

       if(green_wing_flaps < 0){
        state.green_flaps = ((green_wing_flaps *30) / 100)
       }else if (green_wing_flaps > 0) {

       state.green_flaps  = ((green_wing_flaps * 30 ) / 100 )
       }
       else{
          state.green_flaps  = 0
       }

       // ALERONES AZULES
       if (pitch_yoke <0) {
          state.blue_aileron  = ((pitch_yoke * 15 ) / 100)
       } else if (pitch_yoke > 0) {
            state.blue_aileron  = ((pitch_yoke * 15 ) / 100) 
       }
       else{
          state.blue_aileron  = 0
       }


       // ALERON NARANJO

      if (orange_trim_aileron < 0) {
          state.orange_trim  = ((orange_trim_aileron * 30) / 100)
      } else if (orange_trim_aileron > 0) {

            state.orange_trim  = ((orange_trim_aileron * 30 ) / 100 )
      }
      else{
          state.orange_trim  = 0
      }


       // ALERON ROJO
       if (rudder_left > 0) {
         state.red_rudder = (rudder_left * 30) / 100
         //state.red_rudder = -1
       } else if (rudder_right > 0) {
         //state.red_rudder = 1
         state.red_rudder = -((rudder_right * 30) / 100)
       } else {
         state.red_rudder = 0
       }



       //HELICE PARA MOTOR ENCENDIDO
       if(estado_motor_avion == true){
        state.estado_helice = true
       }else{
        state.estado_helice = false
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
         getEstado_Helice: (state) => state.estado_helice,
         getGreen_Flaps: (state) => state.green_flaps,
         getOrange_Trim: (state) => state.orange_trim,
    },
  }
  
  export default topView
 