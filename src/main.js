import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

let timeoutThrottle;

window.addEventListener("keypress",(event) => {
    if(event.key === "c"){
        clearTimeout(timeoutThrottle);
        store.dispatch("presionarThrottle");
        console.log("throttle_depth", store.getters.getThrottleDepth)
    }
    else if(event.key === "v"){
        clearTimeout(timeoutThrottle);
        store.dispatch("tirarThrottle");
        console.log("throttle_depth", store.getters.getThrottleDepth)
    }

})
window.addEventListener('keydown', event => {
    const key = event.key.toUpperCase()
    store.dispatch('presionarTecla_yoke', key)
  })
  
  // Evento para soltar una tecla
  window.addEventListener('keyup', () => {
    store.dispatch('soltarTecla_yoke')
  })

createApp(App).use(store).mount('#app');
