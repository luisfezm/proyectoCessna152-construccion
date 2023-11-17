<template>
  <div class="palanca">
    <div id="carburetor">
      <div id="circle-carburetor" @click="change" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cont: 0,
      }
    },

    mounted(){
      window.addEventListener('keypress', this.girarCarburator);
    },
    

    methods: {
      
      change() {
        // el metodo change lo que hace es cambiar el tamaño del carburador
        if (this.cont == 1) {
          // cuando es uno el cont, el carburador se agranda y se tira hacia afuera
          document.getElementById('carburetor').style.width = '35px'
          document.getElementById('carburetor').style.height = '35px'
          document.getElementById('circle-carburetor').style.width = '10px'
          document.getElementById('circle-carburetor').style.height = '10px'
          this.cont = 0;
          console.log(this.cont)
        } else {
          if(this.cont == 2){     //If agregado para mantener consistencia
            // cuando el cont es dos, el carburador se vuelve a achicar o se tira para adentro
            document.getElementById('carburetor').style.width = '50px'
            document.getElementById('carburetor').style.height = '50px'
            document.getElementById('circle-carburetor').style.width = '25px'
            document.getElementById('circle-carburetor').style.height = '25px'
            this.cont = 0;
          }
          
        }

        /*Cada vez que se clickea el circulito plomo del carburador se simula que se tira hacia afue si es el primer
           click y hacia adentro si es el segundo click, asi sucesivamente */

        /*se pueden pasar variables globales si se quiere modificar la temperatura del carburador en el  metodo change*/
      },
      
      girarCarburator(event){
        if(event.key == 'u'){
          this.cont = 2;
        }else{
          if(event.key == 'i'){
            this.cont = 1
          }
        }
        this.change();
      },
    },
  }
</script>

<style>
  .palanca {
    /* centrado generico */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(11, 143, 139);
    width: 60%;
    height: 80%;
    max-height: 80px;
    border-radius: 5%;
    margin: auto;
  }

  #carburetor {
    /*container carburador */
    width: 45px;
    height: 45px;
    background-color: rgb(20, 20, 20);
    border-radius: 7%;
    margin-top: 50px;
    margin-left: 3px;
  }

  #circle-carburetor {
    /*circulo del carburador*/
    width: 20px;
    height: 20px;
    background: radial-gradient(white, rgb(202, 197, 197));
    border-radius: 50%;
    margin-left: 13px;
    margin-top: 12px;
  }
</style>
