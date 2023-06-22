// horizonteArtificial.js
// bajo los comentarios de (FALTA AJUSTAR) hay valores que pueden variar para modificar el comportamiento del horizonte artificial

const horizonteArtificial = {
  state: {
    // Estado inicial de los indicadores
    anguloRoll: 0,
    anguloPitch: 0,
    velocidadRoll: 0,
    velocidadPitch: 0,
    // (FALTA AJUSTAR)
    maxVelocidadRoll: 100,
    maxVelocidadPitch: 100,
  },
  mutations: {
    // Mutaciones para modificar el estado de los indicadores
    setmaxVelocidadRoll(state, max) {
      state.maxVelocidadRoll = max
    },

    setMaxVelocidadPitch(state, max) {
      state.maxVelocidadPitch = max
    },

    actualizaAngulos(state) {
      // (FALTA AJUSTAR)
      // varia los angulos segun la velocidad
      state.anguloRoll += state.velocidadRoll / 20
      state.anguloPitch += state.velocidadPitch / 20

      // reinicia los angulos de 360 a 0
      state.anguloRoll = state.anguloRoll % 360
      state.anguloPitch = state.anguloPitch % 360

      console.log('ACTUALIZAR' + state.anguloRoll)
    },

    actualizar(state, Yoke) {
      // saco los componentes del Yoke
      let roll = Yoke.roll
      let pitch = Yoke.pitch
      // (FALTA AJUSTAR)
      let disminucion = 1 // este es valor por el cual disminuyen las velocidades

      // tiendo a 0 las velocidades
      if (state.velocidadRoll != 0) {
        if (state.velocidadRoll > 0) {
          state.velocidadRoll -= disminucion
          if (state.velocidadRoll < 0) {
            // si me paso lo seteo en 0
            state.velocidadRoll = 0
          }
        } else {
          state.velocidadRoll += disminucion
          if (state.velocidadRoll > 0) {
            // si me paso lo seteo en 0
            state.velocidadRoll = 0
          }
        }
      }

      if (state.velocidadPitch != 0) {
        if (state.velocidadPitch > 0) {
          state.velocidadPitch -= disminucion
          if (state.velocidadPitch < 0) {
            // si me paso lo seteo en 0
            state.velocidadPitch = 0
          }
        } else {
          state.velocidadPitch += disminucion
          if (state.velocidadPitch > 0) {
            // si me paso lo seteo en 0
            state.velocidadPitch = 0
          }
        }
      }

      if (roll != 0) {
        // si hay roll lo uso
        if (roll > 0) {
          if (state.velocidadRoll < state.maxVelocidadRoll) {
            // si aun no alcanzo la velocidad maxima
            state.velocidadRoll += roll
            if (state.velocidadRoll > state.maxVelocidadRoll) {
              // si supero la velocidad maxima lo seteo en el maximo
              state.velocidadRoll = state.maxVelocidadRoll
            }
          }
        } else {
          // caso roll en sentido contrario
          if (-state.velocidadRoll < state.maxVelocidadRoll) {
            state.velocidadRoll += roll
            if (-state.velocidadRoll > state.maxVelocidadRoll) {
              state.velocidadRoll = -state.maxVelocidadRoll
            }
          }
        }
      }

      if (pitch != 0) {
        // si hay pitch lo uso
        if (pitch > 0) {
          if (state.velocidadPitch < state.maxVelocidadPitch) {
            // si aun no alcanzo la velocidad maxima
            state.velocidadPitch += pitch
            if (state.velocidadPitch > state.maxVelocidadPitch) {
              // si supero la velocidad maxima lo seteo en el maximo
              state.velocidadPitch = state.maxVelocidadPitch
            }
          }
        } else {
          // caso pitch en sentido contrario
          if (-state.velocidadPitch < state.maxVelocidadPitch) {
            state.velocidadPitch += pitch
            if (-state.velocidadPitch > state.maxVelocidadPitch) {
              state.velocidadPitch = -state.maxVelocidadPitch
            }
          }
        }
      }
    },
  },
  actions: {
    // Acciones para realizar operaciones relacionadas con los indicadores
    // (FALTA AJUSTAR)
    actualizar({ commit }, Yoke) {
      console.log(Yoke)
      if (Yoke.roll >= 0) {
        // saco raices para disminuir la brecha entre los valores maximos y minimos (dependera de como se implemente el Yoke)
        
        Yoke.roll = Math.sqrt(Math.sqrt(Yoke.roll))
      } else {
        Yoke.roll = -Math.sqrt(Math.sqrt(-Yoke.roll))
      }

      if (Yoke.pitch >= 0) {
        Yoke.pitch = Math.sqrt(Math.sqrt(Yoke.pitch))
      } else {
        Yoke.pitch = -Math.sqrt(Math.sqrt(-Yoke.pitch))
      }
      commit('actualizar', Yoke)<
      commit('actualizaAngulos')
    },
  },
  getters: {
    // Getters para obtener datos
    anguloRoll(state) {
      return parseInt(state.anguloRoll)
    },

    anguloPitch(state) {
      return parseInt(state.anguloPitch)
    },

    velocidadRoll(state) {
      return parseInt(state.velocidadRoll)
    },

    velocidadPitch(state) {
      return parseInt(state.velocidadPitch)
    },
  },
}

export default horizonteArtificial
