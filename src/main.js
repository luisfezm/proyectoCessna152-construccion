import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import indicadores from './modules/indicadores/indicadores';

let timeoutPedalIzq;
let timeoutPedalDerecha;
let temp;

window.addEventListener("keydown", (event) => {
  if (event.key === "q") {
    clearTimeout(timeoutPedalIzq);
    store.dispatch("incrementarMovPedalIzq");
    console.log("mov_Pedal_izq:", store.getters.movPedalIzq);

    store.dispatch('calcularHeadingIndicator',-store.getters.movPedalIzq);
    console.log("Valor de Heading Indicator:", store.getters.getHeadingIndicator);


  } else if (event.key === "e") {
    clearTimeout(timeoutPedalDerecha);
    store.dispatch("incrementarMovPedalDerecha");

    console.log("mov_Pedal_derecha:", store.getters.movPedalDerecha);

    store.dispatch('calcularHeadingIndicator',store.getters.movPedalDerecha);
    console.log("Valor de Heading Indicator:", store.getters.getHeadingIndicator);
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === "q") {
    timeoutPedalIzq = setTimeout(() => {
      store.dispatch("resetMovPedalIzq");
      console.log("mov_Pedal_izq reset to 0");

      store.dispatch('calcularHeadingIndicator',-store.getters.movPedalIzq);
      console.log("Valor de Heading Indicator:", store.getters.getHeadingIndicator);
    }, 1000);
  } else if (event.key === "e") {
    timeoutPedalDerecha = setTimeout(() => {
      store.dispatch("resetMovPedalDerecha");
      console.log("mov_Pedal_derecha reset to 0");
      store.dispatch('calcularHeadingIndicator',store.getters.movPedalDerecha);
      console.log("Valor de Heading Indicator:", store.getters.getHeadingIndicator);
    }, 1000);
  }
});

createApp(App).use(store).mount('#app');