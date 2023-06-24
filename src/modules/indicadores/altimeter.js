// import verticalSpeedIndicator from './verticalspeedIndicator'

const altimeter = {

    state: {
        velocidadPPM: 0,
        velocidadPPS: 0,
        primaryDegrees: 0,
        secondaryDegrees: 0,
        terciaryDegrees: 0,
    },
    mutations: {

        updateAltimeter(state){

            // Obtengo la velocidad en PIES/MINUTO
            state.primaryDegrees = state.primaryDegrees + (state.velocidadPPS/100)*36;
            state.secondaryDegrees = state.secondaryDegrees + (state.velocidadPPS/100)*3.6;
            state.terciaryDegrees = state.terciaryDegrees + (state.velocidadPPS/100)*0.36;

        },
        cambiaUnidadVelocidad(state){
            state.velocidadPPS = state.velocidadPPM/60;
        },
        cambiarVelocidad(state){

            // state.velocidadPP = verticalSpeedIndicator.state.velocidadPPM
            // state.velocidadPPM = Math.round(Math.random() * 999);

            // Temporal, solo para probar valores
            state.velocidadPPM = Math.round(Math.random() * 100);
        }


    },
    actions:{

        updateAltimeter( {commit} ){
            commit('updateAltimeter')
        },
        cambiaUnidadVelocidadPpmToPps( {commit} ){
            commit('cambiaUnidadVelocidad')
        },
        updateVelocidadAltimeter( {commit} ){
            commit('cambiarVelocidad')
        }

    },
    getters: {

        getVelocidadPPS: (state) => state.velocidadPPS,
        getPrimaryDegrees: (state) => state.primaryDegrees,
        getSecondaryDegrees: (state) => state.secondaryDegrees,
        getTerciaryDegrees: (state) => state.terciaryDegrees,

    },

    
}
export default altimeter;