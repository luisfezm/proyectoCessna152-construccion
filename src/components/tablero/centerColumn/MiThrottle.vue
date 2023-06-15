<template>
  <div class="indicadorCenterColumnPanel">Throttle</div>
  <div
    class="lever-container"
 
 
    @mousemove="updateAngle"
  >
    <div
      class="lever"
      :style="{transform: 'rotate(' + angle + 'deg)'}"
    />
  </div>
</template>

<script>
  export default {
    props: {
      // eslint-disable-next-line vue/require-default-prop, vue/require-prop-type-constructor
      value: 0 // valor inicial de la palanca
    },
    data() {
      return {
        angle: this.value // ángulo inicial de la palanca
      };
    },
    methods: {
      updateAngle(event) {
        const centerX = this.$el.offsetLeft + this.$el.offsetWidth / 2;
        const centerY = this.$el.offsetTop + this.$el.offsetHeight / 2;
        const radian = Math.atan2(event.clientY - centerY, event.clientX - centerX);
        const degree = radian * (180 / Math.PI) + 180;
        this.angle = degree;
      }
    }
  };
</script>

<style>
.lever-container {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  position: relative;
}

.lever {
  width: 50px;
  height: 10px;
  background-color: rgb(186, 43, 43);
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0% 50%;
}
</style>