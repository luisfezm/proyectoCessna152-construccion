<template>
  <div class="circular">
    <div class="box">
      <div class="tachometer">
        <div id="measurer">
          <div id="point"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    /*
   Idea sobre la integración de Tacometro:

   El tacómetro actualmente está conectado con su lógica (tacometro.js)
   lo que se hace realmente en éste componente es obtener rpm desde tacometro.js que a su vez tacometro.js obtiene rpm desde throttle

   throttle -> tacometro.js -> MiTachometro.vue

   Ésta conexión de throttle a tacometro.js no está hecha
   Pero la conexión de tacometro.js a MiTachometro.vue sí está hecha y cuando se implemente en un futuro correctamente la conexión cuando se use el throttle debería cambiar tacometro.js y automaticamente actualizar el valor de la aguja del tacometro.

*/
    mounted() {
      setInterval(() => {
        this.accelerator(this.currentRpm()) //Le pasamos los rpm 
      }, 1000) //Cada 1seg se actualiza el valor que se refleja en el indicador

      //this.releaseAccelerator(this.currentRpm); -> Funcion para simular que se soltó el acelerador que puede ser utilizada en un futuro
      
      //Funcion para simular frenado
      //this.brake(this.currentRpm);
    },
    methods: {
      currentRpm(){ //Obtener rpm desde tacometro.js
       // console.log("RPM desde tacometro.js = "+this.$store.getters.getRpm)
        return this.$store.getters.getRpm
      },
      accelerator(rpm) {
        const measuredElement = document.getElementById('measurer')
        console.log(rpm)
        const range = 140 // Rango de grados permitidos
        const maxRpm = 3500 // Valor máximo de RPM

        const RpmRange = Math.max(Math.min(rpm, maxRpm), 0) // Asegurar que el valor RPM esté dentro del rango permitido
        const percentage = RpmRange / maxRpm // Calcular el porcentaje relativo al valor máximo de RPM
        const degrees = percentage * range * 2 - range // Calcular los grados relativos al rango permitido
        //console.log(degrees)
        if (degrees >= 140) {
          measuredElement.style.cssText = `transform: rotate(${140}deg); transition: 4s;`
        } else {
          measuredElement.style.cssText = `transform: rotate(${
            degrees - 15
          }deg); transition: 4s;`
        }
      },
      /*
    releaseAccelerator(rpm) {
      rpm = this.currentRpm
      console.log(this.currentRpm)
      const gradosCalculados = (rpm / 500) * 205; // Calcula los grados basados en el valor RPM
      document.getElementById('measurer').style.cssText = `transform-origin: bottom; transform: rotate(${gradosCalculados}deg); transition: 3.5s`;
    },
    brake(rpm) {
      rpm = this.currentRpm
      console.log(this.currentRpm)
      const gradosCalculados = (rpm / 500) * 205; // Calcula los grados basados en el valor RPM
      document.getElementById('measurer').style.cssText = `transform-origin: bottom; transform: rotate(${gradosCalculados}deg); transition: 0.5s`;
    },
    */
    },
  }
</script>

<style>
  .box #increase {
    width: 8px;
    height: 4px;
    position: absolute;
    background-color: green;
    right: 1px;
    bottom: 15px;
    outline: none;
    user-select: none;
    z-index: 4;
    cursor: pointer;
    border-radius: 5px;
  }
  .box #increase:hover {
    box-shadow: 0px 0px 10px 5px gray;
  }
  .box #decrease:hover {
    box-shadow: 0px 0px 10px 5px gray;
  }
  .box #decrease {
    width: 8px;
    height: 4px;
    position: absolute;
    bottom: 15px;
    outline: none;
    background-color: red;
    user-select: none;
    cursor: pointer;
    z-index: 4;
    border-radius: 5px;
  }

  .tachometer {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-image: url(https://i.ibb.co/Mkgvbf1/tacometro5.png);
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    position: relative;
    background-color: rgb(0, 0, 0);
  }

  #measurer {
    width: 1px;
    height: 20px;
    border: 1px solid white;
    border-radius: 2px;
    background-color: white;
    position: absolute;
    top: 25%;
    left: 49%;
    z-index: 3;
    transform: rotate(-140deg);
    transition: transform 4s;
    transform-origin: bottom;
  }

  #point {
    width: 8px;
    height: 8px;
    position: absolute;
    border: 1px solid white;
    border-radius: 50%;
    bottom: -5px;
    left: -5px;
    background-color: white;
  }

  .circular {
    /* centrado generico */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
    background-color: rgb(16, 15, 15);
    height: 90px;
    width: 90px;
  }
</style>
