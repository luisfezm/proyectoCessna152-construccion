<template>
  <div
    id="miDiv"
    class="TrimWheel"
    :class="{ grabbing: isDragging }"
    @mousedown="startDrag"
    @mousemove="handleDrag"
  >
    <img
      ref="image"
      src="@\assets\rectangle.png"
      :style="{
        transform: `translateY(${currentTranslationY}px)`,
        width: '100%',
        height: '10%',
      }"
      draggable="false"
    />
    <div class="title">
      {{ currentTranslationY }}
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        startX: 0,
        startY: 0,
        isDragging: false,
        translationMultiplier: 1,
        lastTranslationY: 0,
        currentTranslationY: 0,
      }
    },
    methods: {
      startDrag(event) {
        event.preventDefault()
        this.startX = event.clientX
        this.startY = event.clientY
        this.isDragging = true
        window.addEventListener('mouseup', this.stopDrag)
      },
      stopDrag() {
        this.isDragging = false
        this.lastTranslationY = this.currentTranslationY
        window.removeEventListener('mouseup', this.stopDrag)
      },
      handleDrag(event) {
        if (this.isDragging) {
          const currentY = event.clientY
          const diffY = currentY - this.startY

          const translationFactor = 1
          let newTranslationY = diffY * translationFactor

          const maxTranslationY = 40
          const minTranslationY = -40

          newTranslationY = Math.max(
            minTranslationY,
            Math.min(maxTranslationY, newTranslationY)
          )

          const nextTranslationY = this.lastTranslationY + newTranslationY
          this.currentTranslationY = Math.max(
            minTranslationY,
            Math.min(maxTranslationY, nextTranslationY)
          )

          this.updateCurrentTranslationY(this.currentTranslationY)

          this.$refs.image.style.transform = `translateY(${this.currentTranslationY}px)`
        }
      },
      ...mapActions(['updateCurrentTranslationY']),
      ...mapActions(['updatePitch']),
    },
    computed: {
      ...mapGetters(['pitch']),
    },
    watch: {
      currentTranslationY(newValue) {
        this.updatePitch(newValue)
      },
    },
  }
</script>

<style scoped>
  .TrimWheel {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(177, 177, 177);
    width: 50%;
    height: 80%;
    max-height: 80px;
    border-radius: 5%;
    margin: auto;
    position: relative;

    cursor: auto;
  }

  .TrimWheel.grabbing {
    cursor: grabbing;
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: bold;
    color: white;
  }
</style>
