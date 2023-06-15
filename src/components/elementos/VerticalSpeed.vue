<template> 
    <div class="circular"> 
        
            <div class="imagen" id="img1">
            <div class="arrow" id ="needle">
              <div class="point"></div>
            </div>
        </div>
        
       
        
  
    </div>
</template>

<script>

  export default {
    methods:{
      get_Degrees(){     //metodo para pasar valores en grados 
        return 90       // retorna la variable que se le pasa al metodo
      }
    }, 
    mounted(){
      let speed = document.getElementById("needle")   // se obtiene el id de la aguja del medidor vertical speed 
      let degrees = this.get_Degrees()                // obtengo los grados que se le pasa al metodo
      speed.style.transform = `rotate(${degrees}deg)` // se aplica el cambio de la rotacion de la aguja dependiendo los grados que se obtienen
    }
  }

</script>

<style scoped>



.imagen{
    background-image: url("https://i.ibb.co/s3nQLmZ/bbbbb.png");
    background-size: 100%;
    width: 100%;
    height: 100%;
    
    background-repeat: no-repeat;
    background-position: center;
    z-index: 2;  
}

.point{
    /*punto de la aguja*/
    width: 6px;
    height: 6px;
    background-color: black;
    left: -1.5px;
    bottom: 18px;
    position: absolute;
    border-radius: 50%;

}

#needle{
  /*aguja*/ 
  width: 2px;
  height:20px;
  background-color: white;
  transform: rotate(90deg);
  margin-left: 2.7%;
  margin-top: 2.7%;
  transition: 3s;
  position: absolute;
  transform-origin:top;
}

.circular{
  /* centrado generico */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50%;
  background-color: rgb(16, 15, 15);
  height: 100%;
  width: 100px;
}   

</style>
