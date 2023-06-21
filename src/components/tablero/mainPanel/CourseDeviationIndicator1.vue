<template>
    <div class="cdi">
      
      <div class="cdi-container">
        <div class="course-marker"></div>
      <div class="deviation-marker" ></div>
      </div>
      <div>
        <!--<p>Course: {{ course }}</p>-->
        <!--<p>Deviation: {{ deviation }}%</p>-->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
  };
  </script>
  
  <style scoped>
  .cdi {
    text-align: center;
    margin-top: 5px;
    margin-right: 5px;
  }
  
  
  
  .cdi-container {
    width: 70px;
    height: 70px;
    border: 2px solid #333;
    border-radius: 50%;
    margin-left: 1px;
    margin-top: -2px;
    position: relative;
    background-image: url('https://i.ibb.co/GHdM8K5/cdi.png');
    background-size: cover;
    background-position: center;

  }

  .course-marker{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3px;
    height: 43px;
    background-color: #fff;
   
  }
  .deviation-marker{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 43px;
    height: 3px;
    background-color: #fff;
    
}
  
  
  
  
  
  
  </style> 