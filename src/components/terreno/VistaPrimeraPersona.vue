<template>
  <div class="vistaPP" :style="backgroundImageStyle">
    <button @click="changeBackgroundImage">Change Image</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          'https://w0.peakpx.com/wallpaper/750/101/HD-wallpaper-car-crash-accident-fire-crash-car.jpg', // Imagen 1
          'https://images.unsplash.com/photo-1609086476773-fb09bb9aca18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80', // Imagen 2
          'https://images.unsplash.com/photo-1598188306155-25e400eb5078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', // Imagen 3
        ],
        currentImageIndex: 0, //para saber cual es la actual
        backgroundImageStyle: {
          height: '300px',
          width: '900px',
        },
      }
    },

    methods: {
      changeBackgroundImage() {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.images.length //incrementa el indice de la imagen
        this.backgroundImageStyle.backgroundImage = `url(${
          this.images[this.currentImageIndex]
        })` //cambia la imagen
      },
    },
  }
</script>

<style>
  .vistaPP {
    background-image: url(https://w0.peakpx.com/wallpaper/750/101/HD-wallpaper-car-crash-accident-fire-crash-car.jpg);
  }
</style>
