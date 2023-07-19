<template>
  <div id="app">
    <!-- Cuando haces clic en este botón, el valor de showModal se establece en true -->
    <button class="open-modal" @click="showModal = true">
      Funcionalidades
    </button>

    <!-- Este div se muestra solo cuando showModal es true -->
    <div v-if="showModal" class="modal open">
      <div class="modal-content">
        <!-- Agregamos aquí la imagen dentro del contenido del modal -->
        <img
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
  }

  .modal.open {
    /* Estos estilos se aplican al modal cuando está visible */
    opacity: 1;
    visibility: visible;
  }
  button.open-modal {
    position: absolute;
    top: 10px;
    left: 250px;
    border: none;
    padding: 10px 20px;
    background: linear-gradient(to right, #2f0101, #4f4f4f);
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  button.open-modal:hover {
    background: linear-gradient(to left, #ff0505, #ff6600);
  }
</style>
