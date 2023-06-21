<template>
  <div class="container">
    <div id="map" />
    <div class="checkbox-group">
      <div class="checkbox-container">
        <input
          id="circularCheckbox"
          name="cssCheckbox"
          type="checkbox"
          class="css-checkbox"
          @change="toggleCircularMode"
        />
        <!--<input type="checkbox" id="circularCheckbox" @change="toggleCircularMode" />-->
        <label class="checkbox-label" for="circularCheckbox"
          >Modo Circular</label
        >
      </div>
      <div class="checkbox-container">
        <input
          id="zoomControlCheckbox"
          name="cssCheckbox"
          class="css-checkbox"
          type="checkbox"
          @change="toggleZoomControl"
        />
        <label class="checkbox-label" for="zoomControlCheckbox">Zoom</label>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, onMounted, ref } from 'vue'
  import 'leaflet/dist/leaflet.css'
  import L from 'leaflet'

  export default defineComponent({
    name: 'MiMapa',
    setup() {
      let map = null
      const circularMode = ref(false)
      const zoomControl = L.control.zoom()
      let marker = null

      const actualizarMapa = (lat, lng) => {
        const newCoordinates = L.latLng(lat, lng)
        map.setView(newCoordinates, 6)
        marker.setLatLng(newCoordinates)
      }

      const inicializarMapa = (x, y) => {
        map = L.map('map', { zoomControl: false })
        if (circularMode.value) {
          map.getContainer().style.borderRadius = '50%'
        }

        map.setView([x, y], 6)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Cesssna',
        }).addTo(map)

        const Icono = L.icon({
          iconUrl: 'https://img.icons8.com/?size=512&id=30568&format=png',
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        })

        marker = L.marker([x, y], { icon: Icono }).addTo(map)
      }

      const toggleMarkerVisibility = () => {
        marker.setOpacity(marker.options.opacity === 0 ? 1 : 0)
      }

      const toggleCircularMode = () => {
        const checkbox = document.getElementById('circularCheckbox')
        circularMode.value = checkbox.checked

        if (circularMode.value) {
          map.getContainer().style.borderRadius = '50%'
        } else {
          map.getContainer().style.borderRadius = '0'
        }
      }

      const toggleZoomControl = () => {
        const checkbox = document.getElementById('zoomControlCheckbox')

        if (checkbox.checked) {
          map.addControl(zoomControl)
        } else {
          map.removeControl(zoomControl)
        }
      }
      // Aqui se actualiza el mapa, se le pasa la latitud y longitud,
      // para que se actualice la posicion del mapa y de marca de posicion
      onMounted(() => {
        setInterval(toggleMarkerVisibility, 500)
        inicializarMapa(-35.4264, -71.65542)
        actualizarMapa(-14.235004, -51.92528)
        actualizarMapa(-35.0021448, -71.2299552)
      })

      return {
        circularMode,
        toggleCircularMode,
        toggleZoomControl,
      }
    },
  })
</script>

<style>
  .container {
    margin-top: 0px;
    width: 250px; /* */
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #map {
    width: 100%;
    height: 300px;
    border-radius: 0;
  }

  .checkbox-group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .checkbox-label {
    margin-left: 5px;
  }

  .checkbox-container input[type='checkbox'] {
    margin-right: 5px;
  }

  .css-checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: 0px;
    padding: 0;
    border: 0;
  }
  #inputPreview {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  .css-checkbox + label {
    position: relative;
    font-size: 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    height: 20px;
    color: rgb(0, 0, 0);
  }
  .css-checkbox + label::before {
    content: ' ';
    display: inline-block;
    vertical-align: middle;
    margin-right: 0px;
    width: 14px;
    height: 14px;
    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(204, 204, 204);
    border-radius: 4px;
    box-shadow: none;
    margin: 3px;
  }
  .css-checkbox:checked + label::after {
    content: ' ';
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjMDA2YmVkIiBkPSJNMCA5NkMwIDYwLjY1IDI4LjY1IDMyIDY0IDMySDM4NEM0MTkuMyAzMiA0NDggNjAuNjUgNDQ4IDk2VjQxNkM0NDggNDUxLjMgNDE5LjMgNDgwIDM4NCA0ODBINjRDMjguNjUgNDgwIDAgNDUxLjMgMCA0MTZWOTZ6Ii8+PC9zdmc+');
    background-repeat: no-repeat;
    background-size: 14px 14px;
    background-position: center center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1px;
    left: 0px;
    top: 0px;
    text-align: center;
    background-color: transparent;
    font-size: 10px;
    height: 20px;
    width: 20px;
  }
</style>
