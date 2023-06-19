<template>
  <div class="back">
    <img
      id="medidas"
      class="rotar"
      src="src/assets/adf.svg"
      style="height: 90px"
      alt="test"
    />
    <img
      id="agujaImg"
      class="aguja"
      :style="{ transform: 'rotate(' + angulo + 'deg)' }"
      src="src/assets/arrow.svg"
      style="height: 45px"
      alt="aguja"
    />
  </div>
</template>

<script>
  export default {
    props: {
      angulo: {
        type: Number,
        required: true,
      },
    },
  }
</script>

<style>
  .back {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .aguja {
    position: absolute;
  }
</style>
