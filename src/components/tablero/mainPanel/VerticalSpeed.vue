<template>
  <div  id = "vertical" class="circular">
    <div id="img1" class="imagen">
      <div id="needle" class="arrow">
        <div class="point" />
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store'
  export default {
    mounted() {
      setInterval(() => {
        let speed = document.getElementById('needle') // se obtiene el id de la aguja del medidor vertical speed
        let degrees = this.get_Degrees() // obtengo los grados que se le pasa al metodo
        speed.style.transform = `rotate(${degrees}deg)` // se aplica el cambio de la rotacion de la aguja dependiendo los grados que se obtienen
      }, 1000)
    },
    methods: {
      get_Degrees() {
        //metodo para pasar valores en grados
        return store.getters.getVerticalspeedIndicator
        // retorna la variable que se le pasa al metodo
      },
    },
  }
</script>

<style scoped>
  .imagen {
    background-image: url('https://i.ibb.co/s3nQLmZ/bbbbb.png');
    background-size: 100%;
    width: 100%;
    height: 100%;
    position:relative;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 2;
  }

  .point {
    /*punto de la aguja*/
    width: 6px;
    height: 6px;
    background-color: black;
    left: -1.5px;
    bottom: 18px;
    position: absolute;
    border-radius: 50%;
  }

  #needle {
    /*aguja*/
    width: 2px;
    height: 20px;
    background-color: white;
    transform: rotate(90deg);
    left: 45%;
    top: 47.5%;
    transition: 3s;
    position: absolute;
    transform-origin: top;
  }

  .circular {
    /* centrado generico */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
    background-color: rgb(16, 15, 15);
    height: 70px;
    width: 70px;
  }
  
  #vertical{
    position: relative;
    left: 30%;
    height: 78px;
    width: 78px;
    top: 4%;
   
  }
 
</style>
