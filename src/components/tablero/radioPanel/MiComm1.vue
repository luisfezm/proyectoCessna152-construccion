<template>
  <div class="panel-radio">
    
    <div class="controles">
      <div class="grupo-com">
        <div :style="{ color: com1TextColor }">COM1: {{ com1 }} </div> 
        <input type="text" v-model="com1" class="input-frecuencia">
      </div>
      <div class="grupo-com">
        <div :style="{ color: com1TextColor }">COM2: {{ com2 }} </div> 
        <input type="text" v-model="com2" class="input-frecuencia">
      </div>
      <div class="grupo-nav">
        <div :style="{ color: com1TextColor }">NAV1: {{ nav1 }} </div> 
        <input type="text" v-model="nav1" class="input-frecuencia">
      </div>
      <div class="grupo-nav">
        <div :style="{ color: com1TextColor }">NAV2: {{ nav2 }} </div>
        <input type="text" v-model="nav2" class="input-frecuencia">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        com1: '118.1',
        com2: '123.4',
        nav1: '108.8',
        nav2: '115.0',
        com1TextColor: 'orange',
      };
    }
  };
</script>

<style>
.panel-radio {
  width: 400px;
  padding: 10px;
  background-color: #949393;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;
}

.controles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.grupo-com,
.grupo-nav {
  display: flex;
  align-items: center;
}

.label {
  width: 50px;
  font-weight: bold;
  color: white;
}

.input-frecuencia {
  padding: 5px;
  width: 80px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>