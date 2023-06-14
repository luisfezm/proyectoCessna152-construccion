<template>
    <div class="diferente">
        <div class="box">
        <!--
            <button id="increase" onmousedown="Accelerator()" onmouseup="releaseAccelerator()"></button>
            <button id="decrease" onmousedown="brake()" onmouseup=""></button>
        -->
            <div class="altimeter">
                <div id="measurer-altimeter">
                    <div id="point-altimeter"></div>




                </div>
                <div id="measurer-medium">

                </div>
                <div id="measurer-small">

                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { onMounted } from 'vue';

  export default {




    methods:{
        grados(){ // Se recibe el parametro para los grados
            return 0
        }
/*

        Accelerator(){

        document.getElementById("measurer").style.cssText = "transform-origin: bottom;transform: rotate(340deg);transition:40s";
        document.getElementById("measurer-medium").style.cssText = "transform-origin: bottom;transform: rotate(360deg);transition:20s";
        document.getElementById("measurer-small").style.cssText = "transform-origin: bottom;transform: rotate(720deg);transition:100s";
        },

        releaseAccelerator(){
        document.getElementById("measurer").style.cssText = "transform-origin: bottom;transform: rotate(1deg);transition:5s;";
        document.getElementById("measurer-medium").style.cssText = "transform-origin: bottom;transform: rotate(1deg);transition:5s;";
        document.getElementById("measurer-small").style.cssText = "transform-origin: bottom;transform: rotate(1deg);transition:5s;";
        },


        brake(){

        document.getElementById("measurer").style.cssText = "transform-origin: bottom;transform: rotate(0deg);transition:3s;";
        document.getElementById("measurer-medium").style.cssText = "transform-origin: bottom;transform: rotate(0deg);transition:3s;";
        document.getElementById("measurer-small").style.cssText = "transform-origin: bottom;transform: rotate(0deg);transition:3s;";
        }
*/
    },

    mounted(){
        let medidor = document.getElementById("measurer-altimeter")
        let deg = this.grados()
        medidor.style.transform = `rotate(${deg}deg)`
        let medidor_medium = document.getElementById("measurer-medium")
        let deg_medium = this.grados() + 90
        medidor_medium.style.transform = `rotate(${deg_medium}deg)`
        let medidor_small = document.getElementById("measurer-small")
        let deg_small = this.grados() + 140
        medidor_small.style.transform = `rotate(${deg_small}deg)`

    }

    

  }
</script>

<style>





.altimeter{
    width: 90px;
    height: 90px;
    border-radius: 50%;

    background-image: url(https://i.ibb.co/sFtqRmS/altimetro.png);
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    position: relative;
    background-color: rgb(0, 0, 0);


}

#measurer-altimeter{
    width: 1.5px;
    height: 30px;
    border-radius: 2px;
    background-color: white;
    position: relative;
    z-index: 3;
    transform-origin: bottom;
    transform: rotate(370deg);
    transition: 2s;
    top: 15%;
    left: 50%;


}

#measurer-medium{
    width: 1px;
    height: 22px;
    border-radius: 2px;
    background-color: white;
    position: relative;
    top: -8%;
    left: 50%;
    z-index: 2;
    transform-origin: bottom;
    transform: rotate(270deg);
    transition: 2s;
}

#measurer-small{
    width: 1px;
    height: 18px;
    border-radius: 2px;
    background-color: white;
    position: relative;
    top: -27%;
    left: 50%;
    z-index: 1;
    transform-origin: bottom;
    transform: rotate(120deg);
    transition: 2s;
}
#point-altimeter{
    width: 8px;
    height: 8px;
    position: absolute;
    border-radius: 50%;
    bottom: -5px;
    left:-4px;
    background-color: white;


}


.diferente{
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