<template>
  <div id="altimeter" class="indicadorMainPanel">
    <div class="center-point" />
    <!--     
    <div clas="central-hider" id="altimeter-hide"></div>
 
    <div class="alimeter-scale hundreds-feets-1" style="--a:1"></div>
    <div class="alimeter-scale hundreds-feets-2" style="--a:2"></div>
    <div class="alimeter-scale hundreds-feets-3" style="--a:3"></div>
    <div class="alimeter-scale hundreds-feets-4" style="--a:4"></div>
    <div class="alimeter-scale hundreds-feets-5" style="--a:5"></div>
    
     
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
    -->
    <div class="needle-wraper pn">
      <div class="primary-needle" />
    </div>
    <div class="needle-wraper sn">
      <div class="secondary-needle" />
    </div>
    <div class="needle-wraper tn">
      <div class="tertiary-needle" />
    </div>
  </div>
</template>

<script>
  import store from '@/store'

  // const altimeter = store.modules.altimeter;
  export default {
    data() {
      return {}
    },
    mounted() {
      setInterval(() => {
        store.dispatch('updateVelocidadAltimeter')
        store.dispatch('cambiaUnidadVelocidadPpmToPps')
        store.dispatch('updateAltimeter')

        let primaryNeedle = document.querySelector('.pn')
        let senconaryNeedle = document.querySelector('.sn')
        let tertiaryNeedle = document.querySelector('.tn')

        //variable que modifica la aguja primaria (centenas de pies 1 --> 100)
        // let degPn = this.getDeegresPrimary(6)
        let degPn = store.getters.getPrimaryDegrees
        primaryNeedle.style.transform = `rotate(${degPn}deg)`

        //variable que modifica la aguja secundaria (miles de pies  1 --> 1 000)
        // let degSn = this.getDeegresSecondary(6)
        let degSn = store.getters.getSecondaryDegrees

        senconaryNeedle.style.transform = `rotate(${degSn}deg)`
        //variable que modifica la aguja terciaria (decenas de miles 1--> 10 000)
        // let degTn = this.getDeegresTerciary(6)
        let degTn = store.getters.getTerciaryDegrees

        tertiaryNeedle.style.transform = `rotate(${degTn}deg)`
      }, 1000)
    },
  }
</script>

<style>
  #altimeter {
    border: 2px solid grey;
    position: relative;
    background-image: url(https://i.ibb.co/f2TgqSJ/alt1.png);
    background-size: cover;
    top: 0px;
    left: 15%;
    width: 82px;
    height: 82px;
  }
  .center-point {
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 37px;
    left: 37px;
    z-index: 20;
  }
  /*  
  .alimeter-scale{
    width: 2px;
    height: 70px;
    background-color: white;
    position: absolute;
    bottom: 0px;
    left: 34px;
    transform: rotate(calc(72deg* var(--a)))
  }
  
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
*/
  .needle-wraper {
    width: 30px;
    height: 30px;
    background-color: transparent;
    position: absolute;
    top: 24px;
    left: 25px;
    /* transform: rotate(10deg); */
    z-index: 10;
  }
  .primary-needle {
    width: 2px;
    height: 24px;
    position: absolute;
    left: 14px;
    top: -10px;
    background-color: whitesmoke;
    z-index: 1;
  }
  .secondary-needle {
    width: 3px;
    height: 14px;
    position: absolute;
    left: 13px;
    top: 1px;
    background-color: whitesmoke;
    z-index: 1;
  }
  .tertiary-needle {
    width: 0.5px;
    height: 25px;
    position: absolute;
    left: 15px;
    top: -9px;
    background-color: whitesmoke;
    z-index: 1;
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
