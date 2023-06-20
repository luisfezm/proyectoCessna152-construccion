
const fuelquantity = {
    state : { 
        gasoline_1: 220, /*estanques de gasolinas, 220 grados representan que estan llenos*/
        gasoline_2: 220,
    },
    
    mutations: {
        // mutaciones para modificar el estado de los estanques de gasolina
        gasoline (state){      /*el valor minimo que tiene la agujas es de 137 grados*/ 
            if(state.gasoline_1 >= 137){   /*se decrementa el primero y despues el segundo*/
                state.gasoline_1 = state.gasoline_1 - 1
                
            } else if (state.gasoline_2 >= 137){  
                state.gasoline_2 = state.gasoline_2 - 1 
            }else{
                console.log("se acabado la gasolina")
            }              
        }   // se tiene que definir el parametro que va recibir en el futuro, por ejemplo en intervalo de metros que avanza el avion
            // se modifica el estanque de gasolina, en donde se tendra que implementar otra variable o condicional
    },

    actions: {
        // accion para realizar el decremento de gasolina
        decrease_gasoline({commit, state}){
           commit('gasoline')
        },
    },

    getters: {
        // getters para obtener el estado de la gasolina
         getStateGasoline_1 : (state) => state.gasoline_1,
         getStateGasoline_2 : (state) => state.gasoline_2,
    }
}

export default fuelquantity