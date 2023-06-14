<template>  
    <div class="circular"> 
        <div class="box">
        <!-- 
        <button id="increase" @mousedown="Accelerator" @mouseup="releaseAccelerator"></button>
        <button id="decrease" @mousedown="brake" onmouseup=""></button>
         -->
        <div class="tachometer">
            <div id="measurer">
                <div id="point"></div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

  export default {

  

    methods:{
        Accelerator(){

        document.getElementById("measurer").style = "transform-origin: bottom;transform: rotate(70deg);transition:4s";
        },

                
        releaseAccelerator(){
        document.getElementById("measurer").style.cssText = "transform-origin: bottom;transform: rotate(-130deg);transition:3.5s;";
        },

        brake(){

        document.getElementById("measurer").style.cssText = "transform-origin: bottom;transform: rotate(-135deg);transition:0.5s;";

        }

    }
  
  }



</script>

<style>




/*
.box #increase{ 
    width: 8px;
    height: 4px;
    position: absolute;
    background-color: green;
    right: 1px;
    bottom: 15px;
    outline: none;
    user-select: none;
    z-index: 4;
    cursor: pointer;
    border-radius: 5px;

}
.box #increase:hover{
    box-shadow: 0px 0px 10px 5px gray;

}
.box #decrease:hover{
    box-shadow: 0px 0px 10px 5px gray;

}
.box #decrease{
    width: 8px;
    height: 4px;
    position: absolute;
    bottom: 15px;
    outline: none;
    background-color: red;
    user-select: none;
    cursor: pointer;
    z-index: 4;
    border-radius: 5px;

}

*/
.tachometer{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-image: url(https://i.ibb.co/Mkgvbf1/tacometro5.png);
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    position: relative;
    background-color: rgb(0, 0, 0);

    
}

#measurer{
    width: 1px;
    height: 20px;
    border: 1px solid white;
    border-radius: 2px;
    background-color: white;
    position: absolute;
    top: 25%;
    left: 49%;
    z-index: 3;
    transform-origin: bottom;
    transform: rotate(-130deg);    /* Grados para rotar el medidor de velocidad */
    transition: 2s;


    
}

#point{
    width: 8px;
    height: 8px;
    position: absolute;
    border: 1px solid white;
    border-radius: 50%;
    bottom: -5px;
    left:-5px;
    background-color: white;
    transition: 2s;

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