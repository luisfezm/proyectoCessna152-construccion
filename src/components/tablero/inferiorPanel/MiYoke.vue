<template>
    <div id="miDiv" class="MiYoke" :class="{ grabbing: isDragging }" @keydown="handleKeyDown" @keyup="handleKeyUp">
        <img ref="image" src="src\assets\img\Yoke.png" :style="{
            transform: `translateY(${currentTranslationY}px) rotate(${currentRotation}deg)`,
            width: '80px',
            height: '70px'
        }" draggable="false" />
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isDragging: false,
            translationMultiplier: 10,
            rotationMultiplier: 10,
            currentTranslationY: 0,
            currentRotation: 0,
            maxTranslationY: 25,
            minTranslationY: -25,
            maxRotation: 90,
            minRotation: -90,
        };
    },
    mounted() {
        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
    },
    beforeDestroy() {
        document.removeEventListener("keydown", this.handleKeyDown);
        document.removeEventListener("keyup", this.handleKeyUp);
    },
    methods: {
        handleKeyDown(event) {
            const key = event.key.toLowerCase();
            const isShiftKey = event.shiftKey;

            switch (key) {
                case "s":
                    this.moveImageUp(isShiftKey);
                    break;
                case "w":
                    this.moveImageDown(isShiftKey);
                    break;
                case "a":
                    this.rotateImageLeft(isShiftKey);
                    break;
                case "d":
                    this.rotateImageRight(isShiftKey);
                    break;
            }
        },
        handleKeyUp() {
            this.resetMovement();
        },
        moveImageUp(isShiftKey) {
            const newTranslationY = this.currentTranslationY - this.translationMultiplier * (isShiftKey ? 2 : 1);
            if (newTranslationY >= this.minTranslationY) {
                this.currentTranslationY = newTranslationY;
                this.updateImageTransform();
            }
        },
        moveImageDown(isShiftKey) {
            const newTranslationY = this.currentTranslationY + this.translationMultiplier * (isShiftKey ? 2 : 1);
            if (newTranslationY <= this.maxTranslationY) {
                this.currentTranslationY = newTranslationY;
                this.updateImageTransform();
            }
        },
        rotateImageLeft(isShiftKey) {
            const newRotation = this.currentRotation - this.rotationMultiplier * (isShiftKey ? 2 : 1);
            if (newRotation >= this.minRotation) {
                this.currentRotation = newRotation;
                this.updateImageTransform();
            }
        },
        rotateImageRight(isShiftKey) {
            const newRotation = this.currentRotation + this.rotationMultiplier * (isShiftKey ? 2 : 1);
            if (newRotation <= this.maxRotation) {
                this.currentRotation = newRotation;
                this.updateImageTransform();
            }
        },
        updateImageTransform() {
            this.$refs.image.style.transform = `translateY(${this.currentTranslationY}px) rotate(${this.currentRotation}deg)`;
        },
        resetMovement() {
            this.currentTranslationY = 0;
            this.currentRotation = 0;
            this.updateImageTransform();
        },
    },
};
</script>
  
<style>
.MiYoke {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(177, 177, 177);
    width: 100%;
    height: 150px;
    border-radius: 5%;
    margin-left: 1%;
    position: relative;
}
</style>
  