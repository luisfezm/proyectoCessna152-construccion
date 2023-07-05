
const fuelquantity = {
    state : { 
        gasoline_1: 220, /*estanques de gasolinas, 220 grados representan que estan llenos*/
        gasoline_2: 220, /*137 representa que estan vacios los estanques de gasolina*/
    },
    
    mutations: {
        // mutaciones para modificar el estado de los estanques de gasolina
        decrease (state, value_1){      /*el valor minimo que tiene la agujas es de 137 grados*/ 
            if(state.gasoline_1 >= 137){   /*se decrementa el primero y despues el segundo*/
                state.gasoline_1 = state.gasoline_1 - value_1
            }else if (state.gasoline_2 >= 137){  
                state.gasoline_2 = state.gasoline_2 - value_1
            }else{
                console.log("se acabado la gasolina")
            }              
        } ,  // se tiene que definir el parametro que va recibir en el futuro, por ejemplo en intervalo de metros que avanza el avion
            // se modifica el estanque de gasolina, en donde se tendra que implementar otra variable o condicional
        
        increase (state, value_2){  // accion para llenar los estanques con gasolina 
            if(state.gasoline_1 < 221){
                state.gasoline_1 = state.gasoline_1 + value_2
            }else if(state.gasoline_2 < 221){
                state.gasoline_2 = state.gasoline_2 + value_2
            }else{
                console.log("se a llenado de gasolina el avion")
            }
        }  // 137 es igual a cantidad vacia de gasolina, 220 es igual al maximo de cantidad de gasolina
    },

    actions: {
        // accion para realizar el decremento de gasolina
        decrease_gasoline({commit}, value_1){
           commit('decrease', value_1)
        },
        // accion para realizar el incremento de gasolina 
        increase_gasoline({commit}, value_2){
            commit('increase', value_2)
        }
    },

    getters: {
        // getters para obtener el estado de la gasolina
         getStateGasoline_1 : (state) => state.gasoline_1,
         getStateGasoline_2 : (state) => state.gasoline_2,
    }
}

export default fuelquantity