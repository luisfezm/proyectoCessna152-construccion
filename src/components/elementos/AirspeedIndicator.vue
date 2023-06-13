<template>
    <div class="circular">
      <div class="airspeed-indicator">
        <div class="needle"></div>
      </div>
    </div>
  </template>

<script>
export default {
  methods: {
  },
  mounted() {
    const needle = document.querySelector(".needle");

    function changeSpeed() {
      const randomSpeed = Math.floor(Math.random() * 161);
      const degrees = (randomSpeed / 160) * 180 - 90;
      needle.style.transform = `rotate(${degrees}deg)`;
    }

    setInterval(changeSpeed, 2000);
  }
};
</script>


<style scoped>
.circular {
  /* centrado generico */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50%;
  background-color: rgb(16, 15, 15);
  height: 100%;
  width: 100px;
  height: 100hv;
  width: 6vw;
  margin-left: 1%;
  margin-top: 1%;
}

.airspeed-indicator {
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* Mantiene una relación de aspecto cuadrada */
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 auto;
  background-image: url("https://i.ibb.co/3M0XNSx/speedindicator-Rojo.png");
  background-size: cover;
  background-position: center;
  
}

.needle {
  position: absolute;
  top: 50%;
  left: 48%;
  transform-origin: 50% 0%;
  width: 4%;
  height: 35%;
  background-color: red;
  transition: transform 0.3s;
}

.needle::before {
  content: "";
  position: absolute;
  bottom: -30%;
  left: -1%;
  width: 10%;
  height: 0px;
  border-style: solid;
  border-width: 0 6% 10% 6%;
  border-color: transparent transparent red transparent;
  transform: rotate(180deg);
}
</style>