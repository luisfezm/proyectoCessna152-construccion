  const horizonteArtificial = {
    state: {
      // Estado inicial de los indicadores
      anguloRoll: 0,
      anguloPitch: 0,
      velocidadRoll: 0,
      velocidadPitch: 0,
      maxVelocidadRoll: 100,
      maxVelocidadPitch: 100,
    },

    mutations: {
      setmaxVelocidadRoll(state, max) {
        state.maxVelocidadRoll = max;
      },

      setMaxVelocidadPitch(state, max) {
        state.maxVelocidadPitch = max;
      },

      actualizaAngulos(state) {
        // Incrementar los ángulos de roll y pitch según las velocidades
        state.anguloRoll += state.velocidadRoll;
        state.anguloPitch += state.velocidadPitch;

        // Controlar las rotaciones completas (de 0 a 360 grados)
        state.anguloRoll = state.anguloRoll % 360;
        state.anguloPitch = state.anguloPitch % 360;

        if (state.anguloRoll >= 110 ) {
          state.anguloRoll = 110
        }else if(state.anguloRoll <= -110){
          state.anguloRoll = -110
        }
        
        //console.log('ACTUALIZAR: ' + state.anguloRoll);
      },

      actualizar(state, Yoke) {
        let roll = Yoke.roll;
        let pitch = Yoke.pitch;

        state.velocidadRoll = roll;
        state.velocidadPitch = pitch;

        if (roll > state.maxVelocidadRoll) {
          state.velocidadRoll = state.maxVelocidadRoll;
        } else if (roll < -state.maxVelocidadRoll) {
          state.velocidadRoll = -state.maxVelocidadRoll;
        }

        if (pitch > state.maxVelocidadPitch) {
          state.velocidadPitch = state.maxVelocidadPitch;
        } else if (pitch < -state.maxVelocidadPitch) {
          state.velocidadPitch = -state.maxVelocidadPitch;
        }
      },
    },
    actions: {
      actualizar({ commit }, Yoke) {
        //console.log(Yoke);
    

        if (Yoke.roll >= 0) {
          Yoke.roll = Math.sqrt(Math.sqrt(Yoke.roll));
        } else {
          Yoke.roll = -Math.sqrt(Math.sqrt(-Yoke.roll));
        }

        if (Yoke.pitch >= 0) {
          Yoke.pitch = Math.sqrt(Math.sqrt(Yoke.pitch));
        } else {
          Yoke.pitch = -Math.sqrt(Math.sqrt(-Yoke.pitch));
        }

        commit('actualizar', Yoke);
      },
    },
    getters: {
      anguloRoll(state) {
        return parseInt(state.anguloRoll);
      },

      anguloPitch(state) {
        return parseInt(state.anguloPitch);
      },

      velocidadRoll(state) {
        return parseInt(state.velocidadRoll);
      },

      velocidadPitch(state) {
        return parseInt(state.velocidadPitch);
      },
    },
  };

  export default horizonteArtificial;
