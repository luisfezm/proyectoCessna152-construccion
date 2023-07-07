<template>
  <div class="container">
    <img
      id="medidas"
      class="rotar"
      src="@/assets/adf.svg"
      style="height: 90px"
      alt="test"
    />
    <img
      id="agujaImg"
      class="aguja"
      :style="{ transform: 'rotate(' + angle + 'deg)' }"
      src="@/assets/arrow.svg"
      style="height: 45px"
      alt="aguja"
    />
  </div>
</template>

<script>
  export default {
    props: {
      angle: {
        type: Number,
        required: true,
      },
    },
  }
</script>

<style scoped>
  .container {
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
