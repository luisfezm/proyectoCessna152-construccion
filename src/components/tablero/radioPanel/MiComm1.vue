<template>
  <div class="indicadorRadioPanel">
    <div class="pantalla">
      <div class="numbers numbers1">{{ first1 }},{{ second1 }}</div>
      <div class="numbers numbers2">{{ first2 }},{{ second2 }}</div>
    </div>

    <div class="letras">
      <div class="use">
        <h5 class="h5">USE</h5>
      </div>
      <div class="stby">
        <h5 class="h5">STBY</h5>
      </div>
    </div>

    <div class="botones">
      <div>
        <button
          :class="{ 'btn-on': isOn, 'btn-off': !isOn }"
          style="width: 23px"
          @click="toggleButton"
        >
          {{ isOn ? 'On' : 'Off' }}
        </button>
      </div>

      <div>
        <button class="btn-flecha" @click="swapValues">
          <img
            class="flecha"
            src="@/assets/doble-flecha.png"
            alt="Texto alternativo"
          />
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
        isOn: false,
        first1: null,
        second1: null,
        first2: null,
        second2: null,
        barra: '-',
      }
    },
    methods: {
      toggleButton() {
        this.isOn = !this.isOn
        this.checkOnVar()
      },
      decrementIntegerPart() {
        if (this.isOn) {
          this.first2 -= 1
          this.first2 %= 10
        } else {
          this.first1 = null
        }
      },
      incrementIntegerPart() {
        if (this.isOn) {
          this.first2 += 1
          this.first2 %= 10
        } else {
          this.first1 = null
        }
      },

      checkOnVar() {
        if (this.isOn) {
          this.first1 = 0
          this.first2 = 0
          this.second1 = 0
          this.second2 = 0
        } else {
          this.first1 = null
          this.first2 = null
          this.second1 = null
          this.second2 = null
        }
      },

      decrementDecimalPart() {
        if (this.isOn) {
          this.second2 -= 1
        } else {
          this.second2 = null
        }
      },
      incrementDecimalPart() {
        if (this.isOn) {
          this.second2 += 1
        } else {
          this.second2 = null
        }
      },
      swapValues() {
        var aux = this.first1
        this.first1 = this.first2
        this.first2 = aux
        aux = this.second1
        this.second1 = this.second2
        this.second2 = aux
      },
    },
  }
</script>

<style scoped>
  .indicadorRadioPanel {
    background-color: #2d2e31;
    display: flex;
    flex-direction: column;
    height: 80px;
  }
  .pantalla {
    display: flex;
  }
  .numbers {
    margin-top: -10px;
    margin-left: -12px;
    width: 68px;
    border: 3px solid #000;
    color: #ff0000;
    background-color: #000;
    padding: 2px;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 0px;
    border: 1px solid rgb(39, 39, 39);
  }
  .letras {
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
  .use {
    margin-left: 20px;
    margin-right: 50px;
  }
  .h5 {
    color: aliceblue;
    font-size: 8px;
  }

  .botones {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .buttons {
    position: absolute;
    margin-left: 63px;
  }
  .b {
    margin-right: 3px;
  }
  .flecha {
    height: 10px;
    width: 12px;
  }
  .btn-flecha {
    margin-left: -600%;
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
