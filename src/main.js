import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

let timeoutPedalIzq;
let timeoutPedalDerecha;

window.addEventListener("keydown", (event) => {
  if (event.key === "q") {
    clearTimeout(timeoutPedalIzq);
    store.dispatch("incrementarMovPedalIzq");
    console.log("mov_Pedal_izq:", store.getters.movPedalIzq);
  } else if (event.key === "e") {
    clearTimeout(timeoutPedalDerecha);
    store.dispatch("incrementarMovPedalDerecha");
    console.log("mov_Pedal_derecha:", store.getters.movPedalDerecha);
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === "q") {
    timeoutPedalIzq = setTimeout(() => {
      store.dispatch("resetMovPedalIzq");
      console.log("mov_Pedal_izq reset to 0");
    }, 1000);
  } else if (event.key === "e") {
    timeoutPedalDerecha = setTimeout(() => {
      store.dispatch("resetMovPedalDerecha");
      console.log("mov_Pedal_derecha reset to 0");
    }, 1000);
  }
});

createApp(App).use(store).mount('#app');