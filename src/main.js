import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

let timeoutThrottle
let timeoutPedalIzq
let timeoutPedalDerecha
let timeoutVerticalspeed
let temp

window.addEventListener('keypress', (event) => {
  if (event.key === 'c') {
    clearTimeout(timeoutThrottle)
    //store.dispatch('presionarThrottle')       //se comento esto ya que no se sabe si con las teclas tambien cambiara el valor
    console.log('throttle_depth', store.getters.getThrottleDepth)
  } else if (event.key === 'v') {
    clearTimeout(timeoutThrottle)
    //store.dispatch('tirarThrottle')          //se comento esto ya que no se sabe si con las teclas tambien cambiara el valor
    console.log('throttle_depth', store.getters.getThrottleDepth)
  }
})

window.addEventListener('keypress', (event) => {
  if (event.key === 'u') {
    clearTimeout(timeoutVerticalspeed)
    store.dispatch('cambiarVelocidad')
    store.dispatch("updateVerticalspeed")
    console.log('speed', store.getters.getSpeedPPM)
    console.log('angulo', store.getters.getAngulo)
    console.log('verticalspeed', store.getters.getVerticalspeed)
  }}
  )
window.addEventListener('keydown', (event) => {
  if (event.key === 'q' && store.getters.movPedalDerecha === 0) {
    clearTimeout(timeoutPedalIzq)
    store.dispatch('incrementarMovPedalIzq')
    console.log('mov_Pedal_izq:', store.getters.movPedalIzq)

    store.dispatch('calcularHeadingIndicator', -store.getters.movPedalIzq)
    console.log(
      'Valor de Heading Indicator:',
      store.getters.getHeadingIndicator
    )
  } else if (event.key === 'e' && store.getters.movPedalIzq === 0) {
    clearTimeout(timeoutPedalDerecha)
    store.dispatch('incrementarMovPedalDerecha')

    console.log('mov_Pedal_derecha:', store.getters.movPedalDerecha)

    store.dispatch('calcularHeadingIndicator', store.getters.movPedalDerecha)
    console.log(
      'Valor de Heading Indicator:',
      store.getters.getHeadingIndicator
    )
  }
})

window.addEventListener('keyup', (event) => {
  if (event.key === 'q') {
    timeoutPedalIzq = setTimeout(() => {
      store.dispatch('resetMovPedalIzq')
      console.log('mov_Pedal_izq reset to 0')

      store.dispatch('calcularHeadingIndicator', -store.getters.movPedalIzq)
      console.log(
        'Valor de Heading Indicator:',
        store.getters.getHeadingIndicator
      )
    }, 1000)
  } else if (event.key === 'e') {
    timeoutPedalDerecha = setTimeout(() => {
      store.dispatch('resetMovPedalDerecha')
      console.log('mov_Pedal_derecha reset to 0')
      store.dispatch('calcularHeadingIndicator', store.getters.movPedalDerecha)
      console.log(
        'Valor de Heading Indicator:',
        store.getters.getHeadingIndicator
      )
    }, 1000)
  }
})

//Teclas para mixture
window.addEventListener('keypress', (event) => {
  if (event.key === 'n' || event.key === 'm') {
    store.dispatch('teclaPresionada', event);
    console.log('estadoMixture', store.getters.getEstadoMixture);
  }
});

//Segundo lote de teclas para mixture (sujeto a cambios)
window.addEventListener('keypress', (event) => {
  if (event.key === 'o') {
    store.dispatch('teclaPresionada', event);
    store.dispatch('actualizarBencinaPorHora', -5);
    console.log('Valor Bencina ', store.getters.getConsumoBencinaHora);
  }else{
    if(event.key === 'p'){
      store.dispatch('teclaPresionada', event);
      store.dispatch('actualizarBencinaPorHora', 5);
      console.log('Valor Bencina ', store.getters.getConsumoBencinaHora);
    }
  }
});



createApp(App).use(store).mount('#app')
