// avion.js se encarga del movimiento del avion
// cualquier error o solicitud de cambio hablarlo a la brebedad con los scrum masters o los integradores
const avion = {
  state: {
    // Estado inicial del avion
    // usen setters y getters NO el state directamente

    // velocidad en cada uno de los ejes
    Velocidad_eje_x: 0,
    Velocidad_eje_y: 0,
    Velocidad_eje_z: 0,

    // angulos de rotacion
    angulo_roll: 0,
    angulo_pitch: 0,
    angulo_yaw: 0,

    // posicion en el espacio
    altura_Actual: 0,
    coordenadas_actuales: {
      latitud: 0,
      longitud: 0,
    },

    choque:false,

    estado_motor: false, // indica si esta encendido o no el motor

    //variables / constantes del avion
    peso_avion: 0, // solo lo deben setear una vez (el avion no debe cambiar su peso magicamente)

    motor_strenght: 82, // (P): 82 kW (110 HP).
    plane_surface: 14.9, //: 14.9 m².
    air_density: 1.225, // 1.225 kg/m³.
    plane_velocity: 0, //m/s
    air_resistance: 0.32, //es el coeficionte aerodinamico del avion
  },
  mutations: {
    // Mutaciones para modificar el estado del avion
    // usen acciones NO las mutaciones directamente
    alternaChoque(state) {
      state.choque = !state.choque;
    },

    // --------- velocidades ---------
    setVelocidadX(state, velX) {
      state.Velocidad_eje_x = velX;
    },
    setVelocidadY(state, velY) {
      state.Velocidad_eje_y = velY;
    },
    setVelocidadZ(state, velZ) {
      state.Velocidad_eje_z = velZ;
    },
 
    
    // --------- angulos ---------
    setAnguloRoll(state, roll) {
      state.angulo_roll = roll;
    },
    setAnguloPitch(state, pitch) {
      state.angulo_pitch = pitch;
    },
    setAnguloYaw(state, yaw) {
      state.angulo_yaw = yaw;
    },

    // --------- coordenadas ---------
    setLatitud(state, latitud) {
      state.coordenadas_actuales.latitud = latitud;
    },
    setLongitud(state, longitud) {
      state.coordenadas_actuales.longitud = longitud;
    },
    setAltura(state, altura) {
      state.altura_Actual = altura;
    },
    setCoordenadas(state, coordenadas) {
      state.coordenadas_actuales = coordenadas;
    },

 

    // --------- constantes (solo deberían ser seteadas una vez) ---------
    setPeso(state, peso) {
      console.warn('Seteado el peso');
      state.peso_avion = peso;
    },
  },
  actions: {
    // Acciones para realizar operaciones relacionadas con el avion

    alternaChoque({ commit }) {
      commit('alternaChoque');
    },

    // --------- velocidades ---------
    setVelocidadX({ commit }, velX) {
      commit('setVelocidadX', velX);
    },
    setVelocidadY({ commit }, velY) {
      commit('setVelocidadY', velY);
    },
    setVelocidadZ({ commit }, velZ) {
      commit('setVelocidadZ', velZ);
    },

    // --------- angulos ---------
    setAnguloRoll({ commit }, roll) {
      commit('setAnguloRoll', roll);
    },
    setAnguloPitch({ commit }, pitch) {
      commit('setAnguloPitch', pitch);
    },
    setAnguloYaw({ commit }, yaw) {
      commit('setAnguloYaw', yaw);
    },

    // --------- coordenadas ---------
    setLatitud({ commit }, latitud) {
      commit('setLatitud', latitud);
    },
    setLongitud({ commit }, longitud) {
      commit('setLongitud', longitud);
    },
    setAltura({ commit }, altura) {
      commit('setAltura', altura);
    },
    setCoordenadas({ commit }, coordenadas) {
      commit('setCoordenadas', coordenadas);
    },

    // --------- constantes (solo deberían ser seteadas una vez) ---------
    setPeso({ commit }, peso) {
      commit('setPeso', peso);
    },
  },
  getters: {
    choque: (state) => state.choque,

    // Getters para obtener datos del estado del avion
    // latitud actual del avion
    latitud: (state) => state.coordenadas_actuales.latitud,
    // longitud actual del avion
    longitud: (state) => state.coordenadas_actuales.longitud,
    // altura actual del avion
    altura: (state) => state.altura_Actual,

    // velocidad en el eje x
    velocidad_x: (state) => state.Velocidad_eje_x,
    // velocidad en el eje y
    velocidad_y: (state) => state.Velocidad_eje_y,
    // velocidad en el eje z
    velocidad_z: (state) => state.Velocidad_eje_z,

    // ángulo de roll
    angulo_roll: (state) => state.angulo_roll,
    // ángulo de pitch
    angulo_pitch: (state) => state.angulo_pitch,
    // ángulo de yaw
    angulo_yaw: (state) => state.angulo_yaw,

    // estado del motor (encendido o apagado)
    estado_motor: (state) => state.estado_motor,
    // peso del avion
    peso: (state) => state.peso_avion,

    // variables/constantes del avion
    motor_strenght: (state) => state.motor_strenght,
    plane_surface: (state) => state.plane_surface,
    air_density: (state) => state.air_density,
    plane_velocity: (state) => state.plane_velocity,
    air_resistance: (state) => state.air_resistance,
  },
};

// cualquier error o solicitud de cambio hablarlo a la brevedad con los scrum masters o los integradores
export default avion;
