<template>
  <button
    class="pedal"
    role="button"
    @mousedown="pedalDerecho(true)"
    @mouseup="pedalDerecho(false)"
  />
</template>

<script>
  
  export default {
    data() {
      return {
        direccion: 0,
      }
    },
    
    methods: {
      pedalDerecho(presionado) {
        if (presionado) {
          this.direccion = 1
          
        } else {
          this.direccion = 0
          
        }
      },
    },
    
  }
  
</script>

<style scoped>
  .pedal {
    height: 45px;
    padding: 10px 20px;
    border: none;
    background-color: #f2f2f2;
    border-radius: 0;
    display: block;
    transition: transform 0.3s;
    background-color: #0d0d0d;
  }

  .pedal:active {
    transform: perspective(200px) rotateX(40deg);
  }
</style>
