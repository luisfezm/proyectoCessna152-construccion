<template>
  <div id="app">
    <!-- Cuando haces clic en este botón, el valor de showModal se establece en true -->
    <button class="open-modal" @click="showModal = true">Info</button>

    <!-- Este div se muestra solo cuando showModal es true -->
    <div v-if="showModal" class="modal open">
      <div class="modal-content">
        <p>
          <strong>1.-Control del Yoke:</strong> El movimiento se logra mediante
          cuatro teclas. Para cambiar el tono, se usan "S" (descender la punta)
          y "W" (elevar la punta). Para el giro, se emplean "A" (elevar ala
          derecha e inclinar izquierda) y "D" (elevar ala izquierda e inclinar
          derecha).
        </p>
        <p>
          <strong>2.-Pedales del timón:</strong> Derecha - timón derecha.
          Izquierda - timón izquierda. "Q" aumenta izquierda 1% por tiempo. "E"
          aumenta derecha 1% por tiempo.
        </p>
        <p>
          <strong>3.-Acelerador/Throttle:</strong> Palanca con dos teclas - "C"
          para acelerar, "V" para reducir. Mantener presionadas las teclas según
          se necesite.
        </p>
        <p>
          <strong>4.-Aletas de las alas/Wing Flaps:</strong> Dos palancas para
          volar a velocidades más bajas o reducir velocidad. Palanca derecha
          extiende las alas, la izquierda ajusta el ángulo (hasta 10°). Control
          con mouse y clicks según preferencia del usuario.
        </p>
        <p>
          <strong>5.-El tacómetro de RPM.</strong> Proporciona información
          crucial para controlar y optimizar la velocidad del motor.
        </p>
        <p>
          <strong>6.-El indicador de gasolina: </strong> el avión consta de dos
          estanques: L.FUEL (estanque derecho) y R.FUEL (estanque izquierdo).
          Muestra la cantidad de combustible en cada uno de ellos.
        </p>
        <p>
          <strong>7.-El Heading Indicator:</strong>Indicador de rumbo en grados.
          Muestra la dirección actual. Navegación y ajustes de rumbo.
        </p>
        <p>
          <strong>8.-El Horizonte Artificial</strong> es un instrumento que
          muestra la actitud y la inclinación del avión con respecto al
          horizonte terrestre.
        </p>
        <p>
          <strong>9.-Fuel Quantity:</strong> Ajusta la mezcla de
          combustible/aire del avión, es una palanca. Si está hacia dentro,
          significa que entra solamente combustible
        </p>
        <p>
          <strong>10.-El Trim Wheel</strong> ajusta la posición del
          estabilizador horizontal y equilibra las fuerzas aerodinámicas en
          cualquier fase del vuelo.
        </p>
        <p>
          <strong>11.-El Turn Coordinator:</strong> Muestra la velocidad de giro
          del avión en grados por segundo. Se ajusta con el botón de presión
          barométrica.
        </p>
        <p>
          <strong>12.-Adf Needle:</strong> para saber a donde está apuntado el
          avion
        </p>
        <p><strong>13.-Fligth Hour Recorder:</strong> horas de vuelo</p>
        <p>
          <strong>14.-El Airspeed Indicator:</strong> Muestra la velocidad del
          avión en nudos. Se ajusta con el botón de presión barométrica.
        </p>
        <p>
          <strong>15.-Course Deviation Indicator:</strong> Nos muestra la
          desviación lateral del avión respecto de un punto de coordenadas de la
          radio NAV
        </p>
        <p>
          <strong>16.-Vertical Speed Indicator:</strong> indica si el avión está
          subiendo o bajando y a qué velocidad
        </p>
        <p>
          <strong>17.-Primer:</strong>Garantiza que el motor reciba suficiente
          combustible para encender.
        </p>
        <p>
          <strong>18.-Ignition switch:</strong> cinco movimientos "off", "R",
          "L", "BOTH", "Start".
        </p>
        <p>
          <strong>19.-Amperímetro:</strong>Si esta prendido el motor deberia
          arrojar +30A, apagado 0A.
        </p>
        <p>
          <strong>20.-Radio Panel:</strong>Course Deviation Indicator 1 y 2 para
          mostrar la dirección de esta señal para aterrizar. .
        </p>
        <br />
        <p><strong>Para prender el Motor:</strong></p>
        <p>
          Se necesita apretar el boton Primer cinco veces, esto para que el
          motor tenga gasolina para el primer arranque, liego en el Ignition
          switch se debe poner en la pocicion Start, con eso prendera el motor.
        </p>
        <br />
        <img
          :src="panelIzquierdo"
          alt="Panel Izquierdo"
          style="width: 400px; height: 200px"
        />
        <br />
        <p>
          1 : Airspeed Indicator, 2 : Artificial Horizon, 3 : Analogue Clock, 4
          : Altimeter, 5 : Course Deviation Indicator (NAV1), 6 : Turn
          Coordinator, 7 : Suction Gauge, 8 : Heading Indicator, 9 : Vertical
          Speed Indicator, 10 : Course Deviation Indicator (NAV2)
        </p>
        <br />
        <img
          :src="panelIzquierdoAbajo"
          alt="Panel Izquierdo abajo"
          style="width: 400px; height: 200px"
        />
        <p>
          1 : Carburetor Heat Control, 2 : Throttle, 3 : Mixture, 4 : Wing
          Flaps, 5 : Trim Wheel
        </p>
        <br />
        <img
          :src="panelderecho"
          alt="panelderecho"
          style="width: 300px; height: 150px"
        />
        <br />
        <p>
          1 : Electronic Communications and Navigation Box, 2 : Tachometer, 3 :
          ADF Needle, 4 : Ammeter, 5 : Flight Hour Recorder, 6 : ADF Navigation
          Box
        </p>

        <br />
        <button @click="showModal = false">Cerrar</button>

        <!-- Cuando haces clic en este botón, el valor de showModal se establece en false -->

        <!-- Aquí puede añadir el contenido del cuerpo del modal -->
      </div>
    </div>
  </div>
