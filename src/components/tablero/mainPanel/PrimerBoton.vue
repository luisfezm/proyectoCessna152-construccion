<template>
  <div>
    <div class="led" :class="{ 'led-red': !estadoLed, 'led-green': estadoLed }"></div>
  </div>
  <div class="base">
    <div
      :class="['palanca', { active: estadoPalanca }]"
      @mousedown="ejecutar"  
      @mouseup="cambiarEstadoPalanca"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        estadoLed: false,
        estadoPalanca: false,
      }
    },
    methods: {
      ejecutar(){
        Promise.all([this.cambiarEstadoPalanca(), this.cambiarEstadoLed()])
        .then(() => {

        }).catch((error) => {
          console.error('Error: ',error);
        })
      },
      cambiarEstadoPalanca() {
        this.estadoPalanca = !this.estadoPalanca
      },
      cambiarEstadoLed(){
        this.estadoLed = !this.estadoLed  
      }
    },
  }
</script>

<style>
  .base {
    width: 80px;
    height: 80px;
    background-color: black;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .palanca {
    width: 50px;
    height: 50px;
    background-color: silver;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .active {
    transform: scale(0.8);
  }

  .led {
    width: 10px;
    height: 10px;
    border-radius: 10%;
    background-color: red;
  }

  .led-green {
    background-color: green;
  }
</style>
