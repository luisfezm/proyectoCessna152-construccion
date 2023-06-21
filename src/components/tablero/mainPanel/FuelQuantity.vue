<template>
    <div class="img">
        <div class="needle" id="right">
            <div class="point-right"></div>
        </div>
        <div class="needle" id="left">
            <div class="point-left"></div>
        </div>

    </div>
</template>

<script>
    export default {
            mounted(){
                setInterval(() => {
                    let gasoline_1 = document.getElementById('right')  /*gasolina 1 es el estanque 1 de gasolina */
                    let gasoline_2 = document.getElementById('left') /*gasolina 2 es el estanque 2 de gasolina 2 */
                    /*modificacion de la rotacion de las agujas */
                    gasoline_1.style.transform = `rotate(${this.$store.getters.getStateGasoline_1}deg)`  
                    gasoline_2.style.transform = `rotate(${this.$store.getters.getStateGasoline_2}deg)`   
                }, 1000)
                /*se ejecuta siempre cada 1 segundo de intervalo, aunque se puede modificar el tiempo */
            },
    }
</script>

<style scoped>




.img{
    /*contenedor*/
    background-image: url('https://i.ibb.co/N7wm9J6/Fuel-Quantity.png');
    width:100px;
    height:50px;
    background-size: 100%, 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 40px;
    position: relative;
}

#right{
    /*aguja derecha */
    width: 2px;
    height: 20px;
    background-color: white;
    transform: rotate(220deg); /*137 hasta 220*/
    margin-left: 21%;
    margin-top: 38%;
    transition: 3s;
    position: absolute;
    transform-origin: top;

}

.point-right{
    /*punto aguja derecha*/
    width: 6px;
    height: 6px;
    background-color: transparent;
    left: -1.5px;
    bottom: 18px;
    position: absolute;
    border-radius: 50%;
}

#left{
    /*aguja izquierda*/
    width: 2px;
    height: 20px;
    background-color: white;
    transform: rotate(220deg);
    margin-left: 76%;
    margin-top: 38%;
    transition: 3s;
    position: absolute;
    transform-origin: top;

}

.point-left{
    /*punto izquierdo */
    width: 6px;
    height: 6px;
    background-color: transparent;
    left: -1.5px;
    bottom: 18px;
    position: absolute;
    border-radius: 50%;

}

</style>