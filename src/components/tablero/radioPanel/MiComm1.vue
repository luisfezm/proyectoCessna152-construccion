<template>
  <div class="indicadorRadioPanel">
    <div class="pantalla">
      <div class="numbers numbers1">{{ first }},{{ second }}</div>
      <div class="numbers numbers2">{{ first }},{{ second }}</div>     
    </div>

    <div class="letras">
      <div class="use"><h5 class="h5">USE</h5></div>
      <div class="stby"><h5 class="h5">STBY</h5></div>
    </div>
  
    <div class="botones">
      <div>
        <button :class="{'btn-on': isOn, 'btn-off': !isOn}" @click="toggleButton" style="width: 23px;">
          {{ isOn ? 'On' : 'Off' }}
        </button>
      </div>

      <div>
        <button class="btn-flecha" onclick="">
          <img class="flecha" src="@/assets/doble-flecha.png" alt="Texto alternativo" />
        </button>
      </div>

      <div class="buttons">
        <button class="b" @click="decrementIntegerPart">-</button>
        <button class="b" @click="incrementIntegerPart">+</button>
        <button class="b" @click="decrementDecimalPart">-</button>
        <button class="b" @click="incrementDecimalPart">+</button>
      </div>
    </div>
  </div>
</template>
 
<script>
  export default {
    data() {
      return {
        isOn: false
      };
    },
    methods: {
      toggleButton() {
        this.isOn = !this.isOn;
      }
    }
  };
</script>

 <style scoped>

 .indicadorRadioPanel{
  background-color: #2d2e31;
  display: flex;
  flex-direction: column;
  height: 80px;
 }
.pantalla{
  display: flex;
}
.numbers {
  margin-top: -10px;
  margin-left: -12px;
  width: 68px;
  border: 3px solid #000;
  color: #FF0000;
  background-color: #000;
  padding: 2px;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 0px;
  border: 1px solid rgb(39, 39, 39);
}
.letras{
  position: absolute;
  background-color: #000;
  border: 3px solid #000;
  display: flex;
  margin-top: 14px;
  margin-left: -12px;
  width: 124px;
  border-bottom: 1px solid rgb(39, 39, 39);
  border-left: 1px solid rgb(39, 39, 39);
  border-right: 1px solid rgb(39, 39, 39);
}
.use{
  margin-left: 20px;
  margin-right: 50px;  
}
.h5{
  color: aliceblue;
  font-size: 8px;
}

.botones {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.buttons{
  position: absolute;
  margin-left: 63px;
}
.b{
  margin-right: 3px;
}
.flecha{
  height: 10px;
  width: 12px;
}
.btn-flecha {
  margin-left: -70px; 
}
.btn-on {
  background-color: green;
  color: white;
}

.btn-off {
  background-color: red;
  color: white;
}

</style>
