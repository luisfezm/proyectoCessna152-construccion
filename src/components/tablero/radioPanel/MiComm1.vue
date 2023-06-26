<template>
  <div class="panel-radio">
    <div class="controles">
      <div class="grupo-com">
        <div class="label">COM1:</div>
        <div class="input-wrapper">
          <input type="text" v-model="com1" class="input-frecuencia" @input="handleCom1Change" />
          <vue-slider v-model="com1" :min="108.0" :max="137.0" :step="0.025" class="slider" />
        </div>
      </div>
      <div class="grupo-com">
        <div class="label">COM2:</div>
        <div class="input-wrapper">
          <input type="text" v-model="com2" class="input-frecuencia" @input="handleCom2Change" />
          <vue-slider v-model="com2" :min="108.0" :max="137.0" :step="0.025" class="slider" />
        </div>
      </div>
      <div class="grupo-nav">
        <div class="label">NAV1:</div>
        <div class="input-wrapper">
          <input type="text" v-model="nav1" class="input-frecuencia" @input="handleNav1Change" />
          <vue-slider v-model="nav1" :min="108.0" :max="117.95" :step="0.025" class="slider" />
        </div>
      </div>
      <div class="grupo-nav">
        <div class="label">NAV2:</div>
        <div class="input-wrapper">
          <input type="text" v-model="nav2" class="input-frecuencia" @input="handleNav2Change" />
          <vue-slider v-model="nav2" :min="108.0" :max="117.95" :step="0.025" class="slider" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueSlider from 'vue-slider-component';
  import 'vue-slider-component/theme/default.css';

  export default {
    components: {
      VueSlider,
    },
    data() {
      return {
        com1: 118.1,
        com2: 123.4,
        nav1: 108.8,
        nav2: 115.0,
      };
    },
    methods: {
      handleCom1Change(value) {
        this.com1 = parseFloat(value);
      },
      handleCom2Change(value) {
        this.com2 = parseFloat(value);
      },
      handleNav1Change(value) {
        this.nav1 = parseFloat(value);
      },
      handleNav2Change(value) {
        this.nav2 = parseFloat(value);
      },
    },
    watch: {
      com1(newVal) {
        this.com1 = Math.max(108.0, Math.min(parseFloat(newVal), 137.0));
      },
      com2(newVal) {
        this.com2 = Math.max(108.0, Math.min(parseFloat(newVal), 137.0));
      },
      nav1(newVal) {
        this.nav1 = Math.max(108.0, Math.min(parseFloat(newVal), 117.95));
      },
      nav2(newVal) {
        this.nav2 = Math.max(108.0, Math.min(parseFloat(newVal), 117.95));
      },
    },
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
  color: rgb(234, 109, 32);
}

.label {
  width: 60px;
  font-weight: bold;
}

.input-wrapper {
  display: flex;
  align-items: center;
}

.input-frecuencia {
  padding: 5px;
  width: 80px;
  border: 1px solid #ea8737;
  border-radius: 4px;
}

.slider {
  margin-left: 10px;
  width: 180px;
}
</style>
