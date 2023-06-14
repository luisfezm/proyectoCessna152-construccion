import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');

window.addEventListener('keydown', event => {
    const key = event.key.toUpperCase()
    store.dispatch('presionarTecla_yoke', key)
  })
  
  // Evento para soltar una tecla
  window.addEventListener('keyup', () => {
    store.dispatch('soltarTecla_yoke')
  })