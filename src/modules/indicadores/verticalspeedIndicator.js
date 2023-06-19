import horizonteArtificial from './horizonteArtificial'
//verticalspeedIndicator.js
const verticalspeedIndicator = {
    state: {
      // Estado inicial de los indicadores
      verticalspeedIndicator:0,
      verticalspeed:0,
      angulo:0,
      velocidadMPH:180, //la velocidad en millas por hora
      velocidadPPM:0, //la velocidad en pies por minuto (es la unidad que se usa en el componente gráfico)
    },
    mutations: {
        // Mutaciones para modificar el estado de los indicadores
        updateVerticalspeed(state){
            //state.angulo=horizonteArtificial.anguloPitch
            state.verticalspeed=Math.sin(state.angulo*Math.PI/180)*state.velocidadPPM //se hace la conversión de angulo a radianes porque ese valor utiliza la funcion seno
        },
        cambioUnidadVelocidad(state){  //Cambia la velocidad de estar en millas por hora a pies por minuto
            state.velocidadPPM=state.velocidadMPH*88
        },
        cambiarVelocidad(state){ //para ir variando la velocidad, para hacer pruebas
            state.velocidadMPH++
        },


    },
    actions: {
      // Acciones para realizar operaciones relacionadas con los indicadores
      updateVerticalspeed({ commit, rootState }){
        angulo=rootState.horizonteArtificial.anguloPitch
        commit('cambioUnidadVelocidad')
        commit('updateVerticalspeed')
      },

      cambiarVelocidad({ commit }){
        commit('cambiarVelocidad')
      },

    },
    getters: {
      // Getters para obtener datos del estado de los indicadores
      getVerticalspeedIndicator: (state) => state.verticalspeedIndicator,
      getVerticalspeed: (state) => state.verticalspeed,
      getSpeedMPH: (state) => state.velocidadMPH,
      getSpeedPPM: (state) => state.velocidadPPM,
      getAngulo: (state) => state.angulo,
    },
    
  }
  
  export default verticalspeedIndicator