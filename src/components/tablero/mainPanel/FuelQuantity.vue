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
        

    }
</script>

<style scoped>




.img{
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
    width: 2px;
    height: 20px;
    background-color: white;
    transform: rotate(137deg); /*137 hasta 220*/
    margin-left: 21%;
    margin-top: 38%;
    transition: 3s;
    position: absolute;
    transform-origin: top;

}

.point-right{
    width: 6px;
    height: 6px;
    background-color: transparent;
    left: -1.5px;
    bottom: 18px;
    position: absolute;
    border-radius: 50%;
}

#left{
    width: 2px;
    height: 20px;
    background-color: white;
    transform: rotate(150deg);
    margin-left: 76%;
    margin-top: 38%;
    transition: 3s;
    position: absolute;
    transform-origin: top;

}

.point-left{
    width: 6px;
    height: 6px;
    background-color: transparent;
    left: -1.5px;
    bottom: 18px;
    position: absolute;
    border-radius: 50%;

}

</style>