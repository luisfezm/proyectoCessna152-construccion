<template>
  <div class="indicadorMainPanel" id = "altimeter">
    <div clas="central-hider" id="altimeter-hide"></div>

    <div class="alimeter-scale hundreds-feets-1" style="--a:1"></div>
    <div class="alimeter-scale hundreds-feets-2" style="--a:2"></div>
    <div class="alimeter-scale hundreds-feets-3" style="--a:3"></div>
    <div class="alimeter-scale hundreds-feets-4" style="--a:4"></div>
    <div class="alimeter-scale hundreds-feets-5" style="--a:5"></div>
    <div class="center-point" ></div>
    
    <div class="hundred hund-0" style="--i:0"><b>0</b></div>
    <div class="hundred hund-1" style="--i:1"><b>1</b></div>
    <div class="hundred hund-2" style="--i:2"><b>2</b></div>
    <div class="hundred hund-3" style="--i:3"><b>3</b></div>
    <div class="hundred hund-4" style="--i:4"><b>4</b></div>
    <div class="hundred hund-5" style="--i:5"><b>5</b></div>
    <div class="hundred hund-6" style="--i:6"><b>6</b></div>
    <div class="hundred hund-7" style="--i:7"><b>7</b></div>
    <div class="hundred hund-8" style="--i:8"><b>8</b></div>
    <div class="hundred hund-9" style="--i:9"><b>9</b></div>
    <div class="needle-wraper" id="nw">
      <div class="primary-needle" id="pn"></div>
    </div>
    
  </div>
</template>

<script>
import { onMounted } from 'vue';

  export default {}
  mounted:{
    let needle = document.querySelector(".needle-wraper");
    /*while(true){
      let i=90;
      needle.style.transform = `rotate(${i}deg)`;
      i++;
    }*/
    const UpdateTime = ()=>{
      //console.log("time");
      let date = new Date(),
      //secToDeg = (date.getSeconds()) ;
      secToDeg =+ 36;
      console.log(secToDeg);
      needle.style.transform = `rotate(${secToDeg}deg)`;
    }
    //setInterval(UpdateTime,1000)
  }
  
</script>

<style>
  #altimeter{
    border: 2px solid grey ;
    position: relative;
    background-color: black;
  }
  .center-point{
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 33px;
    left: 33px;
    z-index: 2;
  }
  
  .alimeter-scale{
    width: 2px;
    height: 70px;
    background-color: white;
    position: absolute;
    bottom: 0px;
    left: 34px;
    transform: rotate(calc(72deg* var(--a)))
  }
  /*
  .hundreds-feets-1{
    transform: rotate(72deg);
  }
  .hundreds-feets-2{
    transform: rotate(144deg);
  }
  .hundreds-feets-3{
    transform: rotate(216deg);
  }
  .hundreds-feets-4{
    transform: rotate(288deg);
  }
  .hundreds-feets-5{
    transform: rotate(360deg);
  }
  */
  #altimeter-hide{
    width: 60px;
    height: 60px;
    background-color: black;
    border-radius: 50%;
    top: 5px;
    left: 5px;
    position: absolute;
    z-index: 1;
    
  }
  .hundred{
    width: 5px;
    height: 60px;
    position: absolute;
    top: 5px;
    left: 32px;
    z-index: 5;
    font-size: 60%;
    transform: rotate(calc(36deg* var(--i)));
  }
  .hundred b{
    color: white;
    display: inline-block;
    transform: rotate(calc(-36deg* var(--i)));
  }

  .needle-wraper{
    width: 30px;
    height: 30px;
    background-color: transparent;
    position: absolute;
    top: 20px;
    left: 20px;
    /* transform: rotate(10deg); */
    z-index: 10;
    
  }
  .primary-needle{
    width: 2px;
    height: 30px;
    position: absolute;
    left: 14px;
    top: -14px;
    background-color: whitesmoke;
    z-index: 10;
  }



</style>


<!--
  .indicadorMainPanel {
  background-color:grey;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
-->