</template>

<script>
  import PanelIzquierdo from '@/assets/panel izquierdo.png'
  import panelIzquierdoAbajo from '@/assets/panel izquierdo abajo.png'
  import panelderecho from '@/assets/panelderecho.png'

  export default {
    data() {
      return {
        // Esta es la variable que controla si se muestra o no el modal
        showModal: false,
        panelIzquierdo: PanelIzquierdo,
        panelIzquierdoAbajo: panelIzquierdoAbajo,
        panelderecho: panelderecho,
        // Añade la dirección de tu imagen aquí
      }
    },
  }
</script>

<style scoped>
  .modal {
    /* Estos estilos se aplican al modal cuando está oculto */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.8s ease;
    opacity: 0;
    visibility: hidden;
    z-index: 9999; /* Asegúrate de que el modal aparezca por delante de otros elementos */
  }

  .modal-content {
    /* Estos estilos se aplican al contenido del modal */
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 9em;
    width: 60%;
    border-radius: 0.5em;
    max-height: 80vh; /* ajusta este valor según tus necesidades */
    overflow-y: scroll;
  }

  .modal.open {
    /* Estos estilos se aplican al modal cuando está visible */
    opacity: 1;
    visibility: visible;
  }
  button.open-modal {
    position: absolute;
    top: 5px; /* Este valor controla la distancia del botón desde la parte superior */
    left: 5px; /* Este valor controla la distancia del botón desde la izquierda */
    border: none;
    padding: 5px 10px; /* Estos valores controlan el relleno alrededor del texto en el botón, disminuyéndolos hará que el botón sea más pequeño */
    font-size: 10px; /* Este valor controla el tamaño del texto en el botón, disminuirlo hará que el texto sea más pequeño */
    background: linear-gradient(to right, #2f0101, #4f4f4f);
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease;
    z-index: 10000; /* Aumentar este valor si el botón aún no aparece en la parte superior */
  }
  .modal-content::-webkit-scrollbar {
    width: 10px;
  }

  .modal-content::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .modal-content::-webkit-scrollbar-thumb {
    background: #888;
  }

  .modal-content::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  button.open-modal:hover {
    background: linear-gradient(to left, #ff0505, #ff6600);
  }
</style>

<!-- Agregamos aquí la imagen dentro del contenido del modal -->
<!-- <img
          :src="panelIzquierdo"
          alt="Panel Izquierdo"
          style="width: 400px; height: 200px"
        />
        <p>
          1.-Indicador de velocidad aérea: Muestra la velocidad del avión y sus
          rangos operativos.
        </p>
        <p>
          2.-Horizonte artificial: Indica la actitud y orientación del avión en
          relación al horizonte.
        </p>
        <p>3.-Reloj analógico: Muestra la hora.</p>
        <p>4.-Altimetro: Indica la altitud actual del avión.</p>
        <p>
          5.-Indicador de desviación de curso (NAV1): Utilizado para la
          navegación y seguir rutas de navegación terrestre.
        </p>
        <p>
          6.-Coordinador de giros: Indica la tasa de giro y balance del avión.
        </p>
        <p>
          7.-Indicador de succión: Muestra la presión disponible para alimentar
          instrumentos esenciales.
        </p>
        <p>
          8.-Indicador de rumbo: Indica la dirección del avión en relación a los
          puntos cardinales.
        </p>
        <p>
          9.-Indicador de velocidad vertical: Muestra si el avión está
          ascendiendo o descendiendo y a qué velocidad.
        </p>
        <p>
          10.-Indicador de desviación de curso (NAV2): Similar al NAV1,
          utilizado para la navegación y procedimientos más complejos.
        </p>
        <img
          :src="panelIzquierdoAbajo"
          alt="Panel Izquierdo abajo"
          style="width: 400px; height: 200px"
        />
        <p>
          1.-Control de Calor del Carburador: Regula el flujo de aire caliente
          para prevenir la formación de hielo en el motor.
        </p>
        <p>
          2.-Acelerador: Control principal para ajustar la potencia del motor.
        </p>
        <p>
          3.-Mezcla: Ajusta la proporción de combustible y aire para controlar
          la eficiencia y potencia del motor.
        </p>
        <p>
          4.-Flaps de Ala: Superficies de control que incrementan la
          sustentación y ralentizan la aeronave a velocidades más bajas.
        </p>
        <p>
          5.-Trim: Ajuste que mantiene la actitud de vuelo sin la necesidad de
          controlar constantemente el elevador manualmente.
        </p>
        <img
          :src="panelderecho"
          alt="panelderecho"
          style="width: 300px; height: 150px"
        />
        <p>
          1.-Caja de Comunicaciones y Navegación Electrónica: Consultar (Panel
          de Radio)
        </p>
        <p>2.-Tacómetro: Indica las RPM del motor.</p>
        <p>
          3.-Aguja ADF: Utilizada junto con la caja ADF para determinar la
          dirección hacia un punto de referencia.
        </p>
        <p>
          4.-Amperímetro: Muestra la electricidad producida y utilizada por los
          sistemas eléctricos de la aeronave.
        </p>
        <p>
          5.-Registro de Horas de Vuelo: Muestra el tiempo de funcionamiento de
          la aeronave durante una sesión de vuelo.
        </p>
        <p>
          6.-Caja de Navegación ADF: Utilizada para la navegación por dirección
          automática hacia un punto de referencia.
        </p>
        <br /> -->
