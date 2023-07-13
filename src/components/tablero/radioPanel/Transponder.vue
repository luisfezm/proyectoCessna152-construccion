<template>
    <div class="transponder">
        <div class="modos">
            <div>

                <label for="mode">Mode:</label>
                <div class="mode-buttons">
                    <button :class="{ active: selectedMode === 'OFF' }" @click="selectedMode = 'OFF'">OFF</button>
                    <button :class="{ active: selectedMode === 'STBY' }" @click="selectedMode = 'STBY'">STBY</button>
                    <button :class="{ active: selectedMode === 'ON' }" @click="selectedMode = 'ON'">ON</button>
                    <button :class="{ active: selectedMode === 'ALT' }" @click="selectedMode = 'ALT'">ALT</button>
                    <button :class="{ active: selectedMode === 'TST' }" @click="selectedMode = 'TST'">TST</button>
                </div>
                
            </div>
            <div>
                
            </div>
        </div>

        <div class="frame">
            <div class="numbers">0,0,0,0</div>  <!--{{ first }},{{ second }},{{ third }},{{ four }}-->
        </div>
  
        <img class="first" src="@/assets/adfKnob.svg" alt="" @click="modifyFirst()" />
        <img class="second" src="@/assets/adfKnob.svg" alt="" @click="modifySecond()"/>
        <img class="third" src="@/assets/adfKnob.svg" alt="" @click="modifyThird()" />
        <img class="four" src="@/assets/adfKnob.svg" alt="" @click="modifyThird()" />
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.transponder{
    background-color: #2d2e31;
    display: flex;
    height: 70px;
    margin-top: -10px;
}

.first {
    height: 20px;
    transform: translateX(-78px) translateY(48px);
}

.second {
    height: 20px;
    transform: translateX(-68px) translateY(48px);
}

.third {
    height: 20px;
    transform: translateX(-56px) translateY(48px);
}
.four {
    height: 20px;
    transform: translateX(-44px) translateY(48px);
}
.numbers {
    position: relative;
    z-index: 2;
    border: 3px solid #000;
    border-radius: 5px;
    color: #223412;
    background-color: #94d457;
    padding: 2px;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 120px;
    letter-spacing: 10px; /* Ajusta el valor según el espacio deseado */

}
.frame {
    position: relative;
    z-index: 1;
    transform: translateY(5px) translateX(45px);
    border: 3px solid #000;
    border-radius: 5px;
    background-color: #393b39e6;
    padding: 2px;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    height: 40px;
}

.mode-buttons button {
    font-size: 6px; 
    width: 20px; 
    height: 15px; 
    font-weight: bold;
    margin-right: 2px;
    margin-left: 3px;
}

label {
    color: white;
    margin-left: 3px;
}
</style>