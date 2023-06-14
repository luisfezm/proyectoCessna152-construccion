<template>
  <div class="indicadorMainPanel">Airspeed Indicator</div>
  <div
    style="position: relative; display: inline-block; text-align: center"
    class="imagenAirspeedIndicator"
  >
    <img
      id="imagenAirspeed"
      style="height: 25%; width: 100%"
      src="../../../assets/img/Airspeed_Indicator.png"
    />
    <div id="whiteBox" />
  </div>
</template>

<script>
  export default {}
</script>
<style scoped>
  #imagenAirspeedIndicator {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #whiteBox {
    background: rgb(255, 255, 255);

    position: absolute;
    background-color: red;
    top: 0;
    left: 0;
    right: 0;
    margin: 35%;
    width: 26%;
    padding: 2%;
    transform: rotate(deg);
  }
</style>
