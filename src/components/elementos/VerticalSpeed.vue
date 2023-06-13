<template> 
    <div class="circular"> 
        
            <div class="imagen" id="img1">
            <div class="arrow">
              <div class="point"></div>
            </div>
        </div>
        
       
        
  
    </div>
</template>

<script>
  export default {}
</script>

<style scoped>



.imagen{
    background-image: url("https://i.ibb.co/s3nQLmZ/bbbbb.png");
    background-size: 100%;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 2;
    
    
}

.point{
    width: 6px;
    height: 6px;
    background-color: black;
    left: -1.5px;
    bottom: 18px;
    position: absolute;
    border-radius: 50%;

}

.arrow{
  width: 2px;
  height:20px;
  background-color: white;
  transform: rotate(90deg);
  margin-left: 39px;
  margin-top: 37px;
  transition: 3s;
  position: absolute;
  transform-origin:top ;
}

.circular{
  /* centrado generico */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50%;
  background-color: rgb(16, 15, 15);
  height: 100%;
  width: 100px;
}   


</style>